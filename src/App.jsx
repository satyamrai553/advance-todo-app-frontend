import axios from "axios"
import Nav from "./assets/Nav"
import { useEffect, useState } from "react"
import Card from "./assets/Card";



function App() {
 const [data, setData] = useState([]);
 useEffect(()=>{
  axios.get('/api/v1/todo/read')
  .then((response) => {
    setData(response.data.data)
    
  })
  .catch((error) => {
    console.log(error)
  })
 },[setData])




  return (
    <><div className="w-screen h-screen bg-[#0B0C10]">
     <Nav/>
      <h1 className="text-6xl font-bold font-mono text-[#CADCFC] text-center mt-6">Todo App</h1>
    
        <div className="flex justify-center mt-10">{data.map((data)=>{
          return <Card key={data._id} title={data.title} description={data.description}/>
        })}</div>
      
    </div>
    
    </>
  )
}

export default App
