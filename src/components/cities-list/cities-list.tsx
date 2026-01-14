import {setActiveCity} from '../../store/actions.ts';
import {CityProps} from '../../types/city.ts';
import {useAppDispatch, useAppSelector} from '../../hooks';

type CitiesListProps = {
  cities: CityProps[];
}


function CitiesList({cities}: CitiesListProps) {
  const activeCity = useAppSelector((state) => state.Offer.activeCity);
  const dispatch = useAppDispatch();

  return (
    <ul className="locations__list tabs__list">
      {cities &&
        cities.map((city) => (
          <li className="locations__item" key={city.name}>
            <a className={city.name === activeCity.name ?
              'locations__item-link tabs__item' : 'locations__item-link tabs__item tabs__item--active'}
            onClick={() => {
              dispatch(setActiveCity(city));
            }}
            >
              <span>{city.name}</span>
            </a>
          </li>
        ))}
    </ul>
  );
}

export default CitiesList;
