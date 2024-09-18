import html2canvas from "html2canvas";

function captureAndDownload() {
  // 创建一个深度克隆的 body
  const clonedBody = document.body.cloneNode(true) as HTMLElement;

  // 创建一个隐藏的容器
  const hiddenContainer = document.createElement("div");
  hiddenContainer.style.position = "absolute";
  hiddenContainer.style.left = "-9999px";
  hiddenContainer.style.top = "-9999px";

  // 将克隆的 body 添加到隐藏容器
  hiddenContainer.appendChild(clonedBody);

  // 将隐藏容器添加到 document
  document.body.appendChild(hiddenContainer);

  // 使用 html2canvas 对克隆的内容进行截图
  html2canvas(clonedBody, {
    // 可能需要的其他选项
    useCORS: true,
    allowTaint: true,
    foreignObjectRendering: true,
  })
    .then((canvas) => {
      // 转换为图片并下载
      const image = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      const link = document.createElement("a");
      link.download = "screenshot.png";
      link.href = image;
      link.click();

      // 清理：移除隐藏容器
      document.body.removeChild(hiddenContainer);
    })
    .catch((error) => {
      console.error("Screenshot failed:", error);
      // 确保在错误时也清理
      document.body.removeChild(hiddenContainer);
    });
}
