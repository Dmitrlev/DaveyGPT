import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  isActive: false,
  settings: {
    quantityPreviousMessagesAll: true,
    quantityPreviousMessages: 0, //количество предыдущих сообщений в запросе, number || 'all'
    theme: false, //цветовая расцветка
    chatOutline: false,
    primaryColor: '#d611f3',
    fontSize: 15,
    time: false, //показ времени
    key: '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',
  }
};

const Setting = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    setIsActive (state, action) {
      const { isActive } = action.payload;
      state.isActive = isActive;
    },
    setStoreSetting (state, action) {
      state.settings = action.payload;
    },
    setKey(state, action) {
      state.settings.key = action.payload;
    },
    setQuantityPreviousMessages (state, action) {
      state.settings.quantityPreviousMessages = action.payload.quantityPreviousMessages;
      state.settings.quantityPreviousMessagesAll = action.payload.quantityPreviousMessagesAll;
    },
    toggleTheme (state, action) {
      state.settings.theme = action.payload;
    },
    setChatOutline (state, action) {
      state.settings.chatOutline = action.payload;
    },
    setTime (state, action) {
      state.settings.time = action.payload;
    },
    setPrimaryColor (state, action) {
      state.settings.primaryColor = action.payload;
    },
  },
});

export const {
  setIsActive,
  setKey,
  setQuantityPreviousMessages,
  setChatOutline,
  setPrimaryColor,
  setTime,
  setStoreSetting
} = Setting.actions;

export default Setting.reducer;