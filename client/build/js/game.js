!function(){var t={404:function(t,n,r){var i={'./player/arm.png':726,'./player/body.png':129};function e(t){var n=o(t);return r(n)}function o(t){if(!r.t(i,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code='MODULE_NOT_FOUND',n}return i[t]}e.keys=function(){return Object.keys(i)},e.resolve=o,t.exports=e,e.id=404},553:function(t,n,r){'use strict';r.r(n);var i=r(409),e=r.n(i);class o{constructor(t,n){n.imageSmoothingEnabled&&(n.imageSmoothingEnabled=!1);for(const t of e()){const r=t+'ImageSmoothingEnabled';n[r]&&(n[r]=!1)}}}o.i=!0,n.default=o},599:function(t,n,r){'use strict';r.r(n),n.default=class{constructor(){Array.prototype.remove=function(t){let n=this;const r=n.indexOf(t),i=n.length-1;if(-1===r)throw Error('Object is not in array');if(r!==n.length){const t=n[r];n[r]=n[i],n[i]=t}n.pop()}}}},435:function(t,n,r){'use strict';r.r(n),n.default=class{constructor(){Number.prototype.map=function(t,n,r,i){return(this-t)*(i-r)/(n-t)+r},Number.prototype.degree=function(){return this*Math.PI/180}}}},458:function(t,n,r){'use strict';r.r(n);var i=r(409),e=r.n(i);n.default=class{constructor(t){for(const n of e()){const r=n+'RequestAnimationFrame',i=n+'CancelRequestAnimationFrame',e=n+'CancelAnimationFrame';if(t[r]&&t[i]&&t[e]){'requestAnimationFrame'in t||(t.requestAnimationFrame=t[r]),'cancelAnimationFrame'in t||(t.cancelAnimationFrame=t[e]||t[i]);break}}}}},617:function(t,n,r){var i={'./antialiasing.js':553,'./arrayRemove.js':599,'./numberMap.js':435,'./requestAnimationFrame.js':458};function e(t){var n=o(t);return r(n)}function o(t){if(!r.t(i,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code='MODULE_NOT_FOUND',n}return i[t]}e.keys=function(){return Object.keys(i)},e.resolve=o,t.exports=e,e.id=617},258:function(t){!function(n){t.exports=n;var r={o:function(t,n){return o(this,t).push(n),this},once:function(t,n){var r=this;return i.u=n,o(r,t).push(i),r;function i(){e.call(r,t,i),n.apply(this,arguments)}},h:e,v:function(t,n){var r=this,i=o(r,t,!0);if(!i)return!1;var e=arguments.length;if(1===e)i.forEach(u);else if(2===e)i.forEach(f);else{var s=Array.prototype.slice.call(arguments,1);i.forEach(c)}return!!i.length;function u(t){t.call(r)}function f(t){t.call(r,n)}function c(t){t.apply(r,s)}}};function i(t){for(var n in r)t[n]=r[n];return t}function e(t,n){var r,i=this;if(arguments.length){if(n){if(r=o(i,t,!0)){if(!(r=r.filter(s)).length)return e.call(i,t);i.l[t]=r}}else if((r=i.l)&&(delete r[t],!Object.keys(r).length))return e.call(i)}else delete i.l;return i;function s(t){return t!==n&&t.u!==n}}function o(t,n,r){if(!r||t.l){var i=t.l||(t.l={});return i[n]||(i[n]=[])}}i(n.prototype),n.p=i}(function t(){if(!(this instanceof t))return new t})},726:function(t,n,r){t.exports=r.m+'img/arm.png'},129:function(t,n,r){t.exports=r.m+'img/body.png'},645:function(t,n){n.read=function(t,n,r,i,e){var o,s,u=8*e-i-1,f=(1<<u)-1,c=f>>1,a=-7,h=r?e-1:0,v=r?-1:1,l=t[n+h];for(h+=v,o=l&(1<<-a)-1,l>>=-a,a+=u;a>0;o=256*o+t[n+h],h+=v,a-=8);for(s=o&(1<<-a)-1,o>>=-a,a+=i;a>0;s=256*s+t[n+h],h+=v,a-=8);if(0===o)o=1-c;else{if(o===f)return s?NaN:1/0*(l?-1:1);s+=Math.pow(2,i),o-=c}return(l?-1:1)*s*Math.pow(2,o-i)},n.write=function(t,n,r,i,e,o){var s,u,f,c=8*o-e-1,a=(1<<c)-1,h=a>>1,v=23===e?Math.pow(2,-24)-Math.pow(2,-77):0,l=i?0:o-1,w=i?1:-1,y=n<0||0===n&&1/n<0?1:0;for(n=Math.abs(n),isNaN(n)||n===1/0?(u=isNaN(n)?1:0,s=a):(s=Math.floor(Math.log(n)/Math.LN2),n*(f=Math.pow(2,-s))<1&&(s--,f*=2),(n+=s+h>=1?v/f:v*Math.pow(2,1-h))*f>=2&&(s++,f/=2),s+h>=a?(u=0,s=a):s+h>=1?(u=(n*f-1)*Math.pow(2,e),s+=h):(u=n*Math.pow(2,h-1)*Math.pow(2,e),s=0));e>=8;t[r+l]=255&u,l+=w,u/=256,e-=8);for(s=s<<e|u,c+=e;c>0;t[r+l]=255&s,l+=w,s/=256,c-=8);t[r+l-w]|=128*y}},166:function(t,n){!function(t){var n,r='undefined',i=r!==typeof Buffer&&Buffer,e=r!==typeof Uint8Array&&Uint8Array,o=r!==typeof ArrayBuffer&&ArrayBuffer,s=[0,0,0,0,0,0,0,0],u=Array.isArray||function(t){return!!t&&'[object Array]'==Object.prototype.toString.call(t)},f=4294967296;function c(u,c,b){var E=c?0:4,g=c?4:0,M=c?0:3,U=c?1:2,N=c?2:1,O=c?3:0,_=c?d:m,k=c?p:A,R=T.prototype,D='is'+u,I='_'+D;return R.buffer=void 0,R.offset=0,R[I]=!0,R.A=x,R.toString=function(t){var n=this.buffer,r=this.offset,i=S(n,r+E),e=S(n,r+g),o='',s=!b&&2147483648&i;for(s&&(i=~i,e=f-e),t=t||10;;){var u=i%t*f+e;if(i=Math.floor(i/t),e=Math.floor(u/t),o=(u%t).toString(t)+o,!i&&!e)break}return s&&(o='-'+o),o},R.toJSON=x,R.toArray=a,i&&(R.g=h),e&&(R.M=v),T[D]=function(t){return!(!t||!t[I])},t[u]=T,T;function T(t,i,u,c){return this instanceof T?function(t,i,u,c,a){e&&o&&(i instanceof o&&(i=new e(i)),c instanceof o&&(c=new e(c))),i||u||c||n?(l(i,u)||(a=u,c=i,u=0,i=new(n||Array)(8)),t.buffer=i,t.offset=u|=0,r!==typeof c&&('string'==typeof c?function(t,n,r,i){var e=0,o=r.length,s=0,u=0;'-'===r[0]&&e++;for(var c=e;e<o;){var a=parseInt(r[e++],i);if(!(a>=0))break;u=u*i+a,s=s*i+Math.floor(u/f),u%=f}c&&(s=~s,u?u=f-u:s++),j(t,n+E,s),j(t,n+g,u)}(i,u,c,a||10):l(c,a)?w(i,u,c,a):'number'==typeof a?(j(i,u+E,c),j(i,u+g,a)):c>0?_(i,u,c):c<0?k(i,u,c):w(i,u,s,0))):t.buffer=y(s,0)}(this,t,i,u,c):new T(t,i,u,c)}function x(){var t=this.buffer,n=this.offset,r=S(t,n+E),i=S(t,n+g);return b||(r|=0),r?r*f+i:i}function j(t,n,r){t[n+O]=255&r,r>>=8,t[n+N]=255&r,r>>=8,t[n+U]=255&r,r>>=8,t[n+M]=255&r}function S(t,n){return 16777216*t[n+M]+(t[n+U]<<16)+(t[n+N]<<8)+t[n+O]}}function a(t){var r=this.buffer,i=this.offset;return n=null,!1!==t&&0===i&&8===r.length&&u(r)?r:y(r,i)}function h(t){var r=this.buffer,e=this.offset;if(n=i,!1!==t&&0===e&&8===r.length&&Buffer.isBuffer(r))return r;var o=new i(8);return w(o,0,r,e),o}function v(t){var r=this.buffer,i=this.offset,s=r.buffer;if(n=e,!1!==t&&0===i&&s instanceof o&&8===s.byteLength)return s;var u=new e(8);return w(u,0,r,i),u.buffer}function l(t,n){var r=t&&t.length;return n|=0,r&&n+8<=r&&'string'!=typeof t[n]}function w(t,n,r,i){n|=0,i|=0;for(var e=0;e<8;e++)t[n++]=255&r[i++]}function y(t,n){return Array.prototype.slice.call(t,n,n+8)}function d(t,n,r){for(var i=n+8;i>n;)t[--i]=255&r,r/=256}function p(t,n,r){var i=n+8;for(r++;i>n;)t[--i]=255&-r^255,r/=256}function m(t,n,r){for(var i=n+8;n<i;)t[n++]=255&r,r/=256}function A(t,n,r){var i=n+8;for(r++;n<i;)t[n++]=255&-r^255,r/=256}c('Uint64BE',!0,!0),c('Int64BE',!0,!1),c('Uint64LE',!1,!0),c('Int64LE',!1,!1)}('string'!=typeof n.nodeName?n:this||{})},826:function(t){var n={}.toString;t.exports=Array.isArray||function(t){return'[object Array]'==n.call(t)}},374:function(t,n,r){n.encode=r(764).encode,n.decode=r(299).decode,n.U=r(883).U,n.N=r(441).N,n.O=r(832).O,n._=r(766)._},679:function(t){function n(t){return t&&t.isBuffer&&t}t.exports=n('undefined'!=typeof Buffer&&Buffer)||n(this.k)||n('undefined'!=typeof window&&window.k)||this.k},947:function(t,n){n.R=function(t,n,r,i){var e;r||(r=0),i||0===i||(i=this.length),n||(n=0);var o=i-r;if(t===this&&r<n&&n<i)for(e=o-1;e>=0;e--)t[e+n]=this[e+r];else for(e=0;e<o;e++)t[e+n]=this[e+r];return o},n.toString=function(t,n,r){var i=this,e=0|n;r||(r=i.length);for(var o='',s=0;e<r;)(s=i[e++])<128?o+=String.fromCharCode(s):(192==(224&s)?s=(31&s)<<6|63&i[e++]:224==(240&s)?s=(15&s)<<12|(63&i[e++])<<6|63&i[e++]:240==(248&s)&&(s=(7&s)<<18|(63&i[e++])<<12|(63&i[e++])<<6|63&i[e++]),s>=65536?(s-=65536,o+=String.fromCharCode(55296+(s>>>10),56320+(1023&s))):o+=String.fromCharCode(s));return o},n.write=function(t,n){for(var r=this,i=n||(n|=0),e=t.length,o=0,s=0;s<e;)(o=t.charCodeAt(s++))<128?r[i++]=o:o<2048?(r[i++]=192|o>>>6,r[i++]=128|63&o):o<55296||o>57343?(r[i++]=224|o>>>12,r[i++]=128|o>>>6&63,r[i++]=128|63&o):(o=65536+(o-55296<<10|t.charCodeAt(s++)-56320),r[i++]=240|o>>>18,r[i++]=128|o>>>12&63,r[i++]=128|o>>>6&63,r[i++]=128|63&o);return i-n}},683:function(t,n,r){var i=r(895),e=t.exports=o(0);function o(t){return new Array(t)}e.D=o,e.concat=i.concat,e.from=function(t){if(!i.isBuffer(t)&&i.isView(t))t=i.Uint8Array.from(t);else if(i.I(t))t=new Uint8Array(t);else{if('string'==typeof t)return i.from.call(e,t);if('number'==typeof t)throw new TypeError('"value" argument must not be a number')}return Array.prototype.slice.call(t)}},580:function(t,n,r){var i=r(895),e=i.global,o=t.exports=i.T?s(0):[];function s(t){return new e(t)}o.D=i.T&&e.D||s,o.concat=i.concat,o.from=function(t){if(!i.isBuffer(t)&&i.isView(t))t=i.Uint8Array.from(t);else if(i.I(t))t=new Uint8Array(t);else{if('string'==typeof t)return i.from.call(o,t);if('number'==typeof t)throw new TypeError('"value" argument must not be a number')}return e.from&&1!==e.from.length?e.from(t):new e(t)}},190:function(t,n,r){var i=r(947);n.R=f,n.slice=c,n.toString=function(t,n,r){var o=!s&&e.isBuffer(this)?this.toString:i.toString;return o.apply(this,arguments)},n.write=function(){return(this.write||i.write).apply(this,arguments)};var e=r(895),o=e.global,s=e.T&&'j'in o,u=s&&!o.j;function f(t,n,r,o){var s=e.isBuffer(this),f=e.isBuffer(t);if(s&&f)return this.R(t,n,r,o);if(u||s||f||!e.isView(this)||!e.isView(t))return i.R.call(this,t,n,r,o);var a=r||null!=o?c.call(this,r,o):this;return t.set(a,n),a.length}function c(t,n){var r=this.slice||!u&&this.subarray;if(r)return r.call(this,t,n);var i=e.D.call(this,n-t);return f.call(this,i,0,t,n),i}},37:function(t,n,r){var i=r(895),e=t.exports=i.S?o(0):[];function o(t){return new Uint8Array(t)}e.D=o,e.concat=i.concat,e.from=function(t){if(i.isView(t)){var n=t.byteOffset,r=t.byteLength;(t=t.buffer).byteLength!==r&&(t.slice?t=t.slice(n,n+r):(t=new Uint8Array(t)).byteLength!==r&&(t=Array.prototype.slice.call(t,n,n+r)))}else{if('string'==typeof t)return i.from.call(e,t);if('number'==typeof t)throw new TypeError('"value" argument must not be a number')}return new Uint8Array(t)}},895:function(t,n,r){var i=n.global=r(679),e=n.T=i&&!!i.isBuffer,o=n.S='undefined'!=typeof ArrayBuffer,s=n.isArray=r(826);n.I=o?function(t){return t instanceof ArrayBuffer||w(t)}:p;var u=n.isBuffer=e?i.isBuffer:p,f=n.isView=o?ArrayBuffer.isView||m('ArrayBuffer','buffer'):p;n.D=l,n.concat=function(t,r){r||(r=0,Array.prototype.forEach.call(t,function(t){r+=t.length}));var i=this!==n&&this||t[0],e=l.call(i,r),o=0;return Array.prototype.forEach.call(t,function(t){o+=v.R.call(t,e,o)}),e},n.from=function(t){return'string'==typeof t?y.call(this,t):d(this).from(t)};var c=n.Array=r(683),a=n.k=r(580),h=n.Uint8Array=r(37),v=n.prototype=r(190);function l(t){return d(this).D(t)}var w=m('ArrayBuffer');function y(t){var n=3*t.length,r=l.call(this,n),i=v.write.call(r,t);return n!==i&&(r=v.slice.call(r,0,i)),r}function d(t){return u(t)?a:f(t)?h:s(t)?c:e?a:o?h:c}function p(){return!1}function m(t,n){return t='[object '+t+']',function(r){return null!=r&&{}.toString.call(n?r[n]:r)===t}}},877:function(t,n,r){var i=r(826);n.O=u,n.install=function(t){for(var n in t)o.prototype[n]=s(o.prototype[n],t[n])},n.filter=function(t){return i(t)?function(t){return t=t.slice(),function(r){return t.reduce(n,r)};function n(t,n){return n(t)}}(t):t};var e=r(895);function o(t){if(!(this instanceof o))return new o(t);this.options=t,this.init()}function s(t,n){return t&&n?function(){return t.apply(this,arguments),n.apply(this,arguments)}:t||n}function u(t){return new o(t)}o.prototype.init=function(){var t=this.options;return t&&t.P&&(this.B=e.Uint8Array),this},n.F=u({F:!0})},766:function(t,n,r){r(350),r(312),n._={F:r(877).F}},170:function(t,n,r){n.C=e;var i=r(350).F;function e(t){if(!(this instanceof e))return new e(t);if(t&&(this.options=t,t._)){var n=this._=t._;n.B&&(this.B=n.B)}}r(822).Y.p(e.prototype),e.prototype._=i,e.prototype.fetch=function(){return this._.decode(this)}},299:function(t,n,r){n.decode=function(t,n){var r=new i(n);return r.write(t),r.read()};var i=r(170).C},441:function(t,n,r){n.N=o;var i=r(258),e=r(170).C;function o(t){if(!(this instanceof o))return new o(t);e.call(this,t)}o.prototype=new e,i.p(o.prototype),o.prototype.decode=function(t){arguments.length&&this.write(t),this.flush()},o.prototype.push=function(t){this.v('data',t)},o.prototype.end=function(t){this.decode(t),this.v('end')}},517:function(t,n,r){n.L=e;var i=r(312).F;function e(t){if(!(this instanceof e))return new e(t);if(t&&(this.options=t,t._)){var n=this._=t._;n.B&&(this.B=n.B)}}r(822).$.p(e.prototype),e.prototype._=i,e.prototype.write=function(t){this._.encode(this,t)}},764:function(t,n,r){n.encode=function(t,n){var r=new i(n);return r.write(t),r.read()};var i=r(517).L},883:function(t,n,r){n.U=o;var i=r(258),e=r(517).L;function o(t){if(!(this instanceof o))return new o(t);e.call(this,t)}o.prototype=new e,i.p(o.prototype),o.prototype.encode=function(t){this.write(t),this.v('data',this.read())},o.prototype.end=function(t){arguments.length&&this.encode(t),this.flush(),this.v('end')}},83:function(t,n,r){n.J=function t(n,r){if(!(this instanceof t))return new t(n,r);this.buffer=i.from(n),this.type=r};var i=r(895)},431:function(t,n,r){n.W=function(t){t.H(14,Error,[h,f]),t.H(1,EvalError,[h,f]),t.H(2,RangeError,[h,f]),t.H(3,ReferenceError,[h,f]),t.H(4,SyntaxError,[h,f]),t.H(5,TypeError,[h,f]),t.H(6,URIError,[h,f]),t.H(10,RegExp,[a,f]),t.H(11,Boolean,[c,f]),t.H(12,String,[c,f]),t.H(13,Date,[Number,f]),t.H(15,Number,[c,f]),'undefined'!=typeof Uint8Array&&(t.H(17,Int8Array,s),t.H(18,Uint8Array,s),t.H(19,Int16Array,s),t.H(20,Uint16Array,s),t.H(21,Int32Array,s),t.H(22,Uint32Array,s),t.H(23,Float32Array,s),'undefined'!=typeof Float64Array&&t.H(24,Float64Array,s),'undefined'!=typeof Uint8ClampedArray&&t.H(25,Uint8ClampedArray,s),t.H(26,ArrayBuffer,s),t.H(29,DataView,s)),e.T&&t.H(27,o,e.from)};var i,e=r(895),o=e.global,s=e.Uint8Array.from,u={name:1,message:1,stack:1,columnNumber:1,fileName:1,lineNumber:1};function f(t){return i||(i=r(764).encode),i(t)}function c(t){return t.valueOf()}function a(t){(t=RegExp.prototype.toString.call(t).split('/')).shift();var n=[t.pop()];return n.unshift(t.join('/')),n}function h(t){var n={};for(var r in u)n[r]=t[r];return n}},600:function(t,n,r){n.V=function(t){t.X(14,[u,c(Error)]),t.X(1,[u,c(EvalError)]),t.X(2,[u,c(RangeError)]),t.X(3,[u,c(ReferenceError)]),t.X(4,[u,c(SyntaxError)]),t.X(5,[u,c(TypeError)]),t.X(6,[u,c(URIError)]),t.X(10,[u,f]),t.X(11,[u,a(Boolean)]),t.X(12,[u,a(String)]),t.X(13,[u,a(Date)]),t.X(15,[u,a(Number)]),'undefined'!=typeof Uint8Array&&(t.X(17,a(Int8Array)),t.X(18,a(Uint8Array)),t.X(19,[h,a(Int16Array)]),t.X(20,[h,a(Uint16Array)]),t.X(21,[h,a(Int32Array)]),t.X(22,[h,a(Uint32Array)]),t.X(23,[h,a(Float32Array)]),'undefined'!=typeof Float64Array&&t.X(24,[h,a(Float64Array)]),'undefined'!=typeof Uint8ClampedArray&&t.X(25,a(Uint8ClampedArray)),t.X(26,h),t.X(29,[h,a(DataView)])),e.T&&t.X(27,a(o))};var i,e=r(895),o=e.global,s={name:1,message:1,stack:1,columnNumber:1,fileName:1,lineNumber:1};function u(t){return i||(i=r(299).decode),i(t)}function f(t){return RegExp.apply(null,t)}function c(t){return function(n){var r=new t;for(var i in s)r[i]=n[i];return r}}function a(t){return function(n){return new t(n)}}function h(t){return new Uint8Array(t).buffer}},832:function(t,n,r){r(350),r(312),n.O=r(877).O},822:function(t,n,r){n.Y=o,n.$=s;var i=r(895),e='BUFFER_SHORTAGE';function o(){if(!(this instanceof o))return new o}function s(){if(!(this instanceof s))return new s}function u(){return this.K&&this.K.length?(this.flush(),this.q()):this.fetch()}function f(t){(this.K||(this.K=[])).push(t)}function c(t){return function(n){for(var r in t)n[r]=t[r];return n}}o.p=c({B:i,write:function(t){var n=this.offset?i.prototype.slice.call(this.buffer,this.offset):this.buffer;this.buffer=n?t?this.B.concat([n,t]):n:t,this.offset=0},fetch:function(){throw new Error('method not implemented: fetch()')},flush:function(){for(;this.offset<this.buffer.length;){var t,n=this.offset;try{t=this.fetch()}catch(t){if(t&&t.message!=e)throw t;this.offset=n;break}this.push(t)}},push:f,q:function(){return(this.K||(this.K=[])).shift()},read:u,G:function(t){var n=this.offset,r=n+t;if(r>this.buffer.length)throw new Error(e);return this.offset=r,n},offset:0}),o.p(o.prototype),s.p=c({B:i,write:function(){throw new Error('method not implemented: write()')},fetch:function(){var t=this.start;if(t<this.offset){var n=this.start=this.offset;return i.prototype.slice.call(this.buffer,t,n)}},flush:function(){for(;this.start<this.offset;){var t=this.fetch();t&&this.push(t)}},push:f,q:function(){var t=this.K||(this.K=[]),n=t.length>1?this.B.concat(t):t[0];return t.length=0,n},read:u,G:function(t){var n=0|t;if(this.buffer){var r=this.buffer.length,i=0|this.offset,e=i+n;if(e<r)return this.offset=e,i;this.flush(),t=Math.max(t,Math.min(2*r,this.Z))}return t=Math.max(t,this.tt),this.buffer=this.B.D(t),this.start=0,this.offset=n,0},send:function(t){var n=t.length;if(n>this.tt)this.flush(),this.push(t);else{var r=this.G(n);i.prototype.R.call(t,this.buffer,r)}},Z:65536,tt:2048,offset:0,start:0}),s.p(s.prototype)},350:function(t,n,r){var i=r(83).J,e=r(600),o=r(76).nt,s=r(738),u=r(877);function f(){var t=this.options;return this.decode=function(t){var n=s.rt(t);return function(t){var r=o(t),i=n[r];if(!i)throw new Error('Invalid type: '+(r?'0x'+r.toString(16):r));return i(t)}}(t),t&&t.F&&e.V(this),this}u.install({X:function(t,n){(this.it||(this.it=[]))[t]=u.filter(n)},et:function(t){return(this.it||(this.it=[]))[t]||function(n){return new i(n,t)}},init:f}),n.F=f.call(u.F)},76:function(t,n,r){var i=r(645),e=r(166),o=e.ot,s=e.st;n.ut=function(t){var n=u.S&&t&&t.ft,r=t&&t.ct;return{map:c&&t&&t.at?h:a,ht:v,vt:l,lt:n?y:w,wt:d,yt:p,dt:A,At:E,bt:M(8,r?O:U),Et:m,gt:b,Mt:g,ct:M(8,r?_:N),Ut:M(4,k),Nt:M(8,R)}},n.nt=p;var u=r(895),f=r(190),c='undefined'!=typeof Map;function a(t,n){var r,i={},e=new Array(n),o=new Array(n),s=t._.decode;for(r=0;r<n;r++)e[r]=s(t),o[r]=s(t);for(r=0;r<n;r++)i[e[r]]=o[r];return i}function h(t,n){var r,i=new Map,e=new Array(n),o=new Array(n),s=t._.decode;for(r=0;r<n;r++)e[r]=s(t),o[r]=s(t);for(r=0;r<n;r++)i.set(e[r],o[r]);return i}function v(t,n){for(var r=new Array(n),i=t._.decode,e=0;e<n;e++)r[e]=i(t);return r}function l(t,n){var r=t.G(n),i=r+n;return f.toString.call(t.buffer,'utf-8',r,i)}function w(t,n){var r=t.G(n),i=r+n,e=f.slice.call(t.buffer,r,i);return u.from(e)}function y(t,n){var r=t.G(n),i=r+n,e=f.slice.call(t.buffer,r,i);return u.Uint8Array.from(e).buffer}function d(t,n){var r=t.G(n+1),i=t.buffer[r++],e=r+n,o=t._.et(i);if(!o)throw new Error('Invalid ext type: '+(i?'0x'+i.toString(16):i));return o(f.slice.call(t.buffer,r,e))}function p(t){var n=t.G(1);return t.buffer[n]}function m(t){var n=t.G(1),r=t.buffer[n];return 128&r?r-256:r}function A(t){var n=t.G(2),r=t.buffer;return r[n++]<<8|r[n]}function b(t){var n=t.G(2),r=t.buffer,i=r[n++]<<8|r[n];return 32768&i?i-65536:i}function E(t){var n=t.G(4),r=t.buffer;return 16777216*r[n++]+(r[n++]<<16)+(r[n++]<<8)+r[n]}function g(t){var n=t.G(4),r=t.buffer;return r[n++]<<24|r[n++]<<16|r[n++]<<8|r[n]}function M(t,n){return function(r){var i=r.G(t);return n.call(r.buffer,i,!0)}}function U(t){return new o(this,t).A()}function N(t){return new s(this,t).A()}function O(t){return new o(this,t)}function _(t){return new s(this,t)}function k(t){return i.read(this,t,!1,23,4)}function R(t){return i.read(this,t,!1,52,8)}},738:function(t,n,r){var i=r(76);function e(t){var n,r=new Array(256);for(n=0;n<=127;n++)r[n]=o(n);for(n=128;n<=143;n++)r[n]=u(n-128,t.map);for(n=144;n<=159;n++)r[n]=u(n-144,t.ht);for(n=160;n<=191;n++)r[n]=u(n-160,t.vt);for(r[192]=o(null),r[193]=null,r[194]=o(!1),r[195]=o(!0),r[196]=s(t.yt,t.lt),r[197]=s(t.dt,t.lt),r[198]=s(t.At,t.lt),r[199]=s(t.yt,t.wt),r[200]=s(t.dt,t.wt),r[201]=s(t.At,t.wt),r[202]=t.Ut,r[203]=t.Nt,r[204]=t.yt,r[205]=t.dt,r[206]=t.At,r[207]=t.bt,r[208]=t.Et,r[209]=t.gt,r[210]=t.Mt,r[211]=t.ct,r[212]=u(1,t.wt),r[213]=u(2,t.wt),r[214]=u(4,t.wt),r[215]=u(8,t.wt),r[216]=u(16,t.wt),r[217]=s(t.yt,t.vt),r[218]=s(t.dt,t.vt),r[219]=s(t.At,t.vt),r[220]=s(t.dt,t.ht),r[221]=s(t.At,t.ht),r[222]=s(t.dt,t.map),r[223]=s(t.At,t.map),n=224;n<=255;n++)r[n]=o(n-256);return r}function o(t){return function(){return t}}function s(t,n){return function(r){var i=t(r);return n(r,i)}}function u(t,n){return function(r){return n(r,t)}}n.rt=function(t){var n=i.ut(t);return t&&t.Ot?function(t){var n,r=e(t).slice();for(r[217]=r[196],r[218]=r[197],r[219]=r[198],n=160;n<=191;n++)r[n]=u(n-160,t.lt);return r}(n):e(n)}},312:function(t,n,r){var i=r(83).J,e=r(431),o=r(943),s=r(877);function u(){var t=this.options;return this.encode=function(t){var n=o._t(t);return function(t,r){var i=n[typeof r];if(!i)throw new Error('Unsupported type "'+typeof r+'": '+r);i(t,r)}}(t),t&&t.F&&e.W(this),this}s.install({H:function(t,n,r){r=s.filter(r);var e=n.name;function o(n){return r&&(n=r(n)),new i(n,t)}e&&'Object'!==e?(this.kt||(this.kt={}))[e]=o:(this.Rt||(this.Rt=[])).unshift([n,o])},Dt:function(t){var n=this.kt||(this.kt={}),r=t.constructor,i=r&&r.name&&n[r.name];if(i)return i;for(var e=this.Rt||(this.Rt=[]),o=e.length,s=0;s<o;s++){var u=e[s];if(r===u[0])return u[1]}},init:u}),n.F=u.call(s.F)},598:function(t,n,r){var i=r(645),e=r(166),o=e.ot,s=e.st,u=r(370).w,f=r(895),c=f.global,a=f.T&&'j'in c&&!c.j,h=f.T&&c.prototype||{};function v(){var t=u.slice();return t[196]=l(196),t[197]=w(197),t[198]=y(198),t[199]=l(199),t[200]=w(200),t[201]=y(201),t[202]=d(202,4,h.It||A,!0),t[203]=d(203,8,h.Tt||b,!0),t[204]=l(204),t[205]=w(205),t[206]=y(206),t[207]=d(207,8,p),t[208]=l(208),t[209]=w(209),t[210]=y(210),t[211]=d(211,8,m),t[217]=l(217),t[218]=w(218),t[219]=y(219),t[220]=w(220),t[221]=y(221),t[222]=w(222),t[223]=y(223),t}function l(t){return function(n,r){var i=n.G(2),e=n.buffer;e[i++]=t,e[i]=r}}function w(t){return function(n,r){var i=n.G(3),e=n.buffer;e[i++]=t,e[i++]=r>>>8,e[i]=r}}function y(t){return function(n,r){var i=n.G(5),e=n.buffer;e[i++]=t,e[i++]=r>>>24,e[i++]=r>>>16,e[i++]=r>>>8,e[i]=r}}function d(t,n,r,i){return function(e,o){var s=e.G(n+1);e.buffer[s++]=t,r.call(e.buffer,o,s,i)}}function p(t,n){new o(this,n,t)}function m(t,n){new s(this,n,t)}function A(t,n){i.write(this,t,n,!1,23,4)}function b(t,n){i.write(this,t,n,!1,52,8)}n.xt=function(t){return t&&t.P?((n=v())[202]=d(202,4,A),n[203]=d(203,8,b),n):a||f.T&&t&&t.jt?function(){var t=u.slice();return t[196]=d(196,1,c.prototype.St),t[197]=d(197,2,c.prototype.Pt),t[198]=d(198,4,c.prototype.Bt),t[199]=d(199,1,c.prototype.St),t[200]=d(200,2,c.prototype.Pt),t[201]=d(201,4,c.prototype.Bt),t[202]=d(202,4,c.prototype.It),t[203]=d(203,8,c.prototype.Tt),t[204]=d(204,1,c.prototype.St),t[205]=d(205,2,c.prototype.Pt),t[206]=d(206,4,c.prototype.Bt),t[207]=d(207,8,p),t[208]=d(208,1,c.prototype.Ft),t[209]=d(209,2,c.prototype.Ct),t[210]=d(210,4,c.prototype.Yt),t[211]=d(211,8,m),t[217]=d(217,1,c.prototype.St),t[218]=d(218,2,c.prototype.Pt),t[219]=d(219,4,c.prototype.Bt),t[220]=d(220,2,c.prototype.Pt),t[221]=d(221,4,c.prototype.Bt),t[222]=d(222,2,c.prototype.Pt),t[223]=d(223,4,c.prototype.Bt),t}():v();var n}},943:function(t,n,r){var i=r(826),e=r(166),o=e.ot,s=e.st,u=r(895),f=r(190),c=r(598),a=r(370).w,h=r(83).J,v='undefined'!=typeof Uint8Array,l='undefined'!=typeof Map,w=[];w[1]=212,w[2]=213,w[4]=214,w[8]=215,w[16]=216,n._t=function(t){var n,r=c.xt(t),e=t&&t.Ot,y=v&&t&&t.ft,d=y?u.I:u.isBuffer,p=y?function(t,n){E(t,new Uint8Array(n))}:E,m=l&&t&&t.at?function(t,n){if(!(n instanceof Map))return g(t,n);var i=n.size;r[i<16?128+i:i<=65535?222:223](t,i);var e=t._.encode;n.forEach(function(n,r,i){e(t,r),e(t,n)})}:g;return{Lt:function(t,n){r[n?195:194](t,n)},$t:b,number:function(t,n){var i=0|n;n===i?r[-32<=i&&i<=127?255&i:0<=i?i<=255?204:i<=65535?205:206:-128<=i?208:-32768<=i?209:210](t,i):r[203](t,n)},object:e?function(t,n){if(d(n))return function(t,n){var i=n.length;r[i<32?160+i:i<=65535?218:219](t,i),t.send(n)}(t,n);A(t,n)}:A,zt:(n=e?function(t){return t<32?1:t<=65535?3:5}:function(t){return t<32?1:t<=255?2:t<=65535?3:5},function(t,i){var e=i.length,o=5+3*e;t.offset=t.G(o);var s=t.buffer,u=n(e),c=t.offset+u;e=f.write.call(s,i,c);var a=n(e);if(u!==a){var h=c+a-u,v=c+e;f.R.call(s,s,h,c,v)}r[1===a?160+e:a<=3?215+a:219](t,e),t.offset+=e}),Jt:b,undefined:b};function A(t,n){if(null===n)return b(t,n);if(d(n))return p(t,n);if(i(n))return function(t,n){var i=n.length;r[i<16?144+i:i<=65535?220:221](t,i);for(var e=t._.encode,o=0;o<i;o++)e(t,n[o])}(t,n);if(o.Wt(n))return function(t,n){r[207](t,n.toArray())}(t,n);if(s.Ht(n))return function(t,n){r[211](t,n.toArray())}(t,n);var e=t._.Dt(n);if(e&&(n=e(n)),n instanceof h)return function(t,n){var i=n.buffer,e=i.length,o=w[e]||(e<255?199:e<=65535?200:201);r[o](t,e),a[n.type](t),t.send(i)}(t,n);m(t,n)}function b(t,n){r[192](t,n)}function E(t,n){var i=n.length;r[i<255?196:i<=65535?197:198](t,i),t.send(n)}function g(t,n){var i=Object.keys(n),e=i.length;r[e<16?128+e:e<=65535?222:223](t,e);var o=t._.encode;i.forEach(function(r){o(t,r),o(t,n[r])})}}},370:function(t,n){for(var r=n.w=new Array(256),i=0;i<=255;i++)r[i]=e(i);function e(t){return function(n){var r=n.G(1);n.buffer[r]=t}}},409:function(t){t.exports=['ms','moz','webkit','o']},928:function(t){t.exports=1},619:function(t){t.exports={NONE:-1,Vt:0}},390:function(t){t.exports=100},611:function(t){t.exports={Xt:4,Kt:2,qt:7,Gt:6,Zt:5,Qt:3,tn:0,nn:1}}},n={};function r(i){var e=n[i];if(void 0!==e)return e.exports;var o=n[i]={exports:{}};return t[i].call(o.exports,o,o.exports,r),o.exports}r.n=function(t){var n=t&&t.rn?function(){return t.default}:function(){return t};return r.d(n,{a:n}),n},r.d=function(t,n){for(var i in n)r.t(n,i)&&!r.t(t,i)&&Object.defineProperty(t,i,{en:!0,get:n[i]})},r.on=function(){if('object'==typeof globalThis)return globalThis;try{return this||new Function('return this')()}catch(t){if('object'==typeof window)return window}}(),r.t=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.r=function(t){'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(t,'rn',{value:!0})},function(){var t;r.on.sn&&(t=r.on.location+'');var n=r.on.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var i=n.getElementsByTagName('script');i.length&&(t=i[i.length-1].src)}if(!t)throw new Error('Automatic publicPath is not supported in this browser');t=t.replace(/#.*$/,'').replace(/\?.*$/,'').replace(/\/[^\/]+$/,'/'),r.m=t+'../'}(),function(){'use strict';var t=r(928),n=r.n(t);const i=2*Math.PI,e=Math.PI;function o(t=0,n=0,r=0){return(1-r)*t+r*n}class s{constructor(t){this.un=t,this.fn=this.un.cn.fn,this.an=0,this.hn=0}}s.prototype.update=function(t,n){const r=this;r.an=r.un.ln.vn-t+-r.fn.yn.wn/15,r.hn=r.un.ln.dn-n+-r.fn.yn.pn/15};var u=s,f=r(611),c=r.n(f);const a={mn:'up',An:1,bn:'down',En:4,gn:'left',Mn:8,Un:'right',Nn:2},h=parseInt((v=a,16^Object.keys(v).length));var v;class l{constructor(t){this.On=h,this.un=t,this._n=0,this.kn=0}}l.prototype.Rn=function(t){const n=this;if(t.In.Dn[a.mn]?n._n|=a.An:n._n&=~a.An,t.In.Dn[a.bn]?n._n|=a.En:n._n&=~a.En,t.In.Dn[a.gn]?n._n|=a.Mn:n._n&=~a.Mn,t.In.Dn[a.Un]?n._n|=a.Nn:n._n&=~a.Nn,t.xn.Tn.readyState===t.xn.Tn.OPEN&&n._n!==n.kn){n.kn=n._n;const r=JSON.stringify([c().nn,n._n]);t.xn.Tn.send(r)}};var w=l;const y=JSON.parse('{"key_w":[87,"up"],"key_s":[65,"down"],"key_a":[83,"left"],"key_d":[68,"right"]}'),d=JSON.parse('{"arrow_up":[38,"up"],"arrow_down":[40,"down"],"arrow_left":[37,"left"],"arrow_right":[39,"right"]}');class p{constructor(t){this.un=t,this.jn=new w(this.un.xn,void 0)}}p.prototype.Sn=function(t){const n=this;if(!n.un.In.Pn||n.un.In.Bn)return;let r=t.code.toLowerCase().split('key')[1]||null,i=t.code.toLowerCase().split('arrow')[1]||null;r='string'==typeof r?'key_'+r:null,i='string'==typeof i?'arrow_'+i:null;const e='keyup'!==t.type;if(r in y){const [t,i]=y[r];i in n.un.In.Dn&&(n.un.In.Dn[i]=e)}if(i in d){const [t,r]=d[i];r in n.un.In.Dn&&(n.un.In.Dn[r]=e)}n.jn&&n.jn.Rn(n.un)};var m=p,A=r(390),b=r.n(A);class E{constructor(t){this.un=t,this.Fn=0,this.Cn=0,this.Yn=Date.now(),this.Ln=0}}E.prototype.Rn=function(){const t=this,n=t.un;if(n.xn.Tn.readyState===n.xn.Tn.OPEN){const r=t.un.In.$n;t.un.In.Jn.zn=r;const i=Date.now();if(t.Cn!==r&&i-t.Fn>b()-20){const i=JSON.stringify([c().tn,r]);n.xn.Tn.send(i),t.Fn=Date.now(),t.Cn=r}}};var g=E;class M{constructor(t){this.un=t,this.Wn=new g(this.un),this.yn={wn:0,pn:0}}}M.prototype.Hn=function(t){const n=this.un.Vn.getBoundingClientRect();return{wn:t.clientX-n.left||0,pn:t.clientY-n.top||0}},M.prototype.Xn=function(t){const n=this;n.yn=n.Hn(t);const r=Math.atan2(n.un.In.Kn.hn+n.un.In.Jn.qn.y-n.yn.pn,n.un.In.Kn.an+n.un.In.Jn.qn.x-n.yn.wn);n.un.In.$n=r.map(-Math.PI,Math.PI,0,360)*Math.PI/180,n.Wn&&n.Wn.Rn()};var U=M;const N=r(404)||[],O={};class _{constructor(){N.keys().forEach(function(t){const n=N(t);if(n){const r=t.match(/([A-Za-z0-9-_]+)\./i)[1]||null;if(!(r in O)){O[r]=new Image;const t=O[r];t&&(t.src=n||null,t.Gn=!1,t.onload=function(){this.Gn||(this.Gn=!0,console.log('loaded',this))},t.onerror=function(){console.log('error loading')})}}})}}_.prototype.Zn=function(t){return t in O&&O[t]};var k=_;class R{constructor(t){this.un=t,this.Qn=new k,this.tr=1,this.nr=0,this.rr=0,this.ir='Baloo Paaji',this.er=`%size ${this.ir}, Verdana, sans-serif`}}R.prototype.sr=function(t,n,r='20px'){return t.font=this.er.replace('%size',r),t.measureText(n)},R.prototype.ur=function(t,n,r,i,e='20px',o='white',s=!0,u=!1){t&&t.constructor===CanvasRenderingContext2D&&(t.textAlign=u?'center':'start',t.textBaseline=s?'middle':'alphabetic',t.fillStyle=o,t.font=this.er.replace('%size',e),t.fillText(n,r,i))},R.prototype.cr=function(t,n,r,i){t&&t.constructor===CanvasRenderingContext2D&&(n&&(t.fillStyle=n,t.fill()),r&&(t.lineWidth=i,t.strokeStyle=r,t.stroke()))},R.prototype.ar=function(t,n,r,i,e,o){t&&t.constructor===CanvasRenderingContext2D&&(i<2*o&&(o=i/2),e<2*o&&(o=e/2),0>o&&(o=0),t.beginPath(),t.moveTo(n+o,r),t.arcTo(n+i,r,n+i,r+e,o),t.arcTo(n+i,r+e,n,r+e,o),t.arcTo(n,r+e,n,r,o),t.arcTo(n,r,n+i,r,o),t.closePath())},R.prototype.hr=function(t,n,r,i,e,o,s=!1){if(!t||t.constructor!==CanvasRenderingContext2D)return;if(!n||'string'==typeof n)return;const u=s?.25*-n.width+r:r,f=s?.25*-n.height+i:i;e||(e=.5*n.width),o||(o=.5*n.height),t.drawImage(n,u,f,e,o)},R.prototype.vr=function(){const t=this;t.un.Vn.width!==window.innerWidth&&(t.un.Vn.width=window.innerWidth,t.un.Vn.style.width=window.innerWidth+'px',t.un.ln.vn=t.un.Vn.width/2),t.un.Vn.height!==window.innerHeight&&(t.un.Vn.height=window.innerHeight,t.un.Vn.style.height=window.innerHeight+'px',t.un.ln.dn=t.un.Vn.height/2),t.tr=t.un.Vn.height/1080},R.prototype.lr=function(t){const n=this,r=Date.now();window.requestAnimationFrame(n.lr.bind(n)),n.rr=(t-n.nr)/1e3,n.nr=t,n.rr=n.rr>1?1:n.rr,n.un.wr.clearRect(0,0,n.un.Vn.width,n.un.Vn.height),n.un.lr(n.rr,r)};var D=R;class I{constructor(t){this.un=t,this.l=[['keyup',this.un.cn.yr.Sn.bind(this.un.cn.yr)],['resize',this.un.dr.vr.bind(this.un.dr)],['keydown',this.un.cn.yr.Sn.bind(this.un.cn.yr)],['mousemove',this.un.cn.fn.Xn.bind(this.un.cn.fn)],['contextmenu',function(t){return t.preventDefault(),!1}]],this.pr('add')}}I.prototype.pr=function(t){const n=this;t||(t='add');const r='add'===t?'addEventListener':'remove'===t?'removeEventListener':'addEventListener';for(let t=0;t<n.l.length;t++){const i=n.l[t];if(i){const [t,n]=i;window[r](t,n)}}window[r]('beforeunload',function(){n.pr('remove')})};var T=I,x=r(374),j=r(619),S=r.n(j);class P{constructor(t,n){this.mr=t,this.Ar=n,this.un=this.mr.un,this.Tn=this.mr.Tn,this.br=1}}P.prototype.Rn=function(t){const n=this.un,r=this.Tn;if(r.readyState===r.OPEN){const i=n.In.Er.find(t=>t.gr===S().Vt&&t.Mr===n.In.Ur);if(i){i.Or.Nr.push(t);const n=JSON.stringify([c().qt,t]);r.send(n)}}},P.prototype._r=function(){const t=this;let n=0;const r=t.un,i=t.Ar,e=t.Ar.length;for(let o=t.br;o<e;o++){const t=i[o];if(t){const i=n++,e='string'==typeof t[i]?parseInt(t[i]):t[i],o=decodeURIComponent(atob(t[n++])),s=r.In.Er.find(t=>t.gr===S().Vt&&t.Mr===e);s&&s.Or.Nr.push(o)}}};var B=P;function F(t='',n=1){const r=document.createElement('canvas'),i=r.getContext('2d'),e=8*n,o=6*n,s=Math.floor(26*n),u=Math.floor(20*n);i.font=`${u}px Baloo Paaji, Verdana, sans-serif`;const f=i.measureText(t).width+2*e;return r.width=f,r.height=s,function(t,n,r,i,e,o){t&&(i<2*o&&(o=i/2),e<2*o&&(o=e/2),0>o&&(o=0),t.beginPath(),t.moveTo(0+o,0),t.arcTo(0+i,0,0+i,0+e,o),t.arcTo(0+i,0+e,0,0+e,o),t.arcTo(0,0+e,0,0,o),t.arcTo(0,0,0+i,0,o),t.closePath())}(i,0,0,f,s,o),i.globalAlpha=.5,function(t,n,r,i){t&&(t.fillStyle='#000',t.fill())}(i),i.globalAlpha=1,i.font=`${u}px Baloo Paaji, Verdana, sans-serif`,i.textBaseline='middle',i.fillStyle='white',i.fillText(t,e,s/1.65),r}class C{constructor(t,n,r,i,e,o){this.t=t,this.kr=n,this.min=r,this.max=i,this.Rr=e,this.Dr=o}}C.prototype.update=function(t){const n=this;if(n.kr<n.min&&(n.kr=n.min),n.kr>n.max&&(n.kr=n.max),n.t){var r=n.kr+t*n.Dr;if(r>n.max)return n.kr=n.max,n.t=!1,!0;n.kr=r}else(r=n.kr-t*n.Rr)<n.min?(n.kr=n.min,n.t=!0):n.kr=r};var Y=C;class L{constructor(t=S().NONE,n=-1,r={x:0,y:0},i=0,e=0){this.Ir={Tr:0,jr:0,Sr:0,jr:0,Pr:0,Br:0,Fr:Date.now(),Cr:Date.now()},this.Mr=n,this.gr=t,this.qn=r||{x:0,y:0},this.zn=i,this.Yr=!1,this.Lr=e}}L.prototype.update=function(t,n){const r=this,s=n-b(),u=r.Ir.Fr,f=(s-u)/(r.Ir.Cr-u);r.zn=function(t=0,n=0,r=0){const s=function(t=0,n=0){return function(t=0,n=0,r=0){return Math.min(Math.max(t,n),r)}(t-Math.floor(t/n)*n,0,n)}(n-t,i);return o(t,t+(s>e?s-i:s),r)}(r.Ir.Pr,r.Ir.Br,f),r.qn.x=o(r.Ir.Tr,r.Ir.jr,f),r.qn.y=o(r.Ir.Sr,r.Ir.$r,f)},L.prototype.zr=function(t){const n=this;n.Ir.Fr===n.Ir.Cr&&(n.qn.x='string'==typeof t[0]?parseInt(t[0]):t[0],n.qn.y='string'==typeof t[1]?parseInt(t[1]):t[1],n.zn='string'==typeof t[2]?parseFloat(t[2]):t[2]),n.Ir.Tr=n.Ir.jr,n.Ir.Sr=n.Ir.$r,n.Ir.Pr=n.Ir.Br,n.Ir.Fr=n.Ir.Cr,n.Ir.jr='string'==typeof t[0]?parseInt(t[0]):t[0],n.Ir.$r='string'==typeof t[1]?parseInt(t[1]):t[1],n.Ir.Br='string'==typeof t[2]?parseFloat(t[2]):t[2],n.Ir.Cr=Date.now()};var $=L;class z extends ${constructor(t,n=-1,r=''){super(S().Vt,n,null,0,null),this.un=t,this.Jr=0,this.Wr=r,this.Or={Hr:0,Vr:[],Xr:[],Nr:[],Kr:[]},this.qr={Gr:new Y(!0,0,-1.5,2.25,7.5,3.75),Zr:new Y(!0,0,-3,7.5,33.75,22.5),Qr:new Y(!1,0,-Math.PI/3,0,9,6)}}}z.prototype.ti=function(t,n=1){const r=this,i=r.un.dr.tr,e=r.Or.Nr,o=r.Or.Nr.length;if(t.save(),t.translate(r.qn.x,r.qn.y),o>0){for(let t=0;t<o;t++){const n=e[t];n&&(r.Or.Kr[t]||(r.Or.Kr[t]=F(n,i),r.Or.Xr[t]=0,r.Or.Vr[t]=0),1===t&&(r.Or.Vr[0]=((s=r.Or.Hr)<.5?2*s*s:(4-2*s)*s-1)*r.Or.Kr[t].height*1.15))}r.Or.Xr[0]+=n,o>1&&(r.Or.Hr=Math.min(r.Or.Hr+n,1),r.Or.Xr[0]>1&&r.Or.Hr>.7&&(r.Or.Xr[1]+=n));for(let n=0;n<o;n++){const e=r.Or.Xr[n];if(e>0){const o=r.Or.Kr[n];if(o){const s=r.Or.Vr[n];t.globalAlpha=e<.25?6*e:e>5.15?Math.max(5.5*(5.5-e),0):1,t.drawImage(o,-o.width/2,-s+-o.height/2-110*i,o.width,o.height)}}}r.Or.Xr[0]>6&&(r.Or.Hr=0,r.Or.Vr.shift(),r.Or.Xr.shift(),r.Or.Nr.shift(),r.Or.Kr.shift())}var s;t.restore()},z.prototype.lr=function(t,n){const r=this,i=r.un;if(!r.Yr)return;const e=r.un.wr;e.save(),e.beginPath(),e.translate(r.qn.x+i.In.Kn.an,r.qn.y+i.In.Kn.hn),e.rotate(r.zn),e.arc(0,0,50,0,2*Math.PI),e.strokeStyle='black',e.stroke(),e.fillStyle='cyan',e.fill(),e.fillStyle='black';const o=r.Ir.Cr-r.Ir.Fr>5e3;r.ti(e,t),e.fillText(`Timeout: ${o}`,0,20),e.fillText(r.Wr?r.Wr:`Player #${r.Mr}`,0,0),r.Mr===i.In.Ur&&(i.In.Kn.update(r.qn.x,r.qn.y),e.fillText('You are here!',0,35)),e.restore()};var J=z;class W{constructor(t,n){this.mr=t,this.Ar=n,this.un=this.mr.un,this.Tn=this.mr.Tn,this.br=1}}W.prototype.Rn=function(t=''){const n=this.un,r=this.Tn;if(r.readyState===r.OPEN){const i=JSON.stringify([t,n.ni]);r.send(i)}},W.prototype._r=function(){const t=this;let n=0;const r=t.un,i=t.Tn;if(i.readyState===i.OPEN){const i=t.Ar,e=t.Ar.length;for(let o=t.br;o<e;o++){const t=i[o];if(t){const i=t[n++],e=t[n++],o=t[n++];if(r.In.Ur!==i&&(r.In.Ur=i),o){const t=o.length;for(let n=0;n<t;n++){const t=o[n];if(t){const n=t[0],i=decodeURIComponent(atob(t[1])),o=t[2],s=new J(r,n,i);if(s){if(r.In.Ur===n){const t=e[0],n=e[1],i=e[2];r.In.Jn=s,r.In.ri=o,r.In.Pn=!0,r.In.Jn.zr([t,n,i])}s.Yr||(s.Yr=!0),s.Jr!==o&&(s.Jr=o),r.In.Er.push(s)}}}}}}}};var H=W;class V{constructor(t,n){this.mr=t,this.Ar=n,this.un=this.mr.un,this.Tn=this.mr.Tn,this.br=1}}V.prototype._r=function(){const t=this;let n=0;const r=t.un,i=t.Tn,e=t.Ar,o=t.Ar.length,s=t.br;if(i.readyState===i.OPEN)for(let t=s;t<o;t++){const i=e[t];if(i){const t=i[n++];if(t){const n=t.length;for(let i=0;i<n;i++){const n=t[i];if(n){const t=n[0],i=(n[1],n[2][0]),e=n[2][1],o=n[3],s=r.In.Er.find(n=>n.Mr===t);s&&(r.In.Ur===t&&r.In.Jn,s.zr([i,e,o]))}}}}}};var X=V;class K{constructor(t,n){this.mr=t,this.Ar=n,this.un=this.mr.un,this.Tn=this.mr.Tn}}K.prototype._r=function(){const t=this,n=t.un,r=t.Tn,i=t.Ar;if(r.readyState===r.OPEN){const t='string'==typeof i[1]?parseInt(i[1]):i[1],r=n.In.Er.find(n=>n.Mr===t);r&&(r.Yr&&(r.Yr=!1),r.zr([0,0,0]),console.log('Entity removed',r),n.In.Er.remove(r))}};var q=K;class G{constructor(t,n){this.mr=t,this.Ar=n,this.un=this.mr.un,this.Tn=this.mr.Tn,this.br=1}}G.prototype._r=function(){const t=this;let n=0;const r=t.un,i=t.Tn,e=t.Ar,o=t.Ar.length,s=t.br;if(i.readyState===i.OPEN)for(let t=s;t<o;t++){const i=e[t];if(i){let t;const e=i[n++],o=i[n++];o===S().Vt?(t=new J(r,e,null),console.log('Player joined')):console.log('Unknown entity type',o);const s=n++,u=i[s][0],f=i[s][1],c=i[n++];t&&(t.zr([u,f,c]),t.Yr||(t.Yr=!0),r.In.Er.push(t))}}};var Z=G;const Q='https:'===location.protocol?'wss://':'ws://';class tt extends WebSocket{constructor(t,n){super(Q+n),this.xn=t,this.binaryType='arraybuffer',this.addEventListener('open',this.ii.bind(this)),this.addEventListener('close',this.ei.bind(this)),this.addEventListener('message',this.oi.bind(this))}}tt.prototype.ii=function(){const t=this,n=t.xn;if(n&&void 0!==n&&t.readyState===t.OPEN){n.si&&void 0!==n.si&&(n.ui=0,clearTimeout(n.si)),n.un.In.Bn&&(n.un.In.Bn=!1);const t=new H(n,void 0);t&&t.Rn('test')}},tt.prototype.ei=function(){const t=this,n=t.xn;n&&void 0!==n&&(t.removeEventListener('open',t.ii.bind(this)),t.removeEventListener('close',t.ei.bind(this)),t.removeEventListener('message',t.oi.bind(this)))},tt.prototype.oi=function(t){const n=this,r=n.xn;if(r&&void 0!==r&&n.readyState===n.OPEN)if('object'==typeof(t=t.data)){let n,i;try{n=x.decode(new Uint8Array(t))}catch(t){throw t}switch(n[0]){case c().qt:i=new B(r,n);break;case c().Gt:i=new Z(r,n);break;case c().Zt:i=new q(r,n);break;case c().Qt:i=new X(r,n);break;case c().Kt:i=new H(r,n);break;default:console.log(`undefined packet: ${JSON.stringify(n)}`)}i&&void 0!==i&&i._r()}else console.log(t)};var nt=tt;class rt{constructor(t){this.un=t,this.ui=0,this.si=void 0,this.Tn=void 0,this.connect()}}rt.prototype.connect=function(t){const n=this,r=!!n.Tn&&(n.Tn.readyState===n.Tn.CLOSING||n.Tn.readyState===n.Tn.CLOSED);console.log('socket closed',r),n.Tn&&!r||(n.un.In.Bn||(n.un.In.Bn=!0),n.Tn=new nt(n,'localhost:9000'))};var it=rt;const et=r(617),ot={},st={};class ut{constructor(t){return et.keys().forEach(function(n){const r=et(n).default;if(r){const i=n.match(/([A-Za-z0-9-_]+)\./i)[1]||null;if(!(i in ot))if(!1!==r.fi)try{ot[i]=new r(globalThis,r.i?t:void 0),console.log(`Polyfill '${i}' loaded`)}catch(t){throw console.error(`Loading polyfill '${i}' failed:\n`,t),Error(`Error while loading polyfill '${i}', see last console message`)}else st[i]=r}})}}ut.prototype.ci=function(t,n='active'){const r=Object.entries('active'===n?ot:st).find(n=>n[0]===t);return!!r&&r[1]};var ft=ut;class ct{constructor(t){t&&t.constructor===HTMLCanvasElement&&(this.ni=n(),this.Vn=t,this.ln={vn:0,dn:0},this.wr=this.Vn.getContext('2d'),this.cn={fn:new U(this),yr:new m(this)},this.In=new class{constructor(t){this.un=t,this.ai=[],this.Er=[],this.Ur=-1,this.Pn=!1,this.$n=0,this.ri=0,this.Jn=null,this.Kn=new u(this.un),this.Dn=JSON.parse('{"up":false,"down":false,"left":false,"right":false}'),this.Bn=!1}}(this),this.xn=new it(this),this.hi=new ft(this.wr),this.dr=new D(this),this.vi=new T(this),this.dr.lr(0),this.dr.vr())}}ct.prototype.lr=function(t,n){const r=this.In.Er,i=r.length;for(let e=0;e<i;e++){const i=r[e];i&&(i.update&&i.update(t,n),i.lr&&i.lr(t,n))}};var at=ct;let ht;const vt=document.getElementById('game')||document.body.querySelector('#game');window.onload=function(){!ht&&vt&&(ht=new at(vt))}}()}()