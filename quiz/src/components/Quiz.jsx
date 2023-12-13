import React, { Component } from 'react'

export default class Quiz extends Component {
  render() {
    return (
      <div className='main'>
        <h2 className='title'>Question</h2>
        <h5>1 of 15</h5>
        <p className='question'>Which is the only mammal that can't jump?</p>
        <div className='container'>
            <div className='group'>
                <button className='option'>Dog</button>
                <button className='option'>Elephant</button>
            </div>
            <div className='group'>
                <button className='option'>Goat</button>
                <button className='option'>Lion</button>
            </div>
        </div>
        <div className="buttons">
            <button id='previous'>Previous</button>
            <button id='next'>Next</button>
            <button id='quit'>Quit</button>
        </div>
      </div>
    )
  }
}
