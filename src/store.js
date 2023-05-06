import { configureStore } from "@reduxjs/toolkit";
import usersReducer from '../src/store/users/usersSlice'


const store = configureStore({
    reducer: {
        users: usersReducer,
    },
});

export default store;