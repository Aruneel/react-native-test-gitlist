import { 
        GET_GIT_DATA, GET_GIT_DATA_SUCCESS, GET_GIT_DATA_FAILURE, RESET_GET_GIT_DATA } from '../utils/Types';

const INITIAL_STATE = { 
                gitData: [], gitDataLoading: false, gitDataSuccess: false, error: '' };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_GIT_DATA:
            return { 
                ...state, 
                gitDataLoading: true, 
                error: '', 
                gitDataSuccess: false 
            };
        case GET_GIT_DATA_SUCCESS:
            return { 
                ...state,
                ...INITIAL_STATE, 
                gitData: action.payload, 
                gitDataLoading: true 
            };
        case GET_GIT_DATA_FAILURE:
            return { 
                ...state, 
                error: action.payload,//'Something went wrong..', 
                gitDataLoading: false, 
                gitDataSuccess: false 
            };
        case RESET_GET_GIT_DATA:
            return { 
                INITIAL_STATE 
            };
        default:
            return state;
    }
}