(window.webpackJsonp = window.webpackJsonp || []).push([
    [2], {
        "+6XX": function(t, e, n) {
            var r = n("y1pI");
            t.exports = function(t) {
                return r(this.__data__, t) > -1
            }
        },
        "+K+b": function(t, e, n) {
            var r = n("JHRd");
            t.exports = function(t) {
                var e = new t.constructor(t.byteLength);
                return new r(e).set(new r(t)), e
            }
        },
        "+Qka": function(t, e, n) {
            var r = n("fmRc"),
                o = n("t2Dn"),
                i = n("cq/+"),
                a = n("T1AV"),
                s = n("GoyQ"),
                l = n("mTTR"),
                u = n("itsj");
            t.exports = function t(e, n, c, d, h) {
                e !== n && i(n, (function(i, l) {
                    if (h || (h = new r), s(i)) a(e, n, l, c, t, d, h);
                    else {
                        var f = d ? d(u(e, l), i, l + "", e, n, h) : void 0;
                        void 0 === f && (f = i), o(e, l, f)
                    }
                }), l)
            }
        },
        "+c4W": function(t, e, n) {
            var r = n("711d"),
                o = n("4/ic"),
                i = n("9ggG"),
                a = n("9Nap");
            t.exports = function(t) {
                return i(t) ? r(a(t)) : o(t)
            }
        },
        "+iFO": function(t, e, n) {
            var r = n("dTAl"),
                o = n("LcsW"),
                i = n("6sVZ");
            t.exports = function(t) {
                return "function" != typeof t.constructor || i(t) ? {} : r(o(t))
            }
        },
        "/9aa": function(t, e, n) {
            var r = n("NykK"),
                o = n("ExA7");
            t.exports = function(t) {
                return "symbol" == typeof t || o(t) && "[object Symbol]" == r(t)
            }
        },
        "03A+": function(t, e, n) {
            var r = n("JTzB"),
                o = n("ExA7"),
                i = Object.prototype,
                a = i.hasOwnProperty,
                s = i.propertyIsEnumerable,
                l = r(function() {
                    return arguments
                }()) ? r : function(t) {
                    return o(t) && a.call(t, "callee") && !s.call(t, "callee")
                };
            t.exports = l
        },
        "0Cz8": function(t, e, n) {
            var r = n("Xi7e"),
                o = n("ebwN"),
                i = n("e4Nc");
            t.exports = function(t, e) {
                var n = this.__data__;
                if (n instanceof r) {
                    var a = n.__data__;
                    if (!o || a.length < 199) return a.push([t, e]), this.size = ++n.size, this;
                    n = this.__data__ = new i(a)
                }
                return n.set(t, e), this.size = n.size, this
            }
        },
        "0ycA": function(t, e) {
            t.exports = function() {
                return []
            }
        },
        "1+5i": function(t, e, n) {
            var r = n("w/wX"),
                o = n("sEf8"),
                i = n("mdPL"),
                a = i && i.isSet,
                s = a ? o(a) : r;
            t.exports = s
        },
        "14R3": function(t, e) {
            "undefined" != typeof Element && ("function" != typeof Element.prototype.matches && (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.webkitMatchesSelector || function(t) {
                for (var e = (this.document || this.ownerDocument).querySelectorAll(t), n = 0; e[n] && e[n] !== this;) ++n;
                return Boolean(e[n])
            }), "function" != typeof Element.prototype.closest && (Element.prototype.closest = function(t) {
                for (var e = this; e && 1 === e.nodeType;) {
                    if (e.matches(t)) return e;
                    e = e.parentNode
                }
                return null
            }))
        },
        "16BW": function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return o
            }));
            var r = n("2vnA"),
                o = function() {
                    function t(t, e) {
                        this.templateRef = t, this.viewContainer = e, this.templateBindings = {}
                    }
                    return t.prototype.ngOnInit = function() {
                        this.view = this.viewContainer.createEmbeddedView(this.templateRef), this.dispose && this.dispose(), this.shouldDetach() && this.view.detach(), this.autoDetect(this.view)
                    }, t.prototype.shouldDetach = function() {
                        return this.mobxAutorun && this.mobxAutorun.detach
                    }, t.prototype.autoDetect = function(t) {
                        this.dispose = Object(r.b)((function() {
                            return t.detectChanges()
                        }))
                    }, t.prototype.ngOnDestroy = function() {
                        this.dispose && this.dispose()
                    }, t
                }()
        },
        "1hJj": function(t, e, n) {
            var r = n("e4Nc"),
                o = n("ftKO"),
                i = n("3A9y");

            function a(t) {
                var e = -1,
                    n = null == t ? 0 : t.length;
                for (this.__data__ = new r; ++e < n;) this.add(t[e])
            }
            a.prototype.add = a.prototype.push = o, a.prototype.has = i, t.exports = a
        },
        "2ajD": function(t, e) {
            t.exports = function(t) {
                return t != t
            }
        },
        "2gN3": function(t, e, n) {
            var r = n("Kz5y");
            t.exports = r["__core-js_shared__"]
        },
        "2rQ4": function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return r
            }));
            var r = function() {
                return function() {}
            }()
        },
        "2vnA": function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return Ut
            })), n.d(e, "b", (function() {
                return qt
            })), n.d(e, "c", (function() {
                return Q
            })), n.d(e, "d", (function() {
                return Z
            })), n.d(e, "e", (function() {
                return Zt
            }));
            var r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                },
                o = function() {
                    return (o = Object.assign || function(t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++)
                            for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        return t
                    }).apply(this, arguments)
                };

            function i(t) {
                var e = "function" == typeof Symbol && t[Symbol.iterator],
                    n = 0;
                return e ? e.call(t) : {
                    next: function() {
                        return t && n >= t.length && (t = void 0), {
                            value: t && t[n++],
                            done: !t
                        }
                    }
                }
            }

            function a(t, e) {
                var n = "function" == typeof Symbol && t[Symbol.iterator];
                if (!n) return t;
                var r, o, i = n.call(t),
                    a = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
                } catch (s) {
                    o = {
                        error: s
                    }
                } finally {
                    try {
                        r && !r.done && (n = i.return) && n.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return a
            }

            function s() {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(a(arguments[e]));
                return t
            }
            var l = "An invariant failed, however the error is obfuscated because this is an production build.",
                u = [];
            Object.freeze(u);
            var c = {};

            function d() {
                return ++At.mobxGuid
            }

            function h(t) {
                throw f(!1, t), "X"
            }

            function f(t, e) {
                if (!t) throw new Error("[mobx] " + (e || l))
            }

            function p(t) {
                var e = !1;
                return function() {
                    if (!e) return e = !0, t.apply(this, arguments)
                }
            }
            Object.freeze(c);
            var g = function() {};

            function v(t) {
                return null !== t && "object" == typeof t
            }

            function y(t) {
                if (null === t || "object" != typeof t) return !1;
                var e = Object.getPrototypeOf(t);
                return e === Object.prototype || null === e
            }

            function b(t, e, n) {
                Object.defineProperty(t, e, {
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                    value: n
                })
            }

            function m(t, e) {
                var n = "isMobX" + t;
                return e.prototype[n] = !0,
                    function(t) {
                        return v(t) && !0 === t[n]
                    }
            }

            function x(t) {
                return t instanceof Map
            }

            function w(t) {        
                return t instanceof Set
            }

            function _(t) {
                var e = new Set;
                for (var n in t) e.add(n);
                return Object.getOwnPropertySymbols(t).forEach((function(n) {
                    Object.getOwnPropertyDescriptor(t, n).enumerable && e.add(n)
                })), Array.from(e)
            }

            function O(t) {
                return t && t.toString ? t.toString() : new String(t).toString()
            }

            function k(t) {
                return null === t ? null : "object" == typeof t ? "" + t : t
            }
            var S = Symbol("mobx administration"),
                C = function() {
                    function t(t) {
                        void 0 === t && (t = "Atom@" + d()), this.name = t, this.isPendingUnobservation = !1, this.isBeingObserved = !1, this.observers = new Set, this.diffValue = 0, this.lastAccessedBy = 0, this.lowestObserverState = tt.NOT_TRACKING
                    }
                    return t.prototype.onBecomeObserved = function() {
                        this.onBecomeObservedListeners && this.onBecomeObservedListeners.forEach((function(t) {
                            return t()
                        }))
                    }, t.prototype.onBecomeUnobserved = function() {
                        this.onBecomeUnobservedListeners && this.onBecomeUnobservedListeners.forEach((function(t) {
                            return t()
                        }))
                    }, t.prototype.reportObserved = function() {
                        return Nt(this)
                    }, t.prototype.reportChanged = function() {
                        Pt(),
                            function(t) {
                                t.lowestObserverState !== tt.STALE && (t.lowestObserverState = tt.STALE, t.observers.forEach((function(e) {
                                    e.dependenciesState === tt.UP_TO_DATE && (e.isTracing !== et.NONE && It(e, t), e.onBecomeStale()), e.dependenciesState = tt.STALE
                                })))
                            }(this), Et()
                    }, t.prototype.toString = function() {
                        return this.name
                    }, t
                }(),
                A = m("Atom", C);

            function M(t, e, n) {
                void 0 === e && (e = g), void 0 === n && (n = g);
                var r = new C(t);
                return e !== g && Jt("onBecomeObserved", r, e, void 0), n !== g && Xt(r, n), r
            }
            var j = {
                    identity: function(t, e) {
                        return t === e
                    },
                    structural: function(t, e) {
                        return Fe(t, e)
                    },
                    default: function(t, e) {
                        return Object.is(t, e)
                    },
                    shallow: function(t, e) {
                        return Fe(t, e, 1)
                    }
                },
                D = Symbol("mobx did run lazy initializers"),
                P = Symbol("mobx pending decorators"),
                E = {},
                N = {};

            function I(t, e) {
                var n = e ? E : N;
                return n[t] || (n[t] = {
                    configurable: !0,
                    enumerable: e,
                    get: function() {
                        return T(this), this[t]
                    },
                    set: function(e) {
                        T(this), this[t] = e
                    }
                })
            }

            function T(t) {
                var e, n;
                if (!0 !== t[D]) {
                    var r = t[P];
                    if (r) {
                        b(t, D, !0);
                        var o = s(Object.getOwnPropertySymbols(r), Object.keys(r));
                        try {
                            for (var a = i(o), l = a.next(); !l.done; l = a.next()) {
                                var u = r[l.value];
                                u.propertyCreator(t, u.prop, u.descriptor, u.decoratorTarget, u.decoratorArguments)
                            }
                        } catch (c) {
                            e = {
                                error: c
                            }
                        } finally {
                            try {
                                l && !l.done && (n = a.return) && n.call(a)
                            } finally {
                                if (e) throw e.error
                            }
                        }
                    }
                }
            }

            function R(t, e) {
                return function() {
                    var n, r = function(r, i, a, s) {
                        return !0 === s ? (e(r, i, a, r, n), null) : (Object.prototype.hasOwnProperty.call(r, P) || b(r, P, o({}, r[P])), r[P][i] = {
                            prop: i,
                            propertyCreator: e,
                            descriptor: a,
                            decoratorTarget: r,
                            decoratorArguments: n
                        }, I(i, t))
                    };
                    return F(arguments) ? (n = u, r.apply(null, arguments)) : (n = Array.prototype.slice.call(arguments), r)
                }
            }

            function F(t) {
                return (2 === t.length || 3 === t.length) && ("string" == typeof t[1] || "symbol" == typeof t[1]) || 4 === t.length && !0 === t[3]
            }

            function L(t, e, n) {
                return ne(t) ? t : Array.isArray(t) ? Z.array(t, {
                    name: n
                }) : y(t) ? Z.object(t, void 0, {
                    name: n
                }) : x(t) ? Z.map(t, {
                    name: n
                }) : w(t) ? Z.set(t, {
                    name: n
                }) : t
            }

            function B(t) {
                return t
            }

            function V(t) {
                f(t);
                var e = R(!0, (function(e, n, r, o, i) {
                        var a = r ? r.initializer ? r.initializer.call(e) : r.value : void 0;
                        je(e).addObservableProp(n, a, t)
                    })),
                    n = ("undefined" != typeof process && process, e);
                return n.enhancer = t, n
            }
            var z = {
                deep: !0,
                name: void 0,
                defaultDecorator: void 0,
                proxy: !0
            };

            function H(t) {
                return null == t ? z : "string" == typeof t ? {
                    name: t,
                    deep: !0,
                    proxy: !0
                } : t
            }
            Object.freeze(z);
            var W = V(L),
                U = V((function(t, e, n) {
                    return null == t ? t : Ie(t) || xe(t) || ke(t) || Ae(t) ? t : Array.isArray(t) ? Z.array(t, {
                        name: n,
                        deep: !1
                    }) : y(t) ? Z.object(t, void 0, {
                        name: n,
                        deep: !1
                    }) : x(t) ? Z.map(t, {
                        name: n,
                        deep: !1
                    }) : w(t) ? Z.set(t, {
                        name: n,
                        deep: !1
                    }) : h(!1)
                })),
                G = V(B),
                q = V((function(t, e, n) {
                    return Fe(t, e) ? e : t
                }));

            function K(t) {
                return t.defaultDecorator ? t.defaultDecorator.enhancer : !1 === t.deep ? B : L
            }
            var Y = {
                    box: function(t, e) {
                        arguments.length > 2 && X("box");
                        var n = H(e);
                        return new xt(t, K(n), n.name, !0, n.equals)
                    },
                    array: function(t, e) {
                        arguments.length > 2 && X("array");
                        var n = H(e);
                        return ge(t, K(n), n.name)
                    },
                    map: function(t, e) {
                        arguments.length > 2 && X("map");
                        var n = H(e);
                        return new Oe(t, K(n), n.name)
                    },
                    set: function(t, e) {
                        arguments.length > 2 && X("set");
                        var n = H(e);
                        return new Ce(t, K(n), n.name)
                    },
                    object: function(t, e, n) {
                        "string" == typeof arguments[1] && X("object");
                        var r = H(n);
                        if (!1 === r.proxy) return $t({}, t, e, r);
                        var o = Qt(r),
                            i = $t({}, void 0, void 0, r),
                            a = se(i);
                        return te(a, t, e, o), a
                    },
                    ref: G,
                    shallow: U,
                    deep: W,
                    struct: q
                },
                Z = function(t, e, n) {
                    if ("string" == typeof arguments[1] || "symbol" == typeof arguments[1]) return W.apply(null, arguments);
                    if (ne(t)) return t;
                    var r = y(t) ? Z.object(t, e, n) : Array.isArray(t) ? Z.array(t, e) : x(t) ? Z.map(t, e) : w(t) ? Z.set(t, e) : t;
                    if (r !== t) return r;
                    h(!1)
                };

            function X(t) {
                h("Expected one or two arguments to observable." + t + ". Did you accidentally try to use observable." + t + " as decorator?")
            }
            Object.keys(Y).forEach((function(t) {
                return Z[t] = Y[t]
            }));
            var J = R(!1, (function(t, e, n, r, i) {
                    var a = n.get,
                        s = n.set,
                        l = i[0] || {};
                    je(t).addComputedProp(t, e, o({
                        get: a,
                        set: s,
                        context: t
                    }, l))
                })),
                $ = J({
                    equals: j.structural
                }),
                Q = function(t, e, n) {
                    if ("string" == typeof e) return J.apply(null, arguments);
                    if (null !== t && "object" == typeof t && 1 === arguments.length) return J.apply(null, arguments);
                    var r = "object" == typeof e ? e : {};
                    return r.get = t, r.set = "function" == typeof e ? e : r.set, r.name = r.name || t.name || "", new wt(r)
                };
            Q.struct = $;
            var tt = function(t) {
                    return t[t.NOT_TRACKING = -1] = "NOT_TRACKING", t[t.UP_TO_DATE = 0] = "UP_TO_DATE", t[t.POSSIBLY_STALE = 1] = "POSSIBLY_STALE", t[t.STALE = 2] = "STALE", t
                }({}),
                et = function(t) {
                    return t[t.NONE = 0] = "NONE", t[t.LOG = 1] = "LOG", t[t.BREAK = 2] = "BREAK", t
                }({}),
                nt = function() {
                    return function(t) {
                        this.cause = t
                    }
                }();

            function rt(t) {
                return t instanceof nt
            }

            function ot(t) {
                switch (t.dependenciesState) {
                    case tt.UP_TO_DATE:
                        return !1;
                    case tt.NOT_TRACKING:
                    case tt.STALE:
                        return !0;
                    case tt.POSSIBLY_STALE:
                        for (var e = ut(), n = t.observing, r = n.length, o = 0; o < r; o++) {
                            var i = n[o];
                            if (_t(i)) {
                                if (At.disableErrorBoundaries) i.get();
                                else try {
                                    i.get()
                                } catch (a) {
                                    return ct(e), !0
                                }
                                if (t.dependenciesState === tt.STALE) return ct(e), !0
                            }
                        }
                        return ft(t), ct(e), !1
                }
            }

            function it(t) {
                var e = t.observers.size > 0;
                At.computationDepth > 0 && e && h(!1), At.allowStateChanges || !e && "strict" !== At.enforceActions || h(!1)
            }

            function at(t, e, n) {
                var r = dt(!0);
                ft(t), t.newObserving = new Array(t.observing.length + 100), t.unboundDepsCount = 0, t.runId = ++At.runId;
                var o, i = At.trackingDerivation;
                if (At.trackingDerivation = t, !0 === At.disableErrorBoundaries) o = e.call(n);
                else try {
                    o = e.call(n)
                } catch (a) {
                    o = new nt(a)
                }
                return At.trackingDerivation = i,
                    function(t) {
                        for (var e = t.observing, n = t.observing = t.newObserving, r = tt.UP_TO_DATE, o = 0, i = t.unboundDepsCount, a = 0; a < i; a++) 0 === (s = n[a]).diffValue && (s.diffValue = 1, o !== a && (n[o] = s), o++), s.dependenciesState > r && (r = s.dependenciesState);
                        for (n.length = o, t.newObserving = null, i = e.length; i--;) 0 === (s = e[i]).diffValue && jt(s, t), s.diffValue = 0;
                        for (; o--;) {
                            var s;
                            1 === (s = n[o]).diffValue && (s.diffValue = 0, Mt(s, t))
                        }
                        r !== tt.UP_TO_DATE && (t.dependenciesState = r, t.onBecomeStale())
                    }(t), ht(r), o
            }

            function st(t) {
                var e = t.observing;
                t.observing = [];
                for (var n = e.length; n--;) jt(e[n], t);
                t.dependenciesState = tt.NOT_TRACKING
            }

            function lt(t) {
                var e = ut();
                try {
                    return t()
                } finally {
                    ct(e)
                }
            }

            function ut() {
                var t = At.trackingDerivation;
                return At.trackingDerivation = null, t
            }

            function ct(t) {
                At.trackingDerivation = t
            }

            function dt(t) {
                var e = At.allowStateReads;
                return At.allowStateReads = t, e
            }

            function ht(t) {
                At.allowStateReads = t
            }

            function ft(t) {
                if (t.dependenciesState !== tt.UP_TO_DATE) {
                    t.dependenciesState = tt.UP_TO_DATE;
                    for (var e = t.observing, n = e.length; n--;) e[n].lowestObserverState = tt.UP_TO_DATE
                }
            }
            var pt = 0,
                gt = 1;

            function vt(t, e, n) {
                var r = function() {
                    return yt(0, e, n || this, arguments)
                };
                return r.isMobxAction = !0, r
            }

            function yt(t, e, n, r) {
                var o = function(t, e, n) {
                    var r = ut();
                    Pt();
                    var o = {
                        prevDerivation: r,
                        prevAllowStateChanges: bt(!0),
                        prevAllowStateReads: dt(!0),
                        notifySpy: !1,
                        startTime: 0,
                        actionId: gt++,
                        parentActionId: pt
                    };
                    return pt = o.actionId, o
                }();
                try {
                    return e.apply(n, r)
                } catch (i) {
                    throw o.error = i, i
                } finally {
                    ! function(t) {
                        pt !== t.actionId && h("invalid action stack. did you forget to finish an action?"), pt = t.parentActionId, void 0 !== t.error && (At.suppressReactionErrors = !0), mt(t.prevAllowStateChanges), ht(t.prevAllowStateReads), Et(), ct(t.prevDerivation), At.suppressReactionErrors = !1
                    }(o)
                }
            }

            function bt(t) {
                var e = At.allowStateChanges;
                return At.allowStateChanges = t, e
            }

            function mt(t) {
                At.allowStateChanges = t
            }
            var xt = function(t) {
                    function e(e, n, r, o, i) {
                        void 0 === r && (r = "ObservableValue@" + d()), void 0 === o && (o = !0), void 0 === i && (i = j.default);
                        var a = t.call(this, r) || this;
                        return a.enhancer = n, a.name = r, a.equals = i, a.hasUnreportedChange = !1, a.value = n(e, void 0, r), a
                    }
                    return function(t, e) {
                        function n() {
                            this.constructor = t
                        }
                        r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                    }(e, t), e.prototype.dehanceValue = function(t) {
                        return void 0 !== this.dehancer ? this.dehancer(t) : t
                    }, e.prototype.set = function(t) {
                        (t = this.prepareNewValue(t)) !== At.UNCHANGED && this.setNewValue(t)
                    }, e.prototype.prepareNewValue = function(t) {
                        if (it(this), le(this)) {
                            var e = ce(this, {
                                object: this,
                                type: "update",
                                newValue: t
                            });
                            if (!e) return At.UNCHANGED;
                            t = e.newValue
                        }
                        return t = this.enhancer(t, this.value, this.name), this.equals(this.value, t) ? At.UNCHANGED : t
                    }, e.prototype.setNewValue = function(t) {
                        var e = this.value;
                        this.value = t, this.reportChanged(), de(this) && fe(this, {
                            type: "update",
                            object: this,
                            newValue: t,
                            oldValue: e
                        })
                    }, e.prototype.get = function() {
                        return this.reportObserved(), this.dehanceValue(this.value)
                    }, e.prototype.intercept = function(t) {
                        return ue(this, t)
                    }, e.prototype.observe = function(t, e) {
                        return e && t({
                            object: this,
                            type: "update",
                            newValue: this.value,
                            oldValue: void 0
                        }), he(this, t)
                    }, e.prototype.toJSON = function() {
                        return this.get()
                    }, e.prototype.toString = function() {
                        return this.name + "[" + this.value + "]"
                    }, e.prototype.valueOf = function() {
                        return k(this.get())
                    }, e.prototype[Symbol.toPrimitive] = function() {
                        return this.valueOf()
                    }, e
                }(C),
                wt = (m("ObservableValue", xt), function() {
                    function t(t) {
                        this.dependenciesState = tt.NOT_TRACKING, this.observing = [], this.newObserving = null, this.isBeingObserved = !1, this.isPendingUnobservation = !1, this.observers = new Set, this.diffValue = 0, this.runId = 0, this.lastAccessedBy = 0, this.lowestObserverState = tt.UP_TO_DATE, this.unboundDepsCount = 0, this.__mapid = "#" + d(), this.value = new nt(null), this.isComputing = !1, this.isRunningSetter = !1, this.isTracing = et.NONE, this.derivation = t.get, this.name = t.name || "ComputedValue@" + d(), t.set && (this.setter = vt(0, t.set)), this.equals = t.equals || (t.compareStructural || t.struct ? j.structural : j.default), this.scope = t.context, this.requiresReaction = !!t.requiresReaction, this.keepAlive = !!t.keepAlive
                    }
                    return t.prototype.onBecomeStale = function() {
                        ! function(t) {
                            t.lowestObserverState === tt.UP_TO_DATE && (t.lowestObserverState = tt.POSSIBLY_STALE, t.observers.forEach((function(e) {
                                e.dependenciesState === tt.UP_TO_DATE && (e.dependenciesState = tt.POSSIBLY_STALE, e.isTracing !== et.NONE && It(e, t), e.onBecomeStale())
                            })))
                        }(this)
                    }, t.prototype.onBecomeObserved = function() {
                        this.onBecomeObservedListeners && this.onBecomeObservedListeners.forEach((function(t) {
                            return t()
                        }))
                    }, t.prototype.onBecomeUnobserved = function() {
                        this.onBecomeUnobservedListeners && this.onBecomeUnobservedListeners.forEach((function(t) {
                            return t()
                        }))
                    }, t.prototype.get = function() {
                        this.isComputing && h("Cycle detected in computation " + this.name + ": " + this.derivation), 0 !== At.inBatch || 0 !== this.observers.size || this.keepAlive ? (Nt(this), ot(this) && this.trackAndCompute() && function(t) {
                            t.lowestObserverState !== tt.STALE && (t.lowestObserverState = tt.STALE, t.observers.forEach((function(e) {
                                e.dependenciesState === tt.POSSIBLY_STALE ? e.dependenciesState = tt.STALE : e.dependenciesState === tt.UP_TO_DATE && (t.lowestObserverState = tt.UP_TO_DATE)
                            })))
                        }(this)) : ot(this) && (this.warnAboutUntrackedRead(), Pt(), this.value = this.computeValue(!1), Et());
                        var t = this.value;
                        if (rt(t)) throw t.cause;
                        return t
                    }, t.prototype.peek = function() {
                        var t = this.computeValue(!1);
                        if (rt(t)) throw t.cause;
                        return t
                    }, t.prototype.set = function(t) {
                        if (this.setter) {
                            f(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?"), this.isRunningSetter = !0;
                            try {
                                this.setter.call(this.scope, t)
                            } finally {
                                this.isRunningSetter = !1
                            }
                        } else f(!1, !1)
                    }, t.prototype.trackAndCompute = function() {
                        var t = this.value,
                            e = this.dependenciesState === tt.NOT_TRACKING,
                            n = this.computeValue(!0),
                            r = e || rt(t) || rt(n) || !this.equals(t, n);
                        return r && (this.value = n), r
                    }, t.prototype.computeValue = function(t) {
                        var e;
                        if (this.isComputing = !0, At.computationDepth++, t) e = at(this, this.derivation, this.scope);
                        else if (!0 === At.disableErrorBoundaries) e = this.derivation.call(this.scope);
                        else try {
                            e = this.derivation.call(this.scope)
                        } catch (n) {
                            e = new nt(n)
                        }
                        return At.computationDepth--, this.isComputing = !1, e
                    }, t.prototype.suspend = function() {
                        this.keepAlive || (st(this), this.value = void 0)
                    }, t.prototype.observe = function(t, e) {
                        var n = this,
                            r = !0,
                            o = void 0;
                        return qt((function() {
                            var i = n.get();
                            if (!r || e) {
                                var a = ut();
                                t({
                                    type: "update",
                                    object: n,
                                    newValue: i,
                                    oldValue: o
                                }), ct(a)
                            }
                            r = !1, o = i
                        }))
                    }, t.prototype.warnAboutUntrackedRead = function() {}, t.prototype.toJSON = function() {
                        return this.get()
                    }, t.prototype.toString = function() {
                        return this.name + "[" + this.derivation.toString() + "]"
                    }, t.prototype.valueOf = function() {
                        return k(this.get())
                    }, t.prototype[Symbol.toPrimitive] = function() {
                        return this.valueOf()
                    }, t
                }()),
                _t = m("ComputedValue", wt),
                Ot = function() {
                    return function() {
                        this.version = 5, this.UNCHANGED = {}, this.trackingDerivation = null, this.computationDepth = 0, this.runId = 0, this.mobxGuid = 0, this.inBatch = 0, this.pendingUnobservations = [], this.pendingReactions = [], this.isRunningReactions = !1, this.allowStateChanges = !0, this.allowStateReads = !0, this.enforceActions = !1, this.spyListeners = [], this.globalReactionErrorHandlers = [], this.computedRequiresReaction = !1, this.reactionRequiresObservable = !1, this.observableRequiresReaction = !1, this.computedConfigurable = !1, this.disableErrorBoundaries = !1, this.suppressReactionErrors = !1
                    }
                }(),
                kt = {};

            function St() {
                return "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : kt
            }
            var Ct = !0,
                At = function() {
                    var t = St();
                    return t.__mobxInstanceCount > 0 && !t.__mobxGlobals && (Ct = !1), t.__mobxGlobals && t.__mobxGlobals.version !== (new Ot).version && (Ct = !1), Ct ? t.__mobxGlobals ? (t.__mobxInstanceCount += 1, t.__mobxGlobals.UNCHANGED || (t.__mobxGlobals.UNCHANGED = {}), t.__mobxGlobals) : (t.__mobxInstanceCount = 1, t.__mobxGlobals = new Ot) : (setTimeout((function() {
                        h("There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`")
                    }), 1), new Ot)
                }();

            function Mt(t, e) {
                t.observers.add(e), t.lowestObserverState > e.dependenciesState && (t.lowestObserverState = e.dependenciesState)
            }

            function jt(t, e) {
                t.observers.delete(e), 0 === t.observers.size && Dt(t)
            }

            function Dt(t) {
                !1 === t.isPendingUnobservation && (t.isPendingUnobservation = !0, At.pendingUnobservations.push(t))
            }

            function Pt() {
                At.inBatch++
            }

            function Et() {
                if (0 == --At.inBatch) {
                    Lt();
                    for (var t = At.pendingUnobservations, e = 0; e < t.length; e++) {
                        var n = t[e];
                        n.isPendingUnobservation = !1, 0 === n.observers.size && (n.isBeingObserved && (n.isBeingObserved = !1, n.onBecomeUnobserved()), n instanceof wt && n.suspend())
                    }
                    At.pendingUnobservations = []
                }
            }

            function Nt(t) {
                var e = At.trackingDerivation;
                return null !== e ? (e.runId !== t.lastAccessedBy && (t.lastAccessedBy = e.runId, e.newObserving[e.unboundDepsCount++] = t, t.isBeingObserved || (t.isBeingObserved = !0, t.onBecomeObserved())), !0) : (0 === t.observers.size && At.inBatch > 0 && Dt(t), !1)
            }

            function It(t, e) {
                if (console.log("[mobx.trace] '" + t.name + "' is invalidated due to a change in: '" + e.name + "'"), t.isTracing === et.BREAK) {
                    var n = [];
                    ! function t(e, n, r) {
                        n.length >= 1e3 ? n.push("(and many more)") : (n.push("" + new Array(r).join("\t") + e.name), e.dependencies && e.dependencies.forEach((function(e) {
                            return t(e, n, r + 1)
                        })))
                    }((r = t, ee(Te(r, void 0))), n, 1), new Function("debugger;\n/*\nTracing '" + t.name + "'\n\nYou are entering this break point because derivation '" + t.name + "' is being traced and '" + e.name + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (t instanceof wt ? t.derivation.toString().replace(/[*]\//g, "/") : "") + "\n\nThe dependencies for this derivation are:\n\n" + n.join("\n") + "\n*/\n    ")()
                }
                var r
            }
            var Tt = function() {
                    function t(t, e, n, r) {
                        void 0 === t && (t = "Reaction@" + d()), void 0 === r && (r = !1), this.name = t, this.onInvalidate = e, this.errorHandler = n, this.requiresObservable = r, this.observing = [], this.newObserving = [], this.dependenciesState = tt.NOT_TRACKING, this.diffValue = 0, this.runId = 0, this.unboundDepsCount = 0, this.__mapid = "#" + d(), this.isDisposed = !1, this._isScheduled = !1, this._isTrackPending = !1, this._isRunning = !1, this.isTracing = et.NONE
                    }
                    return t.prototype.onBecomeStale = function() {
                        this.schedule()
                    }, t.prototype.schedule = function() {
                        this._isScheduled || (this._isScheduled = !0, At.pendingReactions.push(this), Lt())
                    }, t.prototype.isScheduled = function() {
                        return this._isScheduled
                    }, t.prototype.runReaction = function() {
                        if (!this.isDisposed) {
                            if (Pt(), this._isScheduled = !1, ot(this)) {
                                this._isTrackPending = !0;
                                try {
                                    this.onInvalidate()
                                } catch (t) {
                                    this.reportExceptionInDerivation(t)
                                }
                            }
                            Et()
                        }
                    }, t.prototype.track = function(t) {
                        if (!this.isDisposed) {
                            Pt(), this._isRunning = !0;
                            var e = at(this, t, void 0);
                            this._isRunning = !1, this._isTrackPending = !1, this.isDisposed && st(this), rt(e) && this.reportExceptionInDerivation(e.cause), Et()
                        }
                    }, t.prototype.reportExceptionInDerivation = function(t) {
                        var e = this;
                        if (this.errorHandler) this.errorHandler(t, this);
                        else {
                            if (At.disableErrorBoundaries) throw t;
                            var n = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'";
                            At.suppressReactionErrors ? console.warn("[mobx] (error in reaction '" + this.name + "' suppressed, fix error of causing action below)") : console.error(n, t), At.globalReactionErrorHandlers.forEach((function(n) {
                                return n(t, e)
                            }))
                        }
                    }, t.prototype.dispose = function() {
                        this.isDisposed || (this.isDisposed = !0, this._isRunning || (Pt(), st(this), Et()))
                    }, t.prototype.getDisposer = function() {
                        var t = this.dispose.bind(this);
                        return t[S] = this, t
                    }, t.prototype.toString = function() {
                        return "Reaction[" + this.name + "]"
                    }, t.prototype.trace = function(t) {
                        void 0 === t && (t = !1),
                            function() {
                                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                                var n = !1;
                                "boolean" == typeof t[t.length - 1] && (n = t.pop());
                                var r = function(t) {
                                    switch (t.length) {
                                        case 0:
                                            return At.trackingDerivation;
                                        case 1:
                                            return Te(t[0]);
                                        case 2:
                                            return Te(t[0], t[1])
                                    }
                                }(t);
                                if (!r) return h(!1);
                                r.isTracing === et.NONE && console.log("[mobx.trace] '" + r.name + "' tracing enabled"), r.isTracing = n ? et.BREAK : et.LOG
                            }(this, t)
                    }, t
                }(),
                Rt = 100,
                Ft = function(t) {
                    return t()
                };

            function Lt() {
                At.inBatch > 0 || At.isRunningReactions || Ft(Bt)
            }

            function Bt() {
                At.isRunningReactions = !0;
                for (var t = At.pendingReactions, e = 0; t.length > 0;) {
                    ++e === Rt && (console.error("Reaction doesn't converge to a stable state after " + Rt + " iterations. Probably there is a cycle in the reactive function: " + t[0]), t.splice(0));
                    for (var n = t.splice(0), r = 0, o = n.length; r < o; r++) n[r].runReaction()
                }
                At.isRunningReactions = !1
            }
            var Vt = m("Reaction", Tt);

            function zt() {
                h(!1)
            }

            function Ht(t) {
                return function(e, n, r) {
                    if (r) {
                        if (r.value) return {
                            value: vt(0, r.value),
                            enumerable: !1,
                            configurable: !0,
                            writable: !0
                        };
                        var o = r.initializer;
                        return {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            initializer: function() {
                                return vt(0, o.call(this))
                            }
                        }
                    }
                    return Wt(t).apply(this, arguments)
                }
            }

            function Wt(t) {
                return function(e, n, r) {
                    Object.defineProperty(e, n, {
                        configurable: !0,
                        enumerable: !1,
                        get: function() {},
                        set: function(e) {
                            b(this, n, Ut(t, e))
                        }
                    })
                }
            }
            var Ut = function(t, e, n, r) {
                return 1 === arguments.length && "function" == typeof t ? vt(0, t) : 2 === arguments.length && "function" == typeof e ? vt(0, e) : 1 === arguments.length && "string" == typeof t ? Ht(t) : !0 !== r ? Ht(e).apply(null, arguments) : void b(t, e, vt(0, n.value, this))
            };

            function Gt(t, e, n) {
                b(t, e, vt(0, n.bind(t)))
            }

            function qt(t, e) {
                void 0 === e && (e = c);
                var n, r = e && e.name || t.name || "Autorun@" + d();
                if (e.scheduler || e.delay) {
                    var o = Yt(e),
                        i = !1;
                    n = new Tt(r, (function() {
                        i || (i = !0, o((function() {
                            i = !1, n.isDisposed || n.track(a)
                        })))
                    }), e.onError, e.requiresObservable)
                } else n = new Tt(r, (function() {
                    this.track(a)
                }), e.onError, e.requiresObservable);

                function a() {
                    t(n)
                }
                return n.schedule(), n.getDisposer()
            }
            Ut.bound = function(t, e, n, r) {
                return !0 === r ? (Gt(t, e, n.value), null) : n ? {
                    configurable: !0,
                    enumerable: !1,
                    get: function() {
                        return Gt(this, e, n.value || n.initializer.call(this)), this[e]
                    },
                    set: zt
                } : {
                    enumerable: !1,
                    configurable: !0,
                    set: function(t) {
                        Gt(this, e, t)
                    },
                    get: function() {}
                }
            };
            var Kt = function(t) {
                return t()
            };

            function Yt(t) {
                return t.scheduler ? t.scheduler : t.delay ? function(e) {
                    return setTimeout(e, t.delay)
                } : Kt
            }

            function Zt(t, e, n) {
                void 0 === n && (n = c);
                var r, o, i, a = n.name || "Reaction@" + d(),
                    s = Ut(a, n.onError ? (r = n.onError, o = e, function() {
                        try {
                            return o.apply(this, arguments)
                        } catch (t) {
                            r.call(this, t)
                        }
                    }) : e),
                    l = !n.scheduler && !n.delay,
                    u = Yt(n),
                    h = !0,
                    f = !1,
                    p = n.compareStructural ? j.structural : n.equals || j.default,
                    g = new Tt(a, (function() {
                        h || l ? v() : f || (f = !0, u(v))
                    }), n.onError, n.requiresObservable);

                function v() {
                    if (f = !1, !g.isDisposed) {
                        var e = !1;
                        g.track((function() {
                            var n = t(g);
                            e = h || !p(i, n), i = n
                        })), h && n.fireImmediately && s(i, g), h || !0 !== e || s(i, g), h && (h = !1)
                    }
                }
                return g.schedule(), g.getDisposer()
            }

            function Xt(t, e, n) {
                return Jt("onBecomeUnobserved", t, e, n)
            }

            function Jt(t, e, n, r) {
                var o = "function" == typeof r ? Te(e, n) : Te(e),
                    i = "function" == typeof r ? r : n,
                    a = t + "Listeners";
                return o[a] ? o[a].add(i) : o[a] = new Set([i]), "function" != typeof o[t] ? h(!1) : function() {
                    var t = o[a];
                    t && (t.delete(i), 0 === t.size && delete o[a])
                }
            }

            function $t(t, e, n, r) {
                var o = Qt(r = H(r));
                return T(t), je(t, r.name, o.enhancer), e && te(t, e, n, o), t
            }

            function Qt(t) {
                return t.defaultDecorator || (!1 === t.deep ? G : W)
            }

            function te(t, e, n, r) {
                var o, a;
                Pt();
                try {
                    var s = _(e);
                    try {
                        for (var l = i(s), u = l.next(); !u.done; u = l.next()) {
                            var c = u.value,
                                d = Object.getOwnPropertyDescriptor(e, c),
                                h = (n && c in n ? n[c] : d.get ? J : r)(t, c, d, !0);
                            h && Object.defineProperty(t, c, h)
                        }
                    } catch (f) {
                        o = {
                            error: f
                        }
                    } finally {
                        try {
                            u && !u.done && (a = l.return) && a.call(l)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                } finally {
                    Et()
                }
            }

            function ee(t) {
                var e, n, r = {
                    name: t.name
                };
                return t.observing && t.observing.length > 0 && (r.dependencies = (e = t.observing, n = [], e.forEach((function(t) {
                    -1 === n.indexOf(t) && n.push(t)
                })), n).map(ee)), r
            }

            function ne(t) {
                return 1 !== arguments.length && h(!1),
                    function(t, e) {
                        return null != t && (Ie(t) || !!t[S] || A(t) || Vt(t) || _t(t))
                    }(t)
            }

            function re(t, e) {
                void 0 === e && (e = void 0), Pt();
                try {
                    return t.apply(e)
                } finally {
                    Et()
                }
            }

            function oe(t) {
                return t[S]
            }

            function ie(t) {
                return "string" == typeof t || "number" == typeof t || "symbol" == typeof t
            }
            Error;
            var ae = {
                has: function(t, e) {
                    if (e === S || "constructor" === e || e === D) return !0;
                    var n = oe(t);
                    return ie(e) ? n.has(e) : e in t
                },
                get: function(t, e) {
                    if (e === S || "constructor" === e || e === D) return t[e];
                    var n = oe(t),
                        r = n.values.get(e);
                    if (r instanceof C) {
                        var o = r.get();
                        return void 0 === o && n.has(e), o
                    }
                    return ie(e) && n.has(e), t[e]
                },
                set: function(t, e, n) {
                    return !!ie(e) && (function t(e, n, r) {
                        if (2 !== arguments.length || Ae(e))
                            if (Ie(e)) {
                                var o = e[S];
                                o.values.get(n) ? o.write(n, r) : o.addObservableProp(n, r, o.defaultEnhancer)
                            } else if (ke(e)) e.set(n, r);
                        else if (Ae(e)) e.add(n);
                        else {
                            if (!xe(e)) return h(!1);
                            "number" != typeof n && (n = parseInt(n, 10)), f(n >= 0, "Not a valid index: '" + n + "'"), Pt(), n >= e.length && (e.length = n + 1), e[n] = r, Et()
                        } else {
                            Pt();
                            var i = n;
                            try {
                                for (var a in i) t(e, a, i[a])
                            } finally {
                                Et()
                            }
                        }
                    }(t, e, n), !0)
                },
                deleteProperty: function(t, e) {
                    return !!ie(e) && (oe(t).remove(e), !0)
                },
                ownKeys: function(t) {
                    return oe(t).keysAtom.reportObserved(), Reflect.ownKeys(t)
                },
                preventExtensions: function(t) {
                    return h("Dynamic observable objects cannot be frozen"), !1
                }
            };

            function se(t) {
                var e = new Proxy(t, ae);
                return t[S].proxy = e, e
            }

            function le(t) {
                return void 0 !== t.interceptors && t.interceptors.length > 0
            }

            function ue(t, e) {
                var n = t.interceptors || (t.interceptors = []);
                return n.push(e), p((function() {
                    var t = n.indexOf(e); - 1 !== t && n.splice(t, 1)
                }))
            }

            function ce(t, e) {
                var n = ut();
                try {
                    for (var r = s(t.interceptors || []), o = 0, i = r.length; o < i && (f(!(e = r[o](e)) || e.type, "Intercept handlers should return nothing or a change object"), e); o++);
                    return e
                } finally {
                    ct(n)
                }
            }

            function de(t) {
                return void 0 !== t.changeListeners && t.changeListeners.length > 0
            }

            function he(t, e) {
                var n = t.changeListeners || (t.changeListeners = []);
                return n.push(e), p((function() {
                    var t = n.indexOf(e); - 1 !== t && n.splice(t, 1)
                }))
            }

            function fe(t, e) {
                var n = ut(),
                    r = t.changeListeners;
                if (r) {
                    for (var o = 0, i = (r = r.slice()).length; o < i; o++) r[o](e);
                    ct(n)
                }
            }
            var pe = {
                get: function(t, e) {
                    return e === S ? t[S] : "length" === e ? t[S].getArrayLength() : "number" == typeof e ? ye.get.call(t, e) : "string" != typeof e || isNaN(e) ? ye.hasOwnProperty(e) ? ye[e] : t[e] : ye.get.call(t, parseInt(e))
                },
                set: function(t, e, n) {
                    return "length" === e && t[S].setArrayLength(n), "number" == typeof e && ye.set.call(t, e, n), "symbol" == typeof e || isNaN(e) ? t[e] = n : ye.set.call(t, parseInt(e), n), !0
                },
                preventExtensions: function(t) {
                    return h("Observable arrays cannot be frozen"), !1
                }
            };

            function ge(t, e, n, r) {
                void 0 === n && (n = "ObservableArray@" + d()), void 0 === r && (r = !1);
                var o = new ve(n, e, r);
                Object.defineProperty(o.values, S, {
                    enumerable: !1,
                    writable: !1,
                    configurable: !0,
                    value: o
                });
                var i = new Proxy(o.values, pe);
                if (o.proxy = i, t && t.length) {
                    var a = bt(!0);
                    o.spliceWithArray(0, 0, t), mt(a)
                }
                return i
            }
            var ve = function() {
                    function t(t, e, n) {
                        this.owned = n, this.values = [], this.proxy = void 0, this.lastKnownLength = 0, this.atom = new C(t || "ObservableArray@" + d()), this.enhancer = function(n, r) {
                            return e(n, r, t + "[..]")
                        }
                    }
                    return t.prototype.dehanceValue = function(t) {
                        return void 0 !== this.dehancer ? this.dehancer(t) : t
                    }, t.prototype.dehanceValues = function(t) {
                        return void 0 !== this.dehancer && t.length > 0 ? t.map(this.dehancer) : t
                    }, t.prototype.intercept = function(t) {
                        return ue(this, t)
                    }, t.prototype.observe = function(t, e) {
                        return void 0 === e && (e = !1), e && t({
                            object: this.proxy,
                            type: "splice",
                            index: 0,
                            added: this.values.slice(),
                            addedCount: this.values.length,
                            removed: [],
                            removedCount: 0
                        }), he(this, t)
                    }, t.prototype.getArrayLength = function() {
                        return this.atom.reportObserved(), this.values.length
                    }, t.prototype.setArrayLength = function(t) {
                        if ("number" != typeof t || t < 0) throw new Error("[mobx.array] Out of range: " + t);
                        var e = this.values.length;
                        if (t !== e)
                            if (t > e) {
                                for (var n = new Array(t - e), r = 0; r < t - e; r++) n[r] = void 0;
                                this.spliceWithArray(e, 0, n)
                            } else this.spliceWithArray(t, e - t)
                    }, t.prototype.updateArrayLength = function(t, e) {
                        if (t !== this.lastKnownLength) throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed.");
                        this.lastKnownLength += e
                    }, t.prototype.spliceWithArray = function(t, e, n) {
                        var r = this;
                        it(this.atom);
                        var o = this.values.length;
                        if (void 0 === t ? t = 0 : t > o ? t = o : t < 0 && (t = Math.max(0, o + t)), e = 1 === arguments.length ? o - t : null == e ? 0 : Math.max(0, Math.min(e, o - t)), void 0 === n && (n = u), le(this)) {
                            var i = ce(this, {
                                object: this.proxy,
                                type: "splice",
                                index: t,
                                removedCount: e,
                                added: n
                            });
                            if (!i) return u;
                            e = i.removedCount, n = i.added
                        }
                        n = 0 === n.length ? n : n.map((function(t) {
                            return r.enhancer(t, void 0)
                        }));
                        var a = this.spliceItemsIntoValues(t, e, n);
                        return 0 === e && 0 === n.length || this.notifyArraySplice(t, n, a), this.dehanceValues(a)
                    }, t.prototype.spliceItemsIntoValues = function(t, e, n) {
                        var r;
                        if (n.length < 1e4) return (r = this.values).splice.apply(r, s([t, e], n));
                        var o = this.values.slice(t, t + e);
                        return this.values = this.values.slice(0, t).concat(n, this.values.slice(t + e)), o
                    }, t.prototype.notifyArrayChildUpdate = function(t, e, n) {
                        var r = !this.owned && !1,
                            o = de(this),
                            i = o || r ? {
                                object: this.proxy,
                                type: "update",
                                index: t,
                                newValue: e,
                                oldValue: n
                            } : null;
                        this.atom.reportChanged(), o && fe(this, i)
                    }, t.prototype.notifyArraySplice = function(t, e, n) {
                        var r = !this.owned && !1,
                            o = de(this),
                            i = o || r ? {
                                object: this.proxy,
                                type: "splice",
                                index: t,
                                removed: n,
                                added: e,
                                removedCount: n.length,
                                addedCount: e.length
                            } : null;
                        this.atom.reportChanged(), o && fe(this, i)
                    }, t
                }(),
                ye = {
                    intercept: function(t) {
                        return this[S].intercept(t)
                    },
                    observe: function(t, e) {
                        return void 0 === e && (e = !1), this[S].observe(t, e)
                    },
                    clear: function() {
                        return this.splice(0)
                    },
                    replace: function(t) {
                        var e = this[S];
                        return e.spliceWithArray(0, e.values.length, t)
                    },
                    toJS: function() {
                        return this.slice()
                    },
                    toJSON: function() {
                        return this.toJS()
                    },
                    splice: function(t, e) {
                        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
                        var o = this[S];
                        switch (arguments.length) {
                            case 0:
                                return [];
                            case 1:
                                return o.spliceWithArray(t);
                            case 2:
                                return o.spliceWithArray(t, e)
                        }
                        return o.spliceWithArray(t, e, n)
                    },
                    spliceWithArray: function(t, e, n) {
                        return this[S].spliceWithArray(t, e, n)
                    },
                    push: function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        var n = this[S];
                        return n.spliceWithArray(n.values.length, 0, t), n.values.length
                    },
                    pop: function() {
                        return this.splice(Math.max(this[S].values.length - 1, 0), 1)[0]
                    },
                    shift: function() {
                        return this.splice(0, 1)[0]
                    },
                    unshift: function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        var n = this[S];
                        return n.spliceWithArray(0, 0, t), n.values.length
                    },
                    reverse: function() {
                        var t = this.slice();
                        return t.reverse.apply(t, arguments)
                    },
                    sort: function(t) {
                        var e = this.slice();
                        return e.sort.apply(e, arguments)
                    },
                    remove: function(t) {
                        var e = this[S],
                            n = e.dehanceValues(e.values).indexOf(t);
                        return n > -1 && (this.splice(n, 1), !0)
                    },
                    get: function(t) {
                        var e = this[S];
                        if (e) {
                            if (t < e.values.length) return e.atom.reportObserved(), e.dehanceValue(e.values[t]);
                            console.warn("[mobx.array] Attempt to read an array index (" + t + ") that is out of bounds (" + e.values.length + "). Please check length first. Out of bound indices will not be tracked by MobX")
                        }
                    },
                    set: function(t, e) {
                        var n = this[S],
                            r = n.values;
                        if (t < r.length) {
                            it(n.atom);
                            var o = r[t];
                            if (le(n)) {
                                var i = ce(n, {
                                    type: "update",
                                    object: n.proxy,
                                    index: t,
                                    newValue: e
                                });
                                if (!i) return;
                                e = i.newValue
                            }(e = n.enhancer(e, o)) !== o && (r[t] = e, n.notifyArrayChildUpdate(t, e, o))
                        } else {
                            if (t !== r.length) throw new Error("[mobx.array] Index out of bounds, " + t + " is larger than " + r.length);
                            n.spliceWithArray(t, 0, [e])
                        }
                    }
                };
            ["concat", "every", "filter", "forEach", "indexOf", "join", "lastIndexOf", "map", "reduce", "reduceRight", "slice", "some", "toString", "toLocaleString"].forEach((function(t) {
                ye[t] = function() {
                    var e = this[S];
                    e.atom.reportObserved();
                    var n = e.dehanceValues(e.values);
                    return n[t].apply(n, arguments)
                }
            }));
            var be, me = m("ObservableArrayAdministration", ve);

            function xe(t) {
                return v(t) && me(t[S])
            }
            var we, _e = {},
                Oe = function() {
                    function t(t, e, n) {
                        if (void 0 === e && (e = L), void 0 === n && (n = "ObservableMap@" + d()), this.enhancer = e, this.name = n, this[be] = _e, this._keysAtom = M(this.name + ".keys()"), this[Symbol.toStringTag] = "Map", "function" != typeof Map) throw new Error("mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js");
                        this._data = new Map, this._hasMap = new Map, this.merge(t)
                    }
                    return t.prototype._has = function(t) {
                        return this._data.has(t)
                    }, t.prototype.has = function(t) {
                        var e = this;
                        if (!At.trackingDerivation) return this._has(t);
                        var n = this._hasMap.get(t);
                        if (!n) {
                            var r = n = new xt(this._has(t), B, this.name + "." + O(t) + "?", !1);
                            this._hasMap.set(t, r), Xt(r, (function() {
                                return e._hasMap.delete(t)
                            }))
                        }
                        return n.get()
                    }, t.prototype.set = function(t, e) {
                        var n = this._has(t);
                        if (le(this)) {
                            var r = ce(this, {
                                type: n ? "update" : "add",
                                object: this,
                                newValue: e,
                                name: t
                            });
                            if (!r) return this;
                            e = r.newValue
                        }
                        return n ? this._updateValue(t, e) : this._addValue(t, e), this
                    }, t.prototype.delete = function(t) {
                        var e = this;
                        if (le(this) && !(r = ce(this, {
                                type: "delete",
                                object: this,
                                name: t
                            }))) return !1;
                        if (this._has(t)) {
                            var n = de(this),
                                r = n ? {
                                    type: "delete",
                                    object: this,
                                    oldValue: this._data.get(t).value,
                                    name: t
                                } : null;
                            return re((function() {
                                e._keysAtom.reportChanged(), e._updateHasMapEntry(t, !1), e._data.get(t).setNewValue(void 0), e._data.delete(t)
                            })), n && fe(this, r), !0
                        }
                        return !1
                    }, t.prototype._updateHasMapEntry = function(t, e) {
                        var n = this._hasMap.get(t);
                        n && n.setNewValue(e)
                    }, t.prototype._updateValue = function(t, e) {
                        var n = this._data.get(t);
                        if ((e = n.prepareNewValue(e)) !== At.UNCHANGED) {
                            var r = de(this),
                                o = r ? {
                                    type: "update",
                                    object: this,
                                    oldValue: n.value,
                                    name: t,
                                    newValue: e
                                } : null;
                            n.setNewValue(e), r && fe(this, o)
                        }
                    }, t.prototype._addValue = function(t, e) {
                        var n = this;
                        it(this._keysAtom), re((function() {
                            var r = new xt(e, n.enhancer, n.name + "." + O(t), !1);
                            n._data.set(t, r), e = r.value, n._updateHasMapEntry(t, !0), n._keysAtom.reportChanged()
                        }));
                        var r = de(this);
                        r && fe(this, r ? {
                            type: "add",
                            object: this,
                            name: t,
                            newValue: e
                        } : null)
                    }, t.prototype.get = function(t) {
                        return this.has(t) ? this.dehanceValue(this._data.get(t).get()) : this.dehanceValue(void 0)
                    }, t.prototype.dehanceValue = function(t) {
                        return void 0 !== this.dehancer ? this.dehancer(t) : t
                    }, t.prototype.keys = function() {
                        return this._keysAtom.reportObserved(), this._data.keys()
                    }, t.prototype.values = function() {
                        var t = this,
                            e = 0,
                            n = Array.from(this.keys());
                        return Ve({
                            next: function() {
                                return e < n.length ? {
                                    value: t.get(n[e++]),
                                    done: !1
                                } : {
                                    done: !0
                                }
                            }
                        })
                    }, t.prototype.entries = function() {
                        var t = this,
                            e = 0,
                            n = Array.from(this.keys());
                        return Ve({
                            next: function() {
                                if (e < n.length) {
                                    var r = n[e++];
                                    return {
                                        value: [r, t.get(r)],
                                        done: !1
                                    }
                                }
                                return {
                                    done: !0
                                }
                            }
                        })
                    }, t.prototype[(be = S, Symbol.iterator)] = function() {
                        return this.entries()
                    }, t.prototype.forEach = function(t, e) {
                        var n, r;
                        try {
                            for (var o = i(this), s = o.next(); !s.done; s = o.next()) {
                                var l = a(s.value, 2);
                                t.call(e, l[1], l[0], this)
                            }
                        } catch (u) {
                            n = {
                                error: u
                            }
                        } finally {
                            try {
                                s && !s.done && (r = o.return) && r.call(o)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                    }, t.prototype.merge = function(t) {
                        var e = this;
                        return ke(t) && (t = t.toJS()), re((function() {
                            y(t) ? _(t).forEach((function(n) {
                                return e.set(n, t[n])
                            })) : Array.isArray(t) ? t.forEach((function(t) {
                                var n = a(t, 2);
                                return e.set(n[0], n[1])
                            })) : x(t) ? (t.constructor !== Map && h("Cannot initialize from classes that inherit from Map: " + t.constructor.name), t.forEach((function(t, n) {
                                return e.set(n, t)
                            }))) : null != t && h("Cannot initialize map from " + t)
                        })), this
                    }, t.prototype.clear = function() {
                        var t = this;
                        re((function() {
                            lt((function() {
                                var e, n;
                                try {
                                    for (var r = i(t.keys()), o = r.next(); !o.done; o = r.next()) t.delete(o.value)
                                } catch (a) {
                                    e = {
                                        error: a
                                    }
                                } finally {
                                    try {
                                        o && !o.done && (n = r.return) && n.call(r)
                                    } finally {
                                        if (e) throw e.error
                                    }
                                }
                            }))
                        }))
                    }, t.prototype.replace = function(t) {
                        var e = this;
                        return re((function() {
                            var n, r = y(n = t) ? Object.keys(n) : Array.isArray(n) ? n.map((function(t) {
                                return a(t, 1)[0]
                            })) : x(n) || ke(n) ? Array.from(n.keys()) : h("Cannot get keys from '" + n + "'");
                            Array.from(e.keys()).filter((function(t) {
                                return -1 === r.indexOf(t)
                            })).forEach((function(t) {
                                return e.delete(t)
                            })), e.merge(t)
                        })), this
                    }, Object.defineProperty(t.prototype, "size", {
                        get: function() {
                            return this._keysAtom.reportObserved(), this._data.size
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.toPOJO = function() {
                        var t, e, n = {};
                        try {
                            for (var r = i(this), o = r.next(); !o.done; o = r.next()) {
                                var s = a(o.value, 2),
                                    l = s[0],
                                    u = s[1];
                                n["symbol" == typeof l ? l : O(l)] = u
                            }
                        } catch (c) {
                            t = {
                                error: c
                            }
                        } finally {
                            try {
                                o && !o.done && (e = r.return) && e.call(r)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                        return n
                    }, t.prototype.toJS = function() {
                        return new Map(this)
                    }, t.prototype.toJSON = function() {
                        return this.toPOJO()
                    }, t.prototype.toString = function() {
                        var t = this;
                        return this.name + "[{ " + Array.from(this.keys()).map((function(e) {
                            return O(e) + ": " + t.get(e)
                        })).join(", ") + " }]"
                    }, t.prototype.observe = function(t, e) {
                        return he(this, t)
                    }, t.prototype.intercept = function(t) {
                        return ue(this, t)
                    }, t
                }(),
                ke = m("ObservableMap", Oe),
                Se = {},
                Ce = function() {
                    function t(t, e, n) {
                        if (void 0 === e && (e = L), void 0 === n && (n = "ObservableSet@" + d()), this.name = n, this[we] = Se, this._data = new Set, this._atom = M(this.name), this[Symbol.toStringTag] = "Set", "function" != typeof Set) throw new Error("mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js");
                        this.enhancer = function(t, r) {
                            return e(t, r, n)
                        }, t && this.replace(t)
                    }
                    return t.prototype.dehanceValue = function(t) {
                        return void 0 !== this.dehancer ? this.dehancer(t) : t
                    }, t.prototype.clear = function() {
                        var t = this;
                        re((function() {
                            lt((function() {
                                var e, n;
                                try {
                                    for (var r = i(t._data.values()), o = r.next(); !o.done; o = r.next()) t.delete(o.value)
                                } catch (a) {
                                    e = {
                                        error: a
                                    }
                                } finally {
                                    try {
                                        o && !o.done && (n = r.return) && n.call(r)
                                    } finally {
                                        if (e) throw e.error
                                    }
                                }
                            }))
                        }))
                    }, t.prototype.forEach = function(t, e) {
                        var n, r;
                        try {
                            for (var o = i(this), a = o.next(); !a.done; a = o.next()) {
                                var s = a.value;
                                t.call(e, s, s, this)
                            }
                        } catch (l) {
                            n = {
                                error: l
                            }
                        } finally {
                            try {
                                a && !a.done && (r = o.return) && r.call(o)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                    }, Object.defineProperty(t.prototype, "size", {
                        get: function() {
                            return this._atom.reportObserved(), this._data.size
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.add = function(t) {
                        var e = this;
                        if (it(this._atom), le(this) && !(r = ce(this, {
                                type: "add",
                                object: this,
                                newValue: t
                            }))) return this;
                        if (!this.has(t)) {
                            re((function() {
                                e._data.add(e.enhancer(t, void 0)), e._atom.reportChanged()
                            }));
                            var n = de(this),
                                r = n ? {
                                    type: "add",
                                    object: this,
                                    newValue: t
                                } : null;
                            n && fe(this, r)
                        }
                        return this
                    }, t.prototype.delete = function(t) {
                        var e = this;
                        if (le(this) && !(r = ce(this, {
                                type: "delete",
                                object: this,
                                oldValue: t
                            }))) return !1;
                        if (this.has(t)) {
                            var n = de(this),
                                r = n ? {
                                    type: "delete",
                                    object: this,
                                    oldValue: t
                                } : null;
                            return re((function() {
                                e._atom.reportChanged(), e._data.delete(t)
                            })), n && fe(this, r), !0
                        }
                        return !1
                    }, t.prototype.has = function(t) {
                        return this._atom.reportObserved(), this._data.has(this.dehanceValue(t))
                    }, t.prototype.entries = function() {
                        var t = 0,
                            e = Array.from(this.keys()),
                            n = Array.from(this.values());
                        return Ve({
                            next: function() {
                                var r = t;
                                return t += 1, r < n.length ? {
                                    value: [e[r], n[r]],
                                    done: !1
                                } : {
                                    done: !0
                                }
                            }
                        })
                    }, t.prototype.keys = function() {
                        return this.values()
                    }, t.prototype.values = function() {
                        this._atom.reportObserved();
                        var t = this,
                            e = 0,
                            n = Array.from(this._data.values());
                        return Ve({
                            next: function() {
                                return e < n.length ? {
                                    value: t.dehanceValue(n[e++]),
                                    done: !1
                                } : {
                                    done: !0
                                }
                            }
                        })
                    }, t.prototype.replace = function(t) {
                        var e = this;
                        return Ae(t) && (t = t.toJS()), re((function() {
                            Array.isArray(t) ? (e.clear(), t.forEach((function(t) {
                                return e.add(t)
                            }))) : w(t) ? (e.clear(), t.forEach((function(t) {
                                return e.add(t)
                            }))) : null != t && h("Cannot initialize set from " + t)
                        })), this
                    }, t.prototype.observe = function(t, e) {
                        return he(this, t)
                    }, t.prototype.intercept = function(t) {
                        return ue(this, t)
                    }, t.prototype.toJS = function() {
                        return new Set(this)
                    }, t.prototype.toString = function() {
                        return this.name + "[ " + Array.from(this).join(", ") + " ]"
                    }, t.prototype[(we = S, Symbol.iterator)] = function() {
                        return this.values()
                    }, t
                }(),
                Ae = m("ObservableSet", Ce),
                Me = function() {
                    function t(t, e, n, r) {
                        void 0 === e && (e = new Map), this.target = t, this.values = e, this.name = n, this.defaultEnhancer = r, this.keysAtom = new C(n + ".keys")
                    }
                    return t.prototype.read = function(t) {
                        return this.values.get(t).get()
                    }, t.prototype.write = function(t, e) {
                        var n = this.target,
                            r = this.values.get(t);
                        if (r instanceof wt) r.set(e);
                        else {
                            if (le(this)) {
                                if (!(i = ce(this, {
                                        type: "update",
                                        object: this.proxy || n,
                                        name: t,
                                        newValue: e
                                    }))) return;
                                e = i.newValue
                            }
                            if ((e = r.prepareNewValue(e)) !== At.UNCHANGED) {
                                var o = de(this),
                                    i = o ? {
                                        type: "update",
                                        object: this.proxy || n,
                                        oldValue: r.value,
                                        name: t,
                                        newValue: e
                                    } : null;
                                r.setNewValue(e), o && fe(this, i)
                            }
                        }
                    }, t.prototype.has = function(t) {
                        var e = this.pendingKeys || (this.pendingKeys = new Map),
                            n = e.get(t);
                        if (n) return n.get();
                        var r = !!this.values.get(t);
                        return n = new xt(r, B, this.name + "." + O(t) + "?", !1), e.set(t, n), n.get()
                    }, t.prototype.addObservableProp = function(t, e, n) {
                        void 0 === n && (n = this.defaultEnhancer);
                        var r = this.target;
                        if (le(this)) {
                            var o = ce(this, {
                                object: this.proxy || r,
                                name: t,
                                type: "add",
                                newValue: e
                            });
                            if (!o) return;
                            e = o.newValue
                        }
                        var i = new xt(e, n, this.name + "." + O(t), !1);
                        this.values.set(t, i), e = i.value, Object.defineProperty(r, t, function(t) {
                            return De[t] || (De[t] = {
                                configurable: !0,
                                enumerable: !0,
                                get: function() {
                                    return this[S].read(t)
                                },
                                set: function(e) {
                                    this[S].write(t, e)
                                }
                            })
                        }(t)), this.notifyPropertyAddition(t, e)
                    }, t.prototype.addComputedProp = function(t, e, n) {
                        var r, o = this.target;
                        n.name = n.name || this.name + "." + O(e), this.values.set(e, new wt(n)), (t === o || !(r = Object.getOwnPropertyDescriptor(t, e)) || !1 !== r.configurable && !1 !== r.writable) && Object.defineProperty(t, e, function(t) {
                            return Pe[t] || (Pe[t] = {
                                configurable: At.computedConfigurable,
                                enumerable: !1,
                                get: function() {
                                    return Ee(this).read(t)
                                },
                                set: function(e) {
                                    Ee(this).write(t, e)
                                }
                            })
                        }(e))
                    }, t.prototype.remove = function(t) {
                        if (this.values.has(t)) {
                            var e = this.target;
                            if (le(this) && !(a = ce(this, {
                                    object: this.proxy || e,
                                    name: t,
                                    type: "remove"
                                }))) return;
                            try {
                                Pt();
                                var n = de(this),
                                    r = this.values.get(t),
                                    o = r && r.get();
                                if (r && r.set(void 0), this.keysAtom.reportChanged(), this.values.delete(t), this.pendingKeys) {
                                    var i = this.pendingKeys.get(t);
                                    i && i.set(!1)
                                }
                                delete this.target[t];
                                var a = n ? {
                                    type: "remove",
                                    object: this.proxy || e,
                                    oldValue: o,
                                    name: t
                                } : null;
                                n && fe(this, a)
                            } finally {
                                Et()
                            }
                        }
                    }, t.prototype.illegalAccess = function(t, e) {
                        console.warn("Property '" + e + "' of '" + t + "' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner")
                    }, t.prototype.observe = function(t, e) {
                        return he(this, t)
                    }, t.prototype.intercept = function(t) {
                        return ue(this, t)
                    }, t.prototype.notifyPropertyAddition = function(t, e) {
                        var n = de(this);
                        if (n && fe(this, n ? {
                                type: "add",
                                object: this.proxy || this.target,
                                name: t,
                                newValue: e
                            } : null), this.pendingKeys) {
                            var r = this.pendingKeys.get(t);
                            r && r.set(!0)
                        }
                        this.keysAtom.reportChanged()
                    }, t.prototype.getKeys = function() {
                        var t, e;
                        this.keysAtom.reportObserved();
                        var n = [];
                        try {
                            for (var r = i(this.values), o = r.next(); !o.done; o = r.next()) {
                                var s = a(o.value, 2);
                                s[1] instanceof xt && n.push(s[0])
                            }
                        } catch (l) {
                            t = {
                                error: l
                            }
                        } finally {
                            try {
                                o && !o.done && (e = r.return) && e.call(r)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                        return n
                    }, t
                }();

            function je(t, e, n) {
                if (void 0 === e && (e = ""), void 0 === n && (n = L), Object.prototype.hasOwnProperty.call(t, S)) return t[S];
                y(t) || (e = (t.constructor.name || "ObservableObject") + "@" + d()), e || (e = "ObservableObject@" + d());
                var r = new Me(t, new Map, O(e), n);
                return b(t, S, r), r
            }
            var De = Object.create(null),
                Pe = Object.create(null);

            function Ee(t) {
                return t[S] || (T(t), t[S])
            }
            var Ne = m("ObservableObjectAdministration", Me);

            function Ie(t) {
                return !!v(t) && (T(t), Ne(t[S]))
            }

            function Te(t, e) {
                if ("object" == typeof t && null !== t) {
                    if (xe(t)) return void 0 !== e && h(!1), t[S].atom;
                    if (Ae(t)) return t[S];
                    if (ke(t)) {
                        var n = t;
                        return void 0 === e ? n._keysAtom : ((r = n._data.get(e) || n._hasMap.get(e)) || h(!1), r)
                    }
                    var r;
                    if (T(t), Ie(t)) return e ? ((r = t[S].values.get(e)) || h(!1), r) : h(!1);
                    if (A(t) || _t(t) || Vt(t)) return t
                } else if ("function" == typeof t && Vt(t[S])) return t[S];
                return h(!1)
            }
            var Re = Object.prototype.toString;

            function Fe(t, e, n) {
                return void 0 === n && (n = -1),
                    function t(e, n, r, o, i) {
                        if (e === n) return 0 !== e || 1 / e == 1 / n;
                        if (null == e || null == n) return !1;
                        if (e != e) return n != n;
                        var a = typeof e;
                        if ("function" !== a && "object" !== a && "object" != typeof n) return !1;
                        e = Le(e), n = Le(n);
                        var s = Re.call(e);
                        if (s !== Re.call(n)) return !1;
                        switch (s) {
                            case "[object RegExp]":
                            case "[object String]":
                                return "" + e == "" + n;
                            case "[object Number]":
                                return +e != +e ? +n != +n : 0 == +e ? 1 / +e == 1 / n : +e == +n;
                            case "[object Date]":
                            case "[object Boolean]":
                                return +e == +n;
                            case "[object Symbol]":
                                return "undefined" != typeof Symbol && Symbol.valueOf.call(e) === Symbol.valueOf.call(n)
                        }
                        var l = "[object Array]" === s;
                        if (!l) {
                            if ("object" != typeof e || "object" != typeof n) return !1;
                            var u = e.constructor,
                                c = n.constructor;
                            if (u !== c && !("function" == typeof u && u instanceof u && "function" == typeof c && c instanceof c) && "constructor" in e && "constructor" in n) return !1
                        }
                        if (0 === r) return !1;
                        r < 0 && (r = -1), i = i || [];
                        for (var d = (o = o || []).length; d--;)
                            if (o[d] === e) return i[d] === n;
                        if (o.push(e), i.push(n), l) {
                            if ((d = e.length) !== n.length) return !1;
                            for (; d--;)
                                if (!t(e[d], n[d], r - 1, o, i)) return !1
                        } else {
                            var h = Object.keys(e),
                                f = void 0;
                            if (d = h.length, Object.keys(n).length !== d) return !1;
                            for (; d--;)
                                if (!Be(n, f = h[d]) || !t(e[f], n[f], r - 1, o, i)) return !1
                        }
                        return o.pop(), i.pop(), !0
                    }(t, e, n)
            }

            function Le(t) {
                return xe(t) ? t.slice() : x(t) || ke(t) ? Array.from(t.entries()) : w(t) || Ae(t) ? Array.from(t.entries()) : t
            }

            function Be(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }

            function Ve(t) {
                return t[Symbol.iterator] = ze, t
            }

            function ze() {
                return this
            }
            if ("undefined" == typeof Proxy || "undefined" == typeof Symbol) throw new Error("[mobx] MobX 5+ requires Proxy and Symbol objects. If your environment doesn't support Symbol or Proxy objects, please downgrade to MobX 4. For React Native Android, consider upgrading JSCore.");
            "object" == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ && __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
                spy: function(t) {
                    return console.warn("[mobx.spy] Is a no-op in production builds"),
                        function() {}
                },
                extras: {
                    getDebugName: function(t, e) {
                        return (void 0 !== e ? Te(t, e) : Ie(t) || ke(t) || Ae(t) ? function t(e, n) {
                            return e || h("Expecting some object"), void 0 !== n ? t(Te(e, n)) : A(e) || _t(e) || Vt(e) ? e : ke(e) || Ae(e) ? e : (T(e), e[S] ? e[S] : void h(!1))
                        }(t) : Te(t)).name
                    }
                },
                $mobx: S
            })
        },
        "3A9y": function(t, e) {
            t.exports = function(t) {
                return this.__data__.has(t)
            }
        },
        "3Fdi": function(t, e) {
            var n = Function.prototype.toString;
            t.exports = function(t) {
                if (null != t) {
                    try {
                        return n.call(t)
                    } catch (e) {}
                    try {
                        return t + ""
                    } catch (e) {}
                }
                return ""
            }
        },
        "3L66": function(t, e, n) {
            var r = n("MMmD"),
                o = n("ExA7");
            t.exports = function(t) {
                return o(t) && r(t)
            }
        },
        "4/ic": function(t, e, n) {
            var r = n("ZWtO");
            t.exports = function(t) {
                return function(e) {
                    return r(e, t)
                }
            }
        },
        "44Ds": function(t, e, n) {
            var r = n("e4Nc"),
                o = "Expected a function";

            function i(t, e) {
                if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError(o);
                var n = function() {
                    var r = arguments,
                        o = e ? e.apply(this, r) : r[0],
                        i = n.cache;
                    if (i.has(o)) return i.get(o);
                    var a = t.apply(this, r);
                    return n.cache = i.set(o, a) || i, a
                };
                return n.cache = new(i.Cache || r), n
            }
            i.Cache = r, t.exports = i
        },
        "4DFU": function(t, e, n) {
            var r = n("+Qka"),
                o = n("GoyQ");
            t.exports = function t(e, n, i, a, s, l) {
                return o(e) && o(n) && (l.set(n, e), r(e, n, void 0, t, l), l.delete(n)), e
            }
        },
        "4Dmd": function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return a
            }));
            var r = n("CcnG"),
                o = function(t, e, n, r) {
                    var o, i = arguments.length,
                        a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, r);
                    else
                        for (var s = t.length - 1; s >= 0; s--)(o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
                    return i > 3 && a && Object.defineProperty(e, n, a), a
                },
                i = function(t, e) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
                },
                a = function() {
                    function t(t, e, n) {
                        this.renderer = t, this.templateRef = e, this.viewContainerRef = n
                    }
                    return Object.defineProperty(t.prototype, "isOpen", {
                        set: function(t) {
                            t ? (this._show(), this.isEnabled && !1 === this._isOpen && this._animateOpen()) : this.isEnabled ? this._animateClose() : this._hide(), this._isOpen = !!t
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype._show = function() {
                        this.innerElement || (this.innerElement = this.viewContainerRef.createEmbeddedView(this.templateRef).rootNodes[0])
                    }, t.prototype._hide = function() {
                        this.viewContainerRef.clear(), this.innerElement = null
                    }, t.prototype._animateOpen = function() {
                        var t = this,
                            e = this.animateSpeed,
                            n = this.animateAcceleration,
                            r = 0;
                        this.renderer.setStyle(this.innerElement, "max-height", "0"), setTimeout((function() {
                            var o = setInterval((function() {
                                if (!t._isOpen || !t.innerElement) return clearInterval(o);
                                var i = Math.round(r += e);
                                t.renderer.setStyle(t.innerElement, "max-height", i + "px");
                                var a = t.innerElement.getBoundingClientRect ? t.innerElement.getBoundingClientRect().height : 0;
                                e *= n, n *= 1.005, a < i && (t.renderer.setStyle(t.innerElement, "max-height", null), clearInterval(o))
                            }), 17)
                        }))
                    }, t.prototype._animateClose = function() {
                        var t = this;
                        if (this.innerElement) var e = this.animateSpeed,
                            n = this.animateAcceleration,
                            r = this.innerElement.getBoundingClientRect().height,
                            o = setInterval((function() {
                                if (t._isOpen || !t.innerElement) return clearInterval(o);
                                t.renderer.setStyle(t.innerElement, "max-height", (r -= e) + "px"), e *= n, n *= 1.005, r <= 0 && (t.viewContainerRef.clear(), t.innerElement = null, clearInterval(o))
                            }), 17)
                    }, o([Object(r.x)("treeAnimateOpenSpeed"), i("design:type", Number)], t.prototype, "animateSpeed", void 0), o([Object(r.x)("treeAnimateOpenAcceleration"), i("design:type", Number)], t.prototype, "animateAcceleration", void 0), o([Object(r.x)("treeAnimateOpenEnabled"), i("design:type", Boolean)], t.prototype, "isEnabled", void 0), o([Object(r.x)("treeAnimateOpen"), i("design:type", Boolean), i("design:paramtypes", [Boolean])], t.prototype, "isOpen", null), o([Object(r.m)({
                        selector: "[treeAnimateOpen]"
                    }), i("design:paramtypes", [r.M, r.U, r.Y])], t)
                }()
        },
        "4Oe1": function(t, e, n) {
            var r = n("YO3V");
            t.exports = function(t) {
                return r(t) ? void 0 : t
            }
        },
        "4kuk": function(t, e, n) {
            var r = n("SfRM"),
                o = n("Hvzi"),
                i = n("u8Dt"),
                a = n("ekgI"),
                s = n("JSQU");

            function l(t) {
                var e = -1,
                    n = null == t ? 0 : t.length;
                for (this.clear(); ++e < n;) {
                    var r = t[e];
                    this.set(r[0], r[1])
                }
            }
            l.prototype.clear = r, l.prototype.delete = o, l.prototype.get = i, l.prototype.has = a, l.prototype.set = s, t.exports = l
        },
        "4qC0": function(t, e, n) {
            var r = n("NykK"),
                o = n("Z0cm"),
                i = n("ExA7");
            t.exports = function(t) {
                return "string" == typeof t || !o(t) && i(t) && "[object String]" == r(t)
            }
        },
        "4sDh": function(t, e, n) {
            var r = n("4uTw"),
                o = n("03A+"),
                i = n("Z0cm"),
                a = n("wJg7"),
                s = n("shjB"),
                l = n("9Nap");
            t.exports = function(t, e, n) {
                for (var u = -1, c = (e = r(e, t)).length, d = !1; ++u < c;) {
                    var h = l(e[u]);
                    if (!(d = null != t && n(t, h))) break;
                    t = t[h]
                }
                return d || ++u != c ? d : !!(c = null == t ? 0 : t.length) && s(c) && a(h, c) && (i(t) || o(t))
            }
        },
        "4uTw": function(t, e, n) {
            var r = n("Z0cm"),
                o = n("9ggG"),
                i = n("GNiM"),
                a = n("dt0z");
            t.exports = function(t, e) {
                return r(t) ? t : o(t, e) ? [t] : i(a(t))
            }
        },
        "5Tg0": function(t, e, n) {
            (function(t) {
                var r = n("Kz5y"),
                    o = e && !e.nodeType && e,
                    i = o && "object" == typeof t && t && !t.nodeType && t,
                    a = i && i.exports === o ? r.Buffer : void 0,
                    s = a ? a.allocUnsafe : void 0;
                t.exports = function(t, e) {
                    if (e) return t.slice();
                    var n = t.length,
                        r = s ? s(n) : new t.constructor(n);
                    return t.copy(r), r
                }
            }).call(this, n("YuTi")(t))
        },
        "6sVZ": function(t, e) {
            var n = Object.prototype;
            t.exports = function(t) {
                var e = t && t.constructor;
                return t === ("function" == typeof e && e.prototype || n)
            }
        },
        "711d": function(t, e) {
            t.exports = function(t) {
                return function(e) {
                    return null == e ? void 0 : e[t]
                }
            }
        },
        "77Zs": function(t, e, n) {
            var r = n("Xi7e");
            t.exports = function() {
                this.__data__ = new r, this.size = 0
            }
        },
        "7GkX": function(t, e, n) {
            var r = n("b80T"),
                o = n("A90E"),
                i = n("MMmD");
            t.exports = function(t) {
                return i(t) ? r(t) : o(t)
            }
        },
        "7Ix3": function(t, e) {
            t.exports = function(t) {
                var e = [];
                if (null != t)
                    for (var n in Object(t)) e.push(n);
                return e
            }
        },
        "7fqy": function(t, e) {
            t.exports = function(t) {
                var e = -1,
                    n = Array(t.size);
                return t.forEach((function(t, r) {
                    n[++e] = [r, t]
                })), n
            }
        },
        "88Gu": function(t, e) {
            var n = Date.now;
            t.exports = function(t) {
                var e = 0,
                    r = 0;
                return function() {
                    var o = n(),
                        i = 16 - (o - r);
                    if (r = o, i > 0) {
                        if (++e >= 800) return arguments[0]
                    } else e = 0;
                    return t.apply(void 0, arguments)
                }
            }
        },
        "9Nap": function(t, e, n) {
            var r = n("/9aa");
            t.exports = function(t) {
                if ("string" == typeof t || r(t)) return t;
                var e = t + "";
                return "0" == e && 1 / t == -1 / 0 ? "-0" : e
            }
        },
        "9ggG": function(t, e, n) {
            var r = n("Z0cm"),
                o = n("/9aa"),
                i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                a = /^\w*$/;
            t.exports = function(t, e) {
                if (r(t)) return !1;
                var n = typeof t;
                return !("number" != n && "symbol" != n && "boolean" != n && null != t && !o(t)) || a.test(t) || !i.test(t) || null != e && t in Object(e)
            }
        },
        A90E: function(t, e, n) {
            var r = n("6sVZ"),
                o = n("V6Ve"),
                i = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                if (!r(t)) return o(t);
                var e = [];
                for (var n in Object(t)) i.call(t, n) && "constructor" != n && e.push(n);
                return e
            }
        },
        AP2z: function(t, e, n) {
            var r = n("nmnc"),
                o = Object.prototype,
                i = o.hasOwnProperty,
                a = o.toString,
                s = r ? r.toStringTag : void 0;
            t.exports = function(t) {
                var e = i.call(t, s),
                    n = t[s];
                try {
                    t[s] = void 0;
                    var r = !0
                } catch (l) {}
                var o = a.call(t);
                return r && (e ? t[s] = n : delete t[s]), o
            }
        },
        B8du: function(t, e) {
            t.exports = function() {
                return !1
            }
        },
        BiGR: function(t, e, n) {
            var r = n("nmnc"),
                o = n("03A+"),
                i = n("Z0cm"),
                a = r ? r.isConcatSpreadable : void 0;
            t.exports = function(t) {
                return i(t) || o(t) || !!(a && t && t[a])
            }
        },
        C523: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return s
            }));
            var r = n("CcnG"),
                o = n("gk6K"),
                i = function(t, e, n, r) {
                    var o, i = arguments.length,
                        a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, r);
                    else
                        for (var s = t.length - 1; s >= 0; s--)(o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
                    return i > 3 && a && Object.defineProperty(e, n, a), a
                },
                a = function(t, e) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
                },
                s = function() {
                    function t(t, e, n, r) {
                        this.el = t, this.renderer = e, this.treeDraggedElement = n, this.ngZone = r, this.dragEventHandler = this.onDrag.bind(this)
                    }
                    return t.prototype.ngAfterViewInit = function() {
                        var t = this,
                            e = this.el.nativeElement;
                        this.ngZone.runOutsideAngular((function() {
                            e.addEventListener("drag", t.dragEventHandler)
                        }))
                    }, t.prototype.ngDoCheck = function() {
                        this.renderer.setAttribute(this.el.nativeElement, "draggable", this.treeDragEnabled ? "true" : "false")
                    }, t.prototype.ngOnDestroy = function() {
                        this.el.nativeElement.removeEventListener("drag", this.dragEventHandler)
                    }, t.prototype.onDragStart = function(t) {
                        t.dataTransfer.setData("text", t.target.id), this.treeDraggedElement.set(this.draggedElement), this.draggedElement.mouseAction && this.draggedElement.mouseAction("dragStart", t)
                    }, t.prototype.onDrag = function(t) {
                        this.draggedElement.mouseAction && this.draggedElement.mouseAction("drag", t)
                    }, t.prototype.onDragEnd = function() {
                        this.draggedElement.mouseAction && this.draggedElement.mouseAction("dragEnd"), this.treeDraggedElement.set(null)
                    }, i([Object(r.x)("treeDrag"), a("design:type", Object)], t.prototype, "draggedElement", void 0), i([Object(r.x)(), a("design:type", Object)], t.prototype, "treeDragEnabled", void 0), i([Object(r.r)("dragstart", ["$event"]), a("design:type", Function), a("design:paramtypes", [Object]), a("design:returntype", void 0)], t.prototype, "onDragStart", null), i([Object(r.r)("dragend"), a("design:type", Function), a("design:paramtypes", []), a("design:returntype", void 0)], t.prototype, "onDragEnd", null), i([Object(r.m)({
                        selector: "[treeDrag]"
                    }), a("design:paramtypes", [r.n, r.M, o.a, r.G])], t)
                }()
        },
        CFvb: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return r
            }));
            var r = {
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                ENTER: 13,
                SPACE: 32,
                CONTEXT_MENU: 32
            }
        },
        CH3K: function(t, e) {
            t.exports = function(t, e) {
                for (var n = -1, r = e.length, o = t.length; ++n < r;) t[o + n] = e[n];
                return t
            }
        },
        CMye: function(t, e, n) {
            var r = n("GoyQ");
            t.exports = function(t) {
                return t == t && !r(t)
            }
        },
        CZoQ: function(t, e) {
            t.exports = function(t, e, n) {
                for (var r = n - 1, o = t.length; ++r < o;)
                    if (t[r] === e) return r;
                return -1
            }
        },
        Cwc5: function(t, e, n) {
            var r = n("NKxu"),
                o = n("Npjl");
            t.exports = function(t, e) {
                var n = o(t, e);
                return r(n) ? n : void 0
            }
        },
        DSRE: function(t, e, n) {
            (function(t) {
                var r = n("Kz5y"),
                    o = n("B8du"),
                    i = e && !e.nodeType && e,
                    a = i && "object" == typeof t && t && !t.nodeType && t,
                    s = a && a.exports === i ? r.Buffer : void 0;
                t.exports = (s ? s.isBuffer : void 0) || o
            }).call(this, n("YuTi")(t))
        },
        "Dw+G": function(t, e, n) {
            var r = n("juv8"),
                o = n("mTTR");
            t.exports = function(t, e) {
                return t && r(e, o(e), t)
            }
        },
        DzJC: function(t, e, n) {
            var r = n("sEfC"),
                o = n("GoyQ");
            t.exports = function(t, e, n) {
                var i = !0,
                    a = !0;
                if ("function" != typeof t) throw new TypeError("Expected a function");
                return o(n) && (i = "leading" in n ? !!n.leading : i, a = "trailing" in n ? !!n.trailing : a), r(t, e, {
                    leading: i,
                    maxWait: e,
                    trailing: a
                })
            }
        },
        E2jh: function(t, e, n) {
            var r, o = n("2gN3"),
                i = (r = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";
            t.exports = function(t) {
                return !!i && i in t
            }
        },
        EA7m: function(t, e, n) {
            var r = n("zZ0H"),
                o = n("Ioao"),
                i = n("wclG");
            t.exports = function(t, e) {
                return i(o(t, e, r), t + "")
            }
        },
        EEGq: function(t, e, n) {
            var r = n("juv8"),
                o = n("oCl/");
            t.exports = function(t, e) {
                return r(t, o(t), e)
            }
        },
        EpBk: function(t, e) {
            t.exports = function(t) {
                var e = typeof t;
                return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
            }
        },
        ExA7: function(t, e) {
            t.exports = function(t) {
                return null != t && "object" == typeof t
            }
        },
        "F+oH": function(t, e, n) {
            "use strict";
            n("16BW"), n("mrSG");
            var r = n("2vnA");
            n.d(e, "a", (function() {
                return o
            })), n.d(e, "b", (function() {
                return i
            })), n.d(e, "c", (function() {
                return a
            })), n.d(e, "d", (function() {
                return s
            }));
            var o = function() {
                return function() {}
            }();

            function i() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return r.a.apply(void 0, t)
            }

            function a() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return r.c.apply(void 0, t)
            }

            function s() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return r.d.apply(void 0, t)
            }
        },
        FZoo: function(t, e, n) {
            var r = n("MrPd"),
                o = n("4uTw"),
                i = n("wJg7"),
                a = n("GoyQ"),
                s = n("9Nap");
            t.exports = function(t, e, n, l) {
                if (!a(t)) return t;
                for (var u = -1, c = (e = o(e, t)).length, d = c - 1, h = t; null != h && ++u < c;) {
                    var f = s(e[u]),
                        p = n;
                    if (u != d) {
                        var g = h[f];
                        void 0 === (p = l ? l(g, f, h) : void 0) && (p = a(g) ? g : i(e[u + 1]) ? [] : {})
                    }
                    r(h, f, p), h = h[f]
                }
                return t
            }
        },
        FfPP: function(t, e, n) {
            var r = n("idmN"),
                o = n("hgQt");
            t.exports = function(t, e) {
                return r(t, e, (function(e, n) {
                    return o(t, n)
                }))
            }
        },
        Fwy9: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return s
            }));
            var r = n("CcnG"),
                o = n("gk6K"),
                i = function(t, e, n, r) {
                    var o, i = arguments.length,
                        a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, r);
                    else
                        for (var s = t.length - 1; s >= 0; s--)(o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
                    return i > 3 && a && Object.defineProperty(e, n, a), a
                },
                a = function(t, e) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
                },
                s = function() {
                    function t(t, e, n, o) {
                        this.el = t, this.renderer = e, this.treeDraggedElement = n, this.ngZone = o, this.allowDragoverStyling = !0, this.onDropCallback = new r.q, this.onDragOverCallback = new r.q, this.onDragLeaveCallback = new r.q, this.onDragEnterCallback = new r.q, this._allowDrop = function(t, e) {
                            return !0
                        }, this.dragOverEventHandler = this.onDragOver.bind(this), this.dragEnterEventHandler = this.onDragEnter.bind(this), this.dragLeaveEventHandler = this.onDragLeave.bind(this)
                    }
                    return Object.defineProperty(t.prototype, "treeAllowDrop", {
                        set: function(t) {
                            this._allowDrop = t instanceof Function ? t : function(e, n) {
                                return t
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.allowDrop = function(t) {
                        return this._allowDrop(this.treeDraggedElement.get(), t)
                    }, t.prototype.ngAfterViewInit = function() {
                        var t = this,
                            e = this.el.nativeElement;
                        this.ngZone.runOutsideAngular((function() {
                            e.addEventListener("dragover", t.dragOverEventHandler), e.addEventListener("dragenter", t.dragEnterEventHandler), e.addEventListener("dragleave", t.dragLeaveEventHandler)
                        }))
                    }, t.prototype.ngOnDestroy = function() {
                        var t = this.el.nativeElement;
                        t.removeEventListener("dragover", this.dragOverEventHandler), t.removeEventListener("dragenter", this.dragEnterEventHandler), t.removeEventListener("dragleave", this.dragLeaveEventHandler)
                    }, t.prototype.onDragOver = function(t) {
                        if (!this.allowDrop(t)) return this.allowDragoverStyling ? this.addDisabledClass() : void 0;
                        this.onDragOverCallback.emit({
                            event: t,
                            element: this.treeDraggedElement.get()
                        }), t.preventDefault(), this.allowDragoverStyling && this.addClass()
                    }, t.prototype.onDragEnter = function(t) {
                        this.allowDrop(t) && this.onDragEnterCallback.emit({
                            event: t,
                            element: this.treeDraggedElement.get()
                        })
                    }, t.prototype.onDragLeave = function(t) {
                        if (!this.allowDrop(t)) return this.allowDragoverStyling ? this.removeDisabledClass() : void 0;
                        this.onDragLeaveCallback.emit({
                            event: t,
                            element: this.treeDraggedElement.get()
                        }), this.allowDragoverStyling && this.removeClass()
                    }, t.prototype.onDrop = function(t) {
                        this.allowDrop(t) && (t.preventDefault(), this.onDropCallback.emit({
                            event: t,
                            element: this.treeDraggedElement.get()
                        }), this.allowDragoverStyling && this.removeClass(), this.treeDraggedElement.set(null))
                    }, t.prototype.addClass = function() {
                        this.renderer.addClass(this.el.nativeElement, "is-dragging-over")
                    }, t.prototype.removeClass = function() {
                        this.renderer.removeClass(this.el.nativeElement, "is-dragging-over")
                    }, t.prototype.addDisabledClass = function() {
                        this.renderer.addClass(this.el.nativeElement, "is-dragging-over-disabled")
                    }, t.prototype.removeDisabledClass = function() {
                        this.renderer.removeClass(this.el.nativeElement, "is-dragging-over-disabled")
                    }, i([Object(r.x)(), a("design:type", Object)], t.prototype, "allowDragoverStyling", void 0), i([Object(r.I)("treeDrop"), a("design:type", Object)], t.prototype, "onDropCallback", void 0), i([Object(r.I)("treeDropDragOver"), a("design:type", Object)], t.prototype, "onDragOverCallback", void 0), i([Object(r.I)("treeDropDragLeave"), a("design:type", Object)], t.prototype, "onDragLeaveCallback", void 0), i([Object(r.I)("treeDropDragEnter"), a("design:type", Object)], t.prototype, "onDragEnterCallback", void 0), i([Object(r.x)(), a("design:type", Object), a("design:paramtypes", [Object])], t.prototype, "treeAllowDrop", null), i([Object(r.r)("drop", ["$event"]), a("design:type", Function), a("design:paramtypes", [Object]), a("design:returntype", void 0)], t.prototype, "onDrop", null), i([Object(r.m)({
                        selector: "[treeDrop]"
                    }), a("design:paramtypes", [r.n, r.M, o.a, r.G])], t)
                }()
        },
        G6z8: function(t, e, n) {
            var r = n("fR/l"),
                o = n("oCl/"),
                i = n("mTTR");
            t.exports = function(t) {
                return r(t, i, o)
            }
        },
        GDhZ: function(t, e, n) {
            var r = n("wF/u"),
                o = n("mwIZ"),
                i = n("hgQt"),
                a = n("9ggG"),
                s = n("CMye"),
                l = n("IOzZ"),
                u = n("9Nap");
            t.exports = function(t, e) {
                return a(t) && s(e) ? l(u(t), e) : function(n) {
                    var a = o(n, t);
                    return void 0 === a && a === e ? i(n, t) : r(e, a, 3)
                }
            }
        },
        GNiM: function(t, e, n) {
            var r = n("I01J"),
                o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                i = /\\(\\)?/g,
                a = r((function(t) {
                    var e = [];
                    return 46 === t.charCodeAt(0) && e.push(""), t.replace(o, (function(t, n, r, o) {
                        e.push(r ? o.replace(i, "$1") : n || t)
                    })), e
                }));
            t.exports = a
        },
        Gi0A: function(t, e, n) {
            var r = n("QqLw"),
                o = n("ExA7");
            t.exports = function(t) {
                return o(t) && "[object Map]" == r(t)
            }
        },
        GoyQ: function(t, e) {
            t.exports = function(t) {
                var e = typeof t;
                return null != t && ("object" == e || "function" == e)
            }
        },
        H0h1: function(t, e, n) {
            var r = n("SKAX");
            t.exports = function(t, e) {
                var n = !0;
                return r(t, (function(t, r, o) {
                    return n = !!e(t, r, o)
                })), n
            }
        },
        H8j4: function(t, e, n) {
            var r = n("QkVE");
            t.exports = function(t, e) {
                var n = r(this, t),
                    o = n.size;
                return n.set(t, e), this.size += n.size == o ? 0 : 1, this
            }
        },
        HDyB: function(t, e, n) {
            var r = n("nmnc"),
                o = n("JHRd"),
                i = n("ljhN"),
                a = n("or5M"),
                s = n("7fqy"),
                l = n("rEGp"),
                u = r ? r.prototype : void 0,
                c = u ? u.valueOf : void 0;
            t.exports = function(t, e, n, r, u, d, h) {
                switch (n) {
                    case "[object DataView]":
                        if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                        t = t.buffer, e = e.buffer;
                    case "[object ArrayBuffer]":
                        return !(t.byteLength != e.byteLength || !d(new o(t), new o(e)));
                    case "[object Boolean]":
                    case "[object Date]":
                    case "[object Number]":
                        return i(+t, +e);
                    case "[object Error]":
                        return t.name == e.name && t.message == e.message;
                    case "[object RegExp]":
                    case "[object String]":
                        return t == e + "";
                    case "[object Map]":
                        var f = s;
                    case "[object Set]":
                        if (f || (f = l), t.size != e.size && !(1 & r)) return !1;
                        var p = h.get(t);
                        if (p) return p == e;
                        r |= 2, h.set(t, e);
                        var g = a(f(t), f(e), r, u, d, h);
                        return h.delete(t), g;
                    case "[object Symbol]":
                        if (c) return c.call(t) == c.call(e)
                }
                return !1
            }
        },
        HIU9: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return c
            }));
            var r = n("CcnG"),
                o = n("dApe"),
                i = n("X+05"),
                a = n("DzJC"),
                s = n.n(a),
                l = function(t, e, n, r) {
                    var o, i = arguments.length,
                        a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, r);
                    else
                        for (var s = t.length - 1; s >= 0; s--)(o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
                    return i > 3 && a && Object.defineProperty(e, n, a), a
                },
                u = function(t, e) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
                },
                c = function() {
                    function t(t, e) {
                        var n = this;
                        this.elementRef = t, this.virtualScroll = e, this.setViewport = s()((function() {
                            n.virtualScroll.setViewport(n.elementRef.nativeElement)
                        }), 17)
                    }
                    return t.prototype.ngOnInit = function() {
                        this.virtualScroll.init()
                    }, t.prototype.ngAfterViewInit = function() {
                        var t = this;
                        setTimeout((function() {
                            t.setViewport(), t.virtualScroll.fireEvent({
                                eventName: i.a.initialized
                            })
                        }))
                    }, t.prototype.ngOnDestroy = function() {
                        this.virtualScroll.clear()
                    }, t.prototype.getTotalHeight = function() {
                        return this.virtualScroll.isEnabled() && this.virtualScroll.totalHeight + "px" || "auto"
                    }, t.prototype.onScroll = function(t) {
                        this.setViewport()
                    }, l([Object(r.r)("scroll", ["$event"]), u("design:type", Function), u("design:paramtypes", [Event]), u("design:returntype", void 0)], t.prototype, "onScroll", null), l([Object(r.j)({
                        selector: "tree-viewport",
                        styles: [],
                        providers: [o.a],
                        template: '\n    <ng-container *mobxAutorun="{dontDetach: true}">\n      <div [style.height]="getTotalHeight()">\n        <ng-content></ng-content>\n      </div>\n    </ng-container>\n  '
                    }), u("design:paramtypes", [r.n, o.a])], t)
                }()
        },
        HOxn: function(t, e, n) {
            var r = n("Cwc5")(n("Kz5y"), "Promise");
            t.exports = r
        },
        Hvzi: function(t, e) {
            t.exports = function(t) {
                var e = this.has(t) && delete this.__data__[t];
                return this.size -= e ? 1 : 0, e
            }
        },
        I01J: function(t, e, n) {
            var r = n("44Ds");
            t.exports = function(t) {
                var e = r(t, (function(t) {
                        return 500 === n.size && n.clear(), t
                    })),
                    n = e.cache;
                return e
            }
        },
        IOzZ: function(t, e) {
            t.exports = function(t, e) {
                return function(n) {
                    return null != n && n[t] === e && (void 0 !== e || t in Object(n))
                }
            }
        },
        Ioao: function(t, e, n) {
            var r = n("heNW"),
                o = Math.max;
            t.exports = function(t, e, n) {
                return e = o(void 0 === e ? t.length - 1 : e, 0),
                    function() {
                        for (var i = arguments, a = -1, s = o(i.length - e, 0), l = Array(s); ++a < s;) l[a] = i[e + a];
                        a = -1;
                        for (var u = Array(e + 1); ++a < e;) u[a] = i[a];
                        return u[e] = n(l), r(t, this, u)
                    }
            }
        },
        J2m7: function(t, e, n) {
            var r = n("XKAG")(n("UfWW"));
            t.exports = r
        },
        JBE3: function(t, e, n) {
            var r = n("+Qka"),
                o = n("LsHQ")((function(t, e, n, o) {
                    r(t, e, n, o)
                }));
            t.exports = o
        },
        JC6p: function(t, e, n) {
            var r = n("cq/+"),
                o = n("7GkX");
            t.exports = function(t, e) {
                return t && r(t, e, o)
            }
        },
        JHRd: function(t, e, n) {
            var r = n("Kz5y");
            t.exports = r.Uint8Array
        },
        JHgL: function(t, e, n) {
            var r = n("QkVE");
            t.exports = function(t) {
                return r(this, t).get(t)
            }
        },
        JSQU: function(t, e, n) {
            var r = n("YESw");
            t.exports = function(t, e) {
                var n = this.__data__;
                return this.size += this.has(t) ? 0 : 1, n[t] = r && void 0 === e ? "__lodash_hash_undefined__" : e, this
            }
        },
        JTzB: function(t, e, n) {
            var r = n("NykK"),
                o = n("ExA7");
            t.exports = function(t) {
                return o(t) && "[object Arguments]" == r(t)
            }
        },
        JZM8: function(t, e, n) {
            var r = n("FfPP"),
                o = n("xs/l")((function(t, e) {
                    return null == t ? {} : r(t, e)
                }));
            t.exports = o
        },
        Jlc5: function(t, e, n) {
            var r = n("ZirO"),
                o = n("H0h1"),
                i = n("ut/Y"),
                a = n("Z0cm"),
                s = n("mv/X");
            t.exports = function(t, e, n) {
                var l = a(t) ? r : o;
                return n && s(t, e, n) && (e = void 0), l(t, i(e, 3))
            }
        },
        JmpY: function(t, e, n) {
            var r = n("eUgh");
            t.exports = function(t, e) {
                return r(e, (function(e) {
                    return t[e]
                }))
            }
        },
        Juji: function(t, e) {
            t.exports = function(t, e) {
                return null != t && e in Object(t)
            }
        },
        KMkd: function(t, e) {
            t.exports = function() {
                this.__data__ = [], this.size = 0
            }
        },
        KfNM: function(t, e) {
            var n = Object.prototype.toString;
            t.exports = function(t) {
                return n.call(t)
            }
        },
        KwMD: function(t, e) {
            t.exports = function(t, e, n, r) {
                for (var o = t.length, i = n + (r ? 1 : -1); r ? i-- : ++i < o;)
                    if (e(t[i], i, t)) return i;
                return -1
            }
        },
        KxBF: function(t, e) {
            t.exports = function(t, e, n) {
                var r = -1,
                    o = t.length;
                e < 0 && (e = -e > o ? 0 : o + e), (n = n > o ? o : n) < 0 && (n += o), o = e > n ? 0 : n - e >>> 0, e >>>= 0;
                for (var i = Array(o); ++r < o;) i[r] = t[r + e];
                return i
            }
        },
        Kz5y: function(t, e, n) {
            var r = n("WFqU"),
                o = "object" == typeof self && self && self.Object === Object && self,
                i = r || o || Function("return this")();
            t.exports = i
        },
        L8xA: function(t, e) {
            t.exports = function(t) {
                var e = this.__data__,
                    n = e.delete(t);
                return this.size = e.size, n
            }
        },
        LXxW: function(t, e) {
            t.exports = function(t, e) {
                for (var n = -1, r = null == t ? 0 : t.length, o = 0, i = []; ++n < r;) {
                    var a = t[n];
                    e(a, n, t) && (i[o++] = a)
                }
                return i
            }
        },
        LcsW: function(t, e, n) {
            var r = n("kekF")(Object.getPrototypeOf, Object);
            t.exports = r
        },
        LsHQ: function(t, e, n) {
            var r = n("EA7m"),
                o = n("mv/X");
            t.exports = function(t) {
                return r((function(e, n) {
                    var r = -1,
                        i = n.length,
                        a = i > 1 ? n[i - 1] : void 0,
                        s = i > 2 ? n[2] : void 0;
                    for (a = t.length > 3 && "function" == typeof a ? (i--, a) : void 0, s && o(n[0], n[1], s) && (a = i < 3 ? void 0 : a, i = 1), e = Object(e); ++r < i;) {
                        var l = n[r];
                        l && t(e, l, r, a)
                    }
                    return e
                }))
            }
        },
        MJIl: function(t, e, n) {
            var r = n("QoRX"),
                o = n("ut/Y"),
                i = n("Nh2a"),
                a = n("Z0cm"),
                s = n("mv/X");
            t.exports = function(t, e, n) {
                var l = a(t) ? r : i;
                return n && s(t, e, n) && (e = void 0), l(t, o(e, 3))
            }
        },
        MMmD: function(t, e, n) {
            var r = n("lSCD"),
                o = n("shjB");
            t.exports = function(t) {
                return null != t && o(t.length) && !r(t)
            }
        },
        "MO+k": function(t, e, n) {
            t.exports = function(t) {
                "use strict";
                t = t && t.hasOwnProperty("default") ? t.default : t;
                var e = {
                        aliceblue: [240, 248, 255],
                        antiquewhite: [250, 235, 215],
                        aqua: [0, 255, 255],
                        aquamarine: [127, 255, 212],
                        azure: [240, 255, 255],
                        beige: [245, 245, 220],
                        bisque: [255, 228, 196],
                        black: [0, 0, 0],
                        blanchedalmond: [255, 235, 205],
                        blue: [0, 0, 255],
                        blueviolet: [138, 43, 226],
                        brown: [165, 42, 42],
                        burlywood: [222, 184, 135],
                        cadetblue: [95, 158, 160],
                        chartreuse: [127, 255, 0],
                        chocolate: [210, 105, 30],
                        coral: [255, 127, 80],
                        cornflowerblue: [100, 149, 237],
                        cornsilk: [255, 248, 220],
                        crimson: [220, 20, 60],
                        cyan: [0, 255, 255],
                        darkblue: [0, 0, 139],
                        darkcyan: [0, 139, 139],
                        darkgoldenrod: [184, 134, 11],
                        darkgray: [169, 169, 169],
                        darkgreen: [0, 100, 0],
                        darkgrey: [169, 169, 169],
                        darkkhaki: [189, 183, 107],
                        darkmagenta: [139, 0, 139],
                        darkolivegreen: [85, 107, 47],
                        darkorange: [255, 140, 0],
                        darkorchid: [153, 50, 204],
                        darkred: [139, 0, 0],
                        darksalmon: [233, 150, 122],
                        darkseagreen: [143, 188, 143],
                        darkslateblue: [72, 61, 139],
                        darkslategray: [47, 79, 79],
                        darkslategrey: [47, 79, 79],
                        darkturquoise: [0, 206, 209],
                        darkviolet: [148, 0, 211],
                        deeppink: [255, 20, 147],
                        deepskyblue: [0, 191, 255],
                        dimgray: [105, 105, 105],
                        dimgrey: [105, 105, 105],
                        dodgerblue: [30, 144, 255],
                        firebrick: [178, 34, 34],
                        floralwhite: [255, 250, 240],
                        forestgreen: [34, 139, 34],
                        fuchsia: [255, 0, 255],
                        gainsboro: [220, 220, 220],
                        ghostwhite: [248, 248, 255],
                        gold: [255, 215, 0],
                        goldenrod: [218, 165, 32],
                        gray: [128, 128, 128],
                        green: [0, 128, 0],
                        greenyellow: [173, 255, 47],
                        grey: [128, 128, 128],
                        honeydew: [240, 255, 240],
                        hotpink: [255, 105, 180],
                        indianred: [205, 92, 92],
                        indigo: [75, 0, 130],
                        ivory: [255, 255, 240],
                        khaki: [240, 230, 140],
                        lavender: [230, 230, 250],
                        lavenderblush: [255, 240, 245],
                        lawngreen: [124, 252, 0],
                        lemonchiffon: [255, 250, 205],
                        lightblue: [173, 216, 230],
                        lightcoral: [240, 128, 128],
                        lightcyan: [224, 255, 255],
                        lightgoldenrodyellow: [250, 250, 210],
                        lightgray: [211, 211, 211],
                        lightgreen: [144, 238, 144],
                        lightgrey: [211, 211, 211],
                        lightpink: [255, 182, 193],
                        lightsalmon: [255, 160, 122],
                        lightseagreen: [32, 178, 170],
                        lightskyblue: [135, 206, 250],
                        lightslategray: [119, 136, 153],
                        lightslategrey: [119, 136, 153],
                        lightsteelblue: [176, 196, 222],
                        lightyellow: [255, 255, 224],
                        lime: [0, 255, 0],
                        limegreen: [50, 205, 50],
                        linen: [250, 240, 230],
                        magenta: [255, 0, 255],
                        maroon: [128, 0, 0],
                        mediumaquamarine: [102, 205, 170],
                        mediumblue: [0, 0, 205],
                        mediumorchid: [186, 85, 211],
                        mediumpurple: [147, 112, 219],
                        mediumseagreen: [60, 179, 113],
                        mediumslateblue: [123, 104, 238],
                        mediumspringgreen: [0, 250, 154],
                        mediumturquoise: [72, 209, 204],
                        mediumvioletred: [199, 21, 133],
                        midnightblue: [25, 25, 112],
                        mintcream: [245, 255, 250],
                        mistyrose: [255, 228, 225],
                        moccasin: [255, 228, 181],
                        navajowhite: [255, 222, 173],
                        navy: [0, 0, 128],
                        oldlace: [253, 245, 230],
                        olive: [128, 128, 0],
                        olivedrab: [107, 142, 35],
                        orange: [255, 165, 0],
                        orangered: [255, 69, 0],
                        orchid: [218, 112, 214],
                        palegoldenrod: [238, 232, 170],
                        palegreen: [152, 251, 152],
                        paleturquoise: [175, 238, 238],
                        palevioletred: [219, 112, 147],
                        papayawhip: [255, 239, 213],
                        peachpuff: [255, 218, 185],
                        peru: [205, 133, 63],
                        pink: [255, 192, 203],
                        plum: [221, 160, 221],
                        powderblue: [176, 224, 230],
                        purple: [128, 0, 128],
                        rebeccapurple: [102, 51, 153],
                        red: [255, 0, 0],
                        rosybrown: [188, 143, 143],
                        royalblue: [65, 105, 225],
                        saddlebrown: [139, 69, 19],
                        salmon: [250, 128, 114],
                        sandybrown: [244, 164, 96],
                        seagreen: [46, 139, 87],
                        seashell: [255, 245, 238],
                        sienna: [160, 82, 45],
                        silver: [192, 192, 192],
                        skyblue: [135, 206, 235],
                        slateblue: [106, 90, 205],
                        slategray: [112, 128, 144],
                        slategrey: [112, 128, 144],
                        snow: [255, 250, 250],
                        springgreen: [0, 255, 127],
                        steelblue: [70, 130, 180],
                        tan: [210, 180, 140],
                        teal: [0, 128, 128],
                        thistle: [216, 191, 216],
                        tomato: [255, 99, 71],
                        turquoise: [64, 224, 208],
                        violet: [238, 130, 238],
                        wheat: [245, 222, 179],
                        white: [255, 255, 255],
                        whitesmoke: [245, 245, 245],
                        yellow: [255, 255, 0],
                        yellowgreen: [154, 205, 50]
                    },
                    n = function(t, n) {
                        return function(t) {
                            var n = {};
                            for (var r in e) e.hasOwnProperty(r) && (n[e[r]] = r);
                            var o = t.exports = {
                                rgb: {
                                    channels: 3,
                                    labels: "rgb"
                                },
                                hsl: {
                                    channels: 3,
                                    labels: "hsl"
                                },
                                hsv: {
                                    channels: 3,
                                    labels: "hsv"
                                },
                                hwb: {
                                    channels: 3,
                                    labels: "hwb"
                                },
                                cmyk: {
                                    channels: 4,
                                    labels: "cmyk"
                                },
                                xyz: {
                                    channels: 3,
                                    labels: "xyz"
                                },
                                lab: {
                                    channels: 3,
                                    labels: "lab"
                                },
                                lch: {
                                    channels: 3,
                                    labels: "lch"
                                },
                                hex: {
                                    channels: 1,
                                    labels: ["hex"]
                                },
                                keyword: {
                                    channels: 1,
                                    labels: ["keyword"]
                                },
                                ansi16: {
                                    channels: 1,
                                    labels: ["ansi16"]
                                },
                                ansi256: {
                                    channels: 1,
                                    labels: ["ansi256"]
                                },
                                hcg: {
                                    channels: 3,
                                    labels: ["h", "c", "g"]
                                },
                                apple: {
                                    channels: 3,
                                    labels: ["r16", "g16", "b16"]
                                },
                                gray: {
                                    channels: 1,
                                    labels: ["gray"]
                                }
                            };
                            for (var i in o)
                                if (o.hasOwnProperty(i)) {
                                    if (!("channels" in o[i])) throw new Error("missing channels property: " + i);
                                    if (!("labels" in o[i])) throw new Error("missing channel labels property: " + i);
                                    if (o[i].labels.length !== o[i].channels) throw new Error("channel and label counts mismatch: " + i);
                                    var a = o[i].channels,
                                        s = o[i].labels;
                                    delete o[i].channels, delete o[i].labels, Object.defineProperty(o[i], "channels", {
                                        value: a
                                    }), Object.defineProperty(o[i], "labels", {
                                        value: s
                                    })
                                } o.rgb.hsl = function(t) {
                                var e, n, r = t[0] / 255,
                                    o = t[1] / 255,
                                    i = t[2] / 255,
                                    a = Math.min(r, o, i),
                                    s = Math.max(r, o, i),
                                    l = s - a;
                                return s === a ? e = 0 : r === s ? e = (o - i) / l : o === s ? e = 2 + (i - r) / l : i === s && (e = 4 + (r - o) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), n = (a + s) / 2, [e, 100 * (s === a ? 0 : n <= .5 ? l / (s + a) : l / (2 - s - a)), 100 * n]
                            }, o.rgb.hsv = function(t) {
                                var e, n, r, o, i, a = t[0] / 255,
                                    s = t[1] / 255,
                                    l = t[2] / 255,
                                    u = Math.max(a, s, l),
                                    c = u - Math.min(a, s, l),
                                    d = function(t) {
                                        return (u - t) / 6 / c + .5
                                    };
                                return 0 === c ? o = i = 0 : (i = c / u, e = d(a), n = d(s), r = d(l), a === u ? o = r - n : s === u ? o = 1 / 3 + e - r : l === u && (o = 2 / 3 + n - e), o < 0 ? o += 1 : o > 1 && (o -= 1)), [360 * o, 100 * i, 100 * u]
                            }, o.rgb.hwb = function(t) {
                                var e = t[0],
                                    n = t[1],
                                    r = t[2];
                                return [o.rgb.hsl(t)[0], 1 / 255 * Math.min(e, Math.min(n, r)) * 100, 100 * (r = 1 - 1 / 255 * Math.max(e, Math.max(n, r)))]
                            }, o.rgb.cmyk = function(t) {
                                var e, n = t[0] / 255,
                                    r = t[1] / 255,
                                    o = t[2] / 255;
                                return [100 * ((1 - n - (e = Math.min(1 - n, 1 - r, 1 - o))) / (1 - e) || 0), 100 * ((1 - r - e) / (1 - e) || 0), 100 * ((1 - o - e) / (1 - e) || 0), 100 * e]
                            }, o.rgb.keyword = function(t) {
                                var r = n[t];
                                if (r) return r;
                                var o, i, a, s = 1 / 0;
                                for (var l in e)
                                    if (e.hasOwnProperty(l)) {
                                        var u = (i = t, a = e[l], Math.pow(i[0] - a[0], 2) + Math.pow(i[1] - a[1], 2) + Math.pow(i[2] - a[2], 2));
                                        u < s && (s = u, o = l)
                                    } return o
                            }, o.keyword.rgb = function(t) {
                                return e[t]
                            }, o.rgb.xyz = function(t) {
                                var e = t[0] / 255,
                                    n = t[1] / 255,
                                    r = t[2] / 255;
                                return [100 * (.4124 * (e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .1805 * (r = r > .04045 ? Math.pow((r + .055) / 1.055, 2.4) : r / 12.92)), 100 * (.2126 * e + .7152 * n + .0722 * r), 100 * (.0193 * e + .1192 * n + .9505 * r)]
                            }, o.rgb.lab = function(t) {
                                var e = o.rgb.xyz(t),
                                    n = e[0],
                                    r = e[1],
                                    i = e[2];
                                return r /= 100, i /= 108.883, n = (n /= 95.047) > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, [116 * (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116) - 16, 500 * (n - r), 200 * (r - (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116))]
                            }, o.hsl.rgb = function(t) {
                                var e, n, r, o, i, a = t[0] / 360,
                                    s = t[1] / 100,
                                    l = t[2] / 100;
                                if (0 === s) return [i = 255 * l, i, i];
                                e = 2 * l - (n = l < .5 ? l * (1 + s) : l + s - l * s), o = [0, 0, 0];
                                for (var u = 0; u < 3; u++)(r = a + 1 / 3 * -(u - 1)) < 0 && r++, r > 1 && r--, o[u] = 255 * (i = 6 * r < 1 ? e + 6 * (n - e) * r : 2 * r < 1 ? n : 3 * r < 2 ? e + (n - e) * (2 / 3 - r) * 6 : e);
                                return o
                            }, o.hsl.hsv = function(t) {
                                var e = t[0],
                                    n = t[1] / 100,
                                    r = t[2] / 100,
                                    o = n,
                                    i = Math.max(r, .01);
                                return n *= (r *= 2) <= 1 ? r : 2 - r, o *= i <= 1 ? i : 2 - i, [e, 100 * (0 === r ? 2 * o / (i + o) : 2 * n / (r + n)), (r + n) / 2 * 100]
                            }, o.hsv.rgb = function(t) {
                                var e = t[0] / 60,
                                    n = t[1] / 100,
                                    r = t[2] / 100,
                                    o = Math.floor(e) % 6,
                                    i = e - Math.floor(e),
                                    a = 255 * r * (1 - n),
                                    s = 255 * r * (1 - n * i),
                                    l = 255 * r * (1 - n * (1 - i));
                                switch (r *= 255, o) {
                                    case 0:
                                        return [r, l, a];
                                    case 1:
                                        return [s, r, a];
                                    case 2:
                                        return [a, r, l];
                                    case 3:
                                        return [a, s, r];
                                    case 4:
                                        return [l, a, r];
                                    case 5:
                                        return [r, a, s]
                                }
                            }, o.hsv.hsl = function(t) {
                                var e, n, r, o = t[0],
                                    i = t[1] / 100,
                                    a = t[2] / 100,
                                    s = Math.max(a, .01);
                                return r = (2 - i) * a, n = i * s, [o, 100 * (n = (n /= (e = (2 - i) * s) <= 1 ? e : 2 - e) || 0), 100 * (r /= 2)]
                            }, o.hwb.rgb = function(t) {
                                var e, n, r, o, i, a, s, l = t[0] / 360,
                                    u = t[1] / 100,
                                    c = t[2] / 100,
                                    d = u + c;
                                switch (d > 1 && (u /= d, c /= d), r = 6 * l - (e = Math.floor(6 * l)), 0 != (1 & e) && (r = 1 - r), o = u + r * ((n = 1 - c) - u), e) {
                                    default:
                                    case 6:
                                    case 0:
                                        i = n, a = o, s = u;
                                        break;
                                    case 1:
                                        i = o, a = n, s = u;
                                        break;
                                    case 2:
                                        i = u, a = n, s = o;
                                        break;
                                    case 3:
                                        i = u, a = o, s = n;
                                        break;
                                    case 4:
                                        i = o, a = u, s = n;
                                        break;
                                    case 5:
                                        i = n, a = u, s = o
                                }
                                return [255 * i, 255 * a, 255 * s]
                            }, o.cmyk.rgb = function(t) {
                                var e = t[1] / 100,
                                    n = t[2] / 100,
                                    r = t[3] / 100;
                                return [255 * (1 - Math.min(1, t[0] / 100 * (1 - r) + r)), 255 * (1 - Math.min(1, e * (1 - r) + r)), 255 * (1 - Math.min(1, n * (1 - r) + r))]
                            }, o.xyz.rgb = function(t) {
                                var e, n, r, o = t[0] / 100,
                                    i = t[1] / 100,
                                    a = t[2] / 100;
                                return n = -.9689 * o + 1.8758 * i + .0415 * a, r = .0557 * o + -.204 * i + 1.057 * a, e = (e = 3.2406 * o + -1.5372 * i + -.4986 * a) > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : 12.92 * e, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : 12.92 * n, r = r > .0031308 ? 1.055 * Math.pow(r, 1 / 2.4) - .055 : 12.92 * r, [255 * (e = Math.min(Math.max(0, e), 1)), 255 * (n = Math.min(Math.max(0, n), 1)), 255 * (r = Math.min(Math.max(0, r), 1))]
                            }, o.xyz.lab = function(t) {
                                var e = t[0],
                                    n = t[1],
                                    r = t[2];
                                return n /= 100, r /= 108.883, e = (e /= 95.047) > .008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (e - n), 200 * (n - (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116))]
                            }, o.lab.xyz = function(t) {
                                var e, n, r;
                                e = t[1] / 500 + (n = (t[0] + 16) / 116), r = n - t[2] / 200;
                                var o = Math.pow(n, 3),
                                    i = Math.pow(e, 3),
                                    a = Math.pow(r, 3);
                                return n = o > .008856 ? o : (n - 16 / 116) / 7.787, e = i > .008856 ? i : (e - 16 / 116) / 7.787, r = a > .008856 ? a : (r - 16 / 116) / 7.787, [e *= 95.047, n *= 100, r *= 108.883]
                            }, o.lab.lch = function(t) {
                                var e, n = t[0],
                                    r = t[1],
                                    o = t[2];
                                return (e = 360 * Math.atan2(o, r) / 2 / Math.PI) < 0 && (e += 360), [n, Math.sqrt(r * r + o * o), e]
                            }, o.lch.lab = function(t) {
                                var e, n = t[1];
                                return e = t[2] / 360 * 2 * Math.PI, [t[0], n * Math.cos(e), n * Math.sin(e)]
                            }, o.rgb.ansi16 = function(t) {
                                var e = t[0],
                                    n = t[1],
                                    r = t[2],
                                    i = 1 in arguments ? arguments[1] : o.rgb.hsv(t)[2];
                                if (0 === (i = Math.round(i / 50))) return 30;
                                var a = 30 + (Math.round(r / 255) << 2 | Math.round(n / 255) << 1 | Math.round(e / 255));
                                return 2 === i && (a += 60), a
                            }, o.hsv.ansi16 = function(t) {
                                return o.rgb.ansi16(o.hsv.rgb(t), t[2])
                            }, o.rgb.ansi256 = function(t) {
                                var e = t[0],
                                    n = t[1],
                                    r = t[2];
                                return e === n && n === r ? e < 8 ? 16 : e > 248 ? 231 : Math.round((e - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(e / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(r / 255 * 5)
                            }, o.ansi16.rgb = function(t) {
                                var e = t % 10;
                                if (0 === e || 7 === e) return t > 50 && (e += 3.5), [e = e / 10.5 * 255, e, e];
                                var n = .5 * (1 + ~~(t > 50));
                                return [(1 & e) * n * 255, (e >> 1 & 1) * n * 255, (e >> 2 & 1) * n * 255]
                            }, o.ansi256.rgb = function(t) {
                                if (t >= 232) {
                                    var e = 10 * (t - 232) + 8;
                                    return [e, e, e]
                                }
                                var n;
                                return t -= 16, [Math.floor(t / 36) / 5 * 255, Math.floor((n = t % 36) / 6) / 5 * 255, n % 6 / 5 * 255]
                            }, o.rgb.hex = function(t) {
                                var e = (((255 & Math.round(t[0])) << 16) + ((255 & Math.round(t[1])) << 8) + (255 & Math.round(t[2]))).toString(16).toUpperCase();
                                return "000000".substring(e.length) + e
                            }, o.hex.rgb = function(t) {
                                var e = t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
                                if (!e) return [0, 0, 0];
                                var n = e[0];
                                3 === e[0].length && (n = n.split("").map((function(t) {
                                    return t + t
                                })).join(""));
                                var r = parseInt(n, 16);
                                return [r >> 16 & 255, r >> 8 & 255, 255 & r]
                            }, o.rgb.hcg = function(t) {
                                var e, n = t[0] / 255,
                                    r = t[1] / 255,
                                    o = t[2] / 255,
                                    i = Math.max(Math.max(n, r), o),
                                    a = Math.min(Math.min(n, r), o),
                                    s = i - a;
                                return e = s <= 0 ? 0 : i === n ? (r - o) / s % 6 : i === r ? 2 + (o - n) / s : 4 + (n - r) / s + 4, e /= 6, [360 * (e %= 1), 100 * s, 100 * (s < 1 ? a / (1 - s) : 0)]
                            }, o.hsl.hcg = function(t) {
                                var e, n = t[1] / 100,
                                    r = t[2] / 100,
                                    o = 0;
                                return (e = r < .5 ? 2 * n * r : 2 * n * (1 - r)) < 1 && (o = (r - .5 * e) / (1 - e)), [t[0], 100 * e, 100 * o]
                            }, o.hsv.hcg = function(t) {
                                var e = t[2] / 100,
                                    n = t[1] / 100 * e,
                                    r = 0;
                                return n < 1 && (r = (e - n) / (1 - n)), [t[0], 100 * n, 100 * r]
                            }, o.hcg.rgb = function(t) {
                                var e = t[1] / 100,
                                    n = t[2] / 100;
                                if (0 === e) return [255 * n, 255 * n, 255 * n];
                                var r, o = [0, 0, 0],
                                    i = t[0] / 360 % 1 * 6,
                                    a = i % 1,
                                    s = 1 - a;
                                switch (Math.floor(i)) {
                                    case 0:
                                        o[0] = 1, o[1] = a, o[2] = 0;
                                        break;
                                    case 1:
                                        o[0] = s, o[1] = 1, o[2] = 0;
                                        break;
                                    case 2:
                                        o[0] = 0, o[1] = 1, o[2] = a;
                                        break;
                                    case 3:
                                        o[0] = 0, o[1] = s, o[2] = 1;
                                        break;
                                    case 4:
                                        o[0] = a, o[1] = 0, o[2] = 1;
                                        break;
                                    default:
                                        o[0] = 1, o[1] = 0, o[2] = s
                                }
                                return [255 * (e * o[0] + (r = (1 - e) * n)), 255 * (e * o[1] + r), 255 * (e * o[2] + r)]
                            }, o.hcg.hsv = function(t) {
                                var e = t[1] / 100,
                                    n = e + t[2] / 100 * (1 - e),
                                    r = 0;
                                return n > 0 && (r = e / n), [t[0], 100 * r, 100 * n]
                            }, o.hcg.hsl = function(t) {
                                var e = t[1] / 100,
                                    n = t[2] / 100 * (1 - e) + .5 * e,
                                    r = 0;
                                return n > 0 && n < .5 ? r = e / (2 * n) : n >= .5 && n < 1 && (r = e / (2 * (1 - n))), [t[0], 100 * r, 100 * n]
                            }, o.hcg.hwb = function(t) {
                                var e = t[1] / 100,
                                    n = e + t[2] / 100 * (1 - e);
                                return [t[0], 100 * (n - e), 100 * (1 - n)]
                            }, o.hwb.hcg = function(t) {
                                var e = 1 - t[2] / 100,
                                    n = e - t[1] / 100,
                                    r = 0;
                                return n < 1 && (r = (e - n) / (1 - n)), [t[0], 100 * n, 100 * r]
                            }, o.apple.rgb = function(t) {
                                return [t[0] / 65535 * 255, t[1] / 65535 * 255, t[2] / 65535 * 255]
                            }, o.rgb.apple = function(t) {
                                return [t[0] / 255 * 65535, t[1] / 255 * 65535, t[2] / 255 * 65535]
                            }, o.gray.rgb = function(t) {
                                return [t[0] / 100 * 255, t[0] / 100 * 255, t[0] / 100 * 255]
                            }, o.gray.hsl = o.gray.hsv = function(t) {
                                return [0, 0, t[0]]
                            }, o.gray.hwb = function(t) {
                                return [0, 100, t[0]]
                            }, o.gray.cmyk = function(t) {
                                return [0, 0, 0, t[0]]
                            }, o.gray.lab = function(t) {
                                return [t[0], 0, 0]
                            }, o.gray.hex = function(t) {
                                var e = 255 & Math.round(t[0] / 100 * 255),
                                    n = ((e << 16) + (e << 8) + e).toString(16).toUpperCase();
                                return "000000".substring(n.length) + n
                            }, o.rgb.gray = function(t) {
                                return [(t[0] + t[1] + t[2]) / 3 / 255 * 100]
                            }
                        }(n = {
                            exports: {}
                        }), n.exports
                    }();

                function r(t, e) {
                    return function(n) {
                        return e(t(n))
                    }
                }

                function o(t, e) {
                    for (var o = [e[t].parent, t], i = n[e[t].parent][t], a = e[t].parent; e[a].parent;) o.unshift(e[a].parent), i = r(n[e[a].parent][a], i), a = e[a].parent;
                    return i.conversion = o, i
                }
                var i = {};
                Object.keys(n).forEach((function(t) {
                    i[t] = {}, Object.defineProperty(i[t], "channels", {
                        value: n[t].channels
                    }), Object.defineProperty(i[t], "labels", {
                        value: n[t].labels
                    });
                    var e = function(t) {
                        for (var e = function(t) {
                                var e = function() {
                                        for (var t = {}, e = Object.keys(n), r = e.length, o = 0; o < r; o++) t[e[o]] = {
                                            distance: -1,
                                            parent: null
                                        };
                                        return t
                                    }(),
                                    r = [t];
                                for (e[t].distance = 0; r.length;)
                                    for (var o = r.pop(), i = Object.keys(n[o]), a = i.length, s = 0; s < a; s++) {
                                        var l = i[s],
                                            u = e[l]; - 1 === u.distance && (u.distance = e[o].distance + 1, u.parent = o, r.unshift(l))
                                    }
                                return e
                            }(t), r = {}, i = Object.keys(e), a = i.length, s = 0; s < a; s++) {
                            var l = i[s];
                            null !== e[l].parent && (r[l] = o(l, e))
                        }
                        return r
                    }(t);
                    Object.keys(e).forEach((function(n) {
                        var r = e[n];
                        i[t][n] = function(t) {
                            var e = function(e) {
                                if (null == e) return e;
                                arguments.length > 1 && (e = Array.prototype.slice.call(arguments));
                                var n = t(e);
                                if ("object" == typeof n)
                                    for (var r = n.length, o = 0; o < r; o++) n[o] = Math.round(n[o]);
                                return n
                            };
                            return "conversion" in t && (e.conversion = t.conversion), e
                        }(r), i[t][n].raw = function(t) {
                            var e = function(e) {
                                return null == e ? e : (arguments.length > 1 && (e = Array.prototype.slice.call(arguments)), t(e))
                            };
                            return "conversion" in t && (e.conversion = t.conversion), e
                        }(r)
                    }))
                }));
                var a = i,
                    s = {
                        aliceblue: [240, 248, 255],
                        antiquewhite: [250, 235, 215],
                        aqua: [0, 255, 255],
                        aquamarine: [127, 255, 212],
                        azure: [240, 255, 255],
                        beige: [245, 245, 220],
                        bisque: [255, 228, 196],
                        black: [0, 0, 0],
                        blanchedalmond: [255, 235, 205],
                        blue: [0, 0, 255],
                        blueviolet: [138, 43, 226],
                        brown: [165, 42, 42],
                        burlywood: [222, 184, 135],
                        cadetblue: [95, 158, 160],
                        chartreuse: [127, 255, 0],
                        chocolate: [210, 105, 30],
                        coral: [255, 127, 80],
                        cornflowerblue: [100, 149, 237],
                        cornsilk: [255, 248, 220],
                        crimson: [220, 20, 60],
                        cyan: [0, 255, 255],
                        darkblue: [0, 0, 139],
                        darkcyan: [0, 139, 139],
                        darkgoldenrod: [184, 134, 11],
                        darkgray: [169, 169, 169],
                        darkgreen: [0, 100, 0],
                        darkgrey: [169, 169, 169],
                        darkkhaki: [189, 183, 107],
                        darkmagenta: [139, 0, 139],
                        darkolivegreen: [85, 107, 47],
                        darkorange: [255, 140, 0],
                        darkorchid: [153, 50, 204],
                        darkred: [139, 0, 0],
                        darksalmon: [233, 150, 122],
                        darkseagreen: [143, 188, 143],
                        darkslateblue: [72, 61, 139],
                        darkslategray: [47, 79, 79],
                        darkslategrey: [47, 79, 79],
                        darkturquoise: [0, 206, 209],
                        darkviolet: [148, 0, 211],
                        deeppink: [255, 20, 147],
                        deepskyblue: [0, 191, 255],
                        dimgray: [105, 105, 105],
                        dimgrey: [105, 105, 105],
                        dodgerblue: [30, 144, 255],
                        firebrick: [178, 34, 34],
                        floralwhite: [255, 250, 240],
                        forestgreen: [34, 139, 34],
                        fuchsia: [255, 0, 255],
                        gainsboro: [220, 220, 220],
                        ghostwhite: [248, 248, 255],
                        gold: [255, 215, 0],
                        goldenrod: [218, 165, 32],
                        gray: [128, 128, 128],
                        green: [0, 128, 0],
                        greenyellow: [173, 255, 47],
                        grey: [128, 128, 128],
                        honeydew: [240, 255, 240],
                        hotpink: [255, 105, 180],
                        indianred: [205, 92, 92],
                        indigo: [75, 0, 130],
                        ivory: [255, 255, 240],
                        khaki: [240, 230, 140],
                        lavender: [230, 230, 250],
                        lavenderblush: [255, 240, 245],
                        lawngreen: [124, 252, 0],
                        lemonchiffon: [255, 250, 205],
                        lightblue: [173, 216, 230],
                        lightcoral: [240, 128, 128],
                        lightcyan: [224, 255, 255],
                        lightgoldenrodyellow: [250, 250, 210],
                        lightgray: [211, 211, 211],
                        lightgreen: [144, 238, 144],
                        lightgrey: [211, 211, 211],
                        lightpink: [255, 182, 193],
                        lightsalmon: [255, 160, 122],
                        lightseagreen: [32, 178, 170],
                        lightskyblue: [135, 206, 250],
                        lightslategray: [119, 136, 153],
                        lightslategrey: [119, 136, 153],
                        lightsteelblue: [176, 196, 222],
                        lightyellow: [255, 255, 224],
                        lime: [0, 255, 0],
                        limegreen: [50, 205, 50],
                        linen: [250, 240, 230],
                        magenta: [255, 0, 255],
                        maroon: [128, 0, 0],
                        mediumaquamarine: [102, 205, 170],
                        mediumblue: [0, 0, 205],
                        mediumorchid: [186, 85, 211],
                        mediumpurple: [147, 112, 219],
                        mediumseagreen: [60, 179, 113],
                        mediumslateblue: [123, 104, 238],
                        mediumspringgreen: [0, 250, 154],
                        mediumturquoise: [72, 209, 204],
                        mediumvioletred: [199, 21, 133],
                        midnightblue: [25, 25, 112],
                        mintcream: [245, 255, 250],
                        mistyrose: [255, 228, 225],
                        moccasin: [255, 228, 181],
                        navajowhite: [255, 222, 173],
                        navy: [0, 0, 128],
                        oldlace: [253, 245, 230],
                        olive: [128, 128, 0],
                        olivedrab: [107, 142, 35],
                        orange: [255, 165, 0],
                        orangered: [255, 69, 0],
                        orchid: [218, 112, 214],
                        palegoldenrod: [238, 232, 170],
                        palegreen: [152, 251, 152],
                        paleturquoise: [175, 238, 238],
                        palevioletred: [219, 112, 147],
                        papayawhip: [255, 239, 213],
                        peachpuff: [255, 218, 185],
                        peru: [205, 133, 63],
                        pink: [255, 192, 203],
                        plum: [221, 160, 221],
                        powderblue: [176, 224, 230],
                        purple: [128, 0, 128],
                        rebeccapurple: [102, 51, 153],
                        red: [255, 0, 0],
                        rosybrown: [188, 143, 143],
                        royalblue: [65, 105, 225],
                        saddlebrown: [139, 69, 19],
                        salmon: [250, 128, 114],
                        sandybrown: [244, 164, 96],
                        seagreen: [46, 139, 87],
                        seashell: [255, 245, 238],
                        sienna: [160, 82, 45],
                        silver: [192, 192, 192],
                        skyblue: [135, 206, 235],
                        slateblue: [106, 90, 205],
                        slategray: [112, 128, 144],
                        slategrey: [112, 128, 144],
                        snow: [255, 250, 250],
                        springgreen: [0, 255, 127],
                        steelblue: [70, 130, 180],
                        tan: [210, 180, 140],
                        teal: [0, 128, 128],
                        thistle: [216, 191, 216],
                        tomato: [255, 99, 71],
                        turquoise: [64, 224, 208],
                        violet: [238, 130, 238],
                        wheat: [245, 222, 179],
                        white: [255, 255, 255],
                        whitesmoke: [245, 245, 245],
                        yellow: [255, 255, 0],
                        yellowgreen: [154, 205, 50]
                    },
                    l = {
                        getRgba: u,
                        getHsla: c,
                        getRgb: function(t) {
                            var e = u(t);
                            return e && e.slice(0, 3)
                        },
                        getHsl: function(t) {
                            var e = c(t);
                            return e && e.slice(0, 3)
                        },
                        getHwb: d,
                        getAlpha: function(t) {
                            var e = u(t);
                            return e ? e[3] : (e = c(t)) ? e[3] : (e = d(t)) ? e[3] : void 0
                        },
                        hexString: function(t, e) {
                            return e = void 0 !== e && 3 === t.length ? e : t[3], "#" + v(t[0]) + v(t[1]) + v(t[2]) + (e >= 0 && e < 1 ? v(Math.round(255 * e)) : "")
                        },
                        rgbString: function(t, e) {
                            return e < 1 || t[3] && t[3] < 1 ? h(t, e) : "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
                        },
                        rgbaString: h,
                        percentString: function(t, e) {
                            return e < 1 || t[3] && t[3] < 1 ? f(t, e) : "rgb(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%)"
                        },
                        percentaString: f,
                        hslString: function(t, e) {
                            return e < 1 || t[3] && t[3] < 1 ? p(t, e) : "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)"
                        },
                        hslaString: p,
                        hwbString: function(t, e) {
                            return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")"
                        },
                        keyword: function(t) {
                            return y[t.slice(0, 3)]
                        }
                    };

                function u(t) {
                    if (t) {
                        var e = [0, 0, 0],
                            n = 1,
                            r = t.match(/^#([a-fA-F0-9]{3,4})$/i),
                            o = "";
                        if (r) {
                            o = (r = r[1])[3];
                            for (var i = 0; i < e.length; i++) e[i] = parseInt(r[i] + r[i], 16);
                            o && (n = Math.round(parseInt(o + o, 16) / 255 * 100) / 100)
                        } else if (r = t.match(/^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i)) {
                            for (o = r[2], r = r[1], i = 0; i < e.length; i++) e[i] = parseInt(r.slice(2 * i, 2 * i + 2), 16);
                            o && (n = Math.round(parseInt(o, 16) / 255 * 100) / 100)
                        } else if (r = t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                            for (i = 0; i < e.length; i++) e[i] = parseInt(r[i + 1]);
                            n = parseFloat(r[4])
                        } else if (r = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                            for (i = 0; i < e.length; i++) e[i] = Math.round(2.55 * parseFloat(r[i + 1]));
                            n = parseFloat(r[4])
                        } else if (r = t.match(/(\w+)/)) {
                            if ("transparent" == r[1]) return [0, 0, 0, 0];
                            if (!(e = s[r[1]])) return
                        }
                        for (i = 0; i < e.length; i++) e[i] = g(e[i], 0, 255);
                        return n = n || 0 == n ? g(n, 0, 1) : 1, e[3] = n, e
                    }
                }

                function c(t) {
                    if (t) {
                        var e = t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                        if (e) {
                            var n = parseFloat(e[4]);
                            return [g(parseInt(e[1]), 0, 360), g(parseFloat(e[2]), 0, 100), g(parseFloat(e[3]), 0, 100), g(isNaN(n) ? 1 : n, 0, 1)]
                        }
                    }
                }

                function d(t) {
                    if (t) {
                        var e = t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                        if (e) {
                            var n = parseFloat(e[4]);
                            return [g(parseInt(e[1]), 0, 360), g(parseFloat(e[2]), 0, 100), g(parseFloat(e[3]), 0, 100), g(isNaN(n) ? 1 : n, 0, 1)]
                        }
                    }
                }

                function h(t, e) {
                    return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
                }

                function f(t, e) {
                    return "rgba(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%, " + (e || t[3] || 1) + ")"
                }

                function p(t, e) {
                    return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
                }

                function g(t, e, n) {
                    return Math.min(Math.max(e, t), n)
                }

                function v(t) {
                    var e = t.toString(16).toUpperCase();
                    return e.length < 2 ? "0" + e : e
                }
                var y = {};
                for (var b in s) y[s[b]] = b;
                var m = function(t) {
                    return t instanceof m ? t : this instanceof m ? (this.valid = !1, this.values = {
                        rgb: [0, 0, 0],
                        hsl: [0, 0, 0],
                        hsv: [0, 0, 0],
                        hwb: [0, 0, 0],
                        cmyk: [0, 0, 0, 0],
                        alpha: 1
                    }, void("string" == typeof t ? (e = l.getRgba(t)) ? this.setValues("rgb", e) : (e = l.getHsla(t)) ? this.setValues("hsl", e) : (e = l.getHwb(t)) && this.setValues("hwb", e) : "object" == typeof t && (void 0 !== (e = t).r || void 0 !== e.red ? this.setValues("rgb", e) : void 0 !== e.l || void 0 !== e.lightness ? this.setValues("hsl", e) : void 0 !== e.v || void 0 !== e.value ? this.setValues("hsv", e) : void 0 !== e.w || void 0 !== e.whiteness ? this.setValues("hwb", e) : void 0 === e.c && void 0 === e.cyan || this.setValues("cmyk", e)))) : new m(t);
                    var e
                };
                m.prototype = {
                    isValid: function() {
                        return this.valid
                    },
                    rgb: function() {
                        return this.setSpace("rgb", arguments)
                    },
                    hsl: function() {
                        return this.setSpace("hsl", arguments)
                    },
                    hsv: function() {
                        return this.setSpace("hsv", arguments)
                    },
                    hwb: function() {
                        return this.setSpace("hwb", arguments)
                    },
                    cmyk: function() {
                        return this.setSpace("cmyk", arguments)
                    },
                    rgbArray: function() {
                        return this.values.rgb
                    },
                    hslArray: function() {
                        return this.values.hsl
                    },
                    hsvArray: function() {
                        return this.values.hsv
                    },
                    hwbArray: function() {
                        var t = this.values;
                        return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb
                    },
                    cmykArray: function() {
                        return this.values.cmyk
                    },
                    rgbaArray: function() {
                        var t = this.values;
                        return t.rgb.concat([t.alpha])
                    },
                    hslaArray: function() {
                        var t = this.values;
                        return t.hsl.concat([t.alpha])
                    },
                    alpha: function(t) {
                        return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this)
                    },
                    red: function(t) {
                        return this.setChannel("rgb", 0, t)
                    },
                    green: function(t) {
                        return this.setChannel("rgb", 1, t)
                    },
                    blue: function(t) {
                        return this.setChannel("rgb", 2, t)
                    },
                    hue: function(t) {
                        return t && (t = (t %= 360) < 0 ? 360 + t : t), this.setChannel("hsl", 0, t)
                    },
                    saturation: function(t) {
                        return this.setChannel("hsl", 1, t)
                    },
                    lightness: function(t) {
                        return this.setChannel("hsl", 2, t)
                    },
                    saturationv: function(t) {
                        return this.setChannel("hsv", 1, t)
                    },
                    whiteness: function(t) {
                        return this.setChannel("hwb", 1, t)
                    },
                    blackness: function(t) {
                        return this.setChannel("hwb", 2, t)
                    },
                    value: function(t) {
                        return this.setChannel("hsv", 2, t)
                    },
                    cyan: function(t) {
                        return this.setChannel("cmyk", 0, t)
                    },
                    magenta: function(t) {
                        return this.setChannel("cmyk", 1, t)
                    },
                    yellow: function(t) {
                        return this.setChannel("cmyk", 2, t)
                    },
                    black: function(t) {
                        return this.setChannel("cmyk", 3, t)
                    },
                    hexString: function() {
                        return l.hexString(this.values.rgb)
                    },
                    rgbString: function() {
                        return l.rgbString(this.values.rgb, this.values.alpha)
                    },
                    rgbaString: function() {
                        return l.rgbaString(this.values.rgb, this.values.alpha)
                    },
                    percentString: function() {
                        return l.percentString(this.values.rgb, this.values.alpha)
                    },
                    hslString: function() {
                        return l.hslString(this.values.hsl, this.values.alpha)
                    },
                    hslaString: function() {
                        return l.hslaString(this.values.hsl, this.values.alpha)
                    },
                    hwbString: function() {
                        return l.hwbString(this.values.hwb, this.values.alpha)
                    },
                    keyword: function() {
                        return l.keyword(this.values.rgb, this.values.alpha)
                    },
                    rgbNumber: function() {
                        var t = this.values.rgb;
                        return t[0] << 16 | t[1] << 8 | t[2]
                    },
                    luminosity: function() {
                        for (var t = this.values.rgb, e = [], n = 0; n < t.length; n++) {
                            var r = t[n] / 255;
                            e[n] = r <= .03928 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4)
                        }
                        return .2126 * e[0] + .7152 * e[1] + .0722 * e[2]
                    },
                    contrast: function(t) {
                        var e = this.luminosity(),
                            n = t.luminosity();
                        return e > n ? (e + .05) / (n + .05) : (n + .05) / (e + .05)
                    },
                    level: function(t) {
                        var e = this.contrast(t);
                        return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : ""
                    },
                    dark: function() {
                        var t = this.values.rgb;
                        return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128
                    },
                    light: function() {
                        return !this.dark()
                    },
                    negate: function() {
                        for (var t = [], e = 0; e < 3; e++) t[e] = 255 - this.values.rgb[e];
                        return this.setValues("rgb", t), this
                    },
                    lighten: function(t) {
                        var e = this.values.hsl;
                        return e[2] += e[2] * t, this.setValues("hsl", e), this
                    },
                    darken: function(t) {
                        var e = this.values.hsl;
                        return e[2] -= e[2] * t, this.setValues("hsl", e), this
                    },
                    saturate: function(t) {
                        var e = this.values.hsl;
                        return e[1] += e[1] * t, this.setValues("hsl", e), this
                    },
                    desaturate: function(t) {
                        var e = this.values.hsl;
                        return e[1] -= e[1] * t, this.setValues("hsl", e), this
                    },
                    whiten: function(t) {
                        var e = this.values.hwb;
                        return e[1] += e[1] * t, this.setValues("hwb", e), this
                    },
                    blacken: function(t) {
                        var e = this.values.hwb;
                        return e[2] += e[2] * t, this.setValues("hwb", e), this
                    },
                    greyscale: function() {
                        var t = this.values.rgb,
                            e = .3 * t[0] + .59 * t[1] + .11 * t[2];
                        return this.setValues("rgb", [e, e, e]), this
                    },
                    clearer: function(t) {
                        var e = this.values.alpha;
                        return this.setValues("alpha", e - e * t), this
                    },
                    opaquer: function(t) {
                        var e = this.values.alpha;
                        return this.setValues("alpha", e + e * t), this
                    },
                    rotate: function(t) {
                        var e = this.values.hsl,
                            n = (e[0] + t) % 360;
                        return e[0] = n < 0 ? 360 + n : n, this.setValues("hsl", e), this
                    },
                    mix: function(t, e) {
                        var n = t,
                            r = void 0 === e ? .5 : e,
                            o = 2 * r - 1,
                            i = this.alpha() - n.alpha(),
                            a = ((o * i == -1 ? o : (o + i) / (1 + o * i)) + 1) / 2,
                            s = 1 - a;
                        return this.rgb(a * this.red() + s * n.red(), a * this.green() + s * n.green(), a * this.blue() + s * n.blue()).alpha(this.alpha() * r + n.alpha() * (1 - r))
                    },
                    toJSON: function() {
                        return this.rgb()
                    },
                    clone: function() {
                        var t, e, n = new m,
                            r = this.values,
                            o = n.values;
                        for (var i in r) r.hasOwnProperty(i) && ("[object Array]" === (e = {}.toString.call(t = r[i])) ? o[i] = t.slice(0) : "[object Number]" === e ? o[i] = t : console.error("unexpected color value:", t));
                        return n
                    }
                }, m.prototype.spaces = {
                    rgb: ["red", "green", "blue"],
                    hsl: ["hue", "saturation", "lightness"],
                    hsv: ["hue", "saturation", "value"],
                    hwb: ["hue", "whiteness", "blackness"],
                    cmyk: ["cyan", "magenta", "yellow", "black"]
                }, m.prototype.maxes = {
                    rgb: [255, 255, 255],
                    hsl: [360, 100, 100],
                    hsv: [360, 100, 100],
                    hwb: [360, 100, 100],
                    cmyk: [100, 100, 100, 100]
                }, m.prototype.getValues = function(t) {
                    for (var e = this.values, n = {}, r = 0; r < t.length; r++) n[t.charAt(r)] = e[t][r];
                    return 1 !== e.alpha && (n.a = e.alpha), n
                }, m.prototype.setValues = function(t, e) {
                    var n, r, o = this.values,
                        i = this.spaces,
                        s = this.maxes,
                        l = 1;
                    if (this.valid = !0, "alpha" === t) l = e;
                    else if (e.length) o[t] = e.slice(0, t.length), l = e[t.length];
                    else if (void 0 !== e[t.charAt(0)]) {
                        for (n = 0; n < t.length; n++) o[t][n] = e[t.charAt(n)];
                        l = e.a
                    } else if (void 0 !== e[i[t][0]]) {
                        var u = i[t];
                        for (n = 0; n < t.length; n++) o[t][n] = e[u[n]];
                        l = e.alpha
                    }
                    if (o.alpha = Math.max(0, Math.min(1, void 0 === l ? o.alpha : l)), "alpha" === t) return !1;
                    for (n = 0; n < t.length; n++) r = Math.max(0, Math.min(s[t][n], o[t][n])), o[t][n] = Math.round(r);
                    for (var c in i) c !== t && (o[c] = a[t][c](o[t]));
                    return !0
                }, m.prototype.setSpace = function(t, e) {
                    var n = e[0];
                    return void 0 === n ? this.getValues(t) : ("number" == typeof n && (n = Array.prototype.slice.call(e)), this.setValues(t, n), this)
                }, m.prototype.setChannel = function(t, e, n) {
                    var r = this.values[t];
                    return void 0 === n ? r[e] : n === r[e] ? this : (r[e] = n, this.setValues(t, r), this)
                }, "undefined" != typeof window && (window.Color = m);
                var x, w = m,
                    _ = {
                        noop: function() {},
                        uid: (x = 0, function() {
                            return x++
                        }),
                        isNullOrUndef: function(t) {
                            return null == t
                        },
                        isArray: function(t) {
                            if (Array.isArray && Array.isArray(t)) return !0;
                            var e = Object.prototype.toString.call(t);
                            return "[object" === e.substr(0, 7) && "Array]" === e.substr(-6)
                        },
                        isObject: function(t) {
                            return null !== t && "[object Object]" === Object.prototype.toString.call(t)
                        },
                        isFinite: function(t) {
                            return ("number" == typeof t || t instanceof Number) && isFinite(t)
                        },
                        valueOrDefault: function(t, e) {
                            return void 0 === t ? e : t
                        },
                        valueAtIndexOrDefault: function(t, e, n) {
                            return _.valueOrDefault(_.isArray(t) ? t[e] : t, n)
                        },
                        callback: function(t, e, n) {
                            if (t && "function" == typeof t.call) return t.apply(n, e)
                        },
                        each: function(t, e, n, r) {
                            var o, i, a;
                            if (_.isArray(t))
                                if (i = t.length, r)
                                    for (o = i - 1; o >= 0; o--) e.call(n, t[o], o);
                                else
                                    for (o = 0; o < i; o++) e.call(n, t[o], o);
                            else if (_.isObject(t))
                                for (i = (a = Object.keys(t)).length, o = 0; o < i; o++) e.call(n, t[a[o]], a[o])
                        },
                        arrayEquals: function(t, e) {
                            var n, r, o, i;
                            if (!t || !e || t.length !== e.length) return !1;
                            for (n = 0, r = t.length; n < r; ++n)
                                if (i = e[n], (o = t[n]) instanceof Array && i instanceof Array) {
                                    if (!_.arrayEquals(o, i)) return !1
                                } else if (o !== i) return !1;
                            return !0
                        },
                        clone: function(t) {
                            if (_.isArray(t)) return t.map(_.clone);
                            if (_.isObject(t)) {
                                for (var e = {}, n = Object.keys(t), r = n.length, o = 0; o < r; ++o) e[n[o]] = _.clone(t[n[o]]);
                                return e
                            }
                            return t
                        },
                        _merger: function(t, e, n, r) {
                            var o = e[t],
                                i = n[t];
                            _.isObject(o) && _.isObject(i) ? _.merge(o, i, r) : e[t] = _.clone(i)
                        },
                        _mergerIf: function(t, e, n) {
                            var r = e[t],
                                o = n[t];
                            _.isObject(r) && _.isObject(o) ? _.mergeIf(r, o) : e.hasOwnProperty(t) || (e[t] = _.clone(o))
                        },
                        merge: function(t, e, n) {
                            var r, o, i, a, s, l = _.isArray(e) ? e : [e],
                                u = l.length;
                            if (!_.isObject(t)) return t;
                            for (r = (n = n || {}).merger || _._merger, o = 0; o < u; ++o)
                                if (_.isObject(e = l[o]))
                                    for (s = 0, a = (i = Object.keys(e)).length; s < a; ++s) r(i[s], t, e, n);
                            return t
                        },
                        mergeIf: function(t, e) {
                            return _.merge(t, e, {
                                merger: _._mergerIf
                            })
                        },
                        extend: Object.assign || function(t) {
                            return _.merge(t, [].slice.call(arguments, 1), {
                                merger: function(t, e, n) {
                                    e[t] = n[t]
                                }
                            })
                        },
                        inherits: function(t) {
                            var e = this,
                                n = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
                                    return e.apply(this, arguments)
                                },
                                r = function() {
                                    this.constructor = n
                                };
                            return r.prototype = e.prototype, n.prototype = new r, n.extend = _.inherits, t && _.extend(n.prototype, t), n.__super__ = e.prototype, n
                        },
                        _deprecated: function(t, e, n, r) {
                            void 0 !== e && console.warn(t + ': "' + n + '" is deprecated. Please use "' + r + '" instead')
                        }
                    },
                    O = _;
                _.callCallback = _.callback, _.indexOf = function(t, e, n) {
                    return Array.prototype.indexOf.call(t, e, n)
                }, _.getValueOrDefault = _.valueOrDefault, _.getValueAtIndexOrDefault = _.valueAtIndexOrDefault;
                var k = {
                        linear: function(t) {
                            return t
                        },
                        easeInQuad: function(t) {
                            return t * t
                        },
                        easeOutQuad: function(t) {
                            return -t * (t - 2)
                        },
                        easeInOutQuad: function(t) {
                            return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
                        },
                        easeInCubic: function(t) {
                            return t * t * t
                        },
                        easeOutCubic: function(t) {
                            return (t -= 1) * t * t + 1
                        },
                        easeInOutCubic: function(t) {
                            return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                        },
                        easeInQuart: function(t) {
                            return t * t * t * t
                        },
                        easeOutQuart: function(t) {
                            return -((t -= 1) * t * t * t - 1)
                        },
                        easeInOutQuart: function(t) {
                            return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
                        },
                        easeInQuint: function(t) {
                            return t * t * t * t * t
                        },
                        easeOutQuint: function(t) {
                            return (t -= 1) * t * t * t * t + 1
                        },
                        easeInOutQuint: function(t) {
                            return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                        },
                        easeInSine: function(t) {
                            return 1 - Math.cos(t * (Math.PI / 2))
                        },
                        easeOutSine: function(t) {
                            return Math.sin(t * (Math.PI / 2))
                        },
                        easeInOutSine: function(t) {
                            return -.5 * (Math.cos(Math.PI * t) - 1)
                        },
                        easeInExpo: function(t) {
                            return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
                        },
                        easeOutExpo: function(t) {
                            return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
                        },
                        easeInOutExpo: function(t) {
                            return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t))
                        },
                        easeInCirc: function(t) {
                            return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)
                        },
                        easeOutCirc: function(t) {
                            return Math.sqrt(1 - (t -= 1) * t)
                        },
                        easeInOutCirc: function(t) {
                            return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                        },
                        easeInElastic: function(t) {
                            var e = 1.70158,
                                n = 0,
                                r = 1;
                            return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r), -r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n))
                        },
                        easeOutElastic: function(t) {
                            var e = 1.70158,
                                n = 0,
                                r = 1;
                            return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r), r * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1)
                        },
                        easeInOutElastic: function(t) {
                            var e = 1.70158,
                                n = 0,
                                r = 1;
                            return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (n || (n = .45), r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r), t < 1 ? r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * -.5 : r * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1)
                        },
                        easeInBack: function(t) {
                            var e = 1.70158;
                            return t * t * ((e + 1) * t - e)
                        },
                        easeOutBack: function(t) {
                            var e = 1.70158;
                            return (t -= 1) * t * ((e + 1) * t + e) + 1
                        },
                        easeInOutBack: function(t) {
                            var e = 1.70158;
                            return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
                        },
                        easeInBounce: function(t) {
                            return 1 - k.easeOutBounce(1 - t)
                        },
                        easeOutBounce: function(t) {
                            return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                        },
                        easeInOutBounce: function(t) {
                            return t < .5 ? .5 * k.easeInBounce(2 * t) : .5 * k.easeOutBounce(2 * t - 1) + .5
                        }
                    },
                    S = {
                        effects: k
                    };
                O.easingEffects = k;
                var C = Math.PI,
                    A = C / 180,
                    M = 2 * C,
                    j = C / 2,
                    D = C / 4,
                    P = 2 * C / 3,
                    E = {
                        clear: function(t) {
                            t.ctx.clearRect(0, 0, t.width, t.height)
                        },
                        roundedRect: function(t, e, n, r, o, i) {
                            if (i) {
                                var a = Math.min(i, o / 2, r / 2),
                                    s = e + a,
                                    l = n + a,
                                    u = e + r - a,
                                    c = n + o - a;
                                t.moveTo(e, l), s < u && l < c ? (t.arc(s, l, a, -C, -j), t.arc(u, l, a, -j, 0), t.arc(u, c, a, 0, j), t.arc(s, c, a, j, C)) : s < u ? (t.moveTo(s, n), t.arc(u, l, a, -j, j), t.arc(s, l, a, j, C + j)) : l < c ? (t.arc(s, l, a, -C, 0), t.arc(s, c, a, 0, C)) : t.arc(s, l, a, -C, C), t.closePath(), t.moveTo(e, n)
                            } else t.rect(e, n, r, o)
                        },
                        drawPoint: function(t, e, n, r, o, i) {
                            var a, s, l, u, c, d = (i || 0) * A;
                            if (e && "object" == typeof e && ("[object HTMLImageElement]" === (a = e.toString()) || "[object HTMLCanvasElement]" === a)) return t.save(), t.translate(r, o), t.rotate(d), t.drawImage(e, -e.width / 2, -e.height / 2, e.width, e.height), void t.restore();
                            if (!(isNaN(n) || n <= 0)) {
                                switch (t.beginPath(), e) {
                                    default:
                                        t.arc(r, o, n, 0, M), t.closePath();
                                        break;
                                    case "triangle":
                                        t.moveTo(r + Math.sin(d) * n, o - Math.cos(d) * n), d += P, t.lineTo(r + Math.sin(d) * n, o - Math.cos(d) * n), d += P, t.lineTo(r + Math.sin(d) * n, o - Math.cos(d) * n), t.closePath();
                                        break;
                                    case "rectRounded":
                                        u = n - (c = .516 * n), s = Math.cos(d + D) * u, l = Math.sin(d + D) * u, t.arc(r - s, o - l, c, d - C, d - j), t.arc(r + l, o - s, c, d - j, d), t.arc(r + s, o + l, c, d, d + j), t.arc(r - l, o + s, c, d + j, d + C), t.closePath();
                                        break;
                                    case "rect":
                                        if (!i) {
                                            u = Math.SQRT1_2 * n, t.rect(r - u, o - u, 2 * u, 2 * u);
                                            break
                                        }
                                        d += D;
                                    case "rectRot":
                                        s = Math.cos(d) * n, l = Math.sin(d) * n, t.moveTo(r - s, o - l), t.lineTo(r + l, o - s), t.lineTo(r + s, o + l), t.lineTo(r - l, o + s), t.closePath();
                                        break;
                                    case "crossRot":
                                        d += D;
                                    case "cross":
                                        s = Math.cos(d) * n, l = Math.sin(d) * n, t.moveTo(r - s, o - l), t.lineTo(r + s, o + l), t.moveTo(r + l, o - s), t.lineTo(r - l, o + s);
                                        break;
                                    case "star":
                                        s = Math.cos(d) * n, l = Math.sin(d) * n, t.moveTo(r - s, o - l), t.lineTo(r + s, o + l), t.moveTo(r + l, o - s), t.lineTo(r - l, o + s), d += D, s = Math.cos(d) * n, l = Math.sin(d) * n, t.moveTo(r - s, o - l), t.lineTo(r + s, o + l), t.moveTo(r + l, o - s), t.lineTo(r - l, o + s);
                                        break;
                                    case "line":
                                        s = Math.cos(d) * n, l = Math.sin(d) * n, t.moveTo(r - s, o - l), t.lineTo(r + s, o + l);
                                        break;
                                    case "dash":
                                        t.moveTo(r, o), t.lineTo(r + Math.cos(d) * n, o + Math.sin(d) * n)
                                }
                                t.fill(), t.stroke()
                            }
                        },
                        _isPointInArea: function(t, e) {
                            return t.x > e.left - 1e-6 && t.x < e.right + 1e-6 && t.y > e.top - 1e-6 && t.y < e.bottom + 1e-6
                        },
                        clipArea: function(t, e) {
                            t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip()
                        },
                        unclipArea: function(t) {
                            t.restore()
                        },
                        lineTo: function(t, e, n, r) {
                            var o = n.steppedLine;
                            if (o) {
                                if ("middle" === o) {
                                    var i = (e.x + n.x) / 2;
                                    t.lineTo(i, r ? n.y : e.y), t.lineTo(i, r ? e.y : n.y)
                                } else "after" === o && !r || "after" !== o && r ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y);
                                t.lineTo(n.x, n.y)
                            } else n.tension ? t.bezierCurveTo(r ? e.controlPointPreviousX : e.controlPointNextX, r ? e.controlPointPreviousY : e.controlPointNextY, r ? n.controlPointNextX : n.controlPointPreviousX, r ? n.controlPointNextY : n.controlPointPreviousY, n.x, n.y) : t.lineTo(n.x, n.y)
                        }
                    },
                    N = E;
                O.clear = E.clear, O.drawRoundedRectangle = function(t) {
                    t.beginPath(), E.roundedRect.apply(E, arguments)
                };
                var I = {
                    _set: function(t, e) {
                        return O.merge(this[t] || (this[t] = {}), e)
                    }
                };
                I._set("global", {
                    defaultColor: "rgba(0,0,0,0.1)",
                    defaultFontColor: "#666",
                    defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                    defaultFontSize: 12,
                    defaultFontStyle: "normal",
                    defaultLineHeight: 1.2,
                    showLines: !0
                });
                var T = I,
                    R = O.valueOrDefault,
                    F = {
                        toLineHeight: function(t, e) {
                            var n = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
                            if (!n || "normal" === n[1]) return 1.2 * e;
                            switch (t = +n[2], n[3]) {
                                case "px":
                                    return t;
                                case "%":
                                    t /= 100
                            }
                            return e * t
                        },
                        toPadding: function(t) {
                            var e, n, r, o;
                            return O.isObject(t) ? (e = +t.top || 0, n = +t.right || 0, r = +t.bottom || 0, o = +t.left || 0) : e = n = r = o = +t || 0, {
                                top: e,
                                right: n,
                                bottom: r,
                                left: o,
                                height: e + r,
                                width: o + n
                            }
                        },
                        _parseFont: function(t) {
                            var e = T.global,
                                n = R(t.fontSize, e.defaultFontSize),
                                r = {
                                    family: R(t.fontFamily, e.defaultFontFamily),
                                    lineHeight: O.options.toLineHeight(R(t.lineHeight, e.defaultLineHeight), n),
                                    size: n,
                                    style: R(t.fontStyle, e.defaultFontStyle),
                                    weight: null,
                                    string: ""
                                };
                            return r.string = function(t) {
                                return !t || O.isNullOrUndef(t.size) || O.isNullOrUndef(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family
                            }(r), r
                        },
                        resolve: function(t, e, n, r) {
                            var o, i, a, s = !0;
                            for (o = 0, i = t.length; o < i; ++o)
                                if (void 0 !== (a = t[o]) && (void 0 !== e && "function" == typeof a && (a = a(e), s = !1), void 0 !== n && O.isArray(a) && (a = a[n], s = !1), void 0 !== a)) return r && !s && (r.cacheable = !1), a
                        }
                    },
                    L = {
                        _factorize: function(t) {
                            var e, n = [],
                                r = Math.sqrt(t);
                            for (e = 1; e < r; e++) t % e == 0 && (n.push(e), n.push(t / e));
                            return r === (0 | r) && n.push(r), n.sort((function(t, e) {
                                return t - e
                            })).pop(), n
                        },
                        log10: Math.log10 || function(t) {
                            var e = Math.log(t) * Math.LOG10E,
                                n = Math.round(e);
                            return t === Math.pow(10, n) ? n : e
                        }
                    },
                    B = L;
                O.log10 = L.log10;
                var V = O,
                    z = N,
                    H = F,
                    W = B;
                V.easing = S, V.canvas = z, V.options = H, V.math = W, V.rtl = {
                    getRtlAdapter: function(t, e, n) {
                        return t ? function(t, e) {
                            return {
                                x: function(n) {
                                    return t + t + e - n
                                },
                                setWidth: function(t) {
                                    e = t
                                },
                                textAlign: function(t) {
                                    return "center" === t ? t : "right" === t ? "left" : "right"
                                },
                                xPlus: function(t, e) {
                                    return t - e
                                },
                                leftForLtr: function(t, e) {
                                    return t - e
                                }
                            }
                        }(e, n) : {
                            x: function(t) {
                                return t
                            },
                            setWidth: function(t) {},
                            textAlign: function(t) {
                                return t
                            },
                            xPlus: function(t, e) {
                                return t + e
                            },
                            leftForLtr: function(t, e) {
                                return t
                            }
                        }
                    },
                    overrideTextDirection: function(t, e) {
                        var n, r;
                        "ltr" !== e && "rtl" !== e || (r = [(n = t.canvas.style).getPropertyValue("direction"), n.getPropertyPriority("direction")], n.setProperty("direction", e, "important"), t.prevTextDirection = r)
                    },
                    restoreTextDirection: function(t) {
                        var e = t.prevTextDirection;
                        void 0 !== e && (delete t.prevTextDirection, t.canvas.style.setProperty("direction", e[0], e[1]))
                    }
                };
                var U = function(t) {
                    V.extend(this, t), this.initialize.apply(this, arguments)
                };
                V.extend(U.prototype, {
                    _type: void 0,
                    initialize: function() {
                        this.hidden = !1
                    },
                    pivot: function() {
                        var t = this;
                        return t._view || (t._view = V.extend({}, t._model)), t._start = {}, t
                    },
                    transition: function(t) {
                        var e = this,
                            n = e._model,
                            r = e._start,
                            o = e._view;
                        return n && 1 !== t ? (o || (o = e._view = {}), r || (r = e._start = {}), function(t, e, n, r) {
                            var o, i, a, s, l, u, c, d, h, f = Object.keys(n);
                            for (o = 0, i = f.length; o < i; ++o)
                                if (u = n[a = f[o]], e.hasOwnProperty(a) || (e[a] = u), (s = e[a]) !== u && "_" !== a[0]) {
                                    if (t.hasOwnProperty(a) || (t[a] = s), (c = typeof u) == typeof(l = t[a]))
                                        if ("string" === c) {
                                            if ((d = w(l)).valid && (h = w(u)).valid) {
                                                e[a] = h.mix(d, r).rgbString();
                                                continue
                                            }
                                        } else if (V.isFinite(l) && V.isFinite(u)) {
                                        e[a] = l + (u - l) * r;
                                        continue
                                    }
                                    e[a] = u
                                }
                        }(r, o, n, t), e) : (e._view = V.extend({}, n), e._start = null, e)
                    },
                    tooltipPosition: function() {
                        return {
                            x: this._model.x,
                            y: this._model.y
                        }
                    },
                    hasValue: function() {
                        return V.isNumber(this._model.x) && V.isNumber(this._model.y)
                    }
                }), U.extend = V.inherits;
                var G = U,
                    q = G.extend({
                        chart: null,
                        currentStep: 0,
                        numSteps: 60,
                        easing: "",
                        render: null,
                        onAnimationProgress: null,
                        onAnimationComplete: null
                    }),
                    K = q;
                Object.defineProperty(q.prototype, "animationObject", {
                    get: function() {
                        return this
                    }
                }), Object.defineProperty(q.prototype, "chartInstance", {
                    get: function() {
                        return this.chart
                    },
                    set: function(t) {
                        this.chart = t
                    }
                }), T._set("global", {
                    animation: {
                        duration: 1e3,
                        easing: "easeOutQuart",
                        onProgress: V.noop,
                        onComplete: V.noop
                    }
                });
                var Y = {
                        animations: [],
                        request: null,
                        addAnimation: function(t, e, n, r) {
                            var o, i, a = this.animations;
                            for (e.chart = t, e.startTime = Date.now(), e.duration = n, r || (t.animating = !0), o = 0, i = a.length; o < i; ++o)
                                if (a[o].chart === t) return void(a[o] = e);
                            a.push(e), 1 === a.length && this.requestAnimationFrame()
                        },
                        cancelAnimation: function(t) {
                            var e = V.findIndex(this.animations, (function(e) {
                                return e.chart === t
                            })); - 1 !== e && (this.animations.splice(e, 1), t.animating = !1)
                        },
                        requestAnimationFrame: function() {
                            var t = this;
                            null === t.request && (t.request = V.requestAnimFrame.call(window, (function() {
                                t.request = null, t.startDigest()
                            })))
                        },
                        startDigest: function() {
                            this.advance(), this.animations.length > 0 && this.requestAnimationFrame()
                        },
                        advance: function() {
                            for (var t, e, n, r, o = this.animations, i = 0; i < o.length;) e = (t = o[i]).chart, n = t.numSteps, r = Math.floor((Date.now() - t.startTime) / t.duration * n) + 1, t.currentStep = Math.min(r, n), V.callback(t.render, [e, t], e), V.callback(t.onAnimationProgress, [t], e), t.currentStep >= n ? (V.callback(t.onAnimationComplete, [t], e), e.animating = !1, o.splice(i, 1)) : ++i
                        }
                    },
                    Z = V.options.resolve,
                    X = ["push", "pop", "shift", "splice", "unshift"];

                function J(t, e) {
                    var n = t._chartjs;
                    if (n) {
                        var r = n.listeners,
                            o = r.indexOf(e); - 1 !== o && r.splice(o, 1), r.length > 0 || (X.forEach((function(e) {
                            delete t[e]
                        })), delete t._chartjs)
                    }
                }
                var $ = function(t, e) {
                    this.initialize(t, e)
                };
                V.extend($.prototype, {
                    datasetElementType: null,
                    dataElementType: null,
                    _datasetElementOptions: ["backgroundColor", "borderCapStyle", "borderColor", "borderDash", "borderDashOffset", "borderJoinStyle", "borderWidth"],
                    _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "pointStyle"],
                    initialize: function(t, e) {
                        var n = this;
                        n.chart = t, n.index = e, n.linkScales(), n.addElements(), n._type = n.getMeta().type
                    },
                    updateIndex: function(t) {
                        this.index = t
                    },
                    linkScales: function() {
                        var t = this.getMeta(),
                            e = this.chart,
                            n = e.scales,
                            r = this.getDataset(),
                            o = e.options.scales;
                        null !== t.xAxisID && t.xAxisID in n && !r.xAxisID || (t.xAxisID = r.xAxisID || o.xAxes[0].id), null !== t.yAxisID && t.yAxisID in n && !r.yAxisID || (t.yAxisID = r.yAxisID || o.yAxes[0].id)
                    },
                    getDataset: function() {
                        return this.chart.data.datasets[this.index]
                    },
                    getMeta: function() {
                        return this.chart.getDatasetMeta(this.index)
                    },
                    getScaleForId: function(t) {
                        return this.chart.scales[t]
                    },
                    _getValueScaleId: function() {
                        return this.getMeta().yAxisID
                    },
                    _getIndexScaleId: function() {
                        return this.getMeta().xAxisID
                    },
                    _getValueScale: function() {
                        return this.getScaleForId(this._getValueScaleId())
                    },
                    _getIndexScale: function() {
                        return this.getScaleForId(this._getIndexScaleId())
                    },
                    reset: function() {
                        this._update(!0)
                    },
                    destroy: function() {
                        this._data && J(this._data, this)
                    },
                    createMetaDataset: function() {
                        var t = this.datasetElementType;
                        return t && new t({
                            _chart: this.chart,
                            _datasetIndex: this.index
                        })
                    },
                    createMetaData: function(t) {
                        var e = this.dataElementType;
                        return e && new e({
                            _chart: this.chart,
                            _datasetIndex: this.index,
                            _index: t
                        })
                    },
                    addElements: function() {
                        var t, e, n = this.getMeta(),
                            r = this.getDataset().data || [],
                            o = n.data;
                        for (t = 0, e = r.length; t < e; ++t) o[t] = o[t] || this.createMetaData(t);
                        n.dataset = n.dataset || this.createMetaDataset()
                    },
                    addElementAndReset: function(t) {
                        var e = this.createMetaData(t);
                        this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0)
                    },
                    buildOrUpdateElements: function() {
                        var t, e, n = this,
                            r = n.getDataset(),
                            o = r.data || (r.data = []);
                        n._data !== o && (n._data && J(n._data, n), o && Object.isExtensible(o) && (e = n, (t = o)._chartjs ? t._chartjs.listeners.push(e) : (Object.defineProperty(t, "_chartjs", {
                            configurable: !0,
                            enumerable: !1,
                            value: {
                                listeners: [e]
                            }
                        }), X.forEach((function(e) {
                            var n = "onData" + e.charAt(0).toUpperCase() + e.slice(1),
                                r = t[e];
                            Object.defineProperty(t, e, {
                                configurable: !0,
                                enumerable: !1,
                                value: function() {
                                    var e = Array.prototype.slice.call(arguments),
                                        o = r.apply(this, e);
                                    return V.each(t._chartjs.listeners, (function(t) {
                                        "function" == typeof t[n] && t[n].apply(t, e)
                                    })), o
                                }
                            })
                        })))), n._data = o), n.resyncElements()
                    },
                    _configure: function() {
                        this._config = V.merge({}, [this.chart.options.datasets[this._type], this.getDataset()], {
                            merger: function(t, e, n) {
                                "_meta" !== t && "data" !== t && V._merger(t, e, n)
                            }
                        })
                    },
                    _update: function(t) {
                        this._configure(), this._cachedDataOpts = null, this.update(t)
                    },
                    update: V.noop,
                    transition: function(t) {
                        for (var e = this.getMeta(), n = e.data || [], r = n.length, o = 0; o < r; ++o) n[o].transition(t);
                        e.dataset && e.dataset.transition(t)
                    },
                    draw: function() {
                        var t = this.getMeta(),
                            e = t.data || [],
                            n = e.length,
                            r = 0;
                        for (t.dataset && t.dataset.draw(); r < n; ++r) e[r].draw()
                    },
                    getStyle: function(t) {
                        var e, n = this.getMeta(),
                            r = n.dataset;
                        return this._configure(), !1 !== (e = r && void 0 === t ? this._resolveDatasetElementOptions(r || {}) : this._resolveDataElementOptions(n.data[t = t || 0] || {}, t)).fill && null !== e.fill || (e.backgroundColor = e.borderColor), e
                    },
                    _resolveDatasetElementOptions: function(t, e) {
                        var n, r, o, i, a = this,
                            s = a.chart,
                            l = a._config,
                            u = t.custom || {},
                            c = s.options.elements[a.datasetElementType.prototype._type] || {},
                            d = a._datasetElementOptions,
                            h = {},
                            f = {
                                chart: s,
                                dataset: a.getDataset(),
                                datasetIndex: a.index,
                                hover: e
                            };
                        for (n = 0, r = d.length; n < r; ++n) o = d[n], i = e ? "hover" + o.charAt(0).toUpperCase() + o.slice(1) : o, h[o] = Z([u[i], l[i], c[i]], f);
                        return h
                    },
                    _resolveDataElementOptions: function(t, e) {
                        var n = this,
                            r = t && t.custom,
                            o = n._cachedDataOpts;
                        if (o && !r) return o;
                        var i, a, s, l, u = n.chart,
                            c = n._config,
                            d = u.options.elements[n.dataElementType.prototype._type] || {},
                            h = n._dataElementOptions,
                            f = {},
                            p = {
                                chart: u,
                                dataIndex: e,
                                dataset: n.getDataset(),
                                datasetIndex: n.index
                            },
                            g = {
                                cacheable: !r
                            };
                        if (r = r || {}, V.isArray(h))
                            for (a = 0, s = h.length; a < s; ++a) f[l = h[a]] = Z([r[l], c[l], d[l]], p, e, g);
                        else
                            for (a = 0, s = (i = Object.keys(h)).length; a < s; ++a) f[l = i[a]] = Z([r[l], c[h[l]], c[l], d[l]], p, e, g);
                        return g.cacheable && (n._cachedDataOpts = Object.freeze(f)), f
                    },
                    removeHoverStyle: function(t) {
                        V.merge(t._model, t.$previousStyle || {}), delete t.$previousStyle
                    },
                    setHoverStyle: function(t) {
                        var e = this.chart.data.datasets[t._datasetIndex],
                            n = t._index,
                            r = t.custom || {},
                            o = t._model,
                            i = V.getHoverColor;
                        t.$previousStyle = {
                            backgroundColor: o.backgroundColor,
                            borderColor: o.borderColor,
                            borderWidth: o.borderWidth
                        }, o.backgroundColor = Z([r.hoverBackgroundColor, e.hoverBackgroundColor, i(o.backgroundColor)], void 0, n), o.borderColor = Z([r.hoverBorderColor, e.hoverBorderColor, i(o.borderColor)], void 0, n), o.borderWidth = Z([r.hoverBorderWidth, e.hoverBorderWidth, o.borderWidth], void 0, n)
                    },
                    _removeDatasetHoverStyle: function() {
                        var t = this.getMeta().dataset;
                        t && this.removeHoverStyle(t)
                    },
                    _setDatasetHoverStyle: function() {
                        var t, e, n, r, o, i, a = this.getMeta().dataset,
                            s = {};
                        if (a) {
                            for (i = a._model, o = this._resolveDatasetElementOptions(a, !0), t = 0, e = (r = Object.keys(o)).length; t < e; ++t) s[n = r[t]] = i[n], i[n] = o[n];
                            a.$previousStyle = s
                        }
                    },
                    resyncElements: function() {
                        var t = this.getMeta(),
                            e = this.getDataset().data,
                            n = t.data.length,
                            r = e.length;
                        r < n ? t.data.splice(r, n - r) : r > n && this.insertElements(n, r - n)
                    },
                    insertElements: function(t, e) {
                        for (var n = 0; n < e; ++n) this.addElementAndReset(t + n)
                    },
                    onDataPush: function() {
                        var t = arguments.length;
                        this.insertElements(this.getDataset().data.length - t, t)
                    },
                    onDataPop: function() {
                        this.getMeta().data.pop()
                    },
                    onDataShift: function() {
                        this.getMeta().data.shift()
                    },
                    onDataSplice: function(t, e) {
                        this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2)
                    },
                    onDataUnshift: function() {
                        this.insertElements(0, arguments.length)
                    }
                }), $.extend = V.inherits;
                var Q = $,
                    tt = 2 * Math.PI;

                function et(t, e) {
                    var n = e.startAngle,
                        r = e.endAngle,
                        o = e.pixelMargin,
                        i = o / e.outerRadius,
                        a = e.x,
                        s = e.y;
                    t.beginPath(), t.arc(a, s, e.outerRadius, n - i, r + i), e.innerRadius > o ? t.arc(a, s, e.innerRadius - o, r + (i = o / e.innerRadius), n - i, !0) : t.arc(a, s, o, r + Math.PI / 2, n - Math.PI / 2), t.closePath(), t.clip()
                }
                T._set("global", {
                    elements: {
                        arc: {
                            backgroundColor: T.global.defaultColor,
                            borderColor: "#fff",
                            borderWidth: 2,
                            borderAlign: "center"
                        }
                    }
                });
                var nt = G.extend({
                        _type: "arc",
                        inLabelRange: function(t) {
                            var e = this._view;
                            return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2)
                        },
                        inRange: function(t, e) {
                            var n = this._view;
                            if (n) {
                                for (var r = V.getAngleFromPoint(n, {
                                        x: t,
                                        y: e
                                    }), o = r.angle, i = r.distance, a = n.startAngle, s = n.endAngle; s < a;) s += tt;
                                for (; o > s;) o -= tt;
                                for (; o < a;) o += tt;
                                return o >= a && o <= s && i >= n.innerRadius && i <= n.outerRadius
                            }
                            return !1
                        },
                        getCenterPoint: function() {
                            var t = this._view,
                                e = (t.startAngle + t.endAngle) / 2,
                                n = (t.innerRadius + t.outerRadius) / 2;
                            return {
                                x: t.x + Math.cos(e) * n,
                                y: t.y + Math.sin(e) * n
                            }
                        },
                        getArea: function() {
                            var t = this._view;
                            return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2))
                        },
                        tooltipPosition: function() {
                            var t = this._view,
                                e = t.startAngle + (t.endAngle - t.startAngle) / 2,
                                n = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
                            return {
                                x: t.x + Math.cos(e) * n,
                                y: t.y + Math.sin(e) * n
                            }
                        },
                        draw: function() {
                            var t, e = this._chart.ctx,
                                n = this._view,
                                r = "inner" === n.borderAlign ? .33 : 0,
                                o = {
                                    x: n.x,
                                    y: n.y,
                                    innerRadius: n.innerRadius,
                                    outerRadius: Math.max(n.outerRadius - r, 0),
                                    pixelMargin: r,
                                    startAngle: n.startAngle,
                                    endAngle: n.endAngle,
                                    fullCircles: Math.floor(n.circumference / tt)
                                };
                            if (e.save(), e.fillStyle = n.backgroundColor, e.strokeStyle = n.borderColor, o.fullCircles) {
                                for (o.endAngle = o.startAngle + tt, e.beginPath(), e.arc(o.x, o.y, o.outerRadius, o.startAngle, o.endAngle), e.arc(o.x, o.y, o.innerRadius, o.endAngle, o.startAngle, !0), e.closePath(), t = 0; t < o.fullCircles; ++t) e.fill();
                                o.endAngle = o.startAngle + n.circumference % tt
                            }
                            e.beginPath(), e.arc(o.x, o.y, o.outerRadius, o.startAngle, o.endAngle), e.arc(o.x, o.y, o.innerRadius, o.endAngle, o.startAngle, !0), e.closePath(), e.fill(), n.borderWidth && function(t, e, n) {
                                var r = "inner" === e.borderAlign;
                                r ? (t.lineWidth = 2 * e.borderWidth, t.lineJoin = "round") : (t.lineWidth = e.borderWidth, t.lineJoin = "bevel"), n.fullCircles && function(t, e, n, r) {
                                    var o, i = n.endAngle;
                                    for (r && (n.endAngle = n.startAngle + tt, et(t, n), n.endAngle = i, n.endAngle === n.startAngle && n.fullCircles && (n.endAngle += tt, n.fullCircles--)), t.beginPath(), t.arc(n.x, n.y, n.innerRadius, n.startAngle + tt, n.startAngle, !0), o = 0; o < n.fullCircles; ++o) t.stroke();
                                    for (t.beginPath(), t.arc(n.x, n.y, e.outerRadius, n.startAngle, n.startAngle + tt), o = 0; o < n.fullCircles; ++o) t.stroke()
                                }(t, e, n, r), r && et(t, n), t.beginPath(), t.arc(n.x, n.y, e.outerRadius, n.startAngle, n.endAngle), t.arc(n.x, n.y, n.innerRadius, n.endAngle, n.startAngle, !0), t.closePath(), t.stroke()
                            }(e, n, o), e.restore()
                        }
                    }),
                    rt = V.valueOrDefault,
                    ot = T.global.defaultColor;
                T._set("global", {
                    elements: {
                        line: {
                            tension: .4,
                            backgroundColor: ot,
                            borderWidth: 3,
                            borderColor: ot,
                            borderCapStyle: "butt",
                            borderDash: [],
                            borderDashOffset: 0,
                            borderJoinStyle: "miter",
                            capBezierPoints: !0,
                            fill: !0
                        }
                    }
                });
                var it = G.extend({
                        _type: "line",
                        draw: function() {
                            var t, e, n, r = this,
                                o = r._view,
                                i = r._chart.ctx,
                                a = o.spanGaps,
                                s = r._children.slice(),
                                l = T.global,
                                u = l.elements.line,
                                c = -1,
                                d = r._loop;
                            if (s.length) {
                                if (r._loop) {
                                    for (t = 0; t < s.length; ++t)
                                        if (e = V.previousItem(s, t), !s[t]._view.skip && e._view.skip) {
                                            s = s.slice(t).concat(s.slice(0, t)), d = a;
                                            break
                                        } d && s.push(s[0])
                                }
                                for (i.save(), i.lineCap = o.borderCapStyle || u.borderCapStyle, i.setLineDash && i.setLineDash(o.borderDash || u.borderDash), i.lineDashOffset = rt(o.borderDashOffset, u.borderDashOffset), i.lineJoin = o.borderJoinStyle || u.borderJoinStyle, i.lineWidth = rt(o.borderWidth, u.borderWidth), i.strokeStyle = o.borderColor || l.defaultColor, i.beginPath(), (n = s[0]._view).skip || (i.moveTo(n.x, n.y), c = 0), t = 1; t < s.length; ++t) n = s[t]._view, e = -1 === c ? V.previousItem(s, t) : s[c], n.skip || (c !== t - 1 && !a || -1 === c ? i.moveTo(n.x, n.y) : V.canvas.lineTo(i, e._view, n), c = t);
                                d && i.closePath(), i.stroke(), i.restore()
                            }
                        }
                    }),
                    at = V.valueOrDefault,
                    st = T.global.defaultColor;

                function lt(t) {
                    var e = this._view;
                    return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius
                }
                T._set("global", {
                    elements: {
                        point: {
                            radius: 3,
                            pointStyle: "circle",
                            backgroundColor: st,
                            borderColor: st,
                            borderWidth: 1,
                            hitRadius: 1,
                            hoverRadius: 4,
                            hoverBorderWidth: 1
                        }
                    }
                });
                var ut = G.extend({
                        _type: "point",
                        inRange: function(t, e) {
                            var n = this._view;
                            return !!n && Math.pow(t - n.x, 2) + Math.pow(e - n.y, 2) < Math.pow(n.hitRadius + n.radius, 2)
                        },
                        inLabelRange: lt,
                        inXRange: lt,
                        inYRange: function(t) {
                            var e = this._view;
                            return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius
                        },
                        getCenterPoint: function() {
                            var t = this._view;
                            return {
                                x: t.x,
                                y: t.y
                            }
                        },
                        getArea: function() {
                            return Math.PI * Math.pow(this._view.radius, 2)
                        },
                        tooltipPosition: function() {
                            var t = this._view;
                            return {
                                x: t.x,
                                y: t.y,
                                padding: t.radius + t.borderWidth
                            }
                        },
                        draw: function(t) {
                            var e = this._view,
                                n = this._chart.ctx,
                                r = e.pointStyle,
                                o = e.rotation,
                                i = e.radius,
                                a = e.x,
                                s = e.y,
                                l = T.global,
                                u = l.defaultColor;
                            e.skip || (void 0 === t || V.canvas._isPointInArea(e, t)) && (n.strokeStyle = e.borderColor || u, n.lineWidth = at(e.borderWidth, l.elements.point.borderWidth), n.fillStyle = e.backgroundColor || u, V.canvas.drawPoint(n, r, i, a, s, o))
                        }
                    }),
                    ct = T.global.defaultColor;

                function dt(t) {
                    return t && void 0 !== t.width
                }

                function ht(t) {
                    var e, n, r, o, i;
                    return dt(t) ? (e = t.x - (i = t.width / 2), n = t.x + i, r = Math.min(t.y, t.base), o = Math.max(t.y, t.base)) : (i = t.height / 2, e = Math.min(t.x, t.base), n = Math.max(t.x, t.base), r = t.y - i, o = t.y + i), {
                        left: e,
                        top: r,
                        right: n,
                        bottom: o
                    }
                }

                function ft(t, e, n) {
                    return t === e ? n : t === n ? e : t
                }

                function pt(t, e, n) {
                    var r = null === e,
                        o = null === n,
                        i = !(!t || r && o) && ht(t);
                    return i && (r || e >= i.left && e <= i.right) && (o || n >= i.top && n <= i.bottom)
                }
                T._set("global", {
                    elements: {
                        rectangle: {
                            backgroundColor: ct,
                            borderColor: ct,
                            borderSkipped: "bottom",
                            borderWidth: 0
                        }
                    }
                });
                var gt = G.extend({
                        _type: "rectangle",
                        draw: function() {
                            var t = this._chart.ctx,
                                e = this._view,
                                n = function(t) {
                                    var e = ht(t),
                                        n = e.right - e.left,
                                        r = e.bottom - e.top,
                                        o = function(t, e, n) {
                                            var r, o, i, a, s = t.borderWidth,
                                                l = function(t) {
                                                    var e = t.borderSkipped,
                                                        n = {};
                                                    return e ? (t.horizontal ? t.base > t.x && (e = ft(e, "left", "right")) : t.base < t.y && (e = ft(e, "bottom", "top")), n[e] = !0, n) : n
                                                }(t);
                                            return V.isObject(s) ? (r = +s.top || 0, o = +s.right || 0, i = +s.bottom || 0, a = +s.left || 0) : r = o = i = a = +s || 0, {
                                                t: l.top || r < 0 ? 0 : r > n ? n : r,
                                                r: l.right || o < 0 ? 0 : o > e ? e : o,
                                                b: l.bottom || i < 0 ? 0 : i > n ? n : i,
                                                l: l.left || a < 0 ? 0 : a > e ? e : a
                                            }
                                        }(t, n / 2, r / 2);
                                    return {
                                        outer: {
                                            x: e.left,
                                            y: e.top,
                                            w: n,
                                            h: r
                                        },
                                        inner: {
                                            x: e.left + o.l,
                                            y: e.top + o.t,
                                            w: n - o.l - o.r,
                                            h: r - o.t - o.b
                                        }
                                    }
                                }(e),
                                r = n.outer,
                                o = n.inner;
                            t.fillStyle = e.backgroundColor, t.fillRect(r.x, r.y, r.w, r.h), r.w === o.w && r.h === o.h || (t.save(), t.beginPath(), t.rect(r.x, r.y, r.w, r.h), t.clip(), t.fillStyle = e.borderColor, t.rect(o.x, o.y, o.w, o.h), t.fill("evenodd"), t.restore())
                        },
                        height: function() {
                            var t = this._view;
                            return t.base - t.y
                        },
                        inRange: function(t, e) {
                            return pt(this._view, t, e)
                        },
                        inLabelRange: function(t, e) {
                            var n = this._view;
                            return dt(n) ? pt(n, t, null) : pt(n, null, e)
                        },
                        inXRange: function(t) {
                            return pt(this._view, t, null)
                        },
                        inYRange: function(t) {
                            return pt(this._view, null, t)
                        },
                        getCenterPoint: function() {
                            var t, e, n = this._view;
                            return dt(n) ? (t = n.x, e = (n.y + n.base) / 2) : (t = (n.x + n.base) / 2, e = n.y), {
                                x: t,
                                y: e
                            }
                        },
                        getArea: function() {
                            var t = this._view;
                            return dt(t) ? t.width * Math.abs(t.y - t.base) : t.height * Math.abs(t.x - t.base)
                        },
                        tooltipPosition: function() {
                            var t = this._view;
                            return {
                                x: t.x,
                                y: t.y
                            }
                        }
                    }),
                    vt = {},
                    yt = it,
                    bt = ut,
                    mt = gt;
                vt.Arc = nt, vt.Line = yt, vt.Point = bt, vt.Rectangle = mt;
                var xt = V._deprecated,
                    wt = V.valueOrDefault;
                T._set("bar", {
                    hover: {
                        mode: "label"
                    },
                    scales: {
                        xAxes: [{
                            type: "category",
                            offset: !0,
                            gridLines: {
                                offsetGridLines: !0
                            }
                        }],
                        yAxes: [{
                            type: "linear"
                        }]
                    }
                }), T._set("global", {
                    datasets: {
                        bar: {
                            categoryPercentage: .8,
                            barPercentage: .9
                        }
                    }
                });
                var _t = Q.extend({
                        dataElementType: vt.Rectangle,
                        _dataElementOptions: ["backgroundColor", "borderColor", "borderSkipped", "borderWidth", "barPercentage", "barThickness", "categoryPercentage", "maxBarThickness", "minBarLength"],
                        initialize: function() {
                            var t, e, n = this;
                            Q.prototype.initialize.apply(n, arguments), (t = n.getMeta()).stack = n.getDataset().stack, t.bar = !0, e = n._getIndexScale().options, xt("bar chart", e.barPercentage, "scales.[x/y]Axes.barPercentage", "dataset.barPercentage"), xt("bar chart", e.barThickness, "scales.[x/y]Axes.barThickness", "dataset.barThickness"), xt("bar chart", e.categoryPercentage, "scales.[x/y]Axes.categoryPercentage", "dataset.categoryPercentage"), xt("bar chart", n._getValueScale().options.minBarLength, "scales.[x/y]Axes.minBarLength", "dataset.minBarLength"), xt("bar chart", e.maxBarThickness, "scales.[x/y]Axes.maxBarThickness", "dataset.maxBarThickness")
                        },
                        update: function(t) {
                            var e, n, r = this.getMeta().data;
                            for (this._ruler = this.getRuler(), e = 0, n = r.length; e < n; ++e) this.updateElement(r[e], e, t)
                        },
                        updateElement: function(t, e, n) {
                            var r = this,
                                o = r.getMeta(),
                                i = r.getDataset(),
                                a = r._resolveDataElementOptions(t, e);
                            t._xScale = r.getScaleForId(o.xAxisID), t._yScale = r.getScaleForId(o.yAxisID), t._datasetIndex = r.index, t._index = e, t._model = {
                                backgroundColor: a.backgroundColor,
                                borderColor: a.borderColor,
                                borderSkipped: a.borderSkipped,
                                borderWidth: a.borderWidth,
                                datasetLabel: i.label,
                                label: r.chart.data.labels[e]
                            }, V.isArray(i.data[e]) && (t._model.borderSkipped = null), r._updateElementGeometry(t, e, n, a), t.pivot()
                        },
                        _updateElementGeometry: function(t, e, n, r) {
                            var o = this,
                                i = t._model,
                                a = o._getValueScale(),
                                s = a.getBasePixel(),
                                l = a.isHorizontal(),
                                u = o._ruler || o.getRuler(),
                                c = o.calculateBarValuePixels(o.index, e, r),
                                d = o.calculateBarIndexPixels(o.index, e, u, r);
                            i.horizontal = l, i.base = n ? s : c.base, i.x = l ? n ? s : c.head : d.center, i.y = l ? d.center : n ? s : c.head, i.height = l ? d.size : void 0, i.width = l ? void 0 : d.size
                        },
                        _getStacks: function(t) {
                            var e, n, r = this._getIndexScale(),
                                o = r._getMatchingVisibleMetas(this._type),
                                i = r.options.stacked,
                                a = o.length,
                                s = [];
                            for (e = 0; e < a && (n = o[e], (!1 === i || -1 === s.indexOf(n.stack) || void 0 === i && void 0 === n.stack) && s.push(n.stack), n.index !== t); ++e);
                            return s
                        },
                        getStackCount: function() {
                            return this._getStacks().length
                        },
                        getStackIndex: function(t, e) {
                            var n = this._getStacks(t),
                                r = void 0 !== e ? n.indexOf(e) : -1;
                            return -1 === r ? n.length - 1 : r
                        },
                        getRuler: function() {
                            var t, e, n = this._getIndexScale(),
                                r = [];
                            for (t = 0, e = this.getMeta().data.length; t < e; ++t) r.push(n.getPixelForValue(null, t, this.index));
                            return {
                                pixels: r,
                                start: n._startPixel,
                                end: n._endPixel,
                                stackCount: this.getStackCount(),
                                scale: n
                            }
                        },
                        calculateBarValuePixels: function(t, e, n) {
                            var r, o, i, a, s, l, u, c = this.chart,
                                d = this._getValueScale(),
                                h = d.isHorizontal(),
                                f = c.data.datasets,
                                p = d._getMatchingVisibleMetas(this._type),
                                g = d._parseValue(f[t].data[e]),
                                v = n.minBarLength,
                                y = d.options.stacked,
                                b = this.getMeta().stack,
                                m = void 0 === g.start ? 0 : g.max >= 0 && g.min >= 0 ? g.min : g.max,
                                x = void 0 === g.start ? g.end : g.max >= 0 && g.min >= 0 ? g.max - g.min : g.min - g.max,
                                w = p.length;
                            if (y || void 0 === y && void 0 !== b)
                                for (r = 0; r < w && (o = p[r]).index !== t; ++r) o.stack === b && (i = void 0 === (u = d._parseValue(f[o.index].data[e])).start ? u.end : u.min >= 0 && u.max >= 0 ? u.max : u.min, (g.min < 0 && i < 0 || g.max >= 0 && i > 0) && (m += i));
                            return a = d.getPixelForValue(m), l = (s = d.getPixelForValue(m + x)) - a, void 0 !== v && Math.abs(l) < v && (l = v, s = x >= 0 && !h || x < 0 && h ? a - v : a + v), {
                                size: l,
                                base: a,
                                head: s,
                                center: s + l / 2
                            }
                        },
                        calculateBarIndexPixels: function(t, e, n, r) {
                            var o = "flex" === r.barThickness ? function(t, e, n) {
                                    var r, o = e.pixels,
                                        i = o[t],
                                        a = t > 0 ? o[t - 1] : null,
                                        s = t < o.length - 1 ? o[t + 1] : null,
                                        l = n.categoryPercentage;
                                    return null === a && (a = i - (null === s ? e.end - e.start : s - i)), null === s && (s = i + i - a), r = i - (i - Math.min(a, s)) / 2 * l, {
                                        chunk: Math.abs(s - a) / 2 * l / e.stackCount,
                                        ratio: n.barPercentage,
                                        start: r
                                    }
                                }(e, n, r) : function(t, e, n) {
                                    var r, o, i = n.barThickness,
                                        a = e.stackCount,
                                        s = e.pixels[t],
                                        l = V.isNullOrUndef(i) ? function(t, e) {
                                            var n, r, o, i, a = t._length;
                                            for (o = 1, i = e.length; o < i; ++o) a = Math.min(a, Math.abs(e[o] - e[o - 1]));
                                            for (o = 0, i = t.getTicks().length; o < i; ++o) r = t.getPixelForTick(o), a = o > 0 ? Math.min(a, Math.abs(r - n)) : a, n = r;
                                            return a
                                        }(e.scale, e.pixels) : -1;
                                    return V.isNullOrUndef(i) ? (r = l * n.categoryPercentage, o = n.barPercentage) : (r = i * a, o = 1), {
                                        chunk: r / a,
                                        ratio: o,
                                        start: s - r / 2
                                    }
                                }(e, n, r),
                                i = this.getStackIndex(t, this.getMeta().stack),
                                a = o.start + o.chunk * i + o.chunk / 2,
                                s = Math.min(wt(r.maxBarThickness, 1 / 0), o.chunk * o.ratio);
                            return {
                                base: a - s / 2,
                                head: a + s / 2,
                                center: a,
                                size: s
                            }
                        },
                        draw: function() {
                            var t = this.chart,
                                e = this._getValueScale(),
                                n = this.getMeta().data,
                                r = this.getDataset(),
                                o = n.length,
                                i = 0;
                            for (V.canvas.clipArea(t.ctx, t.chartArea); i < o; ++i) {
                                var a = e._parseValue(r.data[i]);
                                isNaN(a.min) || isNaN(a.max) || n[i].draw()
                            }
                            V.canvas.unclipArea(t.ctx)
                        },
                        _resolveDataElementOptions: function() {
                            var t = this,
                                e = V.extend({}, Q.prototype._resolveDataElementOptions.apply(t, arguments)),
                                n = t._getIndexScale().options,
                                r = t._getValueScale().options;
                            return e.barPercentage = wt(n.barPercentage, e.barPercentage), e.barThickness = wt(n.barThickness, e.barThickness), e.categoryPercentage = wt(n.categoryPercentage, e.categoryPercentage), e.maxBarThickness = wt(n.maxBarThickness, e.maxBarThickness), e.minBarLength = wt(r.minBarLength, e.minBarLength), e
                        }
                    }),
                    Ot = V.valueOrDefault,
                    kt = V.options.resolve;
                T._set("bubble", {
                    hover: {
                        mode: "single"
                    },
                    scales: {
                        xAxes: [{
                            type: "linear",
                            position: "bottom",
                            id: "x-axis-0"
                        }],
                        yAxes: [{
                            type: "linear",
                            position: "left",
                            id: "y-axis-0"
                        }]
                    },
                    tooltips: {
                        callbacks: {
                            title: function() {
                                return ""
                            },
                            label: function(t, e) {
                                return (e.datasets[t.datasetIndex].label || "") + ": (" + t.xLabel + ", " + t.yLabel + ", " + e.datasets[t.datasetIndex].data[t.index].r + ")"
                            }
                        }
                    }
                });
                var St = Q.extend({
                        dataElementType: vt.Point,
                        _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle", "rotation"],
                        update: function(t) {
                            var e = this,
                                n = e.getMeta();
                            V.each(n.data, (function(n, r) {
                                e.updateElement(n, r, t)
                            }))
                        },
                        updateElement: function(t, e, n) {
                            var r = this,
                                o = r.getMeta(),
                                i = t.custom || {},
                                a = r.getScaleForId(o.xAxisID),
                                s = r.getScaleForId(o.yAxisID),
                                l = r._resolveDataElementOptions(t, e),
                                u = r.getDataset().data[e],
                                c = r.index,
                                d = n ? a.getPixelForDecimal(.5) : a.getPixelForValue("object" == typeof u ? u : NaN, e, c),
                                h = n ? s.getBasePixel() : s.getPixelForValue(u, e, c);
                            t._xScale = a, t._yScale = s, t._options = l, t._datasetIndex = c, t._index = e, t._model = {
                                backgroundColor: l.backgroundColor,
                                borderColor: l.borderColor,
                                borderWidth: l.borderWidth,
                                hitRadius: l.hitRadius,
                                pointStyle: l.pointStyle,
                                rotation: l.rotation,
                                radius: n ? 0 : l.radius,
                                skip: i.skip || isNaN(d) || isNaN(h),
                                x: d,
                                y: h
                            }, t.pivot()
                        },
                        setHoverStyle: function(t) {
                            var e = t._model,
                                n = t._options,
                                r = V.getHoverColor;
                            t.$previousStyle = {
                                backgroundColor: e.backgroundColor,
                                borderColor: e.borderColor,
                                borderWidth: e.borderWidth,
                                radius: e.radius
                            }, e.backgroundColor = Ot(n.hoverBackgroundColor, r(n.backgroundColor)), e.borderColor = Ot(n.hoverBorderColor, r(n.borderColor)), e.borderWidth = Ot(n.hoverBorderWidth, n.borderWidth), e.radius = n.radius + n.hoverRadius
                        },
                        _resolveDataElementOptions: function(t, e) {
                            var n = this,
                                r = n.chart,
                                o = n.getDataset(),
                                i = t.custom || {},
                                a = o.data[e] || {},
                                s = Q.prototype._resolveDataElementOptions.apply(n, arguments),
                                l = {
                                    chart: r,
                                    dataIndex: e,
                                    dataset: o,
                                    datasetIndex: n.index
                                };
                            return n._cachedDataOpts === s && (s = V.extend({}, s)), s.radius = kt([i.radius, a.r, n._config.radius, r.options.elements.point.radius], l, e), s
                        }
                    }),
                    Ct = V.valueOrDefault,
                    At = Math.PI,
                    Mt = 2 * At,
                    jt = At / 2;
                T._set("doughnut", {
                    animation: {
                        animateRotate: !0,
                        animateScale: !1
                    },
                    hover: {
                        mode: "single"
                    },
                    legendCallback: function(t) {
                        var e, n, r, o = document.createElement("ul"),
                            i = t.data,
                            a = i.datasets,
                            s = i.labels;
                        if (o.setAttribute("class", t.id + "-legend"), a.length)
                            for (e = 0, n = a[0].data.length; e < n; ++e)(r = o.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = a[0].backgroundColor[e], s[e] && r.appendChild(document.createTextNode(s[e]));
                        return o.outerHTML
                    },
                    legend: {
                        labels: {
                            generateLabels: function(t) {
                                var e = t.data;
                                return e.labels.length && e.datasets.length ? e.labels.map((function(n, r) {
                                    var o = t.getDatasetMeta(0),
                                        i = o.controller.getStyle(r);
                                    return {
                                        text: n,
                                        fillStyle: i.backgroundColor,
                                        strokeStyle: i.borderColor,
                                        lineWidth: i.borderWidth,
                                        hidden: isNaN(e.datasets[0].data[r]) || o.data[r].hidden,
                                        index: r
                                    }
                                })) : []
                            }
                        },
                        onClick: function(t, e) {
                            var n, r, o, i = e.index,
                                a = this.chart;
                            for (n = 0, r = (a.data.datasets || []).length; n < r; ++n)(o = a.getDatasetMeta(n)).data[i] && (o.data[i].hidden = !o.data[i].hidden);
                            a.update()
                        }
                    },
                    cutoutPercentage: 50,
                    rotation: -jt,
                    circumference: Mt,
                    tooltips: {
                        callbacks: {
                            title: function() {
                                return ""
                            },
                            label: function(t, e) {
                                var n = e.labels[t.index],
                                    r = ": " + e.datasets[t.datasetIndex].data[t.index];
                                return V.isArray(n) ? (n = n.slice())[0] += r : n += r, n
                            }
                        }
                    }
                });
                var Dt = Q.extend({
                    dataElementType: vt.Arc,
                    linkScales: V.noop,
                    _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"],
                    getRingIndex: function(t) {
                        for (var e = 0, n = 0; n < t; ++n) this.chart.isDatasetVisible(n) && ++e;
                        return e
                    },
                    update: function(t) {
                        var e, n, r = this,
                            o = r.chart,
                            i = o.chartArea,
                            a = o.options,
                            s = 1,
                            l = 1,
                            u = 0,
                            c = 0,
                            d = r.getMeta(),
                            h = d.data,
                            f = a.cutoutPercentage / 100 || 0,
                            p = a.circumference,
                            g = r._getRingWeight(r.index);
                        if (p < Mt) {
                            var v = a.rotation % Mt,
                                y = (v += v >= At ? -Mt : v < -At ? Mt : 0) + p,
                                b = Math.cos(v),
                                m = Math.sin(v),
                                x = Math.cos(y),
                                w = Math.sin(y),
                                _ = v <= 0 && y >= 0 || y >= Mt,
                                O = v <= jt && y >= jt || y >= Mt + jt,
                                k = v <= -jt && y >= -jt || y >= At + jt,
                                S = v === -At || y >= At ? -1 : Math.min(b, b * f, x, x * f),
                                C = k ? -1 : Math.min(m, m * f, w, w * f),
                                A = _ ? 1 : Math.max(b, b * f, x, x * f),
                                M = O ? 1 : Math.max(m, m * f, w, w * f);
                            s = (A - S) / 2, l = (M - C) / 2, u = -(A + S) / 2, c = -(M + C) / 2
                        }
                        for (e = 0, n = h.length; e < n; ++e) h[e]._options = r._resolveDataElementOptions(h[e], e);
                        for (o.borderWidth = r.getMaxBorderWidth(), o.outerRadius = Math.max(Math.min((i.right - i.left - o.borderWidth) / s, (i.bottom - i.top - o.borderWidth) / l) / 2, 0), o.innerRadius = Math.max(o.outerRadius * f, 0), o.radiusLength = (o.outerRadius - o.innerRadius) / (r._getVisibleDatasetWeightTotal() || 1), o.offsetX = u * o.outerRadius, o.offsetY = c * o.outerRadius, d.total = r.calculateTotal(), r.outerRadius = o.outerRadius - o.radiusLength * r._getRingWeightOffset(r.index), r.innerRadius = Math.max(r.outerRadius - o.radiusLength * g, 0), e = 0, n = h.length; e < n; ++e) r.updateElement(h[e], e, t)
                    },
                    updateElement: function(t, e, n) {
                        var r = this,
                            o = r.chart,
                            i = o.chartArea,
                            a = o.options,
                            s = a.animation,
                            l = (i.left + i.right) / 2,
                            u = (i.top + i.bottom) / 2,
                            c = a.rotation,
                            d = a.rotation,
                            h = r.getDataset(),
                            f = n && s.animateRotate ? 0 : t.hidden ? 0 : r.calculateCircumference(h.data[e]) * (a.circumference / Mt),
                            p = t._options || {};
                        V.extend(t, {
                            _datasetIndex: r.index,
                            _index: e,
                            _model: {
                                backgroundColor: p.backgroundColor,
                                borderColor: p.borderColor,
                                borderWidth: p.borderWidth,
                                borderAlign: p.borderAlign,
                                x: l + o.offsetX,
                                y: u + o.offsetY,
                                startAngle: c,
                                endAngle: d,
                                circumference: f,
                                outerRadius: n && s.animateScale ? 0 : r.outerRadius,
                                innerRadius: n && s.animateScale ? 0 : r.innerRadius,
                                label: V.valueAtIndexOrDefault(h.label, e, o.data.labels[e])
                            }
                        });
                        var g = t._model;
                        n && s.animateRotate || (g.startAngle = 0 === e ? a.rotation : r.getMeta().data[e - 1]._model.endAngle, g.endAngle = g.startAngle + g.circumference), t.pivot()
                    },
                    calculateTotal: function() {
                        var t, e = this.getDataset(),
                            n = this.getMeta(),
                            r = 0;
                        return V.each(n.data, (function(n, o) {
                            t = e.data[o], isNaN(t) || n.hidden || (r += Math.abs(t))
                        })), r
                    },
                    calculateCircumference: function(t) {
                        var e = this.getMeta().total;
                        return e > 0 && !isNaN(t) ? Mt * (Math.abs(t) / e) : 0
                    },
                    getMaxBorderWidth: function(t) {
                        var e, n, r, o, i, a, s, l, u = 0,
                            c = this.chart;
                        if (!t)
                            for (e = 0, n = c.data.datasets.length; e < n; ++e)
                                if (c.isDatasetVisible(e)) {
                                    t = (r = c.getDatasetMeta(e)).data, e !== this.index && (i = r.controller);
                                    break
                                } if (!t) return 0;
                        for (e = 0, n = t.length; e < n; ++e) o = t[e], i ? (i._configure(), a = i._resolveDataElementOptions(o, e)) : a = o._options, "inner" !== a.borderAlign && (u = (l = a.hoverBorderWidth) > (u = (s = a.borderWidth) > u ? s : u) ? l : u);
                        return u
                    },
                    setHoverStyle: function(t) {
                        var e = t._model,
                            n = t._options,
                            r = V.getHoverColor;
                        t.$previousStyle = {
                            backgroundColor: e.backgroundColor,
                            borderColor: e.borderColor,
                            borderWidth: e.borderWidth
                        }, e.backgroundColor = Ct(n.hoverBackgroundColor, r(n.backgroundColor)), e.borderColor = Ct(n.hoverBorderColor, r(n.borderColor)), e.borderWidth = Ct(n.hoverBorderWidth, n.borderWidth)
                    },
                    _getRingWeightOffset: function(t) {
                        for (var e = 0, n = 0; n < t; ++n) this.chart.isDatasetVisible(n) && (e += this._getRingWeight(n));
                        return e
                    },
                    _getRingWeight: function(t) {
                        return Math.max(Ct(this.chart.data.datasets[t].weight, 1), 0)
                    },
                    _getVisibleDatasetWeightTotal: function() {
                        return this._getRingWeightOffset(this.chart.data.datasets.length)
                    }
                });
                T._set("horizontalBar", {
                    hover: {
                        mode: "index",
                        axis: "y"
                    },
                    scales: {
                        xAxes: [{
                            type: "linear",
                            position: "bottom"
                        }],
                        yAxes: [{
                            type: "category",
                            position: "left",
                            offset: !0,
                            gridLines: {
                                offsetGridLines: !0
                            }
                        }]
                    },
                    elements: {
                        rectangle: {
                            borderSkipped: "left"
                        }
                    },
                    tooltips: {
                        mode: "index",
                        axis: "y"
                    }
                }), T._set("global", {
                    datasets: {
                        horizontalBar: {
                            categoryPercentage: .8,
                            barPercentage: .9
                        }
                    }
                });
                var Pt = _t.extend({
                        _getValueScaleId: function() {
                            return this.getMeta().xAxisID
                        },
                        _getIndexScaleId: function() {
                            return this.getMeta().yAxisID
                        }
                    }),
                    Et = V.valueOrDefault,
                    Nt = V.options.resolve,
                    It = V.canvas._isPointInArea;

                function Tt(t, e) {
                    var n = t && t.options.ticks || {},
                        r = n.reverse,
                        o = void 0 === n.min ? e : 0,
                        i = void 0 === n.max ? e : 0;
                    return {
                        start: r ? i : o,
                        end: r ? o : i
                    }
                }

                function Rt(t, e, n) {
                    var r = n / 2,
                        o = Tt(t, r),
                        i = Tt(e, r);
                    return {
                        top: i.end,
                        right: o.end,
                        bottom: i.start,
                        left: o.start
                    }
                }

                function Ft(t) {
                    var e, n, r, o;
                    return V.isObject(t) ? (e = t.top, n = t.right, r = t.bottom, o = t.left) : e = n = r = o = t, {
                        top: e,
                        right: n,
                        bottom: r,
                        left: o
                    }
                }
                T._set("line", {
                    showLines: !0,
                    spanGaps: !1,
                    hover: {
                        mode: "label"
                    },
                    scales: {
                        xAxes: [{
                            type: "category",
                            id: "x-axis-0"
                        }],
                        yAxes: [{
                            type: "linear",
                            id: "y-axis-0"
                        }]
                    }
                });
                var Lt = Q.extend({
                        datasetElementType: vt.Line,
                        dataElementType: vt.Point,
                        _datasetElementOptions: ["backgroundColor", "borderCapStyle", "borderColor", "borderDash", "borderDashOffset", "borderJoinStyle", "borderWidth", "cubicInterpolationMode", "fill"],
                        _dataElementOptions: {
                            backgroundColor: "pointBackgroundColor",
                            borderColor: "pointBorderColor",
                            borderWidth: "pointBorderWidth",
                            hitRadius: "pointHitRadius",
                            hoverBackgroundColor: "pointHoverBackgroundColor",
                            hoverBorderColor: "pointHoverBorderColor",
                            hoverBorderWidth: "pointHoverBorderWidth",
                            hoverRadius: "pointHoverRadius",
                            pointStyle: "pointStyle",
                            radius: "pointRadius",
                            rotation: "pointRotation"
                        },
                        update: function(t) {
                            var e, n, r = this,
                                o = r.getMeta(),
                                i = o.dataset,
                                a = o.data || [],
                                s = r._config,
                                l = r._showLine = Et(s.showLine, r.chart.options.showLines);
                            for (r._xScale = r.getScaleForId(o.xAxisID), r._yScale = r.getScaleForId(o.yAxisID), l && (void 0 !== s.tension && void 0 === s.lineTension && (s.lineTension = s.tension), i._scale = r._yScale, i._datasetIndex = r.index, i._children = a, i._model = r._resolveDatasetElementOptions(i), i.pivot()), e = 0, n = a.length; e < n; ++e) r.updateElement(a[e], e, t);
                            for (l && 0 !== i._model.tension && r.updateBezierControlPoints(), e = 0, n = a.length; e < n; ++e) a[e].pivot()
                        },
                        updateElement: function(t, e, n) {
                            var r, o, i = this,
                                a = i.getMeta(),
                                s = t.custom || {},
                                l = i.getDataset(),
                                u = i.index,
                                c = l.data[e],
                                d = i._xScale,
                                h = i._yScale,
                                f = a.dataset._model,
                                p = i._resolveDataElementOptions(t, e);
                            r = d.getPixelForValue("object" == typeof c ? c : NaN, e, u), o = n ? h.getBasePixel() : i.calculatePointY(c, e, u), t._xScale = d, t._yScale = h, t._options = p, t._datasetIndex = u, t._index = e, t._model = {
                                x: r,
                                y: o,
                                skip: s.skip || isNaN(r) || isNaN(o),
                                radius: p.radius,
                                pointStyle: p.pointStyle,
                                rotation: p.rotation,
                                backgroundColor: p.backgroundColor,
                                borderColor: p.borderColor,
                                borderWidth: p.borderWidth,
                                tension: Et(s.tension, f ? f.tension : 0),
                                steppedLine: !!f && f.steppedLine,
                                hitRadius: p.hitRadius
                            }
                        },
                        _resolveDatasetElementOptions: function(t) {
                            var e = this,
                                n = e._config,
                                r = t.custom || {},
                                o = e.chart.options,
                                i = o.elements.line,
                                a = Q.prototype._resolveDatasetElementOptions.apply(e, arguments);
                            return a.spanGaps = Et(n.spanGaps, o.spanGaps), a.tension = Et(n.lineTension, i.tension), a.steppedLine = Nt([r.steppedLine, n.steppedLine, i.stepped]), a.clip = Ft(Et(n.clip, Rt(e._xScale, e._yScale, a.borderWidth))), a
                        },
                        calculatePointY: function(t, e, n) {
                            var r, o, i, a, s, l, u = this.chart,
                                c = this._yScale,
                                d = 0,
                                h = 0;
                            if (c.options.stacked) {
                                for (a = +c.getRightValue(t), l = (s = u._getSortedVisibleDatasetMetas()).length, r = 0; r < l && (o = s[r]).index !== n; ++r) "line" === o.type && o.yAxisID === c.id && ((i = +c.getRightValue(u.data.datasets[o.index].data[e])) < 0 ? h += i || 0 : d += i || 0);
                                return c.getPixelForValue(a < 0 ? h + a : d + a)
                            }
                            return c.getPixelForValue(t)
                        },
                        updateBezierControlPoints: function() {
                            var t, e, n, r, o = this.chart,
                                i = this.getMeta(),
                                a = i.dataset._model,
                                s = o.chartArea,
                                l = i.data || [];

                            function u(t, e, n) {
                                return Math.max(Math.min(t, n), e)
                            }
                            if (a.spanGaps && (l = l.filter((function(t) {
                                    return !t._model.skip
                                }))), "monotone" === a.cubicInterpolationMode) V.splineCurveMonotone(l);
                            else
                                for (t = 0, e = l.length; t < e; ++t) n = l[t]._model, r = V.splineCurve(V.previousItem(l, t)._model, n, V.nextItem(l, t)._model, a.tension), n.controlPointPreviousX = r.previous.x, n.controlPointPreviousY = r.previous.y, n.controlPointNextX = r.next.x, n.controlPointNextY = r.next.y;
                            if (o.options.elements.line.capBezierPoints)
                                for (t = 0, e = l.length; t < e; ++t) It(n = l[t]._model, s) && (t > 0 && It(l[t - 1]._model, s) && (n.controlPointPreviousX = u(n.controlPointPreviousX, s.left, s.right), n.controlPointPreviousY = u(n.controlPointPreviousY, s.top, s.bottom)), t < l.length - 1 && It(l[t + 1]._model, s) && (n.controlPointNextX = u(n.controlPointNextX, s.left, s.right), n.controlPointNextY = u(n.controlPointNextY, s.top, s.bottom)))
                        },
                        draw: function() {
                            var t, e = this.chart,
                                n = this.getMeta(),
                                r = n.data || [],
                                o = e.chartArea,
                                i = e.canvas,
                                a = 0,
                                s = r.length;
                            for (this._showLine && (V.canvas.clipArea(e.ctx, {
                                    left: !1 === (t = n.dataset._model.clip).left ? 0 : o.left - t.left,
                                    right: !1 === t.right ? i.width : o.right + t.right,
                                    top: !1 === t.top ? 0 : o.top - t.top,
                                    bottom: !1 === t.bottom ? i.height : o.bottom + t.bottom
                                }), n.dataset.draw(), V.canvas.unclipArea(e.ctx)); a < s; ++a) r[a].draw(o)
                        },
                        setHoverStyle: function(t) {
                            var e = t._model,
                                n = t._options,
                                r = V.getHoverColor;
                            t.$previousStyle = {
                                backgroundColor: e.backgroundColor,
                                borderColor: e.borderColor,
                                borderWidth: e.borderWidth,
                                radius: e.radius
                            }, e.backgroundColor = Et(n.hoverBackgroundColor, r(n.backgroundColor)), e.borderColor = Et(n.hoverBorderColor, r(n.borderColor)), e.borderWidth = Et(n.hoverBorderWidth, n.borderWidth), e.radius = Et(n.hoverRadius, n.radius)
                        }
                    }),
                    Bt = V.options.resolve;
                T._set("polarArea", {
                    scale: {
                        type: "radialLinear",
                        angleLines: {
                            display: !1
                        },
                        gridLines: {
                            circular: !0
                        },
                        pointLabels: {
                            display: !1
                        },
                        ticks: {
                            beginAtZero: !0
                        }
                    },
                    animation: {
                        animateRotate: !0,
                        animateScale: !0
                    },
                    startAngle: -.5 * Math.PI,
                    legendCallback: function(t) {
                        var e, n, r, o = document.createElement("ul"),
                            i = t.data,
                            a = i.datasets,
                            s = i.labels;
                        if (o.setAttribute("class", t.id + "-legend"), a.length)
                            for (e = 0, n = a[0].data.length; e < n; ++e)(r = o.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = a[0].backgroundColor[e], s[e] && r.appendChild(document.createTextNode(s[e]));
                        return o.outerHTML
                    },
                    legend: {
                        labels: {
                            generateLabels: function(t) {
                                var e = t.data;
                                return e.labels.length && e.datasets.length ? e.labels.map((function(n, r) {
                                    var o = t.getDatasetMeta(0),
                                        i = o.controller.getStyle(r);
                                    return {
                                        text: n,
                                        fillStyle: i.backgroundColor,
                                        strokeStyle: i.borderColor,
                                        lineWidth: i.borderWidth,
                                        hidden: isNaN(e.datasets[0].data[r]) || o.data[r].hidden,
                                        index: r
                                    }
                                })) : []
                            }
                        },
                        onClick: function(t, e) {
                            var n, r, o, i = e.index,
                                a = this.chart;
                            for (n = 0, r = (a.data.datasets || []).length; n < r; ++n)(o = a.getDatasetMeta(n)).data[i].hidden = !o.data[i].hidden;
                            a.update()
                        }
                    },
                    tooltips: {
                        callbacks: {
                            title: function() {
                                return ""
                            },
                            label: function(t, e) {
                                return e.labels[t.index] + ": " + t.yLabel
                            }
                        }
                    }
                });
                var Vt = Q.extend({
                    dataElementType: vt.Arc,
                    linkScales: V.noop,
                    _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"],
                    _getIndexScaleId: function() {
                        return this.chart.scale.id
                    },
                    _getValueScaleId: function() {
                        return this.chart.scale.id
                    },
                    update: function(t) {
                        var e, n, r, o = this,
                            i = o.getDataset(),
                            a = o.getMeta(),
                            s = o.chart.options.startAngle || 0,
                            l = o._starts = [],
                            u = o._angles = [],
                            c = a.data;
                        for (o._updateRadius(), a.count = o.countVisibleElements(), e = 0, n = i.data.length; e < n; e++) l[e] = s, r = o._computeAngle(e), u[e] = r, s += r;
                        for (e = 0, n = c.length; e < n; ++e) c[e]._options = o._resolveDataElementOptions(c[e], e), o.updateElement(c[e], e, t)
                    },
                    _updateRadius: function() {
                        var t = this,
                            e = t.chart,
                            n = e.chartArea,
                            r = e.options,
                            o = Math.min(n.right - n.left, n.bottom - n.top);
                        e.outerRadius = Math.max(o / 2, 0), e.innerRadius = Math.max(r.cutoutPercentage ? e.outerRadius / 100 * r.cutoutPercentage : 1, 0), e.radiusLength = (e.outerRadius - e.innerRadius) / e.getVisibleDatasetCount(), t.outerRadius = e.outerRadius - e.radiusLength * t.index, t.innerRadius = t.outerRadius - e.radiusLength
                    },
                    updateElement: function(t, e, n) {
                        var r = this,
                            o = r.chart,
                            i = r.getDataset(),
                            a = o.options,
                            s = a.animation,
                            l = o.scale,
                            u = o.data.labels,
                            c = l.xCenter,
                            d = l.yCenter,
                            h = a.startAngle,
                            f = t.hidden ? 0 : l.getDistanceFromCenterForValue(i.data[e]),
                            p = r._starts[e],
                            g = p + (t.hidden ? 0 : r._angles[e]),
                            v = s.animateScale ? 0 : l.getDistanceFromCenterForValue(i.data[e]),
                            y = t._options || {};
                        V.extend(t, {
                            _datasetIndex: r.index,
                            _index: e,
                            _scale: l,
                            _model: {
                                backgroundColor: y.backgroundColor,
                                borderColor: y.borderColor,
                                borderWidth: y.borderWidth,
                                borderAlign: y.borderAlign,
                                x: c,
                                y: d,
                                innerRadius: 0,
                                outerRadius: n ? v : f,
                                startAngle: n && s.animateRotate ? h : p,
                                endAngle: n && s.animateRotate ? h : g,
                                label: V.valueAtIndexOrDefault(u, e, u[e])
                            }
                        }), t.pivot()
                    },
                    countVisibleElements: function() {
                        var t = this.getDataset(),
                            e = this.getMeta(),
                            n = 0;
                        return V.each(e.data, (function(e, r) {
                            isNaN(t.data[r]) || e.hidden || n++
                        })), n
                    },
                    setHoverStyle: function(t) {
                        var e = t._model,
                            n = t._options,
                            r = V.getHoverColor,
                            o = V.valueOrDefault;
                        t.$previousStyle = {
                            backgroundColor: e.backgroundColor,
                            borderColor: e.borderColor,
                            borderWidth: e.borderWidth
                        }, e.backgroundColor = o(n.hoverBackgroundColor, r(n.backgroundColor)), e.borderColor = o(n.hoverBorderColor, r(n.borderColor)), e.borderWidth = o(n.hoverBorderWidth, n.borderWidth)
                    },
                    _computeAngle: function(t) {
                        var e = this,
                            n = this.getMeta().count,
                            r = e.getDataset(),
                            o = e.getMeta();
                        return isNaN(r.data[t]) || o.data[t].hidden ? 0 : Bt([e.chart.options.elements.arc.angle, 2 * Math.PI / n], {
                            chart: e.chart,
                            dataIndex: t,
                            dataset: r,
                            datasetIndex: e.index
                        }, t)
                    }
                });
                T._set("pie", V.clone(T.doughnut)), T._set("pie", {
                    cutoutPercentage: 0
                });
                var zt = Dt,
                    Ht = V.valueOrDefault;
                T._set("radar", {
                    spanGaps: !1,
                    scale: {
                        type: "radialLinear"
                    },
                    elements: {
                        line: {
                            fill: "start",
                            tension: 0
                        }
                    }
                });
                var Wt = Q.extend({
                    datasetElementType: vt.Line,
                    dataElementType: vt.Point,
                    linkScales: V.noop,
                    _datasetElementOptions: ["backgroundColor", "borderWidth", "borderColor", "borderCapStyle", "borderDash", "borderDashOffset", "borderJoinStyle", "fill"],
                    _dataElementOptions: {
                        backgroundColor: "pointBackgroundColor",
                        borderColor: "pointBorderColor",
                        borderWidth: "pointBorderWidth",
                        hitRadius: "pointHitRadius",
                        hoverBackgroundColor: "pointHoverBackgroundColor",
                        hoverBorderColor: "pointHoverBorderColor",
                        hoverBorderWidth: "pointHoverBorderWidth",
                        hoverRadius: "pointHoverRadius",
                        pointStyle: "pointStyle",
                        radius: "pointRadius",
                        rotation: "pointRotation"
                    },
                    _getIndexScaleId: function() {
                        return this.chart.scale.id
                    },
                    _getValueScaleId: function() {
                        return this.chart.scale.id
                    },
                    update: function(t) {
                        var e, n, r = this,
                            o = r.getMeta(),
                            i = o.dataset,
                            a = o.data || [],
                            s = r.chart.scale,
                            l = r._config;
                        for (void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension), i._scale = s, i._datasetIndex = r.index, i._children = a, i._loop = !0, i._model = r._resolveDatasetElementOptions(i), i.pivot(), e = 0, n = a.length; e < n; ++e) r.updateElement(a[e], e, t);
                        for (r.updateBezierControlPoints(), e = 0, n = a.length; e < n; ++e) a[e].pivot()
                    },
                    updateElement: function(t, e, n) {
                        var r = this,
                            o = t.custom || {},
                            i = r.getDataset(),
                            a = r.chart.scale,
                            s = a.getPointPositionForValue(e, i.data[e]),
                            l = r._resolveDataElementOptions(t, e),
                            u = r.getMeta().dataset._model,
                            c = n ? a.xCenter : s.x,
                            d = n ? a.yCenter : s.y;
                        t._scale = a, t._options = l, t._datasetIndex = r.index, t._index = e, t._model = {
                            x: c,
                            y: d,
                            skip: o.skip || isNaN(c) || isNaN(d),
                            radius: l.radius,
                            pointStyle: l.pointStyle,
                            rotation: l.rotation,
                            backgroundColor: l.backgroundColor,
                            borderColor: l.borderColor,
                            borderWidth: l.borderWidth,
                            tension: Ht(o.tension, u ? u.tension : 0),
                            hitRadius: l.hitRadius
                        }
                    },
                    _resolveDatasetElementOptions: function() {
                        var t = this,
                            e = t._config,
                            n = t.chart.options,
                            r = Q.prototype._resolveDatasetElementOptions.apply(t, arguments);
                        return r.spanGaps = Ht(e.spanGaps, n.spanGaps), r.tension = Ht(e.lineTension, n.elements.line.tension), r
                    },
                    updateBezierControlPoints: function() {
                        var t, e, n, r, o = this.getMeta(),
                            i = this.chart.chartArea,
                            a = o.data || [];

                        function s(t, e, n) {
                            return Math.max(Math.min(t, n), e)
                        }
                        for (o.dataset._model.spanGaps && (a = a.filter((function(t) {
                                return !t._model.skip
                            }))), t = 0, e = a.length; t < e; ++t) n = a[t]._model, r = V.splineCurve(V.previousItem(a, t, !0)._model, n, V.nextItem(a, t, !0)._model, n.tension), n.controlPointPreviousX = s(r.previous.x, i.left, i.right), n.controlPointPreviousY = s(r.previous.y, i.top, i.bottom), n.controlPointNextX = s(r.next.x, i.left, i.right), n.controlPointNextY = s(r.next.y, i.top, i.bottom)
                    },
                    setHoverStyle: function(t) {
                        var e = t._model,
                            n = t._options,
                            r = V.getHoverColor;
                        t.$previousStyle = {
                            backgroundColor: e.backgroundColor,
                            borderColor: e.borderColor,
                            borderWidth: e.borderWidth,
                            radius: e.radius
                        }, e.backgroundColor = Ht(n.hoverBackgroundColor, r(n.backgroundColor)), e.borderColor = Ht(n.hoverBorderColor, r(n.borderColor)), e.borderWidth = Ht(n.hoverBorderWidth, n.borderWidth), e.radius = Ht(n.hoverRadius, n.radius)
                    }
                });
                T._set("scatter", {
                    hover: {
                        mode: "single"
                    },
                    scales: {
                        xAxes: [{
                            id: "x-axis-1",
                            type: "linear",
                            position: "bottom"
                        }],
                        yAxes: [{
                            id: "y-axis-1",
                            type: "linear",
                            position: "left"
                        }]
                    },
                    tooltips: {
                        callbacks: {
                            title: function() {
                                return ""
                            },
                            label: function(t) {
                                return "(" + t.xLabel + ", " + t.yLabel + ")"
                            }
                        }
                    }
                }), T._set("global", {
                    datasets: {
                        scatter: {
                            showLine: !1
                        }
                    }
                });
                var Ut = {
                    bar: _t,
                    bubble: St,
                    doughnut: Dt,
                    horizontalBar: Pt,
                    line: Lt,
                    polarArea: Vt,
                    pie: zt,
                    radar: Wt,
                    scatter: Lt
                };

                function Gt(t, e) {
                    return t.native ? {
                        x: t.x,
                        y: t.y
                    } : V.getRelativePosition(t, e)
                }

                function qt(t, e) {
                    var n, r, o, i, a, s, l = t._getSortedVisibleDatasetMetas();
                    for (r = 0, i = l.length; r < i; ++r)
                        for (o = 0, a = (n = l[r].data).length; o < a; ++o)(s = n[o])._view.skip || e(s)
                }

                function Kt(t, e) {
                    var n = [];
                    return qt(t, (function(t) {
                        t.inRange(e.x, e.y) && n.push(t)
                    })), n
                }

                function Yt(t, e, n, r) {
                    var o = Number.POSITIVE_INFINITY,
                        i = [];
                    return qt(t, (function(t) {
                        if (!n || t.inRange(e.x, e.y)) {
                            var a = t.getCenterPoint(),
                                s = r(e, a);
                            s < o ? (i = [t], o = s) : s === o && i.push(t)
                        }
                    })), i
                }

                function Zt(t) {
                    var e = -1 !== t.indexOf("x"),
                        n = -1 !== t.indexOf("y");
                    return function(t, r) {
                        var o = e ? Math.abs(t.x - r.x) : 0,
                            i = n ? Math.abs(t.y - r.y) : 0;
                        return Math.sqrt(Math.pow(o, 2) + Math.pow(i, 2))
                    }
                }

                function Xt(t, e, n) {
                    var r = Gt(e, t);
                    n.axis = n.axis || "x";
                    var o = Zt(n.axis),
                        i = n.intersect ? Kt(t, r) : Yt(t, r, !1, o),
                        a = [];
                    return i.length ? (t._getSortedVisibleDatasetMetas().forEach((function(t) {
                        var e = t.data[i[0]._index];
                        e && !e._view.skip && a.push(e)
                    })), a) : []
                }
                var Jt = {
                        modes: {
                            single: function(t, e) {
                                var n = Gt(e, t),
                                    r = [];
                                return qt(t, (function(t) {
                                    if (t.inRange(n.x, n.y)) return r.push(t), r
                                })), r.slice(0, 1)
                            },
                            label: Xt,
                            index: Xt,
                            dataset: function(t, e, n) {
                                var r = Gt(e, t);
                                n.axis = n.axis || "xy";
                                var o = Zt(n.axis),
                                    i = n.intersect ? Kt(t, r) : Yt(t, r, !1, o);
                                return i.length > 0 && (i = t.getDatasetMeta(i[0]._datasetIndex).data), i
                            },
                            "x-axis": function(t, e) {
                                return Xt(t, e, {
                                    intersect: !1
                                })
                            },
                            point: function(t, e) {
                                return Kt(t, Gt(e, t))
                            },
                            nearest: function(t, e, n) {
                                var r = Gt(e, t);
                                n.axis = n.axis || "xy";
                                var o = Zt(n.axis);
                                return Yt(t, r, n.intersect, o)
                            },
                            x: function(t, e, n) {
                                var r = Gt(e, t),
                                    o = [],
                                    i = !1;
                                return qt(t, (function(t) {
                                    t.inXRange(r.x) && o.push(t), t.inRange(r.x, r.y) && (i = !0)
                                })), n.intersect && !i && (o = []), o
                            },
                            y: function(t, e, n) {
                                var r = Gt(e, t),
                                    o = [],
                                    i = !1;
                                return qt(t, (function(t) {
                                    t.inYRange(r.y) && o.push(t), t.inRange(r.x, r.y) && (i = !0)
                                })), n.intersect && !i && (o = []), o
                            }
                        }
                    },
                    $t = V.extend;

                function Qt(t, e) {
                    return V.where(t, (function(t) {
                        return t.pos === e
                    }))
                }

                function te(t, e) {
                    return t.sort((function(t, n) {
                        var r = e ? n : t,
                            o = e ? t : n;
                        return r.weight === o.weight ? r.index - o.index : r.weight - o.weight
                    }))
                }

                function ee(t, e, n, r) {
                    return Math.max(t[n], e[n]) + Math.max(t[r], e[r])
                }

                function ne(t, e, n) {
                    var r, o, i = n.box,
                        a = t.maxPadding;
                    if (n.size && (t[n.pos] -= n.size), n.size = n.horizontal ? i.height : i.width, t[n.pos] += n.size, i.getPadding) {
                        var s = i.getPadding();
                        a.top = Math.max(a.top, s.top), a.left = Math.max(a.left, s.left), a.bottom = Math.max(a.bottom, s.bottom), a.right = Math.max(a.right, s.right)
                    }
                    if (r = e.outerWidth - ee(a, t, "left", "right"), o = e.outerHeight - ee(a, t, "top", "bottom"), r !== t.w || o !== t.h) return t.w = r, t.h = o, n.horizontal ? r !== t.w : o !== t.h
                }

                function re(t, e) {
                    var n, r = e.maxPadding;
                    return n = {
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0
                    }, (t ? ["left", "right"] : ["top", "bottom"]).forEach((function(t) {
                        n[t] = Math.max(e[t], r[t])
                    })), n
                }

                function oe(t, e, n) {
                    var r, o, i, a, s, l, u = [];
                    for (r = 0, o = t.length; r < o; ++r)(a = (i = t[r]).box).update(i.width || e.w, i.height || e.h, re(i.horizontal, e)), ne(e, n, i) && (l = !0, u.length && (s = !0)), a.fullWidth || u.push(i);
                    return s && oe(u, e, n) || l
                }

                function ie(t, e, n) {
                    var r, o, i, a, s = n.padding,
                        l = e.x,
                        u = e.y;
                    for (r = 0, o = t.length; r < o; ++r) a = (i = t[r]).box, i.horizontal ? (a.left = a.fullWidth ? s.left : e.left, a.right = a.fullWidth ? n.outerWidth - s.right : e.left + e.w, a.top = u, a.bottom = u + a.height, a.width = a.right - a.left, u = a.bottom) : (a.left = l, a.right = l + a.width, a.top = e.top, a.bottom = e.top + e.h, a.height = a.bottom - a.top, l = a.right);
                    e.x = l, e.y = u
                }
                T._set("global", {
                    layout: {
                        padding: {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        }
                    }
                });
                var ae, se = {
                        defaults: {},
                        addBox: function(t, e) {
                            t.boxes || (t.boxes = []), e.fullWidth = e.fullWidth || !1, e.position = e.position || "top", e.weight = e.weight || 0, e._layers = e._layers || function() {
                                return [{
                                    z: 0,
                                    draw: function() {
                                        e.draw.apply(e, arguments)
                                    }
                                }]
                            }, t.boxes.push(e)
                        },
                        removeBox: function(t, e) {
                            var n = t.boxes ? t.boxes.indexOf(e) : -1; - 1 !== n && t.boxes.splice(n, 1)
                        },
                        configure: function(t, e, n) {
                            for (var r, o = ["fullWidth", "position", "weight"], i = o.length, a = 0; a < i; ++a) n.hasOwnProperty(r = o[a]) && (e[r] = n[r])
                        },
                        update: function(t, e, n) {
                            if (t) {
                                var r = V.options.toPadding((t.options.layout || {}).padding),
                                    o = e - r.width,
                                    i = n - r.height,
                                    a = function(t) {
                                        var e = function(t) {
                                                var e, n, r, o = [];
                                                for (e = 0, n = (t || []).length; e < n; ++e) o.push({
                                                    index: e,
                                                    box: r = t[e],
                                                    pos: r.position,
                                                    horizontal: r.isHorizontal(),
                                                    weight: r.weight
                                                });
                                                return o
                                            }(t),
                                            n = te(Qt(e, "left"), !0),
                                            r = te(Qt(e, "right")),
                                            o = te(Qt(e, "top"), !0),
                                            i = te(Qt(e, "bottom"));
                                        return {
                                            leftAndTop: n.concat(o),
                                            rightAndBottom: r.concat(i),
                                            chartArea: Qt(e, "chartArea"),
                                            vertical: n.concat(r),
                                            horizontal: o.concat(i)
                                        }
                                    }(t.boxes),
                                    s = a.vertical,
                                    l = a.horizontal,
                                    u = Object.freeze({
                                        outerWidth: e,
                                        outerHeight: n,
                                        padding: r,
                                        availableWidth: o,
                                        vBoxMaxWidth: o / 2 / s.length,
                                        hBoxMaxHeight: i / 2
                                    }),
                                    c = $t({
                                        maxPadding: $t({}, r),
                                        w: o,
                                        h: i,
                                        x: r.left,
                                        y: r.top
                                    }, r);
                                ! function(t, e) {
                                    var n, r, o;
                                    for (n = 0, r = t.length; n < r; ++n)(o = t[n]).width = o.horizontal ? o.box.fullWidth && e.availableWidth : e.vBoxMaxWidth, o.height = o.horizontal && e.hBoxMaxHeight
                                }(s.concat(l), u), oe(s, c, u), oe(l, c, u) && oe(s, c, u),
                                    function(t) {
                                        var e = t.maxPadding;

                                        function n(n) {
                                            var r = Math.max(e[n] - t[n], 0);
                                            return t[n] += r, r
                                        }
                                        t.y += n("top"), t.x += n("left"), n("right"), n("bottom")
                                    }(c), ie(a.leftAndTop, c, u), c.x += c.w, c.y += c.h, ie(a.rightAndBottom, c, u), t.chartArea = {
                                        left: c.left,
                                        top: c.top,
                                        right: c.left + c.w,
                                        bottom: c.top + c.h
                                    }, V.each(a.chartArea, (function(e) {
                                        var n = e.box;
                                        $t(n, t.chartArea), n.update(c.w, c.h)
                                    }))
                            }
                        }
                    },
                    le = (ae = Object.freeze({
                        __proto__: null,
                        default: "/*\n * DOM element rendering detection\n * https://davidwalsh.name/detect-node-insertion\n */\n@keyframes chartjs-render-animation {\n\tfrom { opacity: 0.99; }\n\tto { opacity: 1; }\n}\n\n.chartjs-render-monitor {\n\tanimation: chartjs-render-animation 0.001s;\n}\n\n/*\n * DOM element resizing detection\n * https://github.com/marcj/css-element-queries\n */\n.chartjs-size-monitor,\n.chartjs-size-monitor-expand,\n.chartjs-size-monitor-shrink {\n\tposition: absolute;\n\tdirection: ltr;\n\tleft: 0;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\toverflow: hidden;\n\tpointer-events: none;\n\tvisibility: hidden;\n\tz-index: -1;\n}\n\n.chartjs-size-monitor-expand > div {\n\tposition: absolute;\n\twidth: 1000000px;\n\theight: 1000000px;\n\tleft: 0;\n\ttop: 0;\n}\n\n.chartjs-size-monitor-shrink > div {\n\tposition: absolute;\n\twidth: 200%;\n\theight: 200%;\n\tleft: 0;\n\ttop: 0;\n}\n"
                    })) && ae.default || ae,
                    ue = ["animationstart", "webkitAnimationStart"],
                    ce = {
                        touchstart: "mousedown",
                        touchmove: "mousemove",
                        touchend: "mouseup",
                        pointerenter: "mouseenter",
                        pointerdown: "mousedown",
                        pointermove: "mousemove",
                        pointerup: "mouseup",
                        pointerleave: "mouseout",
                        pointerout: "mouseout"
                    };

                function de(t, e) {
                    var n = V.getStyle(t, e),
                        r = n && n.match(/^(\d+)(\.\d+)?px$/);
                    return r ? Number(r[1]) : void 0
                }
                var he = !! function() {
                    var t = !1;
                    try {
                        var e = Object.defineProperty({}, "passive", {
                            get: function() {
                                t = !0
                            }
                        });
                        window.addEventListener("e", null, e)
                    } catch (n) {}
                    return t
                }() && {
                    passive: !0
                };

                function fe(t, e, n) {
                    t.addEventListener(e, n, he)
                }

                function pe(t, e, n) {
                    t.removeEventListener(e, n, he)
                }

                function ge(t, e, n, r, o) {
                    return {
                        type: t,
                        chart: e,
                        native: o || null,
                        x: void 0 !== n ? n : null,
                        y: void 0 !== r ? r : null
                    }
                }

                function ve(t) {
                    var e = document.createElement("div");
                    return e.className = t || "", e
                }
                var ye = {
                    disableCSSInjection: !1,
                    _enabled: "undefined" != typeof window && "undefined" != typeof document,
                    _ensureLoaded: function(t) {
                        if (!this.disableCSSInjection) {
                            var e = t.getRootNode ? t.getRootNode() : document;
                            ! function(t, e) {
                                var n = t.$chartjs || (t.$chartjs = {});
                                if (!n.containsStyles) {
                                    n.containsStyles = !0, e = "/* Chart.js */\n" + e;
                                    var r = document.createElement("style");
                                    r.setAttribute("type", "text/css"), r.appendChild(document.createTextNode(e)), t.appendChild(r)
                                }
                            }(e.host ? e : document.head, le)
                        }
                    },
                    acquireContext: function(t, e) {
                        "string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas);
                        var n = t && t.getContext && t.getContext("2d");
                        return n && n.canvas === t ? (this._ensureLoaded(t), function(t, e) {
                            var n = t.style,
                                r = t.getAttribute("height"),
                                o = t.getAttribute("width");
                            if (t.$chartjs = {
                                    initial: {
                                        height: r,
                                        width: o,
                                        style: {
                                            display: n.display,
                                            height: n.height,
                                            width: n.width
                                        }
                                    }
                                }, n.display = n.display || "block", null === o || "" === o) {
                                var i = de(t, "width");
                                void 0 !== i && (t.width = i)
                            }
                            if (null === r || "" === r)
                                if ("" === t.style.height) t.height = t.width / (e.options.aspectRatio || 2);
                                else {
                                    var a = de(t, "height");
                                    void 0 !== i && (t.height = a)
                                }
                        }(t, e), n) : null
                    },
                    releaseContext: function(t) {
                        var e = t.canvas;
                        if (e.$chartjs) {
                            var n = e.$chartjs.initial;
                            ["height", "width"].forEach((function(t) {
                                var r = n[t];
                                V.isNullOrUndef(r) ? e.removeAttribute(t) : e.setAttribute(t, r)
                            })), V.each(n.style || {}, (function(t, n) {
                                e.style[n] = t
                            })), e.width = e.width, delete e.$chartjs
                        }
                    },
                    addEventListener: function(t, e, n) {
                        var r = t.canvas;
                        if ("resize" !== e) {
                            var o = n.$chartjs || (n.$chartjs = {});
                            fe(r, e, (o.proxies || (o.proxies = {}))[t.id + "_" + e] = function(e) {
                                n(function(t, e) {
                                    var n = ce[t.type] || t.type,
                                        r = V.getRelativePosition(t, e);
                                    return ge(n, e, r.x, r.y, t)
                                }(e, t))
                            })
                        } else ! function(t, e, n) {
                            var r, o, i, a, s = t.$chartjs || (t.$chartjs = {}),
                                l = s.resizer = function(t) {
                                    var e = ve("chartjs-size-monitor"),
                                        n = ve("chartjs-size-monitor-expand"),
                                        r = ve("chartjs-size-monitor-shrink");
                                    n.appendChild(ve()), r.appendChild(ve()), e.appendChild(n), e.appendChild(r), e._reset = function() {
                                        n.scrollLeft = 1e6, n.scrollTop = 1e6, r.scrollLeft = 1e6, r.scrollTop = 1e6
                                    };
                                    var o = function() {
                                        e._reset(), t()
                                    };
                                    return fe(n, "scroll", o.bind(n, "expand")), fe(r, "scroll", o.bind(r, "shrink")), e
                                }((r = function() {
                                    if (s.resizer) {
                                        var r = n.options.maintainAspectRatio && t.parentNode,
                                            o = r ? r.clientWidth : 0;
                                        e(ge("resize", n)), r && r.clientWidth < o && n.canvas && e(ge("resize", n))
                                    }
                                }, i = !1, a = [], function() {
                                    a = Array.prototype.slice.call(arguments), o = o || this, i || (i = !0, V.requestAnimFrame.call(window, (function() {
                                        i = !1, r.apply(o, a)
                                    })))
                                }));
                            ! function(t, e) {
                                var n = t.$chartjs || (t.$chartjs = {}),
                                    r = n.renderProxy = function(t) {
                                        "chartjs-render-animation" === t.animationName && e()
                                    };
                                V.each(ue, (function(e) {
                                    fe(t, e, r)
                                })), n.reflow = !!t.offsetParent, t.classList.add("chartjs-render-monitor")
                            }(t, (function() {
                                if (s.resizer) {
                                    var e = t.parentNode;
                                    e && e !== l.parentNode && e.insertBefore(l, e.firstChild), l._reset()
                                }
                            }))
                        }(r, n, t)
                    },
                    removeEventListener: function(t, e, n) {
                        var r, o, i, a = t.canvas;
                        if ("resize" !== e) {
                            var s = ((n.$chartjs || {}).proxies || {})[t.id + "_" + e];
                            s && pe(a, e, s)
                        } else i = (o = (r = a).$chartjs || {}).resizer, delete o.resizer,
                            function(t) {
                                var e = t.$chartjs || {},
                                    n = e.renderProxy;
                                n && (V.each(ue, (function(e) {
                                    pe(t, e, n)
                                })), delete e.renderProxy), t.classList.remove("chartjs-render-monitor")
                            }(r), i && i.parentNode && i.parentNode.removeChild(i)
                    }
                };
                V.addEvent = fe, V.removeEvent = pe;
                var be = V.extend({
                    initialize: function() {},
                    acquireContext: function() {},
                    releaseContext: function() {},
                    addEventListener: function() {},
                    removeEventListener: function() {}
                }, ye._enabled ? ye : {
                    acquireContext: function(t) {
                        return t && t.canvas && (t = t.canvas), t && t.getContext("2d") || null
                    }
                });
                T._set("global", {
                    plugins: {}
                });
                var me = {
                        _plugins: [],
                        _cacheId: 0,
                        register: function(t) {
                            var e = this._plugins;
                            [].concat(t).forEach((function(t) {
                                -1 === e.indexOf(t) && e.push(t)
                            })), this._cacheId++
                        },
                        unregister: function(t) {
                            var e = this._plugins;
                            [].concat(t).forEach((function(t) {
                                var n = e.indexOf(t); - 1 !== n && e.splice(n, 1)
                            })), this._cacheId++
                        },
                        clear: function() {
                            this._plugins = [], this._cacheId++
                        },
                        count: function() {
                            return this._plugins.length
                        },
                        getAll: function() {
                            return this._plugins
                        },
                        notify: function(t, e, n) {
                            var r, o, i, a, s, l = this.descriptors(t),
                                u = l.length;
                            for (r = 0; r < u; ++r)
                                if ("function" == typeof(s = (i = (o = l[r]).plugin)[e]) && ((a = [t].concat(n || [])).push(o.options), !1 === s.apply(i, a))) return !1;
                            return !0
                        },
                        descriptors: function(t) {
                            var e = t.$plugins || (t.$plugins = {});
                            if (e.id === this._cacheId) return e.descriptors;
                            var n = [],
                                r = [],
                                o = t && t.config || {},
                                i = o.options && o.options.plugins || {};
                            return this._plugins.concat(o.plugins || []).forEach((function(t) {
                                if (-1 === n.indexOf(t)) {
                                    var e = t.id,
                                        o = i[e];
                                    !1 !== o && (!0 === o && (o = V.clone(T.global.plugins[e])), n.push(t), r.push({
                                        plugin: t,
                                        options: o || {}
                                    }))
                                }
                            })), e.descriptors = r, e.id = this._cacheId, r
                        },
                        _invalidate: function(t) {
                            delete t.$plugins
                        }
                    },
                    xe = {
                        constructors: {},
                        defaults: {},
                        registerScaleType: function(t, e, n) {
                            this.constructors[t] = e, this.defaults[t] = V.clone(n)
                        },
                        getScaleConstructor: function(t) {
                            return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0
                        },
                        getScaleDefaults: function(t) {
                            return this.defaults.hasOwnProperty(t) ? V.merge({}, [T.scale, this.defaults[t]]) : {}
                        },
                        updateScaleDefaults: function(t, e) {
                            this.defaults.hasOwnProperty(t) && (this.defaults[t] = V.extend(this.defaults[t], e))
                        },
                        addScalesToLayout: function(t) {
                            V.each(t.scales, (function(e) {
                                e.fullWidth = e.options.fullWidth, e.position = e.options.position, e.weight = e.options.weight, se.addBox(t, e)
                            }))
                        }
                    },
                    we = V.valueOrDefault,
                    _e = V.rtl.getRtlAdapter;
                T._set("global", {
                    tooltips: {
                        enabled: !0,
                        custom: null,
                        mode: "nearest",
                        position: "average",
                        intersect: !0,
                        backgroundColor: "rgba(0,0,0,0.8)",
                        titleFontStyle: "bold",
                        titleSpacing: 2,
                        titleMarginBottom: 6,
                        titleFontColor: "#fff",
                        titleAlign: "left",
                        bodySpacing: 2,
                        bodyFontColor: "#fff",
                        bodyAlign: "left",
                        footerFontStyle: "bold",
                        footerSpacing: 2,
                        footerMarginTop: 6,
                        footerFontColor: "#fff",
                        footerAlign: "left",
                        yPadding: 6,
                        xPadding: 6,
                        caretPadding: 2,
                        caretSize: 5,
                        cornerRadius: 6,
                        multiKeyBackground: "#fff",
                        displayColors: !0,
                        borderColor: "rgba(0,0,0,0)",
                        borderWidth: 0,
                        callbacks: {
                            beforeTitle: V.noop,
                            title: function(t, e) {
                                var n = "",
                                    r = e.labels,
                                    o = r ? r.length : 0;
                                if (t.length > 0) {
                                    var i = t[0];
                                    i.label ? n = i.label : i.xLabel ? n = i.xLabel : o > 0 && i.index < o && (n = r[i.index])
                                }
                                return n
                            },
                            afterTitle: V.noop,
                            beforeBody: V.noop,
                            beforeLabel: V.noop,
                            label: function(t, e) {
                                var n = e.datasets[t.datasetIndex].label || "";
                                return n && (n += ": "), V.isNullOrUndef(t.value) ? n += t.yLabel : n += t.value, n
                            },
                            labelColor: function(t, e) {
                                var n = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;
                                return {
                                    borderColor: n.borderColor,
                                    backgroundColor: n.backgroundColor
                                }
                            },
                            labelTextColor: function() {
                                return this._options.bodyFontColor
                            },
                            afterLabel: V.noop,
                            afterBody: V.noop,
                            beforeFooter: V.noop,
                            footer: V.noop,
                            afterFooter: V.noop
                        }
                    }
                });
                var Oe = {
                    average: function(t) {
                        if (!t.length) return !1;
                        var e, n, r = 0,
                            o = 0,
                            i = 0;
                        for (e = 0, n = t.length; e < n; ++e) {
                            var a = t[e];
                            if (a && a.hasValue()) {
                                var s = a.tooltipPosition();
                                r += s.x, o += s.y, ++i
                            }
                        }
                        return {
                            x: r / i,
                            y: o / i
                        }
                    },
                    nearest: function(t, e) {
                        var n, r, o, i = e.x,
                            a = e.y,
                            s = Number.POSITIVE_INFINITY;
                        for (n = 0, r = t.length; n < r; ++n) {
                            var l = t[n];
                            if (l && l.hasValue()) {
                                var u = l.getCenterPoint(),
                                    c = V.distanceBetweenPoints(e, u);
                                c < s && (s = c, o = l)
                            }
                        }
                        if (o) {
                            var d = o.tooltipPosition();
                            i = d.x, a = d.y
                        }
                        return {
                            x: i,
                            y: a
                        }
                    }
                };

                function ke(t, e) {
                    return e && (V.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
                }

                function Se(t) {
                    return ("string" == typeof t || t instanceof String) && t.indexOf("\n") > -1 ? t.split("\n") : t
                }

                function Ce(t) {
                    var e = T.global;
                    return {
                        xPadding: t.xPadding,
                        yPadding: t.yPadding,
                        xAlign: t.xAlign,
                        yAlign: t.yAlign,
                        rtl: t.rtl,
                        textDirection: t.textDirection,
                        bodyFontColor: t.bodyFontColor,
                        _bodyFontFamily: we(t.bodyFontFamily, e.defaultFontFamily),
                        _bodyFontStyle: we(t.bodyFontStyle, e.defaultFontStyle),
                        _bodyAlign: t.bodyAlign,
                        bodyFontSize: we(t.bodyFontSize, e.defaultFontSize),
                        bodySpacing: t.bodySpacing,
                        titleFontColor: t.titleFontColor,
                        _titleFontFamily: we(t.titleFontFamily, e.defaultFontFamily),
                        _titleFontStyle: we(t.titleFontStyle, e.defaultFontStyle),
                        titleFontSize: we(t.titleFontSize, e.defaultFontSize),
                        _titleAlign: t.titleAlign,
                        titleSpacing: t.titleSpacing,
                        titleMarginBottom: t.titleMarginBottom,
                        footerFontColor: t.footerFontColor,
                        _footerFontFamily: we(t.footerFontFamily, e.defaultFontFamily),
                        _footerFontStyle: we(t.footerFontStyle, e.defaultFontStyle),
                        footerFontSize: we(t.footerFontSize, e.defaultFontSize),
                        _footerAlign: t.footerAlign,
                        footerSpacing: t.footerSpacing,
                        footerMarginTop: t.footerMarginTop,
                        caretSize: t.caretSize,
                        cornerRadius: t.cornerRadius,
                        backgroundColor: t.backgroundColor,
                        opacity: 0,
                        legendColorBackground: t.multiKeyBackground,
                        displayColors: t.displayColors,
                        borderColor: t.borderColor,
                        borderWidth: t.borderWidth
                    }
                }

                function Ae(t, e) {
                    return "center" === e ? t.x + t.width / 2 : "right" === e ? t.x + t.width - t.xPadding : t.x + t.xPadding
                }

                function Me(t) {
                    return ke([], Se(t))
                }
                var je = G.extend({
                    initialize: function() {
                        this._model = Ce(this._options), this._lastActive = []
                    },
                    getTitle: function() {
                        var t = this,
                            e = t._options,
                            n = e.callbacks,
                            r = n.beforeTitle.apply(t, arguments),
                            o = n.title.apply(t, arguments),
                            i = n.afterTitle.apply(t, arguments),
                            a = [];
                        return a = ke(a, Se(r)), a = ke(a, Se(o)), ke(a, Se(i))
                    },
                    getBeforeBody: function() {
                        return Me(this._options.callbacks.beforeBody.apply(this, arguments))
                    },
                    getBody: function(t, e) {
                        var n = this,
                            r = n._options.callbacks,
                            o = [];
                        return V.each(t, (function(t) {
                            var i = {
                                before: [],
                                lines: [],
                                after: []
                            };
                            ke(i.before, Se(r.beforeLabel.call(n, t, e))), ke(i.lines, r.label.call(n, t, e)), ke(i.after, Se(r.afterLabel.call(n, t, e))), o.push(i)
                        })), o
                    },
                    getAfterBody: function() {
                        return Me(this._options.callbacks.afterBody.apply(this, arguments))
                    },
                    getFooter: function() {
                        var t = this,
                            e = t._options.callbacks,
                            n = e.beforeFooter.apply(t, arguments),
                            r = e.footer.apply(t, arguments),
                            o = e.afterFooter.apply(t, arguments),
                            i = [];
                        return i = ke(i, Se(n)), i = ke(i, Se(r)), ke(i, Se(o))
                    },
                    update: function(t) {
                        var e, n, r, o, i, a, s, l, u, c, d = this,
                            h = d._options,
                            f = d._model,
                            p = d._model = Ce(h),
                            g = d._active,
                            v = d._data,
                            y = {
                                xAlign: f.xAlign,
                                yAlign: f.yAlign
                            },
                            b = {
                                x: f.x,
                                y: f.y
                            },
                            m = {
                                width: f.width,
                                height: f.height
                            },
                            x = {
                                x: f.caretX,
                                y: f.caretY
                            };
                        if (g.length) {
                            p.opacity = 1;
                            var w = [],
                                _ = [];
                            x = Oe[h.position].call(d, g, d._eventPosition);
                            var O = [];
                            for (e = 0, n = g.length; e < n; ++e) O.push((o = void 0, i = void 0, l = void 0, u = void 0, c = void 0, o = (r = g[e])._xScale, i = r._yScale || r._scale, a = r._index, u = (l = r._chart.getDatasetMeta(s = r._datasetIndex).controller)._getIndexScale(), c = l._getValueScale(), {
                                xLabel: o ? o.getLabelForIndex(a, s) : "",
                                yLabel: i ? i.getLabelForIndex(a, s) : "",
                                label: u ? "" + u.getLabelForIndex(a, s) : "",
                                value: c ? "" + c.getLabelForIndex(a, s) : "",
                                index: a,
                                datasetIndex: s,
                                x: r._model.x,
                                y: r._model.y
                            }));
                            h.filter && (O = O.filter((function(t) {
                                return h.filter(t, v)
                            }))), h.itemSort && (O = O.sort((function(t, e) {
                                return h.itemSort(t, e, v)
                            }))), V.each(O, (function(t) {
                                w.push(h.callbacks.labelColor.call(d, t, d._chart)), _.push(h.callbacks.labelTextColor.call(d, t, d._chart))
                            })), p.title = d.getTitle(O, v), p.beforeBody = d.getBeforeBody(O, v), p.body = d.getBody(O, v), p.afterBody = d.getAfterBody(O, v), p.footer = d.getFooter(O, v), p.x = x.x, p.y = x.y, p.caretPadding = h.caretPadding, p.labelColors = w, p.labelTextColors = _, p.dataPoints = O, m = function(t, e) {
                                var n = t._chart.ctx,
                                    r = 2 * e.yPadding,
                                    o = 0,
                                    i = e.body,
                                    a = i.reduce((function(t, e) {
                                        return t + e.before.length + e.lines.length + e.after.length
                                    }), 0),
                                    s = e.title.length,
                                    l = e.footer.length,
                                    u = e.titleFontSize,
                                    c = e.bodyFontSize,
                                    d = e.footerFontSize;
                                r += s * u, r += s ? (s - 1) * e.titleSpacing : 0, r += s ? e.titleMarginBottom : 0, r += (a += e.beforeBody.length + e.afterBody.length) * c, r += a ? (a - 1) * e.bodySpacing : 0, r += l ? e.footerMarginTop : 0, r += l * d, r += l ? (l - 1) * e.footerSpacing : 0;
                                var h = 0,
                                    f = function(t) {
                                        o = Math.max(o, n.measureText(t).width + h)
                                    };
                                return n.font = V.fontString(u, e._titleFontStyle, e._titleFontFamily), V.each(e.title, f), n.font = V.fontString(c, e._bodyFontStyle, e._bodyFontFamily), V.each(e.beforeBody.concat(e.afterBody), f), h = e.displayColors ? c + 2 : 0, V.each(i, (function(t) {
                                    V.each(t.before, f), V.each(t.lines, f), V.each(t.after, f)
                                })), h = 0, n.font = V.fontString(d, e._footerFontStyle, e._footerFontFamily), V.each(e.footer, f), {
                                    width: o += 2 * e.xPadding,
                                    height: r
                                }
                            }(this, p), b = function(t, e, n, r) {
                                var o = t.x,
                                    i = t.y,
                                    a = t.caretPadding,
                                    s = n.xAlign,
                                    l = n.yAlign,
                                    u = t.caretSize + a,
                                    c = t.cornerRadius + a;
                                return "right" === s ? o -= e.width : "center" === s && ((o -= e.width / 2) + e.width > r.width && (o = r.width - e.width), o < 0 && (o = 0)), "top" === l ? i += u : i -= "bottom" === l ? e.height + u : e.height / 2, "center" === l ? "left" === s ? o += u : "right" === s && (o -= u) : "left" === s ? o -= c : "right" === s && (o += c), {
                                    x: o,
                                    y: i
                                }
                            }(p, m, y = function(t, e) {
                                var n, r, o, i, a, s = t._model,
                                    l = t._chart,
                                    u = t._chart.chartArea,
                                    c = "center",
                                    d = "center";
                                s.y < e.height ? d = "top" : s.y > l.height - e.height && (d = "bottom");
                                var h = (u.left + u.right) / 2,
                                    f = (u.top + u.bottom) / 2;
                                "center" === d ? (n = function(t) {
                                    return t <= h
                                }, r = function(t) {
                                    return t > h
                                }) : (n = function(t) {
                                    return t <= e.width / 2
                                }, r = function(t) {
                                    return t >= l.width - e.width / 2
                                }), o = function(t) {
                                    return t + e.width + s.caretSize + s.caretPadding > l.width
                                }, i = function(t) {
                                    return t - e.width - s.caretSize - s.caretPadding < 0
                                }, a = function(t) {
                                    return t <= f ? "top" : "bottom"
                                }, n(s.x) ? (c = "left", o(s.x) && (c = "center", d = a(s.y))) : r(s.x) && (c = "right", i(s.x) && (c = "center", d = a(s.y)));
                                var p = t._options;
                                return {
                                    xAlign: p.xAlign ? p.xAlign : c,
                                    yAlign: p.yAlign ? p.yAlign : d
                                }
                            }(this, m), d._chart)
                        } else p.opacity = 0;
                        return p.xAlign = y.xAlign, p.yAlign = y.yAlign, p.x = b.x, p.y = b.y, p.width = m.width, p.height = m.height, p.caretX = x.x, p.caretY = x.y, d._model = p, t && h.custom && h.custom.call(d, p), d
                    },
                    drawCaret: function(t, e) {
                        var n = this._chart.ctx,
                            r = this.getCaretPosition(t, e, this._view);
                        n.lineTo(r.x1, r.y1), n.lineTo(r.x2, r.y2), n.lineTo(r.x3, r.y3)
                    },
                    getCaretPosition: function(t, e, n) {
                        var r, o, i, a, s, l, u = n.caretSize,
                            c = n.cornerRadius,
                            d = n.xAlign,
                            h = n.yAlign,
                            f = t.x,
                            p = t.y,
                            g = e.width,
                            v = e.height;
                        if ("center" === h) s = p + v / 2, "left" === d ? (o = (r = f) - u, i = r, a = s + u, l = s - u) : (o = (r = f + g) + u, i = r, a = s - u, l = s + u);
                        else if ("left" === d ? (r = (o = f + c + u) - u, i = o + u) : "right" === d ? (r = (o = f + g - c - u) - u, i = o + u) : (r = (o = n.caretX) - u, i = o + u), "top" === h) s = (a = p) - u, l = a;
                        else {
                            s = (a = p + v) + u, l = a;
                            var y = i;
                            i = r, r = y
                        }
                        return {
                            x1: r,
                            x2: o,
                            x3: i,
                            y1: a,
                            y2: s,
                            y3: l
                        }
                    },
                    drawTitle: function(t, e, n) {
                        var r, o, i, a = e.title,
                            s = a.length;
                        if (s) {
                            var l = _e(e.rtl, e.x, e.width);
                            for (t.x = Ae(e, e._titleAlign), n.textAlign = l.textAlign(e._titleAlign), n.textBaseline = "middle", r = e.titleFontSize, o = e.titleSpacing, n.fillStyle = e.titleFontColor, n.font = V.fontString(r, e._titleFontStyle, e._titleFontFamily), i = 0; i < s; ++i) n.fillText(a[i], l.x(t.x), t.y + r / 2), t.y += r + o, i + 1 === s && (t.y += e.titleMarginBottom - o)
                        }
                    },
                    drawBody: function(t, e, n) {
                        var r, o, i, a, s, l, u, c, d = e.bodyFontSize,
                            h = e.bodySpacing,
                            f = e._bodyAlign,
                            p = e.body,
                            g = e.displayColors,
                            v = 0,
                            y = g ? Ae(e, "left") : 0,
                            b = _e(e.rtl, e.x, e.width),
                            m = function(e) {
                                n.fillText(e, b.x(t.x + v), t.y + d / 2), t.y += d + h
                            },
                            x = b.textAlign(f);
                        for (n.textAlign = f, n.textBaseline = "middle", n.font = V.fontString(d, e._bodyFontStyle, e._bodyFontFamily), t.x = Ae(e, x), n.fillStyle = e.bodyFontColor, V.each(e.beforeBody, m), v = g && "right" !== x ? "center" === f ? d / 2 + 1 : d + 2 : 0, s = 0, u = p.length; s < u; ++s) {
                            for (r = p[s], i = e.labelColors[s], n.fillStyle = o = e.labelTextColors[s], V.each(r.before, m), l = 0, c = (a = r.lines).length; l < c; ++l) {
                                if (g) {
                                    var w = b.x(y);
                                    n.fillStyle = e.legendColorBackground, n.fillRect(b.leftForLtr(w, d), t.y, d, d), n.lineWidth = 1, n.strokeStyle = i.borderColor, n.strokeRect(b.leftForLtr(w, d), t.y, d, d), n.fillStyle = i.backgroundColor, n.fillRect(b.leftForLtr(b.xPlus(w, 1), d - 2), t.y + 1, d - 2, d - 2), n.fillStyle = o
                                }
                                m(a[l])
                            }
                            V.each(r.after, m)
                        }
                        v = 0, V.each(e.afterBody, m), t.y -= h
                    },
                    drawFooter: function(t, e, n) {
                        var r, o, i = e.footer,
                            a = i.length;
                        if (a) {
                            var s = _e(e.rtl, e.x, e.width);
                            for (t.x = Ae(e, e._footerAlign), t.y += e.footerMarginTop, n.textAlign = s.textAlign(e._footerAlign), n.textBaseline = "middle", r = e.footerFontSize, n.fillStyle = e.footerFontColor, n.font = V.fontString(r, e._footerFontStyle, e._footerFontFamily), o = 0; o < a; ++o) n.fillText(i[o], s.x(t.x), t.y + r / 2), t.y += r + e.footerSpacing
                        }
                    },
                    drawBackground: function(t, e, n, r) {
                        n.fillStyle = e.backgroundColor, n.strokeStyle = e.borderColor, n.lineWidth = e.borderWidth;
                        var o = e.xAlign,
                            i = e.yAlign,
                            a = t.x,
                            s = t.y,
                            l = r.width,
                            u = r.height,
                            c = e.cornerRadius;
                        n.beginPath(), n.moveTo(a + c, s), "top" === i && this.drawCaret(t, r), n.lineTo(a + l - c, s), n.quadraticCurveTo(a + l, s, a + l, s + c), "center" === i && "right" === o && this.drawCaret(t, r), n.lineTo(a + l, s + u - c), n.quadraticCurveTo(a + l, s + u, a + l - c, s + u), "bottom" === i && this.drawCaret(t, r), n.lineTo(a + c, s + u), n.quadraticCurveTo(a, s + u, a, s + u - c), "center" === i && "left" === o && this.drawCaret(t, r), n.lineTo(a, s + c), n.quadraticCurveTo(a, s, a + c, s), n.closePath(), n.fill(), e.borderWidth > 0 && n.stroke()
                    },
                    draw: function() {
                        var t = this._chart.ctx,
                            e = this._view;
                        if (0 !== e.opacity) {
                            var n = {
                                    width: e.width,
                                    height: e.height
                                },
                                r = {
                                    x: e.x,
                                    y: e.y
                                },
                                o = Math.abs(e.opacity < .001) ? 0 : e.opacity;
                            this._options.enabled && (e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length) && (t.save(), t.globalAlpha = o, this.drawBackground(r, e, t, n), r.y += e.yPadding, V.rtl.overrideTextDirection(t, e.textDirection), this.drawTitle(r, e, t), this.drawBody(r, e, t), this.drawFooter(r, e, t), V.rtl.restoreTextDirection(t, e.textDirection), t.restore())
                        }
                    },
                    handleEvent: function(t) {
                        var e, n = this,
                            r = n._options;
                        return n._lastActive = n._lastActive || [], "mouseout" === t.type ? n._active = [] : (n._active = n._chart.getElementsAtEventForMode(t, r.mode, r), r.reverse && n._active.reverse()), (e = !V.arrayEquals(n._active, n._lastActive)) && (n._lastActive = n._active, (r.enabled || r.custom) && (n._eventPosition = {
                            x: t.x,
                            y: t.y
                        }, n.update(!0), n.pivot())), e
                    }
                });
                je.positioners = Oe;
                var De = V.valueOrDefault;

                function Pe() {
                    return V.merge({}, [].slice.call(arguments), {
                        merger: function(t, e, n, r) {
                            if ("xAxes" === t || "yAxes" === t) {
                                var o, i, a, s = n[t].length;
                                for (e[t] || (e[t] = []), o = 0; o < s; ++o) i = De((a = n[t][o]).type, "xAxes" === t ? "category" : "linear"), o >= e[t].length && e[t].push({}), V.merge(e[t][o], !e[t][o].type || a.type && a.type !== e[t][o].type ? [xe.getScaleDefaults(i), a] : a)
                            } else V._merger(t, e, n, r)
                        }
                    })
                }

                function Ee() {
                    return V.merge({}, [].slice.call(arguments), {
                        merger: function(t, e, n, r) {
                            var o = e[t] || {},
                                i = n[t];
                            "scales" === t ? e[t] = Pe(o, i) : "scale" === t ? e[t] = V.merge(o, [xe.getScaleDefaults(i.type), i]) : V._merger(t, e, n, r)
                        }
                    })
                }

                function Ne(t) {
                    var e = t.options;
                    V.each(t.scales, (function(e) {
                        se.removeBox(t, e)
                    })), e = Ee(T.global, T[t.config.type], e), t.options = t.config.options = e, t.ensureScalesHaveIDs(), t.buildOrUpdateScales(), t.tooltip._options = e.tooltips, t.tooltip.initialize()
                }

                function Ie(t, e, n) {
                    var r, o = function(t) {
                        return t.id === r
                    };
                    do {
                        r = e + n++
                    } while (V.findIndex(t, o) >= 0);
                    return r
                }

                function Te(t) {
                    return "top" === t || "bottom" === t
                }

                function Re(t, e) {
                    return function(n, r) {
                        return n[t] === r[t] ? n[e] - r[e] : n[t] - r[t]
                    }
                }
                T._set("global", {
                    elements: {},
                    events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
                    hover: {
                        onHover: null,
                        mode: "nearest",
                        intersect: !0,
                        animationDuration: 400
                    },
                    onClick: null,
                    maintainAspectRatio: !0,
                    responsive: !0,
                    responsiveAnimationDuration: 0
                });
                var Fe = function(t, e) {
                    return this.construct(t, e), this
                };
                V.extend(Fe.prototype, {
                    construct: function(t, e) {
                        var n = this;
                        e = function(t) {
                            var e = (t = t || {}).data = t.data || {};
                            return e.datasets = e.datasets || [], e.labels = e.labels || [], t.options = Ee(T.global, T[t.type], t.options || {}), t
                        }(e);
                        var r = be.acquireContext(t, e),
                            o = r && r.canvas,
                            i = o && o.height,
                            a = o && o.width;
                        n.id = V.uid(), n.ctx = r, n.canvas = o, n.config = e, n.width = a, n.height = i, n.aspectRatio = i ? a / i : null, n.options = e.options, n._bufferedRender = !1, n._layers = [], n.chart = n, n.controller = n, Fe.instances[n.id] = n, Object.defineProperty(n, "data", {
                            get: function() {
                                return n.config.data
                            },
                            set: function(t) {
                                n.config.data = t
                            }
                        }), r && o ? (n.initialize(), n.update()) : console.error("Failed to create chart: can't acquire context from the given item")
                    },
                    initialize: function() {
                        var t = this;
                        return me.notify(t, "beforeInit"), V.retinaScale(t, t.options.devicePixelRatio), t.bindEvents(), t.options.responsive && t.resize(!0), t.initToolTip(), me.notify(t, "afterInit"), t
                    },
                    clear: function() {
                        return V.canvas.clear(this), this
                    },
                    stop: function() {
                        return Y.cancelAnimation(this), this
                    },
                    resize: function(t) {
                        var e = this,
                            n = e.options,
                            r = e.canvas,
                            o = n.maintainAspectRatio && e.aspectRatio || null,
                            i = Math.max(0, Math.floor(V.getMaximumWidth(r))),
                            a = Math.max(0, Math.floor(o ? i / o : V.getMaximumHeight(r)));
                        if ((e.width !== i || e.height !== a) && (r.width = e.width = i, r.height = e.height = a, r.style.width = i + "px", r.style.height = a + "px", V.retinaScale(e, n.devicePixelRatio), !t)) {
                            var s = {
                                width: i,
                                height: a
                            };
                            me.notify(e, "resize", [s]), n.onResize && n.onResize(e, s), e.stop(), e.update({
                                duration: n.responsiveAnimationDuration
                            })
                        }
                    },
                    ensureScalesHaveIDs: function() {
                        var t = this.options,
                            e = t.scales || {},
                            n = t.scale;
                        V.each(e.xAxes, (function(t, n) {
                            t.id || (t.id = Ie(e.xAxes, "x-axis-", n))
                        })), V.each(e.yAxes, (function(t, n) {
                            t.id || (t.id = Ie(e.yAxes, "y-axis-", n))
                        })), n && (n.id = n.id || "scale")
                    },
                    buildOrUpdateScales: function() {
                        var t = this,
                            e = t.options,
                            n = t.scales || {},
                            r = [],
                            o = Object.keys(n).reduce((function(t, e) {
                                return t[e] = !1, t
                            }), {});
                        e.scales && (r = r.concat((e.scales.xAxes || []).map((function(t) {
                            return {
                                options: t,
                                dtype: "category",
                                dposition: "bottom"
                            }
                        })), (e.scales.yAxes || []).map((function(t) {
                            return {
                                options: t,
                                dtype: "linear",
                                dposition: "left"
                            }
                        })))), e.scale && r.push({
                            options: e.scale,
                            dtype: "radialLinear",
                            isDefault: !0,
                            dposition: "chartArea"
                        }), V.each(r, (function(e) {
                            var r = e.options,
                                i = r.id,
                                a = De(r.type, e.dtype);
                            Te(r.position) !== Te(e.dposition) && (r.position = e.dposition), o[i] = !0;
                            var s = null;
                            if (i in n && n[i].type === a)(s = n[i]).options = r, s.ctx = t.ctx, s.chart = t;
                            else {
                                var l = xe.getScaleConstructor(a);
                                if (!l) return;
                                s = new l({
                                    id: i,
                                    type: a,
                                    options: r,
                                    ctx: t.ctx,
                                    chart: t
                                }), n[s.id] = s
                            }
                            s.mergeTicksOptions(), e.isDefault && (t.scale = s)
                        })), V.each(o, (function(t, e) {
                            t || delete n[e]
                        })), t.scales = n, xe.addScalesToLayout(this)
                    },
                    buildOrUpdateControllers: function() {
                        var t, e, n = this,
                            r = [],
                            o = n.data.datasets;
                        for (t = 0, e = o.length; t < e; t++) {
                            var i = o[t],
                                a = n.getDatasetMeta(t),
                                s = i.type || n.config.type;
                            if (a.type && a.type !== s && (n.destroyDatasetMeta(t), a = n.getDatasetMeta(t)), a.type = s, a.order = i.order || 0, a.index = t, a.controller) a.controller.updateIndex(t), a.controller.linkScales();
                            else {
                                var l = Ut[a.type];
                                if (void 0 === l) throw new Error('"' + a.type + '" is not a chart type.');
                                a.controller = new l(n, t), r.push(a.controller)
                            }
                        }
                        return r
                    },
                    resetElements: function() {
                        var t = this;
                        V.each(t.data.datasets, (function(e, n) {
                            t.getDatasetMeta(n).controller.reset()
                        }), t)
                    },
                    reset: function() {
                        this.resetElements(), this.tooltip.initialize()
                    },
                    update: function(t) {
                        var e, n, r = this;
                        if (t && "object" == typeof t || (t = {
                                duration: t,
                                lazy: arguments[1]
                            }), Ne(r), me._invalidate(r), !1 !== me.notify(r, "beforeUpdate")) {
                            r.tooltip._data = r.data;
                            var o = r.buildOrUpdateControllers();
                            for (e = 0, n = r.data.datasets.length; e < n; e++) r.getDatasetMeta(e).controller.buildOrUpdateElements();
                            r.updateLayout(), r.options.animation && r.options.animation.duration && V.each(o, (function(t) {
                                t.reset()
                            })), r.updateDatasets(), r.tooltip.initialize(), r.lastActive = [], me.notify(r, "afterUpdate"), r._layers.sort(Re("z", "_idx")), r._bufferedRender ? r._bufferedRequest = {
                                duration: t.duration,
                                easing: t.easing,
                                lazy: t.lazy
                            } : r.render(t)
                        }
                    },
                    updateLayout: function() {
                        var t = this;
                        !1 !== me.notify(t, "beforeLayout") && (se.update(this, this.width, this.height), t._layers = [], V.each(t.boxes, (function(e) {
                            e._configure && e._configure(), t._layers.push.apply(t._layers, e._layers())
                        }), t), t._layers.forEach((function(t, e) {
                            t._idx = e
                        })), me.notify(t, "afterScaleUpdate"), me.notify(t, "afterLayout"))
                    },
                    updateDatasets: function() {
                        if (!1 !== me.notify(this, "beforeDatasetsUpdate")) {
                            for (var t = 0, e = this.data.datasets.length; t < e; ++t) this.updateDataset(t);
                            me.notify(this, "afterDatasetsUpdate")
                        }
                    },
                    updateDataset: function(t) {
                        var e = this.getDatasetMeta(t),
                            n = {
                                meta: e,
                                index: t
                            };
                        !1 !== me.notify(this, "beforeDatasetUpdate", [n]) && (e.controller._update(), me.notify(this, "afterDatasetUpdate", [n]))
                    },
                    render: function(t) {
                        var e = this;
                        t && "object" == typeof t || (t = {
                            duration: t,
                            lazy: arguments[1]
                        });
                        var n = e.options.animation,
                            r = De(t.duration, n && n.duration),
                            o = t.lazy;
                        if (!1 !== me.notify(e, "beforeRender")) {
                            var i = function(t) {
                                me.notify(e, "afterRender"), V.callback(n && n.onComplete, [t], e)
                            };
                            if (n && r) {
                                var a = new K({
                                    numSteps: r / 16.66,
                                    easing: t.easing || n.easing,
                                    render: function(t, e) {
                                        var n = e.currentStep,
                                            r = n / e.numSteps;
                                        t.draw((0, V.easing.effects[e.easing])(r), r, n)
                                    },
                                    onAnimationProgress: n.onProgress,
                                    onAnimationComplete: i
                                });
                                Y.addAnimation(e, a, r, o)
                            } else e.draw(), i(new K({
                                numSteps: 0,
                                chart: e
                            }));
                            return e
                        }
                    },
                    draw: function(t) {
                        var e, n, r = this;
                        if (r.clear(), V.isNullOrUndef(t) && (t = 1), r.transition(t), !(r.width <= 0 || r.height <= 0) && !1 !== me.notify(r, "beforeDraw", [t])) {
                            for (n = r._layers, e = 0; e < n.length && n[e].z <= 0; ++e) n[e].draw(r.chartArea);
                            for (r.drawDatasets(t); e < n.length; ++e) n[e].draw(r.chartArea);
                            r._drawTooltip(t), me.notify(r, "afterDraw", [t])
                        }
                    },
                    transition: function(t) {
                        for (var e = 0, n = (this.data.datasets || []).length; e < n; ++e) this.isDatasetVisible(e) && this.getDatasetMeta(e).controller.transition(t);
                        this.tooltip.transition(t)
                    },
                    _getSortedDatasetMetas: function(t) {
                        var e, n, r = [];
                        for (e = 0, n = (this.data.datasets || []).length; e < n; ++e) t && !this.isDatasetVisible(e) || r.push(this.getDatasetMeta(e));
                        return r.sort(Re("order", "index")), r
                    },
                    _getSortedVisibleDatasetMetas: function() {
                        return this._getSortedDatasetMetas(!0)
                    },
                    drawDatasets: function(t) {
                        var e, n;
                        if (!1 !== me.notify(this, "beforeDatasetsDraw", [t])) {
                            for (n = (e = this._getSortedVisibleDatasetMetas()).length - 1; n >= 0; --n) this.drawDataset(e[n], t);
                            me.notify(this, "afterDatasetsDraw", [t])
                        }
                    },
                    drawDataset: function(t, e) {
                        var n = {
                            meta: t,
                            index: t.index,
                            easingValue: e
                        };
                        !1 !== me.notify(this, "beforeDatasetDraw", [n]) && (t.controller.draw(e), me.notify(this, "afterDatasetDraw", [n]))
                    },
                    _drawTooltip: function(t) {
                        var e = this.tooltip,
                            n = {
                                tooltip: e,
                                easingValue: t
                            };
                        !1 !== me.notify(this, "beforeTooltipDraw", [n]) && (e.draw(), me.notify(this, "afterTooltipDraw", [n]))
                    },
                    getElementAtEvent: function(t) {
                        return Jt.modes.single(this, t)
                    },
                    getElementsAtEvent: function(t) {
                        return Jt.modes.label(this, t, {
                            intersect: !0
                        })
                    },
                    getElementsAtXAxis: function(t) {
                        return Jt.modes["x-axis"](this, t, {
                            intersect: !0
                        })
                    },
                    getElementsAtEventForMode: function(t, e, n) {
                        var r = Jt.modes[e];
                        return "function" == typeof r ? r(this, t, n) : []
                    },
                    getDatasetAtEvent: function(t) {
                        return Jt.modes.dataset(this, t, {
                            intersect: !0
                        })
                    },
                    getDatasetMeta: function(t) {
                        var e = this.data.datasets[t];
                        e._meta || (e._meta = {});
                        var n = e._meta[this.id];
                        return n || (n = e._meta[this.id] = {
                            type: null,
                            data: [],
                            dataset: null,
                            controller: null,
                            hidden: null,
                            xAxisID: null,
                            yAxisID: null,
                            order: e.order || 0,
                            index: t
                        }), n
                    },
                    getVisibleDatasetCount: function() {
                        for (var t = 0, e = 0, n = this.data.datasets.length; e < n; ++e) this.isDatasetVisible(e) && t++;
                        return t
                    },
                    isDatasetVisible: function(t) {
                        var e = this.getDatasetMeta(t);
                        return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden
                    },
                    generateLegend: function() {
                        return this.options.legendCallback(this)
                    },
                    destroyDatasetMeta: function(t) {
                        var e = this.id,
                            n = this.data.datasets[t],
                            r = n._meta && n._meta[e];
                        r && (r.controller.destroy(), delete n._meta[e])
                    },
                    destroy: function() {
                        var t, e, n = this,
                            r = n.canvas;
                        for (n.stop(), t = 0, e = n.data.datasets.length; t < e; ++t) n.destroyDatasetMeta(t);
                        r && (n.unbindEvents(), V.canvas.clear(n), be.releaseContext(n.ctx), n.canvas = null, n.ctx = null), me.notify(n, "destroy"), delete Fe.instances[n.id]
                    },
                    toBase64Image: function() {
                        return this.canvas.toDataURL.apply(this.canvas, arguments)
                    },
                    initToolTip: function() {
                        var t = this;
                        t.tooltip = new je({
                            _chart: t,
                            _chartInstance: t,
                            _data: t.data,
                            _options: t.options.tooltips
                        }, t)
                    },
                    bindEvents: function() {
                        var t = this,
                            e = t._listeners = {},
                            n = function() {
                                t.eventHandler.apply(t, arguments)
                            };
                        V.each(t.options.events, (function(r) {
                            be.addEventListener(t, r, n), e[r] = n
                        })), t.options.responsive && (n = function() {
                            t.resize()
                        }, be.addEventListener(t, "resize", n), e.resize = n)
                    },
                    unbindEvents: function() {
                        var t = this,
                            e = t._listeners;
                        e && (delete t._listeners, V.each(e, (function(e, n) {
                            be.removeEventListener(t, n, e)
                        })))
                    },
                    updateHoverStyle: function(t, e, n) {
                        var r, o, i, a = n ? "set" : "remove";
                        for (o = 0, i = t.length; o < i; ++o)(r = t[o]) && this.getDatasetMeta(r._datasetIndex).controller[a + "HoverStyle"](r);
                        "dataset" === e && this.getDatasetMeta(t[0]._datasetIndex).controller["_" + a + "DatasetHoverStyle"]()
                    },
                    eventHandler: function(t) {
                        var e = this,
                            n = e.tooltip;
                        if (!1 !== me.notify(e, "beforeEvent", [t])) {
                            e._bufferedRender = !0, e._bufferedRequest = null;
                            var r = e.handleEvent(t);
                            n && (r = n._start ? n.handleEvent(t) : r | n.handleEvent(t)), me.notify(e, "afterEvent", [t]);
                            var o = e._bufferedRequest;
                            return o ? e.render(o) : r && !e.animating && (e.stop(), e.render({
                                duration: e.options.hover.animationDuration,
                                lazy: !0
                            })), e._bufferedRender = !1, e._bufferedRequest = null, e
                        }
                    },
                    handleEvent: function(t) {
                        var e, n = this,
                            r = n.options || {},
                            o = r.hover;
                        return n.lastActive = n.lastActive || [], n.active = "mouseout" === t.type ? [] : n.getElementsAtEventForMode(t, o.mode, o), V.callback(r.onHover || r.hover.onHover, [t.native, n.active], n), "mouseup" !== t.type && "click" !== t.type || r.onClick && r.onClick.call(n, t.native, n.active), n.lastActive.length && n.updateHoverStyle(n.lastActive, o.mode, !1), n.active.length && o.mode && n.updateHoverStyle(n.active, o.mode, !0), e = !V.arrayEquals(n.active, n.lastActive), n.lastActive = n.active, e
                    }
                }), Fe.instances = {};
                var Le = Fe;

                function Be() {
                    throw new Error("This method is not implemented: either no adapter can be found or an incomplete integration was provided.")
                }

                function Ve(t) {
                    this.options = t || {}
                }
                Fe.Controller = Fe, Fe.types = {}, V.configMerge = Ee, V.scaleMerge = Pe, V.extend(Ve.prototype, {
                    formats: Be,
                    parse: Be,
                    format: Be,
                    add: Be,
                    diff: Be,
                    startOf: Be,
                    endOf: Be,
                    _create: function(t) {
                        return t
                    }
                }), Ve.override = function(t) {
                    V.extend(Ve.prototype, t)
                };
                var ze = {
                        _date: Ve
                    },
                    He = {
                        formatters: {
                            values: function(t) {
                                return V.isArray(t) ? t : "" + t
                            },
                            linear: function(t, e, n) {
                                var r = n.length > 3 ? n[2] - n[1] : n[1] - n[0];
                                Math.abs(r) > 1 && t !== Math.floor(t) && (r = t - Math.floor(t));
                                var o = V.log10(Math.abs(r)),
                                    i = "";
                                if (0 !== t)
                                    if (Math.max(Math.abs(n[0]), Math.abs(n[n.length - 1])) < 1e-4) {
                                        var a = V.log10(Math.abs(t)),
                                            s = Math.floor(a) - Math.floor(o);
                                        s = Math.max(Math.min(s, 20), 0), i = t.toExponential(s)
                                    } else {
                                        var l = -1 * Math.floor(o);
                                        l = Math.max(Math.min(l, 20), 0), i = t.toFixed(l)
                                    }
                                else i = "0";
                                return i
                            },
                            logarithmic: function(t, e, n) {
                                var r = t / Math.pow(10, Math.floor(V.log10(t)));
                                return 0 === t ? "0" : 1 === r || 2 === r || 5 === r || 0 === e || e === n.length - 1 ? t.toExponential() : ""
                            }
                        }
                    },
                    We = V.isArray,
                    Ue = V.isNullOrUndef,
                    Ge = V.valueOrDefault,
                    qe = V.valueAtIndexOrDefault;

                function Ke(t, e, n) {
                    var r, o = t.getTicks().length,
                        i = Math.min(e, o - 1),
                        a = t.getPixelForTick(i),
                        s = t._startPixel,
                        l = t._endPixel;
                    if (!(n && (r = 1 === o ? Math.max(a - s, l - a) : 0 === e ? (t.getPixelForTick(1) - a) / 2 : (a - t.getPixelForTick(i - 1)) / 2, (a += i < e ? r : -r) < s - 1e-6 || a > l + 1e-6))) return a
                }

                function Ye(t) {
                    return t.drawTicks ? t.tickMarkLength : 0
                }

                function Ze(t) {
                    var e, n;
                    return t.display ? (e = V.options._parseFont(t), n = V.options.toPadding(t.padding), e.lineHeight + n.height) : 0
                }

                function Xe(t, e) {
                    return V.extend(V.options._parseFont({
                        fontFamily: Ge(e.fontFamily, t.fontFamily),
                        fontSize: Ge(e.fontSize, t.fontSize),
                        fontStyle: Ge(e.fontStyle, t.fontStyle),
                        lineHeight: Ge(e.lineHeight, t.lineHeight)
                    }), {
                        color: V.options.resolve([e.fontColor, t.fontColor, T.global.defaultFontColor])
                    })
                }

                function Je(t) {
                    var e = Xe(t, t.minor);
                    return {
                        minor: e,
                        major: t.major.enabled ? Xe(t, t.major) : e
                    }
                }

                function $e(t) {
                    var e, n, r, o = [];
                    for (n = 0, r = t.length; n < r; ++n) void 0 !== (e = t[n])._index && o.push(e);
                    return o
                }

                function Qe(t, e, n, r) {
                    var o, i, a, s, l = Ge(n, 0),
                        u = Math.min(Ge(r, t.length), t.length),
                        c = 0;
                    for (e = Math.ceil(e), r && (e = (o = r - n) / Math.floor(o / e)), s = l; s < 0;) c++, s = Math.round(l + c * e);
                    for (i = Math.max(l, 0); i < u; i++) a = t[i], i === s ? (a._index = i, c++, s = Math.round(l + c * e)) : delete a.label
                }
                T._set("scale", {
                    display: !0,
                    position: "left",
                    offset: !1,
                    gridLines: {
                        display: !0,
                        color: "rgba(0,0,0,0.1)",
                        lineWidth: 1,
                        drawBorder: !0,
                        drawOnChartArea: !0,
                        drawTicks: !0,
                        tickMarkLength: 10,
                        zeroLineWidth: 1,
                        zeroLineColor: "rgba(0,0,0,0.25)",
                        zeroLineBorderDash: [],
                        zeroLineBorderDashOffset: 0,
                        offsetGridLines: !1,
                        borderDash: [],
                        borderDashOffset: 0
                    },
                    scaleLabel: {
                        display: !1,
                        labelString: "",
                        padding: {
                            top: 4,
                            bottom: 4
                        }
                    },
                    ticks: {
                        beginAtZero: !1,
                        minRotation: 0,
                        maxRotation: 50,
                        mirror: !1,
                        padding: 0,
                        reverse: !1,
                        display: !0,
                        autoSkip: !0,
                        autoSkipPadding: 0,
                        labelOffset: 0,
                        callback: He.formatters.values,
                        minor: {},
                        major: {}
                    }
                });
                var tn = G.extend({
                    zeroLineIndex: 0,
                    getPadding: function() {
                        return {
                            left: this.paddingLeft || 0,
                            top: this.paddingTop || 0,
                            right: this.paddingRight || 0,
                            bottom: this.paddingBottom || 0
                        }
                    },
                    getTicks: function() {
                        return this._ticks
                    },
                    _getLabels: function() {
                        var t = this.chart.data;
                        return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || []
                    },
                    mergeTicksOptions: function() {},
                    beforeUpdate: function() {
                        V.callback(this.options.beforeUpdate, [this])
                    },
                    update: function(t, e, n) {
                        var r, o, i, a, s, l = this,
                            u = l.options.ticks,
                            c = u.sampleSize;
                        if (l.beforeUpdate(), l.maxWidth = t, l.maxHeight = e, l.margins = V.extend({
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0
                            }, n), l._ticks = null, l.ticks = null, l._labelSizes = null, l._maxLabelLines = 0, l.longestLabelWidth = 0, l.longestTextCache = l.longestTextCache || {}, l._gridLineItems = null, l._labelItems = null, l.beforeSetDimensions(), l.setDimensions(), l.afterSetDimensions(), l.beforeDataLimits(), l.determineDataLimits(), l.afterDataLimits(), l.beforeBuildTicks(), a = l.buildTicks() || [], (!(a = l.afterBuildTicks(a) || a) || !a.length) && l.ticks)
                            for (a = [], r = 0, o = l.ticks.length; r < o; ++r) a.push({
                                value: l.ticks[r],
                                major: !1
                            });
                        return l._ticks = a, i = l._convertTicksToLabels((s = c < a.length) ? function(t, e) {
                            for (var n = [], r = t.length / e, o = 0, i = t.length; o < i; o += r) n.push(t[Math.floor(o)]);
                            return n
                        }(a, c) : a), l._configure(), l.beforeCalculateTickRotation(), l.calculateTickRotation(), l.afterCalculateTickRotation(), l.beforeFit(), l.fit(), l.afterFit(), l._ticksToDraw = u.display && (u.autoSkip || "auto" === u.source) ? l._autoSkip(a) : a, s && (i = l._convertTicksToLabels(l._ticksToDraw)), l.ticks = i, l.afterUpdate(), l.minSize
                    },
                    _configure: function() {
                        var t, e, n = this,
                            r = n.options.ticks.reverse;
                        n.isHorizontal() ? (t = n.left, e = n.right) : (t = n.top, e = n.bottom, r = !r), n._startPixel = t, n._endPixel = e, n._reversePixels = r, n._length = e - t
                    },
                    afterUpdate: function() {
                        V.callback(this.options.afterUpdate, [this])
                    },
                    beforeSetDimensions: function() {
                        V.callback(this.options.beforeSetDimensions, [this])
                    },
                    setDimensions: function() {
                        var t = this;
                        t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0
                    },
                    afterSetDimensions: function() {
                        V.callback(this.options.afterSetDimensions, [this])
                    },
                    beforeDataLimits: function() {
                        V.callback(this.options.beforeDataLimits, [this])
                    },
                    determineDataLimits: V.noop,
                    afterDataLimits: function() {
                        V.callback(this.options.afterDataLimits, [this])
                    },
                    beforeBuildTicks: function() {
                        V.callback(this.options.beforeBuildTicks, [this])
                    },
                    buildTicks: V.noop,
                    afterBuildTicks: function(t) {
                        var e = this;
                        return We(t) && t.length ? V.callback(e.options.afterBuildTicks, [e, t]) : (e.ticks = V.callback(e.options.afterBuildTicks, [e, e.ticks]) || e.ticks, t)
                    },
                    beforeTickToLabelConversion: function() {
                        V.callback(this.options.beforeTickToLabelConversion, [this])
                    },
                    convertTicksToLabels: function() {
                        var t = this.options.ticks;
                        this.ticks = this.ticks.map(t.userCallback || t.callback, this)
                    },
                    afterTickToLabelConversion: function() {
                        V.callback(this.options.afterTickToLabelConversion, [this])
                    },
                    beforeCalculateTickRotation: function() {
                        V.callback(this.options.beforeCalculateTickRotation, [this])
                    },
                    calculateTickRotation: function() {
                        var t, e, n, r, o, i, a, s = this,
                            l = s.options,
                            u = l.ticks,
                            c = s.getTicks().length,
                            d = u.minRotation || 0,
                            h = u.maxRotation,
                            f = d;
                        !s._isVisible() || !u.display || d >= h || c <= 1 || !s.isHorizontal() ? s.labelRotation = d : (e = (t = s._getLabelSizes()).widest.width, n = t.highest.height - t.highest.offset, r = Math.min(s.maxWidth, s.chart.width - e), e + 6 > (o = l.offset ? s.maxWidth / c : r / (c - 1)) && (o = r / (c - (l.offset ? .5 : 1)), i = s.maxHeight - Ye(l.gridLines) - u.padding - Ze(l.scaleLabel), a = Math.sqrt(e * e + n * n), f = V.toDegrees(Math.min(Math.asin(Math.min((t.highest.height + 6) / o, 1)), Math.asin(Math.min(i / a, 1)) - Math.asin(n / a))), f = Math.max(d, Math.min(h, f))), s.labelRotation = f)
                    },
                    afterCalculateTickRotation: function() {
                        V.callback(this.options.afterCalculateTickRotation, [this])
                    },
                    beforeFit: function() {
                        V.callback(this.options.beforeFit, [this])
                    },
                    fit: function() {
                        var t = this,
                            e = t.minSize = {
                                width: 0,
                                height: 0
                            },
                            n = t.chart,
                            r = t.options,
                            o = r.ticks,
                            i = r.scaleLabel,
                            a = r.gridLines,
                            s = t._isVisible(),
                            l = "bottom" === r.position,
                            u = t.isHorizontal();
                        if (u ? e.width = t.maxWidth : s && (e.width = Ye(a) + Ze(i)), u ? s && (e.height = Ye(a) + Ze(i)) : e.height = t.maxHeight, o.display && s) {
                            var c = Je(o),
                                d = t._getLabelSizes(),
                                h = d.first,
                                f = d.last,
                                p = d.widest,
                                g = d.highest,
                                v = .4 * c.minor.lineHeight,
                                y = o.padding;
                            if (u) {
                                var b = 0 !== t.labelRotation,
                                    m = V.toRadians(t.labelRotation),
                                    x = Math.cos(m),
                                    w = Math.sin(m);
                                e.height = Math.min(t.maxHeight, e.height + (w * p.width + x * (g.height - (b ? g.offset : 0)) + (b ? 0 : v)) + y);
                                var _, O, k = t.getPixelForTick(0) - t.left,
                                    S = t.right - t.getPixelForTick(t.getTicks().length - 1);
                                b ? (_ = l ? x * h.width + w * h.offset : w * (h.height - h.offset), O = l ? w * (f.height - f.offset) : x * f.width + w * f.offset) : (_ = h.width / 2, O = f.width / 2), t.paddingLeft = Math.max((_ - k) * t.width / (t.width - k), 0) + 3, t.paddingRight = Math.max((O - S) * t.width / (t.width - S), 0) + 3
                            } else e.width = Math.min(t.maxWidth, e.width + (o.mirror ? 0 : p.width + y + v)), t.paddingTop = h.height / 2, t.paddingBottom = f.height / 2
                        }
                        t.handleMargins(), u ? (t.width = t._length = n.width - t.margins.left - t.margins.right, t.height = e.height) : (t.width = e.width, t.height = t._length = n.height - t.margins.top - t.margins.bottom)
                    },
                    handleMargins: function() {
                        var t = this;
                        t.margins && (t.margins.left = Math.max(t.paddingLeft, t.margins.left), t.margins.top = Math.max(t.paddingTop, t.margins.top), t.margins.right = Math.max(t.paddingRight, t.margins.right), t.margins.bottom = Math.max(t.paddingBottom, t.margins.bottom))
                    },
                    afterFit: function() {
                        V.callback(this.options.afterFit, [this])
                    },
                    isHorizontal: function() {
                        var t = this.options.position;
                        return "top" === t || "bottom" === t
                    },
                    isFullWidth: function() {
                        return this.options.fullWidth
                    },
                    getRightValue: function(t) {
                        if (Ue(t)) return NaN;
                        if (("number" == typeof t || t instanceof Number) && !isFinite(t)) return NaN;
                        if (t)
                            if (this.isHorizontal()) {
                                if (void 0 !== t.x) return this.getRightValue(t.x)
                            } else if (void 0 !== t.y) return this.getRightValue(t.y);
                        return t
                    },
                    _convertTicksToLabels: function(t) {
                        var e, n, r, o = this;
                        for (o.ticks = t.map((function(t) {
                                return t.value
                            })), o.beforeTickToLabelConversion(), e = o.convertTicksToLabels(t) || o.ticks, o.afterTickToLabelConversion(), n = 0, r = t.length; n < r; ++n) t[n].label = e[n];
                        return e
                    },
                    _getLabelSizes: function() {
                        var t = this,
                            e = t._labelSizes;
                        return e || (t._labelSizes = e = function(t, e, n, r) {
                            var o, i, a, s, l, u, c, d, h, f, p, g, v, y = n.length,
                                b = [],
                                m = [],
                                x = [];
                            for (o = 0; o < y; ++o) {
                                if (s = n[o].label, t.font = u = (l = n[o].major ? e.major : e.minor).string, c = r[u] = r[u] || {
                                        data: {},
                                        gc: []
                                    }, d = l.lineHeight, h = f = 0, Ue(s) || We(s)) {
                                    if (We(s))
                                        for (i = 0, a = s.length; i < a; ++i) Ue(p = s[i]) || We(p) || (h = V.measureText(t, c.data, c.gc, h, p), f += d)
                                } else h = V.measureText(t, c.data, c.gc, h, s), f = d;
                                b.push(h), m.push(f), x.push(d / 2)
                            }

                            function w(t) {
                                return {
                                    width: b[t] || 0,
                                    height: m[t] || 0,
                                    offset: x[t] || 0
                                }
                            }
                            return function(t, e) {
                                V.each(t, (function(t) {
                                    var n, r = t.gc,
                                        o = r.length / 2;
                                    if (o > e) {
                                        for (n = 0; n < o; ++n) delete t.data[r[n]];
                                        r.splice(0, o)
                                    }
                                }))
                            }(r, y), g = b.indexOf(Math.max.apply(null, b)), v = m.indexOf(Math.max.apply(null, m)), {
                                first: w(0),
                                last: w(y - 1),
                                widest: w(g),
                                highest: w(v)
                            }
                        }(t.ctx, Je(t.options.ticks), t.getTicks(), t.longestTextCache), t.longestLabelWidth = e.widest.width), e
                    },
                    _parseValue: function(t) {
                        var e, n, r, o;
                        return We(t) ? (e = +this.getRightValue(t[0]), n = +this.getRightValue(t[1]), r = Math.min(e, n), o = Math.max(e, n)) : (e = void 0, n = t = +this.getRightValue(t), r = t, o = t), {
                            min: r,
                            max: o,
                            start: e,
                            end: n
                        }
                    },
                    _getScaleLabel: function(t) {
                        var e = this._parseValue(t);
                        return void 0 !== e.start ? "[" + e.start + ", " + e.end + "]" : +this.getRightValue(t)
                    },
                    getLabelForIndex: V.noop,
                    getPixelForValue: V.noop,
                    getValueForPixel: V.noop,
                    getPixelForTick: function(t) {
                        var e = this.options.offset,
                            n = this._ticks.length,
                            r = 1 / Math.max(n - (e ? 0 : 1), 1);
                        return t < 0 || t > n - 1 ? null : this.getPixelForDecimal(t * r + (e ? r / 2 : 0))
                    },
                    getPixelForDecimal: function(t) {
                        return this._reversePixels && (t = 1 - t), this._startPixel + t * this._length
                    },
                    getDecimalForPixel: function(t) {
                        var e = (t - this._startPixel) / this._length;
                        return this._reversePixels ? 1 - e : e
                    },
                    getBasePixel: function() {
                        return this.getPixelForValue(this.getBaseValue())
                    },
                    getBaseValue: function() {
                        var t = this.min,
                            e = this.max;
                        return this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0
                    },
                    _autoSkip: function(t) {
                        var e, n, r, o, i = this.options.ticks,
                            a = i.maxTicksLimit || this._length / this._tickSize() + 1,
                            s = i.major.enabled ? function(t) {
                                var e, n, r = [];
                                for (e = 0, n = t.length; e < n; e++) t[e].major && r.push(e);
                                return r
                            }(t) : [],
                            l = s.length,
                            u = s[0],
                            c = s[l - 1];
                        if (l > a) return function(t, e, n) {
                            var r, o, i = 0,
                                a = e[0];
                            for (n = Math.ceil(n), r = 0; r < t.length; r++) o = t[r], r === a ? (o._index = r, a = e[++i * n]) : delete o.label
                        }(t, s, l / a), $e(t);
                        if (r = function(t, e, n, r) {
                                var o, i, a, s, l = function(t) {
                                        var e, n, r = t.length;
                                        if (r < 2) return !1;
                                        for (n = t[0], e = 1; e < r; ++e)
                                            if (t[e] - t[e - 1] !== n) return !1;
                                        return n
                                    }(t),
                                    u = (e.length - 1) / r;
                                if (!l) return Math.max(u, 1);
                                for (a = 0, s = (o = V.math._factorize(l)).length - 1; a < s; a++)
                                    if ((i = o[a]) > u) return i;
                                return Math.max(u, 1)
                            }(s, t, 0, a), l > 0) {
                            for (e = 0, n = l - 1; e < n; e++) Qe(t, r, s[e], s[e + 1]);
                            return Qe(t, r, V.isNullOrUndef(o = l > 1 ? (c - u) / (l - 1) : null) ? 0 : u - o, u), Qe(t, r, c, V.isNullOrUndef(o) ? t.length : c + o), $e(t)
                        }
                        return Qe(t, r), $e(t)
                    },
                    _tickSize: function() {
                        var t = this.options.ticks,
                            e = V.toRadians(this.labelRotation),
                            n = Math.abs(Math.cos(e)),
                            r = Math.abs(Math.sin(e)),
                            o = this._getLabelSizes(),
                            i = t.autoSkipPadding || 0,
                            a = o ? o.widest.width + i : 0,
                            s = o ? o.highest.height + i : 0;
                        return this.isHorizontal() ? s * n > a * r ? a / n : s / r : s * r < a * n ? s / n : a / r
                    },
                    _isVisible: function() {
                        var t, e, n, r = this.chart,
                            o = this.options.display;
                        if ("auto" !== o) return !!o;
                        for (t = 0, e = r.data.datasets.length; t < e; ++t)
                            if (r.isDatasetVisible(t) && ((n = r.getDatasetMeta(t)).xAxisID === this.id || n.yAxisID === this.id)) return !0;
                        return !1
                    },
                    _computeGridLineItems: function(t) {
                        var e, n, r, o, i, a, s, l, u, c, d, h, f, p, g, v, y, b = this,
                            m = b.chart,
                            x = b.options,
                            w = x.gridLines,
                            _ = x.position,
                            O = w.offsetGridLines,
                            k = b.isHorizontal(),
                            S = b._ticksToDraw,
                            C = S.length + (O ? 1 : 0),
                            A = Ye(w),
                            M = [],
                            j = w.drawBorder ? qe(w.lineWidth, 0, 0) : 0,
                            D = j / 2,
                            P = V._alignPixel,
                            E = function(t) {
                                return P(m, t, j)
                            };
                        for ("top" === _ ? (e = E(b.bottom), s = b.bottom - A, u = e - D, d = E(t.top) + D, f = t.bottom) : "bottom" === _ ? (e = E(b.top), d = t.top, f = E(t.bottom) - D, s = e + D, u = b.top + A) : "left" === _ ? (e = E(b.right), a = b.right - A, l = e - D, c = E(t.left) + D, h = t.right) : (e = E(b.left), c = t.left, h = E(t.right) - D, a = e + D, l = b.left + A), n = 0; n < C; ++n) Ue((r = S[n] || {}).label) && n < S.length || (n === b.zeroLineIndex && x.offset === O ? (p = w.zeroLineWidth, g = w.zeroLineColor, v = w.zeroLineBorderDash || [], y = w.zeroLineBorderDashOffset || 0) : (p = qe(w.lineWidth, n, 1), g = qe(w.color, n, "rgba(0,0,0,0.1)"), v = w.borderDash || [], y = w.borderDashOffset || 0), void 0 !== (o = Ke(b, r._index || n, O)) && (i = P(m, o, p), k ? a = l = c = h = i : s = u = d = f = i, M.push({
                            tx1: a,
                            ty1: s,
                            tx2: l,
                            ty2: u,
                            x1: c,
                            y1: d,
                            x2: h,
                            y2: f,
                            width: p,
                            color: g,
                            borderDash: v,
                            borderDashOffset: y
                        })));
                        return M.ticksLength = C, M.borderValue = e, M
                    },
                    _computeLabelItems: function() {
                        var t, e, n, r, o, i, a, s, l, u, c, d, h = this,
                            f = h.options,
                            p = f.ticks,
                            g = f.position,
                            v = p.mirror,
                            y = h.isHorizontal(),
                            b = h._ticksToDraw,
                            m = Je(p),
                            x = p.padding,
                            w = Ye(f.gridLines),
                            _ = -V.toRadians(h.labelRotation),
                            O = [];
                        for ("top" === g ? (i = h.bottom - w - x, a = _ ? "left" : "center") : "bottom" === g ? (i = h.top + w + x, a = _ ? "right" : "center") : "left" === g ? (o = h.right - (v ? 0 : w) - x, a = v ? "left" : "right") : (o = h.left + (v ? 0 : w) + x, a = v ? "right" : "left"), t = 0, e = b.length; t < e; ++t) Ue(r = (n = b[t]).label) || (s = h.getPixelForTick(n._index || t) + p.labelOffset, u = (l = n.major ? m.major : m.minor).lineHeight, c = We(r) ? r.length : 1, y ? (o = s, d = "top" === g ? ((_ ? 1 : .5) - c) * u : (_ ? 0 : .5) * u) : (i = s, d = (1 - c) * u / 2), O.push({
                            x: o,
                            y: i,
                            rotation: _,
                            label: r,
                            font: l,
                            textOffset: d,
                            textAlign: a
                        }));
                        return O
                    },
                    _drawGrid: function(t) {
                        var e = this,
                            n = e.options.gridLines;
                        if (n.display) {
                            var r, o, i, a, s, l = e.ctx,
                                u = e.chart,
                                c = V._alignPixel,
                                d = n.drawBorder ? qe(n.lineWidth, 0, 0) : 0,
                                h = e._gridLineItems || (e._gridLineItems = e._computeGridLineItems(t));
                            for (i = 0, a = h.length; i < a; ++i) o = (s = h[i]).color, (r = s.width) && o && (l.save(), l.lineWidth = r, l.strokeStyle = o, l.setLineDash && (l.setLineDash(s.borderDash), l.lineDashOffset = s.borderDashOffset), l.beginPath(), n.drawTicks && (l.moveTo(s.tx1, s.ty1), l.lineTo(s.tx2, s.ty2)), n.drawOnChartArea && (l.moveTo(s.x1, s.y1), l.lineTo(s.x2, s.y2)), l.stroke(), l.restore());
                            if (d) {
                                var f, p, g, v, y = d,
                                    b = qe(n.lineWidth, h.ticksLength - 1, 1),
                                    m = h.borderValue;
                                e.isHorizontal() ? (f = c(u, e.left, y) - y / 2, p = c(u, e.right, b) + b / 2, g = v = m) : (g = c(u, e.top, y) - y / 2, v = c(u, e.bottom, b) + b / 2, f = p = m), l.lineWidth = d, l.strokeStyle = qe(n.color, 0), l.beginPath(), l.moveTo(f, g), l.lineTo(p, v), l.stroke()
                            }
                        }
                    },
                    _drawLabels: function() {
                        var t = this;
                        if (t.options.ticks.display) {
                            var e, n, r, o, i, a, s, l, u = t.ctx,
                                c = t._labelItems || (t._labelItems = t._computeLabelItems());
                            for (e = 0, r = c.length; e < r; ++e) {
                                if (a = (i = c[e]).font, u.save(), u.translate(i.x, i.y), u.rotate(i.rotation), u.font = a.string, u.fillStyle = a.color, u.textBaseline = "middle", u.textAlign = i.textAlign, l = i.textOffset, We(s = i.label))
                                    for (n = 0, o = s.length; n < o; ++n) u.fillText("" + s[n], 0, l), l += a.lineHeight;
                                else u.fillText(s, 0, l);
                                u.restore()
                            }
                        }
                    },
                    _drawTitle: function() {
                        var t = this,
                            e = t.ctx,
                            n = t.options,
                            r = n.scaleLabel;
                        if (r.display) {
                            var o, i, a = Ge(r.fontColor, T.global.defaultFontColor),
                                s = V.options._parseFont(r),
                                l = V.options.toPadding(r.padding),
                                u = s.lineHeight / 2,
                                c = n.position,
                                d = 0;
                            if (t.isHorizontal()) o = t.left + t.width / 2, i = "bottom" === c ? t.bottom - u - l.bottom : t.top + u + l.top;
                            else {
                                var h = "left" === c;
                                o = h ? t.left + u + l.top : t.right - u - l.top, i = t.top + t.height / 2, d = h ? -.5 * Math.PI : .5 * Math.PI
                            }
                            e.save(), e.translate(o, i), e.rotate(d), e.textAlign = "center", e.textBaseline = "middle", e.fillStyle = a, e.font = s.string, e.fillText(r.labelString, 0, 0), e.restore()
                        }
                    },
                    draw: function(t) {
                        this._isVisible() && (this._drawGrid(t), this._drawTitle(), this._drawLabels())
                    },
                    _layers: function() {
                        var t = this,
                            e = t.options,
                            n = e.ticks && e.ticks.z || 0,
                            r = e.gridLines && e.gridLines.z || 0;
                        return t._isVisible() && n !== r && t.draw === t._draw ? [{
                            z: r,
                            draw: function() {
                                t._drawGrid.apply(t, arguments), t._drawTitle.apply(t, arguments)
                            }
                        }, {
                            z: n,
                            draw: function() {
                                t._drawLabels.apply(t, arguments)
                            }
                        }] : [{
                            z: n,
                            draw: function() {
                                t.draw.apply(t, arguments)
                            }
                        }]
                    },
                    _getMatchingVisibleMetas: function(t) {
                        var e = this,
                            n = e.isHorizontal();
                        return e.chart._getSortedVisibleDatasetMetas().filter((function(r) {
                            return (!t || r.type === t) && (n ? r.xAxisID === e.id : r.yAxisID === e.id)
                        }))
                    }
                });
                tn.prototype._draw = tn.prototype.draw;
                var en = tn,
                    nn = V.isNullOrUndef,
                    rn = en.extend({
                        determineDataLimits: function() {
                            var t, e = this,
                                n = e._getLabels(),
                                r = e.options.ticks,
                                o = r.min,
                                i = r.max,
                                a = 0,
                                s = n.length - 1;
                            void 0 !== o && (t = n.indexOf(o)) >= 0 && (a = t), void 0 !== i && (t = n.indexOf(i)) >= 0 && (s = t), e.minIndex = a, e.maxIndex = s, e.min = n[a], e.max = n[s]
                        },
                        buildTicks: function() {
                            var t = this._getLabels(),
                                e = this.minIndex,
                                n = this.maxIndex;
                            this.ticks = 0 === e && n === t.length - 1 ? t : t.slice(e, n + 1)
                        },
                        getLabelForIndex: function(t, e) {
                            var n = this.chart;
                            return n.getDatasetMeta(e).controller._getValueScaleId() === this.id ? this.getRightValue(n.data.datasets[e].data[t]) : this._getLabels()[t]
                        },
                        _configure: function() {
                            var t = this,
                                e = t.options.offset,
                                n = t.ticks;
                            en.prototype._configure.call(t), t.isHorizontal() || (t._reversePixels = !t._reversePixels), n && (t._startValue = t.minIndex - (e ? .5 : 0), t._valueRange = Math.max(n.length - (e ? 0 : 1), 1))
                        },
                        getPixelForValue: function(t, e, n) {
                            var r, o, i, a = this;
                            return nn(e) || nn(n) || (t = a.chart.data.datasets[n].data[e]), nn(t) || (r = a.isHorizontal() ? t.x : t.y), (void 0 !== r || void 0 !== t && isNaN(e)) && (o = a._getLabels(), t = V.valueOrDefault(r, t), e = -1 !== (i = o.indexOf(t)) ? i : e, isNaN(e) && (e = t)), a.getPixelForDecimal((e - a._startValue) / a._valueRange)
                        },
                        getPixelForTick: function(t) {
                            var e = this.ticks;
                            return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t], t + this.minIndex)
                        },
                        getValueForPixel: function(t) {
                            var e = Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange);
                            return Math.min(Math.max(e, 0), this.ticks.length - 1)
                        },
                        getBasePixel: function() {
                            return this.bottom
                        }
                    });
                rn._defaults = {
                    position: "bottom"
                };
                var on = V.isNullOrUndef,
                    an = en.extend({
                        getRightValue: function(t) {
                            return "string" == typeof t ? +t : en.prototype.getRightValue.call(this, t)
                        },
                        handleTickRangeOptions: function() {
                            var t = this,
                                e = t.options.ticks;
                            if (e.beginAtZero) {
                                var n = V.sign(t.min),
                                    r = V.sign(t.max);
                                n < 0 && r < 0 ? t.max = 0 : n > 0 && r > 0 && (t.min = 0)
                            }
                            var o = void 0 !== e.min || void 0 !== e.suggestedMin,
                                i = void 0 !== e.max || void 0 !== e.suggestedMax;
                            void 0 !== e.min ? t.min = e.min : void 0 !== e.suggestedMin && (t.min = null === t.min ? e.suggestedMin : Math.min(t.min, e.suggestedMin)), void 0 !== e.max ? t.max = e.max : void 0 !== e.suggestedMax && (t.max = null === t.max ? e.suggestedMax : Math.max(t.max, e.suggestedMax)), o !== i && t.min >= t.max && (o ? t.max = t.min + 1 : t.min = t.max - 1), t.min === t.max && (t.max++, e.beginAtZero || t.min--)
                        },
                        getTickLimit: function() {
                            var t, e = this.options.ticks,
                                n = e.stepSize,
                                r = e.maxTicksLimit;
                            return n ? t = Math.ceil(this.max / n) - Math.floor(this.min / n) + 1 : (t = this._computeTickLimit(), r = r || 11), r && (t = Math.min(r, t)), t
                        },
                        _computeTickLimit: function() {
                            return Number.POSITIVE_INFINITY
                        },
                        handleDirectionalChanges: V.noop,
                        buildTicks: function() {
                            var t = this,
                                e = t.options.ticks,
                                n = t.getTickLimit(),
                                r = {
                                    maxTicks: n = Math.max(2, n),
                                    min: e.min,
                                    max: e.max,
                                    precision: e.precision,
                                    stepSize: V.valueOrDefault(e.fixedStepSize, e.stepSize)
                                },
                                o = t.ticks = function(t, e) {
                                    var n, r, o, i, a = [],
                                        s = t.stepSize,
                                        l = s || 1,
                                        u = t.maxTicks - 1,
                                        c = t.min,
                                        d = t.max,
                                        h = t.precision,
                                        f = e.min,
                                        p = e.max,
                                        g = V.niceNum((p - f) / u / l) * l;
                                    if (g < 1e-14 && on(c) && on(d)) return [f, p];
                                    (i = Math.ceil(p / g) - Math.floor(f / g)) > u && (g = V.niceNum(i * g / u / l) * l), s || on(h) ? n = Math.pow(10, V._decimalPlaces(g)) : (n = Math.pow(10, h), g = Math.ceil(g * n) / n), r = Math.floor(f / g) * g, o = Math.ceil(p / g) * g, s && (!on(c) && V.almostWhole(c / g, g / 1e3) && (r = c), !on(d) && V.almostWhole(d / g, g / 1e3) && (o = d)), i = V.almostEquals(i = (o - r) / g, Math.round(i), g / 1e3) ? Math.round(i) : Math.ceil(i), r = Math.round(r * n) / n, o = Math.round(o * n) / n, a.push(on(c) ? r : c);
                                    for (var v = 1; v < i; ++v) a.push(Math.round((r + v * g) * n) / n);
                                    return a.push(on(d) ? o : d), a
                                }(r, t);
                            t.handleDirectionalChanges(), t.max = V.max(o), t.min = V.min(o), e.reverse ? (o.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max)
                        },
                        convertTicksToLabels: function() {
                            var t = this;
                            t.ticksAsNumbers = t.ticks.slice(), t.zeroLineIndex = t.ticks.indexOf(0), en.prototype.convertTicksToLabels.call(t)
                        },
                        _configure: function() {
                            var t, e = this,
                                n = e.getTicks(),
                                r = e.min,
                                o = e.max;
                            en.prototype._configure.call(e), e.options.offset && n.length && (r -= t = (o - r) / Math.max(n.length - 1, 1) / 2, o += t), e._startValue = r, e._endValue = o, e._valueRange = o - r
                        }
                    }),
                    sn = {
                        position: "left",
                        ticks: {
                            callback: He.formatters.linear
                        }
                    };

                function ln(t, e, n, r) {
                    var o, i, a = t.options,
                        s = function(t, e, n) {
                            var r = [n.type, void 0 === e && void 0 === n.stack ? n.index : "", n.stack].join(".");
                            return void 0 === t[r] && (t[r] = {
                                pos: [],
                                neg: []
                            }), t[r]
                        }(e, a.stacked, n),
                        l = s.pos,
                        u = s.neg,
                        c = r.length;
                    for (o = 0; o < c; ++o) i = t._parseValue(r[o]), isNaN(i.min) || isNaN(i.max) || n.data[o].hidden || (l[o] = l[o] || 0, u[o] = u[o] || 0, a.relativePoints ? l[o] = 100 : i.min < 0 || i.max < 0 ? u[o] += i.min : l[o] += i.max)
                }

                function un(t, e, n) {
                    var r, o, i = n.length;
                    for (r = 0; r < i; ++r) o = t._parseValue(n[r]), isNaN(o.min) || isNaN(o.max) || e.data[r].hidden || (t.min = Math.min(t.min, o.min), t.max = Math.max(t.max, o.max))
                }
                var cn = an.extend({
                    determineDataLimits: function() {
                        var t, e, n, r, o = this,
                            i = o.options,
                            a = o.chart.data.datasets,
                            s = o._getMatchingVisibleMetas(),
                            l = i.stacked,
                            u = {},
                            c = s.length;
                        if (o.min = Number.POSITIVE_INFINITY, o.max = Number.NEGATIVE_INFINITY, void 0 === l)
                            for (t = 0; !l && t < c; ++t) l = void 0 !== (e = s[t]).stack;
                        for (t = 0; t < c; ++t) n = a[(e = s[t]).index].data, l ? ln(o, u, e, n) : un(o, e, n);
                        V.each(u, (function(t) {
                            r = t.pos.concat(t.neg), o.min = Math.min(o.min, V.min(r)), o.max = Math.max(o.max, V.max(r))
                        })), o.min = V.isFinite(o.min) && !isNaN(o.min) ? o.min : 0, o.max = V.isFinite(o.max) && !isNaN(o.max) ? o.max : 1, o.handleTickRangeOptions()
                    },
                    _computeTickLimit: function() {
                        var t;
                        return this.isHorizontal() ? Math.ceil(this.width / 40) : (t = V.options._parseFont(this.options.ticks), Math.ceil(this.height / t.lineHeight))
                    },
                    handleDirectionalChanges: function() {
                        this.isHorizontal() || this.ticks.reverse()
                    },
                    getLabelForIndex: function(t, e) {
                        return this._getScaleLabel(this.chart.data.datasets[e].data[t])
                    },
                    getPixelForValue: function(t) {
                        return this.getPixelForDecimal((+this.getRightValue(t) - this._startValue) / this._valueRange)
                    },
                    getValueForPixel: function(t) {
                        return this._startValue + this.getDecimalForPixel(t) * this._valueRange
                    },
                    getPixelForTick: function(t) {
                        var e = this.ticksAsNumbers;
                        return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t])
                    }
                });
                cn._defaults = sn;
                var dn = V.valueOrDefault,
                    hn = V.math.log10,
                    fn = {
                        position: "left",
                        ticks: {
                            callback: He.formatters.logarithmic
                        }
                    };

                function pn(t, e) {
                    return V.isFinite(t) && t >= 0 ? t : e
                }
                var gn = en.extend({
                    determineDataLimits: function() {
                        var t, e, n, r, o, i, a = this,
                            s = a.options,
                            l = a.chart,
                            u = l.data.datasets,
                            c = a.isHorizontal();

                        function d(t) {
                            return c ? t.xAxisID === a.id : t.yAxisID === a.id
                        }
                        a.min = Number.POSITIVE_INFINITY, a.max = Number.NEGATIVE_INFINITY, a.minNotZero = Number.POSITIVE_INFINITY;
                        var h = s.stacked;
                        if (void 0 === h)
                            for (t = 0; t < u.length; t++)
                                if (e = l.getDatasetMeta(t), l.isDatasetVisible(t) && d(e) && void 0 !== e.stack) {
                                    h = !0;
                                    break
                                } if (s.stacked || h) {
                            var f = {};
                            for (t = 0; t < u.length; t++) {
                                var p = [(e = l.getDatasetMeta(t)).type, void 0 === s.stacked && void 0 === e.stack ? t : "", e.stack].join(".");
                                if (l.isDatasetVisible(t) && d(e))
                                    for (void 0 === f[p] && (f[p] = []), o = 0, i = (r = u[t].data).length; o < i; o++) {
                                        var g = f[p];
                                        n = a._parseValue(r[o]), isNaN(n.min) || isNaN(n.max) || e.data[o].hidden || n.min < 0 || n.max < 0 || (g[o] = g[o] || 0, g[o] += n.max)
                                    }
                            }
                            V.each(f, (function(t) {
                                if (t.length > 0) {
                                    var e = V.min(t),
                                        n = V.max(t);
                                    a.min = Math.min(a.min, e), a.max = Math.max(a.max, n)
                                }
                            }))
                        } else
                            for (t = 0; t < u.length; t++)
                                if (e = l.getDatasetMeta(t), l.isDatasetVisible(t) && d(e))
                                    for (o = 0, i = (r = u[t].data).length; o < i; o++) n = a._parseValue(r[o]), isNaN(n.min) || isNaN(n.max) || e.data[o].hidden || n.min < 0 || n.max < 0 || (a.min = Math.min(n.min, a.min), a.max = Math.max(n.max, a.max), 0 !== n.min && (a.minNotZero = Math.min(n.min, a.minNotZero)));
                        a.min = V.isFinite(a.min) ? a.min : null, a.max = V.isFinite(a.max) ? a.max : null, a.minNotZero = V.isFinite(a.minNotZero) ? a.minNotZero : null, this.handleTickRangeOptions()
                    },
                    handleTickRangeOptions: function() {
                        var t = this,
                            e = t.options.ticks;
                        t.min = pn(e.min, t.min), t.max = pn(e.max, t.max), t.min === t.max && (0 !== t.min && null !== t.min ? (t.min = Math.pow(10, Math.floor(hn(t.min)) - 1), t.max = Math.pow(10, Math.floor(hn(t.max)) + 1)) : (t.min = 1, t.max = 10)), null === t.min && (t.min = Math.pow(10, Math.floor(hn(t.max)) - 1)), null === t.max && (t.max = 0 !== t.min ? Math.pow(10, Math.floor(hn(t.min)) + 1) : 10), null === t.minNotZero && (t.minNotZero = t.min > 0 ? t.min : t.max < 1 ? Math.pow(10, Math.floor(hn(t.max))) : 1)
                    },
                    buildTicks: function() {
                        var t = this,
                            e = t.options.ticks,
                            n = !t.isHorizontal(),
                            r = {
                                min: pn(e.min),
                                max: pn(e.max)
                            },
                            o = t.ticks = function(t, e) {
                                var n, r, o = [],
                                    i = dn(t.min, Math.pow(10, Math.floor(hn(e.min)))),
                                    a = Math.floor(hn(e.max)),
                                    s = Math.ceil(e.max / Math.pow(10, a));
                                0 === i ? (n = Math.floor(hn(e.minNotZero)), r = Math.floor(e.minNotZero / Math.pow(10, n)), o.push(i), i = r * Math.pow(10, n)) : (n = Math.floor(hn(i)), r = Math.floor(i / Math.pow(10, n)));
                                var l = n < 0 ? Math.pow(10, Math.abs(n)) : 1;
                                do {
                                    o.push(i), 10 == ++r && (r = 1, l = ++n >= 0 ? 1 : l), i = Math.round(r * Math.pow(10, n) * l) / l
                                } while (n < a || n === a && r < s);
                                var u = dn(t.max, i);
                                return o.push(u), o
                            }(r, t);
                        t.max = V.max(o), t.min = V.min(o), e.reverse ? (n = !n, t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max), n && o.reverse()
                    },
                    convertTicksToLabels: function() {
                        this.tickValues = this.ticks.slice(), en.prototype.convertTicksToLabels.call(this)
                    },
                    getLabelForIndex: function(t, e) {
                        return this._getScaleLabel(this.chart.data.datasets[e].data[t])
                    },
                    getPixelForTick: function(t) {
                        var e = this.tickValues;
                        return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t])
                    },
                    _getFirstTickValue: function(t) {
                        var e = Math.floor(hn(t));
                        return Math.floor(t / Math.pow(10, e)) * Math.pow(10, e)
                    },
                    _configure: function() {
                        var t = this,
                            e = t.min,
                            n = 0;
                        en.prototype._configure.call(t), 0 === e && (e = t._getFirstTickValue(t.minNotZero), n = dn(t.options.ticks.fontSize, T.global.defaultFontSize) / t._length), t._startValue = hn(e), t._valueOffset = n, t._valueRange = (hn(t.max) - hn(e)) / (1 - n)
                    },
                    getPixelForValue: function(t) {
                        var e = this,
                            n = 0;
                        return (t = +e.getRightValue(t)) > e.min && t > 0 && (n = (hn(t) - e._startValue) / e._valueRange + e._valueOffset), e.getPixelForDecimal(n)
                    },
                    getValueForPixel: function(t) {
                        var e = this,
                            n = e.getDecimalForPixel(t);
                        return 0 === n && 0 === e.min ? 0 : Math.pow(10, e._startValue + (n - e._valueOffset) * e._valueRange)
                    }
                });
                gn._defaults = fn;
                var vn = V.valueOrDefault,
                    yn = V.valueAtIndexOrDefault,
                    bn = V.options.resolve,
                    mn = {
                        display: !0,
                        animate: !0,
                        position: "chartArea",
                        angleLines: {
                            display: !0,
                            color: "rgba(0,0,0,0.1)",
                            lineWidth: 1,
                            borderDash: [],
                            borderDashOffset: 0
                        },
                        gridLines: {
                            circular: !1
                        },
                        ticks: {
                            showLabelBackdrop: !0,
                            backdropColor: "rgba(255,255,255,0.75)",
                            backdropPaddingY: 2,
                            backdropPaddingX: 2,
                            callback: He.formatters.linear
                        },
                        pointLabels: {
                            display: !0,
                            fontSize: 10,
                            callback: function(t) {
                                return t
                            }
                        }
                    };

                function xn(t) {
                    var e = t.ticks;
                    return e.display && t.display ? vn(e.fontSize, T.global.defaultFontSize) + 2 * e.backdropPaddingY : 0
                }

                function wn(t, e, n, r, o) {
                    return t === r || t === o ? {
                        start: e - n / 2,
                        end: e + n / 2
                    } : t < r || t > o ? {
                        start: e - n,
                        end: e
                    } : {
                        start: e,
                        end: e + n
                    }
                }

                function _n(t) {
                    return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right"
                }

                function On(t, e, n, r) {
                    var o, i, a = n.y + r / 2;
                    if (V.isArray(e))
                        for (o = 0, i = e.length; o < i; ++o) t.fillText(e[o], n.x, a), a += r;
                    else t.fillText(e, n.x, a)
                }

                function kn(t, e, n) {
                    90 === t || 270 === t ? n.y -= e.h / 2 : (t > 270 || t < 90) && (n.y -= e.h)
                }

                function Sn(t) {
                    return V.isNumber(t) ? t : 0
                }
                var Cn = an.extend({
                    setDimensions: function() {
                        var t = this;
                        t.width = t.maxWidth, t.height = t.maxHeight, t.paddingTop = xn(t.options) / 2, t.xCenter = Math.floor(t.width / 2), t.yCenter = Math.floor((t.height - t.paddingTop) / 2), t.drawingArea = Math.min(t.height - t.paddingTop, t.width) / 2
                    },
                    determineDataLimits: function() {
                        var t = this,
                            e = t.chart,
                            n = Number.POSITIVE_INFINITY,
                            r = Number.NEGATIVE_INFINITY;
                        V.each(e.data.datasets, (function(o, i) {
                            if (e.isDatasetVisible(i)) {
                                var a = e.getDatasetMeta(i);
                                V.each(o.data, (function(e, o) {
                                    var i = +t.getRightValue(e);
                                    isNaN(i) || a.data[o].hidden || (n = Math.min(i, n), r = Math.max(i, r))
                                }))
                            }
                        })), t.min = n === Number.POSITIVE_INFINITY ? 0 : n, t.max = r === Number.NEGATIVE_INFINITY ? 0 : r, t.handleTickRangeOptions()
                    },
                    _computeTickLimit: function() {
                        return Math.ceil(this.drawingArea / xn(this.options))
                    },
                    convertTicksToLabels: function() {
                        var t = this;
                        an.prototype.convertTicksToLabels.call(t), t.pointLabels = t.chart.data.labels.map((function() {
                            var e = V.callback(t.options.pointLabels.callback, arguments, t);
                            return e || 0 === e ? e : ""
                        }))
                    },
                    getLabelForIndex: function(t, e) {
                        return +this.getRightValue(this.chart.data.datasets[e].data[t])
                    },
                    fit: function() {
                        var t = this.options;
                        t.display && t.pointLabels.display ? function(t) {
                            var e, n, r, o = V.options._parseFont(t.options.pointLabels),
                                i = {
                                    l: 0,
                                    r: t.width,
                                    t: 0,
                                    b: t.height - t.paddingTop
                                },
                                a = {};
                            t.ctx.font = o.string, t._pointLabelSizes = [];
                            var s, l, u, c = t.chart.data.labels.length;
                            for (e = 0; e < c; e++) {
                                r = t.getPointPosition(e, t.drawingArea + 5), s = t.ctx, l = o.lineHeight, n = V.isArray(u = t.pointLabels[e]) ? {
                                    w: V.longestText(s, s.font, u),
                                    h: u.length * l
                                } : {
                                    w: s.measureText(u).width,
                                    h: l
                                }, t._pointLabelSizes[e] = n;
                                var d = t.getIndexAngle(e),
                                    h = V.toDegrees(d) % 360,
                                    f = wn(h, r.x, n.w, 0, 180),
                                    p = wn(h, r.y, n.h, 90, 270);
                                f.start < i.l && (i.l = f.start, a.l = d), f.end > i.r && (i.r = f.end, a.r = d), p.start < i.t && (i.t = p.start, a.t = d), p.end > i.b && (i.b = p.end, a.b = d)
                            }
                            t.setReductions(t.drawingArea, i, a)
                        }(this) : this.setCenterPoint(0, 0, 0, 0)
                    },
                    setReductions: function(t, e, n) {
                        var r = this,
                            o = e.l / Math.sin(n.l),
                            i = Math.max(e.r - r.width, 0) / Math.sin(n.r),
                            a = -e.t / Math.cos(n.t),
                            s = -Math.max(e.b - (r.height - r.paddingTop), 0) / Math.cos(n.b);
                        o = Sn(o), i = Sn(i), a = Sn(a), s = Sn(s), r.drawingArea = Math.min(Math.floor(t - (o + i) / 2), Math.floor(t - (a + s) / 2)), r.setCenterPoint(o, i, a, s)
                    },
                    setCenterPoint: function(t, e, n, r) {
                        var o = this,
                            i = n + o.drawingArea,
                            a = o.height - o.paddingTop - r - o.drawingArea;
                        o.xCenter = Math.floor((t + o.drawingArea + (o.width - e - o.drawingArea)) / 2 + o.left), o.yCenter = Math.floor((i + a) / 2 + o.top + o.paddingTop)
                    },
                    getIndexAngle: function(t) {
                        var e = this.chart,
                            n = (t * (360 / e.data.labels.length) + ((e.options || {}).startAngle || 0)) % 360;
                        return (n < 0 ? n + 360 : n) * Math.PI * 2 / 360
                    },
                    getDistanceFromCenterForValue: function(t) {
                        var e = this;
                        if (V.isNullOrUndef(t)) return NaN;
                        var n = e.drawingArea / (e.max - e.min);
                        return e.options.ticks.reverse ? (e.max - t) * n : (t - e.min) * n
                    },
                    getPointPosition: function(t, e) {
                        var n = this.getIndexAngle(t) - Math.PI / 2;
                        return {
                            x: Math.cos(n) * e + this.xCenter,
                            y: Math.sin(n) * e + this.yCenter
                        }
                    },
                    getPointPositionForValue: function(t, e) {
                        return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
                    },
                    getBasePosition: function(t) {
                        var e = this.min,
                            n = this.max;
                        return this.getPointPositionForValue(t || 0, this.beginAtZero ? 0 : e < 0 && n < 0 ? n : e > 0 && n > 0 ? e : 0)
                    },
                    _drawGrid: function() {
                        var t, e, n, r = this,
                            o = r.ctx,
                            i = r.options,
                            a = i.gridLines,
                            s = i.angleLines,
                            l = vn(s.lineWidth, a.lineWidth),
                            u = vn(s.color, a.color);
                        if (i.pointLabels.display && function(t) {
                                var e = t.ctx,
                                    n = t.options,
                                    r = n.pointLabels,
                                    o = xn(n),
                                    i = t.getDistanceFromCenterForValue(n.ticks.reverse ? t.min : t.max),
                                    a = V.options._parseFont(r);
                                e.save(), e.font = a.string, e.textBaseline = "middle";
                                for (var s = t.chart.data.labels.length - 1; s >= 0; s--) {
                                    var l = t.getPointPosition(s, i + (0 === s ? o / 2 : 0) + 5),
                                        u = yn(r.fontColor, s, T.global.defaultFontColor);
                                    e.fillStyle = u;
                                    var c = t.getIndexAngle(s),
                                        d = V.toDegrees(c);
                                    e.textAlign = _n(d), kn(d, t._pointLabelSizes[s], l), On(e, t.pointLabels[s], l, a.lineHeight)
                                }
                                e.restore()
                            }(r), a.display && V.each(r.ticks, (function(t, n) {
                                0 !== n && (e = r.getDistanceFromCenterForValue(r.ticksAsNumbers[n]), function(t, e, n, r) {
                                    var o, i = t.ctx,
                                        a = e.circular,
                                        s = t.chart.data.labels.length,
                                        l = yn(e.color, r - 1),
                                        u = yn(e.lineWidth, r - 1);
                                    if ((a || s) && l && u) {
                                        if (i.save(), i.strokeStyle = l, i.lineWidth = u, i.setLineDash && (i.setLineDash(e.borderDash || []), i.lineDashOffset = e.borderDashOffset || 0), i.beginPath(), a) i.arc(t.xCenter, t.yCenter, n, 0, 2 * Math.PI);
                                        else {
                                            o = t.getPointPosition(0, n), i.moveTo(o.x, o.y);
                                            for (var c = 1; c < s; c++) o = t.getPointPosition(c, n), i.lineTo(o.x, o.y)
                                        }
                                        i.closePath(), i.stroke(), i.restore()
                                    }
                                }(r, a, e, n))
                            })), s.display && l && u) {
                            for (o.save(), o.lineWidth = l, o.strokeStyle = u, o.setLineDash && (o.setLineDash(bn([s.borderDash, a.borderDash, []])), o.lineDashOffset = bn([s.borderDashOffset, a.borderDashOffset, 0])), t = r.chart.data.labels.length - 1; t >= 0; t--) e = r.getDistanceFromCenterForValue(i.ticks.reverse ? r.min : r.max), n = r.getPointPosition(t, e), o.beginPath(), o.moveTo(r.xCenter, r.yCenter), o.lineTo(n.x, n.y), o.stroke();
                            o.restore()
                        }
                    },
                    _drawLabels: function() {
                        var t = this,
                            e = t.ctx,
                            n = t.options.ticks;
                        if (n.display) {
                            var r, o, i = t.getIndexAngle(0),
                                a = V.options._parseFont(n),
                                s = vn(n.fontColor, T.global.defaultFontColor);
                            e.save(), e.font = a.string, e.translate(t.xCenter, t.yCenter), e.rotate(i), e.textAlign = "center", e.textBaseline = "middle", V.each(t.ticks, (function(i, l) {
                                (0 !== l || n.reverse) && (r = t.getDistanceFromCenterForValue(t.ticksAsNumbers[l]), n.showLabelBackdrop && (o = e.measureText(i).width, e.fillStyle = n.backdropColor, e.fillRect(-o / 2 - n.backdropPaddingX, -r - a.size / 2 - n.backdropPaddingY, o + 2 * n.backdropPaddingX, a.size + 2 * n.backdropPaddingY)), e.fillStyle = s, e.fillText(i, 0, -r))
                            })), e.restore()
                        }
                    },
                    _drawTitle: V.noop
                });
                Cn._defaults = mn;
                var An = V._deprecated,
                    Mn = V.options.resolve,
                    jn = V.valueOrDefault,
                    Dn = Number.MIN_SAFE_INTEGER || -9007199254740991,
                    Pn = Number.MAX_SAFE_INTEGER || 9007199254740991,
                    En = {
                        millisecond: {
                            common: !0,
                            size: 1,
                            steps: 1e3
                        },
                        second: {
                            common: !0,
                            size: 1e3,
                            steps: 60
                        },
                        minute: {
                            common: !0,
                            size: 6e4,
                            steps: 60
                        },
                        hour: {
                            common: !0,
                            size: 36e5,
                            steps: 24
                        },
                        day: {
                            common: !0,
                            size: 864e5,
                            steps: 30
                        },
                        week: {
                            common: !1,
                            size: 6048e5,
                            steps: 4
                        },
                        month: {
                            common: !0,
                            size: 2628e6,
                            steps: 12
                        },
                        quarter: {
                            common: !1,
                            size: 7884e6,
                            steps: 4
                        },
                        year: {
                            common: !0,
                            size: 3154e7
                        }
                    },
                    Nn = Object.keys(En);

                function In(t, e) {
                    return t - e
                }

                function Tn(t) {
                    return V.valueOrDefault(t.time.min, t.ticks.min)
                }

                function Rn(t) {
                    return V.valueOrDefault(t.time.max, t.ticks.max)
                }

                function Fn(t, e, n, r) {
                    var o = function(t, e, n) {
                            for (var r, o, i, a = 0, s = t.length - 1; a >= 0 && a <= s;) {
                                if (i = t[r = a + s >> 1], !(o = t[r - 1] || null)) return {
                                    lo: null,
                                    hi: i
                                };
                                if (i[e] < n) a = r + 1;
                                else {
                                    if (!(o[e] > n)) return {
                                        lo: o,
                                        hi: i
                                    };
                                    s = r - 1
                                }
                            }
                            return {
                                lo: i,
                                hi: null
                            }
                        }(t, e, n),
                        i = o.lo ? o.hi ? o.lo : t[t.length - 2] : t[0],
                        a = o.lo ? o.hi ? o.hi : t[t.length - 1] : t[1],
                        s = a[e] - i[e];
                    return i[r] + (a[r] - i[r]) * (s ? (n - i[e]) / s : 0)
                }

                function Ln(t, e) {
                    var n = t._adapter,
                        r = t.options.time,
                        o = r.parser,
                        i = o || r.format,
                        a = e;
                    return "function" == typeof o && (a = o(a)), V.isFinite(a) || (a = "string" == typeof i ? n.parse(a, i) : n.parse(a)), null !== a ? +a : (o || "function" != typeof i || (a = i(e), V.isFinite(a) || (a = n.parse(a))), a)
                }

                function Bn(t, e) {
                    if (V.isNullOrUndef(e)) return null;
                    var n = t.options.time,
                        r = Ln(t, t.getRightValue(e));
                    return null === r ? r : (n.round && (r = +t._adapter.startOf(r, n.round)), r)
                }

                function Vn(t, e, n, r) {
                    var o, i, a = Nn.length;
                    for (o = Nn.indexOf(t); o < a - 1; ++o)
                        if ((i = En[Nn[o]]).common && Math.ceil((n - e) / ((i.steps ? i.steps : Pn) * i.size)) <= r) return Nn[o];
                    return Nn[a - 1]
                }

                function zn(t, e, n) {
                    var r, o, i = [],
                        a = {},
                        s = e.length;
                    for (r = 0; r < s; ++r) a[o = e[r]] = r, i.push({
                        value: o,
                        major: !1
                    });
                    return 0 !== s && n ? function(t, e, n, r) {
                        var o, i, a = t._adapter,
                            s = +a.startOf(e[0].value, r),
                            l = e[e.length - 1].value;
                        for (o = s; o <= l; o = +a.add(o, 1, r))(i = n[o]) >= 0 && (e[i].major = !0);
                        return e
                    }(t, i, a, n) : i
                }
                var Hn = en.extend({
                    initialize: function() {
                        this.mergeTicksOptions(), en.prototype.initialize.call(this)
                    },
                    update: function() {
                        var t = this,
                            e = t.options,
                            n = e.time || (e.time = {}),
                            r = t._adapter = new ze._date(e.adapters.date);
                        return An("time scale", n.format, "time.format", "time.parser"), An("time scale", n.min, "time.min", "ticks.min"), An("time scale", n.max, "time.max", "ticks.max"), V.mergeIf(n.displayFormats, r.formats()), en.prototype.update.apply(t, arguments)
                    },
                    getRightValue: function(t) {
                        return t && void 0 !== t.t && (t = t.t), en.prototype.getRightValue.call(this, t)
                    },
                    determineDataLimits: function() {
                        var t, e, n, r, o, i, a, s = this,
                            l = s.chart,
                            u = s._adapter,
                            c = s.options,
                            d = c.time.unit || "day",
                            h = Pn,
                            f = Dn,
                            p = [],
                            g = [],
                            v = [],
                            y = s._getLabels();
                        for (t = 0, n = y.length; t < n; ++t) v.push(Bn(s, y[t]));
                        for (t = 0, n = (l.data.datasets || []).length; t < n; ++t)
                            if (l.isDatasetVisible(t))
                                if (V.isObject((o = l.data.datasets[t].data)[0]))
                                    for (g[t] = [], e = 0, r = o.length; e < r; ++e) i = Bn(s, o[e]), p.push(i), g[t][e] = i;
                                else g[t] = v.slice(0), a || (p = p.concat(v), a = !0);
                        else g[t] = [];
                        v.length && (h = Math.min(h, v[0]), f = Math.max(f, v[v.length - 1])), p.length && (p = n > 1 ? function(t) {
                            var e, n, r, o = {},
                                i = [];
                            for (e = 0, n = t.length; e < n; ++e) o[r = t[e]] || (o[r] = !0, i.push(r));
                            return i
                        }(p).sort(In) : p.sort(In), h = Math.min(h, p[0]), f = Math.max(f, p[p.length - 1])), h = Bn(s, Tn(c)) || h, f = Bn(s, Rn(c)) || f, h = h === Pn ? +u.startOf(Date.now(), d) : h, f = f === Dn ? +u.endOf(Date.now(), d) + 1 : f, s.min = Math.min(h, f), s.max = Math.max(h + 1, f), s._table = [], s._timestamps = {
                            data: p,
                            datasets: g,
                            labels: v
                        }
                    },
                    buildTicks: function() {
                        var t, e, n, r = this,
                            o = r.min,
                            i = r.max,
                            a = r.options,
                            s = a.ticks,
                            l = a.time,
                            u = r._timestamps,
                            c = [],
                            d = r.getLabelCapacity(o),
                            h = s.source,
                            f = a.distribution;
                        for (u = "data" === h || "auto" === h && "series" === f ? u.data : "labels" === h ? u.labels : function(t, e, n, r) {
                                var o, i = t._adapter,
                                    a = t.options,
                                    s = a.time,
                                    l = s.unit || Vn(s.minUnit, e, n, r),
                                    u = Mn([s.stepSize, s.unitStepSize, 1]),
                                    c = "week" === l && s.isoWeekday,
                                    d = e,
                                    h = [];
                                if (c && (d = +i.startOf(d, "isoWeek", c)), d = +i.startOf(d, c ? "day" : l), i.diff(n, e, l) > 1e5 * u) throw e + " and " + n + " are too far apart with stepSize of " + u + " " + l;
                                for (o = d; o < n; o = +i.add(o, u, l)) h.push(o);
                                return o !== n && "ticks" !== a.bounds || h.push(o), h
                            }(r, o, i, d), "ticks" === a.bounds && u.length && (o = u[0], i = u[u.length - 1]), o = Bn(r, Tn(a)) || o, i = Bn(r, Rn(a)) || i, t = 0, e = u.length; t < e; ++t)(n = u[t]) >= o && n <= i && c.push(n);
                        return r.min = o, r.max = i, r._unit = l.unit || (s.autoSkip ? Vn(l.minUnit, r.min, r.max, d) : function(t, e, n, r, o) {
                            var i, a;
                            for (i = Nn.length - 1; i >= Nn.indexOf(n); i--)
                                if (En[a = Nn[i]].common && t._adapter.diff(o, r, a) >= e - 1) return a;
                            return Nn[n ? Nn.indexOf(n) : 0]
                        }(r, c.length, l.minUnit, r.min, r.max)), r._majorUnit = s.major.enabled && "year" !== r._unit ? function(t) {
                            for (var e = Nn.indexOf(t) + 1, n = Nn.length; e < n; ++e)
                                if (En[Nn[e]].common) return Nn[e]
                        }(r._unit) : void 0, r._table = function(t, e, n, r) {
                            if ("linear" === r || !t.length) return [{
                                time: e,
                                pos: 0
                            }, {
                                time: n,
                                pos: 1
                            }];
                            var o, i, a, s, l, u = [],
                                c = [e];
                            for (o = 0, i = t.length; o < i; ++o)(s = t[o]) > e && s < n && c.push(s);
                            for (c.push(n), o = 0, i = c.length; o < i; ++o) l = c[o + 1], s = c[o], void 0 !== (a = c[o - 1]) && void 0 !== l && Math.round((l + a) / 2) === s || u.push({
                                time: s,
                                pos: o / (i - 1)
                            });
                            return u
                        }(r._timestamps.data, o, i, f), r._offsets = function(t, e, n, r, o) {
                            var i, a, s = 0,
                                l = 0;
                            return o.offset && e.length && (i = Fn(t, "time", e[0], "pos"), s = 1 === e.length ? 1 - i : (Fn(t, "time", e[1], "pos") - i) / 2, a = Fn(t, "time", e[e.length - 1], "pos"), l = 1 === e.length ? a : (a - Fn(t, "time", e[e.length - 2], "pos")) / 2), {
                                start: s,
                                end: l,
                                factor: 1 / (s + 1 + l)
                            }
                        }(r._table, c, 0, 0, a), s.reverse && c.reverse(), zn(r, c, r._majorUnit)
                    },
                    getLabelForIndex: function(t, e) {
                        var n = this,
                            r = n._adapter,
                            o = n.chart.data,
                            i = n.options.time,
                            a = o.labels && t < o.labels.length ? o.labels[t] : "",
                            s = o.datasets[e].data[t];
                        return V.isObject(s) && (a = n.getRightValue(s)), i.tooltipFormat ? r.format(Ln(n, a), i.tooltipFormat) : "string" == typeof a ? a : r.format(Ln(n, a), i.displayFormats.datetime)
                    },
                    tickFormatFunction: function(t, e, n, r) {
                        var o = this.options,
                            i = o.time.displayFormats,
                            a = this._majorUnit,
                            s = i[a],
                            l = n[e],
                            u = o.ticks,
                            c = a && s && l && l.major,
                            d = this._adapter.format(t, r || (c ? s : i[this._unit])),
                            h = c ? u.major : u.minor,
                            f = Mn([h.callback, h.userCallback, u.callback, u.userCallback]);
                        return f ? f(d, e, n) : d
                    },
                    convertTicksToLabels: function(t) {
                        var e, n, r = [];
                        for (e = 0, n = t.length; e < n; ++e) r.push(this.tickFormatFunction(t[e].value, e, t));
                        return r
                    },
                    getPixelForOffset: function(t) {
                        var e = this._offsets,
                            n = Fn(this._table, "time", t, "pos");
                        return this.getPixelForDecimal((e.start + n) * e.factor)
                    },
                    getPixelForValue: function(t, e, n) {
                        var r = null;
                        if (void 0 !== e && void 0 !== n && (r = this._timestamps.datasets[n][e]), null === r && (r = Bn(this, t)), null !== r) return this.getPixelForOffset(r)
                    },
                    getPixelForTick: function(t) {
                        var e = this.getTicks();
                        return t >= 0 && t < e.length ? this.getPixelForOffset(e[t].value) : null
                    },
                    getValueForPixel: function(t) {
                        var e = this._offsets,
                            n = this.getDecimalForPixel(t) / e.factor - e.end,
                            r = Fn(this._table, "pos", n, "time");
                        return this._adapter._create(r)
                    },
                    _getLabelSize: function(t) {
                        var e = this.options.ticks,
                            n = this.ctx.measureText(t).width,
                            r = V.toRadians(this.isHorizontal() ? e.maxRotation : e.minRotation),
                            o = Math.cos(r),
                            i = Math.sin(r),
                            a = jn(e.fontSize, T.global.defaultFontSize);
                        return {
                            w: n * o + a * i,
                            h: n * i + a * o
                        }
                    },
                    getLabelWidth: function(t) {
                        return this._getLabelSize(t).w
                    },
                    getLabelCapacity: function(t) {
                        var e = this,
                            n = e.options.time,
                            r = n.displayFormats,
                            o = r[n.unit] || r.millisecond,
                            i = e.tickFormatFunction(t, 0, zn(e, [t], e._majorUnit), o),
                            a = e._getLabelSize(i),
                            s = Math.floor(e.isHorizontal() ? e.width / a.w : e.height / a.h);
                        return e.options.offset && s--, s > 0 ? s : 1
                    }
                });
                Hn._defaults = {
                    position: "bottom",
                    distribution: "linear",
                    bounds: "data",
                    adapters: {},
                    time: {
                        parser: !1,
                        unit: !1,
                        round: !1,
                        displayFormat: !1,
                        isoWeekday: !1,
                        minUnit: "millisecond",
                        displayFormats: {}
                    },
                    ticks: {
                        autoSkip: !1,
                        source: "auto",
                        major: {
                            enabled: !1
                        }
                    }
                };
                var Wn = {
                        category: rn,
                        linear: cn,
                        logarithmic: gn,
                        radialLinear: Cn,
                        time: Hn
                    },
                    Un = {
                        datetime: "MMM D, YYYY, h:mm:ss a",
                        millisecond: "h:mm:ss.SSS a",
                        second: "h:mm:ss a",
                        minute: "h:mm a",
                        hour: "hA",
                        day: "MMM D",
                        week: "ll",
                        month: "MMM YYYY",
                        quarter: "[Q]Q - YYYY",
                        year: "YYYY"
                    };
                ze._date.override("function" == typeof t ? {
                    _id: "moment",
                    formats: function() {
                        return Un
                    },
                    parse: function(e, n) {
                        return "string" == typeof e && "string" == typeof n ? e = t(e, n) : e instanceof t || (e = t(e)), e.isValid() ? e.valueOf() : null
                    },
                    format: function(e, n) {
                        return t(e).format(n)
                    },
                    add: function(e, n, r) {
                        return t(e).add(n, r).valueOf()
                    },
                    diff: function(e, n, r) {
                        return t(e).diff(t(n), r)
                    },
                    startOf: function(e, n, r) {
                        return e = t(e), "isoWeek" === n ? e.isoWeekday(r).valueOf() : e.startOf(n).valueOf()
                    },
                    endOf: function(e, n) {
                        return t(e).endOf(n).valueOf()
                    },
                    _create: function(e) {
                        return t(e)
                    }
                } : {}), T._set("global", {
                    plugins: {
                        filler: {
                            propagate: !0
                        }
                    }
                });
                var Gn = {
                    dataset: function(t) {
                        var e = t.fill,
                            n = t.chart,
                            r = n.getDatasetMeta(e),
                            o = r && n.isDatasetVisible(e) && r.dataset._children || [],
                            i = o.length || 0;
                        return i ? function(t, e) {
                            return e < i && o[e]._view || null
                        } : null
                    },
                    boundary: function(t) {
                        var e = t.boundary,
                            n = e ? e.x : null,
                            r = e ? e.y : null;
                        return V.isArray(e) ? function(t, n) {
                            return e[n]
                        } : function(t) {
                            return {
                                x: null === n ? t.x : n,
                                y: null === r ? t.y : r
                            }
                        }
                    }
                };

                function qn(t, e, n) {
                    var r, o = t._model || {},
                        i = o.fill;
                    if (void 0 === i && (i = !!o.backgroundColor), !1 === i || null === i) return !1;
                    if (!0 === i) return "origin";
                    if (r = parseFloat(i, 10), isFinite(r) && Math.floor(r) === r) return "-" !== i[0] && "+" !== i[0] || (r = e + r), !(r === e || r < 0 || r >= n) && r;
                    switch (i) {
                        case "bottom":
                            return "start";
                        case "top":
                            return "end";
                        case "zero":
                            return "origin";
                        case "origin":
                        case "start":
                        case "end":
                            return i;
                        default:
                            return !1
                    }
                }

                function Kn(t) {
                    return (t.el._scale || {}).getPointPositionForValue ? function(t) {
                        var e, n, r, o, i, a = t.el._scale,
                            s = a.options,
                            l = a.chart.data.labels.length,
                            u = t.fill,
                            c = [];
                        if (!l) return null;
                        for (n = s.ticks.reverse ? a.min : a.max, r = a.getPointPositionForValue(0, e = s.ticks.reverse ? a.max : a.min), o = 0; o < l; ++o) i = "start" === u || "end" === u ? a.getPointPositionForValue(o, "start" === u ? e : n) : a.getBasePosition(o), s.gridLines.circular && (i.cx = r.x, i.cy = r.y, i.angle = a.getIndexAngle(o) - Math.PI / 2), c.push(i);
                        return c
                    }(t) : function(t) {
                        var e, n = t.el._model || {},
                            r = t.el._scale || {},
                            o = t.fill,
                            i = null;
                        if (isFinite(o)) return null;
                        if ("start" === o ? i = void 0 === n.scaleBottom ? r.bottom : n.scaleBottom : "end" === o ? i = void 0 === n.scaleTop ? r.top : n.scaleTop : void 0 !== n.scaleZero ? i = n.scaleZero : r.getBasePixel && (i = r.getBasePixel()), null != i) {
                            if (void 0 !== i.x && void 0 !== i.y) return i;
                            if (V.isFinite(i)) return {
                                x: (e = r.isHorizontal()) ? i : null,
                                y: e ? null : i
                            }
                        }
                        return null
                    }(t)
                }

                function Yn(t, e, n) {
                    var r, o = t[e].fill,
                        i = [e];
                    if (!n) return o;
                    for (; !1 !== o && -1 === i.indexOf(o);) {
                        if (!isFinite(o)) return o;
                        if (!(r = t[o])) return !1;
                        if (r.visible) return o;
                        i.push(o), o = r.fill
                    }
                    return !1
                }

                function Zn(t) {
                    var e = t.fill,
                        n = "dataset";
                    return !1 === e ? null : (isFinite(e) || (n = "boundary"), Gn[n](t))
                }

                function Xn(t) {
                    return t && !t.skip
                }

                function Jn(t, e, n, r, o) {
                    var i, a, s, l;
                    if (r && o) {
                        for (t.moveTo(e[0].x, e[0].y), i = 1; i < r; ++i) V.canvas.lineTo(t, e[i - 1], e[i]);
                        if (void 0 === n[0].angle)
                            for (t.lineTo(n[o - 1].x, n[o - 1].y), i = o - 1; i > 0; --i) V.canvas.lineTo(t, n[i], n[i - 1], !0);
                        else
                            for (a = n[0].cx, s = n[0].cy, l = Math.sqrt(Math.pow(n[0].x - a, 2) + Math.pow(n[0].y - s, 2)), i = o - 1; i > 0; --i) t.arc(a, s, l, n[i].angle, n[i - 1].angle, !0)
                    }
                }

                function $n(t, e, n, r, o, i) {
                    var a, s, l, u, c, d, h, f, p = e.length,
                        g = r.spanGaps,
                        v = [],
                        y = [],
                        b = 0,
                        m = 0;
                    for (t.beginPath(), a = 0, s = p; a < s; ++a) c = n(u = e[l = a % p]._view, l, r), d = Xn(u), h = Xn(c), i && void 0 === f && d && (s = p + (f = a + 1)), d && h ? (b = v.push(u), m = y.push(c)) : b && m && (g ? (d && v.push(u), h && y.push(c)) : (Jn(t, v, y, b, m), b = m = 0, v = [], y = []));
                    Jn(t, v, y, b, m), t.closePath(), t.fillStyle = o, t.fill()
                }
                var Qn = {
                        id: "filler",
                        afterDatasetsUpdate: function(t, e) {
                            var n, r, o, i, a = (t.data.datasets || []).length,
                                s = e.propagate,
                                l = [];
                            for (r = 0; r < a; ++r) i = null, (o = (n = t.getDatasetMeta(r)).dataset) && o._model && o instanceof vt.Line && (i = {
                                visible: t.isDatasetVisible(r),
                                fill: qn(o, r, a),
                                chart: t,
                                el: o
                            }), n.$filler = i, l.push(i);
                            for (r = 0; r < a; ++r)(i = l[r]) && (i.fill = Yn(l, r, s), i.boundary = Kn(i), i.mapper = Zn(i))
                        },
                        beforeDatasetsDraw: function(t) {
                            var e, n, r, o, i, a, s, l = t._getSortedVisibleDatasetMetas(),
                                u = t.ctx;
                            for (n = l.length - 1; n >= 0; --n)(e = l[n].$filler) && e.visible && (i = (r = e.el)._children || [], s = (o = r._view).backgroundColor || T.global.defaultColor, (a = e.mapper) && s && i.length && (V.canvas.clipArea(u, t.chartArea), $n(u, i, a, o, s, r._loop), V.canvas.unclipArea(u)))
                        }
                    },
                    tr = V.rtl.getRtlAdapter,
                    er = V.noop,
                    nr = V.valueOrDefault;

                function rr(t, e) {
                    return t.usePointStyle && t.boxWidth > e ? e : t.boxWidth
                }
                T._set("global", {
                    legend: {
                        display: !0,
                        position: "top",
                        align: "center",
                        fullWidth: !0,
                        reverse: !1,
                        weight: 1e3,
                        onClick: function(t, e) {
                            var n = e.datasetIndex,
                                r = this.chart,
                                o = r.getDatasetMeta(n);
                            o.hidden = null === o.hidden ? !r.data.datasets[n].hidden : null, r.update()
                        },
                        onHover: null,
                        onLeave: null,
                        labels: {
                            boxWidth: 40,
                            padding: 10,
                            generateLabels: function(t) {
                                var e = t.data.datasets,
                                    n = t.options.legend || {},
                                    r = n.labels && n.labels.usePointStyle;
                                return t._getSortedDatasetMetas().map((function(n) {
                                    var o = n.controller.getStyle(r ? 0 : void 0);
                                    return {
                                        text: e[n.index].label,
                                        fillStyle: o.backgroundColor,
                                        hidden: !t.isDatasetVisible(n.index),
                                        lineCap: o.borderCapStyle,
                                        lineDash: o.borderDash,
                                        lineDashOffset: o.borderDashOffset,
                                        lineJoin: o.borderJoinStyle,
                                        lineWidth: o.borderWidth,
                                        strokeStyle: o.borderColor,
                                        pointStyle: o.pointStyle,
                                        rotation: o.rotation,
                                        datasetIndex: n.index
                                    }
                                }), this)
                            }
                        }
                    },
                    legendCallback: function(t) {
                        var e, n, r, o = document.createElement("ul"),
                            i = t.data.datasets;
                        for (o.setAttribute("class", t.id + "-legend"), e = 0, n = i.length; e < n; e++)(r = o.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = i[e].backgroundColor, i[e].label && r.appendChild(document.createTextNode(i[e].label));
                        return o.outerHTML
                    }
                });
                var or = G.extend({
                    initialize: function(t) {
                        V.extend(this, t), this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1
                    },
                    beforeUpdate: er,
                    update: function(t, e, n) {
                        var r = this;
                        return r.beforeUpdate(), r.maxWidth = t, r.maxHeight = e, r.margins = n, r.beforeSetDimensions(), r.setDimensions(), r.afterSetDimensions(), r.beforeBuildLabels(), r.buildLabels(), r.afterBuildLabels(), r.beforeFit(), r.fit(), r.afterFit(), r.afterUpdate(), r.minSize
                    },
                    afterUpdate: er,
                    beforeSetDimensions: er,
                    setDimensions: function() {
                        var t = this;
                        t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                            width: 0,
                            height: 0
                        }
                    },
                    afterSetDimensions: er,
                    beforeBuildLabels: er,
                    buildLabels: function() {
                        var t = this,
                            e = t.options.labels || {},
                            n = V.callback(e.generateLabels, [t.chart], t) || [];
                        e.filter && (n = n.filter((function(n) {
                            return e.filter(n, t.chart.data)
                        }))), t.options.reverse && n.reverse(), t.legendItems = n
                    },
                    afterBuildLabels: er,
                    beforeFit: er,
                    fit: function() {
                        var t = this,
                            e = t.options,
                            n = e.labels,
                            r = e.display,
                            o = t.ctx,
                            i = V.options._parseFont(n),
                            a = i.size,
                            s = t.legendHitBoxes = [],
                            l = t.minSize,
                            u = t.isHorizontal();
                        if (u ? (l.width = t.maxWidth, l.height = r ? 10 : 0) : (l.width = r ? 10 : 0, l.height = t.maxHeight), r) {
                            if (o.font = i.string, u) {
                                var c = t.lineWidths = [0],
                                    d = 0;
                                o.textAlign = "left", o.textBaseline = "middle", V.each(t.legendItems, (function(t, e) {
                                    var r = rr(n, a) + a / 2 + o.measureText(t.text).width;
                                    (0 === e || c[c.length - 1] + r + 2 * n.padding > l.width) && (d += a + n.padding, c[c.length - (e > 0 ? 0 : 1)] = 0), s[e] = {
                                        left: 0,
                                        top: 0,
                                        width: r,
                                        height: a
                                    }, c[c.length - 1] += r + n.padding
                                })), l.height += d
                            } else {
                                var h = n.padding,
                                    f = t.columnWidths = [],
                                    p = t.columnHeights = [],
                                    g = n.padding,
                                    v = 0,
                                    y = 0;
                                V.each(t.legendItems, (function(t, e) {
                                    var r = rr(n, a) + a / 2 + o.measureText(t.text).width;
                                    e > 0 && y + a + 2 * h > l.height && (g += v + n.padding, f.push(v), p.push(y), v = 0, y = 0), v = Math.max(v, r), y += a + h, s[e] = {
                                        left: 0,
                                        top: 0,
                                        width: r,
                                        height: a
                                    }
                                })), g += v, f.push(v), p.push(y), l.width += g
                            }
                            t.width = l.width, t.height = l.height
                        } else t.width = l.width = t.height = l.height = 0
                    },
                    afterFit: er,
                    isHorizontal: function() {
                        return "top" === this.options.position || "bottom" === this.options.position
                    },
                    draw: function() {
                        var t = this,
                            e = t.options,
                            n = e.labels,
                            r = T.global,
                            o = r.defaultColor,
                            i = r.elements.line,
                            a = t.height,
                            s = t.columnHeights,
                            l = t.width,
                            u = t.lineWidths;
                        if (e.display) {
                            var c, d = tr(e.rtl, t.left, t.minSize.width),
                                h = t.ctx,
                                f = nr(n.fontColor, r.defaultFontColor),
                                p = V.options._parseFont(n),
                                g = p.size;
                            h.textAlign = d.textAlign("left"), h.textBaseline = "middle", h.lineWidth = .5, h.strokeStyle = f, h.fillStyle = f, h.font = p.string;
                            var v = rr(n, g),
                                y = t.legendHitBoxes,
                                b = function(t, r) {
                                    switch (e.align) {
                                        case "start":
                                            return n.padding;
                                        case "end":
                                            return t - r;
                                        default:
                                            return (t - r + n.padding) / 2
                                    }
                                },
                                m = t.isHorizontal();
                            c = m ? {
                                x: t.left + b(l, u[0]),
                                y: t.top + n.padding,
                                line: 0
                            } : {
                                x: t.left + n.padding,
                                y: t.top + b(a, s[0]),
                                line: 0
                            }, V.rtl.overrideTextDirection(t.ctx, e.textDirection);
                            var x = g + n.padding;
                            V.each(t.legendItems, (function(e, r) {
                                var f = h.measureText(e.text).width,
                                    p = v + g / 2 + f,
                                    w = c.x,
                                    _ = c.y;
                                d.setWidth(t.minSize.width), m ? r > 0 && w + p + n.padding > t.left + t.minSize.width && (_ = c.y += x, c.line++, w = c.x = t.left + b(l, u[c.line])) : r > 0 && _ + x > t.top + t.minSize.height && (w = c.x = w + t.columnWidths[c.line] + n.padding, c.line++, _ = c.y = t.top + b(a, s[c.line]));
                                var O = d.x(w);
                                ! function(t, e, r) {
                                    if (!(isNaN(v) || v <= 0)) {
                                        h.save();
                                        var a = nr(r.lineWidth, i.borderWidth);
                                        if (h.fillStyle = nr(r.fillStyle, o), h.lineCap = nr(r.lineCap, i.borderCapStyle), h.lineDashOffset = nr(r.lineDashOffset, i.borderDashOffset), h.lineJoin = nr(r.lineJoin, i.borderJoinStyle), h.lineWidth = a, h.strokeStyle = nr(r.strokeStyle, o), h.setLineDash && h.setLineDash(nr(r.lineDash, i.borderDash)), n && n.usePointStyle) {
                                            var s = v * Math.SQRT2 / 2,
                                                l = d.xPlus(t, v / 2);
                                            V.canvas.drawPoint(h, r.pointStyle, s, l, e + g / 2, r.rotation)
                                        } else h.fillRect(d.leftForLtr(t, v), e, v, g), 0 !== a && h.strokeRect(d.leftForLtr(t, v), e, v, g);
                                        h.restore()
                                    }
                                }(O, _, e), y[r].left = d.leftForLtr(O, y[r].width), y[r].top = _,
                                    function(t, e, n, r) {
                                        var o = g / 2,
                                            i = d.xPlus(t, v + o),
                                            a = e + o;
                                        h.fillText(n.text, i, a), n.hidden && (h.beginPath(), h.lineWidth = 2, h.moveTo(i, a), h.lineTo(d.xPlus(i, r), a), h.stroke())
                                    }(O, _, e, f), m ? c.x += p + n.padding : c.y += x
                            })), V.rtl.restoreTextDirection(t.ctx, e.textDirection)
                        }
                    },
                    _getLegendItemAt: function(t, e) {
                        var n, r, o, i = this;
                        if (t >= i.left && t <= i.right && e >= i.top && e <= i.bottom)
                            for (o = i.legendHitBoxes, n = 0; n < o.length; ++n)
                                if (t >= (r = o[n]).left && t <= r.left + r.width && e >= r.top && e <= r.top + r.height) return i.legendItems[n];
                        return null
                    },
                    handleEvent: function(t) {
                        var e, n = this,
                            r = n.options,
                            o = "mouseup" === t.type ? "click" : t.type;
                        if ("mousemove" === o) {
                            if (!r.onHover && !r.onLeave) return
                        } else {
                            if ("click" !== o) return;
                            if (!r.onClick) return
                        }
                        e = n._getLegendItemAt(t.x, t.y), "click" === o ? e && r.onClick && r.onClick.call(n, t.native, e) : (r.onLeave && e !== n._hoveredItem && (n._hoveredItem && r.onLeave.call(n, t.native, n._hoveredItem), n._hoveredItem = e), r.onHover && e && r.onHover.call(n, t.native, e))
                    }
                });

                function ir(t, e) {
                    var n = new or({
                        ctx: t.ctx,
                        options: e,
                        chart: t
                    });
                    se.configure(t, n, e), se.addBox(t, n), t.legend = n
                }
                var ar = {
                        id: "legend",
                        _element: or,
                        beforeInit: function(t) {
                            var e = t.options.legend;
                            e && ir(t, e)
                        },
                        beforeUpdate: function(t) {
                            var e = t.options.legend,
                                n = t.legend;
                            e ? (V.mergeIf(e, T.global.legend), n ? (se.configure(t, n, e), n.options = e) : ir(t, e)) : n && (se.removeBox(t, n), delete t.legend)
                        },
                        afterEvent: function(t, e) {
                            var n = t.legend;
                            n && n.handleEvent(e)
                        }
                    },
                    sr = V.noop;
                T._set("global", {
                    title: {
                        display: !1,
                        fontStyle: "bold",
                        fullWidth: !0,
                        padding: 10,
                        position: "top",
                        text: "",
                        weight: 2e3
                    }
                });
                var lr = G.extend({
                    initialize: function(t) {
                        V.extend(this, t), this.legendHitBoxes = []
                    },
                    beforeUpdate: sr,
                    update: function(t, e, n) {
                        var r = this;
                        return r.beforeUpdate(), r.maxWidth = t, r.maxHeight = e, r.margins = n, r.beforeSetDimensions(), r.setDimensions(), r.afterSetDimensions(), r.beforeBuildLabels(), r.buildLabels(), r.afterBuildLabels(), r.beforeFit(), r.fit(), r.afterFit(), r.afterUpdate(), r.minSize
                    },
                    afterUpdate: sr,
                    beforeSetDimensions: sr,
                    setDimensions: function() {
                        var t = this;
                        t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                            width: 0,
                            height: 0
                        }
                    },
                    afterSetDimensions: sr,
                    beforeBuildLabels: sr,
                    buildLabels: sr,
                    afterBuildLabels: sr,
                    beforeFit: sr,
                    fit: function() {
                        var t, e = this,
                            n = e.options,
                            r = e.minSize = {},
                            o = e.isHorizontal();
                        n.display ? (t = (V.isArray(n.text) ? n.text.length : 1) * V.options._parseFont(n).lineHeight + 2 * n.padding, e.width = r.width = o ? e.maxWidth : t, e.height = r.height = o ? t : e.maxHeight) : e.width = r.width = e.height = r.height = 0
                    },
                    afterFit: sr,
                    isHorizontal: function() {
                        var t = this.options.position;
                        return "top" === t || "bottom" === t
                    },
                    draw: function() {
                        var t = this,
                            e = t.ctx,
                            n = t.options;
                        if (n.display) {
                            var r, o, i, a = V.options._parseFont(n),
                                s = a.lineHeight,
                                l = s / 2 + n.padding,
                                u = 0,
                                c = t.top,
                                d = t.left,
                                h = t.bottom,
                                f = t.right;
                            e.fillStyle = V.valueOrDefault(n.fontColor, T.global.defaultFontColor), e.font = a.string, t.isHorizontal() ? (o = d + (f - d) / 2, i = c + l, r = f - d) : (o = "left" === n.position ? d + l : f - l, i = c + (h - c) / 2, r = h - c, u = Math.PI * ("left" === n.position ? -.5 : .5)), e.save(), e.translate(o, i), e.rotate(u), e.textAlign = "center", e.textBaseline = "middle";
                            var p = n.text;
                            if (V.isArray(p))
                                for (var g = 0, v = 0; v < p.length; ++v) e.fillText(p[v], 0, g, r), g += s;
                            else e.fillText(p, 0, 0, r);
                            e.restore()
                        }
                    }
                });

                function ur(t, e) {
                    var n = new lr({
                        ctx: t.ctx,
                        options: e,
                        chart: t
                    });
                    se.configure(t, n, e), se.addBox(t, n), t.titleBlock = n
                }
                var cr = {},
                    dr = Qn,
                    hr = ar,
                    fr = {
                        id: "title",
                        _element: lr,
                        beforeInit: function(t) {
                            var e = t.options.title;
                            e && ur(t, e)
                        },
                        beforeUpdate: function(t) {
                            var e = t.options.title,
                                n = t.titleBlock;
                            e ? (V.mergeIf(e, T.global.title), n ? (se.configure(t, n, e), n.options = e) : ur(t, e)) : n && (se.removeBox(t, n), delete t.titleBlock)
                        }
                    };
                for (var pr in cr.filler = dr, cr.legend = hr, cr.title = fr, Le.helpers = V,
                        function() {
                            function t(t, e, n) {
                                var r;
                                return "string" == typeof t ? (r = parseInt(t, 10), -1 !== t.indexOf("%") && (r = r / 100 * e.parentNode[n])) : r = t, r
                            }

                            function e(t) {
                                return null != t && "none" !== t
                            }

                            function n(n, r, o) {
                                var i = document.defaultView,
                                    a = V._getParentNode(n),
                                    s = i.getComputedStyle(n)[r],
                                    l = i.getComputedStyle(a)[r],
                                    u = e(s),
                                    c = e(l),
                                    d = Number.POSITIVE_INFINITY;
                                return u || c ? Math.min(u ? t(s, n, o) : d, c ? t(l, a, o) : d) : "none"
                            }
                            V.where = function(t, e) {
                                if (V.isArray(t) && Array.prototype.filter) return t.filter(e);
                                var n = [];
                                return V.each(t, (function(t) {
                                    e(t) && n.push(t)
                                })), n
                            }, V.findIndex = Array.prototype.findIndex ? function(t, e, n) {
                                return t.findIndex(e, n)
                            } : function(t, e, n) {
                                n = void 0 === n ? t : n;
                                for (var r = 0, o = t.length; r < o; ++r)
                                    if (e.call(n, t[r], r, t)) return r;
                                return -1
                            }, V.findNextWhere = function(t, e, n) {
                                V.isNullOrUndef(n) && (n = -1);
                                for (var r = n + 1; r < t.length; r++) {
                                    var o = t[r];
                                    if (e(o)) return o
                                }
                            }, V.findPreviousWhere = function(t, e, n) {
                                V.isNullOrUndef(n) && (n = t.length);
                                for (var r = n - 1; r >= 0; r--) {
                                    var o = t[r];
                                    if (e(o)) return o
                                }
                            }, V.isNumber = function(t) {
                                return !isNaN(parseFloat(t)) && isFinite(t)
                            }, V.almostEquals = function(t, e, n) {
                                return Math.abs(t - e) < n
                            }, V.almostWhole = function(t, e) {
                                var n = Math.round(t);
                                return n - e <= t && n + e >= t
                            }, V.max = function(t) {
                                return t.reduce((function(t, e) {
                                    return isNaN(e) ? t : Math.max(t, e)
                                }), Number.NEGATIVE_INFINITY)
                            }, V.min = function(t) {
                                return t.reduce((function(t, e) {
                                    return isNaN(e) ? t : Math.min(t, e)
                                }), Number.POSITIVE_INFINITY)
                            }, V.sign = Math.sign ? function(t) {
                                return Math.sign(t)
                            } : function(t) {
                                return 0 == (t = +t) || isNaN(t) ? t : t > 0 ? 1 : -1
                            }, V.toRadians = function(t) {
                                return t * (Math.PI / 180)
                            }, V.toDegrees = function(t) {
                                return t * (180 / Math.PI)
                            }, V._decimalPlaces = function(t) {
                                if (V.isFinite(t)) {
                                    for (var e = 1, n = 0; Math.round(t * e) / e !== t;) e *= 10, n++;
                                    return n
                                }
                            }, V.getAngleFromPoint = function(t, e) {
                                var n = e.x - t.x,
                                    r = e.y - t.y,
                                    o = Math.sqrt(n * n + r * r),
                                    i = Math.atan2(r, n);
                                return i < -.5 * Math.PI && (i += 2 * Math.PI), {
                                    angle: i,
                                    distance: o
                                }
                            }, V.distanceBetweenPoints = function(t, e) {
                                return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
                            }, V.aliasPixel = function(t) {
                                return t % 2 == 0 ? 0 : .5
                            }, V._alignPixel = function(t, e, n) {
                                var r = t.currentDevicePixelRatio,
                                    o = n / 2;
                                return Math.round((e - o) * r) / r + o
                            }, V.splineCurve = function(t, e, n, r) {
                                var o = t.skip ? e : t,
                                    i = e,
                                    a = n.skip ? e : n,
                                    s = Math.sqrt(Math.pow(i.x - o.x, 2) + Math.pow(i.y - o.y, 2)),
                                    l = Math.sqrt(Math.pow(a.x - i.x, 2) + Math.pow(a.y - i.y, 2)),
                                    u = s / (s + l),
                                    c = l / (s + l),
                                    d = r * (u = isNaN(u) ? 0 : u),
                                    h = r * (c = isNaN(c) ? 0 : c);
                                return {
                                    previous: {
                                        x: i.x - d * (a.x - o.x),
                                        y: i.y - d * (a.y - o.y)
                                    },
                                    next: {
                                        x: i.x + h * (a.x - o.x),
                                        y: i.y + h * (a.y - o.y)
                                    }
                                }
                            }, V.EPSILON = Number.EPSILON || 1e-14, V.splineCurveMonotone = function(t) {
                                var e, n, r, o, i, a, s, l, u, c = (t || []).map((function(t) {
                                        return {
                                            model: t._model,
                                            deltaK: 0,
                                            mK: 0
                                        }
                                    })),
                                    d = c.length;
                                for (e = 0; e < d; ++e)
                                    if (!(r = c[e]).model.skip) {
                                        if (n = e > 0 ? c[e - 1] : null, (o = e < d - 1 ? c[e + 1] : null) && !o.model.skip) {
                                            var h = o.model.x - r.model.x;
                                            r.deltaK = 0 !== h ? (o.model.y - r.model.y) / h : 0
                                        }
                                        r.mK = !n || n.model.skip ? r.deltaK : !o || o.model.skip ? n.deltaK : this.sign(n.deltaK) !== this.sign(r.deltaK) ? 0 : (n.deltaK + r.deltaK) / 2
                                    } for (e = 0; e < d - 1; ++e) o = c[e + 1], (r = c[e]).model.skip || o.model.skip || (V.almostEquals(r.deltaK, 0, this.EPSILON) ? r.mK = o.mK = 0 : (i = r.mK / r.deltaK, a = o.mK / r.deltaK, (l = Math.pow(i, 2) + Math.pow(a, 2)) <= 9 || (s = 3 / Math.sqrt(l), r.mK = i * s * r.deltaK, o.mK = a * s * r.deltaK)));
                                for (e = 0; e < d; ++e)(r = c[e]).model.skip || (o = e < d - 1 ? c[e + 1] : null, (n = e > 0 ? c[e - 1] : null) && !n.model.skip && (r.model.controlPointPreviousX = r.model.x - (u = (r.model.x - n.model.x) / 3), r.model.controlPointPreviousY = r.model.y - u * r.mK), o && !o.model.skip && (r.model.controlPointNextX = r.model.x + (u = (o.model.x - r.model.x) / 3), r.model.controlPointNextY = r.model.y + u * r.mK))
                            }, V.nextItem = function(t, e, n) {
                                return n ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1]
                            }, V.previousItem = function(t, e, n) {
                                return n ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1]
                            }, V.niceNum = function(t, e) {
                                var n = Math.floor(V.log10(t)),
                                    r = t / Math.pow(10, n);
                                return (e ? r < 1.5 ? 1 : r < 3 ? 2 : r < 7 ? 5 : 10 : r <= 1 ? 1 : r <= 2 ? 2 : r <= 5 ? 5 : 10) * Math.pow(10, n)
                            }, V.requestAnimFrame = "undefined" == typeof window ? function(t) {
                                t()
                            } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                                return window.setTimeout(t, 1e3 / 60)
                            }, V.getRelativePosition = function(t, e) {
                                var n, r, o = t.originalEvent || t,
                                    i = t.target || t.srcElement,
                                    a = i.getBoundingClientRect(),
                                    s = o.touches;
                                s && s.length > 0 ? (n = s[0].clientX, r = s[0].clientY) : (n = o.clientX, r = o.clientY);
                                var l = parseFloat(V.getStyle(i, "padding-left")),
                                    u = parseFloat(V.getStyle(i, "padding-top")),
                                    c = parseFloat(V.getStyle(i, "padding-right")),
                                    d = parseFloat(V.getStyle(i, "padding-bottom")),
                                    h = a.bottom - a.top - u - d;
                                return {
                                    x: n = Math.round((n - a.left - l) / (a.right - a.left - l - c) * i.width / e.currentDevicePixelRatio),
                                    y: r = Math.round((r - a.top - u) / h * i.height / e.currentDevicePixelRatio)
                                }
                            }, V.getConstraintWidth = function(t) {
                                return n(t, "max-width", "clientWidth")
                            }, V.getConstraintHeight = function(t) {
                                return n(t, "max-height", "clientHeight")
                            }, V._calculatePadding = function(t, e, n) {
                                return (e = V.getStyle(t, e)).indexOf("%") > -1 ? n * parseInt(e, 10) / 100 : parseInt(e, 10)
                            }, V._getParentNode = function(t) {
                                var e = t.parentNode;
                                return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e
                            }, V.getMaximumWidth = function(t) {
                                var e = V._getParentNode(t);
                                if (!e) return t.clientWidth;
                                var n = e.clientWidth,
                                    r = n - V._calculatePadding(e, "padding-left", n) - V._calculatePadding(e, "padding-right", n),
                                    o = V.getConstraintWidth(t);
                                return isNaN(o) ? r : Math.min(r, o)
                            }, V.getMaximumHeight = function(t) {
                                var e = V._getParentNode(t);
                                if (!e) return t.clientHeight;
                                var n = e.clientHeight,
                                    r = n - V._calculatePadding(e, "padding-top", n) - V._calculatePadding(e, "padding-bottom", n),
                                    o = V.getConstraintHeight(t);
                                return isNaN(o) ? r : Math.min(r, o)
                            }, V.getStyle = function(t, e) {
                                return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e)
                            }, V.retinaScale = function(t, e) {
                                var n = t.currentDevicePixelRatio = e || "undefined" != typeof window && window.devicePixelRatio || 1;
                                if (1 !== n) {
                                    var r = t.canvas,
                                        o = t.height,
                                        i = t.width;
                                    r.height = o * n, r.width = i * n, t.ctx.scale(n, n), r.style.height || r.style.width || (r.style.height = o + "px", r.style.width = i + "px")
                                }
                            }, V.fontString = function(t, e, n) {
                                return e + " " + t + "px " + n
                            }, V.longestText = function(t, e, n, r) {
                                var o = (r = r || {}).data = r.data || {},
                                    i = r.garbageCollect = r.garbageCollect || [];
                                r.font !== e && (o = r.data = {}, i = r.garbageCollect = [], r.font = e), t.font = e;
                                var a, s, l, u, c, d = 0,
                                    h = n.length;
                                for (a = 0; a < h; a++)
                                    if (null != (u = n[a]) && !0 !== V.isArray(u)) d = V.measureText(t, o, i, d, u);
                                    else if (V.isArray(u))
                                    for (s = 0, l = u.length; s < l; s++) null == (c = u[s]) || V.isArray(c) || (d = V.measureText(t, o, i, d, c));
                                var f = i.length / 2;
                                if (f > n.length) {
                                    for (a = 0; a < f; a++) delete o[i[a]];
                                    i.splice(0, f)
                                }
                                return d
                            }, V.measureText = function(t, e, n, r, o) {
                                var i = e[o];
                                return i || (i = e[o] = t.measureText(o).width, n.push(o)), i > r && (r = i), r
                            }, V.numberOfLabelLines = function(t) {
                                var e = 1;
                                return V.each(t, (function(t) {
                                    V.isArray(t) && t.length > e && (e = t.length)
                                })), e
                            }, V.color = w ? function(t) {
                                return t instanceof CanvasGradient && (t = T.global.defaultColor), w(t)
                            } : function(t) {
                                return console.error("Color.js not found!"), t
                            }, V.getHoverColor = function(t) {
                                return t instanceof CanvasPattern || t instanceof CanvasGradient ? t : V.color(t).saturate(.5).darken(.1).rgbString()
                            }
                        }(), Le._adapters = ze, Le.Animation = K, Le.animationService = Y, Le.controllers = Ut, Le.DatasetController = Q, Le.defaults = T, Le.Element = G, Le.elements = vt, Le.Interaction = Jt, Le.layouts = se, Le.platform = be, Le.plugins = me, Le.Scale = en, Le.scaleService = xe, Le.Ticks = He, Le.Tooltip = je, Le.helpers.each(Wn, (function(t, e) {
                            Le.scaleService.registerScaleType(e, t, t._defaults)
                        })), cr) cr.hasOwnProperty(pr) && Le.plugins.register(cr[pr]);
                Le.platform.initialize();
                var gr = Le;
                return "undefined" != typeof window && (window.Chart = Le), Le.Chart = Le, Le.Legend = cr.legend._element, Le.Title = cr.title._element, Le.pluginService = Le.plugins, Le.PluginBase = Le.Element.extend({}), Le.canvasHelpers = Le.helpers.canvas, Le.layoutService = Le.layouts, Le.LinearScaleBase = an, Le.helpers.each(["Bar", "Bubble", "Doughnut", "Line", "PolarArea", "Radar", "Scatter"], (function(t) {
                    Le[t] = function(e, n) {
                        return new Le(e, Le.helpers.merge(n || {}, {
                            type: t.charAt(0).toLowerCase() + t.slice(1)
                        }))
                    }
                })), gr
            }(function() {
                try {
                    return n("wd/R")
                } catch (t) {}
            }())
        },
        MP8s: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return _
            }));
            var r = n("CcnG"),
                o = n("2vnA"),
                i = n("f95s"),
                a = n("mfoh"),
                s = n("X+05"),
                l = n("afOK"),
                u = n.n(l),
                c = n("RBan"),
                d = n.n(c),
                h = n("wig9"),
                f = n.n(h),
                p = n("J2m7"),
                g = n.n(p),
                v = n("4qC0"),
                y = n.n(v),
                b = n("lSCD"),
                m = n.n(b),
                x = function(t, e, n, r) {
                    var o, i = arguments.length,
                        a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, r);
                    else
                        for (var s = t.length - 1; s >= 0; s--)(o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
                    return i > 3 && a && Object.defineProperty(e, n, a), a
                },
                w = function(t, e) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
                },
                _ = function() {
                    function t() {
                        this.options = new a.a, this.eventNames = Object.keys(s.a), this.expandedNodeIds = {}, this.selectedLeafNodeIds = {}, this.activeNodeIds = {}, this.hiddenNodeIds = {}, this.focusedNodeId = null, this.firstUpdate = !0, this.subscriptions = []
                    }
                    var e;
                    return e = t, t.prototype.fireEvent = function(t) {
                        t.treeModel = this, this.events[t.eventName].emit(t), this.events.event.emit(t)
                    }, t.prototype.subscribe = function(t, e) {
                        var n = this.events[t].subscribe(e);
                        this.subscriptions.push(n)
                    }, t.prototype.getFocusedNode = function() {
                        return this.focusedNode
                    }, t.prototype.getActiveNode = function() {
                        return this.activeNodes[0]
                    }, t.prototype.getActiveNodes = function() {
                        return this.activeNodes
                    }, t.prototype.getVisibleRoots = function() {
                        return this.virtualRoot.visibleChildren
                    }, t.prototype.getFirstRoot = function(t) {
                        return void 0 === t && (t = !1), u()(t ? this.getVisibleRoots() : this.roots)
                    }, t.prototype.getLastRoot = function(t) {
                        return void 0 === t && (t = !1), d()(t ? this.getVisibleRoots() : this.roots)
                    }, Object.defineProperty(t.prototype, "isFocused", {
                        get: function() {
                            return e.focusedTree === this
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.isNodeFocused = function(t) {
                        return this.focusedNode === t
                    }, t.prototype.isEmptyTree = function() {
                        return this.roots && 0 === this.roots.length
                    }, Object.defineProperty(t.prototype, "focusedNode", {
                        get: function() {
                            return this.focusedNodeId ? this.getNodeById(this.focusedNodeId) : null
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "expandedNodes", {
                        get: function() {
                            var t = this,
                                e = Object.keys(this.expandedNodeIds).filter((function(e) {
                                    return t.expandedNodeIds[e]
                                })).map((function(e) {
                                    return t.getNodeById(e)
                                }));
                            return f()(e)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "activeNodes", {
                        get: function() {
                            var t = this,
                                e = Object.keys(this.activeNodeIds).filter((function(e) {
                                    return t.activeNodeIds[e]
                                })).map((function(e) {
                                    return t.getNodeById(e)
                                }));
                            return f()(e)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "hiddenNodes", {
                        get: function() {
                            var t = this,
                                e = Object.keys(this.hiddenNodeIds).filter((function(e) {
                                    return t.hiddenNodeIds[e]
                                })).map((function(e) {
                                    return t.getNodeById(e)
                                }));
                            return f()(e)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "selectedLeafNodes", {
                        get: function() {
                            var t = this,
                                e = Object.keys(this.selectedLeafNodeIds).filter((function(e) {
                                    return t.selectedLeafNodeIds[e]
                                })).map((function(e) {
                                    return t.getNodeById(e)
                                }));
                            return f()(e)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.getNodeByPath = function(t, e) {
                        if (void 0 === e && (e = null), !t) return null;
                        if (e = e || this.virtualRoot, 0 === t.length) return e;
                        if (!e.children) return null;
                        var n = t.shift(),
                            r = g()(e.children, {
                                id: n
                            });
                        return r ? this.getNodeByPath(t, r) : null
                    }, t.prototype.getNodeById = function(t) {
                        var e = t.toString();
                        return this.getNodeBy((function(t) {
                            return t.id.toString() === e
                        }))
                    }, t.prototype.getNodeBy = function(t, e) {
                        if (void 0 === e && (e = null), !(e = e || this.virtualRoot).children) return null;
                        var n = g()(e.children, t);
                        if (n) return n;
                        for (var r = 0, o = e.children; r < o.length; r++) {
                            var i = this.getNodeBy(t, o[r]);
                            if (i) return i
                        }
                    }, t.prototype.isExpanded = function(t) {
                        return this.expandedNodeIds[t.id]
                    }, t.prototype.isHidden = function(t) {
                        return this.hiddenNodeIds[t.id]
                    }, t.prototype.isActive = function(t) {
                        return this.activeNodeIds[t.id]
                    }, t.prototype.isSelected = function(t) {
                        return this.selectedLeafNodeIds[t.id]
                    }, t.prototype.ngOnDestroy = function() {
                        this.dispose(), this.unsubscribeAll()
                    }, t.prototype.dispose = function() {
                        this.virtualRoot && this.virtualRoot.dispose()
                    }, t.prototype.unsubscribeAll = function() {
                        this.subscriptions.forEach((function(t) {
                            return t.unsubscribe()
                        })), this.subscriptions = []
                    }, t.prototype.setData = function(t) {
                        var e = t.nodes,
                            n = t.options,
                            r = void 0 === n ? null : n,
                            o = t.events,
                            i = void 0 === o ? null : o;
                        r && (this.options = new a.a(r)), i && (this.events = i), e && (this.nodes = e), this.update()
                    }, t.prototype.update = function() {
                        var t, e = ((t = {
                            id: this.options.rootId,
                            virtual: !0
                        })[this.options.childrenField] = this.nodes, t);
                        this.dispose(), this.virtualRoot = new i.a(e, null, this, 0), this.roots = this.virtualRoot.children, this.firstUpdate ? this.roots && (this.firstUpdate = !1, this._calculateExpandedNodes()) : this.fireEvent({
                            eventName: s.a.updateData
                        })
                    }, t.prototype.setFocusedNode = function(t) {
                        this.focusedNodeId = t ? t.id : null
                    }, t.prototype.setFocus = function(t) {
                        e.focusedTree = t ? this : null
                    }, t.prototype.doForAll = function(t) {
                        this.roots.forEach((function(e) {
                            return e.doForAll(t)
                        }))
                    }, t.prototype.focusNextNode = function() {
                        var t = this.getFocusedNode(),
                            e = t ? t.findNextNode(!0, !0) : this.getFirstRoot(!0);
                        e && e.focus()
                    }, t.prototype.focusPreviousNode = function() {
                        var t = this.getFocusedNode(),
                            e = t ? t.findPreviousNode(!0) : this.getLastRoot(!0);
                        e && e.focus()
                    }, t.prototype.focusDrillDown = function() {
                        var t = this.getFocusedNode();
                        if (t && t.isCollapsed && t.hasChildren) t.toggleExpanded();
                        else {
                            var e = t ? t.getFirstChild(!0) : this.getFirstRoot(!0);
                            e && e.focus()
                        }
                    }, t.prototype.focusDrillUp = function() {
                        var t = this.getFocusedNode();
                        if (t)
                            if (t.isExpanded) t.toggleExpanded();
                            else {
                                var e = t.realParent;
                                e && e.focus()
                            }
                    }, t.prototype.setActiveNode = function(t, e, n) {
                        void 0 === n && (n = !1), n ? this._setActiveNodeMulti(t, e) : this._setActiveNodeSingle(t, e), e ? (t.focus(this.options.scrollOnActivate), this.fireEvent({
                            eventName: s.a.activate,
                            node: t
                        }), this.fireEvent({
                            eventName: s.a.nodeActivate,
                            node: t
                        })) : (this.fireEvent({
                            eventName: s.a.deactivate,
                            node: t
                        }), this.fireEvent({
                            eventName: s.a.nodeDeactivate,
                            node: t
                        }))
                    }, t.prototype.setSelectedNode = function(t, e) {
                        var n;
                        this.selectedLeafNodeIds = Object.assign({}, this.selectedLeafNodeIds, ((n = {})[t.id] = e, n)), e ? (t.focus(), this.fireEvent({
                            eventName: s.a.select,
                            node: t
                        })) : this.fireEvent({
                            eventName: s.a.deselect,
                            node: t
                        })
                    }, t.prototype.setExpandedNode = function(t, e) {
                        var n;
                        this.expandedNodeIds = Object.assign({}, this.expandedNodeIds, ((n = {})[t.id] = e, n)), this.fireEvent({
                            eventName: s.a.toggleExpanded,
                            node: t,
                            isExpanded: e
                        })
                    }, t.prototype.expandAll = function() {
                        this.roots.forEach((function(t) {
                            return t.expandAll()
                        }))
                    }, t.prototype.collapseAll = function() {
                        this.roots.forEach((function(t) {
                            return t.collapseAll()
                        }))
                    }, t.prototype.setIsHidden = function(t, e) {
                        var n;
                        this.hiddenNodeIds = Object.assign({}, this.hiddenNodeIds, ((n = {})[t.id] = e, n))
                    }, t.prototype.setHiddenNodeIds = function(t) {
                        this.hiddenNodeIds = t.reduce((function(t, e) {
                            var n;
                            return Object.assign(t, ((n = {})[e] = !0, n))
                        }), {})
                    }, t.prototype.performKeyAction = function(t, e) {
                        var n = this.options.actionMapping.keys[e.keyCode];
                        return !!n && (e.preventDefault(), n(this, t, e), !0)
                    }, t.prototype.filterNodes = function(t, e) {
                        var n, r = this;
                        if (void 0 === e && (e = !0), !t) return this.clearFilter();
                        if (y()(t)) n = function(e) {
                            return -1 !== e.displayField.toLowerCase().indexOf(t.toLowerCase())
                        };
                        else {
                            if (!m()(t)) return console.error("Don't know what to do with filter", t), void console.error("Should be either a string or function");
                            n = t
                        }
                        var o = {};
                        this.roots.forEach((function(t) {
                            return r._filterNode(o, t, n, e)
                        })), this.hiddenNodeIds = o, this.fireEvent({
                            eventName: s.a.changeFilter
                        })
                    }, t.prototype.clearFilter = function() {
                        this.hiddenNodeIds = {}, this.fireEvent({
                            eventName: s.a.changeFilter
                        })
                    }, t.prototype.moveNode = function(t, e) {
                        var n = t.getIndexInParent(),
                            r = t.parent;
                        if (this.canMoveNode(t, e, n)) {
                            var o = r.getField("children");
                            e.parent.getField("children") || e.parent.setField("children", []);
                            var i = e.parent.getField("children"),
                                a = o.splice(n, 1)[0],
                                l = r === e.parent && e.index > n ? e.index - 1 : e.index;
                            i.splice(l, 0, a), r.treeModel.update(), e.parent.treeModel !== r.treeModel && e.parent.treeModel.update(), this.fireEvent({
                                eventName: s.a.moveNode,
                                node: a,
                                to: {
                                    parent: e.parent.data,
                                    index: l
                                },
                                from: {
                                    parent: r.data,
                                    index: n
                                }
                            })
                        }
                    }, t.prototype.copyNode = function(t, e) {
                        var n = t.getIndexInParent();
                        if (this.canMoveNode(t, e, n)) {
                            e.parent.getField("children") || e.parent.setField("children", []);
                            var r = e.parent.getField("children"),
                                o = this.options.getNodeClone(t);
                            r.splice(e.index, 0, o), t.treeModel.update(), e.parent.treeModel !== t.treeModel && e.parent.treeModel.update(), this.fireEvent({
                                eventName: s.a.copyNode,
                                node: o,
                                to: {
                                    parent: e.parent.data,
                                    index: e.index
                                }
                            })
                        }
                    }, t.prototype.getState = function() {
                        return {
                            expandedNodeIds: this.expandedNodeIds,
                            selectedLeafNodeIds: this.selectedLeafNodeIds,
                            activeNodeIds: this.activeNodeIds,
                            hiddenNodeIds: this.hiddenNodeIds,
                            focusedNodeId: this.focusedNodeId
                        }
                    }, t.prototype.setState = function(t) {
                        t && Object.assign(this, {
                            expandedNodeIds: t.expandedNodeIds || {},
                            selectedLeafNodeIds: t.selectedLeafNodeIds || {},
                            activeNodeIds: t.activeNodeIds || {},
                            hiddenNodeIds: t.hiddenNodeIds || {},
                            focusedNodeId: t.focusedNodeId
                        })
                    }, t.prototype.subscribeToState = function(t) {
                        var e = this;
                        Object(o.b)((function() {
                            return t(e.getState())
                        }))
                    }, t.prototype.canMoveNode = function(t, e, n) {
                        return void 0 === n && (n = void 0), n || t.getIndexInParent(), (t.parent !== e.parent || n !== e.index) && !e.parent.isDescendantOf(t)
                    }, t.prototype.calculateExpandedNodes = function() {
                        this._calculateExpandedNodes()
                    }, t.prototype._filterNode = function(t, e, n, r) {
                        var o = this,
                            i = n(e);
                        return e.children && e.children.forEach((function(e) {
                            o._filterNode(t, e, n, r) && (i = !0)
                        })), i || (t[e.id] = !0), r && i && e.ensureVisible(), i
                    }, t.prototype._calculateExpandedNodes = function(t) {
                        var e, n = this;
                        void 0 === t && (t = null), (t = t || this.virtualRoot).data[this.options.isExpandedField] && (this.expandedNodeIds = Object.assign({}, this.expandedNodeIds, ((e = {})[t.id] = !0, e))), t.children && t.children.forEach((function(t) {
                            return n._calculateExpandedNodes(t)
                        }))
                    }, t.prototype._setActiveNodeSingle = function(t, e) {
                        var n, r = this;
                        this.activeNodes.filter((function(e) {
                            return e !== t
                        })).forEach((function(t) {
                            r.fireEvent({
                                eventName: s.a.deactivate,
                                node: t
                            }), r.fireEvent({
                                eventName: s.a.nodeDeactivate,
                                node: t
                            })
                        })), this.activeNodeIds = e ? ((n = {})[t.id] = !0, n) : {}
                    }, t.prototype._setActiveNodeMulti = function(t, e) {
                        var n;
                        this.activeNodeIds = Object.assign({}, this.activeNodeIds, ((n = {})[t.id] = e, n))
                    }, t.focusedTree = null, x([o.d, w("design:type", Array)], t.prototype, "roots", void 0), x([o.d, w("design:type", Object)], t.prototype, "expandedNodeIds", void 0), x([o.d, w("design:type", Object)], t.prototype, "selectedLeafNodeIds", void 0), x([o.d, w("design:type", Object)], t.prototype, "activeNodeIds", void 0), x([o.d, w("design:type", Object)], t.prototype, "hiddenNodeIds", void 0), x([o.d, w("design:type", Object)], t.prototype, "focusedNodeId", void 0), x([o.d, w("design:type", i.a)], t.prototype, "virtualRoot", void 0), x([o.c, w("design:type", Object), w("design:paramtypes", [])], t.prototype, "focusedNode", null), x([o.c, w("design:type", Object), w("design:paramtypes", [])], t.prototype, "expandedNodes", null), x([o.c, w("design:type", Object), w("design:paramtypes", [])], t.prototype, "activeNodes", null), x([o.c, w("design:type", Object), w("design:paramtypes", [])], t.prototype, "hiddenNodes", null), x([o.c, w("design:type", Object), w("design:paramtypes", [])], t.prototype, "selectedLeafNodes", null), x([o.a, w("design:type", Function), w("design:paramtypes", [Object]), w("design:returntype", void 0)], t.prototype, "setData", null), x([o.a, w("design:type", Function), w("design:paramtypes", []), w("design:returntype", void 0)], t.prototype, "update", null), x([o.a, w("design:type", Function), w("design:paramtypes", [Object]), w("design:returntype", void 0)], t.prototype, "setFocusedNode", null), x([o.a, w("design:type", Function), w("design:paramtypes", [Object]), w("design:returntype", void 0)], t.prototype, "setFocus", null), x([o.a, w("design:type", Function), w("design:paramtypes", [Object]), w("design:returntype", void 0)], t.prototype, "doForAll", null), x([o.a, w("design:type", Function), w("design:paramtypes", []), w("design:returntype", void 0)], t.prototype, "focusNextNode", null), x([o.a, w("design:type", Function), w("design:paramtypes", []), w("design:returntype", void 0)], t.prototype, "focusPreviousNode", null), x([o.a, w("design:type", Function), w("design:paramtypes", []), w("design:returntype", void 0)], t.prototype, "focusDrillDown", null), x([o.a, w("design:type", Function), w("design:paramtypes", []), w("design:returntype", void 0)], t.prototype, "focusDrillUp", null), x([o.a, w("design:type", Function), w("design:paramtypes", [Object, Object, Object]), w("design:returntype", void 0)], t.prototype, "setActiveNode", null), x([o.a, w("design:type", Function), w("design:paramtypes", [Object, Object]), w("design:returntype", void 0)], t.prototype, "setSelectedNode", null), x([o.a, w("design:type", Function), w("design:paramtypes", [Object, Object]), w("design:returntype", void 0)], t.prototype, "setExpandedNode", null), x([o.a, w("design:type", Function), w("design:paramtypes", []), w("design:returntype", void 0)], t.prototype, "expandAll", null), x([o.a, w("design:type", Function), w("design:paramtypes", []), w("design:returntype", void 0)], t.prototype, "collapseAll", null), x([o.a, w("design:type", Function), w("design:paramtypes", [Object, Object]), w("design:returntype", void 0)], t.prototype, "setIsHidden", null), x([o.a, w("design:type", Function), w("design:paramtypes", [Object]), w("design:returntype", void 0)], t.prototype, "setHiddenNodeIds", null), x([o.a, w("design:type", Function), w("design:paramtypes", [Object, Object]), w("design:returntype", void 0)], t.prototype, "filterNodes", null), x([o.a, w("design:type", Function), w("design:paramtypes", []), w("design:returntype", void 0)], t.prototype, "clearFilter", null), x([o.a, w("design:type", Function), w("design:paramtypes", [Object, Object]), w("design:returntype", void 0)], t.prototype, "moveNode", null), x([o.a, w("design:type", Function), w("design:paramtypes", [Object, Object]), w("design:returntype", void 0)], t.prototype, "copyNode", null), x([o.a, w("design:type", Function), w("design:paramtypes", [Object]), w("design:returntype", void 0)], t.prototype, "setState", null), e = x([Object(r.u)()], t)
                }()
        },
        MrPd: function(t, e, n) {
            var r = n("hypo"),
                o = n("ljhN"),
                i = Object.prototype.hasOwnProperty;
            t.exports = function(t, e, n) {
                var a = t[e];
                i.call(t, e) && o(a, n) && (void 0 !== n || e in t) || r(t, e, n)
            }
        },
        MvSz: function(t, e, n) {
            var r = n("LXxW"),
                o = n("0ycA"),
                i = Object.prototype.propertyIsEnumerable,
                a = Object.getOwnPropertySymbols;
            t.exports = a ? function(t) {
                return null == t ? [] : (t = Object(t), r(a(t), (function(e) {
                    return i.call(t, e)
                })))
            } : o
        },
        NKxu: function(t, e, n) {
            var r = n("lSCD"),
                o = n("E2jh"),
                i = n("GoyQ"),
                a = n("3Fdi"),
                s = /^\[object .+?Constructor\]$/,
                l = Function.prototype,
                u = Object.prototype,
                c = RegExp("^" + l.toString.call(u.hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            t.exports = function(t) {
                return !(!i(t) || o(t)) && (r(t) ? c : s).test(a(t))
            }
        },
        Nh2a: function(t, e, n) {
            var r = n("SKAX");
            t.exports = function(t, e) {
                var n;
                return r(t, (function(t, r, o) {
                    return !(n = e(t, r, o))
                })), !!n
            }
        },
        Npjl: function(t, e) {
            t.exports = function(t, e) {
                return null == t ? void 0 : t[e]
            }
        },
        NykK: function(t, e, n) {
            var r = n("nmnc"),
                o = n("AP2z"),
                i = n("KfNM"),
                a = r ? r.toStringTag : void 0;
            t.exports = function(t) {
                return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : a && a in Object(t) ? o(t) : i(t)
            }
        },
        O0oS: function(t, e, n) {
            var r = n("Cwc5"),
                o = function() {
                    try {
                        var t = r(Object, "defineProperty");
                        return t({}, "", {}), t
                    } catch (e) {}
                }();
            t.exports = o
        },
        O7RO: function(t, e, n) {
            var r = n("CMye"),
                o = n("7GkX");
            t.exports = function(t) {
                for (var e = o(t), n = e.length; n--;) {
                    var i = e[n],
                        a = t[i];
                    e[n] = [i, a, r(a)]
                }
                return e
            }
        },
        OBhP: function(t, e, n) {
            var r = n("fmRc"),
                o = n("gFfm"),
                i = n("MrPd"),
                a = n("WwFo"),
                s = n("Dw+G"),
                l = n("5Tg0"),
                u = n("Q1l4"),
                c = n("VOtZ"),
                d = n("EEGq"),
                h = n("qZTm"),
                f = n("G6z8"),
                p = n("QqLw"),
                g = n("yHx3"),
                v = n("wrZu"),
                y = n("+iFO"),
                b = n("Z0cm"),
                m = n("DSRE"),
                x = n("zEVN"),
                w = n("GoyQ"),
                _ = n("1+5i"),
                O = n("7GkX"),
                k = {};
            k["[object Arguments]"] = k["[object Array]"] = k["[object ArrayBuffer]"] = k["[object DataView]"] = k["[object Boolean]"] = k["[object Date]"] = k["[object Float32Array]"] = k["[object Float64Array]"] = k["[object Int8Array]"] = k["[object Int16Array]"] = k["[object Int32Array]"] = k["[object Map]"] = k["[object Number]"] = k["[object Object]"] = k["[object RegExp]"] = k["[object Set]"] = k["[object String]"] = k["[object Symbol]"] = k["[object Uint8Array]"] = k["[object Uint8ClampedArray]"] = k["[object Uint16Array]"] = k["[object Uint32Array]"] = !0, k["[object Error]"] = k["[object Function]"] = k["[object WeakMap]"] = !1, t.exports = function t(e, n, S, C, A, M) {
                var j, D = 1 & n,
                    P = 2 & n,
                    E = 4 & n;
                if (S && (j = A ? S(e, C, A, M) : S(e)), void 0 !== j) return j;
                if (!w(e)) return e;
                var N = b(e);
                if (N) {
                    if (j = g(e), !D) return u(e, j)
                } else {
                    var I = p(e),
                        T = "[object Function]" == I || "[object GeneratorFunction]" == I;
                    if (m(e)) return l(e, D);
                    if ("[object Object]" == I || "[object Arguments]" == I || T && !A) {
                        if (j = P || T ? {} : y(e), !D) return P ? d(e, s(j, e)) : c(e, a(j, e))
                    } else {
                        if (!k[I]) return A ? e : {};
                        j = v(e, I, D)
                    }
                }
                M || (M = new r);
                var R = M.get(e);
                if (R) return R;
                M.set(e, j), _(e) ? e.forEach((function(r) {
                    j.add(t(r, n, S, r, e, M))
                })) : x(e) && e.forEach((function(r, o) {
                    j.set(o, t(r, n, S, o, e, M))
                }));
                var F = E ? P ? f : h : P ? keysIn : O,
                    L = N ? void 0 : F(e);
                return o(L || e, (function(r, o) {
                    L && (r = e[o = r]), i(j, o, t(r, n, S, o, e, M))
                })), j
            }
        },
        OIDT: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return s
            }));
            var r = n("CcnG"),
                o = n("f95s"),
                i = function(t, e, n, r) {
                    var o, i = arguments.length,
                        a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, r);
                    else
                        for (var s = t.length - 1; s >= 0; s--)(o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
                    return i > 3 && a && Object.defineProperty(e, n, a), a
                },
                a = function(t, e) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
                },
                s = function() {
                    function t() {}
                    return i([Object(r.x)(), a("design:type", o.a)], t.prototype, "node", void 0), i([Object(r.x)(), a("design:type", Number)], t.prototype, "index", void 0), i([Object(r.x)(), a("design:type", Object)], t.prototype, "templates", void 0), i([Object(r.j)({
                        selector: "tree-node-wrapper",
                        encapsulation: r.Z.None,
                        styles: [],
                        template: '\n      <div *ngIf="!templates.treeNodeWrapperTemplate" class="node-wrapper" [style.padding-left]="node.getNodePadding()">\n        <tree-node-checkbox *ngIf="node.options.useCheckbox" [node]="node"></tree-node-checkbox>\n        <tree-node-expander [node]="node"></tree-node-expander>\n        <div class="node-content-wrapper"\n          [class.node-content-wrapper-active]="node.isActive"\n          [class.node-content-wrapper-focused]="node.isFocused"\n          (click)="node.mouseAction(\'click\', $event)"\n          (dblclick)="node.mouseAction(\'dblClick\', $event)"\n          (contextmenu)="node.mouseAction(\'contextMenu\', $event)"\n          (treeDrop)="node.onDrop($event)"\n          (treeDropDragOver)="node.mouseAction(\'dragOver\', $event)"\n          (treeDropDragLeave)="node.mouseAction(\'dragLeave\', $event)"\n          (treeDropDragEnter)="node.mouseAction(\'dragEnter\', $event)"\n          [treeAllowDrop]="node.allowDrop"\n          [allowDragoverStyling]="node.allowDragoverStyling()"\n          [treeDrag]="node"\n          [treeDragEnabled]="node.allowDrag()">\n\n          <tree-node-content [node]="node" [index]="index" [template]="templates.treeNodeTemplate">\n          </tree-node-content>\n        </div>\n      </div>\n      <ng-container \n        [ngTemplateOutlet]="templates.treeNodeWrapperTemplate" \n        [ngTemplateOutletContext]="{ $implicit: node, node: node, index: index, templates: templates }">\n      </ng-container>\n    '
                    }), a("design:paramtypes", [])], t)
                }()
        },
        "Of+w": function(t, e, n) {
            var r = n("Cwc5")(n("Kz5y"), "WeakMap");
            t.exports = r
        },
        "P/G1": function(t, e, n) {
            var r = n("JmpY"),
                o = n("7GkX");
            t.exports = function(t) {
                return null == t ? [] : r(t, o(t))
            }
        },
        P4Tr: function(t, e, n) {
            var r = n("heNW"),
                o = n("EA7m"),
                i = n("4DFU"),
                a = n("JBE3"),
                s = o((function(t) {
                    return t.push(void 0, i), r(a, void 0, t)
                }));
            t.exports = s
        },
        Puqe: function(t, e, n) {
            var r = n("eUgh"),
                o = n("OBhP"),
                i = n("S7Xf"),
                a = n("4uTw"),
                s = n("juv8"),
                l = n("4Oe1"),
                u = n("xs/l"),
                c = n("G6z8"),
                d = u((function(t, e) {
                    var n = {};
                    if (null == t) return n;
                    var u = !1;
                    e = r(e, (function(e) {
                        return e = a(e, t), u || (u = e.length > 1), e
                    })), s(t, c(t), n), u && (n = o(n, 7, l));
                    for (var d = e.length; d--;) i(n, e[d]);
                    return n
                }));
            t.exports = d
        },
        Q1l4: function(t, e) {
            t.exports = function(t, e) {
                var n = -1,
                    r = t.length;
                for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
                return e
            }
        },
        QIyF: function(t, e, n) {
            var r = n("Kz5y");
            t.exports = function() {
                return r.Date.now()
            }
        },
        QcOe: function(t, e, n) {
            var r = n("GoyQ"),
                o = n("6sVZ"),
                i = n("7Ix3"),
                a = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                if (!r(t)) return i(t);
                var e = o(t),
                    n = [];
                for (var s in t)("constructor" != s || !e && a.call(t, s)) && n.push(s);
                return n
            }
        },
        QkVE: function(t, e, n) {
            var r = n("EpBk");
            t.exports = function(t, e) {
                var n = t.__data__;
                return r(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
            }
        },
        QoRX: function(t, e) {
            t.exports = function(t, e) {
                for (var n = -1, r = null == t ? 0 : t.length; ++n < r;)
                    if (e(t[n], n, t)) return !0;
                return !1
            }
        },
        QqLw: function(t, e, n) {
            var r = n("tadb"),
                o = n("ebwN"),
                i = n("HOxn"),
                a = n("yGk4"),
                s = n("Of+w"),
                l = n("NykK"),
                u = n("3Fdi"),
                c = u(r),
                d = u(o),
                h = u(i),
                f = u(a),
                p = u(s),
                g = l;
            (r && "[object DataView]" != g(new r(new ArrayBuffer(1))) || o && "[object Map]" != g(new o) || i && "[object Promise]" != g(i.resolve()) || a && "[object Set]" != g(new a) || s && "[object WeakMap]" != g(new s)) && (g = function(t) {
                var e = l(t),
                    n = "[object Object]" == e ? t.constructor : void 0,
                    r = n ? u(n) : "";
                if (r) switch (r) {
                    case c:
                        return "[object DataView]";
                    case d:
                        return "[object Map]";
                    case h:
                        return "[object Promise]";
                    case f:
                        return "[object Set]";
                    case p:
                        return "[object WeakMap]"
                }
                return e
            }), t.exports = g
        },
        "R/W3": function(t, e, n) {
            var r = n("KwMD"),
                o = n("2ajD"),
                i = n("CZoQ");
            t.exports = function(t, e, n) {
                return e == e ? i(t, e, n) : r(t, o, n)
            }
        },
        RBan: function(t, e) {
            t.exports = function(t) {
                var e = null == t ? 0 : t.length;
                return e ? t[e - 1] : void 0
            }
        },
        S7Xf: function(t, e, n) {
            var r = n("4uTw"),
                o = n("RBan"),
                i = n("gpbi"),
                a = n("9Nap");
            t.exports = function(t, e) {
                return e = r(e, t), null == (t = i(t, e)) || delete t[a(o(e))]
            }
        },
        SKAX: function(t, e, n) {
            var r = n("JC6p"),
                o = n("lQqw")(r);
            t.exports = o
        },
        SfRM: function(t, e, n) {
            var r = n("YESw");
            t.exports = function() {
                this.__data__ = r ? r(null) : {}, this.size = 0
            }
        },
        Sxd8: function(t, e, n) {
            var r = n("ZCgT");
            t.exports = function(t) {
                var e = r(t),
                    n = e % 1;
                return e == e ? n ? e - n : e : 0
            }
        },
        T1AV: function(t, e, n) {
            var r = n("t2Dn"),
                o = n("5Tg0"),
                i = n("yP5f"),
                a = n("Q1l4"),
                s = n("+iFO"),
                l = n("03A+"),
                u = n("Z0cm"),
                c = n("3L66"),
                d = n("DSRE"),
                h = n("lSCD"),
                f = n("GoyQ"),
                p = n("YO3V"),
                g = n("c6wG"),
                v = n("itsj"),
                y = n("jeLo");
            t.exports = function(t, e, n, b, m, x, w) {
                var _ = v(t, n),
                    O = v(e, n),
                    k = w.get(O);
                if (k) r(t, n, k);
                else {
                    var S = x ? x(_, O, n + "", t, e, w) : void 0,
                        C = void 0 === S;
                    if (C) {
                        var A = u(O),
                            M = !A && d(O),
                            j = !A && !M && g(O);
                        S = O, A || M || j ? u(_) ? S = _ : c(_) ? S = a(_) : M ? (C = !1, S = o(O, !0)) : j ? (C = !1, S = i(O, !0)) : S = [] : p(O) || l(O) ? (S = _, l(_) ? S = y(_) : f(_) && !h(_) || (S = s(O))) : C = !1
                    }
                    C && (w.set(O, S), m(S, O, b, x, w), w.delete(O)), r(t, n, S)
                }
            }
        },
        TNUL: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return s
            }));
            var r = n("CcnG"),
                o = n("f95s"),
                i = function(t, e, n, r) {
                    var o, i = arguments.length,
                        a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, r);
                    else
                        for (var s = t.length - 1; s >= 0; s--)(o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
                    return i > 3 && a && Object.defineProperty(e, n, a), a
                },
                a = function(t, e) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
                },
                s = function() {
                    function t() {}
                    return i([Object(r.x)(), a("design:type", o.a)], t.prototype, "node", void 0), i([Object(r.x)(), a("design:type", Number)], t.prototype, "index", void 0), i([Object(r.x)(), a("design:type", Object)], t.prototype, "templates", void 0), i([Object(r.j)({
                        selector: "TreeNode, tree-node",
                        encapsulation: r.Z.None,
                        styles: [],
                        template: '\n    <ng-container *mobxAutorun="{dontDetach: true}">\n      <div\n        *ngIf="!templates.treeNodeFullTemplate"\n        [class]="node.getClass()"\n        [class.tree-node]="true"\n        [class.tree-node-expanded]="node.isExpanded && node.hasChildren"\n        [class.tree-node-collapsed]="node.isCollapsed && node.hasChildren"\n        [class.tree-node-leaf]="node.isLeaf"\n        [class.tree-node-active]="node.isActive"\n        [class.tree-node-focused]="node.isFocused"\n        >\n\n        <tree-node-drop-slot *ngIf="index === 0" [dropIndex]="node.index" [node]="node.parent"></tree-node-drop-slot>\n\n        <tree-node-wrapper [node]="node" [index]="index" [templates]="templates"></tree-node-wrapper>\n\n        <tree-node-children [node]="node" [templates]="templates"></tree-node-children>\n        <tree-node-drop-slot [dropIndex]="node.index + 1" [node]="node.parent"></tree-node-drop-slot>\n      </div>\n      <ng-container\n        [ngTemplateOutlet]="templates.treeNodeFullTemplate"\n        [ngTemplateOutletContext]="{ $implicit: node, node: node, index: index, templates: templates }">\n      </ng-container>\n    </ng-container>'
                    })], t)
                }()
        },
        TYy9: function(t, e, n) {
            var r = n("XGnz");
            t.exports = function(t) {
                return null != t && t.length ? r(t, 1) : []
            }
        },
        UB5X: function(t, e, n) {
            var r = n("NykK"),
                o = n("ExA7");
            t.exports = function(t) {
                return "number" == typeof t || o(t) && "[object Number]" == r(t)
            }
        },
        "UNi/": function(t, e) {
            t.exports = function(t, e) {
                for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
                return r
            }
        },
        UfWW: function(t, e, n) {
            var r = n("KwMD"),
                o = n("ut/Y"),
                i = n("Sxd8"),
                a = Math.max;
            t.exports = function(t, e, n) {
                var s = null == t ? 0 : t.length;
                if (!s) return -1;
                var l = null == n ? 0 : i(n);
                return l < 0 && (l = a(s + l, 0)), r(t, o(e, 3), l)
            }
        },
        V6Ve: function(t, e, n) {
            var r = n("kekF")(Object.keys, Object);
            t.exports = r
        },
        VOtZ: function(t, e, n) {
            var r = n("juv8"),
                o = n("MvSz");
            t.exports = function(t, e) {
                return r(t, o(t), e)
            }
        },
        VaNO: function(t, e) {
            t.exports = function(t) {
                return this.__data__.has(t)
            }
        },
        WFqU: function(t, e) {
            var n = "object" == typeof global && global && global.Object === Object && global;
            t.exports = n
        },
        WaXT: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return u
            }));
            var r = n("CcnG"),
                o = n("2vnA"),
                i = n("F+oH"),
                a = n("MP8s"),
                s = function(t, e, n, r) {
                    var o, i = arguments.length,
                        a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, r);
                    else
                        for (var s = t.length - 1; s >= 0; s--)(o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
                    return i > 3 && a && Object.defineProperty(e, n, a), a
                },
                l = function(t, e) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
                },
                u = function() {
                    function t() {
                        this._dispose = []
                    }
                    return Object.defineProperty(t.prototype, "nodes", {
                        get: function() {
                            return this._nodes
                        },
                        set: function(t) {
                            this.setNodes(t)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "marginTop", {
                        get: function() {
                            var t = this.viewportNodes && this.viewportNodes.length && this.viewportNodes[0];
                            return (t && t.parent ? t.position - t.parent.position - t.parent.getSelfHeight() : 0) + "px"
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.setNodes = function(t) {
                        this._nodes = t
                    }, t.prototype.ngOnInit = function() {
                        var t = this;
                        this.virtualScroll = this.treeModel.virtualScroll, this._dispose = [Object(o.e)((function() {
                            return t.virtualScroll.getViewportNodes(t.nodes).map((function(t) {
                                return t.index
                            }))
                        }), (function(e) {
                            t.viewportNodes = e.map((function(e) {
                                return t.nodes[e]
                            }))
                        }), {
                            compareStructural: !0,
                            fireImmediately: !0
                        }), Object(o.e)((function() {
                            return t.nodes
                        }), (function(e) {
                            t.viewportNodes = t.virtualScroll.getViewportNodes(e)
                        }))]
                    }, t.prototype.ngOnDestroy = function() {
                        this._dispose.forEach((function(t) {
                            return t()
                        }))
                    }, t.prototype.trackNode = function(t, e) {
                        return e.id
                    }, s([Object(r.x)(), l("design:type", Object), l("design:paramtypes", [Object])], t.prototype, "nodes", null), s([Object(r.x)(), l("design:type", a.a)], t.prototype, "treeModel", void 0), s([i.d, l("design:type", Object)], t.prototype, "_nodes", void 0), s([Object(r.x)(), l("design:type", Object)], t.prototype, "templates", void 0), s([i.d, l("design:type", Array)], t.prototype, "viewportNodes", void 0), s([i.c, l("design:type", String), l("design:paramtypes", [])], t.prototype, "marginTop", null), s([i.b, l("design:type", Function), l("design:paramtypes", [Object]), l("design:returntype", void 0)], t.prototype, "setNodes", null), s([Object(r.j)({
                        selector: "tree-node-collection",
                        encapsulation: r.Z.None,
                        template: '\n    <ng-container *mobxAutorun="{dontDetach: true}">\n      <div\n        [style.margin-top]="marginTop">\n        <tree-node\n          *ngFor="let node of viewportNodes; let i = index; trackBy: trackNode"\n          [node]="node"\n          [index]="i"\n          [templates]="templates">\n        </tree-node>\n      </div>\n    </ng-container>\n  '
                    })], t)
                }()
        },
        WwFo: function(t, e, n) {
            var r = n("juv8"),
                o = n("7GkX");
            t.exports = function(t, e) {
                return t && r(e, o(e), t)
            }
        },
        "X+05": function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return r
            }));
            var r = {
                toggleExpanded: "toggleExpanded",
                activate: "activate",
                deactivate: "deactivate",
                nodeActivate: "nodeActivate",
                nodeDeactivate: "nodeDeactivate",
                select: "select",
                deselect: "deselect",
                focus: "focus",
                blur: "blur",
                initialized: "initialized",
                updateData: "updateData",
                moveNode: "moveNode",
                copyNode: "copyNode",
                event: "event",
                loadNodeChildren: "loadNodeChildren",
                changeFilter: "changeFilter",
                stateChange: "stateChange"
            }
        },
        XGnz: function(t, e, n) {
            var r = n("CH3K"),
                o = n("BiGR");
            t.exports = function t(e, n, i, a, s) {
                var l = -1,
                    u = e.length;
                for (i || (i = o), s || (s = []); ++l < u;) {
                    var c = e[l];
                    n > 0 && i(c) ? n > 1 ? t(c, n - 1, i, a, s) : r(s, c) : a || (s[s.length] = c)
                }
                return s
            }
        },
        XKAG: function(t, e, n) {
            var r = n("ut/Y"),
                o = n("MMmD"),
                i = n("7GkX");
            t.exports = function(t) {
                return function(e, n, a) {
                    var s = Object(e);
                    if (!o(e)) {
                        var l = r(n, 3);
                        e = i(e), n = function(t) {
                            return l(s[t], t, s)
                        }
                    }
                    var u = t(e, n, a);
                    return u > -1 ? s[l ? e[u] : u] : void 0
                }
            }
        },
        XYm9: function(t, e, n) {
            var r = n("+K+b");
            t.exports = function(t, e) {
                var n = e ? r(t.buffer) : t.buffer;
                return new t.constructor(n, t.byteOffset, t.byteLength)
            }
        },
        Xi7e: function(t, e, n) {
            var r = n("KMkd"),
                o = n("adU4"),
                i = n("tMB7"),
                a = n("+6XX"),
                s = n("Z8oC");

            function l(t) {
                var e = -1,
                    n = null == t ? 0 : t.length;
                for (this.clear(); ++e < n;) {
                    var r = t[e];
                    this.set(r[0], r[1])
                }
            }
            l.prototype.clear = r, l.prototype.delete = o, l.prototype.get = i, l.prototype.has = a, l.prototype.set = s, t.exports = l
        },
        YESw: function(t, e, n) {
            var r = n("Cwc5")(Object, "create");
            t.exports = r
        },
        YO3V: function(t, e, n) {
            var r = n("NykK"),
                o = n("LcsW"),
                i = n("ExA7"),
                a = Function.prototype,
                s = Object.prototype,
                l = a.toString,
                u = s.hasOwnProperty,
                c = l.call(Object);
            t.exports = function(t) {
                if (!i(t) || "[object Object]" != r(t)) return !1;
                var e = o(t);
                if (null === e) return !0;
                var n = u.call(e, "constructor") && e.constructor;
                return "function" == typeof n && n instanceof n && l.call(n) == c
            }
        },
        Z0cm: function(t, e) {
            var n = Array.isArray;
            t.exports = n
        },
        Z8oC: function(t, e, n) {
            var r = n("y1pI");
            t.exports = function(t, e) {
                var n = this.__data__,
                    o = r(n, t);
                return o < 0 ? (++this.size, n.push([t, e])) : n[o][1] = e, this
            }
        },
        ZCgT: function(t, e, n) {
            var r = n("tLB3");
            t.exports = function(t) {
                return t ? (t = r(t)) === 1 / 0 || t === -1 / 0 ? 17976931348623157e292 * (t < 0 ? -1 : 1) : t == t ? t : 0 : 0 === t ? t : 0
            }
        },
        ZCpW: function(t, e, n) {
            var r = n("lm/5"),
                o = n("O7RO"),
                i = n("IOzZ");
            t.exports = function(t) {
                var e = o(t);
                return 1 == e.length && e[0][2] ? i(e[0][0], e[0][1]) : function(n) {
                    return n === t || r(n, t, e)
                }
            }
        },
        ZWtO: function(t, e, n) {
            var r = n("4uTw"),
                o = n("9Nap");
            t.exports = function(t, e) {
                for (var n = 0, i = (e = r(e, t)).length; null != t && n < i;) t = t[o(e[n++])];
                return n && n == i ? t : void 0
            }
        },
        ZhuC: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return s
            }));
            var r = n("CcnG"),
                o = n("f95s"),
                i = function(t, e, n, r) {
                    var o, i = arguments.length,
                        a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, r);
                    else
                        for (var s = t.length - 1; s >= 0; s--)(o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
                    return i > 3 && a && Object.defineProperty(e, n, a), a
                },
                a = function(t, e) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
                },
                s = function() {
                    function t() {}
                    return i([Object(r.x)(), a("design:type", r.U)], t.prototype, "template", void 0), i([Object(r.x)(), a("design:type", o.a)], t.prototype, "node", void 0), i([Object(r.j)({
                        encapsulation: r.Z.None,
                        selector: "tree-loading-component",
                        template: '\n    <span *ngIf="!template">loading...</span>\n    <ng-container\n      [ngTemplateOutlet]="template"\n      [ngTemplateOutletContext]="{ $implicit: node }">\n    </ng-container>\n  '
                    })], t)
                }()
        },
        ZirO: function(t, e) {
            t.exports = function(t, e) {
                for (var n = -1, r = null == t ? 0 : t.length; ++n < r;)
                    if (!e(t[n], n, t)) return !1;
                return !0
            }
        },
        Zseb: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return y
            })), n.d(e, "b", (function() {
                return b
            })), n.d(e, "c", (function() {
                return g
            }));
            var r = n("CcnG"),
                o = n("mrSG"),
                i = n("MO+k"),
                a = n("26FU"),
                s = n("LvDl"),
                l = [
                    [255, 99, 132],
                    [54, 162, 235],
                    [255, 206, 86],
                    [231, 233, 237],
                    [75, 192, 192],
                    [151, 187, 205],
                    [220, 220, 220],
                    [247, 70, 74],
                    [70, 191, 189],
                    [253, 180, 92],
                    [148, 159, 177],
                    [77, 83, 96]
                ];

            function u(t, e) {
                return "rgba(" + t.concat(e).join(",") + ")"
            }

            function c(t, e) {
                return Math.floor(Math.random() * (e - t + 1)) + t
            }

            function d(t) {
                return {
                    backgroundColor: t.map((function(t) {
                        return u(t, .6)
                    })),
                    borderColor: t.map((function() {
                        return "#fff"
                    })),
                    pointBackgroundColor: t.map((function(t) {
                        return u(t, 1)
                    })),
                    pointBorderColor: t.map((function() {
                        return "#fff"
                    })),
                    pointHoverBackgroundColor: t.map((function(t) {
                        return u(t, 1)
                    })),
                    pointHoverBorderColor: t.map((function(t) {
                        return u(t, 1)
                    }))
                }
            }

            function h() {
                return [c(0, 255), c(0, 255), c(0, 255)]
            }

            function f(t) {
                return l[t] || h()
            }

            function p(t) {
                for (var e = new Array(t), n = 0; n < t; n++) e[n] = l[n] || h();
                return e
            }
            var g = function() {
                    function t() {
                        this.pColorschemesOptions = {}, this.colorschemesOptions = new a.a({})
                    }
                    return t.prototype.setColorschemesOptions = function(t) {
                        this.pColorschemesOptions = t, this.colorschemesOptions.next(t)
                    }, t.prototype.getColorschemesOptions = function() {
                        return this.pColorschemesOptions
                    }, t.ngInjectableDef = Object(r.dc)({
                        factory: function() {
                            return new t
                        },
                        token: t,
                        providedIn: "root"
                    }), t
                }(),
                v = function() {
                    var t = {
                        Default: 0,
                        Update: 1,
                        Refresh: 2
                    };
                    return t[t.Default] = "Default", t[t.Update] = "Update", t[t.Refresh] = "Refresh", t
                }(),
                y = function() {
                    function t(t, e) {
                        this.element = t, this.themeService = e, this.options = {}, this.chartClick = new r.q, this.chartHover = new r.q, this.old = {
                            dataExists: !1,
                            dataLength: 0,
                            datasetsExists: !1,
                            datasetsLength: 0,
                            datasetsDataObjects: [],
                            datasetsDataLengths: [],
                            colorsExists: !1,
                            colors: [],
                            labelsExist: !1,
                            labels: [],
                            legendExists: !1,
                            legend: {}
                        }, this.subs = []
                    }
                    return t.registerPlugin = function(t) {
                        i.Chart.plugins.register(t)
                    }, t.unregisterPlugin = function(t) {
                        i.Chart.plugins.unregister(t)
                    }, t.prototype.ngOnInit = function() {
                        var t = this;
                        this.ctx = this.element.nativeElement.getContext("2d"), this.refresh(), this.subs.push(this.themeService.colorschemesOptions.subscribe((function(e) {
                            return t.themeChanged(e)
                        })))
                    }, t.prototype.themeChanged = function(t) {
                        this.refresh()
                    }, t.prototype.ngDoCheck = function() {
                        var t = this;
                        if (this.chart) {
                            var e = v.Default,
                                n = function(t) {
                                    e = t > e ? t : e
                                };
                            switch (!!this.data !== this.old.dataExists && (this.propagateDataToDatasets(this.data), this.old.dataExists = !!this.data, n(v.Update)), this.data && this.data.length !== this.old.dataLength && (this.old.dataLength = this.data && this.data.length || 0, n(v.Update)), !!this.datasets !== this.old.datasetsExists && (this.old.datasetsExists = !!this.datasets, n(v.Update)), this.datasets && this.datasets.length !== this.old.datasetsLength && (this.old.datasetsLength = this.datasets && this.datasets.length || 0, n(v.Update)), this.datasets && this.datasets.filter((function(e, n) {
                                    return e.data !== t.old.datasetsDataObjects[n]
                                })).length && (this.old.datasetsDataObjects = this.datasets.map((function(t) {
                                    return t.data
                                })), n(v.Update)), this.datasets && this.datasets.filter((function(e, n) {
                                    return e.data.length !== t.old.datasetsDataLengths[n]
                                })).length && (this.old.datasetsDataLengths = this.datasets.map((function(t) {
                                    return t.data.length
                                })), n(v.Update)), !!this.colors !== this.old.colorsExists && (this.old.colorsExists = !!this.colors, this.updateColors(), n(v.Update)), this.colors && this.colors.filter((function(e, n) {
                                    return !t.colorsEqual(e, t.old.colors[n])
                                })).length && (this.old.colors = this.colors.map((function(e) {
                                    return t.copyColor(e)
                                })), this.updateColors(), n(v.Update)), !!this.labels !== this.old.labelsExist && (this.old.labelsExist = !!this.labels, n(v.Update)), this.labels && this.labels.filter((function(e, n) {
                                    return !t.labelsEqual(e, t.old.labels[n])
                                })).length && (this.old.labels = this.labels.map((function(e) {
                                    return t.copyLabel(e)
                                })), n(v.Update)), !!this.options.legend !== this.old.legendExists && (this.old.legendExists = !!this.options.legend, n(v.Refresh)), this.options.legend && this.options.legend.position !== this.old.legend.position && (this.old.legend.position = this.options.legend.position, n(v.Refresh)), e) {
                                case v.Default:
                                    break;
                                case v.Update:
                                    this.update();
                                    break;
                                case v.Refresh:
                                    this.refresh()
                            }
                        }
                    }, t.prototype.copyLabel = function(t) {
                        return Array.isArray(t) ? Object(o.__spread)(t) : t
                    }, t.prototype.labelsEqual = function(t, e) {
                        return Array.isArray(t) === Array.isArray(e) && (Array.isArray(t) || t === e) && (!Array.isArray(t) || t.length === e.length) && (!Array.isArray(t) || 0 === t.filter((function(t, n) {
                            return t !== e[n]
                        })).length)
                    }, t.prototype.copyColor = function(t) {
                        return {
                            backgroundColor: t.backgroundColor,
                            borderWidth: t.borderWidth,
                            borderColor: t.borderColor,
                            borderCapStyle: t.borderCapStyle,
                            borderDash: t.borderDash,
                            borderDashOffset: t.borderDashOffset,
                            borderJoinStyle: t.borderJoinStyle,
                            pointBorderColor: t.pointBorderColor,
                            pointBackgroundColor: t.pointBackgroundColor,
                            pointBorderWidth: t.pointBorderWidth,
                            pointRadius: t.pointRadius,
                            pointHoverRadius: t.pointHoverRadius,
                            pointHitRadius: t.pointHitRadius,
                            pointHoverBackgroundColor: t.pointHoverBackgroundColor,
                            pointHoverBorderColor: t.pointHoverBorderColor,
                            pointHoverBorderWidth: t.pointHoverBorderWidth,
                            pointStyle: t.pointStyle,
                            hoverBackgroundColor: t.hoverBackgroundColor,
                            hoverBorderColor: t.hoverBorderColor,
                            hoverBorderWidth: t.hoverBorderWidth
                        }
                    }, t.prototype.colorsEqual = function(t, e) {
                        return !t == !e && (!t || t.backgroundColor === e.backgroundColor && t.borderWidth === e.borderWidth && t.borderColor === e.borderColor && t.borderCapStyle === e.borderCapStyle && t.borderDash === e.borderDash && t.borderDashOffset === e.borderDashOffset && t.borderJoinStyle === e.borderJoinStyle && t.pointBorderColor === e.pointBorderColor && t.pointBackgroundColor === e.pointBackgroundColor && t.pointBorderWidth === e.pointBorderWidth && t.pointRadius === e.pointRadius && t.pointHoverRadius === e.pointHoverRadius && t.pointHitRadius === e.pointHitRadius && t.pointHoverBackgroundColor === e.pointHoverBackgroundColor && t.pointHoverBorderColor === e.pointHoverBorderColor && t.pointHoverBorderWidth === e.pointHoverBorderWidth && t.pointStyle === e.pointStyle && t.hoverBackgroundColor === e.hoverBackgroundColor && t.hoverBorderColor === e.hoverBorderColor && t.hoverBorderWidth === e.hoverBorderWidth)
                    }, t.prototype.updateColors = function() {
                        var t = this;
                        this.datasets.forEach((function(e, n) {
                            t.colors && t.colors[n] ? Object.assign(e, t.colors[n]) : Object.assign(e, function(t, e, n) {
                                if ("pie" === t || "doughnut" === t) return d(p(n));
                                if ("polarArea" === t) return {
                                    backgroundColor: (r = p(n)).map((function(t) {
                                        return u(t, .6)
                                    })),
                                    borderColor: r.map((function(t) {
                                        return u(t, 1)
                                    })),
                                    hoverBackgroundColor: r.map((function(t) {
                                        return u(t, .8)
                                    })),
                                    hoverBorderColor: r.map((function(t) {
                                        return u(t, 1)
                                    }))
                                };
                                var r;
                                if ("line" === t || "radar" === t) return function(t) {
                                    return {
                                        backgroundColor: u(t, .4),
                                        borderColor: u(t, 1),
                                        pointBackgroundColor: u(t, 1),
                                        pointBorderColor: "#fff",
                                        pointHoverBackgroundColor: "#fff",
                                        pointHoverBorderColor: u(t, .8)
                                    }
                                }(f(e));
                                if ("bar" === t || "horizontalBar" === t) return function(t) {
                                    return {
                                        backgroundColor: u(t, .6),
                                        borderColor: u(t, 1),
                                        hoverBackgroundColor: u(t, .8),
                                        hoverBorderColor: u(t, 1)
                                    }
                                }(f(e));
                                if ("bubble" === t) return d(p(n));
                                if ("scatter" === t) return d(p(n));
                                throw new Error("getColors - Unsupported chart type " + t)
                            }(t.chartType, n, e.data.length), Object(o.__assign)({}, e))
                        }))
                    }, t.prototype.ngOnChanges = function(t) {
                        var e = v.Default,
                            n = function(t) {
                                e = t > e ? t : e
                            };
                        switch (t.hasOwnProperty("data") && t.data.currentValue && (this.propagateDataToDatasets(t.data.currentValue), n(v.Update)), t.hasOwnProperty("datasets") && t.datasets.currentValue && (this.propagateDatasetsToData(t.datasets.currentValue), n(v.Update)), t.hasOwnProperty("labels") && (this.chart && (this.chart.data.labels = t.labels.currentValue), n(v.Update)), t.hasOwnProperty("legend") && (this.chart && (this.chart.config.options.legend.display = t.legend.currentValue, this.chart.generateLegend()), n(v.Update)), t.hasOwnProperty("options") && n(v.Refresh), e) {
                            case v.Update:
                                this.update();
                                break;
                            case v.Refresh:
                            case v.Default:
                                this.refresh()
                        }
                    }, t.prototype.ngOnDestroy = function() {
                        this.chart && (this.chart.destroy(), this.chart = void 0), this.subs.forEach((function(t) {
                            return t.unsubscribe()
                        }))
                    }, t.prototype.update = function(t, e) {
                        if (this.chart) return this.chart.update(t, e)
                    }, t.prototype.hideDataset = function(t, e) {
                        this.chart.getDatasetMeta(t).hidden = e, this.chart.update()
                    }, t.prototype.isDatasetHidden = function(t) {
                        return this.chart.getDatasetMeta(t).hidden
                    }, t.prototype.toBase64Image = function() {
                        return this.chart.toBase64Image()
                    }, t.prototype.getChartConfiguration = function() {
                        var t = this,
                            e = this.getDatasets(),
                            n = Object.assign({}, this.options);
                        !1 === this.legend && (n.legend = {
                            display: !1
                        }), n.hover = n.hover || {}, n.hover.onHover || (n.hover.onHover = function(e, n) {
                            n && !n.length || t.chartHover.emit({
                                event: e,
                                active: n
                            })
                        }), n.onClick || (n.onClick = function(e, n) {
                            t.chartClick.emit({
                                event: e,
                                active: n
                            })
                        });
                        var r = this.smartMerge(n, this.themeService.getColorschemesOptions());
                        return {
                            type: this.chartType,
                            data: {
                                labels: this.labels || [],
                                datasets: e
                            },
                            plugins: this.plugins,
                            options: r
                        }
                    }, t.prototype.getChartBuilder = function(t) {
                        var e = this.getChartConfiguration();
                        return new i.Chart(t, e)
                    }, t.prototype.smartMerge = function(t, e, n) {
                        var r = this;
                        if (void 0 === n && (n = 0), 0 === n && (t = Object(s.cloneDeep)(t)), Object.keys(e).forEach((function(o) {
                                if (Array.isArray(e[o])) {
                                    var i = t[o];
                                    i && i.forEach((function(t) {
                                        r.smartMerge(t, e[o][0], n + 1)
                                    }))
                                } else "object" == typeof e[o] ? (o in t || (t[o] = {}), r.smartMerge(t[o], e[o], n + 1)) : t[o] = e[o]
                            })), 0 === n) return t
                    }, t.prototype.isMultiLineLabel = function(t) {
                        return Array.isArray(t)
                    }, t.prototype.joinLabel = function(t) {
                        return t ? this.isMultiLineLabel(t) ? t.join(" ") : t : null
                    }, t.prototype.propagateDatasetsToData = function(t) {
                        this.data = this.datasets.map((function(t) {
                            return t.data
                        })), this.chart && (this.chart.data.datasets = t), this.updateColors()
                    }, t.prototype.propagateDataToDatasets = function(t) {
                        var e = this;
                        this.isMultiDataSet(t) ? this.datasets && t.length === this.datasets.length ? this.datasets.forEach((function(e, n) {
                            e.data = t[n]
                        })) : (this.datasets = t.map((function(t, n) {
                            return {
                                data: t,
                                label: e.joinLabel(e.labels[n]) || "Label " + n
                            }
                        })), this.chart && (this.chart.data.datasets = this.datasets)) : this.datasets ? (this.datasets[0].data = t, this.datasets.splice(1)) : (this.datasets = [{
                            data: t
                        }], this.chart && (this.chart.data.datasets = this.datasets)), this.updateColors()
                    }, t.prototype.isMultiDataSet = function(t) {
                        return Array.isArray(t[0])
                    }, t.prototype.getDatasets = function() {
                        if (!this.datasets && !this.data) throw new Error("ng-charts configuration error, data or datasets field are required to render chart " + this.chartType);
                        return this.datasets ? (this.propagateDatasetsToData(this.datasets), this.datasets) : this.data ? (this.propagateDataToDatasets(this.data), this.datasets) : void 0
                    }, t.prototype.refresh = function() {
                        this.chart && (this.chart.destroy(), this.chart = void 0), this.ctx && (this.chart = this.getChartBuilder(this.ctx))
                    }, t
                }(),
                b = function() {
                    return function() {}
                }()
        },
        adU4: function(t, e, n) {
            var r = n("y1pI"),
                o = Array.prototype.splice;
            t.exports = function(t) {
                var e = this.__data__,
                    n = r(e, t);
                return !(n < 0 || (n == e.length - 1 ? e.pop() : o.call(e, n, 1), --this.size, 0))
            }
        },
        afOK: function(t, e, n) {
            t.exports = n("pZt1")
        },
        b2z7: function(t, e) {
            var n = /\w*$/;
            t.exports = function(t) {
                var e = new t.constructor(t.source, n.exec(t));
                return e.lastIndex = t.lastIndex, e
            }
        },
        b80T: function(t, e, n) {
            var r = n("UNi/"),
                o = n("03A+"),
                i = n("Z0cm"),
                a = n("DSRE"),
                s = n("wJg7"),
                l = n("c6wG"),
                u = Object.prototype.hasOwnProperty;
            t.exports = function(t, e) {
                var n = i(t),
                    c = !n && o(t),
                    d = !n && !c && a(t),
                    h = !n && !c && !d && l(t),
                    f = n || c || d || h,
                    p = f ? r(t.length, String) : [],
                    g = p.length;
                for (var v in t) !e && !u.call(t, v) || f && ("length" == v || d && ("offset" == v || "parent" == v) || h && ("buffer" == v || "byteLength" == v || "byteOffset" == v) || s(v, g)) || p.push(v);
                return p
            }
        },
        c6wG: function(t, e, n) {
            var r = n("dD9F"),
                o = n("sEf8"),
                i = n("mdPL"),
                a = i && i.isTypedArray,
                s = a ? o(a) : r;
            t.exports = s
        },
        "cq/+": function(t, e, n) {
            var r = n("mc0g")();
            t.exports = r
        },
        cvCv: function(t, e) {
            t.exports = function(t) {
                return function() {
                    return t
                }
            }
        },
        dApe: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return u
            }));
            var r = n("CcnG"),
                o = n("2vnA"),
                i = n("MP8s"),
                a = n("X+05"),
                s = function(t, e, n, r) {
                    var o, i = arguments.length,
                        a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, r);
                    else
                        for (var s = t.length - 1; s >= 0; s--)(o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
                    return i > 3 && a && Object.defineProperty(e, n, a), a
                },
                l = function(t, e) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
                },
                u = function() {
                    function t(t) {
                        var e = this;
                        this.treeModel = t, this.yBlocks = 0, this.x = 0, this.viewportHeight = null, this.viewport = null, t.virtualScroll = this, this._dispose = [Object(o.b)((function() {
                            return e.fixScroll()
                        }))]
                    }
                    return Object.defineProperty(t.prototype, "y", {
                        get: function() {
                            return 150 * this.yBlocks
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "totalHeight", {
                        get: function() {
                            return this.treeModel.virtualRoot ? this.treeModel.virtualRoot.height : 0
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.fireEvent = function(t) {
                        this.treeModel.fireEvent(t)
                    }, t.prototype.init = function() {
                        var t = this,
                            e = this.recalcPositions.bind(this);
                        e(), this._dispose = this._dispose.concat([Object(o.e)((function() {
                            return t.treeModel.roots
                        }), e), Object(o.e)((function() {
                            return t.treeModel.expandedNodeIds
                        }), e), Object(o.e)((function() {
                            return t.treeModel.hiddenNodeIds
                        }), e)]), this.treeModel.subscribe(a.a.loadNodeChildren, e)
                    }, t.prototype.isEnabled = function() {
                        return this.treeModel.options.useVirtualScroll
                    }, t.prototype._setYBlocks = function(t) {
                        this.yBlocks = t
                    }, t.prototype.recalcPositions = function() {
                        this.treeModel.virtualRoot.height = this._getPositionAfter(this.treeModel.getVisibleRoots(), 0)
                    }, t.prototype._getPositionAfter = function(t, e) {
                        var n = this,
                            r = e;
                        return t.forEach((function(t) {
                            t.position = r, r = n._getPositionAfterNode(t, r)
                        })), r
                    }, t.prototype._getPositionAfterNode = function(t, e) {
                        var n = t.getSelfHeight() + e;
                        return t.children && t.isExpanded && (n = this._getPositionAfter(t.visibleChildren, n)), t.height = n - e, n
                    }, t.prototype.clear = function() {
                        this._dispose.forEach((function(t) {
                            return t()
                        }))
                    }, t.prototype.setViewport = function(t) {
                        Object.assign(this, {
                            viewport: t,
                            x: t.scrollLeft,
                            yBlocks: Math.round(t.scrollTop / 150),
                            viewportHeight: t.getBoundingClientRect ? t.getBoundingClientRect().height : 0
                        })
                    }, t.prototype.scrollIntoView = function(t, e, n) {
                        if (void 0 === n && (n = !0), t.options.scrollContainer) {
                            var r = t.options.scrollContainer,
                                o = r.getBoundingClientRect().height,
                                i = r.getBoundingClientRect().top,
                                a = this.viewport.getBoundingClientRect().top + t.position - i;
                            (e || a < r.scrollTop || a + t.getSelfHeight() > r.scrollTop + o) && (r.scrollTop = n ? a - o / 2 : a)
                        } else(e || t.position < this.y || t.position + t.getSelfHeight() > this.y + this.viewportHeight) && this.viewport && (this.viewport.scrollTop = n ? t.position - this.viewportHeight / 2 : t.position, this._setYBlocks(Math.floor(this.viewport.scrollTop / 150)))
                    }, t.prototype.getViewportNodes = function(t) {
                        var e = this;
                        if (!t) return [];
                        var n = t.filter((function(t) {
                            return !t.isHidden
                        }));
                        if (!this.isEnabled()) return n;
                        if (!this.viewportHeight || !n.length) return [];
                        var r = c(n, (function(t) {
                                return t.position + 500 > e.y || t.position + t.height > e.y
                            })),
                            o = c(n, (function(t) {
                                return t.position - 500 > e.y + e.viewportHeight
                            }), r),
                            i = [];
                        if (o - r > (1e3 + this.viewportHeight) / n[0].treeModel.options.options.nodeHeight) return [];
                        for (var a = r; a <= o; a++) i.push(n[a]);
                        return i
                    }, t.prototype.fixScroll = function() {
                        var t = Math.max(0, this.totalHeight - this.viewportHeight);
                        this.y < 0 && this._setYBlocks(0), this.y > t && this._setYBlocks(t / 150)
                    }, s([o.d, l("design:type", Object)], t.prototype, "yBlocks", void 0), s([o.d, l("design:type", Object)], t.prototype, "x", void 0), s([o.d, l("design:type", Object)], t.prototype, "viewportHeight", void 0), s([o.c, l("design:type", Object), l("design:paramtypes", [])], t.prototype, "y", null), s([o.c, l("design:type", Object), l("design:paramtypes", [])], t.prototype, "totalHeight", null), s([o.a, l("design:type", Function), l("design:paramtypes", [Object]), l("design:returntype", void 0)], t.prototype, "_setYBlocks", null), s([o.a, l("design:type", Function), l("design:paramtypes", []), l("design:returntype", void 0)], t.prototype, "recalcPositions", null), s([o.a, l("design:type", Function), l("design:paramtypes", [Object]), l("design:returntype", void 0)], t.prototype, "setViewport", null), s([o.a, l("design:type", Function), l("design:paramtypes", [Object, Object, Object]), l("design:returntype", void 0)], t.prototype, "scrollIntoView", null), s([Object(r.u)(), l("design:paramtypes", [i.a])], t)
                }();

            function c(t, e, n) {
                void 0 === n && (n = 0);
                for (var r = n, o = t.length - 1; r !== o;) {
                    var i = Math.floor((r + o) / 2);
                    e(t[i]) ? o = i : r = r === i ? o : i
                }
                return r
            }
        },
        dD9F: function(t, e, n) {
            var r = n("NykK"),
                o = n("shjB"),
                i = n("ExA7"),
                a = {};
            a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, t.exports = function(t) {
                return i(t) && o(t.length) && !!a[r(t)]
            }
        },
        dTAl: function(t, e, n) {
            var r = n("GoyQ"),
                o = Object.create,
                i = function() {
                    function t() {}
                    return function(e) {
                        if (!r(e)) return {};
                        if (o) return o(e);
                        t.prototype = e;
                        var n = new t;
                        return t.prototype = void 0, n
                    }
                }();
            t.exports = i
        },
        dt0z: function(t, e, n) {
            var r = n("zoYe");
            t.exports = function(t) {
                return null == t ? "" : r(t)
            }
        },
        e4Nc: function(t, e, n) {
            var r = n("fGT3"),
                o = n("k+1r"),
                i = n("JHgL"),
                a = n("pSRY"),
                s = n("H8j4");

            function l(t) {
                var e = -1,
                    n = null == t ? 0 : t.length;
                for (this.clear(); ++e < n;) {
                    var r = t[e];
                    this.set(r[0], r[1])
                }
            }
            l.prototype.clear = r, l.prototype.delete = o, l.prototype.get = i, l.prototype.has = a, l.prototype.set = s, t.exports = l
        },
        e5cp: function(t, e, n) {
            var r = n("fmRc"),
                o = n("or5M"),
                i = n("HDyB"),
                a = n("seXi"),
                s = n("QqLw"),
                l = n("Z0cm"),
                u = n("DSRE"),
                c = n("c6wG"),
                d = "[object Object]",
                h = Object.prototype.hasOwnProperty;
            t.exports = function(t, e, n, f, p, g) {
                var v = l(t),
                    y = l(e),
                    b = v ? "[object Array]" : s(t),
                    m = y ? "[object Array]" : s(e),
                    x = (b = "[object Arguments]" == b ? d : b) == d,
                    w = (m = "[object Arguments]" == m ? d : m) == d,
                    _ = b == m;
                if (_ && u(t)) {
                    if (!u(e)) return !1;
                    v = !0, x = !1
                }
                if (_ && !x) return g || (g = new r), v || c(t) ? o(t, e, n, f, p, g) : i(t, e, b, n, f, p, g);
                if (!(1 & n)) {
                    var O = x && h.call(t, "__wrapped__"),
                        k = w && h.call(e, "__wrapped__");
                    if (O || k) {
                        var S = O ? t.value() : t,
                            C = k ? e.value() : e;
                        return g || (g = new r), p(S, C, n, f, g)
                    }
                }
                return !!_ && (g || (g = new r), a(t, e, n, f, p, g))
            }
        },
        eUgh: function(t, e) {
            t.exports = function(t, e) {
                for (var n = -1, r = null == t ? 0 : t.length, o = Array(r); ++n < r;) o[n] = e(t[n], n, t);
                return o
            }
        },
        ebwN: function(t, e, n) {
            var r = n("Cwc5")(n("Kz5y"), "Map");
            t.exports = r
        },
        ekgI: function(t, e, n) {
            var r = n("YESw"),
                o = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                var e = this.__data__;
                return r ? void 0 !== e[t] : o.call(e, t)
            }
        },
        f95s: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return g
            }));
            var r = n("2vnA"),
                o = n("X+05"),
                i = n("afOK"),
                a = n.n(i),
                s = n("RBan"),
                l = n.n(s),
                u = n("MJIl"),
                c = n.n(u),
                d = n("Jlc5"),
                h = n.n(d),
                f = function(t, e, n, r) {
                    var o, i = arguments.length,
                        a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, r);
                    else
                        for (var s = t.length - 1; s >= 0; s--)(o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
                    return i > 3 && a && Object.defineProperty(e, n, a), a
                },
                p = function(t, e) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
                },
                g = function() {
                    function t(t, e, n, r) {
                        var o = this;
                        this.data = t, this.parent = e, this.treeModel = n, this.position = 0, this.allowDrop = function(t, e) {
                            return o.options.allowDrop(t, {
                                parent: o,
                                index: 0
                            }, e)
                        }, this.allowDragoverStyling = function() {
                            return o.options.allowDragoverStyling
                        }, null == this.id && (this.id = Math.floor(1e13 * Math.random())), this.index = r, this.getField("children") && this._initChildren(), this.autoLoadChildren()
                    }
                    return Object.defineProperty(t.prototype, "isHidden", {
                        get: function() {
                            return this.treeModel.isHidden(this)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isExpanded", {
                        get: function() {
                            return this.treeModel.isExpanded(this)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isActive", {
                        get: function() {
                            return this.treeModel.isActive(this)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isFocused", {
                        get: function() {
                            return this.treeModel.isNodeFocused(this)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isSelected", {
                        get: function() {
                            return this.isSelectable() ? this.treeModel.isSelected(this) : c()(this.children, (function(t) {
                                return t.isSelected
                            }))
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isAllSelected", {
                        get: function() {
                            return this.isSelectable() ? this.treeModel.isSelected(this) : h()(this.children, (function(t) {
                                return t.isAllSelected
                            }))
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isPartiallySelected", {
                        get: function() {
                            return this.isSelected && !this.isAllSelected
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "level", {
                        get: function() {
                            return this.parent ? this.parent.level + 1 : 0
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "path", {
                        get: function() {
                            return this.parent ? this.parent.path.concat([this.id]) : []
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "elementRef", {
                        get: function() {
                            throw "Element Ref is no longer supported since introducing virtual scroll\n\n      You may use a template to obtain a reference to the element"
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "originalNode", {
                        get: function() {
                            return this._originalNode
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "hasChildren", {
                        get: function() {
                            return !!(this.getField("hasChildren") || this.children && this.children.length > 0)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isCollapsed", {
                        get: function() {
                            return !this.isExpanded
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isLeaf", {
                        get: function() {
                            return !this.hasChildren
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isRoot", {
                        get: function() {
                            return this.parent.data.virtual
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "realParent", {
                        get: function() {
                            return this.isRoot ? null : this.parent
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "options", {
                        get: function() {
                            return this.treeModel.options
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.fireEvent = function(t) {
                        this.treeModel.fireEvent(t)
                    }, Object.defineProperty(t.prototype, "displayField", {
                        get: function() {
                            return this.getField("display")
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "id", {
                        get: function() {
                            return this.getField("id")
                        },
                        set: function(t) {
                            this.setField("id", t)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.getField = function(t) {
                        return this.data[this.options[t + "Field"]]
                    }, t.prototype.setField = function(t, e) {
                        this.data[this.options[t + "Field"]] = e
                    }, t.prototype._findAdjacentSibling = function(t, e) {
                        void 0 === e && (e = !1);
                        var n = this._getParentsChildren(e),
                            r = n.indexOf(this);
                        return n.length > r + t ? n[r + t] : null
                    }, t.prototype.findNextSibling = function(t) {
                        return void 0 === t && (t = !1), this._findAdjacentSibling(1, t)
                    }, t.prototype.findPreviousSibling = function(t) {
                        return void 0 === t && (t = !1), this._findAdjacentSibling(-1, t)
                    }, t.prototype.getVisibleChildren = function() {
                        return this.visibleChildren
                    }, Object.defineProperty(t.prototype, "visibleChildren", {
                        get: function() {
                            return (this.children || []).filter((function(t) {
                                return !t.isHidden
                            }))
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.getFirstChild = function(t) {
                        void 0 === t && (t = !1);
                        var e = t ? this.visibleChildren : this.children;
                        return a()(e || [])
                    }, t.prototype.getLastChild = function(t) {
                        void 0 === t && (t = !1);
                        var e = t ? this.visibleChildren : this.children;
                        return l()(e || [])
                    }, t.prototype.findNextNode = function(t, e) {
                        return void 0 === t && (t = !0), void 0 === e && (e = !1), t && this.isExpanded && this.getFirstChild(e) || this.findNextSibling(e) || this.parent && this.parent.findNextNode(!1, e)
                    }, t.prototype.findPreviousNode = function(t) {
                        void 0 === t && (t = !1);
                        var e = this.findPreviousSibling(t);
                        return e ? e._getLastOpenDescendant(t) : this.realParent
                    }, t.prototype._getLastOpenDescendant = function(t) {
                        void 0 === t && (t = !1);
                        var e = this.getLastChild(t);
                        return this.isCollapsed || !e ? this : e._getLastOpenDescendant(t)
                    }, t.prototype._getParentsChildren = function(t) {
                        return void 0 === t && (t = !1), this.parent && (t ? this.parent.getVisibleChildren() : this.parent.children) || []
                    }, t.prototype.getIndexInParent = function(t) {
                        return void 0 === t && (t = !1), this._getParentsChildren(t).indexOf(this)
                    }, t.prototype.isDescendantOf = function(t) {
                        return this === t || this.parent && this.parent.isDescendantOf(t)
                    }, t.prototype.getNodePadding = function() {
                        return this.options.levelPadding * (this.level - 1) + "px"
                    }, t.prototype.getClass = function() {
                        return [this.options.nodeClass(this), "tree-node-level-" + this.level].join(" ")
                    }, t.prototype.onDrop = function(t) {
                        this.mouseAction("drop", t.event, {
                            from: t.element,
                            to: {
                                parent: this,
                                index: 0,
                                dropOnNode: !0
                            }
                        })
                    }, t.prototype.allowDrag = function() {
                        return this.options.allowDrag(this)
                    }, t.prototype.loadNodeChildren = function() {
                        var t = this;
                        return this.options.getChildren ? Promise.resolve(this.options.getChildren(this)).then((function(e) {
                            e && (t.setField("children", e), t._initChildren(), t.options.useTriState && t.treeModel.isSelected(t) && t.setIsSelected(!0), t.children.forEach((function(t) {
                                t.getField("isExpanded") && t.hasChildren && t.expand()
                            })))
                        })).then((function() {
                            t.fireEvent({
                                eventName: o.a.loadNodeChildren,
                                node: t
                            })
                        })) : Promise.resolve()
                    }, t.prototype.expand = function() {
                        return this.isExpanded || this.toggleExpanded(), this
                    }, t.prototype.collapse = function() {
                        return this.isExpanded && this.toggleExpanded(), this
                    }, t.prototype.doForAll = function(t) {
                        var e = this;
                        Promise.resolve(t(this)).then((function() {
                            e.children && e.children.forEach((function(e) {
                                return e.doForAll(t)
                            }))
                        }))
                    }, t.prototype.expandAll = function() {
                        this.doForAll((function(t) {
                            return t.expand()
                        }))
                    }, t.prototype.collapseAll = function() {
                        this.doForAll((function(t) {
                            return t.collapse()
                        }))
                    }, t.prototype.ensureVisible = function() {
                        return this.realParent && (this.realParent.expand(), this.realParent.ensureVisible()), this
                    }, t.prototype.toggleExpanded = function() {
                        return this.setIsExpanded(!this.isExpanded), this
                    }, t.prototype.setIsExpanded = function(t) {
                        return this.hasChildren && this.treeModel.setExpandedNode(this, t), this
                    }, t.prototype.autoLoadChildren = function() {
                        var t = this;
                        this.handler = Object(r.e)((function() {
                            return t.isExpanded
                        }), (function(e) {
                            !t.children && t.hasChildren && e && t.loadNodeChildren()
                        }), {
                            fireImmediately: !0
                        })
                    }, t.prototype.dispose = function() {
                        this.children && this.children.forEach((function(t) {
                            return t.dispose()
                        })), this.handler && this.handler(), this.parent = null, this.children = null
                    }, t.prototype.setIsActive = function(t, e) {
                        return void 0 === e && (e = !1), this.treeModel.setActiveNode(this, t, e), t && this.focus(this.options.scrollOnActivate), this
                    }, t.prototype.isSelectable = function() {
                        return this.isLeaf || !this.children || !this.options.useTriState
                    }, t.prototype.setIsSelected = function(t) {
                        return this.isSelectable() ? this.treeModel.setSelectedNode(this, t) : this.visibleChildren.forEach((function(e) {
                            return e.setIsSelected(t)
                        })), this
                    }, t.prototype.toggleSelected = function() {
                        return this.setIsSelected(!this.isSelected), this
                    }, t.prototype.toggleActivated = function(t) {
                        return void 0 === t && (t = !1), this.setIsActive(!this.isActive, t), this
                    }, t.prototype.setActiveAndVisible = function(t) {
                        return void 0 === t && (t = !1), this.setIsActive(!0, t).ensureVisible(), setTimeout(this.scrollIntoView.bind(this)), this
                    }, t.prototype.scrollIntoView = function(t) {
                        void 0 === t && (t = !1), this.treeModel.virtualScroll.scrollIntoView(this, t)
                    }, t.prototype.focus = function(t) {
                        void 0 === t && (t = !0);
                        var e = this.treeModel.getFocusedNode();
                        return this.treeModel.setFocusedNode(this), t && this.scrollIntoView(), e && this.fireEvent({
                            eventName: o.a.blur,
                            node: e
                        }), this.fireEvent({
                            eventName: o.a.focus,
                            node: this
                        }), this
                    }, t.prototype.blur = function() {
                        var t = this.treeModel.getFocusedNode();
                        return this.treeModel.setFocusedNode(null), t && this.fireEvent({
                            eventName: o.a.blur,
                            node: this
                        }), this
                    }, t.prototype.setIsHidden = function(t) {
                        this.treeModel.setIsHidden(this, t)
                    }, t.prototype.hide = function() {
                        this.setIsHidden(!0)
                    }, t.prototype.show = function() {
                        this.setIsHidden(!1)
                    }, t.prototype.mouseAction = function(t, e, n) {
                        void 0 === n && (n = null), this.treeModel.setFocus(!0);
                        var r = this.options.actionMapping.mouse[t];
                        r && r(this.treeModel, this, e, n)
                    }, t.prototype.getSelfHeight = function() {
                        return this.options.nodeHeight(this)
                    }, t.prototype._initChildren = function() {
                        var e = this;
                        this.children = this.getField("children").map((function(n, r) {
                            return new t(n, e, e.treeModel, r)
                        }))
                    }, f([r.c, p("design:type", Object), p("design:paramtypes", [])], t.prototype, "isHidden", null), f([r.c, p("design:type", Object), p("design:paramtypes", [])], t.prototype, "isExpanded", null), f([r.c, p("design:type", Object), p("design:paramtypes", [])], t.prototype, "isActive", null), f([r.c, p("design:type", Object), p("design:paramtypes", [])], t.prototype, "isFocused", null), f([r.c, p("design:type", Object), p("design:paramtypes", [])], t.prototype, "isSelected", null), f([r.c, p("design:type", Object), p("design:paramtypes", [])], t.prototype, "isAllSelected", null), f([r.c, p("design:type", Object), p("design:paramtypes", [])], t.prototype, "isPartiallySelected", null), f([r.d, p("design:type", Array)], t.prototype, "children", void 0), f([r.d, p("design:type", Number)], t.prototype, "index", void 0), f([r.d, p("design:type", Object)], t.prototype, "position", void 0), f([r.d, p("design:type", Number)], t.prototype, "height", void 0), f([r.c, p("design:type", Number), p("design:paramtypes", [])], t.prototype, "level", null), f([r.c, p("design:type", Array), p("design:paramtypes", [])], t.prototype, "path", null), f([r.c, p("design:type", Object), p("design:paramtypes", [])], t.prototype, "visibleChildren", null), f([r.a, p("design:type", Function), p("design:paramtypes", [Object]), p("design:returntype", void 0)], t.prototype, "setIsSelected", null), f([r.a, p("design:type", Function), p("design:paramtypes", []), p("design:returntype", void 0)], t.prototype, "_initChildren", null), t
                }()
        },
        fGT3: function(t, e, n) {
            var r = n("4kuk"),
                o = n("Xi7e"),
                i = n("ebwN");
            t.exports = function() {
                this.size = 0, this.__data__ = {
                    hash: new r,
                    map: new(i || o),
                    string: new r
                }
            }
        },
        "fR/l": function(t, e, n) {
            var r = n("CH3K"),
                o = n("Z0cm");
            t.exports = function(t, e, n) {
                var i = e(t);
                return o(t) ? i : r(i, n(t))
            }
        },
        fmRc: function(t, e, n) {
            var r = n("Xi7e"),
                o = n("77Zs"),
                i = n("L8xA"),
                a = n("gCq4"),
                s = n("VaNO"),
                l = n("0Cz8");

            function u(t) {
                var e = this.__data__ = new r(t);
                this.size = e.size
            }
            u.prototype.clear = o, u.prototype.delete = i, u.prototype.get = a, u.prototype.has = s, u.prototype.set = l, t.exports = u
        },
        ftKO: function(t, e) {
            t.exports = function(t) {
                return this.__data__.set(t, "__lodash_hash_undefined__"), this
            }
        },
        fxL3: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return f
            }));
            var r = n("CcnG"),
                o = n("MP8s"),
                i = n("gk6K"),
                a = n("HIU9"),
                s = n("ijCd"),
                l = n.n(s),
                u = n("JZM8"),
                c = n.n(u),
                d = function(t, e, n, r) {
                    var o, i = arguments.length,
                        a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, r);
                    else
                        for (var s = t.length - 1; s >= 0; s--)(o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
                    return i > 3 && a && Object.defineProperty(e, n, a), a
                },
                h = function(t, e) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
                },
                f = function() {
                    function t(t, e) {
                        var n = this;
                        this.treeModel = t, this.treeDraggedElement = e, t.eventNames.forEach((function(t) {
                            return n[t] = new r.q
                        })), t.subscribeToState((function(t) {
                            return n.stateChange.emit(t)
                        }))
                    }
                    return Object.defineProperty(t.prototype, "nodes", {
                        set: function(t) {},
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "options", {
                        set: function(t) {},
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "focused", {
                        set: function(t) {
                            this.treeModel.setFocus(t)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "state", {
                        set: function(t) {
                            this.treeModel.setState(t)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.onKeydown = function(t) {
                        if (this.treeModel.isFocused && !l()(["input", "textarea"], document.activeElement.tagName.toLowerCase())) {
                            var e = this.treeModel.getFocusedNode();
                            this.treeModel.performKeyAction(e, t)
                        }
                    }, t.prototype.onMousedown = function(t) {
                        (function t(e, n) {
                            return !e || e.localName !== n && t(e.parentElement, n)
                        })(t.target, "tree-root") && this.treeModel.setFocus(!1)
                    }, t.prototype.ngOnChanges = function(t) {
                        (t.options || t.nodes) && this.treeModel.setData({
                            options: t.options && t.options.currentValue,
                            nodes: t.nodes && t.nodes.currentValue,
                            events: c()(this, this.treeModel.eventNames)
                        })
                    }, t.prototype.sizeChanged = function() {
                        this.viewportComponent.setViewport()
                    }, d([Object(r.l)("loadingTemplate", {
                        static: !1
                    }), h("design:type", r.U)], t.prototype, "loadingTemplate", void 0), d([Object(r.l)("treeNodeTemplate", {
                        static: !1
                    }), h("design:type", r.U)], t.prototype, "treeNodeTemplate", void 0), d([Object(r.l)("treeNodeWrapperTemplate", {
                        static: !1
                    }), h("design:type", r.U)], t.prototype, "treeNodeWrapperTemplate", void 0), d([Object(r.l)("treeNodeFullTemplate", {
                        static: !1
                    }), h("design:type", r.U)], t.prototype, "treeNodeFullTemplate", void 0), d([Object(r.X)("viewport", {
                        static: !1
                    }), h("design:type", a.a)], t.prototype, "viewportComponent", void 0), d([Object(r.x)(), h("design:type", Array), h("design:paramtypes", [Array])], t.prototype, "nodes", null), d([Object(r.x)(), h("design:type", Object), h("design:paramtypes", [Object])], t.prototype, "options", null), d([Object(r.x)(), h("design:type", Boolean), h("design:paramtypes", [Boolean])], t.prototype, "focused", null), d([Object(r.x)(), h("design:type", Object), h("design:paramtypes", [Object])], t.prototype, "state", null), d([Object(r.I)(), h("design:type", Object)], t.prototype, "toggleExpanded", void 0), d([Object(r.I)(), h("design:type", Object)], t.prototype, "activate", void 0), d([Object(r.I)(), h("design:type", Object)], t.prototype, "deactivate", void 0), d([Object(r.I)(), h("design:type", Object)], t.prototype, "nodeActivate", void 0), d([Object(r.I)(), h("design:type", Object)], t.prototype, "nodeDeactivate", void 0), d([Object(r.I)(), h("design:type", Object)], t.prototype, "select", void 0), d([Object(r.I)(), h("design:type", Object)], t.prototype, "deselect", void 0), d([Object(r.I)(), h("design:type", Object)], t.prototype, "focus", void 0), d([Object(r.I)(), h("design:type", Object)], t.prototype, "blur", void 0), d([Object(r.I)(), h("design:type", Object)], t.prototype, "updateData", void 0), d([Object(r.I)(), h("design:type", Object)], t.prototype, "initialized", void 0), d([Object(r.I)(), h("design:type", Object)], t.prototype, "moveNode", void 0), d([Object(r.I)(), h("design:type", Object)], t.prototype, "copyNode", void 0), d([Object(r.I)(), h("design:type", Object)], t.prototype, "loadNodeChildren", void 0), d([Object(r.I)(), h("design:type", Object)], t.prototype, "changeFilter", void 0), d([Object(r.I)(), h("design:type", Object)], t.prototype, "event", void 0), d([Object(r.I)(), h("design:type", Object)], t.prototype, "stateChange", void 0), d([Object(r.r)("body: keydown", ["$event"]), h("design:type", Function), h("design:paramtypes", [Object]), h("design:returntype", void 0)], t.prototype, "onKeydown", null), d([Object(r.r)("body: mousedown", ["$event"]), h("design:type", Function), h("design:paramtypes", [Object]), h("design:returntype", void 0)], t.prototype, "onMousedown", null), d([Object(r.j)({
                        selector: "Tree, tree-root",
                        providers: [o.a],
                        styles: [],
                        template: '\n      <tree-viewport #viewport>\n          <div\n                  class="angular-tree-component"\n                  [class.node-dragging]="treeDraggedElement.isDragging()"\n                  [class.angular-tree-component-rtl]="treeModel.options.rtl">\n              <tree-node-collection\n                      *ngIf="treeModel.roots"\n                      [nodes]="treeModel.roots"\n                      [treeModel]="treeModel"\n                      [templates]="{\n            loadingTemplate: loadingTemplate,\n            treeNodeTemplate: treeNodeTemplate,\n            treeNodeWrapperTemplate: treeNodeWrapperTemplate,\n            treeNodeFullTemplate: treeNodeFullTemplate\n          }">\n              </tree-node-collection>\n              <tree-node-drop-slot\n                      class="empty-tree-drop-slot"\n                      *ngIf="treeModel.isEmptyTree()"\n                      [dropIndex]="0"\n                      [node]="treeModel.virtualRoot">\n              </tree-node-drop-slot>\n          </div>\n      </tree-viewport>\n  '
                    }), h("design:paramtypes", [o.a, i.a])], t)
                }()
        },
        gCq4: function(t, e) {
            t.exports = function(t) {
                return this.__data__.get(t)
            }
        },
        gFfm: function(t, e) {
            t.exports = function(t, e) {
                for (var n = -1, r = null == t ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t););
                return t
            }
        },
        gk6K: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return o
            }));
            var r = n("CcnG"),
                o = function() {
                    function t() {
                        this._draggedElement = null
                    }
                    return t.prototype.set = function(t) {
                            this._draggedElement = t
                        }, t.prototype.get = function() {
                            return this._draggedElement
                        }, t.prototype.isDragging = function() {
                            return !!this.get()
                        },
                        function(t, e, n, r) {
                            var o, i = arguments.length,
                                a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, r);
                            else
                                for (var s = t.length - 1; s >= 0; s--)(o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
                            return i > 3 && a && Object.defineProperty(e, n, a), a
                        }([Object(r.u)()], t)
                }()
        },
        gpbi: function(t, e, n) {
            var r = n("ZWtO"),
                o = n("KxBF");
            t.exports = function(t, e) {
                return e.length < 2 ? t : r(t, o(e, 0, -1))
            }
        },
        heNW: function(t, e) {
            t.exports = function(t, e, n) {
                switch (n.length) {
                    case 0:
                        return t.call(e);
                    case 1:
                        return t.call(e, n[0]);
                    case 2:
                        return t.call(e, n[0], n[1]);
                    case 3:
                        return t.call(e, n[0], n[1], n[2])
                }
                return t.apply(e, n)
            }
        },
        hgQt: function(t, e, n) {
            var r = n("Juji"),
                o = n("4sDh");
            t.exports = function(t, e) {
                return null != t && o(t, e, r)
            }
        },
        hypo: function(t, e, n) {
            var r = n("O0oS");
            t.exports = function(t, e, n) {
                "__proto__" == e && r ? r(t, e, {
                    configurable: !0,
                    enumerable: !0,
                    value: n,
                    writable: !0
                }) : t[e] = n
            }
        },
        idmN: function(t, e, n) {
            var r = n("ZWtO"),
                o = n("FZoo"),
                i = n("4uTw");
            t.exports = function(t, e, n) {
                for (var a = -1, s = e.length, l = {}; ++a < s;) {
                    var u = e[a],
                        c = r(t, u);
                    n(c, u) && o(l, i(u, t), c)
                }
                return l
            }
        },
        ijCd: function(t, e, n) {
            var r = n("R/W3"),
                o = n("MMmD"),
                i = n("4qC0"),
                a = n("Sxd8"),
                s = n("P/G1"),
                l = Math.max;
            t.exports = function(t, e, n, u) {
                t = o(t) ? t : s(t), n = n && !u ? a(n) : 0;
                var c = t.length;
                return n < 0 && (n = l(c + n, 0)), i(t) ? n <= c && t.indexOf(e, n) > -1 : !!c && r(t, e, n) > -1
            }
        },
        itsj: function(t, e) {
            t.exports = function(t, e) {
                if (("constructor" !== e || "function" != typeof t[e]) && "__proto__" != e) return t[e]
            }
        },
        jV1L: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return s
            }));
            var r = n("CcnG"),
                o = n("f95s"),
                i = function(t, e, n, r) {
                    var o, i = arguments.length,
                        a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, r);
                    else
                        for (var s = t.length - 1; s >= 0; s--)(o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
                    return i > 3 && a && Object.defineProperty(e, n, a), a
                },
                a = function(t, e) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
                },
                s = function() {
                    function t() {}
                    return i([Object(r.x)(), a("design:type", o.a)], t.prototype, "node", void 0), i([Object(r.j)({
                        selector: "tree-node-expander",
                        encapsulation: r.Z.None,
                        styles: [],
                        template: '\n    <ng-container *mobxAutorun="{dontDetach: true}">\n      <span\n        *ngIf="node.hasChildren"\n        [class.toggle-children-wrapper-expanded]="node.isExpanded"\n        [class.toggle-children-wrapper-collapsed]="node.isCollapsed"\n        class="toggle-children-wrapper"\n        (click)="node.mouseAction(\'expanderClick\', $event)">\n\n        <span class="toggle-children"></span>\n      </span>\n      <span\n        *ngIf="!node.hasChildren"\n        class="toggle-children-placeholder">\n      </span>\n    </ng-container>\n  '
                    })], t)
                }()
        },
        jeLo: function(t, e, n) {
            var r = n("juv8"),
                o = n("mTTR");
            t.exports = function(t) {
                return r(t, o(t))
            }
        },
        juv8: function(t, e, n) {
            var r = n("MrPd"),
                o = n("hypo");
            t.exports = function(t, e, n, i) {
                var a = !n;
                n || (n = {});
                for (var s = -1, l = e.length; ++s < l;) {
                    var u = e[s],
                        c = i ? i(n[u], t[u], u, n, t) : void 0;
                    void 0 === c && (c = t[u]), a ? o(n, u, c) : r(n, u, c)
                }
                return n
            }
        },
        "k+1r": function(t, e, n) {
            var r = n("QkVE");
            t.exports = function(t) {
                var e = r(this, t).delete(t);
                return this.size -= e ? 1 : 0, e
            }
        },
        kekF: function(t, e) {
            t.exports = function(t, e) {
                return function(n) {
                    return t(e(n))
                }
            }
        },
        lQqw: function(t, e, n) {
            var r = n("MMmD");
            t.exports = function(t, e) {
                return function(n, o) {
                    if (null == n) return n;
                    if (!r(n)) return t(n, o);
                    for (var i = n.length, a = e ? i : -1, s = Object(n);
                        (e ? a-- : ++a < i) && !1 !== o(s[a], a, s););
                    return n
                }
            }
        },
        lSCD: function(t, e, n) {
            var r = n("NykK"),
                o = n("GoyQ");
            t.exports = function(t) {
                if (!o(t)) return !1;
                var e = r(t);
                return "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e
            }
        },
        ljhN: function(t, e) {
            t.exports = function(t, e) {
                return t === e || t != t && e != e
            }
        },
        "lm/5": function(t, e, n) {
            var r = n("fmRc"),
                o = n("wF/u");
            t.exports = function(t, e, n, i) {
                var a = n.length,
                    s = a,
                    l = !i;
                if (null == t) return !s;
                for (t = Object(t); a--;) {
                    var u = n[a];
                    if (l && u[2] ? u[1] !== t[u[0]] : !(u[0] in t)) return !1
                }
                for (; ++a < s;) {
                    var c = (u = n[a])[0],
                        d = t[c],
                        h = u[1];
                    if (l && u[2]) {
                        if (void 0 === d && !(c in t)) return !1
                    } else {
                        var f = new r;
                        if (i) var p = i(d, h, c, t, e, f);
                        if (!(void 0 === p ? o(h, d, 3, i, f) : p)) return !1
                    }
                }
                return !0
            }
        },
        mTTR: function(t, e, n) {
            var r = n("b80T"),
                o = n("QcOe"),
                i = n("MMmD");
            t.exports = function(t) {
                return i(t) ? r(t, !0) : o(t)
            }
        },
        mc0g: function(t, e) {
            t.exports = function(t) {
                return function(e, n, r) {
                    for (var o = -1, i = Object(e), a = r(e), s = a.length; s--;) {
                        var l = a[t ? s : ++o];
                        if (!1 === n(i[l], l, i)) break
                    }
                    return e
                }
            }
        },
        mdPL: function(t, e, n) {
            (function(t) {
                var r = n("WFqU"),
                    o = e && !e.nodeType && e,
                    i = o && "object" == typeof t && t && !t.nodeType && t,
                    a = i && i.exports === o && r.process,
                    s = function() {
                        try {
                            return i && i.require && i.require("util").types || a && a.binding && a.binding("util")
                        } catch (t) {}
                    }();
                t.exports = s
            }).call(this, n("YuTi")(t))
        },
        mfoh: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return g
            }));
            var r, o = n("CFvb"),
                i = n("P4Tr"),
                a = n.n(i),
                s = n("mwIZ"),
                l = n.n(s),
                u = n("Puqe"),
                c = n.n(u),
                d = n("UB5X"),
                h = n.n(d),
                f = {
                    TOGGLE_ACTIVE: function(t, e, n) {
                        return e && e.toggleActivated()
                    },
                    TOGGLE_ACTIVE_MULTI: function(t, e, n) {
                        return e && e.toggleActivated(!0)
                    },
                    TOGGLE_SELECTED: function(t, e, n) {
                        return e && e.toggleSelected()
                    },
                    ACTIVATE: function(t, e, n) {
                        return e.setIsActive(!0)
                    },
                    DEACTIVATE: function(t, e, n) {
                        return e.setIsActive(!1)
                    },
                    SELECT: function(t, e, n) {
                        return e.setIsSelected(!0)
                    },
                    DESELECT: function(t, e, n) {
                        return e.setIsSelected(!1)
                    },
                    FOCUS: function(t, e, n) {
                        return e.focus()
                    },
                    TOGGLE_EXPANDED: function(t, e, n) {
                        return e.hasChildren && e.toggleExpanded()
                    },
                    EXPAND: function(t, e, n) {
                        return e.expand()
                    },
                    COLLAPSE: function(t, e, n) {
                        return e.collapse()
                    },
                    DRILL_DOWN: function(t, e, n) {
                        return t.focusDrillDown()
                    },
                    DRILL_UP: function(t, e, n) {
                        return t.focusDrillUp()
                    },
                    NEXT_NODE: function(t, e, n) {
                        return t.focusNextNode()
                    },
                    PREVIOUS_NODE: function(t, e, n) {
                        return t.focusPreviousNode()
                    },
                    MOVE_NODE: function(t, e, n, r) {
                        var o = r.from,
                            i = r.to;
                        n.ctrlKey ? t.copyNode(o, i) : t.moveNode(o, i)
                    }
                },
                p = {
                    mouse: {
                        click: f.TOGGLE_ACTIVE,
                        dblClick: null,
                        contextMenu: null,
                        expanderClick: f.TOGGLE_EXPANDED,
                        checkboxClick: f.TOGGLE_SELECTED,
                        drop: f.MOVE_NODE
                    },
                    keys: (r = {}, r[o.a.RIGHT] = f.DRILL_DOWN, r[o.a.LEFT] = f.DRILL_UP, r[o.a.DOWN] = f.NEXT_NODE, r[o.a.UP] = f.PREVIOUS_NODE, r[o.a.SPACE] = f.TOGGLE_ACTIVE, r[o.a.ENTER] = f.TOGGLE_ACTIVE, r)
                },
                g = function() {
                    function t(t) {
                        void 0 === t && (t = {}), this.options = t, this.actionMapping = a()({}, this.options.actionMapping, p), t.rtl && (this.actionMapping.keys[o.a.RIGHT] = l()(t, ["actionMapping", "keys", o.a.RIGHT]) || f.DRILL_UP, this.actionMapping.keys[o.a.LEFT] = l()(t, ["actionMapping", "keys", o.a.LEFT]) || f.DRILL_DOWN)
                    }
                    return Object.defineProperty(t.prototype, "hasChildrenField", {
                        get: function() {
                            return this.options.hasChildrenField || "hasChildren"
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "childrenField", {
                        get: function() {
                            return this.options.childrenField || "children"
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "displayField", {
                        get: function() {
                            return this.options.displayField || "name"
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "idField", {
                        get: function() {
                            return this.options.idField || "id"
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isExpandedField", {
                        get: function() {
                            return this.options.isExpandedField || "isExpanded"
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "getChildren", {
                        get: function() {
                            return this.options.getChildren
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "levelPadding", {
                        get: function() {
                            return this.options.levelPadding || 0
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "useVirtualScroll", {
                        get: function() {
                            return this.options.useVirtualScroll
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "animateExpand", {
                        get: function() {
                            return this.options.animateExpand
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "animateSpeed", {
                        get: function() {
                            return this.options.animateSpeed || 1
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "animateAcceleration", {
                        get: function() {
                            return this.options.animateAcceleration || 1.2
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "scrollOnActivate", {
                        get: function() {
                            return void 0 === this.options.scrollOnActivate || this.options.scrollOnActivate
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "rtl", {
                        get: function() {
                            return !!this.options.rtl
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "rootId", {
                        get: function() {
                            return this.options.rootId
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "useCheckbox", {
                        get: function() {
                            return this.options.useCheckbox
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "useTriState", {
                        get: function() {
                            return void 0 === this.options.useTriState || this.options.useTriState
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "scrollContainer", {
                        get: function() {
                            return this.options.scrollContainer
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "allowDragoverStyling", {
                        get: function() {
                            return void 0 === this.options.allowDragoverStyling || this.options.allowDragoverStyling
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.getNodeClone = function(t) {
                        return this.options.getNodeClone ? this.options.getNodeClone(t) : c()(Object.assign({}, t.data), ["id"])
                    }, t.prototype.allowDrop = function(t, e, n) {
                        return this.options.allowDrop instanceof Function ? this.options.allowDrop(t, e, n) : void 0 === this.options.allowDrop || this.options.allowDrop
                    }, t.prototype.allowDrag = function(t) {
                        return this.options.allowDrag instanceof Function ? this.options.allowDrag(t) : this.options.allowDrag
                    }, t.prototype.nodeClass = function(t) {
                        return this.options.nodeClass ? this.options.nodeClass(t) : ""
                    }, t.prototype.nodeHeight = function(t) {
                        if (t.data.virtual) return 0;
                        var e = this.options.nodeHeight || 22;
                        return "function" == typeof e && (e = e(t)), e + (0 === t.index ? 2 : 1) * this.dropSlotHeight
                    }, Object.defineProperty(t.prototype, "dropSlotHeight", {
                        get: function() {
                            return h()(this.options.dropSlotHeight) ? this.options.dropSlotHeight : 2
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }()
        },
        "mv/X": function(t, e, n) {
            var r = n("ljhN"),
                o = n("MMmD"),
                i = n("wJg7"),
                a = n("GoyQ");
            t.exports = function(t, e, n) {
                if (!a(n)) return !1;
                var s = typeof e;
                return !!("number" == s ? o(n) && i(e, n.length) : "string" == s && e in n) && r(n[e], t)
            }
        },
        mwIZ: function(t, e, n) {
            var r = n("ZWtO");
            t.exports = function(t, e, n) {
                var o = null == t ? void 0 : r(t, e);
                return void 0 === o ? n : o
            }
        },
        nmnc: function(t, e, n) {
            var r = n("Kz5y");
            t.exports = r.Symbol
        },
        "oCl/": function(t, e, n) {
            var r = n("CH3K"),
                o = n("LcsW"),
                i = n("MvSz"),
                a = n("0ycA"),
                s = Object.getOwnPropertySymbols;
            t.exports = s ? function(t) {
                for (var e = []; t;) r(e, i(t)), t = o(t);
                return e
            } : a
        },
        or5M: function(t, e, n) {
            var r = n("1hJj"),
                o = n("QoRX"),
                i = n("xYSL");
            t.exports = function(t, e, n, a, s, l) {
                var u = 1 & n,
                    c = t.length,
                    d = e.length;
                if (c != d && !(u && d > c)) return !1;
                var h = l.get(t);
                if (h && l.get(e)) return h == e;
                var f = -1,
                    p = !0,
                    g = 2 & n ? new r : void 0;
                for (l.set(t, e), l.set(e, t); ++f < c;) {
                    var v = t[f],
                        y = e[f];
                    if (a) var b = u ? a(y, v, f, e, t, l) : a(v, y, f, t, e, l);
                    if (void 0 !== b) {
                        if (b) continue;
                        p = !1;
                        break
                    }
                    if (g) {
                        if (!o(e, (function(t, e) {
                                if (!i(g, e) && (v === t || s(v, t, n, a, l))) return g.push(e)
                            }))) {
                            p = !1;
                            break
                        }
                    } else if (v !== y && !s(v, y, n, a, l)) {
                        p = !1;
                        break
                    }
                }
                return l.delete(t), l.delete(e), p
            }
        },
        "otv/": function(t, e, n) {
            var r = n("nmnc"),
                o = r ? r.prototype : void 0,
                i = o ? o.valueOf : void 0;
            t.exports = function(t) {
                return i ? Object(i.call(t)) : {}
            }
        },
        pFRH: function(t, e, n) {
            var r = n("cvCv"),
                o = n("O0oS"),
                i = n("zZ0H");
            t.exports = o ? function(t, e) {
                return o(t, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: r(e),
                    writable: !0
                })
            } : i
        },
        pSRY: function(t, e, n) {
            var r = n("QkVE");
            t.exports = function(t) {
                return r(this, t).has(t)
            }
        },
        pZt1: function(t, e) {
            t.exports = function(t) {
                return t && t.length ? t[0] : void 0
            }
        },
        pcHL: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return s
            }));
            var r = n("CcnG"),
                o = n("f95s"),
                i = function(t, e, n, r) {
                    var o, i = arguments.length,
                        a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, r);
                    else
                        for (var s = t.length - 1; s >= 0; s--)(o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
                    return i > 3 && a && Object.defineProperty(e, n, a), a
                },
                a = function(t, e) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
                },
                s = function() {
                    function t() {}
                    return i([Object(r.x)(), a("design:type", o.a)], t.prototype, "node", void 0), i([Object(r.x)(), a("design:type", Object)], t.prototype, "templates", void 0), i([Object(r.j)({
                        selector: "tree-node-children",
                        encapsulation: r.Z.None,
                        styles: [],
                        template: '\n    <ng-container *mobxAutorun="{dontDetach: true}">\n      <div [class.tree-children]="true"\n          [class.tree-children-no-padding]="node.options.levelPadding"\n          *treeAnimateOpen="\n            node.isExpanded;\n            speed:node.options.animateSpeed;\n            acceleration:node.options.animateAcceleration;\n            enabled:node.options.animateExpand">\n        <tree-node-collection\n          *ngIf="node.children"\n          [nodes]="node.children"\n          [templates]="templates"\n          [treeModel]="node.treeModel">\n        </tree-node-collection>\n        <tree-loading-component\n          [style.padding-left]="node.getNodePadding()"\n          class="tree-node-loading"\n          *ngIf="!node.children"\n          [template]="templates.loadingTemplate"\n          [node]="node"\n        ></tree-loading-component>\n      </div>\n    </ng-container>\n  '
                    })], t)
                }()
        },
        qZTm: function(t, e, n) {
            var r = n("fR/l"),
                o = n("MvSz"),
                i = n("7GkX");
            t.exports = function(t) {
                return r(t, i, o)
            }
        },
        rEGp: function(t, e) {
            t.exports = function(t) {
                var e = -1,
                    n = Array(t.size);
                return t.forEach((function(t) {
                    n[++e] = t
                })), n
            }
        },
        rZud: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return s
            }));
            var r = n("CcnG"),
                o = n("f95s"),
                i = function(t, e, n, r) {
                    var o, i = arguments.length,
                        a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, r);
                    else
                        for (var s = t.length - 1; s >= 0; s--)(o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
                    return i > 3 && a && Object.defineProperty(e, n, a), a
                },
                a = function(t, e) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
                },
                s = function() {
                    function t() {}
                    return i([Object(r.x)(), a("design:type", o.a)], t.prototype, "node", void 0), i([Object(r.x)(), a("design:type", Number)], t.prototype, "index", void 0), i([Object(r.x)(), a("design:type", r.U)], t.prototype, "template", void 0), i([Object(r.j)({
                        selector: "tree-node-content",
                        encapsulation: r.Z.None,
                        template: '\n  <span *ngIf="!template">{{ node.displayField }}</span>\n  <ng-container\n    [ngTemplateOutlet]="template"\n    [ngTemplateOutletContext]="{ $implicit: node, node: node, index: index }">\n  </ng-container>'
                    })], t)
                }()
        },
        sEf8: function(t, e) {
            t.exports = function(t) {
                return function(e) {
                    return t(e)
                }
            }
        },
        sEfC: function(t, e, n) {
            var r = n("GoyQ"),
                o = n("QIyF"),
                i = n("tLB3"),
                a = Math.max,
                s = Math.min;
            t.exports = function(t, e, n) {
                var l, u, c, d, h, f, p = 0,
                    g = !1,
                    v = !1,
                    y = !0;
                if ("function" != typeof t) throw new TypeError("Expected a function");

                function b(e) {
                    var n = l,
                        r = u;
                    return l = u = void 0, p = e, d = t.apply(r, n)
                }

                function m(t) {
                    var n = t - f;
                    return void 0 === f || n >= e || n < 0 || v && t - p >= c
                }

                function x() {
                    var t = o();
                    if (m(t)) return w(t);
                    h = setTimeout(x, function(t) {
                        var n = e - (t - f);
                        return v ? s(n, c - (t - p)) : n
                    }(t))
                }

                function w(t) {
                    return h = void 0, y && l ? b(t) : (l = u = void 0, d)
                }

                function _() {
                    var t = o(),
                        n = m(t);
                    if (l = arguments, u = this, f = t, n) {
                        if (void 0 === h) return function(t) {
                            return p = t, h = setTimeout(x, e), g ? b(t) : d
                        }(f);
                        if (v) return clearTimeout(h), h = setTimeout(x, e), b(f)
                    }
                    return void 0 === h && (h = setTimeout(x, e)), d
                }
                return e = i(e) || 0, r(n) && (g = !!n.leading, c = (v = "maxWait" in n) ? a(i(n.maxWait) || 0, e) : c, y = "trailing" in n ? !!n.trailing : y), _.cancel = function() {
                    void 0 !== h && clearTimeout(h), p = 0, l = f = u = h = void 0
                }, _.flush = function() {
                    return void 0 === h ? d : w(o())
                }, _
            }
        },
        seXi: function(t, e, n) {
            var r = n("qZTm"),
                o = Object.prototype.hasOwnProperty;
            t.exports = function(t, e, n, i, a, s) {
                var l = 1 & n,
                    u = r(t),
                    c = u.length;
                if (c != r(e).length && !l) return !1;
                for (var d = c; d--;) {
                    var h = u[d];
                    if (!(l ? h in e : o.call(e, h))) return !1
                }
                var f = s.get(t);
                if (f && s.get(e)) return f == e;
                var p = !0;
                s.set(t, e), s.set(e, t);
                for (var g = l; ++d < c;) {
                    var v = t[h = u[d]],
                        y = e[h];
                    if (i) var b = l ? i(y, v, h, e, t, s) : i(v, y, h, t, e, s);
                    if (!(void 0 === b ? v === y || a(v, y, n, i, s) : b)) {
                        p = !1;
                        break
                    }
                    g || (g = "constructor" == h)
                }
                if (p && !g) {
                    var m = t.constructor,
                        x = e.constructor;
                    m != x && "constructor" in t && "constructor" in e && !("function" == typeof m && m instanceof m && "function" == typeof x && x instanceof x) && (p = !1)
                }
                return s.delete(t), s.delete(e), p
            }
        },
        shjB: function(t, e) {
            t.exports = function(t) {
                return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
            }
        },
        t2Dn: function(t, e, n) {
            var r = n("hypo"),
                o = n("ljhN");
            t.exports = function(t, e, n) {
                (void 0 === n || o(t[e], n)) && (void 0 !== n || e in t) || r(t, e, n)
            }
        },
        tLB3: function(t, e, n) {
            var r = n("GoyQ"),
                o = n("/9aa"),
                i = /^\s+|\s+$/g,
                a = /^[-+]0x[0-9a-f]+$/i,
                s = /^0b[01]+$/i,
                l = /^0o[0-7]+$/i,
                u = parseInt;
            t.exports = function(t) {
                if ("number" == typeof t) return t;
                if (o(t)) return NaN;
                if (r(t)) {
                    var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                    t = r(e) ? e + "" : e
                }
                if ("string" != typeof t) return 0 === t ? t : +t;
                t = t.replace(i, "");
                var n = s.test(t);
                return n || l.test(t) ? u(t.slice(2), n ? 2 : 8) : a.test(t) ? NaN : +t
            }
        },
        tMB7: function(t, e, n) {
            var r = n("y1pI");
            t.exports = function(t) {
                var e = this.__data__,
                    n = r(e, t);
                return n < 0 ? void 0 : e[n][1]
            }
        },
        tadb: function(t, e, n) {
            var r = n("Cwc5")(n("Kz5y"), "DataView");
            t.exports = r
        },
        u8Dt: function(t, e, n) {
            var r = n("YESw"),
                o = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                var e = this.__data__;
                if (r) {
                    var n = e[t];
                    return "__lodash_hash_undefined__" === n ? void 0 : n
                }
                return o.call(e, t) ? e[t] : void 0
            }
        },
        uNpg: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return s
            }));
            var r = n("CcnG"),
                o = n("f95s"),
                i = function(t, e, n, r) {
                    var o, i = arguments.length,
                        a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, r);
                    else
                        for (var s = t.length - 1; s >= 0; s--)(o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
                    return i > 3 && a && Object.defineProperty(e, n, a), a
                },
                a = function(t, e) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
                },
                s = function() {
                    function t() {}
                    return i([Object(r.x)(), a("design:type", o.a)], t.prototype, "node", void 0), i([Object(r.j)({
                        selector: "tree-node-checkbox",
                        encapsulation: r.Z.None,
                        styles: [],
                        template: '\n    <ng-container *mobxAutorun="{dontDetach: true}">\n      <input\n        class="tree-node-checkbox"\n        type="checkbox"\n        (click)="node.mouseAction(\'checkboxClick\', $event)"\n        [checked]="node.isSelected"\n        [indeterminate]="node.isPartiallySelected"/>\n    </ng-container>\n  '
                    })], t)
                }()
        },
        "ut/Y": function(t, e, n) {
            var r = n("ZCpW"),
                o = n("GDhZ"),
                i = n("zZ0H"),
                a = n("Z0cm"),
                s = n("+c4W");
            t.exports = function(t) {
                return "function" == typeof t ? t : null == t ? i : "object" == typeof t ? a(t) ? o(t[0], t[1]) : r(t) : s(t)
            }
        },
        "w/wX": function(t, e, n) {
            var r = n("QqLw"),
                o = n("ExA7");
            t.exports = function(t) {
                return o(t) && "[object Set]" == r(t)
            }
        },
        "wF/u": function(t, e, n) {
            var r = n("e5cp"),
                o = n("ExA7");
            t.exports = function t(e, n, i, a, s) {
                return e === n || (null == e || null == n || !o(e) && !o(n) ? e != e && n != n : r(e, n, i, a, t, s))
            }
        },
        wJg7: function(t, e) {
            var n = /^(?:0|[1-9]\d*)$/;
            t.exports = function(t, e) {
                var r = typeof t;
                return !!(e = null == e ? 9007199254740991 : e) && ("number" == r || "symbol" != r && n.test(t)) && t > -1 && t % 1 == 0 && t < e
            }
        },
        wclG: function(t, e, n) {
            var r = n("pFRH"),
                o = n("88Gu")(r);
            t.exports = o
        },
        wig9: function(t, e) {
            t.exports = function(t) {
                for (var e = -1, n = null == t ? 0 : t.length, r = 0, o = []; ++e < n;) {
                    var i = t[e];
                    i && (o[r++] = i)
                }
                return o
            }
        },
        woSy: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return s
            }));
            var r = n("CcnG"),
                o = n("f95s"),
                i = function(t, e, n, r) {
                    var o, i = arguments.length,
                        a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, r);
                    else
                        for (var s = t.length - 1; s >= 0; s--)(o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
                    return i > 3 && a && Object.defineProperty(e, n, a), a
                },
                a = function(t, e) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
                },
                s = function() {
                    function t() {}
                    return t.prototype.onDrop = function(t) {
                        this.node.mouseAction("drop", t.event, {
                            from: t.element,
                            to: {
                                parent: this.node,
                                index: this.dropIndex
                            }
                        })
                    }, t.prototype.allowDrop = function(t, e) {
                        return this.node.options.allowDrop(t, {
                            parent: this.node,
                            index: this.dropIndex
                        }, e)
                    }, i([Object(r.x)(), a("design:type", o.a)], t.prototype, "node", void 0), i([Object(r.x)(), a("design:type", Number)], t.prototype, "dropIndex", void 0), i([Object(r.j)({
                        selector: "TreeNodeDropSlot, tree-node-drop-slot",
                        encapsulation: r.Z.None,
                        styles: [],
                        template: '\n    <div\n      class="node-drop-slot"\n      (treeDrop)="onDrop($event)"\n      [treeAllowDrop]="allowDrop.bind(this)"\n      [allowDragoverStyling]="true">\n    </div>\n  '
                    })], t)
                }()
        },
        wrZu: function(t, e, n) {
            var r = n("+K+b"),
                o = n("XYm9"),
                i = n("b2z7"),
                a = n("otv/"),
                s = n("yP5f");
            t.exports = function(t, e, n) {
                var l = t.constructor;
                switch (e) {
                    case "[object ArrayBuffer]":
                        return r(t);
                    case "[object Boolean]":
                    case "[object Date]":
                        return new l(+t);
                    case "[object DataView]":
                        return o(t, n);
                    case "[object Float32Array]":
                    case "[object Float64Array]":
                    case "[object Int8Array]":
                    case "[object Int16Array]":
                    case "[object Int32Array]":
                    case "[object Uint8Array]":
                    case "[object Uint8ClampedArray]":
                    case "[object Uint16Array]":
                    case "[object Uint32Array]":
                        return s(t, n);
                    case "[object Map]":
                        return new l;
                    case "[object Number]":
                    case "[object String]":
                        return new l(t);
                    case "[object RegExp]":
                        return i(t);
                    case "[object Set]":
                        return new l;
                    case "[object Symbol]":
                        return a(t)
                }
            }
        },
        xYSL: function(t, e) {
            t.exports = function(t, e) {
                return t.has(e)
            }
        },
        "xs/l": function(t, e, n) {
            var r = n("TYy9"),
                o = n("Ioao"),
                i = n("wclG");
            t.exports = function(t) {
                return i(o(t, void 0, r), t + "")
            }
        },
        y1pI: function(t, e, n) {
            var r = n("ljhN");
            t.exports = function(t, e) {
                for (var n = t.length; n--;)
                    if (r(t[n][0], e)) return n;
                return -1
            }
        },
        yGk4: function(t, e, n) {
            var r = n("Cwc5")(n("Kz5y"), "Set");
            t.exports = r
        },
        yHx3: function(t, e) {
            var n = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                var e = t.length,
                    r = new t.constructor(e);
                return e && "string" == typeof t[0] && n.call(t, "index") && (r.index = t.index, r.input = t.input), r
            }
        },
        yP5f: function(t, e, n) {
            var r = n("+K+b");
            t.exports = function(t, e) {
                var n = e ? r(t.buffer) : t.buffer;
                return new t.constructor(n, t.byteOffset, t.length)
            }
        },
        yYhs: function(t, e, n) {
            "use strict";
            var r = n("CcnG"),
                o = n("Ip0R"),
                i = n("F+oH"),
                a = (n("mfoh"), n("CFvb"), n("MP8s"), n("f95s"), n("gk6K")),
                s = (n("dApe"), n("ZhuC")),
                l = n("fxL3"),
                u = n("TNUL"),
                c = n("rZud"),
                d = n("woSy"),
                h = n("jV1L"),
                f = n("pcHL"),
                p = n("WaXT"),
                g = n("OIDT"),
                v = n("HIU9"),
                y = n("uNpg"),
                b = n("Fwy9"),
                m = n("C523"),
                x = n("4Dmd");
            n("14R3"), n.d(e, "a", (function() {
                return w
            }));
            var w = function() {
                function t() {}
                var e;
                return e = t, t.forRoot = function() {
                    return {
                        ngModule: e,
                        providers: [a.a]
                    }
                }, e = function(t, e, n, r) {
                    var o, i = arguments.length,
                        a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, r);
                    else
                        for (var s = t.length - 1; s >= 0; s--)(o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
                    return i > 3 && a && Object.defineProperty(e, n, a), a
                }([Object(r.B)({
                    declarations: [l.a, u.a, c.a, s.a, b.a, m.a, h.a, f.a, d.a, p.a, v.a, g.a, y.a, x.a],
                    exports: [l.a, u.a, c.a, s.a, b.a, m.a, h.a, f.a, d.a, p.a, v.a, g.a, y.a, x.a],
                    imports: [o.c, i.a],
                    providers: []
                })], t)
            }()
        },
        zEVN: function(t, e, n) {
            var r = n("Gi0A"),
                o = n("sEf8"),
                i = n("mdPL"),
                a = i && i.isMap,
                s = a ? o(a) : r;
            t.exports = s
        },
        zZ0H: function(t, e) {
            t.exports = function(t) {
                return t
            }
        },
        zoYe: function(t, e, n) {
            var r = n("nmnc"),
                o = n("eUgh"),
                i = n("Z0cm"),
                a = n("/9aa"),
                s = r ? r.prototype : void 0,
                l = s ? s.toString : void 0;
            t.exports = function t(e) {
                if ("string" == typeof e) return e;
                if (i(e)) return o(e, t) + "";
                if (a(e)) return l ? l.call(e) : "";
                var n = e + "";
                return "0" == n && 1 / e == -1 / 0 ? "-0" : n
            }
        }
    }
]);
