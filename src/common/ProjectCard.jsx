import React from 'react'

function ProjectCard({ src, link, projectName, desc }) {
  return (
    <a href={link}
    target='_blank'
    >
        <img className='hover' src={src} alt={`${projectName} logo`} />
        <h3>{projectName}</h3>
        <p>{desc}</p>
    </a>
  )
}

export default ProjectCard