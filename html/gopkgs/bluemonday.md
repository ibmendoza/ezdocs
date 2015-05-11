### https://github.com/microcosm-cc/bluemonday

bluemonday: a fast golang HTML sanitizer (inspired by the OWASP Java HTML Sanitizer) to scrub user generated content of XSS

bluemonday is a HTML sanitizer implemented in Go. It is fast and highly configurable.

bluemonday takes untrusted user generated content as an input, and will return HTML that has been sanitised against a whitelist of approved HTML elements and attributes so that you can safely include the content in your web page.

If you accept user generated content, and your server uses Go, you **need** bluemonday.

The default policy for user generated content (`bluemonday.UGCPolicy().Sanitize()`) turns this:
```html
Hello <STYLE>.XSS{background-image:url("javascript:alert('XSS')");}</STYLE><A CLASS=XSS></A>World
```

Into a harmless:
```html
Hello World
```

And it turns this:
```html
<a href="javascript:alert('XSS1')" onmouseover="alert('XSS2')">XSS<a>
```

Into this:
```html
XSS
```

Whilst still allowing this:
```html
<a href="http://www.google.com/">
  <img src="https://ssl.gstatic.com/accounts/ui/logo_2x.png"/>
</a>
```

To pass through mostly unaltered (it gained a rel="nofollow" which is a good thing for user generated content):
```html
<a href="http://www.google.com/" rel="nofollow">
  <img src="https://ssl.gstatic.com/accounts/ui/logo_2x.png"/>
</a>
```

It protects sites from [XSS](http://en.wikipedia.org/wiki/Cross-site_scripting) attacks. There are many [vectors for an XSS attack](https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet) and the best way to mitigate the risk is to sanitize user input against a known safe list of HTML elements and attributes.

You should **always** run bluemonday **after** any other processing.

If you use [blackfriday](https://github.com/russross/blackfriday) or [Pandoc](http://johnmacfarlane.net/pandoc/) then bluemonday should be run after these steps. This ensures that no insecure HTML is introduced later in your process.

bluemonday is heavily inspired by both the [OWASP Java HTML Sanitizer](https://code.google.com/p/owasp-java-html-sanitizer/) and the [HTML Purifier](http://htmlpurifier.org/).