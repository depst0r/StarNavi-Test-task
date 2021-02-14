import React, { useState, useEffect } from 'react'

export const App = () => {

  const [mode, setMode] = useState(null)

  const apiBase = url => {
    fetch(url)
      .then(res => res.json())
      .then(res => setMode(res))
  }

  useEffect(() => {
    apiBase('http://demo1030918.mockable.io/')
  }, [])

  return <>
    <div className="container">
      <div className="row">
        <div className='wrapper'>
          <div className="header d-flex">
            <select className="form-select form-select-sm w-25" aria-label=".form-select-sm example">
              <option defaultValue>Pick Mode</option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
            </select>
            <button type="button" className="btn btn-info">START</button>
          </div>
          <div className='field'>

          </div>
          <div className="history">
            <h3>History</h3>
          </div>
        </div>
      </div>
    </div>
  </>
}
