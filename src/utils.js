export function getAllPlainValuesAsObj(obj) {
  const plain = {};
  Object.keys(obj).forEach(key => typeof obj[key] !== "object" ? plain[key] = obj[key] : null);
  return plain;
}

export function getThemeAsPlainTextByKeys(theme, ...keys) {
  const plain = getAllPlainValuesAsObj(theme);

  keys.forEach(key => theme[key] && Object.assign(plain, theme[key]));

  return plain;
}
