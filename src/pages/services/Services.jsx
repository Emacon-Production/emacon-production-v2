import React from 'react'
import './services.css'
import Navigation from '../../components/navigation/Navigation'
import Footer from '../../components/footer/Footer'
import services from '../../assets/Services.json'
import ServiceCard from '../../components/service-card/ServiceCard'

const Services = () => {
  return (
    <div className='servicespage_wrapper'>
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