import React, { useState, useEffect } from 'react';
import './ReactMarkdownFromAsset.css';
import ReactMarkdown from 'react-markdown';
import PropTypes from "prop-types";

function ReactMarkdownFromAsset(props: any) {

  // state is the content of the markdown file
  const [markdown, setMarkdown] = useState("");
   
  // fetch the content of the markdown file and store it as state
  useEffect(() => {
    async function fetchMarkdown() {
      let markdownResponse = await fetch(props.transformMarkdownUri(props.markdownFile));
      let markdownText = await markdownResponse.text();
      setMarkdown(markdownText.replace(/\\n/g, "\n"));
    }
    fetchMarkdown();
  }, [props]);

  return (
    <ReactMarkdown 
      key={props.key} 
      transformImageUri={props.transformImageUri} 
      source={markdown} 
      escapeHtml={false}
    />
  )
}

ReactMarkdownFromAsset.propTypes = {
  // markdown source filename '<./source filename>'
  markdownFile: PropTypes.string.isRequired, 
  // function that turns '<./source filename>' into '<asset filename>' 
  transformImageUri: PropTypes.func.isRequired,  
  // function that turns '<./source filename>' into '<asset filename>' 
  transformMarkdownUri: PropTypes.func.isRequired, 
  key: PropTypes.any
}

export default ReactMarkdownFromAsset;
