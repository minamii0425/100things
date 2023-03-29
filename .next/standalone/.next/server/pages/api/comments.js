"use strict";
(() => {
var exports = {};
exports.id = 265;
exports.ids = [265];
exports.modules = {

/***/ 4827:
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

/***/ 862:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _libs_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4827);

// /comments
const CommentsHandler = async (req, res)=>{
    // GET：全Commentの取得
    if (req.method === "GET") {
        console.log("ゲット");
        const results = await _libs_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].comments.findMany */ .Z.comments.findMany({});
        const convertedResult = results.map((result)=>{
            return {
                CommentID: result.id,
                CommentAuthor: result.comment_author,
                CommentText: result.comment_text
            };
        });
        res.json(convertedResult);
    // POST：新規コメントの登録
    } else if (req.method === "POST") {
        console.log("ポスト");
        const { CommentAuthor , CommentText , CommentAvatar  } = req.body;
        const result = await _libs_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].comments.create */ .Z.comments.create({
            data: {
                comment_author: CommentAuthor,
                comment_text: CommentText,
                comment_avatar: CommentAvatar
            }
        });
        res.json(result.id);
    // DELETE：コメントの複数削除
    } else if (req.method === "DELETE") {
        console.log("デリート");
        const deleteCommentIDs = req.body;
        const result1 = await _libs_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].comments.deleteMany */ .Z.comments.deleteMany({
            where: {
                id: {
                    in: deleteCommentIDs
                }
            }
        });
        res.json(result1);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentsHandler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(862));
module.exports = __webpack_exports__;

})();