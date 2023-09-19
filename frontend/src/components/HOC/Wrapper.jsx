import React from 'react'
import NavigationDrawer from '../common/NavigationDrawer'

const Wrapper = ({children}) => {
  return (
      <div className='flex'>
          <NavigationDrawer />
          {children}
      </div>
  )
}

export default Wrapper