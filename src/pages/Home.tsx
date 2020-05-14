import React, { useEffect, useState, useLayoutEffect, useCallback } from 'react'; 
import { IonContent, IonButton, IonFab, IonFabButton, IonIcon, IonFabList } from '@ionic/react';
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
import { BrowserView } from "react-device-detect";
import { importAll, fitLayout, randomBackground, truncate } from './Lib'
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

// pick a random background image
const bgImage = randomBackground();

function Home () {

  // state isMobile can be used to check if more than one carousel items
  // will fit the window width
  const isMobile = useMediaQuery({ query: '(max-width: 800px)' });

  // state openCategory and openPrayer contain the id from structure.json
  // and is synchronised with URL query string
  const [openCategory, setOpenCategory] = useQueryState<string>('category', '');
  const [openPrayer, setOpenPrayer] = useQueryState<string>('prayer', '');

  // state quote contains the current prayer in plain text 
  // (only the first item in carousel)
  const [quote, setQuote] = useState('');

  // effect to setup event handler for window resize
  // is only run once
  useEffect(() => {
    function handleResize() {
      fitLayout(bgImage);
    }
    fitLayout(bgImage);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
    
  }, []);

  // effects to scroll the open category or prayer to top of screen
  useEffect(() => {
    if (openCategory)
      document.querySelector('.category-accordion-item.' + openCategory)
        ?.scrollIntoView({
          'block': 'start',
          'behavior': 'smooth'
        });
  }, [openCategory]);

  useEffect(() => {
    if (openPrayer) {
      const item = document.querySelector('.prayer-accordion-item.' + openPrayer);
      if (item) {
        item.scrollIntoView({
            'block': 'start',
            'behavior': 'smooth'
          });
      }
    }
  }, [openPrayer]);

  // effect to increase the height of the open prayer, to fill the screen
  useLayoutEffect(() => {
    if (openPrayer) {
      const item = document.querySelector('.prayer-accordion-item.' + openPrayer);
      if (item) {
        (item as HTMLElement).style.minHeight = window.innerHeight + 'px';
      }
      return () => {
        (item as HTMLElement).style.minHeight = 'auto';
      }
    }
  }, [openPrayer]);

  // callback to convert ./<presentation>.markdown => packaged markdown file
  const transformMarkdownUri = useCallback((uri: string) => markdownFiles[uri], []);
  
  // callback to convert <imagefile> (as used inside markdown) => packaged image file
  const transformImageUri = useCallback((uri: string) => imageFiles[uri], []);

  // callback to call setOpenCategory or setOpenPrayer upon navigation
  const setQueryState = useCallback((queryStateSetter: Function) => {
    return (accordionUuids: [string]) => {
      queryStateSetter(accordionUuids.length ? accordionUuids[0] : '')  // adding {method: 'push'} not working due to limitation of preExapnded prop
    }
  }, []);

  // callback to convert openCategory or openPrayer to [] if empty
  // this is the way the accordion wants the preExpanded prop to be 
  // note: the preExpanded prop is only read on initial rendering, so
  // it can't be used for e.g. make the back button work or to 
  // collapse prayers when the parent category is collapsed
  const getQueryState = useCallback((queryState: string) => {
    return queryState ? [queryState] : [];
  }, []);

  // callback provided to ReactMarkdownFromAsset, so it can provide the plain text for the open prayer
  const getQuote = useCallback((content) => {
    setQuote(content);
  }, []);
  
  // callback to decide if ReactMarkdownFromAsset should run getQuote()
  const isOpen = useCallback((categoryId, prayerId, index) => {
    const isOpen = categoryId === openCategory && prayerId === openPrayer && index === 0;
    return isOpen; 
  }, [openCategory, openPrayer]);
  
  // callback to calculate if more than one slide can be displayed in the carousel
  const visibleSlides = useCallback((numberOfSlides) => {
    return isMobile ? 1 : Math.min(2, numberOfSlides);
  }, [isMobile]);

  return (
    <IonContent>
      <Accordion 
        allowZeroExpanded={true} 
        className='category'
        preExpanded={getQueryState(openCategory)}
        onChange={setQueryState(setOpenCategory)}
        >
        {structure.categories.map((category) => (
          <AccordionItem 
            uuid={category.id} 
            key={category.id} 
            className={'category-accordion-item ' + category.id}
            >
            <AccordionItemHeading>
              <AccordionItemButton 
                className='background-span accordion-button'>
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
                  <AccordionItem 
                    uuid={prayer.id} 
                    key={prayer.id} 
                    className={'prayer-accordion-item ' + prayer.id}
                    >
                    <AccordionItemHeading>
                      <AccordionItemButton 
                        className='accordion-button prayer-button'>
                        {prayer.title}
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <CarouselProvider
                        infinite={true}
                        isIntrinsicHeight={true}
                        lockOnWindowScroll={true}
                        naturalSlideHeight={1}
                        naturalSlideWidth={1}
                        totalSlides={prayer.presentations.length}
                        visibleSlides={visibleSlides(prayer.presentations.length)}
                      >
                        <Slider>
                          {prayer.presentations.map((presentation, index) => (
                            <Slide index={index} key={presentation} className='slide'>
                              <ReactMarkdownFromAsset 
                                transformImageUri={transformImageUri} 
                                transformMarkdownUri={transformMarkdownUri} 
                                markdownFile={'./' + presentation + '.markdown'} 
                                getQuote={isOpen(category.id, prayer.id, index) ? getQuote : null}
                              />
                            </Slide>
                          ))}
                        </Slider>
                        {
                          prayer.presentations.length > visibleSlides(prayer.presentations.length)
                          ? <>
                              <ButtonBack className='button-back'>🢐</ButtonBack>
                              <ButtonNext className='button-next'>🢒</ButtonNext>
                            </>
                          : null
                        }
                      </CarouselProvider>
                    </AccordionItemPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
      <IonButton expand='full' color='primary' href='mailto:info@gelovenleren.net'>MAIL</IonButton>
      <IonButton expand='full' color='primary' href='http://gelovenleren.net/blog/gebeden-app/'>INFO</IonButton>
      <BrowserView>
        <IonButton expand='full' color='primary' href='https://play.google.com/store/apps/details?id=net.gelovenleren.gebeden'>Install ANDROID APP</IonButton>
      </BrowserView>
      <IonFab vertical='bottom' horizontal='end' slot='fixed'>
        <IonFabButton color='secondary'>
          <IonIcon icon={shareSocial}/>
        </IonFabButton>
        <IonFabList side='top'>
          <FacebookShareButton url={window.location.href} quote={quote}>
            <FacebookIcon size={56} round={true}/>
          </FacebookShareButton>
          <TwitterShareButton url={window.location.href} title={truncate(quote, 280 - 23)}>
            <TwitterIcon size={56} round={true}/>
          </TwitterShareButton>
        </IonFabList>
      </IonFab>
    </IonContent>
  );
};

export default Home;