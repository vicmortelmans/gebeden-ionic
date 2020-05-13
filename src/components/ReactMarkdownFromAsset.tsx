import React, { useState, useEffect } from 'react';
import './ReactMarkdownFromAsset.css';
import ReactMarkdown from 'react-markdown';
const removeMd = require('remove-markdown');

const ReactMarkdownFromAsset = React.memo((props: any) => {

  // state is the content of the markdown file
  const [markdown, setMarkdown] = useState("");
   
  // effect to fetch the content of the markdown file and store it as state
  // only runs once
  useEffect(() => {
    async function fetchMarkdown() {
      let markdownResponse = await fetch(props.transformMarkdownUri(props.markdownFile));
      let markdownText = await markdownResponse.text();
      markdownText = markdownText.replace(/\\n/g, "\n");
      setMarkdown(markdownText);
    }
    fetchMarkdown();
  }, [props]);  

  // effect to return the plain text markdown to the parent, if requested
  useEffect(() => {
    if (props.getQuote) {
      let quote = removeMd(markdown);
      props.getQuote(quote);
    }
  }, [markdown, props]);

  return (
    <>
      {markdown && 
          <ReactMarkdown 
            transformImageUri={props.transformImageUri} 
            source={markdown} 
            escapeHtml={false}
          />
      }
    </>
  )
});

export default ReactMarkdownFromAsset;
