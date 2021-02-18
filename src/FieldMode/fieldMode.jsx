import React, { useState } from 'react'
import { Position } from '../Position/position';

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

    const array = (pos, pos2) => setPosition([...position, {pos, pos2}])
  
    const arr = new Array(+fieldCounter).fill();
  console.log(position)
    return <>
        <Position coordinates={position} />
        <button
          type="button"
          className="btn btn-info"
          onClick={() => handleFielValue()}
        >
          START
        </button>
        <div className="wrapper">
          {arr.map((res, i) => {
            return (
              <div className="d-flex" data-row={`row - ${i + 1}`}>
                {arr.map((res, j) => {
                  return (
                    <>
                      <div
                        className="border border-3"
                        style={squareStyle}
                        data-col={`col - ${j + 1}`}
                        onMouseOver={(e) =>
                          array(e.target.dataset.col, e.target.parentNode.dataset.row,)
                          // setPosition({
                          //   ...position,
                          //   row: e.target.parentNode.dataset.row,
                          //   col: e.target.dataset.col,
                          // })
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
  };