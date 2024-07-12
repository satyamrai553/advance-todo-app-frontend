import axios from "axios"
import Nav from "./components/Nav"
import { useEffect, useState } from "react"
import Card from "./components/Card";
import { CirclePlus } from 'lucide-react'; 
import InputBox from "./components/InputBox";



function App() {
 const [data, setData] = useState([]);
 const[showModal, setShowModal] = useState(false);
 useEffect(()=>{
  axios.get('/api/v1/todo/read')
  .then((response) => {
    setData(response.data.data)
    
  })
  .catch((error) => {
    console.log(error)
  })
 },[data])




  return (
    <><div className="overflow: 'hidden', width: '100vw', height: '100vh' bg-[#0B0C10]">
     <Nav/>
     <div className="flex justify-center relative">
     <h1 className="text-6xl font-bold font-mono text-[#CADCFC] text-center mt-6">Todo App</h1>
     <button onClick={()=>setShowModal(true)} className="absolute top-12 right-52"><CirclePlus size={36} color="#ffffff" /></button>
     </div>
      
    
        <div className="mx-auto grid grid-cols-3 mt-10 justify-items-center">{data.map((data)=>{
          
          return <Card key={data._id} title={data.title} description={data.description}/>
        })}</div>

      {showModal && <InputBox onClose={() => setShowModal(false)}/>}
      
    </div>
    
    </>
  )
}

export default App
