"use strict";
(() => {
var exports = {};
exports.id = 818;
exports.ids = [818];
exports.modules = {

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

/***/ 6983:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1943);
/* harmony import */ var _libs_prisma__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49);
/* harmony import */ var _libs_supabase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4986);
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1067);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _components_Layout__WEBPACK_IMPORTED_MODULE_3__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _components_Layout__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const getServerSideProps = async ()=>{
    // やりたいことリストから取得
    const TodoResponse = await _libs_prisma__WEBPACK_IMPORTED_MODULE_4__/* ["default"].todos.findMany */ .Z.todos.findMany({});
    const convertedTodoResponse = TodoResponse.map((result)=>{
        return {
            TodoID: result.id,
            TodoName: result.todo_name,
            Location: result.location,
            Status: result.status,
            CompleteDate: (0,_utils_util__WEBPACK_IMPORTED_MODULE_6__/* .makeSerializable */ .w)(result.complete_date),
            Description: result.description
        };
    }).sort((a, b)=>{
        return a < b ? -1 : 1;
    });
    // 画像を取得
    //　フォルダを検索
    const { data , error  } = await _libs_supabase__WEBPACK_IMPORTED_MODULE_5__/* .supabase.storage.from */ .O.storage.from("images").list();
    // フォルダの配列
    const ImageFolderArray = data.map((row)=>row.name).filter((row)=>row !== ".emptyFolderPlaceholder");
    // 各フォルダ名で
    const Images = await Promise.all(ImageFolderArray.map(async (folder)=>{
        const { data , error  } = await _libs_supabase__WEBPACK_IMPORTED_MODULE_5__/* .supabase.storage.from */ .O.storage.from("images").list(folder);
        const convertedData = data?.map((data)=>`${folder}/${data.name}`).filter((row)=>row !== `${folder}/.emptyFolderPlaceholder`);
        return convertedData;
    }));
    return {
        props: {
            body: {
                convertedTodoResponse,
                Images
            }
        }
    };
};
const AlbumPage = ({ body  })=>{
    // Todo名のリスト
    const TodoList = body.convertedTodoResponse.map((todo)=>{
        return {
            TodoName: todo.TodoName,
            TodoID: todo.TodoID
        };
    });
    // サーバー上にある画像ファイル名を格納する変数
    const [imageURLs, setImageURLs] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(body.Images.flat());
    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    // サーバーにアップロードする画像ファイルを格納する変数
    const [importingFile, setImportingFiles] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    // ローディング状態を管理する変数
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    // プルダウンから取得されたTodoのValueを管理する変数
    const [selectedValue, setSelectedValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("1");
    // 追加ボタンクリックで発火
    const onClickSelect = ()=>{
        inputRef.current?.click();
    };
    // 削除ボタンクリックで発火
    const onClickRemove = (fileName)=>{
        setImportingFiles(importingFile.filter((file)=>file.name !== fileName));
    };
    // ファイルに変更があったら発火
    const handleFileChange = (e)=>{
        if (e.target.files) {
            const files = Array.from(e.target.files);
            setImportingFiles([
                ...importingFile,
                ...files
            ]);
        }
    };
    // アップロードボタンクリックで発火
    const onClickUpload = async (fileList)=>{
        // 画像をアップロードする関数
        const uploadStorage = async ({ fileList , bucketName  })=>{
            try {
                setIsLoading(true);
                // サーバーに何枚の写真があるかを確認
                const { data , error  } = await _libs_supabase__WEBPACK_IMPORTED_MODULE_5__/* .supabase.storage.from */ .O.storage.from("images").list(selectedValue);
                const convertedData = data?.map((data)=>data.name);
                // サーバー上の枚数
                const NumOfImagesOnServer = convertedData.length;
                // アップロードするファイルの数
                const NumOfFiles = fileList.length;
                for(let i = 0; i <= NumOfFiles - 1; i++){
                    // 送信するファイル(ひとつ)
                    const file = fileList[i];
                    // Bucket内でのファイル名
                    // (やりたいことID)-(i枚目)とする
                    const pathName = `${selectedValue}/${selectedValue}-${NumOfImagesOnServer + 1 + i}.jpg`;
                    // アップロード
                    const { data: data1 , error: error1  } = await _libs_supabase__WEBPACK_IMPORTED_MODULE_5__/* .supabase.storage.from */ .O.storage.from(bucketName).upload(pathName, file);
                    console.log(imageURLs);
                    setImageURLs([
                        ...imageURLs,
                        pathName
                    ]);
                    if (error1) throw error1;
                }
                setIsLoading(false);
                return "終了";
            } catch (error2) {
                console.error({
                    error: error2
                });
                setIsLoading(false);
                return {
                    pathname: null
                };
            }
        };
        // 画像が選択されていなければreturn
        if (!fileList || !fileList.length) return 1;
        // Bucketに画像をアップロード
        const { pathname  } = await uploadStorage({
            fileList,
            bucketName: "images"
        });
        if (pathname) console.debug({
            pathname
        });
        // selected images欄を空にする
        setImportingFiles([]);
    };
    // 新しいファイルがインポートされたら発火
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const formData = new FormData();
        for (let file of importingFile){
            formData.append(file.name, file, file.name);
        }
    }, [
        importingFile
    ]);
    const breakpoint = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useBreakpoint)();
    console.log(breakpoint);
    const [selectedImage, setSelectedImage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const onClickImage = (image)=>{
        onOpen();
        setSelectedImage(image);
    };
    const { isOpen , onOpen , onClose  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useDisclosure)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    m: 10,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            ml: "auto",
                            mr: "auto",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                                    textAlign: "center",
                                    mb: 5,
                                    children: "Upload Image"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                                    size: "md",
                                    mb: 5,
                                    textAlign: "center",
                                    children: "1. Select Todo"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Select, {
                                    value: selectedValue,
                                    onChange: (e)=>setSelectedValue(e.target.value),
                                    width: [
                                        200,
                                        350,
                                        350,
                                        350,
                                        350
                                    ],
                                    ml: "auto",
                                    mr: "auto",
                                    mb: 5,
                                    children: TodoList.map((todo)=>{
                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("option", {
                                            value: todo.TodoID,
                                            children: [
                                                "#",
                                                todo.TodoID,
                                                " ",
                                                todo.TodoName
                                            ]
                                        }, todo.TodoID);
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    mb: 5,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                                            size: "md",
                                            mb: 5,
                                            textAlign: "center",
                                            children: "2. Choose images to upload"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                            onClick: onClickSelect,
                                            ml: "auto",
                                            mr: "auto",
                                            display: "block",
                                            colorScheme: "linkedin",
                                            children: "Select Image"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                            id: "file-upload",
                                            name: "file-upload",
                                            type: "file",
                                            ref: inputRef,
                                            multiple: true,
                                            accept: "image/png, image/jpeg",
                                            onChange: handleFileChange,
                                            display: "none"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Center, {
                                            children: breakpoint === "base" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                                                mt: 2,
                                                maxWidth: 300,
                                                pl: 4,
                                                pr: 4,
                                                children: importingFile.length !== 0 ? importingFile.map((file, i)=>{
                                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tag, {
                                                        onClick: ()=>{
                                                            onClickRemove(file.name);
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.TagLabel, {
                                                                children: file.name
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.TagCloseButton, {})
                                                        ]
                                                    }, i);
                                                }) : ""
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
                                                mt: 2,
                                                maxWidth: 300,
                                                pl: 4,
                                                pr: 4,
                                                children: importingFile.length !== 0 ? importingFile.map((file, i)=>{
                                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tag, {
                                                        onClick: ()=>{
                                                            onClickRemove(file.name);
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.TagLabel, {
                                                                children: file.name
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.TagCloseButton, {})
                                                        ]
                                                    }, i);
                                                }) : ""
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Center, {
                                    mb: 5,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                        onClick: ()=>onClickUpload(importingFile),
                                        isLoading: isLoading ? true : false,
                                        variant: "solid",
                                        colorScheme: "facebook",
                                        children: "Upload!"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                                    textAlign: "center",
                                    mb: 5,
                                    children: "Album"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                    templateColumns: [
                                        "repeat(1, 1fr)",
                                        "repeat(2, 1fr)",
                                        "repeat(3, 1fr)",
                                        "repeat(4, 1fr)",
                                        "repeat(5, 1fr)"
                                    ],
                                    gap: [
                                        4,
                                        2,
                                        2,
                                        4,
                                        4
                                    ],
                                    children: imageURLs.length !== 0 ? imageURLs.map((image)=>{
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.GridItem, {
                                            onClick: ()=>onClickImage(image),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.AspectRatio, {
                                                ratio: 1,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                                    src: "https://tazizrmuwhjllipqdxld.supabase.co" + "/storage/v1/object/public/" + "images" + `/${image}`,
                                                    alt: "",
                                                    objectFit: "cover"
                                                })
                                            })
                                        }, image);
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                            children: "No Image"
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Modal, {
                    isOpen: isOpen,
                    onClose: onClose,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalOverlay, {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalContent, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalBody, {
                                    children: [
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                            src: "https://tazizrmuwhjllipqdxld.supabase.co" + "/storage/v1/object/public/" + "images" + `/${selectedImage}`,
                                            alt: "写真",
                                            width: "100%",
                                            mt: 4
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalFooter, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                        colorScheme: "blue",
                                        mr: 3,
                                        onClick: onClose,
                                        children: "Close"
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlbumPage);

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
var __webpack_exports__ = __webpack_require__.X(0, [943], () => (__webpack_exec__(6983)));
module.exports = __webpack_exports__;

})();