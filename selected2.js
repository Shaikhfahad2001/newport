var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {},
    e = {},
    i = {},
    n = t.parcelRequire348c;
null == n && ((n = function (t) {
    if (t in e) return e[t].exports;
    if (t in i) {
        var n = i[t];
        delete i[t];
        var r = {
            id: t,
            exports: {}
        };
        return e[t] = r, n.call(r.exports, r, r.exports), r.exports
    }
    var s = new Error("Cannot find module '" + t + "'");
    throw s.code = "MODULE_NOT_FOUND", s
}).register = function (t, e) {
    i[t] = e
}, t.parcelRequire348c = n), n.register("4hJWI", (function (t, e) {
    ! function (e, i) {
        t.exports ? t.exports = i() : e.EvEmitter = i()
    }("undefined" != typeof window ? window : t.exports, (function () {
        function t() {}
        let e = t.prototype;
        return e.on = function (t, e) {
            if (!t || !e) return this;
            let i = this._events = this._events || {},
                n = i[t] = i[t] || [];
            return n.includes(e) || n.push(e), this
        }, e.once = function (t, e) {
            if (!t || !e) return this;
            this.on(t, e);
            let i = this._onceEvents = this._onceEvents || {};
            return (i[t] = i[t] || {})[e] = !0, this
        }, e.off = function (t, e) {
            let i = this._events && this._events[t];
            if (!i || !i.length) return this;
            let n = i.indexOf(e);
            return -1 != n && i.splice(n, 1), this
        }, e.emitEvent = function (t, e) {
            let i = this._events && this._events[t];
            if (!i || !i.length) return this;
            i = i.slice(0), e = e || [];
            let n = this._onceEvents && this._onceEvents[t];
            for (let r of i) {
                n && n[r] && (this.off(t, r), delete n[r]), r.apply(this, e)
            }
            return this
        }, e.allOff = function () {
            return delete this._events, delete this._onceEvents, this
        }, t
    }))
}));
var r = {};
/*!
 * imagesLoaded v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
! function (t, e) {
    r ? r = e(t, n("4hJWI")) : t.imagesLoaded = e(t, t.EvEmitter)
}("undefined" != typeof window ? window : r, (function (t, e) {
    let i = t.jQuery,
        n = t.console;

    function r(t, e, s) {
        if (!(this instanceof r)) return new r(t, e, s);
        let o = t;
        var a;
        ("string" == typeof t && (o = document.querySelectorAll(t)), o) ? (this.elements = (a = o, Array.isArray(a) ? a : "object" == typeof a && "number" == typeof a.length ? [...a] : [a]), this.options = {}, "function" == typeof e ? s = e : Object.assign(this.options, e), s && this.on("always", s), this.getImages(), i && (this.jqDeferred = new i.Deferred), setTimeout(this.check.bind(this))) : n.error(`Bad element for imagesLoaded ${o||t}`)
    }
    r.prototype = Object.create(e.prototype), r.prototype.getImages = function () {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    };
    const s = [1, 9, 11];
    r.prototype.addElementImages = function (t) {
        "IMG" === t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
        let {
            nodeType: e
        } = t;
        if (!e || !s.includes(e)) return;
        let i = t.querySelectorAll("img");
        for (let t of i) this.addImage(t);
        if ("string" == typeof this.options.background) {
            let e = t.querySelectorAll(this.options.background);
            for (let t of e) this.addElementBackgroundImages(t)
        }
    };
    const o = /url\((['"])?(.*?)\1\)/gi;

    function a(t) {
        this.img = t
    }

    function u(t, e) {
        this.url = t, this.element = e, this.img = new Image
    }
    return r.prototype.addElementBackgroundImages = function (t) {
        let e = getComputedStyle(t);
        if (!e) return;
        let i = o.exec(e.backgroundImage);
        for (; null !== i;) {
            let n = i && i[2];
            n && this.addBackground(n, t), i = o.exec(e.backgroundImage)
        }
    }, r.prototype.addImage = function (t) {
        let e = new a(t);
        this.images.push(e)
    }, r.prototype.addBackground = function (t, e) {
        let i = new u(t, e);
        this.images.push(i)
    }, r.prototype.check = function () {
        if (this.progressedCount = 0, this.hasAnyBroken = !1, !this.images.length) return void this.complete();
        let t = (t, e, i) => {
            setTimeout((() => {
                this.progress(t, e, i)
            }))
        };
        this.images.forEach((function (e) {
            e.once("progress", t), e.check()
        }))
    }, r.prototype.progress = function (t, e, i) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount === this.images.length && this.complete(), this.options.debug && n && n.log(`progress: ${i}`, t, e)
    }, r.prototype.complete = function () {
        let t = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            let t = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[t](this)
        }
    }, a.prototype = Object.create(e.prototype), a.prototype.check = function () {
        this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.img.crossOrigin && (this.proxyImage.crossOrigin = this.img.crossOrigin), this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.currentSrc || this.img.src)
    }, a.prototype.getIsImageComplete = function () {
        return this.img.complete && this.img.naturalWidth
    }, a.prototype.confirm = function (t, e) {
        this.isLoaded = t;
        let {
            parentNode: i
        } = this.img, n = "PICTURE" === i.nodeName ? i : this.img;
        this.emitEvent("progress", [this, n, e])
    }, a.prototype.handleEvent = function (t) {
        let e = "on" + t.type;
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
        (e = e || t.jQuery) && (i = e, i.fn.imagesLoaded = function (t, e) {
            return new r(this, t, e).jqDeferred.promise(i(this))
        })
    }, r.makeJQueryPlugin(), r
}));

function s(t, e, i) {
    return e in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = i, t
}
class o {
    constructor(t) {
        s(this, "DOM", {
            el: null,
            title: null,
            description: null,
            texts: null
        }), this.DOM.el = t, this.DOM.title = this.DOM.el.querySelector(".content__item-title"), this.DOM.description = this.DOM.el.querySelector(".content__item-description"), this.DOM.texts = [...this.DOM.el.querySelectorAll(".oh > .oh__inner")]
    }
}

function a(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
}

function u(t, e) {
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
var h, l, c, f, p, d, m, g, _, v, y, x, b, w, T, O, M, k, D, C, E, S, A, P, I, L, B, R, z = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    },
    X = {
        duration: .5,
        overwrite: !1,
        delay: 0
    },
    Y = 2 * Math.PI,
    F = Y / 4,
    V = 0,
    N = Math.sqrt,
    q = Math.cos,
    j = Math.sin,
    U = function (t) {
        return "string" == typeof t
    },
    W = function (t) {
        return "function" == typeof t
    },
    H = function (t) {
        return "number" == typeof t
    },
    G = function (t) {
        return void 0 === t
    },
    Q = function (t) {
        return "object" == typeof t
    },
    $ = function (t) {
        return !1 !== t
    },
    J = function () {
        return "undefined" != typeof window
    },
    Z = function (t) {
        return W(t) || U(t)
    },
    K = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function () {},
    tt = Array.isArray,
    et = /(?:-?\.?\d|\.)+/gi,
    it = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    nt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    rt = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    st = /[+-]=-?[.\d]+/,
    ot = /[^,'"\[\]\s]+/gi,
    at = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    ut = {},
    ht = {},
    lt = function (t) {
        return (ht = Rt(t, ut)) && Mi
    },
    ct = function (t, e) {
        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
    },
    ft = function (t, e) {
        return !e && console.warn(t)
    },
    pt = function (t, e) {
        return t && (ut[t] = e) && ht && (ht[t] = e) || ut
    },
    dt = function () {
        return 0
    },
    mt = {},
    gt = [],
    _t = {},
    vt = {},
    yt = {},
    xt = 30,
    bt = [],
    wt = "",
    Tt = function (t) {
        var e, i, n = t[0];
        if (Q(n) || W(n) || (t = [t]), !(e = (n._gsap || {}).harness)) {
            for (i = bt.length; i-- && !bt[i].targetTest(n););
            e = bt[i]
        }
        for (i = t.length; i--;) t[i] && (t[i]._gsap || (t[i]._gsap = new Ge(t[i], e))) || t.splice(i, 1);
        return t
    },
    Ot = function (t) {
        return t._gsap || Tt(de(t))[0]._gsap
    },
    Mt = function (t, e, i) {
        return (i = t[e]) && W(i) ? t[e]() : G(i) && t.getAttribute && t.getAttribute(e) || i
    },
    kt = function (t, e) {
        return (t = t.split(",")).forEach(e) || t
    },
    Dt = function (t) {
        return Math.round(1e5 * t) / 1e5 || 0
    },
    Ct = function (t) {
        return Math.round(1e7 * t) / 1e7 || 0
    },
    Et = function (t, e) {
        var i = e.charAt(0),
            n = parseFloat(e.substr(2));
        return t = parseFloat(t), "+" === i ? t + n : "-" === i ? t - n : "*" === i ? t * n : t / n
    },
    St = function (t, e) {
        for (var i = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < i;);
        return n < i
    },
    At = function () {
        var t, e, i = gt.length,
            n = gt.slice(0);
        for (_t = {}, gt.length = 0, t = 0; t < i; t++)(e = n[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
    },
    Pt = function (t, e, i, n) {
        gt.length && At(), t.render(e, i, n), gt.length && At()
    },
    It = function (t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(ot).length < 2 ? e : U(t) ? t.trim() : t
    },
    Lt = function (t) {
        return t
    },
    Bt = function (t, e) {
        for (var i in e) i in t || (t[i] = e[i]);
        return t
    },
    Rt = function (t, e) {
        for (var i in e) t[i] = e[i];
        return t
    },
    zt = function t(e, i) {
        for (var n in i) "__proto__" !== n && "constructor" !== n && "prototype" !== n && (e[n] = Q(i[n]) ? t(e[n] || (e[n] = {}), i[n]) : i[n]);
        return e
    },
    Xt = function (t, e) {
        var i, n = {};
        for (i in t) i in e || (n[i] = t[i]);
        return n
    },
    Yt = function (t) {
        var e, i = t.parent || l,
            n = t.keyframes ? (e = tt(t.keyframes), function (t, i) {
                for (var n in i) n in t || "duration" === n && e || "ease" === n || (t[n] = i[n])
            }) : Bt;
        if ($(t.inherit))
            for (; i;) n(t, i.vars.defaults), i = i.parent || i._dp;
        return t
    },
    Ft = function (t, e, i, n, r) {
        void 0 === i && (i = "_first"), void 0 === n && (n = "_last");
        var s, o = t[n];
        if (r)
            for (s = e[r]; o && o[r] > s;) o = o._prev;
        return o ? (e._next = o._next, o._next = e) : (e._next = t[i], t[i] = e), e._next ? e._next._prev = e : t[n] = e, e._prev = o, e.parent = e._dp = t, e
    },
    Vt = function (t, e, i, n) {
        void 0 === i && (i = "_first"), void 0 === n && (n = "_last");
        var r = e._prev,
            s = e._next;
        r ? r._next = s : t[i] === e && (t[i] = s), s ? s._prev = r : t[n] === e && (t[n] = r), e._next = e._prev = e.parent = null
    },
    Nt = function (t, e) {
        t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), t._act = 0
    },
    qt = function (t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
            for (var i = t; i;) i._dirty = 1, i = i.parent;
        return t
    },
    jt = function (t) {
        for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
        return t
    },
    Ut = function t(e) {
        return !e || e._ts && t(e.parent)
    },
    Wt = function (t) {
        return t._repeat ? Ht(t._tTime, t = t.duration() + t._rDelay) * t : 0
    },
    Ht = function (t, e) {
        var i = Math.floor(t /= e);
        return t && i === t ? i - 1 : i
    },
    Gt = function (t, e) {
        return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    },
    Qt = function (t) {
        return t._end = Ct(t._start + (t._tDur / Math.abs(t._ts || t._rts || 1e-8) || 0))
    },
    $t = function (t, e) {
        var i = t._dp;
        return i && i.smoothChildTiming && t._ts && (t._start = Ct(i._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Qt(t), i._dirty || qt(i, t)), t
    },
    Jt = function (t, e) {
        var i;
        if ((e._time || e._initted && !e._dur) && (i = Gt(t.rawTime(), e), (!e._dur || he(0, e.totalDuration(), i) - e._tTime > 1e-8) && e.render(i, !0)), qt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
                for (i = t; i._dp;) i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
            t._zTime = -1e-8
        }
    },
    Zt = function (t, e, i, n) {
        return e.parent && Nt(e), e._start = Ct((H(i) ? i : i || t !== l ? oe(t, i, e) : t._time) + e._delay), e._end = Ct(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), Ft(t, e, "_first", "_last", t._sort ? "_start" : 0), ie(e) || (t._recent = e), n || Jt(t, e), t
    },
    Kt = function (t, e) {
        return (ut.ScrollTrigger || ct("scrollTrigger", e)) && ut.ScrollTrigger.create(e, t)
    },
    te = function (t, e, i, n) {
        return ii(t, e), t._initted ? !i && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && m !== Be.frame ? (gt.push(t), t._lazy = [e, n], 1) : void 0 : 1
    },
    ee = function t(e) {
        var i = e.parent;
        return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || t(i))
    },
    ie = function (t) {
        var e = t.data;
        return "isFromStart" === e || "isStart" === e
    },
    ne = function (t, e, i, n) {
        var r = t._repeat,
            s = Ct(e) || 0,
            o = t._tTime / t._tDur;
        return o && !n && (t._time *= s / t._dur), t._dur = s, t._tDur = r ? r < 0 ? 1e10 : Ct(s * (r + 1) + t._rDelay * r) : s, o > 0 && !n ? $t(t, t._tTime = t._tDur * o) : t.parent && Qt(t), i || qt(t.parent, t), t
    },
    re = function (t) {
        return t instanceof $e ? qt(t) : ne(t, t._dur)
    },
    se = {
        _start: 0,
        endTime: dt,
        totalDuration: dt
    },
    oe = function t(e, i, n) {
        var r, s, o, a = e.labels,
            u = e._recent || se,
            h = e.duration() >= 1e8 ? u.endTime(!1) : e._dur;
        return U(i) && (isNaN(i) || i in a) ? (s = i.charAt(0), o = "%" === i.substr(-1), r = i.indexOf("="), "<" === s || ">" === s ? (r >= 0 && (i = i.replace(/=/, "")), ("<" === s ? u._start : u.endTime(u._repeat >= 0)) + (parseFloat(i.substr(1)) || 0) * (o ? (r < 0 ? u : n).totalDuration() / 100 : 1)) : r < 0 ? (i in a || (a[i] = h), a[i]) : (s = parseFloat(i.charAt(r - 1) + i.substr(r + 1)), o && n && (s = s / 100 * (tt(n) ? n[0] : n).totalDuration()), r > 1 ? t(e, i.substr(0, r - 1), n) + s : h + s)) : null == i ? h : +i
    },
    ae = function (t, e, i) {
        var n, r, s = H(e[1]),
            o = (s ? 2 : 1) + (t < 2 ? 0 : 1),
            a = e[o];
        if (s && (a.duration = e[1]), a.parent = i, t) {
            for (n = a, r = i; r && !("immediateRender" in n);) n = r.vars.defaults || {}, r = $(r.vars.inherit) && r.parent;
            a.immediateRender = $(n.immediateRender), t < 2 ? a.runBackwards = 1 : a.startAt = e[o - 1]
        }
        return new ai(e[0], a, e[o + 1])
    },
    ue = function (t, e) {
        return t || 0 === t ? e(t) : e
    },
    he = function (t, e, i) {
        return i < t ? t : i > e ? e : i
    },
    le = function (t, e) {
        return U(t) && (e = at.exec(t)) ? e[1] : ""
    },
    ce = [].slice,
    fe = function (t, e) {
        return t && Q(t) && "length" in t && (!e && !t.length || t.length - 1 in t && Q(t[0])) && !t.nodeType && t !== c
    },
    pe = function (t, e, i) {
        return void 0 === i && (i = []), t.forEach((function (t) {
            var n;
            return U(t) && !e || fe(t, 1) ? (n = i).push.apply(n, de(t)) : i.push(t)
        })) || i
    },
    de = function (t, e, i) {
        return !U(t) || i || !f && Re() ? tt(t) ? pe(t, i) : fe(t) ? ce.call(t, 0) : t ? [t] : [] : ce.call((e || p).querySelectorAll(t), 0)
    },
    me = function (t) {
        return t.sort((function () {
            return .5 - Math.random()
        }))
    },
    ge = function (t) {
        if (W(t)) return t;
        var e = Q(t) ? t : {
                each: t
            },
            i = qe(e.ease),
            n = e.from || 0,
            r = parseFloat(e.base) || 0,
            s = {},
            o = n > 0 && n < 1,
            a = isNaN(n) || o,
            u = e.axis,
            h = n,
            l = n;
        return U(n) ? h = l = {
                center: .5,
                edges: .5,
                end: 1
            } [n] || 0 : !o && a && (h = n[0], l = n[1]),
            function (t, o, c) {
                var f, p, d, m, g, _, v, y, x, b = (c || e).length,
                    w = s[b];
                if (!w) {
                    if (!(x = "auto" === e.grid ? 0 : (e.grid || [1, 1e8])[1])) {
                        for (v = -1e8; v < (v = c[x++].getBoundingClientRect().left) && x < b;);
                        x--
                    }
                    for (w = s[b] = [], f = a ? Math.min(x, b) * h - .5 : n % x, p = 1e8 === x ? 0 : a ? b * l / x - .5 : n / x | 0, v = 0, y = 1e8, _ = 0; _ < b; _++) d = _ % x - f, m = p - (_ / x | 0), w[_] = g = u ? Math.abs("y" === u ? m : d) : N(d * d + m * m), g > v && (v = g), g < y && (y = g);
                    "random" === n && me(w), w.max = v - y, w.min = y, w.v = b = (parseFloat(e.amount) || parseFloat(e.each) * (x > b ? b - 1 : u ? "y" === u ? b / x : x : Math.max(x, b / x)) || 0) * ("edges" === n ? -1 : 1), w.b = b < 0 ? r - b : r, w.u = le(e.amount || e.each) || 0, i = i && b < 0 ? Ve(i) : i
                }
                return b = (w[t] - w.min) / w.max || 0, Ct(w.b + (i ? i(b) : b) * w.v) + w.u
            }
    },
    _e = function (t) {
        var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
        return function (i) {
            var n = Math.round(parseFloat(i) / t) * t * e;
            return (n - n % 1) / e + (H(i) ? 0 : le(i))
        }
    },
    ve = function (t, e) {
        var i, n, r = tt(t);
        return !r && Q(t) && (i = r = t.radius || 1e8, t.values ? (t = de(t.values), (n = !H(t[0])) && (i *= i)) : t = _e(t.increment)), ue(e, r ? W(t) ? function (e) {
            return n = t(e), Math.abs(n - e) <= i ? n : e
        } : function (e) {
            for (var r, s, o = parseFloat(n ? e.x : e), a = parseFloat(n ? e.y : 0), u = 1e8, h = 0, l = t.length; l--;)(r = n ? (r = t[l].x - o) * r + (s = t[l].y - a) * s : Math.abs(t[l] - o)) < u && (u = r, h = l);
            return h = !i || u <= i ? t[h] : e, n || h === e || H(e) ? h : h + le(e)
        } : _e(t))
    },
    ye = function (t, e, i, n) {
        return ue(tt(t) ? !e : !0 === i ? (i = 0, !1) : !n, (function () {
            return tt(t) ? t[~~(Math.random() * t.length)] : (n = (i = i || 1e-5) < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + .99 * i)) / i) * i * n) / n
        }))
    },
    xe = function (t, e, i) {
        return ue(i, (function (i) {
            return t[~~e(i)]
        }))
    },
    be = function (t) {
        for (var e, i, n, r, s = 0, o = ""; ~(e = t.indexOf("random(", s));) n = t.indexOf(")", e), r = "[" === t.charAt(e + 7), i = t.substr(e + 7, n - e - 7).match(r ? ot : et), o += t.substr(s, e - s) + ye(r ? i : +i[0], r ? 0 : +i[1], +i[2] || 1e-5), s = n + 1;
        return o + t.substr(s, t.length - s)
    },
    we = function (t, e, i, n, r) {
        var s = e - t,
            o = n - i;
        return ue(r, (function (e) {
            return i + ((e - t) / s * o || 0)
        }))
    },
    Te = function (t, e, i) {
        var n, r, s, o = t.labels,
            a = 1e8;
        for (n in o)(r = o[n] - e) < 0 == !!i && r && a > (r = Math.abs(r)) && (s = n, a = r);
        return s
    },
    Oe = function (t, e, i) {
        var n, r, s = t.vars,
            o = s[e];
        if (o) return n = s[e + "Params"], r = s.callbackScope || t, i && gt.length && At(), n ? o.apply(r, n) : o.call(r)
    },
    Me = function (t) {
        return Nt(t), t.scrollTrigger && t.scrollTrigger.kill(!1), t.progress() < 1 && Oe(t, "onInterrupt"), t
    },
    ke = function (t) {
        var e = (t = !t.name && t.default || t).name,
            i = W(t),
            n = e && !i && t.init ? function () {
                this._props = []
            } : t,
            r = {
                init: dt,
                render: gi,
                add: ti,
                kill: vi,
                modifier: _i,
                rawVars: 0
            },
            s = {
                targetTest: 0,
                get: 0,
                getSetter: fi,
                aliases: {},
                register: 0
            };
        if (Re(), t !== n) {
            if (vt[e]) return;
            Bt(n, Bt(Xt(t, r), s)), Rt(n.prototype, Rt(r, Xt(t, s))), vt[n.prop = e] = n, t.targetTest && (bt.push(n), mt[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
        }
        pt(e, n), t.register && t.register(Mi, n, bi)
    },
    De = {
        aqua: [0, 255, 255],
        lime: [0, 255, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, 255],
        navy: [0, 0, 128],
        white: [255, 255, 255],
        olive: [128, 128, 0],
        yellow: [255, 255, 0],
        orange: [255, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [255, 0, 0],
        pink: [255, 192, 203],
        cyan: [0, 255, 255],
        transparent: [255, 255, 255, 0]
    },
    Ce = function (t, e, i) {
        return 255 * (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
    },
    Ee = function (t, e, i) {
        var n, r, s, o, a, u, h, l, c, f, p = t ? H(t) ? [t >> 16, t >> 8 & 255, 255 & t] : 0 : De.black;
        if (!p) {
            if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), De[t]) p = De[t];
            else if ("#" === t.charAt(0)) {
                if (t.length < 6 && (n = t.charAt(1), r = t.charAt(2), s = t.charAt(3), t = "#" + n + n + r + r + s + s + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(p = parseInt(t.substr(1, 6), 16)) >> 16, p >> 8 & 255, 255 & p, parseInt(t.substr(7), 16) / 255];
                p = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t]
            } else if ("hsl" === t.substr(0, 3))
                if (p = f = t.match(et), e) {
                    if (~t.indexOf("=")) return p = t.match(it), i && p.length < 4 && (p[3] = 1), p
                } else o = +p[0] % 360 / 360, a = +p[1] / 100, n = 2 * (u = +p[2] / 100) - (r = u <= .5 ? u * (a + 1) : u + a - u * a), p.length > 3 && (p[3] *= 1), p[0] = Ce(o + 1 / 3, n, r), p[1] = Ce(o, n, r), p[2] = Ce(o - 1 / 3, n, r);
            else p = t.match(et) || De.transparent;
            p = p.map(Number)
        }
        return e && !f && (n = p[0] / 255, r = p[1] / 255, s = p[2] / 255, u = ((h = Math.max(n, r, s)) + (l = Math.min(n, r, s))) / 2, h === l ? o = a = 0 : (c = h - l, a = u > .5 ? c / (2 - h - l) : c / (h + l), o = h === n ? (r - s) / c + (r < s ? 6 : 0) : h === r ? (s - n) / c + 2 : (n - r) / c + 4, o *= 60), p[0] = ~~(o + .5), p[1] = ~~(100 * a + .5), p[2] = ~~(100 * u + .5)), i && p.length < 4 && (p[3] = 1), p
    },
    Se = function (t) {
        var e = [],
            i = [],
            n = -1;
        return t.split(Pe).forEach((function (t) {
            var r = t.match(nt) || [];
            e.push.apply(e, r), i.push(n += r.length + 1)
        })), e.c = i, e
    },
    Ae = function (t, e, i) {
        var n, r, s, o, a = "",
            u = (t + a).match(Pe),
            h = e ? "hsla(" : "rgba(",
            l = 0;
        if (!u) return t;
        if (u = u.map((function (t) {
                return (t = Ee(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
            })), i && (s = Se(t), (n = i.c).join(a) !== s.c.join(a)))
            for (o = (r = t.replace(Pe, "1").split(nt)).length - 1; l < o; l++) a += r[l] + (~n.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (s.length ? s : u.length ? u : i).shift());
        if (!r)
            for (o = (r = t.split(Pe)).length - 1; l < o; l++) a += r[l] + u[l];
        return a + r[o]
    },
    Pe = function () {
        var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
        for (t in De) e += "|" + t + "\\b";
        return new RegExp(e + ")", "gi")
    }(),
    Ie = /hsl[a]?\(/,
    Le = function (t) {
        var e, i = t.join(" ");
        if (Pe.lastIndex = 0, Pe.test(i)) return e = Ie.test(i), t[1] = Ae(t[1], e), t[0] = Ae(t[0], e, Se(t[1])), !0
    },
    Be = (O = Date.now, M = 500, k = 33, D = O(), C = D, S = E = 1e3 / 240, P = function t(e) {
        var i, n, r, s, o = O() - C,
            a = !0 === e;
        if (o > M && (D += o - k), ((i = (r = (C += o) - D) - S) > 0 || a) && (s = ++b.frame, w = r - 1e3 * b.time, b.time = r /= 1e3, S += i + (i >= E ? 4 : E - i), n = 1), a || (v = y(t)), n)
            for (T = 0; T < A.length; T++) A[T](r, w, s, e)
    }, b = {
        time: 0,
        frame: 0,
        tick: function () {
            P(!0)
        },
        deltaRatio: function (t) {
            return w / (1e3 / (t || 60))
        },
        wake: function () {
            d && (!f && J() && (c = f = window, p = c.document || {}, ut.gsap = Mi, (c.gsapVersions || (c.gsapVersions = [])).push(Mi.version), lt(ht || c.GreenSockGlobals || !c.gsap && c || {}), x = c.requestAnimationFrame), v && b.sleep(), y = x || function (t) {
                return setTimeout(t, S - 1e3 * b.time + 1 | 0)
            }, _ = 1, P(2))
        },
        sleep: function () {
            (x ? c.cancelAnimationFrame : clearTimeout)(v), _ = 0, y = dt
        },
        lagSmoothing: function (t, e) {
            M = t || 1 / 1e-8, k = Math.min(e, M, 0)
        },
        fps: function (t) {
            E = 1e3 / (t || 240), S = 1e3 * b.time + E
        },
        add: function (t, e, i) {
            var n = e ? function (e, i, r, s) {
                t(e, i, r, s), b.remove(n)
            } : t;
            return b.remove(t), A[i ? "unshift" : "push"](n), Re(), n
        },
        remove: function (t, e) {
            ~(e = A.indexOf(t)) && A.splice(e, 1) && T >= e && T--
        },
        _listeners: A = []
    }),
    Re = function () {
        return !_ && Be.wake()
    },
    ze = {},
    Xe = /^[\d.\-M][\d.\-,\s]/,
    Ye = /["']/g,
    Fe = function (t) {
        for (var e, i, n, r = {}, s = t.substr(1, t.length - 3).split(":"), o = s[0], a = 1, u = s.length; a < u; a++) i = s[a], e = a !== u - 1 ? i.lastIndexOf(",") : i.length, n = i.substr(0, e), r[o] = isNaN(n) ? n.replace(Ye, "").trim() : +n, o = i.substr(e + 1).trim();
        return r
    },
    Ve = function (t) {
        return function (e) {
            return 1 - t(1 - e)
        }
    },
    Ne = function t(e, i) {
        for (var n, r = e._first; r;) r instanceof $e ? t(r, i) : !r.vars.yoyoEase || r._yoyo && r._repeat || r._yoyo === i || (r.timeline ? t(r.timeline, i) : (n = r._ease, r._ease = r._yEase, r._yEase = n, r._yoyo = i)), r = r._next
    },
    qe = function (t, e) {
        return t && (W(t) ? t : ze[t] || function (t) {
            var e, i, n, r, s = (t + "").split("("),
                o = ze[s[0]];
            return o && s.length > 1 && o.config ? o.config.apply(null, ~t.indexOf("{") ? [Fe(s[1])] : (e = t, i = e.indexOf("(") + 1, n = e.indexOf(")"), r = e.indexOf("(", i), e.substring(i, ~r && r < n ? e.indexOf(")", n + 1) : n)).split(",").map(It)) : ze._CE && Xe.test(t) ? ze._CE("", t) : o
        }(t)) || e
    },
    je = function (t, e, i, n) {
        void 0 === i && (i = function (t) {
            return 1 - e(1 - t)
        }), void 0 === n && (n = function (t) {
            return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
        });
        var r, s = {
            easeIn: e,
            easeOut: i,
            easeInOut: n
        };
        return kt(t, (function (t) {
            for (var e in ze[t] = ut[t] = s, ze[r = t.toLowerCase()] = i, s) ze[r + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = ze[t + "." + e] = s[e]
        })), s
    },
    Ue = function (t) {
        return function (e) {
            return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
        }
    },
    We = function t(e, i, n) {
        var r = i >= 1 ? i : 1,
            s = (n || (e ? .3 : .45)) / (i < 1 ? i : 1),
            o = s / Y * (Math.asin(1 / r) || 0),
            a = function (t) {
                return 1 === t ? 1 : r * Math.pow(2, -10 * t) * j((t - o) * s) + 1
            },
            u = "out" === e ? a : "in" === e ? function (t) {
                return 1 - a(1 - t)
            } : Ue(a);
        return s = Y / s, u.config = function (i, n) {
            return t(e, i, n)
        }, u
    },
    He = function t(e, i) {
        void 0 === i && (i = 1.70158);
        var n = function (t) {
                return t ? --t * t * ((i + 1) * t + i) + 1 : 0
            },
            r = "out" === e ? n : "in" === e ? function (t) {
                return 1 - n(1 - t)
            } : Ue(n);
        return r.config = function (i) {
            return t(e, i)
        }, r
    };
kt("Linear,Quad,Cubic,Quart,Quint,Strong", (function (t, e) {
    var i = e < 5 ? e + 1 : e;
    je(t + ",Power" + (i - 1), e ? function (t) {
        return Math.pow(t, i)
    } : function (t) {
        return t
    }, (function (t) {
        return 1 - Math.pow(1 - t, i)
    }), (function (t) {
        return t < .5 ? Math.pow(2 * t, i) / 2 : 1 - Math.pow(2 * (1 - t), i) / 2
    }))
})), ze.Linear.easeNone = ze.none = ze.Linear.easeIn, je("Elastic", We("in"), We("out"), We()), I = 7.5625, B = 1 / (L = 2.75), je("Bounce", (function (t) {
    return 1 - R(1 - t)
}), R = function (t) {
    return t < B ? I * t * t : t < .7272727272727273 ? I * Math.pow(t - 1.5 / L, 2) + .75 : t < .9090909090909092 ? I * (t -= 2.25 / L) * t + .9375 : I * Math.pow(t - 2.625 / L, 2) + .984375
}), je("Expo", (function (t) {
    return t ? Math.pow(2, 10 * (t - 1)) : 0
})), je("Circ", (function (t) {
    return -(N(1 - t * t) - 1)
})), je("Sine", (function (t) {
    return 1 === t ? 1 : 1 - q(t * F)
})), je("Back", He("in"), He("out"), He()), ze.SteppedEase = ze.steps = ut.SteppedEase = {
    config: function (t, e) {
        void 0 === t && (t = 1);
        var i = 1 / t,
            n = t + (e ? 0 : 1),
            r = e ? 1 : 0;
        return function (t) {
            return ((n * he(0, .99999999, t) | 0) + r) * i
        }
    }
}, X.ease = ze["quad.out"], kt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function (t) {
    return wt += t + "," + t + "Params,"
}));
var Ge = function (t, e) {
        this.id = V++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : Mt, this.set = e ? e.getSetter : fi
    },
    Qe = function () {
        function t(t) {
            this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, ne(this, +t.duration, 1, 1), this.data = t.data, _ || Be.wake()
        }
        var e = t.prototype;
        return e.delay = function (t) {
            return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
        }, e.duration = function (t) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
        }, e.totalDuration = function (t) {
            return arguments.length ? (this._dirty = 0, ne(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }, e.totalTime = function (t, e) {
            if (Re(), !arguments.length) return this._tTime;
            var i = this._dp;
            if (i && i.smoothChildTiming && this._ts) {
                for ($t(this, t), !i._dp || i.parent || Jt(i, this); i && i.parent;) i.parent._time !== i._start + (i._ts >= 0 ? i._tTime / i._ts : (i.totalDuration() - i._tTime) / -i._ts) && i.totalTime(i._tTime, !0), i = i.parent;
                !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && Zt(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== t || !this._dur && !e || this._initted && 1e-8 === Math.abs(this._zTime) || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), Pt(this, t, e)), this
        }, e.time = function (t, e) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Wt(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
        }, e.totalProgress = function (t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
        }, e.progress = function (t, e) {
            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Wt(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
        }, e.iteration = function (t, e) {
            var i = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (t - 1) * i, e) : this._repeat ? Ht(this._tTime, i) + 1 : 1
        }, e.timeScale = function (t) {
            if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
            if (this._rts === t) return this;
            var e = this.parent && this._ts ? Gt(this.parent._time, this) : this._tTime;
            return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 : this._rts, this.totalTime(he(-this._delay, this._tDur, e), !0), Qt(this), jt(this)
        }, e.paused = function (t) {
            return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Re(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && 1e-8 !== Math.abs(this._zTime) && (this._tTime -= 1e-8)))), this) : this._ps
        }, e.startTime = function (t) {
            if (arguments.length) {
                this._start = t;
                var e = this.parent || this._dp;
                return e && (e._sort || !this.parent) && Zt(e, this, t - this._delay), this
            }
            return this._start
        }, e.endTime = function (t) {
            return this._start + ($(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }, e.rawTime = function (t) {
            var e = this.parent || this._dp;
            return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Gt(e.rawTime(t), this) : this._tTime : this._tTime
        }, e.globalTime = function (t) {
            for (var e = this, i = arguments.length ? t : e.rawTime(); e;) i = e._start + i / (e._ts || 1), e = e._dp;
            return i
        }, e.repeat = function (t) {
            return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, re(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
        }, e.repeatDelay = function (t) {
            if (arguments.length) {
                var e = this._time;
                return this._rDelay = t, re(this), e ? this.time(e) : this
            }
            return this._rDelay
        }, e.yoyo = function (t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, e.seek = function (t, e) {
            return this.totalTime(oe(this, t), $(e))
        }, e.restart = function (t, e) {
            return this.play().totalTime(t ? -this._delay : 0, $(e))
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
                i = this._start;
            return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= i && t < this.endTime(!0) - 1e-8))
        }, e.eventCallback = function (t, e, i) {
            var n = this.vars;
            return arguments.length > 1 ? (e ? (n[t] = e, i && (n[t + "Params"] = i), "onUpdate" === t && (this._onUpdate = e)) : delete n[t], this) : n[t]
        }, e.then = function (t) {
            var e = this;
            return new Promise((function (i) {
                var n = W(t) ? t : Lt,
                    r = function () {
                        var t = e.then;
                        e.then = null, W(n) && (n = n(e)) && (n.then || n === e) && (e.then = t), i(n), e.then = t
                    };
                e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? r() : e._prom = r
            }))
        }, e.kill = function () {
            Me(this)
        }, t
    }();
Bt(Qe.prototype, {
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
var $e = function (t) {
    function e(e, i) {
        var n;
        return void 0 === e && (e = {}), (n = t.call(this, e) || this).labels = {}, n.smoothChildTiming = !!e.smoothChildTiming, n.autoRemoveChildren = !!e.autoRemoveChildren, n._sort = $(e.sortChildren), l && Zt(e.parent || l, a(n), i), e.reversed && n.reverse(), e.paused && n.paused(!0), e.scrollTrigger && Kt(a(n), e.scrollTrigger), n
    }
    u(e, t);
    var i = e.prototype;
    return i.to = function (t, e, i) {
        return ae(0, arguments, this), this
    }, i.from = function (t, e, i) {
        return ae(1, arguments, this), this
    }, i.fromTo = function (t, e, i, n) {
        return ae(2, arguments, this), this
    }, i.set = function (t, e, i) {
        return e.duration = 0, e.parent = this, Yt(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new ai(t, e, oe(this, i), 1), this
    }, i.call = function (t, e, i) {
        return Zt(this, ai.delayedCall(0, t, e), i)
    }, i.staggerTo = function (t, e, i, n, r, s, o) {
        return i.duration = e, i.stagger = i.stagger || n, i.onComplete = s, i.onCompleteParams = o, i.parent = this, new ai(t, i, oe(this, r)), this
    }, i.staggerFrom = function (t, e, i, n, r, s, o) {
        return i.runBackwards = 1, Yt(i).immediateRender = $(i.immediateRender), this.staggerTo(t, e, i, n, r, s, o)
    }, i.staggerFromTo = function (t, e, i, n, r, s, o, a) {
        return n.startAt = i, Yt(n).immediateRender = $(n.immediateRender), this.staggerTo(t, e, n, r, s, o, a)
    }, i.render = function (t, e, i) {
        var n, r, s, o, a, u, h, c, f, p, d, m, g = this._time,
            _ = this._dirty ? this.totalDuration() : this._tDur,
            v = this._dur,
            y = t <= 0 ? 0 : Ct(t),
            x = this._zTime < 0 != t < 0 && (this._initted || !v);
        if (this !== l && y > _ && t >= 0 && (y = _), y !== this._tTime || i || x) {
            if (g !== this._time && v && (y += this._time - g, t += this._time - g), n = y, f = this._start, u = !(c = this._ts), x && (v || (g = this._zTime), (t || !e) && (this._zTime = t)), this._repeat) {
                if (d = this._yoyo, a = v + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * a + t, e, i);
                if (n = Ct(y % a), y === _ ? (o = this._repeat, n = v) : ((o = ~~(y / a)) && o === y / a && (n = v, o--), n > v && (n = v)), p = Ht(this._tTime, a), !g && this._tTime && p !== o && (p = o), d && 1 & o && (n = v - n, m = 1), o !== p && !this._lock) {
                    var b = d && 1 & p,
                        w = b === (d && 1 & o);
                    if (o < p && (b = !b), g = b ? 0 : v, this._lock = 1, this.render(g || (m ? 0 : Ct(o * a)), e, !v)._lock = 0, this._tTime = y, !e && this.parent && Oe(this, "onRepeat"), this.vars.repeatRefresh && !m && (this.invalidate()._lock = 1), g && g !== this._time || u !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                    if (v = this._dur, _ = this._tDur, w && (this._lock = 2, g = b ? v : -1e-4, this.render(g, !0), this.vars.repeatRefresh && !m && this.invalidate()), this._lock = 0, !this._ts && !u) return this;
                    Ne(this, m)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (h = function (t, e, i) {
                    var n;
                    if (i > e)
                        for (n = t._first; n && n._start <= i;) {
                            if ("isPause" === n.data && n._start > e) return n;
                            n = n._next
                        } else
                            for (n = t._last; n && n._start >= i;) {
                                if ("isPause" === n.data && n._start < e) return n;
                                n = n._prev
                            }
                }(this, Ct(g), Ct(n)), h && (y -= n - (n = h._start))), this._tTime = y, this._time = n, this._act = !c, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, g = 0), !g && n && !e && (Oe(this, "onStart"), this._tTime !== y)) return this;
            if (n >= g && t >= 0)
                for (r = this._first; r;) {
                    if (s = r._next, (r._act || n >= r._start) && r._ts && h !== r) {
                        if (r.parent !== this) return this.render(t, e, i);
                        if (r.render(r._ts > 0 ? (n - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (n - r._start) * r._ts, e, i), n !== this._time || !this._ts && !u) {
                            h = 0, s && (y += this._zTime = -1e-8);
                            break
                        }
                    }
                    r = s
                } else {
                    r = this._last;
                    for (var T = t < 0 ? t : n; r;) {
                        if (s = r._prev, (r._act || T <= r._end) && r._ts && h !== r) {
                            if (r.parent !== this) return this.render(t, e, i);
                            if (r.render(r._ts > 0 ? (T - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (T - r._start) * r._ts, e, i), n !== this._time || !this._ts && !u) {
                                h = 0, s && (y += this._zTime = T ? -1e-8 : 1e-8);
                                break
                            }
                        }
                        r = s
                    }
                }
            if (h && !e && (this.pause(), h.render(n >= g ? 0 : -1e-8)._zTime = n >= g ? 1 : -1, this._ts)) return this._start = f, Qt(this), this.render(t, e, i);
            this._onUpdate && !e && Oe(this, "onUpdate", !0), (y === _ && this._tTime >= this.totalDuration() || !y && g) && (f !== this._start && Math.abs(c) === Math.abs(this._ts) || this._lock || ((t || !v) && (y === _ && this._ts > 0 || !y && this._ts < 0) && Nt(this, 1), e || t < 0 && !g || !y && !g && _ || (Oe(this, y === _ && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(y < _ && this.timeScale() > 0) && this._prom())))
        }
        return this
    }, i.add = function (t, e) {
        var i = this;
        if (H(e) || (e = oe(this, e, t)), !(t instanceof Qe)) {
            if (tt(t)) return t.forEach((function (t) {
                return i.add(t, e)
            })), this;
            if (U(t)) return this.addLabel(t, e);
            if (!W(t)) return this;
            t = ai.delayedCall(0, t)
        }
        return this !== t ? Zt(this, t, e) : this
    }, i.getChildren = function (t, e, i, n) {
        void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === i && (i = !0), void 0 === n && (n = -1e8);
        for (var r = [], s = this._first; s;) s._start >= n && (s instanceof ai ? e && r.push(s) : (i && r.push(s), t && r.push.apply(r, s.getChildren(!0, e, i)))), s = s._next;
        return r
    }, i.getById = function (t) {
        for (var e = this.getChildren(1, 1, 1), i = e.length; i--;)
            if (e[i].vars.id === t) return e[i]
    }, i.remove = function (t) {
        return U(t) ? this.removeLabel(t) : W(t) ? this.killTweensOf(t) : (Vt(this, t), t === this._recent && (this._recent = this._last), qt(this))
    }, i.totalTime = function (e, i) {
        return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = Ct(Be.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, i), this._forcing = 0, this) : this._tTime
    }, i.addLabel = function (t, e) {
        return this.labels[t] = oe(this, e), this
    }, i.removeLabel = function (t) {
        return delete this.labels[t], this
    }, i.addPause = function (t, e, i) {
        var n = ai.delayedCall(0, e || dt, i);
        return n.data = "isPause", this._hasPause = 1, Zt(this, n, oe(this, t))
    }, i.removePause = function (t) {
        var e = this._first;
        for (t = oe(this, t); e;) e._start === t && "isPause" === e.data && Nt(e), e = e._next
    }, i.killTweensOf = function (t, e, i) {
        for (var n = this.getTweensOf(t, i), r = n.length; r--;) Je !== n[r] && n[r].kill(t, e);
        return this
    }, i.getTweensOf = function (t, e) {
        for (var i, n = [], r = de(t), s = this._first, o = H(e); s;) s instanceof ai ? St(s._targets, r) && (o ? (!Je || s._initted && s._ts) && s.globalTime(0) <= e && s.globalTime(s.totalDuration()) > e : !e || s.isActive()) && n.push(s) : (i = s.getTweensOf(r, e)).length && n.push.apply(n, i), s = s._next;
        return n
    }, i.tweenTo = function (t, e) {
        e = e || {};
        var i, n = this,
            r = oe(n, t),
            s = e,
            o = s.startAt,
            a = s.onStart,
            u = s.onStartParams,
            h = s.immediateRender,
            l = ai.to(n, Bt({
                ease: e.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: r,
                overwrite: "auto",
                duration: e.duration || Math.abs((r - (o && "time" in o ? o.time : n._time)) / n.timeScale()) || 1e-8,
                onStart: function () {
                    if (n.pause(), !i) {
                        var t = e.duration || Math.abs((r - (o && "time" in o ? o.time : n._time)) / n.timeScale());
                        l._dur !== t && ne(l, t, 0, 1).render(l._time, !0, !0), i = 1
                    }
                    a && a.apply(l, u || [])
                }
            }, e));
        return h ? l.render(0) : l
    }, i.tweenFromTo = function (t, e, i) {
        return this.tweenTo(e, Bt({
            startAt: {
                time: oe(this, t)
            }
        }, i))
    }, i.recent = function () {
        return this._recent
    }, i.nextLabel = function (t) {
        return void 0 === t && (t = this._time), Te(this, oe(this, t))
    }, i.previousLabel = function (t) {
        return void 0 === t && (t = this._time), Te(this, oe(this, t), 1)
    }, i.currentLabel = function (t) {
        return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + 1e-8)
    }, i.shiftChildren = function (t, e, i) {
        void 0 === i && (i = 0);
        for (var n, r = this._first, s = this.labels; r;) r._start >= i && (r._start += t, r._end += t), r = r._next;
        if (e)
            for (n in s) s[n] >= i && (s[n] += t);
        return qt(this)
    }, i.invalidate = function () {
        var e = this._first;
        for (this._lock = 0; e;) e.invalidate(), e = e._next;
        return t.prototype.invalidate.call(this)
    }, i.clear = function (t) {
        void 0 === t && (t = !0);
        for (var e, i = this._first; i;) e = i._next, this.remove(i), i = e;
        return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), qt(this)
    }, i.totalDuration = function (t) {
        var e, i, n, r = 0,
            s = this,
            o = s._last,
            a = 1e8;
        if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -t : t));
        if (s._dirty) {
            for (n = s.parent; o;) e = o._prev, o._dirty && o.totalDuration(), (i = o._start) > a && s._sort && o._ts && !s._lock ? (s._lock = 1, Zt(s, o, i - o._delay, 1)._lock = 0) : a = i, i < 0 && o._ts && (r -= i, (!n && !s._dp || n && n.smoothChildTiming) && (s._start += i / s._ts, s._time -= i, s._tTime -= i), s.shiftChildren(-i, !1, -1 / 0), a = 0), o._end > r && o._ts && (r = o._end), o = e;
            ne(s, s === l && s._time > r ? s._time : r, 1, 1), s._dirty = 0
        }
        return s._tDur
    }, e.updateRoot = function (t) {
        if (l._ts && (Pt(l, Gt(t, l)), m = Be.frame), Be.frame >= xt) {
            xt += z.autoSleep || 120;
            var e = l._first;
            if ((!e || !e._ts) && z.autoSleep && Be._listeners.length < 2) {
                for (; e && !e._ts;) e = e._next;
                e || Be.sleep()
            }
        }
    }, e
}(Qe);
Bt($e.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var Je, Ze, Ke = function (t, e, i, n, r, s, o) {
        var a, u, h, l, c, f, p, d, m = new bi(this._pt, t, e, 0, 1, mi, null, r),
            g = 0,
            _ = 0;
        for (m.b = i, m.e = n, i += "", (p = ~(n += "").indexOf("random(")) && (n = be(n)), s && (s(d = [i, n], t, e), i = d[0], n = d[1]), u = i.match(rt) || []; a = rt.exec(n);) l = a[0], c = n.substring(g, a.index), h ? h = (h + 1) % 5 : "rgba(" === c.substr(-5) && (h = 1), l !== u[_++] && (f = parseFloat(u[_ - 1]) || 0, m._pt = {
            _next: m._pt,
            p: c || 1 === _ ? c : ",",
            s: f,
            c: "=" === l.charAt(1) ? Et(f, l) - f : parseFloat(l) - f,
            m: h && h < 4 ? Math.round : 0
        }, g = rt.lastIndex);
        return m.c = g < n.length ? n.substring(g, n.length) : "", m.fp = o, (st.test(n) || p) && (m.e = 0), this._pt = m, m
    },
    ti = function (t, e, i, n, r, s, o, a, u) {
        W(n) && (n = n(r || 0, t, s));
        var h, l = t[e],
            c = "get" !== i ? i : W(l) ? u ? t[e.indexOf("set") || !W(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : l,
            f = W(l) ? u ? li : hi : ui;
        if (U(n) && (~n.indexOf("random(") && (n = be(n)), "=" === n.charAt(1) && ((h = Et(c, n) + (le(c) || 0)) || 0 === h) && (n = h)), c !== n || Ze) return isNaN(c * n) || "" === n ? (!l && !(e in t) && ct(e, n), Ke.call(this, t, e, c, n, f, a || z.stringFilter, u)) : (h = new bi(this._pt, t, e, +c || 0, n - (c || 0), "boolean" == typeof l ? di : pi, 0, f), u && (h.fp = u), o && h.modifier(o, this, t), this._pt = h)
    },
    ei = function (t, e, i, n, r, s) {
        var o, a, u, h;
        if (vt[t] && !1 !== (o = new vt[t]).init(r, o.rawVars ? e[t] : function (t, e, i, n, r) {
                if (W(t) && (t = ri(t, r, e, i, n)), !Q(t) || t.style && t.nodeType || tt(t) || K(t)) return U(t) ? ri(t, r, e, i, n) : t;
                var s, o = {};
                for (s in t) o[s] = ri(t[s], r, e, i, n);
                return o
            }(e[t], n, r, s, i), i, n, s) && (i._pt = a = new bi(i._pt, r, t, 0, 1, o.render, o, 0, o.priority), i !== g))
            for (u = i._ptLookup[i._targets.indexOf(r)], h = o._props.length; h--;) u[o._props[h]] = a;
        return o
    },
    ii = function t(e, i) {
        var n, r, s, o, a, u, c, f, p, d, m, g, _, v = e.vars,
            y = v.ease,
            x = v.startAt,
            b = v.immediateRender,
            w = v.lazy,
            T = v.onUpdate,
            O = v.onUpdateParams,
            M = v.callbackScope,
            k = v.runBackwards,
            D = v.yoyoEase,
            C = v.keyframes,
            E = v.autoRevert,
            S = e._dur,
            A = e._startAt,
            P = e._targets,
            I = e.parent,
            L = I && "nested" === I.data ? I.parent._targets : P,
            B = "auto" === e._overwrite && !h,
            R = e.timeline;
        if (R && (!C || !y) && (y = "none"), e._ease = qe(y, X.ease), e._yEase = D ? Ve(qe(!0 === D ? y : D, X.ease)) : 0, D && e._yoyo && !e._repeat && (D = e._yEase, e._yEase = e._ease, e._ease = D), e._from = !R && !!v.runBackwards, !R || C && !v.stagger) {
            if (g = (f = P[0] ? Ot(P[0]).harness : 0) && v[f.prop], n = Xt(v, mt), A && (Nt(A.render(-1, !0)), A._lazy = 0), x)
                if (Nt(e._startAt = ai.set(P, Bt({
                        data: "isStart",
                        overwrite: !1,
                        parent: I,
                        immediateRender: !0,
                        lazy: $(w),
                        startAt: null,
                        delay: 0,
                        onUpdate: T,
                        onUpdateParams: O,
                        callbackScope: M,
                        stagger: 0
                    }, x))), i < 0 && !b && !E && e._startAt.render(-1, !0), b) {
                    if (i > 0 && !E && (e._startAt = 0), S && i <= 0) return void(i && (e._zTime = i))
                } else !1 === E && (e._startAt = 0);
            else if (k && S)
                if (A) !E && (e._startAt = 0);
                else if (i && (b = !1), s = Bt({
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: b && $(w),
                    immediateRender: b,
                    stagger: 0,
                    parent: I
                }, n), g && (s[f.prop] = g), Nt(e._startAt = ai.set(P, s)), i < 0 && e._startAt.render(-1, !0), e._zTime = i, b) {
                if (!i) return
            } else t(e._startAt, 1e-8);
            for (e._pt = e._ptCache = 0, w = S && $(w) || w && !S, r = 0; r < P.length; r++) {
                if (c = (a = P[r])._gsap || Tt(P)[r]._gsap, e._ptLookup[r] = d = {}, _t[c.id] && gt.length && At(), m = L === P ? r : L.indexOf(a), f && !1 !== (p = new f).init(a, g || n, e, m, L) && (e._pt = o = new bi(e._pt, a, p.name, 0, 1, p.render, p, 0, p.priority), p._props.forEach((function (t) {
                        d[t] = o
                    })), p.priority && (u = 1)), !f || g)
                    for (s in n) vt[s] && (p = ei(s, n, e, m, a, L)) ? p.priority && (u = 1) : d[s] = o = ti.call(e, a, s, "get", n[s], m, L, 0, v.stringFilter);
                e._op && e._op[r] && e.kill(a, e._op[r]), B && e._pt && (Je = e, l.killTweensOf(a, d, e.globalTime(i)), _ = !e.parent, Je = 0), e._pt && w && (_t[c.id] = 1)
            }
            u && xi(e), e._onInit && e._onInit(e)
        }
        e._onUpdate = T, e._initted = (!e._op || e._pt) && !_, C && i <= 0 && R.render(1e8, !0, !0)
    },
    ni = function (t, e, i, n) {
        var r, s, o = e.ease || n || "power1.inOut";
        if (tt(e)) s = i[t] || (i[t] = []), e.forEach((function (t, i) {
            return s.push({
                t: i / (e.length - 1) * 100,
                v: t,
                e: o
            })
        }));
        else
            for (r in e) s = i[r] || (i[r] = []), "ease" === r || s.push({
                t: parseFloat(t),
                v: e[r],
                e: o
            })
    },
    ri = function (t, e, i, n, r) {
        return W(t) ? t.call(e, i, n, r) : U(t) && ~t.indexOf("random(") ? be(t) : t
    },
    si = wt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    oi = {};
kt(si + ",id,stagger,delay,duration,paused,scrollTrigger", (function (t) {
    return oi[t] = 1
}));
var ai = function (t) {
    function e(e, i, n, r) {
        var s;
        "number" == typeof i && (n.duration = i, i = n, n = null);
        var o, u, c, f, p, d, m, g, _ = (s = t.call(this, r ? i : Yt(i)) || this).vars,
            v = _.duration,
            y = _.delay,
            x = _.immediateRender,
            b = _.stagger,
            w = _.overwrite,
            T = _.keyframes,
            O = _.defaults,
            M = _.scrollTrigger,
            k = _.yoyoEase,
            D = i.parent || l,
            C = (tt(e) || K(e) ? H(e[0]) : "length" in i) ? [e] : de(e);
        if (s._targets = C.length ? Tt(C) : ft("GSAP target " + e + " not found. https://greensock.com", !z.nullTargetWarn) || [], s._ptLookup = [], s._overwrite = w, T || b || Z(v) || Z(y)) {
            if (i = s.vars, (o = s.timeline = new $e({
                    data: "nested",
                    defaults: O || {}
                })).kill(), o.parent = o._dp = a(s), o._start = 0, b || Z(v) || Z(y)) {
                if (f = C.length, m = b && ge(b), Q(b))
                    for (p in b) ~si.indexOf(p) && (g || (g = {}), g[p] = b[p]);
                for (u = 0; u < f; u++)(c = Xt(i, oi)).stagger = 0, k && (c.yoyoEase = k), g && Rt(c, g), d = C[u], c.duration = +ri(v, a(s), u, d, C), c.delay = (+ri(y, a(s), u, d, C) || 0) - s._delay, !b && 1 === f && c.delay && (s._delay = y = c.delay, s._start += y, c.delay = 0), o.to(d, c, m ? m(u, d, C) : 0), o._ease = ze.none;
                o.duration() ? v = y = 0 : s.timeline = 0
            } else if (T) {
                Yt(Bt(o.vars.defaults, {
                    ease: "none"
                })), o._ease = qe(T.ease || i.ease || "none");
                var E, S, A, P = 0;
                if (tt(T)) T.forEach((function (t) {
                    return o.to(C, t, ">")
                }));
                else {
                    for (p in c = {}, T) "ease" === p || "easeEach" === p || ni(p, T[p], c, T.easeEach);
                    for (p in c)
                        for (E = c[p].sort((function (t, e) {
                                return t.t - e.t
                            })), P = 0, u = 0; u < E.length; u++)(A = {
                            ease: (S = E[u]).e,
                            duration: (S.t - (u ? E[u - 1].t : 0)) / 100 * v
                        })[p] = S.v, o.to(C, A, P), P += A.duration;
                    o.duration() < v && o.to({}, {
                        duration: v - o.duration()
                    })
                }
            }
            v || s.duration(v = o.duration())
        } else s.timeline = 0;
        return !0 !== w || h || (Je = a(s), l.killTweensOf(C), Je = 0), Zt(D, a(s), n), i.reversed && s.reverse(), i.paused && s.paused(!0), (x || !v && !T && s._start === Ct(D._time) && $(x) && Ut(a(s)) && "nested" !== D.data) && (s._tTime = -1e-8, s.render(Math.max(0, -y))), M && Kt(a(s), M), s
    }
    u(e, t);
    var i = e.prototype;
    return i.render = function (t, e, i) {
        var n, r, s, o, a, u, h, l, c, f = this._time,
            p = this._tDur,
            d = this._dur,
            m = t > p - 1e-8 && t >= 0 ? p : t < 1e-8 ? 0 : t;
        if (d) {
            if (m !== this._tTime || !t || i || !this._initted && this._tTime || this._startAt && this._zTime < 0 != t < 0) {
                if (n = m, l = this.timeline, this._repeat) {
                    if (o = d + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * o + t, e, i);
                    if (n = Ct(m % o), m === p ? (s = this._repeat, n = d) : ((s = ~~(m / o)) && s === m / o && (n = d, s--), n > d && (n = d)), (u = this._yoyo && 1 & s) && (c = this._yEase, n = d - n), a = Ht(this._tTime, o), n === f && !i && this._initted) return this._tTime = m, this;
                    s !== a && (l && this._yEase && Ne(l, u), !this.vars.repeatRefresh || u || this._lock || (this._lock = i = 1, this.render(Ct(o * s), !0).invalidate()._lock = 0))
                }
                if (!this._initted) {
                    if (te(this, t < 0 ? t : n, i, e)) return this._tTime = 0, this;
                    if (f !== this._time) return this;
                    if (d !== this._dur) return this.render(t, e, i)
                }
                if (this._tTime = m, this._time = n, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = h = (c || this._ease)(n / d), this._from && (this.ratio = h = 1 - h), n && !f && !e && (Oe(this, "onStart"), this._tTime !== m)) return this;
                for (r = this._pt; r;) r.r(h, r.d), r = r._next;
                l && l.render(t < 0 ? t : !n && u ? -1e-8 : l._dur * l._ease(n / this._dur), e, i) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, i), Oe(this, "onUpdate")), this._repeat && s !== a && this.vars.onRepeat && !e && this.parent && Oe(this, "onRepeat"), m !== this._tDur && m || this._tTime !== m || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0), (t || !d) && (m === this._tDur && this._ts > 0 || !m && this._ts < 0) && Nt(this, 1), e || t < 0 && !f || !m && !f || (Oe(this, m === p ? "onComplete" : "onReverseComplete", !0), this._prom && !(m < p && this.timeScale() > 0) && this._prom()))
            }
        } else ! function (t, e, i, n) {
            var r, s, o, a = t.ratio,
                u = e < 0 || !e && (!t._start && ee(t) && (t._initted || !ie(t)) || (t._ts < 0 || t._dp._ts < 0) && !ie(t)) ? 0 : 1,
                h = t._rDelay,
                l = 0;
            if (h && t._repeat && (l = he(0, t._tDur, e), s = Ht(l, h), t._yoyo && 1 & s && (u = 1 - u), s !== Ht(t._tTime, h) && (a = 1 - u, t.vars.repeatRefresh && t._initted && t.invalidate())), u !== a || n || 1e-8 === t._zTime || !e && t._zTime) {
                if (!t._initted && te(t, e, n, i)) return;
                for (o = t._zTime, t._zTime = e || (i ? 1e-8 : 0), i || (i = e && !o), t.ratio = u, t._from && (u = 1 - u), t._time = 0, t._tTime = l, r = t._pt; r;) r.r(u, r.d), r = r._next;
                t._startAt && e < 0 && t._startAt.render(e, !0, !0), t._onUpdate && !i && Oe(t, "onUpdate"), l && t._repeat && !i && t.parent && Oe(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === u && (u && Nt(t, 1), i || (Oe(t, u ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
            } else t._zTime || (t._zTime = e)
        }(this, t, e, i);
        return this
    }, i.targets = function () {
        return this._targets
    }, i.invalidate = function () {
        return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), t.prototype.invalidate.call(this)
    }, i.resetTo = function (t, e, i, n) {
        _ || Be.wake(), this._ts || this.play();
        var r = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
        return this._initted || ii(this, r),
            function (t, e, i, n, r, s, o) {
                var a, u, h, l = (t._pt && t._ptCache || (t._ptCache = {}))[e];
                if (!l)
                    for (l = t._ptCache[e] = [], u = t._ptLookup, h = t._targets.length; h--;) {
                        if ((a = u[h][e]) && a.d && a.d._pt)
                            for (a = a.d._pt; a && a.p !== e;) a = a._next;
                        if (!a) return Ze = 1, t.vars[e] = "+=0", ii(t, o), Ze = 0, 1;
                        l.push(a)
                    }
                for (h = l.length; h--;)(a = l[h]).s = !n && 0 !== n || r ? a.s + (n || 0) + s * a.c : n, a.c = i - a.s, a.e && (a.e = Dt(i) + le(a.e)), a.b && (a.b = a.s + le(a.b))
            }(this, t, e, i, n, this._ease(r / this._dur), r) ? this.resetTo(t, e, i, n) : ($t(this, 0), this.parent || Ft(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
    }, i.kill = function (t, e) {
        if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? Me(this) : this;
        if (this.timeline) {
            var i = this.timeline.totalDuration();
            return this.timeline.killTweensOf(t, e, Je && !0 !== Je.vars.overwrite)._first || Me(this), this.parent && i !== this.timeline.totalDuration() && ne(this, this._dur * this.timeline._tDur / i, 0, 1), this
        }
        var n, r, s, o, a, u, h, l = this._targets,
            c = t ? de(t) : l,
            f = this._ptLookup,
            p = this._pt;
        if ((!e || "all" === e) && function (t, e) {
                for (var i = t.length, n = i === e.length; n && i-- && t[i] === e[i];);
                return i < 0
            }(l, c)) return "all" === e && (this._pt = 0), Me(this);
        for (n = this._op = this._op || [], "all" !== e && (U(e) && (a = {}, kt(e, (function (t) {
                return a[t] = 1
            })), e = a), e = function (t, e) {
                var i, n, r, s, o = t[0] ? Ot(t[0]).harness : 0,
                    a = o && o.aliases;
                if (!a) return e;
                for (n in i = Rt({}, e), a)
                    if (n in i)
                        for (r = (s = a[n].split(",")).length; r--;) i[s[r]] = i[n];
                return i
            }(l, e)), h = l.length; h--;)
            if (~c.indexOf(l[h]))
                for (a in r = f[h], "all" === e ? (n[h] = e, o = r, s = {}) : (s = n[h] = n[h] || {}, o = e), o)(u = r && r[a]) && ("kill" in u.d && !0 !== u.d.kill(a) || Vt(this, u, "_pt"), delete r[a]), "all" !== s && (s[a] = 1);
        return this._initted && !this._pt && p && Me(this), this
    }, e.to = function (t, i) {
        return new e(t, i, arguments[2])
    }, e.from = function (t, e) {
        return ae(1, arguments)
    }, e.delayedCall = function (t, i, n, r) {
        return new e(i, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: t,
            onComplete: i,
            onReverseComplete: i,
            onCompleteParams: n,
            onReverseCompleteParams: n,
            callbackScope: r
        })
    }, e.fromTo = function (t, e, i) {
        return ae(2, arguments)
    }, e.set = function (t, i) {
        return i.duration = 0, i.repeatDelay || (i.repeat = 0), new e(t, i)
    }, e.killTweensOf = function (t, e, i) {
        return l.killTweensOf(t, e, i)
    }, e
}(Qe);
Bt(ai.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
}), kt("staggerTo,staggerFrom,staggerFromTo", (function (t) {
    ai[t] = function () {
        var e = new $e,
            i = ce.call(arguments, 0);
        return i.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, i)
    }
}));
var ui = function (t, e, i) {
        return t[e] = i
    },
    hi = function (t, e, i) {
        return t[e](i)
    },
    li = function (t, e, i, n) {
        return t[e](n.fp, i)
    },
    ci = function (t, e, i) {
        return t.setAttribute(e, i)
    },
    fi = function (t, e) {
        return W(t[e]) ? hi : G(t[e]) && t.setAttribute ? ci : ui
    },
    pi = function (t, e) {
        return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
    },
    di = function (t, e) {
        return e.set(e.t, e.p, !!(e.s + e.c * t), e)
    },
    mi = function (t, e) {
        var i = e._pt,
            n = "";
        if (!t && e.b) n = e.b;
        else if (1 === t && e.e) n = e.e;
        else {
            for (; i;) n = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round(1e4 * (i.s + i.c * t)) / 1e4) + n, i = i._next;
            n += e.c
        }
        e.set(e.t, e.p, n, e)
    },
    gi = function (t, e) {
        for (var i = e._pt; i;) i.r(t, i.d), i = i._next
    },
    _i = function (t, e, i, n) {
        for (var r, s = this._pt; s;) r = s._next, s.p === n && s.modifier(t, e, i), s = r
    },
    vi = function (t) {
        for (var e, i, n = this._pt; n;) i = n._next, n.p === t && !n.op || n.op === t ? Vt(this, n, "_pt") : n.dep || (e = 1), n = i;
        return !e
    },
    yi = function (t, e, i, n) {
        n.mSet(t, e, n.m.call(n.tween, i, n.mt), n)
    },
    xi = function (t) {
        for (var e, i, n, r, s = t._pt; s;) {
            for (e = s._next, i = n; i && i.pr > s.pr;) i = i._next;
            (s._prev = i ? i._prev : r) ? s._prev._next = s: n = s, (s._next = i) ? i._prev = s : r = s, s = e
        }
        t._pt = n
    },
    bi = function () {
        function t(t, e, i, n, r, s, o, a, u) {
            this.t = e, this.s = n, this.c = r, this.p = i, this.r = s || pi, this.d = o || this, this.set = a || ui, this.pr = u || 0, this._next = t, t && (t._prev = this)
        }
        return t.prototype.modifier = function (t, e, i) {
            this.mSet = this.mSet || this.set, this.set = yi, this.m = t, this.mt = i, this.tween = e
        }, t
    }();
kt(wt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function (t) {
    return mt[t] = 1
})), ut.TweenMax = ut.TweenLite = ai, ut.TimelineLite = ut.TimelineMax = $e, l = new $e({
    sortChildren: !1,
    defaults: X,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
}), z.stringFilter = Le;
var wi = {
    registerPlugin: function () {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
        e.forEach((function (t) {
            return ke(t)
        }))
    },
    timeline: function (t) {
        return new $e(t)
    },
    getTweensOf: function (t, e) {
        return l.getTweensOf(t, e)
    },
    getProperty: function (t, e, i, n) {
        U(t) && (t = de(t)[0]);
        var r = Ot(t || {}).get,
            s = i ? Lt : It;
        return "native" === i && (i = ""), t ? e ? s((vt[e] && vt[e].get || r)(t, e, i, n)) : function (e, i, n) {
            return s((vt[e] && vt[e].get || r)(t, e, i, n))
        } : t
    },
    quickSetter: function (t, e, i) {
        if ((t = de(t)).length > 1) {
            var n = t.map((function (t) {
                    return Mi.quickSetter(t, e, i)
                })),
                r = n.length;
            return function (t) {
                for (var e = r; e--;) n[e](t)
            }
        }
        t = t[0] || {};
        var s = vt[e],
            o = Ot(t),
            a = o.harness && (o.harness.aliases || {})[e] || e,
            u = s ? function (e) {
                var n = new s;
                g._pt = 0, n.init(t, i ? e + i : e, g, 0, [t]), n.render(1, n), g._pt && gi(1, g)
            } : o.set(t, a);
        return s ? u : function (e) {
            return u(t, a, i ? e + i : e, o, 1)
        }
    },
    quickTo: function (t, e, i) {
        var n, r = Mi.to(t, Rt(((n = {})[e] = "+=0.1", n.paused = !0, n), i || {})),
            s = function (t, i, n) {
                return r.resetTo(e, t, i, n)
            };
        return s.tween = r, s
    },
    isTweening: function (t) {
        return l.getTweensOf(t, !0).length > 0
    },
    defaults: function (t) {
        return t && t.ease && (t.ease = qe(t.ease, X.ease)), zt(X, t || {})
    },
    config: function (t) {
        return zt(z, t || {})
    },
    registerEffect: function (t) {
        var e = t.name,
            i = t.effect,
            n = t.plugins,
            r = t.defaults,
            s = t.extendTimeline;
        (n || "").split(",").forEach((function (t) {
            return t && !vt[t] && !ut[t] && ft(e + " effect requires " + t + " plugin.")
        })), yt[e] = function (t, e, n) {
            return i(de(t), Bt(e || {}, r), n)
        }, s && ($e.prototype[e] = function (t, i, n) {
            return this.add(yt[e](t, Q(i) ? i : (n = i) && {}, this), n)
        })
    },
    registerEase: function (t, e) {
        ze[t] = qe(e)
    },
    parseEase: function (t, e) {
        return arguments.length ? qe(t, e) : ze
    },
    getById: function (t) {
        return l.getById(t)
    },
    exportRoot: function (t, e) {
        void 0 === t && (t = {});
        var i, n, r = new $e(t);
        for (r.smoothChildTiming = $(t.smoothChildTiming), l.remove(r), r._dp = 0, r._time = r._tTime = l._time, i = l._first; i;) n = i._next, !e && !i._dur && i instanceof ai && i.vars.onComplete === i._targets[0] || Zt(r, i, i._start - i._delay), i = n;
        return Zt(l, r, 0), r
    },
    utils: {
        wrap: function t(e, i, n) {
            var r = i - e;
            return tt(e) ? xe(e, t(0, e.length), i) : ue(n, (function (t) {
                return (r + (t - e) % r) % r + e
            }))
        },
        wrapYoyo: function t(e, i, n) {
            var r = i - e,
                s = 2 * r;
            return tt(e) ? xe(e, t(0, e.length - 1), i) : ue(n, (function (t) {
                return e + ((t = (s + (t - e) % s) % s || 0) > r ? s - t : t)
            }))
        },
        distribute: ge,
        random: ye,
        snap: ve,
        normalize: function (t, e, i) {
            return we(t, e, 0, 1, i)
        },
        getUnit: le,
        clamp: function (t, e, i) {
            return ue(i, (function (i) {
                return he(t, e, i)
            }))
        },
        splitColor: Ee,
        toArray: de,
        selector: function (t) {
            return t = de(t)[0] || ft("Invalid scope") || {},
                function (e) {
                    var i = t.current || t.nativeElement || t;
                    return de(e, i.querySelectorAll ? i : i === t ? ft("Invalid scope") || p.createElement("div") : t)
                }
        },
        mapRange: we,
        pipe: function () {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
            return function (t) {
                return e.reduce((function (t, e) {
                    return e(t)
                }), t)
            }
        },
        unitize: function (t, e) {
            return function (i) {
                return t(parseFloat(i)) + (e || le(i))
            }
        },
        interpolate: function t(e, i, n, r) {
            var s = isNaN(e + i) ? 0 : function (t) {
                return (1 - t) * e + t * i
            };
            if (!s) {
                var o, a, u, h, l, c = U(e),
                    f = {};
                if (!0 === n && (r = 1) && (n = null), c) e = {
                    p: e
                }, i = {
                    p: i
                };
                else if (tt(e) && !tt(i)) {
                    for (u = [], h = e.length, l = h - 2, a = 1; a < h; a++) u.push(t(e[a - 1], e[a]));
                    h--, s = function (t) {
                        t *= h;
                        var e = Math.min(l, ~~t);
                        return u[e](t - e)
                    }, n = i
                } else r || (e = Rt(tt(e) ? [] : {}, e));
                if (!u) {
                    for (o in i) ti.call(f, e, o, "get", i[o]);
                    s = function (t) {
                        return gi(t, f) || (c ? e.p : e)
                    }
                }
            }
            return ue(n, s)
        },
        shuffle: me
    },
    install: lt,
    effects: yt,
    ticker: Be,
    updateRoot: $e.updateRoot,
    plugins: vt,
    globalTimeline: l,
    core: {
        PropTween: bi,
        globals: pt,
        Tween: ai,
        Timeline: $e,
        Animation: Qe,
        getCache: Ot,
        _removeLinkedListItem: Vt,
        suppressOverwrites: function (t) {
            return h = t
        }
    }
};
kt("to,from,fromTo,delayedCall,set,killTweensOf", (function (t) {
    return wi[t] = ai[t]
})), Be.add($e.updateRoot), g = wi.to({}, {
    duration: 0
});
var Ti = function (t, e) {
        for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e;) i = i._next;
        return i
    },
    Oi = function (t, e) {
        return {
            name: t,
            rawVars: 1,
            init: function (t, i, n) {
                n._onInit = function (t) {
                    var n, r;
                    if (U(i) && (n = {}, kt(i, (function (t) {
                            return n[t] = 1
                        })), i = n), e) {
                        for (r in n = {}, i) n[r] = e(i[r]);
                        i = n
                    }! function (t, e) {
                        var i, n, r, s = t._targets;
                        for (i in e)
                            for (n = s.length; n--;)(r = t._ptLookup[n][i]) && (r = r.d) && (r._pt && (r = Ti(r, i)), r && r.modifier && r.modifier(e[i], t, s[n], i))
                    }(t, i)
                }
            }
        }
    },
    Mi = wi.registerPlugin({
        name: "attr",
        init: function (t, e, i, n, r) {
            var s, o;
            for (s in e)(o = this.add(t, "setAttribute", (t.getAttribute(s) || 0) + "", e[s], n, r, 0, 0, s)) && (o.op = s), this._props.push(s)
        }
    }, {
        name: "endArray",
        init: function (t, e) {
            for (var i = e.length; i--;) this.add(t, i, t[i] || 0, e[i])
        }
    }, Oi("roundProps", _e), Oi("modifiers"), Oi("snap", ve)) || wi;
ai.version = $e.version = Mi.version = "3.10.4", d = 1, J() && Re();
ze.Power0, ze.Power1, ze.Power2, ze.Power3, ze.Power4, ze.Linear, ze.Quad, ze.Cubic, ze.Quart, ze.Quint, ze.Strong, ze.Elastic, ze.Back, ze.SteppedEase, ze.Bounce, ze.Sine, ze.Expo, ze.Circ;
var ki, Di, Ci, Ei, Si, Ai, Pi, Ii = {},
    Li = 180 / Math.PI,
    Bi = Math.PI / 180,
    Ri = Math.atan2,
    zi = /([A-Z])/g,
    Xi = /(left|right|width|margin|padding|x)/i,
    Yi = /[\s,\(]\S/,
    Fi = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    },
    Vi = function (t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    },
    Ni = function (t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    },
    qi = function (t, e) {
        return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
    },
    ji = function (t, e) {
        var i = e.s + e.c * t;
        e.set(e.t, e.p, ~~(i + (i < 0 ? -.5 : .5)) + e.u, e)
    },
    Ui = function (t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e)
    },
    Wi = function (t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
    },
    Hi = function (t, e, i) {
        return t.style[e] = i
    },
    Gi = function (t, e, i) {
        return t.style.setProperty(e, i)
    },
    Qi = function (t, e, i) {
        return t._gsap[e] = i
    },
    $i = function (t, e, i) {
        return t._gsap.scaleX = t._gsap.scaleY = i
    },
    Ji = function (t, e, i, n, r) {
        var s = t._gsap;
        s.scaleX = s.scaleY = i, s.renderTransform(r, s)
    },
    Zi = function (t, e, i, n, r) {
        var s = t._gsap;
        s[e] = i, s.renderTransform(r, s)
    },
    Ki = "transform",
    tn = Ki + "Origin",
    en = function (t, e) {
        var i = Di.createElementNS ? Di.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Di.createElement(t);
        return i.style ? i : Di.createElement(t)
    },
    nn = function t(e, i, n) {
        var r = getComputedStyle(e);
        return r[i] || r.getPropertyValue(i.replace(zi, "-$1").toLowerCase()) || r.getPropertyValue(i) || !n && t(e, sn(i) || i, 1) || ""
    },
    rn = "O,Moz,ms,Ms,Webkit".split(","),
    sn = function (t, e, i) {
        var n = (e || Si).style,
            r = 5;
        if (t in n && !i) return t;
        for (t = t.charAt(0).toUpperCase() + t.substr(1); r-- && !(rn[r] + t in n););
        return r < 0 ? null : (3 === r ? "ms" : r >= 0 ? rn[r] : "") + t
    },
    on = function () {
        "undefined" != typeof window && window.document && (ki = window, Di = ki.document, Ci = Di.documentElement, Si = en("div") || {
            style: {}
        }, en("div"), Ki = sn(Ki), tn = Ki + "Origin", Si.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Pi = !!sn("perspective"), Ei = 1)
    },
    an = function t(e) {
        var i, n = en("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            r = this.parentNode,
            s = this.nextSibling,
            o = this.style.cssText;
        if (Ci.appendChild(n), n.appendChild(this), this.style.display = "block", e) try {
            i = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t
        } catch (t) {} else this._gsapBBox && (i = this._gsapBBox());
        return r && (s ? r.insertBefore(this, s) : r.appendChild(this)), Ci.removeChild(n), this.style.cssText = o, i
    },
    un = function (t, e) {
        for (var i = e.length; i--;)
            if (t.hasAttribute(e[i])) return t.getAttribute(e[i])
    },
    hn = function (t) {
        var e;
        try {
            e = t.getBBox()
        } catch (i) {
            e = an.call(t, !0)
        }
        return e && (e.width || e.height) || t.getBBox === an || (e = an.call(t, !0)), !e || e.width || e.x || e.y ? e : {
            x: +un(t, ["x", "cx", "x1"]) || 0,
            y: +un(t, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        }
    },
    ln = function (t) {
        return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !hn(t))
    },
    cn = function (t, e) {
        if (e) {
            var i = t.style;
            e in Ii && e !== tn && (e = Ki), i.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), i.removeProperty(e.replace(zi, "-$1").toLowerCase())) : i.removeAttribute(e)
        }
    },
    fn = function (t, e, i, n, r, s) {
        var o = new bi(t._pt, e, i, 0, 1, s ? Wi : Ui);
        return t._pt = o, o.b = n, o.e = r, t._props.push(i), o
    },
    pn = {
        deg: 1,
        rad: 1,
        turn: 1
    },
    dn = function t(e, i, n, r) {
        var s, o, a, u, h = parseFloat(n) || 0,
            l = (n + "").trim().substr((h + "").length) || "px",
            c = Si.style,
            f = Xi.test(i),
            p = "svg" === e.tagName.toLowerCase(),
            d = (p ? "client" : "offset") + (f ? "Width" : "Height"),
            m = 100,
            g = "px" === r,
            _ = "%" === r;
        return r === l || !h || pn[r] || pn[l] ? h : ("px" !== l && !g && (h = t(e, i, n, "px")), u = e.getCTM && ln(e), !_ && "%" !== l || !Ii[i] && !~i.indexOf("adius") ? (c[f ? "width" : "height"] = m + (g ? l : r), o = ~i.indexOf("adius") || "em" === r && e.appendChild && !p ? e : e.parentNode, u && (o = (e.ownerSVGElement || {}).parentNode), o && o !== Di && o.appendChild || (o = Di.body), (a = o._gsap) && _ && a.width && f && a.time === Be.time ? Dt(h / a.width * m) : ((_ || "%" === l) && (c.position = nn(e, "position")), o === e && (c.position = "static"), o.appendChild(Si), s = Si[d], o.removeChild(Si), c.position = "absolute", f && _ && ((a = Ot(o)).time = Be.time, a.width = o[d]), Dt(g ? s * h / m : s && h ? m / s * h : 0))) : (s = u ? e.getBBox()[f ? "width" : "height"] : e[d], Dt(_ ? h / s * m : h / 100 * s)))
    },
    mn = function (t, e, i, n) {
        var r;
        return Ei || on(), e in Fi && "transform" !== e && ~(e = Fi[e]).indexOf(",") && (e = e.split(",")[0]), Ii[e] && "transform" !== e ? (r = kn(t, n), r = "transformOrigin" !== e ? r[e] : r.svg ? r.origin : Dn(nn(t, tn)) + " " + r.zOrigin + "px") : (!(r = t.style[e]) || "auto" === r || n || ~(r + "").indexOf("calc(")) && (r = yn[e] && yn[e](t, e, i) || nn(t, e) || Mt(t, e) || ("opacity" === e ? 1 : 0)), i && !~(r + "").trim().indexOf(" ") ? dn(t, e, r, i) + i : r
    },
    gn = function (t, e, i, n) {
        if (!i || "none" === i) {
            var r = sn(e, t, 1),
                s = r && nn(t, r, 1);
            s && s !== i ? (e = r, i = s) : "borderColor" === e && (i = nn(t, "borderTopColor"))
        }
        var o, a, u, h, l, c, f, p, d, m, g, _ = new bi(this._pt, t.style, e, 0, 1, mi),
            v = 0,
            y = 0;
        if (_.b = i, _.e = n, i += "", "auto" === (n += "") && (t.style[e] = n, n = nn(t, e) || n, t.style[e] = i), Le(o = [i, n]), n = o[1], u = (i = o[0]).match(nt) || [], (n.match(nt) || []).length) {
            for (; a = nt.exec(n);) f = a[0], d = n.substring(v, a.index), l ? l = (l + 1) % 5 : "rgba(" !== d.substr(-5) && "hsla(" !== d.substr(-5) || (l = 1), f !== (c = u[y++] || "") && (h = parseFloat(c) || 0, g = c.substr((h + "").length), "=" === f.charAt(1) && (f = Et(h, f) + g), p = parseFloat(f), m = f.substr((p + "").length), v = nt.lastIndex - m.length, m || (m = m || z.units[e] || g, v === n.length && (n += m, _.e += m)), g !== m && (h = dn(t, e, c, m) || 0), _._pt = {
                _next: _._pt,
                p: d || 1 === y ? d : ",",
                s: h,
                c: p - h,
                m: l && l < 4 || "zIndex" === e ? Math.round : 0
            });
            _.c = v < n.length ? n.substring(v, n.length) : ""
        } else _.r = "display" === e && "none" === n ? Wi : Ui;
        return st.test(n) && (_.e = 0), this._pt = _, _
    },
    _n = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    },
    vn = function (t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var i, n, r, s = e.t,
                o = s.style,
                a = e.u,
                u = s._gsap;
            if ("all" === a || !0 === a) o.cssText = "", n = 1;
            else
                for (r = (a = a.split(",")).length; --r > -1;) i = a[r], Ii[i] && (n = 1, i = "transformOrigin" === i ? tn : Ki), cn(s, i);
            n && (cn(s, Ki), u && (u.svg && s.removeAttribute("transform"), kn(s, 1), u.uncache = 1))
        }
    },
    yn = {
        clearProps: function (t, e, i, n, r) {
            if ("isFromStart" !== r.data) {
                var s = t._pt = new bi(t._pt, e, i, 0, 0, vn);
                return s.u = n, s.pr = -10, s.tween = r, t._props.push(i), 1
            }
        }
    },
    xn = [1, 0, 0, 1, 0, 0],
    bn = {},
    wn = function (t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
    },
    Tn = function (t) {
        var e = nn(t, Ki);
        return wn(e) ? xn : e.substr(7).match(it).map(Dt)
    },
    On = function (t, e) {
        var i, n, r, s, o = t._gsap || Ot(t),
            a = t.style,
            u = Tn(t);
        return o.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(r = t.transform.baseVal.consolidate().matrix).a, r.b, r.c, r.d, r.e, r.f]).join(",") ? xn : u : (u !== xn || t.offsetParent || t === Ci || o.svg || (r = a.display, a.display = "block", (i = t.parentNode) && t.offsetParent || (s = 1, n = t.nextSibling, Ci.appendChild(t)), u = Tn(t), r ? a.display = r : cn(t, "display"), s && (n ? i.insertBefore(t, n) : i ? i.appendChild(t) : Ci.removeChild(t))), e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
    },
    Mn = function (t, e, i, n, r, s) {
        var o, a, u, h = t._gsap,
            l = r || On(t, !0),
            c = h.xOrigin || 0,
            f = h.yOrigin || 0,
            p = h.xOffset || 0,
            d = h.yOffset || 0,
            m = l[0],
            g = l[1],
            _ = l[2],
            v = l[3],
            y = l[4],
            x = l[5],
            b = e.split(" "),
            w = parseFloat(b[0]) || 0,
            T = parseFloat(b[1]) || 0;
        i ? l !== xn && (a = m * v - g * _) && (u = w * (-g / a) + T * (m / a) - (m * x - g * y) / a, w = w * (v / a) + T * (-_ / a) + (_ * x - v * y) / a, T = u) : (w = (o = hn(t)).x + (~b[0].indexOf("%") ? w / 100 * o.width : w), T = o.y + (~(b[1] || b[0]).indexOf("%") ? T / 100 * o.height : T)), n || !1 !== n && h.smooth ? (y = w - c, x = T - f, h.xOffset = p + (y * m + x * _) - y, h.yOffset = d + (y * g + x * v) - x) : h.xOffset = h.yOffset = 0, h.xOrigin = w, h.yOrigin = T, h.smooth = !!n, h.origin = e, h.originIsAbsolute = !!i, t.style[tn] = "0px 0px", s && (fn(s, h, "xOrigin", c, w), fn(s, h, "yOrigin", f, T), fn(s, h, "xOffset", p, h.xOffset), fn(s, h, "yOffset", d, h.yOffset)), t.setAttribute("data-svg-origin", w + " " + T)
    },
    kn = function (t, e) {
        var i = t._gsap || new Ge(t);
        if ("x" in i && !e && !i.uncache) return i;
        var n, r, s, o, a, u, h, l, c, f, p, d, m, g, _, v, y, x, b, w, T, O, M, k, D, C, E, S, A, P, I, L, B = t.style,
            R = i.scaleX < 0,
            X = "px",
            Y = "deg",
            F = nn(t, tn) || "0";
        return n = r = s = u = h = l = c = f = p = 0, o = a = 1, i.svg = !(!t.getCTM || !ln(t)), g = On(t, i.svg), i.svg && (k = (!i.uncache || "0px 0px" === F) && !e && t.getAttribute("data-svg-origin"), Mn(t, k || F, !!k || i.originIsAbsolute, !1 !== i.smooth, g)), d = i.xOrigin || 0, m = i.yOrigin || 0, g !== xn && (x = g[0], b = g[1], w = g[2], T = g[3], n = O = g[4], r = M = g[5], 6 === g.length ? (o = Math.sqrt(x * x + b * b), a = Math.sqrt(T * T + w * w), u = x || b ? Ri(b, x) * Li : 0, (c = w || T ? Ri(w, T) * Li + u : 0) && (a *= Math.abs(Math.cos(c * Bi))), i.svg && (n -= d - (d * x + m * w), r -= m - (d * b + m * T))) : (L = g[6], P = g[7], E = g[8], S = g[9], A = g[10], I = g[11], n = g[12], r = g[13], s = g[14], h = (_ = Ri(L, A)) * Li, _ && (k = O * (v = Math.cos(-_)) + E * (y = Math.sin(-_)), D = M * v + S * y, C = L * v + A * y, E = O * -y + E * v, S = M * -y + S * v, A = L * -y + A * v, I = P * -y + I * v, O = k, M = D, L = C), l = (_ = Ri(-w, A)) * Li, _ && (v = Math.cos(-_), I = T * (y = Math.sin(-_)) + I * v, x = k = x * v - E * y, b = D = b * v - S * y, w = C = w * v - A * y), u = (_ = Ri(b, x)) * Li, _ && (k = x * (v = Math.cos(_)) + b * (y = Math.sin(_)), D = O * v + M * y, b = b * v - x * y, M = M * v - O * y, x = k, O = D), h && Math.abs(h) + Math.abs(u) > 359.9 && (h = u = 0, l = 180 - l), o = Dt(Math.sqrt(x * x + b * b + w * w)), a = Dt(Math.sqrt(M * M + L * L)), _ = Ri(O, M), c = Math.abs(_) > 2e-4 ? _ * Li : 0, p = I ? 1 / (I < 0 ? -I : I) : 0), i.svg && (k = t.getAttribute("transform"), i.forceCSS = t.setAttribute("transform", "") || !wn(nn(t, Ki)), k && t.setAttribute("transform", k))), Math.abs(c) > 90 && Math.abs(c) < 270 && (R ? (o *= -1, c += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (a *= -1, c += c <= 0 ? 180 : -180)), e = e || i.uncache, i.x = n - ((i.xPercent = n && (!e && i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetWidth * i.xPercent / 100 : 0) + X, i.y = r - ((i.yPercent = r && (!e && i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-r) ? -50 : 0))) ? t.offsetHeight * i.yPercent / 100 : 0) + X, i.z = s + X, i.scaleX = Dt(o), i.scaleY = Dt(a), i.rotation = Dt(u) + Y, i.rotationX = Dt(h) + Y, i.rotationY = Dt(l) + Y, i.skewX = c + Y, i.skewY = f + Y, i.transformPerspective = p + X, (i.zOrigin = parseFloat(F.split(" ")[2]) || 0) && (B[tn] = Dn(F)), i.xOffset = i.yOffset = 0, i.force3D = z.force3D, i.renderTransform = i.svg ? An : Pi ? Sn : En, i.uncache = 0, i
    },
    Dn = function (t) {
        return (t = t.split(" "))[0] + " " + t[1]
    },
    Cn = function (t, e, i) {
        var n = le(e);
        return Dt(parseFloat(e) + parseFloat(dn(t, "x", i + "px", n))) + n
    },
    En = function (t, e) {
        e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Sn(t, e)
    },
    Sn = function (t, e) {
        var i = e || this,
            n = i.xPercent,
            r = i.yPercent,
            s = i.x,
            o = i.y,
            a = i.z,
            u = i.rotation,
            h = i.rotationY,
            l = i.rotationX,
            c = i.skewX,
            f = i.skewY,
            p = i.scaleX,
            d = i.scaleY,
            m = i.transformPerspective,
            g = i.force3D,
            _ = i.target,
            v = i.zOrigin,
            y = "",
            x = "auto" === g && t && 1 !== t || !0 === g;
        if (v && ("0deg" !== l || "0deg" !== h)) {
            var b, w = parseFloat(h) * Bi,
                T = Math.sin(w),
                O = Math.cos(w);
            w = parseFloat(l) * Bi, b = Math.cos(w), s = Cn(_, s, T * b * -v), o = Cn(_, o, -Math.sin(w) * -v), a = Cn(_, a, O * b * -v + v)
        }
        "0px" !== m && (y += "perspective(" + m + ") "), (n || r) && (y += "translate(" + n + "%, " + r + "%) "), (x || "0px" !== s || "0px" !== o || "0px" !== a) && (y += "0px" !== a || x ? "translate3d(" + s + ", " + o + ", " + a + ") " : "translate(" + s + ", " + o + ") "), "0deg" !== u && (y += "rotate(" + u + ") "), "0deg" !== h && (y += "rotateY(" + h + ") "), "0deg" !== l && (y += "rotateX(" + l + ") "), "0deg" === c && "0deg" === f || (y += "skew(" + c + ", " + f + ") "), 1 === p && 1 === d || (y += "scale(" + p + ", " + d + ") "), _.style[Ki] = y || "translate(0, 0)"
    },
    An = function (t, e) {
        var i, n, r, s, o, a = e || this,
            u = a.xPercent,
            h = a.yPercent,
            l = a.x,
            c = a.y,
            f = a.rotation,
            p = a.skewX,
            d = a.skewY,
            m = a.scaleX,
            g = a.scaleY,
            _ = a.target,
            v = a.xOrigin,
            y = a.yOrigin,
            x = a.xOffset,
            b = a.yOffset,
            w = a.forceCSS,
            T = parseFloat(l),
            O = parseFloat(c);
        f = parseFloat(f), p = parseFloat(p), (d = parseFloat(d)) && (p += d = parseFloat(d), f += d), f || p ? (f *= Bi, p *= Bi, i = Math.cos(f) * m, n = Math.sin(f) * m, r = Math.sin(f - p) * -g, s = Math.cos(f - p) * g, p && (d *= Bi, o = Math.tan(p - d), r *= o = Math.sqrt(1 + o * o), s *= o, d && (o = Math.tan(d), i *= o = Math.sqrt(1 + o * o), n *= o)), i = Dt(i), n = Dt(n), r = Dt(r), s = Dt(s)) : (i = m, s = g, n = r = 0), (T && !~(l + "").indexOf("px") || O && !~(c + "").indexOf("px")) && (T = dn(_, "x", l, "px"), O = dn(_, "y", c, "px")), (v || y || x || b) && (T = Dt(T + v - (v * i + y * r) + x), O = Dt(O + y - (v * n + y * s) + b)), (u || h) && (o = _.getBBox(), T = Dt(T + u / 100 * o.width), O = Dt(O + h / 100 * o.height)), o = "matrix(" + i + "," + n + "," + r + "," + s + "," + T + "," + O + ")", _.setAttribute("transform", o), w && (_.style[Ki] = o)
    },
    Pn = function (t, e, i, n, r) {
        var s, o, a = 360,
            u = U(r),
            h = parseFloat(r) * (u && ~r.indexOf("rad") ? Li : 1) - n,
            l = n + h + "deg";
        return u && ("short" === (s = r.split("_")[1]) && (h %= a) !== h % 180 && (h += h < 0 ? a : -360), "cw" === s && h < 0 ? h = (h + 36e9) % a - ~~(h / a) * a : "ccw" === s && h > 0 && (h = (h - 36e9) % a - ~~(h / a) * a)), t._pt = o = new bi(t._pt, e, i, n, h, Ni), o.e = l, o.u = "deg", t._props.push(i), o
    },
    In = function (t, e) {
        for (var i in e) t[i] = e[i];
        return t
    },
    Ln = function (t, e, i) {
        var n, r, s, o, a, u, h, l = In({}, i._gsap),
            c = i.style;
        for (r in l.svg ? (s = i.getAttribute("transform"), i.setAttribute("transform", ""), c[Ki] = e, n = kn(i, 1), cn(i, Ki), i.setAttribute("transform", s)) : (s = getComputedStyle(i)[Ki], c[Ki] = e, n = kn(i, 1), c[Ki] = s), Ii)(s = l[r]) !== (o = n[r]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) < 0 && (a = le(s) !== (h = le(o)) ? dn(i, r, s, h) : parseFloat(s), u = parseFloat(o), t._pt = new bi(t._pt, n, r, a, u - a, Vi), t._pt.u = h || 0, t._props.push(r));
        In(n, l)
    };
kt("padding,margin,Width,Radius", (function (t, e) {
    var i = "Top",
        n = "Right",
        r = "Bottom",
        s = "Left",
        o = (e < 3 ? [i, n, r, s] : [i + s, i + n, r + n, r + s]).map((function (i) {
            return e < 2 ? t + i : "border" + i + t
        }));
    yn[e > 1 ? "border" + t : t] = function (t, e, i, n, r) {
        var s, a;
        if (arguments.length < 4) return s = o.map((function (e) {
            return mn(t, e, i)
        })), 5 === (a = s.join(" ")).split(s[0]).length ? s[0] : a;
        s = (n + "").split(" "), a = {}, o.forEach((function (t, e) {
            return a[t] = s[e] = s[e] || s[(e - 1) / 2 | 0]
        })), t.init(e, a, r)
    }
}));
var Bn, Rn, zn, Xn = {
    name: "css",
    register: on,
    targetTest: function (t) {
        return t.style && t.nodeType
    },
    init: function (t, e, i, n, r) {
        var s, o, a, u, h, l, c, f, p, d, m, g, _, v, y, x, b, w, T, O = this._props,
            M = t.style,
            k = i.vars.startAt;
        for (c in Ei || on(), e)
            if ("autoRound" !== c && (o = e[c], !vt[c] || !ei(c, e, i, n, t, r)))
                if (h = typeof o, l = yn[c], "function" === h && (h = typeof (o = o.call(i, n, t, r))), "string" === h && ~o.indexOf("random(") && (o = be(o)), l) l(this, t, c, o, i) && (y = 1);
                else if ("--" === c.substr(0, 2)) s = (getComputedStyle(t).getPropertyValue(c) + "").trim(), o += "", Pe.lastIndex = 0, Pe.test(s) || (f = le(s), p = le(o)), p ? f !== p && (s = dn(t, c, s, p) + p) : f && (o += f), this.add(M, "setProperty", s, o, n, r, 0, 0, c), O.push(c);
        else if ("undefined" !== h) {
            if (k && c in k ? (s = "function" == typeof k[c] ? k[c].call(i, n, t, r) : k[c], U(s) && ~s.indexOf("random(") && (s = be(s)), le(s + "") || (s += z.units[c] || le(mn(t, c)) || ""), "=" === (s + "").charAt(1) && (s = mn(t, c))) : s = mn(t, c), u = parseFloat(s), (d = "string" === h && "=" === o.charAt(1) && o.substr(0, 2)) && (o = o.substr(2)), a = parseFloat(o), c in Fi && ("autoAlpha" === c && (1 === u && "hidden" === mn(t, "visibility") && a && (u = 0), fn(this, M, "visibility", u ? "inherit" : "hidden", a ? "inherit" : "hidden", !a)), "scale" !== c && "transform" !== c && ~(c = Fi[c]).indexOf(",") && (c = c.split(",")[0])), m = c in Ii)
                if (g || ((_ = t._gsap).renderTransform && !e.parseTransform || kn(t, e.parseTransform), v = !1 !== e.smoothOrigin && _.smooth, (g = this._pt = new bi(this._pt, M, Ki, 0, 1, _.renderTransform, _, 0, -1)).dep = 1), "scale" === c) this._pt = new bi(this._pt, _, "scaleY", _.scaleY, (d ? Et(_.scaleY, d + a) : a) - _.scaleY || 0), O.push("scaleY", c), c += "X";
                else {
                    if ("transformOrigin" === c) {
                        b = void 0, w = void 0, T = void 0, b = (x = o).split(" "), w = b[0], T = b[1] || "50%", "top" !== w && "bottom" !== w && "left" !== T && "right" !== T || (x = w, w = T, T = x), b[0] = _n[w] || w, b[1] = _n[T] || T, o = b.join(" "), _.svg ? Mn(t, o, 0, v, 0, this) : ((p = parseFloat(o.split(" ")[2]) || 0) !== _.zOrigin && fn(this, _, "zOrigin", _.zOrigin, p), fn(this, M, c, Dn(s), Dn(o)));
                        continue
                    }
                    if ("svgOrigin" === c) {
                        Mn(t, o, 1, v, 0, this);
                        continue
                    }
                    if (c in bn) {
                        Pn(this, _, c, u, d ? Et(u, d + o) : o);
                        continue
                    }
                    if ("smoothOrigin" === c) {
                        fn(this, _, "smooth", _.smooth, o);
                        continue
                    }
                    if ("force3D" === c) {
                        _[c] = o;
                        continue
                    }
                    if ("transform" === c) {
                        Ln(this, o, t);
                        continue
                    }
                }
            else c in M || (c = sn(c) || c);
            if (m || (a || 0 === a) && (u || 0 === u) && !Yi.test(o) && c in M) a || (a = 0), (f = (s + "").substr((u + "").length)) !== (p = le(o) || (c in z.units ? z.units[c] : f)) && (u = dn(t, c, s, p)), this._pt = new bi(this._pt, m ? _ : M, c, u, (d ? Et(u, d + a) : a) - u, m || "px" !== p && "zIndex" !== c || !1 === e.autoRound ? Vi : ji), this._pt.u = p || 0, f !== p && "%" !== p && (this._pt.b = s, this._pt.r = qi);
            else if (c in M) gn.call(this, t, c, s, d ? d + o : o);
            else {
                if (!(c in t)) {
                    ct(c, o);
                    continue
                }
                this.add(t, c, s || t[c], d ? d + o : o, n, r)
            }
            O.push(c)
        }
        y && xi(this)
    },
    get: mn,
    aliases: Fi,
    getSetter: function (t, e, i) {
        var n = Fi[e];
        return n && n.indexOf(",") < 0 && (e = n), e in Ii && e !== tn && (t._gsap.x || mn(t, "x")) ? i && Ai === i ? "scale" === e ? $i : Qi : (Ai = i || {}, "scale" === e ? Ji : Zi) : t.style && !G(t.style[e]) ? Hi : ~e.indexOf("-") ? Gi : fi(t, e)
    },
    core: {
        _removeProperty: cn,
        _getMatrix: On
    }
};
Mi.utils.checkPrefix = sn, zn = kt((Bn = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (Rn = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function (t) {
    Ii[t] = 1
})), kt(Rn, (function (t) {
    z.units[t] = "deg", bn[t] = 1
})), Fi[zn[13]] = Bn + "," + Rn, kt("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function (t) {
    var e = t.split(":");
    Fi[e[1]] = zn[e[0]]
})), kt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function (t) {
    z.units[t] = "px"
})), Mi.registerPlugin(Xn);
var Yn, Fn, Vn, Nn, qn, jn, Un, Wn, Hn, Gn = Mi.registerPlugin(Xn) || Mi,
    Qn = (Gn.core.Tween, "transform"),
    $n = Qn + "Origin",
    Jn = function (t) {
        var e = t.ownerDocument || t;
        !(Qn in t.style) && "msTransform" in t.style && ($n = (Qn = "msTransform") + "Origin");
        for (; e.parentNode && (e = e.parentNode););
        if (Fn = window, Un = new ur, e) {
            Yn = e, Vn = e.documentElement, Nn = e.body, (Wn = Yn.createElementNS("http://www.w3.org/2000/svg", "g")).style.transform = "none";
            var i = e.createElement("div"),
                n = e.createElement("div");
            Nn.appendChild(i), i.appendChild(n), i.style.position = "static", i.style[Qn] = "translate3d(0,0,1px)", Hn = n.offsetParent !== i, Nn.removeChild(i)
        }
        return e
    },
    Zn = [],
    Kn = [],
    tr = function () {
        return Fn.pageYOffset || Yn.scrollTop || Vn.scrollTop || Nn.scrollTop || 0
    },
    er = function () {
        return Fn.pageXOffset || Yn.scrollLeft || Vn.scrollLeft || Nn.scrollLeft || 0
    },
    ir = function (t) {
        return t.ownerSVGElement || ("svg" === (t.tagName + "").toLowerCase() ? t : null)
    },
    nr = function t(e) {
        return "fixed" === Fn.getComputedStyle(e).position || ((e = e.parentNode) && 1 === e.nodeType ? t(e) : void 0)
    },
    rr = function t(e, i) {
        if (e.parentNode && (Yn || Jn(e))) {
            var n = ir(e),
                r = n ? n.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml",
                s = n ? i ? "rect" : "g" : "div",
                o = 2 !== i ? 0 : 100,
                a = 3 === i ? 100 : 0,
                u = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
                h = Yn.createElementNS ? Yn.createElementNS(r.replace(/^https/, "http"), s) : Yn.createElement(s);
            return i && (n ? (jn || (jn = t(e)), h.setAttribute("width", .01), h.setAttribute("height", .01), h.setAttribute("transform", "translate(" + o + "," + a + ")"), jn.appendChild(h)) : (qn || ((qn = t(e)).style.cssText = u), h.style.cssText = u + "width:0.1px;height:0.1px;top:" + a + "px;left:" + o + "px", qn.appendChild(h))), h
        }
        throw "Need document and parent."
    },
    sr = function (t) {
        var e, i = t.getCTM();
        return i || (e = t.style[Qn], t.style[Qn] = "none", t.appendChild(Wn), i = Wn.getCTM(), t.removeChild(Wn), e ? t.style[Qn] = e : t.style.removeProperty(Qn.replace(/([A-Z])/g, "-$1").toLowerCase())), i || Un.clone()
    },
    or = function (t, e) {
        var i, n, r, s, o, a, u = ir(t),
            h = t === u,
            l = u ? Zn : Kn,
            c = t.parentNode;
        if (t === Fn) return t;
        if (l.length || l.push(rr(t, 1), rr(t, 2), rr(t, 3)), i = u ? jn : qn, u) h ? (s = -(r = sr(t)).e / r.a, o = -r.f / r.d, n = Un) : t.getBBox ? (r = t.getBBox(), n = (n = t.transform ? t.transform.baseVal : {}).numberOfItems ? n.numberOfItems > 1 ? function (t) {
            for (var e = new ur, i = 0; i < t.numberOfItems; i++) e.multiply(t.getItem(i).matrix);
            return e
        }(n) : n.getItem(0).matrix : Un, s = n.a * r.x + n.c * r.y, o = n.b * r.x + n.d * r.y) : (n = new ur, s = o = 0), e && "g" === t.tagName.toLowerCase() && (s = o = 0), (h ? u : c).appendChild(i), i.setAttribute("transform", "matrix(" + n.a + "," + n.b + "," + n.c + "," + n.d + "," + (n.e + s) + "," + (n.f + o) + ")");
        else {
            if (s = o = 0, Hn)
                for (n = t.offsetParent, r = t; r && (r = r.parentNode) && r !== n && r.parentNode;)(Fn.getComputedStyle(r)[Qn] + "").length > 4 && (s = r.offsetLeft, o = r.offsetTop, r = 0);
            if ("absolute" !== (a = Fn.getComputedStyle(t)).position && "fixed" !== a.position)
                for (n = t.offsetParent; c && c !== n;) s += c.scrollLeft || 0, o += c.scrollTop || 0, c = c.parentNode;
            (r = i.style).top = t.offsetTop - o + "px", r.left = t.offsetLeft - s + "px", r[Qn] = a[Qn], r[$n] = a[$n], r.position = "fixed" === a.position ? "fixed" : "absolute", t.parentNode.appendChild(i)
        }
        return i
    },
    ar = function (t, e, i, n, r, s, o) {
        return t.a = e, t.b = i, t.c = n, t.d = r, t.e = s, t.f = o, t
    },
    ur = function () {
        function t(t, e, i, n, r, s) {
            void 0 === t && (t = 1), void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === n && (n = 1), void 0 === r && (r = 0), void 0 === s && (s = 0), ar(this, t, e, i, n, r, s)
        }
        var e = t.prototype;
        return e.inverse = function () {
            var t = this.a,
                e = this.b,
                i = this.c,
                n = this.d,
                r = this.e,
                s = this.f,
                o = t * n - e * i || 1e-10;
            return ar(this, n / o, -e / o, -i / o, t / o, (i * s - n * r) / o, -(t * s - e * r) / o)
        }, e.multiply = function (t) {
            var e = this.a,
                i = this.b,
                n = this.c,
                r = this.d,
                s = this.e,
                o = this.f,
                a = t.a,
                u = t.c,
                h = t.b,
                l = t.d,
                c = t.e,
                f = t.f;
            return ar(this, a * e + h * n, a * i + h * r, u * e + l * n, u * i + l * r, s + c * e + f * n, o + c * i + f * r)
        }, e.clone = function () {
            return new t(this.a, this.b, this.c, this.d, this.e, this.f)
        }, e.equals = function (t) {
            var e = this.a,
                i = this.b,
                n = this.c,
                r = this.d,
                s = this.e,
                o = this.f;
            return e === t.a && i === t.b && n === t.c && r === t.d && s === t.e && o === t.f
        }, e.apply = function (t, e) {
            void 0 === e && (e = {});
            var i = t.x,
                n = t.y,
                r = this.a,
                s = this.b,
                o = this.c,
                a = this.d,
                u = this.e,
                h = this.f;
            return e.x = i * r + n * o + u || 0, e.y = i * s + n * a + h || 0, e
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
function hr(t, e, i, n) {
    if (!t || !t.parentNode || (Yn || Jn(t)).documentElement === t) return new ur;
    var r = function (t) {
            for (var e, i; t && t !== Nn;)(i = t._gsap) && i.uncache && i.get(t, "x"), i && !i.scaleX && !i.scaleY && i.renderTransform && (i.scaleX = i.scaleY = 1e-4, i.renderTransform(1, i), e ? e.push(i) : e = [i]), t = t.parentNode;
            return e
        }(t),
        s = ir(t) ? Zn : Kn,
        o = or(t, i),
        a = s[0].getBoundingClientRect(),
        u = s[1].getBoundingClientRect(),
        h = s[2].getBoundingClientRect(),
        l = o.parentNode,
        c = !n && nr(t),
        f = new ur((u.left - a.left) / 100, (u.top - a.top) / 100, (h.left - a.left) / 100, (h.top - a.top) / 100, a.left + (c ? 0 : er()), a.top + (c ? 0 : tr()));
    if (l.removeChild(o), r)
        for (a = r.length; a--;)(u = r[a]).scaleX = u.scaleY = 0, u.renderTransform(1, u);
    return e ? f.inverse() : f
}
var lr, cr, fr, pr, dr, mr, gr, _r = 1,
    vr = function (t, e) {
        return t.actions.forEach((function (t) {
            return t.vars[e] && t.vars[e](t)
        }))
    },
    yr = {},
    xr = 180 / Math.PI,
    br = Math.PI / 180,
    wr = {},
    Tr = {},
    Or = {},
    Mr = function (t) {
        return "string" == typeof t ? t.split(" ").join("").split(",") : t
    },
    kr = Mr("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"),
    Dr = Mr("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"),
    Cr = function (t) {
        return lr(t)[0] || console.warn("Element not found:", t)
    },
    Er = function (t) {
        return Math.round(1e4 * t) / 1e4 || 0
    },
    Sr = function (t, e, i) {
        return t.forEach((function (t) {
            return t.classList[i](e)
        }))
    },
    Ar = {
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
    Pr = {
        zIndex: 1,
        simple: 1,
        clearProps: 1,
        scale: 1,
        absolute: 1,
        fitChild: 1,
        getVars: 1,
        props: 1
    },
    Ir = function (t) {
        return t.replace(/([A-Z])/g, "-$1").toLowerCase()
    },
    Lr = function (t, e) {
        var i, n = {};
        for (i in t) e[i] || (n[i] = t[i]);
        return n
    },
    Br = {},
    Rr = function (t) {
        var e = Br[t] = Mr(t);
        return Or[t] = e.concat(Dr), e
    },
    zr = function t(e, i, n) {
        void 0 === n && (n = 0);
        for (var r = e.parentNode, s = 1e3 * Math.pow(10, n) * (i ? -1 : 1), o = i ? 900 * -s : 0; e;) o += s, e = e.previousSibling;
        return r ? o + t(r, i, n + 1) : o
    },
    Xr = function (t, e, i) {
        return t.forEach((function (t) {
            return t.d = zr(i ? t.element : t.t, e)
        })), t.sort((function (t, e) {
            return t.d - e.d
        })), t
    },
    Yr = function (t, e) {
        for (var i, n, r = t.element.style, s = t.css = t.css || [], o = e.length; o--;) n = r[i = e[o]] || r.getPropertyValue(i), s.push(n ? i : Tr[i] || (Tr[i] = Ir(i)), n);
        return r
    },
    Fr = function (t) {
        var e = t.css,
            i = t.element.style,
            n = 0;
        for (t.cache.uncache = 1; n < e.length; n += 2) e[n + 1] ? i[e[n]] = e[n + 1] : i.removeProperty(e[n])
    },
    Vr = function (t, e) {
        t.forEach((function (t) {
            return t.a.cache.uncache = 1
        })), e || t.finalStates.forEach(Fr)
    },
    Nr = "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","),
    qr = function (t, e, i) {
        var n, r, s, o = t.element,
            a = t.width,
            u = t.height,
            h = t.uncache,
            l = t.getProp,
            c = o.style,
            f = 4;
        if ("object" != typeof e && (e = t), fr && 1 !== i) return fr._abs.push({
            t: o,
            b: t,
            a: t,
            sd: 0
        }), fr._final.push((function () {
            return t.cache.uncache = 1, Fr(t)
        })), o;
        for (r = "none" === l("display"), t.isVisible && !r || (r && (Yr(t, ["display"]).display = e.display), t.matrix = e.matrix, t.width = a = t.width || e.width, t.height = u = t.height || e.height), Yr(t, Nr), s = window.getComputedStyle(o); f--;) c[Nr[f]] = s[Nr[f]];
        if (c.gridArea = "1 / 1 / 1 / 1", c.transition = "none", c.position = "absolute", c.width = a + "px", c.height = u + "px", c.top || (c.top = "0px"), c.left || (c.left = "0px"), h) n = new as(o);
        else if ((n = Lr(t, wr)).position = "absolute", t.simple) {
            var p = o.getBoundingClientRect();
            n.matrix = new ur(1, 0, 0, 1, p.left + er(), p.top + tr())
        } else n.matrix = hr(o, !1, !1, !0);
        return n = $r(n, t, !0), t.x = mr(n.x, .01), t.y = mr(n.y, .01), o
    },
    jr = function (t, e) {
        return !0 !== e && (e = lr(e), t = t.filter((function (t) {
            if (-1 !== e.indexOf((t.sd < 0 ? t.b : t.a).element)) return !0;
            t.t._gsap.renderTransform(1), t.t.style.width = t.b.width + "px", t.t.style.height = t.b.height + "px"
        }))), t
    },
    Ur = function (t) {
        return Xr(t, !0).forEach((function (t) {
            return (t.a.isVisible || t.b.isVisible) && qr(t.sd < 0 ? t.b : t.a, t.b, 1)
        }))
    },
    Wr = function (t, e, i, n) {
        return t instanceof as ? t : t instanceof os ? function (t, e) {
            return e && t.idLookup[Wr(e).id] || t.elementStates[0]
        }(t, n) : new as("string" == typeof t ? Cr(t) || console.warn(t + " not found") : t, e, i)
    },
    Hr = function (t, e) {
        var i, n = t.style || t;
        for (i in e) n[i] = e[i]
    },
    Gr = function (t) {
        return t.map((function (t) {
            return t.element
        }))
    },
    Qr = function (t, e, i) {
        return t && e.length && i.add(t(Gr(e), i, new os(e, 0, !0)), 0)
    },
    $r = function (t, e, i, n, r, s) {
        var o, a, u, h, l, c, f, p = t.element,
            d = t.cache,
            m = t.parent,
            g = t.x,
            _ = t.y,
            v = e.width,
            y = e.height,
            x = e.scaleX,
            b = e.scaleY,
            w = e.rotation,
            T = e.bounds,
            O = s && p.style.cssText,
            M = s && p.getBBox && p.getAttribute("transform"),
            k = t,
            D = e.matrix,
            C = D.e,
            E = D.f,
            S = t.bounds.width !== T.width || t.bounds.height !== T.height || t.scaleX !== x || t.scaleY !== b || t.rotation !== w,
            A = !S && t.simple && e.simple && !r;
        return A || !m ? (x = b = 1, w = o = 0) : (l = function (t) {
            var e = t._gsap || cr.core.getCache(t);
            return e.gmCache === cr.ticker.frame ? e.gMatrix : (e.gmCache = cr.ticker.frame, e.gMatrix = hr(t, !0, !1, !0))
        }(m), c = l.clone().multiply(e.ctm ? e.matrix.clone().multiply(e.ctm) : e.matrix), w = Er(Math.atan2(c.b, c.a) * xr), o = Er(Math.atan2(c.c, c.d) * xr + w) % 360, x = Math.sqrt(Math.pow(c.a, 2) + Math.pow(c.b, 2)), b = Math.sqrt(Math.pow(c.c, 2) + Math.pow(c.d, 2)) * Math.cos(o * br), r && (r = lr(r)[0], h = cr.getProperty(r), f = r.getBBox && "function" == typeof r.getBBox && r.getBBox(), k = {
            scaleX: h("scaleX"),
            scaleY: h("scaleY"),
            width: f ? f.width : Math.ceil(parseFloat(h("width", "px"))),
            height: f ? f.height : parseFloat(h("height", "px"))
        }), d.rotation = w + "deg", d.skewX = o + "deg"), i ? (x *= v !== k.width && k.width ? v / k.width : 1, b *= y !== k.height && k.height ? y / k.height : 1, d.scaleX = x, d.scaleY = b) : (v = mr(v * x / k.scaleX, 0), y = mr(y * b / k.scaleY, 0), p.style.width = v + "px", p.style.height = y + "px"), n && Hr(p, e.props), A || !m ? (g += C - t.matrix.e, _ += E - t.matrix.f) : S || m !== e.parent ? (d.renderTransform(1, d), c = hr(r || p, !1, !1, !0), a = l.apply({
            x: c.e,
            y: c.f
        }), g += (u = l.apply({
            x: C,
            y: E
        })).x - a.x, _ += u.y - a.y) : (l.e = l.f = 0, g += (u = l.apply({
            x: C - t.matrix.e,
            y: E - t.matrix.f
        })).x, _ += u.y), g = mr(g, .02), _ = mr(_, .02), !s || s instanceof as ? (d.x = g + "px", d.y = _ + "px", d.renderTransform(1, d)) : (p.style.cssText = O, p.getBBox && p.setAttribute("transform", M || ""), d.uncache = 1), s && (s.x = g, s.y = _, s.rotation = w, s.skewX = o, i ? (s.scaleX = x, s.scaleY = b) : (s.width = v, s.height = y)), s || d
    },
    Jr = function (t, e) {
        return t instanceof os ? t : new os(t, e)
    },
    Zr = function (t, e, i) {
        var n = t.idLookup[i],
            r = t.alt[i];
        return !r.isVisible || (e.getElementState(r.element) || r).isVisible && n.isVisible ? n : r
    },
    Kr = [],
    ts = "width,height,overflowX,overflowY".split(","),
    es = function (t) {
        if (t !== gr) {
            var e = dr.style,
                i = dr.clientWidth === window.outerWidth,
                n = dr.clientHeight === window.outerHeight,
                r = 4;
            if (t && (i || n)) {
                for (; r--;) Kr[r] = e[ts[r]];
                i && (e.width = dr.clientWidth + "px", e.overflowY = "hidden"), n && (e.height = dr.clientHeight + "px", e.overflowX = "hidden"), gr = t
            } else if (gr) {
                for (; r--;) Kr[r] ? e[ts[r]] = Kr[r] : e.removeProperty(Ir(ts[r]));
                gr = t
            }
        }
    },
    is = function (t, e, i, n) {
        t instanceof os && e instanceof os || console.warn("Not a valid state object.");
        var r, s, o, a, u, h, l, c, f, p, d, m, g, _, v, y = i = i || {},
            x = y.clearProps,
            b = y.onEnter,
            w = y.onLeave,
            T = y.absolute,
            O = y.absoluteOnLeave,
            M = y.custom,
            k = y.delay,
            D = y.paused,
            C = y.repeat,
            E = y.repeatDelay,
            S = y.yoyo,
            A = y.toggleClass,
            P = y.nested,
            I = y.zIndex,
            L = y.scale,
            B = y.fade,
            R = y.stagger,
            z = y.spin,
            X = y.prune,
            Y = ("props" in i ? i : t).props,
            F = Lr(i, Ar),
            V = cr.timeline({
                delay: k,
                paused: D,
                repeat: C,
                repeatDelay: E,
                yoyo: S
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
            $ = V[1 !== n ? "to" : "from"];
        for (s in e.idLookup) d = e.alt[s] ? Zr(e, t, s) : e.idLookup[s], u = d.element, p = t.idLookup[s], t.alt[s] && u === p.element && (t.alt[s].isVisible || !d.isVisible) && (p = t.alt[s]), p ? (h = {
            t: u,
            b: p,
            a: d,
            sd: p.element === u ? 0 : d.isVisible ? 1 : -1
        }, U.push(h), h.sd && (h.sd < 0 && (h.b = d, h.a = p), Q && Yr(h.b, Y ? Or[Y] : Dr), B && U.push(h.swap = {
            t: p.element,
            b: h.b,
            a: h.a,
            sd: -h.sd,
            swap: h
        })), u._flip = p.element._flip = fr ? fr.timeline : V) : d.isVisible && (U.push({
            t: u,
            b: Lr(d, {
                isVisible: 1
            }),
            a: d,
            sd: 0,
            entering: 1
        }), u._flip = fr ? fr.timeline : V);
        (Y && (Br[Y] || Rr(Y)).forEach((function (t) {
            return F[t] = function (e) {
                return U[e].a.props[t]
            }
        })), U.finalStates = f = [], m = function () {
            for (Xr(U), es(!0), a = 0; a < U.length; a++) h = U[a], g = h.a, _ = h.b, !X || g.isDifferent(_) || h.entering ? (u = h.t, P && !(h.sd < 0) && a && (g.matrix = hr(u, !1, !1, !0)), h.sd || _.isVisible && g.isVisible ? (h.sd < 0 ? (l = new as(u, Y, t.simple), $r(l, g, L, 0, 0, l), l.matrix = hr(u, !1, !1, !0), l.css = h.b.css, h.a = g = l, B && (u.style.opacity = Q ? _.opacity : g.opacity), R && W.push(u)) : h.sd > 0 && B && (u.style.opacity = Q ? g.opacity - _.opacity : "0"), $r(g, _, L, Y)) : _.isVisible !== g.isVisible && (_.isVisible ? g.isVisible || (_.css = g.css, j.push(_), U.splice(a--, 1), T && P && $r(g, _, L, Y)) : (g.isVisible && q.push(g), U.splice(a--, 1))), L || (u.style.maxWidth = Math.max(g.width, _.width) + "px", u.style.maxHeight = Math.max(g.height, _.height) + "px", u.style.minWidth = Math.min(g.width, _.width) + "px", u.style.minHeight = Math.min(g.height, _.height) + "px"), P && A && u.classList.add(A)) : U.splice(a--, 1), f.push(g);
            var e;
            if (A && (e = f.map((function (t) {
                    return t.element
                })), P && e.forEach((function (t) {
                    return t.classList.remove(A)
                }))), es(!1), L ? (F.scaleX = function (t) {
                    return U[t].a.scaleX
                }, F.scaleY = function (t) {
                    return U[t].a.scaleY
                }) : (F.width = function (t) {
                    return U[t].a.width + "px"
                }, F.height = function (t) {
                    return U[t].a.height + "px"
                }, F.autoRound = i.autoRound || !1), F.x = function (t) {
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
                }, F.zIndex = I, F.immediateRender = !1 !== i.immediateRender), B && (F.opacity = function (t) {
                    return U[t].sd < 0 ? 0 : U[t].sd > 0 ? U[t].a.opacity : "+=0"
                }), W.length) {
                R = cr.utils.distribute(R);
                var n = c.slice(W.length);
                F.stagger = function (t, e) {
                    return R(~W.indexOf(e) ? c.indexOf(U[t].swap.t) : t, e, n)
                }
            }
            if (kr.forEach((function (t) {
                    return i[t] && V.eventCallback(t, i[t], i[t + "Params"])
                })), M && c.length)
                for (s in N = Lr(F, Ar), "scale" in M && (M.scaleX = M.scaleY = M.scale, delete M.scale), M)(r = Lr(M[s], Pr))[s] = F[s], !("duration" in r) && "duration" in F && (r.duration = F.duration), r.stagger = F.stagger, $.call(V, c, r, 0), delete N[s];
            (c.length || j.length || q.length) && (A && V.add((function () {
                return Sr(e, A, V._zTime < 0 ? "remove" : "add")
            }), 0) && !D && Sr(e, A, "add"), c.length && $.call(V, c, N, 0)), Qr(b, q, V), Qr(w, j, V);
            var p = fr && fr.timeline;
            p && (p.add(V, 0), fr._final.push((function () {
                return Vr(U, !x)
            }))), o = V.duration(), V.call((function () {
                var t = V.time() >= o;
                t && !p && Vr(U, !x), A && Sr(e, A, t ? "remove" : "add")
            }))
        }, O && (T = U.filter((function (t) {
            return !t.sd && !t.a.isVisible && t.b.isVisible
        })).map((function (t) {
            return t.a.element
        }))), fr) ? (T && (v = fr._abs).push.apply(v, jr(U, T)), fr._run.push(m)) : (T && Ur(jr(U, T)), m());
        return fr ? fr.timeline : V
    },
    ns = function t(e) {
        e.vars.onInterrupt && e.vars.onInterrupt.apply(e, e.vars.onInterruptParams || []), e.getChildren(!0, !1, !0).forEach(t)
    },
    rs = function (t, e) {
        if (t && t.progress() < 1 && !t.paused()) return e && (ns(t), e < 2 && t.progress(1), t.kill()), !0
    },
    ss = function (t) {
        for (var e, i = t.idLookup = {}, n = t.alt = {}, r = t.elementStates, s = r.length; s--;) i[(e = r[s]).id] ? n[e.id] = e : i[e.id] = e
    },
    os = function () {
        function t(t, e, i) {
            if (this.props = e && e.props, this.simple = !(!e || !e.simple), i) this.targets = Gr(t), this.elementStates = t, ss(this);
            else {
                this.targets = lr(t);
                var n = e && (!1 === e.kill || e.batch && !e.kill);
                fr && !n && fr._kill.push(this), this.update(n || !!fr)
            }
        }
        var e = t.prototype;
        return e.update = function (t) {
            var e = this;
            return this.elementStates = this.targets.map((function (t) {
                return new as(t, e.props, e.simple)
            })), ss(this), this.interrupt(t), this.recordInlineStyles(), this
        }, e.clear = function () {
            return this.targets.length = this.elementStates.length = 0, ss(this), this
        }, e.fit = function (t, e, i) {
            for (var n, r, s = Xr(this.elementStates.slice(0), !1, !0), o = (t || this).idLookup, a = 0; a < s.length; a++) n = s[a], i && (n.matrix = hr(n.element, !1, !1, !0)), (r = o[n.id]) && $r(n, r, e, !0, 0, n), n.matrix = hr(n.element, !1, !1, !0);
            return this
        }, e.getProperty = function (t, e) {
            var i = this.getElementState(t) || wr;
            return (e in i ? i : i.props || wr)[e]
        }, e.add = function (t) {
            for (var e, i, n, r = t.targets.length, s = this.idLookup, o = this.alt; r--;)(n = s[(i = t.elementStates[r]).id]) && (i.element === n.element || o[i.id] && o[i.id].element === i.element) ? (e = this.elementStates.indexOf(i.element === n.element ? n : o[i.id]), this.targets.splice(e, 1, t.targets[r]), this.elementStates.splice(e, 1, i)) : (this.targets.push(t.targets[r]), this.elementStates.push(i));
            return t.interrupted && (this.interrupted = !0), t.simple || (this.simple = !1), ss(this), this
        }, e.compare = function (t) {
            var e, i, n, r, s, o, a, u, h = t.idLookup,
                l = this.idLookup,
                c = [],
                f = [],
                p = [],
                d = [],
                m = [],
                g = t.alt,
                _ = this.alt,
                v = function (t, e, i) {
                    return (t.isVisible !== e.isVisible ? t.isVisible ? p : d : t.isVisible ? f : c).push(i) && m.push(i)
                },
                y = function (t, e, i) {
                    return m.indexOf(i) < 0 && v(t, e, i)
                };
            for (n in h) s = g[n], o = _[n], r = (e = s ? Zr(t, this, n) : h[n]).element, i = l[n], o ? (u = i.isVisible || !o.isVisible && r === i.element ? i : o, (a = !s || e.isVisible || s.isVisible || u.element !== s.element ? e : s).isVisible && u.isVisible && a.element !== u.element ? ((a.isDifferent(u) ? f : c).push(a.element, u.element), m.push(a.element, u.element)) : v(a, u, a.element), s && a.element === s.element && (s = h[n]), y(a.element !== i.element && s ? s : a, i, i.element), y(s && s.element === o.element ? s : a, o, o.element), s && y(s, o.element === s.element ? o : i, s.element)) : (i ? i.isDifferent(e) ? v(e, i, r) : c.push(r) : p.push(r), s && y(s, i, s.element));
            for (n in l) h[n] || (d.push(l[n].element), _[n] && d.push(_[n].element));
            return {
                changed: f,
                unchanged: c,
                enter: p,
                leave: d
            }
        }, e.recordInlineStyles = function () {
            for (var t = Or[this.props] || Dr, e = this.elementStates.length; e--;) Yr(this.elementStates[e], t)
        }, e.interrupt = function (t) {
            var e = this,
                i = [];
            this.targets.forEach((function (n) {
                var r = n._flip,
                    s = rs(r, t ? 0 : 1);
                t && s && i.indexOf(r) < 0 && r.add((function () {
                    return e.updateVisibility()
                })), s && i.push(r)
            })), !t && i.length && this.updateVisibility(), this.interrupted || (this.interrupted = !!i.length)
        }, e.updateVisibility = function () {
            this.elementStates.forEach((function (t) {
                var e = t.element.getBoundingClientRect();
                t.isVisible = !!(e.width || e.height || e.top || e.left), t.uncache = 1
            }))
        }, e.getElementState = function (t) {
            return this.elementStates[this.targets.indexOf(Cr(t))]
        }, e.makeAbsolute = function () {
            return Xr(this.elementStates.slice(0), !0, !0).map(qr)
        }, t
    }(),
    as = function () {
        function t(t, e, i) {
            this.element = t, this.update(e, i)
        }
        var e = t.prototype;
        return e.isDifferent = function (t) {
            var e = this.bounds,
                i = t.bounds;
            return e.top !== i.top || e.left !== i.left || e.width !== i.width || e.height !== i.height || !this.matrix.equals(t.matrix) || this.opacity !== t.opacity || this.props && t.props && JSON.stringify(this.props) !== JSON.stringify(t.props)
        }, e.update = function (t, e) {
            var i, n, r = this,
                s = r.element,
                o = cr.getProperty(s),
                a = cr.core.getCache(s),
                u = s.getBoundingClientRect(),
                h = s.getBBox && "function" == typeof s.getBBox && "svg" !== s.nodeName.toLowerCase() && s.getBBox(),
                l = e ? new ur(1, 0, 0, 1, u.left + er(), u.top + tr()) : hr(s, !1, !1, !0);
            r.getProp = o, r.element = s, r.id = ((n = (i = s).getAttribute("data-flip-id")) || i.setAttribute("data-flip-id", n = "auto-" + _r++), n), r.matrix = l, r.cache = a, r.bounds = u, r.isVisible = !!(u.width || u.height || u.left || u.top), r.display = o("display"), r.position = o("position"), r.parent = s.parentNode, r.x = o("x"), r.y = o("y"), r.scaleX = a.scaleX, r.scaleY = a.scaleY, r.rotation = o("rotation"), r.skewX = o("skewX"), r.opacity = o("opacity"), r.width = h ? h.width : mr(o("width", "px"), .04), r.height = h ? h.height : mr(o("height", "px"), .04), t && function (t, e) {
                for (var i = cr.getProperty(t.element, null, "native"), n = t.props = {}, r = e.length; r--;) n[e[r]] = (i(e[r]) + "").trim();
                n.zIndex && (n.zIndex = parseFloat(n.zIndex) || 0)
            }(r, Br[t] || Rr(t)), r.ctm = s.getCTM && "svg" === s.nodeName.toLowerCase() && sr(s).inverse(), r.simple = e || 1 === Er(l.a) && !Er(l.b) && !Er(l.c) && 1 === Er(l.d), r.uncache = 0
        }, t
    }(),
    us = function () {
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
    hs = function () {
        function t(t) {
            this.id = t, this.actions = [], this._kill = [], this._final = [], this._abs = [], this._run = [], this.data = {}, this.state = new os, this.timeline = cr.timeline()
        }
        var e = t.prototype;
        return e.add = function (t) {
            var e = this.actions.filter((function (e) {
                return e.vars === t
            }));
            return e.length ? e[0] : (e = new us("function" == typeof t ? {
                animate: t
            } : t, this), this.actions.push(e), e)
        }, e.remove = function (t) {
            var e = this.actions.indexOf(t);
            return e >= 0 && this.actions.splice(e, 1), this
        }, e.getState = function (t) {
            var e = this,
                i = fr,
                n = pr;
            return fr = this, this.state.clear(), this._kill.length = 0, this.actions.forEach((function (i) {
                i.vars.getState && (i.states.length = 0, pr = i, i.state = i.vars.getState(i)), t && i.states.forEach((function (t) {
                    return e.state.add(t)
                }))
            })), pr = n, fr = i, this.killConflicts(), this
        }, e.animate = function () {
            var t, e, i = this,
                n = fr,
                r = this.timeline,
                s = this.actions.length;
            for (fr = this, r.clear(), this._abs.length = this._final.length = this._run.length = 0, this.actions.forEach((function (t) {
                    t.vars.animate && t.vars.animate(t);
                    var e, i, n = t.vars.onEnter,
                        r = t.vars.onLeave,
                        s = t.targets;
                    s && s.length && (n || r) && (e = new os, t.states.forEach((function (t) {
                        return e.add(t)
                    })), (i = e.compare(ls.getState(s))).enter.length && n && n(i.enter), i.leave.length && r && r(i.leave))
                })), Ur(this._abs), this._run.forEach((function (t) {
                    return t()
                })), e = r.duration(), t = this._final.slice(0), r.add((function () {
                    e <= r.time() && (t.forEach((function (t) {
                        return t()
                    })), vr(i, "onComplete"))
                })), fr = n; s--;) this.actions[s].vars.once && this.actions[s].kill();
            return vr(this, "onStart"), r.restart(), this
        }, e.loadState = function (t) {
            t || (t = function () {
                return 0
            });
            var e = [];
            return this.actions.forEach((function (i) {
                if (i.vars.loadState) {
                    var n, r = function r(s) {
                        s && (i.targets = s), ~(n = e.indexOf(r)) && (e.splice(n, 1), e.length || t())
                    };
                    e.push(r), i.vars.loadState(r)
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
            var i = this;
            return this !== fr && (t || this.getState(e), this.loadState((function () {
                i._killed || (i.setState(), i.animate())
            }))), this
        }, e.clear = function (t) {
            this.state.clear(), t || (this.actions.length = 0)
        }, e.getStateById = function (t) {
            for (var e, i = this.actions.length; i--;)
                if (e = this.actions[i].getStateById(t)) return e;
            return this.state.idLookup[t] && this.state
        }, e.kill = function () {
            this._killed = 1, this.clear(), delete yr[this.id]
        }, t
    }(),
    ls = function () {
        function t() {}
        return t.getState = function (e, i) {
            var n = Jr(e, i);
            return pr && pr.states.push(n), i && i.batch && t.batch(i.batch).state.add(n), n
        }, t.from = function (t, e) {
            return "clearProps" in (e = e || {}) || (e.clearProps = !0), is(t, Jr(e.targets || t.targets, {
                props: e.props || t.props,
                simple: e.simple,
                kill: !!e.kill
            }), e, -1)
        }, t.to = function (t, e) {
            return is(t, Jr(e.targets || t.targets, {
                props: e.props || t.props,
                simple: e.simple,
                kill: !!e.kill
            }), e, 1)
        }, t.fromTo = function (t, e, i) {
            return is(t, e, i)
        }, t.fit = function (t, e, i) {
            var n = i ? Lr(i, Pr) : {},
                r = i || n,
                s = r.absolute,
                o = r.scale,
                a = r.getVars,
                u = r.props,
                h = r.runBackwards,
                l = r.onComplete,
                c = r.simple,
                f = i && i.fitChild && Cr(i.fitChild),
                p = Wr(e, u, c, t),
                d = Wr(t, 0, c, p),
                m = u ? Or[u] : Dr;
            return u && Hr(n, p.props), h && (Yr(d, m), "immediateRender" in n || (n.immediateRender = !0), n.onComplete = function () {
                Fr(d), l && l.apply(this, arguments)
            }), s && qr(d, p), n = $r(d, p, o || f, u, f, n.duration || a ? n : 0), a ? n : n.duration ? cr.to(d.element, n) : null
        }, t.makeAbsolute = function (t, e) {
            return (t instanceof os ? t : new os(t, e)).makeAbsolute()
        }, t.batch = function (t) {
            return t || (t = "default"), yr[t] || (yr[t] = new hs(t))
        }, t.killFlipsOf = function (t, e) {
            (t instanceof os ? t.targets : lr(t)).forEach((function (t) {
                return t && rs(t._flip, !1 !== e ? 1 : 2)
            }))
        }, t.isFlipping = function (e) {
            var i = t.getByTarget(e);
            return !!i && i.isActive()
        }, t.getByTarget = function (t) {
            return (Cr(t) || wr)._flip
        }, t.getElementState = function (t, e) {
            return new as(Cr(t), e)
        }, t.convertCoordinates = function (t, e, i) {
            var n = hr(e, !0, !0).multiply(hr(t));
            return i ? n.apply(i) : n
        }, t.register = function (t) {
            if (dr = "undefined" != typeof document && document.body) {
                cr = t, Jn(dr), lr = cr.utils.toArray;
                var e = cr.utils.snap(.1);
                mr = function (t, i) {
                    return e(parseFloat(t) + i)
                }
            }
        }, t
    }();

function cs(t, e) {
    for (var i = 0; i < e.length; i++) {
        var n = e[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
    }
}
ls.version = "3.10.4", "undefined" != typeof window && window.gsap && window.gsap.registerPlugin(ls);
/*!
 * Observer 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var fs, ps, ds, ms, gs, _s, vs, ys, xs, bs, ws, Ts, Os = function () {
        return fs || "undefined" != typeof window && (fs = window.gsap) && fs.registerPlugin && fs
    },
    Ms = 1,
    ks = [],
    Ds = [],
    Cs = [],
    Es = Date.now,
    Ss = function (t, e) {
        return e
    },
    As = function (t) {
        return !!~bs.indexOf(t)
    },
    Ps = function (t, e, i, n, r) {
        return t.addEventListener(e, i, {
            passive: !n,
            capture: !!r
        })
    },
    Is = function (t, e, i, n) {
        return t.removeEventListener(e, i, !!n)
    },
    Ls = function () {
        return ws && ws.isPressed || Ds.cache++
    },
    Bs = function (t, e) {
        var i = function i(n) {
            if (n || 0 === n) {
                Ms && (ds.history.scrollRestoration = "manual");
                var r = ws && ws.isPressed;
                n = i.v = Math.round(n) || (ws && ws.iOS ? 1 : 0), t(n), i.cacheID = Ds.cache, r && Ss("ss", n)
            } else(e || Ds.cache !== i.cacheID || Ss("ref")) && (i.cacheID = Ds.cache, i.v = t());
            return i.v + i.offset
        };
        return i.offset = 0, t && i
    },
    Rs = {
        s: "scrollLeft",
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: Bs((function (t) {
            return arguments.length ? ds.scrollTo(t, zs.sc()) : ds.pageXOffset || ms.scrollLeft || gs.scrollLeft || _s.scrollLeft || 0
        }))
    },
    zs = {
        s: "scrollTop",
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: Rs,
        sc: Bs((function (t) {
            return arguments.length ? ds.scrollTo(Rs.sc(), t) : ds.pageYOffset || ms.scrollTop || gs.scrollTop || _s.scrollTop || 0
        }))
    },
    Xs = function (t, e) {
        var i = e.s,
            n = e.sc,
            r = Ds.indexOf(t),
            s = n === zs.sc ? 1 : 2;
        return !~r && (r = Ds.push(t) - 1), Ds[r + s] || (Ds[r + s] = Bs(function (t, e) {
            return ~Cs.indexOf(t) && Cs[Cs.indexOf(t) + 1][e]
        }(t, i), !0) || (As(t) ? n : Bs((function (e) {
            return arguments.length ? t[i] = e : t[i]
        }))))
    },
    Ys = function (t, e, i) {
        var n = t,
            r = t,
            s = Es(),
            o = s,
            a = e || 50,
            u = Math.max(500, 3 * a),
            h = function (t, e) {
                var u = Es();
                e || u - s > a ? (r = n, n = t, o = s, s = u) : i ? n += t : n = r + (t - r) / (u - o) * (s - o)
            };
        return {
            update: h,
            reset: function () {
                r = n = i ? 0 : n, o = s = 0
            },
            getVelocity: function (t) {
                var e = o,
                    a = r,
                    l = Es();
                return (t || 0 === t) && t !== n && h(t), s === o || l - o > u ? 0 : (n + (i ? a : -a)) / ((i ? l : s) - e) * 1e3
            }
        }
    },
    Fs = function (t, e) {
        return e && !t._gsapAllow && t.preventDefault(), t.changedTouches ? t.changedTouches[0] : t
    },
    Vs = function (t) {
        var e = Math.max.apply(Math, t),
            i = Math.min.apply(Math, t);
        return Math.abs(e) >= Math.abs(i) ? e : i
    },
    Ns = function () {
        var t, e, i, n;
        (xs = fs.core.globals().ScrollTrigger) && xs.core && (t = xs.core, e = t.bridge || {}, i = t._scrollers, n = t._proxies, i.push.apply(i, Ds), n.push.apply(n, Cs), Ds = i, Cs = n, Ss = function (t, i) {
            return e[t](i)
        })
    },
    qs = function (t) {
        return (fs = t || Os()) && "undefined" != typeof document && document.body && (ds = window, ms = document, gs = ms.documentElement, _s = ms.body, bs = [ds, ms, gs, _s], fs.utils.clamp, ys = "onpointerenter" in _s ? "pointer" : "mouse", vs = js.isTouch = ds.matchMedia && ds.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in ds || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, Ts = js.eventTypes = ("ontouchstart" in gs ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in gs ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout((function () {
            return Ms = 0
        }), 500), Ns(), ps = 1), ps
    };
Rs.op = zs, Ds.cache = 0;
var js = function () {
    function t(t) {
        this.init(t)
    }
    var e, i, n;
    return t.prototype.init = function (t) {
        ps || qs(fs) || console.warn("Please gsap.registerPlugin(Observer)"), xs || Ns();
        var e, i = t.tolerance,
            n = t.dragMinimum,
            r = t.type,
            s = t.target,
            o = t.lineHeight,
            a = t.debounce,
            u = t.preventDefault,
            h = t.onStop,
            l = t.onStopDelay,
            c = t.ignore,
            f = t.wheelSpeed,
            p = t.event,
            d = t.onDragStart,
            m = t.onDragEnd,
            g = t.onDrag,
            _ = t.onPress,
            v = t.onRelease,
            y = t.onRight,
            x = t.onLeft,
            b = t.onUp,
            w = t.onDown,
            T = t.onChangeX,
            O = t.onChangeY,
            M = t.onChange,
            k = t.onToggleX,
            D = t.onToggleY,
            C = t.onHover,
            E = t.onHoverEnd,
            S = t.onMove,
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
        this.target = (e = s, s = fs.utils.toArray(e)[0] || ("string" == typeof e && !1 !== fs.config().nullTargetWarn ? console.warn("Element not found:", e) : null) || gs), this.vars = t, c && (c = fs.utils.toArray(c)), i = i || 0, n = n || 0, f = f || 1, Y = Y || 1, r = r || "wheel,touch,pointer", a = !1 !== a, o || (o = parseFloat(ds.getComputedStyle(_s).lineHeight) || 22);
        var j, U, W, H, G, Q, $, J = this,
            Z = 0,
            K = 0,
            tt = Xs(s, Rs),
            et = Xs(s, zs),
            it = tt(),
            nt = et(),
            rt = ~r.indexOf("touch") && !~r.indexOf("pointer") && "pointerdown" === Ts[0],
            st = As(s),
            ot = s.ownerDocument || ms,
            at = [0, 0, 0],
            ut = [0, 0, 0],
            ht = 0,
            lt = function () {
                return ht = Es()
            },
            ct = function (t, e) {
                return (J.event = t) && c && ~c.indexOf(t.target) || e && rt && "touch" !== t.pointerType || A && A(t, e)
            },
            ft = function () {
                var t = J.deltaX = Vs(at),
                    e = J.deltaY = Vs(ut),
                    n = Math.abs(t) >= i,
                    r = Math.abs(e) >= i;
                M && (n || r) && M(J, t, e, at, ut), n && (y && J.deltaX > 0 && y(J), x && J.deltaX < 0 && x(J), T && T(J), k && J.deltaX < 0 != Z < 0 && k(J), Z = J.deltaX, at[0] = at[1] = at[2] = 0), r && (w && J.deltaY > 0 && w(J), b && J.deltaY < 0 && b(J), O && O(J), D && J.deltaY < 0 != K < 0 && D(J), K = J.deltaY, ut[0] = ut[1] = ut[2] = 0), (H || W) && (S && S(J), q && Q && q(J), W && (g(J), W = !1), H = Q = !1), G && (B(J), G = !1), j = 0
            },
            pt = function (t, e, i) {
                at[i] += t, ut[i] += e, J._vx.update(t), J._vy.update(e), a ? j || (j = requestAnimationFrame(ft)) : ft()
            },
            dt = function (t, e) {
                "y" !== $ && (at[2] += t, J._vx.update(t, !0)), "x" !== $ && (ut[2] += e, J._vy.update(e, !0)), N && !$ && (J.axis = $ = Math.abs(t) > Math.abs(e) ? "x" : "y", Q = !0), a ? j || (j = requestAnimationFrame(ft)) : ft()
            },
            mt = function (t) {
                if (!ct(t, 1)) {
                    var e = (t = Fs(t, u)).clientX,
                        i = t.clientY,
                        r = e - J.x,
                        s = i - J.y,
                        o = J.isDragging;
                    J.x = e, J.y = i, (o || Math.abs(J.startX - e) >= n || Math.abs(J.startY - i) >= n) && (g && (W = !0), o || (J.isDragging = !0), dt(r, s), o || d && d(J))
                }
            },
            gt = J.onPress = function (t) {
                ct(t, 1) || (J.axis = $ = null, U.pause(), J.isPressed = !0, t = Fs(t), Z = K = 0, J.startX = J.x = t.clientX, J.startY = J.y = t.clientY, J._vx.reset(), J._vy.reset(), Ps(P ? s : ot, Ts[1], mt, u, !0), J.deltaX = J.deltaY = 0, _ && _(J))
            },
            _t = function (t) {
                if (!ct(t, 1)) {
                    Is(P ? s : ot, Ts[1], mt, !0);
                    var e = J.isDragging && (Math.abs(J.x - J.startX) > 3 || Math.abs(J.y - J.startY) > 3),
                        i = Fs(t);
                    e || (J._vx.reset(), J._vy.reset(), u && V && fs.delayedCall(.08, (function () {
                        if (Es() - ht > 300 && !t.defaultPrevented)
                            if (t.target.click) t.target.click();
                            else if (ot.createEvent) {
                            var e = ot.createEvent("MouseEvents");
                            e.initMouseEvent("click", !0, !0, ds, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(e)
                        }
                    }))), J.isDragging = J.isGesturing = J.isPressed = !1, h && !P && U.restart(!0), m && e && m(J), v && v(J, e)
                }
            },
            vt = function (t) {
                return t.touches && t.touches.length > 1 && (J.isGesturing = !0) && I(t, J.isDragging)
            },
            yt = function () {
                return J.isGesturing = !1, L(J)
            },
            xt = function (t) {
                if (!ct(t)) {
                    var e = tt(),
                        i = et();
                    pt((e - it) * Y, (i - nt) * Y, 1), it = e, nt = i, h && U.restart(!0)
                }
            },
            bt = function (t) {
                if (!ct(t)) {
                    t = Fs(t, u), B && (G = !0);
                    var e = (1 === t.deltaMode ? o : 2 === t.deltaMode ? ds.innerHeight : 1) * f;
                    pt(t.deltaX * e, t.deltaY * e, 0), h && !P && U.restart(!0)
                }
            },
            wt = function (t) {
                if (!ct(t)) {
                    var e = t.clientX,
                        i = t.clientY,
                        n = e - J.x,
                        r = i - J.y;
                    J.x = e, J.y = i, H = !0, (n || r) && dt(n, r)
                }
            },
            Tt = function (t) {
                J.event = t, C(J)
            },
            Ot = function (t) {
                J.event = t, E(J)
            },
            Mt = function (t) {
                return ct(t) || Fs(t, u) && X(J)
            };
        U = J._dc = fs.delayedCall(l || .25, (function () {
            J._vx.reset(), J._vy.reset(), U.pause(), h && h(J)
        })).pause(), J.deltaX = J.deltaY = 0, J._vx = Ys(0, 50, !0), J._vy = Ys(0, 50, !0), J.scrollX = tt, J.scrollY = et, J.isDragging = J.isGesturing = J.isPressed = !1, J.enable = function (t) {
            return J.isEnabled || (Ps(st ? ot : s, "scroll", Ls), r.indexOf("scroll") >= 0 && Ps(st ? ot : s, "scroll", xt, u, F), r.indexOf("wheel") >= 0 && Ps(s, "wheel", bt, u, F), (r.indexOf("touch") >= 0 && vs || r.indexOf("pointer") >= 0) && (Ps(s, Ts[0], gt, u, F), Ps(ot, Ts[2], _t), Ps(ot, Ts[3], _t), V && Ps(s, "click", lt, !1, !0), X && Ps(s, "click", Mt), I && Ps(ot, "gesturestart", vt), L && Ps(ot, "gestureend", yt), C && Ps(s, ys + "enter", Tt), E && Ps(s, ys + "leave", Ot), S && Ps(s, ys + "move", wt)), J.isEnabled = !0, t && t.type && gt(t), R && R(J)), J
        }, J.disable = function () {
            J.isEnabled && (ks.filter((function (t) {
                return t !== J && As(t.target)
            })).length || Is(st ? ot : s, "scroll", Ls), J.isPressed && (J._vx.reset(), J._vy.reset(), Is(P ? s : ot, Ts[1], mt, !0)), Is(st ? ot : s, "scroll", xt, F), Is(s, "wheel", bt, F), Is(s, Ts[0], gt, F), Is(ot, Ts[2], _t), Is(ot, Ts[3], _t), Is(s, "click", lt, !0), Is(s, "click", Mt), Is(ot, "gesturestart", vt), Is(ot, "gestureend", yt), Is(s, ys + "enter", Tt), Is(s, ys + "leave", Ot), Is(s, ys + "move", wt), J.isEnabled = J.isPressed = J.isDragging = !1, z && z(J))
        }, J.kill = function () {
            J.disable();
            var t = ks.indexOf(J);
            t >= 0 && ks.splice(t, 1), ws === J && (ws = 0)
        }, ks.push(J), P && As(s) && (ws = J), J.enable(p)
    }, e = t, (i = [{
        key: "velocityX",
        get: function () {
            return this._vx.getVelocity()
        }
    }, {
        key: "velocityY",
        get: function () {
            return this._vy.getVelocity()
        }
    }]) && cs(e.prototype, i), n && cs(e, n), t
}();
js.version = "3.10.4", js.create = function (t) {
    return new js(t)
}, js.register = qs, js.getAll = function () {
    return ks.slice()
}, js.getById = function (t) {
    return ks.filter((function (e) {
        return e.vars.id === t
    }))[0]
}, Os() && fs.registerPlugin(js), Gn.registerPlugin(ls), Gn.registerPlugin(js);
const Us = document.body;
let Ws = {
    width: window.innerWidth,
    height: window.innerHeight
};
window.addEventListener("resize", (() => {
    Ws = {
        width: window.innerWidth,
        height: window.innerHeight
    }
}));
new class {
    initEvents() {
        this.DOM.items.forEach(((t, e) => {
            t.addEventListener("click", (() => {
                this.open(t)
            }))
        })), this.DOM.backCtrl.addEventListener("click", (() => {
            this.close()
        })), this.DOM.navArrows.next.addEventListener("click", (() => {
            this.navigate("next")
        })), this.DOM.navArrows.prev.addEventListener("click", (() => {
            this.navigate("prev")
        }));
        const t = () => {
            this.isOpen && !this.isAnimating && (this.close(), this.scrollObserver.disable())
        };
        this.scrollObserver = js.create({
            type: "wheel,touch,pointer",
            wheelSpeed: -1,
            onDown: t,
            onUp: t,
            tolerance: 10,
            preventDefault: !0
        }), this.scrollObserver.disable()
    }
    open(t) {
        if (this.isAnimating || this.isOpen) return;
        this.isAnimating = !0, this.current = this.DOM.items.indexOf(t), this.scrollObserver.enable();
        const e = window.scrollY;
        Us.classList.add("oh"), this.DOM.content.classList.add("content--open"), this.contentItems[this.current].DOM.el.classList.add("content__item--current"), this.DOM.items[this.current].classList.add("stack__item--current");
        const i = ls.getState(this.DOM.items, {
            props: "opacity"
        });
        this.DOM.slides.appendChild(this.DOM.el);
        const n = t.offsetTop + t.offsetHeight / 2;
        document.documentElement.scrollTop = document.body.scrollTop = 0, Gn.set(this.DOM.el, {
            y: Ws.height / 2 - n + e
        }), document.documentElement.scrollTop = document.body.scrollTop = 0, ls.from(i, {
            duration: 1,
            ease: "expo",
            onComplete: () => {
                this.isOpen = !0, this.isAnimating = !1
            },
            onStart: () => document.documentElement.scrollTop = document.body.scrollTop = e,
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
                y: t => t ? -150 : 150
            },
            y: 0,
            opacity: t => 0 === this.current && !t || this.current === this.totalItems - 1 && t ? 0 : 1
        }, 0)
    }
    close() {
        if (this.isAnimating || !this.isOpen) return;
        this.isAnimating = !0, this.scrollObserver.disable(), this.DOM.items[this.current].classList.remove("stack__item--current"), Us.classList.remove("oh");
        const t = ls.getState(this.DOM.items, {
            props: "opacity"
        });
        this.DOM.stackWrap.appendChild(this.DOM.el), Gn.set(this.DOM.el, {
            y: 0
        }), ls.from(t, {
            duration: 1,
            ease: "expo",
            onComplete: () => {
                this.DOM.content.classList.remove("content--open"), this.contentItems[this.current].DOM.el.classList.remove("content__item--current"), this.current = -1, this.isOpen = !1, this.isAnimating = !1
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
            y: t => t ? 100 : -100,
            opacity: 0
        }, 0)
    }
    navigate(t) {
        if (this.isAnimating || "next" === t && this.current === this.totalItems - 1 || "prev" === t && 0 === this.current) return;
        this.isAnimating = !0;
        const e = this.current,
            i = this.DOM.items[e];
        this.current = "next" === t ? this.current + 1 : this.current - 1;
        const n = this.DOM.items[this.current];
        i.classList.remove("stack__item--current"), n.classList.add("stack__item--current"), Gn.set(this.DOM.navArrows.prev, {
            opacity: this.current > 0 ? 1 : 0
        }), Gn.set(this.DOM.navArrows.next, {
            opacity: this.current < this.totalItems - 1 ? 1 : 0
        }), Gn.timeline().to(this.DOM.el, {
            duration: 1,
            ease: "expo",
            y: "next" === t ? "-=" + (Ws.height / 2 + .02 * Ws.height) : "+=" + (Ws.height / 2 + .02 * Ws.height),
            onComplete: () => {
                this.isAnimating = !1
            }
        }).to(this.contentItems[e].DOM.texts, {
            duration: .2,
            ease: "power1",
            yPercent: "next" === t ? 101 : -101,
            onComplete: () => this.contentItems[e].DOM.el.classList.remove("content__item--current")
        }, 0).to(this.contentItems[this.current].DOM.texts, {
            duration: .9,
            ease: "expo",
            startAt: {
                yPercent: "next" === t ? -101 : 101
            },
            onStart: () => this.contentItems[this.current].DOM.el.classList.add("content__item--current"),
            yPercent: 0
        }, .2)
    }
    constructor(t) {
        s(this, "DOM", {
            el: null,
            items: null,
            stackWrap: document.querySelector(".stack-wrap"),
            slides: document.querySelector(".slides"),
            content: document.querySelector(".content"),
            contentItems: [...document.querySelectorAll(".content__item")],
            mainTitleTexts: [...document.querySelectorAll(".title > .oh > .oh__inner")],
            backCtrl: document.querySelector(".content__back"),
            nav: document.querySelector(".content__nav-wrap"),
            navArrows: {
                prev: document.querySelector(".content__nav--prev"),
                next: document.querySelector(".content__nav--next")
            }
        }), s(this, "contentItems", []), s(this, "isOpen", !1), s(this, "current", -1), s(this, "totalItems", 0), s(this, "gap", getComputedStyle(document.documentElement).getPropertyValue("--slide-gap")), this.DOM.el = t, this.DOM.items = [...this.DOM.el.querySelectorAll(".stack__item:not(.stack__item--empty)")], this.totalItems = this.DOM.items.length, this.DOM.contentItems.forEach((t => this.contentItems.push(new o(t)))), this.initEvents()
    }
}(document.querySelector(".stack"));
((t = "img") => new Promise((e => {
    r(document.querySelectorAll(t), {
        background: !0
    }, e)
})))(".stack__item").then((t => document.body.classList.remove("loading")));