import React from 'react';
import Image from './Image';
import MainInfo from './MainInfo';
import InfoBlock from './InfoBlock';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card } from 'material-ui/Card';
import Aux from '../../../containers/SideBar/Aux';
import './UserInfo.css';

const UserInfo = (props) => {
    return (
        <MuiThemeProvider>
            <Aux>
                <Card style={{width: '100%', padding: '10px', marginBottom: '20px'}}>
                    <div className="client-info" style={{alignItems: 'center'}}>
                        <Image {...props.user} />
                        <MainInfo {...props.user} />
                    </div>
                </Card>
                <div className="client-info">
                    <Card style={{padding: '10px', width: '50%', marginRight: '10px'}}>
                        <InfoBlock data={props.user.address} title="Address" />
                    </Card>
                    <Card style={{padding: '10px', width: '50%', marginLeft: '10px'}}>
                        <InfoBlock data={props.user.contact} title="Contact information" />
                    </Card>
                </div>
            </Aux>
        </MuiThemeProvider>
    );
};

export default UserInfo;