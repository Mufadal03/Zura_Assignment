import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurretProjectId } from '../../assets'

const UploadPageRe = () => {
    const navigate = useNavigate()
    const id = getCurretProjectId()
    useEffect(() => {
        if (!id) navigate('/')
       else navigate(`/project/upload/${id}`);
    },[])
  return (
    <div>UploadPageRe</div>
  )
}

export default UploadPageRe