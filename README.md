# Base64 encoder / decoder

### Encode a string to a Base64URL string

`function stringToBase64Url(input: string): string`

```javascript
import { stringToBase64Url } from "@popovmp/base64";
const base64Url = stringToBase64Url("foo"); //=> "Zm9v"
```

### Encode a Uint8Array array to base64 string

`function base64UrlToString(strB64Url: string): string`

```javascript
import { base64UrlToString } from "@popovmp/base64";
const text = base64UrlToString("Zm9v"); //=> "foo"
```

### Decode a base64 string to Uint8Array array

`function base64ToBytes(input: string): Uint8Array`

```javascript
import { base64ToBytes } from "@popovmp/base64";
const bytes = base64ToBytes("Zm9v");
```

### Converts a string to a base64 string

`function stringToBase64(str: string): string`

```javascript
import { stringToBase64 } from "@popovmp/base64";
const base64 = stringToBase64("foo"); //=> "Zm9v"
```

### Converts a base64 string to a string.

`function base64ToString(strB64: string): string`

```javascript
import { base64ToString } from "@popovmp/base64";
const text = base64ToString("Zm9v"); //=> "foo"
```

### Converts a base64 string to a base64url string

`function base64ToBase64Url(strB64: string): string`

```javascript
import { base64ToBase64Url } from "@popovmp/base64";
const text = base64ToBase64Url("foo++/=="); //=> "foo--_"
```

### Converts a base64url string to a base64 string

`function base64UrlToBase64(strB64Url: string): string`

```javascript
import { base64UrlToBase64 } from "@popovmp/base64";
const text = base64UrlToBase64("foo--_"); //=> "foo++/=="
```
