"use client";

import { useState, useRef } from "react";

// import music from "../../public/music/audio.mp3";

const MusicPlayer = () => {
  // Use useRef to access the audio element
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause(); // Pause the audio if it's playing
      } else {
        audioRef.current.play(); // Play the audio if it's paused
      }
      setIsPlaying(!isPlaying); // Toggle the play/pause state
    }
  };

  return (
    <div>
      <h2>Music Player</h2>
      {/* Reference the audio element with ref={audioRef} */}
      <audio
        ref={audioRef}
        src="../../public/music/music.mp3"
        type="audio/mp3"
      />
      <button onClick={handlePlayPause}>{isPlaying ? "Pause" : "Play"}</button>
    </div>
  );
};

export default MusicPlayer;
