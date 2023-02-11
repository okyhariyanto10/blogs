"use strict";
exports.id = 714;
exports.ids = [714];
exports.modules = {

/***/ 9773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CardPost)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _InfoPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9097);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



function CardPost({ thumbnail , ...infopost }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/detail",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: thumbnail,
                        className: "w-full mb-4"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InfoPost__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                ...infopost
            })
        ]
    });
}


/***/ }),

/***/ 9097:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ InfoPost)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PostMetaTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(988);
/* harmony import */ var _PostAuthor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8558);



function InfoPost({ category , date , title , shortDescription , authorAvatar , authorName , authorJob ,  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PostMetaTitle__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                category: category,
                date: date,
                title: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-white/60 mt-4 w-10/12",
                children: shortDescription
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PostAuthor__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                authorAvatar: authorAvatar,
                authorName: authorName,
                authorJob: authorJob
            })
        ]
    });
}


/***/ }),

/***/ 9428:
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"thumbnail":"/thumbnail-2.png","category":"INTERNET","date":"June 28, 2021","title":"How to design a product that can grow itself 10x in year","shortDescription":"Auctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia dolor.","authorAvatar":"/author-2.png","authorName":"Jenny Wilson","authorJob":"Product Designer"},{"id":2,"thumbnail":"/thumbnail-3.png","category":"9 TO 5","date":"June 22, 2021","title":"The More Important the Work, the More Important the Rest","shortDescription":"Suitable Quality is determined by product users, clients or customers, not by society in general. For example, a low priced product may be viewed as having high.","authorAvatar":"/author-3.png","authorName":"Esther Howard","authorJob":"Entrepreneur"},{"id":3,"thumbnail":"/thumbnail-4.png","category":"INSPIRATIONS","date":"June 18, 2021","title":"Email Love - Email Inspiration, Templates and Discovery","shortDescription":"Consider that for a moment: everything we see around us is assumed to have had a cause and is contingent upon something else.","authorAvatar":"/author-4.png","authorName":"Robert Fox","authorJob":"Front-end Engineer"},{"id":4,"thumbnail":"/thumbnail-5.png","category":"9 TO 5","date":"June 22, 2021","title":"The More Important the Work, the More Important the Rest","shortDescription":"Suitable Quality is determined by product users, clients or customers, not by society in general. For example, a low priced product may be viewed as having high.","authorAvatar":"/author-3.png","authorName":"Esther Howard","authorJob":"Entrepreneur"},{"id":5,"thumbnail":"/thumbnail-6.png","category":"INSPIRATIONS","date":"June 18, 2021","title":"Email Love - Email Inspiration, Templates and Discovery","shortDescription":"Consider that for a moment: everything we see around us is assumed to have had a cause and is contingent upon something else.","authorAvatar":"/author-4.png","authorName":"Robert Fox","authorJob":"Front-end Engineer"},{"id":6,"thumbnail":"/thumbnail-7.png","category":"INTERNET","date":"June 18, 2021","title":"How to design a product that can grow itself 10x in year","shortDescription":"Auctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia dolor.","authorAvatar":"/author-2.png","authorName":"Jenny Wilson","authorJob":"Product Designer"}]');

/***/ })

};
;