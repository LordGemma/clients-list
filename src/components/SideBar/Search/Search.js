import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import { FILTERED_USERS } from '../../../store/actions/actionTypes'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

function mapStateToProps(state) {
    const { users } = state.users; 
    return {
        users
    };
}

function mapDispatchToProps(dispatch) {
    return {
        filterUsers: (users) => dispatch({type: FILTERED_USERS, users})
    };
}

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
        }

        this.changeValue = this.changeValue.bind(this);
        this.isObject = this.isObject.bind(this);
    }

    componentWillMount() {
        this.props.filterUsers(this.props.users);
    }

    componentWillReceiveProps(props) {
        this.props.filterUsers(props.users);
    }

    changeValue(e) {
        this.setState({
            value: e.target.value
        }, () => {
            const arr = this.props.users.filter(item => {
                return this.isObject(item);
            });
            console.log(arr)
            this.props.filterUsers(arr);
        });
    }

    isObject(obj) {
        for (let key in obj) {
            if (typeof obj[key] === 'string') {
                const regex = new RegExp(this.state.value, 'g');
                return regex.test(obj[key]);
            } else {
                this.isObject(obj[key]);
            }
        }
    }

    render() {
        return (
            <MuiThemeProvider>
                <TextField 
                    onChange={this.changeValue} 
                    hintText="Search users" 
                    inputStyle={{padding: '0 15px'}}
                    hintStyle={{padding: '0 15px'}}
                    fullWidth={true}
                />
            </MuiThemeProvider>
        );
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Search);