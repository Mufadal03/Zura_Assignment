import React from 'react'
import {  FiPlus, Logo, PodcastImg, Setting } from '../assets'

const Home = () => {
  return (
      <div className='h-screen'>
          <div className='flex items-center p-1'>
              <img src={Logo} alt="Logo" />
              <h1 className='text-[2rem] font-extrabold text-purple '>LAMA</h1>
          </div>
          <div className="flex justify-end max-w-[95%] mx-auto" >
              <img src={Setting} alt="setting" />
              <img src={Logo} alt="setting" />
          </div>
          <div className='max-w-screen-xl mx-auto'>
              <h1 className='text-purple text-[3rem] font-bold text-center'> Create a New Project</h1>
              <div className="flex flex-col items-center my-2">
                  <img className='w-[35%]' src={PodcastImg} alt="podcast" />
                  <p className='text-center text-[1.5rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</p>
              </div>
          </div>
          <div className='flex justify-center mt-1'>
              <button className=' flex items-center gap-2 justify-center bg-activeBlack text-white text-[2rem] p-3 w-[25%] rounded-lg'>
                  <FiPlus />
                  Create New Project
              </button>
          </div>
    </div>
  )
}

export default Home