import React from 'react';
import Avatar from 'material-ui/Avatar';
import Aux from '../../../containers/SideBar/Aux';

const Image = ({general}) => {
    const style = {margin: 5};

    return (
        <Aux>
            { 
                general ?
                <Avatar
                    src={general.avatar}
                    size={128}
                    style={style}
                />
                : <div></div>
            }
        </Aux>
    );
};

export default Image;