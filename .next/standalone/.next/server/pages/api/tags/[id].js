"use strict";
(() => {
var exports = {};
exports.id = 505;
exports.ids = [505];
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

/***/ 705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _libs_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4827);

const TagHandlerWithID = async (req, res)=>{
    // GET：指定したIDを持つタグを取得
    if (req.method === "GET") {
        const TagID = req.query.id;
        console.log(`TodoID：${TagID}`);
        const result = await _libs_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].tags.findUnique */ .Z.tags.findUnique({
            where: {
                id: Number(TagID)
            }
        });
        const convertedResult = {
            TagID: result?.id,
            TagName: result?.tag_name
        };
        res.json(convertedResult);
    } else if (req.method === "DELETE") {
        const TagID1 = req.query.id;
        const result1 = await _libs_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].tags["delete"] */ .Z.tags["delete"]({
            where: {
                id: Number(TagID1)
            }
        });
        console.log(result1);
    } else if (req.method === "PUT") {
        const TagID2 = req.query.id;
        const { TagName  } = req.body;
        const result2 = await _libs_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].tags.update */ .Z.tags.update({
            where: {
                id: Number(TagID2)
            },
            data: {
                tag_name: TagName
            }
        });
        res.json(result2);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TagHandlerWithID);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(705));
module.exports = __webpack_exports__;

})();