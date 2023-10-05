import { useQuery } from '@apollo/client';
import Link from 'next/link';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { GET_LOCATIONS } from '../../graphql/locations';
import Card from '../Card';
import { addFavorite, removeFavorite } from '../../redux/action/actions';

const LocationsList = ({ searchName }) => {
  const dispatch = useDispatch();
  const favoriteLocations = useSelector((state) => state.favorites.locations);
  const [pageNumber, setPageNumber] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [allLocation, setAllLocation] = useState([]);
  const { loading, error, data, fetchMore } = useQuery(GET_LOCATIONS, {
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
          fetchMoreResult.locations.results.length === 0
        ) {
          setHasMore(false);
          return prev;
        }
        setPageNumber(nextPage);
        setAllLocation([...allLocation, ...fetchMoreResult.locations.results]);
        return prev;
      },
    });
  };

  const generateLocationCards = () => {
    const locationsToRender =
      allLocation.length > 0 ? allLocation : data ? data.locations.results : [];
    if (locationsToRender.length > 0) {
      return locationsToRender.map((location, index) => (
        <Link href={`/Location/${location.id}`}>
          <Card
            key={location.id}
            name={location.name}
            src={location.residents[index % location.residents.length]?.image}
            alt={location.name}
            dimension={location.dimension}
            type={location.type}
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
        </Link>
      ));
    }
    return <p>No Episode data available.</p>;
  };

  return (
    <InfiniteScroll
      className="card"
      dataLength={allLocation.length}
      next={loadMore}
      hasMore={hasMore}
      loader={<p>Loading more...</p>}
    >
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {generateLocationCards()}
    </InfiniteScroll>
  );
};

export default LocationsList;
