import React, {  useState } from 'react'
import Spinner from './Spinner'
import useGif from '../hooks/useGif'


export const Tag = () => {

  const [tag, settag] = useState("car")
  const {gif, loading, getgif} = useGif(tag)

  return (
    <div className='w-1/2 bg-blue-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>

      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'> Random {tag} Gif</h1>
      {
        loading ? (<Spinner />) : (<img src={gif} />)
      }

      <input className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
        type="text" onChange={(event) => settag(event.target.value)}
        value={tag} />

      <button className="w-10/12 bg-blue-100 uppercase text-lg py-2 rounded-lg mb-[20px]"
        onClick={() => { getgif() }}>Generate</button>

    </div>
  )
}
