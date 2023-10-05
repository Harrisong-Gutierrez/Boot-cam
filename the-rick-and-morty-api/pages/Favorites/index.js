import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Card';
import Layout from '../../components/Layout';
import convertTime from '../../utils';
import {  removeFavorite } from '../../redux/action/actions';

const Favorites = () => {
 

  const dispatch = useDispatch();
  const favoriteCharacteres = useSelector(
    (state) => state.favorites.characters,
  );
  const favoriteEpisodes = useSelector((state) => state.favorites.episodes);
  const favoriteLocations = useSelector((state) => state.favorites.locations);

  return (
    <Layout>
      <div className="Characters-gap" />
      <div className="card">
        {favoriteCharacteres.length === 0 ? (
          <p>No character favorites to display.</p>
        ) : (
          favoriteCharacteres.map((favorite) => (
            <Card
              key={favorite.id}
              src={favorite.image}
              alt={favorite.name}
              name={favorite.name}
              species={favorite.species}
              created={convertTime(favorite.created)}
              onFavoriteClick={() => {
                const isFavorite = favoriteCharacteres.some(
                  (favCharacter) => favCharacter.id === favorite.id,
                );
                if (isFavorite) {
                  dispatch(removeFavorite('characters', favorite));
                }
              }}
            />
          ))
        )}
      </div>
      <div className="card">
        {favoriteEpisodes.length === 0 ? (
          <p>No episode favorites to display.</p>
        ) : (
          favoriteEpisodes.map((favorite, index) => (
            <Card
              key={favorite.id}
              src={
                favorite.characters[index % favorite.characters.length]?.image
              }
              alt={favorite.name}
              name={favorite.name}
              airDate={favorite.air_date}
              episode={favorite.episode}
              created={convertTime(favorite.created)}
              onFavoriteClick={() => {
                const isFavorite = favoriteEpisodes.some(
                  (favCharacter) => favCharacter.id === favorite.id,
                );
                if (isFavorite) {
                  dispatch(removeFavorite('episodes', favorite));
                } 
              }}
            />
          ))
        )}
      </div>
      <div className="card">
        {favoriteLocations.length === 0 ? (
          <p>No location favorites to display.</p>
        ) : (
          favoriteLocations.map((favorite, index) => (
            <Card
              key={favorite.id}
              src={favorite.residents[index % favorite.residents.length]?.image}
              alt={favorite.name}
              name={favorite.name}
              dimension={favorite.dimension}
              type={favorite.type}
              created={convertTime(favorite.created)}
              onFavoriteClick={() => {
                const isFavorite = favoriteLocations.some(
                  (favLocation) => favLocation.id === favorite.id,
                );
                if (isFavorite) {
                  dispatch(removeFavorite('locations', favorite));
                }
              }}
            />
          ))
        )}
      </div>
    </Layout>
  );
};

export default Favorites;
