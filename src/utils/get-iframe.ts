/**
 *  使用 `iframe.w-full.h-full` 而非 `src`
 *
 */
export const getIframe = () => {
  const iFrame = document.querySelector(`iframe.w-full.h-full`);
  if (!iFrame) throw new Error("no iframe now");
  return iFrame as HTMLIFrameElement;
};
