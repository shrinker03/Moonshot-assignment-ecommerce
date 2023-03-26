import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

const App = () => {
  return (
    <div className='h-[100%]'>
      <Header />
      <Outlet />
    </div>
  )
}

export default App