import "./styles/styles.css";
import DrumPad from "./components/DrumPad";
import DrumControl from "./components/DrumControl";
import { KeysData } from "./DrumKeysData";

function App() {
  return (
    <div className="container">
      <div className="inner-container" id="drum-machine">
        <div className="drumPadContainer">
          {KeysData.map((keyData) => {
            return <DrumPad key={keyData.key} keyData={keyData} />;
          })}
        </div>
        <div id="display"></div>
        <DrumControl />
      </div>
    </div>
  );
}

export default App;
