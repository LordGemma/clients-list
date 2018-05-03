import React from 'react';

import UserListCont from '../../containers/SideBar/UserListCont';
import './Sidebar.css'

const SideBar = (props) => {
  return (
    <div className="sidebar">
      <div>Search</div>
      <UserListCont {...props} />
    </div>
  );
};

export default SideBar;