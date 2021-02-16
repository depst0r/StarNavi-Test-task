import React, { useState, useEffect } from "react"
import "./style.css";

export const App = () => {
  const [mode, setMode] = useState(null)
  const [selectChoice, setSelectChoice] = useState(null)

  const apiBase = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setMode(res))
  };

  useEffect(() => {
    apiBase("http://demo1030918.mockable.io/")
  }, [])

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="wrapper">
            <div className="header d-flex">
              <select
                className="form-select form-select-sm w-25"
                onChange={(e) => setSelectChoice(e.target.value)}
                aria-label="form-select-sm example"
              >
                <option defaultValue>Pick Mode</option>
                {mode
                  ? Object.keys(mode).map((res, i) => (
                      <option value={res} key={i}>
                        {res}
                      </option>
                    ))
                  : null}
              </select>
            </div>
            <Field field={selectChoice} state={mode} />
          </div>
        </div>
      </div>
    </>
  )
}

const Field = field => {
  const [fieldCounter, setFieldCounter] = useState(null)

  const handleFielValue = () => {
    if (field.state !== null) {
      Object.fromEntries(
        Object.entries(field.state).map(([key, value]) => {
          return [key === field.field ? setFieldCounter(value) : null]
        })
      )
    }else {
      console.log('object')
    }
  }

  const arr = new Array(fieldCounter?.field).fill()

  return <>
      <button
        type="button"
        className="btn btn-info"
        onClick={() => handleFielValue()}
      >
        START
      </button>

      {fieldCounter ? (
        <div className="field">
        {arr.map((res, i) => {
          return (
            <>
            <div
              key={i}
              data-col={`row - ${i}`}
              data-row={`col - ${i}`}
              className="square"
              onMouseOver={e => 
                console.log(e.target.dataset.col, e.target.dataset.row)
              }
            >
            </div>
            </>
          )
        })}
      </div>
      ) : (
        <h4>Select a difficulty and click start</h4>
      )}
    </>
}


const Position = () => {
  return<>

  </>
}