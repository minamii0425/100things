"use strict";
(() => {
var exports = {};
exports.id = 472;
exports.ids = [472];
exports.modules = {

/***/ 6008:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__]);
_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const TodoCard = (props)=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card, {
            maxW: "sm",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                    src: props.CardImage,
                    alt: "",
                    borderRadius: "lg",
                    objectFit: "cover",
                    maxHeight: "200"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.CardBody, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                        mt: "1",
                        spacing: "2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                                size: "md",
                                children: props.TodoName
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
                                children: props.Tags.map((tag)=>{
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tag, {
                                        children: tag
                                    }, tag);
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                color: "gray.600",
                                fontSize: "sm",
                                children: [
                                    "＠",
                                    props.Location
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.CardFooter, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, {
                        spacing: "4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                variant: "solid",
                                colorScheme: "blue",
                                children: "Done!"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                variant: "solid",
                                colorScheme: "blue",
                                onClick: ()=>{
                                    router.push(`todos/${props.Key}`);
                                },
                                children: "Details"
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 49:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ libs_prisma)
});

;// CONCATENATED MODULE: external "@prisma/client"
const client_namespaceObject = require("@prisma/client");
;// CONCATENATED MODULE: ./libs/prisma.tsx

const prisma = global.prisma || new client_namespaceObject.PrismaClient({
    log: [
        "info"
    ]
});
if (false) {}
/* harmony default export */ const libs_prisma = (prisma);


/***/ }),

/***/ 2911:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TodoCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6008);
/* harmony import */ var _libs_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49);
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1067);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2210);
/* harmony import */ var _libs_supabase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4986);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1943);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_TodoCard__WEBPACK_IMPORTED_MODULE_1__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__, _components_Layout__WEBPACK_IMPORTED_MODULE_5__]);
([_components_TodoCard__WEBPACK_IMPORTED_MODULE_1__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__, _components_Layout__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const getServerSideProps = async ()=>{
    // Todosテーブルより
    const TodoResponse = await _libs_prisma__WEBPACK_IMPORTED_MODULE_2__/* ["default"].todos.findMany */ .Z.todos.findMany({});
    const convertedTodoResponse = TodoResponse.map((result)=>{
        return {
            TodoID: result.id,
            TodoName: result.todo_name,
            Location: result.location,
            Status: result.status,
            CompleteDate: (0,_utils_util__WEBPACK_IMPORTED_MODULE_7__/* .makeSerializable */ .w)(result.complete_date),
            Description: result.description
        };
    });
    // Todos-Tagsテーブルより
    const IntermediateTableResponse = await _libs_prisma__WEBPACK_IMPORTED_MODULE_2__/* ["default"].todos_Tags.findMany */ .Z.todos_Tags.findMany({});
    const convertedIntermediateTableResponse = IntermediateTableResponse.map((result)=>{
        return {
            TagID: result.tag_id,
            TodoID: result.todo_id
        };
    });
    // Tagsテーブルより
    const TagResponse = await _libs_prisma__WEBPACK_IMPORTED_MODULE_2__/* ["default"].tags.findMany */ .Z.tags.findMany({});
    const convertedTagResponse = TagResponse.map((result)=>{
        return {
            TagID: result.id,
            TagName: result.tag_name
        };
    });
    // カードの画像を取得
    const { data , error  } = await _libs_supabase__WEBPACK_IMPORTED_MODULE_4__/* .supabase.storage.from */ .O.storage.from("coverimages").list();
    // const convertedData = data?.map(() => {
    //   return { data: data, error: error };
    // });
    return {
        props: {
            body: {
                convertedTodoResponse,
                convertedIntermediateTableResponse,
                convertedTagResponse,
                data
            }
        }
    };
};
const Home = ({ body  })=>{
    const IntermediateTableArray = body.convertedIntermediateTableResponse;
    const TagArray = body.convertedTagResponse;
    const data = body.data;
    // const TodoIDArray = TodoArray.map((object) => {
    //   return object.TodoID;
    // });
    const ImageURLArray = data.map((data)=>{
        return data.name;
    });
    // TodoIDごとにタグを配列に
    const WithTagNameArray = IntermediateTableArray.map((intermediateTableObject)=>{
        TagArray.map((tagArrayObject)=>{
            // IntermediateTableArrayのTagIDとTagArrayのTagIDを比較する
            if (intermediateTableObject.TagID === tagArrayObject.TagID) {
                //一致すればそのIDを持つTagNameを配列の要素に追加する
                intermediateTableObject.TagName = tagArrayObject.TagName;
            }
        });
        return intermediateTableObject;
    });
    // TodoIDでタグを検索
    const SearchTag = (todoID)=>{
        return WithTagNameArray.filter((object)=>todoID === object.TodoID).map((row)=>{
            return row.TagName;
        });
    };
    // TodoIDで画像のURLを検索
    const SearchImageURL = (todoID)=>{
        const url = ImageURLArray.filter((object)=>object === `${todoID}.jpg`);
        if (url.length !== 0) {
            return "https://tazizrmuwhjllipqdxld.supabase.co" + "/storage/v1/object/public/coverimages/" + url;
        } else {
            return "https://tazizrmuwhjllipqdxld.supabase.co" + "/storage/v1/object/public/coverimages/404.png";
        }
    };
    //
    // const [inputTodo, setInputTodo] = useState("");
    // // Submitクリックで発火
    // const onClickSubmit = async () => {
    //   await todoClient.$post({
    //     body: {
    //       TodoName: inputTodo,
    //       Description: "",
    //       Location: "",
    //       Status: "Undone",
    //       // CompleteDate: "1970-01-01",
    //     },
    //   });
    //   setInputTodo("");
    //   router.push("/todos");
    // };
    // console.log(
    //   TodoArray.sort((a: Todo, b: Todo) => {
    //     return a.TodoID! < b.TodoID! ? -1 : 1;
    //   })
    // );
    const [TodoArray, setTodoArray] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(body.convertedTodoResponse);
    // クリックしたタグを持つTodoを抽出する関数
    const SearchTodoByTagName = (tagName)=>{
        // タグ名からタグIDを検索
        const TagID = body.convertedTagResponse.find((tag)=>tag.TagName === tagName).TagID;
        // そのタグIDを持つTodoIDを抽出
        const FilteredTodoID = body.convertedIntermediateTableResponse.filter((Todo)=>Todo.TagID === TagID).map((row)=>row.TodoID);
        // TodoIDでTodoを抽出
        const FilteredTodo = FilteredTodoID.map((TodoID)=>body.convertedTodoResponse.filter((row)=>row.TodoID === TodoID)).flat();
        setTodoArray(FilteredTodo);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Center, {
                    mt: [
                        4,
                        6,
                        12,
                        16,
                        20
                    ],
                    mb: [
                        10,
                        10,
                        10,
                        10,
                        10
                    ],
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                        mb: [
                            1,
                            2,
                            3,
                            4,
                            5
                        ],
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {
                            size: [
                                "sm",
                                "md",
                                "lg",
                                "xl",
                                "2xl"
                            ],
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Highlight, {
                                query: "100 Things",
                                styles: {
                                    px: "2",
                                    py: "1",
                                    rounded: "full",
                                    bg: "red.100"
                                },
                                children: "100 Things What To Do With You !"
                            })
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Center, {
                    mb: 10,
                    children: body.convertedTagResponse.map((tag)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Tag, {
                            onClick: ()=>SearchTodoByTagName(tag.TagName),
                            mr: 2,
                            children: tag.TagName
                        });
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Center, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                        templateColumns: [
                            "repeat(1, 1fr)",
                            "repeat(2, 1fr)",
                            "repeat(2, 1fr)",
                            "repeat(3, 1fr)",
                            "repeat(4, 1fr)"
                        ],
                        gap: [
                            8,
                            3,
                            10,
                            10,
                            6
                        ],
                        marginX: [
                            8,
                            8,
                            10,
                            10,
                            10
                        ],
                        mb: 10,
                        children: TodoArray.length !== 0 ? TodoArray.sort((a, b)=>{
                            return a.TodoID < b.TodoID ? -1 : 1;
                        }).map((todo)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.GridItem, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TodoCard__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                    TodoName: `#${todo.TodoID} ${todo.TodoName}`,
                                    Location: todo.Location,
                                    Key: todo.TodoID,
                                    Tags: SearchTag(todo.TodoID),
                                    CardImage: SearchImageURL(todo.TodoID)
                                })
                            }, todo.TodoID);
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: "No Data"
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1067:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ makeSerializable)
/* harmony export */ });
// Make an object serializable to JSON.
//
// Useful to convert an object which may contain non-serializeable data such as
// Dates to an object that doesn't
function makeSerializable(o) {
    return JSON.parse(JSON.stringify(o));
}


/***/ }),

/***/ 2885:
/***/ ((module) => {

module.exports = require("@supabase/supabase-js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6134:
/***/ ((module) => {

module.exports = import("@chakra-ui/icons");;

/***/ }),

/***/ 2210:
/***/ ((module) => {

module.exports = import("@chakra-ui/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [943], () => (__webpack_exec__(2911)));
module.exports = __webpack_exports__;

})();