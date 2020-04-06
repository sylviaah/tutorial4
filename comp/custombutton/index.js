import React from 'react';
import './cb.css';

const CustomButton = ({text, color, onClick}) => <div style={{backgroundColor: color}} className="custom_button_box">
    <div className="custom_button_inner" onClick={onClick}>{text}</div>
</div>

function ButtonClick(){
    alert("Clicked");
}

CustomButton.defaultProps = {
    text: "Default Button",
    color: "darkseagreen",
    onClick: ButtonClick,
}
export default CustomButton;

