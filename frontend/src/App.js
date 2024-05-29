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

function Login() {
  return (
    <div className='outer-container'>
      <div className='text-container'>
        <h2>Welcome to ravenSight</h2>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum.</h3>
      </div>
      <div className='login-container'>
        <input/>
        <br/>
        <input/>
        <div>
          <input type='checkbox'/>
          <label>Remember Me?</label>
        </div>
        <button>Sign Up</button>
        <button>Log In</button>
      </div>
    </div>
  );
}

function Main() {
  return (
    <Login/>
  );
}

export default Main;
