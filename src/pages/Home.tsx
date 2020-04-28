import React, { useState, useEffect } from 'react';
import { IonContent } from '@ionic/react';
import './Home.css';
import ReactMarkdown from 'react-markdown';

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

// utilitary function to convert './<source filename>' to '<packaged filename>'
const transformImageUri = (uri: string) => imageFiles[uri];

function Home () {
 
  // state is a dictionary of the markdown content, by './<source filename>'
  const [markdownCache, setMarkdownCache] = useState<{[key: string]: string}>({});

  // fetch the content of the markdown files and store it as state
  useEffect(() => {
    let cache: {[key: string]: string} = {};
    function fetchMarkdown() {
      let promises = Object.keys(markdownFiles)
        .map(async (markdownFile: string) => {
          let markdownResponse = await fetch(markdownFiles[markdownFile]);
          return markdownResponse.text().then(text => { 
            cache[markdownFile] = text.replace(/\\n/g, "\n");
          });
      });
      return Promise.all(promises);
    }
    fetchMarkdown().then(() => { 
      setMarkdownCache(cache);
    });
  }, []);
  
  return (
    <IonContent>
      {/* render all markdown files; note that the image file 
          uri's must be in the form './<source filename>', 
          regardless the relative path in the source tree */}
      {Object.keys(markdownCache).map((markdownFile, index: number) => (
          <ReactMarkdown 
            key={index} 
            transformImageUri={transformImageUri} 
            source={markdownCache[markdownFile]} 
            escapeHtml={false}
          />
      ))}
    </IonContent>
  );
};

export default Home;
