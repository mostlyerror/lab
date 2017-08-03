import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

const Page = ({title}) => {
  return (
    <div className="App">
      <div className ="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h2>{title}</h2>
      </div>
      <p className="App-intro">
        This is the {title} page.
      </p>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/about">About</Link>
      </p>
      <p>
        <Link to="/settings">Settings</Link>
      </p>
    </div>
  )
}

const Home = (props) => {
  return (
    <Page title="Home"/>
  )
}

const About = (props) => {
  return (
    <Page title="About"/>
  )
}

const Settings = (props) => {
  return (
    <Page title="Settings"/>
  )
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/settings" component={Settings}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
