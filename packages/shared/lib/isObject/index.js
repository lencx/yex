'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const isObject = (value) => {
  const type = typeof value;
  return value != null && (type === "object" || type === "function");
};

exports.isObject = isObject;
