import React, { useState } from 'react'
import { Logo, Notification, Setting, SettingMain } from '../assets'
import Projects from '../components/Projects'
import LandingPage from '../components/LandingPage'

const Home = () => {
    const [projects,setprojects] = useState([1])
  return (
      <div className='h-screen'>
          <div className='flex items-center p-1'>
              <img src={Logo} alt="Logo" />
              <h1 className='text-[2rem] font-extrabold text-purple '>LAMA</h1>
          </div>
          <div className="flex justify-end max-w-[95%] mx-auto gap-2" >
              <img src={SettingMain} alt="setting" className='h-[2.5rem]' />
              <img src={Notification} alt="notification"  className='h-[2.5rem]'/>
          </div>
         {
            projects?.length > 0 ? <Projects/> :<LandingPage />
         }
    </div>
  )
}

export default Home