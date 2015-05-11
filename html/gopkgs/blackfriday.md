### https://github.com/russross/blackfriday

Blackfriday is a Markdown processor implemented in Go. It is paranoid about its input (so you can safely feed it user-supplied data), it is fast, it supports common extensions (tables, smart
punctuation substitutions, etc.), and it is safe for all UTF-8 (unicode) input.

HTML output is currently supported, along with Smartypants
extensions. An experimental LaTeX output engine is also included.

It started as a translation from C of Sundown.


### Installation

    go get github.com/russross/blackfriday

will download, compile, and install the package into your `$GOPATH`
directory hierarchy. Alternatively, you can achieve the same if you
import it into a project:

    import "github.com/russross/blackfriday"

and `go get` without parameters.

### Usage

For basic usage, it is as simple as getting your input into a byte
slice and calling:

    output := blackfriday.MarkdownBasic(input)

This renders it with no extensions enabled. To get a more useful
feature set, use this instead:

    output := blackfriday.MarkdownCommon(input)

### Sanitize untrusted content

Blackfriday itself does nothing to protect against malicious content. If you are
dealing with user-supplied markdown, we recommend running blackfriday's output
through HTML sanitizer such as
[Bluemonday](https://github.com/microcosm-cc/bluemonday).

Here's an example of simple usage of blackfriday together with bluemonday:

``` go
import (
    "github.com/microcosm-cc/bluemonday"
    "github.com/russross/blackfriday"
)

// ...
unsafe := blackfriday.MarkdownCommon(input)
html := bluemonday.UGCPolicy().SanitizeBytes(unsafe)
```

### License

Simplified BSD License. Copyright © 2011 Russ Ross