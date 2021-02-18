import React from 'react'

export const Position = ({ coordinates }) => {
    return (
      <>
        <h1>{coordinates.col + " : " + coordinates.row}</h1>
        {/* <div className="form-floating" style={{width: '25%'}}>
    <textarea className="form-control" value={coordinates.col + ' ' + coordinates.row}></textarea>
  </div> */}
      </>
    );
  };