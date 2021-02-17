import React, { useState, useEffect } from "react"
import "./style.css";

const squareStyle = {
  width: '30px',
  height: '30px',
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
const [col, setCol] = useState('')

  const handleFielValue = () => {
    setFieldCounter(props.selection)
  }

const arr = new Array(+fieldCounter).fill()

  return <>
    {/* <Position col={col}/> */}
      <button
        type="button"
        className="btn btn-info"
        onClick={() => handleFielValue()}
      >
        START
      </button>
      <div className='wrapper'>
      {arr.map((res, i) => {
        return (
          <div 
          className='d-flex'
          // data-row={`row - ${i + 1}`}
          // onMouseOver={e => 
          //     console.log(e.target.dataset.row)}
          >
        {arr.map((res, i) => {
          return (
            <>
            <div 
            className="border border-3"
            style={squareStyle}
            data-col={`col - ${i + 1}`}
            onMouseOver={e => 
              console.log(e.target.dataset.col)}
            >
            </div>
            </>
          )
        })}
      </div>
        )
      })}
      </div>
    </>
}

// const Position = props => {
//   return<>
//   <div className="form-floating" style={{width: '25%'}}>
//   <textarea className="form-control" value={props.col}></textarea>
// </div>
//   </>
// }