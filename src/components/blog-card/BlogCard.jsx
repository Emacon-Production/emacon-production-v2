import React from 'react'
import './blogcard.css'
import Links from '../links/Links'
import Badge from '../badge/Badge'

const BlogCard = ({ data }) => {
  return (
    <div className='blogCard_wrapper'>
        <div className='blogCard_thumbnail'>
            <img 
                src={data.thumbnail} 
                alt={`Emacon Production | ${data.projectType}`} 
            />
        </div>

        <div className='blogCard_content'>
            <Badge placeholder={data.tag} />
            <h3>{data.title}</h3>
            <p>{data.date}</p>
            <p>
                {data.article} 
            </p>
            <Links Placeholder="Learn More" targetLink="/work" />
        </div>
    </div>
  )
}

export default BlogCard