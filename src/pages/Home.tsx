import React from 'react'; 
import { IonContent } from '@ionic/react';
import ReactMarkdownFromAsset from '../components/ReactMarkdownFromAsset'
import structure from '../data/structure.json'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import './Home.css';

// utilitary function to create a dictionary of packaged files 
// based on the output of require.context()
const importAll = (r: any, cache: {[key: string]: string}) => r.keys().forEach(
  (key: string) => cache[key] = r(key)
);

// create a dictionary of packaged markdownfiles, by './<source filename>'
const markdownFiles: {[key: string]: string} = {};
importAll(
  require.context('../data/markdown/', true, /\.markdown$/),
  markdownFiles
);
// create a dictionary of packaged image files, by './<source filename>'
const imageFiles: {[key: string]: string} = {};
importAll(
  require.context('../images/', true, /\.(png|gif|jpg)$/),
  imageFiles
);

function Home () {
 
  return (
    <IonContent>
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
                              <ReactMarkdownFromAsset 
                                transformImageUri={(uri: string) => imageFiles[uri]} 
                                transformMarkdownUri={(uri: string) => markdownFiles[uri]} 
                                markdownFile={'./' + presentation} 
                              />
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
    </IonContent>
  );
};

export default Home;
