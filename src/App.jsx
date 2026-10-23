
import React from 'react'
import Header from './components/Header'
import MyContext from './components/MyContext'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Template from './components/Template'
import './App.css'
import Banner from './components/Banner'
import Card from './components/Card'
import productsData from "./data/productData.json"
import Cart from './components/Cart'

const App = () => {
    const router = createBrowserRouter([
        {
            path:"/",
            element:<Template/>,
            children:[
                {
                    path:"/",
                    element:
                    <>
                    <Banner/>
                    <Card/>
                    </>
                },
                {
                    path:"/cart",
                    element:<Cart/>

                }
            ]
        }
    ])
  return (
    <div>
    <MyContext.Provider value={{productsData}}>

            <RouterProvider router={router}/>
        </MyContext.Provider>
    </div>
  )
}

export default App
