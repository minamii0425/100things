"use strict";
exports.id = 943;
exports.ids = [943];
exports.modules = {

/***/ 3505:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6134);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _libs_supabase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4986);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const NAV_ITEMS = [
    {
        label: "What's this Site",
        href: "/about"
    },
    {
        label: "100 Things",
        href: "/todos"
    },
    {
        label: "Album",
        href: "/album"
    },
    {
        label: "Map",
        href: "/map"
    }
];
const Header = ()=>{
    const { isOpen , onToggle  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useDisclosure)();
    const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useToast)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const [pageSession, setPageSession] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    // セッションの取得
    const getSession = async ()=>{
        const { data , error  } = await _libs_supabase__WEBPACK_IMPORTED_MODULE_5__/* .supabase.auth.getSession */ .O.auth.getSession();
        // console.log(data.session);
        setPageSession(data.session?.user.email);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        getSession();
    });
    // サインアウト
    const onClickLogOut = async ()=>{
        const { error  } = await _libs_supabase__WEBPACK_IMPORTED_MODULE_5__/* .supabase.auth.signOut */ .O.auth.signOut();
        if (error) {
            toast({
                title: "LogOut Failure",
                description: "Cannot Logout",
                status: "error",
                duration: 9000,
                isClosable: true
            });
        }
        toast({
            title: "Successfully Logged out",
            description: "Logout Successfully",
            status: "success",
            duration: 9000,
            isClosable: true
        });
        router.reload();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("white", "gray.800"),
                color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.600", "white"),
                minH: "60px",
                py: {
                    base: 2
                },
                px: {
                    base: 4
                },
                borderBottom: 0,
                borderStyle: "solid",
                borderColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.200", "gray.900"),
                align: "center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                        flex: {
                            base: 1,
                            md: "auto"
                        },
                        ml: {
                            base: -2
                        },
                        display: {
                            base: "flex",
                            md: "none"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
                            onClick: onToggle,
                            icon: isOpen ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__.CloseIcon, {
                                w: 3,
                                h: 3
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__.HamburgerIcon, {
                                w: 5,
                                h: 5
                            }),
                            variant: "ghost",
                            "aria-label": "Toggle Navigation"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                        flex: {
                            base: 1
                        },
                        justify: {
                            base: "center",
                            md: "start"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                textAlign: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useBreakpointValue)({
                                    base: "center",
                                    md: "left"
                                }),
                                fontFamily: "heading",
                                color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.800", "white"),
                                children: "100Things"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                                display: {
                                    base: "none",
                                    md: "flex"
                                },
                                ml: 10,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DesktopNav, {})
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                        flex: {
                            base: 1,
                            md: 0
                        },
                        justify: "flex-end",
                        direction: "row",
                        spacing: 6,
                        children: pageSession === undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                    as: "a",
                                    fontSize: "sm",
                                    fontWeight: 400,
                                    variant: "link",
                                    href: "/signin",
                                    children: "Sign In"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                    as: "a",
                                    display: {
                                        base: "none",
                                        md: "inline-flex"
                                    },
                                    fontSize: "sm",
                                    fontWeight: 600,
                                    color: "white",
                                    bg: "pink.400",
                                    _hover: {
                                        bg: "pink.300"
                                    },
                                    href: "/signup",
                                    children: "Sign Up"
                                })
                            ]
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                            display: {
                                base: "none",
                                md: "inline-flex"
                            },
                            fontSize: "sm",
                            fontWeight: 600,
                            color: "white",
                            bg: "pink.400",
                            _hover: {
                                bg: "pink.300"
                            },
                            onClick: onClickLogOut,
                            children: "Log Out"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Collapse, {
                in: isOpen,
                animateOpacity: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MobileNav, {})
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);
const DesktopNav = ()=>{
    const linkColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.600", "gray.200");
    const linkHoverColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.800", "white");
    const popoverContentBgColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("white", "gray.800");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
        direction: "row",
        spacing: 4,
        children: NAV_ITEMS.map((navItem)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Popover, {
                    trigger: "hover",
                    placement: "bottom-start",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.PopoverTrigger, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                p: 2,
                                href: navItem.href ?? "#",
                                fontSize: "sm",
                                fontWeight: 500,
                                color: linkColor,
                                _hover: {
                                    textDecoration: "none",
                                    color: linkHoverColor
                                },
                                children: navItem.label
                            })
                        }),
                        navItem.children && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.PopoverContent, {
                            border: 0,
                            boxShadow: "xl",
                            bg: popoverContentBgColor,
                            p: 4,
                            rounded: "xl",
                            minW: "sm",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                                children: navItem.children.map((child)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DesktopSubNav, {
                                        ...child
                                    }, child.label))
                            })
                        })
                    ]
                })
            }, navItem.label))
    });
};
const DesktopSubNav = ({ label , href , subLabel  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
        href: href,
        role: "group",
        display: "block",
        p: 2,
        rounded: "md",
        _hover: {
            bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("pink.50", "gray.900")
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
            direction: "row",
            align: "center",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                            transition: "all .3s ease",
                            _groupHover: {
                                color: "pink.400"
                            },
                            fontWeight: 500,
                            children: label
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                            fontSize: "sm",
                            children: subLabel
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                    transition: "all .3s ease",
                    transform: "translateX(-10px)",
                    opacity: 0,
                    _groupHover: {
                        opacity: "100%",
                        transform: "translateX(0)"
                    },
                    justify: "flex-end",
                    align: "center",
                    flex: 1,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                        color: "pink.400",
                        w: 5,
                        h: 5,
                        as: _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__.ChevronRightIcon
                    })
                })
            ]
        })
    });
};
const MobileNav = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("white", "gray.800"),
        p: 4,
        display: {
            md: "none"
        },
        children: NAV_ITEMS.map((navItem)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MobileNavItem, {
                ...navItem
            }, navItem.label))
    });
};
const MobileNavItem = ({ label , children , href  })=>{
    const { isOpen , onToggle  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useDisclosure)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
        spacing: 4,
        onClick: children && onToggle,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                py: 2,
                as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link,
                href: href ?? "#",
                justify: "space-between",
                align: "center",
                _hover: {
                    textDecoration: "none"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        fontWeight: 600,
                        color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.600", "gray.200"),
                        children: label
                    }),
                    children && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                        as: _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__.ChevronDownIcon,
                        transition: "all .25s ease-in-out",
                        transform: isOpen ? "rotate(180deg)" : "",
                        w: 6,
                        h: 6
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Collapse, {
                in: isOpen,
                animateOpacity: true,
                style: {
                    marginTop: "0!important"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                    mt: 2,
                    pl: 4,
                    borderLeft: 1,
                    borderStyle: "solid",
                    borderColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.200", "gray.700"),
                    align: "start",
                    children: children && children.map((child)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                            py: 2,
                            href: child.href,
                            children: child.label
                        }, child.label))
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1943:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3505);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Header__WEBPACK_IMPORTED_MODULE_1__]);
_Header__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const Layout = (props)=>{
    // const session = useContext(SessionContext);
    // console.log(`Layoutから見たsession: ${session}`);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
            props.children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4986:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ supabase)
/* harmony export */ });
/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2885);
/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);

const supabaseUrl = "https://tazizrmuwhjllipqdxld.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRheml6cm11d2hqbGxpcHFkeGxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzIxNDYwNjgsImV4cCI6MTk4NzcyMjA2OH0.kGaERf6V7EyK-cZYrwwLA7LEt5irb4mZ5aQMyZoHYmM";
if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("");
}
const supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl, supabaseAnonKey);


/***/ })

};
;