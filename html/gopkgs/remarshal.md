### https://github.com/ibmendoza/remarshal

Convert between TOML, YAML and JSON.

Convenience wrapper of [Danyil Bohdan's remarshal package] (https://github.com/dbohdan/remarshal) which converts his CLI app to library.

### API

```go
func Convert(input []byte, inputF, outputF string) (string, error)
```

where 

- input - convert your input string to []byte
- inputF - can be TOML, JSON or YAML
- outputF - can be TOML, JSON or YAML

It is up to you if you want to write the converted string to a file which is trivial.

### Example

```go
package main

import (
	"fmt"
	"github.com/ibmendoza/remarshal"
)

func main() {
	str :=
		`
{
    "a1" : {
        "name" : "HEADING 1",
        "b2" : {
            "name" : "Heading 1.1",
            "entries" : [{
                    "title" : "Title1",
                    "url" : "/url1"
                }, {
                    "title" : "Title2",
                    "url" : "/url2"
                }
            ]
        }
    },

    "a2" : {
        "name" : "HEADING 2",
        "entries" : [{
                "title" : "Title1",
                "url" : "/url1"
            }, {
                "title" : "Title2",
                "url" : "/url2"
            }
        ],
        "b2" : {
            "name" : "Heading 2.1",
            "entries" : [{
                    "title" : "Title1",
                    "url" : "/url1"
                }, {
                    "title" : "Title2",
                    "url" : "/url2"
                }
            ]
        }
    }
} 		
		`

	c, _ := remarshal.Convert([]byte(str), "JSON", "TOML")

	fmt.Println(c)

	c, _ = remarshal.Convert([]byte(str), "JSON", "YAML")

	fmt.Println(c)
}
```



### Input: JSON

```javascript
{
    "a1" : {
        "name" : "HEADING 1",
        "b2" : {
            "name" : "Heading 1.1",
            "entries" : [{
                    "title" : "Title1",
                    "url" : "/url1"
                }, {
                    "title" : "Title2",
                    "url" : "/url2"
                }
            ]
        }
    },

    "a2" : {
        "name" : "HEADING 2",
        "entries" : [{
                "title" : "Title1",
                "url" : "/url1"
            }, {
                "title" : "Title2",
                "url" : "/url2"
            }
        ],
        "b2" : {
            "name" : "Heading 2.1",
            "entries" : [{
                    "title" : "Title1",
                    "url" : "/url1"
                }, {
                    "title" : "Title2",
                    "url" : "/url2"
                }
            ]
        }
    }
} 
```

### Output: TOML

```toml
[a1]
  name = "HEADING 1"
  [a1.b2]
    name = "Heading 1.1"

    [[a1.b2.entries]]
      title = "Title1"
      url = "/url1"

    [[a1.b2.entries]]
      title = "Title2"
      url = "/url2"

[a2]
  name = "HEADING 2"
  [a2.b2]
    name = "Heading 2.1"

    [[a2.b2.entries]]
      title = "Title1"
      url = "/url1"

    [[a2.b2.entries]]
      title = "Title2"
      url = "/url2"

  [[a2.entries]]
    title = "Title1"
    url = "/url1"

  [[a2.entries]]
    title = "Title2"
    url = "/url2"
```

### Output: YAML

```
a1:
  b2:
    entries:
    - title: Title1
      url: /url1
    - title: Title2
      url: /url2
    name: Heading 1.1
  name: HEADING 1
a2:
  b2:
    entries:
    - title: Title1
      url: /url1
    - title: Title2
      url: /url2
    name: Heading 2.1
  entries:
  - title: Title1
    url: /url1
  - title: Title2
    url: /url2
  name: HEADING 2
```