webpackJsonp([2],{291:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(2),s=e(l),u=n(273),c=e(u),f=n(206),h=e(f),p=n(268),d=(e(p),n(209)),y=n(263),v=n(171),m=n(267),g=(n(270),n(292)),_=(0,d.useRouterHistory)(y.createHashHistory)(),b=function(e){function t(){r(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={write:"markdown",height:"100px"},e}return o(t,e),a(t,[{key:"componentDidMount",value:function(){var e=this;(0,g.verifyJWT)();var t=this.props.dispatch,n=this.props.params.id;t((0,m.getArticleById)(n)).then(function(){e.titleInput.value=e.props.article.title,e.setState({height:window.innerHeight||document.body.clientHeight||document.documentElement.clientHeight,write:e.props.article.content}),h.default.done()})}},{key:"handleWriteChange",value:function(e){this.setState({write:e.target.value})}},{key:"sendArticle",value:function(){var e=this.props.params.id,t=this.titleInput.value,n=this.state.write;(0,m.sendArticle)(e,t,n).then(function(){_.push("/")})}},{key:"render",value:function(){var e=this;return s.default.createElement("div",{id:"write"},s.default.createElement("div",{className:"left",style:{height:this.state.height}},s.default.createElement("input",{type:"text",className:"title",defaultValue:"",ref:function(t){e.titleInput=t}}),s.default.createElement("textarea",{spellCheck:"false",rows:"10",onChange:function(t){return e.handleWriteChange(t)},value:this.state.write}),s.default.createElement("button",{className:"send-btn",onClick:function(){return e.sendArticle()}},"发布")),s.default.createElement("div",{className:"right"},s.default.createElement("div",{className:"right-article article-desc article-content",dangerouslySetInnerHTML:{__html:(0,c.default)(this.state.write)},style:{height:this.state.height}})))}}]),t}(s.default.Component),w=function(e){var t=e||{article:{}},n=t.article;return{article:n}};t.default=(0,v.connect)(w)(b)}).call(this)}finally{}},292:function(e,t,n){try{(function(){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.verifyJWT=void 0;var e=n(209),r=n(263),i=n(270),o=(0,e.useRouterHistory)(r.createHashHistory)();t.verifyJWT=function(){sessionStorage.getItem("__token__")||o.push("/login");var e=i.CONFIG.server+"/api/valid";fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:sessionStorage.getItem("__token__")||""}),mode:"cors"}).then(function(e){return e.json()}).then(function(e){console.log(e),0===e.status&&o.push("/login")})}}).call(this)}finally{}}});