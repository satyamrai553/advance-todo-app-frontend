import React from 'react'
import Completed from './Completed'
import Delete from './Delete'
import Update from './Update'

function Card(props) {
    const {id, title , description} = props
  return (
<div className='bg-blue-400 rounded-lg mx-5 my-5'>
<div className='bg-yellow-300 w-72 h-auto rounded-lg  border-4 p-4' >
    
    <div className='text-center font-sans font-medium text-lg text-gray-700'>{title}</div>
    <div className='bg-yellow-100 h-24 text-center font-sans text-md text-green-700 '>
        <p>{description}</p>
    </div>
</div>

<div className='grid grid-cols-3 justify-items-center my-2'>
  <Delete id={id}/>
  <Update/>
  <Completed/>
</div>
</div>

  )
}

export default Card