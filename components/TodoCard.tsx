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
    Tag as ChakraTag,
    HStack,
    useToast,
} from "@chakra-ui/react";
import {
    Location,
    Status,
    Tag,
    TagName,
    Todo,
    TodoID,
    TodoName,
    Todo_Tag,
} from "../aspida_api/@types";
import { useRouter } from "next/router";
import { useState } from "react";
import { GetServerSideProps } from "next";
import { makeSerializable } from "../utils/util";
import { supabase } from "../libs/supabase";
import { todoClient } from "../utils/axiosInstancesServerside";
import styles from "./component.module.scss";

export interface TodoCardProps {
    Key?: TodoID;
    TodoName?: TodoName;
    Location?: Location;
    Tags?: any;
    CardImage?: string;
    Status: Status;
}

const TodoCard = (props: TodoCardProps) => {
    const router = useRouter();

    const toast = useToast();

    // ボタンのdisabled
    const [buttonDisabled, setButtonDisabled] = useState(
        props.Status === "Done" ? true : false
    );

    // ボタンのラベル
    const [buttonLabel, setButtonLabel] = useState(
        props.Status === "Done" ? "Done" : "Mark as Done"
    );

    // ボタンの色
    const [buttonColor, setButtonColor] = useState(
        props.Status === "Done" ? "red" : "yellow"
    );

    // Doneをくりっくした時に発火
    const onClickDone = async (TodoID: TodoID) => {
        await todoClient._id(TodoID).$put({
            body: {
                Status: "Done",
            },
            query: { TodoID: TodoID },
        });

        setButtonLabel("Completed!");
        setButtonDisabled(true);
        setButtonColor("red");

        toast({
            title: "Todo is Done!",
            status: "success",
            duration: 5000,
            isClosable: true,
        });
    };

    return (
        <>
            <Card maxW="sm" className={styles.card}>
                <Image
                    src={props.CardImage}
                    alt=""
                    borderTopRadius="lg"
                    objectFit="cover"
                    minHeight="200"
                    maxHeight="200"
                />
                <CardBody
                    onClick={() => {
                        router.push(`todos/${props.Key}`);
                    }}
                    minHeight="140"
                    maxHeight="140"
                    className={styles.cardBody}
                >
                    <Stack mt="1" spacing="2">
                        <Heading size="md">{props.TodoName}</Heading>

                        <HStack>
                            {props.Tags.map((tag: string) => {
                                return <ChakraTag key={tag}>{tag}</ChakraTag>;
                            })}
                        </HStack>
                        <Text color="gray.600" fontSize="sm">
                            {props.Location ? `＠${props.Location}` : ""}
                        </Text>
                    </Stack>
                </CardBody>
                {/* <Divider /> */}
                <CardFooter
                    className={styles.cardFooter}
                    borderBottomRadius="lg"
                >
                    <ButtonGroup spacing="4">
                        <Button
                            variant="solid"
                            colorScheme={buttonColor}
                            onClick={() => onClickDone(props.Key!)}
                            disabled={buttonDisabled}
                        >
                            {buttonLabel}
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </>
    );
};

export default TodoCard;
