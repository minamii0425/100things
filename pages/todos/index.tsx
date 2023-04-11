import {
    Center,
    Grid,
    GridItem,
    Heading,
    Highlight,
    Stack,
    Tag as ChakraTag,
    useBreakpoint,
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { useContext, useEffect, useState } from "react";
import { Tag, TagName, Todo, Todo_Tag, TodoID } from "../../aspida_api/@types";
import Header from "../../components/Header";
import TodoCard from "../../components/TodoCard";
import { supabase } from "../../libs/supabase";
import { makeSerializable } from "../../utils/util";
import prisma from "../../libs/prisma";
import { SessionContext } from "../_app";

export const getServerSideProps: GetServerSideProps = async () => {
    // Todosテーブルより
    const TodoResponse = await prisma.todos.findMany({});
    const convertedTodoResponse = TodoResponse.map((result: any) => {
        return {
            TodoID: result.id,
            TodoName: result.todo_name,
            Location: result.location,
            Status: result.status,
            CompleteDate: makeSerializable(result.complete_date),
            Description: result.description,
        };
    });

    // Todos-Tagsテーブルより
    const IntermediateTableResponse = await prisma.todos_Tags.findMany({});
    const convertedIntermediateTableResponse = IntermediateTableResponse.map(
        (result: any) => {
            return {
                TagID: result.tag_id, //これと
                TodoID: result.todo_id,
            };
        }
    );

    // Tagsテーブルより
    const TagResponse = await prisma.tags.findMany({});
    const convertedTagResponse = TagResponse.map((result: any) => {
        return {
            TagID: result.id, // これを比べたい
            TagName: result.tag_name,
        };
    });

    // Allを追加
    convertedTagResponse.push({ TagID: "ZZ", TagName: "All" });
    console.log(convertedTagResponse);

    // カードの画像を取得
    const { data, error } = await supabase.storage.from("coverimages").list();

    // const convertedData = data?.map(() => {
    //   return { data: data, error: error };
    // });

    const profile = await prisma.profiles.findMany({});
    const profile2 = profile.map((result: any) => {
        return {
            ID: result.id,
            updated_at: makeSerializable(result.updated_at),
            username: result.username,
            full_name: result.full_name,
            avatar_url: result.avatar_url,
        };
    });

    return {
        props: {
            body: {
                convertedTodoResponse,
                convertedIntermediateTableResponse,
                convertedTagResponse,
                data,
                profile2,
            },
        },
    };
};

const Todos = ({ body }: any) => {
    // セッションの取得
    const session = useContext(SessionContext);

    // ログインユーザーの取得
    const [loginUser, setLoginUser] = useState("");
    const [avatarURL, setAvatarURL] = useState("");
    const getLoginUser = async () => {
        const { data, error } = await supabase.auth.getSession();
        const loginUser = body.profile2.filter(
            (row: any) => row.ID === data.session?.user.id
        );
        setLoginUser(loginUser[0].username);

        const avatarURL = body.profile2.filter(
            (row: any) => row.ID === data.session?.user.id
        )[0].avatar_url;

        setAvatarURL(avatarURL);
    };

    // 初回読み込み時にログインユーザーをセット
    useEffect(() => {
        if (session) {
            getLoginUser();
        }
    }, [session]);

    const IntermediateTableArray = body.convertedIntermediateTableResponse;
    const TagArray = body.convertedTagResponse;
    const data = body.data;

    const ImageURLArray = data.map((data: any) => {
        return data.name;
    });

    // TodoIDごとにタグを配列に
    const WithTagNameArray = IntermediateTableArray.map(
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

    // TodoIDでタグを検索
    const SearchTag = (todoID: number) => {
        return WithTagNameArray.filter(
            (object: any) => todoID === object.TodoID
        ).map((row: any) => {
            return row.TagName;
        });
    };

    // TodoIDで画像のURLを検索
    const SearchImageURL = (todoID: number) => {
        const url = ImageURLArray.filter(
            (object: string) => object === `${todoID}.jpg`
        );

        if (url.length !== 0) {
            return (
                process.env.NEXT_PUBLIC_SUPABASE_URL +
                "/storage/v1/object/public/coverimages/" +
                url
            );
        } else {
            return (
                process.env.NEXT_PUBLIC_SUPABASE_URL +
                "/storage/v1/object/public/coverimages/404.png"
            );
        }
    };

    const [TodoArray, setTodoArray] = useState(body.convertedTodoResponse);

    // クリックしたタグを持つTodoを抽出する関数
    const SearchTodoByTagName = (tagName: TagName) => {
        // Allの場合はすべて
        if (tagName === "All") {
            setTodoArray(body.convertedTodoResponse);
            console.log("All");
        } else {
            // タグ名からタグIDを検索
            const TagID = body.convertedTagResponse.find(
                (tag: Tag) => tag.TagName === tagName
            ).TagID;

            // そのタグIDを持つTodoIDを抽出
            const FilteredTodoID = body.convertedIntermediateTableResponse
                .filter((Todo: Todo_Tag) => Todo.TagID === TagID)
                .map((row: Todo_Tag) => row.TodoID);

            // TodoIDでTodoを抽出
            const FilteredTodo = FilteredTodoID.map((TodoID: TodoID) =>
                body.convertedTodoResponse.filter(
                    (row: Todo) => row.TodoID === TodoID
                )
            ).flat();

            setTodoArray(FilteredTodo);
        }
    };

    const breakpoint = useBreakpoint();

    return (
        <>
            <Header loginUser={loginUser} avatarURL={avatarURL} />
            <Center mt={[4, 6, 12, 16, 20]} mb={[10, 10, 10, 10, 10]}>
                <Stack mb={[1, 2, 3, 4, 5]}>
                    <Heading size={["sm", "md", "lg", "xl", "2xl"]}>
                        <Highlight
                            query={"100 Things"}
                            styles={{
                                px: "2",
                                py: "1",
                                rounded: "full",
                                bg: "red.100",
                            }}
                        >
                            100 Things What To Do With You !
                        </Highlight>
                    </Heading>

                    {/* <FormControl>
              <HStack>
                <Input
                  placeholder="What do we do?"
                  width={500}
                  onChange={(e) => setInputTodo(e.target.value)}
                  value={inputTodo}
                />
                <Button onClick={onClickSubmit}>Submit</Button>
              </HStack>
            </FormControl> */}
                </Stack>
            </Center>

            <Center mb={10}>
                {breakpoint === "base" || breakpoint === "sm" ? (
                    <Grid
                        templateColumns={[
                            "repeat(2, 1fr)", // md
                            "repeat(2, 1fr)", // sm
                        ]}
                        gap={[1, 3, 10, 10, 6]}
                        marginX={[1, 8, 10, 10, 10]}
                        mb={1}
                    >
                        {body.convertedTagResponse.map((tag: any) => {
                            return (
                                <GridItem key={tag.key}>
                                    <ChakraTag
                                        onClick={() =>
                                            SearchTodoByTagName(tag.TagName)
                                        }
                                        mr={2}
                                    >
                                        {tag.TagName}
                                    </ChakraTag>
                                </GridItem>
                            );
                        })}
                    </Grid>
                ) : (
                    <>
                        {body.convertedTagResponse.map((tag: any) => {
                            return (
                                <GridItem key={tag.key}>
                                    <ChakraTag
                                        onClick={() =>
                                            SearchTodoByTagName(tag.TagName)
                                        }
                                        mr={2}
                                    >
                                        {tag.TagName}
                                    </ChakraTag>
                                </GridItem>
                            );
                        })}
                    </>
                )}
            </Center>
            <Center>
                <Grid
                    templateColumns={[
                        "repeat(1, 1fr)",
                        "repeat(2, 1fr)",
                        "repeat(2, 1fr)",
                        "repeat(3, 1fr)",
                        "repeat(4, 1fr)",
                    ]}
                    gap={[8, 3, 10, 10, 6]}
                    marginX={[8, 8, 10, 10, 10]}
                    mb={10}
                >
                    {TodoArray.length !== 0 ? (
                        TodoArray.sort((a: Todo, b: Todo) => {
                            return a.TodoID! < b.TodoID! ? -1 : 1;
                        }).map((todo: Todo) => {
                            return (
                                <GridItem key={todo.TodoID}>
                                    <TodoCard
                                        TodoName={`#${todo.TodoID} ${todo.TodoName}`}
                                        Location={todo.Location}
                                        Key={todo.TodoID}
                                        Tags={SearchTag(todo.TodoID!)}
                                        CardImage={SearchImageURL(todo.TodoID!)}
                                        Status={todo.Status!}
                                    />
                                </GridItem>
                            );
                        })
                    ) : (
                        <div>No Data</div>
                    )}
                </Grid>
            </Center>
        </>
    );
};

export default Todos;
