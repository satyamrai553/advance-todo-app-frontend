import axios from "axios"
import { useEffect, useState } from "react"



function App() {
 const [data,setData] = useState([]);

useEffect(()=>{
  axios.get(`${import.meta.env.VITE_API_URL}/read`)
  .then((response) => {
    console.log(response.data.data[0])
    setData(response.data.data[0])
  })
  .catch((error) => {
    console.log(error)
  })
  
},[])

  return (
    <>
    <h1 className="text-3xl font-bold underline">ToDo App</h1>
    <div>{data.title}</div>
    </>
  )
}

export default App
