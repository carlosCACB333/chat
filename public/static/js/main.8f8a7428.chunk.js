(this.webpackJsonpchat=this.webpackJsonpchat||[]).push([[0],{218:function(e,t,n){},358:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),o=n(55),a=n.n(o),s=(n(218),n(37)),i=n(12),l=n(7),j=n(16),d=n(173),b=n.n(d),u=localStorage.getItem("token"),h=b.a.create({baseURL:"api/"});h.defaults.headers.common.Authorization=u,h.interceptors.response.use((function(e){return e}),(function(e){return 401===e.response.status&&localStorage.removeItem("token"),Promise.reject(e)}));var O=h,x=n(2),m=Object(c.createContext)(),g={token:null,user:null,cheking:!0},p=function(e){var t=e.children,n=Object(c.useState)(g),r=Object(j.a)(n,2),o=r[0],a=r[1],s=Object(c.useCallback)((function(){a(Object(l.a)(Object(l.a)({},g),{},{cheking:!0})),O({method:"POST",url:"auth/renew"}).then((function(e){var t=e.data,n=t.user,c=t.token;localStorage.setItem("token",c),a({user:n,token:c,cheking:!1})})).catch((function(e){console.log(e.response),localStorage.removeItem("token"),a(Object(l.a)(Object(l.a)({},g),{},{cheking:!1}))}))}),[]);return Object(x.jsx)(m.Provider,{value:{auth:o,setAuth:a,checkToken:s},children:t})},f=n(6),v=n(11),y=n(147),w=function(){return Object(x.jsxs)(f.d,{w:[100,200,300,400],align:"center",boxShadow:"lg",my:2,p:2,children:[Object(x.jsx)(y.b,{size:"10",me:2}),Object(x.jsx)(y.c,{mt:"4",noOfLines:3,spacing:"4",flex:"1"})]})},S=function(){return Object(x.jsxs)(f.d,{h:"100vh",gap:"2",children:[Object(x.jsxs)(f.d,{direction:"column",bg:Object(v.c)("gray.50","gray.700"),p:2,justify:"space-between",h:"full",children:[Object(x.jsx)(y.a,{height:"40px",w:"50px",rounded:"lg"}),Object(x.jsx)(y.a,{height:"40px",w:"50px",rounded:"lg"}),Object(x.jsx)(y.a,{height:"40px",w:"50px",rounded:"lg"})]}),Object(x.jsxs)(f.a,{bg:Object(v.c)("gray.100","gray.800"),p:3,overflow:"hidden",children:[Object(x.jsx)(w,{}),Object(x.jsx)(w,{}),Object(x.jsx)(w,{}),Object(x.jsx)(w,{}),Object(x.jsx)(w,{}),Object(x.jsx)(w,{}),Object(x.jsx)(w,{}),Object(x.jsx)(w,{}),Object(x.jsx)(w,{}),Object(x.jsx)(w,{}),Object(x.jsx)(w,{})]}),Object(x.jsx)(f.a,{bg:Object(v.c)("gray.50","gray.900"),flex:1,children:Object(x.jsxs)(f.d,{align:"center",justify:"space-between",children:[Object(x.jsxs)(f.d,{boxShadow:"lg",align:"center",my:2,p:2,children:[Object(x.jsx)(y.b,{size:"10",me:2}),Object(x.jsx)(y.c,{mt:"4",noOfLines:2,spacing:"4",flex:"1"})]}),Object(x.jsxs)(f.g,{children:[Object(x.jsx)(y.a,{height:"40px",w:"50px",rounded:"lg"}),Object(x.jsx)(y.a,{height:"40px",w:"50px",rounded:"lg"})]})]})})]})},k=n(75),C=n(23),_=n(51),z=n(22),I=n(35),E=["errors","touched","isRequired","label","help"],q=["value"],R=function(e){var t=e.errors,n=e.touched,c=e.isRequired,r=void 0!==c&&c,o=e.label,a=e.help,s=Object(_.a)(e,E),i=s.value,j=Object(_.a)(s,q);return Object(x.jsxs)(z.a,{isInvalid:t&&n,isRequired:r,children:[Object(x.jsx)(z.d,{children:o}),Object(x.jsx)(I.a,Object(l.a)(Object(l.a)({},j),{},{value:i||""})),t&&n?Object(x.jsx)(z.b,{children:Object(x.jsx)(f.m,{children:t instanceof Array?t.map((function(e,t){return Object(x.jsx)(f.j,{children:e},t)})):Object(x.jsx)(f.j,{children:t})})}):Object(x.jsx)(z.c,{children:a})]})},A=n(116),N=n(74),P=["errors","touched","isRequired","label","help"],F=["value"],W=function(e){var t=e.errors,n=e.touched,r=e.isRequired,o=void 0!==r&&r,a=e.label,s=e.help,i=Object(_.a)(e,P),d=Object(c.useState)(!1),b=Object(j.a)(d,2),u=b[0],h=b[1],O=i.value,m=Object(_.a)(i,F);return Object(x.jsxs)(z.a,{isInvalid:t&&n,isRequired:o,children:[Object(x.jsx)(z.d,{children:a}),Object(x.jsxs)(I.b,{children:[Object(x.jsx)(I.a,Object(l.a)({type:u?"text":"password",value:O||""},m)),Object(x.jsx)(I.c,{children:Object(x.jsx)(N.a,{size:"sm",checked:u,onChange:function(e){return h(e.target.checked)}})})]}),t&&n?Object(x.jsx)(z.b,{children:Object(x.jsx)(f.m,{children:t instanceof Array?t.map((function(e,t){return Object(x.jsx)(f.j,{children:e},t)})):Object(x.jsx)(f.j,{children:t})})}):Object(x.jsx)(z.c,{children:s})]})},L=n(33),T=L.a().shape({username:L.c().required("El username es obligatorio"),password:L.c().required("El password es obligatorio")}),M=L.a().shape({username:L.c().required("El username es obligatorio"),password:L.c().required("El password es obligatorio").min(6,"La contrase\xf1a debe contener al menos 6 caracteres"),password2:L.c().required("El password es obligatorio").min(6,"La contrase\xf1a debe contener al menos 6 caracteres").oneOf([L.b("password"),null],"Las contrase\xf1as no coinciden"),firstName:L.c().required("El nombre es requerido"),lastName:L.c().required("El Apellido es requerido"),email:L.c().required("El email es requerido").email("No es un email v\xe1lido"),gender:L.c().required("El Genero es requerido")}),U=function(){var e=Object(c.useContext)(m).setAuth,t=Object(A.a)({initialValues:{remember:!0,username:localStorage.getItem("username")},onSubmit:function(n){var c,r;n.remember?localStorage.setItem("username",n.username):localStorage.removeItem("username"),c=n.username,r=n.password,O({method:"POST",url:"auth/login",data:{username:c,password:r}}).then((function(t){console.log(t);var n=t.data,c=n.user,r=n.token;localStorage.setItem("token",r),e({user:c,token:r,cheking:!1})})).catch((function(e){var n;(null===(n=e.response)||void 0===n?void 0:n.data)&&t.setErrors(e.response.data)}))},validationSchema:T});return Object(x.jsxs)(f.a,{as:"form",mt:10,onSubmit:t.handleSubmit,children:[Object(x.jsx)(f.h,{mb:"2",children:"Login"}),Object(x.jsxs)(f.k,{spacing:4,children:[Object(x.jsx)(R,Object(l.a)({errors:t.errors.username,touched:t.touched.username,isRequired:!0,label:"Username",help:"Ingrese su nombre de usuario",type:"text",variant:"filled",placeholder:"Usuario",_focus:{bg:Object(v.c)("ini","gray.600")},autoComplete:"none"},t.getFieldProps("username"))),Object(x.jsx)(W,Object(l.a)({errors:t.errors.password,touched:t.touched.password,isRequired:!0,label:"Password",help:"Ingrese la contrase\xf1a",variant:"filled",placeholder:"Contrase\xf1a",_focus:{bg:Object(v.c)("ini","gray.700")},autoComplete:"none"},t.getFieldProps("password"))),Object(x.jsxs)(z.a,{display:"flex",alignItems:"center",children:[Object(x.jsx)(z.d,{htmlFor:"email-alerts",mb:"0",children:"\xbfRecordarme cuenta?"}),Object(x.jsx)(N.a,Object(l.a)(Object(l.a)({},t.getFieldProps("remember")),{},{defaultChecked:!0}))]})]}),Object(x.jsx)(C.a,{type:"submit",fontFamily:"heading",mt:8,w:"full",bgGradient:"linear(to-r, red.400,pink.400)",color:"white",_hover:{bgGradient:"linear(to-r, red.400,pink.400)",boxShadow:"xl"},disabled:!t.isValid,children:"Iniciar sesi\xf3n"}),Object(x.jsx)(s.b,{to:"/auth/signup",children:Object(x.jsx)(C.a,{w:"full",variant:"link",shadow:"none",_focus:{outline:"none"},children:"Crear cuenta"})})]})},G=n(109),B=["errors","touched","isRequired","label","help","options"],D=function(e){var t=e.errors,n=e.touched,c=e.isRequired,r=void 0!==c&&c,o=e.label,a=e.help,s=e.options,i=void 0===s?[]:s,j=Object(_.a)(e,B);return Object(x.jsxs)(z.a,{isInvalid:t&&n,isRequired:r,children:[Object(x.jsx)(z.d,{children:o}),Object(x.jsx)(G.a,Object(l.a)(Object(l.a)({},j),{},{children:i.map((function(e){return Object(x.jsx)("option",{value:e.value,children:e.name},e.value)}))})),t&&n?Object(x.jsx)(z.b,{children:Object(x.jsx)(f.m,{children:t instanceof Array?t.map((function(e,t){return Object(x.jsx)(f.j,{children:e},t)})):Object(x.jsx)(f.j,{children:t})})}):Object(x.jsx)(z.c,{children:a})]})},V=function(){var e=Object(c.useContext)(m).setAuth,t=Object(A.a)({initialValues:{},onSubmit:function(n){O({method:"POST",url:"/auth/signup",data:n}).then((function(t){console.log(t);var n=t.data,c=n.user,r=n.token;localStorage.setItem("token",r),e({user:c,token:r})})).catch((function(e){t.setErrors(e.response.data)}))},validationSchema:M});return Object(x.jsxs)(f.k,{spacing:4,as:"form",onSubmit:t.handleSubmit,children:[Object(x.jsx)(f.h,{mb:"2",children:"Signup"}),Object(x.jsx)(R,Object(l.a)({errors:t.errors.username,touched:t.touched.username,isRequired:!0,label:"Username",help:"Ingrese un nombre de usuario",type:"text",variant:"filled",placeholder:"Usuario",_focus:{bg:Object(v.c)("ini","gray.700")},autoComplete:"none"},t.getFieldProps("username"))),Object(x.jsxs)(f.k,{direction:{base:"column",lg:"row"},children:[Object(x.jsx)(W,Object(l.a)({errors:t.errors.password,touched:t.touched.password,isRequired:!0,label:"Password",help:"Ingrese la contrase\xf1a",variant:"filled",placeholder:"Contrase\xf1a",_focus:{bg:Object(v.c)("ini","gray.700")},autoComplete:"none"},t.getFieldProps("password"))),Object(x.jsx)(W,Object(l.a)({errors:t.errors.password2,touched:t.touched.password2,isRequired:!0,label:"Confirmar contrase\xf1a",help:"Confirmar Contrase\xf1a",variant:"filled",placeholder:"Contrase\xf1a",_focus:{bg:Object(v.c)("ini","gray.700")},autoComplete:"none"},t.getFieldProps("password2")))]}),Object(x.jsxs)(f.k,{direction:{base:"column",lg:"row"},children:[Object(x.jsx)(R,Object(l.a)({errors:t.errors.firstName,touched:t.touched.firstName,isRequired:!0,label:"Nombre ",help:"Ingrese su nombre ",type:"text",variant:"filled",placeholder:"Nombre ",_focus:{bg:Object(v.c)("ini","gray.700")},autoComplete:"none"},t.getFieldProps("firstName"))),Object(x.jsx)(R,Object(l.a)({errors:t.errors.lastName,touched:t.touched.lastName,isRequired:!0,label:"Apellidos ",help:"Ingrese su apellido ",type:"text",variant:"filled",placeholder:"apellidos ",_focus:{bg:Object(v.c)("ini","gray.700")},autoComplete:"none"},t.getFieldProps("lastName")))]}),Object(x.jsxs)(f.k,{direction:{base:"column",lg:"row"},children:[Object(x.jsx)(R,Object(l.a)({errors:t.errors.email,touched:t.touched.email,isRequired:!0,label:"Email",help:"Ingrese su correo",type:"email",variant:"filled",placeholder:"Email",_focus:{bg:Object(v.c)("ini","gray.700")},autoComplete:"none"},t.getFieldProps("email"))),Object(x.jsx)(D,Object(l.a)(Object(l.a)({errors:t.errors.gender,touched:t.touched.gender,isRequired:!0,label:"G\xe9nero",help:"Ingrese su g\xe9nero",placeholder:"Seleccione el g\xe9nero...",variant:"filled",bg:Object(v.c)("gray.50","gray.700"),_focus:{bg:Object(v.c)("ini","gray.700")},autoComplete:"none"},t.getFieldProps("gender")),{},{options:[{value:"Masculino",name:"Masculino"},{value:"Femenino",name:"Femenino"},{value:"Otro",name:"Otro"}]}))]}),Object(x.jsx)(C.a,{fontFamily:"heading",type:"submit",mt:8,w:"full",bgGradient:"linear(to-r, red.400,pink.400)",color:"white",_hover:{bgGradient:"linear(to-r, red.400,pink.400)",boxShadow:"xl"},disabled:!t.isValid||0===Object.keys(t.touched).length,children:"Crear cuenta"}),Object(x.jsx)(s.b,{to:"/auth/login",children:Object(x.jsx)(C.a,{w:"full",variant:"link",shadow:"none",_focus:{outline:"none"},children:"Login"})})]})},H=function(){var e=Object(i.f)().pathname;return Object(x.jsxs)(f.b,{as:f.d,maxW:"7xl",minH:"100vh",align:"center",justifyContent:"center",flexDir:{base:"column-reverse",md:"row"},children:[Object(x.jsx)(f.k,{flex:"3",children:Object(x.jsx)(k.a,{src:"https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.svg",alt:"Segun Adebayo"})}),Object(x.jsx)(f.k,{flex:"2",m:5,children:Object(x.jsx)(f.a,{bg:Object(v.c)("gray.50","gray.800"),p:"10",rounded:"2xl",boxShadow:"lg",children:"/auth/login"===e?Object(x.jsx)(U,{}):Object(x.jsx)(V,{})})})]})},J=function(){return Object(x.jsxs)(i.d,{children:[Object(x.jsx)(i.b,{path:"/login",element:Object(x.jsx)(H,{})}),Object(x.jsx)(i.b,{path:"/signup",element:Object(x.jsx)(H,{})})]})},X=n(34),K=n(21),Q=n(76),Y=["size","src","online"],Z=function(e){var t=e.size,n=void 0===t?"md":t,c=e.src,r=e.online,o=void 0===r||r,a=Object(_.a)(e,Y);return Object(x.jsx)(Q.a,Object(l.a)(Object(l.a)({},a),{},{size:n,src:c,alt:"avatar",mx:2,pos:"relative",border:"2px solid white",_after:{content:'""',w:4,h:4,bg:o?"green.300":"red.300",border:"2px solid white",rounded:"full",pos:"absolute",bottom:0,right:3}}))},$=n(27),ee=n(62);n(72).b.add(ee.b,ee.c,ee.d,ee.f,ee.e,ee.g,ee.a,ee.h);var te=n(93),ne=n.n(te);n(343);ne.a.locale("es");var ce=function(e){return ne()(e).format("LLLL")},re=function(e){return ne()(e).startOf("min").fromNow(!0)},oe=n(181),ae=n.n(oe),se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";e=(e=e.trim()).toLowerCase();var t=ae()(e),n="https://www.gravatar.com/avatar/".concat(t,"?d=identicon&f=y&s=128");return n},ie=function(e){var t,n,c=e.me,r=void 0!==c&&c,o=e.message,a=Object(v.c)(r?"gray.100":"cyan.100",r?"gray.800":"blue.900");return Object(x.jsxs)(f.d,{maxW:{base:"85%",lg:"80%"},w:"fit-content",align:"end",ms:r?"auto":"0",my:"2",children:[!r&&Object(x.jsx)(Z,{size:"sm",src:null!==(t=o.from.picture)&&void 0!==t?t:se(o.from.email)}),Object(x.jsxs)(f.k,{bg:a,boxShadow:"lg",p:8,rounded:"xl",pos:"relative",_after:{content:'""',w:0,h:0,border:"10px solid transparent",borderLeftColor:r?"transparent":a,borderTopColor:r?"transparent":a,borderRightColor:r?a:"transparent",borderBlockColor:r?a:"transparent",pos:"absolute",bottom:"-10px",left:r?"initial":"0",right:r?"0":"initial"},children:[Object(x.jsx)(f.l,{color:Object(v.c)("gray.600","gray.400"),fontSize:"md",children:o.content}),Object(x.jsxs)(f.l,{fontSize:"small",textAlign:r?"left":"right",children:[Object(x.jsx)($.a,{icon:["fa","clock"]})," ",ce(o.createdAt)]})]}),r&&Object(x.jsx)(Z,{size:"sm",src:null!==(n=o.from.picture)&&void 0!==n?n:se(o.from.email)})]})},le=function(){var e=Object(K.c)((function(e){return e.chat.messages})),t=Object(c.useContext)(m).auth;return Object(x.jsx)(f.a,{h:"full",p:"2",className:"scroll",id:"chatContainer",children:e.map((function(e){return Object(x.jsx)(ie,{me:t.user._id===e.from._id,message:e},e._id)}))})},je=n(189),de="chat/list/users",be="chat/activate",ue="chat/send/message",he="chat/load",Oe="/auth/logout",xe="chat/list/",me="chat/Typing",ge="chat/not/Typing",pe=function(e){return{type:be,payload:e}},fe=function(e){return{type:he,payload:e}},ve=n(185),ye=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;ve.animateScroll.scrollToBottom({containerId:e,duration:t})},we=function(e){var t=Object(c.useState)(null),n=Object(j.a)(t,2),r=n[0],o=n[1],a=Object(c.useState)(!1),s=Object(j.a)(a,2),i=s[0],l=s[1],d=Object(K.b)(),b=Object(c.useCallback)((function(t){var n=je.a.connect(e,{transports:["websocket"],forceNew:!0,query:{token:t}});o(n)}),[e]),u=Object(c.useCallback)((function(){null===r||void 0===r||r.disconnect()}),[r]);return Object(c.useEffect)((function(){l(null===r||void 0===r?void 0:r.connected)}),[r]),Object(c.useEffect)((function(){null===r||void 0===r||r.on("connect",(function(){return l(!0)}))}),[r]),Object(c.useEffect)((function(){null===r||void 0===r||r.on("disconnect",(function(){return l(!1)}))}),[r]),Object(c.useEffect)((function(){null===r||void 0===r||r.on("list-users",(function(e){d(function(e){return{type:de,payload:e}}(e))}))}),[r,d]),Object(c.useEffect)((function(){null===r||void 0===r||r.on("list-messages",(function(e){d({type:xe,payload:e})}))}),[r,d]),Object(c.useEffect)((function(){null===r||void 0===r||r.on("receive-message",(function(e){d(function(e){return{type:ue,payload:e}}(e)),ye("chatContainer",0)}))}),[r,d]),Object(c.useEffect)((function(){null===r||void 0===r||r.on("typing",(function(e){d(function(e){return{type:me,payload:e}}(e))}))}),[r,d]),Object(c.useEffect)((function(){null===r||void 0===r||r.on("not-typing",(function(e){d(function(e){return{type:ge,payload:e}}(e))}))}),[r,d]),{socket:r,online:i,connectSocket:b,disconnectSocket:u}},Se=Object(c.createContext)(),ke=function(e){var t=e.children,n=we(""),r=n.socket,o=n.online,a=n.connectSocket,s=n.disconnectSocket,i=Object(c.useContext)(m).auth;return Object(c.useEffect)((function(){i.token&&a(i.token)}),[i.token,a]),Object(c.useEffect)((function(){i.token||s()}),[i.token,s]),Object(x.jsx)(Se.Provider,{value:{socket:r,online:o},children:t})},Ce=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],r=t[1],o=Object(c.useContext)(Se).socket,a=Object(c.useContext)(m).auth,s=Object(K.c)((function(e){return e.chat.userSelected}));return Object(x.jsxs)(f.d,{h:16,alignItems:"center",justifyContent:"space-between",p:4,as:"form",onSubmit:function(e){e.preventDefault(),0!==n.trim().length&&(o.emit("send-message",{from:a.user._id,to:s._id,content:n}),r(""))},children:[Object(x.jsx)(I.a,{type:"text",value:n,placeholder:"Enviar mensaje",variant:"filled",onChange:function(e){r(e.target.value)},onFocus:function(){console.log("typing"),o.emit("typing",{from:a.user._id,to:s._id})},onBlur:function(){console.log("no typing"),o.emit("not-typing",{from:a.user._id,to:s._id})}}),Object(x.jsx)(f.k,{direction:"row",spacing:7,mx:"3",children:Object(x.jsx)(C.a,{type:"submit",children:Object(x.jsx)($.a,{icon:["fa","paper-plane"]})})})]})},_e=function(){var e,t=Object(K.c)((function(e){return e.chat.userSelected}));return Object(x.jsxs)(f.a,{rounded:"lg",children:[Object(x.jsxs)(f.d,{alignItems:"center",justifyContent:"space-between",py:3,mx:"1",children:[Object(x.jsxs)(f.g,{children:[Object(x.jsx)(Z,{src:null!==(e=t.picture)&&void 0!==e?e:se(t.email),online:t.online}),Object(x.jsxs)(f.e,{children:[Object(x.jsxs)(f.h,{fontSize:{base:"md",lg:"xl"},fontFamily:"body",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",children:[t.firstName," ",t.lastName]}),Object(x.jsxs)(f.d,{direction:{base:"column",lg:"row"},children:[Object(x.jsx)(f.l,{me:"3",fontWeight:600,color:"gray.500",children:t.email}),Object(x.jsxs)(f.l,{fontSize:"small",my:"auto",children:[Object(x.jsx)($.a,{icon:["fa","clock"]}),"  ",ce(t.lastLogin)]})]})]})]}),Object(x.jsx)(f.d,{alignItems:"center",children:Object(x.jsx)(f.k,{direction:"row",spacing:7,children:Object(x.jsx)(C.a,{})})})]}),Object(x.jsx)(f.c,{})]})},ze=function(){return Object(x.jsxs)(f.d,{direction:"column",h:"full",children:[Object(x.jsx)(_e,{}),Object(x.jsx)(le,{flex:"1"}),Object(x.jsx)(Ce,{})]})},Ie=function(e){var t,n=e.chat,c=e.setShowChat,r=Object(K.b)(),o=Object(K.c)((function(e){return e.chat.userSelected})),a=Object(v.c)("gray.200","gray.700"),s=Object(X.b)("(min-width: 48em)"),i=Object(j.a)(s,1)[0];return Object(x.jsxs)(f.d,{justify:"space-between",py:4,px:2,_hover:{backgroundColor:a},cursor:"pointer",rounded:"md",onClick:function(){i||c(!1),(null===o||void 0===o?void 0:o._id)!==n._id&&(r(pe(n)),O({url:"message/".concat(n._id),headers:{Authorization:localStorage.getItem("token")}}).then((function(e){r(fe(e.data)),ye("chatContainer",0)})).catch((function(e){console.log(e.response)})))},bg:n._id===(null===o||void 0===o?void 0:o._id)?a:"initial",children:[Object(x.jsxs)(f.g,{children:[Object(x.jsx)(Z,{online:n.online,src:null!==(t=n.picture)&&void 0!==t?t:se(n.email)}),Object(x.jsxs)(f.e,{children:[Object(x.jsx)(f.h,{size:"sm",children:n.username}),Object(x.jsxs)(f.l,{color:"gray.500",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",children:[n.sendMe?null:"T\xfa:",n.content]})]})]}),Object(x.jsxs)(f.a,{whiteSpace:"nowrap",children:[n.online?Object(x.jsx)(f.l,{color:"green",fontSize:"sm",children:"En linea"}):Object(x.jsx)(f.l,{fontSize:"sm",children:re(n.lastLogin)}),Object(x.jsx)(f.l,{color:"green",fontSize:"sm",children:n.typing?"Escribiendo...":""})]})]})},Ee=function(e){var t,n=e.user,c=e.setShowChat,r=Object(K.c)((function(e){return e.chat.userSelected})),o=Object(X.b)("(min-width: 48em)"),a=Object(j.a)(o,1)[0],s=Object(K.b)();return Object(x.jsxs)(f.a,{cursor:"pointer",onClick:function(){a||c(!1),(null===r||void 0===r?void 0:r._id)!==n._id&&(s(pe(n)),O({url:"message/".concat(n._id),headers:{Authorization:localStorage.getItem("token")}}).then((function(e){s(fe(e.data)),ye("chatContainer",0)})).catch((function(e){console.log(e.response)})))},children:[Object(x.jsx)(Z,{online:n.online,src:null!==(t=n.picture)&&void 0!==t?t:se(n.email)}),Object(x.jsx)(f.l,{color:"gray.500",textAlign:"center",children:n.username})]})},qe=n(135),Re=n.n(qe),Ae=n(186),Ne=function(e){var t,n=e.user,c=e.setShowChat,r=e.setUsers,o=Object(v.c)("gray.200","gray.700"),a=Object(X.b)("(min-width: 48em)"),s=Object(j.a)(a,1)[0],i=Object(K.b)(),l=Object(K.c)((function(e){return e.chat.userSelected}));return Object(x.jsxs)(f.d,{justify:"space-between",py:4,px:2,_hover:{backgroundColor:o},cursor:"pointer",rounded:"md",onClick:function(){s||c(!1),(null===l||void 0===l?void 0:l._id)!==n._id&&(i(pe(n)),O({url:"message/".concat(n._id),headers:{Authorization:localStorage.getItem("token")}}).then((function(e){i(fe(e.data)),ye("chatContainer",0),r([])})).catch((function(e){console.log(e.response)})))},children:[Object(x.jsxs)(f.g,{children:[Object(x.jsx)(Z,{online:n.online,src:null!==(t=n.avatar)&&void 0!==t?t:se(n.email)}),Object(x.jsxs)(f.e,{children:[Object(x.jsx)(f.h,{size:"sm",children:n.firstName+" "+n.lastName}),Object(x.jsx)(f.l,{color:"gray.500",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",children:n.email})]})]}),Object(x.jsx)(f.a,{whiteSpace:"nowrap",children:n.online?Object(x.jsx)(f.l,{color:"green",children:"En linea"}):Object(x.jsx)(f.l,{children:re(n.lastLogin)})})]})},Pe=function(e){var t=e.setShowChat,n=Object(c.useState)([]),r=Object(j.a)(n,2),o=r[0],a=r[1],s=function(){var e=Object(Ae.a)(Re.a.mark((function e(t){var n,c;return Re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=t.target.value.trim())){e.next=14;break}return e.prev=2,e.next=5,O({method:"POST",url:"auth/list?keyword=".concat(n),headers:{Authorization:localStorage.getItem("token")}});case 5:c=e.sent,a(c.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0.response);case 12:e.next=15;break;case 14:a([]);case 15:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)(f.a,{position:"relative",children:[Object(x.jsx)(I.a,{type:"search",placeholder:"Buscar...",variant:"filled",onChange:s}),Object(x.jsx)(f.a,{position:"absolute",zIndex:"100",bg:Object(v.c)("gray.100","blue.900"),w:"full",rounded:"lg",boxShadow:"2xl",children:o.map((function(e){return Object(x.jsx)(Ne,{user:e,setShowChat:t,setUsers:a},e._id)}))})]})},Fe=function(e){var t=e.setShowChat,n=Object(c.useContext)(m).auth,r=Object(K.c)((function(e){return e.chat.users})),o=Object(K.c)((function(e){return e.chat.chats})),a=Object(v.c)("gray.50","gray.800"),s=Object(X.a)({base:"initial",lg:"420px"});return Object(x.jsxs)(f.d,{direction:"column",h:"full",position:{base:"absolute",md:"initial"},zIndex:"600",maxW:s,p:3,bg:a,children:[Object(x.jsxs)(f.a,{children:[Object(x.jsx)(f.h,{my:2,size:"lg",children:"Chats"}),Object(x.jsx)(Pe,{setShowChat:t}),Object(x.jsx)(f.c,{my:"1"})]}),Object(x.jsx)(f.e,{templateColumns:"repeat(5,1fr)",children:r.filter((function(e){return n.user._id!==e._id})).map((function(e){return Object(x.jsx)(Ee,{user:e,setShowChat:t},e._id)}))}),Object(x.jsx)(f.h,{size:"md",mb:4,children:"Recientes"}),Object(x.jsx)(f.a,{flex:"1",className:"scroll",children:o.map((function(e){return Object(x.jsx)(Ie,{chat:e,setShowChat:t},e._id)}))})]})},We=function(){return Object(x.jsxs)(f.d,{align:"center",justify:"center",h:"full",direction:"column",children:[Object(x.jsxs)(f.h,{textAlign:"center",fontWeight:"extrabold",fontSize:{base:"2xl",sm:"3xl",md:"4xl",lg:"6xl"},lineHeight:"110%",color:"green.400",bgClip:"text",bgGradient:"linear(to-l, #5028ca, #00ff95bf)",children:["No a seleccionado ning\xfan chat ",Object(x.jsx)("br",{})]}),Object(x.jsx)(f.l,{as:"span",color:"gray.600",fontSize:"xl",textAlign:"center",children:"usa la lupa para buscar personas"})]})},Le=function(e){var t=e.showChat,n=e.setShowChat,r=Object(K.c)((function(e){return e.chat.userSelected})),o=Object(X.b)("(min-width: 48em)"),a=Object(j.a)(o,1)[0],s=Object(v.c)("white","gray.900");return Object(c.useEffect)((function(){n(a)}),[a,n]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(f.a,{position:"relative",h:"full",children:t&&Object(x.jsx)(Fe,{setShowChat:n})}),Object(x.jsx)(f.a,{bg:s,flex:1,children:r?Object(x.jsx)(ze,{}):Object(x.jsx)(We,{})})]})},Te=n(53),Me=n(90),Ue=function(e){var t,n,r=e.setShowChat,o=Object(c.useContext)(m),a=o.auth,i=o.setAuth,l=Object(v.b)(),j=l.colorMode,d=l.toggleColorMode,b=Object(K.b)();return Object(x.jsxs)(f.d,{direction:"column",align:"center",justify:"space-around",h:"full",children:[Object(x.jsxs)(f.n,{children:[Object(x.jsx)(Me.a,{label:"Mensajes",placement:"auto-start",children:Object(x.jsx)(s.b,{onClick:function(){r((function(e){return!e}))},to:"/",children:Object(x.jsx)(C.a,{children:Object(x.jsx)($.a,{icon:["fa","comment-dots"]})})})}),Object(x.jsx)(Me.a,{label:"Perfil",placement:"auto-start",children:Object(x.jsx)(s.b,{to:"profile/",children:Object(x.jsx)(C.a,{children:Object(x.jsx)($.a,{icon:["fa","user"]})})})})]}),Object(x.jsxs)(f.n,{children:[Object(x.jsx)(C.a,{children:Object(x.jsx)($.a,{icon:["fa","code"]})}),Object(x.jsx)(C.a,{children:Object(x.jsx)($.a,{icon:["fa","code"]})})]}),Object(x.jsxs)(f.n,{children:[Object(x.jsx)(C.a,{onClick:d,children:"light"===j?Object(x.jsx)($.a,{icon:["fa","moon"]}):Object(x.jsx)($.a,{icon:["fa","lightbulb"]})}),Object(x.jsxs)(Te.a,{children:[Object(x.jsx)(Te.b,{children:Object(x.jsx)(Z,{size:"sm",src:null!==(t=a.user.picture)&&void 0!==t?t:se(a.user.email)})}),Object(x.jsxs)(Te.e,{zIndex:"1000",border:"0",children:[Object(x.jsxs)(f.a,{p:"3",children:[Object(x.jsx)(f.a,{textAlign:"center",children:Object(x.jsx)(Z,{size:"2xl",src:null!==(n=a.user.picture)&&void 0!==n?n:se(a.user.email)})}),Object(x.jsxs)(f.k,{spacing:0,align:"center",mb:5,children:[Object(x.jsx)(f.h,{fontSize:"2xl",fontWeight:500,fontFamily:"body",children:a.user.username}),Object(x.jsx)(f.l,{color:"gray.500",children:a.user.email})]})]}),Object(x.jsx)(s.b,{to:"profile/",children:Object(x.jsx)(Te.d,{command:"\u2318T",children:"\ud83e\udd35 perfil "})}),Object(x.jsx)(Te.d,{command:"\u2318T",children:"\u2699\ufe0f Configuracion"}),Object(x.jsx)(Te.c,{}),Object(x.jsx)(Te.d,{command:"\u2318T",onClick:function(){b({type:Oe}),localStorage.removeItem("token"),i({user:null,token:null,cheking:!1})},children:"\ud83d\udd34 Salir"})]})]})]})]})},Ge=function(){var e,t=Object(c.useState)(1),n=Object(j.a)(t,2),r=n[0],o=n[1],a=Object(v.c)("hsla(0,0%,100%,.8)","linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"),s=Object(c.useContext)(m).auth.user;return Object(x.jsxs)(f.d,{direction:"column",flex:"1",p:"3",children:[Object(x.jsxs)(f.a,{mb:"5",children:[Object(x.jsx)(f.a,{bgImage:"https://fondosmil.com/fondo/31355.jpg",w:"100%",h:{base:"200px",lg:"300px"},borderRadius:"2xl",bgPosition:"50%",bgRepeat:"no-repeat",backgroundSize:"cover"}),Object(x.jsxs)(f.d,{direction:{base:"column",md:"row"},w:"90%",justifyContent:{sm:"center",md:"space-between"},align:"center",backdropFilter:"saturate(200%) blur(60px)",boxShadow:"0px 2px 5.5px rgba(0, 0, 0, 0.02)",border:"2px solid",borderColor:"blue.900",bg:a,p:"15px",rounded:"2xl",mt:"-60px",mx:"auto",children:[Object(x.jsxs)(f.d,{align:"center",mb:{sm:"10px",md:"0px"},direction:{base:"column",md:"row"},w:{sm:"100%"},textAlign:{sm:"center",md:"start"},children:[Object(x.jsx)(Q.a,{me:{md:"22px"},src:null!==(e=s.picture)&&void 0!==e?e:se(s.email),w:"80px",h:"80px",borderRadius:"15px"}),Object(x.jsxs)(f.d,{direction:"column",maxWidth:"100%",my:{sm:"14px"},children:[Object(x.jsx)(f.l,{fontSize:{sm:"lg",lg:"xl"},color:"gray.200",fontWeight:"bold",ms:{sm:"8px",md:"0px"},children:s.firstName+" "+s.lastName}),Object(x.jsx)(f.l,{fontSize:{sm:"sm",md:"md"},color:"gray.400",fontWeight:"semibold",children:s.email})]})]}),Object(x.jsxs)(f.d,{direction:{base:"column",lg:"row"},w:{sm:"100%",md:"50%",lg:"auto"},children:[Object(x.jsxs)(C.a,{bg:1===r?"hsla(0,0%,100%,.3)":"transparent",borderRadius:"15px",_focus:{shadow:"none"},onClick:function(){o(1)},_hover:{},children:[Object(x.jsx)($.a,{icon:["fa","code"]}),Object(x.jsx)(f.l,{fontSize:"xs",fontWeight:"bold",children:"Actualizar Datos"})]}),Object(x.jsxs)(C.a,{bg:2===r?"hsla(0,0%,100%,.3)":"transparent",borderRadius:"15px",_focus:{shadow:"none"},onClick:function(){o(2)},_hover:{},children:[Object(x.jsx)($.a,{icon:["fa","code"]}),Object(x.jsx)(f.l,{fontSize:"xs",fontWeight:"bold",children:"Actualizar Contrase\xf1a"})]}),Object(x.jsxs)(C.a,{bg:3===r?"hsla(0,0%,100%,.3)":"transparent",borderRadius:"15px",_focus:{shadow:"none"},onClick:function(){o(3)},_hover:{},children:[Object(x.jsx)($.a,{icon:["fa","code"]}),Object(x.jsx)(f.l,{fontSize:"xs",fontWeight:"bold",children:"Otros"})]})]})]})]}),Object(x.jsxs)(f.e,{templateColumns:"repeat(12,1fr)",gap:"2",children:[Object(x.jsx)(f.f,{colSpan:[12,12,6,4],children:Object(x.jsxs)(f.a,{boxShadow:"xl",p:{base:"2",lg:"6"},rounded:"2xl",bg:Object(v.c)("white","gray.800"),children:[Object(x.jsx)(f.a,{p:"12px 5px",mb:"12px",children:Object(x.jsx)(f.l,{fontSize:"lg",fontWeight:"bold",children:"Mis datos"})}),Object(x.jsx)(f.a,{px:"5px",children:Object(x.jsxs)(f.i,{spacing:3,children:[Object(x.jsxs)(f.j,{children:[Object(x.jsx)(f.l,{color:"gray.500",fontWeight:"bold",d:"inline",children:"Username:"})," \xa0 ",Object(x.jsx)(f.l,{color:"gray.500",d:"inline",children:s.username})]}),Object(x.jsxs)(f.j,{children:[Object(x.jsx)(f.l,{color:"gray.500",fontWeight:"bold",d:"inline",children:"Nombres"})," \xa0 ",Object(x.jsx)(f.l,{color:"gray.500",d:"inline",children:s.firstName})]}),Object(x.jsxs)(f.j,{children:[Object(x.jsx)(f.l,{color:"gray.500",fontWeight:"bold",d:"inline",children:"Apellidos"})," \xa0 ",Object(x.jsx)(f.l,{color:"gray.500",d:"inline",children:s.lastName})]}),Object(x.jsxs)(f.j,{children:[Object(x.jsx)(f.l,{color:"gray.500",fontWeight:"bold",d:"inline",children:"Email"})," \xa0 ",Object(x.jsx)(f.l,{color:"gray.500",d:"inline",children:s.email})]}),Object(x.jsxs)(f.j,{children:[Object(x.jsx)(f.l,{color:"gray.500",fontWeight:"bold",d:"inline",children:"G\xe9nero"})," \xa0 ",Object(x.jsx)(f.l,{color:"gray.500",d:"inline",children:s.gender})]}),Object(x.jsxs)(f.j,{children:[Object(x.jsx)(f.l,{color:"gray.500",fontWeight:"bold",d:"inline",children:"\xdaltima sesi\xf3n:"})," \xa0 ",Object(x.jsxs)(f.l,{color:"gray.500",d:"inline",children:[" ",ce(s.lastLogin)]})]})]})})]})}),Object(x.jsx)(f.f,{colSpan:[12,12,6,8],children:Object(x.jsx)(f.a,{boxShadow:"xl",children:"menus"})})]})]})},Be=function(){var e=Object(v.c)("gray.100","gray.700"),t=Object(c.useState)(!0),n=Object(j.a)(t,2),r=n[0],o=n[1];return Object(x.jsxs)(f.d,{h:"100vh",gap:"2",children:[Object(x.jsx)(f.a,{bg:e,p:1,children:Object(x.jsx)(Ue,{setShowChat:o})}),Object(x.jsxs)(i.d,{children:[Object(x.jsx)(i.b,{index:!0,element:Object(x.jsx)(Le,{showChat:r,setShowChat:o})}),Object(x.jsx)(i.b,{path:"/profile",element:Object(x.jsx)(Ge,{})})]})]})},De=function(e){var t=e.children;return e.token?t:Object(x.jsx)(i.a,{to:"/auth/login"})},Ve=function(e){var t=e.children;return e.token?Object(x.jsx)(i.a,{to:"/"}):t},He=function(){var e=Object(c.useContext)(m),t=e.auth,n=e.checkToken;return Object(c.useEffect)((function(){n()}),[n]),t.cheking?Object(x.jsx)(S,{}):Object(x.jsx)(s.a,{hashType:"noslash",children:Object(x.jsxs)(i.d,{children:[Object(x.jsx)(i.b,{path:"/*",element:Object(x.jsx)(De,{token:t.token,children:Object(x.jsx)(Be,{})})}),Object(x.jsx)(i.b,{path:"auth/*",element:Object(x.jsx)(Ve,{token:t.token,children:Object(x.jsx)(J,{})})})]})})},Je=n(5),Xe=n(91),Ke=n(84),Qe=n(188),Ye=n(28),Ze={userSelected:null,users:[],chats:[],messages:[]},$e=Object(Ke.b)({chat:function(){var e,t,n,c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case de:return Object(l.a)(Object(l.a)({},c),{},{users:r.payload});case be:return(null===(e=c.userSelected)||void 0===e?void 0:e._id)===r.payload._id?c:Object(l.a)(Object(l.a)({},c),{},{userSelected:r.payload,messages:[]});case ue:return(null===(t=c.userSelected)||void 0===t?void 0:t._id)===r.payload.from._id||(null===(n=c.userSelected)||void 0===n?void 0:n._id)===r.payload.to._id?Object(l.a)(Object(l.a)({},c),{},{messages:[].concat(Object(Ye.a)(c.messages),[r.payload])}):c;case he:return Object(l.a)(Object(l.a)({},c),{},{messages:r.payload});case Oe:return Ze;case xe:return Object(l.a)(Object(l.a)({},c),{},{chats:r.payload});case me:return Object(l.a)(Object(l.a)({},c),{},{chats:c.chats.map((function(e){return e._id===r.payload?Object(l.a)(Object(l.a)({},e),{},{typing:!0}):e}))});case ge:return Object(l.a)(Object(l.a)({},c),{},{chats:c.chats.map((function(e){return e._id===r.payload?Object(l.a)(Object(l.a)({},e),{},{typing:!1}):e}))});default:return c}}}),et="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ke.c,tt=Object(Ke.d)($e,et(Object(Ke.a)(Qe.a))),nt={global:function(e){return{body:{fontFamily:"body",color:Object(Je.h)("gray.900","gray.300")(e),bg:Object(Je.h)("white.50","gray.900")(e),lineHeight:"base"},"*::placeholder":{color:Object(Je.h)("gray.400","whiteAlpha.500")(e)},"*, *::before, &::after":{borderColor:Object(Je.h)("gray.200","whiteAlpha.300")(e),wordWrap:"break-word"}}}},ct=Object(Xe.b)({styles:nt});var rt=function(){return Object(x.jsx)(Xe.a,{theme:ct,children:Object(x.jsx)(p,{children:Object(x.jsx)(K.a,{store:tt,children:Object(x.jsx)(ke,{children:Object(x.jsx)(He,{})})})})})};a.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(rt,{})}),document.getElementById("root"))}},[[358,1,2]]]);
//# sourceMappingURL=main.8f8a7428.chunk.js.map