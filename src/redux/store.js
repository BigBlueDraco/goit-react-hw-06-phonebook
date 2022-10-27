import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactSlice';
import storage from 'reduxjs-toolkit-persist/lib/storage';
import { persistReducer, persistStore } from 'reduxjs-toolkit-persist';
import { getDefaultMiddleware } from '@reduxjs/toolkit';

const reducers = combineReducers({
  contacts: contactReducer,
});

const persistConfig = {
  key: 'root',
  storage: storage,
};

const _persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: _persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: false,
    },
  }),
});

export const persistor = persistStore(store);
