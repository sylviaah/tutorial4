import CustomButton from '../../comp/custombutton';
import Header from '../../comp/header';
import './contact.css';
import {FaCat} from 'react-icons/fa';

const Contact = () => <div>
    <FaCat />
    <Header text="Contact me!"/>
    <CustomButton text="Email" />
    Contact
</div>

export default Contact;