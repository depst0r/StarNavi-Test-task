import React, { useState, useEffect } from 'react'

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

  // const uperCase = str => {
  //   return str[0].toUpperCase() + str.slice(1)
  // }

  const handlerFielValue = (selectorValue, state) => {
    Object.fromEntries(
      Object.entries(state).map(([key, value]) => {
        return [key === selectorValue ? console.log(value) : null]
      })
    )
  }

  return <>
    <div className="container">
      <div className="row">
        <div className='wrapper'>
          <div className="header d-flex">
            <select className="form-select form-select-sm w-25" onChange={e => handlerFielValue(e.target.value, mode)} aria-label="form-select-sm example">
              <option defaultValue>Pick Mode</option>
              {mode ? Object.keys(mode).map((res, i) =>( 
                <option value={res} key={i}>{res}</option>
              )) : null}
            </select>
            <button type="button" className="btn btn-info">START</button>
          </div>
          {/* <Field field={selectChoice} state={mode}/> */}
        </div>
      </div>
    </div>
  </>
}

const Field = field => {
    const handlerFielValue = () => {
      Object.fromEntries(
        Object.entries(field.state).map(([key, value]) => {
          return [key === field.field ? console.log(value) : null]
        })
      )
    }
  return <>
  <button onClick={() => handlerFielValue()}>hhhh</button>
  </>
}