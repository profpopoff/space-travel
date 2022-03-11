import React from 'react'
import { Outlet, useLocation  } from 'react-router-dom'
import Header from '../Header/Header'
import './Layout.css'

export default function Layout() {

   // * Background and layout classes
   const path = useLocation().pathname.split("/")[1].toLowerCase()
   const location = path === '' ? 'home' : path

   // * Redndering Layout
   return (
      <div className={`wrapper ${location}`}>
         <Header />
         <Outlet />
      </div>
   )
}