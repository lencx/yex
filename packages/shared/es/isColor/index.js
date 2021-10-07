const isColor = (color) => {
  const el = document.createElement("div");
  el.style.color = color;
  return !!el.style.color.replace(/\s+/, "").toLowerCase();
};

export { isColor };
