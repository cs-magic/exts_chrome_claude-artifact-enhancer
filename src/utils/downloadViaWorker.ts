export const downloadViaWorker = () => {
  captureIframe();

  function captureIframe() {
    const iframe = document.querySelector(
      "iframe.w-full.h-full",
    );
    const iframeUrl = iframe.src;
    const width = iframe.clientWidth;
    const height = iframe.clientHeight;

    const worker = new Worker("screenshotWorker.js");

    worker.postMessage({
      iframeUrl,
      width,
      height,
    });

    worker.onmessage = function (e) {
      if (e.data.type === "screenshot") {
        downloadScreenshot(e.data.imageBlob);
      } else if (e.data.type === "error") {
        console.error("Screenshot error:", e.data.message);
      }
    };
  }

  function downloadScreenshot(blob: Blob) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = "iframe-screenshot.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
};
