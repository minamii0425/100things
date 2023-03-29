"use strict";
(() => {
var exports = {};
exports.id = 107;
exports.ids = [107];
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

/***/ 6492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _libs_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4827);

const CommentsHandlerWithID = async (req, res)=>{
    // GET：指定したIDを持つコメントを取得
    if (req.method === "GET") {
        const CommentID = req.query.id;
        console.log(`CommentID：${CommentID}`);
        const result = await _libs_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].comments.findUnique */ .Z.comments.findUnique({
            where: {
                id: Number(CommentID)
            }
        });
        const convertedResult = {
            CommentID: result?.id,
            CommentText: result?.comment_text,
            CommentAuthor: result?.comment_author
        };
        res.json(convertedResult);
    } else if (req.method === "DELETE") {
        const CommentID1 = req.query.id;
        const result1 = await _libs_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].comments["delete"] */ .Z.comments["delete"]({
            where: {
                id: Number(CommentID1)
            }
        });
        res.json(result1);
        console.log(result1);
    } else if (req.method === "PUT") {
        const CommentID2 = req.query.id;
        const { CommentText , CommentAuthor  } = req.body;
        const result2 = await _libs_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].comments.update */ .Z.comments.update({
            where: {
                id: Number(CommentID2)
            },
            data: {
                comment_author: CommentAuthor,
                comment_text: CommentText
            }
        });
        res.json(result2);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentsHandlerWithID);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6492));
module.exports = __webpack_exports__;

})();