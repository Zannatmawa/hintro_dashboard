import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Dashboard from '../pages/Dashboard'
// import StateCards from '../pages/StateCards'

const AppRoutes = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    {/* <Route path='/stats' element={<StateCards />} /> */}
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRoutes