import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { GET_EPISODES_BY_ID } from '../../graphql/episodes';
import Card from '../../components/Card';
import Layout from '../../components/Layout';
import convertTime from '../../utils';
import { addFavorite, removeFavorite } from '../../redux/action/actions';

const UnicItem = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const favoriteEpisodes = useSelector((state) => state.favorites.episodes);
  const { loading, error, data } = useQuery(GET_EPISODES_BY_ID, {
    variables: {
      id,
    },
  });

  const generateEpisodeCard = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    if (data && data.episode) {
      const character =
        data.episode.characters[data.index % data.episode.characters.length] ||
        data.episode.characters[id];

      if (character) {
        const { episode } = data;

        return (
          <Card
            key={episode.id}
            name={episode.name}
            src={character.image}
            alt={episode.name}
            airDate={episode.air_date}
            episode={episode.episode}
            created={convertTime(episode.created)}
            onFavoriteClick={() => {
              const isFavorite = favoriteEpisodes.some(
                (favEpisode) => favEpisode.id === episode.id,
              );
              if (isFavorite) {
                dispatch(removeFavorite('episodes', episode));
              } else {
                dispatch(addFavorite('episodes', episode));
              }
            }}
          />
        );
      }
    }
    return <p>No character data available.</p>;
  };

  return (
    <Layout>
      <div className="Characters-gap" />
      <div className="card">{generateEpisodeCard()}</div>
    </Layout>
  );
};

export default UnicItem;
