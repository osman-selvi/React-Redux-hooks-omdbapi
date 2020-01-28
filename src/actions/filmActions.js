
const filmConst = require("../constans/film");

export function getFetching() {
    return {
        type: filmConst.GET_FETCHING,
        payload: {
            isLoading: true
        }
    };
}

export function getFetched(res) {
    return {
        type: filmConst.GET_FETCHED,
        payload: {
            films: res.Search,
            totalCount: res.totalResults
        }
    };
}


export function setPageNumber(pageNumber) {
    return {
        type: filmConst.SET_PAGE_NUMBER,
        payload: {
            pageNumber: pageNumber
        }
    };
}