import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import * as Tone from "tone"

// const loop = new Tone.Loop();

export const Transport = () => {
// create two monophonic synths
const synthA = new Tone.FMSynth().toDestination();
const synthB = new Tone.AMSynth().toDestination();
//play a note every quarter-note
const loopA = new Tone.Loop(time => {
	synthA.triggerAttackRelease("C2", "8n", time);
}, "4n").start(0);
//play another note every off quarter-note, by starting it "8n"
const loopB = new Tone.Loop(time => {
	synthB.triggerAttackRelease("C4", "8n", time);
}, "4n").start("8n");
// all loops start until the Transport is started
Tone.Transport.start()

return (
  <div>
    <button onClick={loopA}>
        Loop    
    </button>
    <button>
      Play A Synth sound
    </button>
  </div>
);
}

export default Transport;