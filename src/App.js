import React from "react";
import "./styles.css";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Main />
      <Footer />
    </div>
  );
};
export default App;
