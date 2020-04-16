import Link from 'next/link';
import Router from 'next/router';
import './app.css';
import {FaCat} from 'react-icons/fa';

function ClickIndex(){
    if(confirm("Are you sure?")){
        //move to ChatPage
        Router.push("/ChatPage")
    }
}

const Index = () => <div>
    <div onClick={ClickIndex}>Index</div>
    <FaCat color="#FAB" />
    <Link href="/ChatPage"><a>Chat</a></Link><br />
    <Link href="/ContactPage"><a>Contact</a></Link><br />
    <Link href="/CabbagePage"><button>Cabbage</button></Link><br />
    <Link href="/AboutPage"><button>About</button></Link>
</div>

export default Index;