import {
  Box,
  Center,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { Todo } from "../aspida_api/@types";
import ImageUploader from "../components/ImageUploader";
import Layout from "../components/Layout";
import prisma from "../libs/prisma";
import { supabase } from "../libs/supabase";
import { makeSerializable } from "../utils/util";

export const getServerSideProps = async () => {
  // やりたいことリストから取得
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

  // 画像を取得
  //　フォルダを検索
  const { data, error } = await supabase.storage.from("images").list();
  // フォルダの配列
  const ImageFolderArray = data!
    .map((row: any) => row.name)
    .filter((row: any) => row !== ".emptyFolderPlaceholder");

  // 各フォルダ名で
  const Images = await Promise.all(
    ImageFolderArray.map(async (folder: string) => {
      const { data, error } = await supabase.storage
        .from("images")
        .list(folder);

      const convertedData = data
        ?.map((data) => `${folder}/${data.name}`)
        .filter((row: any) => row !== `${folder}/.emptyFolderPlaceholder`);

      return convertedData;
    })
  );

  return {
    props: { body: { convertedTodoResponse, Images } },
  };
};

const AlbumPage = ({ body }: any) => {
  const TodoArray = body.convertedTodoResponse;

  const TodoList = TodoArray.map((todo: Todo) => {
    return todo.TodoName;
  });

  console.log(body.Images.flat());
  const ImageURLs = body.Images.flat();

  return (
    <>
      <Layout>
        <Box m={10}>
          <ImageUploader TodoList={TodoList} />

          <Center>
            <Heading>Album</Heading>
          </Center>
          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
              "repeat(4, 1fr)",
              "repeat(5, 1fr)",
            ]}
            gap={[2, 2, 2, 2, 2]}
            m={[2, 2, 2, 2, 2]}
          >
            {ImageURLs.length !== 0 ? (
              ImageURLs.map((image: string) => {
                return (
                  <>
                    <GridItem>
                      <Image
                        src={
                          process.env.NEXT_PUBLIC_SUPABASE_URL! +
                          process.env.NEXT_PUBLIC_SUPABASE_SUBDOMAIN! +
                          process.env.NEXT_PUBLIC_SUPABASE_IMAGE_BUCKET +
                          `/${image}`
                        }
                        alt={""}
                        width={300}
                        height={300}
                        objectFit="cover"
                      />
                    </GridItem>
                  </>
                );
              })
            ) : (
              <>
                <Text>No Image</Text>
              </>
            )}
          </Grid>
        </Box>
      </Layout>
    </>
  );
};

export default AlbumPage;
