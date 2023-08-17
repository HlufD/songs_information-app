import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: { isOpen: false, work: "" },
  reducers: {
    opneModal: (state, actions) => {
      state.isOpen = true;
      state.work = actions.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { opneModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
