"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var converters_1 = require("./converters");
exports.default = (function (text, params, required) {
    var _a;
    if (text === '*')
        return '_any';
    if (!/^{/.test(text)) {
        return text;
    }
    var valName = text.slice(1, -1);
    var schemaVal = (0, converters_1.schema2value)((_a = params.find(function (p) { return p.in === 'path' && p.name === valName; })) === null || _a === void 0 ? void 0 : _a.schema, required);
    return "_".concat((0, converters_1.getPropertyName)(valName)).concat(schemaVal && typeof schemaVal.value === 'string' ? "@".concat(schemaVal.value) : '');
});
//# sourceMappingURL=getDirName.js.map