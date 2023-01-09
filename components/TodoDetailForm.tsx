import {
  Box,
  Heading,
  Stack,
  Image,
  Text,
  HStack,
  Avatar,
  Textarea,
  Button,
  Input,
  Select,
  Tag,
  Wrap,
  WrapItem,
  Flex,
  Spacer,
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { supabase } from "../libs/supabase";

export const getServerSideProps: GetServerSideProps = async () => {
  // パブリックなBucketから画像の取得
  const {
    data: { publicUrl },
  } = await supabase.storage.from("100things").getPublicUrl("fuji.jpg");

  return {
    props: { body: publicUrl },
  };
};

const TodoDetailForm = (body: any) => {
  console.log(body);
  return (
    <>
      <Stack margin={10}>
        <Box mb="1">
          <Heading size="xl" mb="5">
            タイトルタイトルタイトル
          </Heading>
          <Box mb="3">
            <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
          </Box>
          <Text>
            一行説明一行説明一行説明一行説明一行説明一行説明一行説明一行説明一行説明一行説明一行説明
          </Text>
        </Box>

        {/* タグ */}
        <Box>
          <Box mb="4">
            <Box mb="2">
              <Text size="xl" as="b">
                Tags
              </Text>
            </Box>
            <HStack>
              <Tag>タグ</Tag>
              <Tag>タグ</Tag>
              <Tag>タグ</Tag>
            </HStack>
          </Box>
        </Box>

        {/* Complete Date・Location・Status */}
        <Box>
          <Box mb="4">
            <Wrap>
              <WrapItem w="200px">
                <Box>
                  <Box mb="2">
                    <Text size="xl" as="b">
                      Complete Date
                    </Text>
                  </Box>
                  <Editable defaultValue="2012-12-11">
                    <EditablePreview />
                    <EditableInput type="date" />
                  </Editable>
                </Box>
              </WrapItem>

              <WrapItem w="200px">
                <Box>
                  <Box mb="2">
                    <Text size="xl" as="b">
                      Location
                    </Text>
                  </Box>
                  <Editable defaultValue="東京都浅草">
                    <EditablePreview width="200" />
                    <EditableInput width="200" />
                  </Editable>
                </Box>
              </WrapItem>

              <WrapItem w="200px">
                <Box>
                  <Box mb="2">
                    <Text size="xl" as="b">
                      Status
                    </Text>
                  </Box>
                  <Select>
                    <option value="option1">Undone</option>
                    <option value="option2">Planning</option>
                    <option value="option3">Done</option>
                  </Select>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>

        {/* Comments */}
        <Box>
          <Box mb="2">
            <Text size="xl" as="b">
              Comments
            </Text>
          </Box>
          <Box mb="5">
            <HStack>
              <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
              <Text fontSize="sm">
                コメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメント
              </Text>
            </HStack>
          </Box>
          <Box mb="5">
            <HStack>
              <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
              <Text fontSize="sm">
                コメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメント
              </Text>
            </HStack>
          </Box>
          <Box mb="5">
            <HStack>
              <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
              <Text fontSize="sm">
                コメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメント
              </Text>
            </HStack>
          </Box>
          <Box mb="5">
            <HStack>
              <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
              <Textarea height="100px" fontSize="sm">
                コメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメント
              </Textarea>
            </HStack>
          </Box>

          <Flex>
            <Spacer />
            <Button>Submit</Button>
          </Flex>
        </Box>
      </Stack>
    </>
  );
};

export default TodoDetailForm;
