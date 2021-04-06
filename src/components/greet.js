import React from 'react'


function Greet(props) {
  return(
    <div>
  <h1>Hello {props.name} a.k.a {props.heroName}</h1>
    {props.children}
    </div>  
  )
}

// const Greet = () => <h1>Hello World</h1>
export default Greet;