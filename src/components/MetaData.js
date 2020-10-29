import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SET_METADATA } from '../utils/queries';

export default function MetaData() {
  const [action, setAction] = useState('');

  const [setMetaData, { data, error }] = useMutation(SET_METADATA);

  if (data) {
    return (
      <div>
        <h2>Successfully Updated!</h2>
        <div className="data">{JSON.stringify(data)}</div>
      </div>
    )
  }

  return (
    <form
      id="metaData"
      onSubmit={e => {
        e.preventDefault();
        if (localStorage.getItem('token')) {
          setMetaData({ variables: { action } });
        }
      }}
    >
      <p>Update MetaData</p>
      {error && <p>Error :( Please try again</p>}
      <input
        title="meta"
        id="key"
        name="key"
        value="meta"
        type="hidden"
      />
      <select
        id="action"
        value={action}
        onChange={e => setAction(e.target.value)}>
        <option value="comment">Comment</option>
        <option value="like">Like</option>
      </select>
      <input
        title="metaObject"
        id="metaObject"
        name="metaObject"
        value="26"
        type="hidden"
      />
      <input
        title="metaUser"
        id="metaUser"
        name="metaUser"
        value="19"
        type="hidden"
      />
      <div>
        <button type="submit">Update</button>
      </div>
    </form>
  )
}
