import { HOME_PAGE_START_LOADING, HOME_PAGE_FETCH, HOME_PAGE_END_LOADING, FETCH_BY_ID } from "../Constants/actionTypes";
import * as API from '../API/index';

export const getHomePageInfo = () => async (dispatch) => {
    try {
        dispatch({ type: HOME_PAGE_START_LOADING });
        const { data } = await API.getDataForHomePage();

        dispatch({ type: HOME_PAGE_FETCH, payload: data });
        dispatch({ type: HOME_PAGE_END_LOADING });
    } catch (err) {
        console.log(err)
    }
}

export const getGoodsById = (itemType, id) => async (dispatch) => {
    try {
        const { data } = await API.getItemById(itemType, id);
        dispatch({ type: FETCH_BY_ID, payload: data })

    } catch (err) {
        console.log(err);
    }
}