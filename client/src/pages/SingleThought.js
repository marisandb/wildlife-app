import React from "react";
import { useParams } from "react-router-dom";

// import WildliferecordList from "../components/WildliferecordList";

import { useQuery } from "@apollo/react-hooks";
import { QUERY_THOUGHT } from "../utils/queries";

const SingleThought = (props) => {
  const { id: thoughtId } = useParams();

  const { loading, data } = useQuery(QUERY_THOUGHT, {
    variables: { id: thoughtId },
  });

  const thought = data?.thought || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {thought.username}
          </span>
          {""}
          thought on {thought.createdAt}
        </p>
        <div className="card-body">
          <p>{thought.thoughtText}</p>
        </div>
      </div>

      {/* {thought.wildliferecordCount > 0 && <WildliferecordList reactions={thought.wildliferecords} /> */}
    </div>
  );
};

export default SingleThought;
