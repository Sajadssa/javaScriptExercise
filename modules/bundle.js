(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// const { userName } = require("./utils");
const utils = require('./utils');
// // console.log(utils.fetchApi);
console.log(utils.fetchApi());

// console.log(userName);
// console.log('hi js how is it going?');

},{"./utils":2}],2:[function(require,module,exports){
const userName="sajad";
function fetchApi(){
    console.log('url successfully fetched...');
}
// export codes for use in anther files
//module is an object and thats have property called name "exports" that it is an object so we can change value property

// module.exports.userName=userName;
// module.exports.fetchApi=fetchApi;
module.exports=fetchApi;
module.exports={
    userName,
    fetchApi,
}
// console.log(module);
},{}]},{},[1]);
