import React from 'react'
import './about.css'
import Navigation from '../../components/navigation/Navigation'
import Footer from '../../components/footer/Footer'
import { Helmet } from 'react-helmet-async'
import TestimonialCard from '../../components/testimonial-card/TestimonialCard'
import testimonials from '../../assets/Testimonials.json'
// import ContactForm from '../../components/contact-form/ContactForm'

const teamData = [
  {
    name: "Victor Githui",
    role: "Creative Director & Film Director",
    thumbnail: "https://res.cloudinary.com/emacon-production/image/upload/v1689595132/Emacon%20Production/WhatsApp_Image_2023-07-17_at_14.58.17_sxwtcp.jpg"
  },
  {
    name: "Alex Wanjau",
    role: "Partner & Performance Marketer",
    thumbnail: "https://res.cloudinary.com/emacon-production/image/upload/v1764769488/Emacon%20Production/Gemini_Generated_Image_zeg7b0zeg7b0zeg7_chl0ws.png"
  },
  {
    name: "Brian Muchemi",
    role: "Business Development",
    thumbnail: "https://res.cloudinary.com/emacon-production/image/upload/v1686213304/techworks/WhatsApp_Image_2023-06-08_at_10.38.15_zr1qzs.jpg"
  },
  {
    name: "Francis Kiguta",
    role: "Photographer & Filmmaker",
    thumbnail: "https://res.cloudinary.com/emacon-production/image/upload/v1764691022/Emacon%20Production/DSC04165_2_km19kl.jpg"
  },
  {
    name: "Craig Mumo",
    role: "Filmmaker",
    thumbnail: "https://res.cloudinary.com/emacon-production/image/upload/v1764765137/Emacon%20Production/Screenshot_2025-12-03_at_15.31.59_lde03v.png"
  },
  {
    name: "Tamara Mungai",
    role: "Social Media Strategist",
    thumbnail: "https://res.cloudinary.com/emacon-production/image/upload/v1764690432/Emacon%20Production/DSCF0227_xbociu.jpg"
  },
]

const About = () => {
  return (
    <div className='aboutpage_wrapper'>
      {/* SEO Meta Data */}
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

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <div className='aboutpage_sectionone'>
          <h1>
              We build bridges between <span className='word_emphasy_v1' >companies and customers</span>
          </h1>
          <p>
            Emacon Production is a performance-driven creative agency committed to shaping how brands communicate, connect, and grow in the digital age. Based in Nairobi and inspired by Africa’s rich visual identity, we blend strategic thinking, powerful storytelling, and high-end production to create content that doesn’t just look exceptional, it delivers measurable impact. <br/><br/>
            With end-to-end full-service digital capabilities, we’re on a mission to connect your cause with the individuals who will care about it the most. Every project we handle is intentional guided by insight, refined by strategy, and brought to life through world-class photography, videography, digital campaigns, and creative innovation.
          </p>
      </div>

      {/* Our team Section */}
      <div className='aboutpage_sectiontwo'>
        <h1>Our <span className='word_emphasy_v1' >Team</span></h1>
        <p>
          From brand stories and lifestyle campaigns to social media performance, marketing strategy, and web experiences, we create work that elevates brands and speaks directly to their audiences. Our diverse team of filmmakers, photographers, strategists, designers, and marketers share a commitment to excellence, collaboration, and meaningful storytelling.
        </p>
        <div className='teamcards_wrapper'>
          {
            teamData.map((member, index) => (
              <div className='teamcard' key={index}>
                <img src={member.thumbnail} alt={member.name} />
                <div className='teamcard_details'>
                  <h4>{member.name}</h4>
                  <p>{member.role}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      {/* Reviews/ Testimonials */}
              <div className='testimonials_wrapper'>
                  <div className='testimonials_sectionOne'>
                      <div>
                          <h3>TESTIMONIALS</h3>
                          <h1>
                              What People <span className='word_emphasy_v1'>Say</span> About Us
                          </h1>
                      </div>
                  </div>
                  <div className='testimonials_sectionTwo'>
                      {
                          testimonials.map((testimonial, index) => (
                              <React.Fragment>
                                  {
                                      index < 4 ? <TestimonialCard data={testimonial} key={index} /> : null
                                  }
                              </React.Fragment>) )
                      }
                  </div>
              </div>

      {/* <ContactForm /> */}

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default About