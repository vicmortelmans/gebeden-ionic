import React from 'react';
import './Home.css';
import structure from '../data/structure.json'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import ReactMarkdown from 'react-markdown';

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
            <AccordionItemPanel style={{padding: 0}}>
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
                              <ReactMarkdown source={presentation.replace(/\\n/g, "\n")} escapeHtml={false}/>
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
