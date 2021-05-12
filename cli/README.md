cli
===



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/cli.svg)](https://npmjs.org/package/cli)
[![Downloads/week](https://img.shields.io/npm/dw/cli.svg)](https://npmjs.org/package/cli)
[![License](https://img.shields.io/npm/l/cli.svg)](https://github.com/aekostyuk/bcli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g cli
$ bcli COMMAND
running command...
$ bcli (-v|--version|version)
cli/0.0.0 win32-x64 node-v14.16.0
$ bcli --help [COMMAND]
USAGE
  $ bcli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`bcli hello`](#bcli-hello)
* [`bcli help [COMMAND]`](#bcli-help-command)

## `bcli hello`

Describe the command here

```
USAGE
  $ bcli hello

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/hello.js](https://github.com/aekostyuk/bcli/blob/v0.0.0/src/commands/hello.js)_

## `bcli help [COMMAND]`

display help for bcli

```
USAGE
  $ bcli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_
<!-- commandsstop -->
