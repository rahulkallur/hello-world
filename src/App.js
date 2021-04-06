import React, { Component } from 'react'

import Greet from './components/greet'
import Welcome from './components/welcome'
import Hello from './components/hello';
import Message from './components/message'

export default class App extends Component {
  render() {
    return (
      <div>
        <Message/>
      {/* <Greet name="Jhon Wick" heroName="Keenu Revees">
        <p>This is a children tag</p>
      </Greet>
      <Greet name="Bruce Wayne" heroName="Bat Man">
        <button>Action</button>
      </Greet>
      <Greet name="Diana" heroName="Wonder Women"/>
       <Welcome name="Jhon Wick" heroName="Keenu Revees"/>
       <Welcome name="Bruce Wayne" heroName="Bat Man"/>
       <Welcome name="Diana" heroName="Wonder Women"/> */}
      {/* <Hello/>  */}
      </div>
    )
  }
}