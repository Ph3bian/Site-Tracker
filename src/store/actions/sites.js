import { Axios } from "utils";
import { FETCH_ALL_SITES, FETCH_ALL_SITES_ERROR } from "../types/sites";
export const fetchSites = () => async (dispatch) => {
  try {
    const response = await Axios.get(`/sites`, {});
    console.log(response);
    dispatch({
      type: FETCH_ALL_SITES,
      payload: response.data,
    });
  } catch (errors) {
    dispatch({
      type: FETCH_ALL_SITES_ERROR,
    });
  }
};
