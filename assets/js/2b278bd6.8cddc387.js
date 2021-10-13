"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[873],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=p(n),d=i,h=f["".concat(c,".").concat(d)]||f[d]||u[d]||o;return n?r.createElement(h,a(a({ref:t},l),{},{components:n})):r.createElement(h,a({ref:t},l))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1692:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return f}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={sidebar_position:6},c="API First",p={unversionedId:"development/apifirst",id:"development/apifirst",isDocsHomePage:!1,title:"API First",description:"Guidance",source:"@site/docs/development/apifirst.md",sourceDirName:"development",slug:"/development/apifirst",permalink:"/nodejs-reference-architecture/development/apifirst",editUrl:"https://github.com/nodeshift/nodejs-reference-architecture/docs/development/apifirst.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Testing",permalink:"/nodejs-reference-architecture/development/testing"},next:{title:"Typescript",permalink:"/nodejs-reference-architecture/development/typescript"}},l=[{value:"Guidance",id:"guidance",children:[]},{value:"What does &quot;API-first approach&quot; mean?",id:"what-does-api-first-approach-mean",children:[]},{value:"Choose an API specification",id:"choose-an-api-specification",children:[]}],u={toc:l};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"api-first"},"API First"),(0,o.kt)("h2",{id:"guidance"},"Guidance"),(0,o.kt)("p",null,"This reference describes what it means to use the API-first design approach with Node.js backends and JavaScript client applications.\nReference is going to use OpenAPI standard along with supporting packages and tools we recomend to implement API first applications."),(0,o.kt)("h2",{id:"what-does-api-first-approach-mean"},'What does "API-first approach" mean?'),(0,o.kt)("p",null,"With the API-first approach, designing the API is the first priority before writing any code. Design of the API involves thorough thinking and planning through collaboration with different stakeholders. This result in high-level documentation describing the intent of the API."),(0,o.kt)("p",null,"This API contract acts as a central draft keeping all your team members aligned on what your API\u2019s objectives are and how your API\u2019s resources are exposed. The finalization of the contract allows the team to build the interface of the application."),(0,o.kt)("p",null,"After this, the cross-functional teams rely on this interface to build the rest of the application independent of each other. For example, the back-end developer starts building out the implementation logic behind the API,  the front-end developer starts working on different front-end applications, and quality testers start writing tests for the exposed interface."),(0,o.kt)("h2",{id:"choose-an-api-specification"},"Choose an API specification"),(0,o.kt)("p",null,"The first step is to choose an API specification. API specification is a term that is often used interchangeably with API definition. While these terms have many similarities, they are different entities."),(0,o.kt)("p",null,"An API specification provides a broad understanding of how an API behaves and how the API links with other APIs. It explains how the API functions and the results to expect when using the API."),(0,o.kt)("p",null,"There are several API specification options:"),(0,o.kt)("p",null,"OpenAPI Specification\nGraphQL"))}f.isMDXComponent=!0}}]);