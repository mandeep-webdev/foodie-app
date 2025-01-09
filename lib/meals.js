// write all the logic related to connecting with the database and fetching data
import fs from "node:fs";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import { redirect } from "next/navigation";
const db = sql("meals.db");

export const getMeals = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // throw new Error("error");
      const meals = db.prepare("SELECT * FROM meals").all();
      resolve(meals);
    }, 2000);
  });
};

export const getMeal = async (slug) => {
  return new Promise((resolve) => {
    const meal = db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
    resolve(meal);
  });
};

export const insertMeal = async (meal) => {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;
  // write this file to public folder
  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();
  stream.write(
    Buffer.from(bufferedImage, (error) => {
      if (error) {
        throw new Error("can't save an image");
      }
    })
  );
  meal.image = `/images/${fileName}`;
  db.prepare(
    `
  INSERT INTO meals 
  (title,summary,instructions,creator,creator_email,image,slug)
  VALUES (
         @title,
         @summary,
         @instructions,
         @creator,
         @creator_email,
         @image,
         @slug
  )`
  ).run(meal);
  redirect("/meals");
};
