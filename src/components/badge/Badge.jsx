import React from 'react'
import './badge.css'

const Badge = ({ placeholder }) => {
  return (
    <div className='badge_wrapper'>
        <span>{placeholder}</span>
    </div>
  )
}

export default Badge