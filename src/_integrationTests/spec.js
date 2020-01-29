import moxios from 'moxios';
import { getFetching, getFetched } from './../actions/searchActions';

describe('fetch action', () => {

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    // start fetch
    test('start fetching', () => {

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            })
        });

        return store.dispatch(getFetching())
            .then(() => {
                const newState = store.getState();
                expect(newState.posts).toBe(expectedState);
            })

    });

    // after fetch
    test('end getFetched', () => {

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            })
        });

        return store.dispatch(getFetched())
            .then(() => {
                const newState = store.getState();
                expect(newState.posts).toBe(expectedState);
            })

    });

});