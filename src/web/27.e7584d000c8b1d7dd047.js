(window.webpackJsonp = window.webpackJsonp || []).push([
	[27], {
		Ww6J: function(l, n, u) {
			"use strict";
			u.r(n);
			var t = u("CcnG"),
				e = function() {
					return function() {}
				}(),
				o = u("9AJC"),
				s = u("pMnS"),
				a = u("4GxJ"),
				i = u("Ip0R"),
				r = u("gIcY"),
				b = u("26FU"),
				c = u("P6uZ"),
				g = u("67Y/"),
				p = u("t/Na"),
				d = "api/tacacs/config/global/edit/",
				f = "api/tacacs/config/daemon/",
				m = function() {
					function l(l) {
						this.http = l
					}
					return l.prototype.get = function() {
						return this.http.get(d).pipe(Object(c.a)(), Object(g.a)((function(l) {
							return l.global_variables
						})))
					}, l.prototype.save = function(l) {
						return this.http.post(d, l).pipe(Object(c.a)(), Object(g.a)((function(l) {
							return l
						})))
					}, l.prototype.info = function() {
						return this.http.post(f, {}).pipe(Object(c.a)(), Object(g.a)((function(l) {
							return l
						})))
					}, l.prototype.start = function() {
						return this.http.post(f, {
							action: "start"
						}).pipe(Object(c.a)(), Object(g.a)((function(l) {
							return l
						})))
					}, l.prototype.stop = function() {
						return this.http.post(f, {
							action: "stop"
						}).pipe(Object(c.a)(), Object(g.a)((function(l) {
							return l
						})))
					}, l.prototype.reload = function() {
						return this.http.post(f, {
							action: "reload"
						}).pipe(Object(c.a)(), Object(g.a)((function(l) {
							return l
						})))
					}, l.ngInjectableDef = t.dc({
						factory: function() {
							return new l(t.ec(p.c))
						},
						token: l,
						providedIn: "root"
					}), l
				}(),
				v = {
					port: 49,
					max_attempts: 1,
					backoff: 1,
					separation_tag: "*",
					skip_conflicting_groups: 1,
					skip_missing_groups: 1,
					accounting: "accounting_log",
					authentication: "authentication_log",
					authorization: "authorization_log",
					changeFlag: 1,
					connection_timeout: 600,
					context_timeout: 3600,
					created_at: "",
					id: 1,
					manual: "",
					nxos_support: 1,
					syslog_ip: "",
					syslog_port: 514,
					updated_at: ""
				},
				h = function() {
					function l(l, n) {
						this.toastr = l, this.t_service = n, this.validation = new b.a({}), this.loadingForm = new b.a(!0), this.tacacsStatusMessage = new b.a(""), this.params = v, this.params_old = ""
					}
					return l.prototype.ngOnInit = function() {
						this.init()
					}, l.prototype.init = function() {
						var l = this;
						this.t_service.get().subscribe((function(n) {
							l.params = n, l.params_old = JSON.stringify(n), l.loadingForm.next(!1)
						})), this.info()
					}, l.prototype.save = function() {
						var l = this;
						if (this.loadingForm.next(!0), this.params_old == JSON.stringify(this.params)) return this.toastr.warning("No Changes Detected!"), void this.loadingForm.next(!1);
						this.t_service.save(this.params).subscribe((function(n) {
							if (n.tglobal_update) return l.toastr.success("Settings Saved"), void l.init();
							l.toastr.error("Unexpcted Error"), l.init()
						}))
					}, l.prototype.start = function() {
						var l = this;
						this.tacacsStatusMessage.next("Loading..."), this.t_service.start().subscribe((function(n) {
							l.info()
						}))
					}, l.prototype.stop = function() {
						var l = this;
						this.tacacsStatusMessage.next("Loading..."), this.t_service.stop().subscribe((function(n) {
							l.info()
						}))
					}, l.prototype.reload = function() {
						var l = this;
						this.tacacsStatusMessage.next("Loading..."), this.t_service.reload().subscribe((function(n) {
							l.info()
						}))
					}, l.prototype.info = function() {
						var l = this;
						this.tacacsStatusMessage.next("Loading..."), this.t_service.info().subscribe((function(n) {
							l.tacacsStatusMessage.next(n.tacacsStatusMessage)
						}))
					}, l
				}(),
				C = u("SZbH"),
				D = t.Bb({
					encapsulation: 0,
					styles: [
						[""]
					],
					data: {}
				});

			function P(l) {
				return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), t.Xb(1, null, ["", ""]))], null, (function(l, n) {
					l(n, 1, 0, n.context.$implicit)
				}))
			}

			function k(l) {
				return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), t.Xb(1, null, ["", ""]))], null, (function(l, n) {
					l(n, 1, 0, n.context.$implicit)
				}))
			}

			function y(l) {
				return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), t.Xb(1, null, ["", ""]))], null, (function(l, n) {
					l(n, 1, 0, n.context.$implicit)
				}))
			}

			function _(l) {
				return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), t.Xb(1, null, ["", ""]))], null, (function(l, n) {
					l(n, 1, 0, n.context.$implicit)
				}))
			}

			function x(l) {
				return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), t.Xb(1, null, ["", ""]))], null, (function(l, n) {
					l(n, 1, 0, n.context.$implicit)
				}))
			}

			function M(l) {
				return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), t.Xb(1, null, ["", ""]))], null, (function(l, n) {
					l(n, 1, 0, n.context.$implicit)
				}))
			}

			function U(l) {
				return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), t.Xb(1, null, ["", ""]))], null, (function(l, n) {
					l(n, 1, 0, n.context.$implicit)
				}))
			}

			function Y(l) {
				return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), t.Xb(1, null, ["", ""]))], null, (function(l, n) {
					l(n, 1, 0, n.context.$implicit)
				}))
			}

			function w(l) {
				return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), t.Xb(1, null, ["", ""]))], null, (function(l, n) {
					l(n, 1, 0, n.context.$implicit)
				}))
			}

			function I(l) {
				return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), t.Xb(1, null, ["", ""]))], null, (function(l, n) {
					l(n, 1, 0, n.context.$implicit)
				}))
			}

			function S(l) {
				return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), t.Xb(1, null, ["", ""]))], null, (function(l, n) {
					l(n, 1, 0, n.context.$implicit)
				}))
			}

			function X(l) {
				return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 0, "div", [
					["class", "tacgui-blockui-main"]
				], null, null, null, null, null))], null, null)
			}

			function O(l) {
				return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 3, "div", [
					["class", "tacgui-blockui-main-message"]
				], null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 0, "div", [
					["class", "kt-spinner kt-spinner--sm kt-spinner--success"]
				], null, null, null, null, null)), (l()(), t.Db(2, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Please wait..."]))], null, null)
			}

			function N(l) {
				return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 27, "div", [
					["class", "col-md-9 col-lg-7"]
				], null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 26, "div", [
					["class", "card m-3"]
				], null, null, null, null, null)), (l()(), t.Db(2, 0, null, null, 25, "div", [
					["class", "card-body"]
				], null, null, null, null, null)), (l()(), t.Db(3, 0, null, null, 1, "h4", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Start/Stop/Reload Tacacs Daemon"])), (l()(), t.Db(5, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Db(6, 0, null, null, 14, "div", [
					["class", "row"]
				], null, null, null, null, null)), (l()(), t.Db(7, 0, null, null, 13, "div", [
					["class", "col-8"]
				], null, null, null, null, null)), (l()(), t.Db(8, 0, null, null, 12, "div", [
					["aria-label", "..."],
					["class", "btn-group btn-group-sm"],
					["role", "group"]
				], null, null, null, null, null)), (l()(), t.Db(9, 16777216, null, null, 2, "button", [
					["class", "btn btn-outline-info"],
					["ngbPopover", "Start"],
					["triggers", "mouseenter:mouseleave"],
					["type", "button"]
				], null, [
					[null, "click"]
				], (function(l, n, u) {
					var t = !0;
					return "click" === n && (t = !1 !== l.component.start() && t), t
				}), null, null)), t.Cb(10, 737280, null, 0, a.N, [t.n, t.M, t.w, t.k, t.Y, a.O, t.G, i.d, t.h, t.g], {
					ngbPopover: [0, "ngbPopover"],
					triggers: [1, "triggers"]
				}, null), (l()(), t.Db(11, 0, null, null, 0, "i", [
					["class", "fa fa-play"]
				], null, null, null, null, null)), (l()(), t.Db(12, 16777216, null, null, 2, "button", [
					["class", "btn btn-outline-info"],
					["ngbPopover", "Stop"],
					["triggers", "mouseenter:mouseleave"],
					["type", "button"]
				], null, [
					[null, "click"]
				], (function(l, n, u) {
					var t = !0;
					return "click" === n && (t = !1 !== l.component.stop() && t), t
				}), null, null)), t.Cb(13, 737280, null, 0, a.N, [t.n, t.M, t.w, t.k, t.Y, a.O, t.G, i.d, t.h, t.g], {
					ngbPopover: [0, "ngbPopover"],
					triggers: [1, "triggers"]
				}, null), (l()(), t.Db(14, 0, null, null, 0, "i", [
					["class", "fa fa-stop"]
				], null, null, null, null, null)), (l()(), t.Db(15, 16777216, null, null, 2, "button", [
					["class", "btn btn-outline-info"],
					["ngbPopover", "Restart"],
					["triggers", "mouseenter:mouseleave"],
					["type", "button"]
				], null, [
					[null, "click"]
				], (function(l, n, u) {
					var t = !0;
					return "click" === n && (t = !1 !== l.component.reload() && t), t
				}), null, null)), t.Cb(16, 737280, null, 0, a.N, [t.n, t.M, t.w, t.k, t.Y, a.O, t.G, i.d, t.h, t.g], {
					ngbPopover: [0, "ngbPopover"],
					triggers: [1, "triggers"]
				}, null), (l()(), t.Db(17, 0, null, null, 0, "i", [
					["class", "fa fa-redo-alt"]
				], null, null, null, null, null)), (l()(), t.Db(18, 16777216, null, null, 2, "button", [
					["class", "btn btn-outline-info"],
					["ngbPopover", "Info"],
					["triggers", "mouseenter:mouseleave"],
					["type", "button"]
				], null, [
					[null, "click"]
				], (function(l, n, u) {
					var t = !0;
					return "click" === n && (t = !1 !== l.component.info() && t), t
				}), null, null)), t.Cb(19, 737280, null, 0, a.N, [t.n, t.M, t.w, t.k, t.Y, a.O, t.G, i.d, t.h, t.g], {
					ngbPopover: [0, "ngbPopover"],
					triggers: [1, "triggers"]
				}, null), (l()(), t.Db(20, 0, null, null, 0, "i", [
					["class", "fa fa-info"]
				], null, null, null, null, null)), (l()(), t.Db(21, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Db(22, 0, null, null, 5, "div", [
					["class", "row"]
				], null, null, null, null, null)), (l()(), t.Db(23, 0, null, null, 4, "div", [
					["class", "col-12"]
				], null, null, null, null, null)), (l()(), t.Db(24, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Current Status"])), (l()(), t.Db(26, 0, null, null, 1, "input", [
					["class", "form-control form-control-sm"],
					["disabled", ""],
					["type", "text"]
				], [
					[8, "value", 0]
				], null, null, null, null)), t.Rb(131072, i.b, [t.h]), (l()(), t.Db(28, 0, null, null, 355, "div", [
					["class", "col-md-9 col-lg-7"]
				], null, null, null, null, null)), (l()(), t.Db(29, 0, null, null, 354, "div", [
					["class", "card m-3"]
				], null, null, null, null, null)), (l()(), t.Db(30, 0, null, null, 347, "div", [
					["class", "card-body"]
				], null, null, null, null, null)), (l()(), t.Db(31, 0, null, null, 1, "h4", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Global Settings"])), (l()(), t.Db(33, 0, null, null, 21, "div", [
					["class", "row"]
				], null, null, null, null, null)), (l()(), t.Db(34, 0, null, null, 20, "div", [
					["class", "col-12"]
				], null, null, null, null, null)), (l()(), t.Db(35, 0, null, null, 19, "div", [
					["class", "form-group row"]
				], null, null, null, null, null)), (l()(), t.Db(36, 0, null, null, 1, "label", [
					["class", "col-2 col-form-label"]
				], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Listening Port"])), (l()(), t.Db(38, 0, null, null, 16, "div", [
					["class", "col-3"]
				], null, null, null, null, null)), (l()(), t.Db(39, 0, null, null, 10, "input", [
					["class", "form-control form-control-sm"],
					["type", "number"]
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
					var e = !0,
						o = l.component;
					return "input" === n && (e = !1 !== t.Pb(l, 44)._handleInput(u.target.value) && e), "blur" === n && (e = !1 !== t.Pb(l, 44).onTouched() && e), "compositionstart" === n && (e = !1 !== t.Pb(l, 44)._compositionStart() && e), "compositionend" === n && (e = !1 !== t.Pb(l, 44)._compositionEnd(u.target.value) && e), "change" === n && (e = !1 !== t.Pb(l, 45).onChange(u.target.value) && e), "input" === n && (e = !1 !== t.Pb(l, 45).onChange(u.target.value) && e), "blur" === n && (e = !1 !== t.Pb(l, 45).onTouched() && e), "ngModelChange" === n && (e = !1 !== (o.params.port = u) && e), e
				}), null, null)), t.Ub(512, null, i.D, i.E, [t.y, t.z, t.n, t.M]), t.Cb(41, 278528, null, 0, i.k, [i.D], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), t.Rb(131072, i.b, [t.h]), t.Sb(43, {
					"is-invalid": 0
				}), t.Cb(44, 16384, null, 0, r.e, [t.M, t.n, [2, r.a]], null, null), t.Cb(45, 16384, null, 0, r.u, [t.M, t.n], null, null), t.Ub(1024, null, r.n, (function(l, n) {
					return [l, n]
				}), [r.e, r.u]), t.Cb(47, 671744, null, 0, r.s, [
					[8, null],
					[8, null],
					[8, null],
					[6, r.n]
				], {
					model: [0, "model"]
				}, {
					update: "ngModelChange"
				}), t.Ub(2048, null, r.o, null, [r.s]), t.Cb(49, 16384, null, 0, r.p, [
					[4, r.o]
				], null, null), (l()(), t.Db(50, 0, null, null, 3, "div", [
					["class", "invalid-feedback"]
				], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 2, null, P)), t.Cb(52, 278528, null, 0, i.l, [t.Y, t.U, t.y], {
					ngForOf: [0, "ngForOf"]
				}, null), t.Rb(131072, i.b, [t.h]), (l()(), t.Db(54, 0, null, null, 0, "span", [
					["class", "form-text text-muted"]
				], null, null, null, null, null)), (l()(), t.Db(55, 0, null, null, 1, "h4", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Authentication"])), (l()(), t.Db(57, 0, null, null, 98, "div", [
					["class", "row"]
				], null, null, null, null, null)), (l()(), t.Db(58, 0, null, null, 24, "div", [
					["class", "col-4"]
				], null, null, null, null, null)), (l()(), t.Db(59, 0, null, null, 23, "div", [
					["class", "form-group"]
				], null, null, null, null, null)), (l()(), t.Db(60, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Authentication Max Attempt"])), (l()(), t.Db(62, 0, null, null, 15, "div", [
					["class", "input-group"]
				], null, null, null, null, null)), (l()(), t.Db(63, 0, null, null, 10, "input", [
					["class", "form-control form-control-sm"],
					["type", "number"]
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
					var e = !0,
						o = l.component;
					return "input" === n && (e = !1 !== t.Pb(l, 68)._handleInput(u.target.value) && e), "blur" === n && (e = !1 !== t.Pb(l, 68).onTouched() && e), "compositionstart" === n && (e = !1 !== t.Pb(l, 68)._compositionStart() && e), "compositionend" === n && (e = !1 !== t.Pb(l, 68)._compositionEnd(u.target.value) && e), "change" === n && (e = !1 !== t.Pb(l, 69).onChange(u.target.value) && e), "input" === n && (e = !1 !== t.Pb(l, 69).onChange(u.target.value) && e), "blur" === n && (e = !1 !== t.Pb(l, 69).onTouched() && e), "ngModelChange" === n && (e = !1 !== (o.params.max_attempts = u) && e), e
				}), null, null)), t.Ub(512, null, i.D, i.E, [t.y, t.z, t.n, t.M]), t.Cb(65, 278528, null, 0, i.k, [i.D], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), t.Rb(131072, i.b, [t.h]), t.Sb(67, {
					"is-invalid": 0
				}), t.Cb(68, 16384, null, 0, r.e, [t.M, t.n, [2, r.a]], null, null), t.Cb(69, 16384, null, 0, r.u, [t.M, t.n], null, null), t.Ub(1024, null, r.n, (function(l, n) {
					return [l, n]
				}), [r.e, r.u]), t.Cb(71, 671744, null, 0, r.s, [
					[8, null],
					[8, null],
					[8, null],
					[6, r.n]
				], {
					model: [0, "model"]
				}, {
					update: "ngModelChange"
				}), t.Ub(2048, null, r.o, null, [r.s]), t.Cb(73, 16384, null, 0, r.p, [
					[4, r.o]
				], null, null), (l()(), t.Db(74, 0, null, null, 3, "div", [
					["class", "input-group-append"]
				], null, null, null, null, null)), (l()(), t.Db(75, 16777216, null, null, 2, "button", [
					["class", "btn btn-default btn-sm btn-icon"],
					["ngbPopover", "that parameter limits the number of Password: prompts per TACACS+ session at login, default: 1"],
					["triggers", "mouseenter:mouseleave"]
				], null, null, null, null, null)), t.Cb(76, 737280, null, 0, a.N, [t.n, t.M, t.w, t.k, t.Y, a.O, t.G, i.d, t.h, t.g], {
					ngbPopover: [0, "ngbPopover"],
					triggers: [1, "triggers"]
				}, null), (l()(), t.Db(77, 0, null, null, 0, "i", [
					["class", "fa fa-info"]
				], null, null, null, null, null)), (l()(), t.Db(78, 0, null, null, 3, "div", [
					["class", "invalid-feedback"]
				], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 2, null, k)), t.Cb(80, 278528, null, 0, i.l, [t.Y, t.U, t.y], {
					ngForOf: [0, "ngForOf"]
				}, null), t.Rb(131072, i.b, [t.h]), (l()(), t.Db(82, 0, null, null, 0, "span", [
					["class", "form-text text-muted"]
				], null, null, null, null, null)), (l()(), t.Db(83, 0, null, null, 24, "div", [
					["class", "col-4"]
				], null, null, null, null, null)), (l()(), t.Db(84, 0, null, null, 23, "div", [
					["class", "form-group"]
				], null, null, null, null, null)), (l()(), t.Db(85, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Backoff Timer"])), (l()(), t.Db(87, 0, null, null, 15, "div", [
					["class", "input-group"]
				], null, null, null, null, null)), (l()(), t.Db(88, 0, null, null, 10, "input", [
					["class", "form-control form-control-sm"],
					["type", "number"]
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
					var e = !0,
						o = l.component;
					return "input" === n && (e = !1 !== t.Pb(l, 93)._handleInput(u.target.value) && e), "blur" === n && (e = !1 !== t.Pb(l, 93).onTouched() && e), "compositionstart" === n && (e = !1 !== t.Pb(l, 93)._compositionStart() && e), "compositionend" === n && (e = !1 !== t.Pb(l, 93)._compositionEnd(u.target.value) && e), "change" === n && (e = !1 !== t.Pb(l, 94).onChange(u.target.value) && e), "input" === n && (e = !1 !== t.Pb(l, 94).onChange(u.target.value) && e), "blur" === n && (e = !1 !== t.Pb(l, 94).onTouched() && e), "ngModelChange" === n && (e = !1 !== (o.params.backoff = u) && e), e
				}), null, null)), t.Ub(512, null, i.D, i.E, [t.y, t.z, t.n, t.M]), t.Cb(90, 278528, null, 0, i.k, [i.D], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), t.Rb(131072, i.b, [t.h]), t.Sb(92, {
					"is-invalid": 0
				}), t.Cb(93, 16384, null, 0, r.e, [t.M, t.n, [2, r.a]], null, null), t.Cb(94, 16384, null, 0, r.u, [t.M, t.n], null, null), t.Ub(1024, null, r.n, (function(l, n) {
					return [l, n]
				}), [r.e, r.u]), t.Cb(96, 671744, null, 0, r.s, [
					[8, null],
					[8, null],
					[8, null],
					[6, r.n]
				], {
					model: [0, "model"]
				}, {
					update: "ngModelChange"
				}), t.Ub(2048, null, r.o, null, [r.s]), t.Cb(98, 16384, null, 0, r.p, [
					[4, r.o]
				], null, null), (l()(), t.Db(99, 0, null, null, 3, "div", [
					["class", "input-group-append"]
				], null, null, null, null, null)), (l()(), t.Db(100, 16777216, null, null, 2, "button", [
					["class", "btn btn-default btn-sm btn-icon"],
					["ngbPopover", "tacacs will wait for seconds before returning a final authentication failure (password incorrect) message, default: 1 second"],
					["triggers", "mouseenter:mouseleave"]
				], null, null, null, null, null)), t.Cb(101, 737280, null, 0, a.N, [t.n, t.M, t.w, t.k, t.Y, a.O, t.G, i.d, t.h, t.g], {
					ngbPopover: [0, "ngbPopover"],
					triggers: [1, "triggers"]
				}, null), (l()(), t.Db(102, 0, null, null, 0, "i", [
					["class", "fa fa-info"]
				], null, null, null, null, null)), (l()(), t.Db(103, 0, null, null, 3, "div", [
					["class", "invalid-feedback"]
				], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 2, null, y)), t.Cb(105, 278528, null, 0, i.l, [t.Y, t.U, t.y], {
					ngForOf: [0, "ngForOf"]
				}, null), t.Rb(131072, i.b, [t.h]), (l()(), t.Db(107, 0, null, null, 0, "span", [
					["class", "form-text text-muted"]
				], null, null, null, null, null)), (l()(), t.Db(108, 0, null, null, 47, "div", [
					["class", "col-4"]
				], null, null, null, null, null)), (l()(), t.Db(109, 0, null, null, 46, "div", [
					["class", "form-group"]
				], null, null, null, null, null)), (l()(), t.Db(110, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Separation Tag"])), (l()(), t.Db(112, 0, null, null, 38, "div", [
					["class", "input-group"]
				], null, null, null, null, null)), (l()(), t.Db(113, 0, null, null, 33, "select", [
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
					var e = !0,
						o = l.component;
					return "change" === n && (e = !1 !== t.Pb(l, 118).onChange(u.target.value) && e), "blur" === n && (e = !1 !== t.Pb(l, 118).onTouched() && e), "ngModelChange" === n && (e = !1 !== (o.params.separation_tag = u) && e), e
				}), null, null)), t.Ub(512, null, i.D, i.E, [t.y, t.z, t.n, t.M]), t.Cb(115, 278528, null, 0, i.k, [i.D], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), t.Rb(131072, i.b, [t.h]), t.Sb(117, {
					"is-invalid": 0
				}), t.Cb(118, 16384, null, 0, r.x, [t.M, t.n], null, null), t.Ub(1024, null, r.n, (function(l) {
					return [l]
				}), [r.x]), t.Cb(120, 671744, null, 0, r.s, [
					[8, null],
					[8, null],
					[8, null],
					[6, r.n]
				], {
					model: [0, "model"]
				}, {
					update: "ngModelChange"
				}), t.Ub(2048, null, r.o, null, [r.s]), t.Cb(122, 16384, null, 0, r.p, [
					[4, r.o]
				], null, null), (l()(), t.Db(123, 0, null, null, 3, "option", [
					["value", "*"]
				], null, null, null, null, null)), t.Cb(124, 147456, null, 0, r.t, [t.n, t.M, [2, r.x]], {
					value: [0, "value"]
				}, null), t.Cb(125, 147456, null, 0, r.C, [t.n, t.M, [8, null]], {
					value: [0, "value"]
				}, null), (l()(), t.Xb(-1, null, ["*"])), (l()(), t.Db(127, 0, null, null, 3, "option", [
					["value", "@"]
				], null, null, null, null, null)), t.Cb(128, 147456, null, 0, r.t, [t.n, t.M, [2, r.x]], {
					value: [0, "value"]
				}, null), t.Cb(129, 147456, null, 0, r.C, [t.n, t.M, [8, null]], {
					value: [0, "value"]
				}, null), (l()(), t.Xb(-1, null, ["@"])), (l()(), t.Db(131, 0, null, null, 3, "option", [
					["value", "/"]
				], null, null, null, null, null)), t.Cb(132, 147456, null, 0, r.t, [t.n, t.M, [2, r.x]], {
					value: [0, "value"]
				}, null), t.Cb(133, 147456, null, 0, r.C, [t.n, t.M, [8, null]], {
					value: [0, "value"]
				}, null), (l()(), t.Xb(-1, null, ["/"])), (l()(), t.Db(135, 0, null, null, 3, "option", [
					["value", "%"]
				], null, null, null, null, null)), t.Cb(136, 147456, null, 0, r.t, [t.n, t.M, [2, r.x]], {
					value: [0, "value"]
				}, null), t.Cb(137, 147456, null, 0, r.C, [t.n, t.M, [8, null]], {
					value: [0, "value"]
				}, null), (l()(), t.Xb(-1, null, ["%"])), (l()(), t.Db(139, 0, null, null, 3, "option", [
					["value", "$"]
				], null, null, null, null, null)), t.Cb(140, 147456, null, 0, r.t, [t.n, t.M, [2, r.x]], {
					value: [0, "value"]
				}, null), t.Cb(141, 147456, null, 0, r.C, [t.n, t.M, [8, null]], {
					value: [0, "value"]
				}, null), (l()(), t.Xb(-1, null, ["$"])), (l()(), t.Db(143, 0, null, null, 3, "option", [
					["value", "="]
				], null, null, null, null, null)), t.Cb(144, 147456, null, 0, r.t, [t.n, t.M, [2, r.x]], {
					value: [0, "value"]
				}, null), t.Cb(145, 147456, null, 0, r.C, [t.n, t.M, [8, null]], {
					value: [0, "value"]
				}, null), (l()(), t.Xb(-1, null, ["="])), (l()(), t.Db(147, 0, null, null, 3, "div", [
					["class", "input-group-append"]
				], null, null, null, null, null)), (l()(), t.Db(148, 16777216, null, null, 2, "button", [
					["class", "btn btn-default btn-sm btn-icon"],
					["ngbPopover", "separation tag used to separate users and groups, by default *"],
					["triggers", "mouseenter:mouseleave"]
				], null, null, null, null, null)), t.Cb(149, 737280, null, 0, a.N, [t.n, t.M, t.w, t.k, t.Y, a.O, t.G, i.d, t.h, t.g], {
					ngbPopover: [0, "ngbPopover"],
					triggers: [1, "triggers"]
				}, null), (l()(), t.Db(150, 0, null, null, 0, "i", [
					["class", "fa fa-info"]
				], null, null, null, null, null)), (l()(), t.Db(151, 0, null, null, 3, "div", [
					["class", "invalid-feedback"]
				], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 2, null, _)), t.Cb(153, 278528, null, 0, i.l, [t.Y, t.U, t.y], {
					ngForOf: [0, "ngForOf"]
				}, null), t.Rb(131072, i.b, [t.h]), (l()(), t.Db(155, 0, null, null, 0, "span", [
					["class", "form-text text-muted"]
				], null, null, null, null, null)), (l()(), t.Db(156, 0, null, null, 1, "h4", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Miscellaneous"])), (l()(), t.Db(158, 0, null, null, 26, "div", [
					["class", "row"]
				], null, null, null, null, null)), (l()(), t.Db(159, 0, null, null, 12, "div", [
					["class", "col-5"]
				], null, null, null, null, null)), (l()(), t.Db(160, 0, null, null, 11, "div", [
					["class", "form-group"]
				], null, null, null, null, null)), (l()(), t.Db(161, 0, null, null, 1, "label", [
					["style", "width:100%"]
				], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Skip conflicting groups"])), (l()(), t.Db(163, 0, null, null, 8, "span", [
					["class", "kt-switch kt-switch--outline kt-switch--success"]
				], null, null, null, null, null)), (l()(), t.Db(164, 0, null, null, 7, "label", [], null, null, null, null, null)), (l()(), t.Db(165, 0, null, null, 5, "input", [
					["type", "checkbox"]
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
					var e = !0,
						o = l.component;
					return "change" === n && (e = !1 !== t.Pb(l, 166).onChange(u.target.checked) && e), "blur" === n && (e = !1 !== t.Pb(l, 166).onTouched() && e), "ngModelChange" === n && (e = !1 !== (o.params.skip_conflicting_groups = u) && e), e
				}), null, null)), t.Cb(166, 16384, null, 0, r.b, [t.M, t.n], null, null), t.Ub(1024, null, r.n, (function(l) {
					return [l]
				}), [r.b]), t.Cb(168, 671744, null, 0, r.s, [
					[8, null],
					[8, null],
					[8, null],
					[6, r.n]
				], {
					model: [0, "model"]
				}, {
					update: "ngModelChange"
				}), t.Ub(2048, null, r.o, null, [r.s]), t.Cb(170, 16384, null, 0, r.p, [
					[4, r.o]
				], null, null), (l()(), t.Db(171, 0, null, null, 0, "span", [], null, null, null, null, null)), (l()(), t.Db(172, 0, null, null, 12, "div", [
					["class", "col-5"]
				], null, null, null, null, null)), (l()(), t.Db(173, 0, null, null, 11, "div", [
					["class", "form-group"]
				], null, null, null, null, null)), (l()(), t.Db(174, 0, null, null, 1, "label", [
					["style", "width:100%"]
				], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Skip missing groups"])), (l()(), t.Db(176, 0, null, null, 8, "span", [
					["class", "kt-switch kt-switch--outline kt-switch--success"]
				], null, null, null, null, null)), (l()(), t.Db(177, 0, null, null, 7, "label", [], null, null, null, null, null)), (l()(), t.Db(178, 0, null, null, 5, "input", [
					["type", "checkbox"]
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
					var e = !0,
						o = l.component;
					return "change" === n && (e = !1 !== t.Pb(l, 179).onChange(u.target.checked) && e), "blur" === n && (e = !1 !== t.Pb(l, 179).onTouched() && e), "ngModelChange" === n && (e = !1 !== (o.params.skip_missing_groups = u) && e), e
				}), null, null)), t.Cb(179, 16384, null, 0, r.b, [t.M, t.n], null, null), t.Ub(1024, null, r.n, (function(l) {
					return [l]
				}), [r.b]), t.Cb(181, 671744, null, 0, r.s, [
					[8, null],
					[8, null],
					[8, null],
					[6, r.n]
				], {
					model: [0, "model"]
				}, {
					update: "ngModelChange"
				}), t.Ub(2048, null, r.o, null, [r.s]), t.Cb(183, 16384, null, 0, r.p, [
					[4, r.o]
				], null, null), (l()(), t.Db(184, 0, null, null, 0, "span", [], null, null, null, null, null)), (l()(), t.Db(185, 0, null, null, 1, "h4", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Limits and Timeouts"])), (l()(), t.Db(187, 0, null, null, 50, "div", [
					["class", "row"]
				], null, null, null, null, null)), (l()(), t.Db(188, 0, null, null, 24, "div", [
					["class", "col-4"]
				], null, null, null, null, null)), (l()(), t.Db(189, 0, null, null, 23, "div", [
					["class", "form-group"]
				], null, null, null, null, null)), (l()(), t.Db(190, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Connection Timeout"])), (l()(), t.Db(192, 0, null, null, 15, "div", [
					["class", "input-group"]
				], null, null, null, null, null)), (l()(), t.Db(193, 0, null, null, 10, "input", [
					["class", "form-control form-control-sm"],
					["type", "number"]
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
					var e = !0,
						o = l.component;
					return "input" === n && (e = !1 !== t.Pb(l, 198)._handleInput(u.target.value) && e), "blur" === n && (e = !1 !== t.Pb(l, 198).onTouched() && e), "compositionstart" === n && (e = !1 !== t.Pb(l, 198)._compositionStart() && e), "compositionend" === n && (e = !1 !== t.Pb(l, 198)._compositionEnd(u.target.value) && e), "change" === n && (e = !1 !== t.Pb(l, 199).onChange(u.target.value) && e), "input" === n && (e = !1 !== t.Pb(l, 199).onChange(u.target.value) && e), "blur" === n && (e = !1 !== t.Pb(l, 199).onTouched() && e), "ngModelChange" === n && (e = !1 !== (o.params.connection_timeout = u) && e), e
				}), null, null)), t.Ub(512, null, i.D, i.E, [t.y, t.z, t.n, t.M]), t.Cb(195, 278528, null, 0, i.k, [i.D], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), t.Rb(131072, i.b, [t.h]), t.Sb(197, {
					"is-invalid": 0
				}), t.Cb(198, 16384, null, 0, r.e, [t.M, t.n, [2, r.a]], null, null), t.Cb(199, 16384, null, 0, r.u, [t.M, t.n], null, null), t.Ub(1024, null, r.n, (function(l, n) {
					return [l, n]
				}), [r.e, r.u]), t.Cb(201, 671744, null, 0, r.s, [
					[8, null],
					[8, null],
					[8, null],
					[6, r.n]
				], {
					model: [0, "model"]
				}, {
					update: "ngModelChange"
				}), t.Ub(2048, null, r.o, null, [r.s]), t.Cb(203, 16384, null, 0, r.p, [
					[4, r.o]
				], null, null), (l()(), t.Db(204, 0, null, null, 3, "div", [
					["class", "input-group-append"]
				], null, null, null, null, null)), (l()(), t.Db(205, 16777216, null, null, 2, "button", [
					["class", "btn btn-default btn-sm btn-icon"],
					["ngbPopover", "terminate a connection to a NAS after an idle period of at least s seconds, default: 600 seconds"],
					["triggers", "mouseenter:mouseleave"]
				], null, null, null, null, null)), t.Cb(206, 737280, null, 0, a.N, [t.n, t.M, t.w, t.k, t.Y, a.O, t.G, i.d, t.h, t.g], {
					ngbPopover: [0, "ngbPopover"],
					triggers: [1, "triggers"]
				}, null), (l()(), t.Db(207, 0, null, null, 0, "i", [
					["class", "fa fa-info"]
				], null, null, null, null, null)), (l()(), t.Db(208, 0, null, null, 3, "div", [
					["class", "invalid-feedback"]
				], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 2, null, x)), t.Cb(210, 278528, null, 0, i.l, [t.Y, t.U, t.y], {
					ngForOf: [0, "ngForOf"]
				}, null), t.Rb(131072, i.b, [t.h]), (l()(), t.Db(212, 0, null, null, 0, "span", [
					["class", "form-text text-muted"]
				], null, null, null, null, null)), (l()(), t.Db(213, 0, null, null, 24, "div", [
					["class", "col-4"]
				], null, null, null, null, null)), (l()(), t.Db(214, 0, null, null, 23, "div", [
					["class", "form-group"]
				], null, null, null, null, null)), (l()(), t.Db(215, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Context Timeout"])), (l()(), t.Db(217, 0, null, null, 15, "div", [
					["class", "input-group"]
				], null, null, null, null, null)), (l()(), t.Db(218, 0, null, null, 10, "input", [
					["class", "form-control form-control-sm"],
					["type", "number"]
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
					var e = !0,
						o = l.component;
					return "input" === n && (e = !1 !== t.Pb(l, 223)._handleInput(u.target.value) && e), "blur" === n && (e = !1 !== t.Pb(l, 223).onTouched() && e), "compositionstart" === n && (e = !1 !== t.Pb(l, 223)._compositionStart() && e), "compositionend" === n && (e = !1 !== t.Pb(l, 223)._compositionEnd(u.target.value) && e), "change" === n && (e = !1 !== t.Pb(l, 224).onChange(u.target.value) && e), "input" === n && (e = !1 !== t.Pb(l, 224).onChange(u.target.value) && e), "blur" === n && (e = !1 !== t.Pb(l, 224).onTouched() && e), "ngModelChange" === n && (e = !1 !== (o.params.context_timeout = u) && e), e
				}), null, null)), t.Ub(512, null, i.D, i.E, [t.y, t.z, t.n, t.M]), t.Cb(220, 278528, null, 0, i.k, [i.D], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), t.Rb(131072, i.b, [t.h]), t.Sb(222, {
					"is-invalid": 0
				}), t.Cb(223, 16384, null, 0, r.e, [t.M, t.n, [2, r.a]], null, null), t.Cb(224, 16384, null, 0, r.u, [t.M, t.n], null, null), t.Ub(1024, null, r.n, (function(l, n) {
					return [l, n]
				}), [r.e, r.u]), t.Cb(226, 671744, null, 0, r.s, [
					[8, null],
					[8, null],
					[8, null],
					[6, r.n]
				], {
					model: [0, "model"]
				}, {
					update: "ngModelChange"
				}), t.Ub(2048, null, r.o, null, [r.s]), t.Cb(228, 16384, null, 0, r.p, [
					[4, r.o]
				], null, null), (l()(), t.Db(229, 0, null, null, 3, "div", [
					["class", "input-group-append"]
				], null, null, null, null, null)), (l()(), t.Db(230, 16777216, null, null, 2, "button", [
					["class", "btn btn-default btn-sm btn-icon"],
					["ngbPopover", "clears context cache entries after s seconds of inactivity, default: 3600 seconds"],
					["triggers", "mouseenter:mouseleave"]
				], null, null, null, null, null)), t.Cb(231, 737280, null, 0, a.N, [t.n, t.M, t.w, t.k, t.Y, a.O, t.G, i.d, t.h, t.g], {
					ngbPopover: [0, "ngbPopover"],
					triggers: [1, "triggers"]
				}, null), (l()(), t.Db(232, 0, null, null, 0, "i", [
					["class", "fa fa-info"]
				], null, null, null, null, null)), (l()(), t.Db(233, 0, null, null, 3, "div", [
					["class", "invalid-feedback"]
				], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 2, null, M)), t.Cb(235, 278528, null, 0, i.l, [t.Y, t.U, t.y], {
					ngForOf: [0, "ngForOf"]
				}, null), t.Rb(131072, i.b, [t.h]), (l()(), t.Db(237, 0, null, null, 0, "span", [
					["class", "form-text text-muted"]
				], null, null, null, null, null)), (l()(), t.Db(238, 0, null, null, 1, "h4", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Syslog Settings"])), (l()(), t.Db(240, 0, null, null, 44, "div", [
					["class", "row"]
				], null, null, null, null, null)), (l()(), t.Db(241, 0, null, null, 19, "div", [
					["class", "col-5"]
				], null, null, null, null, null)), (l()(), t.Db(242, 0, null, null, 18, "div", [
					["class", "form-group"]
				], null, null, null, null, null)), (l()(), t.Db(243, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Syslog server"])), (l()(), t.Db(245, 0, null, null, 10, "div", [
					["class", "input-group"]
				], null, null, null, null, null)), (l()(), t.Db(246, 0, null, null, 9, "input", [
					["class", "form-control form-control-sm"],
					["type", "text"]
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
					[null, "compositionend"]
				], (function(l, n, u) {
					var e = !0,
						o = l.component;
					return "input" === n && (e = !1 !== t.Pb(l, 251)._handleInput(u.target.value) && e), "blur" === n && (e = !1 !== t.Pb(l, 251).onTouched() && e), "compositionstart" === n && (e = !1 !== t.Pb(l, 251)._compositionStart() && e), "compositionend" === n && (e = !1 !== t.Pb(l, 251)._compositionEnd(u.target.value) && e), "ngModelChange" === n && (e = !1 !== (o.params.syslog_ip = u) && e), e
				}), null, null)), t.Ub(512, null, i.D, i.E, [t.y, t.z, t.n, t.M]), t.Cb(248, 278528, null, 0, i.k, [i.D], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), t.Rb(131072, i.b, [t.h]), t.Sb(250, {
					"is-invalid": 0
				}), t.Cb(251, 16384, null, 0, r.e, [t.M, t.n, [2, r.a]], null, null), t.Ub(1024, null, r.n, (function(l) {
					return [l]
				}), [r.e]), t.Cb(253, 671744, null, 0, r.s, [
					[8, null],
					[8, null],
					[8, null],
					[6, r.n]
				], {
					model: [0, "model"]
				}, {
					update: "ngModelChange"
				}), t.Ub(2048, null, r.o, null, [r.s]), t.Cb(255, 16384, null, 0, r.p, [
					[4, r.o]
				], null, null), (l()(), t.Db(256, 0, null, null, 3, "div", [
					["class", "invalid-feedback"]
				], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 2, null, U)), t.Cb(258, 278528, null, 0, i.l, [t.Y, t.U, t.y], {
					ngForOf: [0, "ngForOf"]
				}, null), t.Rb(131072, i.b, [t.h]), (l()(), t.Db(260, 0, null, null, 0, "span", [
					["class", "form-text text-muted"]
				], null, null, null, null, null)), (l()(), t.Db(261, 0, null, null, 23, "div", [
					["class", "col-4"]
				], null, null, null, null, null)), (l()(), t.Db(262, 0, null, null, 22, "div", [
					["class", "form-group"]
				], null, null, null, null, null)), (l()(), t.Db(263, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Port"])), (l()(), t.Db(265, 0, null, null, 14, "div", [
					["class", "input-group"]
				], null, null, null, null, null)), (l()(), t.Db(266, 0, null, null, 9, "input", [
					["class", "form-control form-control-sm"],
					["type", "text"]
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
					[null, "compositionend"]
				], (function(l, n, u) {
					var e = !0,
						o = l.component;
					return "input" === n && (e = !1 !== t.Pb(l, 271)._handleInput(u.target.value) && e), "blur" === n && (e = !1 !== t.Pb(l, 271).onTouched() && e), "compositionstart" === n && (e = !1 !== t.Pb(l, 271)._compositionStart() && e), "compositionend" === n && (e = !1 !== t.Pb(l, 271)._compositionEnd(u.target.value) && e), "ngModelChange" === n && (e = !1 !== (o.params.syslog_port = u) && e), e
				}), null, null)), t.Ub(512, null, i.D, i.E, [t.y, t.z, t.n, t.M]), t.Cb(268, 278528, null, 0, i.k, [i.D], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), t.Rb(131072, i.b, [t.h]), t.Sb(270, {
					"is-invalid": 0
				}), t.Cb(271, 16384, null, 0, r.e, [t.M, t.n, [2, r.a]], null, null), t.Ub(1024, null, r.n, (function(l) {
					return [l]
				}), [r.e]), t.Cb(273, 671744, null, 0, r.s, [
					[8, null],
					[8, null],
					[8, null],
					[6, r.n]
				], {
					model: [0, "model"]
				}, {
					update: "ngModelChange"
				}), t.Ub(2048, null, r.o, null, [r.s]), t.Cb(275, 16384, null, 0, r.p, [
					[4, r.o]
				], null, null), (l()(), t.Db(276, 0, null, null, 3, "div", [
					["class", "input-group-append"]
				], null, null, null, null, null)), (l()(), t.Db(277, 16777216, null, null, 2, "button", [
					["class", "btn btn-default btn-sm btn-icon"],
					["ngbPopover", "udp port of syslog server, default 514"],
					["triggers", "mouseenter:mouseleave"]
				], null, null, null, null, null)), t.Cb(278, 737280, null, 0, a.N, [t.n, t.M, t.w, t.k, t.Y, a.O, t.G, i.d, t.h, t.g], {
					ngbPopover: [0, "ngbPopover"],
					triggers: [1, "triggers"]
				}, null), (l()(), t.Db(279, 0, null, null, 0, "i", [
					["class", "fa fa-info"]
				], null, null, null, null, null)), (l()(), t.Db(280, 0, null, null, 3, "div", [
					["class", "invalid-feedback"]
				], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 2, null, Y)), t.Cb(282, 278528, null, 0, i.l, [t.Y, t.U, t.y], {
					ngForOf: [0, "ngForOf"]
				}, null), t.Rb(131072, i.b, [t.h]), (l()(), t.Db(284, 0, null, null, 0, "span", [
					["class", "form-text text-muted"]
				], null, null, null, null, null)), (l()(), t.Db(285, 0, null, null, 1, "h4", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Reports Settings"])), (l()(), t.Db(287, 0, null, null, 1, "span", [
					["class", "text-danger"]
				], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["be careful with those settings! it influences on log parser script!"])), (l()(), t.Db(289, 0, null, null, 72, "div", [
					["class", "row"]
				], null, null, null, null, null)), (l()(), t.Db(290, 0, null, null, 23, "div", [
					["class", "col-4"]
				], null, null, null, null, null)), (l()(), t.Db(291, 0, null, null, 22, "div", [
					["class", "form-group"]
				], null, null, null, null, null)), (l()(), t.Db(292, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Authentication"])), (l()(), t.Db(294, 0, null, null, 14, "div", [
					["class", "input-group"]
				], null, null, null, null, null)), (l()(), t.Db(295, 0, null, null, 9, "input", [
					["class", "form-control form-control-sm"],
					["type", "text"]
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
					[null, "compositionend"]
				], (function(l, n, u) {
					var e = !0,
						o = l.component;
					return "input" === n && (e = !1 !== t.Pb(l, 300)._handleInput(u.target.value) && e), "blur" === n && (e = !1 !== t.Pb(l, 300).onTouched() && e), "compositionstart" === n && (e = !1 !== t.Pb(l, 300)._compositionStart() && e), "compositionend" === n && (e = !1 !== t.Pb(l, 300)._compositionEnd(u.target.value) && e), "ngModelChange" === n && (e = !1 !== (o.params.authentication = u) && e), e
				}), null, null)), t.Ub(512, null, i.D, i.E, [t.y, t.z, t.n, t.M]), t.Cb(297, 278528, null, 0, i.k, [i.D], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), t.Rb(131072, i.b, [t.h]), t.Sb(299, {
					"is-invalid": 0
				}), t.Cb(300, 16384, null, 0, r.e, [t.M, t.n, [2, r.a]], null, null), t.Ub(1024, null, r.n, (function(l) {
					return [l]
				}), [r.e]), t.Cb(302, 671744, null, 0, r.s, [
					[8, null],
					[8, null],
					[8, null],
					[6, r.n]
				], {
					model: [0, "model"]
				}, {
					update: "ngModelChange"
				}), t.Ub(2048, null, r.o, null, [r.s]), t.Cb(304, 16384, null, 0, r.p, [
					[4, r.o]
				], null, null), (l()(), t.Db(305, 0, null, null, 3, "div", [
					["class", "input-group-append"]
				], null, null, null, null, null)), (l()(), t.Db(306, 16777216, null, null, 2, "button", [
					["class", "btn btn-default btn-sm btn-icon"],
					["ngbPopover", "here you can set path to file on the server, command or syslog server ip and port, by default it used for Log Parser script"],
					["triggers", "mouseenter:mouseleave"]
				], null, null, null, null, null)), t.Cb(307, 737280, null, 0, a.N, [t.n, t.M, t.w, t.k, t.Y, a.O, t.G, i.d, t.h, t.g], {
					ngbPopover: [0, "ngbPopover"],
					triggers: [1, "triggers"]
				}, null), (l()(), t.Db(308, 0, null, null, 0, "i", [
					["class", "fa fa-info"]
				], null, null, null, null, null)), (l()(), t.Db(309, 0, null, null, 3, "div", [
					["class", "invalid-feedback"]
				], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 2, null, w)), t.Cb(311, 278528, null, 0, i.l, [t.Y, t.U, t.y], {
					ngForOf: [0, "ngForOf"]
				}, null), t.Rb(131072, i.b, [t.h]), (l()(), t.Db(313, 0, null, null, 0, "span", [
					["class", "form-text text-muted"]
				], null, null, null, null, null)), (l()(), t.Db(314, 0, null, null, 23, "div", [
					["class", "col-4"]
				], null, null, null, null, null)), (l()(), t.Db(315, 0, null, null, 22, "div", [
					["class", "form-group"]
				], null, null, null, null, null)), (l()(), t.Db(316, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Authorization"])), (l()(), t.Db(318, 0, null, null, 14, "div", [
					["class", "input-group"]
				], null, null, null, null, null)), (l()(), t.Db(319, 0, null, null, 9, "input", [
					["class", "form-control form-control-sm"],
					["type", "text"]
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
					[null, "compositionend"]
				], (function(l, n, u) {
					var e = !0,
						o = l.component;
					return "input" === n && (e = !1 !== t.Pb(l, 324)._handleInput(u.target.value) && e), "blur" === n && (e = !1 !== t.Pb(l, 324).onTouched() && e), "compositionstart" === n && (e = !1 !== t.Pb(l, 324)._compositionStart() && e), "compositionend" === n && (e = !1 !== t.Pb(l, 324)._compositionEnd(u.target.value) && e), "ngModelChange" === n && (e = !1 !== (o.params.authorization = u) && e), e
				}), null, null)), t.Ub(512, null, i.D, i.E, [t.y, t.z, t.n, t.M]), t.Cb(321, 278528, null, 0, i.k, [i.D], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), t.Rb(131072, i.b, [t.h]), t.Sb(323, {
					"is-invalid": 0
				}), t.Cb(324, 16384, null, 0, r.e, [t.M, t.n, [2, r.a]], null, null), t.Ub(1024, null, r.n, (function(l) {
					return [l]
				}), [r.e]), t.Cb(326, 671744, null, 0, r.s, [
					[8, null],
					[8, null],
					[8, null],
					[6, r.n]
				], {
					model: [0, "model"]
				}, {
					update: "ngModelChange"
				}), t.Ub(2048, null, r.o, null, [r.s]), t.Cb(328, 16384, null, 0, r.p, [
					[4, r.o]
				], null, null), (l()(), t.Db(329, 0, null, null, 3, "div", [
					["class", "input-group-append"]
				], null, null, null, null, null)), (l()(), t.Db(330, 16777216, null, null, 2, "button", [
					["class", "btn btn-default btn-sm btn-icon"],
					["ngbPopover", "here you can set path to file on the server, command or syslog server ip and port, by default it used for Log Parser script"],
					["triggers", "mouseenter:mouseleave"]
				], null, null, null, null, null)), t.Cb(331, 737280, null, 0, a.N, [t.n, t.M, t.w, t.k, t.Y, a.O, t.G, i.d, t.h, t.g], {
					ngbPopover: [0, "ngbPopover"],
					triggers: [1, "triggers"]
				}, null), (l()(), t.Db(332, 0, null, null, 0, "i", [
					["class", "fa fa-info"]
				], null, null, null, null, null)), (l()(), t.Db(333, 0, null, null, 3, "div", [
					["class", "invalid-feedback"]
				], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 2, null, I)), t.Cb(335, 278528, null, 0, i.l, [t.Y, t.U, t.y], {
					ngForOf: [0, "ngForOf"]
				}, null), t.Rb(131072, i.b, [t.h]), (l()(), t.Db(337, 0, null, null, 0, "span", [
					["class", "form-text text-muted"]
				], null, null, null, null, null)), (l()(), t.Db(338, 0, null, null, 23, "div", [
					["class", "col-4"]
				], null, null, null, null, null)), (l()(), t.Db(339, 0, null, null, 22, "div", [
					["class", "form-group"]
				], null, null, null, null, null)), (l()(), t.Db(340, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Accounting"])), (l()(), t.Db(342, 0, null, null, 14, "div", [
					["class", "input-group"]
				], null, null, null, null, null)), (l()(), t.Db(343, 0, null, null, 9, "input", [
					["class", "form-control form-control-sm"],
					["type", "text"]
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
					[null, "compositionend"]
				], (function(l, n, u) {
					var e = !0,
						o = l.component;
					return "input" === n && (e = !1 !== t.Pb(l, 348)._handleInput(u.target.value) && e), "blur" === n && (e = !1 !== t.Pb(l, 348).onTouched() && e), "compositionstart" === n && (e = !1 !== t.Pb(l, 348)._compositionStart() && e), "compositionend" === n && (e = !1 !== t.Pb(l, 348)._compositionEnd(u.target.value) && e), "ngModelChange" === n && (e = !1 !== (o.params.accounting = u) && e), e
				}), null, null)), t.Ub(512, null, i.D, i.E, [t.y, t.z, t.n, t.M]), t.Cb(345, 278528, null, 0, i.k, [i.D], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), t.Rb(131072, i.b, [t.h]), t.Sb(347, {
					"is-invalid": 0
				}), t.Cb(348, 16384, null, 0, r.e, [t.M, t.n, [2, r.a]], null, null), t.Ub(1024, null, r.n, (function(l) {
					return [l]
				}), [r.e]), t.Cb(350, 671744, null, 0, r.s, [
					[8, null],
					[8, null],
					[8, null],
					[6, r.n]
				], {
					model: [0, "model"]
				}, {
					update: "ngModelChange"
				}), t.Ub(2048, null, r.o, null, [r.s]), t.Cb(352, 16384, null, 0, r.p, [
					[4, r.o]
				], null, null), (l()(), t.Db(353, 0, null, null, 3, "div", [
					["class", "input-group-append"]
				], null, null, null, null, null)), (l()(), t.Db(354, 16777216, null, null, 2, "button", [
					["class", "btn btn-default btn-sm btn-icon"],
					["ngbPopover", "here you can set path to file on the server, command or syslog server ip and port, by default it used for Log Parser script"],
					["triggers", "mouseenter:mouseleave"]
				], null, null, null, null, null)), t.Cb(355, 737280, null, 0, a.N, [t.n, t.M, t.w, t.k, t.Y, a.O, t.G, i.d, t.h, t.g], {
					ngbPopover: [0, "ngbPopover"],
					triggers: [1, "triggers"]
				}, null), (l()(), t.Db(356, 0, null, null, 0, "i", [
					["class", "fa fa-info"]
				], null, null, null, null, null)), (l()(), t.Db(357, 0, null, null, 3, "div", [
					["class", "invalid-feedback"]
				], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 2, null, S)), t.Cb(359, 278528, null, 0, i.l, [t.Y, t.U, t.y], {
					ngForOf: [0, "ngForOf"]
				}, null), t.Rb(131072, i.b, [t.h]), (l()(), t.Db(361, 0, null, null, 0, "span", [
					["class", "form-text text-muted"]
				], null, null, null, null, null)), (l()(), t.Db(362, 0, null, null, 4, "h4", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Manual Configuration "])), (l()(), t.Db(364, 0, null, null, 2, "small", [], null, null, null, null, null)), (l()(), t.Db(365, 16777216, null, null, 1, "i", [
					["class", "fa fa-info"],
					["ngbPopover", "that configuration will be added to the top of global configuration, after port listening settings"],
					["triggers", "mouseenter:mouseleave"]
				], null, null, null, null, null)), t.Cb(366, 737280, null, 0, a.N, [t.n, t.M, t.w, t.k, t.Y, a.O, t.G, i.d, t.h, t.g], {
					ngbPopover: [0, "ngbPopover"],
					triggers: [1, "triggers"]
				}, null), (l()(), t.Db(367, 0, null, null, 1, "span", [
					["class", "text-danger"]
				], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["be careful with those settings! by default it influences on log parser script!"])), (l()(), t.Db(369, 0, null, null, 8, "div", [
					["class", "row"]
				], null, null, null, null, null)), (l()(), t.Db(370, 0, null, null, 7, "div", [
					["class", "col-12"]
				], null, null, null, null, null)), (l()(), t.Db(371, 0, null, null, 6, "div", [
					["class", "form-group manual"]
				], null, null, null, null, null)), (l()(), t.Db(372, 0, null, null, 5, "textarea", [
					["class", "form-control form-control-sm"],
					["placeholder", "Manual configuration"],
					["rows", "9"]
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
					[null, "compositionend"]
				], (function(l, n, u) {
					var e = !0,
						o = l.component;
					return "input" === n && (e = !1 !== t.Pb(l, 373)._handleInput(u.target.value) && e), "blur" === n && (e = !1 !== t.Pb(l, 373).onTouched() && e), "compositionstart" === n && (e = !1 !== t.Pb(l, 373)._compositionStart() && e), "compositionend" === n && (e = !1 !== t.Pb(l, 373)._compositionEnd(u.target.value) && e), "ngModelChange" === n && (e = !1 !== (o.params.manual = u) && e), e
				}), null, null)), t.Cb(373, 16384, null, 0, r.e, [t.M, t.n, [2, r.a]], null, null), t.Ub(1024, null, r.n, (function(l) {
					return [l]
				}), [r.e]), t.Cb(375, 671744, null, 0, r.s, [
					[8, null],
					[8, null],
					[8, null],
					[6, r.n]
				], {
					model: [0, "model"]
				}, {
					update: "ngModelChange"
				}), t.Ub(2048, null, r.o, null, [r.s]), t.Cb(377, 16384, null, 0, r.p, [
					[4, r.o]
				], null, null), (l()(), t.sb(16777216, null, null, 2, null, X)), t.Cb(379, 16384, null, 0, i.m, [t.Y, t.U], {
					ngIf: [0, "ngIf"]
				}, null), t.Rb(131072, i.b, [t.h]), (l()(), t.sb(16777216, null, null, 2, null, O)), t.Cb(382, 16384, null, 0, i.m, [t.Y, t.U], {
					ngIf: [0, "ngIf"]
				}, null), t.Rb(131072, i.b, [t.h]), (l()(), t.Db(384, 0, null, null, 8, "div", [
					["class", "col-xs-11 offset-sm-1 offset-md-1 offset-lg-1 mb-3"]
				], null, null, null, null, null)), (l()(), t.Db(385, 0, null, null, 6, "button", [
					["class", "btn btn-warning btn-elevate btn-sm"]
				], [
					[8, "disabled", 0]
				], [
					[null, "click"]
				], (function(l, n, u) {
					var t = !0;
					return "click" === n && (t = !1 !== l.component.save() && t), t
				}), null, null)), t.Ub(512, null, i.D, i.E, [t.y, t.z, t.n, t.M]), t.Cb(387, 278528, null, 0, i.k, [i.D], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), t.Rb(131072, i.b, [t.h]), t.Sb(389, {
					"kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light": 0
				}), t.Rb(131072, i.b, [t.h]), (l()(), t.Xb(-1, null, ["Save"])), (l()(), t.Xb(-1, null, ["  "]))], (function(l, n) {
					var u = n.component;
					l(n, 10, 0, "Start", "mouseenter:mouseleave"), l(n, 13, 0, "Stop", "mouseenter:mouseleave"), l(n, 16, 0, "Restart", "mouseenter:mouseleave"), l(n, 19, 0, "Info", "mouseenter:mouseleave");
					var e, o, s = l(n, 43, 0, null == (e = t.Yb(n, 41, 1, t.Pb(n, 42).transform(u.validation))) ? null : e.port);
					l(n, 41, 0, "form-control form-control-sm", s), l(n, 47, 0, u.params.port), l(n, 52, 0, null == (o = t.Yb(n, 52, 0, t.Pb(n, 53).transform(u.validation))) ? null : o.port);
					var a, i, r = l(n, 67, 0, null == (a = t.Yb(n, 65, 1, t.Pb(n, 66).transform(u.validation))) ? null : a.max_attempts);
					l(n, 65, 0, "form-control form-control-sm", r), l(n, 71, 0, u.params.max_attempts), l(n, 76, 0, "that parameter limits the number of Password: prompts per TACACS+ session at login, default: 1", "mouseenter:mouseleave"), l(n, 80, 0, null == (i = t.Yb(n, 80, 0, t.Pb(n, 81).transform(u.validation))) ? null : i.max_attempts);
					var b, c, g = l(n, 92, 0, null == (b = t.Yb(n, 90, 1, t.Pb(n, 91).transform(u.validation))) ? null : b.backoff);
					l(n, 90, 0, "form-control form-control-sm", g), l(n, 96, 0, u.params.backoff), l(n, 101, 0, "tacacs will wait for seconds before returning a final authentication failure (password incorrect) message, default: 1 second", "mouseenter:mouseleave"), l(n, 105, 0, null == (c = t.Yb(n, 105, 0, t.Pb(n, 106).transform(u.validation))) ? null : c.backoff);
					var p, d, f = l(n, 117, 0, null == (p = t.Yb(n, 115, 1, t.Pb(n, 116).transform(u.validation))) ? null : p.separation_tag);
					l(n, 115, 0, "form-control form-control-sm", f), l(n, 120, 0, u.params.separation_tag), l(n, 124, 0, "*"), l(n, 125, 0, "*"), l(n, 128, 0, "@"), l(n, 129, 0, "@"), l(n, 132, 0, "/"), l(n, 133, 0, "/"), l(n, 136, 0, "%"), l(n, 137, 0, "%"), l(n, 140, 0, "$"), l(n, 141, 0, "$"), l(n, 144, 0, "="), l(n, 145, 0, "="), l(n, 149, 0, "separation tag used to separate users and groups, by default *", "mouseenter:mouseleave"), l(n, 153, 0, null == (d = t.Yb(n, 153, 0, t.Pb(n, 154).transform(u.validation))) ? null : d.separation_tag), l(n, 168, 0, u.params.skip_conflicting_groups), l(n, 181, 0, u.params.skip_missing_groups);
					var m, v, h = l(n, 197, 0, null == (m = t.Yb(n, 195, 1, t.Pb(n, 196).transform(u.validation))) ? null : m.connection_timeout);
					l(n, 195, 0, "form-control form-control-sm", h), l(n, 201, 0, u.params.connection_timeout), l(n, 206, 0, "terminate a connection to a NAS after an idle period of at least s seconds, default: 600 seconds", "mouseenter:mouseleave"), l(n, 210, 0, null == (v = t.Yb(n, 210, 0, t.Pb(n, 211).transform(u.validation))) ? null : v.connection_timeout);
					var C, D, P = l(n, 222, 0, null == (C = t.Yb(n, 220, 1, t.Pb(n, 221).transform(u.validation))) ? null : C.context_timeout);
					l(n, 220, 0, "form-control form-control-sm", P), l(n, 226, 0, u.params.context_timeout), l(n, 231, 0, "clears context cache entries after s seconds of inactivity, default: 3600 seconds", "mouseenter:mouseleave"), l(n, 235, 0, null == (D = t.Yb(n, 235, 0, t.Pb(n, 236).transform(u.validation))) ? null : D.context_timeout);
					var k, y, _ = l(n, 250, 0, null == (k = t.Yb(n, 248, 1, t.Pb(n, 249).transform(u.validation))) ? null : k.syslog_ip);
					l(n, 248, 0, "form-control form-control-sm", _), l(n, 253, 0, u.params.syslog_ip), l(n, 258, 0, null == (y = t.Yb(n, 258, 0, t.Pb(n, 259).transform(u.validation))) ? null : y.syslog_ip);
					var x, M, U = l(n, 270, 0, null == (x = t.Yb(n, 268, 1, t.Pb(n, 269).transform(u.validation))) ? null : x.syslog_port);
					l(n, 268, 0, "form-control form-control-sm", U), l(n, 273, 0, u.params.syslog_port), l(n, 278, 0, "udp port of syslog server, default 514", "mouseenter:mouseleave"), l(n, 282, 0, null == (M = t.Yb(n, 282, 0, t.Pb(n, 283).transform(u.validation))) ? null : M.syslog_port);
					var Y, w, I = l(n, 299, 0, null == (Y = t.Yb(n, 297, 1, t.Pb(n, 298).transform(u.validation))) ? null : Y.authentication);
					l(n, 297, 0, "form-control form-control-sm", I), l(n, 302, 0, u.params.authentication), l(n, 307, 0, "here you can set path to file on the server, command or syslog server ip and port, by default it used for Log Parser script", "mouseenter:mouseleave"), l(n, 311, 0, null == (w = t.Yb(n, 311, 0, t.Pb(n, 312).transform(u.validation))) ? null : w.authentication);
					var S, X, O = l(n, 323, 0, null == (S = t.Yb(n, 321, 1, t.Pb(n, 322).transform(u.validation))) ? null : S.authorization);
					l(n, 321, 0, "form-control form-control-sm", O), l(n, 326, 0, u.params.authorization), l(n, 331, 0, "here you can set path to file on the server, command or syslog server ip and port, by default it used for Log Parser script", "mouseenter:mouseleave"), l(n, 335, 0, null == (X = t.Yb(n, 335, 0, t.Pb(n, 336).transform(u.validation))) ? null : X.authorization);
					var N, T, R = l(n, 347, 0, null == (N = t.Yb(n, 345, 1, t.Pb(n, 346).transform(u.validation))) ? null : N.accounting);
					l(n, 345, 0, "form-control form-control-sm", R), l(n, 350, 0, u.params.accounting), l(n, 355, 0, "here you can set path to file on the server, command or syslog server ip and port, by default it used for Log Parser script", "mouseenter:mouseleave"), l(n, 359, 0, null == (T = t.Yb(n, 359, 0, t.Pb(n, 360).transform(u.validation))) ? null : T.accounting), l(n, 366, 0, "that configuration will be added to the top of global configuration, after port listening settings", "mouseenter:mouseleave"), l(n, 375, 0, u.params.manual), l(n, 379, 0, t.Yb(n, 379, 0, t.Pb(n, 380).transform(u.loadingForm))), l(n, 382, 0, t.Yb(n, 382, 0, t.Pb(n, 383).transform(u.loadingForm)));
					var $ = l(n, 389, 0, t.Yb(n, 387, 1, t.Pb(n, 388).transform(u.loadingForm)));
					l(n, 387, 0, "btn btn-warning btn-elevate btn-sm", $)
				}), (function(l, n) {
					var u = n.component;
					l(n, 26, 0, t.Yb(n, 26, 0, t.Pb(n, 27).transform(u.tacacsStatusMessage))), l(n, 39, 0, t.Pb(n, 49).ngClassUntouched, t.Pb(n, 49).ngClassTouched, t.Pb(n, 49).ngClassPristine, t.Pb(n, 49).ngClassDirty, t.Pb(n, 49).ngClassValid, t.Pb(n, 49).ngClassInvalid, t.Pb(n, 49).ngClassPending), l(n, 63, 0, t.Pb(n, 73).ngClassUntouched, t.Pb(n, 73).ngClassTouched, t.Pb(n, 73).ngClassPristine, t.Pb(n, 73).ngClassDirty, t.Pb(n, 73).ngClassValid, t.Pb(n, 73).ngClassInvalid, t.Pb(n, 73).ngClassPending), l(n, 88, 0, t.Pb(n, 98).ngClassUntouched, t.Pb(n, 98).ngClassTouched, t.Pb(n, 98).ngClassPristine, t.Pb(n, 98).ngClassDirty, t.Pb(n, 98).ngClassValid, t.Pb(n, 98).ngClassInvalid, t.Pb(n, 98).ngClassPending), l(n, 113, 0, t.Pb(n, 122).ngClassUntouched, t.Pb(n, 122).ngClassTouched, t.Pb(n, 122).ngClassPristine, t.Pb(n, 122).ngClassDirty, t.Pb(n, 122).ngClassValid, t.Pb(n, 122).ngClassInvalid, t.Pb(n, 122).ngClassPending), l(n, 165, 0, t.Pb(n, 170).ngClassUntouched, t.Pb(n, 170).ngClassTouched, t.Pb(n, 170).ngClassPristine, t.Pb(n, 170).ngClassDirty, t.Pb(n, 170).ngClassValid, t.Pb(n, 170).ngClassInvalid, t.Pb(n, 170).ngClassPending), l(n, 178, 0, t.Pb(n, 183).ngClassUntouched, t.Pb(n, 183).ngClassTouched, t.Pb(n, 183).ngClassPristine, t.Pb(n, 183).ngClassDirty, t.Pb(n, 183).ngClassValid, t.Pb(n, 183).ngClassInvalid, t.Pb(n, 183).ngClassPending), l(n, 193, 0, t.Pb(n, 203).ngClassUntouched, t.Pb(n, 203).ngClassTouched, t.Pb(n, 203).ngClassPristine, t.Pb(n, 203).ngClassDirty, t.Pb(n, 203).ngClassValid, t.Pb(n, 203).ngClassInvalid, t.Pb(n, 203).ngClassPending), l(n, 218, 0, t.Pb(n, 228).ngClassUntouched, t.Pb(n, 228).ngClassTouched, t.Pb(n, 228).ngClassPristine, t.Pb(n, 228).ngClassDirty, t.Pb(n, 228).ngClassValid, t.Pb(n, 228).ngClassInvalid, t.Pb(n, 228).ngClassPending), l(n, 246, 0, t.Pb(n, 255).ngClassUntouched, t.Pb(n, 255).ngClassTouched, t.Pb(n, 255).ngClassPristine, t.Pb(n, 255).ngClassDirty, t.Pb(n, 255).ngClassValid, t.Pb(n, 255).ngClassInvalid, t.Pb(n, 255).ngClassPending), l(n, 266, 0, t.Pb(n, 275).ngClassUntouched, t.Pb(n, 275).ngClassTouched, t.Pb(n, 275).ngClassPristine, t.Pb(n, 275).ngClassDirty, t.Pb(n, 275).ngClassValid, t.Pb(n, 275).ngClassInvalid, t.Pb(n, 275).ngClassPending), l(n, 295, 0, t.Pb(n, 304).ngClassUntouched, t.Pb(n, 304).ngClassTouched, t.Pb(n, 304).ngClassPristine, t.Pb(n, 304).ngClassDirty, t.Pb(n, 304).ngClassValid, t.Pb(n, 304).ngClassInvalid, t.Pb(n, 304).ngClassPending), l(n, 319, 0, t.Pb(n, 328).ngClassUntouched, t.Pb(n, 328).ngClassTouched, t.Pb(n, 328).ngClassPristine, t.Pb(n, 328).ngClassDirty, t.Pb(n, 328).ngClassValid, t.Pb(n, 328).ngClassInvalid, t.Pb(n, 328).ngClassPending), l(n, 343, 0, t.Pb(n, 352).ngClassUntouched, t.Pb(n, 352).ngClassTouched, t.Pb(n, 352).ngClassPristine, t.Pb(n, 352).ngClassDirty, t.Pb(n, 352).ngClassValid, t.Pb(n, 352).ngClassInvalid, t.Pb(n, 352).ngClassPending), l(n, 372, 0, t.Pb(n, 377).ngClassUntouched, t.Pb(n, 377).ngClassTouched, t.Pb(n, 377).ngClassPristine, t.Pb(n, 377).ngClassDirty, t.Pb(n, 377).ngClassValid, t.Pb(n, 377).ngClassInvalid, t.Pb(n, 377).ngClassPending), l(n, 385, 0, t.Yb(n, 385, 0, t.Pb(n, 390).transform(u.loadingForm)))
				}))
			}

			function T(l) {
				return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "kt-global", [], null, null, null, N, D)), t.Cb(1, 114688, null, 0, h, [C.j, m], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var R = t.zb("kt-global", h, T, {}, {}, []),
				$ = u("POeU"),
				F = u("ZYjt"),
				Z = u("Wucu"),
				z = u("qAlS"),
				E = u("Fzqc"),
				j = function() {
					function l(l) {
						this.http = l
					}
					return l.prototype.get = function() {
						var l = (new p.j).set("html", "true");
						return this.http.get("api/tacacs/config/generate/", {
							params: l
						}).pipe(Object(c.a)(), Object(g.a)((function(l) {
							return l
						})))
					}, l.prototype.test_c = function() {
						var l = (new p.j).set("contentType", "json").set("confTest", "on");
						return this.http.get("api/tacacs/config/apply/", {
							params: l
						}).pipe(Object(c.a)(), Object(g.a)((function(l) {
							return l
						})))
					}, l.prototype.apply_c = function(l) {
						void 0 === l && (l = !1);
						var n = (new p.j).set("contentType", "json").set("confTest", "on").set("confSave", "yes").set("doBackup", l ? "1" : "0");
						return this.http.get("api/tacacs/config/apply/", {
							params: n
						}).pipe(Object(c.a)(), Object(g.a)((function(l) {
							return l
						})))
					}, l.prototype.apply_slave = function(l) {
						return this.http.post("api/tacacs/config/apply/slave/", l).pipe(Object(c.a)(), Object(g.a)((function(l) {
							return l
						})))
					}, l.ngInjectableDef = t.dc({
						factory: function() {
							return new l(t.ec(p.c))
						},
						token: l,
						providedIn: "root"
					}), l
				}(),
				L = function() {
					function l(l) {
						this.service = l, this.ts = new b.a(""), this.aps = new b.a(""), this.test_result = new b.a(""), this.apply_result = new b.a(""), this.loading_ = new b.a(!0), this._fullConfig = new b.a([]), this.backup = !0, this.slaveList = [], this.haConfig = {
							api: "",
							cfg: "",
							status: 0
						}
					}
					return l.prototype.ngOnInit = function() {
						var l = this;
						this.service.get().subscribe((function(n) {
							console.log(n), l._fullConfig.next([].concat(n.spawnd, n.tac_general, n.tac_mavis, n.tac_acl, n.tac_devGrps, n.tac_devices, n.tac_usrGrps, n.tac_users, ["}##END GLOBAL CONFIGURATION"])), l.slaveList = n.ha.slaves, l.haConfig = n.ha.config ? n.ha.config : {}, l.haConfig.api = n.info.version.APIVER, l.loading_.next(!1)
						}))
					}, l.prototype.test = function() {
						var l = this;
						this.loading_.next(!0), this.clearStatus(), this.service.test_c().subscribe((function(n) {
							l.testReturn(n.confTest), l.loading_.next(!1)
						}))
					}, l.prototype.testReturn = function(l) {
						this.ts.next(l.error ? "e" : "s"), this.test_result.next(l.message)
					}, l.prototype.apply = function() {
						var l = this;
						this.clearStatus(), this.loading_.next(!0), this.service.test_c().subscribe((function(n) {
							l.testReturn(n.confTest), n.confTest.error ? l.loading_.next(!1) : (l.slavesLoading(), l.service.apply_c(l.backup).subscribe((function(n) {
								l.loading_.next(!1), console.log(n), l.applyReturn(n.applyStatus), l.haConfig.cfg = n.cfg, l.slaveList = n.slaves
							})))
						}))
					}, l.prototype.applyReturn = function(l) {
						this.aps.next(l.error ? "e" : "s"), this.apply_result.next(l.message)
					}, l.prototype.clearStatus = function() {
						this.ts.next(""), this.aps.next(""), this.test_result.next("Loading..."), this.apply_result.next("")
					}, l.prototype.slavesLoading = function(l) {
						void 0 === l && (l = !0);
						for (var n = 0; n < this.slaveList.length; n++) this.slaveList[n].loading = !0, delete this.slaveList[n].resp
					}, l
				}(),
				A = t.Bb({
					encapsulation: 2,
					styles: [
						[".configuration-container{background-color:#fff;position:relative;height:530px}.tac_config{background-color:#1e1e2d;color:#fff;padding:0;border:0;border-radius:0}.tac_config div.line:nth-child(odd){background-color:#1a1a27}.tac_config>div.line>p{display:inline-block;padding-right:15px}.tac_config>div.line{height:19px;width:100%;white-space:pre;padding-left:50px}.tac_config>div.line[line]::before{content:attr(line);min-width:50px;text-align:center;padding-left:5px;margin-right:7px;border-right:1px solid;display:inline-table;position:absolute;left:-9px}span.tac-comment{color:#9093ac}span.tac-attr{color:#ffb822}span.tac-param{color:#0abb87}span.tac-object{color:#fd397a}span.tac-val{color:#5d78ff}"]
					],
					data: {}
				});

			function G(l) {
				return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "small", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Slave List"]))], null, null)
			}

			function V(l) {
				return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 0, "div", [
					["class", "kt-spinner kt-spinner--sm kt-spinner--success"]
				], null, null, null, null, null))], null, null)
			}

			function H(l) {
				return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 0, "i", [
					["class", "fa fa-check-circle text-success"]
				], null, null, null, null, null))], null, null)
			}

			function J(l) {
				return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 0, "i", [
					["class", "fa fa-stop-circle text-danger"]
				], null, null, null, null, null))], null, null)
			}

			function B(l) {
				return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 0, "div", [
					["class", "kt-spinner kt-spinner--sm kt-spinner--success"]
				], null, null, null, null, null))], null, null)
			}

			function q(l) {
				return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 2, null, null, null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 1, null, B)), t.Cb(2, 16384, null, 0, i.m, [t.Y, t.U], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.sb(0, null, null, 0))], (function(l, n) {
					l(n, 2, 0, n.parent.context.$implicit.loading)
				}), null)
			}

			function W(l) {
				return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 2, null, null, null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 1, "span", [
					["class", "kt-badge kt-badge--warning kt-badge--inline"]
				], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["not applied yet"]))], null, null)
			}

			function K(l) {
				return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 2, null, null, null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 1, "span", [
					["class", "kt-badge kt-badge--success kt-badge--inline"]
				], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["synced"]))], null, null)
			}

			function Q(l) {
				return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 2, null, null, null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 1, "span", [
					["class", "kt-badge kt-badge--danger kt-badge--inline"]
				], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["not synced"]))], null, null)
			}

			function ll(l) {
				return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 0, "div", [
					["class", "kt-spinner kt-spinner--sm kt-spinner--success"]
				], null, null, null, null, null))], null, null)
			}

			function nl(l) {
				return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 2, null, null, null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 1, null, ll)), t.Cb(2, 16384, null, 0, i.m, [t.Y, t.U], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.sb(0, null, null, 0))], (function(l, n) {
					l(n, 2, 0, n.parent.context.$implicit.loading)
				}), null)
			}

			function ul(l) {
				return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 2, null, null, null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 1, "span", [
					["class", "kt-badge kt-badge--success kt-badge--inline"]
				], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["ready"]))], null, null)
			}

			function tl(l) {
				return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 2, null, null, null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 1, "span", [
					["class", "kt-badge kt-badge--danger kt-badge--inline"]
				], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["out of sync"]))], null, null)
			}

			function el(l) {
				return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 3, "tr", [], null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 2, "td", [
					["colspan", "99"]
				], null, null, null, null, null)), (l()(), t.Db(2, 0, null, null, 1, "pre", [], [
					[8, "className", 0]
				], null, null, null, null)), (l()(), t.Xb(3, null, ["", "\n"]))], null, (function(l, n) {
					l(n, 2, 0, t.Hb(1, "", !1 === n.parent.context.$implicit.resp.apply.error ? "text-success" : "text-danger", "")), l(n, 3, 0, n.parent.context.$implicit.resp.apply.message)
				}))
			}

			function ol(l) {
				return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 32, null, null, null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 29, "tr", [], null, null, null, null, null)), (l()(), t.Db(2, 0, null, null, 2, "td", [
					["style", "vertical-align: middle;"]
				], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 1, null, V)), t.Cb(4, 16384, null, 0, i.m, [t.Y, t.U], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.Db(5, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), t.Xb(6, null, ["", ""])), (l()(), t.Db(7, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.Xb(8, null, ["", " "])), (l()(), t.sb(16777216, null, null, 1, null, H)), t.Cb(10, 16384, null, 0, i.m, [t.Y, t.U], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.sb(16777216, null, null, 1, null, J)), t.Cb(12, 16384, null, 0, i.m, [t.Y, t.U], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.Db(13, 0, null, null, 8, "td", [
					["style", "vertical-align: middle;"]
				], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 1, null, q)), t.Cb(15, 16384, null, 0, i.m, [t.Y, t.U], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.sb(16777216, null, null, 1, null, W)), t.Cb(17, 16384, null, 0, i.m, [t.Y, t.U], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.sb(16777216, null, null, 1, null, K)), t.Cb(19, 16384, null, 0, i.m, [t.Y, t.U], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.sb(16777216, null, null, 1, null, Q)), t.Cb(21, 16384, null, 0, i.m, [t.Y, t.U], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.Db(22, 0, null, null, 6, "td", [
					["style", "vertical-align: middle;"]
				], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 1, null, nl)), t.Cb(24, 16384, null, 0, i.m, [t.Y, t.U], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.sb(16777216, null, null, 1, null, ul)), t.Cb(26, 16384, null, 0, i.m, [t.Y, t.U], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.sb(16777216, null, null, 1, null, tl)), t.Cb(28, 16384, null, 0, i.m, [t.Y, t.U], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.Db(29, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), t.Xb(30, null, ["", ""])), (l()(), t.sb(16777216, null, null, 1, null, el)), t.Cb(32, 16384, null, 0, i.m, [t.Y, t.U], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.sb(0, null, null, 0))], (function(l, n) {
					var u = n.component;
					l(n, 4, 0, n.context.$implicit.loading), l(n, 10, 0, !n.context.$implicit.loading && n.context.$implicit.api == u.haConfig.api), l(n, 12, 0, !n.context.$implicit.loading && n.context.$implicit.api != u.haConfig.api), l(n, 15, 0, n.context.$implicit.loading), l(n, 17, 0, !n.context.$implicit.loading && ("" == n.context.$implicit.cfg || null == n.context.$implicit.cfg)), l(n, 19, 0, !n.context.$implicit.loading && n.context.$implicit.cfg == u.haConfig.cfg), l(n, 21, 0, !n.context.$implicit.loading && "" != n.context.$implicit.cfg && null != n.context.$implicit.cfg && n.context.$implicit.cfg != u.haConfig.cfg), l(n, 24, 0, n.context.$implicit.loading), l(n, 26, 0, !n.context.$implicit.loading && 99 == n.context.$implicit.status), l(n, 28, 0, !n.context.$implicit.loading && 99 != n.context.$implicit.status), l(n, 32, 0, null == n.context.$implicit ? null : null == n.context.$implicit.resp ? null : null == n.context.$implicit.resp.apply ? null : n.context.$implicit.resp.apply.message)
				}), (function(l, n) {
					l(n, 6, 0, n.context.$implicit.ip), l(n, 8, 0, n.context.$implicit.api), l(n, 30, 0, n.context.$implicit.date)
				}))
			}

			function sl(l) {
				return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 23, "div", [
					["class", "card m-3"]
				], null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 22, "div", [
					["class", "card-body"]
				], null, null, null, null, null)), (l()(), t.Db(2, 0, null, null, 21, "div", [
					["class", "row"]
				], null, null, null, null, null)), (l()(), t.Db(3, 0, null, null, 3, "h5", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["High Availability "])), (l()(), t.sb(16777216, null, null, 1, null, G)), t.Cb(6, 16384, null, 0, i.m, [t.Y, t.U], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.Db(7, 0, null, null, 16, "table", [
					["class", "table"]
				], null, null, null, null, null)), (l()(), t.Db(8, 0, null, null, 12, "thead", [], null, null, null, null, null)), (l()(), t.Db(9, 0, null, null, 11, "tr", [], null, null, null, null, null)), (l()(), t.Db(10, 0, null, null, 0, "th", [], null, null, null, null, null)), (l()(), t.Db(11, 0, null, null, 1, "th", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["IP"])), (l()(), t.Db(13, 0, null, null, 1, "th", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["API"])), (l()(), t.Db(15, 0, null, null, 1, "th", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Config"])), (l()(), t.Db(17, 0, null, null, 1, "th", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Status"])), (l()(), t.Db(19, 0, null, null, 1, "th", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Date"])), (l()(), t.Db(21, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 1, null, ol)), t.Cb(23, 278528, null, 0, i.l, [t.Y, t.U, t.y], {
					ngForOf: [0, "ngForOf"]
				}, null)], (function(l, n) {
					var u = n.component;
					l(n, 6, 0, u.slaveList.length > 0), l(n, 23, 0, u.slaveList)
				}), null)
			}

			function al(l) {
				return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "div", [
					["class", ""]
				], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Loading..."]))], null, null)
			}

			function il(l) {
				return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 3, null, null, null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 2, "div", [
					["class", "line"]
				], [
					[1, "line", 0]
				], null, null, null, null)), (l()(), t.Db(2, 0, null, null, 1, "p", [], [
					[8, "innerHTML", 1]
				], null, null, null, null)), t.Tb(3, 2)], null, (function(l, n) {
					l(n, 1, 0, n.context.index + 1);
					var u = t.Yb(n, 2, 0, l(n, 3, 0, t.Pb(n.parent, 0), n.context.$implicit, "html"));
					l(n, 2, 0, u)
				}))
			}

			function rl(l) {
				return t.Zb(0, [t.Rb(0, $.a, [F.b]), (l()(), t.Db(1, 0, null, null, 66, "div", [
					["class", "card m-3"]
				], null, null, null, null, null)), (l()(), t.Db(2, 0, null, null, 65, "div", [
					["class", "card-body"]
				], null, null, null, null, null)), (l()(), t.Db(3, 0, null, null, 64, "div", [
					["class", "row"]
				], null, null, null, null, null)), (l()(), t.Db(4, 0, null, null, 23, "div", [
					["class", "col-3 text-center"]
				], null, null, null, null, null)), (l()(), t.Db(5, 0, null, null, 4, "button", [
					["style", "min-width: 100px;"]
				], [
					[8, "className", 0],
					[8, "disabled", 0]
				], [
					[null, "click"]
				], (function(l, n, u) {
					var t = !0;
					return "click" === n && (t = !1 !== l.component.test() && t), t
				}), null, null)), t.Rb(131072, i.b, [t.h]), t.Rb(131072, i.b, [t.h]), (l()(), t.Db(8, 0, null, null, 0, "i", [
					["class", "fa fa-cogs"]
				], null, null, null, null, null)), (l()(), t.Xb(-1, null, [" Test "])), (l()(), t.Db(10, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Db(11, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Db(12, 0, null, null, 4, "button", [
					["style", "min-width: 100px;"]
				], [
					[8, "className", 0],
					[8, "disabled", 0]
				], [
					[null, "click"]
				], (function(l, n, u) {
					var t = !0;
					return "click" === n && (t = !1 !== l.component.apply() && t), t
				}), null, null)), t.Rb(131072, i.b, [t.h]), t.Rb(131072, i.b, [t.h]), (l()(), t.Db(15, 0, null, null, 0, "i", [
					["class", "fa fa-save"]
				], null, null, null, null, null)), (l()(), t.Xb(-1, null, [" Apply "])), (l()(), t.Db(17, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Db(18, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Db(19, 0, null, null, 8, "label", [
					["class", "kt-checkbox kt-checkbox--bold kt-checkbox--brand"]
				], null, null, null, null, null)), (l()(), t.Db(20, 0, null, null, 5, "input", [
					["type", "checkbox"]
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
					var e = !0,
						o = l.component;
					return "change" === n && (e = !1 !== t.Pb(l, 21).onChange(u.target.checked) && e), "blur" === n && (e = !1 !== t.Pb(l, 21).onTouched() && e), "ngModelChange" === n && (e = !1 !== (o.backup = u) && e), e
				}), null, null)), t.Cb(21, 16384, null, 0, r.b, [t.M, t.n], null, null), t.Ub(1024, null, r.n, (function(l) {
					return [l]
				}), [r.b]), t.Cb(23, 671744, null, 0, r.s, [
					[8, null],
					[8, null],
					[8, null],
					[6, r.n]
				], {
					model: [0, "model"]
				}, {
					update: "ngModelChange"
				}), t.Ub(2048, null, r.o, null, [r.s]), t.Cb(25, 16384, null, 0, r.p, [
					[4, r.o]
				], null, null), (l()(), t.Xb(-1, null, [" Make backup after applying "])), (l()(), t.Db(27, 0, null, null, 0, "span", [], null, null, null, null, null)), (l()(), t.Db(28, 0, null, null, 39, "div", [
					["class", "col-9"]
				], null, null, null, null, null)), (l()(), t.Db(29, 0, null, null, 38, "div", [
					["class", "kt-timeline-v2"]
				], null, null, null, null, null)), (l()(), t.Db(30, 0, null, null, 37, "div", [
					["class", "kt-timeline-v2__items  kt-padding-top-25 kt-padding-bottom-30"]
				], null, null, null, null, null)), (l()(), t.Db(31, 0, null, null, 4, "div", [
					["class", "kt-timeline-v2__item"]
				], null, null, null, null, null)), (l()(), t.Db(32, 0, null, null, 1, "div", [
					["class", "kt-timeline-v2__item-cricle"]
				], null, null, null, null, null)), (l()(), t.Db(33, 0, null, null, 0, "i", [
					["class", "fa fa-genderless kt-font-success"]
				], null, null, null, null, null)), (l()(), t.Db(34, 0, null, null, 1, "div", [
					["class", "kt-timeline-v2__item-text  kt-padding-top-5"]
				], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["No Changes Detected"])), (l()(), t.Db(36, 0, null, null, 13, "div", [
					["class", "kt-timeline-v2__item"]
				], null, null, null, null, null)), (l()(), t.Db(37, 0, null, null, 7, "div", [
					["class", "kt-timeline-v2__item-cricle"]
				], null, null, null, null, null)), (l()(), t.Db(38, 0, null, null, 6, "i", [
					["class", "fa fa-genderless"]
				], null, null, null, null, null)), t.Ub(512, null, i.D, i.E, [t.y, t.z, t.n, t.M]), t.Cb(40, 278528, null, 0, i.k, [i.D], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), t.Rb(131072, i.b, [t.h]), t.Rb(131072, i.b, [t.h]), t.Rb(131072, i.b, [t.h]), t.Sb(44, {
					"kt-font-success": 0,
					"kt-font-danger": 1,
					"kt-font-default": 2
				}), (l()(), t.Db(45, 0, null, null, 4, "div", [
					["class", "kt-timeline-v2__item-text  kt-padding-top-5"]
				], null, null, null, null, null)), (l()(), t.Db(46, 0, null, null, 1, "h4", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Test Configuration"])), (l()(), t.Xb(48, null, [" ", " "])), t.Rb(131072, i.b, [t.h]), (l()(), t.Db(50, 0, null, null, 13, "div", [
					["class", "kt-timeline-v2__item"]
				], null, null, null, null, null)), (l()(), t.Db(51, 0, null, null, 7, "div", [
					["class", "kt-timeline-v2__item-cricle"]
				], null, null, null, null, null)), (l()(), t.Db(52, 0, null, null, 6, "i", [
					["class", "fa fa-genderless"]
				], null, null, null, null, null)), t.Ub(512, null, i.D, i.E, [t.y, t.z, t.n, t.M]), t.Cb(54, 278528, null, 0, i.k, [i.D], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), t.Rb(131072, i.b, [t.h]), t.Rb(131072, i.b, [t.h]), t.Rb(131072, i.b, [t.h]), t.Sb(58, {
					"kt-font-success": 0,
					"kt-font-danger": 1,
					"kt-font-default": 2
				}), (l()(), t.Db(59, 0, null, null, 4, "div", [
					["class", "kt-timeline-v2__item-text  kt-padding-top-5"]
				], null, null, null, null, null)), (l()(), t.Db(60, 0, null, null, 1, "h4", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Apply Configuration"])), (l()(), t.Xb(62, null, [" ", " "])), t.Rb(131072, i.b, [t.h]), (l()(), t.Db(64, 0, null, null, 3, "div", [
					["class", "kt-timeline-v2__item"]
				], null, null, null, null, null)), (l()(), t.Db(65, 0, null, null, 1, "div", [
					["class", "kt-timeline-v2__item-cricle"]
				], null, null, null, null, null)), (l()(), t.Db(66, 0, null, null, 0, "i", [
					["class", "fa fa-genderless"]
				], null, null, null, null, null)), (l()(), t.Db(67, 0, null, null, 0, "div", [
					["class", "kt-timeline-v2__item-text  kt-padding-top-5"]
				], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 1, null, sl)), t.Cb(69, 16384, null, 0, i.m, [t.Y, t.U], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.Db(70, 0, null, null, 11, "cdk-virtual-scroll-viewport", [
					["class", "configuration-container m-3 cdk-virtual-scroll-viewport"],
					["itemSize", "19"]
				], [
					[2, "cdk-virtual-scroll-orientation-horizontal", null],
					[2, "cdk-virtual-scroll-orientation-vertical", null]
				], null, null, Z.b, Z.a)), t.Ub(6144, null, z.b, null, [z.d]), t.Cb(72, 540672, null, 0, z.a, [], {
					itemSize: [0, "itemSize"]
				}, null), t.Ub(1024, null, z.i, z.k, [z.a]), t.Cb(74, 245760, null, 0, z.d, [t.n, t.h, t.G, [2, z.i],
					[2, E.b], z.f
				], null, null), (l()(), t.sb(16777216, null, 0, 2, null, al)), t.Cb(76, 16384, null, 0, i.m, [t.Y, t.U], {
					ngIf: [0, "ngIf"]
				}, null), t.Rb(131072, i.b, [t.h]), (l()(), t.Db(78, 0, null, 0, 3, "div", [
					["class", "tac_config"]
				], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 2, null, il)), t.Cb(80, 409600, null, 0, z.c, [t.Y, t.U, t.y, [1, z.d], t.G], {
					cdkVirtualForOf: [0, "cdkVirtualForOf"]
				}, null), t.Rb(131072, i.b, [t.h])], (function(l, n) {
					var u = n.component;
					l(n, 23, 0, u.backup);
					var e = l(n, 44, 0, "s" == t.Yb(n, 40, 1, t.Pb(n, 41).transform(u.ts)), "e" == t.Yb(n, 40, 1, t.Pb(n, 42).transform(u.ts)), "" == t.Yb(n, 40, 1, t.Pb(n, 43).transform(u.ts)));
					l(n, 40, 0, "fa fa-genderless", e);
					var o = l(n, 58, 0, "s" == t.Yb(n, 54, 1, t.Pb(n, 55).transform(u.aps)), "e" == t.Yb(n, 54, 1, t.Pb(n, 56).transform(u.aps)), "" == t.Yb(n, 54, 1, t.Pb(n, 57).transform(u.aps)));
					l(n, 54, 0, "fa fa-genderless", o), l(n, 69, 0, u.slaveList.length), l(n, 72, 0, "19"), l(n, 74, 0), l(n, 76, 0, 0 == t.Yb(n, 76, 0, t.Pb(n, 77).transform(u._fullConfig)).length), l(n, 80, 0, t.Yb(n, 80, 0, t.Pb(n, 81).transform(u._fullConfig)))
				}), (function(l, n) {
					var u = n.component;
					l(n, 5, 0, t.Hb(1, "btn btn-success btn-taller\n            ", t.Yb(n, 5, 0, t.Pb(n, 6).transform(u.loading_)) ? "kt-spinner kt-spinner--right kt-spinner--lg kt-spinner--light" : "", ""), t.Yb(n, 5, 1, t.Pb(n, 7).transform(u.loading_))), l(n, 12, 0, t.Hb(1, "btn btn-warning btn-taller\n            ", t.Yb(n, 12, 0, t.Pb(n, 13).transform(u.loading_)) ? "kt-spinner kt-spinner--right kt-spinner--lg kt-spinner--light" : "", ""), t.Yb(n, 12, 1, t.Pb(n, 14).transform(u.loading_))), l(n, 20, 0, t.Pb(n, 25).ngClassUntouched, t.Pb(n, 25).ngClassTouched, t.Pb(n, 25).ngClassPristine, t.Pb(n, 25).ngClassDirty, t.Pb(n, 25).ngClassValid, t.Pb(n, 25).ngClassInvalid, t.Pb(n, 25).ngClassPending), l(n, 48, 0, t.Yb(n, 48, 0, t.Pb(n, 49).transform(u.test_result))), l(n, 62, 0, t.Yb(n, 62, 0, t.Pb(n, 63).transform(u.apply_result))), l(n, 70, 0, "horizontal" === t.Pb(n, 74).orientation, "horizontal" !== t.Pb(n, 74).orientation)
				}))
			}

			function bl(l) {
				return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "kt-apply", [], null, null, null, rl, A)), t.Cb(1, 114688, null, 0, L, [j], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var cl = t.zb("kt-apply", L, bl, {}, {}, []),
				gl = u("18CH"),
				pl = u("dWZg"),
				dl = u("ZYCi");
			u.d(n, "ConfigModuleNgFactory", (function() {
				return fl
			}));
			var fl = t.Ab(e, [], (function(l) {
				return t.Mb([t.Nb(512, t.k, t.lb, [
					[8, [o.a, o.b, o.p, o.q, o.m, o.n, o.o, s.a, R, cl]],
					[3, t.k], t.E
				]), t.Nb(4608, i.o, i.n, [t.A, [2, i.I]]), t.Nb(4608, r.A, r.A, []), t.Nb(4608, a.E, a.E, [t.k, t.w, a.yb, a.F]), t.Nb(1073742336, i.c, i.c, []), t.Nb(1073742336, r.z, r.z, []), t.Nb(1073742336, r.k, r.k, []), t.Nb(1073742336, a.c, a.c, []), t.Nb(1073742336, a.g, a.g, []), t.Nb(1073742336, a.h, a.h, []), t.Nb(1073742336, a.l, a.l, []), t.Nb(1073742336, a.n, a.n, []), t.Nb(1073742336, a.u, a.u, []), t.Nb(1073742336, a.A, a.A, []), t.Nb(1073742336, a.G, a.G, []), t.Nb(1073742336, a.K, a.K, []), t.Nb(1073742336, a.P, a.P, []), t.Nb(1073742336, a.S, a.S, []), t.Nb(1073742336, a.V, a.V, []), t.Nb(1073742336, a.ab, a.ab, []), t.Nb(1073742336, a.eb, a.eb, []), t.Nb(1073742336, a.hb, a.hb, []), t.Nb(1073742336, a.kb, a.kb, []), t.Nb(1073742336, a.H, a.H, []), t.Nb(1073742336, gl.a, gl.a, []), t.Nb(1073742336, E.a, E.a, []), t.Nb(1073742336, pl.b, pl.b, []), t.Nb(1073742336, z.g, z.g, []), t.Nb(1073742336, z.e, z.e, []), t.Nb(1073742336, dl.t, dl.t, [
					[2, dl.z],
					[2, dl.q]
				]), t.Nb(1073742336, e, e, []), t.Nb(1024, dl.m, (function() {
					return [
						[{
							path: "global",
							component: h
						}, {
							path: "apply",
							component: L
						}]
					]
				}), [])])
			}))
		}
	}
]);