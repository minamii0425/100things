import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../libs/prisma";

// /comments
const ProfilesHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  // GET：全Commentの取得
  if (req.method === "GET") {
    console.log("ゲット");

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

    const { CommentAuthor, CommentText } = req.body;

    const result = await prisma.comments.create({
      data: {
        comment_author: CommentAuthor,
        comment_text: CommentText,
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
