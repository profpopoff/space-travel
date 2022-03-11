import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Homepage from './pages/Homepage'
import Destination from './pages/Destination'
import Crew from './pages/Crew'
import Technology from './pages/Technology'

import Layout from './components/Layout/Layout'

export default function App() {

   return(
      <div>
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route index element={<Homepage />} />
               <Route path="Destination" element={<Destination />} />
               <Route path="Crew" element={<Crew />} />
               <Route path="Technology" element={<Technology />} />
            </Route>
         </Routes>
      </div>
   )
}