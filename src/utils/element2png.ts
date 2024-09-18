import html2canvas from "html2canvas";
import { domToPng } from "modern-screenshot";

export const element2png = async (
  element: HTMLElement,
  approach: "html2canvas" | "modern-screenshot",
  filename = "screenshot.png",
) => {
  console.log("-- element2png start");
  let data;
  // 此时可以进行截图操作
  switch (approach) {
    case "html2canvas":
      const canvas = await html2canvas(element, {
        logging: true,
        useCORS: true,
        scrollY: -window.scrollY,
      });
      data = canvas.toDataURL("image/png");
      break;

    case "modern-screenshot":
      data = await domToPng(element, {});
      break;
  }

  const link = document.createElement("a");
  link.download = filename;
  link.href = data;
  link.click();

  console.log("-- element2png end");
};
