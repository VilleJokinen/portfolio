import React from 'react';
import ReactDOM from 'react-dom/client';
import Omakuva from "./omakuva.js";
import Header from './header.js'
import "./style.css"
import Element from './pages/Element.js'
import FluidGrid from 'react-fluid-grid'


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
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="cv" element={<CV />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
</div>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myPage);