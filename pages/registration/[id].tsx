import { GetServerSideProps } from "next";
import { supabase } from "../../libs/supabase";
import { useRouter } from "next/router";
import { FormLabel, Input } from "@chakra-ui/react";

export const getServerSideProps: GetServerSideProps = async () => {
  const user = await supabase.from("profiles").select("*");

  const userID = await supabase.from("users").select("*");

  return { props: { user: user.data, userID: userID } };
};

const Registration = ({ user, userID }) => {
  console.log(user);
  console.log(userID);
  const router = useRouter();

  return (
    <>
      <FormLabel></FormLabel>
      <Input></Input>
    </>
  );
};

export default Registration;
