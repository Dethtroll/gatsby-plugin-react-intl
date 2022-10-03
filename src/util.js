const picomatch = require("picomatch")

function isMatch(patterns, currentPath) {
  const isMatched = picomatch.isMatch(currentPath, patterns)
  return isMatched
}
exports.isMatch = isMatch

function removeLocalePart(pathname) {
  if (typeof window === "undefined" || !window.___gatsbyIntl.routed) {
    return pathname;
  }

  //processing via two symbol languages
  if (typeof window === "undefined" || !window.___gatsbyIntl.languages) {
  var i = pathname.indexOf("/", 1);
    if (i > 3) {
      return pathname;
    }
    return pathname.substring(i);
  }

  //processing via languages in window
  const languages = window.___gatsbyIntl.languages;

  var endIndex = pathname.indexOf("/", 1);
  const langKey = pathname.substring(1, endIndex);
  return languages.includes(langKey) ? pathname.substring(endIndex) : pathname;
};
exports.removeLocalePart = removeLocalePart;
