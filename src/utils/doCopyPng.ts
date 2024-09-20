import { svgString2pngBlob } from "packages_frontend/common/src/svgString2pngBlob";
import { blob2clipboard } from "./blob2clipboard";

export const doCopyPng = async () => {
  document.querySelector(".fixed .sticky h3").textContent;
  const svgString = window.svgString;
  if (!svgString) return alert("no svgString now");

  const pngBlog = await svgString2pngBlob(svgString);
  void blob2clipboard(pngBlog);
};
