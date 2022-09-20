import {SET_LOADING} from "../actions/types";
import {fromJS, get, getIn, setIn} from "immutable";

const initialState = fromJS({
    loading:false,
});

export const uiReducer = (state, action) => {
    switch (action.type) {
        case SET_LOADING:
            return setIn(state,['loading'],action.payload);
            break;
        default:
            return {...state};
            break;
    }
}