import { Box, FormControl, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react'
import React from 'react'

const ContactUs = () => {
  return (
    <section id='contactUs' className='bg-[#acb1b5] py-12'>
      <Heading className='text-center'>Feel free to contact us</Heading>
      <Box className='w-[60vw] p-[3vw] my-0 mt-4 mx-auto bg-white shadow-lg rounded-3xl'>
        <form>
          <VStack>
            <Box className='flex w-full gap-3'>
              <FormControl>
                <FormLabel htmlFor='name'>Name</FormLabel>
                <Input id='name' name='name' placeholder='Full Name' borderColor='#acb1b5' focusBorderColor='#313f4a' />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input id='email' type='email' name='email' placeholder='Your Email' borderColor='#acb1b5' focusBorderColor='#313f4a' />
              </FormControl>
            </Box>
            <FormControl>
              <FormLabel htmlFor='subject'>Subject</FormLabel>
              <Input id='subject' name='subject' placeholder='Subject or Topic' borderColor='#acb1b5' focusBorderColor='#313f4a' />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor='msg'>Message</FormLabel>
              <Textarea
                id='msg'
                name='msg'
                placeholder='Write your message in detail'
                rows='8'
                size='md'
                resize='none'
                borderColor='#acb1b5' focusBorderColor='#313f4a' 
              />
            </FormControl>
            <button type='submit' className='block w-1/2 text-lg font-black bg-[#132330de] text-white py-2 px-5 mt-3 rounded-full hover:bg-[#182a38f3] active:bg-[#000000] shadow-lg active:shadow-none transition-all'>Submit Message</button>
          </VStack>
        </form>
      </Box>
    </section>
  )
}

export default ContactUs
