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

function App() {

  const router=createBrowserRouter(createRoutesFromElements(
    <Route element={<MainLayout/>}>
      <Route path='/' element={<Home/>}/>

    </Route>

  ))
  return(
    <RouterProvider router={router}/>
    )
  
}

export default App
