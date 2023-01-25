import React from 'react'
import Navbar from '../Components/Navbar'
import SocialMedia from '../Components/SocialMedia'

const Layout = ({children}) => {
    return (
        <div className='h-[100vh] w-[100vw] relative'>
            <Navbar />
            <SocialMedia />
            {children}
      </div>
  )
}

export default Layout