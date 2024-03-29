import Header from "../components/Header";
import { SessionContext } from "./_app";
import { useContext, useState, useEffect } from "react";
import { supabase } from "../libs/supabase";
import { GetServerSideProps, NextApiRequest, NextApiResponse } from "next";
import { makeSerializable } from "../utils/util";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";
import Layout from "../components/Layout";
import { Center, Text } from "@chakra-ui/react";

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

const Page = ({ body }: any) => {
    // セッションの取得
    const session = useContext(SessionContext);
    console.log("このページのセッション；" + session);

    return (
        <>
            <Layout>
                <Center>
                    <Text>テスト</Text>
                </Center>
            </Layout>
        </>
    );
};

export default Page;
