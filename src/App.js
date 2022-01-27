import React, { Component } from 'react';
import './App.css';
import { marked } from 'marked';

class App extends Component {
  state = {
    markdown: `# This is an h1 
    
## This is an h2
    
[This is a link](https://freecodecamp.org)
    
\`<code>This is inline code</code>\`
    
    <html>
      <head>
        This is a code block
      </head>
    </html>
    
- This
- is
- a
- list
    
> This is a blockquote
    
![Watchmen Smiley face](https://b.thumbs.redditmedia.com/WKTbYQf3RyVIegwgSOlc3qy4k6soYLKldWdNVvKkBWQ.png)

    
**This is bold**
    `
  }
  
  updateMarkdown = function(markdown){
    this.setState({markdown});
  }
  render() {
    let { markdown } = this.state;
    console.log(markdown)
    return (
      <div className="App container">
        <div class="row" id="editor-title">
          <label class="col">Markdown Input</label>
        </div>
        <div class="row">  
          <textarea id="editor" class="col" placeholder="Enter Markdown" value={markdown} onChange={(event)=>this.updateMarkdown(event.target.value)}></textarea>
        </div>
        <div>
          <h1 id="preview-title">Markdown Output</h1>
          <div id="preview" dangerouslySetInnerHTML={{__html: marked(markdown, { breaks: true })}} />
        </div>
      </div>
    );
  }
}

export default App;
