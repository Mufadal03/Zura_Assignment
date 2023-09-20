import React from 'react'

const PlatformCard = ({src,text}) => {
  return (
    <div style={{'border':'1px solid #999 ','boxShadow':'0px 0px 0px 0px rgba(0, 0, 0, 0.06), 1px 2px 5px 0px rgba(0, 0, 0, 0.06), 4px 8px 9px 0px rgba(0, 0, 0, 0.05), 9px 18px 12px 0px rgba(0, 0, 0, 0.03), 16px 32px 14px 0px rgba(0, 0, 0, 0.01), 25px 49px 16px 0px rgba(0, 0, 0, 0.00)'}} className='border-2 justify-between rounded-lg px-6 py-3 w-[80%] flex items-center gap-5'>
      <img src={src} className='h-[60px]' alt='platformImg'  />
      <p className={'font-semibold text-lg'}>{ text}</p>
    </div>
  )
}

export default PlatformCard