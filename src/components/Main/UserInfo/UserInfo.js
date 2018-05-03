import React from 'react';
import Image from './Image';
import MainInfo from './MainInfo';
import InfoBlock from './InfoBlock';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card } from 'material-ui/Card';
import './UserInfo.css';

const UserInfo = (props) => {
    return (
        <MuiThemeProvider>
            <Card style={{width: '100%', padding: '10px'}}>
                <div className="client-info">
                    <Image {...props.user} />
                    <MainInfo {...props.user} />
                </div>

            </Card>
        </MuiThemeProvider>
    );
};

export default UserInfo;