import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {incrementCounter, decrementCounter} from './actions/counter'
function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  return (
    <div className="App">
     <h1>Redux Testing</h1>
     <h2>Counter : {counter}</h2>
     <button onClick={() => dispatch(incrementCounter())}>Increment</button>
     <button onClick={() => dispatch(decrementCounter())}>Decrement</button>
    </div>
  );
}

export default App;
