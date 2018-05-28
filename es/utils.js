var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

export function getAllPlainValuesAsObj(obj) {
  var plain = {};
  Object.keys(obj).forEach(function (key) {
    return _typeof(obj[key]) !== "object" ? plain[key] = obj[key] : null;
  });
  return plain;
}

export function getThemeAsPlainTextByKeys(theme) {
  var plain = getAllPlainValuesAsObj(theme);

  for (var _len = arguments.length, keys = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    keys[_key - 1] = arguments[_key];
  }

  keys.forEach(function (key) {
    return theme[key] && Object.assign(plain, theme[key]);
  });

  return plain;
}