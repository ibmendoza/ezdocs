### https://github.com/hoisie/mustache

mustache.go is an implementation of the mustache template language in Go. It is better suited for website templates than Go's native pkg/template. mustache.go is fast -- it parses templates efficiently and stores them in a tree-like structure which allows for fast execution. 

### Documentation

For more information about mustache, check out the [mustache project page](http://github.com/defunkt/mustache) or the [mustache manual](http://mustache.github.com/mustache.5.html).

Also check out some [example mustache files](http://github.com/defunkt/mustache/tree/master/examples/)

### Installation
To install mustache.go, simply run 

`go get github.com/hoisie/mustache`. 

To use it in a program, use 

`import "github.com/hoisie/mustache"`

### Usage

There are four main methods in this package:

```go
    func Render(data string, context ...interface{}) string
    
    func RenderFile(filename string, context ...interface{}) string
    
    func ParseString(data string) (*Template, os.Error)
    
    func ParseFile(filename string) (*Template, os.Error)
```

### Example

```go
package main

import (
	"encoding/json"
	"fmt"
	"github.com/hoisie/mustache"
)

func main() {
	//for simplicity, json must be a struct of key-value pairs of
	//a) primitives (boolean, numbers, strings)
	//b) composite (array or objects)

	//Accepts any data type (interface{})

	byt := []byte(`{"num":6.13,"strs":["a","b"]}`)

	beatles := []byte(

		`{
  "beatles": [
    { "firstName": "John", "lastName": "Lennon" },
    { "firstName": "Paul", "lastName": "McCartney" },
    { "firstName": "George", "lastName": "Harrison" },
    { "firstName": "Ringo", "lastName": "Starr" }
  ]
}`)

	var dat map[string]interface{}

	if err := json.Unmarshal(byt, &dat); err != nil {
		panic(err)
	}
	fmt.Println(dat)

	rendered := mustache.Render("{{num}}, strs {{strs}}", dat)
	fmt.Println(rendered)

	data := mustache.Render("hello {{c}}", map[string]string{"c": "world"})
	fmt.Println(data)

	//beatles
	if err := json.Unmarshal(beatles, &dat); err != nil {
		panic(err)
	}
	data = mustache.Render("{{#beatles}} * {{firstName}} "+"\n {{/beatles}}", dat)

	fmt.Println(data)

}
```

### Output

```
map[num:6.13 strs:[a b]]
6.13, strs [a b]
hello world
  * John
  * Paul
  * George
  * Ringo
```