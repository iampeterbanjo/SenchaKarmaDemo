// tests are kicked-off from here
var tests = [];
for (var file in window.__karma__.files) {
    if (/Spec\.js$/.test(file)) {
        tests.push(file);
    }
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/src',

    paths: {
        'jquery': '../tests/lib/jquery',
        'underscore': '../tests/lib/underscore',
        'ext': '../resources/extjs-4.1.0/ext-all',
        'app': '../tests/src/app',
        'ChicagoMeetup.MeetupApiUtil': '../app/MeetupApiUtil',
    },

    shim: {
        'underscore': {
            exports: '_'
        },
        'ext': {
            exports: 'Ext'
        },
        'app': {
            exports: 'App'
        },
        'ChicagoMeetup.MeetupApiUtil': {
            deps: ['ext'],
            exports: 'ChicagoMeetup'
        }
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});

