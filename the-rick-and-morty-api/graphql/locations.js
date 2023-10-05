import { gql } from '@apollo/client';

export const GET_LOCATIONS = gql`
  query GetLocations($name: String, $page: Int) {
    locations(page: $page, filter: { name: $name }) {
      results {
        id
        name
        dimension
        type
        residents {
          image
        }
      }
    }
  }
`;

export const GET_LOCATIONS_BY_ID = gql`
  query GetLocationsByID($id: ID!) {
    location(id: $id) {
      id
      name
      dimension
      type
      residents {
        image
      }
    }
  }
`;
