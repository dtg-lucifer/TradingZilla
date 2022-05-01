import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authState'

const store = configureStore({
    reducer: {
        auth: authSlice
    },
});

export default store;