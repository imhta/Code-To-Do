!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=4)}([function(e,t,r){var o=r(1);"string"==typeof o&&(o=[[e.i,o,""]]);var n={insert:"head",singleton:!1};r(3)(o,n);o.locals&&(e.exports=o.locals)},function(e,t,r){(e.exports=r(2)(!1)).push([e.i,'body{margin:0px;box-sizing:border-box;font-family:"Montserrat", sans-serif}body #root{min-height:100vh;background-color:blueviolet}body #root #home-wrapper{display:grid;grid-template-columns:400px 1fr}body #root #home-wrapper #nb{padding:15px}body #root #home-wrapper #mc{padding:15px}body #root #home-wrapper #menu-wrapper{background-color:#3c0174;border-radius:5px;padding:10px;position:sticky;top:15px;z-index:2;overflow:hidden}body #root #home-wrapper #menu-wrapper nav{display:flex;justify-content:space-between;align-items:flex-start;padding:5px 10px}body #root #home-wrapper #menu-wrapper nav #burger-btn{display:none}body #root #home-wrapper #menu-wrapper nav .nav-left,body #root #home-wrapper #menu-wrapper nav .nav-right{display:flex;justify-content:space-between;align-items:center;font-size:20px;color:white}body #root #home-wrapper #menu-wrapper nav .brand-logo,body #root #home-wrapper #menu-wrapper nav #nav-status{margin-left:15px}body #root #home-wrapper #menu-wrapper nav .brand-logo span{animation:blink 1s infinite}body #root #home-wrapper #menu-wrapper #menu-content #projects-section header{display:flex;justify-content:space-between;align-items:center;color:white;padding:10px 20px}body #root #home-wrapper #menu-wrapper #menu-content #projects-section #project-list{list-style:none;padding:0px;margin:0px}body #root #home-wrapper #menu-wrapper #menu-content #projects-section #project-list li{color:white;font-size:18px;padding:15px 20px;margin:5px 0px;cursor:pointer;border:2px solid transparent}body #root #home-wrapper #menu-wrapper #menu-content #projects-section #project-list li:hover,body #root #home-wrapper #menu-wrapper #menu-content #projects-section #project-list .is-selected{border-color:white;border-radius:5px}body #root #home-wrapper #menu-wrapper #menu-content #todo-menu-header{display:flex;justify-content:center;align-items:center;padding:20px 10px}body #root #home-wrapper #menu-wrapper #menu-content #todo-menu-header input{border:none;border-radius:5px;font-size:15px;font-weight:bold;padding:10px;color:white;width:100%;background-color:#16002b}body #root #home-wrapper #menu-wrapper #menu-content #todo-menu-header #project-add-btn{width:30px;height:30px;display:flex;justify-content:center;align-items:center;border:2px solid white;border-radius:50%;background-color:#3c0174;color:white;margin-left:15px}body #root #home-wrapper #menu-wrapper #menu-content #todo-menu-header #project-add-btn:hover{background-color:white;color:#3c0174;cursor:pointer}body #root #home-wrapper .is-menu-expanded{padding-bottom:30px !important;min-height:100vh !important;animation:grow 300ms ease-in-out !important}body #root #home-wrapper #main-card{padding:5px 20px;margin:0px auto;background-color:white;border-radius:5px}body #root #home-wrapper #main-card header{display:flex;justify-content:space-between;align-items:center}body #root #home-wrapper #main-card header button{display:flex;justify-content:space-evenly;align-items:center;border-radius:5px;border:none;font-size:15px;font-weight:bold;padding:10px 20px;margin:0px 5px;color:white;background-color:red;cursor:pointer}body #root #home-wrapper #main-card ul{list-style:none;padding:0px;margin:0px}body #root #home-wrapper #main-card ul li{display:flex;justify-content:space-between;align-items:center;background-color:whitesmoke;padding:15px 20px;margin:5px 0px;border-radius:5px;cursor:pointer;user-select:none}body #root #home-wrapper #main-card ul li #check-todo{display:flex;align-items:center}body #root #home-wrapper #main-card ul li #check-todo p{font-size:18px;margin:0px 15px}body #root #home-wrapper #main-card ul li #check-todo input{cursor:pointer;height:25px;width:25px;background-color:#ccc}body #root #home-wrapper #main-card ul li #check-todo input:checked ~ p{text-decoration:line-through}body #root #home-wrapper #main-card ul li #btn-group{display:flex}body #root #home-wrapper #main-card ul li #btn-group button{width:35px;height:35px;display:flex;justify-content:center;align-items:center;border-radius:100%;border:2px solid;margin:0px 5px;background-color:transparent;cursor:pointer}body #root #home-wrapper #main-card ul li #btn-group .remove-btn{color:red}body #root #home-wrapper #main-card ul li #btn-group .edit-btn{color:#3c0174}body #root #home-wrapper #main-card #input-wrapper{width:100%;display:flex;justify-content:space-evenly;align-items:center;flex-wrap:wrap;padding:20px 10px}body #root #home-wrapper #main-card #input-wrapper input{flex-grow:1;border:2px solid white;border-radius:5px;font-size:15px;font-weight:bold;padding:10px;color:white;background-color:#3c0174}body #root #home-wrapper #main-card #input-wrapper input::placeholder{color:#cacaca}body #root #home-wrapper #main-card #input-wrapper input[type="date"]{padding:7px 10px}body #root #home-wrapper #main-card #input-wrapper #add-todo-btn,body #root #home-wrapper #main-card #input-wrapper #cancel-todo-btn{flex-grow:.5;display:flex;justify-content:center;align-items:center;font-size:15px;font-weight:bold;margin:0px 2.5px;padding:10px 20px;color:white;background-color:#3c0174;border:none;border-radius:5px}body #root #home-wrapper #main-card #input-wrapper #add-todo-btn:hover,body #root #home-wrapper #main-card #input-wrapper #cancel-todo-btn:hover{cursor:pointer}body #root #home-wrapper #main-card #input-wrapper #cancel-todo-btn{background-color:red}@media screen and (max-width: 800px){body #root #home-wrapper{display:grid;grid-template-columns:1fr}body #root #home-wrapper #nb{padding:15px}body #root #home-wrapper #mc{padding:0px}body #root #home-wrapper #menu-wrapper{height:80px;animation:shrink 300ms ease-in-out}body #root #home-wrapper #menu-wrapper nav #burger-btn{display:block;cursor:pointer}}@keyframes blink{from{opacity:0}to{opacity:1}}@keyframes grow{from{min-height:80px}to{min-height:100vh}}@keyframes shrink{from{height:100vh}to{height:60px}}\n',""])},function(e,t,r){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=function(e,t){var r=e[1]||"",o=e[3];if(!o)return r;if(t&&"function"==typeof btoa){var n=(a=o,d=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),p="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(d),"/*# ".concat(p," */")),i=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot).concat(e," */")}));return[r].concat(i).concat([n]).join("\n")}var a,d,p;return[r].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(r,"}"):r})).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},n=0;n<this.length;n++){var i=this[n][0];null!=i&&(o[i]=!0)}for(var a=0;a<e.length;a++){var d=e[a];null!=d[0]&&o[d[0]]||(r&&!d[2]?d[2]=r:r&&(d[2]="(".concat(d[2],") and (").concat(r,")")),t.push(d))}},t}},function(e,t,r){"use strict";var o,n={},i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}();function d(e,t){for(var r=[],o={},n=0;n<e.length;n++){var i=e[n],a=t.base?i[0]+t.base:i[0],d={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(d):r.push(o[a]={id:a,parts:[d]})}return r}function p(e,t){for(var r=0;r<e.length;r++){var o=e[r],i=n[o.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(g(o.parts[a],t))}else{for(var d=[];a<o.parts.length;a++)d.push(g(o.parts[a],t));n[o.id]={id:o.id,refs:1,parts:d}}}}function c(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var o=r.nc;o&&(e.attributes.nonce=o)}if(Object.keys(e.attributes).forEach((function(r){t.setAttribute(r,e.attributes[r])})),"function"==typeof e.insert)e.insert(t);else{var n=a(e.insert||"head");if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(t)}return t}var s,l=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function u(e,t,r,o){var n=r?"":o.css;if(e.styleSheet)e.styleSheet.cssText=l(t,n);else{var i=document.createTextNode(n),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function m(e,t,r){var o=r.css,n=r.media,i=r.sourceMap;if(n&&e.setAttribute("media",n),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var h=null,b=0;function g(e,t){var r,o,n;if(t.singleton){var i=b++;r=h||(h=c(t)),o=u.bind(null,r,i,!1),n=u.bind(null,r,i,!0)}else r=c(t),o=m.bind(null,r,t),n=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else n()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i());var r=d(e,t);return p(r,t),function(e){for(var o=[],i=0;i<r.length;i++){var a=r[i],c=n[a.id];c&&(c.refs--,o.push(c))}e&&p(d(e,t),t);for(var s=0;s<o.length;s++){var l=o[s];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete n[l.id]}}}}},function(e,t,r){"use strict";r.r(t);r(0);var o=(()=>({current:{keys:[]},init(){localStorage.length&&this.getAllKeys().forEach(e=>{this.current[e]=this.get(e)})},set(e,t){-1===this.current.keys.indexOf(e)&&(this.current.keys.push(e),localStorage.setItem("keys",JSON.stringify(this.current.keys))),localStorage.setItem(e,JSON.stringify(t)),this.current[e]=this.get(e)},get:e=>JSON.parse(localStorage.getItem(e)),getAllKeys(){return this.current.keys=this.get("keys"),this.current.keys},reset(){localStorage.clear()}}))();var n=(e,t)=>`\n    <li id='project-${t}'\n     class='project-item \n     ${t===o.get("selectedProject")?"is-selected":""}'>\n        ${e}\n    </li>\n`;var i=()=>`\n    <div id='menu-content'>\n        <section id='projects-section'>\n            <header>\n                <h3>Projects</h3>\n            </header>\n            <ul id='project-list'>\n            ${o.get("projects").length?o.get("projects").map((e,t)=>n(e.title,t)).join(""):""}\n            </ul>\n        </section>\n        <div id='todo-menu-header'>\n        <input type='text' placeholder='Project name' id='project-name-input'>\n            <button id='project-add-btn'>\n                <i class='material-icons'>\n                    add\n                </i>\n            </button>\n        </div>\n \n    </div>\n`;var a=()=>`\n    <div id='menu-wrapper'>\n        <nav id='navbar'>\n            <div class='nav-left'>\n                <a id='burger-btn'>\n                    <i class='material-icons'>\n                        menu\n                    </i>\n                </a>\n                <h3 class='brand-logo'>CODETODO<span>_<span></h3>\n            </div>\n            <div class='nav-right'>\n            </div>\n        </nav>    \n    ${i()}\n    </div>\n`;var d=(e,t)=>`\n    <li id='todo-${t}' class='todo-items'>\n        <div id='check-todo'>\n            <input type='checkbox' ${e.isCompleted?"checked":""} id='checkbox-${t}'/>\n            <p id='title-${t}'>${e.title} <br> ${e.description}</p>\n        </div>\n        <div id='btn-group'>\n            <button class='flag-btn' id='flag-todo-btn-${t}'>\n                <i class='material-icons'>\n                    flag\n                </i>\n            </button>\n            <button class='edit-btn' id='edit-todo-btn-${t}'>\n                <i class='material-icons'>\n                    edit\n                </i>\n            </button>\n            <button class='remove-btn' id='remove-todo-btn-${t}'>\n                <i class='material-icons'>\n                    remove\n                </i>\n            </button>\n        </div>\n     </li>\n`;var p=()=>`\n    <div id='main-card'>\n    ${o.get("projects").length?`\n            <header>\n                <h1 id='nav-status'>\n                    ${o.get("projects")[o.get("selectedProject")].title}\n                </h1>\n                <button id='remove-project-btn' name='${o.get("selectedProject")}'>\n                    Delete\n                </button>\n            </header>\n            <ul id='todo-list'>\n                ${o.get("projects")[o.get("selectedProject")].todos.map((e,t)=>d(e,t)).join("")}\n            </ul>\n            <form id='input-wrapper'>\n                <input type='text' placeholder='Any code to do ...' id='todo-input' name='todo'/>\n                <input type='text' placeholder='Description' id='todo-description-input' name='description'/>\n                <input type='date' id='todo-deadline-input' name='date'>\n                <button id='add-todo-btn'>\n                    Add to do\n                </button>\n                <button id='cancel-todo-btn'>\n                    Cancel\n                </button>\n            </form>\n    `:"<h1>There is no projects</h1>"}\n    </div>\n`;var c=(()=>{const e=document.getElementById("mc"),t=document.getElementById("nb");return{init(){t.innerHTML=a(),e.innerHTML=p()},refresh:{projects(){document.getElementById("project-list").innerHTML=o.get("projects").map((e,t)=>n(e.title,t)).join("")},todos(){document.getElementById("todo-list").innerHTML=o.get("projects")[o.get("selectedProject")].todos.map((e,t)=>d(e,t)).join("")},navStatus(){document.getElementById("nav-status").innerHTML=o.get("projects")[o.get("selectedProject")].title},all(){this.projects(),this.todos(),this.navStatus()}}}})();class s{constructor(e,t,r,o=!1,n=!1){this.title=e,this.description=t,this.deadlineDate=r,this.isHighPriority=o,this.isCompleted=n}}class l{constructor(e,t=[]){this.title=e,this.todos=t}}var u=(()=>({init(){o.current.projects||(o.set("projects",[]),o.set("selectedProject",0),this.firstProject())},firstProject(){this.addProject("First Project"),this.selectProject(0).addTodo(["First todo","first decription",new Date(2020,1,11)])},refreshProjects(){o.set("projects",o.current.projects)},selectProject(e){o.set("selectedProject",e);const t=this,r=o.current.projects[e];return{addTodo([e,o,n]){r.todos.push(new s(e,o,n)),t.refreshProjects()},deleteTodo(e){r.todos.splice(e,1),t.refreshProjects()},toggleTodoCompleted(e){const o=r.todos[e].isCompleted;r.todos[e].isCompleted=!o,t.refreshProjects()},delete(){o.current.projects.splice(e,1),t.refreshProjects()}}},addProject(e){o.current.projects.push(new l(e)),this.refreshProjects()},length:()=>o.get("projects").length,isThereAnyProject(){return this.length()>0}}))();o.init(),u.init(),c.init();const m=document.getElementById("burger-btn"),h=document.getElementById("menu-wrapper"),b=document.getElementById("project-add-btn"),g=document.getElementById("add-todo-btn"),f=document.getElementById("remove-project-btn"),y=document.getElementById("todo-list"),w=document.getElementById("project-list"),v=document.getElementById("project-name-input"),x=document.getElementById("input-wrapper");m.addEventListener("click",e=>{const t=h.className;h.className="is-menu-expanded"===t?"":"is-menu-expanded",e.preventDefault()}),b.addEventListener("click",e=>{/^\S/.test(v.value)&&(u.addProject(v.value),v.value="",1===u.length()?location.reload():c.refresh.all()),e.preventDefault()}),f.addEventListener("click",e=>{u.selectProject(Number(e.target.name)).delete(),u.isThereAnyProject()||location.reload(),e.preventDefault()}),g.addEventListener("click",e=>{const t=new FormData(x);u.selectProject(o.get("selectedProject")).addTodo([...t.values()]),c.refresh.todos(),e.preventDefault()}),w.addEventListener("click",({target:e})=>{const t=Number(e.id.split("-")[1]);u.selectProject(t),c.refresh.all()}),y.addEventListener("click",({target:e})=>{const t=Number(e.id.split("-")[1]);u.selectProject(o.get("selectedProject")).toggleTodoCompleted(t),c.refresh.todos()})}]);