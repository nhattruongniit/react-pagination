export const SET_TYPE_VIEW = "SET_TYPE_VIEW";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const SET_PAGINATION = "SET_PAGINATION";

const initialState = {
  typeView: "grid-view",
  posts: [],
  totalItems: 100,
  metadata: {
    page: 1,
    pageSize: 10
  }
};

const reducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_TYPE_VIEW:
      return {
        ...state,
        typeView: payload.typeView
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: payload.posts
      };

    case SET_PAGINATION:
      return {
        ...state,
        metadata: payload.metadata
      };
    default:
      return state;
  }
};

export default reducers;
