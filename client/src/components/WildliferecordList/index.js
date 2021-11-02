import React from "react";
import { Link } from "react-router-dom";

const wildliferecordList = ({ wildliferecord }) => {
  return (
    <div className="card mb-3">
      <div className="card-header">
        <span className="text-light">Reactions</span>
      </div>
      <div className="card-body">
        {wildliferecord &&
          wildliferecord.map((wildliferecord) => (
            <p className="pill mb-3" key={wildliferecord._id}>
              {wildliferecord.wildliferecordBody} /{wildliferecord.username}/{" "}
              <Link
                to={`/profile/${wildliferecord.username}`}
                style={{ fontWeight: 700 }}
              >
                {wildliferecord.username} on {wildliferecord.createdAt}
              </Link>
            </p>
          ))}
      </div>
    </div>
  );
};

export default wildliferecordList;
