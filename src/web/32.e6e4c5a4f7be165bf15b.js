(window.webpackJsonp = window.webpackJsonp || []).push([
    [32], {
        wzNt: function(n, t, r) {
            "use strict";
            r.r(t);
            var e = r("CcnG"),
                o = function() {
                    return r.e(30).then(r.bind(null, "/kbu")).then((function(n) {
                        return n.AddressesModuleNgFactory
                    }))
                },
                u = function() {
                    return r.e(31).then(r.bind(null, "4i6S")).then((function(n) {
                        return n.CommandSetsModuleNgFactory
                    }))
                },
                a = function() {
                    return function() {}
                }(),
                c = r("pMnS"),
                d = r("Ip0R"),
                i = r("ZYCi");
            r.d(t, "ObjectsModuleNgFactory", (function() {
                return b
            }));
            var b = e.Ab(a, [], (function(n) {
                return e.Mb([e.Nb(512, e.k, e.lb, [
                    [8, [c.a]],
                    [3, e.k], e.E
                ]), e.Nb(4608, d.o, d.n, [e.A, [2, d.I]]), e.Nb(1073742336, d.c, d.c, []), e.Nb(1073742336, i.t, i.t, [
                    [2, i.z],
                    [2, i.q]
                ]), e.Nb(1073742336, a, a, []), e.Nb(1024, i.m, (function() {
                    return [
                        [{
                            path: "addresses",
                            loadChildren: o
                        }, {
                            path: "commands",
                            loadChildren: u
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