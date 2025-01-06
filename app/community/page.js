import Image from "next/image";

import mealIcon from "../../assets/icons/meal.png";
import communityIcon from "../../assets/icons/community.png";
import eventsIcon from "../../assets/icons/events.png";
import style from "./page.module.css";

export default function CommunityPage() {
  return (
    <>
      <header className={style.header}>
        <h1>
          One shared passion: <span className={style.highlight}>Food</span>
        </h1>
        <p>Join our community and share your favorite recipes!</p>
      </header>
      <main className={style.main}>
        <h2>Community Perks</h2>

        <ul className={style.perks}>
          <li>
            <Image src={mealIcon} alt="A delicious meal" />
            <p>Share & discover recipes</p>
          </li>
          <li>
            <Image src={communityIcon} alt="A crowd of people, cooking" />
            <p>Find new friends & like-minded people</p>
          </li>
          <li>
            <Image
              src={eventsIcon}
              alt="A crowd of people at a cooking event"
            />
            <p>Participate in exclusive events</p>
          </li>
        </ul>
      </main>
    </>
  );
}
