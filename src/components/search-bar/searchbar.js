import { AsyncPaginate } from 'react-select-async-paginate';
import { useState } from "react";
import { API_URL, geoAPIoptions } from '../../api';

const SearchBar = ({ onSearchBarChange }) => {

    const [search, setSearch] = useState(null);


    const loadOptions = (inputValue) => {
        // alert(inputValue);
        return fetch(`${API_URL}/cities?namePrefix=${inputValue}`, geoAPIoptions)
            .then((response) => response.json())
            //  .then((response) => console.log(response))
            .then((response) => {
                return {
                    options: response.data.map((cityname) => {
                        return {
                            value: `${cityname.latitude} ${cityname.longitude}`,//'42.46245 1.50209',
                            label: `${cityname.name}, ${cityname.country}` //"Andorra",

                        };
                    })

                }
            }
            )
            //catch((err) => console.error(err));
    }

    const handleOnChange = (searchCity) => {
        setSearch(searchCity);
        onSearchBarChange(searchCity);
        console.log(searchCity);

    }


    return (
        <AsyncPaginate
            placeholder="Search a location"
            debounceTimeout={500}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )
}


export default SearchBar;