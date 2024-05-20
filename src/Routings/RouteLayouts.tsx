import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import ShoePage from '../pages/shoePage/ShoePage'

const RouteLayouts = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/shoepage' element={<ShoePage/>}/>
    </Routes>
  )
}

export default RouteLayouts