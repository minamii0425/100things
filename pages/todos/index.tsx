import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import TodoCard from "../../components/TodoCard";
import styles from "../styles/Home.module.css";
import prisma from "../../libs/prisma";
import { makeSerializable } from "../../utils/util";
import { Context } from "../../types/context";
import { Tag, Todo, TodoID, Todo_Tag } from "../../aspida_api/@types";
import {
  Box,
  Center,
  Grid,
  GridItem,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Tag as ChakraTag,
  FormControl,
  FormLabel,
  Input,
  Button,
  Highlight,
} from "@chakra-ui/react";
import { supabase } from "../../libs/supabase";
import Layout from "../../components/Layout";
import { useEffect, useState } from "react";
import { todoClient } from "../../utils/axiosInstancesServerside";
import { useRouter } from "next/router";

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

  // カードの画像を取得
  const { data, error } = await supabase.storage.from("images").list();

  console.log(data);

  // const convertedData = data?.map(() => {
  //   return { data: data, error: error };
  // });

  return {
    props: {
      body: {
        convertedTodoResponse,
        convertedIntermediateTableResponse,
        convertedTagResponse,
        data,
      },
    },
  };
};

const Home = ({ body }) => {
  const TodoArray = body.convertedTodoResponse;

  TodoArray.sort((a, b) => a.id - b.id);
  console.log(TodoArray);

  const IntermediateTableArray = body.convertedIntermediateTableResponse;
  const TagArray = body.convertedTagResponse;
  const data = body.data;

  // const TodoIDArray = TodoArray.map((object) => {
  //   return object.TodoID;
  // });

  const ImageURLArray = data.map((data) => {
    return data.name;
  });

  console.log(ImageURLArray);

  const router = useRouter();

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
        "/storage/v1/object/public/images/" +
        url
      );
    } else {
      return (
        process.env.NEXT_PUBLIC_SUPABASE_URL +
        "/storage/v1/object/public/images/404.png"
      );
    }
  };
  //
  const [inputTodo, setInputTodo] = useState("");

  // Submitクリックで発火
  const onClickSubmit = async () => {
    await todoClient.$post({
      body: {
        TodoName: inputTodo,
        Description: "",
        Location: "",
        Status: "Undone",
        // CompleteDate: "1970-01-01",
      },
    });

    setInputTodo("");
    router.push("/todos");
  };

  return (
    <>
      <Layout>
        <Center mt={20} mb={20}>
          <Stack>
            <Heading mb={5}>
              <Highlight
                query={"100 Things"}
                styles={{ px: "2", py: "1", rounded: "full", bg: "red.100" }}
              >
                100 Things What To Do With You
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

        <Grid templateColumns="repeat(4, 1fr)" gap={4} m={10}>
          {TodoArray.map((todo: Todo) => {
            return (
              <GridItem key={todo.TodoID}>
                <TodoCard
                  TodoName={todo.TodoName}
                  Location={todo.Location}
                  Key={todo.TodoID}
                  Tags={SearchTag(todo.TodoID!)}
                  CardImage={SearchImageURL(todo.TodoID!)}
                />
              </GridItem>
            );
          })}
        </Grid>
      </Layout>
    </>
  );
};

export default Home;
