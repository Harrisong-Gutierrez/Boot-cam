import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { GET_CHARACTER_BY_ID } from '../../graphql/characteres';
import Card from '../../components/Card';
import Layout from '../../components/Layout';
import convertTime from '../../utils';
import { addFavorite, removeFavorite } from '../../redux/action/actions';

const UnicItem = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const favoriteCharacteres = useSelector(
    (state) => state.favorites.characters,
  );

  const { loading, error, data } = useQuery(GET_CHARACTER_BY_ID, {
    variables: {
      id,
    },
  });

  const generateCharacterCard = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    if (data && data.character) {
      const { character } = data;
      return (
        <Card
          key={character.id}
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
      );
    }
    return <p>No character data available.</p>;
  };

  return (
    <Layout>
      <div className="Characters-gap" />
      <div className="card">{generateCharacterCard()}</div>
    </Layout>
  );
};

export default UnicItem;
