import logo from './logo.svg';
import './App.css';
import { API } from 'aws-amplify';

function App() {
  const callLambda = async() =>{
    return await API.put("api800a5959", "/getDAta", {});
  }
  callLambda();
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
