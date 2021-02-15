import React, { useState } from "react";
import { graphql } from "react-apollo";
import { getShipsQuery } from "../queries/queries.js";
import RocketDetails from './rocketDetails.js';


const RocketList = ({ data }) => {
  const [selected, setSelected] = useState(null)
  return (
    <div>
      {data.loading ? (
        <div>loading...</div>
      ) : (
        data.rockets.map((rocket) => <p onClick={(e) => setSelected(rocket)} key={rocket.id}>{rocket.name}</p>)
      )}
      <br></br>
      <RocketDetails rocketID={selected} /> 

    </div>
  );
};

export default graphql(getShipsQuery)(RocketList);
