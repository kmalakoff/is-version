// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return isVersion;
    }
});
function isNaN(value) {
    // biome-ignore lint/suspicious/noSelfCompare: <explanation>
    return value !== value;
}
function isVersion(version, prefix) {
    if (typeof version !== "string") return false;
    if (prefix) {
        if (typeof prefix !== "string") prefix = "".concat(prefix);
        if (version.indexOf(prefix) !== 0) return false;
        version = version.slice(prefix.length);
    }
    var parts = version.split(".");
    if (parts.length !== 3) return false;
    return !isNaN(+parts[0]) && !isNaN(+parts[1]) && !isNaN(+parts[2]);
}
/* CJS INTEROP */ if (exports.__esModule && exports.default) { Object.defineProperty(exports.default, '__esModule', { value: true }); for (var key in exports) exports.default[key] = exports[key]; module.exports = exports.default; }