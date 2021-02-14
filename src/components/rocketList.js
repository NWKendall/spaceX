import React from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getShipsQuery = gql`
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

const RocketList = ({ data }) => {
  console.log(data)
  return (
    <div>
      {data.loading ? (
        <div>loading...</div>
      ) : (
        data.rockets.map((rocket) => <p key={rocket.id}>{rocket.name}</p>)
      )}
    </div>
  );
};

export default graphql(getShipsQuery)(RocketList);
