"use strict";
(() => {
var exports = {};
exports.id = 427;
exports.ids = [427];
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

/***/ 885:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _libs_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4827);

const TodosHandlerWithID = async (req, res)=>{
    // GET：指定したIDを持つTodoを取得
    if (req.method === "GET") {
        const TodoID = req.query.id;
        console.log(`TodoID：${TodoID}`);
        const result = await _libs_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].todos.findUnique */ .Z.todos.findUnique({
            where: {
                id: Number(TodoID)
            }
        });
        const convertedResult = {
            TodoID: result?.id,
            TodoName: result?.todo_name,
            CompleteDate: result?.complete_date,
            Location: result?.location,
            Status: result?.status,
            Description: result?.description
        };
        res.json(convertedResult);
    } else if (req.method === "DELETE") {
        const TodoID1 = req.query.id;
        const result1 = await _libs_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].todos["delete"] */ .Z.todos["delete"]({
            where: {
                id: Number(TodoID1)
            }
        });
        console.log(result1);
    } else if (req.method === "PUT") {
        const TodoID2 = req.query.id;
        const { TodoName , CompleteDate , Location , Status , Description  } = req.body;
        console.log(`CompleteDate: ${CompleteDate}`);
        console.log(`TodoName: ${TodoName}`);
        console.log(`Location: ${Location}`);
        console.log(`Status: ${Status}`);
        console.log(`Description: ${Description}`);
        const convertedCompleteDate = new Date(CompleteDate);
        console.log(`convertedCompleteDate: ${convertedCompleteDate}`);
        const result2 = await _libs_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].todos.update */ .Z.todos.update({
            where: {
                id: Number(TodoID2)
            },
            data: {
                todo_name: TodoName && TodoName,
                complete_date: new Date(CompleteDate),
                location: Location,
                status: Status,
                description: Description
            }
        });
        res.json(result2);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodosHandlerWithID);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(885));
module.exports = __webpack_exports__;

})();