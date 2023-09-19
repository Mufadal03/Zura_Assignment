import React from 'react'
import {PlusIcon, PodcastImg} from '../assets'

const LandingPage = () => {
  return (
     <div>
              <div className='max-w-screen-xl mx-auto'>
              <h1 className='text-purple text-[3rem] font-bold text-center'> Create a New Project</h1>
              <div className="flex flex-col items-center my-2">
                  <img className='w-[35%]' src={PodcastImg} alt="podcast" />
                  <p className='text-center text-[1.5rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</p>
              </div>
          </div>
          <div className='flex justify-center mt-1'>
              <button className=' flex items-center gap-3 justify-center bg-activeBlack text-white text-[2rem] p-3 w-[25%] rounded-lg'>
                  <img src={PlusIcon} alt='plusIcon' className='h-[30px]' />
                  Create New Project
              </button>
          </div>
    </div>
  )
}

export default LandingPage