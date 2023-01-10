import aspida from "@aspida/axios";
import axios from "axios";
import https from "https";
import todoApi from "../aspida_api/todos/$api";
import tagApi from "../aspida_api/tags/$api";
import commentApi from "../aspida_api/comments/$api";
import todo_commentApi from "../aspida_api/todos_comments/$api";
import todo_tagApi from "../aspida_api/todos_tags/$api";
import profileApi from "../aspida_api/profiles/$api";

// baseURLの指定
let baseURL;
// npm run dev環境
if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3011/api";

  // npm run start環境
} else if (process.env.NODE_ENV === "production") {
  baseURL = "http://localhost:3011/api";

  // vercel production環境
} else if (process.env.NEXT_PUBLIC_NODE_ENV === "vercel_production") {
  baseURL = process.env.NEXT_PUBLIC_BASE_URL + "/api";
}

// Todo
export const todoClient = todoApi(
  aspida(
    axios.create({
      responseType: "json",
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
      baseURL: baseURL,
    })
  )
);

// コメント
export const commentClient = commentApi(
  aspida(
    axios.create({
      responseType: "json",
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
      baseURL: baseURL,
    })
  )
);

// タグ
export const tagClient = tagApi(
  aspida(
    axios.create({
      responseType: "json",
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
      baseURL: baseURL,
    })
  )
);

// Todo-コメント
export const todoCommentClient = todo_commentApi(
  aspida(
    axios.create({
      responseType: "json",
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
      baseURL: baseURL,
    })
  )
);

// Todo-Tag
export const todoTagClient = todo_tagApi(
  aspida(
    axios.create({
      responseType: "json",
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
      baseURL: baseURL,
    })
  )
);

// Profile
export const profileClient = profileApi(
  aspida(
    axios.create({
      responseType: "json",
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
      baseURL: baseURL,
    })
  )
);
