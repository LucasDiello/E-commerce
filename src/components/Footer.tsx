import React from 'react'
import "../footer.css"
import { AiFillGithub } from 'react-icons/ai'
import { BsFillTelephoneFill } from 'react-icons/bs'

function Footer() {
  return (
    <div className='footer flex justify-between p-4'>
        <div>
        <h1 className='text-white'>ByteBuy - <span className='text-red-500'>2023</span></h1>
        <p className='ml-6 text-xs text-white'>Copyright www.ByteBuy.netlify</p>
        </div>
        <div className='flex mr-2'>
        <AiFillGithub size="30px" className="mr-2 text-white"/>
        <BsFillTelephoneFill size="30px" className="text-white"/>
        </div>
    </div>
  )
}

export default Footer