import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { PropertyListActionTypes, PropertyListActions } from "../Actions";
import { IProperty } from "../Reducer"

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {

    afterEach(() => {
        fetchMock.restore()
    });

    it('should create an action to set loading progress', () => {
        const expectedAction = {
            type: PropertyListActionTypes.LOADING_IN_PROGRESS
        }
        expect(PropertyListActions.setLoadingInProgress()).toEqual(expectedAction)
    });

    it('should create an action to set property list', () => {
        const propertyListToBeSet: IProperty[] = [];
        const expectedAction = {
            type: PropertyListActionTypes.DATA_LOAD_SUCCESS,
            propertyList: propertyListToBeSet
        }
        expect(PropertyListActions.setPropertyList(propertyListToBeSet)).toEqual(expectedAction)
    });

    it('should create an action to set load error', () => {
        const loadError = "error";
        const expectedAction = {
            type: PropertyListActionTypes.DATA_LOAD_ERROR,
            loadError: loadError
        }
        expect(PropertyListActions.setLoadError(loadError)).toEqual(expectedAction)
    });

    it('assync fetchData action behaves on error', () => {
        fetchMock.getOnce('*', {
            body: {},
            status: 500,
            headers: { 'content-type': 'application/json' }
        })

        const expectedActions = [
            { type: PropertyListActionTypes.LOADING_IN_PROGRESS },
            {
                type: PropertyListActionTypes.DATA_LOAD_ERROR,
                loadError: "Property list loading error occured, please try again by refreshing the page."
            }
        ];
        const store = mockStore({ PropertyList: [] })

        return store.dispatch(PropertyListActions.fetchData()).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
        })
    });

    it('assync fetchData action behaves on success', () => {
        const propertyItemMock = {
            "owner": "33 miles away",
            "address": {
                "line1": "",
                "line4": "",
                "postCode": "SG4 7JD",
                "city": "London",
                "country": "U.K."
            },
            "airbnbId": 3512503,
            "numberOfBedrooms": 1,
            "numberOfBathrooms": 1,
            "incomeGenerated": 2000.34
        };
        fetchMock.getOnce('*', {
            body: [propertyItemMock],
            status: 200,
            headers: { 'content-type': 'application/json' }
        })

        const expectedActions = [
            { type: PropertyListActionTypes.LOADING_IN_PROGRESS },
            {
                type: PropertyListActionTypes.DATA_LOAD_SUCCESS,
                propertyList: [propertyItemMock]
            }
        ];
        const store = mockStore({ PropertyList: [] })

        return store.dispatch(PropertyListActions.fetchData()).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
        })
    });

});