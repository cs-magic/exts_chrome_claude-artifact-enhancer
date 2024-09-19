export async function blob2clipboard(blob: Blob) {
  try {
    const clipboardItem = new ClipboardItem({ "image/png": blob });
    await navigator.clipboard.write([clipboardItem]);
    // todo: use toast
    // alert("PNG copied to clipboard!");
  } catch (error) {
    console.error("Error copying PNG to clipboard:", error);
    alert("PNG failed to copy to clipboard!");
  }
}
