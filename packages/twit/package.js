Package.describe({
  summary: "Twitter Api access"
});

Npm.depends({twit: "1.1.11"});

Package.on_use(function (api) {
  api.export('Twit'); // `api.export` introduced in Meteor 0.6.5
  api.add_files("twit.js", "server");
});