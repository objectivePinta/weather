import {FETCH_WEATHER} from '../actions/index';
export default function(state=[],action){ //initial state of an array where to store the weather data
    switch (action.type){
        case FETCH_WEATHER:
            //return state.concat([ action.payload.data]); //mutate the state, don't use push because that will create a new state
            return [action.payload.data,...state]; //make an array of data, and what it is in state, the new record is at the top
    }
    console.log("Ta da");
    console.log('Action received:'+action);
    return state;
}