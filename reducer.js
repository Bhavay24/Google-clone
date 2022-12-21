import {SET_SEARCH_TERM} from "./types";

export const initialState={
    term:''
}
const reducer = (state,action)=>{
    switch(action.type){
        case SET_SEARCH_TERM: //if we have action type so we will return the state and with what we searched in that state
            return{
                ...state,
                term:action.term
            }
        default:
            return state;    
    }
}

export default reducer;
//Reducer contains all the actions that need to be performed, so it will have state and action.