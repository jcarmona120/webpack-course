(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{10:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=l(n(1)),u=n(30),a=l(n(9));function l(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"render",value:function(){return o.default.createElement(u.BrowserRouter,null,o.default.createElement(a.default,null))}}]),t}();t.default=c},48:function(e,t,n){var r={"./About":20,"./About.js":20,"./AppRoot":10,"./AppRoot.js":10,"./Article":19,"./Article.js":19,"./DraftArticle":18,"./DraftArticle.js":18,"./Gallery":17,"./Gallery.js":17,"./NotFound":8,"./NotFound.js":8,"./Routes":9,"./Routes.js":9};function o(e){var t=u(e);if(!n.m[t]){var r=new Error("Module '"+e+"' ('"+t+"') is not available (weak dependency)");throw r.code="MODULE_NOT_FOUND",r}return n(t)}function u(e){var t=r[e];if(!(t+1)){var n=new Error('Cannot find module "'+e+'".');throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(r)},o.resolve=u,o.id=48,e.exports=o},49:function(e,t,n){var r={"./About":[20,3],"./About.js":[20,3],"./AppRoot":[10,4,5],"./AppRoot.js":[10,4,5],"./Article":[19,2],"./Article.js":[19,2],"./DraftArticle":[18,1],"./DraftArticle.js":[18,1],"./Gallery":[17,0],"./Gallery.js":[17,0],"./NotFound":[8],"./NotFound.js":[8],"./Routes":[9],"./Routes.js":[9]};function o(e){var t=r[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){var e=n(t[0]);return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})}):Promise.resolve().then(function(){var t=new Error('Cannot find module "'+e+'".');throw t.code="MODULE_NOT_FOUND",t})}o.keys=function(){return Object.keys(r)},o.id=49,e.exports=o},51:function(e,t,n){},53:function(e,t,n){},8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=(r=n(1))&&r.__esModule?r:{default:r};n(51),t.default=function(e){return e.children,o.default.createElement("div",{className:"NotFound"},o.default.createElement("div",{className:"inner"},o.default.createElement("h1",null,"Not Found")))}},9:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=s(n(47)),o=s(n(46)),u=s(n(45)),a=s(n(1)),l=n(30),c=s(n(32)),i=n(54);n(53);var f=s(n(8));function s(e){return e&&e.__esModule?e:{default:e}}var d=(0,c.default)(function(t){return(0,u.default)({id:"./",file:"/Users/lawrencewhiteside/Web/courses/webpack-course/src/components/Routes.js",load:function(){return Promise.all([n(49)("./"+t.page),(0,o.default)(""+t.page,{})]).then(function(e){return e[0]})},path:function(){return r.default.join(e,"./"+t.page)},resolve:function(){return n(48).resolve("./"+t.page)},chunkName:function(){return""+t.page}})});t.default=function(){return a.default.createElement("div",null,a.default.createElement("div",{className:"nav"},a.default.createElement(l.Link,{to:"/"},"Gallery"),a.default.createElement(l.Link,{to:"/about"},"About"),a.default.createElement(l.Link,{to:"/article/post"},"Article"),a.default.createElement(l.Link,{to:"/article/post2"},"Article 2")),a.default.createElement(i.Switch,null,a.default.createElement(l.Route,{exact:!0,path:"/"},a.default.createElement(d,{page:"Gallery"})),a.default.createElement(l.Route,{path:"/about",render:function(e){var t=e.staticContext,n=t?t.site:location.hostname.split(".")[0];return a.default.createElement(d,{site:n,page:"About"})}}),a.default.createElement(l.Route,{path:"/article/:slug",render:function(e){var t=e.staticContext,n=e.match,r=t?t.site:location.hostname.split(".")[0];return a.default.createElement(d,{site:r,match:n,page:"Article"})}}),a.default.createElement(l.Route,{component:f.default})))}}).call(this,"/")}}]);