import { getIframe } from "src/utils/get-iframe";
import { displayOrDownloadScreenshot } from "src/utils/displayOrDownloadScreenshot";

export const downloadViaSVG = () => {
  const iframe = getIframe();
  const iframeUrl = iframe.src;

  // 创建一个SVG图像,其中包含一个指向iframe URL的外部图像
  const svgImage = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${iframe.width}" height="${iframe.height}">
      <foreignObject width="100%" height="100%">
        <iframe xmlns="http://www.w3.org/1999/xhtml" src="${iframeUrl}" style="width:${iframe.width}px; height:${iframe.height}px;"/>
      </foreignObject>
    </svg>
  `;

  // void svgString2pngBlob(svgImage);
  // 将SVG转换为Blob URL
  const svgBlob = new Blob([svgImage], { type: "image/svg+xml;charset=utf-8" });
  const svgUrl = URL.createObjectURL(svgBlob);

  // 创建图像并加载SVG
  const img = new Image();
  //main.js:8201 Uncaught SecurityError: Failed to execute 'toDataURL' on 'HTMLCanvasElement': Tainted canvases may not be exported.
  //     at img.onload (main.js:8201:42)
  img.crossOrigin = "anonymous";
  img.src = svgUrl;
  img.onload = function () {
    // 创建canvas并绘制图像
    const canvas = document.createElement("canvas");
    canvas.width = iframe.clientWidth;
    canvas.height = iframe.clientHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    // 将canvas转换为数据URL或Blob
    const screenshotDataUrl = canvas.toDataURL("image/png");
    // 或者使用 canvas.toBlob() 获取Blob对象

    // 在这里处理截图,例如显示或下载
    displayOrDownloadScreenshot(screenshotDataUrl);

    // 清理
    URL.revokeObjectURL(svgUrl);
  };
};
