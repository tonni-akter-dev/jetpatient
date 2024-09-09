// import { configureStore, EnhancedStore } from '@reduxjs/toolkit';

// export const store = (): EnhancedStore => {
//     return configureStore({
//         reducer: {}
//     });
// };

import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

// Example of a simple slice reducer

export const store = configureStore({
  reducer: {},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
