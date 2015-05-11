### https://github.com/ibmendoza/jason

Fork of https://github.com/antonholmquist/jason

Jason is designed to be convenient for reading arbitrary JSON while still honoring the strictness of the language. Inspired by other libraries and improved to work well for common use cases. It currently focuses on reading JSON data rather than creating it. [API Documentation](http://godoc.org/github.com/antonholmquist/jason) can be found on godoc.org.

### Install

```shell
go get github.com/ibmendoza/jason
```

### Import

```go
import (
  "github.com/ibmendoza/jason"
)
```

### Data types

The following golang values are used to represent JSON data types. It is consistent with how `encoding/json` uses primitive types.

- `bool`, for JSON booleans
- `json.Number/float64/int64`, for JSON numbers
- `string`, for JSON strings
- `[]*Value`, for JSON arrays
- `map[string]*Value`, for JSON objects
- `nil` for JSON null

### Example

```go
package main

import (
	"github.com/antonholmquist/jason"
	"log"
)

func processSlc(slc []*jason.Object) {
	lenSlcKeys := len(slc)
	var err error
	var title, url string
	for i := 0; i < lenSlcKeys; i++ {

		//print object
		obj, err1 := slc[i].GetObject()
		log.Println("OBJECT")
		if err1 == nil {
			log.Println(obj)

			log.Println("TITLE")
			title, err = obj.GetString("title")

			if err == nil {
				log.Println(title)
			}

			log.Println("URL")
			url, err = obj.GetString("url")

			if err == nil {
				log.Println(url)
			}
		}
	}
}

func main() {
	exampleJSON :=
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

	objA, _ := jason.NewObjectFromBytes([]byte(exampleJSON))

	slcKeys := objA.GetKeys()
	lenSlcKeys := len(slcKeys)

	if lenSlcKeys == 0 {
		log.Fatal("No object key")
	}

	if lenSlcKeys == 1 {
		log.Println(slcKeys)
	}

	if lenSlcKeys > 1 {
		log.Println("MORE THAN 1", slcKeys)
	}

	slc2 := make([]*jason.Object, 0)

	for i := 0; i < lenSlcKeys; i++ {
		obj, err1 := objA.GetObject(slcKeys[i])
		if err1 == nil {
			slc2 = append(slc2, obj)
		}

		//get heading name
		str, err2 := obj.GetString("name")
		if err2 == nil {
			log.Println("NAME")
			log.Println(str)
		}

		//get entries array
		objArr, err3 := obj.GetObjectArray("entries")
		if err3 == nil {
			log.Println("ENTRIES")
			log.Println(objArr)

			processSlc(objArr)
		}
	}
}
```

### Output

```
MORE THAN 1 [a1 a2]
NAME
HEADING 1
NAME
HEADING 2
ENTRIES
[{"title":"Title1","url":"/url1"} {"title":"Title2","url":"/url2"}]
OBJECT
{"title":"Title1","url":"/url1"}
TITLE
Title1
URL
/url1
OBJECT
{"title":"Title2","url":"/url2"}
TITLE
Title2
URL
/url2
```