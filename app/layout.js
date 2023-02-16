import Footer from "components/Footer/Footer";
import TopNav from "components/NavBar/TopNav";
import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
