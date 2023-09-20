import React from 'react'
import PlatformCard from './PlatformCard'
import { Platforms, headings } from '../assets'
import '../App.css'
const   PoadcastListing = () => {
  return (
    <div className='mt-1'>
          <h1 className='text-purple font-bold text-4xl py-2 mb-2'>Project Name</h1>
          <div className='grid grid-cols-3' >
              {
                  Platforms.slice(0, 3).map((el, i) => <PlatformCard {...el} />)
              }
          </div>
          <div className='flex justify-between items-center px-6 text-white mt-4 rounded-lg py-4 bg-purple'>
              <p className='font-semibold'>All files are processed! Your widget is ready to go!</p>
              <button className='rounded-md bg-white text-activeBlack font-bold px-6 py-2'>Try it Out!</button>
          </div>
          
          {/* table */}
           <div className="rounded-lg  mt-4">
          <table className='min-w-full custom-table'>
              <thead>
                  <tr>
                      {headings.map((el) => <th className='p-5 text-lg font-semibold capitalize'>{el }</th>)}
                  </tr>
              </thead>
              <tbody>
                  {
                      new Array(4).fill(0).map(() => {
    
                          return (
                              <tr className='border-2 p-4'>
                                  <td className='text-center p-5'>Sample Name</td>
                                  <td className='text-center '>12 Jun 24 | 15:47</td>
                                  <td className='text-center '>Done</td>
                                  <td  className='text-center'>
                                      <button style={{'border':'0.895px solid #D9D9D9'}} className=' text-sm p-3 text-[#3C3C3C]' >Edit</button>
                                      <button style={{"border":' 0.895px solid #D9D9D9'}} className=' text-sm p-3  text-[#FF274C]' >Delete</button>
                                  </td>
                              </tr>
                          )
                      })
                  }
              </tbody>
         </table>
        </div>
      </div>
  )
}

export default PoadcastListing


  