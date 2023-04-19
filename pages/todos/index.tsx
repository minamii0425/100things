import {
    Center,
    Grid,
    GridItem,
    Heading,
    Highlight,
    HStack,
    Select,
    Stack,
    Tag as ChakraTag,
    useBreakpoint,
    Text,
    ModalFooter,
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
    Box,
    Link,
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
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import styles from "../page.module.scss";
import React from "react";

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

    const router = useRouter();

    if (session!) {
        router.push("/");
    }

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
    console.log(breakpoint);

    // プルダウン
    const ohChangeTodoIDPulldown = (e: number) => {
        if (!e) {
            setTodoArray(body.convertedTodoResponse);
        } else {
            setTodoArray(
                body.convertedTodoResponse.filter(
                    (row: Todo) =>
                        row.TodoID! >= e * 10 - 9 && row.TodoID! <= e * 10
                )
            );
        }
    };

    const ohChangeStatusPulldown = (e: string) => {
        if (!e) {
            setTodoArray(body.convertedTodoResponse);
        } else {
            setTodoArray(
                body.convertedTodoResponse.filter(
                    (row: Todo) => row.Status === e
                )
            );
        }
    };

    const [footerClassName, setFooterClassName] = useState(styles.Footer);
    const [toggleFooter, setToggleFooter] = useState(false);
    const [footerMenuLabel, setFooterMenuLabel] = useState("Open Menu");
    const onClickFooter = () => {
        setToggleFooter(!toggleFooter);
        // alert(toggleFooter);

        if (toggleFooter) {
            setFooterClassName(styles.Footer);
            setFooterMenuLabel("Open Menu");
        } else if (!toggleFooter) {
            setFooterClassName(styles.onClickFooter);
            setFooterMenuLabel("Close Menu");
        }
    };

    return (
        <Layout>
            <Box className={styles.container}>
                {/* タイトル */}
                <Center mt={[4, 6, 10, 10, 10]} mb={[10, 10, 10, 10, 10]}>
                    <Stack mb={[1, 2, 3, 4, 5]}>
                        <Heading
                            size={["sm", "md", "lg", "xl", "2xl"]}
                            className={styles.heading}
                            textAlign="center"
                        >
                            一緒に したいこと １００
                        </Heading>
                    </Stack>
                </Center>

                {/* カード */}
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
                                            CardImage={SearchImageURL(
                                                todo.TodoID!
                                            )}
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

                {/* メニュー */}
                <Center>
                    <Box
                        bg={"cyan.50"}
                        borderTopRadius={"xl"}
                        width={"80vw"}
                        className={footerClassName}
                    >
                        <Center paddingY={5} onClick={() => onClickFooter()}>
                            <Link as="b">{footerMenuLabel}</Link>
                        </Center>
                        {/* タグ */}
                        <Center mb={10} mt={4}>
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
                                    {body.convertedTagResponse.map(
                                        (tag: any) => {
                                            return (
                                                <GridItem key={tag.key}>
                                                    <ChakraTag
                                                        onClick={() =>
                                                            SearchTodoByTagName(
                                                                tag.TagName
                                                            )
                                                        }
                                                        mr={2}
                                                    >
                                                        {tag.TagName}
                                                    </ChakraTag>
                                                </GridItem>
                                            );
                                        }
                                    )}
                                </Grid>
                            ) : (
                                <>
                                    {body.convertedTagResponse.map(
                                        (tag: any) => {
                                            return (
                                                <GridItem key={tag.key}>
                                                    <ChakraTag
                                                        onClick={() =>
                                                            SearchTodoByTagName(
                                                                tag.TagName
                                                            )
                                                        }
                                                        mr={2}
                                                    >
                                                        {tag.TagName}
                                                    </ChakraTag>
                                                </GridItem>
                                            );
                                        }
                                    )}
                                </>
                            )}
                        </Center>
                        {/* プルダウン */}
                        <Center mb={"10"}>
                            {breakpoint === "base" ? (
                                <Stack>
                                    <Select
                                        width={"200"}
                                        placeholder="Select Todo No."
                                        bg={"white"}
                                        onChange={(e: any) =>
                                            ohChangeTodoIDPulldown(
                                                e.target.value
                                            )
                                        }
                                        mb={"2"}
                                    >
                                        <option value={1}>#1-#10</option>
                                        <option value={2}>#11-#20</option>
                                        <option value={3}>#21-#30</option>
                                        <option value={4}>#31-#40</option>
                                        <option value={5}>#41-#50</option>
                                        <option value={6}>#51-#60</option>
                                        <option value={7}>#61-#70</option>
                                        <option value={8}>#71-#80</option>
                                        <option value={9}>#81-#90</option>
                                        <option value={10}>#91-#100</option>
                                    </Select>
                                    <Select
                                        width={"200"}
                                        placeholder="Select Status"
                                        bg={"white"}
                                        onChange={(e: any) =>
                                            ohChangeStatusPulldown(
                                                e.target.value
                                            )
                                        }
                                    >
                                        <option value={"Undone"}>Undone</option>
                                        <option value={"Planning"}>
                                            Planning
                                        </option>
                                        <option value={"Done"}>Done</option>
                                    </Select>
                                </Stack>
                            ) : (
                                <HStack>
                                    <Select
                                        width={"200"}
                                        placeholder="Select Todo No."
                                        bg={"white"}
                                        onChange={(e: any) =>
                                            ohChangeTodoIDPulldown(
                                                e.target.value
                                            )
                                        }
                                        mr={["2", "2", "6", "10", "10"]}
                                    >
                                        <option value={1}>#1-#10</option>
                                        <option value={2}>#11-#20</option>
                                        <option value={3}>#21-#30</option>
                                        <option value={4}>#31-#40</option>
                                        <option value={5}>#41-#50</option>
                                        <option value={6}>#51-#60</option>
                                        <option value={7}>#61-#70</option>
                                        <option value={8}>#71-#80</option>
                                        <option value={9}>#81-#90</option>
                                        <option value={10}>#91-#100</option>
                                    </Select>
                                    <Select
                                        width={"200"}
                                        placeholder="Select Status"
                                        bg={"white"}
                                        onChange={(e: any) =>
                                            ohChangeStatusPulldown(
                                                e.target.value
                                            )
                                        }
                                    >
                                        <option value={"Undone"}>Undone</option>
                                        <option value={"Planning"}>
                                            Planning
                                        </option>
                                        <option value={"Done"}>Done</option>
                                    </Select>
                                </HStack>
                            )}
                        </Center>
                        <Center mb={14}>
                            <Link
                                onClick={() =>
                                    window.scrollTo({
                                        top: 0,
                                        behavior: "smooth",
                                    })
                                }
                                as="b"
                            >
                                ▲Page Top
                            </Link>
                        </Center>
                    </Box>
                </Center>
            </Box>
        </Layout>
    );
};

export default Todos;
