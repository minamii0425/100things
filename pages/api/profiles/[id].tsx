import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../libs/prisma";

const ProfilesHandlerWithID = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  // GET：指定したIDを持つProfileを取得
  if (req.method === "GET") {
    const UserID = req.query.id;
    console.log(`UserID: ${UserID}`);

    const result = await prisma.profiles.findUnique({
      where: {
        id: String(UserID),
      },
    });

    const convertedResult = {
      ID: result?.id,
      UpdatedAt: result?.updated_at,
      UserName: result?.username,
      FullName: result?.full_name,
      AvatarURL: result?.avatar_url,
      WebSite: result?.website,
    };

    res.json(convertedResult);
  }

  // Delete：指定したIDを持つコメントを削除
  else if (req.method === "DELETE") {
    const CommentID = req.query.id;

    const result = await prisma.comments.delete({
      where: {
        id: Number(CommentID),
      },
    });

    res.json(result);

    console.log(result);
  }

  // PUT：指定したIDを持つコメントを更新
  else if (req.method === "PUT") {
    const CommentID = req.query.id;

    const { UpdatedAt, UserName, FullName, AvatarURL, WebSite } = req.body;

    const result = await prisma.profiles.update({
      where: {
        id: String(CommentID),
      },
      data: {
        updated_at: UpdatedAt,
        username: UserName,
        full_name: FullName,
        avatar_url: AvatarURL,
        website: WebSite,
      },
    });
    res.json(result);
  }
};

export default ProfilesHandlerWithID;
