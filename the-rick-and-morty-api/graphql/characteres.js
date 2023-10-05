import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
query GetCharacters($name: String, $page: Int) {
  characters(page: $page, filter: { name: $name }) {
    results {
      id
      image
      name
      species
      created
    }
  }
}
`;

export const GET_CHARACTER_BY_ID = gql`
  query GetCharacterByID($id: ID!) {
    character(id: $id) {
      id
      image
      name
      species
      created
    }
  }
`;
