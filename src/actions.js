import axios from "axios";
import { SET_TYPE_VIEW, FETCH_POSTS_SUCCESS, SET_PAGINATION } from "./reducers";

const request = axios.create({
  baseURL: "http://localhost:8888"
});

// dispatch type
export const changeTypeView = typeView => ({
  type: SET_TYPE_VIEW,
  payload: { typeView }
});

export const actSetPagination = metadata => ({
  type: SET_PAGINATION,
  payload: { metadata }
});

const actFetchPostSuccess = posts => ({
  type: FETCH_POSTS_SUCCESS,
  payload: { posts }
});

// action creator
export const fetchPosts = (page, pageSize) => async dispatch => {
  const res = await request.get(`/posts?_page=${page}&_limit=${pageSize}`);
  dispatch(actFetchPostSuccess(res.data));
};

export const setPagination = metadata => async dispatch => {
  dispatch(actSetPagination(metadata));
};

// action pagination
