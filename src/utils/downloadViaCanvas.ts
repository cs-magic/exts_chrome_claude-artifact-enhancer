import { getIframe } from "./get-iframe";
import html2canvas from "html2canvas";
import { str2ele } from "@cs-magic/common-frontend/dist/str2ele";

export const downloadViaCanvas = () => {
  const iframe = getIframe();
  const iframeUrl = iframe.src;
  const width = iframe.clientWidth;
  const height = iframe.clientHeight;
  console.log(
    `-- downloadViaCanvas iframe size=(${iframe.width}, ${iframe.height}) clientSize=(${iframe.clientWidth}, ${iframe.clientHeight})`,
  );

  // 创建一个SVG图像,其中包含一个指向iframe URL的外部图像
  const svgImage = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
      <foreignObject width="100%" height="100%">
        <iframe xmlns="http://www.w3.org/1999/xhtml" src="${iframeUrl}" style="width:${width}px; height:${height}px;"/>
      </foreignObject>
    </svg>
  `;

  // void svgString2pngBlob(svgImage);
  html2canvas(str2ele(svgImage), {
    allowTaint: true,
    useCORS: true,
  }).then((canvas) => {
    console.log("-- onrendered");
    let a = document.createElement("a");
    // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
    a.href = canvas
      .toDataURL("image/jpeg")
      .replace("image/jpeg", "image/octet-stream");
    a.download = "screenshot.jpg";
    a.click();
  });

  // // 将SVG转换为Blob URL
  // const svgBlob = new Blob([svgImage], { type: "image/svg+xml;charset=utf-8" });
  // const svgUrl = URL.createObjectURL(svgBlob);
  //
  // // 创建图像并加载SVG
  // const img = new Image();
  // img.onload = function () {
  //   // 创建canvas并绘制图像
  //   const canvas = document.createElement("canvas");
  //   canvas.width = Number(width);
  //   canvas.height = Number(height);
  //   const ctx = canvas.getContext("2d");
  //   ctx.drawImage(img, 0, 0);
  //
  //   // 将canvas转换为数据URL或Blob
  //   const screenshotDataUrl = canvas.toDataURL("image/png");
  //   // 或者使用 canvas.toBlob() 获取Blob对象
  //
  //   // 在这里处理截图,例如显示或下载
  //   displayOrDownloadScreenshot(screenshotDataUrl);
  //
  //   // 清理
  //   URL.revokeObjectURL(svgUrl);
  // };
  // img.src = svgUrl;
};
