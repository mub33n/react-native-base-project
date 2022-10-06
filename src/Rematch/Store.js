import {init} from '@rematch/core';
import {persistStore} from 'redux-persist';
import createRematchPersist from '@rematch/persist';
import selectPlugin from '@rematch/select';
import AsyncStorage from '@react-native-async-storage/async-storage';
import models from './Models';

const persist = createRematchPersist({
  key: 'root',
  throttle: 2500,
  storage: AsyncStorage,
  version: 2,
  timeout: 2500,
  whitelist: ['User', 'Config', 'Location', 'ViewedProfiles'], // Add models here of what needs persisting
});

const store = init({
  models,
  plugins: [persist, selectPlugin()],
});

export default store;
export const {dispatch, select} = store;
export const persistor = persistStore(store);
