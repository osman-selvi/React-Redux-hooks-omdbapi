import {
    API_URL, API_KEY, API_KEY_QUERY_STRING,
} from './../config';

export function getFilms(page, options) {
    let url = `${API_URL}?${API_KEY_QUERY_STRING}=${API_KEY}&page=${page}`
    if (options !== undefined) {
        if (options.name !== undefined) {
            url = `${url}&s=${options.name}`;
        }
        if (options.type !== undefined) {
            url = `${url}&type=${options.type}`;
        }
    }

    return fetch(url)
        .then(res => res.json())
}