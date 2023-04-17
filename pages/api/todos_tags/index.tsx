import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { getSession } from "next-auth/react";
import prisma from "../../../libs/prisma";
import { supabase } from "../../../libs/supabase";
import { APIAuthorization } from "../../../utils/util";
import { authOptions } from "../auth/[...nextauth]";

// /todos
const Todo_TagHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    // 認証
    const session = await getServerSession(req, res, authOptions);
    console.log(session);
    if (!session) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    // GET：全Todo-タグの取得
    if (req.method === "GET") {
        console.log("ゲット！！");

        const results = await prisma.todos_Tags.findMany({});

        const convertedResult = results.map((result: any) => {
            return {
                Todo_TagID: result.id,
                TodoID: result.todo_id,
                TagID: result.tag_id,
            };
        });
        res.json(convertedResult);

        // POST：新規Todo-タグの登録
    } else if (req.method === "POST") {
        console.log("ポスト");

        const { TodoID, TagID } = req.body;

        const result = await prisma.todos_Tags.create({
            data: {
                todo_id: TodoID,
                tag_id: TagID,
            },
        });
        res.json(result);

        // DELETE：Todo-タグの全件削除
    } else if (req.method === "DELETE") {
        console.log("デリート");

        const deleteTodo_TagIDs = req.body;

        const result = await prisma.todos_Tags.deleteMany({
            where: {
                id: {
                    in: deleteTodo_TagIDs,
                },
            },
        });

        res.json(result);
    }
};

export default Todo_TagHandler;
