import React, { useState } from 'react'
import { Notification, SettingMain } from '../assets'
import UploadPodcast from '../components/UploadPodcast'
import PoadcastListing from '../components/PoadcastListing'

const Upload = () => {
    const [episodes] = useState([1])
  return (
      <div className='w-3/4 p-5'>
          <div className="flex justify-between border-2" >
              <div>Breadcrum here</div>
              <div className='flex gap-2'>
                  <img src={SettingMain} alt="setting" className='h-[2.5rem]' />
                  <img src={Notification} alt="notification"  className='h-[2.5rem]'/>
              </div>
          </div>
          {
              episodes?.length>0 ? <PoadcastListing />:<UploadPodcast />
          }
          
    </div>
  )
}

export default Upload