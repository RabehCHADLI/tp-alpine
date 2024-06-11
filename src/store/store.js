import { configureStore } from "@reduxjs/toolkit";
import configurateurSlice from "../slice/configurateurSlice";

export const store = configureStore({
    reducer: {
        configurateur: configurateurSlice
    },
});