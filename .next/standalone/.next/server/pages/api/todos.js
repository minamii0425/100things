"use strict";
(() => {
var exports = {};
exports.id = 826;
exports.ids = [826];
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

/***/ 5694:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _libs_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4827);

// /todos
const TodoHandler = async (req, res)=>{
    // GET：全Todoの取得
    if (req.method === "GET") {
        console.log("ゲット");
        const results = await _libs_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].todos.findMany */ .Z.todos.findMany({});
        const convertedResult = results.map((result)=>{
            return {
                TodoID: result.id,
                TodoName: result.todo_name,
                CompleteDate: result.complete_date,
                Location: result.location,
                Status: result.status,
                Description: result.description
            };
        });
        res.json(convertedResult);
    // POST：新規Todoの登録
    } else if (req.method === "POST") {
        console.log("ポスト");
        const { TodoID , TodoName , CompleteDate , Location , Status , Description  } = req.body;
        const result = await _libs_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].todos.create */ .Z.todos.create({
            data: {
                id: TodoID,
                todo_name: TodoName,
                complete_date: new Date(CompleteDate),
                location: Location,
                status: Status,
                description: Description
            }
        });
        res.json(result);
    // DELETE：Todoの全件削除
    } else if (req.method === "DELETE") {
        console.log("デリート");
        const deleteTodoIDs = req.body;
        const result1 = await _libs_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].todos.deleteMany */ .Z.todos.deleteMany({
            where: {
                id: {
                    in: deleteTodoIDs
                }
            }
        });
        res.json(result1);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoHandler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5694));
module.exports = __webpack_exports__;

})();