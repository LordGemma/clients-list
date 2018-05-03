import React from 'react';
import UserInfoCont from '../../containers/Main/UserInfoCont';

const Main = (props) => {
    const styles = {
        padding: '20px',
        width: '100%'
    }

    return (
        <div style={styles}>
            <UserInfoCont />
        </div>
    );
};

export default Main;