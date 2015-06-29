# kelvin-to-rgb

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

[![demo](http://i.imgur.com/HaOsghN.png)](https://mattdesl.github.io/kelvin-to-rgb)

[(demo)](https://mattdesl.github.io/kelvin-to-rgb) - [(source)](./demo.js)

Approximate an `[r, g, b]` color from a Kelvin temperature between 1,500 and 40,000. 

Details and original implementation by Tanner Helland, [see here](http://www.tannerhelland.com/4435/convert-temperature-rgb-algorithm-code/).

## Example

```js
var kelvinToRgb = require('kelvin-to-rgb')
var K = 1600

// get [ r, g, b ] color
var rgb = kelvinToRgb(K)
```

## Install

```sh
npm install kelvin-to-rgb --save
```

## Usage

[![NPM](https://nodei.co/npm/kelvin-to-rgb.png)](https://www.npmjs.com/package/kelvin-to-rgb)

#### `rgb = kelvinToRGB(kelvin, [out])`

Approximates the color temperature for the given `kelvin` value (should be between 1500 - 40000). Returns a new array, `[r, g, b]` with bytes in 0 - 255 range.

If `out` is specified and it is an array, it will be used instead of creating a new array (this is useful to avoid GC thrashing).

## License

MIT, see [LICENSE.md](http://github.com/glo-js/kelvin-to-rgb/blob/master/LICENSE.md) for details.
