import React, { useState, useEffect, createElement } from 'react'
import './style.css'

export const App = () => {

  const [mode, setMode] = useState(null)
  const [selectChoice, setSelectChoice] = useState('')

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
            <select className="form-select form-select-sm w-25" onChange={e => setSelectChoice(e.target.value)} aria-label="form-select-sm example">
              <option defaultValue>Pick Mode</option>
              {mode ? Object.keys(mode).map((res, i) =>( 
                <option value={res} key={i}>{res}</option>
              )) : null}
            </select> 
          </div>
          <Field field={selectChoice} state={mode}/>
        </div>
      </div>
    </div>
  </>
}

const Field = field => {
  const [fieldCounter, setFieldCounter] = useState('')

    const handleFielValue = () => {
      Object.fromEntries(
        Object.entries(field.state).map(([key, value]) => {
          return [key === field.field ? setFieldCounter(value) : null]
        })
      )
    }

   const div = <div 
    className="square" 
    onMouseOver={e => console.log(e.target.dataset.col, e.target.dataset.row)}>
    </div>
    const arr = new Array(fieldCounter.field).fill(div)



  return <>
    <button 
    type="button" 
    className="btn btn-info"
    onClick={() => handleFielValue()}
    >
      START
      </button>

  <div className="field">
     {arr.map(res => {
       return res
     })}
  </div>
  </>
}