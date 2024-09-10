const sql = require("better-sqlite3");
const db = sql("meals.db");

const dummyMeals = [
  {
    title: "Juicy Cheese Burger",
    image: "/images/BI1.jpg",
    summary:
      "A mouth-watering burger with a juicy beef patty and melted cheese, served in a soft bun.",
  },
  {
    title: "Spicy Curry",
    image: "/images/BI2.jpg",
    summary:
      "A rich and spicy curry, infused with exotic spices and creamy coconut milk.",
  },
  {
    title: "Homemade Dumplings",
    image: "/images/BI3.jpg",
    summary:
      "Tender dumplings filled with savory meat and vegetables, steamed to perfection.",
  },
  {
    title: "Classic Mac n Cheese",
    image: "/images/BI4.jpg",
    summary:
      "Creamy and cheesy macaroni, a comforting classic that's always a crowd-pleaser.",
  },
  {
    title: "Authentic Pizza",
    image: "/images/BI5.jpg",
    summary:
      "Hand-tossed pizza with a tangy tomato sauce, fresh toppings, and melted cheese.",
  },
  {
    title: "Wiener Schnitzel",
    image: "/images/BI6.jpg",
    summary:
      "Crispy, golden-brown breaded veal cutlet, a classic Austrian dish.",
  },
  {
    title: "Fresh Tomato Salad",
    image: "/images/BI7.jpg",
    summary:
      "A light and refreshing salad with ripe tomatoes, fresh basil, and a tangy vinaigrette.",
  },
  {
    title: "Fresh Tomato Salad",
    image: "/images/BI8.jpg",
    summary:
      "A light and refreshing salad with ripe tomatoes, fresh basil, and a tangy vinaigrette.",
  },
  {
    title: "Fresh Tomato Salad",
    image: "/images/BI9.jpg",
    summary:
      "A light and refreshing salad with ripe tomatoes, fresh basil, and a tangy vinaigrette.",
  },
  {
    title: "Fresh Tomato Salad",
    image: "/images/BI10.jpg",
    summary:
      "A light and refreshing salad with ripe tomatoes, fresh basil, and a tangy vinaigrette.",
  },
];

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS meals (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL
    )
`
).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO meals VALUES (
         null,
         @title,
         @image,
         @summary
      )
   `);

  for (const meal of dummyMeals) {
    stmt.run(meal);
  }
}

initData();
