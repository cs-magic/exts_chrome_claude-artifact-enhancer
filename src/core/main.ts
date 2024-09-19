import { action, IFRAME_URL } from "../utils/const";
import { handleArtifact } from "../utils/handleArtifact";
import { Message } from "../utils/message";
import { downloadImage } from "../utils/downloadImage";
import { element2png } from "../utils/element2png";
import { createTopButton } from "../utils/createTopButton";

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

  // right --> left

  createTopButton(
    "chat-messages_export-png",
    `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-monitor-down"><path d="M12 13V7"/><path d="m15 10-3 3-3-3"/><rect width="20" height="14" x="2" y="3" rx="2"/><path d="M12 17v4"/><path d="M8 21h8"/></svg>`,
    () => {
      void element2png(
        document.querySelector(".sticky.bottom-0")
          .previousElementSibling as HTMLElement,
        {
          approach: "modern-screenshot",
          filename: `${new Date().toISOString().split("T")[0]} - chat-messages.png`,
        },
      );
    },
  );

  createTopButton(
    "chat-messages_gen-graph",
    `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-aperture"><circle cx="12" cy="12" r="10"/><path d="m14.31 8 5.74 9.94"/><path d="M9.69 8h11.48"/><path d="m7.38 12 5.74-9.94"/><path d="M9.69 16 3.95 6.06"/><path d="M14.31 16H2.83"/><path d="m16.62 12-5.74 9.94"/></svg>`,
    () => {
      alert("hello");
    },
  );
});
observer.observe(document.body, { subtree: true, childList: true });
