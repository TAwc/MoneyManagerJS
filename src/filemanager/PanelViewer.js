import React, { useState } from "react";
import './PanelViewer.css';
import SBD from '../panels/SBD.js';


//dont touch, it works, very confusing
//does the changeing of pages for us

const PanelViewer = ({panels}) => {
    const [activePanel, setActivePanel] = useState(<SBD/>);
    const keys = Object.keys(panels);

    const handleClick = key => () => setActivePanel(key); 
    
    return (
        <>
        
        <div id="navbar">
            <div className="menuBar"></div>
            <ul id="menu">
                {keys.map(key => <a className="menuOption" href="." key={key} onClick={handleClick (key)}><p className="navbarElement" id={"navbar"+(keys.indexOf(key)+1)}>{key}</p></a>)}
            </ul>
            
        </div>
        {panels[activePanel]}
        </>
    );
};


export default PanelViewer;