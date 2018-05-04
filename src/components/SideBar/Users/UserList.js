import React, { Component } from 'react';
import User from './User';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Subheader from 'material-ui/Subheader';
import { List } from 'material-ui/List';

class UserList extends Component {
    componentWillMount() {
        this.props.getAllUsers();
    }

    render() {
        return (
            <MuiThemeProvider>
                <List>
                    <Subheader>Clients</Subheader>
                    <div className="user-list">
                        {
                            this.props.filteredUsers && this.props.filteredUsers.map( ( item, index, arr ) => {
                                return <User 
                                            click={() => this.props.getUser(item.id, arr)} 
                                            key={item.id} 
                                            {...item} 
                                        />
                            } )
                        }
                    </div>
                </List>
            </MuiThemeProvider>
        );
    }
}

export default UserList;