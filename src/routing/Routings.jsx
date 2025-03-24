import { Routes, Route } from "react-router-dom"
import React from 'react'
import Home from "../pages/home/Home"
import Event from "../pages/events/Event"
import Tech from "../pages/events/tech/Tech"
import NoneTech from "../pages/events/nonetech/NoneTech"
import Contact from "../pages/contact/Contact"

const Routings = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/event/:id" element={<Event/>}/>
            <Route path="/tech" element={<Tech/>}/>
            <Route path="/nonetech" element={<NoneTech/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    )
}

export default Routings;