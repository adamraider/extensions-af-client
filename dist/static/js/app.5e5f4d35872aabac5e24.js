webpackJsonp([1,0],[function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}var a=n(3),i=s(a),o=n(63),r=s(o),u=n(62),l=s(u),c=n(13),d=s(c),f=n(15),p=s(f);i.default.use(l.default),new i.default({el:"#app",template:"<App/>",components:{App:r.default},router:d.default,store:p.default})},,function(e,t,n){n(52);var s=n(1)(n(21),n(79),"data-v-526bcad2",null);e.exports=s.exports},,,function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(3),i=s(a),o=n(89),r=s(o);i.default.use(r.default);var u="https://extensions-af-api.herokuapp.com/",l=i.default.resource(u+"extensions{/id}");i.default.http.options.crossOrigin=!0,i.default.http.options.credentials=!0,i.default.http.interceptors.push(function(e,t){e.headers=e.headers||{};var n=i.default.cookie.get("jwt");n&&e.headers.set("Authorization","Bearer "+n),t(function(e){401===e.status&&(console.log("User unauthorized",e),window.location.hash="#/login")})}),t.default={getAllExtensions:function(){return i.default.http.get(u+"extensions/all")},getPublished:function(){return i.default.http.get(u+"extensions/published")},getTrending:function(){return i.default.http.get(u+"extensions/trending")},login:function(e){return i.default.http.post(u+"user_token",e)},getExtension:function(e){return l.get({id:e})},createExtension:function(e){return i.default.http.post(u+"extensions",e,{emulateJSON:!0,headers:{"Content-Type":"multipart/form-data"}})},updateExtension:function(e,t){return l.update({id:e},{extension:t})},deleteExtension:function(e){return l.delete({id:e})}}},,,function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.SET_EXTENSIONS="SET_EXTENSIONS",t.UPDATE_EXTENSIONS="UPDATE_EXTENSIONS",t.START_LOADING="START_LOADING",t.FINISH_LOADING="FINISH_LOADING",t.AUTHENTICATE="AUTHENTICATE",t.LOGOUT="LOGOUT"},,,,function(e,t,n){n(58);var s=n(1)(n(26),n(87),null,null);e.exports=s.exports},function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(3),i=s(a),o=n(90),r=s(o),u=n(67),l=s(u),c=n(74),d=s(c),f=n(64),p=s(f),v=n(71),m=s(v),h=n(65),_=s(h),x=n(68),g=s(x),b=n(73),E=s(b);i.default.use(r.default);var N=new r.default({routes:[{path:"/today",component:l.default},{path:"/trending",component:d.default},{path:"/about",component:p.default},{path:"/search",component:m.default},{path:"/submit",component:E.default},{path:"/admin",component:_.default,meta:{protected:!0}},{path:"/login",component:g.default},{path:"*",redirect:"/today"}]});N.beforeEach(function(e,t,n){if(e.meta.protected){var s=i.default.cookie.get("jwt");s?n():n({path:"/login"})}else n()}),t.default=N},function(e,t,n){"use strict";function s(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.checkAuth=t.logout=t.login=t.updateExtension=t.getTrending=t.getAllExtensions=t.getPublished=void 0;var i=n(3),o=a(i),r=n(5),u=a(r),l=n(8),c=s(l);t.getPublished=function(e,t){var n=e.commit,s=u.default.getPublished(t);return s.then(function(e){n(c.SET_EXTENSIONS,{extensions:e.body})}),s},t.getAllExtensions=function(e,t){var n=e.commit,s=u.default.getAllExtensions(t);return s.then(function(e){n(c.SET_EXTENSIONS,{extensions:e.body})}),s},t.getTrending=function(e,t){var n=e.commit,s=u.default.getTrending(t);return s.then(function(e){n(c.SET_EXTENSIONS,{extensions:e.body})}),s},t.updateExtension=function(e,t){var n=e.commit,s=t.extension;console.log("update ext",s);var a=u.default.updateExtension(s.id,s);return a.then(function(e){n(c.UPDATE_EXTENSION,{extension:s})}),a},t.login=function(e,t){var n=e.commit,s=u.default.login(t);return s.then(function(e){e.ok&&(o.default.cookie.set("jwt",e.data.jwt),n(c.AUTHENTICATE))}),s},t.logout=function(e,t){var n=(e.state,e.commit);o.default.cookie.delete("jwt"),n(c.LOGOUT)},t.checkAuth=function(e,t){var n=e.commit,s=o.default.cookie.get("jwt");s&&n(c.AUTHENTICATE)}},function(e,t,n){"use strict";function s(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),o=a(i),r=n(93),u=a(r),l=n(16),c=n(14),d=s(c);o.default.use(u.default);var f=!1;t.default=new u.default.Store({state:l.state,mutations:l.mutations,actions:d,strict:f})},function(e,t,n){"use strict";function s(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.mutations=t.state=void 0;var i,o=n(33),r=a(o),u=n(8),l=s(u);t.state={user:{authenticated:!1},extensions:[],loading:!1},t.mutations=(i={},(0,r.default)(i,l.SET_EXTENSIONS,function(e,t){var n=t.extensions;e.extensions=n}),(0,r.default)(i,l.UPDATE_EXTENSION,function(e,t){var n=t.extension,s=void 0;for(var a in e.extensions)if(e.extensions[a].id===n.id){s=a;break}console.log("UPDATE_EXTENSION",n),e[s]=n}),(0,r.default)(i,l.START_LOADING,function(e){e.loading=!0}),(0,r.default)(i,l.FINISH_LOADING,function(e){e.loading=!1}),(0,r.default)(i,l.AUTHENTICATE,function(e){e.user.authenticated=!0}),(0,r.default)(i,l.LOGOUT,function(e){e.user.authenticated=!1}),i)},function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(70),i=s(a),o=n(72),r=s(o);t.default={name:"app",created:function(){this.$store.dispatch("checkAuth")},components:{AppNav:i.default,Spinner:r.default}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(66),i=s(a);t.default={components:{AdminExtension:i.default},data:function(){return{search:null,extensions:[]}},beforeCreate:function(){document.body.classList.add("body--admin")},created:function(){this.fetchData()},beforeDestroy:function(){document.body.classList.remove("body--admin")},methods:{fetchData:function(){var e=this;this.$store.commit("START_LOADING"),this.$store.dispatch("getAllExtensions").then(function(){e.$store.commit("FINISH_LOADING")})}},computed:{filteredExtensions:function(){return this.$store.state.extensions.filter(function(e){var t=new RegExp(this.search,"i");return t.test(e.name)||t.test(e.url)||t.test(e.desc)}.bind(this))}}}},function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(31),i=s(a),o=n(2),r=s(o);t.default={components:{Extension:r.default},props:{extension:{required:!0}},data:function(){return{extended:!1}},methods:{toggleExtended:function(){this.extended=!this.extended},update:function(e,t){var n=void 0;switch(console.log(e),e.target.type){case"checkbox":n=e.target.checked;break;default:n=e.target.value}console.log("updating "+t+" with value of "+n);var s=JSON.parse((0,i.default)(this.extension));s[t]=n,this.$store.dispatch("updateExtension",{extension:s}).then(function(e){console.log("updated",e)})}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{extension:{required:!0},admin:{default:!1}},data:function(){return{name:"This is a name"}},computed:{classList:function(){return{"extension--featured":this.extension.featured,"extension--published":this.admin&&this.extension.published}}}}},function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),i=s(a);t.default={components:{Extension:i.default},data:function(){return{extensions:[]}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;this.$store.commit("START_LOADING"),this.$store.dispatch("getPublished").then(function(){e.$store.commit("FINISH_LOADING")})}},computed:{featuredExtensions:function(){return this.$store.state.extensions.filter(function(e){return e.featured})},nonFeaturedExtensions:function(){return this.$store.state.extensions.filter(function(e){return!e.featured})}}}},function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),i=s(a);t.default={components:{Extension:i.default},data:function(){return{email:"",password:"",error:null}},mounted:function(){this.$refs.email.focus()},methods:{login:function(){var e=this;this.$store.commit("START_LOADING"),this.$store.dispatch("login",{auth:{email:this.email,password:this.password}}).then(function(t){e.$store.commit("FINISH_LOADING"),e.$router.push("/admin")}).catch(function(t){e.$store.commit("FINISH_LOADING"),e.error="Please check your email and password"})}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{active:Boolean,default:!1},methods:{toggle:function(){this.active?this.$emit("close"):this.$emit("open")}},computed:{toggleVar:function(){return this.active}}}},function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(69),i=s(a),o=n(12),r=s(o),u=n(5),l=s(u);t.default={components:{NavToggle:i.default,NewExtensionForm:r.default},data:function(){return{navIsOpen:!1,newExtension:{email:"adamjraider@gmail.com",name:"raider's extension",url:"http://adamraider.me",desc:"aohdoashdoiashdoasdhoashdasd"}}},methods:{logout:function(){this.$store.dispatch("logout"),this.$router.push("/")},openNav:function(){this.navIsOpen=!0},closeNav:function(){this.navIsOpen=!1},createExtension:function(){var e=this;console.log("submitting ext",this.newExtension),l.default.createExtension(this.newExtension).then(function(t){console.log("Extension created",t),e.newExtension={email:null,name:null,url:null,desc:null}}).catch(function(e){console.log("Error creating extension",e)})},updateFile:function(e){this.newExtension.image=e.target.files[0]||e.dataTransfer.files[0]||e.target.result}},computed:{adminIsAuthenticated:function(){return this.$store.state.user.authenticated}}}},function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(5),i=s(a),o=n(60),r=s(o);t.default={props:{heading:{default:!0},labels:{default:!0}},data:function(){return{done:!1,error:null,extension:{email:null,name:null,desc:null,url:null}}},methods:{createExtension:function(e){var t=this,n=new r.default(this.extension);n.append("extension[name]",this.extension.name),n.append("extension[url]",this.extension.url),n.append("extension[desc]",this.extension.desc),n.append("extension[image]",this.extension.image),n.append("extension[email]",this.extension.email),console.log("submitting ext",n),i.default.createExtension(n).then(function(e){console.log("Extension created",e),t.extension={email:null,name:null,url:null,desc:null},t.done=!0,t.error=null}).catch(function(e){console.log("Error creating extension",e),t.error=e.body.error})},updateFile:function(e){var t=e.target.files[0]||e.dataTransfer.files[0]||e.target.result;this.$set(this.extension,"image",t)}}}},function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),i=s(a);t.default={components:{Extension:i.default},data:function(){return{search:null}},mounted:function(){this.$refs.input.focus()},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;this.$store.commit("START_LOADING"),this.$store.dispatch("getPublished").then(function(){e.$store.commit("FINISH_LOADING")})}},computed:{filteredExtensions:function(){return this.$store.state.extensions.filter(function(e){var t=new RegExp(this.search,"i");return t.test(e.name)||t.test(e.url)||t.test(e.desc)}.bind(this))}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(12),i=s(a);t.default={components:{NewExtensionForm:i.default}}},function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),i=s(a);t.default={components:{Extension:i.default},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;this.$store.commit("START_LOADING"),this.$store.dispatch("getTrending").then(function(){e.$store.commit("FINISH_LOADING")})}}}},,,,,,,,,,,,,,,,function(e,t,n){t=e.exports=n(47)(),t.push([e.id,".navToggle[data-v-80b646a2]{position:relative;overflow:hidden;margin:0;padding:0;width:30px;height:30px;font-size:0;text-indent:-9999px;-webkit-appearance:none;-moz-appearance:none;appearance:none;box-shadow:none;border-radius:0;border:none;cursor:pointer;opacity:1}.navToggle span[data-v-80b646a2]{display:block;height:1px;background-color:#fff;position:absolute;left:0;width:100%;transition:all .2s}.navToggle span[data-v-80b646a2]:first-of-type{top:8px}.navToggle span[data-v-80b646a2]:nth-of-type(2){top:50%}.navToggle span[data-v-80b646a2]:nth-of-type(3){top:22px}.navToggle.active span[data-v-80b646a2]:first-of-type{top:50%;transform:rotate(-45deg)}.navToggle.active span[data-v-80b646a2]:nth-of-type(2){opacity:0}.navToggle.active span[data-v-80b646a2]:nth-of-type(3){top:50%;transform:rotate(45deg)}",""])},,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,,,function(e,t,n){n(53);var s=n(1)(n(17),n(80),null,null);e.exports=s.exports},function(e,t,n){n(51);var s=n(1)(n(18),n(78),"data-v-2b056ae5",null);e.exports=s.exports},function(e,t,n){n(56);var s=n(1)(n(19),n(84),null,null);e.exports=s.exports},function(e,t,n){n(55);var s=n(1)(n(20),n(83),"data-v-73a86108",null);e.exports=s.exports},function(e,t,n){n(59);var s=n(1)(n(22),n(88),"data-v-f85ad692",null);e.exports=s.exports},function(e,t,n){n(49);var s=n(1)(n(23),n(76),"data-v-1464e8c1",null);e.exports=s.exports},function(e,t,n){n(92);var s=n(1)(n(24),n(85),"data-v-80b646a2",null);e.exports=s.exports},function(e,t,n){n(48);var s=n(1)(n(25),n(75),"data-v-0c05776c",null);e.exports=s.exports},function(e,t,n){n(57);var s=n(1)(n(27),n(86),null,null);e.exports=s.exports},function(e,t,n){n(50);var s=n(1)(n(28),n(77),"data-v-22c90371",null);e.exports=s.exports},function(e,t,n){var s=n(1)(n(29),n(82),null,null);e.exports=s.exports},function(e,t,n){n(54);var s=n(1)(n(30),n(81),"data-v-57a901fd",null);e.exports=s.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav"},[n("router-link",{staticClass:"logo",attrs:{to:"/today","active-class":"active"}},[e._v("extensions.af")]),n("nav-toggle",{attrs:{active:e.navIsOpen},on:{open:function(t){e.openNav()},close:e.closeNav}}),n("ul",{staticClass:"nav__menu",class:{"nav__menu--active":e.navIsOpen}},[n("li",{on:{click:function(t){e.closeNav()}}},[n("router-link",{attrs:{to:"/today","active-class":"active"}},[n("span",{staticClass:"link__icon"},[e._v("💡 ")]),n("span",{staticClass:"link__name"},[e._v("Today")])])],1),n("li",{on:{click:function(t){e.closeNav()}}},[n("router-link",{attrs:{to:"/trending","active-class":"active"}},[n("span",{staticClass:"link__icon"},[e._v("🔥 ")]),n("span",{staticClass:"link__name"},[e._v("Trending")])])],1),n("li",{on:{click:function(t){e.closeNav()}}},[n("router-link",{attrs:{to:"/about","active-class":"active"}},[n("span",{staticClass:"link__icon"},[e._v("😎 ")]),n("span",{staticClass:"link__name"},[e._v("About")])])],1),n("li",{on:{click:function(t){e.closeNav()}}},[n("router-link",{attrs:{to:"/search","active-class":"active"}},[n("span",{staticClass:"link__icon"},[e._v("🕵️ ")]),n("span",{staticClass:"link__name"},[e._v("Search")])])],1),e.adminIsAuthenticated?n("li",{on:{click:function(t){e.closeNav()}}},[n("router-link",{attrs:{to:"/admin","active-class":"active"}},[n("span",{staticClass:"link__icon"},[e._v("🔒 ")]),n("span",{staticClass:"link__name"},[e._v("Admin")])])],1):e._e(),e.adminIsAuthenticated?n("li",{on:{click:function(t){e.closeNav()}}},[n("a",{attrs:{href:"javascript:;"},on:{click:function(t){e.logout()}}},[n("span",{staticClass:"link__icon"},[e._v("🛁 ")]),n("span",{staticClass:"link__name"},[e._v("Logout")])])]):e._e()]),n("div",{staticClass:"nav__submit submit",on:{click:function(t){e.closeNav()}}},[n("router-link",{attrs:{to:"/submit","active-class":"active"}},[n("span",{staticClass:"link__icon"},[e._v("🗿")])])],1),n("new-extension-form",{attrs:{labels:!1,heading:!1}})],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:!e.$store.state.loading,expression:"!$store.state.loading"}],staticClass:"content"},[n("div",{staticClass:"heading"},[e._v("Login")]),n("div",{staticClass:"login"},[e.error?n("div",{staticClass:"error"},[e._v(e._s(e.error))]):e._e(),n("form",{on:{submit:function(t){t.preventDefault(),e.login()}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],ref:"email",attrs:{type:"text",placeholder:"email"},domProps:{value:e._s(e.email)},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:e._s(e.password)},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),n("button",{attrs:{type:"submut"}},[e._v("Submit")])])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c||t;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"loader"},[n("div",{staticClass:"loader__figure"})])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:!e.$store.state.loading,expression:"!$store.state.loading"}],staticClass:"content"},[n("div",{staticClass:"heading"},[e._v("extensions af, bro")]),n("div",{staticClass:"about"},[e._v("Loem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"extension",class:e.classList},[e.extension.trending?n("div",{staticClass:"trending"},[e._v("🔥")]):e._e(),n("a",{staticClass:"rocket",attrs:{href:e.extension.url,target:"_blank"}},[e._v("🚀  Visit")]),n("div",{staticClass:"extension__imageWrapper"},[n("img",{staticClass:"extension__image",attrs:{src:e.extension.image}})]),n("div",{staticClass:"extension__info"},[n("div",{staticClass:"extension__name"},[e._v(e._s(e.extension.name))]),n("div",{staticClass:"extension__desc"},[e._v(e._s(e.extension.desc))])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("app-nav"),n("div",{directives:[{name:"show",rawName:"v-show",value:e.$store.state.loading,expression:"$store.state.loading"}],staticClass:"content"},[n("spinner")],1),n("router-view")],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:!e.$store.state.loading,expression:"!$store.state.loading"}],staticClass:"content"},[n("div",{staticClass:"heading"},[e._v("Trending")]),e._l(e.$store.state.extensions,function(e){return n("extension",{attrs:{extension:e}})})],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:!e.$store.state.loading,expression:"!$store.state.loading"}],staticClass:"content"},[n("new-extension-form")],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"extension"},[n("div",{staticClass:"main"},[n("label",{staticClass:"switch"},[n("input",{attrs:{type:"checkbox"},domProps:{checked:e.extension.published},on:{change:function(t){e.update(t,"published")}}}),n("div",{staticClass:"switch__box"})]),n("div",{staticClass:"imageWrapper"},[n("img",{staticClass:"image",attrs:{src:e.extension.image}})]),n("div",{staticClass:"info"},[n("div",{staticClass:"name"},[e._v(e._s(e.extension.name))])]),n("div",{staticClass:"moreBtn",on:{click:function(t){e.toggleExtended()}}},[e.extended?n("span",{staticClass:"icon-keyboard_arrow_up"}):n("span",{staticClass:"icon-keyboard_arrow_down"})])]),n("div",{staticClass:"more",class:{"more--active":e.extended}},[n("div",{staticClass:"options"},[n("span",[e._v("Featured ")]),n("label",{staticClass:"slider"},[n("input",{attrs:{type:"checkbox"},domProps:{checked:e.extension.featured},on:{change:function(t){e.update(t,"featured")}}}),n("div",{staticClass:"slider__btn"})]),n("span",[e._v("Trending ")]),n("label",{staticClass:"slider"},[n("input",{attrs:{type:"checkbox"},domProps:{checked:e.extension.trending},on:{change:function(t){e.update(t,"trending")}}}),n("div",{staticClass:"slider__btn"})])]),e.extension.desc?n("div",{staticClass:"desc"},[e._v(e._s(e.extension.desc))]):e._e()])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:!e.$store.state.loading,expression:"!$store.state.loading"}],staticClass:"content"},[n("div",{staticClass:"heading"},[e._v("Review Extensions")]),n("div",{staticClass:"search"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],ref:"input",attrs:{type:"text",placeholder:"Search for dope af Chrome extensions..."},domProps:{value:e._s(e.search)},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}})]),e._l(e.filteredExtensions,function(e){return n("admin-extension",{attrs:{extension:e}})})],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navToggle",class:{active:e.active},on:{click:function(t){e.toggle()}}},[n("span"),n("span"),n("span")])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:!e.$store.state.loading,expression:"!$store.state.loading"}],staticClass:"content"},[n("div",{staticClass:"search"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],ref:"input",attrs:{type:"text",placeholder:"Search for dope af Chrome extensions..."},domProps:{value:e._s(e.search)},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}})]),e._l(e.filteredExtensions,function(e){return n("extension",{attrs:{extension:e}})})],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"newExtensionForm"},[e.done?n("div",{staticClass:"done"},[n("h1",{staticClass:"heading"},[e._v("👍 Thanks for your submission")])]):[e.heading?n("h1",{staticClass:"heading"},[e._v("Submit an extension")]):e._e(),e.error?n("div",{staticClass:"error"},[e._v("Uh oh, there was an error: "+e._s(e.error))]):e._e(),n("form",{staticClass:"form",on:{submit:function(t){t.preventDefault(),e.createExtension(t)}}},[e.labels?n("label",[e._v("Your Email")]):e._e(),n("input",{directives:[{name:"model",rawName:"v-model",value:e.extension.email,expression:"extension.email"}],attrs:{type:"email",placeholder:"elon@tesla.com",required:"required"},domProps:{value:e._s(e.extension.email)},on:{input:function(t){t.target.composing||(e.extension.email=t.target.value)}}}),e.labels?n("label",[e._v("Name of Extension")]):e._e(),n("input",{directives:[{name:"model",rawName:"v-model",value:e.extension.name,expression:"extension.name"}],attrs:{type:"text",placeholder:"Netflix Parrot",required:"required"},domProps:{value:e._s(e.extension.name)},on:{input:function(t){t.target.composing||(e.extension.name=t.target.value)}}}),e.labels?n("label",[e._v("URL or Website")]):e._e(),n("input",{directives:[{name:"model",rawName:"v-model",value:e.extension.url,expression:"extension.url"}],attrs:{type:"url",placeholder:"https://extensions.af",required:"required"},domProps:{value:e._s(e.extension.url)},on:{input:function(t){t.target.composing||(e.extension.url=t.target.value)}}}),e.labels?n("label",[e._v("Image")]):e._e(),n("input",{ref:"file",attrs:{type:"file",placeholder:"Extension image (200x200)",required:"required"},on:{change:e.updateFile}}),e.labels?n("label",[e._v("Description")]):e._e(),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.extension.desc,expression:"extension.desc"}],attrs:{placeholder:"Describe your extension in 140 characters",rows:"3"},domProps:{value:e._s(e.extension.desc)},on:{input:function(t){t.target.composing||(e.extension.desc=t.target.value)}}}),n("button",{staticClass:"submit",attrs:{type:"submit"}},[e._v("Submit An Extension")])])]],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:!e.$store.state.loading,expression:"!$store.state.loading"}],staticClass:"content"},[n("div",{staticClass:"heading"},[e._v("Featured 🔑")]),e._l(e.featuredExtensions,function(e){return n("extension",{attrs:{extension:e}})}),n("br"),n("div",{staticClass:"heading"},[e._v("February 21, 2017")]),e._l(e.nonFeaturedExtensions,function(e){return n("extension",{attrs:{extension:e}})})],2)},staticRenderFns:[]}},,,,function(e,t,n){var s=n(46);"string"==typeof s&&(s=[[e.id,s,""]]);n(91)(s,{});s.locals&&(e.exports=s.locals)}]);
//# sourceMappingURL=app.5e5f4d35872aabac5e24.js.map