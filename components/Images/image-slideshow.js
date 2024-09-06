"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import burgerImg from "@/assets/BI2.jpg";
import curryImg from "@/assets/BI1.jpg";
import dumplingsImg from "@/assets/BI3.jpg";
import macncheeseImg from "@/assets/BI4.jpg";
import pizzaImg from "@/assets/BI5.jpg";
import schnitzelImg from "@/assets/BI6.jpg";
import tomatoSaladImg from "@/assets/BI7.jpg";
import bijay from "@/assets/BI8.jpg";
import bijayir from "@/assets/BI9.jpg";
import bijayirr from "@/assets/BI10.jpg";
import classes from "./image-slideshow.module.css";

const images = [
  { image: burgerImg, alt: "A delicious, juicy burger" },
  { image: curryImg, alt: "A delicious, spicy curry" },
  { image: dumplingsImg, alt: "Steamed dumplings" },
  { image: macncheeseImg, alt: "Mac and cheese" },
  { image: pizzaImg, alt: "A delicious pizza" },
  { image: schnitzelImg, alt: "A delicious schnitzel" },
  { image: tomatoSaladImg, alt: "A delicious tomato salad" },
  { image: bijay, alt: "A delicious tomato salad" },
  { image: bijayir, alt: "A delicious tomato salad" },
  { image: bijayirr, alt: "A delicious tomato salad" },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ""}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
