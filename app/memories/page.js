import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import AudioPlayer from "@/components/Social/music";
import AutoPlayAudioWithAnimation from "@/components/music/auto";

export default async function MealsPage() {
  const meals = await getMeals();

  return (
    <>
      <AutoPlayAudioWithAnimation />
      <header className={classes.header}>
        <h1>
          Our memories from 29 September 2023{" "}
          <span className={classes.highlight}>To The Current Date</span>
        </h1>
        {/* <p>Choose</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your memories</Link>
        </p> */}
      </header>
      <main className={classes.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}
