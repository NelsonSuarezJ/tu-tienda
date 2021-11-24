import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Blog from '../components/Blog'
import Home from '../components/Home'
import NoFound from '../components/NotFound'
import Productos from '../components/Productos'
import Tiendas from '../components/Tiendas'
import Login from '../components/login/login'
import Registro from '../components/Registro/index'

const AppRouter = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="productos" element={<Productos />} />
            <Route path="tiendas" element={<Tiendas />} />
            <Route path="blog" element={<Blog />} />
            <Route path="registro_productos" element={<Registro />} />
            <Route path="*" element={<NoFound />} />
        </Routes>
    )
}

export default AppRouter;
