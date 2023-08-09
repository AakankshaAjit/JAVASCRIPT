import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './Screens/Home'
import Product from './Screens/Product'


const Routing = () => {
  return (
<BrowserRouter>
<Routes>

<Route  path='/' element={<Home/>}/>
<Route  path='/:id' element={<Product/>}/>


</Routes>
</BrowserRouter>
  )
}

export default Routing