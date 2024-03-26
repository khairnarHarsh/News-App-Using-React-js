import React, { useState } from 'react'
import NavBar from './Components/NavBar'
import NewsBoard from './Components/NewsBoard'
import NewsItem from './Components/NewsItem'

const App = () => {
  const [category,setCategory]=useState("general")
  const [page, setPage] = useState(1);
  
  return (
    <>
    <NavBar  setCategory={setCategory} setPage={setPage}/>
    <NewsBoard category={category}  page={page} setPage={setPage}/>
    </>
  )
}

export default App