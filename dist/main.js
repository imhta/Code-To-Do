!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=4)}([function(e,t,r){var n=r(1);"string"==typeof n&&(n=[[e.i,n,""]]);var o={insert:"head",singleton:!1};r(3)(n,o);n.locals&&(e.exports=n.locals)},function(e,t,r){(e.exports=r(2)(!1)).push([e.i,'body{margin:0px;box-sizing:border-box;font-family:"Montserrat", sans-serif}body #root{min-width:100vw;min-height:100vh;display:flex;justify-content:center;align-items:center}body #root #home-wrapper{max-width:600px;max-height:700px;width:100%;position:relative;background-color:blueviolet;border:5px solid whitesmoke;box-shadow:2px 2px 2px 2px grey;border-radius:25px;overflow:hidden;overflow-y:scroll}body #root #home-wrapper #menu-wrapper{background-color:#3c0174;border-radius:25px;height:80px;margin:15px;padding:10px;position:sticky;top:15px;z-index:2;overflow:hidden;animation:shrink 300ms ease-in-out}body #root #home-wrapper #menu-wrapper nav{display:flex;justify-content:space-between;align-items:flex-start}body #root #home-wrapper #menu-wrapper nav #burger-btn{cursor:pointer}body #root #home-wrapper #menu-wrapper nav .nav-left,body #root #home-wrapper #menu-wrapper nav .nav-right{display:flex;justify-content:space-between;align-items:center;font-size:20px;padding:5px 10px;color:white}body #root #home-wrapper #menu-wrapper nav #nav-status{margin-left:15px}body #root #home-wrapper #menu-wrapper #menu-content #todo-menu-header{display:flex;width:fit-content;border:2px solid white;border-radius:25px;color:white;font-size:20px;font-weight:bold;margin:20px auto}body #root #home-wrapper #menu-wrapper #menu-content #todo-menu-header div{padding:15px 30px}body #root #home-wrapper #menu-wrapper #menu-content #todo-menu-header .is-selected{background-color:blueviolet}body #root #home-wrapper #menu-wrapper #menu-content #projects-section header{display:flex;justify-content:space-between;align-items:center;color:white;padding:10px 20px}body #root #home-wrapper #menu-wrapper #menu-content #projects-section header #project-add-btn{width:30px;height:30px;display:flex;justify-content:center;align-items:center;border:2px solid white;border-radius:50%;background-color:transparent;color:white}body #root #home-wrapper #menu-wrapper #menu-content #projects-section header #project-add-btn:hover{background-color:white;color:#3c0174;cursor:pointer}body #root #home-wrapper #menu-wrapper #menu-content #projects-section #project-list{list-style:none;padding:0px;margin:0px;min-height:200px}body #root #home-wrapper #menu-wrapper #menu-content #projects-section #project-list li{color:white;border:2px solid white;font-size:18px;padding:15px 20px;margin:5px 0px;border-radius:5px}body #root #home-wrapper .is-menu-expanded{padding-bottom:30px !important;height:auto !important;animation:grow 300ms ease-in-out !important}body #root #home-wrapper #main-card{width:80%;padding:10px 20px;margin:0px auto;background-color:honeydew;border-radius:5px}body #root #home-wrapper #main-card ul{list-style:none;padding:0px;margin:0px;min-height:400px}body #root #home-wrapper #main-card ul li{background-color:whitesmoke;font-size:18px;padding:15px 20px;margin:5px 0px;border-radius:5px}body #root #home-wrapper #main-card .btn-wrapper{position:sticky;width:100%;display:flex;justify-content:center;bottom:20px}body #root #home-wrapper #main-card #add-todo-btn{width:60px;height:60px;font-size:20px;color:white;background-color:#3c0174;border:none;border-radius:100%;z-index:2}body #root #home-wrapper #main-card #add-todo-btn:hover{cursor:pointer}body #root #home-wrapper #main-card #add-todo-btn:active{border:2px solid;box-shadow:0px 0px 40px 7px darkslateblue}@media screen and (max-width: 600px){body #root{display:block}body #root #home-wrapper{height:100vh;background-color:blueviolet;border:none;box-shadow:none;border-radius:0px}}@keyframes grow{from{height:80px}to{height:350px}}@keyframes shrink{from{height:500px}to{height:60px}}\n',""])},function(e,t,r){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=function(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"==typeof btoa){var o=(a=n,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(d," */")),i=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot).concat(e," */")}));return[r].concat(i).concat([o]).join("\n")}var a,s,d;return[r].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(r,"}"):r})).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(n[i]=!0)}for(var a=0;a<e.length;a++){var s=e[a];null!=s[0]&&n[s[0]]||(r&&!s[2]?s[2]=r:r&&(s[2]="(".concat(s[2],") and (").concat(r,")")),t.push(s))}},t}},function(e,t,r){"use strict";var n,o={},i=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},a=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}();function s(e,t){for(var r=[],n={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};n[a]?n[a].parts.push(s):r.push(n[a]={id:a,parts:[s]})}return r}function d(e,t){for(var r=0;r<e.length;r++){var n=e[r],i=o[n.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](n.parts[a]);for(;a<n.parts.length;a++)i.parts.push(b(n.parts[a],t))}else{for(var s=[];a<n.parts.length;a++)s.push(b(n.parts[a],t));o[n.id]={id:n.id,refs:1,parts:s}}}}function c(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var n=r.nc;n&&(e.attributes.nonce=n)}if(Object.keys(e.attributes).forEach((function(r){t.setAttribute(r,e.attributes[r])})),"function"==typeof e.insert)e.insert(t);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var p,l=(p=[],function(e,t){return p[e]=t,p.filter(Boolean).join("\n")});function u(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=l(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function h(e,t,r){var n=r.css,o=r.media,i=r.sourceMap;if(o&&e.setAttribute("media",o),i&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var m=null,f=0;function b(e,t){var r,n,o;if(t.singleton){var i=f++;r=m||(m=c(t)),n=u.bind(null,r,i,!1),o=u.bind(null,r,i,!0)}else r=c(t),n=h.bind(null,r,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i());var r=s(e,t);return d(r,t),function(e){for(var n=[],i=0;i<r.length;i++){var a=r[i],c=o[a.id];c&&(c.refs--,n.push(c))}e&&d(s(e,t),t);for(var p=0;p<n.length;p++){var l=n[p];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete o[l.id]}}}}},function(e,t,r){"use strict";r.r(t);r(0);var n=e=>`\n    <li class='project-item'>${e}</li>\n`;var o=(()=>({current:{keys:[]},init(){localStorage.length&&this.getAllKeys().forEach(e=>{this.current[e]=this.get(e)})},set(e,t){-1===this.current.keys.indexOf(e)&&(this.current.keys.push(e),localStorage.setItem("keys",JSON.stringify(this.current.keys))),localStorage.setItem(e,JSON.stringify(t)),this.current[e]=this.get(e)},get:e=>JSON.parse(localStorage.getItem(e)),getAllKeys(){return this.current.keys=this.get("keys"),this.current.keys},reset(){localStorage.clear()}}))();var i=()=>`\n    <div id='menu-content'>\n        <header id='todo-menu-header'>\n            <div name='past'>Past</div>\n            <div name='today' class='is-selected'>Today</div>\n            <div name='future'>Future</div>\n        </header>\n        <hr>\n        <section id='projects-section'>\n            <header>\n                <h3>Projects</h3>\n                <button id='project-add-btn'>\n                    <i class='material-icons'>\n                        add\n                    </i>\n                </button>\n            </header>\n            <ul id='project-list'>\n            ${o.get("projects").map(e=>n(e.title)).join("")}\n            </ul>\n        </section>\n    </div>\n`;var a=()=>`\n    <div id='menu-wrapper'>\n        <nav id='navbar'>\n            <div class='nav-left'>\n                <a id='burger-btn'>\n                    <i class='material-icons'>\n                        menu\n                    </i>\n                </a>\n                <h3 id='nav-status'>\n                    ${o.get("projects")[o.get("selectedProject")].title}\n                <h3>\n            </div>\n            <div class='nav-right'>\n                <p id='remaining-todos'>\n                    0\n                    /\n                    ${o.get("projects")[o.get("selectedProject")].todos.length}\n                <p>\n            </div>\n        </nav>    \n    ${i()}\n    </div>\n`;var s=e=>`\n    <li class='todo-items'>${e}</li>\n`;var d=()=>`\n    <div id='main-card'>\n        <ul id='todo-list'>\n            ${o.get("projects")[o.get("selectedProject")].todos.map(e=>s(e.title)).join("")}\n        </ul>\n        <div class="btn-wrapper">\n            <button id='add-todo-btn'>\n                <i class='material-icons'>\n                    add\n                </i>\n            </button>\n        </div>\n    </div>\n`;var c=(()=>{const e=document.getElementById("mc"),t=document.getElementById("nb");return{init(){o.set("selectedProject",0),t.innerHTML=a(),e.innerHTML=d()},refresh:{projects(){document.getElementById("project-list").innerHTML=o.get("projects").map(e=>n(e.title)).join("")},todos(){document.getElementById("todo-list").innerHTML=o.get("projects")[o.get("selectedProject")].todos.map(e=>s(e.title)).join("")},navStatus(){document.getElementById("nav-status").innerHTML=o.get("projects")[o.get("selectedProject")].title},navTodoRemaining(){document.getElementById("remaining-todos").innerHTML=`0 / ${o.get("projects")[o.get("selectedProject")].length}\n          `},all(){t.innerHTML=a(),e.innerHTML=d()}}}})();class p{constructor(e,t=!1){this.title=e,this.isCompleted=t}}class l{constructor(e,t=[]){this.title=e,this.todos=t}}var u=(()=>({init(){o.current.projects||o.set("projects",[])},refreshProjects(){o.set("projects",o.current.projects)},selectProject(e){const t=this,r=o.current.projects[e];return{addTodo(e){r.todos.push(new p(e)),t.refreshProjects()},deleteTodo(e){r.todos.splice(e,1),t.refreshProjects()},delete(){o.current.projects.splice(e,1),t.refreshProjects()}}},addProject(e){o.current.projects.push(new l(e)),this.refreshProjects()}}))();o.init(),u.init(),c.init();const h=document.getElementById("burger-btn"),m=document.getElementById("menu-wrapper"),f=document.getElementById("project-add-btn"),b=document.getElementById("add-todo-btn");h.addEventListener("click",e=>{const t=m.className;m.className="is-menu-expanded"===t?"":"is-menu-expanded",e.preventDefault()}),f.addEventListener("click",e=>{u.addProject("title"),c.refresh.projects(),e.preventDefault()}),b.addEventListener("click",e=>{u.selectProject(0).addTodo("want to buy milk"),c.refresh.todos(),e.preventDefault()})}]);