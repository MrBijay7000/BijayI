import MainHeader from "@/components/MainHeader/main-header";
import "./globals.css";

export const metadata = {
  title: "BIJAY IRRISHA",
  description:
    "Love is the quiet warmth in a stolen glance, the unspoken connection that makes two hearts beat as one, and the comfort of knowing you're never alone, no matter the distance..",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
