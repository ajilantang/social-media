import { combineReducers } from "redux";

import post from "./post";
import users from "./user";
import comments from "./comment";
import albums from "./album";
import photos from "./photos";

export default combineReducers({ post, users, comments, photos, albums });
