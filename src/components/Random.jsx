import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from './Spinner'
import useGif from '../hooks/useGif'


export const Random = () => {

  const {gif, loading, getgif} = useGif();

  return (
    <div className='w-1/2 bg-green-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>

      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'> A Random Gif</h1>
      {
        loading ? (<Spinner />) : (<img src={gif}  />)
      }

      <button className="w-10/12 bg-green-100 uppercase text-lg py-2 rounded-lg mb-[20px]"
        onClick={()=>{getgif()}}>Generate</button>

    </div>
  )
}
