(this.webpackJsonpnameit=this.webpackJsonpnameit||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(6),s=n.n(c),i=n(2),u=n.n(i),d=n(4),h=n(7),o=n(8),l=n(10),j=n(9),p=(n(16),n(0)),b=function(e){var t=e.onInputChange;return Object(p.jsx)("div",{className:"search-container",children:Object(p.jsx)("input",{onChange:function(e){return t(e.target.value)},placeholder:"Type something here",className:"search-input",type:"number"})})},m=n.p+"static/media/friends.f4c794d5.png",x=(n(18),function(e){var t=e.headTitle,n=e.headerExpanded;return Object(p.jsxs)("div",{className:"head-container",children:[Object(p.jsx)("img",{src:m,className:"head-image ".concat(n?"head-image-expanded":"head-image-contracted"),alt:"HeaderImage"}),Object(p.jsx)("h1",{className:"head-text",children:t})]})}),f=n(5),O=(n(19),function(e){var t=e.inputString,n=e.number,a=t.split(" "),r={};var c=function(){for(var e=0;e<=a.length;e++)r[a[e]]=0;for(var t=0;t<=a.length;t++)r[a[t]]++;return r}(),s=Object.entries(c).sort((function(e,t){var n=Object(f.a)(e,2)[1];return Object(f.a)(t,2)[1]-n}));return s=s.slice(0,n),Object(p.jsx)("div",{className:"result-container",children:Object(p.jsxs)("table",{children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{className:"table-head-words",children:"Words"}),Object(p.jsx)("th",{className:"table-head-count",children:"Count"})]})}),Object(p.jsx)("tbody",{children:s.map((function(e){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{className:"table-head-word",children:e[0]}),Object(p.jsx)("th",{className:"table-head-word",children:e[1]})]})}))})]})})}),v=(n(20),function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).handleInputChange=function(){var t=Object(d.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({headerExpanded:!n,inputNum:parseInt(n)>0?parseInt(n):0});case 2:console.log(e.state.inputNum);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={headerText:"Frequency Counter",headerExpanded:!0,data:"",inputNum:0},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=Object(d.a)(u.a.mark((function e(){var t=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://raw.githubusercontent.com/invictustech/test/main/README.md").then((function(e){return e.text()})).then((function(e){return t.setState({data:e})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(x,{headerExpanded:this.state.headerExpanded,headTitle:this.state.headerText}),Object(p.jsx)(b,{onInputChange:this.handleInputChange}),Object(p.jsxs)("h3",{className:"data-write",children:[this.state.inputNum," words appeared"]}),Object(p.jsx)(O,{inputString:this.state.data,number:this.state.inputNum})]})}}]),n}(r.a.Component));s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(v,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.bd455ac1.chunk.js.map