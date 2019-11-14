import {combineReducers} from "redux";
import tatron from "./tatron";
import user from "./user"
import film from "./film"


export default combineReducers({
    tatron,
    user,
    film
});