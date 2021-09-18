import { ActionTypes } from '../actions';
import { Gnome } from '../../models';

export const global = (state = {}, action: any) => {

    switch (action.type) {
        case ActionTypes.SET_ORIGINAL_ITEMS:
            return {
                ...state,
                originalItems:  action.payload
            }
        case ActionTypes.SET_ITEMS:
            return {
                ...state,
                items:  action.payload
            }
        case ActionTypes.SET_ITEM:
            return {
                ...state,
                item:  action.payload
            }
        case ActionTypes.SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case ActionTypes.SET_SHOW_FILTERS:
            return {
                ...state,
                showFilter: action.payload
            }
        case ActionTypes.SET_OPEN_DIALOG:
            return {
                ...state,
                openDialog: action.payload
            }
        default:
            return {
                ...state,
                originalItems: Array<Gnome>(),
                items: Array<Gnome>(),
                item: new Gnome(),
                loading: false,
                showFilter: false,
                openDialog: false
            };
    };

}