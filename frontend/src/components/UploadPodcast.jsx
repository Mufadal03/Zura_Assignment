import React from 'react'
import { CloudUpload, Platforms } from '../assets'
import PlatformCard from './PlatformCard'
const UploadPodcast = () => {
  return (
      <div className='mt-1'>
          <h1 className='text-purple font-bold text-4xl py-2 mb-2'>Upload</h1>
          <div className='grid grid-cols-3 gap-x-12 gap-y-5 ' >
              {
                Platforms.map((el, i )=> <PlatformCard {...el} />)
              }
          </div>
          <div className='flex items-center justify-center my-5'>OR</div>
          <div className='min-h-[330px] max-h-auto border-dashed border-2 border-[#999] rounded-xl flex flex-col items-center justify-center'>
              <img className='h-[80px]' src={CloudUpload} alt='upload' />
              <p className='text-#49454F text-lg'>Select a file or drag and drop here (Podcast Media or Transcription Text)</p>
              <p className='text-#00000066 text-sm'>MP4, MOV, MP3, WAV, PDF, DOCX or TXT file </p>
              <button style={{'border':'2px solid #7E22CE'}} className='border-purple px-8 py-2 rounded-full mt-5 font-bold text-purple'>Select File</button>
          </div>
      </div>
  )
}

export default UploadPodcast