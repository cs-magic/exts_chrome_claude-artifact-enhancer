import { waitParentElement } from "./wait-parent-element";
import {
  ARTIFACT_COPY_PNG_ID,
  ARTIFACT_DOWNLOAD_ALL_ID,
  lucideArrowBigDownDashSvgString,
  lucideImagesSvgString,
} from "./const";
import { doCopyPng } from "./doCopyPng";
import { doDownloadZip } from "./doDownloadZip";
import { str2ele } from "@cs-magic/common-frontend/str2ele";

export const handleArtifact = async () => {
  const parentElement = await waitParentElement();
  if (!parentElement) return;

  const insertEle = (
    id: string,
    svgString: string,
    onClick: () => void,
    size = 16,
  ) => {
    let ele = parentElement.querySelector(`#${id}`);
    if (ele) return;
    const buttonElement = str2ele(`<button 
id="${id}"
class="inline-flex
  items-center
  justify-center
  relative
  shrink-0
  ring-offset-2
  ring-offset-bg-300
  ring-accent-main-100
  focus-visible:outline-none
  focus-visible:ring-1
  disabled:pointer-events-none
  disabled:opacity-50
  disabled:shadow-none
  disabled:drop-shadow-none text-text-200
          transition-all
          font-styrene
          active:bg-bg-400
          hover:bg-bg-500/40
          hover:text-text-100 h-9 w-9 rounded-md active:scale-95" data-testid="chat-controls" data-state="closed">
         
${svgString}
          
          </button>`) as HTMLButtonElement;

    buttonElement.onclick = onClick;
    parentElement.insertAdjacentElement("afterbegin", buttonElement);

    const svg = parentElement.querySelector("svg") as SVGSVGElement;
    svg.setAttribute("width", size.toString());
    svg.setAttribute("height", size.toString());
  };

  insertEle(ARTIFACT_COPY_PNG_ID, lucideImagesSvgString, doCopyPng, 16);
  insertEle(
    ARTIFACT_DOWNLOAD_ALL_ID,
    lucideArrowBigDownDashSvgString,
    doDownloadZip,
    20,
  );
};
