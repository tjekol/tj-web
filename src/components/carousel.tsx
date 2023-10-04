// https://chakra-templates.dev/page-sections/carousels

// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { Box, IconButton } from '@chakra-ui/react';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import React from 'react';

import blomster from '../assets/blomster.jpeg';
import hester from '../assets/hester.jpeg';
import hjerte from '../assets/hjerte.jpeg';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the images used in the slide
  const cards = [blomster.src, hester.src, hjerte.src];

  return (
    <Box
      position={'relative'}
      height={'180'}
      width='300'
      overflow={'hidden'}
      rounded='12'
    >
      {/* CSS files for react-slick */}
      <link
        rel='stylesheet'
        type='text/css'
        href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
      />
      <link
        rel='stylesheet'
        type='text/css'
        href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
      />
      {/* Left Icon */}
      <IconButton
        size='sm'
        aria-label='left-arrow'
        borderRadius='full'
        position='absolute'
        left='10px'
        top='50%'
        transform={'translate(-15%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        size='sm'
        aria-label='right-arrow'
        borderRadius='full'
        position='absolute'
        right='10px'
        top='50%'
        transform={'translate(15%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((image, index) => (
          <Box
            key={index}
            height={'180'}
            position='relative'
            backgroundPosition='center'
            backgroundRepeat='no-repeat'
            backgroundSize='cover'
            backgroundImage={`url(${image})`}
          />
        ))}
      </Slider>
    </Box>
  );
}
