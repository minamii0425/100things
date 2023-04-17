import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { getSession } from "next-auth/react";
import prisma from "../../../libs/prisma";
import { supabase } from "../../../libs/supabase";
import { authOptions } from "../auth/[...nextauth]";

const TagHandlerWithID = async (req: NextApiRequest, res: NextApiResponse) => {
    // 認証のない場合は401エラー
    const session = await getServerSession(req, res, authOptions);
    console.log(session);
    if (!session) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    // GET：指定したIDを持つタグを取得
    if (req.method === "GET") {
        const TagID = req.query.id;
        console.log(`TodoID：${TagID}`);

        const result = await prisma.tags.findUnique({
            where: {
                id: Number(TagID),
            },
        });

        const convertedResult = {
            TagID: result?.id,
            TagName: result?.tag_name,
        };

        res.json(convertedResult);
    }

    // Delete：指定したIDを持つTodoを削除
    else if (req.method === "DELETE") {
        const TagID = req.query.id;

        const result = await prisma.tags.delete({
            where: {
                id: Number(TagID),
            },
        });

        console.log(result);
    }

    // PUT：指定したIDを持つTodoを更新
    else if (req.method === "PUT") {
        const TagID = req.query.id;

        const { TagName } = req.body;

        const result = await prisma.tags.update({
            where: {
                id: Number(TagID),
            },
            data: {
                tag_name: TagName,
            },
        });
        res.json(result);
    }
};

export default TagHandlerWithID;
