// ## Task #1 - Form Mapping

// Find all the input controls in the ‘RFC3106 ECLM eCommerce fields’ and ‘Amazon commerce fields’ forms in the web page `assets/autofill.mozdev.org.autofilltest.html`.

// Find the HTML autocomplete spec.  This WHATWG Living Spec describes the ‘autocomplete’ attribute of html inputs/controls.

// The output of this task is a JSON hash containing:

// - the key of each element in the hash will be the ‘name’ attribute of the control.
// - the corresponding value for each control name key will be an ‘autofill detail token’ describing your best guess at the most suitable section (optional), address type (optional) and autofill field name for the control as per the WHATWG autofill spec.

// Save the complete JSON hash (formatted and indented) to the file named mapping.json
// You can implement a script that outputs mapping.json, or you can write out the output manually.


function formMapping(window) {
    return 5
}

module.exports = { formMapping };