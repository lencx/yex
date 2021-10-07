/**
 * isColor
 * @param color
 * @returns boolean
 */
export const isColor = (color: string) => {
  const el = document.createElement("div");
  el.style.color = color;
  return !!el.style.color.replace(/\s+/,'').toLowerCase();
}
