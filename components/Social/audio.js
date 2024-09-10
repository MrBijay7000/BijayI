"use client";

import React, { useRef } from "react";
import classes from "./music.module.css";

const AudioPlayer1 = () => {
  const audioRef = useRef(null);

  const handlePlay = () => {
    audioRef.current.play();
  };

  const handlePause = () => {
    audioRef.current.pause();
  };

  return (
    <div className={classes["audio-container"]}>
      <h2 className={classes["audio-title "]}>Audio Player</h2>
      <audio ref={audioRef} src="/audio.mp3" />
      <div className={classes["audio-controls"]}>
        <button onClick={handlePlay} className={classes["play-button"]}>
          Play
        </button>
        <button onClick={handlePause} className={classes["pause-button"]}>
          Pause
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer1;
