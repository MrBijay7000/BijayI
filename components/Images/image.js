import Image from "next/image";
import styles from "./image.module.css";

const ThreeImageRow = () => {
  const images = [
    {
      src: "/images/BI1.jpg",
      title: "Juicy Cheese Burger",
      summary: "A delicious burger with juicy beef and melted cheese.",
    },
    {
      src: "/images/BI2.jpg",
      title: "Spicy Curry",
      summary: "A flavorful curry with a kick of spice.",
    },
    {
      src: "/images/BI3.jpg",
      title: "Homemade Dumplings",
      summary: "Tender dumplings filled with savory meat and veggies.",
    },
  ];

  return (
    <div className={styles.row}>
      {images.map((img, index) => (
        <div key={index} className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <Image
              src={img.src}
              alt={img.title}
              layout="fill"
              objectFit="cover"
              className={styles.image}
            />
          </div>
          <h3 className={styles.title}>{img.title}</h3>
          <p className={styles.summary}>{img.summary}</p>
        </div>
      ))}
    </div>
  );
};

export default ThreeImageRow;
