(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return p});var a=n(8),r=n.n(a),i=n(0),l=n.n(i),c=n(191),o=n.n(c),s=n(155),u=n(208),m=n.n(u),d=n(170),h=(n(239),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=m()(this.props,"data.site.siteMetadata.title"),n=e.excerpt,a=this.props.pageContext,r=a.previous,i=a.next;a.index,a.total;return l.a.createElement(d.a,null,l.a.createElement(o.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:n}],title:e.frontmatter.title+" | "+t}),l.a.createElement("section",{className:"container"},l.a.createElement(s.Link,{className:"alink",to:"/blog"},"Back to Blog"),l.a.createElement("span",{className:"bheader"},l.a.createElement("h3",null,e.frontmatter.date," , ",e.frontmatter.author),l.a.createElement("h2",null,e.frontmatter.title)),l.a.createElement("div",{className:"box border-1",dangerouslySetInnerHTML:{__html:e.html}}),l.a.createElement("ul",{className:"grid-2"},r&&l.a.createElement("li",{className:"left"},l.a.createElement("span",null,l.a.createElement(s.Link,{className:"alink",to:r.fields.slug,rel:"prev"},r.frontmatter.title))),i&&l.a.createElement("li",{className:"right"},l.a.createElement("span",null,l.a.createElement(s.Link,{className:"alink",to:i.fields.slug,rel:"next"},i.frontmatter.title))))))},t}(l.a.Component));t.default=h;var p="1594519860"},154:function(e,t,n){},155:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return h}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),l=n.n(i),c=n(148),o=n.n(c);n.d(t,"Link",function(){return o.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var s=n(27);n.d(t,"waitForRouteChange",function(){return s.c});var u=n(157),m=n.n(u);n.d(t,"PageRenderer",function(){return m.a});var d=n(38);n.d(t,"parsePath",function(){return d.a});var h=r.a.createContext({}),p=function(e){return r.a.createElement(h.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},157:function(e,t,n){var a;e.exports=(a=n(163))&&a.default||a},163:function(e,t,n){"use strict";n.r(t);n(39);var a=n(0),r=n.n(a),i=n(4),l=n.n(i),c=n(53),o=n(1),s=function(e){var t=e.location,n=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({key:t.pathname,location:t,pageResources:n},n.json))};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},167:function(e,t,n){e.exports=n.p+"static/omega-af1c1859ddb4517d35947043794fe64d.png"},168:function(e,t,n){},170:function(e,t,n){"use strict";var a=n(8),r=n.n(a),i=n(0),l=n.n(i),c=(n(4),n(154),n(167)),o=n.n(c),s=n(155),u=(n(168),n(175)),m=n(176),d=n(177),h=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={showmenu:!1,count:0},n.scrolly=0,n.curscrolly=0,n.hidetimeout=null,n}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;window.addEventListener("scroll",function(){return e.handlescroll()})},n.componentWillUnmount=function(){var e=this;window.removeEventListener("scroll",function(){return e.handlescroll()}),clearTimeout(this.hidetimeout)},n.hidemenu=function(){var e=this;this.scrolly=this.curscrolly,this.hidetimeout=setTimeout(function(){e.setState({showmenu:!1,count:e.state.count+1})},500)},n.handlelabel=function(){var e=this,t=this.state.count;this.hidetimeout=t>0?setTimeout(function(){e.setState({showmenu:!1,count:0})},500):setTimeout(function(){e.setState({count:e.state.count+1})},500)},n.handlescroll=function(){this.curscrolly=window.scrollY,this.scrolly!==this.curscrolly&&(this.setState({showmenu:!0}),this.scrolly=this.curscrolly)},n.render=function(){var e=this;return l.a.createElement("nav",{className:"menu "+(this.state.showmenu?"visible":"hidden")},l.a.createElement("input",{type:"checkbox",href:"#",className:"menu-open",name:"menu-open",id:"menu-open"}),l.a.createElement("label",{onClick:function(){return e.handlelabel()},className:"menu-open-button",htmlFor:"menu-open"},l.a.createElement("span",{className:"lines line-1"}),l.a.createElement("span",{className:"lines line-2"}),l.a.createElement("span",{className:"lines line-3"})),l.a.createElement(s.Link,{onClick:function(){return e.hidemenu()},className:"alink menu-item blue",to:"/mnistpred"}," ",l.a.createElement("i",{className:"icon"},l.a.createElement(u.a,{icon:m.a})," ")," "),l.a.createElement("a",{onClick:function(){return e.hidemenu()},href:"https://github.com/DanShai",className:"menu-item green"}," ",l.a.createElement("i",{className:"icon"},l.a.createElement(u.a,{icon:d.a})," ")," "),l.a.createElement(s.Link,{onClick:function(){return e.hidemenu()},className:"alink menu-item red",to:"/"}," ",l.a.createElement("i",{className:"icon"},l.a.createElement(u.a,{icon:m.b})," ")," "))},t}(l.a.Component),p=function(e){return l.a.createElement("section",{className:"showcase"},l.a.createElement(h,null),l.a.createElement("div",{className:"banner-content"},l.a.createElement("img",{src:o.a,className:"logo",alt:"Dan Shai"}),l.a.createElement("div",{className:"title"},"Dan Shai")))},f=function(e){return l.a.createElement("section",{className:"footer center bg-dark"},l.a.createElement("p",null," ",l.a.createElement("span",null," Dan shai © 2018 ")," "))},E=function(e){function t(t){return e.call(this,t)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return l.a.createElement("div",null,l.a.createElement(p,null),e,l.a.createElement(f,null))},t}(l.a.Component);t.a=E}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-a9039ab9f39bf5ca7063.js.map