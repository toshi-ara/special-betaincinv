# Inversed incomplete Beta function

> Evaluates the inverse of the [incomplete beta function][incomplete-beta-function]

The [incomplete beta function][incomplete-beta-function]
 is defined as

```math
\mathrm{B}(x; a, b) = \int_0^x t^{a-1}(1-t)^{b-1}\,\mathrm{d}t
```

The **regularized incomplete beta function**
 (or **regularized beta function** for short) is defined
 in terms of the incomplete beta function and the complete beta function:

```math
\mathrm{I}_{x}(a, b) = \dfrac{\mathrm{B}(x; a, b)}{\mathrm{B}(a, b)}
```


This package is a rewrite of `ibetainc` function in
 [jstat](https://www.npmjs.com/package/jstat)
 in Typescript.
This package supports both CommonJs and ES Modules.


## Installation

``` bash
$ npm install @toshiara/special-betaincinv
```


## Usage

``` javascript
// for CommonJs
const { betaincinv } = require('@toshiara/special-betaincinv');

// for ES Modules
import { betaincinv } from '@toshiara/special-betaincinv';
```

### betaincinv(p, a, b)

Inverts the regularized
[incomplete beta function][incomplete-beta-function].

Contrary to the more commonly used definition,
 in this implementation the first parameter is the probability `p`
 and the second and third parameter are `a` and `b`.


```javascript
betaincinv(0.001, 1.1, 2);
// returns 0.0009549886032748866

betaincinv(0.1, 1, 2)
// returns 0.0513167019494862

betaincinv(0.4, 1.5, 2.5)
// returns 0.2904180852037441

betaincinv(0.8, 3, 4)
// returns 0.5853942353021732

betaincinv(0.999, 4.5, 3.5)
// returns 0.9485177162846162
```


## License

[MIT license](http://opensource.org/licenses/MIT).



[incomplete-beta-function]: https://en.wikipedia.org/wiki/Incomplete_beta_function


