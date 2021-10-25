import "./styles/styles.css";
import DrumPad from "./components/DrumPad";
import DrumControl from "./components/DrumControl";
import { KeysData } from "./DrumKeysData";
import React, { useState, useCallback } from "react";

function App() {
  const [currentValue, setCurrentValue] = useState("");
  const [volume, setVolume] = useState(0.23);

  const clearDisplay = () => {
    setCurrentValue("");
  };

  const updateVolume = (newValue) => {
    setVolume(newValue);
    setCurrentValue(`Volume: ${Math.round(newValue * 100)}`);
    setTimeout(() => clearDisplay(), 1000);
  };

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
                volume={volume}
              />
            );
          })}
        </div>
        <DrumControl
          displayValue={currentValue}
          updateVolume={updateVolume}
          volume={volume}
        />
      </div>
    </div>
  );
}

export default App;
