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
import NonAdmin from '../Pages/NonAdmin'

import Uniform from '../Category/Uniform'
import Pants from '../Category/Pants'
import Accessory from '../Category/Accessory'
import IDlace from '../Category/IDlace'
import Patch from '../Category/Patch'
import Jersey from '../Category/Jersey'


export const MainRoutes = () => {
  return (
    
    <Router>

        {/* <SideMenu/> */}
        
      <Routes>
          <Route path='/' element={<Signin/>} />
          <Route path='/RTUApparel' element={<SideMenu/>}>

          <Route path='home' element={<Home/>} >
              <Route path='uniform' element={<Uniform/>} /> 
              <Route path='pants' element={<Pants/>} /> 
              <Route path='accessory' element={<Accessory/>} /> 
              <Route path='idlace' element={<IDlace/>} /> 
              <Route path='patch' element={<Patch/>} /> 
              <Route path='jersey' element={<Jersey/>} /> 
          </Route>
          
          <Route path='dashboard' element={<Dashboard/>} />
          <Route path='orders' element={<Orders/>} />
          <Route path='users' element={<Users/>} />
          <Route path='message' element={<Message/>} />
          </Route>
         
          <Route path='/restricted' element={<NonAdmin/>} />
        </Routes>

      
    </Router>
  )
}

export default MainRoutes