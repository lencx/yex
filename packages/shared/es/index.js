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

export { getURLParameters, isColor, isObject };
