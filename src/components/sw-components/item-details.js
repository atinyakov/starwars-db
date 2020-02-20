import React from 'react';
import { ItemDetails, ItemRow } from '../item-details';
import SwapiService from '../../services/swapi';
const swapiService = new SwapiService();

const {
    getPerson,
    getPersonUrl,
    getStarships,
    getStarshipUrl,
    getPictureURL,
    getPlanet
} = swapiService;

export const PersonDetails = ({ itemId }) => {
    return (
        <ItemDetails itemId={itemId} getData={getPerson} getImg={getPersonUrl}>
            <ItemRow field={'eyeColor'} label={'Eye Color'} />
            <ItemRow field={'gender'} label={'Gender'} />
        </ItemDetails>
    );
};
export const PlanetDetails = ({ itemId }) => {
    return (
        <ItemDetails itemId={itemId} getData={getPlanet} getImg={getPictureURL}>
            {/* <ItemRow field={'eyeColor'} label={'Eye Color'} /> */}
            <ItemRow field={'diameter'} label={'Diam'} />
        </ItemDetails>
    );
};
export const StarshipDetails = ({ itemId }) => {
    return (
        <ItemDetails
            itemId={itemId}
            getData={getStarships}
            getImg={getStarshipUrl}
        >
            <ItemRow field={'model'} label={'Model'} />
            <ItemRow field={'cargoCapacity'} label={'Cargo'} />
            <ItemRow field={'length'} label={'Length'} />
        </ItemDetails>
    );
};
