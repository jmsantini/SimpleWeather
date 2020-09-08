import React, { Component } from 'react';
import WeatherCard from "../../components/WeatherCard/index";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { getWeather } from "../../actions/weather"
import { connect } from 'react-redux';
import { Content, LocationSearch } from "./styled"



class WeatherHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: "Hastings, New Zealand",
            inputLocation: ""
        };
    }

    // Those are the states I used.
    // I applied an initial state to bring the climate, the region I want. And another who will receive the location informed.

    componentDidMount() {
        const { location } = this.state
        this.props.getWeather(location)
    }

    //I use componentDidMount() to start the application, already calling the getWeather() function.

    handleFieldChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
        this.setState({ inputLocation: event.target.value })
    };

    // I use the handleFieldChange, to control the values ​​of the inputs.

    handleLocationButton = (event) => {
        let { inputLocation, location } = this.state
        event.preventDefault()
        this.setState({
            location: inputLocation
        })
        this.props.getWeather(location)
    }

// handleLocationButton: Function that is called when submitting the form.
// It passes the value of the inputLocation to the location. Changing the state value. Right after calling the getWeather()


    render() {

        const { weatherDetails } = this.props // destructuring

        return (
            <Content>
                <div>
                    <LocationSearch onSubmit={this.handleLocationButton} >
                        <TextField
                            onChange={this.handleFieldChange}
                            name="location"
                            value={this.inputLocation}
                            label="Location"
                            defaultValue="Hastings, New Zealand"
                            variant="filled"
                        />
                        <Button variant="contained" color="primary" type="submit">Send</Button>
                    </LocationSearch>
                </div>


                <WeatherCard
                    name={weatherDetails.name}
                    country={weatherDetails.country}
                    temp_c={weatherDetails.temp_c}
                    climatic_condition={weatherDetails.climatic_condition}
                    icon={weatherDetails.icon}
                />

            </Content>
        )
    }

}

const mapStateToProps = state => ({
    weatherDetails: state.weather.weatherByLocation
})

// As the first argument passed in to connect, mapStateToProps is used for selecting the part of the data from the store that the connected component needs.
// weatherDetails, receives the initial value of weatherByLocation. This value comes from the reducer.

const mapDispatchToprops = (dispatch) => ({
    getWeather: (location) => dispatch(getWeather(location))
})

//mapDispatchToProps () receives the dispatch () method and returns callback props that you want to inject into the presentation component.

export default connect(
    mapStateToProps,
    mapDispatchToprops
)(WeatherHome);
