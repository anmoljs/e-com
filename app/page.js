import './globals.css';
import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ProductRange from './components/ProductRange';
import OurProducts from './components/OurProducts';
import Explore from './components/Explore';
import Setup from './components/Setup';
import Footer from './components/Footer';



export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <ProductRange></ProductRange>
      <OurProducts></OurProducts>
      <Explore></Explore>
      <Setup></Setup>
      <Footer></Footer>
    
    </div>
  );
}
