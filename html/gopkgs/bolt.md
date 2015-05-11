### https://github.com/boltdb/bolt

Bolt is a pure Go key/value store inspired by [Howard Chu's][hyc_symas] and
the [LMDB project][lmdb]. The goal of the project is to provide a simple,
fast, and reliable database for projects that don't require a full database
server such as Postgres or MySQL.

Since Bolt is meant to be used as such a low-level piece of functionality,
simplicity is key. The API will be small and only focus on getting values
and setting values. That's it.

[hyc_symas]: https://twitter.com/hyc_symas [lmdb]: http://symas.com/mdb/


### Project Status

Bolt is stable and the API is fixed. Full unit test coverage and randomized
black box testing are used to ensure database consistency and thread safety.
Bolt is currently in high-load production environments serving databases as
large as 1TB. Many companies such as Shopify and Heroku use Bolt-backed
services every day.

### Installing

To start using Bolt, install Go and run `go get`:

```sh
$ go get github.com/boltdb/bolt/...
```

This will retrieve the library and install the `bolt` command line utility into
your `$GOBIN` path.


### Opening a database

The top-level object in Bolt is a `DB`. It is represented as a single file on
your disk and represents a consistent snapshot of your data.

To open your database, simply use the `bolt.Open()` function:

```go
package main

import (
	"log"

	"github.com/boltdb/bolt"
)

func main() {
	// Open the my.db data file in your current directory.
	// It will be created if it doesn't exist.
	db, err := bolt.Open("my.db", 0600, nil)
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	...
}
```

Please note that Bolt obtains a file lock on the data file so multiple processes
cannot open the same database at the same time. Opening an already open Bolt
database will cause it to hang until the other process closes it. To prevent
an indefinite wait you can pass a timeout option to the `Open()` function:

```go
db, err := bolt.Open("my.db", 0600, &bolt.Options{Timeout: 1 * time.Second})
```

### License

MIT

### Authors

Ben Johnson et al