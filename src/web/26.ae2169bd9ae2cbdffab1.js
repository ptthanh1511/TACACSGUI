(window.webpackJsonp = window.webpackJsonp || []).push([
    [26], {
        "4bYC": function(l, n, u) {
            "use strict";
            u.r(n);
            var t = u("CcnG"),
                a = function() {
                    return function() {}
                }(),
                e = u("pMnS"),
                o = u("9AJC"),
                s = u("II6f"),
                i = u("5Awz"),
                r = u("8kqb"),
                b = u("uoK1"),
                c = u("SZbH"),
                d = u("ZYCi"),
                g = u("GRfY"),
                p = u("mlFA"),
                m = function() {
                    function l() {
                        this.tableOptions = {
                            table: {
                                delBtn: "/tacacs/service/delete/",
                                editBtn: !0,
                                selectable: !0,
                                preview: {
                                    target: "service"
                                },
                                pagination: !1,
                                mainUrl: "/tacacs/service/datatables/",
                                sort: {
                                    column: "name",
                                    direction: "asc"
                                },
                                editable: !0,
                                columns: {
                                    id: {
                                        title: "ID",
                                        show: !1,
                                        sortable: !0
                                    },
                                    name: {
                                        title: "Name",
                                        show: !0,
                                        sortable: !0
                                    },
                                    ref: {
                                        title: "Ref#",
                                        show: !0,
                                        sortable: !1,
                                        reference: "/tacacs/service/ref/"
                                    },
                                    created_at: {
                                        title: "Created",
                                        show: !1,
                                        sortable: !0
                                    },
                                    updated_at: {
                                        title: "Updated",
                                        show: !1,
                                        sortable: !0
                                    }
                                }
                            },
                            panel: {
                                add: {
                                    enable: !0
                                },
                                filter: {
                                    enable: !0
                                },
                                actions: {
                                    enable: !1,
                                    options: []
                                },
                                moreColumns: {
                                    enable: !0
                                }
                            }
                        }
                    }
                    return l.prototype.ngOnInit = function() {}, l
                }(),
                h = t.Bb({
                    encapsulation: 0,
                    styles: [
                        [""]
                    ],
                    data: {}
                });

            function C(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "kt-main-table", [], null, null, null, s.b, s.a)), t.Cb(1, 114688, null, 0, i.a, [r.a, b.a, c.j, d.q, d.a, g.a, p.a], {
                    options: [0, "options"]
                }, null)], (function(l, n) {
                    l(n, 1, 0, n.component.tableOptions)
                }), null)
            }

            function v(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "kt-services", [], null, null, null, C, h)), t.Cb(1, 114688, null, 0, m, [], null, null)], (function(l, n) {
                    l(n, 1, 0)
                }), null)
            }
            var f = t.zb("kt-services", m, v, {}, {}, []),
                P = u("Ip0R"),
                D = u("gIcY"),
                _ = u("P+cp"),
                k = u("p/I8"),
                M = u("02SS"),
                y = u("4GxJ"),
                w = u("6U+V"),
                x = function() {
                    function l() {
                        this.list = {
                            cisco_rs_cmd: new w.a("cmd_general")
                        }
                    }
                    return l.prototype.ngOnInit = function() {}, l.prototype.setCmdSet = function(l) {
                        this.options.data.cisco_rs_cmd = l
                    }, l
                }(),
                U = t.Bb({
                    encapsulation: 0,
                    styles: [
                        [""]
                    ],
                    data: {}
                });

            function S(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), t.Xb(1, null, ["", ""]))], null, (function(l, n) {
                    l(n, 1, 0, n.context.$implicit)
                }))
            }

            function T(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 14, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 13, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(2, 0, null, null, 12, "div", [
                    ["class", "form-group row"]
                ], null, null, null, null, null)), (l()(), t.Db(3, 0, null, null, 9, "div", [
                    ["class", "col-2"]
                ], null, null, null, null, null)), (l()(), t.Db(4, 0, null, null, 8, "span", [
                    ["class", "kt-switch kt-switch--sm kt-switch--outline kt-switch--success"]
                ], null, null, null, null, null)), (l()(), t.Db(5, 0, null, null, 7, "label", [], null, null, null, null, null)), (l()(), t.Db(6, 0, null, null, 5, "input", [
                    ["checked", ""],
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
                    var a = !0,
                        e = l.component;
                    return "change" === n && (a = !1 !== t.Pb(l, 7).onChange(u.target.checked) && a), "blur" === n && (a = !1 !== t.Pb(l, 7).onTouched() && a), "ngModelChange" === n && (a = !1 !== (e.options.data.cisco_rs_enable = u) && a), a
                }), null, null)), t.Cb(7, 16384, null, 0, D.b, [t.M, t.n], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.b]), t.Cb(9, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(11, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null), (l()(), t.Db(12, 0, null, null, 0, "span", [], null, null, null, null, null)), (l()(), t.Db(13, 0, null, null, 1, "label", [
                    ["class", "col-10 col-form-label"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Pattern Activated"])), (l()(), t.Db(15, 0, null, null, 46, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t.Db(16, 0, null, null, 19, "div", [
                    ["class", "col-4"]
                ], null, null, null, null, null)), (l()(), t.Db(17, 0, null, null, 18, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(18, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Privilege Level"])), (l()(), t.Db(20, 0, null, null, 10, "input", [
                    ["class", "form-control form-control-sm"],
                    ["placeholder", "Privilege Level"],
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
                    var a = !0,
                        e = l.component;
                    return "input" === n && (a = !1 !== t.Pb(l, 25)._handleInput(u.target.value) && a), "blur" === n && (a = !1 !== t.Pb(l, 25).onTouched() && a), "compositionstart" === n && (a = !1 !== t.Pb(l, 25)._compositionStart() && a), "compositionend" === n && (a = !1 !== t.Pb(l, 25)._compositionEnd(u.target.value) && a), "change" === n && (a = !1 !== t.Pb(l, 26).onChange(u.target.value) && a), "input" === n && (a = !1 !== t.Pb(l, 26).onChange(u.target.value) && a), "blur" === n && (a = !1 !== t.Pb(l, 26).onTouched() && a), "ngModelChange" === n && (a = !1 !== (e.options.data.cisco_rs_privlvl = u) && a), a
                }), null, null)), t.Ub(512, null, P.D, P.E, [t.y, t.z, t.n, t.M]), t.Cb(22, 278528, null, 0, P.k, [P.D], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), t.Rb(131072, P.b, [t.h]), t.Sb(24, {
                    "is-invalid": 0
                }), t.Cb(25, 16384, null, 0, D.e, [t.M, t.n, [2, D.a]], null, null), t.Cb(26, 16384, null, 0, D.u, [t.M, t.n], null, null), t.Ub(1024, null, D.n, (function(l, n) {
                    return [l, n]
                }), [D.e, D.u]), t.Cb(28, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(30, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null), (l()(), t.Db(31, 0, null, null, 3, "div", [
                    ["class", "invalid-feedback"]
                ], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 2, null, S)), t.Cb(33, 278528, null, 0, P.l, [t.Y, t.U, t.y], {
                    ngForOf: [0, "ngForOf"]
                }, null), t.Rb(131072, P.b, [t.h]), (l()(), t.Db(35, 0, null, null, 0, "span", [
                    ["class", "form-text text-muted"]
                ], null, null, null, null, null)), (l()(), t.Db(36, 0, null, null, 12, "div", [
                    ["class", "col-4"]
                ], null, null, null, null, null)), (l()(), t.Db(37, 0, null, null, 11, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(38, 0, null, null, 1, "label", [
                    ["style", "width: 100%;"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Default command"])), (l()(), t.Db(40, 0, null, null, 8, "span", [
                    ["class", "kt-switch kt-switch--icon kt-switch--outline kt-switch--success"]
                ], null, null, null, null, null)), (l()(), t.Db(41, 0, null, null, 7, "label", [], null, null, null, null, null)), (l()(), t.Db(42, 0, null, null, 5, "input", [
                    ["checked", ""],
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
                    var a = !0,
                        e = l.component;
                    return "change" === n && (a = !1 !== t.Pb(l, 43).onChange(u.target.checked) && a), "blur" === n && (a = !1 !== t.Pb(l, 43).onTouched() && a), "ngModelChange" === n && (a = !1 !== (e.options.data.cisco_rs_def_cmd = u) && a), a
                }), null, null)), t.Cb(43, 16384, null, 0, D.b, [t.M, t.n], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.b]), t.Cb(45, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(47, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null), (l()(), t.Db(48, 0, null, null, 0, "span", [], null, null, null, null, null)), (l()(), t.Db(49, 0, null, null, 12, "div", [
                    ["class", "col-4"]
                ], null, null, null, null, null)), (l()(), t.Db(50, 0, null, null, 11, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(51, 0, null, null, 1, "label", [
                    ["style", "width: 100%;"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Default attribute"])), (l()(), t.Db(53, 0, null, null, 8, "span", [
                    ["class", "kt-switch kt-switch--icon kt-switch--outline kt-switch--success"]
                ], null, null, null, null, null)), (l()(), t.Db(54, 0, null, null, 7, "label", [], null, null, null, null, null)), (l()(), t.Db(55, 0, null, null, 5, "input", [
                    ["checked", ""],
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
                    var a = !0,
                        e = l.component;
                    return "change" === n && (a = !1 !== t.Pb(l, 56).onChange(u.target.checked) && a), "blur" === n && (a = !1 !== t.Pb(l, 56).onTouched() && a), "ngModelChange" === n && (a = !1 !== (e.options.data.cisco_rs_def_attr = u) && a), a
                }), null, null)), t.Cb(56, 16384, null, 0, D.b, [t.M, t.n], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.b]), t.Cb(58, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(60, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null), (l()(), t.Db(61, 0, null, null, 0, "span", [], null, null, null, null, null)), (l()(), t.Db(62, 0, null, null, 19, "div", [
                    ["class", "accordion accordion-light  accordion-toggle-arrow"]
                ], null, null, null, null, null)), (l()(), t.Db(63, 0, null, null, 18, "div", [
                    ["class", "card"]
                ], null, null, null, null, null)), (l()(), t.Db(64, 0, null, null, 5, "div", [
                    ["class", "card-header"]
                ], null, null, null, null, null)), (l()(), t.Db(65, 0, null, null, 4, "div", [
                    ["class", "card-title collapsed"],
                    ["data-toggle", "collapse"]
                ], [
                    [1, "aria-expanded", 0]
                ], [
                    [null, "click"]
                ], (function(l, n, u) {
                    var t = !0,
                        a = l.component;
                    return "click" === n && (t = 0 != (a.notCollapsedMCG = !a.notCollapsedMCG) && t), t
                }), null, null)), t.Ub(512, null, P.D, P.E, [t.y, t.z, t.n, t.M]), t.Cb(67, 278528, null, 0, P.k, [P.D], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), t.Sb(68, {
                    collapsed: 0
                }), (l()(), t.Xb(-1, null, ["Manual Configuration"])), (l()(), t.Db(70, 0, null, null, 11, "div", [], [
                    [2, "collapse", null],
                    [2, "show", null]
                ], null, null, null, null)), t.Cb(71, 16384, null, 0, y.m, [], {
                    collapsed: [0, "collapsed"]
                }, null), (l()(), t.Db(72, 0, null, null, 9, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (l()(), t.Db(73, 0, null, null, 8, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(74, 0, null, null, 1, "label", [
                    ["class", "pull-right"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Manual Configuration"])), (l()(), t.Db(76, 0, null, null, 5, "textarea", [
                    ["class", "form-control form-control-sm"],
                    ["rows", "5"]
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
                    var a = !0,
                        e = l.component;
                    return "input" === n && (a = !1 !== t.Pb(l, 77)._handleInput(u.target.value) && a), "blur" === n && (a = !1 !== t.Pb(l, 77).onTouched() && a), "compositionstart" === n && (a = !1 !== t.Pb(l, 77)._compositionStart() && a), "compositionend" === n && (a = !1 !== t.Pb(l, 77)._compositionEnd(u.target.value) && a), "ngModelChange" === n && (a = !1 !== (e.options.data.cisco_rs_manual = u) && a), a
                }), null, null)), t.Cb(77, 16384, null, 0, D.e, [t.M, t.n, [2, D.a]], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.e]), t.Cb(79, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(81, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null)], (function(l, n) {
                    var u = n.component;
                    l(n, 9, 0, u.options.data.cisco_rs_enable);
                    var a, e, o = l(n, 24, 0, null == (a = t.Yb(n, 22, 1, t.Pb(n, 23).transform(u.validation))) ? null : a.cisco_rs_privlvl);
                    l(n, 22, 0, "form-control form-control-sm", o), l(n, 28, 0, u.options.data.cisco_rs_privlvl), l(n, 33, 0, null == (e = t.Yb(n, 33, 0, t.Pb(n, 34).transform(u.validation))) ? null : e.cisco_rs_privlvl), l(n, 45, 0, u.options.data.cisco_rs_def_cmd), l(n, 58, 0, u.options.data.cisco_rs_def_attr);
                    var s = l(n, 68, 0, !u.notCollapsedMCG);
                    l(n, 67, 0, "card-title collapsed", s), l(n, 71, 0, !u.notCollapsedMCG), l(n, 79, 0, u.options.data.cisco_rs_manual)
                }), (function(l, n) {
                    var u = n.component;
                    l(n, 6, 0, t.Pb(n, 11).ngClassUntouched, t.Pb(n, 11).ngClassTouched, t.Pb(n, 11).ngClassPristine, t.Pb(n, 11).ngClassDirty, t.Pb(n, 11).ngClassValid, t.Pb(n, 11).ngClassInvalid, t.Pb(n, 11).ngClassPending), l(n, 20, 0, t.Pb(n, 30).ngClassUntouched, t.Pb(n, 30).ngClassTouched, t.Pb(n, 30).ngClassPristine, t.Pb(n, 30).ngClassDirty, t.Pb(n, 30).ngClassValid, t.Pb(n, 30).ngClassInvalid, t.Pb(n, 30).ngClassPending), l(n, 42, 0, t.Pb(n, 47).ngClassUntouched, t.Pb(n, 47).ngClassTouched, t.Pb(n, 47).ngClassPristine, t.Pb(n, 47).ngClassDirty, t.Pb(n, 47).ngClassValid, t.Pb(n, 47).ngClassInvalid, t.Pb(n, 47).ngClassPending), l(n, 55, 0, t.Pb(n, 60).ngClassUntouched, t.Pb(n, 60).ngClassTouched, t.Pb(n, 60).ngClassPristine, t.Pb(n, 60).ngClassDirty, t.Pb(n, 60).ngClassValid, t.Pb(n, 60).ngClassInvalid, t.Pb(n, 60).ngClassPending), l(n, 65, 0, !u.notCollapsedMCG), l(n, 70, 0, !0, !t.Pb(n, 71).collapsed), l(n, 76, 0, t.Pb(n, 81).ngClassUntouched, t.Pb(n, 81).ngClassTouched, t.Pb(n, 81).ngClassPristine, t.Pb(n, 81).ngClassDirty, t.Pb(n, 81).ngClassValid, t.Pb(n, 81).ngClassInvalid, t.Pb(n, 81).ngClassPending)
                }))
            }

            function I(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 10, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 9, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(2, 0, null, null, 8, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(3, 0, null, null, 6, "kt-field-general-list", [], null, [
                    [null, "returnData"]
                ], (function(l, n, u) {
                    var t = !0;
                    return "returnData" === n && (t = !1 !== l.component.setCmdSet(u) && t), t
                }), _.b, _.a)), t.Ub(512, null, P.D, P.E, [t.y, t.z, t.n, t.M]), t.Cb(5, 278528, null, 0, P.k, [P.D], {
                    ngClass: [0, "ngClass"]
                }, null), t.Rb(131072, P.b, [t.h]), t.Sb(7, {
                    "is-invalid": 0
                }), t.Cb(8, 114688, null, 0, k.a, [M.a], {
                    data: [0, "data"],
                    params: [1, "params"],
                    errors: [2, "errors"]
                }, {
                    returnData: "returnData"
                }), t.Rb(131072, P.b, [t.h]), (l()(), t.Db(10, 0, null, null, 0, "span", [
                    ["class", "form-text text-muted"]
                ], null, null, null, null, null))], (function(l, n) {
                    var u, a, e = n.component,
                        o = l(n, 7, 0, null == (u = t.Yb(n, 5, 0, t.Pb(n, 6).transform(e.validation))) ? null : u.cisco_rs_cmd);
                    l(n, 5, 0, o), l(n, 8, 0, e.options.data.cisco_rs_cmd, e.list.cisco_rs_cmd, null == (a = t.Yb(n, 8, 2, t.Pb(n, 9).transform(e.validation))) ? null : a.cisco_rs_cmd)
                }), null)
            }

            function X(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 12, "div", [
                    ["class", "form-group form-group-last"]
                ], null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 1, "label", [
                    ["for", "exampleTextarea"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Auto Commands"])), (l()(), t.Db(3, 0, null, null, 5, "textarea", [
                    ["class", "form-control"],
                    ["rows", "3"]
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
                    var a = !0,
                        e = l.component;
                    return "input" === n && (a = !1 !== t.Pb(l, 4)._handleInput(u.target.value) && a), "blur" === n && (a = !1 !== t.Pb(l, 4).onTouched() && a), "compositionstart" === n && (a = !1 !== t.Pb(l, 4)._compositionStart() && a), "compositionend" === n && (a = !1 !== t.Pb(l, 4)._compositionEnd(u.target.value) && a), "ngModelChange" === n && (a = !1 !== (e.options.data.cisco_rs_autocmd = u) && a), a
                }), null, null)), t.Cb(4, 16384, null, 0, D.e, [t.M, t.n, [2, D.a]], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.e]), t.Cb(6, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(8, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null), (l()(), t.Db(9, 0, null, null, 3, "span", [
                    ["class", "form-text text-muted"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["set semicolon sepparated commands, e.g. "])), (l()(), t.Db(11, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["show version; show clock"]))], (function(l, n) {
                    l(n, 6, 0, n.component.options.data.cisco_rs_autocmd)
                }), (function(l, n) {
                    l(n, 3, 0, t.Pb(n, 8).ngClassUntouched, t.Pb(n, 8).ngClassTouched, t.Pb(n, 8).ngClassPristine, t.Pb(n, 8).ngClassDirty, t.Pb(n, 8).ngClassValid, t.Pb(n, 8).ngClassInvalid, t.Pb(n, 8).ngClassPending)
                }))
            }

            function V(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 12, "div", [
                    ["class", "form-group form-group-last"]
                ], null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 1, "label", [
                    ["for", "exampleTextarea"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Nexus Roles"])), (l()(), t.Db(3, 0, null, null, 5, "textarea", [
                    ["class", "form-control"],
                    ["rows", "3"]
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
                    var a = !0,
                        e = l.component;
                    return "input" === n && (a = !1 !== t.Pb(l, 4)._handleInput(u.target.value) && a), "blur" === n && (a = !1 !== t.Pb(l, 4).onTouched() && a), "compositionstart" === n && (a = !1 !== t.Pb(l, 4)._compositionStart() && a), "compositionend" === n && (a = !1 !== t.Pb(l, 4)._compositionEnd(u.target.value) && a), "ngModelChange" === n && (a = !1 !== (e.options.data.cisco_rs_nexus_roles = u) && a), a
                }), null, null)), t.Cb(4, 16384, null, 0, D.e, [t.M, t.n, [2, D.a]], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.e]), t.Cb(6, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(8, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null), (l()(), t.Db(9, 0, null, null, 3, "span", [
                    ["class", "form-text text-muted"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["set space sepparated roles, e.g. "])), (l()(), t.Db(11, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["network-admin vdc-admin vdc-operator"]))], (function(l, n) {
                    l(n, 6, 0, n.component.options.data.cisco_rs_nexus_roles)
                }), (function(l, n) {
                    l(n, 3, 0, t.Pb(n, 8).ngClassUntouched, t.Pb(n, 8).ngClassTouched, t.Pb(n, 8).ngClassPristine, t.Pb(n, 8).ngClassDirty, t.Pb(n, 8).ngClassValid, t.Pb(n, 8).ngClassInvalid, t.Pb(n, 8).ngClassPending)
                }))
            }

            function O(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 26, "ngb-tabset", [
                    ["type", "pills"]
                ], null, null, null, o.k, o.f)), t.Cb(1, 2146304, null, 1, y.Y, [y.Z], {
                    type: [0, "type"]
                }, null), t.Vb(603979776, 1, {
                    tabs: 1
                }), (l()(), t.Db(3, 0, null, null, 5, "ngb-tab", [
                    ["title", "General"]
                ], null, null, null, null, null)), t.Cb(4, 2113536, [
                    [1, 4]
                ], 2, y.W, [], {
                    title: [0, "title"]
                }, null), t.Vb(603979776, 2, {
                    titleTpls: 1
                }), t.Vb(603979776, 3, {
                    contentTpls: 1
                }), (l()(), t.sb(0, null, null, 1, null, T)), t.Cb(8, 16384, [
                    [3, 4]
                ], 0, y.X, [t.U], null, null), (l()(), t.Db(9, 0, null, null, 5, "ngb-tab", [
                    ["title", "CMD Set"]
                ], null, null, null, null, null)), t.Cb(10, 2113536, [
                    [1, 4]
                ], 2, y.W, [], {
                    title: [0, "title"]
                }, null), t.Vb(603979776, 4, {
                    titleTpls: 1
                }), t.Vb(603979776, 5, {
                    contentTpls: 1
                }), (l()(), t.sb(0, null, null, 1, null, I)), t.Cb(14, 16384, [
                    [5, 4]
                ], 0, y.X, [t.U], null, null), (l()(), t.Db(15, 0, null, null, 5, "ngb-tab", [
                    ["title", "Auto CMD"]
                ], null, null, null, null, null)), t.Cb(16, 2113536, [
                    [1, 4]
                ], 2, y.W, [], {
                    title: [0, "title"]
                }, null), t.Vb(603979776, 6, {
                    titleTpls: 1
                }), t.Vb(603979776, 7, {
                    contentTpls: 1
                }), (l()(), t.sb(0, null, null, 1, null, X)), t.Cb(20, 16384, [
                    [7, 4]
                ], 0, y.X, [t.U], null, null), (l()(), t.Db(21, 0, null, null, 5, "ngb-tab", [
                    ["title", "Nexus Roles"]
                ], null, null, null, null, null)), t.Cb(22, 2113536, [
                    [1, 4]
                ], 2, y.W, [], {
                    title: [0, "title"]
                }, null), t.Vb(603979776, 8, {
                    titleTpls: 1
                }), t.Vb(603979776, 9, {
                    contentTpls: 1
                }), (l()(), t.sb(0, null, null, 1, null, V)), t.Cb(26, 16384, [
                    [9, 4]
                ], 0, y.X, [t.U], null, null)], (function(l, n) {
                    l(n, 1, 0, "pills"), l(n, 4, 0, "General"), l(n, 10, 0, "CMD Set"), l(n, 16, 0, "Auto CMD"), l(n, 22, 0, "Nexus Roles")
                }), null)
            }
            var Y = function() {
                    function l() {
                        this.wlc_roles = [{
                            title: "Admin (0)",
                            value: "0"
                        }, {
                            title: "LOBBY (2)",
                            value: "2"
                        }, {
                            title: "MONITOR (4)",
                            value: "4"
                        }, {
                            title: "WLAN (8)",
                            value: "8"
                        }, {
                            title: "CONTROLLER (10)",
                            value: "10"
                        }, {
                            title: "WIRELESS (20)",
                            value: "20"
                        }, {
                            title: "SECURITY (40)",
                            value: "40"
                        }, {
                            title: "MANAGEMENT (80)",
                            value: "80"
                        }, {
                            title: "COMMANDS (100)",
                            value: "100"
                        }], this.selected = []
                    }
                    return l.prototype.ngOnInit = function() {
                        this.selected = this.options.data.cisco_wlc_roles
                    }, l.prototype.selectRole = function(l) {
                        this.options.data.cisco_wlc_roles.push(l), console.log(this.options.data.cisco_wlc_roles)
                    }, l.prototype.deselectRole = function(l) {
                        this.options.data.cisco_wlc_roles.splice(l, 1)
                    }, l
                }(),
                E = t.Bb({
                    encapsulation: 0,
                    styles: [
                        [""]
                    ],
                    data: {}
                });

            function j(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 3, "option", [], null, [
                    [null, "click"]
                ], (function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== l.component.selectRole(l.parent.context.$implicit.value) && t), t
                }), null, null)), t.Cb(1, 147456, null, 0, D.t, [t.n, t.M, [8, null]], null, null), t.Cb(2, 147456, null, 0, D.C, [t.n, t.M, [8, null]], null, null), (l()(), t.Xb(3, null, ["", ""]))], null, (function(l, n) {
                    l(n, 3, 0, n.parent.context.$implicit.title)
                }))
            }

            function Z(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 2, null, null, null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 1, null, j)), t.Cb(2, 16384, null, 0, P.m, [t.Y, t.U], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t.sb(0, null, null, 0))], (function(l, n) {
                    l(n, 2, 0, !n.component.options.data.cisco_wlc_roles.includes(n.context.$implicit.value))
                }), null)
            }

            function A(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 3, "option", [], null, [
                    [null, "click"]
                ], (function(l, n, u) {
                    var t = !0,
                        a = l.component;
                    return "click" === n && (t = !1 !== a.deselectRole(a.selected.indexOf(l.parent.context.$implicit.value)) && t), t
                }), null, null)), t.Cb(1, 147456, null, 0, D.t, [t.n, t.M, [8, null]], null, null), t.Cb(2, 147456, null, 0, D.C, [t.n, t.M, [8, null]], null, null), (l()(), t.Xb(3, null, ["", ""]))], null, (function(l, n) {
                    l(n, 3, 0, n.parent.context.$implicit.title)
                }))
            }

            function N(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 2, null, null, null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 1, null, A)), t.Cb(2, 16384, null, 0, P.m, [t.Y, t.U], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t.sb(0, null, null, 0))], (function(l, n) {
                    l(n, 2, 0, n.component.options.data.cisco_wlc_roles.includes(n.context.$implicit.value))
                }), null)
            }

            function F(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 14, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 13, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(2, 0, null, null, 12, "div", [
                    ["class", "form-group row"]
                ], null, null, null, null, null)), (l()(), t.Db(3, 0, null, null, 9, "div", [
                    ["class", "col-2"]
                ], null, null, null, null, null)), (l()(), t.Db(4, 0, null, null, 8, "span", [
                    ["class", "kt-switch kt-switch--sm kt-switch--outline kt-switch--success"]
                ], null, null, null, null, null)), (l()(), t.Db(5, 0, null, null, 7, "label", [], null, null, null, null, null)), (l()(), t.Db(6, 0, null, null, 5, "input", [
                    ["checked", ""],
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
                    var a = !0,
                        e = l.component;
                    return "change" === n && (a = !1 !== t.Pb(l, 7).onChange(u.target.checked) && a), "blur" === n && (a = !1 !== t.Pb(l, 7).onTouched() && a), "ngModelChange" === n && (a = !1 !== (e.options.data.cisco_wlc_enable = u) && a), a
                }), null, null)), t.Cb(7, 16384, null, 0, D.b, [t.M, t.n], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.b]), t.Cb(9, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(11, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null), (l()(), t.Db(12, 0, null, null, 0, "span", [], null, null, null, null, null)), (l()(), t.Db(13, 0, null, null, 1, "label", [
                    ["class", "col-10 col-form-label"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Pattern Activated"])), (l()(), t.Db(15, 0, null, null, 14, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t.Db(16, 0, null, null, 7, "div", [
                    ["class", "form-group col-sm-5 col-md-4"]
                ], null, null, null, null, null)), (l()(), t.Db(17, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Role List"])), (l()(), t.Db(19, 0, null, null, 2, "select", [
                    ["class", "form-control"],
                    ["multiple", ""],
                    ["size", "10"]
                ], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 1, null, Z)), t.Cb(21, 278528, null, 0, P.l, [t.Y, t.U, t.y], {
                    ngForOf: [0, "ngForOf"]
                }, null), (l()(), t.Db(22, 0, null, null, 0, "input", [
                    ["data-default", ""],
                    ["data-pickup", "true"],
                    ["data-type", "input"],
                    ["name", "cisco_wlc_roles"],
                    ["type", "hidden"]
                ], null, null, null, null, null)), (l()(), t.Db(23, 0, null, null, 0, "input", [
                    ["name", "cisco_wlc_roles_native"],
                    ["type", "hidden"]
                ], null, null, null, null, null)), (l()(), t.Db(24, 0, null, null, 5, "div", [
                    ["class", "form-group col-md-4 col-sm-5"]
                ], null, null, null, null, null)), (l()(), t.Db(25, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Selected Roles"])), (l()(), t.Db(27, 0, null, null, 2, "select", [
                    ["class", "form-control"],
                    ["multiple", ""],
                    ["size", "10"]
                ], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 1, null, N)), t.Cb(29, 278528, null, 0, P.l, [t.Y, t.U, t.y], {
                    ngForOf: [0, "ngForOf"]
                }, null), (l()(), t.Db(30, 0, null, null, 19, "div", [
                    ["class", "accordion accordion-light  accordion-toggle-arrow"]
                ], null, null, null, null, null)), (l()(), t.Db(31, 0, null, null, 18, "div", [
                    ["class", "card"]
                ], null, null, null, null, null)), (l()(), t.Db(32, 0, null, null, 5, "div", [
                    ["class", "card-header"]
                ], null, null, null, null, null)), (l()(), t.Db(33, 0, null, null, 4, "div", [
                    ["class", "card-title collapsed"],
                    ["data-toggle", "collapse"]
                ], [
                    [1, "aria-expanded", 0]
                ], [
                    [null, "click"]
                ], (function(l, n, u) {
                    var t = !0,
                        a = l.component;
                    return "click" === n && (t = 0 != (a.notCollapsedMCWLC = !a.notCollapsedMCWLC) && t), t
                }), null, null)), t.Ub(512, null, P.D, P.E, [t.y, t.z, t.n, t.M]), t.Cb(35, 278528, null, 0, P.k, [P.D], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), t.Sb(36, {
                    collapsed: 0
                }), (l()(), t.Xb(-1, null, ["Manual Configuration"])), (l()(), t.Db(38, 0, null, null, 11, "div", [], [
                    [2, "collapse", null],
                    [2, "show", null]
                ], null, null, null, null)), t.Cb(39, 16384, null, 0, y.m, [], {
                    collapsed: [0, "collapsed"]
                }, null), (l()(), t.Db(40, 0, null, null, 9, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (l()(), t.Db(41, 0, null, null, 8, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(42, 0, null, null, 1, "label", [
                    ["class", "pull-right"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Manual Configuration"])), (l()(), t.Db(44, 0, null, null, 5, "textarea", [
                    ["class", "form-control form-control-sm"],
                    ["rows", "5"]
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
                    var a = !0,
                        e = l.component;
                    return "input" === n && (a = !1 !== t.Pb(l, 45)._handleInput(u.target.value) && a), "blur" === n && (a = !1 !== t.Pb(l, 45).onTouched() && a), "compositionstart" === n && (a = !1 !== t.Pb(l, 45)._compositionStart() && a), "compositionend" === n && (a = !1 !== t.Pb(l, 45)._compositionEnd(u.target.value) && a), "ngModelChange" === n && (a = !1 !== (e.options.data.cisco_wlc_manual = u) && a), a
                }), null, null)), t.Cb(45, 16384, null, 0, D.e, [t.M, t.n, [2, D.a]], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.e]), t.Cb(47, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(49, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null)], (function(l, n) {
                    var u = n.component;
                    l(n, 9, 0, u.options.data.cisco_wlc_enable), l(n, 21, 0, u.wlc_roles), l(n, 29, 0, u.wlc_roles);
                    var t = l(n, 36, 0, !u.notCollapsedMCWLC);
                    l(n, 35, 0, "card-title collapsed", t), l(n, 39, 0, !u.notCollapsedMCWLC), l(n, 47, 0, u.options.data.cisco_wlc_manual)
                }), (function(l, n) {
                    var u = n.component;
                    l(n, 6, 0, t.Pb(n, 11).ngClassUntouched, t.Pb(n, 11).ngClassTouched, t.Pb(n, 11).ngClassPristine, t.Pb(n, 11).ngClassDirty, t.Pb(n, 11).ngClassValid, t.Pb(n, 11).ngClassInvalid, t.Pb(n, 11).ngClassPending), l(n, 33, 0, !u.notCollapsedMCWLC), l(n, 38, 0, !0, !t.Pb(n, 39).collapsed), l(n, 44, 0, t.Pb(n, 49).ngClassUntouched, t.Pb(n, 49).ngClassTouched, t.Pb(n, 49).ngClassPristine, t.Pb(n, 49).ngClassDirty, t.Pb(n, 49).ngClassValid, t.Pb(n, 49).ngClassInvalid, t.Pb(n, 49).ngClassPending)
                }))
            }
            var R = function() {
                    function l() {
                        this.list = {
                            junos_cmd_ao: new w.a("cmd_junos"),
                            junos_cmd_do: new w.a("cmd_junos"),
                            junos_cmd_ac: new w.a("cmd_junos"),
                            junos_cmd_dc: new w.a("cmd_junos")
                        }
                    }
                    return l.prototype.ngOnInit = function() {
                        this.list.junos_cmd_do.title = "Deny Command Sets", this.list.junos_cmd_dc.title = "Deny Command Sets"
                    }, l.prototype.setAOSet = function(l) {
                        this.options.data.junos_cmd_ao = l
                    }, l.prototype.setDOSet = function(l) {
                        this.options.data.junos_cmd_do = l
                    }, l.prototype.setACSet = function(l) {
                        this.options.data.junos_cmd_ac = l
                    }, l.prototype.setDCSet = function(l) {
                        this.options.data.junos_cmd_dc = l
                    }, l
                }(),
                z = t.Bb({
                    encapsulation: 0,
                    styles: [
                        [""]
                    ],
                    data: {}
                });

            function G(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), t.Xb(1, null, ["", ""]))], null, (function(l, n) {
                    l(n, 1, 0, n.context.$implicit)
                }))
            }

            function W(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 14, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 13, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(2, 0, null, null, 12, "div", [
                    ["class", "form-group row"]
                ], null, null, null, null, null)), (l()(), t.Db(3, 0, null, null, 9, "div", [
                    ["class", "col-2"]
                ], null, null, null, null, null)), (l()(), t.Db(4, 0, null, null, 8, "span", [
                    ["class", "kt-switch kt-switch--sm kt-switch--outline kt-switch--success"]
                ], null, null, null, null, null)), (l()(), t.Db(5, 0, null, null, 7, "label", [], null, null, null, null, null)), (l()(), t.Db(6, 0, null, null, 5, "input", [
                    ["checked", ""],
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
                    var a = !0,
                        e = l.component;
                    return "change" === n && (a = !1 !== t.Pb(l, 7).onChange(u.target.checked) && a), "blur" === n && (a = !1 !== t.Pb(l, 7).onTouched() && a), "ngModelChange" === n && (a = !1 !== (e.options.data.junos_enable = u) && a), a
                }), null, null)), t.Cb(7, 16384, null, 0, D.b, [t.M, t.n], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.b]), t.Cb(9, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(11, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null), (l()(), t.Db(12, 0, null, null, 0, "span", [], null, null, null, null, null)), (l()(), t.Db(13, 0, null, null, 1, "label", [
                    ["class", "col-10 col-form-label"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Pattern Activated"])), (l()(), t.Db(15, 0, null, null, 20, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t.Db(16, 0, null, null, 19, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(17, 0, null, null, 18, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(18, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Local User Name"])), (l()(), t.Db(20, 0, null, null, 9, "input", [
                    ["class", "form-control form-control-sm"],
                    ["placeholder", "local-user-name"],
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
                    var a = !0,
                        e = l.component;
                    return "input" === n && (a = !1 !== t.Pb(l, 25)._handleInput(u.target.value) && a), "blur" === n && (a = !1 !== t.Pb(l, 25).onTouched() && a), "compositionstart" === n && (a = !1 !== t.Pb(l, 25)._compositionStart() && a), "compositionend" === n && (a = !1 !== t.Pb(l, 25)._compositionEnd(u.target.value) && a), "ngModelChange" === n && (a = !1 !== (e.options.data.junos_username = u) && a), a
                }), null, null)), t.Ub(512, null, P.D, P.E, [t.y, t.z, t.n, t.M]), t.Cb(22, 278528, null, 0, P.k, [P.D], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), t.Rb(131072, P.b, [t.h]), t.Sb(24, {
                    "is-invalid": 0
                }), t.Cb(25, 16384, null, 0, D.e, [t.M, t.n, [2, D.a]], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.e]), t.Cb(27, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(29, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null), (l()(), t.Db(30, 0, null, null, 3, "div", [
                    ["class", "invalid-feedback"]
                ], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 2, null, G)), t.Cb(32, 278528, null, 0, P.l, [t.Y, t.U, t.y], {
                    ngForOf: [0, "ngForOf"]
                }, null), t.Rb(131072, P.b, [t.h]), (l()(), t.Db(34, 0, null, null, 1, "span", [
                    ["class", "form-text text-muted"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["local-user-name attribute"])), (l()(), t.Db(36, 0, null, null, 19, "div", [
                    ["class", "accordion accordion-light  accordion-toggle-arrow"]
                ], null, null, null, null, null)), (l()(), t.Db(37, 0, null, null, 18, "div", [
                    ["class", "card"]
                ], null, null, null, null, null)), (l()(), t.Db(38, 0, null, null, 5, "div", [
                    ["class", "card-header"]
                ], null, null, null, null, null)), (l()(), t.Db(39, 0, null, null, 4, "div", [
                    ["class", "card-title collapsed"],
                    ["data-toggle", "collapse"]
                ], [
                    [1, "aria-expanded", 0]
                ], [
                    [null, "click"]
                ], (function(l, n, u) {
                    var t = !0,
                        a = l.component;
                    return "click" === n && (t = 0 != (a.notCollapsedMJOS = !a.notCollapsedMJOS) && t), t
                }), null, null)), t.Ub(512, null, P.D, P.E, [t.y, t.z, t.n, t.M]), t.Cb(41, 278528, null, 0, P.k, [P.D], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), t.Sb(42, {
                    collapsed: 0
                }), (l()(), t.Xb(-1, null, ["Manual Configuration"])), (l()(), t.Db(44, 0, null, null, 11, "div", [], [
                    [2, "collapse", null],
                    [2, "show", null]
                ], null, null, null, null)), t.Cb(45, 16384, null, 0, y.m, [], {
                    collapsed: [0, "collapsed"]
                }, null), (l()(), t.Db(46, 0, null, null, 9, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (l()(), t.Db(47, 0, null, null, 8, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(48, 0, null, null, 1, "label", [
                    ["class", "pull-right"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Manual Configuration"])), (l()(), t.Db(50, 0, null, null, 5, "textarea", [
                    ["class", "form-control form-control-sm"],
                    ["rows", "5"]
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
                    var a = !0,
                        e = l.component;
                    return "input" === n && (a = !1 !== t.Pb(l, 51)._handleInput(u.target.value) && a), "blur" === n && (a = !1 !== t.Pb(l, 51).onTouched() && a), "compositionstart" === n && (a = !1 !== t.Pb(l, 51)._compositionStart() && a), "compositionend" === n && (a = !1 !== t.Pb(l, 51)._compositionEnd(u.target.value) && a), "ngModelChange" === n && (a = !1 !== (e.options.data.junos_manual = u) && a), a
                }), null, null)), t.Cb(51, 16384, null, 0, D.e, [t.M, t.n, [2, D.a]], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.e]), t.Cb(53, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(55, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null)], (function(l, n) {
                    var u = n.component;
                    l(n, 9, 0, u.options.data.junos_enable);
                    var a, e, o = l(n, 24, 0, null == (a = t.Yb(n, 22, 1, t.Pb(n, 23).transform(u.validation))) ? null : a.junos_username);
                    l(n, 22, 0, "form-control form-control-sm", o), l(n, 27, 0, u.options.data.junos_username), l(n, 32, 0, null == (e = t.Yb(n, 32, 0, t.Pb(n, 33).transform(u.validation))) ? null : e.junos_username);
                    var s = l(n, 42, 0, !u.notCollapsedMJOS);
                    l(n, 41, 0, "card-title collapsed", s), l(n, 45, 0, !u.notCollapsedMJOS), l(n, 53, 0, u.options.data.junos_manual)
                }), (function(l, n) {
                    var u = n.component;
                    l(n, 6, 0, t.Pb(n, 11).ngClassUntouched, t.Pb(n, 11).ngClassTouched, t.Pb(n, 11).ngClassPristine, t.Pb(n, 11).ngClassDirty, t.Pb(n, 11).ngClassValid, t.Pb(n, 11).ngClassInvalid, t.Pb(n, 11).ngClassPending), l(n, 20, 0, t.Pb(n, 29).ngClassUntouched, t.Pb(n, 29).ngClassTouched, t.Pb(n, 29).ngClassPristine, t.Pb(n, 29).ngClassDirty, t.Pb(n, 29).ngClassValid, t.Pb(n, 29).ngClassInvalid, t.Pb(n, 29).ngClassPending), l(n, 39, 0, !u.notCollapsedMJOS), l(n, 44, 0, !0, !t.Pb(n, 45).collapsed), l(n, 50, 0, t.Pb(n, 55).ngClassUntouched, t.Pb(n, 55).ngClassTouched, t.Pb(n, 55).ngClassPristine, t.Pb(n, 55).ngClassDirty, t.Pb(n, 55).ngClassValid, t.Pb(n, 55).ngClassInvalid, t.Pb(n, 55).ngClassPending)
                }))
            }

            function H(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 30, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 6, "div", [
                    ["class", "col-12"]
                ], null, null, null, null, null)), (l()(), t.Db(2, 0, null, null, 5, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(3, 0, null, null, 4, "small", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Here you can allow/deny commands inside of operational mode ( "])), (l()(), t.Db(5, 0, null, null, 1, "kbd", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, [">"])), (l()(), t.Xb(-1, null, [" )."])), (l()(), t.Db(8, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Db(9, 0, null, null, 10, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(10, 0, null, null, 9, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(11, 0, null, null, 6, "kt-field-general-list", [], null, [
                    [null, "returnData"]
                ], (function(l, n, u) {
                    var t = !0;
                    return "returnData" === n && (t = !1 !== l.component.setAOSet(u) && t), t
                }), _.b, _.a)), t.Ub(512, null, P.D, P.E, [t.y, t.z, t.n, t.M]), t.Cb(13, 278528, null, 0, P.k, [P.D], {
                    ngClass: [0, "ngClass"]
                }, null), t.Rb(131072, P.b, [t.h]), t.Sb(15, {
                    "is-invalid": 0
                }), t.Cb(16, 114688, null, 0, k.a, [M.a], {
                    data: [0, "data"],
                    params: [1, "params"],
                    errors: [2, "errors"]
                }, {
                    returnData: "returnData"
                }), t.Rb(131072, P.b, [t.h]), (l()(), t.Db(18, 0, null, null, 1, "span", [
                    ["class", "form-text text-muted"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["list of command sets, that will be used to allow commands inside of the operation mode"])), (l()(), t.Db(20, 0, null, null, 10, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(21, 0, null, null, 9, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(22, 0, null, null, 6, "kt-field-general-list", [], null, [
                    [null, "returnData"]
                ], (function(l, n, u) {
                    var t = !0;
                    return "returnData" === n && (t = !1 !== l.component.setDOSet(u) && t), t
                }), _.b, _.a)), t.Ub(512, null, P.D, P.E, [t.y, t.z, t.n, t.M]), t.Cb(24, 278528, null, 0, P.k, [P.D], {
                    ngClass: [0, "ngClass"]
                }, null), t.Rb(131072, P.b, [t.h]), t.Sb(26, {
                    "is-invalid": 0
                }), t.Cb(27, 114688, null, 0, k.a, [M.a], {
                    data: [0, "data"],
                    params: [1, "params"],
                    errors: [2, "errors"]
                }, {
                    returnData: "returnData"
                }), t.Rb(131072, P.b, [t.h]), (l()(), t.Db(29, 0, null, null, 1, "span", [
                    ["class", "form-text text-muted"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["list of command sets, that will be used to deny commands inside of the operation mode"]))], (function(l, n) {
                    var u, a, e = n.component,
                        o = l(n, 15, 0, null == (u = t.Yb(n, 13, 0, t.Pb(n, 14).transform(e.validation))) ? null : u.junos_cmd_ao);
                    l(n, 13, 0, o), l(n, 16, 0, e.options.data.junos_cmd_ao, e.list.junos_cmd_ao, null == (a = t.Yb(n, 16, 2, t.Pb(n, 17).transform(e.validation))) ? null : a.junos_cmd_ao);
                    var s, i, r = l(n, 26, 0, null == (s = t.Yb(n, 24, 0, t.Pb(n, 25).transform(e.validation))) ? null : s.junos_cmd_do);
                    l(n, 24, 0, r), l(n, 27, 0, e.options.data.junos_cmd_do, e.list.junos_cmd_do, null == (i = t.Yb(n, 27, 2, t.Pb(n, 28).transform(e.validation))) ? null : i.junos_cmd_do)
                }), null)
            }

            function L(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 29, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 6, "div", [
                    ["class", "col-12"]
                ], null, null, null, null, null)), (l()(), t.Db(2, 0, null, null, 5, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(3, 0, null, null, 4, "small", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Here you can allow/deny commands inside of configuration mode ( "])), (l()(), t.Db(5, 0, null, null, 1, "kbd", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["#"])), (l()(), t.Xb(-1, null, [" )."])), (l()(), t.Db(8, 0, null, null, 10, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(9, 0, null, null, 9, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(10, 0, null, null, 6, "kt-field-general-list", [], null, [
                    [null, "returnData"]
                ], (function(l, n, u) {
                    var t = !0;
                    return "returnData" === n && (t = !1 !== l.component.setACSet(u) && t), t
                }), _.b, _.a)), t.Ub(512, null, P.D, P.E, [t.y, t.z, t.n, t.M]), t.Cb(12, 278528, null, 0, P.k, [P.D], {
                    ngClass: [0, "ngClass"]
                }, null), t.Rb(131072, P.b, [t.h]), t.Sb(14, {
                    "is-invalid": 0
                }), t.Cb(15, 114688, null, 0, k.a, [M.a], {
                    data: [0, "data"],
                    params: [1, "params"],
                    errors: [2, "errors"]
                }, {
                    returnData: "returnData"
                }), t.Rb(131072, P.b, [t.h]), (l()(), t.Db(17, 0, null, null, 1, "span", [
                    ["class", "form-text text-muted"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["list of command sets, that will be used to allow commands inside of the configuration mode"])), (l()(), t.Db(19, 0, null, null, 10, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(20, 0, null, null, 9, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(21, 0, null, null, 6, "kt-field-general-list", [], null, [
                    [null, "returnData"]
                ], (function(l, n, u) {
                    var t = !0;
                    return "returnData" === n && (t = !1 !== l.component.setDCSet(u) && t), t
                }), _.b, _.a)), t.Ub(512, null, P.D, P.E, [t.y, t.z, t.n, t.M]), t.Cb(23, 278528, null, 0, P.k, [P.D], {
                    ngClass: [0, "ngClass"]
                }, null), t.Rb(131072, P.b, [t.h]), t.Sb(25, {
                    "is-invalid": 0
                }), t.Cb(26, 114688, null, 0, k.a, [M.a], {
                    data: [0, "data"],
                    params: [1, "params"],
                    errors: [2, "errors"]
                }, {
                    returnData: "returnData"
                }), t.Rb(131072, P.b, [t.h]), (l()(), t.Db(28, 0, null, null, 1, "span", [
                    ["class", "form-text text-muted"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["list of command sets, that will be used to deny commands inside of the configuration mode"]))], (function(l, n) {
                    var u, a, e = n.component,
                        o = l(n, 14, 0, null == (u = t.Yb(n, 12, 0, t.Pb(n, 13).transform(e.validation))) ? null : u.junos_cmd_ac);
                    l(n, 12, 0, o), l(n, 15, 0, e.options.data.junos_cmd_ac, e.list.junos_cmd_ac, null == (a = t.Yb(n, 15, 2, t.Pb(n, 16).transform(e.validation))) ? null : a.junos_cmd_ac);
                    var s, i, r = l(n, 25, 0, null == (s = t.Yb(n, 23, 0, t.Pb(n, 24).transform(e.validation))) ? null : s.junos_cmd_dc);
                    l(n, 23, 0, r), l(n, 26, 0, e.options.data.junos_cmd_dc, e.list.junos_cmd_dc, null == (i = t.Yb(n, 26, 2, t.Pb(n, 27).transform(e.validation))) ? null : i.junos_cmd_dc)
                }), null)
            }

            function B(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 20, "ngb-tabset", [
                    ["type", "pills"]
                ], null, null, null, o.k, o.f)), t.Cb(1, 2146304, null, 1, y.Y, [y.Z], {
                    type: [0, "type"]
                }, null), t.Vb(603979776, 1, {
                    tabs: 1
                }), (l()(), t.Db(3, 0, null, null, 5, "ngb-tab", [
                    ["title", "General"]
                ], null, null, null, null, null)), t.Cb(4, 2113536, [
                    [1, 4]
                ], 2, y.W, [], {
                    title: [0, "title"]
                }, null), t.Vb(603979776, 2, {
                    titleTpls: 1
                }), t.Vb(603979776, 3, {
                    contentTpls: 1
                }), (l()(), t.sb(0, null, null, 1, null, W)), t.Cb(8, 16384, [
                    [3, 4]
                ], 0, y.X, [t.U], null, null), (l()(), t.Db(9, 0, null, null, 5, "ngb-tab", [
                    ["title", "Operational mode"]
                ], null, null, null, null, null)), t.Cb(10, 2113536, [
                    [1, 4]
                ], 2, y.W, [], {
                    title: [0, "title"]
                }, null), t.Vb(603979776, 4, {
                    titleTpls: 1
                }), t.Vb(603979776, 5, {
                    contentTpls: 1
                }), (l()(), t.sb(0, null, null, 1, null, H)), t.Cb(14, 16384, [
                    [5, 4]
                ], 0, y.X, [t.U], null, null), (l()(), t.Db(15, 0, null, null, 5, "ngb-tab", [
                    ["title", "Configuration mode"]
                ], null, null, null, null, null)), t.Cb(16, 2113536, [
                    [1, 4]
                ], 2, y.W, [], {
                    title: [0, "title"]
                }, null), t.Vb(603979776, 6, {
                    titleTpls: 1
                }), t.Vb(603979776, 7, {
                    contentTpls: 1
                }), (l()(), t.sb(0, null, null, 1, null, L)), t.Cb(20, 16384, [
                    [7, 4]
                ], 0, y.X, [t.U], null, null)], (function(l, n) {
                    l(n, 1, 0, "pills"), l(n, 4, 0, "General"), l(n, 10, 0, "Operational mode"), l(n, 16, 0, "Configuration mode")
                }), null)
            }
            var $ = function() {
                    function l() {
                        this.list = {
                            h3c_cmd: new w.a("cmd_general")
                        }
                    }
                    return l.prototype.ngOnInit = function() {}, l.prototype.setCmdSet = function(l) {
                        this.options.data.h3c_cmd = l
                    }, l
                }(),
                J = t.Bb({
                    encapsulation: 0,
                    styles: [
                        [""]
                    ],
                    data: {}
                });

            function q(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), t.Xb(1, null, ["", ""]))], null, (function(l, n) {
                    l(n, 1, 0, n.context.$implicit)
                }))
            }

            function K(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 14, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 13, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(2, 0, null, null, 12, "div", [
                    ["class", "form-group row"]
                ], null, null, null, null, null)), (l()(), t.Db(3, 0, null, null, 9, "div", [
                    ["class", "col-2"]
                ], null, null, null, null, null)), (l()(), t.Db(4, 0, null, null, 8, "span", [
                    ["class", "kt-switch kt-switch--sm kt-switch--outline kt-switch--success"]
                ], null, null, null, null, null)), (l()(), t.Db(5, 0, null, null, 7, "label", [], null, null, null, null, null)), (l()(), t.Db(6, 0, null, null, 5, "input", [
                    ["checked", ""],
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
                    var a = !0,
                        e = l.component;
                    return "change" === n && (a = !1 !== t.Pb(l, 7).onChange(u.target.checked) && a), "blur" === n && (a = !1 !== t.Pb(l, 7).onTouched() && a), "ngModelChange" === n && (a = !1 !== (e.options.data.h3c_enable = u) && a), a
                }), null, null)), t.Cb(7, 16384, null, 0, D.b, [t.M, t.n], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.b]), t.Cb(9, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(11, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null), (l()(), t.Db(12, 0, null, null, 0, "span", [], null, null, null, null, null)), (l()(), t.Db(13, 0, null, null, 1, "label", [
                    ["class", "col-10 col-form-label"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Pattern Activated"])), (l()(), t.Db(15, 0, null, null, 46, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t.Db(16, 0, null, null, 19, "div", [
                    ["class", "col-4"]
                ], null, null, null, null, null)), (l()(), t.Db(17, 0, null, null, 18, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(18, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Privilege Level"])), (l()(), t.Db(20, 0, null, null, 10, "input", [
                    ["class", "form-control form-control-sm"],
                    ["placeholder", "Privilege Level"],
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
                    var a = !0,
                        e = l.component;
                    return "input" === n && (a = !1 !== t.Pb(l, 25)._handleInput(u.target.value) && a), "blur" === n && (a = !1 !== t.Pb(l, 25).onTouched() && a), "compositionstart" === n && (a = !1 !== t.Pb(l, 25)._compositionStart() && a), "compositionend" === n && (a = !1 !== t.Pb(l, 25)._compositionEnd(u.target.value) && a), "change" === n && (a = !1 !== t.Pb(l, 26).onChange(u.target.value) && a), "input" === n && (a = !1 !== t.Pb(l, 26).onChange(u.target.value) && a), "blur" === n && (a = !1 !== t.Pb(l, 26).onTouched() && a), "ngModelChange" === n && (a = !1 !== (e.options.data.h3c_privlvl = u) && a), a
                }), null, null)), t.Ub(512, null, P.D, P.E, [t.y, t.z, t.n, t.M]), t.Cb(22, 278528, null, 0, P.k, [P.D], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), t.Rb(131072, P.b, [t.h]), t.Sb(24, {
                    "is-invalid": 0
                }), t.Cb(25, 16384, null, 0, D.e, [t.M, t.n, [2, D.a]], null, null), t.Cb(26, 16384, null, 0, D.u, [t.M, t.n], null, null), t.Ub(1024, null, D.n, (function(l, n) {
                    return [l, n]
                }), [D.e, D.u]), t.Cb(28, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(30, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null), (l()(), t.Db(31, 0, null, null, 3, "div", [
                    ["class", "invalid-feedback"]
                ], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 2, null, q)), t.Cb(33, 278528, null, 0, P.l, [t.Y, t.U, t.y], {
                    ngForOf: [0, "ngForOf"]
                }, null), t.Rb(131072, P.b, [t.h]), (l()(), t.Db(35, 0, null, null, 0, "span", [
                    ["class", "form-text text-muted"]
                ], null, null, null, null, null)), (l()(), t.Db(36, 0, null, null, 12, "div", [
                    ["class", "col-4"]
                ], null, null, null, null, null)), (l()(), t.Db(37, 0, null, null, 11, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(38, 0, null, null, 1, "label", [
                    ["style", "width: 100%;"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Default command"])), (l()(), t.Db(40, 0, null, null, 8, "span", [
                    ["class", "kt-switch kt-switch--icon kt-switch--outline kt-switch--success"]
                ], null, null, null, null, null)), (l()(), t.Db(41, 0, null, null, 7, "label", [], null, null, null, null, null)), (l()(), t.Db(42, 0, null, null, 5, "input", [
                    ["checked", ""],
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
                    var a = !0,
                        e = l.component;
                    return "change" === n && (a = !1 !== t.Pb(l, 43).onChange(u.target.checked) && a), "blur" === n && (a = !1 !== t.Pb(l, 43).onTouched() && a), "ngModelChange" === n && (a = !1 !== (e.options.data.h3c_def_cmd = u) && a), a
                }), null, null)), t.Cb(43, 16384, null, 0, D.b, [t.M, t.n], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.b]), t.Cb(45, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(47, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null), (l()(), t.Db(48, 0, null, null, 0, "span", [], null, null, null, null, null)), (l()(), t.Db(49, 0, null, null, 12, "div", [
                    ["class", "col-4"]
                ], null, null, null, null, null)), (l()(), t.Db(50, 0, null, null, 11, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(51, 0, null, null, 1, "label", [
                    ["style", "width: 100%;"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Default attribute"])), (l()(), t.Db(53, 0, null, null, 8, "span", [
                    ["class", "kt-switch kt-switch--icon kt-switch--outline kt-switch--success"]
                ], null, null, null, null, null)), (l()(), t.Db(54, 0, null, null, 7, "label", [], null, null, null, null, null)), (l()(), t.Db(55, 0, null, null, 5, "input", [
                    ["checked", ""],
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
                    var a = !0,
                        e = l.component;
                    return "change" === n && (a = !1 !== t.Pb(l, 56).onChange(u.target.checked) && a), "blur" === n && (a = !1 !== t.Pb(l, 56).onTouched() && a), "ngModelChange" === n && (a = !1 !== (e.options.data.h3c_def_attr = u) && a), a
                }), null, null)), t.Cb(56, 16384, null, 0, D.b, [t.M, t.n], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.b]), t.Cb(58, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(60, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null), (l()(), t.Db(61, 0, null, null, 0, "span", [], null, null, null, null, null)), (l()(), t.Db(62, 0, null, null, 19, "div", [
                    ["class", "accordion accordion-light  accordion-toggle-arrow"]
                ], null, null, null, null, null)), (l()(), t.Db(63, 0, null, null, 18, "div", [
                    ["class", "card"]
                ], null, null, null, null, null)), (l()(), t.Db(64, 0, null, null, 5, "div", [
                    ["class", "card-header"]
                ], null, null, null, null, null)), (l()(), t.Db(65, 0, null, null, 4, "div", [
                    ["class", "card-title collapsed"],
                    ["data-toggle", "collapse"]
                ], [
                    [1, "aria-expanded", 0]
                ], [
                    [null, "click"]
                ], (function(l, n, u) {
                    var t = !0,
                        a = l.component;
                    return "click" === n && (t = 0 != (a.notCollapsedMH3C = !a.notCollapsedMH3C) && t), t
                }), null, null)), t.Ub(512, null, P.D, P.E, [t.y, t.z, t.n, t.M]), t.Cb(67, 278528, null, 0, P.k, [P.D], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), t.Sb(68, {
                    collapsed: 0
                }), (l()(), t.Xb(-1, null, ["Manual Configuration"])), (l()(), t.Db(70, 0, null, null, 11, "div", [], [
                    [2, "collapse", null],
                    [2, "show", null]
                ], null, null, null, null)), t.Cb(71, 16384, null, 0, y.m, [], {
                    collapsed: [0, "collapsed"]
                }, null), (l()(), t.Db(72, 0, null, null, 9, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (l()(), t.Db(73, 0, null, null, 8, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(74, 0, null, null, 1, "label", [
                    ["class", "pull-right"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Manual Configuration"])), (l()(), t.Db(76, 0, null, null, 5, "textarea", [
                    ["class", "form-control form-control-sm"],
                    ["rows", "5"]
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
                    var a = !0,
                        e = l.component;
                    return "input" === n && (a = !1 !== t.Pb(l, 77)._handleInput(u.target.value) && a), "blur" === n && (a = !1 !== t.Pb(l, 77).onTouched() && a), "compositionstart" === n && (a = !1 !== t.Pb(l, 77)._compositionStart() && a), "compositionend" === n && (a = !1 !== t.Pb(l, 77)._compositionEnd(u.target.value) && a), "ngModelChange" === n && (a = !1 !== (e.options.data.h3c_manual = u) && a), a
                }), null, null)), t.Cb(77, 16384, null, 0, D.e, [t.M, t.n, [2, D.a]], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.e]), t.Cb(79, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(81, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null)], (function(l, n) {
                    var u = n.component;
                    l(n, 9, 0, u.options.data.h3c_enable);
                    var a, e, o = l(n, 24, 0, null == (a = t.Yb(n, 22, 1, t.Pb(n, 23).transform(u.validation))) ? null : a.h3c_privlvl);
                    l(n, 22, 0, "form-control form-control-sm", o), l(n, 28, 0, u.options.data.h3c_privlvl), l(n, 33, 0, null == (e = t.Yb(n, 33, 0, t.Pb(n, 34).transform(u.validation))) ? null : e.h3c_privlvl), l(n, 45, 0, u.options.data.h3c_def_cmd), l(n, 58, 0, u.options.data.h3c_def_attr);
                    var s = l(n, 68, 0, !u.notCollapsedMH3C);
                    l(n, 67, 0, "card-title collapsed", s), l(n, 71, 0, !u.notCollapsedMH3C), l(n, 79, 0, u.options.data.h3c_manual)
                }), (function(l, n) {
                    var u = n.component;
                    l(n, 6, 0, t.Pb(n, 11).ngClassUntouched, t.Pb(n, 11).ngClassTouched, t.Pb(n, 11).ngClassPristine, t.Pb(n, 11).ngClassDirty, t.Pb(n, 11).ngClassValid, t.Pb(n, 11).ngClassInvalid, t.Pb(n, 11).ngClassPending), l(n, 20, 0, t.Pb(n, 30).ngClassUntouched, t.Pb(n, 30).ngClassTouched, t.Pb(n, 30).ngClassPristine, t.Pb(n, 30).ngClassDirty, t.Pb(n, 30).ngClassValid, t.Pb(n, 30).ngClassInvalid, t.Pb(n, 30).ngClassPending), l(n, 42, 0, t.Pb(n, 47).ngClassUntouched, t.Pb(n, 47).ngClassTouched, t.Pb(n, 47).ngClassPristine, t.Pb(n, 47).ngClassDirty, t.Pb(n, 47).ngClassValid, t.Pb(n, 47).ngClassInvalid, t.Pb(n, 47).ngClassPending), l(n, 55, 0, t.Pb(n, 60).ngClassUntouched, t.Pb(n, 60).ngClassTouched, t.Pb(n, 60).ngClassPristine, t.Pb(n, 60).ngClassDirty, t.Pb(n, 60).ngClassValid, t.Pb(n, 60).ngClassInvalid, t.Pb(n, 60).ngClassPending), l(n, 65, 0, !u.notCollapsedMH3C), l(n, 70, 0, !0, !t.Pb(n, 71).collapsed), l(n, 76, 0, t.Pb(n, 81).ngClassUntouched, t.Pb(n, 81).ngClassTouched, t.Pb(n, 81).ngClassPristine, t.Pb(n, 81).ngClassDirty, t.Pb(n, 81).ngClassValid, t.Pb(n, 81).ngClassInvalid, t.Pb(n, 81).ngClassPending)
                }))
            }

            function Q(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 10, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 9, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(2, 0, null, null, 8, "div", [
                    ["class", "form-group usergroup-list"]
                ], null, null, null, null, null)), (l()(), t.Db(3, 0, null, null, 6, "kt-field-general-list", [], null, [
                    [null, "returnData"]
                ], (function(l, n, u) {
                    var t = !0;
                    return "returnData" === n && (t = !1 !== l.component.setCmdSet(u) && t), t
                }), _.b, _.a)), t.Ub(512, null, P.D, P.E, [t.y, t.z, t.n, t.M]), t.Cb(5, 278528, null, 0, P.k, [P.D], {
                    ngClass: [0, "ngClass"]
                }, null), t.Rb(131072, P.b, [t.h]), t.Sb(7, {
                    "is-invalid": 0
                }), t.Cb(8, 114688, null, 0, k.a, [M.a], {
                    data: [0, "data"],
                    params: [1, "params"],
                    errors: [2, "errors"]
                }, {
                    returnData: "returnData"
                }), t.Rb(131072, P.b, [t.h]), (l()(), t.Db(10, 0, null, null, 0, "span", [
                    ["class", "form-text text-muted"]
                ], null, null, null, null, null))], (function(l, n) {
                    var u, a, e = n.component,
                        o = l(n, 7, 0, null == (u = t.Yb(n, 5, 0, t.Pb(n, 6).transform(e.validation))) ? null : u.h3c_cmd);
                    l(n, 5, 0, o), l(n, 8, 0, e.options.data.h3c_cmd, e.list.h3c_cmd, null == (a = t.Yb(n, 8, 2, t.Pb(n, 9).transform(e.validation))) ? null : a.h3c_cmd)
                }), null)
            }

            function ll(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 14, "ngb-tabset", [
                    ["type", "pills"]
                ], null, null, null, o.k, o.f)), t.Cb(1, 2146304, null, 1, y.Y, [y.Z], {
                    type: [0, "type"]
                }, null), t.Vb(603979776, 1, {
                    tabs: 1
                }), (l()(), t.Db(3, 0, null, null, 5, "ngb-tab", [
                    ["title", "General"]
                ], null, null, null, null, null)), t.Cb(4, 2113536, [
                    [1, 4]
                ], 2, y.W, [], {
                    title: [0, "title"]
                }, null), t.Vb(603979776, 2, {
                    titleTpls: 1
                }), t.Vb(603979776, 3, {
                    contentTpls: 1
                }), (l()(), t.sb(0, null, null, 1, null, K)), t.Cb(8, 16384, [
                    [3, 4]
                ], 0, y.X, [t.U], null, null), (l()(), t.Db(9, 0, null, null, 5, "ngb-tab", [
                    ["title", "CMD Set"]
                ], null, null, null, null, null)), t.Cb(10, 2113536, [
                    [1, 4]
                ], 2, y.W, [], {
                    title: [0, "title"]
                }, null), t.Vb(603979776, 4, {
                    titleTpls: 1
                }), t.Vb(603979776, 5, {
                    contentTpls: 1
                }), (l()(), t.sb(0, null, null, 1, null, Q)), t.Cb(14, 16384, [
                    [5, 4]
                ], 0, y.X, [t.U], null, null)], (function(l, n) {
                    l(n, 1, 0, "pills"), l(n, 4, 0, "General"), l(n, 10, 0, "CMD Set")
                }), null)
            }
            var nl = function() {
                    function l() {
                        this.list = {
                            huawei_cmd: new w.a("cmd_general")
                        }
                    }
                    return l.prototype.ngOnInit = function() {}, l.prototype.setCmdSet = function(l) {
                        this.options.data.huawei_cmd = l
                    }, l
                }(),
                ul = t.Bb({
                    encapsulation: 0,
                    styles: [
                        [""]
                    ],
                    data: {}
                });

            function tl(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), t.Xb(1, null, ["", ""]))], null, (function(l, n) {
                    l(n, 1, 0, n.context.$implicit)
                }))
            }

            function al(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 14, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 13, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(2, 0, null, null, 12, "div", [
                    ["class", "form-group row"]
                ], null, null, null, null, null)), (l()(), t.Db(3, 0, null, null, 9, "div", [
                    ["class", "col-2"]
                ], null, null, null, null, null)), (l()(), t.Db(4, 0, null, null, 8, "span", [
                    ["class", "kt-switch kt-switch--sm kt-switch--outline kt-switch--success"]
                ], null, null, null, null, null)), (l()(), t.Db(5, 0, null, null, 7, "label", [], null, null, null, null, null)), (l()(), t.Db(6, 0, null, null, 5, "input", [
                    ["checked", ""],
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
                    var a = !0,
                        e = l.component;
                    return "change" === n && (a = !1 !== t.Pb(l, 7).onChange(u.target.checked) && a), "blur" === n && (a = !1 !== t.Pb(l, 7).onTouched() && a), "ngModelChange" === n && (a = !1 !== (e.options.data.huawei_enable = u) && a), a
                }), null, null)), t.Cb(7, 16384, null, 0, D.b, [t.M, t.n], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.b]), t.Cb(9, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(11, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null), (l()(), t.Db(12, 0, null, null, 0, "span", [], null, null, null, null, null)), (l()(), t.Db(13, 0, null, null, 1, "label", [
                    ["class", "col-10 col-form-label"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Pattern Activated"])), (l()(), t.Db(15, 0, null, null, 46, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t.Db(16, 0, null, null, 19, "div", [
                    ["class", "col-4"]
                ], null, null, null, null, null)), (l()(), t.Db(17, 0, null, null, 18, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(18, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Privilege Level"])), (l()(), t.Db(20, 0, null, null, 10, "input", [
                    ["class", "form-control form-control-sm"],
                    ["placeholder", "Privilege Level"],
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
                    var a = !0,
                        e = l.component;
                    return "input" === n && (a = !1 !== t.Pb(l, 25)._handleInput(u.target.value) && a), "blur" === n && (a = !1 !== t.Pb(l, 25).onTouched() && a), "compositionstart" === n && (a = !1 !== t.Pb(l, 25)._compositionStart() && a), "compositionend" === n && (a = !1 !== t.Pb(l, 25)._compositionEnd(u.target.value) && a), "change" === n && (a = !1 !== t.Pb(l, 26).onChange(u.target.value) && a), "input" === n && (a = !1 !== t.Pb(l, 26).onChange(u.target.value) && a), "blur" === n && (a = !1 !== t.Pb(l, 26).onTouched() && a), "ngModelChange" === n && (a = !1 !== (e.options.data.huawei_privlvl = u) && a), a
                }), null, null)), t.Ub(512, null, P.D, P.E, [t.y, t.z, t.n, t.M]), t.Cb(22, 278528, null, 0, P.k, [P.D], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), t.Rb(131072, P.b, [t.h]), t.Sb(24, {
                    "is-invalid": 0
                }), t.Cb(25, 16384, null, 0, D.e, [t.M, t.n, [2, D.a]], null, null), t.Cb(26, 16384, null, 0, D.u, [t.M, t.n], null, null), t.Ub(1024, null, D.n, (function(l, n) {
                    return [l, n]
                }), [D.e, D.u]), t.Cb(28, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(30, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null), (l()(), t.Db(31, 0, null, null, 3, "div", [
                    ["class", "invalid-feedback"]
                ], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 2, null, tl)), t.Cb(33, 278528, null, 0, P.l, [t.Y, t.U, t.y], {
                    ngForOf: [0, "ngForOf"]
                }, null), t.Rb(131072, P.b, [t.h]), (l()(), t.Db(35, 0, null, null, 0, "span", [
                    ["class", "form-text text-muted"]
                ], null, null, null, null, null)), (l()(), t.Db(36, 0, null, null, 12, "div", [
                    ["class", "col-4"]
                ], null, null, null, null, null)), (l()(), t.Db(37, 0, null, null, 11, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(38, 0, null, null, 1, "label", [
                    ["style", "width: 100%;"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Default command"])), (l()(), t.Db(40, 0, null, null, 8, "span", [
                    ["class", "kt-switch kt-switch--icon kt-switch--outline kt-switch--success"]
                ], null, null, null, null, null)), (l()(), t.Db(41, 0, null, null, 7, "label", [], null, null, null, null, null)), (l()(), t.Db(42, 0, null, null, 5, "input", [
                    ["checked", ""],
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
                    var a = !0,
                        e = l.component;
                    return "change" === n && (a = !1 !== t.Pb(l, 43).onChange(u.target.checked) && a), "blur" === n && (a = !1 !== t.Pb(l, 43).onTouched() && a), "ngModelChange" === n && (a = !1 !== (e.options.data.huawei_def_cmd = u) && a), a
                }), null, null)), t.Cb(43, 16384, null, 0, D.b, [t.M, t.n], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.b]), t.Cb(45, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(47, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null), (l()(), t.Db(48, 0, null, null, 0, "span", [], null, null, null, null, null)), (l()(), t.Db(49, 0, null, null, 12, "div", [
                    ["class", "col-4"]
                ], null, null, null, null, null)), (l()(), t.Db(50, 0, null, null, 11, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(51, 0, null, null, 1, "label", [
                    ["style", "width: 100%;"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Default attribute"])), (l()(), t.Db(53, 0, null, null, 8, "span", [
                    ["class", "kt-switch kt-switch--icon kt-switch--outline kt-switch--success"]
                ], null, null, null, null, null)), (l()(), t.Db(54, 0, null, null, 7, "label", [], null, null, null, null, null)), (l()(), t.Db(55, 0, null, null, 5, "input", [
                    ["checked", ""],
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
                    var a = !0,
                        e = l.component;
                    return "change" === n && (a = !1 !== t.Pb(l, 56).onChange(u.target.checked) && a), "blur" === n && (a = !1 !== t.Pb(l, 56).onTouched() && a), "ngModelChange" === n && (a = !1 !== (e.options.data.huawei_def_attr = u) && a), a
                }), null, null)), t.Cb(56, 16384, null, 0, D.b, [t.M, t.n], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.b]), t.Cb(58, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(60, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null), (l()(), t.Db(61, 0, null, null, 0, "span", [], null, null, null, null, null)), (l()(), t.Db(62, 0, null, null, 19, "div", [
                    ["class", "accordion accordion-light  accordion-toggle-arrow"]
                ], null, null, null, null, null)), (l()(), t.Db(63, 0, null, null, 18, "div", [
                    ["class", "card"]
                ], null, null, null, null, null)), (l()(), t.Db(64, 0, null, null, 5, "div", [
                    ["class", "card-header"]
                ], null, null, null, null, null)), (l()(), t.Db(65, 0, null, null, 4, "div", [
                    ["class", "card-title collapsed"],
                    ["data-toggle", "collapse"]
                ], [
                    [1, "aria-expanded", 0]
                ], [
                    [null, "click"]
                ], (function(l, n, u) {
                    var t = !0,
                        a = l.component;
                    return "click" === n && (t = 0 != (a.notCollapsedMH3C = !a.notCollapsedMH3C) && t), t
                }), null, null)), t.Ub(512, null, P.D, P.E, [t.y, t.z, t.n, t.M]), t.Cb(67, 278528, null, 0, P.k, [P.D], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), t.Sb(68, {
                    collapsed: 0
                }), (l()(), t.Xb(-1, null, ["Manual Configuration"])), (l()(), t.Db(70, 0, null, null, 11, "div", [], [
                    [2, "collapse", null],
                    [2, "show", null]
                ], null, null, null, null)), t.Cb(71, 16384, null, 0, y.m, [], {
                    collapsed: [0, "collapsed"]
                }, null), (l()(), t.Db(72, 0, null, null, 9, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (l()(), t.Db(73, 0, null, null, 8, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(74, 0, null, null, 1, "label", [
                    ["class", "pull-right"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Manual Configuration"])), (l()(), t.Db(76, 0, null, null, 5, "textarea", [
                    ["class", "form-control form-control-sm"],
                    ["rows", "5"]
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
                    var a = !0,
                        e = l.component;
                    return "input" === n && (a = !1 !== t.Pb(l, 77)._handleInput(u.target.value) && a), "blur" === n && (a = !1 !== t.Pb(l, 77).onTouched() && a), "compositionstart" === n && (a = !1 !== t.Pb(l, 77)._compositionStart() && a), "compositionend" === n && (a = !1 !== t.Pb(l, 77)._compositionEnd(u.target.value) && a), "ngModelChange" === n && (a = !1 !== (e.options.data.huawei_manual = u) && a), a
                }), null, null)), t.Cb(77, 16384, null, 0, D.e, [t.M, t.n, [2, D.a]], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.e]), t.Cb(79, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(81, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null)], (function(l, n) {
                    var u = n.component;
                    l(n, 9, 0, u.options.data.huawei_enable);
                    var a, e, o = l(n, 24, 0, null == (a = t.Yb(n, 22, 1, t.Pb(n, 23).transform(u.validation))) ? null : a.huawei_privlvl);
                    l(n, 22, 0, "form-control form-control-sm", o), l(n, 28, 0, u.options.data.huawei_privlvl), l(n, 33, 0, null == (e = t.Yb(n, 33, 0, t.Pb(n, 34).transform(u.validation))) ? null : e.huawei_privlvl), l(n, 45, 0, u.options.data.huawei_def_cmd), l(n, 58, 0, u.options.data.huawei_def_attr);
                    var s = l(n, 68, 0, !u.notCollapsedMH3C);
                    l(n, 67, 0, "card-title collapsed", s), l(n, 71, 0, !u.notCollapsedMH3C), l(n, 79, 0, u.options.data.huawei_manual)
                }), (function(l, n) {
                    var u = n.component;
                    l(n, 6, 0, t.Pb(n, 11).ngClassUntouched, t.Pb(n, 11).ngClassTouched, t.Pb(n, 11).ngClassPristine, t.Pb(n, 11).ngClassDirty, t.Pb(n, 11).ngClassValid, t.Pb(n, 11).ngClassInvalid, t.Pb(n, 11).ngClassPending), l(n, 20, 0, t.Pb(n, 30).ngClassUntouched, t.Pb(n, 30).ngClassTouched, t.Pb(n, 30).ngClassPristine, t.Pb(n, 30).ngClassDirty, t.Pb(n, 30).ngClassValid, t.Pb(n, 30).ngClassInvalid, t.Pb(n, 30).ngClassPending), l(n, 42, 0, t.Pb(n, 47).ngClassUntouched, t.Pb(n, 47).ngClassTouched, t.Pb(n, 47).ngClassPristine, t.Pb(n, 47).ngClassDirty, t.Pb(n, 47).ngClassValid, t.Pb(n, 47).ngClassInvalid, t.Pb(n, 47).ngClassPending), l(n, 55, 0, t.Pb(n, 60).ngClassUntouched, t.Pb(n, 60).ngClassTouched, t.Pb(n, 60).ngClassPristine, t.Pb(n, 60).ngClassDirty, t.Pb(n, 60).ngClassValid, t.Pb(n, 60).ngClassInvalid, t.Pb(n, 60).ngClassPending), l(n, 65, 0, !u.notCollapsedMH3C), l(n, 70, 0, !0, !t.Pb(n, 71).collapsed), l(n, 76, 0, t.Pb(n, 81).ngClassUntouched, t.Pb(n, 81).ngClassTouched, t.Pb(n, 81).ngClassPristine, t.Pb(n, 81).ngClassDirty, t.Pb(n, 81).ngClassValid, t.Pb(n, 81).ngClassInvalid, t.Pb(n, 81).ngClassPending)
                }))
            }

            function el(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 10, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 9, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(2, 0, null, null, 8, "div", [
                    ["class", "form-group usergroup-list"]
                ], null, null, null, null, null)), (l()(), t.Db(3, 0, null, null, 6, "kt-field-general-list", [], null, [
                    [null, "returnData"]
                ], (function(l, n, u) {
                    var t = !0;
                    return "returnData" === n && (t = !1 !== l.component.setCmdSet(u) && t), t
                }), _.b, _.a)), t.Ub(512, null, P.D, P.E, [t.y, t.z, t.n, t.M]), t.Cb(5, 278528, null, 0, P.k, [P.D], {
                    ngClass: [0, "ngClass"]
                }, null), t.Rb(131072, P.b, [t.h]), t.Sb(7, {
                    "is-invalid": 0
                }), t.Cb(8, 114688, null, 0, k.a, [M.a], {
                    data: [0, "data"],
                    params: [1, "params"],
                    errors: [2, "errors"]
                }, {
                    returnData: "returnData"
                }), t.Rb(131072, P.b, [t.h]), (l()(), t.Db(10, 0, null, null, 0, "span", [
                    ["class", "form-text text-muted"]
                ], null, null, null, null, null))], (function(l, n) {
                    var u, a, e = n.component,
                        o = l(n, 7, 0, null == (u = t.Yb(n, 5, 0, t.Pb(n, 6).transform(e.validation))) ? null : u.huawei_cmd);
                    l(n, 5, 0, o), l(n, 8, 0, e.options.data.huawei_cmd, e.list.huawei_cmd, null == (a = t.Yb(n, 8, 2, t.Pb(n, 9).transform(e.validation))) ? null : a.huawei_cmd)
                }), null)
            }

            function ol(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 14, "ngb-tabset", [
                    ["type", "pills"]
                ], null, null, null, o.k, o.f)), t.Cb(1, 2146304, null, 1, y.Y, [y.Z], {
                    type: [0, "type"]
                }, null), t.Vb(603979776, 1, {
                    tabs: 1
                }), (l()(), t.Db(3, 0, null, null, 5, "ngb-tab", [
                    ["title", "General"]
                ], null, null, null, null, null)), t.Cb(4, 2113536, [
                    [1, 4]
                ], 2, y.W, [], {
                    title: [0, "title"]
                }, null), t.Vb(603979776, 2, {
                    titleTpls: 1
                }), t.Vb(603979776, 3, {
                    contentTpls: 1
                }), (l()(), t.sb(0, null, null, 1, null, al)), t.Cb(8, 16384, [
                    [3, 4]
                ], 0, y.X, [t.U], null, null), (l()(), t.Db(9, 0, null, null, 5, "ngb-tab", [
                    ["title", "CMD Set"]
                ], null, null, null, null, null)), t.Cb(10, 2113536, [
                    [1, 4]
                ], 2, y.W, [], {
                    title: [0, "title"]
                }, null), t.Vb(603979776, 4, {
                    titleTpls: 1
                }), t.Vb(603979776, 5, {
                    contentTpls: 1
                }), (l()(), t.sb(0, null, null, 1, null, el)), t.Cb(14, 16384, [
                    [5, 4]
                ], 0, y.X, [t.U], null, null)], (function(l, n) {
                    l(n, 1, 0, "pills"), l(n, 4, 0, "General"), l(n, 10, 0, "CMD Set")
                }), null)
            }
            var sl = function() {
                    function l() {}
                    return l.prototype.ngOnInit = function() {}, l
                }(),
                il = t.Bb({
                    encapsulation: 0,
                    styles: [
                        [""]
                    ],
                    data: {}
                });

            function rl(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), t.Xb(1, null, ["", ""]))], null, (function(l, n) {
                    l(n, 1, 0, n.context.$implicit)
                }))
            }

            function bl(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), t.Xb(1, null, ["", ""]))], null, (function(l, n) {
                    l(n, 1, 0, n.context.$implicit)
                }))
            }

            function cl(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), t.Xb(1, null, ["", ""]))], null, (function(l, n) {
                    l(n, 1, 0, n.context.$implicit)
                }))
            }

            function dl(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), t.Xb(1, null, ["", ""]))], null, (function(l, n) {
                    l(n, 1, 0, n.context.$implicit)
                }))
            }

            function gl(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), t.Xb(1, null, ["", ""]))], null, (function(l, n) {
                    l(n, 1, 0, n.context.$implicit)
                }))
            }

            function pl(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 14, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 13, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(2, 0, null, null, 12, "div", [
                    ["class", "form-group row"]
                ], null, null, null, null, null)), (l()(), t.Db(3, 0, null, null, 9, "div", [
                    ["class", "col-2"]
                ], null, null, null, null, null)), (l()(), t.Db(4, 0, null, null, 8, "span", [
                    ["class", "kt-switch kt-switch--sm kt-switch--outline kt-switch--success"]
                ], null, null, null, null, null)), (l()(), t.Db(5, 0, null, null, 7, "label", [], null, null, null, null, null)), (l()(), t.Db(6, 0, null, null, 5, "input", [
                    ["checked", ""],
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
                    var a = !0,
                        e = l.component;
                    return "change" === n && (a = !1 !== t.Pb(l, 7).onChange(u.target.checked) && a), "blur" === n && (a = !1 !== t.Pb(l, 7).onTouched() && a), "ngModelChange" === n && (a = !1 !== (e.options.data.paloalto_enable = u) && a), a
                }), null, null)), t.Cb(7, 16384, null, 0, D.b, [t.M, t.n], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.b]), t.Cb(9, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(11, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null), (l()(), t.Db(12, 0, null, null, 0, "span", [], null, null, null, null, null)), (l()(), t.Db(13, 0, null, null, 1, "label", [
                    ["class", "col-10 col-form-label"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Pattern Activated"])), (l()(), t.Db(15, 0, null, null, 48, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t.Db(16, 0, null, null, 23, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(17, 0, null, null, 22, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(18, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["PaloAlto Admin Role"])), (l()(), t.Db(20, 0, null, null, 14, "div", [
                    ["class", "input-group"]
                ], null, null, null, null, null)), (l()(), t.Db(21, 0, null, null, 3, "div", [
                    ["class", "input-group-prepend"]
                ], null, null, null, null, null)), (l()(), t.Db(22, 16777216, null, null, 2, "button", [
                    ["class", "btn btn-default btn-sm btn-icon"],
                    ["ngbPopover", "a default (dynamic) administrative role name or a custom administrative role name on the firewall"],
                    ["triggers", "mouseenter:mouseleave"]
                ], null, null, null, null, null)), t.Cb(23, 737280, null, 0, y.N, [t.n, t.M, t.w, t.k, t.Y, y.O, t.G, P.d, t.h, t.g], {
                    ngbPopover: [0, "ngbPopover"],
                    triggers: [1, "triggers"]
                }, null), (l()(), t.Db(24, 0, null, null, 0, "i", [
                    ["class", "fa fa-info"]
                ], null, null, null, null, null)), (l()(), t.Db(25, 0, null, null, 9, "input", [
                    ["class", "form-control form-control-sm"],
                    ["placeholder", "PaloAlto Admin Role"],
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
                    var a = !0,
                        e = l.component;
                    return "input" === n && (a = !1 !== t.Pb(l, 30)._handleInput(u.target.value) && a), "blur" === n && (a = !1 !== t.Pb(l, 30).onTouched() && a), "compositionstart" === n && (a = !1 !== t.Pb(l, 30)._compositionStart() && a), "compositionend" === n && (a = !1 !== t.Pb(l, 30)._compositionEnd(u.target.value) && a), "ngModelChange" === n && (a = !1 !== (e.options.data.paloalto_admin_role = u) && a), a
                }), null, null)), t.Ub(512, null, P.D, P.E, [t.y, t.z, t.n, t.M]), t.Cb(27, 278528, null, 0, P.k, [P.D], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), t.Rb(131072, P.b, [t.h]), t.Sb(29, {
                    "is-invalid": 0
                }), t.Cb(30, 16384, null, 0, D.e, [t.M, t.n, [2, D.a]], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.e]), t.Cb(32, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(34, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null), (l()(), t.Db(35, 0, null, null, 3, "div", [
                    ["class", "invalid-feedback"]
                ], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 2, null, rl)), t.Cb(37, 278528, null, 0, P.l, [t.Y, t.U, t.y], {
                    ngForOf: [0, "ngForOf"]
                }, null), t.Rb(131072, P.b, [t.h]), (l()(), t.Db(39, 0, null, null, 0, "span", [
                    ["class", "form-text text-muted"]
                ], null, null, null, null, null)), (l()(), t.Db(40, 0, null, null, 23, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(41, 0, null, null, 22, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(42, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["PaloAlto Admin Access Domain"])), (l()(), t.Db(44, 0, null, null, 14, "div", [
                    ["class", "input-group"]
                ], null, null, null, null, null)), (l()(), t.Db(45, 0, null, null, 3, "div", [
                    ["class", "input-group-prepend"]
                ], null, null, null, null, null)), (l()(), t.Db(46, 16777216, null, null, 2, "button", [
                    ["class", "btn btn-default btn-sm btn-icon"],
                    ["ngbPopover", "the name of an access domain for firewall administrators (configured in the DeviceAccess Domains page). Define this VSA if the firewall has multiple virtual systems"],
                    ["triggers", "mouseenter:mouseleave"]
                ], null, null, null, null, null)), t.Cb(47, 737280, null, 0, y.N, [t.n, t.M, t.w, t.k, t.Y, y.O, t.G, P.d, t.h, t.g], {
                    ngbPopover: [0, "ngbPopover"],
                    triggers: [1, "triggers"]
                }, null), (l()(), t.Db(48, 0, null, null, 0, "i", [
                    ["class", "fa fa-info"]
                ], null, null, null, null, null)), (l()(), t.Db(49, 0, null, null, 9, "input", [
                    ["class", "form-control form-control-sm"],
                    ["placeholder", "PaloAlto Admin Access Domain"],
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
                    var a = !0,
                        e = l.component;
                    return "input" === n && (a = !1 !== t.Pb(l, 54)._handleInput(u.target.value) && a), "blur" === n && (a = !1 !== t.Pb(l, 54).onTouched() && a), "compositionstart" === n && (a = !1 !== t.Pb(l, 54)._compositionStart() && a), "compositionend" === n && (a = !1 !== t.Pb(l, 54)._compositionEnd(u.target.value) && a), "ngModelChange" === n && (a = !1 !== (e.options.data.paloalto_admin_domain = u) && a), a
                }), null, null)), t.Ub(512, null, P.D, P.E, [t.y, t.z, t.n, t.M]), t.Cb(51, 278528, null, 0, P.k, [P.D], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), t.Rb(131072, P.b, [t.h]), t.Sb(53, {
                    "is-invalid": 0
                }), t.Cb(54, 16384, null, 0, D.e, [t.M, t.n, [2, D.a]], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.e]), t.Cb(56, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(58, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null), (l()(), t.Db(59, 0, null, null, 3, "div", [
                    ["class", "invalid-feedback"]
                ], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 2, null, bl)), t.Cb(61, 278528, null, 0, P.l, [t.Y, t.U, t.y], {
                    ngForOf: [0, "ngForOf"]
                }, null), t.Rb(131072, P.b, [t.h]), (l()(), t.Db(63, 0, null, null, 0, "span", [
                    ["class", "form-text text-muted"]
                ], null, null, null, null, null)), (l()(), t.Db(64, 0, null, null, 48, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t.Db(65, 0, null, null, 23, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(66, 0, null, null, 22, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(67, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["PaloAlto Panorama Admin Role"])), (l()(), t.Db(69, 0, null, null, 14, "div", [
                    ["class", "input-group"]
                ], null, null, null, null, null)), (l()(), t.Db(70, 0, null, null, 3, "div", [
                    ["class", "input-group-prepend"]
                ], null, null, null, null, null)), (l()(), t.Db(71, 16777216, null, null, 2, "button", [
                    ["class", "btn btn-default btn-sm btn-icon"],
                    ["ngbPopover", "a default (dynamic) administrative role name or a custom administrative role name on Panorama"],
                    ["triggers", "mouseenter:mouseleave"]
                ], null, null, null, null, null)), t.Cb(72, 737280, null, 0, y.N, [t.n, t.M, t.w, t.k, t.Y, y.O, t.G, P.d, t.h, t.g], {
                    ngbPopover: [0, "ngbPopover"],
                    triggers: [1, "triggers"]
                }, null), (l()(), t.Db(73, 0, null, null, 0, "i", [
                    ["class", "fa fa-info"]
                ], null, null, null, null, null)), (l()(), t.Db(74, 0, null, null, 9, "input", [
                    ["class", "form-control form-control-sm"],
                    ["placeholder", "PaloAlto Admin Role"],
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
                    var a = !0,
                        e = l.component;
                    return "input" === n && (a = !1 !== t.Pb(l, 79)._handleInput(u.target.value) && a), "blur" === n && (a = !1 !== t.Pb(l, 79).onTouched() && a), "compositionstart" === n && (a = !1 !== t.Pb(l, 79)._compositionStart() && a), "compositionend" === n && (a = !1 !== t.Pb(l, 79)._compositionEnd(u.target.value) && a), "ngModelChange" === n && (a = !1 !== (e.options.data.paloalto_panorama_admin_role = u) && a), a
                }), null, null)), t.Ub(512, null, P.D, P.E, [t.y, t.z, t.n, t.M]), t.Cb(76, 278528, null, 0, P.k, [P.D], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), t.Rb(131072, P.b, [t.h]), t.Sb(78, {
                    "is-invalid": 0
                }), t.Cb(79, 16384, null, 0, D.e, [t.M, t.n, [2, D.a]], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.e]), t.Cb(81, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(83, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null), (l()(), t.Db(84, 0, null, null, 3, "div", [
                    ["class", "invalid-feedback"]
                ], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 2, null, cl)), t.Cb(86, 278528, null, 0, P.l, [t.Y, t.U, t.y], {
                    ngForOf: [0, "ngForOf"]
                }, null), t.Rb(131072, P.b, [t.h]), (l()(), t.Db(88, 0, null, null, 0, "span", [
                    ["class", "form-text text-muted"]
                ], null, null, null, null, null)), (l()(), t.Db(89, 0, null, null, 23, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(90, 0, null, null, 22, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(91, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["PaloAlto Panorama Admin Access Domain"])), (l()(), t.Db(93, 0, null, null, 14, "div", [
                    ["class", "input-group"]
                ], null, null, null, null, null)), (l()(), t.Db(94, 0, null, null, 3, "div", [
                    ["class", "input-group-prepend"]
                ], null, null, null, null, null)), (l()(), t.Db(95, 16777216, null, null, 2, "button", [
                    ["class", "btn btn-default btn-sm btn-icon"],
                    ["ngbPopover", "the name of an access domain for Device Group and Template administrators (configured in the PanoramaAccess Domains page)"],
                    ["triggers", "mouseenter:mouseleave"]
                ], null, null, null, null, null)), t.Cb(96, 737280, null, 0, y.N, [t.n, t.M, t.w, t.k, t.Y, y.O, t.G, P.d, t.h, t.g], {
                    ngbPopover: [0, "ngbPopover"],
                    triggers: [1, "triggers"]
                }, null), (l()(), t.Db(97, 0, null, null, 0, "i", [
                    ["class", "fa fa-info"]
                ], null, null, null, null, null)), (l()(), t.Db(98, 0, null, null, 9, "input", [
                    ["class", "form-control form-control-sm"],
                    ["placeholder", "PaloAlto Admin Access Domain"],
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
                    var a = !0,
                        e = l.component;
                    return "input" === n && (a = !1 !== t.Pb(l, 103)._handleInput(u.target.value) && a), "blur" === n && (a = !1 !== t.Pb(l, 103).onTouched() && a), "compositionstart" === n && (a = !1 !== t.Pb(l, 103)._compositionStart() && a), "compositionend" === n && (a = !1 !== t.Pb(l, 103)._compositionEnd(u.target.value) && a), "ngModelChange" === n && (a = !1 !== (e.options.data.paloalto_panorama_admin_domain = u) && a), a
                }), null, null)), t.Ub(512, null, P.D, P.E, [t.y, t.z, t.n, t.M]), t.Cb(100, 278528, null, 0, P.k, [P.D], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), t.Rb(131072, P.b, [t.h]), t.Sb(102, {
                    "is-invalid": 0
                }), t.Cb(103, 16384, null, 0, D.e, [t.M, t.n, [2, D.a]], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.e]), t.Cb(105, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(107, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null), (l()(), t.Db(108, 0, null, null, 3, "div", [
                    ["class", "invalid-feedback"]
                ], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 2, null, dl)), t.Cb(110, 278528, null, 0, P.l, [t.Y, t.U, t.y], {
                    ngForOf: [0, "ngForOf"]
                }, null), t.Rb(131072, P.b, [t.h]), (l()(), t.Db(112, 0, null, null, 0, "span", [
                    ["class", "form-text text-muted"]
                ], null, null, null, null, null)), (l()(), t.Db(113, 0, null, null, 24, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t.Db(114, 0, null, null, 23, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(115, 0, null, null, 22, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(116, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["PaloAlto User Group"])), (l()(), t.Db(118, 0, null, null, 14, "div", [
                    ["class", "input-group"]
                ], null, null, null, null, null)), (l()(), t.Db(119, 0, null, null, 3, "div", [
                    ["class", "input-group-prepend"]
                ], null, null, null, null, null)), (l()(), t.Db(120, 16777216, null, null, 2, "button", [
                    ["class", "btn btn-default btn-sm btn-icon"],
                    ["ngbPopover", "the name of a user group in the Allow List of an authentication profile"],
                    ["triggers", "mouseenter:mouseleave"]
                ], null, null, null, null, null)), t.Cb(121, 737280, null, 0, y.N, [t.n, t.M, t.w, t.k, t.Y, y.O, t.G, P.d, t.h, t.g], {
                    ngbPopover: [0, "ngbPopover"],
                    triggers: [1, "triggers"]
                }, null), (l()(), t.Db(122, 0, null, null, 0, "i", [
                    ["class", "fa fa-info"]
                ], null, null, null, null, null)), (l()(), t.Db(123, 0, null, null, 9, "input", [
                    ["class", "form-control form-control-sm"],
                    ["placeholder", "PaloAlto Admin Role"],
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
                    var a = !0,
                        e = l.component;
                    return "input" === n && (a = !1 !== t.Pb(l, 128)._handleInput(u.target.value) && a), "blur" === n && (a = !1 !== t.Pb(l, 128).onTouched() && a), "compositionstart" === n && (a = !1 !== t.Pb(l, 128)._compositionStart() && a), "compositionend" === n && (a = !1 !== t.Pb(l, 128)._compositionEnd(u.target.value) && a), "ngModelChange" === n && (a = !1 !== (e.options.data.paloalto_user_group = u) && a), a
                }), null, null)), t.Ub(512, null, P.D, P.E, [t.y, t.z, t.n, t.M]), t.Cb(125, 278528, null, 0, P.k, [P.D], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), t.Rb(131072, P.b, [t.h]), t.Sb(127, {
                    "is-invalid": 0
                }), t.Cb(128, 16384, null, 0, D.e, [t.M, t.n, [2, D.a]], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.e]), t.Cb(130, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(132, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null), (l()(), t.Db(133, 0, null, null, 3, "div", [
                    ["class", "invalid-feedback"]
                ], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 2, null, gl)), t.Cb(135, 278528, null, 0, P.l, [t.Y, t.U, t.y], {
                    ngForOf: [0, "ngForOf"]
                }, null), t.Rb(131072, P.b, [t.h]), (l()(), t.Db(137, 0, null, null, 0, "span", [
                    ["class", "form-text text-muted"]
                ], null, null, null, null, null)), (l()(), t.Db(138, 0, null, null, 19, "div", [
                    ["class", "accordion accordion-light  accordion-toggle-arrow"]
                ], null, null, null, null, null)), (l()(), t.Db(139, 0, null, null, 18, "div", [
                    ["class", "card"]
                ], null, null, null, null, null)), (l()(), t.Db(140, 0, null, null, 5, "div", [
                    ["class", "card-header"]
                ], null, null, null, null, null)), (l()(), t.Db(141, 0, null, null, 4, "div", [
                    ["class", "card-title collapsed"],
                    ["data-toggle", "collapse"]
                ], [
                    [1, "aria-expanded", 0]
                ], [
                    [null, "click"]
                ], (function(l, n, u) {
                    var t = !0,
                        a = l.component;
                    return "click" === n && (t = 0 != (a.notCollapsedMFOS = !a.notCollapsedMFOS) && t), t
                }), null, null)), t.Ub(512, null, P.D, P.E, [t.y, t.z, t.n, t.M]), t.Cb(143, 278528, null, 0, P.k, [P.D], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), t.Sb(144, {
                    collapsed: 0
                }), (l()(), t.Xb(-1, null, ["Manual Configuration"])), (l()(), t.Db(146, 0, null, null, 11, "div", [], [
                    [2, "collapse", null],
                    [2, "show", null]
                ], null, null, null, null)), t.Cb(147, 16384, null, 0, y.m, [], {
                    collapsed: [0, "collapsed"]
                }, null), (l()(), t.Db(148, 0, null, null, 9, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (l()(), t.Db(149, 0, null, null, 8, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(150, 0, null, null, 1, "label", [
                    ["class", "pull-right"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Manual Configuration"])), (l()(), t.Db(152, 0, null, null, 5, "textarea", [
                    ["class", "form-control form-control-sm"],
                    ["rows", "5"]
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
                    var a = !0,
                        e = l.component;
                    return "input" === n && (a = !1 !== t.Pb(l, 153)._handleInput(u.target.value) && a), "blur" === n && (a = !1 !== t.Pb(l, 153).onTouched() && a), "compositionstart" === n && (a = !1 !== t.Pb(l, 153)._compositionStart() && a), "compositionend" === n && (a = !1 !== t.Pb(l, 153)._compositionEnd(u.target.value) && a), "ngModelChange" === n && (a = !1 !== (e.options.data.paloalto_manual = u) && a), a
                }), null, null)), t.Cb(153, 16384, null, 0, D.e, [t.M, t.n, [2, D.a]], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.e]), t.Cb(155, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(157, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null)], (function(l, n) {
                    var u = n.component;
                    l(n, 9, 0, u.options.data.paloalto_enable), l(n, 23, 0, "a default (dynamic) administrative role name or a custom administrative role name on the firewall", "mouseenter:mouseleave");
                    var a, e, o = l(n, 29, 0, null == (a = t.Yb(n, 27, 1, t.Pb(n, 28).transform(u.validation))) ? null : a.paloalto_admin_role);
                    l(n, 27, 0, "form-control form-control-sm", o), l(n, 32, 0, u.options.data.paloalto_admin_role), l(n, 37, 0, null == (e = t.Yb(n, 37, 0, t.Pb(n, 38).transform(u.validation))) ? null : e.paloalto_admin_role), l(n, 47, 0, "the name of an access domain for firewall administrators (configured in the DeviceAccess Domains page). Define this VSA if the firewall has multiple virtual systems", "mouseenter:mouseleave");
                    var s, i, r = l(n, 53, 0, null == (s = t.Yb(n, 51, 1, t.Pb(n, 52).transform(u.validation))) ? null : s.paloalto_admin_domain);
                    l(n, 51, 0, "form-control form-control-sm", r), l(n, 56, 0, u.options.data.paloalto_admin_domain), l(n, 61, 0, null == (i = t.Yb(n, 61, 0, t.Pb(n, 62).transform(u.validation))) ? null : i.paloalto_admin_domain), l(n, 72, 0, "a default (dynamic) administrative role name or a custom administrative role name on Panorama", "mouseenter:mouseleave");
                    var b, c, d = l(n, 78, 0, null == (b = t.Yb(n, 76, 1, t.Pb(n, 77).transform(u.validation))) ? null : b.paloalto_panorama_admin_role);
                    l(n, 76, 0, "form-control form-control-sm", d), l(n, 81, 0, u.options.data.paloalto_panorama_admin_role), l(n, 86, 0, null == (c = t.Yb(n, 86, 0, t.Pb(n, 87).transform(u.validation))) ? null : c.paloalto_panorama_admin_role), l(n, 96, 0, "the name of an access domain for Device Group and Template administrators (configured in the PanoramaAccess Domains page)", "mouseenter:mouseleave");
                    var g, p, m = l(n, 102, 0, null == (g = t.Yb(n, 100, 1, t.Pb(n, 101).transform(u.validation))) ? null : g.paloalto_panorama_admin_domain);
                    l(n, 100, 0, "form-control form-control-sm", m), l(n, 105, 0, u.options.data.paloalto_panorama_admin_domain), l(n, 110, 0, null == (p = t.Yb(n, 110, 0, t.Pb(n, 111).transform(u.validation))) ? null : p.paloalto_panorama_admin_domain), l(n, 121, 0, "the name of a user group in the Allow List of an authentication profile", "mouseenter:mouseleave");
                    var h, C, v = l(n, 127, 0, null == (h = t.Yb(n, 125, 1, t.Pb(n, 126).transform(u.validation))) ? null : h.paloalto_user_group);
                    l(n, 125, 0, "form-control form-control-sm", v), l(n, 130, 0, u.options.data.paloalto_user_group), l(n, 135, 0, null == (C = t.Yb(n, 135, 0, t.Pb(n, 136).transform(u.validation))) ? null : C.paloalto_user_group);
                    var f = l(n, 144, 0, !u.notCollapsedMFOS);
                    l(n, 143, 0, "card-title collapsed", f), l(n, 147, 0, !u.notCollapsedMFOS), l(n, 155, 0, u.options.data.paloalto_manual)
                }), (function(l, n) {
                    var u = n.component;
                    l(n, 6, 0, t.Pb(n, 11).ngClassUntouched, t.Pb(n, 11).ngClassTouched, t.Pb(n, 11).ngClassPristine, t.Pb(n, 11).ngClassDirty, t.Pb(n, 11).ngClassValid, t.Pb(n, 11).ngClassInvalid, t.Pb(n, 11).ngClassPending), l(n, 25, 0, t.Pb(n, 34).ngClassUntouched, t.Pb(n, 34).ngClassTouched, t.Pb(n, 34).ngClassPristine, t.Pb(n, 34).ngClassDirty, t.Pb(n, 34).ngClassValid, t.Pb(n, 34).ngClassInvalid, t.Pb(n, 34).ngClassPending), l(n, 49, 0, t.Pb(n, 58).ngClassUntouched, t.Pb(n, 58).ngClassTouched, t.Pb(n, 58).ngClassPristine, t.Pb(n, 58).ngClassDirty, t.Pb(n, 58).ngClassValid, t.Pb(n, 58).ngClassInvalid, t.Pb(n, 58).ngClassPending), l(n, 74, 0, t.Pb(n, 83).ngClassUntouched, t.Pb(n, 83).ngClassTouched, t.Pb(n, 83).ngClassPristine, t.Pb(n, 83).ngClassDirty, t.Pb(n, 83).ngClassValid, t.Pb(n, 83).ngClassInvalid, t.Pb(n, 83).ngClassPending), l(n, 98, 0, t.Pb(n, 107).ngClassUntouched, t.Pb(n, 107).ngClassTouched, t.Pb(n, 107).ngClassPristine, t.Pb(n, 107).ngClassDirty, t.Pb(n, 107).ngClassValid, t.Pb(n, 107).ngClassInvalid, t.Pb(n, 107).ngClassPending), l(n, 123, 0, t.Pb(n, 132).ngClassUntouched, t.Pb(n, 132).ngClassTouched, t.Pb(n, 132).ngClassPristine, t.Pb(n, 132).ngClassDirty, t.Pb(n, 132).ngClassValid, t.Pb(n, 132).ngClassInvalid, t.Pb(n, 132).ngClassPending), l(n, 141, 0, !u.notCollapsedMFOS), l(n, 146, 0, !0, !t.Pb(n, 147).collapsed), l(n, 152, 0, t.Pb(n, 157).ngClassUntouched, t.Pb(n, 157).ngClassTouched, t.Pb(n, 157).ngClassPristine, t.Pb(n, 157).ngClassDirty, t.Pb(n, 157).ngClassValid, t.Pb(n, 157).ngClassInvalid, t.Pb(n, 157).ngClassPending)
                }))
            }
            var ml = function() {
                    function l() {}
                    return l.prototype.ngOnInit = function() {}, l
                }(),
                hl = t.Bb({
                    encapsulation: 0,
                    styles: [
                        [""]
                    ],
                    data: {}
                });

            function Cl(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), t.Xb(1, null, ["", ""]))], null, (function(l, n) {
                    l(n, 1, 0, n.context.$implicit)
                }))
            }

            function vl(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 14, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 13, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(2, 0, null, null, 12, "div", [
                    ["class", "form-group row"]
                ], null, null, null, null, null)), (l()(), t.Db(3, 0, null, null, 9, "div", [
                    ["class", "col-2"]
                ], null, null, null, null, null)), (l()(), t.Db(4, 0, null, null, 8, "span", [
                    ["class", "kt-switch kt-switch--sm kt-switch--outline kt-switch--success"]
                ], null, null, null, null, null)), (l()(), t.Db(5, 0, null, null, 7, "label", [], null, null, null, null, null)), (l()(), t.Db(6, 0, null, null, 5, "input", [
                    ["checked", ""],
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
                    var a = !0,
                        e = l.component;
                    return "change" === n && (a = !1 !== t.Pb(l, 7).onChange(u.target.checked) && a), "blur" === n && (a = !1 !== t.Pb(l, 7).onTouched() && a), "ngModelChange" === n && (a = !1 !== (e.options.data.fortios_enable = u) && a), a
                }), null, null)), t.Cb(7, 16384, null, 0, D.b, [t.M, t.n], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.b]), t.Cb(9, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(11, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null), (l()(), t.Db(12, 0, null, null, 0, "span", [], null, null, null, null, null)), (l()(), t.Db(13, 0, null, null, 1, "label", [
                    ["class", "col-10 col-form-label"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Pattern Activated"])), (l()(), t.Db(15, 0, null, null, 20, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t.Db(16, 0, null, null, 19, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(17, 0, null, null, 18, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(18, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Admin Profile"])), (l()(), t.Db(20, 0, null, null, 9, "input", [
                    ["class", "form-control form-control-sm"],
                    ["placeholder", "Admin Profile"],
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
                    var a = !0,
                        e = l.component;
                    return "input" === n && (a = !1 !== t.Pb(l, 25)._handleInput(u.target.value) && a), "blur" === n && (a = !1 !== t.Pb(l, 25).onTouched() && a), "compositionstart" === n && (a = !1 !== t.Pb(l, 25)._compositionStart() && a), "compositionend" === n && (a = !1 !== t.Pb(l, 25)._compositionEnd(u.target.value) && a), "ngModelChange" === n && (a = !1 !== (e.options.data.fortios_admin_prof = u) && a), a
                }), null, null)), t.Ub(512, null, P.D, P.E, [t.y, t.z, t.n, t.M]), t.Cb(22, 278528, null, 0, P.k, [P.D], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), t.Rb(131072, P.b, [t.h]), t.Sb(24, {
                    "is-invalid": 0
                }), t.Cb(25, 16384, null, 0, D.e, [t.M, t.n, [2, D.a]], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.e]), t.Cb(27, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(29, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null), (l()(), t.Db(30, 0, null, null, 3, "div", [
                    ["class", "invalid-feedback"]
                ], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 2, null, Cl)), t.Cb(32, 278528, null, 0, P.l, [t.Y, t.U, t.y], {
                    ngForOf: [0, "ngForOf"]
                }, null), t.Rb(131072, P.b, [t.h]), (l()(), t.Db(34, 0, null, null, 1, "span", [
                    ["class", "form-text text-muted"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["admin_prof attribute, pre-configured administrator profile name"])), (l()(), t.Db(36, 0, null, null, 19, "div", [
                    ["class", "accordion accordion-light  accordion-toggle-arrow"]
                ], null, null, null, null, null)), (l()(), t.Db(37, 0, null, null, 18, "div", [
                    ["class", "card"]
                ], null, null, null, null, null)), (l()(), t.Db(38, 0, null, null, 5, "div", [
                    ["class", "card-header"]
                ], null, null, null, null, null)), (l()(), t.Db(39, 0, null, null, 4, "div", [
                    ["class", "card-title collapsed"],
                    ["data-toggle", "collapse"]
                ], [
                    [1, "aria-expanded", 0]
                ], [
                    [null, "click"]
                ], (function(l, n, u) {
                    var t = !0,
                        a = l.component;
                    return "click" === n && (t = 0 != (a.notCollapsedMFOS = !a.notCollapsedMFOS) && t), t
                }), null, null)), t.Ub(512, null, P.D, P.E, [t.y, t.z, t.n, t.M]), t.Cb(41, 278528, null, 0, P.k, [P.D], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), t.Sb(42, {
                    collapsed: 0
                }), (l()(), t.Xb(-1, null, ["Manual Configuration"])), (l()(), t.Db(44, 0, null, null, 11, "div", [], [
                    [2, "collapse", null],
                    [2, "show", null]
                ], null, null, null, null)), t.Cb(45, 16384, null, 0, y.m, [], {
                    collapsed: [0, "collapsed"]
                }, null), (l()(), t.Db(46, 0, null, null, 9, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (l()(), t.Db(47, 0, null, null, 8, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(48, 0, null, null, 1, "label", [
                    ["class", "pull-right"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Manual Configuration"])), (l()(), t.Db(50, 0, null, null, 5, "textarea", [
                    ["class", "form-control form-control-sm"],
                    ["rows", "5"]
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
                    var a = !0,
                        e = l.component;
                    return "input" === n && (a = !1 !== t.Pb(l, 51)._handleInput(u.target.value) && a), "blur" === n && (a = !1 !== t.Pb(l, 51).onTouched() && a), "compositionstart" === n && (a = !1 !== t.Pb(l, 51)._compositionStart() && a), "compositionend" === n && (a = !1 !== t.Pb(l, 51)._compositionEnd(u.target.value) && a), "ngModelChange" === n && (a = !1 !== (e.options.data.fortios_manual = u) && a), a
                }), null, null)), t.Cb(51, 16384, null, 0, D.e, [t.M, t.n, [2, D.a]], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.e]), t.Cb(53, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(55, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null)], (function(l, n) {
                    var u = n.component;
                    l(n, 9, 0, u.options.data.fortios_enable);
                    var a, e, o = l(n, 24, 0, null == (a = t.Yb(n, 22, 1, t.Pb(n, 23).transform(u.validation))) ? null : a.fortios_admin_prof);
                    l(n, 22, 0, "form-control form-control-sm", o), l(n, 27, 0, u.options.data.fortios_admin_prof), l(n, 32, 0, null == (e = t.Yb(n, 32, 0, t.Pb(n, 33).transform(u.validation))) ? null : e.fortios_admin_prof);
                    var s = l(n, 42, 0, !u.notCollapsedMFOS);
                    l(n, 41, 0, "card-title collapsed", s), l(n, 45, 0, !u.notCollapsedMFOS), l(n, 53, 0, u.options.data.fortios_manual)
                }), (function(l, n) {
                    var u = n.component;
                    l(n, 6, 0, t.Pb(n, 11).ngClassUntouched, t.Pb(n, 11).ngClassTouched, t.Pb(n, 11).ngClassPristine, t.Pb(n, 11).ngClassDirty, t.Pb(n, 11).ngClassValid, t.Pb(n, 11).ngClassInvalid, t.Pb(n, 11).ngClassPending), l(n, 20, 0, t.Pb(n, 29).ngClassUntouched, t.Pb(n, 29).ngClassTouched, t.Pb(n, 29).ngClassPristine, t.Pb(n, 29).ngClassDirty, t.Pb(n, 29).ngClassValid, t.Pb(n, 29).ngClassInvalid, t.Pb(n, 29).ngClassPending), l(n, 39, 0, !u.notCollapsedMFOS), l(n, 44, 0, !0, !t.Pb(n, 45).collapsed), l(n, 50, 0, t.Pb(n, 55).ngClassUntouched, t.Pb(n, 55).ngClassTouched, t.Pb(n, 55).ngClassPristine, t.Pb(n, 55).ngClassDirty, t.Pb(n, 55).ngClassValid, t.Pb(n, 55).ngClassInvalid, t.Pb(n, 55).ngClassPending)
                }))
            }
            var fl = function() {
                    function l() {
                        this.list = {
                            extreme_cmd: new w.a("cmd_general")
                        }
                    }
                    return l.prototype.ngOnInit = function() {}, l.prototype.setCmdSet = function(l) {
                        this.options.data.extreme_cmd = l
                    }, l
                }(),
                Pl = t.Bb({
                    encapsulation: 0,
                    styles: [
                        [""]
                    ],
                    data: {}
                });

            function Dl(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), t.Xb(1, null, ["", ""]))], null, (function(l, n) {
                    l(n, 1, 0, n.context.$implicit)
                }))
            }

            function _l(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 14, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 13, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(2, 0, null, null, 12, "div", [
                    ["class", "form-group row"]
                ], null, null, null, null, null)), (l()(), t.Db(3, 0, null, null, 9, "div", [
                    ["class", "col-2"]
                ], null, null, null, null, null)), (l()(), t.Db(4, 0, null, null, 8, "span", [
                    ["class", "kt-switch kt-switch--sm kt-switch--outline kt-switch--success"]
                ], null, null, null, null, null)), (l()(), t.Db(5, 0, null, null, 7, "label", [], null, null, null, null, null)), (l()(), t.Db(6, 0, null, null, 5, "input", [
                    ["checked", ""],
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
                    var a = !0,
                        e = l.component;
                    return "change" === n && (a = !1 !== t.Pb(l, 7).onChange(u.target.checked) && a), "blur" === n && (a = !1 !== t.Pb(l, 7).onTouched() && a), "ngModelChange" === n && (a = !1 !== (e.options.data.extreme_enable = u) && a), a
                }), null, null)), t.Cb(7, 16384, null, 0, D.b, [t.M, t.n], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.b]), t.Cb(9, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(11, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null), (l()(), t.Db(12, 0, null, null, 0, "span", [], null, null, null, null, null)), (l()(), t.Db(13, 0, null, null, 1, "label", [
                    ["class", "col-10 col-form-label"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Pattern Activated"])), (l()(), t.Db(15, 0, null, null, 53, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t.Db(16, 0, null, null, 26, "div", [
                    ["class", "col-4"]
                ], null, null, null, null, null)), (l()(), t.Db(17, 0, null, null, 25, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(18, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Privilege Level"])), (l()(), t.Db(20, 0, null, null, 17, "select", [
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
                    var a = !0,
                        e = l.component;
                    return "change" === n && (a = !1 !== t.Pb(l, 25).onChange(u.target.value) && a), "blur" === n && (a = !1 !== t.Pb(l, 25).onTouched() && a), "ngModelChange" === n && (a = !1 !== (e.options.data.extreme_privlvl = u) && a), a
                }), null, null)), t.Ub(512, null, P.D, P.E, [t.y, t.z, t.n, t.M]), t.Cb(22, 278528, null, 0, P.k, [P.D], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), t.Rb(131072, P.b, [t.h]), t.Sb(24, {
                    "is-invalid": 0
                }), t.Cb(25, 16384, null, 0, D.x, [t.M, t.n], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.x]), t.Cb(27, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(29, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null), (l()(), t.Db(30, 0, null, null, 3, "option", [
                    ["selected", ""],
                    ["value", "15"]
                ], null, null, null, null, null)), t.Cb(31, 147456, null, 0, D.t, [t.n, t.M, [2, D.x]], {
                    value: [0, "value"]
                }, null), t.Cb(32, 147456, null, 0, D.C, [t.n, t.M, [8, null]], {
                    value: [0, "value"]
                }, null), (l()(), t.Xb(-1, null, ["Admin"])), (l()(), t.Db(34, 0, null, null, 3, "option", [
                    ["value", "0"]
                ], null, null, null, null, null)), t.Cb(35, 147456, null, 0, D.t, [t.n, t.M, [2, D.x]], {
                    value: [0, "value"]
                }, null), t.Cb(36, 147456, null, 0, D.C, [t.n, t.M, [8, null]], {
                    value: [0, "value"]
                }, null), (l()(), t.Xb(-1, null, ["User"])), (l()(), t.Db(38, 0, null, null, 3, "div", [
                    ["class", "invalid-feedback"]
                ], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 2, null, Dl)), t.Cb(40, 278528, null, 0, P.l, [t.Y, t.U, t.y], {
                    ngForOf: [0, "ngForOf"]
                }, null), t.Rb(131072, P.b, [t.h]), (l()(), t.Db(42, 0, null, null, 0, "span", [
                    ["class", "form-text text-muted"]
                ], null, null, null, null, null)), (l()(), t.Db(43, 0, null, null, 12, "div", [
                    ["class", "col-4"]
                ], null, null, null, null, null)), (l()(), t.Db(44, 0, null, null, 11, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(45, 0, null, null, 1, "label", [
                    ["style", "width: 100%;"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Default command"])), (l()(), t.Db(47, 0, null, null, 8, "span", [
                    ["class", "kt-switch kt-switch--icon kt-switch--outline kt-switch--success"]
                ], null, null, null, null, null)), (l()(), t.Db(48, 0, null, null, 7, "label", [], null, null, null, null, null)), (l()(), t.Db(49, 0, null, null, 5, "input", [
                    ["checked", ""],
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
                    var a = !0,
                        e = l.component;
                    return "change" === n && (a = !1 !== t.Pb(l, 50).onChange(u.target.checked) && a), "blur" === n && (a = !1 !== t.Pb(l, 50).onTouched() && a), "ngModelChange" === n && (a = !1 !== (e.options.data.extreme_def_cmd = u) && a), a
                }), null, null)), t.Cb(50, 16384, null, 0, D.b, [t.M, t.n], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.b]), t.Cb(52, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(54, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null), (l()(), t.Db(55, 0, null, null, 0, "span", [], null, null, null, null, null)), (l()(), t.Db(56, 0, null, null, 12, "div", [
                    ["class", "col-4"]
                ], null, null, null, null, null)), (l()(), t.Db(57, 0, null, null, 11, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(58, 0, null, null, 1, "label", [
                    ["style", "width: 100%;"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Default attribute"])), (l()(), t.Db(60, 0, null, null, 8, "span", [
                    ["class", "kt-switch kt-switch--icon kt-switch--outline kt-switch--success"]
                ], null, null, null, null, null)), (l()(), t.Db(61, 0, null, null, 7, "label", [], null, null, null, null, null)), (l()(), t.Db(62, 0, null, null, 5, "input", [
                    ["checked", ""],
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
                    var a = !0,
                        e = l.component;
                    return "change" === n && (a = !1 !== t.Pb(l, 63).onChange(u.target.checked) && a), "blur" === n && (a = !1 !== t.Pb(l, 63).onTouched() && a), "ngModelChange" === n && (a = !1 !== (e.options.data.extreme_def_attr = u) && a), a
                }), null, null)), t.Cb(63, 16384, null, 0, D.b, [t.M, t.n], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.b]), t.Cb(65, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(67, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null), (l()(), t.Db(68, 0, null, null, 0, "span", [], null, null, null, null, null)), (l()(), t.Db(69, 0, null, null, 19, "div", [
                    ["class", "accordion accordion-light  accordion-toggle-arrow"]
                ], null, null, null, null, null)), (l()(), t.Db(70, 0, null, null, 18, "div", [
                    ["class", "card"]
                ], null, null, null, null, null)), (l()(), t.Db(71, 0, null, null, 5, "div", [
                    ["class", "card-header"]
                ], null, null, null, null, null)), (l()(), t.Db(72, 0, null, null, 4, "div", [
                    ["class", "card-title collapsed"],
                    ["data-toggle", "collapse"]
                ], [
                    [1, "aria-expanded", 0]
                ], [
                    [null, "click"]
                ], (function(l, n, u) {
                    var t = !0,
                        a = l.component;
                    return "click" === n && (t = 0 != (a.notCollapsedMH3C = !a.notCollapsedMH3C) && t), t
                }), null, null)), t.Ub(512, null, P.D, P.E, [t.y, t.z, t.n, t.M]), t.Cb(74, 278528, null, 0, P.k, [P.D], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), t.Sb(75, {
                    collapsed: 0
                }), (l()(), t.Xb(-1, null, ["Manual Configuration"])), (l()(), t.Db(77, 0, null, null, 11, "div", [], [
                    [2, "collapse", null],
                    [2, "show", null]
                ], null, null, null, null)), t.Cb(78, 16384, null, 0, y.m, [], {
                    collapsed: [0, "collapsed"]
                }, null), (l()(), t.Db(79, 0, null, null, 9, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (l()(), t.Db(80, 0, null, null, 8, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(81, 0, null, null, 1, "label", [
                    ["class", "pull-right"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Manual Configuration"])), (l()(), t.Db(83, 0, null, null, 5, "textarea", [
                    ["class", "form-control form-control-sm"],
                    ["rows", "5"]
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
                    var a = !0,
                        e = l.component;
                    return "input" === n && (a = !1 !== t.Pb(l, 84)._handleInput(u.target.value) && a), "blur" === n && (a = !1 !== t.Pb(l, 84).onTouched() && a), "compositionstart" === n && (a = !1 !== t.Pb(l, 84)._compositionStart() && a), "compositionend" === n && (a = !1 !== t.Pb(l, 84)._compositionEnd(u.target.value) && a), "ngModelChange" === n && (a = !1 !== (e.options.data.extreme_manual = u) && a), a
                }), null, null)), t.Cb(84, 16384, null, 0, D.e, [t.M, t.n, [2, D.a]], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.e]), t.Cb(86, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(88, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null)], (function(l, n) {
                    var u = n.component;
                    l(n, 9, 0, u.options.data.extreme_enable);
                    var a, e, o = l(n, 24, 0, null == (a = t.Yb(n, 22, 1, t.Pb(n, 23).transform(u.validation))) ? null : a.extreme_privlvl);
                    l(n, 22, 0, "form-control form-control-sm", o), l(n, 27, 0, u.options.data.extreme_privlvl), l(n, 31, 0, "15"), l(n, 32, 0, "15"), l(n, 35, 0, "0"), l(n, 36, 0, "0"), l(n, 40, 0, null == (e = t.Yb(n, 40, 0, t.Pb(n, 41).transform(u.validation))) ? null : e.extreme_privlvl), l(n, 52, 0, u.options.data.extreme_def_cmd), l(n, 65, 0, u.options.data.extreme_def_attr);
                    var s = l(n, 75, 0, !u.notCollapsedMH3C);
                    l(n, 74, 0, "card-title collapsed", s), l(n, 78, 0, !u.notCollapsedMH3C), l(n, 86, 0, u.options.data.extreme_manual)
                }), (function(l, n) {
                    var u = n.component;
                    l(n, 6, 0, t.Pb(n, 11).ngClassUntouched, t.Pb(n, 11).ngClassTouched, t.Pb(n, 11).ngClassPristine, t.Pb(n, 11).ngClassDirty, t.Pb(n, 11).ngClassValid, t.Pb(n, 11).ngClassInvalid, t.Pb(n, 11).ngClassPending), l(n, 20, 0, t.Pb(n, 29).ngClassUntouched, t.Pb(n, 29).ngClassTouched, t.Pb(n, 29).ngClassPristine, t.Pb(n, 29).ngClassDirty, t.Pb(n, 29).ngClassValid, t.Pb(n, 29).ngClassInvalid, t.Pb(n, 29).ngClassPending), l(n, 49, 0, t.Pb(n, 54).ngClassUntouched, t.Pb(n, 54).ngClassTouched, t.Pb(n, 54).ngClassPristine, t.Pb(n, 54).ngClassDirty, t.Pb(n, 54).ngClassValid, t.Pb(n, 54).ngClassInvalid, t.Pb(n, 54).ngClassPending), l(n, 62, 0, t.Pb(n, 67).ngClassUntouched, t.Pb(n, 67).ngClassTouched, t.Pb(n, 67).ngClassPristine, t.Pb(n, 67).ngClassDirty, t.Pb(n, 67).ngClassValid, t.Pb(n, 67).ngClassInvalid, t.Pb(n, 67).ngClassPending), l(n, 72, 0, !u.notCollapsedMH3C), l(n, 77, 0, !0, !t.Pb(n, 78).collapsed), l(n, 83, 0, t.Pb(n, 88).ngClassUntouched, t.Pb(n, 88).ngClassTouched, t.Pb(n, 88).ngClassPristine, t.Pb(n, 88).ngClassDirty, t.Pb(n, 88).ngClassValid, t.Pb(n, 88).ngClassInvalid, t.Pb(n, 88).ngClassPending)
                }))
            }

            function kl(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 10, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 9, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(2, 0, null, null, 8, "div", [
                    ["class", "form-group usergroup-list"]
                ], null, null, null, null, null)), (l()(), t.Db(3, 0, null, null, 6, "kt-field-general-list", [], null, [
                    [null, "returnData"]
                ], (function(l, n, u) {
                    var t = !0;
                    return "returnData" === n && (t = !1 !== l.component.setCmdSet(u) && t), t
                }), _.b, _.a)), t.Ub(512, null, P.D, P.E, [t.y, t.z, t.n, t.M]), t.Cb(5, 278528, null, 0, P.k, [P.D], {
                    ngClass: [0, "ngClass"]
                }, null), t.Rb(131072, P.b, [t.h]), t.Sb(7, {
                    "is-invalid": 0
                }), t.Cb(8, 114688, null, 0, k.a, [M.a], {
                    data: [0, "data"],
                    params: [1, "params"],
                    errors: [2, "errors"]
                }, {
                    returnData: "returnData"
                }), t.Rb(131072, P.b, [t.h]), (l()(), t.Db(10, 0, null, null, 0, "span", [
                    ["class", "form-text text-muted"]
                ], null, null, null, null, null))], (function(l, n) {
                    var u, a, e = n.component,
                        o = l(n, 7, 0, null == (u = t.Yb(n, 5, 0, t.Pb(n, 6).transform(e.validation))) ? null : u.extreme_cmd);
                    l(n, 5, 0, o), l(n, 8, 0, e.options.data.extreme_cmd, e.list.extreme_cmd, null == (a = t.Yb(n, 8, 2, t.Pb(n, 9).transform(e.validation))) ? null : a.extreme_cmd)
                }), null)
            }

            function Ml(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 14, "ngb-tabset", [
                    ["type", "pills"]
                ], null, null, null, o.k, o.f)), t.Cb(1, 2146304, null, 1, y.Y, [y.Z], {
                    type: [0, "type"]
                }, null), t.Vb(603979776, 1, {
                    tabs: 1
                }), (l()(), t.Db(3, 0, null, null, 5, "ngb-tab", [
                    ["title", "General"]
                ], null, null, null, null, null)), t.Cb(4, 2113536, [
                    [1, 4]
                ], 2, y.W, [], {
                    title: [0, "title"]
                }, null), t.Vb(603979776, 2, {
                    titleTpls: 1
                }), t.Vb(603979776, 3, {
                    contentTpls: 1
                }), (l()(), t.sb(0, null, null, 1, null, _l)), t.Cb(8, 16384, [
                    [3, 4]
                ], 0, y.X, [t.U], null, null), (l()(), t.Db(9, 0, null, null, 5, "ngb-tab", [
                    ["title", "CMD Set"]
                ], null, null, null, null, null)), t.Cb(10, 2113536, [
                    [1, 4]
                ], 2, y.W, [], {
                    title: [0, "title"]
                }, null), t.Vb(603979776, 4, {
                    titleTpls: 1
                }), t.Vb(603979776, 5, {
                    contentTpls: 1
                }), (l()(), t.sb(0, null, null, 1, null, kl)), t.Cb(14, 16384, [
                    [5, 4]
                ], 0, y.X, [t.U], null, null)], (function(l, n) {
                    l(n, 1, 0, "pills"), l(n, 4, 0, "General"), l(n, 10, 0, "CMD Set")
                }), null)
            }
            var yl = function() {
                    function l() {}
                    return l.prototype.ngOnInit = function() {}, l
                }(),
                wl = t.Bb({
                    encapsulation: 0,
                    styles: [
                        [""]
                    ],
                    data: {}
                });

            function xl(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 14, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 13, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(2, 0, null, null, 12, "div", [
                    ["class", "form-group row"]
                ], null, null, null, null, null)), (l()(), t.Db(3, 0, null, null, 9, "div", [
                    ["class", "col-2"]
                ], null, null, null, null, null)), (l()(), t.Db(4, 0, null, null, 8, "span", [
                    ["class", "kt-switch kt-switch--sm kt-switch--outline kt-switch--success"]
                ], null, null, null, null, null)), (l()(), t.Db(5, 0, null, null, 7, "label", [], null, null, null, null, null)), (l()(), t.Db(6, 0, null, null, 5, "input", [
                    ["checked", ""],
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
                    var a = !0,
                        e = l.component;
                    return "change" === n && (a = !1 !== t.Pb(l, 7).onChange(u.target.checked) && a), "blur" === n && (a = !1 !== t.Pb(l, 7).onTouched() && a), "ngModelChange" === n && (a = !1 !== (e.options.data.silverpeak_enable = u) && a), a
                }), null, null)), t.Cb(7, 16384, null, 0, D.b, [t.M, t.n], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.b]), t.Cb(9, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(11, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null), (l()(), t.Db(12, 0, null, null, 0, "span", [], null, null, null, null, null)), (l()(), t.Db(13, 0, null, null, 1, "label", [
                    ["class", "col-10 col-form-label"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Pattern Activated"])), (l()(), t.Db(15, 0, null, null, 18, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t.Db(16, 0, null, null, 17, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(17, 0, null, null, 16, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(18, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Role"])), (l()(), t.Db(20, 0, null, null, 13, "select", [
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
                    var a = !0,
                        e = l.component;
                    return "change" === n && (a = !1 !== t.Pb(l, 21).onChange(u.target.value) && a), "blur" === n && (a = !1 !== t.Pb(l, 21).onTouched() && a), "ngModelChange" === n && (a = !1 !== (e.options.data.silverpeak_role = u) && a), a
                }), null, null)), t.Cb(21, 16384, null, 0, D.x, [t.M, t.n], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.x]), t.Cb(23, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(25, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null), (l()(), t.Db(26, 0, null, null, 3, "option", [
                    ["selected", ""],
                    ["value", "admin"]
                ], null, null, null, null, null)), t.Cb(27, 147456, null, 0, D.t, [t.n, t.M, [2, D.x]], {
                    value: [0, "value"]
                }, null), t.Cb(28, 147456, null, 0, D.C, [t.n, t.M, [8, null]], {
                    value: [0, "value"]
                }, null), (l()(), t.Xb(-1, null, ["admin"])), (l()(), t.Db(30, 0, null, null, 3, "option", [
                    ["value", "monitor"]
                ], null, null, null, null, null)), t.Cb(31, 147456, null, 0, D.t, [t.n, t.M, [2, D.x]], {
                    value: [0, "value"]
                }, null), t.Cb(32, 147456, null, 0, D.C, [t.n, t.M, [8, null]], {
                    value: [0, "value"]
                }, null), (l()(), t.Xb(-1, null, ["monitor"])), (l()(), t.Db(34, 0, null, null, 19, "div", [
                    ["class", "accordion accordion-light  accordion-toggle-arrow"]
                ], null, null, null, null, null)), (l()(), t.Db(35, 0, null, null, 18, "div", [
                    ["class", "card"]
                ], null, null, null, null, null)), (l()(), t.Db(36, 0, null, null, 5, "div", [
                    ["class", "card-header"]
                ], null, null, null, null, null)), (l()(), t.Db(37, 0, null, null, 4, "div", [
                    ["class", "card-title collapsed"],
                    ["data-toggle", "collapse"]
                ], [
                    [1, "aria-expanded", 0]
                ], [
                    [null, "click"]
                ], (function(l, n, u) {
                    var t = !0,
                        a = l.component;
                    return "click" === n && (t = 0 != (a.notCollapsedMFOS = !a.notCollapsedMFOS) && t), t
                }), null, null)), t.Ub(512, null, P.D, P.E, [t.y, t.z, t.n, t.M]), t.Cb(39, 278528, null, 0, P.k, [P.D], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), t.Sb(40, {
                    collapsed: 0
                }), (l()(), t.Xb(-1, null, ["Manual Configuration"])), (l()(), t.Db(42, 0, null, null, 11, "div", [], [
                    [2, "collapse", null],
                    [2, "show", null]
                ], null, null, null, null)), t.Cb(43, 16384, null, 0, y.m, [], {
                    collapsed: [0, "collapsed"]
                }, null), (l()(), t.Db(44, 0, null, null, 9, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (l()(), t.Db(45, 0, null, null, 8, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(46, 0, null, null, 1, "label", [
                    ["class", "pull-right"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Manual Configuration"])), (l()(), t.Db(48, 0, null, null, 5, "textarea", [
                    ["class", "form-control form-control-sm"],
                    ["rows", "5"]
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
                    var a = !0,
                        e = l.component;
                    return "input" === n && (a = !1 !== t.Pb(l, 49)._handleInput(u.target.value) && a), "blur" === n && (a = !1 !== t.Pb(l, 49).onTouched() && a), "compositionstart" === n && (a = !1 !== t.Pb(l, 49)._compositionStart() && a), "compositionend" === n && (a = !1 !== t.Pb(l, 49)._compositionEnd(u.target.value) && a), "ngModelChange" === n && (a = !1 !== (e.options.data.silverpeak_manual = u) && a), a
                }), null, null)), t.Cb(49, 16384, null, 0, D.e, [t.M, t.n, [2, D.a]], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.e]), t.Cb(51, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(53, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null)], (function(l, n) {
                    var u = n.component;
                    l(n, 9, 0, u.options.data.silverpeak_enable), l(n, 23, 0, u.options.data.silverpeak_role), l(n, 27, 0, "admin"), l(n, 28, 0, "admin"), l(n, 31, 0, "monitor"), l(n, 32, 0, "monitor");
                    var t = l(n, 40, 0, !u.notCollapsedMFOS);
                    l(n, 39, 0, "card-title collapsed", t), l(n, 43, 0, !u.notCollapsedMFOS), l(n, 51, 0, u.options.data.silverpeak_manual)
                }), (function(l, n) {
                    var u = n.component;
                    l(n, 6, 0, t.Pb(n, 11).ngClassUntouched, t.Pb(n, 11).ngClassTouched, t.Pb(n, 11).ngClassPristine, t.Pb(n, 11).ngClassDirty, t.Pb(n, 11).ngClassValid, t.Pb(n, 11).ngClassInvalid, t.Pb(n, 11).ngClassPending), l(n, 20, 0, t.Pb(n, 25).ngClassUntouched, t.Pb(n, 25).ngClassTouched, t.Pb(n, 25).ngClassPristine, t.Pb(n, 25).ngClassDirty, t.Pb(n, 25).ngClassValid, t.Pb(n, 25).ngClassInvalid, t.Pb(n, 25).ngClassPending), l(n, 37, 0, !u.notCollapsedMFOS), l(n, 42, 0, !0, !t.Pb(n, 43).collapsed), l(n, 48, 0, t.Pb(n, 53).ngClassUntouched, t.Pb(n, 53).ngClassTouched, t.Pb(n, 53).ngClassPristine, t.Pb(n, 53).ngClassDirty, t.Pb(n, 53).ngClassValid, t.Pb(n, 53).ngClassInvalid, t.Pb(n, 53).ngClassPending)
                }))
            }
            var Ul = u("mVsa"),
                Sl = u("eDkP"),
                Tl = u("Fzqc"),
                Il = u("lLAP"),
                Xl = u("Wf4p"),
                Vl = u("ZYjt"),
                Ol = u("dWZg"),
                Yl = u("4c35"),
                El = u("qAlS"),
                jl = u("wFw1"),
                Zl = t.Bb({
                    encapsulation: 2,
                    styles: [".mat-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;max-height:calc(100vh - 48px);border-radius:4px;outline:0;min-height:64px}.mat-menu-panel.ng-animating{pointer-events:none}@media (-ms-high-contrast:active){.mat-menu-panel{outline:solid 1px}}.mat-menu-content:not(:empty){padding-top:8px;padding-bottom:8px}.mat-menu-item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative}.mat-menu-item::-moz-focus-inner{border:0}.mat-menu-item[disabled]{cursor:default}[dir=rtl] .mat-menu-item{text-align:right}.mat-menu-item .mat-icon{margin-right:16px;vertical-align:middle}.mat-menu-item .mat-icon svg{vertical-align:top}[dir=rtl] .mat-menu-item .mat-icon{margin-left:16px;margin-right:0}.mat-menu-item[disabled]{pointer-events:none}@media (-ms-high-contrast:active){.mat-menu-item-highlighted,.mat-menu-item.cdk-keyboard-focused,.mat-menu-item.cdk-program-focused{outline:dotted 1px}}.mat-menu-item-submenu-trigger{padding-right:32px}.mat-menu-item-submenu-trigger::after{width:0;height:0;border-style:solid;border-width:5px 0 5px 5px;border-color:transparent transparent transparent currentColor;content:'';display:inline-block;position:absolute;top:50%;right:16px;transform:translateY(-50%)}[dir=rtl] .mat-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}[dir=rtl] .mat-menu-item-submenu-trigger::after{right:auto;left:16px;transform:rotateY(180deg) translateY(-50%)}button.mat-menu-item{width:100%}.mat-menu-item .mat-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}"],
                    data: {
                        animation: [{
                            type: 7,
                            name: "transformMenu",
                            definitions: [{
                                type: 0,
                                name: "void",
                                styles: {
                                    type: 6,
                                    styles: {
                                        opacity: 0,
                                        transform: "scale(0.8)"
                                    },
                                    offset: null
                                },
                                options: void 0
                            }, {
                                type: 1,
                                expr: "void => enter",
                                animation: {
                                    type: 3,
                                    steps: [{
                                        type: 11,
                                        selector: ".mat-menu-content, .mat-mdc-menu-content",
                                        animation: {
                                            type: 4,
                                            styles: {
                                                type: 6,
                                                styles: {
                                                    opacity: 1
                                                },
                                                offset: null
                                            },
                                            timings: "100ms linear"
                                        },
                                        options: null
                                    }, {
                                        type: 4,
                                        styles: {
                                            type: 6,
                                            styles: {
                                                transform: "scale(1)"
                                            },
                                            offset: null
                                        },
                                        timings: "120ms cubic-bezier(0, 0, 0.2, 1)"
                                    }],
                                    options: null
                                },
                                options: null
                            }, {
                                type: 1,
                                expr: "* => void",
                                animation: {
                                    type: 4,
                                    styles: {
                                        type: 6,
                                        styles: {
                                            opacity: 0
                                        },
                                        offset: null
                                    },
                                    timings: "100ms 25ms linear"
                                },
                                options: null
                            }],
                            options: {}
                        }, {
                            type: 7,
                            name: "fadeInItems",
                            definitions: [{
                                type: 0,
                                name: "showing",
                                styles: {
                                    type: 6,
                                    styles: {
                                        opacity: 1
                                    },
                                    offset: null
                                },
                                options: void 0
                            }, {
                                type: 1,
                                expr: "void => *",
                                animation: [{
                                    type: 6,
                                    styles: {
                                        opacity: 0
                                    },
                                    offset: null
                                }, {
                                    type: 4,
                                    styles: null,
                                    timings: "400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)"
                                }],
                                options: null
                            }],
                            options: {}
                        }]
                    }
                });

            function Al(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 4, "div", [
                    ["class", "mat-menu-panel"],
                    ["role", "menu"],
                    ["tabindex", "-1"]
                ], [
                    [24, "@transformMenu", 0]
                ], [
                    [null, "keydown"],
                    [null, "click"],
                    [null, "@transformMenu.start"],
                    [null, "@transformMenu.done"]
                ], (function(l, n, u) {
                    var t = !0,
                        a = l.component;
                    return "keydown" === n && (t = !1 !== a._handleKeydown(u) && t), "click" === n && (t = !1 !== a.closed.emit("click") && t), "@transformMenu.start" === n && (t = !1 !== a._onAnimationStart(u) && t), "@transformMenu.done" === n && (t = !1 !== a._onAnimationDone(u) && t), t
                }), null, null)), t.Ub(512, null, P.D, P.E, [t.y, t.z, t.n, t.M]), t.Cb(2, 278528, null, 0, P.k, [P.D], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), (l()(), t.Db(3, 0, null, null, 1, "div", [
                    ["class", "mat-menu-content"]
                ], null, null, null, null, null)), t.Ob(null, 0)], (function(l, n) {
                    l(n, 2, 0, "mat-menu-panel", n.component._classList)
                }), (function(l, n) {
                    l(n, 0, 0, n.component._panelAnimationState)
                }))
            }

            function Nl(l) {
                return t.Zb(2, [t.Vb(671088640, 1, {
                    templateRef: 0
                }), (l()(), t.sb(0, [
                    [1, 2]
                ], null, 0, null, Al))], null, null)
            }
            var Fl = t.Bb({
                encapsulation: 2,
                styles: [],
                data: {}
            });

            function Rl(l) {
                return t.Zb(2, [t.Ob(null, 0), (l()(), t.Db(1, 0, null, null, 1, "div", [
                    ["class", "mat-menu-ripple mat-ripple"],
                    ["matRipple", ""]
                ], [
                    [2, "mat-ripple-unbounded", null]
                ], null, null, null, null)), t.Cb(2, 212992, null, 0, Xl.r, [t.n, t.G, Ol.a, [2, Xl.l],
                    [2, jl.a]
                ], {
                    disabled: [0, "disabled"],
                    trigger: [1, "trigger"]
                }, null)], (function(l, n) {
                    var u = n.component;
                    l(n, 2, 0, u.disableRipple || u.disabled, u._getHostElement())
                }), (function(l, n) {
                    l(n, 1, 0, t.Pb(n, 2).unbounded)
                }))
            }
            var zl = function() {
                    function l(l) {
                        this.toastr = l, this.list = {
                            acl: new w.a("acl")
                        }
                    }
                    return l.prototype.ngOnInit = function() {
                        var l = this;
                        console.log(this.options.data), this.validation.subscribe((function(n) {
                            for (var u in n)
                                if (n[u])
                                    for (var t = 0; t < n[u].length; t++) l.toastr.error(n[u][t])
                        }))
                    }, l.prototype.trigger = function(l) {
                        this.options.data[l] = +!this.options.data[l]
                    }, l.prototype.setAcl = function(l) {
                        console.log(l), this.options.data.acl = l
                    }, l
                }(),
                Gl = t.Bb({
                    encapsulation: 0,
                    styles: [
                        [""]
                    ],
                    data: {}
                });

            function Wl(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), t.Xb(1, null, ["", ""]))], null, (function(l, n) {
                    l(n, 1, 0, n.context.$implicit)
                }))
            }

            function Hl(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 24, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 19, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(2, 0, null, null, 18, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(3, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Name"])), (l()(), t.Db(5, 0, null, null, 9, "input", [
                    ["class", "form-control form-control-sm"],
                    ["placeholder", "Service Name"],
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
                    var a = !0,
                        e = l.component;
                    return "input" === n && (a = !1 !== t.Pb(l, 10)._handleInput(u.target.value) && a), "blur" === n && (a = !1 !== t.Pb(l, 10).onTouched() && a), "compositionstart" === n && (a = !1 !== t.Pb(l, 10)._compositionStart() && a), "compositionend" === n && (a = !1 !== t.Pb(l, 10)._compositionEnd(u.target.value) && a), "ngModelChange" === n && (a = !1 !== (e.options.data.name = u) && a), a
                }), null, null)), t.Ub(512, null, P.D, P.E, [t.y, t.z, t.n, t.M]), t.Cb(7, 278528, null, 0, P.k, [P.D], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), t.Rb(131072, P.b, [t.h]), t.Sb(9, {
                    "is-invalid": 0
                }), t.Cb(10, 16384, null, 0, D.e, [t.M, t.n, [2, D.a]], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.e]), t.Cb(12, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(14, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null), (l()(), t.Db(15, 0, null, null, 3, "div", [
                    ["class", "invalid-feedback"]
                ], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 2, null, Wl)), t.Cb(17, 278528, null, 0, P.l, [t.Y, t.U, t.y], {
                    ngForOf: [0, "ngForOf"]
                }, null), t.Rb(131072, P.b, [t.h]), (l()(), t.Db(19, 0, null, null, 1, "span", [
                    ["class", "form-text text-muted"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["it should be unique, but you can change it later"])), (l()(), t.Db(21, 0, null, null, 3, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(22, 0, null, null, 2, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(23, 0, null, null, 1, "kt-field-general-list", [], null, [
                    [null, "returnData"]
                ], (function(l, n, u) {
                    var t = !0;
                    return "returnData" === n && (t = !1 !== l.component.setAcl(u) && t), t
                }), _.b, _.a)), t.Cb(24, 114688, null, 0, k.a, [M.a], {
                    data: [0, "data"],
                    params: [1, "params"]
                }, {
                    returnData: "returnData"
                }), (l()(), t.Db(25, 0, null, null, 15, "div", [
                    ["class", "form-group row"]
                ], null, null, null, null, null)), (l()(), t.Db(26, 0, null, null, 9, "div", [
                    ["class", "col-2"]
                ], null, null, null, null, null)), (l()(), t.Db(27, 0, null, null, 8, "span", [
                    ["class", "kt-switch kt-switch--sm kt-switch--outline kt-switch--warning"]
                ], null, null, null, null, null)), (l()(), t.Db(28, 0, null, null, 7, "label", [], null, null, null, null, null)), (l()(), t.Db(29, 0, null, null, 5, "input", [
                    ["checked", ""],
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
                    var a = !0,
                        e = l.component;
                    return "change" === n && (a = !1 !== t.Pb(l, 30).onChange(u.target.checked) && a), "blur" === n && (a = !1 !== t.Pb(l, 30).onTouched() && a), "ngModelChange" === n && (a = !1 !== (e.options.data.manual_conf_only = u) && a), a
                }), null, null)), t.Cb(30, 16384, null, 0, D.b, [t.M, t.n], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.b]), t.Cb(32, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(34, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null), (l()(), t.Db(35, 0, null, null, 0, "span", [], null, null, null, null, null)), (l()(), t.Db(36, 0, null, null, 1, "label", [
                    ["class", "col-10 col-form-label"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Only manual configuration"])), (l()(), t.Db(38, 0, null, null, 2, "div", [
                    ["class", "col-12"]
                ], null, null, null, null, null)), (l()(), t.Db(39, 0, null, null, 1, "span", [
                    ["class", "form-text text-muted"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["if checked, only manual configuration will be used"])), (l()(), t.Db(41, 0, null, null, 19, "div", [
                    ["class", "accordion accordion-light  accordion-toggle-arrow"]
                ], null, null, null, null, null)), (l()(), t.Db(42, 0, null, null, 18, "div", [
                    ["class", "card"]
                ], null, null, null, null, null)), (l()(), t.Db(43, 0, null, null, 5, "div", [
                    ["class", "card-header"]
                ], null, null, null, null, null)), (l()(), t.Db(44, 0, null, null, 4, "div", [
                    ["class", "card-title collapsed"],
                    ["data-toggle", "collapse"]
                ], [
                    [1, "aria-expanded", 0]
                ], [
                    [null, "click"]
                ], (function(l, n, u) {
                    var t = !0,
                        a = l.component;
                    return "click" === n && (t = 0 != (a.notCollapsedMS = !a.notCollapsedMS) && t), t
                }), null, null)), t.Ub(512, null, P.D, P.E, [t.y, t.z, t.n, t.M]), t.Cb(46, 278528, null, 0, P.k, [P.D], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), t.Sb(47, {
                    collapsed: 0
                }), (l()(), t.Xb(-1, null, ["Manual Configuration"])), (l()(), t.Db(49, 0, null, null, 11, "div", [], [
                    [2, "collapse", null],
                    [2, "show", null]
                ], null, null, null, null)), t.Cb(50, 16384, null, 0, y.m, [], {
                    collapsed: [0, "collapsed"]
                }, null), (l()(), t.Db(51, 0, null, null, 9, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (l()(), t.Db(52, 0, null, null, 8, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(53, 0, null, null, 1, "label", [
                    ["class", "pull-right"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Manual Configuration"])), (l()(), t.Db(55, 0, null, null, 5, "textarea", [
                    ["class", "form-control form-control-sm"],
                    ["rows", "5"]
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
                    var a = !0,
                        e = l.component;
                    return "input" === n && (a = !1 !== t.Pb(l, 56)._handleInput(u.target.value) && a), "blur" === n && (a = !1 !== t.Pb(l, 56).onTouched() && a), "compositionstart" === n && (a = !1 !== t.Pb(l, 56)._compositionStart() && a), "compositionend" === n && (a = !1 !== t.Pb(l, 56)._compositionEnd(u.target.value) && a), "ngModelChange" === n && (a = !1 !== (e.options.data.manual = u) && a), a
                }), null, null)), t.Cb(56, 16384, null, 0, D.e, [t.M, t.n, [2, D.a]], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.e]), t.Cb(58, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(60, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null)], (function(l, n) {
                    var u, a, e = n.component,
                        o = l(n, 9, 0, null == (u = t.Yb(n, 7, 1, t.Pb(n, 8).transform(e.validation))) ? null : u.name);
                    l(n, 7, 0, "form-control form-control-sm", o), l(n, 12, 0, e.options.data.name), l(n, 17, 0, null == (a = t.Yb(n, 17, 0, t.Pb(n, 18).transform(e.validation))) ? null : a.name), l(n, 24, 0, e.options.data.acl, e.list.acl), l(n, 32, 0, e.options.data.manual_conf_only);
                    var s = l(n, 47, 0, !e.notCollapsedMS);
                    l(n, 46, 0, "card-title collapsed", s), l(n, 50, 0, !e.notCollapsedMS), l(n, 58, 0, e.options.data.manual)
                }), (function(l, n) {
                    var u = n.component;
                    l(n, 5, 0, t.Pb(n, 14).ngClassUntouched, t.Pb(n, 14).ngClassTouched, t.Pb(n, 14).ngClassPristine, t.Pb(n, 14).ngClassDirty, t.Pb(n, 14).ngClassValid, t.Pb(n, 14).ngClassInvalid, t.Pb(n, 14).ngClassPending), l(n, 29, 0, t.Pb(n, 34).ngClassUntouched, t.Pb(n, 34).ngClassTouched, t.Pb(n, 34).ngClassPristine, t.Pb(n, 34).ngClassDirty, t.Pb(n, 34).ngClassValid, t.Pb(n, 34).ngClassInvalid, t.Pb(n, 34).ngClassPending), l(n, 44, 0, !u.notCollapsedMS), l(n, 49, 0, !0, !t.Pb(n, 50).collapsed), l(n, 55, 0, t.Pb(n, 60).ngClassUntouched, t.Pb(n, 60).ngClassTouched, t.Pb(n, 60).ngClassPristine, t.Pb(n, 60).ngClassDirty, t.Pb(n, 60).ngClassValid, t.Pb(n, 60).ngClassInvalid, t.Pb(n, 60).ngClassPending)
                }))
            }

            function Ll(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "kt-cisco-general", [], null, null, null, O, U)), t.Cb(1, 114688, null, 0, x, [], {
                    options: [0, "options"],
                    validation: [1, "validation"]
                }, null)], (function(l, n) {
                    var u = n.component;
                    l(n, 1, 0, u.options, u.validation)
                }), null)
            }

            function Bl(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 5, "ngb-tab", [
                    ["title", "Cisco General"]
                ], null, null, null, null, null)), t.Cb(1, 2113536, [
                    [13, 4]
                ], 2, y.W, [], {
                    title: [0, "title"]
                }, null), t.Vb(603979776, 16, {
                    titleTpls: 1
                }), t.Vb(603979776, 17, {
                    contentTpls: 1
                }), (l()(), t.sb(0, null, null, 1, null, Ll)), t.Cb(5, 16384, [
                    [17, 4]
                ], 0, y.X, [t.U], null, null)], (function(l, n) {
                    l(n, 1, 0, "Cisco General")
                }), null)
            }

            function $l(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "kt-cisco-wlc", [], null, null, null, F, E)), t.Cb(1, 114688, null, 0, Y, [], {
                    options: [0, "options"],
                    validation: [1, "validation"]
                }, null)], (function(l, n) {
                    var u = n.component;
                    l(n, 1, 0, u.options, u.validation)
                }), null)
            }

            function Jl(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 5, "ngb-tab", [
                    ["title", "Cisco WLC"]
                ], null, null, null, null, null)), t.Cb(1, 2113536, [
                    [13, 4]
                ], 2, y.W, [], {
                    title: [0, "title"]
                }, null), t.Vb(603979776, 18, {
                    titleTpls: 1
                }), t.Vb(603979776, 19, {
                    contentTpls: 1
                }), (l()(), t.sb(0, null, null, 1, null, $l)), t.Cb(5, 16384, [
                    [19, 4]
                ], 0, y.X, [t.U], null, null)], (function(l, n) {
                    l(n, 1, 0, "Cisco WLC")
                }), null)
            }

            function ql(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "kt-juniper-general", [], null, null, null, B, z)), t.Cb(1, 114688, null, 0, R, [], {
                    options: [0, "options"],
                    validation: [1, "validation"]
                }, null)], (function(l, n) {
                    var u = n.component;
                    l(n, 1, 0, u.options, u.validation)
                }), null)
            }

            function Kl(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 5, "ngb-tab", [
                    ["title", "Juniper"]
                ], null, null, null, null, null)), t.Cb(1, 2113536, [
                    [13, 4]
                ], 2, y.W, [], {
                    title: [0, "title"]
                }, null), t.Vb(603979776, 20, {
                    titleTpls: 1
                }), t.Vb(603979776, 21, {
                    contentTpls: 1
                }), (l()(), t.sb(0, null, null, 1, null, ql)), t.Cb(5, 16384, [
                    [21, 4]
                ], 0, y.X, [t.U], null, null)], (function(l, n) {
                    l(n, 1, 0, "Juniper")
                }), null)
            }

            function Ql(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "kt-h3c-general", [], null, null, null, ll, J)), t.Cb(1, 114688, null, 0, $, [], {
                    options: [0, "options"],
                    validation: [1, "validation"]
                }, null)], (function(l, n) {
                    var u = n.component;
                    l(n, 1, 0, u.options, u.validation)
                }), null)
            }

            function ln(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 5, "ngb-tab", [
                    ["title", "H3C"]
                ], null, null, null, null, null)), t.Cb(1, 2113536, [
                    [13, 4]
                ], 2, y.W, [], {
                    title: [0, "title"]
                }, null), t.Vb(603979776, 22, {
                    titleTpls: 1
                }), t.Vb(603979776, 23, {
                    contentTpls: 1
                }), (l()(), t.sb(0, null, null, 1, null, Ql)), t.Cb(5, 16384, [
                    [23, 4]
                ], 0, y.X, [t.U], null, null)], (function(l, n) {
                    l(n, 1, 0, "H3C")
                }), null)
            }

            function nn(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "kt-huawei-general", [], null, null, null, ol, ul)), t.Cb(1, 114688, null, 0, nl, [], {
                    options: [0, "options"],
                    validation: [1, "validation"]
                }, null)], (function(l, n) {
                    var u = n.component;
                    l(n, 1, 0, u.options, u.validation)
                }), null)
            }

            function un(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 5, "ngb-tab", [
                    ["title", "Huawei"]
                ], null, null, null, null, null)), t.Cb(1, 2113536, [
                    [13, 4]
                ], 2, y.W, [], {
                    title: [0, "title"]
                }, null), t.Vb(603979776, 24, {
                    titleTpls: 1
                }), t.Vb(603979776, 25, {
                    contentTpls: 1
                }), (l()(), t.sb(0, null, null, 1, null, nn)), t.Cb(5, 16384, [
                    [25, 4]
                ], 0, y.X, [t.U], null, null)], (function(l, n) {
                    l(n, 1, 0, "Huawei")
                }), null)
            }

            function tn(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "kt-paloalto-general", [], null, null, null, pl, il)), t.Cb(1, 114688, null, 0, sl, [], {
                    options: [0, "options"],
                    validation: [1, "validation"]
                }, null)], (function(l, n) {
                    var u = n.component;
                    l(n, 1, 0, u.options, u.validation)
                }), null)
            }

            function an(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 5, "ngb-tab", [
                    ["title", "Palo Alto"]
                ], null, null, null, null, null)), t.Cb(1, 2113536, [
                    [13, 4]
                ], 2, y.W, [], {
                    title: [0, "title"]
                }, null), t.Vb(603979776, 26, {
                    titleTpls: 1
                }), t.Vb(603979776, 27, {
                    contentTpls: 1
                }), (l()(), t.sb(0, null, null, 1, null, tn)), t.Cb(5, 16384, [
                    [27, 4]
                ], 0, y.X, [t.U], null, null)], (function(l, n) {
                    l(n, 1, 0, "Palo Alto")
                }), null)
            }

            function en(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "kt-fortios-general", [], null, null, null, vl, hl)), t.Cb(1, 114688, null, 0, ml, [], {
                    options: [0, "options"],
                    validation: [1, "validation"]
                }, null)], (function(l, n) {
                    var u = n.component;
                    l(n, 1, 0, u.options, u.validation)
                }), null)
            }

            function on(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 5, "ngb-tab", [
                    ["title", "FortiOS"]
                ], null, null, null, null, null)), t.Cb(1, 2113536, [
                    [13, 4]
                ], 2, y.W, [], {
                    title: [0, "title"]
                }, null), t.Vb(603979776, 28, {
                    titleTpls: 1
                }), t.Vb(603979776, 29, {
                    contentTpls: 1
                }), (l()(), t.sb(0, null, null, 1, null, en)), t.Cb(5, 16384, [
                    [29, 4]
                ], 0, y.X, [t.U], null, null)], (function(l, n) {
                    l(n, 1, 0, "FortiOS")
                }), null)
            }

            function sn(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "kt-extreme-general", [], null, null, null, Ml, Pl)), t.Cb(1, 114688, null, 0, fl, [], {
                    options: [0, "options"],
                    validation: [1, "validation"]
                }, null)], (function(l, n) {
                    var u = n.component;
                    l(n, 1, 0, u.options, u.validation)
                }), null)
            }

            function rn(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 5, "ngb-tab", [
                    ["title", "Extreme Networks"]
                ], null, null, null, null, null)), t.Cb(1, 2113536, [
                    [13, 4]
                ], 2, y.W, [], {
                    title: [0, "title"]
                }, null), t.Vb(603979776, 30, {
                    titleTpls: 1
                }), t.Vb(603979776, 31, {
                    contentTpls: 1
                }), (l()(), t.sb(0, null, null, 1, null, sn)), t.Cb(5, 16384, [
                    [31, 4]
                ], 0, y.X, [t.U], null, null)], (function(l, n) {
                    l(n, 1, 0, "Extreme Networks")
                }), null)
            }

            function bn(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "kt-silverpeak-general", [], null, null, null, xl, wl)), t.Cb(1, 114688, null, 0, yl, [], {
                    options: [0, "options"],
                    validation: [1, "validation"]
                }, null)], (function(l, n) {
                    var u = n.component;
                    l(n, 1, 0, u.options, u.validation)
                }), null)
            }

            function cn(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 5, "ngb-tab", [
                    ["title", "Silver Peak"]
                ], null, null, null, null, null)), t.Cb(1, 2113536, [
                    [13, 4]
                ], 2, y.W, [], {
                    title: [0, "title"]
                }, null), t.Vb(603979776, 32, {
                    titleTpls: 1
                }), t.Vb(603979776, 33, {
                    contentTpls: 1
                }), (l()(), t.sb(0, null, null, 1, null, bn)), t.Cb(5, 16384, [
                    [33, 4]
                ], 0, y.X, [t.U], null, null)], (function(l, n) {
                    l(n, 1, 0, "Silver Peak")
                }), null)
            }

            function dn(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 0, "div", [
                    ["class", "tacgui-blockui-main"]
                ], null, null, null, null, null))], null, null)
            }

            function gn(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 3, "div", [
                    ["class", "tacgui-blockui-main-message"]
                ], null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 0, "div", [
                    ["class", "kt-spinner kt-spinner--sm kt-spinner--success"]
                ], null, null, null, null, null)), (l()(), t.Db(2, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Please wait..."]))], null, null)
            }

            function pn(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 146, "div", [
                    ["class", "col-md-9 col-lg-9"]
                ], null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 145, "div", [
                    ["class", "card m-3"]
                ], null, null, null, null, null)), (l()(), t.Db(2, 0, null, null, 138, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (l()(), t.Db(3, 0, null, null, 107, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t.Db(4, 0, null, null, 106, "div", [
                    ["class", "col-12"]
                ], null, null, null, null, null)), (l()(), t.Db(5, 16777216, null, null, 2, "button", [
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-sm btn-dark mat-menu-trigger"],
                    ["mat-button", ""]
                ], [
                    [1, "aria-expanded", 0]
                ], [
                    [null, "mousedown"],
                    [null, "keydown"],
                    [null, "click"]
                ], (function(l, n, u) {
                    var a = !0;
                    return "mousedown" === n && (a = !1 !== t.Pb(l, 6)._handleMousedown(u) && a), "keydown" === n && (a = !1 !== t.Pb(l, 6)._handleKeydown(u) && a), "click" === n && (a = !1 !== t.Pb(l, 6)._handleClick(u) && a), a
                }), null, null)), t.Cb(6, 1196032, null, 0, Ul.g, [Sl.a, t.n, t.Y, Ul.c, [2, Ul.d],
                    [8, null],
                    [2, Tl.b], Il.g
                ], {
                    menu: [0, "menu"]
                }, null), (l()(), t.Xb(-1, null, ["Service Patterns"])), (l()(), t.Db(8, 0, null, null, 53, "mat-menu", [], null, null, null, Nl, Zl)), t.Cb(9, 1294336, [
                    ["animals", 4]
                ], 3, Ul.h, [t.n, t.G, Ul.a], null, null), t.Vb(603979776, 1, {
                    _allItems: 1
                }), t.Vb(603979776, 2, {
                    items: 1
                }), t.Vb(603979776, 3, {
                    lazyContent: 0
                }), t.Ub(2048, null, Ul.d, null, [Ul.h]), t.Ub(2048, null, Ul.b, null, [Ul.d]), (l()(), t.Db(15, 16777216, null, 0, 3, "a", [
                    ["aria-haspopup", "true"],
                    ["class", "kt-menu__link mat-menu-item mat-menu-trigger"],
                    ["mat-menu-item", ""]
                ], [
                    [1, "role", 0],
                    [2, "mat-menu-item-highlighted", null],
                    [2, "mat-menu-item-submenu-trigger", null],
                    [1, "tabindex", 0],
                    [1, "aria-disabled", 0],
                    [1, "disabled", 0],
                    [1, "aria-expanded", 0]
                ], [
                    [null, "click"],
                    [null, "mouseenter"],
                    [null, "mousedown"],
                    [null, "keydown"]
                ], (function(l, n, u) {
                    var a = !0;
                    return "click" === n && (a = !1 !== t.Pb(l, 16)._checkDisabled(u) && a), "mouseenter" === n && (a = !1 !== t.Pb(l, 16)._handleMouseEnter() && a), "mousedown" === n && (a = !1 !== t.Pb(l, 17)._handleMousedown(u) && a), "keydown" === n && (a = !1 !== t.Pb(l, 17)._handleKeydown(u) && a), "click" === n && (a = !1 !== t.Pb(l, 17)._handleClick(u) && a), a
                }), Rl, Fl)), t.Cb(16, 180224, [
                    [1, 4],
                    [2, 4]
                ], 0, Ul.e, [t.n, P.d, Il.g, [2, Ul.b]], null, null), t.Cb(17, 1196032, null, 0, Ul.g, [Sl.a, t.n, t.Y, Ul.c, [2, Ul.d],
                    [6, Ul.e],
                    [2, Tl.b], Il.g
                ], {
                    menu: [0, "menu"]
                }, null), (l()(), t.Xb(-1, 0, ["Cisco Systems"])), (l()(), t.Db(19, 16777216, null, 0, 3, "a", [
                    ["aria-haspopup", "true"],
                    ["class", "mat-menu-item mat-menu-trigger"],
                    ["mat-menu-item", ""]
                ], [
                    [1, "role", 0],
                    [2, "mat-menu-item-highlighted", null],
                    [2, "mat-menu-item-submenu-trigger", null],
                    [1, "tabindex", 0],
                    [1, "aria-disabled", 0],
                    [1, "disabled", 0],
                    [1, "aria-expanded", 0]
                ], [
                    [null, "click"],
                    [null, "mouseenter"],
                    [null, "mousedown"],
                    [null, "keydown"]
                ], (function(l, n, u) {
                    var a = !0;
                    return "click" === n && (a = !1 !== t.Pb(l, 20)._checkDisabled(u) && a), "mouseenter" === n && (a = !1 !== t.Pb(l, 20)._handleMouseEnter() && a), "mousedown" === n && (a = !1 !== t.Pb(l, 21)._handleMousedown(u) && a), "keydown" === n && (a = !1 !== t.Pb(l, 21)._handleKeydown(u) && a), "click" === n && (a = !1 !== t.Pb(l, 21)._handleClick(u) && a), a
                }), Rl, Fl)), t.Cb(20, 180224, [
                    [1, 4],
                    [2, 4]
                ], 0, Ul.e, [t.n, P.d, Il.g, [2, Ul.b]], null, null), t.Cb(21, 1196032, null, 0, Ul.g, [Sl.a, t.n, t.Y, Ul.c, [2, Ul.d],
                    [6, Ul.e],
                    [2, Tl.b], Il.g
                ], {
                    menu: [0, "menu"]
                }, null), (l()(), t.Xb(-1, 0, ["Juniper"])), (l()(), t.Db(23, 16777216, null, 0, 3, "a", [
                    ["aria-haspopup", "true"],
                    ["class", "mat-menu-item mat-menu-trigger"],
                    ["mat-menu-item", ""]
                ], [
                    [1, "role", 0],
                    [2, "mat-menu-item-highlighted", null],
                    [2, "mat-menu-item-submenu-trigger", null],
                    [1, "tabindex", 0],
                    [1, "aria-disabled", 0],
                    [1, "disabled", 0],
                    [1, "aria-expanded", 0]
                ], [
                    [null, "click"],
                    [null, "mouseenter"],
                    [null, "mousedown"],
                    [null, "keydown"]
                ], (function(l, n, u) {
                    var a = !0;
                    return "click" === n && (a = !1 !== t.Pb(l, 24)._checkDisabled(u) && a), "mouseenter" === n && (a = !1 !== t.Pb(l, 24)._handleMouseEnter() && a), "mousedown" === n && (a = !1 !== t.Pb(l, 25)._handleMousedown(u) && a), "keydown" === n && (a = !1 !== t.Pb(l, 25)._handleKeydown(u) && a), "click" === n && (a = !1 !== t.Pb(l, 25)._handleClick(u) && a), a
                }), Rl, Fl)), t.Cb(24, 180224, [
                    [1, 4],
                    [2, 4]
                ], 0, Ul.e, [t.n, P.d, Il.g, [2, Ul.b]], null, null), t.Cb(25, 1196032, null, 0, Ul.g, [Sl.a, t.n, t.Y, Ul.c, [2, Ul.d],
                    [6, Ul.e],
                    [2, Tl.b], Il.g
                ], {
                    menu: [0, "menu"]
                }, null), (l()(), t.Xb(-1, 0, ["H3C"])), (l()(), t.Db(27, 0, null, 0, 6, "a", [
                    ["class", "mat-menu-item"],
                    ["mat-menu-item", ""]
                ], [
                    [1, "role", 0],
                    [2, "mat-menu-item-highlighted", null],
                    [2, "mat-menu-item-submenu-trigger", null],
                    [1, "tabindex", 0],
                    [1, "aria-disabled", 0],
                    [1, "disabled", 0]
                ], [
                    [null, "click"],
                    [null, "mouseenter"]
                ], (function(l, n, u) {
                    var a = !0,
                        e = l.component;
                    return "click" === n && (a = !1 !== t.Pb(l, 28)._checkDisabled(u) && a), "mouseenter" === n && (a = !1 !== t.Pb(l, 28)._handleMouseEnter() && a), "click" === n && (a = !1 !== e.trigger("huawei_enable") && a), a
                }), Rl, Fl)), t.Cb(28, 180224, [
                    [1, 4],
                    [2, 4]
                ], 0, Ul.e, [t.n, P.d, Il.g, [2, Ul.b]], null, null), (l()(), t.Db(29, 0, null, 0, 3, "i", [
                    ["class", "la"]
                ], null, null, null, null, null)), t.Ub(512, null, P.D, P.E, [t.y, t.z, t.n, t.M]), t.Cb(31, 278528, null, 0, P.k, [P.D], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), t.Sb(32, {
                    "la-check-circle": 0,
                    "la-circle": 1
                }), (l()(), t.Xb(-1, 0, [" Huawei "])), (l()(), t.Db(34, 0, null, 0, 6, "a", [
                    ["class", "mat-menu-item"],
                    ["mat-menu-item", ""]
                ], [
                    [1, "role", 0],
                    [2, "mat-menu-item-highlighted", null],
                    [2, "mat-menu-item-submenu-trigger", null],
                    [1, "tabindex", 0],
                    [1, "aria-disabled", 0],
                    [1, "disabled", 0]
                ], [
                    [null, "click"],
                    [null, "mouseenter"]
                ], (function(l, n, u) {
                    var a = !0,
                        e = l.component;
                    return "click" === n && (a = !1 !== t.Pb(l, 35)._checkDisabled(u) && a), "mouseenter" === n && (a = !1 !== t.Pb(l, 35)._handleMouseEnter() && a), "click" === n && (a = !1 !== e.trigger("paloalto_enable") && a), a
                }), Rl, Fl)), t.Cb(35, 180224, [
                    [1, 4],
                    [2, 4]
                ], 0, Ul.e, [t.n, P.d, Il.g, [2, Ul.b]], null, null), (l()(), t.Db(36, 0, null, 0, 3, "i", [
                    ["class", "la"]
                ], null, null, null, null, null)), t.Ub(512, null, P.D, P.E, [t.y, t.z, t.n, t.M]), t.Cb(38, 278528, null, 0, P.k, [P.D], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), t.Sb(39, {
                    "la-check-circle": 0,
                    "la-circle": 1
                }), (l()(), t.Xb(-1, 0, [" Palo Alto "])), (l()(), t.Db(41, 0, null, 0, 6, "a", [
                    ["class", "mat-menu-item"],
                    ["mat-menu-item", ""]
                ], [
                    [1, "role", 0],
                    [2, "mat-menu-item-highlighted", null],
                    [2, "mat-menu-item-submenu-trigger", null],
                    [1, "tabindex", 0],
                    [1, "aria-disabled", 0],
                    [1, "disabled", 0]
                ], [
                    [null, "click"],
                    [null, "mouseenter"]
                ], (function(l, n, u) {
                    var a = !0,
                        e = l.component;
                    return "click" === n && (a = !1 !== t.Pb(l, 42)._checkDisabled(u) && a), "mouseenter" === n && (a = !1 !== t.Pb(l, 42)._handleMouseEnter() && a), "click" === n && (a = !1 !== e.trigger("fortios_enable") && a), a
                }), Rl, Fl)), t.Cb(42, 180224, [
                    [1, 4],
                    [2, 4]
                ], 0, Ul.e, [t.n, P.d, Il.g, [2, Ul.b]], null, null), (l()(), t.Db(43, 0, null, 0, 3, "i", [
                    ["class", "la"]
                ], null, null, null, null, null)), t.Ub(512, null, P.D, P.E, [t.y, t.z, t.n, t.M]), t.Cb(45, 278528, null, 0, P.k, [P.D], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), t.Sb(46, {
                    "la-check-circle": 0,
                    "la-circle": 1
                }), (l()(), t.Xb(-1, 0, [" FortiOS "])), (l()(), t.Db(48, 0, null, 0, 6, "a", [
                    ["class", "mat-menu-item"],
                    ["mat-menu-item", ""]
                ], [
                    [1, "role", 0],
                    [2, "mat-menu-item-highlighted", null],
                    [2, "mat-menu-item-submenu-trigger", null],
                    [1, "tabindex", 0],
                    [1, "aria-disabled", 0],
                    [1, "disabled", 0]
                ], [
                    [null, "click"],
                    [null, "mouseenter"]
                ], (function(l, n, u) {
                    var a = !0,
                        e = l.component;
                    return "click" === n && (a = !1 !== t.Pb(l, 49)._checkDisabled(u) && a), "mouseenter" === n && (a = !1 !== t.Pb(l, 49)._handleMouseEnter() && a), "click" === n && (a = !1 !== e.trigger("extreme_enable") && a), a
                }), Rl, Fl)), t.Cb(49, 180224, [
                    [1, 4],
                    [2, 4]
                ], 0, Ul.e, [t.n, P.d, Il.g, [2, Ul.b]], null, null), (l()(), t.Db(50, 0, null, 0, 3, "i", [
                    ["class", "la"]
                ], null, null, null, null, null)), t.Ub(512, null, P.D, P.E, [t.y, t.z, t.n, t.M]), t.Cb(52, 278528, null, 0, P.k, [P.D], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), t.Sb(53, {
                    "la-check-circle": 0,
                    "la-circle": 1
                }), (l()(), t.Xb(-1, 0, [" Extreme Networks "])), (l()(), t.Db(55, 0, null, 0, 6, "a", [
                    ["class", "mat-menu-item"],
                    ["mat-menu-item", ""]
                ], [
                    [1, "role", 0],
                    [2, "mat-menu-item-highlighted", null],
                    [2, "mat-menu-item-submenu-trigger", null],
                    [1, "tabindex", 0],
                    [1, "aria-disabled", 0],
                    [1, "disabled", 0]
                ], [
                    [null, "click"],
                    [null, "mouseenter"]
                ], (function(l, n, u) {
                    var a = !0,
                        e = l.component;
                    return "click" === n && (a = !1 !== t.Pb(l, 56)._checkDisabled(u) && a), "mouseenter" === n && (a = !1 !== t.Pb(l, 56)._handleMouseEnter() && a), "click" === n && (a = !1 !== e.trigger("silverpeak_enable") && a), a
                }), Rl, Fl)), t.Cb(56, 180224, [
                    [1, 4],
                    [2, 4]
                ], 0, Ul.e, [t.n, P.d, Il.g, [2, Ul.b]], null, null), (l()(), t.Db(57, 0, null, 0, 3, "i", [
                    ["class", "la"]
                ], null, null, null, null, null)), t.Ub(512, null, P.D, P.E, [t.y, t.z, t.n, t.M]), t.Cb(59, 278528, null, 0, P.k, [P.D], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), t.Sb(60, {
                    "la-check-circle": 0,
                    "la-circle": 1
                }), (l()(), t.Xb(-1, 0, [" Silver Peak "])), (l()(), t.Db(62, 0, null, null, 20, "mat-menu", [], null, null, null, Nl, Zl)), t.Cb(63, 1294336, [
                    ["ciscosys", 4]
                ], 3, Ul.h, [t.n, t.G, Ul.a], null, null), t.Vb(603979776, 4, {
                    _allItems: 1
                }), t.Vb(603979776, 5, {
                    items: 1
                }), t.Vb(603979776, 6, {
                    lazyContent: 0
                }), t.Ub(2048, null, Ul.d, null, [Ul.h]), t.Ub(2048, null, Ul.b, null, [Ul.d]), (l()(), t.Db(69, 0, null, 0, 6, "a", [
                    ["class", "mat-menu-item"],
                    ["mat-menu-item", ""]
                ], [
                    [1, "role", 0],
                    [2, "mat-menu-item-highlighted", null],
                    [2, "mat-menu-item-submenu-trigger", null],
                    [1, "tabindex", 0],
                    [1, "aria-disabled", 0],
                    [1, "disabled", 0]
                ], [
                    [null, "click"],
                    [null, "mouseenter"]
                ], (function(l, n, u) {
                    var a = !0,
                        e = l.component;
                    return "click" === n && (a = !1 !== t.Pb(l, 70)._checkDisabled(u) && a), "mouseenter" === n && (a = !1 !== t.Pb(l, 70)._handleMouseEnter() && a), "click" === n && (a = !1 !== e.trigger("cisco_rs_enable") && a), a
                }), Rl, Fl)), t.Cb(70, 180224, [
                    [4, 4],
                    [5, 4]
                ], 0, Ul.e, [t.n, P.d, Il.g, [2, Ul.b]], null, null), (l()(), t.Db(71, 0, null, 0, 3, "i", [
                    ["class", "la"]
                ], null, null, null, null, null)), t.Ub(512, null, P.D, P.E, [t.y, t.z, t.n, t.M]), t.Cb(73, 278528, null, 0, P.k, [P.D], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), t.Sb(74, {
                    "la-check-circle": 0,
                    "la-circle": 1
                }), (l()(), t.Xb(-1, 0, [" Cisco General "])), (l()(), t.Db(76, 0, null, 0, 6, "a", [
                    ["class", "mat-menu-item"],
                    ["mat-menu-item", ""]
                ], [
                    [1, "role", 0],
                    [2, "mat-menu-item-highlighted", null],
                    [2, "mat-menu-item-submenu-trigger", null],
                    [1, "tabindex", 0],
                    [1, "aria-disabled", 0],
                    [1, "disabled", 0]
                ], [
                    [null, "click"],
                    [null, "mouseenter"]
                ], (function(l, n, u) {
                    var a = !0,
                        e = l.component;
                    return "click" === n && (a = !1 !== t.Pb(l, 77)._checkDisabled(u) && a), "mouseenter" === n && (a = !1 !== t.Pb(l, 77)._handleMouseEnter() && a), "click" === n && (a = !1 !== e.trigger("cisco_wlc_enable") && a), a
                }), Rl, Fl)), t.Cb(77, 180224, [
                    [4, 4],
                    [5, 4]
                ], 0, Ul.e, [t.n, P.d, Il.g, [2, Ul.b]], null, null), (l()(), t.Db(78, 0, null, 0, 3, "i", [
                    ["class", "la"]
                ], null, null, null, null, null)), t.Ub(512, null, P.D, P.E, [t.y, t.z, t.n, t.M]), t.Cb(80, 278528, null, 0, P.k, [P.D], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), t.Sb(81, {
                    "la-check-circle": 0,
                    "la-circle": 1
                }), (l()(), t.Xb(-1, 0, [" Cisco WLC "])), (l()(), t.Db(83, 0, null, null, 13, "mat-menu", [], null, null, null, Nl, Zl)), t.Cb(84, 1294336, [
                    ["juniper", 4]
                ], 3, Ul.h, [t.n, t.G, Ul.a], null, null), t.Vb(603979776, 7, {
                    _allItems: 1
                }), t.Vb(603979776, 8, {
                    items: 1
                }), t.Vb(603979776, 9, {
                    lazyContent: 0
                }), t.Ub(2048, null, Ul.d, null, [Ul.h]), t.Ub(2048, null, Ul.b, null, [Ul.d]), (l()(), t.Db(90, 0, null, 0, 6, "a", [
                    ["class", "mat-menu-item"],
                    ["mat-menu-item", ""]
                ], [
                    [1, "role", 0],
                    [2, "mat-menu-item-highlighted", null],
                    [2, "mat-menu-item-submenu-trigger", null],
                    [1, "tabindex", 0],
                    [1, "aria-disabled", 0],
                    [1, "disabled", 0]
                ], [
                    [null, "click"],
                    [null, "mouseenter"]
                ], (function(l, n, u) {
                    var a = !0,
                        e = l.component;
                    return "click" === n && (a = !1 !== t.Pb(l, 91)._checkDisabled(u) && a), "mouseenter" === n && (a = !1 !== t.Pb(l, 91)._handleMouseEnter() && a), "click" === n && (a = !1 !== e.trigger("junos_enable") && a), a
                }), Rl, Fl)), t.Cb(91, 180224, [
                    [7, 4],
                    [8, 4]
                ], 0, Ul.e, [t.n, P.d, Il.g, [2, Ul.b]], null, null), (l()(), t.Db(92, 0, null, 0, 3, "i", [
                    ["class", "la"]
                ], null, null, null, null, null)), t.Ub(512, null, P.D, P.E, [t.y, t.z, t.n, t.M]), t.Cb(94, 278528, null, 0, P.k, [P.D], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), t.Sb(95, {
                    "la-check-circle": 0,
                    "la-circle": 1
                }), (l()(), t.Xb(-1, 0, [" Juniper General "])), (l()(), t.Db(97, 0, null, null, 13, "mat-menu", [], null, null, null, Nl, Zl)), t.Cb(98, 1294336, [
                    ["h3c", 4]
                ], 3, Ul.h, [t.n, t.G, Ul.a], null, null), t.Vb(603979776, 10, {
                    _allItems: 1
                }), t.Vb(603979776, 11, {
                    items: 1
                }), t.Vb(603979776, 12, {
                    lazyContent: 0
                }), t.Ub(2048, null, Ul.d, null, [Ul.h]), t.Ub(2048, null, Ul.b, null, [Ul.d]), (l()(), t.Db(104, 0, null, 0, 6, "a", [
                    ["class", "mat-menu-item"],
                    ["mat-menu-item", ""]
                ], [
                    [1, "role", 0],
                    [2, "mat-menu-item-highlighted", null],
                    [2, "mat-menu-item-submenu-trigger", null],
                    [1, "tabindex", 0],
                    [1, "aria-disabled", 0],
                    [1, "disabled", 0]
                ], [
                    [null, "click"],
                    [null, "mouseenter"]
                ], (function(l, n, u) {
                    var a = !0,
                        e = l.component;
                    return "click" === n && (a = !1 !== t.Pb(l, 105)._checkDisabled(u) && a), "mouseenter" === n && (a = !1 !== t.Pb(l, 105)._handleMouseEnter() && a), "click" === n && (a = !1 !== e.trigger("h3c_enable") && a), a
                }), Rl, Fl)), t.Cb(105, 180224, [
                    [10, 4],
                    [11, 4]
                ], 0, Ul.e, [t.n, P.d, Il.g, [2, Ul.b]], null, null), (l()(), t.Db(106, 0, null, 0, 3, "i", [
                    ["class", "la"]
                ], null, null, null, null, null)), t.Ub(512, null, P.D, P.E, [t.y, t.z, t.n, t.M]), t.Cb(108, 278528, null, 0, P.k, [P.D], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), t.Sb(109, {
                    "la-check-circle": 0,
                    "la-circle": 1
                }), (l()(), t.Xb(-1, 0, [" H3C General "])), (l()(), t.Db(111, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Db(112, 0, null, null, 28, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t.Db(113, 0, null, null, 27, "div", [
                    ["class", "col-12"]
                ], null, null, null, null, null)), (l()(), t.Db(114, 0, null, null, 26, "ngb-tabset", [], null, null, null, o.k, o.f)), t.Cb(115, 2146304, [
                    ["t_main", 4]
                ], 1, y.Y, [y.Z], null, null), t.Vb(603979776, 13, {
                    tabs: 1
                }), (l()(), t.Db(117, 0, null, null, 5, "ngb-tab", [
                    ["id", "general-main"],
                    ["title", "General"]
                ], null, null, null, null, null)), t.Cb(118, 2113536, [
                    [13, 4]
                ], 2, y.W, [], {
                    id: [0, "id"],
                    title: [1, "title"]
                }, null), t.Vb(603979776, 14, {
                    titleTpls: 1
                }), t.Vb(603979776, 15, {
                    contentTpls: 1
                }), (l()(), t.sb(0, null, null, 1, null, Hl)), t.Cb(122, 16384, [
                    [15, 4]
                ], 0, y.X, [t.U], null, null), (l()(), t.sb(16777216, null, null, 1, null, Bl)), t.Cb(124, 16384, null, 0, P.m, [t.Y, t.U], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t.sb(16777216, null, null, 1, null, Jl)), t.Cb(126, 16384, null, 0, P.m, [t.Y, t.U], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t.sb(16777216, null, null, 1, null, Kl)), t.Cb(128, 16384, null, 0, P.m, [t.Y, t.U], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t.sb(16777216, null, null, 1, null, ln)), t.Cb(130, 16384, null, 0, P.m, [t.Y, t.U], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t.sb(16777216, null, null, 1, null, un)), t.Cb(132, 16384, null, 0, P.m, [t.Y, t.U], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t.sb(16777216, null, null, 1, null, an)), t.Cb(134, 16384, null, 0, P.m, [t.Y, t.U], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t.sb(16777216, null, null, 1, null, on)), t.Cb(136, 16384, null, 0, P.m, [t.Y, t.U], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t.sb(16777216, null, null, 1, null, rn)), t.Cb(138, 16384, null, 0, P.m, [t.Y, t.U], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t.sb(16777216, null, null, 1, null, cn)), t.Cb(140, 16384, null, 0, P.m, [t.Y, t.U], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t.sb(16777216, null, null, 2, null, dn)), t.Cb(142, 16384, null, 0, P.m, [t.Y, t.U], {
                    ngIf: [0, "ngIf"]
                }, null), t.Rb(131072, P.b, [t.h]), (l()(), t.sb(16777216, null, null, 2, null, gn)), t.Cb(145, 16384, null, 0, P.m, [t.Y, t.U], {
                    ngIf: [0, "ngIf"]
                }, null), t.Rb(131072, P.b, [t.h])], (function(l, n) {
                    var u = n.component;
                    l(n, 6, 0, t.Pb(n, 9)), l(n, 9, 0), l(n, 17, 0, t.Pb(n, 63)), l(n, 21, 0, t.Pb(n, 84)), l(n, 25, 0, t.Pb(n, 98));
                    var a = l(n, 32, 0, u.options.data.huawei_enable, !u.options.data.huawei_enable);
                    l(n, 31, 0, "la", a);
                    var e = l(n, 39, 0, u.options.data.paloalto_enable, !u.options.data.paloalto_enable);
                    l(n, 38, 0, "la", e);
                    var o = l(n, 46, 0, u.options.data.fortios_enable, !u.options.data.fortios_enable);
                    l(n, 45, 0, "la", o);
                    var s = l(n, 53, 0, u.options.data.extreme_enable, !u.options.data.extreme_enable);
                    l(n, 52, 0, "la", s);
                    var i = l(n, 60, 0, u.options.data.silverpeak_enable, !u.options.data.silverpeak_enable);
                    l(n, 59, 0, "la", i), l(n, 63, 0);
                    var r = l(n, 74, 0, u.options.data.cisco_rs_enable, !u.options.data.cisco_rs_enable);
                    l(n, 73, 0, "la", r);
                    var b = l(n, 81, 0, u.options.data.cisco_wlc_enable, !u.options.data.cisco_wlc_enable);
                    l(n, 80, 0, "la", b), l(n, 84, 0);
                    var c = l(n, 95, 0, u.options.data.junos_enable, !u.options.data.junos_enable);
                    l(n, 94, 0, "la", c), l(n, 98, 0);
                    var d = l(n, 109, 0, u.options.data.h3c_enable, !u.options.data.h3c_enable);
                    l(n, 108, 0, "la", d), l(n, 118, 0, "general-main", "General"), l(n, 124, 0, u.options.data.cisco_rs_enable), l(n, 126, 0, u.options.data.cisco_wlc_enable), l(n, 128, 0, u.options.data.junos_enable), l(n, 130, 0, u.options.data.h3c_enable), l(n, 132, 0, u.options.data.huawei_enable), l(n, 134, 0, u.options.data.paloalto_enable), l(n, 136, 0, u.options.data.fortios_enable), l(n, 138, 0, u.options.data.extreme_enable), l(n, 140, 0, u.options.data.silverpeak_enable), l(n, 142, 0, t.Yb(n, 142, 0, t.Pb(n, 143).transform(u.loading))), l(n, 145, 0, t.Yb(n, 145, 0, t.Pb(n, 146).transform(u.loading)))
                }), (function(l, n) {
                    l(n, 5, 0, t.Pb(n, 6).menuOpen || null), l(n, 15, 0, t.Pb(n, 16).role, t.Pb(n, 16)._highlighted, t.Pb(n, 16)._triggersSubmenu, t.Pb(n, 16)._getTabIndex(), t.Pb(n, 16).disabled.toString(), t.Pb(n, 16).disabled || null, t.Pb(n, 17).menuOpen || null), l(n, 19, 0, t.Pb(n, 20).role, t.Pb(n, 20)._highlighted, t.Pb(n, 20)._triggersSubmenu, t.Pb(n, 20)._getTabIndex(), t.Pb(n, 20).disabled.toString(), t.Pb(n, 20).disabled || null, t.Pb(n, 21).menuOpen || null), l(n, 23, 0, t.Pb(n, 24).role, t.Pb(n, 24)._highlighted, t.Pb(n, 24)._triggersSubmenu, t.Pb(n, 24)._getTabIndex(), t.Pb(n, 24).disabled.toString(), t.Pb(n, 24).disabled || null, t.Pb(n, 25).menuOpen || null), l(n, 27, 0, t.Pb(n, 28).role, t.Pb(n, 28)._highlighted, t.Pb(n, 28)._triggersSubmenu, t.Pb(n, 28)._getTabIndex(), t.Pb(n, 28).disabled.toString(), t.Pb(n, 28).disabled || null), l(n, 34, 0, t.Pb(n, 35).role, t.Pb(n, 35)._highlighted, t.Pb(n, 35)._triggersSubmenu, t.Pb(n, 35)._getTabIndex(), t.Pb(n, 35).disabled.toString(), t.Pb(n, 35).disabled || null), l(n, 41, 0, t.Pb(n, 42).role, t.Pb(n, 42)._highlighted, t.Pb(n, 42)._triggersSubmenu, t.Pb(n, 42)._getTabIndex(), t.Pb(n, 42).disabled.toString(), t.Pb(n, 42).disabled || null), l(n, 48, 0, t.Pb(n, 49).role, t.Pb(n, 49)._highlighted, t.Pb(n, 49)._triggersSubmenu, t.Pb(n, 49)._getTabIndex(), t.Pb(n, 49).disabled.toString(), t.Pb(n, 49).disabled || null), l(n, 55, 0, t.Pb(n, 56).role, t.Pb(n, 56)._highlighted, t.Pb(n, 56)._triggersSubmenu, t.Pb(n, 56)._getTabIndex(), t.Pb(n, 56).disabled.toString(), t.Pb(n, 56).disabled || null), l(n, 69, 0, t.Pb(n, 70).role, t.Pb(n, 70)._highlighted, t.Pb(n, 70)._triggersSubmenu, t.Pb(n, 70)._getTabIndex(), t.Pb(n, 70).disabled.toString(), t.Pb(n, 70).disabled || null), l(n, 76, 0, t.Pb(n, 77).role, t.Pb(n, 77)._highlighted, t.Pb(n, 77)._triggersSubmenu, t.Pb(n, 77)._getTabIndex(), t.Pb(n, 77).disabled.toString(), t.Pb(n, 77).disabled || null), l(n, 90, 0, t.Pb(n, 91).role, t.Pb(n, 91)._highlighted, t.Pb(n, 91)._triggersSubmenu, t.Pb(n, 91)._getTabIndex(), t.Pb(n, 91).disabled.toString(), t.Pb(n, 91).disabled || null), l(n, 104, 0, t.Pb(n, 105).role, t.Pb(n, 105)._highlighted, t.Pb(n, 105)._triggersSubmenu, t.Pb(n, 105)._getTabIndex(), t.Pb(n, 105).disabled.toString(), t.Pb(n, 105).disabled || null)
                }))
            }
            var mn = u("NqMs"),
                hn = u("lkAW"),
                Cn = u("26FU"),
                vn = u("P6uZ"),
                fn = u("ruxR"),
                Pn = u("mrSG"),
                Dn = function(l) {
                    function n(n) {
                        void 0 === n && (n = {});
                        var u = l.call(this) || this;
                        return u.data = {}, n = n || !1, u.init(), n && Object.assign(u.data, n), u
                    }
                    return Pn.__extends(n, l), n.prototype.init = function() {
                        this.data.id = void 0, this.data.name = "", this.data.acl = [], this.data.manual = "", this.data.manual_conf_only = 0, this.data.cisco_rs_enable = 0, this.data.cisco_wlc_enable = 0, this.data.fortios_enable = 0, this.data.h3c_enable = 0, this.data.huawei_enable = 0, this.data.junos_enable = 0, this.data.extreme_enable = 0, this.data.paloalto_enable = 0, this.data.silverpeak_enable = 0, this.data.cisco_rs_manual = "", this.data.cisco_wlc_manual = "", this.data.fortios_manual = "", this.data.h3c_manual = "", this.data.junos_manual = "", this.data.paloalto_manual = "", this.data.silverpeak_manual = "", this.data.cisco_wlc_roles = [], this.data.cisco_rs_def_attr = 1, this.data.cisco_rs_def_cmd = 1, this.data.cisco_rs_privlvl = 15, this.data.cisco_rs_cmd = [], this.data.cisco_rs_autocmd = "", this.data.cisco_rs_nexus_roles = "", this.data.junos_username = "", this.data.junos_cmd_ac = [], this.data.junos_cmd_ao = [], this.data.junos_cmd_dc = [], this.data.junos_cmd_do = [], this.data.h3c_cmd = [], this.data.h3c_privlvl = 15, this.data.h3c_def_attr = 1, this.data.h3c_def_cmd = 1, this.data.huawei_cmd = [], this.data.huawei_privlvl = 3, this.data.huawei_def_attr = 1, this.data.huawei_def_cmd = 1, this.data.extreme_cmd = [], this.data.extreme_privlvl = 15, this.data.extreme_def_attr = 1, this.data.extreme_def_cmd = 1, this.data.fortios_admin_prof = "", this.data.silverpeak_role = "admin", this.data.paloalto_admin_domain = "", this.data.paloalto_admin_role = "", this.data.paloalto_panorama_admin_domain = "", this.data.paloalto_panorama_admin_role = "", this.data.paloalto_user_group = ""
                    }, n.prototype.makeClone = function() {
                        return this.clone(this.data)
                    }, n.prototype.get = function() {
                        var l = this.makeClone();
                        return l.cisco_rs_cmd = l.cisco_rs_cmd[0] && l.cisco_rs_cmd[0].id ? l.cisco_rs_cmd.map((function(l) {
                            return l.id
                        })) : null, l.h3c_cmd = l.h3c_cmd[0] && l.h3c_cmd[0].id ? l.h3c_cmd.map((function(l) {
                            return l.id
                        })) : null, l.huawei_cmd = l.huawei_cmd[0] && l.huawei_cmd[0].id ? l.huawei_cmd.map((function(l) {
                            return l.id
                        })) : null, l.extreme_cmd = l.extreme_cmd[0] && l.extreme_cmd[0].id ? l.extreme_cmd.map((function(l) {
                            return l.id
                        })) : null, l.junos_cmd_ac = l.junos_cmd_ac[0] && l.junos_cmd_ac[0].id ? l.junos_cmd_ac.map((function(l) {
                            return l.id
                        })) : null, l.junos_cmd_dc = l.junos_cmd_dc[0] && l.junos_cmd_dc[0].id ? l.junos_cmd_dc.map((function(l) {
                            return l.id
                        })) : null, l.junos_cmd_ao = l.junos_cmd_ao[0] && l.junos_cmd_ao[0].id ? l.junos_cmd_ao.map((function(l) {
                            return l.id
                        })) : null, l.junos_cmd_do = l.junos_cmd_do[0] && l.junos_cmd_do[0].id ? l.junos_cmd_do.map((function(l) {
                            return l.id
                        })) : null, l.acl = l.acl[0] && l.acl[0].id ? l.acl[0].id : null, l.cisco_wlc_roles = l.cisco_wlc_roles.join(";;"), l
                    }, n
                }(u("0smX").a),
                _n = u("t/Na"),
                kn = u("67Y/"),
                Mn = "api/tacacs/service",
                yn = function() {
                    function l(l) {
                        this.http = l, this.objectKeys = Object.keys
                    }
                    return l.prototype.add = function(l) {
                        return this.http.post(Mn + "/add/", l).pipe(Object(vn.a)(), Object(kn.a)((function(l) {
                            return l
                        })))
                    }, l.prototype.get = function(l) {
                        var n = (new _n.j).set("id", l.toString());
                        return this.http.get(Mn + "/edit/", {
                            params: n
                        }).pipe(Object(vn.a)(), Object(kn.a)((function(l) {
                            return l.service
                        })))
                    }, l.prototype.save = function(l) {
                        return this.http.post(Mn + "/edit/", l).pipe(Object(vn.a)(), Object(kn.a)((function(l) {
                            return l
                        })))
                    }, l.ngInjectableDef = t.dc({
                        factory: function() {
                            return new l(t.ec(_n.c))
                        },
                        token: l,
                        providedIn: "root"
                    }), l
                }(),
                wn = function() {
                    function l(l, n, u, t) {
                        this.toastr = l, this.router = n, this.route = u, this.service = t, this.validation = new Cn.a({}), this.loadingForm = new Cn.a(!0), this.path = this.router.url.split("/")[4], this.formFooter = new fn.a(this.path, "edit" == this.path), this.tacService = new Dn
                    }
                    return l.prototype.ngOnInit = function() {
                        var l = this;
                        "add" == this.path ? this.loadingForm.next(!1) : this.route.paramMap.pipe(Object(vn.a)()).subscribe((function(n) {
                            l.fillForm(+n.get("id"))
                        }))
                    }, l.prototype.fillForm = function(l) {
                        var n = this;
                        this.service.get(l).subscribe((function(l) {
                            Object.assign(n.tacService.data, l), n.oldItem = n.tacService.makeClone(), n.loadingForm.next(!1)
                        }))
                    }, l.prototype.formAction = function(l) {
                        "add" == this.path ? this.add(this.tacService.get()) : this.save(this.tacService)
                    }, l.prototype.add = function(l) {
                        var n = this;
                        this.loadingForm.next(!0), this.service.add(l).subscribe((function(l) {
                            n.validation.next(l.error.validation), l.error.status ? n.loadingForm.next(!1) : (l.service ? (n.toastr.success("Service Added!"), n.router.navigate(["../"], {
                                relativeTo: n.route
                            })) : n.toastr.error("Unknown server error"), n.loadingForm.next(!1))
                        }))
                    }, l.prototype.save = function(l) {
                        var n = this;
                        if (this.loadingForm.next(!0), JSON.stringify(l.data) == JSON.stringify(this.oldItem)) return this.toastr.warning("No Changes Detected!"), void this.loadingForm.next(!1);
                        this.service.save(l.get()).subscribe((function(l) {
                            n.validation.next(l.error.validation), l.error.status ? n.loadingForm.next(!1) : (l.save ? (n.toastr.success("Service Changed!"), n.router.navigate(["../../"], {
                                relativeTo: n.route
                            })) : n.toastr.error("Unknown server error"), n.loadingForm.next(!1))
                        }))
                    }, l
                }(),
                xn = t.Bb({
                    encapsulation: 0,
                    styles: [
                        [""]
                    ],
                    data: {}
                });

            function Un(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "kt-tac-service-form", [], null, null, null, pn, Gl)), t.Cb(1, 114688, null, 0, zl, [c.j], {
                    options: [0, "options"],
                    validation: [1, "validation"],
                    loading: [2, "loading"]
                }, null), (l()(), t.Db(2, 0, null, null, 1, "kt-main-form-footer", [], null, [
                    [null, "trigger"]
                ], (function(l, n, u) {
                    var t = !0;
                    return "trigger" === n && (t = !1 !== l.component.formAction(u) && t), t
                }), mn.b, mn.a)), t.Cb(3, 114688, null, 0, hn.a, [], {
                    options: [0, "options"],
                    loading: [1, "loading"]
                }, {
                    trigger: "trigger"
                })], (function(l, n) {
                    var u = n.component;
                    l(n, 1, 0, u.tacService, u.validation, u.loadingForm), l(n, 3, 0, u.formFooter, u.loadingForm)
                }), null)
            }

            function Sn(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "kt-edit", [], null, null, null, Un, xn)), t.Cb(1, 114688, null, 0, wn, [c.j, d.q, d.a, yn], null, null)], (function(l, n) {
                    l(n, 1, 0)
                }), null)
            }
            var Tn = t.zb("kt-edit", wn, Sn, {}, {}, []),
                In = u("9Bt9"),
                Xn = u("18CH"),
                Vn = u("wOIO"),
                On = u("EFBj"),
                Yn = u("ZWfn");
            u.d(n, "ServicesModuleNgFactory", (function() {
                return En
            }));
            var En = t.Ab(a, [], (function(l) {
                return t.Mb([t.Nb(512, t.k, t.lb, [
                    [8, [e.a, o.a, o.b, o.p, o.q, o.m, o.n, o.o, f, Tn]],
                    [3, t.k], t.E
                ]), t.Nb(4608, P.o, P.n, [t.A, [2, P.I]]), t.Nb(4608, D.A, D.A, []), t.Nb(4608, y.E, y.E, [t.k, t.w, y.yb, y.F]), t.Nb(4608, In.g, In.g, [P.d, t.G, El.j, In.i]), t.Nb(4608, Sl.a, Sl.a, [Sl.g, Sl.c, t.k, Sl.f, Sl.d, t.w, t.G, P.d, Tl.b, [2, P.i]]), t.Nb(5120, Sl.h, Sl.i, [Sl.a]), t.Nb(5120, Ul.c, Ul.j, [Sl.a]), t.Nb(1073742336, P.c, P.c, []), t.Nb(1073742336, d.t, d.t, [
                    [2, d.z],
                    [2, d.q]
                ]), t.Nb(1073742336, D.z, D.z, []), t.Nb(1073742336, D.k, D.k, []), t.Nb(1073742336, y.c, y.c, []), t.Nb(1073742336, y.g, y.g, []), t.Nb(1073742336, y.h, y.h, []), t.Nb(1073742336, y.l, y.l, []), t.Nb(1073742336, y.n, y.n, []), t.Nb(1073742336, y.u, y.u, []), t.Nb(1073742336, y.A, y.A, []), t.Nb(1073742336, y.G, y.G, []), t.Nb(1073742336, y.K, y.K, []), t.Nb(1073742336, y.P, y.P, []), t.Nb(1073742336, y.S, y.S, []), t.Nb(1073742336, y.V, y.V, []), t.Nb(1073742336, y.ab, y.ab, []), t.Nb(1073742336, y.eb, y.eb, []), t.Nb(1073742336, y.hb, y.hb, []), t.Nb(1073742336, y.kb, y.kb, []), t.Nb(1073742336, y.H, y.H, []), t.Nb(1073742336, Xn.a, Xn.a, []), t.Nb(1073742336, Tl.a, Tl.a, []), t.Nb(1073742336, Ol.b, Ol.b, []), t.Nb(1073742336, El.g, El.g, []), t.Nb(1073742336, El.e, El.e, []), t.Nb(1073742336, Vn.a, Vn.a, []), t.Nb(1073742336, In.h, In.h, []), t.Nb(1073742336, On.a, On.a, []), t.Nb(1073742336, Yn.a, Yn.a, []), t.Nb(1073742336, Xl.m, Xl.m, [
                    [2, Xl.f],
                    [2, Vl.f]
                ]), t.Nb(1073742336, Xl.s, Xl.s, []), t.Nb(1073742336, Yl.g, Yl.g, []), t.Nb(1073742336, Sl.e, Sl.e, []), t.Nb(1073742336, Ul.i, Ul.i, []), t.Nb(1073742336, Ul.f, Ul.f, []), t.Nb(1073742336, a, a, []), t.Nb(1024, d.m, (function() {
                    return [
                        [{
                            path: "",
                            component: m
                        }, {
                            path: "add",
                            component: wn
                        }, {
                            path: "edit/:id",
                            component: wn
                        }]
                    ]
                }), [])])
            }))
        }
    }
]);