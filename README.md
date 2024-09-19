# Claude Enhancer V0.4.1 (Chrome Extension)

![logo.svg](assets/logo.svg)

## Usage

- Approach 1. fork this repo, and in [Chrome Extension](chrome://extensions/) page Load unpacked at the `dist` folder
- Approach 2. todo: download on GitHub release page
- Approach 3. todo: install directly in google plugin market

## Effect

![img.png](assets/v0.3.0-artifact.png)

## Motivation

[Claude Artifact](https://support.anthropic.com/en/articles/9487310-what-are-artifacts-and-how-do-i-use-them) is pretty useful, but with one fatal shortage when it comes downloading the svg into png/jpg for sharing on social media like WeChat.

I used to download the SVG via the built-in action button, and upload onto third-party website like https://cloudconvert.com/svg-to-png which is limited and inconvenient.

So I spent a whole day developing this tiny extension in order to save your day.

Enjoy it!

## Todo

- [x]: feat: poe supports artifact (SVG-Copilot can do this)
- [x]: fix: `SecurityError: Failed to execute 'toBlob' on 'HTMLCanvasElement': Tainted canvases may not be exported.
at img.onload (`
- [x]: fix the onMouseOut on `svg2png`
- [x]: feat: download with svg together
- [x]: fix when svg content changed
- [x]: fix when generating new image
