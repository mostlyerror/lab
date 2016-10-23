import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Modal extends Component {
    render() {
        return (
            <div className="Modal">
                <form onSubmit={this.props.onSubmit} className="ModalForm">
                </form>
            </div>
        );
    }
}

class App extends Component {
  render() {
    var child;
    if (this.state.mounted) child = (<Modal onSubmit={this.handleSubmit} />);
    return (
      <div className="App">
        <ReactCSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            {child}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default App;
