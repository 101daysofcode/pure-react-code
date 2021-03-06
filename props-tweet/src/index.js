import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment';
import PropTypes from 'prop-types';

var testTweet = {
    message: "Something about cats.",
    gravatar: "07c49a2c327f5d1b5f9c555c021ab2ff",
    author:{
        handle: "catperson",
        name: "IAMA Cat Person"
    },
    likes: 2,
    retweets: 0,
    timestamp: "2016-09-01 21:24:38"
};

function Comment({author, message, likes}){
    return (<div>
        <div className="author">
            {author}
        </div>
        <div className="message">
            {message}
        </div>
        <div className="likes">
            {likes>0?likes:"No"}{" "}likes
        </div>       
    </div>)
}

Comment.propTypes = {
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    likes: PropTypes.number
};

function Avatar({hash}){
    var url = `https://www.gravatar.com/avatar/${hash}`;
    return (<img 
                    src={url} 
                    className="avatar" 
                    alt="avatar"
                />
            );
}
function Message({text}){
    return (
    <div className="message">
        {text}
    </div>);
}
function NameWithHandle({author}){
    const {name, handle} = author;
    return (
        <span className="name-with-handle">
            <span className="name">{name}</span>
            <span className="handle"> @{handle}</span>
        </span>);
}

const Time = ({time}) =>
    <span className="time">{moment(time).fromNow()}</span>
    
const ReplyButton = () =>
    <i className="fa fa-reply reply-button"/>

const RetweetButton = () =>
    <i className="fa fa-retweet retweet-button"/>

const LikeButton = ({count}) => (
    <span className="like-button">
        <i className="fa fa-heart "/>
        {count > 0 && 
            <span className="fa fa-heart like-count">
                {count}
            </span>}
    </span>
    );
LikeButton.propTypes ={
    likes: PropTypes.number
};
    

const MoreOptionsButton = () =>
    <i className="fa fa-ellipsis-h more-options-button"/>

function Tweet({tweet}){
    return (
    <div className="tweet">
        <Avatar hash={tweet.gravatar}/>
        <div className="content">
            <NameWithHandle author={tweet.author}/> <Time time={tweet.timestamp}/>            
            <Message text={tweet.message}/>
                <div className="buttons">
                    <ReplyButton/>
                    <RetweetButton/>
                    <LikeButton count="12"/>
                    <MoreOptionsButton/>
                </div>                
        </div>
    </div>
    );
}

ReactDOM.render(<Tweet tweet={testTweet}/>, document.querySelector("#root"));