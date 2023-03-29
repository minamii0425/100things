"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var converters_1 = require("./converters");
var resolvers_1 = require("./resolvers");
exports.default = (function (schemas, openapi) {
    return schemas &&
        Object.keys(schemas)
            .filter(function (defKey) {
            var target = schemas[defKey];
            return !((0, converters_1.isRefObject)(target) ? (0, resolvers_1.resolveSchemasRef)(openapi, target.$ref) : target).deprecated;
        })
            .map(function (defKey) {
            var value = (0, converters_1.schema2value)(schemas[defKey], false);
            return value ? { name: (0, converters_1.defKey2defName)(defKey), value: value } : null;
        })
            .filter(function (v) { return !!v; });
});
//# sourceMappingURL=schemas2Props.js.map