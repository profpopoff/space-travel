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
            <Route path="space-travel/" element={<Layout />}>
               <Route path="space-travel/" element={<Homepage />} />
               <Route path="space-travel/destination" element={<Destination />} />
               <Route path="space-travel/crew" element={<Crew />} />
               <Route path="space-travel/technology" element={<Technology />} />
            </Route>
         </Routes>
      </div>
   )
}