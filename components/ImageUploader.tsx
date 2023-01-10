import {
  Box,
  Button,
  Center,
  FormLabel,
  Heading,
  HStack,
  Input,
  Select,
  Stack,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import {
  ChangeEventHandler,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./ImageUploader.module.scss";
import { supabase } from "../libs/supabase";
import { v4 } from "uuid";
import { Todo, TodoName } from "../aspida_api/@types";
import { BiLeftArrow } from "react-icons/bi";

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

// type ReturnUploadStorage = {
//   pathname: string | null;
// };

/**
 *
 * @returns
 */
const ImageUploader = (props: ImageUploaderProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [importingFile, setImportingFiles] = useState<File[]>([]);

  const [isLoading, setIsLoading] = useState(false);

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

  const onClickHandler = async (fileList: File[]) => {
    const uploadStorage = async ({
      fileList,
      bucketName,
    }: UploadStorageArgs): Promise<any> => {
      try {
        setIsLoading(true);
        // サーバーに何枚の写真があるかを確認
        const { data, error } = await supabase.storage
          .from("images")
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

    const { pathname } = await uploadStorage({
      fileList,
      bucketName: "images",
    });
    if (pathname) console.debug({ pathname });

    setImportingFiles([]);
  };

  // 新しいファイルがインポートされたら発火
  useEffect(() => {
    const formData = new FormData();

    for (let file of importingFile) {
      formData.append(file.name, file, file.name);
    }
    props.onChangeFiles && props.onChangeFiles(formData);
  }, [importingFile]);

  const [selectedValue, setSelectedValue] = useState("1");

  return (
    <>
      <Box>
        {/* アップローダー */}
        <Heading>Upload Image</Heading>

        <HStack>
          <Button onClick={onClickSelect}>Select Image</Button>
          <Input
            className={styles.input}
            id="file-upload"
            name="file-upload"
            type="file"
            ref={inputRef}
            multiple
            accept="image/png, image/jpeg"
            onChange={handleFileChange}
          />
          <HStack m={5}>
            {importingFile.length !== 0 ? (
              importingFile.map((file) => {
                return (
                  <Tag
                    key={file.name}
                    onClick={() => {
                      onClickRemove(file.name);
                    }}
                  >
                    <TagLabel>{file.name}</TagLabel>
                    <TagCloseButton />
                  </Tag>
                );
              })
            ) : (
              <HStack>
                <BiLeftArrow /> <Text>click and select images to upload</Text>
              </HStack>
            )}
          </HStack>
        </HStack>

        <Select
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value as TodoName)}
          width={350}
        >
          {props.TodoList.map((todo: TodoName, i: number) => {
            return (
              <option key={todo} value={i + 1}>
                #{i + 1} {todo}
              </option>
            );
          })}
        </Select>

        <Button
          onClick={() => onClickHandler(importingFile)}
          isLoading={isLoading ? true : false}
        >
          Upload
        </Button>
      </Box>
    </>
  );
};

export default ImageUploader;
