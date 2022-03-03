import { actions, actionType, filterState, sortType } from "../types";

export {};

const initialState: filterState = {
  filter: {
    from: 0,
    till: 0,
  },
  sort: sortType.name,
};

export const filterReducer = (
  state: filterState = initialState,
  action: actionType
) => {
  switch (action.type) {
    case actions.SET_FILTER_FROM:
      return {
        filter: { from: action.payload, till: state.filter.till },
        sort: state.sort,
      };
    case actions.SET_FILTER_TILL:
      return {
        filter: { from: state.filter.from, till: action.payload },
        sort: state.sort,
      };
    case actions.SET_SORT:
      return {
        filter: { ...state.filter },
        sort: action.payload,
      };
    default:
      return state;
  }
};
