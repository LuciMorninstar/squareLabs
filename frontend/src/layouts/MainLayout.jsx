import React from 'react'
import { Outlet } from 'react-router'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const MainLayout = () => {
  return (
    <main className = "w-full min-h-screen flex flex-col">
        <Navbar/>
        <section className = "flex flex-col w-full">
            <Outlet/>
        </section>
        <Footer/>
    </main>
  )
}

export default MainLayout