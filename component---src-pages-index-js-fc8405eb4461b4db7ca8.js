(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{149:function(e,t,n){"use strict";n.r(t);var a=n(8),i=n.n(a),r=n(0),c=n.n(r),o=(n(159),n(177)),s=n.n(o),l=n(166),u=(n(4),n(161),n(171),n(172),n(173),n(156)),m=n.n(u),d=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return c.a.createElement(l.a,{bs:!0},c.a.createElement(s.a,{title:"Dan - Shai",meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}],link:[{rel:"shortcut icon",type:"image/png",href:""+m.a}]}))},t}(c.a.Component);t.default=d},156:function(e,t,n){e.exports=n.p+"static/omega-af1c1859ddb4517d35947043794fe64d.png"},158:function(e,t,n){var a;e.exports=(a=n(162))&&a.default||a},159:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return h}),n.d(t,"StaticQuery",function(){return p});var a=n(0),i=n.n(a),r=n(4),c=n.n(r),o=n(153),s=n.n(o);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var l=n(27);n.d(t,"waitForRouteChange",function(){return l.c});var u=n(158),m=n.n(u);n.d(t,"PageRenderer",function(){return m.a});var d=n(38);n.d(t,"parsePath",function(){return d.a});var h=i.a.createContext({}),p=function(e){return i.a.createElement(h.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},161:function(e,t,n){},162:function(e,t,n){"use strict";n.r(t);n(39);var a=n(0),i=n.n(a),r=n(4),c=n.n(r),o=n(52),s=n(1),l=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(o.a,Object.assign({key:t.pathname,location:t,pageResources:n},n.json))};l.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=l},163:function(e,t,n){},164:function(e,t,n){},165:function(e,t,n){},166:function(e,t,n){"use strict";var a=n(8),i=n.n(a),r=n(0),c=n.n(r),o=(n(4),n(161),n(163),n(156)),s=n.n(o),l=n(159),u=(n(164),n(171)),m=n(172),d=n(173),h=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={showmenu:!0,open:!1},n.scrolly=0,n.curscrolly=0,n.autotimeout=null,n.start=null,n._isMounted=!1,n}i()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this._isMounted=!0,this.start=null,this.scrolly=0,window.addEventListener("scroll",function(){return e.handlescroll()})},n.componentWillUnmount=function(){var e=this;this._isMounted=!1,clearTimeout(this.autotimeout),window.removeEventListener("scroll",function(){return e.handlescroll()})},n.hidemenu=function(){this._isMounted&&this.setState({showmenu:!1,open:!1},function(){})},n.btnClicked=function(){var e=this;this._isMounted&&this.setState({open:!this.state.open},function(){e.autoclose()})},n.autoclose=function(){if(this.state.showmenu&&!this.state.open){var e=(new Date).getSeconds();null!==this.start&&e-this.start>5&&this.hidemenu()}},n.handlescroll=function(){var e=this;this.curscrolly=window.scrollY,this.scrolly!==this.curscrolly&&this._isMounted&&this.setState({showmenu:!0,open:!1},function(){return e.scrolly=e.curscrolly}),this.start=(new Date).getSeconds(),clearTimeout(this.autotimeout),this.autotimeout=setTimeout(function(){e.autoclose()},6e3)},n.render=function(){var e=this;return c.a.createElement("nav",{className:"menu "+(this.state.showmenu?"visible":"hidden")},c.a.createElement("div",{onClick:function(){return e.btnClicked()},className:"menu-btn "+(this.state.open?"menu-btn-open":" ")},c.a.createElement("span",{className:"lines "+(this.state.open?"line-1-clicked":"line-1")}),c.a.createElement("span",{className:"lines "+(this.state.open?"line-2-clicked":"line-2")}),c.a.createElement("span",{className:"lines "+(this.state.open?"line-3-clicked":"line-3")})),c.a.createElement(l.Link,{onClick:function(){return e.hidemenu()},className:"alink menu-item blue",to:"/proj"},c.a.createElement("i",{className:"icon"},c.a.createElement(u.a,{icon:m.a}))),c.a.createElement("a",{onClick:function(){return e.hidemenu()},href:"https://github.com/DanShai",className:"alink menu-item green"},c.a.createElement("i",{className:"icon"},c.a.createElement(u.a,{icon:d.a})," ")),c.a.createElement(l.Link,{onClick:function(){return e.hidemenu()},className:"alink menu-item red",to:"/"},c.a.createElement("i",{className:"icon"},c.a.createElement(u.a,{icon:m.b}))),c.a.createElement(l.Link,{onClick:function(){return e.hidemenu()},className:"alink menu-item pumpkin",to:"/blog"},c.a.createElement("i",{className:"icon"},c.a.createElement(u.a,{icon:m.c}))))},t}(c.a.Component),p=function(e){return c.a.createElement("section",{className:"banner"},c.a.createElement(h,null),c.a.createElement("div",{className:"banner-content"},c.a.createElement("img",{src:s.a,className:"logo",alt:"Dan Shai"}),c.a.createElement("div",{className:"title"},"Dan Shai")))},f=(n(165),function(e){return c.a.createElement("section",{className:"banner-2"},c.a.createElement(h,null),c.a.createElement("div",{className:"banner-2-content"},c.a.createElement("img",{src:s.a,className:"logo",alt:"Dan Shai"}),c.a.createElement("div",{className:"title"},"Dan Shai")))}),E=function(e){return c.a.createElement("section",{className:"footer center bg-dark"},c.a.createElement("p",null," ",c.a.createElement("span",null," Dan shai © 2018 ")," "))},v=function(e){function t(t){return e.call(this,t)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.bs,n=e.children;return c.a.createElement("div",null,t?c.a.createElement(p,null):c.a.createElement(f,null),n,c.a.createElement(E,null))},t}(c.a.Component);t.a=v}}]);
//# sourceMappingURL=component---src-pages-index-js-fc8405eb4461b4db7ca8.js.map