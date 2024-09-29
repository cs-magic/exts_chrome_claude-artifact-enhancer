"use strict";
(self["webpackChunk_cs_magic_exts_chrome_claude_artifact_enhancer"] = self["webpackChunk_cs_magic_exts_chrome_claude_artifact_enhancer"] || []).push([["main"],{

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

/***/ 902:
/*!**************************!*\
  !*** ./src/core/main.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/const */ 498);
/* harmony import */ var _utils_downloadImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/downloadImage */ 508);
/* harmony import */ var _utils_handleArtifact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/handleArtifact */ 357);



console.log("Main script loaded");
window.addEventListener("message", (event) => {
    const message = event.data;
    if (event.origin === _utils_const__WEBPACK_IMPORTED_MODULE_0__.IFRAME_URL)
        console.log("[main received]: ", message);
    switch (message.type) {
        case _utils_const__WEBPACK_IMPORTED_MODULE_0__.action.iframeReturnCapture: {
            const img = new Image();
            img.src = message.data;
            img.onload = function () {
                (0,_utils_downloadImage__WEBPACK_IMPORTED_MODULE_1__.downloadImage)(img.src, "screenshot.png");
            };
            break;
        }
        case _utils_const__WEBPACK_IMPORTED_MODULE_0__.action.returnSVG:
            window.svgString = message.data;
            return;
        default:
            return;
    }
});
const observer = new MutationObserver(() => {
    void (0,_utils_handleArtifact__WEBPACK_IMPORTED_MODULE_2__.handleArtifact)();
});
observer.observe(document.body, { subtree: true, childList: true });


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

/***/ 102:
/*!********************************!*\
  !*** ./src/utils/doCopyPng.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   doCopyPng: () => (/* binding */ doCopyPng)
/* harmony export */ });
/* harmony import */ var _cs_magic_common_frontend_blob2clipboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cs-magic/common-frontend/blob2clipboard */ 443);
/* harmony import */ var _cs_magic_common_frontend_svgString2pngBlob__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cs-magic/common-frontend/svgString2pngBlob */ 567);


const doCopyPng = async () => {
    document.querySelector(".fixed .sticky h3").textContent;
    const svgString = window.svgString;
    if (!svgString)
        return alert("no svgString now");
    const svgBlob = (0,_cs_magic_common_frontend_svgString2pngBlob__WEBPACK_IMPORTED_MODULE_1__.svgString2svgBlob)(svgString);
    const pngBlog = await (0,_cs_magic_common_frontend_svgString2pngBlob__WEBPACK_IMPORTED_MODULE_1__.svgBlob2pngBlob)(svgBlob);
    void (0,_cs_magic_common_frontend_blob2clipboard__WEBPACK_IMPORTED_MODULE_0__.blob2clipboard)(pngBlog);
};


/***/ }),

/***/ 389:
/*!************************************!*\
  !*** ./src/utils/doDownloadZip.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   doDownloadZip: () => (/* binding */ doDownloadZip)
/* harmony export */ });
/* harmony import */ var _svgString2zip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./svgString2zip */ 799);

const doDownloadZip = () => {
    const fileName = document.querySelector(".fixed .sticky h3").textContent;
    const svgString = window.svgString;
    if (!svgString)
        return alert("no svgString now");
    (0,_svgString2zip__WEBPACK_IMPORTED_MODULE_0__.svgString2zip)(svgString, `${fileName}.png`)
        .then((downloadId) => console.log("File saved with download ID:", downloadId))
        .catch((error) => console.error("Error:", error));
};


/***/ }),

/***/ 508:
/*!************************************!*\
  !*** ./src/utils/downloadImage.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   downloadImage: () => (/* binding */ downloadImage)
/* harmony export */ });
function downloadImage(imageUrl, fileName) {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = fileName || "image.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


/***/ }),

/***/ 357:
/*!*************************************!*\
  !*** ./src/utils/handleArtifact.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleArtifact: () => (/* binding */ handleArtifact)
/* harmony export */ });
/* harmony import */ var _wait_parent_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wait-parent-element */ 52);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const */ 498);
/* harmony import */ var _doCopyPng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./doCopyPng */ 102);
/* harmony import */ var _doDownloadZip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./doDownloadZip */ 389);
/* harmony import */ var _cs_magic_common_frontend_str2ele__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @cs-magic/common-frontend/str2ele */ 491);





const handleArtifact = async () => {
    const parentElement = await (0,_wait_parent_element__WEBPACK_IMPORTED_MODULE_0__.waitParentElement)();
    if (!parentElement)
        return;
    const insertEle = (id, svgString, onClick, size = 16) => {
        let ele = parentElement.querySelector(`#${id}`);
        if (ele)
            return;
        const buttonElement = (0,_cs_magic_common_frontend_str2ele__WEBPACK_IMPORTED_MODULE_4__.str2ele)(`<button 
id="${id}"
class="inline-flex
  items-center
  justify-center
  relative
  shrink-0
  ring-offset-2
  ring-offset-bg-300
  ring-accent-main-100
  focus-visible:outline-none
  focus-visible:ring-1
  disabled:pointer-events-none
  disabled:opacity-50
  disabled:shadow-none
  disabled:drop-shadow-none text-text-200
          transition-all
          font-styrene
          active:bg-bg-400
          hover:bg-bg-500/40
          hover:text-text-100 h-9 w-9 rounded-md active:scale-95" data-testid="chat-controls" data-state="closed">
         
${svgString}
          
          </button>`);
        buttonElement.onclick = onClick;
        parentElement.insertAdjacentElement("afterbegin", buttonElement);
        const svg = parentElement.querySelector("svg");
        svg.setAttribute("width", size.toString());
        svg.setAttribute("height", size.toString());
    };
    insertEle(_const__WEBPACK_IMPORTED_MODULE_1__.ARTIFACT_COPY_PNG_ID, _const__WEBPACK_IMPORTED_MODULE_1__.lucideImagesSvgString, _doCopyPng__WEBPACK_IMPORTED_MODULE_2__.doCopyPng, 16);
    insertEle(_const__WEBPACK_IMPORTED_MODULE_1__.ARTIFACT_DOWNLOAD_ALL_ID, _const__WEBPACK_IMPORTED_MODULE_1__.lucideArrowBigDownDashSvgString, _doDownloadZip__WEBPACK_IMPORTED_MODULE_3__.doDownloadZip, 20);
};


/***/ }),

/***/ 799:
/*!************************************!*\
  !*** ./src/utils/svgString2zip.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   svgString2zip: () => (/* binding */ svgString2zip)
/* harmony export */ });
/* harmony import */ var _cs_magic_common_frontend_svgString2pngBlob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cs-magic/common-frontend/svgString2pngBlob */ 567);
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jszip */ 842);
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ 461);



async function svgString2zip(svgString, fileName, ppi = _config__WEBPACK_IMPORTED_MODULE_2__.config.png.export.ppi.default) {
    const svgBlob = (0,_cs_magic_common_frontend_svgString2pngBlob__WEBPACK_IMPORTED_MODULE_0__.svgString2svgBlob)(svgString);
    const pngBlob = (0,_cs_magic_common_frontend_svgString2pngBlob__WEBPACK_IMPORTED_MODULE_0__.svgBlob2pngBlob)(svgBlob, ppi);
    // Create ZIP file
    const zip = new (jszip__WEBPACK_IMPORTED_MODULE_1___default())();
    zip.file(`${fileName}.svg`, svgString);
    zip.file(`${fileName}.png`, pngBlob);
    // Generate ZIP file
    const zipBlob = await zip.generateAsync({ type: "blob" });
    // Trigger download
    const url = URL.createObjectURL(zipBlob);
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = `${fileName}.zip`;
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(url);
    document.body.removeChild(a);
}


/***/ }),

/***/ 52:
/*!******************************************!*\
  !*** ./src/utils/wait-parent-element.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   waitParentElement: () => (/* binding */ waitParentElement)
/* harmony export */ });
const waitParentElement = () => new Promise((resolve) => {
    const exportButtonObserver = new MutationObserver((mutation) => {
        const publishButton = Array.from(document.querySelectorAll("button")).find((button) => button.textContent.trim() === "Publish");
        if (!publishButton)
            return;
        const parentElement = publishButton.parentElement.parentElement;
        exportButtonObserver.disconnect();
        resolve(parentElement);
    });
    exportButtonObserver.observe(document.body, {
        childList: true,
        subtree: true,
    });
});


/***/ }),

/***/ 443:
/*!*************************************************************!*\
  !*** ../../packages_frontend/common/dist/blob2clipboard.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blob2clipboard: () => (/* binding */ blob2clipboard)
/* harmony export */ });
async function blob2clipboard(blob) {
    try {
        const clipboardItem = new ClipboardItem({ "image/png": blob });
        await navigator.clipboard.write([clipboardItem]);
        // todo: use toast
        // alert("PNG copied to clipboard!");
    }
    catch (error) {
        console.error("Error copying PNG to clipboard:", error);
        alert("PNG failed to copy to clipboard!");
    }
}
//# sourceMappingURL=blob2clipboard.js.map

/***/ }),

/***/ 491:
/*!******************************************************!*\
  !*** ../../packages_frontend/common/dist/str2ele.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   str2ele: () => (/* binding */ str2ele)
/* harmony export */ });
function str2ele(str) {
    // const parser = new DOMParser();
    // const doc = parser.parseFromString(str, "text/html");
    // return doc.body.firstChild!;
    const element = document.createElement("div");
    element.innerHTML = str;
    return element.firstElementChild;
}
//# sourceMappingURL=str2ele.js.map

/***/ }),

/***/ 567:
/*!****************************************************************!*\
  !*** ../../packages_frontend/common/dist/svgString2pngBlob.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   svgBlob2pngBlob: () => (/* binding */ svgBlob2pngBlob),
/* harmony export */   svgString2svgBlob: () => (/* binding */ svgString2svgBlob)
/* harmony export */ });
const svgString2svgBlob = (svgString) => new Blob([svgString], { type: "image/svg+xml" });
function svgBlob2pngBlob(svgBlob, ppi = 320) {
    return new Promise((resolve, reject) => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const url = URL.createObjectURL(svgBlob);
        const img = new Image();
        img.onload = () => {
            const scale = ppi / 72; // Default PPI for SVG is 72
            canvas.width = img.width * scale;
            canvas.height = img.height * scale;
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            canvas.toBlob((blob) => {
                URL.revokeObjectURL(url);
                resolve(blob);
            }, "image/png");
        };
        img.onerror = (err) => {
            URL.revokeObjectURL(url);
            reject(err);
        };
        img.src = url;
    });
}
//# sourceMappingURL=svgString2pngBlob.js.map

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(902)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map