# Ruler Function

The exponent of the largest power of 2 which divides a given number 2n. The values of the ruler function for  n=1, 2, ..., are 1, 2, 1, 3, 1, 2, 1, 4, 1, 2, ...

```js
const ruler = require('ruler-function')

ruler(10)
// => [0, 1, 0, 2, 0, 1, 0, 3, 0, 1]
```
