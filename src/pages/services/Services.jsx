import React from 'react'
import './services.css'
import Navigation from '../../components/navigation/Navigation'
import Footer from '../../components/footer/Footer'
import services from '../../assets/Services.json'
import ServiceCard from '../../components/service-card/ServiceCard'
import { Helmet } from 'react-helmet-async'

const Services = () => {
  return (
    <div className='servicespage_wrapper'>
        <Helmet>
            <title>Our Services | Emacon Production</title>
            <meta 
            name='description' 
            content="Our services include Photography, Video Production, Digital Marketing and Web Design & Development."
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
            <link rel='canonical' href='/services' />
        </Helmet>

        <Navigation />

        <div className='servicespage_sectionone'>
            <h1>OUR SERVICES</h1>
            <p>
                With the use of technology, creativity, and strategy, we build brands and digital enterprises.
            </p>

            <div className='home_services_sectionTwo' >
                {
                    services.map((service, index) => (
                        <ServiceCard 
                            key={index}
                            name={service.name}
                            description={service.description}
                            routeName={service.targetLink}
                            thumbnail={service.thumbnail}
                        />
                    ))
                }
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default Services