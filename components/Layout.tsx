import { ReactNode, useContext } from "react";
import { SessionContext } from "../pages/_app";
import Header from "../components/Header";
import { useSession } from "next-auth/react";

export interface LayoutProps {
    children: ReactNode;
    username?: string;
}

const Layout = (props: LayoutProps) => {
    const { data: session } = useSession();

    return (
        <>
            {session ? (
                <>
                    <Header
                        loginUser={session?.user?.name!}
                        avatarURL={session?.user?.image!}
                    />
                    {props.children}
                </>
            ) : (
                <>You are not authorized.</>
            )}
        </>
    );
};

export default Layout;
