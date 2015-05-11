### Graph Data Structure (https://github.com/akualab/graph)

A thread-safe implementation of a graph data structure as a data store.

**This project is a fork of https://github.com/sauerbraten/graph-store adapted to support directed graphs with weighted arcs. Removed locks.**

Removed gorouting synchronization because implementing and maintaining a goroutine-safe library is too complex. Concurrent access with writes can be synchronized externally. Mutliple goroutines reading is OK. This is the same approach used in the standard library.

Features:

* Directed graph with weighted arcs.
* Graph manipulation methods.
* A-Star search.
* IO support for GOB/JSON/YAML
* Arc weight normalization.


For more info about graphs visit https://en.wikipedia.org/wiki/Graph_(abstract_data_type)

### Usage

Get the package:

	$ go get github.com/akualab/graph

### Create a graph.

```Go
    g := graph.New()

	// create nodes with values.
	g.Set("1", 123)
	g.Set("2", 678)
	g.Set("3", "abc")
	g.Set("4", "xyz")
	g.Set("xxx", "yyy")

	// make connections (ignoring errors for clarity.)
	g.Connect("1", "2", 5)
    g.Connect("1", "3", 1)
	g.Connect("2", "3", 9)
	g.Connect("4", "2", 3)
	g.Connect("4", "xxx", 1.11)

    // to JSON
	jsonEncoded, _ := json.Marshal(g)

    // to YAML
	yamlEncoded, _ := goyaml.Marshal(g)

    // to GOB
    buf := &bytes.Buffer{}
	enc := gob.NewEncoder(buf)
	enc.Encode(g)

    // to DOT (use the dot sub-package.)
    dot.DOT(g, "some graph")
```

See tests for details.

### Documentation

For full package documentation, visit http://godoc.org/github.com/akualab/graph


### License

Simplified BSD License