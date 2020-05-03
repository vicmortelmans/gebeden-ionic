import React from 'react'; 
import { IonContent } from '@ionic/react';
import ReactMarkdownFromAsset from '../components/ReactMarkdownFromAsset'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, } from 'react-accessible-accordion';
import './Accordion.css';
import { useMediaQuery } from 'react-responsive'; 
import { importAll, fitLayout, randomBackground } from './Lib'
import structure from '../data/structure.json'
import './Home.css';

// create a dictionary of packaged markdownfiles, by './<source filename>'
const markdownFiles: {[key: string]: string} = {};
importAll(
  require.context('../data/markdown/', true, /\.markdown$/),
  markdownFiles
);
// create a dictionary of packaged image files, by './<source filename>'
const imageFiles: {[key: string]: string} = {};
importAll(
  require.context('../images/scores/', true, /\.(png|gif|jpg)$/),
  imageFiles
);
const bgImage = randomBackground();

function Home () {

  const isMobile = useMediaQuery({ query: '(max-width: 800px)' });

  React.useEffect(() => {
    function handleResize() {
      fitLayout(bgImage);
    }
    fitLayout(bgImage);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
    
  }, []);

  return (
    <IonContent>
      <header className='background-span'>{structure.title}</header> 
      {console.log("RENDERING")}
      <Accordion 
        allowZeroExpanded={true} 
        className='category'
        >
        {structure.categories.map((category) => (
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton className='background-span accordion-button'>
                {category.title}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel style={{padding: 0}}>
              <Accordion allowZeroExpanded={true} className='prayer'>
                {category.prayers.map((prayer) => (
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton className='accordion-button prayer-button'>
                        {prayer.title}
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <CarouselProvider
                        naturalSlideWidth={1}
                        naturalSlideHeight={1}
                        totalSlides={prayer.presentations.length}
                        visibleSlides={isMobile ? 1 : Math.max(2, prayer.presentations.length)}
                        infinite={true}
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
