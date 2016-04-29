Package.describe({
  name: 'jsep:jquery.tokeninput',
  version: '1.6.2_1',
  // Brief, one-line summary of the package.
  summary: 'A Tokenizing Autocomplete Text Entry',
  git: 'https://github.com/jsep/jquery-tokeninput',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use("jquery");
  api.use('ecmascript');

  api.mainModule('src/jquery.tokeninput.js', 'client');
});

Package.onTest(function(api) {
  api.use("jsep:jquery.tokeninput");
  api.use("ecmascript");
  api.use("templating");
  api.use("practicalmeteor:mocha");

  api.addFiles("tests/test.html", "client");
  api.addFiles("tests/exists.js", "client");
});
