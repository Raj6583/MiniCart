import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import initialState from "./reducers/initialState";
import rootReducer from "./reducers";

const persistConfig = {
  key: "persist-storage",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  initialState,
  applyMiddleware(thunk)
);

export const persistor = persistStore(store);
export default store;
