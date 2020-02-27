import React from 'react';
import { ItemDetails, ItemRow } from '../item-details';
import withSwapi from '../hoc-helpers/withSwapi';

const PersonDetails = props => {
    return (
        <ItemDetails {...props}>
            <ItemRow field={'eyeColor'} label={'Eye Color'} />
            <ItemRow field={'gender'} label={'Gender'} />
        </ItemDetails>
    );
};

const mapServices = swapiService => {
    return {
        getData: swapiService.getPerson,
        getImg: swapiService.getPersonUrl
    };
};

export default withSwapi(PersonDetails, mapServices);
