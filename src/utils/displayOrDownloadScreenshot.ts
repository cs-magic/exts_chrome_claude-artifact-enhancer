export function displayOrDownloadScreenshot(dataUrl: string) {
  // // 创建一个新的图像元素来显示截图
  // const screenshotImg = document.createElement('img');
  // screenshotImg.src = dataUrl;
  // document.body.appendChild(screenshotImg);

  // 或者创建一个下载链接
  const downloadLink = document.createElement("a");
  downloadLink.href = dataUrl;
  downloadLink.download = "iframe-screenshot.png";
  downloadLink.textContent = "下载截图";
  document.body.appendChild(downloadLink);
  downloadLink.click();
}
