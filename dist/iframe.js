"use strict";
(self["webpackChunk_cs_magic_exts_chrome_claude_artifact_enhancer"] = self["webpackChunk_cs_magic_exts_chrome_claude_artifact_enhancer"] || []).push([["iframe"],{

/***/ 461:
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config)
/* harmony export */ });
const config = {
    svg: {
        export: {
            width: {
                min: 36,
            },
        },
    },
    png: {
        export: {
            ppi: {
                default: 320,
            },
        },
    },
};


/***/ }),

/***/ 927:
/*!****************************!*\
  !*** ./src/core/iframe.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cs_magic_common_frontend_element2image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cs-magic/common-frontend/element2image */ 589);
/* harmony import */ var _utils_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/const */ 498);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ 461);



console.log("IFrame script loaded");
// iframe内的代码
window.addEventListener("message", function (event) {
    const message = event.data;
    console.log("[iframe receive]: ", message);
    const element = document.documentElement;
    console.log({ element });
    switch (message.type) {
        case _utils_const__WEBPACK_IMPORTED_MODULE_1__.action.mainRequestIframeCapture:
            console.log("-- iframe capturing");
            void (0,_cs_magic_common_frontend_element2image__WEBPACK_IMPORTED_MODULE_0__.element2image)(document.body, {
                approach: "modern-screenshot",
                filename: "iframe-screenshot.png",
            });
            break;
    }
});
const observer = new MutationObserver((mutations, observer) => {
    for (const svgElement of document.querySelectorAll("svg")) {
        const { width, height } = svgElement.getBBox();
        if (width < _config__WEBPACK_IMPORTED_MODULE_2__.config.svg.export.width.min)
            continue;
        window.parent.postMessage({
            type: _utils_const__WEBPACK_IMPORTED_MODULE_1__.action.returnSVG,
            data: new XMLSerializer().serializeToString(svgElement),
        }, "*");
    }
});
observer.observe(document.body, { childList: true, subtree: true });


/***/ }),

/***/ 498:
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


/***/ }),

/***/ 589:
/*!************************************************************!*\
  !*** ../../packages_frontend/common/dist/element2image.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   element2image: () => (/* binding */ element2image),
/* harmony export */   svgElement2svgString: () => (/* binding */ svgElement2svgString)
/* harmony export */ });
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! html2canvas */ 317);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var modern_screenshot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modern-screenshot */ 615);

 // Function to get the maximum width based on viewport
const svgElement2svgString = (svg) => new XMLSerializer().serializeToString(svg);
// Function to get the maximum width based on viewport
function getMaxWidth() {
    if (window.innerWidth >= 1280) {
        return 768; // xl:max-w-[48rem]
    }
    else if (window.innerWidth >= 1024) {
        return 640; // lg:max-w-[40rem]
    }
    else if (window.innerWidth >= 768) {
        return 768; // md:max-w-3xl
    }
    return window.innerWidth; // For smaller screens, use full width
}
const element2image = async (element, { approach = "modern-screenshot", filename = "screenshot", backgroundColor = "white", format = "jpeg", }) => {
    console.log("-- element2png start");
    let data;
    const maxWidth = getMaxWidth();
    // 此时可以进行截图操作
    switch (approach) {
        case "html2canvas":
            const canvas = await html2canvas__WEBPACK_IMPORTED_MODULE_0___default()(element, {
                logging: true,
                allowTaint: true,
                useCORS: true, // scrollY: -window.scrollY,
                height: element.scrollHeight,
                windowHeight: element.scrollHeight,
                backgroundColor: backgroundColor, // chatgpt (#171717)
                scale: 2,
            });
            // Crop the canvas if necessary
            // todo: 剪切还有点问题
            // if (canvas.width > maxWidth) {
            //   const croppedCanvas = document.createElement("canvas");
            //   croppedCanvas.width = maxWidth;
            //   croppedCanvas.height = canvas.height;
            //   const ctx = croppedCanvas.getContext("2d");
            //   const centerShift = (canvas.width - maxWidth) / 2;
            //   ctx.drawImage(
            //     canvas,
            //     centerShift,
            //     0,
            //     maxWidth,
            //     canvas.height,
            //     0,
            //     0,
            //     maxWidth,
            //     canvas.height,
            //   );
            //   data = croppedCanvas.toDataURL("image/png");
            // } else
            data = canvas.toDataURL("image/jpeg");
            break;
        case "modern-screenshot":
            data = await (0,modern_screenshot__WEBPACK_IMPORTED_MODULE_1__.domToDataUrl)(element, {
                scale: 2,
                quality: 0.7,
                backgroundColor: backgroundColor,
            });
            break;
    }
    const link = document.createElement("a");
    link.download = filename;
    link.href = data;
    link.click();
    console.log("-- element2png end");
};
//# sourceMappingURL=element2image.js.map

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(927)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=iframe.js.map