<<<<<<< HEAD
import React from "react";
import { Routes, Route } from "react-router-dom";
import Blog from "../components/Blog";
import Home from "../components/Home";
import NoFound from "../components/NotFound";
import Productos from "../components/Productos";
import Tiendas from "../components/Tiendas";
import Login from "../components/login/login";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="productos" element={<Productos />} />
      <Route path="tiendas" element={<Tiendas />} />
      <Route path="blog" element={<Blog />} />
      <Route path="*" element={<NoFound />} />
    </Routes>
  );
};
=======
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Blog from '../components/Blog'
import Home from '../components/Home'
import NoFound from '../components/NotFound'
import Productos from '../components/Productos'
import Tiendas from '../components/Tiendas'
import Login from '../components/login/login'

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="productos" element={<Productos />} />
            <Route path="tiendas" element={<Tiendas />} />
            <Route path="blog" element={<Blog />} />
            <Route path="*" element={<NoFound />} />
        </Routes>
    )
}
>>>>>>> c68b66075acd90c03a56199377a92bc8a7d511e1

export default AppRouter;
