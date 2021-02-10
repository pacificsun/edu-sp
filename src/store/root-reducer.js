import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import authReducer from "./auth/auth.reducers";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [], // add inside array things that should be persisted
};

const rootReducer = combineReducers({
  auth: authReducer,
});

export default persistReducer(persistConfig, rootReducer);
