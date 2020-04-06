import React from 'react';
import CustomButton from '../comp/custombutton';
import Header from '../comp/header';

export default {
    title: "Custom Button",
    component: CustomButton,
};

export const HeaderPage = () => <div>
    <Header fontSize="24" color="#F35F66" onMouseOver={Bops} />
    <Header fontSize="10" color="#74CCC8" />
    <Header />
</div>;

export const MyCustomButton = () => <CustomButton />;

export const PageWithCustomButtons = () => <div>
    <CustomButton text="Cancel" color="#999999" onClick={CancelClick} />
    <CustomButton text="Ok" color="#3F5"  onClick={OkClick} />
    <CustomButton text="Submit" color="#F3F" />
    <CustomButton text="Beeps" />
</div>;

function CancelClick(){
    alert("cancel");
}

function OkClick(){
    alert("Ok");
}

function Bops(){
    alert("beep bop");
}