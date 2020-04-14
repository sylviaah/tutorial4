import React, {useState} from 'react';
import './input.css';
import CustomButton from '../custombutton';

const Input = ({placeholder, onClick}) => {
const [val,setVal] = useState("");

return <div className="InputCont">
<input onChange={(e)=>{
    setVal(e.target.value);
}} type="text" placeholder={placeholder} />
<CustomButton onClick={()=>{
    onClick(val);
}}
text="send" />
</div>
}

Input.defaultProps = {
    placeholder: "type your chat here",
    onClick:()=>{},
}

export default Input;