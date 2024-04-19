import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postsSlice';
import notificationsReducer from '../features/notifications/notificationsSlice'
import { apiSlice } from '../api/apiSlice';

const store = configureStore({
    reducer:{
      posts: postsReducer,
      notifications: notificationsReducer,
      [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware().concat(apiSlice.middleware)
})

export default store