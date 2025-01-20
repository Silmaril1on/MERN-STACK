import "./globals.css";
import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";
import { StoreProvider } from "./store/StoreProvider";

export const metadata = {
  title: "DJDB - Electronic World",
  description:
    "DJDB is an informational web page that provides all crusial details about electronic world, artists, various festivals and etc.",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className="base-padding flex flex-col h-screen">
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </StoreProvider>
  );
}
