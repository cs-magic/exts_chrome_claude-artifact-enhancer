export function downloadImage(imageUrl: string, fileName: string) {
  const link = document.createElement("a");
  link.href = imageUrl;
  link.download = fileName || "image.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
