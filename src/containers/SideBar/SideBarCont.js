import { connect } from 'react-redux';
import SideBar from '../../components/SideBar/SideBar';
import { getAllUsers } from '../../store/actions/users';

function mapStateToProps(state) {
    const { users: { filteredUsers } } = state;
    return {
        filteredUsers
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getAllUsers: () => dispatch(getAllUsers()),
    };
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(SideBar);