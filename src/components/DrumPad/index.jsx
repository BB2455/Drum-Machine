import React, { useEffect, useCallback, useMemo } from "react";

const DrumPad = ({ keyData }) => {
  const keyAudio = useMemo(() => new Audio(keyData.src), [keyData]);
  const playAudio = useCallback(() => {
    console.log("Hit Key: " + keyData.keyCode);
    keyAudio.currentTime = 0;
    keyAudio.play();
  }, [keyAudio, keyData]);

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.code === keyData.keyCode) {
        playAudio();
      }
    });
    return () => {
      document.removeEventListener("keydown", (event) => {
        if (event.code === keyData.keyCode) {
          playAudio();
        }
      });
    };
  }, [keyData, playAudio]);

  return (
    <div id={keyData.name} className="drum-pad" onClick={playAudio}>
      <audio className="clip" id={keyData.key} src={keyData.src} />
      {keyData.key}
    </div>
  );
};

export default DrumPad;
