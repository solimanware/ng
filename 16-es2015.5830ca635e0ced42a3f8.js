(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{B9zo:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var c=a("XNiG"),s=a("1G5W"),n=a("fXoL"),i=a("h2q7");let r=(()=>{class t{constructor(t,e,a){this._elementRef=t,this._fuseMediaMatchService=e,this._renderer=a,this._unsubscribeAll=new c.a}ngOnInit(){this._parent=this._renderer.parentNode(this._elementRef.nativeElement),this._parent&&(this._grandParent=this._renderer.parentNode(this._parent),this._fuseMediaMatchService.onMediaChange.pipe(Object(s.a)(this._unsubscribeAll)).subscribe(t=>{"xs"===t?this._removeClass():this._addClass()}))}ngOnDestroy(){this._parent&&(this._removeClass(),this._unsubscribeAll.next(),this._unsubscribeAll.complete())}_addClass(){this._renderer.addClass(this._grandParent,"inner-scroll")}_removeClass(){this._renderer.removeClass(this._grandParent,"inner-scroll")}}return t.\u0275fac=function(e){return new(e||t)(n.Sb(n.l),n.Sb(i.a),n.Sb(n.J))},t.\u0275dir=n.Nb({type:t,selectors:[["",8,"inner-scroll"]]}),t})()},nImp:function(t,e,a){"use strict";a.r(e),a.d(e,"ChatModule",(function(){return wt}));var c=a("tyNb"),s=a("bTqV"),n=(a("R1ws"),a("FKr1")),i=a("fXoL");let r=(()=>{class t{}return t.\u0275mod=i.Qb({type:t}),t.\u0275inj=i.Pb({factory:function(e){return new(e||t)},imports:[[n.k],n.k]}),t})();var o=a("kmnG"),l=a("NFeN"),h=a("qFsG"),b=a("MutI"),d=a("STbY"),u=a("QibW"),m=a("XhcP"),p=a("/t3+"),f=a("5HBU"),g=a("2Vo4"),v=a("XNiG"),x=a("jD4G"),w=a("tk/3");let y=(()=>{class t{constructor(t){this._httpClient=t,this.onChatSelected=new g.a(null),this.onContactSelected=new g.a(null),this.onChatsUpdated=new v.a,this.onUserUpdated=new v.a,this.onLeftSidenavViewChanged=new v.a,this.onRightSidenavViewChanged=new v.a}resolve(t,e){return new Promise((t,e)=>{Promise.all([this.getContacts(),this.getChats(),this.getUser()]).then(([e,a,c])=>{this.contacts=e,this.chats=a,this.user=c,t()},e)})}getChat(t){const e=this.user.chatList.find(e=>e.contactId===t);if(e)return new Promise((a,c)=>{this._httpClient.get("api/chat-chats/"+e.id).subscribe(e=>{const a=e,c=this.contacts.find(e=>e.id===t);this.onChatSelected.next(Object.assign({},{chatId:a.id,dialog:a.dialog,contact:c}))},c)});this.createNewChat(t).then(e=>{this.getChat(t)})}createNewChat(t){return new Promise((e,a)=>{const c=this.contacts.find(e=>e.id===t),s=x.a.generateGUID(),n={id:s,dialog:[]};this.user.chatList.push({contactId:t,id:s,lastMessageTime:"2017-02-18T10:30:18.931Z",name:c.name,unread:null}),this._httpClient.post("api/chat-chats",Object.assign({},n)).subscribe(t=>{this._httpClient.post("api/chat-user/"+this.user.id,this.user).subscribe(t=>{this.getUser().then(t=>{this.onUserUpdated.next(t),e(t)})})},a)})}selectContact(t){this.onContactSelected.next(t)}setUserStatus(t){this.user.status=t}updateUserData(t){this._httpClient.post("api/chat-user/"+this.user.id,t).subscribe(e=>{this.user=t})}updateDialog(t,e){return new Promise((a,c)=>{this._httpClient.post("api/chat-chats/"+t,{id:t,dialog:e}).subscribe(t=>{a(t)},c)})}getContacts(){return new Promise((t,e)=>{this._httpClient.get("api/chat-contacts").subscribe(e=>{t(e)},e)})}getChats(){return new Promise((t,e)=>{this._httpClient.get("api/chat-chats").subscribe(e=>{t(e)},e)})}getUser(){return new Promise((t,e)=>{this._httpClient.get("api/chat-user").subscribe(e=>{t(e[0])},e)})}}return t.\u0275fac=function(e){return new(e||t)(i.cc(w.b))},t.\u0275prov=i.Ob({token:t,factory:t.\u0275fac}),t})();var S=a("1G5W"),X=a("PVWW"),Y=a("B9zo"),_=a("h2q7");let T=(()=>{class t{constructor(){this.sidenavInstances=[]}setSidenav(t,e){this.sidenavInstances[t]=e}getSidenav(t){return this.sidenavInstances[t]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=i.Ob({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var C=a("pD6V");let L=(()=>{class t{constructor(t,e,a,c){this._fuseMatchMediaService=t,this._fuseMatSidenavHelperService=e,this._matSidenav=a,this._mediaObserver=c,this.isLockedOpen=!0,this._unsubscribeAll=new v.a}ngOnInit(){this._fuseMatSidenavHelperService.setSidenav(this.fuseMatSidenavHelper,this._matSidenav),this.matIsLockedOpen&&this._mediaObserver.isActive(this.matIsLockedOpen)?(this.isLockedOpen=!0,this._matSidenav.mode="side",this._matSidenav.toggle(!0)):(this.isLockedOpen=!1,this._matSidenav.mode="over",this._matSidenav.toggle(!1)),this._fuseMatchMediaService.onMediaChange.pipe(Object(S.a)(this._unsubscribeAll)).subscribe(()=>{this.matIsLockedOpen&&this._mediaObserver.isActive(this.matIsLockedOpen)?(this.isLockedOpen=!0,this._matSidenav.mode="side",this._matSidenav.toggle(!0)):(this.isLockedOpen=!1,this._matSidenav.mode="over",this._matSidenav.toggle(!1))})}ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}}return t.\u0275fac=function(e){return new(e||t)(i.Sb(_.a),i.Sb(T),i.Sb(m.a),i.Sb(C.g))},t.\u0275dir=i.Nb({type:t,selectors:[["","fuseMatSidenavHelper",""]],hostVars:2,hostBindings:function(t,e){2&t&&i.Kb("mat-is-locked-open",e.isLockedOpen)},inputs:{fuseMatSidenavHelper:"fuseMatSidenavHelper",matIsLockedOpen:"matIsLockedOpen"}}),t})(),I=(()=>{class t{constructor(t){this._fuseMatSidenavHelperService=t}onClick(){this._fuseMatSidenavHelperService.getSidenav(this.fuseMatSidenavToggler).toggle()}}return t.\u0275fac=function(e){return new(e||t)(i.Sb(T))},t.\u0275dir=i.Nb({type:t,selectors:[["","fuseMatSidenavToggler",""]],hostBindings:function(t,e){1&t&&i.gc("click",(function(){return e.onClick()}))},inputs:{fuseMatSidenavToggler:"fuseMatSidenavToggler"}}),t})();var A=a("ofXK"),O=a("XiUz"),M=a("znSr"),k=a("3Pt+"),G=a("EwFO"),F=a("uREc");let U=(()=>{class t{transform(t,e,a){return x.a.filterArrayByString(t,e)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=i.Rb({name:"filter",type:t,pure:!0}),t})();var R=a("vVcS");function D(t,e){1&t&&(i.Yb(0,"div",27),i.Tc(1," Chats "),i.Xb())}function P(t,e){if(1&t&&(i.Yb(0,"div",39),i.Tc(1),i.Xb()),2&t){const t=i.kc().$implicit;i.Gb(1),i.Uc(t.unread)}}const j=function(){return{y:"100%"}},V=function(t){return{value:"*",params:t}};function H(t,e){if(1&t){const t=i.Zb();i.Yb(0,"button",28),i.gc("click",(function(){i.Hc(t);const a=e.$implicit;return i.kc(2).getChat(a.contactId)})),i.Yb(1,"div",8),i.Yb(2,"div",29),i.Tb(3,"img",30),i.lc(4,"getById"),i.lc(5,"getById"),i.Tb(6,"mat-icon",31),i.lc(7,"getById"),i.Xb(),i.Yb(8,"div",32),i.Yb(9,"div",33),i.Yb(10,"div",34),i.Tc(11),i.lc(12,"getById"),i.Xb(),i.Yb(13,"div",35),i.Tc(14),i.Xb(),i.Xb(),i.Yb(15,"div",36),i.Yb(16,"div",37),i.Tc(17),i.lc(18,"date"),i.Xb(),i.Rc(19,P,2,1,"div",38),i.Xb(),i.Xb(),i.Xb(),i.Xb()}if(2&t){const t=e.$implicit,a=i.kc(2);i.rc("@animate",i.uc(27,V,i.tc(26,j))),i.Gb(3),i.sc("alt",i.oc(5,12,a.contacts,t.contactId,"name")),i.rc("src",i.oc(4,8,a.contacts,t.contactId,"avatar"),i.Jc),i.Gb(3),i.rc("ngClass",i.oc(7,16,a.contacts,t.contactId,"status")),i.Gb(5),i.Uc(i.oc(12,20,a.contacts,t.contactId,"name")),i.Gb(3),i.Uc(t.lastMessage),i.Gb(3),i.Vc(" ",i.mc(18,24,t.lastMessageTime)," "),i.Gb(2),i.rc("ngIf",t.unread)}}function z(t,e){1&t&&(i.Yb(0,"div",27),i.Tc(1," Contacts "),i.Xb())}function N(t,e){if(1&t){const t=i.Zb();i.Yb(0,"button",40),i.gc("click",(function(){i.Hc(t);const a=e.$implicit;return i.kc(2).getChat(a.id)})),i.Yb(1,"div",8),i.Yb(2,"div",41),i.Tb(3,"img",42),i.Tb(4,"mat-icon",31),i.Xb(),i.Yb(5,"div",43),i.Yb(6,"div",34),i.Tc(7),i.Xb(),i.Yb(8,"p",44),i.Tc(9),i.Xb(),i.Xb(),i.Xb(),i.Xb()}if(2&t){const t=e.$implicit;i.rc("@animate",i.uc(7,V,i.tc(6,j))),i.Gb(3),i.sc("src",t.avatar,i.Jc),i.sc("alt",t.name),i.Gb(1),i.rc("ngClass",t.status),i.Gb(3),i.Uc(t.name),i.Gb(2),i.Uc(t.mood)}}function B(t,e){1&t&&(i.Yb(0,"div",45),i.Tc(1," No results.. "),i.Xb())}const J=function(){return{value:"50"}};function q(t,e){if(1&t&&(i.Yb(0,"div"),i.Yb(1,"div",21),i.Rc(2,D,2,0,"div",22),i.lc(3,"filter"),i.Rc(4,H,20,29,"button",23),i.lc(5,"filter"),i.Xb(),i.Yb(6,"div",24),i.Rc(7,z,2,0,"div",22),i.lc(8,"filter"),i.Rc(9,N,10,9,"button",25),i.lc(10,"filter"),i.Xb(),i.Rc(11,B,2,0,"div",26),i.lc(12,"filter"),i.Xb()),2&t){const t=i.kc();i.rc("@animateStagger",i.tc(21,J)),i.Gb(2),i.rc("ngIf",i.nc(3,6,t.user.chatList,t.searchText).length>0),i.Gb(2),i.rc("ngForOf",i.nc(5,9,t.user.chatList,t.searchText)),i.Gb(3),i.rc("ngIf",i.nc(8,12,t.contacts,t.searchText).length>0),i.Gb(2),i.rc("ngForOf",i.nc(10,15,t.contacts,t.searchText)),i.Gb(2),i.rc("ngIf",0===i.nc(12,18,t.contacts,t.searchText).length)}}let $=(()=>{class t{constructor(t,e,a){this._chatService=t,this._fuseMatSidenavHelperService=e,this._mediaObserver=a,this.chatSearch={name:""},this.searchText="",this._unsubscribeAll=new v.a}ngOnInit(){this.user=this._chatService.user,this.chats=this._chatService.chats,this.contacts=this._chatService.contacts,this._chatService.onChatsUpdated.pipe(Object(S.a)(this._unsubscribeAll)).subscribe(t=>{this.chats=t}),this._chatService.onUserUpdated.pipe(Object(S.a)(this._unsubscribeAll)).subscribe(t=>{this.user=t})}ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}getChat(t){this._chatService.getChat(t),this._mediaObserver.isActive("gt-md")||this._fuseMatSidenavHelperService.getSidenav("chat-left-sidenav").toggle()}setUserStatus(t){this._chatService.setUserStatus(t)}changeLeftSidenavView(t){this._chatService.onLeftSidenavViewChanged.next(t)}logout(){console.log("logout triggered")}}return t.\u0275fac=function(e){return new(e||t)(i.Sb(y),i.Sb(T),i.Sb(C.g))},t.\u0275cmp=i.Mb({type:t,selectors:[["chat-chats-sidenav"]],decls:46,vars:6,consts:[[1,"sidenav-header"],["fxLayout","row","fxLayoutAlign","space-between center"],[1,"avatar-wrapper"],[1,"mat-avatar","avatar",3,"src","alt","click"],[1,"s-16","status",3,"ngClass","matMenuTriggerFor"],["id","user-status-menu"],["userStatusMenu","matMenu"],["mat-menu-item","",3,"click"],["fxLayout","row","fxLayoutAlign","start center"],[1,"s-16","status","online"],[1,"s-16","status","away"],[1,"s-16","status","do-not-disturb"],[1,"s-16","status","offline"],["mat-icon-button","","aria-label","more",3,"matMenuTriggerFor"],["userMenu","matMenu"],["fxFlex","","fxLayout","row","fxLayoutAlign","start center",1,"search-wrapper"],["fxFlex","","fxLayout","row","fxLayoutAlign","start center",1,"search"],[1,"s-16","secondary-text"],["type","text","placeholder","Search or start new chat","fxFlex","",3,"ngModel","ngModelChange"],["fusePerfectScrollbar","","fxFlex","",1,"sidenav-content"],[4,"fuseIfOnDom"],["fxLayout","column",1,"chat-list"],["matSubheader","",4,"ngIf"],["mat-button","","class","contact","ngClass","{'unread':contact.unread}",3,"click",4,"ngFor","ngForOf"],["fxLayout","column",1,"contact-list"],["mat-button","","class","contact",3,"click",4,"ngFor","ngForOf"],["class","no-results-message",4,"ngIf"],["matSubheader",""],["mat-button","","ngClass","{'unread':contact.unread}",1,"contact",3,"click"],["fxFlex","0 1 auto","fxLayoutAlign","center center",1,"avatar-wrapper"],[1,"avatar",3,"src","alt"],[1,"s-16","status",3,"ngClass"],["fxLayout","row","fxFlex",""],["fxFlex","","fxLayout","column","fxLayoutAlign","center start",1,"pr-4"],[1,"contact-name"],[1,"contact-last-message"],["fxLayout","column","fxLayoutAlign","start end"],[1,"contact-last-message-time"],["class","mt-4 unread-message-count accent",4,"ngIf"],[1,"mt-4","unread-message-count","accent"],["mat-button","",1,"contact",3,"click"],["fxFlex","0 1 auto",1,"avatar-wrapper"],[1,"mat-avatar","avatar",3,"src","alt"],["fxLayout","column","fxLayoutAlign","start start"],[1,"contact-mood"],[1,"no-results-message"]],template:function(t,e){if(1&t&&(i.Yb(0,"div",0),i.Yb(1,"mat-toolbar"),i.Yb(2,"mat-toolbar-row",1),i.Yb(3,"div",2),i.Yb(4,"img",3),i.gc("click",(function(){return e.changeLeftSidenavView("user")})),i.Xb(),i.Tb(5,"mat-icon",4),i.Yb(6,"mat-menu",5,6),i.Yb(8,"button",7),i.gc("click",(function(){return e.setUserStatus("online")})),i.Yb(9,"div",8),i.Tb(10,"mat-icon",9),i.Yb(11,"span"),i.Tc(12,"Online"),i.Xb(),i.Xb(),i.Xb(),i.Yb(13,"button",7),i.gc("click",(function(){return e.setUserStatus("away")})),i.Yb(14,"div",8),i.Tb(15,"mat-icon",10),i.Yb(16,"span"),i.Tc(17,"Away"),i.Xb(),i.Xb(),i.Xb(),i.Yb(18,"button",7),i.gc("click",(function(){return e.setUserStatus("do-not-disturb")})),i.Yb(19,"div",8),i.Tb(20,"mat-icon",11),i.Yb(21,"span"),i.Tc(22,"Do not disturb"),i.Xb(),i.Xb(),i.Xb(),i.Yb(23,"button",7),i.gc("click",(function(){return e.setUserStatus("offline")})),i.Yb(24,"div",8),i.Tb(25,"mat-icon",12),i.Yb(26,"span"),i.Tc(27,"Offline"),i.Xb(),i.Xb(),i.Xb(),i.Xb(),i.Xb(),i.Yb(28,"div"),i.Yb(29,"button",13),i.Yb(30,"mat-icon"),i.Tc(31,"more_vert"),i.Xb(),i.Xb(),i.Yb(32,"mat-menu",null,14),i.Yb(34,"button",7),i.gc("click",(function(){return e.changeLeftSidenavView("user")})),i.Tc(35," Profile "),i.Xb(),i.Yb(36,"button",7),i.gc("click",(function(){return e.logout()})),i.Tc(37," Logout "),i.Xb(),i.Xb(),i.Xb(),i.Xb(),i.Yb(38,"mat-toolbar-row"),i.Yb(39,"div",15),i.Yb(40,"div",16),i.Yb(41,"mat-icon",17),i.Tc(42,"search"),i.Xb(),i.Yb(43,"input",18),i.gc("ngModelChange",(function(t){return e.searchText=t})),i.Xb(),i.Xb(),i.Xb(),i.Xb(),i.Xb(),i.Xb(),i.Yb(44,"div",19),i.Rc(45,q,13,22,"div",20),i.Xb()),2&t){const t=i.Dc(7),a=i.Dc(33);i.Gb(4),i.sc("src",e.user.avatar,i.Jc),i.sc("alt",e.user.name),i.Gb(1),i.rc("ngClass",e.user.status)("matMenuTriggerFor",t),i.Gb(24),i.rc("matMenuTriggerFor",a),i.Gb(14),i.rc("ngModel",e.searchText)}},directives:[p.a,p.c,O.e,O.d,l.a,A.q,M.a,d.c,d.d,d.a,s.b,O.b,k.c,k.p,k.s,G.a,F.a,A.t,A.s,b.f],pipes:[U,R.a,A.f],styles:["chat-chats-sidenav{display:flex;flex:1;flex-direction:column}chat-chats-sidenav .sidenav-header mat-toolbar{border-bottom:1px solid}chat-chats-sidenav .sidenav-header mat-toolbar .avatar-wrapper .avatar,chat-chats-sidenav .sidenav-header mat-toolbar .avatar-wrapper .status{cursor:pointer}chat-chats-sidenav .sidenav-header mat-toolbar .search{height:36px;line-height:36px;padding:8px;font-size:13px;border-radius:18px;border:1px solid;overflow:hidden}chat-chats-sidenav .sidenav-header mat-toolbar .search .mat-icon{margin:0}chat-chats-sidenav .sidenav-header mat-toolbar .search input{padding:0 12px 0 8px;height:36px;border:none}chat-chats-sidenav .sidenav-content{overflow:auto;-webkit-overflow-scrolling:touch}chat-chats-sidenav .sidenav-content .chat-list .mat-subheader,chat-chats-sidenav .sidenav-content .contact-list .mat-subheader{padding-left:16px;font-size:20px;font-weight:300;height:88px;line-height:88px}chat-chats-sidenav .sidenav-content .chat-list .contact,chat-chats-sidenav .sidenav-content .contact-list .contact{white-space:normal;text-align:left;letter-spacing:.01em;min-height:88px;border-bottom:1px solid;padding:16px;font-weight:400;border-radius:0}chat-chats-sidenav .sidenav-content .chat-list .contact .avatar-wrapper .avatar,chat-chats-sidenav .sidenav-content .contact-list .contact .avatar-wrapper .avatar{margin-right:16px}chat-chats-sidenav .sidenav-content .chat-list .contact .contact-name,chat-chats-sidenav .sidenav-content .contact-list .contact .contact-name{font-size:16px;white-space:nowrap;text-overflow:ellipsis}chat-chats-sidenav .sidenav-content .chat-list .contact .contact-last-message,chat-chats-sidenav .sidenav-content .contact-list .contact .contact-last-message{line-height:normal;margin-top:0}chat-chats-sidenav .sidenav-content .chat-list .contact .contact-last-message-time,chat-chats-sidenav .sidenav-content .contact-list .contact .contact-last-message-time{font-size:12px;margin-top:4px}chat-chats-sidenav .sidenav-content .chat-list .contact .contact-mood,chat-chats-sidenav .sidenav-content .contact-list .contact .contact-mood{line-height:normal;margin:0}chat-chats-sidenav .sidenav-content .chat-list .contact .unread-message-count,chat-chats-sidenav .sidenav-content .contact-list .contact .unread-message-count{font-size:12px;border-radius:50%;text-align:center;width:20px;height:20px;line-height:20px}chat-chats-sidenav .sidenav-content .no-results-message{position:absolute;width:100%;height:88px;padding:16px;font-size:15px;font-weight:400}"],encapsulation:2,data:{animation:X.a}}),t})();var W=a("Kj3r"),E=a("/uUt");let K=(()=>{class t{constructor(t){this._chatService=t,this._unsubscribeAll=new v.a}ngOnInit(){this.user=this._chatService.user,this.userForm=new k.h({mood:new k.e(this.user.mood),status:new k.e(this.user.status)}),this.userForm.valueChanges.pipe(Object(S.a)(this._unsubscribeAll),Object(W.a)(500),Object(E.a)()).subscribe(t=>{this.user.mood=t.mood,this.user.status=t.status,this._chatService.updateUserData(this.user)})}ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}changeLeftSidenavView(t){this._chatService.onLeftSidenavViewChanged.next(t)}}return t.\u0275fac=function(e){return new(e||t)(i.Sb(y))},t.\u0275cmp=i.Mb({type:t,selectors:[["chat-user-sidenav"]],decls:37,vars:4,consts:[[1,"sidenav-header"],[1,"accent"],["fxLayout","row","fxLayoutAlign","space-between center"],["mat-icon-button","","aria-label","back",3,"click"],["fxLayout","column","fxLayoutAlign","center center",1,"toolbar-bottom"],[1,"avatar","user-avatar","huge",3,"src","alt"],[1,"user-name","my-8"],["fxFlex","",1,"sidenav-content","py-32","px-24"],["fxLayout","column",3,"formGroup"],["appearance","outline","fxFlex","0 1 auto"],["matInput","","name","mood","formControlName","mood","rows","3"],["formControlName","status","fxLayout","column"],["value","online",1,"py-8"],["fxLayout","row","fxLayoutAlign","start center"],[1,"status","online","mr-8"],[1,"mat-h4","m-0"],["value","away",1,"py-8"],[1,"status","away","mr-8"],["value","do-not-disturb",1,"py-8"],[1,"status","do-not-disturb","mr-8"],["value","offline",1,"py-8"],[1,"status","offline","mr-8"]],template:function(t,e){1&t&&(i.Yb(0,"div",0),i.Yb(1,"mat-toolbar",1),i.Yb(2,"mat-toolbar-row",2),i.Yb(3,"button",3),i.gc("click",(function(){return e.changeLeftSidenavView("chats")})),i.Yb(4,"mat-icon"),i.Tc(5,"arrow_back"),i.Xb(),i.Xb(),i.Xb(),i.Yb(6,"mat-toolbar-row",4),i.Tb(7,"img",5),i.Yb(8,"div",6),i.Tc(9),i.Xb(),i.Xb(),i.Xb(),i.Xb(),i.Yb(10,"div",7),i.Yb(11,"form",8),i.Yb(12,"mat-form-field",9),i.Yb(13,"mat-label"),i.Tc(14,"Mood"),i.Xb(),i.Tb(15,"textarea",10),i.Xb(),i.Yb(16,"mat-radio-group",11),i.Yb(17,"mat-radio-button",12),i.Yb(18,"div",13),i.Tb(19,"mat-icon",14),i.Yb(20,"span",15),i.Tc(21,"Online"),i.Xb(),i.Xb(),i.Xb(),i.Yb(22,"mat-radio-button",16),i.Yb(23,"div",13),i.Tb(24,"mat-icon",17),i.Yb(25,"span",15),i.Tc(26,"Away"),i.Xb(),i.Xb(),i.Xb(),i.Yb(27,"mat-radio-button",18),i.Yb(28,"div",13),i.Tb(29,"mat-icon",19),i.Yb(30,"span",15),i.Tc(31,"Do not disturb"),i.Xb(),i.Xb(),i.Xb(),i.Yb(32,"mat-radio-button",20),i.Yb(33,"div",13),i.Tb(34,"mat-icon",21),i.Yb(35,"span",15),i.Tc(36,"Offline"),i.Xb(),i.Xb(),i.Xb(),i.Xb(),i.Xb(),i.Xb()),2&t&&(i.Gb(7),i.sc("alt",e.user.name),i.rc("src",e.user.avatar,i.Jc),i.Gb(2),i.Uc(e.user.name),i.Gb(2),i.rc("formGroup",e.userForm))},directives:[p.a,p.c,O.e,O.d,s.b,l.a,O.b,k.x,k.q,k.i,o.c,o.g,h.b,k.c,k.p,k.g,u.b,u.a],styles:["chat-user-sidenav{display:flex;flex:1;flex-direction:column;overflow:auto;-webkit-overflow-scrolling:touch}chat-user-sidenav mat-toolbar .toolbar-bottom{height:180px}"],encapsulation:2}),t})();function Q(t,e){1&t&&i.Tb(0,"chat-chats-sidenav",3),2&t&&i.rc("@slideInRight",void 0)}function Z(t,e){1&t&&i.Tb(0,"chat-user-sidenav",4),2&t&&i.rc("@slideInLeft",void 0)}let tt=(()=>{class t{constructor(t){this._chatService=t,this.view="chats",this._unsubscribeAll=new v.a}ngOnInit(){this._chatService.onLeftSidenavViewChanged.pipe(Object(S.a)(this._unsubscribeAll)).subscribe(t=>{this.view=t})}ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}}return t.\u0275fac=function(e){return new(e||t)(i.Sb(y))},t.\u0275cmp=i.Mb({type:t,selectors:[["chat-left-sidenav"]],decls:3,vars:3,consts:[[1,"views",3,"ngSwitch"],["class","view",4,"ngSwitchCase"],["class","view","fusePerfectScrollbar","",4,"ngSwitchCase"],[1,"view"],["fusePerfectScrollbar","",1,"view"]],template:function(t,e){1&t&&(i.Yb(0,"div",0),i.Rc(1,Q,1,1,"chat-chats-sidenav",1),i.Rc(2,Z,1,1,"chat-user-sidenav",2),i.Xb()),2&t&&(i.rc("ngSwitch",e.view),i.Gb(1),i.rc("ngSwitchCase","chats"),i.Gb(1),i.rc("ngSwitchCase","user"))},directives:[A.x,A.y,$,K,G.a],styles:["chat-left-sidenav,chat-left-sidenav .views{display:flex;flex-direction:column;height:100%}chat-left-sidenav .views .view{position:absolute;height:100%;bottom:0;left:0;right:0;top:0}"],encapsulation:2,data:{animation:X.a}}),t})();function et(t,e){if(1&t&&(i.Yb(0,"div",2),i.Yb(1,"mat-toolbar",3),i.Yb(2,"mat-toolbar-row",4),i.Yb(3,"div"),i.Tc(4,"Contact Info"),i.Xb(),i.Yb(5,"button",5),i.Yb(6,"mat-icon"),i.Tc(7,"close"),i.Xb(),i.Xb(),i.Xb(),i.Yb(8,"mat-toolbar-row",6),i.Tb(9,"img",7),i.Yb(10,"div",8),i.Tc(11),i.Xb(),i.Xb(),i.Xb(),i.Xb()),2&t){const t=i.kc();i.Gb(9),i.sc("alt",t.contact.name),i.rc("src",t.contact.avatar,i.Jc),i.Gb(2),i.Uc(t.contact.name)}}function at(t,e){if(1&t&&(i.Yb(0,"div",9),i.Yb(1,"div",10),i.Tc(2,"Mood"),i.Xb(),i.Yb(3,"div"),i.Tc(4),i.Xb(),i.Xb()),2&t){const t=i.kc();i.Gb(4),i.Uc(t.contact.mood)}}let ct=(()=>{class t{constructor(t){this._chatService=t,this._unsubscribeAll=new v.a}ngOnInit(){this._chatService.onContactSelected.pipe(Object(S.a)(this._unsubscribeAll)).subscribe(t=>{this.contact=t})}ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}}return t.\u0275fac=function(e){return new(e||t)(i.Sb(y))},t.\u0275cmp=i.Mb({type:t,selectors:[["chat-contact-sidenav"]],decls:2,vars:2,consts:[["class","sidenav-header",4,"ngIf"],["class","sidenav-content py-32 px-24","fxFlex","","fxLayout","column",4,"ngIf"],[1,"sidenav-header"],[1,"accent"],["fxLayout","row","fxLayoutAlign","space-between center"],["mat-icon-button","","fuseMatSidenavToggler","chat-right-sidenav","aria-label","close"],["fxLayout","column","fxLayoutAlign","center center",1,"toolbar-bottom"],[1,"avatar","contact-avatar","huge",3,"src","alt"],[1,"contact-name","my-8"],["fxFlex","","fxLayout","column",1,"sidenav-content","py-32","px-24"],[1,"secondary-text","mb-8"]],template:function(t,e){1&t&&(i.Rc(0,et,12,3,"div",0),i.Rc(1,at,5,1,"div",1)),2&t&&(i.rc("ngIf",e.contact),i.Gb(1),i.rc("ngIf",e.contact))},directives:[A.t,p.a,p.c,O.e,O.d,s.b,I,l.a,O.b],styles:["chat-contact-sidenav{display:flex;flex:1;flex-direction:column;overflow:auto;-webkit-overflow-scrolling:touch}chat-contact-sidenav mat-toolbar .toolbar-bottom{height:180px}"],encapsulation:2}),t})();function st(t,e){1&t&&i.Tb(0,"chat-contact-sidenav",2),2&t&&i.rc("@slideInRight",void 0)}let nt=(()=>{class t{constructor(t){this._chatService=t,this.view="contact",this._unsubscribeAll=new v.a}ngOnInit(){this._chatService.onRightSidenavViewChanged.pipe(Object(S.a)(this._unsubscribeAll)).subscribe(t=>{this.view=t})}ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}}return t.\u0275fac=function(e){return new(e||t)(i.Sb(y))},t.\u0275cmp=i.Mb({type:t,selectors:[["chat-right-sidenav"]],decls:2,vars:2,consts:[[1,"views",3,"ngSwitch"],["class","view","fusePerfectScrollbar","",4,"ngSwitchCase"],["fusePerfectScrollbar","",1,"view"]],template:function(t,e){1&t&&(i.Yb(0,"div",0),i.Rc(1,st,1,1,"chat-contact-sidenav",1),i.Xb()),2&t&&(i.rc("ngSwitch",e.view),i.Gb(1),i.rc("ngSwitchCase","contact"))},directives:[A.x,A.y,ct,G.a],styles:["chat-right-sidenav,chat-right-sidenav .views{display:flex;flex-direction:column;height:100%}chat-right-sidenav .views .view{position:absolute;height:100%;bottom:0;left:0;right:0;top:0}"],encapsulation:2,data:{animation:X.a}}),t})();const it=function(){return{delay:"50ms",scale:"0.2"}},rt=function(t){return{value:"*",params:t}},ot=function(){return{delay:"100ms",y:"25px"}},lt=function(){return{delay:"200ms",y:"50px"}};let ht=(()=>{class t{constructor(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Mb({type:t,selectors:[["chat-start"]],decls:10,vars:12,consts:[["fxFlex","","fxLayout","column","fxLayoutAlign","center center"],["fxLayout","column","fxLayoutAlign","center center",1,"big-circle","app-logo"],[1,"s-64","s-md-128","mat-accent"],[1,"app-title","mt-48","mb-8"],["fxHide","","fxShow.gt-md","",1,"app-message"],["mat-raised-button","","fxHide.gt-md","","fuseMatSidenavToggler","chat-left-sidenav"]],template:function(t,e){1&t&&(i.Yb(0,"div",0),i.Yb(1,"div",1),i.Yb(2,"mat-icon",2),i.Tc(3,"chat"),i.Xb(),i.Xb(),i.Yb(4,"span",3),i.Tc(5," Chat App "),i.Xb(),i.Yb(6,"span",4),i.Tc(7," Select a contact to start a chat! "),i.Xb(),i.Yb(8,"button",5),i.Tc(9," Select a contact to start a chat! "),i.Xb(),i.Xb()),2&t&&(i.Gb(1),i.rc("@animate",i.uc(4,rt,i.tc(3,it))),i.Gb(3),i.rc("@animate",i.uc(7,rt,i.tc(6,ot))),i.Gb(2),i.rc("@animate",i.uc(10,rt,i.tc(9,lt))))},directives:[O.b,O.e,O.d,l.a,M.b,s.b,I],styles:["chat-start{display:flex;flex:1}chat-start .big-circle{border-radius:50%;width:240px;height:240px;line-height:240px;text-align:center;border:1px solid}@media screen and (max-width:959px){chat-start .big-circle{width:160px;height:160px;line-height:160px}}chat-start .app-title{font-weight:600;font-size:32px}chat-start .secondary-text{font-size:16px}"],encapsulation:2,data:{animation:X.a}}),t})();const bt=["replyForm"],dt=["replyInput"];function ut(t,e){if(1&t&&i.Tb(0,"img",30),2&t){const t=i.kc(2);i.sc("src",t.contact.avatar,i.Jc)}}const mt=function(t,e,a,c){return{me:t,contact:e,"first-of-group":a,"last-of-group":c}};function pt(t,e){if(1&t&&(i.Yb(0,"div",25),i.Rc(1,ut,1,1,"img",26),i.Yb(2,"div",27),i.Yb(3,"div",28),i.Tc(4),i.Xb(),i.Yb(5,"div",29),i.Tc(6),i.lc(7,"date"),i.Xb(),i.Xb(),i.Xb()),2&t){const t=e.$implicit,a=e.index,c=i.kc();i.rc("ngClass",i.xc(7,mt,t.who===c.user.id,t.who!==c.user.id,c.isFirstMessageOfGroup(t,a),c.isLastMessageOfGroup(t,a))),i.Gb(1),i.rc("ngIf",c.shouldShowContactAvatar(t,a)),i.Gb(3),i.Uc(t.message),i.Gb(2),i.Uc(i.nc(7,4,t.time,"short"))}}let ft=(()=>{class t{constructor(t){this._chatService=t,this._unsubscribeAll=new v.a}ngOnInit(){this.user=this._chatService.user,this._chatService.onChatSelected.pipe(Object(S.a)(this._unsubscribeAll)).subscribe(t=>{t&&(this.selectedChat=t,this.contact=t.contact,this.dialog=t.dialog,this.readyToReply())})}ngAfterViewInit(){this.replyInput=this.replyInputField.first.nativeElement,this.readyToReply()}ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}shouldShowContactAvatar(t,e){return t.who===this.contact.id&&(this.dialog[e+1]&&this.dialog[e+1].who!==this.contact.id||!this.dialog[e+1])}isFirstMessageOfGroup(t,e){return 0===e||this.dialog[e-1]&&this.dialog[e-1].who!==t.who}isLastMessageOfGroup(t,e){return e===this.dialog.length-1||this.dialog[e+1]&&this.dialog[e+1].who!==t.who}selectContact(){this._chatService.selectContact(this.contact)}readyToReply(){setTimeout(()=>{this.focusReplyInput(),this.scrollToBottom()})}focusReplyInput(){setTimeout(()=>{this.replyInput.focus()})}scrollToBottom(t){t=t||400,this.directiveScroll&&(this.directiveScroll.update(),setTimeout(()=>{this.directiveScroll.scrollToBottom(0,t)}))}reply(t){if(t.preventDefault(),!this.replyForm.form.value.message)return;const e={who:this.user.id,message:this.replyForm.form.value.message,time:(new Date).toISOString()};this.dialog.push(e),this.replyForm.reset(),this._chatService.updateDialog(this.selectedChat.chatId,this.dialog).then(t=>{this.readyToReply()})}}return t.\u0275fac=function(e){return new(e||t)(i.Sb(y))},t.\u0275cmp=i.Mb({type:t,selectors:[["chat-view"]],viewQuery:function(t,e){var a;1&t&&(i.Xc(G.a,!0),i.Xc(bt,!0),i.Xc(dt,!0)),2&t&&(i.Cc(a=i.hc())&&(e.directiveScroll=a.first),i.Cc(a=i.hc())&&(e.replyForm=a.first),i.Cc(a=i.hc())&&(e.replyInputField=a))},decls:34,vars:8,consts:[["fxFlex","","fxLayout","column",1,"chat"],[1,"chat-toolbar"],["fxFlex","","fxLayout","row","fxLayoutAlign","space-between center"],["fxLayout","row","fxLayoutAlign","start center"],["mat-icon-button","","fxHide.gt-md","","fuseMatSidenavToggler","chat-left-sidenav","aria-label","chats button",1,"responsive-chats-button","mr-16"],["fxLayout","row","fxLayoutAlign","start center","fuseMatSidenavToggler","chat-right-sidenav",1,"chat-contact",3,"click"],[1,"avatar-wrapper"],[1,"avatar",3,"src","alt"],[1,"s-16","status",3,"ngClass"],[1,"chat-contact-name"],["mat-icon-button","","aria-label","more",3,"matMenuTriggerFor"],["contactMenu","matMenu"],["mat-menu-item","","fuseMatSidenavToggler","chat-right-sidenav",3,"click"],["id","chat-content","fxFlex","1 1 auto","fusePerfectScrollbar",""],[1,"chat-messages"],["class","message-row",3,"ngClass",4,"ngFor","ngForOf"],["fxFlex","0 0 auto","fxLayout","column",1,"chat-footer"],["fxFlex","0 0 auto","fxLayout","row","fxLayoutAlign","center center",1,"reply-form"],["fxFlex","","fxLayout","row","fxLayoutAlign","start center",3,"ngSubmit","keydown.enter"],["replyForm","ngForm"],["fxFlex","","floatLabel","never","appearance","standard",1,"message-text"],["matInput","","placeholder","Type your message","ngModel","","name","message",3,"rows","matTextareaAutosize"],["replyInput",""],["mat-icon-button","","type","submit","aria-label","Send message",1,"send-message-button"],[1,"secondary-text"],[1,"message-row",3,"ngClass"],["class","avatar",3,"src",4,"ngIf"],[1,"bubble"],[1,"message"],[1,"time","secondary-text"],[1,"avatar",3,"src"]],template:function(t,e){if(1&t&&(i.Yb(0,"div",0),i.Yb(1,"mat-toolbar",1),i.Yb(2,"div",2),i.Yb(3,"div",3),i.Yb(4,"button",4),i.Yb(5,"mat-icon"),i.Tc(6,"chat"),i.Xb(),i.Xb(),i.Yb(7,"div",5),i.gc("click",(function(){return e.selectContact()})),i.Yb(8,"div",6),i.Tb(9,"img",7),i.Tb(10,"mat-icon",8),i.Xb(),i.Yb(11,"div",9),i.Tc(12),i.Xb(),i.Xb(),i.Xb(),i.Yb(13,"div"),i.Yb(14,"button",10),i.Yb(15,"mat-icon"),i.Tc(16,"more_vert"),i.Xb(),i.Xb(),i.Yb(17,"mat-menu",null,11),i.Yb(19,"button",12),i.gc("click",(function(){return e.selectContact()})),i.Tc(20," Contact Info "),i.Xb(),i.Xb(),i.Xb(),i.Xb(),i.Xb(),i.Yb(21,"div",13),i.Yb(22,"div",14),i.Rc(23,pt,8,12,"div",15),i.Xb(),i.Xb(),i.Yb(24,"div",16),i.Yb(25,"div",17),i.Yb(26,"form",18,19),i.gc("ngSubmit",(function(t){return e.reply(t)}))("keydown.enter",(function(t){return e.reply(t)})),i.Yb(28,"mat-form-field",20),i.Tb(29,"textarea",21,22),i.Xb(),i.Yb(31,"button",23),i.Yb(32,"mat-icon",24),i.Tc(33,"send"),i.Xb(),i.Xb(),i.Xb(),i.Xb(),i.Xb(),i.Xb()),2&t){const t=i.Dc(18);i.Gb(9),i.sc("alt",e.contact.name),i.rc("src",e.contact.avatar,i.Jc),i.Gb(1),i.rc("ngClass",e.contact.status),i.Gb(2),i.Vc(" ",e.contact.name," "),i.Gb(2),i.rc("matMenuTriggerFor",t),i.Gb(9),i.rc("ngForOf",e.dialog),i.Gb(6),i.rc("rows",1)("matTextareaAutosize",!0)}},directives:[O.b,O.e,p.a,O.d,s.b,M.b,I,l.a,A.q,M.a,d.c,d.d,d.a,G.a,A.s,k.x,k.q,k.r,o.c,h.b,k.c,h.d,k.p,k.s,A.t],pipes:[A.f],styles:["chat-view{display:flex;flex:1 0 auto;overflow:hidden;max-width:100%}chat-view .chat .chat-toolbar{min-height:64px;border-bottom:1px solid}chat-view .chat .chat-toolbar .responsive-chats-button{padding:0}chat-view .chat .chat-toolbar .chat-contact{cursor:pointer}chat-view .chat .chat-toolbar .chat-contact .avatar{margin-right:16px}chat-view .chat #chat-content{background:transparent;overflow:auto;-webkit-overflow-scrolling:touch}chat-view .chat #chat-content .chat-messages{position:relative;padding:16px 0 40px 40px}chat-view .chat #chat-content .chat-messages .message-row{position:relative;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-end;padding:0 16px 4px}chat-view .chat #chat-content .chat-messages .message-row .avatar{position:absolute;left:-32px;margin:0}chat-view .chat #chat-content .chat-messages .message-row .bubble{position:relative;display:flex;align-items:center;justify-content:center;padding:12px;max-width:100%}chat-view .chat #chat-content .chat-messages .message-row .bubble .message{white-space:pre-wrap;line-height:1.2}chat-view .chat #chat-content .chat-messages .message-row .bubble .time{position:absolute;display:none;width:100%;font-size:11px;margin-top:8px;top:100%;left:0;white-space:nowrap}chat-view .chat #chat-content .chat-messages .message-row.contact .bubble{border-top-left-radius:5px;border-bottom-left-radius:5px;border-top-right-radius:20px;border-bottom-right-radius:20px}chat-view .chat #chat-content .chat-messages .message-row.contact .bubble .time{margin-left:12px}chat-view .chat #chat-content .chat-messages .message-row.contact.first-of-group .bubble{border-top-left-radius:20px}chat-view .chat #chat-content .chat-messages .message-row.contact.last-of-group .bubble{border-bottom-left-radius:20px}chat-view .chat #chat-content .chat-messages .message-row.me{padding-left:40px}chat-view .chat #chat-content .chat-messages .message-row.me .avatar{order:2;margin:0 0 0 16px}chat-view .chat #chat-content .chat-messages .message-row.me .bubble{margin-left:auto;border-top-left-radius:20px;border-bottom-left-radius:20px;border-top-right-radius:5px;border-bottom-right-radius:5px}chat-view .chat #chat-content .chat-messages .message-row.me .bubble .time{justify-content:flex-end;right:0;margin-right:12px}chat-view .chat #chat-content .chat-messages .message-row.me.first-of-group .bubble{border-top-right-radius:20px}chat-view .chat #chat-content .chat-messages .message-row.me.last-of-group .bubble{border-bottom-right-radius:20px}chat-view .chat #chat-content .chat-messages .message-row.contact+.me,chat-view .chat #chat-content .chat-messages .message-row.me+.contact{padding-top:20px;margin-top:20px}chat-view .chat #chat-content .chat-messages .message-row.first-of-group .bubble{border-top-left-radius:20px;padding-top:13px}chat-view .chat #chat-content .chat-messages .message-row.last-of-group .bubble{border-bottom-left-radius:20px;padding-bottom:13px}chat-view .chat #chat-content .chat-messages .message-row.last-of-group .bubble .time{display:flex}chat-view .chat .chat-footer{border-top:1px solid;padding:8px 8px 8px 16px}chat-view .chat .chat-footer .reply-form{position:relative}chat-view .chat .chat-footer .reply-form .message-text{padding:16px 8px}chat-view .chat .chat-footer .reply-form .message-text .mat-form-field-wrapper,chat-view .chat .chat-footer .reply-form .message-text .mat-form-field-wrapper .mat-form-field-flex{padding:0}chat-view .chat .chat-footer .reply-form .message-text .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix{padding:0;border-radius:20px;border:1px solid}chat-view .chat .chat-footer .reply-form .message-text .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix textarea{overflow:hidden;margin:16px 48px 16px 16px;width:calc(100% - 64px);padding:0}chat-view .chat .chat-footer .reply-form .message-text .mat-form-field-wrapper .mat-form-field-underline{display:none!important}chat-view .chat .chat-footer .reply-form .send-message-button{position:absolute;right:16px;bottom:21px}"],encapsulation:2}),t})();function gt(t,e){1&t&&i.Tb(0,"chat-start")}function vt(t,e){1&t&&i.Tb(0,"chat-view")}const xt=[{path:"**",component:(()=>{class t{constructor(t){this._chatService=t,this._unsubscribeAll=new v.a}ngOnInit(){this._chatService.onChatSelected.pipe(Object(S.a)(this._unsubscribeAll)).subscribe(t=>{this.selectedChat=t})}ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}}return t.\u0275fac=function(e){return new(e||t)(i.Sb(y))},t.\u0275cmp=i.Mb({type:t,selectors:[["chat"]],decls:11,vars:2,consts:[["id","chat",1,"page-layout","carded","fullwidth","inner-scroll"],[1,"top-bg","accent"],[1,"center"],[1,"content-card"],["position","start","opened","true","mode","side","fuseMatSidenavHelper","chat-left-sidenav","matIsLockedOpen","gt-md",1,"sidenav"],[4,"ngIf"],["position","end","opened","false","mode","over","fuseMatSidenavHelper","chat-right-sidenav",1,"sidenav"]],template:function(t,e){1&t&&(i.Yb(0,"div",0),i.Tb(1,"div",1),i.Yb(2,"div",2),i.Yb(3,"div",3),i.Yb(4,"mat-sidenav-container"),i.Yb(5,"mat-sidenav",4),i.Tb(6,"chat-left-sidenav"),i.Xb(),i.Rc(7,gt,1,0,"chat-start",5),i.Rc(8,vt,1,0,"chat-view",5),i.Yb(9,"mat-sidenav",6),i.Tb(10,"chat-right-sidenav"),i.Xb(),i.Xb(),i.Xb(),i.Xb(),i.Xb()),2&t&&(i.Gb(7),i.rc("ngIf",!e.selectedChat),i.Gb(1),i.rc("ngIf",e.selectedChat))},directives:[Y.a,m.b,m.a,L,tt,A.t,nt,ht,ft],styles:["#chat .center{padding:32px!important;max-width:1400px;margin:0 auto}@media screen and (max-width:1279px){#chat .center{padding:0!important}}#chat .center .content-card{position:relative;display:flex;flex:1;border-radius:8px}#chat .center .content-card .mat-sidenav-container{display:flex;flex:1;width:100%}#chat .center .content-card .mat-sidenav-container>.mat-drawer-content,#chat .center .content-card .mat-sidenav-container>.mat-sidenav-content{display:flex;flex:1 1 auto;min-height:100%;height:auto}#chat .center .content-card .mat-sidenav-container>.mat-drawer-content{max-width:100%}#chat .center .content-card .mat-sidenav-container mat-sidenav{display:flex;flex-direction:column;width:400px;max-width:90%;overflow:hidden}"],encapsulation:2,data:{animation:X.a}}),t})(),children:[],resolve:{chat:y}}];let wt=(()=>{class t{}return t.\u0275mod=i.Qb({type:t}),t.\u0275inj=i.Pb({factory:function(e){return new(e||t)},providers:[y],imports:[[c.k.forChild(xt),s.c,r,o.e,l.b,h.c,b.d,d.b,u.c,m.c,p.b,f.a]]}),t})()},vVcS:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var c=a("fXoL");let s=(()=>{class t{transform(t,e,a){const c=t.find(t=>void 0!==t.id&&t.id===e);if(c)return c[a]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=c.Rb({name:"getById",type:t,pure:!1}),t})()}}]);