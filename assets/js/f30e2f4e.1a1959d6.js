(self.webpackChunkcodeshift_community=self.webpackChunkcodeshift_community||[]).push([[309],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=n,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return r?o.createElement(h,i(i({ref:t},p),{},{components:r})):o.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6333:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var o=r(2122),n=r(9756),a=(r(7294),r(3905)),i={id:"glossary",title:"Glossary",slug:"/glossary"},s={unversionedId:"glossary",id:"glossary",isDocsHomePage:!1,title:"Glossary",description:"Codemod",source:"@site/docs/glossary.mdx",sourceDirName:".",slug:"/glossary",permalink:"/docs/glossary",editUrl:"https://github.com/CodeshiftCommunity/CodeshiftCommunity/edit/main/website/docs/glossary.mdx",version:"current",frontMatter:{id:"glossary",title:"Glossary",slug:"/glossary"},sidebar:"docs",previous:{title:"Ecosystem",permalink:"/docs/ecosystem"},next:{title:"Authoring",permalink:"/docs/authoring"}},c=[{value:"Codemod",id:"codemod",children:[]},{value:"Transform",id:"transform",children:[]},{value:"Motion",id:"motion",children:[]},{value:"AST",id:"ast",children:[]},{value:"jscodeshift",id:"jscodeshift",children:[]},{value:"recast",id:"recast",children:[]},{value:"ast-types",id:"ast-types",children:[]},{value:"Node",id:"node",children:[]},{value:"Path",id:"path",children:[]},{value:"Collection",id:"collection",children:[]},{value:"Builders",id:"builders",children:[]}],l={toc:c};function p(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"codemod"},"Codemod"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Code that is written with the sole intent of transforming other code. An example would be a piece of code that takes a normal function, and rewrites it to be an arrow function.")),(0,a.kt)("p",null,"\u2013 ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/@andrew_levine/writing-your-very-first-codemod-with-jscodeshift-7a24c4ede31b"},"Reference")),(0,a.kt)("h2",{id:"transform"},"Transform"),(0,a.kt)("p",null,"A transform is simply a javascript function which serves as the entry-point for your codemod."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"export default function transform(file, { jscodeshift: j }, options) {\n  //... codemod goes here\n}\n")),(0,a.kt)("h2",{id:"motion"},"Motion"),(0,a.kt)("p",null,"A motion (aka migration) is what we call specific actions performed within a codemod. Put simply, javascript functions that are responsible for a single action within a codemod."),(0,a.kt)("p",null,"For more information see: ",(0,a.kt)("a",{parentName:"p",href:"/docs/authoring#motions"},"Authoring")),(0,a.kt)("h2",{id:"ast"},"AST"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"An abstract syntax tree (AST), is a tree representation of the abstract syntactic structure of source code written in a programming language. Each node of the tree denotes a construct occurring in the source code.")),(0,a.kt)("p",null,"\u2013 ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Abstract_syntax_tree"},"Wiki: Abstract syntax tree")),(0,a.kt)("h2",{id:"jscodeshift"},"jscodeshift"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/jscodeshift"},"jscodeshift")," is the underlying library used by CodeshiftCommunity."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Provides both a CLI for running transforms and a jQuery-like API for manipulating ASTs"),(0,a.kt)("li",{parentName:"ul"},"AST transformations are performed using a wrapper around ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/benjamn/recast"},"recast"),"."),(0,a.kt)("li",{parentName:"ul"},"The AST is implemented in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/benjamn/ast-types"},"ast-types"),", which is itself based on ",(0,a.kt)("a",{parentName:"li",href:"https://esprima.org/"},"esprima"))),(0,a.kt)("h2",{id:"recast"},"recast"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/benjamn/recast"},"recast")," is the underlying library used by jscodeshift to parse, transform and output files as ASTs. It's a comparable library to ",(0,a.kt)("a",{parentName:"p",href:"https://babeljs.io/"},"babel")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A fantastic library (authored by Ben Newman) that takes an AST and transforms it back into source code. The beauty of recast is that it tries to preserve as much of your codes existing formatting as possible.")),(0,a.kt)("p",null,"\u2013 ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/@andrew_levine/writing-your-very-first-codemod-with-jscodeshift-7a24c4ede31b"},"Reference")),(0,a.kt)("h2",{id:"ast-types"},"ast-types"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/benjamn/ast-types"},"ast-types")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Another great library authored by Ben Newman. It exposes 2 kinds of helpers that you\u2019ll be using: functions that allow you to verify assumptions about nodes, and functions that allow you to compose new nodes to be added to an existing AST.")),(0,a.kt)("p",null,"\u2013 ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/@andrew_levine/writing-your-very-first-codemod-with-jscodeshift-7a24c4ede31b"},"Reference")),(0,a.kt)("h2",{id:"node"},"Node"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The representation of a single construct within an AST. An example of a node could be a node for a ",(0,a.kt)("inlineCode",{parentName:"p"},"FunctionExpression"),". A node will often have many other nodes nested within it.")),(0,a.kt)("p",null,"\u2013 ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/@andrew_levine/writing-your-very-first-codemod-with-jscodeshift-7a24c4ede31b"},"Reference")),(0,a.kt)("p",null,"For more information see the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/jscodeshift#ast-nodes"},"jscodeshift docs")),(0,a.kt)("h2",{id:"path"},"Path"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"An object that wraps a single node, and exposes an API to make modifying/inspecting information about the node simpler.")),(0,a.kt)("p",null,"\u2013 ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/@andrew_levine/writing-your-very-first-codemod-with-jscodeshift-7a24c4ede31b"},"Reference")),(0,a.kt)("p",null,"For more information see the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/jscodeshift#path-objects"},"jscodeshift docs")),(0,a.kt)("h2",{id:"collection"},"Collection"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A group of path objects that exposes helpers to transform all contained paths, or traverse them further. Collections are very similar to the object returned from jQuery\u2019s \\$() function.")),(0,a.kt)("p",null,"\u2013 ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/@andrew_levine/writing-your-very-first-codemod-with-jscodeshift-7a24c4ede31b"},"Reference")),(0,a.kt)("p",null,"For more information see the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/jscodeshift#collections-and-traversal"},"jscodeshift docs")),(0,a.kt)("h2",{id:"builders"},"Builders"),(0,a.kt)("p",null,"Builders are methods intended to create new AST nodes."),(0,a.kt)("p",null,"For example creating an import declaration with the ",(0,a.kt)("inlineCode",{parentName:"p"},"importDeclaration()")," builder might look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"j.importDeclaration(\n  [j.importDefaultSpecifier(j.identifier('Foo'))],\n  j.stringLiteral('bar'),\n);\n")),(0,a.kt)("p",null,"For more information see the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/jscodeshift#builders"},"jscodeshift docs")))}p.isMDXComponent=!0}}]);