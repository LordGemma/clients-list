import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserList from '../../components/SideBar/Users/UserList';
import { getUser } from '../../store/actions/users';

function mapStateToProps(state) {
    const { users: { user } } = state;
    return {
        user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getUser: (id, users) => dispatch(getUser(id, users)),
    };
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(UserList);