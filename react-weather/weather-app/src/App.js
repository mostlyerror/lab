import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import xhr from 'xhr';

class App extends Component {
    state = {
        location: '',
        data: {}
    };

    fetchData = (evt) => {
        evt.preventDefault();
        var location = encodeURIComponent(this.state.location);

        var urlPrefix = 'http://api.openweathermap.org/data/2.5/forecast?q=';
        var urlSuffix = '&APPID=56c063c40c8dff887108e0793039cbec&units=metric';
        var url = urlPrefix + location + urlSuffix;

        var self = this;

        xhr({url: url}, (err, data) => {
            self.setState({
                data: JSON.parse(data.body)
            });
        });
    };

    changeLocation = (evt) => {
        this.setState({
            location: evt.target.value
        });
    };

    render() {
        var currentTemp = 'not loaded yet';
        if (this.state.data.list) {
            currentTemp = this.state.data.list[0].main.temp;
        }
        return (
            <div>
                <h1>Weather</h1>
                <form onSubmit={this.fetchData}>
                    <label>
                        I want to know the weather for
                        <input 
                            placeholder={"City, Country"} 
                            type="text"
                            value={this.state.location}
                            onChange={this.changeLocation}
                        />
                    </label>
                </form>
                <p className="temp-wrapper">
                    <span className="temp">{ currentTemp }</span>
                    <span className="temp-symbol">°C</span>

                </p>
            </div>
        );
    }
}

export default App;

/*
   <div className="App">
   <div className="App-header">
   <img src={logo} className="App-logo" alt="logo" />
   <h2>Welcome to React</h2>
   </div>
   <p className="App-intro">
   To get started, edit <code>src/App.js</code> and save to reload.
   </p>
   </div>
   */
