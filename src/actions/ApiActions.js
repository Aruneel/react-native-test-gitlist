import {
    GET_GIT_DATA, GET_GIT_DATA_SUCCESS, GET_GIT_DATA_FAILURE, RESET_GET_GIT_DATA
} from '../utils/Types';
import * as Constants from '../utils/Constants';


export const getGitData = () => {
    return (dispatch) => {

        dispatch({ type: GET_GIT_DATA });

        fetch(`${Constants.BASE_URL}`)
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: GET_GIT_DATA_SUCCESS,
                    payload: data
                });
            })
            .catch(error => {
                dispatch({
                    type: GET_GIT_DATA_FAILURE,
                    payload: error
                });
            });
    };
};


export const resetGetGitData = () => {
    return {
        type: RESET_GET_GIT_DATA,
    };
};

