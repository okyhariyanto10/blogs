"use strict";
(() => {
var exports = {};
exports.id = 759;
exports.ids = [759];
exports.modules = {

/***/ 6507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: ./datas.json
const datas_namespaceObject = JSON.parse('[{"id":1,"product":"Mozreng","price":20000},{"id":2,"product":"Mozcho","price":18000}]');
;// CONCATENATED MODULE: ./pages/api/product.js

function handler(req, res) {
    if (req.method !== "get") res.status(405);
    res.status(200).json(datas_namespaceObject);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6507));
module.exports = __webpack_exports__;

})();