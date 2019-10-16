import { PropertyListActionTypes, PropertyListActions } from "../Actions";
import PropertyListReducer from "../Reducer"

describe('reducer', () => {

    it('should create default state', () => {
        const expectedState = {
            isLoading: false,
            propertyList: [],
            loadError: ""
        }
        expect(PropertyListReducer(undefined, {type: undefined})).toEqual(expectedState);
    });

    it('should create in progress state', () => {
        const previousState = {
            isLoading: false,
            propertyList: [],
            loadError: ""
        };
        const expectedState = {
            isLoading: true,
            propertyList: [],
            loadError: ""
        };
        expect(PropertyListReducer(previousState, {type: PropertyListActionTypes.LOADING_IN_PROGRESS})).toEqual(expectedState);
    });

    it('should create successful load state', () => {
        const previousState = {
            isLoading: true,
            propertyList: [],
            loadError: ""
        };
        const expectedState = {
            isLoading: false,
            propertyList: [{a: 1}],
            loadError: ""
        };
        expect(PropertyListReducer(previousState, {
            type: PropertyListActionTypes.DATA_LOAD_SUCCESS,
            propertyList: [{a: 1}]
        })).toEqual(expectedState);
    });

    it('should create load error state', () => {
        const previousState = {
            isLoading: true,
            propertyList: [],
            loadError: ""
        };
        const expectedState = {
            isLoading: false,
            propertyList: [],
            loadError: "error"
        };
        expect(PropertyListReducer(previousState, {
            type: PropertyListActionTypes.DATA_LOAD_ERROR,
            loadError: "error"
        })).toEqual(expectedState);
    });

});