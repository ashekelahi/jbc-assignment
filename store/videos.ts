import { createStore } from "@harlem/core";

const STATE = {
  videos: {},
};

export const { state, getter, mutation, ...store } = createStore("user", STATE);

export const videos = getter("videos", (state) => {
  return state.videos;
});

export const setVideos = mutation("set-videos", (state, payload: object) => {
  state.videos = payload;
});
