import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Avatar(){
    return (<img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" className="avatar" alt="avatar"/>);
}
function Message(){
    return (
    <div className="message">
        This is a sample tweet less than 140 characters.
    </div>);
}
function NameWithHandle(){
    return (
        <span className="name-with-handle">
            <span className="name">FirstName LastName </span>
            <span className="handle"> @yourhandle</span>
        </span>);
}
const Time = () =>
    <span className="time">
        3h ago
    </span>

const ReplyButton = () =>
    <i className="fa fa-reply reply-button"/>

const RetweetButton = () =>
    <i className="fa fa-retweet retweet-button"/>

const LikeButton = () =>
    <i className="fa fa-heart like-button"/>

const MoreOptionsButton = () =>
    <i className="fa fa-ellipsis-h more-options-button"/>

function Tweet({tweet}){
    return (
    <div className="tweet">
        <Avatar/>
        <div className="content">
            <NameWithHandle/> <Time/>            
            <Message/>
                <div className="buttons">
                    <ReplyButton/>
                    <RetweetButton/>
                    <LikeButton/>
                    <MoreOptionsButton/>
                </div>
        </div>
    </div>
    );
}

ReactDOM.render(<Tweet/>, document.querySelector("#root"));