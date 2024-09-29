import { svgString2pngBlob } from "@cs-magic/common-frontend/svgString2pngBlob";
import { blob2clipboard } from "@cs-magic/common-frontend/blob2clipboard";

export const doCopyPng = async () => {
  document.querySelector(".fixed .sticky h3").textContent;
  const svgString = window.svgString;
  if (!svgString) return alert("no svgString now");

  const pngBlog = await svgString2pngBlob(svgString);
  void blob2clipboard(pngBlog);
};
