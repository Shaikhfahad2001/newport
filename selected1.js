! function () {
    var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {},
        e = {},
        n = {},
        i = t.parcelRequire348c;
    null == i && ((i = function (t) {
        if (t in e) return e[t].exports;
        if (t in n) {
            var i = n[t];
            delete n[t];
            var r = {
                id: t,
                exports: {}
            };
            return e[t] = r, i.call(r.exports, r, r.exports), r.exports
        }
        var s = new Error("Cannot find module '" + t + "'");
        throw s.code = "MODULE_NOT_FOUND", s
    }).register = function (t, e) {
        n[t] = e
    }, t.parcelRequire348c = i), i.register("hobco", (function (t, e) {
        ! function (e, n) {
            t.exports ? t.exports = n() : e.EvEmitter = n()
        }("undefined" != typeof window ? window : t.exports, (function () {
            function t() {}
            var e = t.prototype;
            return e.on = function (t, e) {
                if (!t || !e) return this;
                var n = this._events = this._events || {},
                    i = n[t] = n[t] || [];
                return i.includes(e) || i.push(e), this
            }, e.once = function (t, e) {
                if (!t || !e) return this;
                this.on(t, e);
                var n = this._onceEvents = this._onceEvents || {};
                return (n[t] = n[t] || {})[e] = !0, this
            }, e.off = function (t, e) {
                var n = this._events && this._events[t];
                if (!n || !n.length) return this;
                var i = n.indexOf(e);
                return -1 != i && n.splice(i, 1), this
            }, e.emitEvent = function (t, e) {
                var n = this._events && this._events[t];
                if (!n || !n.length) return this;
                n = n.slice(0), e = e || [];
                var i = this._onceEvents && this._onceEvents[t],
                    r = !0,
                    s = !1,
                    o = void 0;
                try {
                    for (var a, u = n[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                        var l = a.value;
                        i && i[l] && (this.off(t, l), delete i[l]), l.apply(this, e)
                    }
                } catch (t) {
                    s = !0, o = t
                } finally {
                    try {
                        r || null == u.return || u.return()
                    } finally {
                        if (s) throw o
                    }
                }
                return this
            }, e.allOff = function () {
                return delete this._events, delete this._onceEvents, this
            }, t
        }))
    }));
    var r = {};

    function s(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function a(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }

    function u(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
        return i
    }

    function l(t) {
        return function (t) {
            if (Array.isArray(t)) return u(t)
        }(t) || function (t) {
            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
        }(t) || function (t, e) {
            if (t) {
                if ("string" == typeof t) return u(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(t, e) : void 0
            }
        }(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function h(t) {
        return t && t.constructor === Symbol ? "symbol" : typeof t
    }
    /*!
     * imagesLoaded v5.0.0
     * JavaScript is all like "You images are done yet or what?"
     * MIT License
     */
    ! function (t, e) {
        r ? r = e(t, i("hobco")) : t.imagesLoaded = e(t, t.EvEmitter)
    }("undefined" != typeof window ? window : void 0, (function (t, e) {
        var n = t.jQuery,
            i = t.console;

        function r(t, e, s) {
            if (!(this instanceof r)) return new r(t, e, s);
            var o, a = t;
            ("string" == typeof t && (a = document.querySelectorAll(t)), a) ? (this.elements = (o = a, Array.isArray(o) ? o : "object" == typeof o && "number" == typeof o.length ? l(o) : [o]), this.options = {}, "function" == typeof e ? s = e : Object.assign(this.options, e), s && this.on("always", s), this.getImages(), n && (this.jqDeferred = new n.Deferred), setTimeout(this.check.bind(this))) : i.error("Bad element for imagesLoaded ".concat(a || t))
        }
        r.prototype = Object.create(e.prototype), r.prototype.getImages = function () {
            this.images = [], this.elements.forEach(this.addElementImages, this)
        };
        var s = [1, 9, 11];
        r.prototype.addElementImages = function (t) {
            "IMG" === t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
            var e = t.nodeType;
            if (e && s.includes(e)) {
                var n = t.querySelectorAll("img"),
                    i = !0,
                    r = !1,
                    o = void 0;
                try {
                    for (var a, u = n[Symbol.iterator](); !(i = (a = u.next()).done); i = !0) {
                        var l = a.value;
                        this.addImage(l)
                    }
                } catch (t) {
                    r = !0, o = t
                } finally {
                    try {
                        i || null == u.return || u.return()
                    } finally {
                        if (r) throw o
                    }
                }
                if ("string" == typeof this.options.background) {
                    var h = t.querySelectorAll(this.options.background),
                        c = !0,
                        f = !1,
                        p = void 0;
                    try {
                        for (var d, m = h[Symbol.iterator](); !(c = (d = m.next()).done); c = !0) {
                            var g = d.value;
                            this.addElementBackgroundImages(g)
                        }
                    } catch (t) {
                        f = !0, p = t
                    } finally {
                        try {
                            c || null == m.return || m.return()
                        } finally {
                            if (f) throw p
                        }
                    }
                }
            }
        };
        var o = /url\((['"])?(.*?)\1\)/gi;

        function a(t) {
            this.img = t
        }

        function u(t, e) {
            this.url = t, this.element = e, this.img = new Image
        }
        return r.prototype.addElementBackgroundImages = function (t) {
            var e = getComputedStyle(t);
            if (e)
                for (var n = o.exec(e.backgroundImage); null !== n;) {
                    var i = n && n[2];
                    i && this.addBackground(i, t), n = o.exec(e.backgroundImage)
                }
        }, r.prototype.addImage = function (t) {
            var e = new a(t);
            this.images.push(e)
        }, r.prototype.addBackground = function (t, e) {
            var n = new u(t, e);
            this.images.push(n)
        }, r.prototype.check = function () {
            var t = this;
            if (this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length) {
                var e = function (e, n, i) {
                    var r = t;
                    setTimeout((function () {
                        r.progress(e, n, i)
                    }))
                };
                this.images.forEach((function (t) {
                    t.once("progress", e), t.check()
                }))
            } else this.complete()
        }, r.prototype.progress = function (t, e, n) {
            this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount === this.images.length && this.complete(), this.options.debug && i && i.log("progress: ".concat(n), t, e)
        }, r.prototype.complete = function () {
            var t = this.hasAnyBroken ? "fail" : "done";
            if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                var e = this.hasAnyBroken ? "reject" : "resolve";
                this.jqDeferred[e](this)
            }
        }, a.prototype = Object.create(e.prototype), a.prototype.check = function () {
            this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.img.crossOrigin && (this.proxyImage.crossOrigin = this.img.crossOrigin), this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.currentSrc || this.img.src)
        }, a.prototype.getIsImageComplete = function () {
            return this.img.complete && this.img.naturalWidth
        }, a.prototype.confirm = function (t, e) {
            this.isLoaded = t;
            var n = this.img.parentNode,
                i = "PICTURE" === n.nodeName ? n : this.img;
            this.emitEvent("progress", [this, i, e])
        }, a.prototype.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, a.prototype.onload = function () {
            this.confirm(!0, "onload"), this.unbindEvents()
        }, a.prototype.onerror = function () {
            this.confirm(!1, "onerror"), this.unbindEvents()
        }, a.prototype.unbindEvents = function () {
            this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, u.prototype = Object.create(a.prototype), u.prototype.check = function () {
            this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
        }, u.prototype.unbindEvents = function () {
            this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, u.prototype.confirm = function (t, e) {
            this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
        }, r.makeJQueryPlugin = function (e) {
            (e = e || t.jQuery) && ((n = e).fn.imagesLoaded = function (t, e) {
                return new r(this, t, e).jqDeferred.promise(n(this))
            })
        }, r.makeJQueryPlugin(), r
    }));
    var c = function t(e) {
        "use strict";
        s(this, t), a(this, "DOM", {
            el: null,
            title: null,
            description: null,
            texts: null
        }), this.DOM.el = e, this.DOM.title = this.DOM.el.querySelector(".content__item-title"), this.DOM.description = this.DOM.el.querySelector(".content__item-description"), this.DOM.texts = l(this.DOM.el.querySelectorAll(".oh > .oh__inner"))
    };

    function f(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function p(t, e) {
        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }
    /*!
     * GSAP 3.10.4
     * https://greensock.com
     *
     * @license Copyright 2008-2022, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var d, m, g, _, v, y, b, x, w, T, O, k, M, D, S, C, E, A, P, I, L, B, R, z, X, Y, F, V, N = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: {
                lineHeight: ""
            }
        },
        q = {
            duration: .5,
            overwrite: !1,
            delay: 0
        },
        j = 1e8,
        U = 1e-8,
        W = 2 * Math.PI,
        H = W / 4,
        G = 0,
        Q = Math.sqrt,
        Z = Math.cos,
        $ = Math.sin,
        J = function (t) {
            return "string" == typeof t
        },
        K = function (t) {
            return "function" == typeof t
        },
        tt = function (t) {
            return "number" == typeof t
        },
        et = function (t) {
            return void 0 === t
        },
        nt = function (t) {
            return "object" == typeof t
        },
        it = function (t) {
            return !1 !== t
        },
        rt = function () {
            return "undefined" != typeof window
        },
        st = function (t) {
            return K(t) || J(t)
        },
        ot = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function () {},
        at = Array.isArray,
        ut = /(?:-?\.?\d|\.)+/gi,
        lt = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        ht = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        ct = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        ft = /[+-]=-?[.\d]+/,
        pt = /[^,'"\[\]\s]+/gi,
        dt = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        mt = {},
        gt = {},
        _t = function (t) {
            return (gt = qt(t, mt)) && Ln
        },
        vt = function (t, e) {
            return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
        },
        yt = function (t, e) {
            return !e && console.warn(t)
        },
        bt = function (t, e) {
            return t && (mt[t] = e) && gt && (gt[t] = e) || mt
        },
        xt = function () {
            return 0
        },
        wt = {},
        Tt = [],
        Ot = {},
        kt = {},
        Mt = {},
        Dt = 30,
        St = [],
        Ct = "",
        Et = function (t) {
            var e, n, i = t[0];
            if (nt(i) || K(i) || (t = [t]), !(e = (i._gsap || {}).harness)) {
                for (n = St.length; n-- && !St[n].targetTest(i););
                e = St[n]
            }
            for (n = t.length; n--;) t[n] && (t[n]._gsap || (t[n]._gsap = new nn(t[n], e))) || t.splice(n, 1);
            return t
        },
        At = function (t) {
            return t._gsap || Et(xe(t))[0]._gsap
        },
        Pt = function (t, e, n) {
            return (n = t[e]) && K(n) ? t[e]() : et(n) && t.getAttribute && t.getAttribute(e) || n
        },
        It = function (t, e) {
            return (t = t.split(",")).forEach(e) || t
        },
        Lt = function (t) {
            return Math.round(1e5 * t) / 1e5 || 0
        },
        Bt = function (t) {
            return Math.round(1e7 * t) / 1e7 || 0
        },
        Rt = function (t, e) {
            var n = e.charAt(0),
                i = parseFloat(e.substr(2));
            return t = parseFloat(t), "+" === n ? t + i : "-" === n ? t - i : "*" === n ? t * i : t / i
        },
        zt = function (t, e) {
            for (var n = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < n;);
            return i < n
        },
        Xt = function () {
            var t, e, n = Tt.length,
                i = Tt.slice(0);
            for (Ot = {}, Tt.length = 0, t = 0; t < n; t++)(e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
        },
        Yt = function (t, e, n, i) {
            Tt.length && Xt(), t.render(e, n, i), Tt.length && Xt()
        },
        Ft = function (t) {
            var e = parseFloat(t);
            return (e || 0 === e) && (t + "").match(pt).length < 2 ? e : J(t) ? t.trim() : t
        },
        Vt = function (t) {
            return t
        },
        Nt = function (t, e) {
            for (var n in e) n in t || (t[n] = e[n]);
            return t
        },
        qt = function (t, e) {
            for (var n in e) t[n] = e[n];
            return t
        },
        jt = function t(e, n) {
            for (var i in n) "__proto__" !== i && "constructor" !== i && "prototype" !== i && (e[i] = nt(n[i]) ? t(e[i] || (e[i] = {}), n[i]) : n[i]);
            return e
        },
        Ut = function (t, e) {
            var n, i = {};
            for (n in t) n in e || (i[n] = t[n]);
            return i
        },
        Wt = function (t) {
            var e, n = t.parent || m,
                i = t.keyframes ? (e = at(t.keyframes), function (t, n) {
                    for (var i in n) i in t || "duration" === i && e || "ease" === i || (t[i] = n[i])
                }) : Nt;
            if (it(t.inherit))
                for (; n;) i(t, n.vars.defaults), n = n.parent || n._dp;
            return t
        },
        Ht = function (t, e, n, i, r) {
            void 0 === n && (n = "_first"), void 0 === i && (i = "_last");
            var s, o = t[i];
            if (r)
                for (s = e[r]; o && o[r] > s;) o = o._prev;
            return o ? (e._next = o._next, o._next = e) : (e._next = t[n], t[n] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = o, e.parent = e._dp = t, e
        },
        Gt = function (t, e, n, i) {
            void 0 === n && (n = "_first"), void 0 === i && (i = "_last");
            var r = e._prev,
                s = e._next;
            r ? r._next = s : t[n] === e && (t[n] = s), s ? s._prev = r : t[i] === e && (t[i] = r), e._next = e._prev = e.parent = null
        },
        Qt = function (t, e) {
            t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), t._act = 0
        },
        Zt = function (t, e) {
            if (t && (!e || e._end > t._dur || e._start < 0))
                for (var n = t; n;) n._dirty = 1, n = n.parent;
            return t
        },
        $t = function (t) {
            for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
            return t
        },
        Jt = function t(e) {
            return !e || e._ts && t(e.parent)
        },
        Kt = function (t) {
            return t._repeat ? te(t._tTime, t = t.duration() + t._rDelay) * t : 0
        },
        te = function (t, e) {
            var n = Math.floor(t /= e);
            return t && n === t ? n - 1 : n
        },
        ee = function (t, e) {
            return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
        },
        ne = function (t) {
            return t._end = Bt(t._start + (t._tDur / Math.abs(t._ts || t._rts || U) || 0))
        },
        ie = function (t, e) {
            var n = t._dp;
            return n && n.smoothChildTiming && t._ts && (t._start = Bt(n._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), ne(t), n._dirty || Zt(n, t)), t
        },
        re = function (t, e) {
            var n;
            if ((e._time || e._initted && !e._dur) && (n = ee(t.rawTime(), e), (!e._dur || ge(0, e.totalDuration(), n) - e._tTime > U) && e.render(n, !0)), Zt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
                if (t._dur < t.duration())
                    for (n = t; n._dp;) n.rawTime() >= 0 && n.totalTime(n._tTime), n = n._dp;
                t._zTime = -1e-8
            }
        },
        se = function (t, e, n, i) {
            return e.parent && Qt(e), e._start = Bt((tt(n) ? n : n || t !== m ? pe(t, n, e) : t._time) + e._delay), e._end = Bt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), Ht(t, e, "_first", "_last", t._sort ? "_start" : 0), le(e) || (t._recent = e), i || re(t, e), t
        },
        oe = function (t, e) {
            return (mt.ScrollTrigger || vt("scrollTrigger", e)) && mt.ScrollTrigger.create(e, t)
        },
        ae = function (t, e, n, i) {
            return cn(t, e), t._initted ? !n && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && b !== qe.frame ? (Tt.push(t), t._lazy = [e, i], 1) : void 0 : 1
        },
        ue = function t(e) {
            var n = e.parent;
            return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n))
        },
        le = function (t) {
            var e = t.data;
            return "isFromStart" === e || "isStart" === e
        },
        he = function (t, e, n, i) {
            var r = t._repeat,
                s = Bt(e) || 0,
                o = t._tTime / t._tDur;
            return o && !i && (t._time *= s / t._dur), t._dur = s, t._tDur = r ? r < 0 ? 1e10 : Bt(s * (r + 1) + t._rDelay * r) : s, o > 0 && !i ? ie(t, t._tTime = t._tDur * o) : t.parent && ne(t), n || Zt(t.parent, t), t
        },
        ce = function (t) {
            return t instanceof sn ? Zt(t) : he(t, t._dur)
        },
        fe = {
            _start: 0,
            endTime: xt,
            totalDuration: xt
        },
        pe = function t(e, n, i) {
            var r, s, o, a = e.labels,
                u = e._recent || fe,
                l = e.duration() >= j ? u.endTime(!1) : e._dur;
            return J(n) && (isNaN(n) || n in a) ? (s = n.charAt(0), o = "%" === n.substr(-1), r = n.indexOf("="), "<" === s || ">" === s ? (r >= 0 && (n = n.replace(/=/, "")), ("<" === s ? u._start : u.endTime(u._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (o ? (r < 0 ? u : i).totalDuration() / 100 : 1)) : r < 0 ? (n in a || (a[n] = l), a[n]) : (s = parseFloat(n.charAt(r - 1) + n.substr(r + 1)), o && i && (s = s / 100 * (at(i) ? i[0] : i).totalDuration()), r > 1 ? t(e, n.substr(0, r - 1), i) + s : l + s)) : null == n ? l : +n
        },
        de = function (t, e, n) {
            var i, r, s = tt(e[1]),
                o = (s ? 2 : 1) + (t < 2 ? 0 : 1),
                a = e[o];
            if (s && (a.duration = e[1]), a.parent = n, t) {
                for (i = a, r = n; r && !("immediateRender" in i);) i = r.vars.defaults || {}, r = it(r.vars.inherit) && r.parent;
                a.immediateRender = it(i.immediateRender), t < 2 ? a.runBackwards = 1 : a.startAt = e[o - 1]
            }
            return new gn(e[0], a, e[o + 1])
        },
        me = function (t, e) {
            return t || 0 === t ? e(t) : e
        },
        ge = function (t, e, n) {
            return n < t ? t : n > e ? e : n
        },
        _e = function (t, e) {
            return J(t) && (e = dt.exec(t)) ? e[1] : ""
        },
        ve = [].slice,
        ye = function (t, e) {
            return t && nt(t) && "length" in t && (!e && !t.length || t.length - 1 in t && nt(t[0])) && !t.nodeType && t !== g
        },
        be = function (t, e, n) {
            return void 0 === n && (n = []), t.forEach((function (t) {
                var i;
                return J(t) && !e || ye(t, 1) ? (i = n).push.apply(i, xe(t)) : n.push(t)
            })) || n
        },
        xe = function (t, e, n) {
            return !J(t) || n || !_ && je() ? at(t) ? be(t, n) : ye(t) ? ve.call(t, 0) : t ? [t] : [] : ve.call((e || v).querySelectorAll(t), 0)
        },
        we = function (t) {
            return t.sort((function () {
                return .5 - Math.random()
            }))
        },
        Te = function (t) {
            if (K(t)) return t;
            var e = nt(t) ? t : {
                    each: t
                },
                n = $e(e.ease),
                i = e.from || 0,
                r = parseFloat(e.base) || 0,
                s = {},
                o = i > 0 && i < 1,
                a = isNaN(i) || o,
                u = e.axis,
                l = i,
                h = i;
            return J(i) ? l = h = {
                    center: .5,
                    edges: .5,
                    end: 1
                } [i] || 0 : !o && a && (l = i[0], h = i[1]),
                function (t, o, c) {
                    var f, p, d, m, g, _, v, y, b, x = (c || e).length,
                        w = s[x];
                    if (!w) {
                        if (!(b = "auto" === e.grid ? 0 : (e.grid || [1, j])[1])) {
                            for (v = -1e8; v < (v = c[b++].getBoundingClientRect().left) && b < x;);
                            b--
                        }
                        for (w = s[x] = [], f = a ? Math.min(b, x) * l - .5 : i % b, p = b === j ? 0 : a ? x * h / b - .5 : i / b | 0, v = 0, y = j, _ = 0; _ < x; _++) d = _ % b - f, m = p - (_ / b | 0), w[_] = g = u ? Math.abs("y" === u ? m : d) : Q(d * d + m * m), g > v && (v = g), g < y && (y = g);
                        "random" === i && we(w), w.max = v - y, w.min = y, w.v = x = (parseFloat(e.amount) || parseFloat(e.each) * (b > x ? x - 1 : u ? "y" === u ? x / b : b : Math.max(b, x / b)) || 0) * ("edges" === i ? -1 : 1), w.b = x < 0 ? r - x : r, w.u = _e(e.amount || e.each) || 0, n = n && x < 0 ? Qe(n) : n
                    }
                    return x = (w[t] - w.min) / w.max || 0, Bt(w.b + (n ? n(x) : x) * w.v) + w.u
                }
        },
        Oe = function (t) {
            var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
            return function (n) {
                var i = Math.round(parseFloat(n) / t) * t * e;
                return (i - i % 1) / e + (tt(n) ? 0 : _e(n))
            }
        },
        ke = function (t, e) {
            var n, i, r = at(t);
            return !r && nt(t) && (n = r = t.radius || j, t.values ? (t = xe(t.values), (i = !tt(t[0])) && (n *= n)) : t = Oe(t.increment)), me(e, r ? K(t) ? function (e) {
                return i = t(e), Math.abs(i - e) <= n ? i : e
            } : function (e) {
                for (var r, s, o = parseFloat(i ? e.x : e), a = parseFloat(i ? e.y : 0), u = j, l = 0, h = t.length; h--;)(r = i ? (r = t[h].x - o) * r + (s = t[h].y - a) * s : Math.abs(t[h] - o)) < u && (u = r, l = h);
                return l = !n || u <= n ? t[l] : e, i || l === e || tt(e) ? l : l + _e(e)
            } : Oe(t))
        },
        Me = function (t, e, n, i) {
            return me(at(t) ? !e : !0 === n ? (n = 0, !1) : !i, (function () {
                return at(t) ? t[~~(Math.random() * t.length)] : (i = (n = n || 1e-5) < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((t - n / 2 + Math.random() * (e - t + .99 * n)) / n) * n * i) / i
            }))
        },
        De = function (t, e, n) {
            return me(n, (function (n) {
                return t[~~e(n)]
            }))
        },
        Se = function (t) {
            for (var e, n, i, r, s = 0, o = ""; ~(e = t.indexOf("random(", s));) i = t.indexOf(")", e), r = "[" === t.charAt(e + 7), n = t.substr(e + 7, i - e - 7).match(r ? pt : ut), o += t.substr(s, e - s) + Me(r ? n : +n[0], r ? 0 : +n[1], +n[2] || 1e-5), s = i + 1;
            return o + t.substr(s, t.length - s)
        },
        Ce = function (t, e, n, i, r) {
            var s = e - t,
                o = i - n;
            return me(r, (function (e) {
                return n + ((e - t) / s * o || 0)
            }))
        },
        Ee = function (t, e, n) {
            var i, r, s, o = t.labels,
                a = j;
            for (i in o)(r = o[i] - e) < 0 == !!n && r && a > (r = Math.abs(r)) && (s = i, a = r);
            return s
        },
        Ae = function (t, e, n) {
            var i, r, s = t.vars,
                o = s[e];
            if (o) return i = s[e + "Params"], r = s.callbackScope || t, n && Tt.length && Xt(), i ? o.apply(r, i) : o.call(r)
        },
        Pe = function (t) {
            return Qt(t), t.scrollTrigger && t.scrollTrigger.kill(!1), t.progress() < 1 && Ae(t, "onInterrupt"), t
        },
        Ie = function (t) {
            var e = (t = !t.name && t.default || t).name,
                n = K(t),
                i = e && !n && t.init ? function () {
                    this._props = []
                } : t,
                r = {
                    init: xt,
                    render: kn,
                    add: ln,
                    kill: Dn,
                    modifier: Mn,
                    rawVars: 0
                },
                s = {
                    targetTest: 0,
                    get: 0,
                    getSetter: xn,
                    aliases: {},
                    register: 0
                };
            if (je(), t !== i) {
                if (kt[e]) return;
                Nt(i, Nt(Ut(t, r), s)), qt(i.prototype, qt(r, Ut(t, s))), kt[i.prop = e] = i, t.targetTest && (St.push(i), wt[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
            }
            bt(e, i), t.register && t.register(Ln, i, En)
        },
        Le = 255,
        Be = {
            aqua: [0, Le, Le],
            lime: [0, Le, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, Le],
            navy: [0, 0, 128],
            white: [Le, Le, Le],
            olive: [128, 128, 0],
            yellow: [Le, Le, 0],
            orange: [Le, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [Le, 0, 0],
            pink: [Le, 192, 203],
            cyan: [0, Le, Le],
            transparent: [Le, Le, Le, 0]
        },
        Re = function (t, e, n) {
            return (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (n - e) * t * 6 : t < .5 ? n : 3 * t < 2 ? e + (n - e) * (2 / 3 - t) * 6 : e) * Le + .5 | 0
        },
        ze = function (t, e, n) {
            var i, r, s, o, a, u, l, h, c, f, p = t ? tt(t) ? [t >> 16, t >> 8 & Le, t & Le] : 0 : Be.black;
            if (!p) {
                if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Be[t]) p = Be[t];
                else if ("#" === t.charAt(0)) {
                    if (t.length < 6 && (i = t.charAt(1), r = t.charAt(2), s = t.charAt(3), t = "#" + i + i + r + r + s + s + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(p = parseInt(t.substr(1, 6), 16)) >> 16, p >> 8 & Le, p & Le, parseInt(t.substr(7), 16) / 255];
                    p = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & Le, t & Le]
                } else if ("hsl" === t.substr(0, 3))
                    if (p = f = t.match(ut), e) {
                        if (~t.indexOf("=")) return p = t.match(lt), n && p.length < 4 && (p[3] = 1), p
                    } else o = +p[0] % 360 / 360, a = +p[1] / 100, i = 2 * (u = +p[2] / 100) - (r = u <= .5 ? u * (a + 1) : u + a - u * a), p.length > 3 && (p[3] *= 1), p[0] = Re(o + 1 / 3, i, r), p[1] = Re(o, i, r), p[2] = Re(o - 1 / 3, i, r);
                else p = t.match(ut) || Be.transparent;
                p = p.map(Number)
            }
            return e && !f && (i = p[0] / Le, r = p[1] / Le, s = p[2] / Le, u = ((l = Math.max(i, r, s)) + (h = Math.min(i, r, s))) / 2, l === h ? o = a = 0 : (c = l - h, a = u > .5 ? c / (2 - l - h) : c / (l + h), o = l === i ? (r - s) / c + (r < s ? 6 : 0) : l === r ? (s - i) / c + 2 : (i - r) / c + 4, o *= 60), p[0] = ~~(o + .5), p[1] = ~~(100 * a + .5), p[2] = ~~(100 * u + .5)), n && p.length < 4 && (p[3] = 1), p
        },
        Xe = function (t) {
            var e = [],
                n = [],
                i = -1;
            return t.split(Fe).forEach((function (t) {
                var r = t.match(ht) || [];
                e.push.apply(e, r), n.push(i += r.length + 1)
            })), e.c = n, e
        },
        Ye = function (t, e, n) {
            var i, r, s, o, a = "",
                u = (t + a).match(Fe),
                l = e ? "hsla(" : "rgba(",
                h = 0;
            if (!u) return t;
            if (u = u.map((function (t) {
                    return (t = ze(t, e, 1)) && l + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
                })), n && (s = Xe(t), (i = n.c).join(a) !== s.c.join(a)))
                for (o = (r = t.replace(Fe, "1").split(ht)).length - 1; h < o; h++) a += r[h] + (~i.indexOf(h) ? u.shift() || l + "0,0,0,0)" : (s.length ? s : u.length ? u : n).shift());
            if (!r)
                for (o = (r = t.split(Fe)).length - 1; h < o; h++) a += r[h] + u[h];
            return a + r[o]
        },
        Fe = function () {
            var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (t in Be) e += "|" + t + "\\b";
            return new RegExp(e + ")", "gi")
        }(),
        Ve = /hsl[a]?\(/,
        Ne = function (t) {
            var e, n = t.join(" ");
            if (Fe.lastIndex = 0, Fe.test(n)) return e = Ve.test(n), t[1] = Ye(t[1], e), t[0] = Ye(t[0], e, Xe(t[1])), !0
        },
        qe = (C = Date.now, E = 500, A = 33, P = C(), I = P, B = L = 1e3 / 240, z = function t(e) {
            var n, i, r, s, o = C() - I,
                a = !0 === e;
            if (o > E && (P += o - A), ((n = (r = (I += o) - P) - B) > 0 || a) && (s = ++M.frame, D = r - 1e3 * M.time, M.time = r /= 1e3, B += n + (n >= L ? 4 : L - n), i = 1), a || (T = O(t)), i)
                for (S = 0; S < R.length; S++) R[S](r, D, s, e)
        }, M = {
            time: 0,
            frame: 0,
            tick: function () {
                z(!0)
            },
            deltaRatio: function (t) {
                return D / (1e3 / (t || 60))
            },
            wake: function () {
                y && (!_ && rt() && (g = _ = window, v = g.document || {}, mt.gsap = Ln, (g.gsapVersions || (g.gsapVersions = [])).push(Ln.version), _t(gt || g.GreenSockGlobals || !g.gsap && g || {}), k = g.requestAnimationFrame), T && M.sleep(), O = k || function (t) {
                    return setTimeout(t, B - 1e3 * M.time + 1 | 0)
                }, w = 1, z(2))
            },
            sleep: function () {
                (k ? g.cancelAnimationFrame : clearTimeout)(T), w = 0, O = xt
            },
            lagSmoothing: function (t, e) {
                E = t || 1e8, A = Math.min(e, E, 0)
            },
            fps: function (t) {
                L = 1e3 / (t || 240), B = 1e3 * M.time + L
            },
            add: function (t, e, n) {
                var i = e ? function (e, n, r, s) {
                    t(e, n, r, s), M.remove(i)
                } : t;
                return M.remove(t), R[n ? "unshift" : "push"](i), je(), i
            },
            remove: function (t, e) {
                ~(e = R.indexOf(t)) && R.splice(e, 1) && S >= e && S--
            },
            _listeners: R = []
        }),
        je = function () {
            return !w && qe.wake()
        },
        Ue = {},
        We = /^[\d.\-M][\d.\-,\s]/,
        He = /["']/g,
        Ge = function (t) {
            for (var e, n, i, r = {}, s = t.substr(1, t.length - 3).split(":"), o = s[0], a = 1, u = s.length; a < u; a++) n = s[a], e = a !== u - 1 ? n.lastIndexOf(",") : n.length, i = n.substr(0, e), r[o] = isNaN(i) ? i.replace(He, "").trim() : +i, o = n.substr(e + 1).trim();
            return r
        },
        Qe = function (t) {
            return function (e) {
                return 1 - t(1 - e)
            }
        },
        Ze = function t(e, n) {
            for (var i, r = e._first; r;) r instanceof sn ? t(r, n) : !r.vars.yoyoEase || r._yoyo && r._repeat || r._yoyo === n || (r.timeline ? t(r.timeline, n) : (i = r._ease, r._ease = r._yEase, r._yEase = i, r._yoyo = n)), r = r._next
        },
        $e = function (t, e) {
            return t && (K(t) ? t : Ue[t] || function (t) {
                var e, n, i, r, s = (t + "").split("("),
                    o = Ue[s[0]];
                return o && s.length > 1 && o.config ? o.config.apply(null, ~t.indexOf("{") ? [Ge(s[1])] : (e = t, n = e.indexOf("(") + 1, i = e.indexOf(")"), r = e.indexOf("(", n), e.substring(n, ~r && r < i ? e.indexOf(")", i + 1) : i)).split(",").map(Ft)) : Ue._CE && We.test(t) ? Ue._CE("", t) : o
            }(t)) || e
        },
        Je = function (t, e, n, i) {
            void 0 === n && (n = function (t) {
                return 1 - e(1 - t)
            }), void 0 === i && (i = function (t) {
                return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
            });
            var r, s = {
                easeIn: e,
                easeOut: n,
                easeInOut: i
            };
            return It(t, (function (t) {
                for (var e in Ue[t] = mt[t] = s, Ue[r = t.toLowerCase()] = n, s) Ue[r + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Ue[t + "." + e] = s[e]
            })), s
        },
        Ke = function (t) {
            return function (e) {
                return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
            }
        },
        tn = function t(e, n, i) {
            var r = n >= 1 ? n : 1,
                s = (i || (e ? .3 : .45)) / (n < 1 ? n : 1),
                o = s / W * (Math.asin(1 / r) || 0),
                a = function (t) {
                    return 1 === t ? 1 : r * Math.pow(2, -10 * t) * $((t - o) * s) + 1
                },
                u = "out" === e ? a : "in" === e ? function (t) {
                    return 1 - a(1 - t)
                } : Ke(a);
            return s = W / s, u.config = function (n, i) {
                return t(e, n, i)
            }, u
        },
        en = function t(e, n) {
            void 0 === n && (n = 1.70158);
            var i = function (t) {
                    return t ? --t * t * ((n + 1) * t + n) + 1 : 0
                },
                r = "out" === e ? i : "in" === e ? function (t) {
                    return 1 - i(1 - t)
                } : Ke(i);
            return r.config = function (n) {
                return t(e, n)
            }, r
        };
    It("Linear,Quad,Cubic,Quart,Quint,Strong", (function (t, e) {
        var n = e < 5 ? e + 1 : e;
        Je(t + ",Power" + (n - 1), e ? function (t) {
            return Math.pow(t, n)
        } : function (t) {
            return t
        }, (function (t) {
            return 1 - Math.pow(1 - t, n)
        }), (function (t) {
            return t < .5 ? Math.pow(2 * t, n) / 2 : 1 - Math.pow(2 * (1 - t), n) / 2
        }))
    })), Ue.Linear.easeNone = Ue.none = Ue.Linear.easeIn, Je("Elastic", tn("in"), tn("out"), tn()), X = 7.5625, F = 1 / (Y = 2.75), Je("Bounce", (function (t) {
        return 1 - V(1 - t)
    }), V = function (t) {
        return t < F ? X * t * t : t < .7272727272727273 ? X * Math.pow(t - 1.5 / Y, 2) + .75 : t < .9090909090909092 ? X * (t -= 2.25 / Y) * t + .9375 : X * Math.pow(t - 2.625 / Y, 2) + .984375
    }), Je("Expo", (function (t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
    })), Je("Circ", (function (t) {
        return -(Q(1 - t * t) - 1)
    })), Je("Sine", (function (t) {
        return 1 === t ? 1 : 1 - Z(t * H)
    })), Je("Back", en("in"), en("out"), en()), Ue.SteppedEase = Ue.steps = mt.SteppedEase = {
        config: function (t, e) {
            void 0 === t && (t = 1);
            var n = 1 / t,
                i = t + (e ? 0 : 1),
                r = e ? 1 : 0;
            return function (t) {
                return ((i * ge(0, .99999999, t) | 0) + r) * n
            }
        }
    }, q.ease = Ue["quad.out"], It("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function (t) {
        return Ct += t + "," + t + "Params,"
    }));
    var nn = function (t, e) {
            this.id = G++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : Pt, this.set = e ? e.getSetter : xn
        },
        rn = function () {
            function t(t) {
                this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, he(this, +t.duration, 1, 1), this.data = t.data, w || qe.wake()
            }
            var e = t.prototype;
            return e.delay = function (t) {
                return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
            }, e.duration = function (t) {
                return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
            }, e.totalDuration = function (t) {
                return arguments.length ? (this._dirty = 0, he(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
            }, e.totalTime = function (t, e) {
                if (je(), !arguments.length) return this._tTime;
                var n = this._dp;
                if (n && n.smoothChildTiming && this._ts) {
                    for (ie(this, t), !n._dp || n.parent || re(n, this); n && n.parent;) n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
                    !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && se(this._dp, this, this._start - this._delay)
                }
                return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === U || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), Yt(this, t, e)), this
            }, e.time = function (t, e) {
                return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Kt(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
            }, e.totalProgress = function (t, e) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
            }, e.progress = function (t, e) {
                return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Kt(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
            }, e.iteration = function (t, e) {
                var n = this.duration() + this._rDelay;
                return arguments.length ? this.totalTime(this._time + (t - 1) * n, e) : this._repeat ? te(this._tTime, n) + 1 : 1
            }, e.timeScale = function (t) {
                if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
                if (this._rts === t) return this;
                var e = this.parent && this._ts ? ee(this.parent._time, this) : this._tTime;
                return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 : this._rts, this.totalTime(ge(-this._delay, this._tDur, e), !0), ne(this), $t(this)
            }, e.paused = function (t) {
                return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (je(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== U && (this._tTime -= U)))), this) : this._ps
            }, e.startTime = function (t) {
                if (arguments.length) {
                    this._start = t;
                    var e = this.parent || this._dp;
                    return e && (e._sort || !this.parent) && se(e, this, t - this._delay), this
                }
                return this._start
            }, e.endTime = function (t) {
                return this._start + (it(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
            }, e.rawTime = function (t) {
                var e = this.parent || this._dp;
                return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? ee(e.rawTime(t), this) : this._tTime : this._tTime
            }, e.globalTime = function (t) {
                for (var e = this, n = arguments.length ? t : e.rawTime(); e;) n = e._start + n / (e._ts || 1), e = e._dp;
                return n
            }, e.repeat = function (t) {
                return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, ce(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
            }, e.repeatDelay = function (t) {
                if (arguments.length) {
                    var e = this._time;
                    return this._rDelay = t, ce(this), e ? this.time(e) : this
                }
                return this._rDelay
            }, e.yoyo = function (t) {
                return arguments.length ? (this._yoyo = t, this) : this._yoyo
            }, e.seek = function (t, e) {
                return this.totalTime(pe(this, t), it(e))
            }, e.restart = function (t, e) {
                return this.play().totalTime(t ? -this._delay : 0, it(e))
            }, e.play = function (t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, e.reverse = function (t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, e.pause = function (t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, e.resume = function () {
                return this.paused(!1)
            }, e.reversed = function (t) {
                return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0
            }, e.invalidate = function () {
                return this._initted = this._act = 0, this._zTime = -1e-8, this
            }, e.isActive = function () {
                var t, e = this.parent || this._dp,
                    n = this._start;
                return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= n && t < this.endTime(!0) - U))
            }, e.eventCallback = function (t, e, n) {
                var i = this.vars;
                return arguments.length > 1 ? (e ? (i[t] = e, n && (i[t + "Params"] = n), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t]
            }, e.then = function (t) {
                var e = this;
                return new Promise((function (n) {
                    var i = K(t) ? t : Vt,
                        r = function () {
                            var t = e.then;
                            e.then = null, K(i) && (i = i(e)) && (i.then || i === e) && (e.then = t), n(i), e.then = t
                        };
                    e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? r() : e._prom = r
                }))
            }, e.kill = function () {
                Pe(this)
            }, t
        }();
    Nt(rn.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var sn = function (t) {
        function e(e, n) {
            var i;
            return void 0 === e && (e = {}), (i = t.call(this, e) || this).labels = {}, i.smoothChildTiming = !!e.smoothChildTiming, i.autoRemoveChildren = !!e.autoRemoveChildren, i._sort = it(e.sortChildren), m && se(e.parent || m, f(i), n), e.reversed && i.reverse(), e.paused && i.paused(!0), e.scrollTrigger && oe(f(i), e.scrollTrigger), i
        }
        p(e, t);
        var n = e.prototype;
        return n.to = function (t, e, n) {
            return de(0, arguments, this), this
        }, n.from = function (t, e, n) {
            return de(1, arguments, this), this
        }, n.fromTo = function (t, e, n, i) {
            return de(2, arguments, this), this
        }, n.set = function (t, e, n) {
            return e.duration = 0, e.parent = this, Wt(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new gn(t, e, pe(this, n), 1), this
        }, n.call = function (t, e, n) {
            return se(this, gn.delayedCall(0, t, e), n)
        }, n.staggerTo = function (t, e, n, i, r, s, o) {
            return n.duration = e, n.stagger = n.stagger || i, n.onComplete = s, n.onCompleteParams = o, n.parent = this, new gn(t, n, pe(this, r)), this
        }, n.staggerFrom = function (t, e, n, i, r, s, o) {
            return n.runBackwards = 1, Wt(n).immediateRender = it(n.immediateRender), this.staggerTo(t, e, n, i, r, s, o)
        }, n.staggerFromTo = function (t, e, n, i, r, s, o, a) {
            return i.startAt = n, Wt(i).immediateRender = it(i.immediateRender), this.staggerTo(t, e, i, r, s, o, a)
        }, n.render = function (t, e, n) {
            var i, r, s, o, a, u, l, h, c, f, p, d, g = this._time,
                _ = this._dirty ? this.totalDuration() : this._tDur,
                v = this._dur,
                y = t <= 0 ? 0 : Bt(t),
                b = this._zTime < 0 != t < 0 && (this._initted || !v);
            if (this !== m && y > _ && t >= 0 && (y = _), y !== this._tTime || n || b) {
                if (g !== this._time && v && (y += this._time - g, t += this._time - g), i = y, c = this._start, u = !(h = this._ts), b && (v || (g = this._zTime), (t || !e) && (this._zTime = t)), this._repeat) {
                    if (p = this._yoyo, a = v + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * a + t, e, n);
                    if (i = Bt(y % a), y === _ ? (o = this._repeat, i = v) : ((o = ~~(y / a)) && o === y / a && (i = v, o--), i > v && (i = v)), f = te(this._tTime, a), !g && this._tTime && f !== o && (f = o), p && 1 & o && (i = v - i, d = 1), o !== f && !this._lock) {
                        var x = p && 1 & f,
                            w = x === (p && 1 & o);
                        if (o < f && (x = !x), g = x ? 0 : v, this._lock = 1, this.render(g || (d ? 0 : Bt(o * a)), e, !v)._lock = 0, this._tTime = y, !e && this.parent && Ae(this, "onRepeat"), this.vars.repeatRefresh && !d && (this.invalidate()._lock = 1), g && g !== this._time || u !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                        if (v = this._dur, _ = this._tDur, w && (this._lock = 2, g = x ? v : -1e-4, this.render(g, !0), this.vars.repeatRefresh && !d && this.invalidate()), this._lock = 0, !this._ts && !u) return this;
                        Ze(this, d)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (l = function (t, e, n) {
                        var i;
                        if (n > e)
                            for (i = t._first; i && i._start <= n;) {
                                if ("isPause" === i.data && i._start > e) return i;
                                i = i._next
                            } else
                                for (i = t._last; i && i._start >= n;) {
                                    if ("isPause" === i.data && i._start < e) return i;
                                    i = i._prev
                                }
                    }(this, Bt(g), Bt(i)), l && (y -= i - (i = l._start))), this._tTime = y, this._time = i, this._act = !h, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, g = 0), !g && i && !e && (Ae(this, "onStart"), this._tTime !== y)) return this;
                if (i >= g && t >= 0)
                    for (r = this._first; r;) {
                        if (s = r._next, (r._act || i >= r._start) && r._ts && l !== r) {
                            if (r.parent !== this) return this.render(t, e, n);
                            if (r.render(r._ts > 0 ? (i - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (i - r._start) * r._ts, e, n), i !== this._time || !this._ts && !u) {
                                l = 0, s && (y += this._zTime = -1e-8);
                                break
                            }
                        }
                        r = s
                    } else {
                        r = this._last;
                        for (var T = t < 0 ? t : i; r;) {
                            if (s = r._prev, (r._act || T <= r._end) && r._ts && l !== r) {
                                if (r.parent !== this) return this.render(t, e, n);
                                if (r.render(r._ts > 0 ? (T - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (T - r._start) * r._ts, e, n), i !== this._time || !this._ts && !u) {
                                    l = 0, s && (y += this._zTime = T ? -1e-8 : U);
                                    break
                                }
                            }
                            r = s
                        }
                    }
                if (l && !e && (this.pause(), l.render(i >= g ? 0 : -1e-8)._zTime = i >= g ? 1 : -1, this._ts)) return this._start = c, ne(this), this.render(t, e, n);
                this._onUpdate && !e && Ae(this, "onUpdate", !0), (y === _ && this._tTime >= this.totalDuration() || !y && g) && (c !== this._start && Math.abs(h) === Math.abs(this._ts) || this._lock || ((t || !v) && (y === _ && this._ts > 0 || !y && this._ts < 0) && Qt(this, 1), e || t < 0 && !g || !y && !g && _ || (Ae(this, y === _ && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(y < _ && this.timeScale() > 0) && this._prom())))
            }
            return this
        }, n.add = function (t, e) {
            var n = this;
            if (tt(e) || (e = pe(this, e, t)), !(t instanceof rn)) {
                if (at(t)) return t.forEach((function (t) {
                    return n.add(t, e)
                })), this;
                if (J(t)) return this.addLabel(t, e);
                if (!K(t)) return this;
                t = gn.delayedCall(0, t)
            }
            return this !== t ? se(this, t, e) : this
        }, n.getChildren = function (t, e, n, i) {
            void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === n && (n = !0), void 0 === i && (i = -1e8);
            for (var r = [], s = this._first; s;) s._start >= i && (s instanceof gn ? e && r.push(s) : (n && r.push(s), t && r.push.apply(r, s.getChildren(!0, e, n)))), s = s._next;
            return r
        }, n.getById = function (t) {
            for (var e = this.getChildren(1, 1, 1), n = e.length; n--;)
                if (e[n].vars.id === t) return e[n]
        }, n.remove = function (t) {
            return J(t) ? this.removeLabel(t) : K(t) ? this.killTweensOf(t) : (Gt(this, t), t === this._recent && (this._recent = this._last), Zt(this))
        }, n.totalTime = function (e, n) {
            return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = Bt(qe.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, n), this._forcing = 0, this) : this._tTime
        }, n.addLabel = function (t, e) {
            return this.labels[t] = pe(this, e), this
        }, n.removeLabel = function (t) {
            return delete this.labels[t], this
        }, n.addPause = function (t, e, n) {
            var i = gn.delayedCall(0, e || xt, n);
            return i.data = "isPause", this._hasPause = 1, se(this, i, pe(this, t))
        }, n.removePause = function (t) {
            var e = this._first;
            for (t = pe(this, t); e;) e._start === t && "isPause" === e.data && Qt(e), e = e._next
        }, n.killTweensOf = function (t, e, n) {
            for (var i = this.getTweensOf(t, n), r = i.length; r--;) on !== i[r] && i[r].kill(t, e);
            return this
        }, n.getTweensOf = function (t, e) {
            for (var n, i = [], r = xe(t), s = this._first, o = tt(e); s;) s instanceof gn ? zt(s._targets, r) && (o ? (!on || s._initted && s._ts) && s.globalTime(0) <= e && s.globalTime(s.totalDuration()) > e : !e || s.isActive()) && i.push(s) : (n = s.getTweensOf(r, e)).length && i.push.apply(i, n), s = s._next;
            return i
        }, n.tweenTo = function (t, e) {
            e = e || {};
            var n, i = this,
                r = pe(i, t),
                s = e,
                o = s.startAt,
                a = s.onStart,
                u = s.onStartParams,
                l = s.immediateRender,
                h = gn.to(i, Nt({
                    ease: e.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: r,
                    overwrite: "auto",
                    duration: e.duration || Math.abs((r - (o && "time" in o ? o.time : i._time)) / i.timeScale()) || U,
                    onStart: function () {
                        if (i.pause(), !n) {
                            var t = e.duration || Math.abs((r - (o && "time" in o ? o.time : i._time)) / i.timeScale());
                            h._dur !== t && he(h, t, 0, 1).render(h._time, !0, !0), n = 1
                        }
                        a && a.apply(h, u || [])
                    }
                }, e));
            return l ? h.render(0) : h
        }, n.tweenFromTo = function (t, e, n) {
            return this.tweenTo(e, Nt({
                startAt: {
                    time: pe(this, t)
                }
            }, n))
        }, n.recent = function () {
            return this._recent
        }, n.nextLabel = function (t) {
            return void 0 === t && (t = this._time), Ee(this, pe(this, t))
        }, n.previousLabel = function (t) {
            return void 0 === t && (t = this._time), Ee(this, pe(this, t), 1)
        }, n.currentLabel = function (t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + U)
        }, n.shiftChildren = function (t, e, n) {
            void 0 === n && (n = 0);
            for (var i, r = this._first, s = this.labels; r;) r._start >= n && (r._start += t, r._end += t), r = r._next;
            if (e)
                for (i in s) s[i] >= n && (s[i] += t);
            return Zt(this)
        }, n.invalidate = function () {
            var e = this._first;
            for (this._lock = 0; e;) e.invalidate(), e = e._next;
            return t.prototype.invalidate.call(this)
        }, n.clear = function (t) {
            void 0 === t && (t = !0);
            for (var e, n = this._first; n;) e = n._next, this.remove(n), n = e;
            return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), Zt(this)
        }, n.totalDuration = function (t) {
            var e, n, i, r = 0,
                s = this,
                o = s._last,
                a = j;
            if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -t : t));
            if (s._dirty) {
                for (i = s.parent; o;) e = o._prev, o._dirty && o.totalDuration(), (n = o._start) > a && s._sort && o._ts && !s._lock ? (s._lock = 1, se(s, o, n - o._delay, 1)._lock = 0) : a = n, n < 0 && o._ts && (r -= n, (!i && !s._dp || i && i.smoothChildTiming) && (s._start += n / s._ts, s._time -= n, s._tTime -= n), s.shiftChildren(-n, !1, -1 / 0), a = 0), o._end > r && o._ts && (r = o._end), o = e;
                he(s, s === m && s._time > r ? s._time : r, 1, 1), s._dirty = 0
            }
            return s._tDur
        }, e.updateRoot = function (t) {
            if (m._ts && (Yt(m, ee(t, m)), b = qe.frame), qe.frame >= Dt) {
                Dt += N.autoSleep || 120;
                var e = m._first;
                if ((!e || !e._ts) && N.autoSleep && qe._listeners.length < 2) {
                    for (; e && !e._ts;) e = e._next;
                    e || qe.sleep()
                }
            }
        }, e
    }(rn);
    Nt(sn.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    var on, an, un = function (t, e, n, i, r, s, o) {
            var a, u, l, h, c, f, p, d, m = new En(this._pt, t, e, 0, 1, On, null, r),
                g = 0,
                _ = 0;
            for (m.b = n, m.e = i, n += "", (p = ~(i += "").indexOf("random(")) && (i = Se(i)), s && (s(d = [n, i], t, e), n = d[0], i = d[1]), u = n.match(ct) || []; a = ct.exec(i);) h = a[0], c = i.substring(g, a.index), l ? l = (l + 1) % 5 : "rgba(" === c.substr(-5) && (l = 1), h !== u[_++] && (f = parseFloat(u[_ - 1]) || 0, m._pt = {
                _next: m._pt,
                p: c || 1 === _ ? c : ",",
                s: f,
                c: "=" === h.charAt(1) ? Rt(f, h) - f : parseFloat(h) - f,
                m: l && l < 4 ? Math.round : 0
            }, g = ct.lastIndex);
            return m.c = g < i.length ? i.substring(g, i.length) : "", m.fp = o, (ft.test(i) || p) && (m.e = 0), this._pt = m, m
        },
        ln = function (t, e, n, i, r, s, o, a, u) {
            K(i) && (i = i(r || 0, t, s));
            var l, h = t[e],
                c = "get" !== n ? n : K(h) ? u ? t[e.indexOf("set") || !K(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : h,
                f = K(h) ? u ? yn : vn : _n;
            if (J(i) && (~i.indexOf("random(") && (i = Se(i)), "=" === i.charAt(1) && ((l = Rt(c, i) + (_e(c) || 0)) || 0 === l) && (i = l)), c !== i || an) return isNaN(c * i) || "" === i ? (!h && !(e in t) && vt(e, i), un.call(this, t, e, c, i, f, a || N.stringFilter, u)) : (l = new En(this._pt, t, e, +c || 0, i - (c || 0), "boolean" == typeof h ? Tn : wn, 0, f), u && (l.fp = u), o && l.modifier(o, this, t), this._pt = l)
        },
        hn = function (t, e, n, i, r, s) {
            var o, a, u, l;
            if (kt[t] && !1 !== (o = new kt[t]).init(r, o.rawVars ? e[t] : function (t, e, n, i, r) {
                    if (K(t) && (t = pn(t, r, e, n, i)), !nt(t) || t.style && t.nodeType || at(t) || ot(t)) return J(t) ? pn(t, r, e, n, i) : t;
                    var s, o = {};
                    for (s in t) o[s] = pn(t[s], r, e, n, i);
                    return o
                }(e[t], i, r, s, n), n, i, s) && (n._pt = a = new En(n._pt, r, t, 0, 1, o.render, o, 0, o.priority), n !== x))
                for (u = n._ptLookup[n._targets.indexOf(r)], l = o._props.length; l--;) u[o._props[l]] = a;
            return o
        },
        cn = function t(e, n) {
            var i, r, s, o, a, u, l, h, c, f, p, g, _, v = e.vars,
                y = v.ease,
                b = v.startAt,
                x = v.immediateRender,
                w = v.lazy,
                T = v.onUpdate,
                O = v.onUpdateParams,
                k = v.callbackScope,
                M = v.runBackwards,
                D = v.yoyoEase,
                S = v.keyframes,
                C = v.autoRevert,
                E = e._dur,
                A = e._startAt,
                P = e._targets,
                I = e.parent,
                L = I && "nested" === I.data ? I.parent._targets : P,
                B = "auto" === e._overwrite && !d,
                R = e.timeline;
            if (R && (!S || !y) && (y = "none"), e._ease = $e(y, q.ease), e._yEase = D ? Qe($e(!0 === D ? y : D, q.ease)) : 0, D && e._yoyo && !e._repeat && (D = e._yEase, e._yEase = e._ease, e._ease = D), e._from = !R && !!v.runBackwards, !R || S && !v.stagger) {
                if (g = (h = P[0] ? At(P[0]).harness : 0) && v[h.prop], i = Ut(v, wt), A && (Qt(A.render(-1, !0)), A._lazy = 0), b)
                    if (Qt(e._startAt = gn.set(P, Nt({
                            data: "isStart",
                            overwrite: !1,
                            parent: I,
                            immediateRender: !0,
                            lazy: it(w),
                            startAt: null,
                            delay: 0,
                            onUpdate: T,
                            onUpdateParams: O,
                            callbackScope: k,
                            stagger: 0
                        }, b))), n < 0 && !x && !C && e._startAt.render(-1, !0), x) {
                        if (n > 0 && !C && (e._startAt = 0), E && n <= 0) return void(n && (e._zTime = n))
                    } else !1 === C && (e._startAt = 0);
                else if (M && E)
                    if (A) !C && (e._startAt = 0);
                    else if (n && (x = !1), s = Nt({
                        overwrite: !1,
                        data: "isFromStart",
                        lazy: x && it(w),
                        immediateRender: x,
                        stagger: 0,
                        parent: I
                    }, i), g && (s[h.prop] = g), Qt(e._startAt = gn.set(P, s)), n < 0 && e._startAt.render(-1, !0), e._zTime = n, x) {
                    if (!n) return
                } else t(e._startAt, U);
                for (e._pt = e._ptCache = 0, w = E && it(w) || w && !E, r = 0; r < P.length; r++) {
                    if (l = (a = P[r])._gsap || Et(P)[r]._gsap, e._ptLookup[r] = f = {}, Ot[l.id] && Tt.length && Xt(), p = L === P ? r : L.indexOf(a), h && !1 !== (c = new h).init(a, g || i, e, p, L) && (e._pt = o = new En(e._pt, a, c.name, 0, 1, c.render, c, 0, c.priority), c._props.forEach((function (t) {
                            f[t] = o
                        })), c.priority && (u = 1)), !h || g)
                        for (s in i) kt[s] && (c = hn(s, i, e, p, a, L)) ? c.priority && (u = 1) : f[s] = o = ln.call(e, a, s, "get", i[s], p, L, 0, v.stringFilter);
                    e._op && e._op[r] && e.kill(a, e._op[r]), B && e._pt && (on = e, m.killTweensOf(a, f, e.globalTime(n)), _ = !e.parent, on = 0), e._pt && w && (Ot[l.id] = 1)
                }
                u && Cn(e), e._onInit && e._onInit(e)
            }
            e._onUpdate = T, e._initted = (!e._op || e._pt) && !_, S && n <= 0 && R.render(j, !0, !0)
        },
        fn = function (t, e, n, i) {
            var r, s, o = e.ease || i || "power1.inOut";
            if (at(e)) s = n[t] || (n[t] = []), e.forEach((function (t, n) {
                return s.push({
                    t: n / (e.length - 1) * 100,
                    v: t,
                    e: o
                })
            }));
            else
                for (r in e) s = n[r] || (n[r] = []), "ease" === r || s.push({
                    t: parseFloat(t),
                    v: e[r],
                    e: o
                })
        },
        pn = function (t, e, n, i, r) {
            return K(t) ? t.call(e, n, i, r) : J(t) && ~t.indexOf("random(") ? Se(t) : t
        },
        dn = Ct + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        mn = {};
    It(dn + ",id,stagger,delay,duration,paused,scrollTrigger", (function (t) {
        return mn[t] = 1
    }));
    var gn = function (t) {
        function e(e, n, i, r) {
            var s;
            "number" == typeof n && (i.duration = n, n = i, i = null);
            var o, a, u, l, h, c, p, g, _ = (s = t.call(this, r ? n : Wt(n)) || this).vars,
                v = _.duration,
                y = _.delay,
                b = _.immediateRender,
                x = _.stagger,
                w = _.overwrite,
                T = _.keyframes,
                O = _.defaults,
                k = _.scrollTrigger,
                M = _.yoyoEase,
                D = n.parent || m,
                S = (at(e) || ot(e) ? tt(e[0]) : "length" in n) ? [e] : xe(e);
            if (s._targets = S.length ? Et(S) : yt("GSAP target " + e + " not found. https://greensock.com", !N.nullTargetWarn) || [], s._ptLookup = [], s._overwrite = w, T || x || st(v) || st(y)) {
                if (n = s.vars, (o = s.timeline = new sn({
                        data: "nested",
                        defaults: O || {}
                    })).kill(), o.parent = o._dp = f(s), o._start = 0, x || st(v) || st(y)) {
                    if (l = S.length, p = x && Te(x), nt(x))
                        for (h in x) ~dn.indexOf(h) && (g || (g = {}), g[h] = x[h]);
                    for (a = 0; a < l; a++)(u = Ut(n, mn)).stagger = 0, M && (u.yoyoEase = M), g && qt(u, g), c = S[a], u.duration = +pn(v, f(s), a, c, S), u.delay = (+pn(y, f(s), a, c, S) || 0) - s._delay, !x && 1 === l && u.delay && (s._delay = y = u.delay, s._start += y, u.delay = 0), o.to(c, u, p ? p(a, c, S) : 0), o._ease = Ue.none;
                    o.duration() ? v = y = 0 : s.timeline = 0
                } else if (T) {
                    Wt(Nt(o.vars.defaults, {
                        ease: "none"
                    })), o._ease = $e(T.ease || n.ease || "none");
                    var C, E, A, P = 0;
                    if (at(T)) T.forEach((function (t) {
                        return o.to(S, t, ">")
                    }));
                    else {
                        for (h in u = {}, T) "ease" === h || "easeEach" === h || fn(h, T[h], u, T.easeEach);
                        for (h in u)
                            for (C = u[h].sort((function (t, e) {
                                    return t.t - e.t
                                })), P = 0, a = 0; a < C.length; a++)(A = {
                                ease: (E = C[a]).e,
                                duration: (E.t - (a ? C[a - 1].t : 0)) / 100 * v
                            })[h] = E.v, o.to(S, A, P), P += A.duration;
                        o.duration() < v && o.to({}, {
                            duration: v - o.duration()
                        })
                    }
                }
                v || s.duration(v = o.duration())
            } else s.timeline = 0;
            return !0 !== w || d || (on = f(s), m.killTweensOf(S), on = 0), se(D, f(s), i), n.reversed && s.reverse(), n.paused && s.paused(!0), (b || !v && !T && s._start === Bt(D._time) && it(b) && Jt(f(s)) && "nested" !== D.data) && (s._tTime = -1e-8, s.render(Math.max(0, -y))), k && oe(f(s), k), s
        }
        p(e, t);
        var n = e.prototype;
        return n.render = function (t, e, n) {
            var i, r, s, o, a, u, l, h, c, f = this._time,
                p = this._tDur,
                d = this._dur,
                m = t > p - U && t >= 0 ? p : t < U ? 0 : t;
            if (d) {
                if (m !== this._tTime || !t || n || !this._initted && this._tTime || this._startAt && this._zTime < 0 != t < 0) {
                    if (i = m, h = this.timeline, this._repeat) {
                        if (o = d + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * o + t, e, n);
                        if (i = Bt(m % o), m === p ? (s = this._repeat, i = d) : ((s = ~~(m / o)) && s === m / o && (i = d, s--), i > d && (i = d)), (u = this._yoyo && 1 & s) && (c = this._yEase, i = d - i), a = te(this._tTime, o), i === f && !n && this._initted) return this._tTime = m, this;
                        s !== a && (h && this._yEase && Ze(h, u), !this.vars.repeatRefresh || u || this._lock || (this._lock = n = 1, this.render(Bt(o * s), !0).invalidate()._lock = 0))
                    }
                    if (!this._initted) {
                        if (ae(this, t < 0 ? t : i, n, e)) return this._tTime = 0, this;
                        if (f !== this._time) return this;
                        if (d !== this._dur) return this.render(t, e, n)
                    }
                    if (this._tTime = m, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = l = (c || this._ease)(i / d), this._from && (this.ratio = l = 1 - l), i && !f && !e && (Ae(this, "onStart"), this._tTime !== m)) return this;
                    for (r = this._pt; r;) r.r(l, r.d), r = r._next;
                    h && h.render(t < 0 ? t : !i && u ? -1e-8 : h._dur * h._ease(i / this._dur), e, n) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, n), Ae(this, "onUpdate")), this._repeat && s !== a && this.vars.onRepeat && !e && this.parent && Ae(this, "onRepeat"), m !== this._tDur && m || this._tTime !== m || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0), (t || !d) && (m === this._tDur && this._ts > 0 || !m && this._ts < 0) && Qt(this, 1), e || t < 0 && !f || !m && !f || (Ae(this, m === p ? "onComplete" : "onReverseComplete", !0), this._prom && !(m < p && this.timeScale() > 0) && this._prom()))
                }
            } else ! function (t, e, n, i) {
                var r, s, o, a = t.ratio,
                    u = e < 0 || !e && (!t._start && ue(t) && (t._initted || !le(t)) || (t._ts < 0 || t._dp._ts < 0) && !le(t)) ? 0 : 1,
                    l = t._rDelay,
                    h = 0;
                if (l && t._repeat && (h = ge(0, t._tDur, e), s = te(h, l), t._yoyo && 1 & s && (u = 1 - u), s !== te(t._tTime, l) && (a = 1 - u, t.vars.repeatRefresh && t._initted && t.invalidate())), u !== a || i || t._zTime === U || !e && t._zTime) {
                    if (!t._initted && ae(t, e, i, n)) return;
                    for (o = t._zTime, t._zTime = e || (n ? U : 0), n || (n = e && !o), t.ratio = u, t._from && (u = 1 - u), t._time = 0, t._tTime = h, r = t._pt; r;) r.r(u, r.d), r = r._next;
                    t._startAt && e < 0 && t._startAt.render(e, !0, !0), t._onUpdate && !n && Ae(t, "onUpdate"), h && t._repeat && !n && t.parent && Ae(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === u && (u && Qt(t, 1), n || (Ae(t, u ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
                } else t._zTime || (t._zTime = e)
            }(this, t, e, n);
            return this
        }, n.targets = function () {
            return this._targets
        }, n.invalidate = function () {
            return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), t.prototype.invalidate.call(this)
        }, n.resetTo = function (t, e, n, i) {
            w || qe.wake(), this._ts || this.play();
            var r = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
            return this._initted || cn(this, r),
                function (t, e, n, i, r, s, o) {
                    var a, u, l, h = (t._pt && t._ptCache || (t._ptCache = {}))[e];
                    if (!h)
                        for (h = t._ptCache[e] = [], u = t._ptLookup, l = t._targets.length; l--;) {
                            if ((a = u[l][e]) && a.d && a.d._pt)
                                for (a = a.d._pt; a && a.p !== e;) a = a._next;
                            if (!a) return an = 1, t.vars[e] = "+=0", cn(t, o), an = 0, 1;
                            h.push(a)
                        }
                    for (l = h.length; l--;)(a = h[l]).s = !i && 0 !== i || r ? a.s + (i || 0) + s * a.c : i, a.c = n - a.s, a.e && (a.e = Lt(n) + _e(a.e)), a.b && (a.b = a.s + _e(a.b))
                }(this, t, e, n, i, this._ease(r / this._dur), r) ? this.resetTo(t, e, n, i) : (ie(this, 0), this.parent || Ht(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
        }, n.kill = function (t, e) {
            if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? Pe(this) : this;
            if (this.timeline) {
                var n = this.timeline.totalDuration();
                return this.timeline.killTweensOf(t, e, on && !0 !== on.vars.overwrite)._first || Pe(this), this.parent && n !== this.timeline.totalDuration() && he(this, this._dur * this.timeline._tDur / n, 0, 1), this
            }
            var i, r, s, o, a, u, l, h = this._targets,
                c = t ? xe(t) : h,
                f = this._ptLookup,
                p = this._pt;
            if ((!e || "all" === e) && function (t, e) {
                    for (var n = t.length, i = n === e.length; i && n-- && t[n] === e[n];);
                    return n < 0
                }(h, c)) return "all" === e && (this._pt = 0), Pe(this);
            for (i = this._op = this._op || [], "all" !== e && (J(e) && (a = {}, It(e, (function (t) {
                    return a[t] = 1
                })), e = a), e = function (t, e) {
                    var n, i, r, s, o = t[0] ? At(t[0]).harness : 0,
                        a = o && o.aliases;
                    if (!a) return e;
                    for (i in n = qt({}, e), a)
                        if (i in n)
                            for (r = (s = a[i].split(",")).length; r--;) n[s[r]] = n[i];
                    return n
                }(h, e)), l = h.length; l--;)
                if (~c.indexOf(h[l]))
                    for (a in r = f[l], "all" === e ? (i[l] = e, o = r, s = {}) : (s = i[l] = i[l] || {}, o = e), o)(u = r && r[a]) && ("kill" in u.d && !0 !== u.d.kill(a) || Gt(this, u, "_pt"), delete r[a]), "all" !== s && (s[a] = 1);
            return this._initted && !this._pt && p && Pe(this), this
        }, e.to = function (t, n) {
            return new e(t, n, arguments[2])
        }, e.from = function (t, e) {
            return de(1, arguments)
        }, e.delayedCall = function (t, n, i, r) {
            return new e(n, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t,
                onComplete: n,
                onReverseComplete: n,
                onCompleteParams: i,
                onReverseCompleteParams: i,
                callbackScope: r
            })
        }, e.fromTo = function (t, e, n) {
            return de(2, arguments)
        }, e.set = function (t, n) {
            return n.duration = 0, n.repeatDelay || (n.repeat = 0), new e(t, n)
        }, e.killTweensOf = function (t, e, n) {
            return m.killTweensOf(t, e, n)
        }, e
    }(rn);
    Nt(gn.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }), It("staggerTo,staggerFrom,staggerFromTo", (function (t) {
        gn[t] = function () {
            var e = new sn,
                n = ve.call(arguments, 0);
            return n.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, n)
        }
    }));
    var _n = function (t, e, n) {
            return t[e] = n
        },
        vn = function (t, e, n) {
            return t[e](n)
        },
        yn = function (t, e, n, i) {
            return t[e](i.fp, n)
        },
        bn = function (t, e, n) {
            return t.setAttribute(e, n)
        },
        xn = function (t, e) {
            return K(t[e]) ? vn : et(t[e]) && t.setAttribute ? bn : _n
        },
        wn = function (t, e) {
            return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
        },
        Tn = function (t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e)
        },
        On = function (t, e) {
            var n = e._pt,
                i = "";
            if (!t && e.b) i = e.b;
            else if (1 === t && e.e) i = e.e;
            else {
                for (; n;) i = n.p + (n.m ? n.m(n.s + n.c * t) : Math.round(1e4 * (n.s + n.c * t)) / 1e4) + i, n = n._next;
                i += e.c
            }
            e.set(e.t, e.p, i, e)
        },
        kn = function (t, e) {
            for (var n = e._pt; n;) n.r(t, n.d), n = n._next
        },
        Mn = function (t, e, n, i) {
            for (var r, s = this._pt; s;) r = s._next, s.p === i && s.modifier(t, e, n), s = r
        },
        Dn = function (t) {
            for (var e, n, i = this._pt; i;) n = i._next, i.p === t && !i.op || i.op === t ? Gt(this, i, "_pt") : i.dep || (e = 1), i = n;
            return !e
        },
        Sn = function (t, e, n, i) {
            i.mSet(t, e, i.m.call(i.tween, n, i.mt), i)
        },
        Cn = function (t) {
            for (var e, n, i, r, s = t._pt; s;) {
                for (e = s._next, n = i; n && n.pr > s.pr;) n = n._next;
                (s._prev = n ? n._prev : r) ? s._prev._next = s: i = s, (s._next = n) ? n._prev = s : r = s, s = e
            }
            t._pt = i
        },
        En = function () {
            function t(t, e, n, i, r, s, o, a, u) {
                this.t = e, this.s = i, this.c = r, this.p = n, this.r = s || wn, this.d = o || this, this.set = a || _n, this.pr = u || 0, this._next = t, t && (t._prev = this)
            }
            return t.prototype.modifier = function (t, e, n) {
                this.mSet = this.mSet || this.set, this.set = Sn, this.m = t, this.mt = n, this.tween = e
            }, t
        }();
    It(Ct + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function (t) {
        return wt[t] = 1
    })), mt.TweenMax = mt.TweenLite = gn, mt.TimelineLite = mt.TimelineMax = sn, m = new sn({
        sortChildren: !1,
        defaults: q,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }), N.stringFilter = Ne;
    var An = {
        registerPlugin: function () {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            e.forEach((function (t) {
                return Ie(t)
            }))
        },
        timeline: function (t) {
            return new sn(t)
        },
        getTweensOf: function (t, e) {
            return m.getTweensOf(t, e)
        },
        getProperty: function (t, e, n, i) {
            J(t) && (t = xe(t)[0]);
            var r = At(t || {}).get,
                s = n ? Vt : Ft;
            return "native" === n && (n = ""), t ? e ? s((kt[e] && kt[e].get || r)(t, e, n, i)) : function (e, n, i) {
                return s((kt[e] && kt[e].get || r)(t, e, n, i))
            } : t
        },
        quickSetter: function (t, e, n) {
            if ((t = xe(t)).length > 1) {
                var i = t.map((function (t) {
                        return Ln.quickSetter(t, e, n)
                    })),
                    r = i.length;
                return function (t) {
                    for (var e = r; e--;) i[e](t)
                }
            }
            t = t[0] || {};
            var s = kt[e],
                o = At(t),
                a = o.harness && (o.harness.aliases || {})[e] || e,
                u = s ? function (e) {
                    var i = new s;
                    x._pt = 0, i.init(t, n ? e + n : e, x, 0, [t]), i.render(1, i), x._pt && kn(1, x)
                } : o.set(t, a);
            return s ? u : function (e) {
                return u(t, a, n ? e + n : e, o, 1)
            }
        },
        quickTo: function (t, e, n) {
            var i, r = Ln.to(t, qt(((i = {})[e] = "+=0.1", i.paused = !0, i), n || {})),
                s = function (t, n, i) {
                    return r.resetTo(e, t, n, i)
                };
            return s.tween = r, s
        },
        isTweening: function (t) {
            return m.getTweensOf(t, !0).length > 0
        },
        defaults: function (t) {
            return t && t.ease && (t.ease = $e(t.ease, q.ease)), jt(q, t || {})
        },
        config: function (t) {
            return jt(N, t || {})
        },
        registerEffect: function (t) {
            var e = t.name,
                n = t.effect,
                i = t.plugins,
                r = t.defaults,
                s = t.extendTimeline;
            (i || "").split(",").forEach((function (t) {
                return t && !kt[t] && !mt[t] && yt(e + " effect requires " + t + " plugin.")
            })), Mt[e] = function (t, e, i) {
                return n(xe(t), Nt(e || {}, r), i)
            }, s && (sn.prototype[e] = function (t, n, i) {
                return this.add(Mt[e](t, nt(n) ? n : (i = n) && {}, this), i)
            })
        },
        registerEase: function (t, e) {
            Ue[t] = $e(e)
        },
        parseEase: function (t, e) {
            return arguments.length ? $e(t, e) : Ue
        },
        getById: function (t) {
            return m.getById(t)
        },
        exportRoot: function (t, e) {
            void 0 === t && (t = {});
            var n, i, r = new sn(t);
            for (r.smoothChildTiming = it(t.smoothChildTiming), m.remove(r), r._dp = 0, r._time = r._tTime = m._time, n = m._first; n;) i = n._next, !e && !n._dur && n instanceof gn && n.vars.onComplete === n._targets[0] || se(r, n, n._start - n._delay), n = i;
            return se(m, r, 0), r
        },
        utils: {
            wrap: function t(e, n, i) {
                var r = n - e;
                return at(e) ? De(e, t(0, e.length), n) : me(i, (function (t) {
                    return (r + (t - e) % r) % r + e
                }))
            },
            wrapYoyo: function t(e, n, i) {
                var r = n - e,
                    s = 2 * r;
                return at(e) ? De(e, t(0, e.length - 1), n) : me(i, (function (t) {
                    return e + ((t = (s + (t - e) % s) % s || 0) > r ? s - t : t)
                }))
            },
            distribute: Te,
            random: Me,
            snap: ke,
            normalize: function (t, e, n) {
                return Ce(t, e, 0, 1, n)
            },
            getUnit: _e,
            clamp: function (t, e, n) {
                return me(n, (function (n) {
                    return ge(t, e, n)
                }))
            },
            splitColor: ze,
            toArray: xe,
            selector: function (t) {
                return t = xe(t)[0] || yt("Invalid scope") || {},
                    function (e) {
                        var n = t.current || t.nativeElement || t;
                        return xe(e, n.querySelectorAll ? n : n === t ? yt("Invalid scope") || v.createElement("div") : t)
                    }
            },
            mapRange: Ce,
            pipe: function () {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return function (t) {
                    return e.reduce((function (t, e) {
                        return e(t)
                    }), t)
                }
            },
            unitize: function (t, e) {
                return function (n) {
                    return t(parseFloat(n)) + (e || _e(n))
                }
            },
            interpolate: function t(e, n, i, r) {
                var s = isNaN(e + n) ? 0 : function (t) {
                    return (1 - t) * e + t * n
                };
                if (!s) {
                    var o, a, u, l, h, c = J(e),
                        f = {};
                    if (!0 === i && (r = 1) && (i = null), c) e = {
                        p: e
                    }, n = {
                        p: n
                    };
                    else if (at(e) && !at(n)) {
                        for (u = [], l = e.length, h = l - 2, a = 1; a < l; a++) u.push(t(e[a - 1], e[a]));
                        l--, s = function (t) {
                            t *= l;
                            var e = Math.min(h, ~~t);
                            return u[e](t - e)
                        }, i = n
                    } else r || (e = qt(at(e) ? [] : {}, e));
                    if (!u) {
                        for (o in n) ln.call(f, e, o, "get", n[o]);
                        s = function (t) {
                            return kn(t, f) || (c ? e.p : e)
                        }
                    }
                }
                return me(i, s)
            },
            shuffle: we
        },
        install: _t,
        effects: Mt,
        ticker: qe,
        updateRoot: sn.updateRoot,
        plugins: kt,
        globalTimeline: m,
        core: {
            PropTween: En,
            globals: bt,
            Tween: gn,
            Timeline: sn,
            Animation: rn,
            getCache: At,
            _removeLinkedListItem: Gt,
            suppressOverwrites: function (t) {
                return d = t
            }
        }
    };
    It("to,from,fromTo,delayedCall,set,killTweensOf", (function (t) {
        return An[t] = gn[t]
    })), qe.add(sn.updateRoot), x = An.to({}, {
        duration: 0
    });
    var Pn = function (t, e) {
            for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e;) n = n._next;
            return n
        },
        In = function (t, e) {
            return {
                name: t,
                rawVars: 1,
                init: function (t, n, i) {
                    i._onInit = function (t) {
                        var i, r;
                        if (J(n) && (i = {}, It(n, (function (t) {
                                return i[t] = 1
                            })), n = i), e) {
                            for (r in i = {}, n) i[r] = e(n[r]);
                            n = i
                        }! function (t, e) {
                            var n, i, r, s = t._targets;
                            for (n in e)
                                for (i = s.length; i--;)(r = t._ptLookup[i][n]) && (r = r.d) && (r._pt && (r = Pn(r, n)), r && r.modifier && r.modifier(e[n], t, s[i], n))
                        }(t, n)
                    }
                }
            }
        },
        Ln = An.registerPlugin({
            name: "attr",
            init: function (t, e, n, i, r) {
                var s, o;
                for (s in e)(o = this.add(t, "setAttribute", (t.getAttribute(s) || 0) + "", e[s], i, r, 0, 0, s)) && (o.op = s), this._props.push(s)
            }
        }, {
            name: "endArray",
            init: function (t, e) {
                for (var n = e.length; n--;) this.add(t, n, t[n] || 0, e[n])
            }
        }, In("roundProps", Oe), In("modifiers"), In("snap", ke)) || An;
    gn.version = sn.version = Ln.version = "3.10.4", y = 1, rt() && je();
    Ue.Power0, Ue.Power1, Ue.Power2, Ue.Power3, Ue.Power4, Ue.Linear, Ue.Quad, Ue.Cubic, Ue.Quart, Ue.Quint, Ue.Strong, Ue.Elastic, Ue.Back, Ue.SteppedEase, Ue.Bounce, Ue.Sine, Ue.Expo, Ue.Circ;
    var Bn, Rn, zn, Xn, Yn, Fn, Vn, Nn = {},
        qn = 180 / Math.PI,
        jn = Math.PI / 180,
        Un = Math.atan2,
        Wn = /([A-Z])/g,
        Hn = /(left|right|width|margin|padding|x)/i,
        Gn = /[\s,\(]\S/,
        Qn = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity"
        },
        Zn = function (t, e) {
            return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
        },
        $n = function (t, e) {
            return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
        },
        Jn = function (t, e) {
            return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
        },
        Kn = function (t, e) {
            var n = e.s + e.c * t;
            e.set(e.t, e.p, ~~(n + (n < 0 ? -.5 : .5)) + e.u, e)
        },
        ti = function (t, e) {
            return e.set(e.t, e.p, t ? e.e : e.b, e)
        },
        ei = function (t, e) {
            return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
        },
        ni = function (t, e, n) {
            return t.style[e] = n
        },
        ii = function (t, e, n) {
            return t.style.setProperty(e, n)
        },
        ri = function (t, e, n) {
            return t._gsap[e] = n
        },
        si = function (t, e, n) {
            return t._gsap.scaleX = t._gsap.scaleY = n
        },
        oi = function (t, e, n, i, r) {
            var s = t._gsap;
            s.scaleX = s.scaleY = n, s.renderTransform(r, s)
        },
        ai = function (t, e, n, i, r) {
            var s = t._gsap;
            s[e] = n, s.renderTransform(r, s)
        },
        ui = "transform",
        li = ui + "Origin",
        hi = function (t, e) {
            var n = Rn.createElementNS ? Rn.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Rn.createElement(t);
            return n.style ? n : Rn.createElement(t)
        },
        ci = function t(e, n, i) {
            var r = getComputedStyle(e);
            return r[n] || r.getPropertyValue(n.replace(Wn, "-$1").toLowerCase()) || r.getPropertyValue(n) || !i && t(e, pi(n) || n, 1) || ""
        },
        fi = "O,Moz,ms,Ms,Webkit".split(","),
        pi = function (t, e, n) {
            var i = (e || Yn).style,
                r = 5;
            if (t in i && !n) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); r-- && !(fi[r] + t in i););
            return r < 0 ? null : (3 === r ? "ms" : r >= 0 ? fi[r] : "") + t
        },
        di = function () {
            "undefined" != typeof window && window.document && (Bn = window, Rn = Bn.document, zn = Rn.documentElement, Yn = hi("div") || {
                style: {}
            }, hi("div"), ui = pi(ui), li = ui + "Origin", Yn.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Vn = !!pi("perspective"), Xn = 1)
        },
        mi = function t(e) {
            var n, i = hi("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                r = this.parentNode,
                s = this.nextSibling,
                o = this.style.cssText;
            if (zn.appendChild(i), i.appendChild(this), this.style.display = "block", e) try {
                n = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t
            } catch (t) {} else this._gsapBBox && (n = this._gsapBBox());
            return r && (s ? r.insertBefore(this, s) : r.appendChild(this)), zn.removeChild(i), this.style.cssText = o, n
        },
        gi = function (t, e) {
            for (var n = e.length; n--;)
                if (t.hasAttribute(e[n])) return t.getAttribute(e[n])
        },
        _i = function (t) {
            var e;
            try {
                e = t.getBBox()
            } catch (n) {
                e = mi.call(t, !0)
            }
            return e && (e.width || e.height) || t.getBBox === mi || (e = mi.call(t, !0)), !e || e.width || e.x || e.y ? e : {
                x: +gi(t, ["x", "cx", "x1"]) || 0,
                y: +gi(t, ["y", "cy", "y1"]) || 0,
                width: 0,
                height: 0
            }
        },
        vi = function (t) {
            return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !_i(t))
        },
        yi = function (t, e) {
            if (e) {
                var n = t.style;
                e in Nn && e !== li && (e = ui), n.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), n.removeProperty(e.replace(Wn, "-$1").toLowerCase())) : n.removeAttribute(e)
            }
        },
        bi = function (t, e, n, i, r, s) {
            var o = new En(t._pt, e, n, 0, 1, s ? ei : ti);
            return t._pt = o, o.b = i, o.e = r, t._props.push(n), o
        },
        xi = {
            deg: 1,
            rad: 1,
            turn: 1
        },
        wi = function t(e, n, i, r) {
            var s, o, a, u, l = parseFloat(i) || 0,
                h = (i + "").trim().substr((l + "").length) || "px",
                c = Yn.style,
                f = Hn.test(n),
                p = "svg" === e.tagName.toLowerCase(),
                d = (p ? "client" : "offset") + (f ? "Width" : "Height"),
                m = 100,
                g = "px" === r,
                _ = "%" === r;
            return r === h || !l || xi[r] || xi[h] ? l : ("px" !== h && !g && (l = t(e, n, i, "px")), u = e.getCTM && vi(e), !_ && "%" !== h || !Nn[n] && !~n.indexOf("adius") ? (c[f ? "width" : "height"] = m + (g ? h : r), o = ~n.indexOf("adius") || "em" === r && e.appendChild && !p ? e : e.parentNode, u && (o = (e.ownerSVGElement || {}).parentNode), o && o !== Rn && o.appendChild || (o = Rn.body), (a = o._gsap) && _ && a.width && f && a.time === qe.time ? Lt(l / a.width * m) : ((_ || "%" === h) && (c.position = ci(e, "position")), o === e && (c.position = "static"), o.appendChild(Yn), s = Yn[d], o.removeChild(Yn), c.position = "absolute", f && _ && ((a = At(o)).time = qe.time, a.width = o[d]), Lt(g ? s * l / m : s && l ? m / s * l : 0))) : (s = u ? e.getBBox()[f ? "width" : "height"] : e[d], Lt(_ ? l / s * m : l / 100 * s)))
        },
        Ti = function (t, e, n, i) {
            var r;
            return Xn || di(), e in Qn && "transform" !== e && ~(e = Qn[e]).indexOf(",") && (e = e.split(",")[0]), Nn[e] && "transform" !== e ? (r = Li(t, i), r = "transformOrigin" !== e ? r[e] : r.svg ? r.origin : Bi(ci(t, li)) + " " + r.zOrigin + "px") : (!(r = t.style[e]) || "auto" === r || i || ~(r + "").indexOf("calc(")) && (r = Di[e] && Di[e](t, e, n) || ci(t, e) || Pt(t, e) || ("opacity" === e ? 1 : 0)), n && !~(r + "").trim().indexOf(" ") ? wi(t, e, r, n) + n : r
        },
        Oi = function (t, e, n, i) {
            if (!n || "none" === n) {
                var r = pi(e, t, 1),
                    s = r && ci(t, r, 1);
                s && s !== n ? (e = r, n = s) : "borderColor" === e && (n = ci(t, "borderTopColor"))
            }
            var o, a, u, l, h, c, f, p, d, m, g, _ = new En(this._pt, t.style, e, 0, 1, On),
                v = 0,
                y = 0;
            if (_.b = n, _.e = i, n += "", "auto" === (i += "") && (t.style[e] = i, i = ci(t, e) || i, t.style[e] = n), Ne(o = [n, i]), i = o[1], u = (n = o[0]).match(ht) || [], (i.match(ht) || []).length) {
                for (; a = ht.exec(i);) f = a[0], d = i.substring(v, a.index), h ? h = (h + 1) % 5 : "rgba(" !== d.substr(-5) && "hsla(" !== d.substr(-5) || (h = 1), f !== (c = u[y++] || "") && (l = parseFloat(c) || 0, g = c.substr((l + "").length), "=" === f.charAt(1) && (f = Rt(l, f) + g), p = parseFloat(f), m = f.substr((p + "").length), v = ht.lastIndex - m.length, m || (m = m || N.units[e] || g, v === i.length && (i += m, _.e += m)), g !== m && (l = wi(t, e, c, m) || 0), _._pt = {
                    _next: _._pt,
                    p: d || 1 === y ? d : ",",
                    s: l,
                    c: p - l,
                    m: h && h < 4 || "zIndex" === e ? Math.round : 0
                });
                _.c = v < i.length ? i.substring(v, i.length) : ""
            } else _.r = "display" === e && "none" === i ? ei : ti;
            return ft.test(i) && (_.e = 0), this._pt = _, _
        },
        ki = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%"
        },
        Mi = function (t, e) {
            if (e.tween && e.tween._time === e.tween._dur) {
                var n, i, r, s = e.t,
                    o = s.style,
                    a = e.u,
                    u = s._gsap;
                if ("all" === a || !0 === a) o.cssText = "", i = 1;
                else
                    for (r = (a = a.split(",")).length; --r > -1;) n = a[r], Nn[n] && (i = 1, n = "transformOrigin" === n ? li : ui), yi(s, n);
                i && (yi(s, ui), u && (u.svg && s.removeAttribute("transform"), Li(s, 1), u.uncache = 1))
            }
        },
        Di = {
            clearProps: function (t, e, n, i, r) {
                if ("isFromStart" !== r.data) {
                    var s = t._pt = new En(t._pt, e, n, 0, 0, Mi);
                    return s.u = i, s.pr = -10, s.tween = r, t._props.push(n), 1
                }
            }
        },
        Si = [1, 0, 0, 1, 0, 0],
        Ci = {},
        Ei = function (t) {
            return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
        },
        Ai = function (t) {
            var e = ci(t, ui);
            return Ei(e) ? Si : e.substr(7).match(lt).map(Lt)
        },
        Pi = function (t, e) {
            var n, i, r, s, o = t._gsap || At(t),
                a = t.style,
                u = Ai(t);
            return o.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(r = t.transform.baseVal.consolidate().matrix).a, r.b, r.c, r.d, r.e, r.f]).join(",") ? Si : u : (u !== Si || t.offsetParent || t === zn || o.svg || (r = a.display, a.display = "block", (n = t.parentNode) && t.offsetParent || (s = 1, i = t.nextSibling, zn.appendChild(t)), u = Ai(t), r ? a.display = r : yi(t, "display"), s && (i ? n.insertBefore(t, i) : n ? n.appendChild(t) : zn.removeChild(t))), e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
        },
        Ii = function (t, e, n, i, r, s) {
            var o, a, u, l = t._gsap,
                h = r || Pi(t, !0),
                c = l.xOrigin || 0,
                f = l.yOrigin || 0,
                p = l.xOffset || 0,
                d = l.yOffset || 0,
                m = h[0],
                g = h[1],
                _ = h[2],
                v = h[3],
                y = h[4],
                b = h[5],
                x = e.split(" "),
                w = parseFloat(x[0]) || 0,
                T = parseFloat(x[1]) || 0;
            n ? h !== Si && (a = m * v - g * _) && (u = w * (-g / a) + T * (m / a) - (m * b - g * y) / a, w = w * (v / a) + T * (-_ / a) + (_ * b - v * y) / a, T = u) : (w = (o = _i(t)).x + (~x[0].indexOf("%") ? w / 100 * o.width : w), T = o.y + (~(x[1] || x[0]).indexOf("%") ? T / 100 * o.height : T)), i || !1 !== i && l.smooth ? (y = w - c, b = T - f, l.xOffset = p + (y * m + b * _) - y, l.yOffset = d + (y * g + b * v) - b) : l.xOffset = l.yOffset = 0, l.xOrigin = w, l.yOrigin = T, l.smooth = !!i, l.origin = e, l.originIsAbsolute = !!n, t.style[li] = "0px 0px", s && (bi(s, l, "xOrigin", c, w), bi(s, l, "yOrigin", f, T), bi(s, l, "xOffset", p, l.xOffset), bi(s, l, "yOffset", d, l.yOffset)), t.setAttribute("data-svg-origin", w + " " + T)
        },
        Li = function (t, e) {
            var n = t._gsap || new nn(t);
            if ("x" in n && !e && !n.uncache) return n;
            var i, r, s, o, a, u, l, h, c, f, p, d, m, g, _, v, y, b, x, w, T, O, k, M, D, S, C, E, A, P, I, L, B = t.style,
                R = n.scaleX < 0,
                z = "px",
                X = "deg",
                Y = ci(t, li) || "0";
            return i = r = s = u = l = h = c = f = p = 0, o = a = 1, n.svg = !(!t.getCTM || !vi(t)), g = Pi(t, n.svg), n.svg && (M = (!n.uncache || "0px 0px" === Y) && !e && t.getAttribute("data-svg-origin"), Ii(t, M || Y, !!M || n.originIsAbsolute, !1 !== n.smooth, g)), d = n.xOrigin || 0, m = n.yOrigin || 0, g !== Si && (b = g[0], x = g[1], w = g[2], T = g[3], i = O = g[4], r = k = g[5], 6 === g.length ? (o = Math.sqrt(b * b + x * x), a = Math.sqrt(T * T + w * w), u = b || x ? Un(x, b) * qn : 0, (c = w || T ? Un(w, T) * qn + u : 0) && (a *= Math.abs(Math.cos(c * jn))), n.svg && (i -= d - (d * b + m * w), r -= m - (d * x + m * T))) : (L = g[6], P = g[7], C = g[8], E = g[9], A = g[10], I = g[11], i = g[12], r = g[13], s = g[14], l = (_ = Un(L, A)) * qn, _ && (M = O * (v = Math.cos(-_)) + C * (y = Math.sin(-_)), D = k * v + E * y, S = L * v + A * y, C = O * -y + C * v, E = k * -y + E * v, A = L * -y + A * v, I = P * -y + I * v, O = M, k = D, L = S), h = (_ = Un(-w, A)) * qn, _ && (v = Math.cos(-_), I = T * (y = Math.sin(-_)) + I * v, b = M = b * v - C * y, x = D = x * v - E * y, w = S = w * v - A * y), u = (_ = Un(x, b)) * qn, _ && (M = b * (v = Math.cos(_)) + x * (y = Math.sin(_)), D = O * v + k * y, x = x * v - b * y, k = k * v - O * y, b = M, O = D), l && Math.abs(l) + Math.abs(u) > 359.9 && (l = u = 0, h = 180 - h), o = Lt(Math.sqrt(b * b + x * x + w * w)), a = Lt(Math.sqrt(k * k + L * L)), _ = Un(O, k), c = Math.abs(_) > 2e-4 ? _ * qn : 0, p = I ? 1 / (I < 0 ? -I : I) : 0), n.svg && (M = t.getAttribute("transform"), n.forceCSS = t.setAttribute("transform", "") || !Ei(ci(t, ui)), M && t.setAttribute("transform", M))), Math.abs(c) > 90 && Math.abs(c) < 270 && (R ? (o *= -1, c += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (a *= -1, c += c <= 0 ? 180 : -180)), e = e || n.uncache, n.x = i - ((n.xPercent = i && (!e && n.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetWidth * n.xPercent / 100 : 0) + z, n.y = r - ((n.yPercent = r && (!e && n.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-r) ? -50 : 0))) ? t.offsetHeight * n.yPercent / 100 : 0) + z, n.z = s + z, n.scaleX = Lt(o), n.scaleY = Lt(a), n.rotation = Lt(u) + X, n.rotationX = Lt(l) + X, n.rotationY = Lt(h) + X, n.skewX = c + X, n.skewY = f + X, n.transformPerspective = p + z, (n.zOrigin = parseFloat(Y.split(" ")[2]) || 0) && (B[li] = Bi(Y)), n.xOffset = n.yOffset = 0, n.force3D = N.force3D, n.renderTransform = n.svg ? Ni : Vn ? Vi : zi, n.uncache = 0, n
        },
        Bi = function (t) {
            return (t = t.split(" "))[0] + " " + t[1]
        },
        Ri = function (t, e, n) {
            var i = _e(e);
            return Lt(parseFloat(e) + parseFloat(wi(t, "x", n + "px", i))) + i
        },
        zi = function (t, e) {
            e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Vi(t, e)
        },
        Xi = "0deg",
        Yi = "0px",
        Fi = ") ",
        Vi = function (t, e) {
            var n = e || this,
                i = n.xPercent,
                r = n.yPercent,
                s = n.x,
                o = n.y,
                a = n.z,
                u = n.rotation,
                l = n.rotationY,
                h = n.rotationX,
                c = n.skewX,
                f = n.skewY,
                p = n.scaleX,
                d = n.scaleY,
                m = n.transformPerspective,
                g = n.force3D,
                _ = n.target,
                v = n.zOrigin,
                y = "",
                b = "auto" === g && t && 1 !== t || !0 === g;
            if (v && (h !== Xi || l !== Xi)) {
                var x, w = parseFloat(l) * jn,
                    T = Math.sin(w),
                    O = Math.cos(w);
                w = parseFloat(h) * jn, x = Math.cos(w), s = Ri(_, s, T * x * -v), o = Ri(_, o, -Math.sin(w) * -v), a = Ri(_, a, O * x * -v + v)
            }
            m !== Yi && (y += "perspective(" + m + Fi), (i || r) && (y += "translate(" + i + "%, " + r + "%) "), (b || s !== Yi || o !== Yi || a !== Yi) && (y += a !== Yi || b ? "translate3d(" + s + ", " + o + ", " + a + ") " : "translate(" + s + ", " + o + Fi), u !== Xi && (y += "rotate(" + u + Fi), l !== Xi && (y += "rotateY(" + l + Fi), h !== Xi && (y += "rotateX(" + h + Fi), c === Xi && f === Xi || (y += "skew(" + c + ", " + f + Fi), 1 === p && 1 === d || (y += "scale(" + p + ", " + d + Fi), _.style[ui] = y || "translate(0, 0)"
        },
        Ni = function (t, e) {
            var n, i, r, s, o, a = e || this,
                u = a.xPercent,
                l = a.yPercent,
                h = a.x,
                c = a.y,
                f = a.rotation,
                p = a.skewX,
                d = a.skewY,
                m = a.scaleX,
                g = a.scaleY,
                _ = a.target,
                v = a.xOrigin,
                y = a.yOrigin,
                b = a.xOffset,
                x = a.yOffset,
                w = a.forceCSS,
                T = parseFloat(h),
                O = parseFloat(c);
            f = parseFloat(f), p = parseFloat(p), (d = parseFloat(d)) && (p += d = parseFloat(d), f += d), f || p ? (f *= jn, p *= jn, n = Math.cos(f) * m, i = Math.sin(f) * m, r = Math.sin(f - p) * -g, s = Math.cos(f - p) * g, p && (d *= jn, o = Math.tan(p - d), r *= o = Math.sqrt(1 + o * o), s *= o, d && (o = Math.tan(d), n *= o = Math.sqrt(1 + o * o), i *= o)), n = Lt(n), i = Lt(i), r = Lt(r), s = Lt(s)) : (n = m, s = g, i = r = 0), (T && !~(h + "").indexOf("px") || O && !~(c + "").indexOf("px")) && (T = wi(_, "x", h, "px"), O = wi(_, "y", c, "px")), (v || y || b || x) && (T = Lt(T + v - (v * n + y * r) + b), O = Lt(O + y - (v * i + y * s) + x)), (u || l) && (o = _.getBBox(), T = Lt(T + u / 100 * o.width), O = Lt(O + l / 100 * o.height)), o = "matrix(" + n + "," + i + "," + r + "," + s + "," + T + "," + O + ")", _.setAttribute("transform", o), w && (_.style[ui] = o)
        },
        qi = function (t, e, n, i, r) {
            var s, o, a = 360,
                u = J(r),
                l = parseFloat(r) * (u && ~r.indexOf("rad") ? qn : 1) - i,
                h = i + l + "deg";
            return u && ("short" === (s = r.split("_")[1]) && (l %= a) !== l % 180 && (l += l < 0 ? a : -360), "cw" === s && l < 0 ? l = (l + 36e9) % a - ~~(l / a) * a : "ccw" === s && l > 0 && (l = (l - 36e9) % a - ~~(l / a) * a)), t._pt = o = new En(t._pt, e, n, i, l, $n), o.e = h, o.u = "deg", t._props.push(n), o
        },
        ji = function (t, e) {
            for (var n in e) t[n] = e[n];
            return t
        },
        Ui = function (t, e, n) {
            var i, r, s, o, a, u, l, h = ji({}, n._gsap),
                c = n.style;
            for (r in h.svg ? (s = n.getAttribute("transform"), n.setAttribute("transform", ""), c[ui] = e, i = Li(n, 1), yi(n, ui), n.setAttribute("transform", s)) : (s = getComputedStyle(n)[ui], c[ui] = e, i = Li(n, 1), c[ui] = s), Nn)(s = h[r]) !== (o = i[r]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) < 0 && (a = _e(s) !== (l = _e(o)) ? wi(n, r, s, l) : parseFloat(s), u = parseFloat(o), t._pt = new En(t._pt, i, r, a, u - a, Zn), t._pt.u = l || 0, t._props.push(r));
            ji(i, h)
        };
    It("padding,margin,Width,Radius", (function (t, e) {
        var n = "Top",
            i = "Right",
            r = "Bottom",
            s = "Left",
            o = (e < 3 ? [n, i, r, s] : [n + s, n + i, r + i, r + s]).map((function (n) {
                return e < 2 ? t + n : "border" + n + t
            }));
        Di[e > 1 ? "border" + t : t] = function (t, e, n, i, r) {
            var s, a;
            if (arguments.length < 4) return s = o.map((function (e) {
                return Ti(t, e, n)
            })), 5 === (a = s.join(" ")).split(s[0]).length ? s[0] : a;
            s = (i + "").split(" "), a = {}, o.forEach((function (t, e) {
                return a[t] = s[e] = s[e] || s[(e - 1) / 2 | 0]
            })), t.init(e, a, r)
        }
    }));
    var Wi, Hi, Gi, Qi = {
        name: "css",
        register: di,
        targetTest: function (t) {
            return t.style && t.nodeType
        },
        init: function (t, e, n, i, r) {
            var s, o, a, u, l, c, f, p, d, m, g, _, v, y, b, x, w, T, O, k = this._props,
                M = t.style,
                D = n.vars.startAt;
            for (f in Xn || di(), e)
                if ("autoRound" !== f && (o = e[f], !kt[f] || !hn(f, e, n, i, t, r)))
                    if (l = void 0 === o ? "undefined" : h(o), c = Di[f], "function" === l && (l = void 0 === (o = o.call(n, i, t, r)) ? "undefined" : h(o)), "string" === l && ~o.indexOf("random(") && (o = Se(o)), c) c(this, t, f, o, n) && (b = 1);
                    else if ("--" === f.substr(0, 2)) s = (getComputedStyle(t).getPropertyValue(f) + "").trim(), o += "", Fe.lastIndex = 0, Fe.test(s) || (p = _e(s), d = _e(o)), d ? p !== d && (s = wi(t, f, s, d) + d) : p && (o += p), this.add(M, "setProperty", s, o, i, r, 0, 0, f), k.push(f);
            else if ("undefined" !== l) {
                if (D && f in D ? (s = "function" == typeof D[f] ? D[f].call(n, i, t, r) : D[f], J(s) && ~s.indexOf("random(") && (s = Se(s)), _e(s + "") || (s += N.units[f] || _e(Ti(t, f)) || ""), "=" === (s + "").charAt(1) && (s = Ti(t, f))) : s = Ti(t, f), u = parseFloat(s), (m = "string" === l && "=" === o.charAt(1) && o.substr(0, 2)) && (o = o.substr(2)), a = parseFloat(o), f in Qn && ("autoAlpha" === f && (1 === u && "hidden" === Ti(t, "visibility") && a && (u = 0), bi(this, M, "visibility", u ? "inherit" : "hidden", a ? "inherit" : "hidden", !a)), "scale" !== f && "transform" !== f && ~(f = Qn[f]).indexOf(",") && (f = f.split(",")[0])), g = f in Nn)
                    if (_ || ((v = t._gsap).renderTransform && !e.parseTransform || Li(t, e.parseTransform), y = !1 !== e.smoothOrigin && v.smooth, (_ = this._pt = new En(this._pt, M, ui, 0, 1, v.renderTransform, v, 0, -1)).dep = 1), "scale" === f) this._pt = new En(this._pt, v, "scaleY", v.scaleY, (m ? Rt(v.scaleY, m + a) : a) - v.scaleY || 0), k.push("scaleY", f), f += "X";
                    else {
                        if ("transformOrigin" === f) {
                            w = void 0, T = void 0, O = void 0, w = (x = o).split(" "), T = w[0], O = w[1] || "50%", "top" !== T && "bottom" !== T && "left" !== O && "right" !== O || (x = T, T = O, O = x), w[0] = ki[T] || T, w[1] = ki[O] || O, o = w.join(" "), v.svg ? Ii(t, o, 0, y, 0, this) : ((d = parseFloat(o.split(" ")[2]) || 0) !== v.zOrigin && bi(this, v, "zOrigin", v.zOrigin, d), bi(this, M, f, Bi(s), Bi(o)));
                            continue
                        }
                        if ("svgOrigin" === f) {
                            Ii(t, o, 1, y, 0, this);
                            continue
                        }
                        if (f in Ci) {
                            qi(this, v, f, u, m ? Rt(u, m + o) : o);
                            continue
                        }
                        if ("smoothOrigin" === f) {
                            bi(this, v, "smooth", v.smooth, o);
                            continue
                        }
                        if ("force3D" === f) {
                            v[f] = o;
                            continue
                        }
                        if ("transform" === f) {
                            Ui(this, o, t);
                            continue
                        }
                    }
                else f in M || (f = pi(f) || f);
                if (g || (a || 0 === a) && (u || 0 === u) && !Gn.test(o) && f in M) a || (a = 0), (p = (s + "").substr((u + "").length)) !== (d = _e(o) || (f in N.units ? N.units[f] : p)) && (u = wi(t, f, s, d)), this._pt = new En(this._pt, g ? v : M, f, u, (m ? Rt(u, m + a) : a) - u, g || "px" !== d && "zIndex" !== f || !1 === e.autoRound ? Zn : Kn), this._pt.u = d || 0, p !== d && "%" !== d && (this._pt.b = s, this._pt.r = Jn);
                else if (f in M) Oi.call(this, t, f, s, m ? m + o : o);
                else {
                    if (!(f in t)) {
                        vt(f, o);
                        continue
                    }
                    this.add(t, f, s || t[f], m ? m + o : o, i, r)
                }
                k.push(f)
            }
            b && Cn(this)
        },
        get: Ti,
        aliases: Qn,
        getSetter: function (t, e, n) {
            var i = Qn[e];
            return i && i.indexOf(",") < 0 && (e = i), e in Nn && e !== li && (t._gsap.x || Ti(t, "x")) ? n && Fn === n ? "scale" === e ? si : ri : (Fn = n || {}, "scale" === e ? oi : ai) : t.style && !et(t.style[e]) ? ni : ~e.indexOf("-") ? ii : xn(t, e)
        },
        core: {
            _removeProperty: yi,
            _getMatrix: Pi
        }
    };
    Ln.utils.checkPrefix = pi, Gi = It((Wi = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (Hi = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function (t) {
        Nn[t] = 1
    })), It(Hi, (function (t) {
        N.units[t] = "deg", Ci[t] = 1
    })), Qn[Gi[13]] = Wi + "," + Hi, It("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function (t) {
        var e = t.split(":");
        Qn[e[1]] = Gi[e[0]]
    })), It("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function (t) {
        N.units[t] = "px"
    })), Ln.registerPlugin(Qi);
    var Zi, $i, Ji, Ki, tr, er, nr, ir, rr, sr = Ln.registerPlugin(Qi) || Ln,
        or = (sr.core.Tween, "transform"),
        ar = or + "Origin",
        ur = function (t) {
            var e = t.ownerDocument || t;
            !(or in t.style) && "msTransform" in t.style && (ar = (or = "msTransform") + "Origin");
            for (; e.parentNode && (e = e.parentNode););
            if ($i = window, nr = new yr, e) {
                Zi = e, Ji = e.documentElement, Ki = e.body, (ir = Zi.createElementNS("http://www.w3.org/2000/svg", "g")).style.transform = "none";
                var n = e.createElement("div"),
                    i = e.createElement("div");
                Ki.appendChild(n), n.appendChild(i), n.style.position = "static", n.style[or] = "translate3d(0,0,1px)", rr = i.offsetParent !== n, Ki.removeChild(n)
            }
            return e
        },
        lr = [],
        hr = [],
        cr = function () {
            return $i.pageYOffset || Zi.scrollTop || Ji.scrollTop || Ki.scrollTop || 0
        },
        fr = function () {
            return $i.pageXOffset || Zi.scrollLeft || Ji.scrollLeft || Ki.scrollLeft || 0
        },
        pr = function (t) {
            return t.ownerSVGElement || ("svg" === (t.tagName + "").toLowerCase() ? t : null)
        },
        dr = function t(e) {
            return "fixed" === $i.getComputedStyle(e).position || ((e = e.parentNode) && 1 === e.nodeType ? t(e) : void 0)
        },
        mr = function t(e, n) {
            if (e.parentNode && (Zi || ur(e))) {
                var i = pr(e),
                    r = i ? i.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml",
                    s = i ? n ? "rect" : "g" : "div",
                    o = 2 !== n ? 0 : 100,
                    a = 3 === n ? 100 : 0,
                    u = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
                    l = Zi.createElementNS ? Zi.createElementNS(r.replace(/^https/, "http"), s) : Zi.createElement(s);
                return n && (i ? (er || (er = t(e)), l.setAttribute("width", .01), l.setAttribute("height", .01), l.setAttribute("transform", "translate(" + o + "," + a + ")"), er.appendChild(l)) : (tr || ((tr = t(e)).style.cssText = u), l.style.cssText = u + "width:0.1px;height:0.1px;top:" + a + "px;left:" + o + "px", tr.appendChild(l))), l
            }
            throw "Need document and parent."
        },
        gr = function (t) {
            var e, n = t.getCTM();
            return n || (e = t.style[or], t.style[or] = "none", t.appendChild(ir), n = ir.getCTM(), t.removeChild(ir), e ? t.style[or] = e : t.style.removeProperty(or.replace(/([A-Z])/g, "-$1").toLowerCase())), n || nr.clone()
        },
        _r = function (t, e) {
            var n, i, r, s, o, a, u = pr(t),
                l = t === u,
                h = u ? lr : hr,
                c = t.parentNode;
            if (t === $i) return t;
            if (h.length || h.push(mr(t, 1), mr(t, 2), mr(t, 3)), n = u ? er : tr, u) l ? (s = -(r = gr(t)).e / r.a, o = -r.f / r.d, i = nr) : t.getBBox ? (r = t.getBBox(), i = (i = t.transform ? t.transform.baseVal : {}).numberOfItems ? i.numberOfItems > 1 ? function (t) {
                for (var e = new yr, n = 0; n < t.numberOfItems; n++) e.multiply(t.getItem(n).matrix);
                return e
            }(i) : i.getItem(0).matrix : nr, s = i.a * r.x + i.c * r.y, o = i.b * r.x + i.d * r.y) : (i = new yr, s = o = 0), e && "g" === t.tagName.toLowerCase() && (s = o = 0), (l ? u : c).appendChild(n), n.setAttribute("transform", "matrix(" + i.a + "," + i.b + "," + i.c + "," + i.d + "," + (i.e + s) + "," + (i.f + o) + ")");
            else {
                if (s = o = 0, rr)
                    for (i = t.offsetParent, r = t; r && (r = r.parentNode) && r !== i && r.parentNode;)($i.getComputedStyle(r)[or] + "").length > 4 && (s = r.offsetLeft, o = r.offsetTop, r = 0);
                if ("absolute" !== (a = $i.getComputedStyle(t)).position && "fixed" !== a.position)
                    for (i = t.offsetParent; c && c !== i;) s += c.scrollLeft || 0, o += c.scrollTop || 0, c = c.parentNode;
                (r = n.style).top = t.offsetTop - o + "px", r.left = t.offsetLeft - s + "px", r[or] = a[or], r[ar] = a[ar], r.position = "fixed" === a.position ? "fixed" : "absolute", t.parentNode.appendChild(n)
            }
            return n
        },
        vr = function (t, e, n, i, r, s, o) {
            return t.a = e, t.b = n, t.c = i, t.d = r, t.e = s, t.f = o, t
        },
        yr = function () {
            function t(t, e, n, i, r, s) {
                void 0 === t && (t = 1), void 0 === e && (e = 0), void 0 === n && (n = 0), void 0 === i && (i = 1), void 0 === r && (r = 0), void 0 === s && (s = 0), vr(this, t, e, n, i, r, s)
            }
            var e = t.prototype;
            return e.inverse = function () {
                var t = this.a,
                    e = this.b,
                    n = this.c,
                    i = this.d,
                    r = this.e,
                    s = this.f,
                    o = t * i - e * n || 1e-10;
                return vr(this, i / o, -e / o, -n / o, t / o, (n * s - i * r) / o, -(t * s - e * r) / o)
            }, e.multiply = function (t) {
                var e = this.a,
                    n = this.b,
                    i = this.c,
                    r = this.d,
                    s = this.e,
                    o = this.f,
                    a = t.a,
                    u = t.c,
                    l = t.b,
                    h = t.d,
                    c = t.e,
                    f = t.f;
                return vr(this, a * e + l * i, a * n + l * r, u * e + h * i, u * n + h * r, s + c * e + f * i, o + c * n + f * r)
            }, e.clone = function () {
                return new t(this.a, this.b, this.c, this.d, this.e, this.f)
            }, e.equals = function (t) {
                var e = this.a,
                    n = this.b,
                    i = this.c,
                    r = this.d,
                    s = this.e,
                    o = this.f;
                return e === t.a && n === t.b && i === t.c && r === t.d && s === t.e && o === t.f
            }, e.apply = function (t, e) {
                void 0 === e && (e = {});
                var n = t.x,
                    i = t.y,
                    r = this.a,
                    s = this.b,
                    o = this.c,
                    a = this.d,
                    u = this.e,
                    l = this.f;
                return e.x = n * r + i * o + u || 0, e.y = n * s + i * a + l || 0, e
            }, t
        }();
    /*!
     * matrix 3.10.4
     * https://greensock.com
     *
     * Copyright 2008-2022, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    function br(t, e, n, i) {
        if (!t || !t.parentNode || (Zi || ur(t)).documentElement === t) return new yr;
        var r = function (t) {
                for (var e, n; t && t !== Ki;)(n = t._gsap) && n.uncache && n.get(t, "x"), n && !n.scaleX && !n.scaleY && n.renderTransform && (n.scaleX = n.scaleY = 1e-4, n.renderTransform(1, n), e ? e.push(n) : e = [n]), t = t.parentNode;
                return e
            }(t),
            s = pr(t) ? lr : hr,
            o = _r(t, n),
            a = s[0].getBoundingClientRect(),
            u = s[1].getBoundingClientRect(),
            l = s[2].getBoundingClientRect(),
            h = o.parentNode,
            c = !i && dr(t),
            f = new yr((u.left - a.left) / 100, (u.top - a.top) / 100, (l.left - a.left) / 100, (l.top - a.top) / 100, a.left + (c ? 0 : fr()), a.top + (c ? 0 : cr()));
        if (h.removeChild(o), r)
            for (a = r.length; a--;)(u = r[a]).scaleX = u.scaleY = 0, u.renderTransform(1, u);
        return e ? f.inverse() : f
    }
    var xr, wr, Tr, Or, kr, Mr, Dr, Sr = 1,
        Cr = function (t, e) {
            return t.actions.forEach((function (t) {
                return t.vars[e] && t.vars[e](t)
            }))
        },
        Er = {},
        Ar = 180 / Math.PI,
        Pr = Math.PI / 180,
        Ir = {},
        Lr = {},
        Br = {},
        Rr = function (t) {
            return "string" == typeof t ? t.split(" ").join("").split(",") : t
        },
        zr = Rr("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"),
        Xr = Rr("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"),
        Yr = function (t) {
            return xr(t)[0] || console.warn("Element not found:", t)
        },
        Fr = function (t) {
            return Math.round(1e4 * t) / 1e4 || 0
        },
        Vr = function (t, e, n) {
            return t.forEach((function (t) {
                return t.classList[n](e)
            }))
        },
        Nr = {
            zIndex: 1,
            kill: 1,
            simple: 1,
            spin: 1,
            clearProps: 1,
            targets: 1,
            toggleClass: 1,
            onComplete: 1,
            onUpdate: 1,
            onInterrupt: 1,
            onStart: 1,
            delay: 1,
            repeat: 1,
            repeatDelay: 1,
            yoyo: 1,
            scale: 1,
            fade: 1,
            absolute: 1,
            props: 1,
            onEnter: 1,
            onLeave: 1,
            custom: 1,
            paused: 1,
            nested: 1,
            prune: 1,
            absoluteOnLeave: 1
        },
        qr = {
            zIndex: 1,
            simple: 1,
            clearProps: 1,
            scale: 1,
            absolute: 1,
            fitChild: 1,
            getVars: 1,
            props: 1
        },
        jr = function (t) {
            return t.replace(/([A-Z])/g, "-$1").toLowerCase()
        },
        Ur = function (t, e) {
            var n, i = {};
            for (n in t) e[n] || (i[n] = t[n]);
            return i
        },
        Wr = {},
        Hr = function (t) {
            var e = Wr[t] = Rr(t);
            return Br[t] = e.concat(Xr), e
        },
        Gr = function t(e, n, i) {
            void 0 === i && (i = 0);
            for (var r = e.parentNode, s = 1e3 * Math.pow(10, i) * (n ? -1 : 1), o = n ? 900 * -s : 0; e;) o += s, e = e.previousSibling;
            return r ? o + t(r, n, i + 1) : o
        },
        Qr = function (t, e, n) {
            return t.forEach((function (t) {
                return t.d = Gr(n ? t.element : t.t, e)
            })), t.sort((function (t, e) {
                return t.d - e.d
            })), t
        },
        Zr = function (t, e) {
            for (var n, i, r = t.element.style, s = t.css = t.css || [], o = e.length; o--;) i = r[n = e[o]] || r.getPropertyValue(n), s.push(i ? n : Lr[n] || (Lr[n] = jr(n)), i);
            return r
        },
        $r = function (t) {
            var e = t.css,
                n = t.element.style,
                i = 0;
            for (t.cache.uncache = 1; i < e.length; i += 2) e[i + 1] ? n[e[i]] = e[i + 1] : n.removeProperty(e[i])
        },
        Jr = function (t, e) {
            t.forEach((function (t) {
                return t.a.cache.uncache = 1
            })), e || t.finalStates.forEach($r)
        },
        Kr = "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","),
        ts = function (t, e, n) {
            var i, r, s, o = t.element,
                a = t.width,
                u = t.height,
                l = t.uncache,
                h = t.getProp,
                c = o.style,
                f = 4;
            if ("object" != typeof e && (e = t), Tr && 1 !== n) return Tr._abs.push({
                t: o,
                b: t,
                a: t,
                sd: 0
            }), Tr._final.push((function () {
                return t.cache.uncache = 1, $r(t)
            })), o;
            for (r = "none" === h("display"), t.isVisible && !r || (r && (Zr(t, ["display"]).display = e.display), t.matrix = e.matrix, t.width = a = t.width || e.width, t.height = u = t.height || e.height), Zr(t, Kr), s = window.getComputedStyle(o); f--;) c[Kr[f]] = s[Kr[f]];
            if (c.gridArea = "1 / 1 / 1 / 1", c.transition = "none", c.position = "absolute", c.width = a + "px", c.height = u + "px", c.top || (c.top = "0px"), c.left || (c.left = "0px"), l) i = new vs(o);
            else if ((i = Ur(t, Ir)).position = "absolute", t.simple) {
                var p = o.getBoundingClientRect();
                i.matrix = new yr(1, 0, 0, 1, p.left + fr(), p.top + cr())
            } else i.matrix = br(o, !1, !1, !0);
            return i = as(i, t, !0), t.x = Mr(i.x, .01), t.y = Mr(i.y, .01), o
        },
        es = function (t, e) {
            return !0 !== e && (e = xr(e), t = t.filter((function (t) {
                if (-1 !== e.indexOf((t.sd < 0 ? t.b : t.a).element)) return !0;
                t.t._gsap.renderTransform(1), t.t.style.width = t.b.width + "px", t.t.style.height = t.b.height + "px"
            }))), t
        },
        ns = function (t) {
            return Qr(t, !0).forEach((function (t) {
                return (t.a.isVisible || t.b.isVisible) && ts(t.sd < 0 ? t.b : t.a, t.b, 1)
            }))
        },
        is = function (t, e, n, i) {
            return t instanceof vs ? t : t instanceof _s ? function (t, e) {
                return e && t.idLookup[is(e).id] || t.elementStates[0]
            }(t, i) : new vs("string" == typeof t ? Yr(t) || console.warn(t + " not found") : t, e, n)
        },
        rs = function (t, e) {
            var n, i = t.style || t;
            for (n in e) i[n] = e[n]
        },
        ss = function (t) {
            return t.map((function (t) {
                return t.element
            }))
        },
        os = function (t, e, n) {
            return t && e.length && n.add(t(ss(e), n, new _s(e, 0, !0)), 0)
        },
        as = function (t, e, n, i, r, s) {
            var o, a, u, l, h, c, f, p = t.element,
                d = t.cache,
                m = t.parent,
                g = t.x,
                _ = t.y,
                v = e.width,
                y = e.height,
                b = e.scaleX,
                x = e.scaleY,
                w = e.rotation,
                T = e.bounds,
                O = s && p.style.cssText,
                k = s && p.getBBox && p.getAttribute("transform"),
                M = t,
                D = e.matrix,
                S = D.e,
                C = D.f,
                E = t.bounds.width !== T.width || t.bounds.height !== T.height || t.scaleX !== b || t.scaleY !== x || t.rotation !== w,
                A = !E && t.simple && e.simple && !r;
            return A || !m ? (b = x = 1, w = o = 0) : (h = function (t) {
                var e = t._gsap || wr.core.getCache(t);
                return e.gmCache === wr.ticker.frame ? e.gMatrix : (e.gmCache = wr.ticker.frame, e.gMatrix = br(t, !0, !1, !0))
            }(m), c = h.clone().multiply(e.ctm ? e.matrix.clone().multiply(e.ctm) : e.matrix), w = Fr(Math.atan2(c.b, c.a) * Ar), o = Fr(Math.atan2(c.c, c.d) * Ar + w) % 360, b = Math.sqrt(Math.pow(c.a, 2) + Math.pow(c.b, 2)), x = Math.sqrt(Math.pow(c.c, 2) + Math.pow(c.d, 2)) * Math.cos(o * Pr), r && (r = xr(r)[0], l = wr.getProperty(r), f = r.getBBox && "function" == typeof r.getBBox && r.getBBox(), M = {
                scaleX: l("scaleX"),
                scaleY: l("scaleY"),
                width: f ? f.width : Math.ceil(parseFloat(l("width", "px"))),
                height: f ? f.height : parseFloat(l("height", "px"))
            }), d.rotation = w + "deg", d.skewX = o + "deg"), n ? (b *= v !== M.width && M.width ? v / M.width : 1, x *= y !== M.height && M.height ? y / M.height : 1, d.scaleX = b, d.scaleY = x) : (v = Mr(v * b / M.scaleX, 0), y = Mr(y * x / M.scaleY, 0), p.style.width = v + "px", p.style.height = y + "px"), i && rs(p, e.props), A || !m ? (g += S - t.matrix.e, _ += C - t.matrix.f) : E || m !== e.parent ? (d.renderTransform(1, d), c = br(r || p, !1, !1, !0), a = h.apply({
                x: c.e,
                y: c.f
            }), g += (u = h.apply({
                x: S,
                y: C
            })).x - a.x, _ += u.y - a.y) : (h.e = h.f = 0, g += (u = h.apply({
                x: S - t.matrix.e,
                y: C - t.matrix.f
            })).x, _ += u.y), g = Mr(g, .02), _ = Mr(_, .02), !s || s instanceof vs ? (d.x = g + "px", d.y = _ + "px", d.renderTransform(1, d)) : (p.style.cssText = O, p.getBBox && p.setAttribute("transform", k || ""), d.uncache = 1), s && (s.x = g, s.y = _, s.rotation = w, s.skewX = o, n ? (s.scaleX = b, s.scaleY = x) : (s.width = v, s.height = y)), s || d
        },
        us = function (t, e) {
            return t instanceof _s ? t : new _s(t, e)
        },
        ls = function (t, e, n) {
            var i = t.idLookup[n],
                r = t.alt[n];
            return !r.isVisible || (e.getElementState(r.element) || r).isVisible && i.isVisible ? i : r
        },
        hs = [],
        cs = "width,height,overflowX,overflowY".split(","),
        fs = function (t) {
            if (t !== Dr) {
                var e = kr.style,
                    n = kr.clientWidth === window.outerWidth,
                    i = kr.clientHeight === window.outerHeight,
                    r = 4;
                if (t && (n || i)) {
                    for (; r--;) hs[r] = e[cs[r]];
                    n && (e.width = kr.clientWidth + "px", e.overflowY = "hidden"), i && (e.height = kr.clientHeight + "px", e.overflowX = "hidden"), Dr = t
                } else if (Dr) {
                    for (; r--;) hs[r] ? e[cs[r]] = hs[r] : e.removeProperty(jr(cs[r]));
                    Dr = t
                }
            }
        },
        ps = function (t, e, n, i) {
            t instanceof _s && e instanceof _s || console.warn("Not a valid state object.");
            var r, s, o, a, u, l, h, c, f, p, d, m, g, _, v, y = n = n || {},
                b = y.clearProps,
                x = y.onEnter,
                w = y.onLeave,
                T = y.absolute,
                O = y.absoluteOnLeave,
                k = y.custom,
                M = y.delay,
                D = y.paused,
                S = y.repeat,
                C = y.repeatDelay,
                E = y.yoyo,
                A = y.toggleClass,
                P = y.nested,
                I = y.zIndex,
                L = y.scale,
                B = y.fade,
                R = y.stagger,
                z = y.spin,
                X = y.prune,
                Y = ("props" in n ? n : t).props,
                F = Ur(n, Nr),
                V = wr.timeline({
                    delay: M,
                    paused: D,
                    repeat: S,
                    repeatDelay: C,
                    yoyo: E
                }),
                N = F,
                q = [],
                j = [],
                U = [],
                W = [],
                H = !0 === z ? 1 : z || 0,
                G = "function" == typeof z ? z : function () {
                    return H
                },
                Q = t.interrupted || e.interrupted,
                Z = V[1 !== i ? "to" : "from"];
            for (s in e.idLookup) d = e.alt[s] ? ls(e, t, s) : e.idLookup[s], u = d.element, p = t.idLookup[s], t.alt[s] && u === p.element && (t.alt[s].isVisible || !d.isVisible) && (p = t.alt[s]), p ? (l = {
                t: u,
                b: p,
                a: d,
                sd: p.element === u ? 0 : d.isVisible ? 1 : -1
            }, U.push(l), l.sd && (l.sd < 0 && (l.b = d, l.a = p), Q && Zr(l.b, Y ? Br[Y] : Xr), B && U.push(l.swap = {
                t: p.element,
                b: l.b,
                a: l.a,
                sd: -l.sd,
                swap: l
            })), u._flip = p.element._flip = Tr ? Tr.timeline : V) : d.isVisible && (U.push({
                t: u,
                b: Ur(d, {
                    isVisible: 1
                }),
                a: d,
                sd: 0,
                entering: 1
            }), u._flip = Tr ? Tr.timeline : V);
            (Y && (Wr[Y] || Hr(Y)).forEach((function (t) {
                return F[t] = function (e) {
                    return U[e].a.props[t]
                }
            })), U.finalStates = f = [], m = function () {
                for (Qr(U), fs(!0), a = 0; a < U.length; a++) l = U[a], g = l.a, _ = l.b, !X || g.isDifferent(_) || l.entering ? (u = l.t, P && !(l.sd < 0) && a && (g.matrix = br(u, !1, !1, !0)), l.sd || _.isVisible && g.isVisible ? (l.sd < 0 ? (h = new vs(u, Y, t.simple), as(h, g, L, 0, 0, h), h.matrix = br(u, !1, !1, !0), h.css = l.b.css, l.a = g = h, B && (u.style.opacity = Q ? _.opacity : g.opacity), R && W.push(u)) : l.sd > 0 && B && (u.style.opacity = Q ? g.opacity - _.opacity : "0"), as(g, _, L, Y)) : _.isVisible !== g.isVisible && (_.isVisible ? g.isVisible || (_.css = g.css, j.push(_), U.splice(a--, 1), T && P && as(g, _, L, Y)) : (g.isVisible && q.push(g), U.splice(a--, 1))), L || (u.style.maxWidth = Math.max(g.width, _.width) + "px", u.style.maxHeight = Math.max(g.height, _.height) + "px", u.style.minWidth = Math.min(g.width, _.width) + "px", u.style.minHeight = Math.min(g.height, _.height) + "px"), P && A && u.classList.add(A)) : U.splice(a--, 1), f.push(g);
                var e;
                if (A && (e = f.map((function (t) {
                        return t.element
                    })), P && e.forEach((function (t) {
                        return t.classList.remove(A)
                    }))), fs(!1), L ? (F.scaleX = function (t) {
                        return U[t].a.scaleX
                    }, F.scaleY = function (t) {
                        return U[t].a.scaleY
                    }) : (F.width = function (t) {
                        return U[t].a.width + "px"
                    }, F.height = function (t) {
                        return U[t].a.height + "px"
                    }, F.autoRound = n.autoRound || !1), F.x = function (t) {
                        return U[t].a.x + "px"
                    }, F.y = function (t) {
                        return U[t].a.y + "px"
                    }, F.rotation = function (t) {
                        return U[t].a.rotation + (z ? 360 * G(t, c[t], c) : 0)
                    }, F.skewX = function (t) {
                        return U[t].a.skewX
                    }, c = U.map((function (t) {
                        return t.t
                    })), (I || 0 === I) && (F.modifiers = {
                        zIndex: function () {
                            return I
                        }
                    }, F.zIndex = I, F.immediateRender = !1 !== n.immediateRender), B && (F.opacity = function (t) {
                        return U[t].sd < 0 ? 0 : U[t].sd > 0 ? U[t].a.opacity : "+=0"
                    }), W.length) {
                    R = wr.utils.distribute(R);
                    var i = c.slice(W.length);
                    F.stagger = function (t, e) {
                        return R(~W.indexOf(e) ? c.indexOf(U[t].swap.t) : t, e, i)
                    }
                }
                if (zr.forEach((function (t) {
                        return n[t] && V.eventCallback(t, n[t], n[t + "Params"])
                    })), k && c.length)
                    for (s in N = Ur(F, Nr), "scale" in k && (k.scaleX = k.scaleY = k.scale, delete k.scale), k)(r = Ur(k[s], qr))[s] = F[s], !("duration" in r) && "duration" in F && (r.duration = F.duration), r.stagger = F.stagger, Z.call(V, c, r, 0), delete N[s];
                (c.length || j.length || q.length) && (A && V.add((function () {
                    return Vr(e, A, V._zTime < 0 ? "remove" : "add")
                }), 0) && !D && Vr(e, A, "add"), c.length && Z.call(V, c, N, 0)), os(x, q, V), os(w, j, V);
                var p = Tr && Tr.timeline;
                p && (p.add(V, 0), Tr._final.push((function () {
                    return Jr(U, !b)
                }))), o = V.duration(), V.call((function () {
                    var t = V.time() >= o;
                    t && !p && Jr(U, !b), A && Vr(e, A, t ? "remove" : "add")
                }))
            }, O && (T = U.filter((function (t) {
                return !t.sd && !t.a.isVisible && t.b.isVisible
            })).map((function (t) {
                return t.a.element
            }))), Tr) ? (T && (v = Tr._abs).push.apply(v, es(U, T)), Tr._run.push(m)) : (T && ns(es(U, T)), m());
            return Tr ? Tr.timeline : V
        },
        ds = function t(e) {
            e.vars.onInterrupt && e.vars.onInterrupt.apply(e, e.vars.onInterruptParams || []), e.getChildren(!0, !1, !0).forEach(t)
        },
        ms = function (t, e) {
            if (t && t.progress() < 1 && !t.paused()) return e && (ds(t), e < 2 && t.progress(1), t.kill()), !0
        },
        gs = function (t) {
            for (var e, n = t.idLookup = {}, i = t.alt = {}, r = t.elementStates, s = r.length; s--;) n[(e = r[s]).id] ? i[e.id] = e : n[e.id] = e
        },
        _s = function () {
            function t(t, e, n) {
                if (this.props = e && e.props, this.simple = !(!e || !e.simple), n) this.targets = ss(t), this.elementStates = t, gs(this);
                else {
                    this.targets = xr(t);
                    var i = e && (!1 === e.kill || e.batch && !e.kill);
                    Tr && !i && Tr._kill.push(this), this.update(i || !!Tr)
                }
            }
            var e = t.prototype;
            return e.update = function (t) {
                var e = this;
                return this.elementStates = this.targets.map((function (t) {
                    return new vs(t, e.props, e.simple)
                })), gs(this), this.interrupt(t), this.recordInlineStyles(), this
            }, e.clear = function () {
                return this.targets.length = this.elementStates.length = 0, gs(this), this
            }, e.fit = function (t, e, n) {
                for (var i, r, s = Qr(this.elementStates.slice(0), !1, !0), o = (t || this).idLookup, a = 0; a < s.length; a++) i = s[a], n && (i.matrix = br(i.element, !1, !1, !0)), (r = o[i.id]) && as(i, r, e, !0, 0, i), i.matrix = br(i.element, !1, !1, !0);
                return this
            }, e.getProperty = function (t, e) {
                var n = this.getElementState(t) || Ir;
                return (e in n ? n : n.props || Ir)[e]
            }, e.add = function (t) {
                for (var e, n, i, r = t.targets.length, s = this.idLookup, o = this.alt; r--;)(i = s[(n = t.elementStates[r]).id]) && (n.element === i.element || o[n.id] && o[n.id].element === n.element) ? (e = this.elementStates.indexOf(n.element === i.element ? i : o[n.id]), this.targets.splice(e, 1, t.targets[r]), this.elementStates.splice(e, 1, n)) : (this.targets.push(t.targets[r]), this.elementStates.push(n));
                return t.interrupted && (this.interrupted = !0), t.simple || (this.simple = !1), gs(this), this
            }, e.compare = function (t) {
                var e, n, i, r, s, o, a, u, l = t.idLookup,
                    h = this.idLookup,
                    c = [],
                    f = [],
                    p = [],
                    d = [],
                    m = [],
                    g = t.alt,
                    _ = this.alt,
                    v = function (t, e, n) {
                        return (t.isVisible !== e.isVisible ? t.isVisible ? p : d : t.isVisible ? f : c).push(n) && m.push(n)
                    },
                    y = function (t, e, n) {
                        return m.indexOf(n) < 0 && v(t, e, n)
                    };
                for (i in l) s = g[i], o = _[i], r = (e = s ? ls(t, this, i) : l[i]).element, n = h[i], o ? (u = n.isVisible || !o.isVisible && r === n.element ? n : o, (a = !s || e.isVisible || s.isVisible || u.element !== s.element ? e : s).isVisible && u.isVisible && a.element !== u.element ? ((a.isDifferent(u) ? f : c).push(a.element, u.element), m.push(a.element, u.element)) : v(a, u, a.element), s && a.element === s.element && (s = l[i]), y(a.element !== n.element && s ? s : a, n, n.element), y(s && s.element === o.element ? s : a, o, o.element), s && y(s, o.element === s.element ? o : n, s.element)) : (n ? n.isDifferent(e) ? v(e, n, r) : c.push(r) : p.push(r), s && y(s, n, s.element));
                for (i in h) l[i] || (d.push(h[i].element), _[i] && d.push(_[i].element));
                return {
                    changed: f,
                    unchanged: c,
                    enter: p,
                    leave: d
                }
            }, e.recordInlineStyles = function () {
                for (var t = Br[this.props] || Xr, e = this.elementStates.length; e--;) Zr(this.elementStates[e], t)
            }, e.interrupt = function (t) {
                var e = this,
                    n = [];
                this.targets.forEach((function (i) {
                    var r = i._flip,
                        s = ms(r, t ? 0 : 1);
                    t && s && n.indexOf(r) < 0 && r.add((function () {
                        return e.updateVisibility()
                    })), s && n.push(r)
                })), !t && n.length && this.updateVisibility(), this.interrupted || (this.interrupted = !!n.length)
            }, e.updateVisibility = function () {
                this.elementStates.forEach((function (t) {
                    var e = t.element.getBoundingClientRect();
                    t.isVisible = !!(e.width || e.height || e.top || e.left), t.uncache = 1
                }))
            }, e.getElementState = function (t) {
                return this.elementStates[this.targets.indexOf(Yr(t))]
            }, e.makeAbsolute = function () {
                return Qr(this.elementStates.slice(0), !0, !0).map(ts)
            }, t
        }(),
        vs = function () {
            function t(t, e, n) {
                this.element = t, this.update(e, n)
            }
            var e = t.prototype;
            return e.isDifferent = function (t) {
                var e = this.bounds,
                    n = t.bounds;
                return e.top !== n.top || e.left !== n.left || e.width !== n.width || e.height !== n.height || !this.matrix.equals(t.matrix) || this.opacity !== t.opacity || this.props && t.props && JSON.stringify(this.props) !== JSON.stringify(t.props)
            }, e.update = function (t, e) {
                var n, i, r = this,
                    s = r.element,
                    o = wr.getProperty(s),
                    a = wr.core.getCache(s),
                    u = s.getBoundingClientRect(),
                    l = s.getBBox && "function" == typeof s.getBBox && "svg" !== s.nodeName.toLowerCase() && s.getBBox(),
                    h = e ? new yr(1, 0, 0, 1, u.left + fr(), u.top + cr()) : br(s, !1, !1, !0);
                r.getProp = o, r.element = s, r.id = ((i = (n = s).getAttribute("data-flip-id")) || n.setAttribute("data-flip-id", i = "auto-" + Sr++), i), r.matrix = h, r.cache = a, r.bounds = u, r.isVisible = !!(u.width || u.height || u.left || u.top), r.display = o("display"), r.position = o("position"), r.parent = s.parentNode, r.x = o("x"), r.y = o("y"), r.scaleX = a.scaleX, r.scaleY = a.scaleY, r.rotation = o("rotation"), r.skewX = o("skewX"), r.opacity = o("opacity"), r.width = l ? l.width : Mr(o("width", "px"), .04), r.height = l ? l.height : Mr(o("height", "px"), .04), t && function (t, e) {
                    for (var n = wr.getProperty(t.element, null, "native"), i = t.props = {}, r = e.length; r--;) i[e[r]] = (n(e[r]) + "").trim();
                    i.zIndex && (i.zIndex = parseFloat(i.zIndex) || 0)
                }(r, Wr[t] || Hr(t)), r.ctm = s.getCTM && "svg" === s.nodeName.toLowerCase() && gr(s).inverse(), r.simple = e || 1 === Fr(h.a) && !Fr(h.b) && !Fr(h.c) && 1 === Fr(h.d), r.uncache = 0
            }, t
        }(),
        ys = function () {
            function t(t, e) {
                this.vars = t, this.batch = e, this.states = [], this.timeline = e.timeline
            }
            var e = t.prototype;
            return e.getStateById = function (t) {
                for (var e = this.states.length; e--;)
                    if (this.states[e].idLookup[t]) return this.states[e]
            }, e.kill = function () {
                this.batch.remove(this)
            }, t
        }(),
        bs = function () {
            function t(t) {
                this.id = t, this.actions = [], this._kill = [], this._final = [], this._abs = [], this._run = [], this.data = {}, this.state = new _s, this.timeline = wr.timeline()
            }
            var e = t.prototype;
            return e.add = function (t) {
                var e = this.actions.filter((function (e) {
                    return e.vars === t
                }));
                return e.length ? e[0] : (e = new ys("function" == typeof t ? {
                    animate: t
                } : t, this), this.actions.push(e), e)
            }, e.remove = function (t) {
                var e = this.actions.indexOf(t);
                return e >= 0 && this.actions.splice(e, 1), this
            }, e.getState = function (t) {
                var e = this,
                    n = Tr,
                    i = Or;
                return Tr = this, this.state.clear(), this._kill.length = 0, this.actions.forEach((function (n) {
                    n.vars.getState && (n.states.length = 0, Or = n, n.state = n.vars.getState(n)), t && n.states.forEach((function (t) {
                        return e.state.add(t)
                    }))
                })), Or = i, Tr = n, this.killConflicts(), this
            }, e.animate = function () {
                var t, e, n = this,
                    i = Tr,
                    r = this.timeline,
                    s = this.actions.length;
                for (Tr = this, r.clear(), this._abs.length = this._final.length = this._run.length = 0, this.actions.forEach((function (t) {
                        t.vars.animate && t.vars.animate(t);
                        var e, n, i = t.vars.onEnter,
                            r = t.vars.onLeave,
                            s = t.targets;
                        s && s.length && (i || r) && (e = new _s, t.states.forEach((function (t) {
                            return e.add(t)
                        })), (n = e.compare(xs.getState(s))).enter.length && i && i(n.enter), n.leave.length && r && r(n.leave))
                    })), ns(this._abs), this._run.forEach((function (t) {
                        return t()
                    })), e = r.duration(), t = this._final.slice(0), r.add((function () {
                        e <= r.time() && (t.forEach((function (t) {
                            return t()
                        })), Cr(n, "onComplete"))
                    })), Tr = i; s--;) this.actions[s].vars.once && this.actions[s].kill();
                return Cr(this, "onStart"), r.restart(), this
            }, e.loadState = function (t) {
                t || (t = function () {
                    return 0
                });
                var e = [];
                return this.actions.forEach((function (n) {
                    if (n.vars.loadState) {
                        var i, r = function r(s) {
                            s && (n.targets = s), ~(i = e.indexOf(r)) && (e.splice(i, 1), e.length || t())
                        };
                        e.push(r), n.vars.loadState(r)
                    }
                })), e.length || t(), this
            }, e.setState = function () {
                return this.actions.forEach((function (t) {
                    return t.targets = t.vars.setState && t.vars.setState(t)
                })), this
            }, e.killConflicts = function (t) {
                return this.state.interrupt(t), this._kill.forEach((function (e) {
                    return e.interrupt(t)
                })), this
            }, e.run = function (t, e) {
                var n = this;
                return this !== Tr && (t || this.getState(e), this.loadState((function () {
                    n._killed || (n.setState(), n.animate())
                }))), this
            }, e.clear = function (t) {
                this.state.clear(), t || (this.actions.length = 0)
            }, e.getStateById = function (t) {
                for (var e, n = this.actions.length; n--;)
                    if (e = this.actions[n].getStateById(t)) return e;
                return this.state.idLookup[t] && this.state
            }, e.kill = function () {
                this._killed = 1, this.clear(), delete Er[this.id]
            }, t
        }(),
        xs = function () {
            function t() {}
            return t.getState = function (e, n) {
                var i = us(e, n);
                return Or && Or.states.push(i), n && n.batch && t.batch(n.batch).state.add(i), i
            }, t.from = function (t, e) {
                return "clearProps" in (e = e || {}) || (e.clearProps = !0), ps(t, us(e.targets || t.targets, {
                    props: e.props || t.props,
                    simple: e.simple,
                    kill: !!e.kill
                }), e, -1)
            }, t.to = function (t, e) {
                return ps(t, us(e.targets || t.targets, {
                    props: e.props || t.props,
                    simple: e.simple,
                    kill: !!e.kill
                }), e, 1)
            }, t.fromTo = function (t, e, n) {
                return ps(t, e, n)
            }, t.fit = function (t, e, n) {
                var i = n ? Ur(n, qr) : {},
                    r = n || i,
                    s = r.absolute,
                    o = r.scale,
                    a = r.getVars,
                    u = r.props,
                    l = r.runBackwards,
                    h = r.onComplete,
                    c = r.simple,
                    f = n && n.fitChild && Yr(n.fitChild),
                    p = is(e, u, c, t),
                    d = is(t, 0, c, p),
                    m = u ? Br[u] : Xr;
                return u && rs(i, p.props), l && (Zr(d, m), "immediateRender" in i || (i.immediateRender = !0), i.onComplete = function () {
                    $r(d), h && h.apply(this, arguments)
                }), s && ts(d, p), i = as(d, p, o || f, u, f, i.duration || a ? i : 0), a ? i : i.duration ? wr.to(d.element, i) : null
            }, t.makeAbsolute = function (t, e) {
                return (t instanceof _s ? t : new _s(t, e)).makeAbsolute()
            }, t.batch = function (t) {
                return t || (t = "default"), Er[t] || (Er[t] = new bs(t))
            }, t.killFlipsOf = function (t, e) {
                (t instanceof _s ? t.targets : xr(t)).forEach((function (t) {
                    return t && ms(t._flip, !1 !== e ? 1 : 2)
                }))
            }, t.isFlipping = function (e) {
                var n = t.getByTarget(e);
                return !!n && n.isActive()
            }, t.getByTarget = function (t) {
                return (Yr(t) || Ir)._flip
            }, t.getElementState = function (t, e) {
                return new vs(Yr(t), e)
            }, t.convertCoordinates = function (t, e, n) {
                var i = br(e, !0, !0).multiply(br(t));
                return n ? i.apply(n) : i
            }, t.register = function (t) {
                if (kr = "undefined" != typeof document && document.body) {
                    wr = t, ur(kr), xr = wr.utils.toArray;
                    var e = wr.utils.snap(.1);
                    Mr = function (t, n) {
                        return e(parseFloat(t) + n)
                    }
                }
            }, t
        }();

    function ws(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }
    xs.version = "3.10.4", "undefined" != typeof window && window.gsap && window.gsap.registerPlugin(xs);
    /*!
     * Observer 3.10.4
     * https://greensock.com
     *
     * @license Copyright 2008-2022, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var Ts, Os, ks, Ms, Ds, Ss, Cs, Es, As, Ps, Is, Ls, Bs = function () {
            return Ts || "undefined" != typeof window && (Ts = window.gsap) && Ts.registerPlugin && Ts
        },
        Rs = 1,
        zs = [],
        Xs = [],
        Ys = [],
        Fs = Date.now,
        Vs = function (t, e) {
            return e
        },
        Ns = function (t) {
            return !!~Ps.indexOf(t)
        },
        qs = function (t, e, n, i, r) {
            return t.addEventListener(e, n, {
                passive: !i,
                capture: !!r
            })
        },
        js = function (t, e, n, i) {
            return t.removeEventListener(e, n, !!i)
        },
        Us = "scrollLeft",
        Ws = "scrollTop",
        Hs = function () {
            return Is && Is.isPressed || Xs.cache++
        },
        Gs = function (t, e) {
            var n = function n(i) {
                if (i || 0 === i) {
                    Rs && (ks.history.scrollRestoration = "manual");
                    var r = Is && Is.isPressed;
                    i = n.v = Math.round(i) || (Is && Is.iOS ? 1 : 0), t(i), n.cacheID = Xs.cache, r && Vs("ss", i)
                } else(e || Xs.cache !== n.cacheID || Vs("ref")) && (n.cacheID = Xs.cache, n.v = t());
                return n.v + n.offset
            };
            return n.offset = 0, t && n
        },
        Qs = {
            s: Us,
            p: "left",
            p2: "Left",
            os: "right",
            os2: "Right",
            d: "width",
            d2: "Width",
            a: "x",
            sc: Gs((function (t) {
                return arguments.length ? ks.scrollTo(t, Zs.sc()) : ks.pageXOffset || Ms.scrollLeft || Ds.scrollLeft || Ss.scrollLeft || 0
            }))
        },
        Zs = {
            s: Ws,
            p: "top",
            p2: "Top",
            os: "bottom",
            os2: "Bottom",
            d: "height",
            d2: "Height",
            a: "y",
            op: Qs,
            sc: Gs((function (t) {
                return arguments.length ? ks.scrollTo(Qs.sc(), t) : ks.pageYOffset || Ms.scrollTop || Ds.scrollTop || Ss.scrollTop || 0
            }))
        },
        $s = function (t, e) {
            var n = e.s,
                i = e.sc,
                r = Xs.indexOf(t),
                s = i === Zs.sc ? 1 : 2;
            return !~r && (r = Xs.push(t) - 1), Xs[r + s] || (Xs[r + s] = Gs(function (t, e) {
                return ~Ys.indexOf(t) && Ys[Ys.indexOf(t) + 1][e]
            }(t, n), !0) || (Ns(t) ? i : Gs((function (e) {
                return arguments.length ? t[n] = e : t[n]
            }))))
        },
        Js = function (t, e, n) {
            var i = t,
                r = t,
                s = Fs(),
                o = s,
                a = e || 50,
                u = Math.max(500, 3 * a),
                l = function (t, e) {
                    var u = Fs();
                    e || u - s > a ? (r = i, i = t, o = s, s = u) : n ? i += t : i = r + (t - r) / (u - o) * (s - o)
                };
            return {
                update: l,
                reset: function () {
                    r = i = n ? 0 : i, o = s = 0
                },
                getVelocity: function (t) {
                    var e = o,
                        a = r,
                        h = Fs();
                    return (t || 0 === t) && t !== i && l(t), s === o || h - o > u ? 0 : (i + (n ? a : -a)) / ((n ? h : s) - e) * 1e3
                }
            }
        },
        Ks = function (t, e) {
            return e && !t._gsapAllow && t.preventDefault(), t.changedTouches ? t.changedTouches[0] : t
        },
        to = function (t) {
            var e = Math.max.apply(Math, t),
                n = Math.min.apply(Math, t);
            return Math.abs(e) >= Math.abs(n) ? e : n
        },
        eo = function () {
            var t, e, n, i;
            (As = Ts.core.globals().ScrollTrigger) && As.core && (t = As.core, e = t.bridge || {}, n = t._scrollers, i = t._proxies, n.push.apply(n, Xs), i.push.apply(i, Ys), Xs = n, Ys = i, Vs = function (t, n) {
                return e[t](n)
            })
        },
        no = function (t) {
            return (Ts = t || Bs()) && "undefined" != typeof document && document.body && (ks = window, Ms = document, Ds = Ms.documentElement, Ss = Ms.body, Ps = [ks, Ms, Ds, Ss], Ts.utils.clamp, Es = "onpointerenter" in Ss ? "pointer" : "mouse", Cs = io.isTouch = ks.matchMedia && ks.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in ks || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, Ls = io.eventTypes = ("ontouchstart" in Ds ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in Ds ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout((function () {
                return Rs = 0
            }), 500), eo(), Os = 1), Os
        };
    Qs.op = Zs, Xs.cache = 0;
    var io = function () {
        function t(t) {
            this.init(t)
        }
        var e, n, i;
        return t.prototype.init = function (t) {
            Os || no(Ts) || console.warn("Please gsap.registerPlugin(Observer)"), As || eo();
            var e, n = t.tolerance,
                i = t.dragMinimum,
                r = t.type,
                s = t.target,
                o = t.lineHeight,
                a = t.debounce,
                u = t.preventDefault,
                l = t.onStop,
                h = t.onStopDelay,
                c = t.ignore,
                f = t.wheelSpeed,
                p = t.event,
                d = t.onDragStart,
                m = t.onDragEnd,
                g = t.onDrag,
                _ = t.onPress,
                v = t.onRelease,
                y = t.onRight,
                b = t.onLeft,
                x = t.onUp,
                w = t.onDown,
                T = t.onChangeX,
                O = t.onChangeY,
                k = t.onChange,
                M = t.onToggleX,
                D = t.onToggleY,
                S = t.onHover,
                C = t.onHoverEnd,
                E = t.onMove,
                A = t.ignoreCheck,
                P = t.isNormalizer,
                I = t.onGestureStart,
                L = t.onGestureEnd,
                B = t.onWheel,
                R = t.onEnable,
                z = t.onDisable,
                X = t.onClick,
                Y = t.scrollSpeed,
                F = t.capture,
                V = t.allowClicks,
                N = t.lockAxis,
                q = t.onLockAxis;
            this.target = (e = s, s = Ts.utils.toArray(e)[0] || ("string" == typeof e && !1 !== Ts.config().nullTargetWarn ? console.warn("Element not found:", e) : null) || Ds), this.vars = t, c && (c = Ts.utils.toArray(c)), n = n || 0, i = i || 0, f = f || 1, Y = Y || 1, r = r || "wheel,touch,pointer", a = !1 !== a, o || (o = parseFloat(ks.getComputedStyle(Ss).lineHeight) || 22);
            var j, U, W, H, G, Q, Z, $ = this,
                J = 0,
                K = 0,
                tt = $s(s, Qs),
                et = $s(s, Zs),
                nt = tt(),
                it = et(),
                rt = ~r.indexOf("touch") && !~r.indexOf("pointer") && "pointerdown" === Ls[0],
                st = Ns(s),
                ot = s.ownerDocument || Ms,
                at = [0, 0, 0],
                ut = [0, 0, 0],
                lt = 0,
                ht = function () {
                    return lt = Fs()
                },
                ct = function (t, e) {
                    return ($.event = t) && c && ~c.indexOf(t.target) || e && rt && "touch" !== t.pointerType || A && A(t, e)
                },
                ft = function () {
                    var t = $.deltaX = to(at),
                        e = $.deltaY = to(ut),
                        i = Math.abs(t) >= n,
                        r = Math.abs(e) >= n;
                    k && (i || r) && k($, t, e, at, ut), i && (y && $.deltaX > 0 && y($), b && $.deltaX < 0 && b($), T && T($), M && $.deltaX < 0 != J < 0 && M($), J = $.deltaX, at[0] = at[1] = at[2] = 0), r && (w && $.deltaY > 0 && w($), x && $.deltaY < 0 && x($), O && O($), D && $.deltaY < 0 != K < 0 && D($), K = $.deltaY, ut[0] = ut[1] = ut[2] = 0), (H || W) && (E && E($), q && Q && q($), W && (g($), W = !1), H = Q = !1), G && (B($), G = !1), j = 0
                },
                pt = function (t, e, n) {
                    at[n] += t, ut[n] += e, $._vx.update(t), $._vy.update(e), a ? j || (j = requestAnimationFrame(ft)) : ft()
                },
                dt = function (t, e) {
                    "y" !== Z && (at[2] += t, $._vx.update(t, !0)), "x" !== Z && (ut[2] += e, $._vy.update(e, !0)), N && !Z && ($.axis = Z = Math.abs(t) > Math.abs(e) ? "x" : "y", Q = !0), a ? j || (j = requestAnimationFrame(ft)) : ft()
                },
                mt = function (t) {
                    if (!ct(t, 1)) {
                        var e = (t = Ks(t, u)).clientX,
                            n = t.clientY,
                            r = e - $.x,
                            s = n - $.y,
                            o = $.isDragging;
                        $.x = e, $.y = n, (o || Math.abs($.startX - e) >= i || Math.abs($.startY - n) >= i) && (g && (W = !0), o || ($.isDragging = !0), dt(r, s), o || d && d($))
                    }
                },
                gt = $.onPress = function (t) {
                    ct(t, 1) || ($.axis = Z = null, U.pause(), $.isPressed = !0, t = Ks(t), J = K = 0, $.startX = $.x = t.clientX, $.startY = $.y = t.clientY, $._vx.reset(), $._vy.reset(), qs(P ? s : ot, Ls[1], mt, u, !0), $.deltaX = $.deltaY = 0, _ && _($))
                },
                _t = function (t) {
                    if (!ct(t, 1)) {
                        js(P ? s : ot, Ls[1], mt, !0);
                        var e = $.isDragging && (Math.abs($.x - $.startX) > 3 || Math.abs($.y - $.startY) > 3),
                            n = Ks(t);
                        e || ($._vx.reset(), $._vy.reset(), u && V && Ts.delayedCall(.08, (function () {
                            if (Fs() - lt > 300 && !t.defaultPrevented)
                                if (t.target.click) t.target.click();
                                else if (ot.createEvent) {
                                var e = ot.createEvent("MouseEvents");
                                e.initMouseEvent("click", !0, !0, ks, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(e)
                            }
                        }))), $.isDragging = $.isGesturing = $.isPressed = !1, l && !P && U.restart(!0), m && e && m($), v && v($, e)
                    }
                },
                vt = function (t) {
                    return t.touches && t.touches.length > 1 && ($.isGesturing = !0) && I(t, $.isDragging)
                },
                yt = function () {
                    return $.isGesturing = !1, L($)
                },
                bt = function (t) {
                    if (!ct(t)) {
                        var e = tt(),
                            n = et();
                        pt((e - nt) * Y, (n - it) * Y, 1), nt = e, it = n, l && U.restart(!0)
                    }
                },
                xt = function (t) {
                    if (!ct(t)) {
                        t = Ks(t, u), B && (G = !0);
                        var e = (1 === t.deltaMode ? o : 2 === t.deltaMode ? ks.innerHeight : 1) * f;
                        pt(t.deltaX * e, t.deltaY * e, 0), l && !P && U.restart(!0)
                    }
                },
                wt = function (t) {
                    if (!ct(t)) {
                        var e = t.clientX,
                            n = t.clientY,
                            i = e - $.x,
                            r = n - $.y;
                        $.x = e, $.y = n, H = !0, (i || r) && dt(i, r)
                    }
                },
                Tt = function (t) {
                    $.event = t, S($)
                },
                Ot = function (t) {
                    $.event = t, C($)
                },
                kt = function (t) {
                    return ct(t) || Ks(t, u) && X($)
                };
            U = $._dc = Ts.delayedCall(h || .25, (function () {
                $._vx.reset(), $._vy.reset(), U.pause(), l && l($)
            })).pause(), $.deltaX = $.deltaY = 0, $._vx = Js(0, 50, !0), $._vy = Js(0, 50, !0), $.scrollX = tt, $.scrollY = et, $.isDragging = $.isGesturing = $.isPressed = !1, $.enable = function (t) {
                return $.isEnabled || (qs(st ? ot : s, "scroll", Hs), r.indexOf("scroll") >= 0 && qs(st ? ot : s, "scroll", bt, u, F), r.indexOf("wheel") >= 0 && qs(s, "wheel", xt, u, F), (r.indexOf("touch") >= 0 && Cs || r.indexOf("pointer") >= 0) && (qs(s, Ls[0], gt, u, F), qs(ot, Ls[2], _t), qs(ot, Ls[3], _t), V && qs(s, "click", ht, !1, !0), X && qs(s, "click", kt), I && qs(ot, "gesturestart", vt), L && qs(ot, "gestureend", yt), S && qs(s, Es + "enter", Tt), C && qs(s, Es + "leave", Ot), E && qs(s, Es + "move", wt)), $.isEnabled = !0, t && t.type && gt(t), R && R($)), $
            }, $.disable = function () {
                $.isEnabled && (zs.filter((function (t) {
                    return t !== $ && Ns(t.target)
                })).length || js(st ? ot : s, "scroll", Hs), $.isPressed && ($._vx.reset(), $._vy.reset(), js(P ? s : ot, Ls[1], mt, !0)), js(st ? ot : s, "scroll", bt, F), js(s, "wheel", xt, F), js(s, Ls[0], gt, F), js(ot, Ls[2], _t), js(ot, Ls[3], _t), js(s, "click", ht, !0), js(s, "click", kt), js(ot, "gesturestart", vt), js(ot, "gestureend", yt), js(s, Es + "enter", Tt), js(s, Es + "leave", Ot), js(s, Es + "move", wt), $.isEnabled = $.isPressed = $.isDragging = !1, z && z($))
            }, $.kill = function () {
                $.disable();
                var t = zs.indexOf($);
                t >= 0 && zs.splice(t, 1), Is === $ && (Is = 0)
            }, zs.push($), P && Ns(s) && (Is = $), $.enable(p)
        }, e = t, (n = [{
            key: "velocityX",
            get: function () {
                return this._vx.getVelocity()
            }
        }, {
            key: "velocityY",
            get: function () {
                return this._vy.getVelocity()
            }
        }]) && ws(e.prototype, n), i && ws(e, i), t
    }();
    io.version = "3.10.4", io.create = function (t) {
        return new io(t)
    }, io.register = no, io.getAll = function () {
        return zs.slice()
    }, io.getById = function (t) {
        return zs.filter((function (e) {
            return e.vars.id === t
        }))[0]
    }, Bs() && Ts.registerPlugin(io), sr.registerPlugin(xs), sr.registerPlugin(io);
    var ro = document.body,
        so = {
            width: window.innerWidth,
            height: window.innerHeight
        };
    window.addEventListener("resize", (function () {
        so = {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }));
    new(function () {
        "use strict";

        function t(e) {
            var n = this;
            s(this, t), a(this, "DOM", {
                el: null,
                items: null,
                stackWrap: document.querySelector(".stack-wrap"),
                slides: document.querySelector(".slides"),
                content: document.querySelector(".content"),
                contentItems: l(document.querySelectorAll(".content__item")),
                mainTitleTexts: l(document.querySelectorAll(".title > .oh > .oh__inner")),
                backCtrl: document.querySelector(".content__back"),
                nav: document.querySelector(".content__nav-wrap"),
                navArrows: {
                    prev: document.querySelector(".content__nav--prev"),
                    next: document.querySelector(".content__nav--next")
                }
            }), a(this, "contentItems", []), a(this, "isOpen", !1), a(this, "current", -1), a(this, "totalItems", 0), a(this, "gap", getComputedStyle(document.documentElement).getPropertyValue("--slide-gap")), this.DOM.el = e, this.DOM.items = l(this.DOM.el.querySelectorAll(".stack__item:not(.stack__item--empty)")), this.totalItems = this.DOM.items.length, this.DOM.contentItems.forEach((function (t) {
                return n.contentItems.push(new c(t))
            })), this.initEvents()
        }
        var e, n, i;
        return e = t, (n = [{
            key: "initEvents",
            value: function () {
                var t = this;
                this.DOM.items.forEach((function (e, n) {
                    var i = t;
                    e.addEventListener("click", (function () {
                        i.open(e)
                    }))
                })), this.DOM.backCtrl.addEventListener("click", (function () {
                    t.close()
                })), this.DOM.navArrows.next.addEventListener("click", (function () {
                    t.navigate("next")
                })), this.DOM.navArrows.prev.addEventListener("click", (function () {
                    t.navigate("prev")
                }));
                var e = function () {
                    t.isOpen && !t.isAnimating && (t.close(), t.scrollObserver.disable())
                };
                this.scrollObserver = io.create({
                    type: "wheel,touch,pointer",
                    wheelSpeed: -1,
                    onDown: e,
                    onUp: e,
                    tolerance: 10,
                    preventDefault: !0
                }), this.scrollObserver.disable()
            }
        }, {
            key: "open",
            value: function (t) {
                var e = this;
                if (!this.isAnimating && !this.isOpen) {
                    this.isAnimating = !0, this.current = this.DOM.items.indexOf(t), this.scrollObserver.enable();
                    var n = window.scrollY;
                    ro.classList.add("oh"), this.DOM.content.classList.add("content--open"), this.contentItems[this.current].DOM.el.classList.add("content__item--current"), this.DOM.items[this.current].classList.add("stack__item--current");
                    var i = xs.getState(this.DOM.items, {
                        props: "opacity"
                    });
                    this.DOM.slides.appendChild(this.DOM.el);
                    var r = t.offsetTop + t.offsetHeight / 2;
                    document.documentElement.scrollTop = document.body.scrollTop = 0, sr.set(this.DOM.el, {
                        y: so.height / 2 - r + n
                    }), document.documentElement.scrollTop = document.body.scrollTop = 0, xs.from(i, {
                        duration: 1,
                        ease: "expo",
                        onComplete: function () {
                            e.isOpen = !0, e.isAnimating = !1
                        },
                        onStart: function () {
                            return document.documentElement.scrollTop = document.body.scrollTop = n
                        },
                        absoluteOnLeave: !0
                    }).to(this.DOM.mainTitleTexts, {
                        duration: .9,
                        ease: "expo",
                        yPercent: -101
                    }, 0).to(this.contentItems[this.current].DOM.texts, {
                        duration: 1,
                        ease: "expo",
                        startAt: {
                            yPercent: 101
                        },
                        yPercent: 0
                    }, 0).to(this.DOM.backCtrl, {
                        duration: 1,
                        ease: "expo",
                        startAt: {
                            opacity: 0
                        },
                        opacity: 1
                    }, 0).to([this.DOM.navArrows.prev, this.DOM.navArrows.next], {
                        duration: 1,
                        ease: "expo",
                        startAt: {
                            opacity: 0,
                            y: function (t) {
                                return t ? -150 : 150
                            }
                        },
                        y: 0,
                        opacity: function (t) {
                            return 0 === e.current && !t || e.current === e.totalItems - 1 && t ? 0 : 1
                        }
                    }, 0)
                }
            }
        }, {
            key: "close",
            value: function () {
                var t = this;
                if (!this.isAnimating && this.isOpen) {
                    this.isAnimating = !0, this.scrollObserver.disable(), this.DOM.items[this.current].classList.remove("stack__item--current"), ro.classList.remove("oh");
                    var e = xs.getState(this.DOM.items, {
                        props: "opacity"
                    });
                    this.DOM.stackWrap.appendChild(this.DOM.el), sr.set(this.DOM.el, {
                        y: 0
                    }), xs.from(e, {
                        duration: 1,
                        ease: "expo",
                        onComplete: function () {
                            t.DOM.content.classList.remove("content--open"), t.contentItems[t.current].DOM.el.classList.remove("content__item--current"), t.current = -1, t.isOpen = !1, t.isAnimating = !1
                        },
                        absoluteOnLeave: !0
                    }).to(this.DOM.mainTitleTexts, {
                        duration: .9,
                        ease: "expo",
                        startAt: {
                            yPercent: 101
                        },
                        yPercent: 0
                    }, 0).to(this.contentItems[this.current].DOM.texts, {
                        duration: 1,
                        ease: "expo",
                        yPercent: -101
                    }, 0).to(this.DOM.backCtrl, {
                        duration: 1,
                        ease: "expo",
                        opacity: 0
                    }, 0).to([this.DOM.navArrows.prev, this.DOM.navArrows.next], {
                        duration: 1,
                        ease: "expo",
                        y: function (t) {
                            return t ? 100 : -100
                        },
                        opacity: 0
                    }, 0)
                }
            }
        }, {
            key: "navigate",
            value: function (t) {
                var e = this;
                if (!(this.isAnimating || "next" === t && this.current === this.totalItems - 1 || "prev" === t && 0 === this.current)) {
                    this.isAnimating = !0;
                    var n = this.current,
                        i = this.DOM.items[n];
                    this.current = "next" === t ? this.current + 1 : this.current - 1;
                    var r = this.DOM.items[this.current];
                    i.classList.remove("stack__item--current"), r.classList.add("stack__item--current"), sr.set(this.DOM.navArrows.prev, {
                        opacity: this.current > 0 ? 1 : 0
                    }), sr.set(this.DOM.navArrows.next, {
                        opacity: this.current < this.totalItems - 1 ? 1 : 0
                    }), sr.timeline().to(this.DOM.el, {
                        duration: 1,
                        ease: "expo",
                        y: "next" === t ? "-=".concat(so.height / 2 + .02 * so.height) : "+=".concat(so.height / 2 + .02 * so.height),
                        onComplete: function () {
                            e.isAnimating = !1
                        }
                    }).to(this.contentItems[n].DOM.texts, {
                        duration: .2,
                        ease: "power1",
                        yPercent: "next" === t ? 101 : -101,
                        onComplete: function () {
                            return e.contentItems[n].DOM.el.classList.remove("content__item--current")
                        }
                    }, 0).to(this.contentItems[this.current].DOM.texts, {
                        duration: .9,
                        ease: "expo",
                        startAt: {
                            yPercent: "next" === t ? -101 : 101
                        },
                        onStart: function () {
                            return e.contentItems[e.current].DOM.el.classList.add("content__item--current")
                        },
                        yPercent: 0
                    }, .2)
                }
            }
        }]) && o(e.prototype, n), i && o(e, i), t
    }())(document.querySelector(".stack"));
    (function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "img";
        return new Promise((function (e) {
            r(document.querySelectorAll(t), {
                background: !0
            }, e)
        }))
    })(".stack__item").then((function (t) {
        return document.body.classList.remove("loading")
    }))
}();