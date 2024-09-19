import html2canvas from "html2canvas";
import { domToJpeg, domToPng } from "modern-screenshot";

// Function to get the maximum width based on viewport
function getMaxWidth() {
  if (window.innerWidth >= 1280) {
    return 768; // xl:max-w-[48rem]
  } else if (window.innerWidth >= 1024) {
    return 640; // lg:max-w-[40rem]
  } else if (window.innerWidth >= 768) {
    return 768; // md:max-w-3xl
  }
  return window.innerWidth; // For smaller screens, use full width
}

export const element2png = async (
  element: HTMLElement,
  {
    approach = "modern-screenshot",
    filename = "screenshot",
    backgroundColor = "white",
  }: {
    approach: "html2canvas" | "modern-screenshot";
    filename: string;
    backgroundColor?: string;
  },
) => {
  console.log("-- element2png start");
  let data;
  const maxWidth = getMaxWidth();

  // 此时可以进行截图操作
  switch (approach) {
    case "html2canvas":
      const canvas = await html2canvas(element, {
        logging: true,
        allowTaint: true,
        useCORS: true,
        // scrollY: -window.scrollY,
        height: element.scrollHeight,
        windowHeight: element.scrollHeight,
        backgroundColor: backgroundColor, // chatgpt (#171717)
        scale: 2,
      });

      // Crop the canvas if necessary
      // todo: 剪切还有点问题
      // if (canvas.width > maxWidth) {
      //   const croppedCanvas = document.createElement("canvas");
      //   croppedCanvas.width = maxWidth;
      //   croppedCanvas.height = canvas.height;
      //   const ctx = croppedCanvas.getContext("2d");
      //   const centerShift = (canvas.width - maxWidth) / 2;
      //   ctx.drawImage(
      //     canvas,
      //     centerShift,
      //     0,
      //     maxWidth,
      //     canvas.height,
      //     0,
      //     0,
      //     maxWidth,
      //     canvas.height,
      //   );
      //   data = croppedCanvas.toDataURL("image/png");
      // } else
      data = canvas.toDataURL("image/jpeg");

      break;

    case "modern-screenshot":
      data = await domToJpeg(element, {
        scale: 1,
        quality: 0.7,
        backgroundColor: backgroundColor,
      });
      break;
  }

  const link = document.createElement("a");
  link.download = filename;
  link.href = data;
  link.click();

  console.log("-- element2png end");
};
