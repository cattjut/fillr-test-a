module.exports.extract = function (window) {
  const dataFormNumber = 1;
  var metadata = {};
  for (i = 0; i < window.document.forms[dataFormNumber].elements.length; i++) {
    const element = window.document.forms[dataFormNumber].elements[i];
    if (element.name) {
      // remove all wrapping spaces
      var text = element.parentNode.parentNode.textContent.trim();
      // For country we need to select the string before \n because it contains all select options
      if (element.name == 'country') {
        text = element.parentNode.parentNode.textContent.split('\n')[0].trim();
      }
      metadata[text] = text + " " + element.name;
    }
  }
  return metadata
}
