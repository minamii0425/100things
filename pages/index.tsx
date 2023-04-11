import Header from "../components/Header";
import { SessionContext } from "./_app";
import { useContext, useState, useEffect } from "react";
import { supabase } from "../libs/supabase";
import { GetServerSideProps, NextApiRequest, NextApiResponse } from "next";
import { makeSerializable } from "../utils/util";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";

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

    return (
        <>
            <Header loginUser={loginUser} avatarURL={avatarURL} />
            <div>あ</div>
        </>
    );
};

export default Page;
