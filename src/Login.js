import React, {PureComponent} from 'react';

class Login extends PureComponent{

    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: ''
        };
    }

    handleEmailField = event => {
        const email = event.target.value;
        this.setState({email});
    }

    handlePasswordField = event => {
        const password = event.target.value;
        this.setState({password})
    }

    handleSubmit = () => {
        console.log(this.state.email);
        console.log(this.state.password);
    }

    render() {
        return (
            <div>
                <h3>Sign In/Log In</h3>
                <input type="text"
                    placeholder="Email"
                    onChange={this.handleEmailField}></input>
                <input type="text"
                    placeholder="Password"
                    onChange={this.handlePasswordField}></input> 
                <button type="button"
                    onClick={this.handleSubmit}>Log In</button>
            </div>
        );
    }
}

export default Login;