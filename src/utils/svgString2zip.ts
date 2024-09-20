import { config } from "../config";
import JSZip from "jszip";
import { svgString2pngBlob } from "packages_frontend/common/src/svgString2pngBlob";

export async function svgString2zip(
  svgString: string,
  fileName: string,
  ppi = config.png.export.ppi.default,
) {
  const pngBlob = svgString2pngBlob(svgString, ppi);

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
