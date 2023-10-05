import { createStore, combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

import rootReducer from '../redux/reducer/reducers';

const LoadStorageItems = () => {
  const initialState = {
    favorites: {
      characters: [],
      episodes: [],
      locations: [],
    },
    favoriteIconColor: {
      card1: 'gray',
      card2: 'yellow',
    }
  };

  if (process.browser) {
    return JSON.parse(localStorage.getItem('favoriteItems')) || initialState;
  }
  

  return initialState;
};

const persistConfig = {
  key: 'root', 
  storage, 
  whitelist:['favoriteIconColor'], 
};

const persistedReducer = persistReducer(persistConfig, rootReducer); 

const store = createStore(persistedReducer, LoadStorageItems()); 

const saveLocalStorage = () => {
  if (process.browser && typeof window !== 'undefined') {
    localStorage.setItem('favoriteItems', JSON.stringify(store.getState()));
  }
};


store.subscribe(() => saveLocalStorage());

export const getStore = () => store;

export const persistor = persistStore(store);
