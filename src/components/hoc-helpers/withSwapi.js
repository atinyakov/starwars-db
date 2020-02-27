import React from 'react';
// import SwapiService from '../../services/swapi';
import { SwapiConsumer } from '../SwapiContext';

const withSwapi = (Wrapped, getMapping) => {
    return props => {
        return (
            <SwapiConsumer>
                {swapi => {
                    const services = getMapping(swapi);

                    return <Wrapped {...props} {...services} />;
                }}
            </SwapiConsumer>
        );
    };
};

export default withSwapi;
