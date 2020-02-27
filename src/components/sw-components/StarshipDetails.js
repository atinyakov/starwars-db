import React from 'react';
import { ItemDetails, ItemRow } from '../item-details';
import withSwapi from '../hoc-helpers/withSwapi';

const StarshipDetails = props => {
    return (
        <ItemDetails {...props}>
            <ItemRow field={'model'} label={'Model'} />
            <ItemRow field={'cargoCapacity'} label={'Cargo'} />
            <ItemRow field={'length'} label={'Length'} />
        </ItemDetails>
    );
};

const mapServices = swapiService => {
    return {
        getData: swapiService.getStarships,
        getImg: swapiService.getStarshipUrl
    };
};

export default withSwapi(StarshipDetails, mapServices);
