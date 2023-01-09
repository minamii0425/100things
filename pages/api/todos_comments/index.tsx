import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../libs/prisma";

// /todos
const Todo_CommentHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  // GET：全Todo-コメントの取得
  if (req.method === "GET") {
    console.log("ゲット");

    const results = await prisma.todos_Comments.findMany({});

    const convertedResult = results.map((result: any) => {
      return {
        Todo_CommentID: result.id,
        TodoID: result.todo_id,
        CommentID: result.comment_id,
      };
    });
    res.json(convertedResult);

    // POST：新規Todo-コメントの登録
  } else if (req.method === "POST") {
    console.log("ポスト");

    const { TodoID, CommentID } = req.body;

    const result = await prisma.todos_Comments.create({
      data: {
        todo_id: TodoID,
        comment_id: CommentID,
      },
    });
    res.json(result);

    // DELETE：Todo-コメントの全件削除
  } else if (req.method === "DELETE") {
    console.log("デリート");

    const deleteTodo_CommentIDs = req.body;

    const result = await prisma.todos_Comments.deleteMany({
      where: {
        id: {
          in: deleteTodo_CommentIDs,
        },
      },
    });

    res.json(result);
  }
};

export default Todo_CommentHandler;
