import React from 'react'

export const Position = ({ coordinates }) => {

    return<>
  <div className="form-floating" style={{width: '25%'}}>
    <textarea className="form-control" value={coordinates.col + ' ' + coordinates.row}></textarea>
  </div>
      </>
  };