import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import AboutRush from "../MainPages/AboutRush";
import Contact from "../MainPages/Contact";
import Discography from "../MainPages/Discography";
import Home from "../MainPages/Home";
import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/sobre" element={<AboutRush/>} />
          <Route path="/discografia" element={<Discography/>} />
          <Route path="/contato" element={<Contact/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;