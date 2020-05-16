const hbs = require("hbs");

// Helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear()
});