(this["webpackJsonppeople-recruitment-task"]=this["webpackJsonppeople-recruitment-task"]||[]).push([[0],{10:function(e,t,a){e.exports={items:"SubCard_items__LE7Z8",complicated:"SubCard_complicated__1U6Rp",text:"SubCard_text__2YhbK"}},16:function(e,t,a){e.exports={component:"App_component__1Btgp",cardsWrapper:"App_cardsWrapper__1snXA"}},17:function(e,t,a){e.exports={component:"Button_component__1J1LN",minus:"Button_minus__ziRVh",plus:"Button_plus__-6p0X",bigplus:"Button_bigplus__3ZrgK"}},20:function(e,t,a){e.exports={component:"PageTitle_component__26S8p"}},23:function(e,t,a){e.exports=a(43)},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),o=a.n(c),i=a(5),l=a(9),d=a(1),u=a.n(d),s=[{id:u.a.generate(),content:"People"}],p=[{id:u.a.generate(),category:"Age",content:"40+"},{id:u.a.generate(),category:"Ethnicity",content:["Black","Hispanic"]},{id:u.a.generate(),category:"Income",content:"yearly 15k USD +"}],m={cards:[].concat(p),titles:[].concat(s)},f=a(21),y=a(22),C=function(e,t){return e.filter((function(e){if(e.content.includes(t.payload)){var a=e.content.indexOf(t.payload);return e.content.splice(a,1)}return e.content}))},_=function(e,t){return e.filter((function(e){return"string"!==typeof e.content?e.content.push(t.payload):e.content}))};var h={cards:m.cards,titles:m.titles},b={cards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"ADD_CARD":return[].concat(Object(f.a)(e),[t.payload]);case"ADD_SUBCARD":return _(e,t);case"REMOVE_CARD":return e.filter((function(e){return e.id!==t.payload}));case"REMOVE_SUBCARD":return C(e,t);default:return e}},titles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e}},g=Object(l.c)(Object(l.b)(b),h,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),v=(a(42),a(2)),E=a(3),O=a(6),D=a(4),j=a(7),A=a(16),S=a.n(A),N=a(20),x=a.n(N),R=function(e){var t=e.title;return r.a.createElement("div",{className:x.a.component},t)},k=a(17),w=a.n(k),B=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(O.a)(this,(e=Object(D.a)(t)).call.apply(e,[this].concat(r)))).modifyContent=function(e){var t=e.variant,a=e.category,n=e.complicatedCategory,r=e.handleDeleteCard,c=e.handleDeleteSubCard,o=e.handleAddCard,i=e.handleAddSubCard;switch(t){case"plus":return i();case"minus":return a!==n?r():c();case"bigplus":return o();default:console.log("Error: no variant found")}},a}return Object(j.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this,t=this.props.variant,a=w.a.component+t.split(" ").map((function(e){return" "+(w.a[e]||e)})).join("");return r.a.createElement("div",{className:a,onClick:function(){return e.modifyContent(e.props)}})}}]),t}(r.a.Component),W=a(8),I=a.n(W),U=a(10),V=a.n(U),P=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(O.a)(this,(e=Object(D.a)(t)).call.apply(e,[this].concat(r)))).handleDeleteSubCard=function(e,t){e(t)},a}return Object(j.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.subCardContent,n=t.category,c=t.complicatedCategory,o=t.removeSubCard,i=t.removeCard,l=t.handleDeleteCard;return r.a.createElement(r.a.Fragment,null,a!==c?r.a.createElement("div",{className:V.a.items},r.a.createElement("span",{className:V.a.text},a),r.a.createElement(B,{variant:"minus",category:n,complicatedCategory:c,handleDeleteSubCard:function(){return e.handleDeleteSubCard(o,a)}})):r.a.createElement("div",{className:V.a.complicated},r.a.createElement("span",{className:V.a.text},a),r.a.createElement(B,{variant:"minus",category:n,complicatedCategory:c,handleDeleteCard:function(){return l(i)}})))}}]),t}(r.a.Component),X=Object(i.b)((function(e){return{cards:e.cards}}),(function(e){return{removeSubCard:function(t){return e({type:"REMOVE_SUBCARD",payload:t})}}}))(P),T=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(O.a)(this,(e=Object(D.a)(t)).call.apply(e,[this].concat(r)))).handleAddSubCard=function(e){var t=prompt("Please enter new content from this category e.g. White","White");null!=t&&""!==t&&e(t)},a.handleDeleteCard=function(e,t){e(t)},a}return Object(j.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.category,n=t.content,c=t.addSubCard,o=t.removeCard,i=t.cardId,l=t.complicatedCategory;return r.a.createElement("div",{className:I.a.component},r.a.createElement("div",{className:I.a.componentInner},a!==l?r.a.createElement("div",{className:I.a.simple},r.a.createElement("span",{className:I.a.text},a," ",n),r.a.createElement(B,{variant:"minus",category:a,complicatedCategory:l,handleDeleteCard:function(){return e.handleDeleteCard(o,i)}})):r.a.createElement("div",{className:I.a.complicated},r.a.createElement(X,{key:u.a.generate(),subCardContent:a,category:a,complicatedCategory:l,handleDeleteCard:function(){return e.handleDeleteCard(o,i)}}),n.map((function(e){return r.a.createElement("div",{key:u.a.generate(),className:I.a.subcardsWrapper},r.a.createElement(X,{key:u.a.generate(),subCardContent:e,complicatedCategory:l,category:l}))})),r.a.createElement(B,{variant:"plus",category:a,complicatedCategory:l,handleAddSubCard:function(){return e.handleAddSubCard(c)}}))))}}]),t}(r.a.Component),L=Object(i.b)((function(e){return{cards:e.cards}}),(function(e){return{addSubCard:function(t){return e({type:"ADD_SUBCARD",payload:t})},removeCard:function(t){return e({type:"REMOVE_CARD",payload:t})}}}))(T),M=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(O.a)(this,(e=Object(D.a)(t)).call.apply(e,[this].concat(r)))).handleAddCard=function(e){var t=prompt("Please enter new category e.g. Nationality","Nationality"),a=prompt("Please enter your content for chosen category e.g. German","German");(null!=a&&""!==a||null==t||""===t)&&e(a,t)},a}return Object(j.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.addCard,n=t.titles,c=t.cards,o=n[0].content;return r.a.createElement("div",{className:S.a.component},r.a.createElement(R,{title:o}),r.a.createElement("div",{className:S.a.cardsWrapper},c.map((function(e){return r.a.createElement("div",{key:u.a.generate()},r.a.createElement(L,{key:e.id,cardId:e.id,content:e.content,category:e.category,complicatedCategory:"Ethnicity"}))}))),r.a.createElement(B,{variant:"bigplus",handleAddCard:function(){return e.handleAddCard(a)}}))}}]),t}(r.a.Component),J=Object(i.b)((function(e){return{cards:e.cards,titles:e.titles}}),(function(e,t){return{addCard:function(a,n){return e((r={id:t.id,category:n,content:a},{payload:Object(y.a)({},r,{id:u.a.generate()}),type:"ADD_CARD"}));var r}}}))(M);o.a.render(r.a.createElement(i.a,{store:g},r.a.createElement(J,null)),document.getElementById("root"))},8:function(e,t,a){e.exports={component:"Card_component__gfsQf",componentInner:"Card_componentInner__3yxxS",simple:"Card_simple__1WRjs",complicated:"Card_complicated__pCPWC",text:"Card_text__1b392",subcardsWrapper:"Card_subcardsWrapper__3mExv"}}},[[23,1,2]]]);
//# sourceMappingURL=main.e24c8e2f.chunk.js.map