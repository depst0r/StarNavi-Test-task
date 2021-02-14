import React, { useState } from 'react'

export const App = () => {
  return <>
    <div className="container">
      <div className="row">
        <div className='wrapper'>
          <div className="header">
            <select className="form-select form-select-sm" aria-label=".form-select-sm example">
              <option selected>Pick Mode</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className='field'></div>
          <div className="history"></div>
        </div>
      </div>
    </div>
  </>
}
