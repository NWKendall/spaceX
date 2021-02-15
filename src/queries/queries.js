import { gql } from "apollo-boost";

export const getShipsQuery = gql`
  {
    rockets(limit: 10) {
      id
      boosters
      company
      diameter {
        meters
      }
      name
    }
  }
`;


export const getRocketQuery = gql`
  query($id: ID){
    rocket(id: $id){
      id
      name
      wikipedia
      active
      boosters
      cost_per_launch
      country
      description
    }
  }
`;

