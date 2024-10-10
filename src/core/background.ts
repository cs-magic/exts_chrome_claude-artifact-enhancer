import { action } from "../utils/const";

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // 这个已经不需要了，因为直接在前端就可以拿到
  if (request.action === action.fetchConversationChats) {
    console.log("-- fetchConversationChats");
    fetch(request.url, {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => sendResponse({ data: data }))
      .catch((error) => sendResponse({ error: error.toString() }));
    return true; // 保持消息通道开放
  }
});
