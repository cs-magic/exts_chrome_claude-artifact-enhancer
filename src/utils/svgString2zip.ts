import {
  svgBlob2pngBlob,
  svgString2svgBlob,
} from "@cs-magic/common-frontend/svgString2pngBlob";
import JSZip from "jszip";
import { config } from "../config";

export async function svgString2zip(
  svgString: string,
  fileName: string,
  ppi = config.png.export.ppi.default,
) {
  const svgBlob = svgString2svgBlob(svgString);
  const pngBlob = svgBlob2pngBlob(svgBlob, ppi);

  // Create ZIP file
  const zip = new JSZip();
  zip.file(`${fileName}.svg`, svgString);
  zip.file(`${fileName}.png`, pngBlob);

  // Generate ZIP file
  const zipBlob = await zip.generateAsync({ type: "blob" });

  // Trigger download
  const url = URL.createObjectURL(zipBlob);
  const a = document.createElement("a");
  a.style.display = "none";
  a.href = url;
  a.download = `${fileName}.zip`;
  document.body.appendChild(a);
  a.click();
  URL.revokeObjectURL(url);
  document.body.removeChild(a);
}
