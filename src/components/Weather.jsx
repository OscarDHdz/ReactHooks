import React from 'react';

const Weather = ({weather}) => {

    // Extract data
    const {name, main} = weather;
    if (!name) return null;

    // Convert Kelvin to Celcius
    const kelvin = 273.15;

    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>{name}</h2>
                <p className="temperatura">{parseInt(main.temp - kelvin, 10)}<span>&#x2103;</span></p>
                <p>Max temperature: {parseInt(main.temp_max - kelvin, 10)}&#x2103;</p>
                <p>Max temperature: {parseInt(main.temp_min - kelvin, 10)}&#x2103;</p>
            </div>
        </div>
    );
}
 
export default Weather;