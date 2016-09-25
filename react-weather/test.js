
class Counter extends React.Component {
    constructor () {
        super();
        this.state = {
            clicks: 0
        };
        this.increment = this.increment.bind(this);
    }

    increment () {
        this.setState({
            clicks: this.state.clicks + 1
        });
    }

    render () {
        return (
            <div>
                <p>This is the Counter component! The button was clicked {this.state.clicks} times.</p>
                <Button text="Click me!" onClick={this.increment}/>
            </div>
        );
    }
}

var Button = function (props) {
    return (
        <button onClick={props.onClick}>
            { props.text }
        </button>
    );
}

ReactDOM.render(
    <Counter />,
    document.getElementById('container')
);
