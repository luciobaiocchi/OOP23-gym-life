(()=>{var dd=0,lh=1,fd=2;var ss=1,pd=2,Zs=3,ki=0,$t=1,ni=2,Wt=0,Js=1,ch=2,hh=3,uh=4,$o=5;var In=100,md=101,gd=102,xd=103,_d=104,rs=200,vd=201,yd=202,Md=203,dh=204,fh=205,ca=206,Sd=207,ha=208,bd=209,Ed=210,wd=211,Td=212,Ad=213,Rd=214,uo=0,fo=1,po=2,Ns=3,mo=4,go=5,xo=6,_o=7,Zo=0,Cd=1,Pd=2,zn=0,ua=1,da=2,fa=3,as=4,pa=5,ma=6,ga=7,Zc="attached",Id="detached",ph=300,zi=301,os=302,Jo=303,Ko=304,xa=306,Pn=1e3,Yn=1001,vo=1002,Vt=1003,Ld=1004;var _a=1005;var tn=1006,jo=1007;var Vi=1008;var an=1009,mh=1010,gh=1011,Ks=1012,Qo=1013,Vn=1014,wn=1015,Qt=1016,el=1017,tl=1018,Gi=1020,xh=35902,_h=35899,vh=1021,yh=1022,un=1023,$n=1026,ii=1027,nl=1028,il=1029,Hi=1030,sl=1031;var rl=1033,va=33776,ya=33777,Ma=33778,Sa=33779,al=35840,ol=35841,ll=35842,cl=35843,hl=36196,ul=37492,dl=37496,fl=37488,pl=37489,ba=37490,ml=37491,gl=37808,xl=37809,_l=37810,vl=37811,yl=37812,Ml=37813,Sl=37814,bl=37815,El=37816,wl=37817,Tl=37818,Al=37819,Rl=37820,Cl=37821,Pl=36492,Il=36494,Ll=36495,Dl=36283,Nl=36284,Ea=36285,Ul=36286;var Pr=2300,yo=2301,co=2302,Jc=2303,Kc=2400,jc=2401,Qc=2402;var Dd=3200;var js=0,Nd=1,yi="",kt="srgb",Ir="srgb-linear",Lr="linear",_t="srgb";var ho=7680;var Ud=519,Fd=512,Od=513,Bd=514,Fl=515,kd=516,zd=517,Ol=518,Vd=519,Gd=35044;var Mh="300 es",On=2e3,Us=2001;function Np(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Up(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Dr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hd(){let i=Dr("canvas");return i.style.display="block",i}var Lu={},Fs=null;function Sh(...i){let e="THREE."+i.shift();Fs?Fs("log",e,...i):console.log(e,...i)}function Wd(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function He(...i){i=Wd(i);let e="THREE."+i.shift();if(Fs)Fs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function $e(...i){i=Wd(i);let e="THREE."+i.shift();if(Fs)Fs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function es(...i){let e=i.join(" ");e in Lu||(Lu[e]=!0,He(...i))}function Xd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var qd={[uo]:fo,[po]:xo,[mo]:_o,[Ns]:go,[fo]:uo,[xo]:po,[_o]:mo,[go]:Ns},Zn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Mc=Math.PI/180,Mo=180/Math.PI;function ls(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function ut(i,e,t){return Math.max(e,Math.min(t,i))}function Fp(i,e){return(i%e+e)%e}function Sc(i,e,t){return(1-t)*i+t*e}function vr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function pn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Rh=class Rh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Rh.prototype.isVector2=!0;var ue=Rh,Jn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(d!==v||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*v;m<0&&(u=-u,f=-f,g=-g,v=-v,m=-m);let p=1-o;if(m<.9995){let S=Math.acos(m),T=Math.sin(S);p=Math.sin(p*S)/T,o=Math.sin(o*S)/T,l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+v*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+v*o;let S=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=S,c*=S,h*=S,d*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-o*f,e[t+2]=c*g+h*f+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Ch=class Ch{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Du.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Du.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return bc.copy(this).projectOnVector(e),this.sub(bc)}reflect(e){return this.sub(bc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ch.prototype.isVector3=!0;var F=Ch,bc=new F,Du=new Jn,Ph=class Ph{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],S=s[1],T=s[4],y=s[7],b=s[2],w=s[5],L=s[8];return r[0]=a*v+o*S+l*b,r[3]=a*m+o*T+l*w,r[6]=a*p+o*y+l*L,r[1]=c*v+h*S+d*b,r[4]=c*m+h*T+d*w,r[7]=c*p+h*y+d*L,r[2]=u*v+f*S+g*b,r[5]=u*m+f*T+g*w,r[8]=u*p+f*y+g*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=t*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=d*v,e[1]=(s*c-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=u*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return es("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ec.makeScale(e,t)),this}rotate(e){return es("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ec.makeRotation(-e)),this}translate(e,t){return es("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ec.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ph.prototype.isMatrix3=!0;var tt=Ph,Ec=new tt,Nu=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uu=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Op(){let i={enabled:!0,workingColorSpace:Ir,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===_t&&(s.r=gi(s.r),s.g=gi(s.g),s.b=gi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===_t&&(s.r=Ds(s.r),s.g=Ds(s.g),s.b=Ds(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===yi?Lr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return es("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return es("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ir]:{primaries:e,whitePoint:n,transfer:Lr,toXYZ:Nu,fromXYZ:Uu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:kt},outputColorSpaceConfig:{drawingBufferColorSpace:kt}},[kt]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:Nu,fromXYZ:Uu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:kt}}}),i}var ct=Op();function gi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ds(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var vs,So=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{vs===void 0&&(vs=Dr("canvas")),vs.width=e.width,vs.height=e.height;let s=vs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=vs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Dr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=gi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(gi(t[n]/255)*255):t[n]=gi(t[n]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Bp=0,Os=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=ls(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(wc(s[a].image)):r.push(wc(s[a]))}else r=wc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function wc(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?So.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}var kp=0,Tc=new F,cn=class i extends Zn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Yn,s=Yn,r=tn,a=Vi,o=un,l=an,c=i.DEFAULT_ANISOTROPY,h=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=ls(),this.name="",this.source=new Os(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Tc).x}get height(){return this.source.getSize(Tc).y}get depth(){return this.source.getSize(Tc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ph)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pn:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case vo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pn:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case vo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=ph;cn.DEFAULT_ANISOTROPY=1;var Ih=class Ih{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,y=(f+1)/2,b=(p+1)/2,w=(h+u)/4,L=(d+v)/4,x=(g+m)/4;return T>y&&T>b?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=w/n,r=L/n):y>b?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=w/s,r=x/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=L/r,s=x/r),this.set(n,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-v)/S,this.z=(u-h)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ih.prototype.isVector4=!0;var St=Ih,bo=class extends Zn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new cn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Os(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gt=class extends bo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Nr=class extends cn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Eo=class extends cn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Yo=class Yo{constructor(e,t,n,s,r,a,o,l,c,h,d,u,f,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,d,u,f,g,v,m)}set(e,t,n,s,r,a,o,l,c,h,d,u,f,g,v,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yo().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/ys.setFromMatrixColumn(e,0).length(),r=1/ys.setFromMatrixColumn(e,1).length(),a=1/ys.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,f=a*d,g=o*h,v=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-v*c,t[9]=-o*l,t[2]=v-u*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,g=c*h,v=c*d;t[0]=u+v*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=v+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,g=c*h,v=c*d;t[0]=u-v*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=v-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,f=a*d,g=o*h,v=o*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+v,t[1]=l*d,t[5]=v*c+u,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-v*d}else if(e.order==="XZY"){let u=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+v,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=v*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zp,e,Vp)}lookAt(e,t,n){let s=this.elements;return Mn.subVectors(e,t),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Ai.crossVectors(n,Mn),Ai.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Ai.crossVectors(n,Mn)),Ai.normalize(),za.crossVectors(Mn,Ai),s[0]=Ai.x,s[4]=za.x,s[8]=Mn.x,s[1]=Ai.y,s[5]=za.y,s[9]=Mn.y,s[2]=Ai.z,s[6]=za.z,s[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],S=n[3],T=n[7],y=n[11],b=n[15],w=s[0],L=s[4],x=s[8],A=s[12],N=s[1],I=s[5],M=s[9],C=s[13],P=s[2],R=s[6],U=s[10],V=s[14],$=s[3],z=s[7],H=s[11],J=s[15];return r[0]=a*w+o*N+l*P+c*$,r[4]=a*L+o*I+l*R+c*z,r[8]=a*x+o*M+l*U+c*H,r[12]=a*A+o*C+l*V+c*J,r[1]=h*w+d*N+u*P+f*$,r[5]=h*L+d*I+u*R+f*z,r[9]=h*x+d*M+u*U+f*H,r[13]=h*A+d*C+u*V+f*J,r[2]=g*w+v*N+m*P+p*$,r[6]=g*L+v*I+m*R+p*z,r[10]=g*x+v*M+m*U+p*H,r[14]=g*A+v*C+m*V+p*J,r[3]=S*w+T*N+y*P+b*$,r[7]=S*L+T*I+y*R+b*z,r[11]=S*x+T*M+y*U+b*H,r[15]=S*A+T*C+y*V+b*J,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15],S=l*f-c*u,T=o*f-c*d,y=o*u-l*d,b=a*f-c*h,w=a*u-l*h,L=a*d-o*h;return t*(v*S-m*T+p*y)-n*(g*S-m*b+p*w)+s*(g*T-v*b+p*L)-r*(g*y-v*w+m*L)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],S=t*o-n*a,T=t*l-s*a,y=t*c-r*a,b=n*l-s*o,w=n*c-r*o,L=s*c-r*l,x=h*v-d*g,A=h*m-u*g,N=h*p-f*g,I=d*m-u*v,M=d*p-f*v,C=u*p-f*m,P=S*C-T*M+y*I+b*N-w*A+L*x;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/P;return e[0]=(o*C-l*M+c*I)*R,e[1]=(s*M-n*C-r*I)*R,e[2]=(v*L-m*w+p*b)*R,e[3]=(u*w-d*L-f*b)*R,e[4]=(l*N-a*C-c*A)*R,e[5]=(t*C-s*N+r*A)*R,e[6]=(m*y-g*L-p*T)*R,e[7]=(h*L-u*y+f*T)*R,e[8]=(a*M-o*N+c*x)*R,e[9]=(n*N-t*M-r*x)*R,e[10]=(g*w-v*y+p*S)*R,e[11]=(d*y-h*w-f*S)*R,e[12]=(o*A-a*I-l*x)*R,e[13]=(t*I-n*A+s*x)*R,e[14]=(v*T-g*b-m*S)*R,e[15]=(h*b-d*T+u*S)*R,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,v=a*h,m=a*d,p=o*d,S=l*c,T=l*h,y=l*d,b=n.x,w=n.y,L=n.z;return s[0]=(1-(v+p))*b,s[1]=(f+y)*b,s[2]=(g-T)*b,s[3]=0,s[4]=(f-y)*w,s[5]=(1-(u+p))*w,s[6]=(m+S)*w,s[7]=0,s[8]=(g+T)*L,s[9]=(m-S)*L,s[10]=(1-(u+v))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=ys.set(s[0],s[1],s[2]).length(),o=ys.set(s[4],s[5],s[6]).length(),l=ys.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Dn.copy(this);let c=1/a,h=1/o,d=1/l;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=h,Dn.elements[5]*=h,Dn.elements[6]*=h,Dn.elements[8]*=d,Dn.elements[9]*=d,Dn.elements[10]*=d,t.setFromRotationMatrix(Dn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=On,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===On)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Us)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=On,l=!1){let c=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s),g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===On)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===Us)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Yo.prototype.isMatrix4=!0;var it=Yo,ys=new F,Dn=new it,zp=new F(0,0,0),Vp=new F(1,1,1),Ai=new F,za=new F,Mn=new F,Fu=new it,Ou=new Jn,Kn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ut(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Fu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ou.setFromEuler(this),this.setFromQuaternion(Ou,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Kn.DEFAULT_ORDER="XYZ";var Ur=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Gp=0,Bu=new F,Ms=new Jn,ui=new it,Va=new F,yr=new F,Hp=new F,Wp=new Jn,ku=new F(1,0,0),zu=new F(0,1,0),Vu=new F(0,0,1),Gu={type:"added"},Xp={type:"removed"},Ss={type:"childadded",child:null},Ac={type:"childremoved",child:null},Yt=class i extends Zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new F,t=new Kn,n=new Jn,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new it},normalMatrix:{value:new tt}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ur,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ms.setFromAxisAngle(e,t),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(e,t){return Ms.setFromAxisAngle(e,t),this.quaternion.premultiply(Ms),this}rotateX(e){return this.rotateOnAxis(ku,e)}rotateY(e){return this.rotateOnAxis(zu,e)}rotateZ(e){return this.rotateOnAxis(Vu,e)}translateOnAxis(e,t){return Bu.copy(e).applyQuaternion(this.quaternion),this.position.add(Bu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ku,e)}translateY(e){return this.translateOnAxis(zu,e)}translateZ(e){return this.translateOnAxis(Vu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Va.copy(e):Va.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(yr,Va,this.up):ui.lookAt(Va,yr,this.up),this.quaternion.setFromRotationMatrix(ui),s&&(ui.extractRotation(s.matrixWorld),Ms.setFromRotationMatrix(ui),this.quaternion.premultiply(Ms.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gu),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xp),Ac.child=e,this.dispatchEvent(Ac),Ac.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gu),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,e,Hp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,Wp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Yt.DEFAULT_UP=new F(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ct=class extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},qp={type:"move"},Bs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ct;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Yd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},Ga={h:0,s:0,l:0};function Rc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ke=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ct.workingColorSpace){if(e=Fp(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Rc(a,r,e+1/3),this.g=Rc(a,r,e),this.b=Rc(a,r,e-1/3)}return ct.colorSpaceToWorking(this,s),this}setStyle(e,t=kt){function n(r){r!==void 0&&parseFloat(r)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){let n=Yd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}copyLinearToSRGB(e){return this.r=Ds(e.r),this.g=Ds(e.g),this.b=Ds(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return ct.workingToColorSpace(rn.copy(this),e),Math.round(ut(rn.r*255,0,255))*65536+Math.round(ut(rn.g*255,0,255))*256+Math.round(ut(rn.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(rn.copy(this),t);let n=rn.r,s=rn.g,r=rn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=kt){ct.workingToColorSpace(rn.copy(this),e);let t=rn.r,n=rn.g,s=rn.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ri),this.setHSL(Ri.h+e,Ri.s+t,Ri.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ri),e.getHSL(Ga);let n=Sc(Ri.h,Ga.h,t),s=Sc(Ri.s,Ga.s,t),r=Sc(Ri.l,Ga.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new ke;ke.NAMES=Yd;var Fr=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ke(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Bn=class extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Nn=new F,di=new F,Cc=new F,fi=new F,bs=new F,Es=new F,Hu=new F,Pc=new F,Ic=new F,Lc=new F,Dc=new St,Nc=new St,Uc=new St,Li=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Nn.subVectors(e,t),s.cross(Nn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Nn.subVectors(s,t),di.subVectors(n,t),Cc.subVectors(e,t);let a=Nn.dot(Nn),o=Nn.dot(di),l=Nn.dot(Cc),c=di.dot(di),h=di.dot(Cc),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fi.x),l.addScaledVector(a,fi.y),l.addScaledVector(o,fi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Dc.setScalar(0),Nc.setScalar(0),Uc.setScalar(0),Dc.fromBufferAttribute(e,t),Nc.fromBufferAttribute(e,n),Uc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Dc,r.x),a.addScaledVector(Nc,r.y),a.addScaledVector(Uc,r.z),a}static isFrontFacing(e,t,n,s){return Nn.subVectors(n,t),di.subVectors(e,t),Nn.cross(di).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Nn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;bs.subVectors(s,n),Es.subVectors(r,n),Pc.subVectors(e,n);let l=bs.dot(Pc),c=Es.dot(Pc);if(l<=0&&c<=0)return t.copy(n);Ic.subVectors(e,s);let h=bs.dot(Ic),d=Es.dot(Ic);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(bs,a);Lc.subVectors(e,r);let f=bs.dot(Lc),g=Es.dot(Lc);if(g>=0&&f<=g)return t.copy(r);let v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Es,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Hu.subVectors(r,s),o=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(Hu,o);let p=1/(m+v+u);return a=v*p,o=u*p,t.copy(n).addScaledVector(bs,a).addScaledVector(Es,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},kn=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Un):Un.fromBufferAttribute(r,a),Un.applyMatrix4(e.matrixWorld),this.expandByPoint(Un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ha.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ha.copy(n.boundingBox)),Ha.applyMatrix4(e.matrixWorld),this.union(Ha)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Un),Un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mr),Wa.subVectors(this.max,Mr),ws.subVectors(e.a,Mr),Ts.subVectors(e.b,Mr),As.subVectors(e.c,Mr),Ci.subVectors(Ts,ws),Pi.subVectors(As,Ts),Zi.subVectors(ws,As);let t=[0,-Ci.z,Ci.y,0,-Pi.z,Pi.y,0,-Zi.z,Zi.y,Ci.z,0,-Ci.x,Pi.z,0,-Pi.x,Zi.z,0,-Zi.x,-Ci.y,Ci.x,0,-Pi.y,Pi.x,0,-Zi.y,Zi.x,0];return!Fc(t,ws,Ts,As,Wa)||(t=[1,0,0,0,1,0,0,0,1],!Fc(t,ws,Ts,As,Wa))?!1:(Xa.crossVectors(Ci,Pi),t=[Xa.x,Xa.y,Xa.z],Fc(t,ws,Ts,As,Wa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},pi=[new F,new F,new F,new F,new F,new F,new F,new F],Un=new F,Ha=new kn,ws=new F,Ts=new F,As=new F,Ci=new F,Pi=new F,Zi=new F,Mr=new F,Wa=new F,Xa=new F,Ji=new F;function Fc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ji.fromArray(i,r);let o=s.x*Math.abs(Ji.x)+s.y*Math.abs(Ji.y)+s.z*Math.abs(Ji.z),l=e.dot(Ji),c=t.dot(Ji),h=n.dot(Ji);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var qt=new F,qa=new ue,Yp=0,zt=class extends Zn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Gd,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)qa.fromBufferAttribute(this,t),qa.applyMatrix3(e),this.setXY(t,qa.x,qa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=vr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vr(t,this.array)),t}setX(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vr(t,this.array)),t}setY(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vr(t,this.array)),t}setW(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),n=pn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),n=pn(n,this.array),s=pn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),n=pn(n,this.array),s=pn(s,this.array),r=pn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var ts=class extends zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Or=class extends zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var dt=class extends zt{constructor(e,t,n){super(new Float32Array(e),t,n)}},$p=new kn,Sr=new F,Oc=new F,jn=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):$p.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sr.subVectors(e,this.center);let t=Sr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Sr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sr.copy(e.center).add(Oc)),this.expandByPoint(Sr.copy(e.center).sub(Oc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Zp=0,Cn=new it,Bc=new Yt,Rs=new F,Sn=new kn,br=new kn,jt=new F,Ot=class i extends Zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=ls(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Np(e)?Or:ts)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,t,n){return Cn.makeTranslation(e,t,n),this.applyMatrix4(Cn),this}scale(e,t,n){return Cn.makeScale(e,t,n),this.applyMatrix4(Cn),this}lookAt(e){return Bc.lookAt(e),Bc.updateMatrix(),this.applyMatrix4(Bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new dt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];br.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(Sn.min,br.min),Sn.expandByPoint(jt),jt.addVectors(Sn.max,br.max),Sn.expandByPoint(jt)):(Sn.expandByPoint(br.min),Sn.expandByPoint(br.max))}Sn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)jt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(jt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)jt.fromBufferAttribute(o,c),l&&(Rs.fromBufferAttribute(e,c),jt.add(Rs)),s=Math.max(s,n.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new zt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new F,l[x]=new F;let c=new F,h=new F,d=new F,u=new ue,f=new ue,g=new ue,v=new F,m=new F;function p(x,A,N){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,A),d.fromBufferAttribute(n,N),u.fromBufferAttribute(r,x),f.fromBufferAttribute(r,A),g.fromBufferAttribute(r,N),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(I),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),o[x].add(v),o[A].add(v),o[N].add(v),l[x].add(m),l[A].add(m),l[N].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let x=0,A=S.length;x<A;++x){let N=S[x],I=N.start,M=N.count;for(let C=I,P=I+M;C<P;C+=3)p(e.getX(C+0),e.getX(C+1),e.getX(C+2))}let T=new F,y=new F,b=new F,w=new F;function L(x){b.fromBufferAttribute(s,x),w.copy(b);let A=o[x];T.copy(A),T.sub(b.multiplyScalar(b.dot(A))).normalize(),y.crossVectors(w,A);let I=y.dot(l[x])<0?-1:1;a.setXYZW(x,T.x,T.y,T.z,I)}for(let x=0,A=S.length;x<A;++x){let N=S[x],I=N.start,M=N.count;for(let C=I,P=I+M;C<P;C+=3)L(e.getX(C+0)),L(e.getX(C+1)),L(e.getX(C+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,h=new F,d=new F;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new zt(u,h,d)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var kc=new F,Jp=new F,Kp=new tt,Fn=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=kc.subVectors(n,t).cross(Jp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(kc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Kp.getNormalMatrix(e),s=this.coplanarPoint(kc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},jp=0,Qn=class extends Zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=ls(),this.name="",this.type="Material",this.blending=Js,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dh,this.blendDst=fh,this.blendEquation=In,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ud,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ho,this.stencilZFail=ho,this.stencilZPass=ho,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Fn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ue().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ue().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var mi=new F,zc=new F,Ya=new F,$a=new F,Br=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,t),mi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){zc.copy(e).add(t).multiplyScalar(.5),Ya.copy(t).sub(e).normalize(),$a.copy(this.origin).sub(zc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ya),o=$a.dot(this.direction),l=-$a.dot(Ya),c=$a.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let v=1/h;d*=v,u*=v,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(zc).addScaledVector(Ya,u),f}intersectSphere(e,t){if(e.radius<0)return null;mi.subVectors(e.center,this.origin);let n=mi.dot(this.direction),s=mi.dot(mi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,f=e.z-a.z,g=t.x-a.x,v=t.y-a.y,m=t.z-a.z,p=n.x-a.x,S=n.y-a.y,T=n.z-a.z,y=Math.abs(l),b=Math.abs(c),w=Math.abs(h),L,x,A,N,I,M,C,P,R,U,V,$;if(y>=b&&y>=w?(A=l,M=d,R=g,$=p,l>=0?(L=c,x=h,N=u,I=f,C=v,P=m,U=S,V=T):(L=h,x=c,N=f,I=u,C=m,P=v,U=T,V=S)):b>=w?(A=c,M=u,R=v,$=S,c>=0?(L=h,x=l,N=f,I=d,C=m,P=g,U=T,V=p):(L=l,x=h,N=d,I=f,C=g,P=m,U=p,V=T)):(A=h,M=f,R=m,$=T,h>=0?(L=l,x=c,N=d,I=u,C=g,P=v,U=p,V=S):(L=c,x=l,N=u,I=d,C=v,P=g,U=S,V=p)),A===0)return null;let z=L/A,H=x/A,J=1/A,de=N-z*M,fe=I-H*M,We=C-z*R,Ye=P-H*R,nt=U-z*$,Z=V-H*$,Q=nt*Ye-Z*We,le=de*Z-fe*nt,Pe=We*fe-Ye*de;if(s){if(Q<0||le<0||Pe<0)return null}else if((Q<0||le<0||Pe<0)&&(Q>0||le>0||Pe>0))return null;let we=Q+le+Pe;if(we===0)return null;let Xe=J*(Q*M+le*R+Pe*$);return(we>0?Xe<0:Xe>0)?null:this.at(Xe/we,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Di=class extends Qn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=Zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Wu=new it,Ki=new Br,Za=new jn,Xu=new F,Ja=new F,Ka=new F,ja=new F,Vc=new F,Qa=new F,qu=new F,eo=new F,Ve=class extends Yt{constructor(e=new Ot,t=new Di){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Qa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Vc.fromBufferAttribute(d,e),a?Qa.addScaledVector(Vc,h):Qa.addScaledVector(Vc.sub(t),h))}t.add(Qa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Za.copy(n.boundingSphere),Za.applyMatrix4(r),Ki.copy(e.ray).recast(e.near),!(Za.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(Za,Xu)===null||Ki.origin.distanceToSquared(Xu)>(e.far-e.near)**2))&&(Wu.copy(r).invert(),Ki.copy(e.ray).applyMatrix4(Wu),!(n.boundingBox!==null&&Ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ki)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let m=u[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),T=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=S,b=T;y<b;y+=3){let w=o.getX(y),L=o.getX(y+1),x=o.getX(y+2);s=to(this,p,e,n,c,h,d,w,L,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let S=o.getX(m),T=o.getX(m+1),y=o.getX(m+2);s=to(this,a,e,n,c,h,d,S,T,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let m=u[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),T=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=S,b=T;y<b;y+=3){let w=y,L=y+1,x=y+2;s=to(this,p,e,n,c,h,d,w,L,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let S=m,T=m+1,y=m+2;s=to(this,a,e,n,c,h,d,S,T,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Qp(i,e,t,n,s,r,a,o){let l;if(e.side===$t?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===ki,o),l===null)return null;eo.copy(o),eo.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(eo);return c<t.near||c>t.far?null:{distance:c,point:eo.clone(),object:i}}function to(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Ja),i.getVertexPosition(l,Ka),i.getVertexPosition(c,ja);let h=Qp(i,e,t,n,Ja,Ka,ja,qu);if(h){let d=new F;Li.getBarycoord(qu,Ja,Ka,ja,d),s&&(h.uv=Li.getInterpolatedAttribute(s,o,l,c,d,new ue)),r&&(h.uv1=Li.getInterpolatedAttribute(r,o,l,c,d,new ue)),a&&(h.normal=Li.getInterpolatedAttribute(a,o,l,c,d,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new F,materialIndex:0};Li.getNormal(Ja,Ka,ja,u.normal),h.face=u,h.barycoord=d}return h}var Er=new St,Yu=new St,$u=new St,e0=new St,Zu=new it,no=new F,Gc=new jn,Ju=new it,Hc=new Br,kr=class extends Ve{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Zc,this.bindMatrix=new it,this.bindMatrixInverse=new it,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new kn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,no),this.boundingBox.expandByPoint(no)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new jn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,no),this.boundingSphere.expandByPoint(no)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gc.copy(this.boundingSphere),Gc.applyMatrix4(s),e.ray.intersectsSphere(Gc)!==!1&&(Ju.copy(s).invert(),Hc.copy(e.ray).applyMatrix4(Ju),!(this.boundingBox!==null&&Hc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Hc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new St,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Zc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Id?this.bindMatrixInverse.copy(this.bindMatrix).invert():He("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Yu.fromBufferAttribute(s.attributes.skinIndex,e),$u.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Er.copy(t),t.set(0,0,0,0)):(Er.set(...t,1),t.set(0,0,0)),Er.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=$u.getComponent(r);if(a!==0){let o=Yu.getComponent(r);Zu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(e0.copy(Er).applyMatrix4(Zu),a)}}return t.isVector4&&(t.w=Er.w),t.applyMatrix4(this.bindMatrixInverse)}},ks=class extends Yt{constructor(){super(),this.isBone=!0,this.type="Bone"}},ei=class extends cn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Vt,h=Vt,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ku=new it,t0=new it,zr=class i{constructor(e=[],t=[]){this.uuid=ls(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){He("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new it)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new it;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:t0;Ku.multiplyMatrices(o,t[r]),Ku.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new ei(t,e,e,un,wn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(He("Skeleton: No bone found with UUID:",r),a=new ks),this.bones.push(a),this.boneInverses.push(new it().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},Vr=class extends zt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Cs=new it,ju=new it,io=[],Qu=new kn,n0=new it,wr=new Ve,Tr=new jn,Gr=class extends Ve{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Vr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,n0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new kn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Cs),Qu.copy(e.boundingBox).applyMatrix4(Cs),this.boundingBox.union(Qu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new jn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Cs),Tr.copy(e.boundingSphere).applyMatrix4(Cs),this.boundingSphere.union(Tr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(wr.geometry=this.geometry,wr.material=this.material,wr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Tr.copy(this.boundingSphere),Tr.applyMatrix4(n),e.ray.intersectsSphere(Tr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Cs),ju.multiplyMatrices(n,Cs),wr.matrixWorld=ju,wr.raycast(e,io);for(let a=0,o=io.length;a<o;a++){let l=io[a];l.instanceId=r,l.object=this,t.push(l)}io.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Vr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ei(new Float32Array(s*this.count),s,this.count,nl,wn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ji=new jn,i0=new ue(.5,.5),so=new F,zs=class{constructor(e=new Fn,t=new Fn,n=new Fn,s=new Fn,r=new Fn,a=new Fn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=On,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],v=r[9],m=r[10],p=r[11],S=r[12],T=r[13],y=r[14],b=r[15];if(s[0].setComponents(c-a,f-h,p-g,b-S).normalize(),s[1].setComponents(c+a,f+h,p+g,b+S).normalize(),s[2].setComponents(c+o,f+d,p+v,b+T).normalize(),s[3].setComponents(c-o,f-d,p-v,b-T).normalize(),n)s[4].setComponents(l,u,m,y).normalize(),s[5].setComponents(c-l,f-u,p-m,b-y).normalize();else if(s[4].setComponents(c-l,f-u,p-m,b-y).normalize(),t===On)s[5].setComponents(c+l,f+u,p+m,b+y).normalize();else if(t===Us)s[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(e){ji.center.set(0,0,0);let t=i0.distanceTo(e.center);return ji.radius=.7071067811865476+t,ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(so.x=s.normal.x>0?e.max.x:e.min.x,so.y=s.normal.y>0?e.max.y:e.min.y,so.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(so)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Hr=class extends cn{constructor(e=[],t=zi,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},xi=class extends cn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ti=class extends cn{constructor(e,t,n=Vn,s,r,a,o=Vt,l=Vt,c,h=$n,d=1){if(h!==$n&&h!==ii)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Os(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},wo=class extends ti{constructor(e,t=Vn,n=zi,s,r,a=Vt,o=Vt,l,c=$n){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Wr=class extends cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},hn=class i extends Ot{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(d,2));function g(v,m,p,S,T,y,b,w,L,x,A){let N=y/L,I=b/x,M=y/2,C=b/2,P=w/2,R=L+1,U=x+1,V=0,$=0,z=new F;for(let H=0;H<U;H++){let J=H*I-C;for(let de=0;de<R;de++){let fe=de*N-M;z[v]=fe*S,z[m]=J*T,z[p]=P,c.push(z.x,z.y,z.z),z[v]=0,z[m]=0,z[p]=w>0?1:-1,h.push(z.x,z.y,z.z),d.push(de/L),d.push(1-H/x),V+=1}}for(let H=0;H<x;H++)for(let J=0;J<L;J++){let de=u+J+R*H,fe=u+J+R*(H+1),We=u+(J+1)+R*(H+1),Ye=u+(J+1)+R*H;l.push(de,fe,Ye),l.push(fe,We,Ye),$+=6}o.addGroup(f,$,A),f+=$,u+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Xr=class i extends Ot{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new F,h=new ue;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=n+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new dt(a,3)),this.setAttribute("normal",new dt(o,3)),this.setAttribute("uv",new dt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Vs=class i extends Ot{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,v=[],m=n/2,p=0;S(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new dt(d,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(f,2));function S(){let y=new F,b=new F,w=0,L=(t-e)/n;for(let x=0;x<=r;x++){let A=[],N=x/r,I=N*(t-e)+e;for(let M=0;M<=s;M++){let C=M/s,P=C*l+o,R=Math.sin(P),U=Math.cos(P);b.x=I*R,b.y=-N*n+m,b.z=I*U,d.push(b.x,b.y,b.z),y.set(R,L,U).normalize(),u.push(y.x,y.y,y.z),f.push(C,1-N),A.push(g++)}v.push(A)}for(let x=0;x<s;x++)for(let A=0;A<r;A++){let N=v[A][x],I=v[A+1][x],M=v[A+1][x+1],C=v[A][x+1];(e>0||A!==0)&&(h.push(N,I,C),w+=3),(t>0||A!==r-1)&&(h.push(I,M,C),w+=3)}c.addGroup(p,w,0),p+=w}function T(y){let b=g,w=new ue,L=new F,x=0,A=y===!0?e:t,N=y===!0?1:-1;for(let M=1;M<=s;M++)d.push(0,m*N,0),u.push(0,N,0),f.push(.5,.5),g++;let I=g;for(let M=0;M<=s;M++){let P=M/s*l+o,R=Math.cos(P),U=Math.sin(P);L.x=A*U,L.y=m*N,L.z=A*R,d.push(L.x,L.y,L.z),u.push(0,N,0),w.x=R*.5+.5,w.y=U*.5*N+.5,f.push(w.x,w.y),g++}for(let M=0;M<s;M++){let C=b+M,P=I+M;y===!0?h.push(P,P+1,C):h.push(P+1,P,C),x+=3}c.addGroup(p,x,y===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},qr=class i extends Vs{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},To=class i extends Ot{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new dt(r,3)),this.setAttribute("normal",new dt(r.slice(),3)),this.setAttribute("uv",new dt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let T=new F,y=new F,b=new F;for(let w=0;w<t.length;w+=3)f(t[w+0],T),f(t[w+1],y),f(t[w+2],b),l(T,y,b,S)}function l(S,T,y,b){let w=b+1,L=[];for(let x=0;x<=w;x++){L[x]=[];let A=S.clone().lerp(y,x/w),N=T.clone().lerp(y,x/w),I=w-x;for(let M=0;M<=I;M++)M===0&&x===w?L[x][M]=A:L[x][M]=A.clone().lerp(N,M/I)}for(let x=0;x<w;x++)for(let A=0;A<2*(w-x)-1;A++){let N=Math.floor(A/2);A%2===0?(u(L[x][N+1]),u(L[x+1][N]),u(L[x][N])):(u(L[x][N+1]),u(L[x+1][N+1]),u(L[x+1][N]))}}function c(S){let T=new F;for(let y=0;y<r.length;y+=3)T.x=r[y+0],T.y=r[y+1],T.z=r[y+2],T.normalize().multiplyScalar(S),r[y+0]=T.x,r[y+1]=T.y,r[y+2]=T.z}function h(){let S=new F;for(let T=0;T<r.length;T+=3){S.x=r[T+0],S.y=r[T+1],S.z=r[T+2];let y=m(S)/2/Math.PI+.5,b=p(S)/Math.PI+.5;a.push(y,1-b)}g(),d()}function d(){for(let S=0;S<a.length;S+=6){let T=a[S+0],y=a[S+2],b=a[S+4],w=Math.max(T,y,b),L=Math.min(T,y,b);w>.9&&L<.1&&(T<.2&&(a[S+0]+=1),y<.2&&(a[S+2]+=1),b<.2&&(a[S+4]+=1))}}function u(S){r.push(S.x,S.y,S.z)}function f(S,T){let y=S*3;T.x=e[y+0],T.y=e[y+1],T.z=e[y+2]}function g(){let S=new F,T=new F,y=new F,b=new F,w=new ue,L=new ue,x=new ue;for(let A=0,N=0;A<r.length;A+=9,N+=6){S.set(r[A+0],r[A+1],r[A+2]),T.set(r[A+3],r[A+4],r[A+5]),y.set(r[A+6],r[A+7],r[A+8]),w.set(a[N+0],a[N+1]),L.set(a[N+2],a[N+3]),x.set(a[N+4],a[N+5]),b.copy(S).add(T).add(y).divideScalar(3);let I=m(b);v(w,N+0,S,I),v(L,N+2,T,I),v(x,N+4,y,I)}}function v(S,T,y,b){b<0&&S.x===1&&(a[T]=S.x-1),y.x===0&&y.z===0&&(a[T]=b/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){He("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ue:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new F,s=[],r=[],a=[],o=new F,l=new it;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new F)}r[0]=new F,a[0]=new F;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(ut(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(ut(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Gs=class extends bn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ue){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ao=class extends Gs{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function bh(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var ed=new F,td=new F,Wc=new bh,Xc=new bh,qc=new bh,Ro=class extends bn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new F){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(td.subVectors(s[0],s[1]).add(s[0]),c=td);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(ed.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ed),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Wc.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,v,m),Xc.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,v,m),qc.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Wc.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Xc.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),qc.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Wc.calc(l),Xc.calc(l),qc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new F().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function nd(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function s0(i,e){let t=1-i;return t*t*e}function r0(i,e){return 2*(1-i)*i*e}function a0(i,e){return i*i*e}function Rr(i,e,t,n){return s0(i,e)+r0(i,t)+a0(i,n)}function o0(i,e){let t=1-i;return t*t*t*e}function l0(i,e){let t=1-i;return 3*t*t*i*e}function c0(i,e){return 3*(1-i)*i*i*e}function h0(i,e){return i*i*i*e}function Cr(i,e,t,n,s){return o0(i,e)+l0(i,t)+c0(i,n)+h0(i,s)}var Yr=class extends bn{constructor(e=new ue,t=new ue,n=new ue,s=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ue){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Cr(e,s.x,r.x,a.x,o.x),Cr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Co=class extends bn{constructor(e=new F,t=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Cr(e,s.x,r.x,a.x,o.x),Cr(e,s.y,r.y,a.y,o.y),Cr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},$r=class extends bn{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Po=class extends bn{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zr=class extends bn{constructor(e=new ue,t=new ue,n=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ue){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Rr(e,s.x,r.x,a.x),Rr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Io=class extends bn{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Rr(e,s.x,r.x,a.x),Rr(e,s.y,r.y,a.y),Rr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Jr=class extends bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(nd(o,l.x,c.x,h.x,d.x),nd(o,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ue().fromArray(s))}return this}},eh=Object.freeze({__proto__:null,ArcCurve:Ao,CatmullRomCurve3:Ro,CubicBezierCurve:Yr,CubicBezierCurve3:Co,EllipseCurve:Gs,LineCurve:$r,LineCurve3:Po,QuadraticBezierCurve:Zr,QuadraticBezierCurve3:Io,SplineCurve:Jr}),Lo=class extends bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new eh[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new eh[s.type]().fromJSON(s))}return this}},Kr=class extends Lo{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new $r(this.currentPoint.clone(),new ue(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Zr(this.currentPoint.clone(),new ue(e,t),new ue(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Yr(this.currentPoint.clone(),new ue(e,t),new ue(n,s),new ue(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Jr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Gs(e,t,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},_i=class extends Kr{constructor(e){super(e),this.uuid=ls(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Kr().fromJSON(s))}return this}};function u0(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=$d(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=g0(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,d=l;for(let u=t;u<s;u+=t){let f=i[u],g=i[u+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>d&&(d=g)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return jr(r,a,t,o,l,c,0),a}function $d(i,e,t,n,s){let r;if(s===A0(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=id(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=id(a/n|0,i[a],i[a+1],r);return r&&Hs(r,r.next)&&(ea(r),r=r.next),r}function ns(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Hs(t,t.next)||Ft(t.prev,t,t.next)===0)){if(ea(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function jr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&M0(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?f0(i,n,s,r):d0(i)){e.push(l.i,i.i,c.i),ea(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=p0(ns(i),e),jr(i,e,t,n,s,r,2)):a===2&&m0(i,e,t,n,s,r):jr(ns(i),e,t,n,s,r,1);break}}}function d0(i){let e=i.prev,t=i,n=i.next;if(Ft(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),f=Math.max(o,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&Ar(s,o,r,l,a,c,g.x,g.y)&&Ft(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function f0(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Ft(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,l,c),g=Math.min(h,d,u),v=Math.max(o,l,c),m=Math.max(h,d,u),p=th(f,g,e,t,n),S=th(v,m,e,t,n),T=i.prevZ,y=i.nextZ;for(;T&&T.z>=p&&y&&y.z<=S;){if(T.x>=f&&T.x<=v&&T.y>=g&&T.y<=m&&T!==s&&T!==a&&Ar(o,h,l,d,c,u,T.x,T.y)&&Ft(T.prev,T,T.next)>=0||(T=T.prevZ,y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&Ar(o,h,l,d,c,u,y.x,y.y)&&Ft(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;T&&T.z>=p;){if(T.x>=f&&T.x<=v&&T.y>=g&&T.y<=m&&T!==s&&T!==a&&Ar(o,h,l,d,c,u,T.x,T.y)&&Ft(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;y&&y.z<=S;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&Ar(o,h,l,d,c,u,y.x,y.y)&&Ft(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function p0(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Hs(n,s)&&Jd(n,t,t.next,s)&&Qr(n,s)&&Qr(s,n)&&(e.push(n.i,t.i,s.i),ea(t),ea(t.next),t=i=s),t=t.next}while(t!==i);return ns(t)}function m0(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&E0(a,o)){let l=Kd(a,o);a=ns(a,a.next),l=ns(l,l.next),jr(a,e,t,n,s,r,0),jr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function g0(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=$d(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(b0(c))}s.sort(x0);for(let r=0;r<s.length;r++)t=_0(s[r],t);return t}function x0(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function _0(i,e){let t=v0(i,e);if(!t)return e;let n=Kd(t,i);return ns(n,n.next),ns(t,t.next)}function v0(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Hs(i,t))return t;do{if(Hs(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Zd(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let d=Math.abs(s-t.y)/(n-t.x);Qr(t,i)&&(d<h||d===h&&(t.x>a.x||t.x===a.x&&y0(a,t)))&&(a=t,h=d)}t=t.next}while(t!==o);return a}function y0(i,e){return Ft(i.prev,i,e.prev)<0&&Ft(e.next,i,i.next)<0}function M0(i,e,t,n){let s=i;do s.z===0&&(s.z=th(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,S0(s)}function S0(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function th(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function b0(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Zd(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Ar(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Zd(i,e,t,n,s,r,a,o)}function E0(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!w0(i,e)&&(Qr(i,e)&&Qr(e,i)&&T0(i,e)&&(Ft(i.prev,i,e.prev)||Ft(i,e.prev,e))||Hs(i,e)&&Ft(i.prev,i,i.next)>0&&Ft(e.prev,e,e.next)>0)}function Ft(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Hs(i,e){return i.x===e.x&&i.y===e.y}function Jd(i,e,t,n){let s=ao(Ft(i,e,t)),r=ao(Ft(i,e,n)),a=ao(Ft(t,n,i)),o=ao(Ft(t,n,e));return!!(s!==r&&a!==o||s===0&&ro(i,t,e)||r===0&&ro(i,n,e)||a===0&&ro(t,i,n)||o===0&&ro(t,e,n))}function ro(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ao(i){return i>0?1:i<0?-1:0}function w0(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Jd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Qr(i,e){return Ft(i.prev,i,i.next)<0?Ft(i,e,i.next)>=0&&Ft(i,i.prev,e)>=0:Ft(i,e,i.prev)<0||Ft(i,i.next,e)<0}function T0(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Kd(i,e){let t=nh(i.i,i.x,i.y),n=nh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function id(i,e,t,n){let s=nh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ea(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function nh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function A0(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var ih=class{static triangulate(e,t,n=2){return u0(e,t,n)}},Qi=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];sd(e),rd(n,e);let a=e.length;t.forEach(sd);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,rd(n,t[l]);let o=ih.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function sd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function rd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ni=class i extends Ot{constructor(e=new _i([new ue(.5,.5),new ue(-.5,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new dt(s,3)),this.setAttribute("uv",new dt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:R0,T,y=!1,b,w,L,x;if(p){T=p.getSpacedPoints(h),y=!0,u=!1;let ne=p.isCatmullRomCurve3?p.closed:!1;b=p.computeFrenetFrames(h,ne),w=new F,L=new F,x=new F}u||(m=0,f=0,g=0,v=0);let A=o.extractPoints(c),N=A.shape,I=A.holes;if(!Qi.isClockWise(N)){N=N.reverse();for(let ne=0,re=I.length;ne<re;ne++){let oe=I[ne];Qi.isClockWise(oe)&&(I[ne]=oe.reverse())}}function C(ne){let oe=10000000000000001e-36,ce=ne[0];for(let pe=1;pe<=ne.length;pe++){let Ge=pe%ne.length,Oe=ne[Ge],qe=Oe.x-ce.x,Je=Oe.y-ce.y,O=qe*qe+Je*Je,ft=Math.max(Math.abs(Oe.x),Math.abs(Oe.y),Math.abs(ce.x),Math.abs(ce.y)),st=oe*ft*ft;if(O<=st){ne.splice(Ge,1),pe--;continue}ce=Oe}}C(N),I.forEach(C);let P=I.length,R=N;for(let ne=0;ne<P;ne++){let re=I[ne];N=N.concat(re)}function U(ne,re,oe){return re||$e("ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(re,oe)}let V=N.length;function $(ne,re,oe){let ce,pe,Ge,Oe=ne.x-re.x,qe=ne.y-re.y,Je=oe.x-ne.x,O=oe.y-ne.y,ft=Oe*Oe+qe*qe,st=Oe*O-qe*Je;if(Math.abs(st)>Number.EPSILON){let D=Math.sqrt(ft),_=Math.sqrt(Je*Je+O*O),G=re.x-qe/D,W=re.y+Oe/D,K=oe.x-O/_,he=oe.y+Je/_,me=((K-G)*O-(he-W)*Je)/(Oe*O-qe*Je);ce=G+Oe*me-ne.x,pe=W+qe*me-ne.y;let j=ce*ce+pe*pe;if(j<=2)return new ue(ce,pe);Ge=Math.sqrt(j/2)}else{let D=!1;Oe>Number.EPSILON?Je>Number.EPSILON&&(D=!0):Oe<-Number.EPSILON?Je<-Number.EPSILON&&(D=!0):Math.sign(qe)===Math.sign(O)&&(D=!0),D?(ce=-qe,pe=Oe,Ge=Math.sqrt(ft)):(ce=Oe,pe=qe,Ge=Math.sqrt(ft/2))}return new ue(ce/Ge,pe/Ge)}let z=[];for(let ne=0,re=R.length,oe=re-1,ce=ne+1;ne<re;ne++,oe++,ce++)oe===re&&(oe=0),ce===re&&(ce=0),z[ne]=$(R[ne],R[oe],R[ce]);let H=[],J,de=z.concat();for(let ne=0,re=P;ne<re;ne++){let oe=I[ne];J=[];for(let ce=0,pe=oe.length,Ge=pe-1,Oe=ce+1;ce<pe;ce++,Ge++,Oe++)Ge===pe&&(Ge=0),Oe===pe&&(Oe=0),J[ce]=$(oe[ce],oe[Ge],oe[Oe]);H.push(J),de=de.concat(J)}let fe;if(m===0)fe=Qi.triangulateShape(R,I);else{let ne=[],re=[];for(let oe=0;oe<m;oe++){let ce=oe/m,pe=f*Math.cos(ce*Math.PI/2),Ge=g*Math.sin(ce*Math.PI/2)+v;for(let Oe=0,qe=R.length;Oe<qe;Oe++){let Je=U(R[Oe],z[Oe],Ge);le(Je.x,Je.y,-pe),ce===0&&ne.push(Je)}for(let Oe=0,qe=P;Oe<qe;Oe++){let Je=I[Oe];J=H[Oe];let O=[];for(let ft=0,st=Je.length;ft<st;ft++){let D=U(Je[ft],J[ft],Ge);le(D.x,D.y,-pe),ce===0&&O.push(D)}ce===0&&re.push(O)}}fe=Qi.triangulateShape(ne,re)}let We=fe.length,Ye=g+v;for(let ne=0;ne<V;ne++){let re=u?U(N[ne],de[ne],Ye):N[ne];y?(L.copy(b.normals[0]).multiplyScalar(re.x),w.copy(b.binormals[0]).multiplyScalar(re.y),x.copy(T[0]).add(L).add(w),le(x.x,x.y,x.z)):le(re.x,re.y,0)}for(let ne=1;ne<=h;ne++)for(let re=0;re<V;re++){let oe=u?U(N[re],de[re],Ye):N[re];y?(L.copy(b.normals[ne]).multiplyScalar(oe.x),w.copy(b.binormals[ne]).multiplyScalar(oe.y),x.copy(T[ne]).add(L).add(w),le(x.x,x.y,x.z)):le(oe.x,oe.y,d/h*ne)}for(let ne=m-1;ne>=0;ne--){let re=ne/m,oe=f*Math.cos(re*Math.PI/2),ce=g*Math.sin(re*Math.PI/2)+v;for(let pe=0,Ge=R.length;pe<Ge;pe++){let Oe=U(R[pe],z[pe],ce);le(Oe.x,Oe.y,d+oe)}for(let pe=0,Ge=I.length;pe<Ge;pe++){let Oe=I[pe];J=H[pe];for(let qe=0,Je=Oe.length;qe<Je;qe++){let O=U(Oe[qe],J[qe],ce);y?le(O.x,O.y+T[h-1].y,T[h-1].x+oe):le(O.x,O.y,d+oe)}}}nt(),Z();function nt(){let ne=s.length/3;if(u){let re=0,oe=V*re;for(let ce=0;ce<We;ce++){let pe=fe[ce];Pe(pe[2]+oe,pe[1]+oe,pe[0]+oe)}re=h+m*2,oe=V*re;for(let ce=0;ce<We;ce++){let pe=fe[ce];Pe(pe[0]+oe,pe[1]+oe,pe[2]+oe)}}else{for(let re=0;re<We;re++){let oe=fe[re];Pe(oe[2],oe[1],oe[0])}for(let re=0;re<We;re++){let oe=fe[re];Pe(oe[0]+V*h,oe[1]+V*h,oe[2]+V*h)}}n.addGroup(ne,s.length/3-ne,0)}function Z(){let ne=s.length/3,re=0;Q(R,re),re+=R.length;for(let oe=0,ce=I.length;oe<ce;oe++){let pe=I[oe];Q(pe,re),re+=pe.length}n.addGroup(ne,s.length/3-ne,1)}function Q(ne,re){let oe=ne.length;for(;--oe>=0;){let ce=oe,pe=oe-1;pe<0&&(pe=ne.length-1);for(let Ge=0,Oe=h+m*2;Ge<Oe;Ge++){let qe=V*Ge,Je=V*(Ge+1),O=re+ce+qe,ft=re+pe+qe,st=re+pe+Je,D=re+ce+Je;we(O,ft,st,D)}}}function le(ne,re,oe){l.push(ne),l.push(re),l.push(oe)}function Pe(ne,re,oe){Xe(ne),Xe(re),Xe(oe);let ce=s.length/3,pe=S.generateTopUV(n,s,ce-3,ce-2,ce-1);mt(pe[0]),mt(pe[1]),mt(pe[2])}function we(ne,re,oe,ce){Xe(ne),Xe(re),Xe(ce),Xe(re),Xe(oe),Xe(ce);let pe=s.length/3,Ge=S.generateSideWallUV(n,s,pe-6,pe-3,pe-2,pe-1);mt(Ge[0]),mt(Ge[1]),mt(Ge[3]),mt(Ge[1]),mt(Ge[2]),mt(Ge[3])}function Xe(ne){s.push(l[ne*3+0]),s.push(l[ne*3+1]),s.push(l[ne*3+2])}function mt(ne){r.push(ne.x),r.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return C0(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new eh[s.type]().fromJSON(s)),new i(n,e.options)}},R0={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new ue(r,a),new ue(o,l),new ue(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[s*3],f=e[s*3+1],g=e[s*3+2],v=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ue(a,1-l),new ue(c,1-d),new ue(u,1-g),new ue(v,1-p)]:[new ue(o,1-l),new ue(h,1-d),new ue(f,1-g),new ue(m,1-p)]}};function C0(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ws=class i extends To{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var mn=class i extends Ot{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=e/o,u=t/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){let S=p*u-a;for(let T=0;T<c;T++){let y=T*d-r;g.push(y,-S,0),v.push(0,0,1),m.push(T/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){let T=S+c*p,y=S+c*(p+1),b=S+1+c*(p+1),w=S+1+c*p;f.push(T,y,w),f.push(y,b,w)}this.setIndex(f),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(v,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},ta=class i extends Ot{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],d=e,u=(t-e)/s,f=new F,g=new ue;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}d+=u}for(let v=0;v<s;v++){let m=v*(n+1);for(let p=0;p<n;p++){let S=p+m,T=S,y=S+n+1,b=S+n+2,w=S+1;o.push(T,y,w),o.push(y,b,w)}}this.setIndex(o),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(c,3)),this.setAttribute("uv",new dt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var vi=class i extends Ot{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new F,u=new F,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){let S=[],T=p/n,y=a+T*o,b=e*Math.cos(y),w=Math.sqrt(e*e-b*b),L=0;p===0&&a===0?L=.5/t:p===n&&l===Math.PI&&(L=-.5/t);for(let x=0;x<=t;x++){let A=x/t,N=s+A*r;d.x=-w*Math.cos(N),d.y=b,d.z=w*Math.sin(N),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(A+L,1-T),S.push(c++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<t;S++){let T=h[p][S+1],y=h[p][S],b=h[p+1][S],w=h[p+1][S+1];(p!==0||a>0)&&f.push(T,y,w),(p!==n-1||l<Math.PI)&&f.push(y,b,w)}this.setIndex(f),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(v,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var na=class i extends Ot{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new F,f=new F,g=new F;for(let v=0;v<=n;v++){let m=a+v/n*o;for(let p=0;p<=s;p++){let S=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(S),f.y=(e+t*Math.cos(m))*Math.sin(S),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),u.x=e*Math.cos(S),u.y=e*Math.sin(S),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/s),d.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=s;m++){let p=(s+1)*v+m-1,S=(s+1)*(v-1)+m-1,T=(s+1)*(v-1)+m,y=(s+1)*v+m;l.push(p,S,y),l.push(S,T,y)}this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function cs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(ad(s))s.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(ad(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function on(i){let e={};for(let t=0;t<i.length;t++){let n=cs(i[t]);for(let s in n)e[s]=n[s]}return e}function ad(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function P0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Eh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}var gn={clone:cs,merge:on},I0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,L0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Dt=class extends Qn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=I0,this.fragmentShader=L0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cs(e.uniforms),this.uniformsGroups=P0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ke().setHex(s.value);break;case"v2":this.uniforms[n].value=new ue().fromArray(s.value);break;case"v3":this.uniforms[n].value=new F().fromArray(s.value);break;case"v4":this.uniforms[n].value=new St().fromArray(s.value);break;case"m3":this.uniforms[n].value=new tt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new it().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Xs=class extends Dt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ht=class extends Qn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=js,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var ia=class extends Qn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=js,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},sa=class extends Qn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=js,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=Zo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Do=class extends Qn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},No=class extends Qn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ps(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Yc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ui=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Uo=class extends Ui{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Kc,endingEnd:Kc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case jc:r=e,o=2*t-n;break;case Qc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case jc:a=e,l=2*n-t;break;case Qc:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),v=g*g,m=v*g,p=-u*m+2*u*v-u*g,S=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*g+1,T=(-1-f)*m+(1.5+f)*v+.5*g,y=f*m-f*v;for(let b=0;b!==o;++b)r[b]=p*a[h+b]+S*a[c+b]+T*a[l+b]+y*a[d+b];return r}},Fo=class extends Ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},Oo=class extends Ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Bo=class extends Ui{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-t)/(s-t),v=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*v+a[l+m]*g;return r}let u=o*2,f=e-1;for(let g=0;g!==o;++g){let v=a[c+g],m=a[l+g],p=f*u+g*2,S=d[p],T=d[p+1],y=e*u+g*2,b=h[y],w=h[y+1],L=N0(n,t,S,b,s);r[g]=jd(L,v,T,w,m)}return r}};function jd(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function D0(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function N0(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=jd(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=D0(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var En=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ps(t,this.TimeBufferType),this.values=Ps(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ps(e.times,Array),values:Ps(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Yc(e.settings)&&(n.settings={inTangents:Ps(e.settings.inTangents,Array),outTangents:Ps(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Oo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Fo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Uo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Bo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Pr:t=this.InterpolantFactoryMethodDiscrete;break;case yo:t=this.InterpolantFactoryMethodLinear;break;case co:t=this.InterpolantFactoryMethodSmooth;break;case Jc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return He("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pr;case this.InterpolantFactoryMethodLinear:return yo;case this.InterpolantFactoryMethodSmooth:return co;case this.InterpolantFactoryMethodBezier:return Jc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Yc(this.settings)&&(od(this.settings.inTangents,e),od(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&($e("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&($e("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){$e("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){$e("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Up(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){$e("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===co,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let v=t[d+g];if(v!==t[u+g]||v!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Yc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function od(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}En.prototype.ValueTypeName="";En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=yo;var Fi=class extends En{constructor(e,t,n){super(e,t,n)}};Fi.prototype.ValueTypeName="bool";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=Pr;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var ko=class extends En{constructor(e,t,n,s){super(e,t,n,s)}};ko.prototype.ValueTypeName="color";var zo=class extends En{constructor(e,t,n,s){super(e,t,n,s)}};zo.prototype.ValueTypeName="number";var Vo=class extends Ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Jn.slerpFlat(r,0,a,c-o,a,c,l);return r}},ra=class extends En{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Vo(this.times,this.values,this.getValueSize(),e)}};ra.prototype.ValueTypeName="quaternion";ra.prototype.InterpolantFactoryMethodSmooth=void 0;var Oi=class extends En{constructor(e,t,n){super(e,t,n)}};Oi.prototype.ValueTypeName="string";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=Pr;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var Go=class extends En{constructor(e,t,n,s){super(e,t,n,s)}};Go.prototype.ValueTypeName="vector";var Ho=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Qd=new Ho,Wo=class{constructor(e){this.manager=e!==void 0?e:Qd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Wo.DEFAULT_MATERIAL_NAME="__DEFAULT";var qs=class extends Yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ys=class extends qs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},$c=new it,ld=new F,cd=new F,aa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.mapType=an,this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zs,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ld.setFromMatrixPosition(e.matrixWorld),t.position.copy(ld),cd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){$c.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix($c,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Us||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply($c)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},oo=new F,lo=new Jn,qn=new F,oa=class extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=On,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(oo,lo,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oo,lo,qn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(oo,lo,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oo,lo,qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ii=new F,hd=new ue,ud=new ue,en=class extends oa{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Mo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Mc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mo*2*Math.atan(Math.tan(Mc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z)}getViewSize(e,t){return this.getViewBounds(e,hd,ud),t.subVectors(ud,hd)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Mc*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var sh=class extends aa{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0}},is=class extends qs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new sh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Bi=class extends oa{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},rh=class extends aa{constructor(){super(new Bi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$s=class extends qs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new rh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Is=-90,Ls=1,Xo=class extends Yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new en(Is,Ls,e,t);s.layers=this.layers,this.add(s);let r=new en(Is,Ls,e,t);r.layers=this.layers,this.add(r);let a=new en(Is,Ls,e,t);a.layers=this.layers,this.add(a);let o=new en(Is,Ls,e,t);o.layers=this.layers,this.add(o);let l=new en(Is,Ls,e,t);l.layers=this.layers,this.add(l);let c=new en(Is,Ls,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===On)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Us)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},qo=class extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},la=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=U0.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function U0(){this._document.hidden===!1&&this.reset()}var wh="\\[\\]\\.:\\/",F0=new RegExp("["+wh+"]","g"),Th="[^"+wh+"]",O0="[^"+wh.replace("\\.","")+"]",B0=/((?:WC+[\/:])*)/.source.replace("WC",Th),k0=/(WCOD+)?/.source.replace("WCOD",O0),z0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Th),V0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Th),G0=new RegExp("^"+B0+k0+z0+V0+"$"),H0=["material","materials","bones","map"],ah=class{constructor(e,t,n){let s=n||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Lt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(F0,"")}static parseTrackName(e){let t=G0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);H0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){He("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){$e("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){$e("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){$e("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){$e("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){$e("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;$e("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Lt.Composite=ah;Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Oy=new Float32Array(1);var Lh=class Lh{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Lh.prototype.isMatrix2=!0;var oh=Lh;function Ah(i,e,t,n){let s=W0(n);switch(t){case vh:return i*e;case nl:return i*e/s.components*s.byteLength;case il:return i*e/s.components*s.byteLength;case Hi:return i*e*2/s.components*s.byteLength;case sl:return i*e*2/s.components*s.byteLength;case yh:return i*e*3/s.components*s.byteLength;case un:return i*e*4/s.components*s.byteLength;case rl:return i*e*4/s.components*s.byteLength;case va:case ya:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ma:case Sa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ol:case cl:return Math.max(i,16)*Math.max(e,8)/4;case al:case ll:return Math.max(i,8)*Math.max(e,8)/2;case hl:case ul:case fl:case pl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case dl:case ba:case ml:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case gl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case _l:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case vl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case yl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ml:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Sl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case bl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case El:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case wl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Tl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Al:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Rl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Cl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Pl:case Il:case Ll:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Dl:case Nl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ea:case Ul:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function W0(i){switch(i){case an:case mh:return{byteLength:1,components:1};case Ks:case gh:case Qt:return{byteLength:2,components:1};case el:case tl:return{byteLength:2,components:4};case Vn:case Qo:case wn:return{byteLength:4,components:1};case xh:case _h:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Sf(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function q0(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let v=d[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Y0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$0=`#ifdef USE_ALPHAHASH
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
#endif`,Z0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,J0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,K0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,j0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Q0=`#ifdef USE_AOMAP
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
#endif`,em=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tm=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,nm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,im=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,am=`#ifdef USE_IRIDESCENCE
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
#endif`,om=`#ifdef USE_BUMPMAP
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
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,fm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,pm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,mm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,gm=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,xm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_m=`vec3 transformedNormal = objectNormal;
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
#endif`,vm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ym=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Em=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Tm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Am=`#ifdef USE_ENVMAP
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
#endif`,Rm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Pm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Im=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nm=`#ifdef USE_GRADIENTMAP
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
}`,Um=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bm=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,km=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,zm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Xm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qm=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ym=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$m=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zm=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Jm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Km=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,eg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ng=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ig=`#if defined( USE_POINTS_UV )
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
#endif`,sg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ag=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,og=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cg=`#ifdef USE_MORPHTARGETS
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
#endif`,hg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ug=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,gg=`#ifdef USE_NORMALMAP
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
#endif`,xg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_g=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,bg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Eg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ag=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Pg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,Ig=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Lg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,Dg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ng=`#ifdef USE_SKINNING
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
#endif`,Ug=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fg=`#ifdef USE_SKINNING
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
#endif`,Og=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vg=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Gg=`#ifdef USE_TRANSMISSION
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
#endif`,Hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Yg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$g=`uniform sampler2D t2D;
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
}`,Zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qg=`#include <common>
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
}`,ex=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,tx=`#define DISTANCE
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
}`,nx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rx=`uniform float scale;
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
}`,ax=`uniform vec3 diffuse;
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
}`,ox=`#include <common>
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
}`,lx=`uniform vec3 diffuse;
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
}`,cx=`#define LAMBERT
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
}`,hx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,ux=`#define MATCAP
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
}`,dx=`#define MATCAP
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
}`,fx=`#define NORMAL
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
}`,px=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mx=`#define PHONG
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
}`,gx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,xx=`#define STANDARD
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
}`,_x=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,vx=`#define TOON
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
}`,yx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,Mx=`uniform float size;
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
}`,Sx=`uniform vec3 diffuse;
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
}`,bx=`#include <common>
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
}`,Ex=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,wx=`uniform float rotation;
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
}`,Tx=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:Y0,alphahash_pars_fragment:$0,alphamap_fragment:Z0,alphamap_pars_fragment:J0,alphatest_fragment:K0,alphatest_pars_fragment:j0,aomap_fragment:Q0,aomap_pars_fragment:em,batching_pars_vertex:tm,batching_vertex:nm,begin_vertex:im,beginnormal_vertex:sm,bsdfs:rm,iridescence_fragment:am,bumpmap_pars_fragment:om,clipping_planes_fragment:lm,clipping_planes_pars_fragment:cm,clipping_planes_pars_vertex:hm,clipping_planes_vertex:um,color_fragment:dm,color_pars_fragment:fm,color_pars_vertex:pm,color_vertex:mm,common:gm,cube_uv_reflection_fragment:xm,defaultnormal_vertex:_m,displacementmap_pars_vertex:vm,displacementmap_vertex:ym,emissivemap_fragment:Mm,emissivemap_pars_fragment:Sm,colorspace_fragment:bm,colorspace_pars_fragment:Em,envmap_fragment:wm,envmap_common_pars_fragment:Tm,envmap_pars_fragment:Am,envmap_pars_vertex:Rm,envmap_physical_pars_fragment:km,envmap_vertex:Cm,fog_vertex:Pm,fog_pars_vertex:Im,fog_fragment:Lm,fog_pars_fragment:Dm,gradientmap_pars_fragment:Nm,lightmap_pars_fragment:Um,lights_lambert_fragment:Fm,lights_lambert_pars_fragment:Om,lights_pars_begin:Bm,lights_toon_fragment:zm,lights_toon_pars_fragment:Vm,lights_phong_fragment:Gm,lights_phong_pars_fragment:Hm,lights_physical_fragment:Wm,lights_physical_pars_fragment:Xm,lights_fragment_begin:qm,lights_fragment_maps:Ym,lights_fragment_end:$m,lightprobes_pars_fragment:Zm,logdepthbuf_fragment:Jm,logdepthbuf_pars_fragment:Km,logdepthbuf_pars_vertex:jm,logdepthbuf_vertex:Qm,map_fragment:eg,map_pars_fragment:tg,map_particle_fragment:ng,map_particle_pars_fragment:ig,metalnessmap_fragment:sg,metalnessmap_pars_fragment:rg,morphinstance_vertex:ag,morphcolor_vertex:og,morphnormal_vertex:lg,morphtarget_pars_vertex:cg,morphtarget_vertex:hg,normal_fragment_begin:ug,normal_fragment_maps:dg,normal_pars_fragment:fg,normal_pars_vertex:pg,normal_vertex:mg,normalmap_pars_fragment:gg,clearcoat_normal_fragment_begin:xg,clearcoat_normal_fragment_maps:_g,clearcoat_pars_fragment:vg,iridescence_pars_fragment:yg,opaque_fragment:Mg,packing:Sg,premultiplied_alpha_fragment:bg,project_vertex:Eg,dithering_fragment:wg,dithering_pars_fragment:Tg,roughnessmap_fragment:Ag,roughnessmap_pars_fragment:Rg,shadowmap_pars_fragment:Cg,shadowmap_pars_vertex:Pg,shadowmap_vertex:Ig,shadowmask_pars_fragment:Lg,skinbase_vertex:Dg,skinning_pars_vertex:Ng,skinning_vertex:Ug,skinnormal_vertex:Fg,specularmap_fragment:Og,specularmap_pars_fragment:Bg,tonemapping_fragment:kg,tonemapping_pars_fragment:zg,transmission_fragment:Vg,transmission_pars_fragment:Gg,uv_pars_fragment:Hg,uv_pars_vertex:Wg,uv_vertex:Xg,worldpos_vertex:qg,background_vert:Yg,background_frag:$g,backgroundCube_vert:Zg,backgroundCube_frag:Jg,cube_vert:Kg,cube_frag:jg,depth_vert:Qg,depth_frag:ex,distance_vert:tx,distance_frag:nx,equirect_vert:ix,equirect_frag:sx,linedashed_vert:rx,linedashed_frag:ax,meshbasic_vert:ox,meshbasic_frag:lx,meshlambert_vert:cx,meshlambert_frag:hx,meshmatcap_vert:ux,meshmatcap_frag:dx,meshnormal_vert:fx,meshnormal_frag:px,meshphong_vert:mx,meshphong_frag:gx,meshphysical_vert:xx,meshphysical_frag:_x,meshtoon_vert:vx,meshtoon_frag:yx,points_vert:Mx,points_frag:Sx,shadow_vert:bx,shadow_frag:Ex,sprite_vert:wx,sprite_frag:Tx},Me={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},ri={basic:{uniforms:on([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:on([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new ke(0)},envMapIntensity:{value:1}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:on([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:on([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:on([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new ke(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:on([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:on([Me.points,Me.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:on([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:on([Me.common,Me.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:on([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:on([Me.sprite,Me.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distance:{uniforms:on([Me.common,Me.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distance_vert,fragmentShader:at.distance_frag},shadow:{uniforms:on([Me.lights,Me.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};ri.physical={uniforms:on([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};var Bl={r:0,b:0,g:0},Ax=new it,bf=new tt;bf.set(-1,0,0,0,1,0,0,0,1);function Rx(i,e,t,n,s,r){let a=new ke(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(S){let T=S.isScene===!0?S.background:null;if(T&&T.isTexture){let y=S.backgroundBlurriness>0;T=e.get(T,y)}return T}function g(S){let T=!1,y=f(S);y===null?m(a,o):y&&y.isColor&&(m(y,1),T=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(S,T){let y=f(T);y&&(y.isCubeTexture||y.mapping===xa)?(c===void 0&&(c=new Ve(new hn(1,1,1),new Dt({name:"BackgroundCubeMaterial",uniforms:cs(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,w,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ax.makeRotationFromEuler(T.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(bf),c.material.toneMapped=ct.getTransfer(y.colorSpace)!==_t,(h!==y||d!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ve(new mn(2,2),new Dt({name:"BackgroundMaterial",uniforms:cs(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=ct.getTransfer(y.colorSpace)!==_t,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,T){S.getRGB(Bl,Eh(i)),t.buffers.color.setClear(Bl.r,Bl.g,Bl.b,T,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,T=1){a.set(S),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:g,addToRenderList:v,dispose:p}}function Cx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(I,M,C,P,R){let U=!1,V=d(I,P,C,M);r!==V&&(r=V,c(r.object)),U=f(I,P,C,R),U&&g(I,P,C,R),R!==null&&e.update(R,i.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,y(I,M,C,P),R!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(R).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function d(I,M,C,P){let R=P.wireframe===!0,U=n[M.id];U===void 0&&(U={},n[M.id]=U);let V=I.isInstancedMesh===!0?I.id:0,$=U[V];$===void 0&&($={},U[V]=$);let z=$[C.id];z===void 0&&(z={},$[C.id]=z);let H=z[R];return H===void 0&&(H=u(l()),z[R]=H),H}function u(I){let M=[],C=[],P=[];for(let R=0;R<t;R++)M[R]=0,C[R]=0,P[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:C,attributeDivisors:P,object:I,attributes:{},index:null}}function f(I,M,C,P){let R=r.attributes,U=M.attributes,V=0,$=C.getAttributes();for(let z in $)if($[z].location>=0){let J=R[z],de=U[z];if(de===void 0&&(z==="instanceMatrix"&&I.instanceMatrix&&(de=I.instanceMatrix),z==="instanceColor"&&I.instanceColor&&(de=I.instanceColor)),J===void 0||J.attribute!==de||de&&J.data!==de.data)return!0;V++}return r.attributesNum!==V||r.index!==P}function g(I,M,C,P){let R={},U=M.attributes,V=0,$=C.getAttributes();for(let z in $)if($[z].location>=0){let J=U[z];J===void 0&&(z==="instanceMatrix"&&I.instanceMatrix&&(J=I.instanceMatrix),z==="instanceColor"&&I.instanceColor&&(J=I.instanceColor));let de={};de.attribute=J,J&&J.data&&(de.data=J.data),R[z]=de,V++}r.attributes=R,r.attributesNum=V,r.index=P}function v(){let I=r.newAttributes;for(let M=0,C=I.length;M<C;M++)I[M]=0}function m(I){p(I,0)}function p(I,M){let C=r.newAttributes,P=r.enabledAttributes,R=r.attributeDivisors;C[I]=1,P[I]===0&&(i.enableVertexAttribArray(I),P[I]=1),R[I]!==M&&(i.vertexAttribDivisor(I,M),R[I]=M)}function S(){let I=r.newAttributes,M=r.enabledAttributes;for(let C=0,P=M.length;C<P;C++)M[C]!==I[C]&&(i.disableVertexAttribArray(C),M[C]=0)}function T(I,M,C,P,R,U,V){V===!0?i.vertexAttribIPointer(I,M,C,R,U):i.vertexAttribPointer(I,M,C,P,R,U)}function y(I,M,C,P){v();let R=P.attributes,U=C.getAttributes(),V=M.defaultAttributeValues;for(let $ in U){let z=U[$];if(z.location>=0){let H=R[$];if(H===void 0&&($==="instanceMatrix"&&I.instanceMatrix&&(H=I.instanceMatrix),$==="instanceColor"&&I.instanceColor&&(H=I.instanceColor)),H!==void 0){let J=H.normalized,de=H.itemSize,fe=e.get(H);if(fe===void 0)continue;let We=fe.buffer,Ye=fe.type,nt=fe.bytesPerElement,Z=Ye===i.INT||Ye===i.UNSIGNED_INT||H.gpuType===Qo;if(H.isInterleavedBufferAttribute){let Q=H.data,le=Q.stride,Pe=H.offset;if(Q.isInstancedInterleavedBuffer){for(let we=0;we<z.locationSize;we++)p(z.location+we,Q.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let we=0;we<z.locationSize;we++)m(z.location+we);i.bindBuffer(i.ARRAY_BUFFER,We);for(let we=0;we<z.locationSize;we++)T(z.location+we,de/z.locationSize,Ye,J,le*nt,(Pe+de/z.locationSize*we)*nt,Z)}else{if(H.isInstancedBufferAttribute){for(let Q=0;Q<z.locationSize;Q++)p(z.location+Q,H.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let Q=0;Q<z.locationSize;Q++)m(z.location+Q);i.bindBuffer(i.ARRAY_BUFFER,We);for(let Q=0;Q<z.locationSize;Q++)T(z.location+Q,de/z.locationSize,Ye,J,de*nt,de/z.locationSize*Q*nt,Z)}}else if(V!==void 0){let J=V[$];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(z.location,J);break;case 3:i.vertexAttrib3fv(z.location,J);break;case 4:i.vertexAttrib4fv(z.location,J);break;default:i.vertexAttrib1fv(z.location,J)}}}}S()}function b(){A();for(let I in n){let M=n[I];for(let C in M){let P=M[C];for(let R in P){let U=P[R];for(let V in U)h(U[V].object),delete U[V];delete P[R]}}delete n[I]}}function w(I){if(n[I.id]===void 0)return;let M=n[I.id];for(let C in M){let P=M[C];for(let R in P){let U=P[R];for(let V in U)h(U[V].object),delete U[V];delete P[R]}}delete n[I.id]}function L(I){for(let M in n){let C=n[M];for(let P in C){let R=C[P];if(R[I.id]===void 0)continue;let U=R[I.id];for(let V in U)h(U[V].object),delete U[V];delete R[I.id]}}}function x(I){for(let M in n){let C=n[M],P=I.isInstancedMesh===!0?I.id:0,R=C[P];if(R!==void 0){for(let U in R){let V=R[U];for(let $ in V)h(V[$].object),delete V[$];delete R[U]}delete C[P],Object.keys(C).length===0&&delete n[M]}}}function A(){N(),a=!0,r!==s&&(r=s,c(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:N,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function Px(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Ix(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(L){return!(L!==un&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){let x=L===Qt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==an&&L!==wn&&!x&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(He("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&He("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:T,maxFragmentUniforms:y,maxSamples:b,samples:w}}function Lx(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Fn,o=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let S=r?0:n,T=S*4,y=p.clippingState||null;l.value=y,y=h(g,u,T,f);for(let b=0;b!==T;++b)y[b]=t[b];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let p=f+v*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,y=f;T!==v;++T,y+=4)a.copy(d[T]).applyMatrix4(S,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}var er=4,Dx=6,Nx=20,Ux=256,wa=new Bi,ef=new ke,Dh=null,Nh=0,Uh=0,Fh=!1,Fx=new F,hs=new F,nr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Fx}=r;Dh=this._renderer.getRenderTarget(),Nh=this._renderer.getActiveCubeFace(),Uh=this._renderer.getActiveMipmapLevel(),Fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Dh,Nh,Uh),this._renderer.xr.enabled=Fh,e.scissorTest=!1,Qs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zi||e.mapping===os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dh=this._renderer.getRenderTarget(),Nh=this._renderer.getActiveCubeFace(),Uh=this._renderer.getActiveMipmapLevel(),Fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:Qt,format:un,colorSpace:Ir,depthBuffer:!1},s=tf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tf(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ox(r)),this._blurMaterial=kx(r,e,t),this._ggxMaterial=Bx(r,e,t)}return s}_compileMaterial(e){let t=new Ve(new Ot,e);this._renderer.compile(t,wa)}_sceneToCubeUV(e,t,n,s,r){let l=new en(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(ef),d.toneMapping=zn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ve(new hn,new Di({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,p=!1,S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,p=!0):(m.color.copy(ef),p=!0);for(let T=0;T<6;T++){let y=T%3;y===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[T],r.y,r.z)):y===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[T]));let b=this._cubeSize;Qs(s,y*b,T>2?b:0,b,b),d.setRenderTarget(s),p&&d.render(v,l),d.render(e,l)}d.toneMapping=f,d.autoClear=u,e.background=S}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===zi||e.mapping===os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Qs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,wa)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:g}=this,v=this._sizeLods[n],m=3*v*(n>g-er?n-g+er:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,Qs(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(o,wa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Qs(e,m,p,3*v,2*v),s.setRenderTarget(e),s.render(o,wa)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-er?s-this._lodMax+er:0),u=4*(this._cubeSize-h);Qs(t,d,u,3*h,2*h),a.setRenderTarget(t),a.render(l,wa)}};function Ox(i){let e=[],t=[],n=i,s=i-er+1+Dx;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,g=new Float32Array(f*u*d),v=new Float32Array(f*u*d);for(let p=0;p<d;p++){let S=p%3*2/3-1,T=p>2?0:-1,y=[S,T,0,S+2/3,T,0,S+2/3,T+1,0,S,T,0,S+2/3,T+1,0,S,T+1,0];g.set(y,f*u*p);for(let b=0;b<u;b++){let w=h[b*2]*2-1,L=h[b*2+1]*2-1;p===0?hs.set(1,L,w):p===1?hs.set(-w,1,-L):p===2?hs.set(-w,L,1):p===3?hs.set(-1,L,-w):p===4?hs.set(-w,-1,L):hs.set(w,L,-1),hs.toArray(v,(p*u+b)*f)}}let m=new Ot;m.setAttribute("position",new zt(g,f)),m.setAttribute("outputDirection",new zt(v,f)),t.push(new Ve(m,null)),n>er&&n--}return{lodMeshes:t,sizeLods:e}}function tf(i,e,t){let n=new Gt(i,e,t);return n.texture.mapping=xa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Bx(i,e,t){return new Dt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ux,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Gl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Wt,depthTest:!1,depthWrite:!1})}function kx(i,e,t){return new Dt({name:"SphericalGaussianBlur",defines:{SAMPLES:Nx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Gl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Wt,depthTest:!1,depthWrite:!1})}function nf(){return new Dt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gl(),fragmentShader:`

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
		`,blending:Wt,depthTest:!1,depthWrite:!1})}function sf(){return new Dt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wt,depthTest:!1,depthWrite:!1})}function Gl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var zl=class extends Gt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Hr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new hn(5,5,5),r=new Dt({name:"CubemapFromEquirect",uniforms:cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$t,blending:Wt});r.uniforms.tEquirect.value=t;let a=new Ve(s,r),o=t.minFilter;return t.minFilter===Vi&&(t.minFilter=tn),new Xo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function zx(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Jo||f===Ko)if(e.has(u)){let g=e.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let v=new zl(g.height);return v.fromEquirectangularTexture(i,u),e.set(u,v),u.addEventListener("dispose",c),o(v.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,g=f===Jo||f===Ko,v=f===zi||f===os;if(g||v){let m=t.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new nr(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let S=u.image;return g&&S&&S.height>0||v&&S&&l(S)?(n===null&&(n=new nr(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===Jo?u.mapping=zi:f===Ko&&(u.mapping=os),u}function l(u){let f=0,g=6;for(let v=0;v<g;v++)u[v]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Vx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&es("WebGLRenderer: "+n+" extension not supported."),s}}}function Gx(i,e,t,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)e.update(u[f],i.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,v=0;if(g===void 0)return;if(f!==null){let S=f.array;v=f.version;for(let T=0,y=S.length;T<y;T+=3){let b=S[T+0],w=S[T+1],L=S[T+2];u.push(b,w,w,L,L,b)}}else{let S=g.array;v=g.version;for(let T=0,y=S.length/3-1;T<y;T+=3){let b=T+0,w=T+1,L=T+2;u.push(b,w,w,L,L,b)}}let m=new(g.count>=65535?Or:ts)(u,1);m.version=v;let p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Hx(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),t.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let v=0;for(let m=0;m<f;m++)v+=u[m];t.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Wx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:$e("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Xx(i,e,t){let n=new WeakMap,s=new St;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let A=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],T=0;f===!0&&(T=1),g===!0&&(T=2),v===!0&&(T=3);let y=o.attributes.position.count*T,b=1;y>e.maxTextureSize&&(b=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let w=new Float32Array(y*b*4*d),L=new Nr(w,y,b,d);L.type=wn,L.needsUpdate=!0;let x=T*4;for(let N=0;N<d;N++){let I=m[N],M=p[N],C=S[N],P=y*b*4*N;for(let R=0;R<I.count;R++){let U=R*x;f===!0&&(s.fromBufferAttribute(I,R),w[P+U+0]=s.x,w[P+U+1]=s.y,w[P+U+2]=s.z,w[P+U+3]=0),g===!0&&(s.fromBufferAttribute(M,R),w[P+U+4]=s.x,w[P+U+5]=s.y,w[P+U+6]=s.z,w[P+U+7]=0),v===!0&&(s.fromBufferAttribute(C,R),w[P+U+8]=s.x,w[P+U+9]=s.y,w[P+U+10]=s.z,w[P+U+11]=C.itemSize===4?s.w:1)}}u={count:d,texture:L,size:new ue(y,b)},n.set(o,u),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function qx(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Yx={[ua]:"LINEAR_TONE_MAPPING",[da]:"REINHARD_TONE_MAPPING",[fa]:"CINEON_TONE_MAPPING",[as]:"ACES_FILMIC_TONE_MAPPING",[ma]:"AGX_TONE_MAPPING",[ga]:"NEUTRAL_TONE_MAPPING",[pa]:"CUSTOM_TONE_MAPPING"};function $x(i,e,t,n,s,r){let a=new Gt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Ot;c.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new dt([0,2,0,0,2,0],2));let h=new Xs({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Ve(c,h),u=new Bi(-1,1,1,-1,0,1),f=null,g=null,v=!1,m,p=null,S=[],T=!1;this.setSize=function(y,b){a.setSize(y,b),o!==null&&o.setSize(y,b),l!==null&&l.setSize(y,b);for(let w=0;w<S.length;w++){let L=S[w];L.setSize&&L.setSize(y,b)}},this.setEffects=function(y){S=y,T=S.length>0&&S[0].isRenderPass===!0;let b=a.width,w=a.height;S.length>0&&o===null&&(o=new Gt(b,w,{type:Qt,depthBuffer:!1,stencilBuffer:!1}),l=new Gt(b,w,{type:Qt,depthBuffer:!1,stencilBuffer:!1}));for(let L=0;L<S.length;L++){let x=S[L];x.setSize&&x.setSize(b,w)}},this.begin=function(y,b){if(v||y.toneMapping===zn&&S.length===0)return!1;if(p=b,b!==null){let w=b.width,L=b.height;(a.width!==w||a.height!==L)&&this.setSize(w,L)}return T===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=zn,!0},this.hasRenderPass=function(){return T},this.end=function(y,b){y.toneMapping=m,v=!0;let w=a,L=o;for(let x=0;x<S.length;x++){let A=S[x];A.enabled!==!1&&(A.render(y,L,w,b),A.needsSwap!==!1&&(w=L,L=L===o?l:o))}if(f!==y.outputColorSpace||g!==y.toneMapping){f=y.outputColorSpace,g=y.toneMapping,h.defines={},ct.getTransfer(f)===_t&&(h.defines.SRGB_TRANSFER="");let x=Yx[g];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,y.setRenderTarget(p),y.render(d,u),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Ef=new cn,kh=new ti(1,1),wf=new Nr,Tf=new Eo,Af=new Hr,rf=[],af=[],of=new Float32Array(16),lf=new Float32Array(9),cf=new Float32Array(4);function ir(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=rf[s];if(r===void 0&&(r=new Float32Array(s),rf[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Zt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Jt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Hl(i,e){let t=af[e];t===void 0&&(t=new Int32Array(e),af[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Zx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Jx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2fv(this.addr,e),Jt(t,e)}}function Kx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;i.uniform3fv(this.addr,e),Jt(t,e)}}function jx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4fv(this.addr,e),Jt(t,e)}}function Qx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,n))return;cf.set(n),i.uniformMatrix2fv(this.addr,!1,cf),Jt(t,n)}}function e_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,n))return;lf.set(n),i.uniformMatrix3fv(this.addr,!1,lf),Jt(t,n)}}function t_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,n))return;of.set(n),i.uniformMatrix4fv(this.addr,!1,of),Jt(t,n)}}function n_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function i_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2iv(this.addr,e),Jt(t,e)}}function s_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3iv(this.addr,e),Jt(t,e)}}function r_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4iv(this.addr,e),Jt(t,e)}}function a_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function o_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2uiv(this.addr,e),Jt(t,e)}}function l_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3uiv(this.addr,e),Jt(t,e)}}function c_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4uiv(this.addr,e),Jt(t,e)}}function h_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(kh.compareFunction=t.isReversedDepthBuffer()?Ol:Fl,r=kh):r=Ef,t.setTexture2D(e||r,s)}function u_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Tf,s)}function d_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Af,s)}function f_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||wf,s)}function p_(i){switch(i){case 5126:return Zx;case 35664:return Jx;case 35665:return Kx;case 35666:return jx;case 35674:return Qx;case 35675:return e_;case 35676:return t_;case 5124:case 35670:return n_;case 35667:case 35671:return i_;case 35668:case 35672:return s_;case 35669:case 35673:return r_;case 5125:return a_;case 36294:return o_;case 36295:return l_;case 36296:return c_;case 35678:case 36198:case 36298:case 36306:case 35682:return h_;case 35679:case 36299:case 36307:return u_;case 35680:case 36300:case 36308:case 36293:return d_;case 36289:case 36303:case 36311:case 36292:return f_}}function m_(i,e){i.uniform1fv(this.addr,e)}function g_(i,e){let t=ir(e,this.size,2);i.uniform2fv(this.addr,t)}function x_(i,e){let t=ir(e,this.size,3);i.uniform3fv(this.addr,t)}function __(i,e){let t=ir(e,this.size,4);i.uniform4fv(this.addr,t)}function v_(i,e){let t=ir(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function y_(i,e){let t=ir(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function M_(i,e){let t=ir(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function S_(i,e){i.uniform1iv(this.addr,e)}function b_(i,e){i.uniform2iv(this.addr,e)}function E_(i,e){i.uniform3iv(this.addr,e)}function w_(i,e){i.uniform4iv(this.addr,e)}function T_(i,e){i.uniform1uiv(this.addr,e)}function A_(i,e){i.uniform2uiv(this.addr,e)}function R_(i,e){i.uniform3uiv(this.addr,e)}function C_(i,e){i.uniform4uiv(this.addr,e)}function P_(i,e,t){let n=this.cache,s=e.length,r=Hl(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),Jt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=kh:a=Ef;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function I_(i,e,t){let n=this.cache,s=e.length,r=Hl(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),Jt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Tf,r[a])}function L_(i,e,t){let n=this.cache,s=e.length,r=Hl(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),Jt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Af,r[a])}function D_(i,e,t){let n=this.cache,s=e.length,r=Hl(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),Jt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||wf,r[a])}function N_(i){switch(i){case 5126:return m_;case 35664:return g_;case 35665:return x_;case 35666:return __;case 35674:return v_;case 35675:return y_;case 35676:return M_;case 5124:case 35670:return S_;case 35667:case 35671:return b_;case 35668:case 35672:return E_;case 35669:case 35673:return w_;case 5125:return T_;case 36294:return A_;case 36295:return R_;case 36296:return C_;case 35678:case 36198:case 36298:case 36306:case 35682:return P_;case 35679:case 36299:case 36307:return I_;case 35680:case 36300:case 36308:case 36293:return L_;case 36289:case 36303:case 36311:case 36292:return D_}}var zh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=p_(t.type)}},Vh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=N_(t.type)}},Gh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Oh=/(\w+)(\])?(\[|\.)?/g;function hf(i,e){i.seq.push(e),i.map[e.id]=e}function U_(i,e,t){let n=i.name,s=n.length;for(Oh.lastIndex=0;;){let r=Oh.exec(n),a=Oh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){hf(t,c===void 0?new zh(o,i,e):new Vh(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Gh(o),hf(t,d)),t=d}}}var tr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);U_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function uf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var F_=37297,O_=0;function B_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var df=new tt;function k_(i){ct._getMatrix(df,ct.workingColorSpace,i);let e=`mat3( ${df.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(i)){case Lr:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ff(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+B_(i.getShaderSource(e),o)}else return r}function z_(i,e){let t=k_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var V_={[ua]:"Linear",[da]:"Reinhard",[fa]:"Cineon",[as]:"ACESFilmic",[ma]:"AgX",[ga]:"Neutral",[pa]:"Custom"};function G_(i,e){let t=V_[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var kl=new F;function H_(){ct.getLuminanceCoefficients(kl);let i=kl.x.toFixed(4),e=kl.y.toFixed(4),t=kl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function W_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Aa).join(`
`)}function X_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function q_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Aa(i){return i!==""}function pf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Y_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hh(i){return i.replace(Y_,Z_)}var $_=new Map;function Z_(i,e){let t=at[e];if(t===void 0){let n=$_.get(e);if(n!==void 0)t=at[n],He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Hh(t)}var J_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gf(i){return i.replace(J_,K_)}function K_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xf(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var j_={[ss]:"SHADOWMAP_TYPE_PCF",[Zs]:"SHADOWMAP_TYPE_VSM"};function Q_(i){return j_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ev={[zi]:"ENVMAP_TYPE_CUBE",[os]:"ENVMAP_TYPE_CUBE",[xa]:"ENVMAP_TYPE_CUBE_UV"};function tv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":ev[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var nv={[os]:"ENVMAP_MODE_REFRACTION"};function iv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":nv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var sv={[Zo]:"ENVMAP_BLENDING_MULTIPLY",[Cd]:"ENVMAP_BLENDING_MIX",[Pd]:"ENVMAP_BLENDING_ADD"};function rv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":sv[i.combine]||"ENVMAP_BLENDING_NONE"}function av(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ov(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Q_(t),c=tv(t),h=iv(t),d=rv(t),u=av(t),f=W_(t),g=X_(r),v=s.createProgram(),m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Aa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Aa).join(`
`),p.length>0&&(p+=`
`)):(m=[xf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Aa).join(`
`),p=[xf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zn?"#define TONE_MAPPING":"",t.toneMapping!==zn?at.tonemapping_pars_fragment:"",t.toneMapping!==zn?G_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,z_("linearToOutputTexel",t.outputColorSpace),H_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Aa).join(`
`)),a=Hh(a),a=pf(a,t),a=mf(a,t),o=Hh(o),o=pf(o,t),o=mf(o,t),a=gf(a),o=gf(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let T=S+m+a,y=S+p+o,b=uf(s,s.VERTEX_SHADER,T),w=uf(s,s.FRAGMENT_SHADER,y);s.attachShader(v,b),s.attachShader(v,w),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function L(I){if(i.debug.checkShaderErrors){let M=s.getProgramInfoLog(v)||"",C=s.getShaderInfoLog(b)||"",P=s.getShaderInfoLog(w)||"",R=M.trim(),U=C.trim(),V=P.trim(),$=!0,z=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,b,w);else{let H=ff(s,b,"vertex"),J=ff(s,w,"fragment");$e("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+R+`
`+H+`
`+J)}else R!==""?He("WebGLProgram: Program Info Log:",R):(U===""||V==="")&&(z=!1);z&&(I.diagnostics={runnable:$,programLog:R,vertexShader:{log:U,prefix:m},fragmentShader:{log:V,prefix:p}})}s.deleteShader(b),s.deleteShader(w),x=new tr(s,v),A=q_(s,v)}let x;this.getUniforms=function(){return x===void 0&&L(this),x};let A;this.getAttributes=function(){return A===void 0&&L(this),A};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(v,F_)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=O_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=w,this}var lv=0,Wh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Xh(e),t.set(e,n)),n}},Xh=class{constructor(e){this.id=lv++,this.code=e,this.usedTimes=0}};function cv(i){return i===Hi||i===ba||i===Ea}function hv(i,e,t,n,s,r){let a=new Ur,o=new Wh,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function v(x,A,N,I,M,C){let P=I.fog,R=M.geometry,U=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,$=e.get(x.envMap||U,V),z=$&&$.mapping===xa?$.image.height:null,H=f[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&He("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let J=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,de=J!==void 0?J.length:0,fe=0;R.morphAttributes.position!==void 0&&(fe=1),R.morphAttributes.normal!==void 0&&(fe=2),R.morphAttributes.color!==void 0&&(fe=3);let We,Ye,nt,Z;if(H){let At=ri[H];We=At.vertexShader,Ye=At.fragmentShader}else{We=x.vertexShader,Ye=x.fragmentShader;let At=o.getVertexShaderStage(x),vt=o.getFragmentShaderStage(x);o.update(x,At,vt),nt=At.id,Z=vt.id}let Q=i.getRenderTarget(),le=i.state.buffers.depth.getReversed(),Pe=M.isInstancedMesh===!0,we=M.isBatchedMesh===!0,Xe=!!x.map,mt=!!x.matcap,ne=!!$,re=!!x.aoMap,oe=!!x.lightMap,ce=!!x.bumpMap&&x.wireframe===!1,pe=!!x.normalMap,Ge=!!x.displacementMap,Oe=!!x.emissiveMap,qe=!!x.metalnessMap,Je=!!x.roughnessMap,O=x.anisotropy>0,ft=x.clearcoat>0,st=x.dispersion>0,D=x.retroreflectivity>0,_=x.iridescence>0,G=x.sheen>0,W=x.transmission>0,K=O&&!!x.anisotropyMap,he=ft&&!!x.clearcoatMap,me=ft&&!!x.clearcoatNormalMap,j=ft&&!!x.clearcoatRoughnessMap,ie=_&&!!x.iridescenceMap,_e=_&&!!x.iridescenceThicknessMap,Ue=G&&!!x.sheenColorMap,xe=G&&!!x.sheenRoughnessMap,ge=!!x.specularMap,Ie=!!x.specularColorMap,Be=!!x.specularIntensityMap,Ke=W&&!!x.transmissionMap,k=W&&!!x.thicknessMap,ve=!!x.gradientMap,ee=!!x.alphaMap,ye=x.alphaTest>0,Te=!!x.alphaHash,se=!!x.extensions,ze=zn;x.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(ze=i.toneMapping);let Ne={shaderID:H,shaderType:x.type,shaderName:x.name,vertexShader:We,fragmentShader:Ye,defines:x.defines,customVertexShaderID:nt,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:we,batchingColor:we&&M._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&M.instanceColor!==null,instancingMorph:Pe&&M.morphTexture!==null,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:ct.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Xe,matcap:mt,envMap:ne,envMapMode:ne&&$.mapping,envMapCubeUVHeight:z,aoMap:re,lightMap:oe,bumpMap:ce,normalMap:pe,displacementMap:Ge,emissiveMap:Oe,normalMapObjectSpace:pe&&x.normalMapType===Nd,normalMapTangentSpace:pe&&x.normalMapType===js,packedNormalMap:pe&&x.normalMapType===js&&cv(x.normalMap.format),metalnessMap:qe,roughnessMap:Je,anisotropy:O,anisotropyMap:K,clearcoat:ft,clearcoatMap:he,clearcoatNormalMap:me,clearcoatRoughnessMap:j,dispersion:st,retroreflection:D,iridescence:_,iridescenceMap:ie,iridescenceThicknessMap:_e,sheen:G,sheenColorMap:Ue,sheenRoughnessMap:xe,specularMap:ge,specularColorMap:Ie,specularIntensityMap:Be,transmission:W,transmissionMap:Ke,thicknessMap:k,gradientMap:ve,opaque:x.transparent===!1&&x.blending===Js&&x.alphaToCoverage===!1,alphaMap:ee,alphaTest:ye,alphaHash:Te,combine:x.combine,mapUv:Xe&&g(x.map.channel),aoMapUv:re&&g(x.aoMap.channel),lightMapUv:oe&&g(x.lightMap.channel),bumpMapUv:ce&&g(x.bumpMap.channel),normalMapUv:pe&&g(x.normalMap.channel),displacementMapUv:Ge&&g(x.displacementMap.channel),emissiveMapUv:Oe&&g(x.emissiveMap.channel),metalnessMapUv:qe&&g(x.metalnessMap.channel),roughnessMapUv:Je&&g(x.roughnessMap.channel),anisotropyMapUv:K&&g(x.anisotropyMap.channel),clearcoatMapUv:he&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:me&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:xe&&g(x.sheenRoughnessMap.channel),specularMapUv:ge&&g(x.specularMap.channel),specularColorMapUv:Ie&&g(x.specularColorMap.channel),specularIntensityMapUv:Be&&g(x.specularIntensityMap.channel),transmissionMapUv:Ke&&g(x.transmissionMap.channel),thicknessMapUv:k&&g(x.thicknessMap.channel),alphaMapUv:ee&&g(x.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(pe||O),vertexNormals:!!R.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:M.isPoints===!0&&!!R.attributes.uv&&(Xe||ee),fog:!!P,useFog:x.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||R.attributes.normal===void 0&&pe===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:le,skinning:M.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:fe,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:C.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:ze,decodeVideoTexture:Xe&&x.map.isVideoTexture===!0&&ct.getTransfer(x.map.colorSpace)===_t,decodeVideoTextureEmissive:Oe&&x.emissiveMap.isVideoTexture===!0&&ct.getTransfer(x.emissiveMap.colorSpace)===_t,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ni,flipSided:x.side===$t,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:se&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&x.extensions.multiDraw===!0||we)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ne.vertexUv1s=l.has(1),Ne.vertexUv2s=l.has(2),Ne.vertexUv3s=l.has(3),l.clear(),Ne}function m(x){let A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(let N in x.defines)A.push(N),A.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(p(A,x),S(A,x),A.push(i.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function p(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numSunLights),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numSunLightShadows),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function S(x,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function T(x){let A=f[x.type],N;if(A){let I=ri[A];N=gn.clone(I.uniforms)}else N=x.uniforms;return N}function y(x,A){let N=h.get(A);return N!==void 0?++N.usedTimes:(N=new ov(i,A,x,s),c.push(N),h.set(A,N)),N}function b(x){if(--x.usedTimes===0){let A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function L(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:T,acquireProgram:y,releaseProgram:b,releaseShaderCache:w,programs:c,dispose:L}}function uv(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function dv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function _f(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function vf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,v,m,p){let S=i[e];return S===void 0?(S={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:v,renderOrder:u.renderOrder,z:m,group:p},i[e]=S):(S.id=u.id,S.object=u,S.geometry=f,S.material=g,S.materialVariant=a(u),S.groupOrder=v,S.renderOrder=u.renderOrder,S.z=m,S.group=p),e++,S}function l(u,f,g,v,m,p,S){S.reversedDepth===!0&&(m=-m);let T=o(u,f,g,v,m,p);g.transmission>0?n.push(T):g.transparent===!0?s.push(T):t.push(T)}function c(u,f,g,v,m,p){let S=o(u,f,g,v,m,p);g.transmission>0?n.unshift(S):g.transparent===!0?s.unshift(S):t.unshift(S)}function h(u,f){t.length>1&&t.sort(u||dv),n.length>1&&n.sort(f||_f),s.length>1&&s.sort(f||_f)}function d(){for(let u=e,f=i.length;u<f;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function fv(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new vf,i.set(n,[a])):s>=r.length?(a=new vf,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function pv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new F,color:new ke};break;case"SpotLight":t={position:new F,direction:new F,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function mv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var gv=0;function xv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function _v(i){let e=new pv,t=mv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let s=new F,r=new it,a=new it;function o(c){let h=0,d=0,u=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,S=0,T=0,y=0,b=0,w=0,L=0,x=0,A=0,N=0;c.sort(xv);for(let M=0,C=c.length;M<C;M++){let P=c[M],R=P.color,U=P.intensity,V=P.distance,$=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Hi?$=P.shadow.map.texture:$=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=R.r*U,d+=R.g*U,u+=R.b*U;else if(P.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(P.sh.coefficients[z],U);N++}else if(P.isSunLight){let z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let H=P.shadow,J=t.get(P);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize.copy(H.mapSize).multiply(H.getFrameExtents()),n.sunShadow[g]=J,n.sunShadowMap[g]=$;let de=H.getViewportCount();for(let fe=0;fe<de;fe++)n.sunShadowMatrix[v+fe]=H.getMatrix(fe),n.sunShadowCascade[v+fe]=H._cascadeData[fe];v+=de,g++}n.sun[f]=z,f++}else if(P.isDirectionalLight){let z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let H=P.shadow,J=t.get(P);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,n.directionalShadow[m]=J,n.directionalShadowMap[m]=$,n.directionalShadowMatrix[m]=P.shadow.matrix,b++}n.directional[m]=z,m++}else if(P.isSpotLight){let z=e.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(R).multiplyScalar(U),z.distance=V,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,n.spot[S]=z;let H=P.shadow;if(P.map&&(n.spotLightMap[x]=P.map,x++,H.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[S]=H.matrix,P.castShadow){let J=t.get(P);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,n.spotShadow[S]=J,n.spotShadowMap[S]=$,L++}S++}else if(P.isRectAreaLight){let z=e.get(P);z.color.copy(R).multiplyScalar(U),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),n.rectArea[T]=z,T++}else if(P.isPointLight){let z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),z.distance=P.distance,z.decay=P.decay,P.castShadow){let H=P.shadow,J=t.get(P);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,J.shadowCameraNear=H.camera.near,J.shadowCameraFar=H.camera.far,n.pointShadow[p]=J,n.pointShadowMap[p]=$,n.pointShadowMatrix[p]=P.shadow.matrix,w++}n.point[p]=z,p++}else if(P.isHemisphereLight){let z=e.get(P);z.skyColor.copy(P.color).multiplyScalar(U),z.groundColor.copy(P.groundColor).multiplyScalar(U),n.hemi[y]=z,y++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let I=n.hash;(I.sunLength!==f||I.directionalLength!==m||I.pointLength!==p||I.spotLength!==S||I.rectAreaLength!==T||I.hemiLength!==y||I.numSunShadows!==g||I.numDirectionalShadows!==b||I.numPointShadows!==w||I.numSpotShadows!==L||I.numSpotMaps!==x||I.numLightProbes!==N)&&(n.sun.length=f,n.directional.length=m,n.spot.length=S,n.rectArea.length=T,n.point.length=p,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=L,n.spotShadowMap.length=L,n.spotLightMatrix.length=L+x-A,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=N,I.sunLength=f,I.directionalLength=m,I.pointLength=p,I.spotLength=S,I.rectAreaLength=T,I.hemiLength=y,I.numSunShadows=g,I.numDirectionalShadows=b,I.numPointShadows=w,I.numSpotShadows=L,I.numSpotMaps=x,I.numLightProbes=N,n.version=gv++)}function l(c,h){let d=0,u=0,f=0,g=0,v=0,m=0,p=h.matrixWorldInverse;for(let S=0,T=c.length;S<T;S++){let y=c[S];if(y.isSunLight){let b=n.sun[d];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(p),d++}else if(y.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),u++}else if(y.isSpotLight){let b=n.spot[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),g++}else if(y.isRectAreaLight){let b=n.rectArea[v];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){let b=n.hemi[m];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function yf(i){let e=new _v(i),t=[],n=[],s=[];function r(u){d.camera=u,t.length=0,n.length=0,s.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function vv(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new yf(i),e.set(s,[o])):r>=a.length?(o=new yf(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var yv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Sv=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],bv=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Mf=new it,Ta=new F,Bh=new F;function Ev(i,e,t){let n=new zs,s=new ue,r=new ue,a=new St,o=new Do,l=new No,c={},h=t.maxTextureSize,d={[ki]:$t,[$t]:ki,[ni]:ni},u=new Dt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:yv,fragmentShader:Mv}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ot;g.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ve(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ss;let p=this.type;this.render=function(w,L,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===pd&&(He("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ss);let A=i.getRenderTarget(),N=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),M=i.state;M.setBlending(Wt),M.buffers.depth.getReversed()===!0?M.buffers.color.setClear(0,0,0,0):M.buffers.color.setClear(1,1,1,1),M.buffers.depth.setTest(!0),M.setScissorTest(!1);let C=p!==this.type;C&&L.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(R=>R.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,R=w.length;P<R;P++){let U=w[P],V=U.shadow;if(V===void 0){He("WebGLShadowMap:",U,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let $=V.getFrameExtents();s.multiply($),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,V.mapSize.y=r.y));let z=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=z,V.map===null||C===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Zs){if(U.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Gt(s.x,s.y,{format:Hi,type:Qt,minFilter:tn,magFilter:tn,generateMipmaps:!1}),V.map.texture.name=U.name+".shadowMap",V.map.depthTexture=new ti(s.x,s.y,wn),V.map.depthTexture.name=U.name+".shadowMapDepth",V.map.depthTexture.format=$n,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Vt,V.map.depthTexture.magFilter=Vt}else U.isPointLight?(V.map=new zl(s.x),V.map.depthTexture=new wo(s.x,Vn)):(V.map=new Gt(s.x,s.y),V.map.depthTexture=new ti(s.x,s.y,Vn)),V.map.depthTexture.name=U.name+".shadowMap",V.map.depthTexture.format=$n,this.type===ss?(V.map.depthTexture.compareFunction=z?Ol:Fl,V.map.depthTexture.minFilter=tn,V.map.depthTexture.magFilter=tn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Vt,V.map.depthTexture.magFilter=Vt);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let H=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();U.isPointLight!==!0&&V.updateMatrices(U,x);for(let J=0;J<H;J++){let de=V.getCamera(J);if(U.isPointLight){let fe=V.camera,We=V.matrix,Ye=U.distance||fe.far;Ye!==fe.far&&(fe.far=Ye,fe.updateProjectionMatrix()),Ta.setFromMatrixPosition(U.matrixWorld),fe.position.copy(Ta),Bh.copy(fe.position),Bh.add(Sv[J]),fe.up.copy(bv[J]),fe.lookAt(Bh),fe.updateMatrixWorld(),We.makeTranslation(-Ta.x,-Ta.y,-Ta.z),Mf.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Mf,fe.coordinateSystem,fe.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,J),i.clear();else{J===0&&(i.setRenderTarget(V.map),i.clear());let fe=V.getViewport(J);a.set(r.x*fe.x,r.y*fe.y,r.x*fe.z,r.y*fe.w),M.viewport(a)}n=V.getFrustum(J),y(L,x,de,U,this.type)}V.isPointLightShadow!==!0&&this.type===Zs&&S(V,x),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(A,N,I)};function S(w,L){let x=e.update(v);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new Gt(s.x,s.y,{format:Hi,type:Qt}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(L,null,x,u,v,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(L,null,x,f,v,null)}function T(w,L,x,A){let N=null,I=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)N=I;else if(N=x.isPointLight===!0?l:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let M=N.uuid,C=L.uuid,P=c[M];P===void 0&&(P={},c[M]=P);let R=P[C];R===void 0&&(R=N.clone(),P[C]=R,L.addEventListener("dispose",b)),N=R}if(N.visible=L.visible,N.wireframe=L.wireframe,A===Zs?N.side=L.shadowSide!==null?L.shadowSide:L.side:N.side=L.shadowSide!==null?L.shadowSide:d[L.side],N.alphaMap=L.alphaMap,N.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,N.map=L.map,N.clipShadows=L.clipShadows,N.clippingPlanes=L.clippingPlanes,N.clipIntersection=L.clipIntersection,N.displacementMap=L.displacementMap,N.displacementScale=L.displacementScale,N.displacementBias=L.displacementBias,N.wireframeLinewidth=L.wireframeLinewidth,N.linewidth=L.linewidth,x.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let M=i.properties.get(N);M.light=x}return N}function y(w,L,x,A,N){if(w.visible===!1)return;if(w.layers.test(L.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&N===Zs)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);let C=e.update(w),P=w.material;if(Array.isArray(P)){let R=C.groups;for(let U=0,V=R.length;U<V;U++){let $=R[U],z=P[$.materialIndex];if(z&&z.visible){let H=T(w,z,A,N);w.onBeforeShadow(i,w,L,x,C,H,$),i.renderBufferDirect(x,null,C,H,w,$),w.onAfterShadow(i,w,L,x,C,H,$)}}}else if(P.visible){let R=T(w,P,A,N);w.onBeforeShadow(i,w,L,x,C,R,null),i.renderBufferDirect(x,null,C,R,w,null),w.onAfterShadow(i,w,L,x,C,R,null)}}let M=w.children;for(let C=0,P=M.length;C<P;C++)y(M[C],L,x,A,N)}function b(w){w.target.removeEventListener("dispose",b);for(let x in c){let A=c[x],N=w.target.uuid;N in A&&(A[N].dispose(),delete A[N])}}}function wv(i,e){function t(){let k=!1,ve=new St,ee=null,ye=new St(0,0,0,0);return{setMask:function(Te){ee!==Te&&!k&&(i.colorMask(Te,Te,Te,Te),ee=Te)},setLocked:function(Te){k=Te},setClear:function(Te,se,ze,Ne,At){At===!0&&(Te*=Ne,se*=Ne,ze*=Ne),ve.set(Te,se,ze,Ne),ye.equals(ve)===!1&&(i.clearColor(Te,se,ze,Ne),ye.copy(ve))},reset:function(){k=!1,ee=null,ye.set(-1,0,0,0)}}}function n(){let k=!1,ve=!1,ee=null,ye=null,Te=null;return{setReversed:function(se){if(ve!==se){let ze=e.get("EXT_clip_control");se?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),ve=se;let Ne=Te;Te=null,this.setClear(Ne)}},getReversed:function(){return ve},setTest:function(se){se?Q(i.DEPTH_TEST):le(i.DEPTH_TEST)},setMask:function(se){ee!==se&&!k&&(i.depthMask(se),ee=se)},setFunc:function(se){if(ve&&(se=qd[se]),ye!==se){switch(se){case uo:i.depthFunc(i.NEVER);break;case fo:i.depthFunc(i.ALWAYS);break;case po:i.depthFunc(i.LESS);break;case Ns:i.depthFunc(i.LEQUAL);break;case mo:i.depthFunc(i.EQUAL);break;case go:i.depthFunc(i.GEQUAL);break;case xo:i.depthFunc(i.GREATER);break;case _o:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ye=se}},setLocked:function(se){k=se},setClear:function(se){Te!==se&&(Te=se,ve&&(se=1-se),i.clearDepth(se))},reset:function(){k=!1,ee=null,ye=null,Te=null,ve=!1}}}function s(){let k=!1,ve=null,ee=null,ye=null,Te=null,se=null,ze=null,Ne=null,At=null;return{setTest:function(vt){k||(vt?Q(i.STENCIL_TEST):le(i.STENCIL_TEST))},setMask:function(vt){ve!==vt&&!k&&(i.stencilMask(vt),ve=vt)},setFunc:function(vt,Ln,Wn){(ee!==vt||ye!==Ln||Te!==Wn)&&(i.stencilFunc(vt,Ln,Wn),ee=vt,ye=Ln,Te=Wn)},setOp:function(vt,Ln,Wn){(se!==vt||ze!==Ln||Ne!==Wn)&&(i.stencilOp(vt,Ln,Wn),se=vt,ze=Ln,Ne=Wn)},setLocked:function(vt){k=vt},setClear:function(vt){At!==vt&&(i.clearStencil(vt),At=vt)},reset:function(){k=!1,ve=null,ee=null,ye=null,Te=null,se=null,ze=null,Ne=null,At=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],v=null,m=!1,p=null,S=null,T=null,y=null,b=null,w=null,L=null,x=new ke(0,0,0),A=0,N=!1,I=null,M=null,C=null,P=null,R=null,U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,$=0,z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(z)[1]),V=$>=1):z.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),V=$>=2);let H=null,J={},de=i.getParameter(i.SCISSOR_BOX),fe=i.getParameter(i.VIEWPORT),We=new St().fromArray(de),Ye=new St().fromArray(fe);function nt(k,ve,ee,ye){let Te=new Uint8Array(4),se=i.createTexture();i.bindTexture(k,se),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ze=0;ze<ee;ze++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(ve,0,i.RGBA,1,1,ye,0,i.RGBA,i.UNSIGNED_BYTE,Te):i.texImage2D(ve+ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Te);return se}let Z={};Z[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),a.setFunc(Ns),ce(!1),pe(lh),Q(i.CULL_FACE),re(Wt);function Q(k){h[k]!==!0&&(i.enable(k),h[k]=!0)}function le(k){h[k]!==!1&&(i.disable(k),h[k]=!1)}function Pe(k,ve){return u[k]!==ve?(i.bindFramebuffer(k,ve),u[k]=ve,k===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ve),k===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ve),!0):!1}function we(k,ve){let ee=g,ye=!1;if(k){ee=f.get(ve),ee===void 0&&(ee=[],f.set(ve,ee));let Te=k.textures;if(ee.length!==Te.length||ee[0]!==i.COLOR_ATTACHMENT0){for(let se=0,ze=Te.length;se<ze;se++)ee[se]=i.COLOR_ATTACHMENT0+se;ee.length=Te.length,ye=!0}}else ee[0]!==i.BACK&&(ee[0]=i.BACK,ye=!0);ye&&i.drawBuffers(ee)}function Xe(k){return v!==k?(i.useProgram(k),v=k,!0):!1}let mt={[In]:i.FUNC_ADD,[md]:i.FUNC_SUBTRACT,[gd]:i.FUNC_REVERSE_SUBTRACT};mt[xd]=i.MIN,mt[_d]=i.MAX;let ne={[rs]:i.ZERO,[vd]:i.ONE,[yd]:i.SRC_COLOR,[dh]:i.SRC_ALPHA,[Ed]:i.SRC_ALPHA_SATURATE,[ha]:i.DST_COLOR,[ca]:i.DST_ALPHA,[Md]:i.ONE_MINUS_SRC_COLOR,[fh]:i.ONE_MINUS_SRC_ALPHA,[bd]:i.ONE_MINUS_DST_COLOR,[Sd]:i.ONE_MINUS_DST_ALPHA,[wd]:i.CONSTANT_COLOR,[Td]:i.ONE_MINUS_CONSTANT_COLOR,[Ad]:i.CONSTANT_ALPHA,[Rd]:i.ONE_MINUS_CONSTANT_ALPHA};function re(k,ve,ee,ye,Te,se,ze,Ne,At,vt){if(k===Wt){m===!0&&(le(i.BLEND),m=!1);return}if(m===!1&&(Q(i.BLEND),m=!0),k!==$o){if(k!==p||vt!==N){if((S!==In||b!==In)&&(i.blendEquation(i.FUNC_ADD),S=In,b=In),vt)switch(k){case Js:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ch:i.blendFunc(i.ONE,i.ONE);break;case hh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:$e("WebGLState: Invalid blending: ",k);break}else switch(k){case Js:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ch:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case hh:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case uh:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",k);break}T=null,y=null,w=null,L=null,x.set(0,0,0),A=0,p=k,N=vt}return}Te=Te||ve,se=se||ee,ze=ze||ye,(ve!==S||Te!==b)&&(i.blendEquationSeparate(mt[ve],mt[Te]),S=ve,b=Te),(ee!==T||ye!==y||se!==w||ze!==L)&&(i.blendFuncSeparate(ne[ee],ne[ye],ne[se],ne[ze]),T=ee,y=ye,w=se,L=ze),(Ne.equals(x)===!1||At!==A)&&(i.blendColor(Ne.r,Ne.g,Ne.b,At),x.copy(Ne),A=At),p=k,N=!1}function oe(k,ve){k.side===ni?le(i.CULL_FACE):Q(i.CULL_FACE);let ee=k.side===$t;ve&&(ee=!ee),ce(ee),k.blending===Js&&k.transparent===!1?re(Wt):re(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);let ye=k.stencilWrite;o.setTest(ye),ye&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Oe(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):le(i.SAMPLE_ALPHA_TO_COVERAGE)}function ce(k){I!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),I=k)}function pe(k){k!==dd?(Q(i.CULL_FACE),k!==M&&(k===lh?i.cullFace(i.BACK):k===fd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):le(i.CULL_FACE),M=k}function Ge(k){k!==C&&(V&&i.lineWidth(k),C=k)}function Oe(k,ve,ee){k?(Q(i.POLYGON_OFFSET_FILL),(P!==ve||R!==ee)&&(P=ve,R=ee,a.getReversed()&&(ve=-ve),i.polygonOffset(ve,ee))):le(i.POLYGON_OFFSET_FILL)}function qe(k){k?Q(i.SCISSOR_TEST):le(i.SCISSOR_TEST)}function Je(k){k===void 0&&(k=i.TEXTURE0+U-1),H!==k&&(i.activeTexture(k),H=k)}function O(k,ve,ee){ee===void 0&&(H===null?ee=i.TEXTURE0+U-1:ee=H);let ye=J[ee];ye===void 0&&(ye={type:void 0,texture:void 0},J[ee]=ye),(ye.type!==k||ye.texture!==ve)&&(H!==ee&&(i.activeTexture(ee),H=ee),i.bindTexture(k,ve||Z[k]),ye.type=k,ye.texture=ve)}function ft(){let k=J[H];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function st(){try{i.compressedTexImage2D(...arguments)}catch(k){$e("WebGLState:",k)}}function D(){try{i.compressedTexImage3D(...arguments)}catch(k){$e("WebGLState:",k)}}function _(){try{i.texSubImage2D(...arguments)}catch(k){$e("WebGLState:",k)}}function G(){try{i.texSubImage3D(...arguments)}catch(k){$e("WebGLState:",k)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(k){$e("WebGLState:",k)}}function K(){try{i.compressedTexSubImage3D(...arguments)}catch(k){$e("WebGLState:",k)}}function he(){try{i.texStorage2D(...arguments)}catch(k){$e("WebGLState:",k)}}function me(){try{i.texStorage3D(...arguments)}catch(k){$e("WebGLState:",k)}}function j(){try{i.texImage2D(...arguments)}catch(k){$e("WebGLState:",k)}}function ie(){try{i.texImage3D(...arguments)}catch(k){$e("WebGLState:",k)}}function _e(k){return d[k]!==void 0?d[k]:i.getParameter(k)}function Ue(k,ve){d[k]!==ve&&(i.pixelStorei(k,ve),d[k]=ve)}function xe(k){We.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),We.copy(k))}function ge(k){Ye.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),Ye.copy(k))}function Ie(k,ve){let ee=c.get(ve);ee===void 0&&(ee=new WeakMap,c.set(ve,ee));let ye=ee.get(k);ye===void 0&&(ye=i.getUniformBlockIndex(ve,k.name),ee.set(k,ye))}function Be(k,ve){let ye=c.get(ve).get(k);l.get(ve)!==ye&&(i.uniformBlockBinding(ve,ye,k.__bindingPointIndex),l.set(ve,ye))}function Ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},H=null,J={},u={},f=new WeakMap,g=[],v=null,m=!1,p=null,S=null,T=null,y=null,b=null,w=null,L=null,x=new ke(0,0,0),A=0,N=!1,I=null,M=null,C=null,P=null,R=null,We.set(0,0,i.canvas.width,i.canvas.height),Ye.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:le,bindFramebuffer:Pe,drawBuffers:we,useProgram:Xe,setBlending:re,setMaterial:oe,setFlipSided:ce,setCullFace:pe,setLineWidth:Ge,setPolygonOffset:Oe,setScissorTest:qe,activeTexture:Je,bindTexture:O,unbindTexture:ft,compressedTexImage2D:st,compressedTexImage3D:D,texImage2D:j,texImage3D:ie,pixelStorei:Ue,getParameter:_e,updateUBOMapping:Ie,uniformBlockBinding:Be,texStorage2D:he,texStorage3D:me,texSubImage2D:_,texSubImage3D:G,compressedTexSubImage2D:W,compressedTexSubImage3D:K,scissor:xe,viewport:ge,reset:Ke}}function Tv(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ue,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(D,_){return g?new OffscreenCanvas(D,_):Dr("canvas")}function m(D,_,G){let W=1,K=st(D);if((K.width>G||K.height>G)&&(W=G/Math.max(K.width,K.height)),W<1)if(typeof HTMLImageElement!="undefined"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&D instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&D instanceof ImageBitmap||typeof VideoFrame!="undefined"&&D instanceof VideoFrame){let he=Math.floor(W*K.width),me=Math.floor(W*K.height);u===void 0&&(u=v(he,me));let j=_?v(he,me):u;return j.width=he,j.height=me,j.getContext("2d").drawImage(D,0,0,he,me),He("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+he+"x"+me+")."),j}else return"data"in D&&He("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),D;return D}function p(D){return D.generateMipmaps}function S(D){i.generateMipmap(D)}function T(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(D,_,G,W,K,he=!1){if(D!==null){if(i[D]!==void 0)return i[D];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let me;W&&(me=e.get("EXT_texture_norm16"),me||He("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=_;if(_===i.RED&&(G===i.FLOAT&&(j=i.R32F),G===i.HALF_FLOAT&&(j=i.R16F),G===i.UNSIGNED_BYTE&&(j=i.R8),G===i.UNSIGNED_SHORT&&me&&(j=me.R16_EXT),G===i.SHORT&&me&&(j=me.R16_SNORM_EXT)),_===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(j=i.R8UI),G===i.UNSIGNED_SHORT&&(j=i.R16UI),G===i.UNSIGNED_INT&&(j=i.R32UI),G===i.BYTE&&(j=i.R8I),G===i.SHORT&&(j=i.R16I),G===i.INT&&(j=i.R32I)),_===i.RG&&(G===i.FLOAT&&(j=i.RG32F),G===i.HALF_FLOAT&&(j=i.RG16F),G===i.UNSIGNED_BYTE&&(j=i.RG8),G===i.UNSIGNED_SHORT&&me&&(j=me.RG16_EXT),G===i.SHORT&&me&&(j=me.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(j=i.RG8UI),G===i.UNSIGNED_SHORT&&(j=i.RG16UI),G===i.UNSIGNED_INT&&(j=i.RG32UI),G===i.BYTE&&(j=i.RG8I),G===i.SHORT&&(j=i.RG16I),G===i.INT&&(j=i.RG32I)),_===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(j=i.RGB8UI),G===i.UNSIGNED_SHORT&&(j=i.RGB16UI),G===i.UNSIGNED_INT&&(j=i.RGB32UI),G===i.BYTE&&(j=i.RGB8I),G===i.SHORT&&(j=i.RGB16I),G===i.INT&&(j=i.RGB32I)),_===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),G===i.UNSIGNED_INT&&(j=i.RGBA32UI),G===i.BYTE&&(j=i.RGBA8I),G===i.SHORT&&(j=i.RGBA16I),G===i.INT&&(j=i.RGBA32I)),_===i.RGB&&(G===i.UNSIGNED_SHORT&&me&&(j=me.RGB16_EXT),G===i.SHORT&&me&&(j=me.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),_===i.RGBA){let ie=he?Lr:ct.getTransfer(K);G===i.FLOAT&&(j=i.RGBA32F),G===i.HALF_FLOAT&&(j=i.RGBA16F),G===i.UNSIGNED_BYTE&&(j=ie===_t?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&me&&(j=me.RGBA16_EXT),G===i.SHORT&&me&&(j=me.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function b(D,_){let G;return D?_===null||_===Vn||_===Gi?G=i.DEPTH24_STENCIL8:_===wn?G=i.DEPTH32F_STENCIL8:_===Ks&&(G=i.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Vn||_===Gi?G=i.DEPTH_COMPONENT24:_===wn?G=i.DEPTH_COMPONENT32F:_===Ks&&(G=i.DEPTH_COMPONENT16),G}function w(D,_){return p(D)===!0||D.isFramebufferTexture&&D.minFilter!==Vt&&D.minFilter!==tn?Math.log2(Math.max(_.width,_.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?_.mipmaps.length:1}function L(D){let _=D.target;_.removeEventListener("dispose",L),A(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&d.delete(_)}function x(D){let _=D.target;_.removeEventListener("dispose",x),I(_)}function A(D){let _=n.get(D);if(_.__webglInit===void 0)return;let G=D.source,W=f.get(G);if(W){let K=W[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&N(D),Object.keys(W).length===0&&f.delete(G)}n.remove(D)}function N(D){let _=n.get(D);i.deleteTexture(_.__webglTexture);let G=D.source,W=f.get(G);delete W[_.__cacheKey],a.memory.textures--}function I(D){let _=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(_.__webglFramebuffer[W]))for(let K=0;K<_.__webglFramebuffer[W].length;K++)i.deleteFramebuffer(_.__webglFramebuffer[W][K]);else i.deleteFramebuffer(_.__webglFramebuffer[W]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[W])}else{if(Array.isArray(_.__webglFramebuffer))for(let W=0;W<_.__webglFramebuffer.length;W++)i.deleteFramebuffer(_.__webglFramebuffer[W]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let W=0;W<_.__webglColorRenderbuffer.length;W++)_.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[W]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let G=D.textures;for(let W=0,K=G.length;W<K;W++){let he=n.get(G[W]);he.__webglTexture&&(i.deleteTexture(he.__webglTexture),a.memory.textures--),n.remove(G[W])}n.remove(D)}let M=0;function C(){M=0}function P(){return M}function R(D){M=D}function U(){let D=M;return D>=s.maxTextures&&He("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+s.maxTextures),M+=1,D}function V(D){let _=[];return _.push(D.wrapS),_.push(D.wrapT),_.push(D.wrapR||0),_.push(D.magFilter),_.push(D.minFilter),_.push(D.anisotropy),_.push(D.internalFormat),_.push(D.format),_.push(D.type),_.push(D.generateMipmaps),_.push(D.premultiplyAlpha),_.push(D.flipY),_.push(D.unpackAlignment),_.push(D.colorSpace),_.join()}function $(D,_){let G=n.get(D);if(D.isVideoTexture&&O(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&G.__version!==D.version){let W=D.image;if(W===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{le(G,D,_);return}}else D.isExternalTexture&&(G.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+_)}function z(D,_){let G=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&G.__version!==D.version){le(G,D,_);return}else D.isExternalTexture&&(G.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+_)}function H(D,_){let G=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&G.__version!==D.version){le(G,D,_);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+_)}function J(D,_){let G=n.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&G.__version!==D.version){Pe(G,D,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+_)}let de={[Pn]:i.REPEAT,[Yn]:i.CLAMP_TO_EDGE,[vo]:i.MIRRORED_REPEAT},fe={[Vt]:i.NEAREST,[Ld]:i.NEAREST_MIPMAP_NEAREST,[_a]:i.NEAREST_MIPMAP_LINEAR,[tn]:i.LINEAR,[jo]:i.LINEAR_MIPMAP_NEAREST,[Vi]:i.LINEAR_MIPMAP_LINEAR},We={[Fd]:i.NEVER,[Vd]:i.ALWAYS,[Od]:i.LESS,[Fl]:i.LEQUAL,[Bd]:i.EQUAL,[Ol]:i.GEQUAL,[kd]:i.GREATER,[zd]:i.NOTEQUAL};function Ye(D,_){if(_.type===wn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===tn||_.magFilter===jo||_.magFilter===_a||_.magFilter===Vi||_.minFilter===tn||_.minFilter===jo||_.minFilter===_a||_.minFilter===Vi)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,de[_.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,de[_.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,de[_.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,fe[_.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,fe[_.minFilter]),_.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,We[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Vt||_.minFilter!==_a&&_.minFilter!==Vi||_.type===wn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function nt(D,_){let G=!1;D.__webglInit===void 0&&(D.__webglInit=!0,_.addEventListener("dispose",L));let W=_.source,K=f.get(W);K===void 0&&(K={},f.set(W,K));let he=V(_);if(he!==D.__cacheKey){K[he]===void 0&&(K[he]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),K[he].usedTimes++;let me=K[D.__cacheKey];me!==void 0&&(K[D.__cacheKey].usedTimes--,me.usedTimes===0&&N(_)),D.__cacheKey=he,D.__webglTexture=K[he].texture}return G}function Z(D,_,G){return Math.floor(Math.floor(D/G)/_)}function Q(D,_,G,W){let he=D.updateRanges;if(he.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,G,W,_.data);else{he.sort((Ue,xe)=>Ue.start-xe.start);let me=0;for(let Ue=1;Ue<he.length;Ue++){let xe=he[me],ge=he[Ue],Ie=xe.start+xe.count,Be=Z(ge.start,_.width,4),Ke=Z(xe.start,_.width,4);ge.start<=Ie+1&&Be===Ke&&Z(ge.start+ge.count-1,_.width,4)===Be?xe.count=Math.max(xe.count,ge.start+ge.count-xe.start):(++me,he[me]=ge)}he.length=me+1;let j=t.getParameter(i.UNPACK_ROW_LENGTH),ie=t.getParameter(i.UNPACK_SKIP_PIXELS),_e=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Ue=0,xe=he.length;Ue<xe;Ue++){let ge=he[Ue],Ie=Math.floor(ge.start/4),Be=Math.ceil(ge.count/4),Ke=Ie%_.width,k=Math.floor(Ie/_.width),ve=Be,ee=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ke),t.pixelStorei(i.UNPACK_SKIP_ROWS,k),t.texSubImage2D(i.TEXTURE_2D,0,Ke,k,ve,ee,G,W,_.data)}D.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,j),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(i.UNPACK_SKIP_ROWS,_e)}}function le(D,_,G){let W=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(W=i.TEXTURE_3D);let K=nt(D,_),he=_.source;t.bindTexture(W,D.__webglTexture,i.TEXTURE0+G);let me=n.get(he);if(he.version!==me.__version||K===!0){if(t.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap!="undefined"&&_.image instanceof ImageBitmap)===!1){let ee=ct.getPrimaries(ct.workingColorSpace),ye=_.colorSpace===yi?null:ct.getPrimaries(_.colorSpace),Te=_.colorSpace===yi||ee===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te)}t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let ie=m(_.image,!1,s.maxTextureSize);ie=ft(_,ie);let _e=r.convert(_.format,_.colorSpace),Ue=r.convert(_.type),xe=y(_.internalFormat,_e,Ue,_.normalized,_.colorSpace,_.isVideoTexture);Ye(W,_);let ge,Ie=_.mipmaps,Be=_.isVideoTexture!==!0,Ke=me.__version===void 0||K===!0,k=he.dataReady,ve=w(_,ie);if(_.isDepthTexture)xe=b(_.format===ii,_.type),Ke&&(Be?t.texStorage2D(i.TEXTURE_2D,1,xe,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,xe,ie.width,ie.height,0,_e,Ue,null));else if(_.isDataTexture)if(Ie.length>0){Be&&Ke&&t.texStorage2D(i.TEXTURE_2D,ve,xe,Ie[0].width,Ie[0].height);for(let ee=0,ye=Ie.length;ee<ye;ee++)ge=Ie[ee],Be?k&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,ge.width,ge.height,_e,Ue,ge.data):t.texImage2D(i.TEXTURE_2D,ee,xe,ge.width,ge.height,0,_e,Ue,ge.data);_.generateMipmaps=!1}else Be?(Ke&&t.texStorage2D(i.TEXTURE_2D,ve,xe,ie.width,ie.height),k&&Q(_,ie,_e,Ue)):t.texImage2D(i.TEXTURE_2D,0,xe,ie.width,ie.height,0,_e,Ue,ie.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Be&&Ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,xe,Ie[0].width,Ie[0].height,ie.depth);for(let ee=0,ye=Ie.length;ee<ye;ee++)if(ge=Ie[ee],_.format!==un)if(_e!==null)if(Be){if(k)if(_.layerUpdates.size>0){let Te=Ah(ge.width,ge.height,_.format,_.type);for(let se of _.layerUpdates){let ze=ge.data.subarray(se*Te/ge.data.BYTES_PER_ELEMENT,(se+1)*Te/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,se,ge.width,ge.height,1,_e,ze)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,ge.width,ge.height,ie.depth,_e,ge.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,xe,ge.width,ge.height,ie.depth,0,ge.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?k&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,ge.width,ge.height,ie.depth,_e,Ue,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,xe,ge.width,ge.height,ie.depth,0,_e,Ue,ge.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Be&&Ke&&t.texStorage2D(i.TEXTURE_2D,ve,xe,Ie[0].width,Ie[0].height);for(let ee=0,ye=Ie.length;ee<ye;ee++)ge=Ie[ee],_.format!==un?_e!==null?Be?k&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,ge.width,ge.height,_e,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,xe,ge.width,ge.height,0,ge.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?k&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,ge.width,ge.height,_e,Ue,ge.data):t.texImage2D(i.TEXTURE_2D,ee,xe,ge.width,ge.height,0,_e,Ue,ge.data)}else if(_.isDataArrayTexture)if(Be){if(Ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,xe,ie.width,ie.height,ie.depth),k)if(_.layerUpdates.size>0){let ee=Ah(ie.width,ie.height,_.format,_.type);for(let ye of _.layerUpdates){let Te=ie.data.subarray(ye*ee/ie.data.BYTES_PER_ELEMENT,(ye+1)*ee/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ye,ie.width,ie.height,1,_e,Ue,Te)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,_e,Ue,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,xe,ie.width,ie.height,ie.depth,0,_e,Ue,ie.data);else if(_.isData3DTexture)Be?(Ke&&t.texStorage3D(i.TEXTURE_3D,ve,xe,ie.width,ie.height,ie.depth),k&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,_e,Ue,ie.data)):t.texImage3D(i.TEXTURE_3D,0,xe,ie.width,ie.height,ie.depth,0,_e,Ue,ie.data);else if(_.isFramebufferTexture){if(Ke)if(Be)t.texStorage2D(i.TEXTURE_2D,ve,xe,ie.width,ie.height);else{let ee=ie.width,ye=ie.height;for(let Te=0;Te<ve;Te++)t.texImage2D(i.TEXTURE_2D,Te,xe,ee,ye,0,_e,Ue,null),ee>>=1,ye>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let ee=i.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),ie.parentNode!==ee){ee.appendChild(ie),d.add(_),ee.onpaint=ye=>{let Te=ye.changedElements;for(let se of d)Te.includes(se.image)&&(se.needsUpdate=!0)},ee.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ie);else{let Te=i.RGBA,se=i.RGBA,ze=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Te,se,ze,ie)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(Be&&Ke){let ee=st(Ie[0]);t.texStorage2D(i.TEXTURE_2D,ve,xe,ee.width,ee.height)}for(let ee=0,ye=Ie.length;ee<ye;ee++)ge=Ie[ee],Be?k&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,_e,Ue,ge):t.texImage2D(i.TEXTURE_2D,ee,xe,_e,Ue,ge);_.generateMipmaps=!1}else if(Be){if(Ke){let ee=st(ie);t.texStorage2D(i.TEXTURE_2D,ve,xe,ee.width,ee.height)}k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e,Ue,ie)}else t.texImage2D(i.TEXTURE_2D,0,xe,_e,Ue,ie);p(_)&&S(W),me.__version=he.version,_.onUpdate&&_.onUpdate(_)}D.__version=_.version}function Pe(D,_,G){if(_.image.length!==6)return;let W=nt(D,_),K=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+G);let he=n.get(K);if(K.version!==he.__version||W===!0){t.activeTexture(i.TEXTURE0+G);let me=ct.getPrimaries(ct.workingColorSpace),j=_.colorSpace===yi?null:ct.getPrimaries(_.colorSpace),ie=_.colorSpace===yi||me===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let _e=_.isCompressedTexture||_.image[0].isCompressedTexture,Ue=_.image[0]&&_.image[0].isDataTexture,xe=[];for(let se=0;se<6;se++)!_e&&!Ue?xe[se]=m(_.image[se],!0,s.maxCubemapSize):xe[se]=Ue?_.image[se].image:_.image[se],xe[se]=ft(_,xe[se]);let ge=xe[0],Ie=r.convert(_.format,_.colorSpace),Be=r.convert(_.type),Ke=y(_.internalFormat,Ie,Be,_.normalized,_.colorSpace),k=_.isVideoTexture!==!0,ve=he.__version===void 0||W===!0,ee=K.dataReady,ye=w(_,ge);Ye(i.TEXTURE_CUBE_MAP,_);let Te;if(_e){k&&ve&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,Ke,ge.width,ge.height);for(let se=0;se<6;se++){Te=xe[se].mipmaps;for(let ze=0;ze<Te.length;ze++){let Ne=Te[ze];_.format!==un?Ie!==null?k?ee&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ze,0,0,Ne.width,Ne.height,Ie,Ne.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ze,Ke,Ne.width,Ne.height,0,Ne.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ze,0,0,Ne.width,Ne.height,Ie,Be,Ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ze,Ke,Ne.width,Ne.height,0,Ie,Be,Ne.data)}}}else{if(Te=_.mipmaps,k&&ve){Te.length>0&&ye++;let se=st(xe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,Ke,se.width,se.height)}for(let se=0;se<6;se++)if(Ue){k?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,xe[se].width,xe[se].height,Ie,Be,xe[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ke,xe[se].width,xe[se].height,0,Ie,Be,xe[se].data);for(let ze=0;ze<Te.length;ze++){let At=Te[ze].image[se].image;k?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ze+1,0,0,At.width,At.height,Ie,Be,At.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ze+1,Ke,At.width,At.height,0,Ie,Be,At.data)}}else{k?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ie,Be,xe[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ke,Ie,Be,xe[se]);for(let ze=0;ze<Te.length;ze++){let Ne=Te[ze];k?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ze+1,0,0,Ie,Be,Ne.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ze+1,Ke,Ie,Be,Ne.image[se])}}}p(_)&&S(i.TEXTURE_CUBE_MAP),he.__version=K.version,_.onUpdate&&_.onUpdate(_)}D.__version=_.version}function we(D,_,G,W,K,he){let me=r.convert(G.format,G.colorSpace),j=r.convert(G.type),ie=y(G.internalFormat,me,j,G.normalized,G.colorSpace),_e=n.get(_),Ue=n.get(G);if(Ue.__renderTarget=_,!_e.__hasExternalTextures){let xe=Math.max(1,_.width>>he),ge=Math.max(1,_.height>>he);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,he,ie,xe,ge,_.depth,0,me,j,null):t.texImage2D(K,he,ie,xe,ge,0,me,j,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),Je(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,K,Ue.__webglTexture,0,qe(_)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,K,Ue.__webglTexture,he),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Xe(D,_,G){if(i.bindRenderbuffer(i.RENDERBUFFER,D),_.depthBuffer){let W=_.depthTexture,K=W&&W.isDepthTexture?W.type:null,he=b(_.stencilBuffer,K),me=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Je(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qe(_),he,_.width,_.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,qe(_),he,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,he,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,me,i.RENDERBUFFER,D)}else{let W=_.textures;for(let K=0;K<W.length;K++){let he=W[K],me=r.convert(he.format,he.colorSpace),j=r.convert(he.type),ie=y(he.internalFormat,me,j,he.normalized,he.colorSpace);Je(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qe(_),ie,_.width,_.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,qe(_),ie,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ie,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function mt(D,_,G){let W=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(_.depthTexture);if(K.__renderTarget=_,(!K.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),W){if(K.__webglInit===void 0&&(K.__webglInit=!0,_.depthTexture.addEventListener("dispose",L)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Ye(i.TEXTURE_CUBE_MAP,_.depthTexture);let _e=r.convert(_.depthTexture.format),Ue=r.convert(_.depthTexture.type),xe;_.depthTexture.format===$n?xe=i.DEPTH_COMPONENT24:_.depthTexture.format===ii&&(xe=i.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,xe,_.width,_.height,0,_e,Ue,null)}}else $(_.depthTexture,0);let he=K.__webglTexture,me=qe(_),j=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,ie=_.depthTexture.format===ii?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===$n)Je(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,j,he,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,ie,j,he,0);else if(_.depthTexture.format===ii)Je(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,j,he,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,ie,j,he,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ne(D){let _=n.get(D),G=D.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==D.depthTexture){let W=D.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),W){let K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,W.removeEventListener("dispose",K)};W.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=W}if(D.depthTexture&&!_.__autoAllocateDepthBuffer)if(G)for(let W=0;W<6;W++)mt(_.__webglFramebuffer[W],D,W);else{let W=D.texture.mipmaps;W&&W.length>0?mt(_.__webglFramebuffer[0],D,0):mt(_.__webglFramebuffer,D,0)}else if(G){_.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[W]),_.__webglDepthbuffer[W]===void 0)_.__webglDepthbuffer[W]=i.createRenderbuffer(),Xe(_.__webglDepthbuffer[W],D,!1);else{let K=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=_.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,he)}}else{let W=D.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Xe(_.__webglDepthbuffer,D,!1);else{let K=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,he)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function re(D,_,G){let W=n.get(D);_!==void 0&&we(W.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&ne(D)}function oe(D){let _=D.texture,G=n.get(D),W=n.get(_);D.addEventListener("dispose",x);let K=D.textures,he=D.isWebGLCubeRenderTarget===!0,me=K.length>1;if(me||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=_.version,a.memory.textures++),he){G.__webglFramebuffer=[];for(let j=0;j<6;j++)if(_.mipmaps&&_.mipmaps.length>0){G.__webglFramebuffer[j]=[];for(let ie=0;ie<_.mipmaps.length;ie++)G.__webglFramebuffer[j][ie]=i.createFramebuffer()}else G.__webglFramebuffer[j]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){G.__webglFramebuffer=[];for(let j=0;j<_.mipmaps.length;j++)G.__webglFramebuffer[j]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(me)for(let j=0,ie=K.length;j<ie;j++){let _e=n.get(K[j]);_e.__webglTexture===void 0&&(_e.__webglTexture=i.createTexture(),a.memory.textures++)}if(D.samples>0&&Je(D)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let j=0;j<K.length;j++){let ie=K[j];G.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[j]);let _e=r.convert(ie.format,ie.colorSpace),Ue=r.convert(ie.type),xe=y(ie.internalFormat,_e,Ue,ie.normalized,ie.colorSpace,D.isXRRenderTarget===!0),ge=qe(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,xe,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,G.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),Xe(G.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(he){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Ye(i.TEXTURE_CUBE_MAP,_);for(let j=0;j<6;j++)if(_.mipmaps&&_.mipmaps.length>0)for(let ie=0;ie<_.mipmaps.length;ie++)we(G.__webglFramebuffer[j][ie],D,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ie);else we(G.__webglFramebuffer[j],D,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);p(_)&&S(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let j=0,ie=K.length;j<ie;j++){let _e=K[j],Ue=n.get(_e),xe=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(xe=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(xe,Ue.__webglTexture),Ye(xe,_e),we(G.__webglFramebuffer,D,_e,i.COLOR_ATTACHMENT0+j,xe,0),p(_e)&&S(xe)}t.unbindTexture()}else{let j=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(j=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(j,W.__webglTexture),Ye(j,_),_.mipmaps&&_.mipmaps.length>0)for(let ie=0;ie<_.mipmaps.length;ie++)we(G.__webglFramebuffer[ie],D,_,i.COLOR_ATTACHMENT0,j,ie);else we(G.__webglFramebuffer,D,_,i.COLOR_ATTACHMENT0,j,0);p(_)&&S(j),t.unbindTexture()}D.depthBuffer&&ne(D)}function ce(D){let _=D.textures;for(let G=0,W=_.length;G<W;G++){let K=_[G];if(p(K)){let he=T(D),me=n.get(K).__webglTexture;t.bindTexture(he,me),S(he),t.unbindTexture()}}}let pe=[],Ge=[];function Oe(D){if(D.samples>0){if(Je(D)===!1){let _=D.textures,G=D.width,W=D.height,K=i.COLOR_BUFFER_BIT,he=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=n.get(D),j=_.length>1;if(j)for(let _e=0;_e<_.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);let ie=D.texture.mipmaps;ie&&ie.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let _e=0;_e<_.length;_e++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),j){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,me.__webglColorRenderbuffer[_e]);let Ue=n.get(_[_e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ue,0)}i.blitFramebuffer(0,0,G,W,0,0,G,W,K,i.NEAREST),l===!0&&(pe.length=0,Ge.length=0,pe.push(i.COLOR_ATTACHMENT0+_e),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&(pe.push(he),Ge.push(he),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ge)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let _e=0;_e<_.length;_e++){t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,me.__webglColorRenderbuffer[_e]);let Ue=n.get(_[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,Ue,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&l){let _=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function qe(D){return Math.min(s.maxSamples,D.samples)}function Je(D){let _=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function O(D){let _=a.render.frame;h.get(D)!==_&&(h.set(D,_),D.update())}function ft(D,_){let G=D.colorSpace,W=D.format,K=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||G!==Ir&&G!==yi&&(ct.getTransfer(G)===_t?(W!==un||K!==an)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",G)),_}function st(D){return typeof HTMLImageElement!="undefined"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame!="undefined"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=C,this.getTextureUnits=P,this.setTextureUnits=R,this.setTexture2D=$,this.setTexture2DArray=z,this.setTexture3D=H,this.setTextureCube=J,this.rebindTextures=re,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Je,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Av(i,e){function t(n,s=yi){let r,a=ct.getTransfer(s);if(n===an)return i.UNSIGNED_BYTE;if(n===el)return i.UNSIGNED_SHORT_4_4_4_4;if(n===tl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===xh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===_h)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===mh)return i.BYTE;if(n===gh)return i.SHORT;if(n===Ks)return i.UNSIGNED_SHORT;if(n===Qo)return i.INT;if(n===Vn)return i.UNSIGNED_INT;if(n===wn)return i.FLOAT;if(n===Qt)return i.HALF_FLOAT;if(n===vh)return i.ALPHA;if(n===yh)return i.RGB;if(n===un)return i.RGBA;if(n===$n)return i.DEPTH_COMPONENT;if(n===ii)return i.DEPTH_STENCIL;if(n===nl)return i.RED;if(n===il)return i.RED_INTEGER;if(n===Hi)return i.RG;if(n===sl)return i.RG_INTEGER;if(n===rl)return i.RGBA_INTEGER;if(n===va||n===ya||n===Ma||n===Sa)if(a===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===va)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===va)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ma)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Sa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===al||n===ol||n===ll||n===cl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===al)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ol)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ll)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===cl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===hl||n===ul||n===dl||n===fl||n===pl||n===ba||n===ml)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===hl||n===ul)return a===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===dl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===fl)return r.COMPRESSED_R11_EAC;if(n===pl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ba)return r.COMPRESSED_RG11_EAC;if(n===ml)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===gl||n===xl||n===_l||n===vl||n===yl||n===Ml||n===Sl||n===bl||n===El||n===wl||n===Tl||n===Al||n===Rl||n===Cl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===gl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_l)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ml)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Sl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===bl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===El)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Tl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Al)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Rl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Cl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Pl||n===Il||n===Ll)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Pl)return a===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Il)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ll)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Dl||n===Nl||n===Ea||n===Ul)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Dl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Nl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ea)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ul)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Rv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cv=`
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

}`,qh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Wr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Dt({vertexShader:Rv,fragmentShader:Cv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ve(new mn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Yh=class extends Zn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,v=typeof XRWebGLBinding!="undefined",m=new qh,p={},S=t.getContextAttributes(),T=null,y=null,b=[],w=[],L=new ue,x=null,A=null,N=new en;N.viewport=new St;let I=new en;I.viewport=new St;let M=[N,I],C=new qo,P=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let Q=b[Z];return Q===void 0&&(Q=new Bs,b[Z]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Z){let Q=b[Z];return Q===void 0&&(Q=new Bs,b[Z]=Q),Q.getGripSpace()},this.getHand=function(Z){let Q=b[Z];return Q===void 0&&(Q=new Bs,b[Z]=Q),Q.getHandSpace()};function U(Z){let Q=w.indexOf(Z.inputSource);if(Q===-1)return;let le=b[Q];le!==void 0&&(le.update(Z.inputSource,Z.frame,c||a),le.dispatchEvent({type:Z.type,data:Z.inputSource}))}function V(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",$);for(let Z=0;Z<b.length;Z++){let Q=w[Z];Q!==null&&(w[Z]=null,b[Z].disconnect(Q))}P=null,R=null,m.reset();for(let Z in p)delete p[Z];if(e.setRenderTarget(T),f=null,u=null,d=null,s=null,y=null,nt.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(L.width,L.height,!1),A!==null){let Z=A.camera;Z.fov=A.fov,Z.zoom=A.zoom,Z.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",V),s.addEventListener("inputsourceschange",$),S.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(L),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Pe=null,we=null;S.depth&&(we=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=S.stencil?ii:$n,Pe=S.stencil?Gi:Vn);let Xe={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Xe),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new Gt(u.textureWidth,u.textureHeight,{format:un,type:an,depthTexture:new ti(u.textureWidth,u.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let le={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,le),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Gt(f.framebufferWidth,f.framebufferHeight,{format:un,type:an,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),nt.setContext(s),nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function $(Z){for(let Q=0;Q<Z.removed.length;Q++){let le=Z.removed[Q],Pe=w.indexOf(le);Pe>=0&&(w[Pe]=null,b[Pe].disconnect(le))}for(let Q=0;Q<Z.added.length;Q++){let le=Z.added[Q],Pe=w.indexOf(le);if(Pe===-1){for(let Xe=0;Xe<b.length;Xe++)if(Xe>=w.length){w.push(le),Pe=Xe;break}else if(w[Xe]===null){w[Xe]=le,Pe=Xe;break}if(Pe===-1)break}let we=b[Pe];we&&we.connect(le)}}let z=new F,H=new F;function J(Z,Q,le){z.setFromMatrixPosition(Q.matrixWorld),H.setFromMatrixPosition(le.matrixWorld);let Pe=z.distanceTo(H),we=Q.projectionMatrix.elements,Xe=le.projectionMatrix.elements,mt=we[14]/(we[10]-1),ne=we[14]/(we[10]+1),re=(we[9]+1)/we[5],oe=(we[9]-1)/we[5],ce=(we[8]-1)/we[0],pe=(Xe[8]+1)/Xe[0],Ge=mt*ce,Oe=mt*pe,qe=Pe/(-ce+pe),Je=qe*-ce;if(Q.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Je),Z.translateZ(qe),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),we[10]===-1)Z.projectionMatrix.copy(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let O=mt+qe,ft=ne+qe,st=Ge-Je,D=Oe+(Pe-Je),_=re*ne/ft*O,G=oe*ne/ft*O;Z.projectionMatrix.makePerspective(st,D,_,G,O,ft),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function de(Z,Q){Q===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(Q.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let Q=Z.near,le=Z.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(le=m.depthFar)),C.near=I.near=N.near=Q,C.far=I.far=N.far=le,(P!==C.near||R!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),P=C.near,R=C.far),C.layers.mask=Z.layers.mask|6,N.layers.mask=C.layers.mask&-5,I.layers.mask=C.layers.mask&-3;let Pe=Z.parent,we=C.cameras;de(C,Pe);for(let Xe=0;Xe<we.length;Xe++)de(we[Xe],Pe);we.length===2?J(C,N,I):C.projectionMatrix.copy(N.projectionMatrix),A===null&&Z.isPerspectiveCamera&&(A={camera:Z,fov:Z.fov,zoom:Z.zoom}),fe(Z,C,Pe)};function fe(Z,Q,le){le===null?Z.matrix.copy(Q.matrixWorld):(Z.matrix.copy(le.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(Q.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Mo*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(C)},this.getCameraTexture=function(Z){return p[Z]};let We=null;function Ye(Z,Q){if(h=Q.getViewerPose(c||a),g=Q,h!==null){let le=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Pe=!1;le.length!==C.cameras.length&&(C.cameras.length=0,Pe=!0);for(let ne=0;ne<le.length;ne++){let re=le[ne],oe=null;if(f!==null)oe=f.getViewport(re);else{let pe=d.getViewSubImage(u,re);oe=pe.viewport,ne===0&&(e.setRenderTargetTextures(y,pe.colorTexture,pe.depthStencilTexture),e.setRenderTarget(y))}let ce=M[ne];ce===void 0&&(ce=new en,ce.layers.enable(ne),ce.viewport=new St,M[ne]=ce),ce.matrix.fromArray(re.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(re.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(oe.x,oe.y,oe.width,oe.height),ne===0&&(C.matrix.copy(ce.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Pe===!0&&C.cameras.push(ce)}let we=s.enabledFeatures;if(we&&we.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=n.getBinding();let ne=d.getDepthInformation(le[0]);ne&&ne.isValid&&ne.texture&&m.init(ne,s.renderState)}if(we&&we.includes("camera-access")&&v){e.state.unbindTexture(),d=n.getBinding();for(let ne=0;ne<le.length;ne++){let re=le[ne].camera;if(re){let oe=p[re];oe||(oe=new Wr,p[re]=oe);let ce=d.getCameraImage(re);oe.sourceTexture=ce}}}}for(let le=0;le<b.length;le++){let Pe=w[le],we=b[le];Pe!==null&&we!==void 0&&we.update(Pe,Q,c||a)}We&&We(Z,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let nt=new Sf;nt.setAnimationLoop(Ye),this.setAnimationLoop=function(Z){We=Z},this.dispose=function(){}}},Pv=new it,Rf=new tt;Rf.set(-1,0,0,0,1,0,0,0,1);function Iv(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Eh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,T,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===$t&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===$t&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=e.get(p),T=S.envMap,y=S.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(Pv.makeRotationFromEuler(y)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Rf),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$t&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Lv(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){let w=b.program;n.uniformBlockBinding(y,w)}function c(y,b){let w=s[y.id];w===void 0&&(m(y),w=h(y),s[y.id]=w,y.addEventListener("dispose",S));let L=b.program;n.updateUBOMapping(y,L);let x=e.render.frame;r[y.id]!==x&&(u(y),r[y.id]=x)}function h(y){let b=d();y.__bindingPointIndex=b;let w=i.createBuffer(),L=y.__size,x=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,L,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,w),w}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return $e("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let b=s[y.id],w=y.uniforms,L=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let x=0,A=w.length;x<A;x++){let N=w[x];if(Array.isArray(N))for(let I=0,M=N.length;I<M;I++)f(N[I],x,I,L);else f(N,x,0,L)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,b,w,L){if(v(y,b,w,L)===!0){let x=y.__offset,A=y.value;if(Array.isArray(A)){let N=0;for(let I=0;I<A.length;I++){let M=A[I],C=p(M);g(M,y.__data,N),typeof M!="number"&&typeof M!="boolean"&&!M.isMatrix3&&!ArrayBuffer.isView(M)&&(N+=C.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,y.__data)}}function g(y,b,w){typeof y=="number"||typeof y=="boolean"?b[0]=y:y.isMatrix3?(b[0]=y.elements[0],b[1]=y.elements[1],b[2]=y.elements[2],b[3]=0,b[4]=y.elements[3],b[5]=y.elements[4],b[6]=y.elements[5],b[7]=0,b[8]=y.elements[6],b[9]=y.elements[7],b[10]=y.elements[8],b[11]=0):ArrayBuffer.isView(y)?b.set(new y.constructor(y.buffer,y.byteOffset,b.length)):y.toArray(b,w)}function v(y,b,w,L){let x=y.value,A=b+"_"+w;if(L[A]===void 0)return typeof x=="number"||typeof x=="boolean"?L[A]=x:ArrayBuffer.isView(x)?L[A]=x.slice():L[A]=x.clone(),!0;{let N=L[A];if(typeof x=="number"||typeof x=="boolean"){if(N!==x)return L[A]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(N.equals(x)===!1)return N.copy(x),!0}}return!1}function m(y){let b=y.uniforms,w=0,L=16;for(let A=0,N=b.length;A<N;A++){let I=Array.isArray(b[A])?b[A]:[b[A]];for(let M=0,C=I.length;M<C;M++){let P=I[M],R=Array.isArray(P.value)?P.value:[P.value];for(let U=0,V=R.length;U<V;U++){let $=R[U],z=p($),H=w%L,J=H%z.boundary,de=H+J;w+=J,de!==0&&L-de<z.storage&&(w+=L-de),P.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=w,w+=z.storage}}}let x=w%L;return x>0&&(w+=L-x),y.__size=w,y.__cache={},this}function p(y){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):He("WebGLRenderer: Unsupported uniform value type.",y),b}function S(y){let b=y.target;b.removeEventListener("dispose",S);let w=a.indexOf(b.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function T(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:T}}var Dv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),si=null;function Nv(){return si===null&&(si=new ei(Dv,16,16,Hi,Qt),si.name="DFG_LUT",si.minFilter=tn,si.magFilter=tn,si.wrapS=Yn,si.wrapT=Yn,si.generateMipmaps=!1,si.needsUpdate=!0),si}var Vl=class{constructor(e={}){let{canvas:t=Hd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=an}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let v=f,m=new Set([rl,sl,il]),p=new Set([an,Vn,Ks,Gi,el,tl]),S=new Uint32Array(4),T=new Int32Array(4),y=new F,b=null,w=null,L=[],x=[],A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,I=!1,M=null,C=null,P=null,R=null;this._outputColorSpace=kt;let U=0,V=0,$=null,z=-1,H=null,J=new St,de=new St,fe=null,We=new ke(0),Ye=0,nt=t.width,Z=t.height,Q=1,le=null,Pe=null,we=new St(0,0,nt,Z),Xe=new St(0,0,nt,Z),mt=!1,ne=new zs,re=!1,oe=!1,ce=new it,pe=new F,Ge=new St,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qe=!1;function Je(){return $===null?Q:1}let O=n;function ft(E,B){return t.getContext(E,B)}let st,D,_,G,W,K,he,me,j,ie,_e,Ue,xe,ge,Ie,Be,Ke,k,ve,ee,ye,Te,se;try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",At,!1),t.addEventListener("webglcontextrestored",vt,!1),t.addEventListener("webglcontextcreationerror",Ln,!1),O===null){let B="webgl2";if(O=ft(B,E),O===null)throw ft(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ze()}catch(E){throw t.removeEventListener("webglcontextlost",At,!1),t.removeEventListener("webglcontextrestored",vt,!1),t.removeEventListener("webglcontextcreationerror",Ln,!1),$e("WebGLRenderer: "+E.message),E}function ze(){st=new Vx(O),st.init(),ye=new Av(O,st),D=new Ix(O,st,e,ye),_=new wv(O,st),D.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),C=O.createFramebuffer(),P=O.createFramebuffer(),R=O.createFramebuffer(),G=new Wx(O),W=new uv,K=new Tv(O,st,_,W,D,ye,G),he=new zx(N),me=new q0(O),Te=new Cx(O,me),j=new Gx(O,me,G,Te),ie=new qx(O,j,me,Te,G),k=new Xx(O,D,K),Ie=new Lx(W),_e=new hv(N,he,st,D,Te,Ie),Ue=new Iv(N,W),xe=new fv,ge=new vv(st),Ke=new Rx(N,he,_,ie,g,l),Be=new Ev(N,ie,D),se=new Lv(O,G,D,_),ve=new Px(O,st,G),ee=new Hx(O,st,G),G.programs=_e.programs,N.capabilities=D,N.extensions=st,N.properties=W,N.renderLists=xe,N.shadowMap=Be,N.state=_,N.info=G}v!==an&&(A=new $x(v,t.width,t.height,o,s,r));let Ne=new Yh(N,O);this.xr=Ne,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let E=st.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=st.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(E){E!==void 0&&(Q=E,this.setSize(nt,Z,!1))},this.getSize=function(E){return E.set(nt,Z)},this.setSize=function(E,B,Y=!0){if(Ne.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}nt=E,Z=B,t.width=Math.floor(E*Q),t.height=Math.floor(B*Q),Y===!0&&(t.style.width=E+"px",t.style.height=B+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(nt*Q,Z*Q).floor()},this.setDrawingBufferSize=function(E,B,Y){nt=E,Z=B,Q=Y,t.width=Math.floor(E*Y),t.height=Math.floor(B*Y),this.setViewport(0,0,E,B)},this.setEffects=function(E){if(v===an){$e("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let B=0;B<E.length;B++)if(E[B].isOutputPass===!0){He("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(J)},this.getViewport=function(E){return E.copy(we)},this.setViewport=function(E,B,Y,X){E.isVector4?we.set(E.x,E.y,E.z,E.w):we.set(E,B,Y,X),_.viewport(J.copy(we).multiplyScalar(Q).round())},this.getScissor=function(E){return E.copy(Xe)},this.setScissor=function(E,B,Y,X){E.isVector4?Xe.set(E.x,E.y,E.z,E.w):Xe.set(E,B,Y,X),_.scissor(de.copy(Xe).multiplyScalar(Q).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(E){_.setScissorTest(mt=E)},this.setOpaqueSort=function(E){le=E},this.setTransparentSort=function(E){Pe=E},this.getClearColor=function(E){return E.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor(...arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha(...arguments)},this.clear=function(E=!0,B=!0,Y=!0){let X=0;if(E){let q=!1;if($!==null){let Ee=$.texture.format;q=m.has(Ee)}if(q){let Ee=$.texture.type,Ce=p.has(Ee),Se=Ke.getClearColor(),Le=Ke.getClearAlpha(),Fe=Se.r,rt=Se.g,ht=Se.b;Ce?(S[0]=Fe,S[1]=rt,S[2]=ht,S[3]=Le,O.clearBufferuiv(O.COLOR,0,S)):(T[0]=Fe,T[1]=rt,T[2]=ht,T[3]=Le,O.clearBufferiv(O.COLOR,0,T))}else X|=O.COLOR_BUFFER_BIT}B&&(X|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(X|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&O.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),M=E},this.dispose=function(){t.removeEventListener("webglcontextlost",At,!1),t.removeEventListener("webglcontextrestored",vt,!1),t.removeEventListener("webglcontextcreationerror",Ln,!1),Ke.dispose(),xe.dispose(),ge.dispose(),W.dispose(),he.dispose(),ie.dispose(),Te.dispose(),se.dispose(),_e.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",bu),Ne.removeEventListener("sessionend",Eu),$i.stop()};function At(E){E.preventDefault(),Sh("WebGLRenderer: Context Lost."),I=!0}function vt(){Sh("WebGLRenderer: Context Restored."),I=!1;let E=G.autoReset,B=Be.enabled,Y=Be.autoUpdate,X=Be.needsUpdate,q=Be.type;ze(),G.autoReset=E,Be.enabled=B,Be.autoUpdate=Y,Be.needsUpdate=X,Be.type=q}function Ln(E){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Wn(E){let B=E.target;B.removeEventListener("dispose",Wn),Ap(B)}function Ap(E){Rp(E),W.remove(E)}function Rp(E){let B=W.get(E).programs;B!==void 0&&(B.forEach(function(Y){_e.releaseProgram(Y)}),E.isShaderMaterial&&_e.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,Y,X,q,Ee){B===null&&(B=Oe);let Ce=q.isMesh&&q.matrixWorld.determinantAffine()<0,Se=Ip(E,B,Y,X,q);_.setMaterial(X,Ce);let Le=Y.index,Fe=1;if(X.wireframe===!0){if(Le=j.getWireframeAttribute(Y),Le===void 0)return;Fe=2}let rt=Y.drawRange,ht=Y.attributes.position,De=rt.start*Fe,yt=(rt.start+rt.count)*Fe;Ee!==null&&(De=Math.max(De,Ee.start*Fe),yt=Math.min(yt,(Ee.start+Ee.count)*Fe)),Le!==null?(De=Math.max(De,0),yt=Math.min(yt,Le.count)):ht!=null&&(De=Math.max(De,0),yt=Math.min(yt,ht.count));let Xt=yt-De;if(Xt<0||Xt===1/0)return;Te.setup(q,X,Se,Y,Le);let It,Et=ve;if(Le!==null&&(It=me.get(Le),Et=ee,Et.setIndex(It)),q.isMesh)X.wireframe===!0?(_.setLineWidth(X.wireframeLinewidth*Je()),Et.setMode(O.LINES)):Et.setMode(O.TRIANGLES);else if(q.isLine){let nn=X.linewidth;nn===void 0&&(nn=1),_.setLineWidth(nn*Je()),q.isLineSegments?Et.setMode(O.LINES):q.isLineLoop?Et.setMode(O.LINE_LOOP):Et.setMode(O.LINE_STRIP)}else q.isPoints?Et.setMode(O.POINTS):q.isSprite&&Et.setMode(O.TRIANGLES);if(q.isBatchedMesh)if(st.get("WEBGL_multi_draw"))Et.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let nn=q._multiDrawStarts,Re=q._multiDrawCounts,ln=q._multiDrawCount,gt=Le?me.get(Le).bytesPerElement:1,Rn=W.get(X).currentProgram.getUniforms();for(let Xn=0;Xn<ln;Xn++)Rn.setValue(O,"_gl_DrawID",Xn),Et.render(nn[Xn]/gt,Re[Xn])}else if(q.isInstancedMesh)Et.renderInstances(De,Xt,q.count);else if(Y.isInstancedBufferGeometry){let nn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Re=Math.min(Y.instanceCount,nn);Et.renderInstances(De,Xt,Re)}else Et.render(De,Xt)};function Su(E,B,Y,X){M!==null&&E.isNodeMaterial&&M.setObject(X,E),re===!0&&Ie.setState(E,Y,!1),E.transparent===!0&&E.side===ni&&E.forceSinglePass===!1?(E.side=$t,E.needsUpdate=!0,ka(E,B,X),E.side=ki,E.needsUpdate=!0,ka(E,B,X),E.side=ni):ka(E,B,X)}this.compile=function(E,B,Y=null){Y===null&&(Y=E),M!==null&&M.renderStart(E,B,Y),w=ge.get(Y),w.init(B),x.push(w),Y.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),E!==Y&&E.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),w.setupLights(),M!==null&&M.updateLights(w.state.lightsArray),oe=this.localClippingEnabled,re=Ie.init(this.clippingPlanes,oe),re===!0&&Ie.setGlobalState(this.clippingPlanes,B),M!==null&&Be.render(w.state.shadowsArray,Y,B);let X=new Set;return E.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let Ee=q.material;if(Ee)if(Array.isArray(Ee))for(let Ce=0;Ce<Ee.length;Ce++){let Se=Ee[Ce];Su(Se,Y,B,q),X.add(Se)}else Su(Ee,Y,B,q),X.add(Ee)}),w=x.pop(),M!==null&&M.renderEnd(),X},this.compileAsync=function(E,B,Y=null){let X=this.compile(E,B,Y);return new Promise(q=>{function Ee(){if(X.forEach(function(Ce){let Le=W.get(Ce).currentProgram;(Le===void 0||Le.isReady())&&X.delete(Ce)}),X.size===0){q(E);return}setTimeout(Ee,10)}st.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let vc=null;function Cp(E){vc&&vc(E)}function bu(){$i.stop()}function Eu(){$i.start()}let $i=new Sf;$i.setAnimationLoop(Cp),typeof self!="undefined"&&$i.setContext(self),this.setAnimationLoop=function(E){vc=E,Ne.setAnimationLoop(E),E===null?$i.stop():$i.start()},Ne.addEventListener("sessionstart",bu),Ne.addEventListener("sessionend",Eu),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;M!==null&&M.renderStart(E,B);let Y=Ne.enabled===!0&&Ne.isPresenting===!0,X=A!==null&&($===null||Y)&&A.begin(N,$);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(B),B=Ne.getCamera()),E.isScene===!0&&E.onBeforeRender(N,E,B,$),w=ge.get(E,x.length),w.init(B),w.state.textureUnits=K.getTextureUnits(),x.push(w),ce.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ne.setFromProjectionMatrix(ce,On,B.reversedDepth),oe=this.localClippingEnabled,re=Ie.init(this.clippingPlanes,oe),b=xe.get(E,L.length),b.init(),L.push(b),Ne.enabled===!0&&Ne.isPresenting===!0){let Ce=N.xr.getDepthSensingMesh();Ce!==null&&yc(Ce,B,-1/0,N.sortObjects)}yc(E,B,0,N.sortObjects),b.finish(),M!==null&&M.updateLights(w.state.lightsArray),N.sortObjects===!0&&b.sort(le,Pe),qe=Ne.enabled===!1||Ne.isPresenting===!1||Ne.hasDepthSensing()===!1,qe&&Ke.addToRenderList(b,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),re===!0&&Ie.beginShadows();let q=w.state.shadowsArray;if(Be.render(q,E,B),re===!0&&Ie.endShadows(),(X&&A.hasRenderPass())===!1){let Ce=b.opaque,Se=b.transmissive;if(w.setupLights(),B.isArrayCamera){let Le=B.cameras;if(Se.length>0)for(let Fe=0,rt=Le.length;Fe<rt;Fe++){let ht=Le[Fe];Tu(Ce,Se,E,ht)}qe&&Ke.render(E);for(let Fe=0,rt=Le.length;Fe<rt;Fe++){let ht=Le[Fe];wu(b,E,ht,ht.viewport)}}else Se.length>0&&Tu(Ce,Se,E,B),qe&&Ke.render(E),wu(b,E,B)}$!==null&&V===0&&(K.updateMultisampleRenderTarget($),K.updateRenderTargetMipmap($)),X&&A.end(N),E.isScene===!0&&E.onAfterRender(N,E,B),Te.resetDefaultState(),z=-1,H=null,x.pop(),x.length>0?(w=x[x.length-1],K.setTextureUnits(w.state.textureUnits),re===!0&&Ie.setGlobalState(N.clippingPlanes,w.state.camera)):w=null,L.pop(),L.length>0?b=L[L.length-1]:b=null,M!==null&&M.renderEnd()};function yc(E,B,Y,X){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLightProbeGrid)w.pushLightProbeGrid(E);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(ne)){X&&Ge.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ce);let Ce=ie.update(E),Se=E.material;Se.visible&&b.push(E,Ce,Se,Y,Ge.z,null,B)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(ne))){let Ce=ie.update(E),Se=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ge.copy(E.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Ge.copy(Ce.boundingSphere.center)),Ge.applyMatrix4(E.matrixWorld).applyMatrix4(ce)),Array.isArray(Se)){let Le=Ce.groups;for(let Fe=0,rt=Le.length;Fe<rt;Fe++){let ht=Le[Fe],De=Se[ht.materialIndex];De&&De.visible&&b.push(E,Ce,De,Y,Ge.z,ht,B)}}else Se.visible&&b.push(E,Ce,Se,Y,Ge.z,null,B)}}let Ee=E.children;for(let Ce=0,Se=Ee.length;Ce<Se;Ce++)yc(Ee[Ce],B,Y,X)}function wu(E,B,Y,X){let{opaque:q,transmissive:Ee,transparent:Ce}=E;w.setupLightsView(Y),re===!0&&Ie.setGlobalState(N.clippingPlanes,Y),X&&_.viewport(J.copy(X)),q.length>0&&Ba(q,B,Y),Ee.length>0&&Ba(Ee,B,Y),Ce.length>0&&Ba(Ce,B,Y),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Tu(E,B,Y,X){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[X.id]===void 0){let De=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[X.id]=new Gt(1,1,{generateMipmaps:!0,type:De?Qt:an,minFilter:Vi,samples:Math.max(4,D.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ct.workingColorSpace})}let Ee=w.state.transmissionRenderTarget[X.id],Ce=X.viewport||J;Ee.setSize(Ce.z*N.transmissionResolutionScale,Ce.w*N.transmissionResolutionScale);let Se=N.getRenderTarget(),Le=N.getActiveCubeFace(),Fe=N.getActiveMipmapLevel();N.setRenderTarget(Ee),N.getClearColor(We),Ye=N.getClearAlpha(),Ye<1&&N.setClearColor(16777215,.5),N.clear(),qe&&Ke.render(Y);let rt=N.toneMapping;N.toneMapping=zn;let ht=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),w.setupLightsView(X),re===!0&&Ie.setGlobalState(N.clippingPlanes,X),Ba(E,Y,X),K.updateMultisampleRenderTarget(Ee),K.updateRenderTargetMipmap(Ee),st.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let yt=0,Xt=B.length;yt<Xt;yt++){let It=B[yt],{object:Et,geometry:nn,material:Re,group:ln}=It;if(Re.side===ni&&Et.layers.test(X.layers)){let gt=Re.side;Re.side=$t,Re.needsUpdate=!0,Au(Et,Y,X,nn,Re,ln),Re.side=gt,Re.needsUpdate=!0,De=!0}}De===!0&&(K.updateMultisampleRenderTarget(Ee),K.updateRenderTargetMipmap(Ee))}N.setRenderTarget(Se,Le,Fe),N.setClearColor(We,Ye),ht!==void 0&&(X.viewport=ht),N.toneMapping=rt}function Ba(E,B,Y){let X=B.isScene===!0?B.overrideMaterial:null;for(let q=0,Ee=E.length;q<Ee;q++){let Ce=E[q],{object:Se,geometry:Le,group:Fe}=Ce,rt=Ce.material;rt.allowOverride===!0&&X!==null&&(rt=X),Se.layers.test(Y.layers)&&Au(Se,B,Y,Le,rt,Fe)}}function Au(E,B,Y,X,q,Ee){M!==null&&q.isNodeMaterial&&M.setObject(E,q),E.onBeforeRender(N,B,Y,X,q,Ee),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),q.onBeforeRender(N,B,Y,X,E,Ee),q.transparent===!0&&q.side===ni&&q.forceSinglePass===!1?(q.side=$t,q.needsUpdate=!0,N.renderBufferDirect(Y,B,X,q,E,Ee),q.side=ki,q.needsUpdate=!0,N.renderBufferDirect(Y,B,X,q,E,Ee),q.side=ni):N.renderBufferDirect(Y,B,X,q,E,Ee),E.onAfterRender(N,B,Y,X,q,Ee)}function ka(E,B,Y){B.isScene!==!0&&(B=Oe);let X=W.get(E),q=w.state.lights,Ee=w.state.shadowsArray,Ce=q.state.version,Se=_e.getParameters(E,q.state,Ee,B,Y,w.state.lightProbeGridArray),Le=_e.getProgramCacheKey(Se),Fe=X.programs;X.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?B.environment:null,X.fog=B.fog;let rt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;X.envMap=he.get(E.envMap||X.environment,rt),X.envMapRotation=X.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,Fe===void 0&&(E.addEventListener("dispose",Wn),Fe=new Map,X.programs=Fe);let ht=Fe.get(Le);if(ht!==void 0){if(X.currentProgram===ht&&X.lightsStateVersion===Ce)return Cu(E,Se),ht}else Se.uniforms=_e.getUniforms(E),M!==null&&E.isNodeMaterial&&M.build(E,Y,Se),E.onBeforeCompile(Se,N),ht=_e.acquireProgram(Se,Le),Fe.set(Le,ht),X.uniforms=Se.uniforms;let De=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(De.clippingPlanes=Ie.uniform),Cu(E,Se),X.needsLights=Dp(E),X.lightsStateVersion=Ce,X.needsLights&&(De.ambientLightColor.value=q.state.ambient,De.lightProbe.value=q.state.probe,De.sunLights.value=q.state.sun,De.sunLightShadows.value=q.state.sunShadow,De.directionalLights.value=q.state.directional,De.directionalLightShadows.value=q.state.directionalShadow,De.spotLights.value=q.state.spot,De.spotLightShadows.value=q.state.spotShadow,De.rectAreaLights.value=q.state.rectArea,De.ltc_1.value=q.state.rectAreaLTC1,De.ltc_2.value=q.state.rectAreaLTC2,De.pointLights.value=q.state.point,De.pointLightShadows.value=q.state.pointShadow,De.hemisphereLights.value=q.state.hemi,De.sunShadowMatrix.value=q.state.sunShadowMatrix,De.sunShadowCascade.value=q.state.sunShadowCascade,De.directionalShadowMatrix.value=q.state.directionalShadowMatrix,De.spotLightMatrix.value=q.state.spotLightMatrix,De.spotLightMap.value=q.state.spotLightMap,De.pointShadowMatrix.value=q.state.pointShadowMatrix),X.lightProbeGrid=w.state.lightProbeGridArray.length>0,X.currentProgram=ht,X.uniformsList=null,ht}function Ru(E){if(E.uniformsList===null){let B=E.currentProgram.getUniforms();E.uniformsList=tr.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function Cu(E,B){let Y=W.get(E);Y.outputColorSpace=B.outputColorSpace,Y.batching=B.batching,Y.batchingColor=B.batchingColor,Y.instancing=B.instancing,Y.instancingColor=B.instancingColor,Y.instancingMorph=B.instancingMorph,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function Pp(E,B){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;y.setFromMatrixPosition(B.matrixWorld);for(let Y=0,X=E.length;Y<X;Y++){let q=E[Y];if(q.texture!==null&&q.boundingBox.containsPoint(y))return q}return null}function Ip(E,B,Y,X,q){B.isScene!==!0&&(B=Oe),K.resetTextureUnits();let Ee=B.fog,Ce=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?B.environment:null,Se=$===null?N.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:ct.workingColorSpace,Le=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Fe=he.get(X.envMap||Ce,Le),rt=X.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ht=!!Y.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),De=!!Y.morphAttributes.position,yt=!!Y.morphAttributes.normal,Xt=!!Y.morphAttributes.color,It=zn;X.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(It=N.toneMapping);let Et=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,nn=Et!==void 0?Et.length:0,Re=W.get(X),ln=w.state.lights;if(re===!0&&(oe===!0||E!==H)){let Rt=E===H&&X.id===z;Ie.setState(X,E,Rt)}let gt=!1;X.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==ln.state.version||Re.outputColorSpace!==Se||q.isBatchedMesh&&Re.batching===!1||!q.isBatchedMesh&&Re.batching===!0||q.isBatchedMesh&&Re.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Re.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Re.instancing===!1||!q.isInstancedMesh&&Re.instancing===!0||q.isSkinnedMesh&&Re.skinning===!1||!q.isSkinnedMesh&&Re.skinning===!0||q.isInstancedMesh&&Re.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Re.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Re.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Re.instancingMorph===!1&&q.morphTexture!==null||Re.envMap!==Fe||X.fog===!0&&Re.fog!==Ee||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==Ie.numPlanes||Re.numIntersection!==Ie.numIntersection)||Re.vertexAlphas!==rt||Re.vertexTangents!==ht||Re.morphTargets!==De||Re.morphNormals!==yt||Re.morphColors!==Xt||Re.toneMapping!==It||Re.morphTargetsCount!==nn||!!Re.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(gt=!0):(gt=!0,Re.__version=X.version);let Rn=Re.currentProgram;gt===!0&&(Rn=ka(X,B,q),M&&X.isNodeMaterial&&M.onUpdateProgram(X,Rn,Re));let Xn=!1,Ei=!1,xs=!1,bt=Rn.getUniforms(),Bt=Re.uniforms;if(_.useProgram(Rn.program)&&(Xn=!0,Ei=!0,xs=!0),X.id!==z&&(z=X.id,Ei=!0),Re.needsLights){let Rt=Pp(w.state.lightProbeGridArray,q);Re.lightProbeGrid!==Rt&&(Re.lightProbeGrid=Rt,Ei=!0)}if(Xn||H!==E){_.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),bt.setValue(O,"projectionMatrix",E.projectionMatrix),bt.setValue(O,"viewMatrix",E.matrixWorldInverse);let Ti=bt.map.cameraPosition;Ti!==void 0&&Ti.setValue(O,pe.setFromMatrixPosition(E.matrixWorld)),D.logarithmicDepthBuffer&&bt.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&bt.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),H!==E&&(H=E,Ei=!0,xs=!0)}if(Re.needsLights&&(ln.state.sunShadowMap.length>0&&bt.setValue(O,"sunShadowMap",ln.state.sunShadowMap,K),ln.state.directionalShadowMap.length>0&&bt.setValue(O,"directionalShadowMap",ln.state.directionalShadowMap,K),ln.state.spotShadowMap.length>0&&bt.setValue(O,"spotShadowMap",ln.state.spotShadowMap,K),ln.state.pointShadowMap.length>0&&bt.setValue(O,"pointShadowMap",ln.state.pointShadowMap,K)),q.isSkinnedMesh){bt.setOptional(O,q,"bindMatrix"),bt.setOptional(O,q,"bindMatrixInverse");let Rt=q.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),bt.setValue(O,"boneTexture",Rt.boneTexture,K))}q.isBatchedMesh&&(bt.setOptional(O,q,"batchingTexture"),bt.setValue(O,"batchingTexture",q._matricesTexture,K),bt.setOptional(O,q,"batchingIdTexture"),bt.setValue(O,"batchingIdTexture",q._indirectTexture,K),bt.setOptional(O,q,"batchingColorTexture"),q._colorsTexture!==null&&bt.setValue(O,"batchingColorTexture",q._colorsTexture,K));let wi=Y.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&k.update(q,Y,Rn),(Ei||Re.receiveShadow!==q.receiveShadow)&&(Re.receiveShadow=q.receiveShadow,bt.setValue(O,"receiveShadow",q.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&B.environment!==null&&(Bt.envMapIntensity.value=B.environmentIntensity),Bt.dfgLUT!==void 0&&(Bt.dfgLUT.value=Nv()),Ei){if(bt.setValue(O,"toneMappingExposure",N.toneMappingExposure),Re.needsLights&&Lp(Bt,xs),Ee&&X.fog===!0&&Ue.refreshFogUniforms(Bt,Ee),Ue.refreshMaterialUniforms(Bt,X,Q,Z,w.state.transmissionRenderTarget[E.id]),Re.needsLights&&Re.lightProbeGrid){let Rt=Re.lightProbeGrid;Bt.probesSH.value=Rt.texture,Bt.probesMin.value.copy(Rt.boundingBox.min),Bt.probesMax.value.copy(Rt.boundingBox.max),Bt.probesResolution.value.copy(Rt.resolution)}tr.upload(O,Ru(Re),Bt,K)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(tr.upload(O,Ru(Re),Bt,K),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&bt.setValue(O,"center",q.center),bt.setValue(O,"modelViewMatrix",q.modelViewMatrix),bt.setValue(O,"normalMatrix",q.normalMatrix),bt.setValue(O,"modelMatrix",q.matrixWorld),X.uniformsGroups!==void 0){let Rt=X.uniformsGroups;for(let Ti=0,_s=Rt.length;Ti<_s;Ti++){let Iu=Rt[Ti];se.update(Iu,Rn),se.bind(Iu,Rn)}}return Rn}function Lp(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.sunLights.needsUpdate=B,E.sunLightShadows.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function Dp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(E,B,Y){let X=W.get(E);X.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),W.get(E.texture).__webglTexture=B,W.get(E.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:Y,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,B){let Y=W.get(E);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,Y=0){$=E,U=B,V=Y;let X=null,q=!1,Ee=!1;if(E){let Se=W.get(E);if(Se.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(O.FRAMEBUFFER,Se.__webglFramebuffer),J.copy(E.viewport),de.copy(E.scissor),fe=E.scissorTest,_.viewport(J),_.scissor(de),_.setScissorTest(fe),z=-1;return}else if(Se.__webglFramebuffer===void 0)K.setupRenderTarget(E);else if(Se.__hasExternalTextures)K.rebindTextures(E,W.get(E.texture).__webglTexture,W.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let rt=E.depthTexture;if(Se.__boundDepthTexture!==rt){if(rt!==null&&W.has(rt)&&(E.width!==rt.image.width||E.height!==rt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(E)}}let Le=E.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(Ee=!0);let Fe=W.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Fe[B])?X=Fe[B][Y]:X=Fe[B],q=!0):E.samples>0&&K.useMultisampledRTT(E)===!1?X=W.get(E).__webglMultisampledFramebuffer:Array.isArray(Fe)?X=Fe[Y]:X=Fe,J.copy(E.viewport),de.copy(E.scissor),fe=E.scissorTest}else J.copy(we).multiplyScalar(Q).floor(),de.copy(Xe).multiplyScalar(Q).floor(),fe=mt;if(Y!==0&&(X=C),_.bindFramebuffer(O.FRAMEBUFFER,X)&&_.drawBuffers(E,X),_.viewport(J),_.scissor(de),_.setScissorTest(fe),q){let Se=W.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+B,Se.__webglTexture,Y)}else if(Ee){let Se=B;for(let Le=0;Le<E.textures.length;Le++){let Fe=W.get(E.textures[Le]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Le,Fe.__webglTexture,Y,Se)}}else if(E!==null&&Y!==0){let Se=W.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Se.__webglTexture,Y)}z=-1};function Pu(E){let B=W.get(E);return(B.__readFormat!==E.format||B.__readType!==E.type)&&(B.__readFormat=E.format,B.__readType=E.type,B.__formatReadable=D.textureFormatReadable(E.format),B.__typeReadable=D.textureTypeReadable(E.type)),B}this.readRenderTargetPixels=function(E,B,Y,X,q,Ee,Ce,Se=0){if(!(E&&E.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=W.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ce!==void 0&&(Le=Le[Ce]),Le){_.bindFramebuffer(O.FRAMEBUFFER,Le);try{let Fe=E.textures[Se],rt=Fe.format,ht=Fe.type;E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Se);let De=Pu(Fe);if(De.__formatReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(De.__typeReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-X&&Y>=0&&Y<=E.height-q&&O.readPixels(B,Y,X,q,ye.convert(rt),ye.convert(ht),Ee)}finally{let Fe=$!==null?W.get($).__webglFramebuffer:null;_.bindFramebuffer(O.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(E,B,Y,X,q,Ee,Ce,Se=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=W.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ce!==void 0&&(Le=Le[Ce]),Le)if(B>=0&&B<=E.width-X&&Y>=0&&Y<=E.height-q){_.bindFramebuffer(O.FRAMEBUFFER,Le);let Fe=E.textures[Se],rt=Fe.format,ht=Fe.type;E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Se);let De=Pu(Fe);if(De.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(De.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let yt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,yt),O.bufferData(O.PIXEL_PACK_BUFFER,Ee.byteLength,O.STREAM_READ),O.readPixels(B,Y,X,q,ye.convert(rt),ye.convert(ht),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Xt=$!==null?W.get($).__webglFramebuffer:null;_.bindFramebuffer(O.FRAMEBUFFER,Xt);let It=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Xd(O,It,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,yt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Ee),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(yt),O.deleteSync(It),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,B=null,Y=0){let X=Math.pow(2,-Y),q=Math.floor(E.image.width*X),Ee=Math.floor(E.image.height*X),Ce=B!==null?B.x:0,Se=B!==null?B.y:0;K.setTexture2D(E,0),O.copyTexSubImage2D(O.TEXTURE_2D,Y,0,0,Ce,Se,q,Ee),_.unbindTexture()},this.copyTextureToTexture=function(E,B,Y=null,X=null,q=0,Ee=0){let Ce,Se,Le,Fe,rt,ht,De,yt,Xt,It=E.isCompressedTexture?E.mipmaps[Ee]:E.image;if(Y!==null)Ce=Y.max.x-Y.min.x,Se=Y.max.y-Y.min.y,Le=Y.isBox3?Y.max.z-Y.min.z:1,Fe=Y.min.x,rt=Y.min.y,ht=Y.isBox3?Y.min.z:0;else{let Bt=Math.pow(2,-q);Ce=Math.floor(It.width*Bt),Se=Math.floor(It.height*Bt),E.isDataArrayTexture?Le=It.depth:E.isData3DTexture?Le=Math.floor(It.depth*Bt):Le=1,Fe=0,rt=0,ht=0}X!==null?(De=X.x,yt=X.y,Xt=X.z):(De=0,yt=0,Xt=0);let Et=ye.convert(B.format),nn=ye.convert(B.type),Re;B.isData3DTexture?(K.setTexture3D(B,0),Re=O.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(K.setTexture2DArray(B,0),Re=O.TEXTURE_2D_ARRAY):(K.setTexture2D(B,0),Re=O.TEXTURE_2D),_.activeTexture(O.TEXTURE0),_.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,B.flipY),_.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),_.pixelStorei(O.UNPACK_ALIGNMENT,B.unpackAlignment);let ln=_.getParameter(O.UNPACK_ROW_LENGTH),gt=_.getParameter(O.UNPACK_IMAGE_HEIGHT),Rn=_.getParameter(O.UNPACK_SKIP_PIXELS),Xn=_.getParameter(O.UNPACK_SKIP_ROWS),Ei=_.getParameter(O.UNPACK_SKIP_IMAGES);_.pixelStorei(O.UNPACK_ROW_LENGTH,It.width),_.pixelStorei(O.UNPACK_IMAGE_HEIGHT,It.height),_.pixelStorei(O.UNPACK_SKIP_PIXELS,Fe),_.pixelStorei(O.UNPACK_SKIP_ROWS,rt),_.pixelStorei(O.UNPACK_SKIP_IMAGES,ht);let xs=E.isDataArrayTexture||E.isData3DTexture,bt=B.isDataArrayTexture||B.isData3DTexture;if(E.isDepthTexture){let Bt=W.get(E),wi=W.get(B),Rt=W.get(Bt.__renderTarget),Ti=W.get(wi.__renderTarget);_.bindFramebuffer(O.READ_FRAMEBUFFER,Rt.__webglFramebuffer),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let _s=0;_s<Le;_s++)xs&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,W.get(E).__webglTexture,q,ht+_s),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,W.get(B).__webglTexture,Ee,Xt+_s)),O.blitFramebuffer(Fe,rt,Ce,Se,De,yt,Ce,Se,O.DEPTH_BUFFER_BIT,O.NEAREST);_.bindFramebuffer(O.READ_FRAMEBUFFER,null),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(q!==0||E.isRenderTargetTexture||W.has(E)){let Bt=W.get(E),wi=W.get(B);_.bindFramebuffer(O.READ_FRAMEBUFFER,P),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,R);for(let Rt=0;Rt<Le;Rt++)xs?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Bt.__webglTexture,q,ht+Rt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Bt.__webglTexture,q),bt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,wi.__webglTexture,Ee,Xt+Rt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,wi.__webglTexture,Ee),q!==0?O.blitFramebuffer(Fe,rt,Ce,Se,De,yt,Ce,Se,O.COLOR_BUFFER_BIT,O.NEAREST):bt?O.copyTexSubImage3D(Re,Ee,De,yt,Xt+Rt,Fe,rt,Ce,Se):O.copyTexSubImage2D(Re,Ee,De,yt,Fe,rt,Ce,Se);_.bindFramebuffer(O.READ_FRAMEBUFFER,null),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else bt?E.isDataTexture||E.isData3DTexture?O.texSubImage3D(Re,Ee,De,yt,Xt,Ce,Se,Le,Et,nn,It.data):B.isCompressedArrayTexture?O.compressedTexSubImage3D(Re,Ee,De,yt,Xt,Ce,Se,Le,Et,It.data):O.texSubImage3D(Re,Ee,De,yt,Xt,Ce,Se,Le,Et,nn,It):E.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Ee,De,yt,Ce,Se,Et,nn,It.data):E.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Ee,De,yt,It.width,It.height,Et,It.data):O.texSubImage2D(O.TEXTURE_2D,Ee,De,yt,Ce,Se,Et,nn,It);_.pixelStorei(O.UNPACK_ROW_LENGTH,ln),_.pixelStorei(O.UNPACK_IMAGE_HEIGHT,gt),_.pixelStorei(O.UNPACK_SKIP_PIXELS,Rn),_.pixelStorei(O.UNPACK_SKIP_ROWS,Xn),_.pixelStorei(O.UNPACK_SKIP_IMAGES,Ei),Ee===0&&B.generateMipmaps&&O.generateMipmap(Re),_.unbindTexture()},this.initRenderTarget=function(E){W.get(E).__webglFramebuffer===void 0&&K.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?K.setTextureCube(E,0):E.isData3DTexture?K.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?K.setTexture2DArray(E,0):K.setTexture2D(E,0),_.unbindTexture()},this.resetState=function(){U=0,V=0,$=null,_.reset(),Te.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}};var sr=class i extends Ve{constructor(){let e=i.SkyShader,t=new Dt({name:e.name,uniforms:gn.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:$t,depthWrite:!1});super(new hn(1,1,1),t),this.isSky=!0}};sr.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new F},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( vSunDirection.y );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform float cloudScale;
		uniform float cloudSpeed;
		uniform float cloudCoverage;
		uniform float cloudDensity;
		uniform float cloudElevation;
		uniform float showSunDisc;
		uniform float time;

		// gradient at a lattice corner; sinless hash so every GPU produces the same clouds
		vec2 gradient( vec2 i ) {
			vec3 p = fract( i.xyx * vec3( 0.1031, 0.1030, 0.0973 ) );
			p += dot( p, p.yzx + 33.33 );
			return fract( ( p.xx + p.yz ) * p.zy ) * 2.0 - 1.0;
		}

		// 2D gradient noise: isotropic lobes like Perlin at value-noise cost
		float noise( vec2 p ) {
			vec2 i = floor( p );
			vec2 f = fract( p );
			vec2 u = f * f * f * ( f * ( f * 6.0 - 15.0 ) + 10.0 ); // quintic fade
			float a = dot( gradient( i ), f );
			float b = dot( gradient( i + vec2( 1.0, 0.0 ) ), f - vec2( 1.0, 0.0 ) );
			float c = dot( gradient( i + vec2( 0.0, 1.0 ) ), f - vec2( 0.0, 1.0 ) );
			float d = dot( gradient( i + vec2( 1.0, 1.0 ) ), f - vec2( 1.0, 1.0 ) );
			return mix( mix( a, b, u.x ), mix( c, d, u.x ), u.y ) * 1.6; // ~[-1,1]
		}

		// fbm; per-octave drift makes clouds billow instead of scrolling as a rigid stamp
		float fbm( vec2 p, float drift ) {
			float result = 0.0;
			float amplitude = 1.0;
			for ( int i = 0; i < 4; i ++ ) {
				result += amplitude * noise( p );
				amplitude *= 0.5;
				p = p * 2.0 + drift;
			}
			return result;
		}

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, direction.y ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - vSunDirection.y, 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisc = clamp( ( cosTheta - sunAngularDiameterCos ) * 50000.0, 0.0, 1.0 ) * showSunDisc;
			vec3 sundiscColor = ( 760.0 * sundisc ) * min( vSunE * Fex, 80.0 );

			vec3 texColor = ( Lin + L0 ) * 0.04 + sundiscColor + vec3( 0.0, 0.0003, 0.00075 );

			// Clouds
			if ( direction.y > 0.0 && cloudCoverage > 0.0 ) {

				// Project to cloud plane (higher elevation = clouds appear lower/closer)
				float elevation = mix( 1.0, 0.1, cloudElevation );
				vec2 cloudUV = direction.xz / ( direction.y * elevation );
				cloudUV *= cloudScale;
				cloudUV += time * cloudSpeed;

				// Cloud density field
				float evolve = time * cloudSpeed * 300.0;
				float cloudNoise = clamp( fbm( cloudUV * 1000.0, evolve ) * 0.7 + 0.5, 0.0, 1.0 );

				// Large-scale coverage variation: clear gaps next to dense banks
				float region = noise( cloudUV * 300.0 ) * 0.37 + 0.5;
				float cov = clamp( cloudCoverage + ( region - 0.5 ) * 0.6, 0.0, 1.0 );

				// Carve clouds where noise rises above the coverage level
				float threshold = 1.0 - cov;
				float cloudMask = smoothstep( threshold, threshold + 0.3, cloudNoise );

				// Fade clouds near horizon (adjusted by elevation)
				float horizonFade = smoothstep( 0.0, 0.03 + 0.06 * cloudElevation, direction.y );
				cloudMask *= horizonFade;

				// Cloud lighting from the sky's own radiance
				float dayFactor = smoothstep( -0.08, 0.3, vSunDirection.y );
				vec3 sunColor = vSunE * Fex * 0.22 * 0.04; // 0.22 ~ albedo/pi, 0.04 = exposure; the aerial composite adds the eye-leg extinction
				vec3 skyAmbient = Lin * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

				// Beer-powder self-shadow from the sampled density
				float depth = max( 0.0, cloudNoise - threshold );
				float beer = exp( depth * -4.0 );
				float powder = 1.0 - beer * beer; // beer*beer == exp(-8*depth)
				float shade = mix( 0.45, 1.0, clamp( beer * powder * 2.6, 0.0, 1.0 ) ); // 2.6 = 1/0.385, normalizes beer*powder peak to 1

				// Henyey-Greenstein forward lobe ( g = 0.7 ): silver lining on rims toward the sun
				float silver = clamp( 0.51 / pow( 1.49 - cosTheta * 1.4, 1.5 ), 0.0, 3.0 ); // 0.51=1-g^2, 1.49=1+g^2, 1.4=2g
				float edge = cloudMask * ( 1.0 - cloudMask ) * 4.0;

				vec3 cloudColor = skyAmbient + sunColor * shade;
				cloudColor += sunColor * silver * edge * 0.6;
				cloudColor *= max( dayFactor, 0.03 );

				// Cloud opacity via Beer's law: density sets how solid the clouds get
				float alpha = ( 1.0 - exp( depth * cloudDensity * -12.0 ) ) * horizonFade;

				// Occlude the sun disc/glow behind opaque cloud
				texColor -= L0 * 0.04 * alpha;

				// Composite through the atmosphere so distant clouds dissolve into haze
				vec3 cloudAerial = mix( texColor, cloudColor, Fex );
				texColor = mix( texColor, cloudAerial, alpha );

			}

			gl_FragColor = vec4( texColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var Xl=class extends Bn{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new hn;e.deleteAttribute("uv");let t=new Ht({side:$t}),n=new Ht,s=new is(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Ve(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Gr(e,n,6),o=new Yt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Ve(e,rr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Ve(e,rr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Ve(e,rr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new Ve(e,rr(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new Ve(e,rr(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new Ve(e,rr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function rr(i){return new sa({color:0,emissive:16777215,emissiveIntensity:i})}var ar={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Tn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Uv=new Bi(-1,1,1,-1,0,1),$h=class extends Ot{constructor(){super(),this.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new dt([0,2,0,0,2,0],2))}},Fv=new $h,Wi=class{constructor(e){this._mesh=new Ve(Fv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Uv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ql=class extends Tn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Dt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=gn.clone(e.uniforms),this.material=new Dt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Wi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ra=class extends Tn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Yl=class extends Tn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var $l=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ue);this._width=n.width,this._height=n.height,t=new Gt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Qt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ql(ar),this.copyPass.material.blending=Wt,this.timer=new la}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ra!==void 0&&(a instanceof Ra?n=!0:a instanceof Yl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ue);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Zl=class extends Tn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ke}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Ca={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ue},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new it},cameraProjectionMatrixInverse:{value:new it},cameraWorldMatrix:{value:new it},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new F(-1,-1,-1)},sceneBoxMax:{value:new F(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Pa={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Jl={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function Cf(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=Ov(e),n=t.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],l=2*Math.PI*o/n,c=new F(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new ei(s,e,e);return r.wrapS=Pn,r.wrapT=Pn,r.needsUpdate=!0,r}function Ov(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=a++;r++,s--}return n}var Ia={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Zh(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ue},cameraProjectionMatrixInverse:{value:new it},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Zh(i,e,t){let n=Bv(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function Bv(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,a=Math.pow(s/(i-1),t);n.push(new F(Math.cos(r),Math.sin(r),a))}return n}var Kl=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),h=(3-Math.sqrt(3))/6,d=(l+c)*h,u=l-d,f=c-d,g=e-u,v=t-f,m,p;g>v?(m=1,p=0):(m=0,p=1);let S=g-m+h,T=v-p+h,y=g-1+2*h,b=v-1+2*h,w=l&255,L=c&255,x=this.perm[w+this.perm[L]]%12,A=this.perm[w+m+this.perm[L+p]]%12,N=this.perm[w+1+this.perm[L+1]]%12,I=.5-g*g-v*v;I<0?n=0:(I*=I,n=I*I*this._dot(this.grad3[x],g,v));let M=.5-S*S-T*T;M<0?s=0:(M*=M,s=M*M*this._dot(this.grad3[A],S,T));let C=.5-y*y-b*b;return C<0?r=0:(C*=C,r=C*C*this._dot(this.grad3[N],y,b)),70*(n+s+r)}noise3d(e,t,n){let s,r,a,o,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),d=Math.floor(t+c),u=Math.floor(n+c),f=1/6,g=(h+d+u)*f,v=h-g,m=d-g,p=u-g,S=e-v,T=t-m,y=n-p,b,w,L,x,A,N;S>=T?T>=y?(b=1,w=0,L=0,x=1,A=1,N=0):S>=y?(b=1,w=0,L=0,x=1,A=0,N=1):(b=0,w=0,L=1,x=1,A=0,N=1):T<y?(b=0,w=0,L=1,x=0,A=1,N=1):S<y?(b=0,w=1,L=0,x=0,A=1,N=1):(b=0,w=1,L=0,x=1,A=1,N=0);let I=S-b+f,M=T-w+f,C=y-L+f,P=S-x+2*f,R=T-A+2*f,U=y-N+2*f,V=S-1+3*f,$=T-1+3*f,z=y-1+3*f,H=h&255,J=d&255,de=u&255,fe=this.perm[H+this.perm[J+this.perm[de]]]%12,We=this.perm[H+b+this.perm[J+w+this.perm[de+L]]]%12,Ye=this.perm[H+x+this.perm[J+A+this.perm[de+N]]]%12,nt=this.perm[H+1+this.perm[J+1+this.perm[de+1]]]%12,Z=.6-S*S-T*T-y*y;Z<0?s=0:(Z*=Z,s=Z*Z*this._dot3(this.grad3[fe],S,T,y));let Q=.6-I*I-M*M-C*C;Q<0?r=0:(Q*=Q,r=Q*Q*this._dot3(this.grad3[We],I,M,C));let le=.6-P*P-R*R-U*U;le<0?a=0:(le*=le,a=le*le*this._dot3(this.grad3[Ye],P,R,U));let Pe=.6-V*V-$*$-z*z;return Pe<0?o=0:(Pe*=Pe,o=Pe*Pe*this._dot3(this.grad3[nt],V,$,z)),32*(s+r+a+o)}noise4d(e,t,n,s){let r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,d,u,f,g,v=(e+t+n+s)*l,m=Math.floor(e+v),p=Math.floor(t+v),S=Math.floor(n+v),T=Math.floor(s+v),y=(m+p+S+T)*c,b=m-y,w=p-y,L=S-y,x=T-y,A=e-b,N=t-w,I=n-L,M=s-x,C=A>N?32:0,P=A>I?16:0,R=N>I?8:0,U=A>M?4:0,V=N>M?2:0,$=I>M?1:0,z=C+P+R+U+V+$,H=a[z][0]>=3?1:0,J=a[z][1]>=3?1:0,de=a[z][2]>=3?1:0,fe=a[z][3]>=3?1:0,We=a[z][0]>=2?1:0,Ye=a[z][1]>=2?1:0,nt=a[z][2]>=2?1:0,Z=a[z][3]>=2?1:0,Q=a[z][0]>=1?1:0,le=a[z][1]>=1?1:0,Pe=a[z][2]>=1?1:0,we=a[z][3]>=1?1:0,Xe=A-H+c,mt=N-J+c,ne=I-de+c,re=M-fe+c,oe=A-We+2*c,ce=N-Ye+2*c,pe=I-nt+2*c,Ge=M-Z+2*c,Oe=A-Q+3*c,qe=N-le+3*c,Je=I-Pe+3*c,O=M-we+3*c,ft=A-1+4*c,st=N-1+4*c,D=I-1+4*c,_=M-1+4*c,G=m&255,W=p&255,K=S&255,he=T&255,me=o[G+o[W+o[K+o[he]]]]%32,j=o[G+H+o[W+J+o[K+de+o[he+fe]]]]%32,ie=o[G+We+o[W+Ye+o[K+nt+o[he+Z]]]]%32,_e=o[G+Q+o[W+le+o[K+Pe+o[he+we]]]]%32,Ue=o[G+1+o[W+1+o[K+1+o[he+1]]]]%32,xe=.6-A*A-N*N-I*I-M*M;xe<0?h=0:(xe*=xe,h=xe*xe*this._dot4(r[me],A,N,I,M));let ge=.6-Xe*Xe-mt*mt-ne*ne-re*re;ge<0?d=0:(ge*=ge,d=ge*ge*this._dot4(r[j],Xe,mt,ne,re));let Ie=.6-oe*oe-ce*ce-pe*pe-Ge*Ge;Ie<0?u=0:(Ie*=Ie,u=Ie*Ie*this._dot4(r[ie],oe,ce,pe,Ge));let Be=.6-Oe*Oe-qe*qe-Je*Je-O*O;Be<0?f=0:(Be*=Be,f=Be*Be*this._dot4(r[_e],Oe,qe,Je,O));let Ke=.6-ft*ft-st*st-D*D-_*_;return Ke<0?g=0:(Ke*=Ke,g=Ke*Ke*this._dot4(r[Ue],ft,st,D,_)),27*(h+d+u+f+g)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var La=class i extends Tn{constructor(e,t,n=512,s=512,r,a,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Cf(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Gt(this.width,this.height,{type:Qt,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Dt({defines:Object.assign({},Ca.defines),uniforms:gn.clone(Ca.uniforms),vertexShader:Ca.vertexShader,fragmentShader:Ca.fragmentShader,blending:Wt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new ia,this.normalMaterial.blending=Wt,this.pdMaterial=new Dt({defines:Object.assign({},Ia.defines),uniforms:gn.clone(Ia.uniforms),vertexShader:Ia.vertexShader,fragmentShader:Ia.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Dt({defines:Object.assign({},Pa.defines),uniforms:gn.clone(Pa.uniforms),vertexShader:Pa.vertexShader,fragmentShader:Pa.fragmentShader,blending:Wt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Dt({uniforms:gn.clone(ar.uniforms),vertexShader:ar.vertexShader,fragmentShader:ar.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:ha,blendDst:rs,blendEquation:In,blendSrcAlpha:ca,blendDstAlpha:rs,blendEquationAlpha:In}),this.blendMaterial=new Dt({uniforms:gn.clone(Jl.uniforms),vertexShader:Jl.vertexShader,fragmentShader:Jl.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:$o,blendSrc:ha,blendDst:rs,blendEquation:In,blendSrcAlpha:ca,blendDstAlpha:rs,blendEquationAlpha:In}),this._fsQuad=new Wi(null),this._originalClearColor=new ke,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new ti,this.depthTexture.format=ii,this.depthTexture.type=Gi,this.normalRenderTarget=new Gt(this.width,this.height,{minFilter:Vt,magFilter:Vt,type:Qt,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Zh(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Wt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Wt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Wt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Wt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Wt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Kl,n=e*e*4,s=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let l=a,c=o;s[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new ei(s,e,e,un,an);return r.wrapS=Pn,r.wrapT=Pn,r.needsUpdate=!0,r}};La.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Da={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var jl=class extends Tn{constructor(){super(),this.isOutputPass=!0,this.uniforms=gn.clone(Da.uniforms),this.material=new Xs({name:Da.name,uniforms:this.uniforms,vertexShader:Da.vertexShader,fragmentShader:Da.fragmentShader}),this._fsQuad=new Wi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ct.getTransfer(this._outputColorSpace)===_t&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ua?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===da?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===fa?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===as?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ma?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ga?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===pa&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var tc={easy:{label:"Easy",days:40},medium:{label:"Normal",days:30},hard:{label:"Hard",days:20}},ai={hamburger:{name:"Burger",cost:15,stamina:5,happiness:10,mass:-5},broccoli:{name:"Broccoli",cost:5,stamina:10,happiness:-10,mass:5},meat:{name:"Steak",cost:10,stamina:5,happiness:5,mass:-5}},lr=35;var kv=2,Xi=5,or=10,Ql=20,zv=30,Jh=[{id:"moneybag",title:"A bag of money",weight:.2,text:"You find a bag full of money lying on the ground. Do you take it?",accept:{money:zv,happiness:Xi,stamina:-Xi},deny:{happiness:-Xi}},{id:"robber",title:"Robber",weight:.2,text:"A robber tries to steal your wallet. Do you fight back?",accept:{mass:Xi,stamina:-Ql},deny:{money:-Ql,happiness:-or}},{id:"pusher",title:"Shady dealer",weight:.2,text:"A shady guy offers you some steroids. Do you accept?",accept:{mass:or,happiness:-or,money:-Ql},deny:{happiness:Xi}},{id:"gymbro",title:"Your gym bro",weight:.2,text:"Your gym bro is walking by. You owe him some money... do you stop to say hi?",accept:{happiness:Xi,stamina:or,money:-Xi},deny:{happiness:-or}},{id:"icecream",title:"Ice cream truck",weight:.2,text:"There is an ice cream truck parked nearby. Do you buy one?",accept:{mass:-kv,happiness:Ql},deny:{happiness:-Xi,stamina:or}}],Na=(i,e,t)=>Math.max(e,Math.min(t,i)),ec=class{constructor(e="medium"){this.difficulty=e,this.days=tc[e].days,this.totalDays=this.days,this.money=20,this.stamina=100,this.happiness=70,this.legs=1,this.chest=1,this.back=1,this.inventory={hamburger:0,broccoli:0,meat:0},this.listeners=new Set}get mass(){return this.legs+this.chest+this.back}onChange(e){this.listeners.add(e)}emit(){this.listeners.forEach(e=>e(this))}apply(e){for(let[t,n]of Object.entries(e))if(t==="money")this.money=Math.max(0,this.money+n);else if(t==="mass"){let s=n/3;this.legs=Na(this.legs+s,0,100),this.chest=Na(this.chest+s,0,100),this.back=Na(this.back+s,0,100)}else t in this&&(this[t]=Na(this[t]+n,0,100));this.emit()}buy(e){let t=ai[e];return this.money<t.cost?!1:(this.money-=t.cost,this.inventory[e]+=1,this.emit(),!0)}eat(e){if(this.inventory[e]<=0)return!1;let t=ai[e];return this.inventory[e]-=1,this.apply({stamina:t.stamina,happiness:t.happiness,mass:t.mass}),!0}sleep(){this.days-=1,this.stamina=100,this.happiness=Na(this.happiness-3,0,100),this.emit()}canWorkout(){return this.stamina>=lr}randomEncounter(){let e=Math.random(),t=0;for(let n of Jh)if(t+=n.weight,e<t)return n;return Jh[Jh.length-1]}isWin(){return this.legs>=100&&this.chest>=100&&this.back>=100}gameOverReason(){return this.days<=0?"You ran out of days.":this.stamina<=0?"You collapsed from exhaustion.":this.happiness<=0?"You are too down to keep going.":null}};var cr=i=>440*Math.pow(2,(i-69)/12),hr=[57,60,64],Kh=[53,57,60],jh=[48,52,55],us=[55,59,62],Vv=[50,53,57],Gv=[52,55,59],Pf=[52,56,59],Hv=[48,51,55],Wv=[56,60,63],Xv=[51,55,58],qv=[46,50,53],Yv=[53,57,60,64],Qh=[48,52,55,59],eu=[57,60,64,67],If=[50,53,57,60],xt=i=>i.split("").map(e=>e==="x"),Lf={title:{bpm:104,chords:[hr,Kh,jh,us],swing:0,kick:xt("x.......x......."),snare:xt("....x.......x..."),hat:xt("..x...x...x...x."),bass:[0,null,null,0,null,null,12,null,0,null,null,0,null,7,null,null],arp:"up",arpWave:"square",arpVol:.05,lead:!0,pad:"sawtooth",padVol:.035},city:{bpm:96,chords:[Yv,Qh,eu,us],swing:.12,kick:xt("x......x..x....."),snare:xt("....x.......x..."),hat:xt("x.x.x.x.x.x.x.x."),bass:[0,null,null,null,null,null,7,null,0,null,null,12,null,null,7,null],arp:"updown",arpWave:"triangle",arpVol:.06,lead:!0,pad:"triangle",padVol:.05},home:{bpm:76,chords:[If,us,Qh,eu],swing:.2,kick:xt("x.........x....."),snare:xt("....x.......x..."),hat:xt("..x...x...x...x."),bass:[0,null,null,null,null,null,null,null,7,null,null,null,5,null,null,null],arp:null,lead:!0,leadWave:"sine",pad:"triangle",padVol:.07,lofi:!0},gym:{bpm:128,chords:[hr,hr,Kh,us],swing:0,kick:xt("x...x...x...x..."),snare:xt("....x.......x..."),hat:xt("..x...x...x...x."),bass:[0,0,12,0,0,12,0,12,0,0,12,0,0,12,0,12],bassWave:"sawtooth",arp:"up",arpWave:"sawtooth",arpVol:.035,lead:!0,leadWave:"square",pad:"sawtooth",padVol:.025},workout:{bpm:150,chords:[Gv,jh,us,Pf],swing:0,kick:xt("x...x...x...x.x."),snare:xt("....x.......x..x"),hat:xt("xxxxxxxxxxxxxxxx"),bass:[0,12,0,12,0,12,0,12,0,12,0,12,0,12,7,12],bassWave:"sawtooth",arp:"up",arpWave:"square",arpVol:.04,lead:!1,pad:null},shop:{bpm:112,chords:[Qh,eu,If,us],swing:.1,kick:xt("x.....x...x....."),snare:xt("...x..x....x..x."),hat:xt("x.xxx.xxx.xxx.xx"),bass:[0,null,null,7,null,null,12,null,0,null,null,7,null,5,null,null],arp:"updown",arpWave:"triangle",arpVol:.05,lead:!0,leadWave:"triangle",pad:"sine",padVol:.06},bank:{bpm:120,chords:[Hv,Wv,Xv,qv],swing:0,kick:xt("x.......x.x....."),snare:xt("....x.......x..."),hat:xt("x.x.x.x.x.x.x.x."),bass:[0,null,0,null,0,null,0,null,0,null,0,null,0,null,7,null],bassWave:"square",arp:"down",arpWave:"square",arpVol:.035,lead:!1,pad:"sawtooth",padVol:.03},gameover:{bpm:70,chords:[hr,Vv,Pf,hr],swing:0,kick:xt("x..............."),snare:xt("................"),hat:xt("................"),bass:[0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],arp:null,lead:!0,leadWave:"triangle",pad:"triangle",padVol:.07},win:{bpm:132,chords:[jh,us,hr,Kh],swing:0,kick:xt("x...x...x...x..."),snare:xt("....x.......x..."),hat:xt("x.x.x.x.x.x.x.x."),bass:[0,null,12,null,0,null,12,null,0,null,12,null,0,null,12,null],arp:"up",arpWave:"square",arpVol:.05,lead:!0,leadWave:"square",pad:"sawtooth",padVol:.03}},oi=77,Ua=80,tu=82,nu=84,$v=85,Zv=75,Jv=[[oi,null,oi,Ua,oi,null,nu,null,oi,oi,Ua,tu,$v,nu,Ua,null],[oi,null,oi,Ua,oi,null,nu,null,tu,tu,Ua,oi,Zv,oi,null,null]],Kv=[[69,72,76,72,74,72,69,67],[65,69,72,69,74,72,69,65],[64,67,72,67,76,74,72,67],[67,71,74,71,79,76,74,71]],jv=[[75,82,78,82,75,82,85,82],[75,82,78,82,87,85,82,78],[71,78,75,78,71,78,83,78],[73,80,77,80,85,82,80,77]];Object.assign(Lf,{phonk:{bpm:128,chords:[[41],[41],[37],[39]],swing:0,gym:"phonk",kick:xt("x......x..x....."),snare:xt("....x.......x...")},hardstyle:{bpm:150,chords:[[45],[41],[48],[43]],swing:0,gym:"hardstyle",kick:xt("x...x...x...x..."),snare:xt("....x.......x...")},gymrap:{bpm:140,chords:[[39],[39],[35],[37]],swing:0,gym:"gymrap",kick:xt("x.....x...x..x.."),snare:xt("........x.......")}});var ds=[{id:"phonk",name:"Drift Phonk"},{id:"hardstyle",name:"Hardstyle Pump"},{id:"gymrap",name:"Gym Rap"},{id:"gym",name:"Euro Gym"}],Qv={start:["Light weight baby!","Yeah buddy!","Let's go!","One more rep!","Come on, push it!"],great:["Ain't nothin' but a peanut!","Yeah buddy! Light weight!","Beast mode!"],bad:["No pain, no gain!","Come on bro, focus!"],bro:["Yo bro!","Do you even lift, bro?","We're gonna make it, bro!","Never skip leg day!"]};function ey(i){let e=i>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}var nc=class{constructor(){this.ctx=null,this.muted=!1,this.volume=.7,this.current=null,this.wanted=null}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.ctx=new e;let t=this.ctx;this.master=t.createGain(),this.master.gain.value=this.volume;let n=t.createDynamicsCompressor();n.threshold.value=-18,n.ratio.value=4,this.master.connect(n).connect(t.destination),this.musicGain=t.createGain(),this.musicGain.gain.value=.8,this.musicGain.connect(this.master),this.sfxGain=t.createGain(),this.sfxGain.gain.value=.9,this.sfxGain.connect(this.master),this.delay=t.createDelay(1),this.delay.delayTime.value=.28;let s=t.createGain();s.gain.value=.3;let r=t.createGain();r.gain.value=.25,this.delay.connect(s).connect(this.delay),this.delay.connect(r).connect(this.musicGain);let a=t.sampleRate;this.noise=t.createBuffer(1,a,t.sampleRate);let o=this.noise.getChannelData(0);for(let l=0;l<a;l++)o[l]=Math.random()*2-1;this.wanted&&this.play(this.wanted,!0)}setMuted(e){this.muted=e,this.master&&this.master.gain.setTargetAtTime(e?0:this.volume,this.ctx.currentTime,.05)}toggleMute(){return this.setMuted(!this.muted),this.muted}play(e,t=!1){if(this.wanted=e,!this.ctx||!t&&this.current&&this.current.name===e)return;let n=this.ctx,s=n.currentTime;if(this.current){let u=this.current;clearInterval(u.timer),u.bus.gain.cancelScheduledValues(s),u.bus.gain.setValueAtTime(u.bus.gain.value,s),u.bus.gain.linearRampToValueAtTime(0,s+.8),setTimeout(()=>u.bus.disconnect(),1500)}let r=Lf[e],a=n.createGain();a.gain.setValueAtTime(0,s),a.gain.linearRampToValueAtTime(1,s+.8),a.connect(this.musicGain);let o=n.createWaveShaper();o.curve=this.distCurve(r.gym==="hardstyle"?60:25),o.oversample="2x";let l=n.createGain();l.gain.value=.35,o.connect(l).connect(a);let c=this.makeMelody(r,e.length*97+r.bpm),h={name:e,bus:a,drive:o,track:r,melody:c,step:0,next:s+.1},d=60/r.bpm/4;h.timer=setInterval(()=>{for(;h.next<n.currentTime+.2;){this.scheduleStep(h,h.step,h.next);let u=h.step%2===0?r.swing:-r.swing;h.next+=d*(1+u),h.step++}},50),this.current=h}makeMelody(e,t){let n=ey(t),s=[];for(let r=0;r<2;r++){let a=[];e.chords.forEach(o=>{for(let l=0;l<16;l++){let c=l%4===0;if(!(c?n()<.75:n()<.28)){a.push(null);continue}let d=o[Math.floor(n()*o.length)]+12,u=c&&n()<.5?3:1;a.push({note:d,len:u})}}),s.push(a)}return s}scheduleStep(e,t,n){let{track:s,bus:r}=e,a=t%16,o=Math.floor(t/16),l=s.chords[o%s.chords.length],c=60/s.bpm/4;if(s.gym){this.gymStep(e,a,o,n,c);return}s.kick[a]&&this.kick(n,r),s.snare[a]&&this.snare(n,r),s.hat[a]&&this.hat(n,r,a%4===2?.05:.03);let h=s.bass[a];if(h!=null&&this.tone(l[0]-24+h,n,c*1.6,s.bassWave||"triangle",.16,r,900),s.pad&&a===0&&l.forEach(d=>this.tone(d,n,c*15,s.pad,s.padVol,r,1400,.25,.9)),s.arp&&a%2===0){let d=[...l,l[0]+12],u=a/2;if(s.arp==="down")u=d.length-1-u%d.length;else if(s.arp==="updown"){let f=d.length*2-2;u%=f,u>=d.length&&(u=f-u)}this.tone(d[u%d.length]+12,n,c*.9,s.arpWave,s.arpVol,r,3e3,.005,.2,!0)}if(s.lead){let u=e.melody[Math.floor(o/s.chords.length)%2][o%s.chords.length*16+a];u&&this.tone(u.note,n,c*u.len,s.leadWave||"square",.06,r,2600,.01,.5,!0)}}tone(e,t,n,s,r,a,o=2e3,l=.01,c=.15,h=!1){let d=this.ctx,u=d.createOscillator();u.type=s,u.frequency.setValueAtTime(cr(e),t);let f=d.createBiquadFilter();f.type="lowpass",f.frequency.value=o;let g=d.createGain();g.gain.setValueAtTime(1e-4,t),g.gain.linearRampToValueAtTime(r,t+l),g.gain.setValueAtTime(r,t+Math.max(l,n-.02)),g.gain.exponentialRampToValueAtTime(1e-4,t+n+c),u.connect(f).connect(g).connect(a),h&&g.connect(this.delay),u.start(t),u.stop(t+n+c+.05)}kick(e,t,n=.5){let s=this.ctx,r=s.createOscillator(),a=s.createGain();r.frequency.setValueAtTime(150,e),r.frequency.exponentialRampToValueAtTime(40,e+.15),a.gain.setValueAtTime(n,e),a.gain.exponentialRampToValueAtTime(.001,e+.3),r.connect(a).connect(t),r.start(e),r.stop(e+.32)}noiseHit(e,t,n,s,r,a){let o=this.ctx,l=o.createBufferSource();l.buffer=this.noise;let c=o.createBiquadFilter();c.type=r,c.frequency.value=a;let h=o.createGain();h.gain.setValueAtTime(n,e),h.gain.exponentialRampToValueAtTime(.001,e+s),l.connect(c).connect(h).connect(t),l.start(e,Math.random()*.5),l.stop(e+s+.02)}snare(e,t){this.noiseHit(e,t,.22,.18,"highpass",1500),this.tone(50,e,.03,"triangle",.12,t,4e3,.001,.08)}hat(e,t,n){this.noiseHit(e,t,n,.04,"highpass",8e3)}distCurve(e){let n=new Float32Array(1024);for(let s=0;s<1024;s++){let r=s*2/1024-1;n[s]=(1+e)*r/(1+e*Math.abs(r))}return n}bass808(e,t,n,s,r=null,a=.9){let o=this.ctx,l=o.createOscillator();l.type="sine";let c=cr(t);l.frequency.setValueAtTime(r?cr(r):c*1.5,e),l.frequency.exponentialRampToValueAtTime(c,e+(r?.09:.03));let h=o.createGain();h.gain.setValueAtTime(1e-4,e),h.gain.linearRampToValueAtTime(a,e+.005),h.gain.setValueAtTime(a,e+n*.6),h.gain.exponentialRampToValueAtTime(.001,e+n),l.connect(h).connect(s),l.start(e),l.stop(e+n+.05)}cowbell(e,t,n,s=.07){let r=this.ctx,a=cr(t),o=r.createBiquadFilter();o.type="bandpass",o.frequency.value=a*1.3,o.Q.value=1.2;let l=r.createGain();l.gain.setValueAtTime(s,e),l.gain.exponentialRampToValueAtTime(s*.3,e+.05),l.gain.exponentialRampToValueAtTime(.001,e+.35),[1,1.48].forEach(c=>{let h=r.createOscillator();h.type="square",h.frequency.value=a*c,h.connect(o),h.start(e),h.stop(e+.4)}),o.connect(l).connect(n),l.connect(this.delay)}hardKick(e,t,n){let s=this.ctx,r=s.createOscillator();r.frequency.setValueAtTime(400,e),r.frequency.exponentialRampToValueAtTime(cr(t),e+.05);let a=s.createGain();a.gain.setValueAtTime(1.4,e),a.gain.setValueAtTime(1.1,e+.12),a.gain.exponentialRampToValueAtTime(.001,e+.34),r.connect(a).connect(n),r.start(e),r.stop(e+.36)}supersaw(e,t,n,s,r=.03){let a=this.ctx,o=a.createBiquadFilter();o.type="lowpass",o.frequency.value=5200;let l=a.createGain();l.gain.setValueAtTime(1e-4,e),l.gain.linearRampToValueAtTime(r,e+.01),l.gain.setValueAtTime(r,e+n*.8),l.gain.exponentialRampToValueAtTime(1e-4,e+n+.1),[-14,-6,0,7,15].forEach(c=>{let h=a.createOscillator();h.type="sawtooth",h.frequency.value=cr(t),h.detune.value=c,h.connect(o),h.start(e),h.stop(e+n+.15)}),o.connect(l).connect(s),l.connect(this.delay)}clap(e,t,n=.25){[0,.011,.022].forEach((s,r)=>this.noiseHit(e+s,t,n*(r===2?1:.6),r===2?.16:.01,"bandpass",1300))}bell(e,t,n,s=.06){this.tone(t,e,.05,"sine",s,n,6e3,.002,.5,!0),this.tone(t+12,e,.03,"triangle",s*.3,n,6e3,.002,.25)}gymStep(e,t,n,s,r){let{track:a,bus:o,drive:l}=e,c=a.chords[n%a.chords.length][0],h=a.gym,d=(u,f=.035)=>this.hat(u,o,f);if(h==="phonk"){if(a.kick[t]){this.kick(s,o,.6);let f=1;for(;f<16&&!a.kick[(t+f)%16];)f++;this.bass808(s,c,r*f*.95,l,t===10&&n%2?c+12:null)}a.snare[t]&&(this.clap(s,o),this.snare(s,o)),d(s,t%2?.02:.04),n%2&&t>=14&&d(s+r/2,.03);let u=Jv[n%2][t];u&&n%8!==7&&this.cowbell(s,u,o),t===0&&n%4===0&&this.noiseHit(s,o,.08,1.2,"highpass",5e3)}else if(h==="hardstyle"){a.kick[t]&&this.hardKick(s,c-12,l),a.snare[t]&&this.clap(s,o,.3),t%4===2&&(d(s,.06),this.tone(c,s,r*1.5,"sawtooth",.09,o,700));let u=n%16>=12;if(t%2===0){let f=Kv[n%4][t/2];this.supersaw(s,f+12,r*1.8,o,u?.045:.03)}t===0&&([0,3,7].forEach(f=>this.supersaw(s,c+24+f,r*15,o,.008)),n%4===0&&this.noiseHit(s,o,.1,1.5,"highpass",4e3))}else if(h==="gymrap"){if(a.kick[t]){this.kick(s,o,.55);let u=1;for(;u<16&&!a.kick[(t+u)%16];)u++;this.bass808(s,c,r*u,l,t===13?c+7:null)}a.snare[t]&&(this.snare(s,o),this.clap(s,o,.2)),t%2===0&&d(s),(t===6||t===7)&&(d(s+r/3,.025),d(s+2*r/3,.025)),n%2&&t>=12&&(d(s+r/2,.03),d(s+r/4,.02),d(s+3*r/4,.02)),t%2===0&&this.bell(s,jv[n%4][t/2],o),t===0&&this.tone(c+24,s,r*15,"triangle",.035,o,900,.3,.8)}}shout(e){let t=Qv[e];if(!(!t||this.muted||!("speechSynthesis"in window)))try{let n=new SpeechSynthesisUtterance(t[Math.floor(Math.random()*t.length)]);n.lang="en-US",n.pitch=.4,n.rate=1.05,n.volume=1;let s=speechSynthesis.getVoices().find(r=>r.lang.startsWith("en"));s&&(n.voice=s),speechSynthesis.cancel(),speechSynthesis.speak(n)}catch{}}sfx(e){if(!this.ctx)return;let t=this.ctx.currentTime+.01,n=this.sfxGain,s=(r,a,o="square",l=.12)=>r.forEach((c,h)=>this.tone(c,t+h*a,a*.9,o,l,n,5e3,.005,.1));switch(e){case"click":s([84],.04,"square",.06);break;case"coin":s([83,88],.07,"square",.1);break;case"buy":s([76,83,88],.06,"square",.1);break;case"eat":this.noiseHit(t,n,.2,.1,"bandpass",900),this.noiseHit(t+.14,n,.2,.1,"bandpass",700);break;case"good":s([79,84],.06,"triangle",.14);break;case"bad":s([52,47],.1,"sawtooth",.1);break;case"door":this.noiseHit(t,n,.25,.3,"lowpass",600),s([60,67],.08,"triangle",.08);break;case"levelup":s([72,76,79,84,88],.08,"square",.1);break;case"sleep":s([79,76,72,67,64],.18,"sine",.14);break;case"step":this.noiseHit(t,n,.04,.05,"lowpass",400);break;case"crash":this.noiseHit(t,n,.5,.8,"lowpass",1200),s([48,43,36],.12,"sawtooth",.12);break;case"event":s([69,72,76,81],.07,"triangle",.12);break;case"airhorn":[0,.16,.32,.5].forEach((r,a)=>[0,4,7].forEach(o=>{let l=a===3?.6:.12;this.tone(69+o,t+r,l,"sawtooth",.05,n,3500,.005,.05)}));break;case"radio":this.noiseHit(t,n,.15,.25,"bandpass",2500),s([81,88],.05,"square",.06);break;default:break}}};var Df=(i,e,t)=>{let n=Math.max(t-Math.abs(i-e),0)/t;return Math.min(i,e)-n*n*t*.25},ae=(i,e,t)=>new F(i,e,t),ru={x:ae(1,0,0),y:ae(0,1,0),z:ae(0,0,1)};function je(i,e,t={}){var o,l;let n=(t.dir||ru.y).clone().normalize(),s=(t.fwd||ru.z).clone(),r=s.sub(n.clone().multiplyScalar(s.dot(n))).normalize(),a=new F().crossVectors(n,r);return{t:0,cx:i.x,cy:i.y,cz:i.z,ux:a.x,uy:a.y,uz:a.z,vx:n.x,vy:n.y,vz:n.z,wx:r.x,wy:r.y,wz:r.z,rx:e[0],ry:e[1],rz:e[2],k:(o=t.k)!=null?o:.02,sub:!!t.sub,bone:(l=t.bone)!=null?l:0,region:t.region||"skin"}}function Kt(i,e,t,n,s={}){var l,c;let r=e.x-i.x,a=e.y-i.y,o=e.z-i.z;return{t:1,ax:i.x,ay:i.y,az:i.z,bx:r,by:a,bz:o,l2:r*r+a*a+o*o||1e-9,ra:t,rb:n,k:(l=s.k)!=null?l:.02,sub:!!s.sub,bone:(c=s.bone)!=null?c:0,region:s.region||"skin"}}function au(i,e,t,n){if(i.t===0){let d=e-i.cx,u=t-i.cy,f=n-i.cz,g=(d*i.ux+u*i.uy+f*i.uz)/i.rx,v=(d*i.vx+u*i.vy+f*i.vz)/i.ry,m=(d*i.wx+u*i.wy+f*i.wz)/i.rz,p=Math.sqrt(g*g+v*v+m*m),S=Math.sqrt((g/i.rx)**2+(v/i.ry)**2+(m/i.rz)**2);return S>1e-9?p*(p-1)/S:-Math.min(i.rx,i.ry,i.rz)}let s=e-i.ax,r=t-i.ay,a=n-i.az,o=Math.max(0,Math.min(1,(s*i.bx+r*i.by+a*i.bz)/i.l2)),l=s-i.bx*o,c=r-i.by*o,h=a-i.bz*o;return Math.sqrt(l*l+c*c+h*h)-(i.ra+(i.rb-i.ra)*o)}function Ff(i){for(let e of i){let t=Math.max(e.k,.01)+.05;if(e.t===0){let n=Math.max(e.rx,e.ry,e.rz)+t;Object.assign(e,{x0:e.cx-n,x1:e.cx+n,y0:e.cy-n,y1:e.cy+n,z0:e.cz-n,z1:e.cz+n})}else{let n=Math.max(e.ra,e.rb)+t;Object.assign(e,{x0:Math.min(e.ax,e.ax+e.bx)-n,x1:Math.max(e.ax,e.ax+e.bx)+n,y0:Math.min(e.ay,e.ay+e.by)-n,y1:Math.max(e.ay,e.ay+e.by)+n,z0:Math.min(e.az,e.az+e.bz)-n,z1:Math.max(e.az,e.az+e.bz)+n})}}return i}function ty(i){return(e,t,n)=>{let s=.25;for(let r=0;r<i.length;r++){let a=i[r];if(e<a.x0||e>a.x1||t<a.y0||t>a.y1||n<a.z0||n>a.z1)continue;let o=au(a,e,t,n);s=a.sub?-Df(-s,o,a.k):Df(s,o,a.k)}return s}}function ny(i,e){let t=ae(1/0,1/0,1/0),n=ae(-1/0,-1/0,-1/0);for(let s of i){if(s.sub)continue;let r=Math.max(s.k,.01)+.05;t.min(ae(s.x0+r,s.y0+r,s.z0+r)),n.max(ae(s.x1-r,s.y1-r,s.z1-r))}return{min:t.subScalar(e),max:n.addScalar(e)}}function Of(i,e,t,n){let s=Math.ceil((t.x-e.x)/n)+1,r=Math.ceil((t.y-e.y)/n)+1,a=Math.ceil((t.z-e.z)/n)+1,o=3,l=n*o,c=Math.ceil((s-1)/o)+1,h=Math.ceil((r-1)/o)+1,d=Math.ceil((a-1)/o)+1,u=new Float32Array(c*h*d);for(let I=0;I<d;I++)for(let M=0;M<h;M++)for(let C=0;C<c;C++)u[C+c*(M+h*I)]=i(e.x+C*l,e.y+M*l,e.z+I*l);let f=l*1.2,g=new Float32Array(s*r*a),v=(I,M,C)=>I+s*(M+r*C);for(let I=0;I<a;I++){let M=Math.min(d-2,Math.floor(I/o)),C=I/o-M;for(let P=0;P<r;P++){let R=Math.min(h-2,Math.floor(P/o)),U=P/o-R;for(let V=0;V<s;V++){let $=Math.min(c-2,Math.floor(V/o)),z=V/o-$,H=(Q,le,Pe)=>u[$+Q+c*(R+le+h*(M+Pe))],J=H(0,0,0)+(H(1,0,0)-H(0,0,0))*z,de=H(0,1,0)+(H(1,1,0)-H(0,1,0))*z,fe=H(0,0,1)+(H(1,0,1)-H(0,0,1))*z,We=H(0,1,1)+(H(1,1,1)-H(0,1,1))*z,Ye=J+(de-J)*U,nt=fe+(We-fe)*U,Z=Ye+(nt-Ye)*C;g[v(V,P,I)]=Math.abs(Z)>f?Z:i(e.x+V*n,e.y+P*n,e.z+I*n)}}}let m=(I,M,C)=>I+(s-1)*(M+(r-1)*C),p=new Int32Array((s-1)*(r-1)*(a-1)).fill(-1),S=[],T=[[0,0,0],[1,0,0],[0,1,0],[1,1,0],[0,0,1],[1,0,1],[0,1,1],[1,1,1]],y=[[0,1],[2,3],[4,5],[6,7],[0,2],[1,3],[4,6],[5,7],[0,4],[1,5],[2,6],[3,7]],b=new Float32Array(8);for(let I=0;I<a-1;I++)for(let M=0;M<r-1;M++)for(let C=0;C<s-1;C++){let P=0;for(let z=0;z<8;z++){let H=T[z];b[z]=g[v(C+H[0],M+H[1],I+H[2])],b[z]<0&&(P|=1<<z)}if(P===0||P===255)continue;let R=0,U=0,V=0,$=0;for(let[z,H]of y){if(b[z]<0==b[H]<0)continue;let J=b[z]/(b[z]-b[H]),de=T[z],fe=T[H];R+=de[0]+(fe[0]-de[0])*J,U+=de[1]+(fe[1]-de[1])*J,V+=de[2]+(fe[2]-de[2])*J,$++}p[m(C,M,I)]=S.length/3,S.push(e.x+(C+R/$)*n,e.y+(M+U/$)*n,e.z+(I+V/$)*n)}let w=[],L=(I,M,C,P)=>{I>=0&&M>=0&&C>=0&&P>=0&&w.push(I,M,C,I,C,P)};for(let I=1;I<a-1;I++)for(let M=1;M<r-1;M++)for(let C=1;C<s-1;C++){let P=g[v(C,M,I)]<0;P!==g[v(C+1,M,I)]<0&&L(p[m(C,M-1,I-1)],p[m(C,M,I-1)],p[m(C,M,I)],p[m(C,M-1,I)]),P!==g[v(C,M+1,I)]<0&&L(p[m(C-1,M,I-1)],p[m(C-1,M,I)],p[m(C,M,I)],p[m(C,M,I-1)]),P!==g[v(C,M,I+1)]<0&&L(p[m(C-1,M-1,I)],p[m(C,M-1,I)],p[m(C,M,I)],p[m(C-1,M,I)])}let x=new Float32Array(S.length),A=new Float32Array(S.length/3),N=n*.5;for(let I=0;I<S.length;I+=3){let M=S[I],C=S[I+1],P=S[I+2],R=i(M+N,C,P)-i(M-N,C,P),U=i(M,C+N,P)-i(M,C-N,P),V=i(M,C,P+N)-i(M,C,P-N),$=Math.hypot(R,U,V)||1,z=R/$,H=U/$,J=V/$;x[I]=z,x[I+1]=H,x[I+2]=J;let de=0;for(let fe=1;fe<=4;fe++){let We=fe*.009;de+=(We-i(M+z*We,C+H*We,P+J*We))/2**fe}A[I/3]=Math.max(.6,Math.min(1,1-de*6))}for(let I=0;I<w.length;I+=3){let M=w[I]*3,C=w[I+1]*3,P=w[I+2]*3,R=S[C]-S[M],U=S[C+1]-S[M+1],V=S[C+2]-S[M+2],$=S[P]-S[M],z=S[P+1]-S[M+1],H=S[P+2]-S[M+2],J=U*H-V*z,de=V*$-R*H,fe=R*z-U*$;if(J*(x[M]+x[C]+x[P])+de*(x[M+1]+x[C+1]+x[P+1])+fe*(x[M+2]+x[C+2]+x[P+2])<0){let We=w[I+1];w[I+1]=w[I+2],w[I+2]=We}}return{pos:new Float32Array(S),nrm:x,ao:A,idx:w}}function sc(i,e=null){let t=new Ot;return t.setAttribute("position",new zt(i.pos,3)),t.setAttribute("normal",new zt(i.nrm,3)),e&&t.setAttribute("color",new zt(e,3)),t.setIndex(i.idx),t}function rc(i,e,t=.02){Ff(i);let n=ny(i,t);return Of(ty(i),n.min,n.max,e)}function Bf(i,e=1){let t=new Float32Array(i.pos.length);for(let n=0;n<i.ao.length;n++)t[n*3]=t[n*3+1]=t[n*3+2]=i.ao[n]*e;return t}var Gn={};function iy(){let i=[je(ae(0,.19,-.008),[.077,.098,.094],{k:.04}),je(ae(0,.137,.028),[.064,.068,.07],{k:.04}),je(ae(0,.092,.066),[.032,.022,.022],{k:.035}),je(ae(-.046,.166,.058),[.028,.022,.026],{k:.03}),je(ae(.046,.166,.058),[.028,.022,.026],{k:.03}),je(ae(-.05,.115,.05),[.022,.03,.03],{k:.03}),je(ae(.05,.115,.05),[.022,.03,.03],{k:.03}),je(ae(0,.208,.074),[.058,.014,.02],{k:.025}),Kt(ae(0,.194,.087),ae(0,.152,.107),.009,.015,{k:.018}),je(ae(-.012,.149,.1),[.011,.009,.01],{k:.01}),je(ae(.012,.149,.1),[.011,.009,.01],{k:.01}),je(ae(0,.126,.093),[.022,.006,.01],{k:.01}),je(ae(0,.114,.09),[.019,.006,.009],{k:.01}),je(ae(0,.12,.1),[.02,.0025,.006],{k:.004,sub:!0}),je(ae(-.079,.172,-.004),[.012,.03,.02],{k:.012}),je(ae(.079,.172,-.004),[.012,.03,.02],{k:.012}),Kt(ae(0,-.01,-.005),ae(0,.13,-.01),.055,.05,{k:.04}),je(ae(-.033,.188,.093),[.021,.014,.014],{k:.01,sub:!0}),je(ae(.033,.188,.093),[.021,.014,.014],{k:.01,sub:!0})],e=rc(i,.005);Gn.head=sc(e,Bf(e));let t=je(ae(0,.197,-.012),[.083,.104,.101]);Ff([t]);let s=Of((r,a,o)=>{let l=au(t,r,a,o);return l=Math.max(l,.176+.62*o-a),Math.abs(r)>.066&&(l=Math.max(l,.2-a)),l},ae(-.1,.08,-.13),ae(.1,.32,.11),.005);Gn.hair=sc(s)}function Nf(i){let e=i,t=[],n=ae(0,-.26,0);t.push(je(ae(0,-.305,.004),[.013,.048,.04],{k:.02,fwd:ru.z})),t.push(Kt(ae(0,-.255,0),ae(0,-.28,.002),.026,.024,{k:.02})),[[.024,.052,.009],[.008,.058,.0095],[-.008,.055,.009],[-.023,.045,.008]].forEach(([c,h,d])=>{let u=ae(-e*.002,-.345,c),f=[.45,.32,.23],g=.15;for(let v of f){let m=h*v,p=u.clone().add(ae(-e*Math.sin(g)*m,-Math.cos(g)*m,0));t.push(Kt(u,p,d,d*.9,{k:.006})),u=p,g+=.3}});let r=ae(-e*.008,-.29,.03),a=ae(-e*.018,-.32,.05),o=ae(-e*.022,-.345,.058);t.push(Kt(r,a,.013,.011,{k:.012}),Kt(a,o,.011,.0095,{k:.006}));let l=rc(t,.0035,.01);return sc(l,Bf(l))}function sy(){let e=[je(ae(0,-.45499999999999996,.045),[.05,.02,.135],{k:.02}),je(ae(0,-.42,.025),[.047,.045,.11],{k:.04}),je(ae(0,-.43,.12),[.043,.032,.06],{k:.04}),Kt(ae(0,-.415,-.035),ae(0,-.37,-.02),.045,.042,{k:.03})],t=rc(e,.005,.01),n=new Float32Array(t.pos.length);for(let s=0;s<t.ao.length;s++){let r=t.pos[s*3+1]- -.475,a=Math.max(0,Math.min(1,(r-.018)/.006)),o=[.18+(.93-.18)*a,.18+(.93-.18)*a,.19+(.94-.19)*a],l=r>.035&&r<.05&&Math.abs(t.pos[s*3+2]-.02)<.05?.35:1;n[s*3]=o[0]*t.ao[s]*l,n[s*3+1]=o[1]*t.ao[s]*(l<1?.55:1),n[s*3+2]=o[2]*t.ao[s]*(l<1?.4:1)}return sc(t,n)}function ry(){Gn.head||(iy(),Gn.handL=Nf(1),Gn.handR=Nf(-1),Gn.shoe=sy())}var iu=new Map;function ic(i,e=.6,t={}){let n=`${i}-${e}-${JSON.stringify(t)}`;return iu.has(n)||iu.set(n,new Ht({color:i,roughness:e,...t})),iu.get(n)}var ay=new Ht({vertexColors:!0,roughness:.55}),oy=new Ht({vertexColors:!0,roughness:.5}),su=new Map,Uf={shoulderZ:.32,hipZ:.06},wt={hips:0,spine:1,neck:2,hipL:3,kneeL:4,hipR:5,kneeR:6,shL:7,elL:8,shR:9,elR:10};function ly(i,e,t,n,s){let r=Math.min(1.25,(t+n)/2*1.25),a=[],o=(g,v,m)=>(g.bone=v,g.region=m,a.push(g),g),l=(g,v,m)=>s?null:o(g,v,m),c=i.hips.y,h=i.spine.y,d=i.chest.y,u=i.neck.y;o(je(ae(0,c+.01,-.01),[.145,.11,.1],{k:.06}),wt.hips,"pelvis"),o(je(ae(0,h+.1,0),[.125+.01*n,.14,.09],{k:.07}),wt.spine,"torso"),o(je(ae(0,d-.01,-.01),[.16+.045*n,.19,.105+.012*t],{k:.07}),wt.spine,"torso"),[-1,1].forEach(g=>o(je(ae(g*.07,c-.03,-.065),[.075+.015*e,.085,.06+.015*e],{k:.03}),wt.hips,"pelvis")),[-1,1].forEach(g=>{o(je(ae(g*(.075+.02*n),d+.035,.055+.02*t),[.068+.02*t,.095+.025*t+.012*n,.04+.03*t],{dir:ae(g,.28,-.25),fwd:ae(0,-.15,1),k:s?.045:.018}),wt.spine,"torso")}),l(Kt(ae(0,d-.04,.1+.03*t),ae(0,d+.11,.09+.03*t),.007,.009,{sub:!0,k:.012}),wt.spine,"torso");let f=.076;return[[h+.24,.03],[h+.165,.032],[h+.09,.032]].forEach(([g,v])=>{[-1,1].forEach(m=>l(je(ae(m*.035,g,f),[.032,v,.016+.008*t],{k:.012}),wt.spine,"torso"))}),l(je(ae(0,h+.01,f-.004),[.052,.045,.022],{k:.012}),wt.spine,"torso"),l(Kt(ae(0,h-.02,f+.03),ae(0,h+.3,f+.03),.005,.005,{sub:!0,k:.008}),wt.spine,"torso"),[-1,1].forEach(g=>{o(je(ae(g*.108,h+.08,.03),[.035,.085,.05],{dir:ae(-g*.35,1,.2),k:.02}),wt.spine,"torso");for(let v=0;v<3;v++)l(je(ae(g*(.122+.02*n),h+.21+v*.042,.04-v*.004),[.009+.004*n,.024,.012+.004*n],{dir:ae(-g*.9,.7,.4),k:.012}),wt.spine,"torso")}),[-1,1].forEach(g=>{o(Kt(ae(g*(.15+.03*n),d+.02,-.035),ae(g*.09,h+.06,-.05),.045+.05*n,.028,{k:.02}),wt.spine,"torso"),o(Kt(ae(g*.034,h-.03,-.085),ae(g*.03,d+.02,-.095),.025+.008*n,.018,{k:.014}),wt.spine,"torso"),o(je(ae(g*.065,d+.06,-.085),[.055,.07,.03+.015*n],{k:.018}),wt.spine,"torso"),o(Kt(ae(g*.04,u+.03,-.03),ae(g*(.16+.05*n),u-.055,-.025),.04+.03*n,.03,{k:.035}),wt.spine,"torso")}),o(je(ae(0,u-.02,-.055),[.07+.03*n,.07+.03*n,.035+.02*n],{k:.03}),wt.spine,"torso"),l(Kt(ae(0,h-.02,-.105-.01*n),ae(0,d+.06,-.12-.01*n),.006,.006,{sub:!0,k:.01}),wt.spine,"torso"),o(Kt(ae(0,u-.05,-.01),ae(0,u+.1,-.005),.062+.028*n,.054+.012*n,{k:.045}),wt.neck,"neck"),[-1,1].forEach(g=>o(Kt(ae(g*.045,u+.12,-.005),ae(g*.015,u-.015,.05),.013+.006*n,.011,{k:.012}),wt.neck,"neck")),i.arms.forEach(({side:g,S:v,E:m,W:p},S)=>{let T=S?wt.shR:wt.shL,y=S?wt.elR:wt.elL,b=m.clone().sub(v).normalize(),w=ae(g,0,0);[[ae(0,-.03,.035),ae(.2*g,1,.6)],[ae(g*.03,-.035,0),ae(.4*g,1,0)],[ae(0,-.03,-.035),ae(.2*g,1,-.6)]].forEach(([A,N])=>{o(je(v.clone().add(A).addScaledVector(w,.005),[.035+.024*r,.07+.02*r,.033+.02*r],{dir:N.normalize(),fwd:w,k:.02}),T,"arm")}),o(Kt(v,m,.043+.014*r,.035+.006*r,{k:.02}),T,"arm");let L=v.clone().lerp(m,.58);o(je(L.clone().add(ae(0,0,.022+.008*r)),[.032+.028*r,.078,.032+.032*r],{dir:b,k:.014}),T,"arm"),o(je(v.clone().lerp(m,.45).add(ae(g*.012,0,-.024-.006*r)),[.032+.024*r,.088,.03+.026*r],{dir:b,k:.014}),T,"arm"),o(je(v.clone().lerp(m,.4).add(ae(-g*.008,0,-.02-.004*r)),[.022+.012*r,.07,.022+.014*r],{dir:b,k:.012}),T,"arm"),o(Kt(m,p,.039+.014*r,.027,{k:.02}),y,"arm");let x=p.clone().sub(m).normalize();o(je(m.clone().lerp(p,.3).add(ae(g*.012,0,.012)),[.024+.01*r,.075,.022+.01*r],{dir:x,k:.012}),y,"arm"),o(je(m.clone().lerp(p,.3).add(ae(-g*.012,0,-.004)),[.022+.008*r,.08,.02+.008*r],{dir:x,k:.012}),y,"arm"),o(je(m.clone().add(ae(0,.005,-.03)),[.018,.02,.012],{k:.012}),y,"arm")}),i.legs.forEach(({side:g,H:v,K:m,A:p},S)=>{let T=S?wt.hipR:wt.hipL,y=S?wt.kneeR:wt.kneeL,b=m.clone().sub(v).normalize();o(Kt(ae(v.x,v.y-.02,v.z-.005),m,.07+.01*e,.048,{k:.03}),T,"thigh");let w=x=>v.clone().lerp(m,x);o(je(w(.45).add(ae(g*.04,0,.012)),[.04+.03*e,.16,.048+.02*e],{dir:b,k:.014}),T,"thigh"),o(je(w(.42).add(ae(0,0,.045+.01*e)),[.036+.018*e,.16,.03+.022*e],{dir:b,k:.012}),T,"thigh"),o(je(w(.8).add(ae(-g*.035,0,.03)),[.034+.02*e,.065+.01*e,.034+.016*e],{dir:b,k:.012}),T,"thigh"),o(je(w(.5).add(ae(0,0,-.045)),[.05+.02*e,.16,.036+.016*e],{dir:b,k:.014}),T,"thigh"),o(je(w(.25).add(ae(-g*.045,0,0)),[.035+.015*e,.1,.045],{dir:b,k:.02}),T,"thigh"),o(je(m.clone().add(ae(0,.01,.045)),[.025,.028,.015],{k:.012}),y,"shin"),o(Kt(m,p,.045,.03,{k:.02}),y,"shin");let L=p.clone().sub(m).normalize();[[g*.018,.028],[-g*.02,.03]].forEach(([x,A])=>{o(je(m.clone().lerp(p,.3).add(ae(x,0,-.035)),[.028+.016*e,.085+A,.03+.016*e],{dir:L,k:.012}),y,"shin")}),o(je(m.clone().lerp(p,.35).add(ae(g*.02,0,.03)),[.018,.1,.016],{dir:L,k:.014}),y,"shin")}),a}var Mi=class{constructor(e={}){ry(),this.shirtless=!!e.shirtless,this.colors={skin:new ke(e.skin||14262396),shirt:new ke(e.shirt||11740702),shorts:new ke(e.shorts||2041651),sock:new ke(15790320)},this.root=new Ct,this.body=new Ct,this.root.add(this.body);let t=(c,h,d,u)=>{let f=new ks;return f.position.set(h,d,u),c.add(f),f};this.hips=t(this.body,0,.95,0),this.legs=[-1,1].map(c=>{let h=t(this.hips,c*.1,-.05,0),d=t(h,0,-.45,0);return{side:c,hip:h,knee:d}}),this.spine=t(this.hips,0,.08,0),this.neck=t(this.spine,0,.535,0),this.arms=[-1,1].map(c=>{let h=t(this.spine,c*.2,.49,0),d=t(h,0,-.3,0);return{side:c,shoulder:h,elbow:d}}),this.bones=[this.hips,this.spine,this.neck,...this.legs.flatMap(c=>[c.hip,c.knee]),...this.arms.flatMap(c=>[c.shoulder,c.elbow])];let n=new Ht({color:this.colors.skin,roughness:.55,vertexColors:!0}),s=(c,h,d)=>{let u=new Ve(c,h);return u.castShadow=!0,u.receiveShadow=!0,d.add(u),u};s(Gn.head,n,this.neck).scale.setScalar(1.07),s(Gn.hair,ic(e.hair||2759184,.85),this.neck).scale.setScalar(1.07),this.arms.forEach(c=>s(c.side>0?Gn.handL:Gn.handR,n,c.elbow)),this.legs.forEach(c=>s(Gn.shoe,oy,c.knee));let r=ic(15855336,.25),a=ic(e.eyes||3877402,.15),o=ic(e.hair||2759184,.9);[-1,1].forEach(c=>{let h=new Ve(new vi(.0125,14,10),r);h.position.set(c*.0353,.201,.0888),this.neck.add(h);let d=new Ve(new vi(.0062,10,8),a);d.position.set(c*.0353,.201,.1011),this.neck.add(d);let u=new Ve(new hn(.036,.006,.01),o);u.position.set(c*.0364,.227,.0963),u.rotation.z=-c*.1,this.neck.add(u)}),this.walkPhase=0,this.pose="idle",this.poseT=0,this.time=0,this.mesh=null,this.muscleKey="",this.detail=e.detail||(this.shirtless?"high":"normal");let l=e.muscles||[1,1,1];this.setMuscles(l[0],l[1],l[2])}bindPose(){this.body.position.set(0,0,0),this.body.rotation.set(0,0,0),this.bones.forEach(e=>e.rotation.set(0,0,0)),this.arms.forEach(e=>{e.shoulder.rotation.z=e.side*Uf.shoulderZ}),this.legs.forEach(e=>{e.hip.rotation.z=e.side*Uf.hipZ})}placeJoints(e,t){this.arms.forEach(n=>{n.shoulder.position.x=n.side*(.19+.075*t)}),this.legs.forEach(n=>{n.hip.position.x=n.side*(.095+.02*e)})}inBind(e){let t=[this.root.position.clone(),this.root.rotation.clone(),this.root.scale.clone()];this.bindPose(),this.root.position.set(0,0,0),this.root.rotation.set(0,0,0),this.root.scale.set(1,1,1),this.root.updateMatrixWorld(!0);let n=e();return[this.root.position,this.root.rotation,this.root.scale].forEach((s,r)=>s.copy(t[r])),this.root.updateMatrixWorld(!0),n}setMuscles(e,t,n){let s=d=>Math.round(Math.max(0,Math.min(100,d))/5)*5,r=`${s(e)}-${s(t)}-${s(n)}`;if(r===this.muscleKey)return;this.muscleKey=r;let a=s(e)/100,o=s(t)/100,l=s(n)/100;this.placeJoints(a,l);let c=this.inBind(()=>this.bodyData(a,o,l,r)),h=this.dressed(c);if(!this.mesh)this.mesh=new kr(h,ay),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.mesh.frustumCulled=!1,this.body.add(this.mesh),this.inBind(()=>{this.mesh.updateMatrixWorld(!0),this.mesh.bind(new zr(this.bones))});else{let d=this.mesh.geometry;this.mesh.geometry=h,d.dispose(),this.inBind(()=>this.mesh.skeleton.calculateInverses())}}bodyData(e,t,n,s){let r=`${s}|${this.detail}|${this.shirtless?"bare":"shirt"}`;if(su.has(r))return su.get(r);let a=(b,w=0,L=0,x=0)=>b.localToWorld(ae(w,L,x)),o={hips:a(this.hips),spine:a(this.spine),neck:a(this.neck),chest:a(this.spine,0,.36,0),knee:a(this.legs[0].knee),arms:this.arms.map(b=>({side:b.side,S:a(b.shoulder),E:a(b.elbow),W:a(b.elbow,0,-.258,0)})),legs:this.legs.map(b=>({side:b.side,H:a(b.hip),K:a(b.knee),A:a(b.knee,0,-.4,0)}))},l=ly(o,e,t,n,!this.shirtless),c=rc(l,this.detail==="high"?.0095:.014,.03),h=c.pos.length/3,d=new Uint16Array(h*4),u=new Float32Array(h*4),f=new Float32Array(h),g=new Float32Array(h),v=new Float32Array(h),m=new Float32Array(11),p=o.hips.y+.1,S=o.neck.y-.08,T=b=>Math.max(0,Math.min(1,b));for(let b=0;b<h;b++){let w=c.pos[b*3],L=c.pos[b*3+1],x=c.pos[b*3+2];m.fill(1e9);let A=null,N=1e9;for(let R of l){if(R.sub)continue;let U=au(R,w,L,x);U<m[R.bone]&&(m[R.bone]=U),U<N&&(N=U,A=R)}let I=0,M=1;for(let R=0;R<11;R++)m[R]<m[I]?(M=I,I=R):R!==I&&m[R]<m[M]&&(M=R);I===M&&(M=(I+1)%11);let C=Math.exp(-(m[M]-m[I])/.02);d[b*4]=I,d[b*4+1]=M,u[b*4]=1/(1+C),u[b*4+1]=C/(1+C);let P=A.region;if((P==="pelvis"||P==="torso")&&(f[b]=T((p-L)/.012+.5)),P==="thigh"&&(f[b]=T((L-o.knee.y-.29)/.012+.5)),P==="shin"&&(v[b]=T((.12-L)/.01+.5)),P==="torso"||P==="pelvis"){let R=Math.abs(w),U=S-.01-(R<.1?.07*Math.cos(R/.1*Math.PI/2):0),V=T((U-L)/.012+.5);L>o.chest.y-.07&&(V*=T((.115+.035*n-R)/.012+.5)),g[b]=L<p?0:V}}let y={m:c,si:d,sw:u,shorts:f,shirt:g,sock:v};return su.set(r,y),y}dressed({m:e,si:t,sw:n,shorts:s,shirt:r,sock:a}){let o=e.ao.length,l=new Float32Array(o*3),{skin:c,shorts:h,shirt:d,sock:u}=this.colors;for(let g=0;g<o;g++){let v=c.r,m=c.g,p=c.b,S=(y,b)=>{v+=(y.r-v)*b,m+=(y.g-m)*b,p+=(y.b-p)*b};!this.shirtless&&r[g]>0&&S(d,r[g]),s[g]>0&&S(h,s[g]),a[g]>0&&S(u,a[g]);let T=e.ao[g];l[g*3]=v*T,l[g*3+1]=m*T,l[g*3+2]=p*T}let f=new Ot;return f.setAttribute("position",new zt(e.pos,3)),f.setAttribute("normal",new zt(e.nrm,3)),f.setAttribute("color",new zt(l,3)),f.setAttribute("skinIndex",new ts(t,4)),f.setAttribute("skinWeight",new zt(n,4)),f.setIndex(e.idx),f}resetJoints(){this.body.position.set(0,0,0),this.body.rotation.set(0,0,0),this.spine.rotation.set(0,0,0),this.neck.rotation.set(0,0,0),this.legs.forEach(e=>{e.hip.rotation.set(0,0,e.side*.04),e.knee.rotation.set(0,0,0)}),this.arms.forEach(e=>{e.shoulder.rotation.set(0,0,e.side*.2),e.elbow.rotation.set(0,0,0)})}setPose(e,t=0){this.pose=e,this.poseT=t}update(e,t=0){this.time+=e,this.resetJoints();let n=this.poseT,[s,r]=this.legs,[a,o]=this.arms;switch(this.pose){case"walk":case"idle":{if(t>.1){this.walkPhase+=e*t*2.2;let l=Math.sin(this.walkPhase),c=Math.min(1,t/4)*.7;s.hip.rotation.x=l*c,r.hip.rotation.x=-l*c,s.knee.rotation.x=Math.max(0,-l)*c*1.4,r.knee.rotation.x=Math.max(0,l)*c*1.4,a.shoulder.rotation.x=-l*c*.8,o.shoulder.rotation.x=l*c*.8,a.elbow.rotation.x=-.4,o.elbow.rotation.x=-.4,this.body.position.y=Math.abs(Math.cos(this.walkPhase))*.05,this.spine.rotation.x=.05}else{let l=Math.sin(this.time*2)*.02;this.spine.rotation.x=l,a.shoulder.rotation.z=-.18,o.shoulder.rotation.z=.18,a.elbow.rotation.x=-.15,o.elbow.rotation.x=-.15}break}case"flex":{let l=.8+Math.sin(this.time*6)*.05;a.shoulder.rotation.z=-1.5,o.shoulder.rotation.z=1.5,a.elbow.rotation.z=-1.9*l,o.elbow.rotation.z=1.9*l,s.hip.rotation.z=-.15,r.hip.rotation.z=.15;break}case"squat":{let l=1.25*n,c=2.3*n,h=c-l;s.hip.rotation.x=r.hip.rotation.x=-l,s.knee.rotation.x=r.knee.rotation.x=c;let d=.45*Math.cos(l)+.45*Math.cos(h);this.body.position.y=d-.9,this.body.position.z=-(.45*Math.sin(l)-.45*Math.sin(h)),this.spine.rotation.x=.7*n,this.neck.rotation.x=-.5*n,a.shoulder.rotation.z=-1.9,o.shoulder.rotation.z=1.9,a.elbow.rotation.z=-1.9,o.elbow.rotation.z=1.9;break}case"bench":{this.body.rotation.x=-Math.PI/2,this.body.position.set(0,.68,1.05),s.hip.rotation.x=r.hip.rotation.x=.25,s.knee.rotation.x=r.knee.rotation.x=1.3,s.hip.rotation.z=-.3,r.hip.rotation.z=.3;let l=1-n;a.shoulder.rotation.x=o.shoulder.rotation.x=-Math.PI/2+l*.2,a.shoulder.rotation.z=-l*1.1,o.shoulder.rotation.z=l*1.1,a.elbow.rotation.z=l*1.9,o.elbow.rotation.z=-l*1.9;break}case"lat":{s.hip.rotation.x=r.hip.rotation.x=-Math.PI/2,s.knee.rotation.x=r.knee.rotation.x=Math.PI/2,this.body.position.y=-.45,this.spine.rotation.x=-.12*n;let l=2.9-n*1.3;a.shoulder.rotation.z=-l,o.shoulder.rotation.z=l,a.elbow.rotation.z=-n*1.6,o.elbow.rotation.z=n*1.6;break}case"sleep":{this.body.rotation.x=-Math.PI/2,this.body.position.set(0,.2,.9),a.shoulder.rotation.z=-.2,o.shoulder.rotation.z=.2,this.spine.rotation.x=Math.sin(this.time*1.2)*.02;break}case"count":{a.shoulder.rotation.x=o.shoulder.rotation.x=-.9,a.elbow.rotation.x=-.7-Math.max(0,Math.sin(this.time*18))*.4*n,o.elbow.rotation.x=-.7,this.spine.rotation.x=.2,this.neck.rotation.x=.3;break}default:break}}};function cy(i){let e=i>>>0||1;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function kf(i){let e=document.createElement("canvas");return e.width=e.height=i,[e,e.getContext("2d")]}function zf(i,e,t=!0){let n=new xi(i);return n.wrapS=n.wrapT=Pn,n.repeat.set(e[0],e[1]),n.anisotropy=8,t&&(n.colorSpace=kt),n}function qi(i,e,t,n,s,r=1,a=3,o=1){i.globalAlpha=o;for(let l=0;l<n;l++){i.fillStyle=s[Math.floor(t()*s.length)];let c=r+t()*(a-r);i.fillRect(t()*e,t()*e,c,c)}i.globalAlpha=1}var ou=new Map;function hy(i,e){return ou.has(i)||ou.set(i,e()),ou.get(i)}function xn(i,e,t,n){return hy(i,()=>{let[s,r]=kf(e),a=cy(i.length*7919+e);t(r,e,a);let[o,l]=kf(e);return l.filter="grayscale(1) contrast(1.4)",l.drawImage(s,0,0),{map:zf(s,n),bump:zf(o,n,!1)}})}var Tt={grass:(i=[60,60])=>xn("grass"+i,512,(e,t,n)=>{e.fillStyle="#4a6f2c",e.fillRect(0,0,t,t),qi(e,t,n,9e3,["#557d33","#3e5f25","#628a3a","#46692a","#6b8f40"],1,3),e.globalAlpha=.5;for(let s=0;s<2500;s++){e.strokeStyle=["#6f9a45","#39571f","#5c8437"][Math.floor(n()*3)];let r=n()*t,a=n()*t;e.beginPath(),e.moveTo(r,a),e.lineTo(r+(n()-.5)*3,a-3-n()*5),e.stroke()}e.globalAlpha=1},i),asphalt:(i=[1,1])=>xn("asphalt"+i,512,(e,t,n)=>{e.fillStyle="#3b3d40",e.fillRect(0,0,t,t),qi(e,t,n,14e3,["#2f3134","#46484c","#505256","#34363a","#292a2d"],1,2.5),e.globalAlpha=.08;for(let s=0;s<18;s++)e.fillStyle=n()>.5?"#000":"#777",e.beginPath(),e.ellipse(n()*t,n()*t,20+n()*60,10+n()*30,n()*3,0,Math.PI*2),e.fill();e.globalAlpha=1},i),pavement:(i=[1,1])=>xn("pavement"+i,256,(e,t,n)=>{e.fillStyle="#a9a7a0",e.fillRect(0,0,t,t),qi(e,t,n,3e3,["#b5b3ab","#9c9a93","#a3a199","#bdbbb3"],1,2),e.strokeStyle="#7d7b75",e.lineWidth=3;for(let s=0;s<=2;s++)e.beginPath(),e.moveTo(0,s*t/2),e.lineTo(t,s*t/2),e.stroke(),e.beginPath(),e.moveTo(s*t/2,0),e.lineTo(s*t/2,t),e.stroke()},i),brick:(i="#9a4a32",e=[1,1])=>xn("brick"+i+e,512,(t,n,s)=>{t.fillStyle="#b8b0a2",t.fillRect(0,0,n,n);let r=16,a=n/8,o=n/r,l=new ke(i);for(let c=0;c<r;c++)for(let h=-1;h<9;h++){let d=l.clone().offsetHSL((s()-.5)*.03,(s()-.5)*.1,(s()-.5)*.1);t.fillStyle="#"+d.getHexString();let u=c%2?a/2:0;t.fillRect(h*a+u+2,c*o+2,a-4,o-4)}qi(t,n,s,4e3,["rgba(0,0,0,.25)","rgba(255,255,255,.12)"],1,2)},e),plaster:(i="#e8e0d0",e=[1,1])=>xn("plaster"+i+e,256,(t,n,s)=>{t.fillStyle=i,t.fillRect(0,0,n,n),qi(t,n,s,5e3,["rgba(0,0,0,.05)","rgba(255,255,255,.08)","rgba(0,0,0,.08)"],1,3)},e),concrete:(i="#b9b6ad",e=[1,1])=>xn("concrete"+i+e,256,(t,n,s)=>{t.fillStyle=i,t.fillRect(0,0,n,n),qi(t,n,s,6e3,["rgba(0,0,0,.08)","rgba(255,255,255,.1)","rgba(60,50,40,.1)"],1,3),t.strokeStyle="rgba(0,0,0,.25)",t.lineWidth=2,t.strokeRect(0,0,n,n)},e),wood:(i="#8a5a34",e=[1,1])=>xn("wood"+i+e,512,(t,n,s)=>{let a=n/6,o=new ke(i);for(let l=0;l<6;l++){let c=o.clone().offsetHSL(0,0,(s()-.5)*.08);t.fillStyle="#"+c.getHexString(),t.fillRect(0,l*a,n,a),t.globalAlpha=.18;for(let h=0;h<40;h++){t.strokeStyle=s()>.5?"#000":"#fff",t.beginPath();let d=l*a+s()*a;t.moveTo(0,d),t.bezierCurveTo(n*.3,d+(s()-.5)*6,n*.6,d+(s()-.5)*6,n,d),t.stroke()}t.globalAlpha=1,t.fillStyle="rgba(0,0,0,.45)",t.fillRect(0,l*a,n,2),t.fillRect(s()*n|0,l*a,2,a)}},e),rubber:(i=[1,1])=>xn("rubber"+i,256,(e,t,n)=>{e.fillStyle="#26272a",e.fillRect(0,0,t,t),qi(e,t,n,5e3,["#34363a","#1c1d1f","#3d3f44","#50525a"],1,2),e.strokeStyle="#141415",e.lineWidth=3,e.strokeRect(0,0,t,t)},i),tiles:(i="#e9e7e2",e="#b9b5ad",t=[1,1])=>xn("tiles"+i+t,256,(n,s,r)=>{n.fillStyle=e,n.fillRect(0,0,s,s);let a=2,o=s/a;for(let l=0;l<a;l++)for(let c=0;c<a;c++){let h=new ke(i).offsetHSL(0,0,(r()-.5)*.03);n.fillStyle="#"+h.getHexString(),n.fillRect(c*o+2,l*o+2,o-4,o-4)}qi(n,s,r,800,["rgba(0,0,0,.04)"],1,3)},t),marble:(i=[1,1])=>xn("marble"+i,512,(e,t,n)=>{let r=t/2;for(let a=0;a<2;a++)for(let o=0;o<2;o++){e.fillStyle=(o+a)%2?"#2b2a28":"#ece8df",e.fillRect(o*r,a*r,r,r),e.globalAlpha=.25;for(let l=0;l<6;l++){e.strokeStyle=(o+a)%2?"#6b6861":"#9a958a",e.lineWidth=1+n()*2,e.beginPath();let c=o*r+n()*r,h=a*r;e.moveTo(c,h);for(let d=0;d<8;d++)c+=(n()-.5)*40,h+=r/8,e.lineTo(c,h);e.stroke()}e.globalAlpha=1}e.strokeStyle="#8c877c",e.lineWidth=2;for(let a=0;a<=2;a++)e.beginPath(),e.moveTo(0,a*r),e.lineTo(t,a*r),e.stroke(),e.beginPath(),e.moveTo(a*r,0),e.lineTo(a*r,t),e.stroke()},i),roof:(i=[1,1])=>xn("roof"+i,256,(e,t,n)=>{e.fillStyle="#5a2a1e",e.fillRect(0,0,t,t);let s=8,r=t/s,a=8,o=t/a;for(let l=0;l<s;l++)for(let c=-1;c<=a;c++){let h=new ke("#9c4a33").offsetHSL(0,0,(n()-.5)*.1);e.fillStyle="#"+h.getHexString();let d=l%2?o/2:0;e.beginPath(),e.roundRect(c*o+d+1,l*r,o-2,r-3,[0,0,8,8]),e.fill()}},i),bark:(i=[1,1])=>xn("bark"+i,128,(e,t,n)=>{e.fillStyle="#5a4230",e.fillRect(0,0,t,t);for(let s=0;s<90;s++){e.strokeStyle=["#3e2c1f","#6d5340","#4a3626"][Math.floor(n()*3)],e.lineWidth=1+n()*2;let r=n()*t;e.beginPath(),e.moveTo(r,0),e.lineTo(r+(n()-.5)*10,t),e.stroke()}},i),leaves:(i=[2,2])=>xn("leaves"+i,256,(e,t,n)=>{e.fillStyle="#3b5e25",e.fillRect(0,0,t,t);for(let s=0;s<1400;s++)e.fillStyle=["#4c7630","#2f4d1c","#5b8738","#416a29","#6a9442"][Math.floor(n()*5)],e.beginPath(),e.ellipse(n()*t,n()*t,2+n()*4,1+n()*2,n()*3,0,Math.PI*2),e.fill()},i),fabric:(i="#23324a",e=[4,4])=>xn("fabric"+i+e,64,(t,n,s)=>{t.fillStyle=i,t.fillRect(0,0,n,n),t.globalAlpha=.12;for(let r=0;r<n;r+=2)t.fillStyle="#000",t.fillRect(0,r,n,1),t.fillStyle="#fff",t.fillRect(r,0,1,n);t.globalAlpha=1},e)};var ur=new Map;function Ae(i,e={}){let t=i+JSON.stringify(e);if(!ur.has(t)){let{basic:n,...s}=e;ur.set(t,n?new Di({color:i,...s}):new Ht({color:i,roughness:.75,metalness:0,...s}))}return ur.get(t)}function Pt(i,e,t={}){return ur.has(i)||ur.set(i,new Ht({map:e.map,bumpMap:e.bump,bumpScale:1.2,roughness:.85,metalness:0,...t})),ur.get(i)}var be={grass:()=>Pt("grass",Tt.grass([1,1]),{roughness:1}),asphalt:()=>Pt("asphalt",Tt.asphalt(),{roughness:.95}),pavement:()=>Pt("pavement",Tt.pavement(),{roughness:.9}),brickRed:()=>Pt("brickRed",Tt.brick("#8e4631"),{roughness:.9}),brickGrey:()=>Pt("brickGrey",Tt.brick("#55585e"),{roughness:.9}),plasterCream:()=>Pt("plasterCream",Tt.plaster("#e6dcc6"),{roughness:.95}),plasterWhite:()=>Pt("plasterWhite",Tt.plaster("#eeebe4"),{roughness:.95}),plasterGreen:()=>Pt("plasterGreen",Tt.plaster("#cfe0d2"),{roughness:.95}),plasterGrey:()=>Pt("plasterGrey",Tt.plaster("#8d949c"),{roughness:.95}),stone:()=>Pt("stone",Tt.concrete("#d8d0bd"),{roughness:.85}),concrete:()=>Pt("concrete",Tt.concrete("#9e9b94"),{roughness:.95}),woodFloor:()=>Pt("woodFloor",Tt.wood("#9a6a3e"),{roughness:.55}),woodDark:()=>Pt("woodDark",Tt.wood("#5b3b22"),{roughness:.6}),rubber:()=>Pt("rubber",Tt.rubber(),{roughness:.95}),tiles:()=>Pt("tiles",Tt.tiles("#ecebe7","#b9b5ad"),{roughness:.35}),marble:()=>Pt("marble",Tt.marble(),{roughness:.25}),roof:()=>Pt("roof",Tt.roof(),{roughness:.8}),bark:()=>Pt("bark",Tt.bark(),{roughness:1}),leaves:()=>Pt("leaves",Tt.leaves(),{roughness:.9}),glass:()=>Ae(2240570,{roughness:.05,metalness:.6,envMapIntensity:1.6}),metal:()=>Ae(2829617,{roughness:.4,metalness:.8}),chrome:()=>Ae(14080477,{roughness:.15,metalness:1}),mirror:()=>Ae(15265522,{roughness:.02,metalness:1,envMapIntensity:1.3})};function uy(i,e,t,n,s){let r=i.attributes.uv,a=[[n,t],[n,t],[e,n],[e,n],[e,t],[e,t]];for(let o=0;o<6;o++)for(let l=0;l<4;l++){let c=o*4+l;r.setXY(c,r.getX(c)*a[o][0]/s,r.getY(c)*a[o][1]/s)}r.needsUpdate=!0}function te(i,e,t,n,s=0,r=0,a=0,o=null,l=!0,c=0){let h=new hn(i,e,t);c&&uy(h,i,e,t,c);let d=new Ve(h,typeof n=="number"?Ae(n):n);return d.position.set(s,r,a),d.castShadow=l,d.receiveShadow=!0,o&&o.add(d),d}function pt(i,e,t,n,s=0,r=0,a=0,o=null,l=20){let c=new Ve(new Vs(i,e,t,l),typeof n=="number"?Ae(n):n);return c.position.set(s,r,a),c.castShadow=!0,c.receiveShadow=!0,o&&o.add(c),c}function fs(i,e,t,n,s,r,a=16){let o=new Ve(new vi(i,a,Math.max(8,a-4)),typeof e=="number"?Ae(e):e);return o.position.set(t,n,s),o.castShadow=!0,o.receiveShadow=!0,r&&r.add(o),o}function Hn(i,e,t,n,s,r,a,o=0){let l=new mn(i,e);if(o){let h=l.attributes.uv;for(let d=0;d<h.count;d++)h.setXY(d,h.getX(d)*i/o,h.getY(d)*e/o)}let c=new Ve(l,t);return c.rotation.x=-Math.PI/2,c.position.set(n,s,r),c.receiveShadow=!0,a&&a.add(c),c}function Si(i,e,t,n="#222",s="#fff",r="bold 72px sans-serif",a=!1){let o=document.createElement("canvas");o.width=1024,o.height=Math.round(1024*(t/e));let l=o.getContext("2d");l.fillStyle=n,l.fillRect(0,0,o.width,o.height),l.fillStyle=s,l.font=r.replace(/(\d+)px/,(d,u)=>`${u*2}px`),l.textAlign="center",l.textBaseline="middle",l.fillText(i,o.width/2,o.height/2+6);let c=new xi(o);c.colorSpace=kt,c.anisotropy=8;let h=new Ht({map:c,roughness:.5});return a&&(h.emissiveMap=c,h.emissive=new ke(16777215),h.emissiveIntensity=.6),new Ve(new mn(e,t),h)}function dy(){let i=new Ct,e=new Ve(new ta(.5,.58,40),new Di({color:16777215,transparent:!0,opacity:.35,depthWrite:!1}));return e.rotation.x=-Math.PI/2,e.name="ring",i.add(e),i}var ps=class{constructor(e,t){this.name=e,this.music=t,this.scene=new Bn,this.colliders=[],this.circles=[],this.dynamic=[],this.interactions=[],this.bounds={x1:-50,z1:-50,x2:50,z2:50},this.spawn={x:0,z:0,rot:0},this.updaters=[],this.camDist=9,this.camHeight=5,this.playerPos=null}solid(e,t,n,s,r=2){this.colliders.push({x1:e-n/2,z1:t-s/2,x2:e+n/2,z2:t+s/2,h:r})}interact(e,t,n,s,r=null,a=1.8){let o=dy();o.position.set(e,.03,t),this.scene.add(o),this.interactions.push({x:e,z:t,label:n,action:s,data:r,radius:a,marker:o})}update(e,t){this.interactions.forEach((n,s)=>{let r=n.marker.getObjectByName("ring");r.material.opacity=.22+(Math.sin(t*2.5+s)+1)*.1}),this.updaters.forEach(n=>n(e,t))}collide(e,t=.4,n=null){let s=this.bounds;e.x=Math.max(s.x1+t,Math.min(s.x2-t,e.x)),e.z=Math.max(s.z1+t,Math.min(s.z2-t,e.z));let r=this.colliders.slice(),a=this.circles.slice();for(let o of this.dynamic)for(let l of o())l===n||l.owner===n||(l.r!==void 0?a.push(l):r.push(l));for(let o of r){let l=Math.max(o.x1,Math.min(o.x2,e.x)),c=Math.max(o.z1,Math.min(o.z2,e.z)),h=e.x-l,d=e.z-c,u=h*h+d*d;if(u<t*t)if(u>1e-6){let f=Math.sqrt(u);e.x=l+h/f*t,e.z=c+d/f*t}else{let f=[[e.x-o.x1,-1,0],[o.x2-e.x,1,0],[e.z-o.z1,0,-1],[o.z2-e.z,0,1]];f.sort((p,S)=>p[0]-S[0]);let[g,v,m]=f[0];e.x+=v*(g+t),e.z+=m*(g+t)}}for(let o of a){let l=e.x-o.x,c=e.z-o.z,h=Math.hypot(l,c),d=o.r+t;h<d&&(h>1e-6?(e.x=o.x+l/h*d,e.z=o.z+c/h*d):e.x+=d)}}};function Vf(i,e,t,n,s){let r=new Ct;r.position.set(e,0,t),r.rotation.y=s()*Math.PI*2;let a=pt(.14*n,.24*n,2.6*n,be.bark(),0,1.3*n,0,r,10);a.castShadow=!0;let o=be.leaves(),l=5+Math.floor(s()*4);for(let c=0;c<l;c++){let h=s()*Math.PI*2,d=s()*.9*n,u=(.8+s()*.6)*n,f=new Ve(new Ws(u,2),o);f.position.set(Math.cos(h)*d,(2.8+s()*1.4)*n,Math.sin(h)*d),f.scale.set(1,.85+s()*.3,1),f.castShadow=!0,f.receiveShadow=!0,r.add(f)}i.add(r)}function Gf(i,e,t,n,s){for(let r=0;r<3;r++){let a=new Ve(new Ws((.45+s()*.2)*n,1),be.leaves());a.position.set(e+(s()-.5)*.8*n,.35*n,t+(s()-.5)*.8*n),a.castShadow=!0,i.add(a)}}function ac(i,e,t,n){let s=new Ct;s.position.set(e,0,t),s.rotation.y=n,pt(.07,.1,5.2,be.metal(),0,2.6,0,s,10);let r=te(.08,.08,1.4,be.metal(),0,5.1,.65,s);r.castShadow=!1,te(.35,.12,.6,be.metal(),0,5.05,1.35,s);let a=te(.28,.02,.5,Ae(16774358,{emissive:16773577,emissiveIntensity:1.5}),0,4.98,1.35,s,!1);a.castShadow=!1,i.add(s)}function fy(i){let e=new Ct,t=new _i,n=[[-2.1,.35],[2.1,.35],[2.15,.8],[1.9,.95],[.85,1.05],[.3,1.5],[-1.3,1.52],[-1.95,1.2],[-2.15,.9]];t.moveTo(n[0][0],n[0][1]),n.slice(1).forEach(([c,h])=>t.lineTo(c,h));let s=new Ve(new Ni(t,{depth:1.7,bevelEnabled:!0,bevelSize:.08,bevelThickness:.08,bevelSegments:3}),Ae(i,{roughness:.25,metalness:.7,envMapIntensity:1.2}));s.rotation.y=-Math.PI/2,s.position.x=.85,s.castShadow=!0,e.add(s);let r=new _i;[[.75,1.07],[.28,1.46],[-1.25,1.48],[-1.85,1.2],[-1.8,1.07]].forEach(([c,h],d)=>d?r.lineTo(c,h):r.moveTo(c,h));let a=new Ve(new Ni(r,{depth:1.82,bevelEnabled:!1}),be.glass());a.rotation.y=-Math.PI/2,a.position.x=.91,e.add(a),[[-.86,1.35],[.86,1.35],[-.86,-1.35],[.86,-1.35]].forEach(([c,h])=>{let d=pt(.36,.36,.26,Ae(1381653,{roughness:.9}),c,.36,h,e,18);d.rotation.z=Math.PI/2;let u=pt(.2,.2,.27,be.chrome(),c,.36,h,e,12);u.rotation.z=Math.PI/2});let o=Ae(16777215,{emissive:16774872,emissiveIntensity:.6}),l=Ae(5570560,{emissive:16718362,emissiveIntensity:.4});return[-.6,.6].forEach(c=>{te(.35,.14,.05,o,c,.78,2.2,e,!1),te(.35,.12,.05,l,c,.85,-2.2,e,!1)}),te(1.6,.2,.1,Ae(2236962),0,.45,2.22,e,!1),te(1.6,.2,.1,Ae(2236962),0,.45,-2.22,e,!1),e}function oc(i,e,t,n){let s=new Ct;s.position.set(e,0,t),s.rotation.y=n,pt(.06,.08,3.2,be.metal(),0,1.6,0,s,10),te(.32,.9,.25,Ae(1842204,{roughness:.6}),0,3.5,0,s);let r=[16722458,16757760,2817898].map((a,o)=>{let l=new Ht({color:1118481,emissive:a,emissiveIntensity:0}),c=new Ve(new Xr(.09,16),l);return c.position.set(0,3.78-o*.28,.13),s.add(c),l});return i.add(s),r}function lc(i,e,t,n,s,r,a,o=15921902){let l=new Ct;l.position.set(e,t,n),l.rotation.y=a;let c=Ae(o,{roughness:.5});te(s+.16,.08,.14,c,0,r/2+.04,.02,l,!1),te(s+.3,.08,.24,c,0,-r/2-.04,.07,l,!1),te(.08,r,.14,c,-s/2-.04,0,.02,l,!1),te(.08,r,.14,c,s/2+.04,0,.02,l,!1),te(.05,r,.08,c,0,0,.02,l,!1);let h=new Ve(new mn(s,r),be.glass());h.position.z=-.01,l.add(h),i.add(l)}function cc(i,{x:e,z:t,w:n,d:s,h:r,wall:a,doorSide:o,floors:l=2,trim:c=14275784,winW:h=1.3,winH:d=1.5,skipFront:u=!1}){let f=new Ct;f.position.set(e,0,t),i.scene.add(f),te(n,r,s,a,0,r/2,0,f,!0,3),te(n+.1,.6,s+.1,be.concrete(),0,.3,0,f,!1,2),te(n+.4,.3,s+.4,Ae(c,{roughness:.7}),0,r+.15,0,f),i.solid(e,t,n+.1,s+.1,r+3);let g=o*(s/2+.03),v=o>0?0:Math.PI,m=te(1.4,2.4,.12,be.woodDark(),0,1.2+.1,g,f,!0,1);te(1.7,.14,.2,Ae(c),0,2.55,g,f,!1),te(.12,2.5,.2,Ae(c),-.78,1.25,g,f,!1),te(.12,2.5,.2,Ae(c),.78,1.25,g,f,!1);let p=fs(.05,be.chrome(),.5,1.2,g+o*.08,f,10);p.castShadow=!1,te(2.2,.12,1.1,be.concrete(),0,.06,g+o*.55,f,!1,1);let S=Math.max(1,Math.floor(n/3.2));for(let T=0;T<l;T++){let y=1.6+T*(r-1.2)/l+(T?.6:0);if(y+d/2>r-.3)continue;for(let w=0;w<S;w++){let L=-n/2+n/S*(w+.5);!(T===0&&Math.abs(L)<1.5)&&!(u&&T===0)&&lc(f,L,y,g+o*.02,h,d,v),lc(f,L,y,-g-o*.02,h,d,v+Math.PI)}let b=Math.max(1,Math.floor(s/3.2));for(let w=0;w<b;w++){let L=-s/2+s/b*(w+.5);lc(f,n/2+.02,y,L,h,d,Math.PI/2),lc(f,-n/2-.02,y,L,h,d,-Math.PI/2)}}return{g:f,fz:g,face:v,door:m}}function py(i,e,t,n,s){let r=new _i;r.moveTo(-e/2-.5,0),r.lineTo(e/2+.5,0),r.lineTo(0,n),r.lineTo(-e/2-.5,0);let a=new Ni(r,{depth:t+.8,bevelEnabled:!1}),o=a.attributes.uv;for(let c=0;c<o.count;c++)o.setXY(c,o.getX(c)/2,o.getY(c)/2);let l=new Ve(a,be.roof());l.position.set(0,s,-(t+.8)/2),l.castShadow=!0,l.receiveShadow=!0,i.add(l)}function Hf(){let i=new ps("city","city");i.bounds={x1:-46,z1:-46,x2:46,z2:46},i.camDist=11,i.camHeight=6;let e=i.scene;e.fog=new Fr(11123915,70,190);let t=new Ys(12572927,5984320,.25);e.add(t);let n=new $s(16772829,3.4);n.position.set(25,40,15),n.castShadow=!0,n.shadow.mapSize.set(2048,2048),Object.assign(n.shadow.camera,{left:-40,right:40,top:40,bottom:-40,near:1,far:150}),n.shadow.bias=-4e-4,n.shadow.normalBias=.03,e.add(n),e.add(n.target),i.sun=n,i.sunDir=n.position.clone().normalize();let s=7,r=()=>(s=s*16807%2147483647,s/2147483647);Hn(260,260,be.grass(),0,0,0,e,6),Hn(260,8,be.asphalt(),0,.02,0,e,8);let a=Hn(8,260,be.asphalt(),0,.021,0,e,8);a.renderOrder=1,[-1,1].forEach(M=>{[-1,1].forEach(C=>{te(126,.15,2.4,be.pavement(),C*(4+126/2),.075,M*5.2,e,!1,1.2),te(2.4,.15,126,be.pavement(),M*5.2,.075,C*(6.4+126/2),e,!1,1.2)})});let o=Ae(15921902,{roughness:.6});for(let M=-128;M<=128;M+=5)Math.abs(M)<9||(Hn(2.4,.14,o,M,.03,0,e),Hn(.14,2.4,o,0,.03,M,e));for(let M=-3;M<=3;M++)[-1,1].forEach(C=>{Hn(.5,2.2,o,M*1.05,.031,C*5.2,e),Hn(2.2,.5,o,C*5.2,.031,M*1.05,e)});[-1,1].forEach(M=>{Hn(.35,3.8,o,M*7.2,.031,M*2,e),Hn(3.8,.35,o,-M*2,.031,M*7.2,e)});{let M=cc(i,{x:-19,z:-17,w:12,d:10,h:6,wall:be.plasterCream(),doorSide:1,trim:16052714});py(M.g,12,10,3.2,6.3),te(.9,2.2,.9,be.brickRed(),3,8.4,-1.5,M.g,!0,1),te(2.6,.12,1.4,be.woodDark(),0,2.9,M.fz+.7,M.g,!0,1);let C=Si("HOME",1.6,.4,"#3b2a1c","#f4e6cc","bold 64px Georgia, serif");C.position.set(0,3.25,M.fz+.12),M.g.add(C);let P=Ae(16119280,{roughness:.6});[[-25,-21],[-17,-13]].forEach(([R,U])=>{for(let V=R;V<=U;V+=.5)te(.1,.9,.06,P,V,.45,-9.5,e);te(U-R,.08,.05,P,(R+U)/2,.7,-9.5,e),te(U-R,.08,.05,P,(R+U)/2,.3,-9.5,e),i.solid((R+U)/2,-9.5,U-R+.1,.15,1)}),te(1.6,.03,1.4,be.concrete(),-19,.015,-10.6,e,!1,1),te(.35,.4,.55,Ae(2969482,{roughness:.4,metalness:.3}),-16,1.1,-10.3,e),pt(.04,.04,.9,be.metal(),-16,.45,-10.3,e,8),i.circles.push({x:-16,z:-10.3,r:.35}),[-24,-14].forEach(R=>Gf(e,R,-11,1.2,r)),i.circles.push({x:-24,z:-11,r:.8},{x:-14,z:-11,r:.8}),i.interact(-19,-10.6,"Enter home","enter","home")}{let M=cc(i,{x:19,z:-18,w:16,d:12,h:8,wall:be.brickGrey(),doorSide:1,trim:2763824,skipFront:!0,floors:1});[-4.6,4.6].forEach(P=>{let R=new Ve(new mn(4.8,2.6),be.glass());R.position.set(P,1.9,M.fz+.03),M.g.add(R),te(5,.12,.2,be.metal(),P,3.25,M.fz+.05,M.g,!1),te(5,.12,.2,be.metal(),P,.55,M.fz+.05,M.g,!1)});let C=Si("GYM LIFE",7,1.3,"#111214","#f2b705",'bold 120px Impact, "Arial Black", sans-serif',!0);C.position.set(0,6.2,M.fz+.06),M.g.add(C),te(16.4,.8,.25,be.concrete(),0,8.4,6.05,M.g,!0,2),te(16.4,.8,.25,be.concrete(),0,8.4,-6.05,M.g,!0,2),[[-4,-2],[3,1]].forEach(([P,R])=>{te(2,1.2,1.6,Ae(10133670,{roughness:.5,metalness:.5}),P,8.9,R,M.g),pt(.5,.5,.1,be.metal(),P,9.55,R,M.g,16)}),i.interact(19,-10.6,"Enter the gym","enter","gym")}{let M=cc(i,{x:-19,z:18,w:14,d:11,h:6,wall:be.plasterWhite(),doorSide:-1,trim:3046735,skipFront:!0,floors:1});[-4.2,4.2].forEach(z=>{let H=new Ve(new mn(4,2.4),be.glass());H.position.set(z,1.8,M.fz-.03),H.rotation.y=Math.PI,M.g.add(H)});let C=document.createElement("canvas");C.width=256,C.height=16;let P=C.getContext("2d");for(let z=0;z<16;z++)P.fillStyle=z%2?"#2e7d4f":"#f4f4ef",P.fillRect(z*16,0,16,16);let R=new xi(C);R.colorSpace=kt;let U=new Ve(new hn(13,.08,2),new Ht({map:R,roughness:.9}));U.position.set(0,3.4,M.fz-1),U.rotation.x=-.25,U.castShadow=!0,M.g.add(U);let V=Si("SUPERMARKET",8,1.1,"#2e7d4f","#ffffff","bold 96px Helvetica, Arial, sans-serif",!0);V.position.set(0,4.8,M.fz-.06),V.rotation.y=Math.PI,M.g.add(V);let $=Ae(12106946,{roughness:.3,metalness:.9});[[-24.5,11.2],[-23.6,11.2]].forEach(([z,H])=>{te(.6,.45,.9,$,z,.75,H,e),pt(.02,.02,.6,$,z,.35,H+.35,e,6),pt(.02,.02,.6,$,z,.35,H-.35,e,6)}),i.solid(-24.05,11.2,1.6,1.1,1),i.interact(-19,11.1,"Enter the supermarket","enter","shop")}{let M=cc(i,{x:19,z:18,w:14,d:11,h:7.5,wall:be.stone(),doorSide:-1,trim:15327952,floors:2});for(let U=-3;U<=3;U++)U!==0&&(pt(.32,.36,6.4,Ae(15854816,{roughness:.6}),U*2,3.35,M.fz-1.6,M.g,20),te(.9,.2,.9,Ae(15854816),U*2,6.65,M.fz-1.6,M.g),i.circles.push({x:19+U*2,z:18+M.fz-1.6,r:.4}));te(14.4,.6,2.4,be.stone(),0,7.05,M.fz-1.3,M.g,!0,2);let C=new _i;C.moveTo(-7.2,0),C.lineTo(7.2,0),C.lineTo(0,1.8),C.lineTo(-7.2,0);let P=new Ve(new Ni(C,{depth:2.4,bevelEnabled:!1}),be.stone());P.position.set(0,7.35,M.fz-2.5),P.castShadow=!0,M.g.add(P),te(15,.2,3,be.stone(),0,.1,M.fz-1.5,M.g,!1,2),te(15.4,.2,3.4,be.stone(),0,.02,M.fz-1.6,M.g,!1,2);let R=Si("BANK",3.6,.55,"#e3dccb","#3a3226",'bold 110px "Times New Roman", serif');R.position.set(0,7.05,M.fz-2.51),R.rotation.y=Math.PI,M.g.add(R),i.interact(19,11.1,"Enter the bank","enter","bank")}{Hn(20,16,be.pavement(),30,.012,36,e,1.2),pt(3,3.2,.6,be.stone(),30,.3,36,e,40),pt(2.75,2.75,.1,Ae(4157318,{roughness:.05,metalness:.2,transparent:!0,opacity:.85}),30,.56,36,e,40),pt(.35,.5,1.6,be.stone(),30,1.1,36,e,20),pt(1,.2,.3,be.stone(),30,2,36,e,24);let P=new Ve(new qr(.35,1.3,16,1,!0),new Ht({color:14676991,transparent:!0,opacity:.45,roughness:.1}));P.position.set(30,2.8,36),P.rotation.x=Math.PI,e.add(P),i.updaters.push((R,U)=>{P.scale.y=1+Math.sin(U*5)*.08}),i.circles.push({x:30,z:36,r:3.2}),[[24,36],[36,36]].forEach(([R,U])=>{let V=be.woodDark();te(.5,.08,2.2,V,R,.5,U,e,!0,1),te(.08,.5,2.2,V,R+(R<30?-.25:.25),.8,U,e,!0,1),[-.9,.9].forEach($=>te(.5,.5,.08,be.metal(),R,.25,U+$,e)),i.solid(R,U,.7,2.3,1)})}let l=(M,C,P=3)=>Math.abs(M)<9||Math.abs(C)<9||i.colliders.some(R=>M>R.x1-P&&M<R.x2+P&&C>R.z1-P&&C<R.z2+P)||Math.hypot(M-30,C-36)<11||Math.hypot(M+19,C+10)<3,c=0;for(;c<55;){let M=r()*90-45,C=r()*90-45;if(l(M,C))continue;let P=.8+r()*.5;Vf(e,M,C,P,r),i.circles.push({x:M,z:C,r:.3*P}),c++}for(let M=0;M<25;M++){let C=r()*90-45,P=r()*90-45;l(C,P,1.5)||(Gf(e,C,P,1,r),i.circles.push({x:C,z:P,r:.6}))}for(let M=0;M<70;M++){let C=r()*Math.PI*2,P=52+r()*45,R=Math.cos(C)*P,U=Math.sin(C)*P;Math.abs(R)<7||Math.abs(U)<7||Vf(e,R,U,1+r()*.8,r)}let h=be.leaves();[[0,-47.5,95,1.2],[0,47.5,95,1.2],[-47.5,0,1.2,95],[47.5,0,1.2,95]].forEach(([M,C,P,R])=>{let U=[];P>R?U.push([M-27.25,41.5],[M+27.25,41.5]):U.push([C-27.25,41.5],[C+27.25,41.5]),U.forEach(([V,$])=>{P>R?te($,1.3,1.2,h,V,.65,C,e,!0,1.5):te(1.2,1.3,$,h,M,.65,V,e,!0,1.5)})});let d=document.createElement("canvas");d.width=128,d.height=16;let u=d.getContext("2d");for(let M=0;M<8;M++)u.fillStyle=M%2?"#d92b2b":"#ffffff",u.fillRect(M*16,0,16,16);let f=new xi(d);f.colorSpace=kt;let g=new Ht({map:f,roughness:.5});[[0,-46.5,0],[0,46.5,0],[-46.5,0,Math.PI/2],[46.5,0,Math.PI/2]].forEach(([M,C,P])=>{let R=new Ct;R.position.set(M,0,C),R.rotation.y=P,te(12,.35,.12,g,0,.9,0,R),[-5,0,5].forEach($=>te(.12,.9,.12,be.metal(),$,.45,0,R));let U=Si("ROAD CLOSED",2.4,.5,"#d92b2b","#ffffff","bold 80px Arial, sans-serif");U.position.set(0,1.45,.07),R.add(U);let V=U.clone();V.rotation.y=Math.PI,V.position.z=-.07,R.add(V),e.add(R)});for(let M=-40;M<=40;M+=13)Math.abs(M)<9||(ac(e,M,6.25,Math.PI),ac(e,M,-6.25,0),ac(e,6.25,M,-Math.PI/2),ac(e,-6.25,M,Math.PI/2),i.circles.push({x:M,z:6.25,r:.12},{x:M,z:-6.25,r:.12},{x:6.25,z:M,r:.12},{x:-6.25,z:M,r:.12}));let v=20,m=M=>{let C=M%v;return C<8?{h:"green",v:"red"}:C<10?{h:"yellow",v:"red"}:C<18?{h:"red",v:"green"}:{h:"red",v:"yellow"}},p=[{axis:"x",lamps:oc(e,-6.25,6.25,Math.PI/2)},{axis:"x",lamps:oc(e,6.25,-6.25,-Math.PI/2)},{axis:"z",lamps:oc(e,6.25,6.25,Math.PI)},{axis:"z",lamps:oc(e,-6.25,-6.25,0)}];[[-6.25,6.25],[6.25,-6.25],[6.25,6.25],[-6.25,-6.25]].forEach(([M,C])=>i.circles.push({x:M,z:C,r:.12}));let S=0;i.updaters.push(M=>{S+=M;let C=m(S);p.forEach(({axis:P,lamps:R})=>{let U=P==="x"?C.h:C.v;R[0].emissiveIntensity=U==="red"?3:0,R[1].emissiveIntensity=U==="yellow"?3:0,R[2].emissiveIntensity=U==="green"?3:0})});let T=[],y=[{axis:"x",side:1,from:-44,to:44},{axis:"x",side:-1,from:-44,to:44},{axis:"x",side:1,from:-44,to:44},{axis:"z",side:1,from:8,to:44},{axis:"z",side:-1,from:-44,to:-8}],b=[3038346,4160860,9055790,13152906,4930926],w=[14262396,9262372,15845797,13010498,15251862];y.forEach((M,C)=>{let P=new Mi({shirt:b[C],skin:w[C],hair:[2759184,1118481,7031339,3810837,10124111][C],shorts:[2041651,3881787,2899501,1710618,4864810][C],muscles:[[10,20,30][C%3],[10,20,30][(C+1)%3],[10,20,30][(C+2)%3]]});P.root.scale.setScalar(.94+r()*.1),e.add(P.root);let R={npc:P,route:M,dir:C%2?-1:1,u:M.from+(M.to-M.from)*(.15+.3*C%1),lane:0,speed:1.2+r()*.5,cur:0,pos:P.root.position};R.lane=R.dir>0?4.55:5.45,T.push(R)});let L=M=>M.h==="green",x=M=>M.v==="green";i.updaters.push(M=>{let C=m(S),P=i.playerPos;T.forEach(R=>{let{route:U}=R,V=R.dir>0?4.55:5.45;R.lane+=(V-R.lane)*Math.min(1,M*2);let $=(le,Pe)=>U.axis==="x"?[le,U.side*Pe]:[U.side*Pe,le],z=R.speed,H=R.u+R.dir*1.2;Math.abs(R.u)>4.2&&Math.abs(H)<=4.4&&!(U.axis==="x"?L(C):x(C))&&(z=0);let[de,fe]=$(R.u+R.dir*.9,R.lane),We=(le,Pe)=>Math.hypot(le-de,Pe-fe)<.75;P&&We(P.x,P.z)&&(z=0),T.some(le=>le!==R&&We(le.pos.x,le.pos.z))&&(z=0),R.cur+=(z-R.cur)*Math.min(1,M*6),R.u+=R.dir*R.cur*M,R.u>U.to&&(R.u=U.to,R.dir=-1),R.u<U.from&&(R.u=U.from,R.dir=1);let[Ye,nt]=$(R.u,R.lane);R.pos.set(Ye,Math.abs(R.u)>4&&Math.abs(R.u)<128?.15:0,nt),U.axis==="x"?R.pos.y=Math.abs(Ye)>=4?.15:0:R.pos.y=Math.abs(nt)>=4?.15:0;let Q=(U.axis==="x"?R.dir>0?Math.PI/2:-Math.PI/2:R.dir>0?0:Math.PI)-R.npc.root.rotation.y;Q=Math.atan2(Math.sin(Q),Math.cos(Q)),R.npc.root.rotation.y+=Q*Math.min(1,M*8),R.npc.setPose("walk"),R.npc.update(M,R.cur*2.4)})}),i.dynamic.push(()=>T.map(M=>({x:M.pos.x,z:M.pos.z,r:.32,owner:M})));let A=[],N=[10165276,1916787,14211288,2039583,3104078,9080726,11897642];for(let M=0;M<7;M++){let C=fy(N[M]),P=M%2?"x":"z",R=M%4<2?1:-1;C.userData={axis:P,dir:R,u:-110+M*33,v:0,max:10+M%3*2.5},e.add(C),A.push(C)}let I=M=>{let C=M.userData,P=C.dir*C.u;C.axis==="x"?(M.position.set(P,0,C.dir*2),M.rotation.y=C.dir*Math.PI/2):(M.position.set(-C.dir*2,0,P),M.rotation.y=C.dir>0?0:Math.PI)};return i.updaters.push(M=>{let C=m(S);A.forEach(P=>{let R=P.userData,U=R.max;!((R.axis==="x"?C.h:C.v)==="green")&&R.u<-9.2&&R.u>-40&&(U=Math.min(U,Math.max(0,(-9.6-R.u)*1.2))),A.forEach(H=>{let J=H.userData;if(H===P||J.axis!==R.axis||J.dir!==R.dir)return;let de=J.u-R.u;de>0&&de<25&&(U=Math.min(U,Math.max(0,(de-6)*1.5)))});let $=R.axis==="x"?[R.dir,0]:[0,R.dir],z=(H,J)=>{let de=H-P.position.x,fe=J-P.position.z,We=de*$[0]+fe*$[1],Ye=Math.abs(de*$[1]-fe*$[0]);We>0&&We<9&&Ye<1.6&&(U=Math.min(U,Math.max(0,(We-3.2)*1.5)))};i.playerPos&&z(i.playerPos.x,i.playerPos.z),T.forEach(H=>z(H.pos.x,H.pos.z)),R.v+=Math.max(-14*M,Math.min(5*M,U-R.v)),R.u+=R.v*M,R.u>125&&(R.u=-125),I(P)})}),i.dynamic.push(()=>A.map(M=>{let C=M.position.x,P=M.position.z,[R,U]=[1,2.25];return M.userData.axis==="x"?{x1:C-U,x2:C+U,z1:P-R,z2:P+R,owner:M}:{x1:C-R,x2:C+R,z1:P-U,z2:P+U,owner:M}})),i.spawn={x:-19,z:-9,rot:0},i}function hc(i,e,t,n,s,r={}){let a=i.scene;a.background=new ke(r.bg||1382171),a.add(new Ys(16774890,3814704,.35));let o=new $s(16774374,1.4);o.position.set(3,12,6),o.castShadow=!0,o.shadow.mapSize.set(2048,2048),o.shadow.bias=-4e-4,o.shadow.normalBias=.03,Object.assign(o.shadow.camera,{left:-12,right:12,top:12,bottom:-12}),a.add(o),(r.lamps||[[-e/4,-t/6],[e/4,-t/6],[0,t/4]]).forEach(([u,f])=>{let g=new is(r.lampColor||16771012,r.lampPower||14,11,1.6);g.position.set(u,2.9,f),a.add(g)}),Hn(e,t,n,0,0,0,a,r.floorRep||2);let c=3.2;te(e+.3,c,.3,s,0,c/2,-t/2-.15,a,!0,2),te(.3,c,t,s,-e/2-.15,c/2,0,a,!0,2),te(.3,c,t,s,e/2+.15,c/2,0,a,!0,2);let h=Ae(r.skirt||15921128,{roughness:.5});te(e,.12,.03,h,0,.06,-t/2+.015,a,!1),te(.03,.12,t,h,-e/2+.015,.06,0,a,!1),te(.03,.12,t,h,e/2-.015,.06,0,a,!1);let d=e/2-1.5;te(d,.6,.3,s,-e/4-.75,.3,t/2+.15,a,!0,2),te(d,.6,.3,s,e/4+.75,.3,t/2+.15,a,!0,2),i.solid(-e/4-.75,t/2+.15,d,.3),i.solid(e/4+.75,t/2+.15,d,.3),i.bounds={x1:-e/2,z1:-t/2,x2:e/2,z2:t/2+.6},te(2.2,.03,1.1,Pt("doormat",Tt.fabric("#5a3a2a",[3,2]),{roughness:1}),0,.015,t/2-.65,a,!1),i.interact(0,t/2-.65,"Go outside","exit",null,1.4),i.spawn={x:0,z:t/2-2,rot:Math.PI},i.camDist=8.5,i.camHeight=6.5}function my(i,e,t,n,s=1){let r=new Ct;r.position.set(e,t,n),r.scale.setScalar(s);let a=Ae(13208133,{roughness:.6});pt(.3,.3,.08,a,0,.04,0,r),pt(.32,.32,.08,Ae(4860439,{roughness:.8}),0,.12,0,r),pt(.34,.33,.02,Ae(15906340,{roughness:.4}),0,.17,0,r),pt(.34,.34,.02,Ae(6135354,{roughness:.6}),0,.19,0,r);let o=new Ve(new vi(.31,20,10,0,Math.PI*2,0,Math.PI/2),a);return o.position.y=.2,o.scale.y=.75,o.castShadow=!0,r.add(o),i.add(r),r}function gy(i,e,t,n,s=1){let r=new Ct;r.position.set(e,t,n),r.scale.setScalar(s),pt(.06,.09,.32,Ae(10207066),0,.16,0,r,10);let a=Ae(3107626,{roughness:1});return[[0,.4,0,.18],[.13,.35,.05,.13],[-.13,.35,0,.14],[0,.35,.13,.12],[0,.35,-.12,.12]].forEach(([o,l,c,h])=>fs(h,a,o,l,c,r,12)),i.add(r),r}function xy(i,e,t,n,s=1){let r=new Ct;r.position.set(e,t,n),r.scale.setScalar(s),fs(.3,Ae(9315108,{roughness:.45}),0,.06,0,r,20).scale.set(1.2,.22,.9),fs(.12,Ae(15785163,{roughness:.5}),.27,.06,0,r,12).scale.set(1,.4,1);let l=pt(.03,.03,.28,Ae(15920610),.38,.06,0,r,8);return l.rotation.z=Math.PI/2,i.add(r),r}var _y={hamburger:my,broccoli:gy,meat:xy};function Wf(){let i=new ps("home","home");hc(i,14,11,be.woodFloor(),be.plasterCream(),{bg:1775378,floorRep:2.5});let e=i.scene,t=be.woodDark();te(2.4,.45,3.4,t,-4.5,.22,-3.3,e,!0,1),te(2.2,.28,3.2,Ae(16052974,{roughness:1}),-4.5,.58,-3.3,e),te(2.24,.1,2.1,Pt("duvet",Tt.fabric("#34507a",[6,6]),{roughness:1}),-4.5,.76,-2.75,e),fs(.35,Ae(16777215,{roughness:1}),-4.5,.82,-4.5,e).scale.set(2,.35,.9),te(2.4,1.3,.12,t,-4.5,.65,-5.02,e,!0,1),te(.5,.5,.5,t,-6.2,.25,-4.7,e,!0,1);let s=pt(.12,.18,.25,Ae(15984584,{emissive:16767392,emissiveIntensity:.4}),-6.2,.75,-4.7,e);s.castShadow=!1,i.solid(-4.5,-3.3,2.4,3.4),i.solid(-6.2,-4.7,.5,.5),i.interact(-3,-1.2,"Sleep (next day)","sleep",null,1.6),i.bedPos={x:-4.5,z:-3.3};let r=Ae(15659507,{roughness:.25,metalness:.3});te(1.1,2.1,.9,r,5.6,1.05,-4.9,e),te(1.08,.02,.02,Ae(10066329),5.6,1.45,-4.44,e,!1),te(.05,.5,.05,be.chrome(),5.15,1.75,-4.42,e,!1),te(.05,.5,.05,be.chrome(),5.15,1.05,-4.42,e,!1),i.solid(5.6,-4.9,1.1,.9),i.interact(5.6,-3.6,"Fridge: eat something","fridge",null,1.4),te(3,.9,.7,Pt("cabinet",Tt.wood("#d8c7a8"),{roughness:.5}),3.3,.45,-5,e,!0,1),te(3.05,.06,.75,Ae(3092788,{roughness:.2}),3.3,.93,-5,e),pt(.18,.18,.02,be.chrome(),3.8,.97,-5,e),i.solid(3.3,-5,3,.7);let a=Pt("sofa",Tt.fabric("#6b6f75",[3,3]),{roughness:1});te(3,.45,1,a,.5,.3,.9,e,!0,1),te(3,.7,.25,a,.5,.7,1.35,e,!0,1),te(.25,.6,1,a,-.9,.5,.9,e,!0,1),te(.25,.6,1,a,1.9,.5,.9,e,!0,1),i.solid(.5,1,3.1,1.2),te(2.4,1.4,.06,Ae(789516,{roughness:.2}),.5,1.7,-5.28,e);let o=new Ve(new mn(2.3,1.3),new Ht({color:0,emissive:2250154,emissiveIntensity:1}));o.position.set(.5,1.7,-5.24),e.add(o),i.updaters.push((c,h)=>o.material.emissive.setHSL(h*.03%1,.5,.3+Math.sin(h*5)*.03)),te(2,.45,.45,t,.5,.22,-5.05,e,!0,1),i.solid(.5,-5.05,2,.45),te(3.4,.01,2.4,Pt("rug",Tt.fabric("#a57a52",[8,6]),{roughness:1}),.5,.005,-2,e,!1),i.interact(.5,-.4,"Watch TV (+mood)","tv",null,1.4);let l=te(1.1,2,.04,be.mirror(),6.97,1.3,1,e);l.rotation.y=Math.PI/2,te(.06,2.1,1.2,t,6.99,1.3,1,e,!1),i.interact(6,1,"Mirror: strike a pose","mirror",null,1.3),pt(.28,.22,.55,Ae(12084282,{roughness:.8}),-6.2,.28,4.5,e);for(let c=0;c<5;c++)fs(.3,be.leaves(),-6.2+Math.cos(c)*.15,.85+c*.12,4.5+Math.sin(c)*.15,e,10);return i.circles.push({x:-6.2,z:4.5,r:.35}),[[-2,"SUNSET"],[3.5,"MOUNTAINS"]].forEach(([c],h)=>{te(1.2,.8,.04,Ae(2760726),c,2.1,-5.48,e,!1);let d=new Ve(new mn(1.05,.65),Ae([13204298,5930394][h],{roughness:.6}));d.position.set(c,2.1,-5.455),e.add(d)}),i}function Xf(){let i=new ps("gym","gym");hc(i,18,13,be.rubber(),be.plasterGrey(),{bg:987154,floorRep:1,lampColor:15922943,lampPower:16,skirt:2236962,lamps:[[-5,-2],[0,-2],[5,-2],[-5,3],[5,3]]});let e=i.scene,t=te(13.5,2,.04,be.mirror(),0,1.4,-6.48,e,!1);t.castShadow=!1,te(13.7,.06,.08,be.metal(),0,2.43,-6.46,e,!1),te(13.7,.06,.08,be.metal(),0,.37,-6.46,e,!1);let n=Si("NO PAIN NO GAIN",5,.55,"#111214","#f2b705",'bold 64px Impact, "Arial Black", sans-serif',!0);n.position.set(0,2.85,-6.47),e.add(n),[-5,0,5].forEach(o=>{let l=te(3,.05,.25,Ae(16777215,{emissive:15922943,emissiveIntensity:2}),o,3.15,-2,e,!1);l.castShadow=!1});let s=be.metal(),r=o=>Si(o,1.6,.3,"#111214","#e6e6e6","bold 56px Arial, sans-serif");{let o=new Ct;o.position.set(-5.5,0,-3.5),e.add(o),[[-1.1,-.6],[1.1,-.6],[-1.1,.6],[1.1,.6]].forEach(([h,d])=>te(.09,2.6,.09,s,h,1.3,d,o)),te(2.4,.08,.08,s,0,2.6,-.6,o),te(2.4,.08,.08,s,0,2.6,.6,o),[-1.1,1.1].forEach(h=>te(.08,.08,1.3,s,h,2.6,0,o)),[-1.1,1.1].forEach(h=>te(.12,.06,.2,s,h,1.45,.1,o)),te(2.6,.03,1.6,Pt("platform",Tt.wood("#6d5236"),{roughness:.7}),0,.015,0,o,!1,1);let l=lu(2.2);l.position.set(0,1.5,.1),o.add(l),i.solid(-5.5,-3.5,2.4,1.3),i.squat={group:o,barbell:l};let c=r("SQUAT");c.position.set(0,2.85,.62),o.add(c),i.interact(-5.5,-1.8,"Squat (legs)","workout","squat")}{let o=new Ct;o.position.set(0,0,-3.3),e.add(o),te(.5,.1,1.9,Ae(1776413,{roughness:.5}),0,.5,.3,o),te(.08,.45,.08,s,0,.22,-.4,o),te(.08,.45,.08,s,0,.22,1,o),te(.5,.04,.08,s,0,.02,-.4,o),te(.5,.04,.08,s,0,.02,1,o),[-.55,.55].forEach(h=>te(.07,1.4,.07,s,h,.7,-.2,o));let l=lu(2.2);l.position.set(0,1.4,-.15),o.add(l),i.solid(0,-3.1,1.3,2.4),i.bench={group:o,barbell:l};let c=r("BENCH PRESS");c.position.set(0,1.75,-.25),o.add(c),i.interact(1.6,-1.6,"Bench press (chest)","workout","bench")}{let o=new Ct;o.position.set(5.5,0,-3.8),e.add(o),te(.1,3,.1,s,0,1.5,-.8,o),te(.1,.1,1.6,s,0,3,0,o),te(.6,.1,.6,Ae(1776413,{roughness:.5}),0,.5,.35,o),te(.08,.5,.08,s,0,.25,.35,o);let l=pt(.07,.07,.5,Ae(1776413,{roughness:.5}),0,.82,.8,o,12);l.rotation.z=Math.PI/2;let c=te(.015,1,.015,be.chrome(),0,2.5,.6,o,!1),h=pt(.02,.02,1.5,be.chrome(),0,2,.6,o,8);h.rotation.z=Math.PI/2;for(let u=0;u<8;u++)te(.45,.07,.25,Ae(2763309,{roughness:.4,metalness:.6}),0,.1+u*.075,-.55,o);i.solid(5.5,-3.8,1,2),i.lat={group:o,cable:c,handle:h};let d=r("LAT PULLDOWN");d.position.set(0,3.25,.1),o.add(d),i.interact(4,-2,"Lat pulldown (back)","workout","lat")}te(4,.08,.7,s,6,.8,3.5,e),te(4,.08,.7,s,6,.4,3.5,e),[-1.9,1.9].forEach(o=>te(.08,.85,.7,s,6+o,.42,3.5,e)),i.solid(6,3.5,4,.8);for(let o=0;o<6;o++){let l=lu(.45,.08+o*.012,!0);l.position.set(4.4+o*.64,.95,3.5),l.rotation.y=Math.PI/2,e.add(l)}pt(.03,.03,1.2,s,7.8,.6,-1,e,8);for(let o=0;o<3;o++){let l=pt(.25-o*.03,.25-o*.03,.05,Ae(1381653,{roughness:.6}),7.8,.5+o*.25,-1,e,24);l.rotation.x=Math.PI/2}i.circles.push({x:7.8,z:-1,r:.35}),te(.4,1.1,.4,Ae(14474460,{roughness:.3}),-8.3,.55,0,e),pt(.15,.15,.4,Ae(7320544,{transparent:!0,opacity:.7,roughness:.05}),-8.3,1.3,0,e,16),i.circles.push({x:-8.3,z:0,r:.35});let a=new Mi({shirtless:!0,shorts:8003359,skin:9262372,hair:789516,muscles:[90,95,90]});return a.root.position.set(-6,0,3.5),a.root.rotation.y=Math.PI/2,e.add(a.root),i.circles.push({x:-6,z:3.5,r:.5}),a.setPose("flex"),i.interact(-4.6,3.5,"Talk to your gym bro","bro",null,1.5),i.updaters.push(o=>a.update(o)),i}function lu(i,e=.225,t=!1){let n=new Ct,s=pt(.016,.016,i,be.chrome(),0,0,0,n,10);s.rotation.z=Math.PI/2;let r=Ae(1381653,{roughness:.6});return[-1,1].forEach(a=>{let o=t?i/2-.06:i/2-.25,l=pt(e,e,.06,r,a*o,0,0,n,28);if(l.rotation.z=Math.PI/2,!t){let c=pt(e*.85,e*.85,.05,r,a*(o-.07),0,0,n,28);c.rotation.z=Math.PI/2;let h=pt(.03,.03,.05,be.chrome(),a*(o-.13),0,0,n,12);h.rotation.z=Math.PI/2}}),n}function qf(){let i=new ps("shop","shop");hc(i,16,12,be.tiles(),be.plasterGreen(),{bg:1251354,floorRep:1,lampColor:16186367,lampPower:16});let e=i.scene;[["hamburger",-4.5,"BURGERS"],["broccoli",0,"VEGETABLES"],["meat",4.5,"BUTCHER"]].forEach(([s,r,a])=>{te(2.8,.95,1.1,Ae(16053490,{roughness:.35}),r,.475,-3.5,e),te(2.9,.05,1.2,Ae(2829617,{roughness:.2}),r,.97,-3.5,e),i.solid(r,-3.5,2.8,1.1);for(let l=-1;l<=1;l++)_y[s](e,r+l*.8,1,-3.5,.85);te(2.8,2.5,.5,Ae(14475234,{roughness:.5,metalness:.3}),r,1.25,-5.7,e);for(let l=0;l<3;l++){te(2.7,.04,.5,Ae(12172738,{metalness:.5,roughness:.4}),r,.55+l*.72,-5.45,e);for(let c=0;c<6;c++){let h=[11743533,14191674,2914928,14202186,3891076,15262420][(c+l)%6];te(.3,.38,.28,Ae(h,{roughness:.5}),r-1.1+c*.44,.77+l*.72,-5.4,e)}}let o=Si(a,2.2,.35,"#2e7d4f","#ffffff","bold 56px Arial, sans-serif");o.position.set(r,2.8,-5.44),e.add(o),i.interact(r,-2.2,"Buy","buy",s,1.4)}),te(3,.95,.9,Ae(3817544,{roughness:.4}),5,.475,2.5,e),te(3.05,.04,.95,Ae(1842204,{roughness:.2}),5,.97,2.5,e),te(.4,.3,.3,Ae(1842204,{roughness:.3}),5.8,1.13,2.5,e),i.solid(5,2.5,3,.9),i.solid(5,1.5,1,1);let n=new Mi({shirt:3046735,skin:15843965,hair:7031339});return n.root.position.set(5,0,1.5),e.add(n.root),i.updaters.push(s=>n.update(s)),[[-5.5,3],[-3.5,3]].forEach(([s,r],a)=>{te(1.6,.7,1.2,Pt("crate",Tt.wood("#a57b4f"),{roughness:.8}),s,.35,r,e,!0,1),i.solid(s,r,1.6,1.2);for(let o=0;o<12;o++)fs(.13,Ae(a?14709791:14202154,{roughness:.5}),s-.6+o%4*.4,.8,r-.35+Math.floor(o/4)*.35,e,12)}),i}function Yf(){let i=new ps("bank","bank");hc(i,16,12,be.marble(),be.plasterWhite(),{bg:1184276,floorRep:2,lampColor:16769720,lampPower:14});let e=i.scene,t=be.woodDark();te(9,1.1,.9,t,-1.5,.55,-3.2,e,!0,1),te(9.2,.06,1.1,be.marble(),-1.5,1.13,-3.2,e,!0,1),i.solid(-1.5,-3.2,9,.9);let n=Ae(13214026,{roughness:.3,metalness:1});for(let c=-2;c<=2;c++)te(.04,.9,.04,n,-1.5+c*2,1.6,-3.2,e);te(9,.04,.04,n,-1.5,2.05,-3.2,e);let s=new Ve(new mn(8.8,.9),new Ht({color:13624298,transparent:!0,opacity:.18,roughness:.05}));s.position.set(-1.5,1.6,-3.2),e.add(s);let r=new Mi({shirt:1911876,skin:16767916,hair:10124111});r.root.position.set(-3,0,-4.2),e.add(r.root),i.updaters.push(c=>r.update(c));let a=Si("INVESTMENTS",3.2,1.1,"#0b1a2e","#e9c46a","bold 72px Arial, sans-serif",!0);a.position.set(-3,2.5,-5.98),e.add(a),i.interact(-3,-1.8,"Invest (plane game)","plane",null,1.5),te(2.2,.06,1.1,t,3.5,.9,-3.2,e,!0,1),[[-1,-.45],[1,-.45],[-1,.45],[1,.45]].forEach(([c,h])=>te(.06,.88,.06,be.metal(),3.5+c,.44,-3.2+h,e));for(let c=0;c<4;c++)te(.34,.04+c*.02,.16,Ae(8364922,{roughness:.8}),3+c*.3,.95+c*.01,-3.2,e);i.solid(3.5,-3.2,2.2,1.1),i.interact(3.5,-1.8,"Work: count banknotes","work",null,1.5);let o=pt(1.5,1.5,.3,Ae(10396584,{roughness:.3,metalness:.9}),5.5,1.7,-5.9,e,40);o.rotation.x=Math.PI/2;let l=new Ve(new na(.45,.05,10,32),be.chrome());l.position.set(5.5,1.7,-5.7),e.add(l);for(let c=0;c<3;c++){let h=te(.9,.04,.04,be.chrome(),0,0,0,null,!1);h.rotation.z=c*Math.PI/3,l.add(h)}return i.updaters.push((c,h)=>{l.rotation.z=h*.3}),[[-6.5,2],[6.5,2]].forEach(([c,h])=>{pt(.35,.4,3.2,Ae(15854816,{roughness:.5}),c,1.6,h,e,24),i.circles.push({x:c,z:h,r:.42})}),i}var li=i=>document.getElementById(i),vy={money:"Money",stamina:"Energy",happiness:"Mood",mass:"Mass",legs:"Legs",chest:"Chest",back:"Back"},uc=i=>`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${i}</svg>`,dr={sound:uc('<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16 9a4 4 0 0 1 0 6"/><path d="M19 6a8 8 0 0 1 0 12"/>'),muted:uc('<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M17 9l5 6M22 9l-5 6"/>'),quality:uc('<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>'),help:uc('<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6V14"/><path d="M12 17.5v.01"/>')};function fr(i){return'<div class="effects">'+Object.entries(i).map(([e,t])=>`<span class="${t>=0?"up":"down"}">${vy[e]||e} ${t>0?"+":""}${t}</span>`).join("")+"</div>"}var dc=class{constructor(e){this.audio=e,this.panel=li("panel"),this.onEat=null,this.panelKeys=null}showHud(e){li("hud").classList.toggle("hidden",!e)}update(e){li("h-day").textContent=`Day ${e.totalDays-e.days+1} / ${e.totalDays}`,li("h-money").textContent=`$${Math.round(e.money)}`;let t=(s,r)=>{let a=Math.max(0,Math.min(100,r)),o=li("b-"+s);o.style.width=a+"%",(s==="stamina"||s==="happiness")&&(o.style.background=a<25?"var(--bad)":a<50?"#ffb13d":"var(--good)"),li("v-"+s).textContent=Math.round(r)};["stamina","happiness","legs","chest","back"].forEach(s=>t(s,e[s]));let n=li("inventory");n.innerHTML="",Object.entries(ai).forEach(([s,r],a)=>{let o=document.createElement("button");o.innerHTML=`<span class="name">${r.name}</span><b>${e.inventory[s]}</b> <small>[${a+1}]</small>`,o.title=`Eat: ${r.name}`,o.disabled=e.inventory[s]===0,o.onclick=()=>this.onEat&&this.onEat(s),n.appendChild(o)})}prompt(e){let t=li("prompt");if(!e){t.classList.add("hidden");return}t.innerHTML=`<kbd>E</kbd>${e}`,t.classList.remove("hidden")}toast(e,t=""){let n=document.createElement("div");n.className="toast "+t,n.textContent=e,li("toasts").appendChild(n),setTimeout(()=>n.remove(),2700)}dialog(e,t=[],n={}){this.panel.className=n.clear?"clear":"",this.panel.innerHTML=`<div class="box ${n.cls||""}">${e}<div class="btns"></div></div>`;let s=this.panel.querySelector(".btns"),r={};return t.forEach((a,o)=>{let l=document.createElement("button");l.className="btn "+(a.cls||""),l.innerHTML=a.label,l.onclick=()=>{this.audio.sfx("click"),a.keep||this.close(),a.cb&&a.cb()},s.appendChild(l),r[a.key||String(o+1)]=l}),this.panelKeys=r,this.panel.querySelector(".box")}open(e,t={}){return this.panel.className=t.clear?"clear":"",this.panel.innerHTML=`<div class="box ${t.cls||""}">${e}</div>`,this.panelKeys=null,this.panel.querySelector(".box")}close(){this.panel.className="hidden",this.panel.innerHTML="",this.panelKeys=null}isOpen(){return!this.panel.classList.contains("hidden")}handleKey(e){if(!this.panelKeys)return!1;let t=e==="Enter"?"1":e==="Escape"?"Escape":e,n=this.panelKeys[t];return n?(n.click(),!0):!1}fade(e,t=1400){let n=li("fade");return n.textContent=e||"",n.classList.add("on"),new Promise(s=>setTimeout(()=>{s(),setTimeout(()=>n.classList.remove("on"),150)},t))}};function Fa(i,e){return`<h2>${i}</h2><p>${e}</p>`}function fc(i){return i>2.4-.8?"3":i>2.4-1.6?"2":"1"}function $f(i,e){let t=[{n:"RED",c:"#ff4d4d",k:"1"},{n:"GREEN",c:"#3ecf6e",k:"2"},{n:"BLUE",c:"#3d8bff",k:"3"},{n:"YELLOW",c:"#f0d000",k:"4"}],n=[2.2,1.6,1.15][e],s=10,r=i.ui.open(Fa("Squat","Press the colour the word <b>says</b> (not the colour it is painted in) before time runs out.")+`<div class="info"><span id="mg-rep">Rep 0/${s}</span><span id="mg-good">Good 0</span></div>
     <div class="word" id="mg-word">Ready?</div>
     <div class="meter"><div class="fill" id="mg-time"></div></div>
     <div class="btns">${t.map(S=>`<button class="btn" data-k="${S.k}" style="background:${S.c};color:#111">${S.n}<small>[${S.k}]</small></button>`).join("")}</div>`,{clear:!0,cls:"mg"});r.querySelectorAll("[data-k]").forEach(S=>{S.onclick=()=>p.key(S.dataset.k)});let a=r.querySelector("#mg-word"),o=2.4,l=0,c=0,h=null,d=0,u=0,f=-1,g=!1;function v(){if(l>=s){g=!0,i.done(c/s);return}l++,h=t[Math.floor(Math.random()*t.length)];let S;do S=t[Math.floor(Math.random()*t.length)];while(S===h&&Math.random()<.8);a.textContent=h.n,a.style.color=S.c,d=n,r.querySelector("#mg-rep").textContent=`Rep ${l}/${s}`}function m(S){h=null,u=.75,S?(c++,f=0,i.audio.sfx("good"),a.textContent="GOOD REP",a.style.color="#3ecf6e"):(i.audio.sfx("bad"),a.textContent="MISSED",r.classList.remove("shake"),r.offsetWidth,r.classList.add("shake")),r.querySelector("#mg-good").textContent=`Good ${c}`}let p={update(S){if(!g){if(f>=0?(f+=S/.75,i.char.setPose("squat",Math.sin(Math.min(1,f)*Math.PI)),f>=1&&(f=-1)):i.char.setPose("squat",0),o>0){o-=S,a.textContent=fc(o),a.style.color="#fff",o<=0&&v();return}h?(d-=S,r.querySelector("#mg-time").style.width=d/n*100+"%",d<=0&&m(!1)):(u-=S)<=0&&v()}},key(S){if(!h||g)return;let T=t.find(y=>y.k===S);T&&m(T===h)}};return p}function Zf(i,e){let t=[.24,.17,.11][e],n=[2.3,3,3.8][e],s=8,r=3,a=i.ui.open(Fa("Bench press","Press <b>SPACE</b> (or the button) when the marker is inside the green zone.")+`<div class="info"><span id="mg-rep">Rep 0/${s}</span><span id="mg-miss">Misses 0/${r}</span></div>
     <div class="word" id="mg-word">Ready?</div>
     <div class="meter"><div class="zone" id="mg-zone"></div><div class="needle" id="mg-needle"></div></div>
     <div class="btns"><button class="btn primary" id="mg-push">PUSH <small>[Space]</small></button></div>`,{clear:!0,cls:"mg"});a.querySelector("#mg-push").onclick=()=>w.key(" ");let o=a.querySelector("#mg-word"),l=a.querySelector("#mg-zone"),c=a.querySelector("#mg-needle"),h=2.4,d=0,u=0,f=.5,g=0,v=0,m=0,p=-1,S=!1,T=0;function y(){f=t/2+Math.random()*(1-t),l.style.left=(f-t/2)*100+"%",l.style.width=t*100+"%"}y();function b(){S=!0,setTimeout(()=>i.done(v/s),500)}let w={update(L){if(p>=0?(p+=L/.9,i.char.setPose("bench",1-Math.sin(Math.min(1,p)*Math.PI)),p>=1&&(p=-1)):i.char.setPose("bench",S&&v<s?.1:1),!S){if(h>0){h-=L,o.textContent=fc(h),h<=0&&(o.textContent="GO");return}T-=L,d+=L*n*(1+g*.06),u=(Math.sin(d)+1)/2,c.style.left=u*100+"%"}},key(L){S||h>0||T>0||L!==" "&&L!=="Enter"||(T=.35,Math.abs(u-f)<=t/2?(v++,g++,p=0,i.audio.sfx("good"),o.textContent="UP",y()):(m++,g++,i.audio.sfx("bad"),o.textContent="MISSED",a.classList.remove("shake"),a.offsetWidth,a.classList.add("shake")),a.querySelector("#mg-rep").textContent=`Rep ${v}/${s}`,a.querySelector("#mg-miss").textContent=`Misses ${m}/${r}`,(v>=s||m>=r)&&b())}};return w}function Jf(i,e){let t=[.15,.115,.09][e],n=15,s=8,r=i.ui.open(Fa("Lat pulldown","Alternate <b>Left</b> and <b>Right</b> (or A and D) as fast as you can to pull the bar down.")+`<div class="info"><span id="mg-rep">Rep 0/${s}</span><span id="mg-timer">${n}s</span></div>
     <div class="word" id="mg-word">Ready?</div>
     <div class="meter"><div class="fill" id="mg-fill"></div></div>
     <div class="btns"><button class="btn blue" data-k="ArrowLeft">&larr; Left</button><button class="btn blue" data-k="ArrowRight">Right &rarr;</button></div>`,{clear:!0,cls:"mg"});r.querySelectorAll("[data-k]").forEach(v=>{v.onclick=()=>g.key(v.dataset.k)});let a=r.querySelector("#mg-word"),o=2.4,l=n,c=null,h=0,d=0,u=0,f=!1,g={update(v){if(d+=(h-d)*Math.min(1,v*12),i.char.setPose("lat",d),f){h=Math.max(0,h-v);return}if(o>0){o-=v,a.textContent=fc(o),o<=0&&(a.textContent="PULL");return}l-=v,h=Math.max(0,h-v*.35),r.querySelector("#mg-timer").textContent=Math.ceil(l)+"s",r.querySelector("#mg-fill").style.width=h*100+"%",(l<=0||u>=s)&&(f=!0,a.textContent=u>=s?"SET COMPLETE":"TIME",setTimeout(()=>i.done(Math.min(1,u/s)),700))},key(v){if(f||o>0)return;let m=v==="ArrowLeft"||v==="a"||v==="A"?"L":v==="ArrowRight"||v==="d"||v==="D"?"R":null;!m||m===c||(c=m,h+=t,h>=1&&(h=0,u++,i.audio.sfx("good"),a.textContent=`REP ${u}`,r.querySelector("#mg-rep").textContent=`Rep ${u}/${s}`))}};return g}function Kf(i){let e={ArrowUp:"\u2191",ArrowDown:"\u2193",ArrowLeft:"\u2190",ArrowRight:"\u2192"},t={w:"ArrowUp",s:"ArrowDown",a:"ArrowLeft",d:"ArrowRight"},n=Object.keys(e),s=15,r=i.ui.open(Fa("Count the banknotes","Press the arrow shown (or WASD). Every correct answer pays <b>$2</b>.")+`<div class="info"><span id="mg-earn">$0</span><span id="mg-timer">${s}s</span></div>
     <div class="arrows" id="mg-arrow">...</div>
     <div class="btns">${n.map(v=>`<button class="btn" data-k="${v}">${e[v]}</button>`).join("")}</div>`,{clear:!0,cls:"mg"});r.querySelectorAll("[data-k]").forEach(v=>{v.onclick=()=>g.key(v.dataset.k)});let a=r.querySelector("#mg-arrow"),o=2.4,l=s,c=null,h=0,d=0,u=!1,f=()=>{c=n[Math.floor(Math.random()*4)],a.textContent=e[c]},g={update(v){if(i.char.setPose("count",o>0||u?0:1),!u){if(o>0){o-=v,a.textContent=fc(o),o<=0&&f();return}d-=v,l-=v,r.querySelector("#mg-timer").textContent=Math.ceil(l)+"s",l<=0&&(u=!0,a.textContent="TIME",setTimeout(()=>i.done(h*2),500))}},key(v){var m;u||o>0||d>0||(v=t[v]||t[(m=v.toLowerCase)==null?void 0:m.call(v)]||v,e[v]&&(v===c?(h++,i.audio.sfx("coin"),r.querySelector("#mg-earn").textContent="$"+h*2,f()):(i.audio.sfx("bad"),d=.5,r.classList.remove("shake"),r.offsetWidth,r.classList.add("shake"))))}};return g}function jf(i,e){let t=Math.random(),n=Math.min(25,Math.max(1,.96/(1-t))),s=i.ui.open(Fa("Investment",`You bet <b>$${e}</b>. Cash out before the plane goes down.`)+`<canvas id="mg-cv" width="520" height="220"></canvas>
     <div class="word" id="mg-mult">1.00x</div>
     <div class="btns"><button class="btn good" id="mg-cash">CASH OUT <small>[Space]</small></button></div>`,{cls:"mg"});s.querySelector("#mg-cash").onclick=()=>g.key(" ");let r=s.querySelector("#mg-cv"),a=r.getContext("2d"),o=s.querySelector("#mg-mult"),l=-.6,c=1,h=!1,d=[];function u(v){a.clearRect(0,0,r.width,r.height),a.strokeStyle="rgba(255,255,255,.08)";for(let b=1;b<5;b++)a.beginPath(),a.moveTo(0,b*44),a.lineTo(r.width,b*44),a.stroke();let m=Math.max(6,l+1),p=Math.max(2,c*1.2),S=b=>20+b/m*(r.width-60),T=b=>r.height-20-(b-1)/(p-1)*(r.height-50);a.strokeStyle=v?"#ff5a5a":"#f0b400",a.lineWidth=4,a.beginPath(),d.forEach(([b,w],L)=>L?a.lineTo(S(b),T(w)):a.moveTo(S(b),T(w))),a.stroke();let y=d[d.length-1]||[0,1];if(a.save(),a.translate(S(y[0]),T(y[1])),v){a.fillStyle="#ff5a5a",a.beginPath();for(let b=0;b<16;b++){let w=b/16*Math.PI*2,L=b%2?7:16;a.lineTo(Math.cos(w)*L,Math.sin(w)*L)}a.fill()}else a.rotate(-.35),a.fillStyle="#f4f6fb",a.beginPath(),a.ellipse(0,0,18,4,0,0,Math.PI*2),a.moveTo(-2,0),a.lineTo(-10,-13),a.lineTo(-5,-13),a.lineTo(6,0),a.moveTo(-2,0),a.lineTo(-10,13),a.lineTo(-5,13),a.lineTo(6,0),a.moveTo(-14,0),a.lineTo(-19,-8),a.lineTo(-16,-8),a.lineTo(-10,0),a.fill();a.restore()}function f(v){if(h=!0,v){let m=Math.round(e*c);i.audio.sfx("buy"),o.innerHTML=`Cashed out <b>$${m}</b> (${c.toFixed(2)}x)`,setTimeout(()=>i.done(m),1300)}else i.audio.sfx("crash"),o.innerHTML=`Crashed at ${n.toFixed(2)}x`,u(!0),setTimeout(()=>i.done(0),1500);s.querySelector("#mg-cash").disabled=!0}let g={update(v){if(!h&&(l+=v,!(l<0))){if(c=Math.exp(.16*l),d.push([l,c]),c>=n){c=n,f(!1);return}o.textContent=c.toFixed(2)+"x",u(!1)}},key(v){h||l<0||v!==" "&&v!=="Enter"||f(!0)}};return g}var pc=20,pu="gymlife3d.save",Qf="gymlife3d.scores",mu="gymlife3d.quality",op="gymlife3d.radio",hi={get(i){try{return JSON.parse(localStorage.getItem(i))}catch{return null}},set(i,e){try{localStorage.setItem(i,JSON.stringify(e))}catch{}},del(i){try{localStorage.removeItem(i)}catch{}}};function yy(){try{let i=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(i.getContext("webgl2")||i.getContext("webgl")))}catch{return!1}}if(!yy())throw document.body.innerHTML='<div style="padding:40px;font-family:sans-serif;color:#fff">Your browser does not support WebGL. Try updating it or enabling hardware acceleration.</div>',new Error("WebGL not available");var gu=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,gr=["low","medium","high"],dn=hi.get(mu);gr.includes(dn)||(dn=gu?"low":"high");var yn=new Vl({antialias:!0,powerPreference:"high-performance"});yn.outputColorSpace=kt;yn.toneMapping=as;yn.toneMappingExposure=.6;yn.shadowMap.type=ss;document.getElementById("app").appendChild(yn.domElement);var _n=new en(50,1,.1,1200),xr=new $l(yn,new Gt(1,1,{type:Qt,samples:4})),lp=new Zl(new Bn,_n),_c=new La(new Bn,_n,1,1);_c.blendIntensity=.85;_c.updateGtaoMaterial({radius:.6,distanceExponent:1.5,thickness:1.5,scale:1.2,samples:12});xr.addPass(lp);xr.addPass(_c);xr.addPass(new jl);function xu(){let i=window.devicePixelRatio||1;yn.setPixelRatio(dn==="high"?Math.min(i,2):dn==="medium"?Math.min(i,1.5):Math.min(i,1)*.85),yn.shadowMap.enabled=dn!=="low",Object.values(vn).forEach(e=>e&&e.scene.traverse(t=>{t.material&&(t.material.needsUpdate=!0)})),document.getElementById("btn-quality").innerHTML=dr.quality+`<span>${dn[0].toUpperCase()}</span>`,cp()}function cp(){let i=window.innerWidth,e=window.innerHeight;yn.setSize(i,e),xr.setPixelRatio(yn.getPixelRatio()),xr.setSize(i,e),_n.aspect=i/e,_n.updateProjectionMatrix()}window.addEventListener("resize",cp);var lt=new nc,Qe=new dc(lt),vn={city:Hf(),home:null,gym:null,shop:null,bank:null},My={home:Wf,gym:Xf,shop:qf,bank:Yf},hp=new nr(yn),Yi=new sr;Yi.scale.setScalar(900);Yi.material.uniforms.turbidity.value=2.2;Yi.material.uniforms.rayleigh.value=2.2;Yi.material.uniforms.mieCoefficient.value=.004;Yi.material.uniforms.mieDirectionalG.value=.82;Yi.material.uniforms.sunPosition.value.copy(vn.city.sunDir);vn.city.scene.add(Yi);{let i=new Bn,e=new sr;e.scale.setScalar(900),e.material.uniforms.turbidity.value=2.2,e.material.uniforms.rayleigh.value=2.2,e.material.uniforms.sunPosition.value.copy(vn.city.sunDir),i.add(e),vn.city.scene.environment=hp.fromScene(i,.02,1,2e3).texture,vn.city.scene.environmentIntensity=.22}var Sy=hp.fromScene(new Xl,.04).texture;function up(i){return i.playerPos=Nt,i!==vn.city&&(i.scene.environment=Sy,i.scene.environmentIntensity=.35),i}var by=i=>vn[i]||(vn[i]=up(My[i]())),Ze=null,Mt=vn.city,et="title",bi=null,uu=-1,du=-1,pr=Math.max(0,ds.findIndex(i=>i.id===hi.get(op))),_u=i=>i.name==="gym"?ds[pr].id:i.music,Ut=new Mi({shirtless:!0,shorts:1776930}),Nt=new F,fn=0,ms=0;Mt.scene.add(Ut.root);up(vn.city);var ot={yaw:.6,pitch:.42,zoom:1,target:new F,fixed:null};xu();var An=new Set,mr={x:0,y:0};window.addEventListener("keydown",i=>{if(lt.init(),i.repeat&&et!=="play")return;let e=i.key;if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e)&&i.preventDefault(),et==="minigame"&&bi){bi.key(e);return}if(Qe.isOpen()){Qe.handleKey(e);return}An.add(e.toLowerCase()),et==="play"&&(e==="e"||e==="E"||e==="Enter"||e===" "?mp():e==="m"||e==="M"?dp():e==="r"||e==="R"?Ey():e==="g"||e==="G"?fp():e==="h"||e==="H"?Ep():(e==="1"||e==="2"||e==="3")&&Mu(Object.keys(ai)[Number(e)-1]))});window.addEventListener("keyup",i=>An.delete(i.key.toLowerCase()));window.addEventListener("blur",()=>An.clear());window.addEventListener("pointerdown",()=>lt.init());var ci=null;yn.domElement.addEventListener("pointerdown",i=>{ci={x:i.clientX,y:i.clientY,id:i.pointerId}});window.addEventListener("pointermove",i=>{!ci||ci.id!==i.pointerId||(ot.yaw-=(i.clientX-ci.x)*.006,ot.pitch=Math.max(.12,Math.min(1.25,ot.pitch+(i.clientY-ci.y)*.004)),ci.x=i.clientX,ci.y=i.clientY)});window.addEventListener("pointerup",i=>{ci&&ci.id===i.pointerId&&(ci=null)});yn.domElement.addEventListener("wheel",i=>{ot.zoom=Math.max(.55,Math.min(1.7,ot.zoom+Math.sign(i.deltaY)*.08))},{passive:!0});if(gu){document.getElementById("touch").classList.remove("hidden");let i=document.getElementById("stick"),e=document.getElementById("knob"),t=null,n=r=>{let a=i.getBoundingClientRect(),o=r.clientX-(a.left+a.width/2),l=r.clientY-(a.top+a.height/2),c=Math.hypot(o,l),h=a.width/2;c>h&&(o=o/c*h,l=l/c*h),e.style.transform=`translate(${o}px, ${l}px)`,mr.x=o/h,mr.y=l/h};i.addEventListener("pointerdown",r=>{t=r.pointerId,i.setPointerCapture(t),n(r),r.stopPropagation()}),i.addEventListener("pointermove",r=>{r.pointerId===t&&n(r)});let s=()=>{t=null,mr.x=mr.y=0,e.style.transform=""};i.addEventListener("pointerup",s),i.addEventListener("pointercancel",s),document.getElementById("btn-action").addEventListener("click",()=>{lt.init(),et==="play"&&mp()})}document.getElementById("btn-mute").innerHTML=dr.sound;document.getElementById("btn-help").innerHTML=dr.help;document.getElementById("btn-mute").onclick=dp;document.getElementById("btn-quality").onclick=fp;document.getElementById("btn-help").onclick=()=>et==="play"&&Ep();Qe.onEat=i=>et==="play"&&Mu(i);function dp(){lt.init();let i=lt.toggleMute();document.getElementById("btn-mute").innerHTML=i?dr.muted:dr.sound}function fp(){dn=gr[(gr.indexOf(dn)+1)%gr.length],hi.set(mu,dn),xu(),Qe.toast(`Graphics quality: ${dn}`)}function vu(i,e){Mt.scene.remove(Ut.root),Mt=i==="city"?vn.city:by(i),Mt.scene.add(Ut.root);let t=e||Mt.spawn;Nt.set(t.x,0,t.z),fn=t.rot,ot.yaw=fn+Math.PI,ot.pitch=.5,ot.snap=!0,Ut.setPose("idle"),lt.play(_u(Mt)),Mt.name==="gym"&&setTimeout(()=>Qe.toast(`Gym radio: ${ds[pr].name} (press R to switch)`),600)}function Ey(){if(Mt.name!=="gym"){Qe.toast("The gym radio only plays inside the gym.");return}pr=(pr+1)%ds.length,hi.set(op,ds[pr].id),lt.sfx("radio"),lt.play(_u(Mt)),Qe.toast(`Now playing: ${ds[pr].name}`,"good")}async function yu(i,e){et="busy",Qe.prompt(null),lt.sfx("door"),await Qe.fade("",450),vu(i,e),et="play"}function pp(){let i=null,e=1/0;for(let t of Mt.interactions){let n=Math.hypot(Nt.x-t.x,Nt.z-t.z);n<t.radius&&n<e&&(e=n,i=t)}return i}function mp(){let i=pp();if(i)switch(An.clear(),i.action){case"enter":yu(i.data);break;case"exit":Ty();break;case"sleep":xp();break;case"fridge":Ay();break;case"tv":Cy();break;case"mirror":_p();break;case"buy":Py(i.data);break;case"workout":Iy(i.data);break;case"work":Sp();break;case"plane":Ly();break;case"bro":Ry();break;default:break}}var wy={home:[-19,-10.6],gym:[19,-10.6],shop:[-19,10.6],bank:[19,10.6]};async function Ty(){let i=Mt.name,[e,t]=wy[i];await yu("city",{x:e,z:t,rot:t<0?0:Math.PI}),ot.yaw=fn,Math.random()<.45&&setTimeout(gp,350)}function gp(){if(et!=="play")return;let i=Ze.randomEncounter();et="busy",lt.sfx("event"),Qe.dialog(`<h2>${i.title}</h2><p>${i.text}</p>`,[{label:"Yes",cls:"good",cb:()=>ep(i,i.accept)},{label:"No",cls:"bad",cb:()=>ep(i,i.deny)}])}function ep(i,e){Ze.apply(e),Qe.dialog(`<h2>${i.title}</h2><p>Here's how it went:</p>${fr(e)}`,[{label:"Ok",cls:"primary",cb:()=>{et="play",_r()}}])}async function xp(){et="busy",lt.sfx("sleep"),Ze.sleep();let i=Ze.totalDays-Ze.days+1;Ze.days>0&&hi.set(pu,Dy()),Ut.setPose("sleep");let e=Mt.bedPos;Nt.set(e.x,0,e.z-.9),fn=0,await Qe.fade(Ze.days>0?`Day ${i}`:"",1800),Ut.setPose("idle"),Nt.set(-3,0,-1.2),et="play",_r()||Qe.toast(`Good morning! Energy fully restored. Days left: ${Ze.days}`,"good")}function Ay(){et="busy";let i=Object.entries(ai).map(([e,t])=>({label:`${t.name} (${Ze.inventory[e]})`,cls:Ze.inventory[e]?"":"disabled",cb:()=>{et="play",Mu(e)}}));i.push({label:"Close",key:"Escape",cb:()=>{et="play"}}),Qe.dialog("<h2>Fridge</h2><p>What do you want to eat? You can also eat anywhere with the 1, 2 and 3 keys.</p>",i)}function Mu(i){if(!Ze.eat(i)){Qe.toast(`You have no ${ai[i].name.toLowerCase()} left. Buy some at the supermarket.`,"bad"),lt.sfx("bad");return}let e=ai[i];lt.sfx("eat"),Qe.toast(`You ate: ${e.name}`,"good"),_r()}var tp=["Never skip leg day, bro. Leg day is sacred.","Protein with every meal, bro. Steak is your friend.","No sleep, no gains. Get your rest, bro.","Heavy weight means bigger gains, but only if you finish your reps.","Feeling down? Watch a bit of TV, then get back under the bar.","Out of cash? Go count banknotes at the bank, bro.","Ice cream once in a while is fine. The guy selling steroids is not."];function Ry(){let i=Ze.totalDays-Ze.days;et="busy",lt.shout("bro");let e=du!==i;e&&(du=i,Ze.apply({happiness:5})),Qe.dialog(`<h2>Gym bro</h2><p>${tp[Math.floor(Math.random()*tp.length)]}</p>
    ${e?fr({happiness:5}):""}`,[{label:"We're gonna make it",cls:"primary",cb:()=>{et="play"}}])}function Cy(){let i=Ze.totalDays-Ze.days;if(uu===i){Qe.toast("You already watched TV today. Go train!","bad");return}uu=i,Ze.apply({happiness:10}),lt.sfx("good"),Qe.toast("A good episode of your favourite show: +10 mood","good")}function _p(){et="busy",fn=ot.yaw,Ut.setPose("flex"),lt.sfx("levelup");let i=Math.round(Ze.mass);Qe.dialog(`<h2>Looking good</h2><p>Total mass: <b>${i}</b> / 300</p>
    <p>Legs ${Math.round(Ze.legs)} \xB7 Chest ${Math.round(Ze.chest)} \xB7 Back ${Math.round(Ze.back)}</p>
    <p>Get every muscle group to 100 to win.</p>`,[{label:"Ok",cls:"primary",cb:()=>{Ut.setPose("idle"),et="play"}}],{clear:!0})}function Py(i){let e=ai[i];et="busy";let t=n=>{let s=0;for(let r=0;r<n;r++)Ze.buy(i)&&s++;s?(lt.sfx("buy"),Qe.toast(`Bought ${s} x ${e.name}`,"good")):(lt.sfx("bad"),Qe.toast("Not enough money. Go to the bank.","bad")),et="play"};Qe.dialog(`<h2>${e.name}: $${e.cost}</h2>
    ${fr({stamina:e.stamina,happiness:e.happiness,mass:e.mass})}
    <p>You have $${Math.round(Ze.money)} \xB7 In the fridge: ${Ze.inventory[i]}</p>`,[{label:"Buy 1",cls:"primary",cb:()=>t(1)},{label:"Buy 3",cb:()=>t(3)},{label:"Cancel",key:"Escape",cb:()=>{et="play"}}])}var vp={squat:{group:"legs",name:"Squat",game:$f},bench:{group:"chest",name:"Bench press",game:Zf},lat:{group:"back",name:"Lat pulldown",game:Jf}};function Iy(i){if(!Ze.canWorkout()){lt.sfx("bad"),Qe.toast(`Too tired. You need ${lr} energy: eat something or sleep.`,"bad");return}et="busy";let e=vp[i];Qe.dialog(`<h2>${e.name}</h2><p>Pick the load. Heavier is harder, but the gains are bigger.</p>
    <p style="color:var(--muted)">Cost: ${lr} energy</p>`,[{label:"Light<small>x0.7 gains</small>",cb:()=>gc(i,0)},{label:"Medium<small>x1 gains</small>",cls:"primary",cb:()=>gc(i,1)},{label:"Heavy<small>x1.4 gains</small>",cls:"bad",cb:()=>gc(i,2)},{label:"Cancel",key:"Escape",cb:()=>{et="play"}}])}var xc={pos:new F,heading:0};function yp(i,e,t,n){xc.pos.copy(Nt),xc.heading=fn,i(),ot.fixed={pos:e,look:t},Mt.interactions.forEach(s=>{s.marker.visible=!1}),et="minigame",Qe.prompt(null),n&&lt.play(n)}function Mp(){bi=null,ot.fixed=null,Mt.interactions.forEach(i=>{i.marker.visible=!0}),Nt.copy(xc.pos),fn=xc.heading,Ut.setPose("idle"),lt.play(_u(Mt))}function gc(i,e){let t=Mt,n=vp[i],s=[.7,1,1.4][e],r=()=>{},a=(h,d,u)=>new F(h,d,u),o,l;yp(()=>{if(i==="squat"){let{group:h,barbell:d}=t.squat;Nt.set(h.position.x,0,h.position.z),fn=0,Ut.spine.add(d),d.position.set(0,.52,-.14),r=()=>{h.add(d),d.position.set(0,1.5,0)},o=a(h.position.x+3.2,2.2,h.position.z+4.2),l=a(h.position.x,1,h.position.z)}else if(i==="bench"){let{group:h,barbell:d}=t.bench;Nt.set(h.position.x,0,h.position.z+.25),fn=0;let u=d.position.clone();t.updaters.push(t.benchUpd=()=>{let f=Ut.poseT;d.position.set(0,.92+f*.55,-.05)}),r=()=>{t.updaters.splice(t.updaters.indexOf(t.benchUpd),1),d.position.copy(u)},o=a(h.position.x+3.4,2.6,h.position.z+2.6),l=a(h.position.x,.8,h.position.z)}else{let{group:h,handle:d,cable:u}=t.lat;Nt.set(h.position.x,0,h.position.z+.35),fn=0,t.updaters.push(t.latUpd=()=>{let f=Ut.poseT;d.position.y=2.25-f*.75,u.scale.y=3-d.position.y,u.position.y=(3+d.position.y)/2}),r=()=>{t.updaters.splice(t.updaters.indexOf(t.latUpd),1),d.position.y=2,u.scale.y=1,u.position.y=2.5},o=a(h.position.x-3.2,2.4,h.position.z+4),l=a(h.position.x,1.3,h.position.z)}},o||new F,l||new F,null),lt.sfx("airhorn"),lt.shout("start"),ot.fixed={pos:o,look:l},bi=n.game({ui:Qe,audio:lt,char:Ut,done:h=>{r(),Mp();let d=Math.round((4+h*14)*s),u=Math.round(Ze[n.group]);Ze.apply({[n.group]:d,stamina:-lr,happiness:h>=.5?4:-4});let f={[n.group]:Math.round(Ze[n.group])-u,stamina:-lr,happiness:h>=.5?4:-4};lt.sfx(h>=.5?"levelup":"bad"),h>=.8?(lt.sfx("airhorn"),lt.shout("great")):h<.5&&lt.shout("bad"),et="busy";let g=Math.round(h*100);Qe.dialog(`<h2>${n.name}: ${g}%</h2>
        <p>${g>=80?"Monster session.":g>=50?"Solid workout.":"You can do better than that."}</p>${fr(f)}`,[{label:"Continue",cls:"primary",cb:()=>{et="play",_r()}}])}},e)}function Sp(){if(Ze.stamina<pc){lt.sfx("bad"),Qe.toast(`Too tired to work (you need ${pc} energy).`,"bad");return}let i=(e,t,n)=>new F(e,t,n);yp(()=>{Nt.set(3.5,0,-4.1),fn=0},i(5.5,2.4,-.5),i(3.5,1,-3.6),null),bi=Kf({ui:Qe,audio:lt,char:Ut,done:e=>{Mp(),Ze.apply({money:e,stamina:-pc}),lt.sfx("coin"),et="busy",Qe.dialog(`<h2>Shift over</h2>${fr({money:e,stamina:-pc})}`,[{label:"Ok",cls:"primary",cb:()=>{et="play",_r()}}])}})}function Ly(){et="busy";let i=Math.floor(Ze.money),e=[10,25,50].filter(n=>n<=i),t=e.map(n=>({label:`$${n}`,cls:"primary",cb:()=>fu(n)}));i>0&&!e.includes(i)&&t.push({label:`All in ($${i})`,cls:"bad",cb:()=>fu(i)}),t.push({label:"Cancel",key:"Escape",cb:()=>{et="play"}}),Qe.dialog(`<h2>High-flying investment</h2>
    <p>Place a bet: the multiplier grows while the plane climbs. Cash out before it crashes or you lose it all.</p>
    ${i<=0?'<p style="color:var(--bad)">You have no money to bet. Try working at the desk.</p>':""}`,t)}function fu(i){Ze.apply({money:-i}),et="minigame",Qe.prompt(null),bi=jf({ui:Qe,audio:lt,char:Ut,done:e=>{bi=null,Qe.close(),Ze.apply({money:e}),et="play",Qe.toast(e>i?`Net profit: +$${e-i}`:e>0?`Got back $${e}`:`Lost $${i}`,e>i?"good":"bad"),_r()}},i)}function _r(){if(!Ze||et==="end")return!0;if(Ze.isWin())return np(!0),!0;let i=Ze.gameOverReason();return i?(np(!1,i),!0):!1}function np(i,e){et="end",hi.del(pu),Qe.prompt(null);let t=Ze.totalDays-Ze.days+(i?1:0),n="";if(i){let s=hi.get(Qf)||[];s.push({days:t,diff:tc[Ze.difficulty].label,date:new Date().toLocaleDateString("en-GB")}),s.sort((r,a)=>r.days-a.days),hi.set(Qf,s.slice(0,5)),n='<div class="scores"><b>Best results</b><br>'+s.slice(0,5).map((r,a)=>`${a+1}. ${r.days} days (${r.diff}), ${r.date}`).join("<br>")+"</div>"}lt.play(i?"win":"gameover"),Ut.setPose(i?"flex":"idle"),fn=ot.yaw+Math.PI,setTimeout(()=>{Qe.dialog(i?`<h1 class="title">YOU WIN</h1><p>You became a real bodybuilder in <b>${t}</b> days.</p>${n}`:`<h1 class="title">GAME OVER</h1><p>${e}</p>
         <p>Legs ${Math.round(Ze.legs)} \xB7 Chest ${Math.round(Ze.chest)} \xB7 Back ${Math.round(Ze.back)}</p>`,[{label:"Main menu",cls:"primary",cb:wp}])},i?600:300)}function Dy(){let{listeners:i,...e}=Ze;return e}function ip(i,e=null){Ze=new ec(i),e&&Object.assign(Ze,e,{listeners:Ze.listeners}),Ze.onChange(t=>{Qe.update(t),Ut.setMuscles(t.legs,t.chest,t.back)}),Ze.emit(),uu=-1,du=-1,Qe.showHud(!0),vu("home"),et="play",Qe.toast("Goal: get legs, chest and back to 100","good"),gu||setTimeout(()=>Qe.toast("Press H to see the controls"),1500)}function bp(){return`<div class="controls">
    <kbd>WASD / Arrows</kbd><span>Move (hold Shift to run)</span>
    <kbd>E / Space</kbd><span>Interact</span>
    <kbd>Mouse drag</kbd><span>Rotate the camera, wheel to zoom</span>
    <kbd>1 2 3</kbd><span>Eat from your inventory</span>
    <kbd>M</kbd><span>Music on/off</span>
    <kbd>R</kbd><span>Switch the gym radio station</span>
    <kbd>G</kbd><span>Graphics quality (low / medium / high)</span>
  </div>`}function Ep(){et="busy",Qe.dialog(`<h2>Controls</h2>${bp()}
    <p>Home: sleep, eat, TV \xB7 Gym: train \xB7 Supermarket: buy food \xB7 Bank: work or invest</p>
    <p>It's game over if energy or mood drop to 0, or if you run out of days.</p>`,[{label:"Ok",cls:"primary",cb:()=>{et="play"}}])}function wp(){et="title",Qe.showHud(!1),Qe.prompt(null),Mt!==vn.city&&vu("city"),Nt.set(-19,0,-10.4),lt.play("title");let i=hi.get(pu),e=Object.entries(tc).map(([t,n],s)=>({label:`${n.label}<small>${n.days} days</small>`,cls:s===1?"primary":"",cb:()=>{lt.init(),ip(t)}}));i&&e.unshift({label:`Continue<small>day ${i.totalDays-i.days+1}</small>`,cls:"good",cb:()=>{lt.init(),ip(i.difficulty,i)}}),Qe.dialog(`<h1 class="title">GYM LIFE 3D</h1>
    <p>Become the biggest bodybuilder in town. Train, eat well, earn money and keep your spirits up.</p>
    ${bp()}
    <p style="color:var(--muted)">Choose the difficulty:</p>`,e)}var sp=performance.now(),rp=0,Oa=new F,Ny=new F,cu=0,mc=0,ap=!1,hu=0;function Uy(i,e){let t=0,n=0;et==="play"&&((An.has("w")||An.has("arrowup"))&&(n-=1),(An.has("s")||An.has("arrowdown"))&&(n+=1),(An.has("a")||An.has("arrowleft"))&&(t-=1),(An.has("d")||An.has("arrowright"))&&(t+=1),t+=mr.x,n+=mr.y);let s=Math.hypot(t,n),r=An.has("shift")?1.6:1,a=s>.1?Math.min(1,s)*5*r:0;if(ms+=(a-ms)*Math.min(1,i*10),s>.1){let o=ot.yaw,l=(t*Math.cos(o)+n*Math.sin(o))/s,c=(-t*Math.sin(o)+n*Math.cos(o))/s,d=Math.atan2(l,c)-fn;d=Math.atan2(Math.sin(d),Math.cos(d)),fn+=d*Math.min(1,i*12),Nt.x+=l*ms*i,Nt.z+=c*ms*i,Mt.collide(Nt),hu-=i*ms,hu<=0&&(hu=2.2,lt.sfx("step"))}if(Ut.root.position.copy(Nt),Ut.root.rotation.y=fn,(Ut.pose==="idle"||Ut.pose==="walk")&&Ut.setPose(ms>.2?"walk":"idle"),Ut.update(i,ms),Mt.update(i,e),et==="play"){let o=pp();Qe.prompt(o?o.label:null)}if(et==="title"){let o=e*.04+.8;_n.position.set(Math.cos(o)*19,9,Math.sin(o)*19),_n.lookAt(0,3,0)}else if(ot.fixed){_n.position.lerp(ot.fixed.pos,Math.min(1,i*5));let o=Ny.copy(ot.fixed.look);if(window.innerWidth>900){let l=gs.subVectors(ot.fixed.look,ot.fixed.pos).cross(_n.up).normalize();o.addScaledVector(l,1.3)}Oa.copy(ot.target).lerp(o,Math.min(1,i*5)),ot.target.copy(Oa),_n.lookAt(ot.target)}else{let o=Mt.camDist*ot.zoom;ot.target.lerp(Oa.set(Nt.x,1.3,Nt.z),Math.min(1,i*8));let l=new F(ot.target.x+Math.sin(ot.yaw)*Math.cos(ot.pitch)*o,ot.target.y+Math.sin(ot.pitch)*o+(Mt.camHeight-5)*.4,ot.target.z+Math.cos(ot.yaw)*Math.cos(ot.pitch)*o);Fy(ot.target,l),ot.snap?(ot.target.set(Nt.x,1.3,Nt.z),_n.position.copy(l),ot.snap=!1):_n.position.lerp(l,Math.min(1,i*6)),_n.lookAt(ot.target)}if(Mt.sun){let o=et==="title"?Oa.set(0,0,0):Oa.set(Nt.x,0,Nt.z);Mt.sun.position.copy(Mt.sunDir).multiplyScalar(50).add(o),Mt.sun.target.position.copy(o),Yi.position.copy(_n.position)}bi&&bi.update(i)}var gs=new F;function Fy(i,e){for(let n=1;n<=16;n++)if(gs.lerpVectors(i,e,n/16),Mt.colliders.some(r=>r.h>3&&gs.y<r.h&&gs.x>r.x1-.6&&gs.x<r.x2+.6&&gs.z>r.z1-.6&&gs.z<r.z2+.6)){e.lerpVectors(i,e,Math.max(.15,(n-1.5)/16)),e.y=Math.max(e.y,i.y+1.2);return}}function Tp(){let i=performance.now(),e=Math.min(.05,(i-sp)/1e3);if(sp=i,rp+=e,Uy(e,rp),dn==="high"?(lp.scene=Mt.scene,_c.scene=Mt.scene,xr.render(e)):yn.render(Mt.scene,_n),!ap&&et==="play"&&(cu++,mc+=e,mc>4)){let n=cu/mc;cu=0,mc=0,n<28&&dn!=="low"&&!hi.get(mu)?(dn=gr[gr.indexOf(dn)-1],xu(),Qe.toast(`Graphics lowered to ${dn} for smoother play (press G to change)`)):ap=!0}requestAnimationFrame(Tp)}window.__gym={get state(){return Ze},get mode(){return et},get place(){return Mt},pos:Nt,cam:ot,player:Ut,audio:lt,travel:yu,startWorkout:gc,startWork:Sp,startPlane:fu,mirror:_p,encounter:gp,sleep:xp};wp();Tp();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
