import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';
import InfiniteScroll from 'react-infinite-scroll-component';
import Link from 'next/link';
import { GET_CHARACTERS } from '../../graphql/characteres';
import Card from '../Card';
import convertTime from '../../utils';
import { addFavorite, removeFavorite } from '../../redux/action/actions';

const CharacterList = ({ searchName }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const dispatch = useDispatch();
  const favoriteCharacteres = useSelector(
    (state) => state.favorites.characters,
  );

  const [hasMore, setHasMore] = useState(true);
  const [allCharacters, setAllCharacters] = useState([]);
  const { loading, error, data, fetchMore } = useQuery(GET_CHARACTERS, {
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
        if (
          !fetchMoreResult ||
          fetchMoreResult.characters.results.length === 0
        ) {
          setHasMore(false);
          return prev;
        }
        setPageNumber(nextPage);
        setAllCharacters([
          ...allCharacters,
          ...fetchMoreResult.characters.results,
        ]);
        return prev;
      },
    });
  };
  const generateCharacterCards = () => {
    const charactersToRender =
      allCharacters.length > 0 ? allCharacters : data?.characters?.results;

    if (charactersToRender?.length > 0) {
      return charactersToRender.map((character) => (
        <Link href={`/Character/${character.id}`} key={character.id}>
          <Card
            src={character.image}
            alt={character.name}
            name={character.name}
            species={character.species}
            created={convertTime(character.created)}
            onFavoriteClick={() => {
              const isFavorite = favoriteCharacteres.some(
                (favCharacter) => favCharacter.id === character.id,
              );
              if (isFavorite) {
                dispatch(removeFavorite('characters', character));
              } else {
                dispatch(addFavorite('characters', character));
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
      dataLength={allCharacters.length}
      next={loadMore}
      hasMore={hasMore}
      loader={<p>Loading more...</p>}
    >
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {generateCharacterCards()}
    </InfiniteScroll>
  );
};

export default CharacterList;
