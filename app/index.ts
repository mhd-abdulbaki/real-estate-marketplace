import { configureStore } from "@reduxjs/toolkit";
import dialogReducer from "../features/dialog/dialogSlice";
import dbSlice from "../features/db/dbSlice";
import filterSlice from "@/features/filter/filterSlice";
export const store = configureStore({
  reducer: {
    dialog: dialogReducer,
    db: dbSlice,
    filter: filterSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
