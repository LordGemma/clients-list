import { connect } from 'react-redux';
import UserInfo from '../../components/Main/UserInfo/UserInfo';

function mapStateToProps(state) {
    const { user } = state.users
    return {
        user
    };
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(UserInfo);