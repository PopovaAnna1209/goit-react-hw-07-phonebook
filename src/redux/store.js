import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { filtersReducer } from '../redux/filterSlice';
import { contactsReducer } from '../redux/contactsSlice';

const reducers = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});

export const store = configureStore({
  reducer: reducers,
});














// import { configureStore } from '@reduxjs/toolkit';
// import { filterReduser } from './filterSlice';
// import { contactsApi } from './contactsSlice';
// import { setupListeners } from '@reduxjs/toolkit/query';

// export const store = configureStore({
//   reducer: {
//     filter: filterReduser,
//     [contactsApi.reducerPath]: contactsApi.reducer,
//   },
//   middleware: getDefaultMiddleware => [
//     ...getDefaultMiddleware(),
//     contactsApi.middleware,
//   ],
// });

// setupListeners(store.dispatch);