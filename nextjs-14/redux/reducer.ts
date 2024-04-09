import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import countReducer from "@/app/components/counter/counter.slice";
import articleReducer from "@/app/components/articles/service/article.slice";
import userReducer from "@/app/components/users/service/user.slice";
import boardReducer from "@/app/components/boards/service/board.slice";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: number) {
      return Promise.resolve(value);
    },
    removeItem() {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const countPersistConfig = {  
  key: "count",
  storage,
  whitelist: ["countState"],
};
const articlePersistConfig = {
  key: "article",
  storage,
  whitelist: ["articleState"],
};
const userPersistConfig = {
  key: "user",
  storage,
  whitelist: ["userState"],
};
const boardPersistConfig = {
  key: "board",
  storage,
  whitelist: ["boardState"],
};



const persistedCountReducer = persistReducer(countPersistConfig, countReducer);
const persistedArticleReducer = persistReducer(articlePersistConfig, articleReducer);
const persistedUserReducer = persistReducer(userPersistConfig, userReducer);
const persistedBoardReducer = persistReducer(boardPersistConfig, boardReducer);

export const rootReducer = combineReducers({ //combineReducers로 슬라이스를 전부 합침 (json 구조)
  count: persistedCountReducer,
  article: persistedArticleReducer,
  user: persistedUserReducer,
  board: persistedBoardReducer

});