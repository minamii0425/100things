import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    useToast,
    Center,
    Avatar,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
} from "@chakra-ui/react";
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from "@chakra-ui/icons";
import { useContext, useEffect, useState } from "react";
import { SessionContext, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { supabase } from "../libs/supabase";
import { redirect } from "next/dist/server/api-utils";

interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
}

interface HeaderUserProps {
    loginUser?: string;
    avatarURL?: string;
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: "What's this Site",
        href: "/about",
    },
    // {
    //     label: "100 Things",
    //     href: "/todos",
    // },
    {
        label: "Album",
        href: "/album",
    },
    {
        label: "Map",
        href: "/map",
    },
];

const Header = (props: HeaderUserProps) => {
    const { isOpen, onToggle } = useDisclosure();

    const toast = useToast();
    const router = useRouter();

    // セッションの取得
    const [pageSession, setPageSession] = useState("");
    const getSession = async () => {
        const { data, error } = await supabase.auth.getSession();
        setPageSession(data.session?.user.email!);
    };

    useEffect(() => {
        getSession();
    });

    const { data: session } = useSession();
    console.log(session);

    // console.log("hedader");
    // console.log(props.loginUser);

    // サインアウト
    const onClickLogOut = async () => {
        const { error } = await supabase.auth.signOut();

        if (error) {
            toast({
                title: "LogOut Failure",
                description: "Cannot Logout",
                status: "error",
                duration: 9000,
                isClosable: true,
            });
        }

        toast({
            title: "Successfully Logged out",
            description: "Logout Successfully",
            status: "success",
            duration: 9000,
            isClosable: true,
        });
        router.reload();
    };

    return (
        <Box>
            <Flex
                bg={useColorModeValue("9DECF9", "gray.800")} // 背景色
                color={useColorModeValue("gray.600", "white")} // 文字色
                minH={"60px"}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={0} // ヘッダー下のボーダー
                borderStyle={"solid"}
                borderColor={useColorModeValue("gray.200", "gray.900")}
                align={"center"}
                // position="sticky"
            >
                <Flex
                    flex={{ base: 1, md: "auto" }}
                    ml={{ base: -2 }}
                    display={{ base: "flex", md: "none" }}
                >
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? (
                                <CloseIcon w={3} h={3} />
                            ) : (
                                <HamburgerIcon w={5} h={5} />
                            )
                        }
                        variant={"ghost"}
                        aria-label={"Toggle Navigation"}
                    />
                </Flex>
                <Flex
                    flex={{ base: 1 }}
                    justify={{ base: "center", md: "start" }}
                >
                    <Link
                        textAlign={useBreakpointValue({
                            base: "center",
                            md: "left",
                        })}
                        fontFamily={"heading"}
                        color={useColorModeValue("white", "white")}
                        href={"/todos"}
                    >
                        100Things
                    </Link>

                    <Flex display={{ base: "none", md: "flex" }} ml={10}>
                        <DesktopNav />
                    </Flex>
                </Flex>

                <Stack
                    flex={{ base: 1, md: 0 }}
                    justify={"flex-end"}
                    direction={"row"}
                    spacing={6}
                >
                    {!session ? (
                        <>
                            <Button
                                as={"a"}
                                fontSize={"sm"}
                                fontWeight={400}
                                variant={"link"}
                                href={"/signin"}
                            >
                                Sign In
                            </Button>
                        </>
                    ) : (
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={"full"}
                                variant={"link"}
                                cursor={"pointer"}
                                minW={0}
                            >
                                <Avatar size={"sm"} src={props.avatarURL} />
                            </MenuButton>
                            <MenuList alignItems={"center"}>
                                <br />
                                <Center>
                                    <Avatar
                                        size={"2xl"}
                                        src={props.avatarURL}
                                    />
                                </Center>
                                <br />
                                <Center>
                                    <p>{props.loginUser}</p>
                                </Center>
                                <br />
                                <MenuDivider />
                                <MenuItem
                                    onClick={() => {
                                        router.push("/settings");
                                    }}
                                >
                                    Account Settings
                                </MenuItem>
                                <MenuItem
                                    onClick={() =>
                                        signOut({ callbackUrl: "/signin" })
                                    }
                                >
                                    Logout
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    )}
                </Stack>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    );
};

export default Header;

const DesktopNav = () => {
    const linkColor = useColorModeValue("gray.50", "gray.200");
    const linkHoverColor = useColorModeValue("gray.800", "white");
    const popoverContentBgColor = useColorModeValue("white", "gray.800");

    return (
        <Stack direction={"row"} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={"hover"} placement={"bottom-start"}>
                        <PopoverTrigger>
                            <Link
                                p={2}
                                href={navItem.href ?? "#"}
                                fontSize={"sm"}
                                fontWeight={500}
                                color={linkColor}
                                _hover={{
                                    textDecoration: "none",
                                    color: linkHoverColor,
                                }}
                            >
                                {navItem.label}
                            </Link>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={"xl"}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={"xl"}
                                minW={"sm"}
                            >
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav
                                            key={child.label}
                                            {...child}
                                        />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
        <Link
            href={href}
            role={"group"}
            display={"block"}
            p={2}
            rounded={"md"}
            _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
        >
            <Stack direction={"row"} align={"center"}>
                <Box>
                    <Text
                        transition={"all .3s ease"}
                        _groupHover={{ color: "pink.400" }}
                        fontWeight={500}
                    >
                        {label}
                    </Text>
                    <Text fontSize={"sm"}>{subLabel}</Text>
                </Box>
                <Flex
                    transition={"all .3s ease"}
                    transform={"translateX(-10px)"}
                    opacity={0}
                    _groupHover={{
                        opacity: "100%",
                        transform: "translateX(0)",
                    }}
                    justify={"flex-end"}
                    align={"center"}
                    flex={1}
                >
                    <Icon
                        color={"pink.400"}
                        w={5}
                        h={5}
                        as={ChevronRightIcon}
                    />
                </Flex>
            </Stack>
        </Link>
    );
};

const MobileNav = () => {
    return (
        <Stack
            bg={useColorModeValue("#EDFDFD", "gray.800")}
            p={4}
            display={{ md: "none" }}
        >
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={Link}
                href={href ?? "#"}
                justify={"space-between"}
                align={"center"}
                _hover={{
                    textDecoration: "none",
                }}
            >
                <Text
                    fontWeight={600}
                    color={useColorModeValue("gray.600", "gray.200")}
                >
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={"all .25s ease-in-out"}
                        transform={isOpen ? "rotate(180deg)" : ""}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse
                in={isOpen}
                animateOpacity
                style={{ marginTop: "0!important" }}
            >
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={"solid"}
                    borderColor={useColorModeValue("gray.200", "gray.700")}
                    align={"start"}
                >
                    {children &&
                        children.map((child) => (
                            <Link key={child.label} py={2} href={child.href}>
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};
