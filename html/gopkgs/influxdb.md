### https://github.com/influxdb/influxdb

Scalable datastore for metrics, events, and real-time analytics http://influxdb.com

### An Open-Source, Distributed, Time Series Database


InfluxDB is an open source **distributed time series database** with **no external dependencies**. It's useful for recording metrics, events, and performing analytics.

## Features

* Built-in [HTTP API] (http://influxdb.com/docs/v0.9/concepts/reading_and_writing_data.html) so you don't have to write any server side code to get up and running.
* Clustering is supported out of the box, so that you can scale horizontally to handle your data.
* Simple to install and manage, and fast to get data in and out.
* It aims to answer queries in real-time. That means every data point is
  indexed as it comes in and is immediately available in queries that
  should return in < 100ms.


### Starting InfluxDB
* `service influxdb start` if you have installed InfluxDB using an official Debian or RPM package.
* `$GOPATH/bin/influxd` if you have built InfluxDB from source.

### Creating your first database

```JSON
curl -G 'http://localhost:8086/query' --data-urlencode "q=CREATE DATABASE mydb"
```

### Insert some data
```JSON
curl -H "Content-Type: application/json" http://localhost:8086/write -d '
{
    "database": "mydb",
    "retentionPolicy": "default",
    "points": [
        {
            "timestamp": "2014-11-10T23:00:00Z",
            "name": "cpu",
             "tags": {
                 "region":"uswest",
                 "host": "server01"
            },
             "fields":{
                 "value": 100
            }
         }
      ]
}'
```
### Query for the data
```JSON
curl -G http://localhost:8086/query?pretty=true \
--data-urlencode "db=mydb" --data-urlencode "q=SELECT * FROM cpu"
```