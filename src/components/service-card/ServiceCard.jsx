import React from 'react'
import './servicecard.css'
import Links from '../links/Links'

const ServiceCard = ({ name, description, routeName, thumbnail }) => {
  return (
    <div class="card">
        <img className='img' src={thumbnail} alt='' />
        <span>{ name }</span>
        <p class="info">{ description }</p>
        {/* <button>Learn More</button> */}
        {
          routeName ? (
            <div className='card_btn'>
                <Links Placeholder="Learn More" type="route" targetLink={routeName} />
            </div>
          ) : null
        }
        
        
    </div>
  )
}

export default ServiceCard