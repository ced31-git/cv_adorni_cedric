import React from 'react'
import Card from './Card'
import DataFullProjects from '../dataComponents/dataProjetsComplets'

const FullProjects = () => {
  return (
    <div><Card details={DataFullProjects}/></div>
  )
}

export default FullProjects