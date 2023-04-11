import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { useContext } from "react";
import prisma from "../../../libs/prisma";
import { supabase } from "../../../libs/supabase";
// import { session } from "../../../utils/util";
import { SessionContext } from "../../_app";

// /comments
const ProfilesHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    // 直接アクセス時はルートディレクトリにリダイレクト
    // const { data, error } = await supabase.auth.getSession();
    // if (!data.session) {
    //     return res.status(401).json({ error: "Unauthorized" });
    // }

    // GET：全Commentの取得
    if (req.method === "GET") {
        console.log("API");
        // console.log(session);
        // if (!loginUserID) {
        //     res.redirect("/");
        // }
        // console.log("ゲット");

        const results = await prisma.profiles.findMany({});

        const convertedResult = results.map((result: any) => {
            return {
                ProfileID: result.id,
                UpdatedAt: result.updated_at,
                UserName: result.username,
                FullName: result.full_name,
                AvatarURL: result.avatar_url,
                WebSite: result.website,
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

export default ProfilesHandler;
