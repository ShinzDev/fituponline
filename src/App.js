import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import Navbar from './components/Navbar'

import Home from './pages/Home'
import ExerisiceDetail from './pages/ExerisiceDetail'

import Footer from './components/Footer'
const App = () => {
  return (
   <Box width='400px' sx={{ width: {xl: '1488px'} }} m='auto'  >
    <Navbar/>
    <Routes>
      {/* <Route path='/' element={<Home/>}/> */}
      <Route path='/exercise/:id ' element={<ExerisiceDetail/>}/>
    </Routes>
    <Footer/>
   </Box>
  )
}

export default App
