import React from "react";
import { graphql } from "react-apollo";
import { getRocketQuery } from "../queries/queries.js";

const RocketPreview = (props) => {
  <div>
    <h2>Rocket</h2>
  </div>;
};

export default graphql(getRocketQuery)(RocketPreview);
