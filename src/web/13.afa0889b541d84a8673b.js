(window.webpackJsonp = window.webpackJsonp || []).push([
    [13], {
        S9s7: function(l, n, u) {
            "use strict";
            u.r(n);
            var t = u("CcnG"),
                o = function() {
                    return function() {}
                }(),
                a = u("pMnS"),
                e = u("9AJC"),
                i = u("II6f"),
                s = u("5Awz"),
                r = u("8kqb"),
                b = u("uoK1"),
                d = u("SZbH"),
                c = u("ZYCi"),
                p = u("GRfY"),
                g = u("mlFA"),
                m = function() {
                    function l() {
                        this.tableOptions = {
                            table: {
                                delBtn: "/confmanager/devices/delete/",
                                editBtn: !0,
                                selectable: !0,
                                preview: !1,
                                pagination: !1,
                                mainUrl: "/confmanager/devices/datatables/",
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
                                    creden_name: {
                                        title: "Credential",
                                        show: !0,
                                        sortable: !0
                                    },
                                    protocol: {
                                        title: "Protocol",
                                        show: !0,
                                        sortable: !1
                                    },
                                    port: {
                                        title: "Port",
                                        show: !0,
                                        sortable: !1
                                    },
                                    prompt: {
                                        title: "Prompt",
                                        show: !1,
                                        sortable: !1
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

            function v(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "kt-main-table", [], null, null, null, i.b, i.a)), t.Cb(1, 114688, null, 0, s.a, [r.a, b.a, d.j, c.q, c.a, p.a, g.a], {
                    options: [0, "options"]
                }, null)], (function(l, n) {
                    l(n, 1, 0, n.component.tableOptions)
                }), null)
            }

            function h(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "kt-cm-devices", [], null, null, null, v, f)), t.Cb(1, 114688, null, 0, m, [], null, null)], (function(l, n) {
                    l(n, 1, 0)
                }), null)
            }
            var C = t.zb("kt-cm-devices", m, h, {}, {}, []),
                D = u("Ip0R"),
                P = u("gIcY"),
                k = u("P+cp"),
                N = u("p/I8"),
                y = u("02SS"),
                w = u("4GxJ"),
                M = u("6U+V"),
                x = function() {
                    function l(l) {
                        this.toastr = l, this.list = {
                            address: new M.a("address"),
                            credential: new M.a("cm-credentials")
                        }
                    }
                    return l.prototype.ngOnInit = function() {
                        var l = this;
                        this.validation.subscribe((function(n) {
                            for (var u in n)
                                if (n[u])
                                    for (var t = 0; t < n[u].length; t++) l.toastr.error(n[u][t])
                        }))
                    }, l.prototype.setAddress = function(l) {
                        this.options.data.address = l
                    }, l.prototype.setCreden = function(l) {
                        this.options.data.credential = l
                    }, l
                }(),
                F = t.Bb({
                    encapsulation: 0,
                    styles: [
                        [""]
                    ],
                    data: {}
                });

            function U(l) {
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
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 0, "div", [
                    ["class", "tacgui-blockui-main"]
                ], null, null, null, null, null))], null, null)
            }

            function R(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 3, "div", [
                    ["class", "tacgui-blockui-main-message"]
                ], null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 0, "div", [
                    ["class", "kt-spinner kt-spinner--sm kt-spinner--success"]
                ], null, null, null, null, null)), (l()(), t.Db(2, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Please wait..."]))], null, null)
            }

            function j(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 119, "div", [
                    ["class", "col-md-9 col-lg-9"]
                ], null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 118, "div", [
                    ["class", "card m-3"]
                ], null, null, null, null, null)), (l()(), t.Db(2, 0, null, null, 111, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (l()(), t.Db(3, 0, null, null, 28, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t.Db(4, 0, null, null, 18, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(5, 0, null, null, 17, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(6, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Device Name"])), (l()(), t.Db(8, 0, null, null, 9, "input", [
                    ["class", "form-control form-control-sm"],
                    ["placeholder", "Name"],
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
                    return "input" === n && (o = !1 !== t.Pb(l, 13)._handleInput(u.target.value) && o), "blur" === n && (o = !1 !== t.Pb(l, 13).onTouched() && o), "compositionstart" === n && (o = !1 !== t.Pb(l, 13)._compositionStart() && o), "compositionend" === n && (o = !1 !== t.Pb(l, 13)._compositionEnd(u.target.value) && o), "ngModelChange" === n && (o = !1 !== (a.options.data.name = u) && o), o
                }), null, null)), t.Ub(512, null, D.D, D.E, [t.y, t.z, t.n, t.M]), t.Cb(10, 278528, null, 0, D.k, [D.D], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), t.Rb(131072, D.b, [t.h]), t.Sb(12, {
                    "is-invalid": 0
                }), t.Cb(13, 16384, null, 0, P.e, [t.M, t.n, [2, P.a]], null, null), t.Ub(1024, null, P.n, (function(l) {
                    return [l]
                }), [P.e]), t.Cb(15, 671744, null, 0, P.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, P.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, P.o, null, [P.s]), t.Cb(17, 16384, null, 0, P.p, [
                    [4, P.o]
                ], null, null), (l()(), t.Db(18, 0, null, null, 3, "div", [
                    ["class", "invalid-feedback"]
                ], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 2, null, U)), t.Cb(20, 278528, null, 0, D.l, [t.Y, t.U, t.y], {
                    ngForOf: [0, "ngForOf"]
                }, null), t.Rb(131072, D.b, [t.h]), (l()(), t.Db(22, 0, null, null, 0, "span", [
                    ["class", "form-text text-muted"]
                ], null, null, null, null, null)), (l()(), t.Db(23, 0, null, null, 8, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(24, 0, null, null, 7, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(25, 0, null, null, 6, "kt-field-general-list", [], null, [
                    [null, "returnData"]
                ], (function(l, n, u) {
                    var t = !0;
                    return "returnData" === n && (t = !1 !== l.component.setAddress(u) && t), t
                }), k.b, k.a)), t.Ub(512, null, D.D, D.E, [t.y, t.z, t.n, t.M]), t.Cb(27, 278528, null, 0, D.k, [D.D], {
                    ngClass: [0, "ngClass"]
                }, null), t.Rb(131072, D.b, [t.h]), t.Sb(29, {
                    "is-invalid": 0
                }), t.Cb(30, 114688, null, 0, N.a, [y.a], {
                    data: [0, "data"],
                    params: [1, "params"],
                    errors: [2, "errors"]
                }, {
                    returnData: "returnData"
                }), t.Rb(131072, D.b, [t.h]), (l()(), t.Db(32, 0, null, null, 47, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t.Db(33, 0, null, null, 26, "div", [
                    ["class", "col-3"]
                ], null, null, null, null, null)), (l()(), t.Db(34, 0, null, null, 25, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(35, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Protocol"])), (l()(), t.Db(37, 0, null, null, 17, "select", [
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
                    var o = !0,
                        a = l.component;
                    return "change" === n && (o = !1 !== t.Pb(l, 42).onChange(u.target.value) && o), "blur" === n && (o = !1 !== t.Pb(l, 42).onTouched() && o), "ngModelChange" === n && (o = !1 !== (a.options.data.protocol = u) && o), o
                }), null, null)), t.Ub(512, null, D.D, D.E, [t.y, t.z, t.n, t.M]), t.Cb(39, 278528, null, 0, D.k, [D.D], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), t.Rb(131072, D.b, [t.h]), t.Sb(41, {
                    "is-invalid": 0
                }), t.Cb(42, 16384, null, 0, P.x, [t.M, t.n], null, null), t.Ub(1024, null, P.n, (function(l) {
                    return [l]
                }), [P.x]), t.Cb(44, 671744, null, 0, P.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, P.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, P.o, null, [P.s]), t.Cb(46, 16384, null, 0, P.p, [
                    [4, P.o]
                ], null, null), (l()(), t.Db(47, 0, null, null, 3, "option", [
                    ["value", "ssh"]
                ], null, null, null, null, null)), t.Cb(48, 147456, null, 0, P.t, [t.n, t.M, [2, P.x]], {
                    value: [0, "value"]
                }, null), t.Cb(49, 147456, null, 0, P.C, [t.n, t.M, [8, null]], {
                    value: [0, "value"]
                }, null), (l()(), t.Xb(-1, null, ["ssh"])), (l()(), t.Db(51, 0, null, null, 3, "option", [
                    ["value", "telnet"]
                ], null, null, null, null, null)), t.Cb(52, 147456, null, 0, P.t, [t.n, t.M, [2, P.x]], {
                    value: [0, "value"]
                }, null), t.Cb(53, 147456, null, 0, P.C, [t.n, t.M, [8, null]], {
                    value: [0, "value"]
                }, null), (l()(), t.Xb(-1, null, ["telnet"])), (l()(), t.Db(55, 0, null, null, 3, "div", [
                    ["class", "invalid-feedback"]
                ], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 2, null, O)), t.Cb(57, 278528, null, 0, D.l, [t.Y, t.U, t.y], {
                    ngForOf: [0, "ngForOf"]
                }, null), t.Rb(131072, D.b, [t.h]), (l()(), t.Db(59, 0, null, null, 0, "span", [
                    ["class", "form-text text-muted"]
                ], null, null, null, null, null)), (l()(), t.Db(60, 0, null, null, 19, "div", [
                    ["class", "col-3"]
                ], null, null, null, null, null)), (l()(), t.Db(61, 0, null, null, 18, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(62, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Port"])), (l()(), t.Db(64, 0, null, null, 10, "input", [
                    ["class", "form-control form-control-sm"],
                    ["placeholder", "Name"],
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
                    var o = !0,
                        a = l.component;
                    return "input" === n && (o = !1 !== t.Pb(l, 69)._handleInput(u.target.value) && o), "blur" === n && (o = !1 !== t.Pb(l, 69).onTouched() && o), "compositionstart" === n && (o = !1 !== t.Pb(l, 69)._compositionStart() && o), "compositionend" === n && (o = !1 !== t.Pb(l, 69)._compositionEnd(u.target.value) && o), "change" === n && (o = !1 !== t.Pb(l, 70).onChange(u.target.value) && o), "input" === n && (o = !1 !== t.Pb(l, 70).onChange(u.target.value) && o), "blur" === n && (o = !1 !== t.Pb(l, 70).onTouched() && o), "ngModelChange" === n && (o = !1 !== (a.options.data.port = u) && o), o
                }), null, null)), t.Ub(512, null, D.D, D.E, [t.y, t.z, t.n, t.M]), t.Cb(66, 278528, null, 0, D.k, [D.D], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), t.Rb(131072, D.b, [t.h]), t.Sb(68, {
                    "is-invalid": 0
                }), t.Cb(69, 16384, null, 0, P.e, [t.M, t.n, [2, P.a]], null, null), t.Cb(70, 16384, null, 0, P.u, [t.M, t.n], null, null), t.Ub(1024, null, P.n, (function(l, n) {
                    return [l, n]
                }), [P.e, P.u]), t.Cb(72, 671744, null, 0, P.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, P.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, P.o, null, [P.s]), t.Cb(74, 16384, null, 0, P.p, [
                    [4, P.o]
                ], null, null), (l()(), t.Db(75, 0, null, null, 3, "div", [
                    ["class", "invalid-feedback"]
                ], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 2, null, I)), t.Cb(77, 278528, null, 0, D.l, [t.Y, t.U, t.y], {
                    ngForOf: [0, "ngForOf"]
                }, null), t.Rb(131072, D.b, [t.h]), (l()(), t.Db(79, 0, null, null, 0, "span", [
                    ["class", "form-text text-muted"]
                ], null, null, null, null, null)), (l()(), t.Db(80, 0, null, null, 33, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t.Db(81, 0, null, null, 8, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(82, 0, null, null, 7, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(83, 0, null, null, 6, "kt-field-general-list", [], null, [
                    [null, "returnData"]
                ], (function(l, n, u) {
                    var t = !0;
                    return "returnData" === n && (t = !1 !== l.component.setCreden(u) && t), t
                }), k.b, k.a)), t.Ub(512, null, D.D, D.E, [t.y, t.z, t.n, t.M]), t.Cb(85, 278528, null, 0, D.k, [D.D], {
                    ngClass: [0, "ngClass"]
                }, null), t.Rb(131072, D.b, [t.h]), t.Sb(87, {
                    "is-invalid": 0
                }), t.Cb(88, 114688, null, 0, N.a, [y.a], {
                    data: [0, "data"],
                    params: [1, "params"],
                    errors: [2, "errors"]
                }, {
                    returnData: "returnData"
                }), t.Rb(131072, D.b, [t.h]), (l()(), t.Db(90, 0, null, null, 23, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(91, 0, null, null, 22, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(92, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Prompt List (Optional)"])), (l()(), t.Db(94, 0, null, null, 14, "div", [
                    ["class", "input-group"]
                ], null, null, null, null, null)), (l()(), t.Db(95, 0, null, null, 9, "input", [
                    ["class", "form-control form-control-sm"],
                    ["placeholder", ""],
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
                    return "input" === n && (o = !1 !== t.Pb(l, 100)._handleInput(u.target.value) && o), "blur" === n && (o = !1 !== t.Pb(l, 100).onTouched() && o), "compositionstart" === n && (o = !1 !== t.Pb(l, 100)._compositionStart() && o), "compositionend" === n && (o = !1 !== t.Pb(l, 100)._compositionEnd(u.target.value) && o), "ngModelChange" === n && (o = !1 !== (a.options.data.prompt = u) && o), o
                }), null, null)), t.Ub(512, null, D.D, D.E, [t.y, t.z, t.n, t.M]), t.Cb(97, 278528, null, 0, D.k, [D.D], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), t.Rb(131072, D.b, [t.h]), t.Sb(99, {
                    "is-invalid": 0
                }), t.Cb(100, 16384, null, 0, P.e, [t.M, t.n, [2, P.a]], null, null), t.Ub(1024, null, P.n, (function(l) {
                    return [l]
                }), [P.e]), t.Cb(102, 671744, null, 0, P.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, P.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, P.o, null, [P.s]), t.Cb(104, 16384, null, 0, P.p, [
                    [4, P.o]
                ], null, null), (l()(), t.Db(105, 16777216, null, null, 3, "div", [
                    ["class", "input-group-append"],
                    ["ngbTooltip", "if set, prompt list inside of Model will be ignored. Comma separated list"]
                ], null, null, null, null, null)), t.Cb(106, 212992, null, 0, w.fb, [t.n, t.M, t.w, t.k, t.Y, w.gb, t.G, D.d, t.h, t.g], {
                    ngbTooltip: [0, "ngbTooltip"]
                }, null), (l()(), t.Db(107, 0, null, null, 1, "span", [
                    ["class", "input-group-text"]
                ], null, null, null, null, null)), (l()(), t.Db(108, 0, null, null, 0, "i", [
                    ["class", "fa fa-info"]
                ], null, null, null, null, null)), (l()(), t.Db(109, 0, null, null, 3, "div", [
                    ["class", "invalid-feedback"]
                ], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 2, null, Y)), t.Cb(111, 278528, null, 0, D.l, [t.Y, t.U, t.y], {
                    ngForOf: [0, "ngForOf"]
                }, null), t.Rb(131072, D.b, [t.h]), (l()(), t.Db(113, 0, null, null, 0, "span", [
                    ["class", "form-text text-muted"]
                ], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 2, null, S)), t.Cb(115, 16384, null, 0, D.m, [t.Y, t.U], {
                    ngIf: [0, "ngIf"]
                }, null), t.Rb(131072, D.b, [t.h]), (l()(), t.sb(16777216, null, null, 2, null, R)), t.Cb(118, 16384, null, 0, D.m, [t.Y, t.U], {
                    ngIf: [0, "ngIf"]
                }, null), t.Rb(131072, D.b, [t.h])], (function(l, n) {
                    var u, o, a = n.component,
                        e = l(n, 12, 0, null == (u = t.Yb(n, 10, 1, t.Pb(n, 11).transform(a.validation))) ? null : u.name);
                    l(n, 10, 0, "form-control form-control-sm", e), l(n, 15, 0, a.options.data.name), l(n, 20, 0, null == (o = t.Yb(n, 20, 0, t.Pb(n, 21).transform(a.validation))) ? null : o.name);
                    var i, s, r = l(n, 29, 0, null == (i = t.Yb(n, 27, 0, t.Pb(n, 28).transform(a.validation))) ? null : i.address);
                    l(n, 27, 0, r), l(n, 30, 0, a.options.data.address, a.list.address, null == (s = t.Yb(n, 30, 2, t.Pb(n, 31).transform(a.validation))) ? null : s.address);
                    var b, d, c = l(n, 41, 0, null == (b = t.Yb(n, 39, 1, t.Pb(n, 40).transform(a.validation))) ? null : b.protocol);
                    l(n, 39, 0, "form-control form-control-sm", c), l(n, 44, 0, a.options.data.protocol), l(n, 48, 0, "ssh"), l(n, 49, 0, "ssh"), l(n, 52, 0, "telnet"), l(n, 53, 0, "telnet"), l(n, 57, 0, null == (d = t.Yb(n, 57, 0, t.Pb(n, 58).transform(a.validation))) ? null : d.protocol);
                    var p, g, m = l(n, 68, 0, null == (p = t.Yb(n, 66, 1, t.Pb(n, 67).transform(a.validation))) ? null : p.port);
                    l(n, 66, 0, "form-control form-control-sm", m), l(n, 72, 0, a.options.data.port), l(n, 77, 0, null == (g = t.Yb(n, 77, 0, t.Pb(n, 78).transform(a.validation))) ? null : g.port);
                    var f, v, h = l(n, 87, 0, null == (f = t.Yb(n, 85, 0, t.Pb(n, 86).transform(a.validation))) ? null : f.credential);
                    l(n, 85, 0, h), l(n, 88, 0, a.options.data.credential, a.list.credential, null == (v = t.Yb(n, 88, 2, t.Pb(n, 89).transform(a.validation))) ? null : v.credential);
                    var C, D, P = l(n, 99, 0, null == (C = t.Yb(n, 97, 1, t.Pb(n, 98).transform(a.validation))) ? null : C.prompt);
                    l(n, 97, 0, "form-control form-control-sm", P), l(n, 102, 0, a.options.data.prompt), l(n, 106, 0, "if set, prompt list inside of Model will be ignored. Comma separated list"), l(n, 111, 0, null == (D = t.Yb(n, 111, 0, t.Pb(n, 112).transform(a.validation))) ? null : D.prompt), l(n, 115, 0, t.Yb(n, 115, 0, t.Pb(n, 116).transform(a.loading))), l(n, 118, 0, t.Yb(n, 118, 0, t.Pb(n, 119).transform(a.loading)))
                }), (function(l, n) {
                    l(n, 8, 0, t.Pb(n, 17).ngClassUntouched, t.Pb(n, 17).ngClassTouched, t.Pb(n, 17).ngClassPristine, t.Pb(n, 17).ngClassDirty, t.Pb(n, 17).ngClassValid, t.Pb(n, 17).ngClassInvalid, t.Pb(n, 17).ngClassPending), l(n, 37, 0, t.Pb(n, 46).ngClassUntouched, t.Pb(n, 46).ngClassTouched, t.Pb(n, 46).ngClassPristine, t.Pb(n, 46).ngClassDirty, t.Pb(n, 46).ngClassValid, t.Pb(n, 46).ngClassInvalid, t.Pb(n, 46).ngClassPending), l(n, 64, 0, t.Pb(n, 74).ngClassUntouched, t.Pb(n, 74).ngClassTouched, t.Pb(n, 74).ngClassPristine, t.Pb(n, 74).ngClassDirty, t.Pb(n, 74).ngClassValid, t.Pb(n, 74).ngClassInvalid, t.Pb(n, 74).ngClassPending), l(n, 95, 0, t.Pb(n, 104).ngClassUntouched, t.Pb(n, 104).ngClassTouched, t.Pb(n, 104).ngClassPristine, t.Pb(n, 104).ngClassDirty, t.Pb(n, 104).ngClassValid, t.Pb(n, 104).ngClassInvalid, t.Pb(n, 104).ngClassPending)
                }))
            }
            var A = u("NqMs"),
                Z = u("lkAW"),
                T = u("26FU"),
                _ = u("P6uZ"),
                z = u("ruxR"),
                E = u("mrSG"),
                X = function(l) {
                    function n(n) {
                        void 0 === n && (n = {});
                        var u = l.call(this) || this;
                        return u.data = {}, n = n || !1, u.init(), n && Object.assign(u.data, n), u
                    }
                    return E.__extends(n, l), n.prototype.init = function() {
                        this.data.credential = [], this.data.address = [], this.data.port = 22, this.data.prompt = "", this.data.name = "", this.data.protocol = "ssh"
                    }, n.prototype.makeClone = function() {
                        return this.clone(this.data)
                    }, n.prototype.get = function() {
                        var l = this.makeClone();
                        return l.credential = l.credential[0] && l.credential[0].id ? l.credential[0].id : null, l.address = l.address[0] && l.address[0].id ? l.address[0].id : null, l
                    }, n
                }(u("0smX").a),
                q = u("t/Na"),
                G = u("67Y/"),
                B = "api/confmanager/devices/",
                V = function() {
                    function l(l) {
                        this.http = l
                    }
                    return l.prototype.add = function(l) {
                        return this.http.post(B + "add/", l).pipe(Object(_.a)(), Object(G.a)((function(l) {
                            return l
                        })))
                    }, l.prototype.get = function(l) {
                        var n = (new q.j).set("id", l.toString());
                        return this.http.get(B + "edit/", {
                            params: n
                        }).pipe(Object(_.a)(), Object(G.a)((function(l) {
                            return l.device
                        })))
                    }, l.prototype.save = function(l) {
                        return this.http.post(B + "edit/", l).pipe(Object(_.a)(), Object(G.a)((function(l) {
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
                J = function() {
                    function l(l, n, u, t) {
                        this.toastr = l, this.router = n, this.route = u, this.service = t, this.validation = new T.a({}), this.loadingForm = new T.a(!0), this.path = this.router.url.split("/")[4], this.formFooter = new z.a(this.path, "edit" == this.path), this.device = new X
                    }
                    return l.prototype.ngOnInit = function() {
                        var l = this;
                        "add" == this.path ? this.loadingForm.next(!1) : this.route.paramMap.pipe(Object(_.a)()).subscribe((function(n) {
                            l.fillForm(+n.get("id"))
                        }))
                    }, l.prototype.fillForm = function(l) {
                        var n = this;
                        this.service.get(l).subscribe((function(l) {
                            Object.assign(n.device.data, l), n.oldItem = n.device.makeClone(), n.loadingForm.next(!1)
                        }))
                    }, l.prototype.formAction = function(l) {
                        "add" == this.path ? this.add(this.device.get()) : this.save(this.device)
                    }, l.prototype.add = function(l) {
                        var n = this;
                        this.loadingForm.next(!0), this.service.add(l).subscribe((function(l) {
                            n.validation.next(l.error.validation), l.error.status ? n.loadingForm.next(!1) : (l.device ? (n.toastr.success("Device Added!"), n.router.navigate(["../"], {
                                relativeTo: n.route
                            })) : n.toastr.error("Unknown server error"), n.loadingForm.next(!1))
                        }))
                    }, l.prototype.save = function(l) {
                        var n = this;
                        if (this.loadingForm.next(!0), JSON.stringify(l.data) == JSON.stringify(this.oldItem)) return this.toastr.warning("No Changes Detected!"), void this.loadingForm.next(!1);
                        this.service.save(l.get()).subscribe((function(l) {
                            n.validation.next(l.error.validation), l.error.status ? n.loadingForm.next(!1) : (l.save ? (n.toastr.success("Device Changed!"), n.router.navigate(["../../"], {
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

            function $(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "kt-cm-device-form", [], null, null, null, j, F)), t.Cb(1, 114688, null, 0, x, [d.j], {
                    options: [0, "options"],
                    validation: [1, "validation"],
                    loading: [2, "loading"]
                }, null), (l()(), t.Db(2, 0, null, null, 1, "kt-main-form-footer", [], null, [
                    [null, "trigger"]
                ], (function(l, n, u) {
                    var t = !0;
                    return "trigger" === n && (t = !1 !== l.component.formAction(u) && t), t
                }), A.b, A.a)), t.Cb(3, 114688, null, 0, Z.a, [], {
                    options: [0, "options"],
                    loading: [1, "loading"]
                }, {
                    trigger: "trigger"
                })], (function(l, n) {
                    var u = n.component;
                    l(n, 1, 0, u.device, u.validation, u.loadingForm), l(n, 3, 0, u.formFooter, u.loadingForm)
                }), null)
            }

            function K(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "kt-edit", [], null, null, null, $, H)), t.Cb(1, 114688, null, 0, J, [d.j, c.q, c.a, V], null, null)], (function(l, n) {
                    l(n, 1, 0)
                }), null)
            }
            var W = t.zb("kt-edit", J, K, {}, {}, []),
                L = u("9Bt9"),
                Q = u("qAlS"),
                ll = u("18CH"),
                nl = u("Fzqc"),
                ul = u("dWZg"),
                tl = u("wOIO"),
                ol = u("EFBj"),
                al = u("ZWfn");
            u.d(n, "CmDevicesModuleNgFactory", (function() {
                return el
            }));
            var el = t.Ab(o, [], (function(l) {
                return t.Mb([t.Nb(512, t.k, t.lb, [
                    [8, [a.a, e.a, e.b, e.p, e.q, e.m, e.n, e.o, C, W]],
                    [3, t.k], t.E
                ]), t.Nb(4608, D.o, D.n, [t.A, [2, D.I]]), t.Nb(4608, P.A, P.A, []), t.Nb(4608, w.E, w.E, [t.k, t.w, w.yb, w.F]), t.Nb(4608, L.g, L.g, [D.d, t.G, Q.j, L.i]), t.Nb(1073742336, D.c, D.c, []), t.Nb(1073742336, c.t, c.t, [
                    [2, c.z],
                    [2, c.q]
                ]), t.Nb(1073742336, P.z, P.z, []), t.Nb(1073742336, P.k, P.k, []), t.Nb(1073742336, w.c, w.c, []), t.Nb(1073742336, w.g, w.g, []), t.Nb(1073742336, w.h, w.h, []), t.Nb(1073742336, w.l, w.l, []), t.Nb(1073742336, w.n, w.n, []), t.Nb(1073742336, w.u, w.u, []), t.Nb(1073742336, w.A, w.A, []), t.Nb(1073742336, w.G, w.G, []), t.Nb(1073742336, w.K, w.K, []), t.Nb(1073742336, w.P, w.P, []), t.Nb(1073742336, w.S, w.S, []), t.Nb(1073742336, w.V, w.V, []), t.Nb(1073742336, w.ab, w.ab, []), t.Nb(1073742336, w.eb, w.eb, []), t.Nb(1073742336, w.hb, w.hb, []), t.Nb(1073742336, w.kb, w.kb, []), t.Nb(1073742336, w.H, w.H, []), t.Nb(1073742336, ll.a, ll.a, []), t.Nb(1073742336, nl.a, nl.a, []), t.Nb(1073742336, ul.b, ul.b, []), t.Nb(1073742336, Q.g, Q.g, []), t.Nb(1073742336, Q.e, Q.e, []), t.Nb(1073742336, tl.a, tl.a, []), t.Nb(1073742336, L.h, L.h, []), t.Nb(1073742336, ol.a, ol.a, []), t.Nb(1073742336, al.a, al.a, []), t.Nb(1073742336, o, o, []), t.Nb(1024, c.m, (function() {
                    return [
                        [{
                            path: "",
                            component: m
                        }, {
                            path: "add",
                            component: J
                        }, {
                            path: "edit/:id",
                            component: J
                        }]
                    ]
                }), [])])
            }))
        }
    }
]);