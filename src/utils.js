export function getAllPlainValuesAsObj(obj) {
  const plain = {};
  Object.keys(obj).forEach(
    key => (typeof obj[key] !== "object" ? (plain[key] = obj[key]) : null)
  );
  return plain;
}

export function getThemeAsPlainTextByKeys(theme, ...keys) {
  const plain = getAllPlainValuesAsObj(theme);

  keys.forEach(key => theme[key] && Object.assign(plain, theme[key]));

  return plain;
}

export function innerMerge(obj, ...others) {
  others.forEach(v => {
    for (const key in v) {
      if (typeof obj[key] === "object" && typeof v[key] === "object") {
        obj[key] = innerMerge({}, obj[key], v[key]);
      } else {
        obj[key] = v[key];
      }
    }
  });

  return obj;
}
