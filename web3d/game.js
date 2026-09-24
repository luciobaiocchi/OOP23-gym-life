(()=>{var hd=0,ah=1,ud=2;var ns=1,dd=2,Ys=3,Oi=0,Yt=1,Qn=2,Gt=0,$s=1,oh=2,lh=3,ch=4,Zo=5;var Cn=100,fd=101,pd=102,md=103,gd=104,is=200,xd=201,_d=202,vd=203,hh=204,uh=205,la=206,yd=207,ca=208,Md=209,Sd=210,bd=211,Ed=212,Td=213,wd=214,fo=0,po=1,mo=2,Ls=3,go=4,xo=5,_o=6,vo=7,Jo=0,Ad=1,Rd=2,Bn=0,ha=1,ua=2,da=3,ss=4,fa=5,pa=6,ma=7,Yc="attached",Cd="detached",dh=300,Bi=301,rs=302,Ko=303,jo=304,ga=306,Rn=1e3,Wn=1001,yo=1002,zt=1003,Pd=1004;var xa=1005;var Qt=1006,Qo=1007;var ki=1008;var sn=1009,fh=1010,ph=1011,Zs=1012,el=1013,kn=1014,bn=1015,Kt=1016,tl=1017,nl=1018,zi=1020,mh=35902,gh=35899,xh=1021,_h=1022,cn=1023,Xn=1026,ei=1027,il=1028,sl=1029,Vi=1030,rl=1031;var al=1033,_a=33776,va=33777,ya=33778,Ma=33779,ol=35840,ll=35841,cl=35842,hl=35843,ul=36196,dl=37492,fl=37496,pl=37488,ml=37489,Sa=37490,gl=37491,xl=37808,_l=37809,vl=37810,yl=37811,Ml=37812,Sl=37813,bl=37814,El=37815,Tl=37816,wl=37817,Al=37818,Rl=37819,Cl=37820,Pl=37821,Il=36492,Ll=36494,Dl=36495,Nl=36283,Ul=36284,ba=36285,Fl=36286;var Cr=2300,Mo=2301,ho=2302,$c=2303,Zc=2400,Jc=2401,Kc=2402;var Id=3200;var Js=0,Ld=1,_i="",kt="srgb",Pr="srgb-linear",Ir="linear",xt="srgb";var uo=7680;var Dd=519,Nd=512,Ud=513,Fd=514,Ol=515,Od=516,Bd=517,Bl=518,kd=519,zd=35044;var vh="300 es",Un=2e3,Ds=2001;function Pp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ip(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Lr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vd(){let i=Lr("canvas");return i.style.display="block",i}var Pu={},Ns=null;function yh(...i){let e="THREE."+i.shift();Ns?Ns("log",e,...i):console.log(e,...i)}function Gd(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ge(...i){i=Gd(i);let e="THREE."+i.shift();if(Ns)Ns("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Xe(...i){i=Gd(i);let e="THREE."+i.shift();if(Ns)Ns("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ji(...i){let e=i.join(" ");e in Pu||(Pu[e]=!0,Ge(...i))}function Hd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Wd={[fo]:po,[mo]:_o,[go]:vo,[Ls]:xo,[po]:fo,[_o]:mo,[vo]:go,[xo]:Ls},qn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var vc=Math.PI/180,So=180/Math.PI;function as(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function ht(i,e,t){return Math.max(e,Math.min(t,i))}function Lp(i,e){return(i%e+e)%e}function yc(i,e,t){return(1-t)*i+t*e}function _r(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function dn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var wh=class wh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};wh.prototype.isVector2=!0;var he=wh,Yn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(d!==y||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*y;m<0&&(u=-u,f=-f,g=-g,y=-y,m=-m);let p=1-o;if(m<.9995){let S=Math.acos(m),b=Math.sin(S);p=Math.sin(p*S)/b,o=Math.sin(o*S)/b,l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+y*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+y*o;let S=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=S,c*=S,h*=S,d*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-o*f,e[t+2]=c*g+h*f+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Ah=class Ah{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Iu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Iu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Mc.copy(this).projectOnVector(e),this.sub(Mc)}reflect(e){return this.sub(Mc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ah.prototype.isVector3=!0;var U=Ah,Mc=new U,Iu=new Yn,Rh=class Rh{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],y=s[0],m=s[3],p=s[6],S=s[1],b=s[4],x=s[7],M=s[2],T=s[5],I=s[8];return r[0]=a*y+o*S+l*M,r[3]=a*m+o*b+l*T,r[6]=a*p+o*x+l*I,r[1]=c*y+h*S+d*M,r[4]=c*m+h*b+d*T,r[7]=c*p+h*x+d*I,r[2]=u*y+f*S+g*M,r[5]=u*m+f*b+g*T,r[8]=u*p+f*x+g*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=t*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=d*y,e[1]=(s*c-h*n)*y,e[2]=(o*n-s*a)*y,e[3]=u*y,e[4]=(h*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=f*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ji("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Sc.makeScale(e,t)),this}rotate(e){return ji("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Sc.makeRotation(-e)),this}translate(e,t){return ji("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Sc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Rh.prototype.isMatrix3=!0;var Qe=Rh,Sc=new Qe,Lu=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Du=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Dp(){let i={enabled:!0,workingColorSpace:Pr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===xt&&(s.r=pi(s.r),s.g=pi(s.g),s.b=pi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xt&&(s.r=Is(s.r),s.g=Is(s.g),s.b=Is(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===_i?Ir:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ji("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ji("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Pr]:{primaries:e,whitePoint:n,transfer:Ir,toXYZ:Lu,fromXYZ:Du,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:kt},outputColorSpaceConfig:{drawingBufferColorSpace:kt}},[kt]:{primaries:e,whitePoint:n,transfer:xt,toXYZ:Lu,fromXYZ:Du,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:kt}}}),i}var ot=Dp();function pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var xs,bo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{xs===void 0&&(xs=Lr("canvas")),xs.width=e.width,xs.height=e.height;let s=xs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=xs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Lr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=pi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(pi(t[n]/255)*255):t[n]=pi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Np=0,Us=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=as(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(bc(s[a].image)):r.push(bc(s[a]))}else r=bc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function bc(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?bo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}var Up=0,Ec=new U,on=class i extends qn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Wn,s=Wn,r=Qt,a=ki,o=cn,l=sn,c=i.DEFAULT_ANISOTROPY,h=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=as(),this.name="",this.source=new Us(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ec).x}get height(){return this.source.getSize(Ec).y}get depth(){return this.source.getSize(Ec).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ge(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ge(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rn:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case yo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rn:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case yo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=dh;on.DEFAULT_ANISOTROPY=1;var Ch=class Ch{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,x=(f+1)/2,M=(p+1)/2,T=(h+u)/4,I=(d+y)/4,_=(g+m)/4;return b>x&&b>M?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=T/n,r=I/n):x>M?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=T/s,r=_/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=I/r,s=_/r),this.set(n,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-y)/S,this.z=(u-h)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ch.prototype.isVector4=!0;var Mt=Ch,Eo=class extends qn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new on(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Us(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vt=class extends Eo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Dr=class extends on{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var To=class extends on{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var $o=class $o{constructor(e,t,n,s,r,a,o,l,c,h,d,u,f,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,d,u,f,g,y,m)}set(e,t,n,s,r,a,o,l,c,h,d,u,f,g,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $o().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/_s.setFromMatrixColumn(e,0).length(),r=1/_s.setFromMatrixColumn(e,1).length(),a=1/_s.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,f=a*d,g=o*h,y=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-y*c,t[9]=-o*l,t[2]=y-u*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,g=c*h,y=c*d;t[0]=u+y*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=y+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,g=c*h,y=c*d;t[0]=u-y*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=y-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,f=a*d,g=o*h,y=o*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+y,t[1]=l*d,t[5]=y*c+u,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,f=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=y-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-y*d}else if(e.order==="XZY"){let u=a*l,f=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+y,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=y*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fp,e,Op)}lookAt(e,t,n){let s=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Ti.crossVectors(n,vn),Ti.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Ti.crossVectors(n,vn)),Ti.normalize(),Va.crossVectors(vn,Ti),s[0]=Ti.x,s[4]=Va.x,s[8]=vn.x,s[1]=Ti.y,s[5]=Va.y,s[9]=vn.y,s[2]=Ti.z,s[6]=Va.z,s[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],y=n[6],m=n[10],p=n[14],S=n[3],b=n[7],x=n[11],M=n[15],T=s[0],I=s[4],_=s[8],A=s[12],P=s[1],N=s[5],E=s[9],D=s[13],C=s[2],R=s[6],F=s[10],G=s[14],Z=s[3],V=s[7],q=s[11],Y=s[15];return r[0]=a*T+o*P+l*C+c*Z,r[4]=a*I+o*N+l*R+c*V,r[8]=a*_+o*E+l*F+c*q,r[12]=a*A+o*D+l*G+c*Y,r[1]=h*T+d*P+u*C+f*Z,r[5]=h*I+d*N+u*R+f*V,r[9]=h*_+d*E+u*F+f*q,r[13]=h*A+d*D+u*G+f*Y,r[2]=g*T+y*P+m*C+p*Z,r[6]=g*I+y*N+m*R+p*V,r[10]=g*_+y*E+m*F+p*q,r[14]=g*A+y*D+m*G+p*Y,r[3]=S*T+b*P+x*C+M*Z,r[7]=S*I+b*N+x*R+M*V,r[11]=S*_+b*E+x*F+M*q,r[15]=S*A+b*D+x*G+M*Y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],y=e[7],m=e[11],p=e[15],S=l*f-c*u,b=o*f-c*d,x=o*u-l*d,M=a*f-c*h,T=a*u-l*h,I=a*d-o*h;return t*(y*S-m*b+p*x)-n*(g*S-m*M+p*T)+s*(g*b-y*M+p*I)-r*(g*x-y*T+m*I)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],y=e[13],m=e[14],p=e[15],S=t*o-n*a,b=t*l-s*a,x=t*c-r*a,M=n*l-s*o,T=n*c-r*o,I=s*c-r*l,_=h*y-d*g,A=h*m-u*g,P=h*p-f*g,N=d*m-u*y,E=d*p-f*y,D=u*p-f*m,C=S*D-b*E+x*N+M*P-T*A+I*_;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/C;return e[0]=(o*D-l*E+c*N)*R,e[1]=(s*E-n*D-r*N)*R,e[2]=(y*I-m*T+p*M)*R,e[3]=(u*T-d*I-f*M)*R,e[4]=(l*P-a*D-c*A)*R,e[5]=(t*D-s*P+r*A)*R,e[6]=(m*x-g*I-p*b)*R,e[7]=(h*I-u*x+f*b)*R,e[8]=(a*E-o*P+c*_)*R,e[9]=(n*P-t*E-r*_)*R,e[10]=(g*T-y*x+p*S)*R,e[11]=(d*x-h*T-f*S)*R,e[12]=(o*A-a*N-l*_)*R,e[13]=(t*N-n*A+s*_)*R,e[14]=(y*b-g*M-m*S)*R,e[15]=(h*M-d*b+u*S)*R,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,y=a*h,m=a*d,p=o*d,S=l*c,b=l*h,x=l*d,M=n.x,T=n.y,I=n.z;return s[0]=(1-(y+p))*M,s[1]=(f+x)*M,s[2]=(g-b)*M,s[3]=0,s[4]=(f-x)*T,s[5]=(1-(u+p))*T,s[6]=(m+S)*T,s[7]=0,s[8]=(g+b)*I,s[9]=(m-S)*I,s[10]=(1-(u+y))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=_s.set(s[0],s[1],s[2]).length(),o=_s.set(s[4],s[5],s[6]).length(),l=_s.set(s[8],s[9],s[10]).length();r<0&&(a=-a),In.copy(this);let c=1/a,h=1/o,d=1/l;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=h,In.elements[5]*=h,In.elements[6]*=h,In.elements[8]*=d,In.elements[9]*=d,In.elements[10]*=d,t.setFromRotationMatrix(In),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Un,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===Un)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Ds)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Un,l=!1){let c=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s),g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===Un)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===Ds)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};$o.prototype.isMatrix4=!0;var et=$o,_s=new U,In=new et,Fp=new U(0,0,0),Op=new U(1,1,1),Ti=new U,Va=new U,vn=new U,Nu=new et,Uu=new Yn,$n=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ht(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Nu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Uu.setFromEuler(this),this.setFromQuaternion(Uu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$n.DEFAULT_ORDER="XYZ";var Nr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Bp=0,Fu=new U,vs=new Yn,ci=new et,Ga=new U,vr=new U,kp=new U,zp=new Yn,Ou=new U(1,0,0),Bu=new U(0,1,0),ku=new U(0,0,1),zu={type:"added"},Vp={type:"removed"},ys={type:"childadded",child:null},Tc={type:"childremoved",child:null},Xt=class i extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new U,t=new $n,n=new Yn,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new et},normalMatrix:{value:new Qe}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.multiply(vs),this}rotateOnWorldAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.premultiply(vs),this}rotateX(e){return this.rotateOnAxis(Ou,e)}rotateY(e){return this.rotateOnAxis(Bu,e)}rotateZ(e){return this.rotateOnAxis(ku,e)}translateOnAxis(e,t){return Fu.copy(e).applyQuaternion(this.quaternion),this.position.add(Fu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ou,e)}translateY(e){return this.translateOnAxis(Bu,e)}translateZ(e){return this.translateOnAxis(ku,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ga.copy(e):Ga.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(vr,Ga,this.up):ci.lookAt(Ga,vr,this.up),this.quaternion.setFromRotationMatrix(ci),s&&(ci.extractRotation(s.matrixWorld),vs.setFromRotationMatrix(ci),this.quaternion.premultiply(vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zu),ys.child=e,this.dispatchEvent(ys),ys.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vp),Tc.child=e,this.dispatchEvent(Tc),Tc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zu),ys.child=e,this.dispatchEvent(ys),ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,e,kp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,zp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Xt.DEFAULT_UP=new U(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var At=class extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Gp={type:"move"},Fs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new At,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new At,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new At,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Gp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new At;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Xd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},Ha={h:0,s:0,l:0};function wc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Fe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ot.workingColorSpace){if(e=Lp(e,1),t=ht(t,0,1),n=ht(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=wc(a,r,e+1/3),this.g=wc(a,r,e),this.b=wc(a,r,e-1/3)}return ot.colorSpaceToWorking(this,s),this}setStyle(e,t=kt){function n(r){r!==void 0&&parseFloat(r)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ge("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){let n=Xd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pi(e.r),this.g=pi(e.g),this.b=pi(e.b),this}copyLinearToSRGB(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return ot.workingToColorSpace(nn.copy(this),e),Math.round(ht(nn.r*255,0,255))*65536+Math.round(ht(nn.g*255,0,255))*256+Math.round(ht(nn.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace(nn.copy(this),t);let n=nn.r,s=nn.g,r=nn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=kt){ot.workingToColorSpace(nn.copy(this),e);let t=nn.r,n=nn.g,s=nn.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(wi),this.setHSL(wi.h+e,wi.s+t,wi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wi),e.getHSL(Ha);let n=yc(wi.h,Ha.h,t),s=yc(wi.s,Ha.s,t),r=yc(wi.l,Ha.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},nn=new Fe;Fe.NAMES=Xd;var Ur=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Fe(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Fn=class extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ln=new U,hi=new U,Ac=new U,ui=new U,Ms=new U,Ss=new U,Vu=new U,Rc=new U,Cc=new U,Pc=new U,Ic=new Mt,Lc=new Mt,Dc=new Mt,Pi=class i{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ln.subVectors(e,t),s.cross(Ln);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Ln.subVectors(s,t),hi.subVectors(n,t),Ac.subVectors(e,t);let a=Ln.dot(Ln),o=Ln.dot(hi),l=Ln.dot(Ac),c=hi.dot(hi),h=hi.dot(Ac),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ui.x),l.addScaledVector(a,ui.y),l.addScaledVector(o,ui.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Ic.setScalar(0),Lc.setScalar(0),Dc.setScalar(0),Ic.fromBufferAttribute(e,t),Lc.fromBufferAttribute(e,n),Dc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ic,r.x),a.addScaledVector(Lc,r.y),a.addScaledVector(Dc,r.z),a}static isFrontFacing(e,t,n,s){return Ln.subVectors(n,t),hi.subVectors(e,t),Ln.cross(hi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),Ln.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ms.subVectors(s,n),Ss.subVectors(r,n),Rc.subVectors(e,n);let l=Ms.dot(Rc),c=Ss.dot(Rc);if(l<=0&&c<=0)return t.copy(n);Cc.subVectors(e,s);let h=Ms.dot(Cc),d=Ss.dot(Cc);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Ms,a);Pc.subVectors(e,r);let f=Ms.dot(Pc),g=Ss.dot(Pc);if(g>=0&&f<=g)return t.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ss,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Vu.subVectors(r,s),o=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(Vu,o);let p=1/(m+y+u);return a=y*p,o=u*p,t.copy(n).addScaledVector(Ms,a).addScaledVector(Ss,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},On=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Dn):Dn.fromBufferAttribute(r,a),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wa.copy(n.boundingBox)),Wa.applyMatrix4(e.matrixWorld),this.union(Wa)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yr),Xa.subVectors(this.max,yr),bs.subVectors(e.a,yr),Es.subVectors(e.b,yr),Ts.subVectors(e.c,yr),Ai.subVectors(Es,bs),Ri.subVectors(Ts,Es),Yi.subVectors(bs,Ts);let t=[0,-Ai.z,Ai.y,0,-Ri.z,Ri.y,0,-Yi.z,Yi.y,Ai.z,0,-Ai.x,Ri.z,0,-Ri.x,Yi.z,0,-Yi.x,-Ai.y,Ai.x,0,-Ri.y,Ri.x,0,-Yi.y,Yi.x,0];return!Nc(t,bs,Es,Ts,Xa)||(t=[1,0,0,0,1,0,0,0,1],!Nc(t,bs,Es,Ts,Xa))?!1:(qa.crossVectors(Ai,Ri),t=[qa.x,qa.y,qa.z],Nc(t,bs,Es,Ts,Xa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},di=[new U,new U,new U,new U,new U,new U,new U,new U],Dn=new U,Wa=new On,bs=new U,Es=new U,Ts=new U,Ai=new U,Ri=new U,Yi=new U,yr=new U,Xa=new U,qa=new U,$i=new U;function Nc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){$i.fromArray(i,r);let o=s.x*Math.abs($i.x)+s.y*Math.abs($i.y)+s.z*Math.abs($i.z),l=e.dot($i),c=t.dot($i),h=n.dot($i);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Wt=new U,Ya=new he,Hp=0,Ot=class extends qn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=zd,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ya.fromBufferAttribute(this,t),Ya.applyMatrix3(e),this.setXY(t,Ya.x,Ya.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=_r(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_r(t,this.array)),t}setX(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_r(t,this.array)),t}setY(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_r(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_r(t,this.array)),t}setW(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),n=dn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),n=dn(n,this.array),s=dn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),n=dn(n,this.array),s=dn(s,this.array),r=dn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Qi=class extends Ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Fr=class extends Ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ut=class extends Ot{constructor(e,t,n){super(new Float32Array(e),t,n)}},Wp=new On,Mr=new U,Uc=new U,Zn=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Wp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mr.subVectors(e,this.center);let t=Mr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Mr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mr.copy(e.center).add(Uc)),this.expandByPoint(Mr.copy(e.center).sub(Uc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Xp=0,An=new et,Fc=new Xt,ws=new U,yn=new On,Sr=new On,Jt=new U,Ft=class i extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pp(e)?Fr:Qi)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,t,n){return An.makeTranslation(e,t,n),this.applyMatrix4(An),this}scale(e,t,n){return An.makeScale(e,t,n),this.applyMatrix4(An),this}lookAt(e){return Fc.lookAt(e),Fc.updateMatrix(),this.applyMatrix4(Fc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ut(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Sr.setFromBufferAttribute(o),this.morphTargetsRelative?(Jt.addVectors(yn.min,Sr.min),yn.expandByPoint(Jt),Jt.addVectors(yn.max,Sr.max),yn.expandByPoint(Jt)):(yn.expandByPoint(Sr.min),yn.expandByPoint(Sr.max))}yn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Jt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Jt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Jt.fromBufferAttribute(o,c),l&&(ws.fromBufferAttribute(e,c),Jt.add(ws)),s=Math.max(s,n.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ot(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new U,l[_]=new U;let c=new U,h=new U,d=new U,u=new he,f=new he,g=new he,y=new U,m=new U;function p(_,A,P){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,A),d.fromBufferAttribute(n,P),u.fromBufferAttribute(r,_),f.fromBufferAttribute(r,A),g.fromBufferAttribute(r,P),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let N=1/(f.x*g.y-g.x*f.y);isFinite(N)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(N),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(N),o[_].add(y),o[A].add(y),o[P].add(y),l[_].add(m),l[A].add(m),l[P].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let _=0,A=S.length;_<A;++_){let P=S[_],N=P.start,E=P.count;for(let D=N,C=N+E;D<C;D+=3)p(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let b=new U,x=new U,M=new U,T=new U;function I(_){M.fromBufferAttribute(s,_),T.copy(M);let A=o[_];b.copy(A),b.sub(M.multiplyScalar(M.dot(A))).normalize(),x.crossVectors(T,A);let N=x.dot(l[_])<0?-1:1;a.setXYZW(_,b.x,b.y,b.z,N)}for(let _=0,A=S.length;_<A;++_){let P=S[_],N=P.start,E=P.count;for(let D=N,C=N+E;D<C;D+=3)I(e.getX(D+0)),I(e.getX(D+1)),I(e.getX(D+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,h=new U,d=new U;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),y=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new Ot(u,h,d)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Oc=new U,qp=new U,Yp=new Qe,Nn=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Oc.subVectors(n,t).cross(qp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Oc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Yp.getNormalMatrix(e),s=this.coplanarPoint(Oc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},$p=0,Jn=class extends qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=as(),this.name="",this.type="Material",this.blending=$s,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hh,this.blendDst=uh,this.blendEquation=Cn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=uo,this.stencilZFail=uo,this.stencilZPass=uo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ge(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ge(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Fe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Nn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new he().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new he().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var fi=new U,Bc=new U,$a=new U,Za=new U,Or=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,t),fi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Bc.copy(e).add(t).multiplyScalar(.5),$a.copy(t).sub(e).normalize(),Za.copy(this.origin).sub(Bc);let r=e.distanceTo(t)*.5,a=-this.direction.dot($a),o=Za.dot(this.direction),l=-Za.dot($a),c=Za.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let y=1/h;d*=y,u*=y,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Bc).addScaledVector($a,u),f}intersectSphere(e,t){if(e.radius<0)return null;fi.subVectors(e.center,this.origin);let n=fi.dot(this.direction),s=fi.dot(fi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,f=e.z-a.z,g=t.x-a.x,y=t.y-a.y,m=t.z-a.z,p=n.x-a.x,S=n.y-a.y,b=n.z-a.z,x=Math.abs(l),M=Math.abs(c),T=Math.abs(h),I,_,A,P,N,E,D,C,R,F,G,Z;if(x>=M&&x>=T?(A=l,E=d,R=g,Z=p,l>=0?(I=c,_=h,P=u,N=f,D=y,C=m,F=S,G=b):(I=h,_=c,P=f,N=u,D=m,C=y,F=b,G=S)):M>=T?(A=c,E=u,R=y,Z=S,c>=0?(I=h,_=l,P=f,N=d,D=m,C=g,F=b,G=p):(I=l,_=h,P=d,N=f,D=g,C=m,F=p,G=b)):(A=h,E=f,R=m,Z=b,h>=0?(I=l,_=c,P=d,N=u,D=g,C=y,F=p,G=S):(I=c,_=l,P=u,N=d,D=y,C=g,F=S,G=p)),A===0)return null;let V=I/A,q=_/A,Y=1/A,ue=P-V*E,xe=N-q*E,Je=D-V*R,Ke=C-q*R,tt=F-V*Z,J=G-q*Z,Q=tt*Ke-J*Je,ce=ue*J-xe*tt,Ce=Je*xe-Ke*ue;if(s){if(Q<0||ce<0||Ce<0)return null}else if((Q<0||ce<0||Ce<0)&&(Q>0||ce>0||Ce>0))return null;let Ee=Q+ce+Ce;if(Ee===0)return null;let He=Y*(Q*E+ce*R+Ce*Z);return(Ee>0?He<0:He>0)?null:this.at(He/Ee,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ii=class extends Jn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=Jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Gu=new et,Zi=new Or,Ja=new Zn,Hu=new U,Ka=new U,ja=new U,Qa=new U,kc=new U,eo=new U,Wu=new U,to=new U,ke=class extends Xt{constructor(e=new Ft,t=new Ii){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){eo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(kc.fromBufferAttribute(d,e),a?eo.addScaledVector(kc,h):eo.addScaledVector(kc.sub(t),h))}t.add(eo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ja.copy(n.boundingSphere),Ja.applyMatrix4(r),Zi.copy(e.ray).recast(e.near),!(Ja.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(Ja,Hu)===null||Zi.origin.distanceToSquared(Hu)>(e.far-e.near)**2))&&(Gu.copy(r).invert(),Zi.copy(e.ray).applyMatrix4(Gu),!(n.boundingBox!==null&&Zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Zi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=S,M=b;x<M;x+=3){let T=o.getX(x),I=o.getX(x+1),_=o.getX(x+2);s=no(this,p,e,n,c,h,d,T,I,_),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let S=o.getX(m),b=o.getX(m+1),x=o.getX(m+2);s=no(this,a,e,n,c,h,d,S,b,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=S,M=b;x<M;x+=3){let T=x,I=x+1,_=x+2;s=no(this,p,e,n,c,h,d,T,I,_),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let S=m,b=m+1,x=m+2;s=no(this,a,e,n,c,h,d,S,b,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Zp(i,e,t,n,s,r,a,o){let l;if(e.side===Yt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Oi,o),l===null)return null;to.copy(o),to.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(to);return c<t.near||c>t.far?null:{distance:c,point:to.clone(),object:i}}function no(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Ka),i.getVertexPosition(l,ja),i.getVertexPosition(c,Qa);let h=Zp(i,e,t,n,Ka,ja,Qa,Wu);if(h){let d=new U;Pi.getBarycoord(Wu,Ka,ja,Qa,d),s&&(h.uv=Pi.getInterpolatedAttribute(s,o,l,c,d,new he)),r&&(h.uv1=Pi.getInterpolatedAttribute(r,o,l,c,d,new he)),a&&(h.normal=Pi.getInterpolatedAttribute(a,o,l,c,d,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new U,materialIndex:0};Pi.getNormal(Ka,ja,Qa,u.normal),h.face=u,h.barycoord=d}return h}var br=new Mt,Xu=new Mt,qu=new Mt,Jp=new Mt,Yu=new et,io=new U,zc=new Zn,$u=new et,Vc=new Or,Br=class extends ke{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Yc,this.bindMatrix=new et,this.bindMatrixInverse=new et,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new On),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,io),this.boundingBox.expandByPoint(io)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Zn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,io),this.boundingSphere.expandByPoint(io)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zc.copy(this.boundingSphere),zc.applyMatrix4(s),e.ray.intersectsSphere(zc)!==!1&&($u.copy(s).invert(),Vc.copy(e.ray).applyMatrix4($u),!(this.boundingBox!==null&&Vc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Vc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Mt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Yc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Cd?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ge("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Xu.fromBufferAttribute(s.attributes.skinIndex,e),qu.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(br.copy(t),t.set(0,0,0,0)):(br.set(...t,1),t.set(0,0,0)),br.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=qu.getComponent(r);if(a!==0){let o=Xu.getComponent(r);Yu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Jp.copy(br).applyMatrix4(Yu),a)}}return t.isVector4&&(t.w=br.w),t.applyMatrix4(this.bindMatrixInverse)}},Os=class extends Xt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Kn=class extends on{constructor(e=null,t=1,n=1,s,r,a,o,l,c=zt,h=zt,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Zu=new et,Kp=new et,kr=class i{constructor(e=[],t=[]){this.uuid=as(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ge("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new et)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new et;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Kp;Zu.multiplyMatrices(o,t[r]),Zu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Kn(t,e,e,cn,bn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(Ge("Skeleton: No bone found with UUID:",r),a=new Os),this.bones.push(a),this.boneInverses.push(new et().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},zr=class extends Ot{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},As=new et,Ju=new et,so=[],Ku=new On,jp=new et,Er=new ke,Tr=new Zn,Vr=class extends ke{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new zr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,jp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new On),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,As),Ku.copy(e.boundingBox).applyMatrix4(As),this.boundingBox.union(Ku)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,As),Tr.copy(e.boundingSphere).applyMatrix4(As),this.boundingSphere.union(Tr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Er.geometry=this.geometry,Er.material=this.material,Er.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Tr.copy(this.boundingSphere),Tr.applyMatrix4(n),e.ray.intersectsSphere(Tr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,As),Ju.multiplyMatrices(n,As),Er.matrixWorld=Ju,Er.raycast(e,so);for(let a=0,o=so.length;a<o;a++){let l=so[a];l.instanceId=r,l.object=this,t.push(l)}so.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new zr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Kn(new Float32Array(s*this.count),s,this.count,il,bn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ji=new Zn,Qp=new he(.5,.5),ro=new U,Bs=class{constructor(e=new Nn,t=new Nn,n=new Nn,s=new Nn,r=new Nn,a=new Nn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Un,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],y=r[9],m=r[10],p=r[11],S=r[12],b=r[13],x=r[14],M=r[15];if(s[0].setComponents(c-a,f-h,p-g,M-S).normalize(),s[1].setComponents(c+a,f+h,p+g,M+S).normalize(),s[2].setComponents(c+o,f+d,p+y,M+b).normalize(),s[3].setComponents(c-o,f-d,p-y,M-b).normalize(),n)s[4].setComponents(l,u,m,x).normalize(),s[5].setComponents(c-l,f-u,p-m,M-x).normalize();else if(s[4].setComponents(c-l,f-u,p-m,M-x).normalize(),t===Un)s[5].setComponents(c+l,f+u,p+m,M+x).normalize();else if(t===Ds)s[5].setComponents(l,u,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(e){Ji.center.set(0,0,0);let t=Qp.distanceTo(e.center);return Ji.radius=.7071067811865476+t,Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ro.x=s.normal.x>0?e.max.x:e.min.x,ro.y=s.normal.y>0?e.max.y:e.min.y,ro.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ro)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Gr=class extends on{constructor(e=[],t=Bi,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},mi=class extends on{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var jn=class extends on{constructor(e,t,n=kn,s,r,a,o=zt,l=zt,c,h=Xn,d=1){if(h!==Xn&&h!==ei)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Us(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},wo=class extends jn{constructor(e,t=kn,n=Bi,s,r,a=zt,o=zt,l,c=Xn){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Hr=class extends on{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ln=class i extends Ft{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(d,2));function g(y,m,p,S,b,x,M,T,I,_,A){let P=x/I,N=M/_,E=x/2,D=M/2,C=T/2,R=I+1,F=_+1,G=0,Z=0,V=new U;for(let q=0;q<F;q++){let Y=q*N-D;for(let ue=0;ue<R;ue++){let xe=ue*P-E;V[y]=xe*S,V[m]=Y*b,V[p]=C,c.push(V.x,V.y,V.z),V[y]=0,V[m]=0,V[p]=T>0?1:-1,h.push(V.x,V.y,V.z),d.push(ue/I),d.push(1-q/_),G+=1}}for(let q=0;q<_;q++)for(let Y=0;Y<I;Y++){let ue=u+Y+R*q,xe=u+Y+R*(q+1),Je=u+(Y+1)+R*(q+1),Ke=u+(Y+1)+R*q;l.push(ue,xe,Ke),l.push(xe,Je,Ke),Z+=6}o.addGroup(f,Z,A),f+=Z,u+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Wr=class i extends Ft{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new U,h=new he;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=n+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ut(a,3)),this.setAttribute("normal",new ut(o,3)),this.setAttribute("uv",new ut(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ks=class i extends Ft{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,y=[],m=n/2,p=0;S(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new ut(d,3)),this.setAttribute("normal",new ut(u,3)),this.setAttribute("uv",new ut(f,2));function S(){let x=new U,M=new U,T=0,I=(t-e)/n;for(let _=0;_<=r;_++){let A=[],P=_/r,N=P*(t-e)+e;for(let E=0;E<=s;E++){let D=E/s,C=D*l+o,R=Math.sin(C),F=Math.cos(C);M.x=N*R,M.y=-P*n+m,M.z=N*F,d.push(M.x,M.y,M.z),x.set(R,I,F).normalize(),u.push(x.x,x.y,x.z),f.push(D,1-P),A.push(g++)}y.push(A)}for(let _=0;_<s;_++)for(let A=0;A<r;A++){let P=y[A][_],N=y[A+1][_],E=y[A+1][_+1],D=y[A][_+1];(e>0||A!==0)&&(h.push(P,N,D),T+=3),(t>0||A!==r-1)&&(h.push(N,E,D),T+=3)}c.addGroup(p,T,0),p+=T}function b(x){let M=g,T=new he,I=new U,_=0,A=x===!0?e:t,P=x===!0?1:-1;for(let E=1;E<=s;E++)d.push(0,m*P,0),u.push(0,P,0),f.push(.5,.5),g++;let N=g;for(let E=0;E<=s;E++){let C=E/s*l+o,R=Math.cos(C),F=Math.sin(C);I.x=A*F,I.y=m*P,I.z=A*R,d.push(I.x,I.y,I.z),u.push(0,P,0),T.x=R*.5+.5,T.y=F*.5*P+.5,f.push(T.x,T.y),g++}for(let E=0;E<s;E++){let D=M+E,C=N+E;x===!0?h.push(C,C+1,D):h.push(C+1,C,D),_+=3}c.addGroup(p,_,x===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Xr=class i extends ks{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ao=class i extends Ft{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new ut(r,3)),this.setAttribute("normal",new ut(r.slice(),3)),this.setAttribute("uv",new ut(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let b=new U,x=new U,M=new U;for(let T=0;T<t.length;T+=3)f(t[T+0],b),f(t[T+1],x),f(t[T+2],M),l(b,x,M,S)}function l(S,b,x,M){let T=M+1,I=[];for(let _=0;_<=T;_++){I[_]=[];let A=S.clone().lerp(x,_/T),P=b.clone().lerp(x,_/T),N=T-_;for(let E=0;E<=N;E++)E===0&&_===T?I[_][E]=A:I[_][E]=A.clone().lerp(P,E/N)}for(let _=0;_<T;_++)for(let A=0;A<2*(T-_)-1;A++){let P=Math.floor(A/2);A%2===0?(u(I[_][P+1]),u(I[_+1][P]),u(I[_][P])):(u(I[_][P+1]),u(I[_+1][P+1]),u(I[_+1][P]))}}function c(S){let b=new U;for(let x=0;x<r.length;x+=3)b.x=r[x+0],b.y=r[x+1],b.z=r[x+2],b.normalize().multiplyScalar(S),r[x+0]=b.x,r[x+1]=b.y,r[x+2]=b.z}function h(){let S=new U;for(let b=0;b<r.length;b+=3){S.x=r[b+0],S.y=r[b+1],S.z=r[b+2];let x=m(S)/2/Math.PI+.5,M=p(S)/Math.PI+.5;a.push(x,1-M)}g(),d()}function d(){for(let S=0;S<a.length;S+=6){let b=a[S+0],x=a[S+2],M=a[S+4],T=Math.max(b,x,M),I=Math.min(b,x,M);T>.9&&I<.1&&(b<.2&&(a[S+0]+=1),x<.2&&(a[S+2]+=1),M<.2&&(a[S+4]+=1))}}function u(S){r.push(S.x,S.y,S.z)}function f(S,b){let x=S*3;b.x=e[x+0],b.y=e[x+1],b.z=e[x+2]}function g(){let S=new U,b=new U,x=new U,M=new U,T=new he,I=new he,_=new he;for(let A=0,P=0;A<r.length;A+=9,P+=6){S.set(r[A+0],r[A+1],r[A+2]),b.set(r[A+3],r[A+4],r[A+5]),x.set(r[A+6],r[A+7],r[A+8]),T.set(a[P+0],a[P+1]),I.set(a[P+2],a[P+3]),_.set(a[P+4],a[P+5]),M.copy(S).add(b).add(x).divideScalar(3);let N=m(M);y(T,P+0,S,N),y(I,P+2,b,N),y(_,P+4,x,N)}}function y(S,b,x,M){M<0&&S.x===1&&(a[b]=S.x-1),x.x===0&&x.z===0&&(a[b]=M/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ge("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new he:new U);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new U,s=[],r=[],a=[],o=new U,l=new et;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new U)}r[0]=new U,a[0]=new U;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(ht(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(ht(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},zs=class extends Mn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new he){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ro=class extends zs{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Mh(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var ju=new U,Qu=new U,Gc=new Mh,Hc=new Mh,Wc=new Mh,Co=class extends Mn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new U){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Qu.subVectors(s[0],s[1]).add(s[0]),c=Qu);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(ju.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ju),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Gc.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,y,m),Hc.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,y,m),Wc.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(Gc.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Hc.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Wc.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Gc.calc(l),Hc.calc(l),Wc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new U().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ed(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function em(i,e){let t=1-i;return t*t*e}function tm(i,e){return 2*(1-i)*i*e}function nm(i,e){return i*i*e}function Ar(i,e,t,n){return em(i,e)+tm(i,t)+nm(i,n)}function im(i,e){let t=1-i;return t*t*t*e}function sm(i,e){let t=1-i;return 3*t*t*i*e}function rm(i,e){return 3*(1-i)*i*i*e}function am(i,e){return i*i*i*e}function Rr(i,e,t,n,s){return im(i,e)+sm(i,t)+rm(i,n)+am(i,s)}var qr=class extends Mn{constructor(e=new he,t=new he,n=new he,s=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new he){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Rr(e,s.x,r.x,a.x,o.x),Rr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Po=class extends Mn{constructor(e=new U,t=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new U){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Rr(e,s.x,r.x,a.x,o.x),Rr(e,s.y,r.y,a.y,o.y),Rr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Yr=class extends Mn{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Io=class extends Mn{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$r=class extends Mn{constructor(e=new he,t=new he,n=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new he){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ar(e,s.x,r.x,a.x),Ar(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Lo=class extends Mn{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ar(e,s.x,r.x,a.x),Ar(e,s.y,r.y,a.y),Ar(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zr=class extends Mn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(ed(o,l.x,c.x,h.x,d.x),ed(o,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new he().fromArray(s))}return this}},jc=Object.freeze({__proto__:null,ArcCurve:Ro,CatmullRomCurve3:Co,CubicBezierCurve:qr,CubicBezierCurve3:Po,EllipseCurve:zs,LineCurve:Yr,LineCurve3:Io,QuadraticBezierCurve:$r,QuadraticBezierCurve3:Lo,SplineCurve:Zr}),Do=class extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new jc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new jc[s.type]().fromJSON(s))}return this}},Jr=class extends Do{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Yr(this.currentPoint.clone(),new he(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new $r(this.currentPoint.clone(),new he(e,t),new he(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new qr(this.currentPoint.clone(),new he(e,t),new he(n,s),new he(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Zr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new zs(e,t,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},gi=class extends Jr{constructor(e){super(e),this.uuid=as(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Jr().fromJSON(s))}return this}};function om(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=qd(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=dm(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,d=l;for(let u=t;u<s;u+=t){let f=i[u],g=i[u+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>d&&(d=g)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return Kr(r,a,t,o,l,c,0),a}function qd(i,e,t,n,s){let r;if(s===bm(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=td(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=td(a/n|0,i[a],i[a+1],r);return r&&Vs(r,r.next)&&(Qr(r),r=r.next),r}function es(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Vs(t,t.next)||Ut(t.prev,t,t.next)===0)){if(Qr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Kr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&xm(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?cm(i,n,s,r):lm(i)){e.push(l.i,i.i,c.i),Qr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=hm(es(i),e),Kr(i,e,t,n,s,r,2)):a===2&&um(i,e,t,n,s,r):Kr(es(i),e,t,n,s,r,1);break}}}function lm(i){let e=i.prev,t=i,n=i.next;if(Ut(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),f=Math.max(o,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&wr(s,o,r,l,a,c,g.x,g.y)&&Ut(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function cm(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Ut(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,l,c),g=Math.min(h,d,u),y=Math.max(o,l,c),m=Math.max(h,d,u),p=Qc(f,g,e,t,n),S=Qc(y,m,e,t,n),b=i.prevZ,x=i.nextZ;for(;b&&b.z>=p&&x&&x.z<=S;){if(b.x>=f&&b.x<=y&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&wr(o,h,l,d,c,u,b.x,b.y)&&Ut(b.prev,b,b.next)>=0||(b=b.prevZ,x.x>=f&&x.x<=y&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&wr(o,h,l,d,c,u,x.x,x.y)&&Ut(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;b&&b.z>=p;){if(b.x>=f&&b.x<=y&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&wr(o,h,l,d,c,u,b.x,b.y)&&Ut(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;x&&x.z<=S;){if(x.x>=f&&x.x<=y&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&wr(o,h,l,d,c,u,x.x,x.y)&&Ut(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function hm(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Vs(n,s)&&$d(n,t,t.next,s)&&jr(n,s)&&jr(s,n)&&(e.push(n.i,t.i,s.i),Qr(t),Qr(t.next),t=i=s),t=t.next}while(t!==i);return es(t)}function um(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&ym(a,o)){let l=Zd(a,o);a=es(a,a.next),l=es(l,l.next),Kr(a,e,t,n,s,r,0),Kr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function dm(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=qd(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(vm(c))}s.sort(fm);for(let r=0;r<s.length;r++)t=pm(s[r],t);return t}function fm(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function pm(i,e){let t=mm(i,e);if(!t)return e;let n=Zd(t,i);return es(n,n.next),es(t,t.next)}function mm(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Vs(i,t))return t;do{if(Vs(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Yd(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let d=Math.abs(s-t.y)/(n-t.x);jr(t,i)&&(d<h||d===h&&(t.x>a.x||t.x===a.x&&gm(a,t)))&&(a=t,h=d)}t=t.next}while(t!==o);return a}function gm(i,e){return Ut(i.prev,i,e.prev)<0&&Ut(e.next,i,i.next)<0}function xm(i,e,t,n){let s=i;do s.z===0&&(s.z=Qc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,_m(s)}function _m(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Qc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function vm(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Yd(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function wr(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Yd(i,e,t,n,s,r,a,o)}function ym(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Mm(i,e)&&(jr(i,e)&&jr(e,i)&&Sm(i,e)&&(Ut(i.prev,i,e.prev)||Ut(i,e.prev,e))||Vs(i,e)&&Ut(i.prev,i,i.next)>0&&Ut(e.prev,e,e.next)>0)}function Ut(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Vs(i,e){return i.x===e.x&&i.y===e.y}function $d(i,e,t,n){let s=oo(Ut(i,e,t)),r=oo(Ut(i,e,n)),a=oo(Ut(t,n,i)),o=oo(Ut(t,n,e));return!!(s!==r&&a!==o||s===0&&ao(i,t,e)||r===0&&ao(i,n,e)||a===0&&ao(t,i,n)||o===0&&ao(t,e,n))}function ao(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function oo(i){return i>0?1:i<0?-1:0}function Mm(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&$d(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function jr(i,e){return Ut(i.prev,i,i.next)<0?Ut(i,e,i.next)>=0&&Ut(i,i.prev,e)>=0:Ut(i,e,i.prev)<0||Ut(i,i.next,e)<0}function Sm(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Zd(i,e){let t=eh(i.i,i.x,i.y),n=eh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function td(i,e,t,n){let s=eh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Qr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function eh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function bm(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var th=class{static triangulate(e,t,n=2){return om(e,t,n)}},Ki=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];nd(e),id(n,e);let a=e.length;t.forEach(nd);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,id(n,t[l]);let o=th.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function nd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function id(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Li=class i extends Ft{constructor(e=new gi([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new ut(s,3)),this.setAttribute("uv",new ut(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:Em,b,x=!1,M,T,I,_;if(p){b=p.getSpacedPoints(h),x=!0,u=!1;let ne=p.isCatmullRomCurve3?p.closed:!1;M=p.computeFrenetFrames(h,ne),T=new U,I=new U,_=new U}u||(m=0,f=0,g=0,y=0);let A=o.extractPoints(c),P=A.shape,N=A.holes;if(!Ki.isClockWise(P)){P=P.reverse();for(let ne=0,re=N.length;ne<re;ne++){let ae=N[ne];Ki.isClockWise(ae)&&(N[ne]=ae.reverse())}}function D(ne){let ae=10000000000000001e-36,oe=ne[0];for(let de=1;de<=ne.length;de++){let Ve=de%ne.length,Oe=ne[Ve],We=Oe.x-oe.x,Ye=Oe.y-oe.y,O=We*We+Ye*Ye,dt=Math.max(Math.abs(Oe.x),Math.abs(Oe.y),Math.abs(oe.x),Math.abs(oe.y)),nt=ae*dt*dt;if(O<=nt){ne.splice(Ve,1),de--;continue}oe=Oe}}D(P),N.forEach(D);let C=N.length,R=P;for(let ne=0;ne<C;ne++){let re=N[ne];P=P.concat(re)}function F(ne,re,ae){return re||Xe("ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(re,ae)}let G=P.length;function Z(ne,re,ae){let oe,de,Ve,Oe=ne.x-re.x,We=ne.y-re.y,Ye=ae.x-ne.x,O=ae.y-ne.y,dt=Oe*Oe+We*We,nt=Oe*O-We*Ye;if(Math.abs(nt)>Number.EPSILON){let L=Math.sqrt(dt),v=Math.sqrt(Ye*Ye+O*O),z=re.x-We/L,H=re.y+Oe/L,K=ae.x-O/v,le=ae.y+Ye/v,fe=((K-z)*O-(le-H)*Ye)/(Oe*O-We*Ye);oe=z+Oe*fe-ne.x,de=H+We*fe-ne.y;let j=oe*oe+de*de;if(j<=2)return new he(oe,de);Ve=Math.sqrt(j/2)}else{let L=!1;Oe>Number.EPSILON?Ye>Number.EPSILON&&(L=!0):Oe<-Number.EPSILON?Ye<-Number.EPSILON&&(L=!0):Math.sign(We)===Math.sign(O)&&(L=!0),L?(oe=-We,de=Oe,Ve=Math.sqrt(dt)):(oe=Oe,de=We,Ve=Math.sqrt(dt/2))}return new he(oe/Ve,de/Ve)}let V=[];for(let ne=0,re=R.length,ae=re-1,oe=ne+1;ne<re;ne++,ae++,oe++)ae===re&&(ae=0),oe===re&&(oe=0),V[ne]=Z(R[ne],R[ae],R[oe]);let q=[],Y,ue=V.concat();for(let ne=0,re=C;ne<re;ne++){let ae=N[ne];Y=[];for(let oe=0,de=ae.length,Ve=de-1,Oe=oe+1;oe<de;oe++,Ve++,Oe++)Ve===de&&(Ve=0),Oe===de&&(Oe=0),Y[oe]=Z(ae[oe],ae[Ve],ae[Oe]);q.push(Y),ue=ue.concat(Y)}let xe;if(m===0)xe=Ki.triangulateShape(R,N);else{let ne=[],re=[];for(let ae=0;ae<m;ae++){let oe=ae/m,de=f*Math.cos(oe*Math.PI/2),Ve=g*Math.sin(oe*Math.PI/2)+y;for(let Oe=0,We=R.length;Oe<We;Oe++){let Ye=F(R[Oe],V[Oe],Ve);ce(Ye.x,Ye.y,-de),oe===0&&ne.push(Ye)}for(let Oe=0,We=C;Oe<We;Oe++){let Ye=N[Oe];Y=q[Oe];let O=[];for(let dt=0,nt=Ye.length;dt<nt;dt++){let L=F(Ye[dt],Y[dt],Ve);ce(L.x,L.y,-de),oe===0&&O.push(L)}oe===0&&re.push(O)}}xe=Ki.triangulateShape(ne,re)}let Je=xe.length,Ke=g+y;for(let ne=0;ne<G;ne++){let re=u?F(P[ne],ue[ne],Ke):P[ne];x?(I.copy(M.normals[0]).multiplyScalar(re.x),T.copy(M.binormals[0]).multiplyScalar(re.y),_.copy(b[0]).add(I).add(T),ce(_.x,_.y,_.z)):ce(re.x,re.y,0)}for(let ne=1;ne<=h;ne++)for(let re=0;re<G;re++){let ae=u?F(P[re],ue[re],Ke):P[re];x?(I.copy(M.normals[ne]).multiplyScalar(ae.x),T.copy(M.binormals[ne]).multiplyScalar(ae.y),_.copy(b[ne]).add(I).add(T),ce(_.x,_.y,_.z)):ce(ae.x,ae.y,d/h*ne)}for(let ne=m-1;ne>=0;ne--){let re=ne/m,ae=f*Math.cos(re*Math.PI/2),oe=g*Math.sin(re*Math.PI/2)+y;for(let de=0,Ve=R.length;de<Ve;de++){let Oe=F(R[de],V[de],oe);ce(Oe.x,Oe.y,d+ae)}for(let de=0,Ve=N.length;de<Ve;de++){let Oe=N[de];Y=q[de];for(let We=0,Ye=Oe.length;We<Ye;We++){let O=F(Oe[We],Y[We],oe);x?ce(O.x,O.y+b[h-1].y,b[h-1].x+ae):ce(O.x,O.y,d+ae)}}}tt(),J();function tt(){let ne=s.length/3;if(u){let re=0,ae=G*re;for(let oe=0;oe<Je;oe++){let de=xe[oe];Ce(de[2]+ae,de[1]+ae,de[0]+ae)}re=h+m*2,ae=G*re;for(let oe=0;oe<Je;oe++){let de=xe[oe];Ce(de[0]+ae,de[1]+ae,de[2]+ae)}}else{for(let re=0;re<Je;re++){let ae=xe[re];Ce(ae[2],ae[1],ae[0])}for(let re=0;re<Je;re++){let ae=xe[re];Ce(ae[0]+G*h,ae[1]+G*h,ae[2]+G*h)}}n.addGroup(ne,s.length/3-ne,0)}function J(){let ne=s.length/3,re=0;Q(R,re),re+=R.length;for(let ae=0,oe=N.length;ae<oe;ae++){let de=N[ae];Q(de,re),re+=de.length}n.addGroup(ne,s.length/3-ne,1)}function Q(ne,re){let ae=ne.length;for(;--ae>=0;){let oe=ae,de=ae-1;de<0&&(de=ne.length-1);for(let Ve=0,Oe=h+m*2;Ve<Oe;Ve++){let We=G*Ve,Ye=G*(Ve+1),O=re+oe+We,dt=re+de+We,nt=re+de+Ye,L=re+oe+Ye;Ee(O,dt,nt,L)}}}function ce(ne,re,ae){l.push(ne),l.push(re),l.push(ae)}function Ce(ne,re,ae){He(ne),He(re),He(ae);let oe=s.length/3,de=S.generateTopUV(n,s,oe-3,oe-2,oe-1);pt(de[0]),pt(de[1]),pt(de[2])}function Ee(ne,re,ae,oe){He(ne),He(re),He(oe),He(re),He(ae),He(oe);let de=s.length/3,Ve=S.generateSideWallUV(n,s,de-6,de-3,de-2,de-1);pt(Ve[0]),pt(Ve[1]),pt(Ve[3]),pt(Ve[1]),pt(Ve[2]),pt(Ve[3])}function He(ne){s.push(l[ne*3+0]),s.push(l[ne*3+1]),s.push(l[ne*3+2])}function pt(ne){r.push(ne.x),r.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Tm(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new jc[s.type]().fromJSON(s)),new i(n,e.options)}},Em={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new he(r,a),new he(o,l),new he(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[s*3],f=e[s*3+1],g=e[s*3+2],y=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new he(a,1-l),new he(c,1-d),new he(u,1-g),new he(y,1-p)]:[new he(o,1-l),new he(h,1-d),new he(f,1-g),new he(m,1-p)]}};function Tm(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Gs=class i extends Ao{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var fn=class i extends Ft{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=e/o,u=t/l,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let S=p*u-a;for(let b=0;b<c;b++){let x=b*d-r;g.push(x,-S,0),y.push(0,0,1),m.push(b/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){let b=S+c*p,x=S+c*(p+1),M=S+1+c*(p+1),T=S+1+c*p;f.push(b,x,T),f.push(x,M,T)}this.setIndex(f),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(y,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},ea=class i extends Ft{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],d=e,u=(t-e)/s,f=new U,g=new he;for(let y=0;y<=s;y++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}d+=u}for(let y=0;y<s;y++){let m=y*(n+1);for(let p=0;p<n;p++){let S=p+m,b=S,x=S+n+1,M=S+n+2,T=S+1;o.push(b,x,T),o.push(x,M,T)}}this.setIndex(o),this.setAttribute("position",new ut(l,3)),this.setAttribute("normal",new ut(c,3)),this.setAttribute("uv",new ut(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var xi=class i extends Ft{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new U,u=new U,f=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){let S=[],b=p/n,x=a+b*o,M=e*Math.cos(x),T=Math.sqrt(e*e-M*M),I=0;p===0&&a===0?I=.5/t:p===n&&l===Math.PI&&(I=-.5/t);for(let _=0;_<=t;_++){let A=_/t,P=s+A*r;d.x=-T*Math.cos(P),d.y=M,d.z=T*Math.sin(P),g.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),m.push(A+I,1-b),S.push(c++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<t;S++){let b=h[p][S+1],x=h[p][S],M=h[p+1][S],T=h[p+1][S+1];(p!==0||a>0)&&f.push(b,x,T),(p!==n-1||l<Math.PI)&&f.push(x,M,T)}this.setIndex(f),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(y,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ta=class i extends Ft{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new U,f=new U,g=new U;for(let y=0;y<=n;y++){let m=a+y/n*o;for(let p=0;p<=s;p++){let S=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(S),f.y=(e+t*Math.cos(m))*Math.sin(S),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),u.x=e*Math.cos(S),u.y=e*Math.sin(S),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/s),d.push(y/n)}}for(let y=1;y<=n;y++)for(let m=1;m<=s;m++){let p=(s+1)*y+m-1,S=(s+1)*(y-1)+m-1,b=(s+1)*(y-1)+m,x=(s+1)*y+m;l.push(p,S,x),l.push(S,b,x)}this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function os(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(sd(s))s.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(sd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function rn(i){let e={};for(let t=0;t<i.length;t++){let n=os(i[t]);for(let s in n)e[s]=n[s]}return e}function sd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function wm(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Sh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}var pn={clone:os,merge:rn},Am=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,It=class extends Jn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Am,this.fragmentShader=Rm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=os(e.uniforms),this.uniformsGroups=wm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Fe().setHex(s.value);break;case"v2":this.uniforms[n].value=new he().fromArray(s.value);break;case"v3":this.uniforms[n].value=new U().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Mt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Qe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new et().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Hs=class extends It{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},qt=class extends Jn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Js,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var na=class extends Jn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Js,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},ia=class extends Jn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Js,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=Jo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},No=class extends Jn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Id,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Uo=class extends Jn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Rs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Xc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Di=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Fo=class extends Di{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zc,endingEnd:Zc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Jc:r=e,o=2*t-n;break;case Kc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Jc:a=e,l=2*n-t;break;case Kc:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),y=g*g,m=y*g,p=-u*m+2*u*y-u*g,S=(1+u)*m+(-1.5-2*u)*y+(-.5+u)*g+1,b=(-1-f)*m+(1.5+f)*y+.5*g,x=f*m-f*y;for(let M=0;M!==o;++M)r[M]=p*a[h+M]+S*a[c+M]+b*a[l+M]+x*a[d+M];return r}},Oo=class extends Di{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},Bo=class extends Di{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ko=class extends Di{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-t)/(s-t),y=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*y+a[l+m]*g;return r}let u=o*2,f=e-1;for(let g=0;g!==o;++g){let y=a[c+g],m=a[l+g],p=f*u+g*2,S=d[p],b=d[p+1],x=e*u+g*2,M=h[x],T=h[x+1],I=Pm(n,t,S,M,s);r[g]=Jd(I,y,b,T,m)}return r}};function Jd(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Cm(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Pm(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Jd(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Cm(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Sn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Rs(t,this.TimeBufferType),this.values=Rs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Rs(e.times,Array),values:Rs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Xc(e.settings)&&(n.settings={inTangents:Rs(e.settings.inTangents,Array),outTangents:Rs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Bo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Oo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Fo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ko(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Cr:t=this.InterpolantFactoryMethodDiscrete;break;case Mo:t=this.InterpolantFactoryMethodLinear;break;case ho:t=this.InterpolantFactoryMethodSmooth;break;case $c:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ge("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Cr;case this.InterpolantFactoryMethodLinear:return Mo;case this.InterpolantFactoryMethodSmooth:return ho;case this.InterpolantFactoryMethodBezier:return $c}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Xc(this.settings)&&(rd(this.settings.inTangents,e),rd(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Xe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Xe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Xe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Xe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Ip(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Xe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ho,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let y=t[d+g];if(y!==t[u+g]||y!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Xc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function rd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Sn.prototype.ValueTypeName="";Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=Mo;var Ni=class extends Sn{constructor(e,t,n){super(e,t,n)}};Ni.prototype.ValueTypeName="bool";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=Cr;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var zo=class extends Sn{constructor(e,t,n,s){super(e,t,n,s)}};zo.prototype.ValueTypeName="color";var Vo=class extends Sn{constructor(e,t,n,s){super(e,t,n,s)}};Vo.prototype.ValueTypeName="number";var Go=class extends Di{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Yn.slerpFlat(r,0,a,c-o,a,c,l);return r}},sa=class extends Sn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Go(this.times,this.values,this.getValueSize(),e)}};sa.prototype.ValueTypeName="quaternion";sa.prototype.InterpolantFactoryMethodSmooth=void 0;var Ui=class extends Sn{constructor(e,t,n){super(e,t,n)}};Ui.prototype.ValueTypeName="string";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=Cr;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Ho=class extends Sn{constructor(e,t,n,s){super(e,t,n,s)}};Ho.prototype.ValueTypeName="vector";var Wo=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Kd=new Wo,Xo=class{constructor(e){this.manager=e!==void 0?e:Kd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Xo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ws=class extends Xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Xs=class extends Ws{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},qc=new et,ad=new U,od=new U,ra=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.mapType=sn,this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bs,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ad.setFromMatrixPosition(e.matrixWorld),t.position.copy(ad),od.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(od),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){qc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(qc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Ds||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(qc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},lo=new U,co=new Yn,Hn=new U,aa=class extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=Un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(lo,co,Hn),Hn.x===1&&Hn.y===1&&Hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lo,co,Hn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(lo,co,Hn),Hn.x===1&&Hn.y===1&&Hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lo,co,Hn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ci=new U,ld=new he,cd=new he,jt=class extends aa{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=So*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(vc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return So*2*Math.atan(Math.tan(vc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z)}getViewSize(e,t){return this.getViewBounds(e,ld,cd),t.subVectors(cd,ld)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(vc*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var nh=class extends ra{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0}},ts=class extends Ws{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new nh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Fi=class extends aa{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ih=class extends ra{constructor(){super(new Fi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},qs=class extends Ws{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new ih}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Cs=-90,Ps=1,qo=class extends Xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new jt(Cs,Ps,e,t);s.layers=this.layers,this.add(s);let r=new jt(Cs,Ps,e,t);r.layers=this.layers,this.add(r);let a=new jt(Cs,Ps,e,t);a.layers=this.layers,this.add(a);let o=new jt(Cs,Ps,e,t);o.layers=this.layers,this.add(o);let l=new jt(Cs,Ps,e,t);l.layers=this.layers,this.add(l);let c=new jt(Cs,Ps,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Un)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ds)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Yo=class extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},oa=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Im.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Im(){this._document.hidden===!1&&this.reset()}var bh="\\[\\]\\.:\\/",Lm=new RegExp("["+bh+"]","g"),Eh="[^"+bh+"]",Dm="[^"+bh.replace("\\.","")+"]",Nm=/((?:WC+[\/:])*)/.source.replace("WC",Eh),Um=/(WCOD+)?/.source.replace("WCOD",Dm),Fm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Eh),Om=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Eh),Bm=new RegExp("^"+Nm+Um+Fm+Om+"$"),km=["material","materials","bones","map"],sh=class{constructor(e,t,n){let s=n||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Pt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Lm,"")}static parseTrackName(e){let t=Bm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);km.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ge("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Xe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Xe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Xe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Xe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Xe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Xe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=sh;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ry=new Float32Array(1);var Ph=class Ph{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Ph.prototype.isMatrix2=!0;var rh=Ph;function Th(i,e,t,n){let s=zm(n);switch(t){case xh:return i*e;case il:return i*e/s.components*s.byteLength;case sl:return i*e/s.components*s.byteLength;case Vi:return i*e*2/s.components*s.byteLength;case rl:return i*e*2/s.components*s.byteLength;case _h:return i*e*3/s.components*s.byteLength;case cn:return i*e*4/s.components*s.byteLength;case al:return i*e*4/s.components*s.byteLength;case _a:case va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ya:case Ma:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ll:case hl:return Math.max(i,16)*Math.max(e,8)/4;case ol:case cl:return Math.max(i,8)*Math.max(e,8)/2;case ul:case dl:case pl:case ml:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case fl:case Sa:case gl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _l:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case vl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case yl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Sl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case bl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case El:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Tl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case wl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Al:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Rl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Cl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Pl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Il:case Ll:case Dl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Nl:case Ul:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ba:case Fl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zm(i){switch(i){case sn:case fh:return{byteLength:1,components:1};case Zs:case ph:case Kt:return{byteLength:2,components:1};case tl:case nl:return{byteLength:2,components:4};case kn:case el:case bn:return{byteLength:4,components:1};case mh:case gh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function yf(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Gm(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],y=d[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let y=d[f];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Hm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wm=`#ifdef USE_ALPHAHASH
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
#endif`,Xm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ym=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$m=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zm=`#ifdef USE_AOMAP
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
#endif`,Jm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Km=`#ifdef USE_BATCHING
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
#endif`,jm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,e0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,t0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,n0=`#ifdef USE_IRIDESCENCE
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
#endif`,i0=`#ifdef USE_BUMPMAP
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
#endif`,s0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,a0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,o0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,l0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,c0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,h0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,u0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,d0=`#define PI 3.141592653589793
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
} // validated`,f0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,p0=`vec3 transformedNormal = objectNormal;
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
#endif`,m0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,g0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,x0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,v0="gl_FragColor = linearToOutputTexel( gl_FragColor );",y0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,M0=`#ifdef USE_ENVMAP
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
#endif`,S0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,b0=`#ifdef USE_ENVMAP
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
#endif`,E0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,T0=`#ifdef USE_ENVMAP
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
#endif`,w0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,A0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,R0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,C0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,P0=`#ifdef USE_GRADIENTMAP
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
}`,I0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,L0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,D0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,N0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,U0=`#ifdef USE_ENVMAP
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
#endif`,F0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,O0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,B0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,k0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,z0=`PhysicalMaterial material;
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
#endif`,V0=`uniform sampler2D dfgLUT;
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
}`,G0=`
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
#endif`,H0=`#if defined( RE_IndirectDiffuse )
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
#endif`,W0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,X0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,q0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Y0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,J0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,K0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,j0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Q0=`#if defined( USE_POINTS_UV )
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
#endif`,eg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ng=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ig=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rg=`#ifdef USE_MORPHTARGETS
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
#endif`,ag=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,og=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ug=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,dg=`#ifdef USE_NORMALMAP
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
#endif`,fg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_g=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Eg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ag=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rg=`float getShadowMask() {
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
}`,Cg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pg=`#ifdef USE_SKINNING
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
#endif`,Ig=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lg=`#ifdef USE_SKINNING
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
#endif`,Dg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ng=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ug=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Og=`#ifdef USE_TRANSMISSION
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
#endif`,Bg=`#ifdef USE_TRANSMISSION
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
#endif`,kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Hg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wg=`uniform sampler2D t2D;
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
}`,Xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$g=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zg=`#include <common>
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
}`,Jg=`#if DEPTH_PACKING == 3200
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
}`,Kg=`#define DISTANCE
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
}`,jg=`#define DISTANCE
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
}`,Qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ex=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tx=`uniform float scale;
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
}`,nx=`uniform vec3 diffuse;
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
}`,ix=`#include <common>
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
}`,sx=`uniform vec3 diffuse;
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
}`,rx=`#define LAMBERT
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
}`,ax=`#define LAMBERT
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
}`,ox=`#define MATCAP
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
}`,lx=`#define MATCAP
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
}`,cx=`#define NORMAL
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
}`,hx=`#define NORMAL
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
}`,ux=`#define PHONG
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
}`,dx=`#define PHONG
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
}`,fx=`#define STANDARD
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
}`,px=`#define STANDARD
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
}`,mx=`#define TOON
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
}`,gx=`#define TOON
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
}`,xx=`uniform float size;
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
}`,_x=`uniform vec3 diffuse;
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
}`,vx=`#include <common>
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
}`,yx=`uniform vec3 color;
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
}`,Mx=`uniform float rotation;
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
}`,Sx=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:Hm,alphahash_pars_fragment:Wm,alphamap_fragment:Xm,alphamap_pars_fragment:qm,alphatest_fragment:Ym,alphatest_pars_fragment:$m,aomap_fragment:Zm,aomap_pars_fragment:Jm,batching_pars_vertex:Km,batching_vertex:jm,begin_vertex:Qm,beginnormal_vertex:e0,bsdfs:t0,iridescence_fragment:n0,bumpmap_pars_fragment:i0,clipping_planes_fragment:s0,clipping_planes_pars_fragment:r0,clipping_planes_pars_vertex:a0,clipping_planes_vertex:o0,color_fragment:l0,color_pars_fragment:c0,color_pars_vertex:h0,color_vertex:u0,common:d0,cube_uv_reflection_fragment:f0,defaultnormal_vertex:p0,displacementmap_pars_vertex:m0,displacementmap_vertex:g0,emissivemap_fragment:x0,emissivemap_pars_fragment:_0,colorspace_fragment:v0,colorspace_pars_fragment:y0,envmap_fragment:M0,envmap_common_pars_fragment:S0,envmap_pars_fragment:b0,envmap_pars_vertex:E0,envmap_physical_pars_fragment:U0,envmap_vertex:T0,fog_vertex:w0,fog_pars_vertex:A0,fog_fragment:R0,fog_pars_fragment:C0,gradientmap_pars_fragment:P0,lightmap_pars_fragment:I0,lights_lambert_fragment:L0,lights_lambert_pars_fragment:D0,lights_pars_begin:N0,lights_toon_fragment:F0,lights_toon_pars_fragment:O0,lights_phong_fragment:B0,lights_phong_pars_fragment:k0,lights_physical_fragment:z0,lights_physical_pars_fragment:V0,lights_fragment_begin:G0,lights_fragment_maps:H0,lights_fragment_end:W0,lightprobes_pars_fragment:X0,logdepthbuf_fragment:q0,logdepthbuf_pars_fragment:Y0,logdepthbuf_pars_vertex:$0,logdepthbuf_vertex:Z0,map_fragment:J0,map_pars_fragment:K0,map_particle_fragment:j0,map_particle_pars_fragment:Q0,metalnessmap_fragment:eg,metalnessmap_pars_fragment:tg,morphinstance_vertex:ng,morphcolor_vertex:ig,morphnormal_vertex:sg,morphtarget_pars_vertex:rg,morphtarget_vertex:ag,normal_fragment_begin:og,normal_fragment_maps:lg,normal_pars_fragment:cg,normal_pars_vertex:hg,normal_vertex:ug,normalmap_pars_fragment:dg,clearcoat_normal_fragment_begin:fg,clearcoat_normal_fragment_maps:pg,clearcoat_pars_fragment:mg,iridescence_pars_fragment:gg,opaque_fragment:xg,packing:_g,premultiplied_alpha_fragment:vg,project_vertex:yg,dithering_fragment:Mg,dithering_pars_fragment:Sg,roughnessmap_fragment:bg,roughnessmap_pars_fragment:Eg,shadowmap_pars_fragment:Tg,shadowmap_pars_vertex:wg,shadowmap_vertex:Ag,shadowmask_pars_fragment:Rg,skinbase_vertex:Cg,skinning_pars_vertex:Pg,skinning_vertex:Ig,skinnormal_vertex:Lg,specularmap_fragment:Dg,specularmap_pars_fragment:Ng,tonemapping_fragment:Ug,tonemapping_pars_fragment:Fg,transmission_fragment:Og,transmission_pars_fragment:Bg,uv_pars_fragment:kg,uv_pars_vertex:zg,uv_vertex:Vg,worldpos_vertex:Gg,background_vert:Hg,background_frag:Wg,backgroundCube_vert:Xg,backgroundCube_frag:qg,cube_vert:Yg,cube_frag:$g,depth_vert:Zg,depth_frag:Jg,distance_vert:Kg,distance_frag:jg,equirect_vert:Qg,equirect_frag:ex,linedashed_vert:tx,linedashed_frag:nx,meshbasic_vert:ix,meshbasic_frag:sx,meshlambert_vert:rx,meshlambert_frag:ax,meshmatcap_vert:ox,meshmatcap_frag:lx,meshnormal_vert:cx,meshnormal_frag:hx,meshphong_vert:ux,meshphong_frag:dx,meshphysical_vert:fx,meshphysical_frag:px,meshtoon_vert:mx,meshtoon_frag:gx,points_vert:xx,points_frag:_x,shadow_vert:vx,shadow_frag:yx,sprite_vert:Mx,sprite_frag:Sx},ye={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},ni={basic:{uniforms:rn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:rn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Fe(0)},envMapIntensity:{value:1}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:rn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:rn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:rn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Fe(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:rn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:rn([ye.points,ye.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:rn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:rn([ye.common,ye.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:rn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:rn([ye.sprite,ye.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distance:{uniforms:rn([ye.common,ye.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distance_vert,fragmentShader:st.distance_frag},shadow:{uniforms:rn([ye.lights,ye.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};ni.physical={uniforms:rn([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};var kl={r:0,b:0,g:0},bx=new et,Mf=new Qe;Mf.set(-1,0,0,0,1,0,0,0,1);function Ex(i,e,t,n,s,r){let a=new Fe(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(S){let b=S.isScene===!0?S.background:null;if(b&&b.isTexture){let x=S.backgroundBlurriness>0;b=e.get(b,x)}return b}function g(S){let b=!1,x=f(S);x===null?m(a,o):x&&x.isColor&&(m(x,1),b=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(S,b){let x=f(b);x&&(x.isCubeTexture||x.mapping===ga)?(c===void 0&&(c=new ke(new ln(1,1,1),new It({name:"BackgroundCubeMaterial",uniforms:os(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,T,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(bx.makeRotationFromEuler(b.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Mf),c.material.toneMapped=ot.getTransfer(x.colorSpace)!==xt,(h!==x||d!==x.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,u=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new ke(new fn(2,2),new It({name:"BackgroundMaterial",uniforms:os(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=ot.getTransfer(x.colorSpace)!==xt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,u=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,b){S.getRGB(kl,Sh(i)),t.buffers.color.setClear(kl.r,kl.g,kl.b,b,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,b=1){a.set(S),o=b,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:g,addToRenderList:y,dispose:p}}function Tx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(N,E,D,C,R){let F=!1,G=d(N,C,D,E);r!==G&&(r=G,c(r.object)),F=f(N,C,D,R),F&&g(N,C,D,R),R!==null&&e.update(R,i.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,x(N,E,D,C),R!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(R).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function h(N){return i.deleteVertexArray(N)}function d(N,E,D,C){let R=C.wireframe===!0,F=n[E.id];F===void 0&&(F={},n[E.id]=F);let G=N.isInstancedMesh===!0?N.id:0,Z=F[G];Z===void 0&&(Z={},F[G]=Z);let V=Z[D.id];V===void 0&&(V={},Z[D.id]=V);let q=V[R];return q===void 0&&(q=u(l()),V[R]=q),q}function u(N){let E=[],D=[],C=[];for(let R=0;R<t;R++)E[R]=0,D[R]=0,C[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:D,attributeDivisors:C,object:N,attributes:{},index:null}}function f(N,E,D,C){let R=r.attributes,F=E.attributes,G=0,Z=D.getAttributes();for(let V in Z)if(Z[V].location>=0){let Y=R[V],ue=F[V];if(ue===void 0&&(V==="instanceMatrix"&&N.instanceMatrix&&(ue=N.instanceMatrix),V==="instanceColor"&&N.instanceColor&&(ue=N.instanceColor)),Y===void 0||Y.attribute!==ue||ue&&Y.data!==ue.data)return!0;G++}return r.attributesNum!==G||r.index!==C}function g(N,E,D,C){let R={},F=E.attributes,G=0,Z=D.getAttributes();for(let V in Z)if(Z[V].location>=0){let Y=F[V];Y===void 0&&(V==="instanceMatrix"&&N.instanceMatrix&&(Y=N.instanceMatrix),V==="instanceColor"&&N.instanceColor&&(Y=N.instanceColor));let ue={};ue.attribute=Y,Y&&Y.data&&(ue.data=Y.data),R[V]=ue,G++}r.attributes=R,r.attributesNum=G,r.index=C}function y(){let N=r.newAttributes;for(let E=0,D=N.length;E<D;E++)N[E]=0}function m(N){p(N,0)}function p(N,E){let D=r.newAttributes,C=r.enabledAttributes,R=r.attributeDivisors;D[N]=1,C[N]===0&&(i.enableVertexAttribArray(N),C[N]=1),R[N]!==E&&(i.vertexAttribDivisor(N,E),R[N]=E)}function S(){let N=r.newAttributes,E=r.enabledAttributes;for(let D=0,C=E.length;D<C;D++)E[D]!==N[D]&&(i.disableVertexAttribArray(D),E[D]=0)}function b(N,E,D,C,R,F,G){G===!0?i.vertexAttribIPointer(N,E,D,R,F):i.vertexAttribPointer(N,E,D,C,R,F)}function x(N,E,D,C){y();let R=C.attributes,F=D.getAttributes(),G=E.defaultAttributeValues;for(let Z in F){let V=F[Z];if(V.location>=0){let q=R[Z];if(q===void 0&&(Z==="instanceMatrix"&&N.instanceMatrix&&(q=N.instanceMatrix),Z==="instanceColor"&&N.instanceColor&&(q=N.instanceColor)),q!==void 0){let Y=q.normalized,ue=q.itemSize,xe=e.get(q);if(xe===void 0)continue;let Je=xe.buffer,Ke=xe.type,tt=xe.bytesPerElement,J=Ke===i.INT||Ke===i.UNSIGNED_INT||q.gpuType===el;if(q.isInterleavedBufferAttribute){let Q=q.data,ce=Q.stride,Ce=q.offset;if(Q.isInstancedInterleavedBuffer){for(let Ee=0;Ee<V.locationSize;Ee++)p(V.location+Ee,Q.meshPerAttribute);N.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Ee=0;Ee<V.locationSize;Ee++)m(V.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let Ee=0;Ee<V.locationSize;Ee++)b(V.location+Ee,ue/V.locationSize,Ke,Y,ce*tt,(Ce+ue/V.locationSize*Ee)*tt,J)}else{if(q.isInstancedBufferAttribute){for(let Q=0;Q<V.locationSize;Q++)p(V.location+Q,q.meshPerAttribute);N.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Q=0;Q<V.locationSize;Q++)m(V.location+Q);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let Q=0;Q<V.locationSize;Q++)b(V.location+Q,ue/V.locationSize,Ke,Y,ue*tt,ue/V.locationSize*Q*tt,J)}}else if(G!==void 0){let Y=G[Z];if(Y!==void 0)switch(Y.length){case 2:i.vertexAttrib2fv(V.location,Y);break;case 3:i.vertexAttrib3fv(V.location,Y);break;case 4:i.vertexAttrib4fv(V.location,Y);break;default:i.vertexAttrib1fv(V.location,Y)}}}}S()}function M(){A();for(let N in n){let E=n[N];for(let D in E){let C=E[D];for(let R in C){let F=C[R];for(let G in F)h(F[G].object),delete F[G];delete C[R]}}delete n[N]}}function T(N){if(n[N.id]===void 0)return;let E=n[N.id];for(let D in E){let C=E[D];for(let R in C){let F=C[R];for(let G in F)h(F[G].object),delete F[G];delete C[R]}}delete n[N.id]}function I(N){for(let E in n){let D=n[E];for(let C in D){let R=D[C];if(R[N.id]===void 0)continue;let F=R[N.id];for(let G in F)h(F[G].object),delete F[G];delete R[N.id]}}}function _(N){for(let E in n){let D=n[E],C=N.isInstancedMesh===!0?N.id:0,R=D[C];if(R!==void 0){for(let F in R){let G=R[F];for(let Z in G)h(G[Z].object),delete G[Z];delete R[F]}delete D[C],Object.keys(D).length===0&&delete n[E]}}}function A(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:P,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:I,initAttributes:y,enableAttribute:m,disableUnusedAttributes:S}}function wx(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Ax(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(I){return!(I!==cn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){let _=I===Kt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==sn&&I!==bn&&!_&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ge("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:b,maxFragmentUniforms:x,maxSamples:M,samples:T}}function Rx(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Nn,o=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let S=r?0:n,b=S*4,x=p.clippingState||null;l.value=x,x=h(g,u,b,f);for(let M=0;M!==b;++M)x[M]=t[M];p.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=f+y*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,x=f;b!==y;++b,x+=4)a.copy(d[b]).applyMatrix4(S,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}var js=4,Cx=6,Px=20,Ix=256,Ea=new Fi,jd=new Fe,Ih=null,Lh=0,Dh=0,Nh=!1,Lx=new U,ls=new U,er=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Lx}=r;Ih=this._renderer.getRenderTarget(),Lh=this._renderer.getActiveCubeFace(),Dh=this._renderer.getActiveMipmapLevel(),Nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ef(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ih,Lh,Dh),this._renderer.xr.enabled=Nh,e.scissorTest=!1,Ks(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bi||e.mapping===rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ih=this._renderer.getRenderTarget(),Lh=this._renderer.getActiveCubeFace(),Dh=this._renderer.getActiveMipmapLevel(),Nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:Kt,format:cn,colorSpace:Pr,depthBuffer:!1},s=Qd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qd(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Dx(r)),this._blurMaterial=Ux(r,e,t),this._ggxMaterial=Nx(r,e,t)}return s}_compileMaterial(e){let t=new ke(new Ft,e);this._renderer.compile(t,Ea)}_sceneToCubeUV(e,t,n,s,r){let l=new jt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(jd),d.toneMapping=Bn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ke(new ln,new Ii({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,p=!1,S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,p=!0):(m.color.copy(jd),p=!0);for(let b=0;b<6;b++){let x=b%3;x===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):x===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));let M=this._cubeSize;Ks(s,x*M,b>2?M:0,M,M),d.setRenderTarget(s),p&&d.render(y,l),d.render(e,l)}d.toneMapping=f,d.autoClear=u,e.background=S}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Bi||e.mapping===rs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=tf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ef());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Ks(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ea)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:g}=this,y=this._sizeLods[n],m=3*y*(n>g-js?n-g+js:0),p=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,Ks(r,m,p,3*y,2*y),s.setRenderTarget(r),s.render(o,Ea),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Ks(e,m,p,3*y,2*y),s.setRenderTarget(e),s.render(o,Ea)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-js?s-this._lodMax+js:0),u=4*(this._cubeSize-h);Ks(t,d,u,3*h,2*h),a.setRenderTarget(t),a.render(l,Ea)}};function Dx(i){let e=[],t=[],n=i,s=i-js+1+Cx;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,g=new Float32Array(f*u*d),y=new Float32Array(f*u*d);for(let p=0;p<d;p++){let S=p%3*2/3-1,b=p>2?0:-1,x=[S,b,0,S+2/3,b,0,S+2/3,b+1,0,S,b,0,S+2/3,b+1,0,S,b+1,0];g.set(x,f*u*p);for(let M=0;M<u;M++){let T=h[M*2]*2-1,I=h[M*2+1]*2-1;p===0?ls.set(1,I,T):p===1?ls.set(-T,1,-I):p===2?ls.set(-T,I,1):p===3?ls.set(-1,I,-T):p===4?ls.set(-T,-1,I):ls.set(T,I,-1),ls.toArray(y,(p*u+M)*f)}}let m=new Ft;m.setAttribute("position",new Ot(g,f)),m.setAttribute("outputDirection",new Ot(y,f)),t.push(new ke(m,null)),n>js&&n--}return{lodMeshes:t,sizeLods:e}}function Qd(i,e,t){let n=new Vt(i,e,t);return n.texture.mapping=ga,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ks(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Nx(i,e,t){return new It({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ix,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Hl(),fragmentShader:`

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
		`,blending:Gt,depthTest:!1,depthWrite:!1})}function Ux(i,e,t){return new It({name:"SphericalGaussianBlur",defines:{SAMPLES:Px,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Hl(),fragmentShader:`

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
		`,blending:Gt,depthTest:!1,depthWrite:!1})}function ef(){return new It({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hl(),fragmentShader:`

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
		`,blending:Gt,depthTest:!1,depthWrite:!1})}function tf(){return new It({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gt,depthTest:!1,depthWrite:!1})}function Hl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Vl=class extends Vt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Gr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ln(5,5,5),r=new It({name:"CubemapFromEquirect",uniforms:os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yt,blending:Gt});r.uniforms.tEquirect.value=t;let a=new ke(s,r),o=t.minFilter;return t.minFilter===ki&&(t.minFilter=Qt),new qo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function Fx(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Ko||f===jo)if(e.has(u)){let g=e.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let y=new Vl(g.height);return y.fromEquirectangularTexture(i,u),e.set(u,y),u.addEventListener("dispose",c),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,g=f===Ko||f===jo,y=f===Bi||f===rs;if(g||y){let m=t.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new er(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let S=u.image;return g&&S&&S.height>0||y&&S&&l(S)?(n===null&&(n=new er(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===Ko?u.mapping=Bi:f===jo&&(u.mapping=rs),u}function l(u){let f=0,g=6;for(let y=0;y<g;y++)u[y]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Ox(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ji("WebGLRenderer: "+n+" extension not supported."),s}}}function Bx(i,e,t,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)e.update(u[f],i.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,y=0;if(g===void 0)return;if(f!==null){let S=f.array;y=f.version;for(let b=0,x=S.length;b<x;b+=3){let M=S[b+0],T=S[b+1],I=S[b+2];u.push(M,T,T,I,I,M)}}else{let S=g.array;y=g.version;for(let b=0,x=S.length/3-1;b<x;b+=3){let M=b+0,T=b+1,I=b+2;u.push(M,T,T,I,I,M)}}let m=new(g.count>=65535?Fr:Qi)(u,1);m.version=y;let p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function kx(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),t.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let y=0;for(let m=0;m<f;m++)y+=u[m];t.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function zx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Xe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Vx(i,e,t){let n=new WeakMap,s=new Mt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let A=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],b=0;f===!0&&(b=1),g===!0&&(b=2),y===!0&&(b=3);let x=o.attributes.position.count*b,M=1;x>e.maxTextureSize&&(M=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let T=new Float32Array(x*M*4*d),I=new Dr(T,x,M,d);I.type=bn,I.needsUpdate=!0;let _=b*4;for(let P=0;P<d;P++){let N=m[P],E=p[P],D=S[P],C=x*M*4*P;for(let R=0;R<N.count;R++){let F=R*_;f===!0&&(s.fromBufferAttribute(N,R),T[C+F+0]=s.x,T[C+F+1]=s.y,T[C+F+2]=s.z,T[C+F+3]=0),g===!0&&(s.fromBufferAttribute(E,R),T[C+F+4]=s.x,T[C+F+5]=s.y,T[C+F+6]=s.z,T[C+F+7]=0),y===!0&&(s.fromBufferAttribute(D,R),T[C+F+8]=s.x,T[C+F+9]=s.y,T[C+F+10]=s.z,T[C+F+11]=D.itemSize===4?s.w:1)}}u={count:d,texture:I,size:new he(x,M)},n.set(o,u),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Gx(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Hx={[ha]:"LINEAR_TONE_MAPPING",[ua]:"REINHARD_TONE_MAPPING",[da]:"CINEON_TONE_MAPPING",[ss]:"ACES_FILMIC_TONE_MAPPING",[pa]:"AGX_TONE_MAPPING",[ma]:"NEUTRAL_TONE_MAPPING",[fa]:"CUSTOM_TONE_MAPPING"};function Wx(i,e,t,n,s,r){let a=new Vt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Ft;c.setAttribute("position",new ut([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ut([0,2,0,0,2,0],2));let h=new Hs({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new ke(c,h),u=new Fi(-1,1,1,-1,0,1),f=null,g=null,y=!1,m,p=null,S=[],b=!1;this.setSize=function(x,M){a.setSize(x,M),o!==null&&o.setSize(x,M),l!==null&&l.setSize(x,M);for(let T=0;T<S.length;T++){let I=S[T];I.setSize&&I.setSize(x,M)}},this.setEffects=function(x){S=x,b=S.length>0&&S[0].isRenderPass===!0;let M=a.width,T=a.height;S.length>0&&o===null&&(o=new Vt(M,T,{type:Kt,depthBuffer:!1,stencilBuffer:!1}),l=new Vt(M,T,{type:Kt,depthBuffer:!1,stencilBuffer:!1}));for(let I=0;I<S.length;I++){let _=S[I];_.setSize&&_.setSize(M,T)}},this.begin=function(x,M){if(y||x.toneMapping===Bn&&S.length===0)return!1;if(p=M,M!==null){let T=M.width,I=M.height;(a.width!==T||a.height!==I)&&this.setSize(T,I)}return b===!1&&x.setRenderTarget(a),m=x.toneMapping,x.toneMapping=Bn,!0},this.hasRenderPass=function(){return b},this.end=function(x,M){x.toneMapping=m,y=!0;let T=a,I=o;for(let _=0;_<S.length;_++){let A=S[_];A.enabled!==!1&&(A.render(x,I,T,M),A.needsSwap!==!1&&(T=I,I=I===o?l:o))}if(f!==x.outputColorSpace||g!==x.toneMapping){f=x.outputColorSpace,g=x.toneMapping,h.defines={},ot.getTransfer(f)===xt&&(h.defines.SRGB_TRANSFER="");let _=Hx[g];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,x.setRenderTarget(p),x.render(d,u),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Sf=new on,Oh=new jn(1,1),bf=new Dr,Ef=new To,Tf=new Gr,nf=[],sf=[],rf=new Float32Array(16),af=new Float32Array(9),of=new Float32Array(4);function tr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=nf[s];if(r===void 0&&(r=new Float32Array(s),nf[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function $t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Wl(i,e){let t=sf[e];t===void 0&&(t=new Int32Array(e),sf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Xx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function qx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2fv(this.addr,e),Zt(t,e)}}function Yx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;i.uniform3fv(this.addr,e),Zt(t,e)}}function $x(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4fv(this.addr,e),Zt(t,e)}}function Zx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if($t(t,n))return;of.set(n),i.uniformMatrix2fv(this.addr,!1,of),Zt(t,n)}}function Jx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if($t(t,n))return;af.set(n),i.uniformMatrix3fv(this.addr,!1,af),Zt(t,n)}}function Kx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if($t(t,n))return;rf.set(n),i.uniformMatrix4fv(this.addr,!1,rf),Zt(t,n)}}function jx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Qx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2iv(this.addr,e),Zt(t,e)}}function e_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;i.uniform3iv(this.addr,e),Zt(t,e)}}function t_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4iv(this.addr,e),Zt(t,e)}}function n_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function i_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2uiv(this.addr,e),Zt(t,e)}}function s_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;i.uniform3uiv(this.addr,e),Zt(t,e)}}function r_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4uiv(this.addr,e),Zt(t,e)}}function a_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Oh.compareFunction=t.isReversedDepthBuffer()?Bl:Ol,r=Oh):r=Sf,t.setTexture2D(e||r,s)}function o_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Ef,s)}function l_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Tf,s)}function c_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||bf,s)}function h_(i){switch(i){case 5126:return Xx;case 35664:return qx;case 35665:return Yx;case 35666:return $x;case 35674:return Zx;case 35675:return Jx;case 35676:return Kx;case 5124:case 35670:return jx;case 35667:case 35671:return Qx;case 35668:case 35672:return e_;case 35669:case 35673:return t_;case 5125:return n_;case 36294:return i_;case 36295:return s_;case 36296:return r_;case 35678:case 36198:case 36298:case 36306:case 35682:return a_;case 35679:case 36299:case 36307:return o_;case 35680:case 36300:case 36308:case 36293:return l_;case 36289:case 36303:case 36311:case 36292:return c_}}function u_(i,e){i.uniform1fv(this.addr,e)}function d_(i,e){let t=tr(e,this.size,2);i.uniform2fv(this.addr,t)}function f_(i,e){let t=tr(e,this.size,3);i.uniform3fv(this.addr,t)}function p_(i,e){let t=tr(e,this.size,4);i.uniform4fv(this.addr,t)}function m_(i,e){let t=tr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function g_(i,e){let t=tr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function x_(i,e){let t=tr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function __(i,e){i.uniform1iv(this.addr,e)}function v_(i,e){i.uniform2iv(this.addr,e)}function y_(i,e){i.uniform3iv(this.addr,e)}function M_(i,e){i.uniform4iv(this.addr,e)}function S_(i,e){i.uniform1uiv(this.addr,e)}function b_(i,e){i.uniform2uiv(this.addr,e)}function E_(i,e){i.uniform3uiv(this.addr,e)}function T_(i,e){i.uniform4uiv(this.addr,e)}function w_(i,e,t){let n=this.cache,s=e.length,r=Wl(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Zt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Oh:a=Sf;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function A_(i,e,t){let n=this.cache,s=e.length,r=Wl(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Zt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Ef,r[a])}function R_(i,e,t){let n=this.cache,s=e.length,r=Wl(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Zt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Tf,r[a])}function C_(i,e,t){let n=this.cache,s=e.length,r=Wl(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Zt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||bf,r[a])}function P_(i){switch(i){case 5126:return u_;case 35664:return d_;case 35665:return f_;case 35666:return p_;case 35674:return m_;case 35675:return g_;case 35676:return x_;case 5124:case 35670:return __;case 35667:case 35671:return v_;case 35668:case 35672:return y_;case 35669:case 35673:return M_;case 5125:return S_;case 36294:return b_;case 36295:return E_;case 36296:return T_;case 35678:case 36198:case 36298:case 36306:case 35682:return w_;case 35679:case 36299:case 36307:return A_;case 35680:case 36300:case 36308:case 36293:return R_;case 36289:case 36303:case 36311:case 36292:return C_}}var Bh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=h_(t.type)}},kh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=P_(t.type)}},zh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Uh=/(\w+)(\])?(\[|\.)?/g;function lf(i,e){i.seq.push(e),i.map[e.id]=e}function I_(i,e,t){let n=i.name,s=n.length;for(Uh.lastIndex=0;;){let r=Uh.exec(n),a=Uh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){lf(t,c===void 0?new Bh(o,i,e):new kh(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new zh(o),lf(t,d)),t=d}}}var Qs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);I_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function cf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var L_=37297,D_=0;function N_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var hf=new Qe;function U_(i){ot._getMatrix(hf,ot.workingColorSpace,i);let e=`mat3( ${hf.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(i)){case Ir:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function uf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+N_(i.getShaderSource(e),o)}else return r}function F_(i,e){let t=U_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var O_={[ha]:"Linear",[ua]:"Reinhard",[da]:"Cineon",[ss]:"ACESFilmic",[pa]:"AgX",[ma]:"Neutral",[fa]:"Custom"};function B_(i,e){let t=O_[e];return t===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var zl=new U;function k_(){ot.getLuminanceCoefficients(zl);let i=zl.x.toFixed(4),e=zl.y.toFixed(4),t=zl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function z_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wa).join(`
`)}function V_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function G_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function wa(i){return i!==""}function df(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ff(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var H_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vh(i){return i.replace(H_,X_)}var W_=new Map;function X_(i,e){let t=st[e];if(t===void 0){let n=W_.get(e);if(n!==void 0)t=st[n],Ge('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Vh(t)}var q_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pf(i){return i.replace(q_,Y_)}function Y_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var $_={[ns]:"SHADOWMAP_TYPE_PCF",[Ys]:"SHADOWMAP_TYPE_VSM"};function Z_(i){return $_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var J_={[Bi]:"ENVMAP_TYPE_CUBE",[rs]:"ENVMAP_TYPE_CUBE",[ga]:"ENVMAP_TYPE_CUBE_UV"};function K_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":J_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var j_={[rs]:"ENVMAP_MODE_REFRACTION"};function Q_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":j_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ev={[Jo]:"ENVMAP_BLENDING_MULTIPLY",[Ad]:"ENVMAP_BLENDING_MIX",[Rd]:"ENVMAP_BLENDING_ADD"};function tv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":ev[i.combine]||"ENVMAP_BLENDING_NONE"}function nv(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function iv(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Z_(t),c=K_(t),h=Q_(t),d=tv(t),u=nv(t),f=z_(t),g=V_(r),y=s.createProgram(),m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(wa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(wa).join(`
`),p.length>0&&(p+=`
`)):(m=[mf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wa).join(`
`),p=[mf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bn?"#define TONE_MAPPING":"",t.toneMapping!==Bn?st.tonemapping_pars_fragment:"",t.toneMapping!==Bn?B_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,F_("linearToOutputTexel",t.outputColorSpace),k_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wa).join(`
`)),a=Vh(a),a=df(a,t),a=ff(a,t),o=Vh(o),o=df(o,t),o=ff(o,t),a=pf(a),o=pf(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=S+m+a,x=S+p+o,M=cf(s,s.VERTEX_SHADER,b),T=cf(s,s.FRAGMENT_SHADER,x);s.attachShader(y,M),s.attachShader(y,T),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function I(N){if(i.debug.checkShaderErrors){let E=s.getProgramInfoLog(y)||"",D=s.getShaderInfoLog(M)||"",C=s.getShaderInfoLog(T)||"",R=E.trim(),F=D.trim(),G=C.trim(),Z=!0,V=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,M,T);else{let q=uf(s,M,"vertex"),Y=uf(s,T,"fragment");Xe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+R+`
`+q+`
`+Y)}else R!==""?Ge("WebGLProgram: Program Info Log:",R):(F===""||G==="")&&(V=!1);V&&(N.diagnostics={runnable:Z,programLog:R,vertexShader:{log:F,prefix:m},fragmentShader:{log:G,prefix:p}})}s.deleteShader(M),s.deleteShader(T),_=new Qs(s,y),A=G_(s,y)}let _;this.getUniforms=function(){return _===void 0&&I(this),_};let A;this.getAttributes=function(){return A===void 0&&I(this),A};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(y,L_)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=D_++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=M,this.fragmentShader=T,this}var sv=0,Gh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Hh(e),t.set(e,n)),n}},Hh=class{constructor(e){this.id=sv++,this.code=e,this.usedTimes=0}};function rv(i){return i===Vi||i===Sa||i===ba}function av(i,e,t,n,s,r){let a=new Nr,o=new Gh,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function y(_,A,P,N,E,D){let C=N.fog,R=E.geometry,F=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?N.environment:null,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,Z=e.get(_.envMap||F,G),V=Z&&Z.mapping===ga?Z.image.height:null,q=f[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&Ge("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let Y=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,ue=Y!==void 0?Y.length:0,xe=0;R.morphAttributes.position!==void 0&&(xe=1),R.morphAttributes.normal!==void 0&&(xe=2),R.morphAttributes.color!==void 0&&(xe=3);let Je,Ke,tt,J;if(q){let Tt=ni[q];Je=Tt.vertexShader,Ke=Tt.fragmentShader}else{Je=_.vertexShader,Ke=_.fragmentShader;let Tt=o.getVertexShaderStage(_),_t=o.getFragmentShaderStage(_);o.update(_,Tt,_t),tt=Tt.id,J=_t.id}let Q=i.getRenderTarget(),ce=i.state.buffers.depth.getReversed(),Ce=E.isInstancedMesh===!0,Ee=E.isBatchedMesh===!0,He=!!_.map,pt=!!_.matcap,ne=!!Z,re=!!_.aoMap,ae=!!_.lightMap,oe=!!_.bumpMap&&_.wireframe===!1,de=!!_.normalMap,Ve=!!_.displacementMap,Oe=!!_.emissiveMap,We=!!_.metalnessMap,Ye=!!_.roughnessMap,O=_.anisotropy>0,dt=_.clearcoat>0,nt=_.dispersion>0,L=_.retroreflectivity>0,v=_.iridescence>0,z=_.sheen>0,H=_.transmission>0,K=O&&!!_.anisotropyMap,le=dt&&!!_.clearcoatMap,fe=dt&&!!_.clearcoatNormalMap,j=dt&&!!_.clearcoatRoughnessMap,ie=v&&!!_.iridescenceMap,ge=v&&!!_.iridescenceThicknessMap,Ne=z&&!!_.sheenColorMap,me=z&&!!_.sheenRoughnessMap,pe=!!_.specularMap,Pe=!!_.specularColorMap,Be=!!_.specularIntensityMap,$e=H&&!!_.transmissionMap,k=H&&!!_.thicknessMap,_e=!!_.gradientMap,ee=!!_.alphaMap,ve=_.alphaTest>0,Te=!!_.alphaHash,se=!!_.extensions,ze=Bn;_.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(ze=i.toneMapping);let De={shaderID:q,shaderType:_.type,shaderName:_.name,vertexShader:Je,fragmentShader:Ke,defines:_.defines,customVertexShaderID:tt,customFragmentShaderID:J,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:Ee,batchingColor:Ee&&E._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&E.instanceColor!==null,instancingMorph:Ce&&E.morphTexture!==null,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:ot.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:He,matcap:pt,envMap:ne,envMapMode:ne&&Z.mapping,envMapCubeUVHeight:V,aoMap:re,lightMap:ae,bumpMap:oe,normalMap:de,displacementMap:Ve,emissiveMap:Oe,normalMapObjectSpace:de&&_.normalMapType===Ld,normalMapTangentSpace:de&&_.normalMapType===Js,packedNormalMap:de&&_.normalMapType===Js&&rv(_.normalMap.format),metalnessMap:We,roughnessMap:Ye,anisotropy:O,anisotropyMap:K,clearcoat:dt,clearcoatMap:le,clearcoatNormalMap:fe,clearcoatRoughnessMap:j,dispersion:nt,retroreflection:L,iridescence:v,iridescenceMap:ie,iridescenceThicknessMap:ge,sheen:z,sheenColorMap:Ne,sheenRoughnessMap:me,specularMap:pe,specularColorMap:Pe,specularIntensityMap:Be,transmission:H,transmissionMap:$e,thicknessMap:k,gradientMap:_e,opaque:_.transparent===!1&&_.blending===$s&&_.alphaToCoverage===!1,alphaMap:ee,alphaTest:ve,alphaHash:Te,combine:_.combine,mapUv:He&&g(_.map.channel),aoMapUv:re&&g(_.aoMap.channel),lightMapUv:ae&&g(_.lightMap.channel),bumpMapUv:oe&&g(_.bumpMap.channel),normalMapUv:de&&g(_.normalMap.channel),displacementMapUv:Ve&&g(_.displacementMap.channel),emissiveMapUv:Oe&&g(_.emissiveMap.channel),metalnessMapUv:We&&g(_.metalnessMap.channel),roughnessMapUv:Ye&&g(_.roughnessMap.channel),anisotropyMapUv:K&&g(_.anisotropyMap.channel),clearcoatMapUv:le&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:fe&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:me&&g(_.sheenRoughnessMap.channel),specularMapUv:pe&&g(_.specularMap.channel),specularColorMapUv:Pe&&g(_.specularColorMap.channel),specularIntensityMapUv:Be&&g(_.specularIntensityMap.channel),transmissionMapUv:$e&&g(_.transmissionMap.channel),thicknessMapUv:k&&g(_.thicknessMap.channel),alphaMapUv:ee&&g(_.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(de||O),vertexNormals:!!R.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:E.isPoints===!0&&!!R.attributes.uv&&(He||ee),fog:!!C,useFog:_.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||R.attributes.normal===void 0&&de===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ce,skinning:E.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:xe,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:D.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:ze,decodeVideoTexture:He&&_.map.isVideoTexture===!0&&ot.getTransfer(_.map.colorSpace)===xt,decodeVideoTextureEmissive:Oe&&_.emissiveMap.isVideoTexture===!0&&ot.getTransfer(_.emissiveMap.colorSpace)===xt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Qn,flipSided:_.side===Yt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:se&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&_.extensions.multiDraw===!0||Ee)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return De.vertexUv1s=l.has(1),De.vertexUv2s=l.has(2),De.vertexUv3s=l.has(3),l.clear(),De}function m(_){let A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(let P in _.defines)A.push(P),A.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(p(A,_),S(A,_),A.push(i.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function p(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numSunLights),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numSunLightShadows),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function S(_,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function b(_){let A=f[_.type],P;if(A){let N=ni[A];P=pn.clone(N.uniforms)}else P=_.uniforms;return P}function x(_,A){let P=h.get(A);return P!==void 0?++P.usedTimes:(P=new iv(i,A,_,s),c.push(P),h.set(A,P)),P}function M(_){if(--_.usedTimes===0){let A=c.indexOf(_);c[A]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function T(_){o.remove(_)}function I(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:b,acquireProgram:x,releaseProgram:M,releaseShaderCache:T,programs:c,dispose:I}}function ov(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function lv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function gf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function xf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,y,m,p){let S=i[e];return S===void 0?(S={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:m,group:p},i[e]=S):(S.id=u.id,S.object=u,S.geometry=f,S.material=g,S.materialVariant=a(u),S.groupOrder=y,S.renderOrder=u.renderOrder,S.z=m,S.group=p),e++,S}function l(u,f,g,y,m,p,S){S.reversedDepth===!0&&(m=-m);let b=o(u,f,g,y,m,p);g.transmission>0?n.push(b):g.transparent===!0?s.push(b):t.push(b)}function c(u,f,g,y,m,p){let S=o(u,f,g,y,m,p);g.transmission>0?n.unshift(S):g.transparent===!0?s.unshift(S):t.unshift(S)}function h(u,f){t.length>1&&t.sort(u||lv),n.length>1&&n.sort(f||gf),s.length>1&&s.sort(f||gf)}function d(){for(let u=e,f=i.length;u<f;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function cv(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new xf,i.set(n,[a])):s>=r.length?(a=new xf,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function hv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new U,color:new Fe};break;case"SpotLight":t={position:new U,direction:new U,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function uv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var dv=0;function fv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function pv(i){let e=new hv,t=uv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let s=new U,r=new et,a=new et;function o(c){let h=0,d=0,u=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,S=0,b=0,x=0,M=0,T=0,I=0,_=0,A=0,P=0;c.sort(fv);for(let E=0,D=c.length;E<D;E++){let C=c[E],R=C.color,F=C.intensity,G=C.distance,Z=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Vi?Z=C.shadow.map.texture:Z=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=R.r*F,d+=R.g*F,u+=R.b*F;else if(C.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(C.sh.coefficients[V],F);P++}else if(C.isSunLight){let V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let q=C.shadow,Y=t.get(C);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize.copy(q.mapSize).multiply(q.getFrameExtents()),n.sunShadow[g]=Y,n.sunShadowMap[g]=Z;let ue=q.getViewportCount();for(let xe=0;xe<ue;xe++)n.sunShadowMatrix[y+xe]=q.getMatrix(xe),n.sunShadowCascade[y+xe]=q._cascadeData[xe];y+=ue,g++}n.sun[f]=V,f++}else if(C.isDirectionalLight){let V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let q=C.shadow,Y=t.get(C);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,n.directionalShadow[m]=Y,n.directionalShadowMap[m]=Z,n.directionalShadowMatrix[m]=C.shadow.matrix,M++}n.directional[m]=V,m++}else if(C.isSpotLight){let V=e.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(R).multiplyScalar(F),V.distance=G,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,n.spot[S]=V;let q=C.shadow;if(C.map&&(n.spotLightMap[_]=C.map,_++,q.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[S]=q.matrix,C.castShadow){let Y=t.get(C);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,n.spotShadow[S]=Y,n.spotShadowMap[S]=Z,I++}S++}else if(C.isRectAreaLight){let V=e.get(C);V.color.copy(R).multiplyScalar(F),V.halfWidth.set(C.width*.5,0,0),V.halfHeight.set(0,C.height*.5,0),n.rectArea[b]=V,b++}else if(C.isPointLight){let V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),V.distance=C.distance,V.decay=C.decay,C.castShadow){let q=C.shadow,Y=t.get(C);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,Y.shadowCameraNear=q.camera.near,Y.shadowCameraFar=q.camera.far,n.pointShadow[p]=Y,n.pointShadowMap[p]=Z,n.pointShadowMatrix[p]=C.shadow.matrix,T++}n.point[p]=V,p++}else if(C.isHemisphereLight){let V=e.get(C);V.skyColor.copy(C.color).multiplyScalar(F),V.groundColor.copy(C.groundColor).multiplyScalar(F),n.hemi[x]=V,x++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let N=n.hash;(N.sunLength!==f||N.directionalLength!==m||N.pointLength!==p||N.spotLength!==S||N.rectAreaLength!==b||N.hemiLength!==x||N.numSunShadows!==g||N.numDirectionalShadows!==M||N.numPointShadows!==T||N.numSpotShadows!==I||N.numSpotMaps!==_||N.numLightProbes!==P)&&(n.sun.length=f,n.directional.length=m,n.spot.length=S,n.rectArea.length=b,n.point.length=p,n.hemi.length=x,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=I,n.spotShadowMap.length=I,n.spotLightMatrix.length=I+_-A,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=P,N.sunLength=f,N.directionalLength=m,N.pointLength=p,N.spotLength=S,N.rectAreaLength=b,N.hemiLength=x,N.numSunShadows=g,N.numDirectionalShadows=M,N.numPointShadows=T,N.numSpotShadows=I,N.numSpotMaps=_,N.numLightProbes=P,n.version=dv++)}function l(c,h){let d=0,u=0,f=0,g=0,y=0,m=0,p=h.matrixWorldInverse;for(let S=0,b=c.length;S<b;S++){let x=c[S];if(x.isSunLight){let M=n.sun[d];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(p),d++}else if(x.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),u++}else if(x.isSpotLight){let M=n.spot[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),g++}else if(x.isRectAreaLight){let M=n.rectArea[y];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),a.identity(),r.copy(x.matrixWorld),r.premultiply(p),a.extractRotation(r),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),y++}else if(x.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){let M=n.hemi[m];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function _f(i){let e=new pv(i),t=[],n=[],s=[];function r(u){d.camera=u,t.length=0,n.length=0,s.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function mv(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new _f(i),e.set(s,[o])):r>=a.length?(o=new _f(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var gv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xv=`uniform sampler2D shadow_pass;
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
}`,_v=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],vv=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],vf=new et,Ta=new U,Fh=new U;function yv(i,e,t){let n=new Bs,s=new he,r=new he,a=new Mt,o=new No,l=new Uo,c={},h=t.maxTextureSize,d={[Oi]:Yt,[Yt]:Oi,[Qn]:Qn},u=new It({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:gv,fragmentShader:xv}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ft;g.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new ke(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ns;let p=this.type;this.render=function(T,I,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===dd&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ns);let A=i.getRenderTarget(),P=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),E=i.state;E.setBlending(Gt),E.buffers.depth.getReversed()===!0?E.buffers.color.setClear(0,0,0,0):E.buffers.color.setClear(1,1,1,1),E.buffers.depth.setTest(!0),E.setScissorTest(!1);let D=p!==this.type;D&&I.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(R=>R.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,R=T.length;C<R;C++){let F=T[C],G=F.shadow;if(G===void 0){Ge("WebGLShadowMap:",F,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let Z=G.getFrameExtents();s.multiply(Z),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,G.mapSize.y=r.y));let V=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=V,G.map===null||D===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Ys){if(F.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Vt(s.x,s.y,{format:Vi,type:Kt,minFilter:Qt,magFilter:Qt,generateMipmaps:!1}),G.map.texture.name=F.name+".shadowMap",G.map.depthTexture=new jn(s.x,s.y,bn),G.map.depthTexture.name=F.name+".shadowMapDepth",G.map.depthTexture.format=Xn,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=zt,G.map.depthTexture.magFilter=zt}else F.isPointLight?(G.map=new Vl(s.x),G.map.depthTexture=new wo(s.x,kn)):(G.map=new Vt(s.x,s.y),G.map.depthTexture=new jn(s.x,s.y,kn)),G.map.depthTexture.name=F.name+".shadowMap",G.map.depthTexture.format=Xn,this.type===ns?(G.map.depthTexture.compareFunction=V?Bl:Ol,G.map.depthTexture.minFilter=Qt,G.map.depthTexture.magFilter=Qt):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=zt,G.map.depthTexture.magFilter=zt);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let q=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();F.isPointLight!==!0&&G.updateMatrices(F,_);for(let Y=0;Y<q;Y++){let ue=G.getCamera(Y);if(F.isPointLight){let xe=G.camera,Je=G.matrix,Ke=F.distance||xe.far;Ke!==xe.far&&(xe.far=Ke,xe.updateProjectionMatrix()),Ta.setFromMatrixPosition(F.matrixWorld),xe.position.copy(Ta),Fh.copy(xe.position),Fh.add(_v[Y]),xe.up.copy(vv[Y]),xe.lookAt(Fh),xe.updateMatrixWorld(),Je.makeTranslation(-Ta.x,-Ta.y,-Ta.z),vf.multiplyMatrices(xe.projectionMatrix,xe.matrixWorldInverse),G._frustum.setFromProjectionMatrix(vf,xe.coordinateSystem,xe.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,Y),i.clear();else{Y===0&&(i.setRenderTarget(G.map),i.clear());let xe=G.getViewport(Y);a.set(r.x*xe.x,r.y*xe.y,r.x*xe.z,r.y*xe.w),E.viewport(a)}n=G.getFrustum(Y),x(I,_,ue,F,this.type)}G.isPointLightShadow!==!0&&this.type===Ys&&S(G,_),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(A,P,N)};function S(T,I){let _=e.update(y);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new Vt(s.x,s.y,{format:Vi,type:Kt}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(I,null,_,u,y,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(I,null,_,f,y,null)}function b(T,I,_,A){let P=null,N=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)P=N;else if(P=_.isPointLight===!0?l:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let E=P.uuid,D=I.uuid,C=c[E];C===void 0&&(C={},c[E]=C);let R=C[D];R===void 0&&(R=P.clone(),C[D]=R,I.addEventListener("dispose",M)),P=R}if(P.visible=I.visible,P.wireframe=I.wireframe,A===Ys?P.side=I.shadowSide!==null?I.shadowSide:I.side:P.side=I.shadowSide!==null?I.shadowSide:d[I.side],P.alphaMap=I.alphaMap,P.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,P.map=I.map,P.clipShadows=I.clipShadows,P.clippingPlanes=I.clippingPlanes,P.clipIntersection=I.clipIntersection,P.displacementMap=I.displacementMap,P.displacementScale=I.displacementScale,P.displacementBias=I.displacementBias,P.wireframeLinewidth=I.wireframeLinewidth,P.linewidth=I.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let E=i.properties.get(P);E.light=_}return P}function x(T,I,_,A,P){if(T.visible===!1)return;if(T.layers.test(I.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===Ys)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);let D=e.update(T),C=T.material;if(Array.isArray(C)){let R=D.groups;for(let F=0,G=R.length;F<G;F++){let Z=R[F],V=C[Z.materialIndex];if(V&&V.visible){let q=b(T,V,A,P);T.onBeforeShadow(i,T,I,_,D,q,Z),i.renderBufferDirect(_,null,D,q,T,Z),T.onAfterShadow(i,T,I,_,D,q,Z)}}}else if(C.visible){let R=b(T,C,A,P);T.onBeforeShadow(i,T,I,_,D,R,null),i.renderBufferDirect(_,null,D,R,T,null),T.onAfterShadow(i,T,I,_,D,R,null)}}let E=T.children;for(let D=0,C=E.length;D<C;D++)x(E[D],I,_,A,P)}function M(T){T.target.removeEventListener("dispose",M);for(let _ in c){let A=c[_],P=T.target.uuid;P in A&&(A[P].dispose(),delete A[P])}}}function Mv(i,e){function t(){let k=!1,_e=new Mt,ee=null,ve=new Mt(0,0,0,0);return{setMask:function(Te){ee!==Te&&!k&&(i.colorMask(Te,Te,Te,Te),ee=Te)},setLocked:function(Te){k=Te},setClear:function(Te,se,ze,De,Tt){Tt===!0&&(Te*=De,se*=De,ze*=De),_e.set(Te,se,ze,De),ve.equals(_e)===!1&&(i.clearColor(Te,se,ze,De),ve.copy(_e))},reset:function(){k=!1,ee=null,ve.set(-1,0,0,0)}}}function n(){let k=!1,_e=!1,ee=null,ve=null,Te=null;return{setReversed:function(se){if(_e!==se){let ze=e.get("EXT_clip_control");se?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),_e=se;let De=Te;Te=null,this.setClear(De)}},getReversed:function(){return _e},setTest:function(se){se?Q(i.DEPTH_TEST):ce(i.DEPTH_TEST)},setMask:function(se){ee!==se&&!k&&(i.depthMask(se),ee=se)},setFunc:function(se){if(_e&&(se=Wd[se]),ve!==se){switch(se){case fo:i.depthFunc(i.NEVER);break;case po:i.depthFunc(i.ALWAYS);break;case mo:i.depthFunc(i.LESS);break;case Ls:i.depthFunc(i.LEQUAL);break;case go:i.depthFunc(i.EQUAL);break;case xo:i.depthFunc(i.GEQUAL);break;case _o:i.depthFunc(i.GREATER);break;case vo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ve=se}},setLocked:function(se){k=se},setClear:function(se){Te!==se&&(Te=se,_e&&(se=1-se),i.clearDepth(se))},reset:function(){k=!1,ee=null,ve=null,Te=null,_e=!1}}}function s(){let k=!1,_e=null,ee=null,ve=null,Te=null,se=null,ze=null,De=null,Tt=null;return{setTest:function(_t){k||(_t?Q(i.STENCIL_TEST):ce(i.STENCIL_TEST))},setMask:function(_t){_e!==_t&&!k&&(i.stencilMask(_t),_e=_t)},setFunc:function(_t,Pn,Vn){(ee!==_t||ve!==Pn||Te!==Vn)&&(i.stencilFunc(_t,Pn,Vn),ee=_t,ve=Pn,Te=Vn)},setOp:function(_t,Pn,Vn){(se!==_t||ze!==Pn||De!==Vn)&&(i.stencilOp(_t,Pn,Vn),se=_t,ze=Pn,De=Vn)},setLocked:function(_t){k=_t},setClear:function(_t){Tt!==_t&&(i.clearStencil(_t),Tt=_t)},reset:function(){k=!1,_e=null,ee=null,ve=null,Te=null,se=null,ze=null,De=null,Tt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],y=null,m=!1,p=null,S=null,b=null,x=null,M=null,T=null,I=null,_=new Fe(0,0,0),A=0,P=!1,N=null,E=null,D=null,C=null,R=null,F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,Z=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(V)[1]),G=Z>=1):V.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),G=Z>=2);let q=null,Y={},ue=i.getParameter(i.SCISSOR_BOX),xe=i.getParameter(i.VIEWPORT),Je=new Mt().fromArray(ue),Ke=new Mt().fromArray(xe);function tt(k,_e,ee,ve){let Te=new Uint8Array(4),se=i.createTexture();i.bindTexture(k,se),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ze=0;ze<ee;ze++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(_e,0,i.RGBA,1,1,ve,0,i.RGBA,i.UNSIGNED_BYTE,Te):i.texImage2D(_e+ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Te);return se}let J={};J[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),a.setFunc(Ls),oe(!1),de(ah),Q(i.CULL_FACE),re(Gt);function Q(k){h[k]!==!0&&(i.enable(k),h[k]=!0)}function ce(k){h[k]!==!1&&(i.disable(k),h[k]=!1)}function Ce(k,_e){return u[k]!==_e?(i.bindFramebuffer(k,_e),u[k]=_e,k===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=_e),k===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=_e),!0):!1}function Ee(k,_e){let ee=g,ve=!1;if(k){ee=f.get(_e),ee===void 0&&(ee=[],f.set(_e,ee));let Te=k.textures;if(ee.length!==Te.length||ee[0]!==i.COLOR_ATTACHMENT0){for(let se=0,ze=Te.length;se<ze;se++)ee[se]=i.COLOR_ATTACHMENT0+se;ee.length=Te.length,ve=!0}}else ee[0]!==i.BACK&&(ee[0]=i.BACK,ve=!0);ve&&i.drawBuffers(ee)}function He(k){return y!==k?(i.useProgram(k),y=k,!0):!1}let pt={[Cn]:i.FUNC_ADD,[fd]:i.FUNC_SUBTRACT,[pd]:i.FUNC_REVERSE_SUBTRACT};pt[md]=i.MIN,pt[gd]=i.MAX;let ne={[is]:i.ZERO,[xd]:i.ONE,[_d]:i.SRC_COLOR,[hh]:i.SRC_ALPHA,[Sd]:i.SRC_ALPHA_SATURATE,[ca]:i.DST_COLOR,[la]:i.DST_ALPHA,[vd]:i.ONE_MINUS_SRC_COLOR,[uh]:i.ONE_MINUS_SRC_ALPHA,[Md]:i.ONE_MINUS_DST_COLOR,[yd]:i.ONE_MINUS_DST_ALPHA,[bd]:i.CONSTANT_COLOR,[Ed]:i.ONE_MINUS_CONSTANT_COLOR,[Td]:i.CONSTANT_ALPHA,[wd]:i.ONE_MINUS_CONSTANT_ALPHA};function re(k,_e,ee,ve,Te,se,ze,De,Tt,_t){if(k===Gt){m===!0&&(ce(i.BLEND),m=!1);return}if(m===!1&&(Q(i.BLEND),m=!0),k!==Zo){if(k!==p||_t!==P){if((S!==Cn||M!==Cn)&&(i.blendEquation(i.FUNC_ADD),S=Cn,M=Cn),_t)switch(k){case $s:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oh:i.blendFunc(i.ONE,i.ONE);break;case lh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ch:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Xe("WebGLState: Invalid blending: ",k);break}else switch(k){case $s:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case lh:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ch:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",k);break}b=null,x=null,T=null,I=null,_.set(0,0,0),A=0,p=k,P=_t}return}Te=Te||_e,se=se||ee,ze=ze||ve,(_e!==S||Te!==M)&&(i.blendEquationSeparate(pt[_e],pt[Te]),S=_e,M=Te),(ee!==b||ve!==x||se!==T||ze!==I)&&(i.blendFuncSeparate(ne[ee],ne[ve],ne[se],ne[ze]),b=ee,x=ve,T=se,I=ze),(De.equals(_)===!1||Tt!==A)&&(i.blendColor(De.r,De.g,De.b,Tt),_.copy(De),A=Tt),p=k,P=!1}function ae(k,_e){k.side===Qn?ce(i.CULL_FACE):Q(i.CULL_FACE);let ee=k.side===Yt;_e&&(ee=!ee),oe(ee),k.blending===$s&&k.transparent===!1?re(Gt):re(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);let ve=k.stencilWrite;o.setTest(ve),ve&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Oe(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function oe(k){N!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),N=k)}function de(k){k!==hd?(Q(i.CULL_FACE),k!==E&&(k===ah?i.cullFace(i.BACK):k===ud?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ce(i.CULL_FACE),E=k}function Ve(k){k!==D&&(G&&i.lineWidth(k),D=k)}function Oe(k,_e,ee){k?(Q(i.POLYGON_OFFSET_FILL),(C!==_e||R!==ee)&&(C=_e,R=ee,a.getReversed()&&(_e=-_e),i.polygonOffset(_e,ee))):ce(i.POLYGON_OFFSET_FILL)}function We(k){k?Q(i.SCISSOR_TEST):ce(i.SCISSOR_TEST)}function Ye(k){k===void 0&&(k=i.TEXTURE0+F-1),q!==k&&(i.activeTexture(k),q=k)}function O(k,_e,ee){ee===void 0&&(q===null?ee=i.TEXTURE0+F-1:ee=q);let ve=Y[ee];ve===void 0&&(ve={type:void 0,texture:void 0},Y[ee]=ve),(ve.type!==k||ve.texture!==_e)&&(q!==ee&&(i.activeTexture(ee),q=ee),i.bindTexture(k,_e||J[k]),ve.type=k,ve.texture=_e)}function dt(){let k=Y[q];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function nt(){try{i.compressedTexImage2D(...arguments)}catch(k){Xe("WebGLState:",k)}}function L(){try{i.compressedTexImage3D(...arguments)}catch(k){Xe("WebGLState:",k)}}function v(){try{i.texSubImage2D(...arguments)}catch(k){Xe("WebGLState:",k)}}function z(){try{i.texSubImage3D(...arguments)}catch(k){Xe("WebGLState:",k)}}function H(){try{i.compressedTexSubImage2D(...arguments)}catch(k){Xe("WebGLState:",k)}}function K(){try{i.compressedTexSubImage3D(...arguments)}catch(k){Xe("WebGLState:",k)}}function le(){try{i.texStorage2D(...arguments)}catch(k){Xe("WebGLState:",k)}}function fe(){try{i.texStorage3D(...arguments)}catch(k){Xe("WebGLState:",k)}}function j(){try{i.texImage2D(...arguments)}catch(k){Xe("WebGLState:",k)}}function ie(){try{i.texImage3D(...arguments)}catch(k){Xe("WebGLState:",k)}}function ge(k){return d[k]!==void 0?d[k]:i.getParameter(k)}function Ne(k,_e){d[k]!==_e&&(i.pixelStorei(k,_e),d[k]=_e)}function me(k){Je.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),Je.copy(k))}function pe(k){Ke.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),Ke.copy(k))}function Pe(k,_e){let ee=c.get(_e);ee===void 0&&(ee=new WeakMap,c.set(_e,ee));let ve=ee.get(k);ve===void 0&&(ve=i.getUniformBlockIndex(_e,k.name),ee.set(k,ve))}function Be(k,_e){let ve=c.get(_e).get(k);l.get(_e)!==ve&&(i.uniformBlockBinding(_e,ve,k.__bindingPointIndex),l.set(_e,ve))}function $e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},q=null,Y={},u={},f=new WeakMap,g=[],y=null,m=!1,p=null,S=null,b=null,x=null,M=null,T=null,I=null,_=new Fe(0,0,0),A=0,P=!1,N=null,E=null,D=null,C=null,R=null,Je.set(0,0,i.canvas.width,i.canvas.height),Ke.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:ce,bindFramebuffer:Ce,drawBuffers:Ee,useProgram:He,setBlending:re,setMaterial:ae,setFlipSided:oe,setCullFace:de,setLineWidth:Ve,setPolygonOffset:Oe,setScissorTest:We,activeTexture:Ye,bindTexture:O,unbindTexture:dt,compressedTexImage2D:nt,compressedTexImage3D:L,texImage2D:j,texImage3D:ie,pixelStorei:Ne,getParameter:ge,updateUBOMapping:Pe,uniformBlockBinding:Be,texStorage2D:le,texStorage3D:fe,texSubImage2D:v,texSubImage3D:z,compressedTexSubImage2D:H,compressedTexSubImage3D:K,scissor:me,viewport:pe,reset:$e}}function Sv(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(L,v){return g?new OffscreenCanvas(L,v):Lr("canvas")}function m(L,v,z){let H=1,K=nt(L);if((K.width>z||K.height>z)&&(H=z/Math.max(K.width,K.height)),H<1)if(typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&L instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&L instanceof ImageBitmap||typeof VideoFrame!="undefined"&&L instanceof VideoFrame){let le=Math.floor(H*K.width),fe=Math.floor(H*K.height);u===void 0&&(u=y(le,fe));let j=v?y(le,fe):u;return j.width=le,j.height=fe,j.getContext("2d").drawImage(L,0,0,le,fe),Ge("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+le+"x"+fe+")."),j}else return"data"in L&&Ge("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),L;return L}function p(L){return L.generateMipmaps}function S(L){i.generateMipmap(L)}function b(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(L,v,z,H,K,le=!1){if(L!==null){if(i[L]!==void 0)return i[L];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let fe;H&&(fe=e.get("EXT_texture_norm16"),fe||Ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=v;if(v===i.RED&&(z===i.FLOAT&&(j=i.R32F),z===i.HALF_FLOAT&&(j=i.R16F),z===i.UNSIGNED_BYTE&&(j=i.R8),z===i.UNSIGNED_SHORT&&fe&&(j=fe.R16_EXT),z===i.SHORT&&fe&&(j=fe.R16_SNORM_EXT)),v===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(j=i.R8UI),z===i.UNSIGNED_SHORT&&(j=i.R16UI),z===i.UNSIGNED_INT&&(j=i.R32UI),z===i.BYTE&&(j=i.R8I),z===i.SHORT&&(j=i.R16I),z===i.INT&&(j=i.R32I)),v===i.RG&&(z===i.FLOAT&&(j=i.RG32F),z===i.HALF_FLOAT&&(j=i.RG16F),z===i.UNSIGNED_BYTE&&(j=i.RG8),z===i.UNSIGNED_SHORT&&fe&&(j=fe.RG16_EXT),z===i.SHORT&&fe&&(j=fe.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(j=i.RG8UI),z===i.UNSIGNED_SHORT&&(j=i.RG16UI),z===i.UNSIGNED_INT&&(j=i.RG32UI),z===i.BYTE&&(j=i.RG8I),z===i.SHORT&&(j=i.RG16I),z===i.INT&&(j=i.RG32I)),v===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(j=i.RGB8UI),z===i.UNSIGNED_SHORT&&(j=i.RGB16UI),z===i.UNSIGNED_INT&&(j=i.RGB32UI),z===i.BYTE&&(j=i.RGB8I),z===i.SHORT&&(j=i.RGB16I),z===i.INT&&(j=i.RGB32I)),v===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),z===i.UNSIGNED_INT&&(j=i.RGBA32UI),z===i.BYTE&&(j=i.RGBA8I),z===i.SHORT&&(j=i.RGBA16I),z===i.INT&&(j=i.RGBA32I)),v===i.RGB&&(z===i.UNSIGNED_SHORT&&fe&&(j=fe.RGB16_EXT),z===i.SHORT&&fe&&(j=fe.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),v===i.RGBA){let ie=le?Ir:ot.getTransfer(K);z===i.FLOAT&&(j=i.RGBA32F),z===i.HALF_FLOAT&&(j=i.RGBA16F),z===i.UNSIGNED_BYTE&&(j=ie===xt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&fe&&(j=fe.RGBA16_EXT),z===i.SHORT&&fe&&(j=fe.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function M(L,v){let z;return L?v===null||v===kn||v===zi?z=i.DEPTH24_STENCIL8:v===bn?z=i.DEPTH32F_STENCIL8:v===Zs&&(z=i.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===kn||v===zi?z=i.DEPTH_COMPONENT24:v===bn?z=i.DEPTH_COMPONENT32F:v===Zs&&(z=i.DEPTH_COMPONENT16),z}function T(L,v){return p(L)===!0||L.isFramebufferTexture&&L.minFilter!==zt&&L.minFilter!==Qt?Math.log2(Math.max(v.width,v.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?v.mipmaps.length:1}function I(L){let v=L.target;v.removeEventListener("dispose",I),A(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&d.delete(v)}function _(L){let v=L.target;v.removeEventListener("dispose",_),N(v)}function A(L){let v=n.get(L);if(v.__webglInit===void 0)return;let z=L.source,H=f.get(z);if(H){let K=H[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&P(L),Object.keys(H).length===0&&f.delete(z)}n.remove(L)}function P(L){let v=n.get(L);i.deleteTexture(v.__webglTexture);let z=L.source,H=f.get(z);delete H[v.__cacheKey],a.memory.textures--}function N(L){let v=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(v.__webglFramebuffer[H]))for(let K=0;K<v.__webglFramebuffer[H].length;K++)i.deleteFramebuffer(v.__webglFramebuffer[H][K]);else i.deleteFramebuffer(v.__webglFramebuffer[H]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[H])}else{if(Array.isArray(v.__webglFramebuffer))for(let H=0;H<v.__webglFramebuffer.length;H++)i.deleteFramebuffer(v.__webglFramebuffer[H]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let H=0;H<v.__webglColorRenderbuffer.length;H++)v.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[H]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let z=L.textures;for(let H=0,K=z.length;H<K;H++){let le=n.get(z[H]);le.__webglTexture&&(i.deleteTexture(le.__webglTexture),a.memory.textures--),n.remove(z[H])}n.remove(L)}let E=0;function D(){E=0}function C(){return E}function R(L){E=L}function F(){let L=E;return L>=s.maxTextures&&Ge("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),E+=1,L}function G(L){let v=[];return v.push(L.wrapS),v.push(L.wrapT),v.push(L.wrapR||0),v.push(L.magFilter),v.push(L.minFilter),v.push(L.anisotropy),v.push(L.internalFormat),v.push(L.format),v.push(L.type),v.push(L.generateMipmaps),v.push(L.premultiplyAlpha),v.push(L.flipY),v.push(L.unpackAlignment),v.push(L.colorSpace),v.join()}function Z(L,v){let z=n.get(L);if(L.isVideoTexture&&O(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&z.__version!==L.version){let H=L.image;if(H===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{ce(z,L,v);return}}else L.isExternalTexture&&(z.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+v)}function V(L,v){let z=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&z.__version!==L.version){ce(z,L,v);return}else L.isExternalTexture&&(z.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+v)}function q(L,v){let z=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&z.__version!==L.version){ce(z,L,v);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+v)}function Y(L,v){let z=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&z.__version!==L.version){Ce(z,L,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+v)}let ue={[Rn]:i.REPEAT,[Wn]:i.CLAMP_TO_EDGE,[yo]:i.MIRRORED_REPEAT},xe={[zt]:i.NEAREST,[Pd]:i.NEAREST_MIPMAP_NEAREST,[xa]:i.NEAREST_MIPMAP_LINEAR,[Qt]:i.LINEAR,[Qo]:i.LINEAR_MIPMAP_NEAREST,[ki]:i.LINEAR_MIPMAP_LINEAR},Je={[Nd]:i.NEVER,[kd]:i.ALWAYS,[Ud]:i.LESS,[Ol]:i.LEQUAL,[Fd]:i.EQUAL,[Bl]:i.GEQUAL,[Od]:i.GREATER,[Bd]:i.NOTEQUAL};function Ke(L,v){if(v.type===bn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Qt||v.magFilter===Qo||v.magFilter===xa||v.magFilter===ki||v.minFilter===Qt||v.minFilter===Qo||v.minFilter===xa||v.minFilter===ki)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,ue[v.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,ue[v.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,ue[v.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,xe[v.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,xe[v.minFilter]),v.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,Je[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===zt||v.minFilter!==xa&&v.minFilter!==ki||v.type===bn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function tt(L,v){let z=!1;L.__webglInit===void 0&&(L.__webglInit=!0,v.addEventListener("dispose",I));let H=v.source,K=f.get(H);K===void 0&&(K={},f.set(H,K));let le=G(v);if(le!==L.__cacheKey){K[le]===void 0&&(K[le]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),K[le].usedTimes++;let fe=K[L.__cacheKey];fe!==void 0&&(K[L.__cacheKey].usedTimes--,fe.usedTimes===0&&P(v)),L.__cacheKey=le,L.__webglTexture=K[le].texture}return z}function J(L,v,z){return Math.floor(Math.floor(L/z)/v)}function Q(L,v,z,H){let le=L.updateRanges;if(le.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,z,H,v.data);else{le.sort((Ne,me)=>Ne.start-me.start);let fe=0;for(let Ne=1;Ne<le.length;Ne++){let me=le[fe],pe=le[Ne],Pe=me.start+me.count,Be=J(pe.start,v.width,4),$e=J(me.start,v.width,4);pe.start<=Pe+1&&Be===$e&&J(pe.start+pe.count-1,v.width,4)===Be?me.count=Math.max(me.count,pe.start+pe.count-me.start):(++fe,le[fe]=pe)}le.length=fe+1;let j=t.getParameter(i.UNPACK_ROW_LENGTH),ie=t.getParameter(i.UNPACK_SKIP_PIXELS),ge=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let Ne=0,me=le.length;Ne<me;Ne++){let pe=le[Ne],Pe=Math.floor(pe.start/4),Be=Math.ceil(pe.count/4),$e=Pe%v.width,k=Math.floor(Pe/v.width),_e=Be,ee=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,$e),t.pixelStorei(i.UNPACK_SKIP_ROWS,k),t.texSubImage2D(i.TEXTURE_2D,0,$e,k,_e,ee,z,H,v.data)}L.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,j),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(i.UNPACK_SKIP_ROWS,ge)}}function ce(L,v,z){let H=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(H=i.TEXTURE_3D);let K=tt(L,v),le=v.source;t.bindTexture(H,L.__webglTexture,i.TEXTURE0+z);let fe=n.get(le);if(le.version!==fe.__version||K===!0){if(t.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap!="undefined"&&v.image instanceof ImageBitmap)===!1){let ee=ot.getPrimaries(ot.workingColorSpace),ve=v.colorSpace===_i?null:ot.getPrimaries(v.colorSpace),Te=v.colorSpace===_i||ee===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let ie=m(v.image,!1,s.maxTextureSize);ie=dt(v,ie);let ge=r.convert(v.format,v.colorSpace),Ne=r.convert(v.type),me=x(v.internalFormat,ge,Ne,v.normalized,v.colorSpace,v.isVideoTexture);Ke(H,v);let pe,Pe=v.mipmaps,Be=v.isVideoTexture!==!0,$e=fe.__version===void 0||K===!0,k=le.dataReady,_e=T(v,ie);if(v.isDepthTexture)me=M(v.format===ei,v.type),$e&&(Be?t.texStorage2D(i.TEXTURE_2D,1,me,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,me,ie.width,ie.height,0,ge,Ne,null));else if(v.isDataTexture)if(Pe.length>0){Be&&$e&&t.texStorage2D(i.TEXTURE_2D,_e,me,Pe[0].width,Pe[0].height);for(let ee=0,ve=Pe.length;ee<ve;ee++)pe=Pe[ee],Be?k&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,pe.width,pe.height,ge,Ne,pe.data):t.texImage2D(i.TEXTURE_2D,ee,me,pe.width,pe.height,0,ge,Ne,pe.data);v.generateMipmaps=!1}else Be?($e&&t.texStorage2D(i.TEXTURE_2D,_e,me,ie.width,ie.height),k&&Q(v,ie,ge,Ne)):t.texImage2D(i.TEXTURE_2D,0,me,ie.width,ie.height,0,ge,Ne,ie.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Be&&$e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,me,Pe[0].width,Pe[0].height,ie.depth);for(let ee=0,ve=Pe.length;ee<ve;ee++)if(pe=Pe[ee],v.format!==cn)if(ge!==null)if(Be){if(k)if(v.layerUpdates.size>0){let Te=Th(pe.width,pe.height,v.format,v.type);for(let se of v.layerUpdates){let ze=pe.data.subarray(se*Te/pe.data.BYTES_PER_ELEMENT,(se+1)*Te/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,se,pe.width,pe.height,1,ge,ze)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,pe.width,pe.height,ie.depth,ge,pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,me,pe.width,pe.height,ie.depth,0,pe.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?k&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,pe.width,pe.height,ie.depth,ge,Ne,pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,me,pe.width,pe.height,ie.depth,0,ge,Ne,pe.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Be&&$e&&t.texStorage2D(i.TEXTURE_2D,_e,me,Pe[0].width,Pe[0].height);for(let ee=0,ve=Pe.length;ee<ve;ee++)pe=Pe[ee],v.format!==cn?ge!==null?Be?k&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,pe.width,pe.height,ge,pe.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,me,pe.width,pe.height,0,pe.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?k&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,pe.width,pe.height,ge,Ne,pe.data):t.texImage2D(i.TEXTURE_2D,ee,me,pe.width,pe.height,0,ge,Ne,pe.data)}else if(v.isDataArrayTexture)if(Be){if($e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,me,ie.width,ie.height,ie.depth),k)if(v.layerUpdates.size>0){let ee=Th(ie.width,ie.height,v.format,v.type);for(let ve of v.layerUpdates){let Te=ie.data.subarray(ve*ee/ie.data.BYTES_PER_ELEMENT,(ve+1)*ee/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ve,ie.width,ie.height,1,ge,Ne,Te)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ge,Ne,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,me,ie.width,ie.height,ie.depth,0,ge,Ne,ie.data);else if(v.isData3DTexture)Be?($e&&t.texStorage3D(i.TEXTURE_3D,_e,me,ie.width,ie.height,ie.depth),k&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ge,Ne,ie.data)):t.texImage3D(i.TEXTURE_3D,0,me,ie.width,ie.height,ie.depth,0,ge,Ne,ie.data);else if(v.isFramebufferTexture){if($e)if(Be)t.texStorage2D(i.TEXTURE_2D,_e,me,ie.width,ie.height);else{let ee=ie.width,ve=ie.height;for(let Te=0;Te<_e;Te++)t.texImage2D(i.TEXTURE_2D,Te,me,ee,ve,0,ge,Ne,null),ee>>=1,ve>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let ee=i.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),ie.parentNode!==ee){ee.appendChild(ie),d.add(v),ee.onpaint=ve=>{let Te=ve.changedElements;for(let se of d)Te.includes(se.image)&&(se.needsUpdate=!0)},ee.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ie);else{let Te=i.RGBA,se=i.RGBA,ze=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Te,se,ze,ie)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(Be&&$e){let ee=nt(Pe[0]);t.texStorage2D(i.TEXTURE_2D,_e,me,ee.width,ee.height)}for(let ee=0,ve=Pe.length;ee<ve;ee++)pe=Pe[ee],Be?k&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,ge,Ne,pe):t.texImage2D(i.TEXTURE_2D,ee,me,ge,Ne,pe);v.generateMipmaps=!1}else if(Be){if($e){let ee=nt(ie);t.texStorage2D(i.TEXTURE_2D,_e,me,ee.width,ee.height)}k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge,Ne,ie)}else t.texImage2D(i.TEXTURE_2D,0,me,ge,Ne,ie);p(v)&&S(H),fe.__version=le.version,v.onUpdate&&v.onUpdate(v)}L.__version=v.version}function Ce(L,v,z){if(v.image.length!==6)return;let H=tt(L,v),K=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+z);let le=n.get(K);if(K.version!==le.__version||H===!0){t.activeTexture(i.TEXTURE0+z);let fe=ot.getPrimaries(ot.workingColorSpace),j=v.colorSpace===_i?null:ot.getPrimaries(v.colorSpace),ie=v.colorSpace===_i||fe===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let ge=v.isCompressedTexture||v.image[0].isCompressedTexture,Ne=v.image[0]&&v.image[0].isDataTexture,me=[];for(let se=0;se<6;se++)!ge&&!Ne?me[se]=m(v.image[se],!0,s.maxCubemapSize):me[se]=Ne?v.image[se].image:v.image[se],me[se]=dt(v,me[se]);let pe=me[0],Pe=r.convert(v.format,v.colorSpace),Be=r.convert(v.type),$e=x(v.internalFormat,Pe,Be,v.normalized,v.colorSpace),k=v.isVideoTexture!==!0,_e=le.__version===void 0||H===!0,ee=K.dataReady,ve=T(v,pe);Ke(i.TEXTURE_CUBE_MAP,v);let Te;if(ge){k&&_e&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,$e,pe.width,pe.height);for(let se=0;se<6;se++){Te=me[se].mipmaps;for(let ze=0;ze<Te.length;ze++){let De=Te[ze];v.format!==cn?Pe!==null?k?ee&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ze,0,0,De.width,De.height,Pe,De.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ze,$e,De.width,De.height,0,De.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ze,0,0,De.width,De.height,Pe,Be,De.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ze,$e,De.width,De.height,0,Pe,Be,De.data)}}}else{if(Te=v.mipmaps,k&&_e){Te.length>0&&ve++;let se=nt(me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,$e,se.width,se.height)}for(let se=0;se<6;se++)if(Ne){k?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,me[se].width,me[se].height,Pe,Be,me[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,$e,me[se].width,me[se].height,0,Pe,Be,me[se].data);for(let ze=0;ze<Te.length;ze++){let Tt=Te[ze].image[se].image;k?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ze+1,0,0,Tt.width,Tt.height,Pe,Be,Tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ze+1,$e,Tt.width,Tt.height,0,Pe,Be,Tt.data)}}else{k?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Pe,Be,me[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,$e,Pe,Be,me[se]);for(let ze=0;ze<Te.length;ze++){let De=Te[ze];k?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ze+1,0,0,Pe,Be,De.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ze+1,$e,Pe,Be,De.image[se])}}}p(v)&&S(i.TEXTURE_CUBE_MAP),le.__version=K.version,v.onUpdate&&v.onUpdate(v)}L.__version=v.version}function Ee(L,v,z,H,K,le){let fe=r.convert(z.format,z.colorSpace),j=r.convert(z.type),ie=x(z.internalFormat,fe,j,z.normalized,z.colorSpace),ge=n.get(v),Ne=n.get(z);if(Ne.__renderTarget=v,!ge.__hasExternalTextures){let me=Math.max(1,v.width>>le),pe=Math.max(1,v.height>>le);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,le,ie,me,pe,v.depth,0,fe,j,null):t.texImage2D(K,le,ie,me,pe,0,fe,j,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),Ye(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,K,Ne.__webglTexture,0,We(v)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,K,Ne.__webglTexture,le),t.bindFramebuffer(i.FRAMEBUFFER,null)}function He(L,v,z){if(i.bindRenderbuffer(i.RENDERBUFFER,L),v.depthBuffer){let H=v.depthTexture,K=H&&H.isDepthTexture?H.type:null,le=M(v.stencilBuffer,K),fe=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ye(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,We(v),le,v.width,v.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,We(v),le,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,le,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,L)}else{let H=v.textures;for(let K=0;K<H.length;K++){let le=H[K],fe=r.convert(le.format,le.colorSpace),j=r.convert(le.type),ie=x(le.internalFormat,fe,j,le.normalized,le.colorSpace);Ye(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,We(v),ie,v.width,v.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,We(v),ie,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ie,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pt(L,v,z){let H=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(v.depthTexture);if(K.__renderTarget=v,(!K.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),H){if(K.__webglInit===void 0&&(K.__webglInit=!0,v.depthTexture.addEventListener("dispose",I)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Ke(i.TEXTURE_CUBE_MAP,v.depthTexture);let ge=r.convert(v.depthTexture.format),Ne=r.convert(v.depthTexture.type),me;v.depthTexture.format===Xn?me=i.DEPTH_COMPONENT24:v.depthTexture.format===ei&&(me=i.DEPTH24_STENCIL8);for(let pe=0;pe<6;pe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,me,v.width,v.height,0,ge,Ne,null)}}else Z(v.depthTexture,0);let le=K.__webglTexture,fe=We(v),j=H?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,ie=v.depthTexture.format===ei?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Xn)Ye(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,j,le,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,ie,j,le,0);else if(v.depthTexture.format===ei)Ye(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,j,le,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,ie,j,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ne(L){let v=n.get(L),z=L.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==L.depthTexture){let H=L.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),H){let K=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,H.removeEventListener("dispose",K)};H.addEventListener("dispose",K),v.__depthDisposeCallback=K}v.__boundDepthTexture=H}if(L.depthTexture&&!v.__autoAllocateDepthBuffer)if(z)for(let H=0;H<6;H++)pt(v.__webglFramebuffer[H],L,H);else{let H=L.texture.mipmaps;H&&H.length>0?pt(v.__webglFramebuffer[0],L,0):pt(v.__webglFramebuffer,L,0)}else if(z){v.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[H]),v.__webglDepthbuffer[H]===void 0)v.__webglDepthbuffer[H]=i.createRenderbuffer(),He(v.__webglDepthbuffer[H],L,!1);else{let K=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=v.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,le)}}else{let H=L.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),He(v.__webglDepthbuffer,L,!1);else{let K=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,le)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function re(L,v,z){let H=n.get(L);v!==void 0&&Ee(H.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&ne(L)}function ae(L){let v=L.texture,z=n.get(L),H=n.get(v);L.addEventListener("dispose",_);let K=L.textures,le=L.isWebGLCubeRenderTarget===!0,fe=K.length>1;if(fe||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=v.version,a.memory.textures++),le){z.__webglFramebuffer=[];for(let j=0;j<6;j++)if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer[j]=[];for(let ie=0;ie<v.mipmaps.length;ie++)z.__webglFramebuffer[j][ie]=i.createFramebuffer()}else z.__webglFramebuffer[j]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer=[];for(let j=0;j<v.mipmaps.length;j++)z.__webglFramebuffer[j]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(fe)for(let j=0,ie=K.length;j<ie;j++){let ge=n.get(K[j]);ge.__webglTexture===void 0&&(ge.__webglTexture=i.createTexture(),a.memory.textures++)}if(L.samples>0&&Ye(L)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let j=0;j<K.length;j++){let ie=K[j];z.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[j]);let ge=r.convert(ie.format,ie.colorSpace),Ne=r.convert(ie.type),me=x(ie.internalFormat,ge,Ne,ie.normalized,ie.colorSpace,L.isXRRenderTarget===!0),pe=We(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,me,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,z.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),He(z.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(le){t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),Ke(i.TEXTURE_CUBE_MAP,v);for(let j=0;j<6;j++)if(v.mipmaps&&v.mipmaps.length>0)for(let ie=0;ie<v.mipmaps.length;ie++)Ee(z.__webglFramebuffer[j][ie],L,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ie);else Ee(z.__webglFramebuffer[j],L,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);p(v)&&S(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let j=0,ie=K.length;j<ie;j++){let ge=K[j],Ne=n.get(ge),me=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(me=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,Ne.__webglTexture),Ke(me,ge),Ee(z.__webglFramebuffer,L,ge,i.COLOR_ATTACHMENT0+j,me,0),p(ge)&&S(me)}t.unbindTexture()}else{let j=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(j=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(j,H.__webglTexture),Ke(j,v),v.mipmaps&&v.mipmaps.length>0)for(let ie=0;ie<v.mipmaps.length;ie++)Ee(z.__webglFramebuffer[ie],L,v,i.COLOR_ATTACHMENT0,j,ie);else Ee(z.__webglFramebuffer,L,v,i.COLOR_ATTACHMENT0,j,0);p(v)&&S(j),t.unbindTexture()}L.depthBuffer&&ne(L)}function oe(L){let v=L.textures;for(let z=0,H=v.length;z<H;z++){let K=v[z];if(p(K)){let le=b(L),fe=n.get(K).__webglTexture;t.bindTexture(le,fe),S(le),t.unbindTexture()}}}let de=[],Ve=[];function Oe(L){if(L.samples>0){if(Ye(L)===!1){let v=L.textures,z=L.width,H=L.height,K=i.COLOR_BUFFER_BIT,le=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=n.get(L),j=v.length>1;if(j)for(let ge=0;ge<v.length;ge++)t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);let ie=L.texture.mipmaps;ie&&ie.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let ge=0;ge<v.length;ge++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),j){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,fe.__webglColorRenderbuffer[ge]);let Ne=n.get(v[ge]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ne,0)}i.blitFramebuffer(0,0,z,H,0,0,z,H,K,i.NEAREST),l===!0&&(de.length=0,Ve.length=0,de.push(i.COLOR_ATTACHMENT0+ge),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(de.push(le),Ve.push(le),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ve)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,de))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let ge=0;ge<v.length;ge++){t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,fe.__webglColorRenderbuffer[ge]);let Ne=n.get(v[ge]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,Ne,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){let v=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function We(L){return Math.min(s.maxSamples,L.samples)}function Ye(L){let v=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function O(L){let v=a.render.frame;h.get(L)!==v&&(h.set(L,v),L.update())}function dt(L,v){let z=L.colorSpace,H=L.format,K=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||z!==Pr&&z!==_i&&(ot.getTransfer(z)===xt?(H!==cn||K!==sn)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",z)),v}function nt(L){return typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame!="undefined"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=D,this.getTextureUnits=C,this.setTextureUnits=R,this.setTexture2D=Z,this.setTexture2DArray=V,this.setTexture3D=q,this.setTextureCube=Y,this.rebindTextures=re,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Ye,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function bv(i,e){function t(n,s=_i){let r,a=ot.getTransfer(s);if(n===sn)return i.UNSIGNED_BYTE;if(n===tl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===nl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===mh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===gh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===fh)return i.BYTE;if(n===ph)return i.SHORT;if(n===Zs)return i.UNSIGNED_SHORT;if(n===el)return i.INT;if(n===kn)return i.UNSIGNED_INT;if(n===bn)return i.FLOAT;if(n===Kt)return i.HALF_FLOAT;if(n===xh)return i.ALPHA;if(n===_h)return i.RGB;if(n===cn)return i.RGBA;if(n===Xn)return i.DEPTH_COMPONENT;if(n===ei)return i.DEPTH_STENCIL;if(n===il)return i.RED;if(n===sl)return i.RED_INTEGER;if(n===Vi)return i.RG;if(n===rl)return i.RG_INTEGER;if(n===al)return i.RGBA_INTEGER;if(n===_a||n===va||n===ya||n===Ma)if(a===xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===_a)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===_a)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===va)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ma)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ol||n===ll||n===cl||n===hl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ol)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ll)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===cl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===hl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ul||n===dl||n===fl||n===pl||n===ml||n===Sa||n===gl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ul||n===dl)return a===xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===fl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===pl)return r.COMPRESSED_R11_EAC;if(n===ml)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Sa)return r.COMPRESSED_RG11_EAC;if(n===gl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===xl||n===_l||n===vl||n===yl||n===Ml||n===Sl||n===bl||n===El||n===Tl||n===wl||n===Al||n===Rl||n===Cl||n===Pl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===xl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_l)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ml)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Sl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===El)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Tl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Al)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Rl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Cl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Pl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Il||n===Ll||n===Dl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Il)return a===xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ll)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Dl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Nl||n===Ul||n===ba||n===Fl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Nl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ul)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ba)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Ev=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tv=`
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

}`,Wh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Hr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new It({vertexShader:Ev,fragmentShader:Tv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ke(new fn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Xh=class extends qn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,y=typeof XRWebGLBinding!="undefined",m=new Wh,p={},S=t.getContextAttributes(),b=null,x=null,M=[],T=[],I=new he,_=null,A=null,P=new jt;P.viewport=new Mt;let N=new jt;N.viewport=new Mt;let E=[P,N],D=new Yo,C=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let Q=M[J];return Q===void 0&&(Q=new Fs,M[J]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(J){let Q=M[J];return Q===void 0&&(Q=new Fs,M[J]=Q),Q.getGripSpace()},this.getHand=function(J){let Q=M[J];return Q===void 0&&(Q=new Fs,M[J]=Q),Q.getHandSpace()};function F(J){let Q=T.indexOf(J.inputSource);if(Q===-1)return;let ce=M[Q];ce!==void 0&&(ce.update(J.inputSource,J.frame,c||a),ce.dispatchEvent({type:J.type,data:J.inputSource}))}function G(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",Z);for(let J=0;J<M.length;J++){let Q=T[J];Q!==null&&(T[J]=null,M[J].disconnect(Q))}C=null,R=null,m.reset();for(let J in p)delete p[J];if(e.setRenderTarget(b),f=null,u=null,d=null,s=null,x=null,tt.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(I.width,I.height,!1),A!==null){let J=A.camera;J.fov=A.fov,J.zoom=A.zoom,J.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",G),s.addEventListener("inputsourceschange",Z),S.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(I),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,Ce=null,Ee=null;S.depth&&(Ee=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=S.stencil?ei:Xn,Ce=S.stencil?zi:kn);let He={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(He),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new Vt(u.textureWidth,u.textureHeight,{format:cn,type:sn,depthTexture:new jn(u.textureWidth,u.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ce={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ce),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Vt(f.framebufferWidth,f.framebufferHeight,{format:cn,type:sn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),tt.setContext(s),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Z(J){for(let Q=0;Q<J.removed.length;Q++){let ce=J.removed[Q],Ce=T.indexOf(ce);Ce>=0&&(T[Ce]=null,M[Ce].disconnect(ce))}for(let Q=0;Q<J.added.length;Q++){let ce=J.added[Q],Ce=T.indexOf(ce);if(Ce===-1){for(let He=0;He<M.length;He++)if(He>=T.length){T.push(ce),Ce=He;break}else if(T[He]===null){T[He]=ce,Ce=He;break}if(Ce===-1)break}let Ee=M[Ce];Ee&&Ee.connect(ce)}}let V=new U,q=new U;function Y(J,Q,ce){V.setFromMatrixPosition(Q.matrixWorld),q.setFromMatrixPosition(ce.matrixWorld);let Ce=V.distanceTo(q),Ee=Q.projectionMatrix.elements,He=ce.projectionMatrix.elements,pt=Ee[14]/(Ee[10]-1),ne=Ee[14]/(Ee[10]+1),re=(Ee[9]+1)/Ee[5],ae=(Ee[9]-1)/Ee[5],oe=(Ee[8]-1)/Ee[0],de=(He[8]+1)/He[0],Ve=pt*oe,Oe=pt*de,We=Ce/(-oe+de),Ye=We*-oe;if(Q.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ye),J.translateZ(We),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ee[10]===-1)J.projectionMatrix.copy(Q.projectionMatrix),J.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let O=pt+We,dt=ne+We,nt=Ve-Ye,L=Oe+(Ce-Ye),v=re*ne/dt*O,z=ae*ne/dt*O;J.projectionMatrix.makePerspective(nt,L,v,z,O,dt),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ue(J,Q){Q===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(Q.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let Q=J.near,ce=J.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(ce=m.depthFar)),D.near=N.near=P.near=Q,D.far=N.far=P.far=ce,(C!==D.near||R!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),C=D.near,R=D.far),D.layers.mask=J.layers.mask|6,P.layers.mask=D.layers.mask&-5,N.layers.mask=D.layers.mask&-3;let Ce=J.parent,Ee=D.cameras;ue(D,Ce);for(let He=0;He<Ee.length;He++)ue(Ee[He],Ce);Ee.length===2?Y(D,P,N):D.projectionMatrix.copy(P.projectionMatrix),A===null&&J.isPerspectiveCamera&&(A={camera:J,fov:J.fov,zoom:J.zoom}),xe(J,D,Ce)};function xe(J,Q,ce){ce===null?J.matrix.copy(Q.matrixWorld):(J.matrix.copy(ce.matrixWorld),J.matrix.invert(),J.matrix.multiply(Q.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(Q.projectionMatrix),J.projectionMatrixInverse.copy(Q.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=So*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(J){return p[J]};let Je=null;function Ke(J,Q){if(h=Q.getViewerPose(c||a),g=Q,h!==null){let ce=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let Ce=!1;ce.length!==D.cameras.length&&(D.cameras.length=0,Ce=!0);for(let ne=0;ne<ce.length;ne++){let re=ce[ne],ae=null;if(f!==null)ae=f.getViewport(re);else{let de=d.getViewSubImage(u,re);ae=de.viewport,ne===0&&(e.setRenderTargetTextures(x,de.colorTexture,de.depthStencilTexture),e.setRenderTarget(x))}let oe=E[ne];oe===void 0&&(oe=new jt,oe.layers.enable(ne),oe.viewport=new Mt,E[ne]=oe),oe.matrix.fromArray(re.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(re.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(ae.x,ae.y,ae.width,ae.height),ne===0&&(D.matrix.copy(oe.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ce===!0&&D.cameras.push(oe)}let Ee=s.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=n.getBinding();let ne=d.getDepthInformation(ce[0]);ne&&ne.isValid&&ne.texture&&m.init(ne,s.renderState)}if(Ee&&Ee.includes("camera-access")&&y){e.state.unbindTexture(),d=n.getBinding();for(let ne=0;ne<ce.length;ne++){let re=ce[ne].camera;if(re){let ae=p[re];ae||(ae=new Hr,p[re]=ae);let oe=d.getCameraImage(re);ae.sourceTexture=oe}}}}for(let ce=0;ce<M.length;ce++){let Ce=T[ce],Ee=M[ce];Ce!==null&&Ee!==void 0&&Ee.update(Ce,Q,c||a)}Je&&Je(J,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let tt=new yf;tt.setAnimationLoop(Ke),this.setAnimationLoop=function(J){Je=J},this.dispose=function(){}}},wv=new et,wf=new Qe;wf.set(-1,0,0,0,1,0,0,0,1);function Av(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Sh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,b,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Yt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Yt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=e.get(p),b=S.envMap,x=S.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(wv.makeRotationFromEuler(x)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(wf),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Yt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Rv(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){let T=M.program;n.uniformBlockBinding(x,T)}function c(x,M){let T=s[x.id];T===void 0&&(m(x),T=h(x),s[x.id]=T,x.addEventListener("dispose",S));let I=M.program;n.updateUBOMapping(x,I);let _=e.render.frame;r[x.id]!==_&&(u(x),r[x.id]=_)}function h(x){let M=d();x.__bindingPointIndex=M;let T=i.createBuffer(),I=x.__size,_=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,I,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,T),T}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return Xe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){let M=s[x.id],T=x.uniforms,I=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let _=0,A=T.length;_<A;_++){let P=T[_];if(Array.isArray(P))for(let N=0,E=P.length;N<E;N++)f(P[N],_,N,I);else f(P,_,0,I)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,M,T,I){if(y(x,M,T,I)===!0){let _=x.__offset,A=x.value;if(Array.isArray(A)){let P=0;for(let N=0;N<A.length;N++){let E=A[N],D=p(E);g(E,x.__data,P),typeof E!="number"&&typeof E!="boolean"&&!E.isMatrix3&&!ArrayBuffer.isView(E)&&(P+=D.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,x.__data)}}function g(x,M,T){typeof x=="number"||typeof x=="boolean"?M[0]=x:x.isMatrix3?(M[0]=x.elements[0],M[1]=x.elements[1],M[2]=x.elements[2],M[3]=0,M[4]=x.elements[3],M[5]=x.elements[4],M[6]=x.elements[5],M[7]=0,M[8]=x.elements[6],M[9]=x.elements[7],M[10]=x.elements[8],M[11]=0):ArrayBuffer.isView(x)?M.set(new x.constructor(x.buffer,x.byteOffset,M.length)):x.toArray(M,T)}function y(x,M,T,I){let _=x.value,A=M+"_"+T;if(I[A]===void 0)return typeof _=="number"||typeof _=="boolean"?I[A]=_:ArrayBuffer.isView(_)?I[A]=_.slice():I[A]=_.clone(),!0;{let P=I[A];if(typeof _=="number"||typeof _=="boolean"){if(P!==_)return I[A]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(P.equals(_)===!1)return P.copy(_),!0}}return!1}function m(x){let M=x.uniforms,T=0,I=16;for(let A=0,P=M.length;A<P;A++){let N=Array.isArray(M[A])?M[A]:[M[A]];for(let E=0,D=N.length;E<D;E++){let C=N[E],R=Array.isArray(C.value)?C.value:[C.value];for(let F=0,G=R.length;F<G;F++){let Z=R[F],V=p(Z),q=T%I,Y=q%V.boundary,ue=q+Y;T+=Y,ue!==0&&I-ue<V.storage&&(T+=I-ue),C.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=T,T+=V.storage}}}let _=T%I;return _>0&&(T+=I-_),x.__size=T,x.__cache={},this}function p(x){let M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(M.boundary=16,M.storage=x.byteLength):Ge("WebGLRenderer: Unsupported uniform value type.",x),M}function S(x){let M=x.target;M.removeEventListener("dispose",S);let T=a.indexOf(M.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function b(){for(let x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:b}}var Cv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ti=null;function Pv(){return ti===null&&(ti=new Kn(Cv,16,16,Vi,Kt),ti.name="DFG_LUT",ti.minFilter=Qt,ti.magFilter=Qt,ti.wrapS=Wn,ti.wrapT=Wn,ti.generateMipmaps=!1,ti.needsUpdate=!0),ti}var Gl=class{constructor(e={}){let{canvas:t=Vd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=sn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let y=f,m=new Set([al,rl,sl]),p=new Set([sn,kn,Zs,zi,tl,nl]),S=new Uint32Array(4),b=new Int32Array(4),x=new U,M=null,T=null,I=[],_=[],A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,N=!1,E=null,D=null,C=null,R=null;this._outputColorSpace=kt;let F=0,G=0,Z=null,V=-1,q=null,Y=new Mt,ue=new Mt,xe=null,Je=new Fe(0),Ke=0,tt=t.width,J=t.height,Q=1,ce=null,Ce=null,Ee=new Mt(0,0,tt,J),He=new Mt(0,0,tt,J),pt=!1,ne=new Bs,re=!1,ae=!1,oe=new et,de=new U,Ve=new Mt,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},We=!1;function Ye(){return Z===null?Q:1}let O=n;function dt(w,B){return t.getContext(w,B)}let nt,L,v,z,H,K,le,fe,j,ie,ge,Ne,me,pe,Pe,Be,$e,k,_e,ee,ve,Te,se;try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Tt,!1),t.addEventListener("webglcontextrestored",_t,!1),t.addEventListener("webglcontextcreationerror",Pn,!1),O===null){let B="webgl2";if(O=dt(B,w),O===null)throw dt(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ze()}catch(w){throw t.removeEventListener("webglcontextlost",Tt,!1),t.removeEventListener("webglcontextrestored",_t,!1),t.removeEventListener("webglcontextcreationerror",Pn,!1),Xe("WebGLRenderer: "+w.message),w}function ze(){nt=new Ox(O),nt.init(),ve=new bv(O,nt),L=new Ax(O,nt,e,ve),v=new Mv(O,nt),L.reversedDepthBuffer&&u&&v.buffers.depth.setReversed(!0),D=O.createFramebuffer(),C=O.createFramebuffer(),R=O.createFramebuffer(),z=new zx(O),H=new ov,K=new Sv(O,nt,v,H,L,ve,z),le=new Fx(P),fe=new Gm(O),Te=new Tx(O,fe),j=new Bx(O,fe,z,Te),ie=new Gx(O,j,fe,Te,z),k=new Vx(O,L,K),Pe=new Rx(H),ge=new av(P,le,nt,L,Te,Pe),Ne=new Av(P,H),me=new cv,pe=new mv(nt),$e=new Ex(P,le,v,ie,g,l),Be=new yv(P,ie,L),se=new Rv(O,z,L,v),_e=new wx(O,nt,z),ee=new kx(O,nt,z),z.programs=ge.programs,P.capabilities=L,P.extensions=nt,P.properties=H,P.renderLists=me,P.shadowMap=Be,P.state=v,P.info=z}y!==sn&&(A=new Wx(y,t.width,t.height,o,s,r));let De=new Xh(P,O);this.xr=De,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let w=nt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=nt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(w){w!==void 0&&(Q=w,this.setSize(tt,J,!1))},this.getSize=function(w){return w.set(tt,J)},this.setSize=function(w,B,$=!0){if(De.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}tt=w,J=B,t.width=Math.floor(w*Q),t.height=Math.floor(B*Q),$===!0&&(t.style.width=w+"px",t.style.height=B+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(tt*Q,J*Q).floor()},this.setDrawingBufferSize=function(w,B,$){tt=w,J=B,Q=$,t.width=Math.floor(w*$),t.height=Math.floor(B*$),this.setViewport(0,0,w,B)},this.setEffects=function(w){if(y===sn){Xe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let B=0;B<w.length;B++)if(w[B].isOutputPass===!0){Ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(Y)},this.getViewport=function(w){return w.copy(Ee)},this.setViewport=function(w,B,$,W){w.isVector4?Ee.set(w.x,w.y,w.z,w.w):Ee.set(w,B,$,W),v.viewport(Y.copy(Ee).multiplyScalar(Q).round())},this.getScissor=function(w){return w.copy(He)},this.setScissor=function(w,B,$,W){w.isVector4?He.set(w.x,w.y,w.z,w.w):He.set(w,B,$,W),v.scissor(ue.copy(He).multiplyScalar(Q).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(w){v.setScissorTest(pt=w)},this.setOpaqueSort=function(w){ce=w},this.setTransparentSort=function(w){Ce=w},this.getClearColor=function(w){return w.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor(...arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha(...arguments)},this.clear=function(w=!0,B=!0,$=!0){let W=0;if(w){let X=!1;if(Z!==null){let be=Z.texture.format;X=m.has(be)}if(X){let be=Z.texture.type,Re=p.has(be),Me=$e.getClearColor(),Ie=$e.getClearAlpha(),Ue=Me.r,it=Me.g,ct=Me.b;Re?(S[0]=Ue,S[1]=it,S[2]=ct,S[3]=Ie,O.clearBufferuiv(O.COLOR,0,S)):(b[0]=Ue,b[1]=it,b[2]=ct,b[3]=Ie,O.clearBufferiv(O.COLOR,0,b))}else W|=O.COLOR_BUFFER_BIT}B&&(W|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(W|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&O.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),E=w},this.dispose=function(){t.removeEventListener("webglcontextlost",Tt,!1),t.removeEventListener("webglcontextrestored",_t,!1),t.removeEventListener("webglcontextcreationerror",Pn,!1),$e.dispose(),me.dispose(),pe.dispose(),H.dispose(),le.dispose(),ie.dispose(),Te.dispose(),se.dispose(),ge.dispose(),De.dispose(),De.removeEventListener("sessionstart",Mu),De.removeEventListener("sessionend",Su),qi.stop()};function Tt(w){w.preventDefault(),yh("WebGLRenderer: Context Lost."),N=!0}function _t(){yh("WebGLRenderer: Context Restored."),N=!1;let w=z.autoReset,B=Be.enabled,$=Be.autoUpdate,W=Be.needsUpdate,X=Be.type;ze(),z.autoReset=w,Be.enabled=B,Be.autoUpdate=$,Be.needsUpdate=W,Be.type=X}function Pn(w){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Vn(w){let B=w.target;B.removeEventListener("dispose",Vn),bp(B)}function bp(w){Ep(w),H.remove(w)}function Ep(w){let B=H.get(w).programs;B!==void 0&&(B.forEach(function($){ge.releaseProgram($)}),w.isShaderMaterial&&ge.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,$,W,X,be){B===null&&(B=Oe);let Re=X.isMesh&&X.matrixWorld.determinantAffine()<0,Me=Ap(w,B,$,W,X);v.setMaterial(W,Re);let Ie=$.index,Ue=1;if(W.wireframe===!0){if(Ie=j.getWireframeAttribute($),Ie===void 0)return;Ue=2}let it=$.drawRange,ct=$.attributes.position,Le=it.start*Ue,vt=(it.start+it.count)*Ue;be!==null&&(Le=Math.max(Le,be.start*Ue),vt=Math.min(vt,(be.start+be.count)*Ue)),Ie!==null?(Le=Math.max(Le,0),vt=Math.min(vt,Ie.count)):ct!=null&&(Le=Math.max(Le,0),vt=Math.min(vt,ct.count));let Ht=vt-Le;if(Ht<0||Ht===1/0)return;Te.setup(X,W,Me,$,Ie);let Ct,bt=_e;if(Ie!==null&&(Ct=fe.get(Ie),bt=ee,bt.setIndex(Ct)),X.isMesh)W.wireframe===!0?(v.setLineWidth(W.wireframeLinewidth*Ye()),bt.setMode(O.LINES)):bt.setMode(O.TRIANGLES);else if(X.isLine){let en=W.linewidth;en===void 0&&(en=1),v.setLineWidth(en*Ye()),X.isLineSegments?bt.setMode(O.LINES):X.isLineLoop?bt.setMode(O.LINE_LOOP):bt.setMode(O.LINE_STRIP)}else X.isPoints?bt.setMode(O.POINTS):X.isSprite&&bt.setMode(O.TRIANGLES);if(X.isBatchedMesh)if(nt.get("WEBGL_multi_draw"))bt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let en=X._multiDrawStarts,Ae=X._multiDrawCounts,an=X._multiDrawCount,mt=Ie?fe.get(Ie).bytesPerElement:1,wn=H.get(W).currentProgram.getUniforms();for(let Gn=0;Gn<an;Gn++)wn.setValue(O,"_gl_DrawID",Gn),bt.render(en[Gn]/mt,Ae[Gn])}else if(X.isInstancedMesh)bt.renderInstances(Le,Ht,X.count);else if($.isInstancedBufferGeometry){let en=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ae=Math.min($.instanceCount,en);bt.renderInstances(Le,Ht,Ae)}else bt.render(Le,Ht)};function yu(w,B,$,W){E!==null&&w.isNodeMaterial&&E.setObject(W,w),re===!0&&Pe.setState(w,$,!1),w.transparent===!0&&w.side===Qn&&w.forceSinglePass===!1?(w.side=Yt,w.needsUpdate=!0,za(w,B,W),w.side=Oi,w.needsUpdate=!0,za(w,B,W),w.side=Qn):za(w,B,W)}this.compile=function(w,B,$=null){$===null&&($=w),E!==null&&E.renderStart(w,B,$),T=pe.get($),T.init(B),_.push(T),$.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),w!==$&&w.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),T.setupLights(),E!==null&&E.updateLights(T.state.lightsArray),ae=this.localClippingEnabled,re=Pe.init(this.clippingPlanes,ae),re===!0&&Pe.setGlobalState(this.clippingPlanes,B),E!==null&&Be.render(T.state.shadowsArray,$,B);let W=new Set;return w.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let be=X.material;if(be)if(Array.isArray(be))for(let Re=0;Re<be.length;Re++){let Me=be[Re];yu(Me,$,B,X),W.add(Me)}else yu(be,$,B,X),W.add(be)}),T=_.pop(),E!==null&&E.renderEnd(),W},this.compileAsync=function(w,B,$=null){let W=this.compile(w,B,$);return new Promise(X=>{function be(){if(W.forEach(function(Re){let Ie=H.get(Re).currentProgram;(Ie===void 0||Ie.isReady())&&W.delete(Re)}),W.size===0){X(w);return}setTimeout(be,10)}nt.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let xc=null;function Tp(w){xc&&xc(w)}function Mu(){qi.stop()}function Su(){qi.start()}let qi=new yf;qi.setAnimationLoop(Tp),typeof self!="undefined"&&qi.setContext(self),this.setAnimationLoop=function(w){xc=w,De.setAnimationLoop(w),w===null?qi.stop():qi.start()},De.addEventListener("sessionstart",Mu),De.addEventListener("sessionend",Su),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;E!==null&&E.renderStart(w,B);let $=De.enabled===!0&&De.isPresenting===!0,W=A!==null&&(Z===null||$)&&A.begin(P,Z);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(De.cameraAutoUpdate===!0&&De.updateCamera(B),B=De.getCamera()),w.isScene===!0&&w.onBeforeRender(P,w,B,Z),T=pe.get(w,_.length),T.init(B),T.state.textureUnits=K.getTextureUnits(),_.push(T),oe.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ne.setFromProjectionMatrix(oe,Un,B.reversedDepth),ae=this.localClippingEnabled,re=Pe.init(this.clippingPlanes,ae),M=me.get(w,I.length),M.init(),I.push(M),De.enabled===!0&&De.isPresenting===!0){let Re=P.xr.getDepthSensingMesh();Re!==null&&_c(Re,B,-1/0,P.sortObjects)}_c(w,B,0,P.sortObjects),M.finish(),E!==null&&E.updateLights(T.state.lightsArray),P.sortObjects===!0&&M.sort(ce,Ce),We=De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1,We&&$e.addToRenderList(M,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),re===!0&&Pe.beginShadows();let X=T.state.shadowsArray;if(Be.render(X,w,B),re===!0&&Pe.endShadows(),(W&&A.hasRenderPass())===!1){let Re=M.opaque,Me=M.transmissive;if(T.setupLights(),B.isArrayCamera){let Ie=B.cameras;if(Me.length>0)for(let Ue=0,it=Ie.length;Ue<it;Ue++){let ct=Ie[Ue];Eu(Re,Me,w,ct)}We&&$e.render(w);for(let Ue=0,it=Ie.length;Ue<it;Ue++){let ct=Ie[Ue];bu(M,w,ct,ct.viewport)}}else Me.length>0&&Eu(Re,Me,w,B),We&&$e.render(w),bu(M,w,B)}Z!==null&&G===0&&(K.updateMultisampleRenderTarget(Z),K.updateRenderTargetMipmap(Z)),W&&A.end(P),w.isScene===!0&&w.onAfterRender(P,w,B),Te.resetDefaultState(),V=-1,q=null,_.pop(),_.length>0?(T=_[_.length-1],K.setTextureUnits(T.state.textureUnits),re===!0&&Pe.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,I.pop(),I.length>0?M=I[I.length-1]:M=null,E!==null&&E.renderEnd()};function _c(w,B,$,W){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)$=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLightProbeGrid)T.pushLightProbeGrid(w);else if(w.isLight)T.pushLight(w),w.castShadow&&T.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(ne)){W&&Ve.setFromMatrixPosition(w.matrixWorld).applyMatrix4(oe);let Re=ie.update(w),Me=w.material;Me.visible&&M.push(w,Re,Me,$,Ve.z,null,B)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(ne))){let Re=ie.update(w),Me=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ve.copy(w.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Ve.copy(Re.boundingSphere.center)),Ve.applyMatrix4(w.matrixWorld).applyMatrix4(oe)),Array.isArray(Me)){let Ie=Re.groups;for(let Ue=0,it=Ie.length;Ue<it;Ue++){let ct=Ie[Ue],Le=Me[ct.materialIndex];Le&&Le.visible&&M.push(w,Re,Le,$,Ve.z,ct,B)}}else Me.visible&&M.push(w,Re,Me,$,Ve.z,null,B)}}let be=w.children;for(let Re=0,Me=be.length;Re<Me;Re++)_c(be[Re],B,$,W)}function bu(w,B,$,W){let{opaque:X,transmissive:be,transparent:Re}=w;T.setupLightsView($),re===!0&&Pe.setGlobalState(P.clippingPlanes,$),W&&v.viewport(Y.copy(W)),X.length>0&&ka(X,B,$),be.length>0&&ka(be,B,$),Re.length>0&&ka(Re,B,$),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Eu(w,B,$,W){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[W.id]===void 0){let Le=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[W.id]=new Vt(1,1,{generateMipmaps:!0,type:Le?Kt:sn,minFilter:ki,samples:Math.max(4,L.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ot.workingColorSpace})}let be=T.state.transmissionRenderTarget[W.id],Re=W.viewport||Y;be.setSize(Re.z*P.transmissionResolutionScale,Re.w*P.transmissionResolutionScale);let Me=P.getRenderTarget(),Ie=P.getActiveCubeFace(),Ue=P.getActiveMipmapLevel();P.setRenderTarget(be),P.getClearColor(Je),Ke=P.getClearAlpha(),Ke<1&&P.setClearColor(16777215,.5),P.clear(),We&&$e.render($);let it=P.toneMapping;P.toneMapping=Bn;let ct=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),T.setupLightsView(W),re===!0&&Pe.setGlobalState(P.clippingPlanes,W),ka(w,$,W),K.updateMultisampleRenderTarget(be),K.updateRenderTargetMipmap(be),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let vt=0,Ht=B.length;vt<Ht;vt++){let Ct=B[vt],{object:bt,geometry:en,material:Ae,group:an}=Ct;if(Ae.side===Qn&&bt.layers.test(W.layers)){let mt=Ae.side;Ae.side=Yt,Ae.needsUpdate=!0,Tu(bt,$,W,en,Ae,an),Ae.side=mt,Ae.needsUpdate=!0,Le=!0}}Le===!0&&(K.updateMultisampleRenderTarget(be),K.updateRenderTargetMipmap(be))}P.setRenderTarget(Me,Ie,Ue),P.setClearColor(Je,Ke),ct!==void 0&&(W.viewport=ct),P.toneMapping=it}function ka(w,B,$){let W=B.isScene===!0?B.overrideMaterial:null;for(let X=0,be=w.length;X<be;X++){let Re=w[X],{object:Me,geometry:Ie,group:Ue}=Re,it=Re.material;it.allowOverride===!0&&W!==null&&(it=W),Me.layers.test($.layers)&&Tu(Me,B,$,Ie,it,Ue)}}function Tu(w,B,$,W,X,be){E!==null&&X.isNodeMaterial&&E.setObject(w,X),w.onBeforeRender(P,B,$,W,X,be),w.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),X.onBeforeRender(P,B,$,W,w,be),X.transparent===!0&&X.side===Qn&&X.forceSinglePass===!1?(X.side=Yt,X.needsUpdate=!0,P.renderBufferDirect($,B,W,X,w,be),X.side=Oi,X.needsUpdate=!0,P.renderBufferDirect($,B,W,X,w,be),X.side=Qn):P.renderBufferDirect($,B,W,X,w,be),w.onAfterRender(P,B,$,W,X,be)}function za(w,B,$){B.isScene!==!0&&(B=Oe);let W=H.get(w),X=T.state.lights,be=T.state.shadowsArray,Re=X.state.version,Me=ge.getParameters(w,X.state,be,B,$,T.state.lightProbeGridArray),Ie=ge.getProgramCacheKey(Me),Ue=W.programs;W.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?B.environment:null,W.fog=B.fog;let it=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;W.envMap=le.get(w.envMap||W.environment,it),W.envMapRotation=W.environment!==null&&w.envMap===null?B.environmentRotation:w.envMapRotation,Ue===void 0&&(w.addEventListener("dispose",Vn),Ue=new Map,W.programs=Ue);let ct=Ue.get(Ie);if(ct!==void 0){if(W.currentProgram===ct&&W.lightsStateVersion===Re)return Au(w,Me),ct}else Me.uniforms=ge.getUniforms(w),E!==null&&w.isNodeMaterial&&E.build(w,$,Me),w.onBeforeCompile(Me,P),ct=ge.acquireProgram(Me,Ie),Ue.set(Ie,ct),W.uniforms=Me.uniforms;let Le=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Le.clippingPlanes=Pe.uniform),Au(w,Me),W.needsLights=Cp(w),W.lightsStateVersion=Re,W.needsLights&&(Le.ambientLightColor.value=X.state.ambient,Le.lightProbe.value=X.state.probe,Le.sunLights.value=X.state.sun,Le.sunLightShadows.value=X.state.sunShadow,Le.directionalLights.value=X.state.directional,Le.directionalLightShadows.value=X.state.directionalShadow,Le.spotLights.value=X.state.spot,Le.spotLightShadows.value=X.state.spotShadow,Le.rectAreaLights.value=X.state.rectArea,Le.ltc_1.value=X.state.rectAreaLTC1,Le.ltc_2.value=X.state.rectAreaLTC2,Le.pointLights.value=X.state.point,Le.pointLightShadows.value=X.state.pointShadow,Le.hemisphereLights.value=X.state.hemi,Le.sunShadowMatrix.value=X.state.sunShadowMatrix,Le.sunShadowCascade.value=X.state.sunShadowCascade,Le.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Le.spotLightMatrix.value=X.state.spotLightMatrix,Le.spotLightMap.value=X.state.spotLightMap,Le.pointShadowMatrix.value=X.state.pointShadowMatrix),W.lightProbeGrid=T.state.lightProbeGridArray.length>0,W.currentProgram=ct,W.uniformsList=null,ct}function wu(w){if(w.uniformsList===null){let B=w.currentProgram.getUniforms();w.uniformsList=Qs.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function Au(w,B){let $=H.get(w);$.outputColorSpace=B.outputColorSpace,$.batching=B.batching,$.batchingColor=B.batchingColor,$.instancing=B.instancing,$.instancingColor=B.instancingColor,$.instancingMorph=B.instancingMorph,$.skinning=B.skinning,$.morphTargets=B.morphTargets,$.morphNormals=B.morphNormals,$.morphColors=B.morphColors,$.morphTargetsCount=B.morphTargetsCount,$.numClippingPlanes=B.numClippingPlanes,$.numIntersection=B.numClipIntersection,$.vertexAlphas=B.vertexAlphas,$.vertexTangents=B.vertexTangents,$.toneMapping=B.toneMapping}function wp(w,B){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;x.setFromMatrixPosition(B.matrixWorld);for(let $=0,W=w.length;$<W;$++){let X=w[$];if(X.texture!==null&&X.boundingBox.containsPoint(x))return X}return null}function Ap(w,B,$,W,X){B.isScene!==!0&&(B=Oe),K.resetTextureUnits();let be=B.fog,Re=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?B.environment:null,Me=Z===null?P.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:ot.workingColorSpace,Ie=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Ue=le.get(W.envMap||Re,Ie),it=W.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ct=!!$.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Le=!!$.morphAttributes.position,vt=!!$.morphAttributes.normal,Ht=!!$.morphAttributes.color,Ct=Bn;W.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ct=P.toneMapping);let bt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,en=bt!==void 0?bt.length:0,Ae=H.get(W),an=T.state.lights;if(re===!0&&(ae===!0||w!==q)){let wt=w===q&&W.id===V;Pe.setState(W,w,wt)}let mt=!1;W.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==an.state.version||Ae.outputColorSpace!==Me||X.isBatchedMesh&&Ae.batching===!1||!X.isBatchedMesh&&Ae.batching===!0||X.isBatchedMesh&&Ae.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Ae.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Ae.instancing===!1||!X.isInstancedMesh&&Ae.instancing===!0||X.isSkinnedMesh&&Ae.skinning===!1||!X.isSkinnedMesh&&Ae.skinning===!0||X.isInstancedMesh&&Ae.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ae.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ae.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ae.instancingMorph===!1&&X.morphTexture!==null||Ae.envMap!==Ue||W.fog===!0&&Ae.fog!==be||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==Pe.numPlanes||Ae.numIntersection!==Pe.numIntersection)||Ae.vertexAlphas!==it||Ae.vertexTangents!==ct||Ae.morphTargets!==Le||Ae.morphNormals!==vt||Ae.morphColors!==Ht||Ae.toneMapping!==Ct||Ae.morphTargetsCount!==en||!!Ae.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(mt=!0):(mt=!0,Ae.__version=W.version);let wn=Ae.currentProgram;mt===!0&&(wn=za(W,B,X),E&&W.isNodeMaterial&&E.onUpdateProgram(W,wn,Ae));let Gn=!1,Si=!1,ms=!1,St=wn.getUniforms(),Bt=Ae.uniforms;if(v.useProgram(wn.program)&&(Gn=!0,Si=!0,ms=!0),W.id!==V&&(V=W.id,Si=!0),Ae.needsLights){let wt=wp(T.state.lightProbeGridArray,X);Ae.lightProbeGrid!==wt&&(Ae.lightProbeGrid=wt,Si=!0)}if(Gn||q!==w){v.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),St.setValue(O,"projectionMatrix",w.projectionMatrix),St.setValue(O,"viewMatrix",w.matrixWorldInverse);let Ei=St.map.cameraPosition;Ei!==void 0&&Ei.setValue(O,de.setFromMatrixPosition(w.matrixWorld)),L.logarithmicDepthBuffer&&St.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&St.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),q!==w&&(q=w,Si=!0,ms=!0)}if(Ae.needsLights&&(an.state.sunShadowMap.length>0&&St.setValue(O,"sunShadowMap",an.state.sunShadowMap,K),an.state.directionalShadowMap.length>0&&St.setValue(O,"directionalShadowMap",an.state.directionalShadowMap,K),an.state.spotShadowMap.length>0&&St.setValue(O,"spotShadowMap",an.state.spotShadowMap,K),an.state.pointShadowMap.length>0&&St.setValue(O,"pointShadowMap",an.state.pointShadowMap,K)),X.isSkinnedMesh){St.setOptional(O,X,"bindMatrix"),St.setOptional(O,X,"bindMatrixInverse");let wt=X.skeleton;wt&&(wt.boneTexture===null&&wt.computeBoneTexture(),St.setValue(O,"boneTexture",wt.boneTexture,K))}X.isBatchedMesh&&(St.setOptional(O,X,"batchingTexture"),St.setValue(O,"batchingTexture",X._matricesTexture,K),St.setOptional(O,X,"batchingIdTexture"),St.setValue(O,"batchingIdTexture",X._indirectTexture,K),St.setOptional(O,X,"batchingColorTexture"),X._colorsTexture!==null&&St.setValue(O,"batchingColorTexture",X._colorsTexture,K));let bi=$.morphAttributes;if((bi.position!==void 0||bi.normal!==void 0||bi.color!==void 0)&&k.update(X,$,wn),(Si||Ae.receiveShadow!==X.receiveShadow)&&(Ae.receiveShadow=X.receiveShadow,St.setValue(O,"receiveShadow",X.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&B.environment!==null&&(Bt.envMapIntensity.value=B.environmentIntensity),Bt.dfgLUT!==void 0&&(Bt.dfgLUT.value=Pv()),Si){if(St.setValue(O,"toneMappingExposure",P.toneMappingExposure),Ae.needsLights&&Rp(Bt,ms),be&&W.fog===!0&&Ne.refreshFogUniforms(Bt,be),Ne.refreshMaterialUniforms(Bt,W,Q,J,T.state.transmissionRenderTarget[w.id]),Ae.needsLights&&Ae.lightProbeGrid){let wt=Ae.lightProbeGrid;Bt.probesSH.value=wt.texture,Bt.probesMin.value.copy(wt.boundingBox.min),Bt.probesMax.value.copy(wt.boundingBox.max),Bt.probesResolution.value.copy(wt.resolution)}Qs.upload(O,wu(Ae),Bt,K)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Qs.upload(O,wu(Ae),Bt,K),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&St.setValue(O,"center",X.center),St.setValue(O,"modelViewMatrix",X.modelViewMatrix),St.setValue(O,"normalMatrix",X.normalMatrix),St.setValue(O,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){let wt=W.uniformsGroups;for(let Ei=0,gs=wt.length;Ei<gs;Ei++){let Cu=wt[Ei];se.update(Cu,wn),se.bind(Cu,wn)}}return wn}function Rp(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.sunLights.needsUpdate=B,w.sunLightShadows.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function Cp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(w,B,$){let W=H.get(w);W.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),H.get(w.texture).__webglTexture=B,H.get(w.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:$,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,B){let $=H.get(w);$.__webglFramebuffer=B,$.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(w,B=0,$=0){Z=w,F=B,G=$;let W=null,X=!1,be=!1;if(w){let Me=H.get(w);if(Me.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(O.FRAMEBUFFER,Me.__webglFramebuffer),Y.copy(w.viewport),ue.copy(w.scissor),xe=w.scissorTest,v.viewport(Y),v.scissor(ue),v.setScissorTest(xe),V=-1;return}else if(Me.__webglFramebuffer===void 0)K.setupRenderTarget(w);else if(Me.__hasExternalTextures)K.rebindTextures(w,H.get(w.texture).__webglTexture,H.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let it=w.depthTexture;if(Me.__boundDepthTexture!==it){if(it!==null&&H.has(it)&&(w.width!==it.image.width||w.height!==it.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(w)}}let Ie=w.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(be=!0);let Ue=H.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ue[B])?W=Ue[B][$]:W=Ue[B],X=!0):w.samples>0&&K.useMultisampledRTT(w)===!1?W=H.get(w).__webglMultisampledFramebuffer:Array.isArray(Ue)?W=Ue[$]:W=Ue,Y.copy(w.viewport),ue.copy(w.scissor),xe=w.scissorTest}else Y.copy(Ee).multiplyScalar(Q).floor(),ue.copy(He).multiplyScalar(Q).floor(),xe=pt;if($!==0&&(W=D),v.bindFramebuffer(O.FRAMEBUFFER,W)&&v.drawBuffers(w,W),v.viewport(Y),v.scissor(ue),v.setScissorTest(xe),X){let Me=H.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+B,Me.__webglTexture,$)}else if(be){let Me=B;for(let Ie=0;Ie<w.textures.length;Ie++){let Ue=H.get(w.textures[Ie]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Ie,Ue.__webglTexture,$,Me)}}else if(w!==null&&$!==0){let Me=H.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Me.__webglTexture,$)}V=-1};function Ru(w){let B=H.get(w);return(B.__readFormat!==w.format||B.__readType!==w.type)&&(B.__readFormat=w.format,B.__readType=w.type,B.__formatReadable=L.textureFormatReadable(w.format),B.__typeReadable=L.textureTypeReadable(w.type)),B}this.readRenderTargetPixels=function(w,B,$,W,X,be,Re,Me=0){if(!(w&&w.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=H.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(Ie=Ie[Re]),Ie){v.bindFramebuffer(O.FRAMEBUFFER,Ie);try{let Ue=w.textures[Me],it=Ue.format,ct=Ue.type;w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Me);let Le=Ru(Ue);if(Le.__formatReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Le.__typeReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-W&&$>=0&&$<=w.height-X&&O.readPixels(B,$,W,X,ve.convert(it),ve.convert(ct),be)}finally{let Ue=Z!==null?H.get(Z).__webglFramebuffer:null;v.bindFramebuffer(O.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(w,B,$,W,X,be,Re,Me=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=H.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(Ie=Ie[Re]),Ie)if(B>=0&&B<=w.width-W&&$>=0&&$<=w.height-X){v.bindFramebuffer(O.FRAMEBUFFER,Ie);let Ue=w.textures[Me],it=Ue.format,ct=Ue.type;w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Me);let Le=Ru(Ue);if(Le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let vt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,vt),O.bufferData(O.PIXEL_PACK_BUFFER,be.byteLength,O.STREAM_READ),O.readPixels(B,$,W,X,ve.convert(it),ve.convert(ct),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Ht=Z!==null?H.get(Z).__webglFramebuffer:null;v.bindFramebuffer(O.FRAMEBUFFER,Ht);let Ct=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Hd(O,Ct,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,vt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,be),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(vt),O.deleteSync(Ct),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,B=null,$=0){let W=Math.pow(2,-$),X=Math.floor(w.image.width*W),be=Math.floor(w.image.height*W),Re=B!==null?B.x:0,Me=B!==null?B.y:0;K.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,$,0,0,Re,Me,X,be),v.unbindTexture()},this.copyTextureToTexture=function(w,B,$=null,W=null,X=0,be=0){let Re,Me,Ie,Ue,it,ct,Le,vt,Ht,Ct=w.isCompressedTexture?w.mipmaps[be]:w.image;if($!==null)Re=$.max.x-$.min.x,Me=$.max.y-$.min.y,Ie=$.isBox3?$.max.z-$.min.z:1,Ue=$.min.x,it=$.min.y,ct=$.isBox3?$.min.z:0;else{let Bt=Math.pow(2,-X);Re=Math.floor(Ct.width*Bt),Me=Math.floor(Ct.height*Bt),w.isDataArrayTexture?Ie=Ct.depth:w.isData3DTexture?Ie=Math.floor(Ct.depth*Bt):Ie=1,Ue=0,it=0,ct=0}W!==null?(Le=W.x,vt=W.y,Ht=W.z):(Le=0,vt=0,Ht=0);let bt=ve.convert(B.format),en=ve.convert(B.type),Ae;B.isData3DTexture?(K.setTexture3D(B,0),Ae=O.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(K.setTexture2DArray(B,0),Ae=O.TEXTURE_2D_ARRAY):(K.setTexture2D(B,0),Ae=O.TEXTURE_2D),v.activeTexture(O.TEXTURE0),v.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,B.flipY),v.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),v.pixelStorei(O.UNPACK_ALIGNMENT,B.unpackAlignment);let an=v.getParameter(O.UNPACK_ROW_LENGTH),mt=v.getParameter(O.UNPACK_IMAGE_HEIGHT),wn=v.getParameter(O.UNPACK_SKIP_PIXELS),Gn=v.getParameter(O.UNPACK_SKIP_ROWS),Si=v.getParameter(O.UNPACK_SKIP_IMAGES);v.pixelStorei(O.UNPACK_ROW_LENGTH,Ct.width),v.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ct.height),v.pixelStorei(O.UNPACK_SKIP_PIXELS,Ue),v.pixelStorei(O.UNPACK_SKIP_ROWS,it),v.pixelStorei(O.UNPACK_SKIP_IMAGES,ct);let ms=w.isDataArrayTexture||w.isData3DTexture,St=B.isDataArrayTexture||B.isData3DTexture;if(w.isDepthTexture){let Bt=H.get(w),bi=H.get(B),wt=H.get(Bt.__renderTarget),Ei=H.get(bi.__renderTarget);v.bindFramebuffer(O.READ_FRAMEBUFFER,wt.__webglFramebuffer),v.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let gs=0;gs<Ie;gs++)ms&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,H.get(w).__webglTexture,X,ct+gs),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,H.get(B).__webglTexture,be,Ht+gs)),O.blitFramebuffer(Ue,it,Re,Me,Le,vt,Re,Me,O.DEPTH_BUFFER_BIT,O.NEAREST);v.bindFramebuffer(O.READ_FRAMEBUFFER,null),v.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(X!==0||w.isRenderTargetTexture||H.has(w)){let Bt=H.get(w),bi=H.get(B);v.bindFramebuffer(O.READ_FRAMEBUFFER,C),v.bindFramebuffer(O.DRAW_FRAMEBUFFER,R);for(let wt=0;wt<Ie;wt++)ms?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Bt.__webglTexture,X,ct+wt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Bt.__webglTexture,X),St?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,bi.__webglTexture,be,Ht+wt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,bi.__webglTexture,be),X!==0?O.blitFramebuffer(Ue,it,Re,Me,Le,vt,Re,Me,O.COLOR_BUFFER_BIT,O.NEAREST):St?O.copyTexSubImage3D(Ae,be,Le,vt,Ht+wt,Ue,it,Re,Me):O.copyTexSubImage2D(Ae,be,Le,vt,Ue,it,Re,Me);v.bindFramebuffer(O.READ_FRAMEBUFFER,null),v.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else St?w.isDataTexture||w.isData3DTexture?O.texSubImage3D(Ae,be,Le,vt,Ht,Re,Me,Ie,bt,en,Ct.data):B.isCompressedArrayTexture?O.compressedTexSubImage3D(Ae,be,Le,vt,Ht,Re,Me,Ie,bt,Ct.data):O.texSubImage3D(Ae,be,Le,vt,Ht,Re,Me,Ie,bt,en,Ct):w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,be,Le,vt,Re,Me,bt,en,Ct.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,be,Le,vt,Ct.width,Ct.height,bt,Ct.data):O.texSubImage2D(O.TEXTURE_2D,be,Le,vt,Re,Me,bt,en,Ct);v.pixelStorei(O.UNPACK_ROW_LENGTH,an),v.pixelStorei(O.UNPACK_IMAGE_HEIGHT,mt),v.pixelStorei(O.UNPACK_SKIP_PIXELS,wn),v.pixelStorei(O.UNPACK_SKIP_ROWS,Gn),v.pixelStorei(O.UNPACK_SKIP_IMAGES,Si),be===0&&B.generateMipmaps&&O.generateMipmap(Ae),v.unbindTexture()},this.initRenderTarget=function(w){H.get(w).__webglFramebuffer===void 0&&K.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?K.setTextureCube(w,0):w.isData3DTexture?K.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?K.setTexture2DArray(w,0):K.setTexture2D(w,0),v.unbindTexture()},this.resetState=function(){F=0,G=0,Z=null,v.reset(),Te.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}};var nr=class i extends ke{constructor(){let e=i.SkyShader,t=new It({name:e.name,uniforms:pn.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Yt,depthWrite:!1});super(new ln(1,1,1),t),this.isSky=!0}};nr.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new U},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
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

		}`};var ql=class extends Fn{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new ln;e.deleteAttribute("uv");let t=new qt({side:Yt}),n=new qt,s=new ts(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new ke(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Vr(e,n,6),o=new Xt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new ke(e,ir(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new ke(e,ir(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new ke(e,ir(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new ke(e,ir(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new ke(e,ir(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new ke(e,ir(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function ir(i){return new ia({color:0,emissive:16777215,emissiveIntensity:i})}var sr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var En=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Iv=new Fi(-1,1,1,-1,0,1),qh=class extends Ft{constructor(){super(),this.setAttribute("position",new ut([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ut([0,2,0,0,2,0],2))}},Lv=new qh,Gi=class{constructor(e){this._mesh=new ke(Lv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Iv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Yl=class extends En{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof It?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=pn.clone(e.uniforms),this.material=new It({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Gi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Aa=class extends En{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},$l=class extends En{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Zl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new he);this._width=n.width,this._height=n.height,t=new Vt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Kt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Yl(sr),this.copyPass.material.blending=Gt,this.timer=new oa}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Aa!==void 0&&(a instanceof Aa?n=!0:a instanceof $l&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new he);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Jl=class extends En{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Fe}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Ra={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new he},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new et},cameraProjectionMatrixInverse:{value:new et},cameraWorldMatrix:{value:new et},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new U(-1,-1,-1)},sceneBoxMax:{value:new U(1,1,1)}},vertexShader:`

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
		}`},Ca={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Kl={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Af(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=Dv(e),n=t.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],l=2*Math.PI*o/n,c=new U(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new Kn(s,e,e);return r.wrapS=Rn,r.wrapT=Rn,r.needsUpdate=!0,r}function Dv(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=a++;r++,s--}return n}var Pa={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Yh(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new he},cameraProjectionMatrixInverse:{value:new et},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Yh(i,e,t){let n=Nv(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function Nv(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,a=Math.pow(s/(i-1),t);n.push(new U(Math.cos(r),Math.sin(r),a))}return n}var jl=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),h=(3-Math.sqrt(3))/6,d=(l+c)*h,u=l-d,f=c-d,g=e-u,y=t-f,m,p;g>y?(m=1,p=0):(m=0,p=1);let S=g-m+h,b=y-p+h,x=g-1+2*h,M=y-1+2*h,T=l&255,I=c&255,_=this.perm[T+this.perm[I]]%12,A=this.perm[T+m+this.perm[I+p]]%12,P=this.perm[T+1+this.perm[I+1]]%12,N=.5-g*g-y*y;N<0?n=0:(N*=N,n=N*N*this._dot(this.grad3[_],g,y));let E=.5-S*S-b*b;E<0?s=0:(E*=E,s=E*E*this._dot(this.grad3[A],S,b));let D=.5-x*x-M*M;return D<0?r=0:(D*=D,r=D*D*this._dot(this.grad3[P],x,M)),70*(n+s+r)}noise3d(e,t,n){let s,r,a,o,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),d=Math.floor(t+c),u=Math.floor(n+c),f=1/6,g=(h+d+u)*f,y=h-g,m=d-g,p=u-g,S=e-y,b=t-m,x=n-p,M,T,I,_,A,P;S>=b?b>=x?(M=1,T=0,I=0,_=1,A=1,P=0):S>=x?(M=1,T=0,I=0,_=1,A=0,P=1):(M=0,T=0,I=1,_=1,A=0,P=1):b<x?(M=0,T=0,I=1,_=0,A=1,P=1):S<x?(M=0,T=1,I=0,_=0,A=1,P=1):(M=0,T=1,I=0,_=1,A=1,P=0);let N=S-M+f,E=b-T+f,D=x-I+f,C=S-_+2*f,R=b-A+2*f,F=x-P+2*f,G=S-1+3*f,Z=b-1+3*f,V=x-1+3*f,q=h&255,Y=d&255,ue=u&255,xe=this.perm[q+this.perm[Y+this.perm[ue]]]%12,Je=this.perm[q+M+this.perm[Y+T+this.perm[ue+I]]]%12,Ke=this.perm[q+_+this.perm[Y+A+this.perm[ue+P]]]%12,tt=this.perm[q+1+this.perm[Y+1+this.perm[ue+1]]]%12,J=.6-S*S-b*b-x*x;J<0?s=0:(J*=J,s=J*J*this._dot3(this.grad3[xe],S,b,x));let Q=.6-N*N-E*E-D*D;Q<0?r=0:(Q*=Q,r=Q*Q*this._dot3(this.grad3[Je],N,E,D));let ce=.6-C*C-R*R-F*F;ce<0?a=0:(ce*=ce,a=ce*ce*this._dot3(this.grad3[Ke],C,R,F));let Ce=.6-G*G-Z*Z-V*V;return Ce<0?o=0:(Ce*=Ce,o=Ce*Ce*this._dot3(this.grad3[tt],G,Z,V)),32*(s+r+a+o)}noise4d(e,t,n,s){let r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,d,u,f,g,y=(e+t+n+s)*l,m=Math.floor(e+y),p=Math.floor(t+y),S=Math.floor(n+y),b=Math.floor(s+y),x=(m+p+S+b)*c,M=m-x,T=p-x,I=S-x,_=b-x,A=e-M,P=t-T,N=n-I,E=s-_,D=A>P?32:0,C=A>N?16:0,R=P>N?8:0,F=A>E?4:0,G=P>E?2:0,Z=N>E?1:0,V=D+C+R+F+G+Z,q=a[V][0]>=3?1:0,Y=a[V][1]>=3?1:0,ue=a[V][2]>=3?1:0,xe=a[V][3]>=3?1:0,Je=a[V][0]>=2?1:0,Ke=a[V][1]>=2?1:0,tt=a[V][2]>=2?1:0,J=a[V][3]>=2?1:0,Q=a[V][0]>=1?1:0,ce=a[V][1]>=1?1:0,Ce=a[V][2]>=1?1:0,Ee=a[V][3]>=1?1:0,He=A-q+c,pt=P-Y+c,ne=N-ue+c,re=E-xe+c,ae=A-Je+2*c,oe=P-Ke+2*c,de=N-tt+2*c,Ve=E-J+2*c,Oe=A-Q+3*c,We=P-ce+3*c,Ye=N-Ce+3*c,O=E-Ee+3*c,dt=A-1+4*c,nt=P-1+4*c,L=N-1+4*c,v=E-1+4*c,z=m&255,H=p&255,K=S&255,le=b&255,fe=o[z+o[H+o[K+o[le]]]]%32,j=o[z+q+o[H+Y+o[K+ue+o[le+xe]]]]%32,ie=o[z+Je+o[H+Ke+o[K+tt+o[le+J]]]]%32,ge=o[z+Q+o[H+ce+o[K+Ce+o[le+Ee]]]]%32,Ne=o[z+1+o[H+1+o[K+1+o[le+1]]]]%32,me=.6-A*A-P*P-N*N-E*E;me<0?h=0:(me*=me,h=me*me*this._dot4(r[fe],A,P,N,E));let pe=.6-He*He-pt*pt-ne*ne-re*re;pe<0?d=0:(pe*=pe,d=pe*pe*this._dot4(r[j],He,pt,ne,re));let Pe=.6-ae*ae-oe*oe-de*de-Ve*Ve;Pe<0?u=0:(Pe*=Pe,u=Pe*Pe*this._dot4(r[ie],ae,oe,de,Ve));let Be=.6-Oe*Oe-We*We-Ye*Ye-O*O;Be<0?f=0:(Be*=Be,f=Be*Be*this._dot4(r[ge],Oe,We,Ye,O));let $e=.6-dt*dt-nt*nt-L*L-v*v;return $e<0?g=0:($e*=$e,g=$e*$e*this._dot4(r[Ne],dt,nt,L,v)),27*(h+d+u+f+g)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var Ia=class i extends En{constructor(e,t,n=512,s=512,r,a,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Af(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Vt(this.width,this.height,{type:Kt,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new It({defines:Object.assign({},Ra.defines),uniforms:pn.clone(Ra.uniforms),vertexShader:Ra.vertexShader,fragmentShader:Ra.fragmentShader,blending:Gt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new na,this.normalMaterial.blending=Gt,this.pdMaterial=new It({defines:Object.assign({},Pa.defines),uniforms:pn.clone(Pa.uniforms),vertexShader:Pa.vertexShader,fragmentShader:Pa.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new It({defines:Object.assign({},Ca.defines),uniforms:pn.clone(Ca.uniforms),vertexShader:Ca.vertexShader,fragmentShader:Ca.fragmentShader,blending:Gt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new It({uniforms:pn.clone(sr.uniforms),vertexShader:sr.vertexShader,fragmentShader:sr.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:ca,blendDst:is,blendEquation:Cn,blendSrcAlpha:la,blendDstAlpha:is,blendEquationAlpha:Cn}),this.blendMaterial=new It({uniforms:pn.clone(Kl.uniforms),vertexShader:Kl.vertexShader,fragmentShader:Kl.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Zo,blendSrc:ca,blendDst:is,blendEquation:Cn,blendSrcAlpha:la,blendDstAlpha:is,blendEquationAlpha:Cn}),this._fsQuad=new Gi(null),this._originalClearColor=new Fe,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new jn,this.depthTexture.format=ei,this.depthTexture.type=zi,this.normalRenderTarget=new Vt(this.width,this.height,{minFilter:zt,magFilter:zt,type:Kt,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Yh(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Gt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Gt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Gt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Gt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Gt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new jl,n=e*e*4,s=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let l=a,c=o;s[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new Kn(s,e,e,cn,sn);return r.wrapS=Rn,r.wrapT=Rn,r.needsUpdate=!0,r}};Ia.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var La={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Ql=class extends En{constructor(){super(),this.isOutputPass=!0,this.uniforms=pn.clone(La.uniforms),this.material=new Hs({name:La.name,uniforms:this.uniforms,vertexShader:La.vertexShader,fragmentShader:La.fragmentShader}),this._fsQuad=new Gi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ot.getTransfer(this._outputColorSpace)===xt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ha?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ua?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===da?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ss?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===pa?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ma?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===fa&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var nc={easy:{label:"Easy",days:40},medium:{label:"Normal",days:30},hard:{label:"Hard",days:20}},ii={hamburger:{name:"Burger",cost:15,stamina:5,happiness:10,mass:-5},broccoli:{name:"Broccoli",cost:5,stamina:10,happiness:-10,mass:5},meat:{name:"Steak",cost:10,stamina:5,happiness:5,mass:-5}},ar=35;var Uv=2,Hi=5,rr=10,ec=20,Fv=30,$h=[{id:"moneybag",title:"A bag of money",weight:.2,text:"You find a bag full of money lying on the ground. Do you take it?",accept:{money:Fv,happiness:Hi,stamina:-Hi},deny:{happiness:-Hi}},{id:"robber",title:"Robber",weight:.2,text:"A robber tries to steal your wallet. Do you fight back?",accept:{mass:Hi,stamina:-ec},deny:{money:-ec,happiness:-rr}},{id:"pusher",title:"Shady dealer",weight:.2,text:"A shady guy offers you some steroids. Do you accept?",accept:{mass:rr,happiness:-rr,money:-ec},deny:{happiness:Hi}},{id:"gymbro",title:"Your gym bro",weight:.2,text:"Your gym bro is walking by. You owe him some money... do you stop to say hi?",accept:{happiness:Hi,stamina:rr,money:-Hi},deny:{happiness:-rr}},{id:"icecream",title:"Ice cream truck",weight:.2,text:"There is an ice cream truck parked nearby. Do you buy one?",accept:{mass:-Uv,happiness:ec},deny:{happiness:-Hi,stamina:rr}}],Da=(i,e,t)=>Math.max(e,Math.min(t,i)),tc=class{constructor(e="medium"){this.difficulty=e,this.days=nc[e].days,this.totalDays=this.days,this.money=20,this.stamina=100,this.happiness=70,this.legs=1,this.chest=1,this.back=1,this.inventory={hamburger:0,broccoli:0,meat:0},this.listeners=new Set}get mass(){return this.legs+this.chest+this.back}onChange(e){this.listeners.add(e)}emit(){this.listeners.forEach(e=>e(this))}apply(e){for(let[t,n]of Object.entries(e))if(t==="money")this.money=Math.max(0,this.money+n);else if(t==="mass"){let s=n/3;this.legs=Da(this.legs+s,0,100),this.chest=Da(this.chest+s,0,100),this.back=Da(this.back+s,0,100)}else t in this&&(this[t]=Da(this[t]+n,0,100));this.emit()}buy(e){let t=ii[e];return this.money<t.cost?!1:(this.money-=t.cost,this.inventory[e]+=1,this.emit(),!0)}eat(e){if(this.inventory[e]<=0)return!1;let t=ii[e];return this.inventory[e]-=1,this.apply({stamina:t.stamina,happiness:t.happiness,mass:t.mass}),!0}sleep(){this.days-=1,this.stamina=100,this.happiness=Da(this.happiness-3,0,100),this.emit()}canWorkout(){return this.stamina>=ar}randomEncounter(){let e=Math.random(),t=0;for(let n of $h)if(t+=n.weight,e<t)return n;return $h[$h.length-1]}isWin(){return this.legs>=100&&this.chest>=100&&this.back>=100}gameOverReason(){return this.days<=0?"You ran out of days.":this.stamina<=0?"You collapsed from exhaustion.":this.happiness<=0?"You are too down to keep going.":null}};var or=i=>440*Math.pow(2,(i-69)/12),lr=[57,60,64],Zh=[53,57,60],Jh=[48,52,55],cs=[55,59,62],Ov=[50,53,57],Bv=[52,55,59],Rf=[52,56,59],kv=[48,51,55],zv=[56,60,63],Vv=[51,55,58],Gv=[46,50,53],Hv=[53,57,60,64],Kh=[48,52,55,59],jh=[57,60,64,67],Cf=[50,53,57,60],gt=i=>i.split("").map(e=>e==="x"),Pf={title:{bpm:104,chords:[lr,Zh,Jh,cs],swing:0,kick:gt("x.......x......."),snare:gt("....x.......x..."),hat:gt("..x...x...x...x."),bass:[0,null,null,0,null,null,12,null,0,null,null,0,null,7,null,null],arp:"up",arpWave:"square",arpVol:.05,lead:!0,pad:"sawtooth",padVol:.035},city:{bpm:96,chords:[Hv,Kh,jh,cs],swing:.12,kick:gt("x......x..x....."),snare:gt("....x.......x..."),hat:gt("x.x.x.x.x.x.x.x."),bass:[0,null,null,null,null,null,7,null,0,null,null,12,null,null,7,null],arp:"updown",arpWave:"triangle",arpVol:.06,lead:!0,pad:"triangle",padVol:.05},home:{bpm:76,chords:[Cf,cs,Kh,jh],swing:.2,kick:gt("x.........x....."),snare:gt("....x.......x..."),hat:gt("..x...x...x...x."),bass:[0,null,null,null,null,null,null,null,7,null,null,null,5,null,null,null],arp:null,lead:!0,leadWave:"sine",pad:"triangle",padVol:.07,lofi:!0},gym:{bpm:128,chords:[lr,lr,Zh,cs],swing:0,kick:gt("x...x...x...x..."),snare:gt("....x.......x..."),hat:gt("..x...x...x...x."),bass:[0,0,12,0,0,12,0,12,0,0,12,0,0,12,0,12],bassWave:"sawtooth",arp:"up",arpWave:"sawtooth",arpVol:.035,lead:!0,leadWave:"square",pad:"sawtooth",padVol:.025},workout:{bpm:150,chords:[Bv,Jh,cs,Rf],swing:0,kick:gt("x...x...x...x.x."),snare:gt("....x.......x..x"),hat:gt("xxxxxxxxxxxxxxxx"),bass:[0,12,0,12,0,12,0,12,0,12,0,12,0,12,7,12],bassWave:"sawtooth",arp:"up",arpWave:"square",arpVol:.04,lead:!1,pad:null},shop:{bpm:112,chords:[Kh,jh,Cf,cs],swing:.1,kick:gt("x.....x...x....."),snare:gt("...x..x....x..x."),hat:gt("x.xxx.xxx.xxx.xx"),bass:[0,null,null,7,null,null,12,null,0,null,null,7,null,5,null,null],arp:"updown",arpWave:"triangle",arpVol:.05,lead:!0,leadWave:"triangle",pad:"sine",padVol:.06},bank:{bpm:120,chords:[kv,zv,Vv,Gv],swing:0,kick:gt("x.......x.x....."),snare:gt("....x.......x..."),hat:gt("x.x.x.x.x.x.x.x."),bass:[0,null,0,null,0,null,0,null,0,null,0,null,0,null,7,null],bassWave:"square",arp:"down",arpWave:"square",arpVol:.035,lead:!1,pad:"sawtooth",padVol:.03},gameover:{bpm:70,chords:[lr,Ov,Rf,lr],swing:0,kick:gt("x..............."),snare:gt("................"),hat:gt("................"),bass:[0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],arp:null,lead:!0,leadWave:"triangle",pad:"triangle",padVol:.07},win:{bpm:132,chords:[Jh,cs,lr,Zh],swing:0,kick:gt("x...x...x...x..."),snare:gt("....x.......x..."),hat:gt("x.x.x.x.x.x.x.x."),bass:[0,null,12,null,0,null,12,null,0,null,12,null,0,null,12,null],arp:"up",arpWave:"square",arpVol:.05,lead:!0,leadWave:"square",pad:"sawtooth",padVol:.03}},si=77,Na=80,Qh=82,eu=84,Wv=85,Xv=75,qv=[[si,null,si,Na,si,null,eu,null,si,si,Na,Qh,Wv,eu,Na,null],[si,null,si,Na,si,null,eu,null,Qh,Qh,Na,si,Xv,si,null,null]],Yv=[[69,72,76,72,74,72,69,67],[65,69,72,69,74,72,69,65],[64,67,72,67,76,74,72,67],[67,71,74,71,79,76,74,71]],$v=[[75,82,78,82,75,82,85,82],[75,82,78,82,87,85,82,78],[71,78,75,78,71,78,83,78],[73,80,77,80,85,82,80,77]];Object.assign(Pf,{phonk:{bpm:128,chords:[[41],[41],[37],[39]],swing:0,gym:"phonk",kick:gt("x......x..x....."),snare:gt("....x.......x...")},hardstyle:{bpm:150,chords:[[45],[41],[48],[43]],swing:0,gym:"hardstyle",kick:gt("x...x...x...x..."),snare:gt("....x.......x...")},gymrap:{bpm:140,chords:[[39],[39],[35],[37]],swing:0,gym:"gymrap",kick:gt("x.....x...x..x.."),snare:gt("........x.......")}});var hs=[{id:"phonk",name:"Drift Phonk"},{id:"hardstyle",name:"Hardstyle Pump"},{id:"gymrap",name:"Gym Rap"},{id:"gym",name:"Euro Gym"}],Zv={start:["Light weight baby!","Yeah buddy!","Let's go!","One more rep!","Come on, push it!"],great:["Ain't nothin' but a peanut!","Yeah buddy! Light weight!","Beast mode!"],bad:["No pain, no gain!","Come on bro, focus!"],bro:["Yo bro!","Do you even lift, bro?","We're gonna make it, bro!","Never skip leg day!"]};function Jv(i){let e=i>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}var ic=class{constructor(){this.ctx=null,this.muted=!1,this.volume=.7,this.current=null,this.wanted=null}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.ctx=new e;let t=this.ctx;this.master=t.createGain(),this.master.gain.value=this.volume;let n=t.createDynamicsCompressor();n.threshold.value=-18,n.ratio.value=4,this.master.connect(n).connect(t.destination),this.musicGain=t.createGain(),this.musicGain.gain.value=.8,this.musicGain.connect(this.master),this.sfxGain=t.createGain(),this.sfxGain.gain.value=.9,this.sfxGain.connect(this.master),this.delay=t.createDelay(1),this.delay.delayTime.value=.28;let s=t.createGain();s.gain.value=.3;let r=t.createGain();r.gain.value=.25,this.delay.connect(s).connect(this.delay),this.delay.connect(r).connect(this.musicGain);let a=t.sampleRate;this.noise=t.createBuffer(1,a,t.sampleRate);let o=this.noise.getChannelData(0);for(let l=0;l<a;l++)o[l]=Math.random()*2-1;this.wanted&&this.play(this.wanted,!0)}setMuted(e){this.muted=e,this.master&&this.master.gain.setTargetAtTime(e?0:this.volume,this.ctx.currentTime,.05)}toggleMute(){return this.setMuted(!this.muted),this.muted}play(e,t=!1){if(this.wanted=e,!this.ctx||!t&&this.current&&this.current.name===e)return;let n=this.ctx,s=n.currentTime;if(this.current){let u=this.current;clearInterval(u.timer),u.bus.gain.cancelScheduledValues(s),u.bus.gain.setValueAtTime(u.bus.gain.value,s),u.bus.gain.linearRampToValueAtTime(0,s+.8),setTimeout(()=>u.bus.disconnect(),1500)}let r=Pf[e],a=n.createGain();a.gain.setValueAtTime(0,s),a.gain.linearRampToValueAtTime(1,s+.8),a.connect(this.musicGain);let o=n.createWaveShaper();o.curve=this.distCurve(r.gym==="hardstyle"?60:25),o.oversample="2x";let l=n.createGain();l.gain.value=.35,o.connect(l).connect(a);let c=this.makeMelody(r,e.length*97+r.bpm),h={name:e,bus:a,drive:o,track:r,melody:c,step:0,next:s+.1},d=60/r.bpm/4;h.timer=setInterval(()=>{for(;h.next<n.currentTime+.2;){this.scheduleStep(h,h.step,h.next);let u=h.step%2===0?r.swing:-r.swing;h.next+=d*(1+u),h.step++}},50),this.current=h}makeMelody(e,t){let n=Jv(t),s=[];for(let r=0;r<2;r++){let a=[];e.chords.forEach(o=>{for(let l=0;l<16;l++){let c=l%4===0;if(!(c?n()<.75:n()<.28)){a.push(null);continue}let d=o[Math.floor(n()*o.length)]+12,u=c&&n()<.5?3:1;a.push({note:d,len:u})}}),s.push(a)}return s}scheduleStep(e,t,n){let{track:s,bus:r}=e,a=t%16,o=Math.floor(t/16),l=s.chords[o%s.chords.length],c=60/s.bpm/4;if(s.gym){this.gymStep(e,a,o,n,c);return}s.kick[a]&&this.kick(n,r),s.snare[a]&&this.snare(n,r),s.hat[a]&&this.hat(n,r,a%4===2?.05:.03);let h=s.bass[a];if(h!=null&&this.tone(l[0]-24+h,n,c*1.6,s.bassWave||"triangle",.16,r,900),s.pad&&a===0&&l.forEach(d=>this.tone(d,n,c*15,s.pad,s.padVol,r,1400,.25,.9)),s.arp&&a%2===0){let d=[...l,l[0]+12],u=a/2;if(s.arp==="down")u=d.length-1-u%d.length;else if(s.arp==="updown"){let f=d.length*2-2;u%=f,u>=d.length&&(u=f-u)}this.tone(d[u%d.length]+12,n,c*.9,s.arpWave,s.arpVol,r,3e3,.005,.2,!0)}if(s.lead){let u=e.melody[Math.floor(o/s.chords.length)%2][o%s.chords.length*16+a];u&&this.tone(u.note,n,c*u.len,s.leadWave||"square",.06,r,2600,.01,.5,!0)}}tone(e,t,n,s,r,a,o=2e3,l=.01,c=.15,h=!1){let d=this.ctx,u=d.createOscillator();u.type=s,u.frequency.setValueAtTime(or(e),t);let f=d.createBiquadFilter();f.type="lowpass",f.frequency.value=o;let g=d.createGain();g.gain.setValueAtTime(1e-4,t),g.gain.linearRampToValueAtTime(r,t+l),g.gain.setValueAtTime(r,t+Math.max(l,n-.02)),g.gain.exponentialRampToValueAtTime(1e-4,t+n+c),u.connect(f).connect(g).connect(a),h&&g.connect(this.delay),u.start(t),u.stop(t+n+c+.05)}kick(e,t,n=.5){let s=this.ctx,r=s.createOscillator(),a=s.createGain();r.frequency.setValueAtTime(150,e),r.frequency.exponentialRampToValueAtTime(40,e+.15),a.gain.setValueAtTime(n,e),a.gain.exponentialRampToValueAtTime(.001,e+.3),r.connect(a).connect(t),r.start(e),r.stop(e+.32)}noiseHit(e,t,n,s,r,a){let o=this.ctx,l=o.createBufferSource();l.buffer=this.noise;let c=o.createBiquadFilter();c.type=r,c.frequency.value=a;let h=o.createGain();h.gain.setValueAtTime(n,e),h.gain.exponentialRampToValueAtTime(.001,e+s),l.connect(c).connect(h).connect(t),l.start(e,Math.random()*.5),l.stop(e+s+.02)}snare(e,t){this.noiseHit(e,t,.22,.18,"highpass",1500),this.tone(50,e,.03,"triangle",.12,t,4e3,.001,.08)}hat(e,t,n){this.noiseHit(e,t,n,.04,"highpass",8e3)}distCurve(e){let n=new Float32Array(1024);for(let s=0;s<1024;s++){let r=s*2/1024-1;n[s]=(1+e)*r/(1+e*Math.abs(r))}return n}bass808(e,t,n,s,r=null,a=.9){let o=this.ctx,l=o.createOscillator();l.type="sine";let c=or(t);l.frequency.setValueAtTime(r?or(r):c*1.5,e),l.frequency.exponentialRampToValueAtTime(c,e+(r?.09:.03));let h=o.createGain();h.gain.setValueAtTime(1e-4,e),h.gain.linearRampToValueAtTime(a,e+.005),h.gain.setValueAtTime(a,e+n*.6),h.gain.exponentialRampToValueAtTime(.001,e+n),l.connect(h).connect(s),l.start(e),l.stop(e+n+.05)}cowbell(e,t,n,s=.07){let r=this.ctx,a=or(t),o=r.createBiquadFilter();o.type="bandpass",o.frequency.value=a*1.3,o.Q.value=1.2;let l=r.createGain();l.gain.setValueAtTime(s,e),l.gain.exponentialRampToValueAtTime(s*.3,e+.05),l.gain.exponentialRampToValueAtTime(.001,e+.35),[1,1.48].forEach(c=>{let h=r.createOscillator();h.type="square",h.frequency.value=a*c,h.connect(o),h.start(e),h.stop(e+.4)}),o.connect(l).connect(n),l.connect(this.delay)}hardKick(e,t,n){let s=this.ctx,r=s.createOscillator();r.frequency.setValueAtTime(400,e),r.frequency.exponentialRampToValueAtTime(or(t),e+.05);let a=s.createGain();a.gain.setValueAtTime(1.4,e),a.gain.setValueAtTime(1.1,e+.12),a.gain.exponentialRampToValueAtTime(.001,e+.34),r.connect(a).connect(n),r.start(e),r.stop(e+.36)}supersaw(e,t,n,s,r=.03){let a=this.ctx,o=a.createBiquadFilter();o.type="lowpass",o.frequency.value=5200;let l=a.createGain();l.gain.setValueAtTime(1e-4,e),l.gain.linearRampToValueAtTime(r,e+.01),l.gain.setValueAtTime(r,e+n*.8),l.gain.exponentialRampToValueAtTime(1e-4,e+n+.1),[-14,-6,0,7,15].forEach(c=>{let h=a.createOscillator();h.type="sawtooth",h.frequency.value=or(t),h.detune.value=c,h.connect(o),h.start(e),h.stop(e+n+.15)}),o.connect(l).connect(s),l.connect(this.delay)}clap(e,t,n=.25){[0,.011,.022].forEach((s,r)=>this.noiseHit(e+s,t,n*(r===2?1:.6),r===2?.16:.01,"bandpass",1300))}bell(e,t,n,s=.06){this.tone(t,e,.05,"sine",s,n,6e3,.002,.5,!0),this.tone(t+12,e,.03,"triangle",s*.3,n,6e3,.002,.25)}gymStep(e,t,n,s,r){let{track:a,bus:o,drive:l}=e,c=a.chords[n%a.chords.length][0],h=a.gym,d=(u,f=.035)=>this.hat(u,o,f);if(h==="phonk"){if(a.kick[t]){this.kick(s,o,.6);let f=1;for(;f<16&&!a.kick[(t+f)%16];)f++;this.bass808(s,c,r*f*.95,l,t===10&&n%2?c+12:null)}a.snare[t]&&(this.clap(s,o),this.snare(s,o)),d(s,t%2?.02:.04),n%2&&t>=14&&d(s+r/2,.03);let u=qv[n%2][t];u&&n%8!==7&&this.cowbell(s,u,o),t===0&&n%4===0&&this.noiseHit(s,o,.08,1.2,"highpass",5e3)}else if(h==="hardstyle"){a.kick[t]&&this.hardKick(s,c-12,l),a.snare[t]&&this.clap(s,o,.3),t%4===2&&(d(s,.06),this.tone(c,s,r*1.5,"sawtooth",.09,o,700));let u=n%16>=12;if(t%2===0){let f=Yv[n%4][t/2];this.supersaw(s,f+12,r*1.8,o,u?.045:.03)}t===0&&([0,3,7].forEach(f=>this.supersaw(s,c+24+f,r*15,o,.008)),n%4===0&&this.noiseHit(s,o,.1,1.5,"highpass",4e3))}else if(h==="gymrap"){if(a.kick[t]){this.kick(s,o,.55);let u=1;for(;u<16&&!a.kick[(t+u)%16];)u++;this.bass808(s,c,r*u,l,t===13?c+7:null)}a.snare[t]&&(this.snare(s,o),this.clap(s,o,.2)),t%2===0&&d(s),(t===6||t===7)&&(d(s+r/3,.025),d(s+2*r/3,.025)),n%2&&t>=12&&(d(s+r/2,.03),d(s+r/4,.02),d(s+3*r/4,.02)),t%2===0&&this.bell(s,$v[n%4][t/2],o),t===0&&this.tone(c+24,s,r*15,"triangle",.035,o,900,.3,.8)}}shout(e){let t=Zv[e];if(!(!t||this.muted||!("speechSynthesis"in window)))try{let n=new SpeechSynthesisUtterance(t[Math.floor(Math.random()*t.length)]);n.lang="en-US",n.pitch=.4,n.rate=1.05,n.volume=1;let s=speechSynthesis.getVoices().find(r=>r.lang.startsWith("en"));s&&(n.voice=s),speechSynthesis.cancel(),speechSynthesis.speak(n)}catch{}}sfx(e){if(!this.ctx)return;let t=this.ctx.currentTime+.01,n=this.sfxGain,s=(r,a,o="square",l=.12)=>r.forEach((c,h)=>this.tone(c,t+h*a,a*.9,o,l,n,5e3,.005,.1));switch(e){case"click":s([84],.04,"square",.06);break;case"coin":s([83,88],.07,"square",.1);break;case"buy":s([76,83,88],.06,"square",.1);break;case"eat":this.noiseHit(t,n,.2,.1,"bandpass",900),this.noiseHit(t+.14,n,.2,.1,"bandpass",700);break;case"good":s([79,84],.06,"triangle",.14);break;case"bad":s([52,47],.1,"sawtooth",.1);break;case"door":this.noiseHit(t,n,.25,.3,"lowpass",600),s([60,67],.08,"triangle",.08);break;case"levelup":s([72,76,79,84,88],.08,"square",.1);break;case"sleep":s([79,76,72,67,64],.18,"sine",.14);break;case"step":this.noiseHit(t,n,.04,.05,"lowpass",400);break;case"crash":this.noiseHit(t,n,.5,.8,"lowpass",1200),s([48,43,36],.12,"sawtooth",.12);break;case"event":s([69,72,76,81],.07,"triangle",.12);break;case"airhorn":[0,.16,.32,.5].forEach((r,a)=>[0,4,7].forEach(o=>{let l=a===3?.6:.12;this.tone(69+o,t+r,l,"sawtooth",.05,n,3500,.005,.05)}));break;case"radio":this.noiseHit(t,n,.15,.25,"bandpass",2500),s([81,88],.05,"square",.06);break;default:break}}};var If=(i,e,t)=>{let n=Math.max(t-Math.abs(i-e),0)/t;return Math.min(i,e)-n*n*t*.25};function Lt(i,e,t={}){return{t:0,cx:i.x,cy:i.y,cz:i.z,rx:e[0],ry:e[1],rz:e[2],...t}}function ri(i,e,t,n,s={}){let r=e.x-i.x,a=e.y-i.y,o=e.z-i.z;return{t:1,ax:i.x,ay:i.y,az:i.z,bx:r,by:a,bz:o,l2:r*r+a*a+o*o,ra:t,rb:n,...s}}function su(i,e,t,n){if(i.t===0){let d=(e-i.cx)/i.rx,u=(t-i.cy)/i.ry,f=(n-i.cz)/i.rz;return(Math.sqrt(d*d+u*u+f*f)-1)*Math.min(i.rx,i.ry,i.rz)}let s=e-i.ax,r=t-i.ay,a=n-i.az,o=Math.max(0,Math.min(1,(s*i.bx+r*i.by+a*i.bz)/i.l2)),l=s-i.bx*o,c=r-i.by*o,h=a-i.bz*o;return Math.sqrt(l*l+c*c+h*h)-(i.ra+(i.rb-i.ra)*o)}function Df(i){return(e,t,n)=>{let s=1e9;for(let r=0;r<i.length;r++){let a=i[r],o=su(a,e,t,n);a.sub?s=-If(-s,o,a.k||.01):s=If(s,o,a.k||.04)}return s}}function iu(i,e,t,n){let s=Math.ceil((t.x-e.x)/n)+1,r=Math.ceil((t.y-e.y)/n)+1,a=Math.ceil((t.z-e.z)/n)+1,o=new Float32Array(s*r*a),l=(b,x,M)=>b+s*(x+r*M);for(let b=0;b<a;b++)for(let x=0;x<r;x++)for(let M=0;M<s;M++)o[l(M,x,b)]=i(e.x+M*n,e.y+x*n,e.z+b*n);let c=(b,x,M)=>b+(s-1)*(x+(r-1)*M),h=new Int32Array((s-1)*(r-1)*(a-1)).fill(-1),d=[],u=[[0,0,0],[1,0,0],[0,1,0],[1,1,0],[0,0,1],[1,0,1],[0,1,1],[1,1,1]],f=[[0,1],[2,3],[4,5],[6,7],[0,2],[1,3],[4,6],[5,7],[0,4],[1,5],[2,6],[3,7]],g=new Float32Array(8);for(let b=0;b<a-1;b++)for(let x=0;x<r-1;x++)for(let M=0;M<s-1;M++){let T=0;for(let N=0;N<8;N++){let[E,D,C]=u[N];g[N]=o[l(M+E,x+D,b+C)],g[N]<0&&(T|=1<<N)}if(T===0||T===255)continue;let I=0,_=0,A=0,P=0;for(let[N,E]of f){if(g[N]<0==g[E]<0)continue;let D=g[N]/(g[N]-g[E]),C=u[N],R=u[E];I+=C[0]+(R[0]-C[0])*D,_+=C[1]+(R[1]-C[1])*D,A+=C[2]+(R[2]-C[2])*D,P++}h[c(M,x,b)]=d.length/3,d.push(e.x+(M+I/P)*n,e.y+(x+_/P)*n,e.z+(b+A/P)*n)}let y=[],m=(b,x,M,T,I)=>{b<0||x<0||M<0||T<0||(I?y.push(b,M,x,b,T,M):y.push(b,x,M,b,M,T))};for(let b=1;b<a-1;b++)for(let x=1;x<r-1;x++)for(let M=1;M<s-1;M++){let T=o[l(M,x,b)]<0;T!==o[l(M+1,x,b)]<0&&m(h[c(M,x-1,b-1)],h[c(M,x,b-1)],h[c(M,x,b)],h[c(M,x-1,b)],!T),T!==o[l(M,x+1,b)]<0&&m(h[c(M-1,x,b-1)],h[c(M-1,x,b)],h[c(M,x,b)],h[c(M,x,b-1)],!T),T!==o[l(M,x,b+1)]<0&&m(h[c(M-1,x-1,b)],h[c(M,x-1,b)],h[c(M,x,b)],h[c(M-1,x,b)],!T)}let p=new Float32Array(d.length),S=n*.5;for(let b=0;b<d.length;b+=3){let x=d[b],M=d[b+1],T=d[b+2],I=i(x+S,M,T)-i(x-S,M,T),_=i(x,M+S,T)-i(x,M-S,T),A=i(x,M,T+S)-i(x,M,T-S),P=Math.hypot(I,_,A)||1;p[b]=I/P,p[b+1]=_/P,p[b+2]=A/P}for(let b=0;b<y.length;b+=3){let x=y[b]*3,M=y[b+1]*3,T=y[b+2]*3,I=d[M]-d[x],_=d[M+1]-d[x+1],A=d[M+2]-d[x+2],P=d[T]-d[x],N=d[T+1]-d[x+1],E=d[T+2]-d[x+2],D=_*E-A*N,C=A*P-I*E,R=I*N-_*P;if(D*(p[x]+p[M]+p[T])+C*(p[x+1]+p[M+1]+p[T+1])+R*(p[x+2]+p[M+2]+p[T+2])<0){let G=y[b+1];y[b+1]=y[b+2],y[b+2]=G}}return{pos:new Float32Array(d),nrm:p,idx:y}}function Nf(i,e){let t=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0);for(let s of i)if(!s.sub)if(s.t===0)t.min(new U(s.cx-s.rx,s.cy-s.ry,s.cz-s.rz)),n.max(new U(s.cx+s.rx,s.cy+s.ry,s.cz+s.rz));else{let r=Math.max(s.ra,s.rb);for(let[a,o,l]of[[s.ax,s.ay,s.az],[s.ax+s.bx,s.ay+s.by,s.az+s.bz]])t.min(new U(a-r,o-r,l-r)),n.max(new U(a+r,o+r,l+r))}return{min:t.subScalar(e),max:n.addScalar(e)}}var lt=(i,e,t)=>new U(i,e,t),cr=null,Fa=null;function Kv(){if(cr)return;let i=[Lt(lt(0,.19,-.008),[.077,.098,.094]),Lt(lt(0,.137,.028),[.063,.068,.07],{k:.04}),Lt(lt(0,.09,.066),[.03,.022,.022],{k:.035}),Lt(lt(-.045,.165,.058),[.028,.022,.026],{k:.03}),Lt(lt(.045,.165,.058),[.028,.022,.026],{k:.03}),Lt(lt(0,.208,.074),[.058,.014,.02],{k:.025}),ri(lt(0,.192,.086),lt(0,.152,.106),.009,.015,{k:.02}),Lt(lt(0,.148,.1),[.022,.011,.012],{k:.012}),Lt(lt(-.079,.172,-.004),[.012,.029,.019],{k:.012}),Lt(lt(.079,.172,-.004),[.012,.029,.019],{k:.012}),Lt(lt(0,.122,.091),[.022,.007,.01],{k:.012}),ri(lt(0,0,-.005),lt(0,.13,-.01),.052,.05,{k:.04}),Lt(lt(-.033,.188,.092),[.02,.013,.014],{sub:!0,k:.012}),Lt(lt(.033,.188,.092),[.02,.013,.014],{sub:!0,k:.012})],e=Nf(i,.02),t=Df(i),n=iu(t,e.min,e.max,.0055);cr=new Ft,cr.setAttribute("position",new Ot(n.pos,3)),cr.setAttribute("normal",new Ot(n.nrm,3)),cr.setIndex(n.idx);let s=Lt(lt(0,.196,-.012),[.083,.104,.101]),a=iu((o,l,c)=>{let h=su(s,o,l,c);return h=Math.max(h,.176+.62*c-l),Math.abs(o)>.066&&(h=Math.max(h,.2-l)),h},lt(-.1,.08,-.13),lt(.1,.32,.11),.006);Fa=new Ft,Fa.setAttribute("position",new Ot(a.pos,3)),Fa.setAttribute("normal",new Ot(a.nrm,3)),Fa.setIndex(a.idx)}var tu=new Map;function Ua(i,e=.6,t={}){let n=`${i}-${e}-${JSON.stringify(t)}`;return tu.has(n)||tu.set(n,new qt({color:i,roughness:e,...t})),tu.get(n)}var jv=new qt({vertexColors:!0,roughness:.62}),nu=new Map,Qv=new Fe,Lf={shoulderZ:.32,hipZ:.06},vi=class{constructor(e={}){Kv(),this.colors={skin:new Fe(e.skin||14262396),shirt:new Fe(e.shirt||11740702),shorts:new Fe(e.shorts||2041651),shoe:new Fe(e.shoe||15329769),sock:new Fe(16053492)},this.colorKey=[e.skin,e.shirt,e.shorts].join("-"),this.root=new At,this.body=new At,this.root.add(this.body);let t=(c,h,d,u)=>{let f=new Os;return f.position.set(h,d,u),c.add(f),f};this.hips=t(this.body,0,.95,0),this.legs=[-1,1].map(c=>{let h=t(this.hips,c*.1,-.05,0),d=t(h,0,-.45,0);return{side:c,hip:h,knee:d}}),this.spine=t(this.hips,0,.08,0),this.neck=t(this.spine,0,.545,0),this.arms=[-1,1].map(c=>{let h=t(this.spine,c*.2,.49,0),d=t(h,0,-.3,0);return{side:c,shoulder:h,elbow:d}}),this.bones=[this.hips,this.spine,this.neck,...this.legs.flatMap(c=>[c.hip,c.knee]),...this.arms.flatMap(c=>[c.shoulder,c.elbow])];let n=Ua(this.colors.skin.getHex(),.55),s=new ke(cr,n);s.castShadow=!0,this.neck.add(s);let r=new ke(Fa,Ua(e.hair||2759184,.85));r.castShadow=!0,this.neck.add(r);let a=Ua(15855336,.25),o=Ua(e.eyes||3877402,.15),l=Ua(e.hair||2759184,.9);[-1,1].forEach(c=>{let h=new ke(new xi(.0125,14,10),a);h.position.set(c*.033,.188,.083),this.neck.add(h);let d=new ke(new xi(.0062,10,8),o);d.position.set(c*.033,.188,.0945),this.neck.add(d);let u=new ke(new ln(.036,.006,.01),l);u.position.set(c*.034,.212,.09),u.rotation.z=-c*.1,this.neck.add(u)}),this.walkPhase=0,this.pose="idle",this.poseT=0,this.time=0,this.mesh=null,this.muscleKey="",this.setMuscles(e.muscles?e.muscles[0]:1,e.muscles?e.muscles[1]:1,e.muscles?e.muscles[2]:1)}bindPose(){this.body.position.set(0,0,0),this.body.rotation.set(0,0,0),this.bones.forEach(e=>e.rotation.set(0,0,0)),this.arms.forEach(e=>{e.shoulder.rotation.z=e.side*Lf.shoulderZ}),this.legs.forEach(e=>{e.hip.rotation.z=e.side*Lf.hipZ})}setMuscles(e,t,n){let s=o=>Math.round(Math.max(0,Math.min(100,o))/5)*5,r=`${s(e)}-${s(t)}-${s(n)}`;if(r===this.muscleKey)return;this.muscleKey=r;let a=this.buildBody(s(e)/100,s(t)/100,s(n)/100,r);if(this.mesh){this.mesh.geometry=a,this.bindPose();let o=[this.root.position.clone(),this.root.rotation.clone(),this.root.scale.clone()];this.root.position.set(0,0,0),this.root.rotation.set(0,0,0),this.root.scale.set(1,1,1),this.root.updateMatrixWorld(!0),this.mesh.skeleton.calculateInverses(),[this.root.position,this.root.rotation,this.root.scale].forEach((l,c)=>l.copy(o[c])),this.root.updateMatrixWorld(!0)}else{this.bindPose();let o=[this.root.position.clone(),this.root.rotation.clone(),this.root.scale.clone()];this.root.position.set(0,0,0),this.root.rotation.set(0,0,0),this.root.scale.set(1,1,1),this.root.updateMatrixWorld(!0),this.mesh=new Br(a,jv),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.mesh.frustumCulled=!1,this.body.add(this.mesh),this.mesh.updateMatrixWorld(!0),this.mesh.bind(new kr(this.bones)),[this.root.position,this.root.rotation,this.root.scale].forEach((l,c)=>l.copy(o[c]))}}placeJoints(e,t){this.arms.forEach(n=>{n.shoulder.position.x=n.side*(.19+.075*t)}),this.legs.forEach(n=>{n.hip.position.x=n.side*(.095+.02*e)})}buildBody(e,t,n,s){this.placeJoints(e,n);let r=s+"|"+this.colorKey;if(nu.has(r))return nu.get(r);this.bindPose();let a=[this.root.position.clone(),this.root.rotation.clone(),this.root.scale.clone()];this.root.position.set(0,0,0),this.root.rotation.set(0,0,0),this.root.scale.set(1,1,1),this.root.updateMatrixWorld(!0);let o=(_,A=0,P=0,N=0)=>_.localToWorld(lt(A,P,N)),l={hips:o(this.hips),spine:o(this.spine),neck:o(this.neck),chest:o(this.spine,0,.36,0),knee:o(this.legs[0].knee)},c=(t+n)/2,h={hips:0,spine:1,neck:2},d=[],u=(_,A,P)=>{_.bone=A,_.region=P,d.push(_)};u(Lt(lt(0,l.hips.y+.02,-.005),[.145,.11,.1],{k:.05}),h.hips,"shorts"),u(Lt(lt(0,l.spine.y+.1,.005),[.13+.01*n,.13,.095+.01*t],{k:.07}),h.spine,"waist"),u(Lt(lt(0,l.chest.y,0),[.16+.06*n,.165+.01*n,.1+.03*t],{k:.07}),h.spine,"shirt"),[-1,1].forEach(_=>{u(ri(lt(_*.03,l.chest.y+.03,.055+.03*t),lt(_*(.13+.04*n),l.chest.y+.075,.03+.02*t),.05+.02*t,.035+.015*t,{k:.05}),h.spine,"shirt"),u(Lt(lt(_*(.11+.06*n),l.chest.y-.03,-.035),[.05+.045*n,.13,.055+.02*n],{k:.06}),h.spine,"shirt")}),u(Lt(lt(0,l.neck.y-.01,-.025),[.11+.07*n,.05+.035*n,.065+.02*n],{k:.06}),h.spine,"skin"),u(ri(lt(0,l.neck.y-.04,-.005),lt(0,l.neck.y+.1,0),.064+.03*n,.054+.01*n,{k:.05}),h.neck,"skin"),this.legs.forEach((_,A)=>{let P=3+A*2,N=o(_.hip),E=o(_.knee),D=o(_.knee,0,-.42,0),C=o(_.knee,0,-.44,.13);u(ri(lt(N.x,N.y-.02,N.z),E,.08+.045*e,.052+.015*e,{k:.05}),P,"thigh");let R=N.clone().lerp(E,.45);u(Lt(lt(R.x+_.side*.01,R.y-.02,R.z+.03),[.058+.03*e,.14,.055+.035*e],{k:.04}),P,"thigh"),u(ri(E,D,.052+.01*e,.034,{k:.03}),P+1,"shin");let F=E.clone().lerp(D,.3);u(Lt(lt(F.x,F.y,F.z-.025),[.045+.02*e,.085,.045+.02*e],{k:.03}),P+1,"shin"),u(ri(lt(D.x,D.y-.005,D.z-.02),lt(C.x,C.y+.012,C.z),.045,.04,{k:.02}),P+1,"shoe")}),this.arms.forEach((_,A)=>{let P=7+A*2,N=o(_.shoulder),E=o(_.elbow),D=o(_.elbow,0,-.26,0),C=o(_.elbow,0,-.35,.01);u(Lt(lt(N.x+_.side*.012,N.y-.01,N.z),[.058+.04*c,.066+.03*c,.058+.035*c],{k:.05}),P,"skin"),u(ri(N,E,.048+.03*c,.038+.012*c,{k:.03}),P,"skin");let R=N.clone().lerp(E,.55);u(Lt(lt(R.x,R.y,R.z+.018),[.036+.025*c,.07,.034+.028*c],{k:.025}),P,"skin"),u(Lt(lt(R.x,R.y+.03,R.z-.02),[.034+.022*c,.08,.032+.02*c],{k:.025}),P,"skin"),u(ri(E,D,.044+.018*c,.029,{k:.03}),P+1,"skin"),u(ri(D,C,.03,.027,{k:.02}),P+1,"skin"),u(Lt(lt(D.x-_.side*-.018,D.y-.035,D.z+.018),[.012,.028,.012],{k:.012}),P+1,"skin")}),[this.root.position,this.root.rotation,this.root.scale].forEach((_,A)=>_.copy(a[A])),this.root.updateMatrixWorld(!0);let f=Nf(d,.03),g=Df(d),y=iu(g,f.min,f.max,.017),m=y.pos.length/3,p=new Uint16Array(m*4),S=new Float32Array(m*4),b=new Float32Array(m*3),x=new Float32Array(11),M=l.neck.y-.08,T=l.hips.y+.1;for(let _=0;_<m;_++){let A=y.pos[_*3],P=y.pos[_*3+1],N=y.pos[_*3+2];x.fill(1e9);let E=null,D=1e9;for(let Y of d){let ue=su(Y,A,P,N);ue<x[Y.bone]&&(x[Y.bone]=ue),ue<D&&(D=ue,E=Y)}let C=0,R=1;for(let Y=0;Y<11;Y++)x[Y]<x[C]?(R=C,C=Y):Y!==C&&x[Y]<x[R]&&(R=Y);C===R&&(R=(C+1)%11);let F=1,G=Math.exp(-(x[R]-x[C])/.02);p[_*4]=C,p[_*4+1]=R,S[_*4]=F/(F+G),S[_*4+1]=G/(F+G);let Z=this.colors,V=(Y,ue,xe)=>Qv.copy(Y).lerp(ue,Math.max(0,Math.min(1,xe))),q;switch(E.region){case"waist":q=V(Z.shorts,Z.shirt,(P-T)/.02+.5);break;case"shorts":q=V(Z.shorts,Z.shirt,(P-T)/.02+.5);break;case"thigh":q=V(Z.skin,Z.shorts,(P-l.knee.y-.2)/.02+.5);break;case"shin":q=V(Z.sock,Z.skin,(P-.14)/.02+.5);break;case"shirt":case"skin":{if(E.bone!==h.spine){q=Z.skin;break}let Y=Math.abs(A),ue=M-.01-(Y<.1?.07*Math.cos(Y/.1*Math.PI/2):0),xe=.11+.035*n,Je=Math.min(1,Math.max(0,(ue-P)/.015+.5));P>l.chest.y-.07&&(Je*=Math.min(1,Math.max(0,(xe-Y)/.015+.5))),P<T&&(Je=1),q=V(Z.skin,Z.shirt,Je);break}default:q=Z[E.region]||Z.skin}b[_*3]=q.r,b[_*3+1]=q.g,b[_*3+2]=q.b}let I=new Ft;return I.setAttribute("position",new Ot(y.pos,3)),I.setAttribute("normal",new Ot(y.nrm,3)),I.setAttribute("color",new Ot(b,3)),I.setAttribute("skinIndex",new Qi(p,4)),I.setAttribute("skinWeight",new Ot(S,4)),I.setIndex(y.idx),nu.set(r,I),I}resetJoints(){this.body.position.set(0,0,0),this.body.rotation.set(0,0,0),this.spine.rotation.set(0,0,0),this.neck.rotation.set(0,0,0),this.legs.forEach(e=>{e.hip.rotation.set(0,0,e.side*.04),e.knee.rotation.set(0,0,0)}),this.arms.forEach(e=>{e.shoulder.rotation.set(0,0,e.side*.2),e.elbow.rotation.set(0,0,0)})}setPose(e,t=0){this.pose=e,this.poseT=t}update(e,t=0){this.time+=e,this.resetJoints();let n=this.poseT,[s,r]=this.legs,[a,o]=this.arms;switch(this.pose){case"walk":case"idle":{if(t>.1){this.walkPhase+=e*t*2.2;let l=Math.sin(this.walkPhase),c=Math.min(1,t/4)*.7;s.hip.rotation.x=l*c,r.hip.rotation.x=-l*c,s.knee.rotation.x=Math.max(0,-l)*c*1.4,r.knee.rotation.x=Math.max(0,l)*c*1.4,a.shoulder.rotation.x=-l*c*.8,o.shoulder.rotation.x=l*c*.8,a.elbow.rotation.x=-.4,o.elbow.rotation.x=-.4,this.body.position.y=Math.abs(Math.cos(this.walkPhase))*.05,this.spine.rotation.x=.05}else{let l=Math.sin(this.time*2)*.02;this.spine.rotation.x=l,a.shoulder.rotation.z=-.18,o.shoulder.rotation.z=.18,a.elbow.rotation.x=-.15,o.elbow.rotation.x=-.15}break}case"flex":{let l=.8+Math.sin(this.time*6)*.05;a.shoulder.rotation.z=-1.5,o.shoulder.rotation.z=1.5,a.elbow.rotation.z=-1.9*l,o.elbow.rotation.z=1.9*l,s.hip.rotation.z=-.15,r.hip.rotation.z=.15;break}case"squat":{let l=1.25*n,c=2.3*n,h=c-l;s.hip.rotation.x=r.hip.rotation.x=-l,s.knee.rotation.x=r.knee.rotation.x=c;let d=.45*Math.cos(l)+.45*Math.cos(h);this.body.position.y=d-.9,this.body.position.z=-(.45*Math.sin(l)-.45*Math.sin(h)),this.spine.rotation.x=.7*n,this.neck.rotation.x=-.5*n,a.shoulder.rotation.z=-1.9,o.shoulder.rotation.z=1.9,a.elbow.rotation.z=-1.9,o.elbow.rotation.z=1.9;break}case"bench":{this.body.rotation.x=-Math.PI/2,this.body.position.set(0,.68,1.05),s.hip.rotation.x=r.hip.rotation.x=.25,s.knee.rotation.x=r.knee.rotation.x=1.3,s.hip.rotation.z=-.3,r.hip.rotation.z=.3;let l=1-n;a.shoulder.rotation.x=o.shoulder.rotation.x=-Math.PI/2+l*.2,a.shoulder.rotation.z=-l*1.1,o.shoulder.rotation.z=l*1.1,a.elbow.rotation.z=l*1.9,o.elbow.rotation.z=-l*1.9;break}case"lat":{s.hip.rotation.x=r.hip.rotation.x=-Math.PI/2,s.knee.rotation.x=r.knee.rotation.x=Math.PI/2,this.body.position.y=-.45,this.spine.rotation.x=-.12*n;let l=2.9-n*1.3;a.shoulder.rotation.z=-l,o.shoulder.rotation.z=l,a.elbow.rotation.z=-n*1.6,o.elbow.rotation.z=n*1.6;break}case"sleep":{this.body.rotation.x=-Math.PI/2,this.body.position.set(0,.2,.9),a.shoulder.rotation.z=-.2,o.shoulder.rotation.z=.2,this.spine.rotation.x=Math.sin(this.time*1.2)*.02;break}case"count":{a.shoulder.rotation.x=o.shoulder.rotation.x=-.9,a.elbow.rotation.x=-.7-Math.max(0,Math.sin(this.time*18))*.4*n,o.elbow.rotation.x=-.7,this.spine.rotation.x=.2,this.neck.rotation.x=.3;break}default:break}}};function ey(i){let e=i>>>0||1;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function Uf(i){let e=document.createElement("canvas");return e.width=e.height=i,[e,e.getContext("2d")]}function Ff(i,e,t=!0){let n=new mi(i);return n.wrapS=n.wrapT=Rn,n.repeat.set(e[0],e[1]),n.anisotropy=8,t&&(n.colorSpace=kt),n}function Wi(i,e,t,n,s,r=1,a=3,o=1){i.globalAlpha=o;for(let l=0;l<n;l++){i.fillStyle=s[Math.floor(t()*s.length)];let c=r+t()*(a-r);i.fillRect(t()*e,t()*e,c,c)}i.globalAlpha=1}var ru=new Map;function ty(i,e){return ru.has(i)||ru.set(i,e()),ru.get(i)}function mn(i,e,t,n){return ty(i,()=>{let[s,r]=Uf(e),a=ey(i.length*7919+e);t(r,e,a);let[o,l]=Uf(e);return l.filter="grayscale(1) contrast(1.4)",l.drawImage(s,0,0),{map:Ff(s,n),bump:Ff(o,n,!1)}})}var Et={grass:(i=[60,60])=>mn("grass"+i,512,(e,t,n)=>{e.fillStyle="#4a6f2c",e.fillRect(0,0,t,t),Wi(e,t,n,9e3,["#557d33","#3e5f25","#628a3a","#46692a","#6b8f40"],1,3),e.globalAlpha=.5;for(let s=0;s<2500;s++){e.strokeStyle=["#6f9a45","#39571f","#5c8437"][Math.floor(n()*3)];let r=n()*t,a=n()*t;e.beginPath(),e.moveTo(r,a),e.lineTo(r+(n()-.5)*3,a-3-n()*5),e.stroke()}e.globalAlpha=1},i),asphalt:(i=[1,1])=>mn("asphalt"+i,512,(e,t,n)=>{e.fillStyle="#3b3d40",e.fillRect(0,0,t,t),Wi(e,t,n,14e3,["#2f3134","#46484c","#505256","#34363a","#292a2d"],1,2.5),e.globalAlpha=.08;for(let s=0;s<18;s++)e.fillStyle=n()>.5?"#000":"#777",e.beginPath(),e.ellipse(n()*t,n()*t,20+n()*60,10+n()*30,n()*3,0,Math.PI*2),e.fill();e.globalAlpha=1},i),pavement:(i=[1,1])=>mn("pavement"+i,256,(e,t,n)=>{e.fillStyle="#a9a7a0",e.fillRect(0,0,t,t),Wi(e,t,n,3e3,["#b5b3ab","#9c9a93","#a3a199","#bdbbb3"],1,2),e.strokeStyle="#7d7b75",e.lineWidth=3;for(let s=0;s<=2;s++)e.beginPath(),e.moveTo(0,s*t/2),e.lineTo(t,s*t/2),e.stroke(),e.beginPath(),e.moveTo(s*t/2,0),e.lineTo(s*t/2,t),e.stroke()},i),brick:(i="#9a4a32",e=[1,1])=>mn("brick"+i+e,512,(t,n,s)=>{t.fillStyle="#b8b0a2",t.fillRect(0,0,n,n);let r=16,a=n/8,o=n/r,l=new Fe(i);for(let c=0;c<r;c++)for(let h=-1;h<9;h++){let d=l.clone().offsetHSL((s()-.5)*.03,(s()-.5)*.1,(s()-.5)*.1);t.fillStyle="#"+d.getHexString();let u=c%2?a/2:0;t.fillRect(h*a+u+2,c*o+2,a-4,o-4)}Wi(t,n,s,4e3,["rgba(0,0,0,.25)","rgba(255,255,255,.12)"],1,2)},e),plaster:(i="#e8e0d0",e=[1,1])=>mn("plaster"+i+e,256,(t,n,s)=>{t.fillStyle=i,t.fillRect(0,0,n,n),Wi(t,n,s,5e3,["rgba(0,0,0,.05)","rgba(255,255,255,.08)","rgba(0,0,0,.08)"],1,3)},e),concrete:(i="#b9b6ad",e=[1,1])=>mn("concrete"+i+e,256,(t,n,s)=>{t.fillStyle=i,t.fillRect(0,0,n,n),Wi(t,n,s,6e3,["rgba(0,0,0,.08)","rgba(255,255,255,.1)","rgba(60,50,40,.1)"],1,3),t.strokeStyle="rgba(0,0,0,.25)",t.lineWidth=2,t.strokeRect(0,0,n,n)},e),wood:(i="#8a5a34",e=[1,1])=>mn("wood"+i+e,512,(t,n,s)=>{let a=n/6,o=new Fe(i);for(let l=0;l<6;l++){let c=o.clone().offsetHSL(0,0,(s()-.5)*.08);t.fillStyle="#"+c.getHexString(),t.fillRect(0,l*a,n,a),t.globalAlpha=.18;for(let h=0;h<40;h++){t.strokeStyle=s()>.5?"#000":"#fff",t.beginPath();let d=l*a+s()*a;t.moveTo(0,d),t.bezierCurveTo(n*.3,d+(s()-.5)*6,n*.6,d+(s()-.5)*6,n,d),t.stroke()}t.globalAlpha=1,t.fillStyle="rgba(0,0,0,.45)",t.fillRect(0,l*a,n,2),t.fillRect(s()*n|0,l*a,2,a)}},e),rubber:(i=[1,1])=>mn("rubber"+i,256,(e,t,n)=>{e.fillStyle="#26272a",e.fillRect(0,0,t,t),Wi(e,t,n,5e3,["#34363a","#1c1d1f","#3d3f44","#50525a"],1,2),e.strokeStyle="#141415",e.lineWidth=3,e.strokeRect(0,0,t,t)},i),tiles:(i="#e9e7e2",e="#b9b5ad",t=[1,1])=>mn("tiles"+i+t,256,(n,s,r)=>{n.fillStyle=e,n.fillRect(0,0,s,s);let a=2,o=s/a;for(let l=0;l<a;l++)for(let c=0;c<a;c++){let h=new Fe(i).offsetHSL(0,0,(r()-.5)*.03);n.fillStyle="#"+h.getHexString(),n.fillRect(c*o+2,l*o+2,o-4,o-4)}Wi(n,s,r,800,["rgba(0,0,0,.04)"],1,3)},t),marble:(i=[1,1])=>mn("marble"+i,512,(e,t,n)=>{let r=t/2;for(let a=0;a<2;a++)for(let o=0;o<2;o++){e.fillStyle=(o+a)%2?"#2b2a28":"#ece8df",e.fillRect(o*r,a*r,r,r),e.globalAlpha=.25;for(let l=0;l<6;l++){e.strokeStyle=(o+a)%2?"#6b6861":"#9a958a",e.lineWidth=1+n()*2,e.beginPath();let c=o*r+n()*r,h=a*r;e.moveTo(c,h);for(let d=0;d<8;d++)c+=(n()-.5)*40,h+=r/8,e.lineTo(c,h);e.stroke()}e.globalAlpha=1}e.strokeStyle="#8c877c",e.lineWidth=2;for(let a=0;a<=2;a++)e.beginPath(),e.moveTo(0,a*r),e.lineTo(t,a*r),e.stroke(),e.beginPath(),e.moveTo(a*r,0),e.lineTo(a*r,t),e.stroke()},i),roof:(i=[1,1])=>mn("roof"+i,256,(e,t,n)=>{e.fillStyle="#5a2a1e",e.fillRect(0,0,t,t);let s=8,r=t/s,a=8,o=t/a;for(let l=0;l<s;l++)for(let c=-1;c<=a;c++){let h=new Fe("#9c4a33").offsetHSL(0,0,(n()-.5)*.1);e.fillStyle="#"+h.getHexString();let d=l%2?o/2:0;e.beginPath(),e.roundRect(c*o+d+1,l*r,o-2,r-3,[0,0,8,8]),e.fill()}},i),bark:(i=[1,1])=>mn("bark"+i,128,(e,t,n)=>{e.fillStyle="#5a4230",e.fillRect(0,0,t,t);for(let s=0;s<90;s++){e.strokeStyle=["#3e2c1f","#6d5340","#4a3626"][Math.floor(n()*3)],e.lineWidth=1+n()*2;let r=n()*t;e.beginPath(),e.moveTo(r,0),e.lineTo(r+(n()-.5)*10,t),e.stroke()}},i),leaves:(i=[2,2])=>mn("leaves"+i,256,(e,t,n)=>{e.fillStyle="#3b5e25",e.fillRect(0,0,t,t);for(let s=0;s<1400;s++)e.fillStyle=["#4c7630","#2f4d1c","#5b8738","#416a29","#6a9442"][Math.floor(n()*5)],e.beginPath(),e.ellipse(n()*t,n()*t,2+n()*4,1+n()*2,n()*3,0,Math.PI*2),e.fill()},i),fabric:(i="#23324a",e=[4,4])=>mn("fabric"+i+e,64,(t,n,s)=>{t.fillStyle=i,t.fillRect(0,0,n,n),t.globalAlpha=.12;for(let r=0;r<n;r+=2)t.fillStyle="#000",t.fillRect(0,r,n,1),t.fillStyle="#fff",t.fillRect(r,0,1,n);t.globalAlpha=1},e)};var hr=new Map;function we(i,e={}){let t=i+JSON.stringify(e);if(!hr.has(t)){let{basic:n,...s}=e;hr.set(t,n?new Ii({color:i,...s}):new qt({color:i,roughness:.75,metalness:0,...s}))}return hr.get(t)}function Rt(i,e,t={}){return hr.has(i)||hr.set(i,new qt({map:e.map,bumpMap:e.bump,bumpScale:1.2,roughness:.85,metalness:0,...t})),hr.get(i)}var Se={grass:()=>Rt("grass",Et.grass([1,1]),{roughness:1}),asphalt:()=>Rt("asphalt",Et.asphalt(),{roughness:.95}),pavement:()=>Rt("pavement",Et.pavement(),{roughness:.9}),brickRed:()=>Rt("brickRed",Et.brick("#8e4631"),{roughness:.9}),brickGrey:()=>Rt("brickGrey",Et.brick("#55585e"),{roughness:.9}),plasterCream:()=>Rt("plasterCream",Et.plaster("#e6dcc6"),{roughness:.95}),plasterWhite:()=>Rt("plasterWhite",Et.plaster("#eeebe4"),{roughness:.95}),plasterGreen:()=>Rt("plasterGreen",Et.plaster("#cfe0d2"),{roughness:.95}),plasterGrey:()=>Rt("plasterGrey",Et.plaster("#8d949c"),{roughness:.95}),stone:()=>Rt("stone",Et.concrete("#d8d0bd"),{roughness:.85}),concrete:()=>Rt("concrete",Et.concrete("#9e9b94"),{roughness:.95}),woodFloor:()=>Rt("woodFloor",Et.wood("#9a6a3e"),{roughness:.55}),woodDark:()=>Rt("woodDark",Et.wood("#5b3b22"),{roughness:.6}),rubber:()=>Rt("rubber",Et.rubber(),{roughness:.95}),tiles:()=>Rt("tiles",Et.tiles("#ecebe7","#b9b5ad"),{roughness:.35}),marble:()=>Rt("marble",Et.marble(),{roughness:.25}),roof:()=>Rt("roof",Et.roof(),{roughness:.8}),bark:()=>Rt("bark",Et.bark(),{roughness:1}),leaves:()=>Rt("leaves",Et.leaves(),{roughness:.9}),glass:()=>we(2240570,{roughness:.05,metalness:.6,envMapIntensity:1.6}),metal:()=>we(2829617,{roughness:.4,metalness:.8}),chrome:()=>we(14080477,{roughness:.15,metalness:1}),mirror:()=>we(15265522,{roughness:.02,metalness:1,envMapIntensity:1.3})};function ny(i,e,t,n,s){let r=i.attributes.uv,a=[[n,t],[n,t],[e,n],[e,n],[e,t],[e,t]];for(let o=0;o<6;o++)for(let l=0;l<4;l++){let c=o*4+l;r.setXY(c,r.getX(c)*a[o][0]/s,r.getY(c)*a[o][1]/s)}r.needsUpdate=!0}function te(i,e,t,n,s=0,r=0,a=0,o=null,l=!0,c=0){let h=new ln(i,e,t);c&&ny(h,i,e,t,c);let d=new ke(h,typeof n=="number"?we(n):n);return d.position.set(s,r,a),d.castShadow=l,d.receiveShadow=!0,o&&o.add(d),d}function ft(i,e,t,n,s=0,r=0,a=0,o=null,l=20){let c=new ke(new ks(i,e,t,l),typeof n=="number"?we(n):n);return c.position.set(s,r,a),c.castShadow=!0,c.receiveShadow=!0,o&&o.add(c),c}function us(i,e,t,n,s,r,a=16){let o=new ke(new xi(i,a,Math.max(8,a-4)),typeof e=="number"?we(e):e);return o.position.set(t,n,s),o.castShadow=!0,o.receiveShadow=!0,r&&r.add(o),o}function zn(i,e,t,n,s,r,a,o=0){let l=new fn(i,e);if(o){let h=l.attributes.uv;for(let d=0;d<h.count;d++)h.setXY(d,h.getX(d)*i/o,h.getY(d)*e/o)}let c=new ke(l,t);return c.rotation.x=-Math.PI/2,c.position.set(n,s,r),c.receiveShadow=!0,a&&a.add(c),c}function yi(i,e,t,n="#222",s="#fff",r="bold 72px sans-serif",a=!1){let o=document.createElement("canvas");o.width=1024,o.height=Math.round(1024*(t/e));let l=o.getContext("2d");l.fillStyle=n,l.fillRect(0,0,o.width,o.height),l.fillStyle=s,l.font=r.replace(/(\d+)px/,(d,u)=>`${u*2}px`),l.textAlign="center",l.textBaseline="middle",l.fillText(i,o.width/2,o.height/2+6);let c=new mi(o);c.colorSpace=kt,c.anisotropy=8;let h=new qt({map:c,roughness:.5});return a&&(h.emissiveMap=c,h.emissive=new Fe(16777215),h.emissiveIntensity=.6),new ke(new fn(e,t),h)}function iy(){let i=new At,e=new ke(new ea(.5,.58,40),new Ii({color:16777215,transparent:!0,opacity:.35,depthWrite:!1}));return e.rotation.x=-Math.PI/2,e.name="ring",i.add(e),i}var ds=class{constructor(e,t){this.name=e,this.music=t,this.scene=new Fn,this.colliders=[],this.circles=[],this.dynamic=[],this.interactions=[],this.bounds={x1:-50,z1:-50,x2:50,z2:50},this.spawn={x:0,z:0,rot:0},this.updaters=[],this.camDist=9,this.camHeight=5,this.playerPos=null}solid(e,t,n,s,r=2){this.colliders.push({x1:e-n/2,z1:t-s/2,x2:e+n/2,z2:t+s/2,h:r})}interact(e,t,n,s,r=null,a=1.8){let o=iy();o.position.set(e,.03,t),this.scene.add(o),this.interactions.push({x:e,z:t,label:n,action:s,data:r,radius:a,marker:o})}update(e,t){this.interactions.forEach((n,s)=>{let r=n.marker.getObjectByName("ring");r.material.opacity=.22+(Math.sin(t*2.5+s)+1)*.1}),this.updaters.forEach(n=>n(e,t))}collide(e,t=.4,n=null){let s=this.bounds;e.x=Math.max(s.x1+t,Math.min(s.x2-t,e.x)),e.z=Math.max(s.z1+t,Math.min(s.z2-t,e.z));let r=this.colliders.slice(),a=this.circles.slice();for(let o of this.dynamic)for(let l of o())l===n||l.owner===n||(l.r!==void 0?a.push(l):r.push(l));for(let o of r){let l=Math.max(o.x1,Math.min(o.x2,e.x)),c=Math.max(o.z1,Math.min(o.z2,e.z)),h=e.x-l,d=e.z-c,u=h*h+d*d;if(u<t*t)if(u>1e-6){let f=Math.sqrt(u);e.x=l+h/f*t,e.z=c+d/f*t}else{let f=[[e.x-o.x1,-1,0],[o.x2-e.x,1,0],[e.z-o.z1,0,-1],[o.z2-e.z,0,1]];f.sort((p,S)=>p[0]-S[0]);let[g,y,m]=f[0];e.x+=y*(g+t),e.z+=m*(g+t)}}for(let o of a){let l=e.x-o.x,c=e.z-o.z,h=Math.hypot(l,c),d=o.r+t;h<d&&(h>1e-6?(e.x=o.x+l/h*d,e.z=o.z+c/h*d):e.x+=d)}}};function Of(i,e,t,n,s){let r=new At;r.position.set(e,0,t),r.rotation.y=s()*Math.PI*2;let a=ft(.14*n,.24*n,2.6*n,Se.bark(),0,1.3*n,0,r,10);a.castShadow=!0;let o=Se.leaves(),l=5+Math.floor(s()*4);for(let c=0;c<l;c++){let h=s()*Math.PI*2,d=s()*.9*n,u=(.8+s()*.6)*n,f=new ke(new Gs(u,2),o);f.position.set(Math.cos(h)*d,(2.8+s()*1.4)*n,Math.sin(h)*d),f.scale.set(1,.85+s()*.3,1),f.castShadow=!0,f.receiveShadow=!0,r.add(f)}i.add(r)}function Bf(i,e,t,n,s){for(let r=0;r<3;r++){let a=new ke(new Gs((.45+s()*.2)*n,1),Se.leaves());a.position.set(e+(s()-.5)*.8*n,.35*n,t+(s()-.5)*.8*n),a.castShadow=!0,i.add(a)}}function sc(i,e,t,n){let s=new At;s.position.set(e,0,t),s.rotation.y=n,ft(.07,.1,5.2,Se.metal(),0,2.6,0,s,10);let r=te(.08,.08,1.4,Se.metal(),0,5.1,.65,s);r.castShadow=!1,te(.35,.12,.6,Se.metal(),0,5.05,1.35,s);let a=te(.28,.02,.5,we(16774358,{emissive:16773577,emissiveIntensity:1.5}),0,4.98,1.35,s,!1);a.castShadow=!1,i.add(s)}function sy(i){let e=new At,t=new gi,n=[[-2.1,.35],[2.1,.35],[2.15,.8],[1.9,.95],[.85,1.05],[.3,1.5],[-1.3,1.52],[-1.95,1.2],[-2.15,.9]];t.moveTo(n[0][0],n[0][1]),n.slice(1).forEach(([c,h])=>t.lineTo(c,h));let s=new ke(new Li(t,{depth:1.7,bevelEnabled:!0,bevelSize:.08,bevelThickness:.08,bevelSegments:3}),we(i,{roughness:.25,metalness:.7,envMapIntensity:1.2}));s.rotation.y=-Math.PI/2,s.position.x=.85,s.castShadow=!0,e.add(s);let r=new gi;[[.75,1.07],[.28,1.46],[-1.25,1.48],[-1.85,1.2],[-1.8,1.07]].forEach(([c,h],d)=>d?r.lineTo(c,h):r.moveTo(c,h));let a=new ke(new Li(r,{depth:1.82,bevelEnabled:!1}),Se.glass());a.rotation.y=-Math.PI/2,a.position.x=.91,e.add(a),[[-.86,1.35],[.86,1.35],[-.86,-1.35],[.86,-1.35]].forEach(([c,h])=>{let d=ft(.36,.36,.26,we(1381653,{roughness:.9}),c,.36,h,e,18);d.rotation.z=Math.PI/2;let u=ft(.2,.2,.27,Se.chrome(),c,.36,h,e,12);u.rotation.z=Math.PI/2});let o=we(16777215,{emissive:16774872,emissiveIntensity:.6}),l=we(5570560,{emissive:16718362,emissiveIntensity:.4});return[-.6,.6].forEach(c=>{te(.35,.14,.05,o,c,.78,2.2,e,!1),te(.35,.12,.05,l,c,.85,-2.2,e,!1)}),te(1.6,.2,.1,we(2236962),0,.45,2.22,e,!1),te(1.6,.2,.1,we(2236962),0,.45,-2.22,e,!1),e}function rc(i,e,t,n){let s=new At;s.position.set(e,0,t),s.rotation.y=n,ft(.06,.08,3.2,Se.metal(),0,1.6,0,s,10),te(.32,.9,.25,we(1842204,{roughness:.6}),0,3.5,0,s);let r=[16722458,16757760,2817898].map((a,o)=>{let l=new qt({color:1118481,emissive:a,emissiveIntensity:0}),c=new ke(new Wr(.09,16),l);return c.position.set(0,3.78-o*.28,.13),s.add(c),l});return i.add(s),r}function ac(i,e,t,n,s,r,a,o=15921902){let l=new At;l.position.set(e,t,n),l.rotation.y=a;let c=we(o,{roughness:.5});te(s+.16,.08,.14,c,0,r/2+.04,.02,l,!1),te(s+.3,.08,.24,c,0,-r/2-.04,.07,l,!1),te(.08,r,.14,c,-s/2-.04,0,.02,l,!1),te(.08,r,.14,c,s/2+.04,0,.02,l,!1),te(.05,r,.08,c,0,0,.02,l,!1);let h=new ke(new fn(s,r),Se.glass());h.position.z=-.01,l.add(h),i.add(l)}function oc(i,{x:e,z:t,w:n,d:s,h:r,wall:a,doorSide:o,floors:l=2,trim:c=14275784,winW:h=1.3,winH:d=1.5,skipFront:u=!1}){let f=new At;f.position.set(e,0,t),i.scene.add(f),te(n,r,s,a,0,r/2,0,f,!0,3),te(n+.1,.6,s+.1,Se.concrete(),0,.3,0,f,!1,2),te(n+.4,.3,s+.4,we(c,{roughness:.7}),0,r+.15,0,f),i.solid(e,t,n+.1,s+.1,r+3);let g=o*(s/2+.03),y=o>0?0:Math.PI,m=te(1.4,2.4,.12,Se.woodDark(),0,1.2+.1,g,f,!0,1);te(1.7,.14,.2,we(c),0,2.55,g,f,!1),te(.12,2.5,.2,we(c),-.78,1.25,g,f,!1),te(.12,2.5,.2,we(c),.78,1.25,g,f,!1);let p=us(.05,Se.chrome(),.5,1.2,g+o*.08,f,10);p.castShadow=!1,te(2.2,.12,1.1,Se.concrete(),0,.06,g+o*.55,f,!1,1);let S=Math.max(1,Math.floor(n/3.2));for(let b=0;b<l;b++){let x=1.6+b*(r-1.2)/l+(b?.6:0);if(x+d/2>r-.3)continue;for(let T=0;T<S;T++){let I=-n/2+n/S*(T+.5);!(b===0&&Math.abs(I)<1.5)&&!(u&&b===0)&&ac(f,I,x,g+o*.02,h,d,y),ac(f,I,x,-g-o*.02,h,d,y+Math.PI)}let M=Math.max(1,Math.floor(s/3.2));for(let T=0;T<M;T++){let I=-s/2+s/M*(T+.5);ac(f,n/2+.02,x,I,h,d,Math.PI/2),ac(f,-n/2-.02,x,I,h,d,-Math.PI/2)}}return{g:f,fz:g,face:y,door:m}}function ry(i,e,t,n,s){let r=new gi;r.moveTo(-e/2-.5,0),r.lineTo(e/2+.5,0),r.lineTo(0,n),r.lineTo(-e/2-.5,0);let a=new Li(r,{depth:t+.8,bevelEnabled:!1}),o=a.attributes.uv;for(let c=0;c<o.count;c++)o.setXY(c,o.getX(c)/2,o.getY(c)/2);let l=new ke(a,Se.roof());l.position.set(0,s,-(t+.8)/2),l.castShadow=!0,l.receiveShadow=!0,i.add(l)}function kf(){let i=new ds("city","city");i.bounds={x1:-46,z1:-46,x2:46,z2:46},i.camDist=11,i.camHeight=6;let e=i.scene;e.fog=new Ur(11123915,70,190);let t=new Xs(12572927,5984320,.25);e.add(t);let n=new qs(16772829,3.4);n.position.set(25,40,15),n.castShadow=!0,n.shadow.mapSize.set(2048,2048),Object.assign(n.shadow.camera,{left:-40,right:40,top:40,bottom:-40,near:1,far:150}),n.shadow.bias=-4e-4,n.shadow.normalBias=.03,e.add(n),e.add(n.target),i.sun=n,i.sunDir=n.position.clone().normalize();let s=7,r=()=>(s=s*16807%2147483647,s/2147483647);zn(260,260,Se.grass(),0,0,0,e,6),zn(260,8,Se.asphalt(),0,.02,0,e,8);let a=zn(8,260,Se.asphalt(),0,.021,0,e,8);a.renderOrder=1,[-1,1].forEach(E=>{[-1,1].forEach(D=>{te(126,.15,2.4,Se.pavement(),D*(4+126/2),.075,E*5.2,e,!1,1.2),te(2.4,.15,126,Se.pavement(),E*5.2,.075,D*(6.4+126/2),e,!1,1.2)})});let o=we(15921902,{roughness:.6});for(let E=-128;E<=128;E+=5)Math.abs(E)<9||(zn(2.4,.14,o,E,.03,0,e),zn(.14,2.4,o,0,.03,E,e));for(let E=-3;E<=3;E++)[-1,1].forEach(D=>{zn(.5,2.2,o,E*1.05,.031,D*5.2,e),zn(2.2,.5,o,D*5.2,.031,E*1.05,e)});[-1,1].forEach(E=>{zn(.35,3.8,o,E*7.2,.031,E*2,e),zn(3.8,.35,o,-E*2,.031,E*7.2,e)});{let E=oc(i,{x:-19,z:-17,w:12,d:10,h:6,wall:Se.plasterCream(),doorSide:1,trim:16052714});ry(E.g,12,10,3.2,6.3),te(.9,2.2,.9,Se.brickRed(),3,8.4,-1.5,E.g,!0,1),te(2.6,.12,1.4,Se.woodDark(),0,2.9,E.fz+.7,E.g,!0,1);let D=yi("HOME",1.6,.4,"#3b2a1c","#f4e6cc","bold 64px Georgia, serif");D.position.set(0,3.25,E.fz+.12),E.g.add(D);let C=we(16119280,{roughness:.6});[[-25,-21],[-17,-13]].forEach(([R,F])=>{for(let G=R;G<=F;G+=.5)te(.1,.9,.06,C,G,.45,-9.5,e);te(F-R,.08,.05,C,(R+F)/2,.7,-9.5,e),te(F-R,.08,.05,C,(R+F)/2,.3,-9.5,e),i.solid((R+F)/2,-9.5,F-R+.1,.15,1)}),te(1.6,.03,1.4,Se.concrete(),-19,.015,-10.6,e,!1,1),te(.35,.4,.55,we(2969482,{roughness:.4,metalness:.3}),-16,1.1,-10.3,e),ft(.04,.04,.9,Se.metal(),-16,.45,-10.3,e,8),i.circles.push({x:-16,z:-10.3,r:.35}),[-24,-14].forEach(R=>Bf(e,R,-11,1.2,r)),i.circles.push({x:-24,z:-11,r:.8},{x:-14,z:-11,r:.8}),i.interact(-19,-10.6,"Enter home","enter","home")}{let E=oc(i,{x:19,z:-18,w:16,d:12,h:8,wall:Se.brickGrey(),doorSide:1,trim:2763824,skipFront:!0,floors:1});[-4.6,4.6].forEach(C=>{let R=new ke(new fn(4.8,2.6),Se.glass());R.position.set(C,1.9,E.fz+.03),E.g.add(R),te(5,.12,.2,Se.metal(),C,3.25,E.fz+.05,E.g,!1),te(5,.12,.2,Se.metal(),C,.55,E.fz+.05,E.g,!1)});let D=yi("GYM LIFE",7,1.3,"#111214","#f2b705",'bold 120px Impact, "Arial Black", sans-serif',!0);D.position.set(0,6.2,E.fz+.06),E.g.add(D),te(16.4,.8,.25,Se.concrete(),0,8.4,6.05,E.g,!0,2),te(16.4,.8,.25,Se.concrete(),0,8.4,-6.05,E.g,!0,2),[[-4,-2],[3,1]].forEach(([C,R])=>{te(2,1.2,1.6,we(10133670,{roughness:.5,metalness:.5}),C,8.9,R,E.g),ft(.5,.5,.1,Se.metal(),C,9.55,R,E.g,16)}),i.interact(19,-10.6,"Enter the gym","enter","gym")}{let E=oc(i,{x:-19,z:18,w:14,d:11,h:6,wall:Se.plasterWhite(),doorSide:-1,trim:3046735,skipFront:!0,floors:1});[-4.2,4.2].forEach(V=>{let q=new ke(new fn(4,2.4),Se.glass());q.position.set(V,1.8,E.fz-.03),q.rotation.y=Math.PI,E.g.add(q)});let D=document.createElement("canvas");D.width=256,D.height=16;let C=D.getContext("2d");for(let V=0;V<16;V++)C.fillStyle=V%2?"#2e7d4f":"#f4f4ef",C.fillRect(V*16,0,16,16);let R=new mi(D);R.colorSpace=kt;let F=new ke(new ln(13,.08,2),new qt({map:R,roughness:.9}));F.position.set(0,3.4,E.fz-1),F.rotation.x=-.25,F.castShadow=!0,E.g.add(F);let G=yi("SUPERMARKET",8,1.1,"#2e7d4f","#ffffff","bold 96px Helvetica, Arial, sans-serif",!0);G.position.set(0,4.8,E.fz-.06),G.rotation.y=Math.PI,E.g.add(G);let Z=we(12106946,{roughness:.3,metalness:.9});[[-24.5,11.2],[-23.6,11.2]].forEach(([V,q])=>{te(.6,.45,.9,Z,V,.75,q,e),ft(.02,.02,.6,Z,V,.35,q+.35,e,6),ft(.02,.02,.6,Z,V,.35,q-.35,e,6)}),i.solid(-24.05,11.2,1.6,1.1,1),i.interact(-19,11.1,"Enter the supermarket","enter","shop")}{let E=oc(i,{x:19,z:18,w:14,d:11,h:7.5,wall:Se.stone(),doorSide:-1,trim:15327952,floors:2});for(let F=-3;F<=3;F++)F!==0&&(ft(.32,.36,6.4,we(15854816,{roughness:.6}),F*2,3.35,E.fz-1.6,E.g,20),te(.9,.2,.9,we(15854816),F*2,6.65,E.fz-1.6,E.g),i.circles.push({x:19+F*2,z:18+E.fz-1.6,r:.4}));te(14.4,.6,2.4,Se.stone(),0,7.05,E.fz-1.3,E.g,!0,2);let D=new gi;D.moveTo(-7.2,0),D.lineTo(7.2,0),D.lineTo(0,1.8),D.lineTo(-7.2,0);let C=new ke(new Li(D,{depth:2.4,bevelEnabled:!1}),Se.stone());C.position.set(0,7.35,E.fz-2.5),C.castShadow=!0,E.g.add(C),te(15,.2,3,Se.stone(),0,.1,E.fz-1.5,E.g,!1,2),te(15.4,.2,3.4,Se.stone(),0,.02,E.fz-1.6,E.g,!1,2);let R=yi("BANK",3.6,.55,"#e3dccb","#3a3226",'bold 110px "Times New Roman", serif');R.position.set(0,7.05,E.fz-2.51),R.rotation.y=Math.PI,E.g.add(R),i.interact(19,11.1,"Enter the bank","enter","bank")}{zn(20,16,Se.pavement(),30,.012,36,e,1.2),ft(3,3.2,.6,Se.stone(),30,.3,36,e,40),ft(2.75,2.75,.1,we(4157318,{roughness:.05,metalness:.2,transparent:!0,opacity:.85}),30,.56,36,e,40),ft(.35,.5,1.6,Se.stone(),30,1.1,36,e,20),ft(1,.2,.3,Se.stone(),30,2,36,e,24);let C=new ke(new Xr(.35,1.3,16,1,!0),new qt({color:14676991,transparent:!0,opacity:.45,roughness:.1}));C.position.set(30,2.8,36),C.rotation.x=Math.PI,e.add(C),i.updaters.push((R,F)=>{C.scale.y=1+Math.sin(F*5)*.08}),i.circles.push({x:30,z:36,r:3.2}),[[24,36],[36,36]].forEach(([R,F])=>{let G=Se.woodDark();te(.5,.08,2.2,G,R,.5,F,e,!0,1),te(.08,.5,2.2,G,R+(R<30?-.25:.25),.8,F,e,!0,1),[-.9,.9].forEach(Z=>te(.5,.5,.08,Se.metal(),R,.25,F+Z,e)),i.solid(R,F,.7,2.3,1)})}let l=(E,D,C=3)=>Math.abs(E)<9||Math.abs(D)<9||i.colliders.some(R=>E>R.x1-C&&E<R.x2+C&&D>R.z1-C&&D<R.z2+C)||Math.hypot(E-30,D-36)<11||Math.hypot(E+19,D+10)<3,c=0;for(;c<55;){let E=r()*90-45,D=r()*90-45;if(l(E,D))continue;let C=.8+r()*.5;Of(e,E,D,C,r),i.circles.push({x:E,z:D,r:.3*C}),c++}for(let E=0;E<25;E++){let D=r()*90-45,C=r()*90-45;l(D,C,1.5)||(Bf(e,D,C,1,r),i.circles.push({x:D,z:C,r:.6}))}for(let E=0;E<70;E++){let D=r()*Math.PI*2,C=52+r()*45,R=Math.cos(D)*C,F=Math.sin(D)*C;Math.abs(R)<7||Math.abs(F)<7||Of(e,R,F,1+r()*.8,r)}let h=Se.leaves();[[0,-47.5,95,1.2],[0,47.5,95,1.2],[-47.5,0,1.2,95],[47.5,0,1.2,95]].forEach(([E,D,C,R])=>{let F=[];C>R?F.push([E-27.25,41.5],[E+27.25,41.5]):F.push([D-27.25,41.5],[D+27.25,41.5]),F.forEach(([G,Z])=>{C>R?te(Z,1.3,1.2,h,G,.65,D,e,!0,1.5):te(1.2,1.3,Z,h,E,.65,G,e,!0,1.5)})});let d=document.createElement("canvas");d.width=128,d.height=16;let u=d.getContext("2d");for(let E=0;E<8;E++)u.fillStyle=E%2?"#d92b2b":"#ffffff",u.fillRect(E*16,0,16,16);let f=new mi(d);f.colorSpace=kt;let g=new qt({map:f,roughness:.5});[[0,-46.5,0],[0,46.5,0],[-46.5,0,Math.PI/2],[46.5,0,Math.PI/2]].forEach(([E,D,C])=>{let R=new At;R.position.set(E,0,D),R.rotation.y=C,te(12,.35,.12,g,0,.9,0,R),[-5,0,5].forEach(Z=>te(.12,.9,.12,Se.metal(),Z,.45,0,R));let F=yi("ROAD CLOSED",2.4,.5,"#d92b2b","#ffffff","bold 80px Arial, sans-serif");F.position.set(0,1.45,.07),R.add(F);let G=F.clone();G.rotation.y=Math.PI,G.position.z=-.07,R.add(G),e.add(R)});for(let E=-40;E<=40;E+=13)Math.abs(E)<9||(sc(e,E,6.25,Math.PI),sc(e,E,-6.25,0),sc(e,6.25,E,-Math.PI/2),sc(e,-6.25,E,Math.PI/2),i.circles.push({x:E,z:6.25,r:.12},{x:E,z:-6.25,r:.12},{x:6.25,z:E,r:.12},{x:-6.25,z:E,r:.12}));let y=20,m=E=>{let D=E%y;return D<8?{h:"green",v:"red"}:D<10?{h:"yellow",v:"red"}:D<18?{h:"red",v:"green"}:{h:"red",v:"yellow"}},p=[{axis:"x",lamps:rc(e,-6.25,6.25,Math.PI/2)},{axis:"x",lamps:rc(e,6.25,-6.25,-Math.PI/2)},{axis:"z",lamps:rc(e,6.25,6.25,Math.PI)},{axis:"z",lamps:rc(e,-6.25,-6.25,0)}];[[-6.25,6.25],[6.25,-6.25],[6.25,6.25],[-6.25,-6.25]].forEach(([E,D])=>i.circles.push({x:E,z:D,r:.12}));let S=0;i.updaters.push(E=>{S+=E;let D=m(S);p.forEach(({axis:C,lamps:R})=>{let F=C==="x"?D.h:D.v;R[0].emissiveIntensity=F==="red"?3:0,R[1].emissiveIntensity=F==="yellow"?3:0,R[2].emissiveIntensity=F==="green"?3:0})});let b=[],x=[{axis:"x",side:1,from:-44,to:44},{axis:"x",side:-1,from:-44,to:44},{axis:"x",side:1,from:-44,to:44},{axis:"z",side:1,from:8,to:44},{axis:"z",side:-1,from:-44,to:-8}],M=[3038346,4160860,9055790,13152906,4930926],T=[14262396,9262372,15845797,13010498,15251862];x.forEach((E,D)=>{let C=new vi({shirt:M[D],skin:T[D],hair:[2759184,1118481,7031339,3810837,10124111][D],shorts:[2041651,3881787,2899501,1710618,4864810][D],muscles:[r()*30,r()*30,r()*30]});C.root.scale.setScalar(.94+r()*.1),e.add(C.root);let R={npc:C,route:E,dir:D%2?-1:1,u:E.from+(E.to-E.from)*(.15+.3*D%1),lane:0,speed:1.2+r()*.5,cur:0,pos:C.root.position};R.lane=R.dir>0?4.55:5.45,b.push(R)});let I=E=>E.h==="green",_=E=>E.v==="green";i.updaters.push(E=>{let D=m(S),C=i.playerPos;b.forEach(R=>{let{route:F}=R,G=R.dir>0?4.55:5.45;R.lane+=(G-R.lane)*Math.min(1,E*2);let Z=(ce,Ce)=>F.axis==="x"?[ce,F.side*Ce]:[F.side*Ce,ce],V=R.speed,q=R.u+R.dir*1.2;Math.abs(R.u)>4.2&&Math.abs(q)<=4.4&&!(F.axis==="x"?I(D):_(D))&&(V=0);let[ue,xe]=Z(R.u+R.dir*.9,R.lane),Je=(ce,Ce)=>Math.hypot(ce-ue,Ce-xe)<.75;C&&Je(C.x,C.z)&&(V=0),b.some(ce=>ce!==R&&Je(ce.pos.x,ce.pos.z))&&(V=0),R.cur+=(V-R.cur)*Math.min(1,E*6),R.u+=R.dir*R.cur*E,R.u>F.to&&(R.u=F.to,R.dir=-1),R.u<F.from&&(R.u=F.from,R.dir=1);let[Ke,tt]=Z(R.u,R.lane);R.pos.set(Ke,Math.abs(R.u)>4&&Math.abs(R.u)<128?.15:0,tt),F.axis==="x"?R.pos.y=Math.abs(Ke)>=4?.15:0:R.pos.y=Math.abs(tt)>=4?.15:0;let Q=(F.axis==="x"?R.dir>0?Math.PI/2:-Math.PI/2:R.dir>0?0:Math.PI)-R.npc.root.rotation.y;Q=Math.atan2(Math.sin(Q),Math.cos(Q)),R.npc.root.rotation.y+=Q*Math.min(1,E*8),R.npc.setPose("walk"),R.npc.update(E,R.cur*2.4)})}),i.dynamic.push(()=>b.map(E=>({x:E.pos.x,z:E.pos.z,r:.32,owner:E})));let A=[],P=[10165276,1916787,14211288,2039583,3104078,9080726,11897642];for(let E=0;E<7;E++){let D=sy(P[E]),C=E%2?"x":"z",R=E%4<2?1:-1;D.userData={axis:C,dir:R,u:-110+E*33,v:0,max:10+E%3*2.5},e.add(D),A.push(D)}let N=E=>{let D=E.userData,C=D.dir*D.u;D.axis==="x"?(E.position.set(C,0,D.dir*2),E.rotation.y=D.dir*Math.PI/2):(E.position.set(-D.dir*2,0,C),E.rotation.y=D.dir>0?0:Math.PI)};return i.updaters.push(E=>{let D=m(S);A.forEach(C=>{let R=C.userData,F=R.max;!((R.axis==="x"?D.h:D.v)==="green")&&R.u<-9.2&&R.u>-40&&(F=Math.min(F,Math.max(0,(-9.6-R.u)*1.2))),A.forEach(q=>{let Y=q.userData;if(q===C||Y.axis!==R.axis||Y.dir!==R.dir)return;let ue=Y.u-R.u;ue>0&&ue<25&&(F=Math.min(F,Math.max(0,(ue-6)*1.5)))});let Z=R.axis==="x"?[R.dir,0]:[0,R.dir],V=(q,Y)=>{let ue=q-C.position.x,xe=Y-C.position.z,Je=ue*Z[0]+xe*Z[1],Ke=Math.abs(ue*Z[1]-xe*Z[0]);Je>0&&Je<9&&Ke<1.6&&(F=Math.min(F,Math.max(0,(Je-3.2)*1.5)))};i.playerPos&&V(i.playerPos.x,i.playerPos.z),b.forEach(q=>V(q.pos.x,q.pos.z)),R.v+=Math.max(-14*E,Math.min(5*E,F-R.v)),R.u+=R.v*E,R.u>125&&(R.u=-125),N(C)})}),i.dynamic.push(()=>A.map(E=>{let D=E.position.x,C=E.position.z,[R,F]=[1,2.25];return E.userData.axis==="x"?{x1:D-F,x2:D+F,z1:C-R,z2:C+R,owner:E}:{x1:D-R,x2:D+R,z1:C-F,z2:C+F,owner:E}})),i.spawn={x:-19,z:-9,rot:0},i}function lc(i,e,t,n,s,r={}){let a=i.scene;a.background=new Fe(r.bg||1382171),a.add(new Xs(16774890,3814704,.35));let o=new qs(16774374,1.4);o.position.set(3,12,6),o.castShadow=!0,o.shadow.mapSize.set(2048,2048),o.shadow.bias=-4e-4,o.shadow.normalBias=.03,Object.assign(o.shadow.camera,{left:-12,right:12,top:12,bottom:-12}),a.add(o),(r.lamps||[[-e/4,-t/6],[e/4,-t/6],[0,t/4]]).forEach(([u,f])=>{let g=new ts(r.lampColor||16771012,r.lampPower||14,11,1.6);g.position.set(u,2.9,f),a.add(g)}),zn(e,t,n,0,0,0,a,r.floorRep||2);let c=3.2;te(e+.3,c,.3,s,0,c/2,-t/2-.15,a,!0,2),te(.3,c,t,s,-e/2-.15,c/2,0,a,!0,2),te(.3,c,t,s,e/2+.15,c/2,0,a,!0,2);let h=we(r.skirt||15921128,{roughness:.5});te(e,.12,.03,h,0,.06,-t/2+.015,a,!1),te(.03,.12,t,h,-e/2+.015,.06,0,a,!1),te(.03,.12,t,h,e/2-.015,.06,0,a,!1);let d=e/2-1.5;te(d,.6,.3,s,-e/4-.75,.3,t/2+.15,a,!0,2),te(d,.6,.3,s,e/4+.75,.3,t/2+.15,a,!0,2),i.solid(-e/4-.75,t/2+.15,d,.3),i.solid(e/4+.75,t/2+.15,d,.3),i.bounds={x1:-e/2,z1:-t/2,x2:e/2,z2:t/2+.6},te(2.2,.03,1.1,Rt("doormat",Et.fabric("#5a3a2a",[3,2]),{roughness:1}),0,.015,t/2-.65,a,!1),i.interact(0,t/2-.65,"Go outside","exit",null,1.4),i.spawn={x:0,z:t/2-2,rot:Math.PI},i.camDist=8.5,i.camHeight=6.5}function ay(i,e,t,n,s=1){let r=new At;r.position.set(e,t,n),r.scale.setScalar(s);let a=we(13208133,{roughness:.6});ft(.3,.3,.08,a,0,.04,0,r),ft(.32,.32,.08,we(4860439,{roughness:.8}),0,.12,0,r),ft(.34,.33,.02,we(15906340,{roughness:.4}),0,.17,0,r),ft(.34,.34,.02,we(6135354,{roughness:.6}),0,.19,0,r);let o=new ke(new xi(.31,20,10,0,Math.PI*2,0,Math.PI/2),a);return o.position.y=.2,o.scale.y=.75,o.castShadow=!0,r.add(o),i.add(r),r}function oy(i,e,t,n,s=1){let r=new At;r.position.set(e,t,n),r.scale.setScalar(s),ft(.06,.09,.32,we(10207066),0,.16,0,r,10);let a=we(3107626,{roughness:1});return[[0,.4,0,.18],[.13,.35,.05,.13],[-.13,.35,0,.14],[0,.35,.13,.12],[0,.35,-.12,.12]].forEach(([o,l,c,h])=>us(h,a,o,l,c,r,12)),i.add(r),r}function ly(i,e,t,n,s=1){let r=new At;r.position.set(e,t,n),r.scale.setScalar(s),us(.3,we(9315108,{roughness:.45}),0,.06,0,r,20).scale.set(1.2,.22,.9),us(.12,we(15785163,{roughness:.5}),.27,.06,0,r,12).scale.set(1,.4,1);let l=ft(.03,.03,.28,we(15920610),.38,.06,0,r,8);return l.rotation.z=Math.PI/2,i.add(r),r}var cy={hamburger:ay,broccoli:oy,meat:ly};function zf(){let i=new ds("home","home");lc(i,14,11,Se.woodFloor(),Se.plasterCream(),{bg:1775378,floorRep:2.5});let e=i.scene,t=Se.woodDark();te(2.4,.45,3.4,t,-4.5,.22,-3.3,e,!0,1),te(2.2,.28,3.2,we(16052974,{roughness:1}),-4.5,.58,-3.3,e),te(2.24,.1,2.1,Rt("duvet",Et.fabric("#34507a",[6,6]),{roughness:1}),-4.5,.76,-2.75,e),us(.35,we(16777215,{roughness:1}),-4.5,.82,-4.5,e).scale.set(2,.35,.9),te(2.4,1.3,.12,t,-4.5,.65,-5.02,e,!0,1),te(.5,.5,.5,t,-6.2,.25,-4.7,e,!0,1);let s=ft(.12,.18,.25,we(15984584,{emissive:16767392,emissiveIntensity:.4}),-6.2,.75,-4.7,e);s.castShadow=!1,i.solid(-4.5,-3.3,2.4,3.4),i.solid(-6.2,-4.7,.5,.5),i.interact(-3,-1.2,"Sleep (next day)","sleep",null,1.6),i.bedPos={x:-4.5,z:-3.3};let r=we(15659507,{roughness:.25,metalness:.3});te(1.1,2.1,.9,r,5.6,1.05,-4.9,e),te(1.08,.02,.02,we(10066329),5.6,1.45,-4.44,e,!1),te(.05,.5,.05,Se.chrome(),5.15,1.75,-4.42,e,!1),te(.05,.5,.05,Se.chrome(),5.15,1.05,-4.42,e,!1),i.solid(5.6,-4.9,1.1,.9),i.interact(5.6,-3.6,"Fridge: eat something","fridge",null,1.4),te(3,.9,.7,Rt("cabinet",Et.wood("#d8c7a8"),{roughness:.5}),3.3,.45,-5,e,!0,1),te(3.05,.06,.75,we(3092788,{roughness:.2}),3.3,.93,-5,e),ft(.18,.18,.02,Se.chrome(),3.8,.97,-5,e),i.solid(3.3,-5,3,.7);let a=Rt("sofa",Et.fabric("#6b6f75",[3,3]),{roughness:1});te(3,.45,1,a,.5,.3,.9,e,!0,1),te(3,.7,.25,a,.5,.7,1.35,e,!0,1),te(.25,.6,1,a,-.9,.5,.9,e,!0,1),te(.25,.6,1,a,1.9,.5,.9,e,!0,1),i.solid(.5,1,3.1,1.2),te(2.4,1.4,.06,we(789516,{roughness:.2}),.5,1.7,-5.28,e);let o=new ke(new fn(2.3,1.3),new qt({color:0,emissive:2250154,emissiveIntensity:1}));o.position.set(.5,1.7,-5.24),e.add(o),i.updaters.push((c,h)=>o.material.emissive.setHSL(h*.03%1,.5,.3+Math.sin(h*5)*.03)),te(2,.45,.45,t,.5,.22,-5.05,e,!0,1),i.solid(.5,-5.05,2,.45),te(3.4,.01,2.4,Rt("rug",Et.fabric("#a57a52",[8,6]),{roughness:1}),.5,.005,-2,e,!1),i.interact(.5,-.4,"Watch TV (+mood)","tv",null,1.4);let l=te(1.1,2,.04,Se.mirror(),6.97,1.3,1,e);l.rotation.y=Math.PI/2,te(.06,2.1,1.2,t,6.99,1.3,1,e,!1),i.interact(6,1,"Mirror: strike a pose","mirror",null,1.3),ft(.28,.22,.55,we(12084282,{roughness:.8}),-6.2,.28,4.5,e);for(let c=0;c<5;c++)us(.3,Se.leaves(),-6.2+Math.cos(c)*.15,.85+c*.12,4.5+Math.sin(c)*.15,e,10);return i.circles.push({x:-6.2,z:4.5,r:.35}),[[-2,"SUNSET"],[3.5,"MOUNTAINS"]].forEach(([c],h)=>{te(1.2,.8,.04,we(2760726),c,2.1,-5.48,e,!1);let d=new ke(new fn(1.05,.65),we([13204298,5930394][h],{roughness:.6}));d.position.set(c,2.1,-5.455),e.add(d)}),i}function Vf(){let i=new ds("gym","gym");lc(i,18,13,Se.rubber(),Se.plasterGrey(),{bg:987154,floorRep:1,lampColor:15922943,lampPower:16,skirt:2236962,lamps:[[-5,-2],[0,-2],[5,-2],[-5,3],[5,3]]});let e=i.scene,t=te(13.5,2,.04,Se.mirror(),0,1.4,-6.48,e,!1);t.castShadow=!1,te(13.7,.06,.08,Se.metal(),0,2.43,-6.46,e,!1),te(13.7,.06,.08,Se.metal(),0,.37,-6.46,e,!1);let n=yi("NO PAIN NO GAIN",5,.55,"#111214","#f2b705",'bold 64px Impact, "Arial Black", sans-serif',!0);n.position.set(0,2.85,-6.47),e.add(n),[-5,0,5].forEach(o=>{let l=te(3,.05,.25,we(16777215,{emissive:15922943,emissiveIntensity:2}),o,3.15,-2,e,!1);l.castShadow=!1});let s=Se.metal(),r=o=>yi(o,1.6,.3,"#111214","#e6e6e6","bold 56px Arial, sans-serif");{let o=new At;o.position.set(-5.5,0,-3.5),e.add(o),[[-1.1,-.6],[1.1,-.6],[-1.1,.6],[1.1,.6]].forEach(([h,d])=>te(.09,2.6,.09,s,h,1.3,d,o)),te(2.4,.08,.08,s,0,2.6,-.6,o),te(2.4,.08,.08,s,0,2.6,.6,o),[-1.1,1.1].forEach(h=>te(.08,.08,1.3,s,h,2.6,0,o)),[-1.1,1.1].forEach(h=>te(.12,.06,.2,s,h,1.45,.1,o)),te(2.6,.03,1.6,Rt("platform",Et.wood("#6d5236"),{roughness:.7}),0,.015,0,o,!1,1);let l=au(2.2);l.position.set(0,1.5,.1),o.add(l),i.solid(-5.5,-3.5,2.4,1.3),i.squat={group:o,barbell:l};let c=r("SQUAT");c.position.set(0,2.85,.62),o.add(c),i.interact(-5.5,-1.8,"Squat (legs)","workout","squat")}{let o=new At;o.position.set(0,0,-3.3),e.add(o),te(.5,.1,1.9,we(1776413,{roughness:.5}),0,.5,.3,o),te(.08,.45,.08,s,0,.22,-.4,o),te(.08,.45,.08,s,0,.22,1,o),te(.5,.04,.08,s,0,.02,-.4,o),te(.5,.04,.08,s,0,.02,1,o),[-.55,.55].forEach(h=>te(.07,1.4,.07,s,h,.7,-.2,o));let l=au(2.2);l.position.set(0,1.4,-.15),o.add(l),i.solid(0,-3.1,1.3,2.4),i.bench={group:o,barbell:l};let c=r("BENCH PRESS");c.position.set(0,1.75,-.25),o.add(c),i.interact(1.6,-1.6,"Bench press (chest)","workout","bench")}{let o=new At;o.position.set(5.5,0,-3.8),e.add(o),te(.1,3,.1,s,0,1.5,-.8,o),te(.1,.1,1.6,s,0,3,0,o),te(.6,.1,.6,we(1776413,{roughness:.5}),0,.5,.35,o),te(.08,.5,.08,s,0,.25,.35,o);let l=ft(.07,.07,.5,we(1776413,{roughness:.5}),0,.82,.8,o,12);l.rotation.z=Math.PI/2;let c=te(.015,1,.015,Se.chrome(),0,2.5,.6,o,!1),h=ft(.02,.02,1.5,Se.chrome(),0,2,.6,o,8);h.rotation.z=Math.PI/2;for(let u=0;u<8;u++)te(.45,.07,.25,we(2763309,{roughness:.4,metalness:.6}),0,.1+u*.075,-.55,o);i.solid(5.5,-3.8,1,2),i.lat={group:o,cable:c,handle:h};let d=r("LAT PULLDOWN");d.position.set(0,3.25,.1),o.add(d),i.interact(4,-2,"Lat pulldown (back)","workout","lat")}te(4,.08,.7,s,6,.8,3.5,e),te(4,.08,.7,s,6,.4,3.5,e),[-1.9,1.9].forEach(o=>te(.08,.85,.7,s,6+o,.42,3.5,e)),i.solid(6,3.5,4,.8);for(let o=0;o<6;o++){let l=au(.45,.08+o*.012,!0);l.position.set(4.4+o*.64,.95,3.5),l.rotation.y=Math.PI/2,e.add(l)}ft(.03,.03,1.2,s,7.8,.6,-1,e,8);for(let o=0;o<3;o++){let l=ft(.25-o*.03,.25-o*.03,.05,we(1381653,{roughness:.6}),7.8,.5+o*.25,-1,e,24);l.rotation.x=Math.PI/2}i.circles.push({x:7.8,z:-1,r:.35}),te(.4,1.1,.4,we(14474460,{roughness:.3}),-8.3,.55,0,e),ft(.15,.15,.4,we(7320544,{transparent:!0,opacity:.7,roughness:.05}),-8.3,1.3,0,e,16),i.circles.push({x:-8.3,z:0,r:.35});let a=new vi({shirt:1118481,skin:9262372,hair:789516,muscles:[90,95,90]});return a.root.position.set(-6,0,3.5),a.root.rotation.y=Math.PI/2,e.add(a.root),i.circles.push({x:-6,z:3.5,r:.5}),a.setPose("flex"),i.interact(-4.6,3.5,"Talk to your gym bro","bro",null,1.5),i.updaters.push(o=>a.update(o)),i}function au(i,e=.225,t=!1){let n=new At,s=ft(.016,.016,i,Se.chrome(),0,0,0,n,10);s.rotation.z=Math.PI/2;let r=we(1381653,{roughness:.6});return[-1,1].forEach(a=>{let o=t?i/2-.06:i/2-.25,l=ft(e,e,.06,r,a*o,0,0,n,28);if(l.rotation.z=Math.PI/2,!t){let c=ft(e*.85,e*.85,.05,r,a*(o-.07),0,0,n,28);c.rotation.z=Math.PI/2;let h=ft(.03,.03,.05,Se.chrome(),a*(o-.13),0,0,n,12);h.rotation.z=Math.PI/2}}),n}function Gf(){let i=new ds("shop","shop");lc(i,16,12,Se.tiles(),Se.plasterGreen(),{bg:1251354,floorRep:1,lampColor:16186367,lampPower:16});let e=i.scene;[["hamburger",-4.5,"BURGERS"],["broccoli",0,"VEGETABLES"],["meat",4.5,"BUTCHER"]].forEach(([s,r,a])=>{te(2.8,.95,1.1,we(16053490,{roughness:.35}),r,.475,-3.5,e),te(2.9,.05,1.2,we(2829617,{roughness:.2}),r,.97,-3.5,e),i.solid(r,-3.5,2.8,1.1);for(let l=-1;l<=1;l++)cy[s](e,r+l*.8,1,-3.5,.85);te(2.8,2.5,.5,we(14475234,{roughness:.5,metalness:.3}),r,1.25,-5.7,e);for(let l=0;l<3;l++){te(2.7,.04,.5,we(12172738,{metalness:.5,roughness:.4}),r,.55+l*.72,-5.45,e);for(let c=0;c<6;c++){let h=[11743533,14191674,2914928,14202186,3891076,15262420][(c+l)%6];te(.3,.38,.28,we(h,{roughness:.5}),r-1.1+c*.44,.77+l*.72,-5.4,e)}}let o=yi(a,2.2,.35,"#2e7d4f","#ffffff","bold 56px Arial, sans-serif");o.position.set(r,2.8,-5.44),e.add(o),i.interact(r,-2.2,"Buy","buy",s,1.4)}),te(3,.95,.9,we(3817544,{roughness:.4}),5,.475,2.5,e),te(3.05,.04,.95,we(1842204,{roughness:.2}),5,.97,2.5,e),te(.4,.3,.3,we(1842204,{roughness:.3}),5.8,1.13,2.5,e),i.solid(5,2.5,3,.9),i.solid(5,1.5,1,1);let n=new vi({shirt:3046735,skin:15843965,hair:7031339});return n.root.position.set(5,0,1.5),e.add(n.root),i.updaters.push(s=>n.update(s)),[[-5.5,3],[-3.5,3]].forEach(([s,r],a)=>{te(1.6,.7,1.2,Rt("crate",Et.wood("#a57b4f"),{roughness:.8}),s,.35,r,e,!0,1),i.solid(s,r,1.6,1.2);for(let o=0;o<12;o++)us(.13,we(a?14709791:14202154,{roughness:.5}),s-.6+o%4*.4,.8,r-.35+Math.floor(o/4)*.35,e,12)}),i}function Hf(){let i=new ds("bank","bank");lc(i,16,12,Se.marble(),Se.plasterWhite(),{bg:1184276,floorRep:2,lampColor:16769720,lampPower:14});let e=i.scene,t=Se.woodDark();te(9,1.1,.9,t,-1.5,.55,-3.2,e,!0,1),te(9.2,.06,1.1,Se.marble(),-1.5,1.13,-3.2,e,!0,1),i.solid(-1.5,-3.2,9,.9);let n=we(13214026,{roughness:.3,metalness:1});for(let c=-2;c<=2;c++)te(.04,.9,.04,n,-1.5+c*2,1.6,-3.2,e);te(9,.04,.04,n,-1.5,2.05,-3.2,e);let s=new ke(new fn(8.8,.9),new qt({color:13624298,transparent:!0,opacity:.18,roughness:.05}));s.position.set(-1.5,1.6,-3.2),e.add(s);let r=new vi({shirt:1911876,skin:16767916,hair:10124111});r.root.position.set(-3,0,-4.2),e.add(r.root),i.updaters.push(c=>r.update(c));let a=yi("INVESTMENTS",3.2,1.1,"#0b1a2e","#e9c46a","bold 72px Arial, sans-serif",!0);a.position.set(-3,2.5,-5.98),e.add(a),i.interact(-3,-1.8,"Invest (plane game)","plane",null,1.5),te(2.2,.06,1.1,t,3.5,.9,-3.2,e,!0,1),[[-1,-.45],[1,-.45],[-1,.45],[1,.45]].forEach(([c,h])=>te(.06,.88,.06,Se.metal(),3.5+c,.44,-3.2+h,e));for(let c=0;c<4;c++)te(.34,.04+c*.02,.16,we(8364922,{roughness:.8}),3+c*.3,.95+c*.01,-3.2,e);i.solid(3.5,-3.2,2.2,1.1),i.interact(3.5,-1.8,"Work: count banknotes","work",null,1.5);let o=ft(1.5,1.5,.3,we(10396584,{roughness:.3,metalness:.9}),5.5,1.7,-5.9,e,40);o.rotation.x=Math.PI/2;let l=new ke(new ta(.45,.05,10,32),Se.chrome());l.position.set(5.5,1.7,-5.7),e.add(l);for(let c=0;c<3;c++){let h=te(.9,.04,.04,Se.chrome(),0,0,0,null,!1);h.rotation.z=c*Math.PI/3,l.add(h)}return i.updaters.push((c,h)=>{l.rotation.z=h*.3}),[[-6.5,2],[6.5,2]].forEach(([c,h])=>{ft(.35,.4,3.2,we(15854816,{roughness:.5}),c,1.6,h,e,24),i.circles.push({x:c,z:h,r:.42})}),i}var ai=i=>document.getElementById(i),hy={money:"Money",stamina:"Energy",happiness:"Mood",mass:"Mass",legs:"Legs",chest:"Chest",back:"Back"},cc=i=>`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${i}</svg>`,ur={sound:cc('<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16 9a4 4 0 0 1 0 6"/><path d="M19 6a8 8 0 0 1 0 12"/>'),muted:cc('<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M17 9l5 6M22 9l-5 6"/>'),quality:cc('<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>'),help:cc('<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6V14"/><path d="M12 17.5v.01"/>')};function dr(i){return'<div class="effects">'+Object.entries(i).map(([e,t])=>`<span class="${t>=0?"up":"down"}">${hy[e]||e} ${t>0?"+":""}${t}</span>`).join("")+"</div>"}var hc=class{constructor(e){this.audio=e,this.panel=ai("panel"),this.onEat=null,this.panelKeys=null}showHud(e){ai("hud").classList.toggle("hidden",!e)}update(e){ai("h-day").textContent=`Day ${e.totalDays-e.days+1} / ${e.totalDays}`,ai("h-money").textContent=`$${Math.round(e.money)}`;let t=(s,r)=>{let a=Math.max(0,Math.min(100,r)),o=ai("b-"+s);o.style.width=a+"%",(s==="stamina"||s==="happiness")&&(o.style.background=a<25?"var(--bad)":a<50?"#ffb13d":"var(--good)"),ai("v-"+s).textContent=Math.round(r)};["stamina","happiness","legs","chest","back"].forEach(s=>t(s,e[s]));let n=ai("inventory");n.innerHTML="",Object.entries(ii).forEach(([s,r],a)=>{let o=document.createElement("button");o.innerHTML=`<span class="name">${r.name}</span><b>${e.inventory[s]}</b> <small>[${a+1}]</small>`,o.title=`Eat: ${r.name}`,o.disabled=e.inventory[s]===0,o.onclick=()=>this.onEat&&this.onEat(s),n.appendChild(o)})}prompt(e){let t=ai("prompt");if(!e){t.classList.add("hidden");return}t.innerHTML=`<kbd>E</kbd>${e}`,t.classList.remove("hidden")}toast(e,t=""){let n=document.createElement("div");n.className="toast "+t,n.textContent=e,ai("toasts").appendChild(n),setTimeout(()=>n.remove(),2700)}dialog(e,t=[],n={}){this.panel.className=n.clear?"clear":"",this.panel.innerHTML=`<div class="box ${n.cls||""}">${e}<div class="btns"></div></div>`;let s=this.panel.querySelector(".btns"),r={};return t.forEach((a,o)=>{let l=document.createElement("button");l.className="btn "+(a.cls||""),l.innerHTML=a.label,l.onclick=()=>{this.audio.sfx("click"),a.keep||this.close(),a.cb&&a.cb()},s.appendChild(l),r[a.key||String(o+1)]=l}),this.panelKeys=r,this.panel.querySelector(".box")}open(e,t={}){return this.panel.className=t.clear?"clear":"",this.panel.innerHTML=`<div class="box ${t.cls||""}">${e}</div>`,this.panelKeys=null,this.panel.querySelector(".box")}close(){this.panel.className="hidden",this.panel.innerHTML="",this.panelKeys=null}isOpen(){return!this.panel.classList.contains("hidden")}handleKey(e){if(!this.panelKeys)return!1;let t=e==="Enter"?"1":e==="Escape"?"Escape":e,n=this.panelKeys[t];return n?(n.click(),!0):!1}fade(e,t=1400){let n=ai("fade");return n.textContent=e||"",n.classList.add("on"),new Promise(s=>setTimeout(()=>{s(),setTimeout(()=>n.classList.remove("on"),150)},t))}};function Oa(i,e){return`<h2>${i}</h2><p>${e}</p>`}function uc(i){return i>2.4-.8?"3":i>2.4-1.6?"2":"1"}function Wf(i,e){let t=[{n:"RED",c:"#ff4d4d",k:"1"},{n:"GREEN",c:"#3ecf6e",k:"2"},{n:"BLUE",c:"#3d8bff",k:"3"},{n:"YELLOW",c:"#f0d000",k:"4"}],n=[2.2,1.6,1.15][e],s=10,r=i.ui.open(Oa("Squat","Press the colour the word <b>says</b> (not the colour it is painted in) before time runs out.")+`<div class="info"><span id="mg-rep">Rep 0/${s}</span><span id="mg-good">Good 0</span></div>
     <div class="word" id="mg-word">Ready?</div>
     <div class="meter"><div class="fill" id="mg-time"></div></div>
     <div class="btns">${t.map(S=>`<button class="btn" data-k="${S.k}" style="background:${S.c};color:#111">${S.n}<small>[${S.k}]</small></button>`).join("")}</div>`,{clear:!0,cls:"mg"});r.querySelectorAll("[data-k]").forEach(S=>{S.onclick=()=>p.key(S.dataset.k)});let a=r.querySelector("#mg-word"),o=2.4,l=0,c=0,h=null,d=0,u=0,f=-1,g=!1;function y(){if(l>=s){g=!0,i.done(c/s);return}l++,h=t[Math.floor(Math.random()*t.length)];let S;do S=t[Math.floor(Math.random()*t.length)];while(S===h&&Math.random()<.8);a.textContent=h.n,a.style.color=S.c,d=n,r.querySelector("#mg-rep").textContent=`Rep ${l}/${s}`}function m(S){h=null,u=.75,S?(c++,f=0,i.audio.sfx("good"),a.textContent="GOOD REP",a.style.color="#3ecf6e"):(i.audio.sfx("bad"),a.textContent="MISSED",r.classList.remove("shake"),r.offsetWidth,r.classList.add("shake")),r.querySelector("#mg-good").textContent=`Good ${c}`}let p={update(S){if(!g){if(f>=0?(f+=S/.75,i.char.setPose("squat",Math.sin(Math.min(1,f)*Math.PI)),f>=1&&(f=-1)):i.char.setPose("squat",0),o>0){o-=S,a.textContent=uc(o),a.style.color="#fff",o<=0&&y();return}h?(d-=S,r.querySelector("#mg-time").style.width=d/n*100+"%",d<=0&&m(!1)):(u-=S)<=0&&y()}},key(S){if(!h||g)return;let b=t.find(x=>x.k===S);b&&m(b===h)}};return p}function Xf(i,e){let t=[.24,.17,.11][e],n=[2.3,3,3.8][e],s=8,r=3,a=i.ui.open(Oa("Bench press","Press <b>SPACE</b> (or the button) when the marker is inside the green zone.")+`<div class="info"><span id="mg-rep">Rep 0/${s}</span><span id="mg-miss">Misses 0/${r}</span></div>
     <div class="word" id="mg-word">Ready?</div>
     <div class="meter"><div class="zone" id="mg-zone"></div><div class="needle" id="mg-needle"></div></div>
     <div class="btns"><button class="btn primary" id="mg-push">PUSH <small>[Space]</small></button></div>`,{clear:!0,cls:"mg"});a.querySelector("#mg-push").onclick=()=>T.key(" ");let o=a.querySelector("#mg-word"),l=a.querySelector("#mg-zone"),c=a.querySelector("#mg-needle"),h=2.4,d=0,u=0,f=.5,g=0,y=0,m=0,p=-1,S=!1,b=0;function x(){f=t/2+Math.random()*(1-t),l.style.left=(f-t/2)*100+"%",l.style.width=t*100+"%"}x();function M(){S=!0,setTimeout(()=>i.done(y/s),500)}let T={update(I){if(p>=0?(p+=I/.9,i.char.setPose("bench",1-Math.sin(Math.min(1,p)*Math.PI)),p>=1&&(p=-1)):i.char.setPose("bench",S&&y<s?.1:1),!S){if(h>0){h-=I,o.textContent=uc(h),h<=0&&(o.textContent="GO");return}b-=I,d+=I*n*(1+g*.06),u=(Math.sin(d)+1)/2,c.style.left=u*100+"%"}},key(I){S||h>0||b>0||I!==" "&&I!=="Enter"||(b=.35,Math.abs(u-f)<=t/2?(y++,g++,p=0,i.audio.sfx("good"),o.textContent="UP",x()):(m++,g++,i.audio.sfx("bad"),o.textContent="MISSED",a.classList.remove("shake"),a.offsetWidth,a.classList.add("shake")),a.querySelector("#mg-rep").textContent=`Rep ${y}/${s}`,a.querySelector("#mg-miss").textContent=`Misses ${m}/${r}`,(y>=s||m>=r)&&M())}};return T}function qf(i,e){let t=[.15,.115,.09][e],n=15,s=8,r=i.ui.open(Oa("Lat pulldown","Alternate <b>Left</b> and <b>Right</b> (or A and D) as fast as you can to pull the bar down.")+`<div class="info"><span id="mg-rep">Rep 0/${s}</span><span id="mg-timer">${n}s</span></div>
     <div class="word" id="mg-word">Ready?</div>
     <div class="meter"><div class="fill" id="mg-fill"></div></div>
     <div class="btns"><button class="btn blue" data-k="ArrowLeft">&larr; Left</button><button class="btn blue" data-k="ArrowRight">Right &rarr;</button></div>`,{clear:!0,cls:"mg"});r.querySelectorAll("[data-k]").forEach(y=>{y.onclick=()=>g.key(y.dataset.k)});let a=r.querySelector("#mg-word"),o=2.4,l=n,c=null,h=0,d=0,u=0,f=!1,g={update(y){if(d+=(h-d)*Math.min(1,y*12),i.char.setPose("lat",d),f){h=Math.max(0,h-y);return}if(o>0){o-=y,a.textContent=uc(o),o<=0&&(a.textContent="PULL");return}l-=y,h=Math.max(0,h-y*.35),r.querySelector("#mg-timer").textContent=Math.ceil(l)+"s",r.querySelector("#mg-fill").style.width=h*100+"%",(l<=0||u>=s)&&(f=!0,a.textContent=u>=s?"SET COMPLETE":"TIME",setTimeout(()=>i.done(Math.min(1,u/s)),700))},key(y){if(f||o>0)return;let m=y==="ArrowLeft"||y==="a"||y==="A"?"L":y==="ArrowRight"||y==="d"||y==="D"?"R":null;!m||m===c||(c=m,h+=t,h>=1&&(h=0,u++,i.audio.sfx("good"),a.textContent=`REP ${u}`,r.querySelector("#mg-rep").textContent=`Rep ${u}/${s}`))}};return g}function Yf(i){let e={ArrowUp:"\u2191",ArrowDown:"\u2193",ArrowLeft:"\u2190",ArrowRight:"\u2192"},t={w:"ArrowUp",s:"ArrowDown",a:"ArrowLeft",d:"ArrowRight"},n=Object.keys(e),s=15,r=i.ui.open(Oa("Count the banknotes","Press the arrow shown (or WASD). Every correct answer pays <b>$2</b>.")+`<div class="info"><span id="mg-earn">$0</span><span id="mg-timer">${s}s</span></div>
     <div class="arrows" id="mg-arrow">...</div>
     <div class="btns">${n.map(y=>`<button class="btn" data-k="${y}">${e[y]}</button>`).join("")}</div>`,{clear:!0,cls:"mg"});r.querySelectorAll("[data-k]").forEach(y=>{y.onclick=()=>g.key(y.dataset.k)});let a=r.querySelector("#mg-arrow"),o=2.4,l=s,c=null,h=0,d=0,u=!1,f=()=>{c=n[Math.floor(Math.random()*4)],a.textContent=e[c]},g={update(y){if(i.char.setPose("count",o>0||u?0:1),!u){if(o>0){o-=y,a.textContent=uc(o),o<=0&&f();return}d-=y,l-=y,r.querySelector("#mg-timer").textContent=Math.ceil(l)+"s",l<=0&&(u=!0,a.textContent="TIME",setTimeout(()=>i.done(h*2),500))}},key(y){var m;u||o>0||d>0||(y=t[y]||t[(m=y.toLowerCase)==null?void 0:m.call(y)]||y,e[y]&&(y===c?(h++,i.audio.sfx("coin"),r.querySelector("#mg-earn").textContent="$"+h*2,f()):(i.audio.sfx("bad"),d=.5,r.classList.remove("shake"),r.offsetWidth,r.classList.add("shake"))))}};return g}function $f(i,e){let t=Math.random(),n=Math.min(25,Math.max(1,.96/(1-t))),s=i.ui.open(Oa("Investment",`You bet <b>$${e}</b>. Cash out before the plane goes down.`)+`<canvas id="mg-cv" width="520" height="220"></canvas>
     <div class="word" id="mg-mult">1.00x</div>
     <div class="btns"><button class="btn good" id="mg-cash">CASH OUT <small>[Space]</small></button></div>`,{cls:"mg"});s.querySelector("#mg-cash").onclick=()=>g.key(" ");let r=s.querySelector("#mg-cv"),a=r.getContext("2d"),o=s.querySelector("#mg-mult"),l=-.6,c=1,h=!1,d=[];function u(y){a.clearRect(0,0,r.width,r.height),a.strokeStyle="rgba(255,255,255,.08)";for(let M=1;M<5;M++)a.beginPath(),a.moveTo(0,M*44),a.lineTo(r.width,M*44),a.stroke();let m=Math.max(6,l+1),p=Math.max(2,c*1.2),S=M=>20+M/m*(r.width-60),b=M=>r.height-20-(M-1)/(p-1)*(r.height-50);a.strokeStyle=y?"#ff5a5a":"#f0b400",a.lineWidth=4,a.beginPath(),d.forEach(([M,T],I)=>I?a.lineTo(S(M),b(T)):a.moveTo(S(M),b(T))),a.stroke();let x=d[d.length-1]||[0,1];if(a.save(),a.translate(S(x[0]),b(x[1])),y){a.fillStyle="#ff5a5a",a.beginPath();for(let M=0;M<16;M++){let T=M/16*Math.PI*2,I=M%2?7:16;a.lineTo(Math.cos(T)*I,Math.sin(T)*I)}a.fill()}else a.rotate(-.35),a.fillStyle="#f4f6fb",a.beginPath(),a.ellipse(0,0,18,4,0,0,Math.PI*2),a.moveTo(-2,0),a.lineTo(-10,-13),a.lineTo(-5,-13),a.lineTo(6,0),a.moveTo(-2,0),a.lineTo(-10,13),a.lineTo(-5,13),a.lineTo(6,0),a.moveTo(-14,0),a.lineTo(-19,-8),a.lineTo(-16,-8),a.lineTo(-10,0),a.fill();a.restore()}function f(y){if(h=!0,y){let m=Math.round(e*c);i.audio.sfx("buy"),o.innerHTML=`Cashed out <b>$${m}</b> (${c.toFixed(2)}x)`,setTimeout(()=>i.done(m),1300)}else i.audio.sfx("crash"),o.innerHTML=`Crashed at ${n.toFixed(2)}x`,u(!0),setTimeout(()=>i.done(0),1500);s.querySelector("#mg-cash").disabled=!0}let g={update(y){if(!h&&(l+=y,!(l<0))){if(c=Math.exp(.16*l),d.push([l,c]),c>=n){c=n,f(!1);return}o.textContent=c.toFixed(2)+"x",u(!1)}},key(y){h||l<0||y!==" "&&y!=="Enter"||f(!0)}};return g}var dc=20,du="gymlife3d.save",Zf="gymlife3d.scores",fu="gymlife3d.quality",ip="gymlife3d.radio",li={get(i){try{return JSON.parse(localStorage.getItem(i))}catch{return null}},set(i,e){try{localStorage.setItem(i,JSON.stringify(e))}catch{}},del(i){try{localStorage.removeItem(i)}catch{}}};function uy(){try{let i=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(i.getContext("webgl2")||i.getContext("webgl")))}catch{return!1}}if(!uy())throw document.body.innerHTML='<div style="padding:40px;font-family:sans-serif;color:#fff">Your browser does not support WebGL. Try updating it or enabling hardware acceleration.</div>',new Error("WebGL not available");var pu=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,mr=["low","medium","high"],hn=li.get(fu);mr.includes(hn)||(hn=pu?"low":"high");var _n=new Gl({antialias:!0,powerPreference:"high-performance"});_n.outputColorSpace=kt;_n.toneMapping=ss;_n.toneMappingExposure=.6;_n.shadowMap.type=ns;document.getElementById("app").appendChild(_n.domElement);var gn=new jt(50,1,.1,1200),gr=new Zl(_n,new Vt(1,1,{type:Kt,samples:4})),sp=new Jl(new Fn,gn),gc=new Ia(new Fn,gn,1,1);gc.blendIntensity=.85;gc.updateGtaoMaterial({radius:.6,distanceExponent:1.5,thickness:1.5,scale:1.2,samples:12});gr.addPass(sp);gr.addPass(gc);gr.addPass(new Ql);function mu(){let i=window.devicePixelRatio||1;_n.setPixelRatio(hn==="high"?Math.min(i,2):hn==="medium"?Math.min(i,1.5):Math.min(i,1)*.85),_n.shadowMap.enabled=hn!=="low",Object.values(xn).forEach(e=>e&&e.scene.traverse(t=>{t.material&&(t.material.needsUpdate=!0)})),document.getElementById("btn-quality").innerHTML=ur.quality+`<span>${hn[0].toUpperCase()}</span>`,rp()}function rp(){let i=window.innerWidth,e=window.innerHeight;_n.setSize(i,e),gr.setPixelRatio(_n.getPixelRatio()),gr.setSize(i,e),gn.aspect=i/e,gn.updateProjectionMatrix()}window.addEventListener("resize",rp);var at=new ic,Ze=new hc(at),xn={city:kf(),home:null,gym:null,shop:null,bank:null},dy={home:zf,gym:Vf,shop:Gf,bank:Hf},ap=new er(_n),Xi=new nr;Xi.scale.setScalar(900);Xi.material.uniforms.turbidity.value=2.2;Xi.material.uniforms.rayleigh.value=2.2;Xi.material.uniforms.mieCoefficient.value=.004;Xi.material.uniforms.mieDirectionalG.value=.82;Xi.material.uniforms.sunPosition.value.copy(xn.city.sunDir);xn.city.scene.add(Xi);{let i=new Fn,e=new nr;e.scale.setScalar(900),e.material.uniforms.turbidity.value=2.2,e.material.uniforms.rayleigh.value=2.2,e.material.uniforms.sunPosition.value.copy(xn.city.sunDir),i.add(e),xn.city.scene.environment=ap.fromScene(i,.02,1,2e3).texture,xn.city.scene.environmentIntensity=.22}var fy=ap.fromScene(new ql,.04).texture;function op(i){return i.playerPos=Dt,i!==xn.city&&(i.scene.environment=fy,i.scene.environmentIntensity=.35),i}var py=i=>xn[i]||(xn[i]=op(dy[i]())),qe=null,yt=xn.city,je="title",Mi=null,cu=-1,hu=-1,fr=Math.max(0,hs.findIndex(i=>i.id===li.get(ip))),gu=i=>i.name==="gym"?hs[fr].id:i.music,Nt=new vi,Dt=new U,un=0,fs=0;yt.scene.add(Nt.root);op(xn.city);var rt={yaw:.6,pitch:.42,zoom:1,target:new U,fixed:null};mu();var Tn=new Set,pr={x:0,y:0};window.addEventListener("keydown",i=>{if(at.init(),i.repeat&&je!=="play")return;let e=i.key;if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e)&&i.preventDefault(),je==="minigame"&&Mi){Mi.key(e);return}if(Ze.isOpen()){Ze.handleKey(e);return}Tn.add(e.toLowerCase()),je==="play"&&(e==="e"||e==="E"||e==="Enter"||e===" "?up():e==="m"||e==="M"?lp():e==="r"||e==="R"?my():e==="g"||e==="G"?cp():e==="h"||e==="H"?yp():(e==="1"||e==="2"||e==="3")&&vu(Object.keys(ii)[Number(e)-1]))});window.addEventListener("keyup",i=>Tn.delete(i.key.toLowerCase()));window.addEventListener("blur",()=>Tn.clear());window.addEventListener("pointerdown",()=>at.init());var oi=null;_n.domElement.addEventListener("pointerdown",i=>{oi={x:i.clientX,y:i.clientY,id:i.pointerId}});window.addEventListener("pointermove",i=>{!oi||oi.id!==i.pointerId||(rt.yaw-=(i.clientX-oi.x)*.006,rt.pitch=Math.max(.12,Math.min(1.25,rt.pitch+(i.clientY-oi.y)*.004)),oi.x=i.clientX,oi.y=i.clientY)});window.addEventListener("pointerup",i=>{oi&&oi.id===i.pointerId&&(oi=null)});_n.domElement.addEventListener("wheel",i=>{rt.zoom=Math.max(.55,Math.min(1.7,rt.zoom+Math.sign(i.deltaY)*.08))},{passive:!0});if(pu){document.getElementById("touch").classList.remove("hidden");let i=document.getElementById("stick"),e=document.getElementById("knob"),t=null,n=r=>{let a=i.getBoundingClientRect(),o=r.clientX-(a.left+a.width/2),l=r.clientY-(a.top+a.height/2),c=Math.hypot(o,l),h=a.width/2;c>h&&(o=o/c*h,l=l/c*h),e.style.transform=`translate(${o}px, ${l}px)`,pr.x=o/h,pr.y=l/h};i.addEventListener("pointerdown",r=>{t=r.pointerId,i.setPointerCapture(t),n(r),r.stopPropagation()}),i.addEventListener("pointermove",r=>{r.pointerId===t&&n(r)});let s=()=>{t=null,pr.x=pr.y=0,e.style.transform=""};i.addEventListener("pointerup",s),i.addEventListener("pointercancel",s),document.getElementById("btn-action").addEventListener("click",()=>{at.init(),je==="play"&&up()})}document.getElementById("btn-mute").innerHTML=ur.sound;document.getElementById("btn-help").innerHTML=ur.help;document.getElementById("btn-mute").onclick=lp;document.getElementById("btn-quality").onclick=cp;document.getElementById("btn-help").onclick=()=>je==="play"&&yp();Ze.onEat=i=>je==="play"&&vu(i);function lp(){at.init();let i=at.toggleMute();document.getElementById("btn-mute").innerHTML=i?ur.muted:ur.sound}function cp(){hn=mr[(mr.indexOf(hn)+1)%mr.length],li.set(fu,hn),mu(),Ze.toast(`Graphics quality: ${hn}`)}function xu(i,e){yt.scene.remove(Nt.root),yt=i==="city"?xn.city:py(i),yt.scene.add(Nt.root);let t=e||yt.spawn;Dt.set(t.x,0,t.z),un=t.rot,rt.yaw=un+Math.PI,rt.pitch=.5,rt.snap=!0,Nt.setPose("idle"),at.play(gu(yt)),yt.name==="gym"&&setTimeout(()=>Ze.toast(`Gym radio: ${hs[fr].name} (press R to switch)`),600)}function my(){if(yt.name!=="gym"){Ze.toast("The gym radio only plays inside the gym.");return}fr=(fr+1)%hs.length,li.set(ip,hs[fr].id),at.sfx("radio"),at.play(gu(yt)),Ze.toast(`Now playing: ${hs[fr].name}`,"good")}async function _u(i,e){je="busy",Ze.prompt(null),at.sfx("door"),await Ze.fade("",450),xu(i,e),je="play"}function hp(){let i=null,e=1/0;for(let t of yt.interactions){let n=Math.hypot(Dt.x-t.x,Dt.z-t.z);n<t.radius&&n<e&&(e=n,i=t)}return i}function up(){let i=hp();if(i)switch(Tn.clear(),i.action){case"enter":_u(i.data);break;case"exit":xy();break;case"sleep":fp();break;case"fridge":_y();break;case"tv":yy();break;case"mirror":pp();break;case"buy":My(i.data);break;case"workout":Sy(i.data);break;case"work":_p();break;case"plane":by();break;case"bro":vy();break;default:break}}var gy={home:[-19,-10.6],gym:[19,-10.6],shop:[-19,10.6],bank:[19,10.6]};async function xy(){let i=yt.name,[e,t]=gy[i];await _u("city",{x:e,z:t,rot:t<0?0:Math.PI}),rt.yaw=un,Math.random()<.45&&setTimeout(dp,350)}function dp(){if(je!=="play")return;let i=qe.randomEncounter();je="busy",at.sfx("event"),Ze.dialog(`<h2>${i.title}</h2><p>${i.text}</p>`,[{label:"Yes",cls:"good",cb:()=>Jf(i,i.accept)},{label:"No",cls:"bad",cb:()=>Jf(i,i.deny)}])}function Jf(i,e){qe.apply(e),Ze.dialog(`<h2>${i.title}</h2><p>Here's how it went:</p>${dr(e)}`,[{label:"Ok",cls:"primary",cb:()=>{je="play",xr()}}])}async function fp(){je="busy",at.sfx("sleep"),qe.sleep();let i=qe.totalDays-qe.days+1;qe.days>0&&li.set(du,Ey()),Nt.setPose("sleep");let e=yt.bedPos;Dt.set(e.x,0,e.z-.9),un=0,await Ze.fade(qe.days>0?`Day ${i}`:"",1800),Nt.setPose("idle"),Dt.set(-3,0,-1.2),je="play",xr()||Ze.toast(`Good morning! Energy fully restored. Days left: ${qe.days}`,"good")}function _y(){je="busy";let i=Object.entries(ii).map(([e,t])=>({label:`${t.name} (${qe.inventory[e]})`,cls:qe.inventory[e]?"":"disabled",cb:()=>{je="play",vu(e)}}));i.push({label:"Close",key:"Escape",cb:()=>{je="play"}}),Ze.dialog("<h2>Fridge</h2><p>What do you want to eat? You can also eat anywhere with the 1, 2 and 3 keys.</p>",i)}function vu(i){if(!qe.eat(i)){Ze.toast(`You have no ${ii[i].name.toLowerCase()} left. Buy some at the supermarket.`,"bad"),at.sfx("bad");return}let e=ii[i];at.sfx("eat"),Ze.toast(`You ate: ${e.name}`,"good"),xr()}var Kf=["Never skip leg day, bro. Leg day is sacred.","Protein with every meal, bro. Steak is your friend.","No sleep, no gains. Get your rest, bro.","Heavy weight means bigger gains, but only if you finish your reps.","Feeling down? Watch a bit of TV, then get back under the bar.","Out of cash? Go count banknotes at the bank, bro.","Ice cream once in a while is fine. The guy selling steroids is not."];function vy(){let i=qe.totalDays-qe.days;je="busy",at.shout("bro");let e=hu!==i;e&&(hu=i,qe.apply({happiness:5})),Ze.dialog(`<h2>Gym bro</h2><p>${Kf[Math.floor(Math.random()*Kf.length)]}</p>
    ${e?dr({happiness:5}):""}`,[{label:"We're gonna make it",cls:"primary",cb:()=>{je="play"}}])}function yy(){let i=qe.totalDays-qe.days;if(cu===i){Ze.toast("You already watched TV today. Go train!","bad");return}cu=i,qe.apply({happiness:10}),at.sfx("good"),Ze.toast("A good episode of your favourite show: +10 mood","good")}function pp(){je="busy",un=rt.yaw,Nt.setPose("flex"),at.sfx("levelup");let i=Math.round(qe.mass);Ze.dialog(`<h2>Looking good</h2><p>Total mass: <b>${i}</b> / 300</p>
    <p>Legs ${Math.round(qe.legs)} \xB7 Chest ${Math.round(qe.chest)} \xB7 Back ${Math.round(qe.back)}</p>
    <p>Get every muscle group to 100 to win.</p>`,[{label:"Ok",cls:"primary",cb:()=>{Nt.setPose("idle"),je="play"}}],{clear:!0})}function My(i){let e=ii[i];je="busy";let t=n=>{let s=0;for(let r=0;r<n;r++)qe.buy(i)&&s++;s?(at.sfx("buy"),Ze.toast(`Bought ${s} x ${e.name}`,"good")):(at.sfx("bad"),Ze.toast("Not enough money. Go to the bank.","bad")),je="play"};Ze.dialog(`<h2>${e.name}: $${e.cost}</h2>
    ${dr({stamina:e.stamina,happiness:e.happiness,mass:e.mass})}
    <p>You have $${Math.round(qe.money)} \xB7 In the fridge: ${qe.inventory[i]}</p>`,[{label:"Buy 1",cls:"primary",cb:()=>t(1)},{label:"Buy 3",cb:()=>t(3)},{label:"Cancel",key:"Escape",cb:()=>{je="play"}}])}var mp={squat:{group:"legs",name:"Squat",game:Wf},bench:{group:"chest",name:"Bench press",game:Xf},lat:{group:"back",name:"Lat pulldown",game:qf}};function Sy(i){if(!qe.canWorkout()){at.sfx("bad"),Ze.toast(`Too tired. You need ${ar} energy: eat something or sleep.`,"bad");return}je="busy";let e=mp[i];Ze.dialog(`<h2>${e.name}</h2><p>Pick the load. Heavier is harder, but the gains are bigger.</p>
    <p style="color:var(--muted)">Cost: ${ar} energy</p>`,[{label:"Light<small>x0.7 gains</small>",cb:()=>pc(i,0)},{label:"Medium<small>x1 gains</small>",cls:"primary",cb:()=>pc(i,1)},{label:"Heavy<small>x1.4 gains</small>",cls:"bad",cb:()=>pc(i,2)},{label:"Cancel",key:"Escape",cb:()=>{je="play"}}])}var mc={pos:new U,heading:0};function gp(i,e,t,n){mc.pos.copy(Dt),mc.heading=un,i(),rt.fixed={pos:e,look:t},yt.interactions.forEach(s=>{s.marker.visible=!1}),je="minigame",Ze.prompt(null),n&&at.play(n)}function xp(){Mi=null,rt.fixed=null,yt.interactions.forEach(i=>{i.marker.visible=!0}),Dt.copy(mc.pos),un=mc.heading,Nt.setPose("idle"),at.play(gu(yt))}function pc(i,e){let t=yt,n=mp[i],s=[.7,1,1.4][e],r=()=>{},a=(h,d,u)=>new U(h,d,u),o,l;gp(()=>{if(i==="squat"){let{group:h,barbell:d}=t.squat;Dt.set(h.position.x,0,h.position.z),un=0,Nt.spine.add(d),d.position.set(0,.52,-.14),r=()=>{h.add(d),d.position.set(0,1.5,0)},o=a(h.position.x+3.2,2.2,h.position.z+4.2),l=a(h.position.x,1,h.position.z)}else if(i==="bench"){let{group:h,barbell:d}=t.bench;Dt.set(h.position.x,0,h.position.z+.25),un=0;let u=d.position.clone();t.updaters.push(t.benchUpd=()=>{let f=Nt.poseT;d.position.set(0,.92+f*.55,-.05)}),r=()=>{t.updaters.splice(t.updaters.indexOf(t.benchUpd),1),d.position.copy(u)},o=a(h.position.x+3.4,2.6,h.position.z+2.6),l=a(h.position.x,.8,h.position.z)}else{let{group:h,handle:d,cable:u}=t.lat;Dt.set(h.position.x,0,h.position.z+.35),un=0,t.updaters.push(t.latUpd=()=>{let f=Nt.poseT;d.position.y=2.25-f*.75,u.scale.y=3-d.position.y,u.position.y=(3+d.position.y)/2}),r=()=>{t.updaters.splice(t.updaters.indexOf(t.latUpd),1),d.position.y=2,u.scale.y=1,u.position.y=2.5},o=a(h.position.x-3.2,2.4,h.position.z+4),l=a(h.position.x,1.3,h.position.z)}},o||new U,l||new U,null),at.sfx("airhorn"),at.shout("start"),rt.fixed={pos:o,look:l},Mi=n.game({ui:Ze,audio:at,char:Nt,done:h=>{r(),xp();let d=Math.round((4+h*14)*s),u=Math.round(qe[n.group]);qe.apply({[n.group]:d,stamina:-ar,happiness:h>=.5?4:-4});let f={[n.group]:Math.round(qe[n.group])-u,stamina:-ar,happiness:h>=.5?4:-4};at.sfx(h>=.5?"levelup":"bad"),h>=.8?(at.sfx("airhorn"),at.shout("great")):h<.5&&at.shout("bad"),je="busy";let g=Math.round(h*100);Ze.dialog(`<h2>${n.name}: ${g}%</h2>
        <p>${g>=80?"Monster session.":g>=50?"Solid workout.":"You can do better than that."}</p>${dr(f)}`,[{label:"Continue",cls:"primary",cb:()=>{je="play",xr()}}])}},e)}function _p(){if(qe.stamina<dc){at.sfx("bad"),Ze.toast(`Too tired to work (you need ${dc} energy).`,"bad");return}let i=(e,t,n)=>new U(e,t,n);gp(()=>{Dt.set(3.5,0,-4.1),un=0},i(5.5,2.4,-.5),i(3.5,1,-3.6),null),Mi=Yf({ui:Ze,audio:at,char:Nt,done:e=>{xp(),qe.apply({money:e,stamina:-dc}),at.sfx("coin"),je="busy",Ze.dialog(`<h2>Shift over</h2>${dr({money:e,stamina:-dc})}`,[{label:"Ok",cls:"primary",cb:()=>{je="play",xr()}}])}})}function by(){je="busy";let i=Math.floor(qe.money),e=[10,25,50].filter(n=>n<=i),t=e.map(n=>({label:`$${n}`,cls:"primary",cb:()=>uu(n)}));i>0&&!e.includes(i)&&t.push({label:`All in ($${i})`,cls:"bad",cb:()=>uu(i)}),t.push({label:"Cancel",key:"Escape",cb:()=>{je="play"}}),Ze.dialog(`<h2>High-flying investment</h2>
    <p>Place a bet: the multiplier grows while the plane climbs. Cash out before it crashes or you lose it all.</p>
    ${i<=0?'<p style="color:var(--bad)">You have no money to bet. Try working at the desk.</p>':""}`,t)}function uu(i){qe.apply({money:-i}),je="minigame",Ze.prompt(null),Mi=$f({ui:Ze,audio:at,char:Nt,done:e=>{Mi=null,Ze.close(),qe.apply({money:e}),je="play",Ze.toast(e>i?`Net profit: +$${e-i}`:e>0?`Got back $${e}`:`Lost $${i}`,e>i?"good":"bad"),xr()}},i)}function xr(){if(!qe||je==="end")return!0;if(qe.isWin())return jf(!0),!0;let i=qe.gameOverReason();return i?(jf(!1,i),!0):!1}function jf(i,e){je="end",li.del(du),Ze.prompt(null);let t=qe.totalDays-qe.days+(i?1:0),n="";if(i){let s=li.get(Zf)||[];s.push({days:t,diff:nc[qe.difficulty].label,date:new Date().toLocaleDateString("en-GB")}),s.sort((r,a)=>r.days-a.days),li.set(Zf,s.slice(0,5)),n='<div class="scores"><b>Best results</b><br>'+s.slice(0,5).map((r,a)=>`${a+1}. ${r.days} days (${r.diff}), ${r.date}`).join("<br>")+"</div>"}at.play(i?"win":"gameover"),Nt.setPose(i?"flex":"idle"),un=rt.yaw+Math.PI,setTimeout(()=>{Ze.dialog(i?`<h1 class="title">YOU WIN</h1><p>You became a real bodybuilder in <b>${t}</b> days.</p>${n}`:`<h1 class="title">GAME OVER</h1><p>${e}</p>
         <p>Legs ${Math.round(qe.legs)} \xB7 Chest ${Math.round(qe.chest)} \xB7 Back ${Math.round(qe.back)}</p>`,[{label:"Main menu",cls:"primary",cb:Mp}])},i?600:300)}function Ey(){let{listeners:i,...e}=qe;return e}function Qf(i,e=null){qe=new tc(i),e&&Object.assign(qe,e,{listeners:qe.listeners}),qe.onChange(t=>{Ze.update(t),Nt.setMuscles(t.legs,t.chest,t.back)}),qe.emit(),cu=-1,hu=-1,Ze.showHud(!0),xu("home"),je="play",Ze.toast("Goal: get legs, chest and back to 100","good"),pu||setTimeout(()=>Ze.toast("Press H to see the controls"),1500)}function vp(){return`<div class="controls">
    <kbd>WASD / Arrows</kbd><span>Move (hold Shift to run)</span>
    <kbd>E / Space</kbd><span>Interact</span>
    <kbd>Mouse drag</kbd><span>Rotate the camera, wheel to zoom</span>
    <kbd>1 2 3</kbd><span>Eat from your inventory</span>
    <kbd>M</kbd><span>Music on/off</span>
    <kbd>R</kbd><span>Switch the gym radio station</span>
    <kbd>G</kbd><span>Graphics quality (low / medium / high)</span>
  </div>`}function yp(){je="busy",Ze.dialog(`<h2>Controls</h2>${vp()}
    <p>Home: sleep, eat, TV \xB7 Gym: train \xB7 Supermarket: buy food \xB7 Bank: work or invest</p>
    <p>It's game over if energy or mood drop to 0, or if you run out of days.</p>`,[{label:"Ok",cls:"primary",cb:()=>{je="play"}}])}function Mp(){je="title",Ze.showHud(!1),Ze.prompt(null),yt!==xn.city&&xu("city"),Dt.set(-19,0,-10.4),at.play("title");let i=li.get(du),e=Object.entries(nc).map(([t,n],s)=>({label:`${n.label}<small>${n.days} days</small>`,cls:s===1?"primary":"",cb:()=>{at.init(),Qf(t)}}));i&&e.unshift({label:`Continue<small>day ${i.totalDays-i.days+1}</small>`,cls:"good",cb:()=>{at.init(),Qf(i.difficulty,i)}}),Ze.dialog(`<h1 class="title">GYM LIFE 3D</h1>
    <p>Become the biggest bodybuilder in town. Train, eat well, earn money and keep your spirits up.</p>
    ${vp()}
    <p style="color:var(--muted)">Choose the difficulty:</p>`,e)}var ep=performance.now(),tp=0,Ba=new U,Ty=new U,ou=0,fc=0,np=!1,lu=0;function wy(i,e){let t=0,n=0;je==="play"&&((Tn.has("w")||Tn.has("arrowup"))&&(n-=1),(Tn.has("s")||Tn.has("arrowdown"))&&(n+=1),(Tn.has("a")||Tn.has("arrowleft"))&&(t-=1),(Tn.has("d")||Tn.has("arrowright"))&&(t+=1),t+=pr.x,n+=pr.y);let s=Math.hypot(t,n),r=Tn.has("shift")?1.6:1,a=s>.1?Math.min(1,s)*5*r:0;if(fs+=(a-fs)*Math.min(1,i*10),s>.1){let o=rt.yaw,l=(t*Math.cos(o)+n*Math.sin(o))/s,c=(-t*Math.sin(o)+n*Math.cos(o))/s,d=Math.atan2(l,c)-un;d=Math.atan2(Math.sin(d),Math.cos(d)),un+=d*Math.min(1,i*12),Dt.x+=l*fs*i,Dt.z+=c*fs*i,yt.collide(Dt),lu-=i*fs,lu<=0&&(lu=2.2,at.sfx("step"))}if(Nt.root.position.copy(Dt),Nt.root.rotation.y=un,(Nt.pose==="idle"||Nt.pose==="walk")&&Nt.setPose(fs>.2?"walk":"idle"),Nt.update(i,fs),yt.update(i,e),je==="play"){let o=hp();Ze.prompt(o?o.label:null)}if(je==="title"){let o=e*.04+.8;gn.position.set(Math.cos(o)*19,9,Math.sin(o)*19),gn.lookAt(0,3,0)}else if(rt.fixed){gn.position.lerp(rt.fixed.pos,Math.min(1,i*5));let o=Ty.copy(rt.fixed.look);if(window.innerWidth>900){let l=ps.subVectors(rt.fixed.look,rt.fixed.pos).cross(gn.up).normalize();o.addScaledVector(l,1.3)}Ba.copy(rt.target).lerp(o,Math.min(1,i*5)),rt.target.copy(Ba),gn.lookAt(rt.target)}else{let o=yt.camDist*rt.zoom;rt.target.lerp(Ba.set(Dt.x,1.3,Dt.z),Math.min(1,i*8));let l=new U(rt.target.x+Math.sin(rt.yaw)*Math.cos(rt.pitch)*o,rt.target.y+Math.sin(rt.pitch)*o+(yt.camHeight-5)*.4,rt.target.z+Math.cos(rt.yaw)*Math.cos(rt.pitch)*o);Ay(rt.target,l),rt.snap?(rt.target.set(Dt.x,1.3,Dt.z),gn.position.copy(l),rt.snap=!1):gn.position.lerp(l,Math.min(1,i*6)),gn.lookAt(rt.target)}if(yt.sun){let o=je==="title"?Ba.set(0,0,0):Ba.set(Dt.x,0,Dt.z);yt.sun.position.copy(yt.sunDir).multiplyScalar(50).add(o),yt.sun.target.position.copy(o),Xi.position.copy(gn.position)}Mi&&Mi.update(i)}var ps=new U;function Ay(i,e){for(let n=1;n<=16;n++)if(ps.lerpVectors(i,e,n/16),yt.colliders.some(r=>r.h>3&&ps.y<r.h&&ps.x>r.x1-.6&&ps.x<r.x2+.6&&ps.z>r.z1-.6&&ps.z<r.z2+.6)){e.lerpVectors(i,e,Math.max(.15,(n-1.5)/16)),e.y=Math.max(e.y,i.y+1.2);return}}function Sp(){let i=performance.now(),e=Math.min(.05,(i-ep)/1e3);if(ep=i,tp+=e,wy(e,tp),hn==="high"?(sp.scene=yt.scene,gc.scene=yt.scene,gr.render(e)):_n.render(yt.scene,gn),!np&&je==="play"&&(ou++,fc+=e,fc>4)){let n=ou/fc;ou=0,fc=0,n<28&&hn!=="low"&&!li.get(fu)?(hn=mr[mr.indexOf(hn)-1],mu(),Ze.toast(`Graphics lowered to ${hn} for smoother play (press G to change)`)):np=!0}requestAnimationFrame(Sp)}window.__gym={get state(){return qe},get mode(){return je},get place(){return yt},pos:Dt,cam:rt,player:Nt,audio:at,travel:_u,startWorkout:pc,startWork:_p,startPlane:uu,mirror:pp,encounter:dp,sleep:fp};Mp();Sp();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
