import React from "react";
import Repeat from "./Repeat"
import Transport from "./Transport"
import "./App.css";
import { Tone } from "./Tone";

function App() {
  return (
    <div className="App">
      <h1>Tone JS Beat-Machine (proof of concept)</h1>
      Sampler buttons A1 and A2<Tone />
      <Repeat />
      <Transport />
    </div>
  );
}

export default App;
