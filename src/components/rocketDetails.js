import React from "react";
import { graphql } from "react-apollo";
import { getRocketQuery } from "../queries/queries.js";

const RocketDetails = (props) => {
  const rocket = props.data.variables
  console.log({rocket})
  return (
    <div>
      {rocket.id ? (
        <div>
          <p>Name: {rocket.id.name}</p>
          <p>Boosters: {rocket.id.boosters}</p>
          <p>Company: {rocket.id.company}</p>


        </div>

      ) : (
        <p>How to get to the moon?</p>
      )}
    </div>
  );
};

export default graphql(getRocketQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.rocketID
      },
    };
  },
})(RocketDetails);
