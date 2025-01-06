// write all the logic related to connecting with the database and fetching data

import sql from "better-sqlite3";

const db = sql("meals.db");

export const getMeals = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const meals = db.prepare("SELECT * FROM meals").all();
      resolve(meals);
    }, 2000);
  });
};
