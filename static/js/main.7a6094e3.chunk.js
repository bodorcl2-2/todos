(this["webpackJsonptodo-test"]=this["webpackJsonptodo-test"]||[]).push([[0],{87:function(e,a,t){e.exports=t(99)},92:function(e,a,t){},98:function(e,a,t){},99:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(7),c=t.n(l),i=(t(92),t(48)),o=t(26),m=t(56),u=t(24),s=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";return function(t,n){if(!t.hasOwnProperty(e)||!n.hasOwnProperty(e))return 0;var r="string"===typeof t[e]?t[e].toUpperCase():t[e],l="string"===typeof n[e]?n[e].toUpperCase():n[e],c=0;return r>l?c=1:r<l&&(c=-1),"desc"===a?-1*c:c}},d=t(134),E=Object(n.createContext)(),k=function(e){var a=Object(n.useState)([]),t=Object(u.a)(a,2),l=t[0],c=t[1];Object(n.useEffect)((function(){var e=localStorage.getItem("my-todo");e&&c(JSON.parse(e))}),[]),Object(n.useEffect)((function(){localStorage.setItem("my-todo",JSON.stringify(l))}));return r.a.createElement(E.Provider,{value:{tasks:l,handleOnUpdateTask:function(e){console.log(e)},handleOnAddTask:function(e){c((function(a){return[].concat(Object(m.a)(a),[e])}))},handleOnDeleteTask:function(e){var a=Object(m.a)(l);a=a.filter((function(a){return a.id!==e.currentTarget.id})),c(a)},handleSortList:function(e){var a=e.currentTarget.id;console.log("compare = ",a,e.currentTarget.id,Object(d.a)());var t=Object(m.a)(l);t.map((function(e){return e.id=Object(d.a)()}));var n=t.sort(s(a));c(n),console.log(l)}}},e.children)},p=t(123),h=t(126),f=t(132),g=t(135),v=t(71),b=t.n(v),y=t(70),x=t.n(y),j=function(e){var a=Object(n.useContext)(E),t=a.handleOnDeleteTask,l=a.handleOnEditTask,c=Object(o.f)();return r.a.createElement(f.a,{display:"flex",justifyContent:"space-around",alignItems:"center",ml:4,mr:4,p:2,boxShadow:2},r.a.createElement(f.a,{width:"10%",textAlign:"center"},r.a.createElement(p.a,{variant:"h5",color:"primary",gutterBottom:!0},e.taskGroup)),r.a.createElement(g.a,{title:"Tu b\u0119d\u0105 kiedy\u015b wy\u015bwietlane szczegu\u0142y zadania ;)"},r.a.createElement(f.a,{width:"30%",textAlign:"center"},r.a.createElement(p.a,{variant:"h5",color:"secondary",gutterBottom:!0},e.taskName))),r.a.createElement(f.a,{width:"20%",textAlign:"center"},r.a.createElement(p.a,{variant:"h6"},e.taskDate)),r.a.createElement(f.a,{width:"20%",textAlign:"center"},r.a.createElement(p.a,{variant:"h6"},e.taskTime)),r.a.createElement(f.a,{width:"20%",display:"flex",justifyContent:"space-around",alignItems:"center"},r.a.createElement(h.a,{id:e.id,onClick:function(){return c.push("/edit/".concat(e.id))},onMouseUp:l,variant:"contained",color:"primary",startIcon:r.a.createElement(x.a,null)},"Edytuj"),r.a.createElement(h.a,{id:e.id,onClick:t,variant:"contained",color:"secondary",startIcon:r.a.createElement(b.a,null)},"Usu\u0144")))},O=function(){var e=Object(n.useContext)(E),a=e.tasks,t=e.handleSortList,l=e.handleOnDeleteTask,c=e.settingEditTask;return r.a.createElement("div",null,r.a.createElement(f.a,{display:"flex",justifyContent:"space-around",alignItems:"center",m:4,p:2,boxShadow:2},r.a.createElement(p.a,{variant:"h2",color:"primary",gutterBottom:!0},"Zaplanowane zadania")),r.a.createElement(f.a,{display:"flex",justifyContent:"space-around",alignItems:"center",ml:4,mr:4,mt:-2,pb:2,boxShadow:2},r.a.createElement(f.a,{width:"10%",textAlign:"center",ml:2,id:"taskGroup",onClick:t},r.a.createElement(p.a,{variant:"h5"},"Grupa")),r.a.createElement(f.a,{width:"30%",textAlign:"center",id:"taskName",onClick:t},r.a.createElement(p.a,{variant:"h5"},"Zadanie")),r.a.createElement(f.a,{width:"20%",textAlign:"center",id:"taskDate",onClick:t},r.a.createElement(p.a,{variant:"h6"},"Data")),r.a.createElement(f.a,{width:"20%",textAlign:"center",id:"taskTime",onClick:t},r.a.createElement(p.a,{variant:"h6"},"Godzina")),r.a.createElement(f.a,{width:"20%",textAlign:"center"})),a.sort(s("taskTime")).sort(s("taskDate")).map((function(e){return r.a.createElement(j,{key:e.id,id:e.id,taskGroup:e.taskGroup,taskName:e.taskName,taskDate:e.taskDate,taskTime:e.taskTime,handleOnDeleteTask:l,settingEditTask:c})})))},w=t(32),C=t(33),T=Object(n.createContext)(),D=function(e){var a=Object(n.useState)({tasksName:["powt\xf3rka","sprawdzian","kartk\xf3wka","pytanie","luzik"],groupsName:["1a","1b","1c","2a","2b","2c"]}),t=Object(u.a)(a,2),l=t[0];t[1];return r.a.createElement(T.Provider,{value:Object(C.a)({},l)},e.children)},A=t(127),G=t(129),N=t(130),I=t(128),S=t(136),z=t(72),B=t.n(z),U=function(){var e=Object(n.useContext)(E).handleOnAddTask,a=Object(n.useContext)(T),t=a.tasksName,l=a.groupsName,c=Object(n.useState)({id:Object(d.a)(),taskGroup:"",taskName:"",taskDate:"",taskTime:""}),i=Object(u.a)(c,2),o=i[0],m=i[1],s=function(e){var a=e.target,t=a.value,n=a.name;m((function(e){return Object(C.a)({},e,Object(w.a)({},n,t))}))};return r.a.createElement("form",{action:"#",onSubmit:function(a){a.preventDefault(),e(o),m({id:Object(d.a)(),taskGroup:"",taskName:"",taskDate:"",taskTime:""})}},r.a.createElement(f.a,{display:"flex",justifyContent:"space-around",alignItems:"center",m:4,p:2,boxShadow:2},r.a.createElement(p.a,{variant:"h4",color:"primary",gutterBottom:!0},"Dodaj nowe zadanie")),r.a.createElement(f.a,{display:"flex",justifyContent:"space-around",alignItems:"center",ml:4,mr:4,mt:-3,boxShadow:2},r.a.createElement(f.a,{width:"20%",textAlign:"center"},r.a.createElement(p.a,{variant:"h6"},"Grupa")),r.a.createElement(f.a,{width:"20%",textAlign:"center",ml:-4},r.a.createElement(p.a,{variant:"h6"},"Zadanie")),r.a.createElement(f.a,{width:"20%",textAlign:"center"},r.a.createElement(p.a,{variant:"h6"},"Data")),r.a.createElement(f.a,{width:"20%",textAlign:"center"},r.a.createElement(p.a,{variant:"h6"},"Godzina")),r.a.createElement(f.a,{width:"20%",textAlign:"center"})),r.a.createElement(f.a,{display:"flex",justifyContent:"space-around",alignItems:"center",m:4,p:2,boxShadow:2},r.a.createElement(A.a,null,r.a.createElement(N.a,{labelId:"taskGroup",name:"taskGroup",required:!0,id:"taskGroup",value:o.taskGroup,onChange:s},l.map((function(e){return r.a.createElement(S.a,{key:e,value:e},e)}))),r.a.createElement(G.a,null,"Wybierz klas\u0119")),r.a.createElement(A.a,null,r.a.createElement(N.a,{labelId:"taskName",name:"taskName",id:"taskName",required:!0,value:o.taskName,onChange:s},t.map((function(e){return r.a.createElement(S.a,{key:e,value:e},e)}))),r.a.createElement(G.a,null,"Wybierz zadanie")),r.a.createElement(A.a,null,r.a.createElement(I.a,{type:"date",label:"Data",name:"taskDate",id:"taskDate",required:!0,value:o.taskDate,onChange:s}),r.a.createElement(G.a,null,"Data")),r.a.createElement(A.a,null,r.a.createElement(I.a,{type:"time",min:"08:00",max:"15:10",name:"taskTime",id:"taskTime",required:!0,value:o.taskTime,onChange:s}),r.a.createElement(G.a,null,"Godzina")),r.a.createElement(h.a,{type:"submit",variant:"contained",color:"primary",startIcon:r.a.createElement(B.a,null)},"Dodaj")))},q=t(73),J=t.n(q),P=function(){var e=Object(o.f)(),a=Object(n.useContext)(T),t=a.tasksName,l=a.groupsName,c=Object(n.useContext)(E),i=c.tasks,m=c.handleOnUpdateTask,s=Object(o.g)().id,d=i.filter((function(e){return e.id===s}))[0],k=Object(n.useState)(d),g=Object(u.a)(k,2),v=g[0],b=g[1];console.log(s);var y=function(e){var a=e.target,t=a.value,n=a.name;b((function(e){return Object(C.a)({},e,Object(w.a)({},n,t))}))};return r.a.createElement("form",{action:"#",onSubmit:function(e){m(v)}},r.a.createElement(f.a,{display:"flex",justifyContent:"space-around",alignItems:"center",m:4,p:2,boxShadow:2},r.a.createElement(p.a,{variant:"h2",color:"primary",gutterBottom:!0},"Edytuj zadanie")),r.a.createElement(f.a,{display:"flex",justifyContent:"space-around",alignItems:"center",mt:-3,ml:4,mr:4,boxShadow:2},r.a.createElement(f.a,{width:"20%",textAlign:"center"},r.a.createElement(p.a,{variant:"h6"},"Grupa")),r.a.createElement(f.a,{width:"20%",textAlign:"center",ml:-4},r.a.createElement(p.a,{variant:"h6"},"Zadanie")),r.a.createElement(f.a,{width:"20%",textAlign:"center"},r.a.createElement(p.a,{variant:"h6"},"Data")),r.a.createElement(f.a,{width:"20%",textAlign:"center"},r.a.createElement(p.a,{variant:"h6"},"Godzina")),r.a.createElement(f.a,{width:"20%",textAlign:"center"})),r.a.createElement(f.a,{display:"flex",justifyContent:"space-around",alignItems:"center",m:4,p:2,boxShadow:2},r.a.createElement(A.a,null,r.a.createElement(N.a,{labelId:"taskGroup",name:"taskGroup",id:"taskGroup",value:v.taskGroup,onChange:y},l.map((function(e){return r.a.createElement(S.a,{key:e,value:e},e)}))),r.a.createElement(G.a,null,"Wybierz klas\u0119")),r.a.createElement(A.a,null,r.a.createElement(N.a,{labelId:"taskName",name:"taskName",id:"taskName",value:v.taskName,onChange:y},t.map((function(e){return r.a.createElement(S.a,{key:e,value:e},e)}))),r.a.createElement(G.a,null,"Wybierz zadanie")),r.a.createElement(A.a,null,r.a.createElement(I.a,{type:"date",label:"Data",name:"taskDate",id:"taskDate",value:v.taskDate,onChange:y}),r.a.createElement(G.a,null,"Data")),r.a.createElement(A.a,null,r.a.createElement(I.a,{type:"time",min:"08:00",max:"15:10",name:"taskTime",id:"taskTime",value:v.taskTime,onChange:y}),r.a.createElement(G.a,null,"Godzina")),r.a.createElement(h.a,{onClick:function(){return e.push("/")},type:"submit",variant:"contained",color:"primary",startIcon:r.a.createElement(J.a,null)},"Aktualizuj")))};t(98);var W=function(){return r.a.createElement(k,null,r.a.createElement(D,null,r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/"},r.a.createElement(O,null),r.a.createElement(U,null)),r.a.createElement(o.a,{exact:!0,path:"/edit/:id"},r.a.createElement(P,null)))))))};c.a.render(r.a.createElement(W,null),document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.7a6094e3.chunk.js.map