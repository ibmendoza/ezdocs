### Courtesy: [Adapted from Joe Kampschmidt's Code] (http://www.jokecamp.com/blog/examples-of-creating-base64-hashes-using-hmac-sha256-in-different-languages/#go)

```go
package main

import (
	"crypto/hmac"
	"crypto/sha256"
	"crypto/sha512"
	"encoding/base64"
	"fmt"
	"hash"
)

//http://play.golang.org/p/NfFgzhtj-N

func ComputeHmac256(message string, secret string) string {
	key := []byte(secret)
	h := hmac.New(sha256.New, key)
	h.Write([]byte(message))
	return base64.StdEncoding.EncodeToString(h.Sum(nil))
}

func computeHmac(alg, message, secret string) string {
	key := []byte(secret)

	var h hash.Hash

	if alg == "HS256" {
		h = hmac.New(sha256.New, key)
	}

	if alg == "HS384" {
		h = hmac.New(sha512.New384, key)
	}

	if alg == "HS512" {
		h = hmac.New(sha512.New, key)
	}

	h.Write([]byte(message))
	
	return base64.StdEncoding.EncodeToString(h.Sum(nil))
}

func main() {
	fmt.Println(computeHmac("HS512", "Message", "secret"))
	fmt.Println(computeHmac("HS384", "Message", "secret"))
	fmt.Println(computeHmac("HS256", "Message", "secret"))	
}
```

### Output

```go
z12KOCXYQjCZyKf6WP+yYBONCS+IwNuv9oPbRcL4u+WetE4BvAm1Ysy+bEyGxq/QDLAufO0sPnVLUl/ubvPGdQ==
eoYi/PjpuFvMLLkozL4H0uoOIoCBurWdRYjsrANTjZ+dTpQZXnqq7gwPUPP3HRs2
qnR8UCqJggD55PohusaBNviGoOJ67HC6Btry4qXLVZc=
```