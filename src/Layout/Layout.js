import React from 'react'
import Navbar from '../Components/Navbar'
import SocialMedia from '../Components/SocialMedia'

const Layout = ({children}) => {
    return (
        <>
            <Navbar />
            <SocialMedia />
            {children}
      </>
  )
}

export default Layout