import React from "react";



function WeatherCard(props) {
    return (
        <div>
            <div>Name: {props.name}</div>
            <div>Country: {props.country}</div>
            <div>Temperature: {props.temp_c} °C </div>
            <div>Condition: {props.climatic_condition}</div>
            <img src={props.icon} alt={props.name}/>

        </div>
    )
}


export default WeatherCard;


// Create components to reuse, and make it easier to read. 
// It is passed through with props for home.
