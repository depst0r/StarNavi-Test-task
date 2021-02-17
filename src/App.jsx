import React, { useState, useEffect } from "react"
import "./style.css";

const squareStyle = {
  width: '50px',
  height: '50px',
  cursor: 'pointer',
}

export const App = () => {
  const [mode, setMode] = useState(null)
  const [selectChoice, setSelectChoice] = useState(null)

  useEffect(() => {
      fetch('http://demo1030918.mockable.io/')
      .then((res) => res.json())
      .then((res) => setMode(res))
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
            <Field selection={selectChoice} state={mode} />
          </div>
        </div>
      </div>
    </>
  )
}

const Field = selection => {
  const [fieldCounter, setFieldCounter] = useState(null)

  const handleFielValue = () => {
    if (selection.state !== null) {
      Object.fromEntries(
        Object.entries(selection.state).map(([key, value]) => {
          return [key === selection.selection ? setFieldCounter(value) : null]
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
        <div className="field d-flex">
        {arr.map((res, i) => {
          return (
            <>
            <span 
            class="border border-3"
            style={squareStyle}
            key={res}
            data-col={`row - ${i}`}
            data-row={`col - ${i}`}
            onMouseOver={e => 
              console.log(e.target.dataset.col, e.target.dataset.row)
            }
            >
            </span>
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