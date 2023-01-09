import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../libs/prisma";

const Todos_CommentsHandlerWithID = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  // GET：指定したIDを持つTodo-コメントを取得
  if (req.method === "GET") {
    const Todo_CommentID = req.query.id;
    console.log(`Todos_コメントID：${Todo_CommentID}`);

    const results = await prisma.todos_Comments.findMany({
      where: {
        todo_id: Number(Todo_CommentID),
      },
    });

    const convertedResult = results.map((result) => {
      return {
        Todos_CommentID: result.id,
        TodoID: result.todo_id,
        CommentID: result.comment_id,
      };
    });

    res.json(convertedResult);
  }

  // Delete：指定したIDを持つTodo-コメントを削除
  else if (req.method === "DELETE") {
    const Todo_CommentID = req.query.id;

    const result = await prisma.todos_Comments.deleteMany({
      where: {
        todo_id: Number(Todo_CommentID),
      },
    });

    console.log(result);
  }

  // PUT：指定したIDを持つTodo-コメントを更新
  // else if (req.method === "PUT") {
  //   const Todo_CommentID = req.query.id;

  //   const { TodoName, CompleteDate, Location, Status, Description } = req.body;

  //   const result = await prisma.todos.update({
  //     where: {
  //       id: Number(Todo_CommentID),
  //     },
  //     data: {
  //       todo_name: TodoName,
  //       complete_date: CompleteDate,
  //       location: Location,
  //       status: Status,
  //       description: Description,
  //     },
  //   });
  //   res.json(result);
  // }
};

export default Todos_CommentsHandlerWithID;
