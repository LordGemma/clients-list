import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Aux from '../../../containers/SideBar/Aux';

const InfoBlock = (props) => {
    console.log(props);
    return (
        <List>
            <Subheader>{props.title}</Subheader>
            {
                props.data ?
                Object.keys(props.data).map( (item, index, arr) => {
                    return (
                        <Aux>
                            <ListItem key={index} primaryText={`${item.charAt(0).toUpperCase() + item.slice(1)}: ${props.data[item]}`} />
                            <Divider />
                        </Aux>
                    )
                })
                : <div></div>
            }
        </List>
    );
};

export default InfoBlock;