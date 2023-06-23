import React from 'react'
import './about.css'
import Navigation from '../../components/navigation/Navigation'
import Footer from '../../components/footer/Footer'

const About = () => {
  return (
    <div className='aboutpage_wrapper'>
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