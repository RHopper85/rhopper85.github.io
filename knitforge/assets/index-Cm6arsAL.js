(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uo="170",Dn={ROTATE:0,DOLLY:1,PAN:2},nr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},tu=0,vl=1,eu=2,Fc=1,nu=2,Xn=3,ui=0,Ve=1,Ye=2,ci=0,ar=1,Ml=2,Sl=3,yl=4,iu=5,Ti=100,ru=101,su=102,au=103,ou=104,lu=200,cu=201,hu=202,uu=203,Ba=204,za=205,du=206,fu=207,pu=208,mu=209,gu=210,_u=211,xu=212,vu=213,Mu=214,ka=0,Ha=1,Va=2,hr=3,Ga=4,Wa=5,Xa=6,qa=7,Oc=0,Su=1,yu=2,hi=0,Eu=1,Tu=2,bu=3,Au=4,wu=5,Ru=6,Cu=7,Bc=300,ur=301,dr=302,Ya=303,ja=304,Xs=306,Ka=1e3,wi=1001,$a=1002,je=1003,Pu=1004,Jr=1005,gn=1006,na=1007,Ri=1008,Un=1009,zc=1010,kc=1011,Vr=1012,No=1013,Li=1014,qn=1015,Wr=1016,Fo=1017,Oo=1018,fr=1020,Hc=35902,Vc=1021,Gc=1022,_n=1023,Wc=1024,Xc=1025,or=1026,pr=1027,Bo=1028,zo=1029,qc=1030,ko=1031,Ho=1033,ws=33776,Rs=33777,Cs=33778,Ps=33779,Za=35840,Ja=35841,Qa=35842,to=35843,eo=36196,no=37492,io=37496,ro=37808,so=37809,ao=37810,oo=37811,lo=37812,co=37813,ho=37814,uo=37815,fo=37816,po=37817,mo=37818,go=37819,_o=37820,xo=37821,Ls=36492,vo=36494,Mo=36495,Yc=36283,So=36284,yo=36285,Eo=36286,Lu=3200,Du=3201,jc=0,Iu=1,ai="",He="srgb",_r="srgb-linear",qs="linear",Jt="srgb",ki=7680,El=519,Uu=512,Nu=513,Fu=514,Kc=515,Ou=516,Bu=517,zu=518,ku=519,Tl=35044,Vo=35048,bl="300 es",Yn=2e3,Ns=2001;class Oi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ds=Math.PI/180,To=180/Math.PI;function Xr(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Re[n&255]+Re[n>>8&255]+Re[n>>16&255]+Re[n>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[i&255]+Re[i>>8&255]+Re[i>>16&255]+Re[i>>24&255]).toLowerCase()}function Ie(n,t,e){return Math.max(t,Math.min(e,n))}function Hu(n,t){return(n%t+t)%t}function ia(n,t,e){return(1-e)*n+e*t}function Tr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Oe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Vu={DEG2RAD:Ds};class Rt{constructor(t=0,e=0){Rt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class It{constructor(t,e,i,r,s,o,a,l,c){It.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c)}set(t,e,i,r,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],m=i[5],_=i[8],g=r[0],p=r[3],d=r[6],b=r[1],E=r[4],S=r[7],U=r[2],A=r[5],w=r[8];return s[0]=o*g+a*b+l*U,s[3]=o*p+a*E+l*A,s[6]=o*d+a*S+l*w,s[1]=c*g+h*b+u*U,s[4]=c*p+h*E+u*A,s[7]=c*d+h*S+u*w,s[2]=f*g+m*b+_*U,s[5]=f*p+m*E+_*A,s[8]=f*d+m*S+_*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*s*h+i*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*s,m=c*s-o*l,_=e*u+i*f+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=u*g,t[1]=(r*c-h*i)*g,t[2]=(a*i-r*o)*g,t[3]=f*g,t[4]=(h*e-r*l)*g,t[5]=(r*s-a*e)*g,t[6]=m*g,t[7]=(i*l-c*e)*g,t[8]=(o*e-i*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ra.makeScale(t,e)),this}rotate(t){return this.premultiply(ra.makeRotation(-t)),this}translate(t,e){return this.premultiply(ra.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ra=new It;function $c(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Fs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Gu(){const n=Fs("canvas");return n.style.display="block",n}const Al={};function Nr(n){n in Al||(Al[n]=!0,console.warn(n))}function Wu(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function Xu(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function qu(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Wt={enabled:!0,workingColorSpace:_r,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Jt&&(n.r=jn(n.r),n.g=jn(n.g),n.b=jn(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Jt&&(n.r=lr(n.r),n.g=lr(n.g),n.b=lr(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ai?qs:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function jn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function lr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const wl=[.64,.33,.3,.6,.15,.06],Rl=[.2126,.7152,.0722],Cl=[.3127,.329],Pl=new It().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ll=new It().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Wt.define({[_r]:{primaries:wl,whitePoint:Cl,transfer:qs,toXYZ:Pl,fromXYZ:Ll,luminanceCoefficients:Rl,workingColorSpaceConfig:{unpackColorSpace:He},outputColorSpaceConfig:{drawingBufferColorSpace:He}},[He]:{primaries:wl,whitePoint:Cl,transfer:Jt,toXYZ:Pl,fromXYZ:Ll,luminanceCoefficients:Rl,outputColorSpaceConfig:{drawingBufferColorSpace:He}}});let Hi;class Yu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Hi===void 0&&(Hi=Fs("canvas")),Hi.width=t.width,Hi.height=t.height;const i=Hi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Hi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Fs("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=jn(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(jn(e[i]/255)*255):e[i]=jn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ju=0;class Zc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=Xr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(sa(r[o].image)):s.push(sa(r[o]))}else s=sa(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function sa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Yu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ku=0;class Ue extends Oi{constructor(t=Ue.DEFAULT_IMAGE,e=Ue.DEFAULT_MAPPING,i=wi,r=wi,s=gn,o=Ri,a=_n,l=Un,c=Ue.DEFAULT_ANISOTROPY,h=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=Xr(),this.name="",this.source=new Zc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ka:t.x=t.x-Math.floor(t.x);break;case wi:t.x=t.x<0?0:1;break;case $a:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ka:t.y=t.y-Math.floor(t.y);break;case wi:t.y=t.y<0?0:1;break;case $a:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=Bc;Ue.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,e=0,i=0,r=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],_=l[9],g=l[2],p=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,S=(m+1)/2,U=(d+1)/2,A=(h+f)/4,w=(u+g)/4,I=(_+p)/4;return E>S&&E>U?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=A/i,s=w/i):S>U?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=I/r):U<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(U),i=w/s,r=I/s),this.set(i,r,s,e),this}let b=Math.sqrt((p-_)*(p-_)+(u-g)*(u-g)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(p-_)/b,this.y=(u-g)/b,this.z=(f-h)/b,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $u extends Oi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ue(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Zc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Di extends $u{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Jc extends Ue{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=je,this.minFilter=je,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zu extends Ue{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=je,this.minFilter=je,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ii{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3];const f=s[o+0],m=s[o+1],_=s[o+2],g=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=_,t[e+3]=g;return}if(u!==g||l!==f||c!==m||h!==_){let p=1-a;const d=l*f+c*m+h*_+u*g,b=d>=0?1:-1,E=1-d*d;if(E>Number.EPSILON){const U=Math.sqrt(E),A=Math.atan2(U,d*b);p=Math.sin(p*A)/U,a=Math.sin(a*A)/U}const S=a*b;if(l=l*p+f*S,c=c*p+m*S,h=h*p+_*S,u=u*p+g*S,p===1-a){const U=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=U,c*=U,h*=U,u*=U}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=s[o],f=s[o+1],m=s[o+2],_=s[o+3];return t[e]=a*_+h*u+l*m-c*f,t[e+1]=l*_+h*f+c*u-a*m,t[e+2]=c*_+h*m+a*f-l*u,t[e+3]=h*_-a*u-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),u=a(s/2),f=l(i/2),m=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*m*_,this._y=c*m*u-f*h*_,this._z=c*h*_+f*m*u,this._w=c*h*u-f*m*_;break;case"YXZ":this._x=f*h*u+c*m*_,this._y=c*m*u-f*h*_,this._z=c*h*_-f*m*u,this._w=c*h*u+f*m*_;break;case"ZXY":this._x=f*h*u-c*m*_,this._y=c*m*u+f*h*_,this._z=c*h*_+f*m*u,this._w=c*h*u-f*m*_;break;case"ZYX":this._x=f*h*u-c*m*_,this._y=c*m*u+f*h*_,this._z=c*h*_-f*m*u,this._w=c*h*u+f*m*_;break;case"YZX":this._x=f*h*u+c*m*_,this._y=c*m*u+f*h*_,this._z=c*h*_-f*m*u,this._w=c*h*u-f*m*_;break;case"XZY":this._x=f*h*u-c*m*_,this._y=c*m*u-f*h*_,this._z=c*h*_+f*m*u,this._w=c*h*u+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=i+a+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>u){const m=2*Math.sqrt(1+i-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>u){const m=2*Math.sqrt(1+a-i-u);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ie(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-r*a,this._w=o*h-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*i+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=r*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,i=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Dl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Dl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*i),h=2*(a*e-s*r),u=2*(s*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-s*u,this.z=r+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return aa.copy(this).projectOnVector(t),this.sub(aa)}reflect(t){return this.sub(aa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const aa=new N,Dl=new Ii;class qr{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(on.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(on.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=on.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,on):on.fromBufferAttribute(s,o),on.applyMatrix4(t.matrixWorld),this.expandByPoint(on);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qr.copy(i.boundingBox)),Qr.applyMatrix4(t.matrixWorld),this.union(Qr)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,on),on.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(br),ts.subVectors(this.max,br),Vi.subVectors(t.a,br),Gi.subVectors(t.b,br),Wi.subVectors(t.c,br),Qn.subVectors(Gi,Vi),ti.subVectors(Wi,Gi),_i.subVectors(Vi,Wi);let e=[0,-Qn.z,Qn.y,0,-ti.z,ti.y,0,-_i.z,_i.y,Qn.z,0,-Qn.x,ti.z,0,-ti.x,_i.z,0,-_i.x,-Qn.y,Qn.x,0,-ti.y,ti.x,0,-_i.y,_i.x,0];return!oa(e,Vi,Gi,Wi,ts)||(e=[1,0,0,0,1,0,0,0,1],!oa(e,Vi,Gi,Wi,ts))?!1:(es.crossVectors(Qn,ti),e=[es.x,es.y,es.z],oa(e,Vi,Gi,Wi,ts))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,on).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(on).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Bn=[new N,new N,new N,new N,new N,new N,new N,new N],on=new N,Qr=new qr,Vi=new N,Gi=new N,Wi=new N,Qn=new N,ti=new N,_i=new N,br=new N,ts=new N,es=new N,xi=new N;function oa(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){xi.fromArray(n,s);const a=r.x*Math.abs(xi.x)+r.y*Math.abs(xi.y)+r.z*Math.abs(xi.z),l=t.dot(xi),c=e.dot(xi),h=i.dot(xi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Ju=new qr,Ar=new N,la=new N;class Ys{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Ju.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ar.subVectors(t,this.center);const e=Ar.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Ar,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(la.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ar.copy(t.center).add(la)),this.expandByPoint(Ar.copy(t.center).sub(la))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zn=new N,ca=new N,ns=new N,ei=new N,ha=new N,is=new N,ua=new N;class js{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(zn.copy(this.origin).addScaledVector(this.direction,e),zn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){ca.copy(t).add(e).multiplyScalar(.5),ns.copy(e).sub(t).normalize(),ei.copy(this.origin).sub(ca);const s=t.distanceTo(e)*.5,o=-this.direction.dot(ns),a=ei.dot(this.direction),l=-ei.dot(ns),c=ei.lengthSq(),h=Math.abs(1-o*o);let u,f,m,_;if(h>0)if(u=o*l-a,f=o*a-l,_=s*h,u>=0)if(f>=-_)if(f<=_){const g=1/h;u*=g,f*=g,m=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f<=-_?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),m=-u*u+f*(f+2*l)+c):f<=_?(u=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),m=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ca).addScaledVector(ns,f),m}intersectSphere(t,e){zn.subVectors(t.center,this.origin);const i=zn.dot(this.direction),r=zn.dot(zn)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,zn)!==null}intersectTriangle(t,e,i,r,s){ha.subVectors(e,t),is.subVectors(i,t),ua.crossVectors(ha,is);let o=this.direction.dot(ua),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ei.subVectors(this.origin,t);const l=a*this.direction.dot(is.crossVectors(ei,is));if(l<0)return null;const c=a*this.direction.dot(ha.cross(ei));if(c<0||l+c>o)return null;const h=-a*ei.dot(ua);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,i,r,s,o,a,l,c,h,u,f,m,_,g,p){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c,h,u,f,m,_,g,p)}set(t,e,i,r,s,o,a,l,c,h,u,f,m,_,g,p){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=m,d[7]=_,d[11]=g,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Xi.setFromMatrixColumn(t,0).length(),s=1/Xi.setFromMatrixColumn(t,1).length(),o=1/Xi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const f=o*h,m=o*u,_=a*h,g=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+_*c,e[5]=f-g*c,e[9]=-a*l,e[2]=g-f*c,e[6]=_+m*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,m=l*u,_=c*h,g=c*u;e[0]=f+g*a,e[4]=_*a-m,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=m*a-_,e[6]=g+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,m=l*u,_=c*h,g=c*u;e[0]=f-g*a,e[4]=-o*u,e[8]=_+m*a,e[1]=m+_*a,e[5]=o*h,e[9]=g-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,m=o*u,_=a*h,g=a*u;e[0]=l*h,e[4]=_*c-m,e[8]=f*c+g,e[1]=l*u,e[5]=g*c+f,e[9]=m*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,m=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=g-f*u,e[8]=_*u+m,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=m*u+_,e[10]=f-g*u}else if(t.order==="XZY"){const f=o*l,m=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+g,e[5]=o*h,e[9]=m*u-_,e[2]=_*u-m,e[6]=a*h,e[10]=g*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qu,t,td)}lookAt(t,e,i){const r=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),ni.crossVectors(i,We),ni.lengthSq()===0&&(Math.abs(i.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),ni.crossVectors(i,We)),ni.normalize(),rs.crossVectors(We,ni),r[0]=ni.x,r[4]=rs.x,r[8]=We.x,r[1]=ni.y,r[5]=rs.y,r[9]=We.y,r[2]=ni.z,r[6]=rs.z,r[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],m=i[13],_=i[2],g=i[6],p=i[10],d=i[14],b=i[3],E=i[7],S=i[11],U=i[15],A=r[0],w=r[4],I=r[8],y=r[12],M=r[1],R=r[5],G=r[9],z=r[13],W=r[2],K=r[6],H=r[10],Z=r[14],k=r[3],rt=r[7],ht=r[11],St=r[15];return s[0]=o*A+a*M+l*W+c*k,s[4]=o*w+a*R+l*K+c*rt,s[8]=o*I+a*G+l*H+c*ht,s[12]=o*y+a*z+l*Z+c*St,s[1]=h*A+u*M+f*W+m*k,s[5]=h*w+u*R+f*K+m*rt,s[9]=h*I+u*G+f*H+m*ht,s[13]=h*y+u*z+f*Z+m*St,s[2]=_*A+g*M+p*W+d*k,s[6]=_*w+g*R+p*K+d*rt,s[10]=_*I+g*G+p*H+d*ht,s[14]=_*y+g*z+p*Z+d*St,s[3]=b*A+E*M+S*W+U*k,s[7]=b*w+E*R+S*K+U*rt,s[11]=b*I+E*G+S*H+U*ht,s[15]=b*y+E*z+S*Z+U*St,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],m=t[14],_=t[3],g=t[7],p=t[11],d=t[15];return _*(+s*l*u-r*c*u-s*a*f+i*c*f+r*a*m-i*l*m)+g*(+e*l*m-e*c*f+s*o*f-r*o*m+r*c*h-s*l*h)+p*(+e*c*u-e*a*m-s*o*u+i*o*m+s*a*h-i*c*h)+d*(-r*a*h-e*l*u+e*a*f+r*o*u-i*o*f+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],m=t[11],_=t[12],g=t[13],p=t[14],d=t[15],b=u*p*c-g*f*c+g*l*m-a*p*m-u*l*d+a*f*d,E=_*f*c-h*p*c-_*l*m+o*p*m+h*l*d-o*f*d,S=h*g*c-_*u*c+_*a*m-o*g*m-h*a*d+o*u*d,U=_*u*l-h*g*l-_*a*f+o*g*f+h*a*p-o*u*p,A=e*b+i*E+r*S+s*U;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return t[0]=b*w,t[1]=(g*f*s-u*p*s-g*r*m+i*p*m+u*r*d-i*f*d)*w,t[2]=(a*p*s-g*l*s+g*r*c-i*p*c-a*r*d+i*l*d)*w,t[3]=(u*l*s-a*f*s-u*r*c+i*f*c+a*r*m-i*l*m)*w,t[4]=E*w,t[5]=(h*p*s-_*f*s+_*r*m-e*p*m-h*r*d+e*f*d)*w,t[6]=(_*l*s-o*p*s-_*r*c+e*p*c+o*r*d-e*l*d)*w,t[7]=(o*f*s-h*l*s+h*r*c-e*f*c-o*r*m+e*l*m)*w,t[8]=S*w,t[9]=(_*u*s-h*g*s-_*i*m+e*g*m+h*i*d-e*u*d)*w,t[10]=(o*g*s-_*a*s+_*i*c-e*g*c-o*i*d+e*a*d)*w,t[11]=(h*a*s-o*u*s-h*i*c+e*u*c+o*i*m-e*a*m)*w,t[12]=U*w,t[13]=(h*g*r-_*u*r+_*i*f-e*g*f-h*i*p+e*u*p)*w,t[14]=(_*a*r-o*g*r-_*i*l+e*g*l+o*i*p-e*a*p)*w,t[15]=(o*u*r-h*a*r+h*i*l-e*u*l-o*i*f+e*a*f)*w,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,f=s*c,m=s*h,_=s*u,g=o*h,p=o*u,d=a*u,b=l*c,E=l*h,S=l*u,U=i.x,A=i.y,w=i.z;return r[0]=(1-(g+d))*U,r[1]=(m+S)*U,r[2]=(_-E)*U,r[3]=0,r[4]=(m-S)*A,r[5]=(1-(f+d))*A,r[6]=(p+b)*A,r[7]=0,r[8]=(_+E)*w,r[9]=(p-b)*w,r[10]=(1-(f+g))*w,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Xi.set(r[0],r[1],r[2]).length();const o=Xi.set(r[4],r[5],r[6]).length(),a=Xi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],ln.copy(this);const c=1/s,h=1/o,u=1/a;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=h,ln.elements[5]*=h,ln.elements[6]*=h,ln.elements[8]*=u,ln.elements[9]*=u,ln.elements[10]*=u,e.setFromRotationMatrix(ln),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=Yn){const l=this.elements,c=2*s/(e-t),h=2*s/(i-r),u=(e+t)/(e-t),f=(i+r)/(i-r);let m,_;if(a===Yn)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Ns)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=Yn){const l=this.elements,c=1/(e-t),h=1/(i-r),u=1/(o-s),f=(e+t)*c,m=(i+r)*h;let _,g;if(a===Yn)_=(o+s)*u,g=-2*u;else if(a===Ns)_=s*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Xi=new N,ln=new oe,Qu=new N(0,0,0),td=new N(1,1,1),ni=new N,rs=new N,We=new N,Il=new oe,Ul=new Ii;class Nn{constructor(t=0,e=0,i=0,r=Nn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],f=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(Ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ie(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ie(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Il.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Il,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ul.setFromEuler(this),this.setFromQuaternion(Ul,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nn.DEFAULT_ORDER="XYZ";class Go{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ed=0;const Nl=new N,qi=new Ii,kn=new oe,ss=new N,wr=new N,nd=new N,id=new Ii,Fl=new N(1,0,0),Ol=new N(0,1,0),Bl=new N(0,0,1),zl={type:"added"},rd={type:"removed"},Yi={type:"childadded",child:null},da={type:"childremoved",child:null};class Ee extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=Xr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new N,e=new Nn,i=new Ii,r=new N(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new oe},normalMatrix:{value:new It}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Go,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.multiply(qi),this}rotateOnWorldAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.premultiply(qi),this}rotateX(t){return this.rotateOnAxis(Fl,t)}rotateY(t){return this.rotateOnAxis(Ol,t)}rotateZ(t){return this.rotateOnAxis(Bl,t)}translateOnAxis(t,e){return Nl.copy(t).applyQuaternion(this.quaternion),this.position.add(Nl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fl,t)}translateY(t){return this.translateOnAxis(Ol,t)}translateZ(t){return this.translateOnAxis(Bl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ss.copy(t):ss.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(wr,ss,this.up):kn.lookAt(ss,wr,this.up),this.quaternion.setFromRotationMatrix(kn),r&&(kn.extractRotation(r.matrixWorld),qi.setFromRotationMatrix(kn),this.quaternion.premultiply(qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zl),Yi.child=t,this.dispatchEvent(Yi),Yi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(rd),da.child=t,this.dispatchEvent(da),da.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zl),Yi.child=t,this.dispatchEvent(Yi),Yi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,t,nd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,id,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),m=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Ee.DEFAULT_UP=new N(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cn=new N,Hn=new N,fa=new N,Vn=new N,ji=new N,Ki=new N,kl=new N,pa=new N,ma=new N,ga=new N,_a=new ue,xa=new ue,va=new ue;class fn{constructor(t=new N,e=new N,i=new N){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),cn.subVectors(t,e),r.cross(cn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){cn.subVectors(r,e),Hn.subVectors(i,e),fa.subVectors(t,e);const o=cn.dot(cn),a=cn.dot(Hn),l=cn.dot(fa),c=Hn.dot(Hn),h=Hn.dot(fa),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const f=1/u,m=(c*l-a*h)*f,_=(o*h-a*l)*f;return s.set(1-m-_,_,m)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(t,e,i,r,s,o,a,l){return this.getBarycoord(t,e,i,r,Vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Vn.x),l.addScaledVector(o,Vn.y),l.addScaledVector(a,Vn.z),l)}static getInterpolatedAttribute(t,e,i,r,s,o){return _a.setScalar(0),xa.setScalar(0),va.setScalar(0),_a.fromBufferAttribute(t,e),xa.fromBufferAttribute(t,i),va.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(_a,s.x),o.addScaledVector(xa,s.y),o.addScaledVector(va,s.z),o}static isFrontFacing(t,e,i,r){return cn.subVectors(i,e),Hn.subVectors(t,e),cn.cross(Hn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return cn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),cn.cross(Hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return fn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return fn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return fn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return fn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return fn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;ji.subVectors(r,i),Ki.subVectors(s,i),pa.subVectors(t,i);const l=ji.dot(pa),c=Ki.dot(pa);if(l<=0&&c<=0)return e.copy(i);ma.subVectors(t,r);const h=ji.dot(ma),u=Ki.dot(ma);if(h>=0&&u<=h)return e.copy(r);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(ji,o);ga.subVectors(t,s);const m=ji.dot(ga),_=Ki.dot(ga);if(_>=0&&m<=_)return e.copy(s);const g=m*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(i).addScaledVector(Ki,a);const p=h*_-m*u;if(p<=0&&u-h>=0&&m-_>=0)return kl.subVectors(s,r),a=(u-h)/(u-h+(m-_)),e.copy(r).addScaledVector(kl,a);const d=1/(p+g+f);return o=g*d,a=f*d,e.copy(i).addScaledVector(ji,o).addScaledVector(Ki,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Qc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},as={h:0,s:0,l:0};function Ma(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Pt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=He){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=Wt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Wt.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=Wt.workingColorSpace){if(t=Hu(t,1),e=Ie(e,0,1),i=Ie(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=Ma(o,s,t+1/3),this.g=Ma(o,s,t),this.b=Ma(o,s,t-1/3)}return Wt.toWorkingColorSpace(this,r),this}setStyle(t,e=He){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=He){const i=Qc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=jn(t.r),this.g=jn(t.g),this.b=jn(t.b),this}copyLinearToSRGB(t){return this.r=lr(t.r),this.g=lr(t.g),this.b=lr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=He){return Wt.fromWorkingColorSpace(Ce.copy(this),t),Math.round(Ie(Ce.r*255,0,255))*65536+Math.round(Ie(Ce.g*255,0,255))*256+Math.round(Ie(Ce.b*255,0,255))}getHexString(t=He){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wt.workingColorSpace){Wt.fromWorkingColorSpace(Ce.copy(this),e);const i=Ce.r,r=Ce.g,s=Ce.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Wt.workingColorSpace){return Wt.fromWorkingColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=He){Wt.fromWorkingColorSpace(Ce.copy(this),t);const e=Ce.r,i=Ce.g,r=Ce.b;return t!==He?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(ii),this.setHSL(ii.h+t,ii.s+e,ii.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ii),t.getHSL(as);const i=ia(ii.h,as.h,e),r=ia(ii.s,as.s,e),s=ia(ii.l,as.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ce=new Pt;Pt.NAMES=Qc;let sd=0;class xr extends Oi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=Xr(),this.name="",this.blending=ar,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ba,this.blendDst=za,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=El,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ar&&(i.blending=this.blending),this.side!==ui&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ba&&(i.blendSrc=this.blendSrc),this.blendDst!==za&&(i.blendDst=this.blendDst),this.blendEquation!==Ti&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==hr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==El&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ks extends xr{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=Oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new N,os=new Rt;class _e{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Tl,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)os.fromBufferAttribute(this,e),os.applyMatrix3(t),this.setXY(e,os.x,os.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Tr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Oe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Tr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Tr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Tr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Tr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array),r=Oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array),r=Oe(r,this.array),s=Oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Tl&&(t.usage=this.usage),t}}class th extends _e{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class eh extends _e{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class xe extends _e{constructor(t,e,i){super(new Float32Array(t),e,i)}}let ad=0;const Je=new oe,Sa=new Ee,$i=new N,Xe=new qr,Rr=new qr,Se=new N;class Ne extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=Xr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($c(t)?eh:th)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new It().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,i){return Je.makeTranslation(t,e,i),this.applyMatrix4(Je),this}scale(t,e,i){return Je.makeScale(t,e,i),this.applyMatrix4(Je),this}lookAt(t){return Sa.lookAt(t),Sa.updateMatrix(),this.applyMatrix4(Sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xe(i,3))}else{for(let i=0,r=e.count;i<r;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Xe.setFromBufferAttribute(s),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ys);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const i=this.boundingSphere.center;if(Xe.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Rr.setFromBufferAttribute(a),this.morphTargetsRelative?(Se.addVectors(Xe.min,Rr.min),Xe.expandByPoint(Se),Se.addVectors(Xe.max,Rr.max),Xe.expandByPoint(Se)):(Xe.expandByPoint(Rr.min),Xe.expandByPoint(Rr.max))}Xe.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)Se.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Se));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Se.fromBufferAttribute(a,c),l&&($i.fromBufferAttribute(t,c),Se.add($i)),r=Math.max(r,i.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _e(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new N,l[I]=new N;const c=new N,h=new N,u=new N,f=new Rt,m=new Rt,_=new Rt,g=new N,p=new N;function d(I,y,M){c.fromBufferAttribute(i,I),h.fromBufferAttribute(i,y),u.fromBufferAttribute(i,M),f.fromBufferAttribute(s,I),m.fromBufferAttribute(s,y),_.fromBufferAttribute(s,M),h.sub(c),u.sub(c),m.sub(f),_.sub(f);const R=1/(m.x*_.y-_.x*m.y);isFinite(R)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-m.y).multiplyScalar(R),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-_.x).multiplyScalar(R),a[I].add(g),a[y].add(g),a[M].add(g),l[I].add(p),l[y].add(p),l[M].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let I=0,y=b.length;I<y;++I){const M=b[I],R=M.start,G=M.count;for(let z=R,W=R+G;z<W;z+=3)d(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const E=new N,S=new N,U=new N,A=new N;function w(I){U.fromBufferAttribute(r,I),A.copy(U);const y=a[I];E.copy(y),E.sub(U.multiplyScalar(U.dot(y))).normalize(),S.crossVectors(A,y);const R=S.dot(l[I])<0?-1:1;o.setXYZW(I,E.x,E.y,E.z,R)}for(let I=0,y=b.length;I<y;++I){const M=b[I],R=M.start,G=M.count;for(let z=R,W=R+G;z<W;z+=3)w(t.getX(z+0)),w(t.getX(z+1)),w(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _e(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,c=new N,h=new N,u=new N;if(t)for(let f=0,m=t.count;f<m;f+=3){const _=t.getX(f+0),g=t.getX(f+1),p=t.getX(f+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,p),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let m=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*h;for(let d=0;d<h;d++)f[_++]=c[m++]}return new _e(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ne,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,i);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],m=t(f,i);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hl=new oe,vi=new js,ls=new Ys,Vl=new N,cs=new N,hs=new N,us=new N,ya=new N,ds=new N,Gl=new N,fs=new N;class en extends Ee{constructor(t=new Ne,e=new Ks){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){ds.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(ya.fromBufferAttribute(u,t),o?ds.addScaledVector(ya,h):ds.addScaledVector(ya.sub(e),h))}e.add(ds)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ls.copy(i.boundingSphere),ls.applyMatrix4(s),vi.copy(t.ray).recast(t.near),!(ls.containsPoint(vi.origin)===!1&&(vi.intersectSphere(ls,Vl)===null||vi.origin.distanceToSquared(Vl)>(t.far-t.near)**2))&&(Hl.copy(s).invert(),vi.copy(t.ray).applyMatrix4(Hl),!(i.boundingBox!==null&&vi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,vi)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],d=o[p.materialIndex],b=Math.max(p.start,m.start),E=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let S=b,U=E;S<U;S+=3){const A=a.getX(S),w=a.getX(S+1),I=a.getX(S+2);r=ps(this,d,t,i,c,h,u,A,w,I),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const _=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let p=_,d=g;p<d;p+=3){const b=a.getX(p),E=a.getX(p+1),S=a.getX(p+2);r=ps(this,o,t,i,c,h,u,b,E,S),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],d=o[p.materialIndex],b=Math.max(p.start,m.start),E=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=b,U=E;S<U;S+=3){const A=S,w=S+1,I=S+2;r=ps(this,d,t,i,c,h,u,A,w,I),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=_,d=g;p<d;p+=3){const b=p,E=p+1,S=p+2;r=ps(this,o,t,i,c,h,u,b,E,S),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}}function od(n,t,e,i,r,s,o,a){let l;if(t.side===Ve?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,t.side===ui,a),l===null)return null;fs.copy(a),fs.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(fs);return c<e.near||c>e.far?null:{distance:c,point:fs.clone(),object:n}}function ps(n,t,e,i,r,s,o,a,l,c){n.getVertexPosition(a,cs),n.getVertexPosition(l,hs),n.getVertexPosition(c,us);const h=od(n,t,e,i,cs,hs,us,Gl);if(h){const u=new N;fn.getBarycoord(Gl,cs,hs,us,u),r&&(h.uv=fn.getInterpolatedAttribute(r,a,l,c,u,new Rt)),s&&(h.uv1=fn.getInterpolatedAttribute(s,a,l,c,u,new Rt)),o&&(h.normal=fn.getInterpolatedAttribute(o,a,l,c,u,new N),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new N,materialIndex:0};fn.getNormal(cs,hs,us,f.normal),h.face=f,h.barycoord=u}return h}class Yr extends Ne{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,m=0;_("z","y","x",-1,-1,i,e,t,o,s,0),_("z","y","x",1,-1,i,e,-t,o,s,1),_("x","z","y",1,1,t,i,e,r,o,2),_("x","z","y",1,-1,t,i,-e,r,o,3),_("x","y","z",1,-1,t,e,i,r,s,4),_("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new xe(c,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(u,2));function _(g,p,d,b,E,S,U,A,w,I,y){const M=S/w,R=U/I,G=S/2,z=U/2,W=A/2,K=w+1,H=I+1;let Z=0,k=0;const rt=new N;for(let ht=0;ht<H;ht++){const St=ht*R-z;for(let Ot=0;Ot<K;Ot++){const te=Ot*M-G;rt[g]=te*b,rt[p]=St*E,rt[d]=W,c.push(rt.x,rt.y,rt.z),rt[g]=0,rt[p]=0,rt[d]=A>0?1:-1,h.push(rt.x,rt.y,rt.z),u.push(Ot/w),u.push(1-ht/I),Z+=1}}for(let ht=0;ht<I;ht++)for(let St=0;St<w;St++){const Ot=f+St+K*ht,te=f+St+K*(ht+1),q=f+(St+1)+K*(ht+1),tt=f+(St+1)+K*ht;l.push(Ot,te,tt),l.push(te,q,tt),k+=6}a.addGroup(m,k,y),m+=k,f+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function mr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Le(n){const t={};for(let e=0;e<n.length;e++){const i=mr(n[e]);for(const r in i)t[r]=i[r]}return t}function ld(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function nh(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Wt.workingColorSpace}const cd={clone:mr,merge:Le};var hd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ud=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends xr{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hd,this.fragmentShader=ud,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=mr(t.uniforms),this.uniformsGroups=ld(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class ih extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=Yn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ri=new N,Wl=new Rt,Xl=new Rt;class tn extends ih{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=To*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ds*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return To*2*Math.atan(Math.tan(Ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ri.x,ri.y).multiplyScalar(-t/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ri.x,ri.y).multiplyScalar(-t/ri.z)}getViewSize(t,e){return this.getViewBounds(t,Wl,Xl),e.subVectors(Xl,Wl)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ds*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Zi=-90,Ji=1;class dd extends Ee{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new tn(Zi,Ji,t,e);r.layers=this.layers,this.add(r);const s=new tn(Zi,Ji,t,e);s.layers=this.layers,this.add(s);const o=new tn(Zi,Ji,t,e);o.layers=this.layers,this.add(o);const a=new tn(Zi,Ji,t,e);a.layers=this.layers,this.add(a);const l=new tn(Zi,Ji,t,e);l.layers=this.layers,this.add(l);const c=new tn(Zi,Ji,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Yn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ns)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,c),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,r),t.render(e,h),t.setRenderTarget(u,f,m),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class rh extends Ue{constructor(t,e,i,r,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ur,super(t,e,i,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class fd extends Di{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new rh(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:gn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Yr(5,5,5),s=new di({name:"CubemapFromEquirect",uniforms:mr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ve,blending:ci});s.uniforms.tEquirect.value=e;const o=new en(r,s),a=e.minFilter;return e.minFilter===Ri&&(e.minFilter=gn),new dd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}const Ea=new N,pd=new N,md=new It;class si{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Ea.subVectors(i,e).cross(pd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Ea),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||md.getNormalMatrix(t),r=this.coplanarPoint(Ea).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mi=new Ys,ms=new N;class Wo{constructor(t=new si,e=new si,i=new si,r=new si,s=new si,o=new si){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Yn){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],u=r[6],f=r[7],m=r[8],_=r[9],g=r[10],p=r[11],d=r[12],b=r[13],E=r[14],S=r[15];if(i[0].setComponents(l-s,f-c,p-m,S-d).normalize(),i[1].setComponents(l+s,f+c,p+m,S+d).normalize(),i[2].setComponents(l+o,f+h,p+_,S+b).normalize(),i[3].setComponents(l-o,f-h,p-_,S-b).normalize(),i[4].setComponents(l-a,f-u,p-g,S-E).normalize(),e===Yn)i[5].setComponents(l+a,f+u,p+g,S+E).normalize();else if(e===Ns)i[5].setComponents(a,u,g,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(t){return Mi.center.set(0,0,0),Mi.radius=.7071067811865476,Mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(ms.x=r.normal.x>0?t.max.x:t.min.x,ms.y=r.normal.y>0?t.max.y:t.min.y,ms.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ms)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sh(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function gd(n){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((m,_)=>m.start-_.start);let f=0;for(let m=1;m<u.length;m++){const _=u[f],g=u[m];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,u[f]=g)}u.length=f+1;for(let m=0,_=u.length;m<_;m++){const g=u[m];n.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class $s extends Ne{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,u=t/a,f=e/l,m=[],_=[],g=[],p=[];for(let d=0;d<h;d++){const b=d*f-o;for(let E=0;E<c;E++){const S=E*u-s;_.push(S,-b,0),g.push(0,0,1),p.push(E/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<a;b++){const E=b+c*d,S=b+c*(d+1),U=b+1+c*(d+1),A=b+1+c*d;m.push(E,S,A),m.push(S,U,A)}this.setIndex(m),this.setAttribute("position",new xe(_,3)),this.setAttribute("normal",new xe(g,3)),this.setAttribute("uv",new xe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $s(t.width,t.height,t.widthSegments,t.heightSegments)}}var _d=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Md=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ed=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Td=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ad=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Pd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ld=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Od=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,kd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Hd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Vd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Gd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yd="gl_FragColor = linearToOutputTexel( gl_FragColor );",jd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$d=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Jd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ef=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,af=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,of=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,hf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,uf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,df=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ff=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_f=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ef=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Af=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Df=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,If=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Uf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ff=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Of=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Hf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Yf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$f=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,tp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ep=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,np=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ip=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ap=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,op=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,up=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _p=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ep=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Tp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,bp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ap=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Dp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ip=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Up=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Np=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Fp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Op=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Bp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Vp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$p=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Nt={alphahash_fragment:_d,alphahash_pars_fragment:xd,alphamap_fragment:vd,alphamap_pars_fragment:Md,alphatest_fragment:Sd,alphatest_pars_fragment:yd,aomap_fragment:Ed,aomap_pars_fragment:Td,batching_pars_vertex:bd,batching_vertex:Ad,begin_vertex:wd,beginnormal_vertex:Rd,bsdfs:Cd,iridescence_fragment:Pd,bumpmap_pars_fragment:Ld,clipping_planes_fragment:Dd,clipping_planes_pars_fragment:Id,clipping_planes_pars_vertex:Ud,clipping_planes_vertex:Nd,color_fragment:Fd,color_pars_fragment:Od,color_pars_vertex:Bd,color_vertex:zd,common:kd,cube_uv_reflection_fragment:Hd,defaultnormal_vertex:Vd,displacementmap_pars_vertex:Gd,displacementmap_vertex:Wd,emissivemap_fragment:Xd,emissivemap_pars_fragment:qd,colorspace_fragment:Yd,colorspace_pars_fragment:jd,envmap_fragment:Kd,envmap_common_pars_fragment:$d,envmap_pars_fragment:Zd,envmap_pars_vertex:Jd,envmap_physical_pars_fragment:hf,envmap_vertex:Qd,fog_vertex:tf,fog_pars_vertex:ef,fog_fragment:nf,fog_pars_fragment:rf,gradientmap_pars_fragment:sf,lightmap_pars_fragment:af,lights_lambert_fragment:of,lights_lambert_pars_fragment:lf,lights_pars_begin:cf,lights_toon_fragment:uf,lights_toon_pars_fragment:df,lights_phong_fragment:ff,lights_phong_pars_fragment:pf,lights_physical_fragment:mf,lights_physical_pars_fragment:gf,lights_fragment_begin:_f,lights_fragment_maps:xf,lights_fragment_end:vf,logdepthbuf_fragment:Mf,logdepthbuf_pars_fragment:Sf,logdepthbuf_pars_vertex:yf,logdepthbuf_vertex:Ef,map_fragment:Tf,map_pars_fragment:bf,map_particle_fragment:Af,map_particle_pars_fragment:wf,metalnessmap_fragment:Rf,metalnessmap_pars_fragment:Cf,morphinstance_vertex:Pf,morphcolor_vertex:Lf,morphnormal_vertex:Df,morphtarget_pars_vertex:If,morphtarget_vertex:Uf,normal_fragment_begin:Nf,normal_fragment_maps:Ff,normal_pars_fragment:Of,normal_pars_vertex:Bf,normal_vertex:zf,normalmap_pars_fragment:kf,clearcoat_normal_fragment_begin:Hf,clearcoat_normal_fragment_maps:Vf,clearcoat_pars_fragment:Gf,iridescence_pars_fragment:Wf,opaque_fragment:Xf,packing:qf,premultiplied_alpha_fragment:Yf,project_vertex:jf,dithering_fragment:Kf,dithering_pars_fragment:$f,roughnessmap_fragment:Zf,roughnessmap_pars_fragment:Jf,shadowmap_pars_fragment:Qf,shadowmap_pars_vertex:tp,shadowmap_vertex:ep,shadowmask_pars_fragment:np,skinbase_vertex:ip,skinning_pars_vertex:rp,skinning_vertex:sp,skinnormal_vertex:ap,specularmap_fragment:op,specularmap_pars_fragment:lp,tonemapping_fragment:cp,tonemapping_pars_fragment:hp,transmission_fragment:up,transmission_pars_fragment:dp,uv_pars_fragment:fp,uv_pars_vertex:pp,uv_vertex:mp,worldpos_vertex:gp,background_vert:_p,background_frag:xp,backgroundCube_vert:vp,backgroundCube_frag:Mp,cube_vert:Sp,cube_frag:yp,depth_vert:Ep,depth_frag:Tp,distanceRGBA_vert:bp,distanceRGBA_frag:Ap,equirect_vert:wp,equirect_frag:Rp,linedashed_vert:Cp,linedashed_frag:Pp,meshbasic_vert:Lp,meshbasic_frag:Dp,meshlambert_vert:Ip,meshlambert_frag:Up,meshmatcap_vert:Np,meshmatcap_frag:Fp,meshnormal_vert:Op,meshnormal_frag:Bp,meshphong_vert:zp,meshphong_frag:kp,meshphysical_vert:Hp,meshphysical_frag:Vp,meshtoon_vert:Gp,meshtoon_frag:Wp,points_vert:Xp,points_frag:qp,shadow_vert:Yp,shadow_frag:jp,sprite_vert:Kp,sprite_frag:$p},nt={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},envMapRotation:{value:new It},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},Rn={basic:{uniforms:Le([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:Le([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:Le([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:Le([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:Le([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:Le([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:Le([nt.points,nt.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:Le([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:Le([nt.common,nt.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:Le([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:Le([nt.sprite,nt.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new It}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:Le([nt.common,nt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:Le([nt.lights,nt.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};Rn.physical={uniforms:Le([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};const gs={r:0,b:0,g:0},Si=new Nn,Zp=new oe;function Jp(n,t,e,i,r,s,o){const a=new Pt(0);let l=s===!0?0:1,c,h,u=null,f=0,m=null;function _(b){let E=b.isScene===!0?b.background:null;return E&&E.isTexture&&(E=(b.backgroundBlurriness>0?e:t).get(E)),E}function g(b){let E=!1;const S=_(b);S===null?d(a,l):S&&S.isColor&&(d(S,1),E=!0);const U=n.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(b,E){const S=_(E);S&&(S.isCubeTexture||S.mapping===Xs)?(h===void 0&&(h=new en(new Yr(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:mr(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Si.copy(E.backgroundRotation),Si.x*=-1,Si.y*=-1,Si.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Zp.makeRotationFromEuler(Si)),h.material.toneMapped=Wt.getTransfer(S.colorSpace)!==Jt,(u!==S||f!==S.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,u=S,f=S.version,m=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new en(new $s(2,2),new di({name:"BackgroundMaterial",uniforms:mr(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Wt.getTransfer(S.colorSpace)!==Jt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,m=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function d(b,E){b.getRGB(gs,nh(n)),i.buffers.color.setClear(gs.r,gs.g,gs.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(b,E=1){a.set(b),l=E,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,d(a,l)},render:g,addToRenderList:p}}function Qp(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(M,R,G,z,W){let K=!1;const H=u(z,G,R);s!==H&&(s=H,c(s.object)),K=m(M,z,G,W),K&&_(M,z,G,W),W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,S(M,R,G,z),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function u(M,R,G){const z=G.wireframe===!0;let W=i[M.id];W===void 0&&(W={},i[M.id]=W);let K=W[R.id];K===void 0&&(K={},W[R.id]=K);let H=K[z];return H===void 0&&(H=f(l()),K[z]=H),H}function f(M){const R=[],G=[],z=[];for(let W=0;W<e;W++)R[W]=0,G[W]=0,z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:G,attributeDivisors:z,object:M,attributes:{},index:null}}function m(M,R,G,z){const W=s.attributes,K=R.attributes;let H=0;const Z=G.getAttributes();for(const k in Z)if(Z[k].location>=0){const ht=W[k];let St=K[k];if(St===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(St=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(St=M.instanceColor)),ht===void 0||ht.attribute!==St||St&&ht.data!==St.data)return!0;H++}return s.attributesNum!==H||s.index!==z}function _(M,R,G,z){const W={},K=R.attributes;let H=0;const Z=G.getAttributes();for(const k in Z)if(Z[k].location>=0){let ht=K[k];ht===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(ht=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(ht=M.instanceColor));const St={};St.attribute=ht,ht&&ht.data&&(St.data=ht.data),W[k]=St,H++}s.attributes=W,s.attributesNum=H,s.index=z}function g(){const M=s.newAttributes;for(let R=0,G=M.length;R<G;R++)M[R]=0}function p(M){d(M,0)}function d(M,R){const G=s.newAttributes,z=s.enabledAttributes,W=s.attributeDivisors;G[M]=1,z[M]===0&&(n.enableVertexAttribArray(M),z[M]=1),W[M]!==R&&(n.vertexAttribDivisor(M,R),W[M]=R)}function b(){const M=s.newAttributes,R=s.enabledAttributes;for(let G=0,z=R.length;G<z;G++)R[G]!==M[G]&&(n.disableVertexAttribArray(G),R[G]=0)}function E(M,R,G,z,W,K,H){H===!0?n.vertexAttribIPointer(M,R,G,W,K):n.vertexAttribPointer(M,R,G,z,W,K)}function S(M,R,G,z){g();const W=z.attributes,K=G.getAttributes(),H=R.defaultAttributeValues;for(const Z in K){const k=K[Z];if(k.location>=0){let rt=W[Z];if(rt===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(rt=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(rt=M.instanceColor)),rt!==void 0){const ht=rt.normalized,St=rt.itemSize,Ot=t.get(rt);if(Ot===void 0)continue;const te=Ot.buffer,q=Ot.type,tt=Ot.bytesPerElement,_t=q===n.INT||q===n.UNSIGNED_INT||rt.gpuType===No;if(rt.isInterleavedBufferAttribute){const st=rt.data,bt=st.stride,Ct=rt.offset;if(st.isInstancedInterleavedBuffer){for(let Bt=0;Bt<k.locationSize;Bt++)d(k.location+Bt,st.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Bt=0;Bt<k.locationSize;Bt++)p(k.location+Bt);n.bindBuffer(n.ARRAY_BUFFER,te);for(let Bt=0;Bt<k.locationSize;Bt++)E(k.location+Bt,St/k.locationSize,q,ht,bt*tt,(Ct+St/k.locationSize*Bt)*tt,_t)}else{if(rt.isInstancedBufferAttribute){for(let st=0;st<k.locationSize;st++)d(k.location+st,rt.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let st=0;st<k.locationSize;st++)p(k.location+st);n.bindBuffer(n.ARRAY_BUFFER,te);for(let st=0;st<k.locationSize;st++)E(k.location+st,St/k.locationSize,q,ht,St*tt,St/k.locationSize*st*tt,_t)}}else if(H!==void 0){const ht=H[Z];if(ht!==void 0)switch(ht.length){case 2:n.vertexAttrib2fv(k.location,ht);break;case 3:n.vertexAttrib3fv(k.location,ht);break;case 4:n.vertexAttrib4fv(k.location,ht);break;default:n.vertexAttrib1fv(k.location,ht)}}}}b()}function U(){I();for(const M in i){const R=i[M];for(const G in R){const z=R[G];for(const W in z)h(z[W].object),delete z[W];delete R[G]}delete i[M]}}function A(M){if(i[M.id]===void 0)return;const R=i[M.id];for(const G in R){const z=R[G];for(const W in z)h(z[W].object),delete z[W];delete R[G]}delete i[M.id]}function w(M){for(const R in i){const G=i[R];if(G[M.id]===void 0)continue;const z=G[M.id];for(const W in z)h(z[W].object),delete z[W];delete G[M.id]}}function I(){y(),o=!0,s!==r&&(s=r,c(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:y,dispose:U,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:p,disableUnusedAttributes:b}}function tm(n,t,e){let i;function r(c){i=c}function s(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_];e.update(m,i,1)}function l(c,h,u,f){if(u===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)o(c[_],h[_],f[_]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g]*f[g];e.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function em(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==_n&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const I=w===Wr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Un&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==qn&&!I)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),U=_>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:S,vertexTextures:U,maxSamples:A}}function nm(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new si,a=new It,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||i!==0||r;return r=f,i=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,m){const _=u.clippingPlanes,g=u.clipIntersection,p=u.clipShadows,d=n.get(u);if(!r||_===null||_.length===0||s&&!p)s?h(null):c();else{const b=s?0:i,E=b*4;let S=d.clippingState||null;l.value=S,S=h(_,f,E,m);for(let U=0;U!==E;++U)S[U]=e[U];d.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,m,_){const g=u!==null?u.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const d=m+g*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<d)&&(p=new Float32Array(d));for(let E=0,S=m;E!==g;++E,S+=4)o.copy(u[E]).applyMatrix4(b,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function im(n){let t=new WeakMap;function e(o,a){return a===Ya?o.mapping=ur:a===ja&&(o.mapping=dr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ya||a===ja)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new fd(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class ah extends ih{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ir=4,ql=[.125,.215,.35,.446,.526,.582],bi=20,Ta=new ah,Yl=new Pt;let ba=null,Aa=0,wa=0,Ra=!1;const Ei=(1+Math.sqrt(5))/2,Qi=1/Ei,jl=[new N(-Ei,Qi,0),new N(Ei,Qi,0),new N(-Qi,0,Ei),new N(Qi,0,Ei),new N(0,Ei,-Qi),new N(0,Ei,Qi),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class Kl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){ba=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel(),Ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ba,Aa,wa),this._renderer.xr.enabled=Ra,t.scissorTest=!1,_s(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ur||t.mapping===dr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ba=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel(),Ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:Wr,format:_n,colorSpace:_r,depthBuffer:!1},r=$l(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$l(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rm(s)),this._blurMaterial=sm(s,t,e)}return r}_compileMaterial(t){const e=new en(this._lodPlanes[0],t);this._renderer.compile(e,Ta)}_sceneToCubeUV(t,e,i,r){const a=new tn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Yl),h.toneMapping=hi,h.autoClear=!1;const m=new Ks({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),_=new en(new Yr,m);let g=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,g=!0):(m.color.copy(Yl),g=!0);for(let d=0;d<6;d++){const b=d%3;b===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):b===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const E=this._cubeSize;_s(r,b*E,d>2?E:0,E,E),h.setRenderTarget(r),g&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===ur||t.mapping===dr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zl());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new en(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;_s(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Ta)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=jl[(r-s-1)%jl.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new en(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*bi-1),g=s/_,p=isFinite(s)?1+Math.floor(h*g):bi;p>bi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${bi}`);const d=[];let b=0;for(let w=0;w<bi;++w){const I=w/g,y=Math.exp(-I*I/2);d.push(y),w===0?b+=y:w<p&&(b+=2*y)}for(let w=0;w<d.length;w++)d[w]=d[w]/b;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:E}=this;f.dTheta.value=_,f.mipInt.value=E-i;const S=this._sizeLods[r],U=3*S*(r>E-ir?r-E+ir:0),A=4*(this._cubeSize-S);_s(e,U,A,3*S,2*S),l.setRenderTarget(e),l.render(u,Ta)}}function rm(n){const t=[],e=[],i=[];let r=n;const s=n-ir+1+ql.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-ir?l=ql[o-n+ir-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,_=6,g=3,p=2,d=1,b=new Float32Array(g*_*m),E=new Float32Array(p*_*m),S=new Float32Array(d*_*m);for(let A=0;A<m;A++){const w=A%3*2/3-1,I=A>2?0:-1,y=[w,I,0,w+2/3,I,0,w+2/3,I+1,0,w,I,0,w+2/3,I+1,0,w,I+1,0];b.set(y,g*_*A),E.set(f,p*_*A);const M=[A,A,A,A,A,A];S.set(M,d*_*A)}const U=new Ne;U.setAttribute("position",new _e(b,g)),U.setAttribute("uv",new _e(E,p)),U.setAttribute("faceIndex",new _e(S,d)),t.push(U),r>ir&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function $l(n,t,e){const i=new Di(n,t,e);return i.texture.mapping=Xs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _s(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function sm(n,t,e){const i=new Float32Array(bi),r=new N(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Zl(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Jl(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Xo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function am(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ya||l===ja,h=l===ur||l===dr;if(c||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Kl(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const m=a.image;return c&&m&&m.height>0||h&&m&&r(m)?(e===null&&(e=new Kl(n)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function om(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&Nr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function lm(n,t,e,i){const r={},s=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let p=0,d=g.length;p<d;p++)t.remove(g[p])}f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(t.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const _ in f)t.update(f[_],n.ARRAY_BUFFER);const m=u.morphAttributes;for(const _ in m){const g=m[_];for(let p=0,d=g.length;p<d;p++)t.update(g[p],n.ARRAY_BUFFER)}}function c(u){const f=[],m=u.index,_=u.attributes.position;let g=0;if(m!==null){const b=m.array;g=m.version;for(let E=0,S=b.length;E<S;E+=3){const U=b[E+0],A=b[E+1],w=b[E+2];f.push(U,A,A,w,w,U)}}else if(_!==void 0){const b=_.array;g=_.version;for(let E=0,S=b.length/3-1;E<S;E+=3){const U=E+0,A=E+1,w=E+2;f.push(U,A,A,w,w,U)}}else return;const p=new($c(f)?eh:th)(f,1);p.version=g;const d=s.get(u);d&&t.remove(d),s.set(u,p)}function h(u){const f=s.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function cm(n,t,e){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,m){n.drawElements(i,m,s,f*o),e.update(m,i,1)}function c(f,m,_){_!==0&&(n.drawElementsInstanced(i,m,s,f*o,_),e.update(m,i,_))}function h(f,m,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,f,0,_);let p=0;for(let d=0;d<_;d++)p+=m[d];e.update(p,i,1)}function u(f,m,_,g){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<f.length;d++)c(f[d]/o,m[d],g[d]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,f,0,g,0,_);let d=0;for(let b=0;b<_;b++)d+=m[b]*g[b];e.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function hm(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function um(n,t,e){const i=new WeakMap,r=new ue;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(a);if(f===void 0||f.count!==u){let y=function(){w.dispose(),i.delete(a),a.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let E=0;m===!0&&(E=1),_===!0&&(E=2),g===!0&&(E=3);let S=a.attributes.position.count*E,U=1;S>t.maxTextureSize&&(U=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const A=new Float32Array(S*U*4*u),w=new Jc(A,S,U,u);w.type=qn,w.needsUpdate=!0;const I=E*4;for(let M=0;M<u;M++){const R=p[M],G=d[M],z=b[M],W=S*U*4*M;for(let K=0;K<R.count;K++){const H=K*I;m===!0&&(r.fromBufferAttribute(R,K),A[W+H+0]=r.x,A[W+H+1]=r.y,A[W+H+2]=r.z,A[W+H+3]=0),_===!0&&(r.fromBufferAttribute(G,K),A[W+H+4]=r.x,A[W+H+5]=r.y,A[W+H+6]=r.z,A[W+H+7]=0),g===!0&&(r.fromBufferAttribute(z,K),A[W+H+8]=r.x,A[W+H+9]=r.y,A[W+H+10]=r.z,A[W+H+11]=z.itemSize===4?r.w:1)}}f={count:u,texture:w,size:new Rt(S,U)},i.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const _=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function dm(n,t,e,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,u=t.get(l,h);if(r.get(u)!==c&&(t.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return u}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class oh extends Ue{constructor(t,e,i,r,s,o,a,l,c,h=or){if(h!==or&&h!==pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===or&&(i=Li),i===void 0&&h===pr&&(i=fr),super(null,r,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:je,this.minFilter=l!==void 0?l:je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const lh=new Ue,Ql=new oh(1,1),ch=new Jc,hh=new Zu,uh=new rh,tc=[],ec=[],nc=new Float32Array(16),ic=new Float32Array(9),rc=new Float32Array(4);function vr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=tc[r];if(s===void 0&&(s=new Float32Array(r),tc[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function ve(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Me(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Zs(n,t){let e=ec[t];e===void 0&&(e=new Int32Array(t),ec[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function fm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function pm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;n.uniform2fv(this.addr,t),Me(e,t)}}function mm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;n.uniform3fv(this.addr,t),Me(e,t)}}function gm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;n.uniform4fv(this.addr,t),Me(e,t)}}function _m(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ve(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(ve(e,i))return;rc.set(i),n.uniformMatrix2fv(this.addr,!1,rc),Me(e,i)}}function xm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ve(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(ve(e,i))return;ic.set(i),n.uniformMatrix3fv(this.addr,!1,ic),Me(e,i)}}function vm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ve(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(ve(e,i))return;nc.set(i),n.uniformMatrix4fv(this.addr,!1,nc),Me(e,i)}}function Mm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Sm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;n.uniform2iv(this.addr,t),Me(e,t)}}function ym(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;n.uniform3iv(this.addr,t),Me(e,t)}}function Em(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;n.uniform4iv(this.addr,t),Me(e,t)}}function Tm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function bm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;n.uniform2uiv(this.addr,t),Me(e,t)}}function Am(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;n.uniform3uiv(this.addr,t),Me(e,t)}}function wm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;n.uniform4uiv(this.addr,t),Me(e,t)}}function Rm(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Ql.compareFunction=Kc,s=Ql):s=lh,e.setTexture2D(t||s,r)}function Cm(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||hh,r)}function Pm(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||uh,r)}function Lm(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||ch,r)}function Dm(n){switch(n){case 5126:return fm;case 35664:return pm;case 35665:return mm;case 35666:return gm;case 35674:return _m;case 35675:return xm;case 35676:return vm;case 5124:case 35670:return Mm;case 35667:case 35671:return Sm;case 35668:case 35672:return ym;case 35669:case 35673:return Em;case 5125:return Tm;case 36294:return bm;case 36295:return Am;case 36296:return wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Rm;case 35679:case 36299:case 36307:return Cm;case 35680:case 36300:case 36308:case 36293:return Pm;case 36289:case 36303:case 36311:case 36292:return Lm}}function Im(n,t){n.uniform1fv(this.addr,t)}function Um(n,t){const e=vr(t,this.size,2);n.uniform2fv(this.addr,e)}function Nm(n,t){const e=vr(t,this.size,3);n.uniform3fv(this.addr,e)}function Fm(n,t){const e=vr(t,this.size,4);n.uniform4fv(this.addr,e)}function Om(n,t){const e=vr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Bm(n,t){const e=vr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function zm(n,t){const e=vr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function km(n,t){n.uniform1iv(this.addr,t)}function Hm(n,t){n.uniform2iv(this.addr,t)}function Vm(n,t){n.uniform3iv(this.addr,t)}function Gm(n,t){n.uniform4iv(this.addr,t)}function Wm(n,t){n.uniform1uiv(this.addr,t)}function Xm(n,t){n.uniform2uiv(this.addr,t)}function qm(n,t){n.uniform3uiv(this.addr,t)}function Ym(n,t){n.uniform4uiv(this.addr,t)}function jm(n,t,e){const i=this.cache,r=t.length,s=Zs(e,r);ve(i,s)||(n.uniform1iv(this.addr,s),Me(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||lh,s[o])}function Km(n,t,e){const i=this.cache,r=t.length,s=Zs(e,r);ve(i,s)||(n.uniform1iv(this.addr,s),Me(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||hh,s[o])}function $m(n,t,e){const i=this.cache,r=t.length,s=Zs(e,r);ve(i,s)||(n.uniform1iv(this.addr,s),Me(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||uh,s[o])}function Zm(n,t,e){const i=this.cache,r=t.length,s=Zs(e,r);ve(i,s)||(n.uniform1iv(this.addr,s),Me(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||ch,s[o])}function Jm(n){switch(n){case 5126:return Im;case 35664:return Um;case 35665:return Nm;case 35666:return Fm;case 35674:return Om;case 35675:return Bm;case 35676:return zm;case 5124:case 35670:return km;case 35667:case 35671:return Hm;case 35668:case 35672:return Vm;case 35669:case 35673:return Gm;case 5125:return Wm;case 36294:return Xm;case 36295:return qm;case 36296:return Ym;case 35678:case 36198:case 36298:case 36306:case 35682:return jm;case 35679:case 36299:case 36307:return Km;case 35680:case 36300:case 36308:case 36293:return $m;case 36289:case 36303:case 36311:case 36292:return Zm}}class Qm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Dm(e.type)}}class tg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Jm(e.type)}}class eg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const Ca=/(\w+)(\])?(\[|\.)?/g;function sc(n,t){n.seq.push(t),n.map[t.id]=t}function ng(n,t,e){const i=n.name,r=i.length;for(Ca.lastIndex=0;;){const s=Ca.exec(i),o=Ca.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){sc(e,c===void 0?new Qm(a,n,t):new tg(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new eg(a),sc(e,u)),e=u}}}class Is{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);ng(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function ac(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const ig=37297;let rg=0;function sg(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const oc=new It;function ag(n){Wt._getMatrix(oc,Wt.workingColorSpace,n);const t=`mat3( ${oc.elements.map(e=>e.toFixed(4))} )`;switch(Wt.getTransfer(n)){case qs:return[t,"LinearTransferOETF"];case Jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function lc(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+sg(n.getShaderSource(t),o)}else return r}function og(n,t){const e=ag(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function lg(n,t){let e;switch(t){case Eu:e="Linear";break;case Tu:e="Reinhard";break;case bu:e="Cineon";break;case Au:e="ACESFilmic";break;case Ru:e="AgX";break;case Cu:e="Neutral";break;case wu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const xs=new N;function cg(){Wt.getLuminanceCoefficients(xs);const n=xs.x.toFixed(4),t=xs.y.toFixed(4),e=xs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fr).join(`
`)}function ug(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function dg(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Fr(n){return n!==""}function cc(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const fg=/^[ \t]*#include +<([\w\d./]+)>/gm;function bo(n){return n.replace(fg,mg)}const pg=new Map;function mg(n,t){let e=Nt[t];if(e===void 0){const i=pg.get(t);if(i!==void 0)e=Nt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return bo(e)}const gg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uc(n){return n.replace(gg,_g)}function _g(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function dc(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function xg(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Fc?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===nu?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Xn&&(t="SHADOWMAP_TYPE_VSM"),t}function vg(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ur:case dr:t="ENVMAP_TYPE_CUBE";break;case Xs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Mg(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case dr:t="ENVMAP_MODE_REFRACTION";break}return t}function Sg(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Oc:t="ENVMAP_BLENDING_MULTIPLY";break;case Su:t="ENVMAP_BLENDING_MIX";break;case yu:t="ENVMAP_BLENDING_ADD";break}return t}function yg(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Eg(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=xg(e),c=vg(e),h=Mg(e),u=Sg(e),f=yg(e),m=hg(e),_=ug(s),g=r.createProgram();let p,d,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Fr).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Fr).join(`
`),d.length>0&&(d+=`
`)):(p=[dc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fr).join(`
`),d=[dc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hi?"#define TONE_MAPPING":"",e.toneMapping!==hi?Nt.tonemapping_pars_fragment:"",e.toneMapping!==hi?lg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,og("linearToOutputTexel",e.outputColorSpace),cg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fr).join(`
`)),o=bo(o),o=cc(o,e),o=hc(o,e),a=bo(a),a=cc(a,e),a=hc(a,e),o=uc(o),a=uc(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",e.glslVersion===bl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const E=b+p+o,S=b+d+a,U=ac(r,r.VERTEX_SHADER,E),A=ac(r,r.FRAGMENT_SHADER,S);r.attachShader(g,U),r.attachShader(g,A),e.index0AttributeName!==void 0?r.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function w(R){if(n.debug.checkShaderErrors){const G=r.getProgramInfoLog(g).trim(),z=r.getShaderInfoLog(U).trim(),W=r.getShaderInfoLog(A).trim();let K=!0,H=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,U,A);else{const Z=lc(r,U,"vertex"),k=lc(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+G+`
`+Z+`
`+k)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(z===""||W==="")&&(H=!1);H&&(R.diagnostics={runnable:K,programLog:G,vertexShader:{log:z,prefix:p},fragmentShader:{log:W,prefix:d}})}r.deleteShader(U),r.deleteShader(A),I=new Is(r,g),y=dg(r,g)}let I;this.getUniforms=function(){return I===void 0&&w(this),I};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(g,ig)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=rg++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=U,this.fragmentShader=A,this}let Tg=0;class bg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Ag(t),e.set(t,i)),i}}class Ag{constructor(t){this.id=Tg++,this.code=t,this.usedTimes=0}}function wg(n,t,e,i,r,s,o){const a=new Go,l=new bg,c=new Set,h=[],u=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,M,R,G,z){const W=G.fog,K=z.geometry,H=y.isMeshStandardMaterial?G.environment:null,Z=(y.isMeshStandardMaterial?e:t).get(y.envMap||H),k=Z&&Z.mapping===Xs?Z.image.height:null,rt=_[y.type];y.precision!==null&&(m=r.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const ht=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,St=ht!==void 0?ht.length:0;let Ot=0;K.morphAttributes.position!==void 0&&(Ot=1),K.morphAttributes.normal!==void 0&&(Ot=2),K.morphAttributes.color!==void 0&&(Ot=3);let te,q,tt,_t;if(rt){const $t=Rn[rt];te=$t.vertexShader,q=$t.fragmentShader}else te=y.vertexShader,q=y.fragmentShader,l.update(y),tt=l.getVertexShaderID(y),_t=l.getFragmentShaderID(y);const st=n.getRenderTarget(),bt=n.state.buffers.depth.getReversed(),Ct=z.isInstancedMesh===!0,Bt=z.isBatchedMesh===!0,le=!!y.map,Vt=!!y.matcap,de=!!Z,D=!!y.aoMap,$e=!!y.lightMap,zt=!!y.bumpMap,kt=!!y.normalMap,Et=!!y.displacementMap,re=!!y.emissiveMap,yt=!!y.metalnessMap,T=!!y.roughnessMap,x=y.anisotropy>0,F=y.clearcoat>0,Y=y.dispersion>0,$=y.iridescence>0,X=y.sheen>0,xt=y.transmission>0,at=x&&!!y.anisotropyMap,ut=F&&!!y.clearcoatMap,Gt=F&&!!y.clearcoatNormalMap,J=F&&!!y.clearcoatRoughnessMap,dt=$&&!!y.iridescenceMap,Tt=$&&!!y.iridescenceThicknessMap,At=X&&!!y.sheenColorMap,ft=X&&!!y.sheenRoughnessMap,Ht=!!y.specularMap,Ut=!!y.specularColorMap,ee=!!y.specularIntensityMap,C=xt&&!!y.transmissionMap,it=xt&&!!y.thicknessMap,V=!!y.gradientMap,j=!!y.alphaMap,ct=y.alphaTest>0,ot=!!y.alphaHash,Lt=!!y.extensions;let he=hi;y.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(he=n.toneMapping);const we={shaderID:rt,shaderType:y.type,shaderName:y.name,vertexShader:te,fragmentShader:q,defines:y.defines,customVertexShaderID:tt,customFragmentShaderID:_t,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Bt,batchingColor:Bt&&z._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&z.instanceColor!==null,instancingMorph:Ct&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:st===null?n.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:_r,alphaToCoverage:!!y.alphaToCoverage,map:le,matcap:Vt,envMap:de,envMapMode:de&&Z.mapping,envMapCubeUVHeight:k,aoMap:D,lightMap:$e,bumpMap:zt,normalMap:kt,displacementMap:f&&Et,emissiveMap:re,normalMapObjectSpace:kt&&y.normalMapType===Iu,normalMapTangentSpace:kt&&y.normalMapType===jc,metalnessMap:yt,roughnessMap:T,anisotropy:x,anisotropyMap:at,clearcoat:F,clearcoatMap:ut,clearcoatNormalMap:Gt,clearcoatRoughnessMap:J,dispersion:Y,iridescence:$,iridescenceMap:dt,iridescenceThicknessMap:Tt,sheen:X,sheenColorMap:At,sheenRoughnessMap:ft,specularMap:Ht,specularColorMap:Ut,specularIntensityMap:ee,transmission:xt,transmissionMap:C,thicknessMap:it,gradientMap:V,opaque:y.transparent===!1&&y.blending===ar&&y.alphaToCoverage===!1,alphaMap:j,alphaTest:ct,alphaHash:ot,combine:y.combine,mapUv:le&&g(y.map.channel),aoMapUv:D&&g(y.aoMap.channel),lightMapUv:$e&&g(y.lightMap.channel),bumpMapUv:zt&&g(y.bumpMap.channel),normalMapUv:kt&&g(y.normalMap.channel),displacementMapUv:Et&&g(y.displacementMap.channel),emissiveMapUv:re&&g(y.emissiveMap.channel),metalnessMapUv:yt&&g(y.metalnessMap.channel),roughnessMapUv:T&&g(y.roughnessMap.channel),anisotropyMapUv:at&&g(y.anisotropyMap.channel),clearcoatMapUv:ut&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:At&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:ft&&g(y.sheenRoughnessMap.channel),specularMapUv:Ht&&g(y.specularMap.channel),specularColorMapUv:Ut&&g(y.specularColorMap.channel),specularIntensityMapUv:ee&&g(y.specularIntensityMap.channel),transmissionMapUv:C&&g(y.transmissionMap.channel),thicknessMapUv:it&&g(y.thicknessMap.channel),alphaMapUv:j&&g(y.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(kt||x),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!K.attributes.uv&&(le||j),fog:!!W,useFog:y.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:bt,skinning:z.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Ot,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:he,decodeVideoTexture:le&&y.map.isVideoTexture===!0&&Wt.getTransfer(y.map.colorSpace)===Jt,decodeVideoTextureEmissive:re&&y.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(y.emissiveMap.colorSpace)===Jt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ye,flipSided:y.side===Ve,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Lt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&y.extensions.multiDraw===!0||Bt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return we.vertexUv1s=c.has(1),we.vertexUv2s=c.has(2),we.vertexUv3s=c.has(3),c.clear(),we}function d(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)M.push(R),M.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(b(M,y),E(M,y),M.push(n.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function b(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function E(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),y.push(a.mask)}function S(y){const M=_[y.type];let R;if(M){const G=Rn[M];R=cd.clone(G.uniforms)}else R=y.uniforms;return R}function U(y,M){let R;for(let G=0,z=h.length;G<z;G++){const W=h[G];if(W.cacheKey===M){R=W,++R.usedTimes;break}}return R===void 0&&(R=new Eg(n,M,y,s),h.push(R)),R}function A(y){if(--y.usedTimes===0){const M=h.indexOf(y);h[M]=h[h.length-1],h.pop(),y.destroy()}}function w(y){l.remove(y)}function I(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:S,acquireProgram:U,releaseProgram:A,releaseShaderCache:w,programs:h,dispose:I}}function Rg(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function Cg(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function fc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function pc(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(u,f,m,_,g,p){let d=n[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:m,groupOrder:_,renderOrder:u.renderOrder,z:g,group:p},n[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=m,d.groupOrder=_,d.renderOrder=u.renderOrder,d.z=g,d.group=p),t++,d}function a(u,f,m,_,g,p){const d=o(u,f,m,_,g,p);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):e.push(d)}function l(u,f,m,_,g,p){const d=o(u,f,m,_,g,p);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||Cg),i.length>1&&i.sort(f||fc),r.length>1&&r.sort(f||fc)}function h(){for(let u=t,f=n.length;u<f;u++){const m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function Pg(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new pc,n.set(i,[o])):r>=s.length?(o=new pc,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Lg(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Pt};break;case"SpotLight":e={position:new N,direction:new N,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":e={color:new Pt,position:new N,halfWidth:new N,halfHeight:new N};break}return n[t.id]=e,e}}}function Dg(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Ig=0;function Ug(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Ng(n){const t=new Lg,e=Dg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const r=new N,s=new oe,o=new oe;function a(c){let h=0,u=0,f=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let m=0,_=0,g=0,p=0,d=0,b=0,E=0,S=0,U=0,A=0,w=0;c.sort(Ug);for(let y=0,M=c.length;y<M;y++){const R=c[y],G=R.color,z=R.intensity,W=R.distance,K=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=G.r*z,u+=G.g*z,f+=G.b*z;else if(R.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(R.sh.coefficients[H],z);w++}else if(R.isDirectionalLight){const H=t.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Z=R.shadow,k=e.get(R);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize=Z.mapSize,i.directionalShadow[m]=k,i.directionalShadowMap[m]=K,i.directionalShadowMatrix[m]=R.shadow.matrix,b++}i.directional[m]=H,m++}else if(R.isSpotLight){const H=t.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(G).multiplyScalar(z),H.distance=W,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,i.spot[g]=H;const Z=R.shadow;if(R.map&&(i.spotLightMap[U]=R.map,U++,Z.updateMatrices(R),R.castShadow&&A++),i.spotLightMatrix[g]=Z.matrix,R.castShadow){const k=e.get(R);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize=Z.mapSize,i.spotShadow[g]=k,i.spotShadowMap[g]=K,S++}g++}else if(R.isRectAreaLight){const H=t.get(R);H.color.copy(G).multiplyScalar(z),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),i.rectArea[p]=H,p++}else if(R.isPointLight){const H=t.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),H.distance=R.distance,H.decay=R.decay,R.castShadow){const Z=R.shadow,k=e.get(R);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize=Z.mapSize,k.shadowCameraNear=Z.camera.near,k.shadowCameraFar=Z.camera.far,i.pointShadow[_]=k,i.pointShadowMap[_]=K,i.pointShadowMatrix[_]=R.shadow.matrix,E++}i.point[_]=H,_++}else if(R.isHemisphereLight){const H=t.get(R);H.skyColor.copy(R.color).multiplyScalar(z),H.groundColor.copy(R.groundColor).multiplyScalar(z),i.hemi[d]=H,d++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=nt.LTC_FLOAT_1,i.rectAreaLTC2=nt.LTC_FLOAT_2):(i.rectAreaLTC1=nt.LTC_HALF_1,i.rectAreaLTC2=nt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const I=i.hash;(I.directionalLength!==m||I.pointLength!==_||I.spotLength!==g||I.rectAreaLength!==p||I.hemiLength!==d||I.numDirectionalShadows!==b||I.numPointShadows!==E||I.numSpotShadows!==S||I.numSpotMaps!==U||I.numLightProbes!==w)&&(i.directional.length=m,i.spot.length=g,i.rectArea.length=p,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=S+U-A,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=w,I.directionalLength=m,I.pointLength=_,I.spotLength=g,I.rectAreaLength=p,I.hemiLength=d,I.numDirectionalShadows=b,I.numPointShadows=E,I.numSpotShadows=S,I.numSpotMaps=U,I.numLightProbes=w,i.version=Ig++)}function l(c,h){let u=0,f=0,m=0,_=0,g=0;const p=h.matrixWorldInverse;for(let d=0,b=c.length;d<b;d++){const E=c[d];if(E.isDirectionalLight){const S=i.directional[u];S.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),u++}else if(E.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),m++}else if(E.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(p),o.identity(),s.copy(E.matrixWorld),s.premultiply(p),o.extractRotation(s),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(E.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(p),f++}else if(E.isHemisphereLight){const S=i.hemi[g];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:i}}function mc(n){const t=new Ng(n),e=[],i=[];function r(h){c.camera=h,e.length=0,i.length=0}function s(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Fg(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new mc(n),t.set(r,[a])):s>=o.length?(a=new mc(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class Og extends xr{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Lu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Bg extends xr{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const zg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Hg(n,t,e){let i=new Wo;const r=new Rt,s=new Rt,o=new ue,a=new Og({depthPacking:Du}),l=new Bg,c={},h=e.maxTextureSize,u={[ui]:Ve,[Ve]:ui,[Ye]:Ye},f=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:zg,fragmentShader:kg}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new Ne;_.setAttribute("position",new _e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new en(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fc;let d=this.type;this.render=function(A,w,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const y=n.getRenderTarget(),M=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),G=n.state;G.setBlending(ci),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const z=d!==Xn&&this.type===Xn,W=d===Xn&&this.type!==Xn;for(let K=0,H=A.length;K<H;K++){const Z=A[K],k=Z.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const rt=k.getFrameExtents();if(r.multiply(rt),s.copy(k.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/rt.x),r.x=s.x*rt.x,k.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/rt.y),r.y=s.y*rt.y,k.mapSize.y=s.y)),k.map===null||z===!0||W===!0){const St=this.type!==Xn?{minFilter:je,magFilter:je}:{};k.map!==null&&k.map.dispose(),k.map=new Di(r.x,r.y,St),k.map.texture.name=Z.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const ht=k.getViewportCount();for(let St=0;St<ht;St++){const Ot=k.getViewport(St);o.set(s.x*Ot.x,s.y*Ot.y,s.x*Ot.z,s.y*Ot.w),G.viewport(o),k.updateMatrices(Z,St),i=k.getFrustum(),S(w,I,k.camera,Z,this.type)}k.isPointLightShadow!==!0&&this.type===Xn&&b(k,I),k.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(y,M,R)};function b(A,w){const I=t.update(g);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Di(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(w,null,I,f,g,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(w,null,I,m,g,null)}function E(A,w,I,y){let M=null;const R=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)M=R;else if(M=I.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const G=M.uuid,z=w.uuid;let W=c[G];W===void 0&&(W={},c[G]=W);let K=W[z];K===void 0&&(K=M.clone(),W[z]=K,w.addEventListener("dispose",U)),M=K}if(M.visible=w.visible,M.wireframe=w.wireframe,y===Xn?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:u[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const G=n.properties.get(M);G.light=I}return M}function S(A,w,I,y,M){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===Xn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);const z=t.update(A),W=A.material;if(Array.isArray(W)){const K=z.groups;for(let H=0,Z=K.length;H<Z;H++){const k=K[H],rt=W[k.materialIndex];if(rt&&rt.visible){const ht=E(A,rt,y,M);A.onBeforeShadow(n,A,w,I,z,ht,k),n.renderBufferDirect(I,null,z,ht,A,k),A.onAfterShadow(n,A,w,I,z,ht,k)}}}else if(W.visible){const K=E(A,W,y,M);A.onBeforeShadow(n,A,w,I,z,K,null),n.renderBufferDirect(I,null,z,K,A,null),A.onAfterShadow(n,A,w,I,z,K,null)}}const G=A.children;for(let z=0,W=G.length;z<W;z++)S(G[z],w,I,y,M)}function U(A){A.target.removeEventListener("dispose",U);for(const I in c){const y=c[I],M=A.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const Vg={[ka]:Ha,[Va]:Xa,[Ga]:qa,[hr]:Wa,[Ha]:ka,[Xa]:Va,[qa]:Ga,[Wa]:hr};function Gg(n,t){function e(){let C=!1;const it=new ue;let V=null;const j=new ue(0,0,0,0);return{setMask:function(ct){V!==ct&&!C&&(n.colorMask(ct,ct,ct,ct),V=ct)},setLocked:function(ct){C=ct},setClear:function(ct,ot,Lt,he,we){we===!0&&(ct*=he,ot*=he,Lt*=he),it.set(ct,ot,Lt,he),j.equals(it)===!1&&(n.clearColor(ct,ot,Lt,he),j.copy(it))},reset:function(){C=!1,V=null,j.set(-1,0,0,0)}}}function i(){let C=!1,it=!1,V=null,j=null,ct=null;return{setReversed:function(ot){if(it!==ot){const Lt=t.get("EXT_clip_control");it?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT);const he=ct;ct=null,this.setClear(he)}it=ot},getReversed:function(){return it},setTest:function(ot){ot?st(n.DEPTH_TEST):bt(n.DEPTH_TEST)},setMask:function(ot){V!==ot&&!C&&(n.depthMask(ot),V=ot)},setFunc:function(ot){if(it&&(ot=Vg[ot]),j!==ot){switch(ot){case ka:n.depthFunc(n.NEVER);break;case Ha:n.depthFunc(n.ALWAYS);break;case Va:n.depthFunc(n.LESS);break;case hr:n.depthFunc(n.LEQUAL);break;case Ga:n.depthFunc(n.EQUAL);break;case Wa:n.depthFunc(n.GEQUAL);break;case Xa:n.depthFunc(n.GREATER);break;case qa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}j=ot}},setLocked:function(ot){C=ot},setClear:function(ot){ct!==ot&&(it&&(ot=1-ot),n.clearDepth(ot),ct=ot)},reset:function(){C=!1,V=null,j=null,ct=null,it=!1}}}function r(){let C=!1,it=null,V=null,j=null,ct=null,ot=null,Lt=null,he=null,we=null;return{setTest:function($t){C||($t?st(n.STENCIL_TEST):bt(n.STENCIL_TEST))},setMask:function($t){it!==$t&&!C&&(n.stencilMask($t),it=$t)},setFunc:function($t,sn,Fn){(V!==$t||j!==sn||ct!==Fn)&&(n.stencilFunc($t,sn,Fn),V=$t,j=sn,ct=Fn)},setOp:function($t,sn,Fn){(ot!==$t||Lt!==sn||he!==Fn)&&(n.stencilOp($t,sn,Fn),ot=$t,Lt=sn,he=Fn)},setLocked:function($t){C=$t},setClear:function($t){we!==$t&&(n.clearStencil($t),we=$t)},reset:function(){C=!1,it=null,V=null,j=null,ct=null,ot=null,Lt=null,he=null,we=null}}}const s=new e,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,m=[],_=null,g=!1,p=null,d=null,b=null,E=null,S=null,U=null,A=null,w=new Pt(0,0,0),I=0,y=!1,M=null,R=null,G=null,z=null,W=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Z=0;const k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(k)[1]),H=Z>=1):k.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),H=Z>=2);let rt=null,ht={};const St=n.getParameter(n.SCISSOR_BOX),Ot=n.getParameter(n.VIEWPORT),te=new ue().fromArray(St),q=new ue().fromArray(Ot);function tt(C,it,V,j){const ct=new Uint8Array(4),ot=n.createTexture();n.bindTexture(C,ot),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Lt=0;Lt<V;Lt++)C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY?n.texImage3D(it,0,n.RGBA,1,1,j,0,n.RGBA,n.UNSIGNED_BYTE,ct):n.texImage2D(it+Lt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ct);return ot}const _t={};_t[n.TEXTURE_2D]=tt(n.TEXTURE_2D,n.TEXTURE_2D,1),_t[n.TEXTURE_CUBE_MAP]=tt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[n.TEXTURE_2D_ARRAY]=tt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),_t[n.TEXTURE_3D]=tt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(n.DEPTH_TEST),o.setFunc(hr),zt(!1),kt(vl),st(n.CULL_FACE),D(ci);function st(C){h[C]!==!0&&(n.enable(C),h[C]=!0)}function bt(C){h[C]!==!1&&(n.disable(C),h[C]=!1)}function Ct(C,it){return u[C]!==it?(n.bindFramebuffer(C,it),u[C]=it,C===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=it),C===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=it),!0):!1}function Bt(C,it){let V=m,j=!1;if(C){V=f.get(it),V===void 0&&(V=[],f.set(it,V));const ct=C.textures;if(V.length!==ct.length||V[0]!==n.COLOR_ATTACHMENT0){for(let ot=0,Lt=ct.length;ot<Lt;ot++)V[ot]=n.COLOR_ATTACHMENT0+ot;V.length=ct.length,j=!0}}else V[0]!==n.BACK&&(V[0]=n.BACK,j=!0);j&&n.drawBuffers(V)}function le(C){return _!==C?(n.useProgram(C),_=C,!0):!1}const Vt={[Ti]:n.FUNC_ADD,[ru]:n.FUNC_SUBTRACT,[su]:n.FUNC_REVERSE_SUBTRACT};Vt[au]=n.MIN,Vt[ou]=n.MAX;const de={[lu]:n.ZERO,[cu]:n.ONE,[hu]:n.SRC_COLOR,[Ba]:n.SRC_ALPHA,[gu]:n.SRC_ALPHA_SATURATE,[pu]:n.DST_COLOR,[du]:n.DST_ALPHA,[uu]:n.ONE_MINUS_SRC_COLOR,[za]:n.ONE_MINUS_SRC_ALPHA,[mu]:n.ONE_MINUS_DST_COLOR,[fu]:n.ONE_MINUS_DST_ALPHA,[_u]:n.CONSTANT_COLOR,[xu]:n.ONE_MINUS_CONSTANT_COLOR,[vu]:n.CONSTANT_ALPHA,[Mu]:n.ONE_MINUS_CONSTANT_ALPHA};function D(C,it,V,j,ct,ot,Lt,he,we,$t){if(C===ci){g===!0&&(bt(n.BLEND),g=!1);return}if(g===!1&&(st(n.BLEND),g=!0),C!==iu){if(C!==p||$t!==y){if((d!==Ti||S!==Ti)&&(n.blendEquation(n.FUNC_ADD),d=Ti,S=Ti),$t)switch(C){case ar:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ml:n.blendFunc(n.ONE,n.ONE);break;case Sl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case ar:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ml:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Sl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}b=null,E=null,U=null,A=null,w.set(0,0,0),I=0,p=C,y=$t}return}ct=ct||it,ot=ot||V,Lt=Lt||j,(it!==d||ct!==S)&&(n.blendEquationSeparate(Vt[it],Vt[ct]),d=it,S=ct),(V!==b||j!==E||ot!==U||Lt!==A)&&(n.blendFuncSeparate(de[V],de[j],de[ot],de[Lt]),b=V,E=j,U=ot,A=Lt),(he.equals(w)===!1||we!==I)&&(n.blendColor(he.r,he.g,he.b,we),w.copy(he),I=we),p=C,y=!1}function $e(C,it){C.side===Ye?bt(n.CULL_FACE):st(n.CULL_FACE);let V=C.side===Ve;it&&(V=!V),zt(V),C.blending===ar&&C.transparent===!1?D(ci):D(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),o.setFunc(C.depthFunc),o.setTest(C.depthTest),o.setMask(C.depthWrite),s.setMask(C.colorWrite);const j=C.stencilWrite;a.setTest(j),j&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),re(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?st(n.SAMPLE_ALPHA_TO_COVERAGE):bt(n.SAMPLE_ALPHA_TO_COVERAGE)}function zt(C){M!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),M=C)}function kt(C){C!==tu?(st(n.CULL_FACE),C!==R&&(C===vl?n.cullFace(n.BACK):C===eu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):bt(n.CULL_FACE),R=C}function Et(C){C!==G&&(H&&n.lineWidth(C),G=C)}function re(C,it,V){C?(st(n.POLYGON_OFFSET_FILL),(z!==it||W!==V)&&(n.polygonOffset(it,V),z=it,W=V)):bt(n.POLYGON_OFFSET_FILL)}function yt(C){C?st(n.SCISSOR_TEST):bt(n.SCISSOR_TEST)}function T(C){C===void 0&&(C=n.TEXTURE0+K-1),rt!==C&&(n.activeTexture(C),rt=C)}function x(C,it,V){V===void 0&&(rt===null?V=n.TEXTURE0+K-1:V=rt);let j=ht[V];j===void 0&&(j={type:void 0,texture:void 0},ht[V]=j),(j.type!==C||j.texture!==it)&&(rt!==V&&(n.activeTexture(V),rt=V),n.bindTexture(C,it||_t[C]),j.type=C,j.texture=it)}function F(){const C=ht[rt];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Y(){try{n.compressedTexImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function $(){try{n.compressedTexImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function X(){try{n.texSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function xt(){try{n.texSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function at(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ut(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Gt(){try{n.texStorage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function J(){try{n.texStorage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function dt(){try{n.texImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Tt(){try{n.texImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function At(C){te.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),te.copy(C))}function ft(C){q.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),q.copy(C))}function Ht(C,it){let V=c.get(it);V===void 0&&(V=new WeakMap,c.set(it,V));let j=V.get(C);j===void 0&&(j=n.getUniformBlockIndex(it,C.name),V.set(C,j))}function Ut(C,it){const j=c.get(it).get(C);l.get(it)!==j&&(n.uniformBlockBinding(it,j,C.__bindingPointIndex),l.set(it,j))}function ee(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},rt=null,ht={},u={},f=new WeakMap,m=[],_=null,g=!1,p=null,d=null,b=null,E=null,S=null,U=null,A=null,w=new Pt(0,0,0),I=0,y=!1,M=null,R=null,G=null,z=null,W=null,te.set(0,0,n.canvas.width,n.canvas.height),q.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:st,disable:bt,bindFramebuffer:Ct,drawBuffers:Bt,useProgram:le,setBlending:D,setMaterial:$e,setFlipSided:zt,setCullFace:kt,setLineWidth:Et,setPolygonOffset:re,setScissorTest:yt,activeTexture:T,bindTexture:x,unbindTexture:F,compressedTexImage2D:Y,compressedTexImage3D:$,texImage2D:dt,texImage3D:Tt,updateUBOMapping:Ht,uniformBlockBinding:Ut,texStorage2D:Gt,texStorage3D:J,texSubImage2D:X,texSubImage3D:xt,compressedTexSubImage2D:at,compressedTexSubImage3D:ut,scissor:At,viewport:ft,reset:ee}}function gc(n,t,e,i){const r=Wg(i);switch(e){case Vc:return n*t;case Wc:return n*t;case Xc:return n*t*2;case Bo:return n*t/r.components*r.byteLength;case zo:return n*t/r.components*r.byteLength;case qc:return n*t*2/r.components*r.byteLength;case ko:return n*t*2/r.components*r.byteLength;case Gc:return n*t*3/r.components*r.byteLength;case _n:return n*t*4/r.components*r.byteLength;case Ho:return n*t*4/r.components*r.byteLength;case ws:case Rs:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Cs:case Ps:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ja:case to:return Math.max(n,16)*Math.max(t,8)/4;case Za:case Qa:return Math.max(n,8)*Math.max(t,8)/2;case eo:case no:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case io:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ro:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case so:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case ao:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case oo:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case lo:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case co:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case ho:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case uo:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case fo:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case po:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case mo:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case go:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case _o:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case xo:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ls:case vo:case Mo:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Yc:case So:return Math.ceil(n/4)*Math.ceil(t/4)*8;case yo:case Eo:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Wg(n){switch(n){case Un:case zc:return{byteLength:1,components:1};case Vr:case kc:case Wr:return{byteLength:2,components:1};case Fo:case Oo:return{byteLength:2,components:4};case Li:case No:case qn:return{byteLength:4,components:1};case Hc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Xg(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Rt,h=new WeakMap;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,x){return m?new OffscreenCanvas(T,x):Fs("canvas")}function g(T,x,F){let Y=1;const $=yt(T);if(($.width>F||$.height>F)&&(Y=F/Math.max($.width,$.height)),Y<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const X=Math.floor(Y*$.width),xt=Math.floor(Y*$.height);u===void 0&&(u=_(X,xt));const at=x?_(X,xt):u;return at.width=X,at.height=xt,at.getContext("2d").drawImage(T,0,0,X,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+X+"x"+xt+")."),at}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),T;return T}function p(T){return T.generateMipmaps}function d(T){n.generateMipmap(T)}function b(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(T,x,F,Y,$=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let X=x;if(x===n.RED&&(F===n.FLOAT&&(X=n.R32F),F===n.HALF_FLOAT&&(X=n.R16F),F===n.UNSIGNED_BYTE&&(X=n.R8)),x===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(X=n.R8UI),F===n.UNSIGNED_SHORT&&(X=n.R16UI),F===n.UNSIGNED_INT&&(X=n.R32UI),F===n.BYTE&&(X=n.R8I),F===n.SHORT&&(X=n.R16I),F===n.INT&&(X=n.R32I)),x===n.RG&&(F===n.FLOAT&&(X=n.RG32F),F===n.HALF_FLOAT&&(X=n.RG16F),F===n.UNSIGNED_BYTE&&(X=n.RG8)),x===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(X=n.RG8UI),F===n.UNSIGNED_SHORT&&(X=n.RG16UI),F===n.UNSIGNED_INT&&(X=n.RG32UI),F===n.BYTE&&(X=n.RG8I),F===n.SHORT&&(X=n.RG16I),F===n.INT&&(X=n.RG32I)),x===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(X=n.RGB8UI),F===n.UNSIGNED_SHORT&&(X=n.RGB16UI),F===n.UNSIGNED_INT&&(X=n.RGB32UI),F===n.BYTE&&(X=n.RGB8I),F===n.SHORT&&(X=n.RGB16I),F===n.INT&&(X=n.RGB32I)),x===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),F===n.UNSIGNED_INT&&(X=n.RGBA32UI),F===n.BYTE&&(X=n.RGBA8I),F===n.SHORT&&(X=n.RGBA16I),F===n.INT&&(X=n.RGBA32I)),x===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),x===n.RGBA){const xt=$?qs:Wt.getTransfer(Y);F===n.FLOAT&&(X=n.RGBA32F),F===n.HALF_FLOAT&&(X=n.RGBA16F),F===n.UNSIGNED_BYTE&&(X=xt===Jt?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function S(T,x){let F;return T?x===null||x===Li||x===fr?F=n.DEPTH24_STENCIL8:x===qn?F=n.DEPTH32F_STENCIL8:x===Vr&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Li||x===fr?F=n.DEPTH_COMPONENT24:x===qn?F=n.DEPTH_COMPONENT32F:x===Vr&&(F=n.DEPTH_COMPONENT16),F}function U(T,x){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==je&&T.minFilter!==gn?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function A(T){const x=T.target;x.removeEventListener("dispose",A),I(x),x.isVideoTexture&&h.delete(x)}function w(T){const x=T.target;x.removeEventListener("dispose",w),M(x)}function I(T){const x=i.get(T);if(x.__webglInit===void 0)return;const F=T.source,Y=f.get(F);if(Y){const $=Y[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&y(T),Object.keys(Y).length===0&&f.delete(F)}i.remove(T)}function y(T){const x=i.get(T);n.deleteTexture(x.__webglTexture);const F=T.source,Y=f.get(F);delete Y[x.__cacheKey],o.memory.textures--}function M(T){const x=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let $=0;$<x.__webglFramebuffer[Y].length;$++)n.deleteFramebuffer(x.__webglFramebuffer[Y][$]);else n.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)n.deleteFramebuffer(x.__webglFramebuffer[Y]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=T.textures;for(let Y=0,$=F.length;Y<$;Y++){const X=i.get(F[Y]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(F[Y])}i.remove(T)}let R=0;function G(){R=0}function z(){const T=R;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),R+=1,T}function W(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function K(T,x){const F=i.get(T);if(T.isVideoTexture&&Et(T),T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){const Y=T.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(F,T,x);return}}e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+x)}function H(T,x){const F=i.get(T);if(T.version>0&&F.__version!==T.version){q(F,T,x);return}e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+x)}function Z(T,x){const F=i.get(T);if(T.version>0&&F.__version!==T.version){q(F,T,x);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+x)}function k(T,x){const F=i.get(T);if(T.version>0&&F.__version!==T.version){tt(F,T,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+x)}const rt={[Ka]:n.REPEAT,[wi]:n.CLAMP_TO_EDGE,[$a]:n.MIRRORED_REPEAT},ht={[je]:n.NEAREST,[Pu]:n.NEAREST_MIPMAP_NEAREST,[Jr]:n.NEAREST_MIPMAP_LINEAR,[gn]:n.LINEAR,[na]:n.LINEAR_MIPMAP_NEAREST,[Ri]:n.LINEAR_MIPMAP_LINEAR},St={[Uu]:n.NEVER,[ku]:n.ALWAYS,[Nu]:n.LESS,[Kc]:n.LEQUAL,[Fu]:n.EQUAL,[zu]:n.GEQUAL,[Ou]:n.GREATER,[Bu]:n.NOTEQUAL};function Ot(T,x){if(x.type===qn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===gn||x.magFilter===na||x.magFilter===Jr||x.magFilter===Ri||x.minFilter===gn||x.minFilter===na||x.minFilter===Jr||x.minFilter===Ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,rt[x.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,rt[x.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,rt[x.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,ht[x.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,ht[x.minFilter]),x.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,St[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===je||x.minFilter!==Jr&&x.minFilter!==Ri||x.type===qn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");n.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function te(T,x){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",A));const Y=x.source;let $=f.get(Y);$===void 0&&($={},f.set(Y,$));const X=W(x);if(X!==T.__cacheKey){$[X]===void 0&&($[X]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),$[X].usedTimes++;const xt=$[T.__cacheKey];xt!==void 0&&($[T.__cacheKey].usedTimes--,xt.usedTimes===0&&y(x)),T.__cacheKey=X,T.__webglTexture=$[X].texture}return F}function q(T,x,F){let Y=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=n.TEXTURE_3D);const $=te(T,x),X=x.source;e.bindTexture(Y,T.__webglTexture,n.TEXTURE0+F);const xt=i.get(X);if(X.version!==xt.__version||$===!0){e.activeTexture(n.TEXTURE0+F);const at=Wt.getPrimaries(Wt.workingColorSpace),ut=x.colorSpace===ai?null:Wt.getPrimaries(x.colorSpace),Gt=x.colorSpace===ai||at===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let J=g(x.image,!1,r.maxTextureSize);J=re(x,J);const dt=s.convert(x.format,x.colorSpace),Tt=s.convert(x.type);let At=E(x.internalFormat,dt,Tt,x.colorSpace,x.isVideoTexture);Ot(Y,x);let ft;const Ht=x.mipmaps,Ut=x.isVideoTexture!==!0,ee=xt.__version===void 0||$===!0,C=X.dataReady,it=U(x,J);if(x.isDepthTexture)At=S(x.format===pr,x.type),ee&&(Ut?e.texStorage2D(n.TEXTURE_2D,1,At,J.width,J.height):e.texImage2D(n.TEXTURE_2D,0,At,J.width,J.height,0,dt,Tt,null));else if(x.isDataTexture)if(Ht.length>0){Ut&&ee&&e.texStorage2D(n.TEXTURE_2D,it,At,Ht[0].width,Ht[0].height);for(let V=0,j=Ht.length;V<j;V++)ft=Ht[V],Ut?C&&e.texSubImage2D(n.TEXTURE_2D,V,0,0,ft.width,ft.height,dt,Tt,ft.data):e.texImage2D(n.TEXTURE_2D,V,At,ft.width,ft.height,0,dt,Tt,ft.data);x.generateMipmaps=!1}else Ut?(ee&&e.texStorage2D(n.TEXTURE_2D,it,At,J.width,J.height),C&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,J.width,J.height,dt,Tt,J.data)):e.texImage2D(n.TEXTURE_2D,0,At,J.width,J.height,0,dt,Tt,J.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ut&&ee&&e.texStorage3D(n.TEXTURE_2D_ARRAY,it,At,Ht[0].width,Ht[0].height,J.depth);for(let V=0,j=Ht.length;V<j;V++)if(ft=Ht[V],x.format!==_n)if(dt!==null)if(Ut){if(C)if(x.layerUpdates.size>0){const ct=gc(ft.width,ft.height,x.format,x.type);for(const ot of x.layerUpdates){const Lt=ft.data.subarray(ot*ct/ft.data.BYTES_PER_ELEMENT,(ot+1)*ct/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,ot,ft.width,ft.height,1,dt,Lt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,ft.width,ft.height,J.depth,dt,ft.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,V,At,ft.width,ft.height,J.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?C&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,ft.width,ft.height,J.depth,dt,Tt,ft.data):e.texImage3D(n.TEXTURE_2D_ARRAY,V,At,ft.width,ft.height,J.depth,0,dt,Tt,ft.data)}else{Ut&&ee&&e.texStorage2D(n.TEXTURE_2D,it,At,Ht[0].width,Ht[0].height);for(let V=0,j=Ht.length;V<j;V++)ft=Ht[V],x.format!==_n?dt!==null?Ut?C&&e.compressedTexSubImage2D(n.TEXTURE_2D,V,0,0,ft.width,ft.height,dt,ft.data):e.compressedTexImage2D(n.TEXTURE_2D,V,At,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?C&&e.texSubImage2D(n.TEXTURE_2D,V,0,0,ft.width,ft.height,dt,Tt,ft.data):e.texImage2D(n.TEXTURE_2D,V,At,ft.width,ft.height,0,dt,Tt,ft.data)}else if(x.isDataArrayTexture)if(Ut){if(ee&&e.texStorage3D(n.TEXTURE_2D_ARRAY,it,At,J.width,J.height,J.depth),C)if(x.layerUpdates.size>0){const V=gc(J.width,J.height,x.format,x.type);for(const j of x.layerUpdates){const ct=J.data.subarray(j*V/J.data.BYTES_PER_ELEMENT,(j+1)*V/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,j,J.width,J.height,1,dt,Tt,ct)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,dt,Tt,J.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,At,J.width,J.height,J.depth,0,dt,Tt,J.data);else if(x.isData3DTexture)Ut?(ee&&e.texStorage3D(n.TEXTURE_3D,it,At,J.width,J.height,J.depth),C&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,dt,Tt,J.data)):e.texImage3D(n.TEXTURE_3D,0,At,J.width,J.height,J.depth,0,dt,Tt,J.data);else if(x.isFramebufferTexture){if(ee)if(Ut)e.texStorage2D(n.TEXTURE_2D,it,At,J.width,J.height);else{let V=J.width,j=J.height;for(let ct=0;ct<it;ct++)e.texImage2D(n.TEXTURE_2D,ct,At,V,j,0,dt,Tt,null),V>>=1,j>>=1}}else if(Ht.length>0){if(Ut&&ee){const V=yt(Ht[0]);e.texStorage2D(n.TEXTURE_2D,it,At,V.width,V.height)}for(let V=0,j=Ht.length;V<j;V++)ft=Ht[V],Ut?C&&e.texSubImage2D(n.TEXTURE_2D,V,0,0,dt,Tt,ft):e.texImage2D(n.TEXTURE_2D,V,At,dt,Tt,ft);x.generateMipmaps=!1}else if(Ut){if(ee){const V=yt(J);e.texStorage2D(n.TEXTURE_2D,it,At,V.width,V.height)}C&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,dt,Tt,J)}else e.texImage2D(n.TEXTURE_2D,0,At,dt,Tt,J);p(x)&&d(Y),xt.__version=X.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function tt(T,x,F){if(x.image.length!==6)return;const Y=te(T,x),$=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+F);const X=i.get($);if($.version!==X.__version||Y===!0){e.activeTexture(n.TEXTURE0+F);const xt=Wt.getPrimaries(Wt.workingColorSpace),at=x.colorSpace===ai?null:Wt.getPrimaries(x.colorSpace),ut=x.colorSpace===ai||xt===at?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const Gt=x.isCompressedTexture||x.image[0].isCompressedTexture,J=x.image[0]&&x.image[0].isDataTexture,dt=[];for(let j=0;j<6;j++)!Gt&&!J?dt[j]=g(x.image[j],!0,r.maxCubemapSize):dt[j]=J?x.image[j].image:x.image[j],dt[j]=re(x,dt[j]);const Tt=dt[0],At=s.convert(x.format,x.colorSpace),ft=s.convert(x.type),Ht=E(x.internalFormat,At,ft,x.colorSpace),Ut=x.isVideoTexture!==!0,ee=X.__version===void 0||Y===!0,C=$.dataReady;let it=U(x,Tt);Ot(n.TEXTURE_CUBE_MAP,x);let V;if(Gt){Ut&&ee&&e.texStorage2D(n.TEXTURE_CUBE_MAP,it,Ht,Tt.width,Tt.height);for(let j=0;j<6;j++){V=dt[j].mipmaps;for(let ct=0;ct<V.length;ct++){const ot=V[ct];x.format!==_n?At!==null?Ut?C&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct,0,0,ot.width,ot.height,At,ot.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct,Ht,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?C&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct,0,0,ot.width,ot.height,At,ft,ot.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct,Ht,ot.width,ot.height,0,At,ft,ot.data)}}}else{if(V=x.mipmaps,Ut&&ee){V.length>0&&it++;const j=yt(dt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,it,Ht,j.width,j.height)}for(let j=0;j<6;j++)if(J){Ut?C&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,dt[j].width,dt[j].height,At,ft,dt[j].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ht,dt[j].width,dt[j].height,0,At,ft,dt[j].data);for(let ct=0;ct<V.length;ct++){const Lt=V[ct].image[j].image;Ut?C&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct+1,0,0,Lt.width,Lt.height,At,ft,Lt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct+1,Ht,Lt.width,Lt.height,0,At,ft,Lt.data)}}else{Ut?C&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,At,ft,dt[j]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ht,At,ft,dt[j]);for(let ct=0;ct<V.length;ct++){const ot=V[ct];Ut?C&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct+1,0,0,At,ft,ot.image[j]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct+1,Ht,At,ft,ot.image[j])}}}p(x)&&d(n.TEXTURE_CUBE_MAP),X.__version=$.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function _t(T,x,F,Y,$,X){const xt=s.convert(F.format,F.colorSpace),at=s.convert(F.type),ut=E(F.internalFormat,xt,at,F.colorSpace),Gt=i.get(x),J=i.get(F);if(J.__renderTarget=x,!Gt.__hasExternalTextures){const dt=Math.max(1,x.width>>X),Tt=Math.max(1,x.height>>X);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?e.texImage3D($,X,ut,dt,Tt,x.depth,0,xt,at,null):e.texImage2D($,X,ut,dt,Tt,0,xt,at,null)}e.bindFramebuffer(n.FRAMEBUFFER,T),kt(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,$,J.__webglTexture,0,zt(x)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,$,J.__webglTexture,X),e.bindFramebuffer(n.FRAMEBUFFER,null)}function st(T,x,F){if(n.bindRenderbuffer(n.RENDERBUFFER,T),x.depthBuffer){const Y=x.depthTexture,$=Y&&Y.isDepthTexture?Y.type:null,X=S(x.stencilBuffer,$),xt=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=zt(x);kt(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,at,X,x.width,x.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,at,X,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,X,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xt,n.RENDERBUFFER,T)}else{const Y=x.textures;for(let $=0;$<Y.length;$++){const X=Y[$],xt=s.convert(X.format,X.colorSpace),at=s.convert(X.type),ut=E(X.internalFormat,xt,at,X.colorSpace),Gt=zt(x);F&&kt(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Gt,ut,x.width,x.height):kt(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Gt,ut,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ut,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function bt(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(x.depthTexture);Y.__renderTarget=x,(!Y.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K(x.depthTexture,0);const $=Y.__webglTexture,X=zt(x);if(x.depthTexture.format===or)kt(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0);else if(x.depthTexture.format===pr)kt(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Ct(T){const x=i.get(T),F=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const Y=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){const $=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",$)};Y.addEventListener("dispose",$),x.__depthDisposeCallback=$}x.__boundDepthTexture=Y}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");bt(x.__webglFramebuffer,T)}else if(F){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=n.createRenderbuffer(),st(x.__webglDepthbuffer[Y],T,!1);else{const $=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,X)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),st(x.__webglDepthbuffer,T,!1);else{const Y=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,$)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Bt(T,x,F){const Y=i.get(T);x!==void 0&&_t(Y.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Ct(T)}function le(T){const x=T.texture,F=i.get(T),Y=i.get(x);T.addEventListener("dispose",w);const $=T.textures,X=T.isWebGLCubeRenderTarget===!0,xt=$.length>1;if(xt||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=x.version,o.memory.textures++),X){F.__webglFramebuffer=[];for(let at=0;at<6;at++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[at]=[];for(let ut=0;ut<x.mipmaps.length;ut++)F.__webglFramebuffer[at][ut]=n.createFramebuffer()}else F.__webglFramebuffer[at]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let at=0;at<x.mipmaps.length;at++)F.__webglFramebuffer[at]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(xt)for(let at=0,ut=$.length;at<ut;at++){const Gt=i.get($[at]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&kt(T)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let at=0;at<$.length;at++){const ut=$[at];F.__webglColorRenderbuffer[at]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[at]);const Gt=s.convert(ut.format,ut.colorSpace),J=s.convert(ut.type),dt=E(ut.internalFormat,Gt,J,ut.colorSpace,T.isXRRenderTarget===!0),Tt=zt(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Tt,dt,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.RENDERBUFFER,F.__webglColorRenderbuffer[at])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),st(F.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Ot(n.TEXTURE_CUBE_MAP,x);for(let at=0;at<6;at++)if(x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)_t(F.__webglFramebuffer[at][ut],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,ut);else _t(F.__webglFramebuffer[at],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);p(x)&&d(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let at=0,ut=$.length;at<ut;at++){const Gt=$[at],J=i.get(Gt);e.bindTexture(n.TEXTURE_2D,J.__webglTexture),Ot(n.TEXTURE_2D,Gt),_t(F.__webglFramebuffer,T,Gt,n.COLOR_ATTACHMENT0+at,n.TEXTURE_2D,0),p(Gt)&&d(n.TEXTURE_2D)}e.unbindTexture()}else{let at=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(at=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(at,Y.__webglTexture),Ot(at,x),x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)_t(F.__webglFramebuffer[ut],T,x,n.COLOR_ATTACHMENT0,at,ut);else _t(F.__webglFramebuffer,T,x,n.COLOR_ATTACHMENT0,at,0);p(x)&&d(at),e.unbindTexture()}T.depthBuffer&&Ct(T)}function Vt(T){const x=T.textures;for(let F=0,Y=x.length;F<Y;F++){const $=x[F];if(p($)){const X=b(T),xt=i.get($).__webglTexture;e.bindTexture(X,xt),d(X),e.unbindTexture()}}}const de=[],D=[];function $e(T){if(T.samples>0){if(kt(T)===!1){const x=T.textures,F=T.width,Y=T.height;let $=n.COLOR_BUFFER_BIT;const X=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xt=i.get(T),at=x.length>1;if(at)for(let ut=0;ut<x.length;ut++)e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let ut=0;ut<x.length;ut++){if(T.resolveDepthBuffer&&(T.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),at){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xt.__webglColorRenderbuffer[ut]);const Gt=i.get(x[ut]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Gt,0)}n.blitFramebuffer(0,0,F,Y,0,0,F,Y,$,n.NEAREST),l===!0&&(de.length=0,D.length=0,de.push(n.COLOR_ATTACHMENT0+ut),T.depthBuffer&&T.resolveDepthBuffer===!1&&(de.push(X),D.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,D)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,de))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),at)for(let ut=0;ut<x.length;ut++){e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,xt.__webglColorRenderbuffer[ut]);const Gt=i.get(x[ut]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,Gt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const x=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function zt(T){return Math.min(r.maxSamples,T.samples)}function kt(T){const x=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Et(T){const x=o.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function re(T,x){const F=T.colorSpace,Y=T.format,$=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==_r&&F!==ai&&(Wt.getTransfer(F)===Jt?(Y!==_n||$!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}function yt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=G,this.setTexture2D=K,this.setTexture2DArray=H,this.setTexture3D=Z,this.setTextureCube=k,this.rebindTextures=Bt,this.setupRenderTarget=le,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=kt}function qg(n,t){function e(i,r=ai){let s;const o=Wt.getTransfer(r);if(i===Un)return n.UNSIGNED_BYTE;if(i===Fo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Oo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Hc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===zc)return n.BYTE;if(i===kc)return n.SHORT;if(i===Vr)return n.UNSIGNED_SHORT;if(i===No)return n.INT;if(i===Li)return n.UNSIGNED_INT;if(i===qn)return n.FLOAT;if(i===Wr)return n.HALF_FLOAT;if(i===Vc)return n.ALPHA;if(i===Gc)return n.RGB;if(i===_n)return n.RGBA;if(i===Wc)return n.LUMINANCE;if(i===Xc)return n.LUMINANCE_ALPHA;if(i===or)return n.DEPTH_COMPONENT;if(i===pr)return n.DEPTH_STENCIL;if(i===Bo)return n.RED;if(i===zo)return n.RED_INTEGER;if(i===qc)return n.RG;if(i===ko)return n.RG_INTEGER;if(i===Ho)return n.RGBA_INTEGER;if(i===ws||i===Rs||i===Cs||i===Ps)if(o===Jt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ws)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Rs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Cs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ps)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ws)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Rs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Cs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ps)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Za||i===Ja||i===Qa||i===to)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Za)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ja)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Qa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===to)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===eo||i===no||i===io)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===eo||i===no)return o===Jt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===io)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ro||i===so||i===ao||i===oo||i===lo||i===co||i===ho||i===uo||i===fo||i===po||i===mo||i===go||i===_o||i===xo)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ro)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===so)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ao)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===oo)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===lo)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===co)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ho)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===uo)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fo)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===po)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===mo)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===go)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===_o)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xo)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ls||i===vo||i===Mo)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Ls)return o===Jt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===vo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Mo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Yc||i===So||i===yo||i===Eo)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ls)return s.COMPRESSED_RED_RGTC1_EXT;if(i===So)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===yo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Eo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class Yg extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class vs extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jg={type:"move"};class Pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,i),d=this._getHandJoint(c,g);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jg)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new vs;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Kg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$g=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Zg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new Ue,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new di({vertexShader:Kg,fragmentShader:$g,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new en(new $s(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Jg extends Oi{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,m=null,_=null;const g=new Zg,p=e.getContextAttributes();let d=null,b=null;const E=[],S=[],U=new Rt;let A=null;const w=new tn;w.viewport=new ue;const I=new tn;I.viewport=new ue;const y=[w,I],M=new Yg;let R=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let tt=E[q];return tt===void 0&&(tt=new Pa,E[q]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(q){let tt=E[q];return tt===void 0&&(tt=new Pa,E[q]=tt),tt.getGripSpace()},this.getHand=function(q){let tt=E[q];return tt===void 0&&(tt=new Pa,E[q]=tt),tt.getHandSpace()};function z(q){const tt=S.indexOf(q.inputSource);if(tt===-1)return;const _t=E[tt];_t!==void 0&&(_t.update(q.inputSource,q.frame,c||o),_t.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",K);for(let q=0;q<E.length;q++){const tt=S[q];tt!==null&&(S[q]=null,E[q].disconnect(tt))}R=null,G=null,g.reset(),t.setRenderTarget(d),m=null,f=null,u=null,r=null,b=null,te.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(d=t.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",W),r.addEventListener("inputsourceschange",K),p.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(U),r.renderState.layers===void 0){const tt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,tt),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new Di(m.framebufferWidth,m.framebufferHeight,{format:_n,type:Un,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let tt=null,_t=null,st=null;p.depth&&(st=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=p.stencil?pr:or,_t=p.stencil?fr:Li);const bt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:s};u=new XRWebGLBinding(r,e),f=u.createProjectionLayer(bt),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new Di(f.textureWidth,f.textureHeight,{format:_n,type:Un,depthTexture:new oh(f.textureWidth,f.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),te.setContext(r),te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function K(q){for(let tt=0;tt<q.removed.length;tt++){const _t=q.removed[tt],st=S.indexOf(_t);st>=0&&(S[st]=null,E[st].disconnect(_t))}for(let tt=0;tt<q.added.length;tt++){const _t=q.added[tt];let st=S.indexOf(_t);if(st===-1){for(let Ct=0;Ct<E.length;Ct++)if(Ct>=S.length){S.push(_t),st=Ct;break}else if(S[Ct]===null){S[Ct]=_t,st=Ct;break}if(st===-1)break}const bt=E[st];bt&&bt.connect(_t)}}const H=new N,Z=new N;function k(q,tt,_t){H.setFromMatrixPosition(tt.matrixWorld),Z.setFromMatrixPosition(_t.matrixWorld);const st=H.distanceTo(Z),bt=tt.projectionMatrix.elements,Ct=_t.projectionMatrix.elements,Bt=bt[14]/(bt[10]-1),le=bt[14]/(bt[10]+1),Vt=(bt[9]+1)/bt[5],de=(bt[9]-1)/bt[5],D=(bt[8]-1)/bt[0],$e=(Ct[8]+1)/Ct[0],zt=Bt*D,kt=Bt*$e,Et=st/(-D+$e),re=Et*-D;if(tt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(re),q.translateZ(Et),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),bt[10]===-1)q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const yt=Bt+Et,T=le+Et,x=zt-re,F=kt+(st-re),Y=Vt*le/T*yt,$=de*le/T*yt;q.projectionMatrix.makePerspective(x,F,Y,$,yt,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function rt(q,tt){tt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(tt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let tt=q.near,_t=q.far;g.texture!==null&&(g.depthNear>0&&(tt=g.depthNear),g.depthFar>0&&(_t=g.depthFar)),M.near=I.near=w.near=tt,M.far=I.far=w.far=_t,(R!==M.near||G!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,G=M.far),w.layers.mask=q.layers.mask|2,I.layers.mask=q.layers.mask|4,M.layers.mask=w.layers.mask|I.layers.mask;const st=q.parent,bt=M.cameras;rt(M,st);for(let Ct=0;Ct<bt.length;Ct++)rt(bt[Ct],st);bt.length===2?k(M,w,I):M.projectionMatrix.copy(w.projectionMatrix),ht(q,M,st)};function ht(q,tt,_t){_t===null?q.matrix.copy(tt.matrixWorld):(q.matrix.copy(_t.matrixWorld),q.matrix.invert(),q.matrix.multiply(tt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=To*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let St=null;function Ot(q,tt){if(h=tt.getViewerPose(c||o),_=tt,h!==null){const _t=h.views;m!==null&&(t.setRenderTargetFramebuffer(b,m.framebuffer),t.setRenderTarget(b));let st=!1;_t.length!==M.cameras.length&&(M.cameras.length=0,st=!0);for(let Ct=0;Ct<_t.length;Ct++){const Bt=_t[Ct];let le=null;if(m!==null)le=m.getViewport(Bt);else{const de=u.getViewSubImage(f,Bt);le=de.viewport,Ct===0&&(t.setRenderTargetTextures(b,de.colorTexture,f.ignoreDepthValues?void 0:de.depthStencilTexture),t.setRenderTarget(b))}let Vt=y[Ct];Vt===void 0&&(Vt=new tn,Vt.layers.enable(Ct),Vt.viewport=new ue,y[Ct]=Vt),Vt.matrix.fromArray(Bt.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(Bt.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(le.x,le.y,le.width,le.height),Ct===0&&(M.matrix.copy(Vt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),st===!0&&M.cameras.push(Vt)}const bt=r.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const Ct=u.getDepthInformation(_t[0]);Ct&&Ct.isValid&&Ct.texture&&g.init(t,Ct,r.renderState)}}for(let _t=0;_t<E.length;_t++){const st=S[_t],bt=E[_t];st!==null&&bt!==void 0&&bt.update(st,tt,c||o)}St&&St(q,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),_=null}const te=new sh;te.setAnimationLoop(Ot),this.setAnimationLoop=function(q){St=q},this.dispose=function(){}}}const yi=new Nn,Qg=new oe;function t_(n,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,nh(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,b,E,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),u(p,d)):d.isMeshPhongMaterial?(s(p,d),h(p,d)):d.isMeshStandardMaterial?(s(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,S)):d.isMeshMatcapMaterial?(s(p,d),_(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),g(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,b,E):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Ve&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Ve&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const b=t.get(d),E=b.envMap,S=b.envMapRotation;E&&(p.envMap.value=E,yi.copy(S),yi.x*=-1,yi.y*=-1,yi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),p.envMapRotation.value.setFromMatrix4(Qg.makeRotationFromEuler(yi)),p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,b,E){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*b,p.scale.value=E*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,b){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ve&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,d){d.matcap&&(p.matcap.value=d.matcap)}function g(p,d){const b=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function e_(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,E){const S=E.program;i.uniformBlockBinding(b,S)}function c(b,E){let S=r[b.id];S===void 0&&(_(b),S=h(b),r[b.id]=S,b.addEventListener("dispose",p));const U=E.program;i.updateUBOMapping(b,U);const A=t.render.frame;s[b.id]!==A&&(f(b),s[b.id]=A)}function h(b){const E=u();b.__bindingPointIndex=E;const S=n.createBuffer(),U=b.__size,A=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,U,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,S),S}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const E=r[b.id],S=b.uniforms,U=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let A=0,w=S.length;A<w;A++){const I=Array.isArray(S[A])?S[A]:[S[A]];for(let y=0,M=I.length;y<M;y++){const R=I[y];if(m(R,A,y,U)===!0){const G=R.__offset,z=Array.isArray(R.value)?R.value:[R.value];let W=0;for(let K=0;K<z.length;K++){const H=z[K],Z=g(H);typeof H=="number"||typeof H=="boolean"?(R.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,G+W,R.__data)):H.isMatrix3?(R.__data[0]=H.elements[0],R.__data[1]=H.elements[1],R.__data[2]=H.elements[2],R.__data[3]=0,R.__data[4]=H.elements[3],R.__data[5]=H.elements[4],R.__data[6]=H.elements[5],R.__data[7]=0,R.__data[8]=H.elements[6],R.__data[9]=H.elements[7],R.__data[10]=H.elements[8],R.__data[11]=0):(H.toArray(R.__data,W),W+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,E,S,U){const A=b.value,w=E+"_"+S;if(U[w]===void 0)return typeof A=="number"||typeof A=="boolean"?U[w]=A:U[w]=A.clone(),!0;{const I=U[w];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return U[w]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function _(b){const E=b.uniforms;let S=0;const U=16;for(let w=0,I=E.length;w<I;w++){const y=Array.isArray(E[w])?E[w]:[E[w]];for(let M=0,R=y.length;M<R;M++){const G=y[M],z=Array.isArray(G.value)?G.value:[G.value];for(let W=0,K=z.length;W<K;W++){const H=z[W],Z=g(H),k=S%U,rt=k%Z.boundary,ht=k+rt;S+=rt,ht!==0&&U-ht<Z.storage&&(S+=U-ht),G.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=S,S+=Z.storage}}}const A=S%U;return A>0&&(S+=U-A),b.__size=S,b.__cache={},this}function g(b){const E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),E}function p(b){const E=b.target;E.removeEventListener("dispose",p);const S=o.indexOf(E.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function d(){for(const b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class n_{constructor(t={}){const{canvas:e=Gu(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const _=new Uint32Array(4),g=new Int32Array(4);let p=null,d=null;const b=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=He,this.toneMapping=hi,this.toneMappingExposure=1;const S=this;let U=!1,A=0,w=0,I=null,y=-1,M=null;const R=new ue,G=new ue;let z=null;const W=new Pt(0);let K=0,H=e.width,Z=e.height,k=1,rt=null,ht=null;const St=new ue(0,0,H,Z),Ot=new ue(0,0,H,Z);let te=!1;const q=new Wo;let tt=!1,_t=!1;const st=new oe,bt=new oe,Ct=new N,Bt=new ue,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function de(){return I===null?k:1}let D=i;function $e(v,P){return e.getContext(v,P)}try{const v={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Uo}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",ot,!1),D===null){const P="webgl2";if(D=$e(P,v),D===null)throw $e(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let zt,kt,Et,re,yt,T,x,F,Y,$,X,xt,at,ut,Gt,J,dt,Tt,At,ft,Ht,Ut,ee,C;function it(){zt=new om(D),zt.init(),Ut=new qg(D,zt),kt=new em(D,zt,t,Ut),Et=new Gg(D,zt),kt.reverseDepthBuffer&&f&&Et.buffers.depth.setReversed(!0),re=new hm(D),yt=new Rg,T=new Xg(D,zt,Et,yt,kt,Ut,re),x=new im(S),F=new am(S),Y=new gd(D),ee=new Qp(D,Y),$=new lm(D,Y,re,ee),X=new dm(D,$,Y,re),At=new um(D,kt,T),J=new nm(yt),xt=new wg(S,x,F,zt,kt,ee,J),at=new t_(S,yt),ut=new Pg,Gt=new Fg(zt),Tt=new Jp(S,x,F,Et,X,m,l),dt=new Hg(S,X,kt),C=new e_(D,re,kt,Et),ft=new tm(D,zt,re),Ht=new cm(D,zt,re),re.programs=xt.programs,S.capabilities=kt,S.extensions=zt,S.properties=yt,S.renderLists=ut,S.shadowMap=dt,S.state=Et,S.info=re}it();const V=new Jg(S,D);this.xr=V,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const v=zt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=zt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(v){v!==void 0&&(k=v,this.setSize(H,Z,!1))},this.getSize=function(v){return v.set(H,Z)},this.setSize=function(v,P,O=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=v,Z=P,e.width=Math.floor(v*k),e.height=Math.floor(P*k),O===!0&&(e.style.width=v+"px",e.style.height=P+"px"),this.setViewport(0,0,v,P)},this.getDrawingBufferSize=function(v){return v.set(H*k,Z*k).floor()},this.setDrawingBufferSize=function(v,P,O){H=v,Z=P,k=O,e.width=Math.floor(v*O),e.height=Math.floor(P*O),this.setViewport(0,0,v,P)},this.getCurrentViewport=function(v){return v.copy(R)},this.getViewport=function(v){return v.copy(St)},this.setViewport=function(v,P,O,B){v.isVector4?St.set(v.x,v.y,v.z,v.w):St.set(v,P,O,B),Et.viewport(R.copy(St).multiplyScalar(k).round())},this.getScissor=function(v){return v.copy(Ot)},this.setScissor=function(v,P,O,B){v.isVector4?Ot.set(v.x,v.y,v.z,v.w):Ot.set(v,P,O,B),Et.scissor(G.copy(Ot).multiplyScalar(k).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(v){Et.setScissorTest(te=v)},this.setOpaqueSort=function(v){rt=v},this.setTransparentSort=function(v){ht=v},this.getClearColor=function(v){return v.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor.apply(Tt,arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha.apply(Tt,arguments)},this.clear=function(v=!0,P=!0,O=!0){let B=0;if(v){let L=!1;if(I!==null){const Q=I.texture.format;L=Q===Ho||Q===ko||Q===zo}if(L){const Q=I.texture.type,lt=Q===Un||Q===Li||Q===Vr||Q===fr||Q===Fo||Q===Oo,pt=Tt.getClearColor(),mt=Tt.getClearAlpha(),wt=pt.r,Dt=pt.g,gt=pt.b;lt?(_[0]=wt,_[1]=Dt,_[2]=gt,_[3]=mt,D.clearBufferuiv(D.COLOR,0,_)):(g[0]=wt,g[1]=Dt,g[2]=gt,g[3]=mt,D.clearBufferiv(D.COLOR,0,g))}else B|=D.COLOR_BUFFER_BIT}P&&(B|=D.DEPTH_BUFFER_BIT),O&&(B|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),ut.dispose(),Gt.dispose(),yt.dispose(),x.dispose(),F.dispose(),X.dispose(),ee.dispose(),C.dispose(),xt.dispose(),V.dispose(),V.removeEventListener("sessionstart",ul),V.removeEventListener("sessionend",dl),gi.stop()};function j(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const v=re.autoReset,P=dt.enabled,O=dt.autoUpdate,B=dt.needsUpdate,L=dt.type;it(),re.autoReset=v,dt.enabled=P,dt.autoUpdate=O,dt.needsUpdate=B,dt.type=L}function ot(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Lt(v){const P=v.target;P.removeEventListener("dispose",Lt),he(P)}function he(v){we(v),yt.remove(v)}function we(v){const P=yt.get(v).programs;P!==void 0&&(P.forEach(function(O){xt.releaseProgram(O)}),v.isShaderMaterial&&xt.releaseShaderCache(v))}this.renderBufferDirect=function(v,P,O,B,L,Q){P===null&&(P=le);const lt=L.isMesh&&L.matrixWorld.determinant()<0,pt=Zh(v,P,O,B,L);Et.setMaterial(B,lt);let mt=O.index,wt=1;if(B.wireframe===!0){if(mt=$.getWireframeAttribute(O),mt===void 0)return;wt=2}const Dt=O.drawRange,gt=O.attributes.position;let Xt=Dt.start*wt,ne=(Dt.start+Dt.count)*wt;Q!==null&&(Xt=Math.max(Xt,Q.start*wt),ne=Math.min(ne,(Q.start+Q.count)*wt)),mt!==null?(Xt=Math.max(Xt,0),ne=Math.min(ne,mt.count)):gt!=null&&(Xt=Math.max(Xt,0),ne=Math.min(ne,gt.count));const se=ne-Xt;if(se<0||se===1/0)return;ee.setup(L,B,pt,O,mt);let Fe,Yt=ft;if(mt!==null&&(Fe=Y.get(mt),Yt=Ht,Yt.setIndex(Fe)),L.isMesh)B.wireframe===!0?(Et.setLineWidth(B.wireframeLinewidth*de()),Yt.setMode(D.LINES)):Yt.setMode(D.TRIANGLES);else if(L.isLine){let vt=B.linewidth;vt===void 0&&(vt=1),Et.setLineWidth(vt*de()),L.isLineSegments?Yt.setMode(D.LINES):L.isLineLoop?Yt.setMode(D.LINE_LOOP):Yt.setMode(D.LINE_STRIP)}else L.isPoints?Yt.setMode(D.POINTS):L.isSprite&&Yt.setMode(D.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)Yt.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))Yt.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{const vt=L._multiDrawStarts,On=L._multiDrawCounts,jt=L._multiDrawCount,an=mt?Y.get(mt).bytesPerElement:1,zi=yt.get(B).currentProgram.getUniforms();for(let Ge=0;Ge<jt;Ge++)zi.setValue(D,"_gl_DrawID",Ge),Yt.render(vt[Ge]/an,On[Ge])}else if(L.isInstancedMesh)Yt.renderInstances(Xt,se,L.count);else if(O.isInstancedBufferGeometry){const vt=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,On=Math.min(O.instanceCount,vt);Yt.renderInstances(Xt,se,On)}else Yt.render(Xt,se)};function $t(v,P,O){v.transparent===!0&&v.side===Ye&&v.forceSinglePass===!1?(v.side=Ve,v.needsUpdate=!0,Zr(v,P,O),v.side=ui,v.needsUpdate=!0,Zr(v,P,O),v.side=Ye):Zr(v,P,O)}this.compile=function(v,P,O=null){O===null&&(O=v),d=Gt.get(O),d.init(P),E.push(d),O.traverseVisible(function(L){L.isLight&&L.layers.test(P.layers)&&(d.pushLight(L),L.castShadow&&d.pushShadow(L))}),v!==O&&v.traverseVisible(function(L){L.isLight&&L.layers.test(P.layers)&&(d.pushLight(L),L.castShadow&&d.pushShadow(L))}),d.setupLights();const B=new Set;return v.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;const Q=L.material;if(Q)if(Array.isArray(Q))for(let lt=0;lt<Q.length;lt++){const pt=Q[lt];$t(pt,O,L),B.add(pt)}else $t(Q,O,L),B.add(Q)}),E.pop(),d=null,B},this.compileAsync=function(v,P,O=null){const B=this.compile(v,P,O);return new Promise(L=>{function Q(){if(B.forEach(function(lt){yt.get(lt).currentProgram.isReady()&&B.delete(lt)}),B.size===0){L(v);return}setTimeout(Q,10)}zt.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let sn=null;function Fn(v){sn&&sn(v)}function ul(){gi.stop()}function dl(){gi.start()}const gi=new sh;gi.setAnimationLoop(Fn),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(v){sn=v,V.setAnimationLoop(v),v===null?gi.stop():gi.start()},V.addEventListener("sessionstart",ul),V.addEventListener("sessionend",dl),this.render=function(v,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(P),P=V.getCamera()),v.isScene===!0&&v.onBeforeRender(S,v,P,I),d=Gt.get(v,E.length),d.init(P),E.push(d),bt.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),q.setFromProjectionMatrix(bt),_t=this.localClippingEnabled,tt=J.init(this.clippingPlanes,_t),p=ut.get(v,b.length),p.init(),b.push(p),V.enabled===!0&&V.isPresenting===!0){const Q=S.xr.getDepthSensingMesh();Q!==null&&ea(Q,P,-1/0,S.sortObjects)}ea(v,P,0,S.sortObjects),p.finish(),S.sortObjects===!0&&p.sort(rt,ht),Vt=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Vt&&Tt.addToRenderList(p,v),this.info.render.frame++,tt===!0&&J.beginShadows();const O=d.state.shadowsArray;dt.render(O,v,P),tt===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=p.opaque,L=p.transmissive;if(d.setupLights(),P.isArrayCamera){const Q=P.cameras;if(L.length>0)for(let lt=0,pt=Q.length;lt<pt;lt++){const mt=Q[lt];pl(B,L,v,mt)}Vt&&Tt.render(v);for(let lt=0,pt=Q.length;lt<pt;lt++){const mt=Q[lt];fl(p,v,mt,mt.viewport)}}else L.length>0&&pl(B,L,v,P),Vt&&Tt.render(v),fl(p,v,P);I!==null&&(T.updateMultisampleRenderTarget(I),T.updateRenderTargetMipmap(I)),v.isScene===!0&&v.onAfterRender(S,v,P),ee.resetDefaultState(),y=-1,M=null,E.pop(),E.length>0?(d=E[E.length-1],tt===!0&&J.setGlobalState(S.clippingPlanes,d.state.camera)):d=null,b.pop(),b.length>0?p=b[b.length-1]:p=null};function ea(v,P,O,B){if(v.visible===!1)return;if(v.layers.test(P.layers)){if(v.isGroup)O=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(P);else if(v.isLight)d.pushLight(v),v.castShadow&&d.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||q.intersectsSprite(v)){B&&Bt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(bt);const lt=X.update(v),pt=v.material;pt.visible&&p.push(v,lt,pt,O,Bt.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||q.intersectsObject(v))){const lt=X.update(v),pt=v.material;if(B&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Bt.copy(v.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Bt.copy(lt.boundingSphere.center)),Bt.applyMatrix4(v.matrixWorld).applyMatrix4(bt)),Array.isArray(pt)){const mt=lt.groups;for(let wt=0,Dt=mt.length;wt<Dt;wt++){const gt=mt[wt],Xt=pt[gt.materialIndex];Xt&&Xt.visible&&p.push(v,lt,Xt,O,Bt.z,gt)}}else pt.visible&&p.push(v,lt,pt,O,Bt.z,null)}}const Q=v.children;for(let lt=0,pt=Q.length;lt<pt;lt++)ea(Q[lt],P,O,B)}function fl(v,P,O,B){const L=v.opaque,Q=v.transmissive,lt=v.transparent;d.setupLightsView(O),tt===!0&&J.setGlobalState(S.clippingPlanes,O),B&&Et.viewport(R.copy(B)),L.length>0&&$r(L,P,O),Q.length>0&&$r(Q,P,O),lt.length>0&&$r(lt,P,O),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function pl(v,P,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[B.id]===void 0&&(d.state.transmissionRenderTarget[B.id]=new Di(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?Wr:Un,minFilter:Ri,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Wt.workingColorSpace}));const Q=d.state.transmissionRenderTarget[B.id],lt=B.viewport||R;Q.setSize(lt.z,lt.w);const pt=S.getRenderTarget();S.setRenderTarget(Q),S.getClearColor(W),K=S.getClearAlpha(),K<1&&S.setClearColor(16777215,.5),S.clear(),Vt&&Tt.render(O);const mt=S.toneMapping;S.toneMapping=hi;const wt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),d.setupLightsView(B),tt===!0&&J.setGlobalState(S.clippingPlanes,B),$r(v,O,B),T.updateMultisampleRenderTarget(Q),T.updateRenderTargetMipmap(Q),zt.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let gt=0,Xt=P.length;gt<Xt;gt++){const ne=P[gt],se=ne.object,Fe=ne.geometry,Yt=ne.material,vt=ne.group;if(Yt.side===Ye&&se.layers.test(B.layers)){const On=Yt.side;Yt.side=Ve,Yt.needsUpdate=!0,ml(se,O,B,Fe,Yt,vt),Yt.side=On,Yt.needsUpdate=!0,Dt=!0}}Dt===!0&&(T.updateMultisampleRenderTarget(Q),T.updateRenderTargetMipmap(Q))}S.setRenderTarget(pt),S.setClearColor(W,K),wt!==void 0&&(B.viewport=wt),S.toneMapping=mt}function $r(v,P,O){const B=P.isScene===!0?P.overrideMaterial:null;for(let L=0,Q=v.length;L<Q;L++){const lt=v[L],pt=lt.object,mt=lt.geometry,wt=B===null?lt.material:B,Dt=lt.group;pt.layers.test(O.layers)&&ml(pt,P,O,mt,wt,Dt)}}function ml(v,P,O,B,L,Q){v.onBeforeRender(S,P,O,B,L,Q),v.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),L.onBeforeRender(S,P,O,B,v,Q),L.transparent===!0&&L.side===Ye&&L.forceSinglePass===!1?(L.side=Ve,L.needsUpdate=!0,S.renderBufferDirect(O,P,B,L,v,Q),L.side=ui,L.needsUpdate=!0,S.renderBufferDirect(O,P,B,L,v,Q),L.side=Ye):S.renderBufferDirect(O,P,B,L,v,Q),v.onAfterRender(S,P,O,B,L,Q)}function Zr(v,P,O){P.isScene!==!0&&(P=le);const B=yt.get(v),L=d.state.lights,Q=d.state.shadowsArray,lt=L.state.version,pt=xt.getParameters(v,L.state,Q,P,O),mt=xt.getProgramCacheKey(pt);let wt=B.programs;B.environment=v.isMeshStandardMaterial?P.environment:null,B.fog=P.fog,B.envMap=(v.isMeshStandardMaterial?F:x).get(v.envMap||B.environment),B.envMapRotation=B.environment!==null&&v.envMap===null?P.environmentRotation:v.envMapRotation,wt===void 0&&(v.addEventListener("dispose",Lt),wt=new Map,B.programs=wt);let Dt=wt.get(mt);if(Dt!==void 0){if(B.currentProgram===Dt&&B.lightsStateVersion===lt)return _l(v,pt),Dt}else pt.uniforms=xt.getUniforms(v),v.onBeforeCompile(pt,S),Dt=xt.acquireProgram(pt,mt),wt.set(mt,Dt),B.uniforms=pt.uniforms;const gt=B.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(gt.clippingPlanes=J.uniform),_l(v,pt),B.needsLights=Qh(v),B.lightsStateVersion=lt,B.needsLights&&(gt.ambientLightColor.value=L.state.ambient,gt.lightProbe.value=L.state.probe,gt.directionalLights.value=L.state.directional,gt.directionalLightShadows.value=L.state.directionalShadow,gt.spotLights.value=L.state.spot,gt.spotLightShadows.value=L.state.spotShadow,gt.rectAreaLights.value=L.state.rectArea,gt.ltc_1.value=L.state.rectAreaLTC1,gt.ltc_2.value=L.state.rectAreaLTC2,gt.pointLights.value=L.state.point,gt.pointLightShadows.value=L.state.pointShadow,gt.hemisphereLights.value=L.state.hemi,gt.directionalShadowMap.value=L.state.directionalShadowMap,gt.directionalShadowMatrix.value=L.state.directionalShadowMatrix,gt.spotShadowMap.value=L.state.spotShadowMap,gt.spotLightMatrix.value=L.state.spotLightMatrix,gt.spotLightMap.value=L.state.spotLightMap,gt.pointShadowMap.value=L.state.pointShadowMap,gt.pointShadowMatrix.value=L.state.pointShadowMatrix),B.currentProgram=Dt,B.uniformsList=null,Dt}function gl(v){if(v.uniformsList===null){const P=v.currentProgram.getUniforms();v.uniformsList=Is.seqWithValue(P.seq,v.uniforms)}return v.uniformsList}function _l(v,P){const O=yt.get(v);O.outputColorSpace=P.outputColorSpace,O.batching=P.batching,O.batchingColor=P.batchingColor,O.instancing=P.instancing,O.instancingColor=P.instancingColor,O.instancingMorph=P.instancingMorph,O.skinning=P.skinning,O.morphTargets=P.morphTargets,O.morphNormals=P.morphNormals,O.morphColors=P.morphColors,O.morphTargetsCount=P.morphTargetsCount,O.numClippingPlanes=P.numClippingPlanes,O.numIntersection=P.numClipIntersection,O.vertexAlphas=P.vertexAlphas,O.vertexTangents=P.vertexTangents,O.toneMapping=P.toneMapping}function Zh(v,P,O,B,L){P.isScene!==!0&&(P=le),T.resetTextureUnits();const Q=P.fog,lt=B.isMeshStandardMaterial?P.environment:null,pt=I===null?S.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:_r,mt=(B.isMeshStandardMaterial?F:x).get(B.envMap||lt),wt=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Dt=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),gt=!!O.morphAttributes.position,Xt=!!O.morphAttributes.normal,ne=!!O.morphAttributes.color;let se=hi;B.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(se=S.toneMapping);const Fe=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Yt=Fe!==void 0?Fe.length:0,vt=yt.get(B),On=d.state.lights;if(tt===!0&&(_t===!0||v!==M)){const Ze=v===M&&B.id===y;J.setState(B,v,Ze)}let jt=!1;B.version===vt.__version?(vt.needsLights&&vt.lightsStateVersion!==On.state.version||vt.outputColorSpace!==pt||L.isBatchedMesh&&vt.batching===!1||!L.isBatchedMesh&&vt.batching===!0||L.isBatchedMesh&&vt.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&vt.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&vt.instancing===!1||!L.isInstancedMesh&&vt.instancing===!0||L.isSkinnedMesh&&vt.skinning===!1||!L.isSkinnedMesh&&vt.skinning===!0||L.isInstancedMesh&&vt.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&vt.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&vt.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&vt.instancingMorph===!1&&L.morphTexture!==null||vt.envMap!==mt||B.fog===!0&&vt.fog!==Q||vt.numClippingPlanes!==void 0&&(vt.numClippingPlanes!==J.numPlanes||vt.numIntersection!==J.numIntersection)||vt.vertexAlphas!==wt||vt.vertexTangents!==Dt||vt.morphTargets!==gt||vt.morphNormals!==Xt||vt.morphColors!==ne||vt.toneMapping!==se||vt.morphTargetsCount!==Yt)&&(jt=!0):(jt=!0,vt.__version=B.version);let an=vt.currentProgram;jt===!0&&(an=Zr(B,P,L));let zi=!1,Ge=!1,yr=!1;const ae=an.getUniforms(),Tn=vt.uniforms;if(Et.useProgram(an.program)&&(zi=!0,Ge=!0,yr=!0),B.id!==y&&(y=B.id,Ge=!0),zi||M!==v){Et.buffers.depth.getReversed()?(st.copy(v.projectionMatrix),Xu(st),qu(st),ae.setValue(D,"projectionMatrix",st)):ae.setValue(D,"projectionMatrix",v.projectionMatrix),ae.setValue(D,"viewMatrix",v.matrixWorldInverse);const Zn=ae.map.cameraPosition;Zn!==void 0&&Zn.setValue(D,Ct.setFromMatrixPosition(v.matrixWorld)),kt.logarithmicDepthBuffer&&ae.setValue(D,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ae.setValue(D,"isOrthographic",v.isOrthographicCamera===!0),M!==v&&(M=v,Ge=!0,yr=!0)}if(L.isSkinnedMesh){ae.setOptional(D,L,"bindMatrix"),ae.setOptional(D,L,"bindMatrixInverse");const Ze=L.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),ae.setValue(D,"boneTexture",Ze.boneTexture,T))}L.isBatchedMesh&&(ae.setOptional(D,L,"batchingTexture"),ae.setValue(D,"batchingTexture",L._matricesTexture,T),ae.setOptional(D,L,"batchingIdTexture"),ae.setValue(D,"batchingIdTexture",L._indirectTexture,T),ae.setOptional(D,L,"batchingColorTexture"),L._colorsTexture!==null&&ae.setValue(D,"batchingColorTexture",L._colorsTexture,T));const Er=O.morphAttributes;if((Er.position!==void 0||Er.normal!==void 0||Er.color!==void 0)&&At.update(L,O,an),(Ge||vt.receiveShadow!==L.receiveShadow)&&(vt.receiveShadow=L.receiveShadow,ae.setValue(D,"receiveShadow",L.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Tn.envMap.value=mt,Tn.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&P.environment!==null&&(Tn.envMapIntensity.value=P.environmentIntensity),Ge&&(ae.setValue(D,"toneMappingExposure",S.toneMappingExposure),vt.needsLights&&Jh(Tn,yr),Q&&B.fog===!0&&at.refreshFogUniforms(Tn,Q),at.refreshMaterialUniforms(Tn,B,k,Z,d.state.transmissionRenderTarget[v.id]),Is.upload(D,gl(vt),Tn,T)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Is.upload(D,gl(vt),Tn,T),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ae.setValue(D,"center",L.center),ae.setValue(D,"modelViewMatrix",L.modelViewMatrix),ae.setValue(D,"normalMatrix",L.normalMatrix),ae.setValue(D,"modelMatrix",L.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Ze=B.uniformsGroups;for(let Zn=0,Jn=Ze.length;Zn<Jn;Zn++){const xl=Ze[Zn];C.update(xl,an),C.bind(xl,an)}}return an}function Jh(v,P){v.ambientLightColor.needsUpdate=P,v.lightProbe.needsUpdate=P,v.directionalLights.needsUpdate=P,v.directionalLightShadows.needsUpdate=P,v.pointLights.needsUpdate=P,v.pointLightShadows.needsUpdate=P,v.spotLights.needsUpdate=P,v.spotLightShadows.needsUpdate=P,v.rectAreaLights.needsUpdate=P,v.hemisphereLights.needsUpdate=P}function Qh(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(v,P,O){yt.get(v.texture).__webglTexture=P,yt.get(v.depthTexture).__webglTexture=O;const B=yt.get(v);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=O===void 0,B.__autoAllocateDepthBuffer||zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,P){const O=yt.get(v);O.__webglFramebuffer=P,O.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(v,P=0,O=0){I=v,A=P,w=O;let B=!0,L=null,Q=!1,lt=!1;if(v){const mt=yt.get(v);if(mt.__useDefaultFramebuffer!==void 0)Et.bindFramebuffer(D.FRAMEBUFFER,null),B=!1;else if(mt.__webglFramebuffer===void 0)T.setupRenderTarget(v);else if(mt.__hasExternalTextures)T.rebindTextures(v,yt.get(v.texture).__webglTexture,yt.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const gt=v.depthTexture;if(mt.__boundDepthTexture!==gt){if(gt!==null&&yt.has(gt)&&(v.width!==gt.image.width||v.height!==gt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(v)}}const wt=v.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(lt=!0);const Dt=yt.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Dt[P])?L=Dt[P][O]:L=Dt[P],Q=!0):v.samples>0&&T.useMultisampledRTT(v)===!1?L=yt.get(v).__webglMultisampledFramebuffer:Array.isArray(Dt)?L=Dt[O]:L=Dt,R.copy(v.viewport),G.copy(v.scissor),z=v.scissorTest}else R.copy(St).multiplyScalar(k).floor(),G.copy(Ot).multiplyScalar(k).floor(),z=te;if(Et.bindFramebuffer(D.FRAMEBUFFER,L)&&B&&Et.drawBuffers(v,L),Et.viewport(R),Et.scissor(G),Et.setScissorTest(z),Q){const mt=yt.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+P,mt.__webglTexture,O)}else if(lt){const mt=yt.get(v.texture),wt=P||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,mt.__webglTexture,O||0,wt)}y=-1},this.readRenderTargetPixels=function(v,P,O,B,L,Q,lt){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=yt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&lt!==void 0&&(pt=pt[lt]),pt){Et.bindFramebuffer(D.FRAMEBUFFER,pt);try{const mt=v.texture,wt=mt.format,Dt=mt.type;if(!kt.textureFormatReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!kt.textureTypeReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=v.width-B&&O>=0&&O<=v.height-L&&D.readPixels(P,O,B,L,Ut.convert(wt),Ut.convert(Dt),Q)}finally{const mt=I!==null?yt.get(I).__webglFramebuffer:null;Et.bindFramebuffer(D.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=async function(v,P,O,B,L,Q,lt){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=yt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&lt!==void 0&&(pt=pt[lt]),pt){const mt=v.texture,wt=mt.format,Dt=mt.type;if(!kt.textureFormatReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!kt.textureTypeReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(P>=0&&P<=v.width-B&&O>=0&&O<=v.height-L){Et.bindFramebuffer(D.FRAMEBUFFER,pt);const gt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,gt),D.bufferData(D.PIXEL_PACK_BUFFER,Q.byteLength,D.STREAM_READ),D.readPixels(P,O,B,L,Ut.convert(wt),Ut.convert(Dt),0);const Xt=I!==null?yt.get(I).__webglFramebuffer:null;Et.bindFramebuffer(D.FRAMEBUFFER,Xt);const ne=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Wu(D,ne,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,gt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Q),D.deleteBuffer(gt),D.deleteSync(ne),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,P=null,O=0){v.isTexture!==!0&&(Nr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),P=arguments[0]||null,v=arguments[1]);const B=Math.pow(2,-O),L=Math.floor(v.image.width*B),Q=Math.floor(v.image.height*B),lt=P!==null?P.x:0,pt=P!==null?P.y:0;T.setTexture2D(v,0),D.copyTexSubImage2D(D.TEXTURE_2D,O,0,0,lt,pt,L,Q),Et.unbindTexture()},this.copyTextureToTexture=function(v,P,O=null,B=null,L=0){v.isTexture!==!0&&(Nr("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,v=arguments[1],P=arguments[2],L=arguments[3]||0,O=null);let Q,lt,pt,mt,wt,Dt,gt,Xt,ne;const se=v.isCompressedTexture?v.mipmaps[L]:v.image;O!==null?(Q=O.max.x-O.min.x,lt=O.max.y-O.min.y,pt=O.isBox3?O.max.z-O.min.z:1,mt=O.min.x,wt=O.min.y,Dt=O.isBox3?O.min.z:0):(Q=se.width,lt=se.height,pt=se.depth||1,mt=0,wt=0,Dt=0),B!==null?(gt=B.x,Xt=B.y,ne=B.z):(gt=0,Xt=0,ne=0);const Fe=Ut.convert(P.format),Yt=Ut.convert(P.type);let vt;P.isData3DTexture?(T.setTexture3D(P,0),vt=D.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(T.setTexture2DArray(P,0),vt=D.TEXTURE_2D_ARRAY):(T.setTexture2D(P,0),vt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,P.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,P.unpackAlignment);const On=D.getParameter(D.UNPACK_ROW_LENGTH),jt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),an=D.getParameter(D.UNPACK_SKIP_PIXELS),zi=D.getParameter(D.UNPACK_SKIP_ROWS),Ge=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,se.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,se.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,mt),D.pixelStorei(D.UNPACK_SKIP_ROWS,wt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Dt);const yr=v.isDataArrayTexture||v.isData3DTexture,ae=P.isDataArrayTexture||P.isData3DTexture;if(v.isRenderTargetTexture||v.isDepthTexture){const Tn=yt.get(v),Er=yt.get(P),Ze=yt.get(Tn.__renderTarget),Zn=yt.get(Er.__renderTarget);Et.bindFramebuffer(D.READ_FRAMEBUFFER,Ze.__webglFramebuffer),Et.bindFramebuffer(D.DRAW_FRAMEBUFFER,Zn.__webglFramebuffer);for(let Jn=0;Jn<pt;Jn++)yr&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,yt.get(v).__webglTexture,L,Dt+Jn),v.isDepthTexture?(ae&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,yt.get(P).__webglTexture,L,ne+Jn),D.blitFramebuffer(mt,wt,Q,lt,gt,Xt,Q,lt,D.DEPTH_BUFFER_BIT,D.NEAREST)):ae?D.copyTexSubImage3D(vt,L,gt,Xt,ne+Jn,mt,wt,Q,lt):D.copyTexSubImage2D(vt,L,gt,Xt,ne+Jn,mt,wt,Q,lt);Et.bindFramebuffer(D.READ_FRAMEBUFFER,null),Et.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ae?v.isDataTexture||v.isData3DTexture?D.texSubImage3D(vt,L,gt,Xt,ne,Q,lt,pt,Fe,Yt,se.data):P.isCompressedArrayTexture?D.compressedTexSubImage3D(vt,L,gt,Xt,ne,Q,lt,pt,Fe,se.data):D.texSubImage3D(vt,L,gt,Xt,ne,Q,lt,pt,Fe,Yt,se):v.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,L,gt,Xt,Q,lt,Fe,Yt,se.data):v.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,L,gt,Xt,se.width,se.height,Fe,se.data):D.texSubImage2D(D.TEXTURE_2D,L,gt,Xt,Q,lt,Fe,Yt,se);D.pixelStorei(D.UNPACK_ROW_LENGTH,On),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,jt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,an),D.pixelStorei(D.UNPACK_SKIP_ROWS,zi),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ge),L===0&&P.generateMipmaps&&D.generateMipmap(vt),Et.unbindTexture()},this.copyTextureToTexture3D=function(v,P,O=null,B=null,L=0){return v.isTexture!==!0&&(Nr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,B=arguments[1]||null,v=arguments[2],P=arguments[3],L=arguments[4]||0),Nr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,P,O,B,L)},this.initRenderTarget=function(v){yt.get(v).__webglFramebuffer===void 0&&T.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?T.setTextureCube(v,0):v.isData3DTexture?T.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?T.setTexture2DArray(v,0):T.setTexture2D(v,0),Et.unbindTexture()},this.resetState=function(){A=0,w=0,I=null,Et.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Wt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Wt._getUnpackColorSpace()}}class i_ extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class r_ extends Ue{constructor(t=null,e=1,i=1,r,s,o,a,l,c=je,h=je,u,f){super(null,o,a,l,c,h,r,s,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qo extends xr{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Os=new N,Bs=new N,_c=new oe,Cr=new js,Ms=new Ys,La=new N,xc=new N;class dh extends Ee{constructor(t=new Ne,e=new qo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)Os.fromBufferAttribute(e,r-1),Bs.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=Os.distanceTo(Bs);t.setAttribute("lineDistance",new xe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ms.copy(i.boundingSphere),Ms.applyMatrix4(r),Ms.radius+=s,t.ray.intersectsSphere(Ms)===!1)return;_c.copy(r).invert(),Cr.copy(t.ray).applyMatrix4(_c);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){const m=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let g=m,p=_-1;g<p;g+=c){const d=h.getX(g),b=h.getX(g+1),E=Ss(this,t,Cr,l,d,b);E&&e.push(E)}if(this.isLineLoop){const g=h.getX(_-1),p=h.getX(m),d=Ss(this,t,Cr,l,g,p);d&&e.push(d)}}else{const m=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let g=m,p=_-1;g<p;g+=c){const d=Ss(this,t,Cr,l,g,g+1);d&&e.push(d)}if(this.isLineLoop){const g=Ss(this,t,Cr,l,_-1,m);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ss(n,t,e,i,r,s){const o=n.geometry.attributes.position;if(Os.fromBufferAttribute(o,r),Bs.fromBufferAttribute(o,s),e.distanceSqToSegment(Os,Bs,La,xc)>i)return;La.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(La);if(!(l<t.near||l>t.far))return{distance:l,point:xc.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}const vc=new N,Mc=new N;class s_ extends dh{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)vc.fromBufferAttribute(e,r),Mc.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+vc.distanceTo(Mc);t.setAttribute("lineDistance",new xe(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class a_ extends dh{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Yo extends Ne{constructor(t=.5,e=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],h=[];let u=t;const f=(e-t)/r,m=new N,_=new Rt;for(let g=0;g<=r;g++){for(let p=0;p<=i;p++){const d=s+p/i*o;m.x=u*Math.cos(d),m.y=u*Math.sin(d),l.push(m.x,m.y,m.z),c.push(0,0,1),_.x=(m.x/e+1)/2,_.y=(m.y/e+1)/2,h.push(_.x,_.y)}u+=f}for(let g=0;g<r;g++){const p=g*(i+1);for(let d=0;d<i;d++){const b=d+p,E=b,S=b+i+1,U=b+i+2,A=b+1;a.push(E,S,A),a.push(S,U,A)}}this.setIndex(a),this.setAttribute("position",new xe(l,3)),this.setAttribute("normal",new xe(c,3)),this.setAttribute("uv",new xe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class jo extends Ne{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new N,f=new N,m=[],_=[],g=[],p=[];for(let d=0;d<=i;d++){const b=[],E=d/i;let S=0;d===0&&o===0?S=.5/e:d===i&&l===Math.PI&&(S=-.5/e);for(let U=0;U<=e;U++){const A=U/e;u.x=-t*Math.cos(r+A*s)*Math.sin(o+E*a),u.y=t*Math.cos(o+E*a),u.z=t*Math.sin(r+A*s)*Math.sin(o+E*a),_.push(u.x,u.y,u.z),f.copy(u).normalize(),g.push(f.x,f.y,f.z),p.push(A+S,1-E),b.push(c++)}h.push(b)}for(let d=0;d<i;d++)for(let b=0;b<e;b++){const E=h[d][b+1],S=h[d][b],U=h[d+1][b],A=h[d+1][b+1];(d!==0||o>0)&&m.push(E,S,A),(d!==i-1||l<Math.PI)&&m.push(S,U,A)}this.setIndex(m),this.setAttribute("position",new xe(_,3)),this.setAttribute("normal",new xe(g,3)),this.setAttribute("uv",new xe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class fh extends xr{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jc,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Sc={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class o_{constructor(t,e,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const m=c[u],_=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null}}}const l_=new o_;class Ko{constructor(t){this.manager=t!==void 0?t:l_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ko.DEFAULT_MATERIAL_NAME="__DEFAULT";const Gn={};class c_ extends Error{constructor(t,e){super(t),this.response=e}}class h_ extends Ko{constructor(t){super(t)}load(t,e,i,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Sc.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Gn[t]!==void 0){Gn[t].push({onLoad:e,onProgress:i,onError:r});return}Gn[t]=[],Gn[t].push({onLoad:e,onProgress:i,onError:r});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Gn[t],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=f?parseInt(f):0,_=m!==0;let g=0;const p=new ReadableStream({start(d){b();function b(){u.read().then(({done:E,value:S})=>{if(E)d.close();else{g+=S.byteLength;const U=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:m});for(let A=0,w=h.length;A<w;A++){const I=h[A];I.onProgress&&I.onProgress(U)}d.enqueue(S),b()}},E=>{d.error(E)})}}});return new Response(p)}else throw new c_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(_=>m.decode(_))}}}).then(c=>{Sc.add(t,c);const h=Gn[t];delete Gn[t];for(let u=0,f=h.length;u<f;u++){const m=h[u];m.onLoad&&m.onLoad(c)}}).catch(c=>{const h=Gn[t];if(h===void 0)throw this.manager.itemError(t),c;delete Gn[t];for(let u=0,f=h.length;u<f;u++){const m=h[u];m.onError&&m.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class ph extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class u_ extends ph{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Da=new oe,yc=new N,Ec=new N;class d_{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wo,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;yc.setFromMatrixPosition(t.matrixWorld),e.position.copy(yc),Ec.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ec),e.updateMatrixWorld(),Da.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Da),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Da)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class f_ extends d_{constructor(){super(new ah(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mh extends ph{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new f_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Tc=new oe;class p_{constructor(t,e,i=0,r=1/0){this.ray=new js(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new Go,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Tc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Tc),this}intersectObject(t,e=!0,i=[]){return Ao(t,this,i,e),i.sort(bc),i}intersectObjects(t,e=!0,i=[]){for(let r=0,s=t.length;r<s;r++)Ao(t[r],this,i,e);return i.sort(bc),i}}function bc(n,t){return n.distance-t.distance}function Ao(n,t,e,i){let r=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)Ao(s[o],t,e,!0)}}class Ac{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Ie(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class gh extends s_{constructor(t=10,e=10,i=4473924,r=8947848){i=new Pt(i),r=new Pt(r);const s=e/2,o=t/e,a=t/2,l=[],c=[];for(let f=0,m=0,_=-a;f<=e;f++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const g=f===s?i:r;g.toArray(c,m),m+=3,g.toArray(c,m),m+=3,g.toArray(c,m),m+=3,g.toArray(c,m),m+=3}const h=new Ne;h.setAttribute("position",new xe(l,3)),h.setAttribute("color",new xe(c,3));const u=new qo({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class m_ extends Oi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uo);const wc={type:"change"},$o={type:"start"},_h={type:"end"},ys=new js,Rc=new si,g_=Math.cos(70*Vu.DEG2RAD),ge=new N,Be=2*Math.PI,Qt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ia=1e-6;class __ extends m_{constructor(t,e=null){super(t,e),this.state=Qt.NONE,this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Dn.ROTATE,MIDDLE:Dn.DOLLY,RIGHT:Dn.PAN},this.touches={ONE:nr.ROTATE,TWO:nr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new Ii,this._lastTargetPosition=new N,this._quat=new Ii().setFromUnitVectors(t.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ac,this._sphericalDelta=new Ac,this._scale=1,this._panOffset=new N,this._rotateStart=new Rt,this._rotateEnd=new Rt,this._rotateDelta=new Rt,this._panStart=new Rt,this._panEnd=new Rt,this._panDelta=new Rt,this._dollyStart=new Rt,this._dollyEnd=new Rt,this._dollyDelta=new Rt,this._dollyDirection=new N,this._mouse=new Rt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=v_.bind(this),this._onPointerDown=x_.bind(this),this._onPointerUp=M_.bind(this),this._onContextMenu=w_.bind(this),this._onMouseWheel=E_.bind(this),this._onKeyDown=T_.bind(this),this._onTouchStart=b_.bind(this),this._onTouchMove=A_.bind(this),this._onMouseDown=S_.bind(this),this._onMouseMove=y_.bind(this),this._interceptControlDown=R_.bind(this),this._interceptControlUp=C_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(wc),this.update(),this.state=Qt.NONE}update(t=null){const e=this.object.position;ge.copy(e).sub(this.target),ge.applyQuaternion(this._quat),this._spherical.setFromVector3(ge),this.autoRotate&&this.state===Qt.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Be:i>Math.PI&&(i-=Be),r<-Math.PI?r+=Be:r>Math.PI&&(r-=Be),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(ge.setFromSpherical(this._spherical),ge.applyQuaternion(this._quatInverse),e.copy(this.target).add(ge),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=ge.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=ge.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ys.origin.copy(this.object.position),ys.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ys.direction))<g_?this.object.lookAt(this.target):(Rc.setFromNormalAndCoplanarPoint(this.object.up,this.target),ys.intersectPlane(Rc,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Ia||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ia||this._lastTargetPosition.distanceToSquared(this.target)>Ia?(this.dispatchEvent(wc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Be/60*this.autoRotateSpeed*t:Be/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ge.setFromMatrixColumn(e,0),ge.multiplyScalar(-t),this._panOffset.add(ge)}_panUp(t,e){this.screenSpacePanning===!0?ge.setFromMatrixColumn(e,1):(ge.setFromMatrixColumn(e,0),ge.crossVectors(this.object.up,ge)),ge.multiplyScalar(t),this._panOffset.add(ge)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;ge.copy(r).sub(this.target);let s=ge.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/i.clientHeight,this.object.matrix),this._panUp(2*e*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=t-i.left,s=e-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Be*this._rotateDelta.x/e.clientHeight),this._rotateUp(Be*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Be*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Be*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Be*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Be*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),s=.5*(t.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Be*this._rotateDelta.x/e.clientHeight),this._rotateUp(Be*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Rt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function x_(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function v_(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function M_(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(_h),this.state=Qt.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function S_(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Dn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Qt.DOLLY;break;case Dn.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Qt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Qt.ROTATE}break;case Dn.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Qt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Qt.PAN}break;default:this.state=Qt.NONE}this.state!==Qt.NONE&&this.dispatchEvent($o)}function y_(n){switch(this.state){case Qt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Qt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Qt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function E_(n){this.enabled===!1||this.enableZoom===!1||this.state!==Qt.NONE||(n.preventDefault(),this.dispatchEvent($o),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(_h))}function T_(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function b_(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case nr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Qt.TOUCH_ROTATE;break;case nr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Qt.TOUCH_PAN;break;default:this.state=Qt.NONE}break;case 2:switch(this.touches.TWO){case nr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Qt.TOUCH_DOLLY_PAN;break;case nr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Qt.TOUCH_DOLLY_ROTATE;break;default:this.state=Qt.NONE}break;default:this.state=Qt.NONE}this.state!==Qt.NONE&&this.dispatchEvent($o)}function A_(n){switch(this._trackPointer(n),this.state){case Qt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Qt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Qt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Qt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Qt.NONE}}function w_(n){this.enabled!==!1&&n.preventDefault()}function R_(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function C_(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class P_ extends Ko{constructor(t){super(t)}load(t,e,i,r){const s=this,o=new h_(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(s.parse(a))}catch(l){r?r(l):console.error(l),s.manager.itemError(t)}},i,r)}parse(t){function e(c){const h=new DataView(c),u=32/8*3+32/8*3*3+16/8,f=h.getUint32(80,!0);if(80+32/8+f*u===h.byteLength)return!0;const _=[115,111,108,105,100];for(let g=0;g<5;g++)if(i(_,h,g))return!1;return!0}function i(c,h,u){for(let f=0,m=c.length;f<m;f++)if(c[f]!==h.getUint8(u+f))return!1;return!0}function r(c){const h=new DataView(c),u=h.getUint32(80,!0);let f,m,_,g=!1,p,d,b,E,S;for(let R=0;R<70;R++)h.getUint32(R,!1)==1129270351&&h.getUint8(R+4)==82&&h.getUint8(R+5)==61&&(g=!0,p=new Float32Array(u*3*3),d=h.getUint8(R+6)/255,b=h.getUint8(R+7)/255,E=h.getUint8(R+8)/255,S=h.getUint8(R+9)/255);const U=84,A=50,w=new Ne,I=new Float32Array(u*3*3),y=new Float32Array(u*3*3),M=new Pt;for(let R=0;R<u;R++){const G=U+R*A,z=h.getFloat32(G,!0),W=h.getFloat32(G+4,!0),K=h.getFloat32(G+8,!0);if(g){const H=h.getUint16(G+48,!0);(H&32768)===0?(f=(H&31)/31,m=(H>>5&31)/31,_=(H>>10&31)/31):(f=d,m=b,_=E)}for(let H=1;H<=3;H++){const Z=G+H*12,k=R*3*3+(H-1)*3;I[k]=h.getFloat32(Z,!0),I[k+1]=h.getFloat32(Z+4,!0),I[k+2]=h.getFloat32(Z+8,!0),y[k]=z,y[k+1]=W,y[k+2]=K,g&&(M.setRGB(f,m,_,He),p[k]=M.r,p[k+1]=M.g,p[k+2]=M.b)}}return w.setAttribute("position",new _e(I,3)),w.setAttribute("normal",new _e(y,3)),g&&(w.setAttribute("color",new _e(p,3)),w.hasColors=!0,w.alpha=S),w}function s(c){const h=new Ne,u=/solid([\s\S]*?)endsolid/g,f=/facet([\s\S]*?)endfacet/g,m=/solid\s(.+)/;let _=0;const g=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,p=new RegExp("vertex"+g+g+g,"g"),d=new RegExp("normal"+g+g+g,"g"),b=[],E=[],S=[],U=new N;let A,w=0,I=0,y=0;for(;(A=u.exec(c))!==null;){I=y;const M=A[0],R=(A=m.exec(M))!==null?A[1]:"";for(S.push(R);(A=f.exec(M))!==null;){let W=0,K=0;const H=A[0];for(;(A=d.exec(H))!==null;)U.x=parseFloat(A[1]),U.y=parseFloat(A[2]),U.z=parseFloat(A[3]),K++;for(;(A=p.exec(H))!==null;)b.push(parseFloat(A[1]),parseFloat(A[2]),parseFloat(A[3])),E.push(U.x,U.y,U.z),W++,y++;K!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+_),W!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+_),_++}const G=I,z=y-I;h.userData.groupNames=S,h.addGroup(G,z,w),w++}return h.setAttribute("position",new xe(b,3)),h.setAttribute("normal",new xe(E,3)),h}function o(c){return typeof c!="string"?new TextDecoder().decode(c):c}function a(c){if(typeof c=="string"){const h=new Uint8Array(c.length);for(let u=0;u<c.length;u++)h[u]=c.charCodeAt(u)&255;return h.buffer||h}else return c}const l=a(t);return e(l)?r(l):s(o(t))}}const L_=[["Garter stitch","Knit",2],["Purl ridges","Knit",3],["Broken rib","Knit",2],["Fisherman rib","Knit",2],["Bubble knit","Knit",2],["Zigzag knit","Knit",2],["Fine stockinette","Knit",3],["Chunky V stitch","Knit",1],["Twisted rib","Knit",2],["Seed cable","Knit",3],["Braided cable","Knit",2],["Honeycomb cable","Knit",2],["Brioche stitch","Knit",2],["Tuck stitch","Knit",2],["Slip stitch","Knit",2],["Mock rib","Knit",3],["Diamond lace","Knit",2],["Offset cable","Knit",2],["Scallop knit","Knit",2],["Waffle rib","Knit",2],["Moss rib","Knit",3],["Elongated loops","Knit",2],["Crochet shell","Knit",2],["Granny stitch","Knit",2],["Oak grain","Wood",4],["Pine grain","Wood",3],["Zebrawood","Wood",3],["End grain","Wood",4],["Tree bark","Wood",4],["Wood planks","Wood",4],["Walnut grain","Wood",4],["Birch grain","Wood",3],["Cedar grain","Wood",4],["Burl wood","Wood",4],["Weathered wood","Wood",5],["Parquet wood","Wood",4],["Tweed weave","Textile",3],["Plaid weave","Textile",3],["Bamboo weave","Textile",2],["Cork","Natural",3],["Stipple stone","Natural",3],["Slate flakes","Natural",3],["Hammered metal","Industrial",3],["Chain mail","Industrial",2],["Diamond lattice","Geometric",2],["Art deco arches","Geometric",2],["Terrazzo chips","Natural",3],["Woven leather","Textile",2]],De=2*Math.PI,pn=n=>n-Math.floor(n),Mt=n=>pn(n+.5)-.5,Qe=n=>Math.max(0,Math.min(1,n)),hn=(n,t,e)=>{const i=Qe((e-n)/(t-n));return i*i*(3-2*i)},ie=(n,t)=>Math.sqrt(Math.max(0,1-(n/t)**2)),bn=(n,t,e,i)=>Math.sqrt(Math.max(0,1-(n/e)**2-(t/i)**2)),wo=(n,t,e,i,r,s)=>{const o=r-e,a=s-i,l=Qe(((n-e)*o+(t-i)*a)/(o*o+a*a));return Math.hypot(n-e-l*o,t-i-l*a)},Es=(n,t,e,i,r)=>ie((Math.hypot(n/e,t/i)-1)*Math.min(e,i),r);function er(n,t,e=.15,i=.3){const r=Math.abs(Mt(n)),s=pn(t);let o=10;for(let a=-1;a<=1;a++){const l=s-a;o=Math.min(o,wo(r,l,i,-.12,i*.78,.22),wo(r,l,i*.78,.22,0,.79))}return ie(o,e)}function tr(n,t,e,i,r=.14,s=0){const o=Math.floor(pn(t)*i);return er(n*e+s*(o%2),t*i,r)}function Pr(n,t,e=2){const i=t*e,r=Mt(n*2);return ie(Mt(i-.14*Math.cos(De*(n*2))),.26)*(.7+.3*Math.cos(De*r)**2)}function Lr(n,t,e=.5,i=.19,r=1,s=.105,o=2){let a=0;for(let l=0;l<o;l++){const c=De*(r*t+l/o);a=Math.max(a,ie(Mt(n-e-i*Math.sin(c)),s)*(.7+.3*Math.cos(c)))}return a}function Wn(n,t,e=5,i=.2,r=0){const s=De*n,o=De*t;return e*n+i*Math.sin(o+r)+.09*Math.sin(2*o+s+r)+.05*Math.sin(3*o-2*s)}function ze(n,t=.16){return ie(Mt(n),t)}function Ts(n,t,e,i,r,s){const o=Math.sin(Math.PI*(n-e))/r,a=Math.sin(Math.PI*(t-i))/s;return Math.exp(-.5*(o*o+a*a))}function Cc(n,t){return pn(Math.sin(n*127.1+t*311.7+12.78)*43758.5453)}function Dr(n,t,e=5){const i=pn(n)*e,r=pn(t)*e,s=Math.floor(i),o=Math.floor(r);let a=10,l=10,c=0;for(let h=-1;h<=1;h++)for(let u=-1;u<=1;u++){const f=s+u,m=o+h,_=(f+e)%e,g=(m+e)%e,p=Cc(_,g),d=Math.hypot(i-f-.15-.7*p,r-m-.15-.7*Cc(g,_+9));d<a?(l=a,a=d,c=p):d<l&&(l=d)}return[a,l,c]}function D_(n,t,e){const i=pn(t),r=pn(e),s=De*t,o=De*e;switch(n){case 0:return Math.max(.93*Pr(t,e,2),.36*tr(t,e,2,2,.17));case 1:return .92*Pr(t+.1*Math.sin(o),e,3);case 2:{const a=Math.floor(i*2),l=Math.floor(r*2);return(a+l)%2?tr(t,e,2,2,.19):.86*Pr(t,e,2)}case 3:return Math.max(.99*er(t*2,e*2,.22),.5*ie(Mt(t*2+.5+.08*Math.sin(o*2)),.19));case 4:return Math.max(bn(Mt(t*2+Math.floor(r*2)*.5),Mt(e*2),.4,.43),.35*tr(t,e,2,2,.12));case 5:return Math.max(ie(Mt(e*2-.42*Math.abs(Mt(t*2))),.23),.4*ie(Mt(e*2+.5-.42*Math.abs(Mt(t*2))),.14));case 6:return tr(t,e,3,3,.14);case 7:return er(t,e,.235,.36);case 8:return Math.max(Lr(t*2,e,.5,.14,2,.13,2),.37*ie(Mt(t*2),.15));case 9:return Math.max(Lr(t,e,.5,.16,1,.14,2),.66*bn(Mt(t*2),Mt(e*3),.24,.35));case 10:return Math.max(Lr(t,e,.5,.25,1,.14,3),.3*ie(Mt(t),.1));case 11:return Math.max(Lr(t*2,e,.5,.24,2,.12,2),.24*tr(t,e,2,2,.13));case 12:return Math.max(er(t*2,e,.24,.29),.58*er(t*2+.5,e+.5,.19,.3));case 13:return Math.max(tr(t,e,2,2,.15,.5),.83*Es(Mt(t*2),Mt(e),.25,.44,.085));case 14:return Math.max(.94*Es(Mt(t*2),Mt(e),.23,.43,.09),.55*Pr(t+.25,e,2));case 15:return Math.max(.95*ie(Mt(t*3+.07*Math.sin(o*2)),.24)*(.82+.18*Math.cos(2*o)),.42*Pr(t,e,2));case 16:return Math.max(ie(Mt(t+e),.095),ie(Mt(t-e),.095))*(.72+.28*Math.cos(s)**2);case 17:return Math.max(Lr(t*2,e+.5*Math.floor(i*2),.5,.23,1,.13,2),.32*ie(Mt(t*2),.12));case 18:{const a=Mt(t*2+Math.floor(r*2)*.5),l=Mt(e*2);return Math.max(ie(Mt(e*2-.32*Math.cos(De*a)),.18),.42*bn(a,l,.28,.36))}case 19:return Math.max(ie(Mt(t*2),.2)*(.8+.2*Math.cos(o*2)),.76*ie(Mt(e*2),.19));case 20:return Math.max(.85*ie(Mt(t*2),.15),.91*bn(Mt(t*2+.5),Mt(e*3),.26,.36));case 21:return Math.max(Es(Mt(t*2),Mt(e),.26,.43,.1),.42*er(t*2+.5,e*2,.12));case 22:{const a=Math.floor(r*2),l=Mt(t*2+a*.5),c=Mt(e*2);let h=0;for(let u=-1;u<=1;u++)h=Math.max(h,ie(wo(l,c,0,-.36,u*.33,.32),.12));return Math.max(h,.55*ie(Mt(e*2+.5),.11))}case 23:{const a=Mt(t*2),l=Mt(e*2),c=Math.abs(a)>Math.abs(l)?[a,l]:[l,a];let h=0;for(let u=-1;u<=1;u++)h=Math.max(h,bn(c[0]-.24,c[1]-u*.21,.15,.1));return h}case 24:{const a=Ts(t,e,.52,.48,.27,.44),l=Wn(t,e,5,.48)+.57*a*Math.sin(s);return Qe(.2+.62*ze(l,.26)+.2*ze(2*l+.2,.12)-.16*a)}case 25:{const a=Wn(t,e,4,.63)+.35*Ts(t,e,.35,.6,.28,.35)*Math.sin(s);return Qe(.16+.77*(.5+.5*Math.cos(De*a))**2+.07*Math.cos(De*2*a))}case 26:{const a=Wn(t,e,3,.12);return .13+.87*hn(-.3,.8,Math.sin(De*a+.3*Math.sin(2*s)))}case 27:{const a=Math.hypot(Math.sin(Math.PI*(t-.5)),Math.sin(Math.PI*(e-.5)));return .12+.88*ze(7*a+.1*Math.sin(s+o),.27)}case 28:{const a=Wn(t,e,5,.7)+.25*Math.sin(s+2*o);return Qe(.13+.77*ze(a,.36)+.15*Math.cos(3*o+s)**2-.22*ze(3*a+o/De,.12))}case 29:{const a=Math.floor(i*3),l=pn(t*3),c=a%2*.5,h=Wn(t,e,8,.2,a*1.3);return hn(0,.045,Math.min(l,1-l))*hn(0,.025,Math.abs(Mt(e+c)))*Qe(.52+.35*ze(h,.25)+.08*Math.sin(2*o))}case 30:{const a=Wn(t,e,6,.38)+.34*Math.sin(s-2*o);return Qe(.2+.6*(.5+.5*Math.cos(De*a))**1.4+.17*ze(2*a,.1))}case 31:{const a=Wn(t,e,3,.13),l=bn(Mt(t*3+Math.floor(r*3)*.5),Mt(e*3),.36,.11);return Qe(.48+.35*ze(a,.25)-.45*l)}case 32:{const a=Wn(t,e,7,.29)+.12*Math.sin(s+o);return Qe(.19+.55*ze(a,.32)+.21*ze(2*a+.3,.17))}case 33:{const a=Ts(t,e,.26,.29,.42,.38),l=Ts(t,e,.73,.78,.4,.45),c=3*t+.7*Math.sin(o)+1.3*(a-l)+.3*Math.sin(s-2*o);return .14+.86*ze(c,.3)}case 34:{const a=Wn(t,e,9,.4)+.18*Math.sin(s+3*o);return Qe(.25+.68*ze(a,.35)-.2*ze(2*a+Math.sin(o)*.3,.1))}case 35:{const a=Math.floor(i*2),l=Math.floor(r*2),c=pn(t*2),h=pn(e*2),u=(a+l)%2?[h,c]:[c,h],f=hn(0,.045,Math.min(c,1-c,h,1-h)),m=4*u[0]+.12*Math.sin(De*u[1]);return f*(.47+.48*ze(m,.3))}case 36:{const a=Math.cos(3*(s+o)),l=Math.cos(4*s-2*o);return Qe(.45+.27*a+.22*l+.1*Math.cos(4*o))}case 37:return Math.max(ie(Mt(t*3),.21)*(.72+.28*Math.cos(3*o)),ie(Mt(e*3),.21)*(.72-.28*Math.cos(3*s)));case 38:{const a=Math.floor(r*2),l=Math.floor(i*2),c=Mt(t*2),h=Mt(e*2),u=(a+l)%2?[h,c]:[c,h];return bn(u[0],u[1],.48,.24)}case 39:{const[a,l,c]=Dr(t,e,7);return hn(.015,.19,l-a)*(.36+.53*c)*(1-.25*hn(0,.75,a))}case 40:{const[a,,l]=Dr(t,e,7);return .2+.8*bn(a,0,.49+.17*l,1)}case 41:{const[a,l,c]=Dr(t+.15*Math.sin(o),e,5);return hn(.04,.17,l-a)*(.44+.53*c)*(.85+.15*Math.sin(s+2*o))}case 42:{const[a,l]=Dr(t,e,5);return Qe(.22+.7*hn(.03,.3,l-a)+.15*hn(.1,.5,a))}case 43:{let a=0;for(const[l,c]of[[0,0],[.5,.5]]){const h=Mt(t-l),u=Mt(e-c);a=Math.max(a,Es(h,u,.32,.42,.105)*(.83+.17*Math.cos(De*u)))}return a}case 44:return Math.max(ie(Mt(t+e),.095),ie(Mt(t-e),.095));case 45:{const a=Mt(t*2+Math.floor(r*2)*.5),l=Mt(e*2);return Math.max(ie(Math.hypot(a,l+.25)-.43,.075),.63*ie(Math.hypot(a,l+.25)-.28,.06))}case 46:{const[a,l,c]=Dr(t,e,6);return hn(.08,.22,l-a)*(.35+.64*c)*(1-.2*hn(.1,.6,a))}case 47:{const a=Mt(t*2),l=Mt(e*2),c=(Math.floor(i*2)+Math.floor(r*2))%2,h=c?[l,a]:[a,l];return Math.max(.9*bn(h[0],h[1],.49,.31),.4*bn(h[1],h[0],.47,.24))}default:return 0}}const oi=256,Br=16,rr=6,fi=[["Seed stitch","Textile",2],["Moss stitch","Textile",2],["Cable knit","Textile",2],["Diamond knit","Textile",2],["Waffle knit","Textile",2],["Herringbone","Textile",2],["Linen weave","Textile",3],["Denim twill","Textile",3],["Braided rope","Textile",2],["Diamond quilt","Textile",1],["Pebbled leather","Natural",2],["Orange peel","Natural",3],["Fish scales","Natural",2],["Reptile scales","Natural",2],["Cobblestone","Natural",2],["Wood grain","Natural",2],["Honeycomb","Geometric",2],["Raised dots","Geometric",2],["Wave ridges","Geometric",2],["Brickwork","Geometric",2],["Diamond plate","Industrial",2],["Crosshatch knurl","Industrial",2],["Hex bolts","Industrial",2],["Parallel grooves","Industrial",2]],Te=30,Ro=fi.length;fi.push(...L_);const xh=n=>n<Ro?n+6:n+7,Zo=n=>Number.isInteger(n)&&n>=6&&n!==Te?n<Te?n-6:n-7:-1;function zs(n){if(n===Te)return"Custom";if(n===0)return"All";if(n<6)return"Knit";const t=Zo(n);return t===15?"Wood":t>=0&&t<=5?"Knit":fi[t]?.[1]||"All"}function ks(n){return["Custom","Wood"].includes(zs(n))?100:12}const Ft=oi,Pc=Math.PI*2,li=n=>n-Math.floor(n),zr=n=>Math.max(0,Math.min(1,n)),Zt=n=>li(n+.5)-.5,un=(n,t,e)=>{const i=zr((e-n)/(t-n));return i*i*(3-2*i)},ke=(n,t)=>1-un(0,t,Math.abs(n)),Ir=(n,t,e,i)=>Math.sqrt(Math.max(0,1-(n/e)**2-(t/i)**2)),Lc=(n,t)=>li(Math.sin((n%5+5)%5*127.1+(t%5+5)%5*311.7+17.13)*43758.5453);function bs(n,t){const e=n*5,i=t*5,r=Math.floor(e),s=Math.floor(i);let o=10,a=10;for(let l=-1;l<=1;l++)for(let c=-1;c<=1;c++){const h=r+c,u=s+l,f=Math.hypot(e-h-.18-.64*Lc(h,u),i-u-.18-.64*Lc(u,h+2));f<o?(a=o,o=f):f<a&&(a=f)}return[o,a]}function vh(n,t){return n=Math.abs(n),t=Math.abs(t),Math.max(n*.8660254+t*.5,t)}function I_(n,t){let e=10;for(const[i,r]of[[0,0],[.5,.5]]){const s=Zt(n-i),o=Zt(t-r)*1.73205;e=Math.min(e,Math.abs(vh(s,o)-.43))}return e}function U_(n,t,e){const i=li(t),r=li(e),s=Pc*t,o=Pc*e;switch(n){case 0:{const a=Math.floor(r*2),l=Zt(t*2+a*.5),c=Zt(e*2);return Ir(l+.35*(a?1:-1)*c,c,.28,.43)}case 1:{const a=Math.floor(r*2),l=Zt(t*2+a*.5),c=Zt(e*2);return Math.max(Ir(l,c,.25,.38),.5*Ir(Zt(l+.5),Zt(c+.5),.3,.21))}case 2:{const a=Zt(t-.5-.22*Math.sin(o)),l=Zt(t-.5+.22*Math.sin(o));return Math.max(ke(a,.15)*(.76+.24*Math.cos(o)),ke(l,.15)*(.76-.24*Math.cos(o)),.42*ke(Zt(t),.12))}case 3:return Math.max(ke(Zt(t+e),.13),ke(Zt(t-e),.13))*(.78+.22*Math.cos(s*2));case 4:return .95*Math.max(ke(Zt(t*2),.19),ke(Zt(e*2),.19));case 5:{const a=Math.floor(i*2),l=(a?1:-1)*(li(t*2)-.5)*.42;return ke(Zt(e*2-l),.27)}case 6:{const a=Math.cos(s*3),l=Math.cos(o*3),c=Math.cos((s+o)*3);return zr(.5+.23*a+.23*l+.18*c)}case 7:return zr(.5+.34*Math.cos(3*(s+o))+.15*Math.cos(3*(s-o)));case 8:return Math.max(ke(Zt(t-.25-.22*Math.sin(2*o)),.18)*(.8+.2*Math.cos(2*o)),ke(Zt(t-.75+.22*Math.sin(2*o)),.18)*(.8-.2*Math.cos(2*o)));case 9:return Math.pow(Math.abs(Math.sin(Math.PI*(t+e))*Math.sin(Math.PI*(t-e))),.55);case 10:{const[a,l]=bs(t,e);return un(0,.25,l-a)*(.82+.18*Math.cos(a*4))}case 11:{const[a]=bs(t,e);return .18+.82*(1-un(.05,.8,a))}case 12:{let a=0;for(let l=-1;l<=1;l++){const c=li(e*2)-.5-l,h=Zt(t*2+(Math.floor(e*2)+l)*.5);a=Math.max(a,ke(Math.hypot(h,c+.26)-.47,.12)*un(-.42,-.13,c))}return a}case 13:{const[a,l]=bs(t,e);return un(.03,.24,l-a)*(.6+.4*(1-un(0,.65,a)))}case 14:{const[a,l]=bs(t,e);return un(.035,.2,l-a)*(.65+.35*(1-un(0,.7,a)))}case 15:return zr(.5+.31*Math.sin(2*s+.8*Math.sin(o)+.38*Math.sin(2*o))+.15*Math.sin(5*s+Math.sin(o)));case 16:return ke(I_(t,e),.075);case 17:return Ir(Zt(t*2),Zt(e*2),.34,.34);case 18:return ke(Zt(e*2-.22*Math.sin(s)),.25);case 19:{const a=Math.floor(r*2),l=Math.abs(Zt(t+a*.5)),c=Math.abs(Zt(e*2));return(1-un(.4,.49,l))*(1-un(.37,.49,c))}case 20:{const a=Math.floor(r*2),l=Math.floor(i*2),c=Zt(t*2),h=Zt(e*2),u=(a+l)%2?1:-1;return Ir((c+u*h)*.7071,(c-u*h)*.7071,.48,.14)}case 21:return Math.pow(Math.abs(Math.cos(Math.PI*(t+e))*Math.cos(Math.PI*(t-e))),.7);case 22:{const a=vh(Zt(t),Zt(e));return 1-un(.26,.31,a)}case 23:return ke(Zt(t*2),.26);default:return 0}}const Ua=new Map;function Mh(n){const t=Zo(n);if(t<0||t>=fi.length)return null;if(!Ua.has(n)){const e=new Uint8Array(Ft*Ft);for(let i=0;i<Ft;i++)for(let r=0;r<Ft;r++)e[i*Ft+r]=Math.round(255*zr(t<Ro?U_(t,(r+.5)/Ft,(i+.5)/Ft):D_(t-Ro,(r+.5)/Ft,(i+.5)/Ft)));Ua.set(n,e)}return Ua.get(n)}function N_(n,t,e){if(!n)return 0;const i=li(t)*Ft-.5,r=li(e)*Ft-.5,s=Math.floor(i),o=Math.floor(r),a=i-s,l=r-o,c=(h,u)=>n[(u+Ft)%Ft*Ft+(h+Ft)%Ft]/255;return(c(s,o)*(1-a)+c(s+1,o)*a)*(1-l)+(c(s,o+1)*(1-a)+c(s+1,o+1)*a)*l}function F_(n,t,e,i=65,r=null,s=!1){const o=N_(n===Te?r:Mh(n),t,e);return n===Te?r?s?1-o:o:0:Math.pow(o,2**((65-i)/35))}function O_(n){if(n.length!==Ft*Ft)throw Error("Invalid texture tile size.");let t="";for(let e=0;e<n.length;e+=8192)t+=String.fromCharCode(...n.subarray(e,e+8192));return btoa(t)}function Jo(n=[]){if(!Array.isArray(n)||n.length>Br)throw Error("Invalid custom texture library.");const t=new Map;for(const e of n){if(!e||typeof e.id!="string"||!/^[-a-zA-Z0-9_]{1,80}$/.test(e.id)||t.has(e.id)||typeof e.name!="string"||!e.name.length||e.name.length>100||typeof e.data!="string"||e.data.length!==4*Math.ceil(Ft*Ft/3))throw Error("Invalid custom texture asset.");const i=atob(e.data);if(i.length!==Ft*Ft)throw Error("Invalid custom texture pixel data.");t.set(e.id,Uint8Array.from(i,r=>r.charCodeAt(0)))}return t}function B_(n){if(n.length!==Ft*Ft*4)throw Error("Invalid texture image.");const t=new Uint8Array(Ft*Ft);for(let e=0;e<Ft;e++)for(let i=0;i<Ft;i++){const r=(e*Ft+i)*4;t[(Ft-1-e)*Ft+i]=Math.round((.2126*n[r]+.7152*n[r+1]+.0722*n[r+2])*n[r+3]/255)}return t}function z_(n,t,e){const i=Zo(n);if(i>=0&&i<fi.length)return i;if(n===Te){const r=e.findIndex(s=>s.id===t);return r<0?-1:fi.length+r}return-1}function k_(n,t=Jo(n)){const e=fi.map((a,l)=>Mh(xh(l))).concat(n.map(a=>t.get(a.id))),i=Ft+2,r=rr*i,s=Math.ceil(e.length/rr)*i,o=new Uint8Array(r*s);return e.forEach((a,l)=>{const c=l%rr*i,h=Math.floor(l/rr)*i;for(let u=-1;u<=Ft;u++)for(let f=-1;f<=Ft;f++)o[(h+u+1)*r+c+f+1]=a[(u+Ft)%Ft*Ft+(f+Ft)%Ft]}),{data:o,width:r,height:s}}const Qo={pattern:1,size:2,depth:.55,angle:0,thickness:65,blend:.8,mapping:0},jr=["Smooth","Classic knit","Crochet","Chevron","Ribbed knit","Basket weave"];jr[Te]="Custom height map";fi.forEach((n,t)=>{jr[xh(t)]=n[0]});const Sh=["Automatic (triplanar)","Cylindrical (Z)","Planar XY","Planar XZ","Planar YZ"],tl=(n,t,e)=>Math.max(t,Math.min(e,n)),An=n=>n-Math.floor(n),H_=(n,t,e)=>n+(t-n)*e,Ur=(n,t,e)=>{const i=tl((e-n)/(t-n),0,1);return i*i*(3-2*i)},Na=(n,t,e,i,r,s)=>{const o=r-e,a=s-i,l=tl(((n-e)*o+(t-i)*a)/(o*o+a*a),0,1);return Math.hypot(n-e-l*o,t-i-l*a)};function Dc(n,t,e,i,r=null,s=!1){if(e>=6)return F_(e,n,t,i,r,s);if(!e)return 0;const o=H_(.065,.25,tl(i/100,0,1));let a=10;if(e===1){const l=Math.abs(An(n)-.5),c=An(t);for(let h=-1;h<=1;h++){const u=c-h;a=Math.min(a,Na(l,u,.32,-.12,.25,.22),Na(l,u,.25,.22,.055,.7),Na(l,u,.055,.7,0,.76))}}else if(e===2)for(let l=-1;l<=1;l++){const c=An(t)-.5-l,h=An(n+(Math.floor(t)+l)%2*.5)-.5;a=Math.min(a,Math.abs(Math.hypot(h/.84,c/1.15)-.3))}else if(e===3){const l=.62*Math.abs(An(n)-.5);a=Math.abs(An(t-l+.5)-.5)*.82}else{if(e===4)return a=Math.abs(An(n)-.5),(1-Ur(o*.18,o*1.7,a))*(.84+.16*Math.cos(t*Math.PI*2));if(e===5){const l=Math.floor(n),c=Math.floor(t),h=An(n),u=An(t),f=(l+c)%2===0?h:u,m=(l+c)%2===0?u:h;return(1-Ur(o*.2,o*1.6,Math.abs(An(f*3)-.5)))*Ur(0,.15,m)*Ur(0,.15,1-m)}}return 1-Ur(o*.12,o,a)}function el(n){let t=[1/0,1/0,1/0],e=[-1/0,-1/0,-1/0];for(let i=0;i<n.length;i++){let r=i%3;t[r]=Math.min(t[r],n[i]),e[r]=Math.max(e[r],n[i])}return{min:t,max:e,center:t.map((i,r)=>(i+e[r])/2),size:t.map((i,r)=>e[r]-i)}}function yh(n){if(n.length<9||n.length%9)throw Error("No valid triangles.");const t=el(n),e=Math.max(1e-7,Math.max(...t.size)*1e-8),i=[],r=[],s=new Map;for(let o=0;o<n.length;o+=9){const a=[];for(let l=0;l<9;l+=3){const c=n[o+l],h=n[o+l+1],u=n[o+l+2];if(![c,h,u].every(Number.isFinite))throw Error("Invalid vertex coordinate.");const f=`${Math.round(c/e)},${Math.round(h/e)},${Math.round(u/e)}`;let m=s.get(f);m===void 0&&(m=i.length/3,s.set(f,m),i.push(c,h,u)),a.push(m)}a[0]!==a[1]&&a[1]!==a[2]&&a[2]!==a[0]&&r.push(...a)}if(!r.length)throw Error("Model has no usable triangles.");return{positions:Float32Array.from(i),indices:Uint32Array.from(r)}}function V_(n,t){const e=new Float32Array(n.length);for(let i=0;i<t.length;i+=3){const r=t[i]*3,s=t[i+1]*3,o=t[i+2]*3,a=n[s]-n[r],l=n[s+1]-n[r+1],c=n[s+2]-n[r+2],h=n[o]-n[r],u=n[o+1]-n[r+1],f=n[o+2]-n[r+2],m=l*f-c*u,_=c*h-a*f,g=a*u-l*h;for(const p of[r,s,o])e[p]+=m,e[p+1]+=_,e[p+2]+=g}for(let i=0;i<e.length;i+=3){const r=Math.hypot(e[i],e[i+1],e[i+2])||1;e[i]/=r,e[i+1]/=r,e[i+2]/=r}return e}function G_(n,t,e,i){const r=new Map(i.map(o=>[o.id,{min:[1/0,1/0,1/0],max:[-1/0,-1/0,-1/0]}]));for(let o=0;o<t.length;o++){const a=r.get(e[Math.floor(o/3)]);if(!a)continue;const l=t[o]*3;for(let c=0;c<3;c++)a.min[c]=Math.min(a.min[c],n[l+c]),a.max[c]=Math.max(a.max[c],n[l+c])}const s={};for(const[o,a]of r){if(!Number.isFinite(a.min[0])){s[o]=[0,0,0,1];continue}const l=a.min.map((h,u)=>(h+a.max[u])/2),c=Math.max(.01,(a.max[0]-a.min[0]+(a.max[1]-a.min[1]))/4);s[o]=[...l,c]}return s}function W_(n,t){const e=t.length/3,i=Array.from({length:e},()=>[]),r=new Float32Array(e*3),s=new Float32Array(e*3),o=new Map;let a=0,l=0,c=0,h=0;for(let u=0;u<e;u++){const f=t[u*3],m=t[u*3+1],_=t[u*3+2],g=f*3,p=m*3,d=_*3,b=[n[p]-n[g],n[p+1]-n[g+1],n[p+2]-n[g+2]],E=[n[d]-n[g],n[d+1]-n[g+1],n[d+2]-n[g+2]],S=[b[1]*E[2]-b[2]*E[1],b[2]*E[0]-b[0]*E[2],b[0]*E[1]-b[1]*E[0]],U=Math.hypot(...S);U<1e-12&&h++;for(let A=0;A<3;A++)r[u*3+A]=S[A]/(U||1),s[u*3+A]=(n[g+A]+n[p+A]+n[d+A])/3;for(const[A,w]of[[f,m],[m,_],[_,f]]){const I=A<w?`${A},${w}`:`${w},${A}`,y=o.get(I);if(y){for(const M of y.faces)i[u].push(M),i[M].push(u);y.faces.push(u),y.dir+=A<w?1:-1}else o.set(I,{faces:[u],dir:A<w?1:-1})}}for(const u of o.values())u.faces.length===1?a++:u.faces.length>2?l++:u.dir!==0&&c++;return{adj:i,faceNormals:r,centroids:s,boundary:a,nonmanifold:l,orientation:c,degenerate:h}}function X_(n,t){const e=new ArrayBuffer(84+t.length/3*50),i=new DataView(e);new Uint8Array(e).set(new TextEncoder().encode("KnitForge textured geometry")),i.setUint32(80,t.length/3,!0);for(let r=0;r<t.length;r+=3){const s=84+r/3*50,o=t[r]*3,a=t[r+1]*3,l=t[r+2]*3,c=n[a]-n[o],h=n[a+1]-n[o+1],u=n[a+2]-n[o+2],f=n[l]-n[o],m=n[l+1]-n[o+1],_=n[l+2]-n[o+2],g=h*_-u*m,p=u*f-c*_,d=c*m-h*f,b=Math.hypot(g,p,d)||1;[g/b,p/b,d/b,...n.slice(o,o+3),...n.slice(a,a+3),...n.slice(l,l+3)].forEach((E,S)=>i.setFloat32(s+S*4,E,!0))}return e}function q_(n,t){const e=new Map,i=n.length/3;let r=0;for(let l=0;l<t.length;l+=3){const c=t[l],h=t[l+1],u=t[l+2],f=c*3,m=h*3,_=u*3,g=n[m]-n[f],p=n[m+1]-n[f+1],d=n[m+2]-n[f+2],b=n[_]-n[f],E=n[_+1]-n[f+1],S=n[_+2]-n[f+2];Math.hypot(p*S-d*E,d*b-g*S,g*E-p*b)<1e-12&&r++;for(const[U,A]of[[c,h],[h,u],[u,c]]){const w=Math.min(U,A)*i+Math.max(U,A),I=e.get(w)||0;e.set(w,I+(U<A?1:65536))}}let s=0,o=0,a=0;for(const l of e.values()){const c=l%65536,h=Math.floor(l/65536),u=c+h;u===1?s++:u!==2?o++:c!==1&&a++}return{boundary:s,nonmanifold:o,orientation:a,degenerate:r}}function Y_(n,t){n.onBeforeCompile=e=>{Object.assign(e.uniforms,t),e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 kA;attribute vec4 kB;attribute vec4 kCenter;varying vec3 kPos;varying vec3 kNorm;varying vec4 kVa;varying vec4 kVb;varying vec4 kVc;`).replace("#include <begin_vertex>",`#include <begin_vertex>
kPos=position;kNorm=normal;kVa=kA;kVb=kB;kVc=kCenter;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 kPos;varying vec3 kNorm;varying vec4 kVa;varying vec4 kVb;varying vec4 kVc;
uniform sampler2D kAtlas;uniform vec2 kAtlasSize;
float kTile(vec2 uv){float slot=kVb.w-1.;if(slot<0.)return 0.;vec2 origin=vec2(mod(slot,${rr}.),floor(slot/${rr}.))*${oi+2}.;float h=texture2D(kAtlas,(origin+1.+fract(uv)*${oi}.)/kAtlasSize).r;if(abs(kVb.x-${Te}.)<.5)return kVb.z>.5?1.-h:h;return pow(h,exp2((65.-kVa.w)/35.));}
float kSeg(vec2 p,vec2 a,vec2 b){vec2 q=b-a;return length(p-a-q*clamp(dot(p-a,q)/dot(q,q),0.,1.));}
float kPat(vec2 uv){float ty=kVb.x,r=mix(.065,.25,clamp(kVa.w/100.,0.,1.)),d=10.;if(ty<.5)return 0.;if(ty>5.5)return kTile(uv);if(ty<1.5){float x=abs(fract(uv.x)-.5);for(int j=-1;j<=1;j++){vec2 p=vec2(x,fract(uv.y)-float(j));d=min(d,kSeg(p,vec2(.32,-.12),vec2(.25,.22)));d=min(d,kSeg(p,vec2(.25,.22),vec2(.055,.70)));d=min(d,kSeg(p,vec2(.055,.70),vec2(0.,.76)));}}else if(ty<2.5){for(int j=-1;j<=1;j++){float y=fract(uv.y)-.5-float(j),x=fract(uv.x+mod(floor(uv.y)+float(j),2.)*.5)-.5;d=min(d,abs(length(vec2(x/.84,y/1.15))-.30));}}else if(ty<3.5){float w=.62*abs(fract(uv.x)-.5);d=abs(fract(uv.y-w+.5)-.5)*.82;}else if(ty<4.5){d=abs(fract(uv.x)-.5);return (1.-smoothstep(r*.18,r*1.7,d))*(.84+.16*cos(uv.y*6.2831853));}else{vec2 f=fract(uv);if(mod(floor(uv.x)+floor(uv.y),2.)>.5)f=f.yx;return (1.-smoothstep(r*.2,r*1.6,abs(fract(f.x*3.)-.5)))*smoothstep(0.,.15,f.y)*smoothstep(0.,.15,1.-f.y);}return 1.-smoothstep(r*.12,r,d);}
float kHeight2(vec2 p){float a=radians(kVa.z),c=cos(a),s=sin(a);return kPat(vec2(c*p.x-s*p.y,s*p.x+c*p.y)/max(.05,kVa.x));}
float kHeight(){if(kVb.x<.5||kVa.y<=0.)return 0.;vec3 p=kPos;float m=kVb.y;if(m>.5&&m<1.5){vec3 q=p-kVc.xyz;return kHeight2(vec2(atan(q.y,q.x)*kVc.w,q.z))*kVa.y;}if(m>1.5&&m<2.5)return kHeight2(p.xy)*kVa.y;if(m>2.5&&m<3.5)return kHeight2(p.xz)*kVa.y;if(m>3.5)return kHeight2(p.yz)*kVa.y;vec3 w=pow(abs(normalize(kNorm)),vec3(6.));return dot(w,vec3(kHeight2(p.yz),kHeight2(p.xz),kHeight2(p.xy)))/max(.00001,w.x+w.y+w.z)*kVa.y;}
`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
float kh=kHeight();vec3 ks=-vViewPosition;vec3 kdx=dFdx(ks),kdy=dFdy(ks);vec3 kr1=cross(kdy,normal),kr2=cross(normal,kdx);float kd=dot(kdx,kr1);if(abs(kd)>1e-9&&kVa.y>0.){normal=normalize(abs(kd)*normal-sign(kd)*(dFdx(kh)*kr1+dFdy(kh)*kr2));}
`)},n.customProgramCacheKey=()=>"knitforge-preview-v3"}function Eh(n,{mode:t,active:e,locked:i}){return i.has(n)||t==="paint"&&(!e||i.has(e))?"protected":n===(t==="erase"?0:e)?"unchanged":t}function j_(n,t,e){let i=!1;const r=e.mode==="erase"?0:e.active;for(const s of t)!Number.isInteger(s)||s<0||s>=n.length||Eh(n[s],e)===e.mode&&(n[s]=r,i=!0);return i}function K_(n,t,e,i,r=null){if(n<0||n>=e.length||i.has(e[n]))return[];const s=r===null?-1/0:Math.cos(r*Math.PI/180),o=t.faceNormals,a=new Set([n]),l=[n];for(let c=0;c<l.length;c++){const h=l[c];for(const u of t.adj[h]){if(a.has(u)||i.has(e[u]))continue;const f=h*3,m=u*3;(r===null||o[f]*o[m]+o[f+1]*o[m+1]+o[f+2]*o[m+2]>=s)&&(a.add(u),l.push(u))}}return l}const $_=Object.freeze({textured:"#c5a887",smooth:"#b7b3af"});function Js(n){const t=e=>typeof n?.[e]=="string"&&/^#[0-9a-f]{6}$/i.test(n[e])?n[e].toLowerCase():$_[e];return{textured:t("textured"),smooth:t("smooth")}}function Z_(n,t,e,i,r){const s=new Set(e.filter(o=>o.settings.pattern>0).map(o=>o.id));for(let o=0;o<t.length;o++){const a=s.has(t[o])?i:r,l=o*9;for(let c=0;c<9;c+=3)n[l+c]=a[0],n[l+c+1]=a[1],n[l+c+2]=a[2]}return n}const et=n=>document.getElementById(n),xn=n=>n.toLocaleString("en-US"),Hs=n=>JSON.parse(JSON.stringify(n)),Ic=["#9ecdb0","#d8ad82","#a1b9e4","#e3a1af","#c0a5e6","#e2ce83","#8ec7ce"];let qt=null,fe=[],Kt=null,Pe=0,cr=1,Pn="orbit",Kn="paint",$n="groups",ce=null,be=null,Vs=0,Sn=[],Ui=[],mn=null,nn=null,vn=null,Or=100,yn=!1,Gs=!1,Co=null,gr=null,Pi=5,Po=35,Fa=!1,As=!1,En=Js(),rn=[],Lo=new Map,sr="All",kr="",Th=null;const Us={kAtlas:{value:null},kAtlasSize:{value:new Rt(1,1)}};function bh(){Lo=Jo(rn);const n=k_(rn,Lo),t=new r_(n.data,n.width,n.height,Bo,Un);t.minFilter=t.magFilter=gn,t.generateMipmaps=!1,t.unpackAlignment=1,t.needsUpdate=!0,Us.kAtlas.value?.dispose(),Us.kAtlas.value=t,Us.kAtlasSize.value.set(n.width,n.height)}function Ah(n){return n.pattern===Te?rn.find(t=>t.id===n.textureId)?.name||"Custom height map":jr[n.pattern]}let me;const Ke=new i_,Mn=new tn(38,1,.01,1e5);Mn.up.set(0,0,1);try{me=new n_({antialias:!0,alpha:!0})}catch(n){throw et("notice").textContent="WebGL is unavailable. Enable hardware acceleration in a modern browser.",n}me.setPixelRatio(Math.min(window.devicePixelRatio||1,2));me.setClearColor(0,0);me.outputColorSpace=He;et("viewport").prepend(me.domElement);const Ln=new __(Mn,me.domElement);Ln.enableDamping=!0;Ln.dampingFactor=.12;Ln.mouseButtons={LEFT:Dn.ROTATE,MIDDLE:Dn.PAN,RIGHT:Dn.ROTATE};Ke.add(new u_(15857151,5919047,2.15));const wh=new mh(16773339,3.25);wh.position.set(70,-100,130);Ke.add(wh);const Rh=new mh(13295615,1.5);Rh.position.set(-50,40,80);Ke.add(Rh);let qe=new gh(200,20,5858161,3950163);qe.rotation.x=Math.PI/2;Ke.add(qe);const Uc=new p_,Nc=new Rt,dn=new en(new Yo(.96,1.04,64),new Ks({color:15202005,side:Ye,transparent:!0,opacity:.85,depthTest:!1}));dn.visible=!1;dn.renderOrder=5;Ke.add(dn);const nl=new Ne,Ai=new _e(new Float32Array(9),3);Ai.setUsage(Vo);nl.setAttribute("position",Ai);const Ch=new Ks({color:12253828,side:Ye,transparent:!0,opacity:.6,depthTest:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-3,toneMapped:!1}),Mr=new en(nl,Ch);Mr.visible=!1;Mr.frustumCulled=!1;Mr.renderOrder=4;Ke.add(Mr);const Ni=new a_(nl,new qo({color:14745537,depthTest:!0,depthWrite:!1,toneMapped:!1}));Ni.visible=!1;Ni.frustumCulled=!1;Ni.renderOrder=4;Ke.add(Ni);const Oa={paint:12253828,erase:16740988,protected:16761963,unchanged:10991045};let Ws=-1;const Qs=new fh({vertexColors:!0,roughness:.82,metalness:0,side:Ye}),il=Qs.clone();Y_(il,Us);const Ph=new fh({vertexColors:!0,roughness:.83,metalness:0,side:Ye});new ResizeObserver(()=>{const n=et("viewport");!n.clientWidth||!n.clientHeight||(me.setSize(n.clientWidth,n.clientHeight,!1),Mn.aspect=n.clientWidth/n.clientHeight,Mn.updateProjectionMatrix())}).observe(et("viewport"));me.setAnimationLoop(()=>{Ln.update(),me.render(Ke,Mn)});function ye(n,t=!1){et("notice").textContent=n,et("notice").classList.toggle("warn",t)}function pi(){return fe.find(n=>n.id===Pe)}function rl(n){const t=cr++;return{id:t,name:n||`Surface ${t}`,color:Ic[(t-1)%Ic.length],locked:!1,settings:{...Qo}}}function Bi(){const n=!!qt;for(const t of["save","export","generate","validate"])et(t).disabled=!n||!!be;et("undo").disabled=!Sn.length||!!be,et("redo").disabled=!Ui.length||!!be;for(const t of["all","clear","grow","shrink"])et(t).disabled=!n||!pi()||pi().locked}function Kr(){return{assignment:Kt?.slice(),groups:Hs(fe),active:Pe,nextId:cr}}function Lh(n){n&&(Sn.push(n),Sn.length>24&&Sn.shift(),Ui=[],Bi())}function wn(){qt&&Lh(Kr())}function Dh(n){Ae(),Kt=n.assignment,fe=n.groups,Pe=n.active,cr=n.nextId,Cn(),In()}function Ih(){!Sn.length||be||(Ui.push(Kr()),Dh(Sn.pop()))}function Uh(){!Ui.length||be||(Sn.push(Kr()),Dh(Ui.pop()))}function Cn(){Vs++,ce&&(ce=null,ta(vn),vn=null,$n==="result"&&Sr("groups"),et("meshinfo").textContent="Settings changed — regenerate before exporting."),Nh()}function Nh(){Fa||(Fa=!0,requestAnimationFrame(()=>{Fa=!1,sl()}))}function ta(n){n&&(Ke.remove(n),n.geometry.dispose())}function Fh(n,t,e){const i=new Ne;i.setAttribute("position",new _e(n,3)),i.setIndex(new _e(t,1)),i.setAttribute("normal",new _e(V_(n,t),3));const r=i.toNonIndexed();return i.dispose(),new en(r,e)}function J_(){Ae(),ta(nn),nn=Fh(qt.positions,qt.indices,Qs),Ke.add(nn),sl()}function sl(){if(!nn||!qt||$n==="result")return;const n=nn.geometry,t=qt.indices.length,e=$n==="preview",i=(p,d)=>{let b=n.getAttribute(p);return b||(b=new _e(new Float32Array(t*d),d),b.setUsage(Vo),n.setAttribute(p,b)),b},r=i("color",3),s=r.array,o=e?i("kA",4):null,a=e?i("kB",4):null,l=e?i("kCenter",4):null,c=e?G_(qt.positions,qt.indices,Kt,fe):{},h=new Map(fe.map(p=>[p.id,{...p,c:new Pt(p.color),a:[p.settings.size,p.settings.depth,p.settings.angle,p.settings.thickness],b:[p.settings.pattern,p.settings.mapping,p.settings.invert?1:0,z_(p.settings.pattern,p.settings.textureId,rn)+1]}])),u=new Pt("#a2a5ae"),f=new Pt(En.textured),m=new Pt(En.smooth),_=[1,0,0,0],g=[0,0,0,0];for(let p=0;p<Kt.length;p++){const d=h.get(Kt[p]),b=e?d&&d.settings.pattern?f:m:d?d.c:u;for(let E=0;E<3;E++){const S=p*3+E;s[S*3]=b.r,s[S*3+1]=b.g,s[S*3+2]=b.b,e&&(o.array.set(d?.a||_,S*4),a.array.set(d?.b||g,S*4),l.array.set(d?c[d.id]:g,S*4))}}r.needsUpdate=!0,e&&(o.needsUpdate=!0,a.needsUpdate=!0,l.needsUpdate=!0),nn.material=e?il:Qs}function Oh(){et("texturedColor").value=En.textured,et("smoothColor").value=En.smooth}function Do(n,t){if(!n||!t)return;const e=n.geometry;let i=e.getAttribute("color");i||(i=new _e(new Float32Array(t.length*9),3),i.setUsage(Vo),e.setAttribute("color",i)),Z_(i.array,t,fe,new Pt(En.textured).toArray(),new Pt(En.smooth).toArray()),i.needsUpdate=!0}function Bh(){$n==="preview"&&Do(nn,Kt),ce&&Do(vn,ce.assignment)}function Q_(n){En=Js(n),Oh(),Bh()}function al(){if(!qt)return;Ae();const n=el(qt.positions),t=new N(...n.center),e=Math.max(...n.size,1);Or=e,Ln.target.copy(t),Mn.position.copy(t).add(new N(1,-1.65,1.1).normalize().multiplyScalar(e*2.45)),Mn.near=Math.max(.001,e/1e4),Mn.far=e*1e3,Mn.updateProjectionMatrix(),Ln.maxDistance=e*25,Ln.minDistance=e*.02,Ln.update(),Ke.remove(qe),qe.geometry.dispose(),qe.material.dispose(),qe=new gh(e*3,30,5858161,3950163),qe.rotation.x=Math.PI/2,qe.position.set(t.x,t.y,n.min[2]-.01*e),qe.visible=et("grid").dataset.off!=="1",Ke.add(qe),et("brush").max=Math.max(5,Math.round(e/2)),et("brush").step=Math.max(.1,Math.round(e/200*10)/10),Pi=Math.min(Number(et("brush").max),Math.max(.5,Math.round(e*.045*10)/10)),et("brush").value=Pi,et("brushval").textContent=`${Pi} mm`}function ol(n,t,e,i){yn&&mi(),Hr(!1),ta(vn),vn=null,ce=null,qt={name:n,positions:t,indices:e},rn=i?.textures||[],Io.clear(),bh(),sr="All",kr="",En=Js(i?.appearance),Oh(),mn=W_(t,e),cr=1,fe=i?i.groups:[rl("Surface 1")],Kt=i?Int32Array.from(i.assignment):new Int32Array(e.length/3),cr=i?Math.max(1,...fe.map(o=>o.id+1)):cr,Pe=fe[0]?.id||0,Sn=[],Ui=[],Vs++,$n="groups",ll("paint"),Fi("orbit"),J_(),Sr("groups"),al(),et("empty").hidden=!0,et("filename").textContent=n;const r=el(t);et("modelinfo").textContent=`${r.size.map(o=>o.toFixed(1)).join(" × ")} mm`,i&&[3,5,8,12].includes(i.quality)&&(et("quality").value=i.quality),In(),et("meshinfo").textContent="No generated mesh.";const s=mn.boundary||mn.nonmanifold||mn.orientation||mn.degenerate;ye(s?`Imported ${xn(Kt.length)} faces. Source has topology warnings; check mesh before printing.`:`Imported ${xn(Kt.length)} faces. Choose Paint or Erase, then a selection tool.`,!!s)}async function zh(n){if(n)try{et("status").textContent="Importing…",await new Promise(s=>setTimeout(s,20));const t=new P_().parse(await n.arrayBuffer()),e=t.getAttribute("position").array;if(e.length/9>12e5)throw Error("This build supports source models up to 1.2 million triangles. Simplify the input first.");const{positions:i,indices:r}=yh(e);t.dispose(),ol(n.name,i,r)}catch(t){ye(`Import failed: ${t.message}`,!0)}finally{et("status").textContent="Ready",et("file").value=""}}function Sr(n){if(Ae(),n==="result"&&!ce){ye("Generate a mesh first.");return}$n=n,document.querySelectorAll("[data-view]").forEach(t=>t.classList.toggle("active",t.dataset.view===n)),nn&&(nn.visible=n!=="result"),vn&&(vn.visible=n==="result"),n==="result"&&(Fi("orbit"),dn.visible=!1),sl()}function Fi(n){yn&&mi(),$n==="result"&&n!=="orbit"&&Sr("groups"),Pn=n,Ln.mouseButtons.LEFT=n==="orbit"?Dn.ROTATE:null,me.domElement.style.cursor=n==="orbit"?"grab":"crosshair",Ae(),document.querySelectorAll("[data-tool]").forEach(t=>{t.classList.toggle("active",t.dataset.tool===n),t.setAttribute("aria-pressed",String(t.dataset.tool===n))})}function ll(n){yn&&mi(),Kn=n,document.querySelectorAll("[data-mode]").forEach(t=>{t.classList.toggle("active",t.dataset.mode===n),t.setAttribute("aria-pressed",String(t.dataset.mode===n))}),et("modehint").textContent=n==="erase"?"Erase assignments from any unlocked group. Faces become smooth.":"Assign faces to the active group. Locked groups are protected.",Pn==="orbit"&&Fi("brush"),Ae()}function Gr(){const n=new Map;if(Kt)for(const e of Kt)n.set(e,(n.get(e)||0)+1);const t=et("groups");t.replaceChildren();for(const e of fe){const i=document.createElement("div");i.className="group"+(e.id===Pe?" active":"");const r=document.createElement("div");r.className="swatch",r.style.background=e.color;const s=document.createElement("div"),o=document.createElement("b"),a=document.createElement("small");o.textContent=e.name,a.textContent=`${xn(n.get(e.id)||0)} faces · ${Ah(e.settings)}`,s.append(o,a);const l=document.createElement("button");l.textContent=e.locked?"Unlock":"Lock",l.title="Protect group from painting",l.onclick=c=>{c.stopPropagation(),wn(),e.locked=!e.locked,In()},i.append(r,s,l),i.onclick=()=>{Pe=e.id,In()},t.append(i)}if(qt){const e=document.createElement("p");e.className="hint",e.textContent=`${xn(n.get(0)||0)} unassigned / smooth`,t.append(e)}et("stats").textContent=qt?`${xn(qt.indices.length/3)} source faces${ce?" · "+xn(ce.indices.length/3)+" generated":""}`:"0 faces"}const Io=new Map;function t0(n,t,e){const i=n.getContext("2d"),r=108,s=52,o=e||String(t);n.width=r,n.height=s;let a=Io.get(o);if(!a){a=i.createImageData(r,s);const l=Lo.get(e);for(let c=0;c<s;c++)for(let h=0;h<r;h++){const u=h/(t>=6?44:16),f=-c/(t>=6?44:16),m=t?Dc(u,f,t,65,l):.3,_=t?Dc(u+.012,f+.016,t,65,l)-m:0,g=Math.max(0,Math.min(1,.26+.62*m+_*1.2)),p=(c*r+h)*4;a.data[p]=Math.round(111+g*119),a.data[p+1]=Math.round(79+g*116),a.data[p+2]=Math.round(53+g*101),a.data[p+3]=255}Io.set(o,a)}i.putImageData(a,0,0)}function kh(n,t,e){wn();const i=n.settings,r=i.pattern===Te,s=zs(i.pattern)==="Wood";i.pattern=t,t===Te?(i.textureId=e,r||(i.size=10,i.invert=!1)):(delete i.textureId,delete i.invert,zs(t)==="Wood"&&!s&&!r&&(i.size=20),i.size=Math.min(ks(t),i.size)),Cn(),In()}async function e0(n,t){if(!n)return;const e=qt;let i;try{if(!qt||!fe.some(l=>l.id===t))throw Error("Select a surface group first.");if(rn.length>=Br)throw Error(`This project supports ${Br} custom textures.`);if(n.size>20*1024*1024)throw Error("Image must be 20 MB or smaller.");if(!/\.(png|jpe?g|webp)$/i.test(n.name))throw Error("Choose a PNG, JPG or WebP image.");if(i=await createImageBitmap(n),i.width<16||i.height<16||i.width>4096||i.height>4096)throw Error("Image dimensions must be 16–4096 pixels per side.");const r=document.createElement("canvas");r.width=r.height=oi;const s=r.getContext("2d",{willReadFrequently:!0});s.imageSmoothingQuality="high",s.drawImage(i,0,0,oi,oi);const o=B_(s.getImageData(0,0,oi,oi).data);if(e!==qt||!fe.some(l=>l.id===t))throw Error("Model or group changed during import.");if(rn.length>=Br)throw Error("Custom texture library is full.");const a={id:globalThis.crypto?.randomUUID?.()||`tex-${Date.now()}-${Math.random().toString(36).slice(2)}`,name:n.name.replace(/\.[^.]+$/,"").slice(0,100)||"Custom texture",data:O_(o)};rn.push(a),bh(),sr="Custom",kr="",kh(fe.find(l=>l.id===t),Te,a.id),ye(`Imported ${a.name}. ${i.width!==i.height?"Non-square image stretched to a square. ":""}White raises, black stays at base height. Generate to bake the relief.`)}catch(r){ye(`Texture import failed: ${r.message}`,!0)}finally{i?.close(),et("textureFile").value=""}}function n0(n,t){const e=t.settings,i=document.createElement("div");i.className="library-bar";const r=document.createElement("select");r.setAttribute("aria-label","Filter texture library");for(const _ of["All","Knit","Textile","Wood","Natural","Geometric","Industrial","Custom"]){const g=document.createElement("option");g.value=_,g.textContent=_==="All"?"All textures":_,r.append(g)}r.value=sr,r.onchange=()=>{sr=r.value,Hh()};const s=document.createElement("button");s.textContent="+ Import",s.title="Import a custom grayscale height map",s.disabled=rn.length>=Br,s.onclick=()=>{Th=t.id,et("textureFile").click()},i.append(r,s),n.append(i);const o=document.createElement("input");o.type="search",o.placeholder="Search textures…",o.setAttribute("aria-label","Search textures"),o.className="library-search",o.value=kr,n.append(o);const a=document.createElement("div");a.className="current-pattern",a.textContent="Selected: "+Ah(e),n.append(a);const l=document.createElement("div");l.className="pattern-grid library-grid";const c=jr.map((_,g)=>({name:_,type:g,category:zs(g)})).filter(_=>_.type!==Te).concat(rn.map(_=>({name:_.name,type:Te,id:_.id,category:"Custom"}))),h=()=>{l.replaceChildren();const _=kr.trim().toLowerCase();for(const g of c){if(_&&!g.name.toLowerCase().includes(_)||sr!=="All"&&g.category!==sr&&g.type!==0)continue;const p=document.createElement("button");p.className=e.pattern===g.type&&(g.type!==Te||e.textureId===g.id)?"active":"",p.title=g.name;const d=document.createElement("canvas");t0(d,g.type,g.id),p.append(d,document.createTextNode(g.name)),p.onclick=()=>kh(t,g.type,g.id),l.append(p)}if(!l.childElementCount){const g=document.createElement("p");g.className="hint",g.textContent="No matching textures.",l.append(g)}};o.oninput=()=>{kr=o.value,h()},h(),n.append(l);const u=document.createElement("details");u.className="texture-guide";const f=document.createElement("summary");f.textContent="Custom texture specifications";const m=document.createElement("p");m.textContent="PNG, JPG or WebP · seamless square grayscale recommended (512 × 512 or 1024 × 1024) · 16–4096 px per side, ≤20 MB. Converted to a 256 × 256 8-bit height tile. Black = base, white = maximum relief. Non-square images are stretched; transparency becomes black. Tile size is in mm. Custom maps are embedded in saved projects.",u.append(f,m),n.append(u)}function Hh(){const n=et("properties"),t=pi();if(n.replaceChildren(),!t){n.textContent="Select or create a surface group.";return}const e=t.settings,i=document.createElement("div");i.className="fieldrow";const r=document.createElement("label");r.className="field",r.textContent="Group name";const s=document.createElement("input");s.value=t.name,s.maxLength=60,s.onchange=()=>{wn(),t.name=s.value.trim()||`Surface ${t.id}`,Gr()},r.append(s);const o=document.createElement("label");o.className="field",o.textContent="Group color";const a=document.createElement("input");a.type="color",a.value=t.color,a.onchange=()=>{wn(),t.color=a.value,Gr(),Nh()},o.append(a),i.append(r,o),n.append(i),n0(n,t);const l=[["size",ks(e.pattern)===100?"Tile size":"Pattern size",.5,ks(e.pattern),.1," mm"],["depth","Relief depth",0,3,.05," mm"],["angle","Pattern direction",0,360,5,"°"],...e.pattern===Te?[]:[["thickness",e.pattern>=6?"Relief profile":"Yarn thickness",10,95,1,"%"]],["blend","Edge blending",0,5,.1," mm"]];for(const[m,_,g,p,d,b]of l){const E=document.createElement("label");E.className="range-label",E.textContent=_;const S=document.createElement("output");S.textContent=e[m]+b,E.append(S);const U=document.createElement("input");U.type="range",U.min=g,U.max=p,U.step=d,U.value=e[m];let A=null;U.oninput=()=>{A===null&&(A=Kr()),e[m]=Number(U.value),S.textContent=e[m]+b,Cn()},U.onchange=()=>{A&&(Sn.push(A),Sn.length>24&&Sn.shift(),Ui=[],A=null,Bi())},n.append(E,U)}if(e.pattern===Te){const m=document.createElement("label");m.className="texture-check";const _=document.createElement("input");_.type="checkbox",_.checked=!!e.invert,_.onchange=()=>{wn(),e.invert=_.checked,Cn()},m.append(_,document.createTextNode("Invert height map")),n.append(m)}const c=document.createElement("label");c.className="field",c.textContent="Surface mapping";const h=document.createElement("select");Sh.forEach((m,_)=>{const g=document.createElement("option");g.value=_,g.textContent=m,h.append(g)}),h.value=e.mapping,h.onchange=()=>{wn(),e.mapping=Number(h.value),Cn()},c.append(h),n.append(c);const u=document.createElement("p");u.className="hint",u.textContent="Texture mode is a fast shader preview. Generated mode displays actual printable geometry, including edge blending.",n.append(u);const f=document.createElement("div");f.className="property-actions";for(const[m,_]of[["Duplicate settings",()=>{wn();const g=rl(t.name+" copy");g.settings=Hs(t.settings),fe.push(g),Pe=g.id,In()}],["Reset",()=>{wn(),t.settings={...Qo},Cn(),In()}],["Delete",()=>{if(t.locked){ye("Unlock the group before deleting it.",!0);return}wn();for(let g=0;g<Kt.length;g++)Kt[g]===t.id&&(Kt[g]=0);fe=fe.filter(g=>g.id!==t.id),Pe=fe[0]?.id||0,Cn(),In()}]]){const g=document.createElement("button");g.textContent=m,g.onclick=_,m==="Delete"&&(g.className="danger"),f.append(g)}n.append(f)}function In(){Ae(),Gr(),Hh(),Bi()}function i0(){if(!qt){ye("Import a model first.");return}wn();const n=rl();fe.push(n),Pe=n.id,In(),Fi("brush")}function Vh(){return new Set(fe.filter(n=>n.locked).map(n=>n.id))}function Gh(n=Kn==="erase"){return{mode:n?"erase":"paint",active:Pe,locked:Vh()}}function Ci(n,t=!1){const e=j_(Kt,n,Gh(t));return e&&(Cn(),Gs=!0),e}function Wh(n){const t=n.faceIndex,e=new Set([t]),i=[t],r=[t],s=mn.centroids,o=mn.faceNormals,a=n.point,l=n.face.normal;for(let c=0;c<i.length;c++)for(const h of mn.adj[i[c]]){if(e.has(h))continue;e.add(h);const u=h*3;Math.hypot(s[u]-a.x,s[u+1]-a.y,s[u+2]-a.z)<=Pi&&l.x*o[u]+l.y*o[u+1]+l.z*o[u+2]>-.15&&(r.push(h),i.push(h))}return r}function r0(n,t){return K_(n,mn,Kt,Vh(),t?Po:null)}function cl(n){if(!nn||$n==="result")return null;const t=me.domElement.getBoundingClientRect();return!t.width||!t.height||n.clientX<t.left||n.clientX>t.right||n.clientY<t.top||n.clientY>t.bottom?null:(Nc.set((n.clientX-t.left)/t.width*2-1,-(n.clientY-t.top)/t.height*2+1),Uc.setFromCamera(Nc,Mn),Uc.intersectObject(nn,!1)[0]||null)}function Ae(){Mr.visible=!1,Ni.visible=!1,dn.visible=!1,Ws=-1,et("hoverinfo").hidden=!0}function hl(n){if(!n||be||Pn==="orbit"||$n==="result"){Ae();return}const t=n.faceIndex,e=Eh(Kt[t],Gh()),i=Oa[e];if(t!==Ws){const s=nn.geometry.getAttribute("position").array;Ai.array.set(s.subarray(t*9,t*9+9));const o=Mn.position.clone().sub(n.point).normalize();for(let a=0;a<3;a++)Ai.array[a*3]+=o.x*Or*25e-6,Ai.array[a*3+1]+=o.y*Or*25e-6,Ai.array[a*3+2]+=o.z*Or*25e-6;Ai.needsUpdate=!0,Ws=t}Ch.color.setHex(i),Ni.material.color.setHex(i),Mr.visible=!0,Ni.visible=!0;const r=et("hoverinfo");r.hidden=!1,r.dataset.action=e,r.textContent=`Face ${xn(t+1)} · ${e==="protected"?"Protected / unavailable":e==="unchanged"?"Already "+(Kn==="erase"?"unassigned":"in active group"):Kn==="erase"?"Erase assignment":"Assign to "+(pi()?.name||"group")}`,dn.visible=Pn==="brush",dn.visible&&(dn.material.color.setHex(Kn==="erase"?Oa.erase:Oa.paint),dn.position.copy(n.point).addScaledVector(n.face.normal,Or*4e-4),dn.quaternion.setFromUnitVectors(new N(0,0,1),n.face.normal.clone().normalize()),dn.scale.setScalar(Pi))}function Xh(){Co=Kr(),Gs=!1}function mi(){yn=!1;const n=gr;gr=null,n!==null&&me.domElement.hasPointerCapture(n)&&me.domElement.releasePointerCapture(n),Gs&&Lh(Co),Co=null,Gs=!1,Gr(),Bi()}me.domElement.addEventListener("pointerdown",n=>{if(n.button!==0){Ae();return}if(Pn==="orbit"||be||!qt||yn||Kn==="paint"&&(!pi()||pi().locked))return;const t=cl(n);if(!t)return;n.preventDefault(),Xh(),yn=Pn==="brush";const e=Kn==="erase";if(yn)gr=n.pointerId,me.domElement.setPointerCapture(n.pointerId),Ci(Wh(t),e);else{const i=Pn==="face"?[t.faceIndex]:r0(t.faceIndex,Pn==="fill");Ci(i,e),mi()}hl(t)});me.domElement.addEventListener("pointermove",n=>{if(Pn==="orbit"||be||n.buttons&6){Ae();return}const t=cl(n);yn&&t&&n.pointerId===gr&&n.buttons&1&&Ci(Wh(t),Kn==="erase"),hl(t)});me.domElement.addEventListener("pointerup",n=>{yn&&n.pointerId===gr&&mi(),Pn!=="orbit"&&!be&&n.pointerType!=="touch"?hl(cl(n)):Ae()});for(const n of["pointercancel","lostpointercapture"])me.domElement.addEventListener(n,t=>{yn&&t.pointerId===gr&&mi(),Ae()});me.domElement.addEventListener("pointerleave",Ae);me.domElement.addEventListener("wheel",Ae,{passive:!0});Ln.addEventListener("change",()=>{Ws!==-1&&Ae()});window.addEventListener("blur",()=>{yn&&mi(),Ae()});function s0(n){if(!qt||!pi()||pi().locked)return;Xh();const t=[];if(n==="all"){for(let e=0;e<Kt.length;e++)Kt[e]===0&&t.push(e);Ci(t)}if(n==="clear"){for(let e=0;e<Kt.length;e++)Kt[e]===Pe&&t.push(e);Ci(t,!0)}if(n==="grow"){for(let e=0;e<Kt.length;e++)if(Kt[e]===Pe)for(const i of mn.adj[e])Kt[i]!==Pe&&t.push(i);Ci(t)}if(n==="shrink"){for(let e=0;e<Kt.length;e++)Kt[e]===Pe&&mn.adj[e].some(i=>Kt[i]!==Pe)&&t.push(e);Ci(t,!0)}mi()}function qh(n=!1){if(!qt||be)return;Ae();const t=Vs;et("busy").hidden=!1,et("busyText").textContent="Preparing geometry…",et("status").textContent="Generating",be=new Worker(new URL(""+new URL("mesh-worker-DmNIjsM0.js",import.meta.url).href,import.meta.url),{type:"module"}),Bi(),be.onmessage=({data:e})=>{if(e.type==="progress"){et("busyText").textContent=`${e.stage} · ${xn(e.faces)} faces`;return}if(e.type==="error"){Hr(!1),ye(`Generation failed: ${e.message}`,!0);return}if(e.type==="done"){if(Hr(!1),t!==Vs){ye("Settings changed during generation. Generate again.",!0);return}ce=e,ta(vn),vn=Fh(ce.positions,ce.indices,Ph),Do(vn,ce.assignment),Ke.add(vn),Sr("result"),et("meshinfo").textContent=`${xn(ce.indices.length/3)} triangles · ${((84+ce.indices.length/3*50)/1048576).toFixed(1)} MiB STL${ce.limited?" · detail cap reached":""}`,Gr(),ye(ce.limited?"Triangle budget reached. The result may undersample small stitches; increase stitch size or lower detail.":"Generated actual mesh. Inspect the surface and run the topology check before slicing.",ce.limited),n&&jh()}},be.onerror=e=>{Hr(!1),ye(`Worker error: ${e.message||"Unable to start geometry worker"}`,!0)},be.postMessage({positions:qt.positions,indices:qt.indices,assignment:Kt,groups:fe,textures:rn,quality:Number(et("quality").value),maxFaces:12e5})}function Hr(n=!0){be&&(be.terminate(),be=null,n&&ye("Generation canceled.")),et("busy").hidden=!0,et("status").textContent="Ready",Bi()}function Yh(n,t,e){const i=URL.createObjectURL(new Blob([n],{type:e})),r=document.createElement("a");r.href=i,r.download=t,document.body.append(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(i),3e3)}function jh(){if(!ce){qh(!0);return}const n=X_(ce.positions,ce.indices);Yh(n,qt.name.replace(/\.stl$/i,"")+"-knitted.stl","application/octet-stream"),ye(`STL exported (${xn(ce.indices.length/3)} triangles). Check the exported file in your slicer.`)}function a0(){return{format:"knitforge",version:1,name:qt.name,positions:Array.from(qt.positions),indices:Array.from(qt.indices),assignment:Array.from(Kt),groups:Hs(fe),textures:Hs(rn),appearance:{...En},quality:Number(et("quality").value)}}function Kh(){qt&&(Yh(JSON.stringify(a0()),qt.name.replace(/\.stl$/i,"")+".knitforge","application/json"),ye("Editable project saved, including original model, group settings and custom textures."))}function o0(n){if(n.format!=="knitforge"||n.version!==1||!Array.isArray(n.positions)||!Array.isArray(n.indices)||!Array.isArray(n.groups)||!Array.isArray(n.assignment)||n.positions.length%3||n.indices.length%3||n.indices.length<3||n.assignment.length!==n.indices.length/3||n.indices.length/3>12e5||!n.positions.every(Number.isFinite)||!n.indices.every(i=>Number.isInteger(i)&&i>=0&&i<n.positions.length/3))throw Error("Invalid or unsupported KnitForge project.");const t=Jo(n.textures??[]),e=new Set([0]);for(const i of n.groups){if(!Number.isInteger(i.id)||i.id<1||i.id>2147483646||e.has(i.id)||typeof i.name!="string"||!/^#[0-9a-f]{6}$/i.test(i.color)||!i.settings)throw Error("Invalid surface group.");e.add(i.id);for(const r of Object.keys(Qo))if(!Number.isFinite(i.settings[r]))throw Error("Invalid texture settings.");if(!Number.isInteger(i.settings.pattern)||!Number.isInteger(i.settings.mapping)||i.settings.pattern<0||i.settings.pattern>=jr.length||i.settings.mapping<0||i.settings.mapping>=Sh.length||i.settings.size<.5||i.settings.size>ks(i.settings.pattern)||i.settings.depth<0||i.settings.depth>3||i.settings.angle<0||i.settings.angle>360||i.settings.thickness<10||i.settings.thickness>95||i.settings.blend<0||i.settings.blend>5)throw Error("Texture settings are outside supported limits.");if(i.settings.pattern===Te&&(!t.has(i.settings.textureId)||i.settings.invert!==void 0&&typeof i.settings.invert!="boolean"))throw Error("Invalid or missing custom texture reference.")}if(!n.assignment.every(i=>e.has(i)))throw Error("Invalid face assignments.")}async function $h(n){if(n)try{const t=JSON.parse(await n.text());o0(t),ol(String(t.name||"project.stl"),Float32Array.from(t.positions),Uint32Array.from(t.indices),t),ye("Project restored. Generate a new mesh when ready.")}catch(t){ye(`Could not open project: ${t.message}`,!0)}finally{et("project").value=""}}function l0(){if(!qt)return;const n=ce||qt,t=q_(n.positions,n.indices),e=t.boundary||t.nonmanifold||t.orientation||t.degenerate;et("meshinfo").textContent=`${ce?"Generated":"Source"}: ${xn(n.indices.length/3)} triangles · ${t.boundary} open edges · ${t.nonmanifold} nonmanifold edges · ${t.orientation} winding errors · ${t.degenerate} degenerate faces. Self-intersections not checked.`,ye(e?"Topology warnings detected. Repair or inspect the file before printing.":"No open edges, nonmanifold edges, winding errors or degenerate faces found. Self-intersections are not checked.",!!e)}et("import").onclick=et("emptyImport").onclick=()=>et("file").click();et("open").onclick=()=>et("project").click();et("file").onchange=n=>zh(n.target.files[0]);et("project").onchange=n=>$h(n.target.files[0]);et("textureFile").onchange=n=>e0(n.target.files[0],Th);et("save").onclick=Kh;et("export").onclick=jh;et("undo").onclick=Ih;et("redo").onclick=Uh;et("add").onclick=et("add2").onclick=i0;et("generate").onclick=()=>qh();et("cancel").onclick=()=>Hr();et("validate").onclick=l0;et("fit").onclick=al;et("wire").onclick=()=>{As=!As;for(const n of[Qs,il,Ph])n.wireframe=As;et("wire").classList.toggle("active",As)};et("grid").onclick=()=>{qe.visible=!qe.visible,et("grid").dataset.off=qe.visible?"0":"1"};et("quality").onchange=()=>Cn();for(const[n,t]of[["texturedColor","textured"],["smoothColor","smooth"]])et(n).oninput=e=>{En=Js({...En,[t]:e.target.value}),Bh()};et("resetAppearance").onclick=()=>Q_();et("brush").oninput=n=>{Pi=Number(n.target.value),et("brushval").textContent=Pi+" mm"};et("angle").oninput=n=>{Po=Number(n.target.value),et("angleval").textContent=Po+"°"};for(const n of document.querySelectorAll("[data-mode]"))n.onclick=()=>ll(n.dataset.mode);for(const n of document.querySelectorAll("[data-tool]"))n.onclick=()=>Fi(n.dataset.tool);for(const n of document.querySelectorAll("[data-view]"))n.onclick=()=>Sr(n.dataset.view);for(const n of["all","clear","grow","shrink"])et(n).onclick=()=>s0(n);et("demo").onclick=()=>{const n=new jo(18,48,32);n.rotateX(Math.PI/2),n.translate(0,0,18);const t=n.toNonIndexed(),e=yh(t.attributes.position.array);t.dispose(),n.dispose(),ol("sample-sphere.stl",e.positions,e.indices),Kt.fill(Pe),Cn(),In(),Sr("preview"),ye("Sample sphere loaded. Texture preview is visual only; Generate produces real geometry.")};for(const n of["dragover","dragenter"])et("viewport").addEventListener(n,t=>{t.preventDefault(),et("viewport").classList.add("drop")});et("viewport").addEventListener("dragleave",()=>et("viewport").classList.remove("drop"));et("viewport").addEventListener("drop",n=>{n.preventDefault(),et("viewport").classList.remove("drop");const t=n.dataTransfer.files[0];t&&(/\.(knitforge|json)$/i.test(t.name)?$h(t):zh(t))});window.addEventListener("keydown",n=>{n.target.matches("input,select,textarea")||((n.ctrlKey||n.metaKey)&&n.key.toLowerCase()==="z"?(n.preventDefault(),n.shiftKey?Uh():Ih()):(n.ctrlKey||n.metaKey)&&n.key.toLowerCase()==="s"&&qt?(n.preventDefault(),Kh()):n.key==="Escape"?Fi("orbit"):n.key.toLowerCase()==="b"?Fi("brush"):n.key.toLowerCase()==="e"?ll(Kn==="paint"?"erase":"paint"):n.key.toLowerCase()==="f"&&al())});Bi();
