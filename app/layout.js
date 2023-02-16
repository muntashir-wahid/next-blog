import "../styles/globals.css";

import Footer from "components/Footer/Footer";
import TopNav from "components/NavBar/TopNav";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopNav />
        <main className="min-h-screen container mx-auto px-2 py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
