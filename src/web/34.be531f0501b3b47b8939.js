(window.webpackJsonp = window.webpackJsonp || []).push([
    [34], {
        "3ea4": function(l, n, u) {
            "use strict";
            u.r(n);
            var t = u("CcnG"),
                e = function() {
                    return Promise.all([u.e(0), u.e(29)]).then(u.bind(null, "8MCm")).then((function(l) {
                        return l.DevicesModuleNgFactory
                    }))
                },
                c = function() {
                    return u.e(28).then(u.bind(null, "SveV")).then((function(l) {
                        return l.DevGroupsModuleNgFactory
                    }))
                },
                r = function() {
                    return Promise.all([u.e(0), u.e(10)]).then(u.bind(null, "lRjo")).then((function(l) {
                        return l.TacUsersModuleNgFactory
                    }))
                },
                i = function() {
                    return Promise.all([u.e(0), u.e(33)]).then(u.bind(null, "CXwc")).then((function(l) {
                        return l.TacUserGrpsModuleNgFactory
                    }))
                },
                a = function() {
                    return u.e(24).then(u.bind(null, "6i8Q")).then((function(l) {
                        return l.AccessControlModuleNgFactory
                    }))
                },
                o = function() {
                    return u.e(27).then(u.bind(null, "Ww6J")).then((function(l) {
                        return l.ConfigModuleNgFactory
                    }))
                },
                s = function() {
                    return u.e(32).then(u.bind(null, "wzNt")).then((function(l) {
                        return l.ObjectsModuleNgFactory
                    }))
                },
                d = function() {
                    return function() {}
                }(),
                b = u("pMnS"),
                f = u("ZYCi"),
                h = u("Ip0R"),
                p = function() {
                    function l() {
                        this.cards = [{
                            title: "Tacacs Users",
                            icon: "fa fa-user",
                            list: "users",
                            add: "users/add"
                        }, {
                            title: "Tacacs User Groups",
                            icon: "fa fa-users",
                            list: "user-groups",
                            add: "user-groups/add"
                        }, {
                            title: "Tacacs Devices",
                            icon: "fa fa-hdd",
                            list: "devices",
                            add: "devices/add"
                        }, {
                            title: "Tacacs Device Groups",
                            icon: "fa fa-server",
                            list: "dev-groups",
                            add: "dev-groups/add"
                        }, {
                            title: "Services",
                            icon: "fa fa-user-shield",
                            list: "access-control/services",
                            add: "access-control/services/add"
                        }, {
                            title: "ACL",
                            icon: "fa fa fa-user-times",
                            list: "access-control/acl",
                            add: "access-control/acl/add"
                        }]
                    }
                    return l.prototype.ngOnInit = function() {}, l
                }(),
                v = t.Bb({
                    encapsulation: 0,
                    styles: [
                        [""]
                    ],
                    data: {}
                });

            function g(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 2, "a", [
                    ["class", "btn btn-warning btn-elevate btn-elevate-air"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], (function(l, n, u) {
                    var e = !0;
                    return "click" === n && (e = !1 !== t.Pb(l, 1).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && e), e
                }), null, null)), t.Cb(1, 671744, null, 0, f.s, [f.q, f.a, h.j], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), t.Xb(-1, null, ["View"]))], (function(l, n) {
                    l(n, 1, 0, n.parent.context.$implicit.list)
                }), (function(l, n) {
                    l(n, 0, 0, t.Pb(n, 1).target, t.Pb(n, 1).href)
                }))
            }

            function m(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 2, "a", [
                    ["class", "btn btn-success btn-elevate btn-elevate-air"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], (function(l, n, u) {
                    var e = !0;
                    return "click" === n && (e = !1 !== t.Pb(l, 1).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && e), e
                }), null, null)), t.Cb(1, 671744, null, 0, f.s, [f.q, f.a, h.j], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), t.Xb(-1, null, ["Add New"]))], (function(l, n) {
                    l(n, 1, 0, n.parent.context.$implicit.add)
                }), (function(l, n) {
                    l(n, 0, 0, t.Pb(n, 1).target, t.Pb(n, 1).href)
                }))
            }

            function C(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 22, "div", [
                    ["class", "col-md-3 col-sm-6"]
                ], null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 20, "div", [
                    ["class", "card"]
                ], null, null, null, null, null)), (l()(), t.Db(2, 0, null, null, 19, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (l()(), t.Db(3, 0, null, null, 1, "h5", [
                    ["class", "card-title"]
                ], null, null, null, null, null)), (l()(), t.Xb(4, null, ["", ""])), (l()(), t.Db(5, 0, null, null, 8, "div", [
                    ["class", "text-center"]
                ], null, null, null, null, null)), (l()(), t.Db(6, 0, null, null, 7, "p", [
                    ["class", "card-text"]
                ], null, null, null, null, null)), (l()(), t.Db(7, 0, null, null, 6, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], (function(l, n, u) {
                    var e = !0;
                    return "click" === n && (e = !1 !== t.Pb(l, 8).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && e), e
                }), null, null)), t.Cb(8, 671744, null, 0, f.s, [f.q, f.a, h.j], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), t.Db(9, 0, null, null, 4, "span", [
                    ["style", "font-size: 5em;"]
                ], null, null, null, null, null)), t.Ub(512, null, h.F, h.G, [t.n, t.z, t.M]), t.Cb(11, 278528, null, 0, h.p, [h.F], {
                    ngStyle: [0, "ngStyle"]
                }, null), t.Sb(12, {
                    color: 0
                }), (l()(), t.Db(13, 0, null, null, 0, "i", [], [
                    [8, "className", 0]
                ], null, null, null, null)), (l()(), t.Db(14, 0, null, null, 0, "hr", [], null, null, null, null, null)), (l()(), t.Db(15, 0, null, null, 6, "div", [
                    ["class", "text-center"]
                ], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 1, null, g)), t.Cb(17, 16384, null, 0, h.m, [t.Y, t.U], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t.Xb(-1, null, ["  "])), (l()(), t.sb(16777216, null, null, 1, null, m)), t.Cb(20, 16384, null, 0, h.m, [t.Y, t.U], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t.Xb(-1, null, ["  "])), (l()(), t.Db(22, 0, null, null, 0, "br", [], null, null, null, null, null))], (function(l, n) {
                    l(n, 8, 0, n.context.$implicit.list);
                    var u = l(n, 12, 0, n.context.$implicit.icon_color);
                    l(n, 11, 0, u), l(n, 17, 0, n.context.$implicit.list), l(n, 20, 0, n.context.$implicit.add)
                }), (function(l, n) {
                    l(n, 4, 0, n.context.$implicit.title), l(n, 7, 0, t.Pb(n, 8).target, t.Pb(n, 8).href), l(n, 13, 0, t.Hb(1, "", n.context.$implicit.icon, ""))
                }))
            }

            function y(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 3, "div", [
                    ["class", "container mt-3"]
                ], null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 2, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 1, null, C)), t.Cb(3, 278528, null, 0, h.l, [t.Y, t.U, t.y], {
                    ngForOf: [0, "ngForOf"]
                }, null)], (function(l, n) {
                    l(n, 3, 0, n.component.cards)
                }), null)
            }

            function k(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "kt-tacacs", [], null, null, null, y, v)), t.Cb(1, 114688, null, 0, p, [], null, null)], (function(l, n) {
                    l(n, 1, 0)
                }), null)
            }
            var D = t.zb("kt-tacacs", p, k, {}, {}, []);
            u.d(n, "TacacsModuleNgFactory", (function() {
                return N
            }));
            var N = t.Ab(d, [], (function(l) {
                return t.Mb([t.Nb(512, t.k, t.lb, [
                    [8, [b.a, D]],
                    [3, t.k], t.E
                ]), t.Nb(4608, h.o, h.n, [t.A, [2, h.I]]), t.Nb(1073742336, h.c, h.c, []), t.Nb(1073742336, f.t, f.t, [
                    [2, f.z],
                    [2, f.q]
                ]), t.Nb(1073742336, d, d, []), t.Nb(1024, f.m, (function() {
                    return [
                        [{
                            path: "",
                            component: p
                        }, {
                            path: "devices",
                            loadChildren: e
                        }, {
                            path: "dev-groups",
                            loadChildren: c
                        }, {
                            path: "users",
                            loadChildren: r
                        }, {
                            path: "user-groups",
                            loadChildren: i
                        }, {
                            path: "access-control",
                            loadChildren: a
                        }, {
                            path: "config",
                            loadChildren: o
                        }, {
                            path: "objects",
                            loadChildren: s
                        }, {
                            path: "",
                            redirectTo: "/dashboard",
                            pathMatch: "full"
                        }, {
                            path: "**",
                            redirectTo: "/dashboard",
                            pathMatch: "full"
                        }]
                    ]
                }), [])])
            }))
        }
    }
]);