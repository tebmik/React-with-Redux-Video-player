import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "../recucers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];
export const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(...middleware)
));