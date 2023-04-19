import { GetServerSideProps } from "next";
import { FormEvent, useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import { supabase } from "../libs/supabase";
import { makeSerializable } from "../utils/util";
import { SessionContext } from "./_app";
import prisma from "../libs/prisma";
import {
    Center,
    Box,
    Stack,
    Image,
    Text,
    Button,
    Heading,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

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

    return {
        props: { body: { profile2 } },
    };
};

const About = ({ body }: any) => {
    // セッションの取得
    // const session = useContext(SessionContext);
    const { data: session } = useSession();
    console.log(session);

    const router = useRouter();

    return (
        <>
            <Layout>
                {/* <Center> */}
                <Stack>
                    {/* <Center> */}
                    <Center>
                        <Heading mt={[20, 20, 20, 20, 40]} mb={20}>
                            Happy Birthday
                        </Heading>
                    </Center>
                    <Center>
                        <Image
                            src="https://tazizrmuwhjllipqdxld.supabase.co/storage/v1/object/public/about/top.jpg"
                            width={600}
                            mb={20}
                        />
                    </Center>
                    {/* </Center> */}
                    {/* <Box>覚えていますか？</Box> */}

                    <Center>
                        <Text my={10} mx={4} align="center">
                            早いもので結婚してから５回目の誕生日になりました
                        </Text>
                    </Center>

                    <Center>
                        <Text my={10} mx={4} align="center">
                            結婚式の日の夜、たかが私にあるものをプレゼントしてくれたのを覚えているでしょうか？
                        </Text>
                    </Center>

                    <Center>
                        <Text my={10} mx={4} align="center">
                            {" "}
                            あれを見てからずっとやりたいなと思っていたことがありました
                        </Text>
                    </Center>

                    <Center>
                        <Text my={10} mx={4} align="center">
                            {" "}
                            ずいぶん時間がかかってしまったけれど、今日ようやく完成出来ました
                        </Text>
                    </Center>

                    <Center>
                        <Text my={10} mx={4} align="center">
                            {" "}
                            これを私からのプレゼントにしたいと思います
                        </Text>
                    </Center>

                    <Center>
                        <Text my={10} mx={4} align="center">
                            {" "}
                            改めて、お誕生日おめでとう
                        </Text>
                    </Center>

                    <Center>
                        <Button
                            width={300}
                            onClick={() => router.push("/todos")}
                            mt={10}
                            mb={40}
                            mx={4}
                        >
                            Special Present for You
                        </Button>
                    </Center>
                </Stack>
                {/* </Center> */}
            </Layout>
        </>
    );
};

export default About;
