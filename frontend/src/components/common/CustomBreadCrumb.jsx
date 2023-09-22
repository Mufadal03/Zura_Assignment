import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Home } from '../../assets'
import { useLocation } from 'react-router-dom'

const CustomBreadCrumb = () => {
  const location = useLocation()
  const [crumbItem, setCrumbItem] = useState('')
  useEffect(() => {
    const pathnames = location.pathname.split('/').filter(el=>el!='')
    if (pathnames.includes('edit')) {
      setCrumbItem('Transcript')
    } else if (pathnames.includes('upload')) {
      setCrumbItem('Upload')
    } else if (pathnames.includes('account')) {
      setCrumbItem('Account Setting')
    } else if (pathnames.includes('configuration')) {
      setCrumbItem("Widget Configuration")
    }
  },[])
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">
          <img className="h-[30px]" src={Home} alt="home" />
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="#">
          <p className='text-purple font-[600] text-xl'>{crumbItem}</p>
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}

export default CustomBreadCrumb