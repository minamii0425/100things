"use strict";
(() => {
var exports = {};
exports.id = 285;
exports.ids = [285];
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

/***/ 5583:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _libs_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4827);

const Todos_TagsHandlerWithID = async (req, res)=>{
    // GET：指定したIDを持つTodo-タグを取得
    if (req.method === "GET") {
        const Todo_TagID = req.query.id;
        console.log(`Todos_タグID：${Todo_TagID}`);
        const results = await _libs_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].todos_Tags.findMany */ .Z.todos_Tags.findMany({
            where: {
                todo_id: Number(Todo_TagID)
            }
        });
        const convertedResult = results.map((result)=>{
            return {
                Todos_CommentID: result.id,
                TodoID: result.todo_id,
                TagID: result.tag_id
            };
        });
        res.json(convertedResult);
    } else if (req.method === "DELETE") {
        const Todo_TagID1 = req.query.id;
        console.log(Todo_TagID1);
        console.log("デリート");
        const result = await _libs_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].todos_Tags.deleteMany */ .Z.todos_Tags.deleteMany({
            where: {
                // todo_id: Number(Todo_TagID),
                id: Number(Todo_TagID1)
            }
        });
        console.log(result);
    }
// PUT：指定したIDを持つTodo-タグを更新
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todos_TagsHandlerWithID);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5583));
module.exports = __webpack_exports__;

})();