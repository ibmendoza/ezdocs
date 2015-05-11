### Cayley (https://github.com/google/cayley)

Cayley is an open-source graph inspired by the graph database behind [Freebase](http://freebase.com) and Google's [Knowledge Graph](https://www.google.com/search/about/insidesearch/features/search/knowledge.html).

Its goal is to be a part of the developer's toolbox where [Linked Data](http://linkeddata.org/) and graph-shaped data (semantic webs, social networks, etc) in general are concerned.

### Features

* [Triplestore] (http://en.wikipedia.org/wiki/Triplestore)
* Written in [Go](http://golang.org)
* Easy to get running (3 or 4 commands, below)
* RESTful API
  * or a REPL if you prefer
* Built-in query editor and visualizer
* Multiple query languages:
  * JavaScript, with a [Gremlin](http://gremlindocs.com/)-inspired\* graph object.
  * (simplified) [MQL](https://developers.google.com/freebase/v1/mql-overview), for Freebase fans
* Plays well with multiple backend stores:
  * [LevelDB](https://github.com/google/leveldb)
  * [Bolt](https://github.com/boltdb/bolt)
  * [MongoDB](https://www.mongodb.org) for distributed stores
  * In-memory, ephemeral
* Modular design; easy to extend with new languages and backends
* Good test coverage
* Speed, where possible.

### License

Apache 2.0

### Authors

Barak Michener et al