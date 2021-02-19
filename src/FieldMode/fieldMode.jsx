import React, { useState } from "react";
import { Position } from "../Position/position";

const squareStyle = {
  width: "30px",
  height: "30px",
  cursor: "pointer",
};

export const FieldMode = ({ selection }) => {
  const [fieldCounter, setFieldCounter] = useState(0);
  const [position, setPosition] = useState([]);

  const handleFielValue = () => {
    setFieldCounter(selection);
  };

  const changePosition = (row, col) => setPosition([...position, { row, col }]);

  const arr = new Array(+fieldCounter).fill();

  return (
    <>
      <div className="order-4 p-2 bd-highlight">
        <Position coordinates={position} />
      </div>
      <div className="order-2 p-2 bd-highlight">
        <button
          type="button"
          className="btn btn-info"
          onClick={() => handleFielValue()}
        >
          START
        </button>
      </div>
      <div className="order-3 p-2 bd-highlight">
        {arr?.map((res, i) => {
          return (
            <div className="d-flex" key={`Row-item ${i}`} data-row={`row - ${i + 1}`}>
              {arr?.map((res, j) => {
                return (
                  <>
                    <div
                      key={`Col-item ${j}`}
                      className="border border-3"
                      style={squareStyle}
                      data-col={`col - ${j + 1}`}
                      onMouseOver={e =>
                        changePosition(
                          e.target.parentNode.dataset.row,
                          e.target.dataset.col
                        )
                      }
                    ></div>
                  </>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};
