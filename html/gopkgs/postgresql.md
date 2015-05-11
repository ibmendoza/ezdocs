### pq - PostgreSQL driver (https://github.com/lib/pq)

### Install

	go get github.com/lib/pq

### Docs

For detailed documentation and basic usage examples, please see the package documentation at <http://godoc.org/github.com/lib/pq>.

### Tests

`go test` is used for testing.  A running PostgreSQL server is
required, with the ability to log in.  The default database to connect
to test with is "pqgotest," but it can be overridden using environment
variables.

Example:

	PGHOST=/var/run/postgresql go test github.com/lib/pq

Optionally, a benchmark suite can be run as part of the tests:

	PGHOST=/var/run/postgresql go test -bench .

### Features

* SSL
* Handles bad connections for `database/sql`
* Scan `time.Time` correctly (i.e. `timestamp[tz]`, `time[tz]`, `date`)
* Scan binary blobs correctly (i.e. `bytea`)
* Package for `hstore` support
* COPY FROM support
* pq.ParseURL for converting urls to connection strings for sql.Open.
* Many libpq compatible environment variables
* Unix socket support
* Notifications: `LISTEN`/`NOTIFY`

### License

MIT 

Copyright (c) 2011 by Blake Mizerany et al