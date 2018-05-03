import React from 'react';
import Image from './Image';
import MainInfo from './MainInfo';
import InfoBlock from './InfoBlock';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardTitle, CardText } from 'material-ui/Card';

const UserInfo = (props) => {
    return (
        <MuiThemeProvider>
            <Card>
                <Image {...props.user} />
            </Card>
        </MuiThemeProvider>
    );
};

export default UserInfo;