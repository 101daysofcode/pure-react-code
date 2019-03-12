import React from 'react';
import ReactDOM from 'react-dom';

function HelloWorld(){
    return [<Hello/>,<World/>,<SubmitButton/>,<ValidIndicator/>];
}

function Hello(){
    return (
        <span>Hello</span>
    );
}

function World(){
    return (
        <span>World</span>
    );
}
function SubmitButton(){
    var buttonLabel = "Submit";
    return (<button>{buttonLabel}</button>);
}

function ValidIndicator(){
    var isValid = true;
    return (<div><span>{isValid? "isValid":"isNotValid"}</span>
    <span>{!isValid? "isNotValid":"isValid"}</span></div>);
}


ReactDOM.render(<HelloWorld/>, document.querySelector('#root'));