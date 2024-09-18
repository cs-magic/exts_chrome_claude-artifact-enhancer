export const waitParentElement = (): Promise<HTMLElement> =>
  new Promise((resolve) => {
    const exportButtonObserver = new MutationObserver((mutation) => {
      const publishButton = Array.from(
        document.querySelectorAll("button"),
      ).find((button) => button.textContent.trim() === "Publish");
      if (!publishButton) return;

      const parentElement = publishButton.parentElement.parentElement;
      exportButtonObserver.disconnect();
      resolve(parentElement);
    });

    exportButtonObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
