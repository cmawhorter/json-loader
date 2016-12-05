# package json loader for webpack

This is identical to **json-loader** except the parsed json skips all keys that start with "_".  

The reason being that some packages do something like `require('package.json').version` to get the current version of the package.  The problem is that with json-loader, all that package.json data ends up in the bundle (including absolute paths for the developer machine doing the build).

## Installation

`npm install --save json-loader`

## Usage

``` javascript
var json = require("json-loader!./file.json");
// => returns file.json content as json parsed object
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
