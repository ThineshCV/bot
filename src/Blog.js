import React from 'react';
import BlogContents from './BlogContents'
import HighlightArea from './HighlightArea';

class Blog extends React.Component {
  render() {  
    return (
          <div>
                <div class="row">
                  <div class="col-md-8">
                    <BlogContents />
                  </div>
                  <div class="col-md-4">
                    <HighlightArea />
                  </div>
                </div>
          </div>
        );
  }
}

export default Blog;