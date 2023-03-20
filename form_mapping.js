// ## Task #1 - Form Mapping

// Find all the input controls in the ‘RFC3106 ECLM eCommerce fields’ and ‘Amazon commerce fields’ forms in the web page `assets/autofill.mozdev.org.autofilltest.html`.

// Find the HTML autocomplete spec.  This WHATWG Living Spec describes the ‘autocomplete’ attribute of html inputs/controls.

// The output of this task is a JSON hash containing:

// - the key of each element in the hash will be the ‘name’ attribute of the control.
// - the corresponding value for each control name key will be an ‘autofill detail token’ describing your best guess at the most suitable section (optional), address type (optional) and autofill field name for the control as per the WHATWG autofill spec.

// Save the complete JSON hash (formatted and indented) to the file named mapping.json
// You can implement a script that outputs mapping.json, or you can write out the output manually.

function returnKeyByRegexMatch(fieldName, dict, defaultReturn) {
    for (var key in dict) {
        if (dict[key].test(fieldName)) {
            return key
        }
    }
    return defaultReturn
}

function adressType(fieldName) {
    // Dict of address types : regex
    var addressTypes = {
        'SHIPPING': /.*shipto.*/i,
        'BILLING': /.*billto.*/i,
        'RECEIPT': /.*receiptto.*/i
    }
    return returnKeyByRegexMatch(fieldName, addressTypes, 'HOME')
}

function sectionType(fieldName) {
    // Dict of section names : regex
    var sectionNames = {
        'card information': /.*card.*/i,
        'address': /.*addr|postalcode|city|zip|country|state|street.*/i,
        'name': /.*name.*/i,
        'phone': /.*phone.*/i,
        'email': /.*email.*/i,
        'username': /.*username.*/i,
        'password': /.*password.*/i,
        'organization': /.*organization|company.*/i
    }
    return returnKeyByRegexMatch(fieldName, sectionNames, null)
}

function autofillFieldName(fieldName) {
    // Dict of autofill field names : regex
    var autofillFieldNames = {
        'cc-exp-month': /.*card_expdate_month.*/i,
        'cc-exp-year': /.*card_expdate_year.*/i,
        'cc-exp': /.*card_expdate_day.*/i,
        'cc-number': /.*card_number.*/i,
        'cc-csc': /.*card_verification.*/i,
        'cc-type': /.*card_type.*/i,
        'cc-name': /.*card_name.*/i,
        'address-line1': /.*addr|city|zip|state|street.*/i,
        'honorific-prefix': /.*name_prefix.*/i,
        'honorific-suffix': /.*name_suffix.*/i,
        'given-name': /.*name_first.*/i,
        'additional-name': /.*name_middle.*/i,
        'family-name': /.*name_last.*/i,
        'country': /.*country.*/i,
        'postal-code': /.*postalcode.*/i,
        'tel': /.*phone.*/i,
        'email': /.*email.*/i,
        'username': /.*username.*/i,
        'password': /.*password.*/i,
        'organization': /.*organization|company.*/i
    }

    return returnKeyByRegexMatch(fieldName, autofillFieldNames, null)
}

function formMapping(window) {
    var mapping = {}
    for (i = 0; i < window.document.forms[1].elements.length; i++) {
        const element = window.document.forms[1].elements[i];
        var sectionTypeStr = sectionType(element.name)
        var adressTypeStr = null
        if (sectionTypeStr == 'address') {
            adressTypeStr = adressType(element.name)
        }
        var autofillFieldNameStr = autofillFieldName(element.name)
        mapping[element.name] = {
            'Section Type': sectionTypeStr,
            'Adress Type': adressTypeStr,
            'Autofill Field Name': autofillFieldNameStr
        }
    }

    return mapping
}

module.exports = { formMapping };