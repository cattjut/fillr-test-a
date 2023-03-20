var jsdom = require("jsdom/lib/old-api");
const fs = require('fs');
const { formMapping } = require('./form_mapping');
const url = "assets/autofill.mozdev.org.autofilltest.html"


jsdom.env({
    html: url,
    scripts: [],
    done: (err, window) => {
        var result = formMapping(window);
        console.log('First result', result)
        // Create a json file from result data
        fs.writeFile('mapping.json', JSON.stringify(result), (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('Mapping written to file');
        });
    }
})