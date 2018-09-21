(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{145:function(e,t,n){"use strict";n.r(t);n(52);var a=n(8),r=n.n(a),i=n(240),s=n.n(i),o=(n(336),n(337),n(82),n(342),n(212),n(0)),c=n.n(o),l=(n(25),n(231)),u=function(e){function t(t){return e.call(this,t)||this}r()(t,e);var n=t.prototype;return n.render=function(){return null},n.parseLayerElement=function(e){switch(e.props.lname){case"Conv2D":return l.d.conv2d(e.props);case"Dense":return l.d.dense(e.props);case"Flatten":return l.d.flatten(e.props);case"MaxPooling2D":return l.d.maxPooling2d(e.props);default:throw new Error("Invalid Layer",e)}},n._compile=function(){var e=this,t=this.props,n=t.children,a=t.optimizer,r=t.loss,i=t.metrics,s=t.onCompile,o=c.a.Children.toArray(n),u=l.f();o.map(function(t){t&&u.add(e.parseLayerElement(t))}),u.compile({optimizer:a,loss:r,metrics:i}),"function"==typeof s&&s(u)},n.componentDidUpdate=function(e){this.props!=e&&this._compile()},n.componentDidMount=function(){this._compile()},t}(c.a.Component),m=(n(39),n(57),n(428),n(430)),p=n.n(m),d=n(431),h=n.n(d),f=n(433),v=(n(294),n(4),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={metrics:{},allcharts:{},modelElement:null},n.trainer=null,n.dcolors={backgroundColor:"rgba(252, 145, 58,0.2)",borderColor:"rgba(252, 145, 58,1)",borderWidth:1,hoverBackgroundColor:"rgba(252, 145, 58,0.4)",hoverBorderColor:"rgba(252, 145, 58,1)"},n}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this,t=c.a.Children.only(this.props.children),n=c.a.cloneElement(t,{onCompile:function(t){e.trainer=e._train(t),e.trainer.next()}});this.setState({modelElement:n})},n.draw_metrics=function(){var e=this;return Object.keys(this.state.metrics).map(function(t){e.state.metrics[t];var n=e.state.allcharts[t];return c.a.createElement("div",{key:t,className:"d200 boxshadow"},c.a.createElement(f.a,{data:n}))})},n.render=function(){if(!this.props.display)return this.state.modelElement;var e=this.draw_metrics();return c.a.createElement("div",null,c.a.createElement("div",{className:"chart"},e),this.state.modelElement)},n.shouldComponentUpdate=function(e,t){return this.props.train!=e.train||this.state.modelElement!=t.modelElement||this.state.metrics!=t.metrics},n.componentDidUpdate=function(e){this.props.train&&!e.train&&null!=this.trainer&&this.trainer.next()},n._train=function(e){var t=this;return h()(s.a.mark(function n(){var a,r,i,o,c,u,m,d,h,f,v,g,b,E,y,k,x,w,C,S;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:a=t.props,r=a.trainData,i=a.samples,o=a.validationData,c=a.epochs,u=a.batchSize,m=a.display,d="function"==typeof t.props.onBatchEnd?t.props.onBatchEnd:function(){},h=0;case 3:if(!(h<c)){n.next=45;break}f=r(),v=0;case 6:if(!(v*u<i)){n.next=25;break}if(t.props.train){n.next=11;break}return void(n.next=11);case 11:return g=t._getBatch(f,u),n.next=14,p()(e.fit(g.xs,g.ys,{batchSize:g.xs.shape[0],epochs:1}));case 14:if(b=n.sent,d(b.history,e),l.c(g),!m){n.next=22;break}return E=b.history,t._pushMetrics(E),n.next=22,p()(l.e());case 22:v++,n.next=6;break;case 25:if(!o){n.next=42;break}y=o(),k=t._getBatch(y,1/0),x=e.evaluate(k.xs,k.ys,{batchSize:u}),w={},C=0;case 31:if(!(C<x.length)){n.next=39;break}return S=e.metricsNames[C],n.next=35,p()(x[C].data());case 35:w["validation-"+S]=n.sent;case 36:C++,n.next=31;break;case 39:t._pushMetrics(w),l.c(x),l.c(k);case 42:h++,n.next=3;break;case 45:t.props.onTrainEnd(e);case 46:case"end":return n.stop()}},n,this)}))()},n._getBatch=function(e,t){void 0===t&&(t=32);for(var n=[],a=[],r=0;r<t;r++){var i=e.next().value;if(null==i)break;n.push(i.x),a.push(i.y)}if(0===n.length)throw new Error("No data returned from data generator for batch, check sample length");var s=function(e){return e[0]instanceof l.a?l.g(e):l.h(e)};return{xs:s(n),ys:s(a)}},n._pushMetrics=function(e){var t=this,n=Object.assign({},this.state.metrics);Object.keys(e).map(function(a){null==n[a]&&(n[a]=[]),n[a].push(e[a][0]);var r=n[a],i={labels:Object.keys(r).map(function(e){return parseInt(e,10)}),datasets:[Object.assign({label:a,data:r},t.dcolors)]};t.setState(function(e){return e.allcharts[a]=i,e})}),this.setState({metrics:n})},t}(c.a.Component)),g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return null},t}(o.Component),b=n(549),E=n.n(b),y=function(e){function t(t){return e.call(this,t)||this}r()(t,e);var n=t.prototype;return n.shouldComponentUpdate=function(e,t){return this.props.imgdigit!=e.imgdigit},n.componentDidUpdate=function(e){this.props.imgdigit&&this.draw_digit()},n.componentDidMount=function(){this.draw_digit()},n.draw_digit=function(){var e=this.props.mnist,t=this.props.imgdigit,n=this.refs.canvas.getContext("2d");e.draw(t,n)},n.render=function(){return c.a.createElement("div",null,c.a.createElement("canvas",{ref:"canvas",width:this.props.width,height:this.props.height}))},t}(c.a.Component),k=n(170),x=n(191),w=n.n(x);n.d(t,"default",function(){return T});var C=s.a.mark(M),S=s.a.mark(P),N=E.a.set(1500,100),D=N.training,_=N.test;function M(){var e,t,n,a,r;return s.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:e=D,t=Array.isArray(e),n=0,e=t?e:e[Symbol.iterator]();case 1:if(!t){i.next=7;break}if(!(n>=e.length)){i.next=4;break}return i.abrupt("break",17);case 4:a=e[n++],i.next=11;break;case 7:if(!(n=e.next()).done){i.next=10;break}return i.abrupt("break",17);case 10:a=n.value;case 11:return r=a,l.i(r.input).reshape([28,28]),i.next=15,{x:l.i(r.input).reshape([28,28,1]),y:r.output};case 15:i.next=1;break;case 17:case"end":return i.stop()}},C,this)}function P(){var e,t,n,a,r;return s.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:e=_,t=Array.isArray(e),n=0,e=t?e:e[Symbol.iterator]();case 1:if(!t){i.next=7;break}if(!(n>=e.length)){i.next=4;break}return i.abrupt("break",17);case 4:a=e[n++],i.next=11;break;case 7:if(!(n=e.next()).done){i.next=10;break}return i.abrupt("break",17);case 10:a=n.value;case 11:return r=a,l.i(r.input).reshape([28,28]),i.next=15,{x:l.i(r.input).reshape([28,28,1]),y:r.output};case 15:i.next=1;break;case 17:case"end":return i.stop()}},S,this)}var z=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return c.a.createElement(v,{trainData:M,samples:1500,validationData:P,onBatchEnd:this.props.onBatchEnd,epochs:5,batchSize:64,onTrainEnd:this.props.onTrainEnd,train:this.props.train,display:!0},c.a.createElement(u,{optimizer:l.j.sgd(.15),loss:"categoricalCrossentropy",metrics:["accuracy"]},c.a.createElement(g,{lname:"Conv2D",inputShape:[28,28,1],kernelSize:5,filters:8,strides:1,activation:"relu",kernelInitializer:"VarianceScaling"}),c.a.createElement(g,{lname:"MaxPooling2D",poolSize:[2,2],strides:[2,2]}),c.a.createElement(g,{lname:"Conv2D",kernelSize:5,filters:16,strides:1,activation:"relu",kernelInitializer:"VarianceScaling"}),c.a.createElement(g,{lname:"MaxPooling2D",poolSize:[2,2],strides:[2,2]}),c.a.createElement(g,{lname:"Flatten"}),c.a.createElement(g,{lname:"Dense",units:10,kernelInitializer:"VarianceScaling",activation:"softmax"})))},t}(c.a.Component),T=function(e){function t(){var t;return(t=e.call(this)||this).state={model:null,training:!1,trained:!1,predicted:null},t}r()(t,e);var n=t.prototype;return n.predict=function(){var e=[1,3,4,5,8],t=l.g(e.map(function(e){return l.i(E.a[e].get()).reshape([28,28,1])})),n=this.state.model.predict(t),a=l.b(n,1).dataSync(),r=n.dataSync();this.setState({predicted:e.map(function(e,t){var n=E.a[e].get(),i=a[t],s=E.a[i].get();return c.a.createElement("div",{key:t,className:"boxshadow"},c.a.createElement("span",{className:"bspant"}," Real "),c.a.createElement(y,{width:28,height:28,mnist:E.a,imgdigit:n}),c.a.createElement(y,{width:28,height:28,mnist:E.a,imgdigit:s}),c.a.createElement("span",{className:e==i?"bspang":"bspanr"},"Pred: "+Math.round(100*r[10*t+e]),"%"," "))})})},n.render=function(){var e=this;return c.a.createElement(k.a,null,c.a.createElement(w.a,null,c.a.createElement("title",null,"Mnist - Prediction "),c.a.createElement("meta",{name:"description",content:"Generic Page"})),c.a.createElement("section",{className:"container"},c.a.createElement("header",{className:"bheader"},c.a.createElement("h2",null," Mnist Convolutional Neural Network Prediction ")),c.a.createElement("div",{className:"btdiv"},c.a.createElement("span",{className:" special boxshadow",onClick:function(){return e.setState({training:!e.state.training})}},this.state.training?" Pause":" Train"),this.state.trained&&c.a.createElement("span",{className:"special boxshadow",onClick:function(){return e.predict()}},"Predict")),c.a.createElement("div",{className:"prob"},this.state.predicted),c.a.createElement(z,{onTrainEnd:function(t){return e.setState({model:t})},onBatchEnd:function(t,n){return e.setState({model:n,trained:!0})},train:this.state.training})))},t}(c.a.Component)},154:function(e,t,n){},155:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return h});var a=n(0),r=n.n(a),i=n(4),s=n.n(i),o=n(148),c=n.n(o);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var l=n(27);n.d(t,"waitForRouteChange",function(){return l.c});var u=n(157),m=n.n(u);n.d(t,"PageRenderer",function(){return m.a});var p=n(38);n.d(t,"parsePath",function(){return p.a});var d=r.a.createContext({}),h=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},157:function(e,t,n){var a;e.exports=(a=n(163))&&a.default||a},163:function(e,t,n){"use strict";n.r(t);n(39);var a=n(0),r=n.n(a),i=n(4),s=n.n(i),o=n(53),c=n(1),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({key:t.pathname,location:t,pageResources:n},n.json))};l.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=l},167:function(e,t,n){e.exports=n.p+"static/omega-af1c1859ddb4517d35947043794fe64d.png"},168:function(e,t,n){},170:function(e,t,n){"use strict";var a=n(8),r=n.n(a),i=n(0),s=n.n(i),o=(n(4),n(154),n(167)),c=n.n(o),l=n(155),u=(n(168),n(175)),m=n(176),p=n(177),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={showmenu:!1,open:!1},n.scrolly=0,n.curscrolly=0,n.autotimeout=null,n.start=null,n._isMounted=!1,n}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this._isMounted=!0,window.addEventListener("scroll",function(){return e.handlescroll()})},n.componentWillUnmount=function(){var e=this;this._isMounted=!1,window.removeEventListener("scroll",function(){return e.handlescroll()}),clearTimeout(this.autotimeout)},n.hidemenu=function(){this.scrolly=this.curscrolly,this._isMounted&&(this.setState({showmenu:!1,open:!1}),this.start=null)},n.btnClicked=function(){this._isMounted&&this.setState({open:!this.state.open}),this.autoclose()},n.autoclose=function(){if(this.state.showmenu&&!this.state.open){var e=(new Date).getSeconds();null!==this.start&&e-this.start>5&&this.hidemenu()}},n.handlescroll=function(){var e=this;this.curscrolly=window.scrollY,this.scrolly!==this.curscrolly&&(this._isMounted&&this.setState({showmenu:!0}),this.scrolly=this.curscrolly),this.start=(new Date).getSeconds(),this.autotimeout=setTimeout(function(){e.autoclose()},6e3)},n.render=function(){var e=this;return s.a.createElement("nav",{className:"menu "+(this.state.showmenu?"visible":"hidden")},s.a.createElement("div",{onClick:function(){return e.btnClicked()},className:"menu-btn "+(this.state.open?"menu-btn-open":" ")},s.a.createElement("span",{className:"lines "+(this.state.open?"line-1-clicked":"line-1")}),s.a.createElement("span",{className:"lines "+(this.state.open?"line-2-clicked":"line-2")}),s.a.createElement("span",{className:"lines "+(this.state.open?"line-3-clicked":"line-3")})),s.a.createElement(l.Link,{onClick:function(){return e.hidemenu()},className:"alink menu-item blue",to:"/mnistpred"},s.a.createElement("i",{className:"icon"},s.a.createElement(u.a,{icon:m.a}))),s.a.createElement("a",{onClick:function(){return e.hidemenu()},href:"https://github.com/DanShai",className:"alink menu-item green"},s.a.createElement("i",{className:"icon"},s.a.createElement(u.a,{icon:p.a})," ")),s.a.createElement(l.Link,{onClick:function(){return e.hidemenu()},className:"alink menu-item red",to:"/"},s.a.createElement("i",{className:"icon"},s.a.createElement(u.a,{icon:m.b}))),s.a.createElement(l.Link,{onClick:function(){return e.hidemenu()},className:"alink menu-item pumpkin",to:"/blog"},s.a.createElement("i",{className:"icon"},s.a.createElement(u.a,{icon:m.c}))))},t}(s.a.Component),h=function(e){return s.a.createElement("section",{className:"banner"},s.a.createElement(d,null),s.a.createElement("div",{className:"banner-content"},s.a.createElement("img",{src:c.a,className:"logo",alt:"Dan Shai"}),s.a.createElement("div",{className:"title"},"Dan Shai")))},f=function(e){return s.a.createElement("section",{className:"footer center bg-dark"},s.a.createElement("p",null," ",s.a.createElement("span",null," Dan shai © 2018 ")," "))},v=function(e){function t(t){return e.call(this,t)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return s.a.createElement("div",null,s.a.createElement(h,null),e,s.a.createElement(f,null))},t}(s.a.Component);t.a=v},294:function(e,t,n){},347:function(e,t){},349:function(e,t){},381:function(e,t){},382:function(e,t){}}]);
//# sourceMappingURL=component---src-pages-mnistpred-js-689731949c9ca5da15b9.js.map