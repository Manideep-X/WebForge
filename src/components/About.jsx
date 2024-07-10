import { Box, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import Typewriter from 'typewriter-effect';
// import Typewriter from 'typewriter-effect/dist/core';

const About = () => {
  const typeText = {
    text1: "Where to find a good template for my portfolio?",
    text2: "How to create a website easily?",
    text3: "Where to find a good design for my website?",
    text4: "How to make the frontend effortless?",
  }
  const aboutData = {
    text1_1: <><strong className='text-3xl'>W</strong>elcome to WebForge, your ultimate destination for effortless website creation and customization. At WebForge, we believe that building a stunning, professional website should be accessible to everyone, regardless of their technical expertise.</>,
    text1_2: <><strong className='text-3xl'>T</strong>hat's why we've crafted an intuitive platform that empowers users to create, customize, and launch their websites with ease and efficiency.</>,
    text2_1: <><strong className='text-3xl'>O</strong>ur vision at WebForge is to democratize web design by simplifying the process of creating beautiful, responsive websites.</>,
    text2_2: <><strong className='text-3xl'>W</strong>e strive to remove the barriers that often hinder creativity and innovation, enabling individuals and businesses to bring their online presence to life without the need for extensive coding knowledge or expensive resources.</>,
    q1: `"Do you often stumble upon these questions?"`,
    a1: `"We may have the solution for you"`,
    svg1: "/src/assets/Search.png",
    png1: "/src/assets/onlineTalks.gif",
  }

  return (
    <section id='about' className='flex w-full'>
      <VStack className='px-[8vw] my-12 bg-[#e8e8e8]'>
        <Box className='flex'>
          <VStack className='relative w-2/3 flex justify-center'>
            <Text className='text-xl font-bold mt-10'>{aboutData.q1}</Text>
            <img src={aboutData.svg1} alt='search logo' className='absolute right-[2vw] top-[12vh]' />
            <Box className='absolute top-[35vh] left-[9vw] w-[28rem] text-[1.3vw]'>
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
            <Text className='text-xl font-bold'>{aboutData.a1}</Text>
          </VStack>
          <VStack className='w-1/3 justify-center'>
            <Heading className='text-4xl font-black text-[#313f4a]'>About</Heading>
            <div className="text font-light text-lg bg-white rounded-2xl p-10 shadow-xl z-[5]">
              <Text className='text-[#313f4a]'>{aboutData.text1_1}</Text>
              <Text className='text-[#313f4a]'>{aboutData.text1_2}</Text>
            </div>
          </VStack>
        </Box>
        <Box className='flex'>
          <VStack className='w-1/2 justify-center px-[5vw]'>
            <Heading className='text-4xl font-black text-[#313f4a]'>Our Vision</Heading>
            <div className="text font-light text-lg bg-white rounded-2xl p-10 shadow-xl">
              <Text className='text-[#313f4a]'>{aboutData.text2_1}</Text>
              <Text className='text-[#313f4a]'>{aboutData.text2_2}</Text>
            </div>
          </VStack>
          <img src={aboutData.png1} alt="vision logo" className='w-1/2' />
        </Box>
      </VStack>
    </section>
  )
}

export default About
