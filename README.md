## temporelle (time)

[![Build Status](https://travis-ci.org/TJkrusinski/temporelle.png?branch=master)](https://travis-ci.org/TJkrusinski/temporelle)

A library to create time series keys in an aggregate manner. Works great for producing distributed time series keys.

### Example

```
var temporelle = require('temporelle');

/**
 *	Creates the same key for 10 minute intervals
 */
temporelle('10 minutes');
// => integer

/**
 *	Creates the same key for 30 second intervals
 */
temporelle('30 seconds');
// => integer

/**
 *	Creates the same key for 1 hour intervals
 */
temporelle('1 hour');
// => integer

```

### Supported Units

* `millisecond[s]`
* `second[s]`
* `minute[s]`
* `hour[s]`
* `day[s]`
* `years[s]`

### Millisecond precision

Note that javascript isn't the best with numbers, so if you are trying to use sub 10 millisecond keys they may be inconsistent.

### Running tests

`$ npm test`

The tests require [mocha](https://github.com/visionmedia/mocha).

## License

(The MIT License)

Copyright (c) 2013 TJ Krusinski &lt;tj@shoflo.tv&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
