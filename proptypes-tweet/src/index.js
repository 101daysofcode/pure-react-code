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
    likes: 14,
    retweets: 8,
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
Message.propTypes = {
    text: PropTypes.string
}

function NameWithHandle({author}){
    const {name, handle} = author;
    return (
        <span className="name-with-handle">
            <span className="name">{name}</span>
            <span className="handle"> @{handle}</span>
        </span>);
}
Message.propTypes = {
    author: PropTypes.string
}

const Time = ({time}) =>
    <span className="time">{moment(time).fromNow()}</span>

Time.propTypes = {
    time: PropTypes.string.isRequired
}
    
const ReplyButton = () =>
    <i className="fa fa-reply reply-button"/>

const RetweetButton = ({count}) =>(
    <span className="retweet-button">
        <i className="fa fa-retweet ">
            {count > 0 && <i className="retweet-count"/>}{count}
        </i>
    </span>    
);
RetweetButton.propTypes = {
    count: PropTypes.number
};
    

const LikeButton = ({count}) => (
    <span className="like-button">
        <i className="fa fa-heart ">
            {count > 0 && 
            <span className="fa like-count">{count}
            </span>}
        </i>
    </span>
    );
LikeButton.propTypes ={
    count: PropTypes.number
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
                    <RetweetButton count={tweet.retweets}/>
                    <LikeButton count={tweet.likes}/>
                    <MoreOptionsButton/>
                </div>                
        </div>
    </div>
    );
}

ReactDOM.render(<Tweet tweet={testTweet}/>, document.querySelector("#root"));