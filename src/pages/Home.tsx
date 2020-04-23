import React from 'react';
import './Home.css';
import structure from '../data/structure.json'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const Home: React.FC = () => {
  return (
    <>
      <h1>{structure.title}</h1> 
      <Accordion>
        {structure.categories.map((category) => (
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                {category.title}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <Accordion>
                {category.prayers.map((prayer) => (
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        {prayer.title}
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <CarouselProvider
                        naturalSlideWidth={1}
                        naturalSlideHeight={1}
                        totalSlides={prayer.presentations.length}
                        isIntrinsicHeight={true}
                      >
                        <Slider>
                          {prayer.presentations.map((presentation, index) => (
                            <Slide index={index}>
                              {presentation}
                            </Slide>
                          ))}
                        </Slider>
                        <ButtonBack>Back</ButtonBack>
                        <ButtonNext>Next</ButtonNext>
                        <DotGroup/>
                      </CarouselProvider>
                    </AccordionItemPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Home;
