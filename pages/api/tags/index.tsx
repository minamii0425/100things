import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import prisma from "../../../libs/prisma";
import { supabase } from "../../../libs/supabase";
import { SessionContext } from "../../_app";
import { authOptions } from "../../../pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

// /tags
const TagHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    // // 認証のない場合は401エラー
    const session = await getServerSession(req, res, authOptions);
    console.log(session);
    if (!session) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    // GET：全タグの取得
    if (req.method === "GET") {
        console.log("ゲット");

        const results = await prisma.tags.findMany({});

        const convertedResult = results.map((result: any) => {
            return {
                TagID: result.id,
                TagName: result.tag_name,
            };
        });
        res.json(convertedResult);

        // POST：新規タグの登録
    } else if (req.method === "POST") {
        console.log("ポスト");

        const { TagName } = req.body;

        const result = await prisma.tags.create({
            data: {
                tag_name: TagName,
            },
        });
        res.json(result.id);

        // DELETE：タグの全件削除
    } else if (req.method === "DELETE") {
        console.log("デリート");

        const deleteTagIDs = req.body;

        const result = await prisma.tags.deleteMany({
            where: {
                id: {
                    in: deleteTagIDs,
                },
            },
        });

        res.json(result);
    }
};

export default TagHandler;
