(window.webpackJsonp = window.webpackJsonp || []).push([
    [20], {
        uNJW: function(l, n, u) {
            "use strict";
            u.r(n);
            var t = u("CcnG"),
                o = function() {
                    return function() {}
                }(),
                a = u("pMnS"),
                s = u("9AJC"),
                i = u("II6f"),
                e = u("5Awz"),
                r = u("8kqb"),
                b = u("uoK1"),
                d = u("SZbH"),
                c = u("ZYCi"),
                g = u("GRfY"),
                p = u("mlFA"),
                m = function() {
                    function l() {
                        this.tableOptions = {
                            table: {
                                delBtn: "/user/delete/",
                                editBtn: !0,
                                selectable: !0,
                                preview: !1,
                                editable: !0,
                                pagination: !1,
                                mainUrl: "/user/datatables/",
                                sort: {
                                    column: "username",
                                    direction: "asc"
                                },
                                columns: {
                                    id: {
                                        title: "ID",
                                        show: !1,
                                        sortable: !0
                                    },
                                    username: {
                                        title: "Username",
                                        show: !0,
                                        sortable: !0
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
                f = t.Bb({
                    encapsulation: 0,
                    styles: [
                        [""]
                    ],
                    data: {}
                });

            function h(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "kt-main-table", [], null, null, null, i.b, i.a)), t.Cb(1, 114688, null, 0, e.a, [r.a, b.a, d.j, c.q, c.a, g.a, p.a], {
                    options: [0, "options"]
                }, null)], (function(l, n) {
                    l(n, 1, 0, n.component.tableOptions)
                }), null)
            }

            function v(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "kt-api-users", [], null, null, null, h, f)), t.Cb(1, 114688, null, 0, m, [], null, null)], (function(l, n) {
                    l(n, 1, 0)
                }), null)
            }
            var C = t.zb("kt-api-users", m, v, {}, {}, []),
                P = u("Ip0R"),
                D = u("gIcY"),
                k = u("P+cp"),
                y = u("p/I8"),
                U = u("02SS"),
                w = u("6U+V"),
                x = function() {
                    function l(l) {
                        this.toastr = l, this.list = {
                            group: new w.a("api_groups")
                        }
                    }
                    return l.prototype.ngOnInit = function() {
                        var l = this;
                        this.validation.subscribe((function(n) {
                            for (var u in n)
                                if (n[u])
                                    for (var t = 0; t < n[u].length; t++) l.toastr.error(n[u][t])
                        }))
                    }, l.prototype.setGroup = function(l) {
                        this.options.data.group = l
                    }, l
                }(),
                M = t.Bb({
                    encapsulation: 0,
                    styles: [
                        [""]
                    ],
                    data: {}
                });

            function N(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), t.Xb(1, null, ["", ""]))], null, (function(l, n) {
                    l(n, 1, 0, n.context.$implicit)
                }))
            }

            function F(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), t.Xb(1, null, ["", ""]))], null, (function(l, n) {
                    l(n, 1, 0, n.context.$implicit)
                }))
            }

            function O(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), t.Xb(1, null, ["", ""]))], null, (function(l, n) {
                    l(n, 1, 0, n.context.$implicit)
                }))
            }

            function I(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), t.Xb(1, null, ["", ""]))], null, (function(l, n) {
                    l(n, 1, 0, n.context.$implicit)
                }))
            }

            function Y(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), t.Xb(1, null, ["", ""]))], null, (function(l, n) {
                    l(n, 1, 0, n.context.$implicit)
                }))
            }

            function S(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), t.Xb(1, null, ["", ""]))], null, (function(l, n) {
                    l(n, 1, 0, n.context.$implicit)
                }))
            }

            function _(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), t.Xb(1, null, ["", ""]))], null, (function(l, n) {
                    l(n, 1, 0, n.context.$implicit)
                }))
            }

            function R(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 0, "div", [
                    ["class", "tacgui-blockui-main"]
                ], null, null, null, null, null))], null, null)
            }

            function X(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 3, "div", [
                    ["class", "tacgui-blockui-main-message"]
                ], null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 0, "div", [
                    ["class", "kt-spinner kt-spinner--sm kt-spinner--success"]
                ], null, null, null, null, null)), (l()(), t.Db(2, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Please wait..."]))], null, null)
            }

            function E(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 173, "div", [
                    ["class", "col-md-9 col-lg-9"]
                ], null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 172, "div", [
                    ["class", "card m-3"]
                ], null, null, null, null, null)), (l()(), t.Db(2, 0, null, null, 165, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (l()(), t.Db(3, 0, null, null, 29, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t.Db(4, 0, null, null, 19, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(5, 0, null, null, 18, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(6, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Username"])), (l()(), t.Db(8, 0, null, null, 9, "input", [
                    ["class", "form-control form-control-sm"],
                    ["placeholder", "Username"],
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
                    var o = !0,
                        a = l.component;
                    return "input" === n && (o = !1 !== t.Pb(l, 13)._handleInput(u.target.value) && o), "blur" === n && (o = !1 !== t.Pb(l, 13).onTouched() && o), "compositionstart" === n && (o = !1 !== t.Pb(l, 13)._compositionStart() && o), "compositionend" === n && (o = !1 !== t.Pb(l, 13)._compositionEnd(u.target.value) && o), "ngModelChange" === n && (o = !1 !== (a.options.data.username = u) && o), o
                }), null, null)), t.Ub(512, null, P.D, P.E, [t.y, t.z, t.n, t.M]), t.Cb(10, 278528, null, 0, P.k, [P.D], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), t.Rb(131072, P.b, [t.h]), t.Sb(12, {
                    "is-invalid": 0
                }), t.Cb(13, 16384, null, 0, D.e, [t.M, t.n, [2, D.a]], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.e]), t.Cb(15, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(17, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null), (l()(), t.Db(18, 0, null, null, 3, "div", [
                    ["class", "invalid-feedback"]
                ], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 2, null, N)), t.Cb(20, 278528, null, 0, P.l, [t.Y, t.U, t.y], {
                    ngForOf: [0, "ngForOf"]
                }, null), t.Rb(131072, P.b, [t.h]), (l()(), t.Db(22, 0, null, null, 1, "span", [
                    ["class", "form-text text-muted"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["it will be used for authorization and you can't change it further time"])), (l()(), t.Db(24, 0, null, null, 8, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(25, 0, null, null, 7, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(26, 0, null, null, 6, "kt-field-general-list", [], null, [
                    [null, "returnData"]
                ], (function(l, n, u) {
                    var t = !0;
                    return "returnData" === n && (t = !1 !== l.component.setGroup(u) && t), t
                }), k.b, k.a)), t.Ub(512, null, P.D, P.E, [t.y, t.z, t.n, t.M]), t.Cb(28, 278528, null, 0, P.k, [P.D], {
                    ngClass: [0, "ngClass"]
                }, null), t.Rb(131072, P.b, [t.h]), t.Sb(30, {
                    "is-invalid": 0
                }), t.Cb(31, 114688, null, 0, y.a, [U.a], {
                    data: [0, "data"],
                    params: [1, "params"],
                    errors: [2, "errors"]
                }, {
                    returnData: "returnData"
                }), t.Rb(131072, P.b, [t.h]), (l()(), t.Db(33, 0, null, null, 38, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t.Db(34, 0, null, null, 18, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(35, 0, null, null, 17, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(36, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Password"])), (l()(), t.Db(38, 0, null, null, 9, "input", [
                    ["class", "form-control form-control-sm"],
                    ["placeholder", "Password"],
                    ["type", "password"]
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
                    var o = !0,
                        a = l.component;
                    return "input" === n && (o = !1 !== t.Pb(l, 43)._handleInput(u.target.value) && o), "blur" === n && (o = !1 !== t.Pb(l, 43).onTouched() && o), "compositionstart" === n && (o = !1 !== t.Pb(l, 43)._compositionStart() && o), "compositionend" === n && (o = !1 !== t.Pb(l, 43)._compositionEnd(u.target.value) && o), "ngModelChange" === n && (o = !1 !== (a.options.data.password = u) && o), o
                }), null, null)), t.Ub(512, null, P.D, P.E, [t.y, t.z, t.n, t.M]), t.Cb(40, 278528, null, 0, P.k, [P.D], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), t.Rb(131072, P.b, [t.h]), t.Sb(42, {
                    "is-invalid": 0
                }), t.Cb(43, 16384, null, 0, D.e, [t.M, t.n, [2, D.a]], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.e]), t.Cb(45, 671744, null, 0, D.s, [
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
                ], null, null), (l()(), t.Db(48, 0, null, null, 3, "div", [
                    ["class", "invalid-feedback"]
                ], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 2, null, F)), t.Cb(50, 278528, null, 0, P.l, [t.Y, t.U, t.y], {
                    ngForOf: [0, "ngForOf"]
                }, null), t.Rb(131072, P.b, [t.h]), (l()(), t.Db(52, 0, null, null, 0, "span", [
                    ["class", "form-text text-muted"]
                ], null, null, null, null, null)), (l()(), t.Db(53, 0, null, null, 18, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(54, 0, null, null, 17, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(55, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Repeat Password"])), (l()(), t.Db(57, 0, null, null, 9, "input", [
                    ["class", "form-control form-control-sm"],
                    ["placeholder", "Repeat Password"],
                    ["type", "password"]
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
                    var o = !0,
                        a = l.component;
                    return "input" === n && (o = !1 !== t.Pb(l, 62)._handleInput(u.target.value) && o), "blur" === n && (o = !1 !== t.Pb(l, 62).onTouched() && o), "compositionstart" === n && (o = !1 !== t.Pb(l, 62)._compositionStart() && o), "compositionend" === n && (o = !1 !== t.Pb(l, 62)._compositionEnd(u.target.value) && o), "ngModelChange" === n && (o = !1 !== (a.options.data.repassword = u) && o), o
                }), null, null)), t.Ub(512, null, P.D, P.E, [t.y, t.z, t.n, t.M]), t.Cb(59, 278528, null, 0, P.k, [P.D], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), t.Rb(131072, P.b, [t.h]), t.Sb(61, {
                    "is-invalid": 0
                }), t.Cb(62, 16384, null, 0, D.e, [t.M, t.n, [2, D.a]], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.e]), t.Cb(64, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(66, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null), (l()(), t.Db(67, 0, null, null, 3, "div", [
                    ["class", "invalid-feedback"]
                ], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 2, null, O)), t.Cb(69, 278528, null, 0, P.l, [t.Y, t.U, t.y], {
                    ngForOf: [0, "ngForOf"]
                }, null), t.Rb(131072, P.b, [t.h]), (l()(), t.Db(71, 0, null, null, 0, "span", [
                    ["class", "form-text text-muted"]
                ], null, null, null, null, null)), (l()(), t.Db(72, 0, null, null, 13, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t.Db(73, 0, null, null, 12, "div", [
                    ["class", "col-12"]
                ], null, null, null, null, null)), (l()(), t.Db(74, 0, null, null, 11, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(75, 0, null, null, 8, "label", [
                    ["class", "kt-checkbox kt-checkbox--bold kt-checkbox--brand"]
                ], null, null, null, null, null)), (l()(), t.Db(76, 0, null, null, 5, "input", [
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
                    var o = !0,
                        a = l.component;
                    return "change" === n && (o = !1 !== t.Pb(l, 77).onChange(u.target.checked) && o), "blur" === n && (o = !1 !== t.Pb(l, 77).onTouched() && o), "ngModelChange" === n && (o = !1 !== (a.options.data.changePasswd = u) && o), o
                }), null, null)), t.Cb(77, 16384, null, 0, D.b, [t.M, t.n], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.b]), t.Cb(79, 671744, null, 0, D.s, [
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
                ], null, null), (l()(), t.Xb(-1, null, [" Change password in next login "])), (l()(), t.Db(83, 0, null, null, 0, "span", [], null, null, null, null, null)), (l()(), t.Db(84, 0, null, null, 1, "span", [
                    ["class", "form-text text-muted"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["user must change password in next login"])), (l()(), t.Db(86, 0, null, null, 40, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t.Db(87, 0, null, null, 19, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(88, 0, null, null, 18, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(89, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Firstname"])), (l()(), t.Db(91, 0, null, null, 9, "input", [
                    ["class", "form-control form-control-sm"],
                    ["placeholder", "Firstname"],
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
                    var o = !0,
                        a = l.component;
                    return "input" === n && (o = !1 !== t.Pb(l, 96)._handleInput(u.target.value) && o), "blur" === n && (o = !1 !== t.Pb(l, 96).onTouched() && o), "compositionstart" === n && (o = !1 !== t.Pb(l, 96)._compositionStart() && o), "compositionend" === n && (o = !1 !== t.Pb(l, 96)._compositionEnd(u.target.value) && o), "ngModelChange" === n && (o = !1 !== (a.options.data.firstname = u) && o), o
                }), null, null)), t.Ub(512, null, P.D, P.E, [t.y, t.z, t.n, t.M]), t.Cb(93, 278528, null, 0, P.k, [P.D], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), t.Rb(131072, P.b, [t.h]), t.Sb(95, {
                    "is-invalid": 0
                }), t.Cb(96, 16384, null, 0, D.e, [t.M, t.n, [2, D.a]], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.e]), t.Cb(98, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(100, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null), (l()(), t.Db(101, 0, null, null, 3, "div", [
                    ["class", "invalid-feedback"]
                ], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 2, null, I)), t.Cb(103, 278528, null, 0, P.l, [t.Y, t.U, t.y], {
                    ngForOf: [0, "ngForOf"]
                }, null), t.Rb(131072, P.b, [t.h]), (l()(), t.Db(105, 0, null, null, 1, "span", [
                    ["class", "form-text text-muted"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Optional"])), (l()(), t.Db(107, 0, null, null, 19, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(108, 0, null, null, 18, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(109, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Surename"])), (l()(), t.Db(111, 0, null, null, 9, "input", [
                    ["class", "form-control form-control-sm"],
                    ["placeholder", "Surename"],
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
                    var o = !0,
                        a = l.component;
                    return "input" === n && (o = !1 !== t.Pb(l, 116)._handleInput(u.target.value) && o), "blur" === n && (o = !1 !== t.Pb(l, 116).onTouched() && o), "compositionstart" === n && (o = !1 !== t.Pb(l, 116)._compositionStart() && o), "compositionend" === n && (o = !1 !== t.Pb(l, 116)._compositionEnd(u.target.value) && o), "ngModelChange" === n && (o = !1 !== (a.options.data.surname = u) && o), o
                }), null, null)), t.Ub(512, null, P.D, P.E, [t.y, t.z, t.n, t.M]), t.Cb(113, 278528, null, 0, P.k, [P.D], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), t.Rb(131072, P.b, [t.h]), t.Sb(115, {
                    "is-invalid": 0
                }), t.Cb(116, 16384, null, 0, D.e, [t.M, t.n, [2, D.a]], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.e]), t.Cb(118, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(120, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null), (l()(), t.Db(121, 0, null, null, 3, "div", [
                    ["class", "invalid-feedback"]
                ], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 2, null, Y)), t.Cb(123, 278528, null, 0, P.l, [t.Y, t.U, t.y], {
                    ngForOf: [0, "ngForOf"]
                }, null), t.Rb(131072, P.b, [t.h]), (l()(), t.Db(125, 0, null, null, 1, "span", [
                    ["class", "form-text text-muted"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Optional"])), (l()(), t.Db(127, 0, null, null, 40, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t.Db(128, 0, null, null, 19, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(129, 0, null, null, 18, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(130, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Email"])), (l()(), t.Db(132, 0, null, null, 9, "input", [
                    ["class", "form-control form-control-sm"],
                    ["placeholder", "Email"],
                    ["type", "email"]
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
                    var o = !0,
                        a = l.component;
                    return "input" === n && (o = !1 !== t.Pb(l, 137)._handleInput(u.target.value) && o), "blur" === n && (o = !1 !== t.Pb(l, 137).onTouched() && o), "compositionstart" === n && (o = !1 !== t.Pb(l, 137)._compositionStart() && o), "compositionend" === n && (o = !1 !== t.Pb(l, 137)._compositionEnd(u.target.value) && o), "ngModelChange" === n && (o = !1 !== (a.options.data.email = u) && o), o
                }), null, null)), t.Ub(512, null, P.D, P.E, [t.y, t.z, t.n, t.M]), t.Cb(134, 278528, null, 0, P.k, [P.D], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), t.Rb(131072, P.b, [t.h]), t.Sb(136, {
                    "is-invalid": 0
                }), t.Cb(137, 16384, null, 0, D.e, [t.M, t.n, [2, D.a]], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.e]), t.Cb(139, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(141, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null), (l()(), t.Db(142, 0, null, null, 3, "div", [
                    ["class", "invalid-feedback"]
                ], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 2, null, S)), t.Cb(144, 278528, null, 0, P.l, [t.Y, t.U, t.y], {
                    ngForOf: [0, "ngForOf"]
                }, null), t.Rb(131072, P.b, [t.h]), (l()(), t.Db(146, 0, null, null, 1, "span", [
                    ["class", "form-text text-muted"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Optional"])), (l()(), t.Db(148, 0, null, null, 19, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(149, 0, null, null, 18, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(150, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Position"])), (l()(), t.Db(152, 0, null, null, 9, "input", [
                    ["class", "form-control form-control-sm"],
                    ["placeholder", "Position"],
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
                    var o = !0,
                        a = l.component;
                    return "input" === n && (o = !1 !== t.Pb(l, 157)._handleInput(u.target.value) && o), "blur" === n && (o = !1 !== t.Pb(l, 157).onTouched() && o), "compositionstart" === n && (o = !1 !== t.Pb(l, 157)._compositionStart() && o), "compositionend" === n && (o = !1 !== t.Pb(l, 157)._compositionEnd(u.target.value) && o), "ngModelChange" === n && (o = !1 !== (a.options.data.position = u) && o), o
                }), null, null)), t.Ub(512, null, P.D, P.E, [t.y, t.z, t.n, t.M]), t.Cb(154, 278528, null, 0, P.k, [P.D], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), t.Rb(131072, P.b, [t.h]), t.Sb(156, {
                    "is-invalid": 0
                }), t.Cb(157, 16384, null, 0, D.e, [t.M, t.n, [2, D.a]], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.e]), t.Cb(159, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(161, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null), (l()(), t.Db(162, 0, null, null, 3, "div", [
                    ["class", "invalid-feedback"]
                ], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 2, null, _)), t.Cb(164, 278528, null, 0, P.l, [t.Y, t.U, t.y], {
                    ngForOf: [0, "ngForOf"]
                }, null), t.Rb(131072, P.b, [t.h]), (l()(), t.Db(166, 0, null, null, 1, "span", [
                    ["class", "form-text text-muted"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Optional"])), (l()(), t.sb(16777216, null, null, 2, null, R)), t.Cb(169, 16384, null, 0, P.m, [t.Y, t.U], {
                    ngIf: [0, "ngIf"]
                }, null), t.Rb(131072, P.b, [t.h]), (l()(), t.sb(16777216, null, null, 2, null, X)), t.Cb(172, 16384, null, 0, P.m, [t.Y, t.U], {
                    ngIf: [0, "ngIf"]
                }, null), t.Rb(131072, P.b, [t.h])], (function(l, n) {
                    var u, o, a = n.component,
                        s = l(n, 12, 0, null == (u = t.Yb(n, 10, 1, t.Pb(n, 11).transform(a.validation))) ? null : u.username);
                    l(n, 10, 0, "form-control form-control-sm", s), l(n, 15, 0, a.options.data.username), l(n, 20, 0, null == (o = t.Yb(n, 20, 0, t.Pb(n, 21).transform(a.validation))) ? null : o.username);
                    var i, e, r = l(n, 30, 0, null == (i = t.Yb(n, 28, 0, t.Pb(n, 29).transform(a.validation))) ? null : i.group);
                    l(n, 28, 0, r), l(n, 31, 0, a.options.data.group, a.list.group, null == (e = t.Yb(n, 31, 2, t.Pb(n, 32).transform(a.validation))) ? null : e.group);
                    var b, d, c = l(n, 42, 0, null == (b = t.Yb(n, 40, 1, t.Pb(n, 41).transform(a.validation))) ? null : b.password);
                    l(n, 40, 0, "form-control form-control-sm", c), l(n, 45, 0, a.options.data.password), l(n, 50, 0, null == (d = t.Yb(n, 50, 0, t.Pb(n, 51).transform(a.validation))) ? null : d.password);
                    var g, p, m = l(n, 61, 0, null == (g = t.Yb(n, 59, 1, t.Pb(n, 60).transform(a.validation))) ? null : g.repassword);
                    l(n, 59, 0, "form-control form-control-sm", m), l(n, 64, 0, a.options.data.repassword), l(n, 69, 0, null == (p = t.Yb(n, 69, 0, t.Pb(n, 70).transform(a.validation))) ? null : p.repassword), l(n, 79, 0, a.options.data.changePasswd);
                    var f, h, v = l(n, 95, 0, null == (f = t.Yb(n, 93, 1, t.Pb(n, 94).transform(a.validation))) ? null : f.firstname);
                    l(n, 93, 0, "form-control form-control-sm", v), l(n, 98, 0, a.options.data.firstname), l(n, 103, 0, null == (h = t.Yb(n, 103, 0, t.Pb(n, 104).transform(a.validation))) ? null : h.firstname);
                    var C, P, D = l(n, 115, 0, null == (C = t.Yb(n, 113, 1, t.Pb(n, 114).transform(a.validation))) ? null : C.surname);
                    l(n, 113, 0, "form-control form-control-sm", D), l(n, 118, 0, a.options.data.surname), l(n, 123, 0, null == (P = t.Yb(n, 123, 0, t.Pb(n, 124).transform(a.validation))) ? null : P.surname);
                    var k, y, U = l(n, 136, 0, null == (k = t.Yb(n, 134, 1, t.Pb(n, 135).transform(a.validation))) ? null : k.email);
                    l(n, 134, 0, "form-control form-control-sm", U), l(n, 139, 0, a.options.data.email), l(n, 144, 0, null == (y = t.Yb(n, 144, 0, t.Pb(n, 145).transform(a.validation))) ? null : y.email);
                    var w, x, M = l(n, 156, 0, null == (w = t.Yb(n, 154, 1, t.Pb(n, 155).transform(a.validation))) ? null : w.position);
                    l(n, 154, 0, "form-control form-control-sm", M), l(n, 159, 0, a.options.data.position), l(n, 164, 0, null == (x = t.Yb(n, 164, 0, t.Pb(n, 165).transform(a.validation))) ? null : x.position), l(n, 169, 0, t.Yb(n, 169, 0, t.Pb(n, 170).transform(a.loading))), l(n, 172, 0, t.Yb(n, 172, 0, t.Pb(n, 173).transform(a.loading)))
                }), (function(l, n) {
                    l(n, 8, 0, t.Pb(n, 17).ngClassUntouched, t.Pb(n, 17).ngClassTouched, t.Pb(n, 17).ngClassPristine, t.Pb(n, 17).ngClassDirty, t.Pb(n, 17).ngClassValid, t.Pb(n, 17).ngClassInvalid, t.Pb(n, 17).ngClassPending), l(n, 38, 0, t.Pb(n, 47).ngClassUntouched, t.Pb(n, 47).ngClassTouched, t.Pb(n, 47).ngClassPristine, t.Pb(n, 47).ngClassDirty, t.Pb(n, 47).ngClassValid, t.Pb(n, 47).ngClassInvalid, t.Pb(n, 47).ngClassPending), l(n, 57, 0, t.Pb(n, 66).ngClassUntouched, t.Pb(n, 66).ngClassTouched, t.Pb(n, 66).ngClassPristine, t.Pb(n, 66).ngClassDirty, t.Pb(n, 66).ngClassValid, t.Pb(n, 66).ngClassInvalid, t.Pb(n, 66).ngClassPending), l(n, 76, 0, t.Pb(n, 81).ngClassUntouched, t.Pb(n, 81).ngClassTouched, t.Pb(n, 81).ngClassPristine, t.Pb(n, 81).ngClassDirty, t.Pb(n, 81).ngClassValid, t.Pb(n, 81).ngClassInvalid, t.Pb(n, 81).ngClassPending), l(n, 91, 0, t.Pb(n, 100).ngClassUntouched, t.Pb(n, 100).ngClassTouched, t.Pb(n, 100).ngClassPristine, t.Pb(n, 100).ngClassDirty, t.Pb(n, 100).ngClassValid, t.Pb(n, 100).ngClassInvalid, t.Pb(n, 100).ngClassPending), l(n, 111, 0, t.Pb(n, 120).ngClassUntouched, t.Pb(n, 120).ngClassTouched, t.Pb(n, 120).ngClassPristine, t.Pb(n, 120).ngClassDirty, t.Pb(n, 120).ngClassValid, t.Pb(n, 120).ngClassInvalid, t.Pb(n, 120).ngClassPending), l(n, 132, 0, t.Pb(n, 141).ngClassUntouched, t.Pb(n, 141).ngClassTouched, t.Pb(n, 141).ngClassPristine, t.Pb(n, 141).ngClassDirty, t.Pb(n, 141).ngClassValid, t.Pb(n, 141).ngClassInvalid, t.Pb(n, 141).ngClassPending), l(n, 152, 0, t.Pb(n, 161).ngClassUntouched, t.Pb(n, 161).ngClassTouched, t.Pb(n, 161).ngClassPristine, t.Pb(n, 161).ngClassDirty, t.Pb(n, 161).ngClassValid, t.Pb(n, 161).ngClassInvalid, t.Pb(n, 161).ngClassPending)
                }))
            }
            var Z = u("NqMs"),
                T = u("lkAW"),
                j = u("26FU"),
                z = u("P6uZ"),
                A = u("ruxR"),
                V = u("mrSG"),
                G = function(l) {
                    function n(n) {
                        void 0 === n && (n = {});
                        var u = l.call(this) || this;
                        return u.data = {}, n = n || !1, u.init(), n && Object.assign(u.data, n), u
                    }
                    return V.__extends(n, l), n.prototype.init = function() {
                        this.data.id = void 0, this.data.username = "", this.data.group = [], this.data.changePasswd = 1
                    }, n.prototype.makeClone = function() {
                        return this.clone(this.data)
                    }, n.prototype.get = function() {
                        var l = this.makeClone();
                        return l.group = l.group[0] && l.group[0].id ? l.group[0].id : null, l
                    }, n
                }(u("0smX").a),
                q = u("t/Na"),
                B = u("67Y/"),
                J = function() {
                    function l(l) {
                        this.http = l
                    }
                    return l.prototype.add = function(l) {
                        return this.http.post("api/user/add/", l).pipe(Object(z.a)(), Object(B.a)((function(l) {
                            return l
                        })))
                    }, l.prototype.get = function(l) {
                        var n = (new q.j).set("id", l.toString());
                        return this.http.get("api/user/edit/", {
                            params: n
                        }).pipe(Object(z.a)(), Object(B.a)((function(l) {
                            return l.user
                        })))
                    }, l.prototype.save = function(l) {
                        return this.http.post("api/user/edit/", l).pipe(Object(z.a)(), Object(B.a)((function(l) {
                            return l
                        })))
                    }, l.ngInjectableDef = t.dc({
                        factory: function() {
                            return new l(t.ec(q.c))
                        },
                        token: l,
                        providedIn: "root"
                    }), l
                }(),
                $ = function() {
                    function l(l, n, u, t) {
                        this.toastr = l, this.router = n, this.route = u, this.service = t, this.validation = new j.a({}), this.loadingForm = new j.a(!0), this.path = this.router.url.split("/")[3], this.formFooter = new A.a(this.path, "edit" == this.path), this.user = new G
                    }
                    return l.prototype.ngOnInit = function() {
                        var l = this;
                        "add" == this.path ? this.loadingForm.next(!1) : this.route.paramMap.pipe(Object(z.a)()).subscribe((function(n) {
                            l.fillForm(+n.get("id"))
                        }))
                    }, l.prototype.fillForm = function(l) {
                        var n = this;
                        this.service.get(l).subscribe((function(l) {
                            Object.assign(n.user.data, l), n.oldItem = n.user.makeClone(), n.loadingForm.next(!1)
                        }))
                    }, l.prototype.formAction = function(l) {
                        "add" == this.path ? this.add(this.user.get()) : this.save(this.user)
                    }, l.prototype.add = function(l) {
                        var n = this;
                        this.loadingForm.next(!0), this.service.add(l).subscribe((function(l) {
                            n.validation.next(l.error.validation), l.error.status ? n.loadingForm.next(!1) : (l.user ? (n.toastr.success("User Added!"), n.router.navigate(["../"], {
                                relativeTo: n.route
                            })) : n.toastr.error("Unknown server error"), n.loadingForm.next(!1))
                        }))
                    }, l.prototype.save = function(l) {
                        var n = this;
                        if (this.loadingForm.next(!0), JSON.stringify(l.data) == JSON.stringify(this.oldItem)) return this.toastr.warning("No Changes Detected!"), void this.loadingForm.next(!1);
                        this.service.save(l.get()).subscribe((function(l) {
                            n.validation.next(l.error.validation), l.error.status ? n.loadingForm.next(!1) : (l.save ? (n.toastr.success("User Changed!"), n.router.navigate(["../../"], {
                                relativeTo: n.route
                            })) : n.toastr.error("Unknown server error"), n.loadingForm.next(!1))
                        }))
                    }, l
                }(),
                H = t.Bb({
                    encapsulation: 0,
                    styles: [
                        [""]
                    ],
                    data: {}
                });

            function W(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "kt-api-user-form", [], null, null, null, E, M)), t.Cb(1, 114688, null, 0, x, [d.j], {
                    options: [0, "options"],
                    validation: [1, "validation"],
                    loading: [2, "loading"]
                }, null), (l()(), t.Db(2, 0, null, null, 1, "kt-main-form-footer", [], null, [
                    [null, "trigger"]
                ], (function(l, n, u) {
                    var t = !0;
                    return "trigger" === n && (t = !1 !== l.component.formAction(u) && t), t
                }), Z.b, Z.a)), t.Cb(3, 114688, null, 0, T.a, [], {
                    options: [0, "options"],
                    loading: [1, "loading"]
                }, {
                    trigger: "trigger"
                })], (function(l, n) {
                    var u = n.component;
                    l(n, 1, 0, u.user, u.validation, u.loadingForm), l(n, 3, 0, u.formFooter, u.loadingForm)
                }), null)
            }

            function K(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "kt-edit", [], null, null, null, W, H)), t.Cb(1, 114688, null, 0, $, [d.j, c.q, c.a, J], null, null)], (function(l, n) {
                    l(n, 1, 0)
                }), null)
            }
            var L = t.zb("kt-edit", $, K, {}, {}, []),
                Q = u("4GxJ"),
                ll = u("9Bt9"),
                nl = u("qAlS"),
                ul = u("18CH"),
                tl = u("Fzqc"),
                ol = u("dWZg"),
                al = u("wOIO"),
                sl = u("EFBj"),
                il = u("ZWfn");
            u.d(n, "ApiUsersModuleNgFactory", (function() {
                return el
            }));
            var el = t.Ab(o, [], (function(l) {
                return t.Mb([t.Nb(512, t.k, t.lb, [
                    [8, [a.a, s.a, s.b, s.p, s.q, s.m, s.n, s.o, C, L]],
                    [3, t.k], t.E
                ]), t.Nb(4608, P.o, P.n, [t.A, [2, P.I]]), t.Nb(4608, D.A, D.A, []), t.Nb(4608, Q.E, Q.E, [t.k, t.w, Q.yb, Q.F]), t.Nb(4608, ll.g, ll.g, [P.d, t.G, nl.j, ll.i]), t.Nb(1073742336, P.c, P.c, []), t.Nb(1073742336, c.t, c.t, [
                    [2, c.z],
                    [2, c.q]
                ]), t.Nb(1073742336, D.z, D.z, []), t.Nb(1073742336, D.k, D.k, []), t.Nb(1073742336, Q.c, Q.c, []), t.Nb(1073742336, Q.g, Q.g, []), t.Nb(1073742336, Q.h, Q.h, []), t.Nb(1073742336, Q.l, Q.l, []), t.Nb(1073742336, Q.n, Q.n, []), t.Nb(1073742336, Q.u, Q.u, []), t.Nb(1073742336, Q.A, Q.A, []), t.Nb(1073742336, Q.G, Q.G, []), t.Nb(1073742336, Q.K, Q.K, []), t.Nb(1073742336, Q.P, Q.P, []), t.Nb(1073742336, Q.S, Q.S, []), t.Nb(1073742336, Q.V, Q.V, []), t.Nb(1073742336, Q.ab, Q.ab, []), t.Nb(1073742336, Q.eb, Q.eb, []), t.Nb(1073742336, Q.hb, Q.hb, []), t.Nb(1073742336, Q.kb, Q.kb, []), t.Nb(1073742336, Q.H, Q.H, []), t.Nb(1073742336, ul.a, ul.a, []), t.Nb(1073742336, tl.a, tl.a, []), t.Nb(1073742336, ol.b, ol.b, []), t.Nb(1073742336, nl.g, nl.g, []), t.Nb(1073742336, nl.e, nl.e, []), t.Nb(1073742336, al.a, al.a, []), t.Nb(1073742336, ll.h, ll.h, []), t.Nb(1073742336, sl.a, sl.a, []), t.Nb(1073742336, il.a, il.a, []), t.Nb(1073742336, o, o, []), t.Nb(1024, c.m, (function() {
                    return [
                        [{
                            path: "",
                            component: m
                        }, {
                            path: "add",
                            component: $
                        }, {
                            path: "edit/:id",
                            component: $
                        }]
                    ]
                }), [])])
            }))
        }
    }
]);