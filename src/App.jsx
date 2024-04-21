import './App.css'
import Login from './components/Login'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import Home from './components/Home/Home'
import Users from './components/Users/Users'
import BlueHome from './components/BlueTick/BlueHome'
import Boost from './components/Boost/Boost'
import Ads from './components/ads/Ads'
import UserProfile from './components/UserProfile/UserProfile'
import FirstSec from './components/AdminProfile/AdminProfile'


function App() {

  const router=createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/login' element={<Login/>}/>
      <Route path='/user-profile/:id' element={<UserProfile/>}/>
      <Route path='/adminpro' element={<div className='profile'>
      <FirstSec/>
    </div>}/>


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
    // <UserProfile/>
    <RouterProvider router={router}/>
    // <div className='profile'>
    //   <FirstSec/>
    // </div>
    )
  
}

export default App
