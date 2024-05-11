import { configureStore } from "@reduxjs/toolkit";
import dataProvider from "./dataProvider";

const store = configureStore({
    reducer : {
        dataProvider
    }
})

export default store