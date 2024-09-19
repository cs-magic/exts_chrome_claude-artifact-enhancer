(self["webpackChunk_cs_magic_exts_chrome_claude_artifact_enhancer"] = self["webpackChunk_cs_magic_exts_chrome_claude_artifact_enhancer"] || []).push([["vendors"],{

/***/ 317:
/*!**********************************************************!*\
  !*** ../../node_modules/html2canvas/dist/html2canvas.js ***!
  \**********************************************************/
/***/ (function(module) {

/*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
(function (global, factory) {
     true ? module.exports = factory() :
    0;
}(this, (function () { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || from);
    }

    var Bounds = /** @class */ (function () {
        function Bounds(left, top, width, height) {
            this.left = left;
            this.top = top;
            this.width = width;
            this.height = height;
        }
        Bounds.prototype.add = function (x, y, w, h) {
            return new Bounds(this.left + x, this.top + y, this.width + w, this.height + h);
        };
        Bounds.fromClientRect = function (context, clientRect) {
            return new Bounds(clientRect.left + context.windowBounds.left, clientRect.top + context.windowBounds.top, clientRect.width, clientRect.height);
        };
        Bounds.fromDOMRectList = function (context, domRectList) {
            var domRect = Array.from(domRectList).find(function (rect) { return rect.width !== 0; });
            return domRect
                ? new Bounds(domRect.left + context.windowBounds.left, domRect.top + context.windowBounds.top, domRect.width, domRect.height)
                : Bounds.EMPTY;
        };
        Bounds.EMPTY = new Bounds(0, 0, 0, 0);
        return Bounds;
    }());
    var parseBounds = function (context, node) {
        return Bounds.fromClientRect(context, node.getBoundingClientRect());
    };
    var parseDocumentSize = function (document) {
        var body = document.body;
        var documentElement = document.documentElement;
        if (!body || !documentElement) {
            throw new Error("Unable to get document size");
        }
        var width = Math.max(Math.max(body.scrollWidth, documentElement.scrollWidth), Math.max(body.offsetWidth, documentElement.offsetWidth), Math.max(body.clientWidth, documentElement.clientWidth));
        var height = Math.max(Math.max(body.scrollHeight, documentElement.scrollHeight), Math.max(body.offsetHeight, documentElement.offsetHeight), Math.max(body.clientHeight, documentElement.clientHeight));
        return new Bounds(0, 0, width, height);
    };

    /*
     * css-line-break 2.1.0 <https://github.com/niklasvh/css-line-break#readme>
     * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
     * Released under MIT License
     */
    var toCodePoints$1 = function (str) {
        var codePoints = [];
        var i = 0;
        var length = str.length;
        while (i < length) {
            var value = str.charCodeAt(i++);
            if (value >= 0xd800 && value <= 0xdbff && i < length) {
                var extra = str.charCodeAt(i++);
                if ((extra & 0xfc00) === 0xdc00) {
                    codePoints.push(((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000);
                }
                else {
                    codePoints.push(value);
                    i--;
                }
            }
            else {
                codePoints.push(value);
            }
        }
        return codePoints;
    };
    var fromCodePoint$1 = function () {
        var codePoints = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            codePoints[_i] = arguments[_i];
        }
        if (String.fromCodePoint) {
            return String.fromCodePoint.apply(String, codePoints);
        }
        var length = codePoints.length;
        if (!length) {
            return '';
        }
        var codeUnits = [];
        var index = -1;
        var result = '';
        while (++index < length) {
            var codePoint = codePoints[index];
            if (codePoint <= 0xffff) {
                codeUnits.push(codePoint);
            }
            else {
                codePoint -= 0x10000;
                codeUnits.push((codePoint >> 10) + 0xd800, (codePoint % 0x400) + 0xdc00);
            }
            if (index + 1 === length || codeUnits.length > 0x4000) {
                result += String.fromCharCode.apply(String, codeUnits);
                codeUnits.length = 0;
            }
        }
        return result;
    };
    var chars$2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    // Use a lookup table to find the index.
    var lookup$2 = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
    for (var i$2 = 0; i$2 < chars$2.length; i$2++) {
        lookup$2[chars$2.charCodeAt(i$2)] = i$2;
    }

    /*
     * utrie 1.0.2 <https://github.com/niklasvh/utrie>
     * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
     * Released under MIT License
     */
    var chars$1$1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    // Use a lookup table to find the index.
    var lookup$1$1 = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
    for (var i$1$1 = 0; i$1$1 < chars$1$1.length; i$1$1++) {
        lookup$1$1[chars$1$1.charCodeAt(i$1$1)] = i$1$1;
    }
    var decode$1 = function (base64) {
        var bufferLength = base64.length * 0.75, len = base64.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
        if (base64[base64.length - 1] === '=') {
            bufferLength--;
            if (base64[base64.length - 2] === '=') {
                bufferLength--;
            }
        }
        var buffer = typeof ArrayBuffer !== 'undefined' &&
            typeof Uint8Array !== 'undefined' &&
            typeof Uint8Array.prototype.slice !== 'undefined'
            ? new ArrayBuffer(bufferLength)
            : new Array(bufferLength);
        var bytes = Array.isArray(buffer) ? buffer : new Uint8Array(buffer);
        for (i = 0; i < len; i += 4) {
            encoded1 = lookup$1$1[base64.charCodeAt(i)];
            encoded2 = lookup$1$1[base64.charCodeAt(i + 1)];
            encoded3 = lookup$1$1[base64.charCodeAt(i + 2)];
            encoded4 = lookup$1$1[base64.charCodeAt(i + 3)];
            bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
            bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
            bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
        }
        return buffer;
    };
    var polyUint16Array$1 = function (buffer) {
        var length = buffer.length;
        var bytes = [];
        for (var i = 0; i < length; i += 2) {
            bytes.push((buffer[i + 1] << 8) | buffer[i]);
        }
        return bytes;
    };
    var polyUint32Array$1 = function (buffer) {
        var length = buffer.length;
        var bytes = [];
        for (var i = 0; i < length; i += 4) {
            bytes.push((buffer[i + 3] << 24) | (buffer[i + 2] << 16) | (buffer[i + 1] << 8) | buffer[i]);
        }
        return bytes;
    };

    /** Shift size for getting the index-2 table offset. */
    var UTRIE2_SHIFT_2$1 = 5;
    /** Shift size for getting the index-1 table offset. */
    var UTRIE2_SHIFT_1$1 = 6 + 5;
    /**
     * Shift size for shifting left the index array values.
     * Increases possible data size with 16-bit index values at the cost
     * of compactability.
     * This requires data blocks to be aligned by UTRIE2_DATA_GRANULARITY.
     */
    var UTRIE2_INDEX_SHIFT$1 = 2;
    /**
     * Difference between the two shift sizes,
     * for getting an index-1 offset from an index-2 offset. 6=11-5
     */
    var UTRIE2_SHIFT_1_2$1 = UTRIE2_SHIFT_1$1 - UTRIE2_SHIFT_2$1;
    /**
     * The part of the index-2 table for U+D800..U+DBFF stores values for
     * lead surrogate code _units_ not code _points_.
     * Values for lead surrogate code _points_ are indexed with this portion of the table.
     * Length=32=0x20=0x400>>UTRIE2_SHIFT_2. (There are 1024=0x400 lead surrogates.)
     */
    var UTRIE2_LSCP_INDEX_2_OFFSET$1 = 0x10000 >> UTRIE2_SHIFT_2$1;
    /** Number of entries in a data block. 32=0x20 */
    var UTRIE2_DATA_BLOCK_LENGTH$1 = 1 << UTRIE2_SHIFT_2$1;
    /** Mask for getting the lower bits for the in-data-block offset. */
    var UTRIE2_DATA_MASK$1 = UTRIE2_DATA_BLOCK_LENGTH$1 - 1;
    var UTRIE2_LSCP_INDEX_2_LENGTH$1 = 0x400 >> UTRIE2_SHIFT_2$1;
    /** Count the lengths of both BMP pieces. 2080=0x820 */
    var UTRIE2_INDEX_2_BMP_LENGTH$1 = UTRIE2_LSCP_INDEX_2_OFFSET$1 + UTRIE2_LSCP_INDEX_2_LENGTH$1;
    /**
     * The 2-byte UTF-8 version of the index-2 table follows at offset 2080=0x820.
     * Length 32=0x20 for lead bytes C0..DF, regardless of UTRIE2_SHIFT_2.
     */
    var UTRIE2_UTF8_2B_INDEX_2_OFFSET$1 = UTRIE2_INDEX_2_BMP_LENGTH$1;
    var UTRIE2_UTF8_2B_INDEX_2_LENGTH$1 = 0x800 >> 6; /* U+0800 is the first code point after 2-byte UTF-8 */
    /**
     * The index-1 table, only used for supplementary code points, at offset 2112=0x840.
     * Variable length, for code points up to highStart, where the last single-value range starts.
     * Maximum length 512=0x200=0x100000>>UTRIE2_SHIFT_1.
     * (For 0x100000 supplementary code points U+10000..U+10ffff.)
     *
     * The part of the index-2 table for supplementary code points starts
     * after this index-1 table.
     *
     * Both the index-1 table and the following part of the index-2 table
     * are omitted completely if there is only BMP data.
     */
    var UTRIE2_INDEX_1_OFFSET$1 = UTRIE2_UTF8_2B_INDEX_2_OFFSET$1 + UTRIE2_UTF8_2B_INDEX_2_LENGTH$1;
    /**
     * Number of index-1 entries for the BMP. 32=0x20
     * This part of the index-1 table is omitted from the serialized form.
     */
    var UTRIE2_OMITTED_BMP_INDEX_1_LENGTH$1 = 0x10000 >> UTRIE2_SHIFT_1$1;
    /** Number of entries in an index-2 block. 64=0x40 */
    var UTRIE2_INDEX_2_BLOCK_LENGTH$1 = 1 << UTRIE2_SHIFT_1_2$1;
    /** Mask for getting the lower bits for the in-index-2-block offset. */
    var UTRIE2_INDEX_2_MASK$1 = UTRIE2_INDEX_2_BLOCK_LENGTH$1 - 1;
    var slice16$1 = function (view, start, end) {
        if (view.slice) {
            return view.slice(start, end);
        }
        return new Uint16Array(Array.prototype.slice.call(view, start, end));
    };
    var slice32$1 = function (view, start, end) {
        if (view.slice) {
            return view.slice(start, end);
        }
        return new Uint32Array(Array.prototype.slice.call(view, start, end));
    };
    var createTrieFromBase64$1 = function (base64, _byteLength) {
        var buffer = decode$1(base64);
        var view32 = Array.isArray(buffer) ? polyUint32Array$1(buffer) : new Uint32Array(buffer);
        var view16 = Array.isArray(buffer) ? polyUint16Array$1(buffer) : new Uint16Array(buffer);
        var headerLength = 24;
        var index = slice16$1(view16, headerLength / 2, view32[4] / 2);
        var data = view32[5] === 2
            ? slice16$1(view16, (headerLength + view32[4]) / 2)
            : slice32$1(view32, Math.ceil((headerLength + view32[4]) / 4));
        return new Trie$1(view32[0], view32[1], view32[2], view32[3], index, data);
    };
    var Trie$1 = /** @class */ (function () {
        function Trie(initialValue, errorValue, highStart, highValueIndex, index, data) {
            this.initialValue = initialValue;
            this.errorValue = errorValue;
            this.highStart = highStart;
            this.highValueIndex = highValueIndex;
            this.index = index;
            this.data = data;
        }
        /**
         * Get the value for a code point as stored in the Trie.
         *
         * @param codePoint the code point
         * @return the value
         */
        Trie.prototype.get = function (codePoint) {
            var ix;
            if (codePoint >= 0) {
                if (codePoint < 0x0d800 || (codePoint > 0x0dbff && codePoint <= 0x0ffff)) {
                    // Ordinary BMP code point, excluding leading surrogates.
                    // BMP uses a single level lookup.  BMP index starts at offset 0 in the Trie2 index.
                    // 16 bit data is stored in the index array itself.
                    ix = this.index[codePoint >> UTRIE2_SHIFT_2$1];
                    ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
                    return this.data[ix];
                }
                if (codePoint <= 0xffff) {
                    // Lead Surrogate Code Point.  A Separate index section is stored for
                    // lead surrogate code units and code points.
                    //   The main index has the code unit data.
                    //   For this function, we need the code point data.
                    // Note: this expression could be refactored for slightly improved efficiency, but
                    //       surrogate code points will be so rare in practice that it's not worth it.
                    ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET$1 + ((codePoint - 0xd800) >> UTRIE2_SHIFT_2$1)];
                    ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
                    return this.data[ix];
                }
                if (codePoint < this.highStart) {
                    // Supplemental code point, use two-level lookup.
                    ix = UTRIE2_INDEX_1_OFFSET$1 - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH$1 + (codePoint >> UTRIE2_SHIFT_1$1);
                    ix = this.index[ix];
                    ix += (codePoint >> UTRIE2_SHIFT_2$1) & UTRIE2_INDEX_2_MASK$1;
                    ix = this.index[ix];
                    ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
                    return this.data[ix];
                }
                if (codePoint <= 0x10ffff) {
                    return this.data[this.highValueIndex];
                }
            }
            // Fall through.  The code point is outside of the legal range of 0..0x10ffff.
            return this.errorValue;
        };
        return Trie;
    }());

    /*
     * base64-arraybuffer 1.0.2 <https://github.com/niklasvh/base64-arraybuffer>
     * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
     * Released under MIT License
     */
    var chars$3 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    // Use a lookup table to find the index.
    var lookup$3 = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
    for (var i$3 = 0; i$3 < chars$3.length; i$3++) {
        lookup$3[chars$3.charCodeAt(i$3)] = i$3;
    }

    var base64$1 = 'KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==';

    var LETTER_NUMBER_MODIFIER = 50;
    // Non-tailorable Line Breaking Classes
    var BK = 1; //  Cause a line break (after)
    var CR$1 = 2; //  Cause a line break (after), except between CR and LF
    var LF$1 = 3; //  Cause a line break (after)
    var CM = 4; //  Prohibit a line break between the character and the preceding character
    var NL = 5; //  Cause a line break (after)
    var WJ = 7; //  Prohibit line breaks before and after
    var ZW = 8; //  Provide a break opportunity
    var GL = 9; //  Prohibit line breaks before and after
    var SP = 10; // Enable indirect line breaks
    var ZWJ$1 = 11; // Prohibit line breaks within joiner sequences
    // Break Opportunities
    var B2 = 12; //  Provide a line break opportunity before and after the character
    var BA = 13; //  Generally provide a line break opportunity after the character
    var BB = 14; //  Generally provide a line break opportunity before the character
    var HY = 15; //  Provide a line break opportunity after the character, except in numeric context
    var CB = 16; //   Provide a line break opportunity contingent on additional information
    // Characters Prohibiting Certain Breaks
    var CL = 17; //  Prohibit line breaks before
    var CP = 18; //  Prohibit line breaks before
    var EX = 19; //  Prohibit line breaks before
    var IN = 20; //  Allow only indirect line breaks between pairs
    var NS = 21; //  Allow only indirect line breaks before
    var OP = 22; //  Prohibit line breaks after
    var QU = 23; //  Act like they are both opening and closing
    // Numeric Context
    var IS = 24; //  Prevent breaks after any and before numeric
    var NU = 25; //  Form numeric expressions for line breaking purposes
    var PO = 26; //  Do not break following a numeric expression
    var PR = 27; //  Do not break in front of a numeric expression
    var SY = 28; //  Prevent a break before; and allow a break after
    // Other Characters
    var AI = 29; //  Act like AL when the resolvedEAW is N; otherwise; act as ID
    var AL = 30; //  Are alphabetic characters or symbols that are used with alphabetic characters
    var CJ = 31; //  Treat as NS or ID for strict or normal breaking.
    var EB = 32; //  Do not break from following Emoji Modifier
    var EM = 33; //  Do not break from preceding Emoji Base
    var H2 = 34; //  Form Korean syllable blocks
    var H3 = 35; //  Form Korean syllable blocks
    var HL = 36; //  Do not break around a following hyphen; otherwise act as Alphabetic
    var ID = 37; //  Break before or after; except in some numeric context
    var JL = 38; //  Form Korean syllable blocks
    var JV = 39; //  Form Korean syllable blocks
    var JT = 40; //  Form Korean syllable blocks
    var RI$1 = 41; //  Keep pairs together. For pairs; break before and after other classes
    var SA = 42; //  Provide a line break opportunity contingent on additional, language-specific context analysis
    var XX = 43; //  Have as yet unknown line breaking behavior or unassigned code positions
    var ea_OP = [0x2329, 0xff08];
    var BREAK_MANDATORY = '!';
    var BREAK_NOT_ALLOWED$1 = '×';
    var BREAK_ALLOWED$1 = '÷';
    var UnicodeTrie$1 = createTrieFromBase64$1(base64$1);
    var ALPHABETICS = [AL, HL];
    var HARD_LINE_BREAKS = [BK, CR$1, LF$1, NL];
    var SPACE$1 = [SP, ZW];
    var PREFIX_POSTFIX = [PR, PO];
    var LINE_BREAKS = HARD_LINE_BREAKS.concat(SPACE$1);
    var KOREAN_SYLLABLE_BLOCK = [JL, JV, JT, H2, H3];
    var HYPHEN = [HY, BA];
    var codePointsToCharacterClasses = function (codePoints, lineBreak) {
        if (lineBreak === void 0) { lineBreak = 'strict'; }
        var types = [];
        var indices = [];
        var categories = [];
        codePoints.forEach(function (codePoint, index) {
            var classType = UnicodeTrie$1.get(codePoint);
            if (classType > LETTER_NUMBER_MODIFIER) {
                categories.push(true);
                classType -= LETTER_NUMBER_MODIFIER;
            }
            else {
                categories.push(false);
            }
            if (['normal', 'auto', 'loose'].indexOf(lineBreak) !== -1) {
                // U+2010, – U+2013, 〜 U+301C, ゠ U+30A0
                if ([0x2010, 0x2013, 0x301c, 0x30a0].indexOf(codePoint) !== -1) {
                    indices.push(index);
                    return types.push(CB);
                }
            }
            if (classType === CM || classType === ZWJ$1) {
                // LB10 Treat any remaining combining mark or ZWJ as AL.
                if (index === 0) {
                    indices.push(index);
                    return types.push(AL);
                }
                // LB9 Do not break a combining character sequence; treat it as if it has the line breaking class of
                // the base character in all of the following rules. Treat ZWJ as if it were CM.
                var prev = types[index - 1];
                if (LINE_BREAKS.indexOf(prev) === -1) {
                    indices.push(indices[index - 1]);
                    return types.push(prev);
                }
                indices.push(index);
                return types.push(AL);
            }
            indices.push(index);
            if (classType === CJ) {
                return types.push(lineBreak === 'strict' ? NS : ID);
            }
            if (classType === SA) {
                return types.push(AL);
            }
            if (classType === AI) {
                return types.push(AL);
            }
            // For supplementary characters, a useful default is to treat characters in the range 10000..1FFFD as AL
            // and characters in the ranges 20000..2FFFD and 30000..3FFFD as ID, until the implementation can be revised
            // to take into account the actual line breaking properties for these characters.
            if (classType === XX) {
                if ((codePoint >= 0x20000 && codePoint <= 0x2fffd) || (codePoint >= 0x30000 && codePoint <= 0x3fffd)) {
                    return types.push(ID);
                }
                else {
                    return types.push(AL);
                }
            }
            types.push(classType);
        });
        return [indices, types, categories];
    };
    var isAdjacentWithSpaceIgnored = function (a, b, currentIndex, classTypes) {
        var current = classTypes[currentIndex];
        if (Array.isArray(a) ? a.indexOf(current) !== -1 : a === current) {
            var i = currentIndex;
            while (i <= classTypes.length) {
                i++;
                var next = classTypes[i];
                if (next === b) {
                    return true;
                }
                if (next !== SP) {
                    break;
                }
            }
        }
        if (current === SP) {
            var i = currentIndex;
            while (i > 0) {
                i--;
                var prev = classTypes[i];
                if (Array.isArray(a) ? a.indexOf(prev) !== -1 : a === prev) {
                    var n = currentIndex;
                    while (n <= classTypes.length) {
                        n++;
                        var next = classTypes[n];
                        if (next === b) {
                            return true;
                        }
                        if (next !== SP) {
                            break;
                        }
                    }
                }
                if (prev !== SP) {
                    break;
                }
            }
        }
        return false;
    };
    var previousNonSpaceClassType = function (currentIndex, classTypes) {
        var i = currentIndex;
        while (i >= 0) {
            var type = classTypes[i];
            if (type === SP) {
                i--;
            }
            else {
                return type;
            }
        }
        return 0;
    };
    var _lineBreakAtIndex = function (codePoints, classTypes, indicies, index, forbiddenBreaks) {
        if (indicies[index] === 0) {
            return BREAK_NOT_ALLOWED$1;
        }
        var currentIndex = index - 1;
        if (Array.isArray(forbiddenBreaks) && forbiddenBreaks[currentIndex] === true) {
            return BREAK_NOT_ALLOWED$1;
        }
        var beforeIndex = currentIndex - 1;
        var afterIndex = currentIndex + 1;
        var current = classTypes[currentIndex];
        // LB4 Always break after hard line breaks.
        // LB5 Treat CR followed by LF, as well as CR, LF, and NL as hard line breaks.
        var before = beforeIndex >= 0 ? classTypes[beforeIndex] : 0;
        var next = classTypes[afterIndex];
        if (current === CR$1 && next === LF$1) {
            return BREAK_NOT_ALLOWED$1;
        }
        if (HARD_LINE_BREAKS.indexOf(current) !== -1) {
            return BREAK_MANDATORY;
        }
        // LB6 Do not break before hard line breaks.
        if (HARD_LINE_BREAKS.indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB7 Do not break before spaces or zero width space.
        if (SPACE$1.indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB8 Break before any character following a zero-width space, even if one or more spaces intervene.
        if (previousNonSpaceClassType(currentIndex, classTypes) === ZW) {
            return BREAK_ALLOWED$1;
        }
        // LB8a Do not break after a zero width joiner.
        if (UnicodeTrie$1.get(codePoints[currentIndex]) === ZWJ$1) {
            return BREAK_NOT_ALLOWED$1;
        }
        // zwj emojis
        if ((current === EB || current === EM) && UnicodeTrie$1.get(codePoints[afterIndex]) === ZWJ$1) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB11 Do not break before or after Word joiner and related characters.
        if (current === WJ || next === WJ) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB12 Do not break after NBSP and related characters.
        if (current === GL) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB12a Do not break before NBSP and related characters, except after spaces and hyphens.
        if ([SP, BA, HY].indexOf(current) === -1 && next === GL) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB13 Do not break before ‘]’ or ‘!’ or ‘;’ or ‘/’, even after spaces.
        if ([CL, CP, EX, IS, SY].indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB14 Do not break after ‘[’, even after spaces.
        if (previousNonSpaceClassType(currentIndex, classTypes) === OP) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB15 Do not break within ‘”[’, even with intervening spaces.
        if (isAdjacentWithSpaceIgnored(QU, OP, currentIndex, classTypes)) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB16 Do not break between closing punctuation and a nonstarter (lb=NS), even with intervening spaces.
        if (isAdjacentWithSpaceIgnored([CL, CP], NS, currentIndex, classTypes)) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB17 Do not break within ‘——’, even with intervening spaces.
        if (isAdjacentWithSpaceIgnored(B2, B2, currentIndex, classTypes)) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB18 Break after spaces.
        if (current === SP) {
            return BREAK_ALLOWED$1;
        }
        // LB19 Do not break before or after quotation marks, such as ‘ ” ’.
        if (current === QU || next === QU) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB20 Break before and after unresolved CB.
        if (next === CB || current === CB) {
            return BREAK_ALLOWED$1;
        }
        // LB21 Do not break before hyphen-minus, other hyphens, fixed-width spaces, small kana, and other non-starters, or after acute accents.
        if ([BA, HY, NS].indexOf(next) !== -1 || current === BB) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB21a Don't break after Hebrew + Hyphen.
        if (before === HL && HYPHEN.indexOf(current) !== -1) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB21b Don’t break between Solidus and Hebrew letters.
        if (current === SY && next === HL) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB22 Do not break before ellipsis.
        if (next === IN) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB23 Do not break between digits and letters.
        if ((ALPHABETICS.indexOf(next) !== -1 && current === NU) || (ALPHABETICS.indexOf(current) !== -1 && next === NU)) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB23a Do not break between numeric prefixes and ideographs, or between ideographs and numeric postfixes.
        if ((current === PR && [ID, EB, EM].indexOf(next) !== -1) ||
            ([ID, EB, EM].indexOf(current) !== -1 && next === PO)) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB24 Do not break between numeric prefix/postfix and letters, or between letters and prefix/postfix.
        if ((ALPHABETICS.indexOf(current) !== -1 && PREFIX_POSTFIX.indexOf(next) !== -1) ||
            (PREFIX_POSTFIX.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1)) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB25 Do not break between the following pairs of classes relevant to numbers:
        if (
        // (PR | PO) × ( OP | HY )? NU
        ([PR, PO].indexOf(current) !== -1 &&
            (next === NU || ([OP, HY].indexOf(next) !== -1 && classTypes[afterIndex + 1] === NU))) ||
            // ( OP | HY ) × NU
            ([OP, HY].indexOf(current) !== -1 && next === NU) ||
            // NU ×	(NU | SY | IS)
            (current === NU && [NU, SY, IS].indexOf(next) !== -1)) {
            return BREAK_NOT_ALLOWED$1;
        }
        // NU (NU | SY | IS)* × (NU | SY | IS | CL | CP)
        if ([NU, SY, IS, CL, CP].indexOf(next) !== -1) {
            var prevIndex = currentIndex;
            while (prevIndex >= 0) {
                var type = classTypes[prevIndex];
                if (type === NU) {
                    return BREAK_NOT_ALLOWED$1;
                }
                else if ([SY, IS].indexOf(type) !== -1) {
                    prevIndex--;
                }
                else {
                    break;
                }
            }
        }
        // NU (NU | SY | IS)* (CL | CP)? × (PO | PR))
        if ([PR, PO].indexOf(next) !== -1) {
            var prevIndex = [CL, CP].indexOf(current) !== -1 ? beforeIndex : currentIndex;
            while (prevIndex >= 0) {
                var type = classTypes[prevIndex];
                if (type === NU) {
                    return BREAK_NOT_ALLOWED$1;
                }
                else if ([SY, IS].indexOf(type) !== -1) {
                    prevIndex--;
                }
                else {
                    break;
                }
            }
        }
        // LB26 Do not break a Korean syllable.
        if ((JL === current && [JL, JV, H2, H3].indexOf(next) !== -1) ||
            ([JV, H2].indexOf(current) !== -1 && [JV, JT].indexOf(next) !== -1) ||
            ([JT, H3].indexOf(current) !== -1 && next === JT)) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB27 Treat a Korean Syllable Block the same as ID.
        if ((KOREAN_SYLLABLE_BLOCK.indexOf(current) !== -1 && [IN, PO].indexOf(next) !== -1) ||
            (KOREAN_SYLLABLE_BLOCK.indexOf(next) !== -1 && current === PR)) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB28 Do not break between alphabetics (“at”).
        if (ALPHABETICS.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB29 Do not break between numeric punctuation and alphabetics (“e.g.”).
        if (current === IS && ALPHABETICS.indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB30 Do not break between letters, numbers, or ordinary symbols and opening or closing parentheses.
        if ((ALPHABETICS.concat(NU).indexOf(current) !== -1 &&
            next === OP &&
            ea_OP.indexOf(codePoints[afterIndex]) === -1) ||
            (ALPHABETICS.concat(NU).indexOf(next) !== -1 && current === CP)) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB30a Break between two regional indicator symbols if and only if there are an even number of regional
        // indicators preceding the position of the break.
        if (current === RI$1 && next === RI$1) {
            var i = indicies[currentIndex];
            var count = 1;
            while (i > 0) {
                i--;
                if (classTypes[i] === RI$1) {
                    count++;
                }
                else {
                    break;
                }
            }
            if (count % 2 !== 0) {
                return BREAK_NOT_ALLOWED$1;
            }
        }
        // LB30b Do not break between an emoji base and an emoji modifier.
        if (current === EB && next === EM) {
            return BREAK_NOT_ALLOWED$1;
        }
        return BREAK_ALLOWED$1;
    };
    var cssFormattedClasses = function (codePoints, options) {
        if (!options) {
            options = { lineBreak: 'normal', wordBreak: 'normal' };
        }
        var _a = codePointsToCharacterClasses(codePoints, options.lineBreak), indicies = _a[0], classTypes = _a[1], isLetterNumber = _a[2];
        if (options.wordBreak === 'break-all' || options.wordBreak === 'break-word') {
            classTypes = classTypes.map(function (type) { return ([NU, AL, SA].indexOf(type) !== -1 ? ID : type); });
        }
        var forbiddenBreakpoints = options.wordBreak === 'keep-all'
            ? isLetterNumber.map(function (letterNumber, i) {
                return letterNumber && codePoints[i] >= 0x4e00 && codePoints[i] <= 0x9fff;
            })
            : undefined;
        return [indicies, classTypes, forbiddenBreakpoints];
    };
    var Break = /** @class */ (function () {
        function Break(codePoints, lineBreak, start, end) {
            this.codePoints = codePoints;
            this.required = lineBreak === BREAK_MANDATORY;
            this.start = start;
            this.end = end;
        }
        Break.prototype.slice = function () {
            return fromCodePoint$1.apply(void 0, this.codePoints.slice(this.start, this.end));
        };
        return Break;
    }());
    var LineBreaker = function (str, options) {
        var codePoints = toCodePoints$1(str);
        var _a = cssFormattedClasses(codePoints, options), indicies = _a[0], classTypes = _a[1], forbiddenBreakpoints = _a[2];
        var length = codePoints.length;
        var lastEnd = 0;
        var nextIndex = 0;
        return {
            next: function () {
                if (nextIndex >= length) {
                    return { done: true, value: null };
                }
                var lineBreak = BREAK_NOT_ALLOWED$1;
                while (nextIndex < length &&
                    (lineBreak = _lineBreakAtIndex(codePoints, classTypes, indicies, ++nextIndex, forbiddenBreakpoints)) ===
                        BREAK_NOT_ALLOWED$1) { }
                if (lineBreak !== BREAK_NOT_ALLOWED$1 || nextIndex === length) {
                    var value = new Break(codePoints, lineBreak, lastEnd, nextIndex);
                    lastEnd = nextIndex;
                    return { value: value, done: false };
                }
                return { done: true, value: null };
            },
        };
    };

    // https://www.w3.org/TR/css-syntax-3
    var FLAG_UNRESTRICTED = 1 << 0;
    var FLAG_ID = 1 << 1;
    var FLAG_INTEGER = 1 << 2;
    var FLAG_NUMBER = 1 << 3;
    var LINE_FEED = 0x000a;
    var SOLIDUS = 0x002f;
    var REVERSE_SOLIDUS = 0x005c;
    var CHARACTER_TABULATION = 0x0009;
    var SPACE = 0x0020;
    var QUOTATION_MARK = 0x0022;
    var EQUALS_SIGN = 0x003d;
    var NUMBER_SIGN = 0x0023;
    var DOLLAR_SIGN = 0x0024;
    var PERCENTAGE_SIGN = 0x0025;
    var APOSTROPHE = 0x0027;
    var LEFT_PARENTHESIS = 0x0028;
    var RIGHT_PARENTHESIS = 0x0029;
    var LOW_LINE = 0x005f;
    var HYPHEN_MINUS = 0x002d;
    var EXCLAMATION_MARK = 0x0021;
    var LESS_THAN_SIGN = 0x003c;
    var GREATER_THAN_SIGN = 0x003e;
    var COMMERCIAL_AT = 0x0040;
    var LEFT_SQUARE_BRACKET = 0x005b;
    var RIGHT_SQUARE_BRACKET = 0x005d;
    var CIRCUMFLEX_ACCENT = 0x003d;
    var LEFT_CURLY_BRACKET = 0x007b;
    var QUESTION_MARK = 0x003f;
    var RIGHT_CURLY_BRACKET = 0x007d;
    var VERTICAL_LINE = 0x007c;
    var TILDE = 0x007e;
    var CONTROL = 0x0080;
    var REPLACEMENT_CHARACTER = 0xfffd;
    var ASTERISK = 0x002a;
    var PLUS_SIGN = 0x002b;
    var COMMA = 0x002c;
    var COLON = 0x003a;
    var SEMICOLON = 0x003b;
    var FULL_STOP = 0x002e;
    var NULL = 0x0000;
    var BACKSPACE = 0x0008;
    var LINE_TABULATION = 0x000b;
    var SHIFT_OUT = 0x000e;
    var INFORMATION_SEPARATOR_ONE = 0x001f;
    var DELETE = 0x007f;
    var EOF = -1;
    var ZERO = 0x0030;
    var a = 0x0061;
    var e = 0x0065;
    var f = 0x0066;
    var u = 0x0075;
    var z = 0x007a;
    var A = 0x0041;
    var E = 0x0045;
    var F = 0x0046;
    var U = 0x0055;
    var Z = 0x005a;
    var isDigit = function (codePoint) { return codePoint >= ZERO && codePoint <= 0x0039; };
    var isSurrogateCodePoint = function (codePoint) { return codePoint >= 0xd800 && codePoint <= 0xdfff; };
    var isHex = function (codePoint) {
        return isDigit(codePoint) || (codePoint >= A && codePoint <= F) || (codePoint >= a && codePoint <= f);
    };
    var isLowerCaseLetter = function (codePoint) { return codePoint >= a && codePoint <= z; };
    var isUpperCaseLetter = function (codePoint) { return codePoint >= A && codePoint <= Z; };
    var isLetter = function (codePoint) { return isLowerCaseLetter(codePoint) || isUpperCaseLetter(codePoint); };
    var isNonASCIICodePoint = function (codePoint) { return codePoint >= CONTROL; };
    var isWhiteSpace = function (codePoint) {
        return codePoint === LINE_FEED || codePoint === CHARACTER_TABULATION || codePoint === SPACE;
    };
    var isNameStartCodePoint = function (codePoint) {
        return isLetter(codePoint) || isNonASCIICodePoint(codePoint) || codePoint === LOW_LINE;
    };
    var isNameCodePoint = function (codePoint) {
        return isNameStartCodePoint(codePoint) || isDigit(codePoint) || codePoint === HYPHEN_MINUS;
    };
    var isNonPrintableCodePoint = function (codePoint) {
        return ((codePoint >= NULL && codePoint <= BACKSPACE) ||
            codePoint === LINE_TABULATION ||
            (codePoint >= SHIFT_OUT && codePoint <= INFORMATION_SEPARATOR_ONE) ||
            codePoint === DELETE);
    };
    var isValidEscape = function (c1, c2) {
        if (c1 !== REVERSE_SOLIDUS) {
            return false;
        }
        return c2 !== LINE_FEED;
    };
    var isIdentifierStart = function (c1, c2, c3) {
        if (c1 === HYPHEN_MINUS) {
            return isNameStartCodePoint(c2) || isValidEscape(c2, c3);
        }
        else if (isNameStartCodePoint(c1)) {
            return true;
        }
        else if (c1 === REVERSE_SOLIDUS && isValidEscape(c1, c2)) {
            return true;
        }
        return false;
    };
    var isNumberStart = function (c1, c2, c3) {
        if (c1 === PLUS_SIGN || c1 === HYPHEN_MINUS) {
            if (isDigit(c2)) {
                return true;
            }
            return c2 === FULL_STOP && isDigit(c3);
        }
        if (c1 === FULL_STOP) {
            return isDigit(c2);
        }
        return isDigit(c1);
    };
    var stringToNumber = function (codePoints) {
        var c = 0;
        var sign = 1;
        if (codePoints[c] === PLUS_SIGN || codePoints[c] === HYPHEN_MINUS) {
            if (codePoints[c] === HYPHEN_MINUS) {
                sign = -1;
            }
            c++;
        }
        var integers = [];
        while (isDigit(codePoints[c])) {
            integers.push(codePoints[c++]);
        }
        var int = integers.length ? parseInt(fromCodePoint$1.apply(void 0, integers), 10) : 0;
        if (codePoints[c] === FULL_STOP) {
            c++;
        }
        var fraction = [];
        while (isDigit(codePoints[c])) {
            fraction.push(codePoints[c++]);
        }
        var fracd = fraction.length;
        var frac = fracd ? parseInt(fromCodePoint$1.apply(void 0, fraction), 10) : 0;
        if (codePoints[c] === E || codePoints[c] === e) {
            c++;
        }
        var expsign = 1;
        if (codePoints[c] === PLUS_SIGN || codePoints[c] === HYPHEN_MINUS) {
            if (codePoints[c] === HYPHEN_MINUS) {
                expsign = -1;
            }
            c++;
        }
        var exponent = [];
        while (isDigit(codePoints[c])) {
            exponent.push(codePoints[c++]);
        }
        var exp = exponent.length ? parseInt(fromCodePoint$1.apply(void 0, exponent), 10) : 0;
        return sign * (int + frac * Math.pow(10, -fracd)) * Math.pow(10, expsign * exp);
    };
    var LEFT_PARENTHESIS_TOKEN = {
        type: 2 /* LEFT_PARENTHESIS_TOKEN */
    };
    var RIGHT_PARENTHESIS_TOKEN = {
        type: 3 /* RIGHT_PARENTHESIS_TOKEN */
    };
    var COMMA_TOKEN = { type: 4 /* COMMA_TOKEN */ };
    var SUFFIX_MATCH_TOKEN = { type: 13 /* SUFFIX_MATCH_TOKEN */ };
    var PREFIX_MATCH_TOKEN = { type: 8 /* PREFIX_MATCH_TOKEN */ };
    var COLUMN_TOKEN = { type: 21 /* COLUMN_TOKEN */ };
    var DASH_MATCH_TOKEN = { type: 9 /* DASH_MATCH_TOKEN */ };
    var INCLUDE_MATCH_TOKEN = { type: 10 /* INCLUDE_MATCH_TOKEN */ };
    var LEFT_CURLY_BRACKET_TOKEN = {
        type: 11 /* LEFT_CURLY_BRACKET_TOKEN */
    };
    var RIGHT_CURLY_BRACKET_TOKEN = {
        type: 12 /* RIGHT_CURLY_BRACKET_TOKEN */
    };
    var SUBSTRING_MATCH_TOKEN = { type: 14 /* SUBSTRING_MATCH_TOKEN */ };
    var BAD_URL_TOKEN = { type: 23 /* BAD_URL_TOKEN */ };
    var BAD_STRING_TOKEN = { type: 1 /* BAD_STRING_TOKEN */ };
    var CDO_TOKEN = { type: 25 /* CDO_TOKEN */ };
    var CDC_TOKEN = { type: 24 /* CDC_TOKEN */ };
    var COLON_TOKEN = { type: 26 /* COLON_TOKEN */ };
    var SEMICOLON_TOKEN = { type: 27 /* SEMICOLON_TOKEN */ };
    var LEFT_SQUARE_BRACKET_TOKEN = {
        type: 28 /* LEFT_SQUARE_BRACKET_TOKEN */
    };
    var RIGHT_SQUARE_BRACKET_TOKEN = {
        type: 29 /* RIGHT_SQUARE_BRACKET_TOKEN */
    };
    var WHITESPACE_TOKEN = { type: 31 /* WHITESPACE_TOKEN */ };
    var EOF_TOKEN = { type: 32 /* EOF_TOKEN */ };
    var Tokenizer = /** @class */ (function () {
        function Tokenizer() {
            this._value = [];
        }
        Tokenizer.prototype.write = function (chunk) {
            this._value = this._value.concat(toCodePoints$1(chunk));
        };
        Tokenizer.prototype.read = function () {
            var tokens = [];
            var token = this.consumeToken();
            while (token !== EOF_TOKEN) {
                tokens.push(token);
                token = this.consumeToken();
            }
            return tokens;
        };
        Tokenizer.prototype.consumeToken = function () {
            var codePoint = this.consumeCodePoint();
            switch (codePoint) {
                case QUOTATION_MARK:
                    return this.consumeStringToken(QUOTATION_MARK);
                case NUMBER_SIGN:
                    var c1 = this.peekCodePoint(0);
                    var c2 = this.peekCodePoint(1);
                    var c3 = this.peekCodePoint(2);
                    if (isNameCodePoint(c1) || isValidEscape(c2, c3)) {
                        var flags = isIdentifierStart(c1, c2, c3) ? FLAG_ID : FLAG_UNRESTRICTED;
                        var value = this.consumeName();
                        return { type: 5 /* HASH_TOKEN */, value: value, flags: flags };
                    }
                    break;
                case DOLLAR_SIGN:
                    if (this.peekCodePoint(0) === EQUALS_SIGN) {
                        this.consumeCodePoint();
                        return SUFFIX_MATCH_TOKEN;
                    }
                    break;
                case APOSTROPHE:
                    return this.consumeStringToken(APOSTROPHE);
                case LEFT_PARENTHESIS:
                    return LEFT_PARENTHESIS_TOKEN;
                case RIGHT_PARENTHESIS:
                    return RIGHT_PARENTHESIS_TOKEN;
                case ASTERISK:
                    if (this.peekCodePoint(0) === EQUALS_SIGN) {
                        this.consumeCodePoint();
                        return SUBSTRING_MATCH_TOKEN;
                    }
                    break;
                case PLUS_SIGN:
                    if (isNumberStart(codePoint, this.peekCodePoint(0), this.peekCodePoint(1))) {
                        this.reconsumeCodePoint(codePoint);
                        return this.consumeNumericToken();
                    }
                    break;
                case COMMA:
                    return COMMA_TOKEN;
                case HYPHEN_MINUS:
                    var e1 = codePoint;
                    var e2 = this.peekCodePoint(0);
                    var e3 = this.peekCodePoint(1);
                    if (isNumberStart(e1, e2, e3)) {
                        this.reconsumeCodePoint(codePoint);
                        return this.consumeNumericToken();
                    }
                    if (isIdentifierStart(e1, e2, e3)) {
                        this.reconsumeCodePoint(codePoint);
                        return this.consumeIdentLikeToken();
                    }
                    if (e2 === HYPHEN_MINUS && e3 === GREATER_THAN_SIGN) {
                        this.consumeCodePoint();
                        this.consumeCodePoint();
                        return CDC_TOKEN;
                    }
                    break;
                case FULL_STOP:
                    if (isNumberStart(codePoint, this.peekCodePoint(0), this.peekCodePoint(1))) {
                        this.reconsumeCodePoint(codePoint);
                        return this.consumeNumericToken();
                    }
                    break;
                case SOLIDUS:
                    if (this.peekCodePoint(0) === ASTERISK) {
                        this.consumeCodePoint();
                        while (true) {
                            var c = this.consumeCodePoint();
                            if (c === ASTERISK) {
                                c = this.consumeCodePoint();
                                if (c === SOLIDUS) {
                                    return this.consumeToken();
                                }
                            }
                            if (c === EOF) {
                                return this.consumeToken();
                            }
                        }
                    }
                    break;
                case COLON:
                    return COLON_TOKEN;
                case SEMICOLON:
                    return SEMICOLON_TOKEN;
                case LESS_THAN_SIGN:
                    if (this.peekCodePoint(0) === EXCLAMATION_MARK &&
                        this.peekCodePoint(1) === HYPHEN_MINUS &&
                        this.peekCodePoint(2) === HYPHEN_MINUS) {
                        this.consumeCodePoint();
                        this.consumeCodePoint();
                        return CDO_TOKEN;
                    }
                    break;
                case COMMERCIAL_AT:
                    var a1 = this.peekCodePoint(0);
                    var a2 = this.peekCodePoint(1);
                    var a3 = this.peekCodePoint(2);
                    if (isIdentifierStart(a1, a2, a3)) {
                        var value = this.consumeName();
                        return { type: 7 /* AT_KEYWORD_TOKEN */, value: value };
                    }
                    break;
                case LEFT_SQUARE_BRACKET:
                    return LEFT_SQUARE_BRACKET_TOKEN;
                case REVERSE_SOLIDUS:
                    if (isValidEscape(codePoint, this.peekCodePoint(0))) {
                        this.reconsumeCodePoint(codePoint);
                        return this.consumeIdentLikeToken();
                    }
                    break;
                case RIGHT_SQUARE_BRACKET:
                    return RIGHT_SQUARE_BRACKET_TOKEN;
                case CIRCUMFLEX_ACCENT:
                    if (this.peekCodePoint(0) === EQUALS_SIGN) {
                        this.consumeCodePoint();
                        return PREFIX_MATCH_TOKEN;
                    }
                    break;
                case LEFT_CURLY_BRACKET:
                    return LEFT_CURLY_BRACKET_TOKEN;
                case RIGHT_CURLY_BRACKET:
                    return RIGHT_CURLY_BRACKET_TOKEN;
                case u:
                case U:
                    var u1 = this.peekCodePoint(0);
                    var u2 = this.peekCodePoint(1);
                    if (u1 === PLUS_SIGN && (isHex(u2) || u2 === QUESTION_MARK)) {
                        this.consumeCodePoint();
                        this.consumeUnicodeRangeToken();
                    }
                    this.reconsumeCodePoint(codePoint);
                    return this.consumeIdentLikeToken();
                case VERTICAL_LINE:
                    if (this.peekCodePoint(0) === EQUALS_SIGN) {
                        this.consumeCodePoint();
                        return DASH_MATCH_TOKEN;
                    }
                    if (this.peekCodePoint(0) === VERTICAL_LINE) {
                        this.consumeCodePoint();
                        return COLUMN_TOKEN;
                    }
                    break;
                case TILDE:
                    if (this.peekCodePoint(0) === EQUALS_SIGN) {
                        this.consumeCodePoint();
                        return INCLUDE_MATCH_TOKEN;
                    }
                    break;
                case EOF:
                    return EOF_TOKEN;
            }
            if (isWhiteSpace(codePoint)) {
                this.consumeWhiteSpace();
                return WHITESPACE_TOKEN;
            }
            if (isDigit(codePoint)) {
                this.reconsumeCodePoint(codePoint);
                return this.consumeNumericToken();
            }
            if (isNameStartCodePoint(codePoint)) {
                this.reconsumeCodePoint(codePoint);
                return this.consumeIdentLikeToken();
            }
            return { type: 6 /* DELIM_TOKEN */, value: fromCodePoint$1(codePoint) };
        };
        Tokenizer.prototype.consumeCodePoint = function () {
            var value = this._value.shift();
            return typeof value === 'undefined' ? -1 : value;
        };
        Tokenizer.prototype.reconsumeCodePoint = function (codePoint) {
            this._value.unshift(codePoint);
        };
        Tokenizer.prototype.peekCodePoint = function (delta) {
            if (delta >= this._value.length) {
                return -1;
            }
            return this._value[delta];
        };
        Tokenizer.prototype.consumeUnicodeRangeToken = function () {
            var digits = [];
            var codePoint = this.consumeCodePoint();
            while (isHex(codePoint) && digits.length < 6) {
                digits.push(codePoint);
                codePoint = this.consumeCodePoint();
            }
            var questionMarks = false;
            while (codePoint === QUESTION_MARK && digits.length < 6) {
                digits.push(codePoint);
                codePoint = this.consumeCodePoint();
                questionMarks = true;
            }
            if (questionMarks) {
                var start_1 = parseInt(fromCodePoint$1.apply(void 0, digits.map(function (digit) { return (digit === QUESTION_MARK ? ZERO : digit); })), 16);
                var end = parseInt(fromCodePoint$1.apply(void 0, digits.map(function (digit) { return (digit === QUESTION_MARK ? F : digit); })), 16);
                return { type: 30 /* UNICODE_RANGE_TOKEN */, start: start_1, end: end };
            }
            var start = parseInt(fromCodePoint$1.apply(void 0, digits), 16);
            if (this.peekCodePoint(0) === HYPHEN_MINUS && isHex(this.peekCodePoint(1))) {
                this.consumeCodePoint();
                codePoint = this.consumeCodePoint();
                var endDigits = [];
                while (isHex(codePoint) && endDigits.length < 6) {
                    endDigits.push(codePoint);
                    codePoint = this.consumeCodePoint();
                }
                var end = parseInt(fromCodePoint$1.apply(void 0, endDigits), 16);
                return { type: 30 /* UNICODE_RANGE_TOKEN */, start: start, end: end };
            }
            else {
                return { type: 30 /* UNICODE_RANGE_TOKEN */, start: start, end: start };
            }
        };
        Tokenizer.prototype.consumeIdentLikeToken = function () {
            var value = this.consumeName();
            if (value.toLowerCase() === 'url' && this.peekCodePoint(0) === LEFT_PARENTHESIS) {
                this.consumeCodePoint();
                return this.consumeUrlToken();
            }
            else if (this.peekCodePoint(0) === LEFT_PARENTHESIS) {
                this.consumeCodePoint();
                return { type: 19 /* FUNCTION_TOKEN */, value: value };
            }
            return { type: 20 /* IDENT_TOKEN */, value: value };
        };
        Tokenizer.prototype.consumeUrlToken = function () {
            var value = [];
            this.consumeWhiteSpace();
            if (this.peekCodePoint(0) === EOF) {
                return { type: 22 /* URL_TOKEN */, value: '' };
            }
            var next = this.peekCodePoint(0);
            if (next === APOSTROPHE || next === QUOTATION_MARK) {
                var stringToken = this.consumeStringToken(this.consumeCodePoint());
                if (stringToken.type === 0 /* STRING_TOKEN */) {
                    this.consumeWhiteSpace();
                    if (this.peekCodePoint(0) === EOF || this.peekCodePoint(0) === RIGHT_PARENTHESIS) {
                        this.consumeCodePoint();
                        return { type: 22 /* URL_TOKEN */, value: stringToken.value };
                    }
                }
                this.consumeBadUrlRemnants();
                return BAD_URL_TOKEN;
            }
            while (true) {
                var codePoint = this.consumeCodePoint();
                if (codePoint === EOF || codePoint === RIGHT_PARENTHESIS) {
                    return { type: 22 /* URL_TOKEN */, value: fromCodePoint$1.apply(void 0, value) };
                }
                else if (isWhiteSpace(codePoint)) {
                    this.consumeWhiteSpace();
                    if (this.peekCodePoint(0) === EOF || this.peekCodePoint(0) === RIGHT_PARENTHESIS) {
                        this.consumeCodePoint();
                        return { type: 22 /* URL_TOKEN */, value: fromCodePoint$1.apply(void 0, value) };
                    }
                    this.consumeBadUrlRemnants();
                    return BAD_URL_TOKEN;
                }
                else if (codePoint === QUOTATION_MARK ||
                    codePoint === APOSTROPHE ||
                    codePoint === LEFT_PARENTHESIS ||
                    isNonPrintableCodePoint(codePoint)) {
                    this.consumeBadUrlRemnants();
                    return BAD_URL_TOKEN;
                }
                else if (codePoint === REVERSE_SOLIDUS) {
                    if (isValidEscape(codePoint, this.peekCodePoint(0))) {
                        value.push(this.consumeEscapedCodePoint());
                    }
                    else {
                        this.consumeBadUrlRemnants();
                        return BAD_URL_TOKEN;
                    }
                }
                else {
                    value.push(codePoint);
                }
            }
        };
        Tokenizer.prototype.consumeWhiteSpace = function () {
            while (isWhiteSpace(this.peekCodePoint(0))) {
                this.consumeCodePoint();
            }
        };
        Tokenizer.prototype.consumeBadUrlRemnants = function () {
            while (true) {
                var codePoint = this.consumeCodePoint();
                if (codePoint === RIGHT_PARENTHESIS || codePoint === EOF) {
                    return;
                }
                if (isValidEscape(codePoint, this.peekCodePoint(0))) {
                    this.consumeEscapedCodePoint();
                }
            }
        };
        Tokenizer.prototype.consumeStringSlice = function (count) {
            var SLICE_STACK_SIZE = 50000;
            var value = '';
            while (count > 0) {
                var amount = Math.min(SLICE_STACK_SIZE, count);
                value += fromCodePoint$1.apply(void 0, this._value.splice(0, amount));
                count -= amount;
            }
            this._value.shift();
            return value;
        };
        Tokenizer.prototype.consumeStringToken = function (endingCodePoint) {
            var value = '';
            var i = 0;
            do {
                var codePoint = this._value[i];
                if (codePoint === EOF || codePoint === undefined || codePoint === endingCodePoint) {
                    value += this.consumeStringSlice(i);
                    return { type: 0 /* STRING_TOKEN */, value: value };
                }
                if (codePoint === LINE_FEED) {
                    this._value.splice(0, i);
                    return BAD_STRING_TOKEN;
                }
                if (codePoint === REVERSE_SOLIDUS) {
                    var next = this._value[i + 1];
                    if (next !== EOF && next !== undefined) {
                        if (next === LINE_FEED) {
                            value += this.consumeStringSlice(i);
                            i = -1;
                            this._value.shift();
                        }
                        else if (isValidEscape(codePoint, next)) {
                            value += this.consumeStringSlice(i);
                            value += fromCodePoint$1(this.consumeEscapedCodePoint());
                            i = -1;
                        }
                    }
                }
                i++;
            } while (true);
        };
        Tokenizer.prototype.consumeNumber = function () {
            var repr = [];
            var type = FLAG_INTEGER;
            var c1 = this.peekCodePoint(0);
            if (c1 === PLUS_SIGN || c1 === HYPHEN_MINUS) {
                repr.push(this.consumeCodePoint());
            }
            while (isDigit(this.peekCodePoint(0))) {
                repr.push(this.consumeCodePoint());
            }
            c1 = this.peekCodePoint(0);
            var c2 = this.peekCodePoint(1);
            if (c1 === FULL_STOP && isDigit(c2)) {
                repr.push(this.consumeCodePoint(), this.consumeCodePoint());
                type = FLAG_NUMBER;
                while (isDigit(this.peekCodePoint(0))) {
                    repr.push(this.consumeCodePoint());
                }
            }
            c1 = this.peekCodePoint(0);
            c2 = this.peekCodePoint(1);
            var c3 = this.peekCodePoint(2);
            if ((c1 === E || c1 === e) && (((c2 === PLUS_SIGN || c2 === HYPHEN_MINUS) && isDigit(c3)) || isDigit(c2))) {
                repr.push(this.consumeCodePoint(), this.consumeCodePoint());
                type = FLAG_NUMBER;
                while (isDigit(this.peekCodePoint(0))) {
                    repr.push(this.consumeCodePoint());
                }
            }
            return [stringToNumber(repr), type];
        };
        Tokenizer.prototype.consumeNumericToken = function () {
            var _a = this.consumeNumber(), number = _a[0], flags = _a[1];
            var c1 = this.peekCodePoint(0);
            var c2 = this.peekCodePoint(1);
            var c3 = this.peekCodePoint(2);
            if (isIdentifierStart(c1, c2, c3)) {
                var unit = this.consumeName();
                return { type: 15 /* DIMENSION_TOKEN */, number: number, flags: flags, unit: unit };
            }
            if (c1 === PERCENTAGE_SIGN) {
                this.consumeCodePoint();
                return { type: 16 /* PERCENTAGE_TOKEN */, number: number, flags: flags };
            }
            return { type: 17 /* NUMBER_TOKEN */, number: number, flags: flags };
        };
        Tokenizer.prototype.consumeEscapedCodePoint = function () {
            var codePoint = this.consumeCodePoint();
            if (isHex(codePoint)) {
                var hex = fromCodePoint$1(codePoint);
                while (isHex(this.peekCodePoint(0)) && hex.length < 6) {
                    hex += fromCodePoint$1(this.consumeCodePoint());
                }
                if (isWhiteSpace(this.peekCodePoint(0))) {
                    this.consumeCodePoint();
                }
                var hexCodePoint = parseInt(hex, 16);
                if (hexCodePoint === 0 || isSurrogateCodePoint(hexCodePoint) || hexCodePoint > 0x10ffff) {
                    return REPLACEMENT_CHARACTER;
                }
                return hexCodePoint;
            }
            if (codePoint === EOF) {
                return REPLACEMENT_CHARACTER;
            }
            return codePoint;
        };
        Tokenizer.prototype.consumeName = function () {
            var result = '';
            while (true) {
                var codePoint = this.consumeCodePoint();
                if (isNameCodePoint(codePoint)) {
                    result += fromCodePoint$1(codePoint);
                }
                else if (isValidEscape(codePoint, this.peekCodePoint(0))) {
                    result += fromCodePoint$1(this.consumeEscapedCodePoint());
                }
                else {
                    this.reconsumeCodePoint(codePoint);
                    return result;
                }
            }
        };
        return Tokenizer;
    }());

    var Parser = /** @class */ (function () {
        function Parser(tokens) {
            this._tokens = tokens;
        }
        Parser.create = function (value) {
            var tokenizer = new Tokenizer();
            tokenizer.write(value);
            return new Parser(tokenizer.read());
        };
        Parser.parseValue = function (value) {
            return Parser.create(value).parseComponentValue();
        };
        Parser.parseValues = function (value) {
            return Parser.create(value).parseComponentValues();
        };
        Parser.prototype.parseComponentValue = function () {
            var token = this.consumeToken();
            while (token.type === 31 /* WHITESPACE_TOKEN */) {
                token = this.consumeToken();
            }
            if (token.type === 32 /* EOF_TOKEN */) {
                throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
            }
            this.reconsumeToken(token);
            var value = this.consumeComponentValue();
            do {
                token = this.consumeToken();
            } while (token.type === 31 /* WHITESPACE_TOKEN */);
            if (token.type === 32 /* EOF_TOKEN */) {
                return value;
            }
            throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
        };
        Parser.prototype.parseComponentValues = function () {
            var values = [];
            while (true) {
                var value = this.consumeComponentValue();
                if (value.type === 32 /* EOF_TOKEN */) {
                    return values;
                }
                values.push(value);
                values.push();
            }
        };
        Parser.prototype.consumeComponentValue = function () {
            var token = this.consumeToken();
            switch (token.type) {
                case 11 /* LEFT_CURLY_BRACKET_TOKEN */:
                case 28 /* LEFT_SQUARE_BRACKET_TOKEN */:
                case 2 /* LEFT_PARENTHESIS_TOKEN */:
                    return this.consumeSimpleBlock(token.type);
                case 19 /* FUNCTION_TOKEN */:
                    return this.consumeFunction(token);
            }
            return token;
        };
        Parser.prototype.consumeSimpleBlock = function (type) {
            var block = { type: type, values: [] };
            var token = this.consumeToken();
            while (true) {
                if (token.type === 32 /* EOF_TOKEN */ || isEndingTokenFor(token, type)) {
                    return block;
                }
                this.reconsumeToken(token);
                block.values.push(this.consumeComponentValue());
                token = this.consumeToken();
            }
        };
        Parser.prototype.consumeFunction = function (functionToken) {
            var cssFunction = {
                name: functionToken.value,
                values: [],
                type: 18 /* FUNCTION */
            };
            while (true) {
                var token = this.consumeToken();
                if (token.type === 32 /* EOF_TOKEN */ || token.type === 3 /* RIGHT_PARENTHESIS_TOKEN */) {
                    return cssFunction;
                }
                this.reconsumeToken(token);
                cssFunction.values.push(this.consumeComponentValue());
            }
        };
        Parser.prototype.consumeToken = function () {
            var token = this._tokens.shift();
            return typeof token === 'undefined' ? EOF_TOKEN : token;
        };
        Parser.prototype.reconsumeToken = function (token) {
            this._tokens.unshift(token);
        };
        return Parser;
    }());
    var isDimensionToken = function (token) { return token.type === 15 /* DIMENSION_TOKEN */; };
    var isNumberToken = function (token) { return token.type === 17 /* NUMBER_TOKEN */; };
    var isIdentToken = function (token) { return token.type === 20 /* IDENT_TOKEN */; };
    var isStringToken = function (token) { return token.type === 0 /* STRING_TOKEN */; };
    var isIdentWithValue = function (token, value) {
        return isIdentToken(token) && token.value === value;
    };
    var nonWhiteSpace = function (token) { return token.type !== 31 /* WHITESPACE_TOKEN */; };
    var nonFunctionArgSeparator = function (token) {
        return token.type !== 31 /* WHITESPACE_TOKEN */ && token.type !== 4 /* COMMA_TOKEN */;
    };
    var parseFunctionArgs = function (tokens) {
        var args = [];
        var arg = [];
        tokens.forEach(function (token) {
            if (token.type === 4 /* COMMA_TOKEN */) {
                if (arg.length === 0) {
                    throw new Error("Error parsing function args, zero tokens for arg");
                }
                args.push(arg);
                arg = [];
                return;
            }
            if (token.type !== 31 /* WHITESPACE_TOKEN */) {
                arg.push(token);
            }
        });
        if (arg.length) {
            args.push(arg);
        }
        return args;
    };
    var isEndingTokenFor = function (token, type) {
        if (type === 11 /* LEFT_CURLY_BRACKET_TOKEN */ && token.type === 12 /* RIGHT_CURLY_BRACKET_TOKEN */) {
            return true;
        }
        if (type === 28 /* LEFT_SQUARE_BRACKET_TOKEN */ && token.type === 29 /* RIGHT_SQUARE_BRACKET_TOKEN */) {
            return true;
        }
        return type === 2 /* LEFT_PARENTHESIS_TOKEN */ && token.type === 3 /* RIGHT_PARENTHESIS_TOKEN */;
    };

    var isLength = function (token) {
        return token.type === 17 /* NUMBER_TOKEN */ || token.type === 15 /* DIMENSION_TOKEN */;
    };

    var isLengthPercentage = function (token) {
        return token.type === 16 /* PERCENTAGE_TOKEN */ || isLength(token);
    };
    var parseLengthPercentageTuple = function (tokens) {
        return tokens.length > 1 ? [tokens[0], tokens[1]] : [tokens[0]];
    };
    var ZERO_LENGTH = {
        type: 17 /* NUMBER_TOKEN */,
        number: 0,
        flags: FLAG_INTEGER
    };
    var FIFTY_PERCENT = {
        type: 16 /* PERCENTAGE_TOKEN */,
        number: 50,
        flags: FLAG_INTEGER
    };
    var HUNDRED_PERCENT = {
        type: 16 /* PERCENTAGE_TOKEN */,
        number: 100,
        flags: FLAG_INTEGER
    };
    var getAbsoluteValueForTuple = function (tuple, width, height) {
        var x = tuple[0], y = tuple[1];
        return [getAbsoluteValue(x, width), getAbsoluteValue(typeof y !== 'undefined' ? y : x, height)];
    };
    var getAbsoluteValue = function (token, parent) {
        if (token.type === 16 /* PERCENTAGE_TOKEN */) {
            return (token.number / 100) * parent;
        }
        if (isDimensionToken(token)) {
            switch (token.unit) {
                case 'rem':
                case 'em':
                    return 16 * token.number; // TODO use correct font-size
                case 'px':
                default:
                    return token.number;
            }
        }
        return token.number;
    };

    var DEG = 'deg';
    var GRAD = 'grad';
    var RAD = 'rad';
    var TURN = 'turn';
    var angle = {
        name: 'angle',
        parse: function (_context, value) {
            if (value.type === 15 /* DIMENSION_TOKEN */) {
                switch (value.unit) {
                    case DEG:
                        return (Math.PI * value.number) / 180;
                    case GRAD:
                        return (Math.PI / 200) * value.number;
                    case RAD:
                        return value.number;
                    case TURN:
                        return Math.PI * 2 * value.number;
                }
            }
            throw new Error("Unsupported angle type");
        }
    };
    var isAngle = function (value) {
        if (value.type === 15 /* DIMENSION_TOKEN */) {
            if (value.unit === DEG || value.unit === GRAD || value.unit === RAD || value.unit === TURN) {
                return true;
            }
        }
        return false;
    };
    var parseNamedSide = function (tokens) {
        var sideOrCorner = tokens
            .filter(isIdentToken)
            .map(function (ident) { return ident.value; })
            .join(' ');
        switch (sideOrCorner) {
            case 'to bottom right':
            case 'to right bottom':
            case 'left top':
            case 'top left':
                return [ZERO_LENGTH, ZERO_LENGTH];
            case 'to top':
            case 'bottom':
                return deg(0);
            case 'to bottom left':
            case 'to left bottom':
            case 'right top':
            case 'top right':
                return [ZERO_LENGTH, HUNDRED_PERCENT];
            case 'to right':
            case 'left':
                return deg(90);
            case 'to top left':
            case 'to left top':
            case 'right bottom':
            case 'bottom right':
                return [HUNDRED_PERCENT, HUNDRED_PERCENT];
            case 'to bottom':
            case 'top':
                return deg(180);
            case 'to top right':
            case 'to right top':
            case 'left bottom':
            case 'bottom left':
                return [HUNDRED_PERCENT, ZERO_LENGTH];
            case 'to left':
            case 'right':
                return deg(270);
        }
        return 0;
    };
    var deg = function (deg) { return (Math.PI * deg) / 180; };

    var color$1 = {
        name: 'color',
        parse: function (context, value) {
            if (value.type === 18 /* FUNCTION */) {
                var colorFunction = SUPPORTED_COLOR_FUNCTIONS[value.name];
                if (typeof colorFunction === 'undefined') {
                    throw new Error("Attempting to parse an unsupported color function \"" + value.name + "\"");
                }
                return colorFunction(context, value.values);
            }
            if (value.type === 5 /* HASH_TOKEN */) {
                if (value.value.length === 3) {
                    var r = value.value.substring(0, 1);
                    var g = value.value.substring(1, 2);
                    var b = value.value.substring(2, 3);
                    return pack(parseInt(r + r, 16), parseInt(g + g, 16), parseInt(b + b, 16), 1);
                }
                if (value.value.length === 4) {
                    var r = value.value.substring(0, 1);
                    var g = value.value.substring(1, 2);
                    var b = value.value.substring(2, 3);
                    var a = value.value.substring(3, 4);
                    return pack(parseInt(r + r, 16), parseInt(g + g, 16), parseInt(b + b, 16), parseInt(a + a, 16) / 255);
                }
                if (value.value.length === 6) {
                    var r = value.value.substring(0, 2);
                    var g = value.value.substring(2, 4);
                    var b = value.value.substring(4, 6);
                    return pack(parseInt(r, 16), parseInt(g, 16), parseInt(b, 16), 1);
                }
                if (value.value.length === 8) {
                    var r = value.value.substring(0, 2);
                    var g = value.value.substring(2, 4);
                    var b = value.value.substring(4, 6);
                    var a = value.value.substring(6, 8);
                    return pack(parseInt(r, 16), parseInt(g, 16), parseInt(b, 16), parseInt(a, 16) / 255);
                }
            }
            if (value.type === 20 /* IDENT_TOKEN */) {
                var namedColor = COLORS[value.value.toUpperCase()];
                if (typeof namedColor !== 'undefined') {
                    return namedColor;
                }
            }
            return COLORS.TRANSPARENT;
        }
    };
    var isTransparent = function (color) { return (0xff & color) === 0; };
    var asString = function (color) {
        var alpha = 0xff & color;
        var blue = 0xff & (color >> 8);
        var green = 0xff & (color >> 16);
        var red = 0xff & (color >> 24);
        return alpha < 255 ? "rgba(" + red + "," + green + "," + blue + "," + alpha / 255 + ")" : "rgb(" + red + "," + green + "," + blue + ")";
    };
    var pack = function (r, g, b, a) {
        return ((r << 24) | (g << 16) | (b << 8) | (Math.round(a * 255) << 0)) >>> 0;
    };
    var getTokenColorValue = function (token, i) {
        if (token.type === 17 /* NUMBER_TOKEN */) {
            return token.number;
        }
        if (token.type === 16 /* PERCENTAGE_TOKEN */) {
            var max = i === 3 ? 1 : 255;
            return i === 3 ? (token.number / 100) * max : Math.round((token.number / 100) * max);
        }
        return 0;
    };
    var rgb = function (_context, args) {
        var tokens = args.filter(nonFunctionArgSeparator);
        if (tokens.length === 3) {
            var _a = tokens.map(getTokenColorValue), r = _a[0], g = _a[1], b = _a[2];
            return pack(r, g, b, 1);
        }
        if (tokens.length === 4) {
            var _b = tokens.map(getTokenColorValue), r = _b[0], g = _b[1], b = _b[2], a = _b[3];
            return pack(r, g, b, a);
        }
        return 0;
    };
    function hue2rgb(t1, t2, hue) {
        if (hue < 0) {
            hue += 1;
        }
        if (hue >= 1) {
            hue -= 1;
        }
        if (hue < 1 / 6) {
            return (t2 - t1) * hue * 6 + t1;
        }
        else if (hue < 1 / 2) {
            return t2;
        }
        else if (hue < 2 / 3) {
            return (t2 - t1) * 6 * (2 / 3 - hue) + t1;
        }
        else {
            return t1;
        }
    }
    var hsl = function (context, args) {
        var tokens = args.filter(nonFunctionArgSeparator);
        var hue = tokens[0], saturation = tokens[1], lightness = tokens[2], alpha = tokens[3];
        var h = (hue.type === 17 /* NUMBER_TOKEN */ ? deg(hue.number) : angle.parse(context, hue)) / (Math.PI * 2);
        var s = isLengthPercentage(saturation) ? saturation.number / 100 : 0;
        var l = isLengthPercentage(lightness) ? lightness.number / 100 : 0;
        var a = typeof alpha !== 'undefined' && isLengthPercentage(alpha) ? getAbsoluteValue(alpha, 1) : 1;
        if (s === 0) {
            return pack(l * 255, l * 255, l * 255, 1);
        }
        var t2 = l <= 0.5 ? l * (s + 1) : l + s - l * s;
        var t1 = l * 2 - t2;
        var r = hue2rgb(t1, t2, h + 1 / 3);
        var g = hue2rgb(t1, t2, h);
        var b = hue2rgb(t1, t2, h - 1 / 3);
        return pack(r * 255, g * 255, b * 255, a);
    };
    var SUPPORTED_COLOR_FUNCTIONS = {
        hsl: hsl,
        hsla: hsl,
        rgb: rgb,
        rgba: rgb
    };
    var parseColor = function (context, value) {
        return color$1.parse(context, Parser.create(value).parseComponentValue());
    };
    var COLORS = {
        ALICEBLUE: 0xf0f8ffff,
        ANTIQUEWHITE: 0xfaebd7ff,
        AQUA: 0x00ffffff,
        AQUAMARINE: 0x7fffd4ff,
        AZURE: 0xf0ffffff,
        BEIGE: 0xf5f5dcff,
        BISQUE: 0xffe4c4ff,
        BLACK: 0x000000ff,
        BLANCHEDALMOND: 0xffebcdff,
        BLUE: 0x0000ffff,
        BLUEVIOLET: 0x8a2be2ff,
        BROWN: 0xa52a2aff,
        BURLYWOOD: 0xdeb887ff,
        CADETBLUE: 0x5f9ea0ff,
        CHARTREUSE: 0x7fff00ff,
        CHOCOLATE: 0xd2691eff,
        CORAL: 0xff7f50ff,
        CORNFLOWERBLUE: 0x6495edff,
        CORNSILK: 0xfff8dcff,
        CRIMSON: 0xdc143cff,
        CYAN: 0x00ffffff,
        DARKBLUE: 0x00008bff,
        DARKCYAN: 0x008b8bff,
        DARKGOLDENROD: 0xb886bbff,
        DARKGRAY: 0xa9a9a9ff,
        DARKGREEN: 0x006400ff,
        DARKGREY: 0xa9a9a9ff,
        DARKKHAKI: 0xbdb76bff,
        DARKMAGENTA: 0x8b008bff,
        DARKOLIVEGREEN: 0x556b2fff,
        DARKORANGE: 0xff8c00ff,
        DARKORCHID: 0x9932ccff,
        DARKRED: 0x8b0000ff,
        DARKSALMON: 0xe9967aff,
        DARKSEAGREEN: 0x8fbc8fff,
        DARKSLATEBLUE: 0x483d8bff,
        DARKSLATEGRAY: 0x2f4f4fff,
        DARKSLATEGREY: 0x2f4f4fff,
        DARKTURQUOISE: 0x00ced1ff,
        DARKVIOLET: 0x9400d3ff,
        DEEPPINK: 0xff1493ff,
        DEEPSKYBLUE: 0x00bfffff,
        DIMGRAY: 0x696969ff,
        DIMGREY: 0x696969ff,
        DODGERBLUE: 0x1e90ffff,
        FIREBRICK: 0xb22222ff,
        FLORALWHITE: 0xfffaf0ff,
        FORESTGREEN: 0x228b22ff,
        FUCHSIA: 0xff00ffff,
        GAINSBORO: 0xdcdcdcff,
        GHOSTWHITE: 0xf8f8ffff,
        GOLD: 0xffd700ff,
        GOLDENROD: 0xdaa520ff,
        GRAY: 0x808080ff,
        GREEN: 0x008000ff,
        GREENYELLOW: 0xadff2fff,
        GREY: 0x808080ff,
        HONEYDEW: 0xf0fff0ff,
        HOTPINK: 0xff69b4ff,
        INDIANRED: 0xcd5c5cff,
        INDIGO: 0x4b0082ff,
        IVORY: 0xfffff0ff,
        KHAKI: 0xf0e68cff,
        LAVENDER: 0xe6e6faff,
        LAVENDERBLUSH: 0xfff0f5ff,
        LAWNGREEN: 0x7cfc00ff,
        LEMONCHIFFON: 0xfffacdff,
        LIGHTBLUE: 0xadd8e6ff,
        LIGHTCORAL: 0xf08080ff,
        LIGHTCYAN: 0xe0ffffff,
        LIGHTGOLDENRODYELLOW: 0xfafad2ff,
        LIGHTGRAY: 0xd3d3d3ff,
        LIGHTGREEN: 0x90ee90ff,
        LIGHTGREY: 0xd3d3d3ff,
        LIGHTPINK: 0xffb6c1ff,
        LIGHTSALMON: 0xffa07aff,
        LIGHTSEAGREEN: 0x20b2aaff,
        LIGHTSKYBLUE: 0x87cefaff,
        LIGHTSLATEGRAY: 0x778899ff,
        LIGHTSLATEGREY: 0x778899ff,
        LIGHTSTEELBLUE: 0xb0c4deff,
        LIGHTYELLOW: 0xffffe0ff,
        LIME: 0x00ff00ff,
        LIMEGREEN: 0x32cd32ff,
        LINEN: 0xfaf0e6ff,
        MAGENTA: 0xff00ffff,
        MAROON: 0x800000ff,
        MEDIUMAQUAMARINE: 0x66cdaaff,
        MEDIUMBLUE: 0x0000cdff,
        MEDIUMORCHID: 0xba55d3ff,
        MEDIUMPURPLE: 0x9370dbff,
        MEDIUMSEAGREEN: 0x3cb371ff,
        MEDIUMSLATEBLUE: 0x7b68eeff,
        MEDIUMSPRINGGREEN: 0x00fa9aff,
        MEDIUMTURQUOISE: 0x48d1ccff,
        MEDIUMVIOLETRED: 0xc71585ff,
        MIDNIGHTBLUE: 0x191970ff,
        MINTCREAM: 0xf5fffaff,
        MISTYROSE: 0xffe4e1ff,
        MOCCASIN: 0xffe4b5ff,
        NAVAJOWHITE: 0xffdeadff,
        NAVY: 0x000080ff,
        OLDLACE: 0xfdf5e6ff,
        OLIVE: 0x808000ff,
        OLIVEDRAB: 0x6b8e23ff,
        ORANGE: 0xffa500ff,
        ORANGERED: 0xff4500ff,
        ORCHID: 0xda70d6ff,
        PALEGOLDENROD: 0xeee8aaff,
        PALEGREEN: 0x98fb98ff,
        PALETURQUOISE: 0xafeeeeff,
        PALEVIOLETRED: 0xdb7093ff,
        PAPAYAWHIP: 0xffefd5ff,
        PEACHPUFF: 0xffdab9ff,
        PERU: 0xcd853fff,
        PINK: 0xffc0cbff,
        PLUM: 0xdda0ddff,
        POWDERBLUE: 0xb0e0e6ff,
        PURPLE: 0x800080ff,
        REBECCAPURPLE: 0x663399ff,
        RED: 0xff0000ff,
        ROSYBROWN: 0xbc8f8fff,
        ROYALBLUE: 0x4169e1ff,
        SADDLEBROWN: 0x8b4513ff,
        SALMON: 0xfa8072ff,
        SANDYBROWN: 0xf4a460ff,
        SEAGREEN: 0x2e8b57ff,
        SEASHELL: 0xfff5eeff,
        SIENNA: 0xa0522dff,
        SILVER: 0xc0c0c0ff,
        SKYBLUE: 0x87ceebff,
        SLATEBLUE: 0x6a5acdff,
        SLATEGRAY: 0x708090ff,
        SLATEGREY: 0x708090ff,
        SNOW: 0xfffafaff,
        SPRINGGREEN: 0x00ff7fff,
        STEELBLUE: 0x4682b4ff,
        TAN: 0xd2b48cff,
        TEAL: 0x008080ff,
        THISTLE: 0xd8bfd8ff,
        TOMATO: 0xff6347ff,
        TRANSPARENT: 0x00000000,
        TURQUOISE: 0x40e0d0ff,
        VIOLET: 0xee82eeff,
        WHEAT: 0xf5deb3ff,
        WHITE: 0xffffffff,
        WHITESMOKE: 0xf5f5f5ff,
        YELLOW: 0xffff00ff,
        YELLOWGREEN: 0x9acd32ff
    };

    var backgroundClip = {
        name: 'background-clip',
        initialValue: 'border-box',
        prefix: false,
        type: 1 /* LIST */,
        parse: function (_context, tokens) {
            return tokens.map(function (token) {
                if (isIdentToken(token)) {
                    switch (token.value) {
                        case 'padding-box':
                            return 1 /* PADDING_BOX */;
                        case 'content-box':
                            return 2 /* CONTENT_BOX */;
                    }
                }
                return 0 /* BORDER_BOX */;
            });
        }
    };

    var backgroundColor = {
        name: "background-color",
        initialValue: 'transparent',
        prefix: false,
        type: 3 /* TYPE_VALUE */,
        format: 'color'
    };

    var parseColorStop = function (context, args) {
        var color = color$1.parse(context, args[0]);
        var stop = args[1];
        return stop && isLengthPercentage(stop) ? { color: color, stop: stop } : { color: color, stop: null };
    };
    var processColorStops = function (stops, lineLength) {
        var first = stops[0];
        var last = stops[stops.length - 1];
        if (first.stop === null) {
            first.stop = ZERO_LENGTH;
        }
        if (last.stop === null) {
            last.stop = HUNDRED_PERCENT;
        }
        var processStops = [];
        var previous = 0;
        for (var i = 0; i < stops.length; i++) {
            var stop_1 = stops[i].stop;
            if (stop_1 !== null) {
                var absoluteValue = getAbsoluteValue(stop_1, lineLength);
                if (absoluteValue > previous) {
                    processStops.push(absoluteValue);
                }
                else {
                    processStops.push(previous);
                }
                previous = absoluteValue;
            }
            else {
                processStops.push(null);
            }
        }
        var gapBegin = null;
        for (var i = 0; i < processStops.length; i++) {
            var stop_2 = processStops[i];
            if (stop_2 === null) {
                if (gapBegin === null) {
                    gapBegin = i;
                }
            }
            else if (gapBegin !== null) {
                var gapLength = i - gapBegin;
                var beforeGap = processStops[gapBegin - 1];
                var gapValue = (stop_2 - beforeGap) / (gapLength + 1);
                for (var g = 1; g <= gapLength; g++) {
                    processStops[gapBegin + g - 1] = gapValue * g;
                }
                gapBegin = null;
            }
        }
        return stops.map(function (_a, i) {
            var color = _a.color;
            return { color: color, stop: Math.max(Math.min(1, processStops[i] / lineLength), 0) };
        });
    };
    var getAngleFromCorner = function (corner, width, height) {
        var centerX = width / 2;
        var centerY = height / 2;
        var x = getAbsoluteValue(corner[0], width) - centerX;
        var y = centerY - getAbsoluteValue(corner[1], height);
        return (Math.atan2(y, x) + Math.PI * 2) % (Math.PI * 2);
    };
    var calculateGradientDirection = function (angle, width, height) {
        var radian = typeof angle === 'number' ? angle : getAngleFromCorner(angle, width, height);
        var lineLength = Math.abs(width * Math.sin(radian)) + Math.abs(height * Math.cos(radian));
        var halfWidth = width / 2;
        var halfHeight = height / 2;
        var halfLineLength = lineLength / 2;
        var yDiff = Math.sin(radian - Math.PI / 2) * halfLineLength;
        var xDiff = Math.cos(radian - Math.PI / 2) * halfLineLength;
        return [lineLength, halfWidth - xDiff, halfWidth + xDiff, halfHeight - yDiff, halfHeight + yDiff];
    };
    var distance = function (a, b) { return Math.sqrt(a * a + b * b); };
    var findCorner = function (width, height, x, y, closest) {
        var corners = [
            [0, 0],
            [0, height],
            [width, 0],
            [width, height]
        ];
        return corners.reduce(function (stat, corner) {
            var cx = corner[0], cy = corner[1];
            var d = distance(x - cx, y - cy);
            if (closest ? d < stat.optimumDistance : d > stat.optimumDistance) {
                return {
                    optimumCorner: corner,
                    optimumDistance: d
                };
            }
            return stat;
        }, {
            optimumDistance: closest ? Infinity : -Infinity,
            optimumCorner: null
        }).optimumCorner;
    };
    var calculateRadius = function (gradient, x, y, width, height) {
        var rx = 0;
        var ry = 0;
        switch (gradient.size) {
            case 0 /* CLOSEST_SIDE */:
                // The ending shape is sized so that that it exactly meets the side of the gradient box closest to the gradient’s center.
                // If the shape is an ellipse, it exactly meets the closest side in each dimension.
                if (gradient.shape === 0 /* CIRCLE */) {
                    rx = ry = Math.min(Math.abs(x), Math.abs(x - width), Math.abs(y), Math.abs(y - height));
                }
                else if (gradient.shape === 1 /* ELLIPSE */) {
                    rx = Math.min(Math.abs(x), Math.abs(x - width));
                    ry = Math.min(Math.abs(y), Math.abs(y - height));
                }
                break;
            case 2 /* CLOSEST_CORNER */:
                // The ending shape is sized so that that it passes through the corner of the gradient box closest to the gradient’s center.
                // If the shape is an ellipse, the ending shape is given the same aspect-ratio it would have if closest-side were specified.
                if (gradient.shape === 0 /* CIRCLE */) {
                    rx = ry = Math.min(distance(x, y), distance(x, y - height), distance(x - width, y), distance(x - width, y - height));
                }
                else if (gradient.shape === 1 /* ELLIPSE */) {
                    // Compute the ratio ry/rx (which is to be the same as for "closest-side")
                    var c = Math.min(Math.abs(y), Math.abs(y - height)) / Math.min(Math.abs(x), Math.abs(x - width));
                    var _a = findCorner(width, height, x, y, true), cx = _a[0], cy = _a[1];
                    rx = distance(cx - x, (cy - y) / c);
                    ry = c * rx;
                }
                break;
            case 1 /* FARTHEST_SIDE */:
                // Same as closest-side, except the ending shape is sized based on the farthest side(s)
                if (gradient.shape === 0 /* CIRCLE */) {
                    rx = ry = Math.max(Math.abs(x), Math.abs(x - width), Math.abs(y), Math.abs(y - height));
                }
                else if (gradient.shape === 1 /* ELLIPSE */) {
                    rx = Math.max(Math.abs(x), Math.abs(x - width));
                    ry = Math.max(Math.abs(y), Math.abs(y - height));
                }
                break;
            case 3 /* FARTHEST_CORNER */:
                // Same as closest-corner, except the ending shape is sized based on the farthest corner.
                // If the shape is an ellipse, the ending shape is given the same aspect ratio it would have if farthest-side were specified.
                if (gradient.shape === 0 /* CIRCLE */) {
                    rx = ry = Math.max(distance(x, y), distance(x, y - height), distance(x - width, y), distance(x - width, y - height));
                }
                else if (gradient.shape === 1 /* ELLIPSE */) {
                    // Compute the ratio ry/rx (which is to be the same as for "farthest-side")
                    var c = Math.max(Math.abs(y), Math.abs(y - height)) / Math.max(Math.abs(x), Math.abs(x - width));
                    var _b = findCorner(width, height, x, y, false), cx = _b[0], cy = _b[1];
                    rx = distance(cx - x, (cy - y) / c);
                    ry = c * rx;
                }
                break;
        }
        if (Array.isArray(gradient.size)) {
            rx = getAbsoluteValue(gradient.size[0], width);
            ry = gradient.size.length === 2 ? getAbsoluteValue(gradient.size[1], height) : rx;
        }
        return [rx, ry];
    };

    var linearGradient = function (context, tokens) {
        var angle$1 = deg(180);
        var stops = [];
        parseFunctionArgs(tokens).forEach(function (arg, i) {
            if (i === 0) {
                var firstToken = arg[0];
                if (firstToken.type === 20 /* IDENT_TOKEN */ && firstToken.value === 'to') {
                    angle$1 = parseNamedSide(arg);
                    return;
                }
                else if (isAngle(firstToken)) {
                    angle$1 = angle.parse(context, firstToken);
                    return;
                }
            }
            var colorStop = parseColorStop(context, arg);
            stops.push(colorStop);
        });
        return { angle: angle$1, stops: stops, type: 1 /* LINEAR_GRADIENT */ };
    };

    var prefixLinearGradient = function (context, tokens) {
        var angle$1 = deg(180);
        var stops = [];
        parseFunctionArgs(tokens).forEach(function (arg, i) {
            if (i === 0) {
                var firstToken = arg[0];
                if (firstToken.type === 20 /* IDENT_TOKEN */ &&
                    ['top', 'left', 'right', 'bottom'].indexOf(firstToken.value) !== -1) {
                    angle$1 = parseNamedSide(arg);
                    return;
                }
                else if (isAngle(firstToken)) {
                    angle$1 = (angle.parse(context, firstToken) + deg(270)) % deg(360);
                    return;
                }
            }
            var colorStop = parseColorStop(context, arg);
            stops.push(colorStop);
        });
        return {
            angle: angle$1,
            stops: stops,
            type: 1 /* LINEAR_GRADIENT */
        };
    };

    var webkitGradient = function (context, tokens) {
        var angle = deg(180);
        var stops = [];
        var type = 1 /* LINEAR_GRADIENT */;
        var shape = 0 /* CIRCLE */;
        var size = 3 /* FARTHEST_CORNER */;
        var position = [];
        parseFunctionArgs(tokens).forEach(function (arg, i) {
            var firstToken = arg[0];
            if (i === 0) {
                if (isIdentToken(firstToken) && firstToken.value === 'linear') {
                    type = 1 /* LINEAR_GRADIENT */;
                    return;
                }
                else if (isIdentToken(firstToken) && firstToken.value === 'radial') {
                    type = 2 /* RADIAL_GRADIENT */;
                    return;
                }
            }
            if (firstToken.type === 18 /* FUNCTION */) {
                if (firstToken.name === 'from') {
                    var color = color$1.parse(context, firstToken.values[0]);
                    stops.push({ stop: ZERO_LENGTH, color: color });
                }
                else if (firstToken.name === 'to') {
                    var color = color$1.parse(context, firstToken.values[0]);
                    stops.push({ stop: HUNDRED_PERCENT, color: color });
                }
                else if (firstToken.name === 'color-stop') {
                    var values = firstToken.values.filter(nonFunctionArgSeparator);
                    if (values.length === 2) {
                        var color = color$1.parse(context, values[1]);
                        var stop_1 = values[0];
                        if (isNumberToken(stop_1)) {
                            stops.push({
                                stop: { type: 16 /* PERCENTAGE_TOKEN */, number: stop_1.number * 100, flags: stop_1.flags },
                                color: color
                            });
                        }
                    }
                }
            }
        });
        return type === 1 /* LINEAR_GRADIENT */
            ? {
                angle: (angle + deg(180)) % deg(360),
                stops: stops,
                type: type
            }
            : { size: size, shape: shape, stops: stops, position: position, type: type };
    };

    var CLOSEST_SIDE = 'closest-side';
    var FARTHEST_SIDE = 'farthest-side';
    var CLOSEST_CORNER = 'closest-corner';
    var FARTHEST_CORNER = 'farthest-corner';
    var CIRCLE = 'circle';
    var ELLIPSE = 'ellipse';
    var COVER = 'cover';
    var CONTAIN = 'contain';
    var radialGradient = function (context, tokens) {
        var shape = 0 /* CIRCLE */;
        var size = 3 /* FARTHEST_CORNER */;
        var stops = [];
        var position = [];
        parseFunctionArgs(tokens).forEach(function (arg, i) {
            var isColorStop = true;
            if (i === 0) {
                var isAtPosition_1 = false;
                isColorStop = arg.reduce(function (acc, token) {
                    if (isAtPosition_1) {
                        if (isIdentToken(token)) {
                            switch (token.value) {
                                case 'center':
                                    position.push(FIFTY_PERCENT);
                                    return acc;
                                case 'top':
                                case 'left':
                                    position.push(ZERO_LENGTH);
                                    return acc;
                                case 'right':
                                case 'bottom':
                                    position.push(HUNDRED_PERCENT);
                                    return acc;
                            }
                        }
                        else if (isLengthPercentage(token) || isLength(token)) {
                            position.push(token);
                        }
                    }
                    else if (isIdentToken(token)) {
                        switch (token.value) {
                            case CIRCLE:
                                shape = 0 /* CIRCLE */;
                                return false;
                            case ELLIPSE:
                                shape = 1 /* ELLIPSE */;
                                return false;
                            case 'at':
                                isAtPosition_1 = true;
                                return false;
                            case CLOSEST_SIDE:
                                size = 0 /* CLOSEST_SIDE */;
                                return false;
                            case COVER:
                            case FARTHEST_SIDE:
                                size = 1 /* FARTHEST_SIDE */;
                                return false;
                            case CONTAIN:
                            case CLOSEST_CORNER:
                                size = 2 /* CLOSEST_CORNER */;
                                return false;
                            case FARTHEST_CORNER:
                                size = 3 /* FARTHEST_CORNER */;
                                return false;
                        }
                    }
                    else if (isLength(token) || isLengthPercentage(token)) {
                        if (!Array.isArray(size)) {
                            size = [];
                        }
                        size.push(token);
                        return false;
                    }
                    return acc;
                }, isColorStop);
            }
            if (isColorStop) {
                var colorStop = parseColorStop(context, arg);
                stops.push(colorStop);
            }
        });
        return { size: size, shape: shape, stops: stops, position: position, type: 2 /* RADIAL_GRADIENT */ };
    };

    var prefixRadialGradient = function (context, tokens) {
        var shape = 0 /* CIRCLE */;
        var size = 3 /* FARTHEST_CORNER */;
        var stops = [];
        var position = [];
        parseFunctionArgs(tokens).forEach(function (arg, i) {
            var isColorStop = true;
            if (i === 0) {
                isColorStop = arg.reduce(function (acc, token) {
                    if (isIdentToken(token)) {
                        switch (token.value) {
                            case 'center':
                                position.push(FIFTY_PERCENT);
                                return false;
                            case 'top':
                            case 'left':
                                position.push(ZERO_LENGTH);
                                return false;
                            case 'right':
                            case 'bottom':
                                position.push(HUNDRED_PERCENT);
                                return false;
                        }
                    }
                    else if (isLengthPercentage(token) || isLength(token)) {
                        position.push(token);
                        return false;
                    }
                    return acc;
                }, isColorStop);
            }
            else if (i === 1) {
                isColorStop = arg.reduce(function (acc, token) {
                    if (isIdentToken(token)) {
                        switch (token.value) {
                            case CIRCLE:
                                shape = 0 /* CIRCLE */;
                                return false;
                            case ELLIPSE:
                                shape = 1 /* ELLIPSE */;
                                return false;
                            case CONTAIN:
                            case CLOSEST_SIDE:
                                size = 0 /* CLOSEST_SIDE */;
                                return false;
                            case FARTHEST_SIDE:
                                size = 1 /* FARTHEST_SIDE */;
                                return false;
                            case CLOSEST_CORNER:
                                size = 2 /* CLOSEST_CORNER */;
                                return false;
                            case COVER:
                            case FARTHEST_CORNER:
                                size = 3 /* FARTHEST_CORNER */;
                                return false;
                        }
                    }
                    else if (isLength(token) || isLengthPercentage(token)) {
                        if (!Array.isArray(size)) {
                            size = [];
                        }
                        size.push(token);
                        return false;
                    }
                    return acc;
                }, isColorStop);
            }
            if (isColorStop) {
                var colorStop = parseColorStop(context, arg);
                stops.push(colorStop);
            }
        });
        return { size: size, shape: shape, stops: stops, position: position, type: 2 /* RADIAL_GRADIENT */ };
    };

    var isLinearGradient = function (background) {
        return background.type === 1 /* LINEAR_GRADIENT */;
    };
    var isRadialGradient = function (background) {
        return background.type === 2 /* RADIAL_GRADIENT */;
    };
    var image = {
        name: 'image',
        parse: function (context, value) {
            if (value.type === 22 /* URL_TOKEN */) {
                var image_1 = { url: value.value, type: 0 /* URL */ };
                context.cache.addImage(value.value);
                return image_1;
            }
            if (value.type === 18 /* FUNCTION */) {
                var imageFunction = SUPPORTED_IMAGE_FUNCTIONS[value.name];
                if (typeof imageFunction === 'undefined') {
                    throw new Error("Attempting to parse an unsupported image function \"" + value.name + "\"");
                }
                return imageFunction(context, value.values);
            }
            throw new Error("Unsupported image type " + value.type);
        }
    };
    function isSupportedImage(value) {
        return (!(value.type === 20 /* IDENT_TOKEN */ && value.value === 'none') &&
            (value.type !== 18 /* FUNCTION */ || !!SUPPORTED_IMAGE_FUNCTIONS[value.name]));
    }
    var SUPPORTED_IMAGE_FUNCTIONS = {
        'linear-gradient': linearGradient,
        '-moz-linear-gradient': prefixLinearGradient,
        '-ms-linear-gradient': prefixLinearGradient,
        '-o-linear-gradient': prefixLinearGradient,
        '-webkit-linear-gradient': prefixLinearGradient,
        'radial-gradient': radialGradient,
        '-moz-radial-gradient': prefixRadialGradient,
        '-ms-radial-gradient': prefixRadialGradient,
        '-o-radial-gradient': prefixRadialGradient,
        '-webkit-radial-gradient': prefixRadialGradient,
        '-webkit-gradient': webkitGradient
    };

    var backgroundImage = {
        name: 'background-image',
        initialValue: 'none',
        type: 1 /* LIST */,
        prefix: false,
        parse: function (context, tokens) {
            if (tokens.length === 0) {
                return [];
            }
            var first = tokens[0];
            if (first.type === 20 /* IDENT_TOKEN */ && first.value === 'none') {
                return [];
            }
            return tokens
                .filter(function (value) { return nonFunctionArgSeparator(value) && isSupportedImage(value); })
                .map(function (value) { return image.parse(context, value); });
        }
    };

    var backgroundOrigin = {
        name: 'background-origin',
        initialValue: 'border-box',
        prefix: false,
        type: 1 /* LIST */,
        parse: function (_context, tokens) {
            return tokens.map(function (token) {
                if (isIdentToken(token)) {
                    switch (token.value) {
                        case 'padding-box':
                            return 1 /* PADDING_BOX */;
                        case 'content-box':
                            return 2 /* CONTENT_BOX */;
                    }
                }
                return 0 /* BORDER_BOX */;
            });
        }
    };

    var backgroundPosition = {
        name: 'background-position',
        initialValue: '0% 0%',
        type: 1 /* LIST */,
        prefix: false,
        parse: function (_context, tokens) {
            return parseFunctionArgs(tokens)
                .map(function (values) { return values.filter(isLengthPercentage); })
                .map(parseLengthPercentageTuple);
        }
    };

    var backgroundRepeat = {
        name: 'background-repeat',
        initialValue: 'repeat',
        prefix: false,
        type: 1 /* LIST */,
        parse: function (_context, tokens) {
            return parseFunctionArgs(tokens)
                .map(function (values) {
                return values
                    .filter(isIdentToken)
                    .map(function (token) { return token.value; })
                    .join(' ');
            })
                .map(parseBackgroundRepeat);
        }
    };
    var parseBackgroundRepeat = function (value) {
        switch (value) {
            case 'no-repeat':
                return 1 /* NO_REPEAT */;
            case 'repeat-x':
            case 'repeat no-repeat':
                return 2 /* REPEAT_X */;
            case 'repeat-y':
            case 'no-repeat repeat':
                return 3 /* REPEAT_Y */;
            case 'repeat':
            default:
                return 0 /* REPEAT */;
        }
    };

    var BACKGROUND_SIZE;
    (function (BACKGROUND_SIZE) {
        BACKGROUND_SIZE["AUTO"] = "auto";
        BACKGROUND_SIZE["CONTAIN"] = "contain";
        BACKGROUND_SIZE["COVER"] = "cover";
    })(BACKGROUND_SIZE || (BACKGROUND_SIZE = {}));
    var backgroundSize = {
        name: 'background-size',
        initialValue: '0',
        prefix: false,
        type: 1 /* LIST */,
        parse: function (_context, tokens) {
            return parseFunctionArgs(tokens).map(function (values) { return values.filter(isBackgroundSizeInfoToken); });
        }
    };
    var isBackgroundSizeInfoToken = function (value) {
        return isIdentToken(value) || isLengthPercentage(value);
    };

    var borderColorForSide = function (side) { return ({
        name: "border-" + side + "-color",
        initialValue: 'transparent',
        prefix: false,
        type: 3 /* TYPE_VALUE */,
        format: 'color'
    }); };
    var borderTopColor = borderColorForSide('top');
    var borderRightColor = borderColorForSide('right');
    var borderBottomColor = borderColorForSide('bottom');
    var borderLeftColor = borderColorForSide('left');

    var borderRadiusForSide = function (side) { return ({
        name: "border-radius-" + side,
        initialValue: '0 0',
        prefix: false,
        type: 1 /* LIST */,
        parse: function (_context, tokens) {
            return parseLengthPercentageTuple(tokens.filter(isLengthPercentage));
        }
    }); };
    var borderTopLeftRadius = borderRadiusForSide('top-left');
    var borderTopRightRadius = borderRadiusForSide('top-right');
    var borderBottomRightRadius = borderRadiusForSide('bottom-right');
    var borderBottomLeftRadius = borderRadiusForSide('bottom-left');

    var borderStyleForSide = function (side) { return ({
        name: "border-" + side + "-style",
        initialValue: 'solid',
        prefix: false,
        type: 2 /* IDENT_VALUE */,
        parse: function (_context, style) {
            switch (style) {
                case 'none':
                    return 0 /* NONE */;
                case 'dashed':
                    return 2 /* DASHED */;
                case 'dotted':
                    return 3 /* DOTTED */;
                case 'double':
                    return 4 /* DOUBLE */;
            }
            return 1 /* SOLID */;
        }
    }); };
    var borderTopStyle = borderStyleForSide('top');
    var borderRightStyle = borderStyleForSide('right');
    var borderBottomStyle = borderStyleForSide('bottom');
    var borderLeftStyle = borderStyleForSide('left');

    var borderWidthForSide = function (side) { return ({
        name: "border-" + side + "-width",
        initialValue: '0',
        type: 0 /* VALUE */,
        prefix: false,
        parse: function (_context, token) {
            if (isDimensionToken(token)) {
                return token.number;
            }
            return 0;
        }
    }); };
    var borderTopWidth = borderWidthForSide('top');
    var borderRightWidth = borderWidthForSide('right');
    var borderBottomWidth = borderWidthForSide('bottom');
    var borderLeftWidth = borderWidthForSide('left');

    var color = {
        name: "color",
        initialValue: 'transparent',
        prefix: false,
        type: 3 /* TYPE_VALUE */,
        format: 'color'
    };

    var direction = {
        name: 'direction',
        initialValue: 'ltr',
        prefix: false,
        type: 2 /* IDENT_VALUE */,
        parse: function (_context, direction) {
            switch (direction) {
                case 'rtl':
                    return 1 /* RTL */;
                case 'ltr':
                default:
                    return 0 /* LTR */;
            }
        }
    };

    var display = {
        name: 'display',
        initialValue: 'inline-block',
        prefix: false,
        type: 1 /* LIST */,
        parse: function (_context, tokens) {
            return tokens.filter(isIdentToken).reduce(function (bit, token) {
                return bit | parseDisplayValue(token.value);
            }, 0 /* NONE */);
        }
    };
    var parseDisplayValue = function (display) {
        switch (display) {
            case 'block':
            case '-webkit-box':
                return 2 /* BLOCK */;
            case 'inline':
                return 4 /* INLINE */;
            case 'run-in':
                return 8 /* RUN_IN */;
            case 'flow':
                return 16 /* FLOW */;
            case 'flow-root':
                return 32 /* FLOW_ROOT */;
            case 'table':
                return 64 /* TABLE */;
            case 'flex':
            case '-webkit-flex':
                return 128 /* FLEX */;
            case 'grid':
            case '-ms-grid':
                return 256 /* GRID */;
            case 'ruby':
                return 512 /* RUBY */;
            case 'subgrid':
                return 1024 /* SUBGRID */;
            case 'list-item':
                return 2048 /* LIST_ITEM */;
            case 'table-row-group':
                return 4096 /* TABLE_ROW_GROUP */;
            case 'table-header-group':
                return 8192 /* TABLE_HEADER_GROUP */;
            case 'table-footer-group':
                return 16384 /* TABLE_FOOTER_GROUP */;
            case 'table-row':
                return 32768 /* TABLE_ROW */;
            case 'table-cell':
                return 65536 /* TABLE_CELL */;
            case 'table-column-group':
                return 131072 /* TABLE_COLUMN_GROUP */;
            case 'table-column':
                return 262144 /* TABLE_COLUMN */;
            case 'table-caption':
                return 524288 /* TABLE_CAPTION */;
            case 'ruby-base':
                return 1048576 /* RUBY_BASE */;
            case 'ruby-text':
                return 2097152 /* RUBY_TEXT */;
            case 'ruby-base-container':
                return 4194304 /* RUBY_BASE_CONTAINER */;
            case 'ruby-text-container':
                return 8388608 /* RUBY_TEXT_CONTAINER */;
            case 'contents':
                return 16777216 /* CONTENTS */;
            case 'inline-block':
                return 33554432 /* INLINE_BLOCK */;
            case 'inline-list-item':
                return 67108864 /* INLINE_LIST_ITEM */;
            case 'inline-table':
                return 134217728 /* INLINE_TABLE */;
            case 'inline-flex':
                return 268435456 /* INLINE_FLEX */;
            case 'inline-grid':
                return 536870912 /* INLINE_GRID */;
        }
        return 0 /* NONE */;
    };

    var float = {
        name: 'float',
        initialValue: 'none',
        prefix: false,
        type: 2 /* IDENT_VALUE */,
        parse: function (_context, float) {
            switch (float) {
                case 'left':
                    return 1 /* LEFT */;
                case 'right':
                    return 2 /* RIGHT */;
                case 'inline-start':
                    return 3 /* INLINE_START */;
                case 'inline-end':
                    return 4 /* INLINE_END */;
            }
            return 0 /* NONE */;
        }
    };

    var letterSpacing = {
        name: 'letter-spacing',
        initialValue: '0',
        prefix: false,
        type: 0 /* VALUE */,
        parse: function (_context, token) {
            if (token.type === 20 /* IDENT_TOKEN */ && token.value === 'normal') {
                return 0;
            }
            if (token.type === 17 /* NUMBER_TOKEN */) {
                return token.number;
            }
            if (token.type === 15 /* DIMENSION_TOKEN */) {
                return token.number;
            }
            return 0;
        }
    };

    var LINE_BREAK;
    (function (LINE_BREAK) {
        LINE_BREAK["NORMAL"] = "normal";
        LINE_BREAK["STRICT"] = "strict";
    })(LINE_BREAK || (LINE_BREAK = {}));
    var lineBreak = {
        name: 'line-break',
        initialValue: 'normal',
        prefix: false,
        type: 2 /* IDENT_VALUE */,
        parse: function (_context, lineBreak) {
            switch (lineBreak) {
                case 'strict':
                    return LINE_BREAK.STRICT;
                case 'normal':
                default:
                    return LINE_BREAK.NORMAL;
            }
        }
    };

    var lineHeight = {
        name: 'line-height',
        initialValue: 'normal',
        prefix: false,
        type: 4 /* TOKEN_VALUE */
    };
    var computeLineHeight = function (token, fontSize) {
        if (isIdentToken(token) && token.value === 'normal') {
            return 1.2 * fontSize;
        }
        else if (token.type === 17 /* NUMBER_TOKEN */) {
            return fontSize * token.number;
        }
        else if (isLengthPercentage(token)) {
            return getAbsoluteValue(token, fontSize);
        }
        return fontSize;
    };

    var listStyleImage = {
        name: 'list-style-image',
        initialValue: 'none',
        type: 0 /* VALUE */,
        prefix: false,
        parse: function (context, token) {
            if (token.type === 20 /* IDENT_TOKEN */ && token.value === 'none') {
                return null;
            }
            return image.parse(context, token);
        }
    };

    var listStylePosition = {
        name: 'list-style-position',
        initialValue: 'outside',
        prefix: false,
        type: 2 /* IDENT_VALUE */,
        parse: function (_context, position) {
            switch (position) {
                case 'inside':
                    return 0 /* INSIDE */;
                case 'outside':
                default:
                    return 1 /* OUTSIDE */;
            }
        }
    };

    var listStyleType = {
        name: 'list-style-type',
        initialValue: 'none',
        prefix: false,
        type: 2 /* IDENT_VALUE */,
        parse: function (_context, type) {
            switch (type) {
                case 'disc':
                    return 0 /* DISC */;
                case 'circle':
                    return 1 /* CIRCLE */;
                case 'square':
                    return 2 /* SQUARE */;
                case 'decimal':
                    return 3 /* DECIMAL */;
                case 'cjk-decimal':
                    return 4 /* CJK_DECIMAL */;
                case 'decimal-leading-zero':
                    return 5 /* DECIMAL_LEADING_ZERO */;
                case 'lower-roman':
                    return 6 /* LOWER_ROMAN */;
                case 'upper-roman':
                    return 7 /* UPPER_ROMAN */;
                case 'lower-greek':
                    return 8 /* LOWER_GREEK */;
                case 'lower-alpha':
                    return 9 /* LOWER_ALPHA */;
                case 'upper-alpha':
                    return 10 /* UPPER_ALPHA */;
                case 'arabic-indic':
                    return 11 /* ARABIC_INDIC */;
                case 'armenian':
                    return 12 /* ARMENIAN */;
                case 'bengali':
                    return 13 /* BENGALI */;
                case 'cambodian':
                    return 14 /* CAMBODIAN */;
                case 'cjk-earthly-branch':
                    return 15 /* CJK_EARTHLY_BRANCH */;
                case 'cjk-heavenly-stem':
                    return 16 /* CJK_HEAVENLY_STEM */;
                case 'cjk-ideographic':
                    return 17 /* CJK_IDEOGRAPHIC */;
                case 'devanagari':
                    return 18 /* DEVANAGARI */;
                case 'ethiopic-numeric':
                    return 19 /* ETHIOPIC_NUMERIC */;
                case 'georgian':
                    return 20 /* GEORGIAN */;
                case 'gujarati':
                    return 21 /* GUJARATI */;
                case 'gurmukhi':
                    return 22 /* GURMUKHI */;
                case 'hebrew':
                    return 22 /* HEBREW */;
                case 'hiragana':
                    return 23 /* HIRAGANA */;
                case 'hiragana-iroha':
                    return 24 /* HIRAGANA_IROHA */;
                case 'japanese-formal':
                    return 25 /* JAPANESE_FORMAL */;
                case 'japanese-informal':
                    return 26 /* JAPANESE_INFORMAL */;
                case 'kannada':
                    return 27 /* KANNADA */;
                case 'katakana':
                    return 28 /* KATAKANA */;
                case 'katakana-iroha':
                    return 29 /* KATAKANA_IROHA */;
                case 'khmer':
                    return 30 /* KHMER */;
                case 'korean-hangul-formal':
                    return 31 /* KOREAN_HANGUL_FORMAL */;
                case 'korean-hanja-formal':
                    return 32 /* KOREAN_HANJA_FORMAL */;
                case 'korean-hanja-informal':
                    return 33 /* KOREAN_HANJA_INFORMAL */;
                case 'lao':
                    return 34 /* LAO */;
                case 'lower-armenian':
                    return 35 /* LOWER_ARMENIAN */;
                case 'malayalam':
                    return 36 /* MALAYALAM */;
                case 'mongolian':
                    return 37 /* MONGOLIAN */;
                case 'myanmar':
                    return 38 /* MYANMAR */;
                case 'oriya':
                    return 39 /* ORIYA */;
                case 'persian':
                    return 40 /* PERSIAN */;
                case 'simp-chinese-formal':
                    return 41 /* SIMP_CHINESE_FORMAL */;
                case 'simp-chinese-informal':
                    return 42 /* SIMP_CHINESE_INFORMAL */;
                case 'tamil':
                    return 43 /* TAMIL */;
                case 'telugu':
                    return 44 /* TELUGU */;
                case 'thai':
                    return 45 /* THAI */;
                case 'tibetan':
                    return 46 /* TIBETAN */;
                case 'trad-chinese-formal':
                    return 47 /* TRAD_CHINESE_FORMAL */;
                case 'trad-chinese-informal':
                    return 48 /* TRAD_CHINESE_INFORMAL */;
                case 'upper-armenian':
                    return 49 /* UPPER_ARMENIAN */;
                case 'disclosure-open':
                    return 50 /* DISCLOSURE_OPEN */;
                case 'disclosure-closed':
                    return 51 /* DISCLOSURE_CLOSED */;
                case 'none':
                default:
                    return -1 /* NONE */;
            }
        }
    };

    var marginForSide = function (side) { return ({
        name: "margin-" + side,
        initialValue: '0',
        prefix: false,
        type: 4 /* TOKEN_VALUE */
    }); };
    var marginTop = marginForSide('top');
    var marginRight = marginForSide('right');
    var marginBottom = marginForSide('bottom');
    var marginLeft = marginForSide('left');

    var overflow = {
        name: 'overflow',
        initialValue: 'visible',
        prefix: false,
        type: 1 /* LIST */,
        parse: function (_context, tokens) {
            return tokens.filter(isIdentToken).map(function (overflow) {
                switch (overflow.value) {
                    case 'hidden':
                        return 1 /* HIDDEN */;
                    case 'scroll':
                        return 2 /* SCROLL */;
                    case 'clip':
                        return 3 /* CLIP */;
                    case 'auto':
                        return 4 /* AUTO */;
                    case 'visible':
                    default:
                        return 0 /* VISIBLE */;
                }
            });
        }
    };

    var overflowWrap = {
        name: 'overflow-wrap',
        initialValue: 'normal',
        prefix: false,
        type: 2 /* IDENT_VALUE */,
        parse: function (_context, overflow) {
            switch (overflow) {
                case 'break-word':
                    return "break-word" /* BREAK_WORD */;
                case 'normal':
                default:
                    return "normal" /* NORMAL */;
            }
        }
    };

    var paddingForSide = function (side) { return ({
        name: "padding-" + side,
        initialValue: '0',
        prefix: false,
        type: 3 /* TYPE_VALUE */,
        format: 'length-percentage'
    }); };
    var paddingTop = paddingForSide('top');
    var paddingRight = paddingForSide('right');
    var paddingBottom = paddingForSide('bottom');
    var paddingLeft = paddingForSide('left');

    var textAlign = {
        name: 'text-align',
        initialValue: 'left',
        prefix: false,
        type: 2 /* IDENT_VALUE */,
        parse: function (_context, textAlign) {
            switch (textAlign) {
                case 'right':
                    return 2 /* RIGHT */;
                case 'center':
                case 'justify':
                    return 1 /* CENTER */;
                case 'left':
                default:
                    return 0 /* LEFT */;
            }
        }
    };

    var position = {
        name: 'position',
        initialValue: 'static',
        prefix: false,
        type: 2 /* IDENT_VALUE */,
        parse: function (_context, position) {
            switch (position) {
                case 'relative':
                    return 1 /* RELATIVE */;
                case 'absolute':
                    return 2 /* ABSOLUTE */;
                case 'fixed':
                    return 3 /* FIXED */;
                case 'sticky':
                    return 4 /* STICKY */;
            }
            return 0 /* STATIC */;
        }
    };

    var textShadow = {
        name: 'text-shadow',
        initialValue: 'none',
        type: 1 /* LIST */,
        prefix: false,
        parse: function (context, tokens) {
            if (tokens.length === 1 && isIdentWithValue(tokens[0], 'none')) {
                return [];
            }
            return parseFunctionArgs(tokens).map(function (values) {
                var shadow = {
                    color: COLORS.TRANSPARENT,
                    offsetX: ZERO_LENGTH,
                    offsetY: ZERO_LENGTH,
                    blur: ZERO_LENGTH
                };
                var c = 0;
                for (var i = 0; i < values.length; i++) {
                    var token = values[i];
                    if (isLength(token)) {
                        if (c === 0) {
                            shadow.offsetX = token;
                        }
                        else if (c === 1) {
                            shadow.offsetY = token;
                        }
                        else {
                            shadow.blur = token;
                        }
                        c++;
                    }
                    else {
                        shadow.color = color$1.parse(context, token);
                    }
                }
                return shadow;
            });
        }
    };

    var textTransform = {
        name: 'text-transform',
        initialValue: 'none',
        prefix: false,
        type: 2 /* IDENT_VALUE */,
        parse: function (_context, textTransform) {
            switch (textTransform) {
                case 'uppercase':
                    return 2 /* UPPERCASE */;
                case 'lowercase':
                    return 1 /* LOWERCASE */;
                case 'capitalize':
                    return 3 /* CAPITALIZE */;
            }
            return 0 /* NONE */;
        }
    };

    var transform$1 = {
        name: 'transform',
        initialValue: 'none',
        prefix: true,
        type: 0 /* VALUE */,
        parse: function (_context, token) {
            if (token.type === 20 /* IDENT_TOKEN */ && token.value === 'none') {
                return null;
            }
            if (token.type === 18 /* FUNCTION */) {
                var transformFunction = SUPPORTED_TRANSFORM_FUNCTIONS[token.name];
                if (typeof transformFunction === 'undefined') {
                    throw new Error("Attempting to parse an unsupported transform function \"" + token.name + "\"");
                }
                return transformFunction(token.values);
            }
            return null;
        }
    };
    var matrix = function (args) {
        var values = args.filter(function (arg) { return arg.type === 17 /* NUMBER_TOKEN */; }).map(function (arg) { return arg.number; });
        return values.length === 6 ? values : null;
    };
    // doesn't support 3D transforms at the moment
    var matrix3d = function (args) {
        var values = args.filter(function (arg) { return arg.type === 17 /* NUMBER_TOKEN */; }).map(function (arg) { return arg.number; });
        var a1 = values[0], b1 = values[1]; values[2]; values[3]; var a2 = values[4], b2 = values[5]; values[6]; values[7]; values[8]; values[9]; values[10]; values[11]; var a4 = values[12], b4 = values[13]; values[14]; values[15];
        return values.length === 16 ? [a1, b1, a2, b2, a4, b4] : null;
    };
    var SUPPORTED_TRANSFORM_FUNCTIONS = {
        matrix: matrix,
        matrix3d: matrix3d
    };

    var DEFAULT_VALUE = {
        type: 16 /* PERCENTAGE_TOKEN */,
        number: 50,
        flags: FLAG_INTEGER
    };
    var DEFAULT = [DEFAULT_VALUE, DEFAULT_VALUE];
    var transformOrigin = {
        name: 'transform-origin',
        initialValue: '50% 50%',
        prefix: true,
        type: 1 /* LIST */,
        parse: function (_context, tokens) {
            var origins = tokens.filter(isLengthPercentage);
            if (origins.length !== 2) {
                return DEFAULT;
            }
            return [origins[0], origins[1]];
        }
    };

    var visibility = {
        name: 'visible',
        initialValue: 'none',
        prefix: false,
        type: 2 /* IDENT_VALUE */,
        parse: function (_context, visibility) {
            switch (visibility) {
                case 'hidden':
                    return 1 /* HIDDEN */;
                case 'collapse':
                    return 2 /* COLLAPSE */;
                case 'visible':
                default:
                    return 0 /* VISIBLE */;
            }
        }
    };

    var WORD_BREAK;
    (function (WORD_BREAK) {
        WORD_BREAK["NORMAL"] = "normal";
        WORD_BREAK["BREAK_ALL"] = "break-all";
        WORD_BREAK["KEEP_ALL"] = "keep-all";
    })(WORD_BREAK || (WORD_BREAK = {}));
    var wordBreak = {
        name: 'word-break',
        initialValue: 'normal',
        prefix: false,
        type: 2 /* IDENT_VALUE */,
        parse: function (_context, wordBreak) {
            switch (wordBreak) {
                case 'break-all':
                    return WORD_BREAK.BREAK_ALL;
                case 'keep-all':
                    return WORD_BREAK.KEEP_ALL;
                case 'normal':
                default:
                    return WORD_BREAK.NORMAL;
            }
        }
    };

    var zIndex = {
        name: 'z-index',
        initialValue: 'auto',
        prefix: false,
        type: 0 /* VALUE */,
        parse: function (_context, token) {
            if (token.type === 20 /* IDENT_TOKEN */) {
                return { auto: true, order: 0 };
            }
            if (isNumberToken(token)) {
                return { auto: false, order: token.number };
            }
            throw new Error("Invalid z-index number parsed");
        }
    };

    var time = {
        name: 'time',
        parse: function (_context, value) {
            if (value.type === 15 /* DIMENSION_TOKEN */) {
                switch (value.unit.toLowerCase()) {
                    case 's':
                        return 1000 * value.number;
                    case 'ms':
                        return value.number;
                }
            }
            throw new Error("Unsupported time type");
        }
    };

    var opacity = {
        name: 'opacity',
        initialValue: '1',
        type: 0 /* VALUE */,
        prefix: false,
        parse: function (_context, token) {
            if (isNumberToken(token)) {
                return token.number;
            }
            return 1;
        }
    };

    var textDecorationColor = {
        name: "text-decoration-color",
        initialValue: 'transparent',
        prefix: false,
        type: 3 /* TYPE_VALUE */,
        format: 'color'
    };

    var textDecorationLine = {
        name: 'text-decoration-line',
        initialValue: 'none',
        prefix: false,
        type: 1 /* LIST */,
        parse: function (_context, tokens) {
            return tokens
                .filter(isIdentToken)
                .map(function (token) {
                switch (token.value) {
                    case 'underline':
                        return 1 /* UNDERLINE */;
                    case 'overline':
                        return 2 /* OVERLINE */;
                    case 'line-through':
                        return 3 /* LINE_THROUGH */;
                    case 'none':
                        return 4 /* BLINK */;
                }
                return 0 /* NONE */;
            })
                .filter(function (line) { return line !== 0 /* NONE */; });
        }
    };

    var fontFamily = {
        name: "font-family",
        initialValue: '',
        prefix: false,
        type: 1 /* LIST */,
        parse: function (_context, tokens) {
            var accumulator = [];
            var results = [];
            tokens.forEach(function (token) {
                switch (token.type) {
                    case 20 /* IDENT_TOKEN */:
                    case 0 /* STRING_TOKEN */:
                        accumulator.push(token.value);
                        break;
                    case 17 /* NUMBER_TOKEN */:
                        accumulator.push(token.number.toString());
                        break;
                    case 4 /* COMMA_TOKEN */:
                        results.push(accumulator.join(' '));
                        accumulator.length = 0;
                        break;
                }
            });
            if (accumulator.length) {
                results.push(accumulator.join(' '));
            }
            return results.map(function (result) { return (result.indexOf(' ') === -1 ? result : "'" + result + "'"); });
        }
    };

    var fontSize = {
        name: "font-size",
        initialValue: '0',
        prefix: false,
        type: 3 /* TYPE_VALUE */,
        format: 'length'
    };

    var fontWeight = {
        name: 'font-weight',
        initialValue: 'normal',
        type: 0 /* VALUE */,
        prefix: false,
        parse: function (_context, token) {
            if (isNumberToken(token)) {
                return token.number;
            }
            if (isIdentToken(token)) {
                switch (token.value) {
                    case 'bold':
                        return 700;
                    case 'normal':
                    default:
                        return 400;
                }
            }
            return 400;
        }
    };

    var fontVariant = {
        name: 'font-variant',
        initialValue: 'none',
        type: 1 /* LIST */,
        prefix: false,
        parse: function (_context, tokens) {
            return tokens.filter(isIdentToken).map(function (token) { return token.value; });
        }
    };

    var fontStyle = {
        name: 'font-style',
        initialValue: 'normal',
        prefix: false,
        type: 2 /* IDENT_VALUE */,
        parse: function (_context, overflow) {
            switch (overflow) {
                case 'oblique':
                    return "oblique" /* OBLIQUE */;
                case 'italic':
                    return "italic" /* ITALIC */;
                case 'normal':
                default:
                    return "normal" /* NORMAL */;
            }
        }
    };

    var contains = function (bit, value) { return (bit & value) !== 0; };

    var content = {
        name: 'content',
        initialValue: 'none',
        type: 1 /* LIST */,
        prefix: false,
        parse: function (_context, tokens) {
            if (tokens.length === 0) {
                return [];
            }
            var first = tokens[0];
            if (first.type === 20 /* IDENT_TOKEN */ && first.value === 'none') {
                return [];
            }
            return tokens;
        }
    };

    var counterIncrement = {
        name: 'counter-increment',
        initialValue: 'none',
        prefix: true,
        type: 1 /* LIST */,
        parse: function (_context, tokens) {
            if (tokens.length === 0) {
                return null;
            }
            var first = tokens[0];
            if (first.type === 20 /* IDENT_TOKEN */ && first.value === 'none') {
                return null;
            }
            var increments = [];
            var filtered = tokens.filter(nonWhiteSpace);
            for (var i = 0; i < filtered.length; i++) {
                var counter = filtered[i];
                var next = filtered[i + 1];
                if (counter.type === 20 /* IDENT_TOKEN */) {
                    var increment = next && isNumberToken(next) ? next.number : 1;
                    increments.push({ counter: counter.value, increment: increment });
                }
            }
            return increments;
        }
    };

    var counterReset = {
        name: 'counter-reset',
        initialValue: 'none',
        prefix: true,
        type: 1 /* LIST */,
        parse: function (_context, tokens) {
            if (tokens.length === 0) {
                return [];
            }
            var resets = [];
            var filtered = tokens.filter(nonWhiteSpace);
            for (var i = 0; i < filtered.length; i++) {
                var counter = filtered[i];
                var next = filtered[i + 1];
                if (isIdentToken(counter) && counter.value !== 'none') {
                    var reset = next && isNumberToken(next) ? next.number : 0;
                    resets.push({ counter: counter.value, reset: reset });
                }
            }
            return resets;
        }
    };

    var duration = {
        name: 'duration',
        initialValue: '0s',
        prefix: false,
        type: 1 /* LIST */,
        parse: function (context, tokens) {
            return tokens.filter(isDimensionToken).map(function (token) { return time.parse(context, token); });
        }
    };

    var quotes = {
        name: 'quotes',
        initialValue: 'none',
        prefix: true,
        type: 1 /* LIST */,
        parse: function (_context, tokens) {
            if (tokens.length === 0) {
                return null;
            }
            var first = tokens[0];
            if (first.type === 20 /* IDENT_TOKEN */ && first.value === 'none') {
                return null;
            }
            var quotes = [];
            var filtered = tokens.filter(isStringToken);
            if (filtered.length % 2 !== 0) {
                return null;
            }
            for (var i = 0; i < filtered.length; i += 2) {
                var open_1 = filtered[i].value;
                var close_1 = filtered[i + 1].value;
                quotes.push({ open: open_1, close: close_1 });
            }
            return quotes;
        }
    };
    var getQuote = function (quotes, depth, open) {
        if (!quotes) {
            return '';
        }
        var quote = quotes[Math.min(depth, quotes.length - 1)];
        if (!quote) {
            return '';
        }
        return open ? quote.open : quote.close;
    };

    var boxShadow = {
        name: 'box-shadow',
        initialValue: 'none',
        type: 1 /* LIST */,
        prefix: false,
        parse: function (context, tokens) {
            if (tokens.length === 1 && isIdentWithValue(tokens[0], 'none')) {
                return [];
            }
            return parseFunctionArgs(tokens).map(function (values) {
                var shadow = {
                    color: 0x000000ff,
                    offsetX: ZERO_LENGTH,
                    offsetY: ZERO_LENGTH,
                    blur: ZERO_LENGTH,
                    spread: ZERO_LENGTH,
                    inset: false
                };
                var c = 0;
                for (var i = 0; i < values.length; i++) {
                    var token = values[i];
                    if (isIdentWithValue(token, 'inset')) {
                        shadow.inset = true;
                    }
                    else if (isLength(token)) {
                        if (c === 0) {
                            shadow.offsetX = token;
                        }
                        else if (c === 1) {
                            shadow.offsetY = token;
                        }
                        else if (c === 2) {
                            shadow.blur = token;
                        }
                        else {
                            shadow.spread = token;
                        }
                        c++;
                    }
                    else {
                        shadow.color = color$1.parse(context, token);
                    }
                }
                return shadow;
            });
        }
    };

    var paintOrder = {
        name: 'paint-order',
        initialValue: 'normal',
        prefix: false,
        type: 1 /* LIST */,
        parse: function (_context, tokens) {
            var DEFAULT_VALUE = [0 /* FILL */, 1 /* STROKE */, 2 /* MARKERS */];
            var layers = [];
            tokens.filter(isIdentToken).forEach(function (token) {
                switch (token.value) {
                    case 'stroke':
                        layers.push(1 /* STROKE */);
                        break;
                    case 'fill':
                        layers.push(0 /* FILL */);
                        break;
                    case 'markers':
                        layers.push(2 /* MARKERS */);
                        break;
                }
            });
            DEFAULT_VALUE.forEach(function (value) {
                if (layers.indexOf(value) === -1) {
                    layers.push(value);
                }
            });
            return layers;
        }
    };

    var webkitTextStrokeColor = {
        name: "-webkit-text-stroke-color",
        initialValue: 'currentcolor',
        prefix: false,
        type: 3 /* TYPE_VALUE */,
        format: 'color'
    };

    var webkitTextStrokeWidth = {
        name: "-webkit-text-stroke-width",
        initialValue: '0',
        type: 0 /* VALUE */,
        prefix: false,
        parse: function (_context, token) {
            if (isDimensionToken(token)) {
                return token.number;
            }
            return 0;
        }
    };

    var CSSParsedDeclaration = /** @class */ (function () {
        function CSSParsedDeclaration(context, declaration) {
            var _a, _b;
            this.animationDuration = parse(context, duration, declaration.animationDuration);
            this.backgroundClip = parse(context, backgroundClip, declaration.backgroundClip);
            this.backgroundColor = parse(context, backgroundColor, declaration.backgroundColor);
            this.backgroundImage = parse(context, backgroundImage, declaration.backgroundImage);
            this.backgroundOrigin = parse(context, backgroundOrigin, declaration.backgroundOrigin);
            this.backgroundPosition = parse(context, backgroundPosition, declaration.backgroundPosition);
            this.backgroundRepeat = parse(context, backgroundRepeat, declaration.backgroundRepeat);
            this.backgroundSize = parse(context, backgroundSize, declaration.backgroundSize);
            this.borderTopColor = parse(context, borderTopColor, declaration.borderTopColor);
            this.borderRightColor = parse(context, borderRightColor, declaration.borderRightColor);
            this.borderBottomColor = parse(context, borderBottomColor, declaration.borderBottomColor);
            this.borderLeftColor = parse(context, borderLeftColor, declaration.borderLeftColor);
            this.borderTopLeftRadius = parse(context, borderTopLeftRadius, declaration.borderTopLeftRadius);
            this.borderTopRightRadius = parse(context, borderTopRightRadius, declaration.borderTopRightRadius);
            this.borderBottomRightRadius = parse(context, borderBottomRightRadius, declaration.borderBottomRightRadius);
            this.borderBottomLeftRadius = parse(context, borderBottomLeftRadius, declaration.borderBottomLeftRadius);
            this.borderTopStyle = parse(context, borderTopStyle, declaration.borderTopStyle);
            this.borderRightStyle = parse(context, borderRightStyle, declaration.borderRightStyle);
            this.borderBottomStyle = parse(context, borderBottomStyle, declaration.borderBottomStyle);
            this.borderLeftStyle = parse(context, borderLeftStyle, declaration.borderLeftStyle);
            this.borderTopWidth = parse(context, borderTopWidth, declaration.borderTopWidth);
            this.borderRightWidth = parse(context, borderRightWidth, declaration.borderRightWidth);
            this.borderBottomWidth = parse(context, borderBottomWidth, declaration.borderBottomWidth);
            this.borderLeftWidth = parse(context, borderLeftWidth, declaration.borderLeftWidth);
            this.boxShadow = parse(context, boxShadow, declaration.boxShadow);
            this.color = parse(context, color, declaration.color);
            this.direction = parse(context, direction, declaration.direction);
            this.display = parse(context, display, declaration.display);
            this.float = parse(context, float, declaration.cssFloat);
            this.fontFamily = parse(context, fontFamily, declaration.fontFamily);
            this.fontSize = parse(context, fontSize, declaration.fontSize);
            this.fontStyle = parse(context, fontStyle, declaration.fontStyle);
            this.fontVariant = parse(context, fontVariant, declaration.fontVariant);
            this.fontWeight = parse(context, fontWeight, declaration.fontWeight);
            this.letterSpacing = parse(context, letterSpacing, declaration.letterSpacing);
            this.lineBreak = parse(context, lineBreak, declaration.lineBreak);
            this.lineHeight = parse(context, lineHeight, declaration.lineHeight);
            this.listStyleImage = parse(context, listStyleImage, declaration.listStyleImage);
            this.listStylePosition = parse(context, listStylePosition, declaration.listStylePosition);
            this.listStyleType = parse(context, listStyleType, declaration.listStyleType);
            this.marginTop = parse(context, marginTop, declaration.marginTop);
            this.marginRight = parse(context, marginRight, declaration.marginRight);
            this.marginBottom = parse(context, marginBottom, declaration.marginBottom);
            this.marginLeft = parse(context, marginLeft, declaration.marginLeft);
            this.opacity = parse(context, opacity, declaration.opacity);
            var overflowTuple = parse(context, overflow, declaration.overflow);
            this.overflowX = overflowTuple[0];
            this.overflowY = overflowTuple[overflowTuple.length > 1 ? 1 : 0];
            this.overflowWrap = parse(context, overflowWrap, declaration.overflowWrap);
            this.paddingTop = parse(context, paddingTop, declaration.paddingTop);
            this.paddingRight = parse(context, paddingRight, declaration.paddingRight);
            this.paddingBottom = parse(context, paddingBottom, declaration.paddingBottom);
            this.paddingLeft = parse(context, paddingLeft, declaration.paddingLeft);
            this.paintOrder = parse(context, paintOrder, declaration.paintOrder);
            this.position = parse(context, position, declaration.position);
            this.textAlign = parse(context, textAlign, declaration.textAlign);
            this.textDecorationColor = parse(context, textDecorationColor, (_a = declaration.textDecorationColor) !== null && _a !== void 0 ? _a : declaration.color);
            this.textDecorationLine = parse(context, textDecorationLine, (_b = declaration.textDecorationLine) !== null && _b !== void 0 ? _b : declaration.textDecoration);
            this.textShadow = parse(context, textShadow, declaration.textShadow);
            this.textTransform = parse(context, textTransform, declaration.textTransform);
            this.transform = parse(context, transform$1, declaration.transform);
            this.transformOrigin = parse(context, transformOrigin, declaration.transformOrigin);
            this.visibility = parse(context, visibility, declaration.visibility);
            this.webkitTextStrokeColor = parse(context, webkitTextStrokeColor, declaration.webkitTextStrokeColor);
            this.webkitTextStrokeWidth = parse(context, webkitTextStrokeWidth, declaration.webkitTextStrokeWidth);
            this.wordBreak = parse(context, wordBreak, declaration.wordBreak);
            this.zIndex = parse(context, zIndex, declaration.zIndex);
        }
        CSSParsedDeclaration.prototype.isVisible = function () {
            return this.display > 0 && this.opacity > 0 && this.visibility === 0 /* VISIBLE */;
        };
        CSSParsedDeclaration.prototype.isTransparent = function () {
            return isTransparent(this.backgroundColor);
        };
        CSSParsedDeclaration.prototype.isTransformed = function () {
            return this.transform !== null;
        };
        CSSParsedDeclaration.prototype.isPositioned = function () {
            return this.position !== 0 /* STATIC */;
        };
        CSSParsedDeclaration.prototype.isPositionedWithZIndex = function () {
            return this.isPositioned() && !this.zIndex.auto;
        };
        CSSParsedDeclaration.prototype.isFloating = function () {
            return this.float !== 0 /* NONE */;
        };
        CSSParsedDeclaration.prototype.isInlineLevel = function () {
            return (contains(this.display, 4 /* INLINE */) ||
                contains(this.display, 33554432 /* INLINE_BLOCK */) ||
                contains(this.display, 268435456 /* INLINE_FLEX */) ||
                contains(this.display, 536870912 /* INLINE_GRID */) ||
                contains(this.display, 67108864 /* INLINE_LIST_ITEM */) ||
                contains(this.display, 134217728 /* INLINE_TABLE */));
        };
        return CSSParsedDeclaration;
    }());
    var CSSParsedPseudoDeclaration = /** @class */ (function () {
        function CSSParsedPseudoDeclaration(context, declaration) {
            this.content = parse(context, content, declaration.content);
            this.quotes = parse(context, quotes, declaration.quotes);
        }
        return CSSParsedPseudoDeclaration;
    }());
    var CSSParsedCounterDeclaration = /** @class */ (function () {
        function CSSParsedCounterDeclaration(context, declaration) {
            this.counterIncrement = parse(context, counterIncrement, declaration.counterIncrement);
            this.counterReset = parse(context, counterReset, declaration.counterReset);
        }
        return CSSParsedCounterDeclaration;
    }());
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var parse = function (context, descriptor, style) {
        var tokenizer = new Tokenizer();
        var value = style !== null && typeof style !== 'undefined' ? style.toString() : descriptor.initialValue;
        tokenizer.write(value);
        var parser = new Parser(tokenizer.read());
        switch (descriptor.type) {
            case 2 /* IDENT_VALUE */:
                var token = parser.parseComponentValue();
                return descriptor.parse(context, isIdentToken(token) ? token.value : descriptor.initialValue);
            case 0 /* VALUE */:
                return descriptor.parse(context, parser.parseComponentValue());
            case 1 /* LIST */:
                return descriptor.parse(context, parser.parseComponentValues());
            case 4 /* TOKEN_VALUE */:
                return parser.parseComponentValue();
            case 3 /* TYPE_VALUE */:
                switch (descriptor.format) {
                    case 'angle':
                        return angle.parse(context, parser.parseComponentValue());
                    case 'color':
                        return color$1.parse(context, parser.parseComponentValue());
                    case 'image':
                        return image.parse(context, parser.parseComponentValue());
                    case 'length':
                        var length_1 = parser.parseComponentValue();
                        return isLength(length_1) ? length_1 : ZERO_LENGTH;
                    case 'length-percentage':
                        var value_1 = parser.parseComponentValue();
                        return isLengthPercentage(value_1) ? value_1 : ZERO_LENGTH;
                    case 'time':
                        return time.parse(context, parser.parseComponentValue());
                }
                break;
        }
    };

    var elementDebuggerAttribute = 'data-html2canvas-debug';
    var getElementDebugType = function (element) {
        var attribute = element.getAttribute(elementDebuggerAttribute);
        switch (attribute) {
            case 'all':
                return 1 /* ALL */;
            case 'clone':
                return 2 /* CLONE */;
            case 'parse':
                return 3 /* PARSE */;
            case 'render':
                return 4 /* RENDER */;
            default:
                return 0 /* NONE */;
        }
    };
    var isDebugging = function (element, type) {
        var elementType = getElementDebugType(element);
        return elementType === 1 /* ALL */ || type === elementType;
    };

    var ElementContainer = /** @class */ (function () {
        function ElementContainer(context, element) {
            this.context = context;
            this.textNodes = [];
            this.elements = [];
            this.flags = 0;
            if (isDebugging(element, 3 /* PARSE */)) {
                debugger;
            }
            this.styles = new CSSParsedDeclaration(context, window.getComputedStyle(element, null));
            if (isHTMLElementNode(element)) {
                if (this.styles.animationDuration.some(function (duration) { return duration > 0; })) {
                    element.style.animationDuration = '0s';
                }
                if (this.styles.transform !== null) {
                    // getBoundingClientRect takes transforms into account
                    element.style.transform = 'none';
                }
            }
            this.bounds = parseBounds(this.context, element);
            if (isDebugging(element, 4 /* RENDER */)) {
                this.flags |= 16 /* DEBUG_RENDER */;
            }
        }
        return ElementContainer;
    }());

    /*
     * text-segmentation 1.0.3 <https://github.com/niklasvh/text-segmentation>
     * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
     * Released under MIT License
     */
    var base64 = 'AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=';

    /*
     * utrie 1.0.2 <https://github.com/niklasvh/utrie>
     * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
     * Released under MIT License
     */
    var chars$1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    // Use a lookup table to find the index.
    var lookup$1 = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
    for (var i$1 = 0; i$1 < chars$1.length; i$1++) {
        lookup$1[chars$1.charCodeAt(i$1)] = i$1;
    }
    var decode = function (base64) {
        var bufferLength = base64.length * 0.75, len = base64.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
        if (base64[base64.length - 1] === '=') {
            bufferLength--;
            if (base64[base64.length - 2] === '=') {
                bufferLength--;
            }
        }
        var buffer = typeof ArrayBuffer !== 'undefined' &&
            typeof Uint8Array !== 'undefined' &&
            typeof Uint8Array.prototype.slice !== 'undefined'
            ? new ArrayBuffer(bufferLength)
            : new Array(bufferLength);
        var bytes = Array.isArray(buffer) ? buffer : new Uint8Array(buffer);
        for (i = 0; i < len; i += 4) {
            encoded1 = lookup$1[base64.charCodeAt(i)];
            encoded2 = lookup$1[base64.charCodeAt(i + 1)];
            encoded3 = lookup$1[base64.charCodeAt(i + 2)];
            encoded4 = lookup$1[base64.charCodeAt(i + 3)];
            bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
            bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
            bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
        }
        return buffer;
    };
    var polyUint16Array = function (buffer) {
        var length = buffer.length;
        var bytes = [];
        for (var i = 0; i < length; i += 2) {
            bytes.push((buffer[i + 1] << 8) | buffer[i]);
        }
        return bytes;
    };
    var polyUint32Array = function (buffer) {
        var length = buffer.length;
        var bytes = [];
        for (var i = 0; i < length; i += 4) {
            bytes.push((buffer[i + 3] << 24) | (buffer[i + 2] << 16) | (buffer[i + 1] << 8) | buffer[i]);
        }
        return bytes;
    };

    /** Shift size for getting the index-2 table offset. */
    var UTRIE2_SHIFT_2 = 5;
    /** Shift size for getting the index-1 table offset. */
    var UTRIE2_SHIFT_1 = 6 + 5;
    /**
     * Shift size for shifting left the index array values.
     * Increases possible data size with 16-bit index values at the cost
     * of compactability.
     * This requires data blocks to be aligned by UTRIE2_DATA_GRANULARITY.
     */
    var UTRIE2_INDEX_SHIFT = 2;
    /**
     * Difference between the two shift sizes,
     * for getting an index-1 offset from an index-2 offset. 6=11-5
     */
    var UTRIE2_SHIFT_1_2 = UTRIE2_SHIFT_1 - UTRIE2_SHIFT_2;
    /**
     * The part of the index-2 table for U+D800..U+DBFF stores values for
     * lead surrogate code _units_ not code _points_.
     * Values for lead surrogate code _points_ are indexed with this portion of the table.
     * Length=32=0x20=0x400>>UTRIE2_SHIFT_2. (There are 1024=0x400 lead surrogates.)
     */
    var UTRIE2_LSCP_INDEX_2_OFFSET = 0x10000 >> UTRIE2_SHIFT_2;
    /** Number of entries in a data block. 32=0x20 */
    var UTRIE2_DATA_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_2;
    /** Mask for getting the lower bits for the in-data-block offset. */
    var UTRIE2_DATA_MASK = UTRIE2_DATA_BLOCK_LENGTH - 1;
    var UTRIE2_LSCP_INDEX_2_LENGTH = 0x400 >> UTRIE2_SHIFT_2;
    /** Count the lengths of both BMP pieces. 2080=0x820 */
    var UTRIE2_INDEX_2_BMP_LENGTH = UTRIE2_LSCP_INDEX_2_OFFSET + UTRIE2_LSCP_INDEX_2_LENGTH;
    /**
     * The 2-byte UTF-8 version of the index-2 table follows at offset 2080=0x820.
     * Length 32=0x20 for lead bytes C0..DF, regardless of UTRIE2_SHIFT_2.
     */
    var UTRIE2_UTF8_2B_INDEX_2_OFFSET = UTRIE2_INDEX_2_BMP_LENGTH;
    var UTRIE2_UTF8_2B_INDEX_2_LENGTH = 0x800 >> 6; /* U+0800 is the first code point after 2-byte UTF-8 */
    /**
     * The index-1 table, only used for supplementary code points, at offset 2112=0x840.
     * Variable length, for code points up to highStart, where the last single-value range starts.
     * Maximum length 512=0x200=0x100000>>UTRIE2_SHIFT_1.
     * (For 0x100000 supplementary code points U+10000..U+10ffff.)
     *
     * The part of the index-2 table for supplementary code points starts
     * after this index-1 table.
     *
     * Both the index-1 table and the following part of the index-2 table
     * are omitted completely if there is only BMP data.
     */
    var UTRIE2_INDEX_1_OFFSET = UTRIE2_UTF8_2B_INDEX_2_OFFSET + UTRIE2_UTF8_2B_INDEX_2_LENGTH;
    /**
     * Number of index-1 entries for the BMP. 32=0x20
     * This part of the index-1 table is omitted from the serialized form.
     */
    var UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = 0x10000 >> UTRIE2_SHIFT_1;
    /** Number of entries in an index-2 block. 64=0x40 */
    var UTRIE2_INDEX_2_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_1_2;
    /** Mask for getting the lower bits for the in-index-2-block offset. */
    var UTRIE2_INDEX_2_MASK = UTRIE2_INDEX_2_BLOCK_LENGTH - 1;
    var slice16 = function (view, start, end) {
        if (view.slice) {
            return view.slice(start, end);
        }
        return new Uint16Array(Array.prototype.slice.call(view, start, end));
    };
    var slice32 = function (view, start, end) {
        if (view.slice) {
            return view.slice(start, end);
        }
        return new Uint32Array(Array.prototype.slice.call(view, start, end));
    };
    var createTrieFromBase64 = function (base64, _byteLength) {
        var buffer = decode(base64);
        var view32 = Array.isArray(buffer) ? polyUint32Array(buffer) : new Uint32Array(buffer);
        var view16 = Array.isArray(buffer) ? polyUint16Array(buffer) : new Uint16Array(buffer);
        var headerLength = 24;
        var index = slice16(view16, headerLength / 2, view32[4] / 2);
        var data = view32[5] === 2
            ? slice16(view16, (headerLength + view32[4]) / 2)
            : slice32(view32, Math.ceil((headerLength + view32[4]) / 4));
        return new Trie(view32[0], view32[1], view32[2], view32[3], index, data);
    };
    var Trie = /** @class */ (function () {
        function Trie(initialValue, errorValue, highStart, highValueIndex, index, data) {
            this.initialValue = initialValue;
            this.errorValue = errorValue;
            this.highStart = highStart;
            this.highValueIndex = highValueIndex;
            this.index = index;
            this.data = data;
        }
        /**
         * Get the value for a code point as stored in the Trie.
         *
         * @param codePoint the code point
         * @return the value
         */
        Trie.prototype.get = function (codePoint) {
            var ix;
            if (codePoint >= 0) {
                if (codePoint < 0x0d800 || (codePoint > 0x0dbff && codePoint <= 0x0ffff)) {
                    // Ordinary BMP code point, excluding leading surrogates.
                    // BMP uses a single level lookup.  BMP index starts at offset 0 in the Trie2 index.
                    // 16 bit data is stored in the index array itself.
                    ix = this.index[codePoint >> UTRIE2_SHIFT_2];
                    ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                    return this.data[ix];
                }
                if (codePoint <= 0xffff) {
                    // Lead Surrogate Code Point.  A Separate index section is stored for
                    // lead surrogate code units and code points.
                    //   The main index has the code unit data.
                    //   For this function, we need the code point data.
                    // Note: this expression could be refactored for slightly improved efficiency, but
                    //       surrogate code points will be so rare in practice that it's not worth it.
                    ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET + ((codePoint - 0xd800) >> UTRIE2_SHIFT_2)];
                    ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                    return this.data[ix];
                }
                if (codePoint < this.highStart) {
                    // Supplemental code point, use two-level lookup.
                    ix = UTRIE2_INDEX_1_OFFSET - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH + (codePoint >> UTRIE2_SHIFT_1);
                    ix = this.index[ix];
                    ix += (codePoint >> UTRIE2_SHIFT_2) & UTRIE2_INDEX_2_MASK;
                    ix = this.index[ix];
                    ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                    return this.data[ix];
                }
                if (codePoint <= 0x10ffff) {
                    return this.data[this.highValueIndex];
                }
            }
            // Fall through.  The code point is outside of the legal range of 0..0x10ffff.
            return this.errorValue;
        };
        return Trie;
    }());

    /*
     * base64-arraybuffer 1.0.2 <https://github.com/niklasvh/base64-arraybuffer>
     * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
     * Released under MIT License
     */
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    // Use a lookup table to find the index.
    var lookup = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
    for (var i = 0; i < chars.length; i++) {
        lookup[chars.charCodeAt(i)] = i;
    }

    var Prepend = 1;
    var CR = 2;
    var LF = 3;
    var Control = 4;
    var Extend = 5;
    var SpacingMark = 7;
    var L = 8;
    var V = 9;
    var T = 10;
    var LV = 11;
    var LVT = 12;
    var ZWJ = 13;
    var Extended_Pictographic = 14;
    var RI = 15;
    var toCodePoints = function (str) {
        var codePoints = [];
        var i = 0;
        var length = str.length;
        while (i < length) {
            var value = str.charCodeAt(i++);
            if (value >= 0xd800 && value <= 0xdbff && i < length) {
                var extra = str.charCodeAt(i++);
                if ((extra & 0xfc00) === 0xdc00) {
                    codePoints.push(((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000);
                }
                else {
                    codePoints.push(value);
                    i--;
                }
            }
            else {
                codePoints.push(value);
            }
        }
        return codePoints;
    };
    var fromCodePoint = function () {
        var codePoints = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            codePoints[_i] = arguments[_i];
        }
        if (String.fromCodePoint) {
            return String.fromCodePoint.apply(String, codePoints);
        }
        var length = codePoints.length;
        if (!length) {
            return '';
        }
        var codeUnits = [];
        var index = -1;
        var result = '';
        while (++index < length) {
            var codePoint = codePoints[index];
            if (codePoint <= 0xffff) {
                codeUnits.push(codePoint);
            }
            else {
                codePoint -= 0x10000;
                codeUnits.push((codePoint >> 10) + 0xd800, (codePoint % 0x400) + 0xdc00);
            }
            if (index + 1 === length || codeUnits.length > 0x4000) {
                result += String.fromCharCode.apply(String, codeUnits);
                codeUnits.length = 0;
            }
        }
        return result;
    };
    var UnicodeTrie = createTrieFromBase64(base64);
    var BREAK_NOT_ALLOWED = '×';
    var BREAK_ALLOWED = '÷';
    var codePointToClass = function (codePoint) { return UnicodeTrie.get(codePoint); };
    var _graphemeBreakAtIndex = function (_codePoints, classTypes, index) {
        var prevIndex = index - 2;
        var prev = classTypes[prevIndex];
        var current = classTypes[index - 1];
        var next = classTypes[index];
        // GB3 Do not break between a CR and LF
        if (current === CR && next === LF) {
            return BREAK_NOT_ALLOWED;
        }
        // GB4 Otherwise, break before and after controls.
        if (current === CR || current === LF || current === Control) {
            return BREAK_ALLOWED;
        }
        // GB5
        if (next === CR || next === LF || next === Control) {
            return BREAK_ALLOWED;
        }
        // Do not break Hangul syllable sequences.
        // GB6
        if (current === L && [L, V, LV, LVT].indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED;
        }
        // GB7
        if ((current === LV || current === V) && (next === V || next === T)) {
            return BREAK_NOT_ALLOWED;
        }
        // GB8
        if ((current === LVT || current === T) && next === T) {
            return BREAK_NOT_ALLOWED;
        }
        // GB9 Do not break before extending characters or ZWJ.
        if (next === ZWJ || next === Extend) {
            return BREAK_NOT_ALLOWED;
        }
        // Do not break before SpacingMarks, or after Prepend characters.
        // GB9a
        if (next === SpacingMark) {
            return BREAK_NOT_ALLOWED;
        }
        // GB9a
        if (current === Prepend) {
            return BREAK_NOT_ALLOWED;
        }
        // GB11 Do not break within emoji modifier sequences or emoji zwj sequences.
        if (current === ZWJ && next === Extended_Pictographic) {
            while (prev === Extend) {
                prev = classTypes[--prevIndex];
            }
            if (prev === Extended_Pictographic) {
                return BREAK_NOT_ALLOWED;
            }
        }
        // GB12 Do not break within emoji flag sequences.
        // That is, do not break between regional indicator (RI) symbols
        // if there is an odd number of RI characters before the break point.
        if (current === RI && next === RI) {
            var countRI = 0;
            while (prev === RI) {
                countRI++;
                prev = classTypes[--prevIndex];
            }
            if (countRI % 2 === 0) {
                return BREAK_NOT_ALLOWED;
            }
        }
        return BREAK_ALLOWED;
    };
    var GraphemeBreaker = function (str) {
        var codePoints = toCodePoints(str);
        var length = codePoints.length;
        var index = 0;
        var lastEnd = 0;
        var classTypes = codePoints.map(codePointToClass);
        return {
            next: function () {
                if (index >= length) {
                    return { done: true, value: null };
                }
                var graphemeBreak = BREAK_NOT_ALLOWED;
                while (index < length &&
                    (graphemeBreak = _graphemeBreakAtIndex(codePoints, classTypes, ++index)) === BREAK_NOT_ALLOWED) { }
                if (graphemeBreak !== BREAK_NOT_ALLOWED || index === length) {
                    var value = fromCodePoint.apply(null, codePoints.slice(lastEnd, index));
                    lastEnd = index;
                    return { value: value, done: false };
                }
                return { done: true, value: null };
            },
        };
    };
    var splitGraphemes = function (str) {
        var breaker = GraphemeBreaker(str);
        var graphemes = [];
        var bk;
        while (!(bk = breaker.next()).done) {
            if (bk.value) {
                graphemes.push(bk.value.slice());
            }
        }
        return graphemes;
    };

    var testRangeBounds = function (document) {
        var TEST_HEIGHT = 123;
        if (document.createRange) {
            var range = document.createRange();
            if (range.getBoundingClientRect) {
                var testElement = document.createElement('boundtest');
                testElement.style.height = TEST_HEIGHT + "px";
                testElement.style.display = 'block';
                document.body.appendChild(testElement);
                range.selectNode(testElement);
                var rangeBounds = range.getBoundingClientRect();
                var rangeHeight = Math.round(rangeBounds.height);
                document.body.removeChild(testElement);
                if (rangeHeight === TEST_HEIGHT) {
                    return true;
                }
            }
        }
        return false;
    };
    var testIOSLineBreak = function (document) {
        var testElement = document.createElement('boundtest');
        testElement.style.width = '50px';
        testElement.style.display = 'block';
        testElement.style.fontSize = '12px';
        testElement.style.letterSpacing = '0px';
        testElement.style.wordSpacing = '0px';
        document.body.appendChild(testElement);
        var range = document.createRange();
        testElement.innerHTML = typeof ''.repeat === 'function' ? '&#128104;'.repeat(10) : '';
        var node = testElement.firstChild;
        var textList = toCodePoints$1(node.data).map(function (i) { return fromCodePoint$1(i); });
        var offset = 0;
        var prev = {};
        // ios 13 does not handle range getBoundingClientRect line changes correctly #2177
        var supports = textList.every(function (text, i) {
            range.setStart(node, offset);
            range.setEnd(node, offset + text.length);
            var rect = range.getBoundingClientRect();
            offset += text.length;
            var boundAhead = rect.x > prev.x || rect.y > prev.y;
            prev = rect;
            if (i === 0) {
                return true;
            }
            return boundAhead;
        });
        document.body.removeChild(testElement);
        return supports;
    };
    var testCORS = function () { return typeof new Image().crossOrigin !== 'undefined'; };
    var testResponseType = function () { return typeof new XMLHttpRequest().responseType === 'string'; };
    var testSVG = function (document) {
        var img = new Image();
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        if (!ctx) {
            return false;
        }
        img.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
        try {
            ctx.drawImage(img, 0, 0);
            canvas.toDataURL();
        }
        catch (e) {
            return false;
        }
        return true;
    };
    var isGreenPixel = function (data) {
        return data[0] === 0 && data[1] === 255 && data[2] === 0 && data[3] === 255;
    };
    var testForeignObject = function (document) {
        var canvas = document.createElement('canvas');
        var size = 100;
        canvas.width = size;
        canvas.height = size;
        var ctx = canvas.getContext('2d');
        if (!ctx) {
            return Promise.reject(false);
        }
        ctx.fillStyle = 'rgb(0, 255, 0)';
        ctx.fillRect(0, 0, size, size);
        var img = new Image();
        var greenImageSrc = canvas.toDataURL();
        img.src = greenImageSrc;
        var svg = createForeignObjectSVG(size, size, 0, 0, img);
        ctx.fillStyle = 'red';
        ctx.fillRect(0, 0, size, size);
        return loadSerializedSVG$1(svg)
            .then(function (img) {
            ctx.drawImage(img, 0, 0);
            var data = ctx.getImageData(0, 0, size, size).data;
            ctx.fillStyle = 'red';
            ctx.fillRect(0, 0, size, size);
            var node = document.createElement('div');
            node.style.backgroundImage = "url(" + greenImageSrc + ")";
            node.style.height = size + "px";
            // Firefox 55 does not render inline <img /> tags
            return isGreenPixel(data)
                ? loadSerializedSVG$1(createForeignObjectSVG(size, size, 0, 0, node))
                : Promise.reject(false);
        })
            .then(function (img) {
            ctx.drawImage(img, 0, 0);
            // Edge does not render background-images
            return isGreenPixel(ctx.getImageData(0, 0, size, size).data);
        })
            .catch(function () { return false; });
    };
    var createForeignObjectSVG = function (width, height, x, y, node) {
        var xmlns = 'http://www.w3.org/2000/svg';
        var svg = document.createElementNS(xmlns, 'svg');
        var foreignObject = document.createElementNS(xmlns, 'foreignObject');
        svg.setAttributeNS(null, 'width', width.toString());
        svg.setAttributeNS(null, 'height', height.toString());
        foreignObject.setAttributeNS(null, 'width', '100%');
        foreignObject.setAttributeNS(null, 'height', '100%');
        foreignObject.setAttributeNS(null, 'x', x.toString());
        foreignObject.setAttributeNS(null, 'y', y.toString());
        foreignObject.setAttributeNS(null, 'externalResourcesRequired', 'true');
        svg.appendChild(foreignObject);
        foreignObject.appendChild(node);
        return svg;
    };
    var loadSerializedSVG$1 = function (svg) {
        return new Promise(function (resolve, reject) {
            var img = new Image();
            img.onload = function () { return resolve(img); };
            img.onerror = reject;
            img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(svg));
        });
    };
    var FEATURES = {
        get SUPPORT_RANGE_BOUNDS() {
            var value = testRangeBounds(document);
            Object.defineProperty(FEATURES, 'SUPPORT_RANGE_BOUNDS', { value: value });
            return value;
        },
        get SUPPORT_WORD_BREAKING() {
            var value = FEATURES.SUPPORT_RANGE_BOUNDS && testIOSLineBreak(document);
            Object.defineProperty(FEATURES, 'SUPPORT_WORD_BREAKING', { value: value });
            return value;
        },
        get SUPPORT_SVG_DRAWING() {
            var value = testSVG(document);
            Object.defineProperty(FEATURES, 'SUPPORT_SVG_DRAWING', { value: value });
            return value;
        },
        get SUPPORT_FOREIGNOBJECT_DRAWING() {
            var value = typeof Array.from === 'function' && typeof window.fetch === 'function'
                ? testForeignObject(document)
                : Promise.resolve(false);
            Object.defineProperty(FEATURES, 'SUPPORT_FOREIGNOBJECT_DRAWING', { value: value });
            return value;
        },
        get SUPPORT_CORS_IMAGES() {
            var value = testCORS();
            Object.defineProperty(FEATURES, 'SUPPORT_CORS_IMAGES', { value: value });
            return value;
        },
        get SUPPORT_RESPONSE_TYPE() {
            var value = testResponseType();
            Object.defineProperty(FEATURES, 'SUPPORT_RESPONSE_TYPE', { value: value });
            return value;
        },
        get SUPPORT_CORS_XHR() {
            var value = 'withCredentials' in new XMLHttpRequest();
            Object.defineProperty(FEATURES, 'SUPPORT_CORS_XHR', { value: value });
            return value;
        },
        get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var value = !!(typeof Intl !== 'undefined' && Intl.Segmenter);
            Object.defineProperty(FEATURES, 'SUPPORT_NATIVE_TEXT_SEGMENTATION', { value: value });
            return value;
        }
    };

    var TextBounds = /** @class */ (function () {
        function TextBounds(text, bounds) {
            this.text = text;
            this.bounds = bounds;
        }
        return TextBounds;
    }());
    var parseTextBounds = function (context, value, styles, node) {
        var textList = breakText(value, styles);
        var textBounds = [];
        var offset = 0;
        textList.forEach(function (text) {
            if (styles.textDecorationLine.length || text.trim().length > 0) {
                if (FEATURES.SUPPORT_RANGE_BOUNDS) {
                    var clientRects = createRange(node, offset, text.length).getClientRects();
                    if (clientRects.length > 1) {
                        var subSegments = segmentGraphemes(text);
                        var subOffset_1 = 0;
                        subSegments.forEach(function (subSegment) {
                            textBounds.push(new TextBounds(subSegment, Bounds.fromDOMRectList(context, createRange(node, subOffset_1 + offset, subSegment.length).getClientRects())));
                            subOffset_1 += subSegment.length;
                        });
                    }
                    else {
                        textBounds.push(new TextBounds(text, Bounds.fromDOMRectList(context, clientRects)));
                    }
                }
                else {
                    var replacementNode = node.splitText(text.length);
                    textBounds.push(new TextBounds(text, getWrapperBounds(context, node)));
                    node = replacementNode;
                }
            }
            else if (!FEATURES.SUPPORT_RANGE_BOUNDS) {
                node = node.splitText(text.length);
            }
            offset += text.length;
        });
        return textBounds;
    };
    var getWrapperBounds = function (context, node) {
        var ownerDocument = node.ownerDocument;
        if (ownerDocument) {
            var wrapper = ownerDocument.createElement('html2canvaswrapper');
            wrapper.appendChild(node.cloneNode(true));
            var parentNode = node.parentNode;
            if (parentNode) {
                parentNode.replaceChild(wrapper, node);
                var bounds = parseBounds(context, wrapper);
                if (wrapper.firstChild) {
                    parentNode.replaceChild(wrapper.firstChild, wrapper);
                }
                return bounds;
            }
        }
        return Bounds.EMPTY;
    };
    var createRange = function (node, offset, length) {
        var ownerDocument = node.ownerDocument;
        if (!ownerDocument) {
            throw new Error('Node has no owner document');
        }
        var range = ownerDocument.createRange();
        range.setStart(node, offset);
        range.setEnd(node, offset + length);
        return range;
    };
    var segmentGraphemes = function (value) {
        if (FEATURES.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var segmenter = new Intl.Segmenter(void 0, { granularity: 'grapheme' });
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return Array.from(segmenter.segment(value)).map(function (segment) { return segment.segment; });
        }
        return splitGraphemes(value);
    };
    var segmentWords = function (value, styles) {
        if (FEATURES.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var segmenter = new Intl.Segmenter(void 0, {
                granularity: 'word'
            });
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return Array.from(segmenter.segment(value)).map(function (segment) { return segment.segment; });
        }
        return breakWords(value, styles);
    };
    var breakText = function (value, styles) {
        return styles.letterSpacing !== 0 ? segmentGraphemes(value) : segmentWords(value, styles);
    };
    // https://drafts.csswg.org/css-text/#word-separator
    var wordSeparators = [0x0020, 0x00a0, 0x1361, 0x10100, 0x10101, 0x1039, 0x1091];
    var breakWords = function (str, styles) {
        var breaker = LineBreaker(str, {
            lineBreak: styles.lineBreak,
            wordBreak: styles.overflowWrap === "break-word" /* BREAK_WORD */ ? 'break-word' : styles.wordBreak
        });
        var words = [];
        var bk;
        var _loop_1 = function () {
            if (bk.value) {
                var value = bk.value.slice();
                var codePoints = toCodePoints$1(value);
                var word_1 = '';
                codePoints.forEach(function (codePoint) {
                    if (wordSeparators.indexOf(codePoint) === -1) {
                        word_1 += fromCodePoint$1(codePoint);
                    }
                    else {
                        if (word_1.length) {
                            words.push(word_1);
                        }
                        words.push(fromCodePoint$1(codePoint));
                        word_1 = '';
                    }
                });
                if (word_1.length) {
                    words.push(word_1);
                }
            }
        };
        while (!(bk = breaker.next()).done) {
            _loop_1();
        }
        return words;
    };

    var TextContainer = /** @class */ (function () {
        function TextContainer(context, node, styles) {
            this.text = transform(node.data, styles.textTransform);
            this.textBounds = parseTextBounds(context, this.text, styles, node);
        }
        return TextContainer;
    }());
    var transform = function (text, transform) {
        switch (transform) {
            case 1 /* LOWERCASE */:
                return text.toLowerCase();
            case 3 /* CAPITALIZE */:
                return text.replace(CAPITALIZE, capitalize);
            case 2 /* UPPERCASE */:
                return text.toUpperCase();
            default:
                return text;
        }
    };
    var CAPITALIZE = /(^|\s|:|-|\(|\))([a-z])/g;
    var capitalize = function (m, p1, p2) {
        if (m.length > 0) {
            return p1 + p2.toUpperCase();
        }
        return m;
    };

    var ImageElementContainer = /** @class */ (function (_super) {
        __extends(ImageElementContainer, _super);
        function ImageElementContainer(context, img) {
            var _this = _super.call(this, context, img) || this;
            _this.src = img.currentSrc || img.src;
            _this.intrinsicWidth = img.naturalWidth;
            _this.intrinsicHeight = img.naturalHeight;
            _this.context.cache.addImage(_this.src);
            return _this;
        }
        return ImageElementContainer;
    }(ElementContainer));

    var CanvasElementContainer = /** @class */ (function (_super) {
        __extends(CanvasElementContainer, _super);
        function CanvasElementContainer(context, canvas) {
            var _this = _super.call(this, context, canvas) || this;
            _this.canvas = canvas;
            _this.intrinsicWidth = canvas.width;
            _this.intrinsicHeight = canvas.height;
            return _this;
        }
        return CanvasElementContainer;
    }(ElementContainer));

    var SVGElementContainer = /** @class */ (function (_super) {
        __extends(SVGElementContainer, _super);
        function SVGElementContainer(context, img) {
            var _this = _super.call(this, context, img) || this;
            var s = new XMLSerializer();
            var bounds = parseBounds(context, img);
            img.setAttribute('width', bounds.width + "px");
            img.setAttribute('height', bounds.height + "px");
            _this.svg = "data:image/svg+xml," + encodeURIComponent(s.serializeToString(img));
            _this.intrinsicWidth = img.width.baseVal.value;
            _this.intrinsicHeight = img.height.baseVal.value;
            _this.context.cache.addImage(_this.svg);
            return _this;
        }
        return SVGElementContainer;
    }(ElementContainer));

    var LIElementContainer = /** @class */ (function (_super) {
        __extends(LIElementContainer, _super);
        function LIElementContainer(context, element) {
            var _this = _super.call(this, context, element) || this;
            _this.value = element.value;
            return _this;
        }
        return LIElementContainer;
    }(ElementContainer));

    var OLElementContainer = /** @class */ (function (_super) {
        __extends(OLElementContainer, _super);
        function OLElementContainer(context, element) {
            var _this = _super.call(this, context, element) || this;
            _this.start = element.start;
            _this.reversed = typeof element.reversed === 'boolean' && element.reversed === true;
            return _this;
        }
        return OLElementContainer;
    }(ElementContainer));

    var CHECKBOX_BORDER_RADIUS = [
        {
            type: 15 /* DIMENSION_TOKEN */,
            flags: 0,
            unit: 'px',
            number: 3
        }
    ];
    var RADIO_BORDER_RADIUS = [
        {
            type: 16 /* PERCENTAGE_TOKEN */,
            flags: 0,
            number: 50
        }
    ];
    var reformatInputBounds = function (bounds) {
        if (bounds.width > bounds.height) {
            return new Bounds(bounds.left + (bounds.width - bounds.height) / 2, bounds.top, bounds.height, bounds.height);
        }
        else if (bounds.width < bounds.height) {
            return new Bounds(bounds.left, bounds.top + (bounds.height - bounds.width) / 2, bounds.width, bounds.width);
        }
        return bounds;
    };
    var getInputValue = function (node) {
        var value = node.type === PASSWORD ? new Array(node.value.length + 1).join('\u2022') : node.value;
        return value.length === 0 ? node.placeholder || '' : value;
    };
    var CHECKBOX = 'checkbox';
    var RADIO = 'radio';
    var PASSWORD = 'password';
    var INPUT_COLOR = 0x2a2a2aff;
    var InputElementContainer = /** @class */ (function (_super) {
        __extends(InputElementContainer, _super);
        function InputElementContainer(context, input) {
            var _this = _super.call(this, context, input) || this;
            _this.type = input.type.toLowerCase();
            _this.checked = input.checked;
            _this.value = getInputValue(input);
            if (_this.type === CHECKBOX || _this.type === RADIO) {
                _this.styles.backgroundColor = 0xdededeff;
                _this.styles.borderTopColor =
                    _this.styles.borderRightColor =
                        _this.styles.borderBottomColor =
                            _this.styles.borderLeftColor =
                                0xa5a5a5ff;
                _this.styles.borderTopWidth =
                    _this.styles.borderRightWidth =
                        _this.styles.borderBottomWidth =
                            _this.styles.borderLeftWidth =
                                1;
                _this.styles.borderTopStyle =
                    _this.styles.borderRightStyle =
                        _this.styles.borderBottomStyle =
                            _this.styles.borderLeftStyle =
                                1 /* SOLID */;
                _this.styles.backgroundClip = [0 /* BORDER_BOX */];
                _this.styles.backgroundOrigin = [0 /* BORDER_BOX */];
                _this.bounds = reformatInputBounds(_this.bounds);
            }
            switch (_this.type) {
                case CHECKBOX:
                    _this.styles.borderTopRightRadius =
                        _this.styles.borderTopLeftRadius =
                            _this.styles.borderBottomRightRadius =
                                _this.styles.borderBottomLeftRadius =
                                    CHECKBOX_BORDER_RADIUS;
                    break;
                case RADIO:
                    _this.styles.borderTopRightRadius =
                        _this.styles.borderTopLeftRadius =
                            _this.styles.borderBottomRightRadius =
                                _this.styles.borderBottomLeftRadius =
                                    RADIO_BORDER_RADIUS;
                    break;
            }
            return _this;
        }
        return InputElementContainer;
    }(ElementContainer));

    var SelectElementContainer = /** @class */ (function (_super) {
        __extends(SelectElementContainer, _super);
        function SelectElementContainer(context, element) {
            var _this = _super.call(this, context, element) || this;
            var option = element.options[element.selectedIndex || 0];
            _this.value = option ? option.text || '' : '';
            return _this;
        }
        return SelectElementContainer;
    }(ElementContainer));

    var TextareaElementContainer = /** @class */ (function (_super) {
        __extends(TextareaElementContainer, _super);
        function TextareaElementContainer(context, element) {
            var _this = _super.call(this, context, element) || this;
            _this.value = element.value;
            return _this;
        }
        return TextareaElementContainer;
    }(ElementContainer));

    var IFrameElementContainer = /** @class */ (function (_super) {
        __extends(IFrameElementContainer, _super);
        function IFrameElementContainer(context, iframe) {
            var _this = _super.call(this, context, iframe) || this;
            _this.src = iframe.src;
            _this.width = parseInt(iframe.width, 10) || 0;
            _this.height = parseInt(iframe.height, 10) || 0;
            _this.backgroundColor = _this.styles.backgroundColor;
            try {
                if (iframe.contentWindow &&
                    iframe.contentWindow.document &&
                    iframe.contentWindow.document.documentElement) {
                    _this.tree = parseTree(context, iframe.contentWindow.document.documentElement);
                    // http://www.w3.org/TR/css3-background/#special-backgrounds
                    var documentBackgroundColor = iframe.contentWindow.document.documentElement
                        ? parseColor(context, getComputedStyle(iframe.contentWindow.document.documentElement).backgroundColor)
                        : COLORS.TRANSPARENT;
                    var bodyBackgroundColor = iframe.contentWindow.document.body
                        ? parseColor(context, getComputedStyle(iframe.contentWindow.document.body).backgroundColor)
                        : COLORS.TRANSPARENT;
                    _this.backgroundColor = isTransparent(documentBackgroundColor)
                        ? isTransparent(bodyBackgroundColor)
                            ? _this.styles.backgroundColor
                            : bodyBackgroundColor
                        : documentBackgroundColor;
                }
            }
            catch (e) { }
            return _this;
        }
        return IFrameElementContainer;
    }(ElementContainer));

    var LIST_OWNERS = ['OL', 'UL', 'MENU'];
    var parseNodeTree = function (context, node, parent, root) {
        for (var childNode = node.firstChild, nextNode = void 0; childNode; childNode = nextNode) {
            nextNode = childNode.nextSibling;
            if (isTextNode(childNode) && childNode.data.trim().length > 0) {
                parent.textNodes.push(new TextContainer(context, childNode, parent.styles));
            }
            else if (isElementNode(childNode)) {
                if (isSlotElement(childNode) && childNode.assignedNodes) {
                    childNode.assignedNodes().forEach(function (childNode) { return parseNodeTree(context, childNode, parent, root); });
                }
                else {
                    var container = createContainer(context, childNode);
                    if (container.styles.isVisible()) {
                        if (createsRealStackingContext(childNode, container, root)) {
                            container.flags |= 4 /* CREATES_REAL_STACKING_CONTEXT */;
                        }
                        else if (createsStackingContext(container.styles)) {
                            container.flags |= 2 /* CREATES_STACKING_CONTEXT */;
                        }
                        if (LIST_OWNERS.indexOf(childNode.tagName) !== -1) {
                            container.flags |= 8 /* IS_LIST_OWNER */;
                        }
                        parent.elements.push(container);
                        childNode.slot;
                        if (childNode.shadowRoot) {
                            parseNodeTree(context, childNode.shadowRoot, container, root);
                        }
                        else if (!isTextareaElement(childNode) &&
                            !isSVGElement(childNode) &&
                            !isSelectElement(childNode)) {
                            parseNodeTree(context, childNode, container, root);
                        }
                    }
                }
            }
        }
    };
    var createContainer = function (context, element) {
        if (isImageElement(element)) {
            return new ImageElementContainer(context, element);
        }
        if (isCanvasElement(element)) {
            return new CanvasElementContainer(context, element);
        }
        if (isSVGElement(element)) {
            return new SVGElementContainer(context, element);
        }
        if (isLIElement(element)) {
            return new LIElementContainer(context, element);
        }
        if (isOLElement(element)) {
            return new OLElementContainer(context, element);
        }
        if (isInputElement(element)) {
            return new InputElementContainer(context, element);
        }
        if (isSelectElement(element)) {
            return new SelectElementContainer(context, element);
        }
        if (isTextareaElement(element)) {
            return new TextareaElementContainer(context, element);
        }
        if (isIFrameElement(element)) {
            return new IFrameElementContainer(context, element);
        }
        return new ElementContainer(context, element);
    };
    var parseTree = function (context, element) {
        var container = createContainer(context, element);
        container.flags |= 4 /* CREATES_REAL_STACKING_CONTEXT */;
        parseNodeTree(context, element, container, container);
        return container;
    };
    var createsRealStackingContext = function (node, container, root) {
        return (container.styles.isPositionedWithZIndex() ||
            container.styles.opacity < 1 ||
            container.styles.isTransformed() ||
            (isBodyElement(node) && root.styles.isTransparent()));
    };
    var createsStackingContext = function (styles) { return styles.isPositioned() || styles.isFloating(); };
    var isTextNode = function (node) { return node.nodeType === Node.TEXT_NODE; };
    var isElementNode = function (node) { return node.nodeType === Node.ELEMENT_NODE; };
    var isHTMLElementNode = function (node) {
        return isElementNode(node) && typeof node.style !== 'undefined' && !isSVGElementNode(node);
    };
    var isSVGElementNode = function (element) {
        return typeof element.className === 'object';
    };
    var isLIElement = function (node) { return node.tagName === 'LI'; };
    var isOLElement = function (node) { return node.tagName === 'OL'; };
    var isInputElement = function (node) { return node.tagName === 'INPUT'; };
    var isHTMLElement = function (node) { return node.tagName === 'HTML'; };
    var isSVGElement = function (node) { return node.tagName === 'svg'; };
    var isBodyElement = function (node) { return node.tagName === 'BODY'; };
    var isCanvasElement = function (node) { return node.tagName === 'CANVAS'; };
    var isVideoElement = function (node) { return node.tagName === 'VIDEO'; };
    var isImageElement = function (node) { return node.tagName === 'IMG'; };
    var isIFrameElement = function (node) { return node.tagName === 'IFRAME'; };
    var isStyleElement = function (node) { return node.tagName === 'STYLE'; };
    var isScriptElement = function (node) { return node.tagName === 'SCRIPT'; };
    var isTextareaElement = function (node) { return node.tagName === 'TEXTAREA'; };
    var isSelectElement = function (node) { return node.tagName === 'SELECT'; };
    var isSlotElement = function (node) { return node.tagName === 'SLOT'; };
    // https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name
    var isCustomElement = function (node) { return node.tagName.indexOf('-') > 0; };

    var CounterState = /** @class */ (function () {
        function CounterState() {
            this.counters = {};
        }
        CounterState.prototype.getCounterValue = function (name) {
            var counter = this.counters[name];
            if (counter && counter.length) {
                return counter[counter.length - 1];
            }
            return 1;
        };
        CounterState.prototype.getCounterValues = function (name) {
            var counter = this.counters[name];
            return counter ? counter : [];
        };
        CounterState.prototype.pop = function (counters) {
            var _this = this;
            counters.forEach(function (counter) { return _this.counters[counter].pop(); });
        };
        CounterState.prototype.parse = function (style) {
            var _this = this;
            var counterIncrement = style.counterIncrement;
            var counterReset = style.counterReset;
            var canReset = true;
            if (counterIncrement !== null) {
                counterIncrement.forEach(function (entry) {
                    var counter = _this.counters[entry.counter];
                    if (counter && entry.increment !== 0) {
                        canReset = false;
                        if (!counter.length) {
                            counter.push(1);
                        }
                        counter[Math.max(0, counter.length - 1)] += entry.increment;
                    }
                });
            }
            var counterNames = [];
            if (canReset) {
                counterReset.forEach(function (entry) {
                    var counter = _this.counters[entry.counter];
                    counterNames.push(entry.counter);
                    if (!counter) {
                        counter = _this.counters[entry.counter] = [];
                    }
                    counter.push(entry.reset);
                });
            }
            return counterNames;
        };
        return CounterState;
    }());
    var ROMAN_UPPER = {
        integers: [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        values: ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
    };
    var ARMENIAN = {
        integers: [
            9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70,
            60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
        ],
        values: [
            'Ք',
            'Փ',
            'Ւ',
            'Ց',
            'Ր',
            'Տ',
            'Վ',
            'Ս',
            'Ռ',
            'Ջ',
            'Պ',
            'Չ',
            'Ո',
            'Շ',
            'Ն',
            'Յ',
            'Մ',
            'Ճ',
            'Ղ',
            'Ձ',
            'Հ',
            'Կ',
            'Ծ',
            'Խ',
            'Լ',
            'Ի',
            'Ժ',
            'Թ',
            'Ը',
            'Է',
            'Զ',
            'Ե',
            'Դ',
            'Գ',
            'Բ',
            'Ա'
        ]
    };
    var HEBREW = {
        integers: [
            10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20,
            19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
        ],
        values: [
            'י׳',
            'ט׳',
            'ח׳',
            'ז׳',
            'ו׳',
            'ה׳',
            'ד׳',
            'ג׳',
            'ב׳',
            'א׳',
            'ת',
            'ש',
            'ר',
            'ק',
            'צ',
            'פ',
            'ע',
            'ס',
            'נ',
            'מ',
            'ל',
            'כ',
            'יט',
            'יח',
            'יז',
            'טז',
            'טו',
            'י',
            'ט',
            'ח',
            'ז',
            'ו',
            'ה',
            'ד',
            'ג',
            'ב',
            'א'
        ]
    };
    var GEORGIAN = {
        integers: [
            10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90,
            80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
        ],
        values: [
            'ჵ',
            'ჰ',
            'ჯ',
            'ჴ',
            'ხ',
            'ჭ',
            'წ',
            'ძ',
            'ც',
            'ჩ',
            'შ',
            'ყ',
            'ღ',
            'ქ',
            'ფ',
            'ჳ',
            'ტ',
            'ს',
            'რ',
            'ჟ',
            'პ',
            'ო',
            'ჲ',
            'ნ',
            'მ',
            'ლ',
            'კ',
            'ი',
            'თ',
            'ჱ',
            'ზ',
            'ვ',
            'ე',
            'დ',
            'გ',
            'ბ',
            'ა'
        ]
    };
    var createAdditiveCounter = function (value, min, max, symbols, fallback, suffix) {
        if (value < min || value > max) {
            return createCounterText(value, fallback, suffix.length > 0);
        }
        return (symbols.integers.reduce(function (string, integer, index) {
            while (value >= integer) {
                value -= integer;
                string += symbols.values[index];
            }
            return string;
        }, '') + suffix);
    };
    var createCounterStyleWithSymbolResolver = function (value, codePointRangeLength, isNumeric, resolver) {
        var string = '';
        do {
            if (!isNumeric) {
                value--;
            }
            string = resolver(value) + string;
            value /= codePointRangeLength;
        } while (value * codePointRangeLength >= codePointRangeLength);
        return string;
    };
    var createCounterStyleFromRange = function (value, codePointRangeStart, codePointRangeEnd, isNumeric, suffix) {
        var codePointRangeLength = codePointRangeEnd - codePointRangeStart + 1;
        return ((value < 0 ? '-' : '') +
            (createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, isNumeric, function (codePoint) {
                return fromCodePoint$1(Math.floor(codePoint % codePointRangeLength) + codePointRangeStart);
            }) +
                suffix));
    };
    var createCounterStyleFromSymbols = function (value, symbols, suffix) {
        if (suffix === void 0) { suffix = '. '; }
        var codePointRangeLength = symbols.length;
        return (createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, false, function (codePoint) { return symbols[Math.floor(codePoint % codePointRangeLength)]; }) + suffix);
    };
    var CJK_ZEROS = 1 << 0;
    var CJK_TEN_COEFFICIENTS = 1 << 1;
    var CJK_TEN_HIGH_COEFFICIENTS = 1 << 2;
    var CJK_HUNDRED_COEFFICIENTS = 1 << 3;
    var createCJKCounter = function (value, numbers, multipliers, negativeSign, suffix, flags) {
        if (value < -9999 || value > 9999) {
            return createCounterText(value, 4 /* CJK_DECIMAL */, suffix.length > 0);
        }
        var tmp = Math.abs(value);
        var string = suffix;
        if (tmp === 0) {
            return numbers[0] + string;
        }
        for (var digit = 0; tmp > 0 && digit <= 4; digit++) {
            var coefficient = tmp % 10;
            if (coefficient === 0 && contains(flags, CJK_ZEROS) && string !== '') {
                string = numbers[coefficient] + string;
            }
            else if (coefficient > 1 ||
                (coefficient === 1 && digit === 0) ||
                (coefficient === 1 && digit === 1 && contains(flags, CJK_TEN_COEFFICIENTS)) ||
                (coefficient === 1 && digit === 1 && contains(flags, CJK_TEN_HIGH_COEFFICIENTS) && value > 100) ||
                (coefficient === 1 && digit > 1 && contains(flags, CJK_HUNDRED_COEFFICIENTS))) {
                string = numbers[coefficient] + (digit > 0 ? multipliers[digit - 1] : '') + string;
            }
            else if (coefficient === 1 && digit > 0) {
                string = multipliers[digit - 1] + string;
            }
            tmp = Math.floor(tmp / 10);
        }
        return (value < 0 ? negativeSign : '') + string;
    };
    var CHINESE_INFORMAL_MULTIPLIERS = '十百千萬';
    var CHINESE_FORMAL_MULTIPLIERS = '拾佰仟萬';
    var JAPANESE_NEGATIVE = 'マイナス';
    var KOREAN_NEGATIVE = '마이너스';
    var createCounterText = function (value, type, appendSuffix) {
        var defaultSuffix = appendSuffix ? '. ' : '';
        var cjkSuffix = appendSuffix ? '、' : '';
        var koreanSuffix = appendSuffix ? ', ' : '';
        var spaceSuffix = appendSuffix ? ' ' : '';
        switch (type) {
            case 0 /* DISC */:
                return '•' + spaceSuffix;
            case 1 /* CIRCLE */:
                return '◦' + spaceSuffix;
            case 2 /* SQUARE */:
                return '◾' + spaceSuffix;
            case 5 /* DECIMAL_LEADING_ZERO */:
                var string = createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
                return string.length < 4 ? "0" + string : string;
            case 4 /* CJK_DECIMAL */:
                return createCounterStyleFromSymbols(value, '〇一二三四五六七八九', cjkSuffix);
            case 6 /* LOWER_ROMAN */:
                return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, 3 /* DECIMAL */, defaultSuffix).toLowerCase();
            case 7 /* UPPER_ROMAN */:
                return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, 3 /* DECIMAL */, defaultSuffix);
            case 8 /* LOWER_GREEK */:
                return createCounterStyleFromRange(value, 945, 969, false, defaultSuffix);
            case 9 /* LOWER_ALPHA */:
                return createCounterStyleFromRange(value, 97, 122, false, defaultSuffix);
            case 10 /* UPPER_ALPHA */:
                return createCounterStyleFromRange(value, 65, 90, false, defaultSuffix);
            case 11 /* ARABIC_INDIC */:
                return createCounterStyleFromRange(value, 1632, 1641, true, defaultSuffix);
            case 12 /* ARMENIAN */:
            case 49 /* UPPER_ARMENIAN */:
                return createAdditiveCounter(value, 1, 9999, ARMENIAN, 3 /* DECIMAL */, defaultSuffix);
            case 35 /* LOWER_ARMENIAN */:
                return createAdditiveCounter(value, 1, 9999, ARMENIAN, 3 /* DECIMAL */, defaultSuffix).toLowerCase();
            case 13 /* BENGALI */:
                return createCounterStyleFromRange(value, 2534, 2543, true, defaultSuffix);
            case 14 /* CAMBODIAN */:
            case 30 /* KHMER */:
                return createCounterStyleFromRange(value, 6112, 6121, true, defaultSuffix);
            case 15 /* CJK_EARTHLY_BRANCH */:
                return createCounterStyleFromSymbols(value, '子丑寅卯辰巳午未申酉戌亥', cjkSuffix);
            case 16 /* CJK_HEAVENLY_STEM */:
                return createCounterStyleFromSymbols(value, '甲乙丙丁戊己庚辛壬癸', cjkSuffix);
            case 17 /* CJK_IDEOGRAPHIC */:
            case 48 /* TRAD_CHINESE_INFORMAL */:
                return createCJKCounter(value, '零一二三四五六七八九', CHINESE_INFORMAL_MULTIPLIERS, '負', cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
            case 47 /* TRAD_CHINESE_FORMAL */:
                return createCJKCounter(value, '零壹貳參肆伍陸柒捌玖', CHINESE_FORMAL_MULTIPLIERS, '負', cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
            case 42 /* SIMP_CHINESE_INFORMAL */:
                return createCJKCounter(value, '零一二三四五六七八九', CHINESE_INFORMAL_MULTIPLIERS, '负', cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
            case 41 /* SIMP_CHINESE_FORMAL */:
                return createCJKCounter(value, '零壹贰叁肆伍陆柒捌玖', CHINESE_FORMAL_MULTIPLIERS, '负', cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
            case 26 /* JAPANESE_INFORMAL */:
                return createCJKCounter(value, '〇一二三四五六七八九', '十百千万', JAPANESE_NEGATIVE, cjkSuffix, 0);
            case 25 /* JAPANESE_FORMAL */:
                return createCJKCounter(value, '零壱弐参四伍六七八九', '拾百千万', JAPANESE_NEGATIVE, cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
            case 31 /* KOREAN_HANGUL_FORMAL */:
                return createCJKCounter(value, '영일이삼사오육칠팔구', '십백천만', KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
            case 33 /* KOREAN_HANJA_INFORMAL */:
                return createCJKCounter(value, '零一二三四五六七八九', '十百千萬', KOREAN_NEGATIVE, koreanSuffix, 0);
            case 32 /* KOREAN_HANJA_FORMAL */:
                return createCJKCounter(value, '零壹貳參四五六七八九', '拾百千', KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
            case 18 /* DEVANAGARI */:
                return createCounterStyleFromRange(value, 0x966, 0x96f, true, defaultSuffix);
            case 20 /* GEORGIAN */:
                return createAdditiveCounter(value, 1, 19999, GEORGIAN, 3 /* DECIMAL */, defaultSuffix);
            case 21 /* GUJARATI */:
                return createCounterStyleFromRange(value, 0xae6, 0xaef, true, defaultSuffix);
            case 22 /* GURMUKHI */:
                return createCounterStyleFromRange(value, 0xa66, 0xa6f, true, defaultSuffix);
            case 22 /* HEBREW */:
                return createAdditiveCounter(value, 1, 10999, HEBREW, 3 /* DECIMAL */, defaultSuffix);
            case 23 /* HIRAGANA */:
                return createCounterStyleFromSymbols(value, 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん');
            case 24 /* HIRAGANA_IROHA */:
                return createCounterStyleFromSymbols(value, 'いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす');
            case 27 /* KANNADA */:
                return createCounterStyleFromRange(value, 0xce6, 0xcef, true, defaultSuffix);
            case 28 /* KATAKANA */:
                return createCounterStyleFromSymbols(value, 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン', cjkSuffix);
            case 29 /* KATAKANA_IROHA */:
                return createCounterStyleFromSymbols(value, 'イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス', cjkSuffix);
            case 34 /* LAO */:
                return createCounterStyleFromRange(value, 0xed0, 0xed9, true, defaultSuffix);
            case 37 /* MONGOLIAN */:
                return createCounterStyleFromRange(value, 0x1810, 0x1819, true, defaultSuffix);
            case 38 /* MYANMAR */:
                return createCounterStyleFromRange(value, 0x1040, 0x1049, true, defaultSuffix);
            case 39 /* ORIYA */:
                return createCounterStyleFromRange(value, 0xb66, 0xb6f, true, defaultSuffix);
            case 40 /* PERSIAN */:
                return createCounterStyleFromRange(value, 0x6f0, 0x6f9, true, defaultSuffix);
            case 43 /* TAMIL */:
                return createCounterStyleFromRange(value, 0xbe6, 0xbef, true, defaultSuffix);
            case 44 /* TELUGU */:
                return createCounterStyleFromRange(value, 0xc66, 0xc6f, true, defaultSuffix);
            case 45 /* THAI */:
                return createCounterStyleFromRange(value, 0xe50, 0xe59, true, defaultSuffix);
            case 46 /* TIBETAN */:
                return createCounterStyleFromRange(value, 0xf20, 0xf29, true, defaultSuffix);
            case 3 /* DECIMAL */:
            default:
                return createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
        }
    };

    var IGNORE_ATTRIBUTE = 'data-html2canvas-ignore';
    var DocumentCloner = /** @class */ (function () {
        function DocumentCloner(context, element, options) {
            this.context = context;
            this.options = options;
            this.scrolledElements = [];
            this.referenceElement = element;
            this.counters = new CounterState();
            this.quoteDepth = 0;
            if (!element.ownerDocument) {
                throw new Error('Cloned element does not have an owner document');
            }
            this.documentElement = this.cloneNode(element.ownerDocument.documentElement, false);
        }
        DocumentCloner.prototype.toIFrame = function (ownerDocument, windowSize) {
            var _this = this;
            var iframe = createIFrameContainer(ownerDocument, windowSize);
            if (!iframe.contentWindow) {
                return Promise.reject("Unable to find iframe window");
            }
            var scrollX = ownerDocument.defaultView.pageXOffset;
            var scrollY = ownerDocument.defaultView.pageYOffset;
            var cloneWindow = iframe.contentWindow;
            var documentClone = cloneWindow.document;
            /* Chrome doesn't detect relative background-images assigned in inline <style> sheets when fetched through getComputedStyle
             if window url is about:blank, we can assign the url to current by writing onto the document
             */
            var iframeLoad = iframeLoader(iframe).then(function () { return __awaiter(_this, void 0, void 0, function () {
                var onclone, referenceElement;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.scrolledElements.forEach(restoreNodeScroll);
                            if (cloneWindow) {
                                cloneWindow.scrollTo(windowSize.left, windowSize.top);
                                if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent) &&
                                    (cloneWindow.scrollY !== windowSize.top || cloneWindow.scrollX !== windowSize.left)) {
                                    this.context.logger.warn('Unable to restore scroll position for cloned document');
                                    this.context.windowBounds = this.context.windowBounds.add(cloneWindow.scrollX - windowSize.left, cloneWindow.scrollY - windowSize.top, 0, 0);
                                }
                            }
                            onclone = this.options.onclone;
                            referenceElement = this.clonedReferenceElement;
                            if (typeof referenceElement === 'undefined') {
                                return [2 /*return*/, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")];
                            }
                            if (!(documentClone.fonts && documentClone.fonts.ready)) return [3 /*break*/, 2];
                            return [4 /*yield*/, documentClone.fonts.ready];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2:
                            if (!/(AppleWebKit)/g.test(navigator.userAgent)) return [3 /*break*/, 4];
                            return [4 /*yield*/, imagesReady(documentClone)];
                        case 3:
                            _a.sent();
                            _a.label = 4;
                        case 4:
                            if (typeof onclone === 'function') {
                                return [2 /*return*/, Promise.resolve()
                                        .then(function () { return onclone(documentClone, referenceElement); })
                                        .then(function () { return iframe; })];
                            }
                            return [2 /*return*/, iframe];
                    }
                });
            }); });
            documentClone.open();
            documentClone.write(serializeDoctype(document.doctype) + "<html></html>");
            // Chrome scrolls the parent document for some reason after the write to the cloned window???
            restoreOwnerScroll(this.referenceElement.ownerDocument, scrollX, scrollY);
            documentClone.replaceChild(documentClone.adoptNode(this.documentElement), documentClone.documentElement);
            documentClone.close();
            return iframeLoad;
        };
        DocumentCloner.prototype.createElementClone = function (node) {
            if (isDebugging(node, 2 /* CLONE */)) {
                debugger;
            }
            if (isCanvasElement(node)) {
                return this.createCanvasClone(node);
            }
            if (isVideoElement(node)) {
                return this.createVideoClone(node);
            }
            if (isStyleElement(node)) {
                return this.createStyleClone(node);
            }
            var clone = node.cloneNode(false);
            if (isImageElement(clone)) {
                if (isImageElement(node) && node.currentSrc && node.currentSrc !== node.src) {
                    clone.src = node.currentSrc;
                    clone.srcset = '';
                }
                if (clone.loading === 'lazy') {
                    clone.loading = 'eager';
                }
            }
            if (isCustomElement(clone)) {
                return this.createCustomElementClone(clone);
            }
            return clone;
        };
        DocumentCloner.prototype.createCustomElementClone = function (node) {
            var clone = document.createElement('html2canvascustomelement');
            copyCSSStyles(node.style, clone);
            return clone;
        };
        DocumentCloner.prototype.createStyleClone = function (node) {
            try {
                var sheet = node.sheet;
                if (sheet && sheet.cssRules) {
                    var css = [].slice.call(sheet.cssRules, 0).reduce(function (css, rule) {
                        if (rule && typeof rule.cssText === 'string') {
                            return css + rule.cssText;
                        }
                        return css;
                    }, '');
                    var style = node.cloneNode(false);
                    style.textContent = css;
                    return style;
                }
            }
            catch (e) {
                // accessing node.sheet.cssRules throws a DOMException
                this.context.logger.error('Unable to access cssRules property', e);
                if (e.name !== 'SecurityError') {
                    throw e;
                }
            }
            return node.cloneNode(false);
        };
        DocumentCloner.prototype.createCanvasClone = function (canvas) {
            var _a;
            if (this.options.inlineImages && canvas.ownerDocument) {
                var img = canvas.ownerDocument.createElement('img');
                try {
                    img.src = canvas.toDataURL();
                    return img;
                }
                catch (e) {
                    this.context.logger.info("Unable to inline canvas contents, canvas is tainted", canvas);
                }
            }
            var clonedCanvas = canvas.cloneNode(false);
            try {
                clonedCanvas.width = canvas.width;
                clonedCanvas.height = canvas.height;
                var ctx = canvas.getContext('2d');
                var clonedCtx = clonedCanvas.getContext('2d');
                if (clonedCtx) {
                    if (!this.options.allowTaint && ctx) {
                        clonedCtx.putImageData(ctx.getImageData(0, 0, canvas.width, canvas.height), 0, 0);
                    }
                    else {
                        var gl = (_a = canvas.getContext('webgl2')) !== null && _a !== void 0 ? _a : canvas.getContext('webgl');
                        if (gl) {
                            var attribs = gl.getContextAttributes();
                            if ((attribs === null || attribs === void 0 ? void 0 : attribs.preserveDrawingBuffer) === false) {
                                this.context.logger.warn('Unable to clone WebGL context as it has preserveDrawingBuffer=false', canvas);
                            }
                        }
                        clonedCtx.drawImage(canvas, 0, 0);
                    }
                }
                return clonedCanvas;
            }
            catch (e) {
                this.context.logger.info("Unable to clone canvas as it is tainted", canvas);
            }
            return clonedCanvas;
        };
        DocumentCloner.prototype.createVideoClone = function (video) {
            var canvas = video.ownerDocument.createElement('canvas');
            canvas.width = video.offsetWidth;
            canvas.height = video.offsetHeight;
            var ctx = canvas.getContext('2d');
            try {
                if (ctx) {
                    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                    if (!this.options.allowTaint) {
                        ctx.getImageData(0, 0, canvas.width, canvas.height);
                    }
                }
                return canvas;
            }
            catch (e) {
                this.context.logger.info("Unable to clone video as it is tainted", video);
            }
            var blankCanvas = video.ownerDocument.createElement('canvas');
            blankCanvas.width = video.offsetWidth;
            blankCanvas.height = video.offsetHeight;
            return blankCanvas;
        };
        DocumentCloner.prototype.appendChildNode = function (clone, child, copyStyles) {
            if (!isElementNode(child) ||
                (!isScriptElement(child) &&
                    !child.hasAttribute(IGNORE_ATTRIBUTE) &&
                    (typeof this.options.ignoreElements !== 'function' || !this.options.ignoreElements(child)))) {
                if (!this.options.copyStyles || !isElementNode(child) || !isStyleElement(child)) {
                    clone.appendChild(this.cloneNode(child, copyStyles));
                }
            }
        };
        DocumentCloner.prototype.cloneChildNodes = function (node, clone, copyStyles) {
            var _this = this;
            for (var child = node.shadowRoot ? node.shadowRoot.firstChild : node.firstChild; child; child = child.nextSibling) {
                if (isElementNode(child) && isSlotElement(child) && typeof child.assignedNodes === 'function') {
                    var assignedNodes = child.assignedNodes();
                    if (assignedNodes.length) {
                        assignedNodes.forEach(function (assignedNode) { return _this.appendChildNode(clone, assignedNode, copyStyles); });
                    }
                }
                else {
                    this.appendChildNode(clone, child, copyStyles);
                }
            }
        };
        DocumentCloner.prototype.cloneNode = function (node, copyStyles) {
            if (isTextNode(node)) {
                return document.createTextNode(node.data);
            }
            if (!node.ownerDocument) {
                return node.cloneNode(false);
            }
            var window = node.ownerDocument.defaultView;
            if (window && isElementNode(node) && (isHTMLElementNode(node) || isSVGElementNode(node))) {
                var clone = this.createElementClone(node);
                clone.style.transitionProperty = 'none';
                var style = window.getComputedStyle(node);
                var styleBefore = window.getComputedStyle(node, ':before');
                var styleAfter = window.getComputedStyle(node, ':after');
                if (this.referenceElement === node && isHTMLElementNode(clone)) {
                    this.clonedReferenceElement = clone;
                }
                if (isBodyElement(clone)) {
                    createPseudoHideStyles(clone);
                }
                var counters = this.counters.parse(new CSSParsedCounterDeclaration(this.context, style));
                var before = this.resolvePseudoContent(node, clone, styleBefore, PseudoElementType.BEFORE);
                if (isCustomElement(node)) {
                    copyStyles = true;
                }
                if (!isVideoElement(node)) {
                    this.cloneChildNodes(node, clone, copyStyles);
                }
                if (before) {
                    clone.insertBefore(before, clone.firstChild);
                }
                var after = this.resolvePseudoContent(node, clone, styleAfter, PseudoElementType.AFTER);
                if (after) {
                    clone.appendChild(after);
                }
                this.counters.pop(counters);
                if ((style && (this.options.copyStyles || isSVGElementNode(node)) && !isIFrameElement(node)) ||
                    copyStyles) {
                    copyCSSStyles(style, clone);
                }
                if (node.scrollTop !== 0 || node.scrollLeft !== 0) {
                    this.scrolledElements.push([clone, node.scrollLeft, node.scrollTop]);
                }
                if ((isTextareaElement(node) || isSelectElement(node)) &&
                    (isTextareaElement(clone) || isSelectElement(clone))) {
                    clone.value = node.value;
                }
                return clone;
            }
            return node.cloneNode(false);
        };
        DocumentCloner.prototype.resolvePseudoContent = function (node, clone, style, pseudoElt) {
            var _this = this;
            if (!style) {
                return;
            }
            var value = style.content;
            var document = clone.ownerDocument;
            if (!document || !value || value === 'none' || value === '-moz-alt-content' || style.display === 'none') {
                return;
            }
            this.counters.parse(new CSSParsedCounterDeclaration(this.context, style));
            var declaration = new CSSParsedPseudoDeclaration(this.context, style);
            var anonymousReplacedElement = document.createElement('html2canvaspseudoelement');
            copyCSSStyles(style, anonymousReplacedElement);
            declaration.content.forEach(function (token) {
                if (token.type === 0 /* STRING_TOKEN */) {
                    anonymousReplacedElement.appendChild(document.createTextNode(token.value));
                }
                else if (token.type === 22 /* URL_TOKEN */) {
                    var img = document.createElement('img');
                    img.src = token.value;
                    img.style.opacity = '1';
                    anonymousReplacedElement.appendChild(img);
                }
                else if (token.type === 18 /* FUNCTION */) {
                    if (token.name === 'attr') {
                        var attr = token.values.filter(isIdentToken);
                        if (attr.length) {
                            anonymousReplacedElement.appendChild(document.createTextNode(node.getAttribute(attr[0].value) || ''));
                        }
                    }
                    else if (token.name === 'counter') {
                        var _a = token.values.filter(nonFunctionArgSeparator), counter = _a[0], counterStyle = _a[1];
                        if (counter && isIdentToken(counter)) {
                            var counterState = _this.counters.getCounterValue(counter.value);
                            var counterType = counterStyle && isIdentToken(counterStyle)
                                ? listStyleType.parse(_this.context, counterStyle.value)
                                : 3 /* DECIMAL */;
                            anonymousReplacedElement.appendChild(document.createTextNode(createCounterText(counterState, counterType, false)));
                        }
                    }
                    else if (token.name === 'counters') {
                        var _b = token.values.filter(nonFunctionArgSeparator), counter = _b[0], delim = _b[1], counterStyle = _b[2];
                        if (counter && isIdentToken(counter)) {
                            var counterStates = _this.counters.getCounterValues(counter.value);
                            var counterType_1 = counterStyle && isIdentToken(counterStyle)
                                ? listStyleType.parse(_this.context, counterStyle.value)
                                : 3 /* DECIMAL */;
                            var separator = delim && delim.type === 0 /* STRING_TOKEN */ ? delim.value : '';
                            var text = counterStates
                                .map(function (value) { return createCounterText(value, counterType_1, false); })
                                .join(separator);
                            anonymousReplacedElement.appendChild(document.createTextNode(text));
                        }
                    }
                    else ;
                }
                else if (token.type === 20 /* IDENT_TOKEN */) {
                    switch (token.value) {
                        case 'open-quote':
                            anonymousReplacedElement.appendChild(document.createTextNode(getQuote(declaration.quotes, _this.quoteDepth++, true)));
                            break;
                        case 'close-quote':
                            anonymousReplacedElement.appendChild(document.createTextNode(getQuote(declaration.quotes, --_this.quoteDepth, false)));
                            break;
                        default:
                            // safari doesn't parse string tokens correctly because of lack of quotes
                            anonymousReplacedElement.appendChild(document.createTextNode(token.value));
                    }
                }
            });
            anonymousReplacedElement.className = PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + " " + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
            var newClassName = pseudoElt === PseudoElementType.BEFORE
                ? " " + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE
                : " " + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
            if (isSVGElementNode(clone)) {
                clone.className.baseValue += newClassName;
            }
            else {
                clone.className += newClassName;
            }
            return anonymousReplacedElement;
        };
        DocumentCloner.destroy = function (container) {
            if (container.parentNode) {
                container.parentNode.removeChild(container);
                return true;
            }
            return false;
        };
        return DocumentCloner;
    }());
    var PseudoElementType;
    (function (PseudoElementType) {
        PseudoElementType[PseudoElementType["BEFORE"] = 0] = "BEFORE";
        PseudoElementType[PseudoElementType["AFTER"] = 1] = "AFTER";
    })(PseudoElementType || (PseudoElementType = {}));
    var createIFrameContainer = function (ownerDocument, bounds) {
        var cloneIframeContainer = ownerDocument.createElement('iframe');
        cloneIframeContainer.className = 'html2canvas-container';
        cloneIframeContainer.style.visibility = 'hidden';
        cloneIframeContainer.style.position = 'fixed';
        cloneIframeContainer.style.left = '-10000px';
        cloneIframeContainer.style.top = '0px';
        cloneIframeContainer.style.border = '0';
        cloneIframeContainer.width = bounds.width.toString();
        cloneIframeContainer.height = bounds.height.toString();
        cloneIframeContainer.scrolling = 'no'; // ios won't scroll without it
        cloneIframeContainer.setAttribute(IGNORE_ATTRIBUTE, 'true');
        ownerDocument.body.appendChild(cloneIframeContainer);
        return cloneIframeContainer;
    };
    var imageReady = function (img) {
        return new Promise(function (resolve) {
            if (img.complete) {
                resolve();
                return;
            }
            if (!img.src) {
                resolve();
                return;
            }
            img.onload = resolve;
            img.onerror = resolve;
        });
    };
    var imagesReady = function (document) {
        return Promise.all([].slice.call(document.images, 0).map(imageReady));
    };
    var iframeLoader = function (iframe) {
        return new Promise(function (resolve, reject) {
            var cloneWindow = iframe.contentWindow;
            if (!cloneWindow) {
                return reject("No window assigned for iframe");
            }
            var documentClone = cloneWindow.document;
            cloneWindow.onload = iframe.onload = function () {
                cloneWindow.onload = iframe.onload = null;
                var interval = setInterval(function () {
                    if (documentClone.body.childNodes.length > 0 && documentClone.readyState === 'complete') {
                        clearInterval(interval);
                        resolve(iframe);
                    }
                }, 50);
            };
        });
    };
    var ignoredStyleProperties = [
        'all',
        'd',
        'content' // Safari shows pseudoelements if content is set
    ];
    var copyCSSStyles = function (style, target) {
        // Edge does not provide value for cssText
        for (var i = style.length - 1; i >= 0; i--) {
            var property = style.item(i);
            if (ignoredStyleProperties.indexOf(property) === -1) {
                target.style.setProperty(property, style.getPropertyValue(property));
            }
        }
        return target;
    };
    var serializeDoctype = function (doctype) {
        var str = '';
        if (doctype) {
            str += '<!DOCTYPE ';
            if (doctype.name) {
                str += doctype.name;
            }
            if (doctype.internalSubset) {
                str += doctype.internalSubset;
            }
            if (doctype.publicId) {
                str += "\"" + doctype.publicId + "\"";
            }
            if (doctype.systemId) {
                str += "\"" + doctype.systemId + "\"";
            }
            str += '>';
        }
        return str;
    };
    var restoreOwnerScroll = function (ownerDocument, x, y) {
        if (ownerDocument &&
            ownerDocument.defaultView &&
            (x !== ownerDocument.defaultView.pageXOffset || y !== ownerDocument.defaultView.pageYOffset)) {
            ownerDocument.defaultView.scrollTo(x, y);
        }
    };
    var restoreNodeScroll = function (_a) {
        var element = _a[0], x = _a[1], y = _a[2];
        element.scrollLeft = x;
        element.scrollTop = y;
    };
    var PSEUDO_BEFORE = ':before';
    var PSEUDO_AFTER = ':after';
    var PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = '___html2canvas___pseudoelement_before';
    var PSEUDO_HIDE_ELEMENT_CLASS_AFTER = '___html2canvas___pseudoelement_after';
    var PSEUDO_HIDE_ELEMENT_STYLE = "{\n    content: \"\" !important;\n    display: none !important;\n}";
    var createPseudoHideStyles = function (body) {
        createStyles(body, "." + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + PSEUDO_BEFORE + PSEUDO_HIDE_ELEMENT_STYLE + "\n         ." + PSEUDO_HIDE_ELEMENT_CLASS_AFTER + PSEUDO_AFTER + PSEUDO_HIDE_ELEMENT_STYLE);
    };
    var createStyles = function (body, styles) {
        var document = body.ownerDocument;
        if (document) {
            var style = document.createElement('style');
            style.textContent = styles;
            body.appendChild(style);
        }
    };

    var CacheStorage = /** @class */ (function () {
        function CacheStorage() {
        }
        CacheStorage.getOrigin = function (url) {
            var link = CacheStorage._link;
            if (!link) {
                return 'about:blank';
            }
            link.href = url;
            link.href = link.href; // IE9, LOL! - http://jsfiddle.net/niklasvh/2e48b/
            return link.protocol + link.hostname + link.port;
        };
        CacheStorage.isSameOrigin = function (src) {
            return CacheStorage.getOrigin(src) === CacheStorage._origin;
        };
        CacheStorage.setContext = function (window) {
            CacheStorage._link = window.document.createElement('a');
            CacheStorage._origin = CacheStorage.getOrigin(window.location.href);
        };
        CacheStorage._origin = 'about:blank';
        return CacheStorage;
    }());
    var Cache = /** @class */ (function () {
        function Cache(context, _options) {
            this.context = context;
            this._options = _options;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this._cache = {};
        }
        Cache.prototype.addImage = function (src) {
            var result = Promise.resolve();
            if (this.has(src)) {
                return result;
            }
            if (isBlobImage(src) || isRenderable(src)) {
                (this._cache[src] = this.loadImage(src)).catch(function () {
                    // prevent unhandled rejection
                });
                return result;
            }
            return result;
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Cache.prototype.match = function (src) {
            return this._cache[src];
        };
        Cache.prototype.loadImage = function (key) {
            return __awaiter(this, void 0, void 0, function () {
                var isSameOrigin, useCORS, useProxy, src;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            isSameOrigin = CacheStorage.isSameOrigin(key);
                            useCORS = !isInlineImage(key) && this._options.useCORS === true && FEATURES.SUPPORT_CORS_IMAGES && !isSameOrigin;
                            useProxy = !isInlineImage(key) &&
                                !isSameOrigin &&
                                !isBlobImage(key) &&
                                typeof this._options.proxy === 'string' &&
                                FEATURES.SUPPORT_CORS_XHR &&
                                !useCORS;
                            if (!isSameOrigin &&
                                this._options.allowTaint === false &&
                                !isInlineImage(key) &&
                                !isBlobImage(key) &&
                                !useProxy &&
                                !useCORS) {
                                return [2 /*return*/];
                            }
                            src = key;
                            if (!useProxy) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.proxy(src)];
                        case 1:
                            src = _a.sent();
                            _a.label = 2;
                        case 2:
                            this.context.logger.debug("Added image " + key.substring(0, 256));
                            return [4 /*yield*/, new Promise(function (resolve, reject) {
                                    var img = new Image();
                                    img.onload = function () { return resolve(img); };
                                    img.onerror = reject;
                                    //ios safari 10.3 taints canvas with data urls unless crossOrigin is set to anonymous
                                    if (isInlineBase64Image(src) || useCORS) {
                                        img.crossOrigin = 'anonymous';
                                    }
                                    img.src = src;
                                    if (img.complete === true) {
                                        // Inline XML images may fail to parse, throwing an Error later on
                                        setTimeout(function () { return resolve(img); }, 500);
                                    }
                                    if (_this._options.imageTimeout > 0) {
                                        setTimeout(function () { return reject("Timed out (" + _this._options.imageTimeout + "ms) loading image"); }, _this._options.imageTimeout);
                                    }
                                })];
                        case 3: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        Cache.prototype.has = function (key) {
            return typeof this._cache[key] !== 'undefined';
        };
        Cache.prototype.keys = function () {
            return Promise.resolve(Object.keys(this._cache));
        };
        Cache.prototype.proxy = function (src) {
            var _this = this;
            var proxy = this._options.proxy;
            if (!proxy) {
                throw new Error('No proxy defined');
            }
            var key = src.substring(0, 256);
            return new Promise(function (resolve, reject) {
                var responseType = FEATURES.SUPPORT_RESPONSE_TYPE ? 'blob' : 'text';
                var xhr = new XMLHttpRequest();
                xhr.onload = function () {
                    if (xhr.status === 200) {
                        if (responseType === 'text') {
                            resolve(xhr.response);
                        }
                        else {
                            var reader_1 = new FileReader();
                            reader_1.addEventListener('load', function () { return resolve(reader_1.result); }, false);
                            reader_1.addEventListener('error', function (e) { return reject(e); }, false);
                            reader_1.readAsDataURL(xhr.response);
                        }
                    }
                    else {
                        reject("Failed to proxy resource " + key + " with status code " + xhr.status);
                    }
                };
                xhr.onerror = reject;
                var queryString = proxy.indexOf('?') > -1 ? '&' : '?';
                xhr.open('GET', "" + proxy + queryString + "url=" + encodeURIComponent(src) + "&responseType=" + responseType);
                if (responseType !== 'text' && xhr instanceof XMLHttpRequest) {
                    xhr.responseType = responseType;
                }
                if (_this._options.imageTimeout) {
                    var timeout_1 = _this._options.imageTimeout;
                    xhr.timeout = timeout_1;
                    xhr.ontimeout = function () { return reject("Timed out (" + timeout_1 + "ms) proxying " + key); };
                }
                xhr.send();
            });
        };
        return Cache;
    }());
    var INLINE_SVG = /^data:image\/svg\+xml/i;
    var INLINE_BASE64 = /^data:image\/.*;base64,/i;
    var INLINE_IMG = /^data:image\/.*/i;
    var isRenderable = function (src) { return FEATURES.SUPPORT_SVG_DRAWING || !isSVG(src); };
    var isInlineImage = function (src) { return INLINE_IMG.test(src); };
    var isInlineBase64Image = function (src) { return INLINE_BASE64.test(src); };
    var isBlobImage = function (src) { return src.substr(0, 4) === 'blob'; };
    var isSVG = function (src) { return src.substr(-3).toLowerCase() === 'svg' || INLINE_SVG.test(src); };

    var Vector = /** @class */ (function () {
        function Vector(x, y) {
            this.type = 0 /* VECTOR */;
            this.x = x;
            this.y = y;
        }
        Vector.prototype.add = function (deltaX, deltaY) {
            return new Vector(this.x + deltaX, this.y + deltaY);
        };
        return Vector;
    }());

    var lerp = function (a, b, t) {
        return new Vector(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t);
    };
    var BezierCurve = /** @class */ (function () {
        function BezierCurve(start, startControl, endControl, end) {
            this.type = 1 /* BEZIER_CURVE */;
            this.start = start;
            this.startControl = startControl;
            this.endControl = endControl;
            this.end = end;
        }
        BezierCurve.prototype.subdivide = function (t, firstHalf) {
            var ab = lerp(this.start, this.startControl, t);
            var bc = lerp(this.startControl, this.endControl, t);
            var cd = lerp(this.endControl, this.end, t);
            var abbc = lerp(ab, bc, t);
            var bccd = lerp(bc, cd, t);
            var dest = lerp(abbc, bccd, t);
            return firstHalf ? new BezierCurve(this.start, ab, abbc, dest) : new BezierCurve(dest, bccd, cd, this.end);
        };
        BezierCurve.prototype.add = function (deltaX, deltaY) {
            return new BezierCurve(this.start.add(deltaX, deltaY), this.startControl.add(deltaX, deltaY), this.endControl.add(deltaX, deltaY), this.end.add(deltaX, deltaY));
        };
        BezierCurve.prototype.reverse = function () {
            return new BezierCurve(this.end, this.endControl, this.startControl, this.start);
        };
        return BezierCurve;
    }());
    var isBezierCurve = function (path) { return path.type === 1 /* BEZIER_CURVE */; };

    var BoundCurves = /** @class */ (function () {
        function BoundCurves(element) {
            var styles = element.styles;
            var bounds = element.bounds;
            var _a = getAbsoluteValueForTuple(styles.borderTopLeftRadius, bounds.width, bounds.height), tlh = _a[0], tlv = _a[1];
            var _b = getAbsoluteValueForTuple(styles.borderTopRightRadius, bounds.width, bounds.height), trh = _b[0], trv = _b[1];
            var _c = getAbsoluteValueForTuple(styles.borderBottomRightRadius, bounds.width, bounds.height), brh = _c[0], brv = _c[1];
            var _d = getAbsoluteValueForTuple(styles.borderBottomLeftRadius, bounds.width, bounds.height), blh = _d[0], blv = _d[1];
            var factors = [];
            factors.push((tlh + trh) / bounds.width);
            factors.push((blh + brh) / bounds.width);
            factors.push((tlv + blv) / bounds.height);
            factors.push((trv + brv) / bounds.height);
            var maxFactor = Math.max.apply(Math, factors);
            if (maxFactor > 1) {
                tlh /= maxFactor;
                tlv /= maxFactor;
                trh /= maxFactor;
                trv /= maxFactor;
                brh /= maxFactor;
                brv /= maxFactor;
                blh /= maxFactor;
                blv /= maxFactor;
            }
            var topWidth = bounds.width - trh;
            var rightHeight = bounds.height - brv;
            var bottomWidth = bounds.width - brh;
            var leftHeight = bounds.height - blv;
            var borderTopWidth = styles.borderTopWidth;
            var borderRightWidth = styles.borderRightWidth;
            var borderBottomWidth = styles.borderBottomWidth;
            var borderLeftWidth = styles.borderLeftWidth;
            var paddingTop = getAbsoluteValue(styles.paddingTop, element.bounds.width);
            var paddingRight = getAbsoluteValue(styles.paddingRight, element.bounds.width);
            var paddingBottom = getAbsoluteValue(styles.paddingBottom, element.bounds.width);
            var paddingLeft = getAbsoluteValue(styles.paddingLeft, element.bounds.width);
            this.topLeftBorderDoubleOuterBox =
                tlh > 0 || tlv > 0
                    ? getCurvePoints(bounds.left + borderLeftWidth / 3, bounds.top + borderTopWidth / 3, tlh - borderLeftWidth / 3, tlv - borderTopWidth / 3, CORNER.TOP_LEFT)
                    : new Vector(bounds.left + borderLeftWidth / 3, bounds.top + borderTopWidth / 3);
            this.topRightBorderDoubleOuterBox =
                tlh > 0 || tlv > 0
                    ? getCurvePoints(bounds.left + topWidth, bounds.top + borderTopWidth / 3, trh - borderRightWidth / 3, trv - borderTopWidth / 3, CORNER.TOP_RIGHT)
                    : new Vector(bounds.left + bounds.width - borderRightWidth / 3, bounds.top + borderTopWidth / 3);
            this.bottomRightBorderDoubleOuterBox =
                brh > 0 || brv > 0
                    ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh - borderRightWidth / 3, brv - borderBottomWidth / 3, CORNER.BOTTOM_RIGHT)
                    : new Vector(bounds.left + bounds.width - borderRightWidth / 3, bounds.top + bounds.height - borderBottomWidth / 3);
            this.bottomLeftBorderDoubleOuterBox =
                blh > 0 || blv > 0
                    ? getCurvePoints(bounds.left + borderLeftWidth / 3, bounds.top + leftHeight, blh - borderLeftWidth / 3, blv - borderBottomWidth / 3, CORNER.BOTTOM_LEFT)
                    : new Vector(bounds.left + borderLeftWidth / 3, bounds.top + bounds.height - borderBottomWidth / 3);
            this.topLeftBorderDoubleInnerBox =
                tlh > 0 || tlv > 0
                    ? getCurvePoints(bounds.left + (borderLeftWidth * 2) / 3, bounds.top + (borderTopWidth * 2) / 3, tlh - (borderLeftWidth * 2) / 3, tlv - (borderTopWidth * 2) / 3, CORNER.TOP_LEFT)
                    : new Vector(bounds.left + (borderLeftWidth * 2) / 3, bounds.top + (borderTopWidth * 2) / 3);
            this.topRightBorderDoubleInnerBox =
                tlh > 0 || tlv > 0
                    ? getCurvePoints(bounds.left + topWidth, bounds.top + (borderTopWidth * 2) / 3, trh - (borderRightWidth * 2) / 3, trv - (borderTopWidth * 2) / 3, CORNER.TOP_RIGHT)
                    : new Vector(bounds.left + bounds.width - (borderRightWidth * 2) / 3, bounds.top + (borderTopWidth * 2) / 3);
            this.bottomRightBorderDoubleInnerBox =
                brh > 0 || brv > 0
                    ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh - (borderRightWidth * 2) / 3, brv - (borderBottomWidth * 2) / 3, CORNER.BOTTOM_RIGHT)
                    : new Vector(bounds.left + bounds.width - (borderRightWidth * 2) / 3, bounds.top + bounds.height - (borderBottomWidth * 2) / 3);
            this.bottomLeftBorderDoubleInnerBox =
                blh > 0 || blv > 0
                    ? getCurvePoints(bounds.left + (borderLeftWidth * 2) / 3, bounds.top + leftHeight, blh - (borderLeftWidth * 2) / 3, blv - (borderBottomWidth * 2) / 3, CORNER.BOTTOM_LEFT)
                    : new Vector(bounds.left + (borderLeftWidth * 2) / 3, bounds.top + bounds.height - (borderBottomWidth * 2) / 3);
            this.topLeftBorderStroke =
                tlh > 0 || tlv > 0
                    ? getCurvePoints(bounds.left + borderLeftWidth / 2, bounds.top + borderTopWidth / 2, tlh - borderLeftWidth / 2, tlv - borderTopWidth / 2, CORNER.TOP_LEFT)
                    : new Vector(bounds.left + borderLeftWidth / 2, bounds.top + borderTopWidth / 2);
            this.topRightBorderStroke =
                tlh > 0 || tlv > 0
                    ? getCurvePoints(bounds.left + topWidth, bounds.top + borderTopWidth / 2, trh - borderRightWidth / 2, trv - borderTopWidth / 2, CORNER.TOP_RIGHT)
                    : new Vector(bounds.left + bounds.width - borderRightWidth / 2, bounds.top + borderTopWidth / 2);
            this.bottomRightBorderStroke =
                brh > 0 || brv > 0
                    ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh - borderRightWidth / 2, brv - borderBottomWidth / 2, CORNER.BOTTOM_RIGHT)
                    : new Vector(bounds.left + bounds.width - borderRightWidth / 2, bounds.top + bounds.height - borderBottomWidth / 2);
            this.bottomLeftBorderStroke =
                blh > 0 || blv > 0
                    ? getCurvePoints(bounds.left + borderLeftWidth / 2, bounds.top + leftHeight, blh - borderLeftWidth / 2, blv - borderBottomWidth / 2, CORNER.BOTTOM_LEFT)
                    : new Vector(bounds.left + borderLeftWidth / 2, bounds.top + bounds.height - borderBottomWidth / 2);
            this.topLeftBorderBox =
                tlh > 0 || tlv > 0
                    ? getCurvePoints(bounds.left, bounds.top, tlh, tlv, CORNER.TOP_LEFT)
                    : new Vector(bounds.left, bounds.top);
            this.topRightBorderBox =
                trh > 0 || trv > 0
                    ? getCurvePoints(bounds.left + topWidth, bounds.top, trh, trv, CORNER.TOP_RIGHT)
                    : new Vector(bounds.left + bounds.width, bounds.top);
            this.bottomRightBorderBox =
                brh > 0 || brv > 0
                    ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh, brv, CORNER.BOTTOM_RIGHT)
                    : new Vector(bounds.left + bounds.width, bounds.top + bounds.height);
            this.bottomLeftBorderBox =
                blh > 0 || blv > 0
                    ? getCurvePoints(bounds.left, bounds.top + leftHeight, blh, blv, CORNER.BOTTOM_LEFT)
                    : new Vector(bounds.left, bounds.top + bounds.height);
            this.topLeftPaddingBox =
                tlh > 0 || tlv > 0
                    ? getCurvePoints(bounds.left + borderLeftWidth, bounds.top + borderTopWidth, Math.max(0, tlh - borderLeftWidth), Math.max(0, tlv - borderTopWidth), CORNER.TOP_LEFT)
                    : new Vector(bounds.left + borderLeftWidth, bounds.top + borderTopWidth);
            this.topRightPaddingBox =
                trh > 0 || trv > 0
                    ? getCurvePoints(bounds.left + Math.min(topWidth, bounds.width - borderRightWidth), bounds.top + borderTopWidth, topWidth > bounds.width + borderRightWidth ? 0 : Math.max(0, trh - borderRightWidth), Math.max(0, trv - borderTopWidth), CORNER.TOP_RIGHT)
                    : new Vector(bounds.left + bounds.width - borderRightWidth, bounds.top + borderTopWidth);
            this.bottomRightPaddingBox =
                brh > 0 || brv > 0
                    ? getCurvePoints(bounds.left + Math.min(bottomWidth, bounds.width - borderLeftWidth), bounds.top + Math.min(rightHeight, bounds.height - borderBottomWidth), Math.max(0, brh - borderRightWidth), Math.max(0, brv - borderBottomWidth), CORNER.BOTTOM_RIGHT)
                    : new Vector(bounds.left + bounds.width - borderRightWidth, bounds.top + bounds.height - borderBottomWidth);
            this.bottomLeftPaddingBox =
                blh > 0 || blv > 0
                    ? getCurvePoints(bounds.left + borderLeftWidth, bounds.top + Math.min(leftHeight, bounds.height - borderBottomWidth), Math.max(0, blh - borderLeftWidth), Math.max(0, blv - borderBottomWidth), CORNER.BOTTOM_LEFT)
                    : new Vector(bounds.left + borderLeftWidth, bounds.top + bounds.height - borderBottomWidth);
            this.topLeftContentBox =
                tlh > 0 || tlv > 0
                    ? getCurvePoints(bounds.left + borderLeftWidth + paddingLeft, bounds.top + borderTopWidth + paddingTop, Math.max(0, tlh - (borderLeftWidth + paddingLeft)), Math.max(0, tlv - (borderTopWidth + paddingTop)), CORNER.TOP_LEFT)
                    : new Vector(bounds.left + borderLeftWidth + paddingLeft, bounds.top + borderTopWidth + paddingTop);
            this.topRightContentBox =
                trh > 0 || trv > 0
                    ? getCurvePoints(bounds.left + Math.min(topWidth, bounds.width + borderLeftWidth + paddingLeft), bounds.top + borderTopWidth + paddingTop, topWidth > bounds.width + borderLeftWidth + paddingLeft ? 0 : trh - borderLeftWidth + paddingLeft, trv - (borderTopWidth + paddingTop), CORNER.TOP_RIGHT)
                    : new Vector(bounds.left + bounds.width - (borderRightWidth + paddingRight), bounds.top + borderTopWidth + paddingTop);
            this.bottomRightContentBox =
                brh > 0 || brv > 0
                    ? getCurvePoints(bounds.left + Math.min(bottomWidth, bounds.width - (borderLeftWidth + paddingLeft)), bounds.top + Math.min(rightHeight, bounds.height + borderTopWidth + paddingTop), Math.max(0, brh - (borderRightWidth + paddingRight)), brv - (borderBottomWidth + paddingBottom), CORNER.BOTTOM_RIGHT)
                    : new Vector(bounds.left + bounds.width - (borderRightWidth + paddingRight), bounds.top + bounds.height - (borderBottomWidth + paddingBottom));
            this.bottomLeftContentBox =
                blh > 0 || blv > 0
                    ? getCurvePoints(bounds.left + borderLeftWidth + paddingLeft, bounds.top + leftHeight, Math.max(0, blh - (borderLeftWidth + paddingLeft)), blv - (borderBottomWidth + paddingBottom), CORNER.BOTTOM_LEFT)
                    : new Vector(bounds.left + borderLeftWidth + paddingLeft, bounds.top + bounds.height - (borderBottomWidth + paddingBottom));
        }
        return BoundCurves;
    }());
    var CORNER;
    (function (CORNER) {
        CORNER[CORNER["TOP_LEFT"] = 0] = "TOP_LEFT";
        CORNER[CORNER["TOP_RIGHT"] = 1] = "TOP_RIGHT";
        CORNER[CORNER["BOTTOM_RIGHT"] = 2] = "BOTTOM_RIGHT";
        CORNER[CORNER["BOTTOM_LEFT"] = 3] = "BOTTOM_LEFT";
    })(CORNER || (CORNER = {}));
    var getCurvePoints = function (x, y, r1, r2, position) {
        var kappa = 4 * ((Math.sqrt(2) - 1) / 3);
        var ox = r1 * kappa; // control point offset horizontal
        var oy = r2 * kappa; // control point offset vertical
        var xm = x + r1; // x-middle
        var ym = y + r2; // y-middle
        switch (position) {
            case CORNER.TOP_LEFT:
                return new BezierCurve(new Vector(x, ym), new Vector(x, ym - oy), new Vector(xm - ox, y), new Vector(xm, y));
            case CORNER.TOP_RIGHT:
                return new BezierCurve(new Vector(x, y), new Vector(x + ox, y), new Vector(xm, ym - oy), new Vector(xm, ym));
            case CORNER.BOTTOM_RIGHT:
                return new BezierCurve(new Vector(xm, y), new Vector(xm, y + oy), new Vector(x + ox, ym), new Vector(x, ym));
            case CORNER.BOTTOM_LEFT:
            default:
                return new BezierCurve(new Vector(xm, ym), new Vector(xm - ox, ym), new Vector(x, y + oy), new Vector(x, y));
        }
    };
    var calculateBorderBoxPath = function (curves) {
        return [curves.topLeftBorderBox, curves.topRightBorderBox, curves.bottomRightBorderBox, curves.bottomLeftBorderBox];
    };
    var calculateContentBoxPath = function (curves) {
        return [
            curves.topLeftContentBox,
            curves.topRightContentBox,
            curves.bottomRightContentBox,
            curves.bottomLeftContentBox
        ];
    };
    var calculatePaddingBoxPath = function (curves) {
        return [
            curves.topLeftPaddingBox,
            curves.topRightPaddingBox,
            curves.bottomRightPaddingBox,
            curves.bottomLeftPaddingBox
        ];
    };

    var TransformEffect = /** @class */ (function () {
        function TransformEffect(offsetX, offsetY, matrix) {
            this.offsetX = offsetX;
            this.offsetY = offsetY;
            this.matrix = matrix;
            this.type = 0 /* TRANSFORM */;
            this.target = 2 /* BACKGROUND_BORDERS */ | 4 /* CONTENT */;
        }
        return TransformEffect;
    }());
    var ClipEffect = /** @class */ (function () {
        function ClipEffect(path, target) {
            this.path = path;
            this.target = target;
            this.type = 1 /* CLIP */;
        }
        return ClipEffect;
    }());
    var OpacityEffect = /** @class */ (function () {
        function OpacityEffect(opacity) {
            this.opacity = opacity;
            this.type = 2 /* OPACITY */;
            this.target = 2 /* BACKGROUND_BORDERS */ | 4 /* CONTENT */;
        }
        return OpacityEffect;
    }());
    var isTransformEffect = function (effect) {
        return effect.type === 0 /* TRANSFORM */;
    };
    var isClipEffect = function (effect) { return effect.type === 1 /* CLIP */; };
    var isOpacityEffect = function (effect) { return effect.type === 2 /* OPACITY */; };

    var equalPath = function (a, b) {
        if (a.length === b.length) {
            return a.some(function (v, i) { return v === b[i]; });
        }
        return false;
    };
    var transformPath = function (path, deltaX, deltaY, deltaW, deltaH) {
        return path.map(function (point, index) {
            switch (index) {
                case 0:
                    return point.add(deltaX, deltaY);
                case 1:
                    return point.add(deltaX + deltaW, deltaY);
                case 2:
                    return point.add(deltaX + deltaW, deltaY + deltaH);
                case 3:
                    return point.add(deltaX, deltaY + deltaH);
            }
            return point;
        });
    };

    var StackingContext = /** @class */ (function () {
        function StackingContext(container) {
            this.element = container;
            this.inlineLevel = [];
            this.nonInlineLevel = [];
            this.negativeZIndex = [];
            this.zeroOrAutoZIndexOrTransformedOrOpacity = [];
            this.positiveZIndex = [];
            this.nonPositionedFloats = [];
            this.nonPositionedInlineLevel = [];
        }
        return StackingContext;
    }());
    var ElementPaint = /** @class */ (function () {
        function ElementPaint(container, parent) {
            this.container = container;
            this.parent = parent;
            this.effects = [];
            this.curves = new BoundCurves(this.container);
            if (this.container.styles.opacity < 1) {
                this.effects.push(new OpacityEffect(this.container.styles.opacity));
            }
            if (this.container.styles.transform !== null) {
                var offsetX = this.container.bounds.left + this.container.styles.transformOrigin[0].number;
                var offsetY = this.container.bounds.top + this.container.styles.transformOrigin[1].number;
                var matrix = this.container.styles.transform;
                this.effects.push(new TransformEffect(offsetX, offsetY, matrix));
            }
            if (this.container.styles.overflowX !== 0 /* VISIBLE */) {
                var borderBox = calculateBorderBoxPath(this.curves);
                var paddingBox = calculatePaddingBoxPath(this.curves);
                if (equalPath(borderBox, paddingBox)) {
                    this.effects.push(new ClipEffect(borderBox, 2 /* BACKGROUND_BORDERS */ | 4 /* CONTENT */));
                }
                else {
                    this.effects.push(new ClipEffect(borderBox, 2 /* BACKGROUND_BORDERS */));
                    this.effects.push(new ClipEffect(paddingBox, 4 /* CONTENT */));
                }
            }
        }
        ElementPaint.prototype.getEffects = function (target) {
            var inFlow = [2 /* ABSOLUTE */, 3 /* FIXED */].indexOf(this.container.styles.position) === -1;
            var parent = this.parent;
            var effects = this.effects.slice(0);
            while (parent) {
                var croplessEffects = parent.effects.filter(function (effect) { return !isClipEffect(effect); });
                if (inFlow || parent.container.styles.position !== 0 /* STATIC */ || !parent.parent) {
                    effects.unshift.apply(effects, croplessEffects);
                    inFlow = [2 /* ABSOLUTE */, 3 /* FIXED */].indexOf(parent.container.styles.position) === -1;
                    if (parent.container.styles.overflowX !== 0 /* VISIBLE */) {
                        var borderBox = calculateBorderBoxPath(parent.curves);
                        var paddingBox = calculatePaddingBoxPath(parent.curves);
                        if (!equalPath(borderBox, paddingBox)) {
                            effects.unshift(new ClipEffect(paddingBox, 2 /* BACKGROUND_BORDERS */ | 4 /* CONTENT */));
                        }
                    }
                }
                else {
                    effects.unshift.apply(effects, croplessEffects);
                }
                parent = parent.parent;
            }
            return effects.filter(function (effect) { return contains(effect.target, target); });
        };
        return ElementPaint;
    }());
    var parseStackTree = function (parent, stackingContext, realStackingContext, listItems) {
        parent.container.elements.forEach(function (child) {
            var treatAsRealStackingContext = contains(child.flags, 4 /* CREATES_REAL_STACKING_CONTEXT */);
            var createsStackingContext = contains(child.flags, 2 /* CREATES_STACKING_CONTEXT */);
            var paintContainer = new ElementPaint(child, parent);
            if (contains(child.styles.display, 2048 /* LIST_ITEM */)) {
                listItems.push(paintContainer);
            }
            var listOwnerItems = contains(child.flags, 8 /* IS_LIST_OWNER */) ? [] : listItems;
            if (treatAsRealStackingContext || createsStackingContext) {
                var parentStack = treatAsRealStackingContext || child.styles.isPositioned() ? realStackingContext : stackingContext;
                var stack = new StackingContext(paintContainer);
                if (child.styles.isPositioned() || child.styles.opacity < 1 || child.styles.isTransformed()) {
                    var order_1 = child.styles.zIndex.order;
                    if (order_1 < 0) {
                        var index_1 = 0;
                        parentStack.negativeZIndex.some(function (current, i) {
                            if (order_1 > current.element.container.styles.zIndex.order) {
                                index_1 = i;
                                return false;
                            }
                            else if (index_1 > 0) {
                                return true;
                            }
                            return false;
                        });
                        parentStack.negativeZIndex.splice(index_1, 0, stack);
                    }
                    else if (order_1 > 0) {
                        var index_2 = 0;
                        parentStack.positiveZIndex.some(function (current, i) {
                            if (order_1 >= current.element.container.styles.zIndex.order) {
                                index_2 = i + 1;
                                return false;
                            }
                            else if (index_2 > 0) {
                                return true;
                            }
                            return false;
                        });
                        parentStack.positiveZIndex.splice(index_2, 0, stack);
                    }
                    else {
                        parentStack.zeroOrAutoZIndexOrTransformedOrOpacity.push(stack);
                    }
                }
                else {
                    if (child.styles.isFloating()) {
                        parentStack.nonPositionedFloats.push(stack);
                    }
                    else {
                        parentStack.nonPositionedInlineLevel.push(stack);
                    }
                }
                parseStackTree(paintContainer, stack, treatAsRealStackingContext ? stack : realStackingContext, listOwnerItems);
            }
            else {
                if (child.styles.isInlineLevel()) {
                    stackingContext.inlineLevel.push(paintContainer);
                }
                else {
                    stackingContext.nonInlineLevel.push(paintContainer);
                }
                parseStackTree(paintContainer, stackingContext, realStackingContext, listOwnerItems);
            }
            if (contains(child.flags, 8 /* IS_LIST_OWNER */)) {
                processListItems(child, listOwnerItems);
            }
        });
    };
    var processListItems = function (owner, elements) {
        var numbering = owner instanceof OLElementContainer ? owner.start : 1;
        var reversed = owner instanceof OLElementContainer ? owner.reversed : false;
        for (var i = 0; i < elements.length; i++) {
            var item = elements[i];
            if (item.container instanceof LIElementContainer &&
                typeof item.container.value === 'number' &&
                item.container.value !== 0) {
                numbering = item.container.value;
            }
            item.listValue = createCounterText(numbering, item.container.styles.listStyleType, true);
            numbering += reversed ? -1 : 1;
        }
    };
    var parseStackingContexts = function (container) {
        var paintContainer = new ElementPaint(container, null);
        var root = new StackingContext(paintContainer);
        var listItems = [];
        parseStackTree(paintContainer, root, root, listItems);
        processListItems(paintContainer.container, listItems);
        return root;
    };

    var parsePathForBorder = function (curves, borderSide) {
        switch (borderSide) {
            case 0:
                return createPathFromCurves(curves.topLeftBorderBox, curves.topLeftPaddingBox, curves.topRightBorderBox, curves.topRightPaddingBox);
            case 1:
                return createPathFromCurves(curves.topRightBorderBox, curves.topRightPaddingBox, curves.bottomRightBorderBox, curves.bottomRightPaddingBox);
            case 2:
                return createPathFromCurves(curves.bottomRightBorderBox, curves.bottomRightPaddingBox, curves.bottomLeftBorderBox, curves.bottomLeftPaddingBox);
            case 3:
            default:
                return createPathFromCurves(curves.bottomLeftBorderBox, curves.bottomLeftPaddingBox, curves.topLeftBorderBox, curves.topLeftPaddingBox);
        }
    };
    var parsePathForBorderDoubleOuter = function (curves, borderSide) {
        switch (borderSide) {
            case 0:
                return createPathFromCurves(curves.topLeftBorderBox, curves.topLeftBorderDoubleOuterBox, curves.topRightBorderBox, curves.topRightBorderDoubleOuterBox);
            case 1:
                return createPathFromCurves(curves.topRightBorderBox, curves.topRightBorderDoubleOuterBox, curves.bottomRightBorderBox, curves.bottomRightBorderDoubleOuterBox);
            case 2:
                return createPathFromCurves(curves.bottomRightBorderBox, curves.bottomRightBorderDoubleOuterBox, curves.bottomLeftBorderBox, curves.bottomLeftBorderDoubleOuterBox);
            case 3:
            default:
                return createPathFromCurves(curves.bottomLeftBorderBox, curves.bottomLeftBorderDoubleOuterBox, curves.topLeftBorderBox, curves.topLeftBorderDoubleOuterBox);
        }
    };
    var parsePathForBorderDoubleInner = function (curves, borderSide) {
        switch (borderSide) {
            case 0:
                return createPathFromCurves(curves.topLeftBorderDoubleInnerBox, curves.topLeftPaddingBox, curves.topRightBorderDoubleInnerBox, curves.topRightPaddingBox);
            case 1:
                return createPathFromCurves(curves.topRightBorderDoubleInnerBox, curves.topRightPaddingBox, curves.bottomRightBorderDoubleInnerBox, curves.bottomRightPaddingBox);
            case 2:
                return createPathFromCurves(curves.bottomRightBorderDoubleInnerBox, curves.bottomRightPaddingBox, curves.bottomLeftBorderDoubleInnerBox, curves.bottomLeftPaddingBox);
            case 3:
            default:
                return createPathFromCurves(curves.bottomLeftBorderDoubleInnerBox, curves.bottomLeftPaddingBox, curves.topLeftBorderDoubleInnerBox, curves.topLeftPaddingBox);
        }
    };
    var parsePathForBorderStroke = function (curves, borderSide) {
        switch (borderSide) {
            case 0:
                return createStrokePathFromCurves(curves.topLeftBorderStroke, curves.topRightBorderStroke);
            case 1:
                return createStrokePathFromCurves(curves.topRightBorderStroke, curves.bottomRightBorderStroke);
            case 2:
                return createStrokePathFromCurves(curves.bottomRightBorderStroke, curves.bottomLeftBorderStroke);
            case 3:
            default:
                return createStrokePathFromCurves(curves.bottomLeftBorderStroke, curves.topLeftBorderStroke);
        }
    };
    var createStrokePathFromCurves = function (outer1, outer2) {
        var path = [];
        if (isBezierCurve(outer1)) {
            path.push(outer1.subdivide(0.5, false));
        }
        else {
            path.push(outer1);
        }
        if (isBezierCurve(outer2)) {
            path.push(outer2.subdivide(0.5, true));
        }
        else {
            path.push(outer2);
        }
        return path;
    };
    var createPathFromCurves = function (outer1, inner1, outer2, inner2) {
        var path = [];
        if (isBezierCurve(outer1)) {
            path.push(outer1.subdivide(0.5, false));
        }
        else {
            path.push(outer1);
        }
        if (isBezierCurve(outer2)) {
            path.push(outer2.subdivide(0.5, true));
        }
        else {
            path.push(outer2);
        }
        if (isBezierCurve(inner2)) {
            path.push(inner2.subdivide(0.5, true).reverse());
        }
        else {
            path.push(inner2);
        }
        if (isBezierCurve(inner1)) {
            path.push(inner1.subdivide(0.5, false).reverse());
        }
        else {
            path.push(inner1);
        }
        return path;
    };

    var paddingBox = function (element) {
        var bounds = element.bounds;
        var styles = element.styles;
        return bounds.add(styles.borderLeftWidth, styles.borderTopWidth, -(styles.borderRightWidth + styles.borderLeftWidth), -(styles.borderTopWidth + styles.borderBottomWidth));
    };
    var contentBox = function (element) {
        var styles = element.styles;
        var bounds = element.bounds;
        var paddingLeft = getAbsoluteValue(styles.paddingLeft, bounds.width);
        var paddingRight = getAbsoluteValue(styles.paddingRight, bounds.width);
        var paddingTop = getAbsoluteValue(styles.paddingTop, bounds.width);
        var paddingBottom = getAbsoluteValue(styles.paddingBottom, bounds.width);
        return bounds.add(paddingLeft + styles.borderLeftWidth, paddingTop + styles.borderTopWidth, -(styles.borderRightWidth + styles.borderLeftWidth + paddingLeft + paddingRight), -(styles.borderTopWidth + styles.borderBottomWidth + paddingTop + paddingBottom));
    };

    var calculateBackgroundPositioningArea = function (backgroundOrigin, element) {
        if (backgroundOrigin === 0 /* BORDER_BOX */) {
            return element.bounds;
        }
        if (backgroundOrigin === 2 /* CONTENT_BOX */) {
            return contentBox(element);
        }
        return paddingBox(element);
    };
    var calculateBackgroundPaintingArea = function (backgroundClip, element) {
        if (backgroundClip === 0 /* BORDER_BOX */) {
            return element.bounds;
        }
        if (backgroundClip === 2 /* CONTENT_BOX */) {
            return contentBox(element);
        }
        return paddingBox(element);
    };
    var calculateBackgroundRendering = function (container, index, intrinsicSize) {
        var backgroundPositioningArea = calculateBackgroundPositioningArea(getBackgroundValueForIndex(container.styles.backgroundOrigin, index), container);
        var backgroundPaintingArea = calculateBackgroundPaintingArea(getBackgroundValueForIndex(container.styles.backgroundClip, index), container);
        var backgroundImageSize = calculateBackgroundSize(getBackgroundValueForIndex(container.styles.backgroundSize, index), intrinsicSize, backgroundPositioningArea);
        var sizeWidth = backgroundImageSize[0], sizeHeight = backgroundImageSize[1];
        var position = getAbsoluteValueForTuple(getBackgroundValueForIndex(container.styles.backgroundPosition, index), backgroundPositioningArea.width - sizeWidth, backgroundPositioningArea.height - sizeHeight);
        var path = calculateBackgroundRepeatPath(getBackgroundValueForIndex(container.styles.backgroundRepeat, index), position, backgroundImageSize, backgroundPositioningArea, backgroundPaintingArea);
        var offsetX = Math.round(backgroundPositioningArea.left + position[0]);
        var offsetY = Math.round(backgroundPositioningArea.top + position[1]);
        return [path, offsetX, offsetY, sizeWidth, sizeHeight];
    };
    var isAuto = function (token) { return isIdentToken(token) && token.value === BACKGROUND_SIZE.AUTO; };
    var hasIntrinsicValue = function (value) { return typeof value === 'number'; };
    var calculateBackgroundSize = function (size, _a, bounds) {
        var intrinsicWidth = _a[0], intrinsicHeight = _a[1], intrinsicProportion = _a[2];
        var first = size[0], second = size[1];
        if (!first) {
            return [0, 0];
        }
        if (isLengthPercentage(first) && second && isLengthPercentage(second)) {
            return [getAbsoluteValue(first, bounds.width), getAbsoluteValue(second, bounds.height)];
        }
        var hasIntrinsicProportion = hasIntrinsicValue(intrinsicProportion);
        if (isIdentToken(first) && (first.value === BACKGROUND_SIZE.CONTAIN || first.value === BACKGROUND_SIZE.COVER)) {
            if (hasIntrinsicValue(intrinsicProportion)) {
                var targetRatio = bounds.width / bounds.height;
                return targetRatio < intrinsicProportion !== (first.value === BACKGROUND_SIZE.COVER)
                    ? [bounds.width, bounds.width / intrinsicProportion]
                    : [bounds.height * intrinsicProportion, bounds.height];
            }
            return [bounds.width, bounds.height];
        }
        var hasIntrinsicWidth = hasIntrinsicValue(intrinsicWidth);
        var hasIntrinsicHeight = hasIntrinsicValue(intrinsicHeight);
        var hasIntrinsicDimensions = hasIntrinsicWidth || hasIntrinsicHeight;
        // If the background-size is auto or auto auto:
        if (isAuto(first) && (!second || isAuto(second))) {
            // If the image has both horizontal and vertical intrinsic dimensions, it's rendered at that size.
            if (hasIntrinsicWidth && hasIntrinsicHeight) {
                return [intrinsicWidth, intrinsicHeight];
            }
            // If the image has no intrinsic dimensions and has no intrinsic proportions,
            // it's rendered at the size of the background positioning area.
            if (!hasIntrinsicProportion && !hasIntrinsicDimensions) {
                return [bounds.width, bounds.height];
            }
            // TODO If the image has no intrinsic dimensions but has intrinsic proportions, it's rendered as if contain had been specified instead.
            // If the image has only one intrinsic dimension and has intrinsic proportions, it's rendered at the size corresponding to that one dimension.
            // The other dimension is computed using the specified dimension and the intrinsic proportions.
            if (hasIntrinsicDimensions && hasIntrinsicProportion) {
                var width_1 = hasIntrinsicWidth
                    ? intrinsicWidth
                    : intrinsicHeight * intrinsicProportion;
                var height_1 = hasIntrinsicHeight
                    ? intrinsicHeight
                    : intrinsicWidth / intrinsicProportion;
                return [width_1, height_1];
            }
            // If the image has only one intrinsic dimension but has no intrinsic proportions,
            // it's rendered using the specified dimension and the other dimension of the background positioning area.
            var width_2 = hasIntrinsicWidth ? intrinsicWidth : bounds.width;
            var height_2 = hasIntrinsicHeight ? intrinsicHeight : bounds.height;
            return [width_2, height_2];
        }
        // If the image has intrinsic proportions, it's stretched to the specified dimension.
        // The unspecified dimension is computed using the specified dimension and the intrinsic proportions.
        if (hasIntrinsicProportion) {
            var width_3 = 0;
            var height_3 = 0;
            if (isLengthPercentage(first)) {
                width_3 = getAbsoluteValue(first, bounds.width);
            }
            else if (isLengthPercentage(second)) {
                height_3 = getAbsoluteValue(second, bounds.height);
            }
            if (isAuto(first)) {
                width_3 = height_3 * intrinsicProportion;
            }
            else if (!second || isAuto(second)) {
                height_3 = width_3 / intrinsicProportion;
            }
            return [width_3, height_3];
        }
        // If the image has no intrinsic proportions, it's stretched to the specified dimension.
        // The unspecified dimension is computed using the image's corresponding intrinsic dimension,
        // if there is one. If there is no such intrinsic dimension,
        // it becomes the corresponding dimension of the background positioning area.
        var width = null;
        var height = null;
        if (isLengthPercentage(first)) {
            width = getAbsoluteValue(first, bounds.width);
        }
        else if (second && isLengthPercentage(second)) {
            height = getAbsoluteValue(second, bounds.height);
        }
        if (width !== null && (!second || isAuto(second))) {
            height =
                hasIntrinsicWidth && hasIntrinsicHeight
                    ? (width / intrinsicWidth) * intrinsicHeight
                    : bounds.height;
        }
        if (height !== null && isAuto(first)) {
            width =
                hasIntrinsicWidth && hasIntrinsicHeight
                    ? (height / intrinsicHeight) * intrinsicWidth
                    : bounds.width;
        }
        if (width !== null && height !== null) {
            return [width, height];
        }
        throw new Error("Unable to calculate background-size for element");
    };
    var getBackgroundValueForIndex = function (values, index) {
        var value = values[index];
        if (typeof value === 'undefined') {
            return values[0];
        }
        return value;
    };
    var calculateBackgroundRepeatPath = function (repeat, _a, _b, backgroundPositioningArea, backgroundPaintingArea) {
        var x = _a[0], y = _a[1];
        var width = _b[0], height = _b[1];
        switch (repeat) {
            case 2 /* REPEAT_X */:
                return [
                    new Vector(Math.round(backgroundPositioningArea.left), Math.round(backgroundPositioningArea.top + y)),
                    new Vector(Math.round(backgroundPositioningArea.left + backgroundPositioningArea.width), Math.round(backgroundPositioningArea.top + y)),
                    new Vector(Math.round(backgroundPositioningArea.left + backgroundPositioningArea.width), Math.round(height + backgroundPositioningArea.top + y)),
                    new Vector(Math.round(backgroundPositioningArea.left), Math.round(height + backgroundPositioningArea.top + y))
                ];
            case 3 /* REPEAT_Y */:
                return [
                    new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top)),
                    new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.top)),
                    new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.height + backgroundPositioningArea.top)),
                    new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.height + backgroundPositioningArea.top))
                ];
            case 1 /* NO_REPEAT */:
                return [
                    new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top + y)),
                    new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.top + y)),
                    new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.top + y + height)),
                    new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top + y + height))
                ];
            default:
                return [
                    new Vector(Math.round(backgroundPaintingArea.left), Math.round(backgroundPaintingArea.top)),
                    new Vector(Math.round(backgroundPaintingArea.left + backgroundPaintingArea.width), Math.round(backgroundPaintingArea.top)),
                    new Vector(Math.round(backgroundPaintingArea.left + backgroundPaintingArea.width), Math.round(backgroundPaintingArea.height + backgroundPaintingArea.top)),
                    new Vector(Math.round(backgroundPaintingArea.left), Math.round(backgroundPaintingArea.height + backgroundPaintingArea.top))
                ];
        }
    };

    var SMALL_IMAGE = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

    var SAMPLE_TEXT = 'Hidden Text';
    var FontMetrics = /** @class */ (function () {
        function FontMetrics(document) {
            this._data = {};
            this._document = document;
        }
        FontMetrics.prototype.parseMetrics = function (fontFamily, fontSize) {
            var container = this._document.createElement('div');
            var img = this._document.createElement('img');
            var span = this._document.createElement('span');
            var body = this._document.body;
            container.style.visibility = 'hidden';
            container.style.fontFamily = fontFamily;
            container.style.fontSize = fontSize;
            container.style.margin = '0';
            container.style.padding = '0';
            container.style.whiteSpace = 'nowrap';
            body.appendChild(container);
            img.src = SMALL_IMAGE;
            img.width = 1;
            img.height = 1;
            img.style.margin = '0';
            img.style.padding = '0';
            img.style.verticalAlign = 'baseline';
            span.style.fontFamily = fontFamily;
            span.style.fontSize = fontSize;
            span.style.margin = '0';
            span.style.padding = '0';
            span.appendChild(this._document.createTextNode(SAMPLE_TEXT));
            container.appendChild(span);
            container.appendChild(img);
            var baseline = img.offsetTop - span.offsetTop + 2;
            container.removeChild(span);
            container.appendChild(this._document.createTextNode(SAMPLE_TEXT));
            container.style.lineHeight = 'normal';
            img.style.verticalAlign = 'super';
            var middle = img.offsetTop - container.offsetTop + 2;
            body.removeChild(container);
            return { baseline: baseline, middle: middle };
        };
        FontMetrics.prototype.getMetrics = function (fontFamily, fontSize) {
            var key = fontFamily + " " + fontSize;
            if (typeof this._data[key] === 'undefined') {
                this._data[key] = this.parseMetrics(fontFamily, fontSize);
            }
            return this._data[key];
        };
        return FontMetrics;
    }());

    var Renderer = /** @class */ (function () {
        function Renderer(context, options) {
            this.context = context;
            this.options = options;
        }
        return Renderer;
    }());

    var MASK_OFFSET = 10000;
    var CanvasRenderer = /** @class */ (function (_super) {
        __extends(CanvasRenderer, _super);
        function CanvasRenderer(context, options) {
            var _this = _super.call(this, context, options) || this;
            _this._activeEffects = [];
            _this.canvas = options.canvas ? options.canvas : document.createElement('canvas');
            _this.ctx = _this.canvas.getContext('2d');
            if (!options.canvas) {
                _this.canvas.width = Math.floor(options.width * options.scale);
                _this.canvas.height = Math.floor(options.height * options.scale);
                _this.canvas.style.width = options.width + "px";
                _this.canvas.style.height = options.height + "px";
            }
            _this.fontMetrics = new FontMetrics(document);
            _this.ctx.scale(_this.options.scale, _this.options.scale);
            _this.ctx.translate(-options.x, -options.y);
            _this.ctx.textBaseline = 'bottom';
            _this._activeEffects = [];
            _this.context.logger.debug("Canvas renderer initialized (" + options.width + "x" + options.height + ") with scale " + options.scale);
            return _this;
        }
        CanvasRenderer.prototype.applyEffects = function (effects) {
            var _this = this;
            while (this._activeEffects.length) {
                this.popEffect();
            }
            effects.forEach(function (effect) { return _this.applyEffect(effect); });
        };
        CanvasRenderer.prototype.applyEffect = function (effect) {
            this.ctx.save();
            if (isOpacityEffect(effect)) {
                this.ctx.globalAlpha = effect.opacity;
            }
            if (isTransformEffect(effect)) {
                this.ctx.translate(effect.offsetX, effect.offsetY);
                this.ctx.transform(effect.matrix[0], effect.matrix[1], effect.matrix[2], effect.matrix[3], effect.matrix[4], effect.matrix[5]);
                this.ctx.translate(-effect.offsetX, -effect.offsetY);
            }
            if (isClipEffect(effect)) {
                this.path(effect.path);
                this.ctx.clip();
            }
            this._activeEffects.push(effect);
        };
        CanvasRenderer.prototype.popEffect = function () {
            this._activeEffects.pop();
            this.ctx.restore();
        };
        CanvasRenderer.prototype.renderStack = function (stack) {
            return __awaiter(this, void 0, void 0, function () {
                var styles;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            styles = stack.element.container.styles;
                            if (!styles.isVisible()) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.renderStackContent(stack)];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        };
        CanvasRenderer.prototype.renderNode = function (paint) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (contains(paint.container.flags, 16 /* DEBUG_RENDER */)) {
                                debugger;
                            }
                            if (!paint.container.styles.isVisible()) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.renderNodeBackgroundAndBorders(paint)];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.renderNodeContent(paint)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        CanvasRenderer.prototype.renderTextWithLetterSpacing = function (text, letterSpacing, baseline) {
            var _this = this;
            if (letterSpacing === 0) {
                this.ctx.fillText(text.text, text.bounds.left, text.bounds.top + baseline);
            }
            else {
                var letters = segmentGraphemes(text.text);
                letters.reduce(function (left, letter) {
                    _this.ctx.fillText(letter, left, text.bounds.top + baseline);
                    return left + _this.ctx.measureText(letter).width;
                }, text.bounds.left);
            }
        };
        CanvasRenderer.prototype.createFontStyle = function (styles) {
            var fontVariant = styles.fontVariant
                .filter(function (variant) { return variant === 'normal' || variant === 'small-caps'; })
                .join('');
            var fontFamily = fixIOSSystemFonts(styles.fontFamily).join(', ');
            var fontSize = isDimensionToken(styles.fontSize)
                ? "" + styles.fontSize.number + styles.fontSize.unit
                : styles.fontSize.number + "px";
            return [
                [styles.fontStyle, fontVariant, styles.fontWeight, fontSize, fontFamily].join(' '),
                fontFamily,
                fontSize
            ];
        };
        CanvasRenderer.prototype.renderTextNode = function (text, styles) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, font, fontFamily, fontSize, _b, baseline, middle, paintOrder;
                var _this = this;
                return __generator(this, function (_c) {
                    _a = this.createFontStyle(styles), font = _a[0], fontFamily = _a[1], fontSize = _a[2];
                    this.ctx.font = font;
                    this.ctx.direction = styles.direction === 1 /* RTL */ ? 'rtl' : 'ltr';
                    this.ctx.textAlign = 'left';
                    this.ctx.textBaseline = 'alphabetic';
                    _b = this.fontMetrics.getMetrics(fontFamily, fontSize), baseline = _b.baseline, middle = _b.middle;
                    paintOrder = styles.paintOrder;
                    text.textBounds.forEach(function (text) {
                        paintOrder.forEach(function (paintOrderLayer) {
                            switch (paintOrderLayer) {
                                case 0 /* FILL */:
                                    _this.ctx.fillStyle = asString(styles.color);
                                    _this.renderTextWithLetterSpacing(text, styles.letterSpacing, baseline);
                                    var textShadows = styles.textShadow;
                                    if (textShadows.length && text.text.trim().length) {
                                        textShadows
                                            .slice(0)
                                            .reverse()
                                            .forEach(function (textShadow) {
                                            _this.ctx.shadowColor = asString(textShadow.color);
                                            _this.ctx.shadowOffsetX = textShadow.offsetX.number * _this.options.scale;
                                            _this.ctx.shadowOffsetY = textShadow.offsetY.number * _this.options.scale;
                                            _this.ctx.shadowBlur = textShadow.blur.number;
                                            _this.renderTextWithLetterSpacing(text, styles.letterSpacing, baseline);
                                        });
                                        _this.ctx.shadowColor = '';
                                        _this.ctx.shadowOffsetX = 0;
                                        _this.ctx.shadowOffsetY = 0;
                                        _this.ctx.shadowBlur = 0;
                                    }
                                    if (styles.textDecorationLine.length) {
                                        _this.ctx.fillStyle = asString(styles.textDecorationColor || styles.color);
                                        styles.textDecorationLine.forEach(function (textDecorationLine) {
                                            switch (textDecorationLine) {
                                                case 1 /* UNDERLINE */:
                                                    // Draws a line at the baseline of the font
                                                    // TODO As some browsers display the line as more than 1px if the font-size is big,
                                                    // need to take that into account both in position and size
                                                    _this.ctx.fillRect(text.bounds.left, Math.round(text.bounds.top + baseline), text.bounds.width, 1);
                                                    break;
                                                case 2 /* OVERLINE */:
                                                    _this.ctx.fillRect(text.bounds.left, Math.round(text.bounds.top), text.bounds.width, 1);
                                                    break;
                                                case 3 /* LINE_THROUGH */:
                                                    // TODO try and find exact position for line-through
                                                    _this.ctx.fillRect(text.bounds.left, Math.ceil(text.bounds.top + middle), text.bounds.width, 1);
                                                    break;
                                            }
                                        });
                                    }
                                    break;
                                case 1 /* STROKE */:
                                    if (styles.webkitTextStrokeWidth && text.text.trim().length) {
                                        _this.ctx.strokeStyle = asString(styles.webkitTextStrokeColor);
                                        _this.ctx.lineWidth = styles.webkitTextStrokeWidth;
                                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                        _this.ctx.lineJoin = !!window.chrome ? 'miter' : 'round';
                                        _this.ctx.strokeText(text.text, text.bounds.left, text.bounds.top + baseline);
                                    }
                                    _this.ctx.strokeStyle = '';
                                    _this.ctx.lineWidth = 0;
                                    _this.ctx.lineJoin = 'miter';
                                    break;
                            }
                        });
                    });
                    return [2 /*return*/];
                });
            });
        };
        CanvasRenderer.prototype.renderReplacedElement = function (container, curves, image) {
            if (image && container.intrinsicWidth > 0 && container.intrinsicHeight > 0) {
                var box = contentBox(container);
                var path = calculatePaddingBoxPath(curves);
                this.path(path);
                this.ctx.save();
                this.ctx.clip();
                this.ctx.drawImage(image, 0, 0, container.intrinsicWidth, container.intrinsicHeight, box.left, box.top, box.width, box.height);
                this.ctx.restore();
            }
        };
        CanvasRenderer.prototype.renderNodeContent = function (paint) {
            return __awaiter(this, void 0, void 0, function () {
                var container, curves, styles, _i, _a, child, image, image, iframeRenderer, canvas, size, _b, fontFamily, fontSize, baseline, bounds, x, textBounds, img, image, url, fontFamily, bounds;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            this.applyEffects(paint.getEffects(4 /* CONTENT */));
                            container = paint.container;
                            curves = paint.curves;
                            styles = container.styles;
                            _i = 0, _a = container.textNodes;
                            _c.label = 1;
                        case 1:
                            if (!(_i < _a.length)) return [3 /*break*/, 4];
                            child = _a[_i];
                            return [4 /*yield*/, this.renderTextNode(child, styles)];
                        case 2:
                            _c.sent();
                            _c.label = 3;
                        case 3:
                            _i++;
                            return [3 /*break*/, 1];
                        case 4:
                            if (!(container instanceof ImageElementContainer)) return [3 /*break*/, 8];
                            _c.label = 5;
                        case 5:
                            _c.trys.push([5, 7, , 8]);
                            return [4 /*yield*/, this.context.cache.match(container.src)];
                        case 6:
                            image = _c.sent();
                            this.renderReplacedElement(container, curves, image);
                            return [3 /*break*/, 8];
                        case 7:
                            _c.sent();
                            this.context.logger.error("Error loading image " + container.src);
                            return [3 /*break*/, 8];
                        case 8:
                            if (container instanceof CanvasElementContainer) {
                                this.renderReplacedElement(container, curves, container.canvas);
                            }
                            if (!(container instanceof SVGElementContainer)) return [3 /*break*/, 12];
                            _c.label = 9;
                        case 9:
                            _c.trys.push([9, 11, , 12]);
                            return [4 /*yield*/, this.context.cache.match(container.svg)];
                        case 10:
                            image = _c.sent();
                            this.renderReplacedElement(container, curves, image);
                            return [3 /*break*/, 12];
                        case 11:
                            _c.sent();
                            this.context.logger.error("Error loading svg " + container.svg.substring(0, 255));
                            return [3 /*break*/, 12];
                        case 12:
                            if (!(container instanceof IFrameElementContainer && container.tree)) return [3 /*break*/, 14];
                            iframeRenderer = new CanvasRenderer(this.context, {
                                scale: this.options.scale,
                                backgroundColor: container.backgroundColor,
                                x: 0,
                                y: 0,
                                width: container.width,
                                height: container.height
                            });
                            return [4 /*yield*/, iframeRenderer.render(container.tree)];
                        case 13:
                            canvas = _c.sent();
                            if (container.width && container.height) {
                                this.ctx.drawImage(canvas, 0, 0, container.width, container.height, container.bounds.left, container.bounds.top, container.bounds.width, container.bounds.height);
                            }
                            _c.label = 14;
                        case 14:
                            if (container instanceof InputElementContainer) {
                                size = Math.min(container.bounds.width, container.bounds.height);
                                if (container.type === CHECKBOX) {
                                    if (container.checked) {
                                        this.ctx.save();
                                        this.path([
                                            new Vector(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79),
                                            new Vector(container.bounds.left + size * 0.16, container.bounds.top + size * 0.5549),
                                            new Vector(container.bounds.left + size * 0.27347, container.bounds.top + size * 0.44071),
                                            new Vector(container.bounds.left + size * 0.39694, container.bounds.top + size * 0.5649),
                                            new Vector(container.bounds.left + size * 0.72983, container.bounds.top + size * 0.23),
                                            new Vector(container.bounds.left + size * 0.84, container.bounds.top + size * 0.34085),
                                            new Vector(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79)
                                        ]);
                                        this.ctx.fillStyle = asString(INPUT_COLOR);
                                        this.ctx.fill();
                                        this.ctx.restore();
                                    }
                                }
                                else if (container.type === RADIO) {
                                    if (container.checked) {
                                        this.ctx.save();
                                        this.ctx.beginPath();
                                        this.ctx.arc(container.bounds.left + size / 2, container.bounds.top + size / 2, size / 4, 0, Math.PI * 2, true);
                                        this.ctx.fillStyle = asString(INPUT_COLOR);
                                        this.ctx.fill();
                                        this.ctx.restore();
                                    }
                                }
                            }
                            if (isTextInputElement(container) && container.value.length) {
                                _b = this.createFontStyle(styles), fontFamily = _b[0], fontSize = _b[1];
                                baseline = this.fontMetrics.getMetrics(fontFamily, fontSize).baseline;
                                this.ctx.font = fontFamily;
                                this.ctx.fillStyle = asString(styles.color);
                                this.ctx.textBaseline = 'alphabetic';
                                this.ctx.textAlign = canvasTextAlign(container.styles.textAlign);
                                bounds = contentBox(container);
                                x = 0;
                                switch (container.styles.textAlign) {
                                    case 1 /* CENTER */:
                                        x += bounds.width / 2;
                                        break;
                                    case 2 /* RIGHT */:
                                        x += bounds.width;
                                        break;
                                }
                                textBounds = bounds.add(x, 0, 0, -bounds.height / 2 + 1);
                                this.ctx.save();
                                this.path([
                                    new Vector(bounds.left, bounds.top),
                                    new Vector(bounds.left + bounds.width, bounds.top),
                                    new Vector(bounds.left + bounds.width, bounds.top + bounds.height),
                                    new Vector(bounds.left, bounds.top + bounds.height)
                                ]);
                                this.ctx.clip();
                                this.renderTextWithLetterSpacing(new TextBounds(container.value, textBounds), styles.letterSpacing, baseline);
                                this.ctx.restore();
                                this.ctx.textBaseline = 'alphabetic';
                                this.ctx.textAlign = 'left';
                            }
                            if (!contains(container.styles.display, 2048 /* LIST_ITEM */)) return [3 /*break*/, 20];
                            if (!(container.styles.listStyleImage !== null)) return [3 /*break*/, 19];
                            img = container.styles.listStyleImage;
                            if (!(img.type === 0 /* URL */)) return [3 /*break*/, 18];
                            image = void 0;
                            url = img.url;
                            _c.label = 15;
                        case 15:
                            _c.trys.push([15, 17, , 18]);
                            return [4 /*yield*/, this.context.cache.match(url)];
                        case 16:
                            image = _c.sent();
                            this.ctx.drawImage(image, container.bounds.left - (image.width + 10), container.bounds.top);
                            return [3 /*break*/, 18];
                        case 17:
                            _c.sent();
                            this.context.logger.error("Error loading list-style-image " + url);
                            return [3 /*break*/, 18];
                        case 18: return [3 /*break*/, 20];
                        case 19:
                            if (paint.listValue && container.styles.listStyleType !== -1 /* NONE */) {
                                fontFamily = this.createFontStyle(styles)[0];
                                this.ctx.font = fontFamily;
                                this.ctx.fillStyle = asString(styles.color);
                                this.ctx.textBaseline = 'middle';
                                this.ctx.textAlign = 'right';
                                bounds = new Bounds(container.bounds.left, container.bounds.top + getAbsoluteValue(container.styles.paddingTop, container.bounds.width), container.bounds.width, computeLineHeight(styles.lineHeight, styles.fontSize.number) / 2 + 1);
                                this.renderTextWithLetterSpacing(new TextBounds(paint.listValue, bounds), styles.letterSpacing, computeLineHeight(styles.lineHeight, styles.fontSize.number) / 2 + 2);
                                this.ctx.textBaseline = 'bottom';
                                this.ctx.textAlign = 'left';
                            }
                            _c.label = 20;
                        case 20: return [2 /*return*/];
                    }
                });
            });
        };
        CanvasRenderer.prototype.renderStackContent = function (stack) {
            return __awaiter(this, void 0, void 0, function () {
                var _i, _a, child, _b, _c, child, _d, _e, child, _f, _g, child, _h, _j, child, _k, _l, child, _m, _o, child;
                return __generator(this, function (_p) {
                    switch (_p.label) {
                        case 0:
                            if (contains(stack.element.container.flags, 16 /* DEBUG_RENDER */)) {
                                debugger;
                            }
                            // https://www.w3.org/TR/css-position-3/#painting-order
                            // 1. the background and borders of the element forming the stacking context.
                            return [4 /*yield*/, this.renderNodeBackgroundAndBorders(stack.element)];
                        case 1:
                            // https://www.w3.org/TR/css-position-3/#painting-order
                            // 1. the background and borders of the element forming the stacking context.
                            _p.sent();
                            _i = 0, _a = stack.negativeZIndex;
                            _p.label = 2;
                        case 2:
                            if (!(_i < _a.length)) return [3 /*break*/, 5];
                            child = _a[_i];
                            return [4 /*yield*/, this.renderStack(child)];
                        case 3:
                            _p.sent();
                            _p.label = 4;
                        case 4:
                            _i++;
                            return [3 /*break*/, 2];
                        case 5: 
                        // 3. For all its in-flow, non-positioned, block-level descendants in tree order:
                        return [4 /*yield*/, this.renderNodeContent(stack.element)];
                        case 6:
                            // 3. For all its in-flow, non-positioned, block-level descendants in tree order:
                            _p.sent();
                            _b = 0, _c = stack.nonInlineLevel;
                            _p.label = 7;
                        case 7:
                            if (!(_b < _c.length)) return [3 /*break*/, 10];
                            child = _c[_b];
                            return [4 /*yield*/, this.renderNode(child)];
                        case 8:
                            _p.sent();
                            _p.label = 9;
                        case 9:
                            _b++;
                            return [3 /*break*/, 7];
                        case 10:
                            _d = 0, _e = stack.nonPositionedFloats;
                            _p.label = 11;
                        case 11:
                            if (!(_d < _e.length)) return [3 /*break*/, 14];
                            child = _e[_d];
                            return [4 /*yield*/, this.renderStack(child)];
                        case 12:
                            _p.sent();
                            _p.label = 13;
                        case 13:
                            _d++;
                            return [3 /*break*/, 11];
                        case 14:
                            _f = 0, _g = stack.nonPositionedInlineLevel;
                            _p.label = 15;
                        case 15:
                            if (!(_f < _g.length)) return [3 /*break*/, 18];
                            child = _g[_f];
                            return [4 /*yield*/, this.renderStack(child)];
                        case 16:
                            _p.sent();
                            _p.label = 17;
                        case 17:
                            _f++;
                            return [3 /*break*/, 15];
                        case 18:
                            _h = 0, _j = stack.inlineLevel;
                            _p.label = 19;
                        case 19:
                            if (!(_h < _j.length)) return [3 /*break*/, 22];
                            child = _j[_h];
                            return [4 /*yield*/, this.renderNode(child)];
                        case 20:
                            _p.sent();
                            _p.label = 21;
                        case 21:
                            _h++;
                            return [3 /*break*/, 19];
                        case 22:
                            _k = 0, _l = stack.zeroOrAutoZIndexOrTransformedOrOpacity;
                            _p.label = 23;
                        case 23:
                            if (!(_k < _l.length)) return [3 /*break*/, 26];
                            child = _l[_k];
                            return [4 /*yield*/, this.renderStack(child)];
                        case 24:
                            _p.sent();
                            _p.label = 25;
                        case 25:
                            _k++;
                            return [3 /*break*/, 23];
                        case 26:
                            _m = 0, _o = stack.positiveZIndex;
                            _p.label = 27;
                        case 27:
                            if (!(_m < _o.length)) return [3 /*break*/, 30];
                            child = _o[_m];
                            return [4 /*yield*/, this.renderStack(child)];
                        case 28:
                            _p.sent();
                            _p.label = 29;
                        case 29:
                            _m++;
                            return [3 /*break*/, 27];
                        case 30: return [2 /*return*/];
                    }
                });
            });
        };
        CanvasRenderer.prototype.mask = function (paths) {
            this.ctx.beginPath();
            this.ctx.moveTo(0, 0);
            this.ctx.lineTo(this.canvas.width, 0);
            this.ctx.lineTo(this.canvas.width, this.canvas.height);
            this.ctx.lineTo(0, this.canvas.height);
            this.ctx.lineTo(0, 0);
            this.formatPath(paths.slice(0).reverse());
            this.ctx.closePath();
        };
        CanvasRenderer.prototype.path = function (paths) {
            this.ctx.beginPath();
            this.formatPath(paths);
            this.ctx.closePath();
        };
        CanvasRenderer.prototype.formatPath = function (paths) {
            var _this = this;
            paths.forEach(function (point, index) {
                var start = isBezierCurve(point) ? point.start : point;
                if (index === 0) {
                    _this.ctx.moveTo(start.x, start.y);
                }
                else {
                    _this.ctx.lineTo(start.x, start.y);
                }
                if (isBezierCurve(point)) {
                    _this.ctx.bezierCurveTo(point.startControl.x, point.startControl.y, point.endControl.x, point.endControl.y, point.end.x, point.end.y);
                }
            });
        };
        CanvasRenderer.prototype.renderRepeat = function (path, pattern, offsetX, offsetY) {
            this.path(path);
            this.ctx.fillStyle = pattern;
            this.ctx.translate(offsetX, offsetY);
            this.ctx.fill();
            this.ctx.translate(-offsetX, -offsetY);
        };
        CanvasRenderer.prototype.resizeImage = function (image, width, height) {
            var _a;
            if (image.width === width && image.height === height) {
                return image;
            }
            var ownerDocument = (_a = this.canvas.ownerDocument) !== null && _a !== void 0 ? _a : document;
            var canvas = ownerDocument.createElement('canvas');
            canvas.width = Math.max(1, width);
            canvas.height = Math.max(1, height);
            var ctx = canvas.getContext('2d');
            ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, width, height);
            return canvas;
        };
        CanvasRenderer.prototype.renderBackgroundImage = function (container) {
            return __awaiter(this, void 0, void 0, function () {
                var index, _loop_1, this_1, _i, _a, backgroundImage;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            index = container.styles.backgroundImage.length - 1;
                            _loop_1 = function (backgroundImage) {
                                var image, url, _c, path, x, y, width, height, pattern, _d, path, x, y, width, height, _e, lineLength, x0, x1, y0, y1, canvas, ctx, gradient_1, pattern, _f, path, left, top_1, width, height, position, x, y, _g, rx, ry, radialGradient_1, midX, midY, f, invF;
                                return __generator(this, function (_h) {
                                    switch (_h.label) {
                                        case 0:
                                            if (!(backgroundImage.type === 0 /* URL */)) return [3 /*break*/, 5];
                                            image = void 0;
                                            url = backgroundImage.url;
                                            _h.label = 1;
                                        case 1:
                                            _h.trys.push([1, 3, , 4]);
                                            return [4 /*yield*/, this_1.context.cache.match(url)];
                                        case 2:
                                            image = _h.sent();
                                            return [3 /*break*/, 4];
                                        case 3:
                                            _h.sent();
                                            this_1.context.logger.error("Error loading background-image " + url);
                                            return [3 /*break*/, 4];
                                        case 4:
                                            if (image) {
                                                _c = calculateBackgroundRendering(container, index, [
                                                    image.width,
                                                    image.height,
                                                    image.width / image.height
                                                ]), path = _c[0], x = _c[1], y = _c[2], width = _c[3], height = _c[4];
                                                pattern = this_1.ctx.createPattern(this_1.resizeImage(image, width, height), 'repeat');
                                                this_1.renderRepeat(path, pattern, x, y);
                                            }
                                            return [3 /*break*/, 6];
                                        case 5:
                                            if (isLinearGradient(backgroundImage)) {
                                                _d = calculateBackgroundRendering(container, index, [null, null, null]), path = _d[0], x = _d[1], y = _d[2], width = _d[3], height = _d[4];
                                                _e = calculateGradientDirection(backgroundImage.angle, width, height), lineLength = _e[0], x0 = _e[1], x1 = _e[2], y0 = _e[3], y1 = _e[4];
                                                canvas = document.createElement('canvas');
                                                canvas.width = width;
                                                canvas.height = height;
                                                ctx = canvas.getContext('2d');
                                                gradient_1 = ctx.createLinearGradient(x0, y0, x1, y1);
                                                processColorStops(backgroundImage.stops, lineLength).forEach(function (colorStop) {
                                                    return gradient_1.addColorStop(colorStop.stop, asString(colorStop.color));
                                                });
                                                ctx.fillStyle = gradient_1;
                                                ctx.fillRect(0, 0, width, height);
                                                if (width > 0 && height > 0) {
                                                    pattern = this_1.ctx.createPattern(canvas, 'repeat');
                                                    this_1.renderRepeat(path, pattern, x, y);
                                                }
                                            }
                                            else if (isRadialGradient(backgroundImage)) {
                                                _f = calculateBackgroundRendering(container, index, [
                                                    null,
                                                    null,
                                                    null
                                                ]), path = _f[0], left = _f[1], top_1 = _f[2], width = _f[3], height = _f[4];
                                                position = backgroundImage.position.length === 0 ? [FIFTY_PERCENT] : backgroundImage.position;
                                                x = getAbsoluteValue(position[0], width);
                                                y = getAbsoluteValue(position[position.length - 1], height);
                                                _g = calculateRadius(backgroundImage, x, y, width, height), rx = _g[0], ry = _g[1];
                                                if (rx > 0 && ry > 0) {
                                                    radialGradient_1 = this_1.ctx.createRadialGradient(left + x, top_1 + y, 0, left + x, top_1 + y, rx);
                                                    processColorStops(backgroundImage.stops, rx * 2).forEach(function (colorStop) {
                                                        return radialGradient_1.addColorStop(colorStop.stop, asString(colorStop.color));
                                                    });
                                                    this_1.path(path);
                                                    this_1.ctx.fillStyle = radialGradient_1;
                                                    if (rx !== ry) {
                                                        midX = container.bounds.left + 0.5 * container.bounds.width;
                                                        midY = container.bounds.top + 0.5 * container.bounds.height;
                                                        f = ry / rx;
                                                        invF = 1 / f;
                                                        this_1.ctx.save();
                                                        this_1.ctx.translate(midX, midY);
                                                        this_1.ctx.transform(1, 0, 0, f, 0, 0);
                                                        this_1.ctx.translate(-midX, -midY);
                                                        this_1.ctx.fillRect(left, invF * (top_1 - midY) + midY, width, height * invF);
                                                        this_1.ctx.restore();
                                                    }
                                                    else {
                                                        this_1.ctx.fill();
                                                    }
                                                }
                                            }
                                            _h.label = 6;
                                        case 6:
                                            index--;
                                            return [2 /*return*/];
                                    }
                                });
                            };
                            this_1 = this;
                            _i = 0, _a = container.styles.backgroundImage.slice(0).reverse();
                            _b.label = 1;
                        case 1:
                            if (!(_i < _a.length)) return [3 /*break*/, 4];
                            backgroundImage = _a[_i];
                            return [5 /*yield**/, _loop_1(backgroundImage)];
                        case 2:
                            _b.sent();
                            _b.label = 3;
                        case 3:
                            _i++;
                            return [3 /*break*/, 1];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        CanvasRenderer.prototype.renderSolidBorder = function (color, side, curvePoints) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.path(parsePathForBorder(curvePoints, side));
                    this.ctx.fillStyle = asString(color);
                    this.ctx.fill();
                    return [2 /*return*/];
                });
            });
        };
        CanvasRenderer.prototype.renderDoubleBorder = function (color, width, side, curvePoints) {
            return __awaiter(this, void 0, void 0, function () {
                var outerPaths, innerPaths;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(width < 3)) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.renderSolidBorder(color, side, curvePoints)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                        case 2:
                            outerPaths = parsePathForBorderDoubleOuter(curvePoints, side);
                            this.path(outerPaths);
                            this.ctx.fillStyle = asString(color);
                            this.ctx.fill();
                            innerPaths = parsePathForBorderDoubleInner(curvePoints, side);
                            this.path(innerPaths);
                            this.ctx.fill();
                            return [2 /*return*/];
                    }
                });
            });
        };
        CanvasRenderer.prototype.renderNodeBackgroundAndBorders = function (paint) {
            return __awaiter(this, void 0, void 0, function () {
                var styles, hasBackground, borders, backgroundPaintingArea, side, _i, borders_1, border;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.applyEffects(paint.getEffects(2 /* BACKGROUND_BORDERS */));
                            styles = paint.container.styles;
                            hasBackground = !isTransparent(styles.backgroundColor) || styles.backgroundImage.length;
                            borders = [
                                { style: styles.borderTopStyle, color: styles.borderTopColor, width: styles.borderTopWidth },
                                { style: styles.borderRightStyle, color: styles.borderRightColor, width: styles.borderRightWidth },
                                { style: styles.borderBottomStyle, color: styles.borderBottomColor, width: styles.borderBottomWidth },
                                { style: styles.borderLeftStyle, color: styles.borderLeftColor, width: styles.borderLeftWidth }
                            ];
                            backgroundPaintingArea = calculateBackgroundCurvedPaintingArea(getBackgroundValueForIndex(styles.backgroundClip, 0), paint.curves);
                            if (!(hasBackground || styles.boxShadow.length)) return [3 /*break*/, 2];
                            this.ctx.save();
                            this.path(backgroundPaintingArea);
                            this.ctx.clip();
                            if (!isTransparent(styles.backgroundColor)) {
                                this.ctx.fillStyle = asString(styles.backgroundColor);
                                this.ctx.fill();
                            }
                            return [4 /*yield*/, this.renderBackgroundImage(paint.container)];
                        case 1:
                            _a.sent();
                            this.ctx.restore();
                            styles.boxShadow
                                .slice(0)
                                .reverse()
                                .forEach(function (shadow) {
                                _this.ctx.save();
                                var borderBoxArea = calculateBorderBoxPath(paint.curves);
                                var maskOffset = shadow.inset ? 0 : MASK_OFFSET;
                                var shadowPaintingArea = transformPath(borderBoxArea, -maskOffset + (shadow.inset ? 1 : -1) * shadow.spread.number, (shadow.inset ? 1 : -1) * shadow.spread.number, shadow.spread.number * (shadow.inset ? -2 : 2), shadow.spread.number * (shadow.inset ? -2 : 2));
                                if (shadow.inset) {
                                    _this.path(borderBoxArea);
                                    _this.ctx.clip();
                                    _this.mask(shadowPaintingArea);
                                }
                                else {
                                    _this.mask(borderBoxArea);
                                    _this.ctx.clip();
                                    _this.path(shadowPaintingArea);
                                }
                                _this.ctx.shadowOffsetX = shadow.offsetX.number + maskOffset;
                                _this.ctx.shadowOffsetY = shadow.offsetY.number;
                                _this.ctx.shadowColor = asString(shadow.color);
                                _this.ctx.shadowBlur = shadow.blur.number;
                                _this.ctx.fillStyle = shadow.inset ? asString(shadow.color) : 'rgba(0,0,0,1)';
                                _this.ctx.fill();
                                _this.ctx.restore();
                            });
                            _a.label = 2;
                        case 2:
                            side = 0;
                            _i = 0, borders_1 = borders;
                            _a.label = 3;
                        case 3:
                            if (!(_i < borders_1.length)) return [3 /*break*/, 13];
                            border = borders_1[_i];
                            if (!(border.style !== 0 /* NONE */ && !isTransparent(border.color) && border.width > 0)) return [3 /*break*/, 11];
                            if (!(border.style === 2 /* DASHED */)) return [3 /*break*/, 5];
                            return [4 /*yield*/, this.renderDashedDottedBorder(border.color, border.width, side, paint.curves, 2 /* DASHED */)];
                        case 4:
                            _a.sent();
                            return [3 /*break*/, 11];
                        case 5:
                            if (!(border.style === 3 /* DOTTED */)) return [3 /*break*/, 7];
                            return [4 /*yield*/, this.renderDashedDottedBorder(border.color, border.width, side, paint.curves, 3 /* DOTTED */)];
                        case 6:
                            _a.sent();
                            return [3 /*break*/, 11];
                        case 7:
                            if (!(border.style === 4 /* DOUBLE */)) return [3 /*break*/, 9];
                            return [4 /*yield*/, this.renderDoubleBorder(border.color, border.width, side, paint.curves)];
                        case 8:
                            _a.sent();
                            return [3 /*break*/, 11];
                        case 9: return [4 /*yield*/, this.renderSolidBorder(border.color, side, paint.curves)];
                        case 10:
                            _a.sent();
                            _a.label = 11;
                        case 11:
                            side++;
                            _a.label = 12;
                        case 12:
                            _i++;
                            return [3 /*break*/, 3];
                        case 13: return [2 /*return*/];
                    }
                });
            });
        };
        CanvasRenderer.prototype.renderDashedDottedBorder = function (color, width, side, curvePoints, style) {
            return __awaiter(this, void 0, void 0, function () {
                var strokePaths, boxPaths, startX, startY, endX, endY, length, dashLength, spaceLength, useLineDash, multiplier, numberOfDashes, minSpace, maxSpace, path1, path2, path1, path2;
                return __generator(this, function (_a) {
                    this.ctx.save();
                    strokePaths = parsePathForBorderStroke(curvePoints, side);
                    boxPaths = parsePathForBorder(curvePoints, side);
                    if (style === 2 /* DASHED */) {
                        this.path(boxPaths);
                        this.ctx.clip();
                    }
                    if (isBezierCurve(boxPaths[0])) {
                        startX = boxPaths[0].start.x;
                        startY = boxPaths[0].start.y;
                    }
                    else {
                        startX = boxPaths[0].x;
                        startY = boxPaths[0].y;
                    }
                    if (isBezierCurve(boxPaths[1])) {
                        endX = boxPaths[1].end.x;
                        endY = boxPaths[1].end.y;
                    }
                    else {
                        endX = boxPaths[1].x;
                        endY = boxPaths[1].y;
                    }
                    if (side === 0 || side === 2) {
                        length = Math.abs(startX - endX);
                    }
                    else {
                        length = Math.abs(startY - endY);
                    }
                    this.ctx.beginPath();
                    if (style === 3 /* DOTTED */) {
                        this.formatPath(strokePaths);
                    }
                    else {
                        this.formatPath(boxPaths.slice(0, 2));
                    }
                    dashLength = width < 3 ? width * 3 : width * 2;
                    spaceLength = width < 3 ? width * 2 : width;
                    if (style === 3 /* DOTTED */) {
                        dashLength = width;
                        spaceLength = width;
                    }
                    useLineDash = true;
                    if (length <= dashLength * 2) {
                        useLineDash = false;
                    }
                    else if (length <= dashLength * 2 + spaceLength) {
                        multiplier = length / (2 * dashLength + spaceLength);
                        dashLength *= multiplier;
                        spaceLength *= multiplier;
                    }
                    else {
                        numberOfDashes = Math.floor((length + spaceLength) / (dashLength + spaceLength));
                        minSpace = (length - numberOfDashes * dashLength) / (numberOfDashes - 1);
                        maxSpace = (length - (numberOfDashes + 1) * dashLength) / numberOfDashes;
                        spaceLength =
                            maxSpace <= 0 || Math.abs(spaceLength - minSpace) < Math.abs(spaceLength - maxSpace)
                                ? minSpace
                                : maxSpace;
                    }
                    if (useLineDash) {
                        if (style === 3 /* DOTTED */) {
                            this.ctx.setLineDash([0, dashLength + spaceLength]);
                        }
                        else {
                            this.ctx.setLineDash([dashLength, spaceLength]);
                        }
                    }
                    if (style === 3 /* DOTTED */) {
                        this.ctx.lineCap = 'round';
                        this.ctx.lineWidth = width;
                    }
                    else {
                        this.ctx.lineWidth = width * 2 + 1.1;
                    }
                    this.ctx.strokeStyle = asString(color);
                    this.ctx.stroke();
                    this.ctx.setLineDash([]);
                    // dashed round edge gap
                    if (style === 2 /* DASHED */) {
                        if (isBezierCurve(boxPaths[0])) {
                            path1 = boxPaths[3];
                            path2 = boxPaths[0];
                            this.ctx.beginPath();
                            this.formatPath([new Vector(path1.end.x, path1.end.y), new Vector(path2.start.x, path2.start.y)]);
                            this.ctx.stroke();
                        }
                        if (isBezierCurve(boxPaths[1])) {
                            path1 = boxPaths[1];
                            path2 = boxPaths[2];
                            this.ctx.beginPath();
                            this.formatPath([new Vector(path1.end.x, path1.end.y), new Vector(path2.start.x, path2.start.y)]);
                            this.ctx.stroke();
                        }
                    }
                    this.ctx.restore();
                    return [2 /*return*/];
                });
            });
        };
        CanvasRenderer.prototype.render = function (element) {
            return __awaiter(this, void 0, void 0, function () {
                var stack;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (this.options.backgroundColor) {
                                this.ctx.fillStyle = asString(this.options.backgroundColor);
                                this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height);
                            }
                            stack = parseStackingContexts(element);
                            return [4 /*yield*/, this.renderStack(stack)];
                        case 1:
                            _a.sent();
                            this.applyEffects([]);
                            return [2 /*return*/, this.canvas];
                    }
                });
            });
        };
        return CanvasRenderer;
    }(Renderer));
    var isTextInputElement = function (container) {
        if (container instanceof TextareaElementContainer) {
            return true;
        }
        else if (container instanceof SelectElementContainer) {
            return true;
        }
        else if (container instanceof InputElementContainer && container.type !== RADIO && container.type !== CHECKBOX) {
            return true;
        }
        return false;
    };
    var calculateBackgroundCurvedPaintingArea = function (clip, curves) {
        switch (clip) {
            case 0 /* BORDER_BOX */:
                return calculateBorderBoxPath(curves);
            case 2 /* CONTENT_BOX */:
                return calculateContentBoxPath(curves);
            case 1 /* PADDING_BOX */:
            default:
                return calculatePaddingBoxPath(curves);
        }
    };
    var canvasTextAlign = function (textAlign) {
        switch (textAlign) {
            case 1 /* CENTER */:
                return 'center';
            case 2 /* RIGHT */:
                return 'right';
            case 0 /* LEFT */:
            default:
                return 'left';
        }
    };
    // see https://github.com/niklasvh/html2canvas/pull/2645
    var iOSBrokenFonts = ['-apple-system', 'system-ui'];
    var fixIOSSystemFonts = function (fontFamilies) {
        return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent)
            ? fontFamilies.filter(function (fontFamily) { return iOSBrokenFonts.indexOf(fontFamily) === -1; })
            : fontFamilies;
    };

    var ForeignObjectRenderer = /** @class */ (function (_super) {
        __extends(ForeignObjectRenderer, _super);
        function ForeignObjectRenderer(context, options) {
            var _this = _super.call(this, context, options) || this;
            _this.canvas = options.canvas ? options.canvas : document.createElement('canvas');
            _this.ctx = _this.canvas.getContext('2d');
            _this.options = options;
            _this.canvas.width = Math.floor(options.width * options.scale);
            _this.canvas.height = Math.floor(options.height * options.scale);
            _this.canvas.style.width = options.width + "px";
            _this.canvas.style.height = options.height + "px";
            _this.ctx.scale(_this.options.scale, _this.options.scale);
            _this.ctx.translate(-options.x, -options.y);
            _this.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + options.width + "x" + options.height + " at " + options.x + "," + options.y + ") with scale " + options.scale);
            return _this;
        }
        ForeignObjectRenderer.prototype.render = function (element) {
            return __awaiter(this, void 0, void 0, function () {
                var svg, img;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            svg = createForeignObjectSVG(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, element);
                            return [4 /*yield*/, loadSerializedSVG(svg)];
                        case 1:
                            img = _a.sent();
                            if (this.options.backgroundColor) {
                                this.ctx.fillStyle = asString(this.options.backgroundColor);
                                this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale);
                            }
                            this.ctx.drawImage(img, -this.options.x * this.options.scale, -this.options.y * this.options.scale);
                            return [2 /*return*/, this.canvas];
                    }
                });
            });
        };
        return ForeignObjectRenderer;
    }(Renderer));
    var loadSerializedSVG = function (svg) {
        return new Promise(function (resolve, reject) {
            var img = new Image();
            img.onload = function () {
                resolve(img);
            };
            img.onerror = reject;
            img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(svg));
        });
    };

    var Logger = /** @class */ (function () {
        function Logger(_a) {
            var id = _a.id, enabled = _a.enabled;
            this.id = id;
            this.enabled = enabled;
            this.start = Date.now();
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Logger.prototype.debug = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (this.enabled) {
                // eslint-disable-next-line no-console
                if (typeof window !== 'undefined' && window.console && typeof console.debug === 'function') {
                    // eslint-disable-next-line no-console
                    console.debug.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
                }
                else {
                    this.info.apply(this, args);
                }
            }
        };
        Logger.prototype.getTime = function () {
            return Date.now() - this.start;
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Logger.prototype.info = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (this.enabled) {
                // eslint-disable-next-line no-console
                if (typeof window !== 'undefined' && window.console && typeof console.info === 'function') {
                    // eslint-disable-next-line no-console
                    console.info.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
                }
            }
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Logger.prototype.warn = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (this.enabled) {
                // eslint-disable-next-line no-console
                if (typeof window !== 'undefined' && window.console && typeof console.warn === 'function') {
                    // eslint-disable-next-line no-console
                    console.warn.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
                }
                else {
                    this.info.apply(this, args);
                }
            }
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Logger.prototype.error = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (this.enabled) {
                // eslint-disable-next-line no-console
                if (typeof window !== 'undefined' && window.console && typeof console.error === 'function') {
                    // eslint-disable-next-line no-console
                    console.error.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
                }
                else {
                    this.info.apply(this, args);
                }
            }
        };
        Logger.instances = {};
        return Logger;
    }());

    var Context = /** @class */ (function () {
        function Context(options, windowBounds) {
            var _a;
            this.windowBounds = windowBounds;
            this.instanceName = "#" + Context.instanceCount++;
            this.logger = new Logger({ id: this.instanceName, enabled: options.logging });
            this.cache = (_a = options.cache) !== null && _a !== void 0 ? _a : new Cache(this, options);
        }
        Context.instanceCount = 1;
        return Context;
    }());

    var html2canvas = function (element, options) {
        if (options === void 0) { options = {}; }
        return renderElement(element, options);
    };
    if (typeof window !== 'undefined') {
        CacheStorage.setContext(window);
    }
    var renderElement = function (element, opts) { return __awaiter(void 0, void 0, void 0, function () {
        var ownerDocument, defaultView, resourceOptions, contextOptions, windowOptions, windowBounds, context, foreignObjectRendering, cloneOptions, documentCloner, clonedElement, container, _a, width, height, left, top, backgroundColor, renderOptions, canvas, renderer, root, renderer;
        var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        return __generator(this, function (_u) {
            switch (_u.label) {
                case 0:
                    if (!element || typeof element !== 'object') {
                        return [2 /*return*/, Promise.reject('Invalid element provided as first argument')];
                    }
                    ownerDocument = element.ownerDocument;
                    if (!ownerDocument) {
                        throw new Error("Element is not attached to a Document");
                    }
                    defaultView = ownerDocument.defaultView;
                    if (!defaultView) {
                        throw new Error("Document is not attached to a Window");
                    }
                    resourceOptions = {
                        allowTaint: (_b = opts.allowTaint) !== null && _b !== void 0 ? _b : false,
                        imageTimeout: (_c = opts.imageTimeout) !== null && _c !== void 0 ? _c : 15000,
                        proxy: opts.proxy,
                        useCORS: (_d = opts.useCORS) !== null && _d !== void 0 ? _d : false
                    };
                    contextOptions = __assign({ logging: (_e = opts.logging) !== null && _e !== void 0 ? _e : true, cache: opts.cache }, resourceOptions);
                    windowOptions = {
                        windowWidth: (_f = opts.windowWidth) !== null && _f !== void 0 ? _f : defaultView.innerWidth,
                        windowHeight: (_g = opts.windowHeight) !== null && _g !== void 0 ? _g : defaultView.innerHeight,
                        scrollX: (_h = opts.scrollX) !== null && _h !== void 0 ? _h : defaultView.pageXOffset,
                        scrollY: (_j = opts.scrollY) !== null && _j !== void 0 ? _j : defaultView.pageYOffset
                    };
                    windowBounds = new Bounds(windowOptions.scrollX, windowOptions.scrollY, windowOptions.windowWidth, windowOptions.windowHeight);
                    context = new Context(contextOptions, windowBounds);
                    foreignObjectRendering = (_k = opts.foreignObjectRendering) !== null && _k !== void 0 ? _k : false;
                    cloneOptions = {
                        allowTaint: (_l = opts.allowTaint) !== null && _l !== void 0 ? _l : false,
                        onclone: opts.onclone,
                        ignoreElements: opts.ignoreElements,
                        inlineImages: foreignObjectRendering,
                        copyStyles: foreignObjectRendering
                    };
                    context.logger.debug("Starting document clone with size " + windowBounds.width + "x" + windowBounds.height + " scrolled to " + -windowBounds.left + "," + -windowBounds.top);
                    documentCloner = new DocumentCloner(context, element, cloneOptions);
                    clonedElement = documentCloner.clonedReferenceElement;
                    if (!clonedElement) {
                        return [2 /*return*/, Promise.reject("Unable to find element in cloned iframe")];
                    }
                    return [4 /*yield*/, documentCloner.toIFrame(ownerDocument, windowBounds)];
                case 1:
                    container = _u.sent();
                    _a = isBodyElement(clonedElement) || isHTMLElement(clonedElement)
                        ? parseDocumentSize(clonedElement.ownerDocument)
                        : parseBounds(context, clonedElement), width = _a.width, height = _a.height, left = _a.left, top = _a.top;
                    backgroundColor = parseBackgroundColor(context, clonedElement, opts.backgroundColor);
                    renderOptions = {
                        canvas: opts.canvas,
                        backgroundColor: backgroundColor,
                        scale: (_o = (_m = opts.scale) !== null && _m !== void 0 ? _m : defaultView.devicePixelRatio) !== null && _o !== void 0 ? _o : 1,
                        x: ((_p = opts.x) !== null && _p !== void 0 ? _p : 0) + left,
                        y: ((_q = opts.y) !== null && _q !== void 0 ? _q : 0) + top,
                        width: (_r = opts.width) !== null && _r !== void 0 ? _r : Math.ceil(width),
                        height: (_s = opts.height) !== null && _s !== void 0 ? _s : Math.ceil(height)
                    };
                    if (!foreignObjectRendering) return [3 /*break*/, 3];
                    context.logger.debug("Document cloned, using foreign object rendering");
                    renderer = new ForeignObjectRenderer(context, renderOptions);
                    return [4 /*yield*/, renderer.render(clonedElement)];
                case 2:
                    canvas = _u.sent();
                    return [3 /*break*/, 5];
                case 3:
                    context.logger.debug("Document cloned, element located at " + left + "," + top + " with size " + width + "x" + height + " using computed rendering");
                    context.logger.debug("Starting DOM parsing");
                    root = parseTree(context, clonedElement);
                    if (backgroundColor === root.styles.backgroundColor) {
                        root.styles.backgroundColor = COLORS.TRANSPARENT;
                    }
                    context.logger.debug("Starting renderer for element at " + renderOptions.x + "," + renderOptions.y + " with size " + renderOptions.width + "x" + renderOptions.height);
                    renderer = new CanvasRenderer(context, renderOptions);
                    return [4 /*yield*/, renderer.render(root)];
                case 4:
                    canvas = _u.sent();
                    _u.label = 5;
                case 5:
                    if ((_t = opts.removeContainer) !== null && _t !== void 0 ? _t : true) {
                        if (!DocumentCloner.destroy(container)) {
                            context.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore");
                        }
                    }
                    context.logger.debug("Finished rendering");
                    return [2 /*return*/, canvas];
            }
        });
    }); };
    var parseBackgroundColor = function (context, element, backgroundColorOverride) {
        var ownerDocument = element.ownerDocument;
        // http://www.w3.org/TR/css3-background/#special-backgrounds
        var documentBackgroundColor = ownerDocument.documentElement
            ? parseColor(context, getComputedStyle(ownerDocument.documentElement).backgroundColor)
            : COLORS.TRANSPARENT;
        var bodyBackgroundColor = ownerDocument.body
            ? parseColor(context, getComputedStyle(ownerDocument.body).backgroundColor)
            : COLORS.TRANSPARENT;
        var defaultBackgroundColor = typeof backgroundColorOverride === 'string'
            ? parseColor(context, backgroundColorOverride)
            : backgroundColorOverride === null
                ? COLORS.TRANSPARENT
                : 0xffffffff;
        return element === ownerDocument.documentElement
            ? isTransparent(documentBackgroundColor)
                ? isTransparent(bodyBackgroundColor)
                    ? defaultBackgroundColor
                    : bodyBackgroundColor
                : documentBackgroundColor
            : defaultBackgroundColor;
    };

    return html2canvas;

})));
//# sourceMappingURL=html2canvas.js.map


/***/ }),

/***/ 842:
/*!**************************************************!*\
  !*** ../../node_modules/jszip/dist/jszip.min.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/

!function(e){if(true)module.exports=e();else {}}(function(){return function s(a,o,h){function u(r,e){if(!o[r]){if(!a[r]){var t=undefined;if(!e&&t)return require(r,!0);if(l)return l(r,!0);var n=new Error("Cannot find module '"+r+"'");throw n.code="MODULE_NOT_FOUND",n}var i=o[r]={exports:{}};a[r][0].call(i.exports,function(e){var t=a[r][1][e];return u(t||e)},i,i.exports,s,a,o,h)}return o[r].exports}for(var l=undefined,e=0;e<h.length;e++)u(h[e]);return u}({1:[function(e,t,r){"use strict";var d=e("./utils"),c=e("./support"),p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(e){for(var t,r,n,i,s,a,o,h=[],u=0,l=e.length,f=l,c="string"!==d.getTypeOf(e);u<e.length;)f=l-u,n=c?(t=e[u++],r=u<l?e[u++]:0,u<l?e[u++]:0):(t=e.charCodeAt(u++),r=u<l?e.charCodeAt(u++):0,u<l?e.charCodeAt(u++):0),i=t>>2,s=(3&t)<<4|r>>4,a=1<f?(15&r)<<2|n>>6:64,o=2<f?63&n:64,h.push(p.charAt(i)+p.charAt(s)+p.charAt(a)+p.charAt(o));return h.join("")},r.decode=function(e){var t,r,n,i,s,a,o=0,h=0,u="data:";if(e.substr(0,u.length)===u)throw new Error("Invalid base64 input, it looks like a data url.");var l,f=3*(e=e.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(e.charAt(e.length-1)===p.charAt(64)&&f--,e.charAt(e.length-2)===p.charAt(64)&&f--,f%1!=0)throw new Error("Invalid base64 input, bad content length.");for(l=c.uint8array?new Uint8Array(0|f):new Array(0|f);o<e.length;)t=p.indexOf(e.charAt(o++))<<2|(i=p.indexOf(e.charAt(o++)))>>4,r=(15&i)<<4|(s=p.indexOf(e.charAt(o++)))>>2,n=(3&s)<<6|(a=p.indexOf(e.charAt(o++))),l[h++]=t,64!==s&&(l[h++]=r),64!==a&&(l[h++]=n);return l}},{"./support":30,"./utils":32}],2:[function(e,t,r){"use strict";var n=e("./external"),i=e("./stream/DataWorker"),s=e("./stream/Crc32Probe"),a=e("./stream/DataLengthProbe");function o(e,t,r,n,i){this.compressedSize=e,this.uncompressedSize=t,this.crc32=r,this.compression=n,this.compressedContent=i}o.prototype={getContentWorker:function(){var e=new i(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new a("data_length")),t=this;return e.on("end",function(){if(this.streamInfo.data_length!==t.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),e},getCompressedWorker:function(){return new i(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},o.createWorkerFrom=function(e,t,r){return e.pipe(new s).pipe(new a("uncompressedSize")).pipe(t.compressWorker(r)).pipe(new a("compressedSize")).withStreamInfo("compression",t)},t.exports=o},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,t,r){"use strict";var n=e("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new n("STORE compression")},uncompressWorker:function(){return new n("STORE decompression")}},r.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,t,r){"use strict";var n=e("./utils");var o=function(){for(var e,t=[],r=0;r<256;r++){e=r;for(var n=0;n<8;n++)e=1&e?3988292384^e>>>1:e>>>1;t[r]=e}return t}();t.exports=function(e,t){return void 0!==e&&e.length?"string"!==n.getTypeOf(e)?function(e,t,r,n){var i=o,s=n+r;e^=-1;for(var a=n;a<s;a++)e=e>>>8^i[255&(e^t[a])];return-1^e}(0|t,e,e.length,0):function(e,t,r,n){var i=o,s=n+r;e^=-1;for(var a=n;a<s;a++)e=e>>>8^i[255&(e^t.charCodeAt(a))];return-1^e}(0|t,e,e.length,0):0}},{"./utils":32}],5:[function(e,t,r){"use strict";r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(e,t,r){"use strict";var n=null;n="undefined"!=typeof Promise?Promise:e("lie"),t.exports={Promise:n}},{lie:37}],7:[function(e,t,r){"use strict";var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Uint32Array,i=e("pako"),s=e("./utils"),a=e("./stream/GenericWorker"),o=n?"uint8array":"array";function h(e,t){a.call(this,"FlateWorker/"+e),this._pako=null,this._pakoAction=e,this._pakoOptions=t,this.meta={}}r.magic="\b\0",s.inherits(h,a),h.prototype.processChunk=function(e){this.meta=e.meta,null===this._pako&&this._createPako(),this._pako.push(s.transformTo(o,e.data),!1)},h.prototype.flush=function(){a.prototype.flush.call(this),null===this._pako&&this._createPako(),this._pako.push([],!0)},h.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this._pako=null},h.prototype._createPako=function(){this._pako=new i[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var t=this;this._pako.onData=function(e){t.push({data:e,meta:t.meta})}},r.compressWorker=function(e){return new h("Deflate",e)},r.uncompressWorker=function(){return new h("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,t,r){"use strict";function A(e,t){var r,n="";for(r=0;r<t;r++)n+=String.fromCharCode(255&e),e>>>=8;return n}function n(e,t,r,n,i,s){var a,o,h=e.file,u=e.compression,l=s!==O.utf8encode,f=I.transformTo("string",s(h.name)),c=I.transformTo("string",O.utf8encode(h.name)),d=h.comment,p=I.transformTo("string",s(d)),m=I.transformTo("string",O.utf8encode(d)),_=c.length!==h.name.length,g=m.length!==d.length,b="",v="",y="",w=h.dir,k=h.date,x={crc32:0,compressedSize:0,uncompressedSize:0};t&&!r||(x.crc32=e.crc32,x.compressedSize=e.compressedSize,x.uncompressedSize=e.uncompressedSize);var S=0;t&&(S|=8),l||!_&&!g||(S|=2048);var z=0,C=0;w&&(z|=16),"UNIX"===i?(C=798,z|=function(e,t){var r=e;return e||(r=t?16893:33204),(65535&r)<<16}(h.unixPermissions,w)):(C=20,z|=function(e){return 63&(e||0)}(h.dosPermissions)),a=k.getUTCHours(),a<<=6,a|=k.getUTCMinutes(),a<<=5,a|=k.getUTCSeconds()/2,o=k.getUTCFullYear()-1980,o<<=4,o|=k.getUTCMonth()+1,o<<=5,o|=k.getUTCDate(),_&&(v=A(1,1)+A(B(f),4)+c,b+="up"+A(v.length,2)+v),g&&(y=A(1,1)+A(B(p),4)+m,b+="uc"+A(y.length,2)+y);var E="";return E+="\n\0",E+=A(S,2),E+=u.magic,E+=A(a,2),E+=A(o,2),E+=A(x.crc32,4),E+=A(x.compressedSize,4),E+=A(x.uncompressedSize,4),E+=A(f.length,2),E+=A(b.length,2),{fileRecord:R.LOCAL_FILE_HEADER+E+f+b,dirRecord:R.CENTRAL_FILE_HEADER+A(C,2)+E+A(p.length,2)+"\0\0\0\0"+A(z,4)+A(n,4)+f+b+p}}var I=e("../utils"),i=e("../stream/GenericWorker"),O=e("../utf8"),B=e("../crc32"),R=e("../signature");function s(e,t,r,n){i.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=t,this.zipPlatform=r,this.encodeFileName=n,this.streamFiles=e,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}I.inherits(s,i),s.prototype.push=function(e){var t=e.meta.percent||0,r=this.entriesCount,n=this._sources.length;this.accumulate?this.contentBuffer.push(e):(this.bytesWritten+=e.data.length,i.prototype.push.call(this,{data:e.data,meta:{currentFile:this.currentFile,percent:r?(t+100*(r-n-1))/r:100}}))},s.prototype.openedSource=function(e){this.currentSourceOffset=this.bytesWritten,this.currentFile=e.file.name;var t=this.streamFiles&&!e.file.dir;if(t){var r=n(e,t,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:r.fileRecord,meta:{percent:0}})}else this.accumulate=!0},s.prototype.closedSource=function(e){this.accumulate=!1;var t=this.streamFiles&&!e.file.dir,r=n(e,t,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(r.dirRecord),t)this.push({data:function(e){return R.DATA_DESCRIPTOR+A(e.crc32,4)+A(e.compressedSize,4)+A(e.uncompressedSize,4)}(e),meta:{percent:100}});else for(this.push({data:r.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},s.prototype.flush=function(){for(var e=this.bytesWritten,t=0;t<this.dirRecords.length;t++)this.push({data:this.dirRecords[t],meta:{percent:100}});var r=this.bytesWritten-e,n=function(e,t,r,n,i){var s=I.transformTo("string",i(n));return R.CENTRAL_DIRECTORY_END+"\0\0\0\0"+A(e,2)+A(e,2)+A(t,4)+A(r,4)+A(s.length,2)+s}(this.dirRecords.length,r,e,this.zipComment,this.encodeFileName);this.push({data:n,meta:{percent:100}})},s.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},s.prototype.registerPrevious=function(e){this._sources.push(e);var t=this;return e.on("data",function(e){t.processChunk(e)}),e.on("end",function(){t.closedSource(t.previous.streamInfo),t._sources.length?t.prepareNextSource():t.end()}),e.on("error",function(e){t.error(e)}),this},s.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},s.prototype.error=function(e){var t=this._sources;if(!i.prototype.error.call(this,e))return!1;for(var r=0;r<t.length;r++)try{t[r].error(e)}catch(e){}return!0},s.prototype.lock=function(){i.prototype.lock.call(this);for(var e=this._sources,t=0;t<e.length;t++)e[t].lock()},t.exports=s},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,t,r){"use strict";var u=e("../compressions"),n=e("./ZipFileWorker");r.generateWorker=function(e,a,t){var o=new n(a.streamFiles,t,a.platform,a.encodeFileName),h=0;try{e.forEach(function(e,t){h++;var r=function(e,t){var r=e||t,n=u[r];if(!n)throw new Error(r+" is not a valid compression method !");return n}(t.options.compression,a.compression),n=t.options.compressionOptions||a.compressionOptions||{},i=t.dir,s=t.date;t._compressWorker(r,n).withStreamInfo("file",{name:e,dir:i,date:s,comment:t.comment||"",unixPermissions:t.unixPermissions,dosPermissions:t.dosPermissions}).pipe(o)}),o.entriesCount=h}catch(e){o.error(e)}return o}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,t,r){"use strict";function n(){if(!(this instanceof n))return new n;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var e=new n;for(var t in this)"function"!=typeof this[t]&&(e[t]=this[t]);return e}}(n.prototype=e("./object")).loadAsync=e("./load"),n.support=e("./support"),n.defaults=e("./defaults"),n.version="3.10.1",n.loadAsync=function(e,t){return(new n).loadAsync(e,t)},n.external=e("./external"),t.exports=n},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,t,r){"use strict";var u=e("./utils"),i=e("./external"),n=e("./utf8"),s=e("./zipEntries"),a=e("./stream/Crc32Probe"),l=e("./nodejsUtils");function f(n){return new i.Promise(function(e,t){var r=n.decompressed.getContentWorker().pipe(new a);r.on("error",function(e){t(e)}).on("end",function(){r.streamInfo.crc32!==n.decompressed.crc32?t(new Error("Corrupted zip : CRC32 mismatch")):e()}).resume()})}t.exports=function(e,o){var h=this;return o=u.extend(o||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:n.utf8decode}),l.isNode&&l.isStream(e)?i.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):u.prepareContent("the loaded zip file",e,!0,o.optimizedBinaryString,o.base64).then(function(e){var t=new s(o);return t.load(e),t}).then(function(e){var t=[i.Promise.resolve(e)],r=e.files;if(o.checkCRC32)for(var n=0;n<r.length;n++)t.push(f(r[n]));return i.Promise.all(t)}).then(function(e){for(var t=e.shift(),r=t.files,n=0;n<r.length;n++){var i=r[n],s=i.fileNameStr,a=u.resolve(i.fileNameStr);h.file(a,i.decompressed,{binary:!0,optimizedBinaryString:!0,date:i.date,dir:i.dir,comment:i.fileCommentStr.length?i.fileCommentStr:null,unixPermissions:i.unixPermissions,dosPermissions:i.dosPermissions,createFolders:o.createFolders}),i.dir||(h.file(a).unsafeOriginalName=s)}return t.zipComment.length&&(h.comment=t.zipComment),h})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,t,r){"use strict";var n=e("../utils"),i=e("../stream/GenericWorker");function s(e,t){i.call(this,"Nodejs stream input adapter for "+e),this._upstreamEnded=!1,this._bindStream(t)}n.inherits(s,i),s.prototype._bindStream=function(e){var t=this;(this._stream=e).pause(),e.on("data",function(e){t.push({data:e,meta:{percent:0}})}).on("error",function(e){t.isPaused?this.generatedError=e:t.error(e)}).on("end",function(){t.isPaused?t._upstreamEnded=!0:t.end()})},s.prototype.pause=function(){return!!i.prototype.pause.call(this)&&(this._stream.pause(),!0)},s.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},t.exports=s},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,t,r){"use strict";var i=e("readable-stream").Readable;function n(e,t,r){i.call(this,t),this._helper=e;var n=this;e.on("data",function(e,t){n.push(e)||n._helper.pause(),r&&r(t)}).on("error",function(e){n.emit("error",e)}).on("end",function(){n.push(null)})}e("../utils").inherits(n,i),n.prototype._read=function(){this._helper.resume()},t.exports=n},{"../utils":32,"readable-stream":16}],14:[function(e,t,r){"use strict";t.exports={isNode:"undefined"!=typeof Buffer,newBufferFrom:function(e,t){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(e,t);if("number"==typeof e)throw new Error('The "data" argument must not be a number');return new Buffer(e,t)},allocBuffer:function(e){if(Buffer.alloc)return Buffer.alloc(e);var t=new Buffer(e);return t.fill(0),t},isBuffer:function(e){return Buffer.isBuffer(e)},isStream:function(e){return e&&"function"==typeof e.on&&"function"==typeof e.pause&&"function"==typeof e.resume}}},{}],15:[function(e,t,r){"use strict";function s(e,t,r){var n,i=u.getTypeOf(t),s=u.extend(r||{},f);s.date=s.date||new Date,null!==s.compression&&(s.compression=s.compression.toUpperCase()),"string"==typeof s.unixPermissions&&(s.unixPermissions=parseInt(s.unixPermissions,8)),s.unixPermissions&&16384&s.unixPermissions&&(s.dir=!0),s.dosPermissions&&16&s.dosPermissions&&(s.dir=!0),s.dir&&(e=g(e)),s.createFolders&&(n=_(e))&&b.call(this,n,!0);var a="string"===i&&!1===s.binary&&!1===s.base64;r&&void 0!==r.binary||(s.binary=!a),(t instanceof c&&0===t.uncompressedSize||s.dir||!t||0===t.length)&&(s.base64=!1,s.binary=!0,t="",s.compression="STORE",i="string");var o=null;o=t instanceof c||t instanceof l?t:p.isNode&&p.isStream(t)?new m(e,t):u.prepareContent(e,t,s.binary,s.optimizedBinaryString,s.base64);var h=new d(e,o,s);this.files[e]=h}var i=e("./utf8"),u=e("./utils"),l=e("./stream/GenericWorker"),a=e("./stream/StreamHelper"),f=e("./defaults"),c=e("./compressedObject"),d=e("./zipObject"),o=e("./generate"),p=e("./nodejsUtils"),m=e("./nodejs/NodejsStreamInputAdapter"),_=function(e){"/"===e.slice(-1)&&(e=e.substring(0,e.length-1));var t=e.lastIndexOf("/");return 0<t?e.substring(0,t):""},g=function(e){return"/"!==e.slice(-1)&&(e+="/"),e},b=function(e,t){return t=void 0!==t?t:f.createFolders,e=g(e),this.files[e]||s.call(this,e,null,{dir:!0,createFolders:t}),this.files[e]};function h(e){return"[object RegExp]"===Object.prototype.toString.call(e)}var n={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(e){var t,r,n;for(t in this.files)n=this.files[t],(r=t.slice(this.root.length,t.length))&&t.slice(0,this.root.length)===this.root&&e(r,n)},filter:function(r){var n=[];return this.forEach(function(e,t){r(e,t)&&n.push(t)}),n},file:function(e,t,r){if(1!==arguments.length)return e=this.root+e,s.call(this,e,t,r),this;if(h(e)){var n=e;return this.filter(function(e,t){return!t.dir&&n.test(e)})}var i=this.files[this.root+e];return i&&!i.dir?i:null},folder:function(r){if(!r)return this;if(h(r))return this.filter(function(e,t){return t.dir&&r.test(e)});var e=this.root+r,t=b.call(this,e),n=this.clone();return n.root=t.name,n},remove:function(r){r=this.root+r;var e=this.files[r];if(e||("/"!==r.slice(-1)&&(r+="/"),e=this.files[r]),e&&!e.dir)delete this.files[r];else for(var t=this.filter(function(e,t){return t.name.slice(0,r.length)===r}),n=0;n<t.length;n++)delete this.files[t[n].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(e){var t,r={};try{if((r=u.extend(e||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:i.utf8encode})).type=r.type.toLowerCase(),r.compression=r.compression.toUpperCase(),"binarystring"===r.type&&(r.type="string"),!r.type)throw new Error("No output type specified.");u.checkSupport(r.type),"darwin"!==r.platform&&"freebsd"!==r.platform&&"linux"!==r.platform&&"sunos"!==r.platform||(r.platform="UNIX"),"win32"===r.platform&&(r.platform="DOS");var n=r.comment||this.comment||"";t=o.generateWorker(this,r,n)}catch(e){(t=new l("error")).error(e)}return new a(t,r.type||"string",r.mimeType)},generateAsync:function(e,t){return this.generateInternalStream(e).accumulate(t)},generateNodeStream:function(e,t){return(e=e||{}).type||(e.type="nodebuffer"),this.generateInternalStream(e).toNodejsStream(t)}};t.exports=n},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,t,r){"use strict";t.exports=e("stream")},{stream:void 0}],17:[function(e,t,r){"use strict";var n=e("./DataReader");function i(e){n.call(this,e);for(var t=0;t<this.data.length;t++)e[t]=255&e[t]}e("../utils").inherits(i,n),i.prototype.byteAt=function(e){return this.data[this.zero+e]},i.prototype.lastIndexOfSignature=function(e){for(var t=e.charCodeAt(0),r=e.charCodeAt(1),n=e.charCodeAt(2),i=e.charCodeAt(3),s=this.length-4;0<=s;--s)if(this.data[s]===t&&this.data[s+1]===r&&this.data[s+2]===n&&this.data[s+3]===i)return s-this.zero;return-1},i.prototype.readAndCheckSignature=function(e){var t=e.charCodeAt(0),r=e.charCodeAt(1),n=e.charCodeAt(2),i=e.charCodeAt(3),s=this.readData(4);return t===s[0]&&r===s[1]&&n===s[2]&&i===s[3]},i.prototype.readData=function(e){if(this.checkOffset(e),0===e)return[];var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./DataReader":18}],18:[function(e,t,r){"use strict";var n=e("../utils");function i(e){this.data=e,this.length=e.length,this.index=0,this.zero=0}i.prototype={checkOffset:function(e){this.checkIndex(this.index+e)},checkIndex:function(e){if(this.length<this.zero+e||e<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+e+"). Corrupted zip ?")},setIndex:function(e){this.checkIndex(e),this.index=e},skip:function(e){this.setIndex(this.index+e)},byteAt:function(){},readInt:function(e){var t,r=0;for(this.checkOffset(e),t=this.index+e-1;t>=this.index;t--)r=(r<<8)+this.byteAt(t);return this.index+=e,r},readString:function(e){return n.transformTo("string",this.readData(e))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var e=this.readInt(4);return new Date(Date.UTC(1980+(e>>25&127),(e>>21&15)-1,e>>16&31,e>>11&31,e>>5&63,(31&e)<<1))}},t.exports=i},{"../utils":32}],19:[function(e,t,r){"use strict";var n=e("./Uint8ArrayReader");function i(e){n.call(this,e)}e("../utils").inherits(i,n),i.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,t,r){"use strict";var n=e("./DataReader");function i(e){n.call(this,e)}e("../utils").inherits(i,n),i.prototype.byteAt=function(e){return this.data.charCodeAt(this.zero+e)},i.prototype.lastIndexOfSignature=function(e){return this.data.lastIndexOf(e)-this.zero},i.prototype.readAndCheckSignature=function(e){return e===this.readData(4)},i.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./DataReader":18}],21:[function(e,t,r){"use strict";var n=e("./ArrayReader");function i(e){n.call(this,e)}e("../utils").inherits(i,n),i.prototype.readData=function(e){if(this.checkOffset(e),0===e)return new Uint8Array(0);var t=this.data.subarray(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./ArrayReader":17}],22:[function(e,t,r){"use strict";var n=e("../utils"),i=e("../support"),s=e("./ArrayReader"),a=e("./StringReader"),o=e("./NodeBufferReader"),h=e("./Uint8ArrayReader");t.exports=function(e){var t=n.getTypeOf(e);return n.checkSupport(t),"string"!==t||i.uint8array?"nodebuffer"===t?new o(e):i.uint8array?new h(n.transformTo("uint8array",e)):new s(n.transformTo("array",e)):new a(e)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,t,r){"use strict";r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\b"},{}],24:[function(e,t,r){"use strict";var n=e("./GenericWorker"),i=e("../utils");function s(e){n.call(this,"ConvertWorker to "+e),this.destType=e}i.inherits(s,n),s.prototype.processChunk=function(e){this.push({data:i.transformTo(this.destType,e.data),meta:e.meta})},t.exports=s},{"../utils":32,"./GenericWorker":28}],25:[function(e,t,r){"use strict";var n=e("./GenericWorker"),i=e("../crc32");function s(){n.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(s,n),s.prototype.processChunk=function(e){this.streamInfo.crc32=i(e.data,this.streamInfo.crc32||0),this.push(e)},t.exports=s},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,t,r){"use strict";var n=e("../utils"),i=e("./GenericWorker");function s(e){i.call(this,"DataLengthProbe for "+e),this.propName=e,this.withStreamInfo(e,0)}n.inherits(s,i),s.prototype.processChunk=function(e){if(e){var t=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=t+e.data.length}i.prototype.processChunk.call(this,e)},t.exports=s},{"../utils":32,"./GenericWorker":28}],27:[function(e,t,r){"use strict";var n=e("../utils"),i=e("./GenericWorker");function s(e){i.call(this,"DataWorker");var t=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,e.then(function(e){t.dataIsReady=!0,t.data=e,t.max=e&&e.length||0,t.type=n.getTypeOf(e),t.isPaused||t._tickAndRepeat()},function(e){t.error(e)})}n.inherits(s,i),s.prototype.cleanUp=function(){i.prototype.cleanUp.call(this),this.data=null},s.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,n.delay(this._tickAndRepeat,[],this)),!0)},s.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(n.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},s.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var e=null,t=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":e=this.data.substring(this.index,t);break;case"uint8array":e=this.data.subarray(this.index,t);break;case"array":case"nodebuffer":e=this.data.slice(this.index,t)}return this.index=t,this.push({data:e,meta:{percent:this.max?this.index/this.max*100:0}})},t.exports=s},{"../utils":32,"./GenericWorker":28}],28:[function(e,t,r){"use strict";function n(e){this.name=e||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}n.prototype={push:function(e){this.emit("data",e)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(e){this.emit("error",e)}return!0},error:function(e){return!this.isFinished&&(this.isPaused?this.generatedError=e:(this.isFinished=!0,this.emit("error",e),this.previous&&this.previous.error(e),this.cleanUp()),!0)},on:function(e,t){return this._listeners[e].push(t),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(e,t){if(this._listeners[e])for(var r=0;r<this._listeners[e].length;r++)this._listeners[e][r].call(this,t)},pipe:function(e){return e.registerPrevious(this)},registerPrevious:function(e){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=e.streamInfo,this.mergeStreamInfo(),this.previous=e;var t=this;return e.on("data",function(e){t.processChunk(e)}),e.on("end",function(){t.end()}),e.on("error",function(e){t.error(e)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var e=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),e=!0),this.previous&&this.previous.resume(),!e},flush:function(){},processChunk:function(e){this.push(e)},withStreamInfo:function(e,t){return this.extraStreamInfo[e]=t,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var e in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,e)&&(this.streamInfo[e]=this.extraStreamInfo[e])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var e="Worker "+this.name;return this.previous?this.previous+" -> "+e:e}},t.exports=n},{}],29:[function(e,t,r){"use strict";var h=e("../utils"),i=e("./ConvertWorker"),s=e("./GenericWorker"),u=e("../base64"),n=e("../support"),a=e("../external"),o=null;if(n.nodestream)try{o=e("../nodejs/NodejsStreamOutputAdapter")}catch(e){}function l(e,o){return new a.Promise(function(t,r){var n=[],i=e._internalType,s=e._outputType,a=e._mimeType;e.on("data",function(e,t){n.push(e),o&&o(t)}).on("error",function(e){n=[],r(e)}).on("end",function(){try{var e=function(e,t,r){switch(e){case"blob":return h.newBlob(h.transformTo("arraybuffer",t),r);case"base64":return u.encode(t);default:return h.transformTo(e,t)}}(s,function(e,t){var r,n=0,i=null,s=0;for(r=0;r<t.length;r++)s+=t[r].length;switch(e){case"string":return t.join("");case"array":return Array.prototype.concat.apply([],t);case"uint8array":for(i=new Uint8Array(s),r=0;r<t.length;r++)i.set(t[r],n),n+=t[r].length;return i;case"nodebuffer":return Buffer.concat(t);default:throw new Error("concat : unsupported type '"+e+"'")}}(i,n),a);t(e)}catch(e){r(e)}n=[]}).resume()})}function f(e,t,r){var n=t;switch(t){case"blob":case"arraybuffer":n="uint8array";break;case"base64":n="string"}try{this._internalType=n,this._outputType=t,this._mimeType=r,h.checkSupport(n),this._worker=e.pipe(new i(n)),e.lock()}catch(e){this._worker=new s("error"),this._worker.error(e)}}f.prototype={accumulate:function(e){return l(this,e)},on:function(e,t){var r=this;return"data"===e?this._worker.on(e,function(e){t.call(r,e.data,e.meta)}):this._worker.on(e,function(){h.delay(t,arguments,r)}),this},resume:function(){return h.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(e){if(h.checkSupport("nodestream"),"nodebuffer"!==this._outputType)throw new Error(this._outputType+" is not supported by this method");return new o(this,{objectMode:"nodebuffer"!==this._outputType},e)}},t.exports=f},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,t,r){"use strict";if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array,r.nodebuffer="undefined"!=typeof Buffer,r.uint8array="undefined"!=typeof Uint8Array,"undefined"==typeof ArrayBuffer)r.blob=!1;else{var n=new ArrayBuffer(0);try{r.blob=0===new Blob([n],{type:"application/zip"}).size}catch(e){try{var i=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);i.append(n),r.blob=0===i.getBlob("application/zip").size}catch(e){r.blob=!1}}}try{r.nodestream=!!e("readable-stream").Readable}catch(e){r.nodestream=!1}},{"readable-stream":16}],31:[function(e,t,s){"use strict";for(var o=e("./utils"),h=e("./support"),r=e("./nodejsUtils"),n=e("./stream/GenericWorker"),u=new Array(256),i=0;i<256;i++)u[i]=252<=i?6:248<=i?5:240<=i?4:224<=i?3:192<=i?2:1;u[254]=u[254]=1;function a(){n.call(this,"utf-8 decode"),this.leftOver=null}function l(){n.call(this,"utf-8 encode")}s.utf8encode=function(e){return h.nodebuffer?r.newBufferFrom(e,"utf-8"):function(e){var t,r,n,i,s,a=e.length,o=0;for(i=0;i<a;i++)55296==(64512&(r=e.charCodeAt(i)))&&i+1<a&&56320==(64512&(n=e.charCodeAt(i+1)))&&(r=65536+(r-55296<<10)+(n-56320),i++),o+=r<128?1:r<2048?2:r<65536?3:4;for(t=h.uint8array?new Uint8Array(o):new Array(o),i=s=0;s<o;i++)55296==(64512&(r=e.charCodeAt(i)))&&i+1<a&&56320==(64512&(n=e.charCodeAt(i+1)))&&(r=65536+(r-55296<<10)+(n-56320),i++),r<128?t[s++]=r:(r<2048?t[s++]=192|r>>>6:(r<65536?t[s++]=224|r>>>12:(t[s++]=240|r>>>18,t[s++]=128|r>>>12&63),t[s++]=128|r>>>6&63),t[s++]=128|63&r);return t}(e)},s.utf8decode=function(e){return h.nodebuffer?o.transformTo("nodebuffer",e).toString("utf-8"):function(e){var t,r,n,i,s=e.length,a=new Array(2*s);for(t=r=0;t<s;)if((n=e[t++])<128)a[r++]=n;else if(4<(i=u[n]))a[r++]=65533,t+=i-1;else{for(n&=2===i?31:3===i?15:7;1<i&&t<s;)n=n<<6|63&e[t++],i--;1<i?a[r++]=65533:n<65536?a[r++]=n:(n-=65536,a[r++]=55296|n>>10&1023,a[r++]=56320|1023&n)}return a.length!==r&&(a.subarray?a=a.subarray(0,r):a.length=r),o.applyFromCharCode(a)}(e=o.transformTo(h.uint8array?"uint8array":"array",e))},o.inherits(a,n),a.prototype.processChunk=function(e){var t=o.transformTo(h.uint8array?"uint8array":"array",e.data);if(this.leftOver&&this.leftOver.length){if(h.uint8array){var r=t;(t=new Uint8Array(r.length+this.leftOver.length)).set(this.leftOver,0),t.set(r,this.leftOver.length)}else t=this.leftOver.concat(t);this.leftOver=null}var n=function(e,t){var r;for((t=t||e.length)>e.length&&(t=e.length),r=t-1;0<=r&&128==(192&e[r]);)r--;return r<0?t:0===r?t:r+u[e[r]]>t?r:t}(t),i=t;n!==t.length&&(h.uint8array?(i=t.subarray(0,n),this.leftOver=t.subarray(n,t.length)):(i=t.slice(0,n),this.leftOver=t.slice(n,t.length))),this.push({data:s.utf8decode(i),meta:e.meta})},a.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:s.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},s.Utf8DecodeWorker=a,o.inherits(l,n),l.prototype.processChunk=function(e){this.push({data:s.utf8encode(e.data),meta:e.meta})},s.Utf8EncodeWorker=l},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,t,a){"use strict";var o=e("./support"),h=e("./base64"),r=e("./nodejsUtils"),u=e("./external");function n(e){return e}function l(e,t){for(var r=0;r<e.length;++r)t[r]=255&e.charCodeAt(r);return t}e("setimmediate"),a.newBlob=function(t,r){a.checkSupport("blob");try{return new Blob([t],{type:r})}catch(e){try{var n=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return n.append(t),n.getBlob(r)}catch(e){throw new Error("Bug : can't construct the Blob.")}}};var i={stringifyByChunk:function(e,t,r){var n=[],i=0,s=e.length;if(s<=r)return String.fromCharCode.apply(null,e);for(;i<s;)"array"===t||"nodebuffer"===t?n.push(String.fromCharCode.apply(null,e.slice(i,Math.min(i+r,s)))):n.push(String.fromCharCode.apply(null,e.subarray(i,Math.min(i+r,s)))),i+=r;return n.join("")},stringifyByChar:function(e){for(var t="",r=0;r<e.length;r++)t+=String.fromCharCode(e[r]);return t},applyCanBeUsed:{uint8array:function(){try{return o.uint8array&&1===String.fromCharCode.apply(null,new Uint8Array(1)).length}catch(e){return!1}}(),nodebuffer:function(){try{return o.nodebuffer&&1===String.fromCharCode.apply(null,r.allocBuffer(1)).length}catch(e){return!1}}()}};function s(e){var t=65536,r=a.getTypeOf(e),n=!0;if("uint8array"===r?n=i.applyCanBeUsed.uint8array:"nodebuffer"===r&&(n=i.applyCanBeUsed.nodebuffer),n)for(;1<t;)try{return i.stringifyByChunk(e,r,t)}catch(e){t=Math.floor(t/2)}return i.stringifyByChar(e)}function f(e,t){for(var r=0;r<e.length;r++)t[r]=e[r];return t}a.applyFromCharCode=s;var c={};c.string={string:n,array:function(e){return l(e,new Array(e.length))},arraybuffer:function(e){return c.string.uint8array(e).buffer},uint8array:function(e){return l(e,new Uint8Array(e.length))},nodebuffer:function(e){return l(e,r.allocBuffer(e.length))}},c.array={string:s,array:n,arraybuffer:function(e){return new Uint8Array(e).buffer},uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return r.newBufferFrom(e)}},c.arraybuffer={string:function(e){return s(new Uint8Array(e))},array:function(e){return f(new Uint8Array(e),new Array(e.byteLength))},arraybuffer:n,uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return r.newBufferFrom(new Uint8Array(e))}},c.uint8array={string:s,array:function(e){return f(e,new Array(e.length))},arraybuffer:function(e){return e.buffer},uint8array:n,nodebuffer:function(e){return r.newBufferFrom(e)}},c.nodebuffer={string:s,array:function(e){return f(e,new Array(e.length))},arraybuffer:function(e){return c.nodebuffer.uint8array(e).buffer},uint8array:function(e){return f(e,new Uint8Array(e.length))},nodebuffer:n},a.transformTo=function(e,t){if(t=t||"",!e)return t;a.checkSupport(e);var r=a.getTypeOf(t);return c[r][e](t)},a.resolve=function(e){for(var t=e.split("/"),r=[],n=0;n<t.length;n++){var i=t[n];"."===i||""===i&&0!==n&&n!==t.length-1||(".."===i?r.pop():r.push(i))}return r.join("/")},a.getTypeOf=function(e){return"string"==typeof e?"string":"[object Array]"===Object.prototype.toString.call(e)?"array":o.nodebuffer&&r.isBuffer(e)?"nodebuffer":o.uint8array&&e instanceof Uint8Array?"uint8array":o.arraybuffer&&e instanceof ArrayBuffer?"arraybuffer":void 0},a.checkSupport=function(e){if(!o[e.toLowerCase()])throw new Error(e+" is not supported by this platform")},a.MAX_VALUE_16BITS=65535,a.MAX_VALUE_32BITS=-1,a.pretty=function(e){var t,r,n="";for(r=0;r<(e||"").length;r++)n+="\\x"+((t=e.charCodeAt(r))<16?"0":"")+t.toString(16).toUpperCase();return n},a.delay=function(e,t,r){setImmediate(function(){e.apply(r||null,t||[])})},a.inherits=function(e,t){function r(){}r.prototype=t.prototype,e.prototype=new r},a.extend=function(){var e,t,r={};for(e=0;e<arguments.length;e++)for(t in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],t)&&void 0===r[t]&&(r[t]=arguments[e][t]);return r},a.prepareContent=function(r,e,n,i,s){return u.Promise.resolve(e).then(function(n){return o.blob&&(n instanceof Blob||-1!==["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(n)))&&"undefined"!=typeof FileReader?new u.Promise(function(t,r){var e=new FileReader;e.onload=function(e){t(e.target.result)},e.onerror=function(e){r(e.target.error)},e.readAsArrayBuffer(n)}):n}).then(function(e){var t=a.getTypeOf(e);return t?("arraybuffer"===t?e=a.transformTo("uint8array",e):"string"===t&&(s?e=h.decode(e):n&&!0!==i&&(e=function(e){return l(e,o.uint8array?new Uint8Array(e.length):new Array(e.length))}(e))),e):u.Promise.reject(new Error("Can't read the data of '"+r+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,t,r){"use strict";var n=e("./reader/readerFor"),i=e("./utils"),s=e("./signature"),a=e("./zipEntry"),o=e("./support");function h(e){this.files=[],this.loadOptions=e}h.prototype={checkSignature:function(e){if(!this.reader.readAndCheckSignature(e)){this.reader.index-=4;var t=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+i.pretty(t)+", expected "+i.pretty(e)+")")}},isSignature:function(e,t){var r=this.reader.index;this.reader.setIndex(e);var n=this.reader.readString(4)===t;return this.reader.setIndex(r),n},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var e=this.reader.readData(this.zipCommentLength),t=o.uint8array?"uint8array":"array",r=i.transformTo(t,e);this.zipComment=this.loadOptions.decodeFileName(r)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var e,t,r,n=this.zip64EndOfCentralSize-44;0<n;)e=this.reader.readInt(2),t=this.reader.readInt(4),r=this.reader.readData(t),this.zip64ExtensibleData[e]={id:e,length:t,value:r}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var e,t;for(e=0;e<this.files.length;e++)t=this.files[e],this.reader.setIndex(t.localHeaderOffset),this.checkSignature(s.LOCAL_FILE_HEADER),t.readLocalPart(this.reader),t.handleUTF8(),t.processAttributes()},readCentralDir:function(){var e;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER);)(e=new a({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(e);if(this.centralDirRecords!==this.files.length&&0!==this.centralDirRecords&&0===this.files.length)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var e=this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);if(e<0)throw!this.isSignature(0,s.LOCAL_FILE_HEADER)?new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html"):new Error("Corrupted zip: can't find end of central directory");this.reader.setIndex(e);var t=e;if(this.checkSignature(s.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===i.MAX_VALUE_16BITS||this.diskWithCentralDirStart===i.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===i.MAX_VALUE_16BITS||this.centralDirRecords===i.MAX_VALUE_16BITS||this.centralDirSize===i.MAX_VALUE_32BITS||this.centralDirOffset===i.MAX_VALUE_32BITS){if(this.zip64=!0,(e=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(e),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,s.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var r=this.centralDirOffset+this.centralDirSize;this.zip64&&(r+=20,r+=12+this.zip64EndOfCentralSize);var n=t-r;if(0<n)this.isSignature(t,s.CENTRAL_FILE_HEADER)||(this.reader.zero=n);else if(n<0)throw new Error("Corrupted zip: missing "+Math.abs(n)+" bytes.")},prepareReader:function(e){this.reader=n(e)},load:function(e){this.prepareReader(e),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},t.exports=h},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,t,r){"use strict";var n=e("./reader/readerFor"),s=e("./utils"),i=e("./compressedObject"),a=e("./crc32"),o=e("./utf8"),h=e("./compressions"),u=e("./support");function l(e,t){this.options=e,this.loadOptions=t}l.prototype={isEncrypted:function(){return 1==(1&this.bitFlag)},useUTF8:function(){return 2048==(2048&this.bitFlag)},readLocalPart:function(e){var t,r;if(e.skip(22),this.fileNameLength=e.readInt(2),r=e.readInt(2),this.fileName=e.readData(this.fileNameLength),e.skip(r),-1===this.compressedSize||-1===this.uncompressedSize)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if(null===(t=function(e){for(var t in h)if(Object.prototype.hasOwnProperty.call(h,t)&&h[t].magic===e)return h[t];return null}(this.compressionMethod)))throw new Error("Corrupted zip : compression "+s.pretty(this.compressionMethod)+" unknown (inner file : "+s.transformTo("string",this.fileName)+")");this.decompressed=new i(this.compressedSize,this.uncompressedSize,this.crc32,t,e.readData(this.compressedSize))},readCentralPart:function(e){this.versionMadeBy=e.readInt(2),e.skip(2),this.bitFlag=e.readInt(2),this.compressionMethod=e.readString(2),this.date=e.readDate(),this.crc32=e.readInt(4),this.compressedSize=e.readInt(4),this.uncompressedSize=e.readInt(4);var t=e.readInt(2);if(this.extraFieldsLength=e.readInt(2),this.fileCommentLength=e.readInt(2),this.diskNumberStart=e.readInt(2),this.internalFileAttributes=e.readInt(2),this.externalFileAttributes=e.readInt(4),this.localHeaderOffset=e.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");e.skip(t),this.readExtraFields(e),this.parseZIP64ExtraField(e),this.fileComment=e.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var e=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),0==e&&(this.dosPermissions=63&this.externalFileAttributes),3==e&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||"/"!==this.fileNameStr.slice(-1)||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var e=n(this.extraFields[1].value);this.uncompressedSize===s.MAX_VALUE_32BITS&&(this.uncompressedSize=e.readInt(8)),this.compressedSize===s.MAX_VALUE_32BITS&&(this.compressedSize=e.readInt(8)),this.localHeaderOffset===s.MAX_VALUE_32BITS&&(this.localHeaderOffset=e.readInt(8)),this.diskNumberStart===s.MAX_VALUE_32BITS&&(this.diskNumberStart=e.readInt(4))}},readExtraFields:function(e){var t,r,n,i=e.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});e.index+4<i;)t=e.readInt(2),r=e.readInt(2),n=e.readData(r),this.extraFields[t]={id:t,length:r,value:n};e.setIndex(i)},handleUTF8:function(){var e=u.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=o.utf8decode(this.fileName),this.fileCommentStr=o.utf8decode(this.fileComment);else{var t=this.findExtraFieldUnicodePath();if(null!==t)this.fileNameStr=t;else{var r=s.transformTo(e,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(r)}var n=this.findExtraFieldUnicodeComment();if(null!==n)this.fileCommentStr=n;else{var i=s.transformTo(e,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(i)}}},findExtraFieldUnicodePath:function(){var e=this.extraFields[28789];if(e){var t=n(e.value);return 1!==t.readInt(1)?null:a(this.fileName)!==t.readInt(4)?null:o.utf8decode(t.readData(e.length-5))}return null},findExtraFieldUnicodeComment:function(){var e=this.extraFields[25461];if(e){var t=n(e.value);return 1!==t.readInt(1)?null:a(this.fileComment)!==t.readInt(4)?null:o.utf8decode(t.readData(e.length-5))}return null}},t.exports=l},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,t,r){"use strict";function n(e,t,r){this.name=e,this.dir=r.dir,this.date=r.date,this.comment=r.comment,this.unixPermissions=r.unixPermissions,this.dosPermissions=r.dosPermissions,this._data=t,this._dataBinary=r.binary,this.options={compression:r.compression,compressionOptions:r.compressionOptions}}var s=e("./stream/StreamHelper"),i=e("./stream/DataWorker"),a=e("./utf8"),o=e("./compressedObject"),h=e("./stream/GenericWorker");n.prototype={internalStream:function(e){var t=null,r="string";try{if(!e)throw new Error("No output type specified.");var n="string"===(r=e.toLowerCase())||"text"===r;"binarystring"!==r&&"text"!==r||(r="string"),t=this._decompressWorker();var i=!this._dataBinary;i&&!n&&(t=t.pipe(new a.Utf8EncodeWorker)),!i&&n&&(t=t.pipe(new a.Utf8DecodeWorker))}catch(e){(t=new h("error")).error(e)}return new s(t,r,"")},async:function(e,t){return this.internalStream(e).accumulate(t)},nodeStream:function(e,t){return this.internalStream(e||"nodebuffer").toNodejsStream(t)},_compressWorker:function(e,t){if(this._data instanceof o&&this._data.compression.magic===e.magic)return this._data.getCompressedWorker();var r=this._decompressWorker();return this._dataBinary||(r=r.pipe(new a.Utf8EncodeWorker)),o.createWorkerFrom(r,e,t)},_decompressWorker:function(){return this._data instanceof o?this._data.getContentWorker():this._data instanceof h?this._data:new i(this._data)}};for(var u=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],l=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},f=0;f<u.length;f++)n.prototype[u[f]]=l;t.exports=n},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,l,t){(function(t){"use strict";var r,n,e=t.MutationObserver||t.WebKitMutationObserver;if(e){var i=0,s=new e(u),a=t.document.createTextNode("");s.observe(a,{characterData:!0}),r=function(){a.data=i=++i%2}}else if(t.setImmediate||void 0===t.MessageChannel)r="document"in t&&"onreadystatechange"in t.document.createElement("script")?function(){var e=t.document.createElement("script");e.onreadystatechange=function(){u(),e.onreadystatechange=null,e.parentNode.removeChild(e),e=null},t.document.documentElement.appendChild(e)}:function(){setTimeout(u,0)};else{var o=new t.MessageChannel;o.port1.onmessage=u,r=function(){o.port2.postMessage(0)}}var h=[];function u(){var e,t;n=!0;for(var r=h.length;r;){for(t=h,h=[],e=-1;++e<r;)t[e]();r=h.length}n=!1}l.exports=function(e){1!==h.push(e)||n||r()}}).call(this,"undefined"!=typeof __webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],37:[function(e,t,r){"use strict";var i=e("immediate");function u(){}var l={},s=["REJECTED"],a=["FULFILLED"],n=["PENDING"];function o(e){if("function"!=typeof e)throw new TypeError("resolver must be a function");this.state=n,this.queue=[],this.outcome=void 0,e!==u&&d(this,e)}function h(e,t,r){this.promise=e,"function"==typeof t&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),"function"==typeof r&&(this.onRejected=r,this.callRejected=this.otherCallRejected)}function f(t,r,n){i(function(){var e;try{e=r(n)}catch(e){return l.reject(t,e)}e===t?l.reject(t,new TypeError("Cannot resolve promise with itself")):l.resolve(t,e)})}function c(e){var t=e&&e.then;if(e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof t)return function(){t.apply(e,arguments)}}function d(t,e){var r=!1;function n(e){r||(r=!0,l.reject(t,e))}function i(e){r||(r=!0,l.resolve(t,e))}var s=p(function(){e(i,n)});"error"===s.status&&n(s.value)}function p(e,t){var r={};try{r.value=e(t),r.status="success"}catch(e){r.status="error",r.value=e}return r}(t.exports=o).prototype.finally=function(t){if("function"!=typeof t)return this;var r=this.constructor;return this.then(function(e){return r.resolve(t()).then(function(){return e})},function(e){return r.resolve(t()).then(function(){throw e})})},o.prototype.catch=function(e){return this.then(null,e)},o.prototype.then=function(e,t){if("function"!=typeof e&&this.state===a||"function"!=typeof t&&this.state===s)return this;var r=new this.constructor(u);this.state!==n?f(r,this.state===a?e:t,this.outcome):this.queue.push(new h(r,e,t));return r},h.prototype.callFulfilled=function(e){l.resolve(this.promise,e)},h.prototype.otherCallFulfilled=function(e){f(this.promise,this.onFulfilled,e)},h.prototype.callRejected=function(e){l.reject(this.promise,e)},h.prototype.otherCallRejected=function(e){f(this.promise,this.onRejected,e)},l.resolve=function(e,t){var r=p(c,t);if("error"===r.status)return l.reject(e,r.value);var n=r.value;if(n)d(e,n);else{e.state=a,e.outcome=t;for(var i=-1,s=e.queue.length;++i<s;)e.queue[i].callFulfilled(t)}return e},l.reject=function(e,t){e.state=s,e.outcome=t;for(var r=-1,n=e.queue.length;++r<n;)e.queue[r].callRejected(t);return e},o.resolve=function(e){if(e instanceof this)return e;return l.resolve(new this(u),e)},o.reject=function(e){var t=new this(u);return l.reject(t,e)},o.all=function(e){var r=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var n=e.length,i=!1;if(!n)return this.resolve([]);var s=new Array(n),a=0,t=-1,o=new this(u);for(;++t<n;)h(e[t],t);return o;function h(e,t){r.resolve(e).then(function(e){s[t]=e,++a!==n||i||(i=!0,l.resolve(o,s))},function(e){i||(i=!0,l.reject(o,e))})}},o.race=function(e){var t=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var r=e.length,n=!1;if(!r)return this.resolve([]);var i=-1,s=new this(u);for(;++i<r;)a=e[i],t.resolve(a).then(function(e){n||(n=!0,l.resolve(s,e))},function(e){n||(n=!0,l.reject(s,e))});var a;return s}},{immediate:36}],38:[function(e,t,r){"use strict";var n={};(0,e("./lib/utils/common").assign)(n,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),t.exports=n},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,t,r){"use strict";var a=e("./zlib/deflate"),o=e("./utils/common"),h=e("./utils/strings"),i=e("./zlib/messages"),s=e("./zlib/zstream"),u=Object.prototype.toString,l=0,f=-1,c=0,d=8;function p(e){if(!(this instanceof p))return new p(e);this.options=o.assign({level:f,method:d,chunkSize:16384,windowBits:15,memLevel:8,strategy:c,to:""},e||{});var t=this.options;t.raw&&0<t.windowBits?t.windowBits=-t.windowBits:t.gzip&&0<t.windowBits&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new s,this.strm.avail_out=0;var r=a.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy);if(r!==l)throw new Error(i[r]);if(t.header&&a.deflateSetHeader(this.strm,t.header),t.dictionary){var n;if(n="string"==typeof t.dictionary?h.string2buf(t.dictionary):"[object ArrayBuffer]"===u.call(t.dictionary)?new Uint8Array(t.dictionary):t.dictionary,(r=a.deflateSetDictionary(this.strm,n))!==l)throw new Error(i[r]);this._dict_set=!0}}function n(e,t){var r=new p(t);if(r.push(e,!0),r.err)throw r.msg||i[r.err];return r.result}p.prototype.push=function(e,t){var r,n,i=this.strm,s=this.options.chunkSize;if(this.ended)return!1;n=t===~~t?t:!0===t?4:0,"string"==typeof e?i.input=h.string2buf(e):"[object ArrayBuffer]"===u.call(e)?i.input=new Uint8Array(e):i.input=e,i.next_in=0,i.avail_in=i.input.length;do{if(0===i.avail_out&&(i.output=new o.Buf8(s),i.next_out=0,i.avail_out=s),1!==(r=a.deflate(i,n))&&r!==l)return this.onEnd(r),!(this.ended=!0);0!==i.avail_out&&(0!==i.avail_in||4!==n&&2!==n)||("string"===this.options.to?this.onData(h.buf2binstring(o.shrinkBuf(i.output,i.next_out))):this.onData(o.shrinkBuf(i.output,i.next_out)))}while((0<i.avail_in||0===i.avail_out)&&1!==r);return 4===n?(r=a.deflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===l):2!==n||(this.onEnd(l),!(i.avail_out=0))},p.prototype.onData=function(e){this.chunks.push(e)},p.prototype.onEnd=function(e){e===l&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},r.Deflate=p,r.deflate=n,r.deflateRaw=function(e,t){return(t=t||{}).raw=!0,n(e,t)},r.gzip=function(e,t){return(t=t||{}).gzip=!0,n(e,t)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,t,r){"use strict";var c=e("./zlib/inflate"),d=e("./utils/common"),p=e("./utils/strings"),m=e("./zlib/constants"),n=e("./zlib/messages"),i=e("./zlib/zstream"),s=e("./zlib/gzheader"),_=Object.prototype.toString;function a(e){if(!(this instanceof a))return new a(e);this.options=d.assign({chunkSize:16384,windowBits:0,to:""},e||{});var t=this.options;t.raw&&0<=t.windowBits&&t.windowBits<16&&(t.windowBits=-t.windowBits,0===t.windowBits&&(t.windowBits=-15)),!(0<=t.windowBits&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),15<t.windowBits&&t.windowBits<48&&0==(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new i,this.strm.avail_out=0;var r=c.inflateInit2(this.strm,t.windowBits);if(r!==m.Z_OK)throw new Error(n[r]);this.header=new s,c.inflateGetHeader(this.strm,this.header)}function o(e,t){var r=new a(t);if(r.push(e,!0),r.err)throw r.msg||n[r.err];return r.result}a.prototype.push=function(e,t){var r,n,i,s,a,o,h=this.strm,u=this.options.chunkSize,l=this.options.dictionary,f=!1;if(this.ended)return!1;n=t===~~t?t:!0===t?m.Z_FINISH:m.Z_NO_FLUSH,"string"==typeof e?h.input=p.binstring2buf(e):"[object ArrayBuffer]"===_.call(e)?h.input=new Uint8Array(e):h.input=e,h.next_in=0,h.avail_in=h.input.length;do{if(0===h.avail_out&&(h.output=new d.Buf8(u),h.next_out=0,h.avail_out=u),(r=c.inflate(h,m.Z_NO_FLUSH))===m.Z_NEED_DICT&&l&&(o="string"==typeof l?p.string2buf(l):"[object ArrayBuffer]"===_.call(l)?new Uint8Array(l):l,r=c.inflateSetDictionary(this.strm,o)),r===m.Z_BUF_ERROR&&!0===f&&(r=m.Z_OK,f=!1),r!==m.Z_STREAM_END&&r!==m.Z_OK)return this.onEnd(r),!(this.ended=!0);h.next_out&&(0!==h.avail_out&&r!==m.Z_STREAM_END&&(0!==h.avail_in||n!==m.Z_FINISH&&n!==m.Z_SYNC_FLUSH)||("string"===this.options.to?(i=p.utf8border(h.output,h.next_out),s=h.next_out-i,a=p.buf2string(h.output,i),h.next_out=s,h.avail_out=u-s,s&&d.arraySet(h.output,h.output,i,s,0),this.onData(a)):this.onData(d.shrinkBuf(h.output,h.next_out)))),0===h.avail_in&&0===h.avail_out&&(f=!0)}while((0<h.avail_in||0===h.avail_out)&&r!==m.Z_STREAM_END);return r===m.Z_STREAM_END&&(n=m.Z_FINISH),n===m.Z_FINISH?(r=c.inflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===m.Z_OK):n!==m.Z_SYNC_FLUSH||(this.onEnd(m.Z_OK),!(h.avail_out=0))},a.prototype.onData=function(e){this.chunks.push(e)},a.prototype.onEnd=function(e){e===m.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=d.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},r.Inflate=a,r.inflate=o,r.inflateRaw=function(e,t){return(t=t||{}).raw=!0,o(e,t)},r.ungzip=o},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,t,r){"use strict";var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;r.assign=function(e){for(var t=Array.prototype.slice.call(arguments,1);t.length;){var r=t.shift();if(r){if("object"!=typeof r)throw new TypeError(r+"must be non-object");for(var n in r)r.hasOwnProperty(n)&&(e[n]=r[n])}}return e},r.shrinkBuf=function(e,t){return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)};var i={arraySet:function(e,t,r,n,i){if(t.subarray&&e.subarray)e.set(t.subarray(r,r+n),i);else for(var s=0;s<n;s++)e[i+s]=t[r+s]},flattenChunks:function(e){var t,r,n,i,s,a;for(t=n=0,r=e.length;t<r;t++)n+=e[t].length;for(a=new Uint8Array(n),t=i=0,r=e.length;t<r;t++)s=e[t],a.set(s,i),i+=s.length;return a}},s={arraySet:function(e,t,r,n,i){for(var s=0;s<n;s++)e[i+s]=t[r+s]},flattenChunks:function(e){return[].concat.apply([],e)}};r.setTyped=function(e){e?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,i)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,s))},r.setTyped(n)},{}],42:[function(e,t,r){"use strict";var h=e("./common"),i=!0,s=!0;try{String.fromCharCode.apply(null,[0])}catch(e){i=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(e){s=!1}for(var u=new h.Buf8(256),n=0;n<256;n++)u[n]=252<=n?6:248<=n?5:240<=n?4:224<=n?3:192<=n?2:1;function l(e,t){if(t<65537&&(e.subarray&&s||!e.subarray&&i))return String.fromCharCode.apply(null,h.shrinkBuf(e,t));for(var r="",n=0;n<t;n++)r+=String.fromCharCode(e[n]);return r}u[254]=u[254]=1,r.string2buf=function(e){var t,r,n,i,s,a=e.length,o=0;for(i=0;i<a;i++)55296==(64512&(r=e.charCodeAt(i)))&&i+1<a&&56320==(64512&(n=e.charCodeAt(i+1)))&&(r=65536+(r-55296<<10)+(n-56320),i++),o+=r<128?1:r<2048?2:r<65536?3:4;for(t=new h.Buf8(o),i=s=0;s<o;i++)55296==(64512&(r=e.charCodeAt(i)))&&i+1<a&&56320==(64512&(n=e.charCodeAt(i+1)))&&(r=65536+(r-55296<<10)+(n-56320),i++),r<128?t[s++]=r:(r<2048?t[s++]=192|r>>>6:(r<65536?t[s++]=224|r>>>12:(t[s++]=240|r>>>18,t[s++]=128|r>>>12&63),t[s++]=128|r>>>6&63),t[s++]=128|63&r);return t},r.buf2binstring=function(e){return l(e,e.length)},r.binstring2buf=function(e){for(var t=new h.Buf8(e.length),r=0,n=t.length;r<n;r++)t[r]=e.charCodeAt(r);return t},r.buf2string=function(e,t){var r,n,i,s,a=t||e.length,o=new Array(2*a);for(r=n=0;r<a;)if((i=e[r++])<128)o[n++]=i;else if(4<(s=u[i]))o[n++]=65533,r+=s-1;else{for(i&=2===s?31:3===s?15:7;1<s&&r<a;)i=i<<6|63&e[r++],s--;1<s?o[n++]=65533:i<65536?o[n++]=i:(i-=65536,o[n++]=55296|i>>10&1023,o[n++]=56320|1023&i)}return l(o,n)},r.utf8border=function(e,t){var r;for((t=t||e.length)>e.length&&(t=e.length),r=t-1;0<=r&&128==(192&e[r]);)r--;return r<0?t:0===r?t:r+u[e[r]]>t?r:t}},{"./common":41}],43:[function(e,t,r){"use strict";t.exports=function(e,t,r,n){for(var i=65535&e|0,s=e>>>16&65535|0,a=0;0!==r;){for(r-=a=2e3<r?2e3:r;s=s+(i=i+t[n++]|0)|0,--a;);i%=65521,s%=65521}return i|s<<16|0}},{}],44:[function(e,t,r){"use strict";t.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,t,r){"use strict";var o=function(){for(var e,t=[],r=0;r<256;r++){e=r;for(var n=0;n<8;n++)e=1&e?3988292384^e>>>1:e>>>1;t[r]=e}return t}();t.exports=function(e,t,r,n){var i=o,s=n+r;e^=-1;for(var a=n;a<s;a++)e=e>>>8^i[255&(e^t[a])];return-1^e}},{}],46:[function(e,t,r){"use strict";var h,c=e("../utils/common"),u=e("./trees"),d=e("./adler32"),p=e("./crc32"),n=e("./messages"),l=0,f=4,m=0,_=-2,g=-1,b=4,i=2,v=8,y=9,s=286,a=30,o=19,w=2*s+1,k=15,x=3,S=258,z=S+x+1,C=42,E=113,A=1,I=2,O=3,B=4;function R(e,t){return e.msg=n[t],t}function T(e){return(e<<1)-(4<e?9:0)}function D(e){for(var t=e.length;0<=--t;)e[t]=0}function F(e){var t=e.state,r=t.pending;r>e.avail_out&&(r=e.avail_out),0!==r&&(c.arraySet(e.output,t.pending_buf,t.pending_out,r,e.next_out),e.next_out+=r,t.pending_out+=r,e.total_out+=r,e.avail_out-=r,t.pending-=r,0===t.pending&&(t.pending_out=0))}function N(e,t){u._tr_flush_block(e,0<=e.block_start?e.block_start:-1,e.strstart-e.block_start,t),e.block_start=e.strstart,F(e.strm)}function U(e,t){e.pending_buf[e.pending++]=t}function P(e,t){e.pending_buf[e.pending++]=t>>>8&255,e.pending_buf[e.pending++]=255&t}function L(e,t){var r,n,i=e.max_chain_length,s=e.strstart,a=e.prev_length,o=e.nice_match,h=e.strstart>e.w_size-z?e.strstart-(e.w_size-z):0,u=e.window,l=e.w_mask,f=e.prev,c=e.strstart+S,d=u[s+a-1],p=u[s+a];e.prev_length>=e.good_match&&(i>>=2),o>e.lookahead&&(o=e.lookahead);do{if(u[(r=t)+a]===p&&u[r+a-1]===d&&u[r]===u[s]&&u[++r]===u[s+1]){s+=2,r++;do{}while(u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&s<c);if(n=S-(c-s),s=c-S,a<n){if(e.match_start=t,o<=(a=n))break;d=u[s+a-1],p=u[s+a]}}}while((t=f[t&l])>h&&0!=--i);return a<=e.lookahead?a:e.lookahead}function j(e){var t,r,n,i,s,a,o,h,u,l,f=e.w_size;do{if(i=e.window_size-e.lookahead-e.strstart,e.strstart>=f+(f-z)){for(c.arraySet(e.window,e.window,f,f,0),e.match_start-=f,e.strstart-=f,e.block_start-=f,t=r=e.hash_size;n=e.head[--t],e.head[t]=f<=n?n-f:0,--r;);for(t=r=f;n=e.prev[--t],e.prev[t]=f<=n?n-f:0,--r;);i+=f}if(0===e.strm.avail_in)break;if(a=e.strm,o=e.window,h=e.strstart+e.lookahead,u=i,l=void 0,l=a.avail_in,u<l&&(l=u),r=0===l?0:(a.avail_in-=l,c.arraySet(o,a.input,a.next_in,l,h),1===a.state.wrap?a.adler=d(a.adler,o,l,h):2===a.state.wrap&&(a.adler=p(a.adler,o,l,h)),a.next_in+=l,a.total_in+=l,l),e.lookahead+=r,e.lookahead+e.insert>=x)for(s=e.strstart-e.insert,e.ins_h=e.window[s],e.ins_h=(e.ins_h<<e.hash_shift^e.window[s+1])&e.hash_mask;e.insert&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[s+x-1])&e.hash_mask,e.prev[s&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=s,s++,e.insert--,!(e.lookahead+e.insert<x)););}while(e.lookahead<z&&0!==e.strm.avail_in)}function Z(e,t){for(var r,n;;){if(e.lookahead<z){if(j(e),e.lookahead<z&&t===l)return A;if(0===e.lookahead)break}if(r=0,e.lookahead>=x&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+x-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!==r&&e.strstart-r<=e.w_size-z&&(e.match_length=L(e,r)),e.match_length>=x)if(n=u._tr_tally(e,e.strstart-e.match_start,e.match_length-x),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=x){for(e.match_length--;e.strstart++,e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+x-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart,0!=--e.match_length;);e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+1])&e.hash_mask;else n=u._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++;if(n&&(N(e,!1),0===e.strm.avail_out))return A}return e.insert=e.strstart<x-1?e.strstart:x-1,t===f?(N(e,!0),0===e.strm.avail_out?O:B):e.last_lit&&(N(e,!1),0===e.strm.avail_out)?A:I}function W(e,t){for(var r,n,i;;){if(e.lookahead<z){if(j(e),e.lookahead<z&&t===l)return A;if(0===e.lookahead)break}if(r=0,e.lookahead>=x&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+x-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=x-1,0!==r&&e.prev_length<e.max_lazy_match&&e.strstart-r<=e.w_size-z&&(e.match_length=L(e,r),e.match_length<=5&&(1===e.strategy||e.match_length===x&&4096<e.strstart-e.match_start)&&(e.match_length=x-1)),e.prev_length>=x&&e.match_length<=e.prev_length){for(i=e.strstart+e.lookahead-x,n=u._tr_tally(e,e.strstart-1-e.prev_match,e.prev_length-x),e.lookahead-=e.prev_length-1,e.prev_length-=2;++e.strstart<=i&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+x-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!=--e.prev_length;);if(e.match_available=0,e.match_length=x-1,e.strstart++,n&&(N(e,!1),0===e.strm.avail_out))return A}else if(e.match_available){if((n=u._tr_tally(e,0,e.window[e.strstart-1]))&&N(e,!1),e.strstart++,e.lookahead--,0===e.strm.avail_out)return A}else e.match_available=1,e.strstart++,e.lookahead--}return e.match_available&&(n=u._tr_tally(e,0,e.window[e.strstart-1]),e.match_available=0),e.insert=e.strstart<x-1?e.strstart:x-1,t===f?(N(e,!0),0===e.strm.avail_out?O:B):e.last_lit&&(N(e,!1),0===e.strm.avail_out)?A:I}function M(e,t,r,n,i){this.good_length=e,this.max_lazy=t,this.nice_length=r,this.max_chain=n,this.func=i}function H(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=v,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new c.Buf16(2*w),this.dyn_dtree=new c.Buf16(2*(2*a+1)),this.bl_tree=new c.Buf16(2*(2*o+1)),D(this.dyn_ltree),D(this.dyn_dtree),D(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new c.Buf16(k+1),this.heap=new c.Buf16(2*s+1),D(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new c.Buf16(2*s+1),D(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function G(e){var t;return e&&e.state?(e.total_in=e.total_out=0,e.data_type=i,(t=e.state).pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap?C:E,e.adler=2===t.wrap?0:1,t.last_flush=l,u._tr_init(t),m):R(e,_)}function K(e){var t=G(e);return t===m&&function(e){e.window_size=2*e.w_size,D(e.head),e.max_lazy_match=h[e.level].max_lazy,e.good_match=h[e.level].good_length,e.nice_match=h[e.level].nice_length,e.max_chain_length=h[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=x-1,e.match_available=0,e.ins_h=0}(e.state),t}function Y(e,t,r,n,i,s){if(!e)return _;var a=1;if(t===g&&(t=6),n<0?(a=0,n=-n):15<n&&(a=2,n-=16),i<1||y<i||r!==v||n<8||15<n||t<0||9<t||s<0||b<s)return R(e,_);8===n&&(n=9);var o=new H;return(e.state=o).strm=e,o.wrap=a,o.gzhead=null,o.w_bits=n,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=i+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+x-1)/x),o.window=new c.Buf8(2*o.w_size),o.head=new c.Buf16(o.hash_size),o.prev=new c.Buf16(o.w_size),o.lit_bufsize=1<<i+6,o.pending_buf_size=4*o.lit_bufsize,o.pending_buf=new c.Buf8(o.pending_buf_size),o.d_buf=1*o.lit_bufsize,o.l_buf=3*o.lit_bufsize,o.level=t,o.strategy=s,o.method=r,K(e)}h=[new M(0,0,0,0,function(e,t){var r=65535;for(r>e.pending_buf_size-5&&(r=e.pending_buf_size-5);;){if(e.lookahead<=1){if(j(e),0===e.lookahead&&t===l)return A;if(0===e.lookahead)break}e.strstart+=e.lookahead,e.lookahead=0;var n=e.block_start+r;if((0===e.strstart||e.strstart>=n)&&(e.lookahead=e.strstart-n,e.strstart=n,N(e,!1),0===e.strm.avail_out))return A;if(e.strstart-e.block_start>=e.w_size-z&&(N(e,!1),0===e.strm.avail_out))return A}return e.insert=0,t===f?(N(e,!0),0===e.strm.avail_out?O:B):(e.strstart>e.block_start&&(N(e,!1),e.strm.avail_out),A)}),new M(4,4,8,4,Z),new M(4,5,16,8,Z),new M(4,6,32,32,Z),new M(4,4,16,16,W),new M(8,16,32,32,W),new M(8,16,128,128,W),new M(8,32,128,256,W),new M(32,128,258,1024,W),new M(32,258,258,4096,W)],r.deflateInit=function(e,t){return Y(e,t,v,15,8,0)},r.deflateInit2=Y,r.deflateReset=K,r.deflateResetKeep=G,r.deflateSetHeader=function(e,t){return e&&e.state?2!==e.state.wrap?_:(e.state.gzhead=t,m):_},r.deflate=function(e,t){var r,n,i,s;if(!e||!e.state||5<t||t<0)return e?R(e,_):_;if(n=e.state,!e.output||!e.input&&0!==e.avail_in||666===n.status&&t!==f)return R(e,0===e.avail_out?-5:_);if(n.strm=e,r=n.last_flush,n.last_flush=t,n.status===C)if(2===n.wrap)e.adler=0,U(n,31),U(n,139),U(n,8),n.gzhead?(U(n,(n.gzhead.text?1:0)+(n.gzhead.hcrc?2:0)+(n.gzhead.extra?4:0)+(n.gzhead.name?8:0)+(n.gzhead.comment?16:0)),U(n,255&n.gzhead.time),U(n,n.gzhead.time>>8&255),U(n,n.gzhead.time>>16&255),U(n,n.gzhead.time>>24&255),U(n,9===n.level?2:2<=n.strategy||n.level<2?4:0),U(n,255&n.gzhead.os),n.gzhead.extra&&n.gzhead.extra.length&&(U(n,255&n.gzhead.extra.length),U(n,n.gzhead.extra.length>>8&255)),n.gzhead.hcrc&&(e.adler=p(e.adler,n.pending_buf,n.pending,0)),n.gzindex=0,n.status=69):(U(n,0),U(n,0),U(n,0),U(n,0),U(n,0),U(n,9===n.level?2:2<=n.strategy||n.level<2?4:0),U(n,3),n.status=E);else{var a=v+(n.w_bits-8<<4)<<8;a|=(2<=n.strategy||n.level<2?0:n.level<6?1:6===n.level?2:3)<<6,0!==n.strstart&&(a|=32),a+=31-a%31,n.status=E,P(n,a),0!==n.strstart&&(P(n,e.adler>>>16),P(n,65535&e.adler)),e.adler=1}if(69===n.status)if(n.gzhead.extra){for(i=n.pending;n.gzindex<(65535&n.gzhead.extra.length)&&(n.pending!==n.pending_buf_size||(n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),F(e),i=n.pending,n.pending!==n.pending_buf_size));)U(n,255&n.gzhead.extra[n.gzindex]),n.gzindex++;n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),n.gzindex===n.gzhead.extra.length&&(n.gzindex=0,n.status=73)}else n.status=73;if(73===n.status)if(n.gzhead.name){i=n.pending;do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),F(e),i=n.pending,n.pending===n.pending_buf_size)){s=1;break}s=n.gzindex<n.gzhead.name.length?255&n.gzhead.name.charCodeAt(n.gzindex++):0,U(n,s)}while(0!==s);n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),0===s&&(n.gzindex=0,n.status=91)}else n.status=91;if(91===n.status)if(n.gzhead.comment){i=n.pending;do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),F(e),i=n.pending,n.pending===n.pending_buf_size)){s=1;break}s=n.gzindex<n.gzhead.comment.length?255&n.gzhead.comment.charCodeAt(n.gzindex++):0,U(n,s)}while(0!==s);n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),0===s&&(n.status=103)}else n.status=103;if(103===n.status&&(n.gzhead.hcrc?(n.pending+2>n.pending_buf_size&&F(e),n.pending+2<=n.pending_buf_size&&(U(n,255&e.adler),U(n,e.adler>>8&255),e.adler=0,n.status=E)):n.status=E),0!==n.pending){if(F(e),0===e.avail_out)return n.last_flush=-1,m}else if(0===e.avail_in&&T(t)<=T(r)&&t!==f)return R(e,-5);if(666===n.status&&0!==e.avail_in)return R(e,-5);if(0!==e.avail_in||0!==n.lookahead||t!==l&&666!==n.status){var o=2===n.strategy?function(e,t){for(var r;;){if(0===e.lookahead&&(j(e),0===e.lookahead)){if(t===l)return A;break}if(e.match_length=0,r=u._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,r&&(N(e,!1),0===e.strm.avail_out))return A}return e.insert=0,t===f?(N(e,!0),0===e.strm.avail_out?O:B):e.last_lit&&(N(e,!1),0===e.strm.avail_out)?A:I}(n,t):3===n.strategy?function(e,t){for(var r,n,i,s,a=e.window;;){if(e.lookahead<=S){if(j(e),e.lookahead<=S&&t===l)return A;if(0===e.lookahead)break}if(e.match_length=0,e.lookahead>=x&&0<e.strstart&&(n=a[i=e.strstart-1])===a[++i]&&n===a[++i]&&n===a[++i]){s=e.strstart+S;do{}while(n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&i<s);e.match_length=S-(s-i),e.match_length>e.lookahead&&(e.match_length=e.lookahead)}if(e.match_length>=x?(r=u._tr_tally(e,1,e.match_length-x),e.lookahead-=e.match_length,e.strstart+=e.match_length,e.match_length=0):(r=u._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++),r&&(N(e,!1),0===e.strm.avail_out))return A}return e.insert=0,t===f?(N(e,!0),0===e.strm.avail_out?O:B):e.last_lit&&(N(e,!1),0===e.strm.avail_out)?A:I}(n,t):h[n.level].func(n,t);if(o!==O&&o!==B||(n.status=666),o===A||o===O)return 0===e.avail_out&&(n.last_flush=-1),m;if(o===I&&(1===t?u._tr_align(n):5!==t&&(u._tr_stored_block(n,0,0,!1),3===t&&(D(n.head),0===n.lookahead&&(n.strstart=0,n.block_start=0,n.insert=0))),F(e),0===e.avail_out))return n.last_flush=-1,m}return t!==f?m:n.wrap<=0?1:(2===n.wrap?(U(n,255&e.adler),U(n,e.adler>>8&255),U(n,e.adler>>16&255),U(n,e.adler>>24&255),U(n,255&e.total_in),U(n,e.total_in>>8&255),U(n,e.total_in>>16&255),U(n,e.total_in>>24&255)):(P(n,e.adler>>>16),P(n,65535&e.adler)),F(e),0<n.wrap&&(n.wrap=-n.wrap),0!==n.pending?m:1)},r.deflateEnd=function(e){var t;return e&&e.state?(t=e.state.status)!==C&&69!==t&&73!==t&&91!==t&&103!==t&&t!==E&&666!==t?R(e,_):(e.state=null,t===E?R(e,-3):m):_},r.deflateSetDictionary=function(e,t){var r,n,i,s,a,o,h,u,l=t.length;if(!e||!e.state)return _;if(2===(s=(r=e.state).wrap)||1===s&&r.status!==C||r.lookahead)return _;for(1===s&&(e.adler=d(e.adler,t,l,0)),r.wrap=0,l>=r.w_size&&(0===s&&(D(r.head),r.strstart=0,r.block_start=0,r.insert=0),u=new c.Buf8(r.w_size),c.arraySet(u,t,l-r.w_size,r.w_size,0),t=u,l=r.w_size),a=e.avail_in,o=e.next_in,h=e.input,e.avail_in=l,e.next_in=0,e.input=t,j(r);r.lookahead>=x;){for(n=r.strstart,i=r.lookahead-(x-1);r.ins_h=(r.ins_h<<r.hash_shift^r.window[n+x-1])&r.hash_mask,r.prev[n&r.w_mask]=r.head[r.ins_h],r.head[r.ins_h]=n,n++,--i;);r.strstart=n,r.lookahead=x-1,j(r)}return r.strstart+=r.lookahead,r.block_start=r.strstart,r.insert=r.lookahead,r.lookahead=0,r.match_length=r.prev_length=x-1,r.match_available=0,e.next_in=o,e.input=h,e.avail_in=a,r.wrap=s,m},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,t,r){"use strict";t.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,t,r){"use strict";t.exports=function(e,t){var r,n,i,s,a,o,h,u,l,f,c,d,p,m,_,g,b,v,y,w,k,x,S,z,C;r=e.state,n=e.next_in,z=e.input,i=n+(e.avail_in-5),s=e.next_out,C=e.output,a=s-(t-e.avail_out),o=s+(e.avail_out-257),h=r.dmax,u=r.wsize,l=r.whave,f=r.wnext,c=r.window,d=r.hold,p=r.bits,m=r.lencode,_=r.distcode,g=(1<<r.lenbits)-1,b=(1<<r.distbits)-1;e:do{p<15&&(d+=z[n++]<<p,p+=8,d+=z[n++]<<p,p+=8),v=m[d&g];t:for(;;){if(d>>>=y=v>>>24,p-=y,0===(y=v>>>16&255))C[s++]=65535&v;else{if(!(16&y)){if(0==(64&y)){v=m[(65535&v)+(d&(1<<y)-1)];continue t}if(32&y){r.mode=12;break e}e.msg="invalid literal/length code",r.mode=30;break e}w=65535&v,(y&=15)&&(p<y&&(d+=z[n++]<<p,p+=8),w+=d&(1<<y)-1,d>>>=y,p-=y),p<15&&(d+=z[n++]<<p,p+=8,d+=z[n++]<<p,p+=8),v=_[d&b];r:for(;;){if(d>>>=y=v>>>24,p-=y,!(16&(y=v>>>16&255))){if(0==(64&y)){v=_[(65535&v)+(d&(1<<y)-1)];continue r}e.msg="invalid distance code",r.mode=30;break e}if(k=65535&v,p<(y&=15)&&(d+=z[n++]<<p,(p+=8)<y&&(d+=z[n++]<<p,p+=8)),h<(k+=d&(1<<y)-1)){e.msg="invalid distance too far back",r.mode=30;break e}if(d>>>=y,p-=y,(y=s-a)<k){if(l<(y=k-y)&&r.sane){e.msg="invalid distance too far back",r.mode=30;break e}if(S=c,(x=0)===f){if(x+=u-y,y<w){for(w-=y;C[s++]=c[x++],--y;);x=s-k,S=C}}else if(f<y){if(x+=u+f-y,(y-=f)<w){for(w-=y;C[s++]=c[x++],--y;);if(x=0,f<w){for(w-=y=f;C[s++]=c[x++],--y;);x=s-k,S=C}}}else if(x+=f-y,y<w){for(w-=y;C[s++]=c[x++],--y;);x=s-k,S=C}for(;2<w;)C[s++]=S[x++],C[s++]=S[x++],C[s++]=S[x++],w-=3;w&&(C[s++]=S[x++],1<w&&(C[s++]=S[x++]))}else{for(x=s-k;C[s++]=C[x++],C[s++]=C[x++],C[s++]=C[x++],2<(w-=3););w&&(C[s++]=C[x++],1<w&&(C[s++]=C[x++]))}break}}break}}while(n<i&&s<o);n-=w=p>>3,d&=(1<<(p-=w<<3))-1,e.next_in=n,e.next_out=s,e.avail_in=n<i?i-n+5:5-(n-i),e.avail_out=s<o?o-s+257:257-(s-o),r.hold=d,r.bits=p}},{}],49:[function(e,t,r){"use strict";var I=e("../utils/common"),O=e("./adler32"),B=e("./crc32"),R=e("./inffast"),T=e("./inftrees"),D=1,F=2,N=0,U=-2,P=1,n=852,i=592;function L(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function s(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new I.Buf16(320),this.work=new I.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function a(e){var t;return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=1&t.wrap),t.mode=P,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new I.Buf32(n),t.distcode=t.distdyn=new I.Buf32(i),t.sane=1,t.back=-1,N):U}function o(e){var t;return e&&e.state?((t=e.state).wsize=0,t.whave=0,t.wnext=0,a(e)):U}function h(e,t){var r,n;return e&&e.state?(n=e.state,t<0?(r=0,t=-t):(r=1+(t>>4),t<48&&(t&=15)),t&&(t<8||15<t)?U:(null!==n.window&&n.wbits!==t&&(n.window=null),n.wrap=r,n.wbits=t,o(e))):U}function u(e,t){var r,n;return e?(n=new s,(e.state=n).window=null,(r=h(e,t))!==N&&(e.state=null),r):U}var l,f,c=!0;function j(e){if(c){var t;for(l=new I.Buf32(512),f=new I.Buf32(32),t=0;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(T(D,e.lens,0,288,l,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;T(F,e.lens,0,32,f,0,e.work,{bits:5}),c=!1}e.lencode=l,e.lenbits=9,e.distcode=f,e.distbits=5}function Z(e,t,r,n){var i,s=e.state;return null===s.window&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new I.Buf8(s.wsize)),n>=s.wsize?(I.arraySet(s.window,t,r-s.wsize,s.wsize,0),s.wnext=0,s.whave=s.wsize):(n<(i=s.wsize-s.wnext)&&(i=n),I.arraySet(s.window,t,r-n,i,s.wnext),(n-=i)?(I.arraySet(s.window,t,r-n,n,0),s.wnext=n,s.whave=s.wsize):(s.wnext+=i,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=i))),0}r.inflateReset=o,r.inflateReset2=h,r.inflateResetKeep=a,r.inflateInit=function(e){return u(e,15)},r.inflateInit2=u,r.inflate=function(e,t){var r,n,i,s,a,o,h,u,l,f,c,d,p,m,_,g,b,v,y,w,k,x,S,z,C=0,E=new I.Buf8(4),A=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&0!==e.avail_in)return U;12===(r=e.state).mode&&(r.mode=13),a=e.next_out,i=e.output,h=e.avail_out,s=e.next_in,n=e.input,o=e.avail_in,u=r.hold,l=r.bits,f=o,c=h,x=N;e:for(;;)switch(r.mode){case P:if(0===r.wrap){r.mode=13;break}for(;l<16;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(2&r.wrap&&35615===u){E[r.check=0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0),l=u=0,r.mode=2;break}if(r.flags=0,r.head&&(r.head.done=!1),!(1&r.wrap)||(((255&u)<<8)+(u>>8))%31){e.msg="incorrect header check",r.mode=30;break}if(8!=(15&u)){e.msg="unknown compression method",r.mode=30;break}if(l-=4,k=8+(15&(u>>>=4)),0===r.wbits)r.wbits=k;else if(k>r.wbits){e.msg="invalid window size",r.mode=30;break}r.dmax=1<<k,e.adler=r.check=1,r.mode=512&u?10:12,l=u=0;break;case 2:for(;l<16;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(r.flags=u,8!=(255&r.flags)){e.msg="unknown compression method",r.mode=30;break}if(57344&r.flags){e.msg="unknown header flags set",r.mode=30;break}r.head&&(r.head.text=u>>8&1),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0)),l=u=0,r.mode=3;case 3:for(;l<32;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}r.head&&(r.head.time=u),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,E[2]=u>>>16&255,E[3]=u>>>24&255,r.check=B(r.check,E,4,0)),l=u=0,r.mode=4;case 4:for(;l<16;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}r.head&&(r.head.xflags=255&u,r.head.os=u>>8),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0)),l=u=0,r.mode=5;case 5:if(1024&r.flags){for(;l<16;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}r.length=u,r.head&&(r.head.extra_len=u),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0)),l=u=0}else r.head&&(r.head.extra=null);r.mode=6;case 6:if(1024&r.flags&&(o<(d=r.length)&&(d=o),d&&(r.head&&(k=r.head.extra_len-r.length,r.head.extra||(r.head.extra=new Array(r.head.extra_len)),I.arraySet(r.head.extra,n,s,d,k)),512&r.flags&&(r.check=B(r.check,n,d,s)),o-=d,s+=d,r.length-=d),r.length))break e;r.length=0,r.mode=7;case 7:if(2048&r.flags){if(0===o)break e;for(d=0;k=n[s+d++],r.head&&k&&r.length<65536&&(r.head.name+=String.fromCharCode(k)),k&&d<o;);if(512&r.flags&&(r.check=B(r.check,n,d,s)),o-=d,s+=d,k)break e}else r.head&&(r.head.name=null);r.length=0,r.mode=8;case 8:if(4096&r.flags){if(0===o)break e;for(d=0;k=n[s+d++],r.head&&k&&r.length<65536&&(r.head.comment+=String.fromCharCode(k)),k&&d<o;);if(512&r.flags&&(r.check=B(r.check,n,d,s)),o-=d,s+=d,k)break e}else r.head&&(r.head.comment=null);r.mode=9;case 9:if(512&r.flags){for(;l<16;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(u!==(65535&r.check)){e.msg="header crc mismatch",r.mode=30;break}l=u=0}r.head&&(r.head.hcrc=r.flags>>9&1,r.head.done=!0),e.adler=r.check=0,r.mode=12;break;case 10:for(;l<32;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}e.adler=r.check=L(u),l=u=0,r.mode=11;case 11:if(0===r.havedict)return e.next_out=a,e.avail_out=h,e.next_in=s,e.avail_in=o,r.hold=u,r.bits=l,2;e.adler=r.check=1,r.mode=12;case 12:if(5===t||6===t)break e;case 13:if(r.last){u>>>=7&l,l-=7&l,r.mode=27;break}for(;l<3;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}switch(r.last=1&u,l-=1,3&(u>>>=1)){case 0:r.mode=14;break;case 1:if(j(r),r.mode=20,6!==t)break;u>>>=2,l-=2;break e;case 2:r.mode=17;break;case 3:e.msg="invalid block type",r.mode=30}u>>>=2,l-=2;break;case 14:for(u>>>=7&l,l-=7&l;l<32;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if((65535&u)!=(u>>>16^65535)){e.msg="invalid stored block lengths",r.mode=30;break}if(r.length=65535&u,l=u=0,r.mode=15,6===t)break e;case 15:r.mode=16;case 16:if(d=r.length){if(o<d&&(d=o),h<d&&(d=h),0===d)break e;I.arraySet(i,n,s,d,a),o-=d,s+=d,h-=d,a+=d,r.length-=d;break}r.mode=12;break;case 17:for(;l<14;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(r.nlen=257+(31&u),u>>>=5,l-=5,r.ndist=1+(31&u),u>>>=5,l-=5,r.ncode=4+(15&u),u>>>=4,l-=4,286<r.nlen||30<r.ndist){e.msg="too many length or distance symbols",r.mode=30;break}r.have=0,r.mode=18;case 18:for(;r.have<r.ncode;){for(;l<3;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}r.lens[A[r.have++]]=7&u,u>>>=3,l-=3}for(;r.have<19;)r.lens[A[r.have++]]=0;if(r.lencode=r.lendyn,r.lenbits=7,S={bits:r.lenbits},x=T(0,r.lens,0,19,r.lencode,0,r.work,S),r.lenbits=S.bits,x){e.msg="invalid code lengths set",r.mode=30;break}r.have=0,r.mode=19;case 19:for(;r.have<r.nlen+r.ndist;){for(;g=(C=r.lencode[u&(1<<r.lenbits)-1])>>>16&255,b=65535&C,!((_=C>>>24)<=l);){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(b<16)u>>>=_,l-=_,r.lens[r.have++]=b;else{if(16===b){for(z=_+2;l<z;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(u>>>=_,l-=_,0===r.have){e.msg="invalid bit length repeat",r.mode=30;break}k=r.lens[r.have-1],d=3+(3&u),u>>>=2,l-=2}else if(17===b){for(z=_+3;l<z;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}l-=_,k=0,d=3+(7&(u>>>=_)),u>>>=3,l-=3}else{for(z=_+7;l<z;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}l-=_,k=0,d=11+(127&(u>>>=_)),u>>>=7,l-=7}if(r.have+d>r.nlen+r.ndist){e.msg="invalid bit length repeat",r.mode=30;break}for(;d--;)r.lens[r.have++]=k}}if(30===r.mode)break;if(0===r.lens[256]){e.msg="invalid code -- missing end-of-block",r.mode=30;break}if(r.lenbits=9,S={bits:r.lenbits},x=T(D,r.lens,0,r.nlen,r.lencode,0,r.work,S),r.lenbits=S.bits,x){e.msg="invalid literal/lengths set",r.mode=30;break}if(r.distbits=6,r.distcode=r.distdyn,S={bits:r.distbits},x=T(F,r.lens,r.nlen,r.ndist,r.distcode,0,r.work,S),r.distbits=S.bits,x){e.msg="invalid distances set",r.mode=30;break}if(r.mode=20,6===t)break e;case 20:r.mode=21;case 21:if(6<=o&&258<=h){e.next_out=a,e.avail_out=h,e.next_in=s,e.avail_in=o,r.hold=u,r.bits=l,R(e,c),a=e.next_out,i=e.output,h=e.avail_out,s=e.next_in,n=e.input,o=e.avail_in,u=r.hold,l=r.bits,12===r.mode&&(r.back=-1);break}for(r.back=0;g=(C=r.lencode[u&(1<<r.lenbits)-1])>>>16&255,b=65535&C,!((_=C>>>24)<=l);){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(g&&0==(240&g)){for(v=_,y=g,w=b;g=(C=r.lencode[w+((u&(1<<v+y)-1)>>v)])>>>16&255,b=65535&C,!(v+(_=C>>>24)<=l);){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}u>>>=v,l-=v,r.back+=v}if(u>>>=_,l-=_,r.back+=_,r.length=b,0===g){r.mode=26;break}if(32&g){r.back=-1,r.mode=12;break}if(64&g){e.msg="invalid literal/length code",r.mode=30;break}r.extra=15&g,r.mode=22;case 22:if(r.extra){for(z=r.extra;l<z;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}r.length+=u&(1<<r.extra)-1,u>>>=r.extra,l-=r.extra,r.back+=r.extra}r.was=r.length,r.mode=23;case 23:for(;g=(C=r.distcode[u&(1<<r.distbits)-1])>>>16&255,b=65535&C,!((_=C>>>24)<=l);){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(0==(240&g)){for(v=_,y=g,w=b;g=(C=r.distcode[w+((u&(1<<v+y)-1)>>v)])>>>16&255,b=65535&C,!(v+(_=C>>>24)<=l);){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}u>>>=v,l-=v,r.back+=v}if(u>>>=_,l-=_,r.back+=_,64&g){e.msg="invalid distance code",r.mode=30;break}r.offset=b,r.extra=15&g,r.mode=24;case 24:if(r.extra){for(z=r.extra;l<z;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}r.offset+=u&(1<<r.extra)-1,u>>>=r.extra,l-=r.extra,r.back+=r.extra}if(r.offset>r.dmax){e.msg="invalid distance too far back",r.mode=30;break}r.mode=25;case 25:if(0===h)break e;if(d=c-h,r.offset>d){if((d=r.offset-d)>r.whave&&r.sane){e.msg="invalid distance too far back",r.mode=30;break}p=d>r.wnext?(d-=r.wnext,r.wsize-d):r.wnext-d,d>r.length&&(d=r.length),m=r.window}else m=i,p=a-r.offset,d=r.length;for(h<d&&(d=h),h-=d,r.length-=d;i[a++]=m[p++],--d;);0===r.length&&(r.mode=21);break;case 26:if(0===h)break e;i[a++]=r.length,h--,r.mode=21;break;case 27:if(r.wrap){for(;l<32;){if(0===o)break e;o--,u|=n[s++]<<l,l+=8}if(c-=h,e.total_out+=c,r.total+=c,c&&(e.adler=r.check=r.flags?B(r.check,i,c,a-c):O(r.check,i,c,a-c)),c=h,(r.flags?u:L(u))!==r.check){e.msg="incorrect data check",r.mode=30;break}l=u=0}r.mode=28;case 28:if(r.wrap&&r.flags){for(;l<32;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(u!==(4294967295&r.total)){e.msg="incorrect length check",r.mode=30;break}l=u=0}r.mode=29;case 29:x=1;break e;case 30:x=-3;break e;case 31:return-4;case 32:default:return U}return e.next_out=a,e.avail_out=h,e.next_in=s,e.avail_in=o,r.hold=u,r.bits=l,(r.wsize||c!==e.avail_out&&r.mode<30&&(r.mode<27||4!==t))&&Z(e,e.output,e.next_out,c-e.avail_out)?(r.mode=31,-4):(f-=e.avail_in,c-=e.avail_out,e.total_in+=f,e.total_out+=c,r.total+=c,r.wrap&&c&&(e.adler=r.check=r.flags?B(r.check,i,c,e.next_out-c):O(r.check,i,c,e.next_out-c)),e.data_type=r.bits+(r.last?64:0)+(12===r.mode?128:0)+(20===r.mode||15===r.mode?256:0),(0==f&&0===c||4===t)&&x===N&&(x=-5),x)},r.inflateEnd=function(e){if(!e||!e.state)return U;var t=e.state;return t.window&&(t.window=null),e.state=null,N},r.inflateGetHeader=function(e,t){var r;return e&&e.state?0==(2&(r=e.state).wrap)?U:((r.head=t).done=!1,N):U},r.inflateSetDictionary=function(e,t){var r,n=t.length;return e&&e.state?0!==(r=e.state).wrap&&11!==r.mode?U:11===r.mode&&O(1,t,n,0)!==r.check?-3:Z(e,t,n,n)?(r.mode=31,-4):(r.havedict=1,N):U},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,t,r){"use strict";var D=e("../utils/common"),F=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],N=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],U=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],P=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];t.exports=function(e,t,r,n,i,s,a,o){var h,u,l,f,c,d,p,m,_,g=o.bits,b=0,v=0,y=0,w=0,k=0,x=0,S=0,z=0,C=0,E=0,A=null,I=0,O=new D.Buf16(16),B=new D.Buf16(16),R=null,T=0;for(b=0;b<=15;b++)O[b]=0;for(v=0;v<n;v++)O[t[r+v]]++;for(k=g,w=15;1<=w&&0===O[w];w--);if(w<k&&(k=w),0===w)return i[s++]=20971520,i[s++]=20971520,o.bits=1,0;for(y=1;y<w&&0===O[y];y++);for(k<y&&(k=y),b=z=1;b<=15;b++)if(z<<=1,(z-=O[b])<0)return-1;if(0<z&&(0===e||1!==w))return-1;for(B[1]=0,b=1;b<15;b++)B[b+1]=B[b]+O[b];for(v=0;v<n;v++)0!==t[r+v]&&(a[B[t[r+v]]++]=v);if(d=0===e?(A=R=a,19):1===e?(A=F,I-=257,R=N,T-=257,256):(A=U,R=P,-1),b=y,c=s,S=v=E=0,l=-1,f=(C=1<<(x=k))-1,1===e&&852<C||2===e&&592<C)return 1;for(;;){for(p=b-S,_=a[v]<d?(m=0,a[v]):a[v]>d?(m=R[T+a[v]],A[I+a[v]]):(m=96,0),h=1<<b-S,y=u=1<<x;i[c+(E>>S)+(u-=h)]=p<<24|m<<16|_|0,0!==u;);for(h=1<<b-1;E&h;)h>>=1;if(0!==h?(E&=h-1,E+=h):E=0,v++,0==--O[b]){if(b===w)break;b=t[r+a[v]]}if(k<b&&(E&f)!==l){for(0===S&&(S=k),c+=y,z=1<<(x=b-S);x+S<w&&!((z-=O[x+S])<=0);)x++,z<<=1;if(C+=1<<x,1===e&&852<C||2===e&&592<C)return 1;i[l=E&f]=k<<24|x<<16|c-s|0}}return 0!==E&&(i[c+E]=b-S<<24|64<<16|0),o.bits=k,0}},{"../utils/common":41}],51:[function(e,t,r){"use strict";t.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,t,r){"use strict";var i=e("../utils/common"),o=0,h=1;function n(e){for(var t=e.length;0<=--t;)e[t]=0}var s=0,a=29,u=256,l=u+1+a,f=30,c=19,_=2*l+1,g=15,d=16,p=7,m=256,b=16,v=17,y=18,w=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],k=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],x=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],S=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],z=new Array(2*(l+2));n(z);var C=new Array(2*f);n(C);var E=new Array(512);n(E);var A=new Array(256);n(A);var I=new Array(a);n(I);var O,B,R,T=new Array(f);function D(e,t,r,n,i){this.static_tree=e,this.extra_bits=t,this.extra_base=r,this.elems=n,this.max_length=i,this.has_stree=e&&e.length}function F(e,t){this.dyn_tree=e,this.max_code=0,this.stat_desc=t}function N(e){return e<256?E[e]:E[256+(e>>>7)]}function U(e,t){e.pending_buf[e.pending++]=255&t,e.pending_buf[e.pending++]=t>>>8&255}function P(e,t,r){e.bi_valid>d-r?(e.bi_buf|=t<<e.bi_valid&65535,U(e,e.bi_buf),e.bi_buf=t>>d-e.bi_valid,e.bi_valid+=r-d):(e.bi_buf|=t<<e.bi_valid&65535,e.bi_valid+=r)}function L(e,t,r){P(e,r[2*t],r[2*t+1])}function j(e,t){for(var r=0;r|=1&e,e>>>=1,r<<=1,0<--t;);return r>>>1}function Z(e,t,r){var n,i,s=new Array(g+1),a=0;for(n=1;n<=g;n++)s[n]=a=a+r[n-1]<<1;for(i=0;i<=t;i++){var o=e[2*i+1];0!==o&&(e[2*i]=j(s[o]++,o))}}function W(e){var t;for(t=0;t<l;t++)e.dyn_ltree[2*t]=0;for(t=0;t<f;t++)e.dyn_dtree[2*t]=0;for(t=0;t<c;t++)e.bl_tree[2*t]=0;e.dyn_ltree[2*m]=1,e.opt_len=e.static_len=0,e.last_lit=e.matches=0}function M(e){8<e.bi_valid?U(e,e.bi_buf):0<e.bi_valid&&(e.pending_buf[e.pending++]=e.bi_buf),e.bi_buf=0,e.bi_valid=0}function H(e,t,r,n){var i=2*t,s=2*r;return e[i]<e[s]||e[i]===e[s]&&n[t]<=n[r]}function G(e,t,r){for(var n=e.heap[r],i=r<<1;i<=e.heap_len&&(i<e.heap_len&&H(t,e.heap[i+1],e.heap[i],e.depth)&&i++,!H(t,n,e.heap[i],e.depth));)e.heap[r]=e.heap[i],r=i,i<<=1;e.heap[r]=n}function K(e,t,r){var n,i,s,a,o=0;if(0!==e.last_lit)for(;n=e.pending_buf[e.d_buf+2*o]<<8|e.pending_buf[e.d_buf+2*o+1],i=e.pending_buf[e.l_buf+o],o++,0===n?L(e,i,t):(L(e,(s=A[i])+u+1,t),0!==(a=w[s])&&P(e,i-=I[s],a),L(e,s=N(--n),r),0!==(a=k[s])&&P(e,n-=T[s],a)),o<e.last_lit;);L(e,m,t)}function Y(e,t){var r,n,i,s=t.dyn_tree,a=t.stat_desc.static_tree,o=t.stat_desc.has_stree,h=t.stat_desc.elems,u=-1;for(e.heap_len=0,e.heap_max=_,r=0;r<h;r++)0!==s[2*r]?(e.heap[++e.heap_len]=u=r,e.depth[r]=0):s[2*r+1]=0;for(;e.heap_len<2;)s[2*(i=e.heap[++e.heap_len]=u<2?++u:0)]=1,e.depth[i]=0,e.opt_len--,o&&(e.static_len-=a[2*i+1]);for(t.max_code=u,r=e.heap_len>>1;1<=r;r--)G(e,s,r);for(i=h;r=e.heap[1],e.heap[1]=e.heap[e.heap_len--],G(e,s,1),n=e.heap[1],e.heap[--e.heap_max]=r,e.heap[--e.heap_max]=n,s[2*i]=s[2*r]+s[2*n],e.depth[i]=(e.depth[r]>=e.depth[n]?e.depth[r]:e.depth[n])+1,s[2*r+1]=s[2*n+1]=i,e.heap[1]=i++,G(e,s,1),2<=e.heap_len;);e.heap[--e.heap_max]=e.heap[1],function(e,t){var r,n,i,s,a,o,h=t.dyn_tree,u=t.max_code,l=t.stat_desc.static_tree,f=t.stat_desc.has_stree,c=t.stat_desc.extra_bits,d=t.stat_desc.extra_base,p=t.stat_desc.max_length,m=0;for(s=0;s<=g;s++)e.bl_count[s]=0;for(h[2*e.heap[e.heap_max]+1]=0,r=e.heap_max+1;r<_;r++)p<(s=h[2*h[2*(n=e.heap[r])+1]+1]+1)&&(s=p,m++),h[2*n+1]=s,u<n||(e.bl_count[s]++,a=0,d<=n&&(a=c[n-d]),o=h[2*n],e.opt_len+=o*(s+a),f&&(e.static_len+=o*(l[2*n+1]+a)));if(0!==m){do{for(s=p-1;0===e.bl_count[s];)s--;e.bl_count[s]--,e.bl_count[s+1]+=2,e.bl_count[p]--,m-=2}while(0<m);for(s=p;0!==s;s--)for(n=e.bl_count[s];0!==n;)u<(i=e.heap[--r])||(h[2*i+1]!==s&&(e.opt_len+=(s-h[2*i+1])*h[2*i],h[2*i+1]=s),n--)}}(e,t),Z(s,u,e.bl_count)}function X(e,t,r){var n,i,s=-1,a=t[1],o=0,h=7,u=4;for(0===a&&(h=138,u=3),t[2*(r+1)+1]=65535,n=0;n<=r;n++)i=a,a=t[2*(n+1)+1],++o<h&&i===a||(o<u?e.bl_tree[2*i]+=o:0!==i?(i!==s&&e.bl_tree[2*i]++,e.bl_tree[2*b]++):o<=10?e.bl_tree[2*v]++:e.bl_tree[2*y]++,s=i,u=(o=0)===a?(h=138,3):i===a?(h=6,3):(h=7,4))}function V(e,t,r){var n,i,s=-1,a=t[1],o=0,h=7,u=4;for(0===a&&(h=138,u=3),n=0;n<=r;n++)if(i=a,a=t[2*(n+1)+1],!(++o<h&&i===a)){if(o<u)for(;L(e,i,e.bl_tree),0!=--o;);else 0!==i?(i!==s&&(L(e,i,e.bl_tree),o--),L(e,b,e.bl_tree),P(e,o-3,2)):o<=10?(L(e,v,e.bl_tree),P(e,o-3,3)):(L(e,y,e.bl_tree),P(e,o-11,7));s=i,u=(o=0)===a?(h=138,3):i===a?(h=6,3):(h=7,4)}}n(T);var q=!1;function J(e,t,r,n){P(e,(s<<1)+(n?1:0),3),function(e,t,r,n){M(e),n&&(U(e,r),U(e,~r)),i.arraySet(e.pending_buf,e.window,t,r,e.pending),e.pending+=r}(e,t,r,!0)}r._tr_init=function(e){q||(function(){var e,t,r,n,i,s=new Array(g+1);for(n=r=0;n<a-1;n++)for(I[n]=r,e=0;e<1<<w[n];e++)A[r++]=n;for(A[r-1]=n,n=i=0;n<16;n++)for(T[n]=i,e=0;e<1<<k[n];e++)E[i++]=n;for(i>>=7;n<f;n++)for(T[n]=i<<7,e=0;e<1<<k[n]-7;e++)E[256+i++]=n;for(t=0;t<=g;t++)s[t]=0;for(e=0;e<=143;)z[2*e+1]=8,e++,s[8]++;for(;e<=255;)z[2*e+1]=9,e++,s[9]++;for(;e<=279;)z[2*e+1]=7,e++,s[7]++;for(;e<=287;)z[2*e+1]=8,e++,s[8]++;for(Z(z,l+1,s),e=0;e<f;e++)C[2*e+1]=5,C[2*e]=j(e,5);O=new D(z,w,u+1,l,g),B=new D(C,k,0,f,g),R=new D(new Array(0),x,0,c,p)}(),q=!0),e.l_desc=new F(e.dyn_ltree,O),e.d_desc=new F(e.dyn_dtree,B),e.bl_desc=new F(e.bl_tree,R),e.bi_buf=0,e.bi_valid=0,W(e)},r._tr_stored_block=J,r._tr_flush_block=function(e,t,r,n){var i,s,a=0;0<e.level?(2===e.strm.data_type&&(e.strm.data_type=function(e){var t,r=4093624447;for(t=0;t<=31;t++,r>>>=1)if(1&r&&0!==e.dyn_ltree[2*t])return o;if(0!==e.dyn_ltree[18]||0!==e.dyn_ltree[20]||0!==e.dyn_ltree[26])return h;for(t=32;t<u;t++)if(0!==e.dyn_ltree[2*t])return h;return o}(e)),Y(e,e.l_desc),Y(e,e.d_desc),a=function(e){var t;for(X(e,e.dyn_ltree,e.l_desc.max_code),X(e,e.dyn_dtree,e.d_desc.max_code),Y(e,e.bl_desc),t=c-1;3<=t&&0===e.bl_tree[2*S[t]+1];t--);return e.opt_len+=3*(t+1)+5+5+4,t}(e),i=e.opt_len+3+7>>>3,(s=e.static_len+3+7>>>3)<=i&&(i=s)):i=s=r+5,r+4<=i&&-1!==t?J(e,t,r,n):4===e.strategy||s===i?(P(e,2+(n?1:0),3),K(e,z,C)):(P(e,4+(n?1:0),3),function(e,t,r,n){var i;for(P(e,t-257,5),P(e,r-1,5),P(e,n-4,4),i=0;i<n;i++)P(e,e.bl_tree[2*S[i]+1],3);V(e,e.dyn_ltree,t-1),V(e,e.dyn_dtree,r-1)}(e,e.l_desc.max_code+1,e.d_desc.max_code+1,a+1),K(e,e.dyn_ltree,e.dyn_dtree)),W(e),n&&M(e)},r._tr_tally=function(e,t,r){return e.pending_buf[e.d_buf+2*e.last_lit]=t>>>8&255,e.pending_buf[e.d_buf+2*e.last_lit+1]=255&t,e.pending_buf[e.l_buf+e.last_lit]=255&r,e.last_lit++,0===t?e.dyn_ltree[2*r]++:(e.matches++,t--,e.dyn_ltree[2*(A[r]+u+1)]++,e.dyn_dtree[2*N(t)]++),e.last_lit===e.lit_bufsize-1},r._tr_align=function(e){P(e,2,3),L(e,m,z),function(e){16===e.bi_valid?(U(e,e.bi_buf),e.bi_buf=0,e.bi_valid=0):8<=e.bi_valid&&(e.pending_buf[e.pending++]=255&e.bi_buf,e.bi_buf>>=8,e.bi_valid-=8)}(e)}},{"../utils/common":41}],53:[function(e,t,r){"use strict";t.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,t,r){(function(e){!function(r,n){"use strict";if(!r.setImmediate){var i,s,t,a,o=1,h={},u=!1,l=r.document,e=Object.getPrototypeOf&&Object.getPrototypeOf(r);e=e&&e.setTimeout?e:r,i="[object process]"==={}.toString.call(r.process)?function(e){process.nextTick(function(){c(e)})}:function(){if(r.postMessage&&!r.importScripts){var e=!0,t=r.onmessage;return r.onmessage=function(){e=!1},r.postMessage("","*"),r.onmessage=t,e}}()?(a="setImmediate$"+Math.random()+"$",r.addEventListener?r.addEventListener("message",d,!1):r.attachEvent("onmessage",d),function(e){r.postMessage(a+e,"*")}):r.MessageChannel?((t=new MessageChannel).port1.onmessage=function(e){c(e.data)},function(e){t.port2.postMessage(e)}):l&&"onreadystatechange"in l.createElement("script")?(s=l.documentElement,function(e){var t=l.createElement("script");t.onreadystatechange=function(){c(e),t.onreadystatechange=null,s.removeChild(t),t=null},s.appendChild(t)}):function(e){setTimeout(c,0,e)},e.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),r=0;r<t.length;r++)t[r]=arguments[r+1];var n={callback:e,args:t};return h[o]=n,i(o),o++},e.clearImmediate=f}function f(e){delete h[e]}function c(e){if(u)setTimeout(c,0,e);else{var t=h[e];if(t){u=!0;try{!function(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}(t)}finally{f(e),u=!1}}}}function d(e){e.source===r&&"string"==typeof e.data&&0===e.data.indexOf(a)&&c(+e.data.slice(a.length))}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,"undefined"!=typeof __webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[10])(10)});

/***/ }),

/***/ 615:
/*!***********************************************************!*\
  !*** ../../node_modules/modern-screenshot/dist/index.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContext: () => (/* binding */ gt),
/* harmony export */   destroyContext: () => (/* binding */ Ft),
/* harmony export */   domToBlob: () => (/* binding */ Yt),
/* harmony export */   domToCanvas: () => (/* binding */ Y),
/* harmony export */   domToDataUrl: () => (/* binding */ $),
/* harmony export */   domToForeignObjectSvg: () => (/* binding */ Ht),
/* harmony export */   domToImage: () => (/* binding */ Jt),
/* harmony export */   domToJpeg: () => (/* binding */ Kt),
/* harmony export */   domToPixel: () => (/* binding */ Qt),
/* harmony export */   domToPng: () => (/* binding */ Zt),
/* harmony export */   domToSvg: () => (/* binding */ Xt),
/* harmony export */   domToWebp: () => (/* binding */ er),
/* harmony export */   loadMedia: () => (/* binding */ P),
/* harmony export */   waitUntilLoad: () => (/* binding */ ft)
/* harmony export */ });
var Pe = Object.defineProperty, _e = Object.defineProperties;
var Ue = Object.getOwnPropertyDescriptors;
var L = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, ee = Object.prototype.propertyIsEnumerable;
var te = Math.pow, Q = (e, t, r) => t in e ? Pe(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, T = (e, t) => {
  for (var r in t || (t = {}))
    Z.call(t, r) && Q(e, r, t[r]);
  if (L)
    for (var r of L(t))
      ee.call(t, r) && Q(e, r, t[r]);
  return e;
}, R = (e, t) => _e(e, Ue(t));
var re = (e, t) => {
  var r = {};
  for (var n in e)
    Z.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && L)
    for (var n of L(e))
      t.indexOf(n) < 0 && ee.call(e, n) && (r[n] = e[n]);
  return r;
};
var S = (e, t, r) => new Promise((n, a) => {
  var s = (l) => {
    try {
      i(r.next(l));
    } catch (u) {
      a(u);
    }
  }, o = (l) => {
    try {
      i(r.throw(l));
    } catch (u) {
      a(u);
    }
  }, i = (l) => l.done ? n(l.value) : Promise.resolve(l.value).then(s, o);
  i((r = r.apply(e, t)).next());
});
function ue(e, t) {
  return e[13] = 1, e[14] = t >> 8, e[15] = t & 255, e[16] = t >> 8, e[17] = t & 255, e;
}
const fe = "p".charCodeAt(0), de = "H".charCodeAt(0), me = "Y".charCodeAt(0), ge = "s".charCodeAt(0);
let q;
function $e() {
  const e = new Int32Array(256);
  for (let t = 0; t < 256; t++) {
    let r = t;
    for (let n = 0; n < 8; n++)
      r = r & 1 ? 3988292384 ^ r >>> 1 : r >>> 1;
    e[t] = r;
  }
  return e;
}
function Be(e) {
  let t = -1;
  q || (q = $e());
  for (let r = 0; r < e.length; r++)
    t = q[(t ^ e[r]) & 255] ^ t >>> 8;
  return t ^ -1;
}
function Le(e) {
  const t = e.length - 1;
  for (let r = t; r >= 4; r--)
    if (e[r - 4] === 9 && e[r - 3] === fe && e[r - 2] === de && e[r - 1] === me && e[r] === ge)
      return r - 3;
  return 0;
}
function he(e, t, r = !1) {
  const n = new Uint8Array(13);
  t *= 39.3701, n[0] = fe, n[1] = de, n[2] = me, n[3] = ge, n[4] = t >>> 24, n[5] = t >>> 16, n[6] = t >>> 8, n[7] = t & 255, n[8] = n[4], n[9] = n[5], n[10] = n[6], n[11] = n[7], n[12] = 1;
  const a = Be(n), s = new Uint8Array(4);
  if (s[0] = a >>> 24, s[1] = a >>> 16, s[2] = a >>> 8, s[3] = a & 255, r) {
    const o = Le(e);
    return e.set(n, o), e.set(s, o + 13), e;
  } else {
    const o = new Uint8Array(4);
    o[0] = 0, o[1] = 0, o[2] = 0, o[3] = 9;
    const i = new Uint8Array(54);
    return i.set(e, 0), i.set(o, 33), i.set(n, 37), i.set(s, 50), i;
  }
}
const Me = "AAlwSFlz", Oe = "AAAJcEhZ", We = "AAAACXBI";
function je(e) {
  let t = e.indexOf(Me);
  return t === -1 && (t = e.indexOf(Oe)), t === -1 && (t = e.indexOf(We)), t;
}
const H = "[modern-screenshot]", x = typeof window != "undefined", qe = x && "Worker" in window, we = x && "atob" in window, Ve = x && "btoa" in window;
var le;
const z = x ? (le = window.navigator) == null ? void 0 : le.userAgent : "", pe = z.includes("Chrome"), M = z.includes("AppleWebKit") && !pe, X = z.includes("Firefox"), He = (e) => e && "__CONTEXT__" in e, ze = (e) => e.constructor.name === "CSSFontFaceRule", Xe = (e) => e.constructor.name === "CSSImportRule", A = (e) => e.nodeType === 1, U = (e) => typeof e.className == "object", ye = (e) => e.tagName === "image", Ge = (e) => e.tagName === "use", F = (e) => A(e) && typeof e.style != "undefined" && !U(e), Ye = (e) => e.nodeType === 8, Je = (e) => e.nodeType === 3, D = (e) => e.tagName === "IMG", O = (e) => e.tagName === "VIDEO", Ke = (e) => e.tagName === "CANVAS", ne = (e) => e.tagName === "TEXTAREA", Qe = (e) => e.tagName === "INPUT", Ze = (e) => e.tagName === "STYLE", et = (e) => e.tagName === "SCRIPT", tt = (e) => e.tagName === "SELECT", rt = (e) => e.tagName === "SLOT", nt = (e) => e.tagName === "IFRAME", C = (...e) => console.warn(H, ...e), ot = (e) => console.time(`${H} ${e}`), at = (e) => console.timeEnd(`${H} ${e}`), st = (e) => {
  var r;
  const t = (r = e == null ? void 0 : e.createElement) == null ? void 0 : r.call(e, "canvas");
  return t && (t.height = t.width = 1), t && "toDataURL" in t && Boolean(t.toDataURL("image/webp").includes("image/webp"));
}, V = (e) => e.startsWith("data:");
function be(e, t) {
  if (e.match(/^[a-z]+:\/\//i))
    return e;
  if (x && e.match(/^\/\//))
    return window.location.protocol + e;
  if (e.match(/^[a-z]+:/i) || !x)
    return e;
  const r = W().implementation.createHTMLDocument(), n = r.createElement("base"), a = r.createElement("a");
  return r.head.appendChild(n), r.body.appendChild(a), t && (n.href = t), a.href = e, a.href;
}
function W(e) {
  var t;
  return (t = e && A(e) ? e == null ? void 0 : e.ownerDocument : e) != null ? t : window.document;
}
const j = "http://www.w3.org/2000/svg";
function Se(e, t, r) {
  const n = W(r).createElementNS(j, "svg");
  return n.setAttributeNS(null, "width", e.toString()), n.setAttributeNS(null, "height", t.toString()), n.setAttributeNS(null, "viewBox", `0 0 ${e} ${t}`), n;
}
function Ee(e, t) {
  let r = new XMLSerializer().serializeToString(e);
  return t && (r = r.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\uD800-\uDFFF\uFFFE\uFFFF]/ug, "")), `data:image/svg+xml;charset=utf-8,${encodeURIComponent(r)}`;
}
function it(e, t = "image/png", r = 1) {
  return S(this, null, function* () {
    try {
      return yield new Promise((n, a) => {
        e.toBlob((s) => {
          s ? n(s) : a(new Error("Blob is null"));
        }, t, r);
      });
    } catch (n) {
      if (we)
        return C("Failed canvas to blob", { type: t, quality: r }, n), ct(e.toDataURL(t, r));
      throw n;
    }
  });
}
function ct(e) {
  var i, l;
  const [t, r] = e.split(","), n = (l = (i = t.match(/data:(.+);/)) == null ? void 0 : i[1]) != null ? l : void 0, a = window.atob(r), s = a.length, o = new Uint8Array(s);
  for (let u = 0; u < s; u += 1)
    o[u] = a.charCodeAt(u);
  return new Blob([o], { type: n });
}
function Ce(e, t) {
  return new Promise((r, n) => {
    const a = new FileReader();
    a.onload = () => r(a.result), a.onerror = () => n(a.error), a.onabort = () => n(new Error(`Failed read blob to ${t}`)), t === "dataUrl" ? a.readAsDataURL(e) : t === "arrayBuffer" && a.readAsArrayBuffer(e);
  });
}
const lt = (e) => Ce(e, "dataUrl"), ut = (e) => Ce(e, "arrayBuffer");
function k(e, t) {
  const r = W(t).createElement("img");
  return r.decoding = "sync", r.loading = "eager", r.src = e, r;
}
function P(e, t) {
  return new Promise((r) => {
    const { timeout: n, ownerDocument: a, onError: s } = t != null ? t : {}, o = typeof e == "string" ? k(e, W(a)) : e;
    let i = null, l = null;
    function u() {
      r(o), i && clearTimeout(i), l == null || l();
    }
    if (n && (i = setTimeout(u, n)), O(o)) {
      const c = o.currentSrc || o.src;
      if (!c)
        return o.poster ? P(o.poster, t).then(r) : u();
      if (o.readyState >= 2)
        return u();
      const f = u, d = (m) => {
        C(
          "Failed video load",
          c,
          m
        ), s == null || s(m), u();
      };
      l = () => {
        o.removeEventListener("loadeddata", f), o.removeEventListener("error", d);
      }, o.addEventListener("loadeddata", f, { once: !0 }), o.addEventListener("error", d, { once: !0 });
    } else {
      const c = ye(o) ? o.href.baseVal : o.currentSrc || o.src;
      if (!c)
        return u();
      const f = () => S(this, null, function* () {
        if (D(o) && "decode" in o)
          try {
            yield o.decode();
          } catch (m) {
            C(
              "Failed to decode image, trying to render anyway",
              o.dataset.originalSrc || c,
              m
            );
          }
        u();
      }), d = (m) => {
        C(
          "Failed image load",
          o.dataset.originalSrc || c,
          m
        ), u();
      };
      if (D(o) && o.complete)
        return f();
      l = () => {
        o.removeEventListener("load", f), o.removeEventListener("error", d);
      }, o.addEventListener("load", f, { once: !0 }), o.addEventListener("error", d, { once: !0 });
    }
  });
}
function ft(e, t) {
  return S(this, null, function* () {
    F(e) && (D(e) || O(e) ? yield P(e, { timeout: t }) : yield Promise.all(
      ["img", "video"].flatMap((r) => Array.from(e.querySelectorAll(r)).map((n) => P(n, { timeout: t })))
    ));
  });
}
const ve = function() {
  let t = 0;
  const r = () => (
    // eslint-disable-next-line no-bitwise
    `0000${(Math.random() * te(36, 4) << 0).toString(36)}`.slice(-4)
  );
  return () => (t += 1, `u${r()}${t}`);
}();
function Te(e) {
  return e == null ? void 0 : e.split(",").map((t) => t.trim().replace(/"|'/g, "").toLowerCase()).filter(Boolean);
}
function dt(e) {
  return {
    time: (t) => e && ot(t),
    timeEnd: (t) => e && at(t),
    warn: (...t) => e && C(...t)
  };
}
function mt(e) {
  return {
    cache: e ? "no-cache" : "force-cache"
  };
}
function N(e, t) {
  return S(this, null, function* () {
    return He(e) ? e : gt(e, R(T({}, t), { autoDestruct: !0 }));
  });
}
function gt(e, t) {
  return S(this, null, function* () {
    var m, h, w, y, g;
    const { scale: r = 1, workerUrl: n, workerNumber: a = 1 } = t || {}, s = Boolean(t == null ? void 0 : t.debug), o = (m = t == null ? void 0 : t.features) != null ? m : !0, i = (h = e.ownerDocument) != null ? h : x ? window.document : void 0, l = (y = (w = e.ownerDocument) == null ? void 0 : w.defaultView) != null ? y : x ? window : void 0, u = /* @__PURE__ */ new Map(), c = R(T({
      // Options
      width: 0,
      height: 0,
      quality: 1,
      type: "image/png",
      scale: r,
      backgroundColor: null,
      style: null,
      filter: null,
      maximumCanvasSize: 0,
      timeout: 3e4,
      progress: null,
      debug: s,
      fetch: T({
        requestInit: mt((g = t == null ? void 0 : t.fetch) == null ? void 0 : g.bypassingCache),
        placeholderImage: "data:image/png;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
        bypassingCache: !1
      }, t == null ? void 0 : t.fetch),
      fetchFn: null,
      font: {},
      drawImageInterval: 100,
      workerUrl: null,
      workerNumber: a,
      onCloneNode: null,
      onEmbedNode: null,
      onCreateForeignObjectSvg: null,
      includeStyleProperties: null,
      autoDestruct: !1
    }, t), {
      // InternalContext
      __CONTEXT__: !0,
      log: dt(s),
      node: e,
      ownerDocument: i,
      ownerWindow: l,
      dpi: r === 1 ? null : 96 * r,
      svgStyleElement: Ae(i),
      svgDefsElement: i == null ? void 0 : i.createElementNS(j, "defs"),
      svgStyles: /* @__PURE__ */ new Map(),
      defaultComputedStyles: /* @__PURE__ */ new Map(),
      workers: [
        ...new Array(
          qe && n && a ? a : 0
        )
      ].map(() => {
        try {
          const b = new Worker(n);
          return b.onmessage = (p) => S(this, null, function* () {
            var I, J, B, K;
            const { url: E, result: v } = p.data;
            v ? (J = (I = u.get(E)) == null ? void 0 : I.resolve) == null || J.call(I, v) : (K = (B = u.get(E)) == null ? void 0 : B.reject) == null || K.call(B, new Error(`Error receiving message from worker: ${E}`));
          }), b.onmessageerror = (p) => {
            var v, I;
            const { url: E } = p.data;
            (I = (v = u.get(E)) == null ? void 0 : v.reject) == null || I.call(v, new Error(`Error receiving message from worker: ${E}`));
          }, b;
        } catch (b) {
          return C("Failed to new Worker", b), null;
        }
      }).filter(Boolean),
      fontFamilies: /* @__PURE__ */ new Set(),
      fontCssTexts: /* @__PURE__ */ new Map(),
      acceptOfImage: `${[
        st(i) && "image/webp",
        "image/svg+xml",
        "image/*",
        "*/*"
      ].filter(Boolean).join(",")};q=0.8`,
      requests: u,
      drawImageCount: 0,
      tasks: [],
      features: o,
      isEnable: (b) => {
        var p, E;
        return b === "restoreScrollPosition" ? typeof o == "boolean" ? !1 : (p = o[b]) != null ? p : !1 : typeof o == "boolean" ? o : (E = o[b]) != null ? E : !0;
      }
    });
    c.log.time("wait until load"), yield ft(e, c.timeout), c.log.timeEnd("wait until load");
    const { width: f, height: d } = ht(e, c);
    return c.width = f, c.height = d, c;
  });
}
function Ae(e) {
  if (!e)
    return;
  const t = e.createElement("style"), r = t.ownerDocument.createTextNode(`
.______background-clip--text {
  background-clip: text;
  -webkit-background-clip: text;
}
`);
  return t.appendChild(r), t;
}
function ht(e, t) {
  let { width: r, height: n } = t;
  if (A(e) && (!r || !n)) {
    const a = e.getBoundingClientRect();
    r = r || a.width || Number(e.getAttribute("width")) || 0, n = n || a.height || Number(e.getAttribute("height")) || 0;
  }
  return { width: r, height: n };
}
function wt(e, t) {
  return S(this, null, function* () {
    const {
      log: r,
      timeout: n,
      drawImageCount: a,
      drawImageInterval: s
    } = t;
    r.time("image to canvas");
    const o = yield P(e, { timeout: n }), { canvas: i, context2d: l } = pt(e.ownerDocument, t), u = () => {
      try {
        l == null || l.drawImage(o, 0, 0, i.width, i.height);
      } catch (c) {
        C("Failed to drawImage", c);
      }
    };
    if (u(), t.isEnable("fixSvgXmlDecode"))
      for (let c = 0; c < a; c++)
        yield new Promise((f) => {
          setTimeout(() => {
            u(), f();
          }, c + s);
        });
    return t.drawImageCount = 0, r.timeEnd("image to canvas"), i;
  });
}
function pt(e, t) {
  const { width: r, height: n, scale: a, backgroundColor: s, maximumCanvasSize: o } = t, i = e.createElement("canvas");
  i.width = Math.floor(r * a), i.height = Math.floor(n * a), i.style.width = `${r}px`, i.style.height = `${n}px`, o && (i.width > o || i.height > o) && (i.width > o && i.height > o ? i.width > i.height ? (i.height *= o / i.width, i.width = o) : (i.width *= o / i.height, i.height = o) : i.width > o ? (i.height *= o / i.width, i.width = o) : (i.width *= o / i.height, i.height = o));
  const l = i.getContext("2d");
  return l && s && (l.fillStyle = s, l.fillRect(0, 0, i.width, i.height)), { canvas: i, context2d: l };
}
const yt = [
  "width",
  "height",
  "-webkit-text-fill-color"
], bt = [
  "stroke",
  "fill"
];
function Ne(e, t, r) {
  var y;
  const { defaultComputedStyles: n, ownerDocument: a } = r, s = e.nodeName.toLowerCase(), o = U(e) && s !== "svg", i = o ? bt.map((g) => [g, e.getAttribute(g)]).filter(([, g]) => g !== null) : [], l = [
    o && "svg",
    s,
    i.map((g, b) => `${g}=${b}`).join(","),
    t
  ].filter(Boolean).join(":");
  if (n.has(l))
    return n.get(l);
  let u = r.sandbox;
  if (!u)
    try {
      a && (u = a.createElement("iframe"), u.id = `__SANDBOX__-${ve()}`, u.width = "0", u.height = "0", u.style.visibility = "hidden", u.style.position = "fixed", a.body.appendChild(u), (y = u.contentWindow) == null || y.document.write('<!DOCTYPE html><meta charset="UTF-8"><title></title><body>'), r.sandbox = u);
    } catch (g) {
      C("Failed to create iframe sandbox", g);
    }
  if (!u)
    return /* @__PURE__ */ new Map();
  const c = u.contentWindow;
  if (!c)
    return /* @__PURE__ */ new Map();
  const f = c.document;
  let d, m;
  o ? (d = f.createElementNS(j, "svg"), m = d.ownerDocument.createElementNS(d.namespaceURI, s), i.forEach(([g, b]) => {
    m.setAttributeNS(null, g, b);
  }), d.appendChild(m)) : d = m = f.createElement(s), m.textContent = " ", f.body.appendChild(d);
  const h = c.getComputedStyle(m, t), w = /* @__PURE__ */ new Map();
  for (let g = h.length, b = 0; b < g; b++) {
    const p = h.item(b);
    yt.includes(p) || w.set(p, h.getPropertyValue(p));
  }
  return f.body.removeChild(d), n.set(l, w), w;
}
function Ie(e, t, r) {
  var i;
  const n = /* @__PURE__ */ new Map(), a = [], s = /* @__PURE__ */ new Map();
  if (r)
    for (const l of r)
      o(l);
  else
    for (let l = e.length, u = 0; u < l; u++) {
      const c = e.item(u);
      o(c);
    }
  for (let l = a.length, u = 0; u < l; u++)
    (i = s.get(a[u])) == null || i.forEach((c, f) => n.set(f, c));
  function o(l) {
    const u = e.getPropertyValue(l), c = e.getPropertyPriority(l), f = l.lastIndexOf("-"), d = f > -1 ? l.substring(0, f) : void 0;
    if (d) {
      let m = s.get(d);
      m || (m = /* @__PURE__ */ new Map(), s.set(d, m)), m.set(l, [u, c]);
    }
    t.get(l) === u && !c || (d ? a.push(d) : n.set(l, [u, c]));
  }
  return n;
}
const St = [
  ":before",
  ":after"
  // ':placeholder', TODO
], Et = [
  ":-webkit-scrollbar",
  ":-webkit-scrollbar-button",
  // ':-webkit-scrollbar:horizontal', TODO
  ":-webkit-scrollbar-thumb",
  ":-webkit-scrollbar-track",
  ":-webkit-scrollbar-track-piece",
  // ':-webkit-scrollbar:vertical', TODO
  ":-webkit-scrollbar-corner",
  ":-webkit-resizer"
];
function Ct(e, t, r, n) {
  const { ownerWindow: a, svgStyleElement: s, svgStyles: o, currentNodeStyle: i } = n;
  if (!s || !a)
    return;
  function l(u) {
    var b;
    const c = a.getComputedStyle(e, u);
    let f = c.getPropertyValue("content");
    if (!f || f === "none")
      return;
    f = f.replace(/(')|(")|(counter\(.+\))/g, "");
    const d = [ve()], m = Ne(e, u, n);
    i == null || i.forEach((p, E) => {
      m.delete(E);
    });
    const h = Ie(c, m, n.includeStyleProperties);
    h.delete("content"), h.delete("-webkit-locale"), ((b = h.get("background-clip")) == null ? void 0 : b[0]) === "text" && t.classList.add("______background-clip--text");
    const w = [
      `content: '${f}';`
    ];
    if (h.forEach(([p, E], v) => {
      w.push(`${v}: ${p}${E ? " !important" : ""};`);
    }), w.length === 1)
      return;
    try {
      t.className = [t.className, ...d].join(" ");
    } catch (p) {
      return;
    }
    const y = w.join(`
  `);
    let g = o.get(y);
    g || (g = [], o.set(y, g)), g.push(`.${d[0]}:${u}`);
  }
  St.forEach(l), r && Et.forEach(l);
}
function vt(e, t) {
  ne(e) && (t.innerHTML = e.value), (ne(e) || Qe(e) || tt(e)) && t.setAttribute("value", e.value);
}
function Tt(e, t, r, n) {
  var f, d, m, h;
  const { ownerWindow: a, includeStyleProperties: s, currentParentNodeStyle: o } = n, i = t.style, l = a.getComputedStyle(e), u = Ne(e, null, n);
  o == null || o.forEach((w, y) => {
    u.delete(y);
  });
  const c = Ie(l, u, s);
  return c.delete("transition-property"), c.delete("all"), c.delete("d"), c.delete("content"), r && (c.delete("margin-top"), c.delete("margin-right"), c.delete("margin-bottom"), c.delete("margin-left"), c.delete("margin-block-start"), c.delete("margin-block-end"), c.delete("margin-inline-start"), c.delete("margin-inline-end"), c.set("box-sizing", ["border-box", ""])), ((f = c.get("background-clip")) == null ? void 0 : f[0]) === "text" && t.classList.add("______background-clip--text"), pe && (c.has("font-kerning") || c.set("font-kerning", ["normal", ""]), (((d = c.get("overflow-x")) == null ? void 0 : d[0]) === "hidden" || ((m = c.get("overflow-y")) == null ? void 0 : m[0]) === "hidden") && ((h = c.get("text-overflow")) == null ? void 0 : h[0]) === "ellipsis" && e.scrollWidth === e.clientWidth && c.set("text-overflow", ["clip", ""])), c.forEach(([w, y], g) => {
    i.setProperty(g, w, y);
  }), c;
}
function At(e, t) {
  var r;
  try {
    if ((r = e == null ? void 0 : e.contentDocument) != null && r.body)
      return G(e.contentDocument.body, t);
  } catch (n) {
    C("Failed to clone iframe", n);
  }
  return e.cloneNode(!1);
}
function xe(e) {
  if (e.ownerDocument)
    try {
      const a = e.toDataURL();
      if (a !== "data:,")
        return k(a, e.ownerDocument);
    } catch (a) {
    }
  const t = e.cloneNode(!1), r = e.getContext("2d"), n = t.getContext("2d");
  try {
    return r && n && n.putImageData(
      r.getImageData(0, 0, e.width, e.height),
      0,
      0
    ), t;
  } catch (a) {
    C("Failed to clone canvas", a);
  }
  return t;
}
function Nt(e) {
  return S(this, null, function* () {
    if (e.ownerDocument && !e.currentSrc && e.poster)
      return k(e.poster, e.ownerDocument);
    const t = e.cloneNode(!1);
    t.crossOrigin = "anonymous", e.currentSrc && e.currentSrc !== e.src && (t.src = e.currentSrc);
    const r = t.ownerDocument;
    if (r) {
      let n = !0;
      if (yield P(t, {
        onError: () => n = !1
      }), !n)
        return e.poster ? k(e.poster, e.ownerDocument) : t;
      t.currentTime = e.currentTime, yield new Promise((s) => {
        t.addEventListener("seeked", s, { once: !0 });
      });
      const a = r.createElement("canvas");
      a.width = e.offsetWidth, a.height = e.offsetHeight;
      try {
        const s = a.getContext("2d");
        s && s.drawImage(t, 0, 0, a.width, a.height);
      } catch (s) {
        return C("Failed to clone video", s), e.poster ? k(e.poster, e.ownerDocument) : t;
      }
      return xe(a);
    }
    return t;
  });
}
function It(e) {
  const t = e.cloneNode(!1);
  return e.currentSrc && e.currentSrc !== e.src && (t.src = e.currentSrc, t.srcset = ""), t.loading === "lazy" && (t.loading = "eager"), t;
}
function xt(e, t) {
  return Ke(e) ? xe(e) : nt(e) ? At(e, t) : D(e) ? It(e) : O(e) ? Nt(e) : e.cloneNode(!1);
}
const oe = /* @__PURE__ */ new Set([
  "symbol"
  // test/fixtures/svg.symbol.html
]);
function ae(e, t, r, n) {
  return S(this, null, function* () {
    if (A(r) && (Ze(r) || et(r)) || n.filter && !n.filter(r))
      return;
    oe.has(t.nodeName) || oe.has(r.nodeName) ? n.currentParentNodeStyle = void 0 : n.currentParentNodeStyle = n.currentNodeStyle;
    const a = yield G(r, n);
    n.isEnable("restoreScrollPosition") && kt(e, a), t.appendChild(a);
  });
}
function se(e, t, r) {
  return S(this, null, function* () {
    var a, s;
    const n = (s = A(e) ? (a = e.shadowRoot) == null ? void 0 : a.firstChild : void 0) != null ? s : e.firstChild;
    for (let o = n; o; o = o.nextSibling)
      if (!Ye(o))
        if (A(o) && rt(o) && typeof o.assignedNodes == "function") {
          const i = o.assignedNodes();
          for (let l = 0; l < i.length; l++)
            yield ae(e, t, i[l], r);
        } else
          yield ae(e, t, o, r);
  });
}
function kt(e, t) {
  if (!F(e) || !F(t))
    return;
  const { scrollTop: r, scrollLeft: n } = e;
  if (!r && !n)
    return;
  const { transform: a } = t.style, s = new DOMMatrix(a), { a: o, b: i, c: l, d: u } = s;
  s.a = 1, s.b = 0, s.c = 0, s.d = 1, s.translateSelf(-n, -r), s.a = o, s.b = i, s.c = l, s.d = u, t.style.transform = s.toString();
}
function Rt(e, t) {
  const { backgroundColor: r, width: n, height: a, style: s } = t, o = e.style;
  if (r && o.setProperty("background-color", r, "important"), n && o.setProperty("width", `${n}px`, "important"), a && o.setProperty("height", `${a}px`, "important"), s)
    for (const i in s)
      o[i] = s[i];
}
const Dt = /^[\w-:]+$/;
function G(e, t, r = !1) {
  return S(this, null, function* () {
    var i, l, u, c;
    const { ownerDocument: n, ownerWindow: a, fontFamilies: s } = t;
    if (n && Je(e))
      return n.createTextNode(e.data);
    if (n && a && A(e) && (F(e) || U(e))) {
      const f = yield xt(e, t);
      if (t.isEnable("removeAbnormalAttributes")) {
        const h = f.getAttributeNames();
        for (let w = h.length, y = 0; y < w; y++) {
          const g = h[y];
          Dt.test(g) || f.removeAttribute(g);
        }
      }
      const d = t.currentNodeStyle = Tt(e, f, r, t);
      r && Rt(f, t);
      let m = !1;
      if (t.isEnable("copyScrollbar")) {
        const h = [
          (i = d.get("overflow-x")) == null ? void 0 : i[0],
          (l = d.get("overflow-y")) == null ? void 0 : l[1]
        ];
        m = h.includes("scroll") || (h.includes("auto") || h.includes("overlay")) && (e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
      }
      return Ct(e, f, m, t), vt(e, f), (c = Te((u = d.get("font-family")) == null ? void 0 : u[0])) == null || c.forEach((h) => s.add(h)), O(e) || (yield se(e, f, t)), f;
    }
    const o = e.cloneNode(!1);
    return yield se(e, o, t), o;
  });
}
function Ft(e) {
  if (e.ownerDocument = void 0, e.ownerWindow = void 0, e.svgStyleElement = void 0, e.svgDefsElement = void 0, e.svgStyles.clear(), e.defaultComputedStyles.clear(), e.sandbox) {
    try {
      e.sandbox.remove();
    } catch (t) {
    }
    e.sandbox = void 0;
  }
  e.workers = [], e.fontFamilies.clear(), e.fontCssTexts.clear(), e.requests.clear(), e.tasks = [];
}
function Pt(e) {
  const i = e, { url: t, timeout: r, responseType: n } = i, a = re(i, ["url", "timeout", "responseType"]), s = new AbortController(), o = r ? setTimeout(() => s.abort(), r) : void 0;
  return fetch(t, T({ signal: s.signal }, a)).then((l) => {
    if (!l.ok)
      throw new Error("Failed fetch, not 2xx response", { cause: l });
    switch (n) {
      case "dataUrl":
        return l.blob().then(lt);
      case "text":
      default:
        return l.text();
    }
  }).finally(() => clearTimeout(o));
}
function _(e, t) {
  const { url: r, requestType: n = "text", responseType: a = "text", imageDom: s } = t;
  let o = r;
  const {
    timeout: i,
    acceptOfImage: l,
    requests: u,
    fetchFn: c,
    fetch: {
      requestInit: f,
      bypassingCache: d,
      placeholderImage: m
    },
    workers: h
  } = e;
  n === "image" && (M || X) && e.drawImageCount++;
  let w = u.get(r);
  if (!w) {
    d && d instanceof RegExp && d.test(o) && (o += (/\?/.test(o) ? "&" : "?") + new Date().getTime());
    const y = T({
      url: o,
      timeout: i,
      responseType: a,
      headers: n === "image" ? { accept: l } : void 0
    }, f);
    w = {
      type: n,
      resolve: void 0,
      reject: void 0,
      response: null
    }, w.response = (() => S(this, null, function* () {
      if (c && n === "image") {
        const g = yield c(r);
        if (g)
          return g;
      }
      return !M && r.startsWith("http") && h.length ? new Promise((g, b) => {
        h[u.size & h.length - 1].postMessage(T({ rawUrl: r }, y)), w.resolve = g, w.reject = b;
      }) : Pt(y);
    }))().catch((g) => {
      if (u.delete(r), n === "image" && m)
        return C("Failed to fetch image base64, trying to use placeholder image", o), typeof m == "string" ? m : m(s);
      throw g;
    }), u.set(r, w);
  }
  return w.response;
}
function ke(e, t, r, n) {
  return S(this, null, function* () {
    if (!Re(e))
      return e;
    for (const [a, s] of _t(e, t))
      try {
        const o = yield _(
          r,
          {
            url: s,
            requestType: n ? "image" : "text",
            responseType: "dataUrl"
          }
        );
        e = e.replace(Ut(a), `$1${o}$3`);
      } catch (o) {
        C("Failed to fetch css data url", a, o);
      }
    return e;
  });
}
function Re(e) {
  return /url\((['"]?)([^'"]+?)\1\)/.test(e);
}
const De = /url\((['"]?)([^'"]+?)\1\)/g;
function _t(e, t) {
  const r = [];
  return e.replace(De, (n, a, s) => (r.push([s, be(s, t)]), n)), r.filter(([n]) => !V(n));
}
function Ut(e) {
  const t = e.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
  return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`, "g");
}
function $t(e, t) {
  return S(this, null, function* () {
    const {
      ownerDocument: r,
      svgStyleElement: n,
      fontFamilies: a,
      fontCssTexts: s,
      tasks: o,
      font: i
    } = t;
    if (!(!r || !n || !a.size))
      if (i && i.cssText) {
        const l = ce(i.cssText, t);
        n.appendChild(r.createTextNode(`${l}
`));
      } else {
        const l = Array.from(r.styleSheets).filter((c) => {
          try {
            return "cssRules" in c && Boolean(c.cssRules.length);
          } catch (f) {
            return C(`Error while reading CSS rules from ${c.href}`, f), !1;
          }
        });
        yield Promise.all(
          l.flatMap((c) => Array.from(c.cssRules).map((f, d) => S(this, null, function* () {
            if (Xe(f)) {
              let m = d + 1;
              const h = f.href;
              let w = "";
              try {
                w = yield _(t, {
                  url: h,
                  requestType: "text",
                  responseType: "text"
                });
              } catch (g) {
                C(`Error fetch remote css import from ${h}`, g);
              }
              const y = w.replace(
                De,
                (g, b, p) => g.replace(p, be(p, h))
              );
              for (const g of Lt(y))
                try {
                  c.insertRule(
                    g,
                    g.startsWith("@import") ? m += 1 : c.cssRules.length
                  );
                } catch (b) {
                  C("Error inserting rule from remote css import", { rule: g, error: b });
                }
            }
          })))
        ), l.flatMap((c) => Array.from(c.cssRules)).filter((c) => {
          var f;
          return ze(c) && Re(c.style.getPropertyValue("src")) && ((f = Te(c.style.getPropertyValue("font-family"))) == null ? void 0 : f.some((d) => a.has(d)));
        }).forEach((c) => {
          const f = c, d = s.get(f.cssText);
          d ? n.appendChild(r.createTextNode(`${d}
`)) : o.push(
            ke(
              f.cssText,
              f.parentStyleSheet ? f.parentStyleSheet.href : null,
              t
            ).then((m) => {
              m = ce(m, t), s.set(f.cssText, m), n.appendChild(r.createTextNode(`${m}
`));
            })
          );
        });
      }
  });
}
const Bt = /(\/\*[\s\S]*?\*\/)/gi, ie = /((@.*?keyframes [\s\S]*?){([\s\S]*?}\s*?)})/gi;
function Lt(e) {
  if (e == null)
    return [];
  const t = [];
  let r = e.replace(Bt, "");
  for (; ; ) {
    const s = ie.exec(r);
    if (!s)
      break;
    t.push(s[0]);
  }
  r = r.replace(ie, "");
  const n = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi, a = new RegExp(
    "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",
    "gi"
  );
  for (; ; ) {
    let s = n.exec(r);
    if (s)
      a.lastIndex = n.lastIndex;
    else if (s = a.exec(r), s)
      n.lastIndex = a.lastIndex;
    else
      break;
    t.push(s[0]);
  }
  return t;
}
const Mt = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g, Ot = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function ce(e, t) {
  const { font: r } = t, n = r ? r == null ? void 0 : r.preferredFormat : void 0;
  return n ? e.replace(Ot, (a) => {
    for (; ; ) {
      const [s, , o] = Mt.exec(a) || [];
      if (!o)
        return "";
      if (o === n)
        return `src: ${s};`;
    }
  }) : e;
}
function Wt(e, t) {
  if (D(e)) {
    const r = e.currentSrc || e.src;
    if (!V(r))
      return [
        _(t, {
          url: r,
          imageDom: e,
          requestType: "image",
          responseType: "dataUrl"
        }).then((n) => {
          n && (e.srcset = "", e.dataset.originalSrc = r, e.src = n || "");
        })
      ];
    (M || X) && t.drawImageCount++;
  } else if (U(e) && !V(e.href.baseVal)) {
    const r = e.href.baseVal;
    return [
      _(t, {
        url: r,
        imageDom: e,
        requestType: "image",
        responseType: "dataUrl"
      }).then((n) => {
        n && (e.dataset.originalSrc = r, e.href.baseVal = n || "");
      })
    ];
  }
  return [];
}
const jt = [
  "background-image",
  "border-image-source",
  "-webkit-border-image",
  "-webkit-mask-image",
  "list-style-image"
];
function qt(e, t) {
  return jt.map((r) => {
    const n = e.getPropertyValue(r);
    return !n || n === "none" ? null : ((M || X) && t.drawImageCount++, ke(n, null, t, !0).then((a) => {
      !a || n === a || e.setProperty(
        r,
        a,
        e.getPropertyPriority(r)
      );
    }));
  }).filter(Boolean);
}
function Vt(e, t) {
  var i;
  const { ownerDocument: r, svgDefsElement: n } = t, a = (i = e.getAttribute("href")) != null ? i : e.getAttribute("xlink:href");
  if (!a)
    return [];
  const [s, o] = a.split("#");
  if (o) {
    const l = `#${o}`, u = r == null ? void 0 : r.querySelector(`svg ${l}`);
    if (s && e.setAttribute("href", l), n != null && n.querySelector(l))
      return [];
    if (u)
      return n == null || n.appendChild(u.cloneNode(!0)), [];
    if (s)
      return [
        _(t, {
          url: s,
          responseType: "text"
        }).then((c) => {
          n == null || n.insertAdjacentHTML("beforeend", c);
        })
      ];
  }
  return [];
}
function Fe(e, t) {
  const { tasks: r } = t;
  A(e) && ((D(e) || ye(e)) && r.push(...Wt(e, t)), Ge(e) && r.push(...Vt(e, t))), F(e) && r.push(...qt(e.style, t)), e.childNodes.forEach((n) => {
    Fe(n, t);
  });
}
function Ht(e, t) {
  return S(this, null, function* () {
    const r = yield N(e, t);
    if (A(r.node) && U(r.node))
      return r.node;
    const {
      ownerDocument: n,
      log: a,
      tasks: s,
      svgStyleElement: o,
      svgDefsElement: i,
      svgStyles: l,
      font: u,
      progress: c,
      autoDestruct: f,
      onCloneNode: d,
      onEmbedNode: m,
      onCreateForeignObjectSvg: h
    } = r;
    a.time("clone node");
    const w = yield G(r.node, r, !0);
    if (o && n) {
      let E = "";
      l.forEach((v, I) => {
        E += `${v.join(`,
`)} {
  ${I}
}
`;
      }), o.appendChild(n.createTextNode(E));
    }
    a.timeEnd("clone node"), d == null || d(w), u !== !1 && A(w) && (a.time("embed web font"), yield $t(w, r), a.timeEnd("embed web font")), a.time("embed node"), Fe(w, r);
    const y = s.length;
    let g = 0;
    const b = () => S(this, null, function* () {
      for (; ; ) {
        const E = s.pop();
        if (!E)
          break;
        try {
          yield E;
        } catch (v) {
          C("Failed to run task", v);
        }
        c == null || c(++g, y);
      }
    });
    c == null || c(g, y), yield Promise.all([...Array(4)].map(b)), a.timeEnd("embed node"), m == null || m(w);
    const p = zt(w, r);
    return i && p.insertBefore(i, p.children[0]), o && p.insertBefore(o, p.children[0]), f && Ft(r), h == null || h(p), p;
  });
}
function zt(e, t) {
  const { width: r, height: n } = t, a = Se(r, n, e.ownerDocument), s = a.ownerDocument.createElementNS(a.namespaceURI, "foreignObject");
  return s.setAttributeNS(null, "x", "0%"), s.setAttributeNS(null, "y", "0%"), s.setAttributeNS(null, "width", "100%"), s.setAttributeNS(null, "height", "100%"), s.append(e), a.appendChild(s), a;
}
function Y(e, t) {
  return S(this, null, function* () {
    var o;
    const r = yield N(e, t), n = yield Ht(r), a = Ee(n, r.isEnable("removeControlCharacter"));
    r.autoDestruct || (r.svgStyleElement = Ae(r.ownerDocument), r.svgDefsElement = (o = r.ownerDocument) == null ? void 0 : o.createElementNS(j, "defs"), r.svgStyles.clear());
    const s = k(a, n.ownerDocument);
    return yield wt(s, r);
  });
}
function Yt(e, t) {
  return S(this, null, function* () {
    const r = yield N(e, t), { log: n, type: a, quality: s, dpi: o } = r, i = yield Y(r);
    n.time("canvas to blob");
    const l = yield it(i, a, s);
    if (["image/png", "image/jpeg"].includes(a) && o) {
      const u = yield ut(l.slice(0, 33));
      let c = new Uint8Array(u);
      return a === "image/png" ? c = he(c, o) : a === "image/jpeg" && (c = ue(c, o)), n.timeEnd("canvas to blob"), new Blob([c, l.slice(33)], { type: a });
    }
    return n.timeEnd("canvas to blob"), l;
  });
}
function $(e, t) {
  return S(this, null, function* () {
    const r = yield N(e, t), { log: n, quality: a, type: s, dpi: o } = r, i = yield Y(r);
    n.time("canvas to data url");
    let l = i.toDataURL(s, a);
    if (["image/png", "image/jpeg"].includes(s) && o && we && Ve) {
      const [u, c] = l.split(",");
      let f = 0, d = !1;
      if (s === "image/png") {
        const p = je(c);
        p >= 0 ? (f = Math.ceil((p + 28) / 3) * 4, d = !0) : f = 33 / 3 * 4;
      } else
        s === "image/jpeg" && (f = 18 / 3 * 4);
      const m = c.substring(0, f), h = c.substring(f), w = window.atob(m), y = new Uint8Array(w.length);
      for (let p = 0; p < y.length; p++)
        y[p] = w.charCodeAt(p);
      const g = s === "image/png" ? he(y, o, d) : ue(y, o), b = window.btoa(String.fromCharCode(...g));
      l = [u, ",", b, h].join("");
    }
    return n.timeEnd("canvas to data url"), l;
  });
}
function Xt(e, t) {
  return S(this, null, function* () {
    const r = yield N(e, t), { width: n, height: a, ownerDocument: s } = r, o = yield $(r), i = Se(n, a, s), l = i.ownerDocument.createElementNS(i.namespaceURI, "image");
    return l.setAttributeNS(null, "href", o), l.setAttributeNS(null, "height", "100%"), l.setAttributeNS(null, "width", "100%"), i.appendChild(l), Ee(i, r.isEnable("removeControlCharacter"));
  });
}
function Jt(e, t) {
  return S(this, null, function* () {
    const r = yield N(e, t), { ownerDocument: n, width: a, height: s, scale: o, type: i } = r, l = i === "image/svg+xml" ? yield Xt(r) : yield $(r), u = k(l, n);
    return u.width = Math.floor(a * o), u.height = Math.floor(s * o), u.style.width = `${a}px`, u.style.height = `${s}px`, u;
  });
}
function Kt(e, t) {
  return S(this, null, function* () {
    return $(
      yield N(e, R(T({}, t), { type: "image/jpeg" }))
    );
  });
}
function Qt(e, t) {
  return S(this, null, function* () {
    const r = yield N(e, t), n = yield Y(r);
    return n.getContext("2d").getImageData(0, 0, n.width, n.height).data;
  });
}
function Zt(e, t) {
  return S(this, null, function* () {
    return $(
      yield N(e, R(T({}, t), { type: "image/png" }))
    );
  });
}
function er(e, t) {
  return S(this, null, function* () {
    return $(
      yield N(e, R(T({}, t), { type: "image/webp" }))
    );
  });
}



/***/ })

}]);
//# sourceMappingURL=vendors.js.map