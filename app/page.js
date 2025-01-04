import ImageSlideshow from "../components/image-slideshow";
import Link from "next/link";
import styles from "./page.module.css";
export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={styles.hero}>
            <h1>
              Recipedia: Discover, Share, and Savor the World’s Best Recipes!
            </h1>
            <p>
              Discover new recipes, share your favorites, and connect with food
              lovers worldwide — all in one place!
            </p>
          </div>
          <div className={styles.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.section}>
          <h2>How it works</h2>
          <p>
            Recipedia is your go-to platform for exploring and sharing amazing
            recipes. Discover dishes from around the world, try new flavors, and
            bring variety to your kitchen.
          </p>
          <p>
            Share your own recipes, inspire others, and connect with a community
            of passionate food lovers who share your love for cooking.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Why Recipedia?</h2>
          <p>
            Recipedia makes cooking fun, simple, and social! With a vast
            collection of recipes to explore, you’ll never run out of ideas for
            your next meal.
          </p>
          <p>
            Join a growing community of food enthusiasts, showcase your culinary
            creations, and learn from others. Whether you're a home cook or a
            professional chef, Recipedia is the place to share, connect, and
            savor together.
          </p>
        </section>
      </main>
    </>
  );
}
