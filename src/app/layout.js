import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next App",
  description: "next app",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>Navbar</nav>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
};

export default RootLayout;
