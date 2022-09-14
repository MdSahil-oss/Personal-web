import { combineReducers } from "redux";
import blogs from './blogs/blogs';
import projects from './projects/projects';

export default combineReducers({
    blogs,
    projects
});