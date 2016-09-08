import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import xhr from 'xhr';

import Plot from './Plot.js';

class App extends Component {
    state = {
        location: '',
        data: {},
        dates: [],
        temps: [],
        selected: {
            date: '',
            temp: null
        }
    };

    fetchData = (evt) => {
        evt.preventDefault();
        var location = encodeURIComponent(this.state.location),
            urlPrefix = 'http://api.openweathermap.org/data/2.5/forecast?q=',
            urlSuffix = '&APPID=56c063c40c8dff887108e0793039cbec&units=metric',
            url = urlPrefix + location + urlSuffix,
            self = this;

        xhr({url: url}, (err, data) => {
            var body = JSON.parse(data.body),
                list = body.list,
                dates = [],
                temps = [];
            for(var i = 0; i < list.length; i++) {
                dates.push(list[i].dt_txt);
                temps.push(list[i].main.temp);
            }

            self.setState({
                data: body,
                dates: dates,
                temps: temps,
                selected: {
                    date: '',
                    temp: null
                }
            });
        });
    };

    changeLocation = (evt) => {
        this.setState({
            location: evt.target.value
        });
    };

    onPlotClick = (data) => {
        if (data.points) {
            this.setState({
                selected: {
                    date: data.points[0].x,
                    temp: data.points[0].y
                }
            });
            console.log(this.state);
        }
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
                {/*
                 * Render the current temperature and the forecast if we have
                 * the data otherwise return null
                 */}
                {(this.state.data.list) ? (
                <div className="wrapper">
                    <p className="temp-wrapper">
                        <span className="temp">
                            { this.state.selected.temp ? this.state.selected.temp : currentTemp }
                        </span>
                        <span className="temp-symbol">°C</span>
                        <span className="temp-date">
                            { this.state.selected.temp ? this.state.selected.date : '' }
                        </span>
                    </p>
                    <h2>Forecast</h2>
                    <Plot
                        xData={this.state.dates}
                        yData={this.state.temps}
                        onPlotClick={this.onPlotClick}
                        type="scatter"
                    />
                </div>
                ) : null}
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
