var __extends=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),OneBox=function(e){function t(){var t=e.call(this)||this;t.pos(0,0),t.size(182,250);var n=new Laya.Image;n.name="mBack",n.anchorX=.5,n.anchorY=.5,n.pos(91,75),n.size(150,150),t.addChild(n),n.skin=MoreGame.cdnface+"main/bk1.png";var i=new Laya.Image;i.name="mBack2",i.anchorX=.5,i.anchorY=.5,i.pos(91,75),i.size(150,150),t.addChild(i);var a=new Laya.Label;a.name="GameName",a.color="#000000",a.fontSize=25,a.centerX=0,a.y=165,t.addChild(a);var o=new Laya.Label;return o.name="PlayNum",o.color="#000000",o.fontSize=18,o.centerX=0,o.y=206,t.addChild(o),t}return __extends(t,e),t}(Laya.Box),MoreGameList=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.prototype.initCode=function(){this.mNoIcon=new Laya.Label,this.mNoIcon.pos(10,18),this.mNoIcon.size(5,25),this.mNoIcon.bgColor="#FFA650",this.addChild(this.mNoIcon),this.mIcon=new Laya.Image,this.mIcon.pos(25,12),this.mIcon.size(40,40),this.addChild(this.mIcon),this.mName=new Laya.Label,this.mName.pos(30,18),this.mName.size(180,25),this.mName.color="#000000",this.mName.bold=!0,this.mName.fontSize=25,this.addChild(this.mName),this.mList=new Laya.List,this.mList.pos(10,70),this.mList.size(730,230),this.mList.spaceX=0,this.mList.itemRender=OneBox,this.addChild(this.mList)},t}(Laya.Image),MoreGame=function(e){function t(){var t=e.call(this)||this;return t.mIconJumpData=null,t.mNextShowGroup=0,t.mStartGroupY=0,t.mShowGameAppid="",t.mGoGame=null,t.mWxMenuButtonRect=null,t.width=Laya.stage.width,t.height=Laya.stage.height,t.x=Laya.stage.width,t}return __extends(t,e),t.prototype.createChildren=function(){e.prototype.createChildren.call(this),this.createView(t.uiView)},t.prototype.getMenuButtonTop_CenterPoint=function(){var e=new Laya.Point(0,0);if(Laya.Browser.onMiniGame){if(t.mWxVer>="2.1.0"&&null==this.mWxMenuButtonRect){var n=wx.getMenuButtonBoundingClientRect();null!=n&&0/0!=n.height&&void 0!=n.height&&null!=n.height&&(this.mWxMenuButtonRect=n)}if(null!=this.mWxMenuButtonRect){var i=this.mWxMenuButtonRect.height,a=this.mWxMenuButtonRect.top;return e.x=a*Laya.stage.height/t.mPhone.screenHeight,e.y=i*Laya.stage.height/t.mPhone.screenHeight,e}}return e},t.getJSON=function(e){if(""==e||null==e)return{code:-999};var t=e.indexOf("{",0);return e=e.substr(t,e.length-t),JSON.parse(e)},t.onBtnMouseDown=function(e){e.scale(1.05,1.05)},t.onBtnMouseOut=function(e){e.scale(1,1)},t.registImgBtnClick=function(e,t,n,i){void 0===n&&(n=null),void 0===i&&(i=!0),null==n&&(n=this),i&&(e.on(Laya.Event.MOUSE_DOWN,this,this.onBtnMouseDown,[e]),e.on(Laya.Event.MOUSE_UP,this,this.onBtnMouseOut,[e]),e.on(Laya.Event.MOUSE_OUT,this,this.onBtnMouseOut,[e])),e.on(Laya.Event.CLICK,n,function(e){null!=t&&(null==t.args?t.args=[e]:t.args.push(e),t.run())})},t.InitServerListEx=function(e,n){if(t.mType=2,t.mGameName=n,null==t.mSelf){Laya.Browser.onMiniGame&&(t.mPhone=wx.getSystemInfoSync());var i=t.mPhone.model;(i.indexOf("iPhone X")>=0||Number(t.mPhone.screenHeight)>=812)&&(t.iphoneX=!0),t.mWxVer=t.mPhone.SDKVersion,t.mSelf=new t,t.mSelf.x=2==t.mType?Laya.stage.width+10:-Laya.stage.width-10,t.mSelf.zOrder=9,t.mSelf.visible=!1,t.mSelf.onInit_GoGame(),Laya.stage.addChild(t.mSelf),t.mMoreList=e,t.InitData(),t.mSelf.onInit(),console.log("InitServerListEx...............")}},t.InitData=function(){t.mGroupList=[];for(var e=null,n=0;n<t.mMoreList.length;++n){if(void 0==t.mMoreList[n].groupid)return;e!=t.mMoreList[n].groupid&&(t.mGroupList.push([]),e=t.mMoreList[n].groupid),t.mGroupList[t.mGroupList.length-1].push(t.mMoreList[n])}console.log("InitGroup : ",t.mGroupList)},t.ShowList=function(e,n,i,a,o,m){if(void 0===m&&(m=9),t.mCloseHandler=o,i.length>0&&(t.mJumpWrite=i),a.length>0){for(var r=!1,s=0;s<e.length;++s){var l=e[s],h=l.appid.toUpperCase(),c=a.trim().toUpperCase();if(h==c){if(3==l.jump_type)return r=!0,t.jumpToGame_3(l,function(){t.ShowList3(e,n,a,o,m)},function(){null!=t.mCloseHandler&&t.mCloseHandler.run()}),void 0;break}}0==r&&t.ShowList3(e,n,a,o,m)}else t.ShowList3(e,n,a,o,m)},t.ShowList3=function(e,n,i,a,o){if(void 0===o&&(o=9),Laya.Browser.onMiniGame&&wx.showLoading({title:"资源加载中",mask:!0}),null==t.mSelf?e.length>0&&t.InitServerListEx(e,n):Laya.timer.once(300,t.mSelf,t.mSelf.latterLoadicon2,[],!0),null!=t.mSelf){t.iphoneX&&(t.mSelf.mTitle.top=60,t.mSelf.mPanel.top=t.mSelf.mTitle.top+100);var m=t.mSelf.getMenuButtonTop_CenterPoint();m.x>0?(t.mSelf.mTitle.top=m.x+m.y/2-t.mSelf.mTitle.height/2,t.mSelf.mPanel.top=t.mSelf.mTitle.top+100,console.log("use getMenuButtonTop_CanterPoint . ",m)):console.log("no use getMenuButtonTop_CanterPoint . ",m),t.mSelf.mShowGameAppid=i,t.mSelf.zOrder=o,t.mSelf.visible=!0,t.mSelf.ShowAllGames2(),t.checkLoadIconCount()}},t.checkLoadIconCount=function(){t.latterRunShowTween()},t.latterRunShowTween=function(){Laya.Browser.onMiniGame&&wx.hideLoading({}),Laya.timer.callLater(t.mSelf,function(){2==t.mType?(t.mSelf.x=Laya.stage.width+10,Laya.Tween.to(t.mSelf,{x:0},350,null,new Laya.Handler(this,function(){t.mSelf.ShowGameApp()}))):(t.mSelf.x=-Laya.stage.width-10,Laya.Tween.to(t.mSelf,{x:0},350,null,new Laya.Handler(this,function(){t.mSelf.ShowGameApp()})))})},t.GetIndexList=function(e){for(var t=[],n=0;n<e.length;++n)1==Number(e[n].show_index)&&String(e[n].url_btn).toString().length>10&&String(e[n].url_result).toString().length>10&&t.push(e[n]);return t},t.GetIndexRandom=function(e){var n=t.GetIndexList(e);if(n.length>0){var i=n[t.getRandom(0,n.length-1)];if(void 0!=i)return i}return null},t.GetIndexRandomList=function(e,n){var i=[],a=t.GetIndexList(e);if(a.length>0)for(;n>0&&a.length>0;){var o=a.splice(t.getRandom(0,a.length-1),1);i.push(o[0]),n--}return i},t.CloseList=function(){null!=t.mSelf&&(2==t.mType?Laya.Tween.to(t.mSelf,{x:Laya.stage.width+10},420,null,new Laya.Handler(this,function(){t.mSelf.visible=!1,null!=t.mCloseHandler&&(t.mCloseHandler.once=!0,t.mCloseHandler.run(),t.mCloseHandler=null)})):Laya.Tween.to(t.mSelf,{x:-Laya.stage.width-10},420,null,new Laya.Handler(this,function(){t.mSelf.visible=!1,null!=t.mCloseHandler&&(t.mCloseHandler.once=!0,t.mCloseHandler.run(),t.mCloseHandler=null)})))},t.prototype.onInit_GoGame=function(){var e=this;if(null==this.mGoGame){this.mGoGame=new Laya.Image,this.mGoGame.size(this.width,this.height),this.mGoGame.pos(0,0);var n=new Laya.Label;n.left=0,n.right=0,n.top=0,n.bottom=0,n.bgColor="#000000",n.alpha=.5,this.mGoGame.addChild(n),n.on(Laya.Event.CLICK,n,function(){e.mGoGame.visible=!1});var i=new Laya.Sprite;i.name="GameNameBack",i.size(550,680),i.mouseEnabled=!0,i.mouseThrough=!1,i.pos((this.width-i.width)/2,(this.height-i.height)/2),this.drawCircleRect(i.graphics,0,0,i.width,i.height,20,"#ffffff"),this.mGoGame.addChild(i),n.on(Laya.Event.CLICK,n,function(){});var a=new Laya.Image;a.name="StarBack",a.skin=t.cdnface+"main/popup_share_star.png",a.size(490,271),a.centerX=0,a.y=30,i.addChild(a),this.mIconMax=new Laya.Image,this.mIconMax.name="IconBack",this.mIconMax.skin=t.cdnface+"main/bk2.png",this.mIconMax.size(180,180),this.mIconMax.centerX=0,this.mIconMax.centerY=15,a.addChild(this.mIconMax);var o=new Laya.Image;o.pos(0,0),o.size(180,180),o.skin=t.cdnface+"main/180s.png",this.mIconMax.addChild(o),this.mIconName=new Laya.Label,this.mIconName.size(490,40),this.mIconName.centerX=0,this.mIconName.y=a.y+a.height+10,this.mIconName.align="center",this.mIconName.fontSize=36,this.mIconName.color="#332E4D",this.mIconName.bold=!0,i.addChild(this.mIconName),this.mIconTips=new Laya.Label,this.mIconTips.size(470,80),this.mIconTips.centerX=0,this.mIconTips.y=a.y+a.height+70,this.mIconTips.align="center",this.mIconTips.fontSize=26,this.mIconTips.color="#A1A1B3",this.mIconTips.bold=!1,this.mIconTips.wordWrap=!0,this.mIconTips.leading=5,i.addChild(this.mIconTips),this.mIconGoGame=new Laya.Image,this.mIconGoGame.skin=t.cdnface+"main/popup_btn_begin.png",this.mIconGoGame.size(360,80),this.mIconGoGame.centerX=0,this.mIconGoGame.y=this.mIconTips.y+this.mIconTips.height+45,i.addChild(this.mIconGoGame),this.mIconBottom=new Laya.Label,this.mIconBottom.size(470,80),this.mIconBottom.centerX=0,this.mIconBottom.y=this.mIconGoGame.y+this.mIconGoGame.height+20,this.mIconBottom.align="center",this.mIconBottom.fontSize=24,this.mIconBottom.color="#8A91E6",this.mIconBottom.text="和好友一起玩吧",i.addChild(this.mIconBottom);var m=new Laya.Image;m.size(100,100),m.right=0,m.top=0,t.registImgBtnClick(m,new Laya.Handler(this,function(t){t.stopPropagation(),e.mGoGame.visible=!1}));var r=new Laya.Image;r.name="IconBack",r.skin=t.cdnface+"main/close.png",r.size(30,30),r.right=20,r.top=20,i.addChild(r),i.addChild(m),t.registImgBtnClick(this.mIconGoGame,new Laya.Handler(this,function(t){t.stopPropagation(),e.jumpToGameFromData(e.mIconJumpData),e.mGoGame.visible=!1})),this.mGoGame.visible=!1,this.addChild(this.mGoGame)}},t.prototype.onInit=function(){if(0==t.mMoreList.length)return t.mSelf.visible=!1,console.log("No More GameList ... "),void 0;this.mPanel.vScrollBarSkin="",this.mPanel.hScrollBarSkin=void 0,this.mBack.skin=t.cdnface+"main/head_btn_back1.png",this.mGameName.text=t.mGameName,t.registImgBtnClick(this.mBack,new Laya.Handler(this,function(e){e.stopPropagation(),t.CloseList()})),t.registImgBtnClick(this.mBack2,new Laya.Handler(this,function(e){e.stopPropagation(),t.CloseList()}))},t.prototype.AddOneGroupPage=function(){var e=this;if(e.mNextShowGroup<t.mGroupList.length){var n=new MoreGameList;n.initCode(),e.mPanel.addChild(n);var i=t.mGroupList[e.mNextShowGroup];if(n.y=e.mStartGroupY,n.x=0,n.height=e.mPanel.height,e.init_page_game(n,i),e.mStartGroupY+=n.height,console.log("changeHandler : ",e.mPanel.vScrollBar.max,e.mNextShowGroup,t.mGroupList.length),e.mNextShowGroup==t.mGroupList.length-1){var a=new Laya.Label;a.text="别扯了，已经到底了...",a.size(470,300),a.centerX=0,a.y=n.y+n.height+10,a.align="center",a.fontSize=24,a.color="#8A91E6",e.mPanel.addChild(a)}if(++e.mNextShowGroup,n.y+n.height>1500)return!1}return!0},t.prototype.ShowAllGames=function(){var e=this;if(0==e.mNextShowGroup){for(e.mPanel.removeChildren(),e.mStartGroupY=0,console.log("start : ",e.mNextShowGroup,t.mGroupList.length),e.mNextShowGroup=0;e.mNextShowGroup<t.mGroupList.length;)e.AddOneGroupPage();e.mPanel.refresh()}},t.prototype.ShowAllGames2=function(){var e=this;0==e.mNextShowGroup&&(e.mPanel.removeChildren(),e.mStartGroupY=0,Laya.timer.once(200,this,this.ShowNextGroup))},t.prototype.ShowNextGroup=function(){var e=this;e.mNextShowGroup<t.mGroupList.length?(e.AddOneGroupPage(),e.mPanel.refresh(),Laya.timer.once(300,this,this.ShowNextGroup),console.log("show group : ",e.mNextShowGroup,t.mGroupList.length)):console.log("group show over .")},t.prototype.ShowGameApp=function(){this.mIconJumpData=null;for(var e=0;e<t.mMoreList.length;++e){var n=t.mMoreList[e].appid.trim().toUpperCase(),i=t.mSelf.mShowGameAppid.trim().toUpperCase();if(n==i){this.mIconJumpData=t.mMoreList[e];break}}null!=this.mIconJumpData?(this.mIconMax.skin=this.mIconJumpData.url_icon,this.mIconName.text=this.mIconJumpData.name,this.mIconTips.text=this.mIconJumpData.msg,this.mGoGame.visible=!0):null!=this.mGoGame&&(this.mGoGame.visible=!1)},t.prototype.drawCircleRect=function(e,t,n,i,a,o,m,r,s){void 0===r&&(r=0),void 0===s&&(s="");var l=[["moveTo",o,0],["arcTo",i,0,i,o,o],["arcTo",i,a,i-o,a,o],["arcTo",0,a,0,a-o,o],["arcTo",0,0,o,0,o]];r>0?e.drawPath(t,n,l,{fillStyle:m},{strokeStyle:s,lineWidth:r.toString()}):e.drawPath(t,n,l,{fillStyle:m})},t.prototype.init_page_game=function(e,n){e.mName.text=n[0].groupname;var i=n[0].groupicon;if(i.length>10?(e.mNoIcon.visible=!1,e.mIcon.visible=!0,e.mIcon.skin=i,e.mName.x=e.mIcon.x+e.mIcon.width+10):(e.mNoIcon.visible=!0,e.mIcon.visible=!1,e.mName.x=e.mIcon.x),Laya.stage.width>Laya.stage.height){var a=Laya.stage.width;1==t.iphoneX&&(a=Laya.stage.width-60);var o=Math.floor(a/182);e.width=Laya.stage.width,e.mList.width=182*o,e.mList.x=(Laya.stage.width-e.mList.width)/2;var m=e.mList.x-e.mNoIcon.x;e.mNoIcon.x+=m,e.mIcon.x+=m,e.mName.x+=m,e.mList.repeatX=o,e.mList.repeatY=Math.ceil(n.length/o)}else if(Laya.stage.width<=728){e.mList.repeatX=3,e.mList.repeatY=Math.ceil(n.length/3),e.width=Laya.stage.width,e.mList.width=546,e.mList.x=(Laya.stage.width-e.mList.width)/2;var m=e.mList.x-e.mNoIcon.x;e.mNoIcon.x+=m,e.mIcon.x+=m,e.mName.x+=m}else e.mList.repeatX=4,e.mList.repeatY=Math.ceil(n.length/4);e.height=70+250*e.mList.repeatY,e.mList.selectEnable=!0,e.mList.renderHandler=new Laya.Handler(this,this.onListRender),e.mList.mouseHandler=new Laya.Handler(this,this.listmouse),e.mList.array=n},t.getRandom=function(e,t){var n=Math.round(Math.random()*(t-e))+e;return n},t.prototype.onListRender=function(e){var n=e.dataSource,i=e.getChildByName("GameName"),a=e.getChildByName("PlayNum"),o=e.getChildByName("mBack2");i.text=n.name;var m=Number(n.base);if(void 0==n.basenum||0==Number(n.basenum)){var r=m-m/10,s=m+m/10;n.basenum=Math.floor(t.getRandom(r,s)/1e4)}a.text=n.basenum+"万人在玩",t.mListSrcs.push([o,n.url_icon+"?t="+n.updated_time]),1==t.mListSrcs.length&&Laya.timer.once(300,this,this.latterLoadicon2,[],!0),t.registImgBtnClick(o,null,this)},t.prototype.latterLoadicon2=function(){if(Laya.loader.retryNum=10,(0!=t.mListSrcs.length||0!=t.mListSrcs2.length)&&0!=t.mSelf.visible){var e=null,n="";if(t.mListSrcs.length>0){var i=t.mListSrcs.shift();e=i[0],n=i[1],t.mListSrcs2.push([e,n])}else{if(!(t.mReloadCount<=1&&t.mListSrcs2.length>0))return;t.mListSrcs=t.mListSrcs2,t.mListSrcs2=[],t.mReloadCount++;var a=t.mListSrcs.length;console.log("reload count = ",a);var i=t.mListSrcs.shift();e=i[0],n=i[1],t.mListSrcs2.push([e,n])}if(0==e.numChildren){var o=new Laya.Image;o.pos(0,0),o.size(150,150),o.skin=t.cdnface+"main/150s.png",e.addChild(o)}e.loadImage(n,0,0,150,150,new Laya.Handler(this,function(){for(var e=[],i=0;i<t.mListSrcs2.length;++i)t.mListSrcs2[i][1]!=n&&e.push(t.mListSrcs2[i]);t.mListSrcs2=e,t.mLoadCount++,t.mSelf.latterLoadicon2(),Laya.timer.once(2e3,this,this.latterLoadicon2,[],!0)})),Laya.timer.once(2e3,this,this.latterLoadicon2,[],!0)}},t.prototype.latterLoadicon=function(e,n){if(Laya.loader.retryNum=10,e.skin=n,e.size(150,150),0==e.numChildren){var i=new Laya.Image;i.pos(0,0),i.size(150,150),i.skin=t.cdnface+"main/150s.png",e.addChild(i)}},t.prototype.listmouse=function(e){if(e.type==Laya.Event.CLICK){var t=e.currentTarget.dataSource;"mBack2"==e.target.name&&(e.stopPropagation(),this.jumpToGameFromData(t))}},t.prototype.isJumpWriteList=function(e){for(var n=!1,i=0;i<t.mJumpWrite.length;++i){var a=t.mJumpWrite[i].trim().toUpperCase(),o=e.trim().toUpperCase();a==o&&(n=!0)}return n},t.prototype.jumpToGameFromData=function(e){if(null!=e&&Laya.Browser.onMiniGame){var n=e.path,i=e.param,a=e.appid,o=a,m=a.split("?");2==m.length&&(o=m[0]);var r=a.split("&");2==r.length&&(o=r[0]);var s=Number(e.jump_type),l="https://tcdn.wanzhushipin.cn/xcx/set/qrcode/"+o+".jpg?t="+e.updated_time;if(void 0!=e.big_url&&(l=e.big_url),console.log("list click : ",e,l),n.length<5&&(n="pages/index/index"),t.mWxVer>="2.2.0"){var h=function(t){String(t.errMsg).indexOf(":fail cancel")<=0?(wx.previewImage({urls:[l]}),console.log("跳转错误：显示二维码：",a,e.name,t.errMsg)):console.log("用户取消：",a,e.name,t.errMsg)};if(this.isJumpWriteList(a))return wx.navigateToMiniProgram({appId:a,path:n+"?"+i,fail:h}),console.log("在列表中直接跳转：",a,e.name,n),void 0;if(0==s)wx.previewImage({urls:[l],success:function(){console.log("预览图片成功")}}),console.log("二维码显示：",a,e.name,s);else if(1==s)wx.navigateToMiniProgram({appId:a,path:n+"?"+i,fail:h}),console.log("直接跳转：",a,e.name,n+"?"+i);else if(s>=2){var c=String(e.box_appid);if(c.length<12)wx.navigateToMiniProgram({appId:a,path:n+"?"+i,fail:h}),console.log("直接跳转：盒子appid错误",a,e.name,n+"?"+i,c);else{var p=String(e.box_path);p.length<5?p=n.indexOf("?")<0?n+"?"+e.param:n+e.param:p+=p.indexOf("?")<0?"?"+e.param:e.param,p.indexOf("target=")<0&&(p+="&target="+a),wx.navigateToMiniProgram({appId:c,path:p,fail:h}),console.log("盒子跳转：",a,e.name,p,c)}}}else wx.previewImage({urls:[l],success:function(){console.log("预览图片成功")}}),console.log("版本不支持。显示二维码",a,e.name)}},t.jumpToGame_3=function(e,t,n){var i=e.path,a=(e.param,e.appid),o=String(e.box_appid);i.length<5&&(i="pages/index/index");var m=String(e.box_path);m.length<5?m=i.indexOf("?")<0?i+"?"+e.param:i+e.param:m+=m.indexOf("?")<0?"?"+e.param:e.param,m.indexOf("target=")<0&&(m+="&target="+a);var r=function(i){String(i.errMsg).indexOf(":fail cancel")<=0?null!=t&&t():(console.log("用户取消",a,e.name,i.errMsg),null!=n&&n())},s=function(t){console.log("跳转成功",a,e.name,t),null!=n&&n()};wx.navigateToMiniProgram({appId:o,path:m,success:s,fail:r}),console.log("直接盒子跳转：",a,e.name,m,o)},t.mSelf=null,t.mVer="",t.mGameName="",t.mJumpWrite=[],t.mWxVer="",t.mMoreList=[],t.mGroupList=[],t.mServerUrl="",t.mType=0,t.mPhone={},t.iphoneX=!1,t.cdnface="https://tcdn.wanzhushipin.cn/xcx/more/",t.mListSrcs=[],t.mListSrcs2=[],t.mReloadCount=0,t.mLoadCount=0,t.uiView={type:"View",props:{y:0,x:0,width:750,height:1334},child:[{type:"Label",props:{top:0,right:0,left:0,bottom:0,bgColor:"#ffffff"}},{type:"Image",props:{"var":"mTitle",right:0,left:0,height:100},child:[{type:"Image",props:{y:-61,x:0,width:166,"var":"mBack2",height:161}},{type:"Image",props:{x:20,width:44,"var":"mBack",height:44,centerY:0}},{type:"Label",props:{y:30,"var":"mGameName",text:"神手游戏",fontSize:40,color:"#332E4D",centerX:0,bold:!0}}]},{type:"Panel",props:{"var":"mPanel",top:100,right:0,left:0,bottom:0}}]},t}(Laya.View);
/**
* name
*/
var pokerEvent;
(function (pokerEvent) {
    var GameEvent = /** @class */ (function () {
        function GameEvent() {
        }
        /** 一个空的 Event 对象。用于事件派发中转使用。*/
        GameEvent.EMPTY = "EMPTY";
        //开局进入游戏
        GameEvent.OnEnterGameStart = "OnEnterGameStart";
        //点击游戏开始
        GameEvent.OnGameStart = "OnGameStart";
        //点击商店
        GameEvent.OnClickShop = "OnClickShop";
        //点击每日挑战
        GameEvent.onClickChallenge = "onClickChallenge";
        //点击设置
        GameEvent.onClickSetting = "onClickSetting";
        //点击返回主界面
        GameEvent.onClickBackToMain = "onClickBackToMain";
        //从商店返回
        GameEvent.onClickBackToMainFromShop = "onClickBackToMainFromShop";
        //主界面点击显示popupUI
        GameEvent.onClickShowPopup = "onClickShowPopup";
        //更换音乐按钮
        GameEvent.onMusicBtnChange = 'onMusicBtnChange';
        //移动卡牌到左上角动画
        GameEvent.onMoveFourAni = 'onMoveFourAni';
        //新游戏
        GameEvent.onClickNewGame = "onClickNewGame";
        //清除历史痕迹
        GameEvent.onClearHistory = 'onClearHistory';
        //重新开始
        GameEvent.onClickRetry = "onClickRetry";
        //结束游戏
        GameEvent.onClickEndGame = "onClickEndGame";
        //换卡牌尺寸
        GameEvent.onClickChangeCardSize = "onClickChangeCardSize";
        //出现明牌
        GameEvent.onMingPaiTaiJi = "onMingPaiTaiJi";
        //出现过关提示
        GameEvent.onShowTipOfJumpLevel = 'onShowTipOfJumpLevel';
        //左手模式
        GameEvent.onClickSettingLeftHandMode = "onClickLeftHandMode";
        GameEvent.onClickSettingSound = "onClickSound";
        GameEvent.onClickSettingShowTimer = "onClickShowTimer";
        GameEvent.onClickSettingThreecard = "onClickThreecard";
        GameEvent.onClickSettingVigasMode = "onClickVigasMode";
        //提示信息
        GameEvent.ShowMessage = "ShowMessage";
        //撤销
        GameEvent.onClickBackStep = "onClickBackStep";
        //设置模式
        GameEvent.isVJIASI = 'ISVJIASI';
        //清理tips
        GameEvent.ClearTips = "ClearTips";
        //购买
        GameEvent.BuyBgSkin = 'BuyBgSkin';
        GameEvent.BuyCardBackSkin = 'BuyCardBackSkin';
        //点击提示
        GameEvent.onClickTips = "onClickTips";
        //点击明牌
        GameEvent.OnClickShowAllHiddenCard = "ShowAllHiddenCard";
        //自动
        GameEvent.OnClickAutoBackToAceCardDeck = "OnClickAutoBackToAceCardDeck";
        //换底牌
        GameEvent.onChangeLastCard = "onChangeLastCard";
        //游戏胜利的时候
        GameEvent.onGameWin = "onGameWin";
        //游戏中点击商店
        GameEvent.onClickShopInGame = "onClickShopInGame";
        //点击购买
        GameEvent.OnClickBuy = "OnClickBuy";
        //点击试用
        GameEvent.OnClickTry = "OnClickTry";
        //点击试用
        GameEvent.OnClickUse = "OnClickUse";
        //购买成功
        GameEvent.OnBuySuccess = "OnBuySuccess";
        //试用成功
        GameEvent.OnTrySuccess = "OnTrySuccess";
        GameEvent.OnClickGameStartTutorial = "OnClickGameStartTutorial";
        //开始新手指引
        GameEvent.StartTutorial = "StartTutorial";
        //下一步新手指引
        GameEvent.CheckNextTutorial = "CheckNextTutorial";
        //检测是否要提示自动play
        GameEvent.CheckAutoPlay = "CheckAutoPlay";
        //刷新新手指引显示
        GameEvent.FlushTutorialRender = "FlushTutorialRender";
        //结束新手指引
        GameEvent.EndTutorial = "EndTutorial";
        //点击退出新手指引
        GameEvent.OnClickQuitTutorial = "OnClickQuitTutorial";
        //新手指引隐藏
        GameEvent.HideTutorial = "HideTutorial";
        //提示遮罩是否显示
        GameEvent.TipMaskVis = "TipMaskVis";
        //开始新手指引
        GameEvent.OnGameStartTutorial = "OnGameStartTutorial";
        //新手指引最后一步
        GameEvent.ShowLastTutorial = "ShowLastTutorial";
        //背景音乐播放
        GameEvent.PlayMusic = "PlayMusic";
        //音效播放
        GameEvent.PlaySound = "PlaySound";
        //分享微信成功
        GameEvent.onShareWeChatSuccesse = "onShareWeChatSuccesse";
        //关闭自动完成的确认窗口
        GameEvent.onClickCLoseConfirmAutoPlayUI = "onClickCLoseConfirmAutoPlayUI";
        //开始明牌
        GameEvent.ShowHiddenCard = "ShowHiddenCard";
        //加体力
        GameEvent.AddPhysicalPower = 'AddPhysicalPower';
        //更新UI中的金币数字
        GameEvent.UpdateGoldUI = "UpdateGoldUI";
        //所有TableUI加载完毕 top bottom跟 table
        GameEvent.onALLTableUILoadedDone = "onALLTableUILoadedDone";
        //某一个tableUI加载
        GameEvent.onTableUILoadedDone = "onTableUILoadedDone";
        GameEvent.onClickGoldUseShowCard = "onClickGoldUseShowCard";
        //更新首页SK动画等级
        GameEvent.onRefreshSKAniLevel = 'onRefreshSKAniLevel';
        //更新首页SK动画
        GameEvent.onRefreshStartSK = 'onRefreshStartSK';
        return GameEvent;
    }());
    pokerEvent.GameEvent = GameEvent;
})(pokerEvent || (pokerEvent = {}));
//# sourceMappingURL=GameEvent.js.map
/**
* 游戏事件的分发器
*/
var pokerEvent;
(function (pokerEvent) {
    var PokerEventDispatcher = /** @class */ (function () {
        function PokerEventDispatcher() {
            this.eventHandleMap = new laya.utils.Dictionary();
        }
        PokerEventDispatcher.GetInstance = function () {
            if (this._instance == null) {
                this._instance = new pokerEvent.PokerEventDispatcher();
            }
            return this._instance;
        };
        //广播一个事件
        PokerEventDispatcher.prototype.brodcastEvent = function (event, args) {
            //console.debug("brodcastEvent="+event);
            var eventHandleArr = this.eventHandleMap.get(event);
            if (eventHandleArr != null) {
                eventHandleArr.forEach(function (element) {
                    var handle = element;
                    if (args != null) {
                        handle.runWith(args);
                    }
                    else {
                        handle.run();
                    }
                });
            }
        };
        //注册一个事件监听
        PokerEventDispatcher.prototype.addEventHandle = function (event, caller, listener, args) {
            //console.debug("addEventHandle="+event);
            var eventHandleArr = this.eventHandleMap.get(event);
            if (eventHandleArr == null) {
                eventHandleArr = new Array();
                this.eventHandleMap.set(event, eventHandleArr);
            }
            var handleArray = eventHandleArr;
            var handle = new Laya.Handler(caller, listener, args);
            handleArray.push(handle);
        };
        return PokerEventDispatcher;
    }());
    pokerEvent.PokerEventDispatcher = PokerEventDispatcher;
})(pokerEvent || (pokerEvent = {}));
//# sourceMappingURL=PokerEventDispatcher.js.map
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
* name
*/
var GameGlobal;
(function (GameGlobal) {
    var EVENT = /** @class */ (function (_super) {
        __extends(EVENT, _super);
        function EVENT() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EVENT;
    }(pokerEvent.GameEvent));
    GameGlobal.EVENT = EVENT;
    var Dispatcher = /** @class */ (function (_super) {
        __extends(Dispatcher, _super);
        function Dispatcher() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Dispatcher.sendEvent = function (event, args) {
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(event, args);
        };
        Dispatcher.addEvent = function (event, caller, listener, args) {
            GameGlobal.Dispatcher.GetInstance().addEventHandle(event, caller, listener, args); //维加斯模式
        };
        return Dispatcher;
    }(pokerEvent.PokerEventDispatcher));
    GameGlobal.Dispatcher = Dispatcher;
})(GameGlobal || (GameGlobal = {}));
//# sourceMappingURL=GameGlobal.js.map
/**
* 商店界面
*/
var pokerUI;
(function (pokerUI) {
    var shop = /** @class */ (function () {
        function shop() {
            this.shopConfigData = new gameconfig.shopConfigData();
            this.IsInit = false;
            this.IsFromGame = false;
            Laya.loader.load([{ url: "res/atlas/UI.atlas", type: Laya.Loader.ATLAS }], Laya.Handler.create(this, this.onUILoad));
        }
        shop.prototype.OpenShop = function (isFromGame) {
            this.IsFromGame = isFromGame;
            this.shopUI.CloseBTN.visible = isFromGame;
            this.shopUI.BackBTN.visible = !isFromGame;
            this.shopUI.visible = true;
            Laya.stage.addChild(this.shopUI);
        };
        shop.prototype.onUILoad = function () {
            this.shopUI = new ui.poker.ShopUI();
            this.shopUI.visible = false;
            Laya.stage.addChild(this.shopUI);
            this.shopUI.tab.selectHandler = new Laya.Handler(this, this.onSelecte);
            this.shopUI.BackBTN.on(Laya.Event.CLICK, this, this.ClickBack);
            this.shopUI.CloseBTN.on(Laya.Event.CLICK, this, this.CloseUI);
            //this.setup();
            this.shopConfigData.StartLoad(new Laya.Handler(this, this.setup));
        };
        shop.prototype.FlushData = function (userdata) {
            this.userdata = userdata;
            if (this.IsInit) {
                this.setup();
            }
        };
        shop.prototype.setup = function () {
            this.setupPage(1);
            this.setupPage(2);
            this.setupPage(3);
            this.FlushSelectedItem(1);
            this.FlushSelectedItem(2);
            this.FlushSelectedItem(3);
            this.IsInit = true;
        };
        shop.prototype.FlushSelectedItem = function (pageNum) {
            var IDStr = this.userdata.GetAplayItemID(pageNum);
            switch (pageNum) {
                case 1:
                    shop.ItemSelectedInPage1 = this.shopConfigData.GetItem(IDStr, 1);
                    break;
                case 2:
                    shop.ItemSelectedInPage2 = this.shopConfigData.GetItem(IDStr, 2);
                    break;
                case 3:
                    shop.ItemSelectedInPage3 = this.shopConfigData.GetItem(IDStr, 3);
                    break;
            }
        };
        shop.prototype.GetItemConfigData = function (ItemID) {
            return this.shopConfigData.GetItemConfigData(ItemID);
        };
        shop.prototype.setupPage = function (page) {
            var dataArray = this.shopConfigData.getDataArray(page);
            var list = this.getPageList(page);
            var cells = list.cells;
            var ardata = [];
            for (var i = 0; i < dataArray.length; i++) {
                ardata.push({ label: "i=" + i.toString() });
            }
            list.array = ardata;
            //list.vScrollBarSkin="";
            list.scrollBar.hide = true; //隐藏列表的滚动条。
            list.scrollBar.elasticBackTime = 200; //设置橡皮筋回弹时间。单位为毫秒。
            list.scrollBar.elasticDistance = 50; //设置橡皮筋极限距离。
            //list.repeatX=2;
            //list.repeatY= dataArray.length/2 +dataArray.length%2;
            switch (page) {
                case 1:
                    list.renderHandler = new Laya.Handler(this, this.SetCellDataPage1);
                    break;
                case 2:
                    list.renderHandler = new Laya.Handler(this, this.SetCellDataPage2);
                    break;
                case 3:
                    list.renderHandler = new Laya.Handler(this, this.SetCellDataPage3);
                    break;
            }
            // for (var i = 0; i < dataArray.length; i++) {
            // 	var cell = cells[i];
            // 	var data = dataArray[i];
            // 	this.setCellData(cell, data);
            // }
        };
        shop.prototype.SetCellDataPage1 = function (cell, index) {
            //console.log("SetCellDataPage1 ,index="+index.toString());
            var dataArray = this.shopConfigData.getDataArray(1);
            this.setCellData(cell, dataArray[index]);
        };
        shop.prototype.SetCellDataPage2 = function (cell, index) {
            //console.log("SetCellDataPage2 ,index="+index.toString());
            var dataArray = this.shopConfigData.getDataArray(2);
            this.setCellData(cell, dataArray[index]);
        };
        shop.prototype.SetCellDataPage3 = function (cell, index) {
            //console.log("SetCellDataPage3 ,index="+index.toString());
            var dataArray = this.shopConfigData.getDataArray(3);
            this.setCellData(cell, dataArray[index]);
        };
        shop.prototype.FlushPageData = function (page) {
            var dataArray = this.shopConfigData.getDataArray(page);
            var list = this.getPageList(page);
            var cells = list.cells;
            for (var i = 0; i < dataArray.length; i++) {
                var cell = null;
                var data = dataArray[i];
                for (var j = 0; j < cells.length; j++) {
                    var cellTest = cells[j];
                    if (data.ItemName == cellTest.getChildByName("name").text) {
                        cell = cellTest;
                        break;
                    }
                }
                if (cell != null) {
                    this.setCellData(cell, data);
                }
            }
        };
        shop.prototype.getPageList = function (page) {
            var tRet = null;
            switch (page) {
                case 1:
                    tRet = this.shopUI.listBG;
                    break;
                case 2:
                    tRet = this.shopUI.listCard;
                    break;
                case 3:
                    tRet = this.shopUI.listCardBack;
                    break;
            }
            return tRet;
        };
        shop.prototype.LoadAndChangeIcon = function (icon, atlas, skin) {
            if (icon == null) {
                console.debug("Erro");
            }
            Laya.loader.load([{ url: atlas, type: Laya.Loader.ATLAS }], Laya.Handler.create(this, this.ChangeIconSkin, [icon, skin]));
        };
        shop.prototype.ChangeIconSkin = function (icon, skin) {
            icon.skin = skin;
        };
        shop.prototype.setIconData = function (cell, itemData) {
            var box = cell;
            switch (itemData.page) {
                case 1: //背景
                    {
                        var icon = box.getChildByName("icon1");
                        this.LoadAndChangeIcon(icon, itemData.ItemAtlas, itemData.ItemIcon);
                    }
                    break;
                case 2: //扑克
                    {
                        var icon1 = box.getChildByName("icon1");
                        this.LoadAndChangeIcon(icon1, itemData.ItemAtlas, itemData.ItemIcon + pokerRender.GetImgFileNameWithTypeNum(PokerType.club, 1));
                        var icon2 = box.getChildByName("icon2");
                        this.LoadAndChangeIcon(icon2, itemData.ItemAtlas, itemData.ItemIcon + pokerRender.GetImgFileNameWithTypeNum(PokerType.diamond, 13));
                        var icon3 = box.getChildByName("icon3");
                        this.LoadAndChangeIcon(icon3, itemData.ItemAtlas, itemData.ItemIcon + pokerRender.GetImgFileNameWithTypeNum(PokerType.heart, 12));
                    }
                    break;
                case 3: //卡背
                    {
                        var icon1 = box.getChildByName("icon1");
                        this.LoadAndChangeIcon(icon1, itemData.ItemAtlas, itemData.ItemIcon);
                        var icon3 = box.getChildByName("icon3");
                        this.LoadAndChangeIcon(icon3, itemData.ItemAtlas, itemData.ItemIcon);
                    }
                    break;
            }
        };
        shop.prototype.setCellData = function (cell, itemData) {
            var box = cell;
            //var icon = <Laya.Image>box.getChildByName("icon");
            var name = box.getChildByName("name");
            var buy = box.getChildByName("buy");
            var trybtn = box.getChildByName("try");
            var usebtn = box.getChildByName("use");
            var usingText = box.getChildByName("using");
            this.setIconData(cell, itemData);
            name.text = itemData.ItemName;
            buy.label = itemData.ItemPrice + "金币";
            var IDStr = this.userdata.GetAplayItemID(itemData.page);
            //console.debug("IDStr="+IDStr);
            var IsUsing = IDStr == itemData.ItemID;
            usingText.visible = IsUsing;
            if (IsUsing) {
                buy.visible = false;
                trybtn.visible = false;
                usebtn.visible = false;
                switch (itemData.page) {
                    case 1:
                        shop.ItemSelectedInPage1 = itemData;
                        break;
                    case 2:
                        shop.ItemSelectedInPage2 = itemData;
                        break;
                    case 3:
                        shop.ItemSelectedInPage3 = itemData;
                        break;
                }
            }
            else if (this.userdata != null) {
                var IsPurchasedItemID = this.userdata.IsPurchasedItemID(itemData.ItemID);
                buy.visible = !IsPurchasedItemID;
                trybtn.visible = !IsPurchasedItemID;
                usebtn.visible = IsPurchasedItemID;
            }
            buy.clickHandler = new Laya.Handler(this, this.OnClickBuy, [itemData]);
            trybtn.clickHandler = new Laya.Handler(this, this.OnClickTry, [itemData]);
            usebtn.clickHandler = new Laya.Handler(this, this.OnClickUse, [itemData]);
        };
        shop.prototype.OnClickUse = function (itemData) {
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.OnClickUse, [itemData]);
            pokerGame.SoundPlayer.PlaySound(1);
        };
        shop.prototype.OnClickBuy = function (itemData) {
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.OnClickBuy, [itemData]);
            pokerGame.SoundPlayer.PlaySound(1);
        };
        shop.prototype.OnClickTry = function (itemData) {
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.OnClickTry, [itemData]);
            pokerGame.SoundPlayer.PlaySound(1);
        };
        shop.prototype.CloseUI = function () {
            this.shopUI.visible = false;
            pokerGame.SoundPlayer.PlaySound(1);
        };
        shop.prototype.ClickBack = function () {
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClickBackToMainFromShop);
            pokerGame.SoundPlayer.PlaySound(1);
        };
        shop.prototype.ClickClose = function () {
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClickBackToMainFromShop);
            pokerGame.SoundPlayer.PlaySound(1);
        };
        /**根据选择tab的索引切换页面**/
        shop.prototype.onSelecte = function (index) {
            //切换ViewStack子页面
            this.shopUI.viewstack.selectedIndex = index;
        };
        shop.prototype.ShowMessage = function (message) {
            if (!this.shopUI.visible) {
                return;
            }
            if (message != null) {
                this.shopUI.message.text = message;
                this.shopUI.message.alpha = 1;
                Laya.Tween.clearAll(this.shopUI.message);
                Laya.Tween.to(this.shopUI.message, { alpha: 0 }, 2000, Laya.Ease.sineInOut, null, 0);
            }
        };
        shop.prototype.SetGoldText = function (goldNumText) {
            if (this.shopUI != null) {
                this.shopUI.GoldText.text = goldNumText;
            }
        };
        return shop;
    }());
    pokerUI.shop = shop;
})(pokerUI || (pokerUI = {}));
//# sourceMappingURL=shop.js.map
/**
* 牌桌界面
*/
var pokerUI;
(function (pokerUI) {
    var DearCardType;
    (function (DearCardType) {
        DearCardType[DearCardType["normal"] = 0] = "normal";
        DearCardType[DearCardType["tutorial"] = 1] = "tutorial";
        DearCardType[DearCardType["retry"] = 2] = "retry";
    })(DearCardType = pokerUI.DearCardType || (pokerUI.DearCardType = {}));
    var pokerTable = /** @class */ (function () {
        function pokerTable() {
            this.LineDeckList = new Array();
            this.ADeckList = new Array();
            this.IsLeftMode = false;
            this.LineMaxX = 0; //桌面中的牌堆中的最大的那个X, 左右置换的时候计算用
            this.LineMinX = 0; //桌面中的牌堆中的最小的那个X, 左右置换的时候计算用
            this.StartDeckMaxX = 0; //桌面中的牌堆中的最大的那个X, 左右置换的时候计算用
            this.StartDeckMinX = 0; //桌面中的牌堆中的最小的那个X, 左右置换的时候计算用
            this.ThreecardPosPluse = 0;
            this.IsTutorialStart = false; //是否为新手指引
            this.InitTable();
        }
        pokerTable.prototype.InitTable = function () {
            //加载图集资源，加载成功后添加到舞台
            Laya.loader.load([{ url: "res/atlas/UI.atlas", type: Laya.Loader.ATLAS }], Laya.Handler.create(this, this.onPokerTableUILoaded));
            this.messageConfig = new gameconfig.messageConfig();
            this.messageConfig.StartLoad(null);
            GameGlobal.Dispatcher.addEvent(GameGlobal.EVENT.onALLTableUILoadedDone, this, this.onALLTableUILoadedDone);
        };
        pokerTable.prototype.SetLeftMode = function (isLeftMode) {
            if (this.IsLeftMode != isLeftMode) {
                this.IsLeftMode = isLeftMode;
                this.FlushTablePos();
            }
        };
        pokerTable.prototype.FlushTablePos = function () {
            this.SetPos(this.pokerTableUI.Deck1, this.ADeckList[0], false);
            this.SetPos(this.pokerTableUI.Deck2, this.ADeckList[1], false);
            this.SetPos(this.pokerTableUI.Deck3, this.ADeckList[2], false);
            this.SetPos(this.pokerTableUI.Deck4, this.ADeckList[3], false);
            this.SetPos(this.pokerTableUI.ThreeCard, this.threeCardDeckPos, false);
            this.SetPos(this.pokerTableUI.StartCard, this.startCardDeckPos, false);
            this.SetPos(this.pokerTableUI.Line1, this.LineDeckList[0], true);
            this.SetPos(this.pokerTableUI.Line2, this.LineDeckList[1], true);
            this.SetPos(this.pokerTableUI.Line3, this.LineDeckList[2], true);
            this.SetPos(this.pokerTableUI.Line4, this.LineDeckList[3], true);
            this.SetPos(this.pokerTableUI.Line5, this.LineDeckList[4], true);
            this.SetPos(this.pokerTableUI.Line6, this.LineDeckList[5], true);
            this.SetPos(this.pokerTableUI.Line7, this.LineDeckList[6], true);
            if (this.IsLeftMode) {
                this.pokerTableUI.ThreeCard.x = this.pokerTableUI.StartCard.x + this.ThreecardPosPluse;
            }
        };
        pokerTable.prototype.SetPos = function (node, pos, IsLine) {
            var tRet = new Laya.Point(pos.x, pos.y);
            if (this.IsLeftMode) {
                if (IsLine) {
                    tRet.x = this.LineMaxX - tRet.x + this.LineMinX;
                }
                else {
                    tRet.x = this.StartDeckMaxX - tRet.x + this.StartDeckMinX;
                }
            }
            node.pos(tRet.x, tRet.y);
            return tRet;
        };
        //注册位置
        pokerTable.prototype.initDeckPos = function () {
            this.ADeckList.push(new Laya.Point(this.pokerTableUI.Deck1.x, this.pokerTableUI.Deck1.y));
            this.ADeckList.push(new Laya.Point(this.pokerTableUI.Deck2.x, this.pokerTableUI.Deck2.y));
            this.ADeckList.push(new Laya.Point(this.pokerTableUI.Deck3.x, this.pokerTableUI.Deck3.y));
            this.ADeckList.push(new Laya.Point(this.pokerTableUI.Deck4.x, this.pokerTableUI.Deck4.y));
            this.LineDeckList.push(new Laya.Point(this.pokerTableUI.Line1.x, this.pokerTableUI.Line1.y));
            this.LineDeckList.push(new Laya.Point(this.pokerTableUI.Line2.x, this.pokerTableUI.Line2.y));
            this.LineDeckList.push(new Laya.Point(this.pokerTableUI.Line3.x, this.pokerTableUI.Line3.y));
            this.LineDeckList.push(new Laya.Point(this.pokerTableUI.Line4.x, this.pokerTableUI.Line4.y));
            this.LineDeckList.push(new Laya.Point(this.pokerTableUI.Line5.x, this.pokerTableUI.Line5.y));
            this.LineDeckList.push(new Laya.Point(this.pokerTableUI.Line6.x, this.pokerTableUI.Line6.y));
            this.LineDeckList.push(new Laya.Point(this.pokerTableUI.Line7.x, this.pokerTableUI.Line7.y));
            this.LineMaxX = this.pokerTableUI.Line7.x;
            this.LineMinX = this.pokerTableUI.Line1.x;
            this.threeCardDeckPos = new Laya.Point(this.pokerTableUI.ThreeCard.x, this.pokerTableUI.ThreeCard.y);
            this.startCardDeckPos = new Laya.Point(this.pokerTableUI.StartCard.x, this.pokerTableUI.StartCard.y);
            this.StartDeckMaxX = this.pokerTableUI.StartCard.x;
            this.StartDeckMinX = this.pokerTableUI.Deck1.x;
            this.ThreecardPosPluse = this.pokerTableUI.ThreeCard.x - this.pokerTableUI.Deck4.x;
            //this.pokerTableUI.tutorialCardSpr
            this.pokerTableUI.tutorialMask.visible = false;
        };
        pokerTable.prototype.SetTutorialMaskClickToCloseTutorial = function (isON) {
            if (isON) {
                this.pokerTableUI.tutorialMask.on(Laya.Event.CLICK, this, this.CloseTutorial);
            }
            else {
                this.pokerTableUI.tutorialMask.offAll();
            }
        };
        pokerTable.prototype.CloseTutorial = function () {
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.EndTutorial);
            this.pokerTableUI.tutorialMask.offAll();
        };
        pokerTable.prototype.SetTutorialMaskVisible = function (visible) {
            this.pokerTableUI.tutorialMask.visible = visible;
        };
        pokerTable.prototype.SetCardRenderToTutorialSpriteRoot = function (cardRender, RootNum) {
            var parentRoot = cardRender.parent.parent;
            var parentPos = new Laya.Point(parentRoot.x, parentRoot.y);
            var pos = new Laya.Point(cardRender.x, cardRender.y);
            cardRender.removeSelf();
            if (RootNum == 1) {
                this.pokerTableUI.tutorialCardSpr1.addChild(cardRender);
                var parspr1 = this.pokerTableUI.tutorialCardSpr1.parent;
                parspr1.pos(parentPos.x, parentPos.y);
            }
            else if (RootNum == 2) {
                this.pokerTableUI.tutorialCardSpr2.addChild(cardRender);
                var parspr2 = this.pokerTableUI.tutorialCardSpr2.parent;
                parspr2.pos(parentPos.x, parentPos.y);
            }
            cardRender.pos(pos.x, pos.y);
            //this.pokerTableUI.tutorialCardSpr.pos(parentPos,parentPos);
        };
        //桌面所有UI加载完毕时回调（包括桌面上半部分跟下半部分的操作UI）
        pokerTable.prototype.onALLTableUILoadedDone = function () {
            this.pokerGroup.AddToTable(this.pokerTableUI, this.tableTopUI.gameTopUI, this.tableBottomUI.gameBottom);
        };
        pokerTable.prototype.onPokerTableUILoaded = function () {
            if (this.pokerTableUI == null) {
                this.pokerTableUI = new ui.poker.pokerTableUI();
                Laya.stage.addChild(this.pokerTableUI);
                this.pokerTableUI.visible = false;
                this.initDeckPos();
            }
            if (this.pokerGroup == null) {
                this.pokerGroup = new pokerGame.pokerTableData();
            }
            GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.onTableUILoadedDone);
        };
        //点击规则，临时切换到新手指引的时候  保留原有卡牌  切换到新的牌组
        pokerTable.prototype.ChangeToNewPokerGroupAndKeepOld = function () {
            if (this.pokerGroupKeep == null) {
                this.pokerGroupKeep = new pokerGame.pokerTableData();
            }
            this.onChangeToKeep();
        };
        //切换回keep的牌 
        pokerTable.prototype.onChangeToKeep = function () {
            if (this.pokerGroupKeep == null) {
                return;
            }
            this.pokerGroup.timerCountKeep = this.tableTopUI.timerCount;
            this.pokerGroup.RemoveFromTable();
            //交换
            var tempGroup = this.pokerGroup;
            this.pokerGroup = this.pokerGroupKeep;
            this.pokerGroupKeep = tempGroup;
            //加入桌面中	
            this.pokerGroup.AddToTable(this.pokerTableUI, this.tableTopUI.gameTopUI, this.tableBottomUI.gameBottom);
            this.pokerGroup.cardDecksData.FlushAllPokerRender();
            this.RestartTimer(this.pokerGroup.timerCountKeep);
        };
        pokerTable.prototype.FlushAllPoker = function () {
            this.pokerGroup.cardDecksData.FlushAllPokerRender();
        };
        pokerTable.prototype.FlushAllCardRender = function () {
            this.pokerGroup.cardDecksData.FlushAllCardRender();
        };
        pokerTable.prototype.FlushBGImg = function () {
            //console.debug("FlushBGImg");
            if (pokerUI.shop.ItemSelectedInPage1 != null) {
                //this.pokerTableUI.BGImg.skin=pokerUI.shop.ItemSelectedInPage1.ItemIcon;
                //console.debug("ItemSelectedInPage1="+pokerUI.shop.ItemSelectedInPage1.ItemIcon);
                //Laya.loader.load(pokerUI.shop.ItemSelectedInPage1.ItemAtlas,Laya.Handler.create(this,this.onLoadedBGImg));
                //Laya.loader.load([{url:pokerUI.shop.ItemSelectedInPage1.ItemAtlas, type: Laya.Loader.ATLAS}], Laya.Handler.create(this, this.onLoadedBGImg));
                this.onLoadedBGImg();
            }
        };
        pokerTable.prototype.onLoadedBGImg = function () {
            // if(this.pokerTableUI.BGImg.skin!=pokerUI.shop.ItemSelectedInPage1.ItemIcon)
            // {
            // 	//console.debug("FlushBGImg iconskin="+pokerUI.shop.ItemSelectedInPage1.ItemIcon);
            // 	this.pokerTableUI.BGImg.skin=pokerUI.shop.ItemSelectedInPage1.ItemIcon;
            // }
        };
        //发牌
        pokerTable.prototype.DearCard = function (type) {
            this.IsTutorialStart = type == DearCardType.tutorial;
            switch (type) {
                case DearCardType.tutorial:
                    this.pokerGroup.cardControls.DearTutorialCard(); //新手指引发牌
                    break;
                case DearCardType.normal:
                    this.pokerGroup.cardControls.DearCard(false);
                    break;
                case DearCardType.retry:
                    this.pokerGroup.cardControls.DearCard(true);
                    break;
            }
            this.RestartTimer();
            pokerGame.SoundPlayer.PlaySound(2);
        };
        pokerTable.prototype.EndTutorial = function () {
            this.IsTutorialStart = false;
        };
        pokerTable.prototype.RestartTimer = function (timeCount) {
            if (timeCount === void 0) { timeCount = 0; }
            this.tableTopUI.RestartTimer(timeCount);
        };
        pokerTable.prototype.GetMessage = function (messageID) {
            var message = this.messageConfig.GetMessage(messageID);
            return message;
        };
        pokerTable.prototype.ShowMessage = function (message) {
            if (!this.pokerTableUI.visible) {
                return;
            }
            //var message:string= this.messageConfig.GetMessage(messageID);
            if (message != null && GameMain.app.mWX.fhOnoff != 0) {
                this.pokerTableUI.message.text = message;
                this.pokerTableUI.message.alpha = 1;
                Laya.Tween.clearAll(this.pokerTableUI.message);
                Laya.Tween.to(this.pokerTableUI.message, { alpha: 0 }, 2000, Laya.Ease.sineInOut, null, 0);
            }
        };
        return pokerTable;
    }());
    pokerUI.pokerTable = pokerTable;
})(pokerUI || (pokerUI = {}));
//# sourceMappingURL=pokerTable.js.map
/**
* 设置主界面
*/
var pokerUI;
(function (pokerUI) {
    var startGame = /** @class */ (function () {
        function startGame() {
            //加载版本信息文件
            Laya.loader.load([{ url: "res/atlas/UI.atlas", type: Laya.Loader.ATLAS }], Laya.Handler.create(this, this.onUILoad));
        }
        startGame.prototype.onUILoad = function () {
            this.startGameUI = new ui.poker.StartGameUI();
            // if (GameMain.app.mWX.fhOnoff == 0) {
            this.startGameUI.shop.visible = false;
            // }
            Laya.stage.addChild(this.startGameUI);
            this.startGameUI.visible = false;
            Laya.timer.once(200, this, this.onClickStartGame);
            // this.startGameUI.startGame.clickHandler = new Laya.Handler(this, this.onClickStartGame);
            // this.startGameUI.shop.clickHandler = new Laya.Handler(this, this.onClickShop);
        };
        startGame.prototype.onClickStartGame = function () {
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.OnGameStart);
            pokerGame.SoundPlayer.PlaySound(1);
        };
        startGame.prototype.onClickShop = function () {
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.OnClickShop);
            pokerGame.SoundPlayer.PlaySound(1);
        };
        return startGame;
    }());
    pokerUI.startGame = startGame;
})(pokerUI || (pokerUI = {}));
//# sourceMappingURL=gameStart.js.map
/**
* name
*/
var pokerUI;
(function (pokerUI) {
    var gameTop = /** @class */ (function () {
        function gameTop() {
            this.timerCount = 0;
            this.timerCountInt = 0;
            //	Laya.loader.load("res/atlas/UI.atlas",Laya.Handler.create(this,this.onUILoad));
            //Laya.loader.load([{url: "res/atlas/UI.atlas", type: Laya.Loader.ATLAS}], Laya.Handler.create(this, this.onUILoad));
            Laya.loader.load([{ url: "res/atlas/UI.atlas", type: Laya.Loader.ATLAS }], Laya.Handler.create(this, this.onUILoad));
        }
        gameTop.prototype.SetTimerVisible = function (visible) {
            this.gameTopUI.TimeCount.visible = visible;
        };
        //设置金币
        //在任意地方用 	GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.UpdateGoldUI,[123]); 来刷新显示
        gameTop.prototype.SetGoldText = function (textGold) {
            if (this.gameTopUI != null && this.gameTopUI.GoldText != null) {
                this.gameTopUI.GoldText.text = textGold;
            }
        };
        gameTop.prototype.onUILoad = function () {
            this.gameTopUI = new ui.poker.gameTopUI();
            // if (GameMain.app.mWX.fhOnoff == 0) {
            this.gameTopUI.shop.visible = false;
            // }
            Laya.stage.addChild(this.gameTopUI);
            this.gameTopUI.visible = false;
            this.gameTopUI.challenge.visible = false;
            this.gameTopUI.money.visible = false;
            this.gameTopUI.challenge.on(Laya.Event.CLICK, this, this.onClickChallenge);
            this.gameTopUI.setting.on(Laya.Event.CLICK, this, this.onClickSetting);
            this.gameTopUI.shop.on(Laya.Event.CLICK, this, this.onClickShop);
            GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.onTableUILoadedDone);
            GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.UpdateGoldUI);
        };
        gameTop.prototype.SetTimeCount = function (second) {
            var valueToSet = Math.floor(second);
            if (this.timerCountInt == valueToSet) {
            }
            this.timerCountInt = valueToSet;
            var min = Math.floor(this.timerCountInt / 60);
            var sec = this.timerCountInt % 60;
            this.gameTopUI.TimeCount.text = this.GetTimeStr(min) + ":" + this.GetTimeStr(sec);
        };
        gameTop.prototype.GetTimeTextStr = function () {
            return this.gameTopUI.TimeCount.text;
        };
        gameTop.prototype.GetTimeStr = function (timeNum) {
            if (timeNum < 10) {
                return "0" + timeNum.toString();
            }
            else {
                return timeNum.toString();
            }
        };
        gameTop.prototype.onClickChallenge = function () {
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClickChallenge);
            pokerGame.SoundPlayer.PlaySound(1);
        };
        gameTop.prototype.onClickSetting = function () {
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClickSetting);
            pokerGame.SoundPlayer.PlaySound(1);
        };
        gameTop.prototype.onClickShop = function () {
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClickShopInGame);
            pokerGame.SoundPlayer.PlaySound(1);
        };
        gameTop.prototype.StopTimer = function () {
            Laya.timer.clear(this, this.UpdateTimerRender);
        };
        gameTop.prototype.RestartTimer = function (timecount) {
            if (timecount === void 0) { timecount = 0; }
            this.timerCount = timecount;
            Laya.timer.frameLoop(1, this, this.UpdateTimerRender);
        };
        gameTop.prototype.UpdateTimerRender = function () {
            this.timerCount += Laya.timer.delta / 1000;
            this.SetTimeCount(this.timerCount);
        };
        return gameTop;
    }());
    pokerUI.gameTop = gameTop;
})(pokerUI || (pokerUI = {}));
//# sourceMappingURL=gameTop.js.map
/**
* name
*/
var pokerUI;
(function (pokerUI) {
    var gameBottom = /** @class */ (function () {
        function gameBottom() {
            Laya.loader.load([{ url: "res/atlas/UI.atlas", type: Laya.Loader.ATLAS }], Laya.Handler.create(this, this.onUILoad));
        }
        gameBottom.prototype.onUILoad = function () {
            this.gameBottom = new ui.poker.gameBottomUI();
            // if (GameMain.app.mWX.fhOnoff == 0) {
            this.gameBottom.getChildByName("rules")["visible"] = false;
            this.gameBottom.getChildByName("showHiddenCard")["visible"] = false;
            // }
            Laya.stage.addChild(this.gameBottom);
            this.gameBottom.visible = false;
            this.gameBottom.showPopup.on(Laya.Event.CLICK, this, this.onClickShowPopup); //.clickHandler = new Laya.Handler(this,this.onClickShowPopup);
            this.gameBottom.back.on(Laya.Event.CLICK, this, this.onClickBackStep);
            this.gameBottom.showTips.on(Laya.Event.CLICK, this, this.onClickTips);
            this.gameBottom.showHiddenCard.on(Laya.Event.CLICK, this, this.OnClickShowAllHiddenCard);
            this.gameBottom.autoPlay.on(Laya.Event.CLICK, this, this.OnClickAutoBackToAceCardDeck);
            this.gameBottom.set.on(Laya.Event.CLICK, this, this.onClickSetting);
            this.gameBottom.rules.on(Laya.Event.CLICK, this, this.OnClickGameStartTutorial);
            this.SetAutoEnable(false);
            GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.onTableUILoadedDone);
        };
        gameBottom.prototype.onClickSetting = function () {
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClickSetting);
            pokerGame.SoundPlayer.PlaySound(1);
        };
        gameBottom.prototype.IsAutoEnable = function () {
            return !this.gameBottom.autoPlay.disabled;
        };
        gameBottom.prototype.SetAutoEnable = function (isEnable) {
            this.gameBottom.autoPlay.disabled = !isEnable;
            this.gameBottom.autoPlayText.disabled = !isEnable;
        };
        gameBottom.prototype.onClickShowPopup = function () {
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClickShowPopup);
            pokerGame.SoundPlayer.PlaySound(1);
        };
        gameBottom.prototype.onClickTips = function () {
            this.shareToInvite2();
        };
        gameBottom.prototype.onClickBackToMain = function () {
            pokerGame.SoundPlayer.PlaySound(1);
            //GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClickBackToMain);
        };
        gameBottom.prototype.onClickBackStep = function () {
            this.shareToInvite();
        };
        gameBottom.prototype.OnClickShowAllHiddenCard = function () {
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.OnClickShowAllHiddenCard);
            pokerGame.SoundPlayer.PlaySound(1);
        };
        gameBottom.prototype.OnClickAutoBackToAceCardDeck = function () {
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.OnClickAutoBackToAceCardDeck);
            pokerGame.SoundPlayer.PlaySound(1);
        };
        gameBottom.prototype.OnClickGameStartTutorial = function () {
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.OnClickGameStartTutorial);
            pokerGame.SoundPlayer.PlaySound(1);
        };
        /* 分享到群 */
        gameBottom.prototype.shareToInvite = function () {
            GameMain.app.mShares++;
            GameMain.shareIndex = 1;
            GameMain.app.mShareCurrentTime = GameMain.app.getCurrTime();
            var shareTitle = "经典的接龙游戏点击就可以玩啦";
            var shareImg = "login/share.jpg";
            var surl = "2";
            // if (GameMain.app.mWX.shareUrl.length > 1) {
            // 	shareTitle = GameMain.app.mWX.shareUrl[1]["title"];
            // 	shareImg = GameMain.app.mWX.shareUrl[1]["url"];
            // 	surl = GameMain.app.mWX.shareUrl[1]["id"];
            // }
            wx.shareAppMessage({
                title: shareTitle,
                imageUrl: shareImg,
                query: "uid=" + wxCore.uo.getUserID() + "&id=0&type=0&map=0&surl=" + surl
            });
        };
        /* 分享到群 */
        gameBottom.prototype.shareToInvite2 = function () {
            GameMain.app.mShares++;
            GameMain.shareIndex = 2;
            GameMain.app.mShareCurrentTime = GameMain.app.getCurrTime();
            var shareTitle = "经典的接龙游戏点击就可以玩啦";
            var shareImg = "login/share.jpg";
            var surl = "3";
            // if (GameMain.app.mWX.shareUrl.length > 2) {
            // 	shareTitle = GameMain.app.mWX.shareUrl[2]["title"];
            // 	shareImg = GameMain.app.mWX.shareUrl[2]["url"];
            // 	surl = GameMain.app.mWX.shareUrl[2]["id"];
            // }
            wx.shareAppMessage({
                title: shareTitle,
                imageUrl: shareImg,
                query: "uid=" + wxCore.uo.getUserID() + "&id=0&type=0&map=0&surl=" + surl
            });
        };
        return gameBottom;
    }());
    pokerUI.gameBottom = gameBottom;
})(pokerUI || (pokerUI = {}));
//# sourceMappingURL=gameBottom.js.map
/**
* name
*/
var pokerUI;
(function (pokerUI) {
    var gamePopup = /** @class */ (function () {
        function gamePopup() {
            //	Laya.loader.load("res/atlas/UI.atlas",Laya.Handler.create(this,this.onUILoad));
            //Laya.loader.load([{url: "res/atlas/UI.atlas", type: Laya.Loader.ATLAS}], Laya.Handler.create(this, this.onUILoad));
            //加载版本信息文件
            Laya.loader.load([{ url: "res/atlas/UI.atlas", type: Laya.Loader.ATLAS }], Laya.Handler.create(this, this.onUILoad));
        }
        gamePopup.prototype.onUILoad = function () {
            this.gamePopup = new ui.poker.gamePopupUI();
            Laya.stage.addChild(this.gamePopup);
            this.gamePopup.visible = false;
            this.gamePopup.endGame.visible = false;
            this.gamePopup.CloseBTN.on(Laya.Event.CLICK, this, this.ClickClosePopup);
            this.gamePopup.NEWGame.on(Laya.Event.CLICK, this, this.onClickNewGame);
            this.gamePopup.EndGame.on(Laya.Event.CLICK, this, this.onClickEndGame);
            this.gamePopup.RETRY.on(Laya.Event.CLICK, this, this.onClickRetry);
        };
        gamePopup.prototype.ClickClosePopup = function () {
            this.gamePopup.visible = false;
            pokerGame.SoundPlayer.PlaySound(1);
        };
        gamePopup.prototype.onClickNewGame = function () {
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClickNewGame);
            pokerGame.SoundPlayer.PlaySound(1);
        };
        gamePopup.prototype.onClickRetry = function () {
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClickRetry);
            pokerGame.SoundPlayer.PlaySound(1);
        };
        gamePopup.prototype.onClickEndGame = function () {
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClickEndGame);
            pokerGame.SoundPlayer.PlaySound(1);
        };
        return gamePopup;
    }());
    pokerUI.gamePopup = gamePopup;
})(pokerUI || (pokerUI = {}));
//# sourceMappingURL=gamePopup.js.map
/**
* name
*/
var pokerUI;
(function (pokerUI) {
    var setting = /** @class */ (function () {
        function setting() {
            //	Laya.loader.load("res/atlas/UI.atlas",Laya.Handler.create(this,this.onUILoad));
            Laya.loader.load([{ url: "res/atlas/UI.atlas", type: Laya.Loader.ATLAS }], Laya.Handler.create(this, this.onUILoad));
        }
        setting.prototype.onUILoad = function () {
            this.settingPopup = new ui.poker.settingPopupUI();
            Laya.stage.addChild(this.settingPopup);
            this.settingPopup.visible = false;
            this.settingPopup.CloseBTN.on(Laya.Event.CLICK, this, this.ClickClosePopup);
            this.settingPopup.CloseBTN2.on(Laya.Event.CLICK, this, this.ClickClosePopup);
            this.settingPopup.soundBTNImg.on(Laya.Event.CLICK, this, this.onClickSound);
            this.settingPopup.timerBTN.on(Laya.Event.CLICK, this, this.onClickShowTimer);
            this.settingPopup.lefthandBTN.on(Laya.Event.CLICK, this, this.onClickLeftHand);
            this.settingPopup.ThreeCardBTN.on(Laya.Event.CLICK, this, this.onClickThreecard);
            this.settingPopup.VigasBTN.on(Laya.Event.CLICK, this, this.onClickVigasMode);
            if (this.userData != null) {
                this.FlushSetting(this.userData);
            }
        };
        setting.prototype.ClickClosePopup = function () {
            this.settingPopup.visible = false;
            pokerGame.SoundPlayer.PlaySound(1);
        };
        setting.prototype.IsSelected = function (switchImg) {
            var state1 = switchImg.getChildByName("state1");
            if (state1.alpha > 0) {
                return true;
            }
            return false;
        };
        setting.prototype.IsSwtichAniPlaying = function (switchImg) {
            var state2 = switchImg.getChildByName("state2");
            if (state2.alpha > 0) {
                return true;
            }
            return false;
        };
        setting.prototype.Swtich = function (switchImg) {
            var state1 = switchImg.getChildByName("state1");
            this.SetSwitchState(switchImg, !this.IsSelected(switchImg));
            //state1
            //state2
            //state3
            return true;
        };
        setting.prototype.SetSwitchState = function (switchImg, isOn) {
            var state1 = switchImg.getChildByName("state1");
            var state2 = switchImg.getChildByName("state2");
            var state3 = switchImg.getChildByName("state3");
            if (isOn) {
                var aniDruation = 0.2;
                Laya.Tween.clearAll(state1);
                Laya.Tween.clearAll(state2);
                Laya.Tween.clearAll(state3);
                Laya.Tween.to(state3, { alpha: 0 }, 0, Laya.Ease.sineIn, null, 0);
                Laya.Tween.to(state2, { alpha: 1 }, 0, Laya.Ease.sineIn, null, 0);
                Laya.Tween.to(state2, { alpha: 0 }, 0, Laya.Ease.sineIn, null, aniDruation * 1);
                Laya.Tween.to(state1, { alpha: 1 }, 0, Laya.Ease.sineIn, null, aniDruation * 1);
                //Laya.
            }
            else {
                var aniDruation = 0.2;
                Laya.Tween.clearAll(state1);
                Laya.Tween.clearAll(state2);
                Laya.Tween.clearAll(state3);
                Laya.Tween.to(state1, { alpha: 0 }, 0, Laya.Ease.sineIn, null, 0);
                Laya.Tween.to(state2, { alpha: 1 }, 0, Laya.Ease.sineIn, null, 0);
                Laya.Tween.to(state2, { alpha: 0 }, 0, Laya.Ease.sineIn, null, aniDruation * 1);
                Laya.Tween.to(state3, { alpha: 1 }, 0, Laya.Ease.sineIn, null, aniDruation * 1);
            }
        };
        setting.prototype.OnClickSwitch = function (switchImg, event) {
            if (this.IsSwtichAniPlaying(switchImg)) {
                return;
            }
            var selected = this.IsSelected(switchImg);
            this.Swtich(switchImg);
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(event, [!selected]);
            pokerGame.SoundPlayer.PlaySound(1);
        };
        setting.prototype.onClickSound = function () {
            this.OnClickSwitch(this.settingPopup.soundSwitch, GameGlobal.EVENT.onClickSettingSound);
        };
        setting.prototype.onClickShowTimer = function () {
            this.OnClickSwitch(this.settingPopup.timerSwitch, GameGlobal.EVENT.onClickSettingShowTimer);
        };
        setting.prototype.onClickThreecard = function () {
            this.OnClickSwitch(this.settingPopup.threecardSwitch, GameGlobal.EVENT.onClickSettingThreecard);
        };
        setting.prototype.onClickVigasMode = function () {
            this.OnClickSwitch(this.settingPopup.vigasSwitch, GameGlobal.EVENT.onClickSettingVigasMode);
        };
        setting.prototype.onClickLeftHand = function () {
            this.OnClickSwitch(this.settingPopup.lefthandSwitch, GameGlobal.EVENT.onClickSettingLeftHandMode);
        };
        setting.prototype.FlushSetting = function (userData) {
            this.userData = userData;
            if (this.settingPopup != null) {
                this.SetSwitchState(this.settingPopup.soundSwitch, this.userData.isSoundOn);
                this.SetSwitchState(this.settingPopup.timerSwitch, this.userData.isTimerOn);
                this.SetSwitchState(this.settingPopup.lefthandSwitch, this.userData.isLeftHand);
                this.SetSwitchState(this.settingPopup.threecardSwitch, this.userData.isThreeCardOnce);
                this.SetSwitchState(this.settingPopup.vigasSwitch, this.userData.isVigasMode);
                // this.settingPopup.soundSetting.selected=this.userData.isSoundOn;
                // this.settingPopup.showtimer.selected=this.userData.isTimerOn;
                // this.settingPopup.lefthand.selected=this.userData.isLeftHand;
                // this.settingPopup.threecard.selected=this.userData.isThreeCardOnce;
                // this.settingPopup.vigasMode.selected=this.userData.isVigasMode;
                this.userData = null;
            }
        };
        return setting;
    }());
    pokerUI.setting = setting;
})(pokerUI || (pokerUI = {}));
//# sourceMappingURL=setting.js.map
/**
* 游戏的事件处理
*/
var pokerGame;
(function (pokerGame) {
    var PokerEventHandle = (function () {
        function PokerEventHandle() {
        }
        PokerEventHandle.prototype.SetGameManager = function (gameManager) {
            this.gameManager = gameManager;
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.OnGameStart, this, this.OnGameStart);
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.OnClickShop, this, this.OnClickShop);
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.onClickChallenge, this, this.onClickChallenge);
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.onClickSetting, this, this.onClickSetting);
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.onClickBackToMainFromShop, this, this.onClickBackToMainFromShop);
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.onClickShowPopup, this, this.onClickShowPopup);
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.onClickNewGame, this, this.onClickNewGame);
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.onClickRetry, this, this.onClickRetry);
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.onClickEndGame, this, this.onClickEndGame);
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.onClickBackStep, this, this.onClickBackStep); //回撤
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.onClickLeftHandMode, this, this.onClickLeftHandMode); //点击左手模式
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.onClickTips, this, this.onClickTips); //点击提示
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.OnClickShowAllHiddenCard, this, this.OnClickShowAllHiddenCard); //点击明牌
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.OnClickAutoBackToAceCardDeck, this, this.OnClickAutoBackToAceCardDeck); //点击自动
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.onGameWin, this, this.onGameWin); //游戏胜利的时候
            //OnClickBuy
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.OnClickBuy, this, this.OnClickBuy); //购买
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.OnClickTry, this, this.OnClickTry); //试用
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.StartTutorial, this, this.StartTutorial); //开始新手指引
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.CheckNextTutorial, this, this.CheckNextTutorial); //新手指引下一步
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.EndTutorial, this, this.EndTutorial); //新手指引结束
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.FlushTutorialRender, this, this.FlushTutorialRender); //新手指引刷新
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.ShowLastTutorial, this, this.onShowLastTutorial); //新手指引最后一步
            //开始游戏 并开启新手指引
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.OnGameStartTutorial, this, this.OnGameStartTutorial); //开始游戏
        };
        //游戏开始新手指引
        PokerEventHandle.prototype.OnGameStartTutorial = function () {
            this.gameManager.UIManager.startGameUI.startGameUI.visible = false;
            this.gameManager.UIManager.pokerTable.DearCard(true); //发牌
            this.gameManager.UIManager.pokerTop.RestartTimer(); //重启计时器
            this.SetGameMainUIVisible(true);
            ;
            this.StartTutorial();
        };
        //游戏开始事件
        PokerEventHandle.prototype.OnGameStart = function () {
            this.gameManager.UIManager.startGameUI.startGameUI.visible = false;
            this.gameManager.UIManager.pokerTable.DearCard(); //发牌
            this.gameManager.UIManager.pokerTop.RestartTimer(); //重启计时器
            this.SetGameMainUIVisible(true);
            ;
        };
        //点击商店
        PokerEventHandle.prototype.OnClickShop = function () {
            this.gameManager.UIManager.startGameUI.startGameUI.visible = false;
            this.gameManager.UIManager.shopUI.shopUI.visible = true;
        };
        //点击挑战
        PokerEventHandle.prototype.onClickChallenge = function () {
        };
        //点击设置
        PokerEventHandle.prototype.onClickSetting = function () {
            this.gameManager.UIManager.settingUI.settingPopup.visible = true;
        };
        PokerEventHandle.prototype.onClickBackToMainFromShop = function () {
            this.gameManager.UIManager.shopUI.shopUI.visible = false;
            this.gameManager.UIManager.startGameUI.startGameUI.visible = true;
        };
        PokerEventHandle.prototype.SetGameMainUIVisible = function (isVisible) {
            this.gameManager.UIManager.pokerTable.pokerTableUI.visible = isVisible;
            this.gameManager.UIManager.pokerTop.gameTopUI.visible = isVisible;
            this.gameManager.UIManager.pokerBottom.gameBottom.visible = isVisible;
            if (!isVisible) {
                this.gameManager.UIManager.pokerPopup.gamePopup.visible = isVisible;
            }
        };
        //点击返回主界面
        PokerEventHandle.prototype.onClickBackToMain = function () {
            this.SetGameMainUIVisible(false);
            this.gameManager.UIManager.startGameUI.startGameUI.visible = true;
        };
        //主界面点击showpopup
        PokerEventHandle.prototype.onClickShowPopup = function () {
            this.gameManager.UIManager.pokerPopup.gamePopup.visible = true;
        };
        PokerEventHandle.prototype.onClickNewGame = function () {
            this.OnGameStart();
        };
        PokerEventHandle.prototype.onClickRetry = function () {
            this.OnGameStart();
        };
        PokerEventHandle.prototype.onClickEndGame = function () {
            this.onClickBackToMain();
        };
        //回撤 
        PokerEventHandle.prototype.onClickBackStep = function () {
            this.gameManager.UIManager.pokerTable.pokerGroup.cardControls.BackStep();
        };
        //点击左手模式
        PokerEventHandle.prototype.onClickLeftHandMode = function (isSelected) {
            this.gameManager.UIManager.pokerTable.SetLeftMode(isSelected);
        };
        //点击提示
        PokerEventHandle.prototype.onClickTips = function () {
            //onClickTips
            this.gameManager.UIManager.pokerTable.pokerGroup.cardTips.onClickTips();
        };
        //点击明牌
        PokerEventHandle.prototype.OnClickShowAllHiddenCard = function () {
            this.gameManager.UIManager.pokerTable.pokerGroup.cardControls.ShowAllHiddenCard();
        };
        //自动
        PokerEventHandle.prototype.OnClickAutoBackToAceCardDeck = function () {
            this.gameManager.UIManager.pokerTable.pokerGroup.cardControls.AutoBackToAceCardDeck();
        };
        //显示胜利
        PokerEventHandle.prototype.onGameWin = function () {
            this.gameManager.UIManager.pokerTop.StopTimer();
            var text = this.gameManager.UIManager.pokerTop.GetTimeTextStr();
            this.gameManager.UIManager.winUI.ShowWin(text);
        };
        //购买
        PokerEventHandle.prototype.OnClickBuy = function (itemData) {
            console.debug("OnClickBuy=" + itemData.ItemName);
        };
        //试用
        PokerEventHandle.prototype.OnClickTry = function (itemData) {
            console.debug("OnClickTry=" + itemData.ItemName);
        };
        PokerEventHandle.prototype.StartTutorial = function () {
            this.gameManager.UIManager.tutorialUI.StartTutorial();
            this.gameManager.UIManager.pokerTable.SetTutorialMaskVisible(true);
            this.gameManager.UIManager.pokerTable.SetTutorialMaskClickToCloseTutorial(false);
        };
        PokerEventHandle.prototype.SetTutorialItem = function (item) {
            if (item.Type != null && item.Type != pokerGame.pokerDeckType.unKnowen) {
                this.SetTutorialItemRenderRoot(item.Type, item.NUM, item.INDEX);
            }
            if (item.Type2 != null && item.Type2 != pokerGame.pokerDeckType.unKnowen) {
                this.SetTutorialItemRenderRoot(item.Type2, item.NUM2, item.INDEX2);
            }
        };
        PokerEventHandle.prototype.SetTutorialItemRenderRoot = function (Type, NUM, INDEX) {
            var deck = this.gameManager.UIManager.pokerTable.pokerGroup.cardDecksData.GetDeck(Type, NUM);
            if (deck.data.pokerList.length == 0) {
                // var sprRoot= this.gameManager.UIManager.pokerTable.pokerGroup.cardDecksData.GetDeckSpriteRoot(Type,NUM);
                // if(sprRoot==null)
                // {
                // 	return;
                // }
                // var sprchild=sprRoot.getChildAt(0);
                // if(sprchild==null)
                // {
                // 	return;
                // }
                // var spr=<Laya.Sprite>sprchild.getChildAt(0);
                // if(spr!=null)
                // {
                // 	this.gameManager.UIManager.pokerTable.SetCardRenderToTutorialSpriteRoot(spr);
                // }
                return;
            }
            var pokerList = deck.data.pokerList;
            var lastIndex = pokerList.length - 1;
            if (lastIndex < 0) {
                return;
            }
            for (var i = (lastIndex - INDEX); i <= lastIndex; i++) {
                var pokerIMg = pokerList[i].render.img;
                this.gameManager.UIManager.pokerTable.SetCardRenderToTutorialSpriteRoot(pokerIMg);
            }
        };
        PokerEventHandle.prototype.FlushTutorialRender = function () {
            //this.gameManager.UIManager.tutorialUI.ShowNextStepTutorial();
            var item = this.gameManager.UIManager.tutorialUI.GetTutorialItem();
            this.SetTutorialItem(item);
        };
        PokerEventHandle.prototype.CheckNextTutorial = function () {
            var olditem = this.gameManager.UIManager.tutorialUI.GetTutorialItem();
            if (olditem == null) {
                this.gameManager.UIManager.tutorialUI.ShowNextStepTutorial();
            }
            else {
                var deck = this.gameManager.UIManager.pokerTable.pokerGroup.cardDecksData.GetDeck(olditem.Type, olditem.NUM);
                if (deck == null) {
                    this.gameManager.UIManager.tutorialUI.ShowNextStepTutorial();
                }
                else {
                    if (this.gameManager.UIManager.tutorialUI.stepDeckCardNum != deck.data.pokerList.length) {
                        this.gameManager.UIManager.tutorialUI.ShowNextStepTutorial();
                    }
                }
            }
            var item = this.gameManager.UIManager.tutorialUI.GetTutorialItem();
            var deck2 = this.gameManager.UIManager.pokerTable.pokerGroup.cardDecksData.GetDeck(item.Type, item.NUM);
            if (deck2 == null) {
            }
            else {
                this.gameManager.UIManager.tutorialUI.stepDeckCardNum = deck2.data.pokerList.length;
                this.SetTutorialItem(item);
            }
        };
        PokerEventHandle.prototype.EndTutorial = function () {
            this.gameManager.UIManager.tutorialUI.HideTutorial();
            this.gameManager.UIManager.pokerTable.SetTutorialMaskVisible(false);
        };
        PokerEventHandle.prototype.onShowLastTutorial = function () {
            this.gameManager.UIManager.pokerTable.SetTutorialMaskClickToCloseTutorial(true);
        };
        return PokerEventHandle;
    }());
    pokerGame.PokerEventHandle = PokerEventHandle;
})(pokerGame || (pokerGame = {}));
//# sourceMappingURL=PokerEventHandle.js.map
/**
* UI 管理类
*/
var pokerGame;
(function (pokerGame) {
    var GameUIManager = /** @class */ (function () {
        function GameUIManager() {
            this.shopUI = new pokerUI.shop();
            this.pokerTable = new pokerUI.pokerTable();
            this.startGameUI = new pokerUI.startGame();
            this.pokerTop = new pokerUI.gameTop();
            this.pokerBottom = new pokerUI.gameBottom();
            this.pokerPopup = new pokerUI.gamePopup();
            this.settingUI = new pokerUI.setting();
            this.winUI = new pokerUI.win();
            this.tutorialUI = new pokerUI.tutorial();
            this.challengeUI = new pokerUI.challenge();
            this.confirmAutoPlayUI = new pokerUI.ConfirmAutoPlay();
            this.confirmShowCard = new pokerUI.ConfirmShowCard();
            var a = 'a';
            if (a == 'a')
                a = 'a';
        }
        GameUIManager.prototype.IsAllTableUILoadDone = function () {
            if (this.pokerTable == null || this.pokerTable.pokerTableUI == null) {
                return false;
            }
            if (this.pokerTop == null || this.pokerTop.gameTopUI == null) {
                return false;
            }
            if (this.pokerBottom == null || this.pokerBottom.gameBottom == null) {
                return false;
            }
            return true;
        };
        return GameUIManager;
    }());
    pokerGame.GameUIManager = GameUIManager;
})(pokerGame || (pokerGame = {}));
//# sourceMappingURL=GameUIManager.js.map
/**
* 游戏设置类 管理游戏设置
*/
var pokerGame;
(function (pokerGame) {
    var GameSetting = (function () {
        function GameSetting() {
        }
        return GameSetting;
    }());
    pokerGame.GameSetting = GameSetting;
})(pokerGame || (pokerGame = {}));
//# sourceMappingURL=GameSetting.js.map
/**
* 游戏总管  管理游戏进度
*/
var pokerGame;
(function (pokerGame) {
    var GameManager = /** @class */ (function () {
        function GameManager() {
            //设置版本控制类型为使用文件名映射的方式
            Laya.ResourceVersion.type = Laya.ResourceVersion.FILENAME_VERSION;
            //加载版本信息文件
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.beginLoad));
            var a = 'a';
            if (a == 'a')
                a = 'a';
        }
        GameManager.prototype.beginLoad = function () {
            this.Init();
        };
        GameManager.prototype.Init = function () {
            this.UIManager = new pokerGame.GameUIManager();
            this.userData = new pokerGame.UserData();
            this.UIManager.settingUI.FlushSetting(this.userData);
            this.UIManager.shopUI.FlushData(this.userData);
            // ////console.log('s6');
            this.UIManager.challengeUI.FlushUserData(this.userData);
            this.pokerEvent = new pokerGame.EventHandlePoker();
            this.pokerEvent.SetGameManager(this);
            this.tutorialEvent = new pokerGame.EventHandleTutorial();
            this.tutorialEvent.SetGameManager(this);
            this.settingEvent = new pokerGame.EventHandlSetting();
            this.settingEvent.SetGameManager(this);
            this.shopEvent = new pokerGame.EventHandleShop();
            this.shopEvent.SetGameManager(this);
            this.soundPlayer = new pokerGame.SoundPlayer(this.userData);
            GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.UpdateGoldUI); //刷新金币
        };
        return GameManager;
    }());
    pokerGame.GameManager = GameManager;
})(pokerGame || (pokerGame = {}));
//# sourceMappingURL=GameManager.js.map
/*
* name;
*/
var VideoADUtil = /** @class */ (function () {
    function VideoADUtil() {
    }
    /**
     * 播放视频
     * @param success 视频播放成功回调
     * @param loadFail 视频加载失败回调
     * @param notFinish 视频未播放完毕回调
     */
    VideoADUtil.playVideo = function (success, loadFail, notFinish) {
        if (loadFail === void 0) { loadFail = null; }
        if (notFinish === void 0) { notFinish = null; }
        if (VideoADUtil.sIsPlayVideo)
            return;
        wxCore.uo.loadingVideo(function (oked) {
            if (oked) {
                VideoADUtil.sIsPlayVideo = true;
                wxCore.uo.showVideoAD(function (played) {
                    if (played) {
                        VideoADUtil.sIsPlayVideo = false;
                        if (success != undefined && success != null) {
                            success();
                            GameMain.app.mWX.reportData(1);
                        }
                    }
                    else {
                        VideoADUtil.sIsPlayVideo = false;
                        if (notFinish != null)
                            notFinish();
                    }
                });
            }
            else {
                VideoADUtil.sIsPlayVideo = false;
                if (loadFail != null) {
                    loadFail();
                }
                else {
                    wx.showToast({
                        title: "视频获取失败",
                        icon: "none",
                        image: "",
                        duration: 2000
                    });
                }
            }
        });
    };
    // 1.更新wxcore，增加了initVideoAD\haevVideo\loadingVideo\showVideoAD等函数
    // 2.记得调用initVideoAD()进行初始化；
    // 根据需求选择：调用loadingVideo(null)进行提前加载
    // 3.增加playVideo()，使用时调用该函数。注意看参数注释
    VideoADUtil.sIsPlayVideo = false; // 过滤快速重复点击看视频
    return VideoADUtil;
}());
//# sourceMappingURL=VideoADUtil.js.map
var MathUtils = /** @class */ (function () {
    function MathUtils() {
    }
    // /**
    //  * 极坐标（r.θ）转换为笛卡尔坐标（x,y）
    //  * @param angle 角度
    //  * @param length 长度
    //  */
    // public static PolarToCartesian(angle: number, length: number = 1): Laya.Vector2 {
    //     return MathUtils.PolarToCartesianRad(angle * Mathf.Deg2Rad, length);
    // }
    // public static PolarToCartesianRad(angleRad, length = 1): Laya.Vector2 {
    //     return new Laya.Vector2(Mathf.Cos(angleRad) * length, Mathf.Sin(angleRad) * length);
    // }
    // /**
    //  * 计算两个向量的夹角
    //  * @param v 向量
    //  */
    // public static VectorToAngle(v: Laya.Vector2): number {
    //     return Mathf.Atan2(v.y, v.x) * Mathf.Rad2Deg;
    // }
    // public static WrapWithin(x, lower, upper): number {
    //     return Mathf.Repeat(x - upper, upper - lower) + lower;
    // }
    // public static Map(value, fromLower, fromUpper, toLower, toUpper): number {
    //     var fromAbs = value - fromLower;
    //     var fromMaxAbs = fromUpper - fromLower;
    //     var normal = fromAbs / fromMaxAbs;
    //     var toMaxAbs = toUpper - toLower;
    //     var toAbs = toMaxAbs * normal;
    //     return toAbs + toLower;
    // }
    /**
     * @param px1 第一个点x
     * @param py1 第一个点y
     * @param px2 第二个点x
     * @param py2 第二个点y
     */
    MathUtils.getAngle = function (px1, py1, px2, py2) {
        //两点的x、y值 
        var x = px2 - px1;
        var y = py2 - py1;
        var hypotenuse = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
        //斜边长度 
        var cos = x / hypotenuse;
        var radian = Math.acos(cos);
        //求出弧度 
        var angle = 180 / (Math.PI / radian);
        //用弧度算出角度 
        if (y < 0) {
            angle = -angle;
        }
        else if ((y == 0) && (x < 0)) {
            angle = 180;
        }
        return angle;
    };
    /**
     * 求随机数
     * @param min 最小值
     * @param max 最大值
     * @param isFloor 默认整数
     */
    MathUtils.getRandom = function (min, max, isFloor) {
        if (isFloor === void 0) { isFloor = true; }
        if (isFloor) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
        else {
            return Math.random() * (max - min + 1) + min;
        }
    };
    /**
     * 求距离
     * @param one 起点
     * @param two 终点
     */
    MathUtils.getDistance = function (one, two) {
        return Math.sqrt((one.x - two.x) * (one.x - two.x) + (one.y - two.y) * (one.y - two.y));
    };
    /**
     * 快速排序
     */
    MathUtils.quickSort = function (arr, i, j) {
        if (i < j) {
            var left = i;
            var right = j;
            var pivot = arr[left];
            while (i < j) {
                while (arr[j] >= pivot && i < j) { // 从后往前找比基准小的数
                    j--;
                }
                if (i < j) {
                    arr[i++] = arr[j];
                }
                while (arr[i] <= pivot && i < j) { // 从前往后找比基准大的数
                    i++;
                }
                if (i < j) {
                    arr[j--] = arr[i];
                }
            }
            arr[i] = pivot;
            MathUtils.quickSort(arr, left, i - 1);
            MathUtils.quickSort(arr, i + 1, right);
            return arr;
        }
    };
    /**
     * 快速排序(object里某元素)
     */
    MathUtils.quickSort2 = function (arr, element, i, j) {
        if (i < j) {
            var left = i;
            var right = j;
            var pivot = arr[left];
            while (i < j) {
                while (arr[j][element] <= pivot[element] && i < j) { // 从前往后找比基准大的数
                    j--;
                }
                if (i < j) {
                    arr[i++] = arr[j];
                }
                while (arr[i][element] >= pivot[element] && i < j) { // 从后往前找比基准小的数
                    i++;
                }
                if (i < j) {
                    arr[j--] = arr[i];
                }
            }
            arr[i] = pivot;
            MathUtils.quickSort2(arr, element, left, i - 1);
            MathUtils.quickSort2(arr, element, i + 1, right);
            return arr;
        }
    };
    /**
     * 快速排序(根据name的顺序来排序)
     */
    MathUtils.quickSort3 = function (arr, element, i, j) {
        if (i < j) {
            var left = i;
            var right = j;
            var pivot = arr[left];
            while (i < j) {
                while (Number(arr[j][element].substr(arr[j][element].length - 1, 1)) >= Number(pivot[element].substr(pivot[element].length - 1, 1)) && i < j) { // 从前往后找比基准大的数
                    j--;
                }
                if (i < j) {
                    arr[i++] = arr[j];
                }
                while (Number(arr[i][element].substr(arr[i][element].length - 1, 1)) <= Number(pivot[element].substr(pivot[element].length - 1, 1)) && i < j) { // 从后往前找比基准小的数
                    i++;
                }
                if (i < j) {
                    arr[j--] = arr[i];
                }
            }
            arr[i] = pivot;
            MathUtils.quickSort3(arr, element, left, i - 1);
            MathUtils.quickSort3(arr, element, i + 1, right);
            return arr;
        }
    };
    /**
     * 点关于直线的对称
     */
    MathUtils.symmetry = function (aaa, bbb, a, b) {
        var A = bbb.y - aaa.y;
        var B = aaa.x - bbb.x;
        var C = bbb.x * aaa.y - aaa.x * bbb.y;
        return new Laya.Vector2(-(2 * A * B * b + (A * A - B * B) * a + 2 * A * C) / (B * B + A * A), -((B * B - A * A) * b + 2 * A * B * a + 2 * B * C) / (B * B + A * A));
    };
    //数组元素置顶
    MathUtils.SwapItems = function (arr, index1, index2) {
        arr.unshift(arr[index1]);
        arr.splice(index1 + 1, 1);
        return arr;
    };
    return MathUtils;
}());
//# sourceMappingURL=MathUtils.js.map
/**
* name
*/
var pokerUI;
(function (pokerUI) {
    var win = /** @class */ (function () {
        function win() {
            var a = 'a';
            if (a == 'a')
                a = 'a';
            Laya.loader.load([{ url: "res/atlas/UI.atlas", type: Laya.Loader.ATLAS }], Laya.Handler.create(this, this.onUILoad));
        }
        win.prototype.onUILoad = function () {
            this.winUI = new ui.poker.WinUI();
            Laya.stage.addChild(this.winUI);
            this.winUI.visible = false;
            this.winUI.startNewgame.on(Laya.Event.CLICK, this, this.onClickStartNewGame);
            this.winUI.shareBtn.clickHandler = new Laya.Handler(this, this.onClickShare);
            this.winUI.toHome.on(Laya.Event.CLICK, this, this.ToHome);
        };
        win.prototype.ToHome = function () {
            this.hideADBanner();
            this.winUI.visible = false;
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClickEndGame);
            pokerGame.SoundPlayer.PlaySound(1);
        };
        win.prototype.onClickShare = function () {
            GameMain.app.mShares++;
            GameMain.app.mShareCurrentTime = GameMain.app.getCurrTime();
            var shareTitle = "这局太难了，听说只有1%完成了。";
            var shareImg = "login/share.jpg";
            var surl = "3";
            // if (GameMain.app.mWX.shareUrl.length > 2) {
            // 	shareTitle = GameMain.app.mWX.shareUrl[2]["title"];
            // 	shareImg = GameMain.app.mWX.shareUrl[2]["url"];
            // 	surl = GameMain.app.mWX.shareUrl[2]["id"];
            // }
            wx.shareAppMessage({
                title: shareTitle,
                imageUrl: shareImg,
            });
        };
        win.prototype.ShowWin = function (UsedTimeStr) {
            this.showADBanner();
            pokerGame.SoundPlayer.PlaySound(17);
            this.winUI.visible = true;
            this.winUI.timeCount.text = UsedTimeStr;
            if (!GameMain.app.isTestModel) {
                if (GameMain.app.isLevelGame != 0) {
                    GameMain.app.cutlevel = GameMain.app.cutlevel + 1;
                    GameMain.app.mWX.setUserValue('current_game_level', GameMain.app.cutlevel + '');
                }
                if (!GameMain.app.isOpenFreeModel) {
                    GameMain.app.fakerlevelnum = GameMain.app.fakerlevelnum + 1;
                    GameMain.app.mWX.setUserValue('faker_game_level', GameMain.app.fakerlevelnum + '');
                    GameMain.app.isLevelGame = 0;
                    GameMain.app.mingpainum = 1;
                }
            }
            this.winUI.showUpLevel.visible = false;
            if (GameMain.app.cutlevel == 1) {
                this.winUI.showUpLevel.visible = true;
                this.winUI.showUpLevel2.visible = false;
                this.winUI.showUpLevel.skin = 'local/newBg/result_返回首页查看新角色.png';
                this.winUI.showAvatar.skin = 'local/newBg/avatar_1.png';
            }
            else {
                for (var idnex = 19; idnex >= 0; idnex--) {
                    if (GameMain.app.cutlevel == ShopSetting.LevelSK[idnex]['LIMIT']) {
                        this.winUI.showUpLevel.visible = true;
                        this.winUI.showUpLevel2.visible = false;
                        this.winUI.showAvatar.skin = 'local/newBg/avatar_' + Number(idnex + 1) + '.png';
                        this.winUI.showUpLevel.skin = 'local/newBg/avatar_kuang.png';
                        GameMain.app.isShouYeUp = true;
                    }
                    else if (GameMain.app.cutlevel + 1 == ShopSetting.LevelSK[idnex]['LIMIT']) {
                        this.winUI.showUpLevel.visible = false;
                        this.winUI.showUpLevel2.visible = true;
                        this.winUI.showAvatar2.skin = 'local/newBg/avatar_' + Number(idnex + 1) + '.png';
                    }
                }
            }
            // GameMain.app.ismingpai = false;
            var nowTime = Math.floor(((new Date()).getTime()) / 1000);
            var continuonstime = nowTime - GameMain.app.gameStartTime;
            wxCore.uo.commitTotle("win_game", { "create_time": "", "session_id": "", "is_new": "", "true_current_level": GameMain.app.cutlevel, "end_game_time": nowTime, "duration_time": continuonstime });
            //体力
            if (ShopSetting.powerStyle == 1) {
                if (ShopSetting.nowPpower > 0) {
                    ShopSetting.nowPpower -= 1;
                    GameMain.app.mWX.startCutDown(true);
                    ShopSetting.powerConsumeTime = Math.floor(new Date().getTime() / 1000);
                    GameMain.app.mWX.setUserValue('resume_physical_power_time', ShopSetting.powerConsumeTime + '');
                    GameMain.app.mWX.setUserValue('now_physical_power', ShopSetting.nowPpower + '');
                }
            }
            //胜利获得金币
            GameMain.app.mWX.recordingCoins(Number(30 + GameMain.app.cutlevel * 4 + Number(ShopSetting.nowcoin)));
            this.winUI.coinCount.text = Number(30 + GameMain.app.cutlevel * 4) + '';
            GameMain.app.mWX.reportMark(GameMain.app.cutlevel);
        };
        win.prototype.onClickStartNewGame = function () {
            this.hideADBanner();
            this.winUI.visible = false;
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClickNewGame);
            pokerGame.SoundPlayer.PlaySound(1);
        };
        win.prototype.hideADBanner = function () {
            GameMain.app.mWX.hideADBanner();
        };
        win.prototype.showADBanner = function () {
            if (GameMain.app.mWX != null) {
                GameMain.app.mWX.initBannerAD();
            }
        };
        return win;
    }());
    pokerUI.win = win;
})(pokerUI || (pokerUI = {}));
//# sourceMappingURL=win.js.map
/**
* name
*/
var pokerUI;
(function (pokerUI) {
    var tutorialHandAni = /** @class */ (function () {
        function tutorialHandAni() {
            var a = 'a';
            if (a == 'a')
                a = 'a';
            //Laya.loader.load("res/atlas/role.atlas",Laya.Handler.create(this,this.onLoaded));
            Laya.loader.load([{ url: "res/atlas/UI.atlas", type: Laya.Loader.ATLAS }], Laya.Handler.create(this, this.onLoaded));
        }
        tutorialHandAni.prototype.onLoaded = function () {
            //创建动画实例
            this.tutorialHandAni = new Laya.Animation();
            // Laya.stage.addChild(this.tutorialHandAni);
            //通过数组加载动画资源，然后用play方法直接播放。由于loadImages方法返回的是Animation对象本身，可以直接使用“loadImages(...).play(...);”语法。
            //var ani=this.tutorialHandAni.loadImages(this.aniUrls("tap_000",2));
            var ani = this.tutorialHandAni.loadAnimation("poker/tutorialHand.ani");
            ani.play();
        };
        /**
       * 创建一组动画的url数组（美术资源地址数组）
       * aniName  动作的名称，用于生成url
       * length   动画最后一帧的索引值，
       */
        tutorialHandAni.prototype.aniUrls = function (aniName, length) {
            var urls = [];
            for (var i = 0; i < length; i++) {
                //动画资源路径要和动画图集打包前的资源命名对应起来
                urls.push("UI/" + aniName + (i + 1) + ".png");
            }
            return urls;
        };
        return tutorialHandAni;
    }());
    pokerUI.tutorialHandAni = tutorialHandAni;
})(pokerUI || (pokerUI = {}));
//# sourceMappingURL=tutorialHandAni.js.map
/**
* name
*/
var pokerUI;
(function (pokerUI) {
    var tutorial = /** @class */ (function () {
        function tutorial() {
            this.tutorialConfigData = new gameconfig.tutorialConfigData();
            this.stepIndex = 0;
            this.stepDeckCardNum = 0;
            this.tutorialHandAni = new pokerUI.tutorialHandAni();
            var a = 'a';
            if (a == 'a')
                a = 'a';
            Laya.loader.load([{ url: "res/atlas/UI.atlas", type: Laya.Loader.ATLAS }], Laya.Handler.create(this, this.onUILoad));
        }
        tutorial.prototype.onUILoad = function () {
            this.tutorialUI = new ui.poker.tutorialUI();
            Laya.stage.addChild(this.tutorialUI);
            this.tutorialUI.visible = false;
            this.tutorialConfigData.StartLoad(new Laya.Handler(this, this.setup));
            this.tutorialUI.QuitTutorial.on(Laya.Event.CLICK, this, this.QuitTutorial);
            this.tutorialUI.addChild(this.tutorialHandAni.tutorialHandAni);
        };
        tutorial.prototype.QuitTutorial = function () {
            GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.OnClickQuitTutorial);
        };
        tutorial.prototype.setup = function () {
        };
        tutorial.prototype.StartTutorial = function () {
            this.stepIndex = -1;
            //this.ShowThisStepTutorial();
        };
        tutorial.prototype.ShowNextStepTutorial = function () {
            this.stepIndex++;
            this.ShowThisStepTutorial();
        };
        tutorial.prototype.ShowThisStepTutorial = function () {
            if (this.stepIndex < this.tutorialConfigData.tutorialItemList.length) {
                var tutorialItem = this.tutorialConfigData.tutorialItemList[this.stepIndex];
                // this.ShowTutorialDesc(tutorialItem.DESC);
                // ////console.log('this.tutorialConfigData.tutorialItemList', this.tutorialConfigData.tutorialItemList.length, this.stepIndex);
                if (this.stepIndex == this.tutorialConfigData.tutorialItemList.length - 1) //最后一个
                 {
                    // ////console.log('???????tutorialItemList');
                    GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.ShowLastTutorial);
                }
            }
        };
        tutorial.prototype.GetTutorialItem = function () {
            if (this.stepIndex < this.tutorialConfigData.tutorialItemList.length) {
                var tutorialItem = this.tutorialConfigData.tutorialItemList[this.stepIndex];
                return tutorialItem;
            }
            return null;
        };
        tutorial.prototype.ShowTutorialDesc = function (tutorialDesc) {
            this.tutorialUI.visible = true;
            this.tutorialUI.tutorialDesc.text = tutorialDesc;
        };
        tutorial.prototype.HideTutorial = function () {
            this.tutorialUI.visible = false;
        };
        return tutorial;
    }());
    pokerUI.tutorial = tutorial;
})(pokerUI || (pokerUI = {}));
//# sourceMappingURL=tutorial.js.map
/**
* 商店界面
*/
var pokerUI;
(function (pokerUI) {
    var shop = /** @class */ (function () {
        function shop() {
            this.shopConfigData = new gameconfig.shopConfigData();
            this.IsInit = false;
            this.IsFromGame = false;
            Laya.loader.load([{ url: "res/atlas/UI.atlas", type: Laya.Loader.ATLAS }], Laya.Handler.create(this, this.onUILoad));
        }
        shop.prototype.OpenShop = function (isFromGame) {
            this.IsFromGame = isFromGame;
            this.shopUI.CloseBTN.visible = isFromGame;
            this.shopUI.BackBTN.visible = !isFromGame;
            this.shopUI.visible = true;
            Laya.stage.addChild(this.shopUI);
        };
        shop.prototype.onUILoad = function () {
            this.shopUI = new ui.poker.ShopUI();
            this.shopUI.visible = false;
            Laya.stage.addChild(this.shopUI);
            this.shopUI.tab.selectHandler = new Laya.Handler(this, this.onSelecte);
            this.shopUI.BackBTN.on(Laya.Event.CLICK, this, this.ClickBack);
            this.shopUI.CloseBTN.on(Laya.Event.CLICK, this, this.CloseUI);
            //this.setup();
            this.shopConfigData.StartLoad(new Laya.Handler(this, this.setup));
            GameMain.app.isServer2 = true;
            //console.log('GameMain.app.isServer2---ok');
        };
        shop.prototype.FlushData = function (userdata) {
            this.userdata = userdata;
            if (this.IsInit) {
                this.setup();
                // ////console.log('s7');
            }
        };
        shop.prototype.setup = function () {
            this.setupPage(1);
            this.setupPage(2);
            this.setupPage(3);
            this.FlushSelectedItem(1);
            this.FlushSelectedItem(2);
            this.FlushSelectedItem(3);
            this.IsInit = true;
        };
        shop.prototype.FlushSelectedItem = function (pageNum) {
            var IDStr = this.userdata.GetAplayItemID(pageNum);
            switch (pageNum) {
                case 1:
                    shop.ItemSelectedInPage1 = this.shopConfigData.GetItem(IDStr, 1);
                    break;
                case 2:
                    shop.ItemSelectedInPage2 = this.shopConfigData.GetItem(IDStr, 2);
                    break;
                case 3:
                    shop.ItemSelectedInPage3 = this.shopConfigData.GetItem(IDStr, 3);
                    break;
            }
        };
        shop.prototype.GetItemConfigData = function (ItemID) {
            return this.shopConfigData.GetItemConfigData(ItemID);
        };
        shop.prototype.setupPage = function (page) {
            var dataArray = this.shopConfigData.getDataArray(page);
            var list = this.getPageList(page);
            var cells = list.cells;
            var ardata = [];
            for (var i = 0; i < dataArray.length; i++) {
                ardata.push({ label: "i=" + i.toString() });
            }
            list.array = ardata;
            //list.vScrollBarSkin="";
            list.scrollBar.hide = true; //隐藏列表的滚动条。
            list.scrollBar.elasticBackTime = 200; //设置橡皮筋回弹时间。单位为毫秒。
            list.scrollBar.elasticDistance = 50; //设置橡皮筋极限距离。
            //list.repeatX=2;
            //list.repeatY= dataArray.length/2 +dataArray.length%2;
            switch (page) {
                case 1:
                    list.renderHandler = new Laya.Handler(this, this.SetCellDataPage1);
                    break;
                case 2:
                    list.renderHandler = new Laya.Handler(this, this.SetCellDataPage2);
                    break;
                case 3:
                    list.renderHandler = new Laya.Handler(this, this.SetCellDataPage3);
                    break;
            }
            // for (var i = 0; i < dataArray.length; i++) {
            // 	var cell = cells[i];
            // 	var data = dataArray[i];
            // 	this.setCellData(cell, data);
            // }
        };
        shop.prototype.SetCellDataPage1 = function (cell, index) {
            //////console.log("SetCellDataPage1 ,index="+index.toString());
            var dataArray = this.shopConfigData.getDataArray(1);
            this.setCellData(cell, dataArray[index]);
        };
        shop.prototype.SetCellDataPage2 = function (cell, index) {
            //////console.log("SetCellDataPage2 ,index="+index.toString());
            var dataArray = this.shopConfigData.getDataArray(2);
            this.setCellData(cell, dataArray[index]);
        };
        shop.prototype.SetCellDataPage3 = function (cell, index) {
            //////console.log("SetCellDataPage3 ,index="+index.toString());
            var dataArray = this.shopConfigData.getDataArray(3);
            this.setCellData(cell, dataArray[index]);
        };
        shop.prototype.FlushPageData = function (page) {
            var dataArray = this.shopConfigData.getDataArray(page);
            var list = this.getPageList(page);
            var cells = list.cells;
            for (var i = 0; i < dataArray.length; i++) {
                var cell = null;
                var data = dataArray[i];
                for (var j = 0; j < cells.length; j++) {
                    var cellTest = cells[j];
                    if (data.ItemName == cellTest.getChildByName("name").text) {
                        cell = cellTest;
                        break;
                    }
                }
                if (cell != null) {
                    this.setCellData(cell, data);
                }
            }
        };
        shop.prototype.getPageList = function (page) {
            var tRet = null;
            switch (page) {
                case 1:
                    tRet = this.shopUI.listBG;
                    break;
                case 2:
                    tRet = this.shopUI.listCard;
                    break;
                case 3:
                    tRet = this.shopUI.listCardBack;
                    break;
            }
            return tRet;
        };
        shop.prototype.LoadAndChangeIcon = function (icon, atlas, skin) {
            if (icon == null) {
                // console.debug("Erro");
            }
            // Laya.loader.load([{ url: atlas, type: Laya.Loader.ATLAS }], Laya.Handler.create(this, this.ChangeIconSkin, [icon, skin]));
            // this.ChangeIconSkin(icon, skin);
        };
        shop.prototype.ChangeIconSkin = function (icon, skin) {
            icon.skin = skin;
        };
        shop.prototype.setIconData = function (cell, itemData) {
            var box = cell;
            switch (itemData.page) {
                case 1: //背景
                    {
                        var icon = box.getChildByName("icon1");
                        this.LoadAndChangeIcon(icon, itemData.ItemAtlas, itemData.ItemIcon);
                    }
                    break;
                case 2: //扑克
                    {
                        var icon1 = box.getChildByName("icon1");
                        this.LoadAndChangeIcon(icon1, itemData.ItemAtlas, itemData.ItemIcon + pokerRender.GetImgFileNameWithTypeNum(PokerType.club, 1));
                        var icon2 = box.getChildByName("icon2");
                        this.LoadAndChangeIcon(icon2, itemData.ItemAtlas, itemData.ItemIcon + pokerRender.GetImgFileNameWithTypeNum(PokerType.diamond, 13));
                        var icon3 = box.getChildByName("icon3");
                        this.LoadAndChangeIcon(icon3, itemData.ItemAtlas, itemData.ItemIcon + pokerRender.GetImgFileNameWithTypeNum(PokerType.heart, 12));
                    }
                    break;
                case 3: //卡背
                    {
                        var icon1 = box.getChildByName("icon1");
                        this.LoadAndChangeIcon(icon1, itemData.ItemAtlas, itemData.ItemIcon);
                        var icon3 = box.getChildByName("icon3");
                        this.LoadAndChangeIcon(icon3, itemData.ItemAtlas, itemData.ItemIcon);
                    }
                    break;
            }
        };
        shop.prototype.setCellData = function (cell, itemData) {
            var box = cell;
            //var icon = <Laya.Image>box.getChildByName("icon");
            var name = box.getChildByName("name");
            var buy = box.getChildByName("buy");
            var trybtn = box.getChildByName("try");
            var usebtn = box.getChildByName("use");
            var usingText = box.getChildByName("using");
            this.setIconData(cell, itemData);
            name.text = itemData.ItemName;
            buy.label = itemData.ItemPrice + "金币";
            var IDStr = this.userdata.GetAplayItemID(itemData.page);
            // console.debug("IDStr=", IDStr, itemData.ItemID);
            var IsUsing = IDStr == itemData.ItemID;
            usingText.visible = IsUsing;
            if (IsUsing) {
                // ////console.log('l12', itemData.page);
                buy.visible = false;
                trybtn.visible = false;
                usebtn.visible = false;
                switch (itemData.page) {
                    case 1:
                        shop.ItemSelectedInPage1 = itemData;
                        break;
                    case 2:
                        shop.ItemSelectedInPage2 = itemData;
                        break;
                    case 3:
                        shop.ItemSelectedInPage3 = itemData;
                        // ////console.log('l13', itemData);
                        break;
                }
            }
            else if (this.userdata != null) {
                var IsPurchasedItemID = this.userdata.IsPurchasedItemID(itemData.ItemID);
                buy.visible = !IsPurchasedItemID;
                trybtn.visible = !IsPurchasedItemID;
                usebtn.visible = IsPurchasedItemID;
            }
            buy.clickHandler = new Laya.Handler(this, this.OnClickBuy, [itemData]);
            trybtn.clickHandler = new Laya.Handler(this, this.OnClickTry, [itemData]);
            usebtn.clickHandler = new Laya.Handler(this, this.OnClickUse, [itemData]);
        };
        shop.prototype.OnClickUse = function (itemData) {
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.OnClickUse, [itemData]);
            pokerGame.SoundPlayer.PlaySound(1);
        };
        shop.prototype.OnClickBuy = function (itemData) {
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.OnClickBuy, [itemData]);
            pokerGame.SoundPlayer.PlaySound(1);
        };
        shop.prototype.OnClickTry = function (itemData) {
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.OnClickTry, [itemData]);
            pokerGame.SoundPlayer.PlaySound(1);
        };
        shop.prototype.CloseUI = function () {
            this.shopUI.visible = false;
            pokerGame.SoundPlayer.PlaySound(1);
        };
        shop.prototype.ClickBack = function () {
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClickBackToMainFromShop);
            pokerGame.SoundPlayer.PlaySound(1);
        };
        shop.prototype.ClickClose = function () {
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClickBackToMainFromShop);
            pokerGame.SoundPlayer.PlaySound(1);
        };
        /**根据选择tab的索引切换页面**/
        shop.prototype.onSelecte = function (index) {
            //切换ViewStack子页面
            this.shopUI.viewstack.selectedIndex = index;
        };
        shop.prototype.ShowMessage = function (message) {
            if (!this.shopUI.visible) {
                return;
            }
            if (message != null) {
                this.shopUI.message.text = message;
                this.shopUI.message.alpha = 1;
                Laya.Tween.clearAll(this.shopUI.message);
                Laya.Tween.to(this.shopUI.message, { alpha: 0 }, 4000, Laya.Ease.sineInOut, null, 0);
            }
        };
        shop.prototype.SetGoldText = function (goldNumText) {
            if (this.shopUI != null) {
                this.shopUI.GoldText.text = goldNumText;
            }
        };
        return shop;
    }());
    pokerUI.shop = shop;
})(pokerUI || (pokerUI = {}));
//# sourceMappingURL=shop.js.map
/**
* name
*/
var pokerUI;
(function (pokerUI) {
    var setting = /** @class */ (function () {
        function setting() {
            //	Laya.loader.load("res/atlas/UI.atlas",Laya.Handler.create(this,this.onUILoad));
            Laya.loader.load([{ url: "res/atlas/UI.atlas", type: Laya.Loader.ATLAS }], Laya.Handler.create(this, this.onUILoad));
            var a = 'a';
            if (a == 'a')
                a = 'a';
        }
        setting.prototype.onUILoad = function () {
            this.settingPopup = new ui.poker.settingPopupUI();
            Laya.stage.addChild(this.settingPopup);
            this.settingPopup.visible = false;
            this.settingPopup.CloseBTN.on(Laya.Event.CLICK, this, this.ClickClosePopup);
            this.settingPopup.CloseBTN2.on(Laya.Event.CLICK, this, this.ClickClosePopup);
            this.settingPopup.soundBTNImg.on(Laya.Event.CLICK, this, this.onClickSound);
            this.settingPopup.timerBTN.on(Laya.Event.CLICK, this, this.onClickShowTimer);
            this.settingPopup.lefthandBTN.on(Laya.Event.CLICK, this, this.onClickLeftHand);
            this.settingPopup.ThreeCardBTN.on(Laya.Event.CLICK, this, this.onClickThreecard);
            this.settingPopup.VigasBTN.on(Laya.Event.CLICK, this, this.onClickVigasMode);
            this.settingPopup.wen1.on(Laya.Event.CLICK, this, this.onClickWen1);
            this.settingPopup.wen2.on(Laya.Event.CLICK, this, this.onClickWen2);
            this.settingPopup.wen22.visible = false;
            this.settingPopup.wen11.visible = false;
            if (this.userData != null) {
                this.FlushSetting(this.userData);
            }
        };
        setting.prototype.ClickClosePopup = function () {
            this.settingPopup.visible = false;
            pokerGame.SoundPlayer.PlaySound(1);
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.TipMaskVis, [false]);
        };
        setting.prototype.IsSelected = function (switchImg) {
            var state1 = switchImg.getChildByName("state1");
            if (state1.alpha > 0) {
                return true;
            }
            return false;
        };
        setting.prototype.IsSwtichAniPlaying = function (switchImg) {
            var state2 = switchImg.getChildByName("state2");
            if (state2.alpha > 0) {
                return true;
            }
            return false;
        };
        setting.prototype.Swtich = function (switchImg) {
            var state1 = switchImg.getChildByName("state1");
            this.SetSwitchState(switchImg, !this.IsSelected(switchImg));
            //state1
            //state2
            //state3
            return true;
        };
        setting.prototype.SetSwitchState = function (switchImg, isOn) {
            var state1 = switchImg.getChildByName("state1");
            var state2 = switchImg.getChildByName("state2");
            var state3 = switchImg.getChildByName("state3");
            state2.visible = false;
            if (isOn) {
                var aniDruation = 0.2;
                Laya.Tween.clearAll(state1);
                Laya.Tween.clearAll(state2);
                Laya.Tween.clearAll(state3);
                Laya.Tween.to(state3, { alpha: 0 }, 0, Laya.Ease.sineIn, null, 0);
                Laya.Tween.to(state2, { alpha: 1 }, 0, Laya.Ease.sineIn, null, 0);
                Laya.Tween.to(state2, { alpha: 0 }, 0, Laya.Ease.sineIn, null, aniDruation * 1);
                Laya.Tween.to(state1, { alpha: 1 }, 0, Laya.Ease.sineIn, null, aniDruation * 1);
                //Laya.
            }
            else {
                var aniDruation = 0.2;
                Laya.Tween.clearAll(state1);
                Laya.Tween.clearAll(state2);
                Laya.Tween.clearAll(state3);
                Laya.Tween.to(state1, { alpha: 0 }, 0, Laya.Ease.sineIn, null, 0);
                Laya.Tween.to(state2, { alpha: 1 }, 0, Laya.Ease.sineIn, null, 0);
                Laya.Tween.to(state2, { alpha: 0 }, 0, Laya.Ease.sineIn, null, aniDruation * 1);
                Laya.Tween.to(state3, { alpha: 1 }, 0, Laya.Ease.sineIn, null, aniDruation * 1);
            }
        };
        setting.prototype.OnClickSwitch = function (switchImg, event) {
            if (this.IsSwtichAniPlaying(switchImg)) {
                return;
            }
            var selected = this.IsSelected(switchImg);
            this.Swtich(switchImg);
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(event, [!selected]);
            pokerGame.SoundPlayer.PlaySound(1);
        };
        setting.prototype.onClickSound = function () {
            this.OnClickSwitch(this.settingPopup.soundSwitch, GameGlobal.EVENT.onClickSettingSound);
        };
        setting.prototype.onClickShowTimer = function () {
            this.OnClickSwitch(this.settingPopup.timerSwitch, GameGlobal.EVENT.onClickSettingShowTimer);
        };
        setting.prototype.onClickThreecard = function () {
            this.OnClickSwitch(this.settingPopup.threecardSwitch, GameGlobal.EVENT.onClickSettingThreecard);
        };
        setting.prototype.onClickVigasMode = function () {
            this.OnClickSwitch(this.settingPopup.vigasSwitch, GameGlobal.EVENT.onClickSettingVigasMode);
        };
        setting.prototype.onClickLeftHand = function () {
            this.OnClickSwitch(this.settingPopup.lefthandSwitch, GameGlobal.EVENT.onClickSettingLeftHandMode);
        };
        setting.prototype.onClickWen1 = function () {
            Laya.timer.clearAll(this.settingPopup.wen11);
            this.wenVis(true, false);
            Laya.timer.once(3000, this, this.wenVis, [false, false]);
        };
        setting.prototype.onClickWen2 = function () {
            Laya.timer.clearAll(this.settingPopup.wen22);
            this.wenVis(false, true);
            Laya.timer.once(3000, this, this.wenVis, [false, false]);
        };
        setting.prototype.wenVis = function (bool1, bool2) {
            this.settingPopup.wen11.visible = bool1;
            this.settingPopup.wen22.visible = bool2;
        };
        setting.prototype.FlushSetting = function (userData) {
            this.userData = userData;
            if (this.settingPopup != null) {
                this.SetSwitchState(this.settingPopup.soundSwitch, this.userData.isSoundOn);
                this.SetSwitchState(this.settingPopup.timerSwitch, this.userData.isTimerOn);
                this.SetSwitchState(this.settingPopup.lefthandSwitch, this.userData.isLeftHand);
                this.SetSwitchState(this.settingPopup.threecardSwitch, this.userData.isThreeCardOnce);
                this.SetSwitchState(this.settingPopup.vigasSwitch, this.userData.isVigasMode);
                GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onMusicBtnChange, [this.userData.isSoundOn]);
                // this.settingPopup.soundSetting.selected=this.userData.isSoundOn;
                // this.settingPopup.showtimer.selected=this.userData.isTimerOn;
                // this.settingPopup.lefthand.selected=this.userData.isLeftHand;
                // this.settingPopup.threecard.selected=this.userData.isThreeCardOnce;
                // this.settingPopup.vigasMode.selected=this.userData.isVigasMode;
                this.userData = null;
            }
        };
        return setting;
    }());
    pokerUI.setting = setting;
})(pokerUI || (pokerUI = {}));
//# sourceMappingURL=setting.js.map
/**
* 牌桌界面
*/
var pokerUI;
(function (pokerUI) {
    var DearCardType;
    (function (DearCardType) {
        DearCardType[DearCardType["normal"] = 0] = "normal";
        DearCardType[DearCardType["tutorial"] = 1] = "tutorial";
        DearCardType[DearCardType["retry"] = 2] = "retry";
        DearCardType[DearCardType["protect"] = 3] = "protect";
    })(DearCardType = pokerUI.DearCardType || (pokerUI.DearCardType = {}));
    var pokerTable = /** @class */ (function () {
        function pokerTable() {
            this.LineDeckList = new Array();
            this.ADeckList = new Array();
            this.IsLeftMode = false;
            this.LineMaxX = 0; //桌面中的牌堆中的最大的那个X, 左右置换的时候计算用
            this.LineMinX = 0; //桌面中的牌堆中的最小的那个X, 左右置换的时候计算用
            this.StartDeckMaxX = 0; //桌面中的牌堆中的最大的那个X, 左右置换的时候计算用
            this.StartDeckMinX = 0; //桌面中的牌堆中的最小的那个X, 左右置换的时候计算用
            this.ThreecardPosPluse = 0;
            this.IsTutorialStart = false; //是否为新手指引
            var a = 'a';
            if (a == 'a')
                a = 'a';
            this.InitTable();
        }
        pokerTable.prototype.InitTable = function () {
            //加载图集资源，加载成功后添加到舞台
            Laya.loader.load([{ url: "res/atlas/UI.atlas", type: Laya.Loader.ATLAS }], Laya.Handler.create(this, this.onPokerTableUILoaded));
            this.messageConfig = new gameconfig.messageConfig();
            this.messageConfig.StartLoad(null);
            GameGlobal.Dispatcher.addEvent(GameGlobal.EVENT.onALLTableUILoadedDone, this, this.onALLTableUILoadedDone);
        };
        pokerTable.prototype.SetLeftMode = function (isLeftMode) {
            if (this.IsLeftMode != isLeftMode) {
                this.IsLeftMode = isLeftMode;
                this.FlushTablePos();
            }
        };
        pokerTable.prototype.FlushTablePos = function () {
            this.SetPos(this.pokerTableUI.Deck1, this.ADeckList[0], false);
            this.SetPos(this.pokerTableUI.Deck2, this.ADeckList[1], false);
            this.SetPos(this.pokerTableUI.Deck3, this.ADeckList[2], false);
            this.SetPos(this.pokerTableUI.Deck4, this.ADeckList[3], false);
            this.SetPos(this.pokerTableUI.ThreeCard, this.threeCardDeckPos, false);
            this.SetPos(this.pokerTableUI.StartCard, this.startCardDeckPos, false);
            this.SetPos(this.pokerTableUI.Line1, this.LineDeckList[0], true);
            this.SetPos(this.pokerTableUI.Line2, this.LineDeckList[1], true);
            this.SetPos(this.pokerTableUI.Line3, this.LineDeckList[2], true);
            this.SetPos(this.pokerTableUI.Line4, this.LineDeckList[3], true);
            this.SetPos(this.pokerTableUI.Line5, this.LineDeckList[4], true);
            this.SetPos(this.pokerTableUI.Line6, this.LineDeckList[5], true);
            this.SetPos(this.pokerTableUI.Line7, this.LineDeckList[6], true);
            if (this.IsLeftMode) {
                this.pokerTableUI.ThreeCard.x = this.pokerTableUI.StartCard.x + this.ThreecardPosPluse;
            }
        };
        pokerTable.prototype.SetPos = function (node, pos, IsLine) {
            var tRet = new Laya.Point(pos.x, pos.y);
            if (this.IsLeftMode) {
                if (IsLine) {
                    tRet.x = this.LineMaxX - tRet.x + this.LineMinX;
                }
                else {
                    tRet.x = this.StartDeckMaxX - tRet.x + this.StartDeckMinX;
                }
            }
            node.pos(tRet.x, tRet.y);
            return tRet;
        };
        //注册位置
        pokerTable.prototype.initDeckPos = function () {
            this.ADeckList.push(new Laya.Point(this.pokerTableUI.Deck1.x, this.pokerTableUI.Deck1.y));
            this.ADeckList.push(new Laya.Point(this.pokerTableUI.Deck2.x, this.pokerTableUI.Deck2.y));
            this.ADeckList.push(new Laya.Point(this.pokerTableUI.Deck3.x, this.pokerTableUI.Deck3.y));
            this.ADeckList.push(new Laya.Point(this.pokerTableUI.Deck4.x, this.pokerTableUI.Deck4.y));
            this.LineDeckList.push(new Laya.Point(this.pokerTableUI.Line1.x, this.pokerTableUI.Line1.y));
            this.LineDeckList.push(new Laya.Point(this.pokerTableUI.Line2.x, this.pokerTableUI.Line2.y));
            this.LineDeckList.push(new Laya.Point(this.pokerTableUI.Line3.x, this.pokerTableUI.Line3.y));
            this.LineDeckList.push(new Laya.Point(this.pokerTableUI.Line4.x, this.pokerTableUI.Line4.y));
            this.LineDeckList.push(new Laya.Point(this.pokerTableUI.Line5.x, this.pokerTableUI.Line5.y));
            this.LineDeckList.push(new Laya.Point(this.pokerTableUI.Line6.x, this.pokerTableUI.Line6.y));
            this.LineDeckList.push(new Laya.Point(this.pokerTableUI.Line7.x, this.pokerTableUI.Line7.y));
            this.LineMaxX = this.pokerTableUI.Line7.x;
            this.LineMinX = this.pokerTableUI.Line1.x;
            this.threeCardDeckPos = new Laya.Point(this.pokerTableUI.ThreeCard.x, this.pokerTableUI.ThreeCard.y);
            this.startCardDeckPos = new Laya.Point(this.pokerTableUI.StartCard.x, this.pokerTableUI.StartCard.y);
            this.StartDeckMaxX = this.pokerTableUI.StartCard.x;
            this.StartDeckMinX = this.pokerTableUI.Deck1.x;
            this.ThreecardPosPluse = this.pokerTableUI.ThreeCard.x - this.pokerTableUI.Deck4.x;
            //this.pokerTableUI.tutorialCardSpr
            this.pokerTableUI.tutorialMask.visible = false;
            this.pokerTableUI.BackGround.y = Laya.stage.height;
        };
        pokerTable.prototype.SetTutorialMaskClickToCloseTutorial = function (isON) {
            if (isON) {
                // this.pokerTableUI.tutorialMask.on(Laya.Event.CLICK, this, this.CloseTutorial);
                this.CloseTutorial();
            }
            else {
                this.pokerTableUI.tutorialMask.offAll();
            }
        };
        pokerTable.prototype.CloseTutorial = function () {
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.EndTutorial);
            this.pokerTableUI.tutorialMask.offAll();
        };
        pokerTable.prototype.SetTutorialMaskVisible = function (visible, alpha) {
            if (alpha === void 0) { alpha = 0.5; }
            this.pokerTableUI.tutorialMask.visible = visible;
            this.pokerTableUI.tutorialMask.alpha = alpha;
        };
        pokerTable.prototype.SetCardRenderToTutorialSpriteRoot = function (cardRender, RootNum) {
            var parentRoot = cardRender.parent.parent;
            var parentPos = new Laya.Point(parentRoot.x, parentRoot.y);
            var pos = new Laya.Point(cardRender.x, cardRender.y);
            cardRender.removeSelf();
            if (RootNum == 1) {
                this.pokerTableUI.tutorialCardSpr1.addChild(cardRender);
                var parspr1 = this.pokerTableUI.tutorialCardSpr1.parent;
                parspr1.pos(parentPos.x, parentPos.y);
            }
            else if (RootNum == 2) {
                this.pokerTableUI.tutorialCardSpr2.addChild(cardRender);
                var parspr2 = this.pokerTableUI.tutorialCardSpr2.parent;
                parspr2.pos(parentPos.x, parentPos.y);
            }
            cardRender.pos(pos.x, pos.y);
            //this.pokerTableUI.tutorialCardSpr.pos(parentPos,parentPos);
        };
        //桌面所有UI加载完毕时回调（包括桌面上半部分跟下半部分的操作UI）
        pokerTable.prototype.onALLTableUILoadedDone = function () {
            this.pokerGroup.AddToTable(this.pokerTableUI, this.tableTopUI.gameTopUI, this.tableBottomUI.gameBottom);
        };
        pokerTable.prototype.onPokerTableUILoaded = function () {
            if (this.pokerTableUI == null) {
                this.pokerTableUI = new ui.poker.pokerTableUI();
                Laya.stage.addChild(this.pokerTableUI);
                this.pokerTableUI.visible = false;
                this.initDeckPos();
                this.pokerTableUI.mingpai.visible = false;
            }
            if (this.pokerGroup == null) {
                this.pokerGroup = new pokerGame.pokerTableData();
            }
            GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.onTableUILoadedDone);
        };
        pokerTable.prototype.MingPaiTaiJi = function (bool) {
            this.pokerTableUI.mingpai.visible = bool;
            if (bool) {
                this.taijiRotate();
                this.pokerTableUI.mingpai.on(Laya.Event.CLICK, this, this.onClickTaiJi);
            }
            else {
                Laya.Tween.clearAll(this.pokerTableUI.taiji);
                this.pokerTableUI.mingpai.off(Laya.Event.CLICK, this, this.onClickTaiJi);
            }
        };
        pokerTable.prototype.onClickTaiJi = function () {
            if (GameMain.app.mWX.isPassTheLevelType == 1) {
                GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.onMingPaiTaiJi, [false]);
                // GameMain.app.ismingpai = true;
                GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.ShowHiddenCard);
            }
            else if (GameMain.app.mWX.isPassTheLevelType == 2) {
                GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.onMingPaiTaiJi, [false]);
                GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.ShowHiddenCard);
            }
            else if (GameMain.app.mWX.isPassTheLevelType == 3) {
                GameMain.app.mShares++;
                GameMain.shareIndex = 10;
                GameMain.app.mShareCurrentTime = GameMain.app.getCurrTime();
                var shareTitle = "这局太难了，听说只有1%完成了。";
                var shareImg = "login/share.jpg";
                var surl = "3";
                if (GameMain.app.mWX.shareUrl.length > 0) {
                    shareTitle = GameMain.app.mWX.shareUrl[0]["title"];
                    shareImg = GameMain.app.mWX.shareUrl[0]["url"];
                    // surl = GameMain.app.mWX.shareUrl[0]["id"];
                }
                wx.shareAppMessage({
                    title: shareTitle,
                    imageUrl: shareImg,
                });
            }
            else {
                GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.onMingPaiTaiJi, [false]);
                GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.ShowHiddenCard);
            }
        };
        //太极旋转
        pokerTable.prototype.taijiRotate = function (rot) {
            if (rot === void 0) { rot = 0; }
            this.pokerTableUI.taiji.rotation = rot;
            Laya.Tween.to(this.pokerTableUI.taiji, {
                rotation: 360 + rot
            }, 5000, null, Laya.Handler.create(this, function (rot) {
                this.taijiRotate(rot);
            }, [rot]));
        };
        //点击规则，临时切换到新手指引的时候  保留原有卡牌  切换到新的牌组
        pokerTable.prototype.ChangeToNewPokerGroupAndKeepOld = function () {
            if (this.pokerGroupKeep == null) {
                this.pokerGroupKeep = new pokerGame.pokerTableData();
            }
            this.onChangeToKeep();
        };
        //切换回keep的牌 
        pokerTable.prototype.onChangeToKeep = function () {
            if (this.pokerGroupKeep == null) {
                return;
            }
            this.pokerGroup.timerCountKeep = this.tableTopUI.timerCount;
            this.pokerGroup.RemoveFromTable();
            //交换
            var tempGroup = this.pokerGroup;
            this.pokerGroup = this.pokerGroupKeep;
            this.pokerGroupKeep = tempGroup;
            //加入桌面中	
            this.pokerGroup.AddToTable(this.pokerTableUI, this.tableTopUI.gameTopUI, this.tableBottomUI.gameBottom);
            this.pokerGroup.cardDecksData.FlushAllPokerRender();
            this.RestartTimer(this.pokerGroup.timerCountKeep);
        };
        pokerTable.prototype.FlushAllPoker = function () {
            this.pokerGroup.cardDecksData.FlushAllPokerRender();
        };
        pokerTable.prototype.FlushAllCardRender = function () {
            this.pokerGroup.cardDecksData.FlushAllCardRender();
        };
        pokerTable.prototype.FlushBGImg = function () {
            //console.debug("FlushBGImg");
            if (pokerUI.shop.ItemSelectedInPage1 != null) {
                //this.pokerTableUI.BGImg.skin=pokerUI.shop.ItemSelectedInPage1.ItemIcon;
                //console.debug("ItemSelectedInPage1="+pokerUI.shop.ItemSelectedInPage1.ItemIcon);
                //Laya.loader.load(pokerUI.shop.ItemSelectedInPage1.ItemAtlas,Laya.Handler.create(this,this.onLoadedBGImg));
                //Laya.loader.load([{url:pokerUI.shop.ItemSelectedInPage1.ItemAtlas, type: Laya.Loader.ATLAS}], Laya.Handler.create(this, this.onLoadedBGImg));
                this.onLoadedBGImg();
            }
        };
        pokerTable.prototype.onLoadedBGImg = function () {
            // if(this.pokerTableUI.BGImg.skin!=pokerUI.shop.ItemSelectedInPage1.ItemIcon)
            // {
            // 	//console.debug("FlushBGImg iconskin="+pokerUI.shop.ItemSelectedInPage1.ItemIcon);
            // 	this.pokerTableUI.BGImg.skin=pokerUI.shop.ItemSelectedInPage1.ItemIcon;
            // }
        };
        //发牌
        pokerTable.prototype.DearCard = function (type) {
            this.IsTutorialStart = type == DearCardType.tutorial;
            this.shouVis(false);
            GameMain.app.gameStartTime = Math.floor(new Date().getTime() / 1000);
            switch (type) {
                case DearCardType.tutorial:
                    this.pokerGroup.cardControls.DearCard(false); //新手指引发牌
                    wxCore.uo.commitTotle("start_button_click", { "create_time": "", "session_id": "", "is_new": "", "game_type": 1, "true_current_level": GameMain.app.cutlevel + 1, "dear_card_style": 0, "game_start_time": GameMain.app.gameStartTime });
                    break;
                case DearCardType.normal:
                    this.pokerGroup.cardControls.DearCard(false);
                    wxCore.uo.commitTotle("start_button_click", { "create_time": "", "session_id": "", "is_new": "", "game_type": 1, "true_current_level": GameMain.app.cutlevel + 1, "dear_card_style": 1, "game_start_time": GameMain.app.gameStartTime });
                    break;
                case DearCardType.retry:
                    this.pokerGroup.cardControls.DearCard(true);
                    wxCore.uo.commitTotle("start_button_click", { "create_time": "", "session_id": "", "is_new": "", "game_type": 1, "true_current_level": GameMain.app.cutlevel + 1, "dear_card_style": 2, "game_start_time": GameMain.app.gameStartTime });
                    break;
                case DearCardType.protect:
                    this.pokerGroup.cardControls.DearCard(true);
                    break;
            }
            this.RestartTimer();
            pokerGame.SoundPlayer.PlaySound(2);
            if (!GameMain.app.isOpenFreeModel) {
                this.aniModel();
            }
            // Laya.timer.once(1000, this, function () {
            // 	Laya.SoundManager.stopMusic();
            // 	pokerGame.SoundPlayer.PlayMusic(18);
            // })
            var topPos = GameMain.app.mWX.getMenuButtonTop_CenterPoint();
            this.tableTopUI.gameTopUI.y = topPos.x + topPos.y / 2;
            // ////console.log('发牌', this.tableTopUI.gameTopUI.y, this.tableBottomUI.gameBottom.y);
        };
        pokerTable.prototype.EndTutorial = function () {
            // ////console.log('log');
            this.IsTutorialStart = false;
        };
        pokerTable.prototype.RestartTimer = function (timeCount) {
            if (timeCount === void 0) { timeCount = 0; }
            this.tableTopUI.RestartTimer(timeCount);
        };
        pokerTable.prototype.GetMessage = function (messageID) {
            var message = this.messageConfig.GetMessage(messageID);
            return message;
        };
        pokerTable.prototype.ShowMessage = function (message) {
            if (!this.pokerTableUI.visible) {
                return;
            }
            //var message:string= this.messageConfig.GetMessage(messageID);
            if (message != null && GameMain.app.mWX.fhOnoff != 0) {
                this.pokerTableUI.message.text = message;
                this.pokerTableUI.message.alpha = 1;
                Laya.Tween.clearAll(this.pokerTableUI.message);
                Laya.Tween.to(this.pokerTableUI.message, { alpha: 0 }, 4000, Laya.Ease.sineInOut, null, 0);
                this.pokerTableUI.messageBg.alpha = 1;
                this.pokerTableUI.messageBg.width = this.pokerTableUI.message.width + 25;
                Laya.Tween.clearAll(this.pokerTableUI.messageBg);
                Laya.Tween.to(this.pokerTableUI.messageBg, { alpha: 0 }, 4000, Laya.Ease.sineInOut, null, 0);
            }
        };
        pokerTable.prototype.setModel = function (type, num) {
            if (type === void 0) { type = 0; }
            if (num === void 0) { num = 3; }
            // if (GameMain.app.isOpenFreeModel) {
            this.pokerTableUI.model.skin = 'login/game_image_logo.png';
            this.pokerTableUI.num.visible = false;
            this.pokerTableUI.lightmodel.visible = false;
            this.pokerTableUI.lightnum.visible = false;
            // } else {
            // 	this.pokerTableUI.model.skin = 'new18/game_image_cutlevel.png';
            // 	this.pokerTableUI.num.visible = true;
            // 	this.pokerTableUI.lightmodel.visible = true;
            // 	this.pokerTableUI.lightnum.visible = true;
            // 	this.pokerTableUI.num.value = GameMain.app.fakerlevelnum + 1;
            // 	this.pokerTableUI.lightmodel.skin = 'new18/game_image_cutlevel_light.png';
            // 	this.pokerTableUI.lightnum.value = GameMain.app.fakerlevelnum + 1;
            // 	this.pokerTableUI.lightmodel.alpha = 0;
            // 	this.pokerTableUI.lightnum.alpha = 0;
            // }
        };
        pokerTable.prototype.aniModel = function () {
            this.pokerTableUI.lightmodel.alpha = 0;
            this.pokerTableUI.lightnum.alpha = 0;
            Laya.Tween.from(this.pokerTableUI.lightmodel, { alpha: 1 }, 800, Laya.Ease.sineIn, null, 1200);
            Laya.Tween.from(this.pokerTableUI.lightmodel, { alpha: 0 }, 500, Laya.Ease.sineOut, null, 2000);
            Laya.Tween.from(this.pokerTableUI.lightmodel, { alpha: 1 }, 800, Laya.Ease.sineIn, null, 2500);
            Laya.Tween.from(this.pokerTableUI.lightmodel, { alpha: 0 }, 500, Laya.Ease.sineOut, null, 3300);
            Laya.Tween.from(this.pokerTableUI.lightnum, { alpha: 1 }, 800, Laya.Ease.sineIn, null, 1200);
            Laya.Tween.from(this.pokerTableUI.lightnum, { alpha: 0 }, 500, Laya.Ease.sineOut, null, 2000);
            Laya.Tween.from(this.pokerTableUI.lightnum, { alpha: 1 }, 800, Laya.Ease.sineIn, null, 2500);
            Laya.Tween.from(this.pokerTableUI.lightnum, { alpha: 0 }, 500, Laya.Ease.sineOut, null, 3300);
        };
        pokerTable.prototype.shouVis = function (bool) {
            this.pokerTableUI.shoupai.visible = bool;
            if (bool) {
                this.pokerTableUI.shoupai.on(Laya.Event.CLICK, this, this.onClickShouPai);
            }
            else {
                this.pokerTableUI.shoupai.off(Laya.Event.CLICK, this, this.onClickShouPai);
            }
        };
        pokerTable.prototype.onClickShouPai = function () {
            GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.onShareWeChatSuccesse);
            this.pokerTableUI.shoupai.visible = false;
        };
        return pokerTable;
    }());
    pokerUI.pokerTable = pokerTable;
})(pokerUI || (pokerUI = {}));
//# sourceMappingURL=pokerTable.js.map
/**
* name
*/
var pokerUI;
(function (pokerUI) {
    var gameTop = /** @class */ (function () {
        function gameTop() {
            this.timerCount = 0;
            this.timerCountInt = 0;
            this.showTip = false;
            var a = 'a';
            if (a == 'a')
                a = 'a';
            //	Laya.loader.load("res/atlas/UI.atlas",Laya.Handler.create(this,this.onUILoad));
            //Laya.loader.load([{url: "res/atlas/UI.atlas", type: Laya.Loader.ATLAS}], Laya.Handler.create(this, this.onUILoad));
            Laya.loader.load([{ url: "res/atlas/UI.atlas", type: Laya.Loader.ATLAS }], Laya.Handler.create(this, this.onUILoad));
        }
        gameTop.prototype.SetTimerVisible = function (visible) {
            this.gameTopUI.TimeCount.visible = visible;
        };
        //设置金币
        //在任意地方用 	GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.UpdateGoldUI,[123]); 来刷新显示
        gameTop.prototype.SetGoldText = function (textGold) {
            if (this.gameTopUI != null && this.gameTopUI.GoldText != null) {
                this.gameTopUI.GoldText.text = textGold;
            }
        };
        gameTop.prototype.onUILoad = function () {
            this.gameTopUI = new ui.poker.gameTopUI();
            // if (GameMain.app.mWX.fhOnoff == 0) {
            this.gameTopUI.shop.visible = false;
            // }
            Laya.stage.addChild(this.gameTopUI);
            this.gameTopUI.visible = false;
            this.gameTopUI.challenge.visible = false;
            this.gameTopUI.money.visible = false;
            this.gameTopUI.challenge.on(Laya.Event.CLICK, this, this.onClickChallenge);
            this.gameTopUI.setting.on(Laya.Event.CLICK, this, this.onClickSetting);
            this.gameTopUI.shop.on(Laya.Event.CLICK, this, this.onClickShop);
            GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.onTableUILoadedDone);
            GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.UpdateGoldUI);
        };
        gameTop.prototype.SetTimeCount = function (second) {
            var valueToSet = Math.floor(second);
            if (this.timerCountInt == valueToSet) {
            }
            this.timerCountInt = valueToSet;
            var min = Math.floor(this.timerCountInt / 60);
            var sec = this.timerCountInt % 60;
            this.gameTopUI.TimeCount.text = this.GetTimeStr(min) + ":" + this.GetTimeStr(sec);
        };
        gameTop.prototype.GetTimeTextStr = function () {
            return this.gameTopUI.TimeCount.text;
        };
        gameTop.prototype.GetTimeStr = function (timeNum) {
            if (timeNum < 10) {
                return "0" + timeNum.toString();
            }
            else {
                return timeNum.toString();
            }
        };
        gameTop.prototype.onClickChallenge = function () {
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClickChallenge);
            pokerGame.SoundPlayer.PlaySound(1);
        };
        gameTop.prototype.onClickSetting = function () {
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClickSetting);
            pokerGame.SoundPlayer.PlaySound(1);
        };
        gameTop.prototype.onClickShop = function () {
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClickShopInGame);
            pokerGame.SoundPlayer.PlaySound(1);
        };
        gameTop.prototype.StopTimer = function () {
            Laya.timer.clear(this, this.UpdateTimerRender);
        };
        gameTop.prototype.RestartTimer = function (timecount) {
            if (timecount === void 0) { timecount = 0; }
            this.showTip = false;
            this.timerCount = timecount;
            Laya.timer.frameLoop(1, this, this.UpdateTimerRender);
        };
        gameTop.prototype.UpdateTimerRender = function () {
            this.timerCount += Laya.timer.delta / 1000;
            this.SetTimeCount(this.timerCount);
            if (!this.showTip && this.timerCount >= 120 && !GameMain.app.isOpenFreeModel) {
                this.showTip = true;
                GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onShowTipOfJumpLevel, [2]);
            }
        };
        return gameTop;
    }());
    pokerUI.gameTop = gameTop;
})(pokerUI || (pokerUI = {}));
//# sourceMappingURL=gameTop.js.map
/**
* 设置主界面
*/
var pokerUI;
(function (pokerUI) {
    var startGame = /** @class */ (function () {
        function startGame() {
            this._sk = null;
            this.bigStoreView = null;
            this.isStart = false;
            var a = 'a';
            if (a == 'a')
                a = 'a';
            Laya.loader.load([{ url: "res/atlas/UI.atlas", type: Laya.Loader.ATLAS },
            ], Laya.Handler.create(this, this.onUILoad));
            // this.onUILoad()
        }
        startGame.prototype.onUILoad = function () {
            this.startGameUI = new ui.poker.StartGameUI();
            this.startGameUI.height = Laya.stage.height;
            this.startGameUI.shop.visible = false;
            Laya.stage.addChild(this.startGameUI);
            this.startGameUI.visible = false;
            this.startGameUI.rankList.on(Laya.Event.CLICK, this, this.onRanking);
            this.startGameUI.startGame.on(Laya.Event.CLICK, this, this.onClickStartGame, [1]);
            this.startGameUI.shop.clickHandler = new Laya.Handler(this, this.onClickShop);
            this.startGameUI.startFreeGame.on(Laya.Event.CLICK, this, this.onClickStartGame, [2]);
            this.startGameUI.textLabel.on(Laya.Event.CLICK, this, this.onClickTestStartGame);
            this.startGameUI.bigStore.on(Laya.Event.CLICK, this, this.onClickOpenStore);
            this.startGameUI.powerBox.on(Laya.Event.CLICK, this, this.onPower);
            this.startGameUI.skBox.on(Laya.Event.CLICK, this, this.onSK);
            this.startGameUI.moregame.on(Laya.Event.MOUSE_DOWN, this, GameMain.app.mWX.showMoreGamePage, [this.startGameUI.moregame]);
            this.startGameUI.showmore.on(Laya.Event.MOUSE_DOWN, this, this.openMore);
            this.clound1Speed = (GameMain.app.getRandom(0, 1) == 1 ? -1 : 1) * Math.random() * 1 + 0.5;
            this.clound2Speed = (GameMain.app.getRandom(0, 1) == 1 ? -1 : 1) * Math.random() * 1 + 0.5;
            this.clound3Speed = (GameMain.app.getRandom(0, 1) == 1 ? -1 : 1) * Math.random() * 1 + 0.5;
            this.clound4Speed = (GameMain.app.getRandom(0, 1) == 1 ? -1 : 1) * Math.random() * 1 + 0.5;
            this.clound5Speed = (GameMain.app.getRandom(0, 1) == 1 ? -1 : 1) * Math.random() * 1 + 0.5;
            this.clound6Speed = (GameMain.app.getRandom(0, 1) == 1 ? -1 : 1) * Math.random() * 1 + 0.5;
            this.clound7Speed = (GameMain.app.getRandom(0, 1) == 1 ? -1 : 1) * Math.random() * 1 + 0.5;
            var point = GameMain.app.mWX.getMenuButtonTop_CenterPoint();
            this.startGameUI.powerBox.y = point.x + point.y / 2;
            this.startGameUI.goldBox.y = point.x + point.y / 2;
            Laya.timer.once(1000, this, function () {
                GameMain.app.isServer1 = true;
                //console.log('GameMain.app.isServer1---ok');
            });
            GameMain.app.mWX.initMoreGame(this.startGameUI.moregame, true);
            this._sk = new Laya.Skeleton();
            // this._sk.load("local/sk/1.sk", Laya.Handler.create(this, this.stopSK, null, true));
            this._sk.x = 150;
            this._sk.y = 520;
            this.startGameUI.skBox.addChild(this._sk);
            this.initSKDialog();
            this.initSToreDialog();
            this.initRanking();
            if (GameMain.app.mWX.isAbTest) {
                // if (GameMain.app.mWX.mUID % 2 == 0) {
                this.startGameUI.startGame.visible = true;
                this.startGameUI.startFreeGame.visible = false;
                this.startGameUI.model.visible = false;
                // } else {
                // 	this.startGameUI.startGame.visible = false;
                // 	this.startGameUI.startFreeGame.visible = true;
                // 	this.startGameUI.model.visible = false;
                // }
            }
            else {
                this.startGameUI.startGame.visible = true;
                this.startGameUI.startFreeGame.visible = true;
                this.startGameUI.model.visible = false;
            }
            if (GameMain.app.isTestModel) {
                this.startGameUI.writeLevelTxt.visible = true;
                this.startGameUI.textLabel.visible = true;
            }
            else {
                this.startGameUI.writeLevelTxt.visible = false;
                this.startGameUI.textLabel.visible = false;
            }
            this.startGameUI.num.text = GameMain.app.fakerlevelnum + 1;
            if (GameMain.app.mWX.fhOnoff == 0) {
                this.startGameUI.skBox.visible = false;
                this.startGameUI.bigStore.visible = false;
                this.startGameUI.rankList.bottom = 48;
            }
            else {
                this.startGameUI.skBox.visible = true;
                this.startGameUI.bigStore.visible = true;
                this.startGameUI.rankList.bottom = 207;
            }
            Laya.timer.frameLoop(1, this, this.update);
        };
        startGame.prototype.firstInit = function () {
            this.initGameClub(this.startGameUI.luntan);
        };
        startGame.prototype.initGameClub = function (Reference) {
            GameMain.app.mWX.gameClub = wx.createGameClubButton({
                type: 'image',
                icon: 'dark',
                image: 'luntan.png',
                style: {
                    right: 38 / (750 / GameMain.app.mScreenWidth),
                    bottom: 48 / (750 / GameMain.app.mScreenWidth),
                    width: 98 / (750 / GameMain.app.mScreenWidth),
                    height: 140 / (750 / GameMain.app.mScreenWidth)
                }
            });
        };
        //打开侧边栏
        startGame.prototype.openMore = function () {
            this.showHonor();
        };
        startGame.prototype.showHonor = function () {
            gameBox.showBoxPage("", GameMain.app.mWX.mGamesBox, "全民接龙高手");
            wxCore.uo.commitTotle("recom_icon_click", { "create_time": "", "uid": "", "session_id": "", "is_new": "", "click": 2 });
        };
        startGame.prototype.playSK = function () {
            if (!GameMain.app.mWX.gameClub && this.startGameUI.visible) {
                this.firstInit();
                ////console.log('puhahahahahahahahahahaha');
            }
            this.rotaOtherGame();
            if (this.startGameUI.visible) {
                if (GameMain.app.isShouYeUp) {
                    this.startGameUI.upupupbtn.visible = true;
                    this.startGameUI.startGame.skin = 'local/newBg/shengji.png';
                }
                else {
                    this.startGameUI.upupupbtn.visible = false;
                    this.startGameUI.startGame.skin = 'local/newBg/index_btn_开始游戏.png';
                }
                if (GameMain.app.mWX.gameClub != null)
                    GameMain.app.mWX.gameClub.show();
            }
            if (this._sk)
                this._sk.play(0, true);
        };
        startGame.prototype.stopSK = function () {
            Laya.Tween.clearAll(this.startGameUI.moregame);
            if (GameMain.app.mWX.gameClub != null)
                GameMain.app.mWX.gameClub.hide();
            if (this._sk)
                this._sk.stop();
        };
        startGame.prototype.changeSK = function () {
            if (this._sk) {
                this.stopSK();
                this._sk.load("local/sk/" + ShopSetting.LevelNow + ".sk", Laya.Handler.create(this, this.playSK, null, true));
                var sssss = ShopSetting.LevelSK[ShopSetting.LevelNow - 1]['NAME'].split("").join("\n");
                this.startGameUI.skName.text = sssss;
            }
        };
        // 广告动画
        startGame.prototype.rotaOtherGame = function () {
            Laya.Tween.clearAll(this.startGameUI.moregame);
            var __this = this;
            function Tw1() {
                Laya.Tween.to(__this.startGameUI.moregame, { rotation: 0 }, 200, null, new Laya.Handler(__this, Tw2));
            }
            function Tw2() {
                Laya.Tween.to(__this.startGameUI.moregame, { rotation: 30 }, 200, null, new Laya.Handler(__this, Tw3), 2000);
            }
            function Tw3() {
                Laya.Tween.to(__this.startGameUI.moregame, { rotation: 0 }, 200, null, new Laya.Handler(__this, Tw4));
            }
            function Tw4() {
                Laya.Tween.to(__this.startGameUI.moregame, { rotation: 30 }, 200, null, new Laya.Handler(__this, Tw1));
            }
            Laya.Tween.to(__this.startGameUI.moregame, { rotation: 30 }, 200, null, new Laya.Handler(__this, Tw1));
        };
        startGame.prototype.onClickStartGame = function (type) {
            if (GameMain.app.mWX.fhOnoff == 0) {
                GameMain.app.isOpenFreeModel = false;
                GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.OnGameStart, [false]);
            }
            else {
                if (this.startGameUI.startGame.skin == 'local/newBg/shengji.png') {
                    GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.onRefreshSKAniLevel);
                    GameMain.app.isShouYeUp = false;
                    this.startGameUI.startGame.skin = 'local/newBg/index_btn_开始游戏.png';
                    pokerGame.SoundPlayer.PlaySound(19);
                    var boomAni = new Laya.Animation();
                    boomAni.loadAnimation("GSolibs.ani");
                    boomAni.scale(1, 1);
                    boomAni.pos(this.startGameUI.skBox.x, Laya.stage.height - this.startGameUI.skBox.bottom - this.startGameUI.skBox.pivotY + this.startGameUI.skBox.height / 2);
                    boomAni.play(0, false);
                    boomAni.on(Laya.Event.COMPLETE, this, function () {
                        boomAni.removeSelf();
                        boomAni.destroy();
                    });
                    this.startGameUI.addChild(boomAni);
                }
                else {
                    GameMain.app.isOpenFreeModel = false;
                    GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.OnGameStart, [false]);
                }
            }
            pokerGame.SoundPlayer.PlaySound(1);
        };
        startGame.prototype.onClickShop = function () {
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.OnClickShop);
            pokerGame.SoundPlayer.PlaySound(1);
        };
        startGame.prototype.onClickTestStartGame = function () {
            var xxx;
            if (this.startGameUI.writeLevelTxt.text.length > 0) {
                xxx = this.startGameUI.writeLevelTxt.text;
            }
            else {
                xxx = 1;
            }
            GameMain.app.testLevel = xxx;
            this.onClickStartGame(1);
            // ////console.log('???????????', GameMain.app.testLevel);
        };
        startGame.prototype.onClickOpenStore = function () {
            if (GameMain.app.mWX.gameClub != null)
                GameMain.app.mWX.gameClub.hide();
            if (this.bigStoreView) {
                this.bigStoreView.refreshCoinAndPower();
                this.bigStoreView.popup();
            }
        };
        startGame.prototype.update = function () {
            if (this.isStart) {
                this.startGameUI.powerLabel.text = '' + ShopSetting.nowPpower + '/' + ShopSetting.nowPowerMax;
                this.startGameUI.goldLabel.text = '' + ShopSetting.nowcoin;
                this.moveClound();
            }
        };
        startGame.prototype.moveClound = function () {
            this.startGameUI.clound1.x += this.clound1Speed;
            this.startGameUI.clound2.x += this.clound2Speed;
            this.startGameUI.clound3.x += this.clound3Speed;
            this.startGameUI.clound4.x += this.clound4Speed;
            this.startGameUI.clound5.x += this.clound5Speed;
            this.startGameUI.clound6.x += this.clound6Speed;
            this.startGameUI.clound7.x += this.clound7Speed;
            this.moveDirSpeedControl(this.clound1Speed > 0 ? true : false, this.startGameUI.clound1, this.clound1Speed);
            this.moveDirSpeedControl(this.clound2Speed > 0 ? true : false, this.startGameUI.clound2, this.clound2Speed);
            this.moveDirSpeedControl(this.clound3Speed > 0 ? true : false, this.startGameUI.clound3, this.clound3Speed);
            this.moveDirSpeedControl(this.clound4Speed > 0 ? true : false, this.startGameUI.clound4, this.clound4Speed);
            this.moveDirSpeedControl(this.clound5Speed > 0 ? true : false, this.startGameUI.clound5, this.clound5Speed);
            this.moveDirSpeedControl(this.clound6Speed > 0 ? true : false, this.startGameUI.clound6, this.clound6Speed);
            this.moveDirSpeedControl(this.clound7Speed > 0 ? true : false, this.startGameUI.clound7, this.clound7Speed);
        };
        startGame.prototype.moveDirSpeedControl = function (bool, clound, cloundSpeed) {
            if (clound.x > 750 && bool) {
                var xx1 = Math.random();
                if (xx1 > 0.5) {
                    clound.x = -clound.width;
                    cloundSpeed = 1 * Math.random() * 1 + 0.5;
                }
                else {
                    clound.x = 750;
                    cloundSpeed = -1 * Math.random() * 1 + 0.5;
                }
            }
            if (clound.x + clound.width < 0 && !bool) {
                var xx1 = Math.random();
                if (xx1 > 0.5) {
                    clound.x = -clound.width;
                    cloundSpeed = 1 * Math.random() * 1 + 0.5;
                }
                else {
                    clound.x = 750;
                    cloundSpeed = -1 * Math.random() * 1 + 0.5;
                }
            }
        };
        startGame.prototype.onPower = function () {
            if (GameMain.app.mWX.gameClub != null)
                GameMain.app.mWX.gameClub.hide();
            if (!GameMain.app.physicalPowerView) {
                GameMain.app.physicalPowerView = new PhysicalPowerView();
            }
            GameMain.app.physicalPowerView.refreshCoinAndPower(1);
            GameMain.app.physicalPowerView.popup();
        };
        startGame.prototype.onSK = function () {
            if (GameMain.app.mWX.gameClub != null)
                GameMain.app.mWX.gameClub.hide();
            if (this._sk && this.skView) {
                this.skView.closeT(false);
                this.skView.refresh();
                this.skView.popup();
            }
        };
        startGame.prototype.initSKDialog = function () {
            if (this._sk) {
                if (!this.skView) {
                    this.skView = new SkView();
                }
            }
        };
        startGame.prototype.initSToreDialog = function () {
            if (!this.bigStoreView) {
                this.bigStoreView = new BigStoreView();
                this.bigStoreView.init();
            }
        };
        startGame.prototype.refreshSKDialog = function () {
            if (this._sk && this.skView) {
                this.skView.refresh();
                this.skView.loopMove();
            }
        };
        startGame.prototype.onRanking = function () {
            if (GameMain.app.mWX.gameClub != null)
                GameMain.app.mWX.gameClub.hide();
            if (this.sceneRank)
                this.sceneRank.onShow(true);
        };
        startGame.prototype.initRanking = function () {
            if (!this.sceneRank) {
                this.sceneRank = new SceneRank();
                this.startGameUI.addChild(this.sceneRank);
                this.sceneRank.onShow(false);
            }
        };
        return startGame;
    }());
    pokerUI.startGame = startGame;
})(pokerUI || (pokerUI = {}));
//# sourceMappingURL=gameStart.js.map
/**
* name
*/
var pokerUI;
(function (pokerUI) {
    var gamePopup = /** @class */ (function () {
        function gamePopup() {
            //	Laya.loader.load("res/atlas/UI.atlas",Laya.Handler.create(this,this.onUILoad));
            //Laya.loader.load([{url: "res/atlas/UI.atlas", type: Laya.Loader.ATLAS}], Laya.Handler.create(this, this.onUILoad));
            //加载版本信息文件
            Laya.loader.load([{ url: "res/atlas/UI.atlas", type: Laya.Loader.ATLAS }], Laya.Handler.create(this, this.onUILoad));
            var a = 'a';
            if (a == 'a')
                a = 'a';
        }
        gamePopup.prototype.onUILoad = function () {
            this.gamePopup = new ui.poker.gamePopupUI();
            Laya.stage.addChild(this.gamePopup);
            this.gamePopup.visible = false;
            this.gamePopup.endGame.visible = false;
            this.gamePopup.CloseBTN.on(Laya.Event.CLICK, this, this.ClickClosePopup);
            this.gamePopup.NEWGame.on(Laya.Event.CLICK, this, this.onClickNewGame);
            this.gamePopup.EndGame.on(Laya.Event.CLICK, this, this.onClickEndGame);
            this.gamePopup.RETRY.on(Laya.Event.CLICK, this, this.onClickRetry);
            this.gamePopup.bigK.on(Laya.Event.CLICK, this, this.onClickCardSize, [1]);
            this.gamePopup.smallK.on(Laya.Event.CLICK, this, this.onClickCardSize, [0]);
            this.gamePopup.jump.on(Laya.Event.CLICK, this, this.onClickTipJumpLevel);
            this.gamePopup.back.on(Laya.Event.CLICK, this, this.onClickBack);
        };
        gamePopup.prototype.ClickClosePopup = function () {
            this.gamePopup.visible = false;
            pokerGame.SoundPlayer.PlaySound(1);
        };
        gamePopup.prototype.onClickBack = function () {
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClickBackToMain);
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClearHistory);
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.TipMaskVis, [false]);
            wxCore.uo.commitTotle("icon_page", { "create_time": "", "session_id": "", "is_new": "", "icon_type": 'To_Home' });
            pokerGame.SoundPlayer.PlaySound(1);
            this.gamePopup.visible = false;
        };
        gamePopup.prototype.onClickNewGame = function () {
            if (GameMain.app.isOpenFreeModel) {
                GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClickNewGame);
                GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClearHistory);
                GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.TipMaskVis, [false]);
                wxCore.uo.commitTotle("icon_page", { "create_time": "", "session_id": "", "is_new": "", "icon_type": 'New_Game' });
            }
            else {
                GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClickBackToMain);
                GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClearHistory);
                GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.TipMaskVis, [false]);
                wxCore.uo.commitTotle("icon_page", { "create_time": "", "session_id": "", "is_new": "", "icon_type": 'To_Home' });
            }
            pokerGame.SoundPlayer.PlaySound(1);
            this.gamePopup.visible = false;
        };
        gamePopup.prototype.onClickRetry = function () {
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClickRetry);
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClearHistory);
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.TipMaskVis, [false]);
            pokerGame.SoundPlayer.PlaySound(1);
            // Laya.SoundManager.stopMusic();
            this.gamePopup.visible = false;
            wxCore.uo.commitTotle("icon_page", { "create_time": "", "session_id": "", "is_new": "", "icon_type": 'Retry_Game', 'level_retry': GameMain.app.cutlevel + 1 });
        };
        gamePopup.prototype.onClickEndGame = function () {
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClickEndGame);
            pokerGame.SoundPlayer.PlaySound(1);
        };
        gamePopup.prototype.onClickCardSize = function (type) {
            Laya.LocalStorage.setItem("isChangeSize", type == 1 ? "1" : "0");
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClickChangeCardSize, type);
            this.gamePopup.visible = false;
            pokerGame.SoundPlayer.PlaySound(1);
            wxCore.uo.commitTotle("icon_page", { "create_time": "", "session_id": "", "is_new": "", "icon_type": 'Retry_Game', 'is_big_size': type });
        };
        gamePopup.prototype.onClickTipJumpLevel = function () {
            this.gamePopup.visible = false;
        };
        return gamePopup;
    }());
    pokerUI.gamePopup = gamePopup;
})(pokerUI || (pokerUI = {}));
//# sourceMappingURL=gamePopup.js.map
/**
* name
*/
var pokerUI;
(function (pokerUI) {
    var gameBottom = /** @class */ (function () {
        function gameBottom() {
            var a = 'a';
            if (a == 'a')
                a = 'a';
            Laya.loader.load([{ url: "res/atlas/UI.atlas", type: Laya.Loader.ATLAS }], Laya.Handler.create(this, this.onUILoad));
        }
        gameBottom.prototype.onUILoad = function () {
            this.gameBottom = new ui.poker.gameBottomUI();
            // if (GameMain.app.mWX.fhOnoff == 0) {
            this.gameBottom.getChildByName("rules")["visible"] = false;
            this.gameBottom.getChildByName("showHiddenCard")["visible"] = false;
            // }
            Laya.stage.addChild(this.gameBottom);
            this.gameBottom.visible = false;
            this.gameBottom.showPopup.on(Laya.Event.CLICK, this, this.onClickShowPopup, [0]); //.clickHandler = new Laya.Handler(this,this.onClickShowPopup);
            this.gameBottom.back.on(Laya.Event.CLICK, this, this.onClickBackStep);
            this.gameBottom.showTips.on(Laya.Event.CLICK, this, this.onClickTips);
            this.gameBottom.showHiddenCard.on(Laya.Event.CLICK, this, this.OnClickShowAllHiddenCard);
            this.gameBottom.autoPlay.on(Laya.Event.CLICK, this, this.OnClickAutoBackToAceCardDeck);
            this.gameBottom.set.on(Laya.Event.CLICK, this, this.onClickSetting);
            this.gameBottom.size.on(Laya.Event.CLICK, this, this.onClickShowPopup, [1]);
            if (GameMain.app.mWX.fhOnoff == 1) {
                this.gameBottom.size.visible = true;
            }
            else {
                this.gameBottom.size.visible = false;
            }
            this.gameBottom.rules.on(Laya.Event.CLICK, this, this.OnClickGameStartTutorial);
            this.SetAutoEnable(false);
            GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.onTableUILoadedDone);
        };
        gameBottom.prototype.onClickSetting = function () {
            if (GameMain.app.isXinShow) {
                return;
            }
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClickSetting);
            pokerGame.SoundPlayer.PlaySound(1);
        };
        gameBottom.prototype.IsAutoEnable = function () {
            return !this.gameBottom.autoPlay.disabled;
        };
        gameBottom.prototype.SetAutoEnable = function (isEnable) {
            this.gameBottom.autoPlay.disabled = !isEnable;
            this.gameBottom.autoPlayText.disabled = !isEnable;
        };
        gameBottom.prototype.onClickShowPopup = function (type) {
            if (type === void 0) { type = 0; }
            if (GameMain.app.isXinShow) {
                return;
            }
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClickShowPopup, [type]);
            pokerGame.SoundPlayer.PlaySound(1);
        };
        gameBottom.prototype.onClickTips = function () {
            if (GameMain.app.isXinShow) {
                return;
            }
            this.shareToInvite2();
        };
        gameBottom.prototype.onClickBackToMain = function () {
            pokerGame.SoundPlayer.PlaySound(1);
            //GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClickBackToMain);
        };
        gameBottom.prototype.onClickBackStep = function (type) {
            if (GameMain.app.isXinShow) {
                return;
            }
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClickBackStep, [type]);
            pokerGame.SoundPlayer.PlaySound(1);
            // this.shareToInvite()
        };
        gameBottom.prototype.OnClickShowAllHiddenCard = function () {
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.OnClickShowAllHiddenCard);
            pokerGame.SoundPlayer.PlaySound(1);
        };
        gameBottom.prototype.OnClickAutoBackToAceCardDeck = function () {
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.OnClickAutoBackToAceCardDeck);
            pokerGame.SoundPlayer.PlaySound(1);
        };
        gameBottom.prototype.OnClickGameStartTutorial = function () {
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.OnClickGameStartTutorial);
            pokerGame.SoundPlayer.PlaySound(1);
        };
        /* 分享到群 */
        gameBottom.prototype.shareToInvite = function () {
            GameMain.app.mShares++;
            GameMain.shareIndex = 1;
            GameMain.app.mShareCurrentTime = GameMain.app.getCurrTime();
            var shareTitle = "这局太难了，听说只有1%完成了。";
            var shareImg = "login/share.jpg";
            var surl = "2";
            if (GameMain.app.mWX.shareUrl.length > 0) {
                shareTitle = GameMain.app.mWX.shareUrl[0]["title"];
                shareImg = GameMain.app.mWX.shareUrl[0]["url"];
                // surl = GameMain.app.mWX.shareUrl[0]["id"];
            }
            wx.shareAppMessage({
                title: shareTitle,
                imageUrl: shareImg,
            });
            // var htmlC = this.gameBottom.drawToCanvas(76, 116, 0, 0);
            // var canvas = htmlC.getCanvas();
            // canvas.toTempFilePath({
            // 	x: 0,
            // 	y: 0,
            // 	width: 50,
            // 	height: 40,
            // 	destWidth: 50,
            // 	destHeight: 40,
            // 	success: function (res) {
            // 		wx.shareAppMessage({
            // 			imageUrl: res.tempFilePath,
            // 			title: "string"
            // 		})
            // 	}
            // });
        };
        /* 分享到群 */
        gameBottom.prototype.shareToInvite2 = function () {
            GameMain.app.mShares++;
            GameMain.shareIndex = 2;
            GameMain.app.mShareCurrentTime = GameMain.app.getCurrTime();
            var shareTitle = "这局太难了，听说只有1%完成了。";
            var shareImg = "login/share.jpg";
            var surl = "3";
            if (GameMain.app.mWX.shareUrl.length > 0) {
                shareTitle = GameMain.app.mWX.shareUrl[0]["title"];
                shareImg = GameMain.app.mWX.shareUrl[0]["url"];
                // surl = GameMain.app.mWX.shareUrl[2]["id"];
            }
            wx.shareAppMessage({
                title: shareTitle,
                imageUrl: shareImg,
            });
            // wxCore.uo.commitTotle("icon_page", { "create_time": "", "session_id": "", "is_new": "", "icon_type": 'Show_Tips' });
        };
        return gameBottom;
    }());
    pokerUI.gameBottom = gameBottom;
})(pokerUI || (pokerUI = {}));
//# sourceMappingURL=gameBottom.js.map
/**
* name
*/
var pokerUI;
(function (pokerUI) {
    var ConfirmShowCard = /** @class */ (function () {
        function ConfirmShowCard() {
            var a = 'a';
            if (a == 'a')
                a = 'a';
            Laya.loader.load([{ url: "res/atlas/UI.atlas", type: Laya.Loader.ATLAS }], Laya.Handler.create(this, this.onUILoad));
        }
        ConfirmShowCard.prototype.onUILoad = function () {
            this.confirmShowCardUI = new ui.poker.ConfirmShowCardUI();
            Laya.stage.addChild(this.confirmShowCardUI);
            this.confirmShowCardUI.visible = false;
            this.confirmShowCardUI.GoldUse.clickHandler = new Laya.Handler(this, this.onClickGoldUse);
            this.confirmShowCardUI.videoUse.clickHandler = new Laya.Handler(this, this.onClickVideoUse);
            this.confirmShowCardUI.CloseBTN.on(Laya.Event.CLICK, this, this.onClickCLoseBTN);
        };
        //点击金币使用
        ConfirmShowCard.prototype.onClickGoldUse = function () {
            GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.onClickGoldUseShowCard);
        };
        //点击看视频使用
        ConfirmShowCard.prototype.onClickVideoUse = function () {
            //------------广告方法
            //--------------广告观看完毕
            //成功后调用这个方法就可以，全局可用
            GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.ShowHiddenCard);
        };
        //关闭UI
        ConfirmShowCard.prototype.onClickCLoseBTN = function () {
            this.confirmShowCardUI.visible = false;
        };
        return ConfirmShowCard;
    }());
    pokerUI.ConfirmShowCard = ConfirmShowCard;
})(pokerUI || (pokerUI = {}));
//# sourceMappingURL=ConfirmShowCard.js.map
/**
* name
*/
var pokerUI;
(function (pokerUI) {
    var ConfirmAutoPlay = /** @class */ (function () {
        function ConfirmAutoPlay() {
            var a = 'a';
            if (a == 'a')
                a = 'a';
            Laya.loader.load([{ url: "res/atlas/UI.atlas", type: Laya.Loader.ATLAS }], Laya.Handler.create(this, this.onUILoad));
        }
        ConfirmAutoPlay.prototype.onUILoad = function () {
            this.confirmAutoPlayUI = new ui.poker.ConfirmAutoPlayUI();
            Laya.stage.addChild(this.confirmAutoPlayUI);
            this.confirmAutoPlayUI.visible = false;
            this.confirmAutoPlayUI.shareWechat.on(Laya.Event.CLICK, this, this.onClickShareWechat);
            this.confirmAutoPlayUI.CloseBTN.on(Laya.Event.CLICK, this, this.onClickCLoseBTN);
        };
        //点击分享到微信
        ConfirmAutoPlay.prototype.onClickShareWechat = function () {
            //------------分享方法
            //--------------分享完毕
            //分享成功后调用这个方法就可以，全局可用
            // GameMain.app.mShares++;
            // GameMain.shareIndex = 3;
            // GameMain.app.mShareCurrentTime = GameMain.app.getCurrTime();
            // var shareTitle = "这局太难了，听说只有1%完成了。";
            // var shareImg = "login/share.jpg";
            // var surl = "2";
            // if (GameMain.app.mWX.shareUrl.length > 0) {
            // 	shareTitle = GameMain.app.mWX.shareUrl[0]["title"];
            // 	shareImg = GameMain.app.mWX.shareUrl[0]["url"];
            // 	// surl = GameMain.app.mWX.shareUrl[0]["id"];
            // }
            // wx.shareAppMessage({
            // 	title: shareTitle,
            // 	imageUrl: shareImg,
            // 	// query: "uid=" + wxCore.uo.getUserID() + "&id=0&type=0&map=0&surl=" + surl
            // });
            GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.onShareWeChatSuccesse);
        };
        //关闭UI的时候，需要外面激活点击自动完成的按钮
        ConfirmAutoPlay.prototype.onClickCLoseBTN = function () {
            this.confirmAutoPlayUI.visible = false;
            GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.onClickCLoseConfirmAutoPlayUI);
        };
        return ConfirmAutoPlay;
    }());
    pokerUI.ConfirmAutoPlay = ConfirmAutoPlay;
})(pokerUI || (pokerUI = {}));
//# sourceMappingURL=ConfirmAutoPlay.js.map
/**
* name
*/
var pokerUI;
(function (pokerUI) {
    var challenge = /** @class */ (function () {
        function challenge() {
            this.selectDateStr = "";
            this.SelectedDayCell = null;
            this.IsInit = false;
            this.shoingTimeStemp = 0;
            this.monthNumCanShow = 4; //最多显示4个月的
            Laya.loader.load([{ url: "res/atlas/UI.atlas", type: Laya.Loader.ATLAS }], Laya.Handler.create(this, this.onUILoad));
        }
        challenge.prototype.onUILoad = function () {
            this.challengeUI = new ui.poker.challengeUI();
            Laya.stage.addChild(this.challengeUI);
            this.challengeUI.visible = false;
            this.initWeekName();
            this.initButtonClick();
            this.IsInit = true;
            this.FlushData();
        };
        challenge.prototype.initButtonClick = function () {
            this.challengeUI.preMonth.clickHandler = new Laya.Handler(this, this.ClickPreMonth);
            this.challengeUI.nextMonth.clickHandler = new Laya.Handler(this, this.ClickNextMonth);
            this.challengeUI.startChallenge.clickHandler = new Laya.Handler(this, this.ClickStartChallenge);
            this.challengeUI.CloseButton.on(Laya.Event.CLICK, this, this.CloseUI);
            this.challengeUI.CloseButton2.on(Laya.Event.CLICK, this, this.CloseUI);
        };
        challenge.prototype.CloseUI = function () {
            this.challengeUI.visible = false;
        };
        challenge.prototype.SetVisible = function (isVisible) {
            this.challengeUI.visible = isVisible;
        };
        challenge.GetDateString = function (date) {
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var day = date.getDate();
            var num = month;
            var monthStr = month >= 10 ? num.toString() : "0" + num.toString();
            num = day;
            var dayStr = day >= 10 ? num.toString() : "0" + num.toString();
            return year.toString() + monthStr + dayStr;
        };
        challenge.prototype.onClickDays = function (cell, dayNum) {
            // var data=new Date();
            // var todaysMonth=data.getMonth();
            // var todaysDay=data.getDate();
            //  data.setTime(this.shoingTimeStemp);
            //  if(data.getMonth()==todaysMonth)
            //  {
            // 	 if(dayNum>todaysDay)
            // 	 {
            // 		 return;
            // 	 }
            //  }
            //  if(this.SelectedDayCell!=null)
            //  {
            // 	 var spr=<Laya.Sprite>this.SelectedDayCell.getChildByName("selectIMG");
            // 	 spr.visible=false;
            //  }
            //  this.SelectedDayCell=cell;
            // this.SetSelectDataString(this.shoingTimeStemp,dayNum);
            // var spr=<Laya.Sprite>cell.getChildByName("selectIMG");
            // spr.visible=true;
            // //this.challengeUI.selectIMG.removeSelf();
            // //this.challengeUI.selectIMG.pos(0,0);
            // //cell.addChild(this.challengeUI.selectIMG);
            // pokerGame.SoundPlayer.PlaySound(1);
        };
        challenge.prototype.SetSelectDataString = function (date) {
            this.selectDateStr = challenge.GetDateString(date);
            //console.debug("SetSelectDataString str="+this.selectDateStr);
        };
        challenge.prototype.FlushButtonVisible = function () {
            this.challengeUI.preMonth.visible = this.IsMonthPluseVisible(-1);
            this.challengeUI.nextMonth.visible = this.IsMonthPluseVisible(1);
        };
        challenge.prototype.IsMonthPluseVisible = function (pluseNum) {
            var date = new Date();
            var yearToday = date.getFullYear();
            var monthToday = date.getMonth() + 1;
            date.setTime(this.shoingTimeStemp);
            date.setMonth(date.getMonth() + pluseNum);
            var yearPluse = date.getFullYear();
            var monthPluse = date.getMonth() + 1;
            if (yearPluse != yearToday) {
                if (yearPluse + 1 == yearToday) {
                    return (monthToday + 12 - monthPluse) <= this.monthNumCanShow;
                }
                else {
                    return false;
                }
            }
            if (monthPluse <= monthToday) {
                return (monthToday - monthPluse) <= this.monthNumCanShow;
            }
            return false;
        };
        challenge.prototype.ClickStartChallenge = function () {
            if (this.selectDateStr != null && this.selectDateStr.length > 0) {
                challenge.selectChallengeDateStr = this.selectDateStr;
                this.challengeUI.visible = false;
                GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClickNewGame);
            }
            pokerGame.SoundPlayer.PlaySound(1);
        };
        challenge.prototype.FlushChallengeDateStr = function () {
            if (challenge.selectChallengeDateStr != null && challenge.length > 0) {
                challenge.nowChallengeDateStr = challenge.selectChallengeDateStr;
                challenge.selectChallengeDateStr = null;
            }
            else {
                challenge.nowChallengeDateStr = null;
            }
        };
        challenge.prototype.ClickPreMonth = function () {
            if (this.shoingTimeStemp == 0) {
                this.FlushData();
            }
            else {
                var date = new Date();
                date.setTime(this.shoingTimeStemp);
                date.setMonth(date.getMonth() - 1);
                this.FlushDateList(date);
            }
        };
        challenge.prototype.ClickNextMonth = function () {
            if (this.shoingTimeStemp == 0) {
                this.FlushData();
            }
            else {
                var date = new Date();
                date.setTime(this.shoingTimeStemp);
                date.setMonth(date.getMonth() + 1);
                this.FlushDateList(date);
            }
        };
        challenge.prototype.initWeekName = function () {
            var cells = this.challengeUI.weekName.cells;
            for (var i = 0; i < cells.length; i++) {
                this.SetWeekCell(cells[i], i + 1);
            }
        };
        challenge.prototype.SetWeekCell = function (cell, posNum) {
            //var doneIMg= <Laya.Sprite>cell.getChildByName("doneImg");
            //doneIMg.visible=false;
            var weekName = cell.getChildByName("text");
            switch (posNum) {
                case 1:
                    weekName.text = "日";
                    break;
                case 2:
                    weekName.text = "一";
                    break;
                case 3:
                    weekName.text = "二";
                    break;
                case 4:
                    weekName.text = "三";
                    break;
                case 5:
                    weekName.text = "四";
                    break;
                case 6:
                    weekName.text = "五";
                    break;
                case 7:
                    weekName.text = "六";
                    break;
            }
        };
        challenge.prototype.FlushData = function () {
            var data = new Date();
            this.SetTodayText(data);
            var todaysDay = data.getDate();
            this.FlushDateList(data);
            //var day=data.getDay();
        };
        challenge.prototype.GetMonthString = function (month) {
            switch (month) {
                case 1:
                    return "一月";
                case 2:
                    return "二月";
                case 3:
                    return "三月";
                case 4:
                    return "四月";
                case 5:
                    return "五月";
                case 6:
                    return "六月";
                case 7:
                    return "七月";
                case 8:
                    return "八月";
                case 9:
                    return "九月";
                case 10:
                    return "十月";
                case 11:
                    return "十一月";
                case 12:
                    return "十二月";
            }
        };
        challenge.prototype.FlushDateList = function (date) {
            this.shoingTimeStemp = date.valueOf();
            var cells = this.challengeUI.days.cells;
            var startMonth = date.getMonth();
            this.challengeUI.monthText.text = this.GetMonthString(startMonth + 1); //.toString();
            date.setDate(1);
            var startDayOfWeek = date.getDay(); //获得第一天的周日1-7
            var todaysData = new Date();
            this.SetSelectDataString(todaysData);
            var isTodayDone = false;
            for (var i = 0; i < cells.length; i++) {
                var cell = cells[i];
                var clickImg = cell.getChildByName("ClickIMG");
                clickImg.offAll();
                if (i < startDayOfWeek) {
                    cell.visible = false;
                    continue;
                }
                cell.visible = true;
                var dayIndex = i - startDayOfWeek;
                var dayNum = dayIndex + 1;
                date.setDate(dayNum);
                if (date.getMonth() != startMonth) {
                    cell.visible = false;
                    continue;
                }
                var IsSelect = this.IsSameDay(todaysData, date);
                var selectIMG = cell.getChildByName("selectIMG");
                selectIMG.visible = IsSelect;
                if (this.userdata != null && this.userdata.IsChallengePassed(challenge.GetDateString(date))) {
                    var doneImg = cell.getChildByName("doneImg");
                    doneImg.visible = true;
                    var dayName = cell.getChildByName("text");
                    dayName.visible = false;
                    //dayName.offAll();
                    //doneImg.on(Laya.Event.CLICK,this,this.onClickDays,[dayNum]);
                    if (IsSelect) {
                        isTodayDone = true;
                    }
                }
                else {
                    var doneImg = cell.getChildByName("doneImg");
                    doneImg.visible = false;
                    var dayName = cell.getChildByName("text");
                    dayName.visible = true;
                    dayName.text = (dayNum).toString();
                }
            }
            this.challengeUI.startChallenge.disabled = isTodayDone;
            this.challengeUI.startChallenge.label = isTodayDone ? "已挑战" : "开始挑战";
            //var date=date.getDate();
            this.FlushButtonVisible();
        };
        challenge.prototype.IsSameDay = function (date1, date2) {
            if (date1.getFullYear() != date2.getFullYear()) {
                return false;
            }
            if (date1.getMonth() != date2.getMonth()) {
                return false;
            }
            if (date1.getDate() != date2.getDate()) {
                return false;
            }
            return true;
        };
        challenge.prototype.SetTodayText = function (date) {
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var day = date.getDate();
            this.challengeUI.today.text = year + "年" + month + "月" + day + "日";
        };
        challenge.prototype.FlushUserData = function (userdata) {
            this.userdata = userdata;
            if (this.IsInit) {
                this.FlushData();
            }
        };
        challenge.selectChallengeDateStr = ""; //准备挑战的
        challenge.nowChallengeDateStr = ""; //正在挑战的
        return challenge;
    }());
    pokerUI.challenge = challenge;
})(pokerUI || (pokerUI = {}));
//# sourceMappingURL=challenge.js.map
/*
* name;
*/
var ShopSetting = /** @class */ (function () {
    function ShopSetting() {
    }
    ShopSetting.shopListArray = new Array();
    ShopSetting.nowUseBg = null; //现在用的背景
    ShopSetting.nowCardBack = null; //现在用的卡背
    ShopSetting.nowcoin = 0; //现在剩余的金币
    ShopSetting.nowPpower = null; //体力
    ShopSetting.nowPowerMax = null; //最大体力
    ShopSetting.nowPowerConsume = null; //消耗体力
    ShopSetting.powerStyle = null; //体力消耗方式
    ShopSetting.powerRecoverTime = null; //体力恢复的总时间
    ShopSetting.powerLabel = ''; //体力恢复的时间
    ShopSetting.powerConsumeTime = null; //体力消耗的当前时间
    ShopSetting.LevelSK = [
        { 'NAME': '乞丐', 'LIMIT': 0 },
        { 'NAME': '棋牌老头', 'LIMIT': 3 },
        { 'NAME': '老农', 'LIMIT': 5 },
        { 'NAME': '地痞', 'LIMIT': 7 },
        { 'NAME': '滑头', 'LIMIT': 9 },
        { 'NAME': '新星', 'LIMIT': 12 },
        { 'NAME': '包租婆', 'LIMIT': 15 },
        { 'NAME': '女神', 'LIMIT': 18 },
        { 'NAME': '老头', 'LIMIT': 22 },
        { 'NAME': '赌徒', 'LIMIT': 27 },
        { 'NAME': '赌侠', 'LIMIT': 32 },
        { 'NAME': '赌王', 'LIMIT': 38 },
        { 'NAME': '赌神', 'LIMIT': 44 },
        { 'NAME': '赌尊', 'LIMIT': 50 },
        { 'NAME': '赌仙', 'LIMIT': 57 },
        { 'NAME': '赌圣', 'LIMIT': 65 },
        { 'NAME': '赌帝', 'LIMIT': 73 },
        { 'NAME': '千王之王', 'LIMIT': 81 },
        { 'NAME': '神之手', 'LIMIT': 90 },
        { 'NAME': '世外高人', 'LIMIT': 100 },
    ];
    ShopSetting.LevelNow = 0;
    return ShopSetting;
}());
//# sourceMappingURL=ShopSetting.js.map
/**
* 用户数据 第一次登陆的时候需要与服务器数据 同步
*/
var pokerGame;
(function (pokerGame) {
    var UserData = /** @class */ (function () {
        function UserData() {
            //---------------留的接口
            this.defaultGold = 100; //初始金币值
            this.showCardNeedGold = 10; //明牌需要的金币
            this.compliteOneGameGoldGain = 5; //完成一局获得的金币
            this.Gold = 0; //金币值
            this.purchasedItemIDList = new laya.utils.Dictionary(); //已购买的物品ID字典
            this.challengeDataMap = new laya.utils.Dictionary(); //挑战模式的年月日储存
            this.isFirstPlay = true; //是否为第一次玩 (开启新手指引)
            this.isSoundOn = true; //声音打开
            this.isTimerOn = true; //计时器打开
            this.isLeftHand = false; //左手习惯是否打开
            this.isThreeCardOnce = false; //一次发三张
            this.isVigasMode = false; //维加斯模式
            //this.challengeDataMap.set("20181102","20181102");
            this.ReadLocalData();
            var a = 'a';
            if (a == 'a')
                a = 'a';
        }
        UserData.prototype.SetGold = function (setNum) {
            this.Gold = setNum;
            Laya.LocalStorage.setItem("UserGold", this.Gold.toString());
            GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.UpdateGoldUI);
        };
        UserData.prototype.IsHaveGold = function (NumCheck) {
            return this.Gold >= NumCheck;
        };
        UserData.prototype.AddGold = function (addNum) {
            this.Gold += addNum;
            if (this.Gold < 0) {
                this.Gold = 0;
            }
            Laya.LocalStorage.setItem("UserGold", this.Gold.toString());
            GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.UpdateGoldUI);
        };
        //初始化用户数据
        UserData.prototype.LoadFirstPlayData = function () {
            this.SetGold(this.defaultGold);
            Laya.LocalStorage.setItem("isFirstPlay", "1");
            this.LoadGameSetting();
        };
        UserData.prototype.ReadLocalData = function () {
            var firstPlayString = Laya.LocalStorage.getItem("isFirstPlay");
            if (firstPlayString == null || firstPlayString == "1") {
                this.isFirstPlay = true;
                this.LoadFirstPlayData();
                return;
            }
            else {
                var firstPlayvalue = parseInt(firstPlayString);
                if (isNaN(firstPlayvalue)) {
                    this.isFirstPlay = true;
                    Laya.LocalStorage.setItem("isFirstPlay", "1");
                }
                else {
                    this.isFirstPlay = false;
                    Laya.LocalStorage.setItem("isFirstPlay", "0");
                }
            }
            this.UsingItemPage1 = Laya.LocalStorage.getItem("UsingItemPage1");
            this.UsingItemPage2 = Laya.LocalStorage.getItem("UsingItemPage2");
            this.UsingItemPage3 = Laya.LocalStorage.getItem("UsingItemPage3");
            var goldLocal = Laya.LocalStorage.getItem("UserGold");
            if (goldLocal != null) {
                var gold = parseInt(goldLocal);
                if (isNaN(gold) || gold == null) {
                    this.SetGold(this.defaultGold); //初始值
                }
                else {
                    this.Gold = gold;
                }
            }
            else {
                this.SetGold(this.defaultGold); //初始值
            }
            this.LoadChallengeDataMap();
            this.LoadPurchasedItemIDList();
            this.LoadGameSetting();
        };
        UserData.prototype.SetUsingItem = function (page, IDStr) {
            switch (page) {
                case 1:
                    this.UsingItemPage1 = IDStr;
                    Laya.LocalStorage.setItem("UsingItemPage1", this.UsingItemPage1);
                    this.TryingItemPage1 = null;
                    break;
                case 2:
                    this.UsingItemPage2 = IDStr;
                    Laya.LocalStorage.setItem("UsingItemPage2", this.UsingItemPage2);
                    this.TryingItemPage2 = null;
                    break;
                case 3:
                    this.UsingItemPage3 = IDStr;
                    Laya.LocalStorage.setItem("UsingItemPage3", this.UsingItemPage3);
                    this.TryingItemPage3 = null;
                    break;
            }
        };
        UserData.prototype.SetFirstPlay = function (IsFirst) {
            this.isFirstPlay = IsFirst;
            var strValue = IsFirst ? "1" : "0";
            Laya.LocalStorage.setItem("isFirstPlay", strValue);
        };
        //清理试用
        UserData.prototype.ClearTry = function () {
            this.TryingItemPage1 = null;
            this.TryingItemPage2 = null;
            this.TryingItemPage3 = null;
            //	console.debug("ClearTry");
        };
        //是否已购买
        UserData.prototype.IsPurchasedItemID = function (itemID) {
            if (this.purchasedItemIDList.get(itemID) != null) {
                return true;
            }
            else if (itemID == "10001" || itemID == "20001" || itemID == "30001") {
                return true;
            }
            return false;
        };
        UserData.prototype.IsNullData = function (dataStr) {
            return dataStr == null || dataStr.length == 0;
        };
        //正在起作用的道具
        UserData.prototype.GetAplayItemID = function (page) {
            switch (page) {
                case 1:
                    if (!this.IsNullData(this.TryingItemPage1)) {
                        return this.TryingItemPage1;
                    }
                    else if (!this.IsNullData(this.UsingItemPage1)) {
                        return this.UsingItemPage1;
                    }
                    else {
                        return "10001";
                    }
                case 2:
                    if (!this.IsNullData(this.TryingItemPage2)) {
                        return this.TryingItemPage2;
                    }
                    else if (!this.IsNullData(this.UsingItemPage2)) {
                        return this.UsingItemPage2;
                    }
                    else {
                        return "20001";
                    }
                case 3:
                    if (!this.IsNullData(this.TryingItemPage3)) {
                        return this.TryingItemPage3;
                    }
                    else if (!this.IsNullData(this.UsingItemPage3)) {
                        return this.UsingItemPage3;
                    }
                    else {
                        if (GameMain.app.mWX.fhOnoff == 0) {
                            return "30008";
                        }
                        else {
                            return "30001";
                        }
                    }
            }
            return "";
        };
        //使用物品
        UserData.prototype.UseItem = function (itemdata) {
            this.SetUsingItem(itemdata.page, itemdata.ItemID.toString());
        };
        //试用物品
        UserData.prototype.TryItem = function (itemdata) {
            switch (itemdata.page) {
                case 1:
                    this.TryingItemPage1 = itemdata.ItemID;
                    break;
                case 2:
                    this.TryingItemPage2 = itemdata.ItemID;
                    break;
                case 3:
                    this.TryingItemPage3 = itemdata.ItemID;
                    break;
            }
        };
        UserData.prototype.AddPurchasedItemID = function (itemID) {
            if (this.purchasedItemIDList.get(itemID) == null) {
                this.purchasedItemIDList.set(itemID, itemID);
            }
            this.SavePurchasedItemIDList();
        };
        UserData.prototype.SavePurchasedItemIDList = function () {
            Laya.LocalStorage.setJSON("purchasedItemIDList", this.purchasedItemIDList);
        };
        UserData.prototype.LoadPurchasedItemIDList = function () {
            var mapJson = Laya.LocalStorage.getJSON("purchasedItemIDList");
            if (mapJson != null) {
                var keysArray = mapJson["_keys"];
                for (var i in keysArray) {
                    var str = keysArray[i];
                    this.purchasedItemIDList.set(str, str);
                }
            }
        };
        UserData.prototype.IsChallengePassed = function (datestr) {
            //var str=pokerUI.challenge.GetDateString(date);//.toDateString();
            return this.challengeDataMap.get(datestr) != null;
        };
        UserData.prototype.addTochallengeMap = function (datestr) {
            //var str=pokerUI.challenge.GetDateString(date);//date.toDateString();
            if (this.challengeDataMap.get(datestr) == null) {
                this.challengeDataMap.set(datestr, datestr);
            }
            this.SaveChallengeDataMap();
        };
        UserData.prototype.LoadChallengeDataMap = function () {
            //this.challengeDataMap.clear();
            var mapJson = Laya.LocalStorage.getJSON("ChallengeDataMap");
            if (mapJson != null) {
                var keysArray = mapJson["_keys"];
                for (var i in keysArray) {
                    var str = keysArray[i];
                    this.challengeDataMap.set(str, str);
                }
            }
        };
        UserData.prototype.SaveChallengeDataMap = function () {
            Laya.LocalStorage.setJSON("ChallengeDataMap", this.challengeDataMap);
            //	var mapJson:JSON= <JSON>Laya.LocalStorage.getJSON("ChallengeDataMap");
        };
        UserData.prototype.GetSettingIntData = function (key, defaultData) {
            var tRet = 0;
            var dataLocal = Laya.LocalStorage.getItem(key);
            if (dataLocal != null) {
                var tpNum = parseInt(dataLocal);
                if (isNaN(tpNum) || tpNum == null) {
                    tRet = defaultData;
                }
                else {
                    tRet = tpNum;
                }
            }
            else {
                tRet = defaultData;
            }
            return tRet;
        };
        // public isSoundOn: boolean = true;//声音打开
        // public isTimerOn: boolean = true;//计时器打开
        // public isLeftHand: boolean = false;//左手习惯是否打开
        // public isThreeCardOnce: boolean = false;//一次发三张
        // public isVigasMode: boolean = false;//维加斯模式
        UserData.prototype.LoadGameSetting = function () {
            this.isSoundOn = this.GetSettingIntData("isSoundOn", 1) == 1;
            this.isTimerOn = this.GetSettingIntData("isTimerOn", 1) == 1;
            this.isLeftHand = this.GetSettingIntData("isLeftHand", 0) == 1;
            this.isThreeCardOnce = this.GetSettingIntData("isThreeCardOnce", 0) == 1;
            this.isVigasMode = this.GetSettingIntData("isVigasMode", 0) == 1;
        };
        UserData.prototype.SetSoundOn = function (isOn) {
            this.isSoundOn = isOn;
            Laya.LocalStorage.setItem("isSoundOn", this.isSoundOn ? "1" : "0");
            // if (!isOn) {
            // 	Laya.SoundManager.stopMusic();
            // } else {
            // 	pokerGame.SoundPlayer.PlayMusic(18);
            // }
        };
        UserData.prototype.SetTimerOn = function (isOn) {
            this.isTimerOn = isOn;
            Laya.LocalStorage.setItem("isTimerOn", this.isTimerOn ? "1" : "0");
        };
        UserData.prototype.SetLeftHand = function (isOn) {
            this.isLeftHand = isOn;
            Laya.LocalStorage.setItem("isLeftHand", this.isLeftHand ? "1" : "0");
        };
        UserData.prototype.SetThreeCardOnce = function (isOn) {
            this.isThreeCardOnce = isOn;
            Laya.LocalStorage.setItem("isThreeCardOnce", this.isThreeCardOnce ? "1" : "0");
        };
        UserData.prototype.SetVigasMode = function (isOn) {
            this.isVigasMode = isOn;
            Laya.LocalStorage.setItem("isVigasMode", this.isVigasMode ? "1" : "0");
        };
        return UserData;
    }());
    pokerGame.UserData = UserData;
})(pokerGame || (pokerGame = {}));
//# sourceMappingURL=UserData.js.map
/**
* name
*/
var pokerGame;
(function (pokerGame) {
    var tutorialCard = /** @class */ (function () {
        function tutorialCard(posIndex, type, num) {
            this.posIndex = posIndex;
            this.pokertype = type;
            this.pokernum = num;
            var a = 'a';
            if (a == 'a')
                a = 'a';
        }
        return tutorialCard;
    }());
    var TutorialCard = /** @class */ (function () {
        function TutorialCard() {
            //club = 1, //梅花
            //diamond =2,//方块
            //heart =3,//红桃
            //spade =4, //黑桃
            this.tutorialList = new Array();
            this.AddToTutorialCardArray(this.GetPosIndexByLine(1, 0), PokerType.club, 7); //梅花7
            this.AddToTutorialCardArray(this.GetPosIndexByLine(2, 0), PokerType.spade, 5); //黑桃5
            this.AddToTutorialCardArray(this.GetPosIndexByLine(3, 0), PokerType.diamond, 2); //方块2
            this.AddToTutorialCardArray(this.GetPosIndexByLine(3, 1), PokerType.diamond, 3); //方块3
            this.AddToTutorialCardArray(this.GetPosIndexByLine(3, 2), PokerType.heart, 12); //红桃Q
            this.AddToTutorialCardArray(this.GetPosIndexByLine(4, 0), PokerType.heart, 8); //红桃8
            this.AddToTutorialCardArray(this.GetPosIndexByLine(5, 0), PokerType.diamond, 1); //方块1
            this.AddToTutorialCardArray(this.GetPosIndexByLine(5, 1), PokerType.spade, 8); //黑桃8
            this.AddToTutorialCardArray(this.GetPosIndexByLine(5, 2), PokerType.club, 3); //梅花3
            this.AddToTutorialCardArray(this.GetPosIndexByLine(6, 0), PokerType.heart, 13); //红桃k
            this.AddToTutorialCardArray(this.GetPosIndexByLine(6, 1), PokerType.club, 4); //梅花4
            this.AddToTutorialCardArray(this.GetPosIndexByLine(7, 0), PokerType.heart, 10); //红桃10
            this.AddToTutorialCardArray(this.GetPosIndexByStartDeck(0), PokerType.club, 2); //梅花2
            this.AddToTutorialCardArray(this.GetPosIndexByStartDeck(1), PokerType.spade, 9); //黑桃9
        }
        TutorialCard.prototype.GetPosIndexByStartDeck = function (StartDeckIndex) {
            var PreCardNum = this.GetPreCardNumByLineNum(8); //前置卡片
            var index = 51 - PreCardNum - StartDeckIndex;
            return index;
        };
        TutorialCard.prototype.AddToTutorialCardArray = function (posIndex, type, num) {
            var card = new tutorialCard(posIndex, type, num);
            this.tutorialList.push(card);
        };
        TutorialCard.prototype.GetPosIndexByLine = function (lineNum, LineIndex) {
            var PreCardNum = this.GetPreCardNumByLineNum(lineNum); //前置卡片
            var index = 51 - PreCardNum - LineIndex;
            return index;
        };
        TutorialCard.prototype.GetPreCardNumByLineNum = function (lineNum) {
            var count = 0;
            for (var i = 0; i < lineNum; i++) {
                count += (i);
            }
            return count;
        };
        TutorialCard.prototype.SetTutorialCard = function (deckData) {
            var indexMap = new laya.utils.Dictionary();
            deckData.AllCardBackToStart();
            deckData.StartCard.data.ShuffleWithTime(3); //洗牌三次
            var pokerList = deckData.StartCard.data.pokerList;
            //建立索引映射表
            for (var i = 0; i < pokerList.length; i++) {
                var tpoker = pokerList[i];
                indexMap.set(tpoker.data.Getkey(), i);
            }
            for (var i = 0; i < this.tutorialList.length; i++) {
                var ttCard = this.tutorialList[i];
                var keytt = poker.pokerdata.Getkey(ttCard.pokertype, ttCard.pokernum);
                var indexNow = indexMap.get(keytt);
                var indexToSet = ttCard.posIndex;
                var cardFromTT = pokerList[indexNow];
                var cardToChange = pokerList[indexToSet];
                pokerList[indexNow] = cardToChange; //交换一下位置
                pokerList[indexToSet] = cardFromTT;
                var keyToChange = cardToChange.data.Getkey(); //映射表交换更新
                indexMap.set(keytt, indexToSet);
                indexMap.set(keyToChange, indexNow);
            }
            //deckData.
        };
        return TutorialCard;
    }());
    pokerGame.TutorialCard = TutorialCard;
})(pokerGame || (pokerGame = {}));
//# sourceMappingURL=TutorialCard.js.map
/**
* name
*/
var pokerGame;
(function (pokerGame) {
    var SoundPlayer = /** @class */ (function () {
        function SoundPlayer(userda) {
            var a = 'a';
            if (a == 'a')
                a = 'a';
            this.userda = userda;
            // Laya.loader.load(this.res, Laya.Handler.create(this, this.onLoadComplite, null, false));
            GameGlobal.Dispatcher.addEvent(GameGlobal.EVENT.PlayMusic, this, this.PlayMusic);
            GameGlobal.Dispatcher.addEvent(GameGlobal.EVENT.PlaySound, this, this.PlaySound);
        }
        SoundPlayer.prototype.onLoadComplite = function () {
        };
        SoundPlayer.prototype.PlayMusic = function (index) {
            if (this.userda.isSoundOn) {
                // ////console.log('this.res[index]',index);
                Laya.SoundManager.playMusic(GameMain.app.soundres[index]["url"], 0);
            }
        };
        SoundPlayer.prototype.PlaySound = function (index) {
            if (this.userda.isSoundOn) {
                // ////console.log('this.res[index]',this.res[index][`url`]);
                Laya.SoundManager.playSound(GameMain.app.soundres[index]["url"], 1);
            }
        };
        //pokerGame.SoundPlayer.PlaySound(0);
        //pokerGame.SoundPlayer.PlaySound(1);
        SoundPlayer.PlaySound = function (index) {
            GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.PlaySound, [index]);
        };
        SoundPlayer.PlayMusic = function (index) {
            GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.PlayMusic, [index]);
        };
        return SoundPlayer;
    }());
    pokerGame.SoundPlayer = SoundPlayer;
})(pokerGame || (pokerGame = {}));
//# sourceMappingURL=SoundPlayer.js.map
/**
* name
*/
var pokerGame;
(function (pokerGame) {
    var pokerTipsData = /** @class */ (function () {
        function pokerTipsData() {
        }
        return pokerTipsData;
    }());
    pokerGame.pokerTipsData = pokerTipsData;
})(pokerGame || (pokerGame = {}));
//# sourceMappingURL=pokerTipsData.js.map
/**
*  牌桌数据

*/
var pokerGame;
(function (pokerGame) {
    var pokerTableData = /** @class */ (function () {
        function pokerTableData() {
            this.timerCountKeep = 0; //keep数据的时候，记录时间
            this.cardDecksData = new pokerGame.CardDeckData();
            this.cardControls = new pokerGame.CardControls();
            this.cardTips = new pokerGame.CardTips();
            this.cardControls.deckData = this.cardDecksData;
            this.cardTips.deckData = this.cardDecksData;
        }
        pokerTableData.prototype.AddToTable = function (table, tableTop, tableBottom) {
            this.cardDecksData.AddToTable(table);
            this.cardControls.SetTableClick(table, tableTop, tableBottom);
        };
        pokerTableData.prototype.RemoveFromTable = function () {
            this.cardDecksData.table.offAll();
            this.cardDecksData.RemoveFromTable();
        };
        return pokerTableData;
    }());
    pokerGame.pokerTableData = pokerTableData;
})(pokerGame || (pokerGame = {}));
//# sourceMappingURL=pokerTableData.js.map
/**
* 移动中的poker的数据结构体
*/
var pokerGame;
(function (pokerGame) {
    var MovingType;
    (function (MovingType) {
        MovingType[MovingType["clickMove"] = 0] = "clickMove";
        MovingType[MovingType["backStep"] = 1] = "backStep";
        MovingType[MovingType["showHiddenCard"] = 2] = "showHiddenCard";
        MovingType[MovingType["autoBackToDeck"] = 3] = "autoBackToDeck"; //自动回4个A的牌堆中
    })(MovingType = pokerGame.MovingType || (pokerGame.MovingType = {}));
    var pokerMovingData = /** @class */ (function () {
        function pokerMovingData() {
            this.DragFromNum = 0; //正在拖动的组数字下标
            this.DragFromDeckBackToFront = false; //拖进来的时候的那张卡是不是从背面 翻过来的
            this.DragToNum = 0; //正在拖动的组数字下标
            this.IsNeedAddToStepRecord = false; //是否需要加入到记录中，用于回撤
            this.moveType = MovingType.clickMove; //移动类型
            var a = 'a';
            if (a == 'a')
                a = 'a';
        }
        pokerMovingData.prototype.SetAutoMoveUPThreeCardLastCard = function (deckData) {
            this.DragingGroup.render.x = 0;
            this.DragingGroup.render.y = 0;
            deckData.table.LineMove.x = deckData.table.ThreeCard.x;
            deckData.table.LineMove.y = deckData.table.ThreeCard.y;
            var pGroup = deckData.ThreeCard.data.SplitePokerGroupByNum(1);
            this.DragingGroup.data.Concat(pGroup);
            deckData.ThreeCard.FlushRender();
            // ////console.log('DragingGroup', this.DragingGroup);
            //this.dragData.DragingGroup.render.renderMode;
            this.DragingGroup.render.renderMode = poker.PokerGroupRenderMode.lastOneCard;
            this.DragingGroup.FlushRender();
            this.DragingGroup.render.removeSelf();
            // ////console.log('this.DragingGroup.render', this.DragingGroup.render);
            deckData.table.LineMove.addChild(this.DragingGroup.render);
            this.DragFromGroupType = pokerGame.pokerDeckType.threeCardDeck;
            this.DragFromNum = 0;
            this.DragFromGroupIndex = deckData.ThreeCard.data.pokerList.length;
            this.moveType = MovingType.autoBackToDeck; //移动类型
        };
        pokerMovingData.prototype.SetAutoMoveUPThreeCardLastCard2 = function (deckData, z) {
            this.DragingGroup.render.x = 0;
            this.DragingGroup.render.y = 0;
            deckData.table.LineMove.x = deckData.table.ThreeCard.x;
            deckData.table.LineMove.y = deckData.table.ThreeCard.y;
            var pGroup = deckData.ThreeCard.data.SplitePokerGroupByNum2(z);
            // ////console.log('pGroup', pGroup, z);
            this.DragingGroup.data.Concat(pGroup);
            deckData.ThreeCard.FlushRender();
            // ////console.log('DragingGroup', this.DragingGroup);
            //this.dragData.DragingGroup.render.renderMode;
            this.DragingGroup.render.renderMode = poker.PokerGroupRenderMode.lastOneCard;
            this.DragingGroup.FlushRender();
            this.DragingGroup.render.removeSelf();
            // ////console.log('this.DragingGroup.render', this.DragingGroup.render);
            deckData.table.LineMove.addChild(this.DragingGroup.render);
            this.DragFromGroupType = pokerGame.pokerDeckType.threeCardDeck;
            this.DragFromNum = 0;
            this.DragFromGroupIndex = z;
            // ////console.log('DragingGroup', this.DragFromGroupIndex);
            this.moveType = MovingType.autoBackToDeck; //移动类型
        };
        pokerMovingData.prototype.SetThreeCard = function (deckData) {
            var showCardNum = deckData.isThreeCardOnce ? 3 : 1;
            this.DragingGroup.render.x = 0;
            this.DragingGroup.render.y = 0;
            deckData.table.LineMove.x = deckData.table.StartCard.x;
            deckData.table.LineMove.y = deckData.table.StartCard.y;
            //this.DragMovingStartPos.x=deckData.table.LineMove.x;
            //this.DragMovingStartPos.y=deckData.table.LineMove.y;
            var pGroup = deckData.StartCard.data.SplitePokerGroupByNum(showCardNum);
            pGroup.pokerList.reverse();
            this.DragingGroup.data.Concat(pGroup);
            deckData.StartCard.FlushRender();
            //this.dragData.DragingGroup.render.renderMode;
            this.DragingGroup.render.renderMode = poker.PokerGroupRenderMode.lastThreeCard;
            this.DragingGroup.data.SetAllCardToFront();
            this.DragingGroup.data.FlushAllCardRender();
            this.DragingGroup.FlushRender(false);
            //this.dragData.DragingGroup.render.SortAndMoveToPos();
            this.DragingGroup.render.removeSelf();
            deckData.table.LineMove.addChild(this.DragingGroup.render);
            this.DragFromGroupType = pokerGame.pokerDeckType.startDeck;
            this.DragFromNum = 0;
            this.DragFromGroupIndex = deckData.StartCard.data.pokerList.length;
            this.DragToGroupType = pokerGame.pokerDeckType.threeCardDeck;
            this.DragToNum = 0;
            this.IsNeedAddToStepRecord = true;
            //this.IsBackStep=false;
            this.moveType = MovingType.clickMove; //移动类型
        };
        pokerMovingData.prototype.AllCard2SetThreeCard = function (deckData) {
            var showCardNum = 100;
            this.DragingGroup.render.x = 0;
            this.DragingGroup.render.y = 0;
            deckData.table.LineMove.x = deckData.table.StartCard.x;
            deckData.table.LineMove.y = deckData.table.StartCard.y;
            //this.DragMovingStartPos.x=deckData.table.LineMove.x;
            //this.DragMovingStartPos.y=deckData.table.LineMove.y;
            var pGroup = deckData.StartCard.data.SplitePokerGroupByNum(showCardNum);
            pGroup.pokerList.reverse();
            this.DragingGroup.data.Concat(pGroup);
            deckData.StartCard.FlushRender();
            //this.dragData.DragingGroup.render.renderMode;
            this.DragingGroup.render.renderMode = poker.PokerGroupRenderMode.lastThreeCard;
            this.DragingGroup.data.SetAllCardToFront();
            this.DragingGroup.data.FlushAllCardRender();
            this.DragingGroup.FlushRender(false);
            //this.dragData.DragingGroup.render.SortAndMoveToPos();
            this.DragingGroup.render.removeSelf();
            deckData.table.LineMove.addChild(this.DragingGroup.render);
            this.DragFromGroupType = pokerGame.pokerDeckType.startDeck;
            this.DragFromNum = 0;
            this.DragFromGroupIndex = deckData.StartCard.data.pokerList.length;
            this.DragToGroupType = pokerGame.pokerDeckType.threeCardDeck;
            this.DragToNum = 0;
            this.IsNeedAddToStepRecord = true;
            //this.IsBackStep=false;
            this.moveType = MovingType.clickMove; //移动类型
        };
        pokerMovingData.prototype.SetDragDataBackToFromDeck = function (deckData) {
            var deck = deckData.GetDeck(this.DragFromGroupType, this.DragFromNum);
            deck.data.Concat(this.DragingGroup.data);
        };
        pokerMovingData.prototype.SetAutoBackCard = function (deckData, LineNum, backDeckNum) {
            this.DragingGroup.render.x = 0;
            this.DragingGroup.render.y = 0;
            var lineDeck = deckData.GetDeck(pokerGame.pokerDeckType.Line, LineNum);
            var lineDeckRoot = deckData.GetDeckSpriteRoot(pokerGame.pokerDeckType.Line, LineNum);
            deckData.table.LineMove.x = lineDeckRoot.x;
            deckData.table.LineMove.y = lineDeckRoot.y;
            var lastIndex = lineDeck.data.GetLastCardIndex();
            this.DragingGroup.data.Concat(lineDeck.data.SplitePokerGroup(lastIndex));
            lineDeck.FlushRender(false);
            this.DragingGroup.render.renderMode = poker.PokerGroupRenderMode.line;
            this.DragingGroup.FlushRender();
            this.DragingGroup.render.removeSelf();
            deckData.table.LineMove.addChild(this.DragingGroup.render);
            this.DragFromGroupType = pokerGame.pokerDeckType.Line;
            this.DragFromNum = LineNum;
            this.DragFromGroupIndex = lastIndex;
            this.DragToGroupType = pokerGame.pokerDeckType.Deck;
            this.DragToNum = backDeckNum;
            this.IsNeedAddToStepRecord = false;
            this.moveType = MovingType.autoBackToDeck; //移动类型
        };
        pokerMovingData.prototype.SetHidenCard = function (LineNum, deckData, LastBackIndex) {
            this.DragingGroup.render.x = 0;
            this.DragingGroup.render.y = 0;
            var lineDeck = deckData.GetDeck(pokerGame.pokerDeckType.Line, LineNum);
            var lineDeckRoot = deckData.GetDeckSpriteRoot(pokerGame.pokerDeckType.Line, LineNum);
            deckData.table.LineMove.x = lineDeckRoot.x;
            deckData.table.LineMove.y = lineDeckRoot.y;
            this.DragingGroup.data.Concat(lineDeck.data.SplitePokerGroupFromFront(LastBackIndex));
            lineDeck.FlushRender(false);
            this.DragingGroup.render.renderMode = poker.PokerGroupRenderMode.line;
            this.DragingGroup.FlushRender();
            this.DragingGroup.render.removeSelf();
            deckData.table.LineMove.addChild(this.DragingGroup.render);
            this.DragFromGroupType = pokerGame.pokerDeckType.Line;
            this.DragFromNum = LineNum;
            this.DragFromGroupIndex = 0;
            this.DragToGroupType = pokerGame.pokerDeckType.startDeck;
            this.DragToNum = 0;
            this.IsNeedAddToStepRecord = false;
            //this.IsBackStep=false;
            this.moveType = MovingType.showHiddenCard; //移动类型
        };
        pokerMovingData.prototype.SetBackStep = function (step, deckData, type) {
            if (type === void 0) { type = 0; }
            //var showCardNum = deckData.IsShowOneCardOnce ? 1 : 3;
            this.DragingGroup.render.x = 0;
            this.DragingGroup.render.y = 0;
            var fromDeck = deckData.GetDeck(step.fromDeckType, step.fromDeckNum);
            var toDeck = deckData.GetDeck(step.addToDeckType, step.addToDeckNum);
            var toDeckRoot = deckData.GetDeckSpriteRoot(step.addToDeckType, step.addToDeckNum);
            // ////console.log('SetBackStep:::', type, step.fromDeckType, step.fromDeckNum, step.addToDeckType, step.addToDeckNum);
            var spacingY = 0; //线的后腿需要往下移动
            if (step.addToDeckType == pokerGame.pokerDeckType.Line) {
                spacingY = poker.pokerGroupRender.lineHeightSpacing * step.addToDeckIndex;
            }
            this.DragingGroup.data.Concat(toDeck.data.SplitePokerGroup(step.addToDeckIndex));
            this.DragingGroup.render.renderMode = poker.PokerGroupRenderMode.line;
            this.DragingGroup.FlushRender();
            toDeck.FlushRender();
            //this.dragData.DragingGroup.render.SortAndMoveToPos();
            this.DragingGroup.render.removeSelf();
            deckData.table.LineMove.addChild(this.DragingGroup.render);
            deckData.table.LineMove.x = toDeckRoot.x;
            if (step.addToDeckType == pokerGame.pokerDeckType.Line) {
                deckData.table.LineMove.y = toDeckRoot.y + spacingY + 40;
            }
            else {
                deckData.table.LineMove.y = toDeckRoot.y + spacingY;
            }
            this.DragFromGroupType = step.addToDeckType;
            this.DragFromNum = step.addToDeckNum;
            this.DragFromGroupIndex = step.addToDeckIndex;
            this.DragToGroupType = step.fromDeckType;
            this.DragToNum = step.fromDeckNum;
            this.IsNeedAddToStepRecord = false;
            this.moveType = MovingType.backStep; //移动类型
        };
        return pokerMovingData;
    }());
    pokerGame.pokerMovingData = pokerMovingData;
})(pokerGame || (pokerGame = {}));
//# sourceMappingURL=pokerMovingData.js.map
/**
* name
*/
var pokerGame;
(function (pokerGame) {
    var pokerDeckType;
    (function (pokerDeckType) {
        pokerDeckType[pokerDeckType["unKnowen"] = 0] = "unKnowen";
        pokerDeckType[pokerDeckType["startDeck"] = 1] = "startDeck";
        pokerDeckType[pokerDeckType["threeCardDeck"] = 2] = "threeCardDeck";
        pokerDeckType[pokerDeckType["Line"] = 3] = "Line";
        pokerDeckType[pokerDeckType["Deck"] = 4] = "Deck";
    })(pokerDeckType = pokerGame.pokerDeckType || (pokerGame.pokerDeckType = {}));
})(pokerGame || (pokerGame = {}));
//# sourceMappingURL=pokerDeckType.js.map
/*
* name;
*/
var pokerGame;
(function (pokerGame) {
    var personalCard = /** @class */ (function () {
        function personalCard(posIndex, type, num) {
            this.posIndex = posIndex;
            this.pokertype = type;
            this.pokernum = num;
            var a = 'a';
            if (a == 'a')
                a = 'a';
        }
        return personalCard;
    }());
    var PersonalSetCard = /** @class */ (function () {
        function PersonalSetCard(isTutorial) {
            if (isTutorial === void 0) { isTutorial = 0; }
            this.tutorialList = new Array();
            this.row1Array = new Array();
            this.row2Array = new Array();
            this.row3Array = new Array();
            this.row4Array = new Array();
            this.row5Array = new Array();
            this.row6Array = new Array();
            this.row7Array = new Array();
            this.four1Array = new Array();
            this.four2Array = new Array();
            this.four3Array = new Array();
            this.four4Array = new Array();
            //club = 1, //梅花
            //diamond =2,//方块
            //heart =3,//红桃
            //spade =4, //黑桃
            if (GameMain.app.isTestModel) {
                this.level = GameMain.app.testLevel;
            }
            else {
                this.level = GameMain.app.cutlevel;
            }
            if (isTutorial != 0) {
                this.level = 0;
            }
            // ////console.log('levellevellevel', this.level);
            if (GameMain.app.alllevelconf[this.level].level[0].mType != null) {
                GameMain.app.isSpecialModel = false;
                for (var index = 0; index < GameMain.app.alllevelconf[this.level].level.length; index++) {
                    if (index == 51) {
                        this.SetLevelDetail(1, 0, index);
                    }
                    else if (index == 50) {
                        this.SetLevelDetail(2, 1, index);
                    }
                    else if (index == 49) {
                        this.SetLevelDetail(2, 0, index);
                    }
                    else if (index == 48) {
                        this.SetLevelDetail(3, 2, index);
                    }
                    else if (index == 47) {
                        this.SetLevelDetail(3, 1, index);
                    }
                    else if (index == 46) {
                        this.SetLevelDetail(3, 0, index);
                    }
                    else if (index == 45) {
                        this.SetLevelDetail(4, 3, index);
                    }
                    else if (index == 44) {
                        this.SetLevelDetail(4, 2, index);
                    }
                    else if (index == 43) {
                        this.SetLevelDetail(4, 1, index);
                    }
                    else if (index == 42) {
                        this.SetLevelDetail(4, 0, index);
                    }
                    else if (index == 41) {
                        this.SetLevelDetail(5, 4, index);
                    }
                    else if (index == 40) {
                        this.SetLevelDetail(5, 3, index);
                    }
                    else if (index == 39) {
                        this.SetLevelDetail(5, 2, index);
                    }
                    else if (index == 38) {
                        this.SetLevelDetail(5, 1, index);
                    }
                    else if (index == 37) {
                        this.SetLevelDetail(5, 0, index);
                    }
                    else if (index == 36) {
                        this.SetLevelDetail(6, 5, index);
                    }
                    else if (index == 35) {
                        this.SetLevelDetail(6, 4, index);
                    }
                    else if (index == 34) {
                        this.SetLevelDetail(6, 3, index);
                    }
                    else if (index == 33) {
                        this.SetLevelDetail(6, 2, index);
                    }
                    else if (index == 32) {
                        this.SetLevelDetail(6, 1, index);
                    }
                    else if (index == 31) {
                        this.SetLevelDetail(6, 0, index);
                    }
                    else if (index == 30) {
                        this.SetLevelDetail(7, 6, index);
                    }
                    else if (index == 29) {
                        this.SetLevelDetail(7, 5, index);
                    }
                    else if (index == 28) {
                        this.SetLevelDetail(7, 4, index);
                    }
                    else if (index == 27) {
                        this.SetLevelDetail(7, 3, index);
                    }
                    else if (index == 26) {
                        this.SetLevelDetail(7, 2, index);
                    }
                    else if (index == 25) {
                        this.SetLevelDetail(7, 1, index);
                    }
                    else if (index == 24) {
                        this.SetLevelDetail(7, 0, index);
                    }
                    else if (index == 23) {
                        this.SetLevelDetail2(23, index);
                    }
                    else if (index == 22) {
                        this.SetLevelDetail2(22, index);
                    }
                    else if (index == 21) {
                        this.SetLevelDetail2(21, index);
                    }
                    else if (index == 20) {
                        this.SetLevelDetail2(20, index);
                    }
                    else if (index == 19) {
                        this.SetLevelDetail2(19, index);
                    }
                    else if (index == 18) {
                        this.SetLevelDetail2(18, index);
                    }
                    else if (index == 17) {
                        this.SetLevelDetail2(17, index);
                    }
                    else if (index == 16) {
                        this.SetLevelDetail2(16, index);
                    }
                    else if (index == 15) {
                        this.SetLevelDetail2(15, index);
                    }
                    else if (index == 14) {
                        this.SetLevelDetail2(14, index);
                    }
                    else if (index == 13) {
                        this.SetLevelDetail2(13, index);
                    }
                    else if (index == 12) {
                        this.SetLevelDetail2(12, index);
                    }
                    else if (index == 11) {
                        this.SetLevelDetail2(11, index);
                    }
                    else if (index == 10) {
                        this.SetLevelDetail2(10, index);
                    }
                    else if (index == 9) {
                        this.SetLevelDetail2(9, index);
                    }
                    else if (index == 8) {
                        this.SetLevelDetail2(8, index);
                    }
                    else if (index == 7) {
                        this.SetLevelDetail2(7, index);
                    }
                    else if (index == 6) {
                        this.SetLevelDetail2(6, index);
                    }
                    else if (index == 5) {
                        this.SetLevelDetail2(5, index);
                    }
                    else if (index == 4) {
                        this.SetLevelDetail2(4, index);
                    }
                    else if (index == 3) {
                        this.SetLevelDetail2(3, index);
                    }
                    else if (index == 2) {
                        this.SetLevelDetail2(2, index);
                    }
                    else if (index == 1) {
                        this.SetLevelDetail2(1, index);
                    }
                    else if (index == 0) {
                        this.SetLevelDetail2(0, index);
                    }
                }
            }
            else if (GameMain.app.alllevelconf[this.level].level[0].col != null) {
                GameMain.app.isSpecialModel = true;
                for (var index = 0; index < GameMain.app.alllevelconf[this.level].level.length; index++) {
                    if (GameMain.app.alllevelconf[this.level].level[index].row1 != null) {
                        this.row1Array.push(GameMain.app.alllevelconf[this.level].level[index].row1);
                    }
                    if (GameMain.app.alllevelconf[this.level].level[index].row2 != null) {
                        this.row2Array.push(GameMain.app.alllevelconf[this.level].level[index].row2);
                    }
                    if (GameMain.app.alllevelconf[this.level].level[index].row3 != null) {
                        this.row3Array.push(GameMain.app.alllevelconf[this.level].level[index].row3);
                    }
                    if (GameMain.app.alllevelconf[this.level].level[index].row4 != null) {
                        this.row4Array.push(GameMain.app.alllevelconf[this.level].level[index].row4);
                    }
                    if (GameMain.app.alllevelconf[this.level].level[index].row5 != null) {
                        this.row5Array.push(GameMain.app.alllevelconf[this.level].level[index].row5);
                    }
                    if (GameMain.app.alllevelconf[this.level].level[index].row6 != null) {
                        this.row6Array.push(GameMain.app.alllevelconf[this.level].level[index].row6);
                    }
                    if (GameMain.app.alllevelconf[this.level].level[index].row7 != null) {
                        this.row7Array.push(GameMain.app.alllevelconf[this.level].level[index].row7);
                    }
                    if (GameMain.app.alllevelconf[this.level].level[index].deck1 != null) {
                        this.four1Array.push(GameMain.app.alllevelconf[this.level].level[index].deck1);
                    }
                    if (GameMain.app.alllevelconf[this.level].level[index].deck2 != null) {
                        this.four2Array.push(GameMain.app.alllevelconf[this.level].level[index].deck2);
                    }
                    if (GameMain.app.alllevelconf[this.level].level[index].deck3 != null) {
                        this.four3Array.push(GameMain.app.alllevelconf[this.level].level[index].deck3);
                    }
                    if (GameMain.app.alllevelconf[this.level].level[index].deck4 != null) {
                        this.four4Array.push(GameMain.app.alllevelconf[this.level].level[index].deck4);
                    }
                }
                // ////console.log('this.row1Array', this.row1Array, this.row2Array, this.row3Array, this.row4Array, this.row5Array, this.row6Array, this.row7Array, this.four1Array, this.four2Array, this.four3Array, this.four4Array);
                var cardIndex = -1;
                GameMain.app.SpecialRows = [];
                GameMain.app.SpecialDecks = [];
                GameMain.app.SpecialRows = [this.row1Array.length, this.row2Array.length, this.row3Array.length, this.row4Array.length, this.row5Array.length, this.row6Array.length, this.row7Array.length];
                GameMain.app.SpecialDecks = [this.four1Array.length, this.four2Array.length, this.four3Array.length, this.four4Array.length];
                if (this.row1Array.length > 0) {
                    for (var ii = this.row1Array.length - 1; ii >= 0; ii--) {
                        cardIndex += 1;
                        var type = this.row1Array[ii][0];
                        var num = this.row1Array[ii][1];
                        this.SetLevelDetail3(cardIndex, index, type, num);
                    }
                }
                if (this.row2Array.length > 0) {
                    for (var ii = this.row2Array.length - 1; ii >= 0; ii--) {
                        cardIndex += 1;
                        var type = this.row2Array[ii][0];
                        var num = this.row2Array[ii][1];
                        this.SetLevelDetail3(cardIndex, index, type, num);
                    }
                }
                if (this.row3Array.length > 0) {
                    for (var ii = this.row3Array.length - 1; ii >= 0; ii--) {
                        cardIndex += 1;
                        var type = this.row3Array[ii][0];
                        var num = this.row3Array[ii][1];
                        this.SetLevelDetail3(cardIndex, index, type, num);
                    }
                }
                if (this.row4Array.length > 0) {
                    for (var ii = this.row4Array.length - 1; ii >= 0; ii--) {
                        cardIndex += 1;
                        var type = this.row4Array[ii][0];
                        var num = this.row4Array[ii][1];
                        this.SetLevelDetail3(cardIndex, index, type, num);
                    }
                }
                if (this.row5Array.length > 0) {
                    for (var ii = this.row5Array.length - 1; ii >= 0; ii--) {
                        cardIndex += 1;
                        var type = this.row5Array[ii][0];
                        var num = this.row5Array[ii][1];
                        this.SetLevelDetail3(cardIndex, index, type, num);
                    }
                }
                if (this.row6Array.length > 0) {
                    for (var ii = this.row6Array.length - 1; ii >= 0; ii--) {
                        cardIndex += 1;
                        var type = this.row6Array[ii][0];
                        var num = this.row6Array[ii][1];
                        this.SetLevelDetail3(cardIndex, index, type, num);
                    }
                }
                if (this.row7Array.length > 0) {
                    for (var ii = this.row7Array.length - 1; ii >= 0; ii--) {
                        cardIndex += 1;
                        var type = this.row7Array[ii][0];
                        var num = this.row7Array[ii][1];
                        this.SetLevelDetail3(cardIndex, index, type, num);
                    }
                }
                if (this.four1Array.length > 0) {
                    for (var ii = this.four1Array.length - 1; ii >= 0; ii--) {
                        cardIndex += 1;
                        var type = this.four1Array[ii][0];
                        var num = this.four1Array[ii][1];
                        this.SetLevelDetail3(cardIndex, index, type, num);
                    }
                }
                if (this.four2Array.length > 0) {
                    for (var ii = this.four2Array.length - 1; ii >= 0; ii--) {
                        cardIndex += 1;
                        var type = this.four2Array[ii][0];
                        var num = this.four2Array[ii][1];
                        this.SetLevelDetail3(cardIndex, index, type, num);
                    }
                }
                if (this.four3Array.length > 0) {
                    for (var ii = this.four3Array.length - 1; ii >= 0; ii--) {
                        cardIndex += 1;
                        var type = this.four3Array[ii][0];
                        var num = this.four3Array[ii][1];
                        this.SetLevelDetail3(cardIndex, index, type, num);
                    }
                }
                if (this.four4Array.length > 0) {
                    for (var ii = this.four4Array.length - 1; ii >= 0; ii--) {
                        cardIndex += 1;
                        var type = this.four4Array[ii][0];
                        var num = this.four4Array[ii][1];
                        this.SetLevelDetail3(cardIndex, index, type, num);
                    }
                }
            }
        }
        PersonalSetCard.prototype.SetLevelDetail = function (row, col, index) {
            this.AddToTutorialCardArray(this.GetPosIndexByLine(row, col), GameMain.app.alllevelconf[this.level].level[index].mType, GameMain.app.alllevelconf[this.level].level[index].mNum);
        };
        PersonalSetCard.prototype.SetLevelDetail2 = function (top, index) {
            this.AddToTutorialCardArray(this.GetPosIndexByStartDeck(top), GameMain.app.alllevelconf[this.level].level[index].mType, GameMain.app.alllevelconf[GameMain.app.cutlevel].level[index].mNum);
        };
        PersonalSetCard.prototype.SetLevelDetail3 = function (top, index, type, num) {
            this.AddToTutorialCardArray(51 - top, type, num);
        };
        PersonalSetCard.prototype.GetPosIndexByStartDeck = function (StartDeckIndex) {
            var PreCardNum = this.GetPreCardNumByLineNum(8); //前置卡片
            var index = 51 - PreCardNum - StartDeckIndex;
            return index;
        };
        PersonalSetCard.prototype.AddToTutorialCardArray = function (posIndex, type, num) {
            var card = new personalCard(posIndex, type, num);
            this.tutorialList.push(card);
            // ////console.log('tutorialList', this.tutorialList);
        };
        PersonalSetCard.prototype.GetPosIndexByLine = function (lineNum, LineIndex) {
            var PreCardNum = this.GetPreCardNumByLineNum(lineNum); //前置卡片
            var index = 51 - PreCardNum - LineIndex;
            return index;
        };
        PersonalSetCard.prototype.GetPreCardNumByLineNum = function (lineNum) {
            var count = 0;
            for (var i = 0; i < lineNum; i++) {
                count += (i);
            }
            return count;
        };
        PersonalSetCard.prototype.SetTutorialCard = function (deckData) {
            var indexMap = new laya.utils.Dictionary();
            deckData.AllCardBackToStart();
            deckData.StartCard.data.ShuffleWithTime(3); //洗牌三次
            var pokerList = deckData.StartCard.data.pokerList;
            var fourDeck = deckData.pokerDeckList;
            //建立索引映射表
            for (var i = 0; i < pokerList.length; i++) {
                var tpoker = pokerList[i];
                indexMap.set(tpoker.data.Getkey(), i);
            }
            for (var i = 0; i < this.tutorialList.length; i++) {
                var ttCard = this.tutorialList[i];
                var keytt = poker.pokerdata.Getkey(ttCard.pokertype, ttCard.pokernum);
                var indexNow = indexMap.get(keytt);
                var indexToSet = ttCard.posIndex;
                var cardFromTT = pokerList[indexNow];
                var cardToChange = pokerList[indexToSet];
                pokerList[indexNow] = cardToChange; //交换一下位置
                pokerList[indexToSet] = cardFromTT;
                var keyToChange = cardToChange.data.Getkey(); //映射表交换更新
                indexMap.set(keytt, indexToSet);
                indexMap.set(keyToChange, indexNow);
            }
        };
        return PersonalSetCard;
    }());
    pokerGame.PersonalSetCard = PersonalSetCard;
})(pokerGame || (pokerGame = {}));
//# sourceMappingURL=PersonalSetCard.js.map
/**
* 游戏中的设置事件处理
*/
var pokerGame;
(function (pokerGame) {
    var EventHandlSetting = /** @class */ (function () {
        function EventHandlSetting() {
            var a = 'a';
            if (a == 'a')
                a = 'a';
        }
        EventHandlSetting.prototype.SetGameManager = function (gameManager) {
            this.gameManager = gameManager;
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.onClickSettingSound, this, this.onClickSettingSound); //声音设置
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.onClickSettingShowTimer, this, this.onClickSettingShowTimer); //时间显示设置			
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.onClickSettingLeftHandMode, this, this.onClickLeftHandMode); //点击左手模式			
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.onClickSettingThreecard, this, this.onClickSettingThreecard); //三张卡模式			
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.onClickSettingVigasMode, this, this.onClickSettingVigasMode); //维加斯模式
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.ShowMessage, this, this.ShowMessage); //维加斯模式
        };
        EventHandlSetting.prototype.ShowMessage = function (messageID) {
            var message = this.gameManager.UIManager.pokerTable.GetMessage(messageID);
            this.gameManager.UIManager.pokerTable.ShowMessage(message);
            this.gameManager.UIManager.shopUI.ShowMessage(message);
        };
        //设置维加斯模式
        EventHandlSetting.prototype.onClickSettingVigasMode = function (isSelected) {
            //this.gameManager.userData.isVigasMode=isSelected;
            this.gameManager.userData.SetVigasMode(isSelected);
            GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.ShowMessage, [10007]);
            wxCore.uo.commitTotle("icon_page", { "create_time": "", "session_id": "", "is_new": "", "icon_type": 'Vigas_Mode', 'on_off': Number(isSelected) });
        };
        //设置三张卡模式
        EventHandlSetting.prototype.onClickSettingThreecard = function (isSelected) {
            //this.gameManager.userData.isThreeCardOnce=isSelected;
            this.gameManager.userData.SetThreeCardOnce(isSelected);
            GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.ShowMessage, [10007]);
            wxCore.uo.commitTotle("icon_page", { "create_time": "", "session_id": "", "is_new": "", "icon_type": 'Three_Card', 'on_off': Number(isSelected) });
        };
        //设置显示计时器
        EventHandlSetting.prototype.onClickSettingShowTimer = function (isSelected) {
            this.gameManager.UIManager.pokerTop.SetTimerVisible(isSelected);
            //this.gameManager.userData.isTimerOn=isSelected;
            this.gameManager.userData.SetTimerOn(isSelected);
            wxCore.uo.commitTotle("icon_page", { "create_time": "", "session_id": "", "is_new": "", "icon_type": 'Show_Timer', 'on_off': Number(isSelected) });
        };
        //点击声音设置
        EventHandlSetting.prototype.onClickSettingSound = function (isSelected) {
            //this.gameManager.userData.isSoundOn=isSelected;
            this.gameManager.userData.SetSoundOn(isSelected);
            wxCore.uo.commitTotle("icon_page", { "create_time": "", "session_id": "", "is_new": "", "icon_type": 'Setting_Music', 'on_off': Number(isSelected) });
        };
        //点击左手模式
        EventHandlSetting.prototype.onClickLeftHandMode = function (isSelected) {
            this.gameManager.UIManager.pokerTable.SetLeftMode(isSelected);
            //this.gameManager.userData.isLeftHand=isSelected;
            this.gameManager.userData.SetLeftHand(isSelected);
            this.gameManager.UIManager.pokerTable.FlushAllPoker();
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.FlushTutorialRender);
            wxCore.uo.commitTotle("icon_page", { "create_time": "", "session_id": "", "is_new": "", "icon_type": 'Left_Hand_Mode', 'on_off': Number(isSelected) });
        };
        return EventHandlSetting;
    }());
    pokerGame.EventHandlSetting = EventHandlSetting;
})(pokerGame || (pokerGame = {}));
//# sourceMappingURL=EventHandlSetting.js.map
/**
* 新手指引的事件处理
*/
var pokerGame;
(function (pokerGame) {
    var EventHandleTutorial = /** @class */ (function () {
        function EventHandleTutorial() {
            var a = 'a';
            if (a == 'a')
                a = 'a';
        }
        EventHandleTutorial.prototype.SetGameManager = function (gameManager) {
            this.gameManager = gameManager;
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.OnClickGameStartTutorial, this, this.OnClickGameStartTutorial); //开始新手指引
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.CheckNextTutorial, this, this.CheckNextTutorial); //新手指引下一步
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.EndTutorial, this, this.EndTutorial); //新手指引结束
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.FlushTutorialRender, this, this.FlushTutorialRender); //新手指引刷新
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.ShowLastTutorial, this, this.onShowLastTutorial); //新手指引最后一步
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.OnGameStartTutorial, this, this.OnGameStartTutorial); //开始游戏 并开启新手指引
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.HideTutorial, this, this.EndTutorial); //新手指引隐藏
            GameGlobal.Dispatcher.addEvent(GameGlobal.EVENT.OnClickQuitTutorial, this, this.OnClickQuitTutorial); //退出新手指引
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.TipMaskVis, this, this.OnTipMaskVisible); //提示遮罩
        };
        EventHandleTutorial.prototype.OnClickGameStartTutorial = function () {
            if (this.gameManager.UIManager.pokerTable.IsTutorialStart) {
                return;
            }
            if (!this.gameManager.UIManager.pokerTable.pokerGroup.cardControls.IsCanDearCard()) {
                return;
            }
            GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.ClearTips);
            this.gameManager.UIManager.pokerTable.ChangeToNewPokerGroupAndKeepOld();
            this.OnGameStartTutorial();
        };
        //游戏开始新手指引
        EventHandleTutorial.prototype.OnGameStartTutorial = function () {
            if (!this.gameManager.UIManager.pokerTable.pokerGroup.cardControls.IsCanDearCard()) {
                return;
            }
            this.gameManager.UIManager.pokerTable.pokerGroup.cardDecksData.SetGameMode(false, false);
            this.gameManager.UIManager.startGameUI.startGameUI.visible = false;
            this.gameManager.UIManager.startGameUI.stopSK();
            this.gameManager.UIManager.startGameUI.isStart = false;
            this.gameManager.UIManager.pokerTable.DearCard(pokerUI.DearCardType.tutorial); //发牌
            this.gameManager.UIManager.pokerTop.RestartTimer(); //重启计时器
            this.SetGameMainUIVisible(true);
            this.StartTutorial();
            this.gameManager.userData.ClearTry();
            this.gameManager.UIManager.shopUI.FlushData(this.gameManager.userData);
            // ////console.log('s5');
        };
        EventHandleTutorial.prototype.SetGameMainUIVisible = function (isVisible) {
            this.gameManager.UIManager.pokerTable.pokerTableUI.visible = isVisible;
            this.gameManager.UIManager.pokerTop.gameTopUI.visible = isVisible;
            this.gameManager.UIManager.pokerBottom.gameBottom.visible = isVisible;
            if (!isVisible) {
                this.gameManager.UIManager.pokerPopup.gamePopup.visible = isVisible;
            }
        };
        EventHandleTutorial.prototype.StartTutorial = function () {
            this.gameManager.UIManager.tutorialUI.StartTutorial();
            this.gameManager.UIManager.pokerTable.SetTutorialMaskVisible(true, 0);
            this.gameManager.UIManager.pokerTable.SetTutorialMaskClickToCloseTutorial(false);
        };
        EventHandleTutorial.prototype.SetTutorialItem = function (item) {
            this.gameManager.UIManager.tutorialUI.tutorialHandAni.tutorialHandAni.removeSelf();
            if (item.Type != null && item.Type != pokerGame.pokerDeckType.unKnowen) {
                this.SetTutorialItemRenderRoot(item.Type, item.NUM, item.INDEX, 1);
            }
            if (item.Type2 != null && item.Type2 != pokerGame.pokerDeckType.unKnowen) {
                this.SetTutorialItemRenderRoot(item.Type2, item.NUM2, item.INDEX2, 2);
            }
        };
        EventHandleTutorial.prototype.SetTutorialItemRenderRoot = function (Type, NUM, INDEX, RootNum) {
            // ////console.log('NUMNUMNUMNUMNUMNUMNUMNUMNUMNUMNUMNUM', NUM, INDEX);
            var deck = this.GetDeck(Type, NUM);
            if (deck.data.pokerList.length == 0) {
                // var sprRoot= this.gameManager.UIManager.pokerTable.pokerGroup.cardDecksData.GetDeckSpriteRoot(Type,NUM);
                // if(sprRoot==null)
                // {
                // 	return;
                // }
                // var sprchild=sprRoot.getChildAt(0);
                // if(sprchild==null)
                // {
                // 	return;
                // }
                // var spr=<Laya.Sprite>sprchild.getChildAt(0);
                // if(spr!=null)
                // {
                // 	this.gameManager.UIManager.pokerTable.SetCardRenderToTutorialSpriteRoot(spr);
                // }
                return;
            }
            var pokerList = deck.data.pokerList;
            var lastIndex = pokerList.length - 1;
            if (lastIndex < 0) {
                return;
            }
            for (var i = (lastIndex - INDEX); i <= lastIndex; i++) {
                var pokerIMg = pokerList[i].render.img;
                this.gameManager.UIManager.pokerTable.SetCardRenderToTutorialSpriteRoot(pokerIMg, RootNum);
                if (RootNum == 1 && i == (lastIndex - INDEX)) {
                    this.CheckTutorialTips(Type, NUM, i);
                    pokerIMg.parent.addChild(this.gameManager.UIManager.tutorialUI.tutorialHandAni.tutorialHandAni);
                    this.gameManager.UIManager.tutorialUI.tutorialHandAni.tutorialHandAni.pos(pokerIMg.x + 50, pokerIMg.y + 80);
                }
                if (RootNum == 2) {
                    pokerIMg.offAll();
                }
            }
        };
        EventHandleTutorial.prototype.FlushTutorialRender = function () {
            //this.gameManager.UIManager.tutorialUI.ShowNextStepTutorial();
            if (this.gameManager.UIManager.pokerTable.IsTutorialStart) {
                var item = this.gameManager.UIManager.tutorialUI.GetTutorialItem();
                this.SetTutorialItem(item);
            }
        };
        EventHandleTutorial.prototype.CheckTutorialTips = function (deckType, deckNum, index) {
            this.gameManager.UIManager.pokerTable.pokerGroup.cardTips.CheckTutorialTipsWithLoop(deckType, deckNum, index);
        };
        EventHandleTutorial.prototype.GetDeck = function (type, GroupNum) {
            if (type == pokerGame.pokerDeckType.Deck) {
                return this.FindAceDeckHaveCard();
            }
            else {
                return this.gameManager.UIManager.pokerTable.pokerGroup.cardDecksData.GetDeck(type, GroupNum);
            }
        };
        EventHandleTutorial.prototype.FindAceDeckHaveCard = function () {
            var tRet = null;
            for (var i = 0; i < 4; i++) {
                tRet = this.gameManager.UIManager.pokerTable.pokerGroup.cardDecksData.GetDeck(pokerGame.pokerDeckType.Deck, i + 1);
                if (tRet.data.pokerList.length > 0) {
                    break;
                }
            }
            return tRet;
        };
        EventHandleTutorial.prototype.CheckNextTutorial = function () {
            var olditem = this.gameManager.UIManager.tutorialUI.GetTutorialItem();
            if (olditem == null) {
                this.gameManager.UIManager.tutorialUI.ShowNextStepTutorial();
            }
            else {
                var deck = this.GetDeck(olditem.Type, olditem.NUM);
                if (deck == null) {
                    this.gameManager.UIManager.tutorialUI.ShowNextStepTutorial();
                }
                else {
                    if (this.gameManager.UIManager.tutorialUI.stepDeckCardNum != deck.data.pokerList.length) {
                        this.gameManager.UIManager.tutorialUI.ShowNextStepTutorial();
                    }
                }
            }
            var item = this.gameManager.UIManager.tutorialUI.GetTutorialItem();
            var deck2 = this.GetDeck(item.Type, item.NUM);
            if (deck2 == null) {
            }
            else {
                this.gameManager.UIManager.tutorialUI.stepDeckCardNum = deck2.data.pokerList.length;
                this.SetTutorialItem(item);
            }
        };
        EventHandleTutorial.prototype.OnTipMaskVisible = function (bool) {
            this.gameManager.UIManager.pokerTable.SetTutorialMaskVisible(bool);
        };
        EventHandleTutorial.prototype.OnClickQuitTutorial = function () {
            //if(this.gameManager.UIManager.pokerTable.can)
            if (!this.gameManager.UIManager.pokerTable.pokerGroup.cardControls.IsCanChangeCard()) {
                return;
            }
            this.gameManager.UIManager.pokerTable.pokerGroup.cardTips.ClearData();
            this.gameManager.UIManager.pokerTable.pokerGroup.cardTips.ClearTutorialTips();
            this.gameManager.UIManager.tutorialUI.HideTutorial();
            this.gameManager.UIManager.pokerTable.SetTutorialMaskVisible(false);
            this.gameManager.UIManager.pokerTable.EndTutorial();
            this.gameManager.UIManager.pokerTable.pokerGroup.cardControls.EndTutorial();
            this.gameManager.UIManager.pokerTable.onChangeToKeep();
            //this.gameManager.UIManager.pokerTable.FlushBGImg();
            this.gameManager.UIManager.pokerTable.pokerGroup.cardControls.FlushAllClickEvent();
        };
        EventHandleTutorial.prototype.EndTutorial = function () {
            if (this.gameManager.UIManager.pokerTable.IsTutorialStart) {
                this.gameManager.UIManager.pokerTable.IsTutorialStart = false;
                this.gameManager.UIManager.pokerTable.pokerGroup.cardTips.ClearData();
                this.gameManager.UIManager.pokerTable.pokerGroup.cardTips.ClearTutorialTips();
                this.gameManager.UIManager.tutorialUI.HideTutorial();
                this.gameManager.UIManager.pokerTable.SetTutorialMaskVisible(false);
                this.gameManager.UIManager.pokerTable.EndTutorial();
                this.gameManager.UIManager.pokerTable.pokerGroup.cardControls.EndTutorial();
                this.gameManager.UIManager.pokerTable.onChangeToKeep();
                this.gameManager.UIManager.tutorialUI.tutorialHandAni.tutorialHandAni.removeSelf();
                this.gameManager.UIManager.tutorialUI.tutorialHandAni.tutorialHandAni.destroy();
                // ////console.log('duuuuuuuuuuuuuuuuuuuuuuu');
                GameMain.app.isXinShow = false;
            }
        };
        EventHandleTutorial.prototype.onShowLastTutorial = function () {
            // ////console.log('???????????????');
            this.gameManager.UIManager.pokerTable.SetTutorialMaskClickToCloseTutorial(true);
        };
        return EventHandleTutorial;
    }());
    pokerGame.EventHandleTutorial = EventHandleTutorial;
})(pokerGame || (pokerGame = {}));
//# sourceMappingURL=EventHandleTutorial.js.map
/**
* 商店的购买事件处理
*/
var pokerGame;
(function (pokerGame) {
    var EventHandleShop = /** @class */ (function () {
        function EventHandleShop() {
            var a = 'a';
            if (a == 'a')
                a = 'a';
        }
        EventHandleShop.prototype.SetGameManager = function (gameManager) {
            this.gameManager = gameManager;
            //OnClickBuy
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.OnClickBuy, this, this.OnClickBuy); //购买
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.OnClickTry, this, this.OnClickTry); //试用
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.OnBuySuccess, this, this.OnBuySuccess); //购买
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.OnTrySuccess, this, this.OnTrySuccess); //试用
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.OnClickUse, this, this.OnClickUse); //试用
        };
        EventHandleShop.prototype.OnClickUse = function (itemData) {
            this.gameManager.userData.UseItem(itemData);
            this.gameManager.UIManager.shopUI.FlushData(this.gameManager.userData);
            // ////console.log('s2');
            pokerGame.SoundPlayer.PlaySound(1);
            pokerRender.ReadSkin();
            this.gameManager.UIManager.pokerTable.FlushBGImg();
            this.gameManager.UIManager.pokerTable.FlushAllCardRender();
        };
        //点击购买,开始购买流程
        EventHandleShop.prototype.OnClickBuy = function (itemData) {
            // console.debug("OnClickBuy=" + itemData.ItemID);
            ///-----------
            ///-------经过各种购买流程之后，最终调用下面的接口购买成功
            ////--------------
            if (!this.gameManager.userData.IsHaveGold(itemData.ItemPrice)) {
                GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.ShowMessage, [10011]);
                return;
            }
            this.gameManager.userData.AddGold(-itemData.ItemPrice);
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.OnBuySuccess, [itemData.ItemID]);
            pokerGame.SoundPlayer.PlaySound(1);
        };
        //购买成功
        EventHandleShop.prototype.OnBuySuccess = function (itemID) {
            // console.debug("OnBuySuccess=" + itemID);
            this.gameManager.userData.AddPurchasedItemID(itemID);
            var itemdata = this.gameManager.UIManager.shopUI.GetItemConfigData(itemID);
            //this.gameManager.userData.UseItem(itemdata);
            this.gameManager.UIManager.shopUI.FlushData(this.gameManager.userData);
            // ////console.log('s3');
            pokerRender.ReadSkin();
            this.gameManager.UIManager.pokerTable.FlushBGImg();
            this.gameManager.UIManager.pokerTable.FlushAllCardRender();
        };
        //点击试用,开始试用流程
        EventHandleShop.prototype.OnClickTry = function (itemData) {
            // console.debug("OnClickTry=" + itemData.ItemID);
            ///-----------
            ///-------经过各种试用流程之后，最终调用下面的接口试用成功
            ////--------------
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.OnTrySuccess, [itemData.ItemID]);
            pokerGame.SoundPlayer.PlaySound(1);
        };
        //试用成功
        EventHandleShop.prototype.OnTrySuccess = function (itemID) {
            // console.debug("OnTrySuccess=" + itemID);
            var itemdata = this.gameManager.UIManager.shopUI.GetItemConfigData(itemID);
            this.gameManager.userData.TryItem(itemdata);
            this.gameManager.UIManager.shopUI.FlushData(this.gameManager.userData);
            // ////console.log('s4');
            pokerRender.ReadSkin();
            this.gameManager.UIManager.pokerTable.FlushBGImg();
            this.gameManager.UIManager.pokerTable.FlushAllCardRender();
        };
        return EventHandleShop;
    }());
    pokerGame.EventHandleShop = EventHandleShop;
})(pokerGame || (pokerGame = {}));
//# sourceMappingURL=EventHandleShop.js.map
/**
* 游戏的事件处理
*/
var pokerGame;
(function (pokerGame) {
    var EventHandlePoker = /** @class */ (function () {
        function EventHandlePoker() {
            var a = 'a';
            if (a == 'a')
                a = 'a';
        }
        EventHandlePoker.prototype.SetGameManager = function (gameManager) {
            this.gameManager = gameManager;
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.OnGameStart, this, this.OnClickGameStart);
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.OnClickShop, this, this.OnClickShop);
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.onClickChallenge, this, this.onClickChallenge);
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.onClickSetting, this, this.onClickSetting);
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.onClickBackToMainFromShop, this, this.onClickBackToMainFromShop);
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.onClickShowPopup, this, this.onClickShowPopup);
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.onClickBackToMain, this, this.onClickEndGame);
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.onMusicBtnChange, this, this.onMusicBtnChange);
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.onMoveFourAni, this, this.onMoveFourAni);
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.onClickNewGame, this, this.onClickNewGame);
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.onClickRetry, this, this.onClickRetry);
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.onClickEndGame, this, this.onClickEndGame);
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.onClickChangeCardSize, this, this.onClickChangeSize);
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.onShowTipOfJumpLevel, this, this.onClickShowPopup);
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.onMingPaiTaiJi, this, this.onMingPaiTaiJi);
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.onClickBackStep, this, this.onClickBackStep); //回撤
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.onClickTips, this, this.onClickTips); //点击提示
            // GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.onClickTips, this, this.onClickNextStep);//点击提示
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.onChangeLastCard, this, this.onChangeLastCard); //变底牌
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.OnClickShowAllHiddenCard, this, this.OnClickShowAllHiddenCard); //点击明牌
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.OnClickAutoBackToAceCardDeck, this, this.OnClickAutoBackToAceCardDeck); //点击自动
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.onGameWin, this, this.onGameWin); //游戏胜利的时候
            GameGlobal.Dispatcher.addEvent(GameGlobal.EVENT.BuyBgSkin, this, this.BuyBgSkin);
            GameGlobal.Dispatcher.addEvent(GameGlobal.EVENT.BuyCardBackSkin, this, this.BuyCardBackSkin);
            GameGlobal.Dispatcher.addEvent(GameGlobal.EVENT.ClearTips, this, this.ClearTips);
            GameGlobal.Dispatcher.addEvent(GameGlobal.EVENT.onClickShopInGame, this, this.onClickShopInGame);
            GameGlobal.Dispatcher.addEvent(GameGlobal.EVENT.onClickCLoseConfirmAutoPlayUI, this, this.onClickCLoseConfirmAutoPlayUI);
            GameGlobal.Dispatcher.addEvent(GameGlobal.EVENT.onShareWeChatSuccesse, this, this.onShareWeChatSuccesse); //解锁下面所有牌后出现
            GameGlobal.Dispatcher.addEvent(GameGlobal.EVENT.CheckAutoPlay, this, this.CheckAutoPlay);
            GameGlobal.Dispatcher.addEvent(GameGlobal.EVENT.ShowHiddenCard, this, this.ShowHiddenCard);
            GameGlobal.Dispatcher.addEvent(GameGlobal.EVENT.AddPhysicalPower, this, this.AddPhysicalPower);
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.isVJIASI, this, this.IsVJIASI);
            GameGlobal.Dispatcher.addEvent(GameGlobal.EVENT.UpdateGoldUI, this, this.UpdateGoldUI);
            GameGlobal.Dispatcher.addEvent(GameGlobal.EVENT.onTableUILoadedDone, this, this.onTableUILoadedDone);
            GameGlobal.Dispatcher.addEvent(GameGlobal.EVENT.onClickGoldUseShowCard, this, this.onClickGoldUseShowCard);
            GameGlobal.Dispatcher.addEvent(GameGlobal.EVENT.onRefreshSKAniLevel, this, this.onRefreshSKAniLevel);
            GameGlobal.Dispatcher.addEvent(GameGlobal.EVENT.onRefreshStartSK, this, this.onRefreshStartSK);
        };
        EventHandlePoker.prototype.onTableUILoadedDone = function () {
            if (this.gameManager.UIManager.IsAllTableUILoadDone()) {
                this.gameManager.UIManager.pokerTable.tableTopUI = this.gameManager.UIManager.pokerTop;
                this.gameManager.UIManager.pokerTable.tableBottomUI = this.gameManager.UIManager.pokerBottom;
                GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.onALLTableUILoadedDone);
            }
        };
        EventHandlePoker.prototype.onClickShopInGame = function () {
            this.gameManager.UIManager.shopUI.OpenShop(true);
        };
        EventHandlePoker.prototype.OnClickGameStart = function (bool) {
            if (bool === void 0) { bool = false; }
            // ////console.log('???:::', GameMain.app.mWX.isAbTest, bool);
            GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.BuyBgSkin);
            GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.BuyCardBackSkin);
            // if (GameMain.app.mWX.isAbTest && bool) {
            if (ShopSetting.nowPpower > 0) {
                this.OnGameStart();
            }
            else {
                this.SetGameMainUIVisible(false);
                this.gameManager.UIManager.startGameUI.startGameUI.visible = true;
                this.gameManager.UIManager.startGameUI.playSK();
                this.gameManager.UIManager.startGameUI.isStart = true;
                if (!GameMain.app.physicalPowerView) {
                    GameMain.app.physicalPowerView = new PhysicalPowerView();
                }
                GameMain.app.physicalPowerView.refreshCoinAndPower();
                GameMain.app.physicalPowerView.popup();
            }
            // } else if (!GameMain.app.mWX.isAbTest && !bool) {
            // this.OnGameStart();
            // }
        };
        EventHandlePoker.prototype.ClearTips = function () {
            this.gameManager.UIManager.pokerTable.pokerGroup.cardTips.ClearData();
            this.gameManager.UIManager.pokerTable.pokerGroup.cardTips.ClearTutorialTips();
        };
        EventHandlePoker.prototype.BuyBgSkin = function () {
            ////console.log('加载背景：' + ShopSetting.nowUseBg);
            this.gameManager.UIManager.pokerTable.pokerTableUI.BGImg.skin = util.getCDN() + "res1/background/bg" + ShopSetting.nowUseBg + ".png";
        };
        EventHandlePoker.prototype.BuyCardBackSkin = function () {
            ////console.log('加载卡背：' + ShopSetting.nowCardBack);
            pokerRender.backSkinName = "local/\u5361\u80CC/CardBack_" + ShopSetting.nowCardBack + ".png";
        };
        //游戏开始事件
        EventHandlePoker.prototype.OnGameStart = function () {
            if (ShopSetting.nowPpower > 0) {
                this.GamePlayStart(false);
            }
            else {
                this.SetGameMainUIVisible(false);
                this.gameManager.UIManager.startGameUI.startGameUI.visible = true;
                this.gameManager.UIManager.startGameUI.playSK();
                this.gameManager.UIManager.startGameUI.isStart = true;
                if (!GameMain.app.physicalPowerView) {
                    GameMain.app.physicalPowerView = new PhysicalPowerView();
                }
                GameMain.app.physicalPowerView.refreshCoinAndPower();
                GameMain.app.physicalPowerView.popup();
            }
        };
        EventHandlePoker.prototype.GamePlayStart = function (IsRetry) {
            if (!this.gameManager.UIManager.pokerTable.pokerGroup.cardControls.IsCanDearCard()) {
                return;
            }
            this.gameManager.UIManager.challengeUI.FlushChallengeDateStr(); //刷新挑战字符串
            this.gameManager.UIManager.pokerTable.FlushBGImg();
            // ////console.log('l1');
            var isz = Number(Laya.LocalStorage.getItem("isChangeSize"));
            pokerRender.ReadSkin(isz);
            // ////console.log('l2');
            // if (GameMain.app.mWX.fhOnoff != 0 && GameMain.app.cutlevel == 0) {//第一次玩的话 开启新手指引
            // 	GameMain.app.isXinShow = true;
            // 	this.gameManager.userData.SetFirstPlay(false);
            // 	GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.OnGameStartTutorial);
            // }
            // else {
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.HideTutorial);
            this.gameManager.UIManager.pokerTable.pokerGroup.cardDecksData.SetGameModeByUserData(this.gameManager.userData);
            this.gameManager.UIManager.startGameUI.startGameUI.visible = false;
            this.gameManager.UIManager.startGameUI.stopSK();
            this.gameManager.UIManager.startGameUI.isStart = false;
            this.gameManager.UIManager.pokerTable.DearCard(IsRetry ? pokerUI.DearCardType.retry : pokerUI.DearCardType.normal); //发牌
            this.gameManager.UIManager.pokerTop.RestartTimer(); //重启计时器
            this.SetGameMainUIVisible(true);
            // }
            this.gameManager.userData.ClearTry();
            this.gameManager.UIManager.shopUI.FlushData(this.gameManager.userData);
            // ////console.log('s1');
        };
        //点击商店
        EventHandlePoker.prototype.OnClickShop = function () {
            this.gameManager.UIManager.startGameUI.startGameUI.visible = false;
            this.gameManager.UIManager.startGameUI.stopSK();
            this.gameManager.UIManager.startGameUI.isStart = false;
            this.gameManager.UIManager.shopUI.OpenShop(false);
        };
        //点击挑战
        EventHandlePoker.prototype.onClickChallenge = function () {
            this.gameManager.UIManager.challengeUI.SetVisible(true);
        };
        //点击设置
        EventHandlePoker.prototype.onClickSetting = function () {
            // GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.TipMaskVis, [true]);
            // this.gameManager.UIManager.settingUI.settingPopup.visible = true;
            if (this.gameManager.UIManager.pokerBottom.gameBottom.set.skin == 'local/游戏页/game_btn_声音关.png') {
                this.gameManager.UIManager.pokerBottom.gameBottom.set.skin = 'local/游戏页/game_btn_声音开.png';
                GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClickSettingSound, [true]);
            }
            else {
                this.gameManager.UIManager.pokerBottom.gameBottom.set.skin = 'local/游戏页/game_btn_声音关.png';
                GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClickSettingSound, [false]);
            }
        };
        //从商店返回
        EventHandlePoker.prototype.onClickBackToMainFromShop = function () {
            this.gameManager.UIManager.shopUI.shopUI.visible = false;
            this.gameManager.UIManager.startGameUI.startGameUI.visible = true;
            this.gameManager.UIManager.startGameUI.playSK();
            this.gameManager.UIManager.startGameUI.isStart = true;
        };
        EventHandlePoker.prototype.SetGameMainUIVisible = function (isVisible) {
            this.gameManager.UIManager.pokerTable.pokerTableUI.visible = isVisible;
            this.gameManager.UIManager.pokerTop.gameTopUI.visible = isVisible;
            this.gameManager.UIManager.pokerBottom.gameBottom.visible = isVisible;
            if (!isVisible) {
                this.gameManager.UIManager.pokerPopup.gamePopup.visible = isVisible;
            }
        };
        //点击返回主界面
        EventHandlePoker.prototype.onClickBackToMain = function () {
            this.SetGameMainUIVisible(false);
            GameMain.app.mingpainum = 1;
            this.gameManager.UIManager.startGameUI.startGameUI.num.text = GameMain.app.fakerlevelnum + 1;
            // GameMain.app.ismingpai = false;
            this.gameManager.UIManager.startGameUI.startGameUI.visible = true;
            this.gameManager.UIManager.startGameUI.playSK();
            this.gameManager.UIManager.startGameUI.isStart = true;
            if (GameMain.app.mWX.isAbTest) {
                // if (GameMain.app.mWX.mUID % 2 == 0) {
                this.gameManager.UIManager.startGameUI.startGameUI.startGame.visible = true;
                this.gameManager.UIManager.startGameUI.startGameUI.startFreeGame.visible = false;
                this.gameManager.UIManager.startGameUI.startGameUI.model.visible = false;
                // } 
                // else {
                // 	this.gameManager.UIManager.startGameUI.startGameUI.startGame.visible = false;
                // 	this.gameManager.UIManager.startGameUI.startGameUI.startFreeGame.visible = true;
                // 	this.gameManager.UIManager.startGameUI.startGameUI.model.visible = false;
                // }
            }
            else {
                this.gameManager.UIManager.startGameUI.startGameUI.startGame.visible = true;
                this.gameManager.UIManager.startGameUI.startGameUI.startFreeGame.visible = true;
                this.gameManager.UIManager.startGameUI.startGameUI.model.visible = false;
            }
        };
        EventHandlePoker.prototype.onMusicBtnChange = function (bool) {
            if (bool) {
                this.gameManager.UIManager.pokerBottom.gameBottom.set.skin = 'local/游戏页/game_btn_声音开.png';
            }
            else {
                this.gameManager.UIManager.pokerBottom.gameBottom.set.skin = 'local/游戏页/game_btn_声音关.png';
            }
        };
        //主界面点击showpopup
        EventHandlePoker.prototype.onClickShowPopup = function (type) {
            if (type === void 0) { type = 0; }
            if (GameMain.app.isXinShow) {
                return;
            }
            if (type == 0) {
                this.gameManager.UIManager.pokerPopup.gamePopup.cardSize.visible = false;
                this.gameManager.UIManager.pokerPopup.gamePopup.reTry.visible = true;
                this.gameManager.UIManager.pokerPopup.gamePopup.NEWGame.visible = true;
                this.gameManager.UIManager.pokerPopup.gamePopup.jump.visible = false;
                if (GameMain.app.isOpenFreeModel) {
                    this.gameManager.UIManager.pokerPopup.gamePopup.back.visible = true;
                    this.gameManager.UIManager.pokerPopup.gamePopup.NEWGame.skin = 'local/游戏页/game_btn_重试.png';
                }
                else {
                    this.gameManager.UIManager.pokerPopup.gamePopup.back.visible = false;
                    this.gameManager.UIManager.pokerPopup.gamePopup.NEWGame.skin = 'local/游戏页/game_btn_返回首页.png';
                    // if (GameMain.app.mWX.isAbTest) {
                    // if (GameMain.app.mWX.mUID % 2 == 0) {
                    // } else {
                    // 	this.gameManager.UIManager.pokerPopup.gamePopup.back.visible = true;
                    // 	this.gameManager.UIManager.pokerPopup.gamePopup.NEWGame.skin = 'local/游戏页/game_btn_重试.png';
                    // }
                    // }
                }
            }
            else if (type == 1) {
                this.gameManager.UIManager.pokerPopup.gamePopup.cardSize.visible = true;
                this.gameManager.UIManager.pokerPopup.gamePopup.reTry.visible = false;
                this.gameManager.UIManager.pokerPopup.gamePopup.NEWGame.visible = false;
                this.gameManager.UIManager.pokerPopup.gamePopup.jump.visible = false;
                this.gameManager.UIManager.pokerPopup.gamePopup.back.visible = false;
                var isz = Number(Laya.LocalStorage.getItem("isChangeSize"));
                // ////console.log('isz', isz);
                if (isz == 0) {
                    this.gameManager.UIManager.pokerPopup.gamePopup.bigKMask.visible = false;
                    this.gameManager.UIManager.pokerPopup.gamePopup.smallKMask.visible = true;
                }
                else {
                    this.gameManager.UIManager.pokerPopup.gamePopup.bigKMask.visible = true;
                    this.gameManager.UIManager.pokerPopup.gamePopup.smallKMask.visible = false;
                }
            }
            else if (type == 2) {
                if (this.gameManager.UIManager.startGameUI.startGameUI.visible) {
                    return;
                }
                Laya.timer.clear(this, this.hidePop);
                this.gameManager.UIManager.pokerPopup.gamePopup.cardSize.visible = false;
                this.gameManager.UIManager.pokerPopup.gamePopup.reTry.visible = false;
                this.gameManager.UIManager.pokerPopup.gamePopup.NEWGame.visible = false;
                this.gameManager.UIManager.pokerPopup.gamePopup.jump.visible = true;
                this.gameManager.UIManager.pokerPopup.gamePopup.back.visible = false;
                Laya.timer.once(10000, this, this.hidePop);
            }
            this.gameManager.UIManager.pokerPopup.gamePopup.visible = true;
        };
        EventHandlePoker.prototype.hidePop = function () {
            this.gameManager.UIManager.pokerPopup.gamePopup.visible = false;
        };
        EventHandlePoker.prototype.onClickNewGame = function () {
            this.OnGameStart();
        };
        EventHandlePoker.prototype.onClickRetry = function () {
            // if (ShopSetting.nowPpower > 0) {
            this.GamePlayStart(true);
            // } else {
            // 	this.onClickBackToMain();
            // 	if (!GameMain.app.physicalPowerView) {
            // 		GameMain.app.physicalPowerView = new PhysicalPowerView();
            // 	}
            // 	GameMain.app.physicalPowerView.refreshCoinAndPower();
            // 	GameMain.app.physicalPowerView.popup();
            // }
        };
        EventHandlePoker.prototype.onClickEndGame = function () {
            this.onClickBackToMain();
        };
        EventHandlePoker.prototype.onClickChangeSize = function (type) {
            pokerRender.ReadSkin(type);
            this.gameManager.UIManager.pokerTable.FlushBGImg();
            this.gameManager.UIManager.pokerTable.FlushAllCardRender();
        };
        //回撤 
        EventHandlePoker.prototype.onClickBackStep = function (type) {
            if (type === void 0) { type = 0; }
            this.gameManager.UIManager.pokerTable.pokerGroup.cardControls.BackStep(type);
            // this.gameManager.UIManager.pokerTable.pokerGroup.cardControls.setMoveBackFourDeck();
            // this.gameManager.UIManager.pokerTable.pokerGroup.cardControls.AutoBack(1);
            // ////console.log('xxyy2005');
            wxCore.uo.commitTotle("icon_page", { "create_time": "", "session_id": "", "is_new": "", "icon_type": 'Back_Step' });
        };
        EventHandlePoker.prototype.onClickNextStep = function () {
            this.gameManager.UIManager.pokerTable.pokerGroup.cardControls.resetAllCards();
        };
        //点击提示
        EventHandlePoker.prototype.onClickTips = function () {
            //onClickTips
            this.gameManager.UIManager.pokerTable.pokerGroup.cardTips.onClickTips();
            // wxCore.uo.commitTotle("icon_page", { "create_time": "", "session_id": "", "is_new": "", "icon_type": 'Show_Tips' });
        };
        //改变最下面的卡
        EventHandlePoker.prototype.onChangeLastCard = function (type, index, drag) {
            if (type === void 0) { type = 0; }
            if (index === void 0) { index = 0; }
            if (drag === void 0) { drag = null; }
            this.gameManager.UIManager.pokerTable.pokerGroup.cardTips.recoverAllCards(type, index, drag);
        };
        //点击明牌
        EventHandlePoker.prototype.OnClickShowAllHiddenCard = function () {
            if (this.gameManager.UIManager.pokerTable.IsTutorialStart) {
                return;
            }
            if (!this.gameManager.UIManager.pokerTable.pokerGroup.cardControls.IsCanUseShowHiddenCardItem()) {
                GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.ShowMessage, [10010]);
                return;
            }
            //
            this.gameManager.UIManager.confirmShowCard.confirmShowCardUI.visible = true;
        };
        //开始明牌
        EventHandlePoker.prototype.ShowHiddenCard = function () {
            this.gameManager.UIManager.confirmShowCard.confirmShowCardUI.visible = false;
            this.gameManager.UIManager.pokerTable.pokerGroup.cardControls.ShowAllHiddenCard();
        };
        //自动
        EventHandlePoker.prototype.OnClickAutoBackToAceCardDeck = function () {
            if (!this.gameManager.UIManager.pokerTable.pokerGroup.cardControls.GetIsAutoBacking()) {
                this.gameManager.UIManager.confirmAutoPlayUI.confirmAutoPlayUI.visible = true;
                this.gameManager.UIManager.pokerBottom.SetAutoEnable(false);
            }
        };
        //加体力，关闭体力框
        EventHandlePoker.prototype.AddPhysicalPower = function (bool) {
            if (ShopSetting.nowPpower < ShopSetting.nowPowerMax) {
                if (bool) {
                    ShopSetting.nowPpower += 3;
                }
                else {
                    ShopSetting.nowPpower += 1;
                }
                GameMain.app.mWX.refreshCutDown();
                GameMain.app.mWX.setUserValue('now_physical_power', ShopSetting.nowPpower + '');
            }
            if (GameMain.app.physicalPowerView) {
                GameMain.app.physicalPowerView.closeT();
            }
        };
        //显示胜利
        EventHandlePoker.prototype.onGameWin = function () {
            this.gameManager.UIManager.pokerTop.StopTimer();
            var text = this.gameManager.UIManager.pokerTop.GetTimeTextStr();
            this.gameManager.UIManager.winUI.ShowWin(text);
            if (pokerUI.challenge.nowChallengeDateStr != null && pokerUI.challenge.nowChallengeDateStr.length == 8) //挑战成功
             {
                this.gameManager.userData.addTochallengeMap(pokerUI.challenge.nowChallengeDateStr);
                pokerUI.challenge.nowChallengeDateStr = null;
            }
            this.gameManager.userData.AddGold(this.gameManager.userData.compliteOneGameGoldGain);
        };
        //检测是否要弹出自动
        EventHandlePoker.prototype.CheckAutoPlay = function () {
            if (this.gameManager.UIManager.confirmAutoPlayUI.confirmAutoPlayUI.visible) {
                return;
            }
            if (this.gameManager.UIManager.pokerBottom.IsAutoEnable()) {
                return;
            }
            if (this.gameManager.UIManager.pokerTable.pokerGroup.cardControls.GetIsAutoBacking()) {
                return;
            }
            if (!this.gameManager.UIManager.pokerTable.pokerGroup.cardControls.IsHaveHiddenCard()) {
                // pokerGame.SoundPlayer.PlaySound(17);
                // this.gameManager.UIManager.confirmAutoPlayUI.confirmAutoPlayUI.visible = true;
                this.gameManager.UIManager.pokerTable.shouVis(true);
                return;
            }
        };
        //微信分享成功
        EventHandlePoker.prototype.onShareWeChatSuccesse = function () {
            this.gameManager.UIManager.confirmAutoPlayUI.confirmAutoPlayUI.visible = false;
            this.gameManager.UIManager.pokerBottom.SetAutoEnable(false);
            if (!this.gameManager.UIManager.pokerTable.pokerGroup.cardControls.GetIsAutoBacking()) {
                if (!this.gameManager.UIManager.pokerTable.pokerGroup.cardControls.IsHaveHiddenCard()) {
                    this.gameManager.UIManager.pokerTable.pokerGroup.cardControls.AutoBack(1);
                    // ////console.log('xxyy2006');
                }
            }
        };
        EventHandlePoker.prototype.onMoveFourAni = function (type) {
            switch (type) {
                case 1:
                    var dk = this.gameManager.UIManager.pokerTable.pokerTableUI.Deck1;
                    this.runRAni(dk);
                    break;
                case 2:
                    var dk = this.gameManager.UIManager.pokerTable.pokerTableUI.Deck2;
                    this.runRAni(dk);
                    break;
                case 3:
                    var dk = this.gameManager.UIManager.pokerTable.pokerTableUI.Deck3;
                    this.runRAni(dk);
                    break;
                case 4:
                    var dk = this.gameManager.UIManager.pokerTable.pokerTableUI.Deck4;
                    this.runRAni(dk);
                    break;
            }
        };
        EventHandlePoker.prototype.runRAni = function (dk) {
            var rani = new Laya.Image();
            rani.skin = 'new/game_image_light.png';
            rani.size(120 * 1.05, 170 * 1.05);
            rani.alpha = 1;
            rani.anchorX = 0.5;
            rani.anchorY = 0.5;
            rani.pos(49, 80);
            dk.addChild(rani);
            Laya.Tween.to(rani, { width: 120 * 1.3, height: 170 * 1.3, alpha: 1 }, 100, Laya.Ease.cubicOut, Laya.Handler.create(this, function () {
                Laya.Tween.to(rani, { width: 120 * 1.8, height: 170 * 1.8, alpha: 0 }, 400, Laya.Ease.linearOut, Laya.Handler.create(this, function () {
                    rani.removeSelf();
                    rani.destroy();
                }));
            }));
        };
        //关闭自动完成确认按钮
        EventHandlePoker.prototype.onClickCLoseConfirmAutoPlayUI = function () {
            if (!this.gameManager.UIManager.pokerTable.pokerGroup.cardControls.GetIsAutoBacking()) {
                this.gameManager.UIManager.pokerBottom.SetAutoEnable(true);
            }
        };
        //更新金币显示
        EventHandlePoker.prototype.UpdateGoldUI = function () {
            var goldNum = this.gameManager.userData.Gold;
            if (this.gameManager.UIManager.pokerTop != null) {
                this.gameManager.UIManager.pokerTop.SetGoldText(goldNum.toString());
            }
            if (this.gameManager.UIManager.shopUI != null) {
                this.gameManager.UIManager.shopUI.SetGoldText(goldNum.toString());
            }
        };
        //点击金币使用明牌
        EventHandlePoker.prototype.onClickGoldUseShowCard = function () {
            if (!this.gameManager.UIManager.pokerTable.pokerGroup.cardControls.IsCanUseShowHiddenCardItem()) {
                GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.ShowMessage, [10010]);
                return;
            }
            if (this.gameManager.userData.IsHaveGold(this.gameManager.userData.showCardNeedGold)) //检测金币是否足够
             {
                this.gameManager.userData.AddGold(-this.gameManager.userData.showCardNeedGold);
                GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.ShowHiddenCard);
            }
            else {
                GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.ShowMessage, [10009]);
            }
        };
        EventHandlePoker.prototype.IsVJIASI = function (type, num) {
            this.gameManager.UIManager.pokerTable.setModel(type, num);
        };
        EventHandlePoker.prototype.onMingPaiTaiJi = function (bool) {
            if (GameMain.app.isOpenFreeModel) {
                this.gameManager.UIManager.pokerTable.MingPaiTaiJi(false);
            }
            else {
                this.gameManager.UIManager.pokerTable.MingPaiTaiJi(bool);
            }
        };
        EventHandlePoker.prototype.onRefreshSKAniLevel = function () {
            this.gameManager.UIManager.startGameUI.refreshSKDialog();
        };
        EventHandlePoker.prototype.onRefreshStartSK = function () {
            this.gameManager.UIManager.startGameUI.changeSK();
        };
        return EventHandlePoker;
    }());
    pokerGame.EventHandlePoker = EventHandlePoker;
})(pokerGame || (pokerGame = {}));
//# sourceMappingURL=EventHandlePoker.js.map
/**
* 连接的步骤数据
*/
var pokerGame;
(function (pokerGame) {
    var connectStep = /** @class */ (function () {
        function connectStep(toType, toNum, toLength, fromType, fromNum, isFromBackToFront) {
            this.addToDeckType = toType;
            this.addToDeckNum = toNum;
            this.addToDeckIndex = toLength;
            this.fromDeckType = fromType;
            this.fromDeckNum = fromNum;
            this.isFromDeckChangeToFront = isFromBackToFront;
        }
        return connectStep;
    }());
    pokerGame.connectStep = connectStep;
})(pokerGame || (pokerGame = {}));
//# sourceMappingURL=connectStep.js.map
/**
* 纸牌游戏规则
*/
var pokerGame;
(function (pokerGame) {
    var ChainGameRule = /** @class */ (function () {
        function ChainGameRule() {
            this.IsThreeCard = false; //每次三张
            this.IsVegasMode = false; //每次仅能跳过三次
            this.VegasModeJumpTime = 3; //维加斯模式下跳过次数
            var a = 'a';
            if (a == 'a')
                a = 'a';
        }
        ChainGameRule.prototype.GetConnectErroMessage = function (poker1, poker2) {
            if (poker1 == null) {
                //空的位置 只能放k
                if (poker2.data.mNum == 13) {
                    return 10004;
                }
                if (poker2.data.mNum != 0) {
                    return 10012;
                }
                return 0;
            }
            if (poker1.data.mNum != poker2.data.mNum + 1) {
                return 10002;
            }
            var IsPoker1Black = poker1.data.IsBlack() ? 1 : 0;
            var IsPoker2Black = poker2.data.IsBlack() ? 1 : 0;
            if (IsPoker1Black == IsPoker2Black) {
                return 10001;
            }
            return 0;
        };
        //是否可以连接两张牌
        ChainGameRule.prototype.IsCanConnect = function (poker1, poker2) {
            //if(poker1.data.IsKing()||poker2.data.IsKing())//国王卡，在纸牌里面没有意义
            //{
            //	return false;
            //}
            if (poker1 == null) {
                return poker2.data.mNum == 13; //空的位置 只能放k
            }
            var IsPoker1Black = poker1.data.IsBlack() ? 1 : 0;
            var IsPoker2Black = poker2.data.IsBlack() ? 1 : 0;
            if (IsPoker1Black != IsPoker2Black) {
                return poker1.data.mNum == poker2.data.mNum + 1;
            }
            else {
                //////console.log("poker1.data="+poker1.data.mType+"num="+poker1.data.mNum+" poker2.data="+poker2.data.mType+"num="+poker2.data.mNum);
            }
            return false;
        };
        ChainGameRule.prototype.GetTackBackErroMessage = function (pokerLastOneCard, pokerToTackBack) {
            if (pokerLastOneCard == null) {
                if (pokerToTackBack.data.mNum != 1) {
                    return 10003;
                }
            }
            if (pokerLastOneCard.data.mType != pokerToTackBack.data.mType) {
                return 10005;
            }
            else {
                if ((pokerLastOneCard.data.mNum + 1) != pokerToTackBack.data.mNum) {
                    return 10002;
                }
            }
        };
        //是否可以收回牌
        //pokerLastOneCard：最后一张卡，可能为空
        //pokerToTackBack:想要收回的卡
        ChainGameRule.prototype.IsCanTackBack = function (pokerLastOneCard, pokerToTackBack) {
            if (pokerLastOneCard == null) {
                return pokerToTackBack.data.mNum == 1;
            }
            if (pokerLastOneCard.data.mType == pokerToTackBack.data.mType) {
                return (pokerLastOneCard.data.mNum + 1) == pokerToTackBack.data.mNum;
            }
        };
        return ChainGameRule;
    }());
    pokerGame.ChainGameRule = ChainGameRule;
})(pokerGame || (pokerGame = {}));
//# sourceMappingURL=ChainGameRule.js.map
/**
* 提示事件处理
*/
var pokerGame;
(function (pokerGame) {
    var CardTips = /** @class */ (function () {
        function CardTips() {
            this.rule = new pokerGame.ChainGameRule();
            this.tipsDataList = new Array(); //显示的提示数据
            this.tipsRender = new poker.pokerGroupRender(poker.PokerGroupRenderMode.line);
            this.lightBack = null;
            this.tutorialortip = 1;
            var a = 'a';
            if (a == 'a')
                a = 'a';
        }
        CardTips.prototype.onClickTips = function () {
            this.ClearData(); //清理数据
            this.CheckAllCard(); //找到所有Tips数据
            this.ShowFristTip(); //显示所有TIps数据,生成动画
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.TipMaskVis, [true]);
        };
        CardTips.prototype.ClearData = function () {
            Laya.timer.clear(this, this.ShowFristTip);
            if (this.deckData.table != null) {
                Laya.Tween.clearAll(this.deckData.table.LineTips);
            }
            for (var i = 0; i < this.tipsDataList.length; i++) {
                this.tipsDataList[i].tipsGroup.Dispose();
            }
            this.tipsDataList.splice(0);
            this.tipsRender.removeChildren(0);
        };
        CardTips.prototype.ClearTutorialTips = function () {
            Laya.timer.clear(this, this.CheckTutorialTips);
        };
        CardTips.prototype.CheckTutorialTipsWithLoop = function (deckType, deckNum, index) {
            this.ClearTutorialTips();
            Laya.timer.loop(1900, this, this.CheckTutorialTips, [deckType, deckNum, index]);
        };
        CardTips.prototype.CheckTutorialTips = function (deckType, deckNum, index) {
            if (this.deckData.table == null) {
                return;
            }
            this.ClearData(); //清理数据
            var deck = this.deckData.GetDeck(deckType, deckNum);
            if (!deck.data.pokerList[index].data.IsCardBack) {
                var slicePoker = deck.data.SlicePokerGroup(index);
                if (this.CheckCanConnectGroup(slicePoker, deckType, deckNum, index)) {
                }
            }
            this.ShowFristTip(0);
        };
        CardTips.prototype.CheckAllCard = function () {
            //与7条线做检测
            for (var i = 0; i < this.deckData.pokerLineList.length; i++) {
                var checkGroup = this.deckData.pokerLineList[i];
                for (var j = 0; j < checkGroup.data.pokerList.length; j++) {
                    if (!checkGroup.data.pokerList[j].data.IsCardBack) {
                        var slicePoker = checkGroup.data.SlicePokerGroup(j);
                        if (this.CheckCanConnectGroup(slicePoker, pokerGame.pokerDeckType.Line, i + 1, j)) {
                        }
                        break; //第一个不是卡背的才有移动的价值
                    }
                }
            }
            if (this.deckData.ThreeCard.data.pokerList.length > 0) {
                var lastIndex = this.deckData.ThreeCard.data.pokerList.length - 1;
                var slicePoker = this.deckData.ThreeCard.data.SlicePokerGroup(lastIndex);
                if (this.CheckCanConnectGroup(slicePoker, pokerGame.pokerDeckType.threeCardDeck, 0, lastIndex)) {
                }
            }
            for (var i = 0; i < this.deckData.pokerDeckList.length; i++) {
                var checkGroup = this.deckData.pokerDeckList[i];
                if (checkGroup.data.pokerList.length <= 0) {
                    continue;
                }
                var lastIndex = checkGroup.data.pokerList.length - 1;
                var slicePoker = checkGroup.data.SlicePokerGroup(lastIndex);
                if (this.CheckCanConnectGroup(slicePoker, pokerGame.pokerDeckType.Deck, i + 1, lastIndex)) {
                    continue;
                }
            }
        };
        //检测4张A的卡堆中的卡，有没有移动的价值
        CardTips.prototype.CheckDeckCardIsNeedMove = function (deckGroupNeedMove, needAddLineNum) {
            var needConnectCard = deckGroupNeedMove.GetLastCard();
            //与7条线做检测
            for (var i = 0; i < this.deckData.pokerLineList.length; i++) {
                var checkGroup = this.deckData.pokerLineList[i];
                for (var j = 0; j < checkGroup.data.pokerList.length; j++) {
                    if (!checkGroup.data.pokerList[j].data.IsCardBack) {
                        var card = checkGroup.data.pokerList[j];
                        if (this.rule.IsCanConnect(needConnectCard, card)) {
                            return true;
                        }
                        break; //第一个不是卡背的才有移动的价值
                    }
                }
            }
            if (this.deckData.ThreeCard.data.pokerList.length > 0) {
                var lastIndex = this.deckData.ThreeCard.data.pokerList.length - 1;
                var card = this.deckData.ThreeCard.data.pokerList[lastIndex];
                if (this.rule.IsCanConnect(needConnectCard, card)) {
                    return true;
                }
            }
            return false;
        };
        CardTips.prototype.CheckCanConnectGroup = function (checkGroupData, typefrom, numfrom, indexFrom) {
            //与4个堆线做检测
            if (typefrom != pokerGame.pokerDeckType.Deck) {
                for (var i = 0; i < this.deckData.pokerDeckList.length; i++) {
                    var checkGroup = this.deckData.pokerDeckList[i];
                    if (checkGroupData.pokerList.length != 1) //每次只能返回一张到deck中
                     {
                        break;
                    }
                    if (this.rule.IsCanTackBack(checkGroup.data.GetLastCard(), checkGroupData.GetFirstCard())) //用规则检测能否返回
                     {
                        var movingData = new pokerGame.pokerTipsData();
                        movingData.tipsGroup = checkGroupData.ClonePokerGroup(0);
                        movingData.startPos = this.GetStartPos(typefrom, numfrom, indexFrom);
                        movingData.endPos = this.GetEndPos(pokerGame.pokerDeckType.Deck, i + 1);
                        this.tipsDataList.push(movingData);
                        return true;
                    }
                }
            }
            //与7条线做检测
            for (var i = 0; i < this.deckData.pokerLineList.length; i++) {
                var checkGroup = this.deckData.pokerLineList[i];
                if (typefrom == pokerGame.pokerDeckType.Line) {
                    if ((numfrom - 1) == i) {
                        continue;
                    }
                }
                if (this.rule.IsCanConnect(checkGroup.data.GetLastCard(), checkGroupData.GetFirstCard())) {
                    if (typefrom == pokerGame.pokerDeckType.Deck) { //需要检测移动之后有没有能移动进来的
                        if (!this.CheckDeckCardIsNeedMove(checkGroupData, i + 1)) //检测是否有移动的价值
                         {
                            continue;
                        }
                    }
                    var movingData = new pokerGame.pokerTipsData();
                    movingData.tipsGroup = checkGroupData.ClonePokerGroup(0);
                    movingData.startPos = this.GetStartPos(typefrom, numfrom, indexFrom);
                    movingData.endPos = this.GetEndPos(pokerGame.pokerDeckType.Line, i + 1);
                    this.tipsDataList.push(movingData);
                    return true;
                }
            }
            //tipsData
            return false;
        };
        CardTips.prototype.GetStartPos = function (typefrom, numfrom, indexFrom) {
            var root = this.deckData.GetDeckSpriteRoot(typefrom, numfrom);
            var deck = this.deckData.GetDeck(typefrom, numfrom);
            var posCard = deck.data.pokerList[indexFrom];
            var cardPos = new Laya.Point(0, 0);
            if (posCard != null) {
                cardPos = new Laya.Point(posCard.render.img.x, posCard.render.img.y);
            }
            var tRetPos = new Laya.Point(root.x + cardPos.x * root.scaleX, root.y + cardPos.y * root.scaleY);
            return tRetPos;
        };
        CardTips.prototype.GetEndPos = function (typeTo, numTo) {
            var root = this.deckData.GetDeckSpriteRoot(typeTo, numTo);
            var deck = this.deckData.GetDeck(typeTo, numTo);
            var posCard = deck.data.GetLastCard();
            var cardPos = new Laya.Point(0, 0);
            if (posCard != null) {
                cardPos = new Laya.Point(posCard.render.img.x, posCard.render.img.y);
            }
            var tRetPos = new Laya.Point(root.x + cardPos.x * root.scaleX, root.y + cardPos.y * root.scaleY);
            if (typeTo == pokerGame.pokerDeckType.Line) {
                if (deck.data.pokerList.length != 0) {
                    tRetPos.y += poker.pokerGroupRender.lineHeightSpacing;
                }
            }
            return tRetPos;
        };
        CardTips.prototype.ShowFristTip = function (type) {
            if (type === void 0) { type = 1; }
            if (GameMain.app.isXinShow) {
                return;
            }
            if (this.tipsDataList.length <= 0) {
                // ////console.log('!!!!!!!!!!!');
                if (this.deckData.StartCard.data.pokerList.length == 0) {
                    GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.ShowMessage, [10013]); //请使用明牌道具
                    // ////console.log('无路可走');
                    Laya.timer.once(500, this, function () {
                        GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.TipMaskVis, [false]);
                    });
                    return;
                }
                var child = this.deckData.StartCard.data.pokerList[this.deckData.StartCard.data.pokerList.length - 1].render.img.skin;
                // this.deckData.table.StartCardTip.addChild(child);
                var stck = new Laya.Image();
                stck.skin = child;
                this.deckData.table.StartCardTip.addChild(stck);
                this.addLight(this.deckData.table.StartCardTip);
                // if (this.deckData.table.LineTips != null) {
                var oldX = this.deckData.table.StartCardTip.x;
                //Laya.Tween.clearAll(this.deckData.table.LineTips);
                var maxI = 4;
                for (var i = 0; i < maxI; i++) {
                    var pluse = i % 2 == 0 ? 1 : -1;
                    var num = pluse * 10;
                    var time = 1000;
                    Laya.Tween.to(this.deckData.table.StartCardTip, { x: oldX + num }, time, null, null, i * time);
                }
                Laya.Tween.to(this.deckData.table.StartCardTip, { x: oldX }, time, null, new Laya.Handler(this, function () {
                    GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.TipMaskVis, [false]);
                    if (this.lightBack) {
                        stck.removeSelf();
                        stck.destroy();
                        this.lightBack.removeSelf();
                        this.lightBack.destroy();
                    }
                }), maxI * time);
                // }
                return;
            }
            var firstTip = this.tipsDataList[0]; //显示第一个
            this.tipsDataList.splice(0, 1);
            this.ShowTip(firstTip, type);
        };
        CardTips.prototype.ShowNextTip = function () {
            if (this.lightBack) {
                this.lightBack.removeSelf();
                this.lightBack.destroy();
            }
            if (this.tipsDataList.length <= 0) {
                this.ClearData();
                this.tutorialortip == 1 ? GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.TipMaskVis, [false]) : null;
                return;
            }
            var firstTip = this.tipsDataList[0]; //显示第一个
            this.tipsDataList.splice(0, 1);
            this.ShowTip(firstTip);
        };
        CardTips.prototype.ShowTip = function (tip, type) {
            if (type === void 0) { type = 1; }
            this.tutorialortip = type;
            //var tip=this.tipsDataList[i];
            var data = tip.tipsGroup;
            this.tipsRender.FlushPokerList(data);
            if (this.tipsRender.parent == null) {
                this.deckData.table.LineTips.addChild(this.tipsRender);
            }
            // console.debug("tip.startPos.x,tip.startPos.y="+tip.startPos.x.toString()+","+tip.startPos.y.toString());
            this.deckData.table.LineTips.pos(tip.startPos.x, tip.startPos.y);
            Laya.Tween.clearAll(this.deckData.table.LineTips);
            type == 0 ? null : this.addLight(this.deckData.table.LineTips);
            Laya.Tween.to(this.deckData.table.LineTips, { x: tip.endPos.x, y: tip.endPos.y }, 1200, Laya.Ease.sineOut, Laya.Handler.create(this, this.ShowNextTip), 0);
        };
        CardTips.prototype.addLight = function (target) {
            this.lightBack = new Laya.Image();
            Laya.loader.load([{ url: "res/atlas/UI.atlas", type: Laya.Loader.ATLAS }], Laya.Handler.create(this, function () {
                this.lightBack.skin = 'UI/game_image_bottomLight.png';
            }));
            this.lightBack.size(134, 184);
            this.lightBack.pos(-16, -16);
            target.addChild(this.lightBack);
            this.lightBack.zOrder = 99;
        };
        CardTips.prototype.recoverAllCards = function (type, idx, drag) {
            if (pokerRender.rsty == 0) {
                return;
            }
            if (type == 0) {
                // for (var i = 0; i < this.deckData.pokerLineList.length; i++) {
                // ////console.log('checkGroup', this.deckData.pokerLineList, idx, this.deckData.pokerLineList[idx - 1].data.pokerList.length);
                var checkGroup = this.deckData.pokerLineList[idx - 1];
                for (var j = 0; j < checkGroup.data.pokerList.length; j++) {
                    if (j == checkGroup.data.pokerList.length - 1) {
                        pokerRender.ReadSkin(1, false);
                        checkGroup.data.pokerList[checkGroup.data.pokerList.length - 1].render.ChangeRenderByData(checkGroup.data.pokerList[checkGroup.data.pokerList.length - 1].data);
                    }
                    else {
                        pokerRender.ReadSkin(1, true);
                        checkGroup.data.pokerList[j].render.ChangeRenderByData(checkGroup.data.pokerList[j].data);
                    }
                }
                // }
            }
            else {
                // ////console.log('checkGroup', this.deckData.pokerLineList, idx, this.deckData.pokerLineList[idx - 1].data.pokerList.length);
                var checkGroup = this.deckData.pokerLineList[idx - 1];
                for (var j = 0; j < checkGroup.data.pokerList.length; j++) {
                    pokerRender.ReadSkin(1, true);
                    checkGroup.data.pokerList[j].render.ChangeRenderByData(checkGroup.data.pokerList[j].data);
                }
                pokerRender.ReadSkin(1, false);
                drag.DragingGroup.data.pokerList[0].render.ChangeRenderByData(drag.DragingGroup.data.pokerList[0].data);
            }
        };
        return CardTips;
    }());
    pokerGame.CardTips = CardTips;
})(pokerGame || (pokerGame = {}));
//# sourceMappingURL=CardTips.js.map
/**
* 牌桌逻辑
*/
var pokerGame;
(function (pokerGame) {
    var CardDeckData = /** @class */ (function () {
        function CardDeckData() {
            /**
            设置相关
    
            */
            this.isThreeCardOnce = true; //是否只翻一张
            this.IsLasvigasMode = true; //是否是拉斯维加斯模式
            this.LasvigasModeCount = 0;
            this.cardListKeep = new Array(); //发牌之后保存的卡牌数据,用来重来一次
            this.ThreeCard = new poker.pokerChainGroup(poker.PokerGroupRenderMode.lastThreeCard); //三张牌的显示
            this.StartCard = new poker.pokerChainGroup(poker.PokerGroupRenderMode.lastOneCard); //开始的牌堆
            this.pokerLineList = new Array(); //牌线 1-7
            this.pokerDeckList = new Array(); //四个堆
            this.connectStepList = new Array(); //连接的历史记录,用来做回退
            this.xxzxc = 0;
            // ////console.log('pokerGroupData1', this.StartCard);
            // ////console.log('pokerGroupData11', this.ThreeCard);
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.onClearHistory, this, this.onClearHistory);
            this.StartCard.render.zeroCardName = "img_trans.png";
            this.StartCard.data.CreateFull();
            this.StartCard.data.SetLastCardBackIfNot();
            this.StartCard.FlushRender();
            var a = 'a';
            if (a == 'a')
                a = 'a';
            //四个堆数据
            for (var i = 0; i < 4; i++) {
                var deck = new poker.pokerChainGroup(poker.PokerGroupRenderMode.lastOneCard);
                deck.render.zeroCardName = "img_A.png";
                this.pokerDeckList.push(deck);
            }
            //七行数据
            for (var i = 0; i < 7; i++) {
                var line = new poker.pokerChainGroup(poker.PokerGroupRenderMode.line);
                line.render.zeroCardName = "img_zero.png";
                this.pokerLineList.push(line);
                // ////console.log('sp2 ', this.pokerLineList);
            }
        }
        CardDeckData.prototype.IsCanTabBackToStart = function () {
            if (this.IsLasvigasMode) {
                GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.isVJIASI, [this.IsLasvigasMode, this.LasvigasModeCount - 1]);
                // ////console.log('isVigasMode', this.LasvigasModeCount);
                return this.LasvigasModeCount > 0;
            }
            return true;
        };
        CardDeckData.prototype.TabBackToStartOnce = function () {
            if (this.IsLasvigasMode) {
                return this.LasvigasModeCount--;
            }
        };
        CardDeckData.prototype.SetGameModeByUserData = function (userData) {
            this.SetGameMode(userData.isThreeCardOnce, userData.isVigasMode);
        };
        CardDeckData.prototype.SetGameMode = function (isThreeCardOnce, IsLasvigasMode) {
            this.isThreeCardOnce = isThreeCardOnce;
            this.IsLasvigasMode = IsLasvigasMode;
            if (this, IsLasvigasMode) {
                this.LasvigasModeCount = 3;
            }
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.isVJIASI, [this.IsLasvigasMode, this.LasvigasModeCount]);
        };
        CardDeckData.prototype.onClearHistory = function () {
            this.connectStepList = [];
        };
        CardDeckData.prototype.FlushAllPokerRender = function () {
            this.StartCard.FlushRender();
            this.ThreeCard.FlushRender();
            //四个堆数据
            for (var i = 0; i < 4; i++) {
                this.pokerDeckList[i].FlushRender();
            }
            //七行数据
            for (var i = 0; i < 7; i++) {
                this.pokerLineList[i].FlushRender();
            }
        };
        CardDeckData.prototype.FlushAllCardRender = function () {
            this.StartCard.data.FlushAllCardRender();
            this.ThreeCard.data.FlushAllCardRender();
            //四个堆数据
            for (var i = 0; i < 4; i++) {
                this.pokerDeckList[i].data.FlushAllCardRender();
            }
            //七行数据
            for (var i = 0; i < 7; i++) {
                this.pokerLineList[i].data.FlushAllCardRender();
            }
        };
        //新增一步历史记录
        CardDeckData.prototype.AddStep = function (toType, toNum, toLength, fromType, fromNum, fromBackToFront) {
            var step = new pokerGame.connectStep(toType, toNum, toLength, fromType, fromNum, fromBackToFront);
            this.connectStepList.push(step);
            // ////console.log('this.connectStepList+', step);
            GameMain.app.nextStepArray.push({ addToDeckType: toType, addToDeckNum: toNum, addToDeckIndex: toLength, fromDeckType: fromType, fromDeckNum: fromNum, isFromDeckChangeToFront: fromBackToFront });
            // ////console.log('GameMain.app.nextStepArray', GameMain.app.nextStepArray);
        };
        CardDeckData.prototype.ClearStep = function () {
            this.connectStepList.splice(0);
        };
        //获得最后一步回撤历史记录
        CardDeckData.prototype.GetLastBackStep = function () {
            if (this.connectStepList.length <= 0) {
                return null;
            }
            var lastIndex = this.connectStepList.length - 1;
            var lastStep = this.connectStepList[lastIndex];
            // ////console.log('this.connectStepList-', lastStep);
            return lastStep;
        };
        // public shadowImg1: Laya.Image;
        // public shadowImg2: Laya.Image;
        // public mask1: Laya.Image;
        // public mask2: Laya.Image;
        CardDeckData.prototype.bt2 = function (callback) {
            var lastIndex = this.connectStepList.length - 1;
            var lastStep = this.connectStepList[lastIndex];
            var fromGroup = this.GetDeck(lastStep.fromDeckType, lastStep.fromDeckNum);
            var lastcard = fromGroup.data.GetLastCard();
            if (!lastcard || !lastcard.render) {
                callback();
                return;
            }
            // ////console.log('lastcard', lastcard);
            lastcard.render.img.skin = '';
            lastcard.render.shadowImg1.visible = false;
            var x1;
            var x2;
            if (!x1) {
                x1 = new Laya.Image();
            }
            if (!x2) {
                x2 = new Laya.Image();
            }
            x1.size(lastcard.render.img.width, lastcard.render.img.height);
            x2.size(lastcard.render.img.width, lastcard.render.img.height);
            x1.skin = lastcard.render.ImageFileName;
            x2.skin = pokerRender.backSkinName;
            lastcard.render.img.addChild(x1);
            lastcard.render.img.addChild(x2);
            x1.scaleX = 1;
            x2.scaleX = 0;
            x1.anchorX = 0.5;
            x2.anchorX = 0.5;
            x1.pos(x1.width / 2, 0);
            x2.pos(x2.width / 2, 0);
            Laya.Tween.to(x1, { scaleX: 0 }, CardSpeedSetting.speed8, Laya.Ease.linearIn, new Laya.Handler(this, function () {
                Laya.Tween.to(x2, { scaleX: 1 }, CardSpeedSetting.speed8, Laya.Ease.linearOut, new Laya.Handler(this, function () {
                    callback();
                    lastcard.render.img.skin = pokerRender.backSkinName;
                    lastcard.render.shadowImg1.visible = true;
                    x1.removeSelf();
                    x2.removeSelf();
                    x1 = null;
                    x2 = null;
                }));
            }));
        };
        //数据回退一步历史记录
        CardDeckData.prototype.BackStep = function () {
            if (this.connectStepList.length <= 0) {
                return null;
            }
            var lastIndex = this.connectStepList.length - 1;
            var lastStep = this.connectStepList[lastIndex];
            var toGroup = this.GetDeck(lastStep.addToDeckType, lastStep.addToDeckNum);
            var fromGroup = this.GetDeck(lastStep.fromDeckType, lastStep.fromDeckNum);
            if (lastStep.isFromDeckChangeToFront) //是否需要变回卡背
             {
                var lastcard = fromGroup.data.GetLastCard();
                if (lastcard != null) {
                    lastcard.data.IsCardBack = true;
                }
            }
            var datatoConnect = toGroup.data.SplitePokerGroup(lastStep.addToDeckIndex);
            if (lastStep.fromDeckType == pokerGame.pokerDeckType.startDeck) {
                //this.StartCard.data.pokerList.reverse();
                datatoConnect.pokerList.reverse();
            }
            fromGroup.data.Concat(datatoConnect);
            if (lastStep.fromDeckType == pokerGame.pokerDeckType.startDeck) {
                fromGroup.data.SetAllCardToBack();
            }
            toGroup.FlushRender();
            fromGroup.FlushRender();
            this.connectStepList.splice(lastIndex);
            return lastStep;
        };
        CardDeckData.prototype.GetAceDeckSpriteRoot = function (deckNum) {
            switch (deckNum) {
                case 1:
                    return this.table.Deck1;
                case 2:
                    return this.table.Deck2;
                case 3:
                    return this.table.Deck3;
                case 4:
                    return this.table.Deck4;
            }
            return null;
        };
        CardDeckData.prototype.GetLineSpriteRoot = function (lineNum) {
            switch (lineNum) {
                case 1:
                    return this.table.Line1;
                case 2:
                    return this.table.Line2;
                case 3:
                    return this.table.Line3;
                case 4:
                    return this.table.Line4;
                case 5:
                    return this.table.Line5;
                case 6:
                    return this.table.Line6;
                case 7:
                    return this.table.Line7;
            }
            return null;
        };
        CardDeckData.prototype.GetDeckSpriteRoot = function (type, GroupNum) {
            var tRet = null;
            switch (type) {
                case pokerGame.pokerDeckType.startDeck:
                    return this.table.StartCard;
                case pokerGame.pokerDeckType.threeCardDeck:
                    return this.table.ThreeCard;
                case pokerGame.pokerDeckType.Line:
                    {
                        if (GroupNum > 0 && GroupNum <= 7) {
                            return this.GetLineSpriteRoot(GroupNum);
                        }
                    }
                    break;
                case pokerGame.pokerDeckType.Deck:
                    {
                        if (GroupNum > 0 && GroupNum <= 4) {
                            return this.GetAceDeckSpriteRoot(GroupNum);
                        }
                    }
                    break;
            }
            return null;
        };
        CardDeckData.prototype.GetDeck = function (type, GroupNum) {
            var tRet = null;
            switch (type) {
                case pokerGame.pokerDeckType.startDeck:
                    return this.StartCard;
                case pokerGame.pokerDeckType.threeCardDeck:
                    return this.ThreeCard;
                case pokerGame.pokerDeckType.Line:
                    {
                        if (GroupNum > 0 && GroupNum <= 7) {
                            return this.pokerLineList[GroupNum - 1];
                        }
                    }
                    break;
                case pokerGame.pokerDeckType.Deck:
                    {
                        if (GroupNum > 0 && GroupNum <= 4) {
                            return this.pokerDeckList[GroupNum - 1];
                        }
                    }
                    break;
            }
            return null;
        };
        //收回牌到牌堆里面
        CardDeckData.prototype.AllCardBackToStart = function () {
            for (var i = 0; i < 4; i++) {
                this.BackToStart(this.pokerDeckList[i]);
            }
            this.BackToStart(this.ThreeCard);
            for (var i = 0; i < 7; i++) {
                this.BackToStart(this.pokerLineList[i]);
            }
            this.StartCard.data.SetLastCardBackIfNot();
            for (var i = 0; i < this.StartCard.data.pokerList.length; i++) {
                var poker = this.StartCard.data.pokerList[i];
                poker.render.img.removeSelf();
            }
            this.StartCard.FlushRender();
        };
        CardDeckData.prototype.BackToStart = function (pokerGroup) {
            var pokerData = pokerGroup.data;
            this.StartCard.data.Concat(pokerData);
            pokerGroup.FlushRender();
        };
        CardDeckData.prototype.SaveStartCardData = function () {
            this.cardListKeep.splice(0);
            for (var i = 0; i < this.StartCard.data.pokerList.length; i++) {
                var pokerdata = this.StartCard.data.pokerList[i];
                this.cardListKeep.push(pokerdata.data.Clone());
            }
            // ////console.log('SaveStartCardList00000000000000', JSON.stringify(this.cardListKeep));
            // if (!GameMain.app.getValues) {
            // 	GameMain.app.mWX.setUserValue('SaveStartCardList', JSON.stringify(this.cardListKeep));
            // }
            GameMain.app.getValues = null;
            GameMain.app.getValues = JSON.stringify(this.cardListKeep);
            // wxCore.uo.commitTotle("start_button_click", { "create_time": "", "session_id": "", "is_new": "", "game_type": 1, "is_free_model": GameMain.app.isOpenFreeModel, "true_current_level": GameMain.app.cutlevel });
        };
        CardDeckData.prototype.LoadStartCardData = function () {
            for (var i = 0; i < this.StartCard.data.pokerList.length && i < this.cardListKeep.length; i++) {
                var pokerdata = this.StartCard.data.pokerList[i];
                var keepData = this.cardListKeep[i];
                // ////console.log('this.cardListKeep', keepData);
                pokerdata.data.SetData(keepData);
                pokerdata.FlushRender();
            }
            // wxCore.uo.commitTotle("start_button_click", { "create_time": "", "session_id": "", "is_new": "", "game_type": 2, "is_free_model": GameMain.app.isOpenFreeModel, "true_current_level": GameMain.app.cutlevel });
        };
        CardDeckData.prototype.setKeepCardList = function (cardListKeep) {
            this.cardListKeep = cardListKeep;
        };
        //重新开始发牌
        CardDeckData.prototype.RestartDearCard = function () {
            if (this.cardListKeep.length != 52) {
                return this.DearCard();
            }
            this.AllCardBackToStart();
            this.LoadStartCardData();
            return this.DearStartDeck();
        };
        //普通发牌
        CardDeckData.prototype.DearCard = function () {
            this.AllCardBackToStart();
            this.StartCard.data.ShuffleWithTime(3); //洗牌三次
            this.SaveStartCardData();
            return this.DearStartDeck();
        };
        //发新手指引牌
        CardDeckData.prototype.DearTutorialCard = function () {
            var tt;
            // tt = new TutorialCard();
            tt = new pokerGame.PersonalSetCard(1);
            tt.SetTutorialCard(this);
            if (this.cardListKeep.length == 0) {
                this.SaveStartCardData();
            }
            return this.DearStartDeck();
        };
        //发关卡牌
        CardDeckData.prototype.DearLevelCard = function () {
            var tt;
            if (GameMain.app.levelnum != 0) {
                tt = new pokerGame.PersonalSetCard();
            }
            tt.SetTutorialCard(this);
            // ////console.log('cardList2', tt);
            if (this.cardListKeep.length == 0) {
                this.SaveStartCardData();
            }
            return this.DearStartDeck();
        };
        CardDeckData.prototype.DearStartDeck = function () {
            this.DearCardArray = new Array();
            var pGroup;
            for (var i = 0; i < 7; i++) {
                if (GameMain.app.isSpecialModel) {
                    pGroup = this.StartCard.data.SplitePokerGroupByNum(GameMain.app.SpecialRows[i]);
                }
                else {
                    pGroup = this.StartCard.data.SplitePokerGroupByNum(i + 1);
                }
                //pGroup.pokerList.reverse();
                this.DearCardArray.push(pGroup);
            }
            this.SetAllStartCardToBack();
            this.StartCard.FlushRender();
            return this.DearCardArray;
        };
        CardDeckData.prototype.DearFourDeck = function () {
            this.DearFourArray = new Array();
            for (var i = 0; i < 4; i++) {
                var pGroup = this.StartCard.data.SplitePokerGroupByNum(GameMain.app.SpecialDecks[i]);
                //pGroup.pokerList.reverse();
                this.DearFourArray.push(pGroup);
                // ////console.log('pGroup', pGroup);
            }
            this.SetAllStartCardToBack();
            this.StartCard.FlushRender();
            return this.DearFourArray;
        };
        //动画播放完毕之后
        CardDeckData.prototype.connectDearCardArrayToRender = function (index, sortEndHandle) {
            var i = index;
            this.pokerLineList[i].data.Concat(this.DearCardArray[i]);
            this.pokerLineList[i].data.SetOnlyLastCardFront();
            this.pokerLineList[i].render.FlushPokerList(this.pokerLineList[i].data, false);
            this.pokerLineList[i].render.SortAndMoveToPos(sortEndHandle);
            // ////console.log(this.pokerLineList[0].data.pokerList[this.pokerLineList[0].data.pokerList.length - 1].render);
            // 			if(i == this.pokerLineList.length - 1){
            // Laya.timer.once(100, this, function () {
            // 				for (let it = 0; it < this.pokerLineList.length - 1; it++) {
            // 					var ix = this.pokerLineList[it].data;
            // 					var rd = ix.pokerList[ix.pokerList.length - 1].render;
            // 					var ifname = pokerRender.cardSkinName + pokerRender.GetImgFileName(ix.pokerList[ix.pokerList.length - 1].data);
            // 					rd.img.skin = '';
            // 					rd.img.size(102, 152);
            // 					rd.shadowImg1.visible = false;
            // 					var x1: Laya.Image;
            // 					var x2: Laya.Image;
            // 					if (!x1) {
            // 						x1 = new Laya.Image();
            // 					}
            // 					if (!x2) {
            // 						x2 = new Laya.Image();
            // 					}
            // 					x1.size(rd.img.width, rd.img.height);
            // 					x2.size(rd.img.width, rd.img.height);
            // 					x1.skin = pokerRender.backSkinName;
            // 					x2.skin = ifname;
            // 					rd.img.addChild(x1);
            // 					rd.img.addChild(x2);
            // 					x1.scaleX = 1;
            // 					x2.scaleX = 0;
            // 					x1.anchorX = 0.5;
            // 					x2.anchorX = 0.5;
            // 					x1.pos(x1.width / 2, 0);
            // 					x2.pos(x2.width / 2, 0);
            // 					Laya.Tween.to(x1, { scaleX: 0 }, 150, Laya.Ease.linearIn, new Laya.Handler(this, function () {
            // 						Laya.Tween.to(x2, { scaleX: 1 }, 150, Laya.Ease.linearOut, new Laya.Handler(this, function () {
            // 							x1.removeSelf();
            // 							x2.removeSelf();
            // 							x1 = null;
            // 							x2 = null;
            // 							var newSkinName = ifname;
            // 							if (rd.img.skin != newSkinName) {
            // 								rd.img.graphics.clear();
            // 								rd.img.skin = ifname;
            // 							}
            // 							rd.shadowImg1.visible = true;
            // 						}));
            // 					}));
            // 				}
            // 			})
            // 			}
        };
        CardDeckData.prototype.connectDearCardArrayToRender2 = function (index, sortEndHandle) {
            var i = index;
            this.pokerDeckList[i].data.Concat(this.DearFourArray[i]);
            this.pokerDeckList[i].data.SetAllCardToFront();
            this.pokerDeckList[i].render.FlushPokerList(this.pokerDeckList[i].data, false);
            // ////console.log('vGroupData.pokerList2 ', this.pokerDeckList[i].data);
        };
        //开始卡组里面的所有卡片变成背面
        CardDeckData.prototype.SetAllStartCardToBack = function () {
            this.StartCard.data.SetAllCardToBack();
            this.StartCard.data.FlushAllCardRender();
        };
        //清理桌面
        CardDeckData.prototype.ClearTable = function (table) {
            for (var i = 0; i < 4; i++) {
                var spr = this.GetAceDeckSpriteRoot(i + 1);
                spr.removeChildren(0);
            }
            for (var i = 0; i < 7; i++) {
                var spr = this.GetLineSpriteRoot(i + 1);
                spr.removeChildren(0);
            }
            table.ThreeCard.removeChildren(0);
            table.StartCard.removeChildren(0);
        };
        CardDeckData.prototype.RemoveFromTable = function () {
            this.ClearTable(this.table);
            this.table = null;
            this.StartCard.data.RemoveAllCardRender();
            this.ThreeCard.data.RemoveAllCardRender();
            //四个堆数据
            for (var i = 0; i < 4; i++) {
                this.pokerDeckList[i].data.RemoveAllCardRender();
            }
            //七行数据
            for (var i = 0; i < 7; i++) {
                this.pokerLineList[i].data.RemoveAllCardRender();
                // ////console.log('record3 ', this.pokerLineList);
            }
        };
        CardDeckData.prototype.AddToTable = function (table) {
            this.table = table;
            this.ClearTable(table);
            for (var i = 0; i < 4; i++) {
                var spr = this.GetAceDeckSpriteRoot(i + 1);
                spr.addChild(this.pokerDeckList[i].render);
            }
            table.ThreeCard.addChild(this.ThreeCard.render);
            table.StartCard.addChild(this.StartCard.render);
            for (var i = 0; i < 7; i++) {
                var spr = this.GetLineSpriteRoot(i + 1);
                spr.addChild(this.pokerLineList[i].render);
                // ////console.log('record2 ', this.pokerLineList);
            }
        };
        return CardDeckData;
    }());
    pokerGame.CardDeckData = CardDeckData;
})(pokerGame || (pokerGame = {}));
//# sourceMappingURL=CardDeckData.js.map
/**
* 点击，拖动事件的处理
*/
var pokerGame;
(function (pokerGame) {
    var CardControls = /** @class */ (function () {
        function CardControls() {
            this.rule = new pokerGame.ChainGameRule();
            /**
                拖动相关
            */
            //private DragMoveingGroup: poker.pokerChainGroup = new poker.pokerChainGroup(poker.PokerGroupRenderMode.line);//正在拖动的牌堆
            this.DragMovingStartPos = new laya.maths.Point();
            this.IsStartDraging = false; //开始拖拽
            this.IsStartDragMoved = false; //是否开始拖动了(点击判断使用)
            this.MouseStartPos = new laya.maths.Point();
            this.dragData = new pokerGame.pokerMovingData();
            this.IsAutoMoving = false; //正在自动移动
            this.IsGameEnd = false; //游戏结束
            this.IsAutoBacking = false; //自动快速移动,自动解决的时候使用
            this.IsTutorialStarted = false; //新手指引开始
            this.clickImg = null;
            this.dragPokerGroup = new Array();
            this.dragPokerGroupIndex = 0;
            this.shadowImg1 = null;
            this.shadowImg2 = null;
            this.mask1 = null;
            this.mask2 = null;
            this.shinning = null;
            this.dragInListOne = 0;
            this.shadow1OtherList = new Array();
            this.shadow2OtherList = new Array();
            this.mask1OtherList = new Array();
            this.mask2OtherList = new Array();
            this.shinningOtherList = new Array();
            this.isDownTween = false;
            this.dtime = 400;
            this.longClickTime = 100;
            this.nowTimeDown = 0;
            this.isEabToDown = false;
            this.CollisionArrList = new Array();
            this.dragData.DragingGroup = new poker.pokerChainGroup(poker.PokerGroupRenderMode.line); //正在拖动的牌堆
            this.dragData.DragingGroup.render.collisionMode = poker.PokerGroupCollisionMode.FirstCardCollision;
            var a = 'a';
            if (a == 'a')
                a = 'a';
        }
        //是否可以切换牌
        CardControls.prototype.IsCanChangeCard = function () {
            return this.IsCanStartCardClick();
        };
        //是否可以发牌
        CardControls.prototype.IsCanDearCard = function () {
            return this.IsCanStartCardClick();
        };
        //是否正在自动完成
        CardControls.prototype.GetIsAutoBacking = function () {
            return this.IsAutoBacking;
        };
        CardControls.prototype.ResetPlayData = function () {
            this.IsAutoMoving = false;
            this.IsGameEnd = false;
            this.IsAutoBacking = false;
            Laya.Tween.clearAll(this.deckData.table.LineMove);
            if (this.dragData.DragingGroup.data.pokerList.length > 0) {
                this.dragDataBack();
            }
        };
        CardControls.prototype.SetTableClick = function (table, tableTop, tableBottom) {
            table.offAll();
            table.on(Laya.Event.MOUSE_MOVE, this, this.onMounseMove);
            table.on(Laya.Event.MOUSE_UP, this, this.onMounseUp);
            tableTop.offAll();
            tableTop.on(Laya.Event.MOUSE_MOVE, this, this.onMounseUp);
            tableTop.on(Laya.Event.MOUSE_UP, this, this.onMounseUp);
            tableBottom.offAll();
            tableBottom.on(Laya.Event.MOUSE_MOVE, this, this.onMounseUp);
            tableBottom.on(Laya.Event.MOUSE_UP, this, this.onMounseUp);
        };
        CardControls.prototype.Flush = function (type, GroupNum) {
            this.FlushRender(type, GroupNum);
            // ////console.log('FlushClickEvent1');
            this.FlushClickEvent(type, GroupNum);
        };
        CardControls.prototype.FlushRender = function (type, GroupNum) {
            switch (type) {
                case pokerGame.pokerDeckType.startDeck:
                    this.FlushStartRender();
                    break;
                case pokerGame.pokerDeckType.Line:
                    this.FlushLineRender(GroupNum - 1);
                    break;
                case pokerGame.pokerDeckType.Deck:
                    this.FlushDeckRender(GroupNum - 1);
                    break;
                case pokerGame.pokerDeckType.threeCardDeck:
                    this.FlushThreeCardRender();
                    break;
            }
        };
        CardControls.prototype.FlushClickEvent = function (type, GroupNum) {
            switch (type) {
                case pokerGame.pokerDeckType.startDeck:
                    this.FlushStartClick();
                    break;
                case pokerGame.pokerDeckType.Line:
                    // ////console.log('FlushLineClick1');
                    this.FlushLineClick(GroupNum - 1);
                    break;
                case pokerGame.pokerDeckType.Deck:
                    this.FlushDeckClick(GroupNum - 1);
                    break;
                case pokerGame.pokerDeckType.threeCardDeck:
                    this.FlushThreeCardClick();
                    break;
            }
        };
        CardControls.prototype.AutoBack = function (type) {
            if (type === void 0) { type = 0; }
            if (type == 1) {
                if (this.deckData.StartCard.data.pokerList.length > 0) {
                    this.ShowStartCard(1);
                }
                else {
                    this.AutoBack(0);
                }
            }
            else if (type == 2) {
                this.IsAutoBacking = true;
                this.AutoBackToAceCardDeck(1);
                // ////console.log('xxyy2001');
            }
            else {
                this.IsAutoBacking = true;
                if (this.deckData.ThreeCard.data.pokerList.length > 0) {
                    this.AutoBackToAceCardDeck(1);
                    // ////console.log('xxyy20021');
                }
                else {
                    this.AutoBackToAceCardDeck();
                    // ////console.log('xxyy20022');
                }
            }
        };
        //三张或StartCard里面有卡
        CardControls.prototype.IsHaveCardInThreeDeckOrStartCard = function () {
            if (this.deckData.StartCard.data.pokerList.length > 0) {
                return true;
            }
            if (this.deckData.ThreeCard.data.pokerList.length > 0) {
                return true;
            }
        };
        //先自动把开始组的卡片都分发出去
        CardControls.prototype.AutoBackStartCardToLine = function () {
            if (this.CheckIsThreeCanAutoMove()) {
                //this.dragData.SetThreeCard(this.deckData);
                //this.PlayDragAutoMoveAni();
                return;
            }
            if (this.deckData.StartCard.data.pokerList.length > 0) {
                // ////console.log('xxyy22');
                this.dragData.SetThreeCard(this.deckData);
                this.dragData.moveType = pokerGame.MovingType.autoBackToDeck; //移动类型
                this.PlayDragAutoMoveAni();
            }
            else {
                this.ThreeCardBackToStart();
                this.AutoBack();
                // ////console.log('xxyy2003');
            }
        };
        //自动回4个A卡组
        CardControls.prototype.AutoBackToAceCardDeck = function (type) {
            if (type === void 0) { type = 0; }
            var lineNum = 0;
            var deckNum = 0;
            var index = 0;
            // ////console.log('xxyy201');
            for (var i = index; i < this.deckData.pokerLineList.length; i++) {
                // index = i;
                var lineDeck = this.deckData.pokerLineList[i];
                var deckIndex = this.GetCanBackToDeckIndex(lineDeck.data.GetLastCard()); //获得能返回的deckIndex 没有的话返回-1
                // ////console.log('lineNumdeckNum1', deckIndex, lineDeck);
                if (deckIndex >= 0) {
                    deckNum = deckIndex + 1;
                    lineNum = i + 1;
                    // ////console.log('lineNumdeckNum2', deckNum, lineNum, i);
                    break;
                }
            }
            if (lineNum > 0 && deckNum > 0) {
                this.dragData.SetAutoBackCard(this.deckData, lineNum, deckNum);
                this.PlayDragAutoMoveAni();
            }
            else {
                if (type == 1) {
                    this.setMoveBackFourDeck();
                }
            }
            // this.dragData.SetAutoMoveUPThreeCardLastCard(this.deckData);
            // this.PlayDragAutoMoveAni();
        };
        //检测三张卡能否可以自动移动
        CardControls.prototype.CheckIsThreeCanAutoMove = function () {
            var pokerCard = this.deckData.ThreeCard.data.GetLastCard();
            if (pokerCard == null) {
                return false;
            }
            //与4个堆线做检测
            for (var i = 0; i < this.deckData.pokerDeckList.length; i++) {
                var lastCard = this.deckData.pokerDeckList[i].data.GetLastCard();
                if (this.rule.IsCanTackBack(lastCard, pokerCard)) //用规则检测能否返回
                 {
                    this.dragData.SetAutoMoveUPThreeCardLastCard(this.deckData);
                    this.dragData.DragToGroupType = pokerGame.pokerDeckType.Deck;
                    this.dragData.DragToNum = i + 1;
                    this.dragData.IsNeedAddToStepRecord = false;
                    this.PlayDragAutoMoveAni();
                    return true;
                }
            }
            //与7个线做检测
            for (var i = 0; i < this.deckData.pokerLineList.length; i++) {
                var lastCard = this.deckData.pokerLineList[i].data.GetLastCard();
                if (this.rule.IsCanConnect(lastCard, pokerCard)) //用规则检测是否能连接上
                 {
                    this.dragData.SetAutoMoveUPThreeCardLastCard(this.deckData);
                    this.dragData.DragToGroupType = pokerGame.pokerDeckType.Line;
                    this.dragData.DragToNum = i + 1;
                    this.dragData.IsNeedAddToStepRecord = false;
                    this.PlayDragAutoMoveAni();
                    return true;
                }
            }
            return false;
        };
        CardControls.prototype.GetCanBackToDeckIndex = function (pokerCard) {
            if (pokerCard == null) {
                return -1;
            }
            //与4个堆线做检测
            for (var i = 0; i < this.deckData.pokerDeckList.length; i++) {
                var lastCard = this.deckData.pokerDeckList[i].data.GetLastCard();
                if (this.rule.IsCanTackBack(lastCard, pokerCard)) //用规则检测能否返回
                 {
                    return i;
                }
            }
            return -1;
        };
        CardControls.prototype.IsCanUseShowHiddenCardItem = function () {
            for (var i = 0; i < this.deckData.pokerLineList.length; i++) {
                var pokerList = this.deckData.pokerLineList[i].data.pokerList;
                for (var j = 0; j < pokerList.length; j++) {
                    if (pokerList[j].data.IsCardBack) {
                        return true;
                    }
                }
            }
            return false;
        };
        CardControls.prototype.IsHaveHiddenCard = function () {
            // if (this.deckData.StartCard.data.pokerList.length > 0) {
            // 	return true;
            // }
            // ////console.log('tantantnntantnantnantantnantantnantnatan');
            // if (this.deckData.ThreeCard.data.pokerList.length > 0) {
            // 	return true;
            // }
            for (var i = 0; i < this.deckData.pokerLineList.length; i++) {
                var pokerList = this.deckData.pokerLineList[i].data.pokerList;
                for (var j = 0; j < pokerList.length; j++) {
                    if (pokerList[j].data.IsCardBack) {
                        return true;
                    }
                }
            }
            return false;
        };
        //明牌
        CardControls.prototype.ShowAllHiddenCard = function () {
            if (!this.IsCanStartCardClick()) {
                return;
            }
            this.deckData.isThreeCardOnce = false; //一张一张翻开
            this.deckData.IsLasvigasMode = false; //明牌的时候拉斯维加斯模式关闭
            this.ShowOneLineHiddenCard();
            this.deckData.ClearStep();
        };
        CardControls.prototype.ShowOneLineHiddenCard = function () {
            for (var i = 0; i < this.deckData.pokerLineList.length; i++) {
                var LastBackIndex = -1;
                var pokerList = this.deckData.pokerLineList[i].data.pokerList;
                for (var j = 0; j < pokerList.length; j++) {
                    if (pokerList[j].data.IsCardBack) {
                        LastBackIndex = j;
                    }
                    else {
                        break;
                    }
                    // pokerList[j].data.IsCardBack = false;
                }
                if (LastBackIndex >= 0) {
                    this.dragData.SetHidenCard(i + 1, this.deckData, LastBackIndex);
                    this.PlayDragAutoMoveAni();
                    return;
                }
                // this.deckData.pokerLineList[i].FlushRender();
            }
            return;
        };
        //回撤
        CardControls.prototype.BackStep = function (type) {
            if (type === void 0) { type = 0; }
            if (!this.IsCanStartCardClick()) {
                return;
            }
            var lastStep = this.deckData.GetLastBackStep();
            if (lastStep == null) {
                return;
            }
            this.IsAutoMoving = true;
            // ////console.log('tytytytyty:', type);
            this.dragData.SetBackStep(lastStep, this.deckData, type);
            this.dragData.DragingGroup.render.renderMode = poker.PokerGroupRenderMode.lastThreeCard;
            this.dragData.DragingGroup.FlushRender(true);
            if (lastStep.fromDeckType == pokerGame.pokerDeckType.threeCardDeck) {
                this.dragData.DragingGroup.data.SetAllCardToFront();
            }
            var that = this;
            //后撤翻牌动画
            if (lastStep.fromDeckType == pokerGame.pokerDeckType.Line) {
                var backstep = this.deckData.bt2(function () {
                });
                that.PlayDragAutoMoveAni(0, 1);
            }
            else {
                that.PlayDragAutoMoveAni(0, 1);
            }
        };
        CardControls.prototype.setMoveBackFourDeck = function () {
            for (var z = 0; z < this.deckData.ThreeCard.data.pokerList.length; z++) {
                var pokerCard = this.deckData.ThreeCard.data.pokerList[z];
                // if (pokerCard == null) {
                // 	return false;
                // }
                for (var i = 0; i < this.deckData.pokerDeckList.length; i++) {
                    var lastCard = this.deckData.pokerDeckList[i].data.GetLastCard();
                    if (this.rule.IsCanTackBack(lastCard, pokerCard)) //用规则检测能否返回
                     {
                        // this.dragData.SetAutoMoveUPThreeCardLastCard(this.deckData);
                        this.dragData.SetAutoMoveUPThreeCardLastCard2(this.deckData, z);
                        this.dragData.DragToGroupType = pokerGame.pokerDeckType.Deck;
                        this.dragData.DragToNum = i + 1;
                        this.dragData.IsNeedAddToStepRecord = false;
                        // ////console.log('IsCanTackBack', this.dragData);
                        this.PlayDragAutoMoveAni();
                        return true;
                    }
                }
            }
        };
        CardControls.prototype.resetAllCards = function () {
            // var fromDeckType = GameMain.app.nextStepArray[0]['fromDeckType'];
            // var fromDeckNum = GameMain.app.nextStepArray[0]['fromDeckNum'];
            // var addToDeckType = GameMain.app.nextStepArray[0]['addToDeckType'];
            // var addToDeckNum = GameMain.app.nextStepArray[0]['addToDeckNum'];
            // var checkGroup = this.deckData.pokerLineList[addToDeckNum - 1];
            // var dragGroup = this.deckData.pokerLineList[fromDeckNum - 1];
            // this.dragData.DragingGroup.data = dragGroup.data;
            // ////console.log('GameMain.app.nextStepArray1', checkGroup.data.GetLastCard(), this.dragData.DragingGroup.data.GetLastCard());
            // if (this.rule.IsCanConnect(checkGroup.data.GetLastCard(), this.dragData.DragingGroup.data.GetLastCard())) {
            // 	////console.log('lailailai');
            // 	// this.dragData.DragToGroupType = pokerDeckType.Line;
            // 	// this.dragData.DragToNum = addToDeckNum;
            // 	// this.dragData.IsNeedAddToStepRecord = true;
            // 	//this.connectDragGroup();
            // 	this.PlayDragAutoMoveAni();
            // 	return;
            // }
        };
        //点击起始堆
        CardControls.prototype.ClickStartDeck = function () {
            if (this.IsAutoMoving) {
                return;
            }
            for (var i = 0; i < this.deckData.StartCard.render.numChildren; i++) {
                var poker = this.deckData.StartCard.render.getChildAt(i);
                poker.offAll();
            }
            this.ShowStartCard();
        };
        //翻牌
        CardControls.prototype.ShowStartCard = function (type) {
            if (type === void 0) { type = 0; }
            if (this.IsAutoMoving) {
                return;
            }
            if (this.deckData.StartCard.data.pokerList.length > 0) {
                if (type == 0) {
                    this.dragData.SetThreeCard(this.deckData);
                    this.PlayDragAutoMoveAni(2);
                }
                else {
                    this.dragData.AllCard2SetThreeCard(this.deckData);
                    this.PlayDragAutoMoveAni(3);
                }
            }
            else {
                if (!this.deckData.IsCanTabBackToStart()) {
                    GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.ShowMessage, [10006]); //
                    //错误提示 拉斯维加斯模式下,总共只能翻牌三次
                    return;
                }
                this.deckData.TabBackToStartOnce(); //翻牌计数
                this.ThreeCardBackToStart();
            }
            // this.CheckAutoPlay();
        };
        //三张牌返回start
        CardControls.prototype.ThreeCardBackToStart = function () {
            var checkGroup = this.deckData.StartCard;
            this.deckData.AddStep(pokerGame.pokerDeckType.startDeck, 0, checkGroup.data.pokerList.length, pokerGame.pokerDeckType.threeCardDeck, 0, false);
            this.deckData.BackToStart(this.deckData.ThreeCard);
            this.deckData.StartCard.data.pokerList.reverse();
            this.deckData.StartCard.data.SetAllCardToBack();
            this.deckData.StartCard.data.FlushAllCardRender();
            this.deckData.StartCard.FlushRender();
            // ////console.log('Flush4');
            this.Flush(pokerGame.pokerDeckType.startDeck, 0);
            this.Flush(pokerGame.pokerDeckType.threeCardDeck, 0);
        };
        CardControls.prototype.IsCanStartCardClick = function () {
            if (this.IsAutoMoving) {
                return false;
            }
            if (this.dragData.DragingGroup.data.pokerList.length > 0) //有正在拖动的
             {
                return false;
            }
            return true;
        };
        //鼠标按下
        CardControls.prototype.onMounseDown = function (pokerGroup, type, typeNum, index) {
            if (this.IsAutoMoving) {
                return;
            }
            if (this.dragData.DragingGroup.data.pokerList.length > 0) //有正在拖动的
             {
                return;
            }
            // ////console.log('卡牌1', this.dragData.DragFromNum, pokerGroup, index);
            this.dragInListOne = index;
            // console.debug("卡牌移动开启：" + "LineIndex=" + type + "typeNum=" + typeNum + "index=" + index);
            this.IsStartDraging = true;
            this.IsStartDragMoved = false;
            var clickedIMG = null;
            clickedIMG = pokerGroup.data.pokerList[index].render.img;
            this.clickImg = clickedIMG;
            this.dragPokerGroup = [];
            for (var ij = index + 1; ij < pokerGroup.data.pokerList.length; ij++) {
                this.dragPokerGroup.push(pokerGroup.data.pokerList[ij].render.img);
                // ////console.log('this.dragData.DragingGroup.data.pokerList1', ij, pokerGroup.data.pokerList);
            }
            // ////console.log('this.dragData.DragingGroup.data.pokerList2', this.dragData);
            this.dragPokerGroupIndex = index;
            this.nowTimeDown = new Date().getTime();
            Laya.timer.once(this.longClickTime, this, function () {
                if (new Date().getTime() - this.nowTimeDown >= this.longClickTime && this.nowTimeDown != 0) {
                    if (!this.shadowImg1) {
                        this.shadowImg1 = new Laya.Image();
                    }
                    if (!this.shadowImg2) {
                        this.shadowImg2 = new Laya.Image();
                    }
                    this.shadowImg1.skin = 'new/game_image_sd.png';
                    this.shadowImg2.skin = 'new/game_image_sd.png';
                    this.shadowImg1.size(102, 152);
                    clickedIMG.addChild(this.shadowImg1);
                    this.shadowImg2.size(102, 152);
                    clickedIMG.addChild(this.shadowImg2);
                    this.mask1 = new Laya.Image();
                    this.mask1.skin = 'new/game_image_shodow.png';
                    this.mask1.size(102, 152);
                    this.mask2 = new Laya.Image();
                    this.mask2.skin = 'new/game_image_shodow.png';
                    this.shadowImg1.mask = this.mask1;
                    this.mask2.size(102, 152);
                    this.shadowImg2.mask = this.mask2;
                    this.shinning = new Laya.Image();
                    this.shinning.skin = 'new/game_image_shinning1.png';
                    this.shinning.size(141, 190);
                    clickedIMG.addChild(this.shinning);
                    this.shinning.pos(-19, -19);
                    for (var _i = 0, _a = this.dragPokerGroup; _i < _a.length; _i++) {
                        var img = _a[_i];
                        var shadowImg1 = new Laya.Image();
                        var shadowImg2 = new Laya.Image();
                        var mask1 = new Laya.Image();
                        var mask2 = new Laya.Image();
                        var shinning = new Laya.Image();
                        this.shadow1OtherList.push(shadowImg1);
                        this.shadow2OtherList.push(shadowImg2);
                        this.mask1OtherList.push(mask1);
                        this.mask2OtherList.push(mask2);
                        this.shinningOtherList.push(shinning);
                        shadowImg1.skin = 'new/game_image_sd.png';
                        shadowImg2.skin = 'new/game_image_sd.png';
                        shadowImg1.size(102, 152);
                        img.addChild(shadowImg1);
                        shadowImg2.size(102, 152);
                        img.addChild(shadowImg2);
                        mask1.skin = 'new/game_image_shodow.png';
                        mask1.size(102, 152);
                        mask2.skin = 'new/game_image_shodow.png';
                        shadowImg1.mask = mask1;
                        mask2.size(102, 152);
                        shadowImg2.mask = mask2;
                        shinning.skin = 'new/game_image_shinning1.png';
                        shinning.size(141, 190);
                        img.addChild(shinning);
                        shinning.pos(-19, -19);
                    }
                    var x = this.clickImg.x;
                    var y = this.clickImg.y;
                    this.isDownTween = true;
                    Laya.Tween.to(this.clickImg, {
                        x: x - 8,
                        y: y - 8
                    }, this.dtime, Laya.Ease.sineOut, new Laya.Handler(this, function () {
                        this.isDownTween = false;
                    }));
                    for (var _b = 0, _c = this.dragPokerGroup; _b < _c.length; _b++) {
                        var img = _c[_b];
                        var xx = img.x;
                        var yy = img.y;
                        Laya.Tween.to(img, {
                            x: xx - 8,
                            y: yy - 8
                        }, this.dtime, Laya.Ease.sineOut, new Laya.Handler(this, function () {
                            this.isDownTween = false;
                        }));
                    }
                    this.shinning.alpha = 0;
                    Laya.Tween.to(this.shinning, {
                        alpha: 1
                    }, this.dtime, Laya.Ease.sineOut);
                    this.shadowImg1.pos(5, 5);
                    this.shadowImg2.pos(5, 5);
                    this.mask1.pos(0, 145);
                    this.mask2.pos(97, -5);
                    Laya.Tween.to(this.shadowImg1, {
                        x: 20,
                        y: 20
                    }, this.dtime, Laya.Ease.sineOut);
                    Laya.Tween.to(this.shadowImg2, {
                        x: 20,
                        y: 20
                    }, this.dtime, Laya.Ease.sineOut);
                    Laya.Tween.to(this.mask1, {
                        x: 0,
                        y: 132
                    }, this.dtime, Laya.Ease.sineOut);
                    Laya.Tween.to(this.mask2, {
                        x: 82,
                        y: -20
                    }, this.dtime, Laya.Ease.sineOut);
                    for (var i_1 = 0; i_1 < this.shinningOtherList.length; i_1++) {
                        this.shinningOtherList[i_1].alpha = 0;
                        Laya.Tween.to(this.shinningOtherList[i_1], {
                            alpha: 1
                        }, this.dtime, Laya.Ease.sineOut);
                        this.shadow1OtherList[i_1].pos(5, 5);
                        this.shadow2OtherList[i_1].pos(5, 5);
                        this.mask1OtherList[i_1].pos(0, 145);
                        this.mask2OtherList[i_1].pos(97, -5);
                        Laya.Tween.to(this.shadow1OtherList[i_1], {
                            x: 20,
                            y: 20
                        }, this.dtime, Laya.Ease.sineOut);
                        Laya.Tween.to(this.shadow2OtherList[i_1], {
                            x: 20,
                            y: 20
                        }, this.dtime, Laya.Ease.sineOut);
                        Laya.Tween.to(this.mask1OtherList[i_1], {
                            x: 0,
                            y: 132
                        }, this.dtime, Laya.Ease.sineOut);
                        Laya.Tween.to(this.mask2OtherList[i_1], {
                            x: 82,
                            y: -20
                        }, this.dtime, Laya.Ease.sineOut);
                    }
                }
            });
            this.dragData.DragFromGroupType = type;
            this.dragData.DragFromNum = typeNum;
            this.dragData.DragFromDeckBackToFront = false;
            this.dragData.IsNeedAddToStepRecord = false;
            this.dragData.moveType = pokerGame.MovingType.clickMove; //移动类型
            // ////console.log('ccca', this.dragData);
            var imgRoot = clickedIMG.parent.parent;
            this.deckData.table.LineMove.x = imgRoot.x + clickedIMG.x * imgRoot.scaleX;
            this.deckData.table.LineMove.y = imgRoot.y + clickedIMG.y * imgRoot.scaleY;
            this.DragMovingStartPos.x = this.deckData.table.LineMove.x;
            this.DragMovingStartPos.y = this.deckData.table.LineMove.y;
            this.dragData.DragingGroup.data.Concat(pokerGroup.data.SplitePokerGroup(index));
            this.dragData.DragingGroup.render.renderMode = poker.PokerGroupRenderMode.line;
            if (type == pokerGame.pokerDeckType.Line) {
                var lastcard = pokerGroup.data.GetLastCard();
                if (lastcard != null) {
                    this.dragData.DragFromDeckBackToFront = lastcard.data.IsCardBack;
                }
                pokerGroup.FlushRender();
                if (pokerRender.rsty == 1) {
                    GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onChangeLastCard, [1, typeNum, this.dragData]);
                }
            }
            else if (type == pokerGame.pokerDeckType.Deck) {
                pokerGroup.FlushRender();
            }
            this.dragData.DragingGroup.FlushRender();
            this.MouseStartPos.x = Laya.stage.mouseX;
            this.MouseStartPos.y = Laya.stage.mouseY;
            // if(this.dragData.DragingGroup.render.parent==null)
            {
                this.dragData.DragingGroup.render.removeSelf();
                this.deckData.table.LineMove.addChild(this.dragData.DragingGroup.render);
            }
            for (var i = 0; i < this.dragData.DragingGroup.data.pokerList.length; i++) {
                this.dragData.DragingGroup.data.pokerList[i].render.img.offAll();
            }
            GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.ClearTips);
            pokerGame.SoundPlayer.PlaySound(GameMain.app.getRandom(5, 6));
            // ////console.log('卡牌2', this.dragData);
        };
        //开始拖动线上的牌
        CardControls.prototype.onMounseMove = function () {
            // console.debug("卡牌开始拖动", this.dragData);
            if (this.IsAutoMoving) {
                return;
            }
            if (!this.IsStartDraging || this.dragData.DragingGroup == null || this.dragData.DragingGroup.data.pokerList.length <= 0) {
                return;
            }
            var offsetX = Laya.stage.mouseX - this.MouseStartPos.x;
            var offsetY = Laya.stage.mouseY - this.MouseStartPos.y;
            this.deckData.table.LineMove.x = this.DragMovingStartPos.x + offsetX;
            this.deckData.table.LineMove.y = this.DragMovingStartPos.y + offsetY;
            //this.dragData.DragingGroup.render.x = this.DragMovingStartPos.x + offsetX / 0.7;
            //this.dragData.DragingGroup.render.y = this.DragMovingStartPos.y + offsetY / 0.7;
            if (!this.IsStartDragMoved) {
                var pt = new Laya.Point(offsetX, offsetY);
                if (pt.distance(0, 0) > 10) //拖动距离小于5的话就算是点击 不然就是移动
                 {
                    this.IsStartDragMoved = true;
                }
            }
        };
        //鼠标抬起
        CardControls.prototype.onMounseUp = function () {
            this.nowTimeDown = 0;
            // console.debug("卡牌拖动结束", this.dragData);
            if (this.IsAutoMoving) //自动移动过程中点击无效
             {
                return;
            }
            if (!this.IsStartDraging || this.dragData.DragingGroup == null || this.dragData.DragingGroup.data.pokerList.length <= 0) {
                return;
            }
            if (this.dragData.DragingGroup == null) {
                return;
            }
            // ////console.log('this.isDownTween', this.isDownTween);
            if (this.isDownTween) {
                for (var _i = 0, _a = this.dragPokerGroup; _i < _a.length; _i++) {
                    var img = _a[_i];
                    Laya.Tween.clearAll(img);
                }
                Laya.Tween.clearAll(this.clickImg);
                Laya.Tween.clearAll(this.mask1);
                Laya.Tween.clearAll(this.mask2);
                Laya.Tween.clearAll(this.shadowImg1);
                Laya.Tween.clearAll(this.shadowImg2);
                Laya.Tween.clearAll(this.shinning);
            }
            if (this.shadowImg1) {
                this.shadowImg1.removeSelf();
                this.shadowImg1 = null;
                this.mask1.removeSelf();
                this.mask1 = null;
            }
            if (this.shadowImg2) {
                this.shadowImg2.removeSelf();
                this.shadowImg2 = null;
                this.shadowImg2 = null;
                this.mask2 = null;
            }
            if (this.shinning) {
                this.shinning.removeSelf();
                this.shinning = null;
            }
            for (var _b = 0, _c = this.shadow1OtherList; _b < _c.length; _b++) {
                var s1 = _c[_b];
                s1.removeSelf();
                s1 = null;
            }
            for (var _d = 0, _e = this.shadow2OtherList; _d < _e.length; _d++) {
                var s2 = _e[_d];
                s2.removeSelf();
                s2 = null;
            }
            for (var _f = 0, _g = this.mask1OtherList; _f < _g.length; _f++) {
                var s3 = _g[_f];
                s3.removeSelf();
                s3 = null;
            }
            for (var _h = 0, _j = this.mask2OtherList; _h < _j.length; _h++) {
                var s4 = _j[_h];
                s4.removeSelf();
                s4 = null;
            }
            for (var _k = 0, _l = this.shinningOtherList; _k < _l.length; _k++) {
                var s5 = _l[_k];
                s5.removeSelf();
                s5 = null;
            }
            this.shadow1OtherList = [];
            this.shadow2OtherList = [];
            this.mask1OtherList = [];
            this.mask2OtherList = [];
            this.shinningOtherList = [];
            var IsDragedIntoNewGroup = false;
            this.CollisionArrList.forEach(function (element) {
                element.removeSelf();
            });
            this.CollisionArrList.splice(0);
            var IsNeedCheck4Deck = this.IsStartDragMoved || this.dragData.DragFromGroupType != pokerGame.pokerDeckType.Deck;
            //与4个堆线做检测
            if (IsNeedCheck4Deck) {
                for (var i = 0; i < this.deckData.pokerDeckList.length; i++) {
                    var checkGroup = this.deckData.pokerDeckList[i];
                    if (this.dragData.DragingGroup.data.pokerList.length != 1) //每次只能返回一张到deck中
                     {
                        break;
                    }
                    if (this.dragData.DragFromGroupType == pokerGame.pokerDeckType.Deck && (this.dragData.DragFromNum - 1) == i) {
                        continue;
                    }
                    if (this.IsStartDragMoved) {
                        if (!this.CheckCollision(checkGroup, this.dragData.DragingGroup)) {
                            continue;
                        }
                    }
                    if (this.rule.IsCanTackBack(checkGroup.data.GetLastCard(), this.dragData.DragingGroup.data.GetFirstCard())) //用规则检测能否返回
                     {
                        this.dragData.DragToGroupType = pokerGame.pokerDeckType.Deck;
                        this.dragData.DragToNum = i + 1;
                        this.dragData.IsNeedAddToStepRecord = true;
                        // SoundPlayer.PlaySound(4);
                        if (GameMain.app.upVoiceBool) {
                            Laya.timer.clear(this, this.upupup);
                        }
                        else {
                            GameMain.app.upVoiceBool = true;
                        }
                        GameMain.app.upVoiceCount = GameMain.app.upVoiceCount + 1 > 10 ? 10 : GameMain.app.upVoiceCount + 1;
                        Laya.timer.once(5000, this, this.upupup);
                        pokerGame.SoundPlayer.PlaySound(GameMain.app.upVoiceCount + 6);
                        //前进2翻牌动画
                        if (!this.IsStartDragMoved && this.deckData.pokerLineList[this.dragData.DragFromNum - 1] != null &&
                            this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data != null &&
                            this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.GetLastCard() != null &&
                            this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.GetLastCard().render != null &&
                            this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.GetLastCard().render.img != null &&
                            this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.GetLastCard().data.IsCardBack) {
                            GameMain.app.isNotDraging = true;
                            var rd = this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.GetLastCard().render;
                            var ifname = pokerRender.cardSkinName + pokerRender.GetImgFileName(this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.GetLastCard().data);
                            rd.img.skin = '';
                            rd.img.size(102, 152);
                            rd.shadowImg1.visible = false;
                            var x1;
                            var x2;
                            if (!x1) {
                                x1 = new Laya.Image();
                            }
                            if (!x2) {
                                x2 = new Laya.Image();
                            }
                            x1.size(rd.img.width, rd.img.height);
                            x2.size(rd.img.width, rd.img.height);
                            x1.skin = pokerRender.backSkinName;
                            x2.skin = ifname;
                            rd.img.addChild(x1);
                            rd.img.addChild(x2);
                            x1.scaleX = 1;
                            x2.scaleX = 0;
                            x1.anchorX = 0.5;
                            x2.anchorX = 0.5;
                            x1.pos(x1.width / 2, 0);
                            x2.pos(x2.width / 2, 0);
                            Laya.Tween.to(x1, { scaleX: 0 }, 150, Laya.Ease.linearIn, new Laya.Handler(this, function () {
                                Laya.Tween.to(x2, { scaleX: 1 }, 150, Laya.Ease.linearOut, new Laya.Handler(this, function () {
                                    x1.removeSelf();
                                    x2.removeSelf();
                                    x1 = null;
                                    x2 = null;
                                    var newSkinName = ifname;
                                    if (rd.img.skin != newSkinName) {
                                        rd.img.graphics.clear();
                                        rd.img.skin = ifname;
                                    }
                                    GameMain.app.isNotDraging = false;
                                    rd.shadowImg1.visible = true;
                                }));
                            }));
                        }
                        this.PlayDragAutoMoveAni();
                        return;
                    }
                    else if (this.IsStartDragMoved) {
                        var messageID = this.rule.GetTackBackErroMessage(checkGroup.data.GetLastCard(), this.dragData.DragingGroup.data.GetFirstCard());
                        GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.ShowMessage, [messageID]);
                    }
                }
            }
            //与7条线做检测
            for (var i = 0; i < this.deckData.pokerLineList.length; i++) {
                var checkGroup = this.deckData.pokerLineList[i];
                if (this.dragData.DragFromGroupType == pokerGame.pokerDeckType.Line && (this.dragData.DragFromNum - 1) == i) {
                    continue;
                }
                if (this.IsStartDragMoved) {
                    if (!this.CheckCollision(checkGroup, this.dragData.DragingGroup)) {
                        //console.debug("CheckCollision pass i=" + i.toString());
                        continue;
                    }
                }
                // ////console.log('lastandfirst', checkGroup.data.GetLastCard(), this.dragData.DragingGroup.data.GetFirstCard());
                if (this.rule.IsCanConnect(checkGroup.data.GetLastCard(), this.dragData.DragingGroup.data.GetFirstCard())) {
                    this.dragData.DragToGroupType = pokerGame.pokerDeckType.Line;
                    this.dragData.DragToNum = i + 1;
                    this.dragData.IsNeedAddToStepRecord = true;
                    //this.connectDragGroup();
                    //前进翻牌动画
                    if (!this.IsStartDragMoved && this.deckData.pokerLineList[this.dragData.DragFromNum - 1] != null &&
                        this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data != null &&
                        this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.GetLastCard() != null &&
                        this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.GetLastCard().render != null &&
                        this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.GetLastCard().render.img != null &&
                        this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.GetLastCard().data.IsCardBack &&
                        this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.GetLastCard().data != null) {
                        GameMain.app.isNotDraging = true;
                        var rd = this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.GetLastCard().render;
                        var ifname = pokerRender.cardSkinName + pokerRender.GetImgFileName(this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.GetLastCard().data);
                        rd.img.skin = '';
                        rd.img.size(102, 152);
                        rd.shadowImg1.visible = false;
                        var x1;
                        var x2;
                        if (!x1) {
                            x1 = new Laya.Image();
                        }
                        if (!x2) {
                            x2 = new Laya.Image();
                        }
                        x1.size(rd.img.width, rd.img.height);
                        x2.size(rd.img.width, rd.img.height);
                        x1.skin = pokerRender.backSkinName;
                        x2.skin = ifname;
                        rd.img.addChild(x1);
                        rd.img.addChild(x2);
                        x1.scaleX = 1;
                        x2.scaleX = 0;
                        x1.anchorX = 0.5;
                        x2.anchorX = 0.5;
                        x1.pos(x1.width / 2, 0);
                        x2.pos(x2.width / 2, 0);
                        Laya.Tween.to(x1, { scaleX: 0 }, 150, Laya.Ease.linearIn, new Laya.Handler(this, function () {
                            Laya.Tween.to(x2, { scaleX: 1 }, 150, Laya.Ease.linearOut, new Laya.Handler(this, function () {
                                x1.removeSelf();
                                x2.removeSelf();
                                x1 = null;
                                x2 = null;
                                var newSkinName = ifname;
                                if (rd.img.skin != newSkinName) {
                                    rd.img.graphics.clear();
                                    rd.img.skin = ifname;
                                }
                                GameMain.app.isNotDraging = false;
                                rd.shadowImg1.visible = true;
                            }));
                        }));
                    }
                    this.PlayDragAutoMoveAni();
                    return;
                }
                else if (this.IsStartDragMoved) //拖动的时候
                 {
                    var messageID = this.rule.GetConnectErroMessage(checkGroup.data.GetLastCard(), this.dragData.DragingGroup.data.GetFirstCard());
                    GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.ShowMessage, [messageID]);
                }
            }
            //都没有碰撞成功，那么返回来源的那个 牌组线
            this.dragData.DragToGroupType = this.dragData.DragFromGroupType;
            this.dragData.DragToNum = this.dragData.DragFromNum;
            if (this.IsStartDragMoved) {
                this.PlayDragAutoMoveAni();
            }
            else {
                this.connectDragGroup();
                // ////console.log('Flush5');
                this.Flush(this.dragData.DragToGroupType, this.dragData.DragToNum);
                this.CheckTutorialNext();
                //this.Flush(this.dragData.DragFromGroupType, this.dragData.DragFromNum);
                //抖动
                // var xxx = this.deckData.pokerLineList.slice(this.dragData.DragFromNum - 1, this.dragData.DragFromNum);
                // this.deckData.pokerLineList.splice(this.dragData.DragFromNum - 1, 1);
                // this.deckData.pokerLineList.push(xxx[0]);
                // ////console.log('xxxxxxxxxxxxx', this.deckData.pokerLineList[this.deckData.pokerLineList.length - 1][this.dragPokerGroupIndex]);		
                var spr = this.clickImg;
                // var spr = this.deckData.pokerLineList[this.deckData.pokerLineList.length - 1].data.pokerList[this.dragPokerGroupIndex].render.img;
                var oldX = spr.x;
                var maxI = 3;
                var deviations = [10, 7, 5];
                if (!this.isEabToDown) {
                    this.isEabToDown = true;
                    for (var i = 0; i < maxI; i++) {
                        var pluse = i % 2 == 0 ? -1 : 1;
                        var num = pluse * deviations[i];
                        var time = 40;
                        // ////console.log('oldX', oldX + num);
                        Laya.Tween.to(spr, { x: oldX + num }, time, Laya.Ease.linearIn, null, i * time, false);
                    }
                    Laya.Tween.to(spr, { x: oldX }, time, Laya.Ease.linearIn, new Laya.Handler(this, function () {
                    }), maxI * time, false);
                    Laya.timer.once(200, this, function () {
                        this.isEabToDown = false;
                    });
                    for (var indexx = 0; indexx < this.dragPokerGroup.length; indexx++) {
                        var spr = this.dragPokerGroup[indexx];
                        var oldX = spr.x;
                        var maxI = 3;
                        var deviations = [10, 7, 5];
                        for (var i = 0; i < maxI; i++) {
                            var pluse = i % 2 == 0 ? -1 : 1;
                            var num = pluse * deviations[i];
                            var time = 40;
                            Laya.Tween.to(spr, { x: oldX + num }, time, Laya.Ease.linearIn, null, i * time, false);
                        }
                        Laya.Tween.to(spr, { x: oldX }, time, Laya.Ease.linearIn, new Laya.Handler(this, function () {
                        }), maxI * time, false);
                    }
                }
                this.rstyYYYY();
            }
            return;
        };
        CardControls.prototype.upupup = function () {
            GameMain.app.upVoiceBool = false;
            GameMain.app.upVoiceCount = 0;
        };
        CardControls.prototype.dragDataBack = function () {
            this.dragData.DragFromDeckBackToFront = false;
            this.dragData.DragToGroupType = this.dragData.DragFromGroupType;
            this.dragData.DragToNum = this.dragData.DragFromNum;
            this.connectDragGroup();
            // ////console.log('Flush1');
            this.Flush(this.dragData.DragToGroupType, this.dragData.DragToNum);
            this.dragData.DragingGroup.FlushRender();
        };
        //拖动放手之后，播放移动的动画
        CardControls.prototype.PlayDragAutoMoveAni = function (cardStyle, backstep) {
            if (cardStyle === void 0) { cardStyle = 1; }
            if (backstep === void 0) { backstep = 0; }
            GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.ClearTips);
            this.IsAutoMoving = true;
            // ////console.log('changettt1', this.dragData);
            // ////console.log('dragData', this.dragData.DragToGroupType, this.dragData.DragToNum);
            var checkGroup = this.deckData.GetDeck(this.dragData.DragToGroupType, this.dragData.DragToNum);
            var toSprRoot = checkGroup.render.parent;
            var targetPos = new Laya.Point(toSprRoot.x, toSprRoot.y);
            // ////console.log('changettt2', checkGroup);
            var posCard = checkGroup.data.GetLastCard();
            if (posCard != null) {
                var cardPos = new Laya.Point(0, 0);
                cardPos = new Laya.Point(posCard.render.img.x, posCard.render.img.y);
                targetPos.x += cardPos.x * toSprRoot.scaleX;
                targetPos.y += cardPos.y * toSprRoot.scaleY;
            }
            var xx = Laya.Ease.sineOut;
            if (this.dragData.DragToGroupType == pokerGame.pokerDeckType.Line) {
                if (checkGroup.data.pokerList.length != 0) {
                    if (backstep == 0) {
                        targetPos.y += poker.pokerGroupRender.lineHeightSpacing + 40;
                    }
                    else {
                        targetPos.y += poker.pokerGroupRender.lineHeightSpacing;
                    }
                }
            }
            else if (this.dragData.DragToGroupType == pokerGame.pokerDeckType.threeCardDeck) {
                if (checkGroup.data.pokerList.length != 0) {
                    targetPos.x += poker.pokerGroupRender.threeCardSpacing;
                    // ////console.log('距离2：', this.deckData.table.LineMove.x, this.deckData.table.LineMove.y, targetPos.x, targetPos.y);
                    xx = Laya.Ease.linearOut;
                }
            }
            var aniDruation = CardSpeedSetting.speed0;
            if (this.dragData.DragToGroupType == pokerGame.pokerDeckType.threeCardDeck) {
                // ////console.log('????????xczczxczxc');
                // aniDruation = 1100;
            }
            else if (this.IsAutoBacking) {
                aniDruation = CardSpeedSetting.speed4;
            }
            var isFanPai = false;
            if (cardStyle == 0) {
                aniDruation = CardSpeedSetting.speed3;
            }
            else if (cardStyle == 1) {
                aniDruation = CardSpeedSetting.speed1;
            }
            else if (cardStyle == 2) {
                aniDruation = CardSpeedSetting.speed2;
                // ////console.log('222222222222222222222222222222');
            }
            else if (cardStyle == 3) {
                //翻牌动画结束
                isFanPai = true;
                aniDruation = CardSpeedSetting.speed5;
            }
            Laya.Tween.clearAll(this.deckData.table.LineMove);
            var yumao = 0;
            if (targetPos.x == -48 && targetPos.y == -141) {
                yumao = 1;
            }
            else if (targetPos.x == 56 && targetPos.y == -141) {
                yumao = 2;
            }
            else if (targetPos.x == 160 && targetPos.y == -141) {
                yumao = 3;
            }
            else if (targetPos.x == 264 && targetPos.y == -141) {
                yumao = 4;
            }
            // Laya.stage.mouseEnabled = false;
            Laya.Tween.to(this.deckData.table.LineMove, { x: targetPos.x, y: targetPos.y }, aniDruation, xx, Laya.Handler.create(this, this.PlayDragAutoMoveAniEnd, [0, yumao, isFanPai]), 0);
        };
        //拖动动画结束
        CardControls.prototype.PlayDragAutoMoveAniEnd = function (type, yumao, isFanPai) {
            if (type === void 0) { type = 0; }
            if (yumao === void 0) { yumao = 0; }
            if (isFanPai === void 0) { isFanPai = false; }
            // Laya.stage.mouseEnabled = true;
            if (yumao != 0) {
                GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onMoveFourAni, [yumao]);
            }
            if (this.dragData.moveType == pokerGame.MovingType.backStep) {
                // ////console.log('xxyy1');
                this.dragData.SetDragDataBackToFromDeck(this.deckData);
                var backstep = this.deckData.BackStep();
                if (backstep != null) {
                    // ////console.log('FlushClickEvent2');
                    this.FlushClickEvent(backstep.fromDeckType, backstep.fromDeckNum);
                    this.FlushClickEvent(backstep.addToDeckType, backstep.addToDeckNum);
                }
                pokerGame.SoundPlayer.PlaySound(0);
                this.dragData.DragingGroup.FlushRender();
            }
            else if (this.dragData.DragToGroupType == pokerGame.pokerDeckType.threeCardDeck) {
                // ////console.log('xxyy2', this.dragData);
                this.checkRecord();
                this.deckData.ThreeCard.render.AddPokerList(this.dragData.DragingGroup.data);
                this.deckData.ThreeCard.data.Concat(this.dragData.DragingGroup.data);
                this.deckData.ThreeCard.render.SortAndMoveToPos();
                this.FlushThreeCardClick();
                // ////console.log('Flush2');
                this.Flush(this.dragData.DragFromGroupType, this.dragData.DragFromNum);
                this.CheckTutorialNext();
                // pokerGame.SoundPlayer.PlaySound(0);
                pokerGame.SoundPlayer.PlaySound(GameMain.app.getRandom(5, 6));
            }
            else {
                this.checkRecord();
                this.connectDragGroup();
                // ////console.log('Flush3');
                // ////console.log('卡牌卡牌', this.dragData);
                this.Flush(this.dragData.DragToGroupType, this.dragData.DragToNum);
                this.Flush(this.dragData.DragFromGroupType, this.dragData.DragFromNum);
                if (this.dragData.moveType == pokerGame.MovingType.showHiddenCard) {
                    // ////console.log('xxyy3');
                    this.ShowOneLineHiddenCard();
                }
                else if (this.dragData.moveType == pokerGame.MovingType.autoBackToDeck) {
                    // ////console.log('xxyy4');
                    if (this.IsAutoBacking && !this.IsHaveHiddenCard()) {
                        this.AutoBack();
                        // ////console.log('xxyy2004');
                    }
                }
                // ////console.log('xxyy5', this.IsTutorialStarted);
                this.CheckWin();
                if (this.IsTutorialStarted) {
                    this.CheckTutorialNext();
                }
                // if (!GameMain.app.ismingpai) {
                this.CheckAutoPlay(); //检测是否需要激活自动
                // }
                pokerGame.SoundPlayer.PlaySound(0);
            }
            this.IsAutoMoving = false;
            this.dragData.DragFromDeckBackToFront = false;
            if (isFanPai) {
                Laya.timer.once(500, this, this.AutoBack, [2]);
            }
            this.rstyYYYY();
        };
        CardControls.prototype.rstyYYYY = function () {
            if (pokerRender.rsty == 1 && (this.dragData.DragToGroupType == pokerGame.pokerDeckType.Line || this.dragData.DragToGroupType == pokerGame.pokerDeckType.Deck)) {
                // ////console.log('rsty2', this.dragData.DragToNum);
                if (this.dragData.DragToGroupType == pokerGame.pokerDeckType.Line) {
                    if (this.dragData.DragFromGroupType == pokerGame.pokerDeckType.Line) {
                        if (GameMain.app.isBackToFront) {
                            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onChangeLastCard, [0, this.dragData.DragFromNum]);
                        }
                        else {
                            if (this.deckData.pokerLineList[this.dragData.DragFromNum - 1] != null && this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data != null && this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.pokerList[this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.pokerList.length - 1] != null && !this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.pokerList[this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.pokerList.length - 1].data.IsCardBack &&
                                this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.pokerList[this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.pokerList.length - 2] != null &&
                                !this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.pokerList[this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.pokerList.length - 2].data.IsCardBack) {
                                GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onChangeLastCard, [0, this.dragData.DragFromNum]);
                            }
                        }
                        GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onChangeLastCard, [0, this.dragData.DragToNum]);
                    }
                    else if (this.dragData.DragFromGroupType == pokerGame.pokerDeckType.startDeck) {
                        GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onChangeLastCard, [0, this.dragData.DragToNum]);
                    }
                    else if (this.dragData.DragFromGroupType == pokerGame.pokerDeckType.threeCardDeck) {
                        GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onChangeLastCard, [0, this.dragData.DragToNum]);
                    }
                    else if (this.dragData.DragFromGroupType == pokerGame.pokerDeckType.Deck) {
                        GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onChangeLastCard, [0, this.dragData.DragToNum]);
                    }
                }
                else if (this.dragData.DragToGroupType == pokerGame.pokerDeckType.Deck) {
                    if (this.dragData.DragFromGroupType == pokerGame.pokerDeckType.Line) {
                        if (GameMain.app.isBackToFront) {
                            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onChangeLastCard, [0, this.dragData.DragFromNum]);
                        }
                        else {
                            if (this.deckData.pokerLineList[this.dragData.DragFromNum - 1] != null && this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data != null && this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.pokerList[this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.pokerList.length - 1] != null && !this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.pokerList[this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.pokerList.length - 1].data.IsCardBack &&
                                this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.pokerList[this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.pokerList.length - 2] != null &&
                                !this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.pokerList[this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.pokerList.length - 2].data.IsCardBack) {
                                GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onChangeLastCard, [0, this.dragData.DragFromNum]);
                            }
                        }
                    }
                    else if (this.dragData.DragFromGroupType == pokerGame.pokerDeckType.startDeck) {
                        // GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onChangeLastCard, [0, this.dragData.DragToNum]);
                    }
                    else if (this.dragData.DragFromGroupType == pokerGame.pokerDeckType.threeCardDeck) {
                        // GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onChangeLastCard, [0, this.dragData.DragToNum]);
                    }
                }
            }
        };
        CardControls.prototype.CheckTutorialFlush = function () {
            if (this.IsTutorialStarted) {
                GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.FlushTutorialRender);
            }
        };
        CardControls.prototype.CheckTutorialNext = function () {
            if (this.IsTutorialStarted) {
                GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.CheckNextTutorial);
            }
        };
        //检测是否需要弹出自动窗口
        CardControls.prototype.CheckAutoPlay = function () {
            if (!this.IsAutoBacking) {
                // ////console.log('atnantantnant');
                if (!this.IsHaveHiddenCard()) {
                    GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.CheckAutoPlay);
                }
            }
        };
        CardControls.prototype.CheckWin = function () {
            if (this.IsGameEnd) {
                return;
            }
            for (var i = 0; i < this.deckData.pokerDeckList.length; i++) {
                var deck = this.deckData.pokerDeckList[i];
                if (deck.data.pokerList.length != 13) {
                    return;
                }
            }
            //----已完成---
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onGameWin);
            this.IsGameEnd = true; //游戏结束
        };
        CardControls.prototype.checkRecord = function () {
            if (this.dragData.IsNeedAddToStepRecord) {
                var checkGroup = this.deckData.GetDeck(this.dragData.DragToGroupType, this.dragData.DragToNum);
                this.deckData.AddStep(this.dragData.DragToGroupType, this.dragData.DragToNum, checkGroup.data.pokerList.length, this.dragData.DragFromGroupType, this.dragData.DragFromNum, this.dragData.DragFromDeckBackToFront);
            }
        };
        //动画播放完毕之后 处理拖动的组
        CardControls.prototype.connectDragGroup = function () {
            // ////console.log('111deal');
            var checkGroup = this.deckData.GetDeck(this.dragData.DragToGroupType, this.dragData.DragToNum);
            this.ConcatDragsToGroup(checkGroup, this.dragData.DragingGroup);
            //this.dragData.DragingGroup = null;
        };
        CardControls.prototype.ConcatDragsToGroup = function (toGroup, dragGroup) {
            // ////console.log('this.deckData.table.LineMove1', dragGroup.data);
            toGroup.data.Concat(dragGroup.data.SplitePokerGroup(0));
            // ////console.log('this.deckData.table.LineMove2', toGroup.data);
            toGroup.FlushRender();
            dragGroup.FlushRender();
        };
        CardControls.prototype.EndTutorial = function () {
            this.IsTutorialStarted = false;
        };
        //发新手指引牌
        CardControls.prototype.DearTutorialCard = function () {
            this.ResetPlayData();
            var cardList = this.deckData.DearTutorialCard();
            this.IsTutorialStarted = true;
            for (var i = 0; i < cardList.length; i++) {
                //创建扑克渲染器
                var spr = new Laya.Sprite();
                spr.scaleX = this.deckData.table.LineMove.scaleX;
                spr.scaleY = this.deckData.table.LineMove.scaleY;
                var sprRoot = this.deckData.table.LineMove.parent;
                var startRoot = this.deckData.table.StartCard;
                sprRoot.addChild(spr);
                var render = new poker.pokerGroupRender(poker.PokerGroupRenderMode.lastOneCard);
                cardList[i].SetAllCardToBack();
                render.FlushPokerList(cardList[i], false);
                spr.addChild(render);
                spr.pos(startRoot.x, startRoot.y);
                spr.visible = false;
                Laya.Tween.clearAll(spr);
                var lineRoot = this.deckData.GetDeckSpriteRoot(pokerGame.pokerDeckType.Line, i + 1);
                var delaytime = i * 70;
                Laya.Tween.from(spr, {}, 0, null, Laya.Handler.create(this, this.SetDearCardRootVisible, [spr]), delaytime);
                Laya.Tween.to(spr, { x: lineRoot.x, y: lineRoot.y }, 250, Laya.Ease.sineOut, Laya.Handler.create(this, this.PlayDearCardAutoMoveAniEnd, [i]), delaytime);
                //tw.update=Laya.Handler.create(this,this.PlayDearCardAutoMoveAniEnd,[i]);
            }
            this.IsAutoMoving = true;
        };
        //发牌
        CardControls.prototype.DearCard = function (isReTry) {
            this.ResetPlayData();
            var cardList;
            var fourDeck;
            GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.onMingPaiTaiJi, [false]);
            if (ShopSetting.powerStyle == 2 && !isReTry) {
                if (ShopSetting.nowPpower > 0) {
                    ShopSetting.nowPpower -= 1;
                    GameMain.app.mWX.startCutDown(true);
                    ShopSetting.powerConsumeTime = Math.floor(new Date().getTime() / 1000);
                    GameMain.app.mWX.setUserValue('resume_physical_power_time', ShopSetting.powerConsumeTime + '');
                    GameMain.app.mWX.setUserValue('now_physical_power', ShopSetting.nowPpower + '');
                }
            }
            if (GameMain.app.isXinShow) {
                this.IsTutorialStarted = true;
            }
            var isOddNum = 0;
            if (GameMain.app.mWX.isAbTest) {
                // if (GameMain.app.mWX.mUID % 2 == 0) {
                isOddNum = 1; //偶数，关卡
                // } else {
                // 	isOddNum = 2; //奇数，自由
                // }
            }
            else {
                isOddNum = 3;
            }
            // ////console.log('GameMain.app.mWX.mUID1', GameMain.app.mWX.mUID, isOddNum, isReTry);
            if (GameMain.app.levelnum != 0 && GameMain.app.cutlevel <= GameMain.app.levelnum && !GameMain.app.isOpenFreeModel && isOddNum != 3 && isOddNum != 2) {
                if (isReTry) {
                    Laya.timer.once(1000, this, function () {
                        GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClickShowPopup, [2]);
                    });
                    GameMain.app.isLevelGame = 1;
                    // cardList = this.deckData.RestartDearCard()
                    if (!GameMain.app.isOpenFreeModel) {
                        if (GameMain.app.mingpainum <= GameMain.app.mWX.passTheLevelNum) {
                            GameMain.app.mingpainum = GameMain.app.mingpainum + 1;
                        }
                        else {
                            GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.onMingPaiTaiJi, [true]);
                        }
                    }
                    cardList = this.deckData.DearLevelCard();
                    if (GameMain.app.isSpecialModel) {
                        fourDeck = this.deckData.DearFourDeck();
                    }
                }
                else {
                    GameMain.app.isLevelGame = 2;
                    cardList = this.deckData.DearLevelCard();
                    if (GameMain.app.isSpecialModel) {
                        fourDeck = this.deckData.DearFourDeck();
                    }
                }
            }
            else {
                GameMain.app.isSpecialModel = false;
                GameMain.app.isLevelGame = 0;
                // ////console.log('GameMain.app.mWX.mUID2:', cardList, GameMain.app.isSpecialModel);
                cardList = isReTry ? this.deckData.RestartDearCard() : this.deckData.DearCard();
            }
            for (var i = 0; i < cardList.length; i++) {
                //创建扑克渲染器
                var spr = new Laya.Sprite();
                spr.scaleX = this.deckData.table.LineMove.scaleX;
                spr.scaleY = this.deckData.table.LineMove.scaleY;
                var sprRoot = this.deckData.table.LineMove.parent;
                var startRoot = this.deckData.table.StartCard;
                sprRoot.addChild(spr);
                var render = new poker.pokerGroupRender(poker.PokerGroupRenderMode.lastOneCard);
                cardList[i].SetAllCardToBack();
                render.FlushPokerList(cardList[i], false);
                spr.addChild(render);
                spr.pos(startRoot.x, startRoot.y);
                spr.visible = false;
                Laya.Tween.clearAll(spr);
                var lineRoot = this.deckData.GetDeckSpriteRoot(pokerGame.pokerDeckType.Line, i + 1);
                var delaytime = i * 70;
                Laya.Tween.from(spr, {}, 0, null, Laya.Handler.create(this, this.SetDearCardRootVisible, [spr]), delaytime);
                Laya.Tween.to(spr, { x: lineRoot.x, y: lineRoot.y }, CardSpeedSetting.speed10, Laya.Ease.sineOut, Laya.Handler.create(this, this.PlayDearCardAutoMoveAniEnd, [i]), delaytime);
            }
            if (GameMain.app.isSpecialModel) {
                for (var j = 0; j < 4; j++) {
                    this.deckData.connectDearCardArrayToRender2(j, null);
                }
            }
            this.IsAutoMoving = true;
        };
        CardControls.prototype.SetDearCardRootVisible = function (spr) {
            spr.visible = true;
        };
        //发牌动画结束
        CardControls.prototype.PlayDearCardAutoMoveAniEnd = function (index) {
            if (index == 6) {
                this.deckData.connectDearCardArrayToRender(index, new Laya.Handler(this, this.CheckTutorialNext));
                this.IsAutoMoving = false;
                this.FlushAllClickEvent();
            }
            else {
                this.deckData.connectDearCardArrayToRender(index, null);
                this.FlushAllClickEvent();
            }
            // Laya.timer.once(1000, this, function () {
            // 	GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onChangeLastCard);
            // })
        };
        CardControls.prototype.GetCardBound = function (cardImg) {
            var img1 = cardImg;
            var rect1 = img1.getBounds();
            rect1.x *= img1.globalScaleX;
            rect1.y *= img1.globalScaleX;
            rect1.width *= img1.globalScaleX;
            rect1.height *= img1.globalScaleY;
            //var rect2= img1.getSelfBounds();
            var img1Parent = img1.parent;
            rect1.x += img1Parent.x * img1.globalScaleX;
            rect1.y += img1Parent.y * img1.globalScaleX;
            var imgParent2 = img1.parent.parent;
            rect1.x += imgParent2.x;
            rect1.y += imgParent2.y;
            var imgParent3 = img1.parent.parent.parent;
            rect1.x += imgParent3.x;
            rect1.y += imgParent3.y;
            return rect1;
        };
        CardControls.prototype.CheckCollision = function (group1, group2) {
            if (group1.render.collisionImage == null || group2.render.collisionImage == null) {
                return false;
            }
            var img1 = group1.render.collisionImage;
            var img2 = group2.render.collisionImage;
            var rect1 = this.GetCardBound(img1);
            var rect2 = this.GetCardBound(img2);
            var tRet = rect1.intersects(rect2);
            var IsNeedShowCollision = false;
            if (IsNeedShowCollision && !tRet) {
                //画矩形
                var sp = new Laya.Sprite();
                sp.graphics.drawRect(rect1.x, rect1.y, rect1.width, rect1.height, "#ffff00");
                sp.graphics.drawRect(rect2.x, rect2.y, rect2.width, rect2.height, "#ffff00");
                img2.parent.parent.parent.parent.addChild(sp);
                this.CollisionArrList.push(sp);
            }
            //console.debug( (tRet?"true":"false")+  " rect1="+rect1.toString()+"rect2="+rect2.toString());
            return tRet;
        };
        //刷新三卡堆的render
        CardControls.prototype.FlushThreeCardRender = function () {
            this.deckData.ThreeCard.data.SetLastThreeCardToFrontIfNot();
            this.deckData.ThreeCard.FlushRender();
        };
        //刷新三卡堆的event
        CardControls.prototype.FlushThreeCardClick = function () {
            for (var i = 0; i < this.deckData.ThreeCard.data.pokerList.length; i++) {
                var poker2 = this.deckData.ThreeCard.data.pokerList[i];
                poker2.render.img.offAll();
            }
            //最后一张卡
            var lastCard = this.deckData.ThreeCard.data.GetLastCard();
            if (lastCard != null) {
                var lastCardIndex = this.deckData.ThreeCard.data.GetLastCardIndex();
                // ////console.log('onMounseDown1');
                lastCard.render.img.on(Laya.Event.MOUSE_DOWN, this, this.onMounseDown, [this.deckData.ThreeCard, pokerGame.pokerDeckType.threeCardDeck, -1, lastCardIndex]);
            }
        };
        //刷新起始堆的显示
        CardControls.prototype.FlushStartRender = function () {
            this.deckData.SetAllStartCardToBack();
            this.deckData.StartCard.FlushRender();
        };
        //刷新起始堆的点击事件
        CardControls.prototype.FlushStartClick = function () {
            for (var i = 0; i < this.deckData.StartCard.render.numChildren; i++) {
                var poker = this.deckData.StartCard.render.getChildAt(i);
                poker.offAll();
                poker.on(Laya.Event.MOUSE_DOWN, this, this.ClickStartDeck);
            }
        };
        CardControls.prototype.FlushAllClickEvent = function () {
            // ////console.log('FlushLineClick2');
            for (var i = 0; i < 7; i++) {
                this.FlushLineClick(i);
            }
            this.FlushClickEvent(pokerGame.pokerDeckType.startDeck, 0);
            for (var i = 0; i < 4; i++) {
                this.FlushFourDackClick(i);
            }
        };
        CardControls.prototype.FlushDeckRender = function (deckIndex) {
            var deckGroup = this.deckData.pokerDeckList[deckIndex];
            if (deckGroup == null) {
                return;
            }
            deckGroup.FlushRender();
        };
        CardControls.prototype.FlushDeckClick = function (deckIndex) {
            var deckGroup = this.deckData.pokerDeckList[deckIndex];
            if (deckGroup == null) {
                return;
            }
            if (deckGroup.data.pokerList.length == 0) {
                return;
            }
            var lastIndex = deckGroup.data.pokerList.length - 1;
            for (var i = 0; i < deckGroup.data.pokerList.length; i++) {
                var poker = deckGroup.data.pokerList[i];
                //poker.render.img.offAll();
                if (i == lastIndex) {
                    // ////console.log('onMounseDown2');
                    poker.render.img.on(Laya.Event.MOUSE_DOWN, this, this.onMounseDown, [deckGroup, pokerGame.pokerDeckType.Deck, deckIndex + 1, i]);
                }
                else {
                    poker.render.img.offAll();
                }
            }
        };
        //刷新线的render
        CardControls.prototype.FlushLineRender = function (LineIndex) {
            this.FlushLineBack(LineIndex);
        };
        //线上的  最后一张牌 如果是卡背就翻过来
        CardControls.prototype.FlushLineBack = function (LineIndex) {
            if (LineIndex < 0) {
                return;
            }
            var lineGroup = this.deckData.pokerLineList[LineIndex];
            lineGroup.data.SetLastCardFrontIfNot();
            lineGroup.FlushRender();
        };
        //刷新线牌组的点击事件
        CardControls.prototype.FlushLineClick = function (LineIndex) {
            if (LineIndex < 0) {
                return;
            }
            var lineGroup = this.deckData.pokerLineList[LineIndex];
            for (var i = 0; i < lineGroup.data.pokerList.length; i++) {
                var poker = lineGroup.data.pokerList[i];
                poker.render.img.offAll();
                if (poker.data.IsCardBack) {
                    continue;
                }
                // ////console.log('onMounseDown3');
                poker.render.img.on(Laya.Event.MOUSE_DOWN, this, this.onMounseDown, [lineGroup, pokerGame.pokerDeckType.Line, LineIndex + 1, i]);
                // console.debug("AddLineClick=onMounseDown=" + (LineIndex + 1) + "index=" + i + "length=" + lineGroup.data.pokerList.length);
            }
        };
        CardControls.prototype.FlushFourDackClick = function (index) {
            if (index < 0) {
                return;
            }
            var lineGroup = this.deckData.pokerDeckList[index];
            for (var i = 0; i < lineGroup.data.pokerList.length; i++) {
                var poker = lineGroup.data.pokerList[i];
                poker.render.img.offAll();
                if (poker.data.IsCardBack) {
                    continue;
                }
                // ////console.log('onMounseDown3');
                poker.render.img.on(Laya.Event.MOUSE_DOWN, this, this.onMounseDown, [lineGroup, pokerGame.pokerDeckType.Deck, index + 1, i]);
            }
        };
        return CardControls;
    }());
    pokerGame.CardControls = CardControls;
})(pokerGame || (pokerGame = {}));
//# sourceMappingURL=CardControls.js.map
/**
* 扑克图片渲染体
*/
var poker;
(function (poker) {
    var cardRenderType;
    (function (cardRenderType) {
        cardRenderType[cardRenderType["cardIMG"] = 0] = "cardIMG";
        cardRenderType[cardRenderType["cardBack"] = 1] = "cardBack";
        cardRenderType[cardRenderType["systemIMG"] = 2] = "systemIMG"; //系统图案
    })(cardRenderType = poker.cardRenderType || (poker.cardRenderType = {}));
    var pokerRender = /** @class */ (function () {
        function pokerRender() {
            this.shadowImg1 = null;
            this.mask1 = null;
            this.mask2 = null;
            /**卡牌正面背景地址 */
            this.ImageFileName = "";
            /**卡牌图案地址 */
            this.IconFileName = "";
            /**卡牌具体数值 */
            this.TxtFileNum = "";
            /**卡牌具体名字 */
            this.TxtFileName = "";
            /**卡牌标识地址 */
            this.SignFileName = "";
            /**卡牌具体描述 */
            this.TxtFileDesc = "";
            this.cardType = cardRenderType.cardIMG; //卡片图类型
            var a = 'a';
            if (a == 'a')
                a = 'a';
            this.img = new Laya.Image();
            this.img.size(102, 152);
            this.iconImg = new Laya.Image();
            this.img.addChild(this.iconImg);
            this.iconImg.anchorX = 0.5;
            this.iconImg.anchorY = 0.5;
            this.iconImg.pos(this.img.width / 2, this.img.height / 2);
            this.signImg = new Laya.Image();
            this.img.addChild(this.signImg);
            this.signImg.scale(0.2, 0.2);
            this.signImg.pos(5, 25);
            this.numTxt = new Laya.Label();
            this.img.addChild(this.numTxt);
            this.numTxt.color = "#000000";
            this.numTxt.font = "SimHei";
            this.numTxt.fontSize = 20;
            this.numTxt.pos(5, 5);
            this.nameTxt = new Laya.Label();
            this.img.addChild(this.nameTxt);
            this.nameTxt.color = "#000000";
            this.nameTxt.font = "SimHei";
            this.nameTxt.fontSize = 18;
            this.nameTxt.anchorX = 0.5;
            this.nameTxt.anchorY = 0.5;
            this.nameTxt.bold = true;
            this.nameTxt.pos(this.img.width / 2, 110);
            this.descTxt = new Laya.Label();
            this.img.addChild(this.descTxt);
            this.descTxt.color = "#000000";
            this.descTxt.font = "SimHei";
            this.descTxt.fontSize = 10;
            this.descTxt.anchorX = 0.5;
            this.descTxt.pos(this.img.width / 2, 123);
            this.img.rotation = MathUtils.getRandom(-1, 1, false);
        }
        pokerRender.prototype.initSD = function () {
            if (!this.shadowImg1) {
                this.shadowImg1 = new Laya.Image();
                this.shadowImg1.skin = 'UI/game_image_sd5.png';
                this.shadowImg1.size(102, 152);
                this.shadowImg1.pos(5, 5);
                this.img.addChild(this.shadowImg1);
            }
        };
        pokerRender.ReadSkin = function (type, bool) {
            // this.rsty = type;
            // ////console.log('l3', pokerUI, pokerUI.shop, pokerUI.shop.ItemSelectedInPage3);
            // pokerRender.backSkinName = pokerUI.shop.ItemSelectedInPage3.ItemIcon;
            // pokerRender.backSkinName = `local/卡背/CardBack_${ShopSetting.nowCardBack}.png`;
            // // ////console.log('l4');
            // if (GameMain.app.mWX.fhOnoff == 0) {
            // 	// ////console.log('l5');
            // 	pokerRender.cardSkinName = "poker4/"
            // } else {
            // 	// ////console.log('l6');
            // 	if (type == 0) {
            // 		pokerRender.cardSkinName = pokerUI.shop.ItemSelectedInPage2.ItemIcon;
            // 	} else {
            // 		if (bool) {
            // 			pokerRender.cardSkinName = "poker5/"
            // 		} else {
            // 			pokerRender.cardSkinName = "poker6/"
            // 		}
            // 	}
            if (type === void 0) { type = 0; }
            if (bool === void 0) { bool = false; }
            // }
            // ////console.log('l7');
        };
        pokerRender.prototype.Dispose = function () {
            if (this.img) {
                this.img.removeSelf();
                this.img.dispose();
                this.img = null;
            }
        };
        pokerRender.prototype.ChangeRenderToSystemCard = function (systemImgName) {
            this.cardType = cardRenderType.systemIMG;
            this.ImageFileName = "system/" + systemImgName;
            //Laya.loader.load("res/atlas/system.atlas",Laya.Handler.create(this,this.onLoadedSystemIMG));	
            Laya.loader.load([{ url: "res/atlas/system.atlas", type: Laya.Loader.ATLAS }], Laya.Handler.create(this, this.onLoadedSystemIMG));
        };
        pokerRender.prototype.ChangeRenderByData = function (data) {
            if (!this.shadowImg1) {
                this.initSD();
            }
            if (data.IsCardBack) {
                this.cardType = cardRenderType.cardBack;
                //this.ImageFileName=this.GetImgFileName(data);
                // if (pokerUI.shop.ItemSelectedInPage3 != null) {
                this.onCardBackIMGLoaded();
                // }
            }
            else {
                this.cardType = cardRenderType.cardIMG;
                this.ImageFileName = pokerRender.cardSkinName + pokerRender.GetImgFileName(data);
                this.IconFileName = pokerRender.cardSkinName + pokerRender.GetIconFileName(data);
                this.SignFileName = pokerRender.cardSkinName + pokerRender.GetSignFileName(data);
                this.TxtFileName = pokerRender.GetTxtFileName(data);
                this.TxtFileDesc = pokerRender.GetTxtFileDesc(data);
                this.TxtFileNum = pokerRender.GetTxtFileNum(data);
                //console.log("ChangeRenderByData:", this.SignFileName, this.TxtFileName, this.TxtFileDesc, this.TxtFileNum)
                this.onLoadedCardIMG();
                // if (pokerUI.shop.ItemSelectedInPage2 != null) {
                // 	this.ImageFileName = pokerRender.cardSkinName + pokerRender.GetImgFileName(data);
                // 	pokerUI.shop.ItemSelectedInPage2.ItemIcon + pokerRender.GetImgFileName(data);
                // 	// //console.log('pokerUI.shop.ItemSelectedInPage2.ItemAtlas', pokerUI.shop.ItemSelectedInPage2.ItemAtlas);
                // 	Laya.loader.load(pokerUI.shop.ItemSelectedInPage2.ItemAtlas, Laya.Handler.create(this, this.onLoadedCardIMG, [0]));
                // 	if (GameMain.app.mWX.fhOnoff == 0) {
                // 		if (GameMain.app.isBackToFront) {
                // 			GameMain.app.isBackToFront = false;
                // 			// ////console.log('diudududududud1', data);
                // 			Laya.loader.load([{ url: "res/atlas/poker4.atlas", type: Laya.Loader.ATLAS }], Laya.Handler.create(this, this.onLoadedCardIMG, [1]));
                // 		} else {
                // 			Laya.loader.load([{ url: "res/atlas/poker4.atlas", type: Laya.Loader.ATLAS }], Laya.Handler.create(this, this.onLoadedCardIMG, [0]));
                // 		}
                // 	} else {
                // 		if (pokerRender.rsty == 0) {
                // 			if (GameMain.app.isBackToFront) {
                // 				GameMain.app.isBackToFront = false;
                // 				// ////console.log('diudududududud1', data);
                // 				Laya.loader.load([{ url: "res/atlas/poker5.atlas", type: Laya.Loader.ATLAS }], Laya.Handler.create(this, this.onLoadedCardIMG, [1]));
                // 			} else {
                // 				Laya.loader.load([{ url: "res/atlas/poker5.atlas", type: Laya.Loader.ATLAS }], Laya.Handler.create(this, this.onLoadedCardIMG, [0]));
                // 			}
                // 		} else {
                // 			if (GameMain.app.isBackToFront) {
                // 				GameMain.app.isBackToFront = false;
                // 				// ////console.log('diudududududud1', data);
                // 				Laya.loader.load([{ url: "res/atlas/poker6.atlas", type: Laya.Loader.ATLAS }], Laya.Handler.create(this, this.onLoadedCardIMG, [1]));
                // 			} else {
                // 				Laya.loader.load([{ url: "res/atlas/poker6.atlas", type: Laya.Loader.ATLAS }], Laya.Handler.create(this, this.onLoadedCardIMG, [0]));
                // 			}
                // 		}
                // 	}
                // }
            }
        };
        pokerRender.prototype.onCardBackIMGLoaded = function () {
            if (this.cardType != cardRenderType.cardBack) {
                return;
            }
            this.img.graphics.clear();
            this.img.skin = '';
            this.iconImg.skin = '';
            this.signImg.skin = '';
            this.descTxt.text = '';
            this.nameTxt.text = '';
            this.numTxt.text = '';
            this.shadowImg1.visible = false;
        };
        pokerRender.prototype.onLoadedCardIMG = function (bools) {
            if (bools === void 0) { bools = 0; }
            if (this.cardType != cardRenderType.cardIMG) {
                return;
            }
            if (bools == 1) {
                this.img.skin = '';
                this.img.size(102, 152);
                this.shadowImg1.visible = false;
                var x1;
                var x2;
                if (!x1) {
                    x1 = new Laya.Image();
                }
                if (!x2) {
                    x2 = new Laya.Image();
                }
                x1.size(this.img.width, this.img.height);
                x2.size(this.img.width, this.img.height);
                x1.skin = pokerRender.backSkinName;
                x2.skin = this.ImageFileName;
                this.img.addChild(x1);
                this.img.addChild(x2);
                x1.scaleX = 1;
                x2.scaleX = 0;
                x1.anchorX = 0.5;
                x2.anchorX = 0.5;
                x1.pos(x1.width / 2, 0);
                x2.pos(x2.width / 2, 0);
                Laya.Tween.to(x1, { scaleX: 0 }, CardSpeedSetting.speed9, Laya.Ease.linearIn, new Laya.Handler(this, function () {
                    Laya.Tween.to(x2, { scaleX: 1 }, CardSpeedSetting.speed9, Laya.Ease.linearOut, new Laya.Handler(this, function () {
                        x1.removeSelf();
                        x2.removeSelf();
                        x1 = null;
                        x2 = null;
                        var newSkinName = this.ImageFileName;
                        if (this.img.skin != newSkinName) {
                            this.img.graphics.clear();
                            this.img.skin = this.ImageFileName;
                        }
                        this.shadowImg1.visible = true;
                    }));
                }));
            }
            else {
                if (GameMain.app.isNotDraging) {
                    return;
                }
                // var newSkinName = this.ImageFileName;
                // if (this.img.skin != newSkinName) {
                // 	this.img.graphics.clear();
                this.img.skin = '';
                this.iconImg.skin = '';
                this.signImg.skin = '';
                this.descTxt.text = '';
                this.nameTxt.text = '';
                this.numTxt.text = '';
                this.img.skin = this.ImageFileName;
                this.iconImg.skin = this.IconFileName;
                this.signImg.skin = this.SignFileName;
                this.descTxt.text = this.TxtFileDesc;
                this.nameTxt.text = this.TxtFileName;
                this.numTxt.text = this.TxtFileNum;
                // }
            }
        };
        pokerRender.prototype.onLoadedSystemIMG = function () {
            if (this.cardType != cardRenderType.systemIMG) {
                return;
            }
            var newSkinName = this.ImageFileName;
            if (this.img.skin != newSkinName) {
                this.img.graphics.clear();
                this.img.skin = this.ImageFileName;
                // console.debug("this.img.skin="+this.img.skin);
            }
        };
        pokerRender.GetImgFileNameWithTypeNum = function (type, pokerNum) {
            var data = new poker.pokerdata(type, pokerNum);
            return pokerRender.GetImgFileName(data);
        };
        pokerRender.GetImgFileName = function (data) {
            var typeStr = "";
            switch (data.mType) {
                case PokerType.blood:
                    typeStr = "";
                    break;
                case PokerType.coin:
                    typeStr = "";
                    break;
                case PokerType.enemy:
                    typeStr = "";
                    break;
                case PokerType.atk:
                    typeStr = "";
                    break;
                case PokerType.store:
                    typeStr = "";
                    break;
                case PokerType.treasure:
                    typeStr = "";
                    break;
            }
            var tRet = typeStr + "card_front_bg.png";
            return tRet;
        };
        pokerRender.GetIconFileName = function (data) {
            var typeStr = "";
            switch (data.mType) {
                case PokerType.blood:
                    typeStr = "";
                    break;
                case PokerType.coin:
                    typeStr = "";
                    break;
                case PokerType.enemy:
                    typeStr = "";
                    break;
                case PokerType.atk:
                    typeStr = "";
                    break;
                case PokerType.store:
                    typeStr = "";
                    break;
                case PokerType.treasure:
                    typeStr = "";
                    break;
            }
            var numStr = data.mNum.toString();
            if (data.mNum < 10) {
                numStr = "0" + numStr;
            }
            var tRet = "img_card_" + typeStr + numStr + ".png";
            return tRet;
        };
        pokerRender.GetSignFileName = function (data) {
            var typeStr = "";
            switch (data.mType) {
                case PokerType.blood:
                    typeStr = "blood";
                    break;
                case PokerType.coin:
                    typeStr = "coin";
                    break;
                case PokerType.enemy:
                    typeStr = "enemy";
                    break;
                case PokerType.atk:
                    typeStr = "shiled";
                    break;
                case PokerType.store:
                    typeStr = "store";
                    break;
                case PokerType.treasure:
                    typeStr = "treasure";
                    break;
            }
            var tRet = "CardEffects/" + typeStr + ".png";
            return tRet;
        };
        pokerRender.GetTxtFileName = function (data) {
            var typeStr = "";
            switch (data.mType) {
                case PokerType.blood:
                    typeStr = CardConstant.CardBlood[0]["name"];
                    break;
                case PokerType.coin:
                    typeStr = CardConstant.CardCoin[0]["name"];
                    break;
                case PokerType.enemy:
                    typeStr = CardConstant.CardCK[data.mNum]["name"];
                    break;
                case PokerType.atk:
                    typeStr = CardConstant.CardWeapon[data.mNum]["name"];
                    break;
                case PokerType.store:
                    typeStr = CardConstant.CardStore[0]["name"];
                    break;
                case PokerType.treasure:
                    typeStr = CardConstant.CardTreasure[data.mNum]["name"];
                    break;
            }
            var tRet = typeStr;
            return tRet;
        };
        pokerRender.GetTxtFileDesc = function (data) {
            var typeStr = "";
            // switch (data.mType) {
            // 	case PokerType.blood:
            // 		typeStr = CardConstant.CardBlood[0]["desc"];
            // 		break;
            // 	case PokerType.coin:
            // 		typeStr = CardConstant.CardCoin[0]["desc"];
            // 		break;
            // 	case PokerType.enemy:
            // 		typeStr = CardConstant.CardCK[data.mNum]["desc"];
            // 		break;
            // 	case PokerType.shiled:
            // 		typeStr = CardConstant.CardWeapon[data.mNum]["desc"];
            // 		break;
            // 	case PokerType.store:
            // 		typeStr = CardConstant.CardStore[0]["desc"];
            // 		break;
            // 	case PokerType.treasure:
            // 		typeStr = CardConstant.CardTreasure[data.mNum]["desc"];
            // 		break;
            // }
            var tRet = typeStr;
            return tRet;
        };
        pokerRender.GetTxtFileNum = function (data) {
            var typeStr = "";
            switch (data.mType) {
                case PokerType.blood:
                    typeStr = data.mNum.toString();
                    break;
                case PokerType.coin:
                    typeStr = data.mNum.toString();
                    break;
                case PokerType.enemy:
                    typeStr = data.mAtk.toString();
                    break;
                case PokerType.atk:
                    typeStr = data.mHurt.toString();
                    break;
                case PokerType.store:
                    typeStr = "";
                    break;
                case PokerType.treasure:
                    typeStr = "";
                    break;
            }
            var tRet = typeStr;
            return tRet;
        };
        pokerRender.backSkinName = "img_card_back7";
        pokerRender.cardSkinName = "Game/";
        pokerRender.rsty = 0;
        return pokerRender;
    }());
    poker.pokerRender = pokerRender;
})(poker || (poker = {}));
//# sourceMappingURL=pokerRender.js.map
/**
* 一组扑克的数据
*/
var poker;
(function (poker_1) {
    var pokerGroupData = /** @class */ (function () {
        function pokerGroupData(vpokerList) {
            if (vpokerList === void 0) { vpokerList = null; }
            var a = 'a';
            if (a == 'a')
                a = 'a';
            if (vpokerList != null) {
                this.pokerList = vpokerList;
            }
            else {
                this.pokerList = new Array();
            }
        }
        //从初始化的卡组中快速寻找卡
        pokerGroupData.prototype.FindCardFromFormatCardIndex = function (type, num) {
            // var index = Math.floor((num - 1) * 4 + <number>(type - 1));
            // return index;
            for (var _i = 0, _a = this.pokerList; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.data.mType == type && item.data.mNum == num) {
                    return item;
                }
            }
            return null;
        };
        pokerGroupData.prototype.Dispose = function () {
            for (var i = 0; i < this.pokerList.length; i++) {
                this.pokerList[i].Dispose();
            }
            this.pokerList.splice(0);
        };
        //连接
        pokerGroupData.prototype.Concat = function (vGroupData) {
            this.pokerList = this.pokerList.concat(vGroupData.pokerList);
            vGroupData.pokerList.splice(0);
        };
        //最后一张卡不是正面,就显示为正面
        pokerGroupData.prototype.SetLastCardFrontIfNot = function () {
            var lastcard = this.GetLastCard();
            if (lastcard == null) {
                return;
            }
            if (lastcard.data.IsCardBack) {
                lastcard.data.IsCardBack = false;
                if (!GameMain.app.isNotDraging) {
                    // ////console.log('??????????????');
                    GameMain.app.isBackToFront = true;
                }
            }
        };
        //设置最后三张卡显示正面
        pokerGroupData.prototype.SetLastThreeCardToFrontIfNot = function () {
            var lastindex = this.pokerList.length - 1;
            for (var i = lastindex - 2; i < this.pokerList.length; i++) {
                if (i >= 0) {
                    if (this.pokerList[i].data.IsCardBack) {
                        this.pokerList[i].data.IsCardBack = false;
                    }
                }
            }
        };
        pokerGroupData.prototype.RemoveAllCardRender = function () {
            this.pokerList.forEach(function (element) {
                element.render.img.removeSelf();
            });
        };
        //刷新所有卡片的render
        pokerGroupData.prototype.FlushAllCardRender = function () {
            this.pokerList.forEach(function (element) {
                element.render.ChangeRenderByData(element.data);
            });
            //console.log("baibaibai3")
            // if (pokerRender.rsty == 1) {
            // 	for (let index = 0; index < this.pokerList.length; index++) {
            // 		if (index == this.pokerList.length - 1) {
            // 			pokerRender.ReadSkin(1, true);
            // 		} else {
            // 			pokerRender.ReadSkin(1, false);
            // 		}
            // 		this.pokerList[index].render.ChangeRenderByData(this.pokerList[index].data);
            // 	}
            // }
        };
        pokerGroupData.prototype.SetAllCardToBack = function () {
            this.pokerList.forEach(function (element) {
                if (!element.data.IsCardBack) {
                    element.data.IsCardBack = true;
                }
            });
        };
        pokerGroupData.prototype.SetAllCardToFront = function () {
            this.pokerList.forEach(function (element) {
                if (element.data.IsCardBack) {
                    element.data.IsCardBack = false;
                }
            });
        };
        //最后一张卡不是背面,就显示为背面
        pokerGroupData.prototype.SetLastCardBackIfNot = function () {
            var lastcard = this.GetLastCard();
            if (lastcard == null) {
                return;
            }
            if (!lastcard.data.IsCardBack) {
                lastcard.data.IsCardBack = true;
            }
        };
        //只让最后一张卡显示正面,其他都是背面
        pokerGroupData.prototype.SetOnlyLastCardFront = function () {
            for (var i = 0; i < this.pokerList.length; i++) {
                var poker = this.pokerList[i];
                poker.data.IsCardBack = ((i + 1) != this.pokerList.length);
                // if (i == this.pokerList.length - 1) {
                // 	var rd = this.pokerList[this.pokerList.length - 1].render;
                // 	var ifname = pokerRender.cardSkinName + pokerRender.GetImgFileName(this.pokerList[this.pokerList.length - 1].data);
                // 	rd.img.skin = '';
                // 	rd.img.size(102, 152);
                // 	rd.shadowImg1.visible = false;
                // 	var x1: Laya.Image;
                // 	var x2: Laya.Image;
                // 	if (!x1) {
                // 		x1 = new Laya.Image();
                // 	}
                // 	if (!x2) {
                // 		x2 = new Laya.Image();
                // 	}
                // 	x1.size(rd.img.width, rd.img.height);
                // 	x2.size(rd.img.width, rd.img.height);
                // 	x1.skin = pokerRender.backSkinName;
                // 	x2.skin = ifname;
                // 	rd.img.addChild(x1);
                // 	rd.img.addChild(x2);
                // 	x1.scaleX = 1;
                // 	x2.scaleX = 0;
                // 	x1.anchorX = 0.5;
                // 	x2.anchorX = 0.5;
                // 	x1.pos(x1.width / 2, 0);
                // 	x2.pos(x2.width / 2, 0);
                // 	Laya.Tween.to(x1, { scaleX: 0 }, 150, Laya.Ease.linearIn, new Laya.Handler(this, function () {
                // 		Laya.Tween.to(x2, { scaleX: 1 }, 150, Laya.Ease.linearOut, new Laya.Handler(this, function () {
                // 			x1.removeSelf();
                // 			x2.removeSelf();
                // 			x1 = null;
                // 			x2 = null;
                // 			var newSkinName = ifname;
                // 			if (rd.img.skin != newSkinName) {
                // 				rd.img.graphics.clear();
                // 				rd.img.skin = ifname;
                // 			}
                // 			rd.shadowImg1.visible = true;
                // 			poker.data.IsCardBack = false;
                // 			callback(ii, that);
                // 		}));
                // 	}));
                // } else {
                // 	poker.data.IsCardBack = true;
                // }
            }
        };
        pokerGroupData.prototype.GetFirstCard = function () {
            if (this.pokerList.length > 0) {
                return this.pokerList[0];
            }
            return null;
        };
        pokerGroupData.prototype.GetLastCard = function () {
            if (this.pokerList.length > 0) {
                var lastindex = this.pokerList.length - 1;
                return this.pokerList[lastindex];
            }
            return null;
        };
        pokerGroupData.prototype.GetLastCardIndex = function () {
            if (this.pokerList.length > 0) {
                var lastindex = this.pokerList.length - 1;
                return lastindex;
            }
            return -1;
        };
        pokerGroupData.prototype.GetIndexCard = function (value) {
            if (this.pokerList.length > 0) {
                return this.pokerList[value];
            }
            return null;
        };
        //获得牌组中最上面的n张卡
        pokerGroupData.prototype.SplitePokerGroupByNum = function (num) {
            var pGrouop = null;
            if (this.pokerList.length <= num) {
                pGrouop = this.SplitePokerGroup(0);
            }
            else {
                var startSpliteIndex = this.pokerList.length - num;
                pGrouop = this.SplitePokerGroup(startSpliteIndex);
            }
            //console.log("pGrouop.pokerList.length: ", pGrouop.pokerList.length)
            pGrouop.pokerList.forEach(function (element, index) {
                element.data.SetFloor(index);
            });
            return pGrouop;
        };
        //获得牌组中上面的1张卡
        pokerGroupData.prototype.SplitePokerGroupByNum2 = function (num) {
            var pGrouop = null;
            var startSpliteIndex = num;
            pGrouop = this.SplitePokerGroup2(startSpliteIndex);
            //pGrouop.pokerList.reverse();
            // ////console.log('pGrouop', pGrouop);
            return pGrouop;
        };
        //分割牌组 获得前面的几张牌
        pokerGroupData.prototype.SplitePokerGroupFromFront = function (endIndex) {
            var tPokerArray = null;
            if (endIndex >= this.pokerList.length) {
                tPokerArray = this.pokerList;
                this.pokerList = new Array();
            }
            else {
                var tPokerArrayTRet = this.pokerList.slice(0, endIndex + 1);
                var tPokerArrayKeep = this.pokerList.slice(endIndex + 1);
                tPokerArray = tPokerArrayTRet;
                this.pokerList.splice(0);
                this.pokerList = tPokerArrayKeep;
            }
            var tRet = new pokerGroupData(tPokerArray);
            return tRet;
        };
        //分割牌组
        pokerGroupData.prototype.SplitePokerGroup = function (startIndex) {
            var tPokerArray = this.pokerList.slice(startIndex);
            // ////console.log('xxyy0-', this.pokerList);
            this.pokerList.splice(startIndex);
            var tRet = new pokerGroupData(tPokerArray);
            // ////console.log('xxyy1-', this.pokerList);
            // ////console.log('xxyy2-', tPokerArray);
            // ////console.log('xxyy3-', tRet);
            return tRet;
        };
        //分割牌组
        pokerGroupData.prototype.SplitePokerGroup2 = function (startIndex) {
            var tPokerArray = this.pokerList.slice(startIndex, startIndex + 1);
            // ////console.log('xxyy0-', this.pokerList);
            this.pokerList.splice(startIndex, 1);
            var tRet = new pokerGroupData(tPokerArray);
            // ////console.log('xxyy1-', this.pokerList);
            // ////console.log('xxyy2-', tPokerArray);
            // ////console.log('xxyy3-', tRet);
            return tRet;
        };
        //获得分割的牌组的引用
        pokerGroupData.prototype.SlicePokerGroup = function (startIndex) {
            var tPokerArray = this.pokerList.slice(startIndex);
            var tRet = new pokerGroupData(tPokerArray);
            return tRet;
        };
        //复制牌组中的数据
        pokerGroupData.prototype.ClonePokerGroup = function (startIndex) {
            var tPokerArray = new Array();
            for (var i = startIndex; i < this.pokerList.length; i++) {
                var data = this.pokerList[i].data; //.Clone();
                var newpokerChain = new poker_1.pokerChain(data.mType, data.mNum);
                tPokerArray.push(newpokerChain);
            }
            var tRet = new pokerGroupData(tPokerArray);
            return tRet;
        };
        //创建一整套的扑克
        pokerGroupData.prototype.CreateFull = function (WithKing) {
            if (WithKing === void 0) { WithKing = false; }
            this.pokerList = new Array();
            // for (let i = 0; i < 15; i++) {
            // 	var poker1 = new pokerChain(PokerType.blood, MathUtils.getRandom(1, 9));
            // 	poker1.CreateRender();
            // 	this.pokerList.push(poker1);
            // }
            // for (let j = 0; j < 15; j++) {
            // 	var num = MathUtils.getRandom(1, 5);
            // 	var poker2 = new pokerChain(PokerType.shiled, num);
            // 	poker2.CreateHurt(MathUtils.getRandom(CardConstant.CardWeapon[num]["num"][0], CardConstant.CardWeapon[num]["num"][1]).toString());
            // 	poker2.CreateRender();
            // 	this.pokerList.push(poker2);
            // }
            // for (let k = 0; k < 15; k++) {
            // 	var num = MathUtils.getRandom(1, 3);
            // 	var poker3 = new pokerChain(PokerType.enemy, num);
            // 	poker3.CreateAtk(MathUtils.getRandom(CardConstant.CardCK[num]["num"][0], CardConstant.CardCK[num]["num"][1]).toString());
            // 	poker3.CreateRender();
            // 	this.pokerList.push(poker3);
            // }
            for (var l = 0; l < 36; l++) {
                var poker4 = new poker_1.pokerChain(PokerType.coin, 1);
                poker4.CreateRender();
                this.pokerList.push(poker4);
            }
            //console.log("start:", this.pokerList.length)
        };
        //把扑克加入组中
        pokerGroupData.prototype.AddPoker = function (poker) {
            this.pokerList.push(poker);
        };
        //经典洗牌算法
        pokerGroupData.prototype.Shuffle = function () {
            var length = this.pokerList.length;
            for (var i = 0; i < length; i++) {
                var indexf = Math.random() * (length);
                var rIndex = Math.floor(indexf);
                if (rIndex == i) {
                    continue;
                }
                var a = this.pokerList[i];
                var b = this.pokerList[rIndex];
                this.pokerList[i] = b;
                this.pokerList[rIndex] = a;
            }
        };
        //洗牌 参数：次数
        pokerGroupData.prototype.ShuffleWithTime = function (time) {
            if (time === void 0) { time = 1; }
            for (var i = 0; i < time; i++) {
                this.Shuffle();
            }
        };
        return pokerGroupData;
    }());
    poker_1.pokerGroupData = pokerGroupData;
})(poker || (poker = {}));
//# sourceMappingURL=pokerGroupData.js.map
//扑克类型
var PokerType;
(function (PokerType) {
    PokerType[PokerType["enemy"] = 1] = "enemy";
    PokerType[PokerType["blood"] = 2] = "blood";
    PokerType[PokerType["atk"] = 3] = "atk";
    PokerType[PokerType["store"] = 4] = "store";
    PokerType[PokerType["treasure"] = 5] = "treasure";
    PokerType[PokerType["coin"] = 6] = "coin";
    PokerType[PokerType["shiled"] = 7] = "shiled"; //护盾
})(PokerType || (PokerType = {}));
var TreasureType;
(function (TreasureType) {
    TreasureType[TreasureType["Props"] = 0] = "Props";
    TreasureType[TreasureType["KongFu"] = 1] = "KongFu";
})(TreasureType || (TreasureType = {}));
var poker;
(function (poker) {
    //扑克数学数据
    var pokerdata = /** @class */ (function () {
        function pokerdata(vType, vNum) {
            this.IsCardBack = false; //是否为卡背面
            this.mLast = false; //是否在最底下
            var a = 'a';
            if (a == 'a')
                a = 'a';
            this.mType = vType;
            this.mNum = vNum;
            this.mFloor = 0;
            this.mAtk = 0;
            this.mHurt = 0;
        }
        pokerdata.prototype.RestartInit = function () {
            this.mType = PokerType.coin;
            this.mNum = 1;
            this.mFloor = 0;
            this.mAtk = 0;
            this.mHurt = 0;
            this.IsCardBack = false;
        };
        pokerdata.prototype.SetData = function (data) {
            this.mType = data.mType;
            this.mNum = data.mNum;
        };
        pokerdata.prototype.SetAtk = function (value) {
            this.mAtk = value;
        };
        pokerdata.prototype.SetHurt = function (value) {
            this.mHurt = value;
        };
        pokerdata.prototype.SetFloor = function (value) {
            this.mFloor = value;
        };
        pokerdata.prototype.SetCardBack = function (bool) {
            this.IsCardBack = bool;
        };
        pokerdata.prototype.SetIsLast = function (bool) {
            this.mLast = bool;
        };
        pokerdata.Getkey = function (type, num) {
            return type * 1000 + num;
        };
        pokerdata.prototype.Getkey = function () {
            return this.mType * 1000 + this.mNum;
        };
        pokerdata.prototype.Clone = function () {
            return new pokerdata(this.mType, this.mNum);
        };
        pokerdata.prototype.IsLast = function () {
            return this.mLast;
        };
        return pokerdata;
    }());
    poker.pokerdata = pokerdata;
})(poker || (poker = {}));
//# sourceMappingURL=pokerdata.js.map
/**
* name
*/
var poker;
(function (poker) {
    var pokerChainGroup = /** @class */ (function () {
        function pokerChainGroup(renderMode) {
            // ////console.log('sp31', this.data);
            this.data = new poker.pokerGroupData();
            // ////console.log('sp32', this.data);
            this.render = new poker.pokerGroupRender(renderMode);
        }
        pokerChainGroup.prototype.FlushRender = function (withSort) {
            if (withSort === void 0) { withSort = true; }
            this.render.FlushPokerList(this.data, withSort);
        };
        pokerChainGroup.prototype.GetSortedPos = function (index) {
            return this.render.GetSortedPos(index);
            //var tRet=new Laya.Point();
        };
        return pokerChainGroup;
    }());
    poker.pokerChainGroup = pokerChainGroup;
})(poker || (poker = {}));
//# sourceMappingURL=pokerChainGroup.js.map
var pokerRender = poker.pokerRender;
/**
* 接龙用的扑克结构体
*/
var poker;
(function (poker) {
    var pokerChain = /** @class */ (function () {
        function pokerChain(type, num) {
            var a = 'a';
            if (a == 'a')
                a = 'a';
            this.data = new poker.pokerdata(type, num);
        }
        pokerChain.prototype.Dispose = function () {
            if (this.render != null) {
                this.render.Dispose();
            }
        };
        pokerChain.prototype.CreateRender = function () {
            this.render = new poker.pokerRender();
            this.render.ChangeRenderByData(this.data);
            //console.log("baibaibai1")
        };
        pokerChain.prototype.CreateAtk = function (value) {
            if (this.data != null) {
                this.data.SetAtk(value);
            }
        };
        pokerChain.prototype.CreateHurt = function (value) {
            if (this.data != null) {
                this.data.SetHurt(value);
            }
        };
        pokerChain.prototype.FlushRender = function () {
            if (this.render == null) {
                this.CreateRender();
            }
            else {
                this.render.ChangeRenderByData(this.data);
                //console.log("baibaibai2")
            }
        };
        return pokerChain;
    }());
    poker.pokerChain = pokerChain;
})(poker || (poker = {}));
//# sourceMappingURL=pokerChain.js.map
/*
* name;
*/
var CardConstant = /** @class */ (function () {
    function CardConstant() {
    }
    CardConstant.CardCK = [
        "默认",
        { name: "敌人1", desc: "功夫低微的帮众", num: [1, 3] },
        { name: "敌人2", desc: "能力不错的堂主", num: [2, 4] },
        { name: "敌人3", desc: "武功高强的舵主", num: [3, 5] },
        { name: "敌人4", desc: "长老", num: [6, 9] },
        { name: "敌人5", desc: "执法队护法", num: [10, 12] },
        { name: "敌人6", desc: "掌门", num: [13, 15] },
    ];
    CardConstant.CardCoin = [
        { name: "碎银", desc: "商店购买物品时可用" },
    ];
    CardConstant.CardBlood = [
        { name: "篝火", desc: "坐下休息能够回复生命" },
    ];
    CardConstant.CardWeapon = [
        "默认",
        { name: "短刀", desc: "很短的刀，适合刺客使用", num: [1, 3] },
        { name: "长剑", desc: "很长的剑，可突刺", num: [2, 5] },
        { name: "长刀", desc: "十分沉重，适合大力劈砍", num: [3, 5] },
        { name: "长枪", desc: "兵器之王，如运用得当无人可近身", num: [4, 7] },
        { name: "大斧", desc: "大概只有力大无穷的人才适合使用吧", num: [5, 9] },
    ];
    CardConstant.CardTreasure = [
        { id: 0, name: "默认", desc: "功法" },
        { id: 1, name: "功法1", desc: "可双持武器，抵抗两次攻击，拾取武器会优先替换掉攻击力低的那一把", type: TreasureType.KongFu, isItv: false, price: 5 },
        { id: 2, name: "功法2", desc: "攻击或受到攻击，伤害结算后血量回复本次损失血量的一半数值", type: TreasureType.KongFu, isItv: false, price: 5 },
        { id: 3, name: "功法3", desc: "在持有武器的情况下，每次行动后提升武器1点伤害，武器使用后回复累计数值的生命值", type: TreasureType.KongFu, isItv: false, price: 5 },
        { id: 4, name: "功法4", desc: "生命值在20%以下时，获得一个+5的护盾，每次行动会减少一点护盾值，减到0会自动销毁，护盾被打破或销毁后该功法冷却5回合", type: TreasureType.KongFu, isItv: false, cd: 5, price: 5 },
        { id: 5, name: "功法5", desc: "每次行动后回复1点生命值", type: TreasureType.KongFu, isItv: false, price: 5 },
        { id: 6, name: "功法6", desc: "敌人对你造成的伤害会减少1点", type: TreasureType.KongFu, isItv: false, price: 5 },
        { id: 7, name: "功法7", desc: "敌人不会主动攻击", type: TreasureType.KongFu, isItv: false, price: 5 },
        { id: 8, name: "功法8", desc: "主动击败敌人后回复敌人生命值10%的血量", type: TreasureType.KongFu, isItv: false, price: 5 },
    ];
    CardConstant.CardStore = [
        { id: 0, name: "商店", desc: "可花费碎银购买物品" },
        { id: 1, name: "道具1", desc: "使用后回复5点生命", type: TreasureType.Props, price: 5, isItv: true },
        { id: 2, name: "道具2", desc: "使用后生命值上限+5", type: TreasureType.Props, price: 5, isItv: true },
        { id: 3, name: "道具3", desc: "选择上层的任意一个敌人，造成8点伤害", type: TreasureType.Props, price: 5, isItv: true },
        { id: 4, name: "道具4", desc: "选择上层的任意一张牌，更换成新的牌", type: TreasureType.Props, price: 5, isItv: true },
        { id: 5, name: "道具5", desc: "转移当前玩家路线，可选择更换到另外两个路线", type: TreasureType.Props, price: 5, isItv: true },
        { id: 6, name: "道具6", desc: "使用后获得幸运buff，获得金币数量翻倍，行动3次后消失", type: TreasureType.Props, price: 5, isItv: true },
        { id: 7, name: "道具7", desc: "剩下的所有卡牌按照原来的位置重新洗牌", type: TreasureType.Props, price: 5, isItv: true },
        { id: 8, name: "道具8", desc: "使用后获得+5护盾", type: TreasureType.Props, price: 5, isItv: true },
    ];
    CardConstant.CardSpecial = [
        { id: 0, name: "特殊物品", desc: "一般是剧情赠送或者特定的商店才能购买" },
        { id: 1, name: "道具998", desc: "商店购物打9折", type: TreasureType.Props, price: 0, isItv: false },
        { id: 2, name: "道具999", desc: "在遭受一次死亡攻击后，免疫此次伤害，血量变为1，使用后销毁", type: TreasureType.Props, price: 5, isItv: true },
        { id: 3, name: "碎岩拳法", desc: "无法使用武器，每次拾取武器会给空手增加武器攻击力一半的伤害，可叠加", type: TreasureType.KongFu, price: 5, isItv: false },
        { id: 4, name: "血蝉经", desc: "可主动开启或关闭，开启后血量-1点，伤害+1点，每次行动后翻倍", type: TreasureType.KongFu, price: 0, isItv: true },
    ];
    return CardConstant;
}());
// 宝物：
// 绝影披风：敌人不会主动攻击
// 嗜血宝珠：击败敌人可回复敌人生命值10%的血量
// 元宝护符：商店购物打9折
// 酒：可主动使用，回复5点生命，使用后销毁
// 诡木牌：在遭受一次死亡攻击后，免疫此次伤害，血量变为1，使用后销毁
// 庇护羽衣：生命值上限+5
// 功法：
// 血蝉经：可主动开启或关闭，开启后血量-1点，伤害+1点，每回合翻倍
// 左右互搏心法：可双持武器，抵抗两次攻击，拾取武器会优先替换掉攻击力低的那一把
// 金丹神功：受到伤害后，下回合回复50%伤害量的血量
// 龙吟虎啸诀：在持有武器的情况下，每回合提升武器1点伤害，武器使用后回复累计数值的生命值
// 金刚剑经：生命值在20%以下时，出现一个+5的护盾，护盾被打破后冷却5回合
// 碎岩拳法：无法使用武器，每次拾取武器会给空手增加武器50%的伤害，可叠加
//# sourceMappingURL=CardConstant.js.map
/**
* name
*/
var gameconfig;
(function (gameconfig) {
    var tutorialItem = /** @class */ (function () {
        function tutorialItem(jsonCell) {
            this.Type = jsonCell["TYPE"];
            this.Type2 = jsonCell["TYPE_2"];
            this.NUM = jsonCell["NUM"];
            this.NUM2 = jsonCell["NUM_2"];
            this.INDEX = jsonCell["Index"];
            this.INDEX2 = jsonCell["Index_2"];
            this.DESC = jsonCell["DESC"];
        }
        return tutorialItem;
    }());
    gameconfig.tutorialItem = tutorialItem;
})(gameconfig || (gameconfig = {}));
//# sourceMappingURL=tutorialItem.js.map
/**
* name
*/
var gameconfig;
(function (gameconfig) {
    var tutorialConfigData = /** @class */ (function () {
        function tutorialConfigData() {
            this.tutorialItemList = new Array();
        }
        tutorialConfigData.prototype.StartLoad = function (onLoadDoneHandle) {
            this.onLoadDoneHandle = onLoadDoneHandle;
            //Laya.loader.load("gameconfig/tutorial_config.json", Laya.Handler.create(this, this.onLoaded), null, Laya.Loader.JSON);
            Laya.loader.load([{ url: "gameconfig/tutorial_config.json", type: Laya.Loader.JSON }], Laya.Handler.create(this, this.onLoaded));
        };
        tutorialConfigData.prototype.onLoaded = function () {
            var json = Laya.loader.getRes("gameconfig/tutorial_config.json");
            for (var i in json) {
                var configID = i;
                var cellJson = json[configID];
                if (cellJson == null) {
                    break;
                }
                var item = new gameconfig.tutorialItem(cellJson);
                this.tutorialItemList.push(item);
            }
            this.onLoadDoneHandle.run();
            this.onLoadDoneHandle.clear();
            this.onLoadDoneHandle = null;
        };
        return tutorialConfigData;
    }());
    gameconfig.tutorialConfigData = tutorialConfigData;
})(gameconfig || (gameconfig = {}));
//# sourceMappingURL=tutorialConfigData.js.map
/**
* name
*/
var gameconfig;
(function (gameconfig) {
    var shopItem = /** @class */ (function () {
        function shopItem() {
        }
        return shopItem;
    }());
    gameconfig.shopItem = shopItem;
})(gameconfig || (gameconfig = {}));
//# sourceMappingURL=shopItem.js.map
/**
* 商店配置表信息
*/
var gameconfig;
(function (gameconfig) {
    var shopConfigData = /** @class */ (function () {
        function shopConfigData() {
            this.DataArrayPage1 = new Array();
            this.DataArrayPage2 = new Array();
            this.DataArrayPage3 = new Array();
            var a = 'a';
            if (a == 'a')
                a = 'a';
        }
        shopConfigData.prototype.StartLoad = function (onLoadDoneHandle) {
            this.onLoadDoneHandle = onLoadDoneHandle;
            //Laya.loader.load("gameconfig/shop_config.json", Laya.Handler.create(this, this.onLoaded), null, Laya.Loader.JSON);
            Laya.loader.load([{ url: "gameconfig/shop_config.json", type: Laya.Loader.JSON }], Laya.Handler.create(this, this.onLoaded));
        };
        shopConfigData.prototype.GetItem = function (IDStr, page) {
            var arr = this.getDataArray(page);
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].ItemID.toString() == IDStr) {
                    return arr[i];
                }
            }
            return null;
        };
        shopConfigData.prototype.getDataArray = function (pageNum) {
            var tRet = null;
            switch (pageNum) {
                case 1:
                    tRet = this.DataArrayPage1;
                    break;
                case 2:
                    tRet = this.DataArrayPage2;
                    break;
                case 3:
                    tRet = this.DataArrayPage3;
                    break;
            }
            return tRet;
        };
        shopConfigData.prototype.GetItemConfigData = function (ItemID) {
            var tRet = this.FindData(1, ItemID);
            if (tRet == null) {
                tRet = this.FindData(2, ItemID);
            }
            if (tRet == null) {
                tRet = this.FindData(3, ItemID);
            }
            return tRet;
        };
        shopConfigData.prototype.FindData = function (pageNum, ItemID) {
            var arr = this.getDataArray(pageNum);
            for (var i = 0; i < arr.length; i++) {
                if (ItemID == arr[i].ItemID) {
                    return arr[i];
                }
            }
            return null;
        };
        shopConfigData.prototype.onLoaded = function () {
            var json = Laya.loader.getRes("gameconfig/shop_config.json");
            var startConfig = 10001;
            for (var i in json) {
                var configID = i;
                var cellJson = json[configID];
                if (cellJson == null) {
                    break;
                }
                var item = new gameconfig.shopItem();
                item.ItemID = configID;
                item.ItemIcon = cellJson["ICON"];
                item.ItemPrice = cellJson["ItemPrice"];
                item.ItemName = cellJson["ItemName"];
                item.ItemAtlas = cellJson["Atlas"];
                item.shopIcon = cellJson["shopIcon"];
                var page = cellJson["page"];
                item.page = page;
                var arr = this.getDataArray(page);
                arr.push(item);
            }
            this.onLoadDoneHandle.run();
            this.onLoadDoneHandle.clear();
            this.onLoadDoneHandle = null;
        };
        return shopConfigData;
    }());
    gameconfig.shopConfigData = shopConfigData;
})(gameconfig || (gameconfig = {}));
//# sourceMappingURL=shopConfigData.js.map
/**
* name
*/
var gameconfig;
(function (gameconfig) {
    var messageConfig = /** @class */ (function () {
        function messageConfig() {
            this.messageMap = new laya.utils.Dictionary();
            var a = 'a';
            if (a == 'a')
                a = 'a';
        }
        messageConfig.prototype.StartLoad = function (onLoadDoneHandle) {
            this.onLoadDoneHandle = onLoadDoneHandle;
            //Laya.loader.load("gameconfig/shop_config.json", Laya.Handler.create(this, this.onLoaded), null, Laya.Loader.JSON);
            Laya.loader.load([{ url: "gameconfig/message_config.json", type: Laya.Loader.JSON }], Laya.Handler.create(this, this.onLoaded));
        };
        messageConfig.prototype.GetMessage = function (messageID) {
            return this.messageMap.get(messageID.toString());
        };
        messageConfig.prototype.onLoaded = function () {
            var json = Laya.loader.getRes("gameconfig/message_config.json");
            for (var i in json) {
                var configID = i;
                var cellJson = json[configID];
                if (cellJson == null) {
                    break;
                }
                var message = cellJson["message"];
                this.messageMap.set(configID, message);
            }
            if (this.onLoadDoneHandle != null) {
                this.onLoadDoneHandle.run();
                this.onLoadDoneHandle.clear();
                this.onLoadDoneHandle = null;
            }
        };
        return messageConfig;
    }());
    gameconfig.messageConfig = messageConfig;
})(gameconfig || (gameconfig = {}));
//# sourceMappingURL=messageConfig.js.map
/*
* name;
*/
var heroStorage = /** @class */ (function () {
    function heroStorage() {
        this.mainWeapon = '空手';
        this.offHandWeapon = '副手';
        this.kongfuArray = [];
        this.propsArray = [];
        //是否是功法生成且会持续减少的护盾
        this.specialShield = 0;
        //获得幸运BUFF
        this.luckyBuffTime = 0;
    }
    Object.defineProperty(heroStorage, "Inst", {
        get: function () {
            if (!this._instance) {
                this._instance = new heroStorage();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 每次行动后执行BUFF效果
     */
    heroStorage.prototype.StateEffect = function (cardType) {
        //功法执行顺序需要排序
        var array = this.SortCheatOrder();
        for (var index = 0; index < array.length; index++) {
            this.DealStateGruop(array, index, cardType);
        }
        return true;
    };
    heroStorage.prototype.SortCheatOrder = function () {
        var newArray = this.kongfuArray.concat();
        newArray.forEach(function (element, index) {
            if (element.id == 5) {
                MathUtils.SwapItems(newArray, index, 0);
            }
        });
        newArray.forEach(function (element, index) {
            if (element.id == 3) {
                MathUtils.SwapItems(newArray, index, 0);
            }
        });
        newArray.forEach(function (element, index) {
            if (element.id == 8) {
                MathUtils.SwapItems(newArray, index, 0);
            }
        });
        newArray.forEach(function (element, index) {
            if (element.id == 2) {
                MathUtils.SwapItems(newArray, index, 0);
            }
        });
        newArray.forEach(function (element, index) {
            if (element.id == 6) {
                MathUtils.SwapItems(newArray, index, 0);
            }
        });
        return newArray;
    };
    /**
     * 处理功法效果
     */
    heroStorage.prototype.DealStateGruop = function (array, index, cardType) {
        var _this = this;
        var name = array[index].name;
        //是否可以主动开启
        if (array[index].isItv) {
        }
        else {
            switch (array[index].id) {
                case 1:
                    this.SetHandsHold(true);
                    break;
                case 2:
                    if (this.Action) {
                        return;
                    }
                    if (this.BattleValue > 0) {
                        var hp = Math.floor(this.BattleValue / 2);
                        if (hp <= 1) {
                            hp = 1;
                        }
                        BaseViewManager.Inst.sceneTable.LaunchCheatWithUI(true, { name: name, index: index, num: hp }, function () {
                            heroStorage.Inst.SetHp(hp);
                            heroStorage.Inst.SetBattleValue(0);
                        });
                    }
                    break;
                case 3:
                    if (this.Action) {
                        return;
                    }
                    if (this.Weapon != '空手' || this.OffHandWeapon != '副手') {
                        BaseViewManager.Inst.sceneTable.LaunchCheatWithUI(true, { name: name, index: index, num: 1 }, function () {
                            if (_this.Weapon != '空手' || _this.OffHandWeapon != '副手') {
                                // console.log("handsix")
                                heroStorage.Inst.SetExtraAtk(1, true);
                            }
                            else {
                                if (_this.ExtraAtk != 0) {
                                    _this.SetHp(_this.ExtraAtk);
                                }
                                _this.SetExtraAtk(0, false);
                            }
                        });
                    }
                    else {
                        if (this.ExtraAtk != 0) {
                            this.SetHp(this.ExtraAtk);
                        }
                        this.SetExtraAtk(0, false);
                    }
                    break;
                case 4:
                    if (this.Hp <= Math.ceil(this.CompleteHp * 0.2) && array[index].cd == 5) {
                        BaseViewManager.Inst.sceneTable.LaunchCheatWithUI(true, { name: name, index: index, num: 5 }, function () {
                            heroStorage.Inst.kongfuArray[index].cd = 0;
                            heroStorage.Inst.specialShield = 5;
                            heroStorage.Inst.SetShiled(5, false);
                        });
                    }
                    else if (array[index].cd < 5) {
                        array[index].cd++;
                        if (this.specialShield != 0) {
                            this.SetShiled(-1, true);
                        }
                        if (array[index].cd >= 5) {
                            array[index].cd = 5;
                            this.specialShield = 0;
                        }
                    }
                    break;
                case 5:
                    if (this.Action) {
                        return;
                    }
                    BaseViewManager.Inst.sceneTable.LaunchCheatWithUI(true, { name: name, index: index, num: 1 }, function () {
                        heroStorage.Inst.SetHp(1);
                    });
                    break;
                case 6:
                    if (cardType == PokerType.enemy) {
                        BaseViewManager.Inst.sceneTable.LaunchCheatWithUI(true, { name: name, index: index, num: -1 }, function () {
                            heroStorage.Inst.SetReduceValue(1);
                        });
                    }
                    break;
                case 7:
                    this.SetDisregard(true);
                    break;
                case 8:
                    if (this.Action) {
                        return;
                    }
                    if (this.BattleEnemyHp > 0 && cardType == PokerType.enemy) {
                        var hp = Math.floor(this.BattleEnemyHp * 0.1);
                        if (hp <= 1) {
                            hp = 1;
                        }
                        BaseViewManager.Inst.sceneTable.LaunchCheatWithUI(true, { name: name, index: index, num: hp }, function () {
                            heroStorage.Inst.SetHp(hp);
                            _this.SetBattleEnemyHp(0);
                        });
                    }
                    break;
            }
        }
    };
    Object.defineProperty(heroStorage.prototype, "Hp", {
        get: function () {
            return this.hp + this.ExtraHp;
        },
        enumerable: true,
        configurable: true
    });
    heroStorage.prototype.SetHp = function (value) {
        this.hp += value;
        if (this.hp >= this.completeHp) {
            this.hp = this.completeHp;
        }
    };
    Object.defineProperty(heroStorage.prototype, "Shiled", {
        get: function () {
            return this.shiled;
        },
        enumerable: true,
        configurable: true
    });
    heroStorage.prototype.SetShiled = function (value, isSum) {
        if (isSum) {
            this.shiled += value;
            if (value < 0) {
                this.specialShield -= value;
                if (this.specialShield <= 0) {
                    this.specialShield = 0;
                }
            }
            if (this.shiled <= 0) {
                this.shiled = 0;
            }
        }
        else {
            this.shiled = value;
        }
    };
    Object.defineProperty(heroStorage.prototype, "Atk", {
        get: function () {
            if (this.Weapon != '空手') {
                return this.atk + this.ExtraAtk;
            }
            else {
                return this.atk;
            }
        },
        enumerable: true,
        configurable: true
    });
    heroStorage.prototype.SetAtk = function (value, isSum) {
        if (isSum) {
            this.atk += value;
            if (this.atk <= 0) {
                // console.log("handfive")
                this.mainWeapon = '空手';
                this.atk = 0;
            }
        }
        else {
            this.atk = value;
        }
    };
    Object.defineProperty(heroStorage.prototype, "OtherAtk", {
        get: function () {
            if (this.OffHandWeapon != '副手') {
                return this.otherAtk + this.ExtraAtk;
            }
            else {
                return this.otherAtk;
            }
        },
        enumerable: true,
        configurable: true
    });
    heroStorage.prototype.SetOtherAtk = function (value, isSum) {
        if (isSum) {
            this.otherAtk += value;
            if (this.otherAtk <= 0) {
                this.offHandWeapon = '副手';
                this.otherAtk = 0;
            }
        }
        else {
            this.otherAtk = value;
        }
    };
    Object.defineProperty(heroStorage.prototype, "IsMain", {
        get: function () {
            return this.isMain;
        },
        enumerable: true,
        configurable: true
    });
    heroStorage.prototype.SetMain = function (bool) {
        this.isMain = bool;
    };
    Object.defineProperty(heroStorage.prototype, "Coin", {
        get: function () {
            return this.coin;
        },
        enumerable: true,
        configurable: true
    });
    heroStorage.prototype.SetCoin = function (value) {
        if (this.LuckyBuffTime > 0) {
            value *= 2;
        }
        this.coin += value;
    };
    Object.defineProperty(heroStorage.prototype, "CompleteHp", {
        get: function () {
            return this.completeHp;
        },
        enumerable: true,
        configurable: true
    });
    heroStorage.prototype.SetCompleteHp = function (value) {
        this.completeHp += value;
    };
    heroStorage.prototype.SetWeapon = function (value) {
        this.mainWeapon = value;
    };
    Object.defineProperty(heroStorage.prototype, "Weapon", {
        get: function () {
            return this.mainWeapon;
        },
        enumerable: true,
        configurable: true
    });
    heroStorage.prototype.SetOffHandWeapon = function (value) {
        this.offHandWeapon = value;
    };
    Object.defineProperty(heroStorage.prototype, "OffHandWeapon", {
        get: function () {
            return this.offHandWeapon;
        },
        enumerable: true,
        configurable: true
    });
    heroStorage.prototype.SetFloor = function () {
        this.floor += 1;
    };
    Object.defineProperty(heroStorage.prototype, "Floor", {
        get: function () {
            return this.floor;
        },
        enumerable: true,
        configurable: true
    });
    heroStorage.prototype.SetExtraHp = function (value) {
        this.extraHp += value;
    };
    Object.defineProperty(heroStorage.prototype, "ExtraHp", {
        get: function () {
            return this.extraHp;
        },
        enumerable: true,
        configurable: true
    });
    heroStorage.prototype.SetExtraAtk = function (value, isSum) {
        if (!isSum) {
            this.extraAtk = value;
        }
        else {
            this.extraAtk += value;
        }
    };
    Object.defineProperty(heroStorage.prototype, "ExtraAtk", {
        get: function () {
            return this.extraAtk;
        },
        enumerable: true,
        configurable: true
    });
    heroStorage.prototype.SetHandsHold = function (bool) {
        this.isHandsHold = bool;
    };
    Object.defineProperty(heroStorage.prototype, "IsHandsHold", {
        get: function () {
            return this.isHandsHold;
        },
        enumerable: true,
        configurable: true
    });
    heroStorage.prototype.SetDisregard = function (bool) {
        this.isDisregard = bool;
    };
    Object.defineProperty(heroStorage.prototype, "IsDisregard", {
        get: function () {
            return this.isDisregard;
        },
        enumerable: true,
        configurable: true
    });
    heroStorage.prototype.SetBattleValue = function (value) {
        this.battleValue = value;
    };
    Object.defineProperty(heroStorage.prototype, "BattleValue", {
        get: function () {
            return this.battleValue;
        },
        enumerable: true,
        configurable: true
    });
    heroStorage.prototype.SetBattleEnemyHp = function (value) {
        this.battleEnemyHp = value;
    };
    Object.defineProperty(heroStorage.prototype, "BattleEnemyHp", {
        get: function () {
            return this.battleEnemyHp;
        },
        enumerable: true,
        configurable: true
    });
    heroStorage.prototype.SetReduceValue = function (value) {
        this.reduceValue = value;
    };
    Object.defineProperty(heroStorage.prototype, "ReduceValue", {
        get: function () {
            return this.reduceValue;
        },
        enumerable: true,
        configurable: true
    });
    heroStorage.prototype.SetAction = function (bool) {
        this.action = bool;
    };
    Object.defineProperty(heroStorage.prototype, "Action", {
        get: function () {
            return this.action;
        },
        enumerable: true,
        configurable: true
    });
    heroStorage.prototype.SetLuckyBuffTime = function (isReduce, value) {
        if (isReduce) {
            this.luckyBuffTime--;
            if (this.luckyBuffTime <= 0) {
                this.luckyBuffTime = 0;
            }
        }
        else {
            this.luckyBuffTime = value;
        }
    };
    Object.defineProperty(heroStorage.prototype, "LuckyBuffTime", {
        get: function () {
            return this.luckyBuffTime;
        },
        enumerable: true,
        configurable: true
    });
    heroStorage.prototype.SetKongFuArray = function (value) {
        var _this = this;
        CardConstant.CardTreasure.forEach(function (element, index) {
            if (element.name == value) {
                _this.kongfuArray.push(element);
            }
        });
    };
    Object.defineProperty(heroStorage.prototype, "KongFuArray", {
        get: function () {
            return this.kongfuArray;
        },
        enumerable: true,
        configurable: true
    });
    heroStorage.prototype.SetPropsArray = function (value) {
        var _this = this;
        CardConstant.CardStore.forEach(function (element, index) {
            //console.log("propsArray:", element.name, value)
            if (element.name == value) {
                _this.propsArray.push(element);
            }
        });
    };
    Object.defineProperty(heroStorage.prototype, "PropsArray", {
        get: function () {
            return this.propsArray;
        },
        enumerable: true,
        configurable: true
    });
    heroStorage.prototype.initHeroStorage = function (isNext) {
        // console.log("isNext:", isNext)
        this.shiled = 0;
        this.atk = 0;
        this.otherAtk = 0;
        if (!isNext) {
            this.kongfuArray = [];
            this.propsArray = [];
            this.completeHp = 10;
            this.hp = 10;
            this.coin = 0;
        }
        else {
            this.SetHp(10);
        }
        // CardConstant.CardTreasure.forEach((element: any, index: number) => {
        //     if (index > 0) {
        // this.kongfuArray.push(CardConstant.CardTreasure[1], CardConstant.CardTreasure[3]);
        //     }
        // });
        // CardConstant.CardStore.forEach((element: any, index: number) => {
        // if (index > 0) {
        // this.propsArray.push(CardConstant.CardStore[1], CardConstant.CardStore[2], CardConstant.CardStore[2], CardConstant.CardStore[2], CardConstant.CardStore[3]);
        //     }
        // });
        this.mainWeapon = '空手';
        this.offHandWeapon = '副手';
        this.floor = 0;
        this.extraHp = 0;
        this.extraAtk = 0;
        this.isDisregard = false;
        this.isHandsHold = false;
        this.battleValue = 0;
        this.battleEnemyHp = 0;
        this.reduceValue = 0;
        this.action = false;
        this.isMain = true;
    };
    return heroStorage;
}());
//# sourceMappingURL=heroStorage.js.map
/*
* name;
*/
var gameRule = /** @class */ (function () {
    function gameRule() {
    }
    return gameRule;
}());
//# sourceMappingURL=gameRule.js.map
/*
* name;
*/
var CheatsManager = /** @class */ (function () {
    function CheatsManager() {
    }
    Object.defineProperty(CheatsManager, "Inst", {
        get: function () {
            if (!CheatsManager._instance) {
                CheatsManager._instance = new CheatsManager();
            }
            return CheatsManager._instance;
        },
        enumerable: true,
        configurable: true
    });
    CheatsManager.prototype.SetCheat = function (id) {
        switch (id) {
            case 1:
                break;
            case 2:
                break;
        }
    };
    CheatsManager._instance = null;
    return CheatsManager;
}());
var Cheat = /** @class */ (function () {
    function Cheat() {
        this.damage = 0; //伤害
        this.heal = 0; //治疗
        this.cheatType = 0; //秘籍类型
        this.states = []; //状态
    }
    Object.defineProperty(Cheat, "Inst", {
        get: function () {
            if (!Cheat._instance) {
                Cheat._instance = new Cheat();
            }
            return Cheat._instance;
        },
        enumerable: true,
        configurable: true
    });
    Cheat.prototype.CreateDamageSkill = function (id, target, damage) {
        var s = new Cheat();
        s.cheatType = CheatType.Damage;
        s.id = id;
        s.damage = damage;
        s.cheatTarget = target;
        return s;
    };
    Cheat.prototype.CreateHealSkill = function (id, target, heal) {
        var s = new Cheat();
        s.cheatType = CheatType.Heal;
        s.id = id;
        s.damage = heal;
        s.cheatTarget = target;
        return s;
    };
    Cheat.prototype.CreateAddStateSkill = function (id, target, states) {
        var s = new Cheat();
        s.cheatType = CheatType.AddState;
        s.id = id;
        s.states = states;
        s.cheatTarget = target;
        return s;
    };
    Object.defineProperty(Cheat.prototype, "Id", {
        get: function () {
            return this.id;
        },
        enumerable: true,
        configurable: true
    });
    Cheat.prototype.SetDamage = function (value) {
        this.damage = value;
    };
    Cheat.prototype.SetHeal = function (value) {
        this.heal = value;
    };
    Object.defineProperty(Cheat.prototype, "CheatType", {
        get: function () {
            return this.cheatType;
        },
        enumerable: true,
        configurable: true
    });
    Cheat.prototype.SetCheatType = function (value) {
        this.cheatType = value;
    };
    Object.defineProperty(Cheat.prototype, "CheatTarget", {
        get: function () {
            return this.cheatTarget;
        },
        enumerable: true,
        configurable: true
    });
    Cheat.prototype.SetCheatTarget = function (value) {
        this.cheatTarget = value;
    };
    Object.defineProperty(Cheat.prototype, "States", {
        get: function () {
            return this.states;
        },
        enumerable: true,
        configurable: true
    });
    Cheat.prototype.SetStates = function (value) {
        this.states = value;
    };
    Cheat._instance = null;
    return Cheat;
}());
var State = /** @class */ (function () {
    function State(type, time) {
        this.type = type;
        this.time = time;
        this.TypeofEffect();
    }
    State.prototype.Copy = function () {
        return new State(this.type, this.time);
    };
    State.prototype.TypeofEffect = function () {
        switch (this.type) {
            case StateType.HandsHold:
                break;
            case StateType.Disregard:
                break;
        }
    };
    return State;
}());
var CheatType;
(function (CheatType) {
    CheatType[CheatType["Damage"] = 1] = "Damage";
    CheatType[CheatType["Heal"] = 2] = "Heal";
    CheatType[CheatType["AddState"] = 3] = "AddState";
})(CheatType || (CheatType = {}));
var CheatTarget;
(function (CheatTarget) {
    CheatTarget[CheatTarget["Enemy"] = 1] = "Enemy";
    CheatTarget[CheatTarget["Self"] = 2] = "Self";
})(CheatTarget || (CheatTarget = {}));
var StateType;
(function (StateType) {
    //双持武器
    StateType[StateType["HandsHold"] = 1] = "HandsHold";
    //无视上层攻击
    StateType[StateType["Disregard"] = 2] = "Disregard";
})(StateType || (StateType = {}));
//# sourceMappingURL=CheatsManager.js.map
/*
* name;
*/
var BaseViewManager = /** @class */ (function () {
    function BaseViewManager() {
        this.scenes = [];
    }
    Object.defineProperty(BaseViewManager, "Inst", {
        get: function () {
            if (!this._instance) {
                this._instance = new BaseViewManager();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    BaseViewManager.prototype.onSceneHide = function () {
        this.scenes.forEach(function (scene) {
            if (scene)
                scene.onShow(false);
        });
    };
    BaseViewManager.prototype.onSceneStore = function () {
        // this.onSceneHide();
        if (!this.sceneStore) {
            this.sceneStore = new gameStoreView();
            Laya.stage.addChild(this.sceneStore);
            this.sceneStore.zOrder = 101;
            this.scenes.push(this.sceneStore);
        }
        this.sceneStore.onShow(true);
    };
    BaseViewManager.prototype.onSceneTable = function () {
        this.onSceneHide();
        if (!this.sceneTable) {
            this.sceneTable = new gameTableView();
            Laya.stage.addChild(this.sceneTable);
            this.sceneTable.zOrder = 0;
            this.scenes.push(this.sceneTable);
        }
        this.sceneTable.onShow(true);
    };
    BaseViewManager.prototype.onSceneIndex = function () {
        if (!this.sceneIndex) {
            this.sceneIndex = new gameIndexView();
            Laya.stage.addChild(this.sceneIndex);
            this.sceneIndex.zOrder = 101;
            this.scenes.push(this.sceneIndex);
        }
        this.sceneIndex.onShow(true);
    };
    return BaseViewManager;
}());
//# sourceMappingURL=BaseViewManager.js.map
//# sourceMappingURL=wzjs.js.map
/* 接口类 */
var HttpRequest = Laya.HttpRequest;
var Events = Laya.Event;
var wxMinPro = /** @class */ (function () {
    /* 构造函数 */
    function wxMinPro() {
        // 服务接口配置
        this.mCmd = {
            "Launch": "1.0.1/jl/Lauch?",
            "querycards": "1.0.1/jl/querycards?",
            "rank": "1.0.1/jl/rank?",
            "mymark": "1.0.1/jl/mymark?",
            "AddMyCard": "1.0.1/jl/AddMyCard?",
            "AddCard": "1.0.1/jl/addcard?",
            "report": "1.0.1/jl/report?",
            "ADHit": "1.0.1/jl/data?",
            "BtnTotle": "1.0.1/jl/BtnTotle?",
            "challenge": "1.0.1/jl/challenge?",
            "ad": "1.0.1/jl/ad?",
            "SetUserValue": "1.0.1/jl/SetUserValue?",
            "GetStages": "1.0.1/jl/getstage?",
            "BuyItem": "1.0.1/jl/BuyItem?",
            "UseItem": "1.0.1/jl/UseItem?",
            "ChangeTCt": "1.0.1/jl/ChangeTCt?",
            "Coins": "1.0.1/jl/Coins?",
        };
        this.statUrl = ''; //统计url
        this.isFirstLogin = true; // 是否是第一次登录服务器 wx.onshow时也会登录服务器，只是更新下数据。
        this.mUID = 0; // 玩家的id
        this.mOpenid = "";
        this.mVersion = 1020; // 每次审核之前这个值+1
        this.mCards = 0; // 复活卡数量
        this.mMyRank = 0;
        this.fhOnoff = 0; // 复活开关 0-关 1-开
        this.mHttpCall = null;
        this.mrelayID = 0; // 当前接力的id
        this.mShareID = 0; // 当前分享的id
        this.mChallenge = null; // 保存好友接力的数据
        this.mMarks = [0, 0, 0, 0]; // mMarks[0]最佳记录
        this.videoAd = null; // 视频广告
        this.adBanner = null; // banner广告
        this.gameClub = null; // 微信游戏圈按钮
        this.shareUrl = []; // 分享点位信息
        this.wxADUrl = []; // 保存广告信息
        this.OnOff = []; // 各种开关信息数组
        this.games_box = [];
        this.gameObj = null; // 首页、结果页展示的更多小游戏
        // 外部流量导入 增加参数
        this.mReturnAppid = "";
        this.mReturnUrl = "";
        // 默认广告相关
        this.mCustomBannerAdList = [];
        this.mIsInvokeRemoveCustomBannerAd = false; // 是否调用隐藏banner
        this.mCustomBanner = null; // 默认banner
        // 暂时无用的变量
        this.mADKeep = 0;
        this.mUser = {};
        this.mQR = 0;
        this.mQRs = {};
        this.passTheLevelNum = 10;
        this.isPassTheLevelType = 1;
        this.isAbTest = 0;
        this.first_entry_time = null;
        this.last_entry_time = null;
        this.mWxMenuButtonRect = null;
        //体力恢复
        this.xs = 0;
        this.a = 0;
        this.b = 0;
        this.hour = '00'; //时  
        this.minus = '00'; //分  
        this.seconds = '00'; //秒
        var a = 'a';
        if (a == 'a')
            a = 'a';
    }
    /* 获取adid */
    wxMinPro.prototype.getADID = function () {
        var adid = 0;
        if (typeof (wxCore.uo.launch["query"]) != "undefined" && typeof (wxCore.uo.launch["query"]["adid"]) != "undefined") {
            adid = Number(wxCore.uo.launch["query"]["adid"]);
        }
        if (typeof (wxCore.uo.launch["query"]) != "undefined" && typeof (wxCore.uo.launch["query"]["channel"]) != "undefined") {
            adid = Number(wxCore.uo.launch["query"]["channel"]);
        }
        return adid;
    };
    /**
     * GetStages 获取关卡信息
     * passNum-关卡数
     */
    wxMinPro.prototype.GetStages = function (passNum, cb) {
        if (passNum === void 0) { passNum = 0; }
        if (cb === void 0) { cb = null; }
        var _this = this;
        function onResult(e) {
            var ret = null;
            if (typeof (e) == "string")
                ret = util.getJSON(e);
            else
                ret = e;
            if (ret['code'] == 0) {
                if (!!ret["stages"].length) {
                    GameMain.app.levelnum = ret["stages"].length;
                    GameMain.app.alllevelconf = {};
                    for (var index = 0; index < GameMain.app.levelnum; index++) {
                        GameMain.app.levelconf = [];
                        GameMain.app.alllevelconf[index] = { id: index, level: [] };
                        var screen = ret["stages"][index]["screen"];
                        var snList;
                        if (screen.indexOf('col') > 0 && screen.indexOf('row') > 0) {
                            snList = screen.replace(/\n/g, '').replace(/\r/g, '').replace(/\s/g, '').split('{');
                            for (var _i = 0, snList_1 = snList; _i < snList_1.length; _i++) {
                                var level = snList_1[_i];
                                if (level.length > 5) {
                                    var xxx = '{' + level.replace(/\//g, ',').replace('},', '}');
                                    if (xxx[xxx.length - 1] === ']') {
                                        xxx = xxx.slice(0, xxx.length - 1);
                                    }
                                    GameMain.app.levelconf.push(JSON.parse(xxx));
                                }
                            }
                        }
                        else {
                            snList = screen.split('{');
                            for (var _a = 0, snList_2 = snList; _a < snList_2.length; _a++) {
                                var level = snList_2[_a];
                                if (level.length > 5) {
                                    GameMain.app.levelconf.push(JSON.parse('{' + level.replace(/\//g, ',').replace('},', '}').replace(']', '')));
                                }
                            }
                        }
                        GameMain.app.alllevelconf[index].level = GameMain.app.levelconf;
                    }
                    // ////console.log('leveldetail:', GameMain.app.alllevelconf);
                }
                else {
                    GameMain.app.levelnum = 0;
                }
            }
        }
        ////console.log("uo/GetStages");
        var params = [];
        // params['page'] = Math.ceil(passNum / 10);
        params['uid'] = this.mUID;
        this.server(params, "GetStages", new Laya.Handler(this, onResult));
    };
    /* 登录服务器 */
    wxMinPro.prototype.onLaunch = function (agentid, secen) {
        if (agentid === void 0) { agentid = 0; }
        if (secen === void 0) { secen = 0; }
        ////console.log("登录服务器...");
        if (this.isFirstLogin) {
            // this.showLoading();
        }
        var params = [];
        params["uid"] = wxCore.uo.getUserID();
        params["ver"] = this.mVersion;
        params["agentid"] = agentid;
        params["secen"] = secen;
        params["platform"] = Laya.Browser.onIOS ? 2 : 1;
        params["adid"] = this.getADID();
        // surl-记录分享链接的点击量
        if (typeof (wxCore.uo.mLaunch["query"]["surl"]) != "undefined") {
            params["surl"] = Number(wxCore.uo.mLaunch["query"]["surl"]);
        }
        if (typeof (wxCore.uo.mLaunch['query']['uid']) != "undefined") {
            params['seuid'] = wxCore.uo.mLaunch['query']['uid'];
        }
        this.server(params, "Launch", new Laya.Handler(this, this.onLaunchSuccess));
        //console.log('myUid:', wxCore.uo.getUserID());
    };
    /* 统计首页下方和侧边栏游戏的点击量 */
    wxMinPro.prototype.reportGameHit = function (pos, gameid) {
        var params = [];
        params["uid"] = GameMain.app.mWX.mUID;
        params["pos"] = pos;
        params["gameid"] = gameid;
        GameMain.app.mWX.server(params, "BtnTotle", null);
    };
    wxMinPro.prototype.setUserValue = function (key, value) {
        var _this = this;
        function onResult(ret) {
            if (ret['code'] == 0) {
                ////console.log("道具设置成功");
            }
        }
        var params = [];
        params['uid'] = this.mUID;
        params['dt_key'] = key;
        params['dt_value'] = value;
        GameMain.app.mWX.server(params, "SetUserValue", new Laya.Handler(this, onResult));
    };
    wxMinPro.prototype.PassLevelProp = function (list) {
        if (this.fhOnoff != 0) {
            for (var i = 0; i < list.length; i++) {
                if (list[i]["id"] == 3001) {
                    this.passTheLevelNum = Number(JSON.parse(list[i]["other"])['num']);
                    this.isPassTheLevelType = Number(JSON.parse(list[i]["gamebox"]));
                }
            }
        }
    };
    wxMinPro.prototype.GetShopArray = function (list) {
        for (var i = 0; i < list.length; i++) {
            if (Number(list[i]["id"]) >= 4001 && Number(list[i]["id"]) < 6000) {
                ShopSetting.shopListArray.push(list[i]);
            }
        }
    };
    wxMinPro.prototype.GetPower = function (list) {
        for (var i = 0; i < list.length; i++) {
            if (list[i]["key"] == 'of_physical') {
                ShopSetting.nowPowerMax = JSON.parse(list[i]["param"])['max'];
                ShopSetting.nowPowerConsume = JSON.parse(list[i]["param"])['use'];
                ShopSetting.powerStyle = JSON.parse(list[i]["param"])['way'];
                ShopSetting.powerRecoverTime = Number(JSON.parse(list[i]["param"])['revocer']);
            }
        }
    };
    wxMinPro.prototype.IsABTest = function (list) {
        for (var i = 0; i < list.length; i++) {
            if (list[i]["key"] == 'of_ab_test') {
                this.isAbTest = list[i]["value"];
                ////console.log('isABtEST', this.isAbTest);
            }
        }
    };
    /* 登录服务器成功 */
    wxMinPro.prototype.onLaunchSuccess = function (ret) {
        var _this_1 = this;
        ////console.log("登录服务器成功：", ret);
        // 组装数据
        if (Number(ret["code"]) == 0) {
            Laya.Browser.window.sharedCanvas.width = Laya.stage.width;
            Laya.Browser.window.sharedCanvas.height = Laya.stage.height;
            this.fhOnoff = Number(ret["fh_onoff"]); // 复活开关
            // 1
            //  
            GameMain.app.mWX.OnOff = ret["on_off"]; // 各种开关信息
            if (ret['nowday'] == ret['regday']) {
                GameMain.app.mWX.PointFirst = '新用户';
            }
            else {
                GameMain.app.mWX.PointFirst = '老用户';
            }
            // GameMain.app.mWX.moveTime = Number(JSON.parse(GameMain.app.mWX.getParam('of_move_time'))["time"])
            // GameMain.app.mWX.changeIconTime = JSON.parse(GameMain.app.mWX.getParam('of_icon_time'))["time"]      //猜你喜欢数量
            // GameMain.app.mWX.gameListNum = JSON.parse(GameMain.app.mWX.getParam('of_guess_like'))["number"]      //猜你喜欢数量
            // GameMain.app.mWX.showBigBanner = JSON.parse(GameMain.app.mWX.getParam('of_banner_show'))["is_big"]      //猜你喜欢数量            
            // GameMain.app.mWX.ofStartList = GameMain.app.mWX.getValue('of_guess_like1')             //首页猜你喜欢开关
            // // GameMain.app.mWX.ofRewardList = GameMain.app.mWX.getValue('of_guess_like2')             //宝箱猜你喜欢开关
            // GameMain.app.mWX.ofScoreList = GameMain.app.mWX.getValue('of_guess_like2')               //分数猜你喜欢开关
            // GameMain.app.mWX.ofResultList = GameMain.app.mWX.getValue('of_guess_like3')             //结算页猜你喜欢开关   
            // GameMain.app.mWX.iconBtn = GameMain.app.mWX.getValue('of_icon_open')             //首页导流开关    
            // GameMain.app.mWX.jumpBtn = GameMain.app.mWX.getValue('of_jump_btn')             //首页平台按钮开关    
            // GameMain.app.mWX.statUrl = ret["dt_values"][0]['param'];
            // GameMain.app.mWX.games_box = ret["games_box"];
            this.shareUrl = ret["shareurl"]; // 分享点位
            this.wxADUrl = ret["wxadurl"]; // 广告信息
            GameMain.app.mWX.checkShareTime();
            // 成绩数组
            this.mMarks[0] = Number(ret['marks']['mark']);
            this.mMarks[1] = Number(ret['marks']['mark1']);
            this.mMarks[2] = Number(ret['marks']['mark2']);
            this.mMarks[3] = Number(ret['marks']['mark3']);
            // 保存默认广告
            this.mCustomBannerAdList = ret["games_ad"];
            wxCore.uo.mSessionLogin = new Date().getTime();
            if (ret['nowday'] == ret['regday']) {
                wxCore.uo.newbie = 1;
            }
            else {
                wxCore.uo.newbie = 0;
            }
            wxCore.uo.maidian_log_url = util.getArrayValueParam(ret['dt_values'], "dt_log_url");
            this.mGamesBox = ret['games_box'];
            // this.dealData(ret['user_data']);
            ////console.log('xczczxczxc', GameMain.app.cutlevel, GameMain.app.fakerlevelnum);
            // 是否是第一次登录服务器
            if (this.isFirstLogin) {
                ////console.log("第一次登录服务器");
                this.isFirstLogin = false;
                this.GetShopArray(ret['item_list']);
                this.GetStages();
                this.PassLevelProp(ret['item_list']);
                this.IsABTest(ret['on_off']);
                //test
                // GameMain.app.mWX.recordingCoins(1000);
                //获取金币和体力
                this.GetPower(ret['on_off']);
                ShopSetting.nowcoin = ret['coins'];
                ret['user_data'].forEach(function (item) {
                    // ////console.log('ussss', ret['user_data'][0]);
                    if (item.key == 'current_game_level') {
                        GameMain.app.cutlevel = Number(item.values);
                    }
                    if (item.key == 'faker_game_level') {
                        GameMain.app.fakerlevelnum = Number(item.values);
                    }
                    if (item.key == 'now_use_bg') {
                        ShopSetting.nowUseBg = Number(item.values);
                        Laya.loader.load([{ url: util.getCDN() + "res1/background/bg" + ("" + ShopSetting.nowUseBg) + ".png", type: Laya.Loader.IMAGE }], new Laya.Handler(_this_1, function () {
                            GameMain.app.isServer4 = true;
                            //console.log('GameMain.app.isServer4---ok');
                        }));
                    }
                    if (item.key == 'now_use_card_back') {
                        ShopSetting.nowCardBack = Number(item.values);
                    }
                    if (item.key == 'now_physical_power') {
                        ////console.log('okCount-2', Number(item.values));
                        ShopSetting.nowPpower = Number(item.values);
                    }
                    if (item.key == 'resume_physical_power_time') {
                        ShopSetting.powerConsumeTime = Number(item.values);
                    }
                });
                if (!GameMain.app.cutlevel) {
                    GameMain.app.cutlevel = 0;
                    GameMain.app.mWX.setUserValue('current_game_level', GameMain.app.cutlevel + '');
                }
                if (!GameMain.app.fakerlevelnum) {
                    GameMain.app.fakerlevelnum = 0;
                    GameMain.app.mWX.setUserValue('faker_game_level', GameMain.app.fakerlevelnum + '');
                }
                if (!ShopSetting.nowUseBg) {
                    ShopSetting.nowUseBg = 1;
                    Laya.loader.load([{ url: util.getCDN() + "res1/background/bg" + ("" + ShopSetting.nowUseBg) + ".png", type: Laya.Loader.IMAGE }], new Laya.Handler(this, function () {
                        GameMain.app.isServer4 = true;
                        //console.log('GameMain.app.isServer4---ok');
                    }));
                    GameMain.app.mWX.setUserValue('now_use_bg', ShopSetting.nowUseBg + '');
                }
                if (!ShopSetting.nowCardBack) {
                    ShopSetting.nowCardBack = 5001;
                    GameMain.app.mWX.setUserValue('now_use_card_back', ShopSetting.nowCardBack + '');
                }
                if (ShopSetting.nowPpower == null && ShopSetting.nowPpower != 0) {
                    ////console.log('okCount-3', ShopSetting.nowPowerMax);
                    ShopSetting.nowPpower = ShopSetting.nowPowerMax;
                    GameMain.app.mWX.setUserValue('now_physical_power', ShopSetting.nowPpower + '');
                }
                if (ShopSetting.powerConsumeTime == null && ShopSetting.powerConsumeTime != 0) {
                    ShopSetting.powerConsumeTime = ret['nowday'];
                    GameMain.app.mWX.setUserValue('resume_physical_power_time', ShopSetting.powerConsumeTime + '');
                }
                var n_d = Math.floor(new Date().getTime() / 1000);
                ////console.log('nowday', n_d, ShopSetting.powerConsumeTime, ((n_d - ShopSetting.powerConsumeTime) / 60), ShopSetting.nowPowerMax, (ShopSetting.nowPowerMax - ShopSetting.nowPpower), (ShopSetting.nowPowerMax - ShopSetting.nowPpower) * ShopSetting.powerConsumeTime);
                if (((n_d - ShopSetting.powerConsumeTime) / 60) >= (ShopSetting.nowPowerMax - ShopSetting.nowPpower) * ShopSetting.powerRecoverTime) {
                    ////console.log('okCount-1', ShopSetting.nowPpower, ShopSetting.nowPowerMax);
                    ShopSetting.nowPpower = ShopSetting.nowPowerMax;
                    GameMain.app.mWX.setUserValue('now_physical_power', ShopSetting.nowPpower + '');
                }
                else {
                    var okCount = Math.floor(((n_d - ShopSetting.powerConsumeTime) / 60) / ShopSetting.powerRecoverTime);
                    ShopSetting.nowPpower += okCount;
                    if (ShopSetting.nowPpower >= ShopSetting.nowPowerMax) {
                        ShopSetting.nowPpower = ShopSetting.nowPowerMax;
                    }
                    GameMain.app.mWX.setUserValue('now_physical_power', ShopSetting.nowPpower + '');
                    var consumeTime = ((ShopSetting.nowPowerMax - ShopSetting.nowPpower) * ShopSetting.powerRecoverTime * 60) - (n_d - ShopSetting.powerConsumeTime);
                    ////console.log('okCount0', consumeTime)
                    if (consumeTime >= 3600) {
                        this.b = Math.floor(consumeTime / 3600);
                        this.a = Math.floor((consumeTime - this.b * 3600) / 60);
                        this.xs = consumeTime - this.b * 3600 - this.a * 60;
                        ////console.log('okCount1', consumeTime, okCount, this.b, this.a, this.xs);
                    }
                    else if (consumeTime < 3600 && consumeTime >= 60) {
                        this.b = 0;
                        this.a = Math.floor(consumeTime / 60);
                        this.xs = consumeTime - this.a * 60;
                        ////console.log('okCount2', consumeTime, okCount, this.b, this.a, this.xs);
                    }
                    else if (consumeTime < 60 && consumeTime >= 0) {
                        this.a = 0;
                        this.b = 0;
                        this.xs = consumeTime;
                        ////console.log('okCount3', consumeTime, okCount, this.b, this.a, this.xs);
                    }
                    this.startCutDown();
                }
                GameMain.app.mingpainum = 1;
                // GameMain.app.ismingpai = false;
                if (wxCore.uo.newbie == 1) {
                    this.first_entry_time = new Date().getTime();
                    GameMain.app.mWX.setUserValue('first_entry_time', this.first_entry_time + '');
                }
                else {
                    ret['user_data'].forEach(function (item) {
                        if (item.key == 'first_entry_time') {
                            _this_1.first_entry_time = item.values;
                        }
                        if (item.key == 'last_entry_time') {
                            _this_1.last_entry_time = item.values;
                        }
                    });
                    if (!this.first_entry_time) {
                        this.first_entry_time = new Date().getTime();
                        GameMain.app.mWX.setUserValue('first_entry_time', this.first_entry_time + '');
                    }
                }
                wxCore.uo.commitTotle("app_entry", { "create_time": "", "uid": "", "session_id": "", "is_new": "", "device_os_version": wxCore.uo.mPhone['system'], "device_type": wxCore.uo.mPhone['model'], "wechat_version": wxCore.uo.mPhone['version'], "first_entry_time": ret['regday'], "last_entry_time": this.last_entry_time });
                this.last_entry_time = Math.floor(new Date().getTime() / 1000);
                GameMain.app.mWX.setUserValue('last_entry_time', this.last_entry_time + '');
                GameMain.app.isServer3 = true;
                //console.log('GameMain.app.isServer3---ok');
                // 显示游戏首页
                GameMain.app.begin();
                // 显示首页的更多游戏
                // this.initMoreGame(GameMain.app.startView.moreGame, true);
                // 初始化视频广告
                // wxCore.uo.initVideoAD("adunit-70a9427baa48c548");
            }
            // 获取小程序返回的appid
            this.initReturn();
            // 检查是否是通过点击链接进入游戏的
            this.checkLink();
        }
        else {
            Laya.timer.once(1000, this, this.onLaunch);
        }
        // wx.hideLoading({});
    };
    wxMinPro.prototype.dealData = function (list) {
        for (var i = 0; i <= list.length - 1; i++) {
            if (list[i]['key'] == 'SaveStartCardList') {
                GameMain.app.getValues = list[i]['values'];
            }
            if (list[i]['key'] == 'PokerLineGroup') {
                GameMain.app.getLineValues = list[i]['values'];
            }
        }
    };
    /* 获取param */
    wxMinPro.prototype.getParam = function (key) {
        for (var i = 0; i < GameMain.app.mWX.OnOff.length; i++) {
            var obj = GameMain.app.mWX.OnOff[i];
            if (obj["key"] == key) {
                return obj["param"];
            }
        }
    };
    /* 获取value */
    wxMinPro.prototype.getValue = function (key) {
        for (var i = 0; i < GameMain.app.mWX.OnOff.length; i++) {
            var obj = GameMain.app.mWX.OnOff[i];
            if (obj["key"] == key) {
                return Number(obj["value"]);
            }
        }
    };
    /* 相应开关赋值 */
    wxMinPro.prototype.checkOnOff = function (key) {
        // 总开关如果是关着的，直接 return false
        if (GameMain.app.mWX.fhOnoff == 0) {
            return 0;
        }
        // 总开关打开的情况下再判断相应的开关
        var onoff = 0;
        for (var i = 0; i < GameMain.app.mWX.OnOff.length; i++) {
            var obj = GameMain.app.mWX.OnOff[i];
            if (key == obj["key"]) {
                onoff = Number(obj["value"]);
            }
        }
        return onoff;
    };
    /* 处理分享时间 */
    wxMinPro.prototype.checkShareTime = function () {
        ////console.log("===", GameMain.app.mWX.OnOff.length);
        for (var i = 0; i < GameMain.app.mWX.OnOff.length; i++) {
            var obj = GameMain.app.mWX.OnOff[i];
            if (obj["key"] == "of_share_time") {
                if (Number(obj["value"]) == 1) {
                    var param = String(obj["param"]);
                    ////console.log("*********** = ", param);
                    ////console.log("*********** = ", param.split(","));
                    GameMain.app.mShareTimeArray = param.split(",");
                    break;
                }
            }
        }
    };
    /* 检查是否是通过点击链接进入的游戏 */
    wxMinPro.prototype.checkLink = function () {
        // 点击道具礼包链接进入游戏 wxCore.uo.mLaunch["query"]["id"] > 0 :自己领卡 = 0:给别人加卡
        if (typeof (wxCore.uo.mLaunch["query"]["gift"]) != "undefined") {
            if (wxCore.uo.mLaunch["query"]["id"] > 0) {
                // this.addCardForMe(wxCore.uo.mLaunch["query"]["id"]);
            }
            else {
                GameMain.app.mWX.dealCards(wxCore.uo.mLaunch["shareTicket"]);
            }
        }
        // 点击群排名链接进入游戏
        if (wxCore.uo.mLaunch["query"]["id"] != null && Number(wxCore.uo.mLaunch["query"]["type"]) == 8) {
            // if (typeof (wxCore.uo.mLaunch["shareTicket"]) != "undefined" && wxCore.uo.mLaunch["shareTicket"] != "undefined" && wxCore.uo.mLaunch["shareTicket"] != "") {
            //     this.afterClickLink();
            //     GameMain.app.startView.queryGroupRank();
            // }
        }
        // // 点击接力链接进入游戏
        // if (wxCore.uo.mLaunch["query"]["id"] > 0 && Number(wxCore.uo.mLaunch["query"]["type"]) == 2) {
        //     this.afterClickLink();
        //     // 记录要接力那局游戏id
        //     this.mrelayID = wxCore.uo.mLaunch["query"]["id"];
        //     this.showRelay(false);
        // }
        // 判断进入游戏的场景（是否是从我的小程序进入的）
        if (wxCore.uo.mLaunch["scene"] == 1104) {
            // if (GameMain.app.getLocalInfo("isShowToMy") != "1") {
            //     GameMain.app.setLocalInfo("isShowToMy", "1");
            // }
        }
    };
    // /* 点击道具礼包，群排行，接力等链接进入游戏的操作 */
    // public afterClickLink(): void {
    //     GameMain.app.mPlayed = 0;
    //     GameMain.app.rebirth_video = 0;
    //     // 如果在游戏中，清除游戏。
    //     if (GameMain.app.gameView && GameMain.app.gameView.visible == true) {
    //         GameMain.app.gameClear();
    //     }
    //     // 隐藏接力界面
    //     if (GameMain.app.relayView && GameMain.app.relayView.visible == true) {
    //         GameMain.app.relayView.visible = false;
    //     }
    //     // 隐藏排行榜界面
    //     if (GameMain.app.rankView && GameMain.app.rankView.visible == true) {
    //         GameMain.app.rankView.visible = false;
    //         GameMain.app.rankView.removeOffScreen();
    //     }
    //     // 隐藏分数界面
    //     if (GameMain.app.scoreView && GameMain.app.scoreView.visible == true) {
    //         GameMain.app.scoreView.close("", false);
    //     }
    //     // 隐藏结果界面
    //     if (GameMain.app.resultView) {
    //         GameMain.app.resultView.visible = false;
    //         GameMain.app.resultView.removeOffScreen();
    //     }
    //     // 隐藏道具界面
    //     if (GameMain.app.propView && GameMain.app.propView.visible == true) {
    //         GameMain.app.propView.close();
    //     }
    //     // 隐藏互助礼界面
    //     if (GameMain.app.giftView && GameMain.app.giftView.visible == true) {
    //         GameMain.app.giftView.closeGift();
    //     }
    //     // 隐藏引导页
    //     if (GameMain.app.guideView && GameMain.app.guideView.visible == true) {
    //         GameMain.app.guideView.closeGuideView();
    //     }
    //     // 如果正在显示游戏盒子，要隐藏游戏盒子。
    //     MoreGame.CloseList();
    //     // 如果正在显示广告，隐藏广告。
    //     this.hideADBanner();
    // }
    /* 获取最新复活卡数量 */
    wxMinPro.prototype.getCardNumber = function (callback) {
        var params = [];
        params["uid"] = wxCore.uo.getUserID();
        this.server(params, "querycards", new Laya.Handler(this, onResult));
        // 请求成功的回调
        function onResult(ret) {
            ////console.log("获取复活卡数量成功：", ret);
            if (ret["code"] == 0) {
                GameMain.app.mWX.mCards = Number(ret["cards"]);
                if (callback)
                    callback.run();
            }
        }
    };
    /* 汇报成绩 continue = 1：表示使用复活卡 */
    wxMinPro.prototype.reportMark = function (mark) {
        var _this = this;
        function onResult(e) {
            wx.hideLoading({});
            var ret = null;
            if (typeof (e) == "string")
                ret = util.getJSON(e);
            else
                ret = e;
            if (ret['code'] == 0) {
            }
        }
        wx.postMessage({
            type: "send", mark9: mark, level: GameMain.app.mMapLevel, best: GameMain.app.mWX.mMarks[GameMain.app.mMapLevel], user: GameMain.app.mWX.mUser
        });
        //console.log(this.mCmd["report"]);
        var params = [];
        params['mark'] = mark;
        params['uid'] = this.mUID;
        params['id'] = this.mrelayID;
        //console.log(params);
        if (GameMain.app.mUseCards == true)
            params['continue'] = 1;
        else
            params['continue'] = 0;
        //闯关地图
        params['level'] = GameMain.app.mMapLevel;
        //分享次数
        params['shares'] = GameMain.app.mShares;
        GameMain.app.mWX.server(params, "report", new Laya.Handler(this, onResult));
    };
    /* 获取我的最佳成绩 */
    wxMinPro.prototype.getMyMark = function () {
        var params = [];
        params["uid"] = wxCore.uo.getUserID();
        this.server(params, "mymark", new Laya.Handler(this, onResult));
        // 获取我的成绩的回调
        function onResult(ret) {
            ////console.log("获取我的最好成绩：", ret);
            if (ret["code"] == 0) {
                GameMain.app.mWX.mMarks[0] = Number(ret["mark"]["mark"]);
                wx.postMessage({
                    type: "send", mark9: GameMain.app.mWX.mMarks[0], level: GameMain.app.mMapLevel, best: GameMain.app.mWX.mMarks[GameMain.app.mMapLevel], user: wxCore.uo.mWeUser
                });
            }
        }
    };
    /* 获取世界排行榜数据 */
    wxMinPro.prototype.showWorldRank = function (page) {
        if (page === void 0) { page = 0; }
        var params = [];
        params["uid"] = wxCore.uo.getUserID();
        params["page"] = page;
        this.server(params, "rank", new Laya.Handler(this, onResult));
        this.showLoading();
        // 获取世界排行榜数据成功的回调
        var _this = this;
        function onResult(ret) {
            ////console.log("获取世界排行榜数据成功：", ret);
            if (ret["code"] == 0) {
                var mrank = Number(ret["rank"]);
                if (mrank > 0 && _this.mMarks[0] > 0) {
                    _this.mMyRank = mrank;
                }
                var mData = GameMain.app.wRankData;
                var rData = ret["data"];
                for (var i = 0; i < rData.length; i++) {
                    var obj = {};
                    obj["name"] = GameMain.app.subname(Base64.decode(rData[i]["name"]), 12);
                    var face = Base64.decode(rData[i]["avatar"]);
                    if (face.charAt(face.length - 1) == "0" && face.charAt(face.length - 2) == "/") {
                        face = face.substr(0, face.length - 2);
                        face = face + "/132";
                    }
                    obj["avatar"] = face;
                    obj["mark"] = Math.floor(rData[i]["hismark"]);
                    obj["city"] = rData[i]["city"];
                    obj["uid"] = rData[i]["uid"];
                    obj["map1"] = Math.floor(rData[i]["mark1"]);
                    obj["map2"] = Math.floor(rData[i]["mark2"]);
                    obj["map3"] = Math.floor(rData[i]["mark3"]);
                    var mLevel = GameMain.app.mLevel;
                    var mLevelName = GameMain.app.mLevelName;
                    var level = mLevel.length;
                    for (var m = 0; m < mLevel.length; m++) {
                        if (obj["mark"] < mLevel[m]) {
                            level = m + 1;
                            break;
                        }
                    }
                    obj["level"] = mLevelName[level - 1];
                    mData.push(obj);
                }
                for (var i = 0; i < mData.length; i++) {
                    mData[i]["rank"] = i + 1;
                    // 保存我的排行
                    if (wxCore.uo.getUserID() == Number(mData[i]["uid"])) {
                        _this.mMyRank = i + 1;
                    }
                }
                if (_this.mMyRank == 0) {
                    var mRank = Number(ret["rank"]);
                    if (mRank > 0 && _this.mMarks[0] > 0) {
                        _this.mMyRank = mRank;
                    }
                }
                if (rData.length > 0) {
                    GameMain.app.rankView.showWorldRank(mData);
                }
            }
            wx.hideLoading({});
        }
    };
    /* 获取好友接力列表信息 */
    wxMinPro.prototype.showRelay = function (show) {
        if (show)
            this.showLoading();
        var params = [];
        params["uid"] = wxCore.uo.getUserID();
        params["id"] = this.mrelayID;
        this.server(params, "challenge", new Laya.Handler(this, onResult));
        // 好友接力数据请求成功
        var _this = this;
        function onResult(ret) {
            ////console.log("好好友接力数据：", ret);
            if (show)
                wx.hideLoading({});
            if (ret["code"] == 0) {
                GameMain.app.mWX.mChallenge = ret;
                var master = {
                    name: GameMain.app.subname(Base64.decode(ret["master"]["name"]), 12),
                    friend_base: ret["master"]["friend_base"],
                    mark: ret["master"]["mark"],
                    uid: ret["master"]["uid"],
                    id: ret["master"]["id"],
                };
                var face1 = Base64.decode(ret["master"]["avatar"]);
                if (face1.charAt(face1.length - 1) == "0" && face1.charAt(face1.length - 2) == "/") {
                    face1 = face1.substr(0, face1.length - 2);
                    face1 = face1 + "/132";
                }
                master["avatar"] = face1;
                var mData = [];
                var rData = ret["data"];
                for (var i = 0; i < rData.length; i++) {
                    if (rData[i]["uid"] != ret["master"]["uid"]) {
                        var obj = {};
                        obj["uid"] = rData[i]["uid"];
                        obj["name"] = GameMain.app.subname(Base64.decode(rData[i]["name"]), 12);
                        var face = Base64.decode(rData[i]["avatar"]);
                        if (face.charAt(face.length - 1) == "0" && face.charAt(face.length - 2) == "/") {
                            face = face.substr(0, face.length - 2);
                            face = face + "/132";
                        }
                        obj["avatar"] = face;
                        obj["mark"] = rData[i]["mark"];
                        var mLevel = GameMain.app.mLevel;
                        var mLevelName = GameMain.app.mLevelName;
                        var level = mLevel.length;
                        for (var m = 0; m < mLevel.length; m++) {
                            if (obj["mark"] < mLevel[m]) {
                                level = m + 1;
                                break;
                            }
                        }
                        obj["level"] = mLevelName[level - 1];
                        mData.push(obj);
                    }
                }
                for (var i = 0; i < mData.length; i++) {
                    mData[i]["rank"] = i + 1;
                }
                GameMain.app.relayView.showrelayData(master, mData);
            }
        }
    };
    wxMinPro.prototype.initMoreGame = function (btn, isIndex) {
        if (isIndex === void 0) { isIndex = false; }
        var obj = MoreGame.GetIndexRandom(this.mGamesBox);
        if (obj != null) {
            btn.name = obj.gameid;
            if (isIndex) {
                if (this.fhOnoff != 1) {
                    btn.skin = "";
                    btn.visible = false;
                }
                else {
                    btn.skin = obj.url_btn;
                    btn.visible = true;
                }
            }
            else {
                btn.skin = obj.url_result;
            }
        }
        else {
            btn.visible = false;
            btn.skin = "";
        }
    };
    wxMinPro.prototype.getMoreUrl = function (id) {
        for (var i = 0; i < this.mGamesBox.length; i++) {
            if (Number(id) == Number(this.mGamesBox[i]['gameid'])) {
                return this.mGamesBox[i];
            }
        }
        return null;
    };
    /* 显示更多游戏 */
    wxMinPro.prototype.showMoreGamePage = function (btn) {
        if (Laya.Browser.onMiniGame == false)
            return;
        var obj = GameMain.app.mWX.getMoreUrl(btn.name);
        if (obj == null)
            return;
        gameBox.showBoxPage(obj.appid, GameMain.app.mWX.mGamesBox, "全民接龙高手");
        GameMain.app.mWX.reportADHit(btn.name);
        wxCore.uo.commitTotle("recom_icon_click", { "create_time": "", "session_id": "", "is_new": "", "click": 1, "id": obj.id, "name": obj.name });
    };
    /* 统计更多游戏的点击量 */
    wxMinPro.prototype.reportADHit = function (id) {
        var params = [];
        params["uid"] = wxCore.uo.getUserID();
        params["id"] = id;
        this.server(params, "ADHit", null);
    };
    /* 给自己加复活卡 */
    wxMinPro.prototype.addCardForMe = function (shareId) {
        var params = [];
        params["uid"] = wxCore.uo.getUserID();
        params["id"] = shareId;
        this.server(params, "AddMyCard", new Laya.Handler(this, onResult));
        // 调用接口成功
        function onResult(ret) {
            if (ret["code"] == 0) {
                GameMain.app.mWX.mCards = GameMain.app.mWX.mCards >= 2 ? 2 : (GameMain.app.mWX.mCards + 1);
                GameMain.app.showMessage("获得复活卡1张", "success");
                // 如果存在结果页，更新结果页复活卡的数量。
                if (GameMain.app.resultView) {
                    GameMain.app.resultView.upDataCars();
                }
            }
        }
    };
    /* 给好友添加复活卡 */
    wxMinPro.prototype.dealCards = function (shareTicket) {
        if (wxCore.uo.mLaunch["query"]["gift"] == 0) {
            return;
        }
        var params = [];
        params["uid"] = wxCore.uo.getUserID();
        if (wxCore.uo.mLaunch["query"]["gift"] != null && typeof (wxCore.uo.mLaunch["query"]["gift"]) != "undefined") {
            params["gift"] = Number(wxCore.uo.mLaunch["query"]["gift"]);
        }
        else {
            params["gift"] = 0;
        }
        if (shareTicket != null && typeof (wxCore.uo.mLaunch["shareTicket"]) != "undefined") {
            params["ticket"] = shareTicket;
        }
        wxCore.uo.mLaunch["query"]["gift"] = 0;
        this.server(params, "AddCard", null);
    };
    /* 获取返回小程序appid */
    wxMinPro.prototype.initReturn = function () {
        var pid = wxCore.uo.mLaunch["query"]["pid"];
        if (pid == null || typeof (pid) == "undefined" || pid == "") {
            pid = GameMain.app.getLocalInfo("pid");
        }
        if (pid == null || typeof (pid) == "undefined" || pid == "") {
            this.mReturnAppid = "";
            this.mReturnUrl = "";
        }
        else {
            if (Number(pid) == 8) {
                this.mReturnAppid = "";
                this.mReturnUrl = "";
            }
            else {
                this.mReturnAppid = pid;
                this.mReturnUrl = "pages/index/index?";
            }
            GameMain.app.setLocalInfo("pid", this.mReturnAppid);
        }
    };
    /* 初始化微信游戏圈按钮 */
    wxMinPro.prototype.initGameClub = function () {
        if (wxCore.uo.mSDKVersion > "2.0.3") {
            var _top = 160 * GameMain.app.mScreenHeight / 667;
            if (GameMain.app.mScreenHeight == 812) {
                _top = 190 * GameMain.app.mScreenHeight / 667;
            }
            GameMain.app.mWX.gameClub = wx.createGameClubButton({
                icon: "dark",
                style: {
                    left: 330 * GameMain.app.mScreenWidth / 375,
                    top: _top,
                    width: 30 * GameMain.app.mScreenWidth / 375,
                    height: 30 * GameMain.app.mScreenWidth / 375
                }
            });
        }
    };
    /**
     * 初始化banner广告
     */
    wxMinPro.prototype.initBannerAD = function (adUnitId, type) {
        if (adUnitId === void 0) { adUnitId = 'adunit-852b1b0367aa01e8'; }
        if (type === void 0) { type = 1; }
        if (wxCore.uo.mSDKVersion >= "2.0.4") {
            if (GameMain.app.mWX.adBanner == null) {
                GameMain.app.mWX.adBanner = wx.createBannerAd({
                    adUnitId: adUnitId,
                    style: {
                        left: 0,
                        top: GameMain.app.mScreenHeight - 107,
                        width: GameMain.app.mScreenWidth * type
                    }
                });
                var top_1 = GameMain.app.mScreenHeight == 812 ? 20 : 0;
                GameMain.app.mWX.adBanner.onResize(function (res) {
                    GameMain.app.mWX.adBanner.style.top = GameMain.app.mScreenHeight - GameMain.app.mWX.adBanner.style.realHeight - top_1;
                    GameMain.app.mWX.adBanner.style.left = (GameMain.app.mScreenWidth - GameMain.app.mWX.adBanner.style.realWidth) / 2;
                });
                GameMain.app.mWX.adBanner.onLoad(function () {
                    //console.log('adBanner 广告加载成功');
                });
                GameMain.app.mWX.adBanner.onError(function () {
                    //console.log('wxBanner广告加载失败');
                    // this.addCustomBannerAd();
                });
                GameMain.app.mWX.adBanner.show();
                GameMain.app.mWX.reportData(0);
            }
            else {
                GameMain.app.mWX.adBanner.show();
            }
        }
    };
    /* 关闭banner广告 */
    wxMinPro.prototype.hideADBanner = function () {
        // 移除微信的广告
        if (GameMain.app.mWX.adBanner != null) {
            GameMain.app.mWX.adBanner.hide();
        }
    };
    // 返回微信右上角菜单，top和height，转换过的
    wxMinPro.prototype.getMenuButtonTop_CenterPoint = function () {
        var rnt = new Laya.Point(0, 0);
        if (Laya.Browser.onMiniGame) {
            if (wxCore.uo.wxVersion() >= "2.1.0") {
                if (this.mWxMenuButtonRect == null) {
                    var rect = wx.getMenuButtonBoundingClientRect();
                    if (rect != null) {
                        if (rect.height != NaN && rect.height != undefined && rect.height != null) {
                            this.mWxMenuButtonRect = rect;
                            ////console.log("Get getMenuButtonBoundingClientRect : ", this.mWxMenuButtonRect);
                        }
                    }
                }
            }
            if (this.mWxMenuButtonRect != null) {
                var h = this.mWxMenuButtonRect.height;
                var t = this.dealTopValue(this.mWxMenuButtonRect.top);
                rnt.x = t * Laya.stage.height / wxCore.uo.mPhone['screenHeight'];
                rnt.y = h * Laya.stage.height / wxCore.uo.mPhone['screenHeight'];
                return rnt;
            }
        }
        return rnt;
    };
    wxMinPro.prototype.dealTopValue = function (value) {
        if (value > 0) {
            return value;
        }
        else {
            ////console.log("getTopValue() -> screenHeight = ", wxCore.uo.phone()['screenHeight'], ", stage height = ", Laya.stage.height);
            if (Number(wxCore.uo.phone()['screenHeight']) > 800) {
                return 40;
            }
            else {
                return 10;
            }
        }
    };
    /* 当微信banner广告为空时，显示自己的广告 */
    wxMinPro.prototype.addCustomBannerAd = function () {
        if (this.mCustomBannerAdList.length == 0)
            return;
        var __this = this;
        this.mIsInvokeRemoveCustomBannerAd = false;
        var index = Math.floor(Math.random() * this.mCustomBannerAdList.length);
        var url = this.mCustomBannerAdList[index]["url"];
        var appid = this.mCustomBannerAdList[index]["appid"];
        var path = this.mCustomBannerAdList[index]["path"];
        // 1->跳转小程序 0->不可跳转
        var third = Number(this.mCustomBannerAdList[index]["third"]);
        var id = this.mCustomBannerAdList[index]["id"];
        if (__this.mCustomBanner == null) {
            __this.mCustomBanner = new Laya.Image();
            __this.mCustomBanner.zOrder = 1000;
        }
        __this.mCustomBanner.loadImage(url, 0, 0, 0, 0, Laya.Handler.create(this, function () {
            // 如果此时调用过隐藏banner函数，则不将banner添加到stage
            if (__this.mIsInvokeRemoveCustomBannerAd)
                return;
            __this.mCustomBanner.anchorX = 0.5;
            __this.mCustomBanner.x = Laya.stage.width / 2;
            __this.mCustomBanner.bottom = GameMain.app.mScreenHeight > 800 ? 34 : 0;
            Laya.stage.addChild(__this.mCustomBanner);
            __this.mCustomBanner.on(Events.CLICK, __this, __this.onCustomBannerClick, [third, id, appid, path]);
        }));
    };
    wxMinPro.prototype.onCustomBannerClick = function (third, id, appid, path, e) {
        e.stopPropagation();
        if (third == 0)
            return;
        if (wxCore.uo.mSDKVersion >= "2.2.0") {
            GameMain.app.mWX.reportADHit(id);
            wx.navigateToMiniProgram({
                appId: appid,
                path: path,
                envVersion: "trial",
                success: function (res) {
                    ////console.log("tiaozhuan-success");
                }
            });
        }
    };
    /* 广告曝光(type:1 视频广告; type:0 Banner广告) */
    wxMinPro.prototype.reportData = function (type) {
        if (type === void 0) { type = 0; }
        var params = [];
        params["uid"] = this.mUID;
        params["type"] = type;
        this.server(params, "ad", null);
    };
    /* 网络请求 */
    wxMinPro.prototype.server = function (params, url, callback, ver) {
        if (ver === void 0) { ver = "1.0.1"; }
        GameMain.app.mWX.mHttpCall = new Laya.HttpRequest();
        GameMain.app.mWX.mHttpCall.once(Laya.Event.COMPLETE, GameMain.app.mWX, onResult);
        GameMain.app.mWX.mHttpCall.once(Laya.Event.ERROR, GameMain.app.mWX, GameMain.app.mWX.onHttpRequestError);
        var str = util.getServer() + GameMain.app.mWX.mCmd[url] + util.getUrlParams(params, ver);
        GameMain.app.mWX.mHttpCall.send(str, null, "get", "text");
        ////console.log("网络请求地址：", str);
        // 请求结果
        function onResult(e) {
            var ret = null;
            if (typeof (e) == "string") {
                ret = util.getJSON(e);
            }
            else {
                ret = util.getJSON(GameMain.app.mWX.mHttpCall.data);
            }
            if (callback != null) {
                callback.runWith(ret);
            }
            GameMain.app.mWX.mHttpCall = null;
        }
    };
    /* 请求错误的回调 */
    wxMinPro.prototype.onHttpRequestError = function (e) {
        wx.hideLoading({});
        this.mHttpCall = null;
        ////console.log("onHttpRequestError:" + e);
    };
    /* ShowRequestLoading */
    wxMinPro.prototype.showLoading = function (title, mask) {
        if (title === void 0) { title = ""; }
        if (mask === void 0) { mask = true; }
        wx.showLoading({
            title: title,
            mask: mask
        });
    };
    wxMinPro.prototype.recordingCoins = function (coins, reason, otherCoins, upBtn) {
        var _this = this;
        function onResult(e) {
            var ret = null;
            if (typeof (e) == "string")
                ret = util.getJSON(e);
            else
                ret = e;
            if (ret['code'] == 0) {
                ShopSetting.nowcoin = Number(ret['coins']);
            }
        }
        var params = [];
        params['uid'] = _this.mUID;
        params['count'] = coins;
        params['reason'] = reason;
        ////console.log('?????????????????????????????????????????????????????????????');
        GameMain.app.mWX.server(params, "Coins", new Laya.Handler(this, onResult));
    };
    wxMinPro.prototype.buyItem = function (itemid, callback) {
        var _this = this;
        function onResult(e) {
            var ret = null;
            if (typeof (e) == "string")
                ret = util.getJSON(e);
            else
                ret = e;
            if (ret['code'] == 0) {
                ShopSetting.nowcoin = Number(ret['coins']);
                if (itemid <= 5000) {
                    GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.BuyBgSkin);
                    ShopSetting.nowUseBg = Number(itemid - 4000);
                    GameMain.app.mWX.setUserValue('now_use_bg', ShopSetting.nowUseBg + '');
                    for (var _i = 0, _a = ShopSetting.shopListArray; _i < _a.length; _i++) {
                        var im = _a[_i];
                        if (im["id"] == itemid) {
                            im['count'] = 1;
                        }
                    }
                }
                else {
                    GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.BuyCardBackSkin);
                    ShopSetting.nowCardBack = Number(itemid);
                    GameMain.app.mWX.setUserValue('now_use_card_back', ShopSetting.nowCardBack + '');
                    for (var _b = 0, _c = ShopSetting.shopListArray; _b < _c.length; _b++) {
                        var im = _c[_b];
                        if (im["id"] == itemid) {
                            im['count'] = 1;
                        }
                    }
                }
                wx.showToast({
                    title: '购买成功',
                    icon: "none",
                    image: "",
                    duration: 2000
                });
                if (callback) {
                    callback();
                }
            }
            else {
                wx.showToast({
                    title: "当前金币不足",
                    icon: "none",
                    image: "",
                    duration: 1500
                });
            }
        }
        var params = [];
        params['uid'] = this.mUID;
        params['itemid'] = itemid;
        GameMain.app.mWX.server(params, "BuyItem", new Laya.Handler(this, onResult));
    };
    wxMinPro.prototype.useItem = function (itemid, type, btn, index) {
        var _this = this;
        function onResult(e) {
            var ret = null;
            if (typeof (e) == "string")
                ret = util.getJSON(e);
            else
                ret = e;
            if (ret['code'] == 0) {
                ////console.log("皮肤设置成功");
                if (type == 0) { //皮肤
                    // _this.setSkin(itemid);
                    // GameMain.app.ShopView.onCharacter();
                }
            }
        }
        var params = [];
        params['uid'] = this.mUID;
        params['itemid'] = itemid;
        GameMain.app.mWX.server(params, "UseItem", new Laya.Handler(this, onResult));
    };
    wxMinPro.prototype.changeTCt = function (itemid, count, reason) {
        var _this = this;
        function onResult(e) {
            var ret = null;
            if (typeof (e) == "string")
                ret = util.getJSON(e);
            else
                ret = e;
            if (ret['code'] == 0) {
                if (itemid == 5001) {
                    Items.propS[0] = ret['new'];
                    Items.beginUpScore = true;
                }
                else if (itemid == 5002) {
                    Items.propS[1] = ret['new'];
                    Items.beginUpGold = true;
                }
                else if (itemid == 5003) {
                    Items.propS[2] = ret['new'];
                }
                else if (itemid == 1002) {
                    GameMain.app.mWX.mDiamonds = ret['new'];
                    if (DataCenter.getInstance().gameView != null && DataCenter.getInstance().gameView.selectDialog != null) {
                        EventConfig.getInstance().event(EventConfig.goldEvent);
                    }
                }
            }
        }
        var params = [];
        params['uid'] = this.mUID;
        params['tid'] = itemid;
        params['count'] = count;
        params['reason'] = reason;
        GameMain.app.mWX.server(params, "ChangeTCt", new Laya.Handler(this, onResult));
    };
    wxMinPro.prototype.refreshCutDown = function () {
        var consumeTime = ((ShopSetting.nowPowerMax - ShopSetting.nowPpower) * ShopSetting.powerRecoverTime * 60);
        if (consumeTime >= 3600) {
            this.b = Math.floor(consumeTime / 3600);
            this.a = Math.floor((consumeTime - this.b * 3600) / 60);
            this.xs = consumeTime - this.b * 3600 - this.a * 60;
            ////console.log('refreshTime1', this.a, this.b,this.xs, consumeTime, ShopSetting.nowPowerMax, ShopSetting.nowPpower);
        }
        else if (consumeTime < 3600 && consumeTime >= 60) {
            this.b = 0;
            this.a = Math.floor(consumeTime / 60);
            this.xs = consumeTime - this.a * 60;
            ////console.log('refreshTime2', this.a, this.b,this.xs, consumeTime, ShopSetting.nowPowerMax, ShopSetting.nowPpower);
        }
        else if (consumeTime < 60 && consumeTime >= 0) {
            this.a = 0;
            this.b = 0;
            this.xs = consumeTime;
            ////console.log('refreshTime3', this.a, this.b,this.xs, consumeTime, ShopSetting.nowPowerMax, ShopSetting.nowPpower);
        }
        this.hour = '00';
        this.minus = '00';
        this.seconds = '00';
        if (this.a == 0 && this.b == 0 && this.xs == 0) {
            return;
        }
        Laya.timer.clear(this, this.cutDownTime);
        Laya.timer.loop(1000, this, this.cutDownTime);
    };
    wxMinPro.prototype.startCutDown = function (isAdd) {
        if (isAdd === void 0) { isAdd = false; }
        // this.xs = 0;
        // this.a = 0;
        // this.b = 0;
        Laya.timer.clear(this, this.cutDownTime);
        if (this.xs == 0 && this.a == 0 && this.b == 0) {
            if (ShopSetting.powerRecoverTime < 60) {
                this.a = ShopSetting.powerRecoverTime;
            }
            // else if (ShopSetting.powerRecoverTime >= 60 && ShopSetting.powerRecoverTime < 1440) {
            //     this.b = ShopSetting.powerRecoverTime % 60
            //     this.a = (ShopSetting.powerRecoverTime - ShopSetting.powerRecoverTime * (ShopSetting.powerRecoverTime % 60));
            //     this.xs = 0;
            // }
        }
        else {
            ////console.log('powerRecoverTime1', this.b, this.a, this.xs);
            if (ShopSetting.powerRecoverTime < 60 && isAdd) {
                this.a += ShopSetting.powerRecoverTime;
                if (this.a >= 60) {
                    this.b += 1;
                    this.a = this.a - 60;
                }
            }
            // else if (ShopSetting.powerRecoverTime >= 60 && ShopSetting.powerRecoverTime < 1440) {
            //     var nowMin = this.a + this.b * 60;
            //     nowMin = nowMin + ShopSetting.powerRecoverTime;
            //     this.b = nowMin % 60
            //     this.a = (nowMin - nowMin * (nowMin % 60));
            //     this.xs = this.xs;
            // }
        }
        ////console.log('powerRecoverTime2', this.b, this.a, this.xs);
        Laya.timer.loop(1000, this, this.cutDownTime);
    };
    wxMinPro.prototype.cutDownTime = function () {
        if (this.xs == 0 && this.a == 0 && this.b == 0) {
            ShopSetting.powerLabel = "00:00:00";
            if (ShopSetting.nowPpower < ShopSetting.nowPowerMax) {
                ShopSetting.nowPpower += 1;
                GameMain.app.mWX.setUserValue('now_physical_power', ShopSetting.nowPpower + '');
            }
            return;
        }
        if (this.xs > 0) {
            this.xs--;
            if (this.xs < 10 && this.xs >= 0) {
                this.seconds = '0' + this.xs;
            }
            else if (this.xs >= 10 && this.xs <= 60) {
                this.seconds = this.xs + '';
            }
        }
        else {
            this.seconds = '59';
            this.xs = 59;
            this.a--;
        }
        if (this.a > 0) {
            if (this.a < 10 && this.a > 0) {
                this.minus = '0' + this.a;
            }
            else if (this.a >= 10 && this.a < 60) {
                this.minus = this.a + '';
            }
        }
        else {
            if (this.b > 0) {
                this.minus = '59';
                this.a = 59;
                this.b--;
            }
            else {
                this.minus = '00';
            }
        }
        if (this.b >= 10) {
            this.hour = this.b + '';
        }
        else if (this.b < 10) {
            this.hour = '0' + this.b;
        }
        if ((this.a + this.b * 60) >= ShopSetting.powerRecoverTime && (this.a + this.b * 60) % ShopSetting.powerRecoverTime == 0 && this.xs == 0) {
            if (ShopSetting.nowPpower < ShopSetting.nowPowerMax) {
                ShopSetting.nowPpower += 1;
                GameMain.app.mWX.setUserValue('now_physical_power', ShopSetting.nowPpower + '');
            }
            ////console.log('oneoneone');
        }
        ShopSetting.powerLabel = this.hour + ":" + this.minus + ":" + this.seconds;
        // ////console.log('powerLabel', ShopSetting.powerLabel);
    };
    return wxMinPro;
}());
//# sourceMappingURL=wxMinPro.js.map
/*
* 微信通用接口1.0.1
* @fatality
*/
var wxCore = /** @class */ (function () {
    function wxCore() {
        this.version = "1.0.1";
        /**
         * 带入参数
         */
        this.mLaunch = null;
        /**
         * 用户信息
         */
        this.mWeUser = {};
        /**
         * 手机参数
         */
        this.mPhone = {};
        /**
         * 微信版本号
         */
        this.mSDKVersion = "";
        /**
         * 是否是xp
         */
        this.iphoneX = false;
        /**
         * 回调函数代码
         */
        this.mCallBack = null;
        this.mHttpCall = null;
        //默认登陆界面
        // private loginView: ui.wx.loginUI = null;
        //1=全屏显示
        //2=背景黑遮罩
        this.mLoginType = 1;
        this.mShowLogo = true;
        this.btnLogin = null;
        this.zOrder = 0;
        this.mFrist = true;
        this.mInit = false;
        this.mVideoAD = null;
        this.mNoVideo = false;
        this.isShowld = false;
        this.maidian_log_url = "";
        this.mSessionLogin = 0;
        this.mApp_type = 0;
        wxCore.uo = this;
        this.mCallBack = new wxCallBack();
    }
    /**
     * 是否是XP机器
     */
    wxCore.prototype.IsXP = function () {
        return this.iphoneX;
    };
    /**
     * 获取微信SDK版本号
     */
    wxCore.prototype.wxVersion = function () {
        return this.mSDKVersion;
    };
    /**
     * 获取用户基本信息,openid,uid,name,avatar等非游戏数据
     */
    wxCore.prototype.getUser = function () {
        return this.mWeUser;
    };
    /**
     * 获取用户ID
     */
    wxCore.prototype.getUserID = function () {
        return Number(this.mWeUser['uid']);
    };
    /**
     * 获取详细手机信息
     */
    wxCore.prototype.phone = function () {
        return this.mPhone;
    };
    /**
     * 获取启动参数
     */
    wxCore.prototype.launch = function () {
        return this.mLaunch;
    };
    /**
     * @param type = 登录模式
     * @param showlogo = 是否显示logo(type == 1的时候生效)
     */
    wxCore.prototype.initWX = function (type, showlogo, zorder) {
        if (type === void 0) { type = 1; }
        if (showlogo === void 0) { showlogo = true; }
        if (zorder === void 0) { zorder = 0; }
        this.mPhone = wx.getSystemInfoSync();
        var str = this.mPhone['model'];
        if (str.indexOf("iPhone X") >= 0) {
            this.iphoneX = true;
        }
        this.mSDKVersion = this.mPhone['SDKVersion'];
        var option = wx.getLaunchOptionsSync();
        var res = {};
        res['query'] = option['query'];
        res['scene'] = option['scene'];
        res['shareTicket'] = option['shareTicket'];
        res['isSticky'] = option['isSticky'];
        if (res['query']['scene'] != null) {
            var scene = decodeURIComponent(res['query']['scene']);
            var params = scene.split("&");
            for (var i = 0; i < params.length; i++) {
                var param = params[i];
                var keys = param.split("=");
                if (keys.length == 2)
                    res['query'][keys[0]] = keys[1];
            }
        }
        this.zOrder = zorder;
        this.mLaunch = res;
        this.mLoginType = type;
        this.mShowLogo = showlogo;
        if (this.mCallBack.onBefore() == true) {
            this.showLoading();
        }
        Laya.timer.callLater(this, this.check);
    };
    wxCore.prototype.initWeb = function (zorder) {
        if (zorder === void 0) { zorder = 0; }
        this.zOrder = zorder;
        if (this.mCallBack.onBefore() == true) {
            this.showLoading();
        }
    };
    wxCore.prototype.showLoading = function () {
        if (GameMain.app.loginView == null) {
            GameMain.app.loginView = new ui.wx.loginUI();
            // GameMain.app.loginView.height = Laya.stage.height;
            // GameMain.app.loginView.bk.y = (Laya.stage.height - 1624)/2;
            // GameMain.app.loginView.bk.height = Laya.stage.height;
            GameMain.app.loginView.name = "loginCore";
            GameMain.app.loginView.zOrder = this.zOrder;
            // GameMain.app.loginView.pos(0, 0);
            Laya.stage.addChild(GameMain.app.loginView);
        }
        // Laya.timer.callLater(this.mCallBack,this.mCallBack.onShow);
        Laya.timer.frameLoop(1, this, this.onProgress);
    };
    wxCore.prototype.onProgress = function () {
        var w = GameMain.app.loginView.prg2.width;
        // if (GameMain.app.isServer1 && GameMain.app.isServer2 && GameMain.app.isServer3 && GameMain.app.isServer4) {
        //     GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.OnGameStart, [true]);
        //     ////console.log('xxx2');
        //     Laya.timer.clear(this, this.onProgress);
        //     wxCore.uo.clear();
        //     wx.hideLoading({});
        //     return
        // }
        if (w >= 400 && (!GameMain.app.isServer1 || !GameMain.app.isServer2 || !GameMain.app.isServer3 || !GameMain.app.isServer4)) {
            if (!this.isShowld) {
                this.isShowld = true;
                wx.showLoading({
                    title: "正在加载资源...",
                    mask: true
                });
            }
            return;
        }
        w = w + 2.4;
        if (w >= 480) {
            w = 480;
            if (GameMain.app.isServer1 && GameMain.app.isServer2 && GameMain.app.isServer3 && GameMain.app.isServer4) {
                GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.OnGameStart, [true]);
                // ////console.log('xxx1');
                Laya.timer.clear(this, this.onProgress);
                wxCore.uo.clear();
                wx.hideLoading({});
                return;
            }
        }
        GameMain.app.loginView.prg2.width = w;
    };
    wxCore.prototype.clear = function () {
        if (GameMain.app.loginView != null) {
            GameMain.app.loginView.visible = false;
            GameMain.app.loginView.removeSelf();
        }
        GameMain.app.loginView = null;
        Laya.loader.clearRes("login/fr_bk.jpg", false);
        if (this.btnLogin != null) {
            wxCore.uo.btnLogin.destroy();
        }
        if (Laya.Browser.onMiniGame) {
            wx.postMessage({
                type: "init", width: Laya.stage.width, height: Laya.stage.height
            });
            wx.showShareMenu({ withShareTicket: true });
            wx.onShareAppMessage(function () {
                GameMain.app.mShares = GameMain.app.mShares + 1;
                return {
                    title: GameMain.app.mWX.shareUrl[0]["title"],
                    imageUrl: GameMain.app.mWX.shareUrl[0]["url"],
                };
            });
        }
    };
    /**
     * 获取登录界面的登录按钮
     */
    wxCore.prototype.loginBtn = function () {
        return null;
    };
    /**
     * 获取登录界面的logo图片
     */
    wxCore.prototype.loginLogo = function () {
        return null;
    };
    /**
     * 获取登录界面的背景图片
     */
    wxCore.prototype.logoinBk = function () {
        return GameMain.app.loginView.bk;
    };
    wxCore.prototype.showLoginBtn = function () {
        ////console.log("showLoginBtn");
        if (this.btnLogin != null)
            return;
        var w = 0;
        var h = 0;
        var left = 0;
        var top = 0;
        var btn = "";
        if (this.mLoginType == 1) {
        }
        else {
        }
        this.btnLogin = wx.createUserInfoButton({
            type: 'image',
            withCredentials: false,
            image: btn,
            style: {
                left: left,
                top: top,
                width: w,
                height: h
            }
        });
        this.btnLogin.show();
        this.btnLogin.onTap(function (res) {
            if (typeof (res['userInfo']) == "undefined") {
                wx.showToast({
                    title: "游戏需要您授权头像和用户名信息!",
                    icon: "success",
                    image: "",
                    duration: 2000
                });
                return;
            }
            wxCore.uo.btnLogin.destroy();
            wxCore.uo.initUser(res);
            wxCore.uo.btnLogin = null;
        });
    };
    wxCore.prototype.check = function () {
        wx.checkSession({
            success: function (res) {
                ////console.log("checkSession ok");
                wxCore.uo.login();
            },
            fail: function (res) {
                ////console.log("checkSession fail");
                wx.removeStorageSync("user");
                wxCore.uo.login();
            }
        });
    };
    /**
     * 重新执行登录流程
     */
    wxCore.prototype.reLogin = function () {
        wx.removeStorageSync("user");
        this.login();
    };
    wxCore.prototype.login = function () {
        var checked = true;
        var user = wx.getStorageSync("user");
        if (typeof (user) == "object") {
            var openid = user['openid'];
            if (openid == "" || openid == null)
                checked = false;
            if (user['uid'] == "" || user['uid'] == null || Number(user['uid']) < 10000)
                checked = false;
        }
        else
            checked = false;
        if (checked) {
            wxCore.uo.mWeUser = user;
            wxCore.uo.checkCode("");
        }
        else {
            wx.login({
                success: function (res) {
                    wxCore.uo.checkCode(res.code);
                },
                fail: function (res) {
                    ////console.log("login fail,try again");
                    Laya.timer.once(1000, wxCore.uo, wxCore.uo.login);
                }
            });
        }
    };
    /**
     * 用户登陆接口，如果用户不存在，创建用户
     * master = 推荐用户
     * agentid= 初始渠道编号
     * adid   = 广告渠道编号
     * @param code
     */
    wxCore.prototype.checkCode = function (code) {
        function onResult(ret) {
            ////console.log(ret);
            if (ret['code'] == 0) {
                //console.log('login:', ret);
                if (wxCore.uo.mWeUser != null && wxCore.uo.mWeUser['uid'] == ret['uid']) {
                    if (wxCore.uo.mWeUser['openid'] != ret['openid']) {
                        Laya.timer.once(100, wxCore.uo, wxCore.uo.reLogin);
                        return;
                    }
                }
                else {
                    wxCore.uo.mWeUser = {};
                    wxCore.uo.mWeUser['openid'] = ret['openid'];
                    wxCore.uo.mWeUser['uid'] = Number(ret['uid']);
                }
                if (wxCore.uo.mCallBack.onLogin(wxCore.uo.mWeUser, ret) == true)
                    wxCore.uo.getUserInfo();
                else {
                    wxCore.uo.init();
                }
            }
            else {
                Laya.timer.once(1000, wxCore.uo, wxCore.uo.reLogin);
            }
        }
        var params = [];
        params['code'] = code;
        if (code == "")
            params['uid'] = wxCore.uo.mWeUser['uid'];
        if (typeof (this.mLaunch['query']['uid']) != "undefined")
            params['master'] = this.mLaunch['query']['uid'];
        if (typeof (this.mLaunch['query']['agentid']) != "undefined")
            params['agentid'] = this.mLaunch['query']['agentid'];
        if (typeof (this.mLaunch['query']['adid']) != "undefined")
            params['adid'] = this.mLaunch['query']['adid'];
        params['ver'] = this.mCallBack.version();
        this.server(wxCallBack.mIF['login'], params, onResult);
    };
    wxCore.prototype.getUserInfo = function () {
        if (this.mLoginType == 2) {
            wxCore.uo.onEnter(null, this.mLaunch);
            wxCore.uo.init();
            return;
        }
        wx.getUserInfo({
            withCredentials: false,
            lang: "zh_CN",
            success: function (res) {
                ////console.log(res);
                wxCore.uo.initUser(res);
            },
            fail: function (res) {
                ////console.log(res);
                if (wxCore.uo.mSDKVersion >= "2.0.1")
                    wxCore.uo.showLoginBtn();
                else {
                    wxCore.uo.wxAuthorize();
                    // wxCore.uo.openSeting();
                }
            }
        });
    };
    /* 低于2.0.1版本的用户执行微信授权操作 */
    wxCore.prototype.wxAuthorize = function () {
        wx.authorize({
            scope: 'scope.userInfo',
            success: function (res) {
                wxCore.uo.getUserInfo();
            },
            fail: function (res) {
                wxCore.uo.openSeting();
            }
        });
    };
    wxCore.prototype.openSeting = function () {
        var _this = this;
        wx.showModal({
            title: '提示',
            content: '游戏需要您授权头像和用户名信息',
            showCancel: false,
            cancelText: '取消',
            confirmText: "确认",
            success: function (res) {
                wx.openSetting({
                    success: function (res) {
                        if (res.authSetting['scope.userInfo'] == false) {
                            wxCore.uo.openSeting();
                        }
                        else {
                            wxCore.uo.getUserInfo();
                        }
                    },
                    fail: function (res) {
                        _this.openSeting();
                    }
                });
            }
        });
    };
    wxCore.prototype.initUser = function (res) {
        var change = 0;
        var userInfo = res.userInfo;
        ////console.log(userInfo.avatarUrl, wxCore.uo.mWeUser['avatarUrl'], wxCore.uo.mWeUser['nickName'], userInfo.nickName);
        if (wxCore.uo.mWeUser['nickName'] != userInfo.nickName) {
            wxCore.uo.mWeUser['nickName'] = userInfo.nickName;
            change = 1;
        }
        var face = userInfo.avatarUrl;
        if (face.charAt(face.length - 1) == '0' && face.charAt(face.length - 2) == '/') {
            face = face.substr(0, face.length - 2);
            face = face + "/132";
        }
        if (wxCore.uo.mWeUser['avatarUrl'] != face) {
            wxCore.uo.mWeUser['avatarUrl'] = face;
            change = 1;
        }
        wxCore.uo.mWeUser['gender'] = userInfo.gender; //性别 0：未知、1：男、2：女
        wxCore.uo.mWeUser['province'] = userInfo.province;
        wxCore.uo.mWeUser['city'] = userInfo.city;
        wxCore.uo.mWeUser['country'] = userInfo.country;
        if (change == 1)
            wxCore.uo.updateUserInfo();
        wx.setStorageSync("user", wxCore.uo.mWeUser);
        wxCore.uo.onEnter(null, this.mLaunch);
        wxCore.uo.init();
    };
    wxCore.prototype.onEnter = function (last, cur) {
        this.mCallBack.onEnterGame(this.mFrist, last, cur);
        this.mFrist = false;
    };
    wxCore.prototype.init = function () {
        if (this.mInit == false) {
            ////console.log("注册init");
            wx.onShow(this.wxShow);
            wx.onHide(this.wxHide);
            this.mInit = true;
        }
    };
    wxCore.prototype.wxShow = function (option) {
        //默认隐藏登陆按钮
        ////console.log("进入:" + (new Date().getTime()));
        ////console.log(option);
        var res = {};
        res['query'] = option['query'];
        res['scene'] = option['scene'];
        res['shareTicket'] = option['shareTicket'];
        res['isSticky'] = option['isSticky'];
        if (res['query']['scene'] != null) {
            var scene = decodeURIComponent(res['query']['scene']);
            var params = scene.split("&");
            for (var i = 0; i < params.length; i++) {
                var param = params[i];
                var keys = param.split("=");
                if (keys.length == 2)
                    res['query'][keys[0]] = keys[1];
            }
        }
        if (wxCore.uo.mFrist == true) {
            wxCore.uo.mLaunch = res;
            wxCore.uo.getUserInfo();
            return;
        }
        else
            var lastLaunch = wxCore.uo.mLaunch;
        wxCore.uo.mLaunch = res;
        wxCore.uo.onEnter(lastLaunch, res);
        wx.hideLoading({});
    };
    wxCore.prototype.wxHide = function (option) {
        wxCore.uo.mCallBack.onHideGame();
        ////console.log("退出:" + (new Date().getTime()));
        ////console.log(option);
    };
    wxCore.prototype.updateUserInfo = function () {
        function onResult(ret) {
            ////console.log("updateUserInfo..ok");
        }
        var params = {};
        params['uid'] = wxCore.uo.mWeUser['uid'];
        params['name'] = Base64.encodeURI(this.mWeUser['nickName']);
        params['avatar'] = Base64.encodeURI(this.mWeUser['avatarUrl']);
        params['gender'] = wxCore.uo.mWeUser['gender'];
        if (wxCore.uo.mWeUser['province'] != null && wxCore.uo.mWeUser['province'] != "")
            params['province'] = wxCore.uo.mWeUser['province'];
        if (wxCore.uo.mWeUser['city'] != null && wxCore.uo.mWeUser['city'] != "")
            params['city'] = wxCore.uo.mWeUser['city'];
        this.server(wxCallBack.mIF['userinfo'], params, onResult);
    };
    wxCore.prototype.server = function (rpc, params, callback, ecbck) {
        if (ecbck === void 0) { ecbck = null; }
        function onResult(e) {
            var ret = null;
            if (typeof (e) == "string")
                ret = util.getJSON(e);
            else
                ret = util.getJSON(wxCore.uo.mHttpCall.data);
            if (callback != null)
                callback(ret);
            wxCore.uo.mHttpCall = null;
        }
        function onHttpRequestError(e) {
            if (ecbck != null)
                ecbck();
            else
                wxCore.uo.onHttpRequestError(e);
        }
        this.mHttpCall = new Laya.HttpRequest();
        this.mHttpCall.once(Laya.Event.COMPLETE, this, onResult);
        this.mHttpCall.once(Laya.Event.ERROR, this, onHttpRequestError);
        var str = util.getServer() + rpc['url'] + util.getUrlParams(params, rpc['key']);
        ////console.log(str);
        this.mHttpCall.send(str, null, 'get', 'text');
    };
    wxCore.prototype.onHttpRequestError = function (e) {
        wx.hideLoading({});
    };
    /**
     * 广告
     */
    wxCore.prototype.initVideoAD = function (key) {
        if (key == "") {
            this.mNoVideo = true;
            return;
        }
        if (this.mVideoAD == null) {
            this.mVideoAD = wx.createRewardedVideoAd({ adUnitId: key });
            this.mVideoAD.onError(function (err) {
                ////console.log(err);
                if (err.errCode == 1004) {
                    wxCore.uo.mNoVideo = true;
                }
            });
        }
    };
    wxCore.prototype.haevVideo = function () {
        if (this.mVideoAD == null || this.mNoVideo == true)
            return false;
        return true;
    };
    wxCore.prototype.loadingVideo = function (callback) {
        if (this.mVideoAD == null || wxCore.uo.mNoVideo == true) {
            if (callback != null)
                callback(false);
            return false;
        }
        this.mVideoAD.load().then(function () {
            if (callback != null)
                callback(true);
        }).catch(function (err) {
            ////console.log("没有拉到广告");
            ////console.log(err.errMsg);
            if (callback != null)
                callback(false);
        });
        return true;
    };
    wxCore.prototype.showVideoAD = function (callback) {
        if (this.mVideoAD == null || wxCore.uo.mNoVideo == true) {
            if (callback != null)
                callback(false);
            return false;
        }
        else {
            wxCore.uo.mVideoAD.show();
            this.mVideoAD.offClose(null);
            this.mVideoAD.onClose(function (res) {
                if (res && res.isEnded || res === undefined) {
                    if (callback != null)
                        callback(true);
                }
                else {
                    if (callback != null)
                        callback(false);
                }
            });
            return true;
        }
    };
    // 提交埋点数据。
    wxCore.prototype.commitTotle = function (key, dts) {
        function ok(e) {
            ////console.log("commitOk:", dts);
        }
        ;
        var c = new Laya.HttpRequest();
        c.on(Laya.Event.COMPLETE, this, ok);
        dts['create_time'] = new Date().getTime();
        dts['uid'] = this.mWeUser["uid"];
        dts['session_id'] = this.mSessionLogin;
        dts['is_new'] = this.newbie;
        var mobile = 0;
        if (Laya.Browser.onAndroid)
            mobile = 1;
        if (Laya.Browser.onIOS)
            mobile = 2;
        var other = this.maidian_log_url;
        other += "&uid=" + this.mWeUser["uid"];
        other += "&platform=" + this.mApp_type;
        other += "&create_time=" + new Date().getTime();
        other += "&login_session=" + this.mSessionLogin;
        other += "&mobile=" + mobile;
        other += "&keyname=" + key.trim();
        other += "&clos=" + JSON.stringify(dts);
        c.send(other, "", 'get', 'text');
        ////console.log("commitTotle:", other);
    };
    /**
     * wxCore入口，替代that,_this
     */
    wxCore.uo = null;
    return wxCore;
}());
//# sourceMappingURL=wxCore.js.map
/*
* 微信登陆流程相关接口，一些默认接口，必须要有
*/
var wxCallBack = /** @class */ (function () {
    function wxCallBack() {
    }
    /**
     * 必须有这个接口，提交当前版本号
     */
    wxCallBack.prototype.version = function () {
        return "1.0.1";
    };
    /**
     * 授权按钮偏移量，根据游戏设置，默认160
     */
    wxCallBack.prototype.loginBtnPos = function () {
        return 300;
    };
    /**
     * 可以自定义显示界面，或者返回true,显示默认登陆界面，默认登陆界面资源在 login目录下
     * 返回 true = 正常显示默认登陆模板
     *      false= 不显示默认登陆背景，自定义设计显示界面
     *
     * 这里可以做一些下载资源得事情。异步操作都可以，不要做同步阻塞操作
     *
     */
    wxCallBack.prototype.onBefore = function () {
        return true;
    };
    /**
     * 底层显示后，如果有其他层需要显示，在这里处理
     * 注意底层zorder=0,在这里显示的其他内容，不应该再设置底图
     */
    wxCallBack.prototype.onShow = function () {
    };
    /**
     * 针对广告跳转需求，不跳转返回时重新设置界面
     */
    wxCallBack.prototype.onReShow = function () {
    };
    /**
     * 登陆成功后
     * @param user 用户数据=uid,openid,name,avatar
     * @param ret  服务端登陆返回
     * 返回 true = 继续登陆微信
     *      false= 中断登陆过程，后续需要自己调用wxCore.uo.getUserInfo来继续被中断微信登陆过程
     *             为广告设计，需要自己调用init()
     */
    wxCallBack.prototype.onLogin = function (user, ret) {
        ////console.log("wxCallBack onLogin");
        ////console.log("user = ", user);
        ////console.log("ret = ", ret);
        //处理游戏逻辑
        if (GameMain.app.mWX == null) {
            GameMain.app.mWX = new wxMinPro();
        }
        if (ret["uid"])
            GameMain.app.mWX.mUID = Number(ret["uid"]);
        if (ret["openid"])
            GameMain.app.mWX.mOpenid = String(ret["openid"]);
        GameMain.app.mScreenHeight = Number(wxCore.uo.phone()['screenHeight']);
        GameMain.app.mScreenWidth = Number(wxCore.uo.phone()['screenWidth']);
        wxCore.uo.initVideoAD("adunit-b56c0d24f2f9c9d5");
        // GameMain.app.mWX.newbie = Number(ret["newbie"]);
        return true;
    };
    /**
     * @param frist true=第一次进入游戏
     * @param last 上一次进入小程序带过来的参数 = null表示小程序第一次启动
     * @param cur  本次进入小程序呆过来的参数
     *
     * 传递last过来是用来比较本次进入和上次进去的参数差别，个别游戏需要这个参数来判断
     */
    wxCallBack.prototype.onEnterGame = function (frist, last, mLaunch) {
        ////console.log("wxCallBack onEnterGame");
        if (GameMain.shareIndex > 0) {
            this.onShareCallback();
        }
        else {
            // 登录服务器
            this.loginServer();
        }
    };
    /**
     * @param 游戏进入后台被调用
     */
    wxCallBack.prototype.onHideGame = function () {
        ////console.log("wxCallBack onHideGame");
    };
    /**
     * 初始化wxMinPro 登录服务器
     */
    wxCallBack.prototype.loginServer = function () {
        if (GameMain.app.mWX == null) {
            GameMain.app.mWX = new wxMinPro();
        }
        GameMain.app.mWX.onLaunch();
    };
    /* 检查分享 */
    wxCallBack.prototype.onShareCallback = function () {
        if (GameMain.app.mShareCurrentTime > 0) {
            // 判断是否有分享时间的限制
            if (GameMain.app.mShareTimeArray.length > 0) {
                var callbackTime = GameMain.app.getCurrTime();
                var limitTime = 0;
                var count = GameMain.app.mShareTimeArray.length;
                ////console.log("分享次数 = ", GameMain.app.mShares);
                if (count >= GameMain.app.mShares) {
                    ////console.log("---> = ", Number(GameMain.app.mShareTimeArray[GameMain.app.mShares - 1]));
                    limitTime = Number(GameMain.app.mShareTimeArray[GameMain.app.mShares - 1]);
                }
                else {
                    ////console.log("===> = ", Number(GameMain.app.mShareTimeArray[count - 1]));
                    limitTime = Number(GameMain.app.mShareTimeArray[count - 1]);
                }
                ////console.log("点击分享的时间戳 = ", GameMain.app.mShareCurrentTime);
                ////console.log("分享回来的时间戳 = ", callbackTime);
                ////console.log("分享时间限制 = ", limitTime);
                if (callbackTime - GameMain.app.mShareCurrentTime >= limitTime) {
                    this.shareBack(1);
                }
                else {
                    this.shareBack(2);
                }
            }
            else {
                this.shareBack(1);
            }
            GameMain.app.mShareCurrentTime = 0;
        }
        else {
            this.shareBack(1);
        }
    };
    /**
     * 微信分享
     * shareIndex 1是分享续命 2是分享到群
     */
    wxCallBack.prototype.shareBack = function (type) {
        switch (GameMain.shareIndex) {
            case 1:
                if (type == 1) {
                    GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClickBackStep);
                    pokerGame.SoundPlayer.PlaySound(1);
                }
                else {
                    Laya.timer.callLater(this, function () {
                        GameMain.app.showMessage("分享到群后生效", "none");
                    });
                }
                break;
            case 2:
                if (type == 1) {
                    Laya.timer.once(500, this, function () {
                        GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClickTips);
                        pokerGame.SoundPlayer.PlaySound(1);
                        wxCore.uo.commitTotle("icon_page", { "create_time": "", "session_id": "", "is_new": "", "icon_type": 'Show_Tips', "is_success": 1 });
                    });
                }
                else {
                    Laya.timer.callLater(this, function () {
                        GameMain.app.showMessage("分享到群后生效", "none");
                        wxCore.uo.commitTotle("icon_page", { "create_time": "", "session_id": "", "is_new": "", "icon_type": 'Show_Tips', "is_success": 0 });
                    });
                }
                break;
            case 3:
                if (type == 1) {
                    GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.onShareWeChatSuccesse);
                }
                else {
                    Laya.timer.callLater(this, function () {
                        GameMain.app.showMessage("分享到群后生效", "none");
                    });
                }
                break;
            case 10:
                GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.onMingPaiTaiJi, [false]);
                GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.ShowHiddenCard);
                break;
            case 12:
                GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.AddPhysicalPower, [false]);
                break;
        }
        // if (GameMain.shareIndex == 1) {
        //     if (type == 1) {
        //         if (GameMain.app.scoreView) {
        //             GameMain.app.scoreView.resume();
        //             GameMain.app.scoreView.resum3Fun()
        //         }
        //     } else {
        //         Laya.timer.callLater(this, function () {
        //             GameMain.app.showMessage("分享到群后生效", "none");
        //         })
        //     }
        // } else if (GameMain.shareIndex == 2) {
        //     if (type == 2) {
        //         Laya.timer.callLater(this, function () {
        //             GameMain.app.showMessage("分享到群后查看");
        //         })
        //     }
        // } else {
        // }
        GameMain.shareIndex = 0;
    };
    wxCallBack.mIF = {
        "wxinfo": { "url": "1.0.1/jl/wxinfo?", "key": "1.0.1", "tips": "报告微信信息接口" },
        "login": { "url": "1.0.1/jl/login?", "key": "1.0.1", "tips": "登录服务" },
        "userinfo": { "url": "1.0.1/jl/userinfo?", "key": "1.0.1", "tips": "更新用户信息" },
    };
    return wxCallBack;
}());
//# sourceMappingURL=wxCallBack.js.map
/* md5 加密使用ts源码的方法 */
var md5_hex = /** @class */ (function () {
    function md5_hex() {
    }
    md5_hex.MD5 = function (str) {
        return new MD5().hex_md5(str);
    };
    return md5_hex;
}());
/*
* util 公用的js模板;
*/
var util = /** @class */ (function () {
    function util() {
    }
    util.getArrayValue = function (arr, key) {
        if (arr == null || typeof (arr) != typeof ([])) {
            return "";
        }
        for (var i = 0; i < arr.length; ++i) {
            if (arr[i]['key'] == key) {
                return arr[i]['value'];
            }
        }
        return "";
    };
    /* 统计数据 */
    util.server = function (keyName, callback, data) {
        if (data === void 0) { data = null; }
        // if (oGameId != '') {
        //     GameMain.app.otherGameId = oGameId
        //     GameMain.app.wClick = keyName
        // }
        if (data == null) {
            data = {};
        }
        util.mHttpCall = new Laya.HttpRequest();
        util.mHttpCall.once(Laya.Event.COMPLETE, this, onResult);
        util.mHttpCall.once(Laya.Event.ERROR, this, util.onHttpRequestError);
        var paramsData = {};
        data['is_new'] = GameMain.app.mWX.PointFirst;
        data['device_os_version'] = wxCore.uo.mPhone['system'];
        data['wechat_version'] = wxCore.uo.mPhone['version'];
        data['device_type'] = wxCore.uo.mPhone['model'];
        paramsData["clos"] = JSON.stringify(data);
        // if (where != '') {
        //     paramsData["clos"] = '点击游戏:' + oGameId + '，点击来源：' + where + '，is_new：' + GameMain.app.mWX.PointFirst
        // } else {
        //     paramsData["clos"] = oGameId + '，is_new：' + GameMain.app.mWX.PointFirst
        // }
        paramsData["keyname"] = keyName;
        paramsData["mobile"] = Laya.Browser.onIOS ? 2 : 1;
        paramsData['platform'] = 5;
        paramsData["uid"] = GameMain.app.mWX.mUID;
        paramsData["now_time"] = GameMain.app.getCurrTime();
        var str = GameMain.app.mWX.statUrl + "&" + util.getUrlParams(paramsData);
        // util.getServer() 
        util.mHttpCall.send(str, null, "get", "text");
        ////console.log("网络请求地址：", str);
        // 请求结果
        function onResult(e) {
            var ret = null;
            if (typeof (e) == "string") {
                ret = util.getJSON(e);
            }
            else {
                ret = util.getJSON(util.mHttpCall.data);
            }
            if (callback != null) {
                callback.runWith(ret);
            }
            util.mHttpCall = null;
        }
    };
    util.getArrayValueParam = function (arr, key) {
        if (arr == null || typeof (arr) != typeof ([])) {
            return "";
        }
        for (var i = 0; i < arr.length; ++i) {
            if (arr[i]['key'] == key) {
                return arr[i]['param'];
            }
        }
        return "";
    };
    /* 请求错误的回调 */
    util.onHttpRequestError = function (e) {
        wx.hideLoading({});
        util.mHttpCall = null;
    };
    util.getUrlParams = function (params, ver) {
        if (ver === void 0) { ver = "1.0.1"; }
        var havetick = false;
        var keys = new Array();
        for (var key in params) {
            if (typeof (params[key]) != "string" && typeof (params[key]) != "number") {
                continue;
            }
            if (key == "tick") {
                havetick = true;
            }
            var aa = key.toLocaleLowerCase();
            params[aa] = params[key];
            keys.push(aa);
        }
        if (havetick == false) {
            var date = new Date();
            params['tick'] = Math.floor(date.getTime() / 1000);
            keys.push("tick");
        }
        keys.sort(function (a, b) { return a > b ? 1 : -1; });
        // 组合
        var str = "";
        for (var index = 0; index < keys.length; index++) {
            str = str + keys[index] + "=" + params[keys[index]] + "&";
        }
        var scr = "";
        if (util.mKeys[ver] != null) {
            scr = md5_hex.MD5(str + "key=" + util.mKeys[ver]);
        }
        else {
            scr = md5_hex.MD5(str + "key=wvkbfuhl");
        }
        return str + "key=" + scr;
    };
    util.getServer = function () {
        return "https://mascaiyou.wanzhushipin.cn/zi_paijl/"; // 正式服
        // return "https://testxcx.wanzhushipin.cn/zi_paijl/"; // 测试服
    };
    util.getCDN = function () {
        return "https://tcdn.wanzhushipin.cn/xcx/games/qmjlgs/";
    };
    util.getJSON = function (str) {
        if (str == "" || str == null) {
            return { "code": -999 };
        }
        var len = str.indexOf("{", 0);
        str = str.substr(len, str.length - len);
        return JSON.parse(str);
    };
    util.mKeys = {
        "1.0.1": "bdb0f3c3c0c7c89fb602f2464549a0c5",
    };
    util.mHttpCall = null;
    return util;
}());
//# sourceMappingURL=util.js.map
/** 重要：<writeList[] 中定义的一定要加入到 game.json 文件中 "navigateToMiniProgramAppIdList": [] >
   
   
   // 注意，各自游戏需要把各自游戏的直条去掉。加上主盒子，保证10个，主盒子必须有

    "wx3c889b4f402e924e"     ,              //  神手
    "wx64b31394dc02962b"     ,              //  最强炮塔
    "wxbc263a31f4a052e7"     ,              //  飞刀大师
    "wxee32187228632dc8"     ,              //  采油小怪
    "wx7dbc2d3f669c582a"     ,              //  神秋千
    "wx7758d12727d72cfb"     ,              //  超级串串串
    "wxb4ac0c02cd5bbd13"     ,              //  建筑反应堆
    "wx6ba7e97604569e11"     ,              //  小蝌蚪大冒险
    "wxa3c7a590d37d9839"     ,              //  守护蛋蛋
    "wxba14c2c4a17df8b6"     ,              //  萌宠冲刺

    "wxaa46e77919aec8d9"    ,       // 神手盒子（主盒子）
**/
var WriteBoxList = /** @class */ (function () {
    function WriteBoxList() {
    }
    WriteBoxList.mWriteBox = [
        "wx3c889b4f402e924e",
        "wx64b31394dc02962b",
        "wxbc263a31f4a052e7",
        "wxee32187228632dc8",
        "wx7dbc2d3f669c582a",
        "wx7758d12727d72cfb",
        "wxb4ac0c02cd5bbd13",
        "wx6ba7e97604569e11",
        "wxa3c7a590d37d9839",
        "wxaa46e77919aec8d9" // 神手盒子（主盒子）
    ];
    return WriteBoxList;
}());
//# sourceMappingURL=MoreGame.js.map
/**
 *
 * @author
 *
 */
'use strict';
var MD5 = /** @class */ (function () {
    function MD5() {
        this.hexcase = 0; /* hex output format. 0 - lowercase; 1 - uppercase        */
        this.b64pad = ""; /* base-64 pad character. "=" for strict RFC compliance   */
    }
    /*
    * These are the privates you'll usually want to call
    * They take string arguments and return either hex or base-64 encoded strings
    */
    MD5.prototype.hex_md5 = function (s) { return this.rstr2hex(this.rstr_md5(this.str2rstr_utf8(s))); }; //这个函数就行了，  
    MD5.prototype.b64_md5 = function (s) { return this.rstr2b64(this.rstr_md5(this.str2rstr_utf8(s))); };
    MD5.prototype.any_md5 = function (s, e) { return this.rstr2any(this.rstr_md5(this.str2rstr_utf8(s)), e); };
    MD5.prototype.hex_hmac_md5 = function (k, d) { return this.rstr2hex(this.rstr_hmac_md5(this.str2rstr_utf8(k), this.str2rstr_utf8(d))); };
    MD5.prototype.b64_hmac_md5 = function (k, d) { return this.rstr2b64(this.rstr_hmac_md5(this.str2rstr_utf8(k), this.str2rstr_utf8(d))); };
    MD5.prototype.any_hmac_md5 = function (k, d, e) { return this.rstr2any(this.rstr_hmac_md5(this.str2rstr_utf8(k), this.str2rstr_utf8(d)), e); };
    /*
    * Perform a simple self-test to see if the VM is working
    */
    MD5.prototype.md5_vm_test = function () {
        return this.hex_md5("abc").toLowerCase() == "900150983cd24fb0d6963f7d28e17f72";
    };
    /*
    * Calculate the MD5 of a raw string
    */
    MD5.prototype.rstr_md5 = function (s) {
        return this.binl2rstr(this.binl_md5(this.rstr2binl(s), s.length * 8));
    };
    /*
    * Calculate the HMAC-MD5, of a key and some data (raw strings)
    */
    MD5.prototype.rstr_hmac_md5 = function (key, data) {
        var bkey = this.rstr2binl(key);
        if (bkey.length > 16)
            bkey = this.binl_md5(bkey, key.length * 8);
        var ipad = Array(16), opad = Array(16);
        for (var i = 0; i < 16; i++) {
            ipad[i] = bkey[i] ^ 0x36363636;
            opad[i] = bkey[i] ^ 0x5C5C5C5C;
        }
        var hash = this.binl_md5(ipad.concat(this.rstr2binl(data)), 512 + data.length * 8);
        return this.binl2rstr(this.binl_md5(opad.concat(hash), 512 + 128));
    };
    /*
    * Convert a raw string to a hex string
    */
    MD5.prototype.rstr2hex = function (input) {
        try {
            this.hexcase;
        }
        catch (e) {
            this.hexcase = 0;
        }
        var hex_tab = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
        var output = "";
        var x;
        for (var i = 0; i < input.length; i++) {
            x = input.charCodeAt(i);
            output += hex_tab.charAt((x >>> 4) & 0x0F)
                + hex_tab.charAt(x & 0x0F);
        }
        return output;
    };
    /*
    * Convert a raw string to a base-64 string
    */
    MD5.prototype.rstr2b64 = function (input) {
        try {
            this.b64pad;
        }
        catch (e) {
            this.b64pad = '';
        }
        var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var output = "";
        var len = input.length;
        for (var i = 0; i < len; i += 3) {
            var triplet = (input.charCodeAt(i) << 16)
                | (i + 1 < len ? input.charCodeAt(i + 1) << 8 : 0)
                | (i + 2 < len ? input.charCodeAt(i + 2) : 0);
            for (var j = 0; j < 4; j++) {
                if (i * 8 + j * 6 > input.length * 8)
                    output += this.b64pad;
                else
                    output += tab.charAt((triplet >>> 6 * (3 - j)) & 0x3F);
            }
        }
        return output;
    };
    /*
    * Convert a raw string to an arbitrary string encoding
    */
    MD5.prototype.rstr2any = function (input, encoding) {
        var divisor = encoding.length;
        var i, j, q, x, quotient;
        /* Convert to an array of 16-bit big-endian values, forming the dividend */
        var dividend = Array(Math.ceil(input.length / 2));
        for (i = 0; i < dividend.length; i++) {
            dividend[i] = (input.charCodeAt(i * 2) << 8) | input.charCodeAt(i * 2 + 1);
        }
        /*
        * Repeatedly perform a long division. The binary array forms the dividend,
        * the length of the encoding is the divisor. Once computed, the quotient
        * forms the dividend for the next step. All remainders are stored for later
        * use.
        */
        var full_length = Math.ceil(input.length * 8 /
            (Math.log(encoding.length) / Math.log(2)));
        var remainders = Array(full_length);
        for (j = 0; j < full_length; j++) {
            quotient = Array();
            x = 0;
            for (i = 0; i < dividend.length; i++) {
                x = (x << 16) + dividend[i];
                q = Math.floor(x / divisor);
                x -= q * divisor;
                if (quotient.length > 0 || q > 0)
                    quotient[quotient.length] = q;
            }
            remainders[j] = x;
            dividend = quotient;
        }
        /* Convert the remainders to the output string */
        var output = "";
        for (i = remainders.length - 1; i >= 0; i--)
            output += encoding.charAt(remainders[i]);
        return output;
    };
    /*
    * Encode a string as utf-8.
    * For efficiency, this assumes the input is valid utf-16.
    */
    MD5.prototype.str2rstr_utf8 = function (input) {
        var output = "";
        var i = -1;
        var x, y;
        while (++i < input.length) {
            /* Decode utf-16 surrogate pairs */
            x = input.charCodeAt(i);
            y = i + 1 < input.length ? input.charCodeAt(i + 1) : 0;
            if (0xD800 <= x && x <= 0xDBFF && 0xDC00 <= y && y <= 0xDFFF) {
                x = 0x10000 + ((x & 0x03FF) << 10) + (y & 0x03FF);
                i++;
            }
            /* Encode output as utf-8 */
            if (x <= 0x7F)
                output += String.fromCharCode(x);
            else if (x <= 0x7FF)
                output += String.fromCharCode(0xC0 | ((x >>> 6) & 0x1F), 0x80 | (x & 0x3F));
            else if (x <= 0xFFFF)
                output += String.fromCharCode(0xE0 | ((x >>> 12) & 0x0F), 0x80 | ((x >>> 6) & 0x3F), 0x80 | (x & 0x3F));
            else if (x <= 0x1FFFFF)
                output += String.fromCharCode(0xF0 | ((x >>> 18) & 0x07), 0x80 | ((x >>> 12) & 0x3F), 0x80 | ((x >>> 6) & 0x3F), 0x80 | (x & 0x3F));
        }
        return output;
    };
    /*
    * Encode a string as utf-16
    */
    MD5.prototype.str2rstr_utf16le = function (input) {
        var output = "";
        for (var i = 0; i < input.length; i++)
            output += String.fromCharCode(input.charCodeAt(i) & 0xFF, (input.charCodeAt(i) >>> 8) & 0xFF);
        return output;
    };
    MD5.prototype.str2rstr_utf16be = function (input) {
        var output = "";
        for (var i = 0; i < input.length; i++)
            output += String.fromCharCode((input.charCodeAt(i) >>> 8) & 0xFF, input.charCodeAt(i) & 0xFF);
        return output;
    };
    /*
    * Convert a raw string to an array of little-endian words
    * Characters >255 have their high-byte silently ignored.
    */
    MD5.prototype.rstr2binl = function (input) {
        var output = Array(input.length >> 2);
        for (var i = 0; i < output.length; i++)
            output[i] = 0;
        for (var i = 0; i < input.length * 8; i += 8)
            output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << (i % 32);
        return output;
    };
    /*
    * Convert an array of little-endian words to a string
    */
    MD5.prototype.binl2rstr = function (input) {
        var output = "";
        for (var i = 0; i < input.length * 32; i += 8)
            output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xFF);
        return output;
    };
    /*
    * Calculate the MD5 of an array of little-endian words, and a bit length.
    */
    MD5.prototype.binl_md5 = function (x, len) {
        /* append padding */
        x[len >> 5] |= 0x80 << ((len) % 32);
        x[(((len + 64) >>> 9) << 4) + 14] = len;
        var a = 1732584193;
        var b = -271733879;
        var c = -1732584194;
        var d = 271733878;
        for (var i = 0; i < x.length; i += 16) {
            var olda = a;
            var oldb = b;
            var oldc = c;
            var oldd = d;
            a = this.md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
            d = this.md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
            c = this.md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
            b = this.md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
            a = this.md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
            d = this.md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
            c = this.md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
            b = this.md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
            a = this.md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
            d = this.md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
            c = this.md5_ff(c, d, a, b, x[i + 10], 17, -42063);
            b = this.md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
            a = this.md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
            d = this.md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
            c = this.md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
            b = this.md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
            a = this.md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
            d = this.md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
            c = this.md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
            b = this.md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
            a = this.md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
            d = this.md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
            c = this.md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
            b = this.md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
            a = this.md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
            d = this.md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
            c = this.md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
            b = this.md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
            a = this.md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
            d = this.md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
            c = this.md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
            b = this.md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
            a = this.md5_hh(a, b, c, d, x[i + 5], 4, -378558);
            d = this.md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
            c = this.md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
            b = this.md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
            a = this.md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
            d = this.md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
            c = this.md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
            b = this.md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
            a = this.md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
            d = this.md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
            c = this.md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
            b = this.md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
            a = this.md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
            d = this.md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
            c = this.md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
            b = this.md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
            a = this.md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
            d = this.md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
            c = this.md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
            b = this.md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
            a = this.md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
            d = this.md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
            c = this.md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
            b = this.md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
            a = this.md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
            d = this.md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
            c = this.md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
            b = this.md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
            a = this.md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
            d = this.md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
            c = this.md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
            b = this.md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
            a = this.safe_add(a, olda);
            b = this.safe_add(b, oldb);
            c = this.safe_add(c, oldc);
            d = this.safe_add(d, oldd);
        }
        return [a, b, c, d];
    };
    /*
    * These privates implement the four basic operations the algorithm uses.
    */
    MD5.prototype.md5_cmn = function (q, a, b, x, s, t) {
        return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(a, q), this.safe_add(x, t)), s), b);
    };
    MD5.prototype.md5_ff = function (a, b, c, d, x, s, t) {
        return this.md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
    };
    MD5.prototype.md5_gg = function (a, b, c, d, x, s, t) {
        return this.md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
    };
    MD5.prototype.md5_hh = function (a, b, c, d, x, s, t) {
        return this.md5_cmn(b ^ c ^ d, a, b, x, s, t);
    };
    MD5.prototype.md5_ii = function (a, b, c, d, x, s, t) {
        return this.md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
    };
    /*
    * Add integers, wrapping at 2^32. This uses 16-bit operations internally
    * to work around bugs in some JS interpreters.
    */
    MD5.prototype.safe_add = function (x, y) {
        var lsw = (x & 0xFFFF) + (y & 0xFFFF);
        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xFFFF);
    };
    /*
    * Bitwise rotate a 32-bit number to the left.
    */
    MD5.prototype.bit_rol = function (num, cnt) {
        return (num << cnt) | (num >>> (32 - cnt));
    };
    return MD5;
}());
//# sourceMappingURL=MD5.js.map
/**
 * 小游戏中显示游戏盒子页面所有接口说明：
 *
 * 1. 在bin/ultima/放入 MoreGame.js
 * 2. 在index.html 中 加入
 * <!--用户自定义顺序文件添加到这里-->
 * <!--jsfile--Custom-->
        <script type="text/javascript" src="ultima/MoreGame.min.js"></script>
 * <!--jsfile--Custom-->
 *
**/
var gameBox = /** @class */ (function () {
    function gameBox() {
    }
    /**
     * 所有广告入口都需要换（摇摆广告和抽屉广告需要根据审核版本开关关闭和打开）
     * @param appid 对应游戏的appid，没有可以传空字符串
     * @param groupList 已经获取到的游戏列表 lauch 中返回的 games_box 列表
     * @param gname 游戏名称 如： 神鲲
     */
    gameBox.showBoxPage = function (appid, groupList, gname, zorder) {
        if (zorder === void 0) { zorder = 9; }
        if (!gameBox.showBefore())
            return;
        // 显示盒子页面
        MoreGame.ShowList(groupList, gname, WriteBoxList.mWriteBox, appid, new Laya.Handler(this, gameBox.CloseBox), zorder);
        return;
    };
    // 显示之前
    gameBox.showBefore = function () {
        if (GameMain.app.mWX.gameClub != null)
            GameMain.app.mWX.gameClub.hide();
        // if (GameMain.app.gameInstance.sceneMenu != null)
        //     GameMain.app.gameInstance.sceneMenu.luntan.visible = false;
        // if (GameMain.app.gameInstance.sceneEnd != null && GameMain.app.gameInstance.sceneEnd.visible) {
        //     GameMain.app.gameInstance.sceneEnd.hideADBanner();
        // }
        // if (GameMain.app.gameInstance.sceneMenu != null && GameMain.app.gameInstance.sceneMenu.visible) {
        //     GameMain.app.gameInstance.sceneMenu.hideADBanner();
        // }
        return true;
    };
    // 关闭回调
    gameBox.CloseBox = function () {
        // if (!GameMain.app.isQun) {
        //     if (GameMain.app.gameInstance.sceneEnd != null) {
        //         if (GameMain.app.gameInstance.sceneEnd.visible) {
        //         } else {
        if (GameMain.app.mWX.gameClub != null)
            GameMain.app.mWX.gameClub.show();
        // if (GameMain.app.gameInstance.sceneMenu != null)
        //     GameMain.app.gameInstance.sceneMenu.luntan.visible = true;
        //         }
        //     } else {
        //         if (GameMain.app.mWX.gameClub != null) GameMain.app.mWX.gameClub.show();
        //         // if (GameMain.app.gameInstance.sceneMenu != null)
        //         //     GameMain.app.gameInstance.sceneMenu.luntan.visible = true;
        //     }
        // } else {
        //     GameMain.app.isQun = false;
        // }
        // if (GameMain.app.gameInstance.sceneEnd != null && GameMain.app.gameInstance.sceneEnd.visible) {
        //     GameMain.app.gameInstance.sceneEnd.showADBanner();
        // }
        // if (GameMain.app.gameInstance.sceneMenu != null && GameMain.app.gameInstance.sceneMenu.visible) {
        //     GameMain.app.gameInstance.sceneMenu.showADBanner();
        // }
    };
    return gameBox;
}());
//# sourceMappingURL=gameBox.js.map
/*
* 调整各种动画速度;
*/
var CardSpeedSetting = /** @class */ (function () {
    function CardSpeedSetting() {
    }
    //默认速度(必须填)
    CardSpeedSetting.speed0 = 150;
    //右上角牌组翻牌到堆的速度
    CardSpeedSetting.speed2 = 150;
    //右上角牌堆的牌左移的速度
    CardSpeedSetting.speed6 = 90;
    //撤回牌移动速度
    CardSpeedSetting.speed3 = 200;
    //撤回翻牌速度
    CardSpeedSetting.speed8 = 100;
    //结束牌自动移动速度
    CardSpeedSetting.speed4 = 200;
    //结束左上角牌堆的牌向左移动的速度
    CardSpeedSetting.speed5 = 200;
    //下面的牌移动速度
    CardSpeedSetting.speed1 = 150;
    //下面的牌翻牌速度（第一种情况，点击并翻牌）
    CardSpeedSetting.speed7 = 75;
    //下面的牌翻牌速度（第二种情况，拖拽后翻牌）
    CardSpeedSetting.speed9 = 150;
    //发牌速度
    CardSpeedSetting.speed10 = 300;
    return CardSpeedSetting;
}());
//# sourceMappingURL=CardSpeedSetting.js.map
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var BigStoreViewUI = /** @class */ (function (_super) {
        __extends(BigStoreViewUI, _super);
        function BigStoreViewUI() {
            return _super.call(this) || this;
        }
        BigStoreViewUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.BigStoreViewUI.uiView);
        };
        BigStoreViewUI.uiView = { "type": "Dialog", "props": { "x": 0, "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 48, "x": 228, "var": "powerBox", "skin": "local/首页/index_image_体力.png", "anchorY": 0.5 }, "child": [{ "type": "Label", "props": { "y": 14, "x": 82, "var": "powerLabel", "text": 99, "strokeColor": "#000000", "stroke": 4, "fontSize": 30, "font": "Helvetica", "color": "#ffffff", "anchorX": 0.5 } }] }, { "type": "Image", "props": { "y": 48, "x": 19, "var": "goldBox", "skin": "local/首页/index_image_金币.png", "anchorY": 0.5 }, "child": [{ "type": "Label", "props": { "y": 14, "x": 113, "var": "goldLabel", "text": 99999, "strokeColor": "#000000", "stroke": 4, "fontSize": 30, "font": "Helvetica", "color": "#ffffff", "anchorX": 0.5 } }] }, { "type": "Image", "props": { "y": 144, "var": "shopBg", "skin": "local/商店/shop_image_商店底.png" }, "child": [{ "type": "Image", "props": { "y": 997, "x": 47, "var": "btn1Bg", "skin": "local/商店/index_btn_游戏牌背选中.png" } }, { "type": "Image", "props": { "y": 997, "x": 402, "var": "btn2Bg", "skin": "local/商店/index_btn_游戏背景未选中.png" } }, { "type": "Image", "props": { "y": -23, "x": 648, "var": "btnClose", "skin": "local/商店/flip_btn_返回.png" } }, { "type": "Image", "props": { "y": 383, "x": 35, "skin": "local/商店/shop_image_手指.png" } }, { "type": "Image", "props": { "y": 178, "x": 88, "width": 590, "height": 710 }, "child": [{ "type": "List", "props": { "y": 26, "x": 25, "width": 540, "var": "shopList", "spaceY": 12, "spaceX": 12, "repeatY": 3, "repeatX": 3, "height": 683 }, "child": [{ "type": "Box", "props": { "renderType": "render" }, "child": [{ "type": "Image", "props": { "width": 172, "name": "itemBg", "height": 248 }, "child": [{ "type": "Image", "props": { "y": 5, "x": 117, "skin": "local/商店/shop_image_锁.png", "name": "itemClose" } }, { "type": "Image", "props": { "y": 202, "x": 6, "skin": "local/商店/shop_image_商品经济底.png", "name": "bottomLabel" }, "child": [{ "type": "Image", "props": { "y": 4, "x": 18, "skin": "local/商店/shop_image_商店金币.png", "name": "itemCoin" } }, { "type": "Label", "props": { "y": 5, "x": 95, "text": 99999, "strokeColor": "#000000", "stroke": 4, "name": "itemGold", "fontSize": 30, "font": "Helvetica", "color": "#ffffff", "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 5, "x": 79, "skin": "local/商店/shop_btn_正在使用.png", "name": "itemUsing", "anchorX": 0.5 } }] }] }] }] }] }] }] };
        return BigStoreViewUI;
    }(Dialog));
    ui.BigStoreViewUI = BigStoreViewUI;
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var gameIndexUI = /** @class */ (function (_super) {
            __extends(gameIndexUI, _super);
            function gameIndexUI() {
                return _super.call(this) || this;
            }
            gameIndexUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.game.gameIndexUI.uiView);
            };
            gameIndexUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Label", "props": { "y": 10, "x": 10, "top": 0, "right": 0, "left": 0, "bottom": 0, "bgColor": "#717190" } }, { "type": "Label", "props": { "var": "starttBtn", "text": "开始游戏", "fontSize": 100, "font": "SimSun", "color": "#ffffff", "centerY": 0, "centerX": 0, "bold": true, "anchorX": 0.5 } }] };
            return gameIndexUI;
        }(View));
        game.gameIndexUI = gameIndexUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var gameStoreUI = /** @class */ (function (_super) {
            __extends(gameStoreUI, _super);
            function gameStoreUI() {
                return _super.call(this) || this;
            }
            gameStoreUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.game.gameStoreUI.uiView);
            };
            gameStoreUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Label", "props": { "top": 0, "right": 0, "left": 0, "bottom": 0, "bgColor": "#000000", "alpha": 0.5 } }, { "type": "Box", "props": { "width": 650, "height": 1004, "centerY": 0, "centerX": 0 }, "child": [{ "type": "Label", "props": { "width": 650, "top": 0, "right": 0, "left": 0, "height": 847, "bottom": 0, "bgColor": "#717190" } }, { "type": "Label", "props": { "top": 20, "text": "免费获得一个", "fontSize": 40, "font": "Arial", "color": "#ffffff", "centerX": 0, "bold": false, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 310, "x": 325, "top": 310, "text": "以下请根据需要购买", "fontSize": 40, "font": "Arial", "color": "#ffffff", "centerX": 0, "bold": false, "anchorX": 0.5 } }, { "type": "Label", "props": { "var": "coinLabel", "top": 840, "text": "碎银:", "fontSize": 30, "font": "Arial", "color": "#ffffff", "centerX": -243, "bold": false, "anchorX": 0.5 } }, { "type": "Label", "props": { "wordWrap": true, "width": 384, "var": "cardDesc", "top": 367, "text": "描述:", "height": 78, "fontSize": 30, "font": "Arial", "color": "#ffffff", "centerX": 15, "bold": false } }, { "type": "Image", "props": { "y": 463, "x": 125, "width": 102, "var": "card1", "height": 152 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 102, "var": "img1", "skin": "Game/card_front_bg.png", "height": 152 } }] }, { "type": "Image", "props": { "y": 464, "x": 274, "width": 102, "var": "card2", "height": 152 }, "child": [{ "type": "Image", "props": { "width": 102, "var": "img2", "skin": "Game/card_front_bg.png", "height": 152 } }] }, { "type": "Image", "props": { "y": 464, "x": 423, "width": 102, "var": "card3", "height": 152 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 102, "var": "img3", "skin": "Game/card_front_bg.png", "height": 152 } }] }, { "type": "Image", "props": { "y": 649, "x": 423, "width": 102, "var": "card6", "height": 152 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 102, "var": "img6", "skin": "Game/card_front_bg.png", "height": 152 } }] }, { "type": "Image", "props": { "y": 647, "x": 274, "width": 102, "var": "card5", "height": 152 }, "child": [{ "type": "Image", "props": { "width": 102, "var": "img5", "skin": "Game/card_front_bg.png", "height": 152 } }] }, { "type": "Image", "props": { "y": 647, "x": 125, "width": 102, "var": "card4", "height": 152 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 102, "var": "img4", "skin": "Game/card_front_bg.png", "height": 152 } }] }, { "type": "Label", "props": { "y": 285, "right": 0, "left": 0, "height": 3, "fontSize": 40, "font": "Arial", "color": "#ffffff", "bold": false, "bgColor": "#ffffff", "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 92, "x": 70, "width": 102, "var": "card0", "height": 152 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 102, "var": "img0", "skin": "Game/card_front_bg.png", "height": 152 } }, { "type": "Label", "props": { "y": 0, "x": 140, "wordWrap": true, "width": 389, "var": "desc0", "italic": true, "height": 152, "fontSize": 35, "font": "SimSun", "color": "#ffffff" } }] }, { "type": "Label", "props": { "var": "buyBtn", "text": "购买", "fontSize": 60, "font": "Arial", "color": "#ffffff", "centerX": 0, "bottom": 120, "bold": false, "anchorX": 0.5 } }, { "type": "Label", "props": { "var": "backBtn", "text": "退出", "fontSize": 40, "font": "Arial", "color": "#ffffff", "centerX": 0, "bottom": 50, "bold": false, "anchorX": 0.5 } }, { "type": "Image", "props": { "x": 125, "width": 400, "visible": false, "var": "finishSelectFrame", "height": 260, "centerY": 0, "centerX": 0 }, "child": [{ "type": "Label", "props": { "y": -75, "x": -52, "top": 0, "right": 0, "left": 0, "bottom": 0, "bgColor": "#717190" } }, { "type": "Label", "props": { "x": 200, "var": "title", "top": 20, "text": "是否花费购买", "fontSize": 40, "font": "Arial", "color": "#ffffff", "bold": false, "anchorX": 0.5 } }, { "type": "Label", "props": { "x": 200, "var": "prop", "top": 80, "text": "XXXX", "fontSize": 40, "font": "Arial", "color": "#ffffff", "bold": true, "anchorX": 0.5 } }, { "type": "Label", "props": { "var": "detBtn", "text": "确定", "left": 60, "fontSize": 40, "font": "Arial", "color": "#ffffff", "bottom": 60, "bold": false, "anchorX": 0.5 } }, { "type": "Label", "props": { "var": "celBtn", "text": "取消", "right": 60, "fontSize": 40, "font": "Arial", "color": "#ffffff", "bottom": 60, "bold": false, "anchorX": 0.5 } }] }] }] };
            return gameStoreUI;
        }(View));
        game.gameStoreUI = gameStoreUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var gameTableUI = /** @class */ (function (_super) {
            __extends(gameTableUI, _super);
            function gameTableUI() {
                return _super.call(this) || this;
            }
            gameTableUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.game.gameTableUI.uiView);
            };
            gameTableUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Label", "props": { "var": "bg1", "top": 0, "right": 0, "left": 0, "bottom": 0, "bgColor": "#717190" } }, { "type": "Box", "props": { "var": "pokerList", "centerY": -1942, "centerX": 0 }, "child": [{ "type": "Image", "props": { "x": 300, "width": 102, "var": "Line3", "name": "Line3", "height": 152 } }, { "type": "Image", "props": { "x": 150, "width": 102, "var": "Line2", "name": "Line2", "height": 152 } }, { "type": "Image", "props": { "width": 102, "var": "Line1", "name": "Line1", "height": 152 } }] }, { "type": "Label", "props": { "x": 638.828125, "var": "btn_start", "text": "重开", "italic": true, "fontSize": 30, "font": "SimHei", "color": "#ffffff", "bottom": 100, "bold": true, "anchorX": 0.5 } }, { "type": "Label", "props": { "var": "bg2", "top": 0, "right": 0, "left": 0, "height": 150, "bgColor": "#717190" } }, { "type": "Label", "props": { "y": 50, "x": 25, "wordWrap": true, "width": 700, "var": "desc", "fontSize": 36, "font": "SimSun", "color": "#ffffff", "bold": false } }, { "type": "Box", "props": { "var": "TargetList", "centerY": -2145, "centerX": 0 }, "child": [{ "type": "Image", "props": { "width": 102, "var": "Target1", "height": 152 }, "child": [{ "type": "Image", "props": { "top": 0, "skin": "Game/card_front_bg.png", "right": 0, "left": 0, "bottom": 0 } }, { "type": "Label", "props": { "y": 64, "x": 14, "text": "下一关", "fontSize": 24, "font": "SimHei", "color": "#000000", "bold": true } }, { "type": "Image", "props": { "centerY": 0, "centerX": 0 } }] }, { "type": "Image", "props": { "x": 150, "width": 102, "var": "Target2", "height": 152 }, "child": [{ "type": "Image", "props": { "top": 0, "skin": "Game/card_front_bg.png", "right": 0, "left": 0, "bottom": 0 } }, { "type": "Label", "props": { "y": 64, "x": 14, "text": "下一关", "fontSize": 24, "font": "SimHei", "color": "#000000", "bold": true } }, { "type": "Image", "props": { "centerY": 0, "centerX": 0 } }] }, { "type": "Image", "props": { "x": 301, "width": 102, "var": "Target3", "height": 152 }, "child": [{ "type": "Image", "props": { "top": 0, "skin": "Game/card_front_bg.png", "right": 0, "left": 0, "bottom": 0 } }, { "type": "Label", "props": { "y": 64, "x": 14, "text": "下一关", "fontSize": 24, "font": "SimHei", "color": "#000000", "bold": true } }, { "type": "Image", "props": { "centerY": 0, "centerX": 0 } }] }] }, { "type": "Image", "props": { "y": 925, "width": 102, "var": "Hero", "name": "Hero", "height": 152, "centerY": 334, "centerX": 0 }, "child": [{ "type": "Image", "props": { "var": "HeroBg", "top": 0, "skin": "Game/card_front_bg.png", "right": 0, "left": 0, "bottom": 0 } }, { "type": "Label", "props": { "y": 5, "x": 5, "var": "HeroHp", "text": "血量:10/10", "fontSize": 16, "font": "SimHei", "color": "#000000", "bold": true } }, { "type": "Label", "props": { "y": 76, "x": 30, "var": "HerpName", "text": "主角", "fontSize": 20, "font": "SimHei", "color": "#000000", "bold": true } }, { "type": "Image", "props": { "var": "HeroIcon", "centerY": 0, "centerX": 0 } }, { "type": "Label", "props": { "y": 101, "x": 40, "var": "HeroCoin", "text": "0$", "fontSize": 20, "font": "SimHei", "color": "#000000", "centerX": -1, "bold": true } }, { "type": "Label", "props": { "y": 22.5, "x": 5, "var": "HeroAtk", "text": "空手:0", "fontSize": 14, "font": "SimHei", "color": "#000000", "bold": true } }, { "type": "Label", "props": { "y": 39, "x": 5, "var": "HeroAtk2", "text": "副手:0", "fontSize": 14, "font": "SimHei", "color": "#000000", "bold": true } }, { "type": "Label", "props": { "y": 55, "x": 5, "var": "HeroShield", "text": "护盾:0", "fontSize": 14, "font": "SimHei", "color": "#000000", "bold": true } }, { "type": "Box", "props": { "y": -4, "x": -115, "visible": false, "var": "HeroEffectBox" }, "child": [{ "type": "Label", "props": { "y": 20, "x": 237, "visible": false, "var": "HeroEffect1", "text": "功法1", "strokeColor": "#ffffff", "stroke": 4, "rotation": -15, "name": "HeroEffect1", "italic": true, "fontSize": 30, "color": "#e0ff00" } }, { "type": "Label", "props": { "y": 60, "x": 248, "visible": false, "var": "HeroEffect2", "text": "功法1", "strokeColor": "#ffffff", "stroke": 4, "rotation": -5, "name": "HeroEffect2", "italic": true, "fontSize": 30, "color": "#ff0400" } }, { "type": "Label", "props": { "y": 100, "x": 248, "visible": false, "var": "HeroEffect5", "text": "功法1", "strokeColor": "#ffffff", "stroke": 4, "rotation": 10, "name": "HeroEffect5", "italic": true, "fontSize": 30, "color": "#000000" } }, { "type": "Label", "props": { "y": 17, "x": 82, "visible": false, "var": "HeroEffect3", "text": "功法1", "strokeColor": "#ffffff", "stroke": 4, "rotation": 10, "name": "HeroEffect3", "italic": true, "fontSize": 30, "color": "#4700ff", "anchorX": 1 } }, { "type": "Label", "props": { "y": 58, "x": 74, "visible": false, "var": "HeroEffect4", "text": "功法1", "strokeColor": "#ffffff", "stroke": 4, "rotation": 0, "name": "HeroEffect4", "italic": true, "fontSize": 30, "color": "#471b47", "anchorX": 1 } }, { "type": "Label", "props": { "y": 97, "x": 74, "visible": false, "var": "HeroEffect6", "text": "功法1", "strokeColor": "#ffffff", "stroke": 4, "rotation": -15, "name": "HeroEffect6", "italic": true, "fontSize": 30, "color": "#bbbb78", "anchorX": 1 } }, { "type": "Label", "props": { "y": 39, "x": 182, "width": 41.5625, "visible": false, "var": "HeroSEffect6", "text": "+2", "strokeColor": "#ffffff", "stroke": 4, "rotation": -15, "name": "HeroSEffect6", "italic": false, "height": 40, "fontSize": 40, "font": "SimHei", "color": "#565ac3", "bold": true } }, { "type": "Label", "props": { "y": 14, "x": 146, "visible": false, "var": "HeroSEffect3", "text": "+2", "strokeColor": "#ffffff", "stroke": 4, "rotation": -15, "name": "HeroSEffect3", "italic": false, "fontSize": 40, "font": "SimHei", "color": "#dba453", "bold": true } }, { "type": "Label", "props": { "y": -30, "x": 162, "visible": false, "var": "HeroSEffect2", "text": "+2", "strokeColor": "#ffffff", "stroke": 4, "rotation": -15, "name": "HeroSEffect2", "italic": false, "fontSize": 40, "font": "SimHei", "color": "#ff3200", "bold": true } }, { "type": "Label", "props": { "y": -13, "x": 119, "visible": false, "var": "HeroSEffect1", "text": "+2", "strokeColor": "#ffffff", "stroke": 4, "rotation": -15, "name": "HeroSEffect1", "italic": false, "fontSize": 40, "font": "SimHei", "color": "#c1ff00", "bold": true } }, { "type": "Label", "props": { "y": 0, "x": 187, "visible": false, "var": "HeroSEffect5", "text": "+2", "strokeColor": "#ffffff", "stroke": 4, "rotation": -15, "name": "HeroSEffect5", "italic": false, "fontSize": 40, "font": "SimHei", "color": "#000000", "bold": true } }, { "type": "Label", "props": { "y": -34, "x": 208, "visible": false, "var": "HeroSEffect4", "text": "+2", "strokeColor": "#ffffff", "stroke": 4, "rotation": -15, "name": "HeroSEffect4", "italic": false, "fontSize": 40, "font": "SimHei", "color": "#773130", "bold": true } }] }] }, { "type": "Image", "props": { "y": 150, "x": 0, "width": 100, "var": "InitiativeList", "height": 100 }, "child": [{ "type": "Label", "props": { "wordWrap": true, "width": 50, "text": "主动", "height": 70, "fontSize": 30, "font": "SimHei", "color": "#ffffff", "centerY": 0, "centerX": 0, "bold": true, "align": "center" } }] }, { "type": "Image", "props": { "y": 160, "x": 650, "width": 100, "var": "PassiveList", "height": 100 }, "child": [{ "type": "Label", "props": { "wordWrap": true, "width": 50, "text": "被动", "height": 70, "fontSize": 30, "font": "SimHei", "color": "#ffffff", "centerY": 0, "centerX": 0, "bold": true, "align": "center" } }] }, { "type": "Box", "props": { "width": 750, "visible": false, "var": "propMoveBox", "height": 1334 }, "child": [{ "type": "Label", "props": { "width": 750, "var": "propMoveBg", "top": 0, "right": 0, "left": 0, "bottom": 0, "bgColor": "#000000", "alpha": 0.5 } }, { "type": "Label", "props": { "y": 2, "x": 150, "width": 3, "var": "propMoveLine", "top": 2, "bottom": 0, "bgColor": "#ffffff" } }, { "type": "Label", "props": { "y": 130, "x": 225, "wordWrap": true, "width": 466, "visible": false, "var": "propMoveTips", "text": "请选择下面一张发光的卡牌发动效果", "rotation": -5, "italic": true, "height": 180, "fontSize": 50, "color": "#ffffff" } }, { "type": "Label", "props": { "y": 334, "x": 251, "wordWrap": true, "width": 460, "visible": true, "var": "propMoveDesc", "rotation": -5, "italic": true, "height": 200, "fontSize": 40, "font": "SimHei", "color": "#ffffff" } }] }, { "type": "Label", "props": { "y": 1098, "x": 721, "width": 0, "visible": false, "var": "propMoveCancel", "text": "取消选择", "rotation": -5, "italic": true, "fontSize": 40, "font": "Helvetica", "color": "#ffffff", "anchorX": 1 } }] };
            return gameTableUI;
        }(View));
        game.gameTableUI = gameTableUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var PhysicalPowerViewUI = /** @class */ (function (_super) {
        __extends(PhysicalPowerViewUI, _super);
        function PhysicalPowerViewUI() {
            return _super.call(this) || this;
        }
        PhysicalPowerViewUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.PhysicalPowerViewUI.uiView);
        };
        PhysicalPowerViewUI.uiView = { "type": "Dialog", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "x": 0, "skin": "local/交互/pop_image_体力商店底.png", "centerY": 0 }, "child": [{ "type": "Image", "props": { "y": 332, "x": 275, "skin": "local/交互/pop_image_1点体力.png" } }, { "type": "Image", "props": { "y": 654, "x": 143, "var": "shareBtn", "skin": "local/交互/pop_btn_分享.png" } }, { "type": "Image", "props": { "y": 654, "x": 287, "var": "watchTvBtn", "skin": "local/交互/pop_btn_看视频.png" } }, { "type": "Image", "props": { "y": 202, "x": 130, "skin": "local/交互/pop_image_体力小.png" }, "child": [{ "type": "Label", "props": { "y": 6, "x": 63, "var": "powerLabel", "strokeColor": "#000000", "stroke": 5, "fontSize": 36, "font": "Helvetica", "color": "#ffffff" } }] }, { "type": "Image", "props": { "y": 587, "x": 244, "skin": "local/交互/pop_txt_立即获得1点体力.png" } }, { "type": "Image", "props": { "y": 211, "x": 333, "skin": "local/交互/pop_txt_补满体力所需时间.png" } }, { "type": "Image", "props": { "y": 611, "x": 548, "skin": "local/交互/pop_image_3倍.png" } }, { "type": "Image", "props": { "y": -27, "x": 648, "var": "btnClose", "skin": "local/交互/pop_btn_返回.png" } }, { "type": "Image", "props": { "y": 271, "x": 453, "var": "recoverImg", "skin": "local/交互/pop_image_时间倒计时底.png" }, "child": [{ "type": "Label", "props": { "y": 4, "x": 83, "var": "recoverTime", "strokeColor": "#283042", "stroke": 4, "fontSize": 36, "color": "#ffffff", "anchorX": 0.5 } }] }] }] };
        return PhysicalPowerViewUI;
    }(Dialog));
    ui.PhysicalPowerViewUI = PhysicalPowerViewUI;
})(ui || (ui = {}));
(function (ui) {
    var poker;
    (function (poker) {
        var challengeUI = /** @class */ (function (_super) {
            __extends(challengeUI, _super);
            function challengeUI() {
                return _super.call(this) || this;
            }
            challengeUI.prototype.createChildren = function () {
                View.regComponent("Text", laya.display.Text);
                _super.prototype.createChildren.call(this);
                this.createView(ui.poker.challengeUI.uiView);
            };
            challengeUI.uiView = { "type": "Dialog", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Button", "props": { "y": -50, "x": 5, "width": 765, "skin": "UI/button.png", "height": 1402, "alpha": 0 } }, { "type": "Sprite", "props": { "y": 366, "x": 33, "width": 708, "height": 514 }, "child": [{ "type": "Image", "props": { "y": -216, "x": -8, "width": 716, "skin": "UI/introduction_play_ruban.png", "height": 916, "sizeGrid": "50,100,50,100" } }, { "type": "Image", "props": { "y": -191, "x": 29, "width": 638, "skin": "UI/bg.png", "height": 884, "sizeGrid": "32,9,6,12" }, "child": [{ "type": "Rect", "props": { "y": 340, "x": 0, "width": 638, "lineWidth": 1, "height": 546, "fillColor": "#2677a4" } }, { "type": "Image", "props": { "y": -1, "x": 566, "var": "CloseButton", "skin": "UI/anniu_guanbi.png" } }] }] }, { "type": "List", "props": { "y": 524, "x": 98, "width": 602, "var": "weekName", "spaceY": 10, "spaceX": 35, "repeatY": 1, "repeatX": 7, "height": 370 }, "child": [{ "type": "Box", "props": { "name": "render" }, "child": [{ "type": "Label", "props": { "width": 50, "text": "1", "strokeColor": "#346ebb", "stroke": 2, "name": "text", "height": 50, "fontSize": 30, "color": "#346ebb", "centerY": 0, "centerX": 0 } }] }] }, { "type": "List", "props": { "y": 591, "x": 106, "width": 602, "var": "days", "spaceY": 10, "spaceX": 35, "repeatY": 6, "repeatX": 7, "height": 360 }, "child": [{ "type": "Box", "props": { "name": "render" }, "child": [{ "type": "Label", "props": { "y": 0, "x": 0, "width": 50, "text": "1", "strokeColor": "#346ebb", "stroke": 2, "name": "text", "height": 50, "fontSize": 35, "color": "#675f0e", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Image", "props": { "y": -6, "x": 2, "width": 50, "skin": "UI/Checkmark.png", "scaleY": 0.8, "scaleX": 0.8, "name": "doneImg", "height": 50, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": -5, "x": 2, "width": 50, "skin": "UI/select.png", "name": "selectIMG", "height": 50, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": -5, "x": 2, "width": 50, "skin": "UI/select.png", "name": "ClickIMG", "height": 50, "anchorY": 0.5, "anchorX": 0.5, "alpha": 0 } }] }] }, { "type": "Button", "props": { "y": 952, "x": 258, "width": 232, "var": "startChallenge", "skin": "UI/button.png", "name": "startChallenge", "labelStrokeColor": "#346ebb", "labelStroke": 2, "labelSize": 30, "labelFont": "SimHei", "label": "开始游戏", "height": 71 } }, { "type": "Text", "props": { "y": 422, "x": 297, "width": 168, "var": "monthText", "text": "十一月", "height": 70, "fontSize": 50, "font": "Microsoft YaHei", "color": "#346ebb", "bold": true, "align": "center" } }, { "type": "Button", "props": { "y": 438, "x": 82, "width": 68, "var": "preMonth", "strokeColors": "#346ebb", "skin": "UI/button.png", "labelStrokeColor": "#346ebb", "labelStroke": 2, "labelSize": 30, "label": "<", "height": 46 } }, { "type": "Button", "props": { "y": 436, "x": 611, "width": 68, "var": "nextMonth", "skin": "UI/button.png", "labelStrokeColor": "#346ebb", "labelStroke": 2, "labelSize": 30, "label": ">", "height": 46 } }, { "type": "Text", "props": { "y": 294, "x": 109, "width": 345, "var": "today", "text": "2018年11月8日", "height": 38, "fontSize": 55, "font": "Microsoft YaHei", "color": "#346ebb", "align": "center" } }, { "type": "Image", "props": { "y": -1, "x": -5, "width": 713, "var": "CloseButton2", "skin": "UI/anniu_guanbi.png", "height": 176, "alpha": 0 } }] };
            return challengeUI;
        }(Dialog));
        poker.challengeUI = challengeUI;
    })(poker = ui.poker || (ui.poker = {}));
})(ui || (ui = {}));
(function (ui) {
    var poker;
    (function (poker) {
        var ConfirmAutoPlayUI = /** @class */ (function (_super) {
            __extends(ConfirmAutoPlayUI, _super);
            function ConfirmAutoPlayUI() {
                return _super.call(this) || this;
            }
            ConfirmAutoPlayUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.poker.ConfirmAutoPlayUI.uiView);
            };
            ConfirmAutoPlayUI.uiView = { "type": "Dialog", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Label", "props": { "y": -180, "x": -25, "width": 800, "text": "label", "height": 1800, "bgColor": "#000000", "alpha": 0.7 } }, { "type": "Sprite", "props": { "y": 103, "x": 0, "width": 750 }, "child": [{ "type": "Image", "props": { "y": 79, "x": 10, "skin": "local/结果页/result_title_恭喜.png" } }, { "type": "Image", "props": { "y": 554, "x": 167, "skin": "local/结果页/result_txt_您已解开所有卡牌.png" } }, { "type": "Image", "props": { "y": 262, "x": 632, "var": "CloseBTN", "skin": "local/结果页/pop_btn_返回.png" } }, { "type": "Image", "props": { "y": 722, "x": 161, "var": "shareWechat", "skin": "local/结果页/result_btn_自动收牌.png", "name": "shareWechat" } }] }] };
            return ConfirmAutoPlayUI;
        }(Dialog));
        poker.ConfirmAutoPlayUI = ConfirmAutoPlayUI;
    })(poker = ui.poker || (ui.poker = {}));
})(ui || (ui = {}));
(function (ui) {
    var poker;
    (function (poker) {
        var ConfirmShowCardUI = /** @class */ (function (_super) {
            __extends(ConfirmShowCardUI, _super);
            function ConfirmShowCardUI() {
                return _super.call(this) || this;
            }
            ConfirmShowCardUI.prototype.createChildren = function () {
                View.regComponent("Text", laya.display.Text);
                _super.prototype.createChildren.call(this);
                this.createView(ui.poker.ConfirmShowCardUI.uiView);
            };
            ConfirmShowCardUI.uiView = { "type": "Dialog", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Sprite", "props": { "y": 79, "x": 212 }, "child": [{ "type": "Image", "props": { "y": 275, "x": -160, "width": 647, "skin": "UI/chunbai_diban.png", "height": 472, "sizeGrid": "36,152,37,142" } }, { "type": "Text", "props": { "y": 432, "x": -72, "width": 411, "text": "使用道具,将所有暗牌解锁？", "height": 114, "fontSize": 40, "font": "SimHei", "color": "#d28908", "bold": true } }, { "type": "Button", "props": { "y": 582, "x": -13, "width": 169, "var": "GoldUse", "skin": "UI/button.png", "name": "GoldUse", "labelSize": 30, "labelFont": "SimHei", "labelColors": "#346ebb", "labelBold": true, "label": "10金币使用", "height": 59 } }, { "type": "Image", "props": { "y": 299, "x": 364, "var": "CloseBTN", "skin": "UI/anniu_guanbi.png" } }, { "type": "Button", "props": { "y": 582, "x": 180, "width": 169, "var": "videoUse", "skin": "UI/button.png", "name": "videoUse", "labelSize": 30, "labelFont": "SimHei", "labelColors": "#346ebb", "labelBold": true, "label": "看视频使用", "height": 59 } }] }] };
            return ConfirmShowCardUI;
        }(Dialog));
        poker.ConfirmShowCardUI = ConfirmShowCardUI;
    })(poker = ui.poker || (ui.poker = {}));
})(ui || (ui = {}));
(function (ui) {
    var poker;
    (function (poker) {
        var gameBottomUI = /** @class */ (function (_super) {
            __extends(gameBottomUI, _super);
            function gameBottomUI() {
                return _super.call(this) || this;
            }
            gameBottomUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.poker.gameBottomUI.uiView);
            };
            gameBottomUI.uiView = { "type": "Dialog", "props": { "width": 750, "height": 148, "centerX": 0, "bottom": 0 }, "child": [{ "type": "Image", "props": { "skin": "local/游戏页/home_bth_bg.png" } }, { "type": "Sprite", "props": { "y": -85, "x": 51, "name": "newgame" }, "child": [{ "type": "Image", "props": { "y": 100, "x": 0, "var": "showPopup", "skin": "local/游戏页/game_btn_新游戏1.png", "name": "showPopup" } }] }, { "type": "Sprite", "props": { "y": -59, "x": -224, "width": 100, "visible": false, "name": "auto" }, "child": [{ "type": "Image", "props": { "y": 86, "var": "autoPlay", "skin": "UI/auto.png", "name": "autoPlay" } }, { "type": "Label", "props": { "y": 191, "var": "autoPlayText", "text": "自动", "fontSize": 25, "font": "SimHei", "color": "#348ff8", "centerX": 0, "bold": true, "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Sprite", "props": { "y": -85, "x": 601, "name": "back" }, "child": [{ "type": "Image", "props": { "y": 100, "x": 0, "var": "back", "skin": "local/游戏页/game_btn_回退.png", "name": "back" } }] }, { "type": "Sprite", "props": { "y": -85, "x": 326, "name": "tips" }, "child": [{ "type": "Image", "props": { "y": 100, "x": 0, "var": "showTips", "skin": "local/游戏页/game_btn_提示.png" } }] }, { "type": "Sprite", "props": { "y": -71.5, "x": 883, "name": "showHiddenCard" }, "child": [{ "type": "Image", "props": { "y": 100, "x": 0, "var": "showHiddenCard", "skin": "UI/mingpai.png", "name": "showHiddenCard" } }] }, { "type": "Sprite", "props": { "y": -71.5, "x": 1049, "name": "rules" }, "child": [{ "type": "Image", "props": { "y": 100, "x": 0, "var": "rules", "skin": "UI/rule.png", "name": "rules" } }] }, { "type": "Sprite", "props": { "y": -85, "x": 189, "name": "set" }, "child": [{ "type": "Image", "props": { "y": 100, "x": 0, "var": "set", "skin": "local/游戏页/game_btn_声音关.png", "name": "set" } }] }, { "type": "Sprite", "props": { "y": -85, "x": 455, "name": "size" }, "child": [{ "type": "Image", "props": { "y": 100, "x": 0, "var": "size", "skin": "local/游戏页/game_btn_纸牌大小.png", "name": "size" } }] }] };
            return gameBottomUI;
        }(Dialog));
        poker.gameBottomUI = gameBottomUI;
    })(poker = ui.poker || (ui.poker = {}));
})(ui || (ui = {}));
(function (ui) {
    var poker;
    (function (poker) {
        var gamePopupUI = /** @class */ (function (_super) {
            __extends(gamePopupUI, _super);
            function gamePopupUI() {
                return _super.call(this) || this;
            }
            gamePopupUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.poker.gamePopupUI.uiView);
            };
            gamePopupUI.uiView = { "type": "Dialog", "props": { "width": 750, "height": 1334, "centerX": 0, "bottom": 100 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 750, "var": "CloseBTN", "skin": "UI/bg_tab.png", "name": "CloseBTN", "height": 1334, "alpha": 0, "sizeGrid": "25,27,20,26" } }, { "type": "Sprite", "props": { "y": 15, "x": -3, "var": "endGame" }, "child": [{ "type": "Image", "props": { "y": -8, "x": 0, "width": 204, "var": "EndGame", "skin": "UI/Popsbtn.png", "height": 79 } }, { "type": "Label", "props": { "y": 9, "x": 52, "text": "结束游戏", "fontSize": 25, "font": "Microsoft YaHei", "color": "#346ebb", "bold": true } }] }, { "type": "Sprite", "props": { "y": 1205, "x": 20, "var": "reTry", "name": "reTry" }, "child": [{ "type": "Image", "props": { "y": -8, "x": 0, "var": "RETRY", "skin": "local/游戏页/game_btn_重试.png" } }] }, { "type": "Sprite", "props": { "y": 1099, "x": 20, "var": "newGame", "name": "newGame" }, "child": [{ "type": "Image", "props": { "y": -8, "x": 0, "var": "NEWGame", "skin": "local/游戏页/game_btn_返回首页.png" } }] }, { "type": "Sprite", "props": { "y": 997, "x": 411, "width": 325, "var": "cardSize", "name": "cardSize", "height": 277 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "var": "CARDSIZE", "skin": "local/游戏页/pop_btn_选择纸牌大小.png" }, "child": [{ "type": "Image", "props": { "y": 74, "x": 179, "var": "bigK", "skin": "UI/game_image_bigK.png" } }, { "type": "Image", "props": { "y": 58, "x": 163, "width": 134, "var": "bigKMask", "skin": "UI/game_image_bottomLight.png", "height": 184 } }, { "type": "Image", "props": { "y": 74, "x": 41, "var": "smallK", "skin": "UI/game_image_smallK.png" } }, { "type": "Image", "props": { "y": 58, "x": 25, "width": 134, "var": "smallKMask", "skin": "UI/game_image_bottomLight.png", "height": 184 } }] }] }, { "type": "Image", "props": { "y": 1109, "x": 15, "var": "jump", "skin": "local/游戏页/game_txt_重试三次可以跳关.png" } }, { "type": "Image", "props": { "y": 985, "x": 20, "var": "back", "skin": "local/游戏页/game_btn_返回首页.png" } }] };
            return gamePopupUI;
        }(Dialog));
        poker.gamePopupUI = gamePopupUI;
    })(poker = ui.poker || (ui.poker = {}));
})(ui || (ui = {}));
(function (ui) {
    var poker;
    (function (poker) {
        var gameTopUI = /** @class */ (function (_super) {
            __extends(gameTopUI, _super);
            function gameTopUI() {
                return _super.call(this) || this;
            }
            gameTopUI.prototype.createChildren = function () {
                View.regComponent("Text", laya.display.Text);
                _super.prototype.createChildren.call(this);
                this.createView(ui.poker.gameTopUI.uiView);
            };
            gameTopUI.uiView = { "type": "Dialog", "props": { "y": 0, "width": 750, "top": 0, "height": 40, "centerX": 0 }, "child": [{ "type": "Image", "props": { "y": -9, "x": 282, "skin": "local/结果页/result_image_时间.png" } }, { "type": "Text", "props": { "y": 1, "x": 347, "var": "TimeCount", "text": "01:11", "strokeColor": "#252E42", "stroke": 5, "name": "TimeCount", "fontSize": 36, "font": "Helvetica", "color": "#ffffff" } }, { "type": "Sprite", "props": { "y": -633, "x": 415, "visible": false, "scaleY": 0.7, "scaleX": 0.7, "name": "challenge" }, "child": [{ "type": "Image", "props": { "width": 268, "var": "challenge", "skin": "UI/Popsbtn.png", "height": 143 }, "child": [{ "type": "Label", "props": { "width": 180, "text": "每日挑战", "height": 84, "fontSize": 45, "font": "Microsoft YaHei", "color": "#346ebb", "centerY": 0, "centerX": 0, "bold": true, "anchorY": 0.5, "anchorX": 0.5 } }] }] }, { "type": "Sprite", "props": { "y": -633, "x": 572, "visible": false, "scaleY": 0.7, "scaleX": 0.7, "name": "setting" }, "child": [{ "type": "Image", "props": { "width": 268, "var": "setting", "skin": "UI/Popsbtn.png", "height": 143 }, "child": [{ "type": "Label", "props": { "width": 100, "text": "设置", "height": 84, "fontSize": 50, "font": "Microsoft YaHei", "color": "#346ebb", "centerY": 0, "centerX": 0, "bold": true, "anchorY": 0.5, "anchorX": 0.5 } }] }] }, { "type": "Sprite", "props": { "y": -633, "x": 730, "visible": false, "scaleY": 0.7, "scaleX": 0.7, "name": "shop" }, "child": [{ "type": "Image", "props": { "width": 268, "var": "shop", "skin": "UI/Popsbtn.png", "height": 143 }, "child": [{ "type": "Label", "props": { "width": 100, "text": "商城", "height": 84, "fontSize": 50, "font": "Microsoft YaHei", "color": "#346ebb", "centerY": 0, "centerX": 0, "bold": true, "anchorY": 0.5, "anchorX": 0.5 } }] }] }, { "type": "Box", "props": { "y": -639, "x": 905, "visible": false, "var": "money" }, "child": [{ "type": "Text", "props": { "y": 39, "x": 134, "width": 116, "var": "GoldText", "text": "999999", "name": "GoldText", "height": 42, "fontSize": 33, "font": "Microsoft YaHei", "color": "#ffffff" } }, { "type": "Text", "props": { "y": 47, "x": 109, "text": "X", "name": "x", "fontSize": 23, "font": "Microsoft YaHei", "color": "#ffffff", "bold": true } }, { "type": "Image", "props": { "skin": "UI/gold.png" } }] }] };
            return gameTopUI;
        }(Dialog));
        poker.gameTopUI = gameTopUI;
    })(poker = ui.poker || (ui.poker = {}));
})(ui || (ui = {}));
(function (ui) {
    var poker;
    (function (poker) {
        var pokerTableUI = /** @class */ (function (_super) {
            __extends(pokerTableUI, _super);
            function pokerTableUI() {
                return _super.call(this) || this;
            }
            pokerTableUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.poker.pokerTableUI.uiView);
            };
            pokerTableUI.uiView = { "type": "View", "props": { "x": 0, "width": 750, "top": 0, "height": 1334 }, "child": [{ "type": "Box", "props": { "y": 1334, "x": 375, "width": 750, "var": "BackGround", "name": "BackGround", "height": 1700, "anchorY": 1, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 750, "var": "BGImg", "height": 1700 } }, { "type": "Image", "props": { "y": 1000, "x": 375, "var": "model", "skin": "new18/game_image_cutlevel.png", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "FontClip", "props": { "y": 5, "x": 142, "var": "num", "value": "1", "skin": "new18/num1.png", "sheet": "0123456789", "anchorX": 0.5 } }, { "type": "Image", "props": { "y": -5, "x": -5, "var": "lightmodel", "skin": "new18/game_image_cutlevel_light.png", "alpha": 1 } }, { "type": "FontClip", "props": { "y": 5, "x": 142, "var": "lightnum", "value": "1", "skin": "new18/num2.png", "sheet": "0123456789", "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 200, "x": 61, "width": 162, "var": "mingpai", "height": 162 }, "child": [{ "type": "Image", "props": { "y": 81, "x": 81, "var": "taiji", "skin": "local/游戏页/pop_image_大风车.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 11, "x": 11, "skin": "local/游戏页/pop_pro_跳过.png" } }, { "type": "Image", "props": { "y": 213, "x": -62, "skin": "new19/pop_txt_1.png" } }] }] }] }, { "type": "Sprite", "props": { "y": 334, "x": 63, "width": 656, "name": "PokerTable", "height": 627 }, "child": [{ "type": "Sprite", "props": { "y": 32, "x": -48, "var": "Line1", "scaleY": 1, "scaleX": 1, "name": "Line1" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 98, "skin": "UI/img_card_c01.png", "height": 160 } }] }, { "type": "Sprite", "props": { "y": 32, "x": 56, "var": "Line2", "scaleY": 1, "scaleX": 1, "name": "Line2" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 98, "skin": "UI/img_card_c01.png", "height": 160 } }] }, { "type": "Sprite", "props": { "y": 32, "x": 160, "var": "Line3", "scaleY": 1, "scaleX": 1, "name": "Line3" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 98, "skin": "UI/img_card_c01.png", "height": 160 } }] }, { "type": "Sprite", "props": { "y": 32, "x": 264, "var": "Line4", "scaleY": 1, "scaleX": 1, "name": "Line4" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 98, "skin": "UI/img_card_c01.png", "height": 160 } }] }, { "type": "Sprite", "props": { "y": 32, "x": 367, "var": "Line5", "scaleY": 1, "scaleX": 1, "name": "Line5" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 98, "skin": "UI/img_card_c01.png", "height": 160 } }] }, { "type": "Sprite", "props": { "y": 32, "x": 471, "var": "Line6", "scaleY": 1, "scaleX": 1, "name": "Line6" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 98, "skin": "UI/img_card_c01.png", "height": 160 } }] }, { "type": "Sprite", "props": { "y": 32, "x": 575, "var": "Line7", "scaleY": 1, "scaleX": 1, "name": "Line7" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 98, "skin": "UI/img_card_c01.png", "height": 160 } }] }, { "type": "Sprite", "props": { "y": -141, "x": 388, "var": "ThreeCard", "scaleY": 1, "scaleX": 1, "name": "ThreeCard" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 98, "skin": "UI/img_card_c01.png", "height": 160 } }] }, { "type": "Sprite", "props": { "y": -141, "x": 575, "var": "StartCard", "scaleY": 1, "scaleX": 1, "name": "StartCard" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 98, "skin": "UI/img_card_c01.png", "height": 160 } }] }, { "type": "Sprite", "props": { "y": -141, "x": -48, "var": "Deck1", "scaleY": 1, "scaleX": 1, "name": "Deck1" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 98, "skin": "UI/img_card_c01.png", "height": 160 } }] }, { "type": "Sprite", "props": { "y": -141, "x": 56, "var": "Deck2", "scaleY": 1, "scaleX": 1, "name": "Deck2" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 98, "skin": "UI/img_card_c01.png", "height": 160 } }] }, { "type": "Sprite", "props": { "y": -141, "x": 160, "var": "Deck3", "scaleY": 1, "scaleX": 1, "name": "Deck3" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 98, "skin": "UI/img_card_c01.png", "height": 160 } }] }, { "type": "Sprite", "props": { "y": -141, "x": 264, "var": "Deck4", "scaleY": 1, "scaleX": 1, "name": "Deck4" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 98, "skin": "UI/img_card_c01.png", "height": 160 } }] }, { "type": "Sprite", "props": { "y": -699, "x": -436, "var": "tutorialMask", "name": "tutorialMask", "mouseThrough": true, "mouseEnabled": true, "hitTestPrior": true, "alpha": 0.5 }, "child": [{ "type": "Rect", "props": { "y": 0, "x": 0, "width": 1380, "lineWidth": 0, "lineColor": "#000000", "height": 2153, "fillColor": "#000000" } }] }, { "type": "Sprite", "props": { "y": 0, "x": 0, "scaleY": 1, "scaleX": 1, "name": "tutorialCardSpr" }, "child": [{ "type": "Sprite", "props": { "var": "tutorialCardSpr1", "name": "tutorialCardSpr1" } }] }, { "type": "Sprite", "props": { "y": 10, "x": 10, "scaleY": 1, "scaleX": 1, "name": "tutorialCardSpr" }, "child": [{ "type": "Sprite", "props": { "var": "tutorialCardSpr2", "name": "tutorialCardSpr2" } }] }, { "type": "Sprite", "props": { "y": -126, "x": 3, "var": "LineMove", "scaleY": 1, "scaleX": 1, "name": "LineMove", "mouseThrough": false, "mouseEnabled": false, "hitTestPrior": false } }, { "type": "Sprite", "props": { "y": 0, "x": 0, "var": "LineTips", "scaleY": 1, "scaleX": 1, "name": "LineTips", "mouseThrough": false, "mouseEnabled": false, "hitTestPrior": false, "alpha": 0.8 } }, { "type": "Sprite", "props": { "y": -141, "x": 575, "var": "StartCardTip", "scaleY": 1, "scaleX": 1, "name": "StartCardTip", "mouseThrough": false, "mouseEnabled": false, "hitTestPrior": false, "alpha": 0.8 } }] }, { "type": "Sprite", "props": { "y": 1069, "x": 0, "width": 750, "name": "message", "mouseThrough": false, "mouseEnabled": false, "hitTestPrior": false, "height": 50 }, "child": [{ "type": "Image", "props": { "y": -93, "x": 374, "width": 125, "var": "messageBg", "skin": "new18/bg.png", "height": 66, "anchorX": 0.5, "alpha": 0, "sizeGrid": "10,10,10,10" } }, { "type": "Label", "props": { "y": -80, "x": 375, "var": "message", "text": "这是一条提示信息", "name": "message", "fontSize": 40, "font": "SimHei", "color": "#ffffff", "anchorX": 0.5, "alpha": 0 } }] }, { "type": "Image", "props": { "y": 1056, "x": 161, "var": "shoupai", "skin": "local/newBg/shou.png", "bottom": 150 } }] };
            return pokerTableUI;
        }(View));
        poker.pokerTableUI = pokerTableUI;
    })(poker = ui.poker || (ui.poker = {}));
})(ui || (ui = {}));
(function (ui) {
    var poker;
    (function (poker) {
        var settingPopupUI = /** @class */ (function (_super) {
            __extends(settingPopupUI, _super);
            function settingPopupUI() {
                return _super.call(this) || this;
            }
            settingPopupUI.prototype.createChildren = function () {
                View.regComponent("Text", laya.display.Text);
                _super.prototype.createChildren.call(this);
                this.createView(ui.poker.settingPopupUI.uiView);
            };
            settingPopupUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Sprite", "props": { "y": 256, "x": 87 }, "child": [{ "type": "Image", "props": { "y": 418, "x": 288, "skin": "UI/pop_image_1.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 394, "x": 406, "width": 141, "var": "timerBTN", "skin": "UI/Popsbtn.png", "height": 61, "alpha": 0 } }, { "type": "Image", "props": { "y": 264, "x": 406, "width": 141, "var": "lefthandBTN", "skin": "UI/Popsbtn.png", "height": 61, "alpha": 0 } }, { "type": "Image", "props": { "y": 136, "x": 406, "width": 141, "var": "soundBTNImg", "skin": "UI/Popsbtn.png", "height": 61, "alpha": 0 } }, { "type": "Image", "props": { "y": 522, "x": 406, "width": 141, "var": "ThreeCardBTN", "skin": "UI/Popsbtn.png", "height": 61, "alpha": 0 } }, { "type": "Image", "props": { "y": 653, "x": 406, "width": 141, "var": "VigasBTN", "skin": "UI/Popsbtn.png", "height": 61, "alpha": 0 } }, { "type": "Image", "props": { "y": 21, "x": 537, "var": "CloseBTN", "skin": "UI/btn_0.png" } }, { "type": "Image", "props": { "y": -379, "x": -78, "width": 524, "var": "CloseBTN2", "skin": "UI/anniu_guanbi.png", "scaleY": 0.5, "scaleX": 0.5, "height": 74, "alpha": 0 } }, { "type": "Image", "props": { "y": 535, "x": 286, "var": "wen1", "skin": "UI/pop_image_wen.png" } }, { "type": "Image", "props": { "y": 665, "x": 286, "var": "wen2", "skin": "UI/pop_image_wen.png" } }, { "type": "Sprite", "props": { "y": 394, "x": 406, "var": "timerSwitch", "name": "switch" }, "child": [{ "type": "Image", "props": { "skin": "UI/1.png", "name": "state1" } }, { "type": "Image", "props": { "skin": "UI/2.png", "name": "state2" } }, { "type": "Image", "props": { "skin": "UI/3.png", "name": "state3" } }] }, { "type": "Sprite", "props": { "y": 264, "x": 406, "var": "lefthandSwitch", "name": "switch" }, "child": [{ "type": "Image", "props": { "skin": "UI/1.png", "name": "state1" } }, { "type": "Image", "props": { "skin": "UI/2.png", "name": "state2" } }, { "type": "Image", "props": { "skin": "UI/3.png", "name": "state3" } }] }, { "type": "Sprite", "props": { "y": 522, "x": 406, "var": "threecardSwitch", "name": "switch" }, "child": [{ "type": "Image", "props": { "skin": "UI/1.png", "name": "state1" } }, { "type": "Image", "props": { "skin": "UI/2.png", "name": "state2" } }, { "type": "Image", "props": { "skin": "UI/3.png", "name": "state3" } }] }, { "type": "Sprite", "props": { "y": 653, "x": 406, "var": "vigasSwitch", "name": "switch" }, "child": [{ "type": "Image", "props": { "skin": "UI/1.png", "name": "state1" } }, { "type": "Image", "props": { "skin": "UI/2.png", "name": "state2" } }, { "type": "Image", "props": { "skin": "UI/3.png", "name": "state3" } }] }, { "type": "Sprite", "props": { "y": 136, "x": 406, "var": "soundSwitch", "name": "switch" }, "child": [{ "type": "Image", "props": { "skin": "UI/1.png", "name": "state1" } }, { "type": "Image", "props": { "skin": "UI/2.png", "name": "state2" } }, { "type": "Image", "props": { "skin": "UI/3.png", "name": "state3" } }] }, { "type": "Image", "props": { "y": 808, "x": -12, "var": "wen22", "skin": "UI/pop_image_detail1.png" } }, { "type": "Image", "props": { "y": 808, "x": -12, "var": "wen11", "skin": "UI/pop_image_detail2.png" } }] }, { "type": "Text", "props": { "y": 542, "x": 890, "var": "lefthandText", "text": "左手习惯", "fontSize": 30, "font": "SimHei", "color": "#5077aa" } }, { "type": "Text", "props": { "y": 577, "x": 890, "var": "timerText", "text": "计时器", "fontSize": 30, "font": "SimHei", "color": "#5077aa" } }, { "type": "Text", "props": { "y": 612, "x": 890, "var": "threecardOnce", "text": "一次发三张", "fontSize": 30, "font": "SimHei", "color": "#5077aa" } }, { "type": "Text", "props": { "y": 648, "x": 889, "var": "lasvigasMode", "text": "维加斯模式", "fontSize": 30, "font": "SimHei", "color": "#5077aa" } }, { "type": "Text", "props": { "y": 507, "x": 892, "var": "soundText", "text": "音效", "height": 30, "fontSize": 30, "font": "SimHei", "color": "#5077aa" } }] };
            return settingPopupUI;
        }(View));
        poker.settingPopupUI = settingPopupUI;
    })(poker = ui.poker || (ui.poker = {}));
})(ui || (ui = {}));
(function (ui) {
    var poker;
    (function (poker) {
        var ShopUI = /** @class */ (function (_super) {
            __extends(ShopUI, _super);
            function ShopUI() {
                return _super.call(this) || this;
            }
            ShopUI.prototype.createChildren = function () {
                View.regComponent("Text", laya.display.Text);
                _super.prototype.createChildren.call(this);
                this.createView(ui.poker.ShopUI.uiView);
            };
            ShopUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Sprite", "props": { "y": 71, "x": 3 }, "child": [{ "type": "Image", "props": { "y": -155, "x": -133, "width": 1000, "skin": "UI/img_bg_bluefelt_thumb.png", "height": 2000 } }] }, { "type": "Sprite", "props": { "y": 241, "x": -25 }, "child": [{ "type": "Image", "props": { "y": -16, "x": 69, "width": 670, "skin": "UI/chunbai_diban.png", "height": 1089, "sizeGrid": "36,152,37,142" } }, { "type": "Tab", "props": { "y": 14, "x": 136, "var": "tab", "skin": "UI/tab.png", "selectedIndex": 0, "scaleY": 0.85, "scaleX": 0.85, "name": "tab", "labels": "背景,牌面,牌背", "labelSize": 36, "labelPadding": "0", "labelFont": "SimHei", "labelColors": "#ffffff,#ffffff,#ffffff" } }, { "type": "Label", "props": { "y": -53, "x": 54, "var": "BackBTN", "text": "< 返回", "name": "BackBTN", "fontSize": 40, "font": "Microsoft YaHei", "color": "#a8dff9" } }, { "type": "Label", "props": { "y": -53, "x": 54, "var": "CloseBTN", "text": "< 返回", "name": "CloseBTN", "fontSize": 40, "font": "Microsoft YaHei", "color": "#a8dff9" } }] }, { "type": "Text", "props": { "y": 175, "x": 316, "text": "商城", "strokeColor": "#7d97ea", "stroke": 1, "fontSize": 50, "font": "SimHei", "color": "#ffffff" } }, { "type": "ViewStack", "props": { "y": 335, "x": 67, "width": 690, "var": "viewstack", "selectedIndex": 0, "name": "viewstack", "height": 981 }, "child": [{ "type": "List", "props": { "y": -10, "x": 39, "width": 617, "var": "listBG", "vScrollBarSkin": "UI/vscroll.png", "spaceX": 3, "name": "item0", "height": 933 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 274, "renderType": "render", "name": "render", "height": 318 }, "child": [{ "type": "Rect", "props": { "y": 259, "x": -2, "width": 273, "lineWidth": 1, "height": 51, "fillColor": "#273755" } }, { "type": "Image", "props": { "y": 0, "x": -2, "width": 909, "skin": "UI/Bg_6.png", "scaleY": 0.3, "scaleX": 0.3, "name": "icon1", "height": 881 } }, { "type": "Image", "props": { "y": 56, "x": 58, "skin": "UI/cardskin1.png", "scaleY": 0.6, "scaleX": 0.6, "name": "cardShow" } }, { "type": "Button", "props": { "y": 209, "x": 3, "width": 125, "skin": "UI/btn_3.png", "name": "buy", "labelSize": 25, "labelFont": "SimHei", "labelColors": "#ffffff", "label": "1元", "height": 43 } }, { "type": "Button", "props": { "y": 209, "x": 133, "width": 131, "skin": "UI/btn_3.png", "name": "try", "labelSize": 25, "labelFont": "SimHei", "labelColors": "#ffffff", "label": "体验", "height": 43 } }, { "type": "Label", "props": { "y": 264, "text": "国王背景", "name": "name", "fontSize": 25, "font": "Microsoft YaHei", "color": "#fdfdfd", "centerX": 0, "align": "center" } }, { "type": "Button", "props": { "y": 207, "x": 35, "width": 181, "skin": "UI/btn_3.png", "name": "use", "labelSize": 25, "labelFont": "SimHei", "labelColors": "#ffffff", "label": "使用", "height": 46 } }, { "type": "Text", "props": { "y": 213, "x": 72, "text": "正在使用", "name": "using", "fontSize": 30, "font": "Microsoft YaHei", "color": "#ffffff", "bold": true } }, { "type": "Rect", "props": { "y": -1, "x": -2, "width": 273, "lineWidth": 1, "height": 263, "fillColor": "#346ebb" } }] }] }, { "type": "List", "props": { "y": -9, "x": 36, "width": 617, "var": "listCard", "vScrollBarSkin": "UI/vscroll.png", "spaceX": 5, "name": "item1", "height": 933 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 269, "renderType": "render", "name": "render", "height": 318 }, "child": [{ "type": "Image", "props": { "y": 262, "x": -2, "width": 270, "skin": "UI/background.png", "scaleY": -1, "height": 265 } }, { "type": "Rect", "props": { "y": 261, "x": 1, "width": 265, "lineWidth": 1, "height": 43, "fillColor": "#273755" } }, { "type": "Image", "props": { "y": 181, "x": 168, "skin": "UI/img_card_c01.png", "rotation": -20, "name": "icon1", "anchorY": 1, "anchorX": 1 } }, { "type": "Image", "props": { "y": 36, "x": 88, "skin": "UI/img_card_c01.png", "name": "icon2" } }, { "type": "Image", "props": { "y": 224, "x": 223, "skin": "UI/img_card_c01.png", "rotation": 10, "name": "icon3", "anchorY": 1, "anchorX": 1 } }, { "type": "Button", "props": { "y": 209, "x": -3, "width": 131, "skin": "UI/btn_3.png", "name": "buy", "labelSize": 25, "labelFont": "SimHei", "labelColors": "#ffffff", "label": "1元", "height": 43 } }, { "type": "Button", "props": { "y": 209, "x": 133, "width": 131, "skin": "UI/btn_3.png", "name": "try", "labelSize": 25, "labelFont": "SimHei", "labelColors": "#ffffff", "label": "体验", "height": 43 } }, { "type": "Label", "props": { "y": 266, "text": "国王背景", "name": "name", "fontSize": 25, "font": "Microsoft YaHei", "color": "#fdfdfd", "centerX": 0, "align": "center" } }, { "type": "Button", "props": { "y": 207, "x": 35, "width": 181, "skin": "UI/btn_3.png", "name": "use", "labelSize": 25, "labelFont": "SimHei", "labelColors": "#ffffff", "label": "使用", "height": 46 } }, { "type": "Text", "props": { "y": 208, "x": 78, "text": "正在使用", "name": "using", "fontSize": 30, "font": "Microsoft YaHei", "color": "#ffffff", "bold": true } }] }] }, { "type": "List", "props": { "y": -10, "x": 41, "width": 617, "var": "listCardBack", "vScrollBarSkin": "UI/vscroll.png", "spaceX": 1, "name": "item2", "height": 933 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 270, "renderType": "render", "name": "render", "height": 305 }, "child": [{ "type": "Image", "props": { "y": 262, "x": 0, "width": 268, "skin": "UI/background.png", "scaleY": -1, "height": 265 } }, { "type": "Rect", "props": { "y": 259, "x": -1, "width": 270, "lineWidth": 1, "height": 43, "fillColor": "#273755" } }, { "type": "Image", "props": { "y": 187, "x": 170, "skin": "UI/img_card_c01.png", "rotation": -20, "name": "icon1", "anchorY": 1, "anchorX": 1 } }, { "type": "Image", "props": { "y": 42, "x": 90, "skin": "UI/img_card_c01.png", "name": "icon2" } }, { "type": "Image", "props": { "y": 230, "x": 225, "skin": "UI/img_card_c01.png", "rotation": 10, "name": "icon3", "anchorY": 1, "anchorX": 1 } }, { "type": "Button", "props": { "y": 209, "x": -3, "width": 131, "skin": "UI/btn_3.png", "name": "buy", "labelSize": 25, "labelFont": "SimHei", "labelColors": "#ffffff", "label": "1元", "height": 43 } }, { "type": "Button", "props": { "y": 209, "x": 133, "width": 131, "skin": "UI/btn_3.png", "name": "try", "labelSize": 25, "labelFont": "SimHei", "labelColors": "#ffffff", "label": "体验", "height": 43 } }, { "type": "Label", "props": { "y": 264, "text": "国王背景", "name": "name", "fontSize": 25, "font": "Microsoft YaHei", "color": "#fdfdfd", "centerX": -20, "align": "center" } }, { "type": "Button", "props": { "y": 207, "x": 35, "width": 181, "skin": "UI/btn_3.png", "name": "use", "labelSize": 25, "labelFont": "SimHei", "labelColors": "#ffffff", "label": "使用", "height": 46 } }, { "type": "Text", "props": { "y": 210, "x": 74, "text": "正在使用", "name": "using", "fontSize": 30, "font": "Microsoft YaHei", "color": "#f7f8f4", "bold": true } }] }] }] }, { "type": "Text", "props": { "y": 195, "x": 632, "width": 116, "var": "GoldText", "text": "999999", "name": "GoldText", "height": 42, "fontSize": 33, "font": "Microsoft YaHei", "color": "#ffffff" } }, { "type": "Text", "props": { "y": 203, "x": 607, "text": "X", "name": "x", "fontSize": 23, "font": "Microsoft YaHei", "color": "#ffffff", "bold": true } }, { "type": "Image", "props": { "y": 156, "x": 498, "skin": "UI/gold.png" } }, { "type": "Sprite", "props": { "y": 626, "x": 242, "width": 50, "name": "message", "mouseThrough": false, "mouseEnabled": false, "hitTestPrior": false, "height": 50 }, "child": [{ "type": "Text", "props": { "y": -6, "x": -7, "var": "message", "text": "这是一条提示信息", "name": "message", "mouseThrough": false, "mouseEnabled": false, "hitTestPrior": false, "fontSize": 30, "font": "SimHei", "color": "#ffffff", "alpha": 0, "align": "left" } }] }] };
            return ShopUI;
        }(View));
        poker.ShopUI = ShopUI;
    })(poker = ui.poker || (ui.poker = {}));
})(ui || (ui = {}));
(function (ui) {
    var poker;
    (function (poker) {
        var StartGameUI = /** @class */ (function (_super) {
            __extends(StartGameUI, _super);
            function StartGameUI() {
                return _super.call(this) || this;
            }
            StartGameUI.prototype.createChildren = function () {
                View.regComponent("Text", laya.display.Text);
                _super.prototype.createChildren.call(this);
                this.createView(ui.poker.StartGameUI.uiView);
            };
            StartGameUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "skin": "local/newBg/image_天空底.png", "height": 1700, "bottom": 0 }, "child": [{ "type": "Image", "props": { "y": 264, "x": 0, "var": "clound6", "top": 264, "skin": "local/newBg/image_6.png" } }, { "type": "Image", "props": { "x": 391, "var": "clound7", "top": 378, "skin": "local/newBg/image_7.png" } }, { "type": "Image", "props": { "y": 360, "x": 365, "var": "clound5", "top": 360, "skin": "local/newBg/image_5.png" } }, { "type": "Image", "props": { "y": 651, "x": 186, "var": "clound4", "top": 651, "skin": "local/newBg/image_4.png" } }, { "type": "Image", "props": { "y": 668, "x": -40, "var": "clound3", "top": 668, "skin": "local/newBg/image_3.png" } }, { "type": "Image", "props": { "y": 719, "x": 471, "var": "clound2", "top": 719, "skin": "local/newBg/image_2.png" } }, { "type": "Image", "props": { "x": 327, "var": "clound1", "top": 914, "skin": "local/newBg/image_1.png" } }, { "type": "Image", "props": { "skin": "local/newBg/image_建筑.png", "bottom": 0 } }] }, { "type": "Button", "props": { "y": 930, "x": 258, "width": 242, "var": "shop", "strokeColors": "#346ebb", "skin": "UI/button.png", "name": "shop", "labelStrokeColor": "#346ebb", "labelStroke": 2, "labelSize": 40, "labelFont": "SimHei", "label": "商城", "height": 118 } }, { "type": "Image", "props": { "y": 1155, "x": 375, "var": "startGame", "skin": "local/newBg/index_btn_开始游戏.png", "bottom": 71, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": -115, "x": 6, "var": "upupupbtn", "skin": "local/newBg/result_点击按钮升级人物.png" } }] }, { "type": "Image", "props": { "x": 133, "top": 180, "skin": "login/bg_2.png" } }, { "type": "Image", "props": { "x": 375, "var": "model", "skin": "new18/index_image_cut.png", "scaleY": 1, "scaleX": 1, "bottom": 211, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Label", "props": { "y": -1, "x": 98, "var": "num", "text": "1", "fontSize": 50, "font": "SimHei", "color": "#ffffff", "bold": true, "anchorX": 0.5 } }] }, { "type": "Image", "props": { "y": 1145, "x": 375, "var": "startFreeGame", "skin": "local/newBg/index_btn_开始游戏.png", "bottom": 71, "anchorX": 0.5 } }, { "type": "Text", "props": { "y": 638, "x": 4, "width": 742, "valign": "middle", "height": 220, "fontSize": 100, "font": "SimHei", "color": "#000000", "bold": true, "align": "center" } }, { "type": "Image", "props": { "var": "bigStore", "skin": "local/首页/index_btn_商店.png", "left": 38, "bottom": 48 } }, { "type": "Image", "props": { "var": "rankList", "skin": "local/首页/index_btn_排行榜.png", "left": 38, "bottom": 207 } }, { "type": "Image", "props": { "y": 1216, "x": 663, "width": 98, "var": "luntan", "right": 38, "height": 140, "bottom": 48, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Box", "props": { "y": 650, "x": 6 }, "child": [{ "type": "TextInput", "props": { "width": 749, "var": "writeLevelTxt", "valign": "middle", "promptColor": "#c5afae", "prompt": "输入关卡", "height": 172, "fontSize": 100, "font": "SimSun", "color": "#ffffff", "bold": true, "align": "center" } }, { "type": "Image", "props": { "y": 187, "x": 295, "var": "textLabel", "skin": "UI/Popsbtn.png" } }] }, { "type": "Box", "props": { "x": 375, "width": 300, "var": "skBox", "pivotY": 520, "pivotX": 150, "height": 540, "bottom": 312 }, "child": [{ "type": "Image", "props": { "y": 300, "x": 280, "skin": "local/首页/index_image_人物名字底.png" }, "child": [{ "type": "Label", "props": { "y": 75, "x": 39, "width": 58, "var": "skName", "valign": "middle", "text": "xxx", "strokeColor": "#643C0D", "stroke": 4, "leading": 1, "height": 146, "fontSize": 30, "font": "SimHei", "color": "#FFFFFF", "bold": true, "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }] }, { "type": "Image", "props": { "y": 482, "x": 63, "skin": "local/首页/index_image_人物影子.png" } }] }, { "type": "Image", "props": { "y": 45, "x": 228, "var": "powerBox", "skin": "local/首页/index_image_体力.png", "anchorY": 0.5 }, "child": [{ "type": "Label", "props": { "y": 14, "x": 82, "var": "powerLabel", "text": 99, "strokeColor": "#000000", "stroke": 4, "fontSize": 30, "font": "Helvetica", "color": "#ffffff", "anchorX": 0.5 } }] }, { "type": "Image", "props": { "y": 46, "x": 23, "var": "goldBox", "skin": "local/首页/index_image_金币.png", "anchorY": 0.5 }, "child": [{ "type": "Label", "props": { "y": 14, "x": 113, "var": "goldLabel", "text": 99999, "strokeColor": "#000000", "stroke": 4, "fontSize": 30, "font": "Helvetica", "color": "#ffffff", "anchorX": 0.5 } }] }, { "type": "Image", "props": { "x": 663, "width": 142, "var": "moregame", "height": 168, "bottom": 207, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 831, "var": "showmore", "skin": "local/首页/show.png" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 70, "skin": "local/首页/point_red.png" } }] }] };
            return StartGameUI;
        }(View));
        poker.StartGameUI = StartGameUI;
    })(poker = ui.poker || (ui.poker = {}));
})(ui || (ui = {}));
(function (ui) {
    var poker;
    (function (poker) {
        var tutorialUI = /** @class */ (function (_super) {
            __extends(tutorialUI, _super);
            function tutorialUI() {
                return _super.call(this) || this;
            }
            tutorialUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.poker.tutorialUI.uiView);
            };
            tutorialUI.uiView = { "type": "Dialog", "props": { "width": 750, "height": 550, "centerX": 0, "bottom": 0 }, "child": [{ "type": "Image", "props": { "y": 408, "x": 60, "width": 663, "skin": "UI/introduction_play_ruban.png", "scaleY": -1, "height": 262, "sizeGrid": "50,100,50,100" } }, { "type": "Label", "props": { "y": 175, "x": 75, "width": 439, "var": "tutorialDesc", "text": "新手指引文本", "strokeColor": "#668ab0", "stroke": 1, "name": "tutorialDesc", "height": 198, "fontSize": 35, "font": "SimHei", "color": "#ffffff", "bold": false } }, { "type": "Sprite", "props": { "y": 329, "x": 516, "width": 185, "height": 61 }, "child": [{ "type": "Image", "props": { "var": "QuitTutorial", "skin": "UI/btn_1.png" } }] }] };
            return tutorialUI;
        }(Dialog));
        poker.tutorialUI = tutorialUI;
    })(poker = ui.poker || (ui.poker = {}));
})(ui || (ui = {}));
(function (ui) {
    var poker;
    (function (poker) {
        var WinUI = /** @class */ (function (_super) {
            __extends(WinUI, _super);
            function WinUI() {
                return _super.call(this) || this;
            }
            WinUI.prototype.createChildren = function () {
                View.regComponent("Text", laya.display.Text);
                _super.prototype.createChildren.call(this);
                this.createView(ui.poker.WinUI.uiView);
            };
            WinUI.uiView = { "type": "Dialog", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Label", "props": { "y": -180, "x": -25, "width": 800, "text": "label", "height": 1800, "bgColor": "#000000", "alpha": 0.7 } }, { "type": "Button", "props": { "y": 0, "x": 0, "width": 741, "skin": "UI/button.png", "label": "label", "height": 1316, "alpha": 0 } }, { "type": "Sprite", "props": { "y": 273, "x": 92 }, "child": [{ "type": "Image", "props": { "y": -100, "x": 283, "skin": "local/结果页/result_title_完全胜利.png", "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 693, "x": 123, "visible": false, "var": "shareBtn", "stateNum": 1, "skin": "UI/share.png", "labelSize": 30, "labelFont": "Microsoft YaHei", "labelColors": "#d28908", "labelBold": true } }, { "type": "Image", "props": { "y": 433, "x": 299, "skin": "local/结果页/result_image_时间.png", "anchorY": 0.5 } }, { "type": "Text", "props": { "y": 408, "x": 363, "var": "timeCount", "text": "00:25", "strokeColor": "#252E42", "stroke": 5, "name": "timeCount", "fontSize": 50, "color": "#ffffff", "bold": false } }, { "type": "Image", "props": { "y": 573, "x": 28, "var": "toHome", "skin": "local/结果页/result_btn_首页.png" }, "child": [{ "type": "Image", "props": { "y": 130, "x": -82, "var": "showUpLevel", "skin": "local/newBg/avatar_kuang.png" }, "child": [{ "type": "Image", "props": { "y": 98, "x": 70, "var": "showAvatar", "skin": "local/newBg/avatar_1.png", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Image", "props": { "y": 130, "x": 246, "var": "showUpLevel2", "skin": "local/newBg/result_再过一关获得新角色.png" }, "child": [{ "type": "Image", "props": { "y": 98, "x": 70, "var": "showAvatar2", "skin": "local/newBg/avatar_1.png", "anchorY": 0.5, "anchorX": 0.5 } }] }] }, { "type": "Image", "props": { "y": 433, "x": 69, "skin": "local/结果页/result_image_金币.png", "anchorY": 0.5 } }, { "type": "Text", "props": { "y": 408, "x": 133, "var": "coinCount", "text": "00:25", "strokeColor": "#252E42", "stroke": 5, "name": "coinCount", "fontSize": 50, "color": "#ffffff", "bold": false } }, { "type": "Image", "props": { "y": 573, "x": 188, "var": "startNewgame", "skin": "local/结果页/result_btn_下一关.png", "name": "startNewgame" } }] }] };
            return WinUI;
        }(Dialog));
        poker.WinUI = WinUI;
    })(poker = ui.poker || (ui.poker = {}));
})(ui || (ui = {}));
(function (ui) {
    var RankingViewUI = /** @class */ (function (_super) {
        __extends(RankingViewUI, _super);
        function RankingViewUI() {
            return _super.call(this) || this;
        }
        RankingViewUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.RankingViewUI.uiView);
        };
        RankingViewUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Label", "props": { "y": -183, "x": 0, "width": 750, "text": "label", "height": 1800, "bgColor": "#000000", "alpha": 0.7 } }, { "type": "Box", "props": { "x": 0, "width": 750, "var": "all", "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 144, "width": 750, "height": 941 }, "child": [{ "type": "Image", "props": { "x": 0, "skin": "local/排行榜/flip_image_排行榜底.png" } }, { "type": "Image", "props": { "y": -25, "x": 652, "var": "btnBack", "skin": "local/排行榜/flip_btn_返回.png" } }, { "type": "Image", "props": { "y": 1050, "x": 201, "var": "mLastPage", "skin": "local/排行榜/index_btn_上一页.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 1050, "x": 548, "var": "mNextPage", "skin": "local/排行榜/index_btn_下一页.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 122, "x": 67, "width": 632, "var": "listBK", "height": 818 }, "child": [{ "type": "Box", "props": { "y": 666, "x": 26, "width": 580, "var": "mSelf", "height": 110 }, "child": [{ "type": "Image", "props": { "width": 580, "skin": "local/交互/flip_bg_列表已解锁.png", "height": 110 } }] }] }, { "type": "Image", "props": { "y": 122, "x": 67, "width": 632, "var": "rankSprite", "height": 818 } }] }, { "type": "Image", "props": { "y": 502, "x": 37, "skin": "local/排行榜/flip_image_排行榜手指.png" } }] }] };
        return RankingViewUI;
    }(View));
    ui.RankingViewUI = RankingViewUI;
})(ui || (ui = {}));
(function (ui) {
    var ShowBgViewUI = /** @class */ (function (_super) {
        __extends(ShowBgViewUI, _super);
        function ShowBgViewUI() {
            return _super.call(this) || this;
        }
        ShowBgViewUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.ShowBgViewUI.uiView);
        };
        ShowBgViewUI.uiView = { "type": "Dialog", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 103, "x": 94, "width": 562, "height": 1000 }, "child": [{ "type": "Image", "props": { "y": 1000, "x": 281, "var": "bg", "scaleY": 0.75, "scaleX": 0.75, "anchorY": 1, "anchorX": 0.5 } }, { "type": "Label", "props": { "width": 562, "text": "label", "renderType": "mask", "height": 1000, "bgColor": "#000000" } }] }, { "type": "Image", "props": { "y": 1141, "x": 47, "var": "cancel", "skin": "local/商店/shop_btn_取消.png" } }, { "type": "Image", "props": { "y": 1141, "x": 402, "var": "buy", "skin": "local/商店/index_btn_金币购买.png" }, "child": [{ "type": "Label", "props": { "y": 22, "x": 181, "var": "goldLabel", "text": 99999, "fontSize": 54, "font": "Helvetica", "color": "#643C18", "bold": false, "anchorX": 0.5 } }] }, { "type": "Image", "props": { "y": 1141, "x": 402, "var": "change", "skin": "local/商店/pop_btn_更换.png" } }, { "type": "Box", "props": { "y": 512, "x": 146 }, "child": [{ "type": "Image", "props": { "width": 76, "var": "showCard1", "skin": "local/商店/Skin_5001.png", "height": 114 } }, { "type": "Image", "props": { "x": 84, "width": 76, "var": "showCard2", "skin": "UI/game_image_smallK.png", "height": 114 } }, { "type": "Image", "props": { "x": 168, "width": 76, "var": "showCard3", "skin": "UI/game_image_smallK.png", "height": 114 } }, { "type": "Image", "props": { "x": 252, "width": 76, "var": "showCard4", "skin": "UI/game_image_smallK.png", "height": 114 } }, { "type": "Image", "props": { "x": 381, "width": 76, "var": "showCard5", "skin": "UI/game_image_smallK.png", "height": 114 } }] }] };
        return ShowBgViewUI;
    }(Dialog));
    ui.ShowBgViewUI = ShowBgViewUI;
})(ui || (ui = {}));
(function (ui) {
    var SKViewUI = /** @class */ (function (_super) {
        __extends(SKViewUI, _super);
        function SKViewUI() {
            return _super.call(this) || this;
        }
        SKViewUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.SKViewUI.uiView);
        };
        SKViewUI.uiView = { "type": "Dialog", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 154, "skin": "local/交互/pop_image_时来运转底.png" }, "child": [{ "type": "Image", "props": { "y": -23, "x": 648, "var": "btnClose", "skin": "local/交互/pop_btn_返回.png" } }, { "type": "List", "props": { "y": 135, "x": 74, "width": 620, "var": "skList", "spaceY": 10, "repeatY": 7, "repeatX": 1, "height": 886 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 74, "width": 604, "renderType": "render", "height": 120 }, "child": [{ "type": "Image", "props": { "y": 59, "x": 269, "skin": "local/交互/pop_bg_列表当前.png", "name": "bg1", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Label", "props": { "y": 59, "x": 87, "valign": "middle", "text": "金盆洗手", "name": "leftTxt", "fontSize": 40, "font": "SimHei", "color": "#0e4466", "bold": true, "anchorY": 0.5, "align": "center" } }, { "type": "Label", "props": { "y": 59, "x": 493, "valign": "middle", "text": "完成第999关", "name": "rightTxt", "fontSize": 30, "font": "SimHei", "color": "#643C18", "bold": true, "anchorY": 0.5, "anchorX": 1, "align": "center" } }] }, { "type": "Image", "props": { "y": 58, "x": -37, "skin": "local/交互/pop_image_当前等级方块.png", "name": "bg2", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": -7, "x": -38, "skin": "local/交互/pop_image_解锁升级.png", "name": "topheng", "anchorY": 0.5, "anchorX": 0.5 } }] }] }, { "type": "Image", "props": { "y": 358, "x": 42, "skin": "local/交互/pop_image_时来运转手指.png" } }] }] };
        return SKViewUI;
    }(Dialog));
    ui.SKViewUI = SKViewUI;
})(ui || (ui = {}));
(function (ui) {
    var wx;
    (function (wx) {
        var loginUI = /** @class */ (function (_super) {
            __extends(loginUI, _super);
            function loginUI() {
                return _super.call(this) || this;
            }
            loginUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.wx.loginUI.uiView);
            };
            loginUI.uiView = { "type": "View", "props": { "y": 0, "x": 0, "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": -83, "x": 0, "var": "bk", "skin": "login/bg.png", "height": 1700 } }, { "type": "Image", "props": { "y": 460, "x": 375, "visible": false, "var": "logo", "skin": "login/logo.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 800, "x": 375, "visible": false, "var": "btnStar", "skin": "login/star.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 600, "x": 375, "visible": false, "var": "login", "skin": "login/bk2.png", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 288, "x": 225, "var": "btnStar2", "skin": "login/login.png", "anchorY": 0, "anchorX": 0.5 } }] }, { "type": "Image", "props": { "x": 133, "top": 180, "skin": "login/bg_2.png" } }, { "type": "Image", "props": { "y": 991, "x": 134, "var": "prg", "skin": "login/prg1.png", "centerX": 0, "bottom": 300 }, "child": [{ "type": "Image", "props": { "y": 4, "x": 3, "width": 20, "var": "prg2", "skin": "login/prg2.png", "sizeGrid": "0,30,0,30" } }] }] };
            return loginUI;
        }(View));
        wx.loginUI = loginUI;
    })(wx = ui.wx || (ui.wx = {}));
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
* name;
*/
var gameIndexView = /** @class */ (function (_super) {
    __extends(gameIndexView, _super);
    function gameIndexView() {
        var _this = _super.call(this) || this;
        _this.height = Laya.stage.height;
        return _this;
    }
    gameIndexView.prototype.onShow = function (bool) {
        if (bool) {
            this.visible = true;
            this.addEvent();
            this.initRepeat();
        }
        else {
            this.visible = false;
            this.removeEvent();
        }
    };
    gameIndexView.prototype.addEvent = function () {
        this.starttBtn.on(Laya.Event.CLICK, this, this.onStartGame);
    };
    gameIndexView.prototype.removeEvent = function () {
    };
    gameIndexView.prototype.initRepeat = function () {
    };
    gameIndexView.prototype.onStartGame = function () {
        BaseViewManager.Inst.onSceneTable();
        BaseViewManager.Inst.sceneTable.startGame(false);
    };
    return gameIndexView;
}(ui.game.gameIndexUI));
//# sourceMappingURL=gameIndexView.js.map
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
* name;
*/
var gameStoreView = /** @class */ (function (_super) {
    __extends(gameStoreView, _super);
    function gameStoreView() {
        var _this = _super.call(this) || this;
        _this.imgArray = [];
        _this.propIdArray = [];
        _this.dataArray = [];
        _this.shinning = null;
        _this.selectId = -1;
        _this.selectName = '';
        _this.selectPrice = 0;
        _this.initGame();
        return _this;
    }
    gameStoreView.prototype.onShow = function (bool) {
        if (bool) {
            this.visible = true;
            this.addEvent();
            this.initRepeat();
        }
        else {
            this.visible = false;
            this.removeEvent();
        }
    };
    gameStoreView.prototype.addEvent = function () {
        this.card1.on(Laya.Event.CLICK, this, this.select, [0]);
        this.card2.on(Laya.Event.CLICK, this, this.select, [1]);
        this.card3.on(Laya.Event.CLICK, this, this.select, [2]);
        this.card4.on(Laya.Event.CLICK, this, this.select, [3]);
        this.card5.on(Laya.Event.CLICK, this, this.select, [4]);
        this.card6.on(Laya.Event.CLICK, this, this.select, [5]);
        this.buyBtn.on(Laya.Event.CLICK, this, this.bugProps);
        this.detBtn.on(Laya.Event.CLICK, this, this.detBuy);
        this.celBtn.on(Laya.Event.CLICK, this, this.celBuy);
        this.backBtn.on(Laya.Event.CLICK, this, this.exitBtn);
    };
    gameStoreView.prototype.removeEvent = function () {
    };
    gameStoreView.prototype.initGame = function () {
        this.height = Laya.stage.height;
        this.imgArray = [this.img1, this.img2, this.img3, this.img4, this.img5, this.img6, this.img0];
        this.imgArray.forEach(function (img) {
            var iconImg = new Laya.Image();
            iconImg.name = "iconImg";
            img.addChild(iconImg);
            iconImg.anchorX = 0.5;
            iconImg.anchorY = 0.5;
            iconImg.pos(img.width / 2, img.height / 2);
            var signImg = new Laya.Image();
            signImg.name = "signImg";
            img.addChild(signImg);
            signImg.scale(0.2, 0.2);
            signImg.pos(5, 25);
            var numTxt = new Laya.Label();
            numTxt.name = "numTxt";
            img.addChild(numTxt);
            numTxt.color = "#000000";
            numTxt.font = "SimHei";
            numTxt.fontSize = 50;
            numTxt.pos(5, 5);
            var nameTxt = new Laya.Label();
            nameTxt.name = "nameTxt";
            img.addChild(nameTxt);
            nameTxt.color = "#000000";
            nameTxt.font = "SimHei";
            nameTxt.fontSize = 18;
            nameTxt.anchorX = 0.5;
            nameTxt.anchorY = 0.5;
            nameTxt.bold = true;
            nameTxt.pos(img.width / 2, 110);
            var descTxt = new Laya.Label();
            descTxt.name = "descTxt";
            img.addChild(descTxt);
            descTxt.color = "#000000";
            descTxt.font = "SimHei";
            descTxt.fontSize = 10;
            descTxt.anchorX = 0.5;
            descTxt.visible = false;
            descTxt.pos(img.width / 2, 123);
        });
    };
    gameStoreView.prototype.initRepeat = function () {
        var _this = this;
        if (!!this.shinning) {
            this.shinning.removeSelf();
            this.shinning.destroy();
            this.shinning = null;
        }
        this.dataArray = [];
        this.propIdArray = [];
        this.coinLabel.text = '碎银:' + heroStorage.Inst.Coin + '$';
        this.cardDesc.text = '描述:';
        this.card0.visible = true;
        this.card1.visible = true;
        this.card2.visible = true;
        this.card3.visible = true;
        this.card4.visible = true;
        this.card5.visible = true;
        this.card6.visible = true;
        // var treasureArray = [{}];
        // if (heroStorage.Inst.KongFuArray.length > 0) {
        //     for (let z = 1; z < CardConstant.CardTreasure.length; z++) {
        //         var bool = false;
        //         for (let y = 0; y < heroStorage.Inst.KongFuArray.length; y++) {
        //             if (heroStorage.Inst.KongFuArray[y].id == CardConstant.CardTreasure[z].id) {
        //                 bool = true;
        //                 break;
        //             }
        //         }
        //         if (!bool) {
        //             treasureArray.push(CardConstant.CardTreasure[z]);
        //         }
        //     }
        // }
        // else {
        //     for (let c = 1; c < CardConstant.CardTreasure.length; c++) {
        //         treasureArray.push(CardConstant.CardTreasure[c]);
        //     }
        // }
        this.imgArray.forEach(function (element, index) {
            // for (let i = 1; i < treasureArray.length; i++) {
            //     if (this.propIdArray.length > 0) {
            //         var bool = false;
            //         for (let j = 0; j < this.propIdArray.length; j++) {
            //             if (this.propIdArray[j] == treasureArray[i].id) {
            //                 bool = true;
            //             }
            //         }
            //         if (!bool) {
            //             array.push(treasureArray[i]);
            //         }
            //     } else {
            //         array.push(treasureArray[i]);
            //     }
            // }
            for (var i = 1; i < CardConstant.CardStore.length; i++) {
                if (_this.propIdArray.length > 0) {
                    var bool = false;
                    for (var j = 0; j < _this.propIdArray.length; j++) {
                        if (_this.propIdArray[j] == CardConstant.CardStore[i].id) {
                            bool = true;
                        }
                    }
                    if (!bool) {
                        _this.dataArray.push(CardConstant.CardStore[i]);
                    }
                }
                else {
                    _this.dataArray.push(CardConstant.CardStore[i]);
                }
            }
            var num = MathUtils.getRandom(0, _this.dataArray.length - 1);
            //console.log("array[num]:", this.dataArray[num])
            _this.propIdArray[index] = num + '';
            var price = Number(_this.dataArray[num]['price']) + Math.floor(BaseViewManager.Inst.sceneTable.nextNum);
            element.getChildByName("numTxt").text = price.toString() + '$';
            if (index == _this.imgArray.length - 1) {
                _this.desc0.text = '描述:' + _this.dataArray[num]['desc'];
                element.getChildByName("numTxt").text = '';
            }
            element.getChildByName("iconImg").skin = '';
            element.getChildByName("signImg").skin = '';
            element.getChildByName("nameTxt").text = _this.dataArray[num]['name'];
            element.getChildByName("descTxt").text = _this.dataArray[num]['desc'];
        });
        if (this.imgArray[this.imgArray.length - 1].getChildByName("nameTxt").text.indexOf('功法') != -1) {
            heroStorage.Inst.SetKongFuArray(this.imgArray[this.imgArray.length - 1].getChildByName("nameTxt").text);
            BaseViewManager.Inst.sceneTable.refreshHeroUI();
        }
        else {
            heroStorage.Inst.SetPropsArray(this.imgArray[this.imgArray.length - 1].getChildByName("nameTxt").text);
            BaseViewManager.Inst.sceneTable.refreshHeroUI();
        }
    };
    gameStoreView.prototype.bugProps = function () {
        if (this.selectId == -1) {
            return;
        }
        this.finishSelectFrame.visible = true;
        this.selectName = this.imgArray[this.selectId].getChildByName("nameTxt").text;
        if (this.imgArray[this.selectId].getChildByName("numTxt").text.indexOf('$') != -1) {
            this.selectPrice = Number(this.imgArray[this.selectId].getChildByName("numTxt").text.replace('$', ''));
        }
        else {
            this.selectPrice = 0;
        }
        this.prop.text = this.selectName;
        this.title.text = "是否花费" + this.selectPrice + "$购买";
    };
    gameStoreView.prototype.select = function (num) {
        if (!this.shinning) {
            this.shinning = new Laya.Image();
            this.shinning.skin = 'new/game_image_shinning2.png';
            this.shinning.size(141, 190);
        }
        this.selectId = num;
        this.cardDesc.text = '描述:' + this.imgArray[this.selectId].getChildByName("descTxt").text;
        this.imgArray[num].addChild(this.shinning);
        this.shinning.pos(-19, -19);
    };
    gameStoreView.prototype.detBuy = function () {
        if (heroStorage.Inst.Coin < this.selectPrice) {
            return;
        }
        heroStorage.Inst.SetCoin(-this.selectPrice);
        this.coinLabel.text = '碎银:' + heroStorage.Inst.Coin + '$';
        this.imgArray[this.selectId].parent.visible = false;
        this.selectId = -1;
        if (!!this.shinning) {
            this.shinning.removeSelf();
            this.shinning.destroy();
            this.shinning = null;
        }
        heroStorage.Inst.SetPropsArray(this.selectName);
        BaseViewManager.Inst.sceneTable.refreshHeroUI();
        this.clearFrame();
    };
    gameStoreView.prototype.celBuy = function () {
        this.clearFrame();
    };
    gameStoreView.prototype.clearFrame = function () {
        this.finishSelectFrame.visible = false;
        this.prop.text = '';
        this.selectName = '';
        this.selectPrice = 0;
    };
    gameStoreView.prototype.exitBtn = function () {
        this.onShow(false);
    };
    return gameStoreView;
}(ui.game.gameStoreUI));
//# sourceMappingURL=gameStoreView.js.map
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
* name;
*/
var pokerChain = poker.pokerChain;
var gameTableView = /** @class */ (function (_super) {
    __extends(gameTableView, _super);
    function gameTableView() {
        var _this = _super.call(this) || this;
        _this.startCard = new poker.pokerChainGroup(poker.PokerGroupRenderMode.lastOneCard); //开始的牌堆
        _this.pokerLineList = new Array(); //牌线 1-3
        _this.discardPileList = new poker.pokerChainGroup(poker.PokerGroupRenderMode.lastOneCard); //废弃牌堆，消失的牌会进入这里
        _this.pokerFloorNumArray = new Array(); //每层卡牌的数量
        _this.dragMovingStartPos = new laya.maths.Point();
        _this.isStartDraging = false; //开始拖拽
        _this.isStartDragMoved = false; //是否开始拖动了(点击判断使用)
        _this.mouseStartPos = new laya.maths.Point();
        _this.clickImg = null;
        _this.dragPokerGroup = new Array();
        _this.dragPokerGroupIndex = 0;
        _this.shadowImg1 = null;
        _this.shadowImg2 = null;
        _this.mask1 = null;
        _this.mask2 = null;
        _this.shinning = null;
        _this.dragInListOne = 0;
        _this.shadow1OtherList = new Array();
        _this.shadow2OtherList = new Array();
        _this.mask1OtherList = new Array();
        _this.mask2OtherList = new Array();
        _this.shinningOtherList = new Array();
        _this.isDownTween = false;
        _this.dtime = 50;
        _this.longClickTime = 0;
        _this.nowTimeDown = 0;
        _this.selectShinning = null;
        _this.selectIndex = -1;
        _this.propSelectShinning = new Array();
        _this.propSelectIndex = -1;
        _this.passiveListSelectIndex = -1;
        _this.passivePropCompleteIdx = -1;
        /**开始时英雄的centerY位置，每次卡牌降落英雄都会回到这个位置 */
        _this.fixedY = 0;
        /**开始时英雄位于中间位置，位置选择：0，1，2 */
        _this.heroIndex = 1;
        _this.heroPosList = [];
        _this.canMouseDown = false;
        _this.offsetBox = 0;
        _this.maxFloor = 12;
        _this.nextNum = 0;
        _this.firstGetProp = false;
        _this.firstGetKongFu = false;
        _this.CollisionArrList = new Array();
        _this.initGame();
        return _this;
    }
    gameTableView.prototype.onShow = function (bool) {
        if (bool) {
            this.visible = true;
            this.addEvent();
            this.initRepeat();
        }
        else {
            this.visible = false;
            this.removeEvent();
        }
    };
    gameTableView.prototype.addEvent = function () {
        this.btn_start.on(Laya.Event.CLICK, this, this.startGame, [false]);
        this.Hero.on(Laya.Event.MOUSE_DOWN, this, this.onHeroMounseDown);
        this.Hero.on(Laya.Event.MOUSE_MOVE, this, this.onHeroMounseMove);
        this.Hero.on(Laya.Event.MOUSE_UP, this, this.onHeroMounseUp);
        this.propMoveCancel.on(Laya.Event.CLICK, this, this.cancelMoveBg);
    };
    gameTableView.prototype.removeEvent = function () {
    };
    gameTableView.prototype.initGame = function () {
        this.height = Laya.stage.height;
        this.offsetBox = 0;
        this.propMoveBox.height = Laya.stage.height;
        // console.log("offset:", 1334 / Laya.stage.height)
        this.bg1.height = Laya.stage.height;
        this.pokerList.centerY += this.offsetBox;
        this.btn_start.centerY += this.offsetBox;
        this.bg2.height = (Laya.stage.height - 1334) / 2 + 150;
        this.TargetList.centerY += this.offsetBox;
        this.Hero.centerY += this.offsetBox;
        // this.desc.y = 50;
        this.fixedY = this.Hero.centerY;
        this.Hero.zOrder = objectZorder.Hero;
        this.pokerList.zOrder = objectZorder.Poker;
        this.btn_start.zOrder = objectZorder.UI;
        this.TargetList.zOrder = objectZorder.Target;
        this.bg1.zOrder = objectZorder.Bg1;
        this.bg2.zOrder = objectZorder.Bg2;
        this.InitiativeList.zOrder = objectZorder.MoveBg;
        this.PassiveList.zOrder = objectZorder.MoveBg;
        this.propMoveBox.zOrder = objectZorder.MoveBg;
        this.desc.zOrder = objectZorder.Bg2;
        var shinning1 = new Laya.Image();
        shinning1.skin = 'new/game_image_shinning2.png';
        shinning1.size(141, 190);
        this.Target1.addChild(shinning1);
        shinning1.pos(-19, -19);
        var shinning2 = new Laya.Image();
        shinning2.skin = 'new/game_image_shinning2.png';
        shinning2.size(141, 190);
        this.Target2.addChild(shinning2);
        shinning2.pos(-19, -19);
        var shinning3 = new Laya.Image();
        shinning3.skin = 'new/game_image_shinning2.png';
        shinning3.size(141, 190);
        this.Target3.addChild(shinning3);
        shinning3.pos(-19, -19);
        this.RookieGuide(1);
    };
    gameTableView.prototype.initRepeat = function () {
        this.startCard.render.zeroCardName = "";
        this.startCard.data.CreateFull();
        this.startCard.FlushRender();
        //console.log("this.startCard:", this.startCard.data.pokerList.length);
        for (var i = 0; i < 3; i++) {
            var line = new poker.pokerChainGroup(poker.PokerGroupRenderMode.line);
            line.render.zeroCardName = "";
            this.pokerLineList.push(line);
        }
    };
    gameTableView.prototype.startGame = function (isNext) {
        if (isNext) {
            this.nextNum++;
        }
        this.passiveListSelectIndex = -1;
        this.canMouseDown = true;
        this.heroIndex = 1;
        this.selectIndex = -1;
        this.pokerList.centerY = -1942 + this.offsetBox;
        this.pokerList.centerX = 0;
        this.TargetList.centerY = -2145 + this.offsetBox;
        this.TargetList.centerX = 0;
        this.Hero.centerY = 334 + this.offsetBox;
        this.Hero.centerX = 0;
        this.desc.text = '';
        this.heroStg = heroStorage.Inst;
        this.heroStg.initHeroStorage(isNext);
        this.pokerFloorNumArray = [];
        this.LaunchCheatWithUI(false);
        this.effectUis = [this.HeroEffect1, this.HeroEffect2, this.HeroEffect3, this.HeroEffect4, this.HeroEffect5, this.HeroEffect6];
        this.effectUi2s = [this.HeroSEffect1, this.HeroSEffect2, this.HeroSEffect3, this.HeroSEffect4, this.HeroSEffect5, this.HeroSEffect6];
        this.refreshHeroUI();
        this.dearCard();
    };
    gameTableView.prototype.endGame = function () {
        var _this = this;
        var label = new Laya.Label();
        label.fontSize = 100;
        label.centerX = 0;
        label.centerY = 0;
        label.text = "Your Fail";
        label.color = "#ffffff";
        this.addChild(label);
        label.alpha = 0;
        label.zOrder = 200;
        Laya.Tween.to(label, { alpha: 1 }, 1000, Laya.Ease.linearIn, new Laya.Handler(this, function () {
            Laya.timer.once(1000, _this, function () {
                label.removeSelf();
                label.destroy();
                BaseViewManager.Inst.onSceneIndex();
            });
        }));
    };
    gameTableView.prototype.dearCard = function () {
        var _this = this;
        var cardList;
        this.allCardBackToStart();
        this.startCard.data.ShuffleWithTime(3);
        cardList = this.dearStartDeck();
        for (var i = 0; i < cardList.length; i++) {
            // var render = new poker.pokerGroupRender(poker.PokerGroupRenderMode.line);
            // cardList[i].SetAllCardToFront();
            // render.FlushPokerList(cardList[i], false);
            if (i >= 0 && i < cardList.length / 3) {
                var spr = new Laya.Sprite();
                spr.addChild(this.pokerLineList[i].render);
                spr.pos(0, 0);
                spr.visible = true;
                this.Line1.addChild(spr);
            }
            else if (i >= cardList.length / 3 && i < cardList.length * 2 / 3) {
                var spr = new Laya.Sprite();
                spr.addChild(this.pokerLineList[i].render);
                spr.pos(0, 0);
                spr.visible = true;
                this.Line2.addChild(spr);
            }
            else {
                var spr = new Laya.Sprite();
                spr.addChild(this.pokerLineList[i].render);
                spr.pos(0, 0);
                spr.visible = true;
                this.Line3.addChild(spr);
            }
            this.connectDearCardArrayToRender(i, null);
        }
        //最上方是Boss,Boss两侧无卡牌
        var card = this.pokerLineList[0].data.GetFirstCard();
        // card.data.mType = PokerType.coin;
        // card.data.mNum = 1;
        card.data.SetCardBack(true);
        card.FlushRender();
        this.pokerLineList[0].render.FlushPokerList(this.pokerLineList[0].data, false);
        var card = this.pokerLineList[1].data.GetFirstCard();
        card.data.mType = PokerType.enemy;
        var num = 4 + Math.floor(this.nextNum / 2);
        if (num > 6) {
            num = 6;
        }
        card.data.mNum = num;
        card.data.SetAtk(MathUtils.getRandom(CardConstant.CardCK[card.data.mNum]["num"][0], CardConstant.CardCK[card.data.mNum]["num"][1]).toString());
        card.FlushRender();
        this.pokerLineList[1].render.FlushPokerList(this.pokerLineList[1].data, false);
        var card = this.pokerLineList[2].data.GetFirstCard();
        // card.data.mType = PokerType.coin;
        // card.data.mNum = 1;
        card.data.SetCardBack(true);
        card.FlushRender();
        this.pokerLineList[2].render.FlushPokerList(this.pokerLineList[2].data, false);
        this.pokerFloorNumArray[0] = [0, 1, 0];
        //增加某些层级的空位，让游戏更难
        this.vacancyFloor();
        //设置卡牌,50%怪物,15%血量,15%武器,20%金币
        for (var index = 0; index < 3; index++) {
            this.pokerLineList[index].data.pokerList.forEach(function (card, index) {
                if (index != 0 && !card.data.IsCardBack) {
                    var rand = MathUtils.getRandom(1, 30);
                    if (rand <= 15) {
                        card.data.mType = PokerType.enemy;
                        var num = MathUtils.getRandom(1, 3 + Math.floor(_this.nextNum / 2));
                        if (num > 5) {
                            num = 5;
                        }
                        card.data.mNum = num;
                        card.data.SetAtk(MathUtils.getRandom(CardConstant.CardCK[card.data.mNum]["num"][0], CardConstant.CardCK[card.data.mNum]["num"][1]).toString());
                        card.FlushRender();
                    }
                    else if (rand > 15 && rand <= 20) {
                        card.data.mType = PokerType.blood;
                        var num = MathUtils.getRandom(1, 9 + Math.floor(_this.nextNum / 2));
                        if (num > 15) {
                            num = 15;
                        }
                        card.data.mNum = num;
                        card.FlushRender();
                    }
                    else if (rand > 20 && rand <= 25) {
                        card.data.mType = PokerType.atk;
                        var num = MathUtils.getRandom(1, 5);
                        card.data.mNum = num;
                        var maxHurt = CardConstant.CardWeapon[card.data.mNum]["num"][1] + Math.floor(_this.nextNum / 2);
                        if (maxHurt > 15) {
                            maxHurt = 15;
                        }
                        card.CreateHurt(MathUtils.getRandom(CardConstant.CardWeapon[card.data.mNum]["num"][0], maxHurt).toString());
                        card.FlushRender();
                    }
                    else {
                        card.data.mType = PokerType.coin;
                        var num = MathUtils.getRandom(3, 8 + Math.floor(_this.nextNum / 2));
                        if (num > 15) {
                            num = 15;
                        }
                        card.data.mNum = num;
                        card.FlushRender();
                    }
                }
            });
            this.pokerLineList[index].render.FlushPokerList(this.pokerLineList[index].data, false);
        }
        //从第6 - this.maxFloor-3行中任意选择一行的其中一个变成功法卡牌
        var row;
        var col;
        var isSpec = false;
        for (var i_1 = 0; i_1 < this.pokerFloorNumArray.length; i_1++) {
            if (i_1 >= 6 && this.pokerFloorNumArray[i_1][0] == 0 && this.pokerFloorNumArray[i_1][1] == 0 &&
                this.pokerFloorNumArray[i_1][2] == 0 && this.pokerLineList[1].data.GetIndexCard(i_1).data.mType == PokerType.coin &&
                !this.pokerLineList[1].data.GetIndexCard(i_1).data.IsCardBack) {
                row = i_1;
                col = 1;
                isSpec = true;
                return;
            }
        }
        if (!isSpec) {
            col = MathUtils.getRandom(0, 2);
            row = MathUtils.getRandom(6, this.maxFloor - 3);
            var card = this.pokerLineList[col].data.GetIndexCard(row);
            while (card.data.IsCardBack) {
                col = MathUtils.getRandom(0, 2);
                row = MathUtils.getRandom(6, this.maxFloor - 3);
                card = this.pokerLineList[col].data.GetIndexCard(row);
            }
        }
        var kongfuCard = card;
        kongfuCard.data.mType = PokerType.treasure;
        var treasureArray = [];
        if (heroStorage.Inst.KongFuArray.length > 0) {
            for (var z = 1; z < CardConstant.CardTreasure.length; z++) {
                var bool = false;
                for (var y = 0; y < heroStorage.Inst.KongFuArray.length; y++) {
                    if (heroStorage.Inst.KongFuArray[y].id == CardConstant.CardTreasure[z].id) {
                        bool = true;
                        break;
                    }
                }
                if (!bool) {
                    treasureArray.push(CardConstant.CardTreasure[z].id);
                }
            }
            var rd = MathUtils.getRandom(0, treasureArray.length - 1);
            kongfuCard.data.mNum = treasureArray[rd];
            console.log("功法1：", treasureArray, rd, treasureArray[rd]);
        }
        else {
            var rd = MathUtils.getRandom(1, CardConstant.CardTreasure.length - 1);
            kongfuCard.data.mNum = rd;
            console.log("功法2：", rd);
        }
        kongfuCard.FlushRender();
        this.pokerLineList[col].render.FlushPokerList(this.pokerLineList[col].data, false);
        //从任意和上面不相干的一行中任意选择一行的其中一个变成商店
        var row2List = [];
        for (var si = 1; si < this.maxFloor - 2; si++) {
            if (si != row) {
                row2List.push(si);
            }
        }
        var row2 = row2List[MathUtils.getRandom(0, row2List.length - 1)];
        var col2 = MathUtils.getRandom(0, 2);
        var card = this.pokerLineList[col2].data.GetIndexCard(row2);
        while (card.data.IsCardBack) {
            col2 = MathUtils.getRandom(0, 2);
            row2 = row2List[MathUtils.getRandom(0, row2List.length - 1)];
            card = this.pokerLineList[col2].data.GetIndexCard(row2);
        }
        //console.log("只有一个商店：", row2List, row2, col2);
        var store1Card = card;
        store1Card.data.mType = PokerType.store;
        store1Card.data.mNum = 0;
        store1Card.FlushRender();
        this.pokerLineList[col2].render.FlushPokerList(this.pokerLineList[col2].data, false);
        this.heroPosList = [this.Line1.x + this.pokerList.x, this.Line2.x + this.pokerList.x, this.Line3.x + this.pokerList.x];
        /**赋予卡牌点击事件 */
        for (var index = 0; index < 3; index++) {
            this.FlushCardClick(index);
        }
        //console.log("pokerFloorNumArray:", this.pokerFloorNumArray, this.pokerLineList[0].data.pokerList.length)
    };
    gameTableView.prototype.vacancyFloor = function () {
        var one = 1;
        var two = 1;
        for (var r = 0; r < 2; r++) {
            var rand = MathUtils.getRandom(1, 10);
            if (rand >= 6) {
                one += 1;
            }
            else {
                two += 1;
            }
        }
        //console.log("onetwo1:", one, two)
        var oneNumArray = [];
        var twoNumArray = [];
        var oneNumCanArray = [];
        var twoNumCanArray = [];
        for (var z = 2; z < this.maxFloor - 1; z++) {
            oneNumCanArray.push(z);
        }
        for (var i = 0; i < one; i++) {
            var index = MathUtils.getRandom(0, oneNumCanArray.length - 1);
            var rm = oneNumCanArray[index];
            //console.log("rmrmrm:", rm, this.pokerFloorNumArray)
            var card = this.pokerLineList[0].data.GetIndexCard(rm);
            // card.data.mType = PokerType.coin;
            // card.data.mNum = 1;
            card.data.SetCardBack(true);
            card.FlushRender();
            this.pokerLineList[0].render.FlushPokerList(this.pokerLineList[0].data, false);
            var card = this.pokerLineList[2].data.GetIndexCard(rm);
            // card.data.mType = PokerType.coin;
            // card.data.mNum = 1;
            card.data.SetCardBack(true);
            card.FlushRender();
            this.pokerLineList[2].render.FlushPokerList(this.pokerLineList[2].data, false);
            oneNumArray.push(rm);
            var frontLimit = index - 1;
            var behindLimit = index + 1;
            var det = [0, 1, 0];
            if (rm - 1 == oneNumCanArray[frontLimit]) {
                det[0] = 1;
            }
            if (rm + 1 == oneNumCanArray[behindLimit]) {
                det[2] = 1;
            }
            //console.log("onetwormrmrm:", det, rm, oneNumCanArray[frontLimit], oneNumCanArray[behindLimit])
            if (det[0] == 1 && det[2] == 1) {
                oneNumCanArray.splice(frontLimit, 3);
            }
            else if (det[0] == 1 && det[2] == 0) {
                oneNumCanArray.splice(frontLimit, 2);
            }
            else if (det[0] == 0 && det[2] == 1) {
                oneNumCanArray.splice(index, 2);
            }
            else if (det[0] == 0 && det[2] == 0) {
                oneNumCanArray.splice(index, 1);
            }
            this.pokerFloorNumArray[rm] = [0, 1, 0];
            //console.log("onetwo2:", oneNumArray, oneNumCanArray)
        }
        for (var j = 2; j < this.maxFloor - 1; j++) {
            var bool = false;
            for (var k = 0; k < oneNumArray.length; k++) {
                if (oneNumArray[k] == j) {
                    bool = true;
                }
            }
            if (!bool) {
                twoNumCanArray.push(j);
            }
        }
        //console.log("onetwo3:", twoNumCanArray)
        for (var l = 0; l < two; l++) {
            var index = MathUtils.getRandom(0, twoNumCanArray.length - 1);
            var rm2 = twoNumCanArray[index];
            //console.log("onetwo4:", rm2)
            var l1 = MathUtils.getRandom(0, 2);
            if (l1 == 0 || l1 == 2) {
                var card = this.pokerLineList[l1].data.GetIndexCard(rm2);
                card.data.mType = PokerType.coin;
                card.data.mNum = 1;
                card.data.SetCardBack(true);
                card.FlushRender();
                this.pokerLineList[l1].render.FlushPokerList(this.pokerLineList[l1].data, false);
                if (l1 == 0) {
                    this.pokerFloorNumArray[rm2] = [0, 1, 1];
                }
                else {
                    this.pokerFloorNumArray[rm2] = [1, 1, 0];
                }
            }
            else {
                var card = this.pokerLineList[l1].data.GetIndexCard(rm2);
                card.data.mType = PokerType.coin;
                card.data.mNum = 1;
                card.data.SetCardBack(true);
                card.FlushRender();
                this.pokerLineList[l1].render.FlushPokerList(this.pokerLineList[l1].data, false);
                this.pokerFloorNumArray[rm2] = [1, 0, 1];
            }
            twoNumArray.push(rm2);
            var frontLimit = index - 1;
            var behindLimit = index + 1;
            var det = [0, 1, 0];
            if (rm2 - 1 == twoNumCanArray[frontLimit]) {
                det[0] = 1;
            }
            if (rm2 + 1 == twoNumCanArray[behindLimit]) {
                det[2] = 1;
            }
            //console.log("onetwormrmrm2:", det, rm2, twoNumCanArray[frontLimit], twoNumCanArray[behindLimit])
            if (det[0] == 1 && det[2] == 1) {
                twoNumCanArray.splice(frontLimit, 3);
            }
            else if (det[0] == 1 && det[2] == 0) {
                twoNumCanArray.splice(frontLimit, 2);
            }
            else if (det[0] == 0 && det[2] == 1) {
                twoNumCanArray.splice(index, 2);
            }
            else if (det[0] == 0 && det[2] == 0) {
                twoNumCanArray.splice(index, 1);
            }
            //console.log("onetwo5:", twoNumArray, twoNumCanArray)
        }
    };
    gameTableView.prototype.allCardBackToStart = function () {
        for (var i = 0; i < 3; i++) {
            this.backToStart(this.pokerLineList[i]);
        }
        this.backToStart(this.discardPileList);
        //console.log("this.startCard.data.pokerList.length:", this.startCard.data.pokerList.length)
        for (var i = 0; i < this.startCard.data.pokerList.length; i++) {
            var poker = this.startCard.data.pokerList[i];
            poker.render.img.removeSelf();
            poker.data.RestartInit();
        }
        this.startCard.FlushRender();
    };
    gameTableView.prototype.dearStartDeck = function () {
        this.dearCardArray = new Array();
        var pGroup;
        for (var i = 0; i < 3; i++) {
            pGroup = this.startCard.data.SplitePokerGroupByNum(this.maxFloor);
            //console.log("pGroup:", pGroup);
            //pGroup.pokerList.reverse();
            this.dearCardArray.push(pGroup);
        }
        for (var num = 0; num < this.maxFloor; num++) {
            this.pokerFloorNumArray[num] = [1, 1, 1];
        }
        this.setAllStartCardToFront();
        this.startCard.FlushRender();
        return this.dearCardArray;
    };
    gameTableView.prototype.backToStart = function (pokerGroup) {
        var pokerData = pokerGroup.data;
        this.startCard.data.Concat(pokerData);
        pokerGroup.FlushRender();
    };
    gameTableView.prototype.setAllStartCardToFront = function () {
        this.startCard.data.SetAllCardToFront();
        this.startCard.data.FlushAllCardRender();
    };
    gameTableView.prototype.connectDearCardArrayToRender = function (index, sortEndHandle) {
        var i = index;
        this.pokerLineList[i].data.Concat(this.dearCardArray[i]);
        this.pokerLineList[i].data.SetAllCardToFront();
        this.pokerLineList[i].render.FlushPokerList(this.pokerLineList[i].data, false);
        this.pokerLineList[i].render.SortAndMoveToPos(sortEndHandle);
    };
    gameTableView.prototype.onHeroMounseDown = function () {
        var _this = this;
        if (!this.canMouseDown) {
            return;
        }
        // if (this.passiveListSelectIndex != -1) {
        //     return;
        // }
        if (this.propSelectShinning.length > 0) {
            return;
        }
        this.clickImg = this.Hero;
        this.isStartDraging = true;
        this.isStartDragMoved = false;
        this.nowTimeDown = new Date().getTime();
        Laya.timer.once(this.longClickTime, this, function () {
            if (new Date().getTime() - _this.nowTimeDown >= _this.longClickTime && _this.nowTimeDown != 0) {
                if (!_this.shadowImg1) {
                    _this.shadowImg1 = new Laya.Image();
                }
                if (!_this.shadowImg2) {
                    _this.shadowImg2 = new Laya.Image();
                }
                _this.shadowImg1.skin = 'new/game_image_sd.png';
                _this.shadowImg2.skin = 'new/game_image_sd.png';
                _this.shadowImg1.size(102, 152);
                _this.clickImg.addChild(_this.shadowImg1);
                _this.shadowImg2.size(102, 152);
                _this.clickImg.addChild(_this.shadowImg2);
                _this.mask1 = new Laya.Image();
                _this.mask1.skin = 'new/game_image_shodow.png';
                _this.mask1.size(102, 152);
                _this.mask2 = new Laya.Image();
                _this.mask2.skin = 'new/game_image_shodow.png';
                _this.shadowImg1.mask = _this.mask1;
                _this.mask2.size(102, 152);
                _this.shadowImg2.mask = _this.mask2;
                _this.shinning = new Laya.Image();
                _this.shinning.skin = 'new/game_image_shinning1.png';
                _this.shinning.size(141, 190);
                _this.clickImg.addChild(_this.shinning);
                _this.shinning.pos(-19, -19);
                for (var _i = 0, _a = _this.dragPokerGroup; _i < _a.length; _i++) {
                    var img = _a[_i];
                    var shadowImg1 = new Laya.Image();
                    var shadowImg2 = new Laya.Image();
                    var mask1 = new Laya.Image();
                    var mask2 = new Laya.Image();
                    var shinning = new Laya.Image();
                    _this.shadow1OtherList.push(shadowImg1);
                    _this.shadow2OtherList.push(shadowImg2);
                    _this.mask1OtherList.push(mask1);
                    _this.mask2OtherList.push(mask2);
                    _this.shinningOtherList.push(shinning);
                    shadowImg1.skin = 'new/game_image_sd.png';
                    shadowImg2.skin = 'new/game_image_sd.png';
                    shadowImg1.size(102, 152);
                    img.addChild(shadowImg1);
                    shadowImg2.size(102, 152);
                    img.addChild(shadowImg2);
                    mask1.skin = 'new/game_image_shodow.png';
                    mask1.size(102, 152);
                    mask2.skin = 'new/game_image_shodow.png';
                    shadowImg1.mask = mask1;
                    mask2.size(102, 152);
                    shadowImg2.mask = mask2;
                    shinning.skin = 'new/game_image_shinning1.png';
                    shinning.size(141, 190);
                    img.addChild(shinning);
                    shinning.pos(-19, -19);
                }
                var x = _this.clickImg.x;
                var y = _this.clickImg.y;
                _this.isDownTween = true;
                Laya.Tween.to(_this.clickImg, {
                    x: x - 8,
                    y: y - 8
                }, _this.dtime, Laya.Ease.sineOut, new Laya.Handler(_this, function () {
                    this.isDownTween = false;
                }));
                for (var _b = 0, _c = _this.dragPokerGroup; _b < _c.length; _b++) {
                    var img = _c[_b];
                    var xx = img.x;
                    var yy = img.y;
                    Laya.Tween.to(img, {
                        x: xx - 8,
                        y: yy - 8
                    }, _this.dtime, Laya.Ease.sineOut, new Laya.Handler(_this, function () {
                        this.isDownTween = false;
                    }));
                }
                _this.shinning.alpha = 0;
                Laya.Tween.to(_this.shinning, {
                    alpha: 1
                }, _this.dtime, Laya.Ease.sineOut);
                _this.shadowImg1.pos(5, 5);
                _this.shadowImg2.pos(5, 5);
                _this.mask1.pos(0, 145);
                _this.mask2.pos(97, -5);
                Laya.Tween.to(_this.shadowImg1, {
                    x: 20,
                    y: 20
                }, _this.dtime, Laya.Ease.sineOut);
                Laya.Tween.to(_this.shadowImg2, {
                    x: 20,
                    y: 20
                }, _this.dtime, Laya.Ease.sineOut);
                Laya.Tween.to(_this.mask1, {
                    x: 0,
                    y: 132
                }, _this.dtime, Laya.Ease.sineOut);
                Laya.Tween.to(_this.mask2, {
                    x: 82,
                    y: -20
                }, _this.dtime, Laya.Ease.sineOut);
                for (var i = 0; i < _this.shinningOtherList.length; i++) {
                    _this.shinningOtherList[i].alpha = 0;
                    Laya.Tween.to(_this.shinningOtherList[i], {
                        alpha: 1
                    }, _this.dtime, Laya.Ease.sineOut);
                    _this.shadow1OtherList[i].pos(5, 5);
                    _this.shadow2OtherList[i].pos(5, 5);
                    _this.mask1OtherList[i].pos(0, 145);
                    _this.mask2OtherList[i].pos(97, -5);
                    Laya.Tween.to(_this.shadow1OtherList[i], {
                        x: 20,
                        y: 20
                    }, _this.dtime, Laya.Ease.sineOut);
                    Laya.Tween.to(_this.shadow2OtherList[i], {
                        x: 20,
                        y: 20
                    }, _this.dtime, Laya.Ease.sineOut);
                    Laya.Tween.to(_this.mask1OtherList[i], {
                        x: 0,
                        y: 132
                    }, _this.dtime, Laya.Ease.sineOut);
                    Laya.Tween.to(_this.mask2OtherList[i], {
                        x: 82,
                        y: -20
                    }, _this.dtime, Laya.Ease.sineOut);
                }
                Laya.Tween.to(_this.Hero, {
                    scaleX: 1.1,
                    scaleY: 1.1
                }, _this.dtime, Laya.Ease.sineOut);
            }
        });
        this.Hero.x = Laya.stage.mouseX - this.Hero.width / 2 - 20;
        this.Hero.y = Laya.stage.mouseY - this.Hero.height / 2 - 20;
        this.dragMovingStartPos.x = this.Hero.x;
        this.dragMovingStartPos.y = this.Hero.y;
        this.mouseStartPos.x = Laya.stage.mouseX;
        this.mouseStartPos.y = Laya.stage.mouseY;
    };
    gameTableView.prototype.onHeroMounseMove = function () {
        if (!this.isStartDraging) {
            return;
        }
        // if (this.passiveListSelectIndex != -1) {
        //     return;
        // }
        if (this.propSelectShinning.length > 0) {
            return;
        }
        var offsetX = Laya.stage.mouseX - this.mouseStartPos.x;
        var offsetY = Laya.stage.mouseY - this.mouseStartPos.y;
        this.Hero.x = this.dragMovingStartPos.x + offsetX;
        this.Hero.y = this.dragMovingStartPos.y + offsetY;
        if (!this.isStartDragMoved) {
            var pt = new Laya.Point(offsetX, offsetY);
            if (pt.distance(0, 0) > 5) //拖动距离小于5的话就算是点击 不然就是移动
             {
                this.isStartDragMoved = true;
            }
        }
        else {
            var isSelected = [0, 0, 0];
            if (this.pokerLineList[1].data.pokerList.length <= 0) {
                if (new Laya.Rectangle(this.Hero.x, this.Hero.y, this.Hero.width, this.Hero.height).intersects(new Laya.Rectangle(this.Target1.x + this.TargetList.x, this.Target1.y + this.TargetList.y, this.Target1.width, this.Target1.height))) {
                    this.selectIndex = -2;
                }
                else if (new Laya.Rectangle(this.Hero.x, this.Hero.y, this.Hero.width, this.Hero.height).intersects(new Laya.Rectangle(this.Target2.x + this.TargetList.x, this.Target2.y + this.TargetList.y, this.Target2.width, this.Target2.height))) {
                    this.selectIndex = -3;
                }
                else if (new Laya.Rectangle(this.Hero.x, this.Hero.y, this.Hero.width, this.Hero.height).intersects(new Laya.Rectangle(this.Target3.x + this.TargetList.x, this.Target3.y + this.TargetList.y, this.Target3.width, this.Target3.height))) {
                    this.selectIndex = -4;
                }
                return;
            }
            for (var i = 0; i < this.pokerLineList.length; i++) {
                var checkGroup = this.pokerLineList[i];
                if (checkGroup.data.pokerList.length <= 0) {
                    continue;
                }
                var isCollision = this.CheckCollision(this.Hero, checkGroup);
                if (isCollision) {
                    isSelected[i] = 1;
                }
                else {
                    isSelected[i] = 0;
                }
            }
            if (isSelected[0] == 1 || isSelected[1] == 1 || isSelected[2] == 1) {
                if (!this.selectShinning) {
                    this.selectShinning = new Laya.Image();
                }
                this.selectShinning.skin = 'new/game_image_shinning2.png';
                this.selectShinning.size(141, 190);
                if (isSelected[0] == 1) {
                    this.selectIndex = 0;
                }
                else if (isSelected[1] == 1) {
                    this.selectIndex = 1;
                }
                else if (isSelected[2] == 1) {
                    this.selectIndex = 2;
                }
                // //console.log("isCollision：", this.pokerLineList[this.selectIndex].render.collisionImage)
                this.pokerLineList[this.selectIndex].render.collisionImage.addChild(this.selectShinning);
                this.selectShinning.pos(-19, -19);
            }
            else {
                if (this.selectShinning) {
                    this.selectShinning.removeSelf();
                    this.selectShinning = null;
                    this.selectIndex = -1;
                }
            }
        }
    };
    gameTableView.prototype.onHeroMounseUp = function () {
        this.nowTimeDown = 0;
        if (!this.isStartDraging) {
            return;
        }
        // if (this.passiveListSelectIndex != -1) {
        //     return;
        // }
        if (this.propSelectShinning.length > 0) {
            return;
        }
        if (this.isDownTween) {
            for (var _i = 0, _a = this.dragPokerGroup; _i < _a.length; _i++) {
                var img = _a[_i];
                Laya.Tween.clearAll(img);
            }
            Laya.Tween.clearAll(this.clickImg);
            Laya.Tween.clearAll(this.mask1);
            Laya.Tween.clearAll(this.mask2);
            Laya.Tween.clearAll(this.shadowImg1);
            Laya.Tween.clearAll(this.shadowImg2);
            Laya.Tween.clearAll(this.shinning);
        }
        if (this.shadowImg1) {
            this.shadowImg1.removeSelf();
            this.shadowImg1 = null;
            this.mask1.removeSelf();
            this.mask1 = null;
        }
        if (this.shadowImg2) {
            this.shadowImg2.removeSelf();
            this.shadowImg2 = null;
            this.shadowImg2 = null;
            this.mask2 = null;
        }
        if (this.shinning) {
            this.shinning.removeSelf();
            this.shinning = null;
        }
        if (this.selectShinning) {
            this.selectShinning.removeSelf();
            this.selectShinning = null;
        }
        for (var _b = 0, _c = this.shadow1OtherList; _b < _c.length; _b++) {
            var s1 = _c[_b];
            s1.removeSelf();
            s1 = null;
        }
        for (var _d = 0, _e = this.shadow2OtherList; _d < _e.length; _d++) {
            var s2 = _e[_d];
            s2.removeSelf();
            s2 = null;
        }
        for (var _f = 0, _g = this.mask1OtherList; _f < _g.length; _f++) {
            var s3 = _g[_f];
            s3.removeSelf();
            s3 = null;
        }
        for (var _h = 0, _j = this.mask2OtherList; _h < _j.length; _h++) {
            var s4 = _j[_h];
            s4.removeSelf();
            s4 = null;
        }
        for (var _k = 0, _l = this.shinningOtherList; _k < _l.length; _k++) {
            var s5 = _l[_k];
            s5.removeSelf();
            s5 = null;
        }
        this.shadow1OtherList = [];
        this.shadow2OtherList = [];
        this.mask1OtherList = [];
        this.mask2OtherList = [];
        this.shinningOtherList = [];
        this.Hero.scale(1, 1);
        if (this.isStartDragMoved) {
            //拖动
        }
        else {
            //点击
        }
        this.isStartDraging = false;
        if (this.selectIndex == -2) {
            this.startGame(true);
            return;
        }
        else if (this.selectIndex == -3) {
            this.startGame(true);
            return;
        }
        else if (this.selectIndex == -4) {
            this.startGame(true);
            return;
        }
        this.RookieGuide(0);
        this.CheckEvents(this.selectIndex);
        if (this.selectIndex != -1) {
            this.heroIndex = this.selectIndex;
        }
        this.selectIndex = -1;
    };
    gameTableView.prototype.GetCardBound = function (cardImg) {
        var img1 = cardImg;
        var rect1 = img1.getBounds();
        rect1.x *= img1.globalScaleX;
        rect1.y *= img1.globalScaleX;
        rect1.width *= img1.globalScaleX;
        rect1.height *= img1.globalScaleY;
        //var rect2= img1.getSelfBounds();
        var img1Parent = img1.parent;
        rect1.x += img1Parent.x * img1.globalScaleX;
        rect1.y += img1Parent.y * img1.globalScaleX;
        var imgParent2 = img1.parent.parent;
        rect1.x += imgParent2.x;
        rect1.y += imgParent2.y;
        var imgParent3 = img1.parent.parent.parent;
        rect1.x += imgParent3.x;
        rect1.y += imgParent3.y;
        rect1.x += this.pokerList.x;
        rect1.y += this.pokerList.y;
        return rect1;
    };
    gameTableView.prototype.CheckCollision = function (group1, group2) {
        if (group1 == null || group2.render.collisionImage == null) {
            return false;
        }
        if (group2.data.GetLastCard().data.IsCardBack) {
            return false;
        }
        var img1 = group1;
        var img2 = group2.render.collisionImage;
        // //console.log("img2: ", img2, img2.parent)
        var rect1 = new Laya.Rectangle(group1.x, group1.y, group1.width, group1.height);
        var rect2 = this.GetCardBound(img2);
        var tRet = false;
        if (rect1.intersects(rect2) && (rect1.x + rect1.width / 2) >= rect2.x && (rect1.x + rect1.width / 2) <= (rect2.x + rect2.width) &&
            (rect1.y + rect1.height / 2) >= rect2.y && (rect1.y + rect1.height / 2) <= (rect2.y + rect2.height) &&
            Math.abs(this.heroPosList[this.heroIndex] - rect2.x) <= rect2.width * 2) {
            tRet = true;
        }
        return tRet;
    };
    //处理事件 
    gameTableView.prototype.CheckEvents = function (index) {
        var _this = this;
        if (index != -1) {
            var rect = this.GetCardBound(this.pokerLineList[index].render.collisionImage);
            // //console.log("rect:", rect)
            this.Hero.centerX = rect.x - Laya.stage.width / 2 + this.Hero.width / 2;
            this.Hero.centerY = rect.y - Laya.stage.height / 2 + this.Hero.height / 2;
            var currentType = this.pokerLineList[index].data.GetLastCard().data.mType;
            this.DisCardPile(index, true);
            this.heroStg.SetAction(false);
            var hasMonster;
            // //console.log("hasMonster:", this.pokerLineList[index].data.GetLastCard().data)
            if (this.pokerLineList[index].data.GetLastCardIndex() == -1 || this.pokerLineList[1].data.GetLastCardIndex() == 0 || currentType == PokerType.store || this.heroStg.IsDisregard) {
                hasMonster = false;
            }
            else {
                hasMonster = this.CheckTopMonster(index);
            }
            if (hasMonster) {
                var card = this.pokerLineList[index].data.GetLastCard();
                var warn = new Laya.Image();
                var originalZorder = 0;
                warn.skin = "Game/warning.png";
                card.render.img.addChild(warn);
                warn.anchorX = 0.5;
                warn.anchorY = 0.5;
                warn.pos(card.render.img.width / 2, 0);
                warn.alpha = 0;
                this.canMouseDown = false;
                Laya.Tween.to(warn, { alpha: 1 }, 500, Laya.Ease.linearIn, new Laya.Handler(this, function () {
                    Laya.Tween.to(warn, { alpha: 0 }, 500, Laya.Ease.linearIn, new Laya.Handler(_this, function () {
                        warn.removeSelf();
                        warn.destroy();
                        var cardY = card.render.img.y;
                        var cardX = card.render.img.x;
                        var cardFloor = card.data.mFloor;
                        _this.pokerList.zOrder = objectZorder.Top;
                        card.render.img.anchorX = 0.5;
                        card.render.img.anchorY = 0.5;
                        card.render.img.x = cardX + card.render.img.width / 2;
                        card.render.img.y = cardY + card.render.img.height / 2;
                        Laya.Tween.to(card.render.img, { y: cardY + 200, scaleX: 1.3, scaleY: 1.3 }, 800, Laya.Ease.sineOut, new Laya.Handler(_this, function () {
                            Laya.Tween.to(card.render.img, { alpha: 0 }, 100, Laya.Ease.linearIn, new Laya.Handler(_this, function () {
                                card.render.img.anchorX = 0;
                                card.render.img.anchorY = 0;
                                card.render.img.x = cardX;
                                card.render.img.y = cardY;
                                _this.pokerList.zOrder = objectZorder.Poker;
                                //console.log("originalZorder:", originalZorder)
                                _this.DisCardPile(index, true, true);
                                _this.refreshHeroUI();
                                //创建一个非怪物的牌,数值根据关卡来定
                                var rm = [PokerType.blood, PokerType.coin, PokerType.atk];
                                var type = rm[MathUtils.getRandom(0, rm.length - 1)];
                                var num;
                                var poker;
                                if (type == PokerType.atk) {
                                    num = MathUtils.getRandom(1, 5);
                                    poker = new pokerChain(type, num);
                                    poker.CreateHurt(MathUtils.getRandom(CardConstant.CardWeapon[num]["num"][0], CardConstant.CardWeapon[num]["num"][1]).toString());
                                }
                                else {
                                    num = MathUtils.getRandom(1, 9);
                                    poker = new pokerChain(type, num);
                                }
                                poker.CreateRender();
                                _this.pokerLineList[index].data.pokerList.push(poker);
                                _this.pokerLineList[index].render.FlushPokerList(_this.pokerLineList[index].data, false);
                                _this.FlushCardClick(index);
                                poker.data.SetFloor(cardFloor);
                                poker.render.img.anchorX = 0.5;
                                poker.render.img.anchorY = 0.5;
                                poker.render.img.x = cardX + card.render.img.width / 2;
                                poker.render.img.y = cardY + card.render.img.height / 2;
                                poker.render.img.scale(0, 0);
                                Laya.Tween.to(poker.render.img, { scaleX: 1, scaleY: 1 }, 500, Laya.Ease.sineIn, new Laya.Handler(_this, function () {
                                    poker.render.img.anchorX = 0;
                                    poker.render.img.anchorY = 0;
                                    poker.render.img.x = cardX;
                                    poker.render.img.y = cardY;
                                    _this.CardMoveDown(index);
                                    _this.canMouseDown = true;
                                }));
                            }));
                        }));
                    }));
                }));
            }
            else {
                if (this.pokerLineList[1].data.GetLastCardIndex() != -1)
                    this.CardMoveDown(index);
            }
            // //console.log("GetLastCard:", this.discardPileList.data, this.startCard.data.pokerList)
        }
    };
    gameTableView.prototype.CardMoveDown = function (index) {
        var _this = this;
        var index1;
        var index2;
        if (index == 0) {
            index1 = 1;
            index2 = 2;
        }
        else if (index == 1) {
            index1 = 0;
            index2 = 2;
        }
        else {
            index1 = 0;
            index2 = 1;
        }
        this.DisCardPile(index1);
        this.DisCardPile(index2);
        var offsetY = Math.abs(this.Hero.centerY - this.fixedY);
        this.canMouseDown = false;
        Laya.Tween.to(this.Hero, { centerY: this.fixedY }, 400, Laya.Ease.sineOut, new Laya.Handler(this, function () {
            _this.heroStg.SetLuckyBuffTime(true);
            _this.heroStg.SetFloor();
            // this.heroStg.StateEffect(null);
            _this.canMouseDown = true;
            _this.heroStg.SetBattleValue(0);
            _this.heroStg.SetBattleEnemyHp(0);
            //console.log("heroStgFloor:", this.heroStg.Floor)
        }), 400);
        var originalY = this.pokerList.centerY;
        Laya.Tween.to(this.pokerList, { centerY: originalY + offsetY }, 400, Laya.Ease.sineOut, new Laya.Handler(this, function () {
        }), 400);
        var targetY = this.TargetList.centerY;
        Laya.Tween.to(this.TargetList, { centerY: targetY + offsetY }, 400, Laya.Ease.sineOut, new Laya.Handler(this, function () {
        }), 400);
    };
    gameTableView.prototype.DisCardPile = function (index, isDeal, isTopMonster) {
        var _this = this;
        if (isDeal === void 0) { isDeal = false; }
        if (isTopMonster === void 0) { isTopMonster = false; }
        var cardIndex = this.pokerLineList[index].data.GetLastCardIndex();
        var card = this.pokerLineList[index].data.GetLastCard();
        var cardList = this.pokerLineList[index].data.SplitePokerGroup2(cardIndex);
        if (isDeal) {
            switch (card.data.mType) {
                case PokerType.blood:
                    this.heroStg.SetHp(Number(card.render.TxtFileNum));
                    break;
                case PokerType.coin:
                    this.heroStg.SetCoin(Number(card.render.TxtFileNum));
                    break;
                case PokerType.enemy:
                    var deductedHp = this.Battle(card);
                    if (this.heroStg.IsHandsHold) {
                        this.heroStg.SetMain(!this.heroStg.IsMain);
                        var temp = this.HeroAtk.y;
                        this.HeroAtk.y = this.HeroAtk2.y;
                        this.HeroAtk2.y = temp;
                    }
                    this.heroStg.SetBattleEnemyHp(Number(card.render.TxtFileNum));
                    if (deductedHp > 0) {
                        this.heroStg.SetBattleValue(deductedHp);
                    }
                    break;
                case PokerType.atk:
                    this.heroStg.SetExtraAtk(0, false);
                    if (this.heroStg.IsHandsHold) {
                        var w1 = this.heroStg.Atk;
                        var w2 = this.heroStg.OtherAtk;
                        if (w1 >= w2) {
                            this.heroStg.SetOtherAtk(Number(card.render.TxtFileNum), false);
                            this.heroStg.SetOffHandWeapon(card.render.TxtFileName);
                        }
                        else {
                            this.heroStg.SetAtk(Number(card.render.TxtFileNum), false);
                            this.heroStg.SetWeapon(card.render.TxtFileName);
                        }
                    }
                    else {
                        this.heroStg.SetAtk(Number(card.render.TxtFileNum), false);
                        this.heroStg.SetWeapon(card.render.TxtFileName);
                        // console.log("handseven", Number(card.render.TxtFileNum), card.render.TxtFileName, this.heroStg.Atk)
                    }
                    break;
                case PokerType.store:
                    BaseViewManager.Inst.onSceneStore();
                    if (!this.firstGetProp) {
                        this.firstGetProp = true;
                        this.RookieGuide(3);
                    }
                    break;
                case PokerType.treasure:
                    this.heroStg.SetKongFuArray(card.render.TxtFileName);
                    if (!this.firstGetKongFu) {
                        this.firstGetKongFu = true;
                        this.RookieGuide(2);
                    }
                    break;
            }
            if (!isTopMonster) {
                this.heroStg.StateEffect(card.data.mType);
                this.heroStg.SetAction(true);
            }
            this.refreshHeroUI();
            this.discardPileList.data.Concat(cardList);
            this.discardPileList.render.FlushPokerList(this.discardPileList.data, false);
            this.pokerLineList[index].render.FlushPokerList(this.pokerLineList[index].data, false);
        }
        else {
            Laya.Tween.to(card.render.img, { alpha: 0 }, 200, Laya.Ease.sineOut, new Laya.Handler(this, function () {
                card.render.img.alpha = 1;
                _this.discardPileList.data.Concat(cardList);
                _this.discardPileList.render.FlushPokerList(_this.discardPileList.data, false);
                _this.pokerLineList[index].render.FlushPokerList(_this.pokerLineList[index].data, false);
            }), 100);
        }
    };
    gameTableView.prototype.refreshHeroUI = function () {
        if (this.heroStg.Atk <= 0) {
            this.heroStg.SetWeapon('空手');
        }
        if (this.heroStg.OtherAtk <= 0) {
            this.heroStg.SetOffHandWeapon('副手');
        }
        this.HeroHp.text = '血量:' + this.heroStg.Hp + '/' + this.heroStg.CompleteHp;
        this.HeroCoin.text = this.heroStg.Coin + '$';
        this.HeroAtk.text = this.heroStg.Weapon + ':' + this.heroStg.Atk;
        this.HeroAtk2.text = this.heroStg.OffHandWeapon + ':' + this.heroStg.OtherAtk;
        this.HeroShield.text = '护盾' + ':' + this.heroStg.Shiled;
        while (this.PassiveList.numChildren > 1) {
            var passive = this.PassiveList.getChildAt(this.PassiveList.numChildren - 1);
            passive.removeSelf();
            passive.destroy();
        }
        while (this.InitiativeList.numChildren > 1) {
            var initiative = this.InitiativeList.getChildAt(this.InitiativeList.numChildren - 1);
            initiative.removeSelf();
            initiative.destroy();
        }
        for (var j = 0; j < this.heroStg.KongFuArray.length; j++) {
            var kf = new Laya.Label();
            kf.tag = "kongfu" + this.heroStg.KongFuArray[j].id.toString();
            kf.name = 'KongFuArray' + j.toString();
            kf.bold = true;
            kf.font = "SimHei";
            kf.fontSize = 30;
            kf.wordWrap = true;
            kf.width = 50;
            kf.align = 'center';
            kf.text = this.heroStg.KongFuArray[j].name + "";
            kf.centerX = 0;
            var lastNode;
            if (this.heroStg.KongFuArray[j].isItv) {
                kf.color = "#65ff00";
                this.InitiativeList.addChild(kf);
                lastNode = this.InitiativeList.getChildAt(this.InitiativeList.numChildren - 2);
            }
            else {
                kf.color = "#ffffff";
                this.PassiveList.addChild(kf);
                lastNode = this.PassiveList.getChildAt(this.PassiveList.numChildren - 2);
            }
            kf.centerX = 0;
            kf.centerY = lastNode.centerY + lastNode.height + 20;
        }
        for (var j = 0; j < this.heroStg.PropsArray.length; j++) {
            var pp = new Laya.Label();
            pp.tag = "prop" + this.heroStg.PropsArray[j].id.toString();
            pp.name = 'PropsArray' + j.toString();
            pp.bold = true;
            pp.font = "SimHei";
            pp.fontSize = 30;
            pp.wordWrap = true;
            pp.width = 50;
            pp.align = 'center';
            pp.text = this.heroStg.PropsArray[j].name + "";
            pp.centerX = 0;
            var lastNode;
            if (this.heroStg.PropsArray[j].isItv) {
                pp.color = "#65ff00";
                this.InitiativeList.addChild(pp);
                lastNode = this.InitiativeList.getChildAt(this.InitiativeList.numChildren - 2);
            }
            else {
                pp.color = "#ffffff";
                this.PassiveList.addChild(pp);
                lastNode = this.PassiveList.getChildAt(this.PassiveList.numChildren - 2);
            }
            pp.centerX = 0;
            pp.centerY = lastNode.centerY + lastNode.height + 20;
        }
        this.onPassiveListClick();
        this.onInitiativeListClick();
    };
    gameTableView.prototype.CheckTopMonster = function (index) {
        var card = this.pokerLineList[index].data.GetLastCard();
        if (card.data.mType == PokerType.enemy) {
            return true;
        }
        else {
            return false;
        }
    };
    gameTableView.prototype.Battle = function (card) {
        var deductedHp = 0;
        var remainHurt = 0;
        var hurt = Number(card.render.TxtFileNum);
        if (this.heroStg.ReduceValue > 0) {
            hurt -= this.heroStg.ReduceValue;
        }
        if (this.heroStg.Shiled > 0) {
            remainHurt = hurt - this.heroStg.Shiled;
            this.heroStg.SetShiled(-hurt, true);
            if (remainHurt > 0) {
                hurt = remainHurt;
            }
            else {
                hurt = 0;
            }
        }
        if (this.heroStg.Atk > 0 || this.heroStg.OtherAtk > 0) {
            if (this.heroStg.IsHandsHold) {
                if (this.heroStg.Atk > 0 && this.heroStg.OtherAtk == 0) {
                    remainHurt = hurt - this.heroStg.Atk;
                    this.heroStg.SetAtk(-hurt, true);
                }
                else if (this.heroStg.Atk == 0 && this.heroStg.OtherAtk > 0) {
                    remainHurt = hurt - this.heroStg.OtherAtk;
                    this.heroStg.SetOtherAtk(-hurt, true);
                }
                else if (this.heroStg.Atk > 0 && this.heroStg.OtherAtk > 0) {
                    if (this.heroStg.IsMain) {
                        remainHurt = hurt - this.heroStg.Atk;
                        this.heroStg.SetAtk(-hurt, true);
                    }
                    else {
                        remainHurt = hurt - this.heroStg.OtherAtk;
                        this.heroStg.SetOtherAtk(-hurt, true);
                    }
                }
            }
            else {
                remainHurt = hurt - this.heroStg.Atk;
                this.heroStg.SetAtk(-hurt, true);
            }
            if (remainHurt > 0) {
                this.heroStg.SetHp(-remainHurt);
                deductedHp = remainHurt;
                if (this.heroStg.Hp <= 0) {
                    this.endGame();
                    return;
                }
            }
        }
        else {
            this.heroStg.SetHp(-hurt);
            deductedHp = hurt;
            if (this.heroStg.Hp <= 0) {
                this.endGame();
                return;
            }
        }
        return deductedHp;
    };
    /**
     * 对怪物造成伤害
     */
    gameTableView.prototype.Damage = function (index, hurt) {
        var card = this.pokerLineList[index].data.GetLastCard();
        var hp = Number(card.render.TxtFileNum);
        if (hurt >= hp) {
            this.ChangeCard(index);
        }
        else {
            card.data.mNum = hp - hurt;
            card.FlushRender();
        }
    };
    gameTableView.prototype.ChangeCard = function (index) {
        var _this = this;
        var card = this.pokerLineList[index].data.GetLastCard();
        var cardFloor = card.data.mFloor;
        var cardY = card.render.img.y;
        var cardX = card.render.img.x;
        var cardType = card.data.mType;
        this.canMouseDown = false;
        this.DisCardPile(index);
        //创建一个非怪物的牌,数值根据关卡来定
        var rm;
        if (cardType == PokerType.enemy) {
            rm = [PokerType.blood, PokerType.coin, PokerType.atk];
        }
        else {
            rm = [PokerType.blood, PokerType.coin, PokerType.atk, PokerType.enemy];
        }
        var type = rm[MathUtils.getRandom(0, rm.length - 1)];
        var num;
        var poker;
        if (type == PokerType.atk) {
            num = MathUtils.getRandom(1, 5);
            poker = new pokerChain(type, num);
            poker.CreateHurt(MathUtils.getRandom(CardConstant.CardWeapon[num]["num"][0], CardConstant.CardWeapon[num]["num"][1]).toString());
        }
        else if (type == PokerType.enemy) {
            card.data.mType = PokerType.enemy;
            num = MathUtils.getRandom(1, 3);
            poker = new pokerChain(type, num);
            card.data.SetAtk(MathUtils.getRandom(CardConstant.CardCK[num]["num"][0], CardConstant.CardCK[num]["num"][1]).toString());
        }
        else {
            num = MathUtils.getRandom(1, 9);
            poker = new pokerChain(type, num);
        }
        poker.CreateRender();
        this.pokerLineList[index].data.pokerList.push(poker);
        this.pokerLineList[index].render.FlushPokerList(this.pokerLineList[index].data, false);
        this.FlushCardClick(index);
        poker.data.SetFloor(cardFloor);
        poker.render.img.anchorX = 0.5;
        poker.render.img.anchorY = 0.5;
        poker.render.img.x = cardX + card.render.img.width / 2;
        poker.render.img.y = cardY + card.render.img.height / 2;
        poker.render.img.scale(0, 0);
        Laya.Tween.to(poker.render.img, { scaleX: 1, scaleY: 1 }, 500, Laya.Ease.sineIn, new Laya.Handler(this, function () {
            poker.render.img.anchorX = 0;
            poker.render.img.anchorY = 0;
            poker.render.img.x = cardX;
            poker.render.img.y = cardY;
            _this.canMouseDown = true;
        }));
    };
    gameTableView.prototype.OtherStep = function (index) {
        this.Hero.centerX = this.heroPosList[index] - Laya.stage.width / 2 + this.Hero.width / 2;
    };
    gameTableView.prototype.SetObjectDesc = function (isCard, array, id, desc) {
        if (isCard) {
            this.desc.text = "描述:" + desc;
        }
        else {
            for (var i = 0; i < array.length; i++) {
                var di = array[i].id;
                if (di == id) {
                    this.desc.text = "描述:" + array[i].desc;
                }
            }
        }
    };
    gameTableView.prototype.FlushCardClick = function (index) {
        if (index < 0) {
            return;
        }
        var lineGroup = this.pokerLineList[index];
        for (var i = 0; i < lineGroup.data.pokerList.length; i++) {
            var poker = lineGroup.data.pokerList[i];
            poker.render.img.offAll();
            if (poker.data.IsCardBack) {
                continue;
            }
            poker.render.img.on(Laya.Event.CLICK, this, this.onCardClick, [poker]);
        }
    };
    gameTableView.prototype.onCardClick = function (poker) {
        var data = poker.data;
        var desc = '';
        switch (data.mType) {
            case PokerType.blood:
                desc = CardConstant.CardBlood[0]["desc"];
                break;
            case PokerType.coin:
                desc = CardConstant.CardCoin[0]["desc"];
                break;
            case PokerType.enemy:
                desc = CardConstant.CardCK[data.mNum]["desc"];
                break;
            case PokerType.atk:
                desc = CardConstant.CardWeapon[data.mNum]["desc"];
                break;
            case PokerType.store:
                desc = CardConstant.CardStore[0]["desc"];
                break;
            case PokerType.treasure:
                desc = CardConstant.CardTreasure[data.mNum]["desc"];
                break;
        }
        this.SetObjectDesc(true, null, null, desc);
        if (this.propSelectShinning.length > 0) {
            if ((!!poker.render.img.getChildByName("destroyshinning0") || !!poker.render.img.getChildByName("destroyshinning1") || !!poker.render.img.getChildByName("destroyshinning2")) && poker.data.mType == PokerType.enemy) {
                var index = 0;
                if (!!poker.render.img.getChildByName("destroyshinning0")) {
                    index = 0;
                }
                else if (!!poker.render.img.getChildByName("destroyshinning1")) {
                    index = 1;
                }
                else if (!!poker.render.img.getChildByName("destroyshinning2")) {
                    index = 2;
                }
                for (var idx = 0; idx < this.propSelectShinning.length; idx++) {
                    var element = this.propSelectShinning[idx];
                    element.removeSelf();
                    element.destroy();
                }
                this.Damage(index, 8);
                this.cancelMoveBg();
                this.heroStg.PropsArray.splice(this.passivePropCompleteIdx, 1);
                this.passivePropCompleteIdx = -1;
                this.refreshHeroUI();
            }
            if ((!!poker.render.img.getChildByName("changeshinning0") || !!poker.render.img.getChildByName("changeshinning1") || !!poker.render.img.getChildByName("changeshinning2")) && poker.data.mFloor != 0) {
                var index = 0;
                if (!!poker.render.img.getChildByName("changeshinning0")) {
                    index = 0;
                }
                else if (!!poker.render.img.getChildByName("changeshinning1")) {
                    index = 1;
                }
                else if (!!poker.render.img.getChildByName("changeshinning2")) {
                    index = 2;
                }
                for (var idx = 0; idx < this.propSelectShinning.length; idx++) {
                    var element = this.propSelectShinning[idx];
                    element.removeSelf();
                    element.destroy();
                }
                this.ChangeCard(index);
                this.cancelMoveBg();
                this.heroStg.PropsArray.splice(this.passivePropCompleteIdx, 1);
                this.passivePropCompleteIdx = -1;
                this.refreshHeroUI();
            }
        }
    };
    gameTableView.prototype.onPassiveListClick = function () {
        var _this = this;
        for (var i = 1; i < this.PassiveList.numChildren; i++) {
            var passive = this.PassiveList.getChildAt(i);
            passive.offAll();
            passive.on(Laya.Event.CLICK, this, function (e) {
                var tr = e.target;
                if (tr.tag.indexOf("prop") != -1) {
                    _this.SetObjectDesc(false, _this.heroStg.PropsArray, Number(tr.tag.substring(4, tr.tag.length)));
                }
                else if (tr.tag.indexOf("kongfu") != -1) {
                    _this.SetObjectDesc(false, _this.heroStg.KongFuArray, Number(tr.tag.substring(6, tr.tag.length)));
                }
            });
        }
    };
    gameTableView.prototype.onInitiativeListClick = function () {
        for (var i = 1; i < this.InitiativeList.numChildren; i++) {
            var initiative = this.InitiativeList.getChildAt(i);
            initiative.offAll();
            var centerXY = new Laya.Point(initiative.centerX, initiative.centerY);
            initiative.on(Laya.Event.MOUSE_DOWN, this, this.onInitiativeMounseDown, [initiative, i, centerXY]);
            initiative.on(Laya.Event.MOUSE_MOVE, this, this.onInitiativeMounseMove, [initiative, i, centerXY]);
            initiative.on(Laya.Event.MOUSE_UP, this, this.onInitiativeMounseUp, [initiative, i, centerXY]);
            // console.log("diandian:", i, this.InitiativeList.getChildAt(i).name)
        }
    };
    /**
     * 处理道具效果
     */
    gameTableView.prototype.DealPropGruop = function (targetName, targetId) {
        var _this = this;
        //是否可以主动开启
        var prop = null;
        for (var i_2 = 0; i_2 < this.heroStg.PropsArray.length; i_2++) {
            if (this.heroStg.PropsArray[i_2].id == targetId) {
                prop = this.heroStg.PropsArray[i_2];
                break;
            }
        }
        if (!prop) {
            return;
        }
        this.passivePropCompleteIdx = Number(targetName.substring(10, targetName.length));
        // console.log("DealPropGruop-idx2:" + this.passivePropCompleteIdx, targetName);
        if (!prop.isItv) {
        }
        else {
            switch (prop.id) {
                case 1:
                    this.heroStg.SetHp(5);
                    this.heroStg.PropsArray.splice(this.passivePropCompleteIdx, 1);
                    this.passivePropCompleteIdx = -1;
                    break;
                case 2:
                    this.heroStg.SetCompleteHp(5);
                    this.heroStg.PropsArray.splice(this.passivePropCompleteIdx, 1);
                    this.passivePropCompleteIdx = -1;
                    break;
                case 3:
                    for (var i_3 = 0; i_3 < 3; i_3++) {
                        var bool = this.CheckTopMonster(i_3);
                        if (bool) {
                            var card = this.pokerLineList[i_3].data.GetLastCard();
                            if (card.data.IsCardBack) {
                                continue;
                            }
                            var sn = new Laya.Image();
                            sn.skin = 'new/game_image_shinning1.png';
                            sn.size(141, 190);
                            card.render.img.addChild(sn);
                            sn.name = "destroyshinning" + i_3.toString();
                            sn.pos(-19, -19);
                            this.propSelectShinning.push(sn);
                        }
                    }
                    break;
                case 4:
                    for (var i_4 = 0; i_4 < 3; i_4++) {
                        var card = this.pokerLineList[i_4].data.GetLastCard();
                        if (card.data.IsCardBack) {
                            continue;
                        }
                        var sn = new Laya.Image();
                        sn.skin = 'new/game_image_shinning1.png';
                        sn.size(141, 190);
                        card.render.img.addChild(sn);
                        sn.name = "changeshinning" + i_4.toString();
                        sn.pos(-19, -19);
                        this.propSelectShinning.push(sn);
                    }
                    break;
                case 5:
                    for (var i = 0; i < 3; i++) {
                        if (this.heroIndex != i) {
                            var sn = new Laya.Image();
                            sn.skin = 'new/game_image_shinning1.png';
                            sn.size(141, 190);
                            this.addChild(sn);
                            sn.name = "roadshinning" + i;
                            sn.pos(-19 + this.heroPosList[i], -19 + this.Hero.y);
                            this.propSelectShinning.push(sn);
                            sn.on(Laya.Event.CLICK, this, function (e) {
                                //console.log("x---y:", e.target.name.substring(e.target.name.length - 1))
                                _this.OtherStep(e.target.name.substring(e.target.name.length - 1));
                                for (var idx = 0; idx < _this.propSelectShinning.length; idx++) {
                                    var element = _this.propSelectShinning[idx];
                                    element.removeSelf();
                                    element.destroy();
                                }
                                _this.heroStg.PropsArray.splice(_this.passivePropCompleteIdx, 1);
                                _this.passivePropCompleteIdx = -1;
                                _this.cancelMoveBg();
                            });
                        }
                    }
                    break;
                case 6:
                    this.heroStg.SetLuckyBuffTime(false, 3);
                    this.heroStg.PropsArray.splice(this.passivePropCompleteIdx, 1);
                    this.passivePropCompleteIdx = -1;
                    break;
                case 7:
                    this.ShuffleAllCard();
                    this.heroStg.PropsArray.splice(this.passivePropCompleteIdx, 1);
                    this.passivePropCompleteIdx = -1;
                    break;
                case 8:
                    this.heroStg.SetShiled(5, false);
                    this.heroStg.PropsArray.splice(this.passivePropCompleteIdx, 1);
                    this.passivePropCompleteIdx = -1;
                    break;
            }
        }
        this.refreshHeroUI();
    };
    gameTableView.prototype.ShuffleAllCard = function () {
        //设置卡牌,50%怪物,15%血量,15%武器,20%金币
        for (var index = 0; index < 3; index++) {
            this.pokerLineList[index].data.pokerList.forEach(function (card, index) {
                if (index != 0 && !card.data.IsCardBack) {
                    var rand = MathUtils.getRandom(1, 30);
                    if (rand <= 15) {
                        card.data.mType = PokerType.enemy;
                        var num = MathUtils.getRandom(1, 3);
                        card.data.mNum = num;
                        card.data.SetAtk(MathUtils.getRandom(CardConstant.CardCK[card.data.mNum]["num"][0], CardConstant.CardCK[card.data.mNum]["num"][1]).toString());
                        card.FlushRender();
                    }
                    else if (rand > 15 && rand <= 20) {
                        card.data.mType = PokerType.blood;
                        var num = MathUtils.getRandom(1, 9);
                        card.data.mNum = num;
                        card.FlushRender();
                    }
                    else if (rand > 20 && rand <= 25) {
                        card.data.mType = PokerType.atk;
                        var num = MathUtils.getRandom(1, 5);
                        card.data.mNum = num;
                        card.CreateHurt(MathUtils.getRandom(CardConstant.CardWeapon[card.data.mNum]["num"][0], CardConstant.CardWeapon[card.data.mNum]["num"][1]).toString());
                        card.FlushRender();
                    }
                    else {
                        card.data.mType = PokerType.coin;
                        var num = MathUtils.getRandom(3, 8);
                        card.data.mNum = num;
                        card.FlushRender();
                    }
                }
            });
            this.pokerLineList[index].render.FlushPokerList(this.pokerLineList[index].data, false);
        }
    };
    //发动效果时的UI变化
    gameTableView.prototype.LaunchCheatWithUI = function (bool, data, callback) {
        var _this = this;
        if (bool) {
            this.HeroEffectBox.visible = true;
            if (!!data) {
                if (this.effectUis.length <= 0 || this.effectUi2s.length <= 0) {
                    return;
                }
                var ne = data.name;
                var rm = 0;
                var ui = this.effectUis.splice(rm, 1)[0];
                ui.text = ne + '';
                ui.visible = true;
                ui.alpha = 0;
                Laya.Tween.to(ui, { alpha: 1 }, 800, Laya.Ease.circOut, new Laya.Handler(this, function () {
                    if (!!callback) {
                        callback();
                        _this.refreshHeroUI();
                    }
                    Laya.Tween.to(ui, { alpha: 0 }, 400, Laya.Ease.circIn, new Laya.Handler(_this, function () {
                        ui.visible = false;
                        _this.effectUis.push(ui);
                        var v3 = MathUtils.quickSort3(_this.effectUis, 'name', 0, _this.effectUis.length - 1);
                        //console.log("v3:", v3);
                    }));
                }), data.index * 200 + 200);
                var num = data.num;
                var rm2 = 0;
                var ui2 = this.effectUi2s.splice(rm2, 1)[0];
                ui2.text = num >= 0 ? '+' + num : num;
                ui2.visible = true;
                ui2.alpha = 0;
                Laya.Tween.to(ui2, { alpha: 1 }, 650, Laya.Ease.circOut, new Laya.Handler(this, function () {
                    Laya.Tween.to(ui2, { alpha: 0 }, 400, Laya.Ease.circIn, new Laya.Handler(_this, function () {
                        ui2.visible = false;
                        _this.effectUi2s.push(ui2);
                        var v4 = MathUtils.quickSort3(_this.effectUi2s, 'name', 0, _this.effectUi2s.length - 1);
                        //console.log("v4:", v4);
                    }));
                }), data.index * 350 + 350);
            }
        }
        else {
            this.HeroEffectBox.visible = false;
        }
    };
    gameTableView.prototype.onInitiativeMounseDown = function (target, idx, centerPos) {
        if (!this.canMouseDown && this.passiveListSelectIndex != -1) {
            return;
        }
        this.InitiativeList.zOrder = objectZorder.MovePropList;
        target.zOrder = objectZorder.MoveProp;
        for (var i = 1; i < this.InitiativeList.numChildren; i++) {
            if (i != idx) {
                var initiative = this.InitiativeList.getChildAt(i);
                initiative.offAll();
            }
        }
        this.passiveListSelectIndex = idx;
        this.isStartDraging = true;
        this.isStartDragMoved = false;
        target.x = Laya.stage.mouseX - target.width / 2 - this.InitiativeList.x;
        target.y = Laya.stage.mouseY - target.height / 2 - this.InitiativeList.y;
        this.dragMovingStartPos.x = target.x;
        this.dragMovingStartPos.y = target.y;
        this.mouseStartPos.x = Laya.stage.mouseX;
        this.mouseStartPos.y = Laya.stage.mouseY;
    };
    gameTableView.prototype.onInitiativeMounseMove = function (target, idx, centerPos) {
        if (!this.isStartDraging && this.passiveListSelectIndex != idx) {
            return;
        }
        var offsetX = Laya.stage.mouseX - this.mouseStartPos.x;
        var offsetY = Laya.stage.mouseY - this.mouseStartPos.y;
        target.x = this.dragMovingStartPos.x + offsetX;
        target.y = this.dragMovingStartPos.y + offsetY;
        if (!this.isStartDragMoved) {
            var pt = new Laya.Point(offsetX, offsetY);
            if (pt.distance(0, 0) > 5) //拖动距离小于5的话就算是点击 不然就是移动
             {
                this.isStartDragMoved = true;
                this.showPropMoveBox(true);
                if (target.tag.indexOf("prop") != -1) {
                    for (var i = 0; i < this.heroStg.PropsArray.length; i++) {
                        var di = this.heroStg.PropsArray[i].id;
                        if (di == Number(target.tag.substring(4, target.tag.length))) {
                            this.propMoveDesc.text = "描述:" + this.heroStg.PropsArray[i].desc;
                        }
                        if (Number(target.tag.substring(4, target.tag.length)) == 3 || Number(target.tag.substring(4, target.tag.length)) == 4 || Number(target.tag.substring(4, target.tag.length)) == 5) {
                            this.propMoveTips.text = "松开手后请选择一张发光的卡牌发动效果";
                            this.propMoveCancel.visible = true;
                        }
                        else {
                            this.propMoveTips.text = "松开手即可发动效果";
                            this.propMoveCancel.visible = false;
                        }
                    }
                }
                else if (target.tag.indexOf("kongfu") != -1) {
                    for (var i = 0; i < this.heroStg.KongFuArray.length; i++) {
                        var di = this.heroStg.KongFuArray[i].id;
                        if (di == Number(target.tag.substring(6, target.tag.length))) {
                            this.propMoveDesc.text = "描述:" + this.heroStg.KongFuArray[i].desc;
                        }
                    }
                }
            }
        }
        if (target.x >= this.propMoveLine.x) {
            this.propMoveTips.visible = true;
        }
        else {
            this.propMoveTips.visible = false;
        }
    };
    gameTableView.prototype.onInitiativeMounseUp = function (target, idx, centerPos) {
        if (!this.isStartDraging && this.passiveListSelectIndex != idx) {
            return;
        }
        this.InitiativeList.zOrder = objectZorder.MoveBg;
        target.zOrder = objectZorder.UI;
        target.centerX = centerPos.x;
        target.centerY = centerPos.y;
        this.passiveListSelectIndex = -1;
        var targetId = 0;
        if (target.tag.indexOf("prop") != -1) {
            targetId = Number(target.tag.substring(4, target.tag.length));
        }
        else if (target.tag.indexOf("kongfu") != -1) {
            targetId = Number(target.tag.substring(6, target.tag.length));
        }
        if (this.isStartDragMoved) {
            //拖动
            if (this.propMoveTips.visible) {
                if (target.tag.indexOf("prop") != -1) {
                    this.DealPropGruop(target.name, targetId);
                }
                else if (target.tag.indexOf("kongfu") != -1) {
                    this.SetObjectDesc(false, this.heroStg.KongFuArray, targetId);
                }
            }
        }
        else {
            //点击
            if (target.tag.indexOf("prop") != -1) {
                this.SetObjectDesc(false, this.heroStg.PropsArray, targetId);
            }
            else if (target.tag.indexOf("kongfu") != -1) {
                this.SetObjectDesc(false, this.heroStg.KongFuArray, targetId);
            }
        }
        this.onInitiativeListClick();
        this.isStartDraging = false;
        if (this.propMoveTips.text == "松开手后请选择一张发光的卡牌发动效果") {
            this.propMoveDesc.text = '';
            this.propMoveTips.text = '';
            this.showPropMoveBox(false);
        }
        else {
            this.propMoveCancel.visible = false;
            this.propMoveDesc.text = '';
            this.propMoveTips.text = '';
            this.showPropMoveBox(false);
        }
    };
    gameTableView.prototype.cancelMoveBg = function () {
        for (var i = 0; i < this.propSelectShinning.length; i++) {
            this.propSelectShinning[i].removeSelf();
            this.propSelectShinning[i].destroy();
        }
        this.propSelectShinning = [];
        this.propMoveCancel.visible = false;
        this.propMoveDesc.text = '';
        this.propMoveTips.text = '';
        this.showPropMoveBox(false);
    };
    gameTableView.prototype.showPropMoveBox = function (bool) {
        if (bool) {
            this.propMoveBox.visible = true;
        }
        else {
            this.propMoveBox.visible = false;
        }
    };
    gameTableView.prototype.RookieGuide = function (step) {
        if (!this.guideLabel) {
            this.guideLabel = new Laya.Label();
            this.guideLabel.fontSize = 30;
            this.guideLabel.color = '#ffffff';
            this.guideLabel.wordWrap = true;
            this.guideLabel.width = 500;
            this.guideLabel.text = '';
            this.addChild(this.guideLabel);
            this.guideLabel.pos(50, this.Hero.y + 250);
        }
        this.guideLabel.visible = true;
        switch (step) {
            case 0:
                this.guideLabel.text = '请选择合适的路线走到终点吧';
                break;
            case 1:
                this.guideLabel.text = '拖拽主角牌，移动到上层任意一张卡牌上，即为一次行动';
                break;
            case 2:
                this.guideLabel.text = '获取新的功法牌后，可以点击右侧被动物品栏查看';
                break;
            case 3:
                this.guideLabel.text = '获取新的道具牌后，可以点击左侧主动物品栏查看，道具需要拖拽使用';
                break;
        }
    };
    return gameTableView;
}(ui.game.gameTableUI));
var objectZorder = {
    Bg1: 0,
    Poker: 1,
    Target: 2,
    Hero: 3,
    UI: 4,
    MoveBg: 101,
    MovePropList: 102,
    MoveProp: 103,
    MovePropSelectCard: 104,
    Top: 99,
    Bg2: 100
};
//# sourceMappingURL=gameTableView.js.map
/**
* name
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var poker;
(function (poker) {
    var PokerGroupRenderMode;
    (function (PokerGroupRenderMode) {
        PokerGroupRenderMode[PokerGroupRenderMode["line"] = 0] = "line";
        PokerGroupRenderMode[PokerGroupRenderMode["lastOneCard"] = 1] = "lastOneCard";
        PokerGroupRenderMode[PokerGroupRenderMode["lastThreeCard"] = 2] = "lastThreeCard";
    })(PokerGroupRenderMode = poker.PokerGroupRenderMode || (poker.PokerGroupRenderMode = {}));
    var PokerGroupCollisionMode;
    (function (PokerGroupCollisionMode) {
        PokerGroupCollisionMode[PokerGroupCollisionMode["LastCardCollision"] = 0] = "LastCardCollision";
        PokerGroupCollisionMode[PokerGroupCollisionMode["FirstCardCollision"] = 1] = "FirstCardCollision";
    })(PokerGroupCollisionMode = poker.PokerGroupCollisionMode || (poker.PokerGroupCollisionMode = {}));
    var pokerGroupRender = /** @class */ (function (_super) {
        __extends(pokerGroupRender, _super);
        function pokerGroupRender(mode) {
            var _this = _super.call(this) || this;
            _this.collisionMode = PokerGroupCollisionMode.LastCardCollision;
            _this.zeroCardName = ""; //空的时候显示的系统卡片
            _this.renderMode = mode;
            var a = 'a';
            if (a == 'a')
                a = 'a';
            return _this;
        }
        pokerGroupRender.prototype.FlushCollisionImage = function (vGroupData) {
            switch (this.renderMode) {
                case PokerGroupRenderMode.line: //一条直线
                case PokerGroupRenderMode.lastOneCard: //只显示最后一张
                    {
                        switch (this.collisionMode) {
                            case PokerGroupCollisionMode.LastCardCollision:
                                {
                                    var lastindex = vGroupData.pokerList.length - 1;
                                    if (lastindex >= 0) {
                                        this.collisionImage = vGroupData.pokerList[lastindex].render.img; //最后一张牌
                                    }
                                }
                                break;
                            case PokerGroupCollisionMode.FirstCardCollision:
                                {
                                    if (vGroupData.pokerList.length > 0) {
                                        this.collisionImage = vGroupData.pokerList[0].render.img; //第一张牌
                                    }
                                }
                                break;
                        }
                    }
                    break;
                case PokerGroupRenderMode.lastThreeCard: //只显示最后三张
                    break;
            }
        };
        //加入一张卡片,isHaveAni：是否有动画 aniIndex：动画序号
        pokerGroupRender.prototype.addCardImg = function (img, isHaveAni) {
            if (isHaveAni === void 0) { isHaveAni = true; }
            if (img.parent == null || !isHaveAni) {
                this.addChild(img);
                //img.pos(0,0);
                return;
            }
            var oldRoot = img.parent.parent;
            var newRoot = this.parent;
            var scaleX = newRoot.scaleX;
            var scaleY = newRoot.scaleY;
            var rootOffSet = new Laya.Point((oldRoot.x - newRoot.x) / scaleX, (oldRoot.y - newRoot.y) / scaleY);
            var newStartPos = new Laya.Point(img.x + rootOffSet.x, img.y + rootOffSet.y);
            this.addChild(img);
            img.pos(newStartPos.x, newStartPos.y);
        };
        //新加入一个pokerGroupData
        pokerGroupRender.prototype.AddPokerList = function (vGroupData) {
            switch (this.renderMode) {
                case PokerGroupRenderMode.line: //一条直线
                    {
                        for (var i = 0; i < vGroupData.pokerList.length; i++) {
                            var chain = vGroupData.pokerList[i];
                            //this.addChild(chain.render.img);
                            this.addChild(chain.render.img);
                        }
                        // ////console.log('du2du2du2du2du1');
                        this.SortPos(vGroupData.pokerList);
                    }
                    break;
                case PokerGroupRenderMode.lastOneCard: //只显示最后一张
                    {
                        var lastindex = vGroupData.pokerList.length - 1;
                        if (lastindex >= 0) {
                            this.addChild(vGroupData.pokerList[lastindex].render.img);
                            this.collisionImage = vGroupData.pokerList[lastindex].render.img; //最后一张牌
                        }
                        // ////console.log('du2du2du2du2du2');
                        this.SortPos(vGroupData.pokerList);
                    }
                    break;
                case PokerGroupRenderMode.lastThreeCard: //加入队伍中
                    {
                        var LastXPos = 0;
                        var lastIndex = this.numChildren - 1;
                        if (this.numChildren > 0) {
                            LastXPos = this.numChildren * pokerGroupRender.threeCardSpacing;
                        }
                        for (var i = 0; i < vGroupData.pokerList.length; i++) {
                            vGroupData.pokerList[i].render.img.x = LastXPos + pokerGroupRender.threeCardSpacing * (i);
                            this.addChild(vGroupData.pokerList[i].render.img);
                        }
                        //this.SortPos();
                    }
                    break;
            }
            this.FlushCollisionImage(vGroupData);
        };
        //刷新显示一个groupdata
        pokerGroupRender.prototype.FlushPokerList = function (vGroupData, withSort) {
            if (withSort === void 0) { withSort = true; }
            switch (this.renderMode) {
                case PokerGroupRenderMode.line: //一条直线
                    {
                        // ////console.log('vGroupData.pokerList3', vGroupData);
                        this.graphics.clear();
                        this.removeChildren(0);
                        for (var i = 0; i < vGroupData.pokerList.length; i++) {
                            var chain = vGroupData.pokerList[i];
                            //chain.render.ChangeRenderByData(chain.data);
                            //console.log("chainchainchainchainchainchainchain1")
                            chain.FlushRender();
                            //chain.render.img.pos(0,0);
                            this.addChild(chain.render.img);
                        }
                    }
                    break;
                case PokerGroupRenderMode.lastOneCard: //只显示最后一张
                    {
                        // ////console.log('vGroupData.pokerList4', vGroupData);
                        this.graphics.clear();
                        this.removeChildren(0);
                        var lastindex = vGroupData.pokerList.length - 1;
                        if (lastindex >= 0) {
                            var lastcard = vGroupData.pokerList[lastindex];
                            //lastcard.render.ChangeRenderByData(lastcard.data);
                            //console.log("chainchainchainchainchainchainchain2")
                            lastcard.FlushRender();
                            vGroupData.pokerList[lastindex].render.img.pos(0, 0);
                            this.addChild(vGroupData.pokerList[lastindex].render.img);
                        }
                    }
                    break;
                case PokerGroupRenderMode.lastThreeCard:
                    {
                        // ////console.log('vGroupData.pokerList5', vGroupData);
                        this.graphics.clear();
                        this.removeChildren(0);
                        var oldChildNum = this.numChildren; //
                        var lastindex = vGroupData.pokerList.length - 1;
                        for (var i = lastindex - 2; i < vGroupData.pokerList.length; i++) {
                            if (i >= 0) {
                                //vGroupData.pokerList[i].render.ChangeRenderByData(vGroupData.pokerList[i].data);
                                //console.log("chainchainchainchainchainchainchain3")
                                vGroupData.pokerList[i].FlushRender();
                                vGroupData.pokerList[i].render.img.pos(0, 0);
                                this.addChild(vGroupData.pokerList[i].render.img);
                            }
                        }
                    }
                    break;
            }
            this.FlushCollisionImage(vGroupData);
            if (vGroupData.pokerList.length == 0) {
                if (this.zeroCardName.length > 4) ///带.png的文件名
                 {
                    var pokerRd = new poker.pokerRender();
                    pokerRd.ChangeRenderToSystemCard(this.zeroCardName);
                    this.addChild(pokerRd.img);
                    this.collisionImage = pokerRd.img; //最后一张牌
                    // ////console.log('vGroupData.pokerList5', this.collisionImage);
                }
            }
            if (withSort) {
                // ////console.log('du2du2du2du2du3');
                this.SortPos(vGroupData.pokerList);
            }
            //画圆点
            // var sp = new Laya.Sprite();
            // this.addChild(sp);
            // sp.graphics.drawCircle(0,0,5,"#ff0000");
        };
        pokerGroupRender.prototype.CheckAndMoveImgWithAniToPos = function (img, posX, posY) {
            if (img.x == posX && img.y == posY) {
                return false;
            }
            Laya.Tween.clearAll(img);
            Laya.Tween.to(img, { x: posX, y: posY }, 800, Laya.Ease.sineIn, null, 0);
            return true;
        };
        pokerGroupRender.prototype.RemoveCardIMG = function (img) {
            img.removeSelf();
        };
        pokerGroupRender.prototype.SortAndMoveToPos = function (sortEndHandle) {
            //console.log("SortAndMoveToPos:", this.numChildren);
            for (var i = 0; i < this.numChildren; i++) {
                var img = this.getChildAt(i);
                img.alpha = 1;
                img.scale(1, 1);
                switch (this.renderMode) {
                    case PokerGroupRenderMode.line: //一条直线
                        {
                            img.pos(0, 0);
                            var pos = new Laya.Point(0, i * pokerGroupRender.lineHeightSpacing);
                            if (i == this.numChildren - 1) {
                                Laya.Tween.to(img, { x: pos.x, y: pos.y }, 70 * i, Laya.Ease.sineOut, sortEndHandle, 0);
                            }
                            else {
                                Laya.Tween.to(img, { x: pos.x, y: pos.y }, 70 * i, Laya.Ease.sineOut, null, 0);
                            }
                        }
                        break;
                    case PokerGroupRenderMode.lastThreeCard:
                        {
                            //img.pos(0,0);
                            var indexFromLast = this.numChildren - 1 - i;
                            if (indexFromLast <= 2) {
                                var posIndex = 2 - indexFromLast;
                                if (this.numChildren < 3) {
                                    posIndex = i;
                                }
                                var pos = new Laya.Point(posIndex * pokerGroupRender.threeCardSpacing, 0);
                                //三排堆的左移消失速度
                                //img.pos(pos.x,pos.y);
                                // ////console.log('距离1：', img.x, img.y, pos.x, pos.y);
                                Laya.Tween.to(img, { x: pos.x, y: pos.y }, CardSpeedSetting.speed6, null, null, 0);
                            }
                            else {
                                Laya.Tween.to(img, { x: 0, y: 0 }, CardSpeedSetting.speed6, null, Laya.Handler.create(this, this.RemoveCardIMG, [img]), 0);
                                //img.pos(0,0);
                            }
                        }
                        break;
                    case PokerGroupRenderMode.lastOneCard:
                        img.pos(0, 0);
                        break;
                }
            }
        };
        pokerGroupRender.prototype.GetSortedPos = function (index, img, lists) {
            switch (this.renderMode) {
                case PokerGroupRenderMode.line: //一条直线
                    if (img != undefined) {
                        if (img['data']['IsCardBack']) {
                            return new Laya.Point(0, index * pokerGroupRender.lineHeightSpacing);
                        }
                        else {
                            var i = 0;
                            lists.forEach(function (value, index) {
                                if (value['data']['IsCardBack']) {
                                    i++;
                                }
                            });
                            return new Laya.Point(0, i * pokerGroupRender.lineHeightSpacing + (index - i) * pokerGroupRender.lineHeightBackSpacing);
                        }
                    }
                    else {
                        return new Laya.Point(0, index * pokerGroupRender.lineHeightSpacing);
                    }
                // if (img["_skin"] != null) {
                // 	if (img["_skin"].indexOf("back") != -1) {
                // 		return new Laya.Point(0, index * pokerGroupRender.lineHeightSpacing);
                // 	} else {
                // 		var i = 0
                // 		this["_childs"].forEach((value, index) => {
                // 			if (value['_skin'].indexOf("back") != -1) {
                // 				i++
                // 			}
                // 		})
                // 		return new Laya.Point(0, i * pokerGroupRender.lineHeightSpacing + (index - i) * pokerGroupRender.lineHeightBackSpacing);
                // 	}
                // } else {
                // 	return new Laya.Point(0, index * pokerGroupRender.lineHeightSpacing);
                // }
                case PokerGroupRenderMode.lastThreeCard:
                    return new Laya.Point(index * pokerGroupRender.threeCardSpacing, 0);
                case PokerGroupRenderMode.lastOneCard:
                    return new Laya.Point(0, 0);
            }
            return new Laya.Point(0, 0);
        };
        pokerGroupRender.prototype.SortPos = function (list) {
            for (var i = 0; i < this.numChildren; i++) {
                var img = this.getChildAt(i);
                var pos = this.GetSortedPos(i, list[i], list);
                img.pos(pos.x, pos.y);
                // ////console.log('imgimgimgimg', img);
            }
        };
        pokerGroupRender.lineHeightSpacing = 190; //线性排列的时候的牌之间的间隔值15
        pokerGroupRender.lineHeightBackSpacing = 55; //线性排列的时候的牌之间的间隔值	55
        pokerGroupRender.threeCardSpacing = 30; //三张牌的时候的牌之间的间隔值
        return pokerGroupRender;
    }(Laya.Sprite));
    poker.pokerGroupRender = pokerGroupRender;
})(poker || (poker = {}));
//# sourceMappingURL=pokerGroupRender.js.map
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
* name;
*/
var BigStoreView = /** @class */ (function (_super) {
    __extends(BigStoreView, _super);
    function BigStoreView() {
        var _this = _super.call(this) || this;
        _this.propPageIndex = 0;
        _this.allShopList = null;
        _this.skinList = new Array();
        _this.loadSkinIndex = 0;
        _this.isLoadSkin = false;
        _this.ttype = 1;
        _this.isStart = false;
        return _this;
    }
    BigStoreView.prototype.init = function () {
        this.btn1Bg.skin = 'local/商店/index_btn_游戏背景选中.png';
        this.btn2Bg.skin = 'local/商店/index_btn_游戏牌背未选中.png';
        this.getMsg(ShopSetting.shopListArray, 1);
        this.shopList.renderHandler = new Laya.Handler(this, this.updatelist);
        this.shopList.vScrollBarSkin = '';
        this.shopList.scrollBar.hide = true;
        this.shopList.scrollBar.elasticBackTime = 500;
        this.shopList.scrollBar.elasticDistance = 0;
        this.btnClose.on(Laya.Event.CLICK, this, this.CloseT);
        this.btn1Bg.on(Laya.Event.CLICK, this, this.onBtn1Bg);
        this.btn2Bg.on(Laya.Event.CLICK, this, this.onBtn2Bg);
        this.powerBox.on(Laya.Event.CLICK, this, this.getPower);
        var point = GameMain.app.mWX.getMenuButtonTop_CenterPoint();
        if (GameMain.app.mScreenHeight > 667) {
            this.powerBox.y = point.x + point.y / 2 - (GameMain.app.mScreenHeight - 667);
            this.goldBox.y = point.x + point.y / 2 - (GameMain.app.mScreenHeight - 667);
        }
        else {
            this.powerBox.y = point.x + point.y / 2;
            this.goldBox.y = point.x + point.y / 2;
        }
        Laya.timer.frameLoop(1, this, this.update);
    };
    BigStoreView.prototype.refreshCoinAndPower = function () {
        this.isStart = true;
    };
    BigStoreView.prototype.updatelist = function (cell, index) {
        // 默认渲染
        var bg = cell.getChildByName('itemBg');
        var lock = cell.getChildByName('itemBg').getChildByName('itemClose');
        var blabel = cell.getChildByName('itemBg').getChildByName('bottomLabel');
        var coinicon = cell.getChildByName('itemBg').getChildByName('bottomLabel').getChildByName('itemCoin');
        var price = cell.getChildByName('itemBg').getChildByName('bottomLabel').getChildByName('itemGold');
        var using = cell.getChildByName('itemBg').getChildByName('bottomLabel').getChildByName('itemUsing');
        var id = Number(cell.dataSource['id']);
        var coins = Number(cell.dataSource['coins']);
        var name = cell.dataSource['name'];
        var other = cell.dataSource['other'];
        var count = cell.dataSource['count'];
        // ////console.log('shoplist:', id, coins, other, count);
        bg.skin = 'local/商店/' + ("Skin_" + id + ".png");
        if (count == 0) {
            lock.visible = true;
            using.visible = false;
            coinicon.visible = true;
            price.text = '' + coins;
            price.visible = true;
        }
        else {
            lock.visible = false;
            using.visible = true;
            coinicon.visible = false;
            price.visible = false;
        }
        if (this.ttype == 1) {
            if (Number(ShopSetting.nowUseBg + 4000) == id) {
                using.skin = 'local/商店/shop_btn_正在使用.png';
                cell.off(Laya.Event.CLICK, this, this.openBgView);
            }
            else {
                using.skin = 'local/商店/shop_btn_已拥有.png';
                cell.on(Laya.Event.CLICK, this, this.openBgView, [1, index + 1, id, coins, count]);
            }
        }
        else if (this.ttype == 2) {
            if (Number(ShopSetting.nowCardBack) == id) {
                using.skin = 'local/商店/shop_btn_正在使用.png';
                cell.off(Laya.Event.CLICK, this, this.openBgView);
            }
            else {
                using.skin = 'local/商店/shop_btn_已拥有.png';
                cell.on(Laya.Event.CLICK, this, this.openBgView, [2, index + 1, id, coins, count]);
            }
        }
    };
    BigStoreView.prototype.getMsg = function (list, type) {
        // for (var i = 0; i <= list.length - 1; i++) {
        //     if (list[i]['open'] == 0) {
        //         list.splice(i, 1);
        //     }
        // }
        this.ttype = type;
        this.propPageIndex = 0;
        var newList = new Array();
        newList = [];
        if (type == 1) { //游戏背景
            for (var i = 0; i <= list.length - 1; i++) {
                if (Number(JSON.parse(list[i]['type'])) == 2) {
                    if (JSON.parse(list[i]['id']) == '4001') {
                        list[i]['count'] = 1;
                    }
                    newList.push(list[i]);
                }
            }
        }
        else if (type == 2) { //游戏牌背     
            for (var j = 0; j <= list.length - 1; j++) {
                if (Number(JSON.parse(list[j]['type'])) == 3) {
                    if (JSON.parse(list[j]['id']) == '5001') {
                        list[j]['count'] = 1;
                    }
                    newList.push(list[j]);
                }
            }
        }
        // else if (type == 3) { //道具
        //     for (var k = 0; k <= list.length - 1; k++) {
        //         if (list[k]['type'] == 3) {
        //             newList.push(list[k]);
        //         }
        //     }
        // }
        // for (var i = 0; i <= list.length - 1; i++) {
        // ////console.log('id:' + list[i]['id']);
        // ////console.log('open:' + Items.skinOpen[i]);
        // ////console.log('skpath:' + touch.AnimationDefine.SK_PATH_JELLYS[i]);
        // newList.push(list[i]);
        // this.listCellWidth++;
        // }
        this.shopList.array = newList;
        ////console.log('this.shopList.array', this.shopList.array);
    };
    BigStoreView.prototype.CloseT = function () {
        if (GameMain.app.mWX.gameClub != null)
            GameMain.app.mWX.gameClub.show();
        this.isStart = false;
        this.close();
    };
    BigStoreView.prototype.onBtn1Bg = function () {
        this.ttype = 1;
        this.btn1Bg.skin = 'local/商店/index_btn_游戏背景选中.png';
        this.btn2Bg.skin = 'local/商店/index_btn_游戏牌背未选中.png';
        this.goldLabel.text = ShopSetting.nowcoin + '';
        this.getMsg(ShopSetting.shopListArray, 1);
    };
    BigStoreView.prototype.onBtn2Bg = function () {
        this.ttype = 2;
        this.btn2Bg.skin = 'local/商店/index_btn_游戏牌背选中.png';
        this.btn1Bg.skin = 'local/商店/index_btn_游戏背景未选中.png';
        this.goldLabel.text = ShopSetting.nowcoin + '';
        this.getMsg(ShopSetting.shopListArray, 2);
    };
    BigStoreView.prototype.openBgView = function (type, index, id, coins, count) {
        if (!this.showBgView) {
            this.showBgView = new ShowBgView();
        }
        this.showBgView.init(this, type, index, id, coins, count);
        this.showBgView.popup();
    };
    BigStoreView.prototype.getPower = function () {
        if (!GameMain.app.physicalPowerView) {
            GameMain.app.physicalPowerView = new PhysicalPowerView();
        }
        GameMain.app.physicalPowerView.refreshCoinAndPower();
        GameMain.app.physicalPowerView.popup();
    };
    BigStoreView.prototype.update = function () {
        if (this.isStart) {
            this.goldLabel.text = ShopSetting.nowcoin + '';
            this.powerLabel.text = ShopSetting.nowPpower + '/' + ShopSetting.nowPowerMax;
        }
    };
    return BigStoreView;
}(ui.BigStoreViewUI));
//# sourceMappingURL=BigStoreView.js.map
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
* name;
*/
var PhysicalPowerView = /** @class */ (function (_super) {
    __extends(PhysicalPowerView, _super);
    function PhysicalPowerView() {
        var _this = _super.call(this) || this;
        _this.isStart = false;
        _this.isStartViewOpen = 0;
        _this.init();
        return _this;
    }
    PhysicalPowerView.prototype.init = function () {
        this.btnClose.on(Laya.Event.CLICK, this, this.closeT);
        this.shareBtn.on(Laya.Event.CLICK, this, this.share);
        this.watchTvBtn.on(Laya.Event.CLICK, this, this.watchTv);
        Laya.timer.frameLoop(1, this, this.update);
        if (GameMain.app.mWX.fhOnoff == 0) {
            this.shareBtn.visible = false;
            this.watchTvBtn.x = 196;
        }
        else {
            this.shareBtn.visible = true;
            this.watchTvBtn.x = 287;
        }
    };
    PhysicalPowerView.prototype.refreshCoinAndPower = function (type) {
        if (type === void 0) { type = 0; }
        this.isStart = true;
        this.isStartViewOpen = type;
    };
    PhysicalPowerView.prototype.closeT = function () {
        if (this.isStartViewOpen == 1) {
            if (GameMain.app.mWX.gameClub != null)
                GameMain.app.mWX.gameClub.show();
        }
        this.isStart = false;
        this.close();
    };
    PhysicalPowerView.prototype.share = function () {
        GameMain.app.mShares++;
        GameMain.shareIndex = 12;
        GameMain.app.mShareCurrentTime = GameMain.app.getCurrTime();
        var shareTitle = "这局太难了，听说只有1%完成了。";
        var shareImg = "login/share.jpg";
        var surl = "3";
        if (GameMain.app.mWX.shareUrl.length > 0) {
            shareTitle = GameMain.app.mWX.shareUrl[0]["title"];
            shareImg = GameMain.app.mWX.shareUrl[0]["url"];
        }
        wx.shareAppMessage({
            title: shareTitle,
            imageUrl: shareImg,
        });
    };
    PhysicalPowerView.prototype.watchTv = function () {
        var _this = this;
        VideoADUtil.playVideo(function () {
            GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.AddPhysicalPower, [true]);
        }, function () {
            _this.share();
        }, function () {
        });
    };
    PhysicalPowerView.prototype.update = function () {
        if (this.isStart) {
            this.recoverTime.text = '' + ShopSetting.powerLabel;
            this.powerLabel.text = ShopSetting.nowPpower + '/' + ShopSetting.nowPowerMax;
            if (ShopSetting.nowPpower >= ShopSetting.nowPowerMax) {
                this.recoverImg.visible = false;
            }
            else {
                this.recoverImg.visible = true;
            }
        }
    };
    return PhysicalPowerView;
}(ui.PhysicalPowerViewUI));
//# sourceMappingURL=PhysicalPowerView.js.map
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
* name;
*/
var SceneRank = /** @class */ (function (_super) {
    __extends(SceneRank, _super);
    function SceneRank() {
        var _this = _super.call(this) || this;
        _this.wRankData = []; // 世界排行已经读取的数据
        _this.dataPage = 0; // 后端数据的页数
        _this.cWRankPage = 0; // 前端展示的页数
        _this.mType = 0; // 排行的类型
        _this.isWorld = false;
        _this.qiansige = 0;
        return _this;
        // this.all.visible = false;
        // this.mSelf.visible = false;
    }
    SceneRank.prototype.init = function () {
        if (GameMain.app.mScreenHeight > 667) {
            this.all.y = GameMain.app.mScreenHeight - 667;
        }
        // this.mList.renderHandler = new Laya.Handler(this, this.updateUser);
        this.isWorld = true;
        this.showRank();
        // let point: Laya.Point = GameMain.app.mWX.getMenuButtonTop_CenterPoint();
        // this.btnBack.y = point.x + point.y / 2;
    };
    SceneRank.prototype.onShow = function (bool) {
        if (bool) {
            // if (GameMain.app.mWX.gameClub != null) GameMain.app.mWX.gameClub.hide();
            // if (GameMain.app.gameInstance.sceneMenu != null)
            //     GameMain.app.gameInstance.sceneMenu.luntan.visible = false;
            this.visible = true;
            this.addEvent();
            this.init();
            this.zOrder = 2;
            this.qiansige = 0;
            this.showADBanner();
        }
        else {
            if (GameMain.app.mWX.gameClub != null)
                GameMain.app.mWX.gameClub.show();
            this.visible = false;
            this.removeEvent();
            this.hideADBanner();
        }
    };
    //监听事件
    SceneRank.prototype.addEvent = function () {
        this.btnBack.on(Laya.Event.MOUSE_DOWN, this, this.onBack);
        this.mLastPage.on(Laya.Event.CLICK, this, this.onChangePage, ["previous"]);
        this.mNextPage.on(Laya.Event.CLICK, this, this.onChangePage, ["next"]);
    };
    //移除监听
    SceneRank.prototype.removeEvent = function () {
        this.mLastPage.off(Laya.Event.MOUSE_DOWN, this, this.onChangePage);
        this.mNextPage.off(Laya.Event.MOUSE_DOWN, this, this.onChangePage);
        this.btnBack.off(Laya.Event.MOUSE_DOWN, this, this.onBack);
    };
    SceneRank.prototype.onBack = function () {
        wx.postMessage({
            type: "rank", show: 0
        });
        this.rankSprite.removeChildByName("rank");
        // GameMain.app.gameInstance.onMenu();
        this.close();
        this.onShow(false);
        this.hideADBanner();
    };
    // 渲染排行榜
    SceneRank.prototype.updateUser = function (cell, index) {
        var face = cell.getChildByName("face");
        var name = cell.getChildByName("name");
        // var rank: Laya.Label = cell.getChildByName("rk").getChildByName("rank") as Laya.Label;
        //var level: Laya.Label = cell.getChildByName("ll").getChildByName("level") as Laya.Label;
        var mark = cell.getChildByName("mk");
        var ss = cell.dataSource['name'].length > 6 ? cell.dataSource['name'].substring(0, 6) + '...' : cell.dataSource['name'];
        name.changeText(ss);
        face.skin = cell.dataSource['avatar'];
        // rank.visible = false;
        // rank.text = cell.dataSource['rank'];
        //level.text = cell.dataSource['level'];
        // if (cell.dataSource['mark'] >= 1000000 && cell.dataSource['mark'] < 1000000000) {
        //     mark.text = Math.floor(cell.dataSource['mark'] / 1000000) + "M" + GameMain.app.unit;
        // } else if (cell.dataSource['mark'] >= 1000000000 && cell.dataSource['mark'] < 1000000000000) {
        //     mark.text = Math.floor(cell.dataSource['mark'] / 1000000000) + "B" + GameMain.app.unit;
        // } else if (cell.dataSource['mark'] > 1000000000000) {
        //     mark.text = "无限";
        // } else if (cell.dataSource['mark'] >= 1000 && cell.dataSource['mark'] < 1000000) {
        //     mark.text = Math.floor(cell.dataSource['mark'] / 1000) + "K" + GameMain.app.unit;
        // } else {
        mark.text = '第' + cell.dataSource['mark'] + '关';
        // }
    };
    // 翻页
    SceneRank.prototype.onChangePage = function (dir) {
        //////console.log("onChangePage : " + this.mType + " , " + dir);
        // 好友
        if (this.mType == 1) {
            // if (dir === "next") {
            //     this.qiansige = this.qiansige + 1;
            // } else if (dir === "previous") {
            //     this.qiansige = this.qiansige - 1;
            //     if (this.qiansige < 0) {
            //         this.qiansige = 0;
            //     }
            // }
            // if (this.qiansige == 0) {
            //     this.no1.visible = true;
            //     this.no2.visible = true;
            //     this.no3.visible = true;
            //     this.no4.visible = true;
            // } else {
            //     this.no1.visible = false;
            //     this.no2.visible = false;
            //     this.no3.visible = false;
            //     this.no4.visible = false;
            // }
            wx.postMessage({
                type: "rank", show: 1, level: 0, info: wxCore.uo.mWeUser, dir: dir
            });
            return;
        }
        if (dir === "previous")
            this.cWRankPage--;
        else if (dir === "next")
            this.cWRankPage++;
        //////console.log("cWRankPage: " + this.cWRankPage)
        var pages = Math.floor(this.wRankData.length / 5) + 1;
        if (this.wRankData.length % 5 == 0)
            pages--;
        if (this.cWRankPage < 1) {
            this.cWRankPage = 1;
            return;
        }
        if (this.cWRankPage > pages) {
            if (pages % 10 == 0) {
                this.dataPage++;
                GameMain.app.mWX.showWorldRank(this.dataPage);
            }
            else {
                this.cWRankPage--;
            }
            return;
        }
        this.parseRankData();
    };
    // 读取当前页的数据
    SceneRank.prototype.parseRankData = function () {
        var mDate = [];
        var starIndex = (this.cWRankPage - 1) * 5;
        for (var i = starIndex; i < starIndex + 5; i++) {
            var mInfo = this.wRankData[i];
            if (mInfo == null || mInfo == undefined)
                break;
            mDate.push(mInfo);
        }
    };
    SceneRank.prototype.close = function () {
        if (GameMain.app.mWX == null)
            return;
        wx.postMessage({
            type: "rank", show: 0
        });
        wx.postMessage({
            type: "group", show: 0
        });
        this.rankSprite.removeChildByName("rank");
        GameMain.app.mWX.getMyMark(); // 获取我的最佳成绩
    };
    SceneRank.prototype.show = function () {
        if (GameMain.app.mWX == null)
            return;
        // let best: number = GameMain.app.mWX.mMarks[0];
        // let level: number = GameMain.app.mLevel.length;
        // for (let i = 0; i < GameMain.app.mLevel.length; i++) {
        //     if (Math.floor(best) < GameMain.app.mLevel[i]) {
        //         level = i + 1;
        //         break;
        //     }
        // }
        // this.myLevel.text = GameMain.app.mLevelName[level - 1].toString();
        // this.selfFace.skin = GameMain.app.mWX.mUser['avatarUrl'];
        // this.mName.text = GameMain.app.mWX.mUser['nickName'];
    };
    // 好友排行
    SceneRank.prototype.showRank = function () {
        this.isWorld = false;
        GameMain.app.mWX.getMyMark();
        this.close();
        this.show();
        this.mType = 1;
        // this.rankbk.visible = false;
        // if (GameMain.app.mWX.mMyRank > 0) {
        //     this.rankbk.visible = true;
        //     if (GameMain.app.mWX.mMyRank < 999999)
        //         this.mRank.text = GameMain.app.mWX.mMyRank.toString();
        //     else
        //         this.mRank.text = "未上榜";
        // }
        // if (GameMain.app.mWX.mMarks[0] == 0)
        //     this.mMark.changeText("暂无成绩");
        // else
        //     this.mMark.changeText(Math.floor(GameMain.app.mWX.mMarks[0]).toString() + GameMain.app.unit); /*更改 ---------- 需要根据自己的游戏更改单位 ---------- */
        wx.postMessage({
            type: "rank", show: 1, level: 0, info: wxCore.uo.mWeUser, dir: "none"
        });
        var rankSprite = new Laya.Sprite();
        this.rankSprite.addChild(rankSprite);
        rankSprite.name = "rank";
        var rankTexture = new Laya.Texture(Laya.Browser.window.sharedCanvas);
        rankTexture.bitmap.alwaysChange = true; //小游戏使用，非常费，每帧刷新
        rankSprite.graphics.drawTexture(rankTexture, 0, 0, rankTexture.width, rankTexture.height);
    };
    // 世界排行
    SceneRank.prototype.onWRank = function () {
        this.isWorld = true;
        this.close();
        this.listBK.visible = true;
        // this.mSelf.visible = false;
        if (GameMain.app.mWX != null) {
            GameMain.app.mWX.showWorldRank(0);
        }
        this.cWRankPage = 1;
    };
    SceneRank.prototype.showWorldRank = function (mData) {
        this.show();
        this.wRankData = mData;
        this.mType = 4;
        // this.rankbk.visible = false;
        // if (GameMain.app.mWX.mMyRank > 0) {
        //     this.rankbk.visible = true;
        //     if (GameMain.app.mWX.mMyRank < 999999)
        //         this.mRank.text = GameMain.app.mWX.mMyRank.toString();
        //     else
        //         this.mRank.text = "未上榜";
        // }
        // if (GameMain.app.mWX.mMarks[0] == 0)
        //     this.mMark.changeText("暂无成绩");
        // else
        //     this.mMark.changeText(Math.floor(GameMain.app.mWX.mMarks[0]).toString() + GameMain.app.unit); /*更改 ---------- 需要根据自己的游戏更改单位 ---------- */
        this.parseRankData();
    };
    SceneRank.prototype.hideADBanner = function () {
        // GameMain.app.mWX.hideADBanner();
    };
    SceneRank.prototype.showADBanner = function () {
        // if (GameMain.app.mWX != null && GameMain.app.mSDKVersion >= "2.0.4") {
        //     GameMain.app.mWX.initBannerAD();
        // }
    };
    return SceneRank;
}(ui.RankingViewUI));
//# sourceMappingURL=SceneRank.js.map
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
* name;
*/
var ShowBgView = /** @class */ (function (_super) {
    __extends(ShowBgView, _super);
    function ShowBgView() {
        var _this = _super.call(this) || this;
        _this.itemIndex = 0;
        _this.ttype = 0;
        _this.cancel.on(Laya.Event.CLICK, _this, _this.onCancel);
        return _this;
    }
    ShowBgView.prototype.init = function (storeView, type, index, id, coins, count) {
        this.visible = false;
        this.bigStoreView = storeView;
        this.itemIndex = id;
        this.ttype = type;
        if (type == 1) {
            GameMain.app.mWX.showLoading();
            Laya.loader.load([{ url: util.getCDN() + "res1/background/bg" + ("" + index) + ".png", type: Laya.Loader.IMAGE }], Laya.Handler.create(this, this.onBgLoad, [util.getCDN() + "res1/background/bg" + ("" + index) + ".png"]));
            this.showCard1.skin = 'UI/game_image_smallK.png';
            this.showCard2.skin = 'UI/game_image_smallK.png';
            this.showCard3.skin = 'UI/game_image_smallK.png';
            this.showCard4.skin = 'UI/game_image_smallK.png';
            this.showCard5.skin = "local/\u5361\u80CC/CardBack_" + ShopSetting.nowCardBack + ".png";
        }
        else {
            this.onBgLoad(util.getCDN() + "res1/background/bg" + ("" + ShopSetting.nowUseBg) + ".png");
            this.showCard1.skin = "local/\u5361\u80CC/CardBack_" + id + ".png";
            this.showCard2.skin = "local/\u5361\u80CC/CardBack_" + id + ".png";
            this.showCard3.skin = "local/\u5361\u80CC/CardBack_" + id + ".png";
            this.showCard4.skin = "local/\u5361\u80CC/CardBack_" + id + ".png";
            this.showCard5.skin = 'UI/game_image_smallK.png';
        }
        ////console.log('count', count);
        if (count == 0) {
            this.buy.visible = true;
            this.change.visible = false;
            this.goldLabel.text = '' + coins;
            this.buy.on(Laya.Event.CLICK, this, this.buySkin);
            this.change.off(Laya.Event.CLICK, this, this.changeSkin);
        }
        else {
            this.buy.visible = false;
            this.change.visible = true;
            this.buy.off(Laya.Event.CLICK, this, this.buySkin);
            if (this.ttype == 1) {
                if (Number(ShopSetting.nowUseBg + 4000) == id) {
                    this.change.gray = true;
                    this.change.off(Laya.Event.CLICK, this, this.changeSkin);
                }
                else {
                    this.change.gray = false;
                    this.change.on(Laya.Event.CLICK, this, this.changeSkin);
                }
            }
            else {
                if (Number(ShopSetting.nowCardBack) == id) {
                    this.change.gray = true;
                    this.change.off(Laya.Event.CLICK, this, this.changeSkin);
                }
                else {
                    this.change.gray = false;
                    this.change.on(Laya.Event.CLICK, this, this.changeSkin);
                }
            }
        }
    };
    ShowBgView.prototype.onBgLoad = function (url) {
        wx.hideLoading({});
        this.visible = true;
        this.bg.skin = url;
    };
    ShowBgView.prototype.onCancel = function () {
        this.close();
    };
    ShowBgView.prototype.buySkin = function () {
        var that = this;
        GameMain.app.mWX.buyItem(this.itemIndex, function () {
            that.close();
            if (that.ttype == 1) {
                that.bigStoreView.onBtn1Bg();
            }
            else {
                that.bigStoreView.onBtn2Bg();
            }
        });
    };
    ShowBgView.prototype.changeSkin = function () {
        if (this.ttype == 1) {
            GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.BuyBgSkin);
            ShopSetting.nowUseBg = Number(this.itemIndex - 4000);
            GameMain.app.mWX.setUserValue('now_use_bg', ShopSetting.nowUseBg + '');
            this.bigStoreView.onBtn1Bg();
        }
        else {
            GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.BuyCardBackSkin);
            ShopSetting.nowCardBack = Number(this.itemIndex);
            GameMain.app.mWX.setUserValue('now_use_card_back', ShopSetting.nowCardBack + '');
            this.bigStoreView.onBtn2Bg();
        }
        wx.showToast({
            title: '更换成功',
            icon: "none",
            image: "",
            duration: 2000
        });
        this.close();
    };
    return ShowBgView;
}(ui.ShowBgViewUI));
//# sourceMappingURL=ShowBgView.js.map
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
* name;
*/
var SkView = /** @class */ (function (_super) {
    __extends(SkView, _super);
    function SkView() {
        var _this = _super.call(this) || this;
        _this.maxLength_1 = 19;
        _this.hideArray = new Array();
        _this.data = [];
        _this.init();
        return _this;
    }
    SkView.prototype.init = function () {
        this.btnClose.on(Laya.Event.CLICK, this, this.closeT, [true]);
        this.skList.renderHandler = new Laya.Handler(this, this.updatelist);
        this.skList.vScrollBarSkin = '';
        this.skList.scrollBar.hide = true;
        this.skList.scrollBar.elasticBackTime = 500;
        this.skList.scrollBar.elasticDistance = 20;
        for (var idnex = this.maxLength_1; idnex >= 0; idnex--) {
            this.data.push(ShopSetting.LevelSK[idnex]);
        }
        this.refresh();
        this.loopMove();
    };
    SkView.prototype.loopMove = function () {
        Laya.timer.loop(10, this, this.moveToDestItem);
    };
    SkView.prototype.nowLevel = function () {
        for (var idnex = this.maxLength_1; idnex >= 0; idnex--) {
            if (GameMain.app.cutlevel < ShopSetting.LevelSK[idnex]['LIMIT']) {
                ShopSetting.LevelNow = idnex;
            }
        }
        // ShopSetting.LevelNow = 7;
        ////console.log('ShopSetting.LevelNow', ShopSetting.LevelNow);
    };
    SkView.prototype.refresh = function () {
        this.nowLevel();
        this.skList.array = this.data;
    };
    SkView.prototype.closeT = function (bool) {
        this.moveToDestItem(false);
        this.hideArray.forEach(function (element) {
            element['sign'] = 0;
        });
        this.hideArray = [];
        if (bool) {
            if (GameMain.app.mWX.gameClub != null)
                GameMain.app.mWX.gameClub.show();
            this.close();
        }
    };
    SkView.prototype.updatelist = function (cell, index) {
        var bg1 = cell.getChildByName('bg1');
        var bg2 = cell.getChildByName('bg2');
        var topHeng = cell.getChildByName('topheng');
        var leftTxt = cell.getChildByName('bg1').getChildByName('leftTxt');
        var rightTxt = cell.getChildByName('bg1').getChildByName('rightTxt');
        if (bg1['sign'] != 1) {
            bg1['sign'] = 0;
        }
        if (ShopSetting.LevelNow > 3 && ShopSetting.LevelNow < this.maxLength_1 - 4) {
            if (bg1['sign'] == 0 && index > this.maxLength_1 - ShopSetting.LevelNow - 4 && this.maxLength_1 - ShopSetting.LevelNow + 4 > index) {
                bg1.alpha = 0;
                bg1.scale(0.8, 0.8);
                Laya.Tween.to(bg1, {
                    alpha: 1,
                    scaleX: 1,
                    scaleY: 1
                }, 100, Laya.Ease.sineOut, new Laya.Handler(this, function () {
                    bg1['sign'] = 1;
                    this.hideArray.push(bg1);
                }), (index - (this.maxLength_1 - ShopSetting.LevelNow - 4)) * 75, false);
            }
        }
        else if (ShopSetting.LevelNow <= 3) {
            if (bg1['sign'] == 0 && this.maxLength_1 - 7 < index) {
                bg1.alpha = 0;
                bg1.scale(0.8, 0.8);
                Laya.Tween.to(bg1, {
                    alpha: 1,
                    scaleX: 1,
                    scaleY: 1
                }, 100, Laya.Ease.sineOut, new Laya.Handler(this, function () {
                    bg1['sign'] = 1;
                    this.hideArray.push(bg1);
                }), (index - (this.maxLength_1 - 7)) * 75, false);
            }
        }
        else if (ShopSetting.LevelNow >= this.maxLength_1 - 4) {
            if (bg1['sign'] == 0 && index < 7) {
                bg1.alpha = 0;
                bg1.scale(0.8, 0.8);
                Laya.Tween.to(bg1, {
                    alpha: 1,
                    scaleX: 1,
                    scaleY: 1
                }, 100, Laya.Ease.sineOut, new Laya.Handler(this, function () {
                    bg1['sign'] = 1;
                    this.hideArray.push(bg1);
                }), index * 75, false);
            }
        }
        var ne = cell.dataSource['NAME'];
        var lt = cell.dataSource['LIMIT'];
        leftTxt.text = '' + ne;
        rightTxt.text = '完成第' + lt + '关';
        if (this.maxLength_1 - index < ShopSetting.LevelNow) {
            bg1.skin = 'local/交互/flip_bg_列表已解锁.png';
            bg2.skin = 'local/交互/pop_image_解锁圆圈.png';
            topHeng.skin = 'local/交互/pop_image_解锁升级.png';
            leftTxt.color = '#0E4466';
            rightTxt.color = '#0E4466';
        }
        else {
            if (this.maxLength_1 - index == ShopSetting.LevelNow) {
                bg1.skin = 'local/交互/pop_bg_列表当前.png';
                bg2.skin = 'local/交互/pop_image_当前等级方块.png';
                topHeng.skin = 'local/交互/pop_image_未解锁升级.png';
                leftTxt.color = '#643C18';
                rightTxt.color = '#643C18';
            }
            else {
                bg1.skin = 'local/交互/flip_bg_列表未解锁.png';
                bg2.skin = 'local/交互/pop_image_未解锁圆圈.png';
                topHeng.skin = 'local/交互/pop_image_未解锁升级.png';
                leftTxt.color = '#0E4466';
                rightTxt.color = '#0E4466';
            }
        }
    };
    SkView.prototype.moveToDestItem = function (bool) {
        // var deltaMove: number = 50;
        // var ex: number = this.skList.scrollBar.value + Laya.stage.height / 2;
        // var bx: number = this.selectedItem.x + this.selectedItem.width / 2 - ex;
        // var direct: number = bx < 0 ? -1 : 1;
        if (bool === void 0) { bool = true; }
        if (ShopSetting.LevelNow > 3 && ShopSetting.LevelNow < this.maxLength_1 - 4) {
            this.skList.scrollBar.setScroll(0, 14 * 120 + 30, (this.maxLength_1 - ShopSetting.LevelNow - 3) * 120 + (this.maxLength_1 - ShopSetting.LevelNow - 3) * 10);
        }
        else if (ShopSetting.LevelNow <= 3) {
            this.skList.scrollBar.setScroll(0, 14 * 120 + 30, 14 * 120 + 30);
        }
        else if (ShopSetting.LevelNow >= this.maxLength_1 - 4) {
            this.skList.scrollBar.setScroll(0, 14 * 120 + 30, 0);
        }
        Laya.timer.clear(this, this.moveToDestItem);
        ////console.log('ShopSetting.LevelNow222222', ShopSetting.LevelNow);
        if (bool)
            GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.onRefreshStartSK);
    };
    return SkView;
}(ui.SKViewUI));
//# sourceMappingURL=SkView.js.map
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
* ct;
*/
var EventConfig = /** @class */ (function (_super) {
    __extends(EventConfig, _super);
    function EventConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(EventConfig, "Inst", {
        get: function () {
            if (!this._instance) {
                this._instance = new EventConfig();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    return EventConfig;
}(Laya.EventDispatcher));
//# sourceMappingURL=EventConfig.js.map
var GameMain = /** @class */ (function () {
    function GameMain() {
        this.mShares = 0; // 分享次数
        this.mShareTimeArray = []; // 分享成功判定的时间数组
        this.mShareCurrentTime = 0; // 分享那一刻的时间戳
        // public otherGameId: string = '';                // 分享次数
        this.wClick = ''; // 分享次数
        this.mSDKVersion = ""; // 微信客户端基础库版本
        this.mAdOn = true; // 是否接通广告 true=>接通, false=>未接广告
        //  wxMinPro = null;               // 微信及后台接口类
        this.mPlayed = 0; //记录单局游戏复活次数
        this.pointPlayed = 0; //埋点复活次数
        this.rebirth_video = 0; // 单局游戏视频复活计数
        this.mUseCards = false; // 记录是否使用复活卡
        this.mMapLevel = 0; // 记录关卡(现在版本还没有关卡的概念,所以默认值都是0,以后可能会用到)
        this.wRankData = []; // 世界排名当前已请求的数据
        this.myLevel = 0; // 记录我的等级
        this.mWXVersion = "";
        this.isServer1 = false;
        this.isServer2 = false;
        this.upVoiceCount = 0;
        this.upVoiceBool = false;
        this.getValues = null;
        this.getLineValues = null;
        this.nextStepArray = new Array();
        this.isBackToFront = false;
        this.isNotDraging = false;
        this.levelnum = 0;
        this.fakerlevelnum = null; //虚假关卡
        this.cutlevel = null; //实际关卡
        this.levelconf = new Array();
        this.alllevelconf = {};
        this.isLevelGame = 0; //0-不是，1-重新开始，2-新开局
        this.mingpainum = 1;
        this.isOpenFreeModel = false; //自由模式
        // public ismingpai = false;
        this.isSpecialModel = false; //自己配关卡模式
        this.SpecialRows = new Array();
        this.SpecialDecks = new Array();
        this.isTestModel = false; //是否是测试模式
        this.testLevel = 0;
        this.isServer3 = false;
        this.isServer4 = false;
        this.isXinShow = false;
        this.gameStartTime = 0;
        this.loginView = null;
        this.isShouYeUp = false;
        this.startImg = null;
        //初始化微信小游戏
        Laya.MiniAdpter.init();
        //程序入口
        Laya.init(750, 1334, Laya.WebGL);
        //适配模式 宽度100%
        Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH;
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        GameMain.app = this;
        Laya.MouseManager.multiTouchEnabled = false;
        var a = 'a';
        if (a == 'a')
            a = 'a';
        // this.startImg = new Laya.Image();
        // this.startImg.size(0, -83);
        // this.startImg.skin = 'login/bg.png';
        // Laya.stage.addChild(this.startImg);
        // if (this.loginView == null) {
        // 	this.loginView = new ui.wx.loginUI();
        // 	// this.loginView.height = Laya.stage.height;
        // 	// this.loginView.bk.y = (Laya.stage.height - 1624)/2;
        // 	// this.loginView.bk.height = Laya.stage.height;
        // 	this.loginView.name = "loginCore";
        // 	this.loginView.zOrder = 20;
        // 	// this.loginView.pos(0, 0);
        // 	Laya.stage.addChild(this.loginView);
        // }
        // this.initMusic();
        // this.onLoaded();
        // GameMain.app.mWX.fhOnoff = 1
        // this.begin()
        if (Laya.Browser.onMiniGame) {
            wx.showShareMenu({ withShareTicket: true });
            wx.onShareAppMessage(function () {
                return {
                    title: "",
                    imageUrl: "",
                    query: "",
                    success: function (res) {
                    },
                };
            });
        }
        Laya.timer.callLater(this, function () {
            BaseViewManager.Inst.onSceneIndex();
        });
    }
    GameMain.prototype.initMusic = function () {
        this.soundres = [
            { url: "res/sound/cardMove.wav", type: Laya.Loader.SOUND },
            { url: "res/sound/button_click_settings.wav", type: Laya.Loader.SOUND },
            { url: "res/sound/deal.wav", type: Laya.Loader.SOUND },
            { url: "res/sound/drop_card.wav", type: Laya.Loader.SOUND },
            { url: "res/sound/four_card.wav", type: Laya.Loader.SOUND },
            //mp3格式
            { url: "res/sound/click1.mp3", type: Laya.Loader.SOUND },
            { url: "res/sound/click2.mp3", type: Laya.Loader.SOUND },
            { url: "res/sound/up1.mp3", type: Laya.Loader.SOUND },
            { url: "res/sound/up2.mp3", type: Laya.Loader.SOUND },
            { url: "res/sound/up3.mp3", type: Laya.Loader.SOUND },
            { url: "res/sound/up4.mp3", type: Laya.Loader.SOUND },
            { url: "res/sound/up5.mp3", type: Laya.Loader.SOUND },
            { url: "res/sound/up6.mp3", type: Laya.Loader.SOUND },
            { url: "res/sound/up7.mp3", type: Laya.Loader.SOUND },
            { url: "res/sound/up8.mp3", type: Laya.Loader.SOUND },
            { url: "res/sound/up9.mp3", type: Laya.Loader.SOUND },
            { url: "res/sound/up10.mp3", type: Laya.Loader.SOUND },
            { url: "res/sound/success.mp3", type: Laya.Loader.SOUND },
            { url: "res/sound/BGM.mp3", type: Laya.Loader.SOUND },
            { url: "res/sound/boom.mp3", type: Laya.Loader.SOUND },
            { url: "res/atlas/poker5.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/poker5.png", type: Laya.Loader.IMAGE },
            { url: "res/atlas/poker6.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/poker6.png", type: Laya.Loader.IMAGE },
            { url: "res/atlas/new18.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/new18.png", type: Laya.Loader.IMAGE },
            { url: "res/atlas/new19.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/new19.png", type: Laya.Loader.IMAGE },
            { url: "res/atlas/new30.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/new30.png", type: Laya.Loader.IMAGE },
        ];
        Laya.loader.load(this.soundres, Laya.Handler.create(this, this.onLoadComplite, null, false));
    };
    GameMain.prototype.onLoadComplite = function () {
        ////console.log('音乐加载完毕');
        // ////console.log('111');
    };
    GameMain.prototype.onLoaded = function () {
        var that = this;
        if (Laya.Browser.onMiniGame) {
            var loadTask = wx.loadSubpackage({
                name: 'stage1',
                success: function (res) {
                    // 分包加载成功后通过 success 回调
                    // new GameManager().initGame();
                    ////console.log('分包加载成功');
                    Laya.loader.load([
                        { url: "res/atlas/poker.atlas", type: Laya.Loader.ATLAS },
                        { url: "res/atlas/poker.png", type: Laya.Loader.IMAGE },
                        { url: "local/商店.png", type: Laya.Loader.IMAGE },
                        { url: "local/商店.atlas", type: Laya.Loader.ATLAS },
                        { url: "local/交互.atlas", type: Laya.Loader.ATLAS },
                        { url: "local/交互.png", type: Laya.Loader.IMAGE },
                        { url: "local/卡背.atlas", type: Laya.Loader.ATLAS },
                        { url: "local/卡背.png", type: Laya.Loader.IMAGE },
                        { url: "local/GSolibs/GSolibs.atlas", type: Laya.Loader.ATLAS },
                        { url: "local/GSolibs/GSolibs.png", type: Laya.Loader.IMAGE },
                        { url: "local/GSolibs/GSolibs1.png", type: Laya.Loader.IMAGE },
                        { url: "local/GSolibs/GSolibs2.png", type: Laya.Loader.IMAGE },
                    ], Laya.Handler.create(this, function () {
                        //console.log('local资源加载成功');
                        that.initWXCore();
                    }));
                },
                fail: function (res) {
                    ////console.log('分包加载失败');
                    // 分包加载失败通过 fail 回调
                }
            });
        }
        else {
            // new GameManager().initGame();
        }
    };
    GameMain.prototype.begin = function () {
        //加载版本信息文件
        // Laya.loader.load([{ url: "res/atlas/UI.atlas", type: Laya.Loader.ATLAS }], Laya.Handler.create(this, this.onUILoad));
        this.onUILoad();
    };
    GameMain.prototype.onUILoad = function () {
        //设置适配模式
        //Laya.stage.alignH="center";
        //Laya.stage.alignV="middle";
        //var modes:string = "fixedauto";
        //Laya.stage.scaleMode = this.modes;
        var chaingame = new pokerGame.GameManager();
        //Laya.date
        //		//Laya.LocalStorage.getItem();
        //Date
    };
    /* 初始化微信core */
    GameMain.prototype.initWXCore = function () {
        if (wxCore.uo == null) {
            new wxCore();
        }
        wxCore.uo.initWX(2);
    };
    /* 获取当前时间戳 */
    GameMain.prototype.getCurrTime = function () {
        var date = new Date();
        return date.getTime();
    };
    /* 本地保存值 */
    GameMain.prototype.setLocalInfo = function (key, value) {
        wx.setStorageSync(key, value);
    };
    /* 本地取出值 */
    GameMain.prototype.getLocalInfo = function (key) {
        return wx.getStorageSync(key);
    };
    /* 提示信息 */
    GameMain.prototype.showMessage = function (msg, icon, image) {
        if (icon === void 0) { icon = ""; }
        if (image === void 0) { image = ""; }
        wx.showToast({
            title: msg,
            icon: icon,
            image: image,
            duration: 2000
        });
    };
    GameMain.prototype.getRandom = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    GameMain.app = null;
    GameMain.isGaming = false;
    GameMain.Soundable = true; // 记录是否静音
    GameMain.shareIndex = 0; // 分享标记
    GameMain.isEnterIn = false; // 记录是否是从排行榜或者接力链接进入游戏的
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=LayaGameStart.js.map