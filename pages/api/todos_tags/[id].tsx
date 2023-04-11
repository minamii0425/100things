import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../libs/prisma";
import { supabase } from "../../../libs/supabase";

const Todos_TagsHandlerWithID = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    // 認証のない場合は401エラー
    // const { data, error } = await supabase.auth.getSession();
    // if (!data.session) {
    //     return res.status(401).json({ error: "Unauthorized" });
    // }

    // GET：指定したIDを持つTodo-タグを取得
    if (req.method === "GET") {
        const Todo_TagID = req.query.id;
        console.log(`Todos_タグID：${Todo_TagID}`);

        const results = await prisma.todos_Tags.findMany({
            where: {
                todo_id: Number(Todo_TagID),
            },
        });

        const convertedResult = results.map((result) => {
            return {
                Todos_CommentID: result.id,
                TodoID: result.todo_id,
                TagID: result.tag_id,
            };
        });

        res.json(convertedResult);
    }

    // Delete：指定したIDを持つTodo-タグを削除
    else if (req.method === "DELETE") {
        const Todo_TagID = req.query.id;
        console.log(Todo_TagID);
        console.log("デリート");

        const result = await prisma.todos_Tags.deleteMany({
            where: {
                // todo_id: Number(Todo_TagID),
                id: Number(Todo_TagID),
            },
        });

        console.log(result);
    }

    // PUT：指定したIDを持つTodo-タグを更新
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

export default Todos_TagsHandlerWithID;
