var jsdom = require("jsdom/lib/old-api");
const fs = require('fs');
const { formMapping } = require('./form_mapping');
const url = "assets/autofill.mozdev.org.autofilltest.html"
const html = fs.readFileSync(url, 'utf8')


jsdom.env({
    html: html,
    scripts: [],
    done: (err, window) => {
        var result = formMapping(window);
        // Create a json file from result data
        fs.writeFile('mapping.json', JSON.stringify(result, null, 2), (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('Mapping written to file');
        });
    }
})