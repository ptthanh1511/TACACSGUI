(window.webpackJsonp = window.webpackJsonp || []).push([
    [35], {
        a0kq: function(n, t, l) {
            "use strict";
            l.r(t);
            var e = l("CcnG"),
                r = l("K9Ia"),
                o = l("26FU"),
                u = l("gI3B"),
                i = l("ny24"),
                c = l("mOTJ"),
                a = function() {
                    function n(n, t) {
                        var l = this;
                        this.router = n, this.us = t, this.destroy$ = new r.a, this.complete_start = new o.a(!1), this.timer = new o.a(7), this.desc = "Looks like we have to upgrade something...", this.ticks = 7, t.check$ = 1, t.currentStatus.subscribe((function(n) {
                            console.log(n), n && l.complete()
                        }))
                    }
                    return n.prototype.ngOnInit = function() {}, n.prototype.complete = function() {
                        var n = this;
                        this.complete_start.next(!0), Object(u.a)(1e3, 1e3).pipe(Object(i.a)(this.destroy$)).subscribe((function(t) {
                            console.log(t), 0 === n.timer.getValue() ? n.router.navigateByUrl("/") : n.timer.next(n.timer.getValue() - 1)
                        }))
                    }, n.prototype.ngOnDestroy = function() {
                        this.destroy$.next(), this.destroy$.complete()
                    }, n
                }(),
                s = function() {
                    return function() {}
                }(),
                g = l("pMnS"),
                b = l("Ip0R"),
                p = l("ZYCi"),
                d = e.Bb({
                    encapsulation: 0,
                    styles: [
                        [".kt-error-v6[_ngcontent-%COMP%]{background-position:center;background-repeat:no-repeat;background-attachment:fixed;background-size:cover}.kt-error-v6[_ngcontent-%COMP%]   .kt-error_container[_ngcontent-%COMP%]{text-align:center}.kt-error-v6[_ngcontent-%COMP%]   .kt-error_container[_ngcontent-%COMP%]   .kt-error_subtitle[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{font-size:10rem;margin-top:12rem;font-weight:700}.kt-error-v6[_ngcontent-%COMP%]   .kt-error_container[_ngcontent-%COMP%]   .kt-error_description[_ngcontent-%COMP%]{margin-top:3rem;font-size:2.3rem;font-weight:500;line-height:3rem}@media (max-width:768px){.kt-error-v6[_ngcontent-%COMP%]   .kt-error_container[_ngcontent-%COMP%]   .kt-error_subtitle[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{font-size:5rem}.kt-error-v6[_ngcontent-%COMP%]   .kt-error_container[_ngcontent-%COMP%]   .kt-error_description[_ngcontent-%COMP%]{font-size:1.7rem;padding-left:1.5rem;padding-right:1.5rem}}.kt-update[_ngcontent-%COMP%]{height:100%;background-image:url(bg6.68b1cecde01f64d56b7f.jpg);background-position:center;background-repeat:no-repeat;background-attachment:fixed;background-size:cover;position:absolute;width:100%}.kt-font-light[_ngcontent-%COMP%]{color:#fff}.text-center[_ngcontent-%COMP%]{text-align:center}.kt-_description[_ngcontent-%COMP%]{margin-top:3rem;font-size:2.3rem;font-weight:500;line-height:3rem}.kt-update[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:7rem;margin-top:7rem;font-weight:700}.progress-upgrade[_ngcontent-%COMP%]{width:60%;margin:auto;overflow-wrap:break-word;line-height:26pt}.progress-upgrade[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{padding:5px 15px;margin:3px;background-color:#444}"]
                    ],
                    data: {}
                });

            function f(n) {
                return e.Zb(0, [(n()(), e.Db(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(), e.Xb(1, null, ["", ""]))], null, (function(n, t) {
                    n(t, 1, 0, t.context.$implicit)
                }))
            }

            function m(n) {
                return e.Zb(0, [(n()(), e.Db(0, 0, null, null, 2, "p", [], null, null, null, null, null)), (n()(), e.Xb(1, null, ["You will redirect to dashboard in: ", ""])), e.Rb(131072, b.b, [e.h])], null, (function(n, t) {
                    var l = t.component;
                    n(t, 1, 0, e.Yb(t, 1, 0, e.Pb(t, 2).transform(l.timer)))
                }))
            }

            function h(n) {
                return e.Zb(0, [(n()(), e.Db(0, 0, null, null, 16, "div", [
                    ["class", "kt-update"]
                ], null, null, null, null, null)), (n()(), e.Db(1, 0, null, null, 15, null, null, null, null, null, null, null)), (n()(), e.Db(2, 0, null, null, 14, "div", [
                    ["class", "text-center kt-font-light"]
                ], null, null, null, null, null)), (n()(), e.Db(3, 0, null, null, 1, "h1", [], null, null, null, null, null)), (n()(), e.Xb(-1, null, ["Hmm..."])), (n()(), e.Db(5, 0, null, null, 0, "p", [
                    ["class", "kt-_description kt-font-light"]
                ], [
                    [8, "innerHTML", 1]
                ], null, null, null, null)), (n()(), e.Db(6, 0, null, null, 10, "div", [
                    ["class", "loading-bar"]
                ], null, null, null, null, null)), (n()(), e.Db(7, 0, null, null, 2, "h3", [], null, null, null, null, null)), (n()(), e.Xb(8, null, ["", ""])), e.Rb(131072, b.b, [e.h]), (n()(), e.Db(10, 0, null, null, 3, "div", [
                    ["class", "progress-upgrade"]
                ], null, null, null, null, null)), (n()(), e.sb(16777216, null, null, 2, null, f)), e.Cb(12, 278528, null, 0, b.l, [e.Y, e.U, e.y], {
                    ngForOf: [0, "ngForOf"]
                }, null), e.Rb(131072, b.b, [e.h]), (n()(), e.sb(16777216, null, null, 2, null, m)), e.Cb(15, 16384, null, 0, b.m, [e.Y, e.U], {
                    ngIf: [0, "ngIf"]
                }, null), e.Rb(131072, b.b, [e.h])], (function(n, t) {
                    var l = t.component;
                    n(t, 12, 0, e.Yb(t, 12, 0, e.Pb(t, 13).transform(l.us.progress$))), n(t, 15, 0, e.Yb(t, 15, 0, e.Pb(t, 16).transform(l.complete_start)))
                }), (function(n, t) {
                    var l = t.component;
                    n(t, 5, 0, l.desc), n(t, 8, 0, e.Yb(t, 8, 0, e.Pb(t, 9).transform(l.us.message$)))
                }))
            }

            function k(n) {
                return e.Zb(0, [(n()(), e.Db(0, 0, null, null, 1, "kt-upgrade", [], null, null, null, h, d)), e.Cb(1, 245760, null, 0, a, [p.q, c.a], null, null)], (function(n, t) {
                    n(t, 1, 0)
                }), null)
            }
            var _ = e.zb("kt-upgrade", a, k, {}, {}, []);
            l.d(t, "UpgradeModuleNgFactory", (function() {
                return O
            }));
            var O = e.Ab(s, [], (function(n) {
                return e.Mb([e.Nb(512, e.k, e.lb, [
                    [8, [g.a, _]],
                    [3, e.k], e.E
                ]), e.Nb(4608, b.o, b.n, [e.A, [2, b.I]]), e.Nb(1073742336, b.c, b.c, []), e.Nb(1073742336, p.t, p.t, [
                    [2, p.z],
                    [2, p.q]
                ]), e.Nb(1073742336, s, s, []), e.Nb(1024, p.m, (function() {
                    return [
                        [{
                            path: "",
                            component: a
                        }]
                    ]
                }), [])])
            }))
        }
    }
]);