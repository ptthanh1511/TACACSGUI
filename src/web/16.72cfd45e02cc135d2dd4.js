(window.webpackJsonp = window.webpackJsonp || []).push([
	[16], {
		EYJx: function(l, n, u) {
			"use strict";
			u.r(n);
			var e = u("CcnG"),
				t = function() {
					return u.e(15).then(u.bind(null, "8i78")).then((function(l) {
						return l.CmQueriesModuleNgFactory
					}))
				},
				o = function() {
					return u.e(13).then(u.bind(null, "S9s7")).then((function(l) {
						return l.CmDevicesModuleNgFactory
					}))
				},
				i = function() {
					return u.e(14).then(u.bind(null, "OEXR")).then((function(l) {
						return l.CmModelsModuleNgFactory
					}))
				},
				a = function() {
					return u.e(12).then(u.bind(null, "bBWd")).then((function(l) {
						return l.CmCredentialsModuleNgFactory
					}))
				},
				r = function() {
					return function() {}
				}(),
				b = u("9AJC"),
				s = u("pMnS"),
				c = u("4GxJ"),
				g = u("gIcY"),
				d = u("Ip0R"),
				p = u("26FU"),
				m = u("P6uZ"),
				v = u("67Y/"),
				h = u("t/Na"),
				f = "api/confmanager/",
				C = function() {
					function l(l) {
						this.http = l
					}
					return l.prototype.toggle = function(l) {
						return this.http.post(f + "toggle/", l).pipe(Object(m.a)(), Object(v.a)((function(l) {
							return l
						})))
					}, l.prototype.cron_get = function() {
						return this.http.get(f + "settings/cron/").pipe(Object(m.a)(), Object(v.a)((function(l) {
							return l.cron
						})))
					}, l.prototype.cron_post = function(l) {
						return this.http.post(f + "settings/cron/", l).pipe(Object(m.a)(), Object(v.a)((function(l) {
							return l
						})))
					}, l.prototype.info = function() {
						return this.http.get(f + "info/").pipe(Object(m.a)(), Object(v.a)((function(l) {
							return l
						})))
					}, l.prototype.preview = function() {
						return this.http.get(f + "settings/preview/").pipe(Object(m.a)(), Object(v.a)((function(l) {
							return l
						})))
					}, l.ngInjectableDef = e.dc({
						factory: function() {
							return new l(e.ec(h.c))
						},
						token: l,
						providedIn: "root"
					}), l
				}(),
				P = function() {
					function l(l, n) {
						this.service = l, this.toastr = n, this.statusMessage = new p.a(""), this.validation = new p.a({}), this.cm = {
							period: "day",
							time: {
								hour: 1,
								minute: 0
							},
							week: 1
						}, this.git = {
							period: 60
						}, this.timeReady = new p.a(!1), this.currentStatus = new p.a("Loading..."), this.configPreview = new p.a(""), this.loadingForm = new p.a(!1)
					}
					return l.prototype.ngOnInit = function() {
						var l = this;
						this.service.cron_get().subscribe((function(n) {
							console.log(n), n.cm && (l.cm.period = n.cm.period ? n.cm.period : l.cm.period, l.cm.week = n.cm.week ? n.cm.week : l.cm.week, n.cm.time = n.cm.time.split(":"), l.cm.time.hour = n.cm.time[0] ? parseInt(n.cm.time[0]) : l.cm.time.hour, l.cm.time.minute = n.cm.time[1] ? parseInt(n.cm.time[1]) : l.cm.time.minute), n.git && (l.git.period = n.git.period ? n.git.period : l.git.period), console.log(l.cm, l.git), l.timeReady.next(!0)
						})), this.getInfo()
					}, l.prototype.toogle = function(l) {
						var n = this;
						this.currentStatus.next("Loading..."), this.service.toggle({
							action: l
						}).subscribe((function(l) {
							console.log(l), n.getInfo()
						}))
					}, l.prototype.getInfo = function() {
						var l = this;
						this.currentStatus.next("Loading..."), this.service.info().subscribe((function(n) {
							console.log(n), l.currentStatus.next(n.info)
						}))
					}, l.prototype.showConfig = function() {
						var l = this;
						this.configPreview.next("Loading..."), this.service.preview().subscribe((function(n) {
							console.log(n), l.configPreview.next(n.preview)
						}))
					}, l.prototype.makeClone = function(l) {
						return JSON.parse(JSON.stringify(l))
					}, l.prototype.save = function() {
						var l = this,
							n = this.makeClone(this.cm),
							u = "";
						u = n.time.hour >= 10 ? n.time.hour : "0" + n.time.hour, u += ":", n.time = u += n.time.minute >= 10 ? n.time.minute : "0" + n.time.minute, this.service.cron_post({
							cm: n,
							git: this.git
						}).subscribe((function(n) {
							console.log(n), "done" == n.crontab ? l.toastr.success("Settings Saved") : l.toastr.error("Unexpected Error"), l.getInfo()
						}))
					}, l
				}(),
				D = u("SZbH"),
				y = e.Bb({
					encapsulation: 0,
					styles: [
						[""]
					],
					data: {}
				});

			function M(l) {
				return e.Zb(0, [(l()(), e.Db(0, 0, null, null, 6, "div", [
					["class", "form-group"]
				], null, null, null, null, null)), (l()(), e.Db(1, 0, null, null, 5, "ngb-timepicker", [], [
					[2, "ng-untouched", null],
					[2, "ng-touched", null],
					[2, "ng-pristine", null],
					[2, "ng-dirty", null],
					[2, "ng-valid", null],
					[2, "ng-invalid", null],
					[2, "ng-pending", null]
				], [
					[null, "ngModelChange"]
				], (function(l, n, u) {
					var e = !0;
					return "ngModelChange" === n && (e = !1 !== (l.component.cm.time = u) && e), e
				}), b.l, b.g)), e.Cb(2, 573440, null, 0, c.cb, [c.db, c.bb, e.h], {
					minuteStep: [0, "minuteStep"],
					size: [1, "size"]
				}, null), e.Ub(1024, null, g.n, (function(l) {
					return [l]
				}), [c.cb]), e.Cb(4, 671744, null, 0, g.s, [
					[8, null],
					[8, null],
					[8, null],
					[6, g.n]
				], {
					model: [0, "model"]
				}, {
					update: "ngModelChange"
				}), e.Ub(2048, null, g.o, null, [g.s]), e.Cb(6, 16384, null, 0, g.p, [
					[4, g.o]
				], null, null)], (function(l, n) {
					var u = n.component;
					l(n, 2, 0, 10, u.small), l(n, 4, 0, u.cm.time)
				}), (function(l, n) {
					l(n, 1, 0, e.Pb(n, 6).ngClassUntouched, e.Pb(n, 6).ngClassTouched, e.Pb(n, 6).ngClassPristine, e.Pb(n, 6).ngClassDirty, e.Pb(n, 6).ngClassValid, e.Pb(n, 6).ngClassInvalid, e.Pb(n, 6).ngClassPending)
				}))
			}

			function k(l) {
				return e.Zb(0, [(l()(), e.Db(0, 0, null, null, 1, "button", [
					["class", "btn btn-default btn-elevate btn-sm"],
					["type", "button"]
				], null, [
					[null, "click"]
				], (function(l, n, u) {
					var e = !0;
					return "click" === n && (e = !1 !== l.component.configPreview.next("") && e), e
				}), null, null)), (l()(), e.Xb(-1, null, ["Hide"]))], null, null)
			}

			function w(l) {
				return e.Zb(0, [(l()(), e.Db(0, 0, null, null, 4, null, null, null, null, null, null, null)), (l()(), e.Db(1, 0, null, null, 0, "hr", [], null, null, null, null, null)), (l()(), e.Db(2, 0, null, null, 2, "pre", [], null, null, null, null, null)), (l()(), e.Xb(3, null, ["", ""])), e.Rb(131072, d.b, [e.h])], null, (function(l, n) {
					var u = n.component;
					l(n, 3, 0, e.Yb(n, 3, 0, e.Pb(n, 4).transform(u.configPreview)))
				}))
			}

			function N(l) {
				return e.Zb(0, [(l()(), e.Db(0, 0, null, null, 27, "div", [
					["class", "col-md-9 col-lg-7"]
				], null, null, null, null, null)), (l()(), e.Db(1, 0, null, null, 26, "div", [
					["class", "card m-3"]
				], null, null, null, null, null)), (l()(), e.Db(2, 0, null, null, 25, "div", [
					["class", "card-body"]
				], null, null, null, null, null)), (l()(), e.Db(3, 0, null, null, 1, "h4", [], null, null, null, null, null)), (l()(), e.Xb(-1, null, ["Start/Stop/Reload Configuration Manager"])), (l()(), e.Db(5, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), e.Db(6, 0, null, null, 14, "div", [
					["class", "row"]
				], null, null, null, null, null)), (l()(), e.Db(7, 0, null, null, 13, "div", [
					["class", "col-8"]
				], null, null, null, null, null)), (l()(), e.Db(8, 0, null, null, 12, "div", [
					["aria-label", "..."],
					["class", "btn-group btn-group-sm"],
					["role", "group"]
				], null, null, null, null, null)), (l()(), e.Db(9, 16777216, null, null, 2, "button", [
					["class", "btn btn-outline-info"],
					["ngbPopover", "Start"],
					["triggers", "mouseenter:mouseleave"],
					["type", "button"]
				], null, [
					[null, "click"]
				], (function(l, n, u) {
					var e = !0;
					return "click" === n && (e = !1 !== l.component.toogle("start") && e), e
				}), null, null)), e.Cb(10, 737280, null, 0, c.N, [e.n, e.M, e.w, e.k, e.Y, c.O, e.G, d.d, e.h, e.g], {
					ngbPopover: [0, "ngbPopover"],
					triggers: [1, "triggers"]
				}, null), (l()(), e.Db(11, 0, null, null, 0, "i", [
					["class", "fa fa-play"]
				], null, null, null, null, null)), (l()(), e.Db(12, 16777216, null, null, 2, "button", [
					["class", "btn btn-outline-info"],
					["ngbPopover", "Stop"],
					["triggers", "mouseenter:mouseleave"],
					["type", "button"]
				], null, [
					[null, "click"]
				], (function(l, n, u) {
					var e = !0;
					return "click" === n && (e = !1 !== l.component.toogle("stop") && e), e
				}), null, null)), e.Cb(13, 737280, null, 0, c.N, [e.n, e.M, e.w, e.k, e.Y, c.O, e.G, d.d, e.h, e.g], {
					ngbPopover: [0, "ngbPopover"],
					triggers: [1, "triggers"]
				}, null), (l()(), e.Db(14, 0, null, null, 0, "i", [
					["class", "fa fa-stop"]
				], null, null, null, null, null)), (l()(), e.Db(15, 16777216, null, null, 2, "button", [
					["class", "btn btn-outline-info"],
					["ngbPopover", "Info"],
					["triggers", "mouseenter:mouseleave"],
					["type", "button"]
				], null, [
					[null, "click"]
				], (function(l, n, u) {
					var e = !0;
					return "click" === n && (e = !1 !== l.component.getInfo() && e), e
				}), null, null)), e.Cb(16, 737280, null, 0, c.N, [e.n, e.M, e.w, e.k, e.Y, c.O, e.G, d.d, e.h, e.g], {
					ngbPopover: [0, "ngbPopover"],
					triggers: [1, "triggers"]
				}, null), (l()(), e.Db(17, 0, null, null, 0, "i", [
					["class", "fa fa-info"]
				], null, null, null, null, null)), (l()(), e.Db(18, 16777216, null, null, 2, "button", [
					["class", "btn btn-outline-info"],
					["ngbPopover", "Force Start"],
					["triggers", "mouseenter:mouseleave"],
					["type", "button"]
				], null, [
					[null, "click"]
				], (function(l, n, u) {
					var e = !0;
					return "click" === n && (e = !1 !== l.component.toogle("force") && e), e
				}), null, null)), e.Cb(19, 737280, null, 0, c.N, [e.n, e.M, e.w, e.k, e.Y, c.O, e.G, d.d, e.h, e.g], {
					ngbPopover: [0, "ngbPopover"],
					triggers: [1, "triggers"]
				}, null), (l()(), e.Db(20, 0, null, null, 0, "i", [
					["class", "fa fa-rocket"]
				], null, null, null, null, null)), (l()(), e.Db(21, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), e.Db(22, 0, null, null, 5, "div", [
					["class", "row"]
				], null, null, null, null, null)), (l()(), e.Db(23, 0, null, null, 4, "div", [
					["class", "col-12"]
				], null, null, null, null, null)), (l()(), e.Db(24, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), e.Xb(-1, null, ["Current Status"])), (l()(), e.Db(26, 0, null, null, 1, "input", [
					["class", "form-control form-control-sm"],
					["disabled", ""],
					["type", "text"]
				], [
					[8, "value", 0]
				], null, null, null, null)), e.Rb(131072, d.b, [e.h]), (l()(), e.Db(28, 0, null, null, 111, "div", [
					["class", "col-md-9 col-lg-7"]
				], null, null, null, null, null)), (l()(), e.Db(29, 0, null, null, 110, "div", [
					["class", "card m-3"]
				], null, null, null, null, null)), (l()(), e.Db(30, 0, null, null, 109, "div", [
					["class", "card-body"]
				], null, null, null, null, null)), (l()(), e.Db(31, 0, null, null, 1, "h4", [], null, null, null, null, null)), (l()(), e.Xb(-1, null, ["Cron Settings"])), (l()(), e.Db(33, 0, null, null, 106, "div", [
					["class", "row"]
				], null, null, null, null, null)), (l()(), e.Db(34, 0, null, null, 69, "div", [
					["class", "col-6"]
				], null, null, null, null, null)), (l()(), e.Db(35, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), e.Xb(-1, null, ["Configuration Manager Start"])), (l()(), e.Db(37, 0, null, null, 22, "div", [
					["class", "form-group"]
				], null, null, null, null, null)), (l()(), e.Db(38, 0, null, null, 20, "div", [
					["class", "kt-radio-list"]
				], null, null, null, null, null)), (l()(), e.Db(39, 0, null, null, 9, "label", [
					["class", "kt-radio kt-radio--brand"]
				], null, null, null, null, null)), (l()(), e.Db(40, 0, null, null, 6, "input", [
					["name", "radio1"],
					["type", "radio"],
					["value", "day"]
				], [
					[2, "ng-untouched", null],
					[2, "ng-touched", null],
					[2, "ng-pristine", null],
					[2, "ng-dirty", null],
					[2, "ng-valid", null],
					[2, "ng-invalid", null],
					[2, "ng-pending", null]
				], [
					[null, "ngModelChange"],
					[null, "input"],
					[null, "blur"],
					[null, "compositionstart"],
					[null, "compositionend"],
					[null, "change"]
				], (function(l, n, u) {
					var t = !0,
						o = l.component;
					return "input" === n && (t = !1 !== e.Pb(l, 41)._handleInput(u.target.value) && t), "blur" === n && (t = !1 !== e.Pb(l, 41).onTouched() && t), "compositionstart" === n && (t = !1 !== e.Pb(l, 41)._compositionStart() && t), "compositionend" === n && (t = !1 !== e.Pb(l, 41)._compositionEnd(u.target.value) && t), "change" === n && (t = !1 !== e.Pb(l, 42).onChange() && t), "blur" === n && (t = !1 !== e.Pb(l, 42).onTouched() && t), "ngModelChange" === n && (t = !1 !== (o.cm.period = u) && t), t
				}), null, null)), e.Cb(41, 16384, null, 0, g.e, [e.M, e.n, [2, g.a]], null, null), e.Cb(42, 212992, null, 0, g.v, [e.M, e.n, g.A, e.w], {
					name: [0, "name"],
					value: [1, "value"]
				}, null), e.Ub(1024, null, g.n, (function(l, n) {
					return [l, n]
				}), [g.e, g.v]), e.Cb(44, 671744, null, 0, g.s, [
					[8, null],
					[8, null],
					[8, null],
					[6, g.n]
				], {
					name: [0, "name"],
					model: [1, "model"]
				}, {
					update: "ngModelChange"
				}), e.Ub(2048, null, g.o, null, [g.s]), e.Cb(46, 16384, null, 0, g.p, [
					[4, g.o]
				], null, null), (l()(), e.Xb(-1, null, [" Every day "])), (l()(), e.Db(48, 0, null, null, 0, "span", [], null, null, null, null, null)), (l()(), e.Db(49, 0, null, null, 9, "label", [
					["class", "kt-radio kt-radio--brand"]
				], null, null, null, null, null)), (l()(), e.Db(50, 0, null, null, 6, "input", [
					["name", "radio1"],
					["type", "radio"],
					["value", "week"]
				], [
					[2, "ng-untouched", null],
					[2, "ng-touched", null],
					[2, "ng-pristine", null],
					[2, "ng-dirty", null],
					[2, "ng-valid", null],
					[2, "ng-invalid", null],
					[2, "ng-pending", null]
				], [
					[null, "ngModelChange"],
					[null, "input"],
					[null, "blur"],
					[null, "compositionstart"],
					[null, "compositionend"],
					[null, "change"]
				], (function(l, n, u) {
					var t = !0,
						o = l.component;
					return "input" === n && (t = !1 !== e.Pb(l, 51)._handleInput(u.target.value) && t), "blur" === n && (t = !1 !== e.Pb(l, 51).onTouched() && t), "compositionstart" === n && (t = !1 !== e.Pb(l, 51)._compositionStart() && t), "compositionend" === n && (t = !1 !== e.Pb(l, 51)._compositionEnd(u.target.value) && t), "change" === n && (t = !1 !== e.Pb(l, 52).onChange() && t), "blur" === n && (t = !1 !== e.Pb(l, 52).onTouched() && t), "ngModelChange" === n && (t = !1 !== (o.cm.period = u) && t), t
				}), null, null)), e.Cb(51, 16384, null, 0, g.e, [e.M, e.n, [2, g.a]], null, null), e.Cb(52, 212992, null, 0, g.v, [e.M, e.n, g.A, e.w], {
					name: [0, "name"],
					value: [1, "value"]
				}, null), e.Ub(1024, null, g.n, (function(l, n) {
					return [l, n]
				}), [g.e, g.v]), e.Cb(54, 671744, null, 0, g.s, [
					[8, null],
					[8, null],
					[8, null],
					[6, g.n]
				], {
					name: [0, "name"],
					model: [1, "model"]
				}, {
					update: "ngModelChange"
				}), e.Ub(2048, null, g.o, null, [g.s]), e.Cb(56, 16384, null, 0, g.p, [
					[4, g.o]
				], null, null), (l()(), e.Xb(-1, null, [" Every Week "])), (l()(), e.Db(58, 0, null, null, 0, "span", [], null, null, null, null, null)), (l()(), e.Db(59, 0, null, null, 0, "input", [
					["name", "cm_period_native"],
					["type", "hidden"]
				], null, null, null, null, null)), (l()(), e.Db(60, 0, null, null, 41, "div", [
					["class", "row"]
				], null, null, null, null, null)), (l()(), e.Db(61, 0, null, null, 3, "div", [
					["class", "col-12"]
				], null, null, null, null, null)), (l()(), e.sb(16777216, null, null, 2, null, M)), e.Cb(63, 16384, null, 0, d.m, [e.Y, e.U], {
					ngIf: [0, "ngIf"]
				}, null), e.Rb(131072, d.b, [e.h]), (l()(), e.Db(65, 0, null, null, 36, "div", [
					["class", "col-12"]
				], null, null, null, null, null)), (l()(), e.Db(66, 0, null, null, 35, "div", [
					["class", "form-group"]
				], null, null, null, null, null)), (l()(), e.Db(67, 0, null, null, 33, "select", [
					["class", "form-control form-control-sm"]
				], [
					[2, "ng-untouched", null],
					[2, "ng-touched", null],
					[2, "ng-pristine", null],
					[2, "ng-dirty", null],
					[2, "ng-valid", null],
					[2, "ng-invalid", null],
					[2, "ng-pending", null]
				], [
					[null, "ngModelChange"],
					[null, "change"],
					[null, "blur"]
				], (function(l, n, u) {
					var t = !0,
						o = l.component;
					return "change" === n && (t = !1 !== e.Pb(l, 68).onChange(u.target.value) && t), "blur" === n && (t = !1 !== e.Pb(l, 68).onTouched() && t), "ngModelChange" === n && (t = !1 !== (o.cm.week = u) && t), t
				}), null, null)), e.Cb(68, 16384, null, 0, g.x, [e.M, e.n], null, null), e.Ub(1024, null, g.n, (function(l) {
					return [l]
				}), [g.x]), e.Cb(70, 671744, null, 0, g.s, [
					[8, null],
					[8, null],
					[8, null],
					[6, g.n]
				], {
					isDisabled: [0, "isDisabled"],
					model: [1, "model"]
				}, {
					update: "ngModelChange"
				}), e.Ub(2048, null, g.o, null, [g.s]), e.Cb(72, 16384, null, 0, g.p, [
					[4, g.o]
				], null, null), (l()(), e.Db(73, 0, null, null, 3, "option", [
					["value", "1"]
				], null, null, null, null, null)), e.Cb(74, 147456, null, 0, g.t, [e.n, e.M, [2, g.x]], {
					value: [0, "value"]
				}, null), e.Cb(75, 147456, null, 0, g.C, [e.n, e.M, [8, null]], {
					value: [0, "value"]
				}, null), (l()(), e.Xb(-1, null, ["Monday"])), (l()(), e.Db(77, 0, null, null, 3, "option", [
					["value", "2"]
				], null, null, null, null, null)), e.Cb(78, 147456, null, 0, g.t, [e.n, e.M, [2, g.x]], {
					value: [0, "value"]
				}, null), e.Cb(79, 147456, null, 0, g.C, [e.n, e.M, [8, null]], {
					value: [0, "value"]
				}, null), (l()(), e.Xb(-1, null, ["Tuesday"])), (l()(), e.Db(81, 0, null, null, 3, "option", [
					["value", "3"]
				], null, null, null, null, null)), e.Cb(82, 147456, null, 0, g.t, [e.n, e.M, [2, g.x]], {
					value: [0, "value"]
				}, null), e.Cb(83, 147456, null, 0, g.C, [e.n, e.M, [8, null]], {
					value: [0, "value"]
				}, null), (l()(), e.Xb(-1, null, ["Wednesday"])), (l()(), e.Db(85, 0, null, null, 3, "option", [
					["value", "4"]
				], null, null, null, null, null)), e.Cb(86, 147456, null, 0, g.t, [e.n, e.M, [2, g.x]], {
					value: [0, "value"]
				}, null), e.Cb(87, 147456, null, 0, g.C, [e.n, e.M, [8, null]], {
					value: [0, "value"]
				}, null), (l()(), e.Xb(-1, null, ["Thursday"])), (l()(), e.Db(89, 0, null, null, 3, "option", [
					["value", "5"]
				], null, null, null, null, null)), e.Cb(90, 147456, null, 0, g.t, [e.n, e.M, [2, g.x]], {
					value: [0, "value"]
				}, null), e.Cb(91, 147456, null, 0, g.C, [e.n, e.M, [8, null]], {
					value: [0, "value"]
				}, null), (l()(), e.Xb(-1, null, ["Friday"])), (l()(), e.Db(93, 0, null, null, 3, "option", [
					["value", "6"]
				], null, null, null, null, null)), e.Cb(94, 147456, null, 0, g.t, [e.n, e.M, [2, g.x]], {
					value: [0, "value"]
				}, null), e.Cb(95, 147456, null, 0, g.C, [e.n, e.M, [8, null]], {
					value: [0, "value"]
				}, null), (l()(), e.Xb(-1, null, ["Saturday"])), (l()(), e.Db(97, 0, null, null, 3, "option", [
					["value", "0"]
				], null, null, null, null, null)), e.Cb(98, 147456, null, 0, g.t, [e.n, e.M, [2, g.x]], {
					value: [0, "value"]
				}, null), e.Cb(99, 147456, null, 0, g.C, [e.n, e.M, [8, null]], {
					value: [0, "value"]
				}, null), (l()(), e.Xb(-1, null, ["Sunday"])), (l()(), e.Db(101, 0, null, null, 0, "input", [
					["name", "week_native"],
					["type", "hidden"]
				], null, null, null, null, null)), (l()(), e.Db(102, 0, null, null, 1, "p", [
					["class", "help-block"]
				], null, null, null, null, null)), (l()(), e.Xb(-1, null, ["select time when to run configuration manager, time to start collecting data"])), (l()(), e.Db(104, 0, null, null, 35, "div", [
					["class", "col-6"]
				], null, null, null, null, null)), (l()(), e.Db(105, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), e.Xb(-1, null, ["Git Commit Start Every"])), (l()(), e.Db(107, 0, null, null, 30, "div", [
					["class", "form-group"]
				], null, null, null, null, null)), (l()(), e.Db(108, 0, null, null, 29, "select", [
					["class", "form-control form-control-sm"]
				], [
					[2, "ng-untouched", null],
					[2, "ng-touched", null],
					[2, "ng-pristine", null],
					[2, "ng-dirty", null],
					[2, "ng-valid", null],
					[2, "ng-invalid", null],
					[2, "ng-pending", null]
				], [
					[null, "ngModelChange"],
					[null, "change"],
					[null, "blur"]
				], (function(l, n, u) {
					var t = !0,
						o = l.component;
					return "change" === n && (t = !1 !== e.Pb(l, 109).onChange(u.target.value) && t), "blur" === n && (t = !1 !== e.Pb(l, 109).onTouched() && t), "ngModelChange" === n && (t = !1 !== (o.git.period = u) && t), t
				}), null, null)), e.Cb(109, 16384, null, 0, g.x, [e.M, e.n], null, null), e.Ub(1024, null, g.n, (function(l) {
					return [l]
				}), [g.x]), e.Cb(111, 671744, null, 0, g.s, [
					[8, null],
					[8, null],
					[8, null],
					[6, g.n]
				], {
					model: [0, "model"]
				}, {
					update: "ngModelChange"
				}), e.Ub(2048, null, g.o, null, [g.s]), e.Cb(113, 16384, null, 0, g.p, [
					[4, g.o]
				], null, null), (l()(), e.Db(114, 0, null, null, 3, "option", [
					["value", "10"]
				], null, null, null, null, null)), e.Cb(115, 147456, null, 0, g.t, [e.n, e.M, [2, g.x]], {
					value: [0, "value"]
				}, null), e.Cb(116, 147456, null, 0, g.C, [e.n, e.M, [8, null]], {
					value: [0, "value"]
				}, null), (l()(), e.Xb(-1, null, ["10 minutes"])), (l()(), e.Db(118, 0, null, null, 3, "option", [
					["value", "20"]
				], null, null, null, null, null)), e.Cb(119, 147456, null, 0, g.t, [e.n, e.M, [2, g.x]], {
					value: [0, "value"]
				}, null), e.Cb(120, 147456, null, 0, g.C, [e.n, e.M, [8, null]], {
					value: [0, "value"]
				}, null), (l()(), e.Xb(-1, null, ["20 minutes"])), (l()(), e.Db(122, 0, null, null, 3, "option", [
					["value", "30"]
				], null, null, null, null, null)), e.Cb(123, 147456, null, 0, g.t, [e.n, e.M, [2, g.x]], {
					value: [0, "value"]
				}, null), e.Cb(124, 147456, null, 0, g.C, [e.n, e.M, [8, null]], {
					value: [0, "value"]
				}, null), (l()(), e.Xb(-1, null, ["30 minutes"])), (l()(), e.Db(126, 0, null, null, 3, "option", [
					["value", "40"]
				], null, null, null, null, null)), e.Cb(127, 147456, null, 0, g.t, [e.n, e.M, [2, g.x]], {
					value: [0, "value"]
				}, null), e.Cb(128, 147456, null, 0, g.C, [e.n, e.M, [8, null]], {
					value: [0, "value"]
				}, null), (l()(), e.Xb(-1, null, ["40 minutes"])), (l()(), e.Db(130, 0, null, null, 3, "option", [
					["value", "50"]
				], null, null, null, null, null)), e.Cb(131, 147456, null, 0, g.t, [e.n, e.M, [2, g.x]], {
					value: [0, "value"]
				}, null), e.Cb(132, 147456, null, 0, g.C, [e.n, e.M, [8, null]], {
					value: [0, "value"]
				}, null), (l()(), e.Xb(-1, null, ["50 minutes"])), (l()(), e.Db(134, 0, null, null, 3, "option", [
					["value", "60"]
				], null, null, null, null, null)), e.Cb(135, 147456, null, 0, g.t, [e.n, e.M, [2, g.x]], {
					value: [0, "value"]
				}, null), e.Cb(136, 147456, null, 0, g.C, [e.n, e.M, [8, null]], {
					value: [0, "value"]
				}, null), (l()(), e.Xb(-1, null, ["60 minutes"])), (l()(), e.Db(138, 0, null, null, 1, "p", [
					["class", "help-block"]
				], null, null, null, null, null)), (l()(), e.Xb(-1, null, ["select time when configuration manager will check any changes inside of local files (configurations)"])), (l()(), e.Db(140, 0, null, null, 8, "div", [
					["class", "col-xs-11 offset-sm-1 offset-md-1 offset-lg-1"]
				], null, null, null, null, null)), (l()(), e.Db(141, 0, null, null, 6, "button", [
					["class", "btn btn-warning btn-elevate btn-sm"]
				], [
					[8, "disabled", 0]
				], [
					[null, "click"]
				], (function(l, n, u) {
					var e = !0;
					return "click" === n && (e = !1 !== l.component.save() && e), e
				}), null, null)), e.Ub(512, null, d.D, d.E, [e.y, e.z, e.n, e.M]), e.Cb(143, 278528, null, 0, d.k, [d.D], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), e.Rb(131072, d.b, [e.h]), e.Sb(145, {
					"kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light": 0
				}), e.Rb(131072, d.b, [e.h]), (l()(), e.Xb(-1, null, ["Save"])), (l()(), e.Xb(-1, null, ["  "])), (l()(), e.Db(149, 0, null, null, 13, "div", [
					["class", "col-md-9 col-lg-7"]
				], null, null, null, null, null)), (l()(), e.Db(150, 0, null, null, 12, "div", [
					["class", "card m-3"]
				], null, null, null, null, null)), (l()(), e.Db(151, 0, null, null, 11, "div", [
					["class", "card-body"]
				], null, null, null, null, null)), (l()(), e.Db(152, 0, null, null, 1, "h5", [
					["class", "card-title"]
				], null, null, null, null, null)), (l()(), e.Xb(-1, null, ["Full Configuration Preview"])), (l()(), e.Db(154, 0, null, null, 1, "button", [
					["class", "btn btn-sm btn-warning"],
					["type", "button"]
				], null, [
					[null, "click"]
				], (function(l, n, u) {
					var e = !0;
					return "click" === n && (e = !1 !== l.component.showConfig() && e), e
				}), null, null)), (l()(), e.Xb(-1, null, ["Show"])), (l()(), e.Xb(-1, null, ["  "])), (l()(), e.sb(16777216, null, null, 2, null, k)), e.Cb(158, 16384, null, 0, d.m, [e.Y, e.U], {
					ngIf: [0, "ngIf"]
				}, null), e.Rb(131072, d.b, [e.h]), (l()(), e.sb(16777216, null, null, 2, null, w)), e.Cb(161, 16384, null, 0, d.m, [e.Y, e.U], {
					ngIf: [0, "ngIf"]
				}, null), e.Rb(131072, d.b, [e.h])], (function(l, n) {
					var u = n.component;
					l(n, 10, 0, "Start", "mouseenter:mouseleave"), l(n, 13, 0, "Stop", "mouseenter:mouseleave"), l(n, 16, 0, "Info", "mouseenter:mouseleave"), l(n, 19, 0, "Force Start", "mouseenter:mouseleave"), l(n, 42, 0, "radio1", "day"), l(n, 44, 0, "radio1", u.cm.period), l(n, 52, 0, "radio1", "week"), l(n, 54, 0, "radio1", u.cm.period), l(n, 63, 0, e.Yb(n, 63, 0, e.Pb(n, 64).transform(u.timeReady))), l(n, 70, 0, "day" == u.cm.period, u.cm.week), l(n, 74, 0, "1"), l(n, 75, 0, "1"), l(n, 78, 0, "2"), l(n, 79, 0, "2"), l(n, 82, 0, "3"), l(n, 83, 0, "3"), l(n, 86, 0, "4"), l(n, 87, 0, "4"), l(n, 90, 0, "5"), l(n, 91, 0, "5"), l(n, 94, 0, "6"), l(n, 95, 0, "6"), l(n, 98, 0, "0"), l(n, 99, 0, "0"), l(n, 111, 0, u.git.period), l(n, 115, 0, "10"), l(n, 116, 0, "10"), l(n, 119, 0, "20"), l(n, 120, 0, "20"), l(n, 123, 0, "30"), l(n, 124, 0, "30"), l(n, 127, 0, "40"), l(n, 128, 0, "40"), l(n, 131, 0, "50"), l(n, 132, 0, "50"), l(n, 135, 0, "60"), l(n, 136, 0, "60");
					var t = l(n, 145, 0, e.Yb(n, 143, 1, e.Pb(n, 144).transform(u.loadingForm)));
					l(n, 143, 0, "btn btn-warning btn-elevate btn-sm", t), l(n, 158, 0, e.Yb(n, 158, 0, e.Pb(n, 159).transform(u.configPreview))), l(n, 161, 0, e.Yb(n, 161, 0, e.Pb(n, 162).transform(u.configPreview)))
				}), (function(l, n) {
					var u = n.component;
					l(n, 26, 0, e.Yb(n, 26, 0, e.Pb(n, 27).transform(u.currentStatus))), l(n, 40, 0, e.Pb(n, 46).ngClassUntouched, e.Pb(n, 46).ngClassTouched, e.Pb(n, 46).ngClassPristine, e.Pb(n, 46).ngClassDirty, e.Pb(n, 46).ngClassValid, e.Pb(n, 46).ngClassInvalid, e.Pb(n, 46).ngClassPending), l(n, 50, 0, e.Pb(n, 56).ngClassUntouched, e.Pb(n, 56).ngClassTouched, e.Pb(n, 56).ngClassPristine, e.Pb(n, 56).ngClassDirty, e.Pb(n, 56).ngClassValid, e.Pb(n, 56).ngClassInvalid, e.Pb(n, 56).ngClassPending), l(n, 67, 0, e.Pb(n, 72).ngClassUntouched, e.Pb(n, 72).ngClassTouched, e.Pb(n, 72).ngClassPristine, e.Pb(n, 72).ngClassDirty, e.Pb(n, 72).ngClassValid, e.Pb(n, 72).ngClassInvalid, e.Pb(n, 72).ngClassPending), l(n, 108, 0, e.Pb(n, 113).ngClassUntouched, e.Pb(n, 113).ngClassTouched, e.Pb(n, 113).ngClassPristine, e.Pb(n, 113).ngClassDirty, e.Pb(n, 113).ngClassValid, e.Pb(n, 113).ngClassInvalid, e.Pb(n, 113).ngClassPending), l(n, 141, 0, e.Yb(n, 141, 0, e.Pb(n, 146).transform(u.loadingForm)))
				}))
			}

			function S(l) {
				return e.Zb(0, [(l()(), e.Db(0, 0, null, null, 1, "kt-cm-main", [], null, null, null, N, y)), e.Cb(1, 114688, null, 0, P, [C, D.j], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var X = e.zb("kt-cm-main", P, S, {}, {}, []),
				x = u("ZYCi");
			u.d(n, "CmSettingsModuleNgFactory", (function() {
				return I
			}));
			var I = e.Ab(r, [], (function(l) {
				return e.Mb([e.Nb(512, e.k, e.lb, [
					[8, [b.a, b.b, b.p, b.q, b.m, b.n, b.o, s.a, X]],
					[3, e.k], e.E
				]), e.Nb(4608, d.o, d.n, [e.A, [2, d.I]]), e.Nb(4608, g.A, g.A, []), e.Nb(4608, c.E, c.E, [e.k, e.w, c.yb, c.F]), e.Nb(1073742336, d.c, d.c, []), e.Nb(1073742336, g.z, g.z, []), e.Nb(1073742336, g.k, g.k, []), e.Nb(1073742336, c.c, c.c, []), e.Nb(1073742336, c.g, c.g, []), e.Nb(1073742336, c.h, c.h, []), e.Nb(1073742336, c.l, c.l, []), e.Nb(1073742336, c.n, c.n, []), e.Nb(1073742336, c.u, c.u, []), e.Nb(1073742336, c.A, c.A, []), e.Nb(1073742336, c.G, c.G, []), e.Nb(1073742336, c.K, c.K, []), e.Nb(1073742336, c.P, c.P, []), e.Nb(1073742336, c.S, c.S, []), e.Nb(1073742336, c.V, c.V, []), e.Nb(1073742336, c.ab, c.ab, []), e.Nb(1073742336, c.eb, c.eb, []), e.Nb(1073742336, c.hb, c.hb, []), e.Nb(1073742336, c.kb, c.kb, []), e.Nb(1073742336, c.H, c.H, []), e.Nb(1073742336, x.t, x.t, [
					[2, x.z],
					[2, x.q]
				]), e.Nb(1073742336, r, r, []), e.Nb(1024, x.m, (function() {
					return [
						[{
							path: "queries",
							loadChildren: t
						}, {
							path: "devices",
							loadChildren: o
						}, {
							path: "models",
							loadChildren: i
						}, {
							path: "credentials",
							loadChildren: a
						}, {
							path: "main",
							component: P
						}]
					]
				}), [])])
			}))
		}
	}
]);