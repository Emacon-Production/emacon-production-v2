import React from 'react'
import './blogs.css'
import Navigation from '../../components/navigation/Navigation'
import Footer from '../../components/footer/Footer'

const Blogs = () => {
    

  return (
    <div>
        <Navigation />

        <div className='blogsage_sectionone'>
            <img src='https://res.cloudinary.com/emacon-production/image/upload/v1687443940/Emacon%20Production/undraw_under_construction_46pa_1_hy4whe.png' alt='Emacon Production | Blog' />
            <h1>COMMING SOON...</h1>
        </div>

        <Footer />
    </div>
  )
}

export default Blogs