import React from 'react'
import './testimonialcard.css'

const TestimonialCard = ({ data }) => {
  return (
    <div className='testimonialcard_wrapper'>
      <div className='testimonialcard_content'>
        <img 
          src='https://res.cloudinary.com/emacon-production/image/upload/v1686213304/techworks/WhatsApp_Image_2023-06-08_at_10.38.15_zr1qzs.jpg' 
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