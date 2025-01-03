(window.webpackJsonp = window.webpackJsonp || []).push([
    [29], {
        "8MCm": function(l, n, u) {
            "use strict";
            u.r(n);
            var t = u("CcnG"),
                a = function() {
                    return function() {}
                }(),
                o = u("pMnS"),
                e = u("9AJC"),
                s = u("II6f"),
                i = u("5Awz"),
                r = u("8kqb"),
                d = u("uoK1"),
                b = u("SZbH"),
                c = u("ZYCi"),
                g = u("GRfY"),
                p = u("mlFA"),
                m = u("P6uZ"),
                C = function() {
                    function l() {
                        this.tableOptions = {
                            table: {
                                delBtn: "/tacacs/device/delete/",
                                editBtn: !0,
                                selectable: !0,
                                preview: {
                                    target: "device"
                                },
                                sort: {
                                    column: "name",
                                    direction: "asc"
                                },
                                editable: !0,
                                pagination: !1,
                                mainUrl: "/tacacs/device/datatables/",
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
                                    address: {
                                        title: "Address",
                                        show: !0,
                                        sortable: !0
                                    },
                                    address_name: {
                                        title: "Address Name",
                                        show: !1,
                                        sortable: !0,
                                        htmlPattern: function(l, n, u, t) {
                                            var a = "";
                                            return t.pipe(Object(m.a)()).subscribe((function(l) {
                                                l[u].address && (a = l[u].address)
                                            })), '<span title="' + a + '">' + l + "</span>"
                                        }
                                    },
                                    group_name: {
                                        title: "Group",
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
                                    enable: !0,
                                    export: {
                                        enable: !0,
                                        target: "devices",
                                        options: []
                                    },
                                    import: {
                                        enable: !0,
                                        target: "devices"
                                    },
                                    delete: {
                                        enable: !0
                                    }
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

            function v(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "kt-main-table", [], null, null, null, s.b, s.a)), t.Cb(1, 114688, null, 0, i.a, [r.a, d.a, b.j, c.q, c.a, g.a, p.a], {
                    options: [0, "options"]
                }, null)], (function(l, n) {
                    l(n, 1, 0, n.component.tableOptions)
                }), null)
            }

            function f(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "kt-devices", [], null, null, null, v, h)), t.Cb(1, 114688, null, 0, C, [], null, null)], (function(l, n) {
                    l(n, 1, 0)
                }), null)
            }
            var P = t.zb("kt-devices", C, f, {}, {}, []),
                D = u("gIcY"),
                y = u("Ip0R"),
                M = u("P+cp"),
                k = u("p/I8"),
                _ = u("02SS"),
                U = u("4GxJ"),
                w = u("6U+V"),
                x = function() {
                    function l(l) {
                        this.toastr = l, this.list = {
                            dev_group: new w.a("dev_group"),
                            acl: new w.a("acl"),
                            user_group: new w.a("user_group"),
                            address: new w.a("address")
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
                    }, l.prototype.setAcl = function(l) {
                        this.options.data.acl = l
                    }, l.prototype.setUserGroup = function(l) {
                        this.options.data.user_group = l
                    }, l.prototype.setAddr = function(l) {
                        this.options.data.address = l
                    }, l
                }(),
                I = t.Bb({
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

            function T(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), t.Xb(1, null, ["", ""]))], null, (function(l, n) {
                    l(n, 1, 0, n.context.$implicit)
                }))
            }

            function S(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 8, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 1, "label", [
                    ["class", "pull-right"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Welcome Banner"])), (l()(), t.Db(3, 0, null, null, 5, "textarea", [
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
                        o = l.component;
                    return "input" === n && (a = !1 !== t.Pb(l, 4)._handleInput(u.target.value) && a), "blur" === n && (a = !1 !== t.Pb(l, 4).onTouched() && a), "compositionstart" === n && (a = !1 !== t.Pb(l, 4)._compositionStart() && a), "compositionend" === n && (a = !1 !== t.Pb(l, 4)._compositionEnd(u.target.value) && a), "ngModelChange" === n && (a = !1 !== (o.options.data.banner_welcome = u) && a), a
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
                ], null, null)], (function(l, n) {
                    l(n, 6, 0, n.component.options.data.banner_welcome)
                }), (function(l, n) {
                    l(n, 3, 0, t.Pb(n, 8).ngClassUntouched, t.Pb(n, 8).ngClassTouched, t.Pb(n, 8).ngClassPristine, t.Pb(n, 8).ngClassDirty, t.Pb(n, 8).ngClassValid, t.Pb(n, 8).ngClassInvalid, t.Pb(n, 8).ngClassPending)
                }))
            }

            function A(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 8, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 1, "label", [
                    ["class", "pull-right"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Message Of The Day Banner"])), (l()(), t.Db(3, 0, null, null, 5, "textarea", [
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
                        o = l.component;
                    return "input" === n && (a = !1 !== t.Pb(l, 4)._handleInput(u.target.value) && a), "blur" === n && (a = !1 !== t.Pb(l, 4).onTouched() && a), "compositionstart" === n && (a = !1 !== t.Pb(l, 4)._compositionStart() && a), "compositionend" === n && (a = !1 !== t.Pb(l, 4)._compositionEnd(u.target.value) && a), "ngModelChange" === n && (a = !1 !== (o.options.data.banner_motd = u) && a), a
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
                ], null, null)], (function(l, n) {
                    l(n, 6, 0, n.component.options.data.banner_motd)
                }), (function(l, n) {
                    l(n, 3, 0, t.Pb(n, 8).ngClassUntouched, t.Pb(n, 8).ngClassTouched, t.Pb(n, 8).ngClassPristine, t.Pb(n, 8).ngClassDirty, t.Pb(n, 8).ngClassValid, t.Pb(n, 8).ngClassInvalid, t.Pb(n, 8).ngClassPending)
                }))
            }

            function F(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 8, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 1, "label", [
                    ["class", "pull-right"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Authentication Failed Banner"])), (l()(), t.Db(3, 0, null, null, 5, "textarea", [
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
                        o = l.component;
                    return "input" === n && (a = !1 !== t.Pb(l, 4)._handleInput(u.target.value) && a), "blur" === n && (a = !1 !== t.Pb(l, 4).onTouched() && a), "compositionstart" === n && (a = !1 !== t.Pb(l, 4)._compositionStart() && a), "compositionend" === n && (a = !1 !== t.Pb(l, 4)._compositionEnd(u.target.value) && a), "ngModelChange" === n && (a = !1 !== (o.options.data.banner_failed = u) && a), a
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
                ], null, null)], (function(l, n) {
                    l(n, 6, 0, n.component.options.data.banner_failed)
                }), (function(l, n) {
                    l(n, 3, 0, t.Pb(n, 8).ngClassUntouched, t.Pb(n, 8).ngClassTouched, t.Pb(n, 8).ngClassPristine, t.Pb(n, 8).ngClassDirty, t.Pb(n, 8).ngClassValid, t.Pb(n, 8).ngClassInvalid, t.Pb(n, 8).ngClassPending)
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

            function E(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 254, "div", [
                    ["class", "col-md-9 col-lg-7"]
                ], null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 253, "div", [
                    ["class", "card m-3"]
                ], null, null, null, null, null)), (l()(), t.Db(2, 0, null, null, 246, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (l()(), t.Db(3, 0, null, null, 28, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t.Db(4, 0, null, null, 19, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(5, 0, null, null, 18, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(6, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Name"])), (l()(), t.Db(8, 0, null, null, 9, "input", [
                    ["class", "form-control form-control-sm"],
                    ["placeholder", "Device Name"],
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
                        o = l.component;
                    return "input" === n && (a = !1 !== t.Pb(l, 13)._handleInput(u.target.value) && a), "blur" === n && (a = !1 !== t.Pb(l, 13).onTouched() && a), "compositionstart" === n && (a = !1 !== t.Pb(l, 13)._compositionStart() && a), "compositionend" === n && (a = !1 !== t.Pb(l, 13)._compositionEnd(u.target.value) && a), "ngModelChange" === n && (a = !1 !== (o.options.data.name = u) && a), a
                }), null, null)), t.Ub(512, null, y.D, y.E, [t.y, t.z, t.n, t.M]), t.Cb(10, 278528, null, 0, y.k, [y.D], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), t.Rb(131072, y.b, [t.h]), t.Sb(12, {
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
                ], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 2, null, N)), t.Cb(20, 278528, null, 0, y.l, [t.Y, t.U, t.y], {
                    ngForOf: [0, "ngForOf"]
                }, null), t.Rb(131072, y.b, [t.h]), (l()(), t.Db(22, 0, null, null, 1, "span", [
                    ["class", "form-text text-muted"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["it should be unique, but you can change it later"])), (l()(), t.Db(24, 0, null, null, 7, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(25, 0, null, null, 6, "kt-field-general-list", [], null, [
                    [null, "returnData"]
                ], (function(l, n, u) {
                    var t = !0;
                    return "returnData" === n && (t = !1 !== l.component.setGroup(u) && t), t
                }), M.b, M.a)), t.Ub(512, null, y.D, y.E, [t.y, t.z, t.n, t.M]), t.Cb(27, 278528, null, 0, y.k, [y.D], {
                    ngClass: [0, "ngClass"]
                }, null), t.Rb(131072, y.b, [t.h]), t.Sb(29, {
                    "is-invalid": 0
                }), t.Cb(30, 114688, null, 0, k.a, [_.a], {
                    data: [0, "data"],
                    params: [1, "params"],
                    errors: [2, "errors"]
                }, {
                    returnData: "returnData"
                }), t.Rb(131072, y.b, [t.h]), (l()(), t.Db(32, 0, null, null, 27, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t.Db(33, 0, null, null, 7, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(34, 0, null, null, 6, "kt-field-general-list", [], null, [
                    [null, "returnData"]
                ], (function(l, n, u) {
                    var t = !0;
                    return "returnData" === n && (t = !1 !== l.component.setAddr(u) && t), t
                }), M.b, M.a)), t.Ub(512, null, y.D, y.E, [t.y, t.z, t.n, t.M]), t.Cb(36, 278528, null, 0, y.k, [y.D], {
                    ngClass: [0, "ngClass"]
                }, null), t.Rb(131072, y.b, [t.h]), t.Sb(38, {
                    "is-invalid": 0
                }), t.Cb(39, 114688, null, 0, k.a, [_.a], {
                    data: [0, "data"],
                    params: [1, "params"],
                    errors: [2, "errors"]
                }, {
                    returnData: "returnData"
                }), t.Rb(131072, y.b, [t.h]), (l()(), t.Db(41, 0, null, null, 18, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(42, 0, null, null, 17, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(43, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Tacacs Key"])), (l()(), t.Db(45, 0, null, null, 9, "input", [
                    ["class", "form-control form-control-sm"],
                    ["placeholder", "Tacacs Key"],
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
                        o = l.component;
                    return "input" === n && (a = !1 !== t.Pb(l, 50)._handleInput(u.target.value) && a), "blur" === n && (a = !1 !== t.Pb(l, 50).onTouched() && a), "compositionstart" === n && (a = !1 !== t.Pb(l, 50)._compositionStart() && a), "compositionend" === n && (a = !1 !== t.Pb(l, 50)._compositionEnd(u.target.value) && a), "ngModelChange" === n && (a = !1 !== (o.options.data.key = u) && a), a
                }), null, null)), t.Ub(512, null, y.D, y.E, [t.y, t.z, t.n, t.M]), t.Cb(47, 278528, null, 0, y.k, [y.D], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), t.Rb(131072, y.b, [t.h]), t.Sb(49, {
                    "is-invalid": 0
                }), t.Cb(50, 16384, null, 0, D.e, [t.M, t.n, [2, D.a]], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.e]), t.Cb(52, 671744, null, 0, D.s, [
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
                ], null, null), (l()(), t.Db(55, 0, null, null, 3, "div", [
                    ["class", "invalid-feedback"]
                ], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 2, null, T)), t.Cb(57, 278528, null, 0, y.l, [t.Y, t.U, t.y], {
                    ngForOf: [0, "ngForOf"]
                }, null), t.Rb(131072, y.b, [t.h]), (l()(), t.Db(59, 0, null, null, 0, "span", [
                    ["class", "form-text text-muted"]
                ], null, null, null, null, null)), (l()(), t.Db(60, 0, null, null, 33, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t.Db(61, 0, null, null, 11, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(62, 0, null, null, 10, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(63, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Enable Password"])), (l()(), t.Db(65, 0, null, null, 5, "input", [
                    ["class", "form-control form-control-sm"],
                    ["placeholder", "Enable Password"],
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
                        o = l.component;
                    return "input" === n && (a = !1 !== t.Pb(l, 66)._handleInput(u.target.value) && a), "blur" === n && (a = !1 !== t.Pb(l, 66).onTouched() && a), "compositionstart" === n && (a = !1 !== t.Pb(l, 66)._compositionStart() && a), "compositionend" === n && (a = !1 !== t.Pb(l, 66)._compositionEnd(u.target.value) && a), "ngModelChange" === n && (a = !1 !== (o.options.data.enable = u) && a), a
                }), null, null)), t.Cb(66, 16384, null, 0, D.e, [t.M, t.n, [2, D.a]], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.e]), t.Cb(68, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(70, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null), (l()(), t.Db(71, 0, null, null, 0, "div", [
                    ["class", "invalid-feedback"]
                ], null, null, null, null, null)), (l()(), t.Db(72, 0, null, null, 0, "span", [
                    ["class", "form-text text-muted"]
                ], null, null, null, null, null)), (l()(), t.Db(73, 0, null, null, 20, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(74, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Type of storing"])), (l()(), t.Db(76, 0, null, null, 17, "select", [
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
                        o = l.component;
                    return "change" === n && (a = !1 !== t.Pb(l, 77).onChange(u.target.value) && a), "blur" === n && (a = !1 !== t.Pb(l, 77).onTouched() && a), "ngModelChange" === n && (a = !1 !== (o.options.data.enable_flag = u) && a), a
                }), null, null)), t.Cb(77, 16384, null, 0, D.x, [t.M, t.n], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.x]), t.Cb(79, 671744, null, 0, D.s, [
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
                ], null, null), (l()(), t.Db(82, 0, null, null, 3, "option", [
                    ["value", "0"]
                ], null, null, null, null, null)), t.Cb(83, 147456, null, 0, D.t, [t.n, t.M, [2, D.x]], {
                    value: [0, "value"]
                }, null), t.Cb(84, 147456, null, 0, D.C, [t.n, t.M, [8, null]], {
                    value: [0, "value"]
                }, null), (l()(), t.Xb(-1, null, ["Clear Text"])), (l()(), t.Db(86, 0, null, null, 3, "option", [
                    ["value", "1"]
                ], null, null, null, null, null)), t.Cb(87, 147456, null, 0, D.t, [t.n, t.M, [2, D.x]], {
                    value: [0, "value"]
                }, null), t.Cb(88, 147456, null, 0, D.C, [t.n, t.M, [8, null]], {
                    value: [0, "value"]
                }, null), (l()(), t.Xb(-1, null, ["MD5"])), (l()(), t.Db(90, 0, null, null, 3, "option", [
                    ["value", "2"]
                ], null, null, null, null, null)), t.Cb(91, 147456, null, 0, D.t, [t.n, t.M, [2, D.x]], {
                    value: [0, "value"]
                }, null), t.Cb(92, 147456, null, 0, D.C, [t.n, t.M, [8, null]], {
                    value: [0, "value"]
                }, null), (l()(), t.Xb(-1, null, ["MD5 (hashed)"])), (l()(), t.Db(94, 0, null, null, 140, "div", [
                    ["class", "accordion accordion-light  accordion-toggle-arrow"]
                ], null, null, null, null, null)), (l()(), t.Db(95, 0, null, null, 29, "div", [
                    ["class", "card"]
                ], null, null, null, null, null)), (l()(), t.Db(96, 0, null, null, 5, "div", [
                    ["class", "card-header"]
                ], null, null, null, null, null)), (l()(), t.Db(97, 0, null, null, 4, "div", [
                    ["class", "card-title collapsed"],
                    ["data-toggle", "collapse"]
                ], [
                    [1, "aria-expanded", 0]
                ], [
                    [null, "click"]
                ], (function(l, n, u) {
                    var t = !0,
                        a = l.component;
                    return "click" === n && (t = 0 != (a.notCollapsedB = !a.notCollapsedB) && t), t
                }), null, null)), t.Ub(512, null, y.D, y.E, [t.y, t.z, t.n, t.M]), t.Cb(99, 278528, null, 0, y.k, [y.D], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), t.Sb(100, {
                    collapsed: 0
                }), (l()(), t.Xb(-1, null, ["Banners"])), (l()(), t.Db(102, 0, null, null, 22, "div", [], [
                    [2, "collapse", null],
                    [2, "show", null]
                ], null, null, null, null)), t.Cb(103, 16384, null, 0, U.m, [], {
                    collapsed: [0, "collapsed"]
                }, null), (l()(), t.Db(104, 0, null, null, 20, "ngb-tabset", [], null, null, null, e.k, e.f)), t.Cb(105, 2146304, null, 1, U.Y, [U.Z], null, null), t.Vb(603979776, 1, {
                    tabs: 1
                }), (l()(), t.Db(107, 0, null, null, 5, "ngb-tab", [
                    ["title", "Welcome"]
                ], null, null, null, null, null)), t.Cb(108, 2113536, [
                    [1, 4]
                ], 2, U.W, [], {
                    title: [0, "title"]
                }, null), t.Vb(603979776, 2, {
                    titleTpls: 1
                }), t.Vb(603979776, 3, {
                    contentTpls: 1
                }), (l()(), t.sb(0, null, null, 1, null, S)), t.Cb(112, 16384, [
                    [3, 4]
                ], 0, U.X, [t.U], null, null), (l()(), t.Db(113, 0, null, null, 5, "ngb-tab", [
                    ["title", "MOTD"]
                ], null, null, null, null, null)), t.Cb(114, 2113536, [
                    [1, 4]
                ], 2, U.W, [], {
                    title: [0, "title"]
                }, null), t.Vb(603979776, 4, {
                    titleTpls: 1
                }), t.Vb(603979776, 5, {
                    contentTpls: 1
                }), (l()(), t.sb(0, null, null, 1, null, A)), t.Cb(118, 16384, [
                    [5, 4]
                ], 0, U.X, [t.U], null, null), (l()(), t.Db(119, 0, null, null, 5, "ngb-tab", [
                    ["title", "Failed Auth"]
                ], null, null, null, null, null)), t.Cb(120, 2113536, [
                    [1, 4]
                ], 2, U.W, [], {
                    title: [0, "title"]
                }, null), t.Vb(603979776, 6, {
                    titleTpls: 1
                }), t.Vb(603979776, 7, {
                    contentTpls: 1
                }), (l()(), t.sb(0, null, null, 1, null, F)), t.Cb(124, 16384, [
                    [7, 4]
                ], 0, U.X, [t.U], null, null), (l()(), t.Db(125, 0, null, null, 31, "div", [
                    ["class", "card"]
                ], null, null, null, null, null)), (l()(), t.Db(126, 0, null, null, 5, "div", [
                    ["class", "card-header"]
                ], null, null, null, null, null)), (l()(), t.Db(127, 0, null, null, 4, "div", [
                    ["class", "card-title collapsed"],
                    ["data-toggle", "collapse"]
                ], [
                    [1, "aria-expanded", 0]
                ], [
                    [null, "click"]
                ], (function(l, n, u) {
                    var t = !0,
                        a = l.component;
                    return "click" === n && (t = 0 != (a.notCollapsedACC = !a.notCollapsedACC) && t), t
                }), null, null)), t.Ub(512, null, y.D, y.E, [t.y, t.z, t.n, t.M]), t.Cb(129, 278528, null, 0, y.k, [y.D], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), t.Sb(130, {
                    collapsed: 0
                }), (l()(), t.Xb(-1, null, ["Access"])), (l()(), t.Db(132, 0, null, null, 24, "div", [], [
                    [2, "collapse", null],
                    [2, "show", null]
                ], null, null, null, null)), t.Cb(133, 16384, null, 0, U.m, [], {
                    collapsed: [0, "collapsed"]
                }, null), (l()(), t.Db(134, 0, null, null, 8, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t.Db(135, 0, null, null, 3, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(136, 0, null, null, 2, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(137, 0, null, null, 1, "kt-field-general-list", [], null, [
                    [null, "returnData"]
                ], (function(l, n, u) {
                    var t = !0;
                    return "returnData" === n && (t = !1 !== l.component.setAcl(u) && t), t
                }), M.b, M.a)), t.Cb(138, 114688, null, 0, k.a, [_.a], {
                    data: [0, "data"],
                    params: [1, "params"]
                }, {
                    returnData: "returnData"
                }), (l()(), t.Db(139, 0, null, null, 3, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(140, 0, null, null, 2, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(141, 0, null, null, 1, "kt-field-general-list", [], null, [
                    [null, "returnData"]
                ], (function(l, n, u) {
                    var t = !0;
                    return "returnData" === n && (t = !1 !== l.component.setUserGroup(u) && t), t
                }), M.b, M.a)), t.Cb(142, 114688, null, 0, k.a, [_.a], {
                    data: [0, "data"],
                    params: [1, "params"]
                }, {
                    returnData: "returnData"
                }), (l()(), t.Db(143, 0, null, null, 13, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t.Db(144, 0, null, null, 12, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(145, 0, null, null, 11, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(146, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Connection Timeout"])), (l()(), t.Db(148, 0, null, null, 6, "input", [
                    ["class", "form-control form-control-sm"],
                    ["placeholder", "Connection Timeout"],
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
                        o = l.component;
                    return "input" === n && (a = !1 !== t.Pb(l, 149)._handleInput(u.target.value) && a), "blur" === n && (a = !1 !== t.Pb(l, 149).onTouched() && a), "compositionstart" === n && (a = !1 !== t.Pb(l, 149)._compositionStart() && a), "compositionend" === n && (a = !1 !== t.Pb(l, 149)._compositionEnd(u.target.value) && a), "change" === n && (a = !1 !== t.Pb(l, 150).onChange(u.target.value) && a), "input" === n && (a = !1 !== t.Pb(l, 150).onChange(u.target.value) && a), "blur" === n && (a = !1 !== t.Pb(l, 150).onTouched() && a), "ngModelChange" === n && (a = !1 !== (o.options.data.connection_timeout = u) && a), a
                }), null, null)), t.Cb(149, 16384, null, 0, D.e, [t.M, t.n, [2, D.a]], null, null), t.Cb(150, 16384, null, 0, D.u, [t.M, t.n], null, null), t.Ub(1024, null, D.n, (function(l, n) {
                    return [l, n]
                }), [D.e, D.u]), t.Cb(152, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(154, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null), (l()(), t.Db(155, 0, null, null, 0, "div", [
                    ["class", "invalid-feedback"]
                ], null, null, null, null, null)), (l()(), t.Db(156, 0, null, null, 0, "span", [
                    ["class", "form-text text-muted"]
                ], null, null, null, null, null)), (l()(), t.Db(157, 0, null, null, 58, "div", [
                    ["class", "card"]
                ], null, null, null, null, null)), (l()(), t.Db(158, 0, null, null, 5, "div", [
                    ["class", "card-header"]
                ], null, null, null, null, null)), (l()(), t.Db(159, 0, null, null, 4, "div", [
                    ["class", "card-title collapsed"],
                    ["data-toggle", "collapse"]
                ], [
                    [1, "aria-expanded", 0]
                ], [
                    [null, "click"]
                ], (function(l, n, u) {
                    var t = !0,
                        a = l.component;
                    return "click" === n && (t = 0 != (a.notCollapsedIn = !a.notCollapsedIn) && t), t
                }), null, null)), t.Ub(512, null, y.D, y.E, [t.y, t.z, t.n, t.M]), t.Cb(161, 278528, null, 0, y.k, [y.D], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), t.Sb(162, {
                    collapsed: 0
                }), (l()(), t.Xb(-1, null, ["Info"])), (l()(), t.Db(164, 0, null, null, 51, "div", [], [
                    [2, "collapse", null],
                    [2, "show", null]
                ], null, null, null, null)), t.Cb(165, 16384, null, 0, U.m, [], {
                    collapsed: [0, "collapsed"]
                }, null), (l()(), t.Db(166, 0, null, null, 24, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t.Db(167, 0, null, null, 11, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(168, 0, null, null, 10, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(169, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Vendor"])), (l()(), t.Db(171, 0, null, null, 5, "input", [
                    ["class", "form-control form-control-sm"],
                    ["placeholder", "Vendor"],
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
                        o = l.component;
                    return "input" === n && (a = !1 !== t.Pb(l, 172)._handleInput(u.target.value) && a), "blur" === n && (a = !1 !== t.Pb(l, 172).onTouched() && a), "compositionstart" === n && (a = !1 !== t.Pb(l, 172)._compositionStart() && a), "compositionend" === n && (a = !1 !== t.Pb(l, 172)._compositionEnd(u.target.value) && a), "ngModelChange" === n && (a = !1 !== (o.options.data.vendor = u) && a), a
                }), null, null)), t.Cb(172, 16384, null, 0, D.e, [t.M, t.n, [2, D.a]], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.e]), t.Cb(174, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(176, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null), (l()(), t.Db(177, 0, null, null, 0, "div", [
                    ["class", "invalid-feedback"]
                ], null, null, null, null, null)), (l()(), t.Db(178, 0, null, null, 0, "span", [
                    ["class", "form-text text-muted"]
                ], null, null, null, null, null)), (l()(), t.Db(179, 0, null, null, 11, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(180, 0, null, null, 10, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(181, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Model"])), (l()(), t.Db(183, 0, null, null, 5, "input", [
                    ["class", "form-control form-control-sm"],
                    ["placeholder", "Model"],
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
                        o = l.component;
                    return "input" === n && (a = !1 !== t.Pb(l, 184)._handleInput(u.target.value) && a), "blur" === n && (a = !1 !== t.Pb(l, 184).onTouched() && a), "compositionstart" === n && (a = !1 !== t.Pb(l, 184)._compositionStart() && a), "compositionend" === n && (a = !1 !== t.Pb(l, 184)._compositionEnd(u.target.value) && a), "ngModelChange" === n && (a = !1 !== (o.options.data.model = u) && a), a
                }), null, null)), t.Cb(184, 16384, null, 0, D.e, [t.M, t.n, [2, D.a]], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.e]), t.Cb(186, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(188, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null), (l()(), t.Db(189, 0, null, null, 0, "div", [
                    ["class", "invalid-feedback"]
                ], null, null, null, null, null)), (l()(), t.Db(190, 0, null, null, 0, "span", [
                    ["class", "form-text text-muted"]
                ], null, null, null, null, null)), (l()(), t.Db(191, 0, null, null, 24, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t.Db(192, 0, null, null, 11, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(193, 0, null, null, 10, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(194, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Type"])), (l()(), t.Db(196, 0, null, null, 5, "input", [
                    ["class", "form-control form-control-sm"],
                    ["placeholder", "Type"],
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
                        o = l.component;
                    return "input" === n && (a = !1 !== t.Pb(l, 197)._handleInput(u.target.value) && a), "blur" === n && (a = !1 !== t.Pb(l, 197).onTouched() && a), "compositionstart" === n && (a = !1 !== t.Pb(l, 197)._compositionStart() && a), "compositionend" === n && (a = !1 !== t.Pb(l, 197)._compositionEnd(u.target.value) && a), "ngModelChange" === n && (a = !1 !== (o.options.data.type = u) && a), a
                }), null, null)), t.Cb(197, 16384, null, 0, D.e, [t.M, t.n, [2, D.a]], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.e]), t.Cb(199, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(201, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null), (l()(), t.Db(202, 0, null, null, 0, "div", [
                    ["class", "invalid-feedback"]
                ], null, null, null, null, null)), (l()(), t.Db(203, 0, null, null, 0, "span", [
                    ["class", "form-text text-muted"]
                ], null, null, null, null, null)), (l()(), t.Db(204, 0, null, null, 11, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(205, 0, null, null, 10, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(206, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Serial Number"])), (l()(), t.Db(208, 0, null, null, 5, "input", [
                    ["class", "form-control form-control-sm"],
                    ["placeholder", "Serial Number"],
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
                        o = l.component;
                    return "input" === n && (a = !1 !== t.Pb(l, 209)._handleInput(u.target.value) && a), "blur" === n && (a = !1 !== t.Pb(l, 209).onTouched() && a), "compositionstart" === n && (a = !1 !== t.Pb(l, 209)._compositionStart() && a), "compositionend" === n && (a = !1 !== t.Pb(l, 209)._compositionEnd(u.target.value) && a), "ngModelChange" === n && (a = !1 !== (o.options.data.sn = u) && a), a
                }), null, null)), t.Cb(209, 16384, null, 0, D.e, [t.M, t.n, [2, D.a]], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.e]), t.Cb(211, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(213, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null), (l()(), t.Db(214, 0, null, null, 0, "div", [
                    ["class", "invalid-feedback"]
                ], null, null, null, null, null)), (l()(), t.Db(215, 0, null, null, 0, "span", [
                    ["class", "form-text text-muted"]
                ], null, null, null, null, null)), (l()(), t.Db(216, 0, null, null, 18, "div", [
                    ["class", "card"]
                ], null, null, null, null, null)), (l()(), t.Db(217, 0, null, null, 5, "div", [
                    ["class", "card-header"]
                ], null, null, null, null, null)), (l()(), t.Db(218, 0, null, null, 4, "div", [
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
                }), null, null)), t.Ub(512, null, y.D, y.E, [t.y, t.z, t.n, t.M]), t.Cb(220, 278528, null, 0, y.k, [y.D], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), t.Sb(221, {
                    collapsed: 0
                }), (l()(), t.Xb(-1, null, ["Manual Configuration"])), (l()(), t.Db(223, 0, null, null, 11, "div", [], [
                    [2, "collapse", null],
                    [2, "show", null]
                ], null, null, null, null)), t.Cb(224, 16384, null, 0, U.m, [], {
                    collapsed: [0, "collapsed"]
                }, null), (l()(), t.Db(225, 0, null, null, 9, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (l()(), t.Db(226, 0, null, null, 8, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(227, 0, null, null, 1, "label", [
                    ["class", "pull-right"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Manual Configuration"])), (l()(), t.Db(229, 0, null, null, 5, "textarea", [
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
                        o = l.component;
                    return "input" === n && (a = !1 !== t.Pb(l, 230)._handleInput(u.target.value) && a), "blur" === n && (a = !1 !== t.Pb(l, 230).onTouched() && a), "compositionstart" === n && (a = !1 !== t.Pb(l, 230)._compositionStart() && a), "compositionend" === n && (a = !1 !== t.Pb(l, 230)._compositionEnd(u.target.value) && a), "ngModelChange" === n && (a = !1 !== (o.options.data.manual = u) && a), a
                }), null, null)), t.Cb(230, 16384, null, 0, D.e, [t.M, t.n, [2, D.a]], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.e]), t.Cb(232, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(234, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null), (l()(), t.Db(235, 0, null, null, 13, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t.Db(236, 0, null, null, 12, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(237, 0, null, null, 11, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(238, 0, null, null, 1, "label", [
                    ["style", "width: 100%;"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Disabled"])), (l()(), t.Db(240, 0, null, null, 8, "span", [
                    ["class", "kt-switch kt-switch--outline kt-switch--danger"]
                ], null, null, null, null, null)), (l()(), t.Db(241, 0, null, null, 7, "label", [], null, null, null, null, null)), (l()(), t.Db(242, 0, null, null, 5, "input", [
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
                        o = l.component;
                    return "change" === n && (a = !1 !== t.Pb(l, 243).onChange(u.target.checked) && a), "blur" === n && (a = !1 !== t.Pb(l, 243).onTouched() && a), "ngModelChange" === n && (a = !1 !== (o.options.data.disabled = u) && a), a
                }), null, null)), t.Cb(243, 16384, null, 0, D.b, [t.M, t.n], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.b]), t.Cb(245, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(247, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null), (l()(), t.Db(248, 0, null, null, 0, "span", [], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 2, null, X)), t.Cb(250, 16384, null, 0, y.m, [t.Y, t.U], {
                    ngIf: [0, "ngIf"]
                }, null), t.Rb(131072, y.b, [t.h]), (l()(), t.sb(16777216, null, null, 2, null, O)), t.Cb(253, 16384, null, 0, y.m, [t.Y, t.U], {
                    ngIf: [0, "ngIf"]
                }, null), t.Rb(131072, y.b, [t.h])], (function(l, n) {
                    var u, a, o = n.component,
                        e = l(n, 12, 0, null == (u = t.Yb(n, 10, 1, t.Pb(n, 11).transform(o.validation))) ? null : u.name);
                    l(n, 10, 0, "form-control form-control-sm", e), l(n, 15, 0, o.options.data.name), l(n, 20, 0, null == (a = t.Yb(n, 20, 0, t.Pb(n, 21).transform(o.validation))) ? null : a.name);
                    var s, i, r = l(n, 29, 0, null == (s = t.Yb(n, 27, 0, t.Pb(n, 28).transform(o.validation))) ? null : s.group);
                    l(n, 27, 0, r), l(n, 30, 0, o.options.data.group, o.list.dev_group, null == (i = t.Yb(n, 30, 2, t.Pb(n, 31).transform(o.validation))) ? null : i.group);
                    var d, b, c = l(n, 38, 0, null == (d = t.Yb(n, 36, 0, t.Pb(n, 37).transform(o.validation))) ? null : d.address);
                    l(n, 36, 0, c), l(n, 39, 0, o.options.data.address, o.list.address, null == (b = t.Yb(n, 39, 2, t.Pb(n, 40).transform(o.validation))) ? null : b.address);
                    var g, p, m = l(n, 49, 0, null == (g = t.Yb(n, 47, 1, t.Pb(n, 48).transform(o.validation))) ? null : g.key);
                    l(n, 47, 0, "form-control form-control-sm", m), l(n, 52, 0, o.options.data.key), l(n, 57, 0, null == (p = t.Yb(n, 57, 0, t.Pb(n, 58).transform(o.validation))) ? null : p.key), l(n, 68, 0, o.options.data.enable), l(n, 79, 0, o.options.data.enable_flag), l(n, 83, 0, "0"), l(n, 84, 0, "0"), l(n, 87, 0, "1"), l(n, 88, 0, "1"), l(n, 91, 0, "2"), l(n, 92, 0, "2");
                    var C = l(n, 100, 0, !o.notCollapsedB);
                    l(n, 99, 0, "card-title collapsed", C), l(n, 103, 0, !o.notCollapsedB), l(n, 108, 0, "Welcome"), l(n, 114, 0, "MOTD"), l(n, 120, 0, "Failed Auth");
                    var h = l(n, 130, 0, !o.notCollapsedACC);
                    l(n, 129, 0, "card-title collapsed", h), l(n, 133, 0, !o.notCollapsedACC), l(n, 138, 0, o.options.data.acl, o.list.acl), l(n, 142, 0, o.options.data.user_group, o.list.user_group), l(n, 152, 0, o.options.data.connection_timeout);
                    var v = l(n, 162, 0, !o.notCollapsedIn);
                    l(n, 161, 0, "card-title collapsed", v), l(n, 165, 0, !o.notCollapsedIn), l(n, 174, 0, o.options.data.vendor), l(n, 186, 0, o.options.data.model), l(n, 199, 0, o.options.data.type), l(n, 211, 0, o.options.data.sn);
                    var f = l(n, 221, 0, !o.notCollapsedMS);
                    l(n, 220, 0, "card-title collapsed", f), l(n, 224, 0, !o.notCollapsedMS), l(n, 232, 0, o.options.data.manual), l(n, 245, 0, o.options.data.disabled), l(n, 250, 0, t.Yb(n, 250, 0, t.Pb(n, 251).transform(o.loading))), l(n, 253, 0, t.Yb(n, 253, 0, t.Pb(n, 254).transform(o.loading)))
                }), (function(l, n) {
                    var u = n.component;
                    l(n, 8, 0, t.Pb(n, 17).ngClassUntouched, t.Pb(n, 17).ngClassTouched, t.Pb(n, 17).ngClassPristine, t.Pb(n, 17).ngClassDirty, t.Pb(n, 17).ngClassValid, t.Pb(n, 17).ngClassInvalid, t.Pb(n, 17).ngClassPending), l(n, 45, 0, t.Pb(n, 54).ngClassUntouched, t.Pb(n, 54).ngClassTouched, t.Pb(n, 54).ngClassPristine, t.Pb(n, 54).ngClassDirty, t.Pb(n, 54).ngClassValid, t.Pb(n, 54).ngClassInvalid, t.Pb(n, 54).ngClassPending), l(n, 65, 0, t.Pb(n, 70).ngClassUntouched, t.Pb(n, 70).ngClassTouched, t.Pb(n, 70).ngClassPristine, t.Pb(n, 70).ngClassDirty, t.Pb(n, 70).ngClassValid, t.Pb(n, 70).ngClassInvalid, t.Pb(n, 70).ngClassPending), l(n, 76, 0, t.Pb(n, 81).ngClassUntouched, t.Pb(n, 81).ngClassTouched, t.Pb(n, 81).ngClassPristine, t.Pb(n, 81).ngClassDirty, t.Pb(n, 81).ngClassValid, t.Pb(n, 81).ngClassInvalid, t.Pb(n, 81).ngClassPending), l(n, 97, 0, !u.notCollapsedB), l(n, 102, 0, !0, !t.Pb(n, 103).collapsed), l(n, 127, 0, !u.notCollapsedACC), l(n, 132, 0, !0, !t.Pb(n, 133).collapsed), l(n, 148, 0, t.Pb(n, 154).ngClassUntouched, t.Pb(n, 154).ngClassTouched, t.Pb(n, 154).ngClassPristine, t.Pb(n, 154).ngClassDirty, t.Pb(n, 154).ngClassValid, t.Pb(n, 154).ngClassInvalid, t.Pb(n, 154).ngClassPending), l(n, 159, 0, !u.notCollapsedIn), l(n, 164, 0, !0, !t.Pb(n, 165).collapsed), l(n, 171, 0, t.Pb(n, 176).ngClassUntouched, t.Pb(n, 176).ngClassTouched, t.Pb(n, 176).ngClassPristine, t.Pb(n, 176).ngClassDirty, t.Pb(n, 176).ngClassValid, t.Pb(n, 176).ngClassInvalid, t.Pb(n, 176).ngClassPending), l(n, 183, 0, t.Pb(n, 188).ngClassUntouched, t.Pb(n, 188).ngClassTouched, t.Pb(n, 188).ngClassPristine, t.Pb(n, 188).ngClassDirty, t.Pb(n, 188).ngClassValid, t.Pb(n, 188).ngClassInvalid, t.Pb(n, 188).ngClassPending), l(n, 196, 0, t.Pb(n, 201).ngClassUntouched, t.Pb(n, 201).ngClassTouched, t.Pb(n, 201).ngClassPristine, t.Pb(n, 201).ngClassDirty, t.Pb(n, 201).ngClassValid, t.Pb(n, 201).ngClassInvalid, t.Pb(n, 201).ngClassPending), l(n, 208, 0, t.Pb(n, 213).ngClassUntouched, t.Pb(n, 213).ngClassTouched, t.Pb(n, 213).ngClassPristine, t.Pb(n, 213).ngClassDirty, t.Pb(n, 213).ngClassValid, t.Pb(n, 213).ngClassInvalid, t.Pb(n, 213).ngClassPending), l(n, 218, 0, !u.notCollapsedMS), l(n, 223, 0, !0, !t.Pb(n, 224).collapsed), l(n, 229, 0, t.Pb(n, 234).ngClassUntouched, t.Pb(n, 234).ngClassTouched, t.Pb(n, 234).ngClassPristine, t.Pb(n, 234).ngClassDirty, t.Pb(n, 234).ngClassValid, t.Pb(n, 234).ngClassInvalid, t.Pb(n, 234).ngClassPending), l(n, 242, 0, t.Pb(n, 247).ngClassUntouched, t.Pb(n, 247).ngClassTouched, t.Pb(n, 247).ngClassPristine, t.Pb(n, 247).ngClassDirty, t.Pb(n, 247).ngClassValid, t.Pb(n, 247).ngClassInvalid, t.Pb(n, 247).ngClassPending)
                }))
            }
            var V = u("NqMs"),
                j = u("lkAW"),
                Y = u("26FU"),
                Z = u("ruxR"),
                B = u("mrSG"),
                z = function(l) {
                    function n(n) {
                        void 0 === n && (n = {});
                        var u = l.call(this) || this;
                        return u.data = {}, n = n || !1, u.init(), n && Object.assign(u.data, n), u
                    }
                    return B.__extends(n, l), n.prototype.init = function() {
                        this.data.acl = [], this.data.banner_failed = "", this.data.banner_motd = "", this.data.banner_welcome = "", this.data.comment = "", this.data.connection_timeout = void 0, this.data.created_at = "", this.data.disabled = 0, this.data.enable = "", this.data.enable_flag = 1, this.data.group = [], this.data.id = void 0, this.data.address = [], this.data.key = "", this.data.manual = "", this.data.model = "", this.data.name = "", this.data.sn = "", this.data.type = "", this.data.updated_at = "", this.data.user_group = [], this.data.vendor = ""
                    }, n.prototype.makeClone = function() {
                        return this.clone(this.data)
                    }, n.prototype.get = function() {
                        var l = this.makeClone();
                        return l.address = l.address[0] && l.address[0].id ? l.address[0].id : null, l.group = l.group[0] && l.group[0].id ? l.group[0].id : null, l.acl = l.acl[0] && l.acl[0].id ? l.acl[0].id : null, l.user_group = l.user_group[0] && l.user_group[0].id ? l.user_group[0].id : null, l.enable == l.enable_old && delete l.enable, delete l.enable_old, l
                    }, n
                }(u("0smX").a),
                R = u("t/Na"),
                G = u("67Y/"),
                q = "api/tacacs/device",
                W = function() {
                    function l(l) {
                        this.http = l, this.objectKeys = Object.keys
                    }
                    return l.prototype.add = function(l) {
                        return this.http.post(q + "/add/", l).pipe(Object(m.a)(), Object(G.a)((function(l) {
                            return l
                        })))
                    }, l.prototype.get = function(l) {
                        var n = (new R.j).set("id", l.toString());
                        return this.http.get(q + "/edit/", {
                            params: n
                        }).pipe(Object(m.a)(), Object(G.a)((function(l) {
                            return l.device
                        })))
                    }, l.prototype.save = function(l) {
                        return this.http.post(q + "/edit/", l).pipe(Object(m.a)(), Object(G.a)((function(l) {
                            return l
                        })))
                    }, l.ngInjectableDef = t.dc({
                        factory: function() {
                            return new l(t.ec(R.c))
                        },
                        token: l,
                        providedIn: "root"
                    }), l
                }(),
                J = function() {
                    function l(l, n, u, t) {
                        this.toastr = l, this.router = n, this.route = u, this.service = t, this.validation = new Y.a({}), this.loadingForm = new Y.a(!0), this.path = this.router.url.split("/")[3], this.formFooter = new Z.a(this.path, "edit" == this.path), this.device = new z
                    }
                    return l.prototype.ngOnInit = function() {
                        var l = this;
                        "add" == this.path ? this.loadingForm.next(!1) : this.route.paramMap.pipe(Object(m.a)()).subscribe((function(n) {
                            l.fillForm(+n.get("id"))
                        }))
                    }, l.prototype.fillForm = function(l) {
                        var n = this;
                        this.service.get(l).subscribe((function(l) {
                            Object.assign(n.device.data, l), n.device.data.enable_old = n.device.data.enable, n.oldItem = n.device.makeClone(), n.loadingForm.next(!1)
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
                K = t.Bb({
                    encapsulation: 0,
                    styles: [
                        [""]
                    ],
                    data: {}
                });

            function H(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "kt-tac-dev-form", [], null, null, null, E, I)), t.Cb(1, 114688, null, 0, x, [b.j], {
                    options: [0, "options"],
                    validation: [1, "validation"],
                    loading: [2, "loading"]
                }, null), (l()(), t.Db(2, 0, null, null, 1, "kt-main-form-footer", [], null, [
                    [null, "trigger"]
                ], (function(l, n, u) {
                    var t = !0;
                    return "trigger" === n && (t = !1 !== l.component.formAction(u) && t), t
                }), V.b, V.a)), t.Cb(3, 114688, null, 0, j.a, [], {
                    options: [0, "options"],
                    loading: [1, "loading"]
                }, {
                    trigger: "trigger"
                })], (function(l, n) {
                    var u = n.component;
                    l(n, 1, 0, u.device, u.validation, u.loadingForm), l(n, 3, 0, u.formFooter, u.loadingForm)
                }), null)
            }

            function $(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "kt-edit", [], null, null, null, H, K)), t.Cb(1, 114688, null, 0, J, [b.j, c.q, c.a, W], null, null)], (function(l, n) {
                    l(n, 1, 0)
                }), null)
            }
            var L = t.zb("kt-edit", J, $, {}, {}, []),
                Q = u("9Bt9"),
                ll = u("qAlS"),
                nl = u("18CH"),
                ul = u("Fzqc"),
                tl = u("dWZg"),
                al = u("wOIO"),
                ol = u("EFBj"),
                el = u("ZWfn");
            u.d(n, "DevicesModuleNgFactory", (function() {
                return sl
            }));
            var sl = t.Ab(a, [], (function(l) {
                return t.Mb([t.Nb(512, t.k, t.lb, [
                    [8, [o.a, e.a, e.b, e.p, e.q, e.m, e.n, e.o, P, L]],
                    [3, t.k], t.E
                ]), t.Nb(4608, y.o, y.n, [t.A, [2, y.I]]), t.Nb(4608, D.A, D.A, []), t.Nb(4608, U.E, U.E, [t.k, t.w, U.yb, U.F]), t.Nb(4608, Q.g, Q.g, [y.d, t.G, ll.j, Q.i]), t.Nb(1073742336, y.c, y.c, []), t.Nb(1073742336, c.t, c.t, [
                    [2, c.z],
                    [2, c.q]
                ]), t.Nb(1073742336, D.z, D.z, []), t.Nb(1073742336, D.k, D.k, []), t.Nb(1073742336, U.c, U.c, []), t.Nb(1073742336, U.g, U.g, []), t.Nb(1073742336, U.h, U.h, []), t.Nb(1073742336, U.l, U.l, []), t.Nb(1073742336, U.n, U.n, []), t.Nb(1073742336, U.u, U.u, []), t.Nb(1073742336, U.A, U.A, []), t.Nb(1073742336, U.G, U.G, []), t.Nb(1073742336, U.K, U.K, []), t.Nb(1073742336, U.P, U.P, []), t.Nb(1073742336, U.S, U.S, []), t.Nb(1073742336, U.V, U.V, []), t.Nb(1073742336, U.ab, U.ab, []), t.Nb(1073742336, U.eb, U.eb, []), t.Nb(1073742336, U.hb, U.hb, []), t.Nb(1073742336, U.kb, U.kb, []), t.Nb(1073742336, U.H, U.H, []), t.Nb(1073742336, nl.a, nl.a, []), t.Nb(1073742336, ul.a, ul.a, []), t.Nb(1073742336, tl.b, tl.b, []), t.Nb(1073742336, ll.g, ll.g, []), t.Nb(1073742336, ll.e, ll.e, []), t.Nb(1073742336, al.a, al.a, []), t.Nb(1073742336, Q.h, Q.h, []), t.Nb(1073742336, ol.a, ol.a, []), t.Nb(1073742336, el.a, el.a, []), t.Nb(1073742336, a, a, []), t.Nb(1024, c.m, (function() {
                    return [
                        [{
                            path: "",
                            component: C
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