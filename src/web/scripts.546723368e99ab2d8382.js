! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Popper = e()
}(this, (function() {
    "use strict";
    for (var t = "undefined" != typeof window && "undefined" != typeof document, e = ["Edge", "Trident", "Firefox"], n = 0, i = 0; i < e.length; i += 1)
        if (t && navigator.userAgent.indexOf(e[i]) >= 0) {
            n = 1;
            break
        } var r = t && window.Promise ? function(t) {
        var e = !1;
        return function() {
            e || (e = !0, window.Promise.resolve().then((function() {
                e = !1, t()
            })))
        }
    } : function(t) {
        var e = !1;
        return function() {
            e || (e = !0, setTimeout((function() {
                e = !1, t()
            }), n))
        }
    };

    function o(t) {
        return t && "[object Function]" === {}.toString.call(t)
    }

    function a(t, e) {
        if (1 !== t.nodeType) return [];
        var n = t.ownerDocument.defaultView.getComputedStyle(t, null);
        return e ? n[e] : n
    }

    function s(t) {
        return "HTML" === t.nodeName ? t : t.parentNode || t.host
    }

    function l(t) {
        if (!t) return document.body;
        switch (t.nodeName) {
            case "HTML":
            case "BODY":
                return t.ownerDocument.body;
            case "#document":
                return t.body
        }
        var e = a(t);
        return /(auto|scroll|overlay)/.test(e.overflow + e.overflowY + e.overflowX) ? t : l(s(t))
    }
    var u = t && !(!window.MSInputMethodContext || !document.documentMode),
        d = t && /MSIE 10/.test(navigator.userAgent);

    function c(t) {
        return 11 === t ? u : 10 === t ? d : u || d
    }

    function h(t) {
        if (!t) return document.documentElement;
        for (var e = c(10) ? document.body : null, n = t.offsetParent || null; n === e && t.nextElementSibling;) n = (t = t.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === a(n, "position") ? h(n) : n : t ? t.ownerDocument.documentElement : document.documentElement
    }

    function f(t) {
        return null !== t.parentNode ? f(t.parentNode) : t
    }

    function p(t, e) {
        if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
        var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? t : e,
            r = n ? e : t,
            o = document.createRange();
        o.setStart(i, 0), o.setEnd(r, 0);
        var a, s, l = o.commonAncestorContainer;
        if (t !== l && e !== l || i.contains(r)) return "BODY" === (s = (a = l).nodeName) || "HTML" !== s && h(a.firstElementChild) !== a ? h(l) : l;
        var u = f(t);
        return u.host ? p(u.host, e) : p(t, f(e).host)
    }

    function g(t) {
        var e = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
            n = t.nodeName;
        return "BODY" === n || "HTML" === n ? (t.ownerDocument.scrollingElement || t.ownerDocument.documentElement)[e] : t[e]
    }

    function m(t, e) {
        var n = "x" === e ? "Left" : "Top",
            i = "Left" === n ? "Right" : "Bottom";
        return parseFloat(t["border" + n + "Width"], 10) + parseFloat(t["border" + i + "Width"], 10)
    }

    function v(t, e, n, i) {
        return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], c(10) ? parseInt(n["offset" + t]) + parseInt(i["margin" + ("Height" === t ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === t ? "Bottom" : "Right")]) : 0)
    }

    function b(t) {
        var e = t.body,
            n = t.documentElement,
            i = c(10) && getComputedStyle(n);
        return {
            height: v("Height", e, n, i),
            width: v("Width", e, n, i)
        }
    }
    var y = function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        },
        x = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        w = function(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        },
        _ = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        };

    function T(t) {
        return _({}, t, {
            right: t.left + t.width,
            bottom: t.top + t.height
        })
    }

    function k(t) {
        var e = {};
        try {
            if (c(10)) {
                e = t.getBoundingClientRect();
                var n = g(t, "top"),
                    i = g(t, "left");
                e.top += n, e.left += i, e.bottom += n, e.right += i
            } else e = t.getBoundingClientRect()
        } catch (d) {}
        var r = {
                left: e.left,
                top: e.top,
                width: e.right - e.left,
                height: e.bottom - e.top
            },
            o = "HTML" === t.nodeName ? b(t.ownerDocument) : {},
            s = t.offsetWidth - (o.width || t.clientWidth || r.right - r.left),
            l = t.offsetHeight - (o.height || t.clientHeight || r.bottom - r.top);
        if (s || l) {
            var u = a(t);
            s -= m(u, "x"), l -= m(u, "y"), r.width -= s, r.height -= l
        }
        return T(r)
    }

    function S(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = c(10),
            r = "HTML" === e.nodeName,
            o = k(t),
            s = k(e),
            u = l(t),
            d = a(e),
            h = parseFloat(d.borderTopWidth, 10),
            f = parseFloat(d.borderLeftWidth, 10);
        n && r && (s.top = Math.max(s.top, 0), s.left = Math.max(s.left, 0));
        var p = T({
            top: o.top - s.top - h,
            left: o.left - s.left - f,
            width: o.width,
            height: o.height
        });
        if (p.marginTop = 0, p.marginLeft = 0, !i && r) {
            var m = parseFloat(d.marginTop, 10),
                v = parseFloat(d.marginLeft, 10);
            p.top -= h - m, p.bottom -= h - m, p.left -= f - v, p.right -= f - v, p.marginTop = m, p.marginLeft = v
        }
        return (i && !n ? e.contains(u) : e === u && "BODY" !== u.nodeName) && (p = function(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = g(e, "top"),
                r = g(e, "left"),
                o = n ? -1 : 1;
            return t.top += i * o, t.bottom += i * o, t.left += r * o, t.right += r * o, t
        }(p, e)), p
    }

    function M(t) {
        if (!t || !t.parentElement || c()) return document.documentElement;
        for (var e = t.parentElement; e && "none" === a(e, "transform");) e = e.parentElement;
        return e || document.documentElement
    }

    function C(t, e, n, i) {
        var r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            o = {
                top: 0,
                left: 0
            },
            u = r ? M(t) : p(t, e);
        if ("viewport" === i) o = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = t.ownerDocument.documentElement,
                i = S(t, n),
                r = Math.max(n.clientWidth, window.innerWidth || 0),
                o = Math.max(n.clientHeight, window.innerHeight || 0),
                a = e ? 0 : g(n),
                s = e ? 0 : g(n, "left");
            return T({
                top: a - i.top + i.marginTop,
                left: s - i.left + i.marginLeft,
                width: r,
                height: o
            })
        }(u, r);
        else {
            var d = void 0;
            "scrollParent" === i ? "BODY" === (d = l(s(e))).nodeName && (d = t.ownerDocument.documentElement) : d = "window" === i ? t.ownerDocument.documentElement : i;
            var c = S(d, u, r);
            if ("HTML" !== d.nodeName || function t(e) {
                    var n = e.nodeName;
                    if ("BODY" === n || "HTML" === n) return !1;
                    if ("fixed" === a(e, "position")) return !0;
                    var i = s(e);
                    return !!i && t(i)
                }(u)) o = c;
            else {
                var h = b(t.ownerDocument),
                    f = h.height,
                    m = h.width;
                o.top += c.top - c.marginTop, o.bottom = f + c.top, o.left += c.left - c.marginLeft, o.right = m + c.left
            }
        }
        var v = "number" == typeof(n = n || 0);
        return o.left += v ? n : n.left || 0, o.top += v ? n : n.top || 0, o.right -= v ? n : n.right || 0, o.bottom -= v ? n : n.bottom || 0, o
    }

    function D(t, e, n, i, r) {
        var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === t.indexOf("auto")) return t;
        var a = C(n, i, o, r),
            s = {
                top: {
                    width: a.width,
                    height: e.top - a.top
                },
                right: {
                    width: a.right - e.right,
                    height: a.height
                },
                bottom: {
                    width: a.width,
                    height: a.bottom - e.bottom
                },
                left: {
                    width: e.left - a.left,
                    height: a.height
                }
            },
            l = Object.keys(s).map((function(t) {
                return _({
                    key: t
                }, s[t], {
                    area: (e = s[t], e.width * e.height)
                });
                var e
            })).sort((function(t, e) {
                return e.area - t.area
            })),
            u = l.filter((function(t) {
                return t.width >= n.clientWidth && t.height >= n.clientHeight
            })),
            d = u.length > 0 ? u[0].key : l[0].key,
            c = t.split("-")[1];
        return d + (c ? "-" + c : "")
    }

    function A(t, e, n) {
        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        return S(n, i ? M(e) : p(e, n), i)
    }

    function E(t) {
        var e = t.ownerDocument.defaultView.getComputedStyle(t),
            n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
            i = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
        return {
            width: t.offsetWidth + i,
            height: t.offsetHeight + n
        }
    }

    function P(t) {
        var e = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return t.replace(/left|right|bottom|top/g, (function(t) {
            return e[t]
        }))
    }

    function L(t, e, n) {
        n = n.split("-")[0];
        var i = E(t),
            r = {
                width: i.width,
                height: i.height
            },
            o = -1 !== ["right", "left"].indexOf(n),
            a = o ? "top" : "left",
            s = o ? "left" : "top",
            l = o ? "height" : "width",
            u = o ? "width" : "height";
        return r[a] = e[a] + e[l] / 2 - i[l] / 2, r[s] = n === s ? e[s] - i[u] : e[P(s)], r
    }

    function O(t, e) {
        return Array.prototype.find ? t.find(e) : t.filter(e)[0]
    }

    function I(t, e, n) {
        return (void 0 === n ? t : t.slice(0, function(t, e, n) {
            if (Array.prototype.findIndex) return t.findIndex((function(t) {
                return t.name === n
            }));
            var i = O(t, (function(t) {
                return t.name === n
            }));
            return t.indexOf(i)
        }(t, 0, n))).forEach((function(t) {
            t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var n = t.function || t.fn;
            t.enabled && o(n) && (e.offsets.popper = T(e.offsets.popper), e.offsets.reference = T(e.offsets.reference), e = n(e, t))
        })), e
    }

    function U() {
        if (!this.state.isDestroyed) {
            var t = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            t.offsets.reference = A(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = D(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = L(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", t = I(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t))
        }
    }

    function F(t, e) {
        return t.some((function(t) {
            return t.enabled && t.name === e
        }))
    }

    function R(t) {
        for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length; i++) {
            var r = e[i],
                o = r ? "" + r + n : t;
            if (void 0 !== document.body.style[o]) return o
        }
        return null
    }

    function K() {
        return this.state.isDestroyed = !0, F(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[R("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
    }

    function N(t) {
        var e = t.ownerDocument;
        return e ? e.defaultView : window
    }

    function W() {
        this.state.eventsEnabled || (this.state = function(t, e, n, i) {
            n.updateBound = i, N(t).addEventListener("resize", n.updateBound, {
                passive: !0
            });
            var r = l(t);
            return function t(e, n, i, r) {
                var o = "BODY" === e.nodeName,
                    a = o ? e.ownerDocument.defaultView : e;
                a.addEventListener(n, i, {
                    passive: !0
                }), o || t(l(a.parentNode), n, i, r), r.push(a)
            }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n
        }(this.reference, 0, this.state, this.scheduleUpdate))
    }

    function B() {
        var t;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.state, N(this.reference).removeEventListener("resize", t.updateBound), t.scrollParents.forEach((function(e) {
            e.removeEventListener("scroll", t.updateBound)
        })), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
    }

    function z(t) {
        return "" !== t && !isNaN(parseFloat(t)) && isFinite(t)
    }

    function H(t, e) {
        Object.keys(e).forEach((function(n) {
            var i = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && z(e[n]) && (i = "px"), t.style[n] = e[n] + i
        }))
    }
    var V = t && /Firefox/i.test(navigator.userAgent);

    function Y(t, e, n) {
        var i = O(t, (function(t) {
                return t.name === e
            })),
            r = !!i && t.some((function(t) {
                return t.name === n && t.enabled && t.order < i.order
            }));
        if (!r) {
            var o = "`" + e + "`";
            console.warn("`" + n + "` modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
        }
        return r
    }
    var j = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        X = j.slice(3);

    function q(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = X.indexOf(t),
            i = X.slice(n + 1).concat(X.slice(0, n));
        return e ? i.reverse() : i
    }
    var G = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function() {},
            onUpdate: function() {},
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function(t) {
                        var e = t.placement,
                            n = e.split("-")[0],
                            i = e.split("-")[1];
                        if (i) {
                            var r = t.offsets,
                                o = r.reference,
                                a = r.popper,
                                s = -1 !== ["bottom", "top"].indexOf(n),
                                l = s ? "left" : "top",
                                u = s ? "width" : "height",
                                d = {
                                    start: w({}, l, o[l]),
                                    end: w({}, l, o[l] + o[u] - a[u])
                                };
                            t.offsets.popper = _({}, a, d[i])
                        }
                        return t
                    }
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: function(t, e) {
                        var n, i = e.offset,
                            r = t.offsets,
                            o = r.popper,
                            a = r.reference,
                            s = t.placement.split("-")[0];
                        return n = z(+i) ? [+i, 0] : function(t, e, n, i) {
                            var r = [0, 0],
                                o = -1 !== ["right", "left"].indexOf(i),
                                a = t.split(/(\+|\-)/).map((function(t) {
                                    return t.trim()
                                })),
                                s = a.indexOf(O(a, (function(t) {
                                    return -1 !== t.search(/,|\s/)
                                })));
                            a[s] && -1 === a[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                            var l = /\s*,\s*|\s+/,
                                u = -1 !== s ? [a.slice(0, s).concat([a[s].split(l)[0]]), [a[s].split(l)[1]].concat(a.slice(s + 1))] : [a];
                            return (u = u.map((function(t, i) {
                                var r = (1 === i ? !o : o) ? "height" : "width",
                                    a = !1;
                                return t.reduce((function(t, e) {
                                    return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, a = !0, t) : a ? (t[t.length - 1] += e, a = !1, t) : t.concat(e)
                                }), []).map((function(t) {
                                    return function(t, e, n, i) {
                                        var r = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                            o = +r[1],
                                            a = r[2];
                                        if (!o) return t;
                                        if (0 === a.indexOf("%")) {
                                            var s = void 0;
                                            switch (a) {
                                                case "%p":
                                                    s = n;
                                                    break;
                                                case "%":
                                                case "%r":
                                                default:
                                                    s = i
                                            }
                                            return T(s)[e] / 100 * o
                                        }
                                        return "vh" === a || "vw" === a ? ("vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o : o
                                    }(t, r, e, n)
                                }))
                            }))).forEach((function(t, e) {
                                t.forEach((function(n, i) {
                                    z(n) && (r[e] += n * ("-" === t[i - 1] ? -1 : 1))
                                }))
                            })), r
                        }(i, o, a, s), "left" === s ? (o.top += n[0], o.left -= n[1]) : "right" === s ? (o.top += n[0], o.left += n[1]) : "top" === s ? (o.left += n[0], o.top -= n[1]) : "bottom" === s && (o.left += n[0], o.top += n[1]), t.popper = o, t
                    },
                    offset: 0
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function(t, e) {
                        var n = e.boundariesElement || h(t.instance.popper);
                        t.instance.reference === n && (n = h(n));
                        var i = R("transform"),
                            r = t.instance.popper.style,
                            o = r.top,
                            a = r.left,
                            s = r[i];
                        r.top = "", r.left = "", r[i] = "";
                        var l = C(t.instance.popper, t.instance.reference, e.padding, n, t.positionFixed);
                        r.top = o, r.left = a, r[i] = s, e.boundaries = l;
                        var u = t.offsets.popper,
                            d = {
                                primary: function(t) {
                                    var n = u[t];
                                    return u[t] < l[t] && !e.escapeWithReference && (n = Math.max(u[t], l[t])), w({}, t, n)
                                },
                                secondary: function(t) {
                                    var n = "right" === t ? "left" : "top",
                                        i = u[n];
                                    return u[t] > l[t] && !e.escapeWithReference && (i = Math.min(u[n], l[t] - ("right" === t ? u.width : u.height))), w({}, n, i)
                                }
                            };
                        return e.priority.forEach((function(t) {
                            var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                            u = _({}, u, d[e](t))
                        })), t.offsets.popper = u, t
                    },
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent"
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function(t) {
                        var e = t.offsets,
                            n = e.popper,
                            i = e.reference,
                            r = t.placement.split("-")[0],
                            o = Math.floor,
                            a = -1 !== ["top", "bottom"].indexOf(r),
                            s = a ? "right" : "bottom",
                            l = a ? "left" : "top",
                            u = a ? "width" : "height";
                        return n[s] < o(i[l]) && (t.offsets.popper[l] = o(i[l]) - n[u]), n[l] > o(i[s]) && (t.offsets.popper[l] = o(i[s])), t
                    }
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function(t, e) {
                        var n;
                        if (!Y(t.instance.modifiers, "arrow", "keepTogether")) return t;
                        var i = e.element;
                        if ("string" == typeof i) {
                            if (!(i = t.instance.popper.querySelector(i))) return t
                        } else if (!t.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
                        var r = t.placement.split("-")[0],
                            o = t.offsets,
                            s = o.popper,
                            l = o.reference,
                            u = -1 !== ["left", "right"].indexOf(r),
                            d = u ? "height" : "width",
                            c = u ? "Top" : "Left",
                            h = c.toLowerCase(),
                            f = u ? "left" : "top",
                            p = u ? "bottom" : "right",
                            g = E(i)[d];
                        l[p] - g < s[h] && (t.offsets.popper[h] -= s[h] - (l[p] - g)), l[h] + g > s[p] && (t.offsets.popper[h] += l[h] + g - s[p]), t.offsets.popper = T(t.offsets.popper);
                        var m = l[h] + l[d] / 2 - g / 2,
                            v = a(t.instance.popper),
                            b = parseFloat(v["margin" + c], 10),
                            y = parseFloat(v["border" + c + "Width"], 10),
                            x = m - t.offsets.popper[h] - b - y;
                        return x = Math.max(Math.min(s[d] - g, x), 0), t.arrowElement = i, t.offsets.arrow = (w(n = {}, h, Math.round(x)), w(n, f, ""), n), t
                    },
                    element: "[x-arrow]"
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function(t, e) {
                        if (F(t.instance.modifiers, "inner")) return t;
                        if (t.flipped && t.placement === t.originalPlacement) return t;
                        var n = C(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement, t.positionFixed),
                            i = t.placement.split("-")[0],
                            r = P(i),
                            o = t.placement.split("-")[1] || "",
                            a = [];
                        switch (e.behavior) {
                            case "flip":
                                a = [i, r];
                                break;
                            case "clockwise":
                                a = q(i);
                                break;
                            case "counterclockwise":
                                a = q(i, !0);
                                break;
                            default:
                                a = e.behavior
                        }
                        return a.forEach((function(s, l) {
                            if (i !== s || a.length === l + 1) return t;
                            i = t.placement.split("-")[0], r = P(i);
                            var u = t.offsets.popper,
                                d = t.offsets.reference,
                                c = Math.floor,
                                h = "left" === i && c(u.right) > c(d.left) || "right" === i && c(u.left) < c(d.right) || "top" === i && c(u.bottom) > c(d.top) || "bottom" === i && c(u.top) < c(d.bottom),
                                f = c(u.left) < c(n.left),
                                p = c(u.right) > c(n.right),
                                g = c(u.top) < c(n.top),
                                m = c(u.bottom) > c(n.bottom),
                                v = "left" === i && f || "right" === i && p || "top" === i && g || "bottom" === i && m,
                                b = -1 !== ["top", "bottom"].indexOf(i),
                                y = !!e.flipVariations && (b && "start" === o && f || b && "end" === o && p || !b && "start" === o && g || !b && "end" === o && m) || !!e.flipVariationsByContent && (b && "start" === o && p || b && "end" === o && f || !b && "start" === o && m || !b && "end" === o && g);
                            (h || v || y) && (t.flipped = !0, (h || v) && (i = a[l + 1]), y && (o = function(t) {
                                return "end" === t ? "start" : "start" === t ? "end" : t
                            }(o)), t.placement = i + (o ? "-" + o : ""), t.offsets.popper = _({}, t.offsets.popper, L(t.instance.popper, t.offsets.reference, t.placement)), t = I(t.instance.modifiers, t, "flip"))
                        })), t
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport",
                    flipVariations: !1,
                    flipVariationsByContent: !1
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function(t) {
                        var e = t.placement,
                            n = e.split("-")[0],
                            i = t.offsets,
                            r = i.popper,
                            o = i.reference,
                            a = -1 !== ["left", "right"].indexOf(n),
                            s = -1 === ["top", "left"].indexOf(n);
                        return r[a ? "left" : "top"] = o[n] - (s ? r[a ? "width" : "height"] : 0), t.placement = P(e), t.offsets.popper = T(r), t
                    }
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function(t) {
                        if (!Y(t.instance.modifiers, "hide", "preventOverflow")) return t;
                        var e = t.offsets.reference,
                            n = O(t.instance.modifiers, (function(t) {
                                return "preventOverflow" === t.name
                            })).boundaries;
                        if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
                            if (!0 === t.hide) return t;
                            t.hide = !0, t.attributes["x-out-of-boundaries"] = ""
                        } else {
                            if (!1 === t.hide) return t;
                            t.hide = !1, t.attributes["x-out-of-boundaries"] = !1
                        }
                        return t
                    }
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function(t, e) {
                        var n = e.x,
                            i = e.y,
                            r = t.offsets.popper,
                            o = O(t.instance.modifiers, (function(t) {
                                return "applyStyle" === t.name
                            })).gpuAcceleration;
                        void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                        var a, s, l = void 0 !== o ? o : e.gpuAcceleration,
                            u = h(t.instance.popper),
                            d = k(u),
                            c = {
                                position: r.position
                            },
                            f = function(t, e) {
                                var n = t.offsets,
                                    i = n.popper,
                                    r = Math.round,
                                    o = Math.floor,
                                    a = function(t) {
                                        return t
                                    },
                                    s = r(n.reference.width),
                                    l = r(i.width),
                                    u = -1 !== ["left", "right"].indexOf(t.placement),
                                    d = -1 !== t.placement.indexOf("-"),
                                    c = e ? u || d || s % 2 == l % 2 ? r : o : a,
                                    h = e ? r : a;
                                return {
                                    left: c(s % 2 == 1 && l % 2 == 1 && !d && e ? i.left - 1 : i.left),
                                    top: h(i.top),
                                    bottom: h(i.bottom),
                                    right: c(i.right)
                                }
                            }(t, window.devicePixelRatio < 2 || !V),
                            p = "bottom" === n ? "top" : "bottom",
                            g = "right" === i ? "left" : "right",
                            m = R("transform");
                        if (s = "bottom" === p ? "HTML" === u.nodeName ? -u.clientHeight + f.bottom : -d.height + f.bottom : f.top, a = "right" === g ? "HTML" === u.nodeName ? -u.clientWidth + f.right : -d.width + f.right : f.left, l && m) c[m] = "translate3d(" + a + "px, " + s + "px, 0)", c[p] = 0, c[g] = 0, c.willChange = "transform";
                        else {
                            var v = "right" === g ? -1 : 1;
                            c[p] = s * ("bottom" === p ? -1 : 1), c[g] = a * v, c.willChange = p + ", " + g
                        }
                        return t.attributes = _({}, {
                            "x-placement": t.placement
                        }, t.attributes), t.styles = _({}, c, t.styles), t.arrowStyles = _({}, t.offsets.arrow, t.arrowStyles), t
                    },
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right"
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function(t) {
                        var e, n;
                        return H(t.instance.popper, t.styles), e = t.instance.popper, n = t.attributes, Object.keys(n).forEach((function(t) {
                            !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t)
                        })), t.arrowElement && Object.keys(t.arrowStyles).length && H(t.arrowElement, t.arrowStyles), t
                    },
                    onLoad: function(t, e, n, i, r) {
                        var o = A(r, e, t, n.positionFixed),
                            a = D(n.placement, o, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                        return e.setAttribute("x-placement", a), H(e, {
                            position: n.positionFixed ? "fixed" : "absolute"
                        }), n
                    },
                    gpuAcceleration: void 0
                }
            }
        },
        $ = function() {
            function t(e, n) {
                var i = this,
                    a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                y(this, t), this.scheduleUpdate = function() {
                    return requestAnimationFrame(i.update)
                }, this.update = r(this.update.bind(this)), this.options = _({}, t.Defaults, a), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = e && e.jquery ? e[0] : e, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(_({}, t.Defaults.modifiers, a.modifiers)).forEach((function(e) {
                    i.options.modifiers[e] = _({}, t.Defaults.modifiers[e] || {}, a.modifiers ? a.modifiers[e] : {})
                })), this.modifiers = Object.keys(this.options.modifiers).map((function(t) {
                    return _({
                        name: t
                    }, i.options.modifiers[t])
                })).sort((function(t, e) {
                    return t.order - e.order
                })), this.modifiers.forEach((function(t) {
                    t.enabled && o(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state)
                })), this.update();
                var s = this.options.eventsEnabled;
                s && this.enableEventListeners(), this.state.eventsEnabled = s
            }
            return x(t, [{
                key: "update",
                value: function() {
                    return U.call(this)
                }
            }, {
                key: "destroy",
                value: function() {
                    return K.call(this)
                }
            }, {
                key: "enableEventListeners",
                value: function() {
                    return W.call(this)
                }
            }, {
                key: "disableEventListeners",
                value: function() {
                    return B.call(this)
                }
            }]), t
        }();
    return $.Utils = ("undefined" != typeof window ? window : global).PopperUtils, $.placements = j, $.Defaults = G, $
})),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("popper.js")) : "function" == typeof define && define.amd ? define(["popper.js"], e) : t.Tooltip = e(t.Popper)
}(this, (function(t) {
    "use strict";
    t = t && t.hasOwnProperty("default") ? t.default : t;
    var e = function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        },
        n = function() {
            function t(t, e) {
                for (var n, i = 0; i < e.length; i++)(n = e[i]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        i = Object.assign || function(t) {
            for (var e, n = 1; n < arguments.length; n++)
                for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t
        },
        r = {
            container: !1,
            delay: 0,
            html: !1,
            placement: "top",
            title: "",
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            offset: 0,
            arrowSelector: ".tooltip-arrow, .tooltip__arrow",
            innerSelector: ".tooltip-inner, .tooltip__inner"
        },
        o = function() {
            function o(t, n) {
                e(this, o), a.call(this), n = i({}, r, n), t.jquery && (t = t[0]), this.reference = t, this.options = n;
                var s = "string" == typeof n.trigger ? n.trigger.split(" ").filter((function(t) {
                    return -1 !== ["click", "hover", "focus"].indexOf(t)
                })) : [];
                this._isOpen = !1, this._popperOptions = {}, this._setEventListeners(t, s, n)
            }
            return n(o, [{
                key: "_create",
                value: function(t, e, n, i) {
                    var r = window.document.createElement("div");
                    r.innerHTML = e.trim();
                    var o = r.childNodes[0];
                    o.id = "tooltip_" + Math.random().toString(36).substr(2, 10), o.setAttribute("aria-hidden", "false");
                    var a = r.querySelector(this.options.innerSelector);
                    return this._addTitleContent(t, n, i, a), o
                }
            }, {
                key: "_addTitleContent",
                value: function(t, e, n, i) {
                    if (1 === e.nodeType || 11 === e.nodeType) n && i.appendChild(e);
                    else if (function(t) {
                            return t && "[object Function]" === {}.toString.call(t)
                        }(e)) {
                        var r = e.call(t);
                        n ? i.innerHTML = r : i.textContent = r
                    } else n ? i.innerHTML = e : i.textContent = e
                }
            }, {
                key: "_show",
                value: function(e, n) {
                    if (this._isOpen && !this._isOpening) return this;
                    if (this._isOpen = !0, this._tooltipNode) return this._tooltipNode.style.visibility = "visible", this._tooltipNode.setAttribute("aria-hidden", "false"), this.popperInstance.update(), this;
                    var r = e.getAttribute("title") || n.title;
                    if (!r) return this;
                    var o = this._create(e, n.template, r, n.html);
                    e.setAttribute("aria-describedby", o.id);
                    var a = this._findContainer(n.container, e);
                    return this._append(o, a), this._popperOptions = i({}, n.popperOptions, {
                        placement: n.placement
                    }), this._popperOptions.modifiers = i({}, this._popperOptions.modifiers, {
                        arrow: i({}, this._popperOptions.modifiers && this._popperOptions.modifiers.arrow, {
                            element: n.arrowSelector
                        }),
                        offset: i({}, this._popperOptions.modifiers && this._popperOptions.modifiers.offset, {
                            offset: n.offset
                        })
                    }), n.boundariesElement && (this._popperOptions.modifiers.preventOverflow = {
                        boundariesElement: n.boundariesElement
                    }), this.popperInstance = new t(e, o, this._popperOptions), this._tooltipNode = o, this
                }
            }, {
                key: "_hide",
                value: function() {
                    return this._isOpen ? (this._isOpen = !1, this._tooltipNode.style.visibility = "hidden", this._tooltipNode.setAttribute("aria-hidden", "true"), this) : this
                }
            }, {
                key: "_dispose",
                value: function() {
                    var t = this;
                    return this._events.forEach((function(e) {
                        t.reference.removeEventListener(e.event, e.func)
                    })), this._events = [], this._tooltipNode && (this._hide(), this.popperInstance.destroy(), !this.popperInstance.options.removeOnDestroy && (this._tooltipNode.parentNode.removeChild(this._tooltipNode), this._tooltipNode = null)), this
                }
            }, {
                key: "_findContainer",
                value: function(t, e) {
                    return "string" == typeof t ? t = window.document.querySelector(t) : !1 === t && (t = e.parentNode), t
                }
            }, {
                key: "_append",
                value: function(t, e) {
                    e.appendChild(t)
                }
            }, {
                key: "_setEventListeners",
                value: function(t, e, n) {
                    var i = this,
                        r = [],
                        o = [];
                    e.forEach((function(t) {
                        "hover" === t ? (r.push("mouseenter"), o.push("mouseleave")) : "focus" === t ? (r.push("focus"), o.push("blur")) : "click" === t && (r.push("click"), o.push("click"))
                    })), r.forEach((function(e) {
                        var r = function(e) {
                            !0 === i._isOpening || (e.usedByTooltip = !0, i._scheduleShow(t, n.delay, n, e))
                        };
                        i._events.push({
                            event: e,
                            func: r
                        }), t.addEventListener(e, r)
                    })), o.forEach((function(e) {
                        var r = function(e) {
                            !0 === e.usedByTooltip || i._scheduleHide(t, n.delay, n, e)
                        };
                        i._events.push({
                            event: e,
                            func: r
                        }), t.addEventListener(e, r), "click" === e && n.closeOnClickOutside && document.addEventListener("mousedown", (function(e) {
                            if (i._isOpening) {
                                var n = i.popperInstance.popper;
                                t.contains(e.target) || n.contains(e.target) || r(e)
                            }
                        }), !0)
                    }))
                }
            }, {
                key: "_scheduleShow",
                value: function(t, e, n) {
                    var i = this;
                    this._isOpening = !0, this._showTimeout = window.setTimeout((function() {
                        return i._show(t, n)
                    }), e && e.show || e || 0)
                }
            }, {
                key: "_scheduleHide",
                value: function(t, e, n, i) {
                    var r = this;
                    this._isOpening = !1;
                    var o = e && e.hide || e || 0;
                    window.clearTimeout(this._showTimeout), window.setTimeout((function() {
                        if (!1 !== r._isOpen && document.body.contains(r._tooltipNode)) {
                            if ("mouseleave" === i.type && r._setTooltipNodeEvent(i, t, e, n)) return;
                            r._hide(t, n)
                        }
                    }), o)
                }
            }, {
                key: "_updateTitleContent",
                value: function(t) {
                    if (void 0 !== this._tooltipNode) {
                        var e = this._tooltipNode.querySelector(this.options.innerSelector);
                        this._clearTitleContent(e, this.options.html, this.reference.getAttribute("title") || this.options.title), this._addTitleContent(this.reference, t, this.options.html, e), this.options.title = t, this.popperInstance.update()
                    } else void 0 !== this.options.title && (this.options.title = t)
                }
            }, {
                key: "_clearTitleContent",
                value: function(t, e, n) {
                    1 === n.nodeType || 11 === n.nodeType ? e && t.removeChild(n) : e ? t.innerHTML = "" : t.textContent = ""
                }
            }]), o
        }(),
        a = function() {
            var t = this;
            this.show = function() {
                return t._show(t.reference, t.options)
            }, this.hide = function() {
                return t._hide()
            }, this.dispose = function() {
                return t._dispose()
            }, this.toggle = function() {
                return t._isOpen ? t.hide() : t.show()
            }, this.updateTitleContent = function(e) {
                return t._updateTitleContent(e)
            }, this._events = [], this._setTooltipNodeEvent = function(e, n, i, r) {
                return !!t._tooltipNode.contains(e.relatedreference || e.toElement || e.relatedTarget) && (t._tooltipNode.addEventListener(e.type, (function i(o) {
                    var a = o.relatedreference || o.toElement || o.relatedTarget;
                    t._tooltipNode.removeEventListener(e.type, i), n.contains(a) || t._scheduleHide(n, r.delay, r, o)
                })), !0)
            }
        };
    return o
})),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.PerfectScrollbar = e()
}(this, (function() {
    "use strict";

    function t(t) {
        return getComputedStyle(t)
    }

    function e(t, e) {
        for (var n in e) {
            var i = e[n];
            "number" == typeof i && (i += "px"), t.style[n] = i
        }
        return t
    }

    function n(t) {
        var e = document.createElement("div");
        return e.className = t, e
    }
    var i = "undefined" != typeof Element && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector);

    function r(t, e) {
        if (!i) throw new Error("No element matching method supported");
        return i.call(t, e)
    }

    function o(t) {
        t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t)
    }

    function a(t, e) {
        return Array.prototype.filter.call(t.children, (function(t) {
            return r(t, e)
        }))
    }
    var s = {
            main: "ps",
            element: {
                thumb: function(t) {
                    return "ps__thumb-" + t
                },
                rail: function(t) {
                    return "ps__rail-" + t
                },
                consuming: "ps__child--consume"
            },
            state: {
                focus: "ps--focus",
                clicking: "ps--clicking",
                active: function(t) {
                    return "ps--active-" + t
                },
                scrolling: function(t) {
                    return "ps--scrolling-" + t
                }
            }
        },
        l = {
            x: null,
            y: null
        };

    function u(t, e) {
        var n = t.element.classList,
            i = s.state.scrolling(e);
        n.contains(i) ? clearTimeout(l[e]) : n.add(i)
    }

    function d(t, e) {
        l[e] = setTimeout((function() {
            return t.isAlive && t.element.classList.remove(s.state.scrolling(e))
        }), t.settings.scrollingThreshold)
    }
    var c = function(t) {
            this.element = t, this.handlers = {}
        },
        h = {
            isEmpty: {
                configurable: !0
            }
        };
    c.prototype.bind = function(t, e) {
        void 0 === this.handlers[t] && (this.handlers[t] = []), this.handlers[t].push(e), this.element.addEventListener(t, e, !1)
    }, c.prototype.unbind = function(t, e) {
        var n = this;
        this.handlers[t] = this.handlers[t].filter((function(i) {
            return !(!e || i === e) || (n.element.removeEventListener(t, i, !1), !1)
        }))
    }, c.prototype.unbindAll = function() {
        for (var t in this.handlers) this.unbind(t)
    }, h.isEmpty.get = function() {
        var t = this;
        return Object.keys(this.handlers).every((function(e) {
            return 0 === t.handlers[e].length
        }))
    }, Object.defineProperties(c.prototype, h);
    var f = function() {
        this.eventElements = []
    };

    function p(t) {
        if ("function" == typeof window.CustomEvent) return new CustomEvent(t);
        var e = document.createEvent("CustomEvent");
        return e.initCustomEvent(t, !1, !1, void 0), e
    }
    f.prototype.eventElement = function(t) {
        var e = this.eventElements.filter((function(e) {
            return e.element === t
        }))[0];
        return e || (e = new c(t), this.eventElements.push(e)), e
    }, f.prototype.bind = function(t, e, n) {
        this.eventElement(t).bind(e, n)
    }, f.prototype.unbind = function(t, e, n) {
        var i = this.eventElement(t);
        i.unbind(e, n), i.isEmpty && this.eventElements.splice(this.eventElements.indexOf(i), 1)
    }, f.prototype.unbindAll = function() {
        this.eventElements.forEach((function(t) {
            return t.unbindAll()
        })), this.eventElements = []
    }, f.prototype.once = function(t, e, n) {
        var i = this.eventElement(t),
            r = function(t) {
                i.unbind(e, r), n(t)
            };
        i.bind(e, r)
    };
    var g = function(t, e, n, i, r) {
        var o;
        if (void 0 === i && (i = !0), void 0 === r && (r = !1), "top" === e) o = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"];
        else {
            if ("left" !== e) throw new Error("A proper axis should be provided");
            o = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"]
        }! function(t, e, n, i, r) {
            var o = n[0],
                a = n[1],
                s = n[2],
                l = n[3],
                c = n[4],
                h = n[5];
            void 0 === i && (i = !0), void 0 === r && (r = !1);
            var f = t.element;
            t.reach[l] = null, f[s] < 1 && (t.reach[l] = "start"), f[s] > t[o] - t[a] - 1 && (t.reach[l] = "end"), e && (f.dispatchEvent(p("ps-scroll-" + l)), e < 0 ? f.dispatchEvent(p("ps-scroll-" + c)) : e > 0 && f.dispatchEvent(p("ps-scroll-" + h)), i && function(t, e) {
                u(t, e), d(t, e)
            }(t, l)), t.reach[l] && (e || r) && f.dispatchEvent(p("ps-" + l + "-reach-" + t.reach[l]))
        }(t, n, o, i, r)
    };

    function m(t) {
        return parseInt(t, 10) || 0
    }
    var v = {
            isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
            supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
            supportsIePointer: "undefined" != typeof navigator && navigator.msMaxTouchPoints,
            isChrome: "undefined" != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent)
        },
        b = function(t) {
            var n = t.element,
                i = Math.floor(n.scrollTop);
            t.containerWidth = n.clientWidth, t.containerHeight = n.clientHeight, t.contentWidth = n.scrollWidth, t.contentHeight = n.scrollHeight, n.contains(t.scrollbarXRail) || (a(n, s.element.rail("x")).forEach((function(t) {
                    return o(t)
                })), n.appendChild(t.scrollbarXRail)), n.contains(t.scrollbarYRail) || (a(n, s.element.rail("y")).forEach((function(t) {
                    return o(t)
                })), n.appendChild(t.scrollbarYRail)), !t.settings.suppressScrollX && t.containerWidth + t.settings.scrollXMarginOffset < t.contentWidth ? (t.scrollbarXActive = !0, t.railXWidth = t.containerWidth - t.railXMarginWidth, t.railXRatio = t.containerWidth / t.railXWidth, t.scrollbarXWidth = y(t, m(t.railXWidth * t.containerWidth / t.contentWidth)), t.scrollbarXLeft = m((t.negativeScrollAdjustment + n.scrollLeft) * (t.railXWidth - t.scrollbarXWidth) / (t.contentWidth - t.containerWidth))) : t.scrollbarXActive = !1, !t.settings.suppressScrollY && t.containerHeight + t.settings.scrollYMarginOffset < t.contentHeight ? (t.scrollbarYActive = !0, t.railYHeight = t.containerHeight - t.railYMarginHeight, t.railYRatio = t.containerHeight / t.railYHeight, t.scrollbarYHeight = y(t, m(t.railYHeight * t.containerHeight / t.contentHeight)), t.scrollbarYTop = m(i * (t.railYHeight - t.scrollbarYHeight) / (t.contentHeight - t.containerHeight))) : t.scrollbarYActive = !1, t.scrollbarXLeft >= t.railXWidth - t.scrollbarXWidth && (t.scrollbarXLeft = t.railXWidth - t.scrollbarXWidth), t.scrollbarYTop >= t.railYHeight - t.scrollbarYHeight && (t.scrollbarYTop = t.railYHeight - t.scrollbarYHeight),
                function(t, n) {
                    var i = {
                            width: n.railXWidth
                        },
                        r = Math.floor(t.scrollTop);
                    i.left = n.isRtl ? n.negativeScrollAdjustment + t.scrollLeft + n.containerWidth - n.contentWidth : t.scrollLeft, n.isScrollbarXUsingBottom ? i.bottom = n.scrollbarXBottom - r : i.top = n.scrollbarXTop + r, e(n.scrollbarXRail, i);
                    var o = {
                        top: r,
                        height: n.railYHeight
                    };
                    n.isScrollbarYUsingRight ? o.right = n.isRtl ? n.contentWidth - (n.negativeScrollAdjustment + t.scrollLeft) - n.scrollbarYRight - n.scrollbarYOuterWidth : n.scrollbarYRight - t.scrollLeft : o.left = n.isRtl ? n.negativeScrollAdjustment + t.scrollLeft + 2 * n.containerWidth - n.contentWidth - n.scrollbarYLeft - n.scrollbarYOuterWidth : n.scrollbarYLeft + t.scrollLeft, e(n.scrollbarYRail, o), e(n.scrollbarX, {
                        left: n.scrollbarXLeft,
                        width: n.scrollbarXWidth - n.railBorderXWidth
                    }), e(n.scrollbarY, {
                        top: n.scrollbarYTop,
                        height: n.scrollbarYHeight - n.railBorderYWidth
                    })
                }(n, t), t.scrollbarXActive ? n.classList.add(s.state.active("x")) : (n.classList.remove(s.state.active("x")), t.scrollbarXWidth = 0, t.scrollbarXLeft = 0, n.scrollLeft = 0), t.scrollbarYActive ? n.classList.add(s.state.active("y")) : (n.classList.remove(s.state.active("y")), t.scrollbarYHeight = 0, t.scrollbarYTop = 0, n.scrollTop = 0)
        };

    function y(t, e) {
        return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)), e
    }

    function x(t, e) {
        var n = e[0],
            i = e[1],
            r = e[2],
            o = e[3],
            a = e[5],
            l = e[6],
            c = e[7],
            h = e[8],
            f = t.element,
            p = null,
            g = null,
            m = null;

        function v(e) {
            f[l] = p + m * (e[r] - g), u(t, c), b(t), e.stopPropagation(), e.preventDefault()
        }

        function y() {
            d(t, c), t[h].classList.remove(s.state.clicking), t.event.unbind(t.ownerDocument, "mousemove", v)
        }
        t.event.bind(t[e[4]], "mousedown", (function(e) {
            p = f[l], g = e[r], m = (t[i] - t[n]) / (t[o] - t[a]), t.event.bind(t.ownerDocument, "mousemove", v), t.event.once(t.ownerDocument, "mouseup", y), t[h].classList.add(s.state.clicking), e.stopPropagation(), e.preventDefault()
        }))
    }
    var w = {
            "click-rail": function(t) {
                t.event.bind(t.scrollbarY, "mousedown", (function(t) {
                    return t.stopPropagation()
                })), t.event.bind(t.scrollbarYRail, "mousedown", (function(e) {
                    var n = e.pageY - window.pageYOffset - t.scrollbarYRail.getBoundingClientRect().top;
                    t.element.scrollTop += (n > t.scrollbarYTop ? 1 : -1) * t.containerHeight, b(t), e.stopPropagation()
                })), t.event.bind(t.scrollbarX, "mousedown", (function(t) {
                    return t.stopPropagation()
                })), t.event.bind(t.scrollbarXRail, "mousedown", (function(e) {
                    var n = e.pageX - window.pageXOffset - t.scrollbarXRail.getBoundingClientRect().left;
                    t.element.scrollLeft += (n > t.scrollbarXLeft ? 1 : -1) * t.containerWidth, b(t), e.stopPropagation()
                }))
            },
            "drag-thumb": function(t) {
                x(t, ["containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x", "scrollbarXRail"]), x(t, ["containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y", "scrollbarYRail"])
            },
            keyboard: function(t) {
                var e = t.element;
                t.event.bind(t.ownerDocument, "keydown", (function(n) {
                    if (!(n.isDefaultPrevented && n.isDefaultPrevented() || n.defaultPrevented) && (r(e, ":hover") || r(t.scrollbarX, ":focus") || r(t.scrollbarY, ":focus"))) {
                        var i, o = document.activeElement ? document.activeElement : t.ownerDocument.activeElement;
                        if (o) {
                            if ("IFRAME" === o.tagName) o = o.contentDocument.activeElement;
                            else
                                for (; o.shadowRoot;) o = o.shadowRoot.activeElement;
                            if (r(i = o, "input,[contenteditable]") || r(i, "select,[contenteditable]") || r(i, "textarea,[contenteditable]") || r(i, "button,[contenteditable]")) return
                        }
                        var a = 0,
                            s = 0;
                        switch (n.which) {
                            case 37:
                                a = n.metaKey ? -t.contentWidth : n.altKey ? -t.containerWidth : -30;
                                break;
                            case 38:
                                s = n.metaKey ? t.contentHeight : n.altKey ? t.containerHeight : 30;
                                break;
                            case 39:
                                a = n.metaKey ? t.contentWidth : n.altKey ? t.containerWidth : 30;
                                break;
                            case 40:
                                s = n.metaKey ? -t.contentHeight : n.altKey ? -t.containerHeight : -30;
                                break;
                            case 32:
                                s = n.shiftKey ? t.containerHeight : -t.containerHeight;
                                break;
                            case 33:
                                s = t.containerHeight;
                                break;
                            case 34:
                                s = -t.containerHeight;
                                break;
                            case 36:
                                s = t.contentHeight;
                                break;
                            case 35:
                                s = -t.contentHeight;
                                break;
                            default:
                                return
                        }
                        t.settings.suppressScrollX && 0 !== a || t.settings.suppressScrollY && 0 !== s || (e.scrollTop -= s, e.scrollLeft += a, b(t), function(n, i) {
                            var r = Math.floor(e.scrollTop);
                            if (0 === n) {
                                if (!t.scrollbarYActive) return !1;
                                if (0 === r && i > 0 || r >= t.contentHeight - t.containerHeight && i < 0) return !t.settings.wheelPropagation
                            }
                            var o = e.scrollLeft;
                            if (0 === i) {
                                if (!t.scrollbarXActive) return !1;
                                if (0 === o && n < 0 || o >= t.contentWidth - t.containerWidth && n > 0) return !t.settings.wheelPropagation
                            }
                            return !0
                        }(a, s) && n.preventDefault())
                    }
                }))
            },
            wheel: function(e) {
                var n = e.element;

                function i(i) {
                    var r = function(t) {
                            var e = t.deltaX,
                                n = -1 * t.deltaY;
                            return void 0 !== e && void 0 !== n || (e = -1 * t.wheelDeltaX / 6, n = t.wheelDeltaY / 6), t.deltaMode && 1 === t.deltaMode && (e *= 10, n *= 10), e != e && n != n && (e = 0, n = t.wheelDelta), t.shiftKey ? [-n, -e] : [e, n]
                        }(i),
                        o = r[0],
                        a = r[1];
                    if (! function(e, i, r) {
                            if (!v.isWebKit && n.querySelector("select:focus")) return !0;
                            if (!n.contains(e)) return !1;
                            for (var o = e; o && o !== n;) {
                                if (o.classList.contains(s.element.consuming)) return !0;
                                var a = t(o);
                                if ([a.overflow, a.overflowX, a.overflowY].join("").match(/(scroll|auto)/)) {
                                    var l = o.scrollHeight - o.clientHeight;
                                    if (l > 0 && !(0 === o.scrollTop && r > 0 || o.scrollTop === l && r < 0)) return !0;
                                    var u = o.scrollWidth - o.clientWidth;
                                    if (u > 0 && !(0 === o.scrollLeft && i < 0 || o.scrollLeft === u && i > 0)) return !0
                                }
                                o = o.parentNode
                            }
                            return !1
                        }(i.target, o, a)) {
                        var l = !1;
                        e.settings.useBothWheelAxes ? e.scrollbarYActive && !e.scrollbarXActive ? (a ? n.scrollTop -= a * e.settings.wheelSpeed : n.scrollTop += o * e.settings.wheelSpeed, l = !0) : e.scrollbarXActive && !e.scrollbarYActive && (o ? n.scrollLeft += o * e.settings.wheelSpeed : n.scrollLeft -= a * e.settings.wheelSpeed, l = !0) : (n.scrollTop -= a * e.settings.wheelSpeed, n.scrollLeft += o * e.settings.wheelSpeed), b(e), (l = l || function(t, i) {
                            var r = Math.floor(n.scrollTop),
                                o = 0 === n.scrollTop,
                                a = r + n.offsetHeight === n.scrollHeight,
                                s = 0 === n.scrollLeft,
                                l = n.scrollLeft + n.offsetWidth === n.scrollWidth;
                            return !(Math.abs(i) > Math.abs(t) ? o || a : s || l) || !e.settings.wheelPropagation
                        }(o, a)) && !i.ctrlKey && (i.stopPropagation(), i.preventDefault())
                    }
                }
                void 0 !== window.onwheel ? e.event.bind(n, "wheel", i) : void 0 !== window.onmousewheel && e.event.bind(n, "mousewheel", i)
            },
            touch: function(e) {
                if (v.supportsTouch || v.supportsIePointer) {
                    var n = e.element,
                        i = {},
                        r = 0,
                        o = {},
                        a = null;
                    v.supportsTouch ? (e.event.bind(n, "touchstart", c), e.event.bind(n, "touchmove", h), e.event.bind(n, "touchend", f)) : v.supportsIePointer && (window.PointerEvent ? (e.event.bind(n, "pointerdown", c), e.event.bind(n, "pointermove", h), e.event.bind(n, "pointerup", f)) : window.MSPointerEvent && (e.event.bind(n, "MSPointerDown", c), e.event.bind(n, "MSPointerMove", h), e.event.bind(n, "MSPointerUp", f)))
                }

                function l(t, i) {
                    n.scrollTop -= i, n.scrollLeft -= t, b(e)
                }

                function u(t) {
                    return t.targetTouches ? t.targetTouches[0] : t
                }

                function d(t) {
                    return !(t.pointerType && "pen" === t.pointerType && 0 === t.buttons || (!t.targetTouches || 1 !== t.targetTouches.length) && (!t.pointerType || "mouse" === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE))
                }

                function c(t) {
                    if (d(t)) {
                        var e = u(t);
                        i.pageX = e.pageX, i.pageY = e.pageY, r = (new Date).getTime(), null !== a && clearInterval(a)
                    }
                }

                function h(a) {
                    if (d(a)) {
                        var c = u(a),
                            h = {
                                pageX: c.pageX,
                                pageY: c.pageY
                            },
                            f = h.pageX - i.pageX,
                            p = h.pageY - i.pageY;
                        if (function(e, i, r) {
                                if (!n.contains(e)) return !1;
                                for (var o = e; o && o !== n;) {
                                    if (o.classList.contains(s.element.consuming)) return !0;
                                    var a = t(o);
                                    if ([a.overflow, a.overflowX, a.overflowY].join("").match(/(scroll|auto)/)) {
                                        var l = o.scrollHeight - o.clientHeight;
                                        if (l > 0 && !(0 === o.scrollTop && r > 0 || o.scrollTop === l && r < 0)) return !0;
                                        var u = o.scrollLeft - o.clientWidth;
                                        if (u > 0 && !(0 === o.scrollLeft && i < 0 || o.scrollLeft === u && i > 0)) return !0
                                    }
                                    o = o.parentNode
                                }
                                return !1
                            }(a.target, f, p)) return;
                        l(f, p), i = h;
                        var g = (new Date).getTime(),
                            m = g - r;
                        m > 0 && (o.x = f / m, o.y = p / m, r = g),
                            function(t, i) {
                                var r = Math.floor(n.scrollTop),
                                    o = n.scrollLeft,
                                    a = Math.abs(t),
                                    s = Math.abs(i);
                                if (s > a) {
                                    if (i < 0 && r === e.contentHeight - e.containerHeight || i > 0 && 0 === r) return 0 === window.scrollY && i > 0 && v.isChrome
                                } else if (a > s && (t < 0 && o === e.contentWidth - e.containerWidth || t > 0 && 0 === o)) return !0;
                                return !0
                            }(f, p) && a.preventDefault()
                    }
                }

                function f() {
                    e.settings.swipeEasing && (clearInterval(a), a = setInterval((function() {
                        e.isInitialized ? clearInterval(a) : o.x || o.y ? Math.abs(o.x) < .01 && Math.abs(o.y) < .01 ? clearInterval(a) : (l(30 * o.x, 30 * o.y), o.x *= .8, o.y *= .8) : clearInterval(a)
                    }), 10))
                }
            }
        },
        _ = function(i, r) {
            var o = this;
            if (void 0 === r && (r = {}), "string" == typeof i && (i = document.querySelector(i)), !i || !i.nodeName) throw new Error("no element is specified to initialize PerfectScrollbar");
            for (var a in this.element = i, i.classList.add(s.main), this.settings = {
                    handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
                    maxScrollbarLength: null,
                    minScrollbarLength: null,
                    scrollingThreshold: 1e3,
                    scrollXMarginOffset: 0,
                    scrollYMarginOffset: 0,
                    suppressScrollX: !1,
                    suppressScrollY: !1,
                    swipeEasing: !0,
                    useBothWheelAxes: !1,
                    wheelPropagation: !0,
                    wheelSpeed: 1
                }, r) o.settings[a] = r[a];
            this.containerWidth = null, this.containerHeight = null, this.contentWidth = null, this.contentHeight = null;
            var l, u, d = function() {
                    return i.classList.add(s.state.focus)
                },
                c = function() {
                    return i.classList.remove(s.state.focus)
                };
            this.isRtl = "rtl" === t(i).direction, this.isNegativeScroll = (u = i.scrollLeft, i.scrollLeft = -1, l = i.scrollLeft < 0, i.scrollLeft = u, l), this.negativeScrollAdjustment = this.isNegativeScroll ? i.scrollWidth - i.clientWidth : 0, this.event = new f, this.ownerDocument = i.ownerDocument || document, this.scrollbarXRail = n(s.element.rail("x")), i.appendChild(this.scrollbarXRail), this.scrollbarX = n(s.element.thumb("x")), this.scrollbarXRail.appendChild(this.scrollbarX), this.scrollbarX.setAttribute("tabindex", 0), this.event.bind(this.scrollbarX, "focus", d), this.event.bind(this.scrollbarX, "blur", c), this.scrollbarXActive = null, this.scrollbarXWidth = null, this.scrollbarXLeft = null;
            var h = t(this.scrollbarXRail);
            this.scrollbarXBottom = parseInt(h.bottom, 10), isNaN(this.scrollbarXBottom) ? (this.isScrollbarXUsingBottom = !1, this.scrollbarXTop = m(h.top)) : this.isScrollbarXUsingBottom = !0, this.railBorderXWidth = m(h.borderLeftWidth) + m(h.borderRightWidth), e(this.scrollbarXRail, {
                display: "block"
            }), this.railXMarginWidth = m(h.marginLeft) + m(h.marginRight), e(this.scrollbarXRail, {
                display: ""
            }), this.railXWidth = null, this.railXRatio = null, this.scrollbarYRail = n(s.element.rail("y")), i.appendChild(this.scrollbarYRail), this.scrollbarY = n(s.element.thumb("y")), this.scrollbarYRail.appendChild(this.scrollbarY), this.scrollbarY.setAttribute("tabindex", 0), this.event.bind(this.scrollbarY, "focus", d), this.event.bind(this.scrollbarY, "blur", c), this.scrollbarYActive = null, this.scrollbarYHeight = null, this.scrollbarYTop = null;
            var p = t(this.scrollbarYRail);
            this.scrollbarYRight = parseInt(p.right, 10), isNaN(this.scrollbarYRight) ? (this.isScrollbarYUsingRight = !1, this.scrollbarYLeft = m(p.left)) : this.isScrollbarYUsingRight = !0, this.scrollbarYOuterWidth = this.isRtl ? function(e) {
                var n = t(e);
                return m(n.width) + m(n.paddingLeft) + m(n.paddingRight) + m(n.borderLeftWidth) + m(n.borderRightWidth)
            }(this.scrollbarY) : null, this.railBorderYWidth = m(p.borderTopWidth) + m(p.borderBottomWidth), e(this.scrollbarYRail, {
                display: "block"
            }), this.railYMarginHeight = m(p.marginTop) + m(p.marginBottom), e(this.scrollbarYRail, {
                display: ""
            }), this.railYHeight = null, this.railYRatio = null, this.reach = {
                x: i.scrollLeft <= 0 ? "start" : i.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
                y: i.scrollTop <= 0 ? "start" : i.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null
            }, this.isAlive = !0, this.settings.handlers.forEach((function(t) {
                return w[t](o)
            })), this.lastScrollTop = Math.floor(i.scrollTop), this.lastScrollLeft = i.scrollLeft, this.event.bind(this.element, "scroll", (function(t) {
                return o.onScroll(t)
            })), b(this)
        };
    return _.prototype.update = function() {
        this.isAlive && (this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0, e(this.scrollbarXRail, {
            display: "block"
        }), e(this.scrollbarYRail, {
            display: "block"
        }), this.railXMarginWidth = m(t(this.scrollbarXRail).marginLeft) + m(t(this.scrollbarXRail).marginRight), this.railYMarginHeight = m(t(this.scrollbarYRail).marginTop) + m(t(this.scrollbarYRail).marginBottom), e(this.scrollbarXRail, {
            display: "none"
        }), e(this.scrollbarYRail, {
            display: "none"
        }), b(this), g(this, "top", 0, !1, !0), g(this, "left", 0, !1, !0), e(this.scrollbarXRail, {
            display: ""
        }), e(this.scrollbarYRail, {
            display: ""
        }))
    }, _.prototype.onScroll = function(t) {
        this.isAlive && (b(this), g(this, "top", this.element.scrollTop - this.lastScrollTop), g(this, "left", this.element.scrollLeft - this.lastScrollLeft), this.lastScrollTop = Math.floor(this.element.scrollTop), this.lastScrollLeft = this.element.scrollLeft)
    }, _.prototype.destroy = function() {
        this.isAlive && (this.event.unbindAll(), o(this.scrollbarX), o(this.scrollbarY), o(this.scrollbarXRail), o(this.scrollbarYRail), this.removePsClasses(), this.element = null, this.scrollbarX = null, this.scrollbarY = null, this.scrollbarXRail = null, this.scrollbarYRail = null, this.isAlive = !1)
    }, _.prototype.removePsClasses = function() {
        this.element.className = this.element.className.split(" ").filter((function(t) {
            return !t.match(/^ps([-_].+|)$/)
        })).join(" ")
    }, _
})), this.Element && function(t) {
        t.matches = t.matches || t.matchesSelector || t.webkitMatchesSelector || t.msMatchesSelector || function(t) {
            for (var e = (this.parentNode || this.document).querySelectorAll(t), n = -1; e[++n] && e[n] != this;);
            return !!e[n]
        }
    }(Element.prototype), this.Element && function(t) {
        t.closest = t.closest || function(t) {
            for (var e = this; e.matches && !e.matches(t);) e = e.parentNode;
            return e.matches ? e : null
        }
    }(Element.prototype), "remove" in Element.prototype || (Element.prototype.remove = function() {
        this.parentNode && this.parentNode.removeChild(this)
    }), this.Element && function(t) {
        t.matches = t.matches || t.matchesSelector || t.webkitMatchesSelector || t.msMatchesSelector || function(t) {
            for (var e = (this.parentNode || this.document).querySelectorAll(t), n = -1; e[++n] && e[n] != this;);
            return !!e[n]
        }
    }(Element.prototype),
    function() {
        for (var t = 0, e = ["webkit", "moz"], n = 0; n < e.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[e[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[n] + "CancelAnimationFrame"] || window[e[n] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(e) {
            var n = (new Date).getTime(),
                i = Math.max(0, 16 - (n - t)),
                r = window.setTimeout((function() {
                    e(n + i)
                }), i);
            return t = n + i, r
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
            clearTimeout(t)
        })
    }(), [Element.prototype, Document.prototype, DocumentFragment.prototype].forEach((function(t) {
        t.hasOwnProperty("prepend") || Object.defineProperty(t, "prepend", {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            value: function() {
                var t = Array.prototype.slice.call(arguments),
                    e = document.createDocumentFragment();
                t.forEach((function(t) {
                    var n = t instanceof Node;
                    e.appendChild(n ? t : document.createTextNode(String(t)))
                })), this.insertBefore(e, this.firstChild)
            }
        })
    })), window.KTUtilElementDataStore = {}, window.KTUtilElementDataStoreID = 0, window.KTUtilDelegatedEventHandlers = {};
var KTUtil = function() {
    var t = [],
        e = {
            sm: 544,
            md: 768,
            lg: 1024,
            xl: 1200
        };
    return {
        init: function(n) {
            var i;
            n && n.breakpoints && (e = n.breakpoints), i = !1, window.addEventListener("resize", (function() {
                clearTimeout(i), i = setTimeout((function() {
                    ! function() {
                        for (var e = 0; e < t.length; e++) t[e].call()
                    }()
                }), 250)
            }))
        },
        addResizeHandler: function(e) {
            t.push(e)
        },
        removeResizeHandler: function(e) {
            for (var n = 0; n < t.length; n++) e === t[n] && delete t[n]
        },
        runResizeHandlers: function() {
            _runResizeHandlers()
        },
        resize: function() {
            if ("function" == typeof Event) window.dispatchEvent(new Event("resize"));
            else {
                var t = window.document.createEvent("UIEvents");
                t.initUIEvent("resize", !0, !1, window, 0), window.dispatchEvent(t)
            }
        },
        getURLParam: function(t) {
            var e, n, i = window.location.search.substring(1).split("&");
            for (e = 0; e < i.length; e++)
                if ((n = i[e].split("="))[0] == t) return unescape(n[1]);
            return null
        },
        isMobileDevice: function() {
            return this.getViewPort().width < this.getBreakpoint("lg")
        },
        isDesktopDevice: function() {
            return !KTUtil.isMobileDevice()
        },
        getViewPort: function() {
            var t = window,
                e = "inner";
            return "innerWidth" in window || (e = "client", t = document.documentElement || document.body), {
                width: t[e + "Width"],
                height: t[e + "Height"]
            }
        },
        isInResponsiveRange: function(t) {
            var e = this.getViewPort().width;
            return "general" == t || "desktop" == t && e >= this.getBreakpoint("lg") + 1 || "tablet" == t && e >= this.getBreakpoint("md") + 1 && e < this.getBreakpoint("lg") || "mobile" == t && e <= this.getBreakpoint("md") || "desktop-and-tablet" == t && e >= this.getBreakpoint("md") + 1 || "tablet-and-mobile" == t && e <= this.getBreakpoint("lg") || "minimal-desktop-and-below" == t && e <= this.getBreakpoint("xl")
        },
        getUniqueID: function(t) {
            return t + Math.floor(Math.random() * (new Date).getTime())
        },
        getBreakpoint: function(t) {
            return e[t]
        },
        isset: function(t, e) {
            var n;
            if (-1 !== (e = e || "").indexOf("[")) throw new Error("Unsupported object path notation.");
            e = e.split(".");
            do {
                if (void 0 === t) return !1;
                if (n = e.shift(), !t.hasOwnProperty(n)) return !1;
                t = t[n]
            } while (e.length);
            return !0
        },
        getHighestZindex: function(t) {
            for (var e, n, i = KTUtil.get(t); i && i !== document;) {
                if (("absolute" === (e = KTUtil.css(i, "position")) || "relative" === e || "fixed" === e) && (n = parseInt(KTUtil.css(i, "z-index")), !isNaN(n) && 0 !== n)) return n;
                i = i.parentNode
            }
            return null
        },
        hasFixedPositionedParent: function(t) {
            for (; t && t !== document;) {
                if (position = KTUtil.css(t, "position"), "fixed" === position) return !0;
                t = t.parentNode
            }
            return !1
        },
        sleep: function(t) {
            for (var e = (new Date).getTime(), n = 0; n < 1e7 && !((new Date).getTime() - e > t); n++);
        },
        getRandomInt: function(t, e) {
            return Math.floor(Math.random() * (e - t + 1)) + t
        },
        isAngularVersion: function() {
            return void 0 !== window.Zone
        },
        deepExtend: function(t) {
            t = t || {};
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                if (n)
                    for (var i in n) n.hasOwnProperty(i) && (t[i] = "object" == typeof n[i] ? KTUtil.deepExtend(t[i], n[i]) : n[i])
            }
            return t
        },
        extend: function(t) {
            t = t || {};
            for (var e = 1; e < arguments.length; e++)
                if (arguments[e])
                    for (var n in arguments[e]) arguments[e].hasOwnProperty(n) && (t[n] = arguments[e][n]);
            return t
        },
        get: function(t) {
            var e;
            return t === document ? document : t && 1 === t.nodeType ? t : (e = document.getElementById(t)) ? e : (e = document.getElementsByTagName(t)) ? e[0] : (e = document.getElementsByClassName(t)) ? e[0] : null
        },
        getByID: function(t) {
            return t && 1 === t.nodeType ? t : document.getElementById(t)
        },
        getByTag: function(t) {
            var e;
            return (e = document.getElementsByTagName(t)) ? e[0] : null
        },
        getByClass: function(t) {
            var e;
            return (e = document.getElementsByClassName(t)) ? e[0] : null
        },
        hasClasses: function(t, e) {
            if (t) {
                for (var n = e.split(" "), i = 0; i < n.length; i++)
                    if (0 == KTUtil.hasClass(t, KTUtil.trim(n[i]))) return !1;
                return !0
            }
        },
        hasClass: function(t, e) {
            if (t) return t.classList ? t.classList.contains(e) : new RegExp("\\b" + e + "\\b").test(t.className)
        },
        addClass: function(t, e) {
            if (t && void 0 !== e) {
                var n = e.split(" ");
                if (t.classList)
                    for (var i = 0; i < n.length; i++) n[i] && n[i].length > 0 && t.classList.add(KTUtil.trim(n[i]));
                else if (!KTUtil.hasClass(t, e))
                    for (i = 0; i < n.length; i++) t.className += " " + KTUtil.trim(n[i])
            }
        },
        removeClass: function(t, e) {
            if (t && void 0 !== e) {
                var n = e.split(" ");
                if (t.classList)
                    for (var i = 0; i < n.length; i++) t.classList.remove(KTUtil.trim(n[i]));
                else if (KTUtil.hasClass(t, e))
                    for (i = 0; i < n.length; i++) t.className = t.className.replace(new RegExp("\\b" + KTUtil.trim(n[i]) + "\\b", "g"), "")
            }
        },
        triggerCustomEvent: function(t, e, n) {
            if (window.CustomEvent) var i = new CustomEvent(e, {
                detail: n
            });
            else(i = document.createEvent("CustomEvent")).initCustomEvent(e, !0, !0, n);
            t.dispatchEvent(i)
        },
        triggerEvent: function(t, e) {
            var n;
            if (t.ownerDocument) n = t.ownerDocument;
            else {
                if (9 != t.nodeType) throw new Error("Invalid node passed to fireEvent: " + t.id);
                n = t
            }
            if (t.dispatchEvent) {
                var i = "";
                switch (e) {
                    case "click":
                    case "mouseenter":
                    case "mouseleave":
                    case "mousedown":
                    case "mouseup":
                        i = "MouseEvents";
                        break;
                    case "focus":
                    case "change":
                    case "blur":
                    case "select":
                        i = "HTMLEvents";
                        break;
                    default:
                        throw "fireEvent: Couldn't find an event class for event '" + e + "'."
                }(r = n.createEvent(i)).initEvent(e, "change" != e, !0), r.synthetic = !0, t.dispatchEvent(r, !0)
            } else if (t.fireEvent) {
                var r;
                (r = n.createEventObject()).synthetic = !0, t.fireEvent("on" + e, r)
            }
        },
        index: function(t) {
            for (var e = (t = KTUtil.get(t)).parentNode.children, n = 0; n < e.length; n++)
                if (e[n] == t) return n
        },
        trim: function(t) {
            return t.trim()
        },
        eventTriggered: function(t) {
            return !!t.currentTarget.dataset.triggered || (t.currentTarget.dataset.triggered = !0, !1)
        },
        remove: function(t) {
            t && t.parentNode && t.parentNode.removeChild(t)
        },
        find: function(t, e) {
            if (t = KTUtil.get(t)) return t.querySelector(e)
        },
        findAll: function(t, e) {
            if (t = KTUtil.get(t)) return t.querySelectorAll(e)
        },
        insertAfter: function(t, e) {
            return e.parentNode.insertBefore(t, e.nextSibling)
        },
        parents: function(t, e) {
            Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(t) {
                for (var e = (this.document || this.ownerDocument).querySelectorAll(t), n = e.length; --n >= 0 && e.item(n) !== this;);
                return n > -1
            });
            for (var n = []; t && t !== document; t = t.parentNode) e ? t.matches(e) && n.push(t) : n.push(t);
            return n
        },
        children: function(t, e, n) {
            if (t && t.childNodes) {
                for (var i = [], r = 0, o = t.childNodes.length; r < o; ++r) 1 == t.childNodes[r].nodeType && KTUtil.matches(t.childNodes[r], e, n) && i.push(t.childNodes[r]);
                return i
            }
        },
        child: function(t, e, n) {
            var i = KTUtil.children(t, e, n);
            return i ? i[0] : null
        },
        matches: function(t, e, n) {
            var i = Element.prototype;
            return !(!t || !t.tagName) && (i.matches || i.webkitMatchesSelector || i.mozMatchesSelector || i.msMatchesSelector || function(t) {
                return -1 !== [].indexOf.call(document.querySelectorAll(t), this)
            }).call(t, e)
        },
        data: function(t) {
            return t = KTUtil.get(t), {
                set: function(e, n) {
                    void 0 !== t && (void 0 === t.customDataTag && (KTUtilElementDataStoreID++, t.customDataTag = KTUtilElementDataStoreID), void 0 === KTUtilElementDataStore[t.customDataTag] && (KTUtilElementDataStore[t.customDataTag] = {}), KTUtilElementDataStore[t.customDataTag][e] = n)
                },
                get: function(e) {
                    if (void 0 !== t) return void 0 === t.customDataTag ? null : this.has(e) ? KTUtilElementDataStore[t.customDataTag][e] : null
                },
                has: function(e) {
                    return void 0 !== t && void 0 !== t.customDataTag && !(!KTUtilElementDataStore[t.customDataTag] || !KTUtilElementDataStore[t.customDataTag][e])
                },
                remove: function(e) {
                    t && this.has(e) && delete KTUtilElementDataStore[t.customDataTag][e]
                }
            }
        },
        outerWidth: function(t, e) {
            if (!0 === e) {
                var n = parseFloat(t.offsetWidth);
                return n += parseFloat(KTUtil.css(t, "margin-left")) + parseFloat(KTUtil.css(t, "margin-right")), parseFloat(n)
            }
            return parseFloat(t.offsetWidth)
        },
        offset: function(t) {
            var e, n;
            if (t = KTUtil.get(t)) return t.getClientRects().length ? {
                top: (e = t.getBoundingClientRect()).top + (n = t.ownerDocument.defaultView).pageYOffset,
                left: e.left + n.pageXOffset
            } : {
                top: 0,
                left: 0
            }
        },
        height: function(t) {
            return KTUtil.css(t, "height")
        },
        visible: function(t) {
            return !(0 === t.offsetWidth && 0 === t.offsetHeight)
        },
        attr: function(t, e, n) {
            if (null != (t = KTUtil.get(t))) return void 0 === n ? t.getAttribute(e) : void t.setAttribute(e, n)
        },
        hasAttr: function(t, e) {
            if (null != (t = KTUtil.get(t))) return !!t.getAttribute(e)
        },
        removeAttr: function(t, e) {
            null != (t = KTUtil.get(t)) && t.removeAttribute(e)
        },
        animate: function(t, e, n, i, r, o) {
            if (r = function(t, e, n, i) {
                    return n * t / i + e
                }, "number" == typeof t && "number" == typeof e && "number" == typeof n && "function" == typeof i) {
                "function" != typeof o && (o = function() {});
                var a = window.requestAnimationFrame || function(t) {
                        window.setTimeout(t, 20)
                    },
                    s = e - t;
                i(t);
                var l = window.performance && window.performance.now ? window.performance.now() : +new Date;
                a((function u(d) {
                    var c = (d || +new Date) - l;
                    c >= 0 && i(r(c, t, s, n)), c >= 0 && c >= n ? (i(e), o()) : a(u)
                }))
            }
        },
        actualCss: function(t, e, n) {
            var i, r = "";
            if ((t = KTUtil.get(t)) instanceof HTMLElement != 0) return t.getAttribute("kt-hidden-" + e) && !1 !== n ? parseFloat(t.getAttribute("kt-hidden-" + e)) : (r = t.style.cssText, t.style.cssText = "position: absolute; visibility: hidden; display: block;", "width" == e ? i = t.offsetWidth : "height" == e && (i = t.offsetHeight), t.style.cssText = r, t.setAttribute("kt-hidden-" + e, i), parseFloat(i))
        },
        actualHeight: function(t, e) {
            return KTUtil.actualCss(t, "height", e)
        },
        actualWidth: function(t, e) {
            return KTUtil.actualCss(t, "width", e)
        },
        getScroll: function(t, e) {
            return e = "scroll" + e, t == window || t == document ? self["scrollTop" == e ? "pageYOffset" : "pageXOffset"] || browserSupportsBoxModel && document.documentElement[e] || document.body[e] : t[e]
        },
        css: function(t, e, n) {
            if (t = KTUtil.get(t))
                if (void 0 !== n) t.style[e] = n;
                else {
                    var i = (t.ownerDocument || document).defaultView;
                    if (i && i.getComputedStyle) return e = e.replace(/([A-Z])/g, "-$1").toLowerCase(), i.getComputedStyle(t, null).getPropertyValue(e);
                    if (t.currentStyle) return e = e.replace(/\-(\w)/g, (function(t, e) {
                        return e.toUpperCase()
                    })), /^\d+(em|pt|%|ex)?$/i.test(n = t.currentStyle[e]) ? function(e) {
                        var n = t.style.left,
                            i = t.runtimeStyle.left;
                        return t.runtimeStyle.left = t.currentStyle.left, t.style.left = e || 0, e = t.style.pixelLeft + "px", t.style.left = n, t.runtimeStyle.left = i, e
                    }(n) : n
                }
        },
        slide: function(t, e, n, i, r) {
            if (!(!t || "up" == e && !1 === KTUtil.visible(t) || "down" == e && !0 === KTUtil.visible(t))) {
                n = n || 600;
                var o = KTUtil.actualHeight(t),
                    a = !1,
                    s = !1;
                KTUtil.css(t, "padding-top") && !0 !== KTUtil.data(t).has("slide-padding-top") && KTUtil.data(t).set("slide-padding-top", KTUtil.css(t, "padding-top")), KTUtil.css(t, "padding-bottom") && !0 !== KTUtil.data(t).has("slide-padding-bottom") && KTUtil.data(t).set("slide-padding-bottom", KTUtil.css(t, "padding-bottom")), KTUtil.data(t).has("slide-padding-top") && (a = parseInt(KTUtil.data(t).get("slide-padding-top"))), KTUtil.data(t).has("slide-padding-bottom") && (s = parseInt(KTUtil.data(t).get("slide-padding-bottom"))), "up" == e ? (t.style.cssText = "display: block; overflow: hidden;", a && KTUtil.animate(0, a, n, (function(e) {
                    t.style.paddingTop = a - e + "px"
                }), "linear"), s && KTUtil.animate(0, s, n, (function(e) {
                    t.style.paddingBottom = s - e + "px"
                }), "linear"), KTUtil.animate(0, o, n, (function(e) {
                    t.style.height = o - e + "px"
                }), "linear", (function() {
                    i(), t.style.height = "", t.style.display = "none"
                }))) : "down" == e && (t.style.cssText = "display: block; overflow: hidden;", a && KTUtil.animate(0, a, n, (function(e) {
                    t.style.paddingTop = e + "px"
                }), "linear", (function() {
                    t.style.paddingTop = ""
                })), s && KTUtil.animate(0, s, n, (function(e) {
                    t.style.paddingBottom = e + "px"
                }), "linear", (function() {
                    t.style.paddingBottom = ""
                })), KTUtil.animate(0, o, n, (function(e) {
                    t.style.height = e + "px"
                }), "linear", (function() {
                    i(), t.style.height = "", t.style.display = "", t.style.overflow = ""
                })))
            }
        },
        slideUp: function(t, e, n) {
            KTUtil.slide(t, "up", e, n)
        },
        slideDown: function(t, e, n) {
            KTUtil.slide(t, "down", e, n)
        },
        show: function(t, e) {
            void 0 !== t && (t.style.display = e || "block")
        },
        hide: function(t) {
            void 0 !== t && (t.style.display = "none")
        },
        addEvent: function(t, e, n, i) {
            void 0 !== (t = KTUtil.get(t)) && t.addEventListener(e, n)
        },
        removeEvent: function(t, e, n) {
            (t = KTUtil.get(t)).removeEventListener(e, n)
        },
        on: function(t, e, n, i) {
            if (e) {
                var r = KTUtil.getUniqueID("event");
                return KTUtilDelegatedEventHandlers[r] = function(n) {
                    for (var r = t.querySelectorAll(e), o = n.target; o && o !== t;) {
                        for (var a = 0, s = r.length; a < s; a++) o === r[a] && i.call(o, n);
                        o = o.parentNode
                    }
                }, KTUtil.addEvent(t, n, KTUtilDelegatedEventHandlers[r]), r
            }
        },
        off: function(t, e, n) {
            t && KTUtilDelegatedEventHandlers[n] && (KTUtil.removeEvent(t, e, KTUtilDelegatedEventHandlers[n]), delete KTUtilDelegatedEventHandlers[n])
        },
        one: function(t, e, n) {
            (t = KTUtil.get(t)).addEventListener(e, (function t(e) {
                return e.target && e.target.removeEventListener && e.target.removeEventListener(e.type, t), n(e)
            }))
        },
        hash: function(t) {
            var e, n = 0;
            if (0 === t.length) return n;
            for (e = 0; e < t.length; e++) n = (n << 5) - n + t.charCodeAt(e), n |= 0;
            return n
        },
        animateClass: function(t, e, n) {
            var i, r = {
                animation: "animationend",
                OAnimation: "oAnimationEnd",
                MozAnimation: "mozAnimationEnd",
                WebkitAnimation: "webkitAnimationEnd",
                msAnimation: "msAnimationEnd"
            };
            for (var o in r) void 0 !== t.style[o] && (i = r[o]);
            KTUtil.addClass(t, "animated " + e), KTUtil.one(t, i, (function() {
                KTUtil.removeClass(t, "animated " + e)
            })), n && KTUtil.one(t, i, n)
        },
        transitionEnd: function(t, e) {
            var n, i = {
                transition: "transitionend",
                OTransition: "oTransitionEnd",
                MozTransition: "mozTransitionEnd",
                WebkitTransition: "webkitTransitionEnd",
                msTransition: "msTransitionEnd"
            };
            for (var r in i) void 0 !== t.style[r] && (n = i[r]);
            KTUtil.one(t, n, e)
        },
        animationEnd: function(t, e) {
            var n, i = {
                animation: "animationend",
                OAnimation: "oAnimationEnd",
                MozAnimation: "mozAnimationEnd",
                WebkitAnimation: "webkitAnimationEnd",
                msAnimation: "msAnimationEnd"
            };
            for (var r in i) void 0 !== t.style[r] && (n = i[r]);
            KTUtil.one(t, n, e)
        },
        animateDelay: function(t, e) {
            for (var n = ["webkit-", "moz-", "ms-", "o-", ""], i = 0; i < n.length; i++) KTUtil.css(t, n[i] + "animation-delay", e)
        },
        animateDuration: function(t, e) {
            for (var n = ["webkit-", "moz-", "ms-", "o-", ""], i = 0; i < n.length; i++) KTUtil.css(t, n[i] + "animation-duration", e)
        },
        scrollTo: function(t, e, n) {
            n = n || 500;
            var i, r, o = (t = KTUtil.get(t)) ? KTUtil.offset(t).top : 0,
                a = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            o > a ? (i = o, r = a) : (i = a, r = o), e && (r += e), KTUtil.animate(i, r, n, (function(t) {
                document.documentElement.scrollTop = t, document.body.parentNode.scrollTop = t, document.body.scrollTop = t
            }))
        },
        scrollTop: function(t, e) {
            KTUtil.scrollTo(null, t, e)
        },
        isArray: function(t) {
            return t && Array.isArray(t)
        },
        ready: function(t) {
            (document.attachEvent ? "complete" === document.readyState : "loading" !== document.readyState) ? t(): document.addEventListener("DOMContentLoaded", t)
        },
        isEmpty: function(t) {
            for (var e in t)
                if (t.hasOwnProperty(e)) return !1;
            return !0
        },
        numberString: function(t) {
            for (var e = (t += "").split("."), n = e[0], i = e.length > 1 ? "." + e[1] : "", r = /(\d+)(\d{3})/; r.test(n);) n = n.replace(r, "$1,$2");
            return n + i
        },
        detectIE: function() {
            var t = window.navigator.userAgent,
                e = t.indexOf("MSIE ");
            if (e > 0) return parseInt(t.substring(e + 5, t.indexOf(".", e)), 10);
            if (t.indexOf("Trident/") > 0) {
                var n = t.indexOf("rv:");
                return parseInt(t.substring(n + 3, t.indexOf(".", n)), 10)
            }
            var i = t.indexOf("Edge/");
            return i > 0 && parseInt(t.substring(i + 5, t.indexOf(".", i)), 10)
        },
        isRTL: function() {
            return "rtl" == KTUtil.attr(KTUtil.get("html"), "direction")
        },
        scrollInit: function(t, e) {
            function n() {
                var n, i;
                if (i = e.height instanceof Function ? parseInt(e.height.call()) : parseInt(e.height), (e.mobileNativeScroll || e.disableForMobile) && KTUtil.isInResponsiveRange("tablet-and-mobile"))(n = KTUtil.data(t).get("ps")) ? (e.resetHeightOnDestroy ? KTUtil.css(t, "height", "auto") : (KTUtil.css(t, "overflow", "auto"), i > 0 && KTUtil.css(t, "height", i + "px")), n.destroy(), n = KTUtil.data(t).remove("ps")) : i > 0 && (KTUtil.css(t, "overflow", "auto"), KTUtil.css(t, "height", i + "px"));
                else if (i > 0 && KTUtil.css(t, "height", i + "px"), e.desktopNativeScroll) KTUtil.css(t, "overflow", "auto");
                else {
                    KTUtil.css(t, "overflow", "hidden"), (n = KTUtil.data(t).get("ps")) ? n.update() : (KTUtil.addClass(t, "kt-scroll"), n = new PerfectScrollbar(t, {
                        wheelSpeed: .5,
                        swipeEasing: !0,
                        wheelPropagation: !1 !== e.windowScroll,
                        minScrollbarLength: 40,
                        maxScrollbarLength: 300,
                        suppressScrollX: "true" != KTUtil.attr(t, "data-scroll-x")
                    }), KTUtil.data(t).set("ps", n));
                    var r = KTUtil.attr(t, "id");
                    if (!0 === e.rememberPosition && Cookies && r) {
                        if (Cookies.get(r)) {
                            var o = parseInt(Cookies.get(r));
                            o > 0 && (t.scrollTop = o)
                        }
                        t.addEventListener("ps-scroll-y", (function() {
                            Cookies.set(r, t.scrollTop)
                        }))
                    }
                }
            }
            t && (n(), e.handleWindowResize && KTUtil.addResizeHandler((function() {
                n()
            })))
        },
        scrollUpdate: function(t) {
            var e;
            (e = KTUtil.data(t).get("ps")) && e.update()
        },
        scrollUpdateAll: function(t) {
            for (var e = KTUtil.findAll(t, ".ps"), n = 0, i = e.length; n < i; n++) KTUtil.scrollerUpdate(e[n])
        },
        scrollDestroy: function(t) {
            var e;
            (e = KTUtil.data(t).get("ps")) && (e.destroy(), e = KTUtil.data(t).remove("ps"))
        },
        setHTML: function(t, e) {
            KTUtil.get(t) && (KTUtil.get(t).innerHTML = e)
        },
        getHTML: function(t) {
            if (KTUtil.get(t)) return KTUtil.get(t).innerHTML
        }
    }
}();
KTUtil.ready((function() {
    KTUtil.init()
})), window.onload = function() {
    KTUtil.removeClass(KTUtil.get("body"), "kt-page--loading")
};
var KTHeader = function(t, e) {
        var n = this,
            i = KTUtil.get(t),
            r = KTUtil.get("body");
        if (void 0 !== i) {
            var o = {
                    classic: !1,
                    offset: {
                        mobile: 150,
                        desktop: 200
                    },
                    minimize: {
                        mobile: !1,
                        desktop: !1
                    }
                },
                a = {
                    construct: function(t) {
                        return KTUtil.data(i).has("header") ? n = KTUtil.data(i).get("header") : (a.init(t), a.build(), KTUtil.data(i).set("header", n)), n
                    },
                    init: function(t) {
                        n.events = [], n.options = KTUtil.deepExtend({}, o, t)
                    },
                    build: function() {
                        var t = 0,
                            e = !0;
                        KTUtil.getViewPort(), !1 === n.options.minimize.mobile && !1 === n.options.minimize.desktop || window.addEventListener("scroll", (function() {
                            var i, o, s, l = 0;
                            KTUtil.isInResponsiveRange("desktop") ? (l = n.options.offset.desktop, i = n.options.minimize.desktop.on, o = n.options.minimize.desktop.off) : KTUtil.isInResponsiveRange("tablet-and-mobile") && (l = n.options.offset.mobile, i = n.options.minimize.mobile.on, o = n.options.minimize.mobile.off), s = window.pageYOffset, KTUtil.isInResponsiveRange("tablet-and-mobile") && n.options.classic && n.options.classic.mobile || KTUtil.isInResponsiveRange("desktop") && n.options.classic && n.options.classic.desktop ? s > l ? (KTUtil.addClass(r, i), KTUtil.removeClass(r, o), e && (a.eventTrigger("minimizeOn", n), e = !1)) : (KTUtil.addClass(r, o), KTUtil.removeClass(r, i), 0 == e && (a.eventTrigger("minimizeOff", n), e = !0)) : (s > l && t < s ? (KTUtil.addClass(r, i), KTUtil.removeClass(r, o), e && (a.eventTrigger("minimizeOn", n), e = !1)) : (KTUtil.addClass(r, o), KTUtil.removeClass(r, i), 0 == e && (a.eventTrigger("minimizeOff", n), e = !0)), t = s)
                        }))
                    },
                    eventTrigger: function(t, e) {
                        for (var i = 0; i < n.events.length; i++) {
                            var r = n.events[i];
                            r.name == t && (1 == r.one ? 0 == r.fired && (n.events[i].fired = !0, r.handler.call(this, n, e)) : r.handler.call(this, n, e))
                        }
                    },
                    addEvent: function(t, e, i) {
                        n.events.push({
                            name: t,
                            handler: e,
                            one: i,
                            fired: !1
                        })
                    }
                };
            return n.setDefaults = function(t) {
                o = t
            }, n.on = function(t, e) {
                return a.addEvent(t, e)
            }, a.construct.apply(n, [e]), n
        }
    },
    KTMenu = function(t, e) {
        var n = this,
            i = !1,
            r = KTUtil.get(t),
            o = KTUtil.get("body");
        if (r) {
            var a = {
                    scroll: {
                        rememberPosition: !1
                    },
                    accordion: {
                        slideSpeed: 200,
                        autoScroll: !1,
                        autoScrollSpeed: 1200,
                        expandAll: !0
                    },
                    dropdown: {
                        timeout: 500
                    }
                },
                s = {
                    construct: function(t) {
                        return KTUtil.data(r).has("menu") ? n = KTUtil.data(r).get("menu") : (s.init(t), s.reset(), s.build(), KTUtil.data(r).set("menu", n)), n
                    },
                    init: function(t) {
                        n.events = [], n.eventHandlers = {}, n.options = KTUtil.deepExtend({}, a, t), n.pauseDropdownHoverTime = 0, n.uid = KTUtil.getUniqueID()
                    },
                    update: function(t) {
                        n.options = KTUtil.deepExtend({}, a, t), n.pauseDropdownHoverTime = 0, s.reset(), n.eventHandlers = {}, s.build(), KTUtil.data(r).set("menu", n)
                    },
                    reload: function() {
                        s.reset(), s.build(), s.resetSubmenuProps()
                    },
                    build: function() {
                        n.eventHandlers.event_1 = KTUtil.on(r, ".kt-menu__toggle", "click", s.handleSubmenuAccordion), ("dropdown" === s.getSubmenuMode() || s.isConditionalSubmenuDropdown()) && (n.eventHandlers.event_2 = KTUtil.on(r, '[data-ktmenu-submenu-toggle="hover"]', "mouseover", s.handleSubmenuDrodownHoverEnter), n.eventHandlers.event_3 = KTUtil.on(r, '[data-ktmenu-submenu-toggle="hover"]', "mouseout", s.handleSubmenuDrodownHoverExit), n.eventHandlers.event_4 = KTUtil.on(r, '[data-ktmenu-submenu-toggle="click"] > .kt-menu__toggle, [data-ktmenu-submenu-toggle="click"] > .kt-menu__link .kt-menu__toggle', "click", s.handleSubmenuDropdownClick), n.eventHandlers.event_5 = KTUtil.on(r, '[data-ktmenu-submenu-toggle="tab"] > .kt-menu__toggle, [data-ktmenu-submenu-toggle="tab"] > .kt-menu__link .kt-menu__toggle', "click", s.handleSubmenuDropdownTabClick)), n.eventHandlers.event_6 = KTUtil.on(r, ".kt-menu__item > .kt-menu__link:not(.kt-menu__toggle):not(.kt-menu__link--toggle-skip)", "click", s.handleLinkClick), n.options.scroll && n.options.scroll.height && s.scrollInit()
                    },
                    reset: function() {
                        KTUtil.off(r, "click", n.eventHandlers.event_1), KTUtil.off(r, "mouseover", n.eventHandlers.event_2), KTUtil.off(r, "mouseout", n.eventHandlers.event_3), KTUtil.off(r, "click", n.eventHandlers.event_4), KTUtil.off(r, "click", n.eventHandlers.event_5), KTUtil.off(r, "click", n.eventHandlers.event_6)
                    },
                    scrollInit: function() {
                        n.options.scroll && n.options.scroll.height ? (KTUtil.scrollDestroy(r), KTUtil.scrollInit(r, {
                            mobileNativeScroll: !0,
                            windowScroll: !1,
                            resetHeightOnDestroy: !0,
                            handleWindowResize: !0,
                            height: n.options.scroll.height,
                            rememberPosition: n.options.scroll.rememberPosition
                        })) : KTUtil.scrollDestroy(r)
                    },
                    scrollUpdate: function() {
                        n.options.scroll && n.options.scroll.height && KTUtil.scrollUpdate(r)
                    },
                    scrollTop: function() {
                        n.options.scroll && n.options.scroll.height && KTUtil.scrollTop(r)
                    },
                    getSubmenuMode: function(t) {
                        return KTUtil.isInResponsiveRange("desktop") ? t && KTUtil.hasAttr(t, "data-ktmenu-submenu-toggle") && "hover" == KTUtil.attr(t, "data-ktmenu-submenu-toggle") ? "dropdown" : KTUtil.isset(n.options.submenu, "desktop.state.body") ? KTUtil.hasClasses(o, n.options.submenu.desktop.state.body) ? n.options.submenu.desktop.state.mode : n.options.submenu.desktop.default : KTUtil.isset(n.options.submenu, "desktop") ? n.options.submenu.desktop : void 0 : KTUtil.isInResponsiveRange("tablet") && KTUtil.isset(n.options.submenu, "tablet") ? n.options.submenu.tablet : !(!KTUtil.isInResponsiveRange("mobile") || !KTUtil.isset(n.options.submenu, "mobile")) && n.options.submenu.mobile
                    },
                    isConditionalSubmenuDropdown: function() {
                        return !(!KTUtil.isInResponsiveRange("desktop") || !KTUtil.isset(n.options.submenu, "desktop.state.body"))
                    },
                    resetSubmenuProps: function(t) {
                        var e = KTUtil.findAll(r, ".kt-menu__submenu");
                        if (e)
                            for (var n = 0, i = e.length; n < i; n++) KTUtil.css(e[0], "display", ""), KTUtil.css(e[0], "overflow", "")
                    },
                    handleSubmenuDrodownHoverEnter: function(t) {
                        "accordion" !== s.getSubmenuMode(this) && !1 !== n.resumeDropdownHover() && ("1" == this.getAttribute("data-hover") && (this.removeAttribute("data-hover"), clearTimeout(this.getAttribute("data-timeout")), this.removeAttribute("data-timeout")), s.showSubmenuDropdown(this))
                    },
                    handleSubmenuDrodownHoverExit: function(t) {
                        if (!1 !== n.resumeDropdownHover() && "accordion" !== s.getSubmenuMode(this)) {
                            var e = this,
                                i = setTimeout((function() {
                                    "1" == e.getAttribute("data-hover") && s.hideSubmenuDropdown(e, !0)
                                }), n.options.dropdown.timeout);
                            e.setAttribute("data-hover", "1"), e.setAttribute("data-timeout", i)
                        }
                    },
                    handleSubmenuDropdownClick: function(t) {
                        if ("accordion" !== s.getSubmenuMode(this)) {
                            var e = this.closest(".kt-menu__item");
                            "accordion" != e.getAttribute("data-ktmenu-submenu-mode") && (!1 === KTUtil.hasClass(e, "kt-menu__item--hover") ? (KTUtil.addClass(e, "kt-menu__item--open-dropdown"), s.showSubmenuDropdown(e)) : (KTUtil.removeClass(e, "kt-menu__item--open-dropdown"), s.hideSubmenuDropdown(e, !0)), t.preventDefault())
                        }
                    },
                    handleSubmenuDropdownTabClick: function(t) {
                        if ("accordion" !== s.getSubmenuMode(this)) {
                            var e = this.closest(".kt-menu__item");
                            "accordion" != e.getAttribute("data-ktmenu-submenu-mode") && (0 == KTUtil.hasClass(e, "kt-menu__item--hover") && (KTUtil.addClass(e, "kt-menu__item--open-dropdown"), s.showSubmenuDropdown(e)), t.preventDefault())
                        }
                    },
                    handleLinkClick: function(t) {
                        var e = this.closest(".kt-menu__item.kt-menu__item--submenu");
                        !1 !== s.eventTrigger("linkClick", this, t) && e && "dropdown" === s.getSubmenuMode(e) && s.hideSubmenuDropdowns()
                    },
                    handleSubmenuDropdownClose: function(t, e) {
                        if ("accordion" !== s.getSubmenuMode(e)) {
                            var n = r.querySelectorAll(".kt-menu__item.kt-menu__item--submenu.kt-menu__item--hover:not(.kt-menu__item--tabs)");
                            if (n.length > 0 && !1 === KTUtil.hasClass(e, "kt-menu__toggle") && 0 === e.querySelectorAll(".kt-menu__toggle").length)
                                for (var i = 0, o = n.length; i < o; i++) s.hideSubmenuDropdown(n[0], !0)
                        }
                    },
                    handleSubmenuAccordion: function(t, e) {
                        var i, r = e || this;
                        if ("dropdown" === s.getSubmenuMode(e) && (i = r.closest(".kt-menu__item")) && "accordion" != i.getAttribute("data-ktmenu-submenu-mode")) t.preventDefault();
                        else {
                            var o = r.closest(".kt-menu__item"),
                                a = KTUtil.child(o, ".kt-menu__submenu, .kt-menu__inner");
                            if (!KTUtil.hasClass(r.closest(".kt-menu__item"), "kt-menu__item--open-always") && o && a) {
                                t.preventDefault();
                                var l = n.options.accordion.slideSpeed;
                                if (!1 === KTUtil.hasClass(o, "kt-menu__item--open")) {
                                    if (!1 === n.options.accordion.expandAll) {
                                        var u = r.closest(".kt-menu__nav, .kt-menu__subnav"),
                                            d = KTUtil.children(u, ".kt-menu__item.kt-menu__item--open.kt-menu__item--submenu:not(.kt-menu__item--here):not(.kt-menu__item--open-always)");
                                        if (u && d)
                                            for (var c = 0, h = d.length; c < h; c++) {
                                                var f = d[0],
                                                    p = KTUtil.child(f, ".kt-menu__submenu");
                                                p && KTUtil.slideUp(p, l, (function() {
                                                    s.scrollUpdate(), KTUtil.removeClass(f, "kt-menu__item--open")
                                                }))
                                            }
                                    }
                                    KTUtil.slideDown(a, l, (function() {
                                        s.scrollToItem(r), s.scrollUpdate(), s.eventTrigger("submenuToggle", a, t)
                                    })), KTUtil.addClass(o, "kt-menu__item--open")
                                } else KTUtil.slideUp(a, l, (function() {
                                    s.scrollToItem(r), s.eventTrigger("submenuToggle", a, t)
                                })), KTUtil.removeClass(o, "kt-menu__item--open")
                            }
                        }
                    },
                    scrollToItem: function(t) {
                        KTUtil.isInResponsiveRange("desktop") && n.options.accordion.autoScroll && "1" !== r.getAttribute("data-ktmenu-scroll") && KTUtil.scrollTo(t, n.options.accordion.autoScrollSpeed)
                    },
                    hideSubmenuDropdown: function(t, e) {
                        e && (KTUtil.removeClass(t, "kt-menu__item--hover"), KTUtil.removeClass(t, "kt-menu__item--active-tab")), t.removeAttribute("data-hover"), t.getAttribute("data-ktmenu-dropdown-toggle-class") && KTUtil.removeClass(o, t.getAttribute("data-ktmenu-dropdown-toggle-class"));
                        var n = t.getAttribute("data-timeout");
                        t.removeAttribute("data-timeout"), clearTimeout(n)
                    },
                    hideSubmenuDropdowns: function() {
                        var t;
                        if (t = r.querySelectorAll('.kt-menu__item--submenu.kt-menu__item--hover:not(.kt-menu__item--tabs):not([data-ktmenu-submenu-toggle="tab"])'))
                            for (var e = 0, n = t.length; e < n; e++) s.hideSubmenuDropdown(t[e], !0)
                    },
                    showSubmenuDropdown: function(t) {
                        var e = r.querySelectorAll(".kt-menu__item--submenu.kt-menu__item--hover, .kt-menu__item--submenu.kt-menu__item--active-tab");
                        if (e)
                            for (var n = 0, i = e.length; n < i; n++) {
                                var a = e[n];
                                t !== a && !1 === a.contains(t) && !1 === t.contains(a) && s.hideSubmenuDropdown(a, !0)
                            }
                        KTUtil.addClass(t, "kt-menu__item--hover"), t.getAttribute("data-ktmenu-dropdown-toggle-class") && KTUtil.addClass(o, t.getAttribute("data-ktmenu-dropdown-toggle-class"))
                    },
                    createSubmenuDropdownClickDropoff: function(t) {
                        var e, n = (e = KTUtil.child(t, ".kt-menu__submenu") ? KTUtil.css(e, "z-index") : 0) - 1,
                            i = document.createElement('<div class="kt-menu__dropoff" style="background: transparent; position: fixed; top: 0; bottom: 0; left: 0; right: 0; z-index: ' + n + '"></div>');
                        o.appendChild(i), KTUtil.addEvent(i, "click", (function(e) {
                            e.stopPropagation(), e.preventDefault(), KTUtil.remove(this), s.hideSubmenuDropdown(t, !0)
                        }))
                    },
                    pauseDropdownHover: function(t) {
                        var e = new Date;
                        n.pauseDropdownHoverTime = e.getTime() + t
                    },
                    resumeDropdownHover: function() {
                        return (new Date).getTime() > n.pauseDropdownHoverTime
                    },
                    resetActiveItem: function(t) {
                        for (var e, i, o = 0, a = (e = r.querySelectorAll(".kt-menu__item--active")).length; o < a; o++) {
                            var s = e[0];
                            KTUtil.removeClass(s, "kt-menu__item--active"), KTUtil.hide(KTUtil.child(s, ".kt-menu__submenu"));
                            for (var l = 0, u = (i = KTUtil.parents(s, ".kt-menu__item--submenu") || []).length; l < u; l++) {
                                var d = i[o];
                                KTUtil.removeClass(d, "kt-menu__item--open"), KTUtil.hide(KTUtil.child(d, ".kt-menu__submenu"))
                            }
                        }
                        if (!1 === n.options.accordion.expandAll && (e = r.querySelectorAll(".kt-menu__item--open")))
                            for (o = 0, a = e.length; o < a; o++) KTUtil.removeClass(i[0], "kt-menu__item--open")
                    },
                    setActiveItem: function(t) {
                        s.resetActiveItem();
                        for (var e = KTUtil.parents(t, ".kt-menu__item--submenu") || [], n = 0, i = e.length; n < i; n++) KTUtil.addClass(KTUtil.get(e[n]), "kt-menu__item--open");
                        KTUtil.addClass(KTUtil.get(t), "kt-menu__item--active")
                    },
                    getBreadcrumbs: function(t) {
                        var e, n = [],
                            i = KTUtil.child(t, ".kt-menu__link");
                        n.push({
                            text: e = KTUtil.child(i, ".kt-menu__link-text") ? e.innerHTML : "",
                            title: i.getAttribute("title"),
                            href: i.getAttribute("href")
                        });
                        for (var r = KTUtil.parents(t, ".kt-menu__item--submenu"), o = 0, a = r.length; o < a; o++) {
                            var s = KTUtil.child(r[o], ".kt-menu__link");
                            n.push({
                                text: e = KTUtil.child(s, ".kt-menu__link-text") ? e.innerHTML : "",
                                title: s.getAttribute("title"),
                                href: s.getAttribute("href")
                            })
                        }
                        return n.reverse()
                    },
                    getPageTitle: function(t) {
                        return KTUtil.child(t, ".kt-menu__link-text") ? (void 0).innerHTML : ""
                    },
                    eventTrigger: function(t, e, i) {
                        for (var r = 0; r < n.events.length; r++) {
                            var o = n.events[r];
                            if (o.name == t) {
                                if (1 != o.one) return o.handler.call(this, e, i);
                                if (0 == o.fired) return n.events[r].fired = !0, o.handler.call(this, e, i)
                            }
                        }
                    },
                    addEvent: function(t, e, i) {
                        n.events.push({
                            name: t,
                            handler: e,
                            one: i,
                            fired: !1
                        })
                    },
                    removeEvent: function(t) {
                        n.events[t] && delete n.events[t]
                    }
                };
            return n.setDefaults = function(t) {
                a = t
            }, n.scrollUpdate = function() {
                return s.scrollUpdate()
            }, n.scrollReInit = function() {
                return s.scrollInit()
            }, n.scrollTop = function() {
                return s.scrollTop()
            }, n.setActiveItem = function(t) {
                return s.setActiveItem(t)
            }, n.reload = function() {
                return s.reload()
            }, n.update = function(t) {
                return s.update(t)
            }, n.getBreadcrumbs = function(t) {
                return s.getBreadcrumbs(t)
            }, n.getPageTitle = function(t) {
                return s.getPageTitle(t)
            }, n.getSubmenuMode = function(t) {
                return s.getSubmenuMode(t)
            }, n.hideDropdown = function(t) {
                s.hideSubmenuDropdown(t, !0)
            }, n.hideDropdowns = function() {
                s.hideSubmenuDropdowns()
            }, n.pauseDropdownHover = function(t) {
                s.pauseDropdownHover(t)
            }, n.resumeDropdownHover = function() {
                return s.resumeDropdownHover()
            }, n.on = function(t, e) {
                return s.addEvent(t, e)
            }, n.off = function(t) {
                return s.removeEvent(t)
            }, n.one = function(t, e) {
                return s.addEvent(t, e, !0)
            }, s.construct.apply(n, [e]), KTUtil.addResizeHandler((function() {
                i && n.reload()
            })), i = !0, n
        }
    };
document.addEventListener("click", (function(t) {
    var e;
    if (e = KTUtil.get("body").querySelectorAll('.kt-menu__nav .kt-menu__item.kt-menu__item--submenu.kt-menu__item--hover:not(.kt-menu__item--tabs)[data-ktmenu-submenu-toggle="click"]'))
        for (var n = 0, i = e.length; n < i; n++) {
            var r = e[n].closest(".kt-menu__nav").parentNode;
            if (r) {
                var o = KTUtil.data(r).get("menu");
                if (!o) break;
                if (!o || "dropdown" !== o.getSubmenuMode()) break;
                t.target !== r && !1 === r.contains(t.target) && o.hideDropdowns()
            }
        }
}));
var KTOffcanvas = function(t, e) {
        var n = this,
            i = KTUtil.get(t),
            r = KTUtil.get("body");
        if (i) {
            var o = {},
                a = {
                    construct: function(t) {
                        return KTUtil.data(i).has("offcanvas") ? n = KTUtil.data(i).get("offcanvas") : (a.init(t), a.build(), KTUtil.data(i).set("offcanvas", n)), n
                    },
                    init: function(t) {
                        n.events = [], n.options = KTUtil.deepExtend({}, o, t), n.classBase = n.options.baseClass, n.classShown = n.classBase + "--on", n.classOverlay = n.classBase + "-overlay", n.state = KTUtil.hasClass(i, n.classShown) ? "shown" : "hidden"
                    },
                    build: function() {
                        if (n.options.toggleBy)
                            if ("string" == typeof n.options.toggleBy) KTUtil.addEvent(n.options.toggleBy, "click", (function(t) {
                                t.preventDefault(), a.toggle()
                            }));
                            else if (n.options.toggleBy && n.options.toggleBy[0])
                            if (n.options.toggleBy[0].target)
                                for (var t in n.options.toggleBy) KTUtil.addEvent(n.options.toggleBy[t].target, "click", (function(t) {
                                    t.preventDefault(), a.toggle()
                                }));
                            else
                                for (var t in n.options.toggleBy) KTUtil.addEvent(n.options.toggleBy[t], "click", (function(t) {
                                    t.preventDefault(), a.toggle()
                                }));
                        else n.options.toggleBy && n.options.toggleBy.target && KTUtil.addEvent(n.options.toggleBy.target, "click", (function(t) {
                            t.preventDefault(), a.toggle()
                        }));
                        var e = KTUtil.get(n.options.closeBy);
                        e && KTUtil.addEvent(e, "click", (function(t) {
                            t.preventDefault(), a.hide()
                        })), KTUtil.addResizeHandler((function() {
                            (parseInt(KTUtil.css(i, "left")) >= 0 || parseInt(KTUtil.css(i, "right") >= 0) || "fixed" != KTUtil.css(i, "position")) && KTUtil.css(i, "opacity", "1")
                        }))
                    },
                    isShown: function(t) {
                        return "shown" == n.state
                    },
                    toggle: function() {
                        a.eventTrigger("toggle"), "shown" == n.state ? a.hide(this) : a.show(this)
                    },
                    show: function(t) {
                        "shown" != n.state && (a.eventTrigger("beforeShow"), a.togglerClass(t, "show"), KTUtil.addClass(r, n.classShown), KTUtil.addClass(i, n.classShown), KTUtil.css(i, "opacity", "1"), n.state = "shown", n.options.overlay && (n.overlay = KTUtil.insertAfter(document.createElement("DIV"), i), KTUtil.addClass(n.overlay, n.classOverlay), KTUtil.addEvent(n.overlay, "click", (function(e) {
                            e.stopPropagation(), e.preventDefault(), a.hide(t)
                        }))), a.eventTrigger("afterShow"))
                    },
                    hide: function(t) {
                        "hidden" != n.state && (a.eventTrigger("beforeHide"), a.togglerClass(t, "hide"), KTUtil.removeClass(r, n.classShown), KTUtil.removeClass(i, n.classShown), n.state = "hidden", n.options.overlay && n.overlay && KTUtil.remove(n.overlay), KTUtil.transitionEnd(i, (function() {
                            KTUtil.css(i, "opacity", "0")
                        })), a.eventTrigger("afterHide"))
                    },
                    togglerClass: function(t, e) {
                        var i, r = KTUtil.attr(t, "id");
                        if (n.options.toggleBy && n.options.toggleBy[0] && n.options.toggleBy[0].target)
                            for (var o in n.options.toggleBy) n.options.toggleBy[o].target === r && (i = n.options.toggleBy[o]);
                        else n.options.toggleBy && n.options.toggleBy.target && (i = n.options.toggleBy);
                        if (i) {
                            var a = KTUtil.get(i.target);
                            "show" === e && KTUtil.addClass(a, i.state), "hide" === e && KTUtil.removeClass(a, i.state)
                        }
                    },
                    eventTrigger: function(t, e) {
                        for (var i = 0; i < n.events.length; i++) {
                            var r = n.events[i];
                            r.name == t && (1 == r.one ? 0 == r.fired && (n.events[i].fired = !0, r.handler.call(this, n, e)) : r.handler.call(this, n, e))
                        }
                    },
                    addEvent: function(t, e, i) {
                        n.events.push({
                            name: t,
                            handler: e,
                            one: i,
                            fired: !1
                        })
                    }
                };
            return n.setDefaults = function(t) {
                o = t
            }, n.isShown = function() {
                return a.isShown()
            }, n.hide = function() {
                return a.hide()
            }, n.show = function() {
                return a.show()
            }, n.on = function(t, e) {
                return a.addEvent(t, e)
            }, n.one = function(t, e) {
                return a.addEvent(t, e, !0)
            }, a.construct.apply(n, [e]), n
        }
    },
    KTScrolltop = function(t, e) {
        var n = this,
            i = KTUtil.get(t),
            r = KTUtil.get("body");
        if (i) {
            var o = {
                    offset: 300,
                    speed: 600,
                    toggleClass: "kt-scrolltop--on"
                },
                a = {
                    construct: function(t) {
                        return KTUtil.data(i).has("scrolltop") ? n = KTUtil.data(i).get("scrolltop") : (a.init(t), a.build(), KTUtil.data(i).set("scrolltop", n)), n
                    },
                    init: function(t) {
                        n.events = [], n.options = KTUtil.deepExtend({}, o, t)
                    },
                    build: function() {
                        navigator.userAgent.match(/iPhone|iPad|iPod/i) ? (window.addEventListener("touchend", (function() {
                            a.handle()
                        })), window.addEventListener("touchcancel", (function() {
                            a.handle()
                        })), window.addEventListener("touchleave", (function() {
                            a.handle()
                        }))) : window.addEventListener("scroll", (function() {
                            a.handle()
                        })), KTUtil.addEvent(i, "click", a.scroll)
                    },
                    handle: function() {
                        window.pageYOffset > n.options.offset ? KTUtil.addClass(r, n.options.toggleClass) : KTUtil.removeClass(r, n.options.toggleClass)
                    },
                    scroll: function(t) {
                        t.preventDefault(), KTUtil.scrollTop(0, n.options.speed)
                    },
                    eventTrigger: function(t, e) {
                        for (var i = 0; i < n.events.length; i++) {
                            var r = n.events[i];
                            r.name == t && (1 == r.one ? 0 == r.fired && (n.events[i].fired = !0, r.handler.call(this, n, e)) : r.handler.call(this, n, e))
                        }
                    },
                    addEvent: function(t, e, i) {
                        n.events.push({
                            name: t,
                            handler: e,
                            one: i,
                            fired: !1
                        })
                    }
                };
            return n.setDefaults = function(t) {
                o = t
            }, n.on = function(t, e) {
                return a.addEvent(t, e)
            }, n.one = function(t, e) {
                return a.addEvent(t, e, !0)
            }, a.construct.apply(n, [e]), n
        }
    },
    KTToggle = function(t, e) {
        var n = this,
            i = KTUtil.get(t);
        if (KTUtil.get("body"), i) {
            var r = {
                    togglerState: "",
                    targetState: ""
                },
                o = {
                    construct: function(t) {
                        return KTUtil.data(i).has("toggle") ? n = KTUtil.data(i).get("toggle") : (o.init(t), o.build(), KTUtil.data(i).set("toggle", n)), n
                    },
                    init: function(t) {
                        n.element = i, n.events = [], n.options = KTUtil.deepExtend({}, r, t), n.target = KTUtil.get(n.options.target), n.targetState = n.options.targetState, n.togglerState = n.options.togglerState, n.state = KTUtil.hasClasses(n.target, n.targetState) ? "on" : "off"
                    },
                    build: function() {
                        KTUtil.addEvent(i, "mouseup", o.toggle)
                    },
                    toggle: function(t) {
                        return o.eventTrigger("beforeToggle"), "off" == n.state ? o.toggleOn() : o.toggleOff(), o.eventTrigger("afterToggle"), t.preventDefault(), n
                    },
                    toggleOn: function() {
                        return o.eventTrigger("beforeOn"), KTUtil.addClass(n.target, n.targetState), n.togglerState && KTUtil.addClass(i, n.togglerState), n.state = "on", o.eventTrigger("afterOn"), o.eventTrigger("toggle"), n
                    },
                    toggleOff: function() {
                        return o.eventTrigger("beforeOff"), KTUtil.removeClass(n.target, n.targetState), n.togglerState && KTUtil.removeClass(i, n.togglerState), n.state = "off", o.eventTrigger("afterOff"), o.eventTrigger("toggle"), n
                    },
                    eventTrigger: function(t) {
                        for (var e = 0; e < n.events.length; e++) {
                            var i = n.events[e];
                            i.name == t && (1 == i.one ? 0 == i.fired && (n.events[e].fired = !0, i.handler.call(this, n)) : i.handler.call(this, n))
                        }
                    },
                    addEvent: function(t, e, i) {
                        return n.events.push({
                            name: t,
                            handler: e,
                            one: i,
                            fired: !1
                        }), n
                    }
                };
            return n.setDefaults = function(t) {
                r = t
            }, n.getState = function() {
                return n.state
            }, n.toggle = function() {
                return o.toggle()
            }, n.toggleOn = function() {
                return o.toggleOn()
            }, n.toggleOff = function() {
                return o.toggleOff()
            }, n.on = function(t, e) {
                return o.addEvent(t, e)
            }, n.one = function(t, e) {
                return o.addEvent(t, e, !0)
            }, o.construct.apply(n, [e]), n
        }
    },
    KTDialog = function(t) {
        var e, n = this,
            i = KTUtil.get("body"),
            r = {
                placement: "top center",
                type: "loader",
                width: 100,
                state: "default",
                message: "Loading..."
            },
            o = {
                construct: function(t) {
                    return o.init(t), n
                },
                init: function(t) {
                    n.events = [], n.options = KTUtil.deepExtend({}, r, t), n.state = !1
                },
                show: function() {
                    return o.eventTrigger("show"), e = document.createElement("DIV"), KTUtil.setHTML(e, n.options.message), KTUtil.addClass(e, "kt-dialog kt-dialog--shown"), KTUtil.addClass(e, "kt-dialog--" + n.options.state), KTUtil.addClass(e, "kt-dialog--" + n.options.type), "top center" == n.options.placement && KTUtil.addClass(e, "kt-dialog--top-center"), i.appendChild(e), n.state = "shown", o.eventTrigger("shown"), n
                },
                hide: function() {
                    return e && (o.eventTrigger("hide"), e.remove(), n.state = "hidden", o.eventTrigger("hidden")), n
                },
                eventTrigger: function(t) {
                    for (var e = 0; e < n.events.length; e++) {
                        var i = n.events[e];
                        i.name == t && (1 == i.one ? 0 == i.fired && (n.events[e].fired = !0, i.handler.call(this, n)) : i.handler.call(this, n))
                    }
                },
                addEvent: function(t, e, i) {
                    return n.events.push({
                        name: t,
                        handler: e,
                        one: i,
                        fired: !1
                    }), n
                }
            };
        return n.setDefaults = function(t) {
            r = t
        }, n.shown = function() {
            return "shown" == n.state
        }, n.hidden = function() {
            return "hidden" == n.state
        }, n.show = function() {
            return o.show()
        }, n.hide = function() {
            return o.hide()
        }, n.on = function(t, e) {
            return o.addEvent(t, e)
        }, n.one = function(t, e) {
            return o.addEvent(t, e, !0)
        }, o.construct.apply(n, [t]), n
    },
    KTWizard = function(t, e) {
        var n = this,
            i = KTUtil.get(t);
        if (KTUtil.get("body"), i) {
            var r = {
                    startStep: 1,
                    manualStepForward: !1
                },
                o = {
                    construct: function(t) {
                        return KTUtil.data(i).has("wizard") ? n = KTUtil.data(i).get("wizard") : (o.init(t), o.build(), KTUtil.data(i).set("wizard", n)), n
                    },
                    init: function(t) {
                        n.element = i, n.events = [], n.options = KTUtil.deepExtend({}, r, t), n.steps = KTUtil.findAll(i, '[data-ktwizard-type="step"]'), n.btnSubmit = KTUtil.find(i, '[data-ktwizard-type="action-submit"]'), n.btnNext = KTUtil.find(i, '[data-ktwizard-type="action-next"]'), n.btnPrev = KTUtil.find(i, '[data-ktwizard-type="action-prev"]'), n.btnLast = KTUtil.find(i, '[data-ktwizard-type="action-last"]'), n.btnFirst = KTUtil.find(i, '[data-ktwizard-type="action-first"]'), n.events = [], n.currentStep = 1, n.stopped = !1, n.totalSteps = n.steps.length, n.options.startStep > 1 && o.goTo(n.options.startStep), o.updateUI()
                    },
                    build: function() {
                        KTUtil.addEvent(n.btnNext, "click", (function(t) {
                            t.preventDefault(), o.goNext()
                        })), KTUtil.addEvent(n.btnPrev, "click", (function(t) {
                            t.preventDefault(), o.goPrev()
                        })), KTUtil.addEvent(n.btnFirst, "click", (function(t) {
                            t.preventDefault(), o.goFirst()
                        })), KTUtil.addEvent(n.btnLast, "click", (function(t) {
                            t.preventDefault(), o.goLast()
                        })), KTUtil.on(i, 'a[data-ktwizard-type="step"]', "click", (function() {
                            var t = KTUtil.index(this) + 1;
                            t !== n.currentStep && o.goTo(t)
                        }))
                    },
                    goTo: function(t) {
                        if (!(t === n.currentStep || t > n.totalSteps || t < 0)) {
                            var e;
                            if (t = t ? parseInt(t) : o.getNextStep(), e = o.eventTrigger(t > n.currentStep ? "beforeNext" : "beforePrev"), !0 !== n.stopped) return !1 !== e && (o.eventTrigger("beforeChange"), n.currentStep = t, o.updateUI(), o.eventTrigger("change")), o.eventTrigger(t > n.startStep ? "afterNext" : "afterPrev"), n;
                            n.stopped = !1
                        }
                    },
                    stop: function() {
                        n.stopped = !0
                    },
                    start: function() {
                        n.stopped = !1
                    },
                    isLastStep: function() {
                        return n.currentStep === n.totalSteps
                    },
                    isFirstStep: function() {
                        return 1 === n.currentStep
                    },
                    isBetweenStep: function() {
                        return !1 === o.isLastStep() && !1 === o.isFirstStep()
                    },
                    goNext: function() {
                        return o.goTo(o.getNextStep())
                    },
                    goPrev: function() {
                        return o.goTo(o.getPrevStep())
                    },
                    goLast: function() {
                        return o.goTo(n.totalSteps)
                    },
                    goFirst: function() {
                        return o.goTo(1)
                    },
                    updateUI: function() {
                        var t, e = n.currentStep - 1;
                        t = o.isLastStep() ? "last" : o.isFirstStep() ? "first" : "between", KTUtil.attr(n.element, "data-ktwizard-state", t);
                        var i = KTUtil.findAll(n.element, '[data-ktwizard-type="step"]');
                        if (i && i.length > 0)
                            for (var r = 0, a = i.length; r < a; r++) KTUtil.attr(i[r], "data-ktwizard-state", r == e ? "current" : r < e ? "done" : "pending");
                        var s = KTUtil.findAll(n.element, '[data-ktwizard-type="step-info"]');
                        if (s && s.length > 0)
                            for (r = 0, a = s.length; r < a; r++) r == e ? KTUtil.attr(s[r], "data-ktwizard-state", "current") : KTUtil.removeAttr(s[r], "data-ktwizard-state");
                        var l = KTUtil.findAll(n.element, '[data-ktwizard-type="step-content"]');
                        if (l && l.length > 0)
                            for (r = 0, a = l.length; r < a; r++) r == e ? KTUtil.attr(l[r], "data-ktwizard-state", "current") : KTUtil.removeAttr(l[r], "data-ktwizard-state")
                    },
                    getNextStep: function() {
                        return n.totalSteps >= n.currentStep + 1 ? n.currentStep + 1 : n.totalSteps
                    },
                    getPrevStep: function() {
                        return n.currentStep - 1 >= 1 ? n.currentStep - 1 : 1
                    },
                    eventTrigger: function(t) {
                        for (var e = 0; e < n.events.length; e++) {
                            var i = n.events[e];
                            i.name == t && (1 == i.one ? 0 == i.fired && (n.events[e].fired = !0, i.handler.call(this, n)) : i.handler.call(this, n))
                        }
                    },
                    addEvent: function(t, e, i) {
                        return n.events.push({
                            name: t,
                            handler: e,
                            one: i,
                            fired: !1
                        }), n
                    }
                };
            return n.setDefaults = function(t) {
                r = t
            }, n.goNext = function() {
                return o.goNext()
            }, n.goPrev = function() {
                return o.goPrev()
            }, n.goLast = function() {
                return o.goLast()
            }, n.stop = function() {
                return o.stop()
            }, n.start = function() {
                return o.start()
            }, n.goFirst = function() {
                return o.goFirst()
            }, n.goTo = function(t) {
                return o.goTo(t)
            }, n.getStep = function() {
                return n.currentStep
            }, n.isLastStep = function() {
                return o.isLastStep()
            }, n.isFirstStep = function() {
                return o.isFirstStep()
            }, n.on = function(t, e) {
                return o.addEvent(t, e)
            }, n.one = function(t, e) {
                return o.addEvent(t, e, !0)
            }, o.construct.apply(n, [e]), n
        }
    };
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e(function() {
        try {
            return require("moment")
        } catch (t) {}
    }()) : "function" == typeof define && define.amd ? define(["require"], (function(t) {
        return e(function() {
            try {
                return t("moment")
            } catch (t) {}
        }())
    })) : (t = t || self).Chart = e(t.moment)
}(this, (function(t) {
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
        n = function(t, e) {
            return t(e = {
                exports: {}
            }), e.exports
        }((function(t) {
            var n = {};
            for (var i in e) e.hasOwnProperty(i) && (n[e[i]] = i);
            var r = t.exports = {
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
            for (var o in r)
                if (r.hasOwnProperty(o)) {
                    if (!("channels" in r[o])) throw new Error("missing channels property: " + o);
                    if (!("labels" in r[o])) throw new Error("missing channel labels property: " + o);
                    if (r[o].labels.length !== r[o].channels) throw new Error("channel and label counts mismatch: " + o);
                    var a = r[o].channels,
                        s = r[o].labels;
                    delete r[o].channels, delete r[o].labels, Object.defineProperty(r[o], "channels", {
                        value: a
                    }), Object.defineProperty(r[o], "labels", {
                        value: s
                    })
                } r.rgb.hsl = function(t) {
                var e, n, i = t[0] / 255,
                    r = t[1] / 255,
                    o = t[2] / 255,
                    a = Math.min(i, r, o),
                    s = Math.max(i, r, o),
                    l = s - a;
                return s === a ? e = 0 : i === s ? e = (r - o) / l : r === s ? e = 2 + (o - i) / l : o === s && (e = 4 + (i - r) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), n = (a + s) / 2, [e, 100 * (s === a ? 0 : n <= .5 ? l / (s + a) : l / (2 - s - a)), 100 * n]
            }, r.rgb.hsv = function(t) {
                var e, n, i, r, o, a = t[0] / 255,
                    s = t[1] / 255,
                    l = t[2] / 255,
                    u = Math.max(a, s, l),
                    d = u - Math.min(a, s, l),
                    c = function(t) {
                        return (u - t) / 6 / d + .5
                    };
                return 0 === d ? r = o = 0 : (o = d / u, e = c(a), n = c(s), i = c(l), a === u ? r = i - n : s === u ? r = 1 / 3 + e - i : l === u && (r = 2 / 3 + n - e), r < 0 ? r += 1 : r > 1 && (r -= 1)), [360 * r, 100 * o, 100 * u]
            }, r.rgb.hwb = function(t) {
                var e = t[0],
                    n = t[1],
                    i = t[2];
                return [r.rgb.hsl(t)[0], 1 / 255 * Math.min(e, Math.min(n, i)) * 100, 100 * (i = 1 - 1 / 255 * Math.max(e, Math.max(n, i)))]
            }, r.rgb.cmyk = function(t) {
                var e, n = t[0] / 255,
                    i = t[1] / 255,
                    r = t[2] / 255;
                return [100 * ((1 - n - (e = Math.min(1 - n, 1 - i, 1 - r))) / (1 - e) || 0), 100 * ((1 - i - e) / (1 - e) || 0), 100 * ((1 - r - e) / (1 - e) || 0), 100 * e]
            }, r.rgb.keyword = function(t) {
                var i = n[t];
                if (i) return i;
                var r, o, a, s = 1 / 0;
                for (var l in e)
                    if (e.hasOwnProperty(l)) {
                        var u = (o = t, a = e[l], Math.pow(o[0] - a[0], 2) + Math.pow(o[1] - a[1], 2) + Math.pow(o[2] - a[2], 2));
                        u < s && (s = u, r = l)
                    } return r
            }, r.keyword.rgb = function(t) {
                return e[t]
            }, r.rgb.xyz = function(t) {
                var e = t[0] / 255,
                    n = t[1] / 255,
                    i = t[2] / 255;
                return [100 * (.4124 * (e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .1805 * (i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92)), 100 * (.2126 * e + .7152 * n + .0722 * i), 100 * (.0193 * e + .1192 * n + .9505 * i)]
            }, r.rgb.lab = function(t) {
                var e = r.rgb.xyz(t),
                    n = e[0],
                    i = e[1],
                    o = e[2];
                return i /= 100, o /= 108.883, n = (n /= 95.047) > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, [116 * (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) - 16, 500 * (n - i), 200 * (i - (o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116))]
            }, r.hsl.rgb = function(t) {
                var e, n, i, r, o, a = t[0] / 360,
                    s = t[1] / 100,
                    l = t[2] / 100;
                if (0 === s) return [o = 255 * l, o, o];
                e = 2 * l - (n = l < .5 ? l * (1 + s) : l + s - l * s), r = [0, 0, 0];
                for (var u = 0; u < 3; u++)(i = a + 1 / 3 * -(u - 1)) < 0 && i++, i > 1 && i--, r[u] = 255 * (o = 6 * i < 1 ? e + 6 * (n - e) * i : 2 * i < 1 ? n : 3 * i < 2 ? e + (n - e) * (2 / 3 - i) * 6 : e);
                return r
            }, r.hsl.hsv = function(t) {
                var e = t[0],
                    n = t[1] / 100,
                    i = t[2] / 100,
                    r = n,
                    o = Math.max(i, .01);
                return n *= (i *= 2) <= 1 ? i : 2 - i, r *= o <= 1 ? o : 2 - o, [e, 100 * (0 === i ? 2 * r / (o + r) : 2 * n / (i + n)), (i + n) / 2 * 100]
            }, r.hsv.rgb = function(t) {
                var e = t[0] / 60,
                    n = t[1] / 100,
                    i = t[2] / 100,
                    r = Math.floor(e) % 6,
                    o = e - Math.floor(e),
                    a = 255 * i * (1 - n),
                    s = 255 * i * (1 - n * o),
                    l = 255 * i * (1 - n * (1 - o));
                switch (i *= 255, r) {
                    case 0:
                        return [i, l, a];
                    case 1:
                        return [s, i, a];
                    case 2:
                        return [a, i, l];
                    case 3:
                        return [a, s, i];
                    case 4:
                        return [l, a, i];
                    case 5:
                        return [i, a, s]
                }
            }, r.hsv.hsl = function(t) {
                var e, n, i, r = t[0],
                    o = t[1] / 100,
                    a = t[2] / 100,
                    s = Math.max(a, .01);
                return i = (2 - o) * a, n = o * s, [r, 100 * (n = (n /= (e = (2 - o) * s) <= 1 ? e : 2 - e) || 0), 100 * (i /= 2)]
            }, r.hwb.rgb = function(t) {
                var e, n, i, r, o, a, s, l = t[0] / 360,
                    u = t[1] / 100,
                    d = t[2] / 100,
                    c = u + d;
                switch (c > 1 && (u /= c, d /= c), i = 6 * l - (e = Math.floor(6 * l)), 0 != (1 & e) && (i = 1 - i), r = u + i * ((n = 1 - d) - u), e) {
                    default:
                    case 6:
                    case 0:
                        o = n, a = r, s = u;
                        break;
                    case 1:
                        o = r, a = n, s = u;
                        break;
                    case 2:
                        o = u, a = n, s = r;
                        break;
                    case 3:
                        o = u, a = r, s = n;
                        break;
                    case 4:
                        o = r, a = u, s = n;
                        break;
                    case 5:
                        o = n, a = u, s = r
                }
                return [255 * o, 255 * a, 255 * s]
            }, r.cmyk.rgb = function(t) {
                var e = t[1] / 100,
                    n = t[2] / 100,
                    i = t[3] / 100;
                return [255 * (1 - Math.min(1, t[0] / 100 * (1 - i) + i)), 255 * (1 - Math.min(1, e * (1 - i) + i)), 255 * (1 - Math.min(1, n * (1 - i) + i))]
            }, r.xyz.rgb = function(t) {
                var e, n, i, r = t[0] / 100,
                    o = t[1] / 100,
                    a = t[2] / 100;
                return n = -.9689 * r + 1.8758 * o + .0415 * a, i = .0557 * r + -.204 * o + 1.057 * a, e = (e = 3.2406 * r + -1.5372 * o + -.4986 * a) > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : 12.92 * e, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : 12.92 * n, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : 12.92 * i, [255 * (e = Math.min(Math.max(0, e), 1)), 255 * (n = Math.min(Math.max(0, n), 1)), 255 * (i = Math.min(Math.max(0, i), 1))]
            }, r.xyz.lab = function(t) {
                var e = t[0],
                    n = t[1],
                    i = t[2];
                return n /= 100, i /= 108.883, e = (e /= 95.047) > .008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (e - n), 200 * (n - (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116))]
            }, r.lab.xyz = function(t) {
                var e, n, i;
                e = t[1] / 500 + (n = (t[0] + 16) / 116), i = n - t[2] / 200;
                var r = Math.pow(n, 3),
                    o = Math.pow(e, 3),
                    a = Math.pow(i, 3);
                return n = r > .008856 ? r : (n - 16 / 116) / 7.787, e = o > .008856 ? o : (e - 16 / 116) / 7.787, i = a > .008856 ? a : (i - 16 / 116) / 7.787, [e *= 95.047, n *= 100, i *= 108.883]
            }, r.lab.lch = function(t) {
                var e, n = t[0],
                    i = t[1],
                    r = t[2];
                return (e = 360 * Math.atan2(r, i) / 2 / Math.PI) < 0 && (e += 360), [n, Math.sqrt(i * i + r * r), e]
            }, r.lch.lab = function(t) {
                var e, n = t[1];
                return e = t[2] / 360 * 2 * Math.PI, [t[0], n * Math.cos(e), n * Math.sin(e)]
            }, r.rgb.ansi16 = function(t) {
                var e = t[0],
                    n = t[1],
                    i = t[2],
                    o = 1 in arguments ? arguments[1] : r.rgb.hsv(t)[2];
                if (0 === (o = Math.round(o / 50))) return 30;
                var a = 30 + (Math.round(i / 255) << 2 | Math.round(n / 255) << 1 | Math.round(e / 255));
                return 2 === o && (a += 60), a
            }, r.hsv.ansi16 = function(t) {
                return r.rgb.ansi16(r.hsv.rgb(t), t[2])
            }, r.rgb.ansi256 = function(t) {
                var e = t[0],
                    n = t[1],
                    i = t[2];
                return e === n && n === i ? e < 8 ? 16 : e > 248 ? 231 : Math.round((e - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(e / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(i / 255 * 5)
            }, r.ansi16.rgb = function(t) {
                var e = t % 10;
                if (0 === e || 7 === e) return t > 50 && (e += 3.5), [e = e / 10.5 * 255, e, e];
                var n = .5 * (1 + ~~(t > 50));
                return [(1 & e) * n * 255, (e >> 1 & 1) * n * 255, (e >> 2 & 1) * n * 255]
            }, r.ansi256.rgb = function(t) {
                if (t >= 232) {
                    var e = 10 * (t - 232) + 8;
                    return [e, e, e]
                }
                var n;
                return t -= 16, [Math.floor(t / 36) / 5 * 255, Math.floor((n = t % 36) / 6) / 5 * 255, n % 6 / 5 * 255]
            }, r.rgb.hex = function(t) {
                var e = (((255 & Math.round(t[0])) << 16) + ((255 & Math.round(t[1])) << 8) + (255 & Math.round(t[2]))).toString(16).toUpperCase();
                return "000000".substring(e.length) + e
            }, r.hex.rgb = function(t) {
                var e = t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
                if (!e) return [0, 0, 0];
                var n = e[0];
                3 === e[0].length && (n = n.split("").map((function(t) {
                    return t + t
                })).join(""));
                var i = parseInt(n, 16);
                return [i >> 16 & 255, i >> 8 & 255, 255 & i]
            }, r.rgb.hcg = function(t) {
                var e, n = t[0] / 255,
                    i = t[1] / 255,
                    r = t[2] / 255,
                    o = Math.max(Math.max(n, i), r),
                    a = Math.min(Math.min(n, i), r),
                    s = o - a;
                return e = s <= 0 ? 0 : o === n ? (i - r) / s % 6 : o === i ? 2 + (r - n) / s : 4 + (n - i) / s + 4, e /= 6, [360 * (e %= 1), 100 * s, 100 * (s < 1 ? a / (1 - s) : 0)]
            }, r.hsl.hcg = function(t) {
                var e, n = t[1] / 100,
                    i = t[2] / 100,
                    r = 0;
                return (e = i < .5 ? 2 * n * i : 2 * n * (1 - i)) < 1 && (r = (i - .5 * e) / (1 - e)), [t[0], 100 * e, 100 * r]
            }, r.hsv.hcg = function(t) {
                var e = t[2] / 100,
                    n = t[1] / 100 * e,
                    i = 0;
                return n < 1 && (i = (e - n) / (1 - n)), [t[0], 100 * n, 100 * i]
            }, r.hcg.rgb = function(t) {
                var e = t[1] / 100,
                    n = t[2] / 100;
                if (0 === e) return [255 * n, 255 * n, 255 * n];
                var i, r = [0, 0, 0],
                    o = t[0] / 360 % 1 * 6,
                    a = o % 1,
                    s = 1 - a;
                switch (Math.floor(o)) {
                    case 0:
                        r[0] = 1, r[1] = a, r[2] = 0;
                        break;
                    case 1:
                        r[0] = s, r[1] = 1, r[2] = 0;
                        break;
                    case 2:
                        r[0] = 0, r[1] = 1, r[2] = a;
                        break;
                    case 3:
                        r[0] = 0, r[1] = s, r[2] = 1;
                        break;
                    case 4:
                        r[0] = a, r[1] = 0, r[2] = 1;
                        break;
                    default:
                        r[0] = 1, r[1] = 0, r[2] = s
                }
                return [255 * (e * r[0] + (i = (1 - e) * n)), 255 * (e * r[1] + i), 255 * (e * r[2] + i)]
            }, r.hcg.hsv = function(t) {
                var e = t[1] / 100,
                    n = e + t[2] / 100 * (1 - e),
                    i = 0;
                return n > 0 && (i = e / n), [t[0], 100 * i, 100 * n]
            }, r.hcg.hsl = function(t) {
                var e = t[1] / 100,
                    n = t[2] / 100 * (1 - e) + .5 * e,
                    i = 0;
                return n > 0 && n < .5 ? i = e / (2 * n) : n >= .5 && n < 1 && (i = e / (2 * (1 - n))), [t[0], 100 * i, 100 * n]
            }, r.hcg.hwb = function(t) {
                var e = t[1] / 100,
                    n = e + t[2] / 100 * (1 - e);
                return [t[0], 100 * (n - e), 100 * (1 - n)]
            }, r.hwb.hcg = function(t) {
                var e = 1 - t[2] / 100,
                    n = e - t[1] / 100,
                    i = 0;
                return n < 1 && (i = (e - n) / (1 - n)), [t[0], 100 * n, 100 * i]
            }, r.apple.rgb = function(t) {
                return [t[0] / 65535 * 255, t[1] / 65535 * 255, t[2] / 65535 * 255]
            }, r.rgb.apple = function(t) {
                return [t[0] / 255 * 65535, t[1] / 255 * 65535, t[2] / 255 * 65535]
            }, r.gray.rgb = function(t) {
                return [t[0] / 100 * 255, t[0] / 100 * 255, t[0] / 100 * 255]
            }, r.gray.hsl = r.gray.hsv = function(t) {
                return [0, 0, t[0]]
            }, r.gray.hwb = function(t) {
                return [0, 100, t[0]]
            }, r.gray.cmyk = function(t) {
                return [0, 0, 0, t[0]]
            }, r.gray.lab = function(t) {
                return [t[0], 0, 0]
            }, r.gray.hex = function(t) {
                var e = 255 & Math.round(t[0] / 100 * 255),
                    n = ((e << 16) + (e << 8) + e).toString(16).toUpperCase();
                return "000000".substring(n.length) + n
            }, r.rgb.gray = function(t) {
                return [(t[0] + t[1] + t[2]) / 3 / 255 * 100]
            }
        }));

    function i(t) {
        var e = function() {
                for (var t = {}, e = Object.keys(n), i = e.length, r = 0; r < i; r++) t[e[r]] = {
                    distance: -1,
                    parent: null
                };
                return t
            }(),
            i = [t];
        for (e[t].distance = 0; i.length;)
            for (var r = i.pop(), o = Object.keys(n[r]), a = o.length, s = 0; s < a; s++) {
                var l = o[s],
                    u = e[l]; - 1 === u.distance && (u.distance = e[r].distance + 1, u.parent = r, i.unshift(l))
            }
        return e
    }

    function r(t, e) {
        return function(n) {
            return e(t(n))
        }
    }

    function o(t, e) {
        for (var i = [e[t].parent, t], o = n[e[t].parent][t], a = e[t].parent; e[a].parent;) i.unshift(e[a].parent), o = r(n[e[a].parent][a], o), a = e[a].parent;
        return o.conversion = i, o
    }
    var a = {};
    Object.keys(n).forEach((function(t) {
        a[t] = {}, Object.defineProperty(a[t], "channels", {
            value: n[t].channels
        }), Object.defineProperty(a[t], "labels", {
            value: n[t].labels
        });
        var e = function(t) {
            for (var e = i(t), n = {}, r = Object.keys(e), a = r.length, s = 0; s < a; s++) {
                var l = r[s];
                null !== e[l].parent && (n[l] = o(l, e))
            }
            return n
        }(t);
        Object.keys(e).forEach((function(n) {
            var i = e[n];
            a[t][n] = function(t) {
                var e = function(e) {
                    if (null == e) return e;
                    arguments.length > 1 && (e = Array.prototype.slice.call(arguments));
                    var n = t(e);
                    if ("object" == typeof n)
                        for (var i = n.length, r = 0; r < i; r++) n[r] = Math.round(n[r]);
                    return n
                };
                return "conversion" in t && (e.conversion = t.conversion), e
            }(i), a[t][n].raw = function(t) {
                var e = function(e) {
                    return null == e ? e : (arguments.length > 1 && (e = Array.prototype.slice.call(arguments)), t(e))
                };
                return "conversion" in t && (e.conversion = t.conversion), e
            }(i)
        }))
    }));
    var s = a,
        l = {
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
        u = {
            getRgba: d,
            getHsla: c,
            getRgb: function(t) {
                var e = d(t);
                return e && e.slice(0, 3)
            },
            getHsl: function(t) {
                var e = c(t);
                return e && e.slice(0, 3)
            },
            getHwb: h,
            getAlpha: function(t) {
                var e = d(t);
                return e ? e[3] : (e = c(t)) ? e[3] : (e = h(t)) ? e[3] : void 0
            },
            hexString: function(t, e) {
                return e = void 0 !== e && 3 === t.length ? e : t[3], "#" + v(t[0]) + v(t[1]) + v(t[2]) + (e >= 0 && e < 1 ? v(Math.round(255 * e)) : "")
            },
            rgbString: function(t, e) {
                return e < 1 || t[3] && t[3] < 1 ? f(t, e) : "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
            },
            rgbaString: f,
            percentString: function(t, e) {
                return e < 1 || t[3] && t[3] < 1 ? p(t, e) : "rgb(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%)"
            },
            percentaString: p,
            hslString: function(t, e) {
                return e < 1 || t[3] && t[3] < 1 ? g(t, e) : "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)"
            },
            hslaString: g,
            hwbString: function(t, e) {
                return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")"
            },
            keyword: function(t) {
                return b[t.slice(0, 3)]
            }
        };

    function d(t) {
        if (t) {
            var e = [0, 0, 0],
                n = 1,
                i = t.match(/^#([a-fA-F0-9]{3,4})$/i),
                r = "";
            if (i) {
                r = (i = i[1])[3];
                for (var o = 0; o < e.length; o++) e[o] = parseInt(i[o] + i[o], 16);
                r && (n = Math.round(parseInt(r + r, 16) / 255 * 100) / 100)
            } else if (i = t.match(/^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i)) {
                for (r = i[2], i = i[1], o = 0; o < e.length; o++) e[o] = parseInt(i.slice(2 * o, 2 * o + 2), 16);
                r && (n = Math.round(parseInt(r, 16) / 255 * 100) / 100)
            } else if (i = t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                for (o = 0; o < e.length; o++) e[o] = parseInt(i[o + 1]);
                n = parseFloat(i[4])
            } else if (i = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                for (o = 0; o < e.length; o++) e[o] = Math.round(2.55 * parseFloat(i[o + 1]));
                n = parseFloat(i[4])
            } else if (i = t.match(/(\w+)/)) {
                if ("transparent" == i[1]) return [0, 0, 0, 0];
                if (!(e = l[i[1]])) return
            }
            for (o = 0; o < e.length; o++) e[o] = m(e[o], 0, 255);
            return n = n || 0 == n ? m(n, 0, 1) : 1, e[3] = n, e
        }
    }

    function c(t) {
        if (t) {
            var e = t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
            if (e) {
                var n = parseFloat(e[4]);
                return [m(parseInt(e[1]), 0, 360), m(parseFloat(e[2]), 0, 100), m(parseFloat(e[3]), 0, 100), m(isNaN(n) ? 1 : n, 0, 1)]
            }
        }
    }

    function h(t) {
        if (t) {
            var e = t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
            if (e) {
                var n = parseFloat(e[4]);
                return [m(parseInt(e[1]), 0, 360), m(parseFloat(e[2]), 0, 100), m(parseFloat(e[3]), 0, 100), m(isNaN(n) ? 1 : n, 0, 1)]
            }
        }
    }

    function f(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
    }

    function p(t, e) {
        return "rgba(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%, " + (e || t[3] || 1) + ")"
    }

    function g(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
    }

    function m(t, e, n) {
        return Math.min(Math.max(e, t), n)
    }

    function v(t) {
        var e = t.toString(16).toUpperCase();
        return e.length < 2 ? "0" + e : e
    }
    var b = {};
    for (var y in l) b[l[y]] = y;
    var x = function(t) {
        return t instanceof x ? t : this instanceof x ? (this.valid = !1, this.values = {
            rgb: [0, 0, 0],
            hsl: [0, 0, 0],
            hsv: [0, 0, 0],
            hwb: [0, 0, 0],
            cmyk: [0, 0, 0, 0],
            alpha: 1
        }, void("string" == typeof t ? (e = u.getRgba(t)) ? this.setValues("rgb", e) : (e = u.getHsla(t)) ? this.setValues("hsl", e) : (e = u.getHwb(t)) && this.setValues("hwb", e) : "object" == typeof t && (void 0 !== (e = t).r || void 0 !== e.red ? this.setValues("rgb", e) : void 0 !== e.l || void 0 !== e.lightness ? this.setValues("hsl", e) : void 0 !== e.v || void 0 !== e.value ? this.setValues("hsv", e) : void 0 !== e.w || void 0 !== e.whiteness ? this.setValues("hwb", e) : void 0 === e.c && void 0 === e.cyan || this.setValues("cmyk", e)))) : new x(t);
        var e
    };
    x.prototype = {
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
            return u.hexString(this.values.rgb)
        },
        rgbString: function() {
            return u.rgbString(this.values.rgb, this.values.alpha)
        },
        rgbaString: function() {
            return u.rgbaString(this.values.rgb, this.values.alpha)
        },
        percentString: function() {
            return u.percentString(this.values.rgb, this.values.alpha)
        },
        hslString: function() {
            return u.hslString(this.values.hsl, this.values.alpha)
        },
        hslaString: function() {
            return u.hslaString(this.values.hsl, this.values.alpha)
        },
        hwbString: function() {
            return u.hwbString(this.values.hwb, this.values.alpha)
        },
        keyword: function() {
            return u.keyword(this.values.rgb, this.values.alpha)
        },
        rgbNumber: function() {
            var t = this.values.rgb;
            return t[0] << 16 | t[1] << 8 | t[2]
        },
        luminosity: function() {
            for (var t = this.values.rgb, e = [], n = 0; n < t.length; n++) {
                var i = t[n] / 255;
                e[n] = i <= .03928 ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4)
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
                i = void 0 === e ? .5 : e,
                r = 2 * i - 1,
                o = this.alpha() - n.alpha(),
                a = ((r * o == -1 ? r : (r + o) / (1 + r * o)) + 1) / 2,
                s = 1 - a;
            return this.rgb(a * this.red() + s * n.red(), a * this.green() + s * n.green(), a * this.blue() + s * n.blue()).alpha(this.alpha() * i + n.alpha() * (1 - i))
        },
        toJSON: function() {
            return this.rgb()
        },
        clone: function() {
            var t, e, n = new x,
                i = this.values,
                r = n.values;
            for (var o in i) i.hasOwnProperty(o) && ("[object Array]" === (e = {}.toString.call(t = i[o])) ? r[o] = t.slice(0) : "[object Number]" === e ? r[o] = t : console.error("unexpected color value:", t));
            return n
        }
    }, x.prototype.spaces = {
        rgb: ["red", "green", "blue"],
        hsl: ["hue", "saturation", "lightness"],
        hsv: ["hue", "saturation", "value"],
        hwb: ["hue", "whiteness", "blackness"],
        cmyk: ["cyan", "magenta", "yellow", "black"]
    }, x.prototype.maxes = {
        rgb: [255, 255, 255],
        hsl: [360, 100, 100],
        hsv: [360, 100, 100],
        hwb: [360, 100, 100],
        cmyk: [100, 100, 100, 100]
    }, x.prototype.getValues = function(t) {
        for (var e = this.values, n = {}, i = 0; i < t.length; i++) n[t.charAt(i)] = e[t][i];
        return 1 !== e.alpha && (n.a = e.alpha), n
    }, x.prototype.setValues = function(t, e) {
        var n, i, r = this.values,
            o = this.spaces,
            a = this.maxes,
            l = 1;
        if (this.valid = !0, "alpha" === t) l = e;
        else if (e.length) r[t] = e.slice(0, t.length), l = e[t.length];
        else if (void 0 !== e[t.charAt(0)]) {
            for (n = 0; n < t.length; n++) r[t][n] = e[t.charAt(n)];
            l = e.a
        } else if (void 0 !== e[o[t][0]]) {
            var u = o[t];
            for (n = 0; n < t.length; n++) r[t][n] = e[u[n]];
            l = e.alpha
        }
        if (r.alpha = Math.max(0, Math.min(1, void 0 === l ? r.alpha : l)), "alpha" === t) return !1;
        for (n = 0; n < t.length; n++) i = Math.max(0, Math.min(a[t][n], r[t][n])), r[t][n] = Math.round(i);
        for (var d in o) d !== t && (r[d] = s[t][d](r[t]));
        return !0
    }, x.prototype.setSpace = function(t, e) {
        var n = e[0];
        return void 0 === n ? this.getValues(t) : ("number" == typeof n && (n = Array.prototype.slice.call(e)), this.setValues(t, n), this)
    }, x.prototype.setChannel = function(t, e, n) {
        var i = this.values[t];
        return void 0 === n ? i[e] : n === i[e] ? this : (i[e] = n, this.setValues(t, i), this)
    }, "undefined" != typeof window && (window.Color = x);
    var w, _ = x,
        T = {
            noop: function() {},
            uid: (w = 0, function() {
                return w++
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
                return T.valueOrDefault(T.isArray(t) ? t[e] : t, n)
            },
            callback: function(t, e, n) {
                if (t && "function" == typeof t.call) return t.apply(n, e)
            },
            each: function(t, e, n, i) {
                var r, o, a;
                if (T.isArray(t))
                    if (o = t.length, i)
                        for (r = o - 1; r >= 0; r--) e.call(n, t[r], r);
                    else
                        for (r = 0; r < o; r++) e.call(n, t[r], r);
                else if (T.isObject(t))
                    for (o = (a = Object.keys(t)).length, r = 0; r < o; r++) e.call(n, t[a[r]], a[r])
            },
            arrayEquals: function(t, e) {
                var n, i, r, o;
                if (!t || !e || t.length !== e.length) return !1;
                for (n = 0, i = t.length; n < i; ++n)
                    if (o = e[n], (r = t[n]) instanceof Array && o instanceof Array) {
                        if (!T.arrayEquals(r, o)) return !1
                    } else if (r !== o) return !1;
                return !0
            },
            clone: function(t) {
                if (T.isArray(t)) return t.map(T.clone);
                if (T.isObject(t)) {
                    for (var e = {}, n = Object.keys(t), i = n.length, r = 0; r < i; ++r) e[n[r]] = T.clone(t[n[r]]);
                    return e
                }
                return t
            },
            _merger: function(t, e, n, i) {
                var r = e[t],
                    o = n[t];
                T.isObject(r) && T.isObject(o) ? T.merge(r, o, i) : e[t] = T.clone(o)
            },
            _mergerIf: function(t, e, n) {
                var i = e[t],
                    r = n[t];
                T.isObject(i) && T.isObject(r) ? T.mergeIf(i, r) : e.hasOwnProperty(t) || (e[t] = T.clone(r))
            },
            merge: function(t, e, n) {
                var i, r, o, a, s, l = T.isArray(e) ? e : [e],
                    u = l.length;
                if (!T.isObject(t)) return t;
                for (i = (n = n || {}).merger || T._merger, r = 0; r < u; ++r)
                    if (T.isObject(e = l[r]))
                        for (s = 0, a = (o = Object.keys(e)).length; s < a; ++s) i(o[s], t, e, n);
                return t
            },
            mergeIf: function(t, e) {
                return T.merge(t, e, {
                    merger: T._mergerIf
                })
            },
            extend: Object.assign || function(t) {
                return T.merge(t, [].slice.call(arguments, 1), {
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
                    i = function() {
                        this.constructor = n
                    };
                return i.prototype = e.prototype, n.prototype = new i, n.extend = T.inherits, t && T.extend(n.prototype, t), n.__super__ = e.prototype, n
            },
            _deprecated: function(t, e, n, i) {
                void 0 !== e && console.warn(t + ': "' + n + '" is deprecated. Please use "' + i + '" instead')
            }
        },
        k = T;
    T.callCallback = T.callback, T.indexOf = function(t, e, n) {
        return Array.prototype.indexOf.call(t, e, n)
    }, T.getValueOrDefault = T.valueOrDefault, T.getValueAtIndexOrDefault = T.valueAtIndexOrDefault;
    var S = {
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
                    i = 1;
                return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), -i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n))
            },
            easeOutElastic: function(t) {
                var e = 1.70158,
                    n = 0,
                    i = 1;
                return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1)
            },
            easeInOutElastic: function(t) {
                var e = 1.70158,
                    n = 0,
                    i = 1;
                return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (n || (n = .45), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), t < 1 ? i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * -.5 : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1)
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
                return 1 - S.easeOutBounce(1 - t)
            },
            easeOutBounce: function(t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            },
            easeInOutBounce: function(t) {
                return t < .5 ? .5 * S.easeInBounce(2 * t) : .5 * S.easeOutBounce(2 * t - 1) + .5
            }
        },
        M = {
            effects: S
        };
    k.easingEffects = S;
    var C = Math.PI,
        D = C / 180,
        A = 2 * C,
        E = C / 2,
        P = C / 4,
        L = 2 * C / 3,
        O = {
            clear: function(t) {
                t.ctx.clearRect(0, 0, t.width, t.height)
            },
            roundedRect: function(t, e, n, i, r, o) {
                if (o) {
                    var a = Math.min(o, r / 2, i / 2),
                        s = e + a,
                        l = n + a,
                        u = e + i - a,
                        d = n + r - a;
                    t.moveTo(e, l), s < u && l < d ? (t.arc(s, l, a, -C, -E), t.arc(u, l, a, -E, 0), t.arc(u, d, a, 0, E), t.arc(s, d, a, E, C)) : s < u ? (t.moveTo(s, n), t.arc(u, l, a, -E, E), t.arc(s, l, a, E, C + E)) : l < d ? (t.arc(s, l, a, -C, 0), t.arc(s, d, a, 0, C)) : t.arc(s, l, a, -C, C), t.closePath(), t.moveTo(e, n)
                } else t.rect(e, n, i, r)
            },
            drawPoint: function(t, e, n, i, r, o) {
                var a, s, l, u, d, c = (o || 0) * D;
                if (e && "object" == typeof e && ("[object HTMLImageElement]" === (a = e.toString()) || "[object HTMLCanvasElement]" === a)) return t.save(), t.translate(i, r), t.rotate(c), t.drawImage(e, -e.width / 2, -e.height / 2, e.width, e.height), void t.restore();
                if (!(isNaN(n) || n <= 0)) {
                    switch (t.beginPath(), e) {
                        default:
                            t.arc(i, r, n, 0, A), t.closePath();
                            break;
                        case "triangle":
                            t.moveTo(i + Math.sin(c) * n, r - Math.cos(c) * n), c += L, t.lineTo(i + Math.sin(c) * n, r - Math.cos(c) * n), c += L, t.lineTo(i + Math.sin(c) * n, r - Math.cos(c) * n), t.closePath();
                            break;
                        case "rectRounded":
                            u = n - (d = .516 * n), s = Math.cos(c + P) * u, l = Math.sin(c + P) * u, t.arc(i - s, r - l, d, c - C, c - E), t.arc(i + l, r - s, d, c - E, c), t.arc(i + s, r + l, d, c, c + E), t.arc(i - l, r + s, d, c + E, c + C), t.closePath();
                            break;
                        case "rect":
                            if (!o) {
                                u = Math.SQRT1_2 * n, t.rect(i - u, r - u, 2 * u, 2 * u);
                                break
                            }
                            c += P;
                        case "rectRot":
                            s = Math.cos(c) * n, l = Math.sin(c) * n, t.moveTo(i - s, r - l), t.lineTo(i + l, r - s), t.lineTo(i + s, r + l), t.lineTo(i - l, r + s), t.closePath();
                            break;
                        case "crossRot":
                            c += P;
                        case "cross":
                            s = Math.cos(c) * n, l = Math.sin(c) * n, t.moveTo(i - s, r - l), t.lineTo(i + s, r + l), t.moveTo(i + l, r - s), t.lineTo(i - l, r + s);
                            break;
                        case "star":
                            s = Math.cos(c) * n, l = Math.sin(c) * n, t.moveTo(i - s, r - l), t.lineTo(i + s, r + l), t.moveTo(i + l, r - s), t.lineTo(i - l, r + s), c += P, s = Math.cos(c) * n, l = Math.sin(c) * n, t.moveTo(i - s, r - l), t.lineTo(i + s, r + l), t.moveTo(i + l, r - s), t.lineTo(i - l, r + s);
                            break;
                        case "line":
                            s = Math.cos(c) * n, l = Math.sin(c) * n, t.moveTo(i - s, r - l), t.lineTo(i + s, r + l);
                            break;
                        case "dash":
                            t.moveTo(i, r), t.lineTo(i + Math.cos(c) * n, r + Math.sin(c) * n)
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
            lineTo: function(t, e, n, i) {
                var r = n.steppedLine;
                if (r) {
                    if ("middle" === r) {
                        var o = (e.x + n.x) / 2;
                        t.lineTo(o, i ? n.y : e.y), t.lineTo(o, i ? e.y : n.y)
                    } else "after" === r && !i || "after" !== r && i ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y);
                    t.lineTo(n.x, n.y)
                } else n.tension ? t.bezierCurveTo(i ? e.controlPointPreviousX : e.controlPointNextX, i ? e.controlPointPreviousY : e.controlPointNextY, i ? n.controlPointNextX : n.controlPointPreviousX, i ? n.controlPointNextY : n.controlPointPreviousY, n.x, n.y) : t.lineTo(n.x, n.y)
            }
        },
        I = O;
    k.clear = O.clear, k.drawRoundedRectangle = function(t) {
        t.beginPath(), O.roundedRect.apply(O, arguments)
    };
    var U = {
        _set: function(t, e) {
            return k.merge(this[t] || (this[t] = {}), e)
        }
    };
    U._set("global", {
        defaultColor: "rgba(0,0,0,0.1)",
        defaultFontColor: "#666",
        defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        defaultFontSize: 12,
        defaultFontStyle: "normal",
        defaultLineHeight: 1.2,
        showLines: !0
    });
    var F = U,
        R = k.valueOrDefault,
        K = {
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
                var e, n, i, r;
                return k.isObject(t) ? (e = +t.top || 0, n = +t.right || 0, i = +t.bottom || 0, r = +t.left || 0) : e = n = i = r = +t || 0, {
                    top: e,
                    right: n,
                    bottom: i,
                    left: r,
                    height: e + i,
                    width: r + n
                }
            },
            _parseFont: function(t) {
                var e = F.global,
                    n = R(t.fontSize, e.defaultFontSize),
                    i = {
                        family: R(t.fontFamily, e.defaultFontFamily),
                        lineHeight: k.options.toLineHeight(R(t.lineHeight, e.defaultLineHeight), n),
                        size: n,
                        style: R(t.fontStyle, e.defaultFontStyle),
                        weight: null,
                        string: ""
                    };
                return i.string = function(t) {
                    return !t || k.isNullOrUndef(t.size) || k.isNullOrUndef(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family
                }(i), i
            },
            resolve: function(t, e, n, i) {
                var r, o, a, s = !0;
                for (r = 0, o = t.length; r < o; ++r)
                    if (void 0 !== (a = t[r]) && (void 0 !== e && "function" == typeof a && (a = a(e), s = !1), void 0 !== n && k.isArray(a) && (a = a[n], s = !1), void 0 !== a)) return i && !s && (i.cacheable = !1), a
            }
        },
        N = {
            _factorize: function(t) {
                var e, n = [],
                    i = Math.sqrt(t);
                for (e = 1; e < i; e++) t % e == 0 && (n.push(e), n.push(t / e));
                return i === (0 | i) && n.push(i), n.sort((function(t, e) {
                    return t - e
                })).pop(), n
            },
            log10: Math.log10 || function(t) {
                var e = Math.log(t) * Math.LOG10E,
                    n = Math.round(e);
                return t === Math.pow(10, n) ? n : e
            }
        },
        W = N;
    k.log10 = N.log10;
    var B = k,
        z = I,
        H = K,
        V = W;
    B.easing = M, B.canvas = z, B.options = H, B.math = V, B.rtl = {
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
            var n, i;
            "ltr" !== e && "rtl" !== e || (i = [(n = t.canvas.style).getPropertyValue("direction"), n.getPropertyPriority("direction")], n.setProperty("direction", e, "important"), t.prevTextDirection = i)
        },
        restoreTextDirection: function(t) {
            var e = t.prevTextDirection;
            void 0 !== e && (delete t.prevTextDirection, t.canvas.style.setProperty("direction", e[0], e[1]))
        }
    };
    var Y = function(t) {
        B.extend(this, t), this.initialize.apply(this, arguments)
    };
    B.extend(Y.prototype, {
        _type: void 0,
        initialize: function() {
            this.hidden = !1
        },
        pivot: function() {
            var t = this;
            return t._view || (t._view = B.extend({}, t._model)), t._start = {}, t
        },
        transition: function(t) {
            var e = this,
                n = e._model,
                i = e._start,
                r = e._view;
            return n && 1 !== t ? (r || (r = e._view = {}), i || (i = e._start = {}), function(t, e, n, i) {
                var r, o, a, s, l, u, d, c, h, f = Object.keys(n);
                for (r = 0, o = f.length; r < o; ++r)
                    if (u = n[a = f[r]], e.hasOwnProperty(a) || (e[a] = u), (s = e[a]) !== u && "_" !== a[0]) {
                        if (t.hasOwnProperty(a) || (t[a] = s), (d = typeof u) == typeof(l = t[a]))
                            if ("string" === d) {
                                if ((c = _(l)).valid && (h = _(u)).valid) {
                                    e[a] = h.mix(c, i).rgbString();
                                    continue
                                }
                            } else if (B.isFinite(l) && B.isFinite(u)) {
                            e[a] = l + (u - l) * i;
                            continue
                        }
                        e[a] = u
                    }
            }(i, r, n, t), e) : (e._view = B.extend({}, n), e._start = null, e)
        },
        tooltipPosition: function() {
            return {
                x: this._model.x,
                y: this._model.y
            }
        },
        hasValue: function() {
            return B.isNumber(this._model.x) && B.isNumber(this._model.y)
        }
    }), Y.extend = B.inherits;
    var j = Y,
        X = j.extend({
            chart: null,
            currentStep: 0,
            numSteps: 60,
            easing: "",
            render: null,
            onAnimationProgress: null,
            onAnimationComplete: null
        }),
        q = X;
    Object.defineProperty(X.prototype, "animationObject", {
        get: function() {
            return this
        }
    }), Object.defineProperty(X.prototype, "chartInstance", {
        get: function() {
            return this.chart
        },
        set: function(t) {
            this.chart = t
        }
    }), F._set("global", {
        animation: {
            duration: 1e3,
            easing: "easeOutQuart",
            onProgress: B.noop,
            onComplete: B.noop
        }
    });
    var G = {
            animations: [],
            request: null,
            addAnimation: function(t, e, n, i) {
                var r, o, a = this.animations;
                for (e.chart = t, e.startTime = Date.now(), e.duration = n, i || (t.animating = !0), r = 0, o = a.length; r < o; ++r)
                    if (a[r].chart === t) return void(a[r] = e);
                a.push(e), 1 === a.length && this.requestAnimationFrame()
            },
            cancelAnimation: function(t) {
                var e = B.findIndex(this.animations, (function(e) {
                    return e.chart === t
                })); - 1 !== e && (this.animations.splice(e, 1), t.animating = !1)
            },
            requestAnimationFrame: function() {
                var t = this;
                null === t.request && (t.request = B.requestAnimFrame.call(window, (function() {
                    t.request = null, t.startDigest()
                })))
            },
            startDigest: function() {
                this.advance(), this.animations.length > 0 && this.requestAnimationFrame()
            },
            advance: function() {
                for (var t, e, n, i, r = this.animations, o = 0; o < r.length;) e = (t = r[o]).chart, n = t.numSteps, i = Math.floor((Date.now() - t.startTime) / t.duration * n) + 1, t.currentStep = Math.min(i, n), B.callback(t.render, [e, t], e), B.callback(t.onAnimationProgress, [t], e), t.currentStep >= n ? (B.callback(t.onAnimationComplete, [t], e), e.animating = !1, r.splice(o, 1)) : ++o
            }
        },
        $ = B.options.resolve,
        Z = ["push", "pop", "shift", "splice", "unshift"];

    function J(t, e) {
        var n = t._chartjs;
        if (n) {
            var i = n.listeners,
                r = i.indexOf(e); - 1 !== r && i.splice(r, 1), i.length > 0 || (Z.forEach((function(e) {
                delete t[e]
            })), delete t._chartjs)
        }
    }
    var Q = function(t, e) {
        this.initialize(t, e)
    };
    B.extend(Q.prototype, {
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
                i = this.getDataset(),
                r = e.options.scales;
            null !== t.xAxisID && t.xAxisID in n && !i.xAxisID || (t.xAxisID = i.xAxisID || r.xAxes[0].id), null !== t.yAxisID && t.yAxisID in n && !i.yAxisID || (t.yAxisID = i.yAxisID || r.yAxes[0].id)
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
                i = this.getDataset().data || [],
                r = n.data;
            for (t = 0, e = i.length; t < e; ++t) r[t] = r[t] || this.createMetaData(t);
            n.dataset = n.dataset || this.createMetaDataset()
        },
        addElementAndReset: function(t) {
            var e = this.createMetaData(t);
            this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0)
        },
        buildOrUpdateElements: function() {
            var t, e, n = this,
                i = n.getDataset(),
                r = i.data || (i.data = []);
            n._data !== r && (n._data && J(n._data, n), r && Object.isExtensible(r) && (e = n, (t = r)._chartjs ? t._chartjs.listeners.push(e) : (Object.defineProperty(t, "_chartjs", {
                configurable: !0,
                enumerable: !1,
                value: {
                    listeners: [e]
                }
            }), Z.forEach((function(e) {
                var n = "onData" + e.charAt(0).toUpperCase() + e.slice(1),
                    i = t[e];
                Object.defineProperty(t, e, {
                    configurable: !0,
                    enumerable: !1,
                    value: function() {
                        var e = Array.prototype.slice.call(arguments),
                            r = i.apply(this, e);
                        return B.each(t._chartjs.listeners, (function(t) {
                            "function" == typeof t[n] && t[n].apply(t, e)
                        })), r
                    }
                })
            })))), n._data = r), n.resyncElements()
        },
        _configure: function() {
            this._config = B.merge({}, [this.chart.options.datasets[this._type], this.getDataset()], {
                merger: function(t, e, n) {
                    "_meta" !== t && "data" !== t && B._merger(t, e, n)
                }
            })
        },
        _update: function(t) {
            this._configure(), this._cachedDataOpts = null, this.update(t)
        },
        update: B.noop,
        transition: function(t) {
            for (var e = this.getMeta(), n = e.data || [], i = n.length, r = 0; r < i; ++r) n[r].transition(t);
            e.dataset && e.dataset.transition(t)
        },
        draw: function() {
            var t = this.getMeta(),
                e = t.data || [],
                n = e.length,
                i = 0;
            for (t.dataset && t.dataset.draw(); i < n; ++i) e[i].draw()
        },
        getStyle: function(t) {
            var e, n = this.getMeta(),
                i = n.dataset;
            return this._configure(), !1 !== (e = i && void 0 === t ? this._resolveDatasetElementOptions(i || {}) : this._resolveDataElementOptions(n.data[t = t || 0] || {}, t)).fill && null !== e.fill || (e.backgroundColor = e.borderColor), e
        },
        _resolveDatasetElementOptions: function(t, e) {
            var n, i, r, o, a = this,
                s = a.chart,
                l = a._config,
                u = t.custom || {},
                d = s.options.elements[a.datasetElementType.prototype._type] || {},
                c = a._datasetElementOptions,
                h = {},
                f = {
                    chart: s,
                    dataset: a.getDataset(),
                    datasetIndex: a.index,
                    hover: e
                };
            for (n = 0, i = c.length; n < i; ++n) r = c[n], o = e ? "hover" + r.charAt(0).toUpperCase() + r.slice(1) : r, h[r] = $([u[o], l[o], d[o]], f);
            return h
        },
        _resolveDataElementOptions: function(t, e) {
            var n = this,
                i = t && t.custom,
                r = n._cachedDataOpts;
            if (r && !i) return r;
            var o, a, s, l, u = n.chart,
                d = n._config,
                c = u.options.elements[n.dataElementType.prototype._type] || {},
                h = n._dataElementOptions,
                f = {},
                p = {
                    chart: u,
                    dataIndex: e,
                    dataset: n.getDataset(),
                    datasetIndex: n.index
                },
                g = {
                    cacheable: !i
                };
            if (i = i || {}, B.isArray(h))
                for (a = 0, s = h.length; a < s; ++a) f[l = h[a]] = $([i[l], d[l], c[l]], p, e, g);
            else
                for (a = 0, s = (o = Object.keys(h)).length; a < s; ++a) f[l = o[a]] = $([i[l], d[h[l]], d[l], c[l]], p, e, g);
            return g.cacheable && (n._cachedDataOpts = Object.freeze(f)), f
        },
        removeHoverStyle: function(t) {
            B.merge(t._model, t.$previousStyle || {}), delete t.$previousStyle
        },
        setHoverStyle: function(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                n = t._index,
                i = t.custom || {},
                r = t._model,
                o = B.getHoverColor;
            t.$previousStyle = {
                backgroundColor: r.backgroundColor,
                borderColor: r.borderColor,
                borderWidth: r.borderWidth
            }, r.backgroundColor = $([i.hoverBackgroundColor, e.hoverBackgroundColor, o(r.backgroundColor)], void 0, n), r.borderColor = $([i.hoverBorderColor, e.hoverBorderColor, o(r.borderColor)], void 0, n), r.borderWidth = $([i.hoverBorderWidth, e.hoverBorderWidth, r.borderWidth], void 0, n)
        },
        _removeDatasetHoverStyle: function() {
            var t = this.getMeta().dataset;
            t && this.removeHoverStyle(t)
        },
        _setDatasetHoverStyle: function() {
            var t, e, n, i, r, o, a = this.getMeta().dataset,
                s = {};
            if (a) {
                for (o = a._model, r = this._resolveDatasetElementOptions(a, !0), t = 0, e = (i = Object.keys(r)).length; t < e; ++t) s[n = i[t]] = o[n], o[n] = r[n];
                a.$previousStyle = s
            }
        },
        resyncElements: function() {
            var t = this.getMeta(),
                e = this.getDataset().data,
                n = t.data.length,
                i = e.length;
            i < n ? t.data.splice(i, n - i) : i > n && this.insertElements(n, i - n)
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
    }), Q.extend = B.inherits;
    var tt = Q,
        et = 2 * Math.PI;

    function nt(t, e) {
        var n = e.startAngle,
            i = e.endAngle,
            r = e.pixelMargin,
            o = r / e.outerRadius,
            a = e.x,
            s = e.y;
        t.beginPath(), t.arc(a, s, e.outerRadius, n - o, i + o), e.innerRadius > r ? t.arc(a, s, e.innerRadius - r, i + (o = r / e.innerRadius), n - o, !0) : t.arc(a, s, r, i + Math.PI / 2, n - Math.PI / 2), t.closePath(), t.clip()
    }
    F._set("global", {
        elements: {
            arc: {
                backgroundColor: F.global.defaultColor,
                borderColor: "#fff",
                borderWidth: 2,
                borderAlign: "center"
            }
        }
    });
    var it = j.extend({
            _type: "arc",
            inLabelRange: function(t) {
                var e = this._view;
                return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2)
            },
            inRange: function(t, e) {
                var n = this._view;
                if (n) {
                    for (var i = B.getAngleFromPoint(n, {
                            x: t,
                            y: e
                        }), r = i.angle, o = i.distance, a = n.startAngle, s = n.endAngle; s < a;) s += et;
                    for (; r > s;) r -= et;
                    for (; r < a;) r += et;
                    return r >= a && r <= s && o >= n.innerRadius && o <= n.outerRadius
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
                    i = "inner" === n.borderAlign ? .33 : 0,
                    r = {
                        x: n.x,
                        y: n.y,
                        innerRadius: n.innerRadius,
                        outerRadius: Math.max(n.outerRadius - i, 0),
                        pixelMargin: i,
                        startAngle: n.startAngle,
                        endAngle: n.endAngle,
                        fullCircles: Math.floor(n.circumference / et)
                    };
                if (e.save(), e.fillStyle = n.backgroundColor, e.strokeStyle = n.borderColor, r.fullCircles) {
                    for (r.endAngle = r.startAngle + et, e.beginPath(), e.arc(r.x, r.y, r.outerRadius, r.startAngle, r.endAngle), e.arc(r.x, r.y, r.innerRadius, r.endAngle, r.startAngle, !0), e.closePath(), t = 0; t < r.fullCircles; ++t) e.fill();
                    r.endAngle = r.startAngle + n.circumference % et
                }
                e.beginPath(), e.arc(r.x, r.y, r.outerRadius, r.startAngle, r.endAngle), e.arc(r.x, r.y, r.innerRadius, r.endAngle, r.startAngle, !0), e.closePath(), e.fill(), n.borderWidth && function(t, e, n) {
                    var i = "inner" === e.borderAlign;
                    i ? (t.lineWidth = 2 * e.borderWidth, t.lineJoin = "round") : (t.lineWidth = e.borderWidth, t.lineJoin = "bevel"), n.fullCircles && function(t, e, n, i) {
                        var r, o = n.endAngle;
                        for (i && (n.endAngle = n.startAngle + et, nt(t, n), n.endAngle = o, n.endAngle === n.startAngle && n.fullCircles && (n.endAngle += et, n.fullCircles--)), t.beginPath(), t.arc(n.x, n.y, n.innerRadius, n.startAngle + et, n.startAngle, !0), r = 0; r < n.fullCircles; ++r) t.stroke();
                        for (t.beginPath(), t.arc(n.x, n.y, e.outerRadius, n.startAngle, n.startAngle + et), r = 0; r < n.fullCircles; ++r) t.stroke()
                    }(t, e, n, i), i && nt(t, n), t.beginPath(), t.arc(n.x, n.y, e.outerRadius, n.startAngle, n.endAngle), t.arc(n.x, n.y, n.innerRadius, n.endAngle, n.startAngle, !0), t.closePath(), t.stroke()
                }(e, n, r), e.restore()
            }
        }),
        rt = B.valueOrDefault,
        ot = F.global.defaultColor;
    F._set("global", {
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
    var at = j.extend({
            _type: "line",
            draw: function() {
                var t, e, n, i = this,
                    r = i._view,
                    o = i._chart.ctx,
                    a = r.spanGaps,
                    s = i._children.slice(),
                    l = F.global,
                    u = l.elements.line,
                    d = -1,
                    c = i._loop;
                if (s.length) {
                    if (i._loop) {
                        for (t = 0; t < s.length; ++t)
                            if (e = B.previousItem(s, t), !s[t]._view.skip && e._view.skip) {
                                s = s.slice(t).concat(s.slice(0, t)), c = a;
                                break
                            } c && s.push(s[0])
                    }
                    for (o.save(), o.lineCap = r.borderCapStyle || u.borderCapStyle, o.setLineDash && o.setLineDash(r.borderDash || u.borderDash), o.lineDashOffset = rt(r.borderDashOffset, u.borderDashOffset), o.lineJoin = r.borderJoinStyle || u.borderJoinStyle, o.lineWidth = rt(r.borderWidth, u.borderWidth), o.strokeStyle = r.borderColor || l.defaultColor, o.beginPath(), (n = s[0]._view).skip || (o.moveTo(n.x, n.y), d = 0), t = 1; t < s.length; ++t) n = s[t]._view, e = -1 === d ? B.previousItem(s, t) : s[d], n.skip || (d !== t - 1 && !a || -1 === d ? o.moveTo(n.x, n.y) : B.canvas.lineTo(o, e._view, n), d = t);
                    c && o.closePath(), o.stroke(), o.restore()
                }
            }
        }),
        st = B.valueOrDefault,
        lt = F.global.defaultColor;

    function ut(t) {
        var e = this._view;
        return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius
    }
    F._set("global", {
        elements: {
            point: {
                radius: 3,
                pointStyle: "circle",
                backgroundColor: lt,
                borderColor: lt,
                borderWidth: 1,
                hitRadius: 1,
                hoverRadius: 4,
                hoverBorderWidth: 1
            }
        }
    });
    var dt = j.extend({
            _type: "point",
            inRange: function(t, e) {
                var n = this._view;
                return !!n && Math.pow(t - n.x, 2) + Math.pow(e - n.y, 2) < Math.pow(n.hitRadius + n.radius, 2)
            },
            inLabelRange: ut,
            inXRange: ut,
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
                    i = e.pointStyle,
                    r = e.rotation,
                    o = e.radius,
                    a = e.x,
                    s = e.y,
                    l = F.global,
                    u = l.defaultColor;
                e.skip || (void 0 === t || B.canvas._isPointInArea(e, t)) && (n.strokeStyle = e.borderColor || u, n.lineWidth = st(e.borderWidth, l.elements.point.borderWidth), n.fillStyle = e.backgroundColor || u, B.canvas.drawPoint(n, i, o, a, s, r))
            }
        }),
        ct = F.global.defaultColor;

    function ht(t) {
        return t && void 0 !== t.width
    }

    function ft(t) {
        var e, n, i, r, o;
        return ht(t) ? (e = t.x - (o = t.width / 2), n = t.x + o, i = Math.min(t.y, t.base), r = Math.max(t.y, t.base)) : (o = t.height / 2, e = Math.min(t.x, t.base), n = Math.max(t.x, t.base), i = t.y - o, r = t.y + o), {
            left: e,
            top: i,
            right: n,
            bottom: r
        }
    }

    function pt(t, e, n) {
        return t === e ? n : t === n ? e : t
    }

    function gt(t, e, n) {
        var i = null === e,
            r = null === n,
            o = !(!t || i && r) && ft(t);
        return o && (i || e >= o.left && e <= o.right) && (r || n >= o.top && n <= o.bottom)
    }
    F._set("global", {
        elements: {
            rectangle: {
                backgroundColor: ct,
                borderColor: ct,
                borderSkipped: "bottom",
                borderWidth: 0
            }
        }
    });
    var mt = j.extend({
            _type: "rectangle",
            draw: function() {
                var t = this._chart.ctx,
                    e = this._view,
                    n = function(t) {
                        var e = ft(t),
                            n = e.right - e.left,
                            i = e.bottom - e.top,
                            r = function(t, e, n) {
                                var i, r, o, a, s = t.borderWidth,
                                    l = function(t) {
                                        var e = t.borderSkipped,
                                            n = {};
                                        return e ? (t.horizontal ? t.base > t.x && (e = pt(e, "left", "right")) : t.base < t.y && (e = pt(e, "bottom", "top")), n[e] = !0, n) : n
                                    }(t);
                                return B.isObject(s) ? (i = +s.top || 0, r = +s.right || 0, o = +s.bottom || 0, a = +s.left || 0) : i = r = o = a = +s || 0, {
                                    t: l.top || i < 0 ? 0 : i > n ? n : i,
                                    r: l.right || r < 0 ? 0 : r > e ? e : r,
                                    b: l.bottom || o < 0 ? 0 : o > n ? n : o,
                                    l: l.left || a < 0 ? 0 : a > e ? e : a
                                }
                            }(t, n / 2, i / 2);
                        return {
                            outer: {
                                x: e.left,
                                y: e.top,
                                w: n,
                                h: i
                            },
                            inner: {
                                x: e.left + r.l,
                                y: e.top + r.t,
                                w: n - r.l - r.r,
                                h: i - r.t - r.b
                            }
                        }
                    }(e),
                    i = n.outer,
                    r = n.inner;
                t.fillStyle = e.backgroundColor, t.fillRect(i.x, i.y, i.w, i.h), i.w === r.w && i.h === r.h || (t.save(), t.beginPath(), t.rect(i.x, i.y, i.w, i.h), t.clip(), t.fillStyle = e.borderColor, t.rect(r.x, r.y, r.w, r.h), t.fill("evenodd"), t.restore())
            },
            height: function() {
                var t = this._view;
                return t.base - t.y
            },
            inRange: function(t, e) {
                return gt(this._view, t, e)
            },
            inLabelRange: function(t, e) {
                var n = this._view;
                return ht(n) ? gt(n, t, null) : gt(n, null, e)
            },
            inXRange: function(t) {
                return gt(this._view, t, null)
            },
            inYRange: function(t) {
                return gt(this._view, null, t)
            },
            getCenterPoint: function() {
                var t, e, n = this._view;
                return ht(n) ? (t = n.x, e = (n.y + n.base) / 2) : (t = (n.x + n.base) / 2, e = n.y), {
                    x: t,
                    y: e
                }
            },
            getArea: function() {
                var t = this._view;
                return ht(t) ? t.width * Math.abs(t.y - t.base) : t.height * Math.abs(t.x - t.base)
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
        bt = at,
        yt = dt,
        xt = mt;
    vt.Arc = it, vt.Line = bt, vt.Point = yt, vt.Rectangle = xt;
    var wt = B._deprecated,
        _t = B.valueOrDefault;
    F._set("bar", {
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
    }), F._set("global", {
        datasets: {
            bar: {
                categoryPercentage: .8,
                barPercentage: .9
            }
        }
    });
    var Tt = tt.extend({
            dataElementType: vt.Rectangle,
            _dataElementOptions: ["backgroundColor", "borderColor", "borderSkipped", "borderWidth", "barPercentage", "barThickness", "categoryPercentage", "maxBarThickness", "minBarLength"],
            initialize: function() {
                var t, e, n = this;
                tt.prototype.initialize.apply(n, arguments), (t = n.getMeta()).stack = n.getDataset().stack, t.bar = !0, e = n._getIndexScale().options, wt("bar chart", e.barPercentage, "scales.[x/y]Axes.barPercentage", "dataset.barPercentage"), wt("bar chart", e.barThickness, "scales.[x/y]Axes.barThickness", "dataset.barThickness"), wt("bar chart", e.categoryPercentage, "scales.[x/y]Axes.categoryPercentage", "dataset.categoryPercentage"), wt("bar chart", n._getValueScale().options.minBarLength, "scales.[x/y]Axes.minBarLength", "dataset.minBarLength"), wt("bar chart", e.maxBarThickness, "scales.[x/y]Axes.maxBarThickness", "dataset.maxBarThickness")
            },
            update: function(t) {
                var e, n, i = this.getMeta().data;
                for (this._ruler = this.getRuler(), e = 0, n = i.length; e < n; ++e) this.updateElement(i[e], e, t)
            },
            updateElement: function(t, e, n) {
                var i = this,
                    r = i.getMeta(),
                    o = i.getDataset(),
                    a = i._resolveDataElementOptions(t, e);
                t._xScale = i.getScaleForId(r.xAxisID), t._yScale = i.getScaleForId(r.yAxisID), t._datasetIndex = i.index, t._index = e, t._model = {
                    backgroundColor: a.backgroundColor,
                    borderColor: a.borderColor,
                    borderSkipped: a.borderSkipped,
                    borderWidth: a.borderWidth,
                    datasetLabel: o.label,
                    label: i.chart.data.labels[e]
                }, B.isArray(o.data[e]) && (t._model.borderSkipped = null), i._updateElementGeometry(t, e, n, a), t.pivot()
            },
            _updateElementGeometry: function(t, e, n, i) {
                var r = this,
                    o = t._model,
                    a = r._getValueScale(),
                    s = a.getBasePixel(),
                    l = a.isHorizontal(),
                    u = r._ruler || r.getRuler(),
                    d = r.calculateBarValuePixels(r.index, e, i),
                    c = r.calculateBarIndexPixels(r.index, e, u, i);
                o.horizontal = l, o.base = n ? s : d.base, o.x = l ? n ? s : d.head : c.center, o.y = l ? c.center : n ? s : d.head, o.height = l ? c.size : void 0, o.width = l ? void 0 : c.size
            },
            _getStacks: function(t) {
                var e, n, i = this._getIndexScale(),
                    r = i._getMatchingVisibleMetas(this._type),
                    o = i.options.stacked,
                    a = r.length,
                    s = [];
                for (e = 0; e < a && (n = r[e], (!1 === o || -1 === s.indexOf(n.stack) || void 0 === o && void 0 === n.stack) && s.push(n.stack), n.index !== t); ++e);
                return s
            },
            getStackCount: function() {
                return this._getStacks().length
            },
            getStackIndex: function(t, e) {
                var n = this._getStacks(t),
                    i = void 0 !== e ? n.indexOf(e) : -1;
                return -1 === i ? n.length - 1 : i
            },
            getRuler: function() {
                var t, e, n = this._getIndexScale(),
                    i = [];
                for (t = 0, e = this.getMeta().data.length; t < e; ++t) i.push(n.getPixelForValue(null, t, this.index));
                return {
                    pixels: i,
                    start: n._startPixel,
                    end: n._endPixel,
                    stackCount: this.getStackCount(),
                    scale: n
                }
            },
            calculateBarValuePixels: function(t, e, n) {
                var i, r, o, a, s, l, u, d = this.chart,
                    c = this._getValueScale(),
                    h = c.isHorizontal(),
                    f = d.data.datasets,
                    p = c._getMatchingVisibleMetas(this._type),
                    g = c._parseValue(f[t].data[e]),
                    m = n.minBarLength,
                    v = c.options.stacked,
                    b = this.getMeta().stack,
                    y = void 0 === g.start ? 0 : g.max >= 0 && g.min >= 0 ? g.min : g.max,
                    x = void 0 === g.start ? g.end : g.max >= 0 && g.min >= 0 ? g.max - g.min : g.min - g.max,
                    w = p.length;
                if (v || void 0 === v && void 0 !== b)
                    for (i = 0; i < w && (r = p[i]).index !== t; ++i) r.stack === b && (o = void 0 === (u = c._parseValue(f[r.index].data[e])).start ? u.end : u.min >= 0 && u.max >= 0 ? u.max : u.min, (g.min < 0 && o < 0 || g.max >= 0 && o > 0) && (y += o));
                return a = c.getPixelForValue(y), l = (s = c.getPixelForValue(y + x)) - a, void 0 !== m && Math.abs(l) < m && (l = m, s = x >= 0 && !h || x < 0 && h ? a - m : a + m), {
                    size: l,
                    base: a,
                    head: s,
                    center: s + l / 2
                }
            },
            calculateBarIndexPixels: function(t, e, n, i) {
                var r = "flex" === i.barThickness ? function(t, e, n) {
                        var i, r = e.pixels,
                            o = r[t],
                            a = t > 0 ? r[t - 1] : null,
                            s = t < r.length - 1 ? r[t + 1] : null,
                            l = n.categoryPercentage;
                        return null === a && (a = o - (null === s ? e.end - e.start : s - o)), null === s && (s = o + o - a), i = o - (o - Math.min(a, s)) / 2 * l, {
                            chunk: Math.abs(s - a) / 2 * l / e.stackCount,
                            ratio: n.barPercentage,
                            start: i
                        }
                    }(e, n, i) : function(t, e, n) {
                        var i, r, o = n.barThickness,
                            a = e.stackCount,
                            s = e.pixels[t],
                            l = B.isNullOrUndef(o) ? function(t, e) {
                                var n, i, r, o, a = t._length;
                                for (r = 1, o = e.length; r < o; ++r) a = Math.min(a, Math.abs(e[r] - e[r - 1]));
                                for (r = 0, o = t.getTicks().length; r < o; ++r) i = t.getPixelForTick(r), a = r > 0 ? Math.min(a, Math.abs(i - n)) : a, n = i;
                                return a
                            }(e.scale, e.pixels) : -1;
                        return B.isNullOrUndef(o) ? (i = l * n.categoryPercentage, r = n.barPercentage) : (i = o * a, r = 1), {
                            chunk: i / a,
                            ratio: r,
                            start: s - i / 2
                        }
                    }(e, n, i),
                    o = this.getStackIndex(t, this.getMeta().stack),
                    a = r.start + r.chunk * o + r.chunk / 2,
                    s = Math.min(_t(i.maxBarThickness, 1 / 0), r.chunk * r.ratio);
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
                    i = this.getDataset(),
                    r = n.length,
                    o = 0;
                for (B.canvas.clipArea(t.ctx, t.chartArea); o < r; ++o) {
                    var a = e._parseValue(i.data[o]);
                    isNaN(a.min) || isNaN(a.max) || n[o].draw()
                }
                B.canvas.unclipArea(t.ctx)
            },
            _resolveDataElementOptions: function() {
                var t = this,
                    e = B.extend({}, tt.prototype._resolveDataElementOptions.apply(t, arguments)),
                    n = t._getIndexScale().options,
                    i = t._getValueScale().options;
                return e.barPercentage = _t(n.barPercentage, e.barPercentage), e.barThickness = _t(n.barThickness, e.barThickness), e.categoryPercentage = _t(n.categoryPercentage, e.categoryPercentage), e.maxBarThickness = _t(n.maxBarThickness, e.maxBarThickness), e.minBarLength = _t(i.minBarLength, e.minBarLength), e
            }
        }),
        kt = B.valueOrDefault,
        St = B.options.resolve;
    F._set("bubble", {
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
    var Mt = tt.extend({
            dataElementType: vt.Point,
            _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle", "rotation"],
            update: function(t) {
                var e = this,
                    n = e.getMeta().data;
                B.each(n, (function(n, i) {
                    e.updateElement(n, i, t)
                }))
            },
            updateElement: function(t, e, n) {
                var i = this,
                    r = i.getMeta(),
                    o = t.custom || {},
                    a = i.getScaleForId(r.xAxisID),
                    s = i.getScaleForId(r.yAxisID),
                    l = i._resolveDataElementOptions(t, e),
                    u = i.getDataset().data[e],
                    d = i.index,
                    c = n ? a.getPixelForDecimal(.5) : a.getPixelForValue("object" == typeof u ? u : NaN, e, d),
                    h = n ? s.getBasePixel() : s.getPixelForValue(u, e, d);
                t._xScale = a, t._yScale = s, t._options = l, t._datasetIndex = d, t._index = e, t._model = {
                    backgroundColor: l.backgroundColor,
                    borderColor: l.borderColor,
                    borderWidth: l.borderWidth,
                    hitRadius: l.hitRadius,
                    pointStyle: l.pointStyle,
                    rotation: l.rotation,
                    radius: n ? 0 : l.radius,
                    skip: o.skip || isNaN(c) || isNaN(h),
                    x: c,
                    y: h
                }, t.pivot()
            },
            setHoverStyle: function(t) {
                var e = t._model,
                    n = t._options,
                    i = B.getHoverColor;
                t.$previousStyle = {
                    backgroundColor: e.backgroundColor,
                    borderColor: e.borderColor,
                    borderWidth: e.borderWidth,
                    radius: e.radius
                }, e.backgroundColor = kt(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = kt(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = kt(n.hoverBorderWidth, n.borderWidth), e.radius = n.radius + n.hoverRadius
            },
            _resolveDataElementOptions: function(t, e) {
                var n = this,
                    i = n.chart,
                    r = n.getDataset(),
                    o = t.custom || {},
                    a = r.data[e] || {},
                    s = tt.prototype._resolveDataElementOptions.apply(n, arguments),
                    l = {
                        chart: i,
                        dataIndex: e,
                        dataset: r,
                        datasetIndex: n.index
                    };
                return n._cachedDataOpts === s && (s = B.extend({}, s)), s.radius = St([o.radius, a.r, n._config.radius, i.options.elements.point.radius], l, e), s
            }
        }),
        Ct = B.valueOrDefault,
        Dt = Math.PI,
        At = 2 * Dt,
        Et = Dt / 2;
    F._set("doughnut", {
        animation: {
            animateRotate: !0,
            animateScale: !1
        },
        hover: {
            mode: "single"
        },
        legendCallback: function(t) {
            var e, n, i, r = document.createElement("ul"),
                o = t.data,
                a = o.datasets,
                s = o.labels;
            if (r.setAttribute("class", t.id + "-legend"), a.length)
                for (e = 0, n = a[0].data.length; e < n; ++e)(i = r.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = a[0].backgroundColor[e], s[e] && i.appendChild(document.createTextNode(s[e]));
            return r.outerHTML
        },
        legend: {
            labels: {
                generateLabels: function(t) {
                    var e = t.data;
                    return e.labels.length && e.datasets.length ? e.labels.map((function(n, i) {
                        var r = t.getDatasetMeta(0),
                            o = r.controller.getStyle(i);
                        return {
                            text: n,
                            fillStyle: o.backgroundColor,
                            strokeStyle: o.borderColor,
                            lineWidth: o.borderWidth,
                            hidden: isNaN(e.datasets[0].data[i]) || r.data[i].hidden,
                            index: i
                        }
                    })) : []
                }
            },
            onClick: function(t, e) {
                var n, i, r, o = e.index,
                    a = this.chart;
                for (n = 0, i = (a.data.datasets || []).length; n < i; ++n)(r = a.getDatasetMeta(n)).data[o] && (r.data[o].hidden = !r.data[o].hidden);
                a.update()
            }
        },
        cutoutPercentage: 50,
        rotation: -Et,
        circumference: At,
        tooltips: {
            callbacks: {
                title: function() {
                    return ""
                },
                label: function(t, e) {
                    var n = e.labels[t.index],
                        i = ": " + e.datasets[t.datasetIndex].data[t.index];
                    return B.isArray(n) ? (n = n.slice())[0] += i : n += i, n
                }
            }
        }
    });
    var Pt = tt.extend({
        dataElementType: vt.Arc,
        linkScales: B.noop,
        _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"],
        getRingIndex: function(t) {
            for (var e = 0, n = 0; n < t; ++n) this.chart.isDatasetVisible(n) && ++e;
            return e
        },
        update: function(t) {
            var e, n, i = this,
                r = i.chart,
                o = r.chartArea,
                a = r.options,
                s = 1,
                l = 1,
                u = 0,
                d = 0,
                c = i.getMeta(),
                h = c.data,
                f = a.cutoutPercentage / 100 || 0,
                p = a.circumference,
                g = i._getRingWeight(i.index);
            if (p < At) {
                var m = a.rotation % At,
                    v = (m += m >= Dt ? -At : m < -Dt ? At : 0) + p,
                    b = Math.cos(m),
                    y = Math.sin(m),
                    x = Math.cos(v),
                    w = Math.sin(v),
                    _ = m <= 0 && v >= 0 || v >= At,
                    T = m <= Et && v >= Et || v >= At + Et,
                    k = m <= -Et && v >= -Et || v >= Dt + Et,
                    S = m === -Dt || v >= Dt ? -1 : Math.min(b, b * f, x, x * f),
                    M = k ? -1 : Math.min(y, y * f, w, w * f),
                    C = _ ? 1 : Math.max(b, b * f, x, x * f),
                    D = T ? 1 : Math.max(y, y * f, w, w * f);
                s = (C - S) / 2, l = (D - M) / 2, u = -(C + S) / 2, d = -(D + M) / 2
            }
            for (e = 0, n = h.length; e < n; ++e) h[e]._options = i._resolveDataElementOptions(h[e], e);
            for (r.borderWidth = i.getMaxBorderWidth(), r.outerRadius = Math.max(Math.min((o.right - o.left - r.borderWidth) / s, (o.bottom - o.top - r.borderWidth) / l) / 2, 0), r.innerRadius = Math.max(r.outerRadius * f, 0), r.radiusLength = (r.outerRadius - r.innerRadius) / (i._getVisibleDatasetWeightTotal() || 1), r.offsetX = u * r.outerRadius, r.offsetY = d * r.outerRadius, c.total = i.calculateTotal(), i.outerRadius = r.outerRadius - r.radiusLength * i._getRingWeightOffset(i.index), i.innerRadius = Math.max(i.outerRadius - r.radiusLength * g, 0), e = 0, n = h.length; e < n; ++e) i.updateElement(h[e], e, t)
        },
        updateElement: function(t, e, n) {
            var i = this,
                r = i.chart,
                o = r.chartArea,
                a = r.options,
                s = a.animation,
                l = (o.left + o.right) / 2,
                u = (o.top + o.bottom) / 2,
                d = a.rotation,
                c = a.rotation,
                h = i.getDataset(),
                f = n && s.animateRotate ? 0 : t.hidden ? 0 : i.calculateCircumference(h.data[e]) * (a.circumference / At),
                p = t._options || {};
            B.extend(t, {
                _datasetIndex: i.index,
                _index: e,
                _model: {
                    backgroundColor: p.backgroundColor,
                    borderColor: p.borderColor,
                    borderWidth: p.borderWidth,
                    borderAlign: p.borderAlign,
                    x: l + r.offsetX,
                    y: u + r.offsetY,
                    startAngle: d,
                    endAngle: c,
                    circumference: f,
                    outerRadius: n && s.animateScale ? 0 : i.outerRadius,
                    innerRadius: n && s.animateScale ? 0 : i.innerRadius,
                    label: B.valueAtIndexOrDefault(h.label, e, r.data.labels[e])
                }
            });
            var g = t._model;
            n && s.animateRotate || (g.startAngle = 0 === e ? a.rotation : i.getMeta().data[e - 1]._model.endAngle, g.endAngle = g.startAngle + g.circumference), t.pivot()
        },
        calculateTotal: function() {
            var t, e = this.getDataset(),
                n = this.getMeta(),
                i = 0;
            return B.each(n.data, (function(n, r) {
                t = e.data[r], isNaN(t) || n.hidden || (i += Math.abs(t))
            })), i
        },
        calculateCircumference: function(t) {
            var e = this.getMeta().total;
            return e > 0 && !isNaN(t) ? At * (Math.abs(t) / e) : 0
        },
        getMaxBorderWidth: function(t) {
            var e, n, i, r, o, a, s, l, u = 0,
                d = this.chart;
            if (!t)
                for (e = 0, n = d.data.datasets.length; e < n; ++e)
                    if (d.isDatasetVisible(e)) {
                        t = (i = d.getDatasetMeta(e)).data, e !== this.index && (o = i.controller);
                        break
                    } if (!t) return 0;
            for (e = 0, n = t.length; e < n; ++e) r = t[e], o ? (o._configure(), a = o._resolveDataElementOptions(r, e)) : a = r._options, "inner" !== a.borderAlign && (u = (l = a.hoverBorderWidth) > (u = (s = a.borderWidth) > u ? s : u) ? l : u);
            return u
        },
        setHoverStyle: function(t) {
            var e = t._model,
                n = t._options,
                i = B.getHoverColor;
            t.$previousStyle = {
                backgroundColor: e.backgroundColor,
                borderColor: e.borderColor,
                borderWidth: e.borderWidth
            }, e.backgroundColor = Ct(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = Ct(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = Ct(n.hoverBorderWidth, n.borderWidth)
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
    F._set("horizontalBar", {
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
    }), F._set("global", {
        datasets: {
            horizontalBar: {
                categoryPercentage: .8,
                barPercentage: .9
            }
        }
    });
    var Lt = Tt.extend({
            _getValueScaleId: function() {
                return this.getMeta().xAxisID
            },
            _getIndexScaleId: function() {
                return this.getMeta().yAxisID
            }
        }),
        Ot = B.valueOrDefault,
        It = B.options.resolve,
        Ut = B.canvas._isPointInArea;

    function Ft(t, e) {
        var n = t && t.options.ticks || {},
            i = n.reverse,
            r = void 0 === n.min ? e : 0,
            o = void 0 === n.max ? e : 0;
        return {
            start: i ? o : r,
            end: i ? r : o
        }
    }

    function Rt(t, e, n) {
        var i = n / 2,
            r = Ft(t, i),
            o = Ft(e, i);
        return {
            top: o.end,
            right: r.end,
            bottom: o.start,
            left: r.start
        }
    }

    function Kt(t) {
        var e, n, i, r;
        return B.isObject(t) ? (e = t.top, n = t.right, i = t.bottom, r = t.left) : e = n = i = r = t, {
            top: e,
            right: n,
            bottom: i,
            left: r
        }
    }
    F._set("line", {
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
    var Nt = tt.extend({
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
                var e, n, i = this,
                    r = i.getMeta(),
                    o = r.dataset,
                    a = r.data || [],
                    s = i._config,
                    l = i._showLine = Ot(s.showLine, i.chart.options.showLines);
                for (i._xScale = i.getScaleForId(r.xAxisID), i._yScale = i.getScaleForId(r.yAxisID), l && (void 0 !== s.tension && void 0 === s.lineTension && (s.lineTension = s.tension), o._scale = i._yScale, o._datasetIndex = i.index, o._children = a, o._model = i._resolveDatasetElementOptions(o), o.pivot()), e = 0, n = a.length; e < n; ++e) i.updateElement(a[e], e, t);
                for (l && 0 !== o._model.tension && i.updateBezierControlPoints(), e = 0, n = a.length; e < n; ++e) a[e].pivot()
            },
            updateElement: function(t, e, n) {
                var i, r, o = this,
                    a = o.getMeta(),
                    s = t.custom || {},
                    l = o.getDataset(),
                    u = o.index,
                    d = l.data[e],
                    c = o._xScale,
                    h = o._yScale,
                    f = a.dataset._model,
                    p = o._resolveDataElementOptions(t, e);
                i = c.getPixelForValue("object" == typeof d ? d : NaN, e, u), r = n ? h.getBasePixel() : o.calculatePointY(d, e, u), t._xScale = c, t._yScale = h, t._options = p, t._datasetIndex = u, t._index = e, t._model = {
                    x: i,
                    y: r,
                    skip: s.skip || isNaN(i) || isNaN(r),
                    radius: p.radius,
                    pointStyle: p.pointStyle,
                    rotation: p.rotation,
                    backgroundColor: p.backgroundColor,
                    borderColor: p.borderColor,
                    borderWidth: p.borderWidth,
                    tension: Ot(s.tension, f ? f.tension : 0),
                    steppedLine: !!f && f.steppedLine,
                    hitRadius: p.hitRadius
                }
            },
            _resolveDatasetElementOptions: function(t) {
                var e = this,
                    n = e._config,
                    i = t.custom || {},
                    r = e.chart.options,
                    o = r.elements.line,
                    a = tt.prototype._resolveDatasetElementOptions.apply(e, arguments);
                return a.spanGaps = Ot(n.spanGaps, r.spanGaps), a.tension = Ot(n.lineTension, o.tension), a.steppedLine = It([i.steppedLine, n.steppedLine, o.stepped]), a.clip = Kt(Ot(n.clip, Rt(e._xScale, e._yScale, a.borderWidth))), a
            },
            calculatePointY: function(t, e, n) {
                var i, r, o, a, s, l, u = this.chart,
                    d = this._yScale,
                    c = 0,
                    h = 0;
                if (d.options.stacked) {
                    for (a = +d.getRightValue(t), l = (s = u._getSortedVisibleDatasetMetas()).length, i = 0; i < l && (r = s[i]).index !== n; ++i) "line" === r.type && r.yAxisID === d.id && ((o = +d.getRightValue(u.data.datasets[r.index].data[e])) < 0 ? h += o || 0 : c += o || 0);
                    return d.getPixelForValue(a < 0 ? h + a : c + a)
                }
                return d.getPixelForValue(t)
            },
            updateBezierControlPoints: function() {
                var t, e, n, i, r = this.chart,
                    o = this.getMeta(),
                    a = o.dataset._model,
                    s = r.chartArea,
                    l = o.data || [];

                function u(t, e, n) {
                    return Math.max(Math.min(t, n), e)
                }
                if (a.spanGaps && (l = l.filter((function(t) {
                        return !t._model.skip
                    }))), "monotone" === a.cubicInterpolationMode) B.splineCurveMonotone(l);
                else
                    for (t = 0, e = l.length; t < e; ++t) n = l[t]._model, i = B.splineCurve(B.previousItem(l, t)._model, n, B.nextItem(l, t)._model, a.tension), n.controlPointPreviousX = i.previous.x, n.controlPointPreviousY = i.previous.y, n.controlPointNextX = i.next.x, n.controlPointNextY = i.next.y;
                if (r.options.elements.line.capBezierPoints)
                    for (t = 0, e = l.length; t < e; ++t) Ut(n = l[t]._model, s) && (t > 0 && Ut(l[t - 1]._model, s) && (n.controlPointPreviousX = u(n.controlPointPreviousX, s.left, s.right), n.controlPointPreviousY = u(n.controlPointPreviousY, s.top, s.bottom)), t < l.length - 1 && Ut(l[t + 1]._model, s) && (n.controlPointNextX = u(n.controlPointNextX, s.left, s.right), n.controlPointNextY = u(n.controlPointNextY, s.top, s.bottom)))
            },
            draw: function() {
                var t, e = this.chart,
                    n = this.getMeta(),
                    i = n.data || [],
                    r = e.chartArea,
                    o = e.canvas,
                    a = 0,
                    s = i.length;
                for (this._showLine && (B.canvas.clipArea(e.ctx, {
                        left: !1 === (t = n.dataset._model.clip).left ? 0 : r.left - t.left,
                        right: !1 === t.right ? o.width : r.right + t.right,
                        top: !1 === t.top ? 0 : r.top - t.top,
                        bottom: !1 === t.bottom ? o.height : r.bottom + t.bottom
                    }), n.dataset.draw(), B.canvas.unclipArea(e.ctx)); a < s; ++a) i[a].draw(r)
            },
            setHoverStyle: function(t) {
                var e = t._model,
                    n = t._options,
                    i = B.getHoverColor;
                t.$previousStyle = {
                    backgroundColor: e.backgroundColor,
                    borderColor: e.borderColor,
                    borderWidth: e.borderWidth,
                    radius: e.radius
                }, e.backgroundColor = Ot(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = Ot(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = Ot(n.hoverBorderWidth, n.borderWidth), e.radius = Ot(n.hoverRadius, n.radius)
            }
        }),
        Wt = B.options.resolve;
    F._set("polarArea", {
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
            var e, n, i, r = document.createElement("ul"),
                o = t.data,
                a = o.datasets,
                s = o.labels;
            if (r.setAttribute("class", t.id + "-legend"), a.length)
                for (e = 0, n = a[0].data.length; e < n; ++e)(i = r.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = a[0].backgroundColor[e], s[e] && i.appendChild(document.createTextNode(s[e]));
            return r.outerHTML
        },
        legend: {
            labels: {
                generateLabels: function(t) {
                    var e = t.data;
                    return e.labels.length && e.datasets.length ? e.labels.map((function(n, i) {
                        var r = t.getDatasetMeta(0),
                            o = r.controller.getStyle(i);
                        return {
                            text: n,
                            fillStyle: o.backgroundColor,
                            strokeStyle: o.borderColor,
                            lineWidth: o.borderWidth,
                            hidden: isNaN(e.datasets[0].data[i]) || r.data[i].hidden,
                            index: i
                        }
                    })) : []
                }
            },
            onClick: function(t, e) {
                var n, i, r, o = e.index,
                    a = this.chart;
                for (n = 0, i = (a.data.datasets || []).length; n < i; ++n)(r = a.getDatasetMeta(n)).data[o].hidden = !r.data[o].hidden;
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
    var Bt = tt.extend({
        dataElementType: vt.Arc,
        linkScales: B.noop,
        _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"],
        _getIndexScaleId: function() {
            return this.chart.scale.id
        },
        _getValueScaleId: function() {
            return this.chart.scale.id
        },
        update: function(t) {
            var e, n, i, r = this,
                o = r.getDataset(),
                a = r.getMeta(),
                s = r.chart.options.startAngle || 0,
                l = r._starts = [],
                u = r._angles = [],
                d = a.data;
            for (r._updateRadius(), a.count = r.countVisibleElements(), e = 0, n = o.data.length; e < n; e++) l[e] = s, i = r._computeAngle(e), u[e] = i, s += i;
            for (e = 0, n = d.length; e < n; ++e) d[e]._options = r._resolveDataElementOptions(d[e], e), r.updateElement(d[e], e, t)
        },
        _updateRadius: function() {
            var t = this,
                e = t.chart,
                n = e.chartArea,
                i = e.options,
                r = Math.min(n.right - n.left, n.bottom - n.top);
            e.outerRadius = Math.max(r / 2, 0), e.innerRadius = Math.max(i.cutoutPercentage ? e.outerRadius / 100 * i.cutoutPercentage : 1, 0), e.radiusLength = (e.outerRadius - e.innerRadius) / e.getVisibleDatasetCount(), t.outerRadius = e.outerRadius - e.radiusLength * t.index, t.innerRadius = t.outerRadius - e.radiusLength
        },
        updateElement: function(t, e, n) {
            var i = this,
                r = i.chart,
                o = i.getDataset(),
                a = r.options,
                s = a.animation,
                l = r.scale,
                u = r.data.labels,
                d = l.xCenter,
                c = l.yCenter,
                h = a.startAngle,
                f = t.hidden ? 0 : l.getDistanceFromCenterForValue(o.data[e]),
                p = i._starts[e],
                g = p + (t.hidden ? 0 : i._angles[e]),
                m = s.animateScale ? 0 : l.getDistanceFromCenterForValue(o.data[e]),
                v = t._options || {};
            B.extend(t, {
                _datasetIndex: i.index,
                _index: e,
                _scale: l,
                _model: {
                    backgroundColor: v.backgroundColor,
                    borderColor: v.borderColor,
                    borderWidth: v.borderWidth,
                    borderAlign: v.borderAlign,
                    x: d,
                    y: c,
                    innerRadius: 0,
                    outerRadius: n ? m : f,
                    startAngle: n && s.animateRotate ? h : p,
                    endAngle: n && s.animateRotate ? h : g,
                    label: B.valueAtIndexOrDefault(u, e, u[e])
                }
            }), t.pivot()
        },
        countVisibleElements: function() {
            var t = this.getDataset(),
                e = this.getMeta(),
                n = 0;
            return B.each(e.data, (function(e, i) {
                isNaN(t.data[i]) || e.hidden || n++
            })), n
        },
        setHoverStyle: function(t) {
            var e = t._model,
                n = t._options,
                i = B.getHoverColor,
                r = B.valueOrDefault;
            t.$previousStyle = {
                backgroundColor: e.backgroundColor,
                borderColor: e.borderColor,
                borderWidth: e.borderWidth
            }, e.backgroundColor = r(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = r(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = r(n.hoverBorderWidth, n.borderWidth)
        },
        _computeAngle: function(t) {
            var e = this,
                n = this.getMeta().count,
                i = e.getDataset(),
                r = e.getMeta();
            return isNaN(i.data[t]) || r.data[t].hidden ? 0 : Wt([e.chart.options.elements.arc.angle, 2 * Math.PI / n], {
                chart: e.chart,
                dataIndex: t,
                dataset: i,
                datasetIndex: e.index
            }, t)
        }
    });
    F._set("pie", B.clone(F.doughnut)), F._set("pie", {
        cutoutPercentage: 0
    });
    var zt = Pt,
        Ht = B.valueOrDefault;
    F._set("radar", {
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
    var Vt = tt.extend({
        datasetElementType: vt.Line,
        dataElementType: vt.Point,
        linkScales: B.noop,
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
            var e, n, i = this,
                r = i.getMeta(),
                o = r.dataset,
                a = r.data || [],
                s = i.chart.scale,
                l = i._config;
            for (void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension), o._scale = s, o._datasetIndex = i.index, o._children = a, o._loop = !0, o._model = i._resolveDatasetElementOptions(o), o.pivot(), e = 0, n = a.length; e < n; ++e) i.updateElement(a[e], e, t);
            for (i.updateBezierControlPoints(), e = 0, n = a.length; e < n; ++e) a[e].pivot()
        },
        updateElement: function(t, e, n) {
            var i = this,
                r = t.custom || {},
                o = i.getDataset(),
                a = i.chart.scale,
                s = a.getPointPositionForValue(e, o.data[e]),
                l = i._resolveDataElementOptions(t, e),
                u = i.getMeta().dataset._model,
                d = n ? a.xCenter : s.x,
                c = n ? a.yCenter : s.y;
            t._scale = a, t._options = l, t._datasetIndex = i.index, t._index = e, t._model = {
                x: d,
                y: c,
                skip: r.skip || isNaN(d) || isNaN(c),
                radius: l.radius,
                pointStyle: l.pointStyle,
                rotation: l.rotation,
                backgroundColor: l.backgroundColor,
                borderColor: l.borderColor,
                borderWidth: l.borderWidth,
                tension: Ht(r.tension, u ? u.tension : 0),
                hitRadius: l.hitRadius
            }
        },
        _resolveDatasetElementOptions: function() {
            var t = this,
                e = t._config,
                n = t.chart.options,
                i = tt.prototype._resolveDatasetElementOptions.apply(t, arguments);
            return i.spanGaps = Ht(e.spanGaps, n.spanGaps), i.tension = Ht(e.lineTension, n.elements.line.tension), i
        },
        updateBezierControlPoints: function() {
            var t, e, n, i, r = this.getMeta(),
                o = this.chart.chartArea,
                a = r.data || [];

            function s(t, e, n) {
                return Math.max(Math.min(t, n), e)
            }
            for (r.dataset._model.spanGaps && (a = a.filter((function(t) {
                    return !t._model.skip
                }))), t = 0, e = a.length; t < e; ++t) n = a[t]._model, i = B.splineCurve(B.previousItem(a, t, !0)._model, n, B.nextItem(a, t, !0)._model, n.tension), n.controlPointPreviousX = s(i.previous.x, o.left, o.right), n.controlPointPreviousY = s(i.previous.y, o.top, o.bottom), n.controlPointNextX = s(i.next.x, o.left, o.right), n.controlPointNextY = s(i.next.y, o.top, o.bottom)
        },
        setHoverStyle: function(t) {
            var e = t._model,
                n = t._options,
                i = B.getHoverColor;
            t.$previousStyle = {
                backgroundColor: e.backgroundColor,
                borderColor: e.borderColor,
                borderWidth: e.borderWidth,
                radius: e.radius
            }, e.backgroundColor = Ht(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = Ht(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = Ht(n.hoverBorderWidth, n.borderWidth), e.radius = Ht(n.hoverRadius, n.radius)
        }
    });
    F._set("scatter", {
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
    }), F._set("global", {
        datasets: {
            scatter: {
                showLine: !1
            }
        }
    });
    var Yt = {
        bar: Tt,
        bubble: Mt,
        doughnut: Pt,
        horizontalBar: Lt,
        line: Nt,
        polarArea: Bt,
        pie: zt,
        radar: Vt,
        scatter: Nt
    };

    function jt(t, e) {
        return t.native ? {
            x: t.x,
            y: t.y
        } : B.getRelativePosition(t, e)
    }

    function Xt(t, e) {
        var n, i, r, o, a, s, l = t._getSortedVisibleDatasetMetas();
        for (i = 0, o = l.length; i < o; ++i)
            for (r = 0, a = (n = l[i].data).length; r < a; ++r)(s = n[r])._view.skip || e(s)
    }

    function qt(t, e) {
        var n = [];
        return Xt(t, (function(t) {
            t.inRange(e.x, e.y) && n.push(t)
        })), n
    }

    function Gt(t, e, n, i) {
        var r = Number.POSITIVE_INFINITY,
            o = [];
        return Xt(t, (function(t) {
            if (!n || t.inRange(e.x, e.y)) {
                var a = t.getCenterPoint(),
                    s = i(e, a);
                s < r ? (o = [t], r = s) : s === r && o.push(t)
            }
        })), o
    }

    function $t(t) {
        var e = -1 !== t.indexOf("x"),
            n = -1 !== t.indexOf("y");
        return function(t, i) {
            var r = e ? Math.abs(t.x - i.x) : 0,
                o = n ? Math.abs(t.y - i.y) : 0;
            return Math.sqrt(Math.pow(r, 2) + Math.pow(o, 2))
        }
    }

    function Zt(t, e, n) {
        var i = jt(e, t);
        n.axis = n.axis || "x";
        var r = $t(n.axis),
            o = n.intersect ? qt(t, i) : Gt(t, i, !1, r),
            a = [];
        return o.length ? (t._getSortedVisibleDatasetMetas().forEach((function(t) {
            var e = t.data[o[0]._index];
            e && !e._view.skip && a.push(e)
        })), a) : []
    }
    var Jt = {
            modes: {
                single: function(t, e) {
                    var n = jt(e, t),
                        i = [];
                    return Xt(t, (function(t) {
                        if (t.inRange(n.x, n.y)) return i.push(t), i
                    })), i.slice(0, 1)
                },
                label: Zt,
                index: Zt,
                dataset: function(t, e, n) {
                    var i = jt(e, t);
                    n.axis = n.axis || "xy";
                    var r = $t(n.axis),
                        o = n.intersect ? qt(t, i) : Gt(t, i, !1, r);
                    return o.length > 0 && (o = t.getDatasetMeta(o[0]._datasetIndex).data), o
                },
                "x-axis": function(t, e) {
                    return Zt(t, e, {
                        intersect: !1
                    })
                },
                point: function(t, e) {
                    return qt(t, jt(e, t))
                },
                nearest: function(t, e, n) {
                    var i = jt(e, t);
                    n.axis = n.axis || "xy";
                    var r = $t(n.axis);
                    return Gt(t, i, n.intersect, r)
                },
                x: function(t, e, n) {
                    var i = jt(e, t),
                        r = [],
                        o = !1;
                    return Xt(t, (function(t) {
                        t.inXRange(i.x) && r.push(t), t.inRange(i.x, i.y) && (o = !0)
                    })), n.intersect && !o && (r = []), r
                },
                y: function(t, e, n) {
                    var i = jt(e, t),
                        r = [],
                        o = !1;
                    return Xt(t, (function(t) {
                        t.inYRange(i.y) && r.push(t), t.inRange(i.x, i.y) && (o = !0)
                    })), n.intersect && !o && (r = []), r
                }
            }
        },
        Qt = B.extend;

    function te(t, e) {
        return B.where(t, (function(t) {
            return t.pos === e
        }))
    }

    function ee(t, e) {
        return t.sort((function(t, n) {
            var i = e ? n : t,
                r = e ? t : n;
            return i.weight === r.weight ? i.index - r.index : i.weight - r.weight
        }))
    }

    function ne(t, e, n, i) {
        return Math.max(t[n], e[n]) + Math.max(t[i], e[i])
    }

    function ie(t, e, n) {
        var i, r, o = n.box,
            a = t.maxPadding;
        if (n.size && (t[n.pos] -= n.size), n.size = n.horizontal ? o.height : o.width, t[n.pos] += n.size, o.getPadding) {
            var s = o.getPadding();
            a.top = Math.max(a.top, s.top), a.left = Math.max(a.left, s.left), a.bottom = Math.max(a.bottom, s.bottom), a.right = Math.max(a.right, s.right)
        }
        if (i = e.outerWidth - ne(a, t, "left", "right"), r = e.outerHeight - ne(a, t, "top", "bottom"), i !== t.w || r !== t.h) return t.w = i, t.h = r, n.horizontal ? i !== t.w : r !== t.h
    }

    function re(t, e) {
        var n = e.maxPadding;
        return function(t) {
            var i = {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            };
            return t.forEach((function(t) {
                i[t] = Math.max(e[t], n[t])
            })), i
        }(t ? ["left", "right"] : ["top", "bottom"])
    }

    function oe(t, e, n) {
        var i, r, o, a, s, l, u = [];
        for (i = 0, r = t.length; i < r; ++i)(a = (o = t[i]).box).update(o.width || e.w, o.height || e.h, re(o.horizontal, e)), ie(e, n, o) && (l = !0, u.length && (s = !0)), a.fullWidth || u.push(o);
        return s && oe(u, e, n) || l
    }

    function ae(t, e, n) {
        var i, r, o, a, s = n.padding,
            l = e.x,
            u = e.y;
        for (i = 0, r = t.length; i < r; ++i) a = (o = t[i]).box, o.horizontal ? (a.left = a.fullWidth ? s.left : e.left, a.right = a.fullWidth ? n.outerWidth - s.right : e.left + e.w, a.top = u, a.bottom = u + a.height, a.width = a.right - a.left, u = a.bottom) : (a.left = l, a.right = l + a.width, a.top = e.top, a.bottom = e.top + e.h, a.height = a.bottom - a.top, l = a.right);
        e.x = l, e.y = u
    }
    F._set("global", {
        layout: {
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        }
    });
    var se, le = {
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
                for (var i, r = ["fullWidth", "position", "weight"], o = r.length, a = 0; a < o; ++a) n.hasOwnProperty(i = r[a]) && (e[i] = n[i])
            },
            update: function(t, e, n) {
                if (t) {
                    var i = B.options.toPadding((t.options.layout || {}).padding),
                        r = e - i.width,
                        o = n - i.height,
                        a = function(t) {
                            var e = function(t) {
                                    var e, n, i, r = [];
                                    for (e = 0, n = (t || []).length; e < n; ++e) r.push({
                                        index: e,
                                        box: i = t[e],
                                        pos: i.position,
                                        horizontal: i.isHorizontal(),
                                        weight: i.weight
                                    });
                                    return r
                                }(t),
                                n = ee(te(e, "left"), !0),
                                i = ee(te(e, "right")),
                                r = ee(te(e, "top"), !0),
                                o = ee(te(e, "bottom"));
                            return {
                                leftAndTop: n.concat(r),
                                rightAndBottom: i.concat(o),
                                chartArea: te(e, "chartArea"),
                                vertical: n.concat(i),
                                horizontal: r.concat(o)
                            }
                        }(t.boxes),
                        s = a.vertical,
                        l = a.horizontal,
                        u = Object.freeze({
                            outerWidth: e,
                            outerHeight: n,
                            padding: i,
                            availableWidth: r,
                            vBoxMaxWidth: r / 2 / s.length,
                            hBoxMaxHeight: o / 2
                        }),
                        d = Qt({
                            maxPadding: Qt({}, i),
                            w: r,
                            h: o,
                            x: i.left,
                            y: i.top
                        }, i);
                    ! function(t, e) {
                        var n, i, r;
                        for (n = 0, i = t.length; n < i; ++n)(r = t[n]).width = r.horizontal ? r.box.fullWidth && e.availableWidth : e.vBoxMaxWidth, r.height = r.horizontal && e.hBoxMaxHeight
                    }(s.concat(l), u), oe(s, d, u), oe(l, d, u) && oe(s, d, u),
                        function(t) {
                            var e = t.maxPadding;

                            function n(n) {
                                var i = Math.max(e[n] - t[n], 0);
                                return t[n] += i, i
                            }
                            t.y += n("top"), t.x += n("left"), n("right"), n("bottom")
                        }(d), ae(a.leftAndTop, d, u), d.x += d.w, d.y += d.h, ae(a.rightAndBottom, d, u), t.chartArea = {
                            left: d.left,
                            top: d.top,
                            right: d.left + d.w,
                            bottom: d.top + d.h
                        }, B.each(a.chartArea, (function(e) {
                            var n = e.box;
                            Qt(n, t.chartArea), n.update(d.w, d.h)
                        }))
                }
            }
        },
        ue = (se = Object.freeze({
            __proto__: null,
            default: "@keyframes chartjs-render-animation{from{opacity:.99}to{opacity:1}}.chartjs-render-monitor{animation:chartjs-render-animation 1ms}.chartjs-size-monitor,.chartjs-size-monitor-expand,.chartjs-size-monitor-shrink{position:absolute;direction:ltr;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1}.chartjs-size-monitor-expand>div{position:absolute;width:1000000px;height:1000000px;left:0;top:0}.chartjs-size-monitor-shrink>div{position:absolute;width:200%;height:200%;left:0;top:0}"
        })) && se.default || se,
        de = "$chartjs",
        ce = "chartjs-size-monitor",
        he = "chartjs-render-monitor",
        fe = ["animationstart", "webkitAnimationStart"],
        pe = {
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

    function ge(t, e) {
        var n = B.getStyle(t, e),
            i = n && n.match(/^(\d+)(\.\d+)?px$/);
        return i ? Number(i[1]) : void 0
    }
    var me = !! function() {
        var t = !1;
        try {
            var e = Object.defineProperty({}, "passive", {
                get: function() {
                    t = !0
                }
            });
            window.addEventListener("e", null, e)
        } catch (t) {}
        return t
    }() && {
        passive: !0
    };

    function ve(t, e, n) {
        t.addEventListener(e, n, me)
    }

    function be(t, e, n) {
        t.removeEventListener(e, n, me)
    }

    function ye(t, e, n, i, r) {
        return {
            type: t,
            chart: e,
            native: r || null,
            x: void 0 !== n ? n : null,
            y: void 0 !== i ? i : null
        }
    }

    function xe(t) {
        var e = document.createElement("div");
        return e.className = t || "", e
    }
    var we = {
        disableCSSInjection: !1,
        _enabled: "undefined" != typeof window && "undefined" != typeof document,
        _ensureLoaded: function(t) {
            if (!this.disableCSSInjection) {
                var e = t.getRootNode ? t.getRootNode() : document;
                ! function(t, e) {
                    var n = t[de] || (t[de] = {});
                    if (!n.containsStyles) {
                        n.containsStyles = !0, e = "/* Chart.js */\n" + e;
                        var i = document.createElement("style");
                        i.setAttribute("type", "text/css"), i.appendChild(document.createTextNode(e)), t.appendChild(i)
                    }
                }(e.host ? e : document.head, ue)
            }
        },
        acquireContext: function(t, e) {
            "string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas);
            var n = t && t.getContext && t.getContext("2d");
            return n && n.canvas === t ? (this._ensureLoaded(t), function(t, e) {
                var n = t.style,
                    i = t.getAttribute("height"),
                    r = t.getAttribute("width");
                if (t[de] = {
                        initial: {
                            height: i,
                            width: r,
                            style: {
                                display: n.display,
                                height: n.height,
                                width: n.width
                            }
                        }
                    }, n.display = n.display || "block", null === r || "" === r) {
                    var o = ge(t, "width");
                    void 0 !== o && (t.width = o)
                }
                if (null === i || "" === i)
                    if ("" === t.style.height) t.height = t.width / (e.options.aspectRatio || 2);
                    else {
                        var a = ge(t, "height");
                        void 0 !== o && (t.height = a)
                    }
            }(t, e), n) : null
        },
        releaseContext: function(t) {
            var e = t.canvas;
            if (e[de]) {
                var n = e[de].initial;
                ["height", "width"].forEach((function(t) {
                    var i = n[t];
                    B.isNullOrUndef(i) ? e.removeAttribute(t) : e.setAttribute(t, i)
                })), B.each(n.style || {}, (function(t, n) {
                    e.style[n] = t
                })), e.width = e.width, delete e[de]
            }
        },
        addEventListener: function(t, e, n) {
            var i = t.canvas;
            if ("resize" !== e) {
                var r = n[de] || (n[de] = {});
                ve(i, e, (r.proxies || (r.proxies = {}))[t.id + "_" + e] = function(e) {
                    n(function(t, e) {
                        var n = pe[t.type] || t.type,
                            i = B.getRelativePosition(t, e);
                        return ye(n, e, i.x, i.y, t)
                    }(e, t))
                })
            } else ! function(t, e, n) {
                var i, r, o, a, s = t[de] || (t[de] = {}),
                    l = s.resizer = function(t) {
                        var e = xe(ce),
                            n = xe(ce + "-expand"),
                            i = xe(ce + "-shrink");
                        n.appendChild(xe()), i.appendChild(xe()), e.appendChild(n), e.appendChild(i), e._reset = function() {
                            n.scrollLeft = 1e6, n.scrollTop = 1e6, i.scrollLeft = 1e6, i.scrollTop = 1e6
                        };
                        var r = function() {
                            e._reset(), t()
                        };
                        return ve(n, "scroll", r.bind(n, "expand")), ve(i, "scroll", r.bind(i, "shrink")), e
                    }((i = function() {
                        if (s.resizer) {
                            var i = n.options.maintainAspectRatio && t.parentNode,
                                r = i ? i.clientWidth : 0;
                            e(ye("resize", n)), i && i.clientWidth < r && n.canvas && e(ye("resize", n))
                        }
                    }, o = !1, a = [], function() {
                        a = Array.prototype.slice.call(arguments), r = r || this, o || (o = !0, B.requestAnimFrame.call(window, (function() {
                            o = !1, i.apply(r, a)
                        })))
                    }));
                ! function(t, e) {
                    var n = t[de] || (t[de] = {}),
                        i = n.renderProxy = function(t) {
                            "chartjs-render-animation" === t.animationName && e()
                        };
                    B.each(fe, (function(e) {
                        ve(t, e, i)
                    })), n.reflow = !!t.offsetParent, t.classList.add(he)
                }(t, (function() {
                    if (s.resizer) {
                        var e = t.parentNode;
                        e && e !== l.parentNode && e.insertBefore(l, e.firstChild), l._reset()
                    }
                }))
            }(i, n, t)
        },
        removeEventListener: function(t, e, n) {
            var i = t.canvas;
            if ("resize" !== e) {
                var r = ((n[de] || {}).proxies || {})[t.id + "_" + e];
                r && be(i, e, r)
            } else ! function(t) {
                var e = t[de] || {},
                    n = e.resizer;
                delete e.resizer,
                    function(t) {
                        var e = t[de] || {},
                            n = e.renderProxy;
                        n && (B.each(fe, (function(e) {
                            be(t, e, n)
                        })), delete e.renderProxy), t.classList.remove(he)
                    }(t), n && n.parentNode && n.parentNode.removeChild(n)
            }(i)
        }
    };
    B.addEvent = ve, B.removeEvent = be;
    var _e = B.extend({
        initialize: function() {},
        acquireContext: function() {},
        releaseContext: function() {},
        addEventListener: function() {},
        removeEventListener: function() {}
    }, we._enabled ? we : {
        acquireContext: function(t) {
            return t && t.canvas && (t = t.canvas), t && t.getContext("2d") || null
        }
    });
    F._set("global", {
        plugins: {}
    });
    var Te = {
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
                var i, r, o, a, s, l = this.descriptors(t),
                    u = l.length;
                for (i = 0; i < u; ++i)
                    if ("function" == typeof(s = (o = (r = l[i]).plugin)[e]) && ((a = [t].concat(n || [])).push(r.options), !1 === s.apply(o, a))) return !1;
                return !0
            },
            descriptors: function(t) {
                var e = t.$plugins || (t.$plugins = {});
                if (e.id === this._cacheId) return e.descriptors;
                var n = [],
                    i = [],
                    r = t && t.config || {},
                    o = r.options && r.options.plugins || {};
                return this._plugins.concat(r.plugins || []).forEach((function(t) {
                    if (-1 === n.indexOf(t)) {
                        var e = t.id,
                            r = o[e];
                        !1 !== r && (!0 === r && (r = B.clone(F.global.plugins[e])), n.push(t), i.push({
                            plugin: t,
                            options: r || {}
                        }))
                    }
                })), e.descriptors = i, e.id = this._cacheId, i
            },
            _invalidate: function(t) {
                delete t.$plugins
            }
        },
        ke = {
            constructors: {},
            defaults: {},
            registerScaleType: function(t, e, n) {
                this.constructors[t] = e, this.defaults[t] = B.clone(n)
            },
            getScaleConstructor: function(t) {
                return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0
            },
            getScaleDefaults: function(t) {
                return this.defaults.hasOwnProperty(t) ? B.merge({}, [F.scale, this.defaults[t]]) : {}
            },
            updateScaleDefaults: function(t, e) {
                this.defaults.hasOwnProperty(t) && (this.defaults[t] = B.extend(this.defaults[t], e))
            },
            addScalesToLayout: function(t) {
                B.each(t.scales, (function(e) {
                    e.fullWidth = e.options.fullWidth, e.position = e.options.position, e.weight = e.options.weight, le.addBox(t, e)
                }))
            }
        },
        Se = B.valueOrDefault,
        Me = B.rtl.getRtlAdapter;
    F._set("global", {
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
                beforeTitle: B.noop,
                title: function(t, e) {
                    var n = "",
                        i = e.labels,
                        r = i ? i.length : 0;
                    if (t.length > 0) {
                        var o = t[0];
                        o.label ? n = o.label : o.xLabel ? n = o.xLabel : r > 0 && o.index < r && (n = i[o.index])
                    }
                    return n
                },
                afterTitle: B.noop,
                beforeBody: B.noop,
                beforeLabel: B.noop,
                label: function(t, e) {
                    var n = e.datasets[t.datasetIndex].label || "";
                    return n && (n += ": "), B.isNullOrUndef(t.value) ? n += t.yLabel : n += t.value, n
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
                afterLabel: B.noop,
                afterBody: B.noop,
                beforeFooter: B.noop,
                footer: B.noop,
                afterFooter: B.noop
            }
        }
    });
    var Ce = {
        average: function(t) {
            if (!t.length) return !1;
            var e, n, i = 0,
                r = 0,
                o = 0;
            for (e = 0, n = t.length; e < n; ++e) {
                var a = t[e];
                if (a && a.hasValue()) {
                    var s = a.tooltipPosition();
                    i += s.x, r += s.y, ++o
                }
            }
            return {
                x: i / o,
                y: r / o
            }
        },
        nearest: function(t, e) {
            var n, i, r, o = e.x,
                a = e.y,
                s = Number.POSITIVE_INFINITY;
            for (n = 0, i = t.length; n < i; ++n) {
                var l = t[n];
                if (l && l.hasValue()) {
                    var u = l.getCenterPoint(),
                        d = B.distanceBetweenPoints(e, u);
                    d < s && (s = d, r = l)
                }
            }
            if (r) {
                var c = r.tooltipPosition();
                o = c.x, a = c.y
            }
            return {
                x: o,
                y: a
            }
        }
    };

    function De(t, e) {
        return e && (B.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
    }

    function Ae(t) {
        return ("string" == typeof t || t instanceof String) && t.indexOf("\n") > -1 ? t.split("\n") : t
    }

    function Ee(t) {
        var e = F.global;
        return {
            xPadding: t.xPadding,
            yPadding: t.yPadding,
            xAlign: t.xAlign,
            yAlign: t.yAlign,
            rtl: t.rtl,
            textDirection: t.textDirection,
            bodyFontColor: t.bodyFontColor,
            _bodyFontFamily: Se(t.bodyFontFamily, e.defaultFontFamily),
            _bodyFontStyle: Se(t.bodyFontStyle, e.defaultFontStyle),
            _bodyAlign: t.bodyAlign,
            bodyFontSize: Se(t.bodyFontSize, e.defaultFontSize),
            bodySpacing: t.bodySpacing,
            titleFontColor: t.titleFontColor,
            _titleFontFamily: Se(t.titleFontFamily, e.defaultFontFamily),
            _titleFontStyle: Se(t.titleFontStyle, e.defaultFontStyle),
            titleFontSize: Se(t.titleFontSize, e.defaultFontSize),
            _titleAlign: t.titleAlign,
            titleSpacing: t.titleSpacing,
            titleMarginBottom: t.titleMarginBottom,
            footerFontColor: t.footerFontColor,
            _footerFontFamily: Se(t.footerFontFamily, e.defaultFontFamily),
            _footerFontStyle: Se(t.footerFontStyle, e.defaultFontStyle),
            footerFontSize: Se(t.footerFontSize, e.defaultFontSize),
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

    function Pe(t, e) {
        return "center" === e ? t.x + t.width / 2 : "right" === e ? t.x + t.width - t.xPadding : t.x + t.xPadding
    }

    function Le(t) {
        return De([], Ae(t))
    }
    var Oe = j.extend({
        initialize: function() {
            this._model = Ee(this._options), this._lastActive = []
        },
        getTitle: function() {
            var t = this,
                e = t._options,
                n = e.callbacks,
                i = n.beforeTitle.apply(t, arguments),
                r = n.title.apply(t, arguments),
                o = n.afterTitle.apply(t, arguments),
                a = [];
            return a = De(a, Ae(i)), a = De(a, Ae(r)), De(a, Ae(o))
        },
        getBeforeBody: function() {
            return Le(this._options.callbacks.beforeBody.apply(this, arguments))
        },
        getBody: function(t, e) {
            var n = this,
                i = n._options.callbacks,
                r = [];
            return B.each(t, (function(t) {
                var o = {
                    before: [],
                    lines: [],
                    after: []
                };
                De(o.before, Ae(i.beforeLabel.call(n, t, e))), De(o.lines, i.label.call(n, t, e)), De(o.after, Ae(i.afterLabel.call(n, t, e))), r.push(o)
            })), r
        },
        getAfterBody: function() {
            return Le(this._options.callbacks.afterBody.apply(this, arguments))
        },
        getFooter: function() {
            var t = this,
                e = t._options.callbacks,
                n = e.beforeFooter.apply(t, arguments),
                i = e.footer.apply(t, arguments),
                r = e.afterFooter.apply(t, arguments),
                o = [];
            return o = De(o, Ae(n)), o = De(o, Ae(i)), De(o, Ae(r))
        },
        update: function(t) {
            var e, n, i, r, o, a, s, l, u, d, c = this,
                h = c._options,
                f = c._model,
                p = c._model = Ee(h),
                g = c._active,
                m = c._data,
                v = {
                    xAlign: f.xAlign,
                    yAlign: f.yAlign
                },
                b = {
                    x: f.x,
                    y: f.y
                },
                y = {
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
                x = Ce[h.position].call(c, g, c._eventPosition);
                var T = [];
                for (e = 0, n = g.length; e < n; ++e) T.push((r = void 0, o = void 0, l = void 0, u = void 0, d = void 0, r = (i = g[e])._xScale, o = i._yScale || i._scale, a = i._index, u = (l = i._chart.getDatasetMeta(s = i._datasetIndex).controller)._getIndexScale(), d = l._getValueScale(), {
                    xLabel: r ? r.getLabelForIndex(a, s) : "",
                    yLabel: o ? o.getLabelForIndex(a, s) : "",
                    label: u ? "" + u.getLabelForIndex(a, s) : "",
                    value: d ? "" + d.getLabelForIndex(a, s) : "",
                    index: a,
                    datasetIndex: s,
                    x: i._model.x,
                    y: i._model.y
                }));
                h.filter && (T = T.filter((function(t) {
                    return h.filter(t, m)
                }))), h.itemSort && (T = T.sort((function(t, e) {
                    return h.itemSort(t, e, m)
                }))), B.each(T, (function(t) {
                    w.push(h.callbacks.labelColor.call(c, t, c._chart)), _.push(h.callbacks.labelTextColor.call(c, t, c._chart))
                })), p.title = c.getTitle(T, m), p.beforeBody = c.getBeforeBody(T, m), p.body = c.getBody(T, m), p.afterBody = c.getAfterBody(T, m), p.footer = c.getFooter(T, m), p.x = x.x, p.y = x.y, p.caretPadding = h.caretPadding, p.labelColors = w, p.labelTextColors = _, p.dataPoints = T, b = function(t, e, n, i) {
                    var r = t.x,
                        o = t.y,
                        a = t.caretPadding,
                        s = n.xAlign,
                        l = n.yAlign,
                        u = t.caretSize + a,
                        d = t.cornerRadius + a;
                    return "right" === s ? r -= e.width : "center" === s && ((r -= e.width / 2) + e.width > i.width && (r = i.width - e.width), r < 0 && (r = 0)), "top" === l ? o += u : o -= "bottom" === l ? e.height + u : e.height / 2, "center" === l ? "left" === s ? r += u : "right" === s && (r -= u) : "left" === s ? r -= d : "right" === s && (r += d), {
                        x: r,
                        y: o
                    }
                }(p, y = function(t, e) {
                    var n = t._chart.ctx,
                        i = 2 * e.yPadding,
                        r = 0,
                        o = e.body,
                        a = o.reduce((function(t, e) {
                            return t + e.before.length + e.lines.length + e.after.length
                        }), 0),
                        s = e.title.length,
                        l = e.footer.length,
                        u = e.titleFontSize,
                        d = e.bodyFontSize,
                        c = e.footerFontSize;
                    i += s * u, i += s ? (s - 1) * e.titleSpacing : 0, i += s ? e.titleMarginBottom : 0, i += (a += e.beforeBody.length + e.afterBody.length) * d, i += a ? (a - 1) * e.bodySpacing : 0, i += l ? e.footerMarginTop : 0, i += l * c, i += l ? (l - 1) * e.footerSpacing : 0;
                    var h = 0,
                        f = function(t) {
                            r = Math.max(r, n.measureText(t).width + h)
                        };
                    return n.font = B.fontString(u, e._titleFontStyle, e._titleFontFamily), B.each(e.title, f), n.font = B.fontString(d, e._bodyFontStyle, e._bodyFontFamily), B.each(e.beforeBody.concat(e.afterBody), f), h = e.displayColors ? d + 2 : 0, B.each(o, (function(t) {
                        B.each(t.before, f), B.each(t.lines, f), B.each(t.after, f)
                    })), h = 0, n.font = B.fontString(c, e._footerFontStyle, e._footerFontFamily), B.each(e.footer, f), {
                        width: r += 2 * e.xPadding,
                        height: i
                    }
                }(this, p), v = function(t, e) {
                    var n, i, r, o, a, s = t._model,
                        l = t._chart,
                        u = t._chart.chartArea,
                        d = "center",
                        c = "center";
                    s.y < e.height ? c = "top" : s.y > l.height - e.height && (c = "bottom");
                    var h = (u.left + u.right) / 2,
                        f = (u.top + u.bottom) / 2;
                    "center" === c ? (n = function(t) {
                        return t <= h
                    }, i = function(t) {
                        return t > h
                    }) : (n = function(t) {
                        return t <= e.width / 2
                    }, i = function(t) {
                        return t >= l.width - e.width / 2
                    }), r = function(t) {
                        return t + e.width + s.caretSize + s.caretPadding > l.width
                    }, o = function(t) {
                        return t - e.width - s.caretSize - s.caretPadding < 0
                    }, a = function(t) {
                        return t <= f ? "top" : "bottom"
                    }, n(s.x) ? (d = "left", r(s.x) && (d = "center", c = a(s.y))) : i(s.x) && (d = "right", o(s.x) && (d = "center", c = a(s.y)));
                    var p = t._options;
                    return {
                        xAlign: p.xAlign ? p.xAlign : d,
                        yAlign: p.yAlign ? p.yAlign : c
                    }
                }(this, y), c._chart)
            } else p.opacity = 0;
            return p.xAlign = v.xAlign, p.yAlign = v.yAlign, p.x = b.x, p.y = b.y, p.width = y.width, p.height = y.height, p.caretX = x.x, p.caretY = x.y, c._model = p, t && h.custom && h.custom.call(c, p), c
        },
        drawCaret: function(t, e) {
            var n = this._chart.ctx,
                i = this.getCaretPosition(t, e, this._view);
            n.lineTo(i.x1, i.y1), n.lineTo(i.x2, i.y2), n.lineTo(i.x3, i.y3)
        },
        getCaretPosition: function(t, e, n) {
            var i, r, o, a, s, l, u = n.caretSize,
                d = n.cornerRadius,
                c = n.xAlign,
                h = n.yAlign,
                f = t.x,
                p = t.y,
                g = e.width,
                m = e.height;
            if ("center" === h) s = p + m / 2, "left" === c ? (r = (i = f) - u, o = i, a = s + u, l = s - u) : (r = (i = f + g) + u, o = i, a = s - u, l = s + u);
            else if ("left" === c ? (i = (r = f + d + u) - u, o = r + u) : "right" === c ? (i = (r = f + g - d - u) - u, o = r + u) : (i = (r = n.caretX) - u, o = r + u), "top" === h) s = (a = p) - u, l = a;
            else {
                s = (a = p + m) + u, l = a;
                var v = o;
                o = i, i = v
            }
            return {
                x1: i,
                x2: r,
                x3: o,
                y1: a,
                y2: s,
                y3: l
            }
        },
        drawTitle: function(t, e, n) {
            var i, r, o, a = e.title,
                s = a.length;
            if (s) {
                var l = Me(e.rtl, e.x, e.width);
                for (t.x = Pe(e, e._titleAlign), n.textAlign = l.textAlign(e._titleAlign), n.textBaseline = "middle", i = e.titleFontSize, r = e.titleSpacing, n.fillStyle = e.titleFontColor, n.font = B.fontString(i, e._titleFontStyle, e._titleFontFamily), o = 0; o < s; ++o) n.fillText(a[o], l.x(t.x), t.y + i / 2), t.y += i + r, o + 1 === s && (t.y += e.titleMarginBottom - r)
            }
        },
        drawBody: function(t, e, n) {
            var i, r, o, a, s, l, u, d, c = e.bodyFontSize,
                h = e.bodySpacing,
                f = e._bodyAlign,
                p = e.body,
                g = e.displayColors,
                m = 0,
                v = g ? Pe(e, "left") : 0,
                b = Me(e.rtl, e.x, e.width),
                y = function(e) {
                    n.fillText(e, b.x(t.x + m), t.y + c / 2), t.y += c + h
                },
                x = b.textAlign(f);
            for (n.textAlign = f, n.textBaseline = "middle", n.font = B.fontString(c, e._bodyFontStyle, e._bodyFontFamily), t.x = Pe(e, x), n.fillStyle = e.bodyFontColor, B.each(e.beforeBody, y), m = g && "right" !== x ? "center" === f ? c / 2 + 1 : c + 2 : 0, s = 0, u = p.length; s < u; ++s) {
                for (i = p[s], o = e.labelColors[s], n.fillStyle = r = e.labelTextColors[s], B.each(i.before, y), l = 0, d = (a = i.lines).length; l < d; ++l) {
                    if (g) {
                        var w = b.x(v);
                        n.fillStyle = e.legendColorBackground, n.fillRect(b.leftForLtr(w, c), t.y, c, c), n.lineWidth = 1, n.strokeStyle = o.borderColor, n.strokeRect(b.leftForLtr(w, c), t.y, c, c), n.fillStyle = o.backgroundColor, n.fillRect(b.leftForLtr(b.xPlus(w, 1), c - 2), t.y + 1, c - 2, c - 2), n.fillStyle = r
                    }
                    y(a[l])
                }
                B.each(i.after, y)
            }
            m = 0, B.each(e.afterBody, y), t.y -= h
        },
        drawFooter: function(t, e, n) {
            var i, r, o = e.footer,
                a = o.length;
            if (a) {
                var s = Me(e.rtl, e.x, e.width);
                for (t.x = Pe(e, e._footerAlign), t.y += e.footerMarginTop, n.textAlign = s.textAlign(e._footerAlign), n.textBaseline = "middle", i = e.footerFontSize, n.fillStyle = e.footerFontColor, n.font = B.fontString(i, e._footerFontStyle, e._footerFontFamily), r = 0; r < a; ++r) n.fillText(o[r], s.x(t.x), t.y + i / 2), t.y += i + e.footerSpacing
            }
        },
        drawBackground: function(t, e, n, i) {
            n.fillStyle = e.backgroundColor, n.strokeStyle = e.borderColor, n.lineWidth = e.borderWidth;
            var r = e.xAlign,
                o = e.yAlign,
                a = t.x,
                s = t.y,
                l = i.width,
                u = i.height,
                d = e.cornerRadius;
            n.beginPath(), n.moveTo(a + d, s), "top" === o && this.drawCaret(t, i), n.lineTo(a + l - d, s), n.quadraticCurveTo(a + l, s, a + l, s + d), "center" === o && "right" === r && this.drawCaret(t, i), n.lineTo(a + l, s + u - d), n.quadraticCurveTo(a + l, s + u, a + l - d, s + u), "bottom" === o && this.drawCaret(t, i), n.lineTo(a + d, s + u), n.quadraticCurveTo(a, s + u, a, s + u - d), "center" === o && "left" === r && this.drawCaret(t, i), n.lineTo(a, s + d), n.quadraticCurveTo(a, s, a + d, s), n.closePath(), n.fill(), e.borderWidth > 0 && n.stroke()
        },
        draw: function() {
            var t = this._chart.ctx,
                e = this._view;
            if (0 !== e.opacity) {
                var n = {
                        width: e.width,
                        height: e.height
                    },
                    i = {
                        x: e.x,
                        y: e.y
                    },
                    r = Math.abs(e.opacity < .001) ? 0 : e.opacity;
                this._options.enabled && (e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length) && (t.save(), t.globalAlpha = r, this.drawBackground(i, e, t, n), i.y += e.yPadding, B.rtl.overrideTextDirection(t, e.textDirection), this.drawTitle(i, e, t), this.drawBody(i, e, t), this.drawFooter(i, e, t), B.rtl.restoreTextDirection(t, e.textDirection), t.restore())
            }
        },
        handleEvent: function(t) {
            var e, n = this,
                i = n._options;
            return n._lastActive = n._lastActive || [], "mouseout" === t.type ? n._active = [] : (n._active = n._chart.getElementsAtEventForMode(t, i.mode, i), i.reverse && n._active.reverse()), (e = !B.arrayEquals(n._active, n._lastActive)) && (n._lastActive = n._active, (i.enabled || i.custom) && (n._eventPosition = {
                x: t.x,
                y: t.y
            }, n.update(!0), n.pivot())), e
        }
    });
    Oe.positioners = Ce;
    var Ie = B.valueOrDefault;

    function Ue() {
        return B.merge({}, [].slice.call(arguments), {
            merger: function(t, e, n, i) {
                if ("xAxes" === t || "yAxes" === t) {
                    var r, o, a, s = n[t].length;
                    for (e[t] || (e[t] = []), r = 0; r < s; ++r) o = Ie((a = n[t][r]).type, "xAxes" === t ? "category" : "linear"), r >= e[t].length && e[t].push({}), B.merge(e[t][r], !e[t][r].type || a.type && a.type !== e[t][r].type ? [ke.getScaleDefaults(o), a] : a)
                } else B._merger(t, e, n, i)
            }
        })
    }

    function Fe() {
        return B.merge({}, [].slice.call(arguments), {
            merger: function(t, e, n, i) {
                var r = e[t] || {},
                    o = n[t];
                "scales" === t ? e[t] = Ue(r, o) : "scale" === t ? e[t] = B.merge(r, [ke.getScaleDefaults(o.type), o]) : B._merger(t, e, n, i)
            }
        })
    }

    function Re(t) {
        var e = t.options;
        B.each(t.scales, (function(e) {
            le.removeBox(t, e)
        })), e = Fe(F.global, F[t.config.type], e), t.options = t.config.options = e, t.ensureScalesHaveIDs(), t.buildOrUpdateScales(), t.tooltip._options = e.tooltips, t.tooltip.initialize()
    }

    function Ke(t, e, n) {
        var i, r = function(t) {
            return t.id === i
        };
        do {
            i = e + n++
        } while (B.findIndex(t, r) >= 0);
        return i
    }

    function Ne(t) {
        return "top" === t || "bottom" === t
    }

    function We(t, e) {
        return function(n, i) {
            return n[t] === i[t] ? n[e] - i[e] : n[t] - i[t]
        }
    }
    F._set("global", {
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
    var Be = function(t, e) {
        return this.construct(t, e), this
    };
    B.extend(Be.prototype, {
        construct: function(t, e) {
            var n = this;
            e = function(t) {
                var e = (t = t || {}).data = t.data || {};
                return e.datasets = e.datasets || [], e.labels = e.labels || [], t.options = Fe(F.global, F[t.type], t.options || {}), t
            }(e);
            var i = _e.acquireContext(t, e),
                r = i && i.canvas,
                o = r && r.height,
                a = r && r.width;
            n.id = B.uid(), n.ctx = i, n.canvas = r, n.config = e, n.width = a, n.height = o, n.aspectRatio = o ? a / o : null, n.options = e.options, n._bufferedRender = !1, n._layers = [], n.chart = n, n.controller = n, Be.instances[n.id] = n, Object.defineProperty(n, "data", {
                get: function() {
                    return n.config.data
                },
                set: function(t) {
                    n.config.data = t
                }
            }), i && r ? (n.initialize(), n.update()) : console.error("Failed to create chart: can't acquire context from the given item")
        },
        initialize: function() {
            var t = this;
            return Te.notify(t, "beforeInit"), B.retinaScale(t, t.options.devicePixelRatio), t.bindEvents(), t.options.responsive && t.resize(!0), t.initToolTip(), Te.notify(t, "afterInit"), t
        },
        clear: function() {
            return B.canvas.clear(this), this
        },
        stop: function() {
            return G.cancelAnimation(this), this
        },
        resize: function(t) {
            var e = this,
                n = e.options,
                i = e.canvas,
                r = n.maintainAspectRatio && e.aspectRatio || null,
                o = Math.max(0, Math.floor(B.getMaximumWidth(i))),
                a = Math.max(0, Math.floor(r ? o / r : B.getMaximumHeight(i)));
            if ((e.width !== o || e.height !== a) && (i.width = e.width = o, i.height = e.height = a, i.style.width = o + "px", i.style.height = a + "px", B.retinaScale(e, n.devicePixelRatio), !t)) {
                var s = {
                    width: o,
                    height: a
                };
                Te.notify(e, "resize", [s]), n.onResize && n.onResize(e, s), e.stop(), e.update({
                    duration: n.responsiveAnimationDuration
                })
            }
        },
        ensureScalesHaveIDs: function() {
            var t = this.options,
                e = t.scales || {},
                n = t.scale;
            B.each(e.xAxes, (function(t, n) {
                t.id || (t.id = Ke(e.xAxes, "x-axis-", n))
            })), B.each(e.yAxes, (function(t, n) {
                t.id || (t.id = Ke(e.yAxes, "y-axis-", n))
            })), n && (n.id = n.id || "scale")
        },
        buildOrUpdateScales: function() {
            var t = this,
                e = t.options,
                n = t.scales || {},
                i = [],
                r = Object.keys(n).reduce((function(t, e) {
                    return t[e] = !1, t
                }), {});
            e.scales && (i = i.concat((e.scales.xAxes || []).map((function(t) {
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
            })))), e.scale && i.push({
                options: e.scale,
                dtype: "radialLinear",
                isDefault: !0,
                dposition: "chartArea"
            }), B.each(i, (function(e) {
                var i = e.options,
                    o = i.id,
                    a = Ie(i.type, e.dtype);
                Ne(i.position) !== Ne(e.dposition) && (i.position = e.dposition), r[o] = !0;
                var s = null;
                if (o in n && n[o].type === a)(s = n[o]).options = i, s.ctx = t.ctx, s.chart = t;
                else {
                    var l = ke.getScaleConstructor(a);
                    if (!l) return;
                    s = new l({
                        id: o,
                        type: a,
                        options: i,
                        ctx: t.ctx,
                        chart: t
                    }), n[s.id] = s
                }
                s.mergeTicksOptions(), e.isDefault && (t.scale = s)
            })), B.each(r, (function(t, e) {
                t || delete n[e]
            })), t.scales = n, ke.addScalesToLayout(this)
        },
        buildOrUpdateControllers: function() {
            var t, e, n = this,
                i = [],
                r = n.data.datasets;
            for (t = 0, e = r.length; t < e; t++) {
                var o = r[t],
                    a = n.getDatasetMeta(t),
                    s = o.type || n.config.type;
                if (a.type && a.type !== s && (n.destroyDatasetMeta(t), a = n.getDatasetMeta(t)), a.type = s, a.order = o.order || 0, a.index = t, a.controller) a.controller.updateIndex(t), a.controller.linkScales();
                else {
                    var l = Yt[a.type];
                    if (void 0 === l) throw new Error('"' + a.type + '" is not a chart type.');
                    a.controller = new l(n, t), i.push(a.controller)
                }
            }
            return i
        },
        resetElements: function() {
            var t = this;
            B.each(t.data.datasets, (function(e, n) {
                t.getDatasetMeta(n).controller.reset()
            }), t)
        },
        reset: function() {
            this.resetElements(), this.tooltip.initialize()
        },
        update: function(t) {
            var e, n, i = this;
            if (t && "object" == typeof t || (t = {
                    duration: t,
                    lazy: arguments[1]
                }), Re(i), Te._invalidate(i), !1 !== Te.notify(i, "beforeUpdate")) {
                i.tooltip._data = i.data;
                var r = i.buildOrUpdateControllers();
                for (e = 0, n = i.data.datasets.length; e < n; e++) i.getDatasetMeta(e).controller.buildOrUpdateElements();
                i.updateLayout(), i.options.animation && i.options.animation.duration && B.each(r, (function(t) {
                    t.reset()
                })), i.updateDatasets(), i.tooltip.initialize(), i.lastActive = [], Te.notify(i, "afterUpdate"), i._layers.sort(We("z", "_idx")), i._bufferedRender ? i._bufferedRequest = {
                    duration: t.duration,
                    easing: t.easing,
                    lazy: t.lazy
                } : i.render(t)
            }
        },
        updateLayout: function() {
            var t = this;
            !1 !== Te.notify(t, "beforeLayout") && (le.update(this, this.width, this.height), t._layers = [], B.each(t.boxes, (function(e) {
                e._configure && e._configure(), t._layers.push.apply(t._layers, e._layers())
            }), t), t._layers.forEach((function(t, e) {
                t._idx = e
            })), Te.notify(t, "afterScaleUpdate"), Te.notify(t, "afterLayout"))
        },
        updateDatasets: function() {
            if (!1 !== Te.notify(this, "beforeDatasetsUpdate")) {
                for (var t = 0, e = this.data.datasets.length; t < e; ++t) this.updateDataset(t);
                Te.notify(this, "afterDatasetsUpdate")
            }
        },
        updateDataset: function(t) {
            var e = this.getDatasetMeta(t),
                n = {
                    meta: e,
                    index: t
                };
            !1 !== Te.notify(this, "beforeDatasetUpdate", [n]) && (e.controller._update(), Te.notify(this, "afterDatasetUpdate", [n]))
        },
        render: function(t) {
            var e = this;
            t && "object" == typeof t || (t = {
                duration: t,
                lazy: arguments[1]
            });
            var n = e.options.animation,
                i = Ie(t.duration, n && n.duration),
                r = t.lazy;
            if (!1 !== Te.notify(e, "beforeRender")) {
                var o = function(t) {
                    Te.notify(e, "afterRender"), B.callback(n && n.onComplete, [t], e)
                };
                if (n && i) {
                    var a = new q({
                        numSteps: i / 16.66,
                        easing: t.easing || n.easing,
                        render: function(t, e) {
                            var n = e.currentStep,
                                i = n / e.numSteps;
                            t.draw((0, B.easing.effects[e.easing])(i), i, n)
                        },
                        onAnimationProgress: n.onProgress,
                        onAnimationComplete: o
                    });
                    G.addAnimation(e, a, i, r)
                } else e.draw(), o(new q({
                    numSteps: 0,
                    chart: e
                }));
                return e
            }
        },
        draw: function(t) {
            var e, n, i = this;
            if (i.clear(), B.isNullOrUndef(t) && (t = 1), i.transition(t), !(i.width <= 0 || i.height <= 0) && !1 !== Te.notify(i, "beforeDraw", [t])) {
                for (n = i._layers, e = 0; e < n.length && n[e].z <= 0; ++e) n[e].draw(i.chartArea);
                for (i.drawDatasets(t); e < n.length; ++e) n[e].draw(i.chartArea);
                i._drawTooltip(t), Te.notify(i, "afterDraw", [t])
            }
        },
        transition: function(t) {
            for (var e = 0, n = (this.data.datasets || []).length; e < n; ++e) this.isDatasetVisible(e) && this.getDatasetMeta(e).controller.transition(t);
            this.tooltip.transition(t)
        },
        _getSortedDatasetMetas: function(t) {
            var e, n, i = [];
            for (e = 0, n = (this.data.datasets || []).length; e < n; ++e) t && !this.isDatasetVisible(e) || i.push(this.getDatasetMeta(e));
            return i.sort(We("order", "index")), i
        },
        _getSortedVisibleDatasetMetas: function() {
            return this._getSortedDatasetMetas(!0)
        },
        drawDatasets: function(t) {
            var e, n;
            if (!1 !== Te.notify(this, "beforeDatasetsDraw", [t])) {
                for (n = (e = this._getSortedVisibleDatasetMetas()).length - 1; n >= 0; --n) this.drawDataset(e[n], t);
                Te.notify(this, "afterDatasetsDraw", [t])
            }
        },
        drawDataset: function(t, e) {
            var n = {
                meta: t,
                index: t.index,
                easingValue: e
            };
            !1 !== Te.notify(this, "beforeDatasetDraw", [n]) && (t.controller.draw(e), Te.notify(this, "afterDatasetDraw", [n]))
        },
        _drawTooltip: function(t) {
            var e = this.tooltip,
                n = {
                    tooltip: e,
                    easingValue: t
                };
            !1 !== Te.notify(this, "beforeTooltipDraw", [n]) && (e.draw(), Te.notify(this, "afterTooltipDraw", [n]))
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
            var i = Jt.modes[e];
            return "function" == typeof i ? i(this, t, n) : []
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
                i = n._meta && n._meta[e];
            i && (i.controller.destroy(), delete n._meta[e])
        },
        destroy: function() {
            var t, e, n = this,
                i = n.canvas;
            for (n.stop(), t = 0, e = n.data.datasets.length; t < e; ++t) n.destroyDatasetMeta(t);
            i && (n.unbindEvents(), B.canvas.clear(n), _e.releaseContext(n.ctx), n.canvas = null, n.ctx = null), Te.notify(n, "destroy"), delete Be.instances[n.id]
        },
        toBase64Image: function() {
            return this.canvas.toDataURL.apply(this.canvas, arguments)
        },
        initToolTip: function() {
            var t = this;
            t.tooltip = new Oe({
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
            B.each(t.options.events, (function(i) {
                _e.addEventListener(t, i, n), e[i] = n
            })), t.options.responsive && (n = function() {
                t.resize()
            }, _e.addEventListener(t, "resize", n), e.resize = n)
        },
        unbindEvents: function() {
            var t = this,
                e = t._listeners;
            e && (delete t._listeners, B.each(e, (function(e, n) {
                _e.removeEventListener(t, n, e)
            })))
        },
        updateHoverStyle: function(t, e, n) {
            var i, r, o, a = n ? "set" : "remove";
            for (r = 0, o = t.length; r < o; ++r)(i = t[r]) && this.getDatasetMeta(i._datasetIndex).controller[a + "HoverStyle"](i);
            "dataset" === e && this.getDatasetMeta(t[0]._datasetIndex).controller["_" + a + "DatasetHoverStyle"]()
        },
        eventHandler: function(t) {
            var e = this,
                n = e.tooltip;
            if (!1 !== Te.notify(e, "beforeEvent", [t])) {
                e._bufferedRender = !0, e._bufferedRequest = null;
                var i = e.handleEvent(t);
                n && (i = n._start ? n.handleEvent(t) : i | n.handleEvent(t)), Te.notify(e, "afterEvent", [t]);
                var r = e._bufferedRequest;
                return r ? e.render(r) : i && !e.animating && (e.stop(), e.render({
                    duration: e.options.hover.animationDuration,
                    lazy: !0
                })), e._bufferedRender = !1, e._bufferedRequest = null, e
            }
        },
        handleEvent: function(t) {
            var e, n = this,
                i = n.options || {},
                r = i.hover;
            return n.lastActive = n.lastActive || [], n.active = "mouseout" === t.type ? [] : n.getElementsAtEventForMode(t, r.mode, r), B.callback(i.onHover || i.hover.onHover, [t.native, n.active], n), "mouseup" !== t.type && "click" !== t.type || i.onClick && i.onClick.call(n, t.native, n.active), n.lastActive.length && n.updateHoverStyle(n.lastActive, r.mode, !1), n.active.length && r.mode && n.updateHoverStyle(n.active, r.mode, !0), e = !B.arrayEquals(n.active, n.lastActive), n.lastActive = n.active, e
        }
    }), Be.instances = {};
    var ze = Be;

    function He() {
        throw new Error("This method is not implemented: either no adapter can be found or an incomplete integration was provided.")
    }

    function Ve(t) {
        this.options = t || {}
    }
    Be.Controller = Be, Be.types = {}, B.configMerge = Fe, B.scaleMerge = Ue, B.extend(Ve.prototype, {
        formats: He,
        parse: He,
        format: He,
        add: He,
        diff: He,
        startOf: He,
        endOf: He,
        _create: function(t) {
            return t
        }
    }), Ve.override = function(t) {
        B.extend(Ve.prototype, t)
    };
    var Ye = {
            _date: Ve
        },
        je = {
            formatters: {
                values: function(t) {
                    return B.isArray(t) ? t : "" + t
                },
                linear: function(t, e, n) {
                    var i = n.length > 3 ? n[2] - n[1] : n[1] - n[0];
                    Math.abs(i) > 1 && t !== Math.floor(t) && (i = t - Math.floor(t));
                    var r = B.log10(Math.abs(i)),
                        o = "";
                    if (0 !== t)
                        if (Math.max(Math.abs(n[0]), Math.abs(n[n.length - 1])) < 1e-4) {
                            var a = B.log10(Math.abs(t)),
                                s = Math.floor(a) - Math.floor(r);
                            s = Math.max(Math.min(s, 20), 0), o = t.toExponential(s)
                        } else {
                            var l = -1 * Math.floor(r);
                            l = Math.max(Math.min(l, 20), 0), o = t.toFixed(l)
                        }
                    else o = "0";
                    return o
                },
                logarithmic: function(t, e, n) {
                    var i = t / Math.pow(10, Math.floor(B.log10(t)));
                    return 0 === t ? "0" : 1 === i || 2 === i || 5 === i || 0 === e || e === n.length - 1 ? t.toExponential() : ""
                }
            }
        },
        Xe = B.isArray,
        qe = B.isNullOrUndef,
        Ge = B.valueOrDefault,
        $e = B.valueAtIndexOrDefault;

    function Ze(t, e, n) {
        var i, r = t.getTicks().length,
            o = Math.min(e, r - 1),
            a = t.getPixelForTick(o),
            s = t._startPixel,
            l = t._endPixel;
        if (!(n && (i = 1 === r ? Math.max(a - s, l - a) : 0 === e ? (t.getPixelForTick(1) - a) / 2 : (a - t.getPixelForTick(o - 1)) / 2, (a += o < e ? i : -i) < s - 1e-6 || a > l + 1e-6))) return a
    }

    function Je(t) {
        return t.drawTicks ? t.tickMarkLength : 0
    }

    function Qe(t) {
        var e, n;
        return t.display ? (e = B.options._parseFont(t), n = B.options.toPadding(t.padding), e.lineHeight + n.height) : 0
    }

    function tn(t, e) {
        return B.extend(B.options._parseFont({
            fontFamily: Ge(e.fontFamily, t.fontFamily),
            fontSize: Ge(e.fontSize, t.fontSize),
            fontStyle: Ge(e.fontStyle, t.fontStyle),
            lineHeight: Ge(e.lineHeight, t.lineHeight)
        }), {
            color: B.options.resolve([e.fontColor, t.fontColor, F.global.defaultFontColor])
        })
    }

    function en(t) {
        var e = tn(t, t.minor);
        return {
            minor: e,
            major: t.major.enabled ? tn(t, t.major) : e
        }
    }

    function nn(t) {
        var e, n, i, r = [];
        for (n = 0, i = t.length; n < i; ++n) void 0 !== (e = t[n])._index && r.push(e);
        return r
    }

    function rn(t, e, n, i) {
        var r, o, a, s, l = Ge(n, 0),
            u = Math.min(Ge(i, t.length), t.length),
            d = 0;
        for (e = Math.ceil(e), i && (e = (r = i - n) / Math.floor(r / e)), s = l; s < 0;) d++, s = Math.round(l + d * e);
        for (o = Math.max(l, 0); o < u; o++) a = t[o], o === s ? (a._index = o, d++, s = Math.round(l + d * e)) : delete a.label
    }
    F._set("scale", {
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
            callback: je.formatters.values,
            minor: {},
            major: {}
        }
    });
    var on = j.extend({
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
            B.callback(this.options.beforeUpdate, [this])
        },
        update: function(t, e, n) {
            var i, r, o, a, s, l = this,
                u = l.options.ticks,
                d = u.sampleSize;
            if (l.beforeUpdate(), l.maxWidth = t, l.maxHeight = e, l.margins = B.extend({
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }, n), l._ticks = null, l.ticks = null, l._labelSizes = null, l._maxLabelLines = 0, l.longestLabelWidth = 0, l.longestTextCache = l.longestTextCache || {}, l._gridLineItems = null, l._labelItems = null, l.beforeSetDimensions(), l.setDimensions(), l.afterSetDimensions(), l.beforeDataLimits(), l.determineDataLimits(), l.afterDataLimits(), l.beforeBuildTicks(), a = l.buildTicks() || [], (!(a = l.afterBuildTicks(a) || a) || !a.length) && l.ticks)
                for (a = [], i = 0, r = l.ticks.length; i < r; ++i) a.push({
                    value: l.ticks[i],
                    major: !1
                });
            return l._ticks = a, o = l._convertTicksToLabels((s = d < a.length) ? function(t, e) {
                for (var n = [], i = t.length / e, r = 0, o = t.length; r < o; r += i) n.push(t[Math.floor(r)]);
                return n
            }(a, d) : a), l._configure(), l.beforeCalculateTickRotation(), l.calculateTickRotation(), l.afterCalculateTickRotation(), l.beforeFit(), l.fit(), l.afterFit(), l._ticksToDraw = u.display && (u.autoSkip || "auto" === u.source) ? l._autoSkip(a) : a, s && (o = l._convertTicksToLabels(l._ticksToDraw)), l.ticks = o, l.afterUpdate(), l.minSize
        },
        _configure: function() {
            var t, e, n = this,
                i = n.options.ticks.reverse;
            n.isHorizontal() ? (t = n.left, e = n.right) : (t = n.top, e = n.bottom, i = !i), n._startPixel = t, n._endPixel = e, n._reversePixels = i, n._length = e - t
        },
        afterUpdate: function() {
            B.callback(this.options.afterUpdate, [this])
        },
        beforeSetDimensions: function() {
            B.callback(this.options.beforeSetDimensions, [this])
        },
        setDimensions: function() {
            var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0
        },
        afterSetDimensions: function() {
            B.callback(this.options.afterSetDimensions, [this])
        },
        beforeDataLimits: function() {
            B.callback(this.options.beforeDataLimits, [this])
        },
        determineDataLimits: B.noop,
        afterDataLimits: function() {
            B.callback(this.options.afterDataLimits, [this])
        },
        beforeBuildTicks: function() {
            B.callback(this.options.beforeBuildTicks, [this])
        },
        buildTicks: B.noop,
        afterBuildTicks: function(t) {
            var e = this;
            return Xe(t) && t.length ? B.callback(e.options.afterBuildTicks, [e, t]) : (e.ticks = B.callback(e.options.afterBuildTicks, [e, e.ticks]) || e.ticks, t)
        },
        beforeTickToLabelConversion: function() {
            B.callback(this.options.beforeTickToLabelConversion, [this])
        },
        convertTicksToLabels: function() {
            var t = this.options.ticks;
            this.ticks = this.ticks.map(t.userCallback || t.callback, this)
        },
        afterTickToLabelConversion: function() {
            B.callback(this.options.afterTickToLabelConversion, [this])
        },
        beforeCalculateTickRotation: function() {
            B.callback(this.options.beforeCalculateTickRotation, [this])
        },
        calculateTickRotation: function() {
            var t, e, n, i, r, o, a, s = this,
                l = s.options,
                u = l.ticks,
                d = s.getTicks().length,
                c = u.minRotation || 0,
                h = u.maxRotation,
                f = c;
            !s._isVisible() || !u.display || c >= h || d <= 1 || !s.isHorizontal() ? s.labelRotation = c : (e = (t = s._getLabelSizes()).widest.width, n = t.highest.height - t.highest.offset, i = Math.min(s.maxWidth, s.chart.width - e), e + 6 > (r = l.offset ? s.maxWidth / d : i / (d - 1)) && (r = i / (d - (l.offset ? .5 : 1)), o = s.maxHeight - Je(l.gridLines) - u.padding - Qe(l.scaleLabel), a = Math.sqrt(e * e + n * n), f = B.toDegrees(Math.min(Math.asin(Math.min((t.highest.height + 6) / r, 1)), Math.asin(Math.min(o / a, 1)) - Math.asin(n / a))), f = Math.max(c, Math.min(h, f))), s.labelRotation = f)
        },
        afterCalculateTickRotation: function() {
            B.callback(this.options.afterCalculateTickRotation, [this])
        },
        beforeFit: function() {
            B.callback(this.options.beforeFit, [this])
        },
        fit: function() {
            var t = this,
                e = t.minSize = {
                    width: 0,
                    height: 0
                },
                n = t.chart,
                i = t.options,
                r = i.ticks,
                o = i.scaleLabel,
                a = i.gridLines,
                s = t._isVisible(),
                l = "bottom" === i.position,
                u = t.isHorizontal();
            if (u ? e.width = t.maxWidth : s && (e.width = Je(a) + Qe(o)), u ? s && (e.height = Je(a) + Qe(o)) : e.height = t.maxHeight, r.display && s) {
                var d = en(r),
                    c = t._getLabelSizes(),
                    h = c.first,
                    f = c.last,
                    p = c.widest,
                    g = c.highest,
                    m = .4 * d.minor.lineHeight,
                    v = r.padding;
                if (u) {
                    var b = 0 !== t.labelRotation,
                        y = B.toRadians(t.labelRotation),
                        x = Math.cos(y),
                        w = Math.sin(y);
                    e.height = Math.min(t.maxHeight, e.height + (w * p.width + x * (g.height - (b ? g.offset : 0)) + (b ? 0 : m)) + v);
                    var _, T, k = t.getPixelForTick(0) - t.left,
                        S = t.right - t.getPixelForTick(t.getTicks().length - 1);
                    b ? (_ = l ? x * h.width + w * h.offset : w * (h.height - h.offset), T = l ? w * (f.height - f.offset) : x * f.width + w * f.offset) : (_ = h.width / 2, T = f.width / 2), t.paddingLeft = Math.max((_ - k) * t.width / (t.width - k), 0) + 3, t.paddingRight = Math.max((T - S) * t.width / (t.width - S), 0) + 3
                } else e.width = Math.min(t.maxWidth, e.width + (r.mirror ? 0 : p.width + v + m)), t.paddingTop = h.height / 2, t.paddingBottom = f.height / 2
            }
            t.handleMargins(), u ? (t.width = t._length = n.width - t.margins.left - t.margins.right, t.height = e.height) : (t.width = e.width, t.height = t._length = n.height - t.margins.top - t.margins.bottom)
        },
        handleMargins: function() {
            var t = this;
            t.margins && (t.margins.left = Math.max(t.paddingLeft, t.margins.left), t.margins.top = Math.max(t.paddingTop, t.margins.top), t.margins.right = Math.max(t.paddingRight, t.margins.right), t.margins.bottom = Math.max(t.paddingBottom, t.margins.bottom))
        },
        afterFit: function() {
            B.callback(this.options.afterFit, [this])
        },
        isHorizontal: function() {
            var t = this.options.position;
            return "top" === t || "bottom" === t
        },
        isFullWidth: function() {
            return this.options.fullWidth
        },
        getRightValue: function(t) {
            if (qe(t)) return NaN;
            if (("number" == typeof t || t instanceof Number) && !isFinite(t)) return NaN;
            if (t)
                if (this.isHorizontal()) {
                    if (void 0 !== t.x) return this.getRightValue(t.x)
                } else if (void 0 !== t.y) return this.getRightValue(t.y);
            return t
        },
        _convertTicksToLabels: function(t) {
            var e, n, i, r = this;
            for (r.ticks = t.map((function(t) {
                    return t.value
                })), r.beforeTickToLabelConversion(), e = r.convertTicksToLabels(t) || r.ticks, r.afterTickToLabelConversion(), n = 0, i = t.length; n < i; ++n) t[n].label = e[n];
            return e
        },
        _getLabelSizes: function() {
            var t = this,
                e = t._labelSizes;
            return e || (t._labelSizes = e = function(t, e, n, i) {
                var r, o, a, s, l, u, d, c, h, f, p, g, m, v = n.length,
                    b = [],
                    y = [],
                    x = [];
                for (r = 0; r < v; ++r) {
                    if (s = n[r].label, t.font = u = (l = n[r].major ? e.major : e.minor).string, d = i[u] = i[u] || {
                            data: {},
                            gc: []
                        }, c = l.lineHeight, h = f = 0, qe(s) || Xe(s)) {
                        if (Xe(s))
                            for (o = 0, a = s.length; o < a; ++o) qe(p = s[o]) || Xe(p) || (h = B.measureText(t, d.data, d.gc, h, p), f += c)
                    } else h = B.measureText(t, d.data, d.gc, h, s), f = c;
                    b.push(h), y.push(f), x.push(c / 2)
                }

                function w(t) {
                    return {
                        width: b[t] || 0,
                        height: y[t] || 0,
                        offset: x[t] || 0
                    }
                }
                return function(t, e) {
                    B.each(t, (function(t) {
                        var n, i = t.gc,
                            r = i.length / 2;
                        if (r > e) {
                            for (n = 0; n < r; ++n) delete t.data[i[n]];
                            i.splice(0, r)
                        }
                    }))
                }(i, v), g = b.indexOf(Math.max.apply(null, b)), m = y.indexOf(Math.max.apply(null, y)), {
                    first: w(0),
                    last: w(v - 1),
                    widest: w(g),
                    highest: w(m)
                }
            }(t.ctx, en(t.options.ticks), t.getTicks(), t.longestTextCache), t.longestLabelWidth = e.widest.width), e
        },
        _parseValue: function(t) {
            var e, n, i, r;
            return Xe(t) ? (e = +this.getRightValue(t[0]), n = +this.getRightValue(t[1]), i = Math.min(e, n), r = Math.max(e, n)) : (e = void 0, n = t = +this.getRightValue(t), i = t, r = t), {
                min: i,
                max: r,
                start: e,
                end: n
            }
        },
        _getScaleLabel: function(t) {
            var e = this._parseValue(t);
            return void 0 !== e.start ? "[" + e.start + ", " + e.end + "]" : +this.getRightValue(t)
        },
        getLabelForIndex: B.noop,
        getPixelForValue: B.noop,
        getValueForPixel: B.noop,
        getPixelForTick: function(t) {
            var e = this.options.offset,
                n = this._ticks.length,
                i = 1 / Math.max(n - (e ? 0 : 1), 1);
            return t < 0 || t > n - 1 ? null : this.getPixelForDecimal(t * i + (e ? i / 2 : 0))
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
            var e, n, i, r, o = this.options.ticks,
                a = o.maxTicksLimit || this._length / this._tickSize() + 1,
                s = o.major.enabled ? function(t) {
                    var e, n, i = [];
                    for (e = 0, n = t.length; e < n; e++) t[e].major && i.push(e);
                    return i
                }(t) : [],
                l = s.length,
                u = s[0],
                d = s[l - 1];
            if (l > a) return function(t, e, n) {
                var i, r, o = 0,
                    a = e[0];
                for (n = Math.ceil(n), i = 0; i < t.length; i++) r = t[i], i === a ? (r._index = i, a = e[++o * n]) : delete r.label
            }(t, s, l / a), nn(t);
            if (i = function(t, e, n, i) {
                    var r, o, a, s, l = function(t) {
                            var e, n, i = t.length;
                            if (i < 2) return !1;
                            for (n = t[0], e = 1; e < i; ++e)
                                if (t[e] - t[e - 1] !== n) return !1;
                            return n
                        }(t),
                        u = (e.length - 1) / i;
                    if (!l) return Math.max(u, 1);
                    for (a = 0, s = (r = B.math._factorize(l)).length - 1; a < s; a++)
                        if ((o = r[a]) > u) return o;
                    return Math.max(u, 1)
                }(s, t, 0, a), l > 0) {
                for (e = 0, n = l - 1; e < n; e++) rn(t, i, s[e], s[e + 1]);
                return rn(t, i, B.isNullOrUndef(r = l > 1 ? (d - u) / (l - 1) : null) ? 0 : u - r, u), rn(t, i, d, B.isNullOrUndef(r) ? t.length : d + r), nn(t)
            }
            return rn(t, i), nn(t)
        },
        _tickSize: function() {
            var t = this.options.ticks,
                e = B.toRadians(this.labelRotation),
                n = Math.abs(Math.cos(e)),
                i = Math.abs(Math.sin(e)),
                r = this._getLabelSizes(),
                o = t.autoSkipPadding || 0,
                a = r ? r.widest.width + o : 0,
                s = r ? r.highest.height + o : 0;
            return this.isHorizontal() ? s * n > a * i ? a / n : s / i : s * i < a * n ? s / n : a / i
        },
        _isVisible: function() {
            var t, e, n, i = this.chart,
                r = this.options.display;
            if ("auto" !== r) return !!r;
            for (t = 0, e = i.data.datasets.length; t < e; ++t)
                if (i.isDatasetVisible(t) && ((n = i.getDatasetMeta(t)).xAxisID === this.id || n.yAxisID === this.id)) return !0;
            return !1
        },
        _computeGridLineItems: function(t) {
            var e, n, i, r, o, a, s, l, u, d, c, h, f, p, g, m, v, b = this,
                y = b.chart,
                x = b.options,
                w = x.gridLines,
                _ = x.position,
                T = w.offsetGridLines,
                k = b.isHorizontal(),
                S = b._ticksToDraw,
                M = S.length + (T ? 1 : 0),
                C = Je(w),
                D = [],
                A = w.drawBorder ? $e(w.lineWidth, 0, 0) : 0,
                E = A / 2,
                P = B._alignPixel,
                L = function(t) {
                    return P(y, t, A)
                };
            for ("top" === _ ? (e = L(b.bottom), s = b.bottom - C, u = e - E, c = L(t.top) + E, f = t.bottom) : "bottom" === _ ? (e = L(b.top), c = t.top, f = L(t.bottom) - E, s = e + E, u = b.top + C) : "left" === _ ? (e = L(b.right), a = b.right - C, l = e - E, d = L(t.left) + E, h = t.right) : (e = L(b.left), d = t.left, h = L(t.right) - E, a = e + E, l = b.left + C), n = 0; n < M; ++n) qe((i = S[n] || {}).label) && n < S.length || (n === b.zeroLineIndex && x.offset === T ? (p = w.zeroLineWidth, g = w.zeroLineColor, m = w.zeroLineBorderDash || [], v = w.zeroLineBorderDashOffset || 0) : (p = $e(w.lineWidth, n, 1), g = $e(w.color, n, "rgba(0,0,0,0.1)"), m = w.borderDash || [], v = w.borderDashOffset || 0), void 0 !== (r = Ze(b, i._index || n, T)) && (o = P(y, r, p), k ? a = l = d = h = o : s = u = c = f = o, D.push({
                tx1: a,
                ty1: s,
                tx2: l,
                ty2: u,
                x1: d,
                y1: c,
                x2: h,
                y2: f,
                width: p,
                color: g,
                borderDash: m,
                borderDashOffset: v
            })));
            return D.ticksLength = M, D.borderValue = e, D
        },
        _computeLabelItems: function() {
            var t, e, n, i, r, o, a, s, l, u, d, c, h = this,
                f = h.options,
                p = f.ticks,
                g = f.position,
                m = p.mirror,
                v = h.isHorizontal(),
                b = h._ticksToDraw,
                y = en(p),
                x = p.padding,
                w = Je(f.gridLines),
                _ = -B.toRadians(h.labelRotation),
                T = [];
            for ("top" === g ? (o = h.bottom - w - x, a = _ ? "left" : "center") : "bottom" === g ? (o = h.top + w + x, a = _ ? "right" : "center") : "left" === g ? (r = h.right - (m ? 0 : w) - x, a = m ? "left" : "right") : (r = h.left + (m ? 0 : w) + x, a = m ? "right" : "left"), t = 0, e = b.length; t < e; ++t) i = (n = b[t]).label, qe(i) || (s = h.getPixelForTick(n._index || t) + p.labelOffset, u = (l = n.major ? y.major : y.minor).lineHeight, d = Xe(i) ? i.length : 1, v ? (r = s, c = "top" === g ? ((_ ? 1 : .5) - d) * u : (_ ? 0 : .5) * u) : (o = s, c = (1 - d) * u / 2), T.push({
                x: r,
                y: o,
                rotation: _,
                label: i,
                font: l,
                textOffset: c,
                textAlign: a
            }));
            return T
        },
        _drawGrid: function(t) {
            var e = this,
                n = e.options.gridLines;
            if (n.display) {
                var i, r, o, a, s, l = e.ctx,
                    u = e.chart,
                    d = B._alignPixel,
                    c = n.drawBorder ? $e(n.lineWidth, 0, 0) : 0,
                    h = e._gridLineItems || (e._gridLineItems = e._computeGridLineItems(t));
                for (o = 0, a = h.length; o < a; ++o) i = (s = h[o]).width, r = s.color, i && r && (l.save(), l.lineWidth = i, l.strokeStyle = r, l.setLineDash && (l.setLineDash(s.borderDash), l.lineDashOffset = s.borderDashOffset), l.beginPath(), n.drawTicks && (l.moveTo(s.tx1, s.ty1), l.lineTo(s.tx2, s.ty2)), n.drawOnChartArea && (l.moveTo(s.x1, s.y1), l.lineTo(s.x2, s.y2)), l.stroke(), l.restore());
                if (c) {
                    var f, p, g, m, v = c,
                        b = $e(n.lineWidth, h.ticksLength - 1, 1),
                        y = h.borderValue;
                    e.isHorizontal() ? (f = d(u, e.left, v) - v / 2, p = d(u, e.right, b) + b / 2, g = m = y) : (g = d(u, e.top, v) - v / 2, m = d(u, e.bottom, b) + b / 2, f = p = y), l.lineWidth = c, l.strokeStyle = $e(n.color, 0), l.beginPath(), l.moveTo(f, g), l.lineTo(p, m), l.stroke()
                }
            }
        },
        _drawLabels: function() {
            var t = this;
            if (t.options.ticks.display) {
                var e, n, i, r, o, a, s, l, u = t.ctx,
                    d = t._labelItems || (t._labelItems = t._computeLabelItems());
                for (e = 0, i = d.length; e < i; ++e) {
                    if (a = (o = d[e]).font, u.save(), u.translate(o.x, o.y), u.rotate(o.rotation), u.font = a.string, u.fillStyle = a.color, u.textBaseline = "middle", u.textAlign = o.textAlign, l = o.textOffset, Xe(s = o.label))
                        for (n = 0, r = s.length; n < r; ++n) u.fillText("" + s[n], 0, l), l += a.lineHeight;
                    else u.fillText(s, 0, l);
                    u.restore()
                }
            }
        },
        _drawTitle: function() {
            var t = this,
                e = t.ctx,
                n = t.options,
                i = n.scaleLabel;
            if (i.display) {
                var r, o, a = Ge(i.fontColor, F.global.defaultFontColor),
                    s = B.options._parseFont(i),
                    l = B.options.toPadding(i.padding),
                    u = s.lineHeight / 2,
                    d = n.position,
                    c = 0;
                if (t.isHorizontal()) r = t.left + t.width / 2, o = "bottom" === d ? t.bottom - u - l.bottom : t.top + u + l.top;
                else {
                    var h = "left" === d;
                    r = h ? t.left + u + l.top : t.right - u - l.top, o = t.top + t.height / 2, c = h ? -.5 * Math.PI : .5 * Math.PI
                }
                e.save(), e.translate(r, o), e.rotate(c), e.textAlign = "center", e.textBaseline = "middle", e.fillStyle = a, e.font = s.string, e.fillText(i.labelString, 0, 0), e.restore()
            }
        },
        draw: function(t) {
            this._isVisible() && (this._drawGrid(t), this._drawTitle(), this._drawLabels())
        },
        _layers: function() {
            var t = this,
                e = t.options,
                n = e.ticks && e.ticks.z || 0,
                i = e.gridLines && e.gridLines.z || 0;
            return t._isVisible() && n !== i && t.draw === t._draw ? [{
                z: i,
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
            return e.chart._getSortedVisibleDatasetMetas().filter((function(i) {
                return (!t || i.type === t) && (n ? i.xAxisID === e.id : i.yAxisID === e.id)
            }))
        }
    });
    on.prototype._draw = on.prototype.draw;
    var an = on,
        sn = B.isNullOrUndef,
        ln = an.extend({
            determineDataLimits: function() {
                var t, e = this,
                    n = e._getLabels(),
                    i = e.options.ticks,
                    r = i.min,
                    o = i.max,
                    a = 0,
                    s = n.length - 1;
                void 0 !== r && (t = n.indexOf(r)) >= 0 && (a = t), void 0 !== o && (t = n.indexOf(o)) >= 0 && (s = t), e.minIndex = a, e.maxIndex = s, e.min = n[a], e.max = n[s]
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
                an.prototype._configure.call(t), t.isHorizontal() || (t._reversePixels = !t._reversePixels), n && (t._startValue = t.minIndex - (e ? .5 : 0), t._valueRange = Math.max(n.length - (e ? 0 : 1), 1))
            },
            getPixelForValue: function(t, e, n) {
                var i, r, o, a = this;
                return sn(e) || sn(n) || (t = a.chart.data.datasets[n].data[e]), sn(t) || (i = a.isHorizontal() ? t.x : t.y), (void 0 !== i || void 0 !== t && isNaN(e)) && (r = a._getLabels(), t = B.valueOrDefault(i, t), e = -1 !== (o = r.indexOf(t)) ? o : e, isNaN(e) && (e = t)), a.getPixelForDecimal((e - a._startValue) / a._valueRange)
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
    ln._defaults = {
        position: "bottom"
    };
    var un = B.isNullOrUndef,
        dn = an.extend({
            getRightValue: function(t) {
                return "string" == typeof t ? +t : an.prototype.getRightValue.call(this, t)
            },
            handleTickRangeOptions: function() {
                var t = this,
                    e = t.options.ticks;
                if (e.beginAtZero) {
                    var n = B.sign(t.min),
                        i = B.sign(t.max);
                    n < 0 && i < 0 ? t.max = 0 : n > 0 && i > 0 && (t.min = 0)
                }
                var r = void 0 !== e.min || void 0 !== e.suggestedMin,
                    o = void 0 !== e.max || void 0 !== e.suggestedMax;
                void 0 !== e.min ? t.min = e.min : void 0 !== e.suggestedMin && (t.min = null === t.min ? e.suggestedMin : Math.min(t.min, e.suggestedMin)), void 0 !== e.max ? t.max = e.max : void 0 !== e.suggestedMax && (t.max = null === t.max ? e.suggestedMax : Math.max(t.max, e.suggestedMax)), r !== o && t.min >= t.max && (r ? t.max = t.min + 1 : t.min = t.max - 1), t.min === t.max && (t.max++, e.beginAtZero || t.min--)
            },
            getTickLimit: function() {
                var t, e = this.options.ticks,
                    n = e.stepSize,
                    i = e.maxTicksLimit;
                return n ? t = Math.ceil(this.max / n) - Math.floor(this.min / n) + 1 : (t = this._computeTickLimit(), i = i || 11), i && (t = Math.min(i, t)), t
            },
            _computeTickLimit: function() {
                return Number.POSITIVE_INFINITY
            },
            handleDirectionalChanges: B.noop,
            buildTicks: function() {
                var t = this,
                    e = t.options.ticks,
                    n = t.getTickLimit(),
                    i = {
                        maxTicks: n = Math.max(2, n),
                        min: e.min,
                        max: e.max,
                        precision: e.precision,
                        stepSize: B.valueOrDefault(e.fixedStepSize, e.stepSize)
                    },
                    r = t.ticks = function(t, e) {
                        var n, i, r, o, a = [],
                            s = t.stepSize,
                            l = s || 1,
                            u = t.maxTicks - 1,
                            d = t.min,
                            c = t.max,
                            h = t.precision,
                            f = e.min,
                            p = e.max,
                            g = B.niceNum((p - f) / u / l) * l;
                        if (g < 1e-14 && un(d) && un(c)) return [f, p];
                        (o = Math.ceil(p / g) - Math.floor(f / g)) > u && (g = B.niceNum(o * g / u / l) * l), s || un(h) ? n = Math.pow(10, B._decimalPlaces(g)) : (n = Math.pow(10, h), g = Math.ceil(g * n) / n), i = Math.floor(f / g) * g, r = Math.ceil(p / g) * g, s && (!un(d) && B.almostWhole(d / g, g / 1e3) && (i = d), !un(c) && B.almostWhole(c / g, g / 1e3) && (r = c)), o = B.almostEquals(o = (r - i) / g, Math.round(o), g / 1e3) ? Math.round(o) : Math.ceil(o), i = Math.round(i * n) / n, r = Math.round(r * n) / n, a.push(un(d) ? i : d);
                        for (var m = 1; m < o; ++m) a.push(Math.round((i + m * g) * n) / n);
                        return a.push(un(c) ? r : c), a
                    }(i, t);
                t.handleDirectionalChanges(), t.max = B.max(r), t.min = B.min(r), e.reverse ? (r.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max)
            },
            convertTicksToLabels: function() {
                var t = this;
                t.ticksAsNumbers = t.ticks.slice(), t.zeroLineIndex = t.ticks.indexOf(0), an.prototype.convertTicksToLabels.call(t)
            },
            _configure: function() {
                var t, e = this,
                    n = e.getTicks(),
                    i = e.min,
                    r = e.max;
                an.prototype._configure.call(e), e.options.offset && n.length && (i -= t = (r - i) / Math.max(n.length - 1, 1) / 2, r += t), e._startValue = i, e._endValue = r, e._valueRange = r - i
            }
        }),
        cn = {
            position: "left",
            ticks: {
                callback: je.formatters.linear
            }
        };

    function hn(t, e, n, i) {
        var r, o, a = t.options,
            s = function(t, e, n) {
                var i = [n.type, void 0 === e && void 0 === n.stack ? n.index : "", n.stack].join(".");
                return void 0 === t[i] && (t[i] = {
                    pos: [],
                    neg: []
                }), t[i]
            }(e, a.stacked, n),
            l = s.pos,
            u = s.neg,
            d = i.length;
        for (r = 0; r < d; ++r) o = t._parseValue(i[r]), isNaN(o.min) || isNaN(o.max) || n.data[r].hidden || (l[r] = l[r] || 0, u[r] = u[r] || 0, a.relativePoints ? l[r] = 100 : o.min < 0 || o.max < 0 ? u[r] += o.min : l[r] += o.max)
    }

    function fn(t, e, n) {
        var i, r, o = n.length;
        for (i = 0; i < o; ++i) r = t._parseValue(n[i]), isNaN(r.min) || isNaN(r.max) || e.data[i].hidden || (t.min = Math.min(t.min, r.min), t.max = Math.max(t.max, r.max))
    }
    var pn = dn.extend({
        determineDataLimits: function() {
            var t, e, n, i, r = this,
                o = r.options,
                a = r.chart.data.datasets,
                s = r._getMatchingVisibleMetas(),
                l = o.stacked,
                u = {},
                d = s.length;
            if (r.min = Number.POSITIVE_INFINITY, r.max = Number.NEGATIVE_INFINITY, void 0 === l)
                for (t = 0; !l && t < d; ++t) l = void 0 !== (e = s[t]).stack;
            for (t = 0; t < d; ++t) n = a[(e = s[t]).index].data, l ? hn(r, u, e, n) : fn(r, e, n);
            B.each(u, (function(t) {
                i = t.pos.concat(t.neg), r.min = Math.min(r.min, B.min(i)), r.max = Math.max(r.max, B.max(i))
            })), r.min = B.isFinite(r.min) && !isNaN(r.min) ? r.min : 0, r.max = B.isFinite(r.max) && !isNaN(r.max) ? r.max : 1, r.handleTickRangeOptions()
        },
        _computeTickLimit: function() {
            var t;
            return this.isHorizontal() ? Math.ceil(this.width / 40) : (t = B.options._parseFont(this.options.ticks), Math.ceil(this.height / t.lineHeight))
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
    pn._defaults = cn;
    var gn = B.valueOrDefault,
        mn = B.math.log10,
        vn = {
            position: "left",
            ticks: {
                callback: je.formatters.logarithmic
            }
        };

    function bn(t, e) {
        return B.isFinite(t) && t >= 0 ? t : e
    }
    var yn = an.extend({
        determineDataLimits: function() {
            var t, e, n, i, r, o, a = this,
                s = a.options,
                l = a.chart,
                u = l.data.datasets,
                d = a.isHorizontal();

            function c(t) {
                return d ? t.xAxisID === a.id : t.yAxisID === a.id
            }
            a.min = Number.POSITIVE_INFINITY, a.max = Number.NEGATIVE_INFINITY, a.minNotZero = Number.POSITIVE_INFINITY;
            var h = s.stacked;
            if (void 0 === h)
                for (t = 0; t < u.length; t++)
                    if (e = l.getDatasetMeta(t), l.isDatasetVisible(t) && c(e) && void 0 !== e.stack) {
                        h = !0;
                        break
                    } if (s.stacked || h) {
                var f = {};
                for (t = 0; t < u.length; t++) {
                    var p = [(e = l.getDatasetMeta(t)).type, void 0 === s.stacked && void 0 === e.stack ? t : "", e.stack].join(".");
                    if (l.isDatasetVisible(t) && c(e))
                        for (void 0 === f[p] && (f[p] = []), r = 0, o = (i = u[t].data).length; r < o; r++) {
                            var g = f[p];
                            n = a._parseValue(i[r]), isNaN(n.min) || isNaN(n.max) || e.data[r].hidden || n.min < 0 || n.max < 0 || (g[r] = g[r] || 0, g[r] += n.max)
                        }
                }
                B.each(f, (function(t) {
                    if (t.length > 0) {
                        var e = B.min(t),
                            n = B.max(t);
                        a.min = Math.min(a.min, e), a.max = Math.max(a.max, n)
                    }
                }))
            } else
                for (t = 0; t < u.length; t++)
                    if (e = l.getDatasetMeta(t), l.isDatasetVisible(t) && c(e))
                        for (r = 0, o = (i = u[t].data).length; r < o; r++) n = a._parseValue(i[r]), isNaN(n.min) || isNaN(n.max) || e.data[r].hidden || n.min < 0 || n.max < 0 || (a.min = Math.min(n.min, a.min), a.max = Math.max(n.max, a.max), 0 !== n.min && (a.minNotZero = Math.min(n.min, a.minNotZero)));
            a.min = B.isFinite(a.min) ? a.min : null, a.max = B.isFinite(a.max) ? a.max : null, a.minNotZero = B.isFinite(a.minNotZero) ? a.minNotZero : null, this.handleTickRangeOptions()
        },
        handleTickRangeOptions: function() {
            var t = this,
                e = t.options.ticks;
            t.min = bn(e.min, t.min), t.max = bn(e.max, t.max), t.min === t.max && (0 !== t.min && null !== t.min ? (t.min = Math.pow(10, Math.floor(mn(t.min)) - 1), t.max = Math.pow(10, Math.floor(mn(t.max)) + 1)) : (t.min = 1, t.max = 10)), null === t.min && (t.min = Math.pow(10, Math.floor(mn(t.max)) - 1)), null === t.max && (t.max = 0 !== t.min ? Math.pow(10, Math.floor(mn(t.min)) + 1) : 10), null === t.minNotZero && (t.minNotZero = t.min > 0 ? t.min : t.max < 1 ? Math.pow(10, Math.floor(mn(t.max))) : 1)
        },
        buildTicks: function() {
            var t = this,
                e = t.options.ticks,
                n = !t.isHorizontal(),
                i = {
                    min: bn(e.min),
                    max: bn(e.max)
                },
                r = t.ticks = function(t, e) {
                    var n, i, r = [],
                        o = gn(t.min, Math.pow(10, Math.floor(mn(e.min)))),
                        a = Math.floor(mn(e.max)),
                        s = Math.ceil(e.max / Math.pow(10, a));
                    0 === o ? (n = Math.floor(mn(e.minNotZero)), i = Math.floor(e.minNotZero / Math.pow(10, n)), r.push(o), o = i * Math.pow(10, n)) : (n = Math.floor(mn(o)), i = Math.floor(o / Math.pow(10, n)));
                    var l = n < 0 ? Math.pow(10, Math.abs(n)) : 1;
                    do {
                        r.push(o), 10 == ++i && (i = 1, l = ++n >= 0 ? 1 : l), o = Math.round(i * Math.pow(10, n) * l) / l
                    } while (n < a || n === a && i < s);
                    var u = gn(t.max, o);
                    return r.push(u), r
                }(i, t);
            t.max = B.max(r), t.min = B.min(r), e.reverse ? (n = !n, t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max), n && r.reverse()
        },
        convertTicksToLabels: function() {
            this.tickValues = this.ticks.slice(), an.prototype.convertTicksToLabels.call(this)
        },
        getLabelForIndex: function(t, e) {
            return this._getScaleLabel(this.chart.data.datasets[e].data[t])
        },
        getPixelForTick: function(t) {
            var e = this.tickValues;
            return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t])
        },
        _getFirstTickValue: function(t) {
            var e = Math.floor(mn(t));
            return Math.floor(t / Math.pow(10, e)) * Math.pow(10, e)
        },
        _configure: function() {
            var t = this,
                e = t.min,
                n = 0;
            an.prototype._configure.call(t), 0 === e && (e = t._getFirstTickValue(t.minNotZero), n = gn(t.options.ticks.fontSize, F.global.defaultFontSize) / t._length), t._startValue = mn(e), t._valueOffset = n, t._valueRange = (mn(t.max) - mn(e)) / (1 - n)
        },
        getPixelForValue: function(t) {
            var e = this,
                n = 0;
            return (t = +e.getRightValue(t)) > e.min && t > 0 && (n = (mn(t) - e._startValue) / e._valueRange + e._valueOffset), e.getPixelForDecimal(n)
        },
        getValueForPixel: function(t) {
            var e = this,
                n = e.getDecimalForPixel(t);
            return 0 === n && 0 === e.min ? 0 : Math.pow(10, e._startValue + (n - e._valueOffset) * e._valueRange)
        }
    });
    yn._defaults = vn;
    var xn = B.valueOrDefault,
        wn = B.valueAtIndexOrDefault,
        _n = B.options.resolve,
        Tn = {
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
                callback: je.formatters.linear
            },
            pointLabels: {
                display: !0,
                fontSize: 10,
                callback: function(t) {
                    return t
                }
            }
        };

    function kn(t) {
        var e = t.ticks;
        return e.display && t.display ? xn(e.fontSize, F.global.defaultFontSize) + 2 * e.backdropPaddingY : 0
    }

    function Sn(t, e, n, i, r) {
        return t === i || t === r ? {
            start: e - n / 2,
            end: e + n / 2
        } : t < i || t > r ? {
            start: e - n,
            end: e
        } : {
            start: e,
            end: e + n
        }
    }

    function Mn(t) {
        return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right"
    }

    function Cn(t, e, n, i) {
        var r, o, a = n.y + i / 2;
        if (B.isArray(e))
            for (r = 0, o = e.length; r < o; ++r) t.fillText(e[r], n.x, a), a += i;
        else t.fillText(e, n.x, a)
    }

    function Dn(t, e, n) {
        90 === t || 270 === t ? n.y -= e.h / 2 : (t > 270 || t < 90) && (n.y -= e.h)
    }

    function An(t) {
        return B.isNumber(t) ? t : 0
    }
    var En = dn.extend({
        setDimensions: function() {
            var t = this;
            t.width = t.maxWidth, t.height = t.maxHeight, t.paddingTop = kn(t.options) / 2, t.xCenter = Math.floor(t.width / 2), t.yCenter = Math.floor((t.height - t.paddingTop) / 2), t.drawingArea = Math.min(t.height - t.paddingTop, t.width) / 2
        },
        determineDataLimits: function() {
            var t = this,
                e = t.chart,
                n = Number.POSITIVE_INFINITY,
                i = Number.NEGATIVE_INFINITY;
            B.each(e.data.datasets, (function(r, o) {
                if (e.isDatasetVisible(o)) {
                    var a = e.getDatasetMeta(o);
                    B.each(r.data, (function(e, r) {
                        var o = +t.getRightValue(e);
                        isNaN(o) || a.data[r].hidden || (n = Math.min(o, n), i = Math.max(o, i))
                    }))
                }
            })), t.min = n === Number.POSITIVE_INFINITY ? 0 : n, t.max = i === Number.NEGATIVE_INFINITY ? 0 : i, t.handleTickRangeOptions()
        },
        _computeTickLimit: function() {
            return Math.ceil(this.drawingArea / kn(this.options))
        },
        convertTicksToLabels: function() {
            var t = this;
            dn.prototype.convertTicksToLabels.call(t), t.pointLabels = t.chart.data.labels.map((function() {
                var e = B.callback(t.options.pointLabels.callback, arguments, t);
                return e || 0 === e ? e : ""
            }))
        },
        getLabelForIndex: function(t, e) {
            return +this.getRightValue(this.chart.data.datasets[e].data[t])
        },
        fit: function() {
            var t = this.options;
            t.display && t.pointLabels.display ? function(t) {
                var e, n, i, r = B.options._parseFont(t.options.pointLabels),
                    o = {
                        l: 0,
                        r: t.width,
                        t: 0,
                        b: t.height - t.paddingTop
                    },
                    a = {};
                t.ctx.font = r.string, t._pointLabelSizes = [];
                var s, l, u, d = t.chart.data.labels.length;
                for (e = 0; e < d; e++) {
                    i = t.getPointPosition(e, t.drawingArea + 5), s = t.ctx, l = r.lineHeight, n = B.isArray(u = t.pointLabels[e]) ? {
                        w: B.longestText(s, s.font, u),
                        h: u.length * l
                    } : {
                        w: s.measureText(u).width,
                        h: l
                    }, t._pointLabelSizes[e] = n;
                    var c = t.getIndexAngle(e),
                        h = B.toDegrees(c) % 360,
                        f = Sn(h, i.x, n.w, 0, 180),
                        p = Sn(h, i.y, n.h, 90, 270);
                    f.start < o.l && (o.l = f.start, a.l = c), f.end > o.r && (o.r = f.end, a.r = c), p.start < o.t && (o.t = p.start, a.t = c), p.end > o.b && (o.b = p.end, a.b = c)
                }
                t.setReductions(t.drawingArea, o, a)
            }(this) : this.setCenterPoint(0, 0, 0, 0)
        },
        setReductions: function(t, e, n) {
            var i = this,
                r = e.l / Math.sin(n.l),
                o = Math.max(e.r - i.width, 0) / Math.sin(n.r),
                a = -e.t / Math.cos(n.t),
                s = -Math.max(e.b - (i.height - i.paddingTop), 0) / Math.cos(n.b);
            r = An(r), o = An(o), a = An(a), s = An(s), i.drawingArea = Math.min(Math.floor(t - (r + o) / 2), Math.floor(t - (a + s) / 2)), i.setCenterPoint(r, o, a, s)
        },
        setCenterPoint: function(t, e, n, i) {
            var r = this,
                o = n + r.drawingArea,
                a = r.height - r.paddingTop - i - r.drawingArea;
            r.xCenter = Math.floor((t + r.drawingArea + (r.width - e - r.drawingArea)) / 2 + r.left), r.yCenter = Math.floor((o + a) / 2 + r.top + r.paddingTop)
        },
        getIndexAngle: function(t) {
            var e = this.chart,
                n = (t * (360 / e.data.labels.length) + ((e.options || {}).startAngle || 0)) % 360;
            return (n < 0 ? n + 360 : n) * Math.PI * 2 / 360
        },
        getDistanceFromCenterForValue: function(t) {
            var e = this;
            if (B.isNullOrUndef(t)) return NaN;
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
            var t, e, n, i = this,
                r = i.ctx,
                o = i.options,
                a = o.gridLines,
                s = o.angleLines,
                l = xn(s.lineWidth, a.lineWidth),
                u = xn(s.color, a.color);
            if (o.pointLabels.display && function(t) {
                    var e = t.ctx,
                        n = t.options,
                        i = n.pointLabels,
                        r = kn(n),
                        o = t.getDistanceFromCenterForValue(n.ticks.reverse ? t.min : t.max),
                        a = B.options._parseFont(i);
                    e.save(), e.font = a.string, e.textBaseline = "middle";
                    for (var s = t.chart.data.labels.length - 1; s >= 0; s--) {
                        var l = t.getPointPosition(s, o + (0 === s ? r / 2 : 0) + 5),
                            u = wn(i.fontColor, s, F.global.defaultFontColor);
                        e.fillStyle = u;
                        var d = t.getIndexAngle(s),
                            c = B.toDegrees(d);
                        e.textAlign = Mn(c), Dn(c, t._pointLabelSizes[s], l), Cn(e, t.pointLabels[s], l, a.lineHeight)
                    }
                    e.restore()
                }(i), a.display && B.each(i.ticks, (function(t, n) {
                    0 !== n && (e = i.getDistanceFromCenterForValue(i.ticksAsNumbers[n]), function(t, e, n, i) {
                        var r, o = t.ctx,
                            a = e.circular,
                            s = t.chart.data.labels.length,
                            l = wn(e.color, i - 1),
                            u = wn(e.lineWidth, i - 1);
                        if ((a || s) && l && u) {
                            if (o.save(), o.strokeStyle = l, o.lineWidth = u, o.setLineDash && (o.setLineDash(e.borderDash || []), o.lineDashOffset = e.borderDashOffset || 0), o.beginPath(), a) o.arc(t.xCenter, t.yCenter, n, 0, 2 * Math.PI);
                            else {
                                r = t.getPointPosition(0, n), o.moveTo(r.x, r.y);
                                for (var d = 1; d < s; d++) r = t.getPointPosition(d, n), o.lineTo(r.x, r.y)
                            }
                            o.closePath(), o.stroke(), o.restore()
                        }
                    }(i, a, e, n))
                })), s.display && l && u) {
                for (r.save(), r.lineWidth = l, r.strokeStyle = u, r.setLineDash && (r.setLineDash(_n([s.borderDash, a.borderDash, []])), r.lineDashOffset = _n([s.borderDashOffset, a.borderDashOffset, 0])), t = i.chart.data.labels.length - 1; t >= 0; t--) e = i.getDistanceFromCenterForValue(o.ticks.reverse ? i.min : i.max), n = i.getPointPosition(t, e), r.beginPath(), r.moveTo(i.xCenter, i.yCenter), r.lineTo(n.x, n.y), r.stroke();
                r.restore()
            }
        },
        _drawLabels: function() {
            var t = this,
                e = t.ctx,
                n = t.options.ticks;
            if (n.display) {
                var i, r, o = t.getIndexAngle(0),
                    a = B.options._parseFont(n),
                    s = xn(n.fontColor, F.global.defaultFontColor);
                e.save(), e.font = a.string, e.translate(t.xCenter, t.yCenter), e.rotate(o), e.textAlign = "center", e.textBaseline = "middle", B.each(t.ticks, (function(o, l) {
                    (0 !== l || n.reverse) && (i = t.getDistanceFromCenterForValue(t.ticksAsNumbers[l]), n.showLabelBackdrop && (r = e.measureText(o).width, e.fillStyle = n.backdropColor, e.fillRect(-r / 2 - n.backdropPaddingX, -i - a.size / 2 - n.backdropPaddingY, r + 2 * n.backdropPaddingX, a.size + 2 * n.backdropPaddingY)), e.fillStyle = s, e.fillText(o, 0, -i))
                })), e.restore()
            }
        },
        _drawTitle: B.noop
    });
    En._defaults = Tn;
    var Pn = B._deprecated,
        Ln = B.options.resolve,
        On = B.valueOrDefault,
        In = Number.MIN_SAFE_INTEGER || -9007199254740991,
        Un = Number.MAX_SAFE_INTEGER || 9007199254740991,
        Fn = {
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
        Rn = Object.keys(Fn);

    function Kn(t, e) {
        return t - e
    }

    function Nn(t) {
        return B.valueOrDefault(t.time.min, t.ticks.min)
    }

    function Wn(t) {
        return B.valueOrDefault(t.time.max, t.ticks.max)
    }

    function Bn(t, e, n, i) {
        var r = function(t, e, n) {
                for (var i, r, o, a = 0, s = t.length - 1; a >= 0 && a <= s;) {
                    if (r = t[(i = a + s >> 1) - 1] || null, o = t[i], !r) return {
                        lo: null,
                        hi: o
                    };
                    if (o[e] < n) a = i + 1;
                    else {
                        if (!(r[e] > n)) return {
                            lo: r,
                            hi: o
                        };
                        s = i - 1
                    }
                }
                return {
                    lo: o,
                    hi: null
                }
            }(t, e, n),
            o = r.lo ? r.hi ? r.lo : t[t.length - 2] : t[0],
            a = r.lo ? r.hi ? r.hi : t[t.length - 1] : t[1],
            s = a[e] - o[e];
        return o[i] + (a[i] - o[i]) * (s ? (n - o[e]) / s : 0)
    }

    function zn(t, e) {
        var n = t._adapter,
            i = t.options.time,
            r = i.parser,
            o = r || i.format,
            a = e;
        return "function" == typeof r && (a = r(a)), B.isFinite(a) || (a = "string" == typeof o ? n.parse(a, o) : n.parse(a)), null !== a ? +a : (r || "function" != typeof o || (a = o(e), B.isFinite(a) || (a = n.parse(a))), a)
    }

    function Hn(t, e) {
        if (B.isNullOrUndef(e)) return null;
        var n = t.options.time,
            i = zn(t, t.getRightValue(e));
        return null === i ? i : (n.round && (i = +t._adapter.startOf(i, n.round)), i)
    }

    function Vn(t, e, n, i) {
        var r, o, a, s = Rn.length;
        for (r = Rn.indexOf(t); r < s - 1; ++r)
            if (a = (o = Fn[Rn[r]]).steps ? o.steps : Un, o.common && Math.ceil((n - e) / (a * o.size)) <= i) return Rn[r];
        return Rn[s - 1]
    }

    function Yn(t, e, n) {
        var i, r, o = [],
            a = {},
            s = e.length;
        for (i = 0; i < s; ++i) a[r = e[i]] = i, o.push({
            value: r,
            major: !1
        });
        return 0 !== s && n ? function(t, e, n, i) {
            var r, o, a = t._adapter,
                s = +a.startOf(e[0].value, i),
                l = e[e.length - 1].value;
            for (r = s; r <= l; r = +a.add(r, 1, i))(o = n[r]) >= 0 && (e[o].major = !0);
            return e
        }(t, o, a, n) : o
    }
    var jn = an.extend({
        initialize: function() {
            this.mergeTicksOptions(), an.prototype.initialize.call(this)
        },
        update: function() {
            var t = this,
                e = t.options,
                n = e.time || (e.time = {}),
                i = t._adapter = new Ye._date(e.adapters.date);
            return Pn("time scale", n.format, "time.format", "time.parser"), Pn("time scale", n.min, "time.min", "ticks.min"), Pn("time scale", n.max, "time.max", "ticks.max"), B.mergeIf(n.displayFormats, i.formats()), an.prototype.update.apply(t, arguments)
        },
        getRightValue: function(t) {
            return t && void 0 !== t.t && (t = t.t), an.prototype.getRightValue.call(this, t)
        },
        determineDataLimits: function() {
            var t, e, n, i, r, o, a, s = this,
                l = s.chart,
                u = s._adapter,
                d = s.options,
                c = d.time.unit || "day",
                h = Un,
                f = In,
                p = [],
                g = [],
                m = [],
                v = s._getLabels();
            for (t = 0, n = v.length; t < n; ++t) m.push(Hn(s, v[t]));
            for (t = 0, n = (l.data.datasets || []).length; t < n; ++t)
                if (l.isDatasetVisible(t))
                    if (B.isObject((r = l.data.datasets[t].data)[0]))
                        for (g[t] = [], e = 0, i = r.length; e < i; ++e) o = Hn(s, r[e]), p.push(o), g[t][e] = o;
                    else g[t] = m.slice(0), a || (p = p.concat(m), a = !0);
            else g[t] = [];
            m.length && (h = Math.min(h, m[0]), f = Math.max(f, m[m.length - 1])), p.length && (p = n > 1 ? function(t) {
                var e, n, i, r = {},
                    o = [];
                for (e = 0, n = t.length; e < n; ++e) r[i = t[e]] || (r[i] = !0, o.push(i));
                return o
            }(p).sort(Kn) : p.sort(Kn), h = Math.min(h, p[0]), f = Math.max(f, p[p.length - 1])), h = Hn(s, Nn(d)) || h, f = Hn(s, Wn(d)) || f, h = h === Un ? +u.startOf(Date.now(), c) : h, f = f === In ? +u.endOf(Date.now(), c) + 1 : f, s.min = Math.min(h, f), s.max = Math.max(h + 1, f), s._table = [], s._timestamps = {
                data: p,
                datasets: g,
                labels: m
            }
        },
        buildTicks: function() {
            var t, e, n, i = this,
                r = i.min,
                o = i.max,
                a = i.options,
                s = a.ticks,
                l = a.time,
                u = i._timestamps,
                d = [],
                c = i.getLabelCapacity(r),
                h = s.source,
                f = a.distribution;
            for (u = "data" === h || "auto" === h && "series" === f ? u.data : "labels" === h ? u.labels : function(t, e, n, i) {
                    var r, o = t._adapter,
                        a = t.options,
                        s = a.time,
                        l = s.unit || Vn(s.minUnit, e, n, i),
                        u = Ln([s.stepSize, s.unitStepSize, 1]),
                        d = "week" === l && s.isoWeekday,
                        c = e,
                        h = [];
                    if (d && (c = +o.startOf(c, "isoWeek", d)), c = +o.startOf(c, d ? "day" : l), o.diff(n, e, l) > 1e5 * u) throw e + " and " + n + " are too far apart with stepSize of " + u + " " + l;
                    for (r = c; r < n; r = +o.add(r, u, l)) h.push(r);
                    return r !== n && "ticks" !== a.bounds || h.push(r), h
                }(i, r, o, c), "ticks" === a.bounds && u.length && (r = u[0], o = u[u.length - 1]), r = Hn(i, Nn(a)) || r, o = Hn(i, Wn(a)) || o, t = 0, e = u.length; t < e; ++t)(n = u[t]) >= r && n <= o && d.push(n);
            return i.min = r, i.max = o, i._unit = l.unit || (s.autoSkip ? Vn(l.minUnit, i.min, i.max, c) : function(t, e, n, i, r) {
                var o, a;
                for (o = Rn.length - 1; o >= Rn.indexOf(n); o--)
                    if (Fn[a = Rn[o]].common && t._adapter.diff(r, i, a) >= e - 1) return a;
                return Rn[n ? Rn.indexOf(n) : 0]
            }(i, d.length, l.minUnit, i.min, i.max)), i._majorUnit = s.major.enabled && "year" !== i._unit ? function(t) {
                for (var e = Rn.indexOf(t) + 1, n = Rn.length; e < n; ++e)
                    if (Fn[Rn[e]].common) return Rn[e]
            }(i._unit) : void 0, i._table = function(t, e, n, i) {
                if ("linear" === i || !t.length) return [{
                    time: e,
                    pos: 0
                }, {
                    time: n,
                    pos: 1
                }];
                var r, o, a, s, l, u = [],
                    d = [e];
                for (r = 0, o = t.length; r < o; ++r)(s = t[r]) > e && s < n && d.push(s);
                for (d.push(n), r = 0, o = d.length; r < o; ++r) l = d[r + 1], s = d[r], void 0 !== (a = d[r - 1]) && void 0 !== l && Math.round((l + a) / 2) === s || u.push({
                    time: s,
                    pos: r / (o - 1)
                });
                return u
            }(i._timestamps.data, r, o, f), i._offsets = function(t, e, n, i, r) {
                var o, a, s = 0,
                    l = 0;
                return r.offset && e.length && (o = Bn(t, "time", e[0], "pos"), s = 1 === e.length ? 1 - o : (Bn(t, "time", e[1], "pos") - o) / 2, a = Bn(t, "time", e[e.length - 1], "pos"), l = 1 === e.length ? a : (a - Bn(t, "time", e[e.length - 2], "pos")) / 2), {
                    start: s,
                    end: l,
                    factor: 1 / (s + 1 + l)
                }
            }(i._table, d, 0, 0, a), s.reverse && d.reverse(), Yn(i, d, i._majorUnit)
        },
        getLabelForIndex: function(t, e) {
            var n = this,
                i = n._adapter,
                r = n.chart.data,
                o = n.options.time,
                a = r.labels && t < r.labels.length ? r.labels[t] : "",
                s = r.datasets[e].data[t];
            return B.isObject(s) && (a = n.getRightValue(s)), o.tooltipFormat ? i.format(zn(n, a), o.tooltipFormat) : "string" == typeof a ? a : i.format(zn(n, a), o.displayFormats.datetime)
        },
        tickFormatFunction: function(t, e, n, i) {
            var r = this.options,
                o = r.time.displayFormats,
                a = this._majorUnit,
                s = o[a],
                l = n[e],
                u = r.ticks,
                d = a && s && l && l.major,
                c = this._adapter.format(t, i || (d ? s : o[this._unit])),
                h = d ? u.major : u.minor,
                f = Ln([h.callback, h.userCallback, u.callback, u.userCallback]);
            return f ? f(c, e, n) : c
        },
        convertTicksToLabels: function(t) {
            var e, n, i = [];
            for (e = 0, n = t.length; e < n; ++e) i.push(this.tickFormatFunction(t[e].value, e, t));
            return i
        },
        getPixelForOffset: function(t) {
            var e = this._offsets,
                n = Bn(this._table, "time", t, "pos");
            return this.getPixelForDecimal((e.start + n) * e.factor)
        },
        getPixelForValue: function(t, e, n) {
            var i = null;
            if (void 0 !== e && void 0 !== n && (i = this._timestamps.datasets[n][e]), null === i && (i = Hn(this, t)), null !== i) return this.getPixelForOffset(i)
        },
        getPixelForTick: function(t) {
            var e = this.getTicks();
            return t >= 0 && t < e.length ? this.getPixelForOffset(e[t].value) : null
        },
        getValueForPixel: function(t) {
            var e = this._offsets,
                n = this.getDecimalForPixel(t) / e.factor - e.end,
                i = Bn(this._table, "pos", n, "time");
            return this._adapter._create(i)
        },
        _getLabelSize: function(t) {
            var e = this.options.ticks,
                n = this.ctx.measureText(t).width,
                i = B.toRadians(this.isHorizontal() ? e.maxRotation : e.minRotation),
                r = Math.cos(i),
                o = Math.sin(i),
                a = On(e.fontSize, F.global.defaultFontSize);
            return {
                w: n * r + a * o,
                h: n * o + a * r
            }
        },
        getLabelWidth: function(t) {
            return this._getLabelSize(t).w
        },
        getLabelCapacity: function(t) {
            var e = this,
                n = e.options.time,
                i = n.displayFormats,
                r = i[n.unit] || i.millisecond,
                o = e.tickFormatFunction(t, 0, Yn(e, [t], e._majorUnit), r),
                a = e._getLabelSize(o),
                s = Math.floor(e.isHorizontal() ? e.width / a.w : e.height / a.h);
            return e.options.offset && s--, s > 0 ? s : 1
        }
    });
    jn._defaults = {
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
    var Xn = {
            category: ln,
            linear: pn,
            logarithmic: yn,
            radialLinear: En,
            time: jn
        },
        qn = {
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
    Ye._date.override("function" == typeof t ? {
        _id: "moment",
        formats: function() {
            return qn
        },
        parse: function(e, n) {
            return "string" == typeof e && "string" == typeof n ? e = t(e, n) : e instanceof t || (e = t(e)), e.isValid() ? e.valueOf() : null
        },
        format: function(e, n) {
            return t(e).format(n)
        },
        add: function(e, n, i) {
            return t(e).add(n, i).valueOf()
        },
        diff: function(e, n, i) {
            return t(e).diff(t(n), i)
        },
        startOf: function(e, n, i) {
            return e = t(e), "isoWeek" === n ? e.isoWeekday(i).valueOf() : e.startOf(n).valueOf()
        },
        endOf: function(e, n) {
            return t(e).endOf(n).valueOf()
        },
        _create: function(e) {
            return t(e)
        }
    } : {}), F._set("global", {
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
                i = n.getDatasetMeta(e),
                r = i && n.isDatasetVisible(e) && i.dataset._children || [],
                o = r.length || 0;
            return o ? function(t, e) {
                return e < o && r[e]._view || null
            } : null
        },
        boundary: function(t) {
            var e = t.boundary,
                n = e ? e.x : null,
                i = e ? e.y : null;
            return B.isArray(e) ? function(t, n) {
                return e[n]
            } : function(t) {
                return {
                    x: null === n ? t.x : n,
                    y: null === i ? t.y : i
                }
            }
        }
    };

    function $n(t, e, n) {
        var i, r = t._model || {},
            o = r.fill;
        if (void 0 === o && (o = !!r.backgroundColor), !1 === o || null === o) return !1;
        if (!0 === o) return "origin";
        if (i = parseFloat(o, 10), isFinite(i) && Math.floor(i) === i) return "-" !== o[0] && "+" !== o[0] || (i = e + i), !(i === e || i < 0 || i >= n) && i;
        switch (o) {
            case "bottom":
                return "start";
            case "top":
                return "end";
            case "zero":
                return "origin";
            case "origin":
            case "start":
            case "end":
                return o;
            default:
                return !1
        }
    }

    function Zn(t) {
        return (t.el._scale || {}).getPointPositionForValue ? function(t) {
            var e, n, i, r, o, a = t.el._scale,
                s = a.options,
                l = a.chart.data.labels.length,
                u = t.fill,
                d = [];
            if (!l) return null;
            for (n = s.ticks.reverse ? a.min : a.max, i = a.getPointPositionForValue(0, e = s.ticks.reverse ? a.max : a.min), r = 0; r < l; ++r) o = "start" === u || "end" === u ? a.getPointPositionForValue(r, "start" === u ? e : n) : a.getBasePosition(r), s.gridLines.circular && (o.cx = i.x, o.cy = i.y, o.angle = a.getIndexAngle(r) - Math.PI / 2), d.push(o);
            return d
        }(t) : function(t) {
            var e, n = t.el._model || {},
                i = t.el._scale || {},
                r = t.fill,
                o = null;
            if (isFinite(r)) return null;
            if ("start" === r ? o = void 0 === n.scaleBottom ? i.bottom : n.scaleBottom : "end" === r ? o = void 0 === n.scaleTop ? i.top : n.scaleTop : void 0 !== n.scaleZero ? o = n.scaleZero : i.getBasePixel && (o = i.getBasePixel()), null != o) {
                if (void 0 !== o.x && void 0 !== o.y) return o;
                if (B.isFinite(o)) return {
                    x: (e = i.isHorizontal()) ? o : null,
                    y: e ? null : o
                }
            }
            return null
        }(t)
    }

    function Jn(t, e, n) {
        var i, r = t[e].fill,
            o = [e];
        if (!n) return r;
        for (; !1 !== r && -1 === o.indexOf(r);) {
            if (!isFinite(r)) return r;
            if (!(i = t[r])) return !1;
            if (i.visible) return r;
            o.push(r), r = i.fill
        }
        return !1
    }

    function Qn(t) {
        var e = t.fill,
            n = "dataset";
        return !1 === e ? null : (isFinite(e) || (n = "boundary"), Gn[n](t))
    }

    function ti(t) {
        return t && !t.skip
    }

    function ei(t, e, n, i, r) {
        var o, a, s, l;
        if (i && r) {
            for (t.moveTo(e[0].x, e[0].y), o = 1; o < i; ++o) B.canvas.lineTo(t, e[o - 1], e[o]);
            if (void 0 === n[0].angle)
                for (t.lineTo(n[r - 1].x, n[r - 1].y), o = r - 1; o > 0; --o) B.canvas.lineTo(t, n[o], n[o - 1], !0);
            else
                for (a = n[0].cx, s = n[0].cy, l = Math.sqrt(Math.pow(n[0].x - a, 2) + Math.pow(n[0].y - s, 2)), o = r - 1; o > 0; --o) t.arc(a, s, l, n[o].angle, n[o - 1].angle, !0)
        }
    }

    function ni(t, e, n, i, r, o) {
        var a, s, l, u, d, c, h, f, p = e.length,
            g = i.spanGaps,
            m = [],
            v = [],
            b = 0,
            y = 0;
        for (t.beginPath(), a = 0, s = p; a < s; ++a) d = n(u = e[l = a % p]._view, l, i), c = ti(u), h = ti(d), o && void 0 === f && c && (s = p + (f = a + 1)), c && h ? (b = m.push(u), y = v.push(d)) : b && y && (g ? (c && m.push(u), h && v.push(d)) : (ei(t, m, v, b, y), b = y = 0, m = [], v = []));
        ei(t, m, v, b, y), t.closePath(), t.fillStyle = r, t.fill()
    }
    var ii = {
            id: "filler",
            afterDatasetsUpdate: function(t, e) {
                var n, i, r, o, a = (t.data.datasets || []).length,
                    s = e.propagate,
                    l = [];
                for (i = 0; i < a; ++i) o = null, (r = (n = t.getDatasetMeta(i)).dataset) && r._model && r instanceof vt.Line && (o = {
                    visible: t.isDatasetVisible(i),
                    fill: $n(r, i, a),
                    chart: t,
                    el: r
                }), n.$filler = o, l.push(o);
                for (i = 0; i < a; ++i)(o = l[i]) && (o.fill = Jn(l, i, s), o.boundary = Zn(o), o.mapper = Qn(o))
            },
            beforeDatasetsDraw: function(t) {
                var e, n, i, r, o, a, s, l = t._getSortedVisibleDatasetMetas(),
                    u = t.ctx;
                for (n = l.length - 1; n >= 0; --n)(e = l[n].$filler) && e.visible && (r = (i = e.el)._view, o = i._children || [], s = r.backgroundColor || F.global.defaultColor, (a = e.mapper) && s && o.length && (B.canvas.clipArea(u, t.chartArea), ni(u, o, a, r, s, i._loop), B.canvas.unclipArea(u)))
            }
        },
        ri = B.rtl.getRtlAdapter,
        oi = B.noop,
        ai = B.valueOrDefault;

    function si(t, e) {
        return t.usePointStyle && t.boxWidth > e ? e : t.boxWidth
    }
    F._set("global", {
        legend: {
            display: !0,
            position: "top",
            align: "center",
            fullWidth: !0,
            reverse: !1,
            weight: 1e3,
            onClick: function(t, e) {
                var n = e.datasetIndex,
                    i = this.chart,
                    r = i.getDatasetMeta(n);
                r.hidden = null === r.hidden ? !i.data.datasets[n].hidden : null, i.update()
            },
            onHover: null,
            onLeave: null,
            labels: {
                boxWidth: 40,
                padding: 10,
                generateLabels: function(t) {
                    var e = t.data.datasets,
                        n = t.options.legend || {},
                        i = n.labels && n.labels.usePointStyle;
                    return t._getSortedDatasetMetas().map((function(n) {
                        var r = n.controller.getStyle(i ? 0 : void 0);
                        return {
                            text: e[n.index].label,
                            fillStyle: r.backgroundColor,
                            hidden: !t.isDatasetVisible(n.index),
                            lineCap: r.borderCapStyle,
                            lineDash: r.borderDash,
                            lineDashOffset: r.borderDashOffset,
                            lineJoin: r.borderJoinStyle,
                            lineWidth: r.borderWidth,
                            strokeStyle: r.borderColor,
                            pointStyle: r.pointStyle,
                            rotation: r.rotation,
                            datasetIndex: n.index
                        }
                    }), this)
                }
            }
        },
        legendCallback: function(t) {
            var e, n, i, r = document.createElement("ul"),
                o = t.data.datasets;
            for (r.setAttribute("class", t.id + "-legend"), e = 0, n = o.length; e < n; e++)(i = r.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = o[e].backgroundColor, o[e].label && i.appendChild(document.createTextNode(o[e].label));
            return r.outerHTML
        }
    });
    var li = j.extend({
        initialize: function(t) {
            B.extend(this, t), this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1
        },
        beforeUpdate: oi,
        update: function(t, e, n) {
            var i = this;
            return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize
        },
        afterUpdate: oi,
        beforeSetDimensions: oi,
        setDimensions: function() {
            var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                width: 0,
                height: 0
            }
        },
        afterSetDimensions: oi,
        beforeBuildLabels: oi,
        buildLabels: function() {
            var t = this,
                e = t.options.labels || {},
                n = B.callback(e.generateLabels, [t.chart], t) || [];
            e.filter && (n = n.filter((function(n) {
                return e.filter(n, t.chart.data)
            }))), t.options.reverse && n.reverse(), t.legendItems = n
        },
        afterBuildLabels: oi,
        beforeFit: oi,
        fit: function() {
            var t = this,
                e = t.options,
                n = e.labels,
                i = e.display,
                r = t.ctx,
                o = B.options._parseFont(n),
                a = o.size,
                s = t.legendHitBoxes = [],
                l = t.minSize,
                u = t.isHorizontal();
            if (u ? (l.width = t.maxWidth, l.height = i ? 10 : 0) : (l.width = i ? 10 : 0, l.height = t.maxHeight), i) {
                if (r.font = o.string, u) {
                    var d = t.lineWidths = [0],
                        c = 0;
                    r.textAlign = "left", r.textBaseline = "middle", B.each(t.legendItems, (function(t, e) {
                        var i = si(n, a) + a / 2 + r.measureText(t.text).width;
                        (0 === e || d[d.length - 1] + i + 2 * n.padding > l.width) && (c += a + n.padding, d[d.length - (e > 0 ? 0 : 1)] = 0), s[e] = {
                            left: 0,
                            top: 0,
                            width: i,
                            height: a
                        }, d[d.length - 1] += i + n.padding
                    })), l.height += c
                } else {
                    var h = n.padding,
                        f = t.columnWidths = [],
                        p = t.columnHeights = [],
                        g = n.padding,
                        m = 0,
                        v = 0;
                    B.each(t.legendItems, (function(t, e) {
                        var i = si(n, a) + a / 2 + r.measureText(t.text).width;
                        e > 0 && v + a + 2 * h > l.height && (g += m + n.padding, f.push(m), p.push(v), m = 0, v = 0), m = Math.max(m, i), v += a + h, s[e] = {
                            left: 0,
                            top: 0,
                            width: i,
                            height: a
                        }
                    })), g += m, f.push(m), p.push(v), l.width += g
                }
                t.width = l.width, t.height = l.height
            } else t.width = l.width = t.height = l.height = 0
        },
        afterFit: oi,
        isHorizontal: function() {
            return "top" === this.options.position || "bottom" === this.options.position
        },
        draw: function() {
            var t = this,
                e = t.options,
                n = e.labels,
                i = F.global,
                r = i.defaultColor,
                o = i.elements.line,
                a = t.height,
                s = t.columnHeights,
                l = t.width,
                u = t.lineWidths;
            if (e.display) {
                var d, c = ri(e.rtl, t.left, t.minSize.width),
                    h = t.ctx,
                    f = ai(n.fontColor, i.defaultFontColor),
                    p = B.options._parseFont(n),
                    g = p.size;
                h.textAlign = c.textAlign("left"), h.textBaseline = "middle", h.lineWidth = .5, h.strokeStyle = f, h.fillStyle = f, h.font = p.string;
                var m = si(n, g),
                    v = t.legendHitBoxes,
                    b = function(t, i) {
                        switch (e.align) {
                            case "start":
                                return n.padding;
                            case "end":
                                return t - i;
                            default:
                                return (t - i + n.padding) / 2
                        }
                    },
                    y = t.isHorizontal();
                d = y ? {
                    x: t.left + b(l, u[0]),
                    y: t.top + n.padding,
                    line: 0
                } : {
                    x: t.left + n.padding,
                    y: t.top + b(a, s[0]),
                    line: 0
                }, B.rtl.overrideTextDirection(t.ctx, e.textDirection);
                var x = g + n.padding;
                B.each(t.legendItems, (function(e, i) {
                    var f = h.measureText(e.text).width,
                        p = m + g / 2 + f,
                        w = d.x,
                        _ = d.y;
                    c.setWidth(t.minSize.width), y ? i > 0 && w + p + n.padding > t.left + t.minSize.width && (_ = d.y += x, d.line++, w = d.x = t.left + b(l, u[d.line])) : i > 0 && _ + x > t.top + t.minSize.height && (w = d.x = w + t.columnWidths[d.line] + n.padding, d.line++, _ = d.y = t.top + b(a, s[d.line]));
                    var T = c.x(w);
                    ! function(t, e, i) {
                        if (!(isNaN(m) || m <= 0)) {
                            h.save();
                            var a = ai(i.lineWidth, o.borderWidth);
                            if (h.fillStyle = ai(i.fillStyle, r), h.lineCap = ai(i.lineCap, o.borderCapStyle), h.lineDashOffset = ai(i.lineDashOffset, o.borderDashOffset), h.lineJoin = ai(i.lineJoin, o.borderJoinStyle), h.lineWidth = a, h.strokeStyle = ai(i.strokeStyle, r), h.setLineDash && h.setLineDash(ai(i.lineDash, o.borderDash)), n && n.usePointStyle) {
                                var s = m * Math.SQRT2 / 2,
                                    l = c.xPlus(t, m / 2);
                                B.canvas.drawPoint(h, i.pointStyle, s, l, e + g / 2, i.rotation)
                            } else h.fillRect(c.leftForLtr(t, m), e, m, g), 0 !== a && h.strokeRect(c.leftForLtr(t, m), e, m, g);
                            h.restore()
                        }
                    }(T, _, e), v[i].left = c.leftForLtr(T, v[i].width), v[i].top = _,
                        function(t, e, n, i) {
                            var r = g / 2,
                                o = c.xPlus(t, m + r),
                                a = e + r;
                            h.fillText(n.text, o, a), n.hidden && (h.beginPath(), h.lineWidth = 2, h.moveTo(o, a), h.lineTo(c.xPlus(o, i), a), h.stroke())
                        }(T, _, e, f), y ? d.x += p + n.padding : d.y += x
                })), B.rtl.restoreTextDirection(t.ctx, e.textDirection)
            }
        },
        _getLegendItemAt: function(t, e) {
            var n, i, r, o = this;
            if (t >= o.left && t <= o.right && e >= o.top && e <= o.bottom)
                for (r = o.legendHitBoxes, n = 0; n < r.length; ++n)
                    if (t >= (i = r[n]).left && t <= i.left + i.width && e >= i.top && e <= i.top + i.height) return o.legendItems[n];
            return null
        },
        handleEvent: function(t) {
            var e, n = this,
                i = n.options,
                r = "mouseup" === t.type ? "click" : t.type;
            if ("mousemove" === r) {
                if (!i.onHover && !i.onLeave) return
            } else {
                if ("click" !== r) return;
                if (!i.onClick) return
            }
            e = n._getLegendItemAt(t.x, t.y), "click" === r ? e && i.onClick && i.onClick.call(n, t.native, e) : (i.onLeave && e !== n._hoveredItem && (n._hoveredItem && i.onLeave.call(n, t.native, n._hoveredItem), n._hoveredItem = e), i.onHover && e && i.onHover.call(n, t.native, e))
        }
    });

    function ui(t, e) {
        var n = new li({
            ctx: t.ctx,
            options: e,
            chart: t
        });
        le.configure(t, n, e), le.addBox(t, n), t.legend = n
    }
    var di = {
            id: "legend",
            _element: li,
            beforeInit: function(t) {
                var e = t.options.legend;
                e && ui(t, e)
            },
            beforeUpdate: function(t) {
                var e = t.options.legend,
                    n = t.legend;
                e ? (B.mergeIf(e, F.global.legend), n ? (le.configure(t, n, e), n.options = e) : ui(t, e)) : n && (le.removeBox(t, n), delete t.legend)
            },
            afterEvent: function(t, e) {
                var n = t.legend;
                n && n.handleEvent(e)
            }
        },
        ci = B.noop;
    F._set("global", {
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
    var hi = j.extend({
        initialize: function(t) {
            B.extend(this, t), this.legendHitBoxes = []
        },
        beforeUpdate: ci,
        update: function(t, e, n) {
            var i = this;
            return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize
        },
        afterUpdate: ci,
        beforeSetDimensions: ci,
        setDimensions: function() {
            var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                width: 0,
                height: 0
            }
        },
        afterSetDimensions: ci,
        beforeBuildLabels: ci,
        buildLabels: ci,
        afterBuildLabels: ci,
        beforeFit: ci,
        fit: function() {
            var t, e = this,
                n = e.options,
                i = e.minSize = {},
                r = e.isHorizontal();
            n.display ? (t = (B.isArray(n.text) ? n.text.length : 1) * B.options._parseFont(n).lineHeight + 2 * n.padding, e.width = i.width = r ? e.maxWidth : t, e.height = i.height = r ? t : e.maxHeight) : e.width = i.width = e.height = i.height = 0
        },
        afterFit: ci,
        isHorizontal: function() {
            var t = this.options.position;
            return "top" === t || "bottom" === t
        },
        draw: function() {
            var t = this,
                e = t.ctx,
                n = t.options;
            if (n.display) {
                var i, r, o, a = B.options._parseFont(n),
                    s = a.lineHeight,
                    l = s / 2 + n.padding,
                    u = 0,
                    d = t.top,
                    c = t.left,
                    h = t.bottom,
                    f = t.right;
                e.fillStyle = B.valueOrDefault(n.fontColor, F.global.defaultFontColor), e.font = a.string, t.isHorizontal() ? (r = c + (f - c) / 2, o = d + l, i = f - c) : (r = "left" === n.position ? c + l : f - l, o = d + (h - d) / 2, i = h - d, u = Math.PI * ("left" === n.position ? -.5 : .5)), e.save(), e.translate(r, o), e.rotate(u), e.textAlign = "center", e.textBaseline = "middle";
                var p = n.text;
                if (B.isArray(p))
                    for (var g = 0, m = 0; m < p.length; ++m) e.fillText(p[m], 0, g, i), g += s;
                else e.fillText(p, 0, 0, i);
                e.restore()
            }
        }
    });

    function fi(t, e) {
        var n = new hi({
            ctx: t.ctx,
            options: e,
            chart: t
        });
        le.configure(t, n, e), le.addBox(t, n), t.titleBlock = n
    }
    var pi = {},
        gi = ii,
        mi = di,
        vi = {
            id: "title",
            _element: hi,
            beforeInit: function(t) {
                var e = t.options.title;
                e && fi(t, e)
            },
            beforeUpdate: function(t) {
                var e = t.options.title,
                    n = t.titleBlock;
                e ? (B.mergeIf(e, F.global.title), n ? (le.configure(t, n, e), n.options = e) : fi(t, e)) : n && (le.removeBox(t, n), delete t.titleBlock)
            }
        };
    for (var bi in pi.filler = gi, pi.legend = mi, pi.title = vi, ze.helpers = B,
            function() {
                function t(t, e, n) {
                    var i;
                    return "string" == typeof t ? (i = parseInt(t, 10), -1 !== t.indexOf("%") && (i = i / 100 * e.parentNode[n])) : i = t, i
                }

                function e(t) {
                    return null != t && "none" !== t
                }

                function n(n, i, r) {
                    var o = document.defaultView,
                        a = B._getParentNode(n),
                        s = o.getComputedStyle(n)[i],
                        l = o.getComputedStyle(a)[i],
                        u = e(s),
                        d = e(l),
                        c = Number.POSITIVE_INFINITY;
                    return u || d ? Math.min(u ? t(s, n, r) : c, d ? t(l, a, r) : c) : "none"
                }
                B.where = function(t, e) {
                    if (B.isArray(t) && Array.prototype.filter) return t.filter(e);
                    var n = [];
                    return B.each(t, (function(t) {
                        e(t) && n.push(t)
                    })), n
                }, B.findIndex = Array.prototype.findIndex ? function(t, e, n) {
                    return t.findIndex(e, n)
                } : function(t, e, n) {
                    n = void 0 === n ? t : n;
                    for (var i = 0, r = t.length; i < r; ++i)
                        if (e.call(n, t[i], i, t)) return i;
                    return -1
                }, B.findNextWhere = function(t, e, n) {
                    B.isNullOrUndef(n) && (n = -1);
                    for (var i = n + 1; i < t.length; i++) {
                        var r = t[i];
                        if (e(r)) return r
                    }
                }, B.findPreviousWhere = function(t, e, n) {
                    B.isNullOrUndef(n) && (n = t.length);
                    for (var i = n - 1; i >= 0; i--) {
                        var r = t[i];
                        if (e(r)) return r
                    }
                }, B.isNumber = function(t) {
                    return !isNaN(parseFloat(t)) && isFinite(t)
                }, B.almostEquals = function(t, e, n) {
                    return Math.abs(t - e) < n
                }, B.almostWhole = function(t, e) {
                    var n = Math.round(t);
                    return n - e <= t && n + e >= t
                }, B.max = function(t) {
                    return t.reduce((function(t, e) {
                        return isNaN(e) ? t : Math.max(t, e)
                    }), Number.NEGATIVE_INFINITY)
                }, B.min = function(t) {
                    return t.reduce((function(t, e) {
                        return isNaN(e) ? t : Math.min(t, e)
                    }), Number.POSITIVE_INFINITY)
                }, B.sign = Math.sign ? function(t) {
                    return Math.sign(t)
                } : function(t) {
                    return 0 == (t = +t) || isNaN(t) ? t : t > 0 ? 1 : -1
                }, B.toRadians = function(t) {
                    return t * (Math.PI / 180)
                }, B.toDegrees = function(t) {
                    return t * (180 / Math.PI)
                }, B._decimalPlaces = function(t) {
                    if (B.isFinite(t)) {
                        for (var e = 1, n = 0; Math.round(t * e) / e !== t;) e *= 10, n++;
                        return n
                    }
                }, B.getAngleFromPoint = function(t, e) {
                    var n = e.x - t.x,
                        i = e.y - t.y,
                        r = Math.sqrt(n * n + i * i),
                        o = Math.atan2(i, n);
                    return o < -.5 * Math.PI && (o += 2 * Math.PI), {
                        angle: o,
                        distance: r
                    }
                }, B.distanceBetweenPoints = function(t, e) {
                    return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
                }, B.aliasPixel = function(t) {
                    return t % 2 == 0 ? 0 : .5
                }, B._alignPixel = function(t, e, n) {
                    var i = t.currentDevicePixelRatio,
                        r = n / 2;
                    return Math.round((e - r) * i) / i + r
                }, B.splineCurve = function(t, e, n, i) {
                    var r = t.skip ? e : t,
                        o = e,
                        a = n.skip ? e : n,
                        s = Math.sqrt(Math.pow(o.x - r.x, 2) + Math.pow(o.y - r.y, 2)),
                        l = Math.sqrt(Math.pow(a.x - o.x, 2) + Math.pow(a.y - o.y, 2)),
                        u = s / (s + l),
                        d = l / (s + l),
                        c = i * (u = isNaN(u) ? 0 : u),
                        h = i * (d = isNaN(d) ? 0 : d);
                    return {
                        previous: {
                            x: o.x - c * (a.x - r.x),
                            y: o.y - c * (a.y - r.y)
                        },
                        next: {
                            x: o.x + h * (a.x - r.x),
                            y: o.y + h * (a.y - r.y)
                        }
                    }
                }, B.EPSILON = Number.EPSILON || 1e-14, B.splineCurveMonotone = function(t) {
                    var e, n, i, r, o, a, s, l, u, d = (t || []).map((function(t) {
                            return {
                                model: t._model,
                                deltaK: 0,
                                mK: 0
                            }
                        })),
                        c = d.length;
                    for (e = 0; e < c; ++e)
                        if (!(i = d[e]).model.skip) {
                            if (n = e > 0 ? d[e - 1] : null, (r = e < c - 1 ? d[e + 1] : null) && !r.model.skip) {
                                var h = r.model.x - i.model.x;
                                i.deltaK = 0 !== h ? (r.model.y - i.model.y) / h : 0
                            }
                            i.mK = !n || n.model.skip ? i.deltaK : !r || r.model.skip ? n.deltaK : this.sign(n.deltaK) !== this.sign(i.deltaK) ? 0 : (n.deltaK + i.deltaK) / 2
                        } for (e = 0; e < c - 1; ++e) r = d[e + 1], (i = d[e]).model.skip || r.model.skip || (B.almostEquals(i.deltaK, 0, this.EPSILON) ? i.mK = r.mK = 0 : (o = i.mK / i.deltaK, a = r.mK / i.deltaK, (l = Math.pow(o, 2) + Math.pow(a, 2)) <= 9 || (s = 3 / Math.sqrt(l), i.mK = o * s * i.deltaK, r.mK = a * s * i.deltaK)));
                    for (e = 0; e < c; ++e)(i = d[e]).model.skip || (r = e < c - 1 ? d[e + 1] : null, (n = e > 0 ? d[e - 1] : null) && !n.model.skip && (i.model.controlPointPreviousX = i.model.x - (u = (i.model.x - n.model.x) / 3), i.model.controlPointPreviousY = i.model.y - u * i.mK), r && !r.model.skip && (i.model.controlPointNextX = i.model.x + (u = (r.model.x - i.model.x) / 3), i.model.controlPointNextY = i.model.y + u * i.mK))
                }, B.nextItem = function(t, e, n) {
                    return n ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1]
                }, B.previousItem = function(t, e, n) {
                    return n ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1]
                }, B.niceNum = function(t, e) {
                    var n = Math.floor(B.log10(t)),
                        i = t / Math.pow(10, n);
                    return (e ? i < 1.5 ? 1 : i < 3 ? 2 : i < 7 ? 5 : 10 : i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * Math.pow(10, n)
                }, B.requestAnimFrame = "undefined" == typeof window ? function(t) {
                    t()
                } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                    return window.setTimeout(t, 1e3 / 60)
                }, B.getRelativePosition = function(t, e) {
                    var n, i, r = t.originalEvent || t,
                        o = t.target || t.srcElement,
                        a = o.getBoundingClientRect(),
                        s = r.touches;
                    s && s.length > 0 ? (n = s[0].clientX, i = s[0].clientY) : (n = r.clientX, i = r.clientY);
                    var l = parseFloat(B.getStyle(o, "padding-left")),
                        u = parseFloat(B.getStyle(o, "padding-top")),
                        d = parseFloat(B.getStyle(o, "padding-right")),
                        c = parseFloat(B.getStyle(o, "padding-bottom")),
                        h = a.bottom - a.top - u - c;
                    return {
                        x: n = Math.round((n - a.left - l) / (a.right - a.left - l - d) * o.width / e.currentDevicePixelRatio),
                        y: i = Math.round((i - a.top - u) / h * o.height / e.currentDevicePixelRatio)
                    }
                }, B.getConstraintWidth = function(t) {
                    return n(t, "max-width", "clientWidth")
                }, B.getConstraintHeight = function(t) {
                    return n(t, "max-height", "clientHeight")
                }, B._calculatePadding = function(t, e, n) {
                    return (e = B.getStyle(t, e)).indexOf("%") > -1 ? n * parseInt(e, 10) / 100 : parseInt(e, 10)
                }, B._getParentNode = function(t) {
                    var e = t.parentNode;
                    return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e
                }, B.getMaximumWidth = function(t) {
                    var e = B._getParentNode(t);
                    if (!e) return t.clientWidth;
                    var n = e.clientWidth,
                        i = n - B._calculatePadding(e, "padding-left", n) - B._calculatePadding(e, "padding-right", n),
                        r = B.getConstraintWidth(t);
                    return isNaN(r) ? i : Math.min(i, r)
                }, B.getMaximumHeight = function(t) {
                    var e = B._getParentNode(t);
                    if (!e) return t.clientHeight;
                    var n = e.clientHeight,
                        i = n - B._calculatePadding(e, "padding-top", n) - B._calculatePadding(e, "padding-bottom", n),
                        r = B.getConstraintHeight(t);
                    return isNaN(r) ? i : Math.min(i, r)
                }, B.getStyle = function(t, e) {
                    return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e)
                }, B.retinaScale = function(t, e) {
                    var n = t.currentDevicePixelRatio = e || "undefined" != typeof window && window.devicePixelRatio || 1;
                    if (1 !== n) {
                        var i = t.canvas,
                            r = t.height,
                            o = t.width;
                        i.height = r * n, i.width = o * n, t.ctx.scale(n, n), i.style.height || i.style.width || (i.style.height = r + "px", i.style.width = o + "px")
                    }
                }, B.fontString = function(t, e, n) {
                    return e + " " + t + "px " + n
                }, B.longestText = function(t, e, n, i) {
                    var r = (i = i || {}).data = i.data || {},
                        o = i.garbageCollect = i.garbageCollect || [];
                    i.font !== e && (r = i.data = {}, o = i.garbageCollect = [], i.font = e), t.font = e;
                    var a, s, l, u, d, c = 0,
                        h = n.length;
                    for (a = 0; a < h; a++)
                        if (null != (u = n[a]) && !0 !== B.isArray(u)) c = B.measureText(t, r, o, c, u);
                        else if (B.isArray(u))
                        for (s = 0, l = u.length; s < l; s++) null == (d = u[s]) || B.isArray(d) || (c = B.measureText(t, r, o, c, d));
                    var f = o.length / 2;
                    if (f > n.length) {
                        for (a = 0; a < f; a++) delete r[o[a]];
                        o.splice(0, f)
                    }
                    return c
                }, B.measureText = function(t, e, n, i, r) {
                    var o = e[r];
                    return o || (o = e[r] = t.measureText(r).width, n.push(r)), o > i && (i = o), i
                }, B.numberOfLabelLines = function(t) {
                    var e = 1;
                    return B.each(t, (function(t) {
                        B.isArray(t) && t.length > e && (e = t.length)
                    })), e
                }, B.color = _ ? function(t) {
                    return t instanceof CanvasGradient && (t = F.global.defaultColor), _(t)
                } : function(t) {
                    return console.error("Color.js not found!"), t
                }, B.getHoverColor = function(t) {
                    return t instanceof CanvasPattern || t instanceof CanvasGradient ? t : B.color(t).saturate(.5).darken(.1).rgbString()
                }
            }(), ze._adapters = Ye, ze.Animation = q, ze.animationService = G, ze.controllers = Yt, ze.DatasetController = tt, ze.defaults = F, ze.Element = j, ze.elements = vt, ze.Interaction = Jt, ze.layouts = le, ze.platform = _e, ze.plugins = Te, ze.Scale = an, ze.scaleService = ke, ze.Ticks = je, ze.Tooltip = Oe, ze.helpers.each(Xn, (function(t, e) {
                ze.scaleService.registerScaleType(e, t, t._defaults)
            })), pi) pi.hasOwnProperty(bi) && ze.plugins.register(pi[bi]);
    ze.platform.initialize();
    var yi = ze;
    return "undefined" != typeof window && (window.Chart = ze), ze.Chart = ze, ze.Legend = pi.legend._element, ze.Title = pi.title._element, ze.pluginService = ze.plugins, ze.PluginBase = ze.Element.extend({}), ze.canvasHelpers = ze.helpers.canvas, ze.layoutService = ze.layouts, ze.LinearScaleBase = dn, ze.helpers.each(["Bar", "Bubble", "Doughnut", "Line", "PolarArea", "Radar", "Scatter"], (function(t) {
        ze[t] = function(e, n) {
            return new ze(e, ze.helpers.merge(n || {}, {
                type: t.charAt(0).toLowerCase() + t.slice(1)
            }))
        }
    })), yi
}));