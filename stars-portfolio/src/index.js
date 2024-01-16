import React from 'react';
import ReactDOM from 'react-dom/client';
import Omakuva from "./omakuva.js";
import Header from './header.js'
import "./style.css"
import Element from './pages/Element.js'
import FluidGrid from 'react-fluid-grid'
import CardGame from './pages/CardGame.jsx'

import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import CV from "./pages/CV.js";
import Contact from "./pages/Contact"
import NoPage from "./pages/NoPage"

const myPage = <div>
  <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio" element={<Layout/>}>
          <Route path ="/portfolio" element={<Home />} />
          <Route path="/portfolio/cv" element={<CV />} />
          <Route path="/portfolio/contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/portfolio/cardgame" element={<CardGame />} />
        </Route>
      </Routes>
    </BrowserRouter>
</div>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myPage);