import {
    Avatar,
    Box,
    Button,
    Center,
    HStack,
    Image,
    Input,
    Stack,
    Tag,
    TagCloseButton,
    TagLabel,
    Text,
    useBreakpoint,
    useToast,
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import {
    ChangeEventHandler,
    FormEvent,
    MouseEventHandler,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";
import Header from "../components/Header";
import { supabase } from "../libs/supabase";
import { profileClient } from "../utils/axiosInstancesServerside";
import { makeSerializable } from "../utils/util";
import { SessionContext } from "./_app";

export const getServerSideProps: GetServerSideProps = async () => {
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

    // アバター画像を取得
    //　フォルダを検索
    const { data, error } = await supabase.storage.from("avatars").list();

    //   // フォルダの配列
    //   const ImageFolderArray = data!
    //     .map((row: any) => row.name)
    //     .filter((row: any) => row !== ".emptyFolderPlaceholder");

    //   // 各フォルダ名で
    //   const Images = await Promise.all(
    //     ImageFolderArray.map(async (folder: string) => {
    //       const { data, error } = await supabase.storage
    //         .from("avatars")
    //         .list(folder);

    //       const convertedData = data
    //         ?.map((data) => `${folder}/${data.name}`)
    //         .filter((row: any) => row !== `${folder}/.emptyFolderPlaceholder`);

    //   return ImageFolderArray;
    // })
    //   );

    return {
        props: { body: { profile2, data } },
    };
};

const Settings = ({ body }: any) => {
    // 変数
    // セッションの取得
    const loginUserID = useContext(SessionContext);

    // レスポンシブ対応
    const breakpoint = useBreakpoint();

    // ローディング状態を管理する変数
    const [isLoading, setIsLoading] = useState(false);

    // 現在のログインユーザー
    const [nowLoginUser, setNowLoginUser] = useState("");

    // 現在のアバターURL
    const [nowAvatarURL, setNowAvatarURL] = useState("");

    // 現在のEmailアドレス
    const [nowEmail, setNowEmail] = useState("");

    // 入力した名前
    const [inputUsername, setInputUsername] = useState("");

    // 入力したパスワード
    const [inputPassword, setInputPassword] = useState("");

    // 入力したEmail
    const [inputEmail, setInputEmail] = useState("");

    // サーバーにアップロードする画像ファイルを格納する変数
    // const [inputAvatarImage, setInputAvatarImage] = useState<File[]>([]);
    const [inputAvatarImage, setInputAvatarImage] = useState<File>();

    // toastを使用
    const toast = useToast();

    // 画像選択用
    const inputRef = useRef<HTMLInputElement | null>(null);

    // 現在のログインユーザーのデータを取得
    const getLoginUserData = async () => {
        // 現在のユーザー名
        const loginUser = body.profile2.filter(
            (row: any) => row.ID === loginUserID
        );
        setNowLoginUser(loginUser[0].username);

        // 現在のアバターURL
        const avatarURL = body.profile2.filter(
            (row: any) => row.ID === loginUserID
        )[0].avatar_url;
        setNowAvatarURL(avatarURL);

        // 現在のEmailアドレス
        const { data, error } = await supabase.auth.getSession();
        const email = data.session?.user.email;
        setNowEmail(email!);
    };

    // 現在のログインユーザーのデータをセット
    useEffect(() => {
        if (loginUserID) {
            getLoginUserData();
        }
    }, [loginUserID]);

    // アバター画像追加ボタンクリックで発火
    const onClickSelect: MouseEventHandler<HTMLButtonElement> = () => {
        inputRef.current?.click();
    };

    // アバター画像が選択されたら発火
    const handleFileChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        if (e.target.files) {
            // const files = Array.from(e.target.files);
            // setInputAvatarImage([...inputAvatarImage, ...files]);
            const files = e.target.files[0];
            setInputAvatarImage(files);
        }
    };

    // 変更ボタンクリックで発火
    const onClickChange = async (fileList: File) => {
        // 入力があったらメールアドレスを変更
        if (inputEmail) {
            await supabase.auth.updateUser({
                email: inputEmail,
            });
            setInputEmail("");
            toast({
                title: "User Data Update Success",
                description: "ユーザーのEmailを変更しました",
                status: "success",
                duration: 9000,
                isClosable: true,
            });
            console.log("メールアドレスを変更");
        }

        // パスワードを変更
        if (inputPassword) {
            if (inputPassword.length >= 6) {
                const { data, error } = await supabase.auth.updateUser({
                    password: inputPassword,
                });
                toast({
                    title: "User Data Update Success",
                    description: "ユーザーのパスワードを変更しました",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                });
                setInputPassword("");
                console.log("パスワードを変更");
            } else {
                console.log("パスワードが6字以下");
                toast({
                    title: "User Data Update Failure",
                    description: "パスワードは6文字以上でなければなりません",
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                });
                setInputPassword("");
            }
        }

        // 入力があったらユーザー名を変更
        if (inputUsername) {
            console.log("名前を変更");
            await profileClient._id(loginUserID!).$put({
                body: { UserName: inputUsername },
                query: {
                    ProfileID: loginUserID!,
                },
            });
            setInputUsername("");
            toast({
                title: "User Data Update Success",
                description: "ユーザー名を変更しました",
                status: "success",
                duration: 9000,
                isClosable: true,
            });
            console.log("ユーザー名を変更");

            // 表示されるユーザー名を変更
            setNowLoginUser(inputUsername);
        }

        // アバター画像アップロードの型定義
        type UploadStorageArgs = {
            fileList: File;
            bucketName: string;
        };

        console.log(fileList);

        // アバター画像のアップロード
        const uploadStorage = async ({
            fileList,
            bucketName,
        }: UploadStorageArgs): Promise<any> => {
            try {
                setIsLoading(true);

                // for (let i = 0; i <= 0; i++) {
                // 送信するファイル(ひとつ)
                const file = fileList;

                // Bucket内でのファイル名(ログインユーザーID.jpg)
                const avatarURL = `${loginUserID}.jpg`;

                const { data, error } = await supabase.storage
                    .from(bucketName)
                    .update(`${avatarURL}`, file, {
                        cacheControl: "3600",
                        // Overwrite file if it exis
                        upsert: true,
                    });

                if (error) {
                    throw error;
                } else {
                    toast({
                        title: "User Data Update Success",
                        description: "アバター画像をアップロードしました",
                        status: "success",
                        duration: 9000,
                        isClosable: true,
                    });
                }

                // }

                setIsLoading(false);
                return "終了";
            } catch (error) {
                console.error({ error });
                setIsLoading(false);
                return { pathname: null };
            }
        };

        // 画像があればBucketに画像をアップロード
        if (fileList) {
            const { pathname } = await uploadStorage({
                fileList,
                bucketName: "avatars",
            });

            if (pathname) console.debug({ pathname });
            console.log(pathname);

            // selected images欄を空にする
            setInputAvatarImage(undefined);
        }
    };

    return (
        <>
            <Header loginUser={nowLoginUser} avatarURL={nowAvatarURL} />
            <Center>
                <Stack width={300} align={"center"}>
                    <Avatar size={"2xl"} src={nowAvatarURL} />
                    <Text fontSize={"3xl"}>{nowLoginUser}</Text>
                    <Text fontSize={"md"} color={"GrayText"}>
                        {nowEmail}
                    </Text>

                    {/* 選択 */}
                    <Button
                        onClick={onClickSelect}
                        ml={"auto"}
                        mr={"auto"}
                        display="block"
                        colorScheme={"linkedin"}
                        width={200}
                    >
                        Select Avatar Image
                    </Button>
                    <Input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        ref={inputRef}
                        accept="image/png, image/jpeg"
                        onChange={handleFileChange}
                        display="none"
                    />

                    <Center>
                        <Stack mt={2} maxWidth={300} pl={4} pr={4}>
                            {inputAvatarImage ? (
                                <Tag
                                    key={inputAvatarImage.name}
                                    onClick={() => {
                                        setInputAvatarImage(undefined);
                                    }}
                                >
                                    <TagLabel>{inputAvatarImage.name}</TagLabel>
                                    <TagCloseButton />
                                </Tag>
                            ) : (
                                ""
                            )}
                        </Stack>
                    </Center>

                    <Text>Password</Text>
                    <Input
                        type={"password"}
                        onChange={(e) => setInputPassword(e.target.value)}
                        value={inputPassword}
                    ></Input>
                    <Text>Username</Text>
                    <Input
                        onChange={(e) => setInputUsername(e.target.value)}
                        value={inputUsername}
                    ></Input>
                    <Text>Email</Text>
                    <Input
                        onChange={(e) => setInputEmail(e.target.value)}
                        value={inputEmail}
                    ></Input>

                    <Button
                        onClick={() => onClickChange(inputAvatarImage!)}
                        isLoading={isLoading ? true : false}
                        width={100}
                        colorScheme={"purple"}
                    >
                        Update
                    </Button>
                </Stack>
            </Center>
        </>
    );
};

export default Settings;
