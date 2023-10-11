import { useState } from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import UserPage from './Pages/UserPage'
import PostPage from './Pages/PostPage'
import Header from './Components/Header'
import SearchPage from './Pages/SearchPage'
import NotificationsPage from './Pages/NotificationsPage'
import CreateThread from './Components/CreateThread'
import Home from './Pages/Home'
import UserPost from './Components/UserPost'
import AuthPage from './Pages/AuthPage'

function App() {

  return (
    <>
      <div className='dark:bg-dark dark:text-light  bg-light text-dark w-full max-h-max min-h-screen '>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<AuthPage />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/createthread' element={<CreateThread />} />
          <Route path='/notifications' element={<NotificationsPage />} />
          <Route path='/myprofile' element={<UserPage />} />
          <Route path='/:username' element={<UserPage />} />
          <Route path='/:username/post/:pid' element={<PostPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
