import { combineReducers } from "redux";
// import blogs from './blogs/blogs';
import projects from './projects';
import login from './login'
import dashboard from './dashboard'

let rootReducer =  combineReducers({
    projects,
    login,
    dashboard
});

export default rootReducer