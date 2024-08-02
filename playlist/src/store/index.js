import { configureStore, createAction, createSlice } from "@reduxjs/toolkit";
const reset = createAction("app/reset");
const movieSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
  extraReducers(builder){
    builder.addCase(reset,(state,action)=>{
        return [];
    })
  }
});

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(reset , (state, action) => {
      return [];
    });
  },
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: movieSlice.reducer,
  },
});

export { store, reset };
export const { addSong, removeSong } = songsSlice.actions;
export const { addMovie, removeMovie } = movieSlice.actions;
