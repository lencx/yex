'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const getURLParameters = (url) => (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce((a, v) => (a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1), a), {});

exports.getURLParameters = getURLParameters;
