import ItemList from '../item-list';
import withData from '../hoc-helpers/withData';
import SwapiService from '../../services/swapi';

const swapi = new SwapiService();

export const PersonList = withData(ItemList, swapi.getAllPeople);

export const PlanetList = withData(ItemList, swapi.getAllPlanets);

export const StarshipList = withData(ItemList, swapi.getAllStarships);
