import React from 'react'
import Title from '../layouts/Title'
import Card from './Card'
import { FaMobile } from 'react-icons/fa'

function Features() {
  return (
    <section id='features' className='w-full py-20'>
      <Title title="Features" desc="What I Do"/>
      <div className='grid grid-cols-3 gap-20' >
      <Card 
      title="Mobile Development"
      desc="Lorem3 buoepgegjpoerhruigoeriuh"
      icon={<FaMobile/>}
      />
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
    </section>
  )
}

export default Features