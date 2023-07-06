import React from 'react'
import './blogs.css'
import Navigation from '../../components/navigation/Navigation'
import Footer from '../../components/footer/Footer'
import { Helmet } from 'react-helmet-async'

const Blogs = () => {
    

  return (
    <div>
      <Helmet>
        <title>Insights</title>
        <meta 
          name='description' 
          content="With end-to-end full-service digital capabilities, we're on a mission to connect your cause with the individuals who will care about it the most. "
        />
        <link rel='canonical' href='/blogs' />
      </Helmet>

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