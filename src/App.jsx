import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Header from './components/Header'
import SidebarButtons from './components/SidebarButtons'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Sider from './components/Sider'
import MainLayout from './components/MainLayout'
import Home from './components/Home/Home'
import Date from './components/Home/Date'
import Users from './components/Users/Users'
import BlueHome from './components/BlueTick/BlueHome'
import Boost from './components/Boost/Boost'
import Ads from './components/ads/Ads'
import SiderProfile from './components/SiderProfile'
import UserProfile from './components/UserProfile/UserProfile'

function App() {

  const router=createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/login' element={<Login/>}/>
    <Route element={<MainLayout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/users' element={<Users/>}/>
      <Route path='/bluetick' element={<BlueHome/>}/>
      <Route path='/boost' element={<Boost/>}/>
      <Route path='/ads' element={<Ads/>}/>

    </Route>
    </Route>

  ))
  return(
    <UserProfile/>
    // <RouterProvider router={router}/>
    )
  
}

export default App
