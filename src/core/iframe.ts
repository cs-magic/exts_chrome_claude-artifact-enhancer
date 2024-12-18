import { element2image } from "@cs-magic/common-frontend/element2image";

import { config } from "../config";
import { action } from "../utils/const";

import type { Message } from "@/types/message";

console.log("IFrame script loaded");

// iframe内的代码
window.addEventListener("message", function (event) {
  const message = event.data as Message;
  console.log("[iframe receive]: ", message);

  const element = document.documentElement;
  console.log({ element });

  switch (message.type) {
    case action.mainRequestIframeCapture:
      console.log("-- iframe capturing");

      void element2image(document.body, {
        approach: "modern-screenshot",
        filename: "iframe-screenshot.png",
      });

      break;
  }
});

const observer = new MutationObserver((mutations, observer) => {
  for (const svgElement of document.querySelectorAll("svg")) {
    const { width, height } = svgElement.getBBox();
    if (width < config.svg.export.width.min) continue;

    window.parent.postMessage(
      {
        type: action.returnSVG,
        data: new XMLSerializer().serializeToString(svgElement),
      } as Message,
      "*",
    );
  }
});
observer.observe(document.body, { childList: true, subtree: true });
