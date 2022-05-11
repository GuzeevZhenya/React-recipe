import React from "react";
import { useParams, useHistory } from "react-router-dom";

export const NotFound = () => {
  const { goBack } = useHistory();
  return (
    <div>
      <h2>Not Found</h2>
      <button className="btn" onClick={goBack}>
        Go Back
      </button>
    </div>
  );
};
