# Is empty string
![Travis CI](https://travis-ci.org/rojo2/is-empty-string.svg?branch=master)

```javascript
import isEmptyString from "@rojo2/is-empty-string"

isEmptyString(""); // true
isEmptyString(" "); // true
isEmptyString(new String("")); // true
isEmptyString(null); // false
isEmptyString(undefined); // false
isEmptyString(1); // false
isEmptyString({}); // false
isEmptyString([]); // false
```

Made with :heart: by ROJO 2 (http://rojo2.com)
