"use client";

import React from "react";

// import audio from "@/assets/music/audio.mp3";
// import sound from "../../assets/audio.mp3";

const AudioPlayer = () => {
  function playSound() {
    new Audio(audio).play();
  }
  return (
    <div>
      <h2>Play Music</h2>
      <audio>
        <source src="../../public/music/music.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <button onClick={playSound}>PLAY ME</button>
    </div>
  );
};

export default AudioPlayer;
