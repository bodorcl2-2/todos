(this["webpackJsonptodo-test"]=this["webpackJsonptodo-test"]||[]).push([[0],{108:function(e,t,a){},109:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),i=a.n(l),c=(a(99),a(22)),o=a(28),m=a(62),s=a(23),u=a(18),d=a(66),E=a.n(d);a(100);E.a.initializeApp({apiKey:"AIzaSyCF-LRF3sH83a8Q8i_d1dUupqHkZo_tOjo",authDomain:"todos-4d027.firebaseapp.com",databaseURL:"https://todos-4d027.firebaseio.com",projectId:"todos-4d027",storageBucket:"todos-4d027.appspot.com",messagingSenderId:"597712020020",appId:"1:597712020020:web:3b1fb0da6974ed64476061",measurementId:"G-XWDTD1EE6X"});var p=E.a,f=Object(n.createContext)(),k=function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),l=a[0],i=a[1],c=Object(n.useState)("taskDate"),o=Object(u.a)(c,2),d=o[0],E=o[1],k=Object(n.useState)("asc"),h=Object(u.a)(k,2),g=h[0],b=h[1];Object(n.useEffect)((function(){var e=p.firestore().collection("todos").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(s.a)({id:e.id},e.data())}));i(t)}));return function(){return e()}}),[]),Object(n.useEffect)((function(){localStorage.setItem("my-todo",JSON.stringify(l))}));return r.a.createElement(f.Provider,{value:{tasks:l,compare:d,sortingAsc:g,handleOnUpdateTask:function(e){var t=Object(m.a)(l),a=t.findIndex((function(t){return t.id===e.id}));t[a]=e,i(t)},handleOnAddTask:function(e){i((function(t){return[].concat(Object(m.a)(t),[e])}))},handleOnDeleteTask:function(e){var t=Object(m.a)(l);t=t.filter((function(t){return t.id!==e.currentTarget.id})),i(t)},handleSortList:function(e){var t=d;E(e.currentTarget.id),t===e.currentTarget.id?b("asc"===g?"desc":"asc"):b("asc")},handleOnFilter:function(e){e.currentTarget.dataset.group}}},e.children)},h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";return function(a,n){if(!a.hasOwnProperty(e)||!n.hasOwnProperty(e))return 0;var r="string"===typeof a[e]?a[e].toUpperCase():a[e],l="string"===typeof n[e]?n[e].toUpperCase():n[e],i=0;return r>l?i=1:r<l&&(i=-1),"desc"===t?-1*i:i}},g=a(136),b=a(137),y=a(143),v=a(146),j=a(79),x=a.n(j),O=a(78),w=a.n(O),C=function(e){var t,a,l=Object(n.useContext)(f),i=l.handleOnDeleteTask,c=l.handleOnFilter,m=Object(o.f)();return r.a.createElement(y.a,{display:"flex",justifyContent:"space-around",alignItems:"center",ml:4,mr:4,p:2,boxShadow:2},r.a.createElement(v.a,{title:"filtruj",placement:"right"},r.a.createElement(y.a,{width:"6%",textAlign:"right",mr:4,"data-group":e.taskGroup,onClick:function(t){c(t),m.push("/filter/".concat(e.taskGroup))}},r.a.createElement(g.a,{variant:"h5",color:"primary",gutterBottom:!0},e.taskGroup))),r.a.createElement(v.a,{title:"Tu b\u0119d\u0105 kiedy\u015b wy\u015bwietlane szczegu\u0142y zadania ;)"},r.a.createElement(y.a,{width:"30%",textAlign:"center"},r.a.createElement(g.a,{variant:"h5",color:"secondary",gutterBottom:!0},e.taskName))),r.a.createElement(y.a,{width:"20%",textAlign:"center"},r.a.createElement(g.a,{variant:"h6"},(t=e.taskDate,a="-",t.split(a).reverse().join(a)))),r.a.createElement(y.a,{width:"20%",textAlign:"center"},r.a.createElement(g.a,{variant:"h6"},e.taskTime)),r.a.createElement(y.a,{width:"20%",display:"flex",justifyContent:"space-around",alignItems:"center"},r.a.createElement(b.a,{id:e.id,onClick:function(t){m.push("/edit/".concat(e.id))},variant:"contained",color:"primary",startIcon:r.a.createElement(w.a,null)},"Edytuj"),r.a.createElement(b.a,{id:e.id,onClick:i,variant:"contained",color:"secondary",startIcon:r.a.createElement(x.a,null)},"Usu\u0144")))},S=a(29),D=a.n(S),T=a(30),z=a.n(T),I=function(){var e=Object(n.useContext)(f),t=e.tasks,a=e.compare,l=e.sortingAsc,i=e.handleSortList,c=e.handleOnDeleteTask,m=e.settingEditTask;Object(o.f)();return r.a.createElement("div",null,r.a.createElement(y.a,{display:"flex",justifyContent:"space-around",alignItems:"center",m:4,p:2,boxShadow:2},r.a.createElement(g.a,{variant:"h2",color:"primary",gutterBottom:!0},"Zaplanowane zadania")),r.a.createElement(y.a,{display:"flex",justifyContent:"space-around",alignItems:"center",ml:4,mr:4,mt:-2,pb:2,boxShadow:2},r.a.createElement(y.a,{display:"flex",alignItems:"center",justifyContent:"center",width:"10%",textAlign:"center",ml:2,id:"taskGroup",onClick:i},r.a.createElement(g.a,{variant:"h5"},"Grupa"),"asc"===l?r.a.createElement(D.a,{fontSize:"small"}):r.a.createElement(z.a,{fontSize:"small"})),r.a.createElement(y.a,{display:"flex",alignItems:"center",justifyContent:"center",width:"30%",textAlign:"center",id:"taskName",onClick:i},r.a.createElement(g.a,{variant:"h5"},"Zadanie"),"asc"===l?r.a.createElement(D.a,{fontSize:"small"}):r.a.createElement(z.a,{fontSize:"small"})),r.a.createElement(y.a,{display:"flex",alignItems:"center",justifyContent:"center",width:"20%",textAlign:"center",id:"taskDate",onClick:i},r.a.createElement(g.a,{variant:"h6"},"Data"),"asc"===l?r.a.createElement(D.a,{fontSize:"small"}):r.a.createElement(z.a,{fontSize:"small"})),r.a.createElement(y.a,{width:"20%",textAlign:"center",id:"taskTime"},r.a.createElement(g.a,{variant:"h6"},"Godzina")),r.a.createElement(y.a,{width:"20%",textAlign:"center"})),t.sort(h("taskTime")).sort(h(a,l)).map((function(e){return r.a.createElement(C,{key:e.id,id:e.id,taskGroup:e.taskGroup,taskName:e.taskName,taskDate:e.taskDate,taskTime:e.taskTime,handleOnDeleteTask:c,settingEditTask:m})})))},A=a(37),G=Object(n.createContext)(),N=function(e){var t=Object(n.useState)({tasksName:["powt\xf3rka","sprawdzian","kartk\xf3wka","pytanie","luzik"],groupsName:["1a","1b","1c","2a","2b","2c","3a","3b","3c"]}),a=Object(u.a)(t,2),l=a[0];a[1];return r.a.createElement(G.Provider,{value:Object(s.a)({},l)},e.children)},B=a(145),U=a(138),Z=a(140),q=a(141),L=a(139),P=a(147),W=a(80),F=a.n(W),J=function(){var e=Object(n.useContext)(f).handleOnAddTask,t=Object(n.useContext)(G),a=t.tasksName,l=t.groupsName,i=Object(o.f)(),c=Object(n.useState)({id:Object(B.a)(),taskGroup:"",taskName:"",taskDate:"",taskTime:""}),m=Object(u.a)(c,2),d=m[0],E=m[1],p=function(e){var t=e.target,a=t.value,n=t.name;E((function(e){return Object(s.a)({},e,Object(A.a)({},n,a))}))};return r.a.createElement("form",{action:"#",onSubmit:function(t){t.preventDefault(),e(d),E({id:Object(B.a)(),taskGroup:"",taskName:"",taskDate:"",taskTime:""})}},r.a.createElement(y.a,{display:"flex",justifyContent:"space-around",alignItems:"center",m:4,p:2,boxShadow:2},r.a.createElement(g.a,{variant:"h4",color:"primary",gutterBottom:!0},"Dodaj nowe zadanie")),r.a.createElement(y.a,{display:"flex",justifyContent:"space-around",alignItems:"center",ml:4,mr:4,mt:-3,boxShadow:2},r.a.createElement(y.a,{width:"20%",textAlign:"center"},r.a.createElement(g.a,{variant:"h6"},"Grupa")),r.a.createElement(y.a,{width:"20%",textAlign:"center",ml:-4},r.a.createElement(g.a,{variant:"h6"},"Zadanie")),r.a.createElement(y.a,{width:"20%",textAlign:"center"},r.a.createElement(g.a,{variant:"h6"},"Data")),r.a.createElement(y.a,{width:"20%",textAlign:"center"},r.a.createElement(g.a,{variant:"h6"},"Godzina")),r.a.createElement(y.a,{width:"20%",textAlign:"center"})),r.a.createElement(y.a,{display:"flex",justifyContent:"space-around",alignItems:"center",m:4,p:2,boxShadow:2},r.a.createElement(U.a,null,r.a.createElement(q.a,{labelId:"taskGroup",name:"taskGroup",required:!0,id:"taskGroup",value:d.taskGroup,onChange:p},l.map((function(e){return r.a.createElement(P.a,{key:e,value:e},e)}))),r.a.createElement(Z.a,null,"Wybierz klas\u0119")),r.a.createElement(U.a,null,r.a.createElement(q.a,{labelId:"taskName",name:"taskName",id:"taskName",required:!0,value:d.taskName,onChange:p},a.map((function(e){return r.a.createElement(P.a,{key:e,value:e},e)}))),r.a.createElement(Z.a,null,"Wybierz zadanie")),r.a.createElement(U.a,null,r.a.createElement(L.a,{type:"date",label:"Data",name:"taskDate",id:"taskDate",required:!0,value:d.taskDate,onChange:p}),r.a.createElement(Z.a,null,"Data")),r.a.createElement(U.a,null,r.a.createElement(L.a,{type:"time",min:"08:00",max:"15:10",name:"taskTime",id:"taskTime",required:!0,value:d.taskTime,onChange:p}),r.a.createElement(Z.a,null,"Godzina")),r.a.createElement(b.a,{type:"submit",variant:"contained",color:"primary",startIcon:r.a.createElement(F.a,null),onClick:function(e){return i.push("/")}},"Dodaj")))},H=a(81),R=a.n(H),X=function(){var e=Object(o.f)(),t=Object(n.useContext)(G),a=t.tasksName,l=t.groupsName,i=Object(n.useContext)(f),c=i.tasks,m=i.handleOnUpdateTask,d=Object(o.g)().id,E=c.find((function(e){return e.id===d})),p=Object(n.useState)(E),k=Object(u.a)(p,2),h=k[0],v=k[1],j=function(e){var t=e.target,a=t.value,n=t.name;v((function(e){return Object(s.a)({},e,Object(A.a)({},n,a))}))};return r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),m(h),e.push("/")}},r.a.createElement(y.a,{display:"flex",justifyContent:"space-around",alignItems:"center",m:4,p:2,boxShadow:2},r.a.createElement(g.a,{variant:"h2",color:"primary",gutterBottom:!0},"Edytuj zadanie")),r.a.createElement(y.a,{display:"flex",justifyContent:"space-around",alignItems:"center",mt:-3,ml:4,mr:4,boxShadow:2},r.a.createElement(y.a,{width:"20%",textAlign:"center"},r.a.createElement(g.a,{variant:"h6"},"Grupa")),r.a.createElement(y.a,{width:"20%",textAlign:"center",ml:-4},r.a.createElement(g.a,{variant:"h6"},"Zadanie")),r.a.createElement(y.a,{width:"20%",textAlign:"center"},r.a.createElement(g.a,{variant:"h6"},"Data")),r.a.createElement(y.a,{width:"20%",textAlign:"center"},r.a.createElement(g.a,{variant:"h6"},"Godzina")),r.a.createElement(y.a,{width:"20%",textAlign:"center"})),r.a.createElement(y.a,{display:"flex",justifyContent:"space-around",alignItems:"center",m:4,p:2,boxShadow:2},r.a.createElement(U.a,null,r.a.createElement(q.a,{labelId:"taskGroup",name:"taskGroup",id:"taskGroup",value:h.taskGroup,onChange:j},l.map((function(e){return r.a.createElement(P.a,{key:e,value:e},e)}))),r.a.createElement(Z.a,null,"Wybierz klas\u0119")),r.a.createElement(U.a,null,r.a.createElement(q.a,{labelId:"taskName",name:"taskName",id:"taskName",value:h.taskName,onChange:j},a.map((function(e){return r.a.createElement(P.a,{key:e,value:e},e)}))),r.a.createElement(Z.a,null,"Wybierz zadanie")),r.a.createElement(U.a,null,r.a.createElement(L.a,{type:"date",label:"Data",name:"taskDate",id:"taskDate",value:h.taskDate,onChange:j}),r.a.createElement(Z.a,null,"Data")),r.a.createElement(U.a,null,r.a.createElement(L.a,{type:"time",min:"08:00",max:"15:10",name:"taskTime",id:"taskTime",value:h.taskTime,onChange:j}),r.a.createElement(Z.a,null,"Godzina")),r.a.createElement(b.a,{type:"submit",variant:"contained",color:"primary",startIcon:r.a.createElement(R.a,null)},"Aktualizuj")))},_=(a(108),function(){var e=Object(o.g)().filter,t=Object(n.useContext)(f),a=t.tasks,l=t.compare,i=t.sortingAsc,c=t.handleSortList,m=t.handleOnDeleteTask,s=t.settingEditTask,d=Object(o.f)(),E=Object(n.useState)(a.filter((function(t){return t.taskGroup===e}))),p=Object(u.a)(E,2),k=p[0];p[1];return console.log(k),r.a.createElement("div",null,r.a.createElement(y.a,{display:"flex",justifyContent:"space-around",alignItems:"center",m:4,p:2,boxShadow:2},r.a.createElement(g.a,{variant:"h2",color:"primary",gutterBottom:!0},"Zaplanowane zadania")),r.a.createElement(y.a,{display:"flex",justifyContent:"space-around",alignItems:"center",ml:4,mr:4,mt:-2,pb:2,boxShadow:2},r.a.createElement(y.a,{display:"flex",alignItems:"center",justifyContent:"center",width:"10%",textAlign:"center",ml:2,id:"taskGroup",onClick:c},r.a.createElement(g.a,{variant:"h5"},"Grupa"),"asc"===i?r.a.createElement(D.a,{fontSize:"small"}):r.a.createElement(z.a,{fontSize:"small"})),r.a.createElement(y.a,{display:"flex",alignItems:"center",justifyContent:"center",width:"30%",textAlign:"center",id:"taskName",onClick:c},r.a.createElement(g.a,{variant:"h5"},"Zadanie"),"asc"===i?r.a.createElement(D.a,{fontSize:"small"}):r.a.createElement(z.a,{fontSize:"small"})),r.a.createElement(y.a,{display:"flex",alignItems:"center",justifyContent:"center",width:"20%",textAlign:"center",id:"taskDate",onClick:c},r.a.createElement(g.a,{variant:"h6"},"Data"),"asc"===i?r.a.createElement(D.a,{fontSize:"small"}):r.a.createElement(z.a,{fontSize:"small"})),r.a.createElement(y.a,{width:"20%",textAlign:"center",id:"taskTime"},r.a.createElement(g.a,{variant:"h6"},"Godzina")),r.a.createElement(y.a,{width:"20%",textAlign:"center"})),k.sort(h("taskTime")).sort(h(l,i)).map((function(e){return r.a.createElement(C,{key:e.id,id:e.id,taskGroup:e.taskGroup,taskName:e.taskName,taskDate:e.taskDate,taskTime:e.taskTime,handleOnDeleteTask:m,settingEditTask:s})})),r.a.createElement(y.a,{display:"flex",justifyContent:"space-around",alignItems:"center",m:4,p:2,boxShadow:2},r.a.createElement(b.a,{onClick:function(){return d.push("/")},variant:"contained",color:"primary"},"Powr\xf3t")),r.a.createElement(J,null))});var K=function(){return r.a.createElement(k,null,r.a.createElement(N,null,r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/"},r.a.createElement(I,null),r.a.createElement(J,null)),r.a.createElement(o.a,{path:"/filter/:filter"},r.a.createElement(_,null)),r.a.createElement(o.a,{exact:!0,path:"/edit/:id"},r.a.createElement(X,null)))))))};i.a.render(r.a.createElement(K,null),document.getElementById("root"))},94:function(e,t,a){e.exports=a(109)},99:function(e,t,a){}},[[94,1,2]]]);
//# sourceMappingURL=main.9e2560fc.chunk.js.map