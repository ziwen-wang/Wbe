define("tools/dialog",[],function(){var o=function(){console.log("dialog..")};return o}),require.config({baseUrl:"js",paths:{jquery:"jquery.min"}}),requirejs(["tools/dialog","jquery"],function(o,e){console.log(e),o()}),define("index",function(){});