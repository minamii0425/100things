import { GetServerSideProps } from "next";
import { supabase } from "../libs/supabase";

export const getServerSideProps: GetServerSideProps = async () => {
  const user = await supabase.from("profiles").select("*");

  return { props: {} };
};

const Registration = () => {
  return <></>;
};

export default Registration;
