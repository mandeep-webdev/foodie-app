import { getMeal } from "@/lib/meals";
import Image from "next/image";
import React from "react";
import styles from "./page.module.css";

const MealDetailsPage = async ({ params }) => {
  const meal = await getMeal(params.slug);
  meal.instructions = meal.instructions.replace(/\n/g, "<br/>");
  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={styles.headerText}>
          <h1>{meal.title}</h1>
          <p className={styles.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={styles.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
          className={styles.instructions}
        ></p>
      </main>
    </>
  );
};

export default MealDetailsPage;
