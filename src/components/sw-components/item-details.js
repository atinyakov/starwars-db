import React from 'react';
import { ItemDetails, ItemRow } from '../item-details';
import { SwapiConsumer } from '../SwapiContext';

export const PersonDetails = ({ itemId }) => {
    return (
        <SwapiConsumer>
            {({ getPerson, getPersonUrl }) => (
                <ItemDetails
                    itemId={itemId}
                    getData={getPerson}
                    getImg={getPersonUrl}
                >
                    <ItemRow field={'eyeColor'} label={'Eye Color'} />
                    <ItemRow field={'gender'} label={'Gender'} />
                </ItemDetails>
            )}
        </SwapiConsumer>
    );
};
export const PlanetDetails = ({ itemId }) => {
    return (
        <SwapiConsumer>
            {({ getPlanet, getPictureURL }) => (
                <ItemDetails
                    itemId={itemId}
                    getData={getPlanet}
                    getImg={getPictureURL}
                >
                    {/* <ItemRow field={'eyeColor'} label={'Eye Color'} /> */}
                    <ItemRow field={'diameter'} label={'Diam'} />
                </ItemDetails>
            )}
        </SwapiConsumer>
    );
};
export const StarshipDetails = ({ itemId }) => {
    return (
        <SwapiConsumer>
            {({ getStarships, getStarshipUrl }) => (
                <ItemDetails
                    itemId={itemId}
                    getData={getStarships}
                    getImg={getStarshipUrl}
                >
                    <ItemRow field={'model'} label={'Model'} />
                    <ItemRow field={'cargoCapacity'} label={'Cargo'} />
                    <ItemRow field={'length'} label={'Length'} />
                </ItemDetails>
            )}
        </SwapiConsumer>
    );
};
