import React from 'react'
import "./projectcard.css"
import Links from '../links/Links'

const ProjectCard = ({ data }) => {
  return (
    <div className='projectCard_wrapper'>
        <div className='projectCard_thumbnail'>
            <img 
                src={data.thumbnail} 
                alt={`Emacon Production | ${data.projectType}`} 
            />
        </div>

        <div className='projectcard_content'>
            <h3>{`${data.projectName} | ${data.clientName}`}</h3>
            <p>{data.projectType}</p>
            <p>
                {data.projectDescription} 
            </p>
            <Links Placeholder="View Project" targetLink={data.projectLink} />
        </div>
    </div>
  )
}

export default ProjectCard