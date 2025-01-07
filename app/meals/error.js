"use client";
import React from "react";

const Error = () => {
  return (
    <main className="error">
      <h1>Error Loading Meals</h1>
      <p>
        We couldn't fetch the meal data. Please check your internet connection
        or try again later.
      </p>
    </main>
  );
};

export default Error;
