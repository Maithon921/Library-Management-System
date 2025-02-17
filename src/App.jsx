import "./App.css";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import { Outlet } from "react-router";
import ScrollToTop from "./components/ScrollToTop.jsx";

function App() {
  return (
    <div>
      <Header />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
