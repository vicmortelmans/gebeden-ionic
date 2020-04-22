import React from 'react';
import './Home.css';
import structure from '../data/structure.json'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Home: React.FC = () => {
  return (
    <>
    
      <CarouselProvider
        naturalSlideWidth={1}
        naturalSlideHeight={1}
        totalSlides={3}
        isIntrinsicHeight={true}
      >
        <p>test</p>
        <Slider>
          <Slide index={0} style={{backgroundColor: "blue"}}>I am the first Slide.</Slide>
          <Slide index={1} style={{backgroundColor: "red"}}>I am the second Slide.</Slide>
          <Slide index={2} style={{backgroundColor: "green"}}>I am the third Slide.</Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
        <DotGroup/>
        <p>test</p>
      </CarouselProvider>
      <p>second:</p>
      <CarouselProvider
        naturalSlideWidth={1}
        naturalSlideHeight={1}
        totalSlides={3}
        isIntrinsicHeight={true}
      >
        <p>test</p>
        <Slider>
          <Slide index={0} style={{backgroundColor: "blue"}}>I am the first Slide.</Slide>
          <Slide index={1} style={{backgroundColor: "red"}}>I am the second Slide.</Slide>
          <Slide index={2} style={{backgroundColor: "green"}}>I am the third Slide.</Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
        <DotGroup/>
        <p>test</p>
      </CarouselProvider>
    </>
  );
};

export default Home;
