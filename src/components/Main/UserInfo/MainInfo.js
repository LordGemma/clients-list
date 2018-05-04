import React from 'react';
import { CardTitle } from 'material-ui/Card';
import Aux from '../../../containers/SideBar/Aux';

const MainInfo = ({ general, job }) => {
    return (
        <Aux>
            {
                (general && job) ?
                    <Aux>
                        <CardTitle 
                            title={`${general.firstName} ${general.lastName}`} 
                            subtitle={`${job.title} ― ${job.company}`} 
                        />
                    </Aux>
                    : <div></div>
            }
        </Aux>
    );
};

export default MainInfo;