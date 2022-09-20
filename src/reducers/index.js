import { combineReducers } from "redux";
// import blogs from './blogs/blogs';
import projects from './projects';
import login from './login'

let rootReducer =  combineReducers({
    projects,
    login
});

export default rootReducer