require.config({
 baseUrl: '../bower_components',
 paths: {
    jquery: "jsquery/dist",
    bootstrap: "bootstrap/dist/js",
    markdown: "markdown/lib"
 },
});

requirejs(['popup']);

//  jquery: 'libs/jquery/jquery',
//  underscore: 'libs/underscore/underscore',
//  backbone: 'libs/backbone/backbone',
//  babysitter: 'libs/backbone.babysitter/lib/backbone.babysitter',
//  wreqr: 'libs/backbone.wreqr/lib/backbone.wreqr',
//  marionette: 'libs/marionette/lib/backbone.marionette',
//  json2: 'libs/json2/json2',
//  hogan: 'libs/hogan/web/1.0.0/hogan',
//  mustache: 'libs/mustache/mustache',
//  text: 'libs/requirejs-text/text',
//  bootstrap: 'libs/bootstrap/docs/assets/js/bootstrap'
// },
// ...
//});
