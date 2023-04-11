import { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../../libs/prisma";
import { supabase } from "../../../libs/supabase";

// /todos
const TodoHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    // 認証のない場合は401エラー
    // const { data, error } = await supabase.auth.getSession();
    // if (!data.session) {
    //     return res.status(401).json({ error: "Unauthorized" });
    // }

    // GET：全Todoの取得
    if (req.method === "GET") {
        console.log("ゲット");

        const results = await prisma.todos.findMany({});

        const convertedResult = results.map((result: any) => {
            return {
                TodoID: result.id,
                TodoName: result.todo_name,
                CompleteDate: result.complete_date,
                Location: result.location,
                Status: result.status,
                Description: result.description,
            };
        });
        res.json(convertedResult);

        // POST：新規Todoの登録
    } else if (req.method === "POST") {
        console.log("ポスト");

        const {
            TodoID,
            TodoName,
            CompleteDate,
            Location,
            Status,
            Description,
        } = req.body;

        const result = await prisma.todos.create({
            data: {
                id: TodoID,
                todo_name: TodoName,
                complete_date: new Date(CompleteDate),
                location: Location,
                status: Status,
                description: Description,
            },
        });
        res.json(result);

        // DELETE：Todoの全件削除
    } else if (req.method === "DELETE") {
        console.log("デリート");

        const deleteTodoIDs = req.body;

        const result = await prisma.todos.deleteMany({
            where: {
                id: {
                    in: deleteTodoIDs,
                },
            },
        });

        res.json(result);
    }
};

export default TodoHandler;
