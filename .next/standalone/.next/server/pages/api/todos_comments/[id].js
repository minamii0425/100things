"use strict";
(() => {
var exports = {};
exports.id = 18;
exports.ids = [18];
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

/***/ 777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _libs_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4827);

const Todos_CommentsHandlerWithID = async (req, res)=>{
    // GET：指定したIDを持つTodo-コメントを取得
    if (req.method === "GET") {
        const Todo_CommentID = req.query.id;
        console.log(`Todos_コメントID：${Todo_CommentID}`);
        const results = await _libs_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].todos_Comments.findMany */ .Z.todos_Comments.findMany({
            where: {
                todo_id: Number(Todo_CommentID)
            }
        });
        const convertedResult = results.map((result)=>{
            return {
                Todos_CommentID: result.id,
                TodoID: result.todo_id,
                CommentID: result.comment_id
            };
        });
        res.json(convertedResult);
    } else if (req.method === "DELETE") {
        const Todo_CommentID1 = req.query.id;
        const result = await _libs_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].todos_Comments.deleteMany */ .Z.todos_Comments.deleteMany({
            where: {
                todo_id: Number(Todo_CommentID1)
            }
        });
        console.log(result);
    }
// PUT：指定したIDを持つTodo-コメントを更新
// else if (req.method === "PUT") {
//   const Todo_CommentID = req.query.id;
//   const { TodoName, CompleteDate, Location, Status, Description } = req.body;
//   const result = await prisma.todos.update({
//     where: {
//       id: Number(Todo_CommentID),
//     },
//     data: {
//       todo_name: TodoName,
//       complete_date: CompleteDate,
//       location: Location,
//       status: Status,
//       description: Description,
//     },
//   });
//   res.json(result);
// }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todos_CommentsHandlerWithID);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(777));
module.exports = __webpack_exports__;

})();