(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{70:function(e,t,n){},71:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(10),i=n.n(r),s=(n(70),n(54)),o=n(35),j=(n.p,n(71),n(108)),d=n(45),l=n(120),u=n(5),b=Object(j.a)({balance:{fontSize:25,marginBottom:20}}),x=function(e){var t=e.transactions,n=b(),a=t.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2);return Object(u.jsx)(l.a,{children:Object(u.jsxs)(d.a,{className:n.balance,children:["Balance is \u20b9",a]})})},m=n(111),O=n(112),h=Object(j.a)({container:{display:"flex","& > *":{padding:10,flex:1}},income:{color:"green"},expense:{color:"red"}}),f=function(e){var t=e.transactions,n=h(),a=t.map((function(e){return e.amount})),c=a.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),r=(-1*a.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0)).toFixed(2);return Object(u.jsxs)(l.a,{className:n.container,children:[Object(u.jsx)(m.a,{children:Object(u.jsxs)(O.a,{children:[Object(u.jsx)(d.a,{children:"Income"}),Object(u.jsxs)(d.a,{className:n.income,children:["\u20b9",c]})]})}),Object(u.jsx)(m.a,{children:Object(u.jsxs)(O.a,{children:[Object(u.jsx)(d.a,{children:"Expense"}),Object(u.jsxs)(d.a,{className:n.expense,children:["\u20b9",r]})]})})]})},p=n(119),g=n(114),v=Object(j.a)({container:{display:"flex",flexDirection:"column",marginTop:10,"& > *":{marginBottom:20}},button:{background:"#445a6f",color:"white"}}),T=function(e){var t=e.addTransaction,n=v(),c=Object(a.useState)(""),r=Object(o.a)(c,2),i=r[0],s=r[1],j=Object(a.useState)(),b=Object(o.a)(j,2),x=b[0],m=b[1];return Object(u.jsxs)(l.a,{className:n.container,children:[Object(u.jsx)(d.a,{variant:"h5",children:"New Transaction"}),Object(u.jsx)(p.a,{label:"Enter expense",onChange:function(e){return s(e.target.value)}}),Object(u.jsx)(p.a,{label:"Enter amt",onChange:function(e){return m(e.target.value)}}),Object(u.jsx)(g.a,{className:n.button,onClick:function(e){var n={id:Math.floor(1e8*Math.random()),text:i,amount:+x};t(n)},variant:"contained",children:"add new transaction"})]})},N=n(118),k=n(113),y=n(115),w=n(116),C=n(117),F=n(53),S=n.n(F),B=Object(j.a)({list:{marginTop:10,border:"1px solid #f6f6f6"}}),E=function(e){var t=e.transaction,n=e.deleteTransaction,a=B(),c=(t.amount>=0?"\u20b9":"-\u20b9")+Math.abs(t.amount),r=t.amount>=0?"#b3f2b5":"#eda8ae";return Object(u.jsxs)(y.a,{style:{background:"".concat(r)},className:a.list,children:[Object(u.jsx)(w.a,{children:Object(u.jsx)(S.a,{onClick:function(){return n(t.id)}})}),Object(u.jsx)(C.a,{primary:t.text}),Object(u.jsx)(C.a,{primary:c})]})},M=Object(j.a)({component:{"& > *":{marginBottom:10}}}),I=function(e){var t=e.transactions,n=e.deleteTransaction,a=M();return Object(u.jsxs)(l.a,{className:a.component,children:[Object(u.jsx)(d.a,{variant:"h5",children:"Transaction history"}),Object(u.jsx)(N.a,{}),Object(u.jsx)(k.a,{children:t.map((function(e){return Object(u.jsx)(E,{deleteTransaction:n,transaction:e},e.id)}))})]})},z=Object(j.a)({header:{color:"#2b302b",fontSize:35,margin:"10px, 0",textTransform:"uppercase"},component:{background:"white",width:800,padding:10,borderRadius:20,display:"flex","& > *":{width:"50%",padding:10,height:"80vh"}}});var D=function(){var e=z(),t=Object(a.useState)([{id:1,text:"momos",amount:-20},{id:2,text:"salary",amount:3e3},{id:3,text:"book",amount:-100},{id:4,text:"bonus",amount:300}]),n=Object(o.a)(t,2),c=n[0],r=n[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(d.a,{className:e.header,children:"EXpense TRacker"}),Object(u.jsxs)(l.a,{className:e.component,children:[Object(u.jsxs)(l.a,{children:[Object(u.jsx)(x,{transactions:c}),Object(u.jsx)(f,{transactions:c}),Object(u.jsx)(T,{addTransaction:function(e){r((function(t){return[e].concat(Object(s.a)(t))}))}})]}),Object(u.jsx)(l.a,{children:Object(u.jsx)(I,{transactions:c,deleteTransaction:function(e){r(c.filter((function(t){return t.id!==e}))),console.log(c)}})})]})]})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,123)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(D,{})}),document.getElementById("root")),J()}},[[80,1,2]]]);
//# sourceMappingURL=main.ebd227d7.chunk.js.map