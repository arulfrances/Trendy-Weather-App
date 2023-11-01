import React from "react";
import "./present-weather.css";

const PresentWeather = ({data}) => {

    // return ("Weather in Coimbatore is Breezy!");

    return (
        <div className="weather-component">
            <div className="top">
                <div>
                    <p className="city">{data.city}</p>
                    <p className="weather-description">{data.weather[0].description}</p>
                </div>
                <img className="weather-icon" src={`icons/${data.weather[0].icon}.png`} />
            </div>

            <div className="bottom">
            <p className="temperature">{Math.round(data.main.temp)}°C</p>
            <div className="details">
                <div className="data-row">
                    <span className="data-label">Weather Details</span>
                </div>
                <div className="data-row">
                    <span className="data-label">Feels Like</span>
                    <span className="data-value">{Math.round(data.main.feels_like)} °C</span>
                </div>
                <div className="data-row">
                    <span className="data-label">Wind Speed</span>
                    <span className="data-value">{data.wind.speed} m/s</span>
                </div>
                <div className="data-row">
                    <span className="data-label">Humidity</span>
                    <span className="data-value">{data.main.humidity}%</span>
                </div>
                <div className="data-row">
                    <span className="data-label">Pressure</span>
                    <span className="data-value">{data.main.pressure}</span>
                </div>
            </div>

            </div>

        </div>

    )
}




export default PresentWeather;