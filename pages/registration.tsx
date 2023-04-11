import {
    Stack,
    FormControl,
    FormLabel,
    Button,
    Box,
    useToast,
    Input,
    Center,
} from "@chakra-ui/react";

import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { FormEvent, useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import { supabase } from "../libs/supabase";
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

    const test = "test";

    return {
        props: { body: { profile2 } },
    };
};

const Registration = ({ body }: any) => {
    // セッションの取得
    const session = useContext(SessionContext);
    console.log(session);

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

    useEffect(() => {
        if (session) {
            getLoginUser();
        }
    }, [session]);

    const toast = useToast();
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // サインイン
    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });

        if (error) {
            toast({
                title: "LogIn Failure",
                description: "We've created your account for you.",
                status: "error",
                duration: 9000,
                isClosable: true,
            });
        } else {
            toast({
                title: "Successfully Logged In",
                description: "We've logged in.",
                status: "success",
                duration: 9000,
                isClosable: true,
            });
            router.push("/");
            setEmail("");
            setPassword("");
        }
    };

    return (
        <>
            <Header loginUser={loginUser} avatarURL={avatarURL} />

            <FormControl onSubmit={onSubmit}>
                <Center m={20}>
                    <Stack>
                        <Box>
                            <FormLabel>Mail Address</FormLabel>
                            <Input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                width={400}
                            />
                        </Box>
                        <Box>
                            <FormLabel>Password</FormLabel>
                            <Input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                width={400}
                            />
                        </Box>
                        <Center>
                            <Button
                                type="submit"
                                onClick={onSubmit}
                                m={4}
                                variant={"outline"}
                            >
                                Go
                            </Button>
                        </Center>
                    </Stack>
                </Center>
            </FormControl>
        </>
    );
};

export default Registration;
