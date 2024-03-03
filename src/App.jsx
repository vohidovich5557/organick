import React from "react";
import { MainLayout } from "./layout/main-layout";
import { Route, Routes } from "react-router-dom";
import {Home} from './pages/home';
import { About } from "./pages/about";
import { Shop } from "./pages/shop";
import { ShopDetails } from "./pages/shop-detail";





function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<MainLayout/>} >
        <Route index element={<Home />}/>
        <Route path="about" element={<About />} />
        <Route path="shop" element={<Shop />}/>
        <Route path="product/:id/:slug" element={<ShopDetails />} />
      </Route>
    </Routes>
    </>
  )
};




export default App;