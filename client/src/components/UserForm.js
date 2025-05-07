import React, { useState } from 'react';

const UserForm = () => {
  const [user, setUser] = useState({ name: '', email: '', id: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = user.id ? 'PUT' : 'POST';
    const url = user.id
      ? `http://localhost:5000/api/users/${user.id}`
      : 'http://localhost:5000/api/users';

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: user.name, email: user.email }),
    });

    const data = await res.json();
    alert(user.id ? 'User updated!' : 'User added!');
    setUser({ name: '', email: '', id: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <input
        placeholder="Email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <input
        placeholder="User ID (for update)"
        value={user.id}
        onChange={(e) => setUser({ ...user, id: e.target.value })}
      />
      <button type="submit">{user.id ? 'Update' : 'Add'} User</button>
    </form>
  );
};

export default UserForm;





// frontend
// cd client
// npm install
// npm start


// Backend
// cd Backend
// npm init -y
// npm install express mongoose cors
// node server.js

