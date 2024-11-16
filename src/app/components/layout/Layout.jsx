import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import Ads from "@/layout/Ads";
import "react-toastify/dist/ReactToastify.css";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="min-h-[322px]">{children}</main>
      <Footer />
    </>
  );
}
