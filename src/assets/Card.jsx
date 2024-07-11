import React from 'react'

function Card(props) {
    const {key, title , description} = props
  return (

<div className='bg-yellow-300 w-72 h-auto rounded-lg mx-5 border-4 p-4' >
    
    <div className='text-center font-sans font-medium text-lg text-gray-700'>{title}</div>
    <div className='bg-yellow-100 h-24 text-center font-sans text-md text-green-700 '>
        <p>{description}</p>
    </div>
</div>


  )
}

export default Card