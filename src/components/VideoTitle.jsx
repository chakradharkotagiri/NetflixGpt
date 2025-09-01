import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[20%] w-screen aspect-video px-12 absolute text-white'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview} </p>
        <div className=''>
            <button className=' px-12 mx-2 text-black bg-white text-lg font-bold rounded-lg  hover:opacity-70 p-4 '> ▶ Play</button>
            <button className='bg-gray-500 px-12 mx-2 text-white text-lg font-bold rounded-lg  opacity-50 p-4 '>  More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle