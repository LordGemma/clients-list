import React from 'react';
import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import { darkBlack } from 'material-ui/styles/colors';
import Aux from '../../../containers/SideBar/Aux';

const User = (props) => {
    return (
        <Aux>
            <ListItem
                onClick={props.click}
                leftAvatar={<Avatar src={props.general.avatar} />}
                primaryText={`${props.general.firstName} ${props.general.lastName}`}
                secondaryText={
                    <p>
                        <span style={{color: darkBlack}}>{props.job.title}</span>
                    </p>
                }
                secondaryTextLines={2}
            />
            <Divider inset={true} />
        </Aux>
    );
};

export default User;