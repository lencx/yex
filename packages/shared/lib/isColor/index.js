'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const isColor = (color) => {
  const el = document.createElement("div");
  el.style.color = color;
  return !!el.style.color.replace(/\s+/, "").toLowerCase();
};

exports.isColor = isColor;
