import axios from "axios";


const baseURL = "http://api.weatherapi.com/v1"

const key = "YOUR_KEY"

const setWeather = (weather) => ({
    type: 'SET_WEATHER',
    payload: {
        weather
    }
})

export const getWeather = (location) => async (dispath) => {

    try {
        const response = await axios.get(`${baseURL}/current.json?key=${key}&q=${location}`)

        const weatherDetails = {
            name: response.data.location.name,
            country: response.data.location.country,
            temp_c: response.data.current.temp_c,
            climatic_condition: response.data.current.condition.text,
            icon: response.data.current.condition.icon
        }
        
            dispath(setWeather(weatherDetails))
        
    } catch (error) {
        window.alert("Location not found.")       
    }
}


// Here I do the communication of the APP with the API, using AXIOS.

// const weatherDetails :
//Destructuring of data received from the API. 
//Transforming into an object, and using only the necessary data.
