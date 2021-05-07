const nunjucks = require('nunjucks');
const path = require('path');

module.exports.init = (app) => {
    const env = nunjucks
        .configure(path.resolve(__dirname, '..', 'app', 'views'), {
            autoescape: false,
            watch: true,
            express: app,
        })
        .addFilter('json', JSON.parse);

    app.set('engine', env);
};
