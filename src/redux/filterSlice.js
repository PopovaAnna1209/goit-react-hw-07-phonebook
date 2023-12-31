import { createSlice } from '@reduxjs/toolkit';

const initialStateFilters = { filter: '' };

const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialStateFilters,
  reducers: {
    setFilter: {
      reducer(state, action) {
        state.filter = action.payload;
      },
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;











// import { createSlice } from '@reduxjs/toolkit';

// export const filterSlice = createSlice({
//   name: 'filter',
//   initialState: {
//     value: '',
//   },
//   reducers: {
//     setFilter(state, action) {
//       state.value = action.payload;
//     },
//   },
// });

// export const { setFilter } = filterSlice.actions;
// export const getFilter = state => state.filter.value;
// export const filterReduser = filterSlice.reducer;
