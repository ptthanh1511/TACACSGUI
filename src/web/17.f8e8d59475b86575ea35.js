(window.webpackJsonp = window.webpackJsonp || []).push([
	[17], {
		kIFp: function(l, n, u) {
			"use strict";
			u.r(n);
			var t = u("CcnG"),
				a = function() {
					return function() {}
				}(),
				e = u("pMnS"),
				s = u("9AJC"),
				b = u("Ip0R"),
				r = u("i+/5"),
				c = u("kl+L"),
				i = u("A2Ik"),
				o = u("ZYCi"),
				d = u("26FU"),
				h = u("P6uZ"),
				g = u("67Y/"),
				p = u("t/Na"),
				f = function() {
					function l(l) {
						this.http = l
					}
					return l.prototype.get = function() {
						return this.http.get("api/tacacs/reports/general/", {}).pipe(Object(h.a)(), Object(g.a)((function(l) {
							return l
						})))
					}, l.prototype.checkUpdate = function() {
						return this.http.post("api/update/", {}).pipe(Object(h.a)(), Object(g.a)((function(l) {
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
				D = u("9fK0"),
				v = function() {
					function l(l, n) {
						this.service = l, this.service_ = n, this.widgets = {
							api: {
								text: new d.a("...")
							},
							tac_plus: {
								text: new d.a("...")
							},
							users: {
								text: new d.a("..."),
								url: "/tacacs/users"
							},
							devices: {
								text: new d.a("..."),
								url: "/tacacs/devices"
							},
							bad_authe: {
								text: new d.a("..."),
								url: "/reports/authe"
							},
							authe: {
								text: new d.a("..."),
								url: "/reports/authe"
							},
							autho: {
								text: new d.a("..."),
								url: "/reports/autho"
							},
							acc: {
								text: new d.a("..."),
								url: "/reports/acc"
							},
							ha: {
								text: new d.a("..."),
								url: "/"
							},
							tac_status: {
								text: new d.a("..."),
								url: "/tacacs/config/global"
							}
						}, this.ha = {
							config: {},
							slaves: [],
							master: [],
							db: "",
							api: ""
						}
					}
					return l.prototype.ngOnInit = function() {
						var l = this;
						this.service.get().subscribe((function(n) {
							n.widgets[0].update_ && l.checkUpdate(), l.widgets.users.text.next(n.widgets[0].users), l.widgets.devices.text.next(n.widgets[0].devices), l.widgets.api.text.next(n.widgets[0].APIVER), l.widgets.tac_plus.text.next(n.widgets[0].TACVER), l.widgets.bad_authe.text.next(n.widgets[0].authe_err), l.widgets.authe.text.next(n.widgets[0].authe), l.widgets.autho.text.next(n.widgets[0].autho), l.widgets.acc.text.next(n.widgets[0].acc), l.widgets.ha.text.next(n.widgets[0].ha), l.widgets.tac_status.text.next(n.widgets[0].tac_status), l.ha = n.ha
						}))
					}, l.prototype.checkUpdate = function() {
						var l = this;
						this.service.checkUpdate().subscribe((function(n) {
							n.output.client_version !== n.output.last_version.version && (l.service_.update = !0)
						}))
					}, l
				}(),
				k = t.Bb({
					encapsulation: 0,
					styles: [
						[""]
					],
					data: {}
				});

			function C(l) {
				return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "span", [
					["class", "kt-badge kt-badge--success kt-badge--inline"]
				], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["master"]))], null, null)
			}

			function w(l) {
				return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "span", [
					["class", "kt-badge kt-badge--warning kt-badge--inline"]
				], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["slave"]))], null, null)
			}

			function m(l) {
				return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "span", [
					["class", "kt-badge"]
				], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["none"]))], null, null)
			}

			function y(l) {
				return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 2, null, null, null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 1, "span", [
					["class", "kt-badge kt-badge--danger kt-badge--inline"]
				], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["out of sync"]))], null, null)
			}

			function x(l) {
				return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 2, null, null, null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 1, "span", [
					["class", "kt-badge kt-badge--success kt-badge--inline"]
				], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["synced"]))], null, null)
			}

			function X(l) {
				return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 2, null, null, null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 1, "span", [
					["class", "kt-badge kt-badge--danger kt-badge--inline"]
				], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["out of sync"]))], null, null)
			}

			function _(l) {
				return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 2, null, null, null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 1, "span", [
					["class", "kt-badge kt-badge--success kt-badge--inline"]
				], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["sync"]))], null, null)
			}

			function P(l) {
				return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 2, null, null, null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 1, "span", [
					["class", "kt-badge kt-badge--danger kt-badge--inline"]
				], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["out of sync"]))], null, null)
			}

			function L(l) {
				return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 2, null, null, null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 1, "span", [
					["class", "kt-badge kt-badge--success kt-badge--inline"]
				], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["ready"]))], null, null)
			}

			function I(l) {
				return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 22, null, null, null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 21, "tr", [], null, null, null, null, null)), (l()(), t.Db(2, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), t.Xb(3, null, ["", ""])), (l()(), t.Db(4, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), t.Xb(5, null, ["", ""])), (l()(), t.Db(6, 0, null, null, 4, "td", [], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 1, null, y)), t.Cb(8, 16384, null, 0, b.m, [t.Y, t.U], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.sb(16777216, null, null, 1, null, x)), t.Cb(10, 16384, null, 0, b.m, [t.Y, t.U], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.Db(11, 0, null, null, 4, "td", [], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 1, null, X)), t.Cb(13, 16384, null, 0, b.m, [t.Y, t.U], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.sb(16777216, null, null, 1, null, _)), t.Cb(15, 16384, null, 0, b.m, [t.Y, t.U], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.Db(16, 0, null, null, 4, "td", [], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 1, null, P)), t.Cb(18, 16384, null, 0, b.m, [t.Y, t.U], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.sb(16777216, null, null, 1, null, L)), t.Cb(20, 16384, null, 0, b.m, [t.Y, t.U], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.Db(21, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), t.Xb(22, null, ["", ""]))], (function(l, n) {
					var u = n.component;
					l(n, 8, 0, n.context.$implicit.db != u.ha.db), l(n, 10, 0, n.context.$implicit.db == u.ha.db), l(n, 13, 0, n.context.$implicit.cfg != u.ha.config.cfg), l(n, 15, 0, n.context.$implicit.cfg == u.ha.config.cfg), l(n, 18, 0, 99 != n.context.$implicit.status), l(n, 20, 0, 99 == n.context.$implicit.status)
				}), (function(l, n) {
					l(n, 3, 0, n.context.$implicit.ip), l(n, 5, 0, n.context.$implicit.api), l(n, 22, 0, n.context.$implicit.date)
				}))
			}

			function N(l) {
				return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 26, "div", [
					["class", "row"]
				], null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 25, "div", [
					["class", "col-lg-8 col-xs-12 col-md-12"]
				], null, null, null, null, null)), (l()(), t.Db(2, 0, null, null, 24, "div", [
					["class", "card m-2"]
				], null, null, null, null, null)), (l()(), t.Db(3, 0, null, null, 23, "div", [
					["class", "card-body"]
				], null, null, null, null, null)), (l()(), t.Db(4, 0, null, null, 3, "h5", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["High Availability "])), (l()(), t.Db(6, 0, null, null, 1, "small", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["slave list"])), (l()(), t.Db(8, 0, null, null, 18, "div", [
					["class", "table-responsive"]
				], null, null, null, null, null)), (l()(), t.Db(9, 0, null, null, 17, "table", [
					["class", "table"]
				], null, null, null, null, null)), (l()(), t.Db(10, 0, null, null, 13, "thead", [], null, null, null, null, null)), (l()(), t.Db(11, 0, null, null, 12, "tr", [], null, null, null, null, null)), (l()(), t.Db(12, 0, null, null, 1, "th", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["IP Address"])), (l()(), t.Db(14, 0, null, null, 1, "th", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["API"])), (l()(), t.Db(16, 0, null, null, 1, "th", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["DB Check"])), (l()(), t.Db(18, 0, null, null, 1, "th", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Cfg Check"])), (l()(), t.Db(20, 0, null, null, 1, "th", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Status"])), (l()(), t.Db(22, 0, null, null, 1, "th", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Last Check"])), (l()(), t.Db(24, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 1, null, I)), t.Cb(26, 278528, null, 0, b.l, [t.Y, t.U, t.y], {
					ngForOf: [0, "ngForOf"]
				}, null)], (function(l, n) {
					l(n, 26, 0, n.component.ha.slaves)
				}), null)
			}

			function Y(l) {
				return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 108, "div", [
					["class", "row"]
				], null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 35, "div", [
					["class", "col-lg-3 col-xs-12 col-md-6"]
				], null, null, null, null, null)), (l()(), t.Db(2, 0, null, null, 34, "div", [
					["class", "card m-2"],
					["style", "min-height: 200px;"]
				], null, null, null, null, null)), (l()(), t.Db(3, 0, null, null, 33, "div", [
					["class", "card-body"]
				], null, null, null, null, null)), (l()(), t.Db(4, 0, null, null, 1, "h5", [
					["class", "card-title"]
				], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["System Info"])), (l()(), t.Db(6, 0, null, null, 5, "p", [
					["class", "card-text"]
				], null, null, null, null, null)), (l()(), t.Db(7, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Time: "])), (l()(), t.Db(9, 0, null, null, 2, "span", [
					["class", "pull-right"]
				], null, null, null, null, null)), (l()(), t.Db(10, 0, null, null, 1, "kt-clock", [], null, null, null, r.b, r.a)), t.Cb(11, 245760, null, 0, c.a, [i.a], null, null), (l()(), t.Db(12, 0, null, null, 5, "p", [
					["class", "card-text"]
				], null, null, null, null, null)), (l()(), t.Db(13, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["API: "])), (l()(), t.Db(15, 0, null, null, 2, "span", [
					["class", "pull-right"]
				], null, null, null, null, null)), (l()(), t.Xb(16, null, ["", ""])), t.Rb(131072, b.b, [t.h]), (l()(), t.Db(18, 0, null, null, 5, "p", [
					["class", "card-text"]
				], null, null, null, null, null)), (l()(), t.Db(19, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["TAC: "])), (l()(), t.Db(21, 0, null, null, 2, "span", [
					["class", "pull-right"]
				], null, null, null, null, null)), (l()(), t.Xb(22, null, ["", ""])), t.Rb(131072, b.b, [t.h]), (l()(), t.Db(24, 0, null, null, 12, "p", [
					["class", "card-text"]
				], null, null, null, null, null)), (l()(), t.Db(25, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["HA Role: "])), (l()(), t.Db(27, 0, null, null, 9, "span", [
					["class", "pull-right"]
				], null, null, null, null, null)), (l()(), t.Db(28, 0, null, null, 8, null, null, null, null, null, null, null)), t.Cb(29, 16384, null, 0, b.q, [], {
					ngSwitch: [0, "ngSwitch"]
				}, null), t.Rb(131072, b.b, [t.h]), (l()(), t.sb(16777216, null, null, 1, null, C)), t.Cb(32, 278528, null, 0, b.r, [t.Y, t.U, b.q], {
					ngSwitchCase: [0, "ngSwitchCase"]
				}, null), (l()(), t.sb(16777216, null, null, 1, null, w)), t.Cb(34, 278528, null, 0, b.r, [t.Y, t.U, b.q], {
					ngSwitchCase: [0, "ngSwitchCase"]
				}, null), (l()(), t.sb(16777216, null, null, 1, null, m)), t.Cb(36, 16384, null, 0, b.s, [t.Y, t.U, b.q], null, null), (l()(), t.Db(37, 0, null, null, 34, "div", [
					["class", "col-lg-2 col-xs-12 col-md-6"]
				], null, null, null, null, null)), (l()(), t.Db(38, 0, null, null, 33, "div", [
					["class", "card m-2"],
					["style", "min-height: 200px;"]
				], null, null, null, null, null)), (l()(), t.Db(39, 0, null, null, 32, "div", [
					["class", "card-body"]
				], null, null, null, null, null)), (l()(), t.Db(40, 0, null, null, 1, "h5", [
					["class", "card-title"]
				], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Tac_Plus Info"])), (l()(), t.Db(42, 0, null, null, 12, "p", [
					["class", "card-text"]
				], null, null, null, null, null)), (l()(), t.Db(43, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Status: "])), (l()(), t.Db(45, 0, null, null, 9, "a", [], [
					[1, "target", 0],
					[8, "href", 4]
				], [
					[null, "click"]
				], (function(l, n, u) {
					var a = !0;
					return "click" === n && (a = !1 !== t.Pb(l, 46).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && a), a
				}), null, null)), t.Cb(46, 671744, null, 0, o.s, [o.q, o.a, b.j], {
					routerLink: [0, "routerLink"]
				}, null), (l()(), t.Db(47, 0, null, null, 7, "span", [
					["class", "pull-right kt-badge kt-badge--inline kt-badge--pill kt-badge--wide"]
				], null, null, null, null, null)), t.Ub(512, null, b.D, b.E, [t.y, t.z, t.n, t.M]), t.Cb(49, 278528, null, 0, b.k, [b.D], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), t.Rb(131072, b.b, [t.h]), t.Rb(131072, b.b, [t.h]), t.Sb(52, {
					"kt-badge--success": 0,
					"kt-badge--warning": 1
				}), (l()(), t.Xb(53, null, [" ", " "])), t.Rb(131072, b.b, [t.h]), (l()(), t.Db(55, 0, null, null, 7, "p", [
					["class", "card-text"]
				], null, null, null, null, null)), (l()(), t.Db(56, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Users: "])), (l()(), t.Db(58, 0, null, null, 4, "span", [
					["class", "pull-right"]
				], null, null, null, null, null)), (l()(), t.Db(59, 0, null, null, 3, "a", [], [
					[1, "target", 0],
					[8, "href", 4]
				], [
					[null, "click"]
				], (function(l, n, u) {
					var a = !0;
					return "click" === n && (a = !1 !== t.Pb(l, 60).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && a), a
				}), null, null)), t.Cb(60, 671744, null, 0, o.s, [o.q, o.a, b.j], {
					routerLink: [0, "routerLink"]
				}, null), (l()(), t.Xb(61, null, ["", ""])), t.Rb(131072, b.b, [t.h]), (l()(), t.Db(63, 0, null, null, 7, "p", [
					["class", "card-text"]
				], null, null, null, null, null)), (l()(), t.Db(64, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Devices: "])), (l()(), t.Db(66, 0, null, null, 4, "span", [
					["class", "pull-right"]
				], null, null, null, null, null)), (l()(), t.Db(67, 0, null, null, 3, "a", [], [
					[1, "target", 0],
					[8, "href", 4]
				], [
					[null, "click"]
				], (function(l, n, u) {
					var a = !0;
					return "click" === n && (a = !1 !== t.Pb(l, 68).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && a), a
				}), null, null)), t.Cb(68, 671744, null, 0, o.s, [o.q, o.a, b.j], {
					routerLink: [0, "routerLink"]
				}, null), (l()(), t.Xb(69, null, ["", ""])), t.Rb(131072, b.b, [t.h]), (l()(), t.Db(71, 0, null, null, 0, "p", [
					["class", "card-text"]
				], null, null, null, null, null)), (l()(), t.Db(72, 0, null, null, 36, "div", [
					["class", "col-lg-3 col-xs-12 col-md-6"]
				], null, null, null, null, null)), (l()(), t.Db(73, 0, null, null, 35, "div", [
					["class", "card m-2"],
					["style", "min-height: 200px;"]
				], null, null, null, null, null)), (l()(), t.Db(74, 0, null, null, 34, "div", [
					["class", "card-body"]
				], null, null, null, null, null)), (l()(), t.Db(75, 0, null, null, 1, "h5", [
					["class", "card-title"]
				], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Reports"])), (l()(), t.Db(77, 0, null, null, 7, "p", [
					["class", "card-text"]
				], null, null, null, null, null)), (l()(), t.Db(78, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Authe Total: "])), (l()(), t.Db(80, 0, null, null, 4, "a", [], [
					[1, "target", 0],
					[8, "href", 4]
				], [
					[null, "click"]
				], (function(l, n, u) {
					var a = !0;
					return "click" === n && (a = !1 !== t.Pb(l, 81).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && a), a
				}), null, null)), t.Cb(81, 671744, null, 0, o.s, [o.q, o.a, b.j], {
					routerLink: [0, "routerLink"]
				}, null), (l()(), t.Db(82, 0, null, null, 2, "span", [
					["class", "pull-right"]
				], null, null, null, null, null)), (l()(), t.Xb(83, null, ["", ""])), t.Rb(131072, b.b, [t.h]), (l()(), t.Db(85, 0, null, null, 7, "p", [
					["class", "card-text"]
				], null, null, null, null, null)), (l()(), t.Db(86, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Autho Total: "])), (l()(), t.Db(88, 0, null, null, 4, "a", [], [
					[1, "target", 0],
					[8, "href", 4]
				], [
					[null, "click"]
				], (function(l, n, u) {
					var a = !0;
					return "click" === n && (a = !1 !== t.Pb(l, 89).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && a), a
				}), null, null)), t.Cb(89, 671744, null, 0, o.s, [o.q, o.a, b.j], {
					routerLink: [0, "routerLink"]
				}, null), (l()(), t.Db(90, 0, null, null, 2, "span", [
					["class", "pull-right"]
				], null, null, null, null, null)), (l()(), t.Xb(91, null, ["", ""])), t.Rb(131072, b.b, [t.h]), (l()(), t.Db(93, 0, null, null, 7, "p", [
					["class", "card-text"]
				], null, null, null, null, null)), (l()(), t.Db(94, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Acc Total: "])), (l()(), t.Db(96, 0, null, null, 4, "a", [], [
					[1, "target", 0],
					[8, "href", 4]
				], [
					[null, "click"]
				], (function(l, n, u) {
					var a = !0;
					return "click" === n && (a = !1 !== t.Pb(l, 97).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && a), a
				}), null, null)), t.Cb(97, 671744, null, 0, o.s, [o.q, o.a, b.j], {
					routerLink: [0, "routerLink"]
				}, null), (l()(), t.Db(98, 0, null, null, 2, "span", [
					["class", "pull-right"]
				], null, null, null, null, null)), (l()(), t.Xb(99, null, ["", ""])), t.Rb(131072, b.b, [t.h]), (l()(), t.Db(101, 0, null, null, 7, "p", [
					["class", "card-text"]
				], null, null, null, null, null)), (l()(), t.Db(102, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Bad Authe: "])), (l()(), t.Db(104, 0, null, null, 4, "a", [], [
					[1, "target", 0],
					[8, "href", 4]
				], [
					[null, "click"]
				], (function(l, n, u) {
					var a = !0;
					return "click" === n && (a = !1 !== t.Pb(l, 105).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && a), a
				}), null, null)), t.Cb(105, 671744, null, 0, o.s, [o.q, o.a, b.j], {
					routerLink: [0, "routerLink"]
				}, null), (l()(), t.Db(106, 0, null, null, 2, "span", [
					["class", "pull-right"]
				], null, null, null, null, null)), (l()(), t.Xb(107, null, ["", ""])), t.Rb(131072, b.b, [t.h]), (l()(), t.sb(16777216, null, null, 1, null, N)), t.Cb(110, 16384, null, 0, b.m, [t.Y, t.U], {
					ngIf: [0, "ngIf"]
				}, null)], (function(l, n) {
					var u = n.component;
					l(n, 11, 0), l(n, 29, 0, t.Yb(n, 29, 0, t.Pb(n, 30).transform(u.widgets.ha.text))), l(n, 32, 0, 1), l(n, 34, 0, 2), l(n, 46, 0, u.widgets.tac_status.url);
					var a = l(n, 52, 0, "active" == t.Yb(n, 49, 1, t.Pb(n, 50).transform(u.widgets.tac_status.text)), "active" != t.Yb(n, 49, 1, t.Pb(n, 51).transform(u.widgets.tac_status.text)));
					l(n, 49, 0, "pull-right kt-badge kt-badge--inline kt-badge--pill kt-badge--wide", a), l(n, 60, 0, u.widgets.users.url), l(n, 68, 0, u.widgets.devices.url), l(n, 81, 0, u.widgets.authe.url), l(n, 89, 0, u.widgets.autho.url), l(n, 97, 0, u.widgets.acc.url), l(n, 105, 0, u.widgets.bad_authe.url), l(n, 110, 0, u.ha.slaves.length > 0)
				}), (function(l, n) {
					var u = n.component;
					l(n, 16, 0, t.Yb(n, 16, 0, t.Pb(n, 17).transform(u.widgets.api.text))), l(n, 22, 0, t.Yb(n, 22, 0, t.Pb(n, 23).transform(u.widgets.tac_plus.text))), l(n, 45, 0, t.Pb(n, 46).target, t.Pb(n, 46).href), l(n, 53, 0, t.Yb(n, 53, 0, t.Pb(n, 54).transform(u.widgets.tac_status.text))), l(n, 59, 0, t.Pb(n, 60).target, t.Pb(n, 60).href), l(n, 61, 0, t.Yb(n, 61, 0, t.Pb(n, 62).transform(u.widgets.users.text))), l(n, 67, 0, t.Pb(n, 68).target, t.Pb(n, 68).href), l(n, 69, 0, t.Yb(n, 69, 0, t.Pb(n, 70).transform(u.widgets.devices.text))), l(n, 80, 0, t.Pb(n, 81).target, t.Pb(n, 81).href), l(n, 83, 0, t.Yb(n, 83, 0, t.Pb(n, 84).transform(u.widgets.authe.text))), l(n, 88, 0, t.Pb(n, 89).target, t.Pb(n, 89).href), l(n, 91, 0, t.Yb(n, 91, 0, t.Pb(n, 92).transform(u.widgets.autho.text))), l(n, 96, 0, t.Pb(n, 97).target, t.Pb(n, 97).href), l(n, 99, 0, t.Yb(n, 99, 0, t.Pb(n, 100).transform(u.widgets.acc.text))), l(n, 104, 0, t.Pb(n, 105).target, t.Pb(n, 105).href), l(n, 107, 0, t.Yb(n, 107, 0, t.Pb(n, 108).transform(u.widgets.bad_authe.text)))
				}))
			}
			var A = u("Zseb"),
				R = function() {
					function l(l) {
						this.http = l
					}
					return l.prototype.get = function() {
						return this.http.get("api/tacacs/widget/chart/auth/", {}).pipe(Object(h.a)(), Object(g.a)((function(l) {
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
				S = function() {
					function l(l) {
						this.service = l, this.barChartOptions_authe = {
							scaleShowVerticalLines: !1,
							responsive: !0,
							scales: {
								yAxes: [{
									display: !0,
									scaleLabel: {
										display: !0,
										labelString: "Authentication"
									},
									ticks: {
										beginAtZero: !0,
										userCallback: function(l, n, u) {
											if (Math.floor(l) === l) return l
										}
									}
								}]
							}
						}, this.barChartOptions_autho = {
							scaleShowVerticalLines: !1,
							responsive: !0,
							scales: {
								yAxes: [{
									display: !0,
									scaleLabel: {
										display: !0,
										labelString: "Authorization"
									},
									ticks: {
										beginAtZero: !0,
										userCallback: function(l, n, u) {
											if (Math.floor(l) === l) return l
										}
									}
								}]
							}
						}, this.barChartLabels = [], this.labels = new d.a([]), this.barChartType = "line", this.barChartLegend = !0, this.barChartData_authe = [{
							data: [],
							label: "Fail",
							fill: !1
						}, {
							data: [],
							label: "Success",
							fill: !1
						}], this.barChartData_autho = [{
							data: [],
							label: "Fail",
							fill: !1
						}, {
							data: [],
							label: "Success",
							fill: !1
						}]
					}
					return l.prototype.ngOnInit = function() {
						var l = this;
						this.service.get().subscribe((function(n) {
							l.barChartData_authe[0].data = n.authe.chart.f, l.barChartData_authe[1].data = n.authe.chart.s, l.barChartData_autho[0].data = n.autho.chart.f, l.barChartData_autho[1].data = n.autho.chart.s, l.labels.next(n.time_range)
						}))
					}, l
				}(),
				K = t.Bb({
					encapsulation: 0,
					styles: [
						[""]
					],
					data: {}
				});

			function U(l) {
				return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 20, "div", [
					["class", "row"]
				], null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 9, "div", [
					["class", "col-lg-4 col-md-12"]
				], null, null, null, null, null)), (l()(), t.Db(2, 0, null, null, 8, "div", [
					["class", "card m-2"]
				], null, null, null, null, null)), (l()(), t.Db(3, 0, null, null, 7, "div", [
					["class", "card-body"]
				], null, null, null, null, null)), (l()(), t.Db(4, 0, null, null, 1, "h5", [
					["class", "card-title"]
				], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Authentication Stats"])), (l()(), t.Db(6, 0, null, null, 1, "h6", [
					["class", "card-subtitle mb-2 text-muted"]
				], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["authentication per week"])), (l()(), t.Db(8, 0, null, null, 2, "canvas", [
					["baseChart", ""]
				], null, null, null, null, null)), t.Cb(9, 999424, null, 0, A.a, [t.n, A.c], {
					datasets: [0, "datasets"],
					labels: [1, "labels"],
					options: [2, "options"],
					chartType: [3, "chartType"],
					legend: [4, "legend"]
				}, null), t.Rb(131072, b.b, [t.h]), (l()(), t.Db(11, 0, null, null, 9, "div", [
					["class", "col-lg-4 col-md-12"]
				], null, null, null, null, null)), (l()(), t.Db(12, 0, null, null, 8, "div", [
					["class", "card m-2"]
				], null, null, null, null, null)), (l()(), t.Db(13, 0, null, null, 7, "div", [
					["class", "card-body"]
				], null, null, null, null, null)), (l()(), t.Db(14, 0, null, null, 1, "h5", [
					["class", "card-title"]
				], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Authorization Stats"])), (l()(), t.Db(16, 0, null, null, 1, "h6", [
					["class", "card-subtitle mb-2 text-muted"]
				], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["authorization per week"])), (l()(), t.Db(18, 0, null, null, 2, "canvas", [
					["baseChart", ""]
				], null, null, null, null, null)), t.Cb(19, 999424, null, 0, A.a, [t.n, A.c], {
					datasets: [0, "datasets"],
					labels: [1, "labels"],
					options: [2, "options"],
					chartType: [3, "chartType"],
					legend: [4, "legend"]
				}, null), t.Rb(131072, b.b, [t.h])], (function(l, n) {
					var u = n.component;
					l(n, 9, 0, u.barChartData_authe, t.Yb(n, 9, 1, t.Pb(n, 10).transform(u.labels)), u.barChartOptions_authe, u.barChartType, u.barChartLegend), l(n, 19, 0, u.barChartData_autho, t.Yb(n, 19, 1, t.Pb(n, 20).transform(u.labels)), u.barChartOptions_autho, u.barChartType, u.barChartLegend)
				}), null)
			}
			var T = function() {
					function l(l) {
						this.http = l
					}
					return l.prototype.get = function(l) {
						var n = (new p.j).set("users", l.users.toString()).set("devices", l.devices.toString()).set("usersReload", l.usersReload.toString()).set("devicesReload", l.devicesReload.toString());
						return this.http.get("api/tacacs/reports/top/access/", {
							params: n
						}).pipe(Object(h.a)(), Object(g.a)((function(l) {
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
				O = function() {
					function l(l) {
						this.service = l, this.chartColors = ["rgb(255, 99, 132)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(201, 203, 207)", "rgb(54, 162, 235)", "rgb(153, 102, 255)", "rgb(255, 159, 64)"], this.barChartLabels_devices = [], this.barChartLabels = [], this.device_labels = new d.a(this.barChartLabels_devices), this.user_labels = new d.a(this.barChartLabels), this.barChartOptions = {
							scaleShowVerticalLines: !1,
							responsive: !0
						}, this.barChartType = "pie", this.barChartLegend = !0, this.barChartData = [{
							data: [],
							label: "Users",
							backgroundColor: this.chartColors
						}], this.barChartData_devices = [{
							data: [],
							label: "Devices",
							backgroundColor: this.chartColors
						}], this.set = {
							users: 5,
							devices: 5,
							usersReload: 1,
							devicesReload: 1
						}
					}
					return l.prototype.ngOnInit = function() {
						var l = this;
						this.service.get(this.set).subscribe((function(n) {
							l.barChartLabels = [], l.barChartData[0].data = [], l.barChartLabels_devices = [], l.barChartData_devices[0].data = [];
							for (var u = 0; u < n.topUsers.length; u++) l.barChartLabels.push(n.topUsers[u].label), l.barChartData[0].data.push(n.topUsers[u].count);
							for (u = 0; u < n.topDevices.length; u++) l.barChartLabels_devices.push(n.topDevices[u].label), l.barChartData_devices[0].data.push(n.topDevices[u].count);
							l.device_labels.next(l.barChartLabels_devices), l.user_labels.next(l.barChartLabels)
						}))
					}, l
				}(),
				Z = t.Bb({
					encapsulation: 0,
					styles: [
						[""]
					],
					data: {}
				});

			function j(l) {
				return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 20, "div", [
					["class", "row"]
				], null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 9, "div", [
					["class", "col-lg-4 col-md-12"]
				], null, null, null, null, null)), (l()(), t.Db(2, 0, null, null, 8, "div", [
					["class", "card m-2"]
				], null, null, null, null, null)), (l()(), t.Db(3, 0, null, null, 7, "div", [
					["class", "card-body"]
				], null, null, null, null, null)), (l()(), t.Db(4, 0, null, null, 1, "h5", [
					["class", "card-title"]
				], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Top 5 Active Users"])), (l()(), t.Db(6, 0, null, null, 1, "h6", [
					["class", "card-subtitle mb-2 text-muted"]
				], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["number of authentication per week"])), (l()(), t.Db(8, 0, [
					["topUsers", 1]
				], null, 2, "canvas", [
					["baseChart", ""]
				], null, null, null, null, null)), t.Cb(9, 999424, null, 0, A.a, [t.n, A.c], {
					datasets: [0, "datasets"],
					labels: [1, "labels"],
					options: [2, "options"],
					chartType: [3, "chartType"],
					legend: [4, "legend"]
				}, null), t.Rb(131072, b.b, [t.h]), (l()(), t.Db(11, 0, null, null, 9, "div", [
					["class", "col-lg-4 col-md-12"]
				], null, null, null, null, null)), (l()(), t.Db(12, 0, null, null, 8, "div", [
					["class", "card m-2"]
				], null, null, null, null, null)), (l()(), t.Db(13, 0, null, null, 7, "div", [
					["class", "card-body"]
				], null, null, null, null, null)), (l()(), t.Db(14, 0, null, null, 1, "h5", [
					["class", "card-title"]
				], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Top 5 Used Devices"])), (l()(), t.Db(16, 0, null, null, 1, "h6", [
					["class", "card-subtitle mb-2 text-muted"]
				], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["number of authentication per week"])), (l()(), t.Db(18, 0, [
					["topDevices", 1]
				], null, 2, "canvas", [
					["baseChart", ""]
				], null, null, null, null, null)), t.Cb(19, 999424, null, 0, A.a, [t.n, A.c], {
					datasets: [0, "datasets"],
					labels: [1, "labels"],
					options: [2, "options"],
					chartType: [3, "chartType"],
					legend: [4, "legend"]
				}, null), t.Rb(131072, b.b, [t.h])], (function(l, n) {
					var u = n.component;
					l(n, 9, 0, u.barChartData, t.Yb(n, 9, 1, t.Pb(n, 10).transform(u.user_labels)), u.barChartOptions, u.barChartType, u.barChartLegend), l(n, 19, 0, u.barChartData_devices, t.Yb(n, 19, 1, t.Pb(n, 20).transform(u.device_labels)), u.barChartOptions, u.barChartType, u.barChartLegend)
				}), null)
			}
			var q = function() {
					function l() {}
					return l.prototype.ngOnInit = function() {}, l
				}(),
				F = t.Bb({
					encapsulation: 0,
					styles: [
						["[_nghost-%COMP%]     ngb-tabset>.nav-tabs{display:none}"]
					],
					data: {}
				});

			function $(l) {
				return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 6, "div", [
					["class", "m-3"]
				], null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 1, "kt-w-system-info", [], null, null, null, Y, k)), t.Cb(2, 114688, null, 0, v, [f, D.a], null, null), (l()(), t.Db(3, 0, null, null, 1, "kt-w-auth-linechart", [], null, null, null, U, K)), t.Cb(4, 114688, null, 0, S, [R], null, null), (l()(), t.Db(5, 0, null, null, 1, "kt-w-auth-piechart", [], null, null, null, j, Z)), t.Cb(6, 114688, null, 0, O, [T], null, null)], (function(l, n) {
					l(n, 2, 0), l(n, 4, 0), l(n, 6, 0)
				}), null)
			}

			function z(l) {
				return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "kt-dashboard", [], null, null, null, $, F)), t.Cb(1, 114688, null, 0, q, [], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var M = t.zb("kt-dashboard", q, z, {}, {}, []),
				V = u("gIcY"),
				B = u("4GxJ"),
				E = u("gk6K"),
				H = u("F+oH"),
				G = u("yYhs"),
				J = u("2rQ4");
			u.d(n, "DashboardModuleNgFactory", (function() {
				return Q
			}));
			var Q = t.Ab(a, [], (function(l) {
				return t.Mb([t.Nb(512, t.k, t.lb, [
					[8, [e.a, s.a, s.b, s.p, s.q, s.m, s.n, s.o, M]],
					[3, t.k], t.E
				]), t.Nb(4608, b.o, b.n, [t.A, [2, b.I]]), t.Nb(4608, V.A, V.A, []), t.Nb(4608, B.E, B.E, [t.k, t.w, B.yb, B.F]), t.Nb(4608, E.a, E.a, []), t.Nb(1073742336, b.c, b.c, []), t.Nb(1073742336, o.t, o.t, [
					[2, o.z],
					[2, o.q]
				]), t.Nb(1073742336, A.b, A.b, []), t.Nb(1073742336, H.a, H.a, []), t.Nb(1073742336, G.a, G.a, []), t.Nb(1073742336, B.c, B.c, []), t.Nb(1073742336, B.g, B.g, []), t.Nb(1073742336, B.h, B.h, []), t.Nb(1073742336, B.l, B.l, []), t.Nb(1073742336, B.n, B.n, []), t.Nb(1073742336, V.z, V.z, []), t.Nb(1073742336, V.k, V.k, []), t.Nb(1073742336, B.u, B.u, []), t.Nb(1073742336, B.A, B.A, []), t.Nb(1073742336, B.G, B.G, []), t.Nb(1073742336, B.K, B.K, []), t.Nb(1073742336, B.P, B.P, []), t.Nb(1073742336, B.S, B.S, []), t.Nb(1073742336, B.V, B.V, []), t.Nb(1073742336, B.ab, B.ab, []), t.Nb(1073742336, B.eb, B.eb, []), t.Nb(1073742336, B.hb, B.hb, []), t.Nb(1073742336, B.kb, B.kb, []), t.Nb(1073742336, B.H, B.H, []), t.Nb(1073742336, J.a, J.a, []), t.Nb(1073742336, a, a, []), t.Nb(1024, o.m, (function() {
					return [
						[{
							path: "",
							component: q
						}]
					]
				}), [])])
			}))
		}
	}
]);