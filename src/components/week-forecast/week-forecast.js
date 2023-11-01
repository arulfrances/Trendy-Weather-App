import React from "react";

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import "./week-forecast.css";

const WEEK_DAYS = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const WeekForecast = ({ data }) => {

    const dayOfWeek = new Date().getDay();
    // return ("Week Forecast");

    const forecastDataForDays = WEEK_DAYS.slice(dayOfWeek,WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayOfWeek));

    return (
        <>

            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, dayindex) => (
                    <AccordionItem key={dayindex}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="week-item">
                                    <img src={`icons/${item.weather[0].icon}.png`} className="iconValue" />
                                    <label className="dayValue">{forecastDataForDays[dayindex]}</label>
                                    <label className="descriptionValue">{item.weather[0].description}</label>
                                    <label className="tempValue">{(item.main.temp_max)}°C / {(item.main.temp_min)}°C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="week-item-weather">
                                <div className="week-item-weather-details-item">
                                    <label>Pressure</label>
                                    <label>{item.main.pressure}</label>
                                </div>
                                <div className="week-item-weather-details-item">
                                    <label>Humidity</label>
                                    <label>{item.main.humidity}</label>
                                </div>
                                <div className="week-item-weather-details-item">
                                    <label>Clouds</label>
                                    <label>{item.clouds.all}</label>
                                </div>
                                <div className="week-item-weather-details-item">
                                    <label>Wind Speed</label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                                <div className="week-item-weather-details-item">
                                    <label>Sea Level</label>
                                    <label>{item.main.sea_level}</label>
                                </div>
                                <div className="week-item-weather-details-item">
                                    <label>Feels Like</label>
                                    <label>{item.main.feels_like}</label>
                                </div>

                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
    </Accordion>
        </>

    );
};


export default WeekForecast;