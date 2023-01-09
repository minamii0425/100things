import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../libs/prisma";

const CommentsHandlerWithID = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  // GET：指定したIDを持つコメントを取得
  if (req.method === "GET") {
    const CommentID = req.query.id;
    console.log(`CommentID：${CommentID}`);

    const result = await prisma.comments.findUnique({
      where: {
        id: Number(CommentID),
      },
    });

    const convertedResult = {
      CommentID: result?.id,
      CommentText: result?.comment_text,
      CommentAuthor: result?.comment_author,
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

    const { CommentText, CommentAuthor } = req.body;

    const result = await prisma.comments.update({
      where: {
        id: Number(CommentID),
      },
      data: {
        comment_author: CommentAuthor,
        comment_text: CommentText,
      },
    });
    res.json(result);
  }
};

export default CommentsHandlerWithID;
