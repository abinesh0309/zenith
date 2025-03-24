import { Routes, Route } from "react-dom"
import React from 'react'
import Home from "../pages/home/Home"
import Tech from "../pages/Tech/Tech"

const Routings = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/tech" element={<Tech/>} />
        </Routes>
    )
}

export default Routings;