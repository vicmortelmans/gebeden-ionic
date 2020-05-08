import React from 'react'; 
import { IonContent, IonFab, IonFabButton, IonIcon, IonFabList } from '@ionic/react';
import { shareSocial } from 'ionicons/icons';
import ReactMarkdownFromAsset from '../components/ReactMarkdownFromAsset'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, } from 'react-accessible-accordion';
import './Accordion.css';
import { useMediaQuery } from 'react-responsive'; 
import { useQueryState } from 'react-router-use-location-state';
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";
import { importAll, fitLayout, randomBackground, slugify } from './Lib'
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

// auxiliary function to get and set navigation state
const setQueryState = (useQueryStateSetter: Function) => {
  return (accordionUuids: [string]) => {
    useQueryStateSetter(accordionUuids.length ? accordionUuids[0] : '')  // adding {method: 'push'} not working due to limitation of preExapnded prop
  }
}
const getQueryState = (queryState: string) => {
  return queryState ? [queryState] : [];
}

const getQuote = (): any => {
  let obj = document.querySelector('div.accordion__panel:not([hidden]) div.accordion__panel:not([hidden]) p');
  return obj ? obj.textContent : '';
}

function Home () {

  const isMobile = useMediaQuery({ query: '(max-width: 800px)' });
  const [openCategory, setOpenCategory] = useQueryState<string>('category', '');
  const [openPrayer, setOpenPrayer] = useQueryState<string>('prayer', '');

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
      {console.log("RENDERING with openCategory " + openCategory + " and openPrayer " + openPrayer)}
      <Accordion 
        allowZeroExpanded={true} 
        className='category'
        preExpanded={getQueryState(openCategory)}
        onChange={setQueryState(setOpenCategory)}
        >
        {structure.categories.map((category) => (
          <AccordionItem uuid={slugify(category.title)} key={category.id}>
            <AccordionItemHeading>
              <AccordionItemButton className='background-span accordion-button'>
                {category.title}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel style={{padding: 0}}>
              <Accordion 
                allowZeroExpanded={true} 
                className='prayer'
                preExpanded={getQueryState(openPrayer)}
                onChange={setQueryState(setOpenPrayer)}
                >
                {category.prayers.map((prayer) => (
                  <AccordionItem uuid={prayer.id} key={prayer.id}>
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
                            <Slide index={index} key={presentation}>
                              <ReactMarkdownFromAsset 
                                transformImageUri={(uri: string) => imageFiles[uri]} 
                                transformMarkdownUri={(uri: string) => markdownFiles[uri]} 
                                markdownFile={'./' + presentation + '.markdown'} 
                              />
                            </Slide>
                          ))}
                        </Slider>
                        <ButtonBack className='button-back'>🢐</ButtonBack>
                        <ButtonNext className='button-next'>🢒</ButtonNext>
                      </CarouselProvider>
                    </AccordionItemPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
      <IonFab vertical='bottom' horizontal='end' slot='fixed'>
        <IonFabButton>
          <IonIcon icon={shareSocial}/>
        </IonFabButton>
        <IonFabList side='top'>
          <FacebookShareButton url={window.location.href} quote={getQuote()}>
            <FacebookIcon size={56} round={true}/>
          </FacebookShareButton>
          <TwitterShareButton url={window.location.href} title={getQuote()}>
            <TwitterIcon size={56} round={true}/>
          </TwitterShareButton>
        </IonFabList>
      </IonFab>
    </IonContent>
  );
};

export default Home;