"use client";

import React, { useRef, useEffect, useState } from "react";
import classes from "./auto.module.css";

const AutoPlayAudioWithAnimation = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const playAudio = async () => {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Autoplay failed:", error);
      }
    };

    playAudio();
  }, []);

  const handlePlay = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  return (
    <div className={classes["audio-container"]}>
      <h2 className={classes["audio-title"]}>Now Playing: ❤️</h2>
      <audio ref={audioRef} src="/music.mp3" loop />

      <div className={classes["audio-visualizer"]}>
        {/* Visualizer will animate when music is playing */}
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={classes["audio-controls"]}>
        {isPlaying ? (
          <button onClick={handlePause} className={classes["pause-button"]}>
            Pause
          </button>
        ) : (
          <button onClick={handlePlay} className={classes["play-button"]}>
            Play
          </button>
        )}
      </div>
    </div>
  );
};

export default AutoPlayAudioWithAnimation;
