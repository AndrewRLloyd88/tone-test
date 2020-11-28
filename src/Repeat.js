import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import * as Tone from "tone"

// const loop = new Tone.Loop();

export const Repeat = () => {
const synth = new Tone.MembraneSynth().toMaster();

const playSynth = () => {
  synth.triggerAttackRelease("C2", "8n")
}

return (
  <div>
    <button onClick={playSynth}>
      Play Me!
    </button>
    <button>
      Play A Synth sound
    </button>
  </div>
);
}

export default Repeat;