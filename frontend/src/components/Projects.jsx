import React from 'react'
import { PlusIcon } from '../assets'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div className='max-w-screen-xl mx-auto'>
          <div className='flex justify-between'>
              <h1 className='text-purple text-5xl font-bold'>Projects</h1>
              <button className=' flex items-center bg-activeBlack text-white text-lg font-bold gap-2 px-4 rounded-md'>
                  <img src={PlusIcon} alt='plus' className='h-[25px]' />
                  Create New Project
              </button>
          </div>
        <div className='grid grid-cols-3 gap-12 max-w-screen-xl mx-auto mt-5 py-2'>
            {
                new Array(9).fill(0).map((el)=>{
                    return (
                        <ProjectCard />
                    )
                })
            }
        </div>
    </div>
  )
}

export default Projects