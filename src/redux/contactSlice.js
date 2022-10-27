import { createSlice } from '@reduxjs/toolkit';
import nextId from 'react-id-generator';

export const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    filter: '',
    contacts: [],
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare({ name, number }) {
        return { payload: { id: nextId(), name, number } };
      },
    },
    deleteContact: (state, action) => {
      const index = state.contacts.findIndex(
        elem => elem.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, setFilter } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
