import React from 'react';
import { ItemDetails, ItemRow } from '../item-details';
import withSwapi from '../hoc-helpers/withSwapi';

const PlanetDetails = props => {
    return (
        <ItemDetails {...props}>
            {/* <ItemRow field={'eyeColor'} label={'Eye Color'} /> */}
            <ItemRow field={'diameter'} label={'Diam'} />
        </ItemDetails>
    );
};

const mapServices = swapiService => {
    return {
        getData: swapiService.getPlanet,
        getImg: swapiService.getPictureURL
    };
};

export default withSwapi(PlanetDetails, mapServices);
