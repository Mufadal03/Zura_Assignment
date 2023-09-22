import React from 'react'
import CustomBreadCrumb from './CustomBreadCrumb'
import { Notification, SettingMain } from '../../assets';

const NavigationBar = () => {
  return (
    <div className="flex pb-2 justify-between items-center">
      <CustomBreadCrumb />
        <div className="flex gap-2">
          <img src={SettingMain} alt="setting" className="h-[2.5rem]" />
          <img src={Notification} alt="notification" className="h-[2.5rem]" />
        </div>
    </div>
  );
}

export default NavigationBar