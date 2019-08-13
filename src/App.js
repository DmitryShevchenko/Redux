/*
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

import React, {Component} from 'react';
import {connect} from "react-redux";
import {getTracks} from './actions/tracks'



class App extends Component {

    onClick = () => {
        this.props.onAddClick(this.textInput.value);
        this.textInput.value = '';
    };
    onFindChange = (evt) => {
        /*console.log(evt.target.value);*/
        this.props.onFindChange(evt.target.value)
    };

    render() {
        /*console.log(this.props.tracks);*/
        return (
            <div>
                <div>
                    <input type='text' ref={(input) => {this.textInput = input}}/>
                    <button onClick={this.onClick}>Button</button>
                </div>
                <div>
                    <input type='text' onChange={this.onFindChange}/>
                    
                </div>
                <div>
                    <button onClick={this.props.onGetTracks}>Get Tracks</button>
                </div>
                <ul>
                    {this.props.tracks.map((track, i) => (
                        <li key={i}>{track.name}</li>
                    ))}
                </ul>
            </div>
        );
    }


}

export default connect(
    state => ({
        tracks: state.tracks.filter(track => track.name.includes(state.filterTracks))
    }),
    dispatch => ({
        onAddClick: (name) => {
            /*console.log(name); */           
            dispatch({type: 'ADD_TRACK', payload: {id: Date.now().toString(), name}});
        },
        onFindChange: (value) => {
            /*console.log(value);*/
            dispatch({type: 'FIND_TRACK', payload: value})
        },
        onGetTracks: () => {
            dispatch(getTracks())
        }
    })
)(App);