import React from "react";

const overflove = {
  overflow: "auto",
  width: "200px",
  height: "300px",
};

export const Position = ({ coordinates }) => {
  return (
    <>
      <div className="card" style={overflove}>
        <div className="card-header">COORDINATES</div>
        <ul className="list-group list-group-flush">
          {coordinates
            ? coordinates.map((res, k) => (
                <li
                  className="list-group-item"
                  key={k}
                >{`${res.col} ${res.row}`}</li>
              ))
            : null}
        </ul>
      </div>
    </>
  );
};
