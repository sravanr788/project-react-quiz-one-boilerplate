import React, { Component } from 'react'

export default class Result extends Component {
    render() {
        return (
            <div className='mainbox'>
                <h2 className='heading'>Result</h2>
                <div className='result'>
                    <div className="header">
                        <h3>You need more practise!</h3>
                        <h2 className='score'>Your score is 20%</h2>
                    </div>
                    <div className='info'>
                        <div className="flex">
                            <h4>Total number of questions</h4>
                            <h3>15</h3>
                        </div>
                        <div className="flex">
                            <h4>Number of attempted questions</h4>
                            <h3>9</h3>
                        </div>
                        <div className="flex">
                            <h4>Number of correct answers</h4>
                            <h3>3</h3>
                        </div>
                        <div className="flex">
                            <h4>Number of wrong answers</h4>
                            <h3>6</h3>
                        </div>
                    </div>
                </div>
                <div className='b-cont'>
                    <button id='playagain'>Play Again</button>
                    <button id='home'>Back to home</button>
                </div>
            </div>
        )
    }
}
