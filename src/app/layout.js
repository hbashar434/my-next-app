import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata = {
  title: "Next App",
  description: "next app",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={openSans.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
