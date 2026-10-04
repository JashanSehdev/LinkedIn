
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from './storage';
import authReducer from './auth/auth.slice'
import feedReducer from './feed/feed.slice'
import jobReducer from './job/job.slice'
import followReducer from './follow/follow.slice'
import notificationReducer from './notification/notification.slice'
import connecitonReducer from './connection/connection.slice'
import chatRoomReducer from './chat/chat.slice'
import messageReduxer from './message/message.slice'
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
const rootReducer = combineReducers({
    auth: authReducer,
    feed: feedReducer,
    jobs: jobReducer,
    follow : followReducer,
    notification : notificationReducer,
    connection: connecitonReducer,
    room : chatRoomReducer,
    messages: messageReduxer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist :['auth', 'feed', 'jobs', 'follow', 'notification', 'connection', 'room']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const persistor = persistStore(store);