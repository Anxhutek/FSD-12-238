# EventLoop

JS is synchromous and single threaded bydefault

## There can be async behaviour
- with BrowserAPI - 
setTimeout,setInterval,setImmediate,nextTick

- with promises
- with event handlers

## function not executed but must be executed after a file it fetch some status during the execution at final it may resolve  

##modern javascript is divided into 2 script
1. CommonJS (.cjs) -> supports OOPS -> require
   - priority (nextTick,Promise,setImmediate/setTimeout)
   
2. ModulesJS (.mjs) -> follow modular approach -> import
  - priority (Promise, nextTick , setImmediate/setTimeout)
