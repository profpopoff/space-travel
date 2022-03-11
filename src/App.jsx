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
            <Route path={process.env.PUBLIC_URL + '/'} element={<Layout />}>
               <Route index element={<Homepage />} />
               <Route path={process.env.PUBLIC_URL + '/destination'} element={<Destination />} />
               <Route path={process.env.PUBLIC_URL + '/crew'} element={<Crew />} />
               <Route path={process.env.PUBLIC_URL + '/technology'} element={<Technology />} />
            </Route>
         </Routes>
      </div>
   )
}