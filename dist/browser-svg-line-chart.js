(()=>{var it=Object.create,N=Object.defineProperty,st=Object.getPrototypeOf,he=Object.prototype.hasOwnProperty,ft=Object.getOwnPropertyNames,dt=Object.getOwnPropertyDescriptor,pe=Object.getOwnPropertySymbols,ut=Object.prototype.propertyIsEnumerable;var ge=(e,r,a)=>r in e?N(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,ve=(e,r)=>{for(var a in r||(r={}))he.call(r,a)&&ge(e,a,r[a]);if(pe)for(var a of pe(r))ut.call(r,a)&&ge(e,a,r[a]);return e},lt=e=>N(e,"__esModule",{value:!0});var mt=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var ct=(e,r,a)=>{if(r&&typeof r=="object"||typeof r=="function")for(let t of ft(r))!he.call(e,t)&&t!=="default"&&N(e,t,{get:()=>r[t],enumerable:!(a=dt(r,t))||a.enumerable});return e},xt=e=>ct(lt(N(e!=null?it(st(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var Ze=mt((Un,B)=>{var ke,Ye,Pe,Ue,Ee,Ae,Fe,qe,Le,X,me,Ne,He,Re,P,Qe,$e,Ge,Be,Xe,Ve,ze,Je,V;(function(e){var r=typeof global=="object"?global:typeof self=="object"?self:typeof this=="object"?this:{};typeof define=="function"&&define.amd?define("tslib",["exports"],function(t){e(a(r,a(t)))}):typeof B=="object"&&typeof B.exports=="object"?e(a(r,a(B.exports))):e(a(r));function a(t,n){return t!==r&&(typeof Object.create=="function"?Object.defineProperty(t,"__esModule",{value:!0}):t.__esModule=!0),function(o,i){return t[o]=n?n(o,i):i}}})(function(e){var r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])};ke=function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");r(t,n);function o(){this.constructor=t}t.prototype=n===null?Object.create(n):(o.prototype=n.prototype,new o)},Ye=Object.assign||function(t){for(var n,o=1,i=arguments.length;o<i;o++){n=arguments[o];for(var f in n)Object.prototype.hasOwnProperty.call(n,f)&&(t[f]=n[f])}return t},Pe=function(t,n){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&n.indexOf(i)<0&&(o[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,i=Object.getOwnPropertySymbols(t);f<i.length;f++)n.indexOf(i[f])<0&&Object.prototype.propertyIsEnumerable.call(t,i[f])&&(o[i[f]]=t[i[f]]);return o},Ue=function(t,n,o,i){var f=arguments.length,s=f<3?n:i===null?i=Object.getOwnPropertyDescriptor(n,o):i,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,n,o,i);else for(var u=t.length-1;u>=0;u--)(d=t[u])&&(s=(f<3?d(s):f>3?d(n,o,s):d(n,o))||s);return f>3&&s&&Object.defineProperty(n,o,s),s},Ee=function(t,n){return function(o,i){n(o,i,t)}},Ae=function(t,n){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,n)},Fe=function(t,n,o,i){function f(s){return s instanceof o?s:new o(function(d){d(s)})}return new(o||(o=Promise))(function(s,d){function u(p){try{l(i.next(p))}catch(j){d(j)}}function h(p){try{l(i.throw(p))}catch(j){d(j)}}function l(p){p.done?s(p.value):f(p.value).then(u,h)}l((i=i.apply(t,n||[])).next())})},qe=function(t,n){var o={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},i,f,s,d;return d={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(d[Symbol.iterator]=function(){return this}),d;function u(l){return function(p){return h([l,p])}}function h(l){if(i)throw new TypeError("Generator is already executing.");for(;o;)try{if(i=1,f&&(s=l[0]&2?f.return:l[0]?f.throw||((s=f.return)&&s.call(f),0):f.next)&&!(s=s.call(f,l[1])).done)return s;switch(f=0,s&&(l=[l[0]&2,s.value]),l[0]){case 0:case 1:s=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,f=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(s=o.trys,!(s=s.length>0&&s[s.length-1])&&(l[0]===6||l[0]===2)){o=0;continue}if(l[0]===3&&(!s||l[1]>s[0]&&l[1]<s[3])){o.label=l[1];break}if(l[0]===6&&o.label<s[1]){o.label=s[1],s=l;break}if(s&&o.label<s[2]){o.label=s[2],o.ops.push(l);break}s[2]&&o.ops.pop(),o.trys.pop();continue}l=n.call(t,o)}catch(p){l=[6,p],f=0}finally{i=s=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}},Le=function(t,n){for(var o in t)o!=="default"&&!Object.prototype.hasOwnProperty.call(n,o)&&V(n,t,o)},V=Object.create?function(t,n,o,i){i===void 0&&(i=o),Object.defineProperty(t,i,{enumerable:!0,get:function(){return n[o]}})}:function(t,n,o,i){i===void 0&&(i=o),t[i]=n[o]},X=function(t){var n=typeof Symbol=="function"&&Symbol.iterator,o=n&&t[n],i=0;if(o)return o.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")},me=function(t,n){var o=typeof Symbol=="function"&&t[Symbol.iterator];if(!o)return t;var i=o.call(t),f,s=[],d;try{for(;(n===void 0||n-- >0)&&!(f=i.next()).done;)s.push(f.value)}catch(u){d={error:u}}finally{try{f&&!f.done&&(o=i.return)&&o.call(i)}finally{if(d)throw d.error}}return s},Ne=function(){for(var t=[],n=0;n<arguments.length;n++)t=t.concat(me(arguments[n]));return t},He=function(){for(var t=0,n=0,o=arguments.length;n<o;n++)t+=arguments[n].length;for(var i=Array(t),f=0,n=0;n<o;n++)for(var s=arguments[n],d=0,u=s.length;d<u;d++,f++)i[f]=s[d];return i},Re=function(t,n){for(var o=0,i=n.length,f=t.length;o<i;o++,f++)t[f]=n[o];return t},P=function(t){return this instanceof P?(this.v=t,this):new P(t)},Qe=function(t,n,o){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=o.apply(t,n||[]),f,s=[];return f={},d("next"),d("throw"),d("return"),f[Symbol.asyncIterator]=function(){return this},f;function d(g){i[g]&&(f[g]=function(D){return new Promise(function(y,O){s.push([g,D,y,O])>1||u(g,D)})})}function u(g,D){try{h(i[g](D))}catch(y){j(s[0][3],y)}}function h(g){g.value instanceof P?Promise.resolve(g.value.v).then(l,p):j(s[0][2],g)}function l(g){u("next",g)}function p(g){u("throw",g)}function j(g,D){g(D),s.shift(),s.length&&u(s[0][0],s[0][1])}},$e=function(t){var n,o;return n={},i("next"),i("throw",function(f){throw f}),i("return"),n[Symbol.iterator]=function(){return this},n;function i(f,s){n[f]=t[f]?function(d){return(o=!o)?{value:P(t[f](d)),done:f==="return"}:s?s(d):d}:s}},Ge=function(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t[Symbol.asyncIterator],o;return n?n.call(t):(t=typeof X=="function"?X(t):t[Symbol.iterator](),o={},i("next"),i("throw"),i("return"),o[Symbol.asyncIterator]=function(){return this},o);function i(s){o[s]=t[s]&&function(d){return new Promise(function(u,h){d=t[s](d),f(u,h,d.done,d.value)})}}function f(s,d,u,h){Promise.resolve(h).then(function(l){s({value:l,done:u})},d)}},Be=function(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t};var a=Object.create?function(t,n){Object.defineProperty(t,"default",{enumerable:!0,value:n})}:function(t,n){t.default=n};Xe=function(t){if(t&&t.__esModule)return t;var n={};if(t!=null)for(var o in t)o!=="default"&&Object.prototype.hasOwnProperty.call(t,o)&&V(n,t,o);return a(n,t),n},Ve=function(t){return t&&t.__esModule?t:{default:t}},ze=function(t,n,o,i){if(o==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof n=="function"?t!==n||!i:!n.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return o==="m"?i:o==="a"?i.call(t):i?i.value:n.get(t)},Je=function(t,n,o,i,f){if(i==="m")throw new TypeError("Private method is not writable");if(i==="a"&&!f)throw new TypeError("Private accessor was defined without a setter");if(typeof n=="function"?t!==n||!f:!n.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return i==="a"?f.call(t,o):f?f.value=o:n.set(t,o),o},e("__extends",ke),e("__assign",Ye),e("__rest",Pe),e("__decorate",Ue),e("__param",Ee),e("__metadata",Ae),e("__awaiter",Fe),e("__generator",qe),e("__exportStar",Le),e("__createBinding",V),e("__values",X),e("__read",me),e("__spread",Ne),e("__spreadArrays",He),e("__spreadArray",Re),e("__await",P),e("__asyncGenerator",Qe),e("__asyncDelegator",$e),e("__asyncValues",Ge),e("__makeTemplateObject",Be),e("__importStar",Xe),e("__importDefault",Ve),e("__classPrivateFieldGet",ze),e("__classPrivateFieldSet",Je)})});function v(e){if(e===null||e===!0||e===!1)return NaN;var r=Number(e);return isNaN(r)?r:r<0?Math.ceil(r):Math.floor(r)}function m(e,r){if(r.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+r.length+" present")}function c(e){m(1,arguments);var r=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&r==="[object Date]"?new Date(e.getTime()):typeof e=="number"||r==="[object Number]"?new Date(e):((typeof e=="string"||r==="[object String]")&&typeof console!="undefined"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn(new Error().stack)),new Date(NaN))}function K(e,r){m(2,arguments);var a=c(e).getTime(),t=v(r);return new Date(a+t)}function C(e){var r=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return r.setUTCFullYear(e.getFullYear()),e.getTime()-r.getTime()}function _(e){m(1,arguments);var r=c(e);return r.setHours(0,0,0,0),r}var ht=864e5;function ee(e,r){m(2,arguments);var a=_(e),t=_(r),n=a.getTime()-C(a),o=t.getTime()-C(t);return Math.round((n-o)/ht)}function te(e){m(1,arguments);var r=c(e);return!isNaN(r)}function H(e,r){m(2,arguments);var a=_(e),t=_(r);return a.getTime()===t.getTime()}function ye(e,r){var a=e.getFullYear()-r.getFullYear()||e.getMonth()-r.getMonth()||e.getDate()-r.getDate()||e.getHours()-r.getHours()||e.getMinutes()-r.getMinutes()||e.getSeconds()-r.getSeconds()||e.getMilliseconds()-r.getMilliseconds();return a<0?-1:a>0?1:a}function k(e,r){m(2,arguments);var a=c(e),t=c(r),n=ye(a,t),o=Math.abs(ee(a,t));a.setDate(a.getDate()-n*o);var i=ye(a,t)===-n,f=n*(o-i);return f===0?0:f}var R={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function re(e,r,a){a=a||{};var t;return typeof R[e]=="string"?t=R[e]:r===1?t=R[e].one:t=R[e].other.replace("{{count}}",r),a.addSuffix?a.comparison>0?"in "+t:t+" ago":t}function A(e){return function(r){var a=r||{},t=a.width?String(a.width):e.defaultWidth,n=e.formats[t]||e.formats[e.defaultWidth];return n}}var pt={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},gt={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},vt={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},yt={date:A({formats:pt,defaultWidth:"full"}),time:A({formats:gt,defaultWidth:"full"}),dateTime:A({formats:vt,defaultWidth:"full"})},je=yt;var jt={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function ae(e,r,a,t){return jt[e]}function M(e){return function(r,a){var t=a||{},n=t.context?String(t.context):"standalone",o;if(n==="formatting"&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,f=t.width?String(t.width):i;o=e.formattingValues[f]||e.formattingValues[i]}else{var s=e.defaultWidth,d=t.width?String(t.width):e.defaultWidth;o=e.values[d]||e.values[s]}var u=e.argumentCallback?e.argumentCallback(r):r;return o[u]}}var Ot={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},wt={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},bt={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Dt={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Tt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},St={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}};function _t(e,r){var a=Number(e),t=a%100;if(t>20||t<10)switch(t%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"}var Mt={ordinalNumber:_t,era:M({values:Ot,defaultWidth:"wide"}),quarter:M({values:wt,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:M({values:bt,defaultWidth:"wide"}),day:M({values:Dt,defaultWidth:"wide"}),dayPeriod:M({values:Tt,defaultWidth:"wide",formattingValues:St,defaultFormattingWidth:"wide"})},Oe=Mt;function ne(e){return function(r,a){var t=String(r),n=a||{},o=t.match(e.matchPattern);if(!o)return null;var i=o[0],f=t.match(e.parsePattern);if(!f)return null;var s=e.valueCallback?e.valueCallback(f[0]):f[0];return s=n.valueCallback?n.valueCallback(s):s,{value:s,rest:t.slice(i.length)}}}function W(e){return function(r,a){var t=String(r),n=a||{},o=n.width,i=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],f=t.match(i);if(!f)return null;var s=f[0],d=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth],u;return Object.prototype.toString.call(d)==="[object Array]"?u=It(d,function(h){return h.test(s)}):u=Wt(d,function(h){return h.test(s)}),u=e.valueCallback?e.valueCallback(u):u,u=n.valueCallback?n.valueCallback(u):u,{value:u,rest:t.slice(s.length)}}}function Wt(e,r){for(var a in e)if(e.hasOwnProperty(a)&&r(e[a]))return a}function It(e,r){for(var a=0;a<e.length;a++)if(r(e[a]))return a}var Ct=/^(\d+)(th|st|nd|rd)?/i,kt=/\d+/i,Yt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Pt={any:[/^b/i,/^(a|c)/i]},Ut={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Et={any:[/1/i,/2/i,/3/i,/4/i]},At={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Ft={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},qt={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Lt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Nt={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Ht={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Rt={ordinalNumber:ne({matchPattern:Ct,parsePattern:kt,valueCallback:function(e){return parseInt(e,10)}}),era:W({matchPatterns:Yt,defaultMatchWidth:"wide",parsePatterns:Pt,defaultParseWidth:"any"}),quarter:W({matchPatterns:Ut,defaultMatchWidth:"wide",parsePatterns:Et,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:W({matchPatterns:At,defaultMatchWidth:"wide",parsePatterns:Ft,defaultParseWidth:"any"}),day:W({matchPatterns:qt,defaultMatchWidth:"wide",parsePatterns:Lt,defaultParseWidth:"any"}),dayPeriod:W({matchPatterns:Nt,defaultMatchWidth:"any",parsePatterns:Ht,defaultParseWidth:"any"})},we=Rt;var Qt={code:"en-US",formatDistance:re,formatLong:je,formatRelative:ae,localize:Oe,match:we,options:{weekStartsOn:0,firstWeekContainsDate:1}},be=Qt;function oe(e,r){m(2,arguments);var a=v(r);return K(e,-a)}function x(e,r){for(var a=e<0?"-":"",t=Math.abs(e).toString();t.length<r;)t="0"+t;return a+t}var $t={y:function(e,r){var a=e.getUTCFullYear(),t=a>0?a:1-a;return x(r==="yy"?t%100:t,r.length)},M:function(e,r){var a=e.getUTCMonth();return r==="M"?String(a+1):x(a+1,2)},d:function(e,r){return x(e.getUTCDate(),r.length)},a:function(e,r){var a=e.getUTCHours()/12>=1?"pm":"am";switch(r){case"a":case"aa":return a.toUpperCase();case"aaa":return a;case"aaaaa":return a[0];case"aaaa":default:return a==="am"?"a.m.":"p.m."}},h:function(e,r){return x(e.getUTCHours()%12||12,r.length)},H:function(e,r){return x(e.getUTCHours(),r.length)},m:function(e,r){return x(e.getUTCMinutes(),r.length)},s:function(e,r){return x(e.getUTCSeconds(),r.length)},S:function(e,r){var a=r.length,t=e.getUTCMilliseconds(),n=Math.floor(t*Math.pow(10,a-3));return x(n,r.length)}},b=$t;var Gt=864e5;function ie(e){m(1,arguments);var r=c(e),a=r.getTime();r.setUTCMonth(0,1),r.setUTCHours(0,0,0,0);var t=r.getTime(),n=a-t;return Math.floor(n/Gt)+1}function T(e){m(1,arguments);var r=1,a=c(e),t=a.getUTCDay(),n=(t<r?7:0)+t-r;return a.setUTCDate(a.getUTCDate()-n),a.setUTCHours(0,0,0,0),a}function F(e){m(1,arguments);var r=c(e),a=r.getUTCFullYear(),t=new Date(0);t.setUTCFullYear(a+1,0,4),t.setUTCHours(0,0,0,0);var n=T(t),o=new Date(0);o.setUTCFullYear(a,0,4),o.setUTCHours(0,0,0,0);var i=T(o);return r.getTime()>=n.getTime()?a+1:r.getTime()>=i.getTime()?a:a-1}function se(e){m(1,arguments);var r=F(e),a=new Date(0);a.setUTCFullYear(r,0,4),a.setUTCHours(0,0,0,0);var t=T(a);return t}var Bt=6048e5;function fe(e){m(1,arguments);var r=c(e),a=T(r).getTime()-se(r).getTime();return Math.round(a/Bt)+1}function S(e,r){m(1,arguments);var a=r||{},t=a.locale,n=t&&t.options&&t.options.weekStartsOn,o=n==null?0:v(n),i=a.weekStartsOn==null?o:v(a.weekStartsOn);if(!(i>=0&&i<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var f=c(e),s=f.getUTCDay(),d=(s<i?7:0)+s-i;return f.setUTCDate(f.getUTCDate()-d),f.setUTCHours(0,0,0,0),f}function q(e,r){m(1,arguments);var a=c(e,r),t=a.getUTCFullYear(),n=r||{},o=n.locale,i=o&&o.options&&o.options.firstWeekContainsDate,f=i==null?1:v(i),s=n.firstWeekContainsDate==null?f:v(n.firstWeekContainsDate);if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var d=new Date(0);d.setUTCFullYear(t+1,0,s),d.setUTCHours(0,0,0,0);var u=S(d,r),h=new Date(0);h.setUTCFullYear(t,0,s),h.setUTCHours(0,0,0,0);var l=S(h,r);return a.getTime()>=u.getTime()?t+1:a.getTime()>=l.getTime()?t:t-1}function de(e,r){m(1,arguments);var a=r||{},t=a.locale,n=t&&t.options&&t.options.firstWeekContainsDate,o=n==null?1:v(n),i=a.firstWeekContainsDate==null?o:v(a.firstWeekContainsDate),f=q(e,r),s=new Date(0);s.setUTCFullYear(f,0,i),s.setUTCHours(0,0,0,0);var d=S(s,r);return d}var Xt=6048e5;function ue(e,r){m(1,arguments);var a=c(e),t=S(a,r).getTime()-de(a,r).getTime();return Math.round(t/Xt)+1}var Y={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Vt={G:function(e,r,a){var t=e.getUTCFullYear()>0?1:0;switch(r){case"G":case"GG":case"GGG":return a.era(t,{width:"abbreviated"});case"GGGGG":return a.era(t,{width:"narrow"});case"GGGG":default:return a.era(t,{width:"wide"})}},y:function(e,r,a){if(r==="yo"){var t=e.getUTCFullYear(),n=t>0?t:1-t;return a.ordinalNumber(n,{unit:"year"})}return b.y(e,r)},Y:function(e,r,a,t){var n=q(e,t),o=n>0?n:1-n;if(r==="YY"){var i=o%100;return x(i,2)}return r==="Yo"?a.ordinalNumber(o,{unit:"year"}):x(o,r.length)},R:function(e,r){var a=F(e);return x(a,r.length)},u:function(e,r){var a=e.getUTCFullYear();return x(a,r.length)},Q:function(e,r,a){var t=Math.ceil((e.getUTCMonth()+1)/3);switch(r){case"Q":return String(t);case"QQ":return x(t,2);case"Qo":return a.ordinalNumber(t,{unit:"quarter"});case"QQQ":return a.quarter(t,{width:"abbreviated",context:"formatting"});case"QQQQQ":return a.quarter(t,{width:"narrow",context:"formatting"});case"QQQQ":default:return a.quarter(t,{width:"wide",context:"formatting"})}},q:function(e,r,a){var t=Math.ceil((e.getUTCMonth()+1)/3);switch(r){case"q":return String(t);case"qq":return x(t,2);case"qo":return a.ordinalNumber(t,{unit:"quarter"});case"qqq":return a.quarter(t,{width:"abbreviated",context:"standalone"});case"qqqqq":return a.quarter(t,{width:"narrow",context:"standalone"});case"qqqq":default:return a.quarter(t,{width:"wide",context:"standalone"})}},M:function(e,r,a){var t=e.getUTCMonth();switch(r){case"M":case"MM":return b.M(e,r);case"Mo":return a.ordinalNumber(t+1,{unit:"month"});case"MMM":return a.month(t,{width:"abbreviated",context:"formatting"});case"MMMMM":return a.month(t,{width:"narrow",context:"formatting"});case"MMMM":default:return a.month(t,{width:"wide",context:"formatting"})}},L:function(e,r,a){var t=e.getUTCMonth();switch(r){case"L":return String(t+1);case"LL":return x(t+1,2);case"Lo":return a.ordinalNumber(t+1,{unit:"month"});case"LLL":return a.month(t,{width:"abbreviated",context:"standalone"});case"LLLLL":return a.month(t,{width:"narrow",context:"standalone"});case"LLLL":default:return a.month(t,{width:"wide",context:"standalone"})}},w:function(e,r,a,t){var n=ue(e,t);return r==="wo"?a.ordinalNumber(n,{unit:"week"}):x(n,r.length)},I:function(e,r,a){var t=fe(e);return r==="Io"?a.ordinalNumber(t,{unit:"week"}):x(t,r.length)},d:function(e,r,a){return r==="do"?a.ordinalNumber(e.getUTCDate(),{unit:"date"}):b.d(e,r)},D:function(e,r,a){var t=ie(e);return r==="Do"?a.ordinalNumber(t,{unit:"dayOfYear"}):x(t,r.length)},E:function(e,r,a){var t=e.getUTCDay();switch(r){case"E":case"EE":case"EEE":return a.day(t,{width:"abbreviated",context:"formatting"});case"EEEEE":return a.day(t,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(t,{width:"short",context:"formatting"});case"EEEE":default:return a.day(t,{width:"wide",context:"formatting"})}},e:function(e,r,a,t){var n=e.getUTCDay(),o=(n-t.weekStartsOn+8)%7||7;switch(r){case"e":return String(o);case"ee":return x(o,2);case"eo":return a.ordinalNumber(o,{unit:"day"});case"eee":return a.day(n,{width:"abbreviated",context:"formatting"});case"eeeee":return a.day(n,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(n,{width:"short",context:"formatting"});case"eeee":default:return a.day(n,{width:"wide",context:"formatting"})}},c:function(e,r,a,t){var n=e.getUTCDay(),o=(n-t.weekStartsOn+8)%7||7;switch(r){case"c":return String(o);case"cc":return x(o,r.length);case"co":return a.ordinalNumber(o,{unit:"day"});case"ccc":return a.day(n,{width:"abbreviated",context:"standalone"});case"ccccc":return a.day(n,{width:"narrow",context:"standalone"});case"cccccc":return a.day(n,{width:"short",context:"standalone"});case"cccc":default:return a.day(n,{width:"wide",context:"standalone"})}},i:function(e,r,a){var t=e.getUTCDay(),n=t===0?7:t;switch(r){case"i":return String(n);case"ii":return x(n,r.length);case"io":return a.ordinalNumber(n,{unit:"day"});case"iii":return a.day(t,{width:"abbreviated",context:"formatting"});case"iiiii":return a.day(t,{width:"narrow",context:"formatting"});case"iiiiii":return a.day(t,{width:"short",context:"formatting"});case"iiii":default:return a.day(t,{width:"wide",context:"formatting"})}},a:function(e,r,a){var t=e.getUTCHours(),n=t/12>=1?"pm":"am";switch(r){case"a":case"aa":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"aaa":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return a.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaa":default:return a.dayPeriod(n,{width:"wide",context:"formatting"})}},b:function(e,r,a){var t=e.getUTCHours(),n;switch(t===12?n=Y.noon:t===0?n=Y.midnight:n=t/12>=1?"pm":"am",r){case"b":case"bb":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"bbb":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return a.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbb":default:return a.dayPeriod(n,{width:"wide",context:"formatting"})}},B:function(e,r,a){var t=e.getUTCHours(),n;switch(t>=17?n=Y.evening:t>=12?n=Y.afternoon:t>=4?n=Y.morning:n=Y.night,r){case"B":case"BB":case"BBB":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"BBBBB":return a.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBB":default:return a.dayPeriod(n,{width:"wide",context:"formatting"})}},h:function(e,r,a){if(r==="ho"){var t=e.getUTCHours()%12;return t===0&&(t=12),a.ordinalNumber(t,{unit:"hour"})}return b.h(e,r)},H:function(e,r,a){return r==="Ho"?a.ordinalNumber(e.getUTCHours(),{unit:"hour"}):b.H(e,r)},K:function(e,r,a){var t=e.getUTCHours()%12;return r==="Ko"?a.ordinalNumber(t,{unit:"hour"}):x(t,r.length)},k:function(e,r,a){var t=e.getUTCHours();return t===0&&(t=24),r==="ko"?a.ordinalNumber(t,{unit:"hour"}):x(t,r.length)},m:function(e,r,a){return r==="mo"?a.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):b.m(e,r)},s:function(e,r,a){return r==="so"?a.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):b.s(e,r)},S:function(e,r){return b.S(e,r)},X:function(e,r,a,t){var n=t._originalDate||e,o=n.getTimezoneOffset();if(o===0)return"Z";switch(r){case"X":return Te(o);case"XXXX":case"XX":return I(o);case"XXXXX":case"XXX":default:return I(o,":")}},x:function(e,r,a,t){var n=t._originalDate||e,o=n.getTimezoneOffset();switch(r){case"x":return Te(o);case"xxxx":case"xx":return I(o);case"xxxxx":case"xxx":default:return I(o,":")}},O:function(e,r,a,t){var n=t._originalDate||e,o=n.getTimezoneOffset();switch(r){case"O":case"OO":case"OOO":return"GMT"+De(o,":");case"OOOO":default:return"GMT"+I(o,":")}},z:function(e,r,a,t){var n=t._originalDate||e,o=n.getTimezoneOffset();switch(r){case"z":case"zz":case"zzz":return"GMT"+De(o,":");case"zzzz":default:return"GMT"+I(o,":")}},t:function(e,r,a,t){var n=t._originalDate||e,o=Math.floor(n.getTime()/1e3);return x(o,r.length)},T:function(e,r,a,t){var n=t._originalDate||e,o=n.getTime();return x(o,r.length)}};function De(e,r){var a=e>0?"-":"+",t=Math.abs(e),n=Math.floor(t/60),o=t%60;if(o===0)return a+String(n);var i=r||"";return a+String(n)+i+x(o,2)}function Te(e,r){if(e%60==0){var a=e>0?"-":"+";return a+x(Math.abs(e)/60,2)}return I(e,r)}function I(e,r){var a=r||"",t=e>0?"-":"+",n=Math.abs(e),o=x(Math.floor(n/60),2),i=x(n%60,2);return t+o+a+i}var Se=Vt;function _e(e,r){switch(e){case"P":return r.date({width:"short"});case"PP":return r.date({width:"medium"});case"PPP":return r.date({width:"long"});case"PPPP":default:return r.date({width:"full"})}}function Me(e,r){switch(e){case"p":return r.time({width:"short"});case"pp":return r.time({width:"medium"});case"ppp":return r.time({width:"long"});case"pppp":default:return r.time({width:"full"})}}function zt(e,r){var a=e.match(/(P+)(p+)?/),t=a[1],n=a[2];if(!n)return _e(e,r);var o;switch(t){case"P":o=r.dateTime({width:"short"});break;case"PP":o=r.dateTime({width:"medium"});break;case"PPP":o=r.dateTime({width:"long"});break;case"PPPP":default:o=r.dateTime({width:"full"});break}return o.replace("{{date}}",_e(t,r)).replace("{{time}}",Me(n,r))}var Jt={p:Me,P:zt},We=Jt;var Zt=["D","DD"],Kt=["YY","YYYY"];function Ie(e){return Zt.indexOf(e)!==-1}function Ce(e){return Kt.indexOf(e)!==-1}function le(e,r,a){if(e==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(r,"`) for formatting years to the input `").concat(a,"`; see: https://git.io/fxCyr"));if(e==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(r,"`) for formatting years to the input `").concat(a,"`; see: https://git.io/fxCyr"));if(e==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(r,"`) for formatting days of the month to the input `").concat(a,"`; see: https://git.io/fxCyr"));if(e==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(r,"`) for formatting days of the month to the input `").concat(a,"`; see: https://git.io/fxCyr"))}var er=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,tr=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,rr=/^'([^]*?)'?$/,ar=/''/g,nr=/[a-zA-Z]/;function Q(e,r,a){m(2,arguments);var t=String(r),n=a||{},o=n.locale||be,i=o.options&&o.options.firstWeekContainsDate,f=i==null?1:v(i),s=n.firstWeekContainsDate==null?f:v(n.firstWeekContainsDate);if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var d=o.options&&o.options.weekStartsOn,u=d==null?0:v(d),h=n.weekStartsOn==null?u:v(n.weekStartsOn);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!o.localize)throw new RangeError("locale must contain localize property");if(!o.formatLong)throw new RangeError("locale must contain formatLong property");var l=c(e);if(!te(l))throw new RangeError("Invalid time value");var p=C(l),j=oe(l,p),g={firstWeekContainsDate:s,weekStartsOn:h,locale:o,_originalDate:l},D=t.match(tr).map(function(y){var O=y[0];if(O==="p"||O==="P"){var L=We[O];return L(y,o.formatLong,g)}return y}).join("").match(er).map(function(y){if(y==="''")return"'";var O=y[0];if(O==="'")return or(y);var L=Se[O];if(L)return!n.useAdditionalWeekYearTokens&&Ce(y)&&le(y,r,e),!n.useAdditionalDayOfYearTokens&&Ie(y)&&le(y,r,e),L(j,y,o.localize,g);if(O.match(nr))throw new RangeError("Format string contains an unescaped latin alphabet character `"+O+"`");return y}).join("");return D}function or(e){return e.match(rr)[1].replace(ar,"'")}function $(e,r){m(2,arguments);var a=c(e),t=c(r);return a.getTime()>t.getTime()}function G(e,r){m(2,arguments);var a=c(e),t=c(r);return a.getTime()===t.getTime()}var Ke=xt(Ze()),{__extends:An,__assign:z,__rest:Fn,__decorate:qn,__param:Ln,__metadata:Nn,__awaiter:Hn,__generator:Rn,__exportStar:Qn,__createBinding:$n,__values:Gn,__read:Bn,__spread:Xn,__spreadArrays:Vn,__spreadArray:zn,__await:Jn,__asyncGenerator:Zn,__asyncDelegator:Kn,__asyncValues:eo,__makeTemplateObject:to,__importStar:ro,__importDefault:ao,__classPrivateFieldGet:no,__classPrivateFieldSet:oo}=Ke.default;function et(e){return e.toLowerCase()}var ir=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],sr=/[^A-Z0-9]+/gi;function rt(e,r){r===void 0&&(r={});for(var a=r.splitRegexp,t=a===void 0?ir:a,n=r.stripRegexp,o=n===void 0?sr:n,i=r.transform,f=i===void 0?et:i,s=r.delimiter,d=s===void 0?" ":s,u=tt(tt(e,t,"$1\0$2"),o,"\0"),h=0,l=u.length;u.charAt(h)==="\0";)h++;for(;u.charAt(l-1)==="\0";)l--;return u.slice(h,l).split("\0").map(f).join(d)}function tt(e,r,a){return r instanceof RegExp?e.replace(r,a):r.reduce(function(t,n){return t.replace(n,a)},e)}function at(e,r){return r===void 0&&(r={}),rt(e,z({delimiter:"."},r))}function nt(e,r){return r===void 0&&(r={}),at(e,z({delimiter:"-"},r))}var U=10,w=5,ce={RIGHT:3,TOP:2},E;function fr(e){if(!e||typeof e!="object")return null;let r=new Date(e.start.getTime()),t=new Date(e.end.getTime()).getTime(),n=[];if(!(r.getTime()<=t))throw new RangeError("Invalid interval");let o=r;for(;o.getTime()<=t;)n.push(new Date(o)),o.setMonth(o.getMonth()+1,1);return n}function yo(e){return E=e,dr}function dr(e,r){let{x:a,xScaledLabels:t}=mr(U,r.width-ce.RIGHT,e.x),{min:n,max:o}=cr(e.y,r.margin),i=ot(ce.TOP,r.height-w,n,o,e.y),f=xr(n,o,r.yNumLabels),s=ot(ce.TOP,r.height-w,n,o,f),d=[...t,{pos:t[t.length-1].pos+t[1].pos-t[0].pos}],u=[...s,s[s.length-1]-(s[0]-s[1])],h=ur(a,i,r.line),l=lr(a,i,r);return E`
    <svg viewBox="0 0 ${r.width} ${r.height}">
      <defs>
        <linearGradient id="polygrad">
          <stop
            offset=${r.polygonGradient.offSet1}
            stop-color=${r.polygonGradient.stopColor1}
          />
          <stop
            offset=${r.polygonGradient.offSet2}
            stop-color=${r.polygonGradient.stopColor2}
          />
        </linearGradient>
      </defs>

      <title>${r.title}</title>
      ${u.map(p=>J(U,r.width,p,p,r.yLabel))}
      ${d.map(({pos:p},j)=>{if(j!==0)return J(p,p,0,r.height-w,r.xLabel)})}
      ${h} ${l}
      ${J(U,U,0,r.height-w,r.xAxis)}
      ${J(U,r.width,r.height-w,r.height-w,r.yAxis)}
      ${xe(0,(r.height-w)/2,r.yLabel.name,ve({style:"transform: rotate(-90deg);"},r.yLabel),{style:"transform: translate(-15%, 55%)"})}
      ${f.map((p,j)=>{let g=s[j];return xe(U/2,g+.5,p,r.yLabel)})}
      ${t.map(({pos:p,name:j})=>xe(p,r.height-w/2,j,r.xLabel))}
    </svg>
  `}function ur(e,r,a){if(a=Z(a),e.length!==r.length)throw new Error(`x and y parameters need to be of same length. They are not: x (${e.length}) and y (${r.length}).`);if(e.length===0)throw new Error("Length of data x and y cannot be zero");let t="";for(let n=0;n<e.length;n++)t+=`${e[n]},${r[n]} `;return t=t.slice(0,-1),E`
    <polyline ...${a} points=${t} />
  `}function lr(e,r,a){let t=Z(a.polygon);if(e.length!==r.length)throw new Error(`x and y parameters need to be of same length. They are not: x (${e.length}) and y (${r.length}).`);if(e.length===0)throw new Error("Length of data x and y cannot be zero");let n="";n+=`${e[0]},${a.height-w} `;for(let o=0;o<e.length;o++)n+=`${e[o]},${r[o]} `;return n+=`${e[e.length-1]},${a.height-w} `,E`
    <polygon ...${t} points=${n} />
  `}function hr(e){return e.sort((r,a)=>r-a)}function pr(e,r,a){let t=a(r[r.length-1],r[0]);return e/t}function jo(e,r){let a=[],t=[...r];for(let n=0;n<e.length;n++){let o=e[n];for(let i=0;i<t.length;i++){let f=t[i];(G(o,f)||$(o,f))&&(a.push(n),t.splice(i,1),n=0)}}if(t.length>0)for(let n=e.length;n<e.length+t.length;n++)a.push(n);return a}function mr(e,r,a,t=H,n=k){a=hr(a);let o=pr(r-e,a,n),i=a[0],f=a.map(u=>{let h=k(u,i);return e+h*o}),d=fr({start:a[0],end:a[a.length-1]}).map(u=>{let h=k(u,i),l=Q(u,"MMM yy");return{name:[l.slice(0,-2),"'",l.slice(-2)].join(""),pos:e+h*o}});return{x:f,xScaledLabels:d}}function cr(e,r=0){let a=Math.max.apply(Math,e)+r,t=Math.min.apply(Math,e)-r;return t<0&&(t=0),{min:t,max:a}}function ot(e,r,a,t,n){let o=i=>r-(r-e)*(i-a)/(t-a);return n.map(o)}function Z(e){let r={};return Object.keys(e).forEach(a=>{r[nt(a)]=e[a]}),r}function J(e,r,a,t,n){return n=Z(n),E`
    <g ...${n}>
      <line x1=${e} x2=${r} y1=${a} y2=${t}></line>
    </g>
  `}function xe(e,r,a,t,n){return t=Z(t),E`
    <g ...${n}>
      <text ...${t} x=${e} y=${r}>${a}</text>
    </g>
  `}function xr(e,r,a){let n=(r-e)/a,o=Math.pow(10,Math.floor(Math.log10(n))),i;n>o?i=Math.round(n/o):i=Math.round(o/n);let f=[],s=Math.floor(Math.log10(e)),d;s<=2?d=0:d=Math.pow(10,s);for(let u=d;u<=r;u+=o*i)u>e&&u<r&&f.push(u);return f}})();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
//# sourceMappingURL=browser-svg-line-chart.js.map
