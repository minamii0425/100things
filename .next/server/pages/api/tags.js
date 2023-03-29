"use strict";
(() => {
var exports = {};
exports.id = 329;
exports.ids = [329];
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

/***/ 9429:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _libs_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4827);

// /tags
const TagHandler = async (req, res)=>{
    // GET：全タグの取得
    if (req.method === "GET") {
        console.log("ゲット");
        const results = await _libs_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].tags.findMany */ .Z.tags.findMany({});
        const convertedResult = results.map((result)=>{
            return {
                TagID: result.id,
                TagName: result.tag_name
            };
        });
        res.json(convertedResult);
    // POST：新規タグの登録
    } else if (req.method === "POST") {
        console.log("ポスト");
        const { TagName  } = req.body;
        const result = await _libs_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].tags.create */ .Z.tags.create({
            data: {
                tag_name: TagName
            }
        });
        res.json(result.id);
    // DELETE：タグの全件削除
    } else if (req.method === "DELETE") {
        console.log("デリート");
        const deleteTagIDs = req.body;
        const result1 = await _libs_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].tags.deleteMany */ .Z.tags.deleteMany({
            where: {
                id: {
                    in: deleteTagIDs
                }
            }
        });
        res.json(result1);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TagHandler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9429));
module.exports = __webpack_exports__;

})();