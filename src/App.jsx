import React, { useState, useEffect } from "react"
import "./style.css";

const squareStyle = {
  width: '50px',
  height: '50px',
  cursor: 'pointer',
}

export const App = () => {
  const [mode, setMode] = useState(null)
  const [selectChoice, setSelectChoice] = useState(0)

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
                onChange={e => setSelectChoice(e.target.value)}
                aria-label="form-select-sm example"
              >
                <option defaultValue value={0}>Pick Mode</option>
                  {mode 
                    ? Object.entries(mode)?.map(([key, value]) => (
                      <option value={value.field} key={key}>
                        {key}
                      </option>
                    )) : (
                      null
                    )
                  }
              </select>
            </div>
            <FieldMode selection={selectChoice} />
          </div>
        </div>
      </div>
    </>
  )
}

const FieldMode = selection => {
  const [fieldCounter, setFieldCounter] = useState('0')

  const handleFielValue = () => {
    setFieldCounter(selection.selection)
  }

const arr = new Array(+fieldCounter).fill()

  return <>
      <button
        type="button"
        className="btn btn-info"
        onClick={() => handleFielValue()}
      >
        START
      </button>

      {fieldCounter !== '0' ? (
        <div className="field d-flex">
        {arr.map((res, i) => {
          return (
            <>
            <span 
            class="border border-3"
            style={squareStyle}
            key={i}
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