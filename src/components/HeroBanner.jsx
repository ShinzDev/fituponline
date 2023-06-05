import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import heroimage from '../assets/assets/images/banner.png'
import './hero.css'
const HeroBanner = () => {
  return (
    <Box  sx={{ mt: {lg: '212px', xs: '70px'},   
                ml:{sm: '50px'} }} position='relative' p='20px' >
      <Typography color=" #ff2625" fontWeight='600' fontSize='26px'>
        Fitness Club
      </Typography>
      <Typography fontWeight={700} 
      sx={{ fontSize: { lg: '44px ', xs : '40px'} }} mb='23px' mt='30px'>
        Sweat, Smile <br/> and Repeat 
      </Typography>
      <Typography  fontSize='22' lineHeight='35px'mb={4} > 
      Check out the most effective exercises
      </Typography>
      <Button variant='contained' color='error' herf='#exercise'   sx={{background: 'ff2745', padding: '10px'}}> Explore Exercise </Button>
      <Typography fontWeight={600} color='FF2625' sx={{
        opacity: 0.3,
        display: {lg: 'block', xs: 'none'}
       }} fontSize='200px'>

      Exercise
      </Typography>
      <img src={heroimage}   alt="banner" className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner
 