import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";
import Layout from "../../components/Layout";

const CreateTodo = () => {
  return (
    <>
      <Layout>
        <Box m={10}>
          <FormControl>
            <FormLabel>やりたいこと</FormLabel>
            <Input />

            <FormLabel>一言コメント</FormLabel>
            <Input />
          </FormControl>
        </Box>
      </Layout>
    </>
  );
};

export default CreateTodo;
