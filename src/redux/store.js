import {
  configureStore,
  combineReducers,
  applyMiddleware,
} from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import FdBkConfig_Reducer from "./orders";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  config: FdBkConfig_Reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore(
  {
    reducer: persistedReducer,
  },
  applyMiddleware
);

const persistor = persistStore(store);
export { persistor };
export default store;
