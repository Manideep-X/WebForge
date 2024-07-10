import { Box, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import Typewriter from 'typewriter-effect';
// import Typewriter from 'typewriter-effect/dist/core';

const About = () => {
  const typeText = {
    text1: "Where to find a good template for my portfolio ?",
    text2: "How to create a website easily ?",
    text3: "Where to find a good design for my website ?",
    text4: "How to make the frontend effortless ?",
  }
  const aboutData = {
    text1: "Welcome to WebForge, your ultimate destination for effortless website creation and customization. At WebForge, we believe that building a stunning, professional website should be accessible to everyone, regardless of their technical expertise. That’s why we’ve crafted an intuitive platform that empowers users to create, customize, and launch their websites with ease and efficiency.",
    text2: "Our vision at WebForge is to democratize web design by simplifying the process of creating beautiful, responsive websites. We strive to remove the barriers that often hinder creativity and innovation, enabling individuals and businesses to bring their online presence to life without the need for extensive coding knowledge or expensive resources.",
    q1: "Do you often stumble upon these questions?",
    a1: "We may have the solution for you",
    svg1: "/src/assets/search.svg"
  }

  return (
    <section id='about' className='flex w-full'>
      <Box className='flex px-[8vw] my-12 bg-[#e8e8e8]'>
        <VStack className='relative w-1/2'>
          <Text>{aboutData.q1}</Text>
          <img src={aboutData.svg1} alt='search logo' />
          <Box className='absolute'>
            <Typewriter
              options={{
                loop: true,
                delay: 50,
                deleteSpeed: 20,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(typeText.text1)
                  .pauseFor(1000)
                  .deleteAll(20)
                  .typeString(typeText.text2)
                  .pauseFor(1000)
                  .deleteAll(20)
                  .typeString(typeText.text3)
                  .pauseFor(1000)
                  .deleteAll(20)
                  .typeString(typeText.text4)
                  .pauseFor(1000)
                  .deleteAll(20)
                  .start();
              }}
            />
          </Box>
          <Text>{aboutData.a1}</Text>
        </VStack>
        <VStack className='w-1/2'>
          <Heading>About</Heading>
          <Text>{aboutData.text1}</Text>
          <Heading>Our Vision</Heading>
          <Text>{aboutData.text2}</Text>
        </VStack>
        <VStack>
        </VStack>
      </Box>
    </section>
  )
}

export default About
