import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Wrapper from '../components/HOC/Wrapper'
import Acccount from '../pages/Acccount'
import Upload from '../pages/Upload'
import Configuration from '../pages/Configuration'
import Home from '../pages/Home'

const AllRoutes = () => {
  return (
    <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/account' element={<Wrapper><Acccount /></Wrapper>} />
          <Route path='/project/configuration' element={<Wrapper><Configuration /></Wrapper>} />
          <Route path='/project/upload' element={<Wrapper><Upload /></Wrapper>} />
          <Route path='/project/edit' element={<h1>Edit page</h1>} />
          <Route path='*' element={<h1>Page does not Exists</h1>} />
    </Routes>
  )
}

export default AllRoutes