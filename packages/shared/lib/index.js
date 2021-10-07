'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const isObject = (value) => {
  const type = typeof value;
  return value != null && (type === "object" || type === "function");
};

const isColor = (color) => {
  const el = document.createElement("div");
  el.style.color = color;
  return !!el.style.color.replace(/\s+/, "").toLowerCase();
};

const getURLParameters = (url) => (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce((a, v) => (a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1), a), {});

exports.getURLParameters = getURLParameters;
exports.isColor = isColor;
exports.isObject = isObject;
