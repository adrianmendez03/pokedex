(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{19:function(e,t,a){e.exports=a(44)},42:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),s=a.n(c),l=a(2),o=a(3),i=a(4),u=a(5),m=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark fixed-top corners"},r.a.createElement("a",{href:"#",id:"nav-logo"},"Pok\xe9dex")))}}]),a}(r.a.Component),p=a(6),d=a.n(p),f=a(7),h=a(8),v=a.n(h),y=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={id:"",name:"",imageURL:"",types:[],color:""},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(f.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get(this.props.url);case 2:t=e.sent,a=[],t.data.types.map((function(e){return a.push(e.type.name+" ")})),this.setState({id:t.data.id,name:t.data.name,imageURL:t.data.sprites.front_default,types:a,color:t.data.types[0].type.name});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderTypes",value:function(){return this.state.types.map((function(e){return r.a.createElement("h3",{className:"text-capitalize"},r.a.createElement("span",{class:"badge badge-pill "+e},e))}))}},{key:"render",value:function(){var e=this.state,t=e.id,a=e.name,n=e.imageURL,c=(e.types,"".concat(this.state.color,"-light"));return r.a.createElement("div",{className:"card "+c},r.a.createElement("h5",{className:"card-header"},t),r.a.createElement("img",{src:n,alt:a,className:"card-img-top"}),r.a.createElement("div",{className:"card-body text-center text-capitalize"},r.a.createElement("h1",{className:"card-title"},a),r.a.createElement("div",{className:"d-flex justify-content-center"},this.renderTypes())))}}]),a}(r.a.Component),b=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={url:"https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150",pokemon:null},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(f.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get(this.state.url);case 2:t=e.sent,this.setState({pokemon:t.data.results});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.pokemon?r.a.createElement("div",{className:"row"},this.state.pokemon.map((function(e){return r.a.createElement("div",{className:"col-xl-2 col-lg-3 col-md-4 d-flex justify-content-center display-card"},r.a.createElement(y,{key:e.name,name:e.name,url:e.url}))}))):r.a.createElement("h1",null,"Catching Pok\xe9mon . . .")}}]),a}(r.a.Component),k=(a(42),function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(m,null),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"list"},r.a.createElement(b,null))))}}]),a}(r.a.Component));a(43);s.a.render(r.a.createElement(k,null),document.querySelector("#root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.d006e12c.chunk.js.map