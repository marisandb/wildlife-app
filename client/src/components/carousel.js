import React, { useState } from 'react';
import { CarouselImages } from './carouselImages';
import { Image, Button, ButtonGroup, Box, VStack} from "@chakra-ui/react"


const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <Box display="flex" mt="2" alignItems="center">
      <VStack>
      {CarouselImages.map((slide, index) => {
        return (
          <div
          className={index === current ? 'slide active' : 'slide'}
          key={index}
          >
            {index === current && (
              <Image src={slide.image} boxSize="250px"
              objectFit="cover" alt='various wildlife'/>
              )}
          </div>
        );
      })}
       <Box display="flex" mt="2" alignItems="center">
        <ButtonGroup variant="outline" spacing="6">
        <Button colorScheme="green" onClick={prevSlide}>Previous Photo</Button>
        <Button colorScheme="green" onClick={nextSlide}>Next Photo</Button>
        </ButtonGroup>
       </Box>
       </VStack>
    </Box>
  );
};

export default Carousel;