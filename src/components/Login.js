import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { SET_LOGIN } from '../utils/queries';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [userLogin, { data, error }] = useLazyQuery(SET_LOGIN);

  const hasError = data ? data.userLogin.status === 'Error' : false;

  if (data && !hasError) {
    const token = data.userLogin.token;
    localStorage.setItem('token', token);
    return (
      <div>
        <h2>You're logged in!</h2>
        <div className="token">{token}</div>
      </div>
    )
  }

  return (
    <form
      id="signinForm"
      onSubmit={e => {
        e.preventDefault();
        userLogin({ variables: { username, password } });
      }}
    >
      <p>Sign In</p>
      {hasError && <p>Error :( Please try again</p>}
      <input
        title="Username"
        id="username"
        name="username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        type="text"
        placeholder="username"
        required
      />
      <input
        title="Password"
        id="password"
        name="password"
        type="password"
        value={password}
        placeholder="password"
        onChange={e => setPassword(e.target.value)}
        required
      />
      <div>
        <button type="submit">Sign In</button>
      </div>
    </form>
  )
}
