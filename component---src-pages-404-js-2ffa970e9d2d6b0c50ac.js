(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{142:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(170);t.default=function(){return i.a.createElement(r.a,null,i.a.createElement("div",{id:"main",className:"alt"},i.a.createElement("section",{id:"one"},i.a.createElement("div",{className:"inner"},i.a.createElement("h1",null,"NOT FOUND"),i.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness.")))))}},154:function(e,t,n){},155:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return h}),n.d(t,"StaticQuery",function(){return p});var a=n(0),i=n.n(a),r=n(4),s=n.n(r),c=n(148),o=n.n(c);n.d(t,"Link",function(){return o.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var l=n(27);n.d(t,"waitForRouteChange",function(){return l.c});var u=n(157),m=n.n(u);n.d(t,"PageRenderer",function(){return m.a});var d=n(38);n.d(t,"parsePath",function(){return d.a});var h=i.a.createContext({}),p=function(e){return i.a.createElement(h.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},157:function(e,t,n){var a;e.exports=(a=n(164))&&a.default||a},159:function(e,t,n){e.exports=n.p+"static/omega-af1c1859ddb4517d35947043794fe64d.png"},164:function(e,t,n){"use strict";n.r(t);n(39);var a=n(0),i=n.n(a),r=n(4),s=n.n(r),c=n(53),o=n(1),l=function(e){var t=e.location,n=o.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(c.a,Object.assign({key:t.pathname,location:t,pageResources:n},n.json))};l.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=l},168:function(e,t,n){},170:function(e,t,n){"use strict";var a=n(8),i=n.n(a),r=n(0),s=n.n(r),c=(n(4),n(154),n(159)),o=n.n(c),l=n(155),u=(n(168),n(175)),m=n(176),d=n(177),h=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={showmenu:!1,open:!1},n.scrolly=0,n.curscrolly=0,n.autotimeout=null,n.start=null,n._isMounted=!1,n}i()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this._isMounted=!0,window.addEventListener("scroll",function(){return e.handlescroll()})},n.componentWillUnmount=function(){var e=this;this._isMounted=!1,window.removeEventListener("scroll",function(){return e.handlescroll()}),clearTimeout(this.autotimeout)},n.hidemenu=function(){this.scrolly=this.curscrolly,this._isMounted&&(this.setState({showmenu:!1,open:!1}),this.start=null)},n.btnClicked=function(){this._isMounted&&this.setState({open:!this.state.open}),this.autoclose()},n.autoclose=function(){if(this.state.showmenu&&!this.state.open){var e=(new Date).getSeconds();null!==this.start&&e-this.start>5&&this.hidemenu()}},n.handlescroll=function(){var e=this;this.curscrolly=window.scrollY,this.scrolly!==this.curscrolly&&(this._isMounted&&this.setState({showmenu:!0}),this.scrolly=this.curscrolly),this.start=(new Date).getSeconds(),this.autotimeout=setTimeout(function(){e.autoclose()},6e3)},n.render=function(){var e=this;return s.a.createElement("nav",{className:"menu "+(this.state.showmenu?"visible":"hidden")},s.a.createElement("div",{onClick:function(){return e.btnClicked()},className:"menu-btn "+(this.state.open?"menu-btn-open":" ")},s.a.createElement("span",{className:"lines "+(this.state.open?"line-1-clicked":"line-1")}),s.a.createElement("span",{className:"lines "+(this.state.open?"line-2-clicked":"line-2")}),s.a.createElement("span",{className:"lines "+(this.state.open?"line-3-clicked":"line-3")})),s.a.createElement(l.Link,{onClick:function(){return e.hidemenu()},className:"alink menu-item blue",to:"/mnistpred"},s.a.createElement("i",{className:"icon"},s.a.createElement(u.a,{icon:m.a}))),s.a.createElement("a",{onClick:function(){return e.hidemenu()},href:"https://github.com/DanShai",className:"alink menu-item green"},s.a.createElement("i",{className:"icon"},s.a.createElement(u.a,{icon:d.a})," ")),s.a.createElement(l.Link,{onClick:function(){return e.hidemenu()},className:"alink menu-item red",to:"/"},s.a.createElement("i",{className:"icon"},s.a.createElement(u.a,{icon:m.b}))),s.a.createElement(l.Link,{onClick:function(){return e.hidemenu()},className:"alink menu-item pumpkin",to:"/blog"},s.a.createElement("i",{className:"icon"},s.a.createElement(u.a,{icon:m.c}))))},t}(s.a.Component),p=function(e){return s.a.createElement("section",{className:"banner"},s.a.createElement(h,null),s.a.createElement("div",{className:"banner-content"},s.a.createElement("img",{src:o.a,className:"logo",alt:"Dan Shai"}),s.a.createElement("div",{className:"title"},"Dan Shai")))},f=function(e){return s.a.createElement("section",{className:"footer center bg-dark"},s.a.createElement("p",null," ",s.a.createElement("span",null," Dan shai © 2018 ")," "))},E=function(e){function t(t){return e.call(this,t)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.children;return s.a.createElement("div",null,s.a.createElement(p,null),e,s.a.createElement(f,null))},t}(s.a.Component);t.a=E}}]);
//# sourceMappingURL=component---src-pages-404-js-2ffa970e9d2d6b0c50ac.js.map