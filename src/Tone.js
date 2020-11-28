import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { Sampler } from "tone";
import A1 from "./A1.mp3";
import A2 from "./snare.mp3"
import B1 from "./crash.mp3"
import C1 from "./soundAssets/tom-1.mp3"

export const Tone = () => {
  //loads all samples and lets the buttons know they can be used
  const [isLoaded, setLoaded] = useState(false);
  const sampler = useRef(null);

  useEffect(() => {
    sampler.current = new Sampler(
      { A2, A1, B1, C1,  },
      {
        onload: () => {
          setLoaded(true);
        },
      }
    ).toMaster();
  }, []);

  const handleClick = () => sampler.current.triggerAttack("A2");
  const handleClick2 = () => sampler.current.triggerAttack("A1");
  const handleClick3 = () => sampler.current.triggerAttack("B1");
  



  return (
    <div>
      <button disabled={!isLoaded} onClick={handleClick}>
        Play a Drum Sound
      </button>
      <button disabled={!isLoaded} onClick={handleClick2}>
        Play A Synth sound
      </button>
    </div>
  );
};
