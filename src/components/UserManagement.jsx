import React, { useState } from 'react';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState('');
  const [selectedRole, setSelectedRole] = useState('User');

  const addUser = () => {
    if (newUser) {
      setUsers([...users, { name: newUser, role: selectedRole }]);
      setNewUser('');
    }
  };

  const deleteUser = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  const updateUserRole = (index, newRole) => {
    const updatedUsers = [...users];
    updatedUsers[index].role = newRole;
    setUsers(updatedUsers);
  };

  return (
    <div>
      <h2>User Management</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add new user"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
        />
        <select
          className="form-select"
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option value="User">User</option>
          <option value="Admin">Admin</option>
        </select>
        <button className="btn btn-primary" onClick={addUser}>
          Add User
        </button>
      </div>
      <ul className="list-group">
        {users.map((user, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {user.name} - Role: 
            <select
              value={user.role}
              onChange={(e) => updateUserRole(index, e.target.value)}
              className="form-select w-25 ms-2"
            >
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>
            <button
              className="btn btn-danger btn-sm ms-3"
              onClick={() => deleteUser(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
