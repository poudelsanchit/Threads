import { useState } from 'react'
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom'
import UserPage from './Pages/UserPage'
import PostPage from './Pages/PostPage'
import Header from './Components/Header'
import SearchPage from './Pages/SearchPage'
import NotificationsPage from './Pages/NotificationsPage'
import CreateThread from './Components/CreateThread'
import Home from './Pages/Home'
import UserPost from './Components/UserPost'
import AuthPage from './Pages/AuthPage'
import { useRecoilValue } from 'recoil'
import userAtom from './atoms/userAtom'
import MyProfile from './Pages/UserPage'

function App() {
  const user= useRecoilValue(userAtom);

  return (
    <>
      <div className='dark:bg-dark dark:text-light  bg-light text-dark w-full max-h-max min-h-screen '>
        <Routes>
          <Route path='/' element={user? <Home/> : <Navigate to='/auth'/>} />
          <Route path='/auth' element={!user? <AuthPage />:  <Navigate to='/'/>} />

      
          <Route path='/update' element={user? <MyProfile /> : <Navigate to='/'/>} />
          <Route path='/:username' element={user? <UserPage />: <Navigate to='/auth'/>} />
          <Route path='/:username/post/:pid' element={<PostPage />} />


          <Route path='/search' element={<SearchPage />} />
          <Route path='/createthread' element={<CreateThread />} />
          <Route path='/notifications' element={<NotificationsPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
