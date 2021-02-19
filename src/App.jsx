import React, { useState, useEffect } from "react";
import { FieldMode } from "./FieldMode/fieldMode";
import "./style.css";

export const App = () => {
  const [mode, setMode] = useState(null);
  const [selectChoice, setSelectChoice] = useState(0);

  useEffect(() => {
    fetch("http://demo1030918.mockable.io/")
      .then((res) => res.json())
      .then((res) => setMode(res));
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div class="d-flex flex-nowrap bd-highlight">
                     <FieldMode selection={selectChoice} />
  <div class="order-1 p-2 bd-highlight"> <select
                className="form-select form-select-sm"
                onChange={e => setSelectChoice(e.target.value)}
                aria-label="form-select-sm example"
              >
                <option defaultValue value={0}>
                  Pick Mode
                </option>
                {mode
                  ? Object.entries(mode)?.map(([key, value]) => (
                      <option value={value.field} key={key}>
                        {key}
                      </option>
                    ))
                  : null}
              </select></div>
</div>
        </div>
      </div>
    </>
  );
};
