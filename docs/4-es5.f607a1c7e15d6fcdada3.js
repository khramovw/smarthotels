function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{GTNQ:function(e,t){},HimD:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n("2Vo4"),r=n("8Y7J"),s=function(){var e=function(){function e(){_classCallCheck(this,e),this.data={tariffs:new i.a(null),editable:new i.a(null)}}return _createClass(e,[{key:"clean",value:function(){var e=this;Object.keys(this.data).forEach((function(t){return e.data[t].next(null)}))}}]),e}();return e.ngInjectableDef=r["\u0275\u0275defineInjectable"]({factory:function(){return new e},token:e,providedIn:"root"}),e}()},QpM1:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var i=n("mrSG"),r=n("bP2Y"),s=n("+ma8"),o=n("fet1"),a=n("AytR"),u=n("B43R"),c=n("lJxs"),l=(n("GTNQ"),n("8Y7J")),h=function(){var e=function(){function e(t,n,i,r){_classCallCheck(this,e),this.http=t,this.utils=n,this.urls=i,this.tokenService=r}return _createClass(e,[{key:"getCurrentUser",value:function(e,t){var n=this.urls.getCurrentUserUrl(e);return this.http.get(n,null,t).pipe(Object(c.a)((function(e){return e.data})))}},{key:"login",value:function(e){var t=this.urls.getLoginUrl();return this.postWithAppToken(t,e)}},{key:"confirmEmailWithCode",value:function(e){var t=this.urls.getConfirmEmailWithCodeUrl();return this.postWithAppToken(t,e)}},{key:"signUp",value:function(e){var t=this.urls.getHotelierRegisterUrl();return this.postWithAppToken(t,e)}},{key:"sendNewConfirmEmail",value:function(e){var t=this.urls.getSendNewConfirmEmailUrl();return this.postWithAppToken(t,e)}},{key:"restorePassword",value:function(e){var t=this.urls.getRestorePassword();return this.postWithAppToken(t,e)}},{key:"changePassword",value:function(e){var t=this.urls.getChangePassword();return this.postWithAppToken(t,e)}},{key:"getAppToken",value:function(){var e=this.urls.getAppTokenUrl();return this.http.post(e,null,a.a.appToken)}},{key:"getSources",value:function(){var e=this.tokenService.getToken("userToken"),t=this.urls.getSourcesUrl();return this.http.get(t,null,e)}},{key:"getRates",value:function(e){var t=this.tokenService.getToken("userToken"),n=this.urls.getRatesUrl(e);return this.http.get(n,null,t)}},{key:"getRoomTypes",value:function(){var e=this.tokenService.getToken("userToken"),t=this.urls.getRoomTypesUrl();return this.http.get(t,null,e)}},{key:"getBookings",value:function(e){var t=this.tokenService.getToken("userToken"),n=this.urls.getBookingsUrl(1);return this.http.get(n,e,t)}},{key:"getSingleBooking",value:function(e){var t=this.tokenService.getToken("userToken"),n="".concat(this.urls.getBookingsUrl(1),"/").concat(e);return this.http.get(n,null,t).pipe(Object(c.a)((function(e){return e.data})))}},{key:"getGuests",value:function(e){var t=this.tokenService.getToken("userToken"),n=this.urls.getGuestsUrl(1);return this.http.get(n,e,t)}},{key:"getSingleGuest",value:function(e){var t=this.tokenService.getToken("userToken"),n="".concat(this.urls.getGuestsUrl(1),"/").concat(e);return this.http.get(n,null,t).pipe(Object(c.a)((function(e){return e.data})))}},{key:"addSingleGuestForReservation",value:function(e,t){var n=this.tokenService.getToken("userToken"),i=this.urls.getGuestOfReservationsUrl(1,e);return this.http.post(i,t,n)}},{key:"deleteSingleGuestForReservation",value:function(e,t){var n=this.tokenService.getToken("userToken"),i="".concat(this.urls.getGuestOfReservationsUrl(1,e),"/").concat(t);return this.http.delete(i,n)}},{key:"updateSingleGuest",value:function(e,t){var n=this.tokenService.getToken("userToken"),i="".concat(this.urls.getGuestsUrl(1),"/").concat(e);return this.http.put(i,t,n)}},{key:"getSearchPrice",value:function(e,t,n,i){var r=this.tokenService.getToken("userToken"),s=this.urls.getSearchPrice(e,t,n,i);return this.http.get(s,null,r)}},{key:"getSearchPriceWithoutParams",value:function(e){var t=this.tokenService.getToken("userToken"),n=this.urls.getSearchPriceWitoutParams();return this.http.get(n,e,t)}},{key:"getPrice",value:function(e,t,n,r,s,o){return i.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function i(){var a,u;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return a=this.tokenService.getToken("userToken"),u=this.urls.getPrice(e,t,n,r,s,o),i.next=3,this.http.get(u,null,a);case 3:return i.abrupt("return",i.sent.toPromise());case 4:case"end":return i.stop()}}),i,this)})))}},{key:"getPriceNonAsync",value:function(e,t){var n=this.tokenService.getToken("userToken"),i=this.urls.getPriceWitoutParams(e);return this.http.get(i,t,n)}},{key:"getProfileData",value:function(){var e=this.tokenService.getToken("userToken"),t=this.urls.getProfileData();return this.http.get(t,null,e)}},{key:"getActiveNoteList",value:function(e){var t=this.tokenService.getToken("userToken"),n=this.urls.getActiveNoteListUrl(1,e);return this.http.get(n,null,t)}},{key:"getArchivedNoteList",value:function(e){var t=this.tokenService.getToken("userToken"),n=this.urls.getArchivedNoteListUrl(1,e);return this.http.get(n,null,t)}},{key:"addBookingNote",value:function(e,t){var n=this.tokenService.getToken("userToken"),i=this.urls.getActiveNoteListUrl(1,e);return this.http.post(i,t,n)}},{key:"getGuestActiveNoteList",value:function(e){var t=this.tokenService.getToken("userToken"),n=this.urls.getGuestActiveNotesUrl(1,e);return this.http.get(n,null,t)}},{key:"getGuestArchivedNoteList",value:function(e){var t=this.tokenService.getToken("userToken"),n=this.urls.getGuestArchivedNotesUrl(1,e);return this.http.get(n,null,t)}},{key:"addGuestNote",value:function(e,t){var n=this.tokenService.getToken("userToken"),i=this.urls.getGuestActiveNotesUrl(1,e);return this.http.post(i,t,n)}},{key:"updateGuestNote",value:function(e,t,n){var i=this.tokenService.getToken("userToken"),r=this.urls.getDeleteGuestActiveNoteListUrl(1,e,t);return this.http.put(r,n,i)}},{key:"addBookings",value:function(e){var t=this.tokenService.getToken("userToken"),n=this.urls.getBookingsUrl(1);return this.http.post(n,e,t)}},{key:"cancelReservation",value:function(e){var t=this.tokenService.getToken("userToken"),n=this.urls.getReservationCancelUrl(1,e);return this.http.patch(n,null,t)}},{key:"setNoShowStatusToReservation",value:function(e){var t=this.tokenService.getToken("userToken"),n=this.urls.getReservationNoShowStatusSettingUrl(1,e);return this.http.patch(n,null,t)}},{key:"addGuest",value:function(e){var t=this.tokenService.getToken("userToken"),n=this.urls.getGuestsUrl(1);return this.http.post(n,e,t)}},{key:"deleteActiveBookingNote",value:function(e,t){var n=this.tokenService.getToken("userToken"),i=this.urls.getDeleteActiveNoteListUrl(1,e,t);return this.http.delete(i,n)}},{key:"deleteArchivedBookingNote",value:function(e,t){var n=this.tokenService.getToken("userToken"),i=this.urls.getDeleteArchivedNoteListUrl(1,e,t);return this.http.delete(i,n)}},{key:"deleteGuestActiveNote",value:function(e,t){var n=this.tokenService.getToken("userToken"),i=this.urls.getDeleteGuestActiveNoteListUrl(1,e,t);return this.http.delete(i,n)}},{key:"deleteGuestArchivedNote",value:function(e,t){var n=this.tokenService.getToken("userToken"),i=this.urls.getDeleteGuestArchivedNoteListUrl(1,e,t);return this.http.delete(i,n)}},{key:"updateGuest",value:function(e,t){var n=this.tokenService.getToken("userToken"),i="".concat(this.urls.getGuestsUrl(1),"/").concat(e);return this.http.put(i,t,n)}},{key:"updateProfileData",value:function(e){var t=this.tokenService.getToken("userToken"),n=this.urls.getUpdateProfile();return this.http.put(n,e,t)}},{key:"updatePassword",value:function(e){var t=this.tokenService.getToken("userToken"),n=this.urls.getUpdatePassword();return this.http.put(n,e,t)}},{key:"updateEmail",value:function(e){var t=this.tokenService.getToken("userToken"),n=this.urls.getUpdateEmail();return this.http.put(n,e,t)}},{key:"updateAvatar",value:function(e){var t=this.tokenService.getToken("userToken"),n=this.urls.getUpdateAvatar();return this.http.post(n,e,t)}},{key:"postWithAppToken",value:function(e,t,n){return i.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function r(){var s,o=this;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(s=this.tokenService.getToken("appToken"))){r.next=5;break}r.t0=this.http.post(e,t,s,n),r.next=8;break;case 5:return r.next=7,this.getAppToken().toPromise().then((function(e){return i.__awaiter(o,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s=this.utils.tokenObjToString(e),this.tokenService.setToken(s,"appToken"),this.tokenService.setToken(new Date,"lastUpdate");case 1:case"end":return t.stop()}}),t,this)})))}));case 7:r.t0=this.http.post(e,t,s,n);case 8:return r.abrupt("return",r.t0);case 9:case"end":return r.stop()}}),r,this)})))}}]),e}();return e.ngInjectableDef=l["\u0275\u0275defineInjectable"]({factory:function(){return new e(l["\u0275\u0275inject"](r.a),l["\u0275\u0275inject"](u.a),l["\u0275\u0275inject"](o.a),l["\u0275\u0275inject"](s.a))},token:e,providedIn:"root"}),e}()},"RL7/":function(e,t,n){"use strict";var i,r=n("2Vo4"),s=n("/uUt"),o=n("+ma8"),a=n("QpM1"),u=n("fet1"),c=n("B43R"),l=n("jcG0"),h=n("v8gK"),v=n("HimD"),k=n("UzXn"),g=n("8Y7J"),f=((i=function(){function e(t,n,i,r){_classCallCheck(this,e),this.hotelService=t,this.newHotelCreationService=n,this.tariffPlansService=i,this.navBarService=r}return _createClass(e,[{key:"cleanAll",value:function(){this.hotelService.clean(),this.newHotelCreationService.clean(),this.tariffPlansService.clean(),this.navBarService.clean()}},{key:"clean",value:function(e){this[e].clean()}}]),e}()).ngInjectableDef=g["\u0275\u0275defineInjectable"]({factory:function(){return new i(g["\u0275\u0275inject"](l.a),g["\u0275\u0275inject"](h.a),g["\u0275\u0275inject"](v.a),g["\u0275\u0275inject"](k.a))},token:i,providedIn:"root"}),i),p=n("C5ip"),d=n("iInd");n.d(t,"a",(function(){return T}));var S,T=((S=function(){function e(t,n,i,o,a,u,c,l,h,v){_classCallCheck(this,e),this.tokenService=t,this.apiService=n,this.urls=i,this.router=o,this.hotelService=a,this.newHotelCreationService=u,this.utils=c,this.cleanerService=l,this.navBarService=h,this.hotelierApi=v,this.isAuthenticatedSubject=new r.a(!1),this.authenticatedUserSubject=new r.a({}),this.isAuthenticated=this.isAuthenticatedSubject.asObservable().pipe(Object(s.a)()),this.authenticatedUser=this.authenticatedUserSubject.asObservable().pipe(Object(s.a)());var k=this.tokenService.getToken("userToken"),g=this.tokenService.getToken("user");k&&g&&this.setAuthenticatedUser(this.tokenService.getToken("user"))}return _createClass(e,[{key:"setAuthenticatedUser",value:function(e){return this.isAuthenticatedSubject.next(!0),this.authenticatedUserSubject.next(e),this.tokenService.setToken("","email"),e}},{key:"logInIfAlreadyAuthenticated",value:function(){return this.apiService.getCurrentUser("hotelier",this.tokenService.getToken("userToken"))}},{key:"getIsAuthenticated",value:function(){return this.isAuthenticatedSubject.value}},{key:"getAuthenticatedUser",value:function(){return this.authenticatedUserSubject.value}},{key:"logIn",value:function(e,t){var n=this;return this.apiService.login({username:e,password:t,role:"hotelier"}).then((function(e){return e.toPromise().then((function(e){var t=n.utils.tokenObjToString(e);return n.tokenService.setToken(t,"userToken"),n.apiService.getCurrentUser("hotelier",t).toPromise().then((function(e){return n.setAuthenticatedUser(e)}),(function(e){return n.logOut()}))}))}))}},{key:"setTokenByHotels",value:function(){var e=this;this.hotelierApi.getHotels().toPromise().then((function(t){if(e.hotelService.hotels.next(t),1===t.length)if(e.tokenService.setToken(!1,"has-hotels"),e.navBarService.data.currentHotel.next(t[0]),!t||t.find((function(e){return"published"===e.status}))||!e.tokenService.getToken("hotelInCreation")&&void 0!==e.tokenService.getToken("has-hotels"))e.router.navigate([""]);else{var n=t.find((function(e){return"registration"===e.status&&e.step<4}));n||(e.router.navigate([""]),e.router.navigate(["hotel/all"]),e.tokenService.setToken(!0,"has-hotels")),e.tokenService.setToken(t[0].id,"hotelInCreation"),e.router.navigate(["hotel","new-hotel"],{queryParams:{step:n.step}})}else t.length>1?(e.router.navigate(["hotel/all"]),e.tokenService.setToken(!0,"has-hotels")):(e.tokenService.setToken(!1,"has-hotels"),e.router.navigate(["hotel/new-hotel"]))}))}},{key:"logOut",value:function(){this.tokenService.removeToken(),this.isAuthenticatedSubject.next(!1),this.authenticatedUserSubject.next(null),this.cleanerService.cleanAll()}},{key:"signUp",value:function(e){var t=this;return e.password_confirmation=e.password,this.apiService.signUp(e).then((function(e){return e.toPromise().then((function(e){return t.tokenService.setToken(e.data.email,"email"),e.data}))}))}},{key:"confirmEmailWithCode",value:function(e){var t=this,n={token:e,email:this.tokenService.getToken("email"),role:"hotelier"};return this.apiService.confirmEmailWithCode(n).then((function(e){return e.toPromise().then((function(e){var n=t.utils.tokenObjToString(e);return t.tokenService.setToken(n,"userToken"),t.apiService.getCurrentUser("hotelier",n).toPromise().then().catch((function(){t.logOut()}))}))}))}},{key:"sendNewConfirmEmail",value:function(){var e={email:this.tokenService.getToken("email"),role:"hotelier"};return this.apiService.sendNewConfirmEmail(e).then((function(e){return e.toPromise()}))}},{key:"restorePassword",value:function(e){var t=this;return this.apiService.restorePassword({email:e,role:"hotelier"}).then((function(n){return t.tokenService.setToken(e,"email"),n.toPromise()}))}},{key:"changePassword",value:function(e){var t=Object.assign({},e,{email:this.tokenService.getToken("email"),role:"hotelier"});return this.apiService.changePassword(t).then((function(e){return e.toPromise()}))}}]),e}()).ngInjectableDef=g["\u0275\u0275defineInjectable"]({factory:function(){return new S(g["\u0275\u0275inject"](o.a),g["\u0275\u0275inject"](a.a),g["\u0275\u0275inject"](u.a),g["\u0275\u0275inject"](d.m),g["\u0275\u0275inject"](l.a),g["\u0275\u0275inject"](h.a),g["\u0275\u0275inject"](c.a),g["\u0275\u0275inject"](f),g["\u0275\u0275inject"](k.a),g["\u0275\u0275inject"](p.a))},token:S,providedIn:"root"}),S)},UzXn:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n("2Vo4"),r=n("8Y7J"),s=function(){var e=function(){function e(){_classCallCheck(this,e),this.data={currentHotel:new i.a(null),tariffHotel:new i.a(null)}}return _createClass(e,[{key:"clean",value:function(){var e=this;Object.keys(this.data).forEach((function(t){return e.data[t].next(null)}))}}]),e}();return e.ngInjectableDef=r["\u0275\u0275defineInjectable"]({factory:function(){return new e},token:e,providedIn:"root"}),e}()},jcG0:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n("2Vo4"),r=n("8Y7J"),s=function(){var e=function(){function e(){_classCallCheck(this,e),this.hotels=new i.a([])}return _createClass(e,[{key:"ngOnDestroy",value:function(){}},{key:"clean",value:function(){this.hotels.next([])}}]),e}();return e.ngInjectableDef=r["\u0275\u0275defineInjectable"]({factory:function(){return new e},token:e,providedIn:"root"}),e}()},v8gK:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var i=n("2Vo4"),r=n("XNiG"),s=n("C5ip"),o=n("B43R"),a=n("+ma8"),u=n("UzXn"),c=n("8Y7J"),l=n("iInd"),h=function(){var e=function(){function e(t,n,s,o,a){_classCallCheck(this,e),this.router=t,this.utils=n,this.hotelierApi=s,this.tokenService=o,this.navBarService=a,this.reservation=new i.a(null),this.reservationBuildings=new i.a([]),this.reservationRooms=new i.a([]),this.reservationRoomsType=new i.a([]),this.reservationBuildingRooms=new i.a([]),this.reservationServices=new i.a(null),this.reservationServicesGroups=new i.a(null),this.reservationLanguages=new i.a(null),this.reservationCities=new i.a(null),this.reservationObjectTypes=new i.a(null),this.navigationHandler=new r.a,this.canGoNext=new i.a(!1),this.onNavigateResponse=new r.a,this.updateHandler=new r.a,this.onCompleteHandler=new r.a}return _createClass(e,[{key:"ngOnDestroy",value:function(){this.hotelierApiSubscription.unsubscribe()}},{key:"clean",value:function(){this.reservation.next(null),this.reservationBuildings.next([])}},{key:"navigateToNextStep",value:function(e,t){var n=this,i=Object.assign({},this.reservation.getValue(),e);"done"===t?(i.status="complete",this.hotelierApiSubscription=this.hotelierApi.updateHotelInfo(this.utils.normalizeReservationData(i),this.reservation.getValue().id).subscribe((function(e){n.updateHandler.next(e),n.tokenService.setToken(null,"hotelInCreation"),n.tokenService.setToken(!0,"has-hotels"),n.tokenService.setToken(e.id,"hotel-id"),n.navBarService.data.currentHotel.next(e),n.router.navigateByUrl("/dashboard"),n.clean()}),(function(e){n.utils.presentErrorResponseMessage(e)}))):e?this.hotelierApiSubscription=null===this.reservation.getValue()?this.hotelierApi.saveHotelInfo(e).subscribe((function(e){n.reservation.next(e),n.onNavigateResponse.next(!0),n.tokenService.setToken(e.id,"hotelInCreation")}),(function(e){n.utils.simplyError("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u0438\u0435"),n.onNavigateResponse.next(!0)})):this.hotelierApi.updateHotelInfo(this.utils.normalizeReservationData(i),this.reservation.getValue().id).subscribe((function(e){n.reservation.next(e),n.updateHandler.next(e),n.onNavigateResponse.next(!0),n.tokenService.setToken(e.id,"hotelInCreation")}),(function(e){n.utils.simplyError("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u0438\u0435"),n.onNavigateResponse.next(!0)})):this.onNavigateResponse.next(!0)}}]),e}();return e.ngInjectableDef=c["\u0275\u0275defineInjectable"]({factory:function(){return new e(c["\u0275\u0275inject"](l.m),c["\u0275\u0275inject"](o.a),c["\u0275\u0275inject"](s.a),c["\u0275\u0275inject"](a.a),c["\u0275\u0275inject"](u.a))},token:e,providedIn:"root"}),e}()}}]);