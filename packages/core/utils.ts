export const isColor = (v: string) => {
  document.head.style.color = v;
  const q = document.head.style.color;
  document.head.style.color = '';
  return !!q;
}
