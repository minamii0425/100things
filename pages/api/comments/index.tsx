import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { getSession } from "next-auth/react";
import prisma from "../../../libs/prisma";
import { supabase } from "../../../libs/supabase";
import { authOptions } from "../auth/[...nextauth]";

// /comments
const CommentsHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    // 認証のない場合は401エラー
    const session = await getServerSession(req, res, authOptions);
    console.log(session);
    if (!session) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    // GET：全Commentの取得
    if (req.method === "GET") {
        console.log("ゲット");

        const results = await prisma.comments.findMany({});

        const convertedResult = results.map((result: any) => {
            return {
                CommentID: result.id,
                CommentAuthor: result.comment_author,
                CommentText: result.comment_text,
            };
        });
        res.json(convertedResult);

        // POST：新規コメントの登録
    } else if (req.method === "POST") {
        console.log("ポスト");

        const { CommentAuthor, CommentText, CommentAvatar } = req.body;

        const result = await prisma.comments.create({
            data: {
                comment_author: CommentAuthor,
                comment_text: CommentText,
                comment_avatar: CommentAvatar,
            },
        });
        res.json(result.id);

        // DELETE：コメントの複数削除
    } else if (req.method === "DELETE") {
        console.log("デリート");

        const deleteCommentIDs = req.body;

        const result = await prisma.comments.deleteMany({
            where: {
                id: {
                    in: deleteCommentIDs,
                },
            },
        });

        res.json(result);
    }
};

export default CommentsHandler;
