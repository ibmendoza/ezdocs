### ezdocs Documentation Generator

ezdocs is a documentation generator that converts Markdown to HTML using the Blackfriday tool by Russ Ross and rendered using Bootstrap 2 (United theme by default). All you need is a Go web server and some JavaScript.

The left sidebar serves as table of contents for a particular topic.

The right sidebar serves as the actual content where code is syntax highlighted according to GitHub style.

### Features:

- Markdown to HTML (using Blackfriday tool)
- Bootstrap 2 (United theme by default)
- A local Web server (compile it in Go)
- Static content but dynamically rendered at client-side using AJAX
- Tree view of table of contents (left side bar)
- Powered by highlight.js for syntax highlight

### Customization:

- The table of contents can be 3 levels deep
- Bootstrap 2 theme can be modified (located at css folder)

### Folder structure:

- css
- html
- img
- js
- index.html

### Steps:

#### 1 .Compile Blackfriday tool

```go
go get github.com/russross/blackfriday-tool
```

#### 2. Create your Markdown content

#### 3. Convert Markdown to HTML

```
blackfriday-tool article.md article.html
```

#### 4. Get Go httprouter package

```go
go get github.com/julienschmidt/httprouter
```

#### 5. Build local Web server

```go
package main

import (
	"fmt"
	"github.com/julienschmidt/httprouter"
	"log"
	"net/http"
	"runtime"
)

func Index(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	fmt.Fprint(w, "Welcome!\n")
}

func Hello(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	fmt.Fprintf(w, "hello, %s!\n", ps.ByName("name"))
}

func main() {
	runtime.GOMAXPROCS(runtime.NumCPU())

	router := httprouter.New()
	router.GET("/", Index)
	router.GET("/hello/:name", Hello)

	//https://github.com/julienschmidt/httprouter/issues/7
	router.ServeFiles("/static/*filepath", http.Dir("C:/static"))

	log.Fatal(http.ListenAndServe(":8080", router))
}
```

#### 6. Put your static files to a folder of your choosing

In Windows example above, it is located at C:/Static. See folder structure

#### 7. Modify jqready.js to include route of html file converted by Blackfriday tool

```javascript
  var routes = {
	//javascript
	'/anchor': newHandler(f, "anchor"),
	'/kiss': newHandler(f, "kiss"),
	'/httprouter': newHandler(f, "httprouter"),
	'/jwt':  newHandler(f, "jwt"),
	'/salt': newHandler(f, "salt")
  }
```

#### 8. Run local Web server

#### 9. See your ezdocs

Open your Web browser, put http://localhost:8080/static

### License

MIT

Copyright (c) 2015 - Isagani Mendoza
