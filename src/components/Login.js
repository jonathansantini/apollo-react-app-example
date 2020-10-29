import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SET_LOGIN } from '../utils/queries';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [userLogin, { data, error }] = useMutation(SET_LOGIN);

  if (error) {
    alert('Error Logging In User');
  }

  if (data) {
    alert('Successfully Logged In');
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
