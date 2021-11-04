import React from "react";
import { Link } from "react-router-dom";

const animalList = ({ animal }) => {
  return (
    <div className="card mb-3">
      <div className="card-header">
        <span className="text-light">Animals</span>
      </div>
      <div className="card-body">
        {animal &&
          animal.map((animal) => (
            <p className="pill mb-3" key={animal._id}>
              {animal.animalBody} /{animal.username}/{" "}
              <Link
                to={`/profile/${animal.username}`}
                style={{ fontWeight: 700 }}
              >
                {animal.username} on {animal.createdAt}
              </Link>
            </p>
          ))}
      </div>
    </div>
  );
};

export default animalList;
