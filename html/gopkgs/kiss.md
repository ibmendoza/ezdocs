### https://github.com/ibmendoza/go_ne

Fork of https://github.com/gophergala/go_ne

Kiss is an orchestration tool courtesy of James Rutherford and Tobias Haar, and can be used in conjunction with Anchor configuration management tool.

Kiss allows you to execute arbitrary tasks on a remote machine (or even locally). In Anchor CM's case, you upload the cmdfile to the remote servers you want to configure, and let Kiss update you with the results.

### Install

```go
go get github.com/ibmendoza/go_ne/kiss
```

### Usage

```shell
$ kiss -group=web -task=deploy
```

### Sample [YAML] (https://github.com/ibmendoza/go_ne/blob/master/kiss/.kiss.yml)

Assuming you uploaded cmdfile.txt to home folder of your remote server

```yaml
servergroups:
  web:
    - host: 192.168.1.102
      username: "root"
      password: "YourPasswordHere"
      port: 22

tasks:
  setup:
    steps:
      - command: cd /home && ./anchor cmdfile.txt
```

### This is not RPC

You upload cmdfile to remote servers which then executes it locally