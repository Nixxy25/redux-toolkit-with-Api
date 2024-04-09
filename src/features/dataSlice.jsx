import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllData = createAsyncThunk("dataUsers", async (args, {rejectWithValue}) => {
    const response = await fetch("https://api.github.com/users");
   try {
    const result = response.json();
    return result;
   } catch (error){
    return rejectWithValue("Opps found an error")
   }
})
export const dataUser = createSlice({
    name : "dataUser",
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    extraReducers: (builders) => {
        builders.addCase(getAllData.pending, (state) => {
            state.loading = true
        })
        builders.addCase(getAllData.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
        })
        builders.addCase(getAllData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
});

export default dataUser.reducer;