import {
  Box,
  Heading,
  Stack,
  Image,
  Text,
  HStack,
  Avatar,
  Textarea,
  Button,
  Input,
  Select,
  Tag as ChakraTag,
  Wrap,
  WrapItem,
  Flex,
  Spacer,
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
  ButtonGroup,
  ButtonSpinner,
  FormControl,
  useRadioGroup,
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { supabase } from "../../libs/supabase";
import { useRouter } from "next/router";
import { makeSerializable } from "../../utils/util";
import {
  Todo_Tag,
  Tag,
  Status,
  TagName,
  Todo_Comment,
  Comment,
  Profile,
} from "../../aspida_api/@types";
import prisma from "../../libs/prisma";
import Layout from "../../components/Layout";
import Carousel from "../../components/Carousel";
import { use, useContext, useEffect, useState } from "react";
import {
  commentClient,
  todoClient,
  todoCommentClient,
} from "../../utils/axiosInstancesServerside";
import { tagClient } from "../../utils/axiosInstancesServerside";
import { todoTagClient } from "../../utils/axiosInstancesServerside";
import { SessionContext } from "../_app";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  // 変数
  const ID = Number(query.id);

  // パブリックなBucketから画像の取得
  const {
    data: { publicUrl },
  } = supabase.storage.from("images").getPublicUrl(`${ID}.jpg`);

  // Todosテーブルより
  const TodoResponse = await prisma.todos.findUniqueOrThrow({
    where: {
      id: ID,
    },
  });

  const convertedTodoResponse = {
    TodoID: TodoResponse.id,
    TodoName: TodoResponse.todo_name,
    Location: TodoResponse.location,
    Status: TodoResponse.status,
    CompleteDate: makeSerializable(TodoResponse.complete_date),
    Description: TodoResponse.description,
  };

  // Todos-Tagsテーブルより
  const IntermediateTableResponse = await prisma.todos_Tags.findMany({
    where: {
      todo_id: ID,
    },
  });

  const convertedIntermediateTableResponse = IntermediateTableResponse.map(
    (result: any) => {
      return {
        TagID: result.tag_id,
        TodoID: result.todo_id,
      };
    }
  );

  // Tagsテーブルより
  const TagResponse = await prisma.tags.findMany({});
  const convertedTagResponse = TagResponse.map((result: any) => {
    return {
      TagID: result.id,
      TagName: result.tag_name,
    };
  });

  // Commentテーブルより
  const CommentResponse = await prisma.comments.findMany({});
  const convertedCommentResponse = CommentResponse.map((result: any) => {
    return {
      CommentID: result.id,
      CommentText: result.comment_text,
      CommentAuthor: result.comment_author,
      CommentAvatar: result.comment_avatar,
    };
  });

  // Todos-Commentテーブルより
  const IntermediateCommentTableResponse = await prisma.todos_Comments.findMany(
    {
      where: {
        todo_id: ID,
      },
    }
  );

  const convertedIntermediateCommentTableResponse =
    IntermediateCommentTableResponse.map((result: any) => {
      return {
        CommentID: result.comment_id,
        TodoID: result.todo_id,
      };
    });

  // ユーザー情報の取得
  const user = await prisma.profiles.findMany({});

  const convertedUser = user.map((result) => {
    return {
      ProfileID: result.id,
      UpdatedAt: makeSerializable(result.updated_at),
      UserName: result.username,
      FullName: result.full_name,
      AvatarURL: result.avatar_url,
      WebSite: result.website,
    };
  });

  // 画像の取得
  const { data, error } = await supabase.storage
    .from("images")
    .list(String(ID));

  return {
    props: {
      body: {
        convertedTodoResponse,
        convertedIntermediateTableResponse,
        convertedTagResponse,
        convertedCommentResponse,
        convertedIntermediateCommentTableResponse,
        publicUrl,
        convertedUser,
        ImageURLs: data,
      },
    },
  };
};

const TodoDetailForm = ({ body }: any) => {
  // console.log(process.env.NEXT_PUBLIC_NODE_ENV);
  // console.log(process.env.NODE_ENV);

  const router = useRouter();
  const id = Number(router.query.id);

  const LoginUserID = useContext(SessionContext);

  const Users = body.convertedUser;

  const user = Users.filter((row: Profile) => row.ProfileID === LoginUserID)[0];

  const session = useContext(SessionContext);

  const IMAGE_URL_DOMAIN =
    process.env.NEXT_PUBLIC_SUPABASE_URL + "/storage/v1/object/public/images";

  const CarouselCards = body.ImageURLs?.map((image: any) => {
    return {
      title: "",
      text: "",
      image: IMAGE_URL_DOMAIN + `/${id}/${image.name}`,
    };
  });

  // Todoテーブル
  const TodoArray = body.convertedTodoResponse;

  // Tagsテーブル
  const TagArray = body.convertedTagResponse;

  // Commentテーブル
  const CommentArray = body.convertedCommentResponse;

  // 中間テーブル(Todo-コメント)
  const TodoCommentArray = body.convertedIntermediateCommentTableResponse;

  // 中間テーブル(Todo-タグ)
  const TodoTagArray = body.convertedIntermediateTableResponse;

  // このTodoIDが持っているタグIDとタグ名の配列
  const WithTagNameArray = TodoTagArray.map(
    (intermediateTableObject: Todo_Tag & Tag) => {
      TagArray.map((tagArrayObject: Tag) => {
        // IntermediateTableArrayのTagIDとTagArrayのTagIDを比較する
        if (intermediateTableObject.TagID === tagArrayObject.TagID) {
          //一致すればそのIDを持つTagNameを配列の要素に追加する
          intermediateTableObject.TagName = tagArrayObject.TagName;
        }
      });
      return intermediateTableObject;
    }
  );

  // このTodoIDが持っているタグIDとコメントの配列
  const WithCommentTextArray = TodoCommentArray.map(
    (intermediateCommentTableObject: Todo_Comment & Comment) => {
      CommentArray.map((commentArrayObject: Comment) => {
        // IntermediateTableArrayのTagIDとTagArrayのTagIDを比較する
        if (
          intermediateCommentTableObject.CommentID ===
          commentArrayObject.CommentID
        ) {
          //一致すればそのIDを持つCommentTextを配列の要素に追加する
          intermediateCommentTableObject.CommentText =
            commentArrayObject.CommentText;
          //一致すればそのIDを持つCommentAuthorを配列の要素に追加する
          intermediateCommentTableObject.CommentAuthor =
            commentArrayObject.CommentAuthor;
          //一致すればそのIDを持つCommentAvatarを配列の要素に追加する
          intermediateCommentTableObject.CommentAvatar =
            commentArrayObject.CommentAvatar;
        }
      });
      return intermediateCommentTableObject;
    }
  );

  // 日付のフォーマット変更

  const Date = TodoArray.CompleteDate && TodoArray.CompleteDate;
  const convertedCompleteDate = Date && Date.substr(0, 10);

  // あるIDのタグ名のみ抜き出す
  const SearchTag = (todoID: number, data: Array<Tag>) => {
    return data
      .filter((object: any) => todoID === object.TodoID)
      .map((row: any) => {
        return row.TagName;
      });
  };

  // あるIDのコメントのみ抜き出す
  const SearchComment = (todoID: number, data: Array<Comment>) => {
    const filteredData = data.filter((object: any) => todoID === object.TodoID);
    const mappedData = filteredData.map((row: any) => ({
      CommentAuthor: row.CommentAuthor,
      CommentText: row.CommentText,
      CommentAvatar: row.CommentAvatar,
    }));
    return mappedData;
  };

  // Description--------------------------------------------------------
  const [inputDescription, setInputDescription] = useState(
    TodoArray.Description
  );

  const onSubmitDescription = async (inputData: string) => {
    // エラーハンドリング
    // 値の変更なしの場合
    if (inputData === TodoArray.Description) {
      return;
    }

    // 入力値が空欄の場合
    if (inputData === "") {
      setInputDescription(TodoArray.Description);
      return;
    }

    await todoClient._id(id).$put({
      body: { Description: inputData, CompleteDate: inputCompleteDate },
      query: {
        TodoID: id,
      },
    });
  };

  // タグ--------------------------------------------------------
  const [inputTag, setInputTag] = useState("＋");

  const [TagFromServer, setTagFromServer] = useState(
    SearchTag(id, WithTagNameArray)
  );

  const onClickTag = async (tag: TagName) => {
    const tagInThisPage = await tagClient.$get({});

    const All = await todoTagClient.$get({});

    // クリックされたタグ名のID
    const clickedTagID = tagInThisPage
      .filter((row) => row.TagName === tag)
      .map((row) => row.TagID);

    // クリックされたタグ名を持つ
    const clickedTodoTagID = All.filter(
      (row) => row.TagID === clickedTagID[0] && row.TodoID === id
    ).map((row) => row.Todo_TagID);

    setTagFromServer(TagFromServer.filter((tagName) => tagName !== tag));

    // クリックされたタグ名のIDを持つ要素を削除
    await todoTagClient
      ._id(clickedTodoTagID[0]!)
      .$delete({ query: { Todo_TagID: clickedTodoTagID[0]! } });
  };

  const onSubmitTag = async (inputData: TagName) => {
    // エラーハンドリング
    // 値の変更なしの場合
    if (inputTag === "＋") {
      return;
    }

    // 入力値が空欄の場合
    if (inputTag === "") {
      setInputTag("＋");
      return;
    }

    // そのTodoが入力された値をすでにタグとして持っている場合
    if (TagFromServer.indexOf(inputData) >= 0) {
      return;
    }

    // 入力されたタグがサーバーにあるか確認
    // Todoが持っているタグをサーバーから取得
    const newTags = (await tagClient.$get()).map((tag) => {
      return tag.TagName;
    });

    // 入力されたタグがTodoになければTagテーブルに送信
    if (!newTags.includes(inputData)) {
      const submit = await tagClient.$post({
        body: { TagName: inputData },
      });

      // Todoと中間テーブルに送信
      await todoTagClient.$post({
        body: {
          TodoID: id,
          TagID: Number(submit),
        },
      });

      // 入力されたタグがすでにTodoにある場合
    } else {
      // 入力したタグのタグIDを取得
      const TagID = TagArray.filter(
        (item: Tag) => item.TagName === inputData
      )[0].TagID;

      // Todoと中間テーブルに送信
      await todoTagClient.$post({
        body: {
          TodoID: id,
          TagID: TagID,
        },
      });
    }

    // 投稿後、タグの再レンダリング
    setTagFromServer([...TagFromServer, inputData]);

    // 送信後、＋に戻す
    setInputTag("＋");
  };

  // Complete Date--------------------------------------------------------
  const [inputCompleteDate, setInputCompleteDate] = useState(
    convertedCompleteDate
  );

  const onSubmitCompleteDate = async (inputData: string) => {
    // エラーハンドリング
    // 値の変更なしの場合
    if (inputData === convertedCompleteDate) {
      return;
    }

    // 入力値が空欄の場合
    if (inputData === "") {
      setInputCompleteDate(convertedCompleteDate);
      return;
    }

    await todoClient._id(id).$put({
      body: { CompleteDate: inputData },
      query: {
        TodoID: id,
      },
    });
  };

  // Location--------------------------------------------------------

  const [inputLocation, setInputLocation] = useState(TodoArray.Location);

  const onSubmitLocation = async (inputData: string) => {
    // エラーハンドリング
    // 値の変更なしの場合
    if (inputData === TodoArray.Location) {
      return;
    }

    // 入力値が空欄の場合
    if (inputLocation === "") {
      setInputLocation(TodoArray.Location);
      return;
    }

    await todoClient._id(id).$put({
      body: { Location: inputData, CompleteDate: inputCompleteDate },
      query: {
        TodoID: id,
      },
    });
  };

  // Status--------------------------------------------------------
  const [inputStatus, setInputStatus] = useState(TodoArray.Status);
  const onSubmitStatus = async (string: Status) => {
    await todoClient._id(id).$put({
      body: { Status: string, CompleteDate: inputCompleteDate },
      query: {
        TodoID: id,
      },
    });
  };

  // Comments--------------------------------------------------------
  const [inputComment, setInputComment] = useState("");

  const [CommentFromServer, setCommentFromServer] = useState(
    SearchComment(id, WithCommentTextArray)
  );

  const onSubmitComment = async (inputData: TagName) => {
    // エラーハンドリング

    // 入力値が空欄の場合
    if (inputComment === "") {
      return;
    }

    // 入力されたタグがTodoになければTagテーブルに送信
    const submit = await commentClient.$post({
      body: {
        CommentText: inputData,
        CommentAuthor: user.FullName,
        CommentAvatar: user.AvatarURL,
      },
    });

    // Todoと中間テーブルに送信
    await todoCommentClient.$post({
      body: {
        TodoID: id,
        CommentID: Number(submit),
      },
    });

    // 投稿後、タグの再レンダリング
    setCommentFromServer([
      ...CommentFromServer,
      {
        CommentText: inputData,
        CommentAuthor: user.FullName,
        CommentAvatar: user.AvatarURL,
      },
    ]);

    // 送信後、入力フォームを空に戻す
    setInputComment("");
  };

  // enter押下時のsubmitを防止
  const onEnterDown = (e: any) => {
    if (e.code === "Enter") e.preventDefault();
  };

  return (
    <>
      <Layout>
        <Stack padding={10}>
          <Box mb="1">
            <Flex>
              <Heading size="lg" mb="5">
                {/* {SearchObject(id, "TodoName")} */}
                {TodoArray.TodoName}
              </Heading>
              <Spacer />
              <Button onClick={() => router.push("/todos")} variant="ghost">
                ←Back
              </Button>
            </Flex>
            <Box mb="3">
              {/* <Image
                src={body.publicUrl}
                alt="Dan Abramov"
                width="100%"
                height="300px"
                objectFit="cover"
              /> */}
              <Carousel cards={CarouselCards} />
            </Box>
            <Editable
              value={inputDescription}
              onSubmit={() => onSubmitDescription(inputDescription)}
              placeholder={
                session === undefined ? "ログインして編集" : "クリックで編集"
              }
              isDisabled={session === undefined ? true : false}
            >
              <EditablePreview />
              <EditableTextarea
                onChange={(e) => setInputDescription(e.target.value)}
              />
            </Editable>
          </Box>

          {/* タグ */}
          <Box>
            <Box mb="4">
              <Box mb="2">
                <Text size="xl" as="b">
                  Tags
                </Text>
              </Box>
              <HStack>
                {TagFromServer.map((tag: TagName) => {
                  return (
                    <ChakraTag key={tag} onClick={() => onClickTag(tag)}>
                      {tag}
                    </ChakraTag>
                  );
                })}
                {session !== undefined ? (
                  <Editable
                    value={inputTag}
                    onSubmit={() => onSubmitTag(inputTag)}
                    isDisabled={session === undefined ? true : false}
                    onClick={() => setInputTag("")}
                  >
                    <EditablePreview />
                    <EditableInput
                      onChange={(e) => setInputTag(e.target.value)}
                      onKeyDown={(e) => onEnterDown(e)}
                    />
                  </Editable>
                ) : (
                  <Box>ログインして編集</Box>
                )}
              </HStack>
            </Box>
          </Box>

          {/* Complete Date・Location・Status */}
          <Box>
            <Box mb="4">
              <Wrap>
                <WrapItem w="200px">
                  <Box>
                    <Box mb="2">
                      <Text size="xl" as="b">
                        Complete Date
                      </Text>
                    </Box>
                    <Editable
                      defaultValue={inputCompleteDate}
                      onSubmit={() => onSubmitCompleteDate(inputCompleteDate)}
                      placeholder={
                        session === undefined
                          ? "ログインして編集"
                          : "クリックで編集"
                      }
                      isDisabled={session === undefined ? true : false}
                    >
                      <EditablePreview />
                      <EditableInput
                        type="date"
                        onChange={(e) => setInputCompleteDate(e.target.value)}
                      />
                    </Editable>
                  </Box>
                </WrapItem>

                <WrapItem w="200px">
                  <Box>
                    <Box mb="2">
                      <Text size="xl" as="b">
                        Location
                      </Text>
                    </Box>
                    <Editable
                      value={inputLocation}
                      onSubmit={() => onSubmitLocation(inputLocation)}
                      placeholder={
                        session === undefined
                          ? "ログインして編集"
                          : "クリックで編集"
                      }
                      isDisabled={session === undefined ? true : false}
                    >
                      <EditablePreview width="200" />
                      <EditableInput
                        width="200"
                        onChange={(e) => setInputLocation(e.target.value)}
                        onKeyDown={(e) => onEnterDown(e)}
                      />
                    </Editable>
                  </Box>
                </WrapItem>

                <WrapItem w="200px">
                  <Box>
                    <Box mb="2">
                      <Text size="xl" as="b">
                        Status
                      </Text>
                    </Box>
                    <Select
                      defaultValue={inputStatus}
                      onChange={(e) => onSubmitStatus(e.target.value as Status)}
                      disabled={session === undefined ? true : false}
                    >
                      <option value="Undone">Undone</option>
                      <option value="Planning">Planning</option>
                      <option value="Done">Done</option>
                    </Select>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>

          {/* Comments */}
          <Box>
            <Box mb="2">
              <Text size="xl" as="b">
                Comments
              </Text>
            </Box>

            {CommentFromServer.length !== 0 ? (
              CommentFromServer.map((comment: any, i: number) => {
                return (
                  <Box mb="5" key={i}>
                    <HStack>
                      <Avatar
                        name={comment.CommentAuthor}
                        src={comment.CommentAvatar}
                      />
                      <Text fontSize="sm">{comment.CommentText}</Text>
                    </HStack>
                  </Box>
                );
              })
            ) : (
              <Box mt={3} mb={5}>
                No Comments
              </Box>
            )}

            <FormControl>
              <Box mb="5">
                <HStack>
                  <Avatar
                    name={user ? user.FullName : ""}
                    src={user ? user.AvatarURL : ""}
                  />
                  <Textarea
                    height="100px"
                    fontSize="sm"
                    value={inputComment}
                    onChange={(e) => setInputComment(e.target.value)}
                    disabled={session === undefined ? true : false}
                    placeholder={
                      session === undefined ? "ログインしてコメント" : ""
                    }
                  />
                </HStack>
              </Box>

              <Flex>
                <Spacer />
                <Button
                  onClick={() => onSubmitComment(inputComment)}
                  disabled={session === undefined ? true : false}
                  colorScheme="purple"
                >
                  Submit Comment
                </Button>
              </Flex>
            </FormControl>
          </Box>
        </Stack>
      </Layout>
    </>
  );
};

export default TodoDetailForm;
