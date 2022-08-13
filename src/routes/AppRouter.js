import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Index from '../views/Home/Index'
import NotFound from '../views/NotFound'
import MainLayout from '../views/MainLayout'
import Modal from '../components/Modal'

const AppRouter = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Index />} />
                <Route path="/modal" element={<Modal />} />
                <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>
    )
}

export default AppRouter
