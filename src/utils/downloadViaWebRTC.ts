export const downloadViaWebRTC = async () => {
  const screenshotData = await captureScreenshot();
  if (screenshotData) {
    // 创建一个下载链接
    const downloadLink = document.createElement("a");
    downloadLink.href = screenshotData;
    downloadLink.download = "screenshot.png"; // 设置下载文件名

    // 将链接添加到文档中
    document.body.appendChild(downloadLink);

    // 模拟点击下载链接
    downloadLink.click();

    // 清理：从文档中移除下载链接
    document.body.removeChild(downloadLink);
  } else {
    alert("截图失败，请重试。");
  }

  async function captureScreenshot() {
    try {
      // 请求屏幕共享权限
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: {
          displaySurface: "browser", // 尝试限制为只选择浏览器窗口
        },
      });

      // 创建video元素来显示流
      const video = document.createElement("video");
      video.srcObject = stream;

      // 等待视频加载
      await new Promise((resolve) => (video.onloadedmetadata = resolve));
      video.play();

      // 创建canvas并绘制视频帧
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas
        .getContext("2d")
        .drawImage(video, 0, 0, canvas.width, canvas.height);

      // 停止所有轨道
      stream.getTracks().forEach((track) => track.stop());

      // 获取截图数据
      return canvas.toDataURL("image/png");
    } catch (err) {
      // eslint-disable-next-line @typescript-eslint/no-base-to-string
      console.error("Error: " + err);
      return null;
    }
  }
};
