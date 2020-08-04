(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,a,n){"use strict";n.r(a);var t={};n.r(t),n.d(t,"stepone",(function(){return f})),n.d(t,"steptwo",(function(){return v})),n.d(t,"stepthree",(function(){return E})),n.d(t,"stepfour",(function(){return b})),n.d(t,"stepfive",(function(){return h})),n.d(t,"stepsix",(function(){return g})),n.d(t,"reset",(function(){return x})),n.d(t,"getData",(function(){return N}));var r=n(0),l=n.n(r),o=n(9),u=n.n(o),s=(n(75),n(13)),c=n(16),i=n(137),m=n(11),d=n(135),p=n(136),y=n(134),f=(n(82),function(e){return function(a){a({type:"stepone",payload:e})}}),v=function(e){return function(a){a({type:"steptwo",payload:e})}},E=function(e){return function(a){a({type:"stepthree",payload:e})}},b=function(e){return function(a){a({type:"stepfour",payload:e})}},h=function(e){return function(a){a({type:"stepfive",payload:e})}},g=function(e){return function(a){a({type:"stepsix",payload:e})}},x=function(){return function(e){e({type:"reset",payload:""})}},N=function(e){return function(a){console.log(e)}};var q=Object(s.b)((function(e){return{data:e.two}}),t)((function(e){var a=Object(m.b)(),n=a.register,t=a.handleSubmit,r=a.control;return l.a.createElement("div",null,l.a.createElement("div",{className:"content"},l.a.createElement("form",{onSubmit:t((function(a){e.steptwo(a),e.handleNext()})),autoComplete:"off"},l.a.createElement("div",null,l.a.createElement("label",null,"Do you have any source of income? ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement(m.a,{name:"sourceOfIncome",control:r,defaultValue:e.data.sourceOfIncome,rules:{required:!0},render:function(e){return l.a.createElement(d.a,e," ",l.a.createElement(p.a,{value:"yes",control:l.a.createElement(y.a,null),label:"Yes"}),l.a.createElement(p.a,{value:"no",control:l.a.createElement(y.a,null),label:"No"}),l.a.createElement(p.a,{value:"student",control:l.a.createElement(y.a,null),label:"Student"}))}}),l.a.createElement("label",null,"What are the top 3 things you spend on every single day of your life?",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{type:"text",name:"expenditureOne",defaultValue:e.data.expenditureOne,ref:n({required:!0}),className:"expenditure"}),l.a.createElement("input",{type:"text",name:"expenditureTwo",defaultValue:e.data.expenditureTwo,className:"expenditure",ref:n({required:!0})}),l.a.createElement("input",{type:"text",name:"expenditureThree",defaultValue:e.data.expenditureThree,className:"expenditure",ref:n({required:!0})})),l.a.createElement("div",null,l.a.createElement("label",null,"Do you  save? ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement(m.a,{name:"save",control:r,defaultValue:e.data.save,rules:{required:!0},render:function(e){return l.a.createElement(d.a,e," ",l.a.createElement(p.a,{value:"yes",control:l.a.createElement(y.a,null),label:"Yes"}),l.a.createElement(p.a,{value:"no",control:l.a.createElement(y.a,null),label:"No"}))}})),l.a.createElement("button",{className:"next prev"},"Next")),l.a.createElement("button",{className:"next",onClick:e.handleBack},"Prev")))}));var O=Object(s.b)((function(e){return{data:e.one}}),t)((function(e){var a=Object(m.b)(),n=a.register,t=a.errors,r=a.handleSubmit;return l.a.createElement("div",null,l.a.createElement("div",{className:"content"},l.a.createElement("form",{onSubmit:r((function(a){e.stepone(a),e.handleNext()})),autoComplete:"off"},l.a.createElement("div",null,l.a.createElement("label",null,"First Name ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{type:"text",name:"firstname",defaultValue:e.data.firstname,ref:n({required:!0})}),t.firstname&&l.a.createElement("span",{className:"error"},"First Name is required"),l.a.createElement("label",null,"Last Name ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{type:"text",name:"lastname",defaultValue:e.data.lastname,ref:n({required:!0})}),t.lastname&&l.a.createElement("span",{className:"error"},"Last Name is required")),l.a.createElement("div",null,l.a.createElement("label",null,"Age ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{type:"number",name:"age",defaultValue:e.data.age,ref:n({required:!0,min:2,max:100})}),t.age&&l.a.createElement("span",{className:"error"},"Age must be between 2 to 100 years")),l.a.createElement("div",null,l.a.createElement("label",null,"Email",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{type:"email",name:"email",defaultValue:e.data.email,ref:n({required:!0,pattern:/^[a-zA-Z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/})}),t.email&&l.a.createElement("span",{className:"error"},"Please input a valid email")),l.a.createElement("button",{className:"next first",type:"submit"},"Next"))))}));var w=Object(s.b)((function(e){return{data:e.three,save:e.two.save}}),t)((function(e){var a=Object(m.b)(),n=a.register,t=a.handleSubmit,r=a.control;return l.a.createElement("div",null,l.a.createElement("div",{className:"content"},l.a.createElement("form",{onSubmit:t((function(a){e.stepthree(a),e.handleNext()})),autoComplete:"off"},"yes"===e.save?l.a.createElement("div",null,l.a.createElement("label",null,"Why do you save?",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{type:"text",name:"savingReason",defaultValue:e.data.savingReason,ref:n({required:!0})}),l.a.createElement("label",null,"How do you save?",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{type:"text",name:"savingWay",defaultValue:e.data.savingWay,ref:n({required:!0})})):l.a.createElement("div",null,l.a.createElement("label",null,"Why don't you save? ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{type:"text",name:"nosavingReason",defaultValue:e.data.nosavingReason,ref:n({required:!0})}),l.a.createElement("label",null,"What would help you or inspire you to start saving? ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{type:"text",name:"inspirationToSave",defaultValue:e.data.inspirationToSave,ref:n({required:!0})})),l.a.createElement("div",null,l.a.createElement("label",null,"Do you have an emergency fund?",l.a.createElement("span",{className:"required"},"*")),l.a.createElement(m.a,{name:"emergencyFund",control:r,defaultValue:e.data.emergencyFund,rules:{required:!0},render:function(e){return l.a.createElement(d.a,e," ",l.a.createElement(p.a,{value:"yes",control:l.a.createElement(y.a,null),label:"Yes"}),l.a.createElement(p.a,{value:"no",control:l.a.createElement(y.a,null),label:"No"}))}})),l.a.createElement("button",{className:"next prev"},"Next")),l.a.createElement("button",{className:"next",onClick:e.handleBack},"Prev")))}));var R=Object(s.b)((function(e){return{data:e.four,emergencyFund:e.three.emergencyFund}}),t)((function(e){var a=Object(m.b)(),n=a.register,t=a.handleSubmit,r=a.control;return l.a.createElement("div",null,l.a.createElement("div",{className:"content"},l.a.createElement("form",{onSubmit:t((function(a){e.stepfour(a),e.handleNext()})),autoComplete:"off"},"yes"===e.emergencyFund?l.a.createElement("div",null,l.a.createElement("label",null,"What inspired you to have an emergency fund? ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{type:"text",name:"emergencyfundReason",defaultValue:e.data.emergencyfundReason,ref:n({required:!0})}),l.a.createElement("label",null,"How do you save for an emergency fund?"),l.a.createElement("input",{type:"text",name:"emergencyfundWay",defaultValue:e.data.emergencyfundWay,ref:n({required:!0})})):l.a.createElement("div",null,l.a.createElement("label",null,"Why don't you save for emergencies?",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{type:"text",name:"noemergencyFundReason",defaultValue:e.data.noemergencyFundReason,ref:n({required:!0})}),l.a.createElement("label",null,"What would help you or inspire you to start saving for emergencies?",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{type:"text",name:"inspirationForEmergencyFund",defaultValue:e.data.inspirationForEmergencyFund,ref:n({required:!0})})),l.a.createElement("div",null,l.a.createElement("label",null,"Do you have any investments?",l.a.createElement("span",{className:"required"},"*")),l.a.createElement(m.a,{name:"investments",control:r,defaultValue:e.data.investments,rules:{required:!0},render:function(e){return l.a.createElement(d.a,e," ",l.a.createElement(p.a,{value:"yes",control:l.a.createElement(y.a,null),label:"Yes"}),l.a.createElement(p.a,{value:"no",control:l.a.createElement(y.a,null),label:"No"}))}})),l.a.createElement("button",{className:"next prev"},"Next")),l.a.createElement("button",{className:"next",onClick:e.handleBack},"Prev")))}));var j=Object(s.b)((function(e){return{data:e.five,investments:e.four.investments}}),t)((function(e){var a=Object(m.b)(),n=a.register,t=a.handleSubmit,r=a.control;return l.a.createElement("div",null,l.a.createElement("div",{className:"content"},l.a.createElement("form",{onSubmit:t((function(a){e.stepfive(a),e.handleNext()})),autoComplete:"off"},"yes"===e.investments?l.a.createElement("div",null,l.a.createElement("label",null,"Why do you invest?",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{type:"text",name:"investmentReason",defaultValue:e.data.investmentReason,ref:n({required:!0})}),l.a.createElement("label",null,"How do you invest?",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{type:"text",name:"investmentWay",defaultValue:e.data.investmentWay,ref:n({required:!0})})):l.a.createElement("div",null,l.a.createElement("label",null,"How is it that you don't have any investments?",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{type:"text",name:"noinvestmentReason",defaultValue:e.data.noinvestmentReason,ref:n({required:!0})}),l.a.createElement("label",null,"What would help you or inspire you to start investing?",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{type:"text",name:"inspirationForInvestment",defaultValue:e.data.inspirationForInvestment,ref:n({required:!0})})),l.a.createElement("label",null,"Do you have any form of insurance?",l.a.createElement("span",{className:"required"},"*")),l.a.createElement(m.a,{name:"insurance",control:r,defaultValue:e.data.insurance,rules:{required:!0},render:function(e){return l.a.createElement(d.a,e," ",l.a.createElement(p.a,{value:"yes",control:l.a.createElement(y.a,null),label:"Yes"}),l.a.createElement(p.a,{value:"no",control:l.a.createElement(y.a,null),label:"No"}))}}),l.a.createElement("button",{className:"next prev"},"Next")),l.a.createElement("button",{className:"next",onClick:e.handleBack},"Prev")))})),F=n(133),I=n(4),W=n(22);var V=Object(W.d)(Object(I.a)({container:{width:"100%",height:"200px",marginTop:"10px"}}),Object(s.b)((function(e){return{data:e.six,insurance:e.five.insurance,formdata:e}}),t))((function(e){var a=Object(m.b)(),n=a.register,t=a.handleSubmit,r=e.classes;return l.a.createElement("div",{className:"aspirations"},l.a.createElement("form",{onSubmit:t((function(a){e.stepsix(a),e.getData(e.formdata),e.handleNext()})),autoComplete:"off"},"yes"===e.insurance?l.a.createElement("div",null,l.a.createElement("label",null,"What inspired you to have any insurance policy?",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{type:"text",name:"insuranceReason",defaultValue:e.data.insuranceReason,ref:n({required:!0})}),l.a.createElement("label",null,"How do you pay for your insurance policy?",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{type:"text",name:"insurancePaymentWay",defaultValue:e.data.insurancePaymentWay,ref:n({required:!0})}),l.a.createElement("label",null,"What more would you wish  insurance policy could cover for you?",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{type:"text",name:"extraInsuranceOptions",defaultValue:e.data.extraInsuranceOptions,ref:n({required:!0})}),l.a.createElement("label",null,"How has your insurance impacted you to this day?",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{type:"text",name:"insurancePersonalImpact",defaultValue:e.data.insurancePersonalImpact,ref:n({required:!0})}),l.a.createElement("label",null,"How do you wish insurance would be improved to serve you better?",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{type:"text",name:"insuranceImprovement",defaultValue:e.data.insuranceImprovement,ref:n({required:!0})})):l.a.createElement("div",null,l.a.createElement("label",null,"How is it that you don't have any form of insurance?",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{type:"text",name:"noinsuranceReason",defaultValue:e.data.noinsuranceReason,ref:n({required:!0})}),l.a.createElement("label",null,"What would help you or inspire you to start having some?",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{type:"text",name:"inspirationForInsurance",defaultValue:e.data.inspirationForInsurance,ref:n({required:!0})})),l.a.createElement("label",null,"What are your top financial aspirations?",l.a.createElement("span",{className:"required"},"*")),l.a.createElement(F.a,{className:r.container,id:"outlined-multiline-static",multiline:!0,rowsMax:4,variant:"outlined",name:"aspirations",inputRef:n({required:!0}),defaultValue:e.data.aspirations}),l.a.createElement("button",{className:"next prev"},"Submit")),l.a.createElement("button",{className:"next",onClick:e.handleBack},"Prev"))}));var k=Object(s.b)(null,t)((function(e){var a=l.a.useState(0),n=Object(c.a)(a,2),t=n[0],r=n[1],o=["step 1","step 2","step 3","step 4","step 5","step 6"],u=function(){r((function(e){return e+1}))},s=function(){r((function(e){return e-1}))};return l.a.createElement("div",{className:"container"},l.a.createElement("h2",{className:"title"},"Pasbanc Form"),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(i.a,{activeStep:t,alternativeLabel:!0})),l.a.createElement("div",null,t===o.length?l.a.createElement("div",null,l.a.createElement("div",{className:"content message"},"Thank you for your best cooperation on this,your answers to these questions  provides the basic vital information that is key to working with us "),l.a.createElement("button",{type:"submit",className:"submit",onClick:function(){e.reset(),r(0)}},"Ok")):l.a.createElement("div",null,function(e){switch(e){case 0:return l.a.createElement(O,{handleNext:u});case 1:return l.a.createElement(q,{handleBack:s,handleNext:u});case 2:return l.a.createElement(w,{handleBack:s,handleNext:u});case 3:return l.a.createElement(R,{handleBack:s,handleNext:u});case 4:return l.a.createElement(j,{handleBack:s,handleNext:u});case 5:return l.a.createElement(V,{handleBack:s,handleNext:u});default:return"Unknown stepIndex"}}(t)))))})),S=n(62),T=n(7),P={firstname:"",lastname:"",email:"",age:""},B={sourceOfIncome:"",expenditureOne:"",expenditureTwo:"",expenditureThree:"",save:""},C={savingReason:"",savingWay:"",emergencyFund:"",nosavingReason:"",inspirationToSave:""},H={emergencyfundReason:"",emergencyfundWay:"",noemergencyFundReason:"",inspirationForEmergencyFund:"",investments:""},D={investmentReason:"",investmentWay:"",noinvestmentReason:"",inspirationForInvestment:"",insurance:""},A={insuranceReason:"",insurancePersonalImpact:"",extraInsuranceOptions:"",insuranceImprovement:"",noinsuranceReason:"",inspirationForInsurance:"",aspirations:""},Y=Object(W.c)({one:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"stepone":return Object(T.a)(Object(T.a)({},e),{},{firstname:a.payload.firstname,lastname:a.payload.lastname,email:a.payload.email,age:a.payload.age});case"reset":return Object(T.a)(Object(T.a)({},e),{},{firstname:a.payload,lastname:a.payload,email:a.payload,age:a.payload});default:return e}},two:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"steptwo":return Object(T.a)(Object(T.a)({},e),{},{sourceOfIncome:a.payload.sourceOfIncome,expenditureOne:a.payload.expenditureOne,expenditureTwo:a.payload.expenditureTwo,expenditureThree:a.payload.expenditureThree,save:a.payload.save});case"reset":return Object(T.a)(Object(T.a)({},e),{},{sourceOfIncome:a.payload,expenditureOne:a.payload,expenditureTwo:a.payload,expenditureThree:a.payload,save:a.payload});default:return e}},three:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"stepthree":return Object(T.a)(Object(T.a)({},e),{},{savingReason:a.payload.savingReason,savingWay:a.payload.savingWay,emergencyFund:a.payload.emergencyFund,nosavingReason:a.payload.nosavingReason,inspirationToSave:a.payload.inspirationToSave});case"reset":return Object(T.a)(Object(T.a)({},e),{},{savingReason:a.payload,savingWay:a.payload,emergencyFund:a.payload,nosavingReason:a.payload,inspirationToSave:a.payload});default:return e}},four:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"stepfour":return Object(T.a)(Object(T.a)({},e),{},{emergencyfundReason:a.payload.emergencyfundReason,emergencyfundWay:a.payload.emergencyfundWay,investments:a.payload.investments,noemergencyFundReason:a.payload.noemergencyFundReason,inspirationForEmergencyFund:a.payload.inspirationForEmergencyFund});case"reset":return Object(T.a)(Object(T.a)({},e),{},{emergencyfundReason:a.payload,emergencyfundWay:a.payload,investments:a.payload,noemergencyFundReason:a.payload,inspirationForEmergencyFund:a.payload});default:return e}},five:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"stepfive":return Object(T.a)(Object(T.a)({},e),{},{investmentReason:a.payload.investmentReason,investmentWay:a.payload.investmentWay,insurance:a.payload.insurance,noinvestmentReason:a.payload.noinvestmentReason,inspirationForInvestment:a.payload.inspirationForInvestment});case"reset":return Object(T.a)(Object(T.a)({},e),{},{investmentReason:a.payload,investmentWay:a.payload,insurance:a.payload,noinvestmentReason:a.payload,inspirationForInvestment:a.payload});default:return e}},six:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"stepsix":return Object(T.a)(Object(T.a)({},e),{},{insuranceReason:a.payload.insuranceReason,insurancePersonalImpact:a.payload.insurancePersonalImpact,extraInsuranceOptions:a.payload.extraInsuranceOptions,insuranceImprovement:a.payload.insuranceImprovement,noinsuranceReason:a.payload.noinsuranceReason,inspirationForInsurance:a.payload.inspirationForInsurance,aspirations:a.payload.aspirations});case"reset":return Object(T.a)(Object(T.a)({},e),{},{insuranceReason:a.payload,insurancePersonalImpact:a.payload,extraInsuranceOptions:a.payload,insuranceImprovement:a.payload,noinsuranceReason:a.payload,inspirationForInsurance:a.payload,aspirations:a.payload});default:return e}}}),z=Object(W.e)(Y,{},Object(W.a)(S.a));var L=function(){return l.a.createElement(s.a,{store:z},l.a.createElement("div",null,l.a.createElement(k,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(l.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},70:function(e,a,n){e.exports=n(100)},75:function(e,a,n){}},[[70,1,2]]]);
//# sourceMappingURL=main.72ef5993.chunk.js.map