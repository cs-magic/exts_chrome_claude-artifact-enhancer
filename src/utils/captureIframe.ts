// 在iframe中执行的脚本
import { action } from "../utils/const";

function captureIframe() {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const body = document.body;

  canvas.width = body.scrollWidth;
  canvas.height = body.scrollHeight;

  // 绘制背景
  ctx.fillStyle = getComputedStyle(body).backgroundColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // 递归函数来绘制元素
  function drawElement(element: Element) {
    console.log("-- drawing element: ");
    const style = getComputedStyle(element);
    const rect = element.getBoundingClientRect();

    // 绘制背景色
    ctx.fillStyle = style.backgroundColor;
    ctx.fillRect(rect.left, rect.top, rect.width, rect.height);

    // 绘制文本
    if (element.textContent) {
      ctx.font = `${style.fontSize} ${style.fontFamily}`;
      ctx.fillStyle = style.color;
      ctx.fillText(
        element.textContent,
        rect.left,
        rect.top + parseInt(style.fontSize),
      );
    }

    // 递归处理子元素
    Array.from(element.children).forEach(drawElement);
  }

  drawElement(body);

  // 将canvas数据转换为dataURL并发送给父页面
  const dataUrl = canvas.toDataURL();
  window.parent.postMessage(
    { type: action.iframeReturnCapture, data: dataUrl },
    "*",
  );
}
