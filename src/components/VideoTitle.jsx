import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[20%] w-screen  aspect-video md:px-12 px-3 absolute text-white'>
        <h1 className='md:text-6xl text-2xl   font-extrabold'>{title}</h1>
        <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview} </p>
        <div className=''>
            <button className=' md:px-12 md:mx-2 mx-4 mt-4 md:mt-0 text-black bg-white text-xs md:text-lg font-bold rounded-lg   hover:opacity-70 p-1 w-16  md:p-4 md:w-40 '> ▶ Play</button>
            <button className='hidden md:inline-block bg-gray-500 px-12 mx-2 text-white text-lg font-bold rounded-lg  opacity-50 p-4 '>  More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle