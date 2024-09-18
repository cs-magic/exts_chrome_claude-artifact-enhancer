// types.ts
export interface WorkerMessage {
  type: "screenshot" | "error";
  imageBlob?: Blob;
  message?: string;
}

export interface WorkerInput {
  iframeUrl: string;
  width: number;
  height: number;
}

// 添加这个声明来解决 TypeScript 中 Worker 上下文的类型问题
declare function postMessage(
  message: WorkerMessage,
  transfer?: Transferable[],
): void;

// screenshotWorker.js
self.onmessage = function (e) {
  const { iframeUrl, width, height } = e.data;

  const svgImage = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
      <foreignObject width="100%" height="100%">
        <iframe xmlns="http://www.w3.org/1999/xhtml" src="${iframeUrl}" style="width:${width}px; height:${height}px;"/>
      </foreignObject>
    </svg>
  `;

  const svgBlob = new Blob([svgImage], { type: "image/svg+xml;charset=utf-8" });
  const svgUrl = URL.createObjectURL(svgBlob);

  const img = new Image();
  img.onload = function () {
    const canvas = new OffscreenCanvas(width, height);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    canvas.convertToBlob({ type: "image/png" }).then((blob) => {
      // @ts-ignore
      self.postMessage({ type: "screenshot", imageBlob: blob }, [blob]);
    });

    URL.revokeObjectURL(svgUrl);
  };

  img.onerror = function () {
    self.postMessage({ type: "error", message: "Failed to load image" });
  };

  img.src = svgUrl;
};
