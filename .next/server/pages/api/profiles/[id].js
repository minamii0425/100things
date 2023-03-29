"use strict";
(() => {
var exports = {};
exports.id = 517;
exports.ids = [517];
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

/***/ 4486:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _libs_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4827);

const ProfilesHandlerWithID = async (req, res)=>{
    // GET：指定したIDを持つProfileを取得
    if (req.method === "GET") {
        const UserID = req.query.id;
        console.log(`UserID: ${UserID}`);
        const result = await _libs_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].profiles.findUnique */ .Z.profiles.findUnique({
            where: {
                id: String(UserID)
            }
        });
        const convertedResult = {
            ID: result?.id,
            UpdatedAt: result?.updated_at,
            UserName: result?.username,
            FullName: result?.full_name,
            AvatarURL: result?.avatar_url,
            WebSite: result?.website
        };
        res.json(convertedResult);
    } else if (req.method === "DELETE") {
        const CommentID = req.query.id;
        const result1 = await _libs_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].comments["delete"] */ .Z.comments["delete"]({
            where: {
                id: Number(CommentID)
            }
        });
        res.json(result1);
        console.log(result1);
    } else if (req.method === "PUT") {
        const CommentID1 = req.query.id;
        const { UpdatedAt , UserName , FullName , AvatarURL , WebSite  } = req.body;
        const result2 = await _libs_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].profiles.update */ .Z.profiles.update({
            where: {
                id: String(CommentID1)
            },
            data: {
                updated_at: UpdatedAt,
                username: UserName,
                full_name: FullName,
                avatar_url: AvatarURL,
                website: WebSite
            }
        });
        res.json(result2);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfilesHandlerWithID);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4486));
module.exports = __webpack_exports__;

})();