(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{144:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(178),c=n.n(i),s=n(158),l=n(167);t.default=function(e){return r.a.createElement(l.a,{bs:!1},r.a.createElement(c.a,null,r.a.createElement("title",null,"Projects - Dan "),r.a.createElement("meta",{name:"description",content:"proj"})),r.a.createElement("section",{className:"container"},r.a.createElement("header",{className:"bheader"},r.a.createElement("h2",null," Projects ")),r.a.createElement("div",{className:"grid-2"},r.a.createElement("div",{className:"box boxshadow"},r.a.createElement(s.Link,{className:"alink",to:"/projects/sgame"},"Snake"),r.a.createElement("p",null,"traditional basic snake game, remember Nokia ??!")),r.a.createElement("div",{className:"box boxshadow"},r.a.createElement(s.Link,{className:"alink",to:"/projects/premierelg"},"FOOTBALL"),r.a.createElement("p",null,"Premiere League data , teams stats , results and stuffs loaded from CSV file")),r.a.createElement("div",{className:"box boxshadow"},r.a.createElement(s.Link,{className:"alink",to:"/projects/mnistpred"},"MNIST NEURAL NET"),r.a.createElement("p",null,"Training a Convolutional Neural Network on MNIST dataset with loss and accuracy displayed ..!")),r.a.createElement("div",{className:"box boxshadow"},r.a.createElement(s.Link,{className:"alink",to:"/projects/mcrypto"},"Cypto Currencies"),r.a.createElement("p",null,"current crypto currencies, fetched from market api display their current values and graph top 5!")),r.a.createElement("div",{className:"box boxshadow"},r.a.createElement(s.Link,{className:"alink",to:"/projects/formreact"},"Form"),r.a.createElement("p",null,"React form validation with basic checking nothing fancy! just testing paged forms in react!")))))}},156:function(e,t,n){e.exports=n.p+"static/omega-af1c1859ddb4517d35947043794fe64d.png"},157:function(e,t,n){var a;e.exports=(a=n(162))&&a.default||a},158:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return h}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),c=n.n(i),s=n(152),l=n.n(s);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var o=n(27);n.d(t,"waitForRouteChange",function(){return o.c});var u=n(157),m=n.n(u);n.d(t,"PageRenderer",function(){return m.a});var d=n(38);n.d(t,"parsePath",function(){return d.a});var h=r.a.createContext({}),p=function(e){return r.a.createElement(h.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},160:function(e,t,n){},162:function(e,t,n){"use strict";n.r(t);n(39);var a=n(0),r=n.n(a),i=n(4),c=n.n(i),s=n(52),l=n(1),o=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({key:t.pathname,location:t,pageResources:n},n.json))};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=o},163:function(e,t,n){},164:function(e,t,n){},165:function(e,t,n){},167:function(e,t,n){"use strict";var a=n(8),r=n.n(a),i=n(0),c=n.n(i),s=(n(4),n(160),n(163),n(156)),l=n.n(s),o=n(158),u=(n(164),n(172)),m=n(173),d=n(174),h=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={showmenu:!1,open:!1},n.scrolly=0,n.curscrolly=0,n.autotimeout=null,n.start=null,n._isMounted=!1,n}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this._isMounted=!0,this.start=null,this.scrolly=0,window.addEventListener("scroll",function(){return e.handlescroll()})},n.componentWillUnmount=function(){var e=this;this._isMounted=!1,clearTimeout(this.autotimeout),window.removeEventListener("scroll",function(){return e.handlescroll()})},n.hidemenu=function(){this._isMounted&&this.setState({showmenu:!1,open:!1},function(){})},n.btnClicked=function(){var e=this;this._isMounted&&this.setState({open:!this.state.open},function(){e.autoclose()})},n.autoclose=function(){if(this.state.showmenu&&!this.state.open){var e=(new Date).getSeconds();null!==this.start&&e-this.start>5&&this.hidemenu()}},n.handlescroll=function(){var e=this;this.curscrolly=window.scrollY,this.scrolly!==this.curscrolly&&this._isMounted&&this.setState({showmenu:!0,open:!1},function(){return e.scrolly=e.curscrolly}),this.start=(new Date).getSeconds(),clearTimeout(this.autotimeout),this.autotimeout=setTimeout(function(){e.autoclose()},6e3)},n.render=function(){var e=this;return c.a.createElement("nav",{className:"menu "+(this.state.showmenu?"visible":"hidden")},c.a.createElement("div",{onClick:function(){return e.btnClicked()},className:"menu-btn "+(this.state.open?"menu-btn-open":" ")},c.a.createElement("span",{className:"lines "+(this.state.open?"line-1-clicked":"line-1")}),c.a.createElement("span",{className:"lines "+(this.state.open?"line-2-clicked":"line-2")}),c.a.createElement("span",{className:"lines "+(this.state.open?"line-3-clicked":"line-3")})),c.a.createElement(o.Link,{onClick:function(){return e.hidemenu()},className:"alink menu-item blue",to:"/proj"},c.a.createElement("i",{className:"icon"},c.a.createElement(u.a,{icon:m.a}))),c.a.createElement("a",{onClick:function(){return e.hidemenu()},href:"https://github.com/DanShai",className:"alink menu-item green"},c.a.createElement("i",{className:"icon"},c.a.createElement(u.a,{icon:d.a})," ")),c.a.createElement(o.Link,{onClick:function(){return e.hidemenu()},className:"alink menu-item red",to:"/"},c.a.createElement("i",{className:"icon"},c.a.createElement(u.a,{icon:m.b}))),c.a.createElement(o.Link,{onClick:function(){return e.hidemenu()},className:"alink menu-item pumpkin",to:"/blog"},c.a.createElement("i",{className:"icon"},c.a.createElement(u.a,{icon:m.c}))))},t}(c.a.Component),p=function(e){return c.a.createElement("section",{className:"banner"},c.a.createElement(h,null),c.a.createElement("div",{className:"banner-content"},c.a.createElement("img",{src:l.a,className:"logo",alt:"Dan Shai"}),c.a.createElement("div",{className:"title"},"Dan Shai")))},f=(n(165),function(e){return c.a.createElement("section",{className:"banner-2"},c.a.createElement(h,null),c.a.createElement("div",{className:"banner-2-content"},c.a.createElement("img",{src:l.a,className:"logo",alt:"Dan Shai"}),c.a.createElement("div",{className:"title"},"Dan Shai")))}),E=function(e){return c.a.createElement("section",{className:"footer center bg-dark"},c.a.createElement("p",null," ",c.a.createElement("span",null," Dan shai © 2018 ")," "))},v=function(e){function t(t){return e.call(this,t)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.bs,n=e.children;return c.a.createElement("div",null,t?c.a.createElement(p,null):c.a.createElement(f,null),n,c.a.createElement(E,null))},t}(c.a.Component);t.a=v}}]);
//# sourceMappingURL=component---src-pages-proj-js-6cfb1d9046fea53cc6dc.js.map