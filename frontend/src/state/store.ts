import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import applicantReducer from './applicantSlice';
import { api } from './api';

const store = configureStore({
  reducer: {
    applicant: applicantReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

// Setup RTK Query listeners
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>
export default store;
