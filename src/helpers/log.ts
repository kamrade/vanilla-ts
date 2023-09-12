export const log = (app: HTMLDivElement | null, content: string) => {
  const el: HTMLDivElement = document.createElement('div');
  el.classList.add('text-center')
  el.innerText = content;
  app?.appendChild(el);
}