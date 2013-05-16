Testing Sencha Touch with Karma
==================================

An small example of unit testing an Ext JS application using the Karam test runner.

## Why?

Automated testing should be automatic. This is one way, I am sure there are others but I like it this way and so can you :-)

## Overview

I  basically took two Git Repos, an example of a Sencha app with tests ( [UnitTestDemo] ) and one on Karma running jasmine tests automagically ( [Karma-RequireJs] ), and merged them.

## Get started

* Download this repo
```bash
* npm install -g karma
* cd /path/to/repo
* karma start
```

Result: Karma runs, the tests should pass, life is good

## Notes
* There are two karma.conf.js. The one in the 'root' directory is for the tests. The one in the sub-directory - 'tests/karma.conf.js' - is a left over from the [Karma-RequireJs] repo. I have left it there so I can refer to it.

* Sencha blog details:
  - http://www.sencha.com/blog/automating-unit-tests
  - https://www.sencha.com/blog/ui-testing-a-sencha-app

[UnitTestDemo]: https://github.com/SenchaProSvcs/UnitTestDemo
[Karma-RequireJs]: https://github.com/kjbekkelund/karma-requirejs
[Require.js]: http://requirejs.org/
[post]: http://jaketrent.com/post/test-requirejs-testacular/
