import {
    Box,
    Button,
    Center,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Text,
} from "@chakra-ui/react";
import { FormEvent, useEffect, useState } from "react";
import { supabase } from "../libs/supabase";
import { useToast } from "@chakra-ui/react";
import Layout from "../components/Layout";

import { useRouter } from "next/router";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
const SignIn = () => {
    const toast = useToast();
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { data: session } = useSession();
    console.log(session?.user?.name);
    return (
        <>
            <Center>
                <Stack m={10}>
                    <Button
                        onClick={() =>
                            signIn("google", { callbackUrl: "/about" })
                        }
                    >
                        Do you have a key to this page?
                    </Button>
                    <Text>{session?.user?.name}</Text>
                </Stack>
            </Center>
        </>
    );
};

export default SignIn;
