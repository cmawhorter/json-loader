# package json loader for webpack

This is identical to **json-loader** except the parsed json for `package.json` skips all keys that start with "_" that get added by npm.  (These fields contain absolute paths for the dev machine doing the build among other stuff.)

The reason being that some packages do something like `require('package.json').version` to get the current version of the package.

## Installation

It doesn't play nice with json-loader, so don't use json-loader in addition to this.

`npm install --save cmawhorter/package-json-loader`

## Usage

If the resource is package.json, it'll ignore "_" prefixed keys.  If not, it'll do what json-loader does.

``` javascript
// webpack.config.js

module.exports {
  // ...
  module: {
    loaders: [
      { test: /\.json$/, loader: 'package-json-loader' },
    ],
  },
  // ...
};
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
