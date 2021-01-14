import { FETCH_ALL_SITES, FETCH_ALL_SITES_ERROR, FETCH_NEXT_SITES } from "../types/sites";

const initialState = {
  data: [],
  isLoading: true,
  hasError: false,
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ALL_SITES:
      return {
        ...state.data,
        data: payload,
        isLoading: false,
      };
    case FETCH_ALL_SITES_ERROR:
      return {
        ...state,
        hasError: true,
        isLoading: false,
      };
    case FETCH_NEXT_SITES:
      return {
        ...state,
        hasError: true,
        isLoading: false,
      };
    default:
      return state;
  }
};
