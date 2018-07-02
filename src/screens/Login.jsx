// @flow

import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import type { RouterHistory } from 'react-router-dom';
import Main from '../components/layout/Main';
import { H3 } from '../components/ui';

const AUTH_TOKEN = 'auth-token';

const SIGNUP_MUTATION = gql`
  mutation signupMutation(
    $email: String!
    $password: String!
    $name: String!
    $role: UserRole!
  ) {
    signup(email: $email, password: $password, name: $name, role: $role) {
      token
    }
  }
`;

const LOGIN_MUTATION = gql`
  mutation loginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

type SignupProps = ({
  variables: { name: string, role: string, email: string, password: string }
}) => { data: { signup: { token: string } } };

type LoginProps = ({
  variables: { email: string, password: string }
}) => { data: { login: { token: string } } };

type S = {
  login: boolean,
  email: string,
  password: string,
  name: string,
  role: string
};

class Login extends Component<{ history: RouterHistory }, S> {
  state = {
    login: true,
    email: '',
    password: '',
    name: '',
    role: 'CANDIDATE'
  };

  handleLogin = async (loginMutation: LoginProps) => {
    const { email, password } = this.state;

    const result = await loginMutation({
      variables: {
        email,
        password
      }
    });
    const { token } = result.data.login;
    this.saveUserData(token);
    this.props.history.push('/');
  };

  handleSignup = async (signupMutation: SignupProps) => {
    const { name, role, email, password } = this.state;

    const result = await signupMutation({
      variables: {
        name,
        role,
        email,
        password
      }
    });
    const { token } = result.data.signup;
    this.saveUserData(token);
  };

  saveUserData = (token: string) => {
    localStorage.setItem(AUTH_TOKEN, token);
  };

  render() {
    return (
      <Main>
        <H3>{this.state.login ? 'Login' : 'Sign Up'}</H3>
        {!this.state.login && (
          <input
            value={this.state.name}
            onChange={(e: SyntheticEvent<HTMLInputElement>) =>
              this.setState({ name: e.currentTarget.value })
            }
            type="text"
            placeholder="Your Name"
          />
        )}
        {!this.state.login && (
          <select
            value={this.state.role}
            onChange={(e: SyntheticEvent<HTMLSelectElement>) =>
              this.setState({ role: e.currentTarget.value })
            }
          >
            <option value="CANDIDATE">Candidate</option>
            <option value="EMPLOYER">Employer</option>
          </select>
        )}
        <input
          value={this.state.email}
          onChange={(e: SyntheticEvent<HTMLInputElement>) =>
            this.setState({ email: e.currentTarget.value })
          }
          type="email"
          placeholder="Your Email"
        />
        <input
          value={this.state.password}
          onChange={(e: SyntheticEvent<HTMLInputElement>) =>
            this.setState({ password: e.currentTarget.value })
          }
          type="password"
          placeholder="Your Password"
        />
        {this.state.login ? (
          <Mutation mutation={LOGIN_MUTATION}>
            {(loginMutation: LoginProps) => (
              <button onClick={() => this.handleLogin(loginMutation)}>
                login
              </button>
            )}
          </Mutation>
        ) : (
          <Mutation mutation={SIGNUP_MUTATION}>
            {(signupMutation: SignupProps) => (
              <button onClick={() => this.handleSignup(signupMutation)}>
                create account
              </button>
            )}
          </Mutation>
        )}
        <button onClick={() => this.setState({ login: !this.state.login })}>
          {this.state.login
            ? 'need to create an account?'
            : 'already have an account?'}
        </button>
      </Main>
    );
  }
}

export default Login;
