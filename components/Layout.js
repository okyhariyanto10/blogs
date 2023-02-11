import Navbar from "./Navbar";
import Footer from "./Footer";


export default function Layout({children}) {
  return (
    <div className="bg-gradient-to-b from-sky-900 to-gray-800 min-h-screen text-white">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
