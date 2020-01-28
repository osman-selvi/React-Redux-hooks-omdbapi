const searchConst = require("../constans/search");

const initialState = {
    filter: undefined
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case searchConst.SET_SEARCH_OPTIONS:
            return {
                ...state,
                filter: action.payload
            };
        default:
            return state
    }
}

export default searchReducer;