import React, { useState, useEffect } from "react"
import "./style.css";

const squareStyle = {
  width: '25px',
  height: '25px',
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


const FieldMode = props => {
  const [fieldCounter, setFieldCounter] = useState(0)

  const handleFielValue = () => {
    setFieldCounter(props.selection)
  }

const arr = new Array(+fieldCounter).fill()

  return <>
    <Position />
      <button
        type="button"
        className="btn btn-info"
        onClick={() => handleFielValue()}
      >
        START
      </button>

      {fieldCounter !== 0 ? (
        <div className="field" >
        {arr.map((res, i) => {
          return (
            <>
            <div 
            className="border border-3"
            key={i}
            style={squareStyle}
            data-row={`row - ${1}`}
            data-col={`col - ${i + 1}`}
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
  <div className="form-floating" style={{width: '25%'}}>
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
</div>
  </>
}