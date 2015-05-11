### github.com/chuckpreslar/emission

A simple event emitter for Go.

### Installation

With Google's [Go](http://www.golang.org) installed on your machine:

    $ go get -u github.com/chuckpreslar/emission

### Usage

If you've ever used an event emitter before, using Emission should be very familiar.

```go
package main

import (
  "fmt"
)

import (
  "github.com/chuckpreslar/emission"
)

func main() {
  emitter := emission.NewEmitter()

  hello := func(to string) {
    fmt.Printf("Hello %s!\n", to)
  }
  
  count := func(count int) {
    for i := 0; i < count; i++ {
      fmt.Println(i)
    }
  }
  
  emitter.On("hello", hello).
    On("count", count).
    Emit("hello", "world").
    Emit("count", 5)
}
```

### About

The `emission` package provides an event emitter making use of the reflect packages ability to call functions.  Using the `Call` method on the value of a function allows passing any type of function to the event emiiter, regardless of the functions parameters.

### Documentation

View godoc's or visit [godoc.org](http://godoc.org/github.com/chuckpreslar/emission).

    $ godoc emission
    
### License

The MIT License (MIT)

Copyright (c) 2013 - 2015 Chuck Preslar