(this.webpackJsonpquizz=this.webpackJsonpquizz||[]).push([[0],{119:function(e,t,n){e.exports=n(401)},123:function(e,t,n){},401:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(14),s=n.n(c),o=(n(123),n(118)),l=n(70),u=n(29),d=function(e){var t=e.showAnswer,n=e.handleNextPage,a=e.handleAnswer,c=e.data,s=c.question,o=c.correct_answer,l=c.answers;return r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("div",{className:"bg-white text-purple-800 p-10 rounded-lg shadow-md"},r.a.createElement("h2",{className:"text-2xl text-center",dangerouslySetInnerHTML:{__html:s}})),r.a.createElement("div",{className:"grid grid-cols-2 gap-6 mt-6"},l.map((function(e){var n=t?e===o?"bg-green-500":"":"bg-white";return r.a.createElement("button",{className:"".concat(n," p-4 text-purple-800 font-bold rounded shadow mb-4 bg-white"),onClick:function(){return a(e)}},e)}))),t&&r.a.createElement("button",{onClick:n,className:"ml-auto p-4 font-bold rounded shadow mb-4 bg-purple-700 text-white"},"Siguiente"))};n(124);var i=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(0),i=Object(u.a)(s,2),m=i[0],h=i[1],b=Object(a.useState)(0),w=Object(u.a)(b,2),f=w[0],g=w[1],p=Object(a.useState)(0),x=Object(u.a)(p,2),E=x[0],j=x[1],O=Object(a.useState)(!1),v=Object(u.a)(O,2),N=v[0],S=v[1];return Object(a.useEffect)((function(){fetch("./data.json").then((function(e){return e.json()})).then((function(e){var t=e.results.sort((function(){return Math.random()-.5})).map((function(e){return Object(l.a)(Object(l.a)({},e),{},{answers:[e.correct_answer].concat(Object(o.a)(e.incorrect_answers)).sort((function(){return Math.random()-.5}))})}));c(t)}))}),[]),n.length>0?r.a.createElement("div",{className:"container my-4"},m>=n.length?r.a.createElement("div",{className:"h-screen m-20"},r.a.createElement("h1",{className:"text-3xl text-white font-bold bg-green-500 p-10 rounded shadow-lg m-5 text-center"},"Has respondido ",f," preguntas correctamente."),r.a.createElement("div",null,r.a.createElement("h1",{className:"text-3xl text-white font-bold bg-red-500 p-10 rounded shadow-lg text-center"},"Fallaste en ",E," preguntas."))):r.a.createElement(d,{data:n[m],handleAnswer:function(e){N||(e===n[m].correct_answer?g(f+1):j(E+1)),S(!0)},handleNextPage:function(){S(!1),h(m+1)},showAnswer:N})):r.a.createElement("p",null)};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i,null)),document.getElementById("root"))}},[[119,1,2]]]);
//# sourceMappingURL=main.3601c69d.chunk.js.map