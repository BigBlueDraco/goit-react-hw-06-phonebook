import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactSlice';
import storage from 'reduxjs-toolkit-persist/lib/storage';
import { persistReducer, persistStore } from 'reduxjs-toolkit-persist';

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
});

export const persistor = persistStore(store);
