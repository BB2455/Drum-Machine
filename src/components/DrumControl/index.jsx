import React from "react";

const DrumControl = ({ displayValue, updateVolume, volume }) => {
  return (
    <div className="drum-control-container">
      <p id="display" className="display">
        {displayValue}
      </p>
      <input
        className="volume-slider"
        type="range"
        max="1"
        min="0"
        step="0.01"
        value={volume}
        onChange={(e) => updateVolume(e.target.value)}
      />
    </div>
  );
};

export default DrumControl;
