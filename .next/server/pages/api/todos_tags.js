"use strict";
(() => {
var exports = {};
exports.id = 598;
exports.ids = [598];
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

/***/ 1041:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _libs_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4827);

// /todos
const Todo_TagHandler = async (req, res)=>{
    // GET：全Todo-タグの取得
    if (req.method === "GET") {
        console.log("ゲット！！");
        const results = await _libs_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].todos_Tags.findMany */ .Z.todos_Tags.findMany({});
        const convertedResult = results.map((result)=>{
            return {
                Todo_TagID: result.id,
                TodoID: result.todo_id,
                TagID: result.tag_id
            };
        });
        res.json(convertedResult);
    // POST：新規Todo-タグの登録
    } else if (req.method === "POST") {
        console.log("ポスト");
        const { TodoID , TagID  } = req.body;
        const result = await _libs_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].todos_Tags.create */ .Z.todos_Tags.create({
            data: {
                todo_id: TodoID,
                tag_id: TagID
            }
        });
        res.json(result);
    // DELETE：Todo-タグの全件削除
    } else if (req.method === "DELETE") {
        console.log("デリート");
        const deleteTodo_TagIDs = req.body;
        const result1 = await _libs_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].todos_Tags.deleteMany */ .Z.todos_Tags.deleteMany({
            where: {
                id: {
                    in: deleteTodo_TagIDs
                }
            }
        });
        res.json(result1);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo_TagHandler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1041));
module.exports = __webpack_exports__;

})();