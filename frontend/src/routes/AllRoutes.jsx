import React from 'react'
import { Route, Routes } from 'react-router-dom'

const AllRoutes = () => {
  return (
    <Routes>
          <Route path='/' element={<h1>home</h1>} />
          <Route path='/account' element={<h1>User Account page</h1>} />
          <Route path='/project/configuration' element={<h1>Project configuration page</h1>} />
          <Route path='/project/upload' element={<h1>Project Upload</h1>} />
          <Route path='/project/edit' element={<h1>Edit page</h1>} />
          <Route path='*' element={<h1>Page does not Exists</h1>} />
    </Routes>
  )
}

export default AllRoutes