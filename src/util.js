const picomatch = require("picomatch")

function isMatch(patterns, currentPath) {
  const isMatched = picomatch.isMatch(currentPath, patterns)
  return isMatched
}
exports.isMatch = isMatch

function removeLocalePart(pathname) {
  if (!window.___gatsbyIntl.routed) {
    return pathname;
  }

  if (window.___gatsbyIntl.languages) {
	const languages = window.___gatsbyIntl.languages;
	
	var endIndex = pathname.indexOf("/", 1);
	const langKey = pathname.substring(1, endIndex);
	return languages.includes(langKey) ? pathname.substring(i) : pathname;
  }

  var i = pathname.indexOf("/", 1);
  return pathname.substring(i);
};
exports.removeLocalePart = removeLocalePart;
