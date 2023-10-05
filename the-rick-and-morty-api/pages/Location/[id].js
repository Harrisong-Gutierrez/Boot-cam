import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { GET_LOCATIONS_BY_ID } from '../../graphql/locations';
import Card from '../../components/Card';
import Layout from '../../components/Layout';
import convertTime from '../../utils';
import { addFavorite, removeFavorite } from '../../redux/action/actions';

const UnicItem = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const favoriteLocations = useSelector((state) => state.favorites.locations);
  const { loading, error, data } = useQuery(GET_LOCATIONS_BY_ID, {
    variables: {
      id,
    },
  });

  const generateLocationsCard = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    if (data && data.location) {
      const character =
        data.location.residents[data.index % data.location.residents.length] ||
        data.location.residents[id];

      if (character) {
        const { location } = data;

        return (
          <Card
            key={location.id}
            name={location.name}
            src={character.image}
            alt={location.name}
            dimension={location.dimension}
            type={location.type}
            created={convertTime(location.created)}
            onFavoriteClick={() => {
              const isFavorite = favoriteLocations.some(
                (favLocation) => favLocation.id === location.id,
              );
              if (isFavorite) {
                dispatch(removeFavorite('locations', location));
              } else {
                dispatch(addFavorite('locations', location));
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
      <div className="card">{generateLocationsCard()}</div>
    </Layout>
  );
};

export default UnicItem;
