import React, { useState, useEffect } from 'react';
import { Trash2, Pencil } from 'lucide-react';
import axios from 'axios';






function Card() {
  const [data, setData] = useState([]);


  const fetchData = ()=>{
    axios.get('/api/v1/todo/read')
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }  

  useEffect(() => {
    fetchData();
  }, []);

  const deleteHandler = async (id) => {
    try {
      const response = await axios.delete(`/api/v1/todo/delete/${id}`);
      console.log(response);
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {data.map((item) => (
        <div key={item.id} className='bg-blue-400 rounded-lg mx-5 my-5'>
          <div className='bg-yellow-300 w-72 h-auto rounded-lg border-4 p-4'>
            <div className='text-center font-sans font-medium text-lg text-gray-700'>{item.title}</div>
            <div className='bg-yellow-100 h-24 text-center font-sans text-md text-green-700 '>
              <p>{item.description}</p>
            </div>
          </div>
          <div className='grid grid-cols-3 justify-items-center my-2'>
            <button onClick={() => deleteHandler(item._id)}><Trash2 size={24} color='#ffffff' /></button>
            <button><Pencil size={24} color='#d1580d' /></button>
            <input className="w-6 h-6" type="checkbox" />
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
