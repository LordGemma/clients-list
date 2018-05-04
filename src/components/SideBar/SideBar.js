import React from 'react';

import UserListCont from '../../containers/SideBar/UserListCont';
import Search from './Search/Search';
import './Sidebar.css'

const SideBar = (props) => {
  return (
    <div className="sidebar">
      <Search />
      <UserListCont {...props} />
    </div>
  );
};

export default SideBar;