import React, {useState} from 'react';
import './chatpage.css';
import ChatBox from '../../comp/chatbox';
import CustomButton from '../../comp/custombutton';
import Header from '../../comp/header';
import Input from '../../comp/input';

const ChatPage = ({}) => {
const [welcome, setWelcome] = useState("Welcome to my App!");
const [msg, setMsg] = useState("Please type something!");
const [resp, setResp] = useState("Let me respond to you!");
const [color, setColor] = useState("#FFFFFF");
const [text, setText] = useState("boop");

return <div>
    <div id="welcome">
    <Header text={welcome} />
</div>

<div id="chat" onClick={()=>{
setWelcome("start with sending a message");
}}>
    <ChatBox name="user 1" msg={msg} />
    <p />
    <ChatBox img={"https://img.icons8.com/plasticine/2x/bot.png"} name="chat bot" backgroundColor="#FAB" msg={resp} />
</div>

<div id="controls">
    <Input onClick={(val)=>{
        setMsg(val);
        var new_resp = CheckResponse(val);
        setResp(new_resp);
        /*if(val === "hi"){
            setResp("I love pie");
        }*/
    }}/>
</div>
<div id="custom_button">
    <CustomButton color={color} text={text} onClick={()=>{
        setColor("#BA5");
        setText("heck")
    
    }} />
</div>
</div>
}

function CheckResponse(inp){
    switch(inp.toLowerCase()){
        case "hi":
            return "I love pie";

        case "how are you":
            return "I hate it here";

        default:
            return "I don't understand";
    }
}

ChatPage.defaultProps = {

}

export default ChatPage;