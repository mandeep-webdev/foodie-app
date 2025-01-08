"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import styles from "./image-picker.module.css";
const ImagePicker = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState();
  const inputRef = useRef();
  const handlePicClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      setPickedImage(null);
    }
    const reader = new FileReader();
    reader.onload = () => {
      setPickedImage(reader.result);
      return;
    };
    reader.readAsDataURL(file);
  };
  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!pickedImage ? (
            <p>No image picked yet.</p>
          ) : (
            <Image src={pickedImage} alt="an image selected by the user" fill />
          )}
        </div>
        <input
          ref={inputRef}
          className={styles.input}
          type="file"
          id="image"
          name={name}
          accept="image/png,image/jpeg"
          onChange={handleImageChange}
        />
        <button
          className={styles.button}
          type="button"
          onClick={handlePicClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
