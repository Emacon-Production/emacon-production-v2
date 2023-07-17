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
        <meta
              name="keywords"
              content="
                Video Production, video production companies in Africa, video production companies in East Africa, video production companies in kenya, video production companies in Nairobi, 
                video production company, video production meaning, video production agency,video production agency near me,video production budget, video production business, 
                video production for social media, video production for small businesses, Nairobi Videographer, Nairobi Photographer,
                Travel Photography & Video production, travel photography companies,
                Documentary Video Production & Photography, documentary video production, documentary video production house, film video production, documentary video editing, full video production service, film & video production house, full video production agency, documentary video production company, video/film production companies, video film production agency,
                corporate Photography, corporate photography pricing, corporate photography near me"
            />
        <link rel='canonical' href='/blogs' />
      </Helmet>

        <Navigation />

        <div className='blogsage_sectionone'>
            <img src='https://res.cloudinary.com/emacon-production/image/upload/v1687443940/Emacon%20Production/undraw_under_construction_46pa_1_hy4whe.png' alt='Emacon Production | Blog' />
            <h1>COMING SOON...</h1>
        </div>

        <Footer />
    </div>
  )
}

export default Blogs