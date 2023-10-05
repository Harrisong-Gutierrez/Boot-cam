import { useQuery } from '@apollo/client';
import Link from 'next/link';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';
import { GET_EPISODES } from '../../graphql/episodes';
import Card from '../Card';
import convertTime from '../../utils';
import { addFavorite, removeFavorite } from '../../redux/action/actions';

const EpisodesList = ({ searchName }) => {
  const dispatch = useDispatch();
  const favoriteEpisodes = useSelector((state) => state.favorites.episodes);
  const [pageNumber, setPageNumber] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [allEpisodes, setAllEpisodes] = useState([]);
  const { loading, error, data, fetchMore } = useQuery(GET_EPISODES, {
    variables: {
      name: searchName || null,
      page: pageNumber,
    },
  });

  const loadMore = () => {
    const nextPage = pageNumber + 1;
    fetchMore({
      variables: {
        name: searchName || null,
        page: nextPage,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult || fetchMoreResult.episodes.results.length === 0) {
          setHasMore(false);
          return prev;
        }
        setPageNumber(nextPage);
        setAllEpisodes([...allEpisodes, ...fetchMoreResult.episodes.results]);
        return prev;
      },
    });
  };
  const generateEpisodeCards = () => {
    const episodesToRender =
      allEpisodes.length > 0 ? allEpisodes : data ? data.episodes.results : [];
    if (episodesToRender.length > 0) {
      return episodesToRender.map((episode, index) => (
        <Link href={`/Episode/${episode.id}`} key={episode.id}>
          <Card
            key={episode.id}
            name={episode.name}
            src={episode.characters[index % episode.characters.length]?.image}
            alt={episode.name}
            airDate={episode.air_date}
            episode={episode.episode}
            created={convertTime(episode.created)}
            onFavoriteClick={() => {
              const isFavorite = favoriteEpisodes.some(
                (favCharacter) => favCharacter.id === episode.id,
              );
              if (isFavorite) {
                dispatch(removeFavorite('episodes', episode));
              } else {
                dispatch(addFavorite('episodes', episode));
              }
            }}
          />
        </Link>
      ));
    }
    return <p>No character data available.</p>;
  };

  return (
    <InfiniteScroll
      className="card"
      dataLength={allEpisodes.length}
      next={loadMore}
      hasMore={hasMore}
      loader={<p>Loading more...</p>}
    >
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {generateEpisodeCards()}
    </InfiniteScroll>
  );
};

export default EpisodesList;
