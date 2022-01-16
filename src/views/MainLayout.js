import React from 'react'
import {Outlet } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MainLayout = () => {
    return <>
        {/* Navbar */}
        <Navbar />

        {/* // Main Content
            // Head section: ProfilePicture, QuickInfo
            // Summary
            // Experience
            // Education
            // Quick View of Portfolio with link to full Portfolio */}
        <Outlet />


        {/* // Footer */}
        <Footer />
    </>
}

export default MainLayout
