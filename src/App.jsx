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

const uperCase = str => {
  return str[0].toUpperCase() + str.slice(1)
}

  return <>
    <div className="container">
      <div className="row">
        <div className='wrapper'>
          <div className="header d-flex">
            <select className="form-select form-select-sm w-25" aria-label=".form-select-sm example">
              <option defaultValue>Pick Mode</option>
              {mode ? Object.keys(mode).map((res, i) => (
                <option value={res} key={i}>{uperCase(res)}</option>
              )) : null}
            </select>
            <button type="button" className="btn btn-info">START</button>
          </div>
          <Field />
        </div>
      </div>
    </div>
  </>
}

const Field = mode => {
  console.log(mode);
  return <>
  </>
}