import Image from "next/image";

import mealIcon from "@/assets/icons/meal.png";
import communityIcon from "@/assets/icons/community.png";
import eventsIcon from "@/assets/icons/events.png";
import bijay from "@/assets/icons/BI1.jpg";
import bijayI from "@/assets/icons/BI2.jpg";
import bijayII from "@/assets/icons/BI3.jpg";
import classes from "./page.module.css";
import InstagramLink from "@/components/Social/instagram";

export default function CommunityPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          One shared passion: <span className={classes.highlight}>Love</span>
        </h1>
        <p>Join our community and share your best moments!</p>
      </header>
      <main className={classes.main}>
        <h2>Community Perks</h2>
        <ul className={classes.perks}>
          {/* <li>
            <Image src={bijay} alt="A delicious meal" />
            <p>Share & discover recipes</p>
          </li>
          <li>
            <Image src={bijayI} alt="A crowd of people, cooking" />
            <p>Find new friends & like-minded people</p>
          </li>
          <li>
            <Image src={bijayII} alt="A crowd of people at a cooking event" />
            <p>Participate in exclusive events</p>
          </li> */}
          <InstagramLink />
        </ul>
      </main>
    </>
  );
}
