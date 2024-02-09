import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Header from './components/Header'
import SidebarButtons from './components/SidebarButtons'
import { Route } from 'react-router-dom'
import Sider from 'antd/es/layout/Sider'

function App() {
  const router=createBrowserRouter(createRoutesFromElements(
    <Route element={<Login/>}>
      <Route path='/' element={<Side/>}/>

    </Route>

  ))
  return(
    
      <Login/>
    )
  
}

export default App
