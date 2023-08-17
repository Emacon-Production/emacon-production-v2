import React from 'react'
import './testimonialcard.css'

const TestimonialCard = ({ data }) => {
  return (
    <div className='testimonialcard_wrapper'>
      <div className='testimonialcard_content'>
        <img 
          src={data.headshot} 
          alt='Emacon Production Testimonial' 
        />

        <i className='bx bxs-quote-left'></i>

        <p>
          {data.review}
        </p>

        <div className='testimonialcard_divider' />

        <p className='reviewer_name'>{data.name}</p>
        <p className='reviewer_company'>{data.role}</p>
        <p className='reviewer_company'>{data.company}</p>
      </div>
    </div>
  )
}

export default TestimonialCard