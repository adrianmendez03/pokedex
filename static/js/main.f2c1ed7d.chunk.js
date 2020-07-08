(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{20:function(e,a,t){e.exports=t(45)},43:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(19),s=t.n(c),l=t(2),i=t(3),o=t(7),u=t(4),m=t(5),p=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark fixed-top corners justify-content-between"},r.a.createElement("a",{href:"#",id:"nav-logo"},"Pok\xe9dex"),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarText"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",id:"one",href:"#",onClick:function(a){return e.props.callBack(a.target.id)}},"Gen I",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",id:"two",href:"#",onClick:function(a){return e.props.callBack(a.target.id)}},"Gen II")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",id:"three",href:"#",onClick:function(a){return e.props.callBack(a.target.id)}},"Gen III")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",id:"four",href:"#",onClick:function(a){return e.props.callBack(a.target.id)}},"Gen IV"))),r.a.createElement("span",{className:"navbar-text"},"Powered by PokeAPI"))))}}]),t}(r.a.Component),d=t(6),h=t.n(d),v=t(8),f=t(9),b=t.n(f),k=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={id:"",name:e.props.name,imageURL:"",types:[],color:""},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(h.a.mark((function e(){var a,t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://pokeapi.co/api/v2/pokemon/"+this.state.name);case 2:a=e.sent,t=[],a.data.types.map((function(e){return t.push(e.type.name+" ")})),this.setState({id:a.data.id,imageURL:a.data.sprites.front_default,types:t,color:a.data.types[0].type.name});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderTypes",value:function(){return this.state.types.map((function(e){return r.a.createElement("h3",{className:"text-capitalize"},r.a.createElement("span",{className:"badge badge-pill "+e},e))}))}},{key:"render",value:function(){var e=this.state,a=e.id,t=e.name,n=e.imageURL,c="".concat(this.state.color,"-light");return r.a.createElement("div",{className:"card "+c,id:a},r.a.createElement("h5",{className:"card-header"},a),r.a.createElement("img",{src:n,alt:t,className:"card-img-top"}),r.a.createElement("div",{className:"card-body text-center text-capitalize"},r.a.createElement("h1",{className:"card-title"},t),r.a.createElement("div",{className:"d-flex justify-content-center"},this.renderTypes())))}}]),t}(r.a.Component),g=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={url:"https://pokeapi.co/api/v2/pokemon/?offset=0&limit=493",pokemon:null,genOne:null,genTwo:null,genThree:null,genFour:null},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(h.a.mark((function e(){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get(this.state.url);case 2:a=e.sent,this.setState({pokemon:a.data.results}),this.fillGen(this.state.pokemon);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fillGen",value:function(e){for(var a=[],t=[],n=[],r=[],c=0;c<e.length;c++)c<=150?a.push(e[c].name):151<=c&&c<=250?t.push(e[c].name):251<=c&&c<=385?n.push(e[c].name):r.push(e[c].name);this.setState({genOne:a,genTwo:t,genThree:n,genFour:r})}},{key:"createCards",value:function(e){return r.a.createElement("div",{className:"row"},e.map((function(e){return r.a.createElement("div",{key:e,className:"col-xl-2 col-lg-3 col-md-4 d-flex justify-content-center display-card"},r.a.createElement(k,{key:e,name:e}))})))}},{key:"renderGeneration",value:function(){var e=this.state,a=e.genOne,t=e.genTwo,n=e.genThree,c=e.genFour,s=this.props.currentTab;return this.state.genOne?"one"===s?this.createCards(a):"two"===s?this.createCards(t):"three"===s?this.createCards(n):this.createCards(c):r.a.createElement("h1",null,"Catching Pokemon . . .")}},{key:"render",value:function(){return this.renderGeneration()}}]),t}(r.a.Component),y=(t(43),function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={currentTab:"one"},n.manageTabs=n.manageTabs.bind(Object(o.a)(n)),n}return Object(i.a)(t,[{key:"manageTabs",value:function(e){this.setState({currentTab:e})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p,{callBack:this.manageTabs}),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"list"},r.a.createElement(g,{currentTab:this.state.currentTab}))))}}]),t}(r.a.Component));t(44);s.a.render(r.a.createElement(y,null),document.querySelector("#root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.f2c1ed7d.chunk.js.map