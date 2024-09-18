export const createTopButton = (
  id: string,
  inner: string,
  onClick = () => {},
) => {
  // not init
  const chatControlsRowElement = document.querySelector(".flex-row-reverse");
  if (!chatControlsRowElement) return;

  const elementExisted = chatControlsRowElement.querySelector(`#${id}`);
  if (elementExisted) return;

  const buttonElement = document.createElement("button");
  buttonElement.className = `inline-flex
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
          hover:text-text-100 h-9 w-9 rounded-md active:scale-95`;
  buttonElement.id = id;
  buttonElement.innerHTML = inner;
  buttonElement.onclick = onClick;

  chatControlsRowElement.insertAdjacentElement("beforeend", buttonElement);
};
