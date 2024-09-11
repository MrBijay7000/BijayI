// pages/index.js
import VideoCard from "./videocard";
import styles from "./videogrid.module.css";

const videos = ["/videos/IB1.mp4", "/videos/IB2.mp4", "/videos/IB3.mp4"];

const VideoGrid = () => {
  return (
    <div className={styles.gridContainer}>
      {videos.map((videoSrc, index) => (
        <VideoCard key={index} src={videoSrc} />
      ))}
    </div>
  );
};

export default VideoGrid;
