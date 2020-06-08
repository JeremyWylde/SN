import {getAuthUserData} from "./AuthReducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

let initialState = {
    initialized: false,
};

const AppReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            };

        default:
            return state;
    }
};

export default AppReducer;

export const initializedSuccsess = () => ({
    type: INITIALIZED_SUCCESS
});

export const initializeApp = () => (dispatch) =>{
    let dispatchResult = dispatch(getAuthUserData());
    Promise.all([dispatchResult])
        .then(()=>{
            dispatch(initializedSuccsess());
        })
};

