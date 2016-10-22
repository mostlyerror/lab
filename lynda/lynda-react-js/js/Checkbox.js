var Checkbox = React.createClass({

    getInitialState: function () {
        return {checked: true};
    },

    handleCheck: function () {
        this.setState({checked: !this.state.checked});
    },

    render: function () {
        var msg;
        if (this.state.checked) {
            msg = 'checked';
        } else {
            msg = 'unchecked';
        }
        return (
            <div>
                <input 
                onChange={this.handleCheck}
                defaultChecked={this.state.checked}
                type="checkbox" />
                <p>{msg}</p>
            </div>
        );
    }
});

//React.render(<Checkbox />, document.getElementById('react-container'));
