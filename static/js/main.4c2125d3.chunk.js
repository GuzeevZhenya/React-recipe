(this["webpackJsonpshop-project"]=this["webpackJsonpshop-project"]||[]).push([[0],{24:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(17),s=c.n(r),i=(c(24),c(7)),j=c(2),o=c(0),l=function(){return Object(o.jsx)("nav",{className:"green darken-1",children:Object(o.jsxs)("div",{className:"nav-wrapper",children:[Object(o.jsx)("a",{href:"/",className:"brand-logo",children:"React Shop"}),Object(o.jsxs)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:[Object(o.jsx)("li",{children:Object(o.jsx)(i.b,{to:"/contacts",children:"Contacts"})}),Object(o.jsx)("li",{children:Object(o.jsx)(i.b,{to:"/about",children:"About"})})]})]})})},b=function(){return Object(o.jsx)("footer",{className:"page-footer green lighten-4",children:Object(o.jsx)("div",{className:"footer-copyright",children:Object(o.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(o.jsx)("a",{className:"grey-text text-lighten-4 right",href:"https://github.com/michey85/react-shop",rel:"noreferrer",target:"_blank",children:"Repo"})]})})})},d=c(11),u=c(13),h=c(9),O=c.n(h),x="https://www.themealdb.com/api/json/v1/".concat("1","/"),m=function(){var e=Object(u.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(x+"categories.php");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(u.a)(O.a.mark((function e(t){var c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(x+"filter.php?c="+t);case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=c(12),v=function(e){e.idCategory;var t=e.strCategory,c=e.strCategoryThumb,n=e.strCategoryDescription;return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card-image",children:Object(o.jsx)("img",{src:c,alt:t})}),Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsx)("span",{className:"card-title",children:t}),Object(o.jsxs)("p",{children:[n.slice(0,60),"..."]})]}),Object(o.jsx)("div",{className:"card-action",children:Object(o.jsx)(i.b,{to:"/category/".concat(t),className:"btn",children:"Watch category"})})]})},g=function(e){var t=e.catalog,c=void 0===t?[]:t;return Object(o.jsx)("div",{className:"list",children:c.map((function(e){return Object(o.jsx)(v,Object(f.a)({},e),e.idCategory)}))})},N=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){m().then((function(e){a(e.categories)}))}),[]),Object(o.jsx)("div",{children:Object(o.jsx)(g,{catalog:c})})},y=function(){return Object(o.jsx)("div",{children:"Contact"})},w=function(){return Object(o.jsx)("div",{children:"About"})},k=function(){return Object(o.jsx)("div",{children:"Not Found"})},C=function(e){var t=e.strMeal,c=e.idMeal,n=e.strMealThumb;return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card-image",children:Object(o.jsx)("img",{src:n,alt:t})}),Object(o.jsx)("div",{className:"card-content",children:Object(o.jsx)("span",{className:"card-title",children:t})}),Object(o.jsx)("div",{className:"card-action",children:Object(o.jsx)(i.b,{to:"/meal/".concat(c),className:"btn",children:"Watch recipe"})})]})},M=function(e){var t=e.meals;return Object(o.jsx)("div",{className:"list",children:t.map((function(e){return Object(o.jsx)(C,Object(f.a)({},e),e.idMeal)}))})};function S(){var e=Object(j.g)().name,t=Object(n.useState)([]),c=Object(d.a)(t,2),a=c[0],r=c[1],s=Object(j.f)().goBack;return Object(n.useEffect)((function(){p(e).then((function(e){return r(e.meals)}))}),[e]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("button",{className:"btn",onClick:s,children:"Go Back"}),Object(o.jsx)(M,{meals:a})]})}var A=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(i.a,{basename:"/React-recipe",children:[Object(o.jsx)(l,{}),Object(o.jsx)("main",{className:"container content"}),Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{exact:!0,path:"/",component:N}),Object(o.jsx)(j.a,{path:"/about",component:w}),Object(o.jsx)(j.a,{path:"/contacts",component:y}),Object(o.jsx)(j.a,{path:"/category/:name",component:S}),Object(o.jsx)(j.a,{component:k})]}),Object(o.jsx)(b,{})]})})};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(A,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.4c2125d3.chunk.js.map