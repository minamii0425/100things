import { GetServerSideProps } from "next";
import { FormEvent, useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import { supabase } from "../libs/supabase";
import { makeSerializable } from "../utils/util";
import { SessionContext } from "./_app";
import prisma from "../libs/prisma";
import { Center, Box, Stack } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import Layout from "../components/Layout";

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

    return (
        <>
            <Layout>
                <Center>
                    <Stack>
                        <Box>誕生日おめでとう</Box>
                        <Box>覚えていますか？</Box>
                    </Stack>
                </Center>
            </Layout>
        </>
    );
};

export default About;
