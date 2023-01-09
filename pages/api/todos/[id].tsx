import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../libs/prisma";

const TodosHandlerWithID = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  // GET：指定したIDを持つTodoを取得
  if (req.method === "GET") {
    const TodoID = req.query.id;
    console.log(`TodoID：${TodoID}`);

    const result = await prisma.todos.findUnique({
      where: {
        id: Number(TodoID),
      },
    });

    const convertedResult = {
      TodoID: result?.id,
      TodoName: result?.todo_name,
      CompleteDate: result?.complete_date,
      Location: result?.location,
      Status: result?.status,
      Description: result?.description,
    };

    res.json(convertedResult);
  }

  // Delete：指定したIDを持つTodoを削除
  else if (req.method === "DELETE") {
    const TodoID = req.query.id;

    const result = await prisma.todos.delete({
      where: {
        id: Number(TodoID),
      },
    });

    console.log(result);
  }

  // PUT：指定したIDを持つTodoを更新
  else if (req.method === "PUT") {
    const TodoID = req.query.id;

    const { TodoName, CompleteDate, Location, Status, Description } = req.body;

    console.log(`CompleteDate: ${CompleteDate}`);
    console.log(`TodoName: ${TodoName}`);
    console.log(`Location: ${Location}`);
    console.log(`Status: ${Status}`);
    console.log(`Description: ${Description}`);

    const convertedCompleteDate = new Date(CompleteDate);
    console.log(`convertedCompleteDate: ${convertedCompleteDate}`);

    const result = await prisma.todos.update({
      where: {
        id: Number(TodoID),
      },
      data: {
        todo_name: TodoName && TodoName,
        complete_date: new Date(CompleteDate),
        location: Location,
        status: Status,
        description: Description,
      },
    });
    res.json(result);
  }
};

export default TodosHandlerWithID;
