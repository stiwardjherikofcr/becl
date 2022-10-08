"use strict";(self.webpackChunkufps_becl_app=self.webpackChunkufps_becl_app||[]).push([[194],{8386:(v,u,n)=>{n.d(u,{K:()=>f});var d=n(2843),l=n(4004),s=n(262),e=n(1261),g=n(5e3),p=n(520);let f=(()=>{class a{constructor(r){this.http=r,this.URL=`${e.N.baseUrlUser}profile/`,this.currentUser=localStorage.getItem("currentUser")?JSON.parse(localStorage.getItem("currentUser")):null}userProfile(){return this.http.get(this.URL).pipe((0,l.U)(r=>(this.currentUser=r,this.currentUser.picture=this.currentUser.picture?this.currentUser.picture:"assets/img/profile.jpg",localStorage.setItem("currentUser",JSON.stringify(this.currentUser)),r)),(0,s.K)(this.handleError))}handleError(r){return(0,d._)(()=>r)}}return a.\u0275fac=function(r){return new(r||a)(g.LFG(p.eN))},a.\u0275prov=g.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},9194:(v,u,n)=>{n.r(u),n.d(u,{AuthModule:()=>Z});var d=n(9808),l=n(1083),s=n(8602),e=n(5e3),g=n(4742),p=n(8386);const m=[{path:"",children:[{path:"login",component:(()=>{class t{constructor(o,c,h,b){this.socialAuthService=o,this.authService=c,this.userService=h,this.router=b,this.tokenDto={}}ngOnInit(){}signInWithGoogle(){this.socialAuthService.signIn(s.tV.PROVIDER_ID).then(o=>{this.tokenDto.token=o.idToken,this.signIn(this.tokenDto)}).catch(o=>{console.log(o)})}signIn(o){this.authService.signIn(o).subscribe(c=>{this.userService.userProfile().subscribe(h=>{this.router.navigate(["/account/profile"])})})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(s.xE),e.Y36(g.e),e.Y36(p.K),e.Y36(l.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-login"]],decls:12,vars:0,consts:[[1,"login","backgroundImage"],[1,"wrapper","wrapper-login"],[1,"container","container-login","animated","fadeIn"],[1,"text-center"],[1,"login-form"],[1,"form-group"],["src","/assets/img/logo-new-ufps-xl.png","alt","Logo BECL",1,"img-fluid"],[1,"form-action"],["type","button",1,"btn","btn-primary","btn-rounded","btn-social",3,"click"],[1,"fab","fa-google"]],template:function(o,c){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h3",3),e._uU(4,"Iniciar Sesi\xf3n para Acceder"),e.qZA(),e.TgZ(5,"div",4)(6,"div",5),e._UZ(7,"img",6),e.qZA(),e.TgZ(8,"div",7)(9,"button",8),e.NdJ("click",function(){return c.signInWithGoogle()}),e._UZ(10,"i",9),e._uU(11," Iniciar Sesi\xf3n con Google "),e.qZA()()()()()())},styles:[".backgroundImage[_ngcontent-%COMP%]{background-image:url(/assets/img/fondo_login.svg);background-size:cover;background-position:center;background-repeat:no-repeat}.btn-social[_ngcontent-%COMP%]{font-size:1.2em}"]}),t})(),data:{title:"Login"}},{path:"register",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-register"]],decls:36,vars:0,consts:[[1,"login"],[1,"wrapper","wrapper-login"],[1,"container","container-signup","animated","fadeIn"],[1,"text-center"],[1,"login-form"],[1,"form-group","form-floating-label"],["id","fullname","name","fullname","type","text","required","",1,"form-control","input-border-bottom"],["for","fullname",1,"placeholder"],["id","email","name","email","type","email","required","",1,"form-control","input-border-bottom"],["for","email",1,"placeholder"],["id","passwordsignin","name","passwordsignin","type","password","required","",1,"form-control","input-border-bottom"],["for","passwordsignin",1,"placeholder"],[1,"show-password"],[1,"flaticon-interface"],["id","confirmpassword","name","confirmpassword","type","password","required","",1,"form-control","input-border-bottom"],["for","confirmpassword",1,"placeholder"],[1,"row","form-sub","m-0"],[1,"custom-control","custom-checkbox"],["type","checkbox","name","agree","id","agree",1,"custom-control-input"],["for","agree",1,"custom-control-label"],[1,"form-action"],["href","#","id","show-signin",1,"btn","btn-danger","btn-rounded","btn-login","mr-3"],["href","#",1,"btn","btn-primary","btn-rounded","btn-login"]],template:function(o,c){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h3",3),e._uU(4,"Sign Up"),e.qZA(),e.TgZ(5,"div",4)(6,"div",5),e._UZ(7,"input",6),e.TgZ(8,"label",7),e._uU(9,"Fullname"),e.qZA()(),e.TgZ(10,"div",5),e._UZ(11,"input",8),e.TgZ(12,"label",9),e._uU(13,"Email"),e.qZA()(),e.TgZ(14,"div",5),e._UZ(15,"input",10),e.TgZ(16,"label",11),e._uU(17,"Password"),e.qZA(),e.TgZ(18,"div",12),e._UZ(19,"i",13),e.qZA()(),e.TgZ(20,"div",5),e._UZ(21,"input",14),e.TgZ(22,"label",15),e._uU(23,"Confirm Password"),e.qZA(),e.TgZ(24,"div",12),e._UZ(25,"i",13),e.qZA()(),e.TgZ(26,"div",16)(27,"div",17),e._UZ(28,"input",18),e.TgZ(29,"label",19),e._uU(30,"I Agree the terms and conditions."),e.qZA()()(),e.TgZ(31,"div",20)(32,"a",21),e._uU(33,"Cancel"),e.qZA(),e.TgZ(34,"a",22),e._uU(35,"Sign Up"),e.qZA()()()()()())},styles:[""]}),t})(),data:{title:"Register"}},{path:"**",redirectTo:"login",pathMatch:"full"}]}];let r=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[l.Bz.forChild(m)],l.Bz]}),t})();var U=n(1261);let Z=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[{provide:"SocialAuthServiceConfig",useValue:{autoLogin:!0,providers:[{id:s.tV.PROVIDER_ID,provider:new s.tV(U.N.googleClientId)}]}}],imports:[[d.ez,r,s.RB]]}),t})()}}]);