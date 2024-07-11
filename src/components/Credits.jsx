import { Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Credits = () => {
  const credits = {
    credit1: "/src/assets/storySet.png",
    credit2: "/src/assets/Flaticon.png",
    credit3: "/src/assets/shecodes.png",
    credit4: "/src/assets/Dribbble.png"
  }

  return (
    <section id='credits' className='flex flex-col justify-center'>
      <Heading>Credits</Heading>
      <ul className='flex'>
        <li>
          <Heading>Storyset</Heading>
          <a href="https://storyset.com/web" target='_blank'><img src={credits.credit1} alt="Story Set" /></a>
          <Text>Web Illustrations</Text>
        </li>
        <li>
          <Heading>Flaticons</Heading>
          <a href="https://www.flaticon.com/" target='_blank'><img src={credits.credit2} alt="Flaticon" /></a>
          <Text>Vector Icons</Text>
        </li>
        <li>
          <Heading>SheCodes.io</Heading>
          <a href="https://gradients.shecodes.io/" target='_blank'><img src={credits.credit3} alt="She Codes" /></a>
          <Text>Linear Color Gradients</Text>
        </li>
        <li>
          <Heading>Dribbble</Heading>
          <a href="https://dribbble.com/" target='_blank'><img src={credits.credit4} alt="Dribbble" /></a>
          <Text>Inspiration</Text>
        </li>
      </ul>
    </section>
  )
}

export default Credits
