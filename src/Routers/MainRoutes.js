import React from 'react'
import {BrowserRouter as Router,
        Routes,
        Route
} from 'react-router-dom'


import Signin from '../Components/Signin'
import SideMenu from '../Components/SideMenu'

import Home from '../Pages/Home'
import Dashboard from '../Pages/Dashboard'
import Orders from '../Pages/Orders'
import Users from '../Pages/Users'
import Message from '../Pages/Message'

export const MainRoutes = () => {
  return (
    
    <Router>

        {/* <SideMenu/> */}
        
      <Routes>
          <Route path='/' element={<Signin/>} />
          <Route path='/RTUApparel' element={<SideMenu/>}>
          <Route path='/RTUApparel/home' element={<Home/>} />
          <Route path='/RTUApparel/dashboard' element={<Dashboard/>} />
          <Route path='/RTUApparel/orders' element={<Orders/>} />
          <Route path='/RTUApparel/users' element={<Users/>} />
          <Route path='/RTUApparel/message' element={<Message/>} />
          </Route>
         

        </Routes>

      
    </Router>
  )
}

export default MainRoutes