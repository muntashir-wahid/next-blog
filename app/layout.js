import "../styles/globals.css";

import Footer from "components/Footer/Footer";
import TopNav from "components/NavBar/TopNav";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopNav />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
