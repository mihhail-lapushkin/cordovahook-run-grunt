# cordovahook-run-grunt

![](https://badge.fury.io/js/cordovahook-run-grunt.svg)&nbsp;&nbsp;
![](https://david-dm.org/mihhail-lapushkin/cordovahook-run-grunt.png)

Allows you to run GruntJS tasks from any build step. The task will be run separately for each specified platform and will receive following arguments:
* `platform` – The platform that the task is running for
* `release` – Whether the `--release` flag was specified when running the Cordova CLI command
* `stack`, `debug`, `verbose` – To make the output more verbose

## How to install?
`npm install cordovahook-run-grunt --save`

## How to use inside hooks?
```
#!/usr/bin/env node
require('cordovahook-run-grunt')('your_grunt_task_name');
```

## Example, please!
Refer to [howtouse](https://github.com/mihhail-lapushkin/cordovahook-run-grunt/tree/master/howtouse) folder to get an understanding of how to setup this hook in your project.

## Release History
 * **0.1.0** / 2014-12-26
   * First version.