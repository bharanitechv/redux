import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux'



//Action - Increment 
const incrementCounter = () => {
  return {
    type: 'INCREMENT'
  }
}

const decrementCounter = () => {
  return {
    type: 'DECREMENT'
  }
}

//Reducer - Handle state change
const counter = (state = 0, action) => {
  switch(action.type){
    case "INCREMENT" : 
    return state + 1
    case "DECREMENT" : 
    return state - 1
  }
}

//Store - Globalize state
let store = createStore(counter)

//console
store.subscribe(() => { console.log("state--->", store.getState())})

store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())





//Dispatch - Dispatch the action

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


