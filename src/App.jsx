import React from 'react'
import Navbar from './Component/Navbar'
import Add from './Component/Add'
const App = () => {
  return (
    <>
    <Navbar />
    <div className="container mx-auto p-4 rounded-xl p-5 bg-green-200 mt-5"> 
      
        <h2 className="text-3xl font-bold text-center">
          Welcome to Todo-List
        </h2>
      
    </div>
    <Add />
    </>
  )
}

export default App