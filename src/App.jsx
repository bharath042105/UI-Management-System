import React from 'react';
import UserManagement from './components/UserManagement';
import RoleManagement from './components/RoleManagement';

const App = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">RBAC Management System</h1>
      <div className="row">
        <div className="col-md-6">
          <UserManagement />
        </div>
        <div className="col-md-6">
          <RoleManagement />
        </div>
      </div>
    </div>
  );
};

export default App;
