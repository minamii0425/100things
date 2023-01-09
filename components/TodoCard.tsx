import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
  ButtonGroup,
  Divider,
  Heading,
  Stack,
  Text,
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
  HStack,
} from "@chakra-ui/react";
import { Location, TodoID, TodoName } from "../aspida_api/@types";
import { useRouter } from "next/router";

export interface TodoCardProps {
  Key?: TodoID;
  TodoName?: TodoName;
  Location?: Location;
  Tags?: any;
  CardImage?: string;
}

const TodoCard = (props: TodoCardProps) => {
  const router = useRouter();

  return (
    <>
      <Card maxW="sm">
        <Image
          src={props.CardImage}
          alt=""
          borderRadius="lg"
          objectFit="cover"
          maxHeight="200"
        />
        <CardBody>
          <Stack mt="1" spacing="2">
            <Heading size="md">{props.TodoName}</Heading>

            <HStack>
              {props.Tags.map((tag: string) => {
                return <Tag key={tag}>{tag}</Tag>;
              })}
            </HStack>
            <Text color="gray.600" fontSize="sm">
              ＠{props.Location}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="4">
            <Button variant="solid" colorScheme="blue">
              Done!
            </Button>
            <Button
              variant="solid"
              colorScheme="blue"
              onClick={() => {
                router.push(`todos/${props.Key}`);
              }}
            >
              Details
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
};

export default TodoCard;
