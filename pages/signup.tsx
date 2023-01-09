import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
// import Layout from "../components/Layout";
import { supabase } from "../libs/supabase";
import { useToast } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import prisma from "../libs/prisma";

export const getServerSideProps: GetServerSideProps = async () => {
  const user = await supabase.from("profiles").select("*");

  return {
    props: { user: user },
  };
};

const SignUp = (user: any, comment: any) => {
  console.log(user.user.data);
  console.log(comment);
  const toast = useToast();
  // 変数の設定
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");

  // ユーザーの登録
  const onClickSubmit = async (e: any) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
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

      setEmail("");
      setPassword("");
    }
  };

  return (
    <>
      {/* <Layout> */}
      <Stack>
        <FormControl>
          <Box>
            <FormLabel>メールアドレス</FormLabel>
            <Input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box>
            <FormLabel>パスワード</FormLabel>
            <Input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Box>
            <FormLabel>パスワード（確認）</FormLabel>
            <Input
              type="password"
              required
              value={passwordConf}
              onChange={(e) => setPasswordConf(e.target.value)}
            />
          </Box>
          <Box>
            <Button type="submit" onClick={onClickSubmit}>
              サインアップ
            </Button>
          </Box>
        </FormControl>
      </Stack>
      {/* </Layout> */}
    </>
  );
};

export default SignUp;
