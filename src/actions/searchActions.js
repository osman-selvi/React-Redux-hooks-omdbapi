
const searchConst = require("../constans/search");

export function setSearchOptions(options) {
    return {
        type: searchConst.SET_SEARCH_OPTIONS,
        payload: options
    };
}