import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Root() {
  return (
    <nav>
        <Navbar />
        <Outlet />
        <Footer />
    </nav>
  )
}

export default Root