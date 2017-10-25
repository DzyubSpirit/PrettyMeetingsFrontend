import React, { Component } from 'react';
import Form from 'react-input';
import * as auth from './utils/Auth';

class LoginForm extends Component {
  state = { text: 'default' }
  login = ({ username, password }) => {
    auth.login(username, password)
      .then(({ auth_token }) => {
        localStorage.setItem('token', auth_token);
      })
  }
  render() {
    return (
      <div>
        <Form
          fields={[
            {
              name: 'Username',
              key: 'username',
              type: 'text',
              placeholder: 'Enter Username',
            },
            {
              name: 'Password',
              key: 'password',
              type: 'password',
              placeholder: 'Enter Password',
            }
          ]}
          labels={false}
          onSubmit={this.login}
        />
        <p> Text: {this.state.text} </p>
      </div>
    );
  }
}

export default LoginForm;
