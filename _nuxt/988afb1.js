(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2,3],{255:function(t,n,e){"use strict";var r=e(11),o=e(5),l=e(3),c=e(108),d=e(17),f=e(12),h=e(183),v=e(38),m=e(79),_=e(182),C=e(4),x=e(80).f,P=e(28).f,y=e(16).f,N=e(261),O=e(262).trim,w="Number",I=o.Number,k=I.prototype,j=o.TypeError,A=l("".slice),E=l("".charCodeAt),L=function(t){var n=_(t,"number");return"bigint"==typeof n?n:M(n)},M=function(t){var n,e,r,o,l,c,d,code,f=_(t,"number");if(m(f))throw j("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=O(f),43===(n=E(f,0))||45===n){if(88===(e=E(f,2))||120===e)return NaN}else if(48===n){switch(E(f,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(c=(l=A(f,2)).length,d=0;d<c;d++)if((code=E(l,d))<48||code>o)return NaN;return parseInt(l,r)}return+f};if(c(w,!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var S,T=function(t){var n=arguments.length<1?0:I(L(t)),e=this;return v(k,e)&&C((function(){N(e)}))?h(Object(n),e,T):n},F=r?x(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),D=0;F.length>D;D++)f(I,S=F[D])&&!f(T,S)&&y(T,S,P(I,S));T.prototype=k,k.constructor=T,d(o,w,T,{constructor:!0})}},256:function(t,n,e){var content=e(265);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(107).default)("89bf98fc",content,!0,{sourceMap:!1})},257:function(t,n,e){var content=e(267);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(107).default)("ca9e050e",content,!0,{sourceMap:!1})},258:function(t,n,e){var content=e(270);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(107).default)("9662e422",content,!0,{sourceMap:!1})},259:function(t,n,e){"use strict";e.r(n);e(27),e(46),e(36),e(45),e(15),e(77),e(37),e(78);var r=e(29),o=(e(255),e(59),e(60));function l(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(n){Object(r.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}var d={props:{itemsAmount:Number,lists:Array},name:"Table",data:function(){return{pageCount:1}},methods:c(c({},Object(o.b)(["sortById"])),{},{onClickChild:function(t){this.pageCount=t}}),computed:{partList:function(){return this.lists.slice(this.itemsAmount*(this.pageCount-1),this.itemsAmount*this.pageCount)},listLength:function(){return this.partList.length>0}}},f=(e(269),e(44)),component=Object(f.a)(d,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"container"},[t.listLength?[n("table",{attrs:{id:"table-lists"}},[n("tr",{attrs:{id:"head"}},[n("th",{attrs:{id:"sort"},on:{click:function(n){return t.sortById()}}},[t._v("id "),n("span",[t._v("sort")])]),t._v(" "),n("th",[t._v("name")]),t._v(" "),n("th",[t._v("email")])]),t._v(" "),t._l(t.partList,(function(e,i){return n("tr",{key:i},[n("td",{staticClass:"sort"},[n("strong",{staticClass:"mobile-head"},[t._v("id: ")]),t._v(" "+t._s(e.id))]),t._v(" "),n("td",[n("NuxtLink",{attrs:{to:"/".concat(e.id)}},[n("strong",{staticClass:"mobile-head"},[t._v("name: ")]),t._v(" "+t._s(e.name))])],1),t._v(" "),n("td",[n("strong",{staticClass:"mobile-head"},[t._v("email: ")]),t._v(" "+t._s(e.email))])])}))],2),t._v(" "),t.itemsAmount?n("Pagination",{attrs:{pageCount:t.pageCount,allPagination:t.allPagination,itemLength:t.lists.length,itemsAmount:t.itemsAmount},on:{newPageCount:t.onClickChild}}):t._e()]:n("Spinner")],2)}),[],!1,null,"28fa304c",null);n.default=component.exports;installComponents(component,{Table:e(259).default,Pagination:e(268).default,Spinner:e(260).default})},260:function(t,n,e){"use strict";e.r(n);e(266);var r=e(44),component=Object(r.a)({},(function(){return(0,this._self._c)("div",{staticClass:"lds-dual-ring"})}),[],!1,null,"4aa5a9ca",null);n.default=component.exports},261:function(t,n,e){var r=e(3);t.exports=r(1..valueOf)},262:function(t,n,e){var r=e(3),o=e(23),l=e(13),c=e(263),d=r("".replace),f="["+c+"]",h=RegExp("^"+f+f+"*"),v=RegExp(f+f+"*$"),m=function(t){return function(n){var e=l(o(n));return 1&t&&(e=d(e,h,"")),2&t&&(e=d(e,v,"")),e}};t.exports={start:m(1),end:m(2),trim:m(3)}},263:function(t,n){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},264:function(t,n,e){"use strict";e(256)},265:function(t,n,e){var r=e(106)(!1);r.push([t.i,"\n.chosen-page {\n  background-color: #aff8e2;\n  color: rgb(0, 0, 0);\n  border-radius: 5px;\n}\n.pagination {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  padding: 0;\n}\nul > li {\n  margin: 5px;\n  list-style: none;\n  padding: 8px 16px;\n  text-decoration: none;\n  border-radius: 5px;\n}\nul > li:hover {\n  cursor: pointer;\n  background-color: #ddd;\n}\n",""]),t.exports=r},266:function(t,n,e){"use strict";e(257)},267:function(t,n,e){var r=e(106)(!1);r.push([t.i,'\n.lds-dual-ring[data-v-4aa5a9ca] {\n  display: inline-block;\n  width: 80px;\n  height: 80px;\n}\n.lds-dual-ring[data-v-4aa5a9ca]:after {\n  content: " ";\n  display: block;\n  width: 64px;\n  height: 64px;\n  margin: 8px;\n  border-radius: 50%;\n  border: 6px solid rgb(47, 26, 26);\n  border-color: rgb(33, 17, 17) transparent rgb(37, 16, 16) transparent;\n  animation: lds-dual-ring-4aa5a9ca 1.2s linear infinite;\n}\n@keyframes lds-dual-ring-4aa5a9ca {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n',""]),t.exports=r},268:function(t,n,e){"use strict";e.r(n);e(255);var r={props:{pageCount:Number,allPagination:Number,itemLength:Number,itemsAmount:Number},methods:{lastPage:function(){this.pageCount!==this.allPagination&&(this.pageCount=this.allPagination,this.newCountPage())},firstPage:function(){1!==this.pageCount&&(this.pageCount=1,this.newCountPage())},nextPage:function(){this.pageCount+=1,this.newCountPage()},prevPage:function(){this.pageCount-=1,this.newCountPage()},newCountPage:function(){this.$emit("newPageCount",this.pageCount)}},computed:{allPagination:function(){return Math.round(this.itemLength/this.itemsAmount)}}},o=(e(264),e(44)),component=Object(o.a)(r,(function(){var t=this,n=t._self._c;return n("ul",{staticClass:"pagination"},[t.pageCount>1?[n("li",{on:{click:function(n){return t.firstPage()}}},[t._v("<<")]),t._v(" "),n("li",{on:{click:function(n){return t.prevPage()}}},[t._v(t._s(t.pageCount-1))])]:t._e(),t._v(" "),n("li",{staticClass:"chosen-page"},[t._v(t._s(t.pageCount))]),t._v(" "),t.pageCount<t.allPagination?[n("li",{on:{click:function(n){return t.nextPage()}}},[t._v(t._s(t.pageCount+1))]),t._v(" "),n("li",{on:{click:function(n){return t.lastPage()}}},[t._v(">>")])]:t._e()],2)}),[],!1,null,null,null);n.default=component.exports},269:function(t,n,e){"use strict";e(258)},270:function(t,n,e){var r=e(106)(!1);r.push([t.i,"\n#sort span[data-v-28fa304c] {\n  font-size: 12px;\n  color: gray;\n}\n#sort[data-v-28fa304c]:hover {\n  cursor: pointer;\n}\nth[data-v-28fa304c]:first-child {\n  border-top-left-radius: 10px;\n}\nth[data-v-28fa304c]:last-child {\n  border-top-right-radius: 10px;\n  border-right: none;\n}\ntr:last-child td[data-v-28fa304c]:first-child {\n  border-radius: 0 0 0 10px;\n}\ntr:last-child td[data-v-28fa304c]:last-child {\n  border-radius: 0 0 10px 0;\n}\n@media screen and (max-width: 720px) {\ntr:last-child td[data-v-28fa304c]:first-child {\n    border-radius: 0;\n}\ntr:last-child td[data-v-28fa304c]:last-child {\n    border-radius: 0;\n}\n}\n",""]),t.exports=r}}]);