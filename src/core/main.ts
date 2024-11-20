import { action, IFRAME_URL } from "../utils/const";
import { downloadImage } from "../utils/downloadImage";
import { handleArtifact } from "../utils/handleArtifact";

import type { Message } from "@/types/message";

console.log("Main script loaded");

window.addEventListener("message", (event) => {
  const message = event.data as Message;
  if (event.origin === IFRAME_URL) console.log("[main received]: ", message);

  switch (message.type) {
    case action.iframeReturnCapture: {
      const img = new Image();
      img.src = message.data;
      img.onload = function () {
        downloadImage(img.src, "screenshot.png");
      };
      break;
    }

    case action.returnSVG:
      window.svgString = message.data;
      return;

    default:
      return;
  }
});

const observer = new MutationObserver(() => {
  void handleArtifact();
});
observer.observe(document.body, { subtree: true, childList: true });
