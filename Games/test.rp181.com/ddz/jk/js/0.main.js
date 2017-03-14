(function(){var winH=window.innerHeight;var winW=640;var _={realStyle:function(tag,styleName){var realStyle;if(tag.currentStyle){realStyle=tag.currentStyle[styleName];}else if(window.getComputedStyle){realStyle=window.getComputedStyle(tag,null)[styleName];}return realStyle;},isObject:function(obj){return obj===Object(obj);},isArray:function(obj){return Object.prototype.toString.call(obj)==='[object Array]';},getBox:function(tag){return tag.getBoundingClientRect();},arraySingleAdd:function(arr,val){if(-1!=this.arrayIndex(arr,val))return;arr.push(val);},arrayRemove:function(arr,val){var index=this.arrayIndex(arr,val);if(-1==index)return false;arr.splice(index,1);},arrayIndex:function(arr,val){for(var i=0,len=arr.length;i<len;i++){if(arr[i]==val)return i;}return-1;},isDom:(typeof HTMLElement==='object')?function(obj){return obj instanceof HTMLElement;}:function(obj){return obj&&typeof obj==='object'&&obj.nodeType===1&&typeof obj.nodeName==='string';}}
var RayApp=window.RayApp||new function(){var ray=this;ray.curPlaySqnm='';ray.appInstance='';ray.aliveStage={};ray.stageCollection={};ray.stageEleCollection={};ray.aliveAnimationNum={};ray._body=document.body;function SmartApp(){ray.appInstance=this;}SmartApp.prototype={setConfig:function(config){this.config=config;},start:function(sqnm){ray.curPlaySqnm=sqnm;this.config[sqnm]();}}
ray.SmartApp=SmartApp;function Base(){}Base.prototype={init:function(domName,attrObj){},setAttr:function(attrObj){var val;for(var i in attrObj){val=attrObj[i];switch(i){case'width':if(-1!=val.toString().indexOf('%'))val=winW*val;this.domObj.style.width=val+'px';this.width=val;break;case'cwidth':this.domObj.setAttribute('width',val+'px');this.width=val;break;case'height':if(-1!=val.toString().indexOf('%'))val=winH*val;this.domObj.style.height=val+'px';this.height=val;break;case'cheight':this.domObj.setAttribute('height',val+'px');this.height=val;break;case'index':this.domObj.style.zIndex=val;break;case'opacity':this.domObj.style.opacity=val;break;case'origin':this.domObj.style.webkitTransformOrigin=val;break;case'rotateX':this.xRotateVal=val;break;case'scale':this.scaleVal=val;break;case'position':_position(this,val[0],val[1],val[2]);break;case'background':if('color'==val.type){this.domObj.style.backgroundColor=val.color;break;}else if('gradient'==val.type){this.domObj.style.background=val.color;break;}this.domObj.style.backgroundImage='url('+val.url+')';if('shear'==val.type){this.domObj.style.backgroundPosition=val.pos;this.domObj.style.backgroundRepeat='no-repeat';}break;case'referPosition':this.setReferPosition(val);break;case'cacheName':this.setCacheName(val);break;default:break;}}},setPos:function(x,y){_posCapture(this,[0,1],[x,y],'set');},setBack:function(type,val){switch(type){case'coordinate':this.domObj.style.backgroundPosition=val;break;case'url':this.domObj.style.backgroundImage='url('+val+')';break;default:break;}},position:function(val){_position(this,val[0],val[1],val[2]);},eleChange:function(config){_transform(this,config);},removed:function(){if(_.isDom(this.domObj))this.domObj.parentNode.removeChild(this.domObj);},setEvents:function(eventsQueue){this.eventsQueue=eventsQueue;},eventInit:function(){var _self=this,curEvent,stageSqnm=ray.curPlaySqnm;for(var i in this.eventsQueue){curEvent=this.eventsQueue[i];if(curEvent.type){this.domObj.addEventListener(curEvent.type,(function(eventObj,context){var curEventObj=eventObj,curContext=context;return function(event){curEventObj.action.call(curContext,event);}})(curEvent,this),false);}else{_doAction(curEvent);}}function _doAction(config){var repeatTimes=config.repeatTimes,actionDelay=config.actionDelay,repeatDelay=config.repeatDelay,func=config.action,times=0,circulate,autoVal=config.autoVal||[];circulate=setTimeout(function(){autoVal=func.call(_self,autoVal);times++;if(1!=repeatTimes){repeatTimes--;circulate=setInterval(function(){autoVal=func.call(_self,autoVal);if(times++==repeatTimes){_.arrayRemove(ray.aliveAnimationNum[stageSqnm],circulate);clearInterval(circulate);}else{_.arraySingleAdd(ray.aliveAnimationNum[stageSqnm],circulate);}},repeatDelay)}},actionDelay);}}}
var stage=ray.Stage=function(domName,attrObj){var _self=this,tempName=domName;if(_.isObject(domName)){attrObj=domName;tempName='div';}ray.aliveAnimationNum[ray.curPlaySqnm]=[];ray.stageCollection[ray.curPlaySqnm]=this;_self.init(tempName,attrObj);};extend(stage,Base);stage.prototype.init=function(domName,attrObj){var stageDom=document.createElement(domName),backDom=document.createElement('div');stageDom.className='stage-wrap';backDom.className='stage-back';this.domObj=stageDom;this.setAttr(attrObj);ray._body.appendChild(stageDom);}
stage.prototype.appendChild=function(eleObj){this.domObj.appendChild(eleObj.domObj);eleObj.eventInit();}
stage.prototype.removeChild=function(eleObj){this.domObj.removeChild(eleObj.domObj);}
stage.prototype.addTrans=function(){this.domObj.className='stage-wrap threed-stage-wrap';}
stage.prototype.trigger=function(isDestory){if(isDestory){ray.stageCollection[ray.curPlaySqnm].destory();}else{ray.aliveStage[ray.curPlaySqnm]=this;}ray.appInstance.start(++ray.curPlaySqnm);}
stage.prototype.blur=function(isAll,way,val){if(isAll){for(var i in ray.aliveStage){ray.aliveStage[i].eleChange({'blur':{val:val,way:'Linear 1200ms 0'}})
ray.aliveStage[i].blurVal=val;}}this.eleChange({'blur':{val:val,way:'Linear 1200ms 0'}})
this.blurVal=val;}
stage.prototype.destory=function(){var animations=ray.aliveAnimationNum[this.playSqnm]||[];for(var i=0,len=animations.length;i<len;i++){clearInterval(animations[i]);}this.domObj.parentNode.removeChild(this.domObj);},stage.prototype.destoryOthers=function(){for(var i in ray.aliveStage){ray.aliveStage[i].destory();}ray.aliveStage={};}
var stageEle=ray.StageEle=function(domName,attrObj){var _self=this,tempName=domName;if(_.isObject(domName))tempName='div';_self.init(tempName,attrObj);};extend(stageEle,Base);stageEle.prototype.init=function(domName,attrObj){this.domObj=document.createElement(domName);this.domObj.style.position='absolute';if('canvas'==domName)this.ctx=this.domObj.getContext('2d');this.setAttr(attrObj);}
stageEle.prototype.setReferPosition=function(config){var part=config.part,angle=config.angle,distance=config.distance,posRefer=_.isArray(config.posReference)?_getRefer(config.posReference):config.posReference,level,vertical,z=config.distance[2]||0,scale=this.scaleVal||1;if('outer'==part){switch(angle){case 0:level=(posRefer.transLeft+posRefer.width/2)+parseFloat(distance[0])+this.width/2;vertical=posRefer.transTop+this.height/2
break;case 90:level=posRefer.transLeft+parseFloat(distance[0])+this.width/2;vertical=posRefer.transTop-posRefer.height/2+parseFloat(distance[1]);break;}}this.domObj.style.position='absolute';this.domObj.style.webkitTransform='translate3d(-50%, -50%, 0) translate3d('+level+'px,'+vertical+'px,'+z+'px) rotateX(0) rotateY(0) rotateZ(0) scale('+scale+')';this.domObj.style.webkitTransformStyle='preserve-3d';this.transLeft=parseFloat(level);this.transTop=parseFloat(vertical);}
stageEle.prototype.setCacheName=function(name){var sqnm=ray.curPlaySqnm,collection=ray.stageEleCollection[sqnm]||(ray.stageEleCollection[sqnm]={});collection[name]=this;},stageEle.prototype.toBezier=function(p1,p2,p3,times){var selfTran=_posCapture(this,'','','get');if(''==p3)p3=p1;var path=_getBezierPath(p1,p2,p3,selfTran,times);return path;}}
window.RayApp=RayApp;function _position(context,level,vertical,z){var self=this,topVal=_convert('ver',vertical,context.width,context.height)||0,leftVal=_convert('lev',level,context.width,context.height)||0,z=z||'0px';context.domObj.style.webkitTransform='translate3d(-50%, -50%, 0) translate3d('+leftVal+'px, '+topVal+'px, '+z+') rotateX('+(context.xRotateVal||0)+'deg) rotateY(0) rotateZ(0) scale('+(context.scaleVal||1)+')';context.domObj.style.webkitTransformStyle='preserve-3d';context.transLeft=parseFloat(leftVal);context.transTop=parseFloat(topVal);}function _transform(context,changeObj){var domObj=context.domObj,curVal,expectResult,changeArr=[],regex=/\)+?/;for(var i in changeObj){(function(result,type){var c=result.val,b,curType=type,t=0,defaultVal,ways=[],transform,wayPath,processWay,processTime,d;if(undefined!=result.way){ways=result.way.split(' ');wayPath=ways[0].split('.'),processWay=1==wayPath.length?Tween[wayPath[0]]:Tween[wayPath[0]][wayPath[1]];processTime=-1==ways[1].indexOf('ms')?parseInt(ways[1])*1000:parseInt(ways[1]);d=Math.floor(processTime*3/50);}else{d=1;ways[2]=0;processWay=function(t,b,c,d){return c;}}switch(type){case'left':c=parseFloat(_convert('level',result.val,context.width,context.height).toString().trim()),b=parseFloat(_posCapture(context,'','','get')[0].trim());break;case'top':c=parseFloat(_convert('ver',result.val,context.width,context.height).toString().trim());b=parseFloat(_posCapture(context,'','','get')[1].trim());break;case'height':defaultVal=parseFloat(_posCapture(context,'','','get')[1].trim());b=parseFloat(_.realStyle(domObj,i));c=parseFloat(_convert('ver',result.val,context.width,context.height).toString().trim());break;case'opacity':b=parseFloat(_.realStyle(domObj,i));b=0==b?b:1;break;case'translateZ':b=parseFloat(_posCapture(context,'','','get')[2].trim());break;case'rotateZ':b=parseFloat(_oprRotate(context,'z','','get').trim());c=_coverAngle(parseFloat(b),parseFloat(result.val),result.wise)+b;break;case'blur':b=context.blurVal||0;break;case'scale':b=parseFloat(_oprScale(context,curVal,'get'));break;case'position':if(null!=c[0]){result.val=c[0];arguments.callee(result,'left');}if(null!=c[1]){result.val=c[1];arguments.callee(result,'top');}return;break;}if(result.way){c=c-b;}setTimeout(function(){function _move(){var curVal=processWay(t,b,c,d);switch(curType){case'left':_posCapture(context,0,curVal,'set');break;case'top':_posCapture(context,1,curVal,'set');break;case'translateZ':_posCapture(context,2,curVal,'set');break;case'rotateZ':_oprRotate(context,'z',curVal,'set')
break;case'scale':_oprScale(context,curVal,'set');break;case'height':_posCapture(context,1,defaultVal+(curVal-b)/2,'set');domObj.style.height=parseFloat(curVal).toFixed(2)+'px';break;case'opacity':domObj.style.opacity=parseFloat(curVal).toFixed(2);break;case'blur':domObj.style.webkitFilter='blur('+curVal+'px)';break;}if(++t<=d){requestAnimationFrame(_move);}else{if(result.callBack)result.callBack();}}requestAnimationFrame(_move);},parseInt(ways[2]));})(changeObj[i],i)}function _oprRotate(context,dir,val,type){var whole='rotate'+dir.toUpperCase(),transform=context.domObj.style.webkitTransform.split(whole),posPart=regex.exec(transform[1]),index=posPart.index,temp=[],strEnd,len;if('set'==type){len=transform[1].length;strEnd=index==len-1?transform[1].substring(index):transform[1].substring(index,len);context.domObj.style.webkitTransform=transform[0]+whole+'('+val+'deg'+strEnd;return;}return transform[1].substring(1,index);}}function _convert(type,val,width,height){var computed;switch(val){case'top':computed=winH/2;break;case'bottom':computed=winH-height/2;break;case'right':computed=winW-width/2;break;case'left':computed=width/2;break;case'center':computed='ver'==type?winH/2:winW/2;break;default:if(-1==val.toString().indexOf('px')){val=parseFloat(val)*0.01;computed=('ver'==type?(val*winH+height/2):(val*winW+width/2)).toFixed(2);}else{computed=parseFloat(val);}break;}return computed;}function _coverAngle(startAngle,endAngle,wise){if('cw'==wise)return endAngle-startAngle;return endAngle-startAngle;}function _getRefer(arr){var curCol=ray.stageEleCollection[arr[0]];return curCol[arr[1]];}function _posCapture(context,sqnm,val,type){var transform=context.domObj.style.webkitTransform.split('translate3d'),regex=/\)+?/,posPart=regex.exec(transform[2]),index=posPart.index,temp=[],strEnd,len,temp
nums=transform[2].substring(1,index).split(',');if(!_.isArray(sqnm)){sqnm=[sqnm];val=[val];}if('set'==type){for(var i=0,len=sqnm.length;i<len;i++){nums[sqnm[i]]=val[i]+'px';}len=transform[2].length;strEnd=index==len-1?transform[2].substring(index):transform[2].substring(index,len);context.domObj.style.webkitTransform='translate3d(-50%, -50%, 0) translate3d('+nums[0].trim()+','+nums[1].trim()+','+nums[2].trim()+strEnd;context.transLeft=parseFloat(nums[0]);context.transTop=parseFloat(nums[1]);return;}for(var i=0;i<3;i++){temp.push(nums[i].split('px')[0]);}return temp;}function _oprScale(context,val,type){var transform=context.domObj.style.webkitTransform.split('scale'),regex=/\)+?/,posPart=regex.exec(transform[1]),index=posPart.index,temp=[],strEnd,len,num=transform[1].substring(1,index);if('set'==type){strEnd=index==len-1?transform[1].substring(index):transform[1].substring(index,len);context.domObj.style.webkitTransform=transform[0]+'scale('+val+strEnd;return;}return num;}function _getBezierPath(p1,p2,p3,p4,times){function Point2D(x,y){this.x=x||0.0;this.y=y||0.0;}function PointOnCubicBezier(cp,t){var ax,bx,cx;var ay,by,cy;var tSquared,tCubed;var result=new Point2D;cx=3.0*(cp[1].x-cp[0].x);bx=3.0*(cp[2].x-cp[1].x)-cx;ax=cp[3].x-cp[0].x-cx-bx;cy=3.0*(cp[1].y-cp[0].y);by=3.0*(cp[2].y-cp[1].y)-cy;ay=cp[3].y-cp[0].y-cy-by;tSquared=t*t;tCubed=tSquared*t;result.x=(ax*tCubed)+(bx*tSquared)+(cx*t)+cp[0].x;result.y=(ay*tCubed)+(by*tSquared)+(cy*t)+cp[0].y;return result;}function ComputeBezier(cp,numberOfPoints,curve){var dt;var i;dt=1.0/(numberOfPoints-1);for(i=0;i<numberOfPoints;i++)curve[i]=PointOnCubicBezier(cp,i*dt);}var cp=[new Point2D(p1[0],p1[1]),new Point2D(p2[0],p2[1]),new Point2D(p3[0],p3[1]),new Point2D(p4[0],p4[1])];var numberOfPoints=times;var curve=[];ComputeBezier(cp,numberOfPoints,curve);return curve;}function extend(subClass,superClass){var F=function(){};F.prototype=superClass.prototype;subClass.prototype=new F();subClass.prototype.constructor=subClass;subClass.superClass=superClass.prototype;if(subClass.prototype.construcotr==Object.prototype.constructor){subClass.prototype.construcotr=superClass;}}})();