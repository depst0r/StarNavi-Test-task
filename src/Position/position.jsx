import React from "react";

export const Position = ({ coordinates }) => {
  return (
    <>
      <div className="card overflow-auto" style={{height: '300px'}}>
        <div className="card-header">COORDINATES</div>
        <ul className="list-group list-group-flush">
          {coordinates
            ? coordinates.map((res, k) => (
                <li
                  style={{color: '#929ba5'}}
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
