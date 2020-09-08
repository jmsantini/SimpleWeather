import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import weather from "./weather"


export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    weather
  });
