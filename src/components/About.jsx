import { Box, Heading, HStack, Text, VStack } from '@chakra-ui/react';

const About = () => {
  const aboutData = {
    text1_1: <><strong className='text-3xl'>W</strong>elcome to WebForge, your ultimate destination for effortless website creation and customization. At WebForge, we believe that building a stunning, professional website should be accessible to everyone, regardless of their technical expertise.</>,
    text1_2: <><strong className='text-3xl'>T</strong>hat's why we've crafted an intuitive platform that empowers users to create, customize, and launch their websites with ease and efficiency.</>,
    text2_1: <><strong className='text-3xl'>O</strong>ur vision at WebForge is to democratize web design by simplifying the process of creating beautiful, responsive websites.</>,
    text2_2: <><strong className='text-3xl'>W</strong>e strive to remove the barriers that often hinder creativity and innovation, enabling individuals and businesses to bring their online presence to life without the need for extensive coding knowledge or expensive resources.</>,
    q1: `"Do you often stumble upon these questions?"`,
    a1: `"We may have the solution for you"`,
    svg1: "/src/assets/searching.gif",
    png1: "/src/assets/onlineTalks.gif",
  }

  return (
    <section id='about' className='flex w-full'>
      <VStack className='px-[8vw] my-12 bg-[#e8e8e8]'>
        <Box className='flex pt-20'>
          <VStack className='w-2/3 flex justify-center italic pr-[4vw]'>
            <Text className='text-2xl font-thin mt-10'>{aboutData.q1}</Text>
            <img src={aboutData.svg1} alt='search logo' />
            <Text className='text-2xl font-thin'>{aboutData.a1}</Text>
          </VStack>
          <VStack className='w-1/3 justify-center'>
            <Heading className='text-4xl font-black text-[#313f4a]'>About Us</Heading>
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
