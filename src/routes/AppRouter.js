import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Index from '../views/Home/Index'
import NotFound from '../views/NotFound'

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default AppRouter
