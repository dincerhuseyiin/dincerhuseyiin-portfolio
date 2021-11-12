import "./App.css";
import AboutUs from "./components/body/AboutUs";
import Works from "./components/body/Works";
import Header from "./components/header/Header";
import Comment from "./components/body/Comment";
import Contact from "./components/body/Contact";
import Footer from "./components/body/Footer";

function App() {
  return (
    <div>
      <Header />
      <AboutUs />
      <Works />
      <Comment />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
