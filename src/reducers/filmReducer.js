const filmConst = require("../constans/film");
const searchConst = require("../constans/search");

const initialState = {
    items: [],
    totalCount: 0,
    isLoaded: false,
    currentPage: 1,
    pageSize: 10
};

const filmReducer = (state = initialState, action) => {
    switch (action.type) {
        case filmConst.GET_FETCHING:
            return {
                ...state,
                isLoaded: false
            };
        case filmConst.GET_FETCHED:
            return {
                ...state,
                items: action.payload.films === undefined ? [] : action.payload.films,
                totalCount: action.payload.films === undefined ? 0 : action.payload.totalCount,
                isLoaded: true
            };
        case searchConst.SET_SEARCH_OPTIONS:
            return {
                ...state,
                isLoaded: false
            };
        case filmConst.SET_PAGE_NUMBER:
            return {
                ...state,
                isLoaded: false,
                currentPage: action.payload.pageNumber
            };
        default:
            return state
    }
}

export default filmReducer;