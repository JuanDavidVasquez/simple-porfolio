import React from 'react'

export default function ProjectDetail({ selectedProject }) {

    console.log(selectedProject)

  return (
    <div>{selectedProject && <h1>{selectedProject}</h1>}</div>
  )
}
