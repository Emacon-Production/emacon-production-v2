import React from 'react'
import './about.css'
import Navigation from '../../components/navigation/Navigation'
import Footer from '../../components/footer/Footer'
import { Helmet } from 'react-helmet-async'

const About = () => {
  return (
    <div className='aboutpage_wrapper'>
      <Helmet>
        <title>About Us | Emacon Production</title>
        <meta 
          name='description' 
          content="With end-to-end full-service digital capabilities, we're on a mission to connect your cause with the individuals who will care about it the most. "
        />
        <meta
          name="keywords"
          content="Photography, Video Production, Digital Marketing, Content Creation, Brand Film, Corporate Events, Web Design & Development, Photography Services, Video Production Services, Web Design Services, Web Development Services"
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
        <link rel='canonical' href='/about' />
      </Helmet>
      <Navigation />

      <div className='aboutpage_sectionone'>
          <h1>
              We build bridges between <span className='word_emphasy_v1' >companies and customers</span>
          </h1>
          <p>
              With end-to-end full-service digital capabilities, we're on a mission to connect your cause 
              with the individuals who will care about it the most.
          </p>
      </div>

      <div className='aboutpage_sectiontwo'></div>

      <Footer />
    </div>
  )
}

export default About