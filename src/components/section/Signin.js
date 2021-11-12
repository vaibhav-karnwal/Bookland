import React from 'react';

class SignIn extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
        email: '',
        password: ''
    };
}


render() {
    return (
        <section>
            <h1>I already have an account</h1>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
                <input
                    name='email'
                    type='email'
                    handleChange={this.handleChange}
                    value={this.state.email}
                    label='email'
                    required
                />
                <input
                    name='password'
                    type='password'
                    value={this.state.password}
                    handleChange={this.handleChange}
                    label='password'
                    required
                />
                <button type='submit'> Sign in </button>        
            </form>
        </section>
    );
}
}

export default SignIn;
