### ezdocs Documentation Generator

ezdocs is a documentation generator that converts Markdown to HTML using the Blackfriday tool by Russ Ross and rendered using Bootstrap 2 (United theme by default). All you need is a Go web server and some JavaScript.

The left sidebar serves as table of contents for a particular topic.

The right sidebar serves as the actual content where code is syntax highlighted according to GitHub style.

### Features:

- Markdown to HTML (using Blackfriday tool)
- Bootstrap 2 (United theme by default)
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

Download Blackfriday Tool at

```
https://github.com/itmarketplace/blackfriday-tool/releases
```

#### 2. Create your Markdown content

#### 3. Convert Markdown to HTML

```
blackfriday-tool article.md article.html
```

#### 4. Download Caddy Web server

Download [here](http://caddyserver.com/download)

#### 5. Put your static files to a folder at the same level of Caddy

#### 6. Modify jqready.js to include route of html file converted by Blackfriday tool

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

#### 7. Run Caddy Web server

#### 8. See your ezdocs

For example, if you extracted Caddy to C:\web and your static files are at C:\web\static

you can see your ezdocs at http://localhost:2015/static

### License

MIT

Copyright (c) 2015 - Isagani Mendoza
