import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import Link from "next/link";
import React, { Suspense } from "react";
import styles from "./page.module.css";

const FetechingMeals = async () => {
  const meals = await getMeals();
  return (
    <main>
      <MealsGrid meals={meals} />
    </main>
  );
};
const Meals = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and coot it yourself. It's easy and fun.
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <Suspense fallback={<p className={styles.loading}>Fetching Meals...</p>}>
        <FetechingMeals />
      </Suspense>
    </>
  );
};

export default Meals;
