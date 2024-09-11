import classes from "./page.module.css";
import VideoGrid from "@/components/video/videogrid";

export default async function VideoMemo() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Our memories from 29 September 2023{" "}
          <span className={classes.highlight}>To The Current Date</span>
        </h1>
      </header>
      <main className={classes.main}>
        <VideoGrid />
      </main>
    </>
  );
}
