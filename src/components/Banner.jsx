import { Heading, HStack, Image, Text, VStack, Button, Box } from '@chakra-ui/react'
import React from 'react'

const Banner = () => {
    const bannerText = {
        title: "Create and customize your own website",
        title2: " with a little",
        twist: "twist✦",
        description: "Choose from various templates, personalize the elements, and seamlessly download your site. Experience simple, efficient web design for FREE.",
        imgSrc: "/src/assets/searchImg.svg"
    }

    return (
        <section>
            <HStack className='absolute top-0 w-full border h-[40rem] pl-[8vw] pt-10'>
                <Box className='flex-row w-[46%] items-baseline'>
                    <Heading>{bannerText.title}</Heading>
                    <HStack>
                        <Heading>{bannerText.title2}</Heading>
                        <Heading>{bannerText.twist}</Heading>
                    </HStack>
                    <Text>{bannerText.description}</Text>
                    <Box className='flex gap-8'>
                        <Button border='2px' className='text-lg bg-[#e6e6e6] active:bg-[#f7f7f7] text-[#132330de] hover:text-[#182a38f3] font-black py-2 px-5 rounded-full shadow-xl hover:shadow-lg active:shadow-inner transition-all'>Explore more</Button>
                        <Button className='block text-lg font-black bg-[#132330de] text-white py-2 px-5 rounded-full hover:bg-[#182a38f3] active:bg-[#000000] shadow-xl active:shadow-none transition-all'>Get Started</Button>
                    </Box>
                </Box>
                <Image className='w-1/2' src={bannerText.imgSrc} alt='WebForge' />
            </HStack>
        </section>
    )
}

export default Banner
