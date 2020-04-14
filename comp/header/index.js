//use the same component to change the fontsize
//change the text color of the header
//change the onMouseOver

import React from 'react';
import './header.css';

const Header = ({text, fontSize, color,  onMouseOver}) => <div style={{color: color}} className="head">
    <h1 style={{fontSize: fontSize}} onMouseOver={onMouseOver}>{text}</h1>
</div>

function MouseOver(){
    alert("mouse is over");
}

Header.defaultProps = {
    fontSize: 32,
    color: "#000",
    onMouseOver: MouseOver,
    text: "header",
}

export default Header; 