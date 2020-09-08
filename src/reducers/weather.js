const initialState = {
    weatherByLocation: []
};


const weather = (state = initialState, action) => {
    switch (action.type) {
        case "SET_WEATHER":
            return { ...state, weatherByLocation: action.payload.weather }
        default:
            return state;
    }
}


export default weather;


// This is Reducer.
// Where we keep global states.
// The values ​​received from the API through ACTIONS.
// We have an initial state, which after receiving the values and replaced