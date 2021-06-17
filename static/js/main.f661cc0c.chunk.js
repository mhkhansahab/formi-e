(this["webpackJsonpform-app"]=this["webpackJsonpform-app"]||[]).push([[0],{122:function(e,a,r){},123:function(e,a,r){},228:function(e,a,r){"use strict";r.r(a);var n=r(0),t=r.n(n),o=r(8),s=r.n(o),l=(r(122),r(123),r(266)),i=r(263),c=r(265),d=r(4),u=r(69),m=r(268),h=r(6);var p=function(e){var a=e.type,r=e.label,n=e.value,t=e.onChange,o=e.name,s=e.error,l=e.helperText;return Object(h.jsx)(m.a,{name:o,type:a,label:r,value:n,onChange:t,error:s,helperText:l})},b=r(264),g={buttonStyle:{width:"fit-content",background:"#2c3e50",color:"white",margin:"0 auto",padding:"10px 40px",borderRadius:"44px","&:hover":{background:"#7f8c8d"}}};var x=Object(d.a)(g)((function(e){var a=e.classes,r=e.text,n=e.type;return Object(h.jsx)(b.a,{className:a.buttonStyle,type:n||"submit",children:r||"Save"})})),j={formContainer:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"space-evenly",margin:"0px 30px"}},v=r(270),f=r(271),O=r(262),y=r(267);var C=function(e){var a=e.onChange,r=e.name,n=e.value,t=e.error,o=e.helperText;return Object(h.jsxs)(O.a,{children:[Object(h.jsx)(v.a,{id:"demo-simple-select-label",children:"Gender"}),Object(h.jsxs)(y.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:n,onChange:a,name:r,error:t,helperText:o,children:[Object(h.jsx)(f.a,{value:"male",children:"Male"}),Object(h.jsx)(f.a,{value:"female",children:"Female"})]})]})},w=r(107),S=r(32),T=S.b({name:S.c("Enter your name").min(4,"Name should be of minimum 4 charachters").max(20,"Name shuld not be exceeded to 20 characters").required("Name is required"),email:S.c("Enter your email").email("Enter a valid email").required("Email is required"),password:S.c("Enter your password").min(8,"Password should be of minimum 8 characters").required("Password is required"),age:S.a("Enter you age").positive().min(18,"Candidate's age should be above 18").max(60,"Candidate's age should not be above 60").required("Age is required"),gender:S.c("Select your gender").required("Gender is required")});var N=Object(d.a)(j)((function(e){var a,r=e.classes,n=Object(w.a)((a={initialValues:{name:"",email:"",password:"",age:"",gender:""},validationSchema:T},Object(u.a)(a,"validationSchema",T),Object(u.a)(a,"onSubmit",(function(e,a){var r=a.resetForm;alert(JSON.stringify(e,null,2)),r()})),a));return Object(h.jsxs)("form",{className:r.formContainer,onSubmit:n.handleSubmit,children:[Object(h.jsx)(p,{type:"text",name:"name",label:"Name",value:n.values.name,onChange:n.handleChange,error:n.touched.name&&Boolean(n.errors.name),helperText:n.touched.name&&n.errors.name}),Object(h.jsx)(p,{type:"email",name:"email",label:"Email",value:n.values.email,onChange:n.handleChange,error:n.touched.email&&Boolean(n.errors.email),helperText:n.touched.email&&n.errors.email}),Object(h.jsx)(p,{type:"password",name:"password",label:"Password",value:n.values.password,onChange:n.handleChange,error:n.touched.password&&Boolean(n.errors.password),helperText:n.touched.password&&n.errors.password}),Object(h.jsx)(p,{type:"number",name:"age",label:"Age",value:n.values.age,onChange:n.handleChange,error:n.touched.age&&Boolean(n.errors.age),helperText:n.touched.age&&n.errors.age}),Object(h.jsx)(C,{value:n.values.gender,name:"gender",onChange:n.handleChange,error:n.touched.gender&&Boolean(n.errors.gender),helperText:n.touched.gender&&n.errors.gender}),Object(h.jsx)(x,{text:"Save",type:"submit"})]})})),q=Object(c.a)((function(e){return{root:{display:"flex",flexWrap:"wrap","& > *":{margin:e.spacing(1),width:e.spacing(16),height:e.spacing(16)}}}}));var E=Object(d.a)({paperContainer:{padding:"20px 10px",height:"50vh",borderRadius:"44px",background:"#ecf0f1",boxShadow:"11px 11px 37px #b1b4b5,-11px -11px 37px #ffffff"},heading:{color:"#2c3e50",marginTop:"70px"}})((function(e){var a=e.classes,r=q();return Object(h.jsx)("div",{className:r.root,children:Object(h.jsx)(l.a,{container:!0,spacing:3,xs:12,justify:"center",children:Object(h.jsxs)(l.a,{item:!0,xs:12,sm:8,md:6,lg:5,children:[Object(h.jsx)("h1",{className:a.heading,children:"Formi-E"}),Object(h.jsx)(i.a,{className:a.paperContainer,children:Object(h.jsx)(N,{})})]})})})}));var B=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(E,{})})},F=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,272)).then((function(a){var r=a.getCLS,n=a.getFID,t=a.getFCP,o=a.getLCP,s=a.getTTFB;r(e),n(e),t(e),o(e),s(e)}))};s.a.render(Object(h.jsx)(t.a.StrictMode,{children:Object(h.jsx)(B,{})}),document.getElementById("root")),F()}},[[228,1,2]]]);
//# sourceMappingURL=main.f661cc0c.chunk.js.map