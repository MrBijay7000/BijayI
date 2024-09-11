// components/VideoCard.js
import styles from "./videocard.module.css";

const VideoCard = ({ src }) => {
  return (
    <div className={styles.videoCard}>
      <video className={styles.video} controls>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoCard;
