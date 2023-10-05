import { gql } from '@apollo/client';

export const GET_EPISODES = gql`
  query GetEpisodes($name: String, $page: Int) {
    episodes(page: $page, filter: { name: $name }) {
      results {
        id
        name
        air_date
        episode
        created
        characters {
          image
        }
      }
    }
  }
`;

export const GET_EPISODES_BY_ID = gql`
  query GetEpisodesByID($id: ID!) {
    episode(id: $id) {
      id
      name
      air_date
      episode
      created
      characters {
        image
      }
    }
  }
`;
