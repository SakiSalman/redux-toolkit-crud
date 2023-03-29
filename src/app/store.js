import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import postrReducer from '../features/timeline/timelineSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    post : postrReducer
  },
});
