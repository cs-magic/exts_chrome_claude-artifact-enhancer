import { Message } from "@/types/message";
import { action, IFRAME_URL } from "src/utils/const";
import { downloadImage } from "src/utils/downloadImage";
import { handleArtifact } from "src/utils/handleArtifact";

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
