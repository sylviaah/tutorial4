import React from 'react';
import './chatbox.css';
import Header from '../header';

const defaultimg = require('./default.jpg');

const Chatbox = ({msg, img, name, backgroundColor}) => <div style={{backgroundColor:backgroundColor}} className="ChatCard">
    <div className="ChatUser">
        <img src={img} />
    <Header fontSize="100%" text={name} />
    </div>
    <div className="ChatMSG">{msg}</div>
</div>

Chatbox.defaultProps = {
msg: "text",
img: defaultimg,
name: "username",
backgroundColor: "#EFE"
}

export default Chatbox;