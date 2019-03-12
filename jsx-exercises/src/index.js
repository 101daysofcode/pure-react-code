import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';



function BookList(){
    return (
        <div>
            <ul className="stats">            
                <li className="rating">
                    5 stars
                </li>
                <li className="isbn">
                    12-121212-1212
                </li>
            </ul>
        </div>);
}

function anAuthor(){
    return (<div className="author">The Author</div>);
}

function Title(){
    return (<div className="title">The Title</div>);
}
function Book(){
    return (<div className="book"><Title/><anAuthor/><BookList/><Greeting/></div>);
}
function Greeting(){
    var username = "root";
    var username = undefined;
    var username = null;
    var username = false;
    var isLoggedIn = true;
    return (<span>{username=="root"?"HelloRoot":"Sorry, not allowed"}</span>);
}
function MyThing(){
    return (
        <div className="App-header">
            <Book/>
        </div>
    );
}
ReactDOM.render(<MyThing />, document.getElementById('root'));


