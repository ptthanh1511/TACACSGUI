(window.webpackJsonp = window.webpackJsonp || []).push([
    [9], {
        Axip: function(l, n, u) {
            "use strict";
            var t = u("CcnG"),
                e = new t.v("WindowToken", "undefined" != typeof window && window.document ? {
                    providedIn: "root",
                    factory: function() {
                        return window
                    }
                } : void 0),
                a = u("K9Ia"),
                i = u("Ip0R");
            u.d(n, "c", (function() {
                return o
            })), u.d(n, "a", (function() {
                return s
            })), u.d(n, "b", (function() {
                return r
            }));
            var o = function() {
                    function l(l, n) {
                        this.document = l, this.window = n, this.copySubject = new a.a, this.copyResponse$ = this.copySubject.asObservable(), this.config = {}
                    }
                    return l.prototype.configure = function(l) {
                        this.config = l
                    }, l.prototype.copy = function(l) {
                        if (!this.isSupported || !l) return this.pushCopyResponse({
                            isSuccess: !1,
                            content: l
                        });
                        var n = this.copyFromContent(l);
                        return this.pushCopyResponse(n ? {
                            content: l,
                            isSuccess: n
                        } : {
                            isSuccess: !1,
                            content: l
                        })
                    }, Object.defineProperty(l.prototype, "isSupported", {
                        get: function() {
                            return !!this.document.queryCommandSupported && !!this.document.queryCommandSupported("copy") && !!this.window
                        },
                        enumerable: !0,
                        configurable: !0
                    }), l.prototype.isTargetValid = function(l) {
                        if (l instanceof HTMLInputElement || l instanceof HTMLTextAreaElement) {
                            if (l.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                            return !0
                        }
                        throw new Error("Target should be input or textarea")
                    }, l.prototype.copyFromInputElement = function(l, n) {
                        void 0 === n && (n = !0);
                        try {
                            this.selectTarget(l);
                            var u = this.copyText();
                            return this.clearSelection(n ? l : void 0, this.window), u && this.isCopySuccessInIE11()
                        } catch (t) {
                            return !1
                        }
                    }, l.prototype.isCopySuccessInIE11 = function() {
                        var l = this.window.clipboardData;
                        return !(l && l.getData && !l.getData("Text"))
                    }, l.prototype.copyFromContent = function(l, n) {
                        if (void 0 === n && (n = this.document.body), this.tempTextArea && !n.contains(this.tempTextArea) && this.destroy(this.tempTextArea.parentElement), !this.tempTextArea) {
                            this.tempTextArea = this.createTempTextArea(this.document, this.window);
                            try {
                                n.appendChild(this.tempTextArea)
                            } catch (t) {
                                throw new Error("Container should be a Dom element")
                            }
                        }
                        this.tempTextArea.value = l;
                        var u = this.copyFromInputElement(this.tempTextArea, !1);
                        return this.config.cleanUpAfterCopy && this.destroy(this.tempTextArea.parentElement), u
                    }, l.prototype.destroy = function(l) {
                        void 0 === l && (l = this.document.body), this.tempTextArea && (l.removeChild(this.tempTextArea), this.tempTextArea = void 0)
                    }, l.prototype.selectTarget = function(l) {
                        return l.select(), l.setSelectionRange(0, l.value.length), l.value.length
                    }, l.prototype.copyText = function() {
                        return this.document.execCommand("copy")
                    }, l.prototype.clearSelection = function(l, n) {
                        l && l.focus(), n.getSelection().removeAllRanges()
                    }, l.prototype.createTempTextArea = function(l, n) {
                        var u, t = "rtl" === l.documentElement.getAttribute("dir");
                        return (u = l.createElement("textarea")).style.fontSize = "12pt", u.style.border = "0", u.style.padding = "0", u.style.margin = "0", u.style.position = "absolute", u.style[t ? "right" : "left"] = "-9999px", u.style.top = (n.pageYOffset || l.documentElement.scrollTop) + "px", u.setAttribute("readonly", ""), u
                    }, l.prototype.pushCopyResponse = function(l) {
                        this.copySubject.next(l)
                    }, l.prototype.pushCopyReponse = function(l) {
                        this.pushCopyResponse(l)
                    }, l.ngInjectableDef = Object(t.cb)({
                        factory: function() {
                            return new l(Object(t.gb)(i.d), Object(t.gb)(e, 8))
                        },
                        token: l,
                        providedIn: "root"
                    }), l
                }(),
                s = function() {
                    function l(l) {
                        this.clipboardSrv = l, this.cbOnSuccess = new t.q, this.cbOnError = new t.q
                    }
                    return l.prototype.ngOnInit = function() {}, l.prototype.ngOnDestroy = function() {
                        this.clipboardSrv.destroy(this.container)
                    }, l.prototype.onClick = function(l) {
                        this.clipboardSrv.isSupported ? this.targetElm && this.clipboardSrv.isTargetValid(this.targetElm) ? this.handleResult(this.clipboardSrv.copyFromInputElement(this.targetElm), this.targetElm.value, l) : this.cbContent && this.handleResult(this.clipboardSrv.copyFromContent(this.cbContent, this.container), this.cbContent, l) : this.handleResult(!1, void 0, l)
                    }, l.prototype.handleResult = function(l, n, u) {
                        var t = {
                            isSuccess: l,
                            event: u
                        };
                        l ? (t = Object.assign(t, {
                            content: n,
                            successMessage: this.cbSuccessMsg
                        }), this.cbOnSuccess.emit(t)) : this.cbOnError.emit(t), this.clipboardSrv.pushCopyResponse(t)
                    }, l
                }(),
                r = function() {
                    return function() {}
                }()
        },
        k3Np: function(l, n, u) {
            "use strict";
            u.r(n);
            var t = u("CcnG"),
                e = function() {
                    return Promise.all([u.e(0), u.e(20)]).then(u.bind(null, "uNJW")).then((function(l) {
                        return l.ApiUsersModuleNgFactory
                    }))
                },
                a = function() {
                    return Promise.all([u.e(0), u.e(19)]).then(u.bind(null, "r7o2")).then((function(l) {
                        return l.ApiUserGroupsModuleNgFactory
                    }))
                },
                i = function() {
                    return Promise.all([u.e(2), u.e(0), u.e(18)]).then(u.bind(null, "yv6X")).then((function(l) {
                        return l.ApiSettingsModuleNgFactory
                    }))
                },
                o = function() {
                    return function() {}
                }(),
                s = u("pMnS"),
                r = u("9AJC"),
                c = u("ZYCi"),
                b = u("Ip0R"),
                p = function() {
                    function l() {
                        this.cards = [{
                            title: "Users",
                            icon: "fa fa-user",
                            svg: "fa-key",
                            list: "/gui/users",
                            add: "/gui/users/add"
                        }, {
                            title: "User Groups",
                            icon: "fa fa-users",
                            list: "/gui/user-groups",
                            add: "/gui/user-groups/add"
                        }, {
                            title: "Upgrade",
                            icon: "fa fa-oil-can",
                            list: "/gui/upgrade",
                            viewbtn: "Move to"
                        }, {
                            title: "Backup",
                            icon: "fa fa-cloud-upload-alt",
                            list: "/gui/backup",
                            viewbtn: "Move to"
                        }]
                    }
                    return l.prototype.ngOnInit = function() {}, l
                }(),
                d = t.Bb({
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
                }), null, null)), t.Cb(1, 671744, null, 0, c.s, [c.q, c.a, b.j], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), t.Xb(2, null, [" ", " "]))], (function(l, n) {
                    l(n, 1, 0, n.parent.context.$implicit.list)
                }), (function(l, n) {
                    l(n, 0, 0, t.Pb(n, 1).target, t.Pb(n, 1).href), l(n, 2, 0, n.parent.context.$implicit.viewbtn ? n.parent.context.$implicit.viewbtn : "View")
                }))
            }

            function f(l) {
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
                }), null, null)), t.Cb(1, 671744, null, 0, c.s, [c.q, c.a, b.j], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), t.Xb(-1, null, [" Add New "]))], (function(l, n) {
                    l(n, 1, 0, n.parent.context.$implicit.add)
                }), (function(l, n) {
                    l(n, 0, 0, t.Pb(n, 1).target, t.Pb(n, 1).href)
                }))
            }

            function h(l) {
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
                }), null, null)), t.Cb(8, 671744, null, 0, c.s, [c.q, c.a, b.j], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), t.Db(9, 0, null, null, 4, "span", [
                    ["style", "font-size: 5em;"]
                ], null, null, null, null, null)), t.Ub(512, null, b.F, b.G, [t.n, t.z, t.M]), t.Cb(11, 278528, null, 0, b.p, [b.F], {
                    ngStyle: [0, "ngStyle"]
                }, null), t.Sb(12, {
                    color: 0
                }), (l()(), t.Db(13, 0, null, null, 0, "i", [], [
                    [8, "className", 0]
                ], null, null, null, null)), (l()(), t.Db(14, 0, null, null, 0, "hr", [], null, null, null, null, null)), (l()(), t.Db(15, 0, null, null, 6, "div", [
                    ["class", "text-center"]
                ], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 1, null, g)), t.Cb(17, 16384, null, 0, b.m, [t.Y, t.U], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t.Xb(-1, null, ["  "])), (l()(), t.sb(16777216, null, null, 1, null, f)), t.Cb(20, 16384, null, 0, b.m, [t.Y, t.U], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t.Xb(-1, null, ["  "])), (l()(), t.Db(22, 0, null, null, 0, "br", [], null, null, null, null, null))], (function(l, n) {
                    l(n, 8, 0, n.context.$implicit.list);
                    var u = l(n, 12, 0, n.context.$implicit.icon_color);
                    l(n, 11, 0, u), l(n, 17, 0, n.context.$implicit.list), l(n, 20, 0, n.context.$implicit.add)
                }), (function(l, n) {
                    l(n, 4, 0, n.context.$implicit.title), l(n, 7, 0, t.Pb(n, 8).target, t.Pb(n, 8).href), l(n, 13, 0, t.Hb(1, "", n.context.$implicit.icon, ""))
                }))
            }

            function m(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 3, "div", [
                    ["class", "container mt-3"]
                ], null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 2, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 1, null, h)), t.Cb(3, 278528, null, 0, b.l, [t.Y, t.U, t.y], {
                    ngForOf: [0, "ngForOf"]
                }, null)], (function(l, n) {
                    l(n, 3, 0, n.component.cards)
                }), null)
            }

            function v(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "kt-gui", [], null, null, null, m, d)), t.Cb(1, 114688, null, 0, p, [], null, null)], (function(l, n) {
                    l(n, 1, 0)
                }), null)
            }
            var y = t.zb("kt-gui", p, v, {}, {}, []),
                D = u("gIcY"),
                C = u("Axip"),
                k = u("26FU"),
                P = u("P6uZ"),
                x = u("67Y/"),
                w = u("t/Na"),
                I = "api/update/",
                U = function() {
                    function l(l) {
                        this.http = l
                    }
                    return l.prototype.info = function() {
                        return this.http.get(I + "info/").pipe(Object(P.a)(), Object(x.a)((function(l) {
                            return l
                        })))
                    }, l.prototype.infoSlave = function(l) {
                        return this.http.post(I + "info/slave/", l).pipe(Object(P.a)(), Object(x.a)((function(l) {
                            return l
                        })))
                    }, l.prototype.change = function(l) {
                        return this.http.post(I + "change/", l).pipe(Object(P.a)(), Object(x.a)((function(l) {
                            return l
                        })))
                    }, l.prototype.update = function(l) {
                        return this.http.post(I, l).pipe(Object(P.a)(), Object(x.a)((function(l) {
                            return l
                        })))
                    }, l.prototype.upgrade = function() {
                        return this.http.post(I + "upgrade/", {}).pipe(Object(P.a)(), Object(x.a)((function(l) {
                            return l
                        })))
                    }, l.prototype.slaveUpgrade = function(l) {
                        return void 0 === l && (l = ""), this.http.post("/api/ha/slave/update/", {
                            ip: l
                        }).pipe(Object(P.a)(), Object(x.a)((function(l) {
                            return l
                        })))
                    }, l.ngInjectableDef = t.dc({
                        factory: function() {
                            return new l(t.ec(w.c))
                        },
                        token: l,
                        providedIn: "root"
                    }), l
                }(),
                O = u("Rtfg"),
                S = function() {
                    function l(l, n, u, t) {
                        this.service = l, this.toastr = n, this.store = u, this.auth = t, this.data = {
                            update_activated: 0,
                            update_key: "",
                            update_signin: 0,
                            update_url: "https://tacacsgui.com/api/tacacsgui/update/",
                            version: ""
                        }, this.username = "", this.last_version = {
                            description_brief: "",
                            description_more: "",
                            reinstall: 0,
                            version: ""
                        }, this.outputMessage = "", this.outputMessage_ = new k.a(""), this.briefDescr_ = new k.a(""), this.moreDescr_ = new k.a(""), this.updateTrigger = new k.a(!1), this.manualTrigger = new k.a(!1), this.loading = new k.a(!0), this.slaveList = []
                    }
                    return l.prototype.ngOnInit = function() {
                        var l = this;
                        this.service.info().subscribe((function(n) {
                            l.data = n.info, l.slaveList = n.slaves, l.loading.next(!1)
                        }))
                    }, l.prototype.upgradeSlave = function(l, n) {
                        var u = this;
                        void 0 === l && (l = ""), this.loading.next(!0), this.service.slaveUpgrade(l).subscribe((function(l) {
                            u.slaveList[n].resp = l.resp.upgrade, u.loading.next(!1)
                        }))
                    }, l.prototype.change = function() {
                        var l = this;
                        this.service.change({
                            settings: 1,
                            update_signin: +this.data.update_signin
                        }).subscribe((function(n) {
                            console.log(n), n.change_status && l.toastr.success("Changes Saved")
                        }))
                    }, l.prototype.copyKey = function(l) {
                        l.isSuccess && this.toastr.success("You have copied update key")
                    }, l.prototype.checkUpdates = function() {
                        var l = this;
                        this.outputMessage_.next("Loading..."), this.briefDescr_.next(""), this.moreDescr_.next(""), this.service.update({
                            version: this.data.version
                        }).subscribe((function(n) {
                            if (console.log(n), l.outputMessage = "", n.output) {
                                if (n.output.error && n.output.error.message) return void l.outputMessage_.next("Error: " + n.output.error.message);
                                n.output.user && (l.outputMessage += "Hello " + n.output.user.username + ",\n"), l.outputMessage += "Your api version: " + l.data.version + "\n", n.output.last_version && (l.outputMessage += "Last available version: " + n.output.last_version.version, l.briefDescr_.next("Brief Description: " + n.output.last_version.description_brief), l.moreDescr_.next("More Description: " + n.output.last_version.description_more), l.manualTrigger.next(!!+n.output.last_version.reinstall)), l.outputMessage_.next(l.outputMessage), l.data.version != n.output.last_version.version && l.updateTrigger.next(!0)
                            }
                        }))
                    }, l.prototype.upgrade = function() {
                        var l = this;
                        this.service.upgrade().subscribe((function(n) {
                            console.log(n), l.auth.logout().subscribe((function(l) {
                                console.log(l)
                            })), l.store.dispatch(new O.e)
                        }))
                    }, l
                }(),
                _ = u("SZbH"),
                E = u("yGQT"),
                T = u("/qR0"),
                M = t.Bb({
                    encapsulation: 0,
                    styles: [
                        [".update-output[_ngcontent-%COMP%]{background-color:#444;color:#fff;padding:15px}"]
                    ],
                    data: {}
                });

            function X(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 0, "div", [
                    ["class", "tacgui-blockui-main"]
                ], null, null, null, null, null))], null, null)
            }

            function j(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 3, "div", [
                    ["class", "tacgui-blockui-main-message"]
                ], null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 0, "div", [
                    ["class", "kt-spinner kt-spinner--sm kt-spinner--success"]
                ], null, null, null, null, null)), (l()(), t.Db(2, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Please wait..."]))], null, null)
            }

            function A(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "div", [], [
                    [8, "innerHTML", 1]
                ], null, null, null, null)), t.Rb(131072, b.b, [t.h])], null, (function(l, n) {
                    var u = n.component;
                    l(n, 0, 0, t.Yb(n, 0, 0, t.Pb(n, 1).transform(u.briefDescr_)))
                }))
            }

            function N(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "div", [], [
                    [8, "innerHTML", 1]
                ], null, null, null, null)), t.Rb(131072, b.b, [t.h])], null, (function(l, n) {
                    var u = n.component;
                    l(n, 0, 0, t.Yb(n, 0, 0, t.Pb(n, 1).transform(u.moreDescr_)))
                }))
            }

            function F(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 10, "pre", [
                    ["class", "update-output"]
                ], null, null, null, null, null)), (l()(), t.Xb(1, null, ["", "\n          "])), t.Rb(131072, b.b, [t.h]), (l()(), t.sb(16777216, null, null, 2, null, A)), t.Cb(4, 16384, null, 0, b.m, [t.Y, t.U], {
                    ngIf: [0, "ngIf"]
                }, null), t.Rb(131072, b.b, [t.h]), (l()(), t.Xb(-1, null, ["\n          "])), (l()(), t.sb(16777216, null, null, 2, null, N)), t.Cb(8, 16384, null, 0, b.m, [t.Y, t.U], {
                    ngIf: [0, "ngIf"]
                }, null), t.Rb(131072, b.b, [t.h]), (l()(), t.Xb(-1, null, ["\n        "]))], (function(l, n) {
                    var u = n.component;
                    l(n, 4, 0, t.Yb(n, 4, 0, t.Pb(n, 5).transform(u.briefDescr_))), l(n, 8, 0, t.Yb(n, 8, 0, t.Pb(n, 9).transform(u.moreDescr_)))
                }), (function(l, n) {
                    var u = n.component;
                    l(n, 1, 0, t.Yb(n, 1, 0, t.Pb(n, 2).transform(u.outputMessage_)))
                }))
            }

            function R(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 2, "h4", [], null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 1, "a", [
                    ["href", "https://tacacsgui.com/documentation/installation/re-installation/"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Manual Upgrade Required"]))], null, null)
            }

            function Y(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "button", [
                    ["class", "btn btn-sm btn-success"],
                    ["type", "button"]
                ], null, [
                    [null, "click"]
                ], (function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== l.component.upgrade() && t), t
                }), null, null)), (l()(), t.Xb(-1, null, ["Upgrade"]))], null, null)
            }

            function Z(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 6, "div", [
                    ["class", "form-group text-center"]
                ], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 2, null, R)), t.Cb(2, 16384, null, 0, b.m, [t.Y, t.U], {
                    ngIf: [0, "ngIf"]
                }, null), t.Rb(131072, b.b, [t.h]), (l()(), t.sb(16777216, null, null, 2, null, Y)), t.Cb(5, 16384, null, 0, b.m, [t.Y, t.U], {
                    ngIf: [0, "ngIf"]
                }, null), t.Rb(131072, b.b, [t.h])], (function(l, n) {
                    var u = n.component;
                    l(n, 2, 0, t.Yb(n, 2, 0, t.Pb(n, 3).transform(u.manualTrigger))), l(n, 5, 0, !t.Yb(n, 5, 0, t.Pb(n, 6).transform(u.manualTrigger)))
                }), null)
            }

            function $(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 2, null, null, null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 1, "span", [
                    ["class", "kt-badge kt-badge--danger kt-badge--inline"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["out of sync"]))], null, null)
            }

            function q(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 2, null, null, null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 1, "span", [
                    ["class", "kt-badge kt-badge--success kt-badge--inline"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["ready"]))], null, null)
            }

            function B(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 4, null, null, null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 3, "tr", [], null, null, null, null, null)), (l()(), t.Db(2, 0, null, null, 2, "td", [
                    ["colspan", "99"]
                ], null, null, null, null, null)), (l()(), t.Db(3, 0, null, null, 1, "pre", [], null, null, null, null, null)), (l()(), t.Xb(4, null, ["", ""]))], null, (function(l, n) {
                    l(n, 4, 0, n.parent.context.$implicit.resp)
                }))
            }

            function L(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 17, null, null, null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 14, "tr", [], null, null, null, null, null)), (l()(), t.Db(2, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), t.Xb(3, null, ["", ""])), (l()(), t.Db(4, 0, null, null, 4, "td", [], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 1, null, $)), t.Cb(6, 16384, null, 0, b.m, [t.Y, t.U], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t.sb(16777216, null, null, 1, null, q)), t.Cb(8, 16384, null, 0, b.m, [t.Y, t.U], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t.Db(9, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), t.Xb(10, null, ["", ""])), (l()(), t.Db(11, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), t.Xb(12, null, ["", ""])), (l()(), t.Db(13, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), t.Db(14, 0, null, null, 1, "button", [
                    ["class", "btn btn-sm btn-clean btn-icon btn-icon-md"]
                ], null, [
                    [null, "click"]
                ], (function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== l.component.upgradeSlave(l.context.$implicit.ip, l.context.index) && t), t
                }), null, null)), (l()(), t.Db(15, 0, null, null, 0, "i", [
                    ["class", "la la-refresh"]
                ], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 1, null, B)), t.Cb(17, 16384, null, 0, b.m, [t.Y, t.U], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t.sb(0, null, null, 0))], (function(l, n) {
                    l(n, 6, 0, 99 != n.context.$implicit.status), l(n, 8, 0, 99 == n.context.$implicit.status), l(n, 17, 0, null == n.context.$implicit ? null : n.context.$implicit.resp)
                }), (function(l, n) {
                    l(n, 3, 0, n.context.$implicit.ip), l(n, 10, 0, n.context.$implicit.api), l(n, 12, 0, n.context.$implicit.date)
                }))
            }

            function V(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 0, "div", [
                    ["class", "tacgui-blockui-main"]
                ], null, null, null, null, null))], null, null)
            }

            function z(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 3, "div", [
                    ["class", "tacgui-blockui-main-message"]
                ], null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 0, "div", [
                    ["class", "kt-spinner kt-spinner--sm kt-spinner--success"]
                ], null, null, null, null, null)), (l()(), t.Db(2, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Please wait..."]))], null, null)
            }

            function K(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 23, "div", [
                    ["class", "col-9"]
                ], null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 22, "div", [
                    ["class", "card m-3"]
                ], null, null, null, null, null)), (l()(), t.Db(2, 0, null, null, 15, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (l()(), t.Db(3, 0, null, null, 14, "table", [
                    ["class", "table"]
                ], null, null, null, null, null)), (l()(), t.Db(4, 0, null, null, 10, "thead", [], null, null, null, null, null)), (l()(), t.Db(5, 0, null, null, 9, "tr", [], null, null, null, null, null)), (l()(), t.Db(6, 0, null, null, 1, "th", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["IP"])), (l()(), t.Db(8, 0, null, null, 1, "th", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Status"])), (l()(), t.Db(10, 0, null, null, 1, "th", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["API"])), (l()(), t.Db(12, 0, null, null, 1, "th", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Last Check"])), (l()(), t.Db(14, 0, null, null, 0, "th", [], null, null, null, null, null)), (l()(), t.Db(15, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (l()(), t.sb(16777216, null, null, 1, null, L)), t.Cb(17, 278528, null, 0, b.l, [t.Y, t.U, t.y], {
                    ngForOf: [0, "ngForOf"]
                }, null), (l()(), t.sb(16777216, null, null, 2, null, V)), t.Cb(19, 16384, null, 0, b.m, [t.Y, t.U], {
                    ngIf: [0, "ngIf"]
                }, null), t.Rb(131072, b.b, [t.h]), (l()(), t.sb(16777216, null, null, 2, null, z)), t.Cb(22, 16384, null, 0, b.m, [t.Y, t.U], {
                    ngIf: [0, "ngIf"]
                }, null), t.Rb(131072, b.b, [t.h])], (function(l, n) {
                    var u = n.component;
                    l(n, 17, 0, u.slaveList), l(n, 19, 0, t.Yb(n, 19, 0, t.Pb(n, 20).transform(u.loading))), l(n, 22, 0, t.Yb(n, 22, 0, t.Pb(n, 23).transform(u.loading)))
                }), null)
            }

            function G(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 60, "div", [
                    ["class", "col-9"]
                ], null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 59, "div", [
                    ["class", "card m-3"]
                ], null, null, null, null, null)), (l()(), t.Db(2, 0, null, null, 52, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (l()(), t.Db(3, 0, null, null, 1, "h5", [
                    ["class", "card-title"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["General Update Settings"])), (l()(), t.Db(5, 0, null, null, 10, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t.Db(6, 0, null, null, 9, "div", [
                    ["class", "col-12"]
                ], null, null, null, null, null)), (l()(), t.Db(7, 0, null, null, 8, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(8, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Update URL"])), (l()(), t.Db(10, 0, null, null, 5, "input", [
                    ["class", "form-control form-control-sm"],
                    ["disabled", ""],
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
                        a = l.component;
                    return "input" === n && (e = !1 !== t.Pb(l, 11)._handleInput(u.target.value) && e), "blur" === n && (e = !1 !== t.Pb(l, 11).onTouched() && e), "compositionstart" === n && (e = !1 !== t.Pb(l, 11)._compositionStart() && e), "compositionend" === n && (e = !1 !== t.Pb(l, 11)._compositionEnd(u.target.value) && e), "ngModelChange" === n && (e = !1 !== (a.data.update_url = u) && e), e
                }), null, null)), t.Cb(11, 16384, null, 0, D.e, [t.M, t.n, [2, D.a]], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.e]), t.Cb(13, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    isDisabled: [0, "isDisabled"],
                    model: [1, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(15, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null), (l()(), t.Db(16, 0, null, null, 38, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t.Db(17, 0, null, null, 12, "div", [
                    ["class", "col-12"]
                ], null, null, null, null, null)), (l()(), t.Db(18, 0, null, null, 11, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(19, 0, null, null, 1, "label", [
                    ["style", "width: 100%"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Check after sign in"])), (l()(), t.Db(21, 0, null, null, 8, "label", [
                    ["class", "kt-checkbox kt-checkbox--bold kt-checkbox--brand"]
                ], null, null, null, null, null)), (l()(), t.Db(22, 0, null, null, 5, "input", [
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
                        a = l.component;
                    return "change" === n && (e = !1 !== t.Pb(l, 23).onChange(u.target.checked) && e), "blur" === n && (e = !1 !== t.Pb(l, 23).onTouched() && e), "ngModelChange" === n && (e = !1 !== (a.data.update_signin = u) && e), "change" === n && (e = !1 !== a.change() && e), e
                }), null, null)), t.Cb(23, 16384, null, 0, D.b, [t.M, t.n], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.b]), t.Cb(25, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(27, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null), (l()(), t.Xb(-1, null, [" Enable "])), (l()(), t.Db(29, 0, null, null, 0, "span", [], null, null, null, null, null)), (l()(), t.Db(30, 0, null, null, 24, "div", [
                    ["class", "col-12"]
                ], null, null, null, null, null)), (l()(), t.Db(31, 0, null, null, 23, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(32, 0, null, null, 4, "p", [], null, null, null, null, null)), (l()(), t.Db(33, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["System Activation Status:"])), (l()(), t.Db(35, 0, null, null, 1, "span", [
                    ["class", "activated"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Activated"])), (l()(), t.Db(37, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Update Key"])), (l()(), t.Db(39, 0, null, null, 10, "div", [
                    ["class", "input-group margin"]
                ], null, null, null, null, null)), (l()(), t.Db(40, 0, null, null, 3, "span", [
                    ["class", "input-group-btn"]
                ], null, null, null, null, null)), (l()(), t.Db(41, 0, null, null, 2, "button", [
                    ["class", "btn btn-sm btn-primary"],
                    ["ngxClipboard", ""],
                    ["type", "button"]
                ], null, [
                    [null, "cbOnSuccess"],
                    [null, "click"]
                ], (function(l, n, u) {
                    var e = !0,
                        a = l.component;
                    return "click" === n && (e = !1 !== t.Pb(l, 42).onClick(u.target) && e), "cbOnSuccess" === n && (e = !1 !== a.copyKey(u) && e), e
                }), null, null)), t.Cb(42, 212992, null, 0, C.a, [C.c], {
                    targetElm: [0, "targetElm"],
                    cbContent: [1, "cbContent"]
                }, {
                    cbOnSuccess: "cbOnSuccess"
                }), (l()(), t.Xb(-1, null, ["Copy Key"])), (l()(), t.Db(44, 0, null, null, 5, "input", [
                    ["class", "form-control form-control-sm"],
                    ["disabled", ""],
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
                        a = l.component;
                    return "input" === n && (e = !1 !== t.Pb(l, 45)._handleInput(u.target.value) && e), "blur" === n && (e = !1 !== t.Pb(l, 45).onTouched() && e), "compositionstart" === n && (e = !1 !== t.Pb(l, 45)._compositionStart() && e), "compositionend" === n && (e = !1 !== t.Pb(l, 45)._compositionEnd(u.target.value) && e), "ngModelChange" === n && (e = !1 !== (a.data.update_key = u) && e), e
                }), null, null)), t.Cb(45, 16384, null, 0, D.e, [t.M, t.n, [2, D.a]], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.e]), t.Cb(47, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    isDisabled: [0, "isDisabled"],
                    model: [1, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(49, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null), (l()(), t.Db(50, 0, null, null, 4, "span", [
                    ["class", "form-text text-muted"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, [" add that key to your "])), (l()(), t.Db(52, 0, null, null, 1, "a", [
                    ["href", "https://tacacsgui.com/profile/"],
                    ["target", "_blank"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["tacacsgui.com"])), (l()(), t.Xb(-1, null, [" profile "])), (l()(), t.sb(16777216, null, null, 2, null, X)), t.Cb(56, 16384, null, 0, b.m, [t.Y, t.U], {
                    ngIf: [0, "ngIf"]
                }, null), t.Rb(131072, b.b, [t.h]), (l()(), t.sb(16777216, null, null, 2, null, j)), t.Cb(59, 16384, null, 0, b.m, [t.Y, t.U], {
                    ngIf: [0, "ngIf"]
                }, null), t.Rb(131072, b.b, [t.h]), (l()(), t.Db(61, 0, null, null, 13, "div", [
                    ["class", "col-9"]
                ], null, null, null, null, null)), (l()(), t.Db(62, 0, null, null, 12, "div", [
                    ["class", "card m-3"]
                ], null, null, null, null, null)), (l()(), t.Db(63, 0, null, null, 11, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (l()(), t.Db(64, 0, null, null, 4, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(65, 0, null, null, 1, "p", [
                    ["class", "text-muted"]
                ], null, null, null, null, null)), (l()(), t.Xb(66, null, ["Current version: ", ""])), (l()(), t.Db(67, 0, null, null, 1, "button", [
                    ["class", "btn btn-sm btn-success"],
                    ["type", "button"]
                ], null, [
                    [null, "click"]
                ], (function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== l.component.checkUpdates() && t), t
                }), null, null)), (l()(), t.Xb(-1, null, ["Check Updates"])), (l()(), t.sb(16777216, null, null, 2, null, F)), t.Cb(70, 16384, null, 0, b.m, [t.Y, t.U], {
                    ngIf: [0, "ngIf"]
                }, null), t.Rb(131072, b.b, [t.h]), (l()(), t.sb(16777216, null, null, 2, null, Z)), t.Cb(73, 16384, null, 0, b.m, [t.Y, t.U], {
                    ngIf: [0, "ngIf"]
                }, null), t.Rb(131072, b.b, [t.h]), (l()(), t.sb(16777216, null, null, 1, null, K)), t.Cb(76, 16384, null, 0, b.m, [t.Y, t.U], {
                    ngIf: [0, "ngIf"]
                }, null)], (function(l, n) {
                    var u = n.component;
                    l(n, 13, 0, "", u.data.update_url), l(n, 25, 0, u.data.update_signin), l(n, 42, 0, "", u.data.update_key), l(n, 47, 0, "", u.data.update_key), l(n, 56, 0, t.Yb(n, 56, 0, t.Pb(n, 57).transform(u.loading))), l(n, 59, 0, t.Yb(n, 59, 0, t.Pb(n, 60).transform(u.loading))), l(n, 70, 0, t.Yb(n, 70, 0, t.Pb(n, 71).transform(u.outputMessage_))), l(n, 73, 0, t.Yb(n, 73, 0, t.Pb(n, 74).transform(u.updateTrigger))), l(n, 76, 0, u.slaveList.length > 0)
                }), (function(l, n) {
                    var u = n.component;
                    l(n, 10, 0, t.Pb(n, 15).ngClassUntouched, t.Pb(n, 15).ngClassTouched, t.Pb(n, 15).ngClassPristine, t.Pb(n, 15).ngClassDirty, t.Pb(n, 15).ngClassValid, t.Pb(n, 15).ngClassInvalid, t.Pb(n, 15).ngClassPending), l(n, 22, 0, t.Pb(n, 27).ngClassUntouched, t.Pb(n, 27).ngClassTouched, t.Pb(n, 27).ngClassPristine, t.Pb(n, 27).ngClassDirty, t.Pb(n, 27).ngClassValid, t.Pb(n, 27).ngClassInvalid, t.Pb(n, 27).ngClassPending), l(n, 44, 0, t.Pb(n, 49).ngClassUntouched, t.Pb(n, 49).ngClassTouched, t.Pb(n, 49).ngClassPristine, t.Pb(n, 49).ngClassDirty, t.Pb(n, 49).ngClassValid, t.Pb(n, 49).ngClassInvalid, t.Pb(n, 49).ngClassPending), l(n, 66, 0, u.data.version)
                }))
            }

            function H(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "kt-api-update", [], null, null, null, G, M)), t.Cb(1, 114688, null, 0, S, [U, _.j, E.o, T.a], null, null)], (function(l, n) {
                    l(n, 1, 0)
                }), null)
            }
            var J = t.zb("kt-api-update", S, H, {}, {}, []),
                W = u("5rxC"),
                Q = u("II6f"),
                ll = u("5Awz"),
                nl = u("8kqb"),
                ul = u("uoK1"),
                tl = u("GRfY"),
                el = u("mlFA"),
                al = u("4GxJ"),
                il = function() {
                    function l(l) {
                        this.http = l
                    }
                    return l.prototype.settings = function() {
                        return this.http.get("api/backup/settings/").pipe(Object(P.a)(), Object(x.a)((function(l) {
                            return l
                        })))
                    }, l.prototype.settings_ = function(l) {
                        return this.http.post("api/backup/settings/", l).pipe(Object(P.a)(), Object(x.a)((function(l) {
                            return l
                        })))
                    }, l.prototype.postFile = function(l, n) {
                        var u = new FormData;
                        return u.append("tcfg", l, l.name), this.http.post("api/backup/upload/", u).pipe(Object(x.a)((function() {
                            return !0
                        })))
                    }, l.prototype.upload = function(l) {
                        var n = new FormData;
                        return n.append("file", l), this.http.post("api/backup/upload/", n, {
                            headers: {
                                "Content-Type": void 0
                            },
                            transformRequest: []
                        }).pipe(Object(x.a)((function(l) {
                            switch (l.type) {
                                case w.g.UploadProgress:
                                    return {
                                        status: "progress", message: Math.round(100 * l.loaded / l.total)
                                    };
                                case w.g.Response:
                                    return l.body;
                                default:
                                    return "Unhandled event: " + l.type
                            }
                        })))
                    }, l.prototype.make = function(l) {
                        return this.http.post("api/backup/make/", l).pipe(Object(P.a)(), Object(x.a)((function(l) {
                            return l
                        })))
                    }, l.prototype.del = function(l) {
                        return this.http.post("api/backup/delete/", l).pipe(Object(P.a)(), Object(x.a)((function(l) {
                            return l
                        })))
                    }, l.prototype.restore = function(l) {
                        return this.http.post("api/backup/restore/", l).pipe(Object(P.a)(), Object(x.a)((function(l) {
                            return l
                        })))
                    }, l.ngInjectableDef = t.dc({
                        factory: function() {
                            return new l(t.ec(w.c))
                        },
                        token: l,
                        providedIn: "root"
                    }), l
                }(),
                ol = function() {
                    function l(l, n) {
                        var u = this;
                        this.service = l, this.toastr = n, this.diffs = {
                            apicfg: !0,
                            full: !0
                        }, this.file_tcfg = null, this.file_api = null, this.file_full = null, this.settings = {
                            apicfgSet: !1,
                            tcfgSet: !1
                        }, this.table_reload = new k.a(!1), this.tableOptions_api = {
                            panel: {
                                enable: !1
                            },
                            table: {
                                delBtn: "",
                                superClass: "h-100",
                                mainUrl: "/backup/datatables/",
                                extra: {
                                    type: "apicfg"
                                },
                                sort: {
                                    column: "filename",
                                    direction: "asc"
                                },
                                columns: {
                                    filename: {
                                        title: "Filename",
                                        show: !0,
                                        sortable: !0
                                    },
                                    size: {
                                        title: "Size",
                                        show: !0,
                                        sortable: !1
                                    },
                                    action: {
                                        title: "Action",
                                        show: !0,
                                        sortable: !1,
                                        htmlPattern: function(l, n, u, t) {
                                            var e = "";
                                            return t.pipe(Object(P.a)()).subscribe((function(l) {
                                                e = l[u].href
                                            })), '<a href="' + e + '" target="_blank" class="btn btn-sm btn-clean btn-icon btn-icon-md"><i class="la la-download"></i></a> <a title="Restore" href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" name="restore"><i class="la la-refresh"></i></a> <a title="Delete" href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" name="delete"><i class="la la-trash"></i></a>'
                                        },
                                        onClick: function(l, n, t, e, a) {
                                            return e.pipe(Object(P.a)()).subscribe((function(l) {
                                                [a.target.parentElement.name, a.target.name].includes("delete") && u.del(l[t].filename, l[t].type) && ([a.target.parentElement.name, a.target.name].includes("delete", 1) ? (console.log(a.target.parentElement), a.target.parentElement.parentElement.style.display = "none") : (console.log(a), a.target.parentElement.parentElement.parentElement.style.display = "none")), [a.target.parentElement.name, a.target.name].includes("restore") && u.restore(l[t].filename, l[t].type)
                                            })), !1
                                        }
                                    }
                                }
                            }
                        }, this.tableOptions_tgui = {
                            panel: {
                                enable: !1
                            },
                            table: {
                                superClass: "h-100",
                                mainUrl: "/backup/datatables/",
                                extra: {
                                    type: "tcfg"
                                },
                                sort: {
                                    column: "filename",
                                    direction: "asc"
                                },
                                columns: {
                                    filename: {
                                        title: "Filename",
                                        show: !0,
                                        sortable: !0
                                    },
                                    size: {
                                        title: "Size",
                                        show: !0,
                                        sortable: !1
                                    },
                                    action: {
                                        title: "Action",
                                        show: !0,
                                        sortable: !1,
                                        htmlPattern: function(l, n, u, t) {
                                            var e = "";
                                            return t.pipe(Object(P.a)()).subscribe((function(l) {
                                                e = l[u].href
                                            })), '<a href="' + e + '" target="_blank" class="btn btn-sm btn-clean btn-icon btn-icon-md"><i class="la la-download"></i></a> <a title="Restore" href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" name="restore"><i class="la la-refresh"></i></a> <a title="Delete" href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" name="delete"><i class="la la-trash"></i></a>'
                                        },
                                        onClick: function(l, n, t, e, a) {
                                            return e.pipe(Object(P.a)()).subscribe((function(l) {
                                                [a.target.parentElement.name, a.target.name].includes("delete") && u.del(l[t].filename, l[t].type) && ([a.target.parentElement.name, a.target.name].includes("delete", 1) ? (console.log(a.target.parentElement), a.target.parentElement.parentElement.style.display = "none") : (console.log(a), a.target.parentElement.parentElement.parentElement.style.display = "none")), [a.target.parentElement.name, a.target.name].includes("restore") && u.restore(l[t].filename, l[t].type)
                                            })), !1
                                        }
                                    }
                                }
                            }
                        }, this.tableOptions_full = {
                            panel: {
                                enable: !1
                            },
                            table: {
                                mainUrl: "/backup/datatables/",
                                superClass: "h-100",
                                extra: {
                                    type: "full"
                                },
                                sort: {
                                    column: "filename",
                                    direction: "asc"
                                },
                                columns: {
                                    filename: {
                                        title: "Filename",
                                        show: !0,
                                        sortable: !0
                                    },
                                    size: {
                                        title: "Size",
                                        show: !0,
                                        sortable: !1
                                    },
                                    action: {
                                        title: "Action",
                                        show: !0,
                                        sortable: !1,
                                        htmlPattern: function(l, n, u, t) {
                                            var e = "";
                                            return t.pipe(Object(P.a)()).subscribe((function(l) {
                                                e = l[u].href
                                            })), '<a href="' + e + '" target="_blank" class="btn btn-sm btn-clean btn-icon btn-icon-md"><i class="la la-download"></i></a> <a title="Restore" href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" name="restore"><i class="la la-refresh"></i></a> <a title="Delete" href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" name="delete"><i class="la la-trash"></i></a>'
                                        },
                                        onClick: function(l, n, t, e, a) {
                                            return e.pipe(Object(P.a)()).subscribe((function(l) {
                                                [a.target.parentElement.name, a.target.name].includes("delete") && u.del(l[t].filename, l[t].type) && ([a.target.parentElement.name, a.target.name].includes("delete", 1) ? (console.log(a.target.parentElement), a.target.parentElement.parentElement.style.display = "none") : (console.log(a), a.target.parentElement.parentElement.parentElement.style.display = "none")), [a.target.parentElement.name, a.target.name].includes("restore") && u.restore(l[t].filename, l[t].type)
                                            })), !1
                                        }
                                    }
                                }
                            }
                        }, this.uploader = new W.c({
                            url: "api/backup/upload/"
                        }), this.hasBaseDropZoneOver = !1, this.hasAnotherDropZoneOver = !1
                    }
                    return l.prototype.handleFileInput = function(l, n) {
                        void 0 === n && (n = "tcfg"), this.file_tcfg = l.item(0)
                    }, l.prototype.ngOnInit = function() {
                        var l = this;
                        this.service.settings().subscribe((function(n) {
                            console.log(n.settings), l.settings = n.settings
                        })), this.uploader.onErrorItem = function(n, u, t, e) {
                            return l.onErrorItem(n, u, t, e)
                        }, this.uploader.onSuccessItem = function(n, u, t, e) {
                            return l.onSuccessItem(n, u, t, e)
                        }, this.uploader.onAfterAddingFile = function(n) {
                            l.uploader.queue.length > 1 && l.uploader.queue.splice(0, 1)
                        }
                    }, l.prototype.makeBackup = function(l) {
                        var n = this;
                        this.service.make({
                            type: l,
                            diff: this.diffs[l]
                        }).subscribe((function(l) {
                            l.result && l.result.status ? (n.toastr.success("Backup Created"), n.table_reload.next(!0)) : n.toastr.error(l.result.message ? l.result.message : "Unknown status")
                        }))
                    }, l.prototype.del = function(l, n) {
                        var u = this;
                        return !!confirm("Are you sure? Delete " + l) && (this.service.del({
                            name: l
                        }).subscribe((function(l) {
                            l.result ? u.toastr.success("Deleted") : u.toastr.error("Error. Not Deleted"), u.table_reload.next(!0)
                        })), !0)
                    }, l.prototype.restore = function(l, n) {
                        var u = this;
                        return !!confirm("Are you sure? Restore " + l) && (console.log(l, n), this.service.restore({
                            name: l,
                            type: n
                        }).subscribe((function(l) {
                            console.log(l), l.result ? u.toastr.success("Restored") : u.toastr.error("Error")
                        })), !0)
                    }, l.prototype.change = function(l) {
                        var n = this;
                        console.log(l), this.service.settings_({
                            set: this.settings[l] + 0,
                            target: l
                        }).subscribe((function(l) {
                            l.result && n.toastr.success("Change Saved")
                        }))
                    }, l.prototype.fileOverBase = function(l) {
                        this.hasBaseDropZoneOver = l
                    }, l.prototype.fileOverAnother = function(l) {
                        this.hasAnotherDropZoneOver = l
                    }, l.prototype.upload = function(l) {
                        console.log(l)
                    }, l.prototype.onSuccessItem = function(l, n, u, t) {
                        var e = JSON.parse(n);
                        this.uploader.clearQueue(), e.error && e.error.status ? this.toastr.error(e.error.message) : (this.table_reload.next(!0), this.toastr.success("Uploaded"))
                    }, l.prototype.onErrorItem = function(l, n, u, t) {
                        var e = JSON.parse(n);
                        console.log(e)
                    }, l
                }(),
                sl = t.Bb({
                    encapsulation: 2,
                    styles: [
                        [".h-100-20{height:calc(100% - 20px)}.backup-tabs .tab-content{height:calc(100% - 120px)}.backup-tabs .tab-pane{height:calc(100% - 280px)}"]
                    ],
                    data: {}
                });

            function rl(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 2, null, null, null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 1, "button", [
                    ["class", "btn btn-primary btn-sm"],
                    ["type", "button"]
                ], [
                    [8, "disabled", 0]
                ], [
                    [null, "click"]
                ], (function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== l.context.$implicit.upload() && t), t
                }), null, null)), (l()(), t.Xb(-1, null, [" Upload "]))], null, (function(l, n) {
                    l(n, 1, 0, n.context.$implicit.isReady || n.context.$implicit.isUploading || n.context.$implicit.isSuccess)
                }))
            }

            function cl(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "h5", [
                    ["class", "card-title"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Tacacs Configuration Backup"])), (l()(), t.Db(2, 0, null, null, 1, "h6", [
                    ["class", "card-subtitle mb-2 text-muted"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["here is stored information about devices, users, acls, services and mavis modules"])), (l()(), t.Db(4, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Db(5, 0, null, null, 22, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t.Db(6, 0, null, null, 12, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(7, 0, null, null, 11, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(8, 0, null, null, 1, "label", [
                    ["style", "width: 100%"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Make backup every time when configuration is applied"])), (l()(), t.Db(10, 0, null, null, 8, "label", [
                    ["class", "kt-checkbox kt-checkbox--bold kt-checkbox--brand"]
                ], null, null, null, null, null)), (l()(), t.Db(11, 0, null, null, 5, "input", [
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
                        a = l.component;
                    return "change" === n && (e = !1 !== t.Pb(l, 12).onChange(u.target.checked) && e), "blur" === n && (e = !1 !== t.Pb(l, 12).onTouched() && e), "ngModelChange" === n && (e = !1 !== (a.settings.tcfgSet = u) && e), "change" === n && (e = !1 !== a.change("tcfgSet") && e), e
                }), null, null)), t.Cb(12, 16384, null, 0, D.b, [t.M, t.n], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.b]), t.Cb(14, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(16, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null), (l()(), t.Xb(-1, null, [" Enable "])), (l()(), t.Db(18, 0, null, null, 0, "span", [], null, null, null, null, null)), (l()(), t.Db(19, 0, null, null, 8, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(20, 0, null, null, 7, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(21, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Upload File"])), (l()(), t.Db(23, 0, null, null, 2, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(24, 0, null, null, 1, "input", [
                    ["ng2FileSelect", ""],
                    ["type", "file"]
                ], null, [
                    [null, "change"]
                ], (function(l, n, u) {
                    var e = !0;
                    return "change" === n && (e = !1 !== t.Pb(l, 25).onChange() && e), e
                }), null, null)), t.Cb(25, 16384, null, 0, W.a, [t.n], {
                    uploader: [0, "uploader"]
                }, null), (l()(), t.sb(16777216, null, null, 1, null, rl)), t.Cb(27, 278528, null, 0, b.l, [t.Y, t.U, t.y], {
                    ngForOf: [0, "ngForOf"]
                }, null), (l()(), t.Db(28, 0, null, null, 1, "kt-main-table", [], null, null, null, Q.b, Q.a)), t.Cb(29, 114688, null, 0, ll.a, [nl.a, ul.a, _.j, c.q, c.a, tl.a, el.a], {
                    options: [0, "options"],
                    reload: [1, "reload"]
                }, null)], (function(l, n) {
                    var u = n.component;
                    l(n, 14, 0, u.settings.tcfgSet), l(n, 25, 0, u.uploader), l(n, 27, 0, u.uploader.queue), l(n, 29, 0, u.tableOptions_tgui, u.table_reload)
                }), (function(l, n) {
                    l(n, 11, 0, t.Pb(n, 16).ngClassUntouched, t.Pb(n, 16).ngClassTouched, t.Pb(n, 16).ngClassPristine, t.Pb(n, 16).ngClassDirty, t.Pb(n, 16).ngClassValid, t.Pb(n, 16).ngClassInvalid, t.Pb(n, 16).ngClassPending)
                }))
            }

            function bl(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 2, null, null, null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 1, "button", [
                    ["class", "btn btn-primary btn-sm"],
                    ["type", "button"]
                ], [
                    [8, "disabled", 0]
                ], [
                    [null, "click"]
                ], (function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== l.context.$implicit.upload() && t), t
                }), null, null)), (l()(), t.Xb(-1, null, [" Upload "]))], null, (function(l, n) {
                    l(n, 1, 0, n.context.$implicit.isReady || n.context.$implicit.isUploading || n.context.$implicit.isSuccess)
                }))
            }

            function pl(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "h5", [
                    ["class", "card-title"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["API Configuration Backup"])), (l()(), t.Db(2, 0, null, null, 1, "h6", [
                    ["class", "card-subtitle mb-2 text-muted"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["here is stored information of api users, groups and settings"])), (l()(), t.Db(4, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Db(5, 0, null, null, 39, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t.Db(6, 0, null, null, 29, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(7, 0, null, null, 28, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t.Db(8, 0, null, null, 27, "div", [
                    ["class", "col-12"]
                ], null, null, null, null, null)), (l()(), t.Db(9, 0, null, null, 11, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(10, 0, null, null, 1, "label", [
                    ["style", "width: 100%"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Make backup every time when api user or group is added"])), (l()(), t.Db(12, 0, null, null, 8, "label", [
                    ["class", "kt-checkbox kt-checkbox--bold kt-checkbox--brand"]
                ], null, null, null, null, null)), (l()(), t.Db(13, 0, null, null, 5, "input", [
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
                        a = l.component;
                    return "change" === n && (e = !1 !== t.Pb(l, 14).onChange(u.target.checked) && e), "blur" === n && (e = !1 !== t.Pb(l, 14).onTouched() && e), "ngModelChange" === n && (e = !1 !== (a.settings.apicfgSet = u) && e), "change" === n && (e = !1 !== a.change("apicfgSet") && e), e
                }), null, null)), t.Cb(14, 16384, null, 0, D.b, [t.M, t.n], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.b]), t.Cb(16, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(18, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null), (l()(), t.Xb(-1, null, [" Enable "])), (l()(), t.Db(20, 0, null, null, 0, "span", [], null, null, null, null, null)), (l()(), t.Db(21, 0, null, null, 2, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(22, 0, null, null, 1, "button", [
                    ["class", "btn btn-sm btn-primary"],
                    ["type", "button"]
                ], null, [
                    [null, "click"]
                ], (function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== l.component.makeBackup("apicfg") && t), t
                }), null, null)), (l()(), t.Xb(-1, null, ["Make Backup"])), (l()(), t.Db(24, 0, null, null, 11, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(25, 0, null, null, 1, "label", [
                    ["style", "width: 100%"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Check difference with the last backup"])), (l()(), t.Db(27, 0, null, null, 8, "label", [
                    ["class", "kt-checkbox kt-checkbox--bold kt-checkbox--brand"]
                ], null, null, null, null, null)), (l()(), t.Db(28, 0, null, null, 5, "input", [
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
                        a = l.component;
                    return "change" === n && (e = !1 !== t.Pb(l, 29).onChange(u.target.checked) && e), "blur" === n && (e = !1 !== t.Pb(l, 29).onTouched() && e), "ngModelChange" === n && (e = !1 !== (a.diffs.apicfg = u) && e), e
                }), null, null)), t.Cb(29, 16384, null, 0, D.b, [t.M, t.n], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.b]), t.Cb(31, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(33, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null), (l()(), t.Xb(-1, null, [" Enable "])), (l()(), t.Db(35, 0, null, null, 0, "span", [], null, null, null, null, null)), (l()(), t.Db(36, 0, null, null, 8, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(37, 0, null, null, 7, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(38, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Upload File"])), (l()(), t.Db(40, 0, null, null, 2, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(41, 0, null, null, 1, "input", [
                    ["ng2FileSelect", ""],
                    ["type", "file"]
                ], null, [
                    [null, "change"]
                ], (function(l, n, u) {
                    var e = !0;
                    return "change" === n && (e = !1 !== t.Pb(l, 42).onChange() && e), e
                }), null, null)), t.Cb(42, 16384, null, 0, W.a, [t.n], {
                    uploader: [0, "uploader"]
                }, null), (l()(), t.sb(16777216, null, null, 1, null, bl)), t.Cb(44, 278528, null, 0, b.l, [t.Y, t.U, t.y], {
                    ngForOf: [0, "ngForOf"]
                }, null), (l()(), t.Db(45, 0, null, null, 1, "kt-main-table", [], null, null, null, Q.b, Q.a)), t.Cb(46, 114688, null, 0, ll.a, [nl.a, ul.a, _.j, c.q, c.a, tl.a, el.a], {
                    options: [0, "options"],
                    reload: [1, "reload"]
                }, null)], (function(l, n) {
                    var u = n.component;
                    l(n, 16, 0, u.settings.apicfgSet), l(n, 31, 0, u.diffs.apicfg), l(n, 42, 0, u.uploader), l(n, 44, 0, u.uploader.queue), l(n, 46, 0, u.tableOptions_api, u.table_reload)
                }), (function(l, n) {
                    l(n, 13, 0, t.Pb(n, 18).ngClassUntouched, t.Pb(n, 18).ngClassTouched, t.Pb(n, 18).ngClassPristine, t.Pb(n, 18).ngClassDirty, t.Pb(n, 18).ngClassValid, t.Pb(n, 18).ngClassInvalid, t.Pb(n, 18).ngClassPending), l(n, 28, 0, t.Pb(n, 33).ngClassUntouched, t.Pb(n, 33).ngClassTouched, t.Pb(n, 33).ngClassPristine, t.Pb(n, 33).ngClassDirty, t.Pb(n, 33).ngClassValid, t.Pb(n, 33).ngClassInvalid, t.Pb(n, 33).ngClassPending)
                }))
            }

            function dl(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 2, null, null, null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 1, "button", [
                    ["class", "btn btn-primary btn-sm"],
                    ["type", "button"]
                ], [
                    [8, "disabled", 0]
                ], [
                    [null, "click"]
                ], (function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== l.context.$implicit.upload() && t), t
                }), null, null)), (l()(), t.Xb(-1, null, [" Upload "]))], null, (function(l, n) {
                    l(n, 1, 0, n.context.$implicit.isReady || n.context.$implicit.isUploading || n.context.$implicit.isSuccess)
                }))
            }

            function gl(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "h5", [
                    ["class", "card-title"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Full Configuration Backup"])), (l()(), t.Db(2, 0, null, null, 1, "h6", [
                    ["class", "card-subtitle mb-2 text-muted"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["here is stored full data api and tacacs configuration (without log)"])), (l()(), t.Db(4, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Db(5, 0, null, null, 27, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t.Db(6, 0, null, null, 17, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(7, 0, null, null, 16, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t.Db(8, 0, null, null, 15, "div", [
                    ["class", "col-12"]
                ], null, null, null, null, null)), (l()(), t.Db(9, 0, null, null, 2, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(10, 0, null, null, 1, "button", [
                    ["class", "btn btn-sm btn-primary"],
                    ["type", "button"]
                ], null, [
                    [null, "click"]
                ], (function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== l.component.makeBackup("full") && t), t
                }), null, null)), (l()(), t.Xb(-1, null, ["Make Backup"])), (l()(), t.Db(12, 0, null, null, 11, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(13, 0, null, null, 1, "label", [
                    ["style", "width: 100%"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Check difference with the last backup"])), (l()(), t.Db(15, 0, null, null, 8, "label", [
                    ["class", "kt-checkbox kt-checkbox--bold kt-checkbox--brand"]
                ], null, null, null, null, null)), (l()(), t.Db(16, 0, null, null, 5, "input", [
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
                        a = l.component;
                    return "change" === n && (e = !1 !== t.Pb(l, 17).onChange(u.target.checked) && e), "blur" === n && (e = !1 !== t.Pb(l, 17).onTouched() && e), "ngModelChange" === n && (e = !1 !== (a.diffs.full = u) && e), e
                }), null, null)), t.Cb(17, 16384, null, 0, D.b, [t.M, t.n], null, null), t.Ub(1024, null, D.n, (function(l) {
                    return [l]
                }), [D.b]), t.Cb(19, 671744, null, 0, D.s, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, D.n]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), t.Ub(2048, null, D.o, null, [D.s]), t.Cb(21, 16384, null, 0, D.p, [
                    [4, D.o]
                ], null, null), (l()(), t.Xb(-1, null, [" Enable "])), (l()(), t.Db(23, 0, null, null, 0, "span", [], null, null, null, null, null)), (l()(), t.Db(24, 0, null, null, 8, "div", [
                    ["class", "col-6"]
                ], null, null, null, null, null)), (l()(), t.Db(25, 0, null, null, 7, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(26, 0, null, null, 1, "label", [], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Upload File"])), (l()(), t.Db(28, 0, null, null, 2, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), t.Db(29, 0, null, null, 1, "input", [
                    ["ng2FileSelect", ""],
                    ["type", "file"]
                ], null, [
                    [null, "change"]
                ], (function(l, n, u) {
                    var e = !0;
                    return "change" === n && (e = !1 !== t.Pb(l, 30).onChange() && e), e
                }), null, null)), t.Cb(30, 16384, null, 0, W.a, [t.n], {
                    uploader: [0, "uploader"]
                }, null), (l()(), t.sb(16777216, null, null, 1, null, dl)), t.Cb(32, 278528, null, 0, b.l, [t.Y, t.U, t.y], {
                    ngForOf: [0, "ngForOf"]
                }, null), (l()(), t.Db(33, 0, null, null, 1, "kt-main-table", [], null, null, null, Q.b, Q.a)), t.Cb(34, 114688, null, 0, ll.a, [nl.a, ul.a, _.j, c.q, c.a, tl.a, el.a], {
                    options: [0, "options"],
                    reload: [1, "reload"]
                }, null)], (function(l, n) {
                    var u = n.component;
                    l(n, 19, 0, u.diffs.full), l(n, 30, 0, u.uploader), l(n, 32, 0, u.uploader.queue), l(n, 34, 0, u.tableOptions_full, u.table_reload)
                }), (function(l, n) {
                    l(n, 16, 0, t.Pb(n, 21).ngClassUntouched, t.Pb(n, 21).ngClassTouched, t.Pb(n, 21).ngClassPristine, t.Pb(n, 21).ngClassDirty, t.Pb(n, 21).ngClassValid, t.Pb(n, 21).ngClassInvalid, t.Pb(n, 21).ngClassPending)
                }))
            }

            function fl(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 25, "div", [
                    ["class", "col-9 h-100"]
                ], null, null, null, null, null)), (l()(), t.Db(1, 0, null, null, 24, "div", [
                    ["class", "card m-3 h-100-20"]
                ], null, null, null, null, null)), (l()(), t.Db(2, 0, null, null, 23, "div", [
                    ["class", "card-body backup-tabs"]
                ], null, null, null, null, null)), (l()(), t.Db(3, 0, null, null, 1, "h5", [
                    ["class", "card-title"]
                ], null, null, null, null, null)), (l()(), t.Xb(-1, null, ["Backup Tables"])), (l()(), t.Db(5, 0, null, null, 20, "ngb-tabset", [], null, null, null, r.k, r.f)), t.Cb(6, 2146304, null, 1, al.Y, [al.Z], null, null), t.Vb(603979776, 1, {
                    tabs: 1
                }), (l()(), t.Db(8, 0, null, null, 5, "ngb-tab", [
                    ["title", "Tacacs"]
                ], null, null, null, null, null)), t.Cb(9, 2113536, [
                    [1, 4]
                ], 2, al.W, [], {
                    title: [0, "title"]
                }, null), t.Vb(603979776, 2, {
                    titleTpls: 1
                }), t.Vb(603979776, 3, {
                    contentTpls: 1
                }), (l()(), t.sb(0, null, null, 1, null, cl)), t.Cb(13, 16384, [
                    [3, 4]
                ], 0, al.X, [t.U], null, null), (l()(), t.Db(14, 0, null, null, 5, "ngb-tab", [
                    ["title", "API"]
                ], null, null, null, null, null)), t.Cb(15, 2113536, [
                    [1, 4]
                ], 2, al.W, [], {
                    title: [0, "title"]
                }, null), t.Vb(603979776, 4, {
                    titleTpls: 1
                }), t.Vb(603979776, 5, {
                    contentTpls: 1
                }), (l()(), t.sb(0, null, null, 1, null, pl)), t.Cb(19, 16384, [
                    [5, 4]
                ], 0, al.X, [t.U], null, null), (l()(), t.Db(20, 0, null, null, 5, "ngb-tab", [
                    ["title", "Full Backup"]
                ], null, null, null, null, null)), t.Cb(21, 2113536, [
                    [1, 4]
                ], 2, al.W, [], {
                    title: [0, "title"]
                }, null), t.Vb(603979776, 6, {
                    titleTpls: 1
                }), t.Vb(603979776, 7, {
                    contentTpls: 1
                }), (l()(), t.sb(0, null, null, 1, null, gl)), t.Cb(25, 16384, [
                    [7, 4]
                ], 0, al.X, [t.U], null, null)], (function(l, n) {
                    l(n, 9, 0, "Tacacs"), l(n, 15, 0, "API"), l(n, 21, 0, "Full Backup")
                }), null)
            }

            function hl(l) {
                return t.Zb(0, [(l()(), t.Db(0, 0, null, null, 1, "kt-api-backup", [], null, null, null, fl, sl)), t.Cb(1, 114688, null, 0, ol, [il, _.j], null, null)], (function(l, n) {
                    l(n, 1, 0)
                }), null)
            }
            var ml = t.zb("kt-api-backup", ol, hl, {}, {}, []),
                vl = u("18CH"),
                yl = u("Fzqc"),
                Dl = u("dWZg"),
                Cl = u("qAlS"),
                kl = u("wOIO");
            u.d(n, "GuiModuleNgFactory", (function() {
                return Pl
            }));
            var Pl = t.Ab(o, [], (function(l) {
                return t.Mb([t.Nb(512, t.k, t.lb, [
                    [8, [s.a, r.a, r.b, r.p, r.q, r.m, r.n, r.o, y, J, ml]],
                    [3, t.k], t.E
                ]), t.Nb(4608, b.o, b.n, [t.A, [2, b.I]]), t.Nb(4608, D.A, D.A, []), t.Nb(4608, al.E, al.E, [t.k, t.w, al.yb, al.F]), t.Nb(1073742336, b.c, b.c, []), t.Nb(1073742336, c.t, c.t, [
                    [2, c.z],
                    [2, c.q]
                ]), t.Nb(1073742336, D.z, D.z, []), t.Nb(1073742336, D.k, D.k, []), t.Nb(1073742336, al.c, al.c, []), t.Nb(1073742336, al.g, al.g, []), t.Nb(1073742336, al.h, al.h, []), t.Nb(1073742336, al.l, al.l, []), t.Nb(1073742336, al.n, al.n, []), t.Nb(1073742336, al.u, al.u, []), t.Nb(1073742336, al.A, al.A, []), t.Nb(1073742336, al.G, al.G, []), t.Nb(1073742336, al.K, al.K, []), t.Nb(1073742336, al.P, al.P, []), t.Nb(1073742336, al.S, al.S, []), t.Nb(1073742336, al.V, al.V, []), t.Nb(1073742336, al.ab, al.ab, []), t.Nb(1073742336, al.eb, al.eb, []), t.Nb(1073742336, al.hb, al.hb, []), t.Nb(1073742336, al.kb, al.kb, []), t.Nb(1073742336, al.H, al.H, []), t.Nb(1073742336, C.b, C.b, []), t.Nb(1073742336, W.b, W.b, []), t.Nb(1073742336, vl.a, vl.a, []), t.Nb(1073742336, yl.a, yl.a, []), t.Nb(1073742336, Dl.b, Dl.b, []), t.Nb(1073742336, Cl.g, Cl.g, []), t.Nb(1073742336, Cl.e, Cl.e, []), t.Nb(1073742336, kl.a, kl.a, []), t.Nb(1073742336, o, o, []), t.Nb(1024, c.m, (function() {
                    return [
                        [{
                            path: "",
                            component: p
                        }, {
                            path: "users",
                            loadChildren: e
                        }, {
                            path: "user-groups",
                            loadChildren: a
                        }, {
                            path: "upgrade",
                            component: S
                        }, {
                            path: "backup",
                            component: ol
                        }, {
                            path: "settings",
                            loadChildren: i
                        }]
                    ]
                }), [])])
            }))
        }
    }
]);