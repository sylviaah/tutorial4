import Link from 'next/link';
import Router from 'next/router';
import './app.css';

function ClickIndex(){
    if(confirm("Are you sure?")){
        //move to ChatPage
        Router.push("/ChatPage")
    }
}

const Index = () => <div>
    <div onClick={ClickIndex}>Index</div>

    <Link href="/ChatPage"><a>Chat</a></Link>
    <Link href="/ContactPage"><a>Contact</a></Link>
</div>

export default Index;