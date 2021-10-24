import "./styles/styles.css";
import DrumPad from "./components/DrumPad";
import DrumControl from "./components/DrumControl";
import { KeysData } from "./DrumKeysData";
import React, { useState, useCallback } from "react";

function App() {
  const [currentValue, setCurrentValue] = useState("");

  const updateDisplayValue = useCallback((value) => {
    setCurrentValue(value);
  }, []);

  return (
    <div className="container">
      <div className="inner-container" id="drum-machine">
        <div className="drumPadContainer">
          {KeysData.map((keyData) => {
            return (
              <DrumPad
                key={keyData.key}
                keyData={keyData}
                updateDisplay={updateDisplayValue}
              />
            );
          })}
        </div>
        <DrumControl displayValue={currentValue} />
      </div>
    </div>
  );
}

export default App;
