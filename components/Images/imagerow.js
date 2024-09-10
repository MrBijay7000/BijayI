import Image from "next/image";
import styles from "./imagerow.module.css";

const ImageRow = () => {
  const images = [
    { src: "/images/BI1.jpg", title: "Juicy Cheese Burger" },
    { src: "/images/BI2.jpg", title: "Spicy Curry" },
    { src: "/images/BI3.jpg", title: "Homemade Dumplings" },
    { src: "/images/BI4.jpg", title: "Homemade Dumplings" },
    { src: "/images/BI5.jpg", title: "Homemade Dumplings" },
    { src: "/images/BI6.jpg", title: "Homemade Dumplings" },
    { src: "/images/BI7.jpg", title: "Homemade Dumplings" },
    { src: "/images/BI8.jpg", title: "Homemade Dumplings" },
    { src: "/images/BI9.jpg", title: "Homemade Dumplings" },
    { src: "/images/BI10.jpg", title: "Homemade Dumplings" },
  ];

  return (
    <article className={styles.meal}>
      <div className={styles.row}>
        {images.map((img, index) => (
          <div key={index} className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <Image
                src={img.src}
                alt={img.title}
                //   layout="fill" // Full container coverage
                //   width={500}
                //   height={500}
                fill
                objectFit="contain" // Maintain aspect ratio
                className={styles.image}
              />
            </div>
            <h3 className={styles.title}>{img.title}</h3>
          </div>
        ))}
      </div>
    </article>
  );
};

export default ImageRow;
