import Link from "next/link";

import classes from "./page.module.css";
import ImageSlideshow from "@/components/Images/image-slideshow";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>23 September 2023</h1>
            <p>29 September 2023</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Memories</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>SIMPLE MESSAGE FOR YOU</h2>
          <p>
            In the quiet moments between breaths, I find you. Your smile is the
            whisper of every sunrise, and your touch, the warmth that lingers
            even in the coldest hours. My heart beats in time with yours, as if
            it has always known the rhythm of our love—a love that feels both
            timeless and brand new. With you, every day is a new beginning, and
            in your eyes, I see the reflection of everything beautiful in this
            world.
          </p>
          <p>
            In the space between words, we exist—two souls quietly intertwined.
            Your presence is my calm, the steady ground beneath my feet. Every
            glance, every fleeting touch, speaks a language only we understand,
            where love is not shouted but softly felt. With you, even silence is
            full, a melody that hums beneath the surface, reminding me that
            wherever I go, I carry a piece of you with me.
            <strong>Always.</strong>
          </p>
        </section>
        {/* <section className={classes.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section> */}
      </main>
    </>
  );
}
