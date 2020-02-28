import React from 'react';
import PanelViewer from './PanelViewer';

//importing all pages
import Home from '../panels/home.js';

import './Panel.css'

const panels = {"Home":<Home/>}

//panel alllows us to change what page we are on by changing the html on the page, not navigating to a new page
//calls the plane Viewer with an a list of panels
function Panel() {
    return (
      <>

        <div className="header">
          <h1>PlayDogPlay</h1>
        </div>
        
        
        <PanelViewer panels={panels}/>
        
      
      
      </>
    );
  }
  
  export default Panel;