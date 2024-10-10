"use strict";
(self["webpackChunk_cs_magic_exts_chrome_claude_artifact_enhancer"] = self["webpackChunk_cs_magic_exts_chrome_claude_artifact_enhancer"] || []).push([["background"],{

/***/ 553:
/*!********************************!*\
  !*** ./src/core/background.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/const */ 848);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    // 这个已经不需要了，因为直接在前端就可以拿到
    if (request.action === _utils_const__WEBPACK_IMPORTED_MODULE_0__.action.fetchConversationChats) {
        console.log("-- fetchConversationChats");
        fetch(request.url, {
            credentials: "include",
        })
            .then((response) => response.json())
            .then((data) => sendResponse({ data: data }))
            .catch((error) => sendResponse({ error: error.toString() }));
        return true; // 保持消息通道开放
    }
});


/***/ }),

/***/ 848:
/*!****************************!*\
  !*** ./src/utils/const.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ARTIFACT_COPY_PNG_ID: () => (/* binding */ ARTIFACT_COPY_PNG_ID),
/* harmony export */   ARTIFACT_DOWNLOAD_ALL_ID: () => (/* binding */ ARTIFACT_DOWNLOAD_ALL_ID),
/* harmony export */   ARTIFACT_REACT_ID: () => (/* binding */ ARTIFACT_REACT_ID),
/* harmony export */   IFRAME_URL: () => (/* binding */ IFRAME_URL),
/* harmony export */   PAGE_DOWNLOAD_ALL_ID: () => (/* binding */ PAGE_DOWNLOAD_ALL_ID),
/* harmony export */   action: () => (/* binding */ action),
/* harmony export */   exportElementInnerString: () => (/* binding */ exportElementInnerString),
/* harmony export */   exportElementWrapperString: () => (/* binding */ exportElementWrapperString),
/* harmony export */   lucideArrowBigDownDashSvgString: () => (/* binding */ lucideArrowBigDownDashSvgString),
/* harmony export */   lucideImagesSvgString: () => (/* binding */ lucideImagesSvgString),
/* harmony export */   triggerElementString: () => (/* binding */ triggerElementString)
/* harmony export */ });
const IFRAME_URL = "https://www.claudeusercontent.com";
const exportElementWrapperString = `<button id="export" class="inline-flex items-center justify-center relative shrink-0 ring-offset-2 ring-offset-bg-300 ring-accent-main-100 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none disabled:drop-shadow-none text-text-200 transition-all font-styrene active:bg-bg-400 hover:bg-bg-500/40 hover:text-text-100 h-8 w-8 rounded-md active:scale-95" data-state="closed"></button>`;
const exportElementInnerString = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-image-down"><path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"/><path d="m14 19 3 3v-5.5"/><path d="m17 22 3-3"/><circle cx="9" cy="9" r="2"/></svg>`;
const triggerElementString = `<div data-radix-popper-content-wrapper="" style="position: fixed; left: 0px; top: 0px; transform: translate(1605.5px, 923.5px); min-width: max-content; --radix-popper-transform-origin: 50% 23px; will-change: transform; z-index: 50; --radix-popper-available-width: 1792px; --radix-popper-available-height: 946.5px; --radix-popper-anchor-width: 32px; --radix-popper-anchor-height: 32px;"><div data-side="top" data-align="center" data-state="delayed-open" class="px-2  py-1  text-xs  font-medium  font-sans  leading-tight  rounded-md  shadow-md  text-white  bg-black/80  backdrop-blur  break-words  z-50  max-w-[13rem]  [*:disabled_&amp;]:hidden" style="--radix-tooltip-content-transform-origin: var(--radix-popper-transform-origin); --radix-tooltip-content-available-width: var(--radix-popper-available-width); --radix-tooltip-content-available-height: var(--radix-popper-available-height); --radix-tooltip-trigger-width: var(--radix-popper-anchor-width); --radix-tooltip-trigger-height: var(--radix-popper-anchor-height);">Download IMG<span id="radix-:r1e:" role="tooltip" style="position: absolute; border: 0px; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; overflow-wrap: normal;">Download IMG</span></div></div>`;
const ARTIFACT_REACT_ID = "artifact_react";
const ARTIFACT_DOWNLOAD_ALL_ID = "artifact_download_all";
const ARTIFACT_COPY_PNG_ID = "artifact_copy_png";
var action;
(function (action) {
    action["mainRequestIframeCapture"] = "mainRequestIframeCapture";
    action["mainRequestIframeHtml"] = "mainRequestIframeHtml";
    action["iframeReturnCapture"] = "iframeReturnCapture";
    action["returnIframeHtml"] = "returnIframeHtml";
    action["returnSVG"] = "returnSVG";
    action["requestDownloadSvgPng"] = "requestDownloadSvgPng";
    action["returnDownloadSvgPng"] = "returnDownloadSvgPng";
    action["requestCopyPNG"] = "requestCopyPNG";
    action["fetchConversationChats"] = "fetchConversationChats";
})(action || (action = {}));
const PAGE_DOWNLOAD_ALL_ID = "download-all";
// for artifact copy png
const lucideImagesSvgString = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-images"><path d="M18 22H4a2 2 0 0 1-2-2V6"/><path d="m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18"/><circle cx="12" cy="8" r="2"/><rect width="16" height="16" x="6" y="2" rx="2"/></svg>`;
// for artifact download all
const lucideArrowBigDownDashSvgString = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-big-down-dash"><path d="M15 5H9"/><path d="M15 9v3h4l-7 7-7-7h4V9z"/></svg>`;


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(553));
/******/ }
]);
//# sourceMappingURL=background.js.map