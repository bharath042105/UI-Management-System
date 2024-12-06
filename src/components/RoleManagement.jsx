import React, { useState } from 'react';

const RoleManagement = () => {
  const [roles, setRoles] = useState(['Admin', 'User']);
  const [newRole, setNewRole] = useState('');

  const addRole = () => {
    if (newRole) {
      setRoles([...roles, newRole]);
      setNewRole('');
    }
  };

  const deleteRole = (index) => {
    setRoles(roles.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Role Management</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add new role"
          value={newRole}
          onChange={(e) => setNewRole(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addRole}>
          Add Role
        </button>
      </div>
      <ul className="list-group">
        {roles.map((role, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {role}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => deleteRole(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoleManagement;
