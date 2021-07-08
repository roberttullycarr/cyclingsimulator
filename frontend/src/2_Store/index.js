import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from "./Reducer";

const reduxPlugin = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const composedEnhancers = compose(applyMiddleware(thunk), reduxPlugin)

//Undefined below will be the initial state of the index (update it if needed)
const index = createStore(reducer, undefined, composedEnhancers)


export default index;