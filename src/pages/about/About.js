import React from 'react'
import './about.css'
import Navigation from '../../components/navigation/Navigation'
import Footer from '../../components/footer/Footer'
import { Helmet } from 'react-helmet-async'

const teamData = [
  {
    name: "Victor Githui",
    role: "Creative Director/ Filmmaker",
    thumbnail: "https://res.cloudinary.com/emacon-production/image/upload/v1689595132/Emacon%20Production/WhatsApp_Image_2023-07-17_at_14.58.17_sxwtcp.jpg"
  },
  {
    name: "Brian Gitonga",
    role: "Business Development",
    thumbnail: "https://res.cloudinary.com/emacon-production/image/upload/v1686213304/techworks/WhatsApp_Image_2023-06-08_at_10.38.15_zr1qzs.jpg"
  },
  {
    name: "Wanjiku Nyaga",
    role: "Project Manager",
    thumbnail: "https://res.cloudinary.com/emacon-production/image/upload/v1695049627/Emacon%20Production/DSC06447-3_yfstwv.jpg"
  },
  {
    name: "Chebet Kipingor",
    role: "Head of Digital",
    thumbnail: "https://res.cloudinary.com/emacon-production/image/upload/v1691135962/Emacon%20Production/WhatsApp_Image_2023-08-04_at_10.52.06_vxozri.jpg"
  },
  {
    name: "Erick Forester",
    role: "Photographer",
    thumbnail: "https://res.cloudinary.com/emacon-production/image/upload/v1689601383/Emacon%20Production/ALISHA-085-Edit_vpod7z.jpg"
  },
  
  {
    name: "Sam Njenga",
    role: "Web Developer",
    thumbnail: "https://res.cloudinary.com/emacon-production/image/upload/v1689601598/Emacon%20Production/WhatsApp_Image_2023-07-17_at_16.13.25_hfwtjg.jpg"
  }
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
              With end-to-end full-service digital capabilities, we're on a mission to connect your cause 
              with the individuals who will care about it the most.
          </p>
      </div>

      {/* Our team Section */}
      <div className='aboutpage_sectiontwo'>
        <h1>Our <span className='word_emphasy_v1' >Team</span></h1>
        <p>
          To be the business our customers want us to be, it takes an eclectic group of passionate operators. Meet our team of 
          creators and world-class problem solvers.  
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

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default About