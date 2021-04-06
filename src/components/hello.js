import React from 'react';


const Hello = () =>{
    // return(
    // <div className="dummyClass">
    //     <h1>Hello Rahul</h1>   //With JSX
    // </div>
    // )
    
    return React.createElement('div' ,{id:"hello",className:"dummyClass"},React.createElement('h1',null,'Hello Rahul'))
};

export default Hello;