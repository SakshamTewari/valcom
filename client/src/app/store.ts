import { configureStore } from '@reduxjs/toolkit';
import mapReducer from '../pages/MapPage/mapSlice';

const store = configureStore({
  reducer: {
    map: mapReducer,
  },
});

export default store;
