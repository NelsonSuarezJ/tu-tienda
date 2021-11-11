import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Blog from '../components/Blog'
import Home from '../components/Home'
import NoFound from '../components/NotFound'
import Productos from '../components/Productos'
import Tiendas from '../components/Tiendas'

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="productos" element={<Productos />} />
            <Route path="tiendas" element={<Tiendas />} />
            <Route path="blog" element={<Blog />} />
            <Route path="*" element={<NoFound />} />
        </Routes>
    )
}

export default AppRouter
