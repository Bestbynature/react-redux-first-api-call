import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";

//  'https://course-api.com/react-useReducer-cart-project';
const url = 'https://randomuser.me/api/?results=5'
const initialState = {
    users: [],
    error: undefined,
    isLoading: false,
};

export const getUsers = createAsyncThunk('users/fetchUsers', async () => {
   try {
    const response = await fetch(url);
        const users = await response.json();
        return users.results;
   } catch (error) {
    return isRejectedWithValue(error.response.data);
   }  
});

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(getUsers.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(getUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.users = action.payload;
          })
          .addCase(getUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
          });
      },
});

    // export const {  } = usersSlice.actions;
    export default usersSlice.reducer;