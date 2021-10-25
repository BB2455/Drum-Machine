import React, { useEffect, useCallback, useRef } from "react";

const DrumPad = ({ keyData, updateDisplay, volume }) => {
  const audio = useRef(null);
  const drumButton = useRef(null);
  const playAudio = useCallback(() => {
    audio.current.currentTime = 0;
    audio.current.volume = volume;
    audio.current.play();
    drumButton.current.style.background = "hsl(204, 24%, 8%)";
    setTimeout(
      () => (drumButton.current.style.background = "hsl(204, 25%, 12%)"),
      200
    );
  }, [volume]);

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
    <div className="drum-pad-div">
      <div
        ref={drumButton}
        id={keyData.name}
        className="drum-pad"
        onClick={(event) => {
          playAudio(event);
          updateDisplay(keyData.name);
        }}
      >
        <audio
          ref={audio}
          className="clip"
          id={keyData.key}
          src={keyData.src}
        />
        <p>{keyData.key}</p>
      </div>
    </div>
  );
};

export default DrumPad;
