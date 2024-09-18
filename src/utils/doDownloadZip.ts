import { svgString2zip } from "./svgString2zip";

export const doDownloadZip = () => {
  const fileName = document.querySelector(".fixed .sticky h3").textContent;
  const svgString = window.svgString;
  if (!svgString) return alert("no svgString now");

  svgString2zip(svgString, `${fileName}.png`)
    .then((downloadId) =>
      console.log("File saved with download ID:", downloadId),
    )
    .catch((error) => console.error("Error:", error));
};
