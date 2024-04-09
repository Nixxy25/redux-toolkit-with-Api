import { configureStore } from "@reduxjs/toolkit";

import dataUser  from "../features/dataSlice";

 const store = configureStore({
    reducer: {
        app : dataUser,
    },
});

export default store;