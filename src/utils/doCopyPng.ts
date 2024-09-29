import { blob2clipboard } from "@cs-magic/common-frontend/blob2clipboard";
import {
  svgBlob2pngBlob,
  svgString2svgBlob,
} from "@cs-magic/common-frontend/svgString2pngBlob";

export const doCopyPng = async () => {
  document.querySelector(".fixed .sticky h3").textContent;
  const svgString = window.svgString;
  if (!svgString) return alert("no svgString now");

  const svgBlob = svgString2svgBlob(svgString);
  const pngBlog = await svgBlob2pngBlob(svgBlob);
  void blob2clipboard(pngBlog);
};
