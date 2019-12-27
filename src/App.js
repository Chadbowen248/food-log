import React from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import { simpleAction } from './actions/actions';
import './App.css';
import  Firebase, { FirebaseContext} from "./components/Firebase"

const App = ({simpleAction}) => {
  return (
    <FirebaseContext.Consumer>
      {firebase => {
        return(
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
            <button onClick={() => simpleAction({vakyesLL: 888})}>
              click me
            </button>
          </header>
        </div>
        )
      }}
    </FirebaseContext.Consumer>
   
  );
}
const mapStateToProps = state => ({
  ...state
 })
 const mapDispatchToProps = {
  simpleAction
 }
export default connect(mapStateToProps,mapDispatchToProps)(App);
