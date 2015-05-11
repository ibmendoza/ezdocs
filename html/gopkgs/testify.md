### https://github.com/stretchr/testify

Go code (golang) set of packages that provide many tools for testifying that your code will behave as you intend.

Features include:

  * [Easy assertions](#assert-package)
  * [Mocking](#mock-package)
  * [HTTP response trapping](#http-package)
  * [Testing suite interfaces and functions](#suite-package)

Get started:

  * Install testify with [one line of code](#installation), or [update it with another](#staying-up-to-date)
  * For an introduction to writing test code in Go, see our [blog post article](http://blog.stretchr.com/2014/03/05/test-driven-development-specifically-in-golang/) or check out  http://golang.org/doc/code.html#Testing
  * Check out the API Documentation http://godoc.org/github.com/stretchr/testify
  * To make your testing life easier, check out our other project, [gorc](http://github.com/stretchr/gorc)
  * A little about [Test-Driven Development (TDD)](http://en.wikipedia.org/wiki/Test-driven_development)



[`assert`](http://godoc.org/github.com/stretchr/testify/assert "API documentation") package
-------------------------------------------------------------------------------------------

The `assert` package provides some helpful methods that allow you to write better test code in Go.

  * Prints friendly, easy to read failure descriptions
  * Allows for very readable code
  * Optionally annotate each assertion with a message

See it in action:

```go
package yours

import (
  "testing"
  "github.com/stretchr/testify/assert"
)

func TestSomething(t *testing.T) {

  // assert equality
  assert.Equal(t, 123, 123, "they should be equal")

  // assert inequality
  assert.NotEqual(t, 123, 456, "they should not be equal")

  // assert for nil (good for errors)
  assert.Nil(t, object)

  // assert for not nil (good when you expect something)
  if assert.NotNil(t, object) {

    // now we know that object isn't nil, we are safe to make
    // further assertions without causing any errors
    assert.Equal(t, "Something", object.Value)
  }
}
```

  * Every assert func takes the `testing.T` object as the first argument.  This is how it writes the errors out through the normal `go test` capabilities.
  * Every assert func returns a bool indicating whether the assertion was successful or not, this is useful for if you want to go on making further assertions under certain conditions.

if you assert many times, use the below:

```go
package yours

import (
  "testing"
  "github.com/stretchr/testify/assert"
)

func TestSomething(t *testing.T) {
  assert := assert.New(t)

  // assert equality
  assert.Equal(123, 123, "they should be equal")

  // assert inequality
  assert.NotEqual(123, 456, "they should not be equal")

  // assert for nil (good for errors)
  assert.Nil(object)

  // assert for not nil (good when you expect something)
  if assert.NotNil(object) {

    // now we know that object isn't nil, we are safe to make
    // further assertions without causing any errors
    assert.Equal("Something", object.Value)
  }
}
```

### Installation

To install Testify, use `go get`:

    go get github.com/stretchr/testify

This will then make the following packages available to you:

    github.com/stretchr/testify/assert
    github.com/stretchr/testify/mock
    github.com/stretchr/testify/http

Import the `testify/assert` package into your code using this template:

```go
package yours

import (
  "testing"
  "github.com/stretchr/testify/assert"
)

func TestSomething(t *testing.T) {

  assert.True(t, true, "True is true!")

}
```


### Staying up to date


To update Testify, use `go get -u`:

    go get -u github.com/stretchr/testify



### License

MIT 

Copyright (c) 2012 - 2013 Mat Ryer and Tyler Bunnell