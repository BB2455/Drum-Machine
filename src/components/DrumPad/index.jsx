import React, { useEffect, useCallback, useRef } from "react";

const DrumPad = ({ keyData, updateDisplay }) => {
  const audio = useRef(null);
  const playAudio = useCallback(() => {
    audio.current.currentTime = 0;
    audio.current.play();
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.code === keyData.keyCode) {
        updateDisplay(keyData.name);
        playAudio();
      }
    });
    return () => {
      document.removeEventListener("keydown", (event) => {
        if (event.code === keyData.keyCode) {
          updateDisplay(keyData.name);
          playAudio();
        }
      });
    };
  }, [keyData, playAudio, updateDisplay]);

  return (
    <div
      id={keyData.name}
      className="drum-pad"
      onClick={(event) => {
        playAudio(event);
        updateDisplay(keyData.name);
      }}
    >
      <audio ref={audio} className="clip" id={keyData.key} src={keyData.src} />
      {keyData.key}
    </div>
  );
};

export default DrumPad;
