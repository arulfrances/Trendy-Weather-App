import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import SearchBar from './components/search-bar/searchbar';
import PresentWeather from './components/present-weather/present-weather';
import { API_URL, WEATHER_API, WEATHER_API_URL } from './api';
import WeekForecast from './components/week-forecast/week-forecast';

function App() {


  const [presentWeather, setPresentWeather] = useState(null);

  const [forecastWeather, setForecastWeather] = useState(null);


  const handleSearchChange = (searchCity) => {
    //console.log(searchCity);
    const [latitude, longitude] = searchCity.value.split(" ");

    //console.log(searchCity.value.split(" "));
    //console.log(latitude);

   // alert(API_URL);

    const presentWeatherCollector = fetch(
      `${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API}&units=metric`
    );

    const forecastWeatherCollector = fetch(
      `${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API}&units=metric`
    );



    //&appid=${WEATHER_API}

    Promise.all([presentWeatherCollector, forecastWeatherCollector]).then(
      async (response) => {
        // console.log(response);
        const climateResponse = await response[0].json();
        const weekforecastResponse = await response[1].json();

        console.log(climateResponse);

        console.log(weekforecastResponse);
        setPresentWeather({ city: searchCity.label, ...climateResponse });
        setForecastWeather({ city: searchCity.label
        , ...weekforecastResponse});

      }
    ).catch(console.log);

  }

  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}

      {/* </header> */}
      <div className="container">
        <SearchBar onSearchBarChange={handleSearchChange} />
        {presentWeather && <PresentWeather data={presentWeather} />}

        {forecastWeather && <WeekForecast data={forecastWeather} />}

      

      </div>
    </div>
  );
}

export default App;
