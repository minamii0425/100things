import {
  AspectRatio,
  Box,
  Button,
  Center,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Input,
  Select,
  Stack,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
  useBreakpoint,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  ChangeEventHandler,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";

import { Todo, TodoName } from "../aspida_api/@types";

import Layout from "../components/Layout";
import prisma from "../libs/prisma";
import { supabase } from "../libs/supabase";
import { makeSerializable } from "../utils/util";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

/**
 * FileImportコンポーネントに必要なパラメータ
 */
export type ImageUploaderProps = {
  /**
   * インポートしたファイルを処理する関数
   */
  onChangeFiles?: (formData: FormData) => void;
  /**
   * インポートするファイルの形式を指定する
   */
  accept?: string;
  /**
   *
   */
  TodoList: string[];
};

type UploadStorageArgs = {
  fileList: File[];
  bucketName: string;
};

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
  }).sort((a, b) => {
    return a < b ? -1 : 1;
  });

  // 画像を取得
  //　フォルダを検索
  const { data, error } = await supabase.storage
    .from(process.env.NEXT_PUBLIC_SUPABASE_IMAGE_BUCKET!)
    .list();

  // フォルダの配列
  const ImageFolderArray = data!
    .map((row: any) => row.name)
    .filter((row: any) => row !== ".emptyFolderPlaceholder");

  // 各フォルダ名で
  const Images = await Promise.all(
    ImageFolderArray.map(async (folder: string) => {
      const { data, error } = await supabase.storage
        .from(process.env.NEXT_PUBLIC_SUPABASE_IMAGE_BUCKET!)
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
  // Todo名のリスト
  const TodoList = body.convertedTodoResponse.map((todo: Todo) => {
    return { TodoName: todo.TodoName, TodoID: todo.TodoID };
  });

  // サーバー上にある画像ファイル名を格納する変数
  const [imageURLs, setImageURLs] = useState(body.Images.flat());

  const inputRef = useRef<HTMLInputElement | null>(null);

  // サーバーにアップロードする画像ファイルを格納する変数
  const [importingFile, setImportingFiles] = useState<File[]>([]);

  // ローディング状態を管理する変数
  const [isLoading, setIsLoading] = useState(false);

  // プルダウンから取得されたTodoのValueを管理する変数
  const [selectedValue, setSelectedValue] = useState("1");

  // 追加ボタンクリックで発火
  const onClickSelect: MouseEventHandler<HTMLButtonElement> = () => {
    inputRef.current?.click();
  };

  // 削除ボタンクリックで発火
  const onClickRemove = (fileName: string) => {
    setImportingFiles(importingFile.filter((file) => file.name !== fileName));
  };

  // ファイルに変更があったら発火
  const handleFileChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setImportingFiles([...importingFile, ...files]);
    }
  };

  // アップロードボタンクリックで発火
  const onClickUpload = async (fileList: File[]) => {
    // 画像をアップロードする関数
    const uploadStorage = async ({
      fileList,
      bucketName,
    }: UploadStorageArgs): Promise<any> => {
      try {
        setIsLoading(true);
        // サーバーに何枚の写真があるかを確認
        const { data, error } = await supabase.storage
          .from(process.env.NEXT_PUBLIC_SUPABASE_IMAGE_BUCKET!)
          .list(selectedValue);
        const convertedData = data?.map((data) => data.name);

        // サーバー上の枚数
        const NumOfImagesOnServer = convertedData!.length;

        // アップロードするファイルの数
        const NumOfFiles = fileList.length;

        for (let i = 0; i <= NumOfFiles - 1; i++) {
          // 送信するファイル(ひとつ)
          const file = fileList[i];

          // Bucket内でのファイル名
          // (やりたいことID)-(i枚目)とする
          const pathName = `${selectedValue}/${selectedValue}-${
            NumOfImagesOnServer + 1 + i
          }.jpg`;

          // アップロード
          const { data, error } = await supabase.storage
            .from(bucketName)
            .upload(pathName, file);

          console.log(imageURLs);
          setImageURLs([...imageURLs, pathName]);

          if (error) throw error;
        }
        setIsLoading(false);
        return "終了";
      } catch (error) {
        console.error({ error });
        setIsLoading(false);
        return { pathname: null };
      }
    };

    // 画像が選択されていなければreturn
    if (!fileList || !fileList.length) return 1;

    // Bucketに画像をアップロード
    const { pathname } = await uploadStorage({
      fileList,
      bucketName: process.env.NEXT_PUBLIC_SUPABASE_IMAGE_BUCKET!,
    });
    if (pathname) console.debug({ pathname });

    // selected images欄を空にする
    setImportingFiles([]);
  };

  // 新しいファイルがインポートされたら発火
  useEffect(() => {
    const formData = new FormData();
    for (let file of importingFile) {
      formData.append(file.name, file, file.name);
    }
  }, [importingFile]);

  const breakpoint = useBreakpoint();
  console.log(breakpoint);

  const [selectedImage, setSelectedImage] = useState("");
  const onClickImage = (image: string) => {
    onOpen();
    setSelectedImage(image);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Layout>
        <Box m={10}>
          {/* ア ップローダー */}
          <Box ml={"auto"} mr={"auto"}>
            {/* ヘッダー */}

            <Heading textAlign="center" mb={5}>
              Upload Image
            </Heading>

            {/* Todo選択 */}

            <Heading size="md" mb={5} textAlign="center">
              1. Select Todo
            </Heading>
            <Select
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value as TodoName)}
              width={[200, 350, 350, 350, 350]}
              ml={"auto"}
              mr={"auto"}
              mb={5}
            >
              {TodoList.map((todo: Todo) => {
                return (
                  <option key={todo.TodoID} value={todo.TodoID}>
                    #{todo.TodoID} {todo.TodoName}
                  </option>
                );
              })}
            </Select>

            {/* 画像選択 */}
            <Box mb={5}>
              <Heading size="md" mb={5} textAlign="center">
                2. Choose images to upload
              </Heading>

              <Button
                onClick={onClickSelect}
                ml={"auto"}
                mr={"auto"}
                display="block"
                colorScheme={"linkedin"}
              >
                Select Image
              </Button>
              <Input
                id="file-upload"
                name="file-upload"
                type="file"
                ref={inputRef}
                multiple
                accept="image/png, image/jpeg"
                onChange={handleFileChange}
                display="none"
              />
              <Center>
                {breakpoint === "base" ? (
                  <Stack mt={2} maxWidth={300} pl={4} pr={4}>
                    {importingFile.length !== 0
                      ? importingFile.map((file, i: number) => {
                          return (
                            <Tag
                              key={i}
                              onClick={() => {
                                onClickRemove(file.name);
                              }}
                            >
                              <TagLabel>{file.name}</TagLabel>
                              <TagCloseButton />
                            </Tag>
                          );
                        })
                      : ""}
                  </Stack>
                ) : (
                  <HStack mt={2} maxWidth={300} pl={4} pr={4}>
                    {importingFile.length !== 0
                      ? importingFile.map((file, i: number) => {
                          return (
                            <Tag
                              key={i}
                              onClick={() => {
                                onClickRemove(file.name);
                              }}
                            >
                              <TagLabel>{file.name}</TagLabel>
                              <TagCloseButton />
                            </Tag>
                          );
                        })
                      : ""}
                  </HStack>
                )}
              </Center>
            </Box>

            {/* アップロードボタン */}
            <Center mb={5}>
              <Button
                onClick={() => onClickUpload(importingFile)}
                isLoading={isLoading ? true : false}
                variant="solid"
                colorScheme={"facebook"}
              >
                Upload!
              </Button>
            </Center>
          </Box>

          {/* アルバム */}
          <Box>
            <Heading textAlign={"center"} mb={5}>
              Album
            </Heading>

            <Grid
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
                "repeat(4, 1fr)",
                "repeat(5, 1fr)",
              ]}
              gap={[4, 2, 2, 4, 4]}
              // m={[2, 2, 2, 2, 2]}
            >
              {imageURLs.length !== 0 ? (
                imageURLs.map((image: string) => {
                  return (
                    <GridItem key={image} onClick={() => onClickImage(image)}>
                      <AspectRatio ratio={1}>
                        <Image
                          src={
                            process.env.NEXT_PUBLIC_SUPABASE_URL! +
                            process.env.NEXT_PUBLIC_SUPABASE_SUBDOMAIN! +
                            process.env.NEXT_PUBLIC_SUPABASE_IMAGE_BUCKET +
                            `/${image}`
                          }
                          alt={""}
                          objectFit="cover"
                          // height={[400, 300, 300, 300, 30]}
                          // ml="auto"
                          // mr="auto"
                        />
                      </AspectRatio>
                    </GridItem>
                  );
                })
              ) : (
                <>
                  <Text>No Image</Text>
                </>
              )}
            </Grid>
          </Box>
        </Box>

        {/* 画像クリック時のモーダル */}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalBody>
              {" "}
              <Image
                src={
                  process.env.NEXT_PUBLIC_SUPABASE_URL! +
                  process.env.NEXT_PUBLIC_SUPABASE_SUBDOMAIN! +
                  process.env.NEXT_PUBLIC_SUPABASE_IMAGE_BUCKET +
                  `/${selectedImage}`
                }
                alt={"写真"}
                width={"100%"}
                mt={4}
              />
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Layout>
    </>
  );
};

export default AlbumPage;
