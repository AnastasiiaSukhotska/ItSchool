import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import { learningGroupStart } from './store/actionCreators';
import {useSelector} from 'react-redux';
import { Test } from './Test/Test';
 
function App() {

  
  
  return (
    <div className="App">
      <Provider store={store}>
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
      <Test />
      </Provider>
    </div>
  );
}

export default App;
