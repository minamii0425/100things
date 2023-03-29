(() => {
var exports = {};
exports.id = 857;
exports.ids = [857];
exports.modules = {

/***/ 7869:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Carousel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2210);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8278);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(782);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__]);
_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





// Here we have used react-icons package for the icons

// And react-slick as our Carousel Lib

// Settings for the slider
const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1
};
function Carousel(props) {
    // As we have used custom buttons, we need a reference variable to
    // change the state
    const [slider, setSlider] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);
    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useBreakpointValue)({
        base: "90%",
        md: "50%"
    });
    const side = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useBreakpointValue)({
        base: "30%",
        md: "40px"
    });
    // This list contains all the data for carousels
    // This can be static or loaded from a server
    // const cards = [
    //   {
    //     title: "Design Projects 1",
    //     text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    //     image:
    //       "https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    //   },
    //   {
    //     title: "Design Projects 2",
    //     text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    //     image:
    //       "https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80",
    //   },
    //   {
    //     title: "Design Projects 3",
    //     text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    //     image:
    //       "https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    //   },
    // ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
        position: "relative",
        height: "300px",
        width: "full",
        overflow: "hidden",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "stylesheet",
                type: "text/css",
                charSet: "UTF-8",
                href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "stylesheet",
                type: "text/css",
                href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            }),
            props.cards.length !== 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                        "aria-label": "left-arrow",
                        variant: "ghost",
                        position: "absolute",
                        left: side,
                        top: top,
                        transform: "translate(0%, -50%)",
                        zIndex: 2,
                        onClick: ()=>slider?.slickPrev(),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__.BiLeftArrowAlt, {
                            size: "40px"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                        "aria-label": "right-arrow",
                        variant: "ghost",
                        position: "absolute",
                        right: side,
                        top: top,
                        transform: "translate(0%, -50%)",
                        zIndex: 2,
                        onClick: ()=>slider?.slickNext(),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__.BiRightArrowAlt, {
                            size: "40px"
                        })
                    })
                ]
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
                src: "https://tazizrmuwhjllipqdxld.supabase.co" + "/storage/v1/object/public/" + "coverimages" + "/404.png",
                alt: "No Image",
                width: "100%",
                height: "300px",
                objectFit: "cover"
            }),
            props.cards.length !== 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_6___default()), {
                ...settings,
                ref: (slider)=>setSlider(slider),
                children: props.cards.map((card, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        height: "sm",
                        position: "relative",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundImage: `url(${card.image})`
                    }, index))
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                children: "画像なし"
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 49:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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

/***/ 5236:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
/* harmony import */ var _libs_supabase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4986);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1067);
/* harmony import */ var _libs_prisma__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1943);
/* harmony import */ var _components_Carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7869);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_axiosInstancesServerside__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5945);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3847);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _components_Layout__WEBPACK_IMPORTED_MODULE_5__, _components_Carousel__WEBPACK_IMPORTED_MODULE_6__, _app__WEBPACK_IMPORTED_MODULE_9__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _components_Layout__WEBPACK_IMPORTED_MODULE_5__, _components_Carousel__WEBPACK_IMPORTED_MODULE_6__, _app__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const getServerSideProps = async ({ query  })=>{
    // 変数
    const ID = Number(query.id);
    // パブリックなBucketから画像の取得
    const { data: { publicUrl  }  } = _libs_supabase__WEBPACK_IMPORTED_MODULE_2__/* .supabase.storage.from */ .O.storage.from("images").getPublicUrl(`${ID}.jpg`);
    // Todosテーブルより
    const TodoResponse = await _libs_prisma__WEBPACK_IMPORTED_MODULE_4__/* ["default"].todos.findUniqueOrThrow */ .Z.todos.findUniqueOrThrow({
        where: {
            id: ID
        }
    });
    const convertedTodoResponse = {
        TodoID: TodoResponse.id,
        TodoName: TodoResponse.todo_name,
        Location: TodoResponse.location,
        Status: TodoResponse.status,
        CompleteDate: (0,_utils_util__WEBPACK_IMPORTED_MODULE_10__/* .makeSerializable */ .w)(TodoResponse.complete_date),
        Description: TodoResponse.description
    };
    // Todos-Tagsテーブルより
    const IntermediateTableResponse = await _libs_prisma__WEBPACK_IMPORTED_MODULE_4__/* ["default"].todos_Tags.findMany */ .Z.todos_Tags.findMany({
        where: {
            todo_id: ID
        }
    });
    const convertedIntermediateTableResponse = IntermediateTableResponse.map((result)=>{
        return {
            TagID: result.tag_id,
            TodoID: result.todo_id
        };
    });
    // Tagsテーブルより
    const TagResponse = await _libs_prisma__WEBPACK_IMPORTED_MODULE_4__/* ["default"].tags.findMany */ .Z.tags.findMany({});
    const convertedTagResponse = TagResponse.map((result)=>{
        return {
            TagID: result.id,
            TagName: result.tag_name
        };
    });
    // Commentテーブルより
    const CommentResponse = await _libs_prisma__WEBPACK_IMPORTED_MODULE_4__/* ["default"].comments.findMany */ .Z.comments.findMany({});
    const convertedCommentResponse = CommentResponse.map((result)=>{
        return {
            CommentID: result.id,
            CommentText: result.comment_text,
            CommentAuthor: result.comment_author,
            CommentAvatar: result.comment_avatar
        };
    });
    // Todos-Commentテーブルより
    const IntermediateCommentTableResponse = await _libs_prisma__WEBPACK_IMPORTED_MODULE_4__/* ["default"].todos_Comments.findMany */ .Z.todos_Comments.findMany({
        where: {
            todo_id: ID
        }
    });
    const convertedIntermediateCommentTableResponse = IntermediateCommentTableResponse.map((result)=>{
        return {
            CommentID: result.comment_id,
            TodoID: result.todo_id
        };
    });
    // ユーザー情報の取得
    const user = await _libs_prisma__WEBPACK_IMPORTED_MODULE_4__/* ["default"].profiles.findMany */ .Z.profiles.findMany({});
    const convertedUser = user.map((result)=>{
        return {
            ProfileID: result.id,
            UpdatedAt: (0,_utils_util__WEBPACK_IMPORTED_MODULE_10__/* .makeSerializable */ .w)(result.updated_at),
            UserName: result.username,
            FullName: result.full_name,
            AvatarURL: result.avatar_url,
            WebSite: result.website
        };
    });
    // 画像の取得
    const { data , error  } = await _libs_supabase__WEBPACK_IMPORTED_MODULE_2__/* .supabase.storage.from */ .O.storage.from("images").list(String(ID));
    return {
        props: {
            body: {
                convertedTodoResponse,
                convertedIntermediateTableResponse,
                convertedTagResponse,
                convertedCommentResponse,
                convertedIntermediateCommentTableResponse,
                publicUrl,
                convertedUser,
                ImageURLs: data
            }
        }
    };
};
const TodoDetailForm = ({ body  })=>{
    // console.log(process.env.NEXT_PUBLIC_NODE_ENV);
    // console.log(process.env.NODE_ENV);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const id = Number(router.query.id);
    const LoginUserID = (0,react__WEBPACK_IMPORTED_MODULE_7__.useContext)(_app__WEBPACK_IMPORTED_MODULE_9__.SessionContext);
    const Users = body.convertedUser;
    const user = Users.filter((row)=>row.ProfileID === LoginUserID)[0];
    const session = (0,react__WEBPACK_IMPORTED_MODULE_7__.useContext)(_app__WEBPACK_IMPORTED_MODULE_9__.SessionContext);
    const IMAGE_URL_DOMAIN = "https://tazizrmuwhjllipqdxld.supabase.co" + "/storage/v1/object/public/images";
    const CarouselCards = body.ImageURLs?.map((image)=>{
        return {
            title: "",
            text: "",
            image: IMAGE_URL_DOMAIN + `/${id}/${image.name}`
        };
    });
    // Todoテーブル
    const TodoArray = body.convertedTodoResponse;
    // Tagsテーブル
    const TagArray = body.convertedTagResponse;
    // Commentテーブル
    const CommentArray = body.convertedCommentResponse;
    // 中間テーブル(Todo-コメント)
    const TodoCommentArray = body.convertedIntermediateCommentTableResponse;
    // 中間テーブル(Todo-タグ)
    const TodoTagArray = body.convertedIntermediateTableResponse;
    // このTodoIDが持っているタグIDとタグ名の配列
    const WithTagNameArray = TodoTagArray.map((intermediateTableObject)=>{
        TagArray.map((tagArrayObject)=>{
            // IntermediateTableArrayのTagIDとTagArrayのTagIDを比較する
            if (intermediateTableObject.TagID === tagArrayObject.TagID) {
                //一致すればそのIDを持つTagNameを配列の要素に追加する
                intermediateTableObject.TagName = tagArrayObject.TagName;
            }
        });
        return intermediateTableObject;
    });
    // このTodoIDが持っているタグIDとコメントの配列
    const WithCommentTextArray = TodoCommentArray.map((intermediateCommentTableObject)=>{
        CommentArray.map((commentArrayObject)=>{
            // IntermediateTableArrayのTagIDとTagArrayのTagIDを比較する
            if (intermediateCommentTableObject.CommentID === commentArrayObject.CommentID) {
                //一致すればそのIDを持つCommentTextを配列の要素に追加する
                intermediateCommentTableObject.CommentText = commentArrayObject.CommentText;
                //一致すればそのIDを持つCommentAuthorを配列の要素に追加する
                intermediateCommentTableObject.CommentAuthor = commentArrayObject.CommentAuthor;
                //一致すればそのIDを持つCommentAvatarを配列の要素に追加する
                intermediateCommentTableObject.CommentAvatar = commentArrayObject.CommentAvatar;
            }
        });
        return intermediateCommentTableObject;
    });
    // 日付のフォーマット変更
    const Date = TodoArray.CompleteDate && TodoArray.CompleteDate;
    const convertedCompleteDate = Date && Date.substr(0, 10);
    // あるIDのタグ名のみ抜き出す
    const SearchTag = (todoID, data)=>{
        return data.filter((object)=>todoID === object.TodoID).map((row)=>{
            return row.TagName;
        });
    };
    // あるIDのコメントのみ抜き出す
    const SearchComment = (todoID, data)=>{
        const filteredData = data.filter((object)=>todoID === object.TodoID);
        const mappedData = filteredData.map((row)=>({
                CommentAuthor: row.CommentAuthor,
                CommentText: row.CommentText,
                CommentAvatar: row.CommentAvatar
            }));
        return mappedData;
    };
    // Description--------------------------------------------------------
    const [inputDescription, setInputDescription] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(TodoArray.Description);
    const onSubmitDescription = async (inputData)=>{
        // エラーハンドリング
        // 値の変更なしの場合
        if (inputData === TodoArray.Description) {
            return;
        }
        // 入力値が空欄の場合
        if (inputData === "") {
            setInputDescription(TodoArray.Description);
            return;
        }
        await _utils_axiosInstancesServerside__WEBPACK_IMPORTED_MODULE_8__/* .todoClient._id */ .EA._id(id).$put({
            body: {
                Description: inputData,
                CompleteDate: inputCompleteDate
            },
            query: {
                TodoID: id
            }
        });
    };
    // タグ--------------------------------------------------------
    const [inputTag, setInputTag] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("＋");
    const [TagFromServer, setTagFromServer] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(SearchTag(id, WithTagNameArray));
    const onClickTag = async (tag)=>{
        const tagInThisPage = await _utils_axiosInstancesServerside__WEBPACK_IMPORTED_MODULE_8__/* .tagClient.$get */ .KM.$get({});
        const All = await _utils_axiosInstancesServerside__WEBPACK_IMPORTED_MODULE_8__/* .todoTagClient.$get */ .Ox.$get({});
        // クリックされたタグ名のID
        const clickedTagID = tagInThisPage.filter((row)=>row.TagName === tag).map((row)=>row.TagID);
        // クリックされたタグ名を持つ
        const clickedTodoTagID = All.filter((row)=>row.TagID === clickedTagID[0] && row.TodoID === id).map((row)=>row.Todo_TagID);
        setTagFromServer(TagFromServer.filter((tagName)=>tagName !== tag));
        // クリックされたタグ名のIDを持つ要素を削除
        await _utils_axiosInstancesServerside__WEBPACK_IMPORTED_MODULE_8__/* .todoTagClient._id */ .Ox._id(clickedTodoTagID[0]).$delete({
            query: {
                Todo_TagID: clickedTodoTagID[0]
            }
        });
    };
    const onSubmitTag = async (inputData)=>{
        // エラーハンドリング
        // 値の変更なしの場合
        if (inputTag === "＋") {
            return;
        }
        // 入力値が空欄の場合
        if (inputTag === "") {
            setInputTag("＋");
            return;
        }
        // そのTodoが入力された値をすでにタグとして持っている場合
        if (TagFromServer.indexOf(inputData) >= 0) {
            return;
        }
        // 入力されたタグがサーバーにあるか確認
        // Todoが持っているタグをサーバーから取得
        const newTags = (await _utils_axiosInstancesServerside__WEBPACK_IMPORTED_MODULE_8__/* .tagClient.$get */ .KM.$get()).map((tag)=>{
            return tag.TagName;
        });
        // 入力されたタグがTodoになければTagテーブルに送信
        if (!newTags.includes(inputData)) {
            const submit = await _utils_axiosInstancesServerside__WEBPACK_IMPORTED_MODULE_8__/* .tagClient.$post */ .KM.$post({
                body: {
                    TagName: inputData
                }
            });
            // Todoと中間テーブルに送信
            await _utils_axiosInstancesServerside__WEBPACK_IMPORTED_MODULE_8__/* .todoTagClient.$post */ .Ox.$post({
                body: {
                    TodoID: id,
                    TagID: Number(submit)
                }
            });
        // 入力されたタグがすでにTodoにある場合
        } else {
            // 入力したタグのタグIDを取得
            const TagID = TagArray.filter((item)=>item.TagName === inputData)[0].TagID;
            // Todoと中間テーブルに送信
            await _utils_axiosInstancesServerside__WEBPACK_IMPORTED_MODULE_8__/* .todoTagClient.$post */ .Ox.$post({
                body: {
                    TodoID: id,
                    TagID: TagID
                }
            });
        }
        // 投稿後、タグの再レンダリング
        setTagFromServer([
            ...TagFromServer,
            inputData
        ]);
        // 送信後、＋に戻す
        setInputTag("＋");
    };
    // Complete Date--------------------------------------------------------
    const [inputCompleteDate, setInputCompleteDate] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(convertedCompleteDate);
    const onSubmitCompleteDate = async (inputData)=>{
        // エラーハンドリング
        // 値の変更なしの場合
        if (inputData === convertedCompleteDate) {
            return;
        }
        // 入力値が空欄の場合
        if (inputData === "") {
            setInputCompleteDate(convertedCompleteDate);
            return;
        }
        await _utils_axiosInstancesServerside__WEBPACK_IMPORTED_MODULE_8__/* .todoClient._id */ .EA._id(id).$put({
            body: {
                CompleteDate: inputData
            },
            query: {
                TodoID: id
            }
        });
    };
    // Location--------------------------------------------------------
    const [inputLocation, setInputLocation] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(TodoArray.Location);
    const onSubmitLocation = async (inputData)=>{
        // エラーハンドリング
        // 値の変更なしの場合
        if (inputData === TodoArray.Location) {
            return;
        }
        // 入力値が空欄の場合
        if (inputLocation === "") {
            setInputLocation(TodoArray.Location);
            return;
        }
        await _utils_axiosInstancesServerside__WEBPACK_IMPORTED_MODULE_8__/* .todoClient._id */ .EA._id(id).$put({
            body: {
                Location: inputData,
                CompleteDate: inputCompleteDate
            },
            query: {
                TodoID: id
            }
        });
    };
    // Status--------------------------------------------------------
    const [inputStatus, setInputStatus] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(TodoArray.Status);
    const onSubmitStatus = async (string)=>{
        await _utils_axiosInstancesServerside__WEBPACK_IMPORTED_MODULE_8__/* .todoClient._id */ .EA._id(id).$put({
            body: {
                Status: string,
                CompleteDate: inputCompleteDate
            },
            query: {
                TodoID: id
            }
        });
    };
    // Comments--------------------------------------------------------
    const [inputComment, setInputComment] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("");
    const [CommentFromServer, setCommentFromServer] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(SearchComment(id, WithCommentTextArray));
    const onSubmitComment = async (inputData)=>{
        // エラーハンドリング
        // 入力値が空欄の場合
        if (inputComment === "") {
            return;
        }
        // 入力されたタグがTodoになければTagテーブルに送信
        const submit = await _utils_axiosInstancesServerside__WEBPACK_IMPORTED_MODULE_8__/* .commentClient.$post */ .o0.$post({
            body: {
                CommentText: inputData,
                CommentAuthor: user.FullName,
                CommentAvatar: user.AvatarURL
            }
        });
        // Todoと中間テーブルに送信
        await _utils_axiosInstancesServerside__WEBPACK_IMPORTED_MODULE_8__/* .todoCommentClient.$post */ .dJ.$post({
            body: {
                TodoID: id,
                CommentID: Number(submit)
            }
        });
        // 投稿後、タグの再レンダリング
        setCommentFromServer([
            ...CommentFromServer,
            {
                CommentText: inputData,
                CommentAuthor: user.FullName,
                CommentAvatar: user.AvatarURL
            }
        ]);
        // 送信後、入力フォームを空に戻す
        setInputComment("");
    };
    // enter押下時のsubmitを防止
    const onEnterDown = (e)=>{
        if (e.code === "Enter") e.preventDefault();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                padding: 10,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        mb: "1",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                                        size: "lg",
                                        mb: "5",
                                        children: TodoArray.TodoName
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Spacer, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                        onClick: ()=>router.push("/todos"),
                                        variant: "ghost",
                                        children: "←Back"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                mb: "3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Carousel__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    cards: CarouselCards
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Editable, {
                                value: inputDescription,
                                onSubmit: ()=>onSubmitDescription(inputDescription),
                                placeholder: session === undefined ? "ログインして編集" : "クリックで編集",
                                isDisabled: session === undefined ? true : false,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.EditablePreview, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.EditableTextarea, {
                                        onChange: (e)=>setInputDescription(e.target.value)
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            mb: "4",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    mb: "2",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        size: "xl",
                                        as: "b",
                                        children: "Tags"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
                                    children: [
                                        TagFromServer.map((tag)=>{
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tag, {
                                                onClick: ()=>onClickTag(tag),
                                                children: tag
                                            }, tag);
                                        }),
                                        session !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Editable, {
                                            value: inputTag,
                                            onSubmit: ()=>onSubmitTag(inputTag),
                                            isDisabled: session === undefined ? true : false,
                                            onClick: ()=>setInputTag(""),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.EditablePreview, {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.EditableInput, {
                                                    onChange: (e)=>setInputTag(e.target.value),
                                                    onKeyDown: (e)=>onEnterDown(e)
                                                })
                                            ]
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                            children: "ログインして編集"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            mb: "4",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Wrap, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.WrapItem, {
                                        w: "200px",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                                    mb: "2",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                                        size: "xl",
                                                        as: "b",
                                                        children: "Complete Date"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Editable, {
                                                    defaultValue: inputCompleteDate,
                                                    onSubmit: ()=>onSubmitCompleteDate(inputCompleteDate),
                                                    placeholder: session === undefined ? "ログインして編集" : "クリックで編集",
                                                    isDisabled: session === undefined ? true : false,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.EditablePreview, {}),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.EditableInput, {
                                                            type: "date",
                                                            onChange: (e)=>setInputCompleteDate(e.target.value)
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.WrapItem, {
                                        w: "200px",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                                    mb: "2",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                                        size: "xl",
                                                        as: "b",
                                                        children: "Location"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Editable, {
                                                    value: inputLocation,
                                                    onSubmit: ()=>onSubmitLocation(inputLocation),
                                                    placeholder: session === undefined ? "ログインして編集" : "クリックで編集",
                                                    isDisabled: session === undefined ? true : false,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.EditablePreview, {
                                                            width: "200"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.EditableInput, {
                                                            width: "200",
                                                            onChange: (e)=>setInputLocation(e.target.value),
                                                            onKeyDown: (e)=>onEnterDown(e)
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.WrapItem, {
                                        w: "200px",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                                    mb: "2",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                                        size: "xl",
                                                        as: "b",
                                                        children: "Status"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Select, {
                                                    defaultValue: inputStatus,
                                                    onChange: (e)=>onSubmitStatus(e.target.value),
                                                    disabled: session === undefined ? true : false,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                            value: "Undone",
                                                            children: "Undone"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                            value: "Planning",
                                                            children: "Planning"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                            value: "Done",
                                                            children: "Done"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                mb: "2",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                    size: "xl",
                                    as: "b",
                                    children: "Comments"
                                })
                            }),
                            CommentFromServer.length !== 0 ? CommentFromServer.map((comment, i)=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    mb: "5",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
                                                name: comment.CommentAuthor,
                                                src: comment.CommentAvatar
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                                fontSize: "sm",
                                                children: comment.CommentText
                                            })
                                        ]
                                    })
                                }, i);
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                mt: 3,
                                mb: 5,
                                children: "No Comments"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                        mb: "5",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
                                                    name: user ? user.FullName : "",
                                                    src: user ? user.AvatarURL : ""
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Textarea, {
                                                    height: "100px",
                                                    fontSize: "sm",
                                                    value: inputComment,
                                                    onChange: (e)=>setInputComment(e.target.value),
                                                    disabled: session === undefined ? true : false,
                                                    placeholder: session === undefined ? "ログインしてコメント" : ""
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Spacer, {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                                onClick: ()=>onSubmitComment(inputComment),
                                                disabled: session === undefined ? true : false,
                                                colorScheme: "purple",
                                                children: "Submit Comment"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoDetailForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5945:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "o0": () => (/* binding */ commentClient),
  "KM": () => (/* binding */ tagClient),
  "EA": () => (/* binding */ todoClient),
  "dJ": () => (/* binding */ todoCommentClient),
  "Ox": () => (/* binding */ todoTagClient)
});

// UNUSED EXPORTS: profileClient

;// CONCATENATED MODULE: external "@aspida/axios"
const axios_namespaceObject = require("@aspida/axios");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios_namespaceObject);
;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: external "https"
const external_https_namespaceObject = require("https");
var external_https_default = /*#__PURE__*/__webpack_require__.n(external_https_namespaceObject);
;// CONCATENATED MODULE: external "aspida"
const external_aspida_namespaceObject = require("aspida");
;// CONCATENATED MODULE: ./aspida_api/todos/$api.ts

const api = ({ baseURL , fetch  })=>{
    const prefix = (baseURL === undefined ? "http://localhost:3011/api/" : baseURL).replace(/\/$/, "");
    const PATH0 = "/todos";
    const GET = "GET";
    const POST = "POST";
    const PUT = "PUT";
    const DELETE = "DELETE";
    return {
        _id: (val0)=>{
            const prefix0 = `${PATH0}/${val0}`;
            return {
                /**
         * 指定したIDを持つTodoを取得する。
         * @returns Successful operation
         */ get: (option)=>fetch(prefix, prefix0, GET, option).json(),
                /**
         * 指定したIDを持つTodoを取得する。
         * @returns Successful operation
         */ $get: (option)=>fetch(prefix, prefix0, GET, option).json().then((r)=>r.body),
                /**
         * 指定したIDを持つTodoの削除を行う。
         * @returns Successful operation
         */ delete: (option)=>fetch(prefix, prefix0, DELETE, option).json(),
                /**
         * 指定したIDを持つTodoの削除を行う。
         * @returns Successful operation
         */ $delete: (option)=>fetch(prefix, prefix0, DELETE, option).json().then((r)=>r.body),
                /**
         * 指定したIDを持つTodoを更新する。
         * @returns Successful
         */ put: (option)=>fetch(prefix, prefix0, PUT, option).json(),
                /**
         * 指定したIDを持つTodoを更新する。
         * @returns Successful
         */ $put: (option)=>fetch(prefix, prefix0, PUT, option).json().then((r)=>r.body),
                $path: (option)=>`${prefix}${prefix0}${option && option.query ? `?${(0,external_aspida_namespaceObject.dataToURLString)(option.query)}` : ""}`
            };
        },
        /**
     * 登録されているすべてのTodoを取得する。
     * @returns Successful operation
     */ get: (option)=>fetch(prefix, PATH0, GET, option).json(),
        /**
     * 登録されているすべてのTodoを取得する。
     * @returns Successful operation
     */ $get: (option)=>fetch(prefix, PATH0, GET, option).json().then((r)=>r.body),
        /**
     * Todoの登録を行う。
     * @returns Successful operation
     */ post: (option)=>fetch(prefix, PATH0, POST, option).json(),
        /**
     * Todoの登録を行う。
     * @returns Successful operation
     */ $post: (option)=>fetch(prefix, PATH0, POST, option).json().then((r)=>r.body),
        /**
     * Todoの全件削除を行う。
     * @returns Successful operation
     */ delete: (option)=>fetch(prefix, PATH0, DELETE, option).json(),
        /**
     * Todoの全件削除を行う。
     * @returns Successful operation
     */ $delete: (option)=>fetch(prefix, PATH0, DELETE, option).json().then((r)=>r.body),
        $path: ()=>`${prefix}${PATH0}`
    };
};
/* harmony default export */ const $api = (api);

;// CONCATENATED MODULE: ./aspida_api/tags/$api.ts

const $api_api = ({ baseURL , fetch  })=>{
    const prefix = (baseURL === undefined ? "http://localhost:3011/api/" : baseURL).replace(/\/$/, "");
    const PATH0 = "/tags";
    const GET = "GET";
    const POST = "POST";
    const PUT = "PUT";
    const DELETE = "DELETE";
    return {
        _id: (val0)=>{
            const prefix0 = `${PATH0}/${val0}`;
            return {
                /**
         * あるIDに登録されたタグを取得する。
         * @returns Successful operation
         */ get: (option)=>fetch(prefix, prefix0, GET, option).json(),
                /**
         * あるIDに登録されたタグを取得する。
         * @returns Successful operation
         */ $get: (option)=>fetch(prefix, prefix0, GET, option).json().then((r)=>r.body),
                /**
         * あるIDを持つタグの削除を行う。
         * @returns Successful operation
         */ delete: (option)=>fetch(prefix, prefix0, DELETE, option).json(),
                /**
         * あるIDを持つタグの削除を行う。
         * @returns Successful operation
         */ $delete: (option)=>fetch(prefix, prefix0, DELETE, option).json().then((r)=>r.body),
                /**
         * 指定したIDを持つタグを更新する。
         * @returns Successful
         */ put: (option)=>fetch(prefix, prefix0, PUT, option).json(),
                /**
         * 指定したIDを持つタグを更新する。
         * @returns Successful
         */ $put: (option)=>fetch(prefix, prefix0, PUT, option).json().then((r)=>r.body),
                $path: (option)=>`${prefix}${prefix0}${option && option.query ? `?${(0,external_aspida_namespaceObject.dataToURLString)(option.query)}` : ""}`
            };
        },
        /**
     * タグを全件取得する。
     * @returns Successful operation
     */ get: (option)=>fetch(prefix, PATH0, GET, option).json(),
        /**
     * タグを全件取得する。
     * @returns Successful operation
     */ $get: (option)=>fetch(prefix, PATH0, GET, option).json().then((r)=>r.body),
        /**
     * タグの登録を行う。
     * @returns Successful operation
     */ post: (option)=>fetch(prefix, PATH0, POST, option).json(),
        /**
     * タグの登録を行う。
     * @returns Successful operation
     */ $post: (option)=>fetch(prefix, PATH0, POST, option).json().then((r)=>r.body),
        /**
     * タグの複数削除を行う。
     * @returns Successful operation
     */ delete: (option)=>fetch(prefix, PATH0, DELETE, option).json(),
        /**
     * タグの複数削除を行う。
     * @returns Successful operation
     */ $delete: (option)=>fetch(prefix, PATH0, DELETE, option).json().then((r)=>r.body),
        $path: ()=>`${prefix}${PATH0}`
    };
};
/* harmony default export */ const tags_$api = ($api_api);

;// CONCATENATED MODULE: ./aspida_api/comments/$api.ts

const comments_$api_api = ({ baseURL , fetch  })=>{
    const prefix = (baseURL === undefined ? "http://localhost:3011/api/" : baseURL).replace(/\/$/, "");
    const PATH0 = "/comments";
    const GET = "GET";
    const POST = "POST";
    const PUT = "PUT";
    const DELETE = "DELETE";
    return {
        _id: (val0)=>{
            const prefix0 = `${PATH0}/${val0}`;
            return {
                /**
         * 指定したIDを持つコメントを取得する。
         * @returns Successful operation
         */ get: (option)=>fetch(prefix, prefix0, GET, option).json(),
                /**
         * 指定したIDを持つコメントを取得する。
         * @returns Successful operation
         */ $get: (option)=>fetch(prefix, prefix0, GET, option).json().then((r)=>r.body),
                /**
         * 指定したIDを持つコメントの削除を行う。
         * @returns Successful operation
         */ delete: (option)=>fetch(prefix, prefix0, DELETE, option).json(),
                /**
         * 指定したIDを持つコメントの削除を行う。
         * @returns Successful operation
         */ $delete: (option)=>fetch(prefix, prefix0, DELETE, option).json().then((r)=>r.body),
                /**
         * 指定したIDを持つコメントを更新する。
         * @returns Successful
         */ put: (option)=>fetch(prefix, prefix0, PUT, option).json(),
                /**
         * 指定したIDを持つコメントを更新する。
         * @returns Successful
         */ $put: (option)=>fetch(prefix, prefix0, PUT, option).json().then((r)=>r.body),
                $path: (option)=>`${prefix}${prefix0}${option && option.query ? `?${(0,external_aspida_namespaceObject.dataToURLString)(option.query)}` : ""}`
            };
        },
        /**
     * 登録されているすべてのコメントを取得する。
     * @returns Successful operation
     */ get: (option)=>fetch(prefix, PATH0, GET, option).json(),
        /**
     * 登録されているすべてのコメントを取得する。
     * @returns Successful operation
     */ $get: (option)=>fetch(prefix, PATH0, GET, option).json().then((r)=>r.body),
        /**
     * コメントの登録を行う。
     * @returns Successful operation
     */ post: (option)=>fetch(prefix, PATH0, POST, option).json(),
        /**
     * コメントの登録を行う。
     * @returns Successful operation
     */ $post: (option)=>fetch(prefix, PATH0, POST, option).json().then((r)=>r.body),
        /**
     * コメントの全件削除を行う。
     * @returns Successful operation
     */ delete: (option)=>fetch(prefix, PATH0, DELETE, option).json(),
        /**
     * コメントの全件削除を行う。
     * @returns Successful operation
     */ $delete: (option)=>fetch(prefix, PATH0, DELETE, option).json().then((r)=>r.body),
        $path: ()=>`${prefix}${PATH0}`
    };
};
/* harmony default export */ const comments_$api = (comments_$api_api);

;// CONCATENATED MODULE: ./aspida_api/todos_comments/$api.ts

const todos_comments_$api_api = ({ baseURL , fetch  })=>{
    const prefix = (baseURL === undefined ? "http://localhost:3011/api/" : baseURL).replace(/\/$/, "");
    const PATH0 = "/todos_comments";
    const GET = "GET";
    const POST = "POST";
    const PUT = "PUT";
    const DELETE = "DELETE";
    return {
        _id: (val0)=>{
            const prefix0 = `${PATH0}/${val0}`;
            return {
                /**
         * あるIDに登録されたTodos-コメントを取得する。
         * @returns Successful operation
         */ get: (option)=>fetch(prefix, prefix0, GET, option).json(),
                /**
         * あるIDに登録されたTodos-コメントを取得する。
         * @returns Successful operation
         */ $get: (option)=>fetch(prefix, prefix0, GET, option).json().then((r)=>r.body),
                /**
         * あるIDを持つTodos-コメントの削除を行う。
         * @returns Successful operation
         */ delete: (option)=>fetch(prefix, prefix0, DELETE, option).json(),
                /**
         * あるIDを持つTodos-コメントの削除を行う。
         * @returns Successful operation
         */ $delete: (option)=>fetch(prefix, prefix0, DELETE, option).json().then((r)=>r.body),
                /**
         * 指定したIDを持つTodos-コメントを更新する。
         * @returns Successful
         */ put: (option)=>fetch(prefix, prefix0, PUT, option).json(),
                /**
         * 指定したIDを持つTodos-コメントを更新する。
         * @returns Successful
         */ $put: (option)=>fetch(prefix, prefix0, PUT, option).json().then((r)=>r.body),
                $path: (option)=>`${prefix}${prefix0}${option && option.query ? `?${(0,external_aspida_namespaceObject.dataToURLString)(option.query)}` : ""}`
            };
        },
        /**
     * 登録されているすべてのTodos-コメントを取得する。
     * @returns Successful operation
     */ get: (option)=>fetch(prefix, PATH0, GET, option).json(),
        /**
     * 登録されているすべてのTodos-コメントを取得する。
     * @returns Successful operation
     */ $get: (option)=>fetch(prefix, PATH0, GET, option).json().then((r)=>r.body),
        /**
     * Todo-コメントの登録を行う。
     * @returns Successful operation
     */ post: (option)=>fetch(prefix, PATH0, POST, option).json(),
        /**
     * Todo-コメントの登録を行う。
     * @returns Successful operation
     */ $post: (option)=>fetch(prefix, PATH0, POST, option).json().then((r)=>r.body),
        /**
     * Todo-コメントの複数削除を行う。
     * @returns Successful operation
     */ delete: (option)=>fetch(prefix, PATH0, DELETE, option).json(),
        /**
     * Todo-コメントの複数削除を行う。
     * @returns Successful operation
     */ $delete: (option)=>fetch(prefix, PATH0, DELETE, option).json().then((r)=>r.body),
        $path: ()=>`${prefix}${PATH0}`
    };
};
/* harmony default export */ const todos_comments_$api = (todos_comments_$api_api);

;// CONCATENATED MODULE: ./aspida_api/todos_tags/$api.ts

const todos_tags_$api_api = ({ baseURL , fetch  })=>{
    const prefix = (baseURL === undefined ? "http://localhost:3011/api/" : baseURL).replace(/\/$/, "");
    const PATH0 = "/todos_tags";
    const GET = "GET";
    const POST = "POST";
    const PUT = "PUT";
    const DELETE = "DELETE";
    return {
        _id: (val0)=>{
            const prefix0 = `${PATH0}/${val0}`;
            return {
                /**
         * あるIDに登録されたTodos-タグを取得する。
         * @returns Successful operation
         */ get: (option)=>fetch(prefix, prefix0, GET, option).json(),
                /**
         * あるIDに登録されたTodos-タグを取得する。
         * @returns Successful operation
         */ $get: (option)=>fetch(prefix, prefix0, GET, option).json().then((r)=>r.body),
                /**
         * あるIDを持つTodos-タグの削除を行う。
         * @returns Successful operation
         */ delete: (option)=>fetch(prefix, prefix0, DELETE, option).json(),
                /**
         * あるIDを持つTodos-タグの削除を行う。
         * @returns Successful operation
         */ $delete: (option)=>fetch(prefix, prefix0, DELETE, option).json().then((r)=>r.body),
                /**
         * 指定したIDを持つTodos-タグを更新する。
         * @returns Successful
         */ put: (option)=>fetch(prefix, prefix0, PUT, option).json(),
                /**
         * 指定したIDを持つTodos-タグを更新する。
         * @returns Successful
         */ $put: (option)=>fetch(prefix, prefix0, PUT, option).json().then((r)=>r.body),
                $path: (option)=>`${prefix}${prefix0}${option && option.query ? `?${(0,external_aspida_namespaceObject.dataToURLString)(option.query)}` : ""}`
            };
        },
        /**
     * 登録されているすべてのTodos-タグを取得する。
     * @returns Successful operation
     */ get: (option)=>fetch(prefix, PATH0, GET, option).json(),
        /**
     * 登録されているすべてのTodos-タグを取得する。
     * @returns Successful operation
     */ $get: (option)=>fetch(prefix, PATH0, GET, option).json().then((r)=>r.body),
        /**
     * Todo-タグの登録を行う。
     * @returns Successful operation
     */ post: (option)=>fetch(prefix, PATH0, POST, option).json(),
        /**
     * Todo-タグの登録を行う。
     * @returns Successful operation
     */ $post: (option)=>fetch(prefix, PATH0, POST, option).json().then((r)=>r.body),
        /**
     * Todo-タグの複数削除を行う。
     * @returns Successful operation
     */ delete: (option)=>fetch(prefix, PATH0, DELETE, option).json(),
        /**
     * Todo-タグの複数削除を行う。
     * @returns Successful operation
     */ $delete: (option)=>fetch(prefix, PATH0, DELETE, option).json().then((r)=>r.body),
        $path: ()=>`${prefix}${PATH0}`
    };
};
/* harmony default export */ const todos_tags_$api = (todos_tags_$api_api);

;// CONCATENATED MODULE: ./aspida_api/profiles/$api.ts

const profiles_$api_api = ({ baseURL , fetch  })=>{
    const prefix = (baseURL === undefined ? "http://localhost:3011/api/" : baseURL).replace(/\/$/, "");
    const PATH0 = "/profiles";
    const GET = "GET";
    const POST = "POST";
    const PUT = "PUT";
    const DELETE = "DELETE";
    return {
        _id: (val0)=>{
            const prefix0 = `${PATH0}/${val0}`;
            return {
                /**
         * あるIDを持つユーザーを取得する。
         * @returns Successful operation
         */ get: (option)=>fetch(prefix, prefix0, GET, option).json(),
                /**
         * あるIDを持つユーザーを取得する。
         * @returns Successful operation
         */ $get: (option)=>fetch(prefix, prefix0, GET, option).json().then((r)=>r.body),
                /**
         * あるIDを持つユーザーの削除を行う。
         * @returns Successful operation
         */ delete: (option)=>fetch(prefix, prefix0, DELETE, option).json(),
                /**
         * あるIDを持つユーザーの削除を行う。
         * @returns Successful operation
         */ $delete: (option)=>fetch(prefix, prefix0, DELETE, option).json().then((r)=>r.body),
                /**
         * 指定したIDを持つユーザーを更新する。
         * @returns Successful
         */ put: (option)=>fetch(prefix, prefix0, PUT, option).json(),
                /**
         * 指定したIDを持つユーザーを更新する。
         * @returns Successful
         */ $put: (option)=>fetch(prefix, prefix0, PUT, option).json().then((r)=>r.body),
                $path: (option)=>`${prefix}${prefix0}${option && option.query ? `?${(0,external_aspida_namespaceObject.dataToURLString)(option.query)}` : ""}`
            };
        },
        /**
     * 登録されているすべてのユーザー情報を取得する。
     * @returns Successful operation
     */ get: (option)=>fetch(prefix, PATH0, GET, option).json(),
        /**
     * 登録されているすべてのユーザー情報を取得する。
     * @returns Successful operation
     */ $get: (option)=>fetch(prefix, PATH0, GET, option).json().then((r)=>r.body),
        /**
     * ユーザーの登録を行う。
     * @returns Successful operation
     */ post: (option)=>fetch(prefix, PATH0, POST, option).json(),
        /**
     * ユーザーの登録を行う。
     * @returns Successful operation
     */ $post: (option)=>fetch(prefix, PATH0, POST, option).json().then((r)=>r.body),
        /**
     * プロファイルの複数削除を行う。
     * @returns Successful operation
     */ delete: (option)=>fetch(prefix, PATH0, DELETE, option).json(),
        /**
     * プロファイルの複数削除を行う。
     * @returns Successful operation
     */ $delete: (option)=>fetch(prefix, PATH0, DELETE, option).json().then((r)=>r.body),
        $path: ()=>`${prefix}${PATH0}`
    };
};
/* harmony default export */ const profiles_$api = (profiles_$api_api);

;// CONCATENATED MODULE: ./utils/axiosInstancesServerside.tsx









// baseURLの指定
let baseURL;
// npm run dev環境
// if (process.env.NODE_ENV === "development") {
//   baseURL = "http://localhost:3011/api";
//   // npm run start環境
// } else if (process.env.NODE_ENV === "production") {
//   baseURL = "http://localhost:3011/api";
// ローカル環境
baseURL = "http://localhost:3011/api";
// vercel production環境
if (false) {}
// Todo
const todoClient = $api(axios_default()(external_axios_default().create({
    responseType: "json",
    httpsAgent: new (external_https_default()).Agent({
        rejectUnauthorized: false
    }),
    baseURL: baseURL
})));
// コメント
const commentClient = comments_$api(axios_default()(external_axios_default().create({
    responseType: "json",
    httpsAgent: new (external_https_default()).Agent({
        rejectUnauthorized: false
    }),
    baseURL: baseURL
})));
// タグ
const tagClient = tags_$api(axios_default()(external_axios_default().create({
    responseType: "json",
    httpsAgent: new (external_https_default()).Agent({
        rejectUnauthorized: false
    }),
    baseURL: baseURL
})));
// Todo-コメント
const todoCommentClient = todos_comments_$api(axios_default()(external_axios_default().create({
    responseType: "json",
    httpsAgent: new (external_https_default()).Agent({
        rejectUnauthorized: false
    }),
    baseURL: baseURL
})));
// Todo-Tag
const todoTagClient = todos_tags_$api(axios_default()(external_axios_default().create({
    responseType: "json",
    httpsAgent: new (external_https_default()).Agent({
        rejectUnauthorized: false
    }),
    baseURL: baseURL
})));
// Profile
const profileClient = profiles_$api(axios_default()(external_axios_default().create({
    responseType: "json",
    httpsAgent: new (external_https_default()).Agent({
        rejectUnauthorized: false
    }),
    baseURL: baseURL
})));


/***/ }),

/***/ 1067:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 782:
/***/ (() => {



/***/ }),

/***/ 8278:
/***/ (() => {



/***/ }),

/***/ 2885:
/***/ ((module) => {

"use strict";
module.exports = require("@supabase/supabase-js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6652:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/bi");

/***/ }),

/***/ 8096:
/***/ ((module) => {

"use strict";
module.exports = require("react-slick");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6134:
/***/ ((module) => {

"use strict";
module.exports = import("@chakra-ui/icons");;

/***/ }),

/***/ 2210:
/***/ ((module) => {

"use strict";
module.exports = import("@chakra-ui/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [943,847], () => (__webpack_exec__(5236)));
module.exports = __webpack_exports__;

})();