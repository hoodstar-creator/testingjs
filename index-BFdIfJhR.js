(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]'))
        s(r);
    new MutationObserver(r => {
        for (const o of r)
            if (o.type === "childList")
                for (const i of o.addedNodes)
                    i.tagName === "LINK" && i.rel === "modulepreload" && s(i)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(r) {
        const o = {};
        return r.integrity && (o.integrity = r.integrity),
        r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy),
        r.crossOrigin === "use-credentials" ? o.credentials = "include" : r.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
        o
    }
    function s(r) {
        if (r.ep)
            return;
        r.ep = !0;
        const o = n(r);
        fetch(r.href, o)
    }
}
)();
/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function ir(e) {
    const t = Object.create(null);
    for (const n of e.split(","))
        t[n] = 1;
    return n => n in t
}
const te = {}
  , Vt = []
  , ot = () => {}
  , Ml = () => !1
  , ss = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97)
  , lr = e => e.startsWith("onUpdate:")
  , _e = Object.assign
  , cr = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
  , Ll = Object.prototype.hasOwnProperty
  , Q = (e, t) => Ll.call(e, t)
  , B = Array.isArray
  , Kt = e => Tn(e) === "[object Map]"
  , rs = e => Tn(e) === "[object Set]"
  , Fr = e => Tn(e) === "[object Date]"
  , V = e => typeof e == "function"
  , ae = e => typeof e == "string"
  , lt = e => typeof e == "symbol"
  , oe = e => e !== null && typeof e == "object"
  , Jo = e => (oe(e) || V(e)) && V(e.then) && V(e.catch)
  , Go = Object.prototype.toString
  , Tn = e => Go.call(e)
  , jl = e => Tn(e).slice(8, -1)
  , Xo = e => Tn(e) === "[object Object]"
  , ar = e => ae(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e
  , an = ir(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted")
  , os = e => {
    const t = Object.create(null);
    return n => t[n] || (t[n] = e(n))
}
  , kl = /-(\w)/g
  , Rt = os(e => e.replace(kl, (t, n) => n ? n.toUpperCase() : ""))
  , $l = /\B([A-Z])/g
  , Tt = os(e => e.replace($l, "-$1").toLowerCase())
  , Yo = os(e => e.charAt(0).toUpperCase() + e.slice(1))
  , Ss = os(e => e ? `on${Yo(e)}` : "")
  , St = (e, t) => !Object.is(e, t)
  , jn = (e, ...t) => {
    for (let n = 0; n < e.length; n++)
        e[n](...t)
}
  , Us = (e, t, n, s=!1) => {
    Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !1,
        writable: s,
        value: n
    })
}
  , Kn = e => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t
}
;
let Mr;
const is = () => Mr || (Mr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ls(e) {
    if (B(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const s = e[n]
              , r = ae(s) ? ql(s) : ls(s);
            if (r)
                for (const o in r)
                    t[o] = r[o]
        }
        return t
    } else if (ae(e) || oe(e))
        return e
}
const Ul = /;(?![^(]*\))/g
  , Bl = /:([^]+)/
  , Hl = /\/\*[^]*?\*\//g;
function ql(e) {
    const t = {};
    return e.replace(Hl, "").split(Ul).forEach(n => {
        if (n) {
            const s = n.split(Bl);
            s.length > 1 && (t[s[0].trim()] = s[1].trim())
        }
    }
    ),
    t
}
function Dt(e) {
    let t = "";
    if (ae(e))
        t = e;
    else if (B(e))
        for (let n = 0; n < e.length; n++) {
            const s = Dt(e[n]);
            s && (t += s + " ")
        }
    else if (oe(e))
        for (const n in e)
            e[n] && (t += n + " ");
    return t.trim()
}
const Vl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
  , Kl = ir(Vl);
function Qo(e) {
    return !!e || e === ""
}
function zl(e, t) {
    if (e.length !== t.length)
        return !1;
    let n = !0;
    for (let s = 0; n && s < e.length; s++)
        n = cs(e[s], t[s]);
    return n
}
function cs(e, t) {
    if (e === t)
        return !0;
    let n = Fr(e)
      , s = Fr(t);
    if (n || s)
        return n && s ? e.getTime() === t.getTime() : !1;
    if (n = lt(e),
    s = lt(t),
    n || s)
        return e === t;
    if (n = B(e),
    s = B(t),
    n || s)
        return n && s ? zl(e, t) : !1;
    if (n = oe(e),
    s = oe(t),
    n || s) {
        if (!n || !s)
            return !1;
        const r = Object.keys(e).length
          , o = Object.keys(t).length;
        if (r !== o)
            return !1;
        for (const i in e) {
            const l = e.hasOwnProperty(i)
              , c = t.hasOwnProperty(i);
            if (l && !c || !l && c || !cs(e[i], t[i]))
                return !1
        }
    }
    return String(e) === String(t)
}
function Wl(e, t) {
    return e.findIndex(n => cs(n, t))
}
const Zo = e => !!(e && e.__v_isRef === !0)
  , ue = e => ae(e) ? e : e == null ? "" : B(e) || oe(e) && (e.toString === Go || !V(e.toString)) ? Zo(e) ? ue(e.value) : JSON.stringify(e, ei, 2) : String(e)
  , ei = (e, t) => Zo(t) ? ei(e, t.value) : Kt(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce( (n, [s,r], o) => (n[Rs(s, o) + " =>"] = r,
    n), {})
} : rs(t) ? {
    [`Set(${t.size})`]: [...t.values()].map(n => Rs(n))
} : lt(t) ? Rs(t) : oe(t) && !B(t) && !Xo(t) ? String(t) : t
  , Rs = (e, t="") => {
    var n;
    return lt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
}
;
/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Pe;
class Jl {
    constructor(t=!1) {
        this.detached = t,
        this._active = !0,
        this._on = 0,
        this.effects = [],
        this.cleanups = [],
        this._isPaused = !1,
        this.parent = Pe,
        !t && Pe && (this.index = (Pe.scopes || (Pe.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    pause() {
        if (this._active) {
            this._isPaused = !0;
            let t, n;
            if (this.scopes)
                for (t = 0,
                n = this.scopes.length; t < n; t++)
                    this.scopes[t].pause();
            for (t = 0,
            n = this.effects.length; t < n; t++)
                this.effects[t].pause()
        }
    }
    resume() {
        if (this._active && this._isPaused) {
            this._isPaused = !1;
            let t, n;
            if (this.scopes)
                for (t = 0,
                n = this.scopes.length; t < n; t++)
                    this.scopes[t].resume();
            for (t = 0,
            n = this.effects.length; t < n; t++)
                this.effects[t].resume()
        }
    }
    run(t) {
        if (this._active) {
            const n = Pe;
            try {
                return Pe = this,
                t()
            } finally {
                Pe = n
            }
        }
    }
    on() {
        ++this._on === 1 && (this.prevScope = Pe,
        Pe = this)
    }
    off() {
        this._on > 0 && --this._on === 0 && (Pe = this.prevScope,
        this.prevScope = void 0)
    }
    stop(t) {
        if (this._active) {
            this._active = !1;
            let n, s;
            for (n = 0,
            s = this.effects.length; n < s; n++)
                this.effects[n].stop();
            for (this.effects.length = 0,
            n = 0,
            s = this.cleanups.length; n < s; n++)
                this.cleanups[n]();
            if (this.cleanups.length = 0,
            this.scopes) {
                for (n = 0,
                s = this.scopes.length; n < s; n++)
                    this.scopes[n].stop(!0);
                this.scopes.length = 0
            }
            if (!this.detached && this.parent && !t) {
                const r = this.parent.scopes.pop();
                r && r !== this && (this.parent.scopes[this.index] = r,
                r.index = this.index)
            }
            this.parent = void 0
        }
    }
}
function Gl() {
    return Pe
}
let re;
const xs = new WeakSet;
class ti {
    constructor(t) {
        this.fn = t,
        this.deps = void 0,
        this.depsTail = void 0,
        this.flags = 5,
        this.next = void 0,
        this.cleanup = void 0,
        this.scheduler = void 0,
        Pe && Pe.active && Pe.effects.push(this)
    }
    pause() {
        this.flags |= 64
    }
    resume() {
        this.flags & 64 && (this.flags &= -65,
        xs.has(this) && (xs.delete(this),
        this.trigger()))
    }
    notify() {
        this.flags & 2 && !(this.flags & 32) || this.flags & 8 || si(this)
    }
    run() {
        if (!(this.flags & 1))
            return this.fn();
        this.flags |= 2,
        Lr(this),
        ri(this);
        const t = re
          , n = Ge;
        re = this,
        Ge = !0;
        try {
            return this.fn()
        } finally {
            oi(this),
            re = t,
            Ge = n,
            this.flags &= -3
        }
    }
    stop() {
        if (this.flags & 1) {
            for (let t = this.deps; t; t = t.nextDep)
                dr(t);
            this.deps = this.depsTail = void 0,
            Lr(this),
            this.onStop && this.onStop(),
            this.flags &= -2
        }
    }
    trigger() {
        this.flags & 64 ? xs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
    }
    runIfDirty() {
        Bs(this) && this.run()
    }
    get dirty() {
        return Bs(this)
    }
}
let ni = 0, un, fn;
function si(e, t=!1) {
    if (e.flags |= 8,
    t) {
        e.next = fn,
        fn = e;
        return
    }
    e.next = un,
    un = e
}
function ur() {
    ni++
}
function fr() {
    if (--ni > 0)
        return;
    if (fn) {
        let t = fn;
        for (fn = void 0; t; ) {
            const n = t.next;
            t.next = void 0,
            t.flags &= -9,
            t = n
        }
    }
    let e;
    for (; un; ) {
        let t = un;
        for (un = void 0; t; ) {
            const n = t.next;
            if (t.next = void 0,
            t.flags &= -9,
            t.flags & 1)
                try {
                    t.trigger()
                } catch (s) {
                    e || (e = s)
                }
            t = n
        }
    }
    if (e)
        throw e
}
function ri(e) {
    for (let t = e.deps; t; t = t.nextDep)
        t.version = -1,
        t.prevActiveLink = t.dep.activeLink,
        t.dep.activeLink = t
}
function oi(e) {
    let t, n = e.depsTail, s = n;
    for (; s; ) {
        const r = s.prevDep;
        s.version === -1 ? (s === n && (n = r),
        dr(s),
        Xl(s)) : t = s,
        s.dep.activeLink = s.prevActiveLink,
        s.prevActiveLink = void 0,
        s = r
    }
    e.deps = t,
    e.depsTail = n
}
function Bs(e) {
    for (let t = e.deps; t; t = t.nextDep)
        if (t.dep.version !== t.version || t.dep.computed && (ii(t.dep.computed) || t.dep.version !== t.version))
            return !0;
    return !!e._dirty
}
function ii(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17,
    e.globalVersion === vn) || (e.globalVersion = vn,
    !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Bs(e))))
        return;
    e.flags |= 2;
    const t = e.dep
      , n = re
      , s = Ge;
    re = e,
    Ge = !0;
    try {
        ri(e);
        const r = e.fn(e._value);
        (t.version === 0 || St(r, e._value)) && (e.flags |= 128,
        e._value = r,
        t.version++)
    } catch (r) {
        throw t.version++,
        r
    } finally {
        re = n,
        Ge = s,
        oi(e),
        e.flags &= -3
    }
}
function dr(e, t=!1) {
    const {dep: n, prevSub: s, nextSub: r} = e;
    if (s && (s.nextSub = r,
    e.prevSub = void 0),
    r && (r.prevSub = s,
    e.nextSub = void 0),
    n.subs === e && (n.subs = s,
    !s && n.computed)) {
        n.computed.flags &= -5;
        for (let o = n.computed.deps; o; o = o.nextDep)
            dr(o, !0)
    }
    !t && !--n.sc && n.map && n.map.delete(n.key)
}
function Xl(e) {
    const {prevDep: t, nextDep: n} = e;
    t && (t.nextDep = n,
    e.prevDep = void 0),
    n && (n.prevDep = t,
    e.nextDep = void 0)
}
let Ge = !0;
const li = [];
function mt() {
    li.push(Ge),
    Ge = !1
}
function gt() {
    const e = li.pop();
    Ge = e === void 0 ? !0 : e
}
function Lr(e) {
    const {cleanup: t} = e;
    if (e.cleanup = void 0,
    t) {
        const n = re;
        re = void 0;
        try {
            t()
        } finally {
            re = n
        }
    }
}
let vn = 0;
class Yl {
    constructor(t, n) {
        this.sub = t,
        this.dep = n,
        this.version = n.version,
        this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0
    }
}
class hr {
    constructor(t) {
        this.computed = t,
        this.version = 0,
        this.activeLink = void 0,
        this.subs = void 0,
        this.map = void 0,
        this.key = void 0,
        this.sc = 0,
        this.__v_skip = !0
    }
    track(t) {
        if (!re || !Ge || re === this.computed)
            return;
        let n = this.activeLink;
        if (n === void 0 || n.sub !== re)
            n = this.activeLink = new Yl(re,this),
            re.deps ? (n.prevDep = re.depsTail,
            re.depsTail.nextDep = n,
            re.depsTail = n) : re.deps = re.depsTail = n,
            ci(n);
        else if (n.version === -1 && (n.version = this.version,
        n.nextDep)) {
            const s = n.nextDep;
            s.prevDep = n.prevDep,
            n.prevDep && (n.prevDep.nextDep = s),
            n.prevDep = re.depsTail,
            n.nextDep = void 0,
            re.depsTail.nextDep = n,
            re.depsTail = n,
            re.deps === n && (re.deps = s)
        }
        return n
    }
    trigger(t) {
        this.version++,
        vn++,
        this.notify(t)
    }
    notify(t) {
        ur();
        try {
            for (let n = this.subs; n; n = n.prevSub)
                n.sub.notify() && n.sub.dep.notify()
        } finally {
            fr()
        }
    }
}
function ci(e) {
    if (e.dep.sc++,
    e.sub.flags & 4) {
        const t = e.dep.computed;
        if (t && !e.dep.subs) {
            t.flags |= 20;
            for (let s = t.deps; s; s = s.nextDep)
                ci(s)
        }
        const n = e.dep.subs;
        n !== e && (e.prevSub = n,
        n && (n.nextSub = e)),
        e.dep.subs = e
    }
}
const Hs = new WeakMap
  , Ft = Symbol("")
  , qs = Symbol("")
  , _n = Symbol("");
function me(e, t, n) {
    if (Ge && re) {
        let s = Hs.get(e);
        s || Hs.set(e, s = new Map);
        let r = s.get(n);
        r || (s.set(n, r = new hr),
        r.map = s,
        r.key = n),
        r.track()
    }
}
function ht(e, t, n, s, r, o) {
    const i = Hs.get(e);
    if (!i) {
        vn++;
        return
    }
    const l = c => {
        c && c.trigger()
    }
    ;
    if (ur(),
    t === "clear")
        i.forEach(l);
    else {
        const c = B(e)
          , f = c && ar(n);
        if (c && n === "length") {
            const a = Number(s);
            i.forEach( (u, p) => {
                (p === "length" || p === _n || !lt(p) && p >= a) && l(u)
            }
            )
        } else
            switch ((n !== void 0 || i.has(void 0)) && l(i.get(n)),
            f && l(i.get(_n)),
            t) {
            case "add":
                c ? f && l(i.get("length")) : (l(i.get(Ft)),
                Kt(e) && l(i.get(qs)));
                break;
            case "delete":
                c || (l(i.get(Ft)),
                Kt(e) && l(i.get(qs)));
                break;
            case "set":
                Kt(e) && l(i.get(Ft));
                break
            }
    }
    fr()
}
function kt(e) {
    const t = Y(e);
    return t === e ? t : (me(t, "iterate", _n),
    We(e) ? t : t.map(he))
}
function as(e) {
    return me(e = Y(e), "iterate", _n),
    e
}
const Ql = {
    __proto__: null,
    [Symbol.iterator]() {
        return Cs(this, Symbol.iterator, he)
    },
    concat(...e) {
        return kt(this).concat(...e.map(t => B(t) ? kt(t) : t))
    },
    entries() {
        return Cs(this, "entries", e => (e[1] = he(e[1]),
        e))
    },
    every(e, t) {
        return ut(this, "every", e, t, void 0, arguments)
    },
    filter(e, t) {
        return ut(this, "filter", e, t, n => n.map(he), arguments)
    },
    find(e, t) {
        return ut(this, "find", e, t, he, arguments)
    },
    findIndex(e, t) {
        return ut(this, "findIndex", e, t, void 0, arguments)
    },
    findLast(e, t) {
        return ut(this, "findLast", e, t, he, arguments)
    },
    findLastIndex(e, t) {
        return ut(this, "findLastIndex", e, t, void 0, arguments)
    },
    forEach(e, t) {
        return ut(this, "forEach", e, t, void 0, arguments)
    },
    includes(...e) {
        return Ts(this, "includes", e)
    },
    indexOf(...e) {
        return Ts(this, "indexOf", e)
    },
    join(e) {
        return kt(this).join(e)
    },
    lastIndexOf(...e) {
        return Ts(this, "lastIndexOf", e)
    },
    map(e, t) {
        return ut(this, "map", e, t, void 0, arguments)
    },
    pop() {
        return sn(this, "pop")
    },
    push(...e) {
        return sn(this, "push", e)
    },
    reduce(e, ...t) {
        return jr(this, "reduce", e, t)
    },
    reduceRight(e, ...t) {
        return jr(this, "reduceRight", e, t)
    },
    shift() {
        return sn(this, "shift")
    },
    some(e, t) {
        return ut(this, "some", e, t, void 0, arguments)
    },
    splice(...e) {
        return sn(this, "splice", e)
    },
    toReversed() {
        return kt(this).toReversed()
    },
    toSorted(e) {
        return kt(this).toSorted(e)
    },
    toSpliced(...e) {
        return kt(this).toSpliced(...e)
    },
    unshift(...e) {
        return sn(this, "unshift", e)
    },
    values() {
        return Cs(this, "values", he)
    }
};
function Cs(e, t, n) {
    const s = as(e)
      , r = s[t]();
    return s !== e && !We(e) && (r._next = r.next,
    r.next = () => {
        const o = r._next();
        return o.value && (o.value = n(o.value)),
        o
    }
    ),
    r
}
const Zl = Array.prototype;
function ut(e, t, n, s, r, o) {
    const i = as(e)
      , l = i !== e && !We(e)
      , c = i[t];
    if (c !== Zl[t]) {
        const u = c.apply(e, o);
        return l ? he(u) : u
    }
    let f = n;
    i !== e && (l ? f = function(u, p) {
        return n.call(this, he(u), p, e)
    }
    : n.length > 2 && (f = function(u, p) {
        return n.call(this, u, p, e)
    }
    ));
    const a = c.call(i, f, s);
    return l && r ? r(a) : a
}
function jr(e, t, n, s) {
    const r = as(e);
    let o = n;
    return r !== e && (We(e) ? n.length > 3 && (o = function(i, l, c) {
        return n.call(this, i, l, c, e)
    }
    ) : o = function(i, l, c) {
        return n.call(this, i, he(l), c, e)
    }
    ),
    r[t](o, ...s)
}
function Ts(e, t, n) {
    const s = Y(e);
    me(s, "iterate", _n);
    const r = s[t](...n);
    return (r === -1 || r === !1) && gr(n[0]) ? (n[0] = Y(n[0]),
    s[t](...n)) : r
}
function sn(e, t, n=[]) {
    mt(),
    ur();
    const s = Y(e)[t].apply(e, n);
    return fr(),
    gt(),
    s
}
const ec = ir("__proto__,__v_isRef,__isVue")
  , ai = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(lt));
function tc(e) {
    lt(e) || (e = String(e));
    const t = Y(this);
    return me(t, "has", e),
    t.hasOwnProperty(e)
}
class ui {
    constructor(t=!1, n=!1) {
        this._isReadonly = t,
        this._isShallow = n
    }
    get(t, n, s) {
        if (n === "__v_skip")
            return t.__v_skip;
        const r = this._isReadonly
          , o = this._isShallow;
        if (n === "__v_isReactive")
            return !r;
        if (n === "__v_isReadonly")
            return r;
        if (n === "__v_isShallow")
            return o;
        if (n === "__v_raw")
            return s === (r ? o ? fc : pi : o ? hi : di).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
        const i = B(t);
        if (!r) {
            let c;
            if (i && (c = Ql[n]))
                return c;
            if (n === "hasOwnProperty")
                return tc
        }
        const l = Reflect.get(t, n, ve(t) ? t : s);
        return (lt(n) ? ai.has(n) : ec(n)) || (r || me(t, "get", n),
        o) ? l : ve(l) ? i && ar(n) ? l : l.value : oe(l) ? r ? gi(l) : Mt(l) : l
    }
}
class fi extends ui {
    constructor(t=!1) {
        super(!1, t)
    }
    set(t, n, s, r) {
        let o = t[n];
        if (!this._isShallow) {
            const c = xt(o);
            if (!We(s) && !xt(s) && (o = Y(o),
            s = Y(s)),
            !B(t) && ve(o) && !ve(s))
                return c ? !1 : (o.value = s,
                !0)
        }
        const i = B(t) && ar(n) ? Number(n) < t.length : Q(t, n)
          , l = Reflect.set(t, n, s, ve(t) ? t : r);
        return t === Y(r) && (i ? St(s, o) && ht(t, "set", n, s) : ht(t, "add", n, s)),
        l
    }
    deleteProperty(t, n) {
        const s = Q(t, n);
        t[n];
        const r = Reflect.deleteProperty(t, n);
        return r && s && ht(t, "delete", n, void 0),
        r
    }
    has(t, n) {
        const s = Reflect.has(t, n);
        return (!lt(n) || !ai.has(n)) && me(t, "has", n),
        s
    }
    ownKeys(t) {
        return me(t, "iterate", B(t) ? "length" : Ft),
        Reflect.ownKeys(t)
    }
}
class nc extends ui {
    constructor(t=!1) {
        super(!0, t)
    }
    set(t, n) {
        return !0
    }
    deleteProperty(t, n) {
        return !0
    }
}
const sc = new fi
  , rc = new nc
  , oc = new fi(!0);
const Vs = e => e
  , Fn = e => Reflect.getPrototypeOf(e);
function ic(e, t, n) {
    return function(...s) {
        const r = this.__v_raw
          , o = Y(r)
          , i = Kt(o)
          , l = e === "entries" || e === Symbol.iterator && i
          , c = e === "keys" && i
          , f = r[e](...s)
          , a = n ? Vs : t ? zn : he;
        return !t && me(o, "iterate", c ? qs : Ft),
        {
            next() {
                const {value: u, done: p} = f.next();
                return p ? {
                    value: u,
                    done: p
                } : {
                    value: l ? [a(u[0]), a(u[1])] : a(u),
                    done: p
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}
function Mn(e) {
    return function(...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}
function lc(e, t) {
    const n = {
        get(r) {
            const o = this.__v_raw
              , i = Y(o)
              , l = Y(r);
            e || (St(r, l) && me(i, "get", r),
            me(i, "get", l));
            const {has: c} = Fn(i)
              , f = t ? Vs : e ? zn : he;
            if (c.call(i, r))
                return f(o.get(r));
            if (c.call(i, l))
                return f(o.get(l));
            o !== i && o.get(r)
        },
        get size() {
            const r = this.__v_raw;
            return !e && me(Y(r), "iterate", Ft),
            Reflect.get(r, "size", r)
        },
        has(r) {
            const o = this.__v_raw
              , i = Y(o)
              , l = Y(r);
            return e || (St(r, l) && me(i, "has", r),
            me(i, "has", l)),
            r === l ? o.has(r) : o.has(r) || o.has(l)
        },
        forEach(r, o) {
            const i = this
              , l = i.__v_raw
              , c = Y(l)
              , f = t ? Vs : e ? zn : he;
            return !e && me(c, "iterate", Ft),
            l.forEach( (a, u) => r.call(o, f(a), f(u), i))
        }
    };
    return _e(n, e ? {
        add: Mn("add"),
        set: Mn("set"),
        delete: Mn("delete"),
        clear: Mn("clear")
    } : {
        add(r) {
            !t && !We(r) && !xt(r) && (r = Y(r));
            const o = Y(this);
            return Fn(o).has.call(o, r) || (o.add(r),
            ht(o, "add", r, r)),
            this
        },
        set(r, o) {
            !t && !We(o) && !xt(o) && (o = Y(o));
            const i = Y(this)
              , {has: l, get: c} = Fn(i);
            let f = l.call(i, r);
            f || (r = Y(r),
            f = l.call(i, r));
            const a = c.call(i, r);
            return i.set(r, o),
            f ? St(o, a) && ht(i, "set", r, o) : ht(i, "add", r, o),
            this
        },
        delete(r) {
            const o = Y(this)
              , {has: i, get: l} = Fn(o);
            let c = i.call(o, r);
            c || (r = Y(r),
            c = i.call(o, r)),
            l && l.call(o, r);
            const f = o.delete(r);
            return c && ht(o, "delete", r, void 0),
            f
        },
        clear() {
            const r = Y(this)
              , o = r.size !== 0
              , i = r.clear();
            return o && ht(r, "clear", void 0, void 0),
            i
        }
    }),
    ["keys", "values", "entries", Symbol.iterator].forEach(r => {
        n[r] = ic(r, e, t)
    }
    ),
    n
}
function pr(e, t) {
    const n = lc(e, t);
    return (s, r, o) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(Q(n, r) && r in s ? n : s, r, o)
}
const cc = {
    get: pr(!1, !1)
}
  , ac = {
    get: pr(!1, !0)
}
  , uc = {
    get: pr(!0, !1)
};
const di = new WeakMap
  , hi = new WeakMap
  , pi = new WeakMap
  , fc = new WeakMap;
function dc(e) {
    switch (e) {
    case "Object":
    case "Array":
        return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
        return 2;
    default:
        return 0
    }
}
function hc(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : dc(jl(e))
}
function Mt(e) {
    return xt(e) ? e : mr(e, !1, sc, cc, di)
}
function mi(e) {
    return mr(e, !1, oc, ac, hi)
}
function gi(e) {
    return mr(e, !0, rc, uc, pi)
}
function mr(e, t, n, s, r) {
    if (!oe(e) || e.__v_raw && !(t && e.__v_isReactive))
        return e;
    const o = hc(e);
    if (o === 0)
        return e;
    const i = r.get(e);
    if (i)
        return i;
    const l = new Proxy(e,o === 2 ? s : n);
    return r.set(e, l),
    l
}
function zt(e) {
    return xt(e) ? zt(e.__v_raw) : !!(e && e.__v_isReactive)
}
function xt(e) {
    return !!(e && e.__v_isReadonly)
}
function We(e) {
    return !!(e && e.__v_isShallow)
}
function gr(e) {
    return e ? !!e.__v_raw : !1
}
function Y(e) {
    const t = e && e.__v_raw;
    return t ? Y(t) : e
}
function pc(e) {
    return !Q(e, "__v_skip") && Object.isExtensible(e) && Us(e, "__v_skip", !0),
    e
}
const he = e => oe(e) ? Mt(e) : e
  , zn = e => oe(e) ? gi(e) : e;
function ve(e) {
    return e ? e.__v_isRef === !0 : !1
}
function ce(e) {
    return yi(e, !1)
}
function mc(e) {
    return yi(e, !0)
}
function yi(e, t) {
    return ve(e) ? e : new gc(e,t)
}
class gc {
    constructor(t, n) {
        this.dep = new hr,
        this.__v_isRef = !0,
        this.__v_isShallow = !1,
        this._rawValue = n ? t : Y(t),
        this._value = n ? t : he(t),
        this.__v_isShallow = n
    }
    get value() {
        return this.dep.track(),
        this._value
    }
    set value(t) {
        const n = this._rawValue
          , s = this.__v_isShallow || We(t) || xt(t);
        t = s ? t : Y(t),
        St(t, n) && (this._rawValue = t,
        this._value = s ? t : he(t),
        this.dep.trigger())
    }
}
function ke(e) {
    return ve(e) ? e.value : e
}
const yc = {
    get: (e, t, n) => t === "__v_raw" ? e : ke(Reflect.get(e, t, n)),
    set: (e, t, n, s) => {
        const r = e[t];
        return ve(r) && !ve(n) ? (r.value = n,
        !0) : Reflect.set(e, t, n, s)
    }
};
function bi(e) {
    return zt(e) ? e : new Proxy(e,yc)
}
class bc {
    constructor(t, n, s) {
        this.fn = t,
        this.setter = n,
        this._value = void 0,
        this.dep = new hr(this),
        this.__v_isRef = !0,
        this.deps = void 0,
        this.depsTail = void 0,
        this.flags = 16,
        this.globalVersion = vn - 1,
        this.next = void 0,
        this.effect = this,
        this.__v_isReadonly = !n,
        this.isSSR = s
    }
    notify() {
        if (this.flags |= 16,
        !(this.flags & 8) && re !== this)
            return si(this, !0),
            !0
    }
    get value() {
        const t = this.dep.track();
        return ii(this),
        t && (t.version = this.dep.version),
        this._value
    }
    set value(t) {
        this.setter && this.setter(t)
    }
}
function vc(e, t, n=!1) {
    let s, r;
    return V(e) ? s = e : (s = e.get,
    r = e.set),
    new bc(s,r,n)
}
const Ln = {}
  , Wn = new WeakMap;
let Pt;
function _c(e, t=!1, n=Pt) {
    if (n) {
        let s = Wn.get(n);
        s || Wn.set(n, s = []),
        s.push(e)
    }
}
function wc(e, t, n=te) {
    const {immediate: s, deep: r, once: o, scheduler: i, augmentJob: l, call: c} = n
      , f = L => r ? L : We(L) || r === !1 || r === 0 ? pt(L, 1) : pt(L);
    let a, u, p, y, _ = !1, C = !1;
    if (ve(e) ? (u = () => e.value,
    _ = We(e)) : zt(e) ? (u = () => f(e),
    _ = !0) : B(e) ? (C = !0,
    _ = e.some(L => zt(L) || We(L)),
    u = () => e.map(L => {
        if (ve(L))
            return L.value;
        if (zt(L))
            return f(L);
        if (V(L))
            return c ? c(L, 2) : L()
    }
    )) : V(e) ? t ? u = c ? () => c(e, 2) : e : u = () => {
        if (p) {
            mt();
            try {
                p()
            } finally {
                gt()
            }
        }
        const L = Pt;
        Pt = a;
        try {
            return c ? c(e, 3, [y]) : e(y)
        } finally {
            Pt = L
        }
    }
    : u = ot,
    t && r) {
        const L = u
          , H = r === !0 ? 1 / 0 : r;
        u = () => pt(L(), H)
    }
    const A = Gl()
      , O = () => {
        a.stop(),
        A && A.active && cr(A.effects, a)
    }
    ;
    if (o && t) {
        const L = t;
        t = (...H) => {
            L(...H),
            O()
        }
    }
    let N = C ? new Array(e.length).fill(Ln) : Ln;
    const M = L => {
        if (!(!(a.flags & 1) || !a.dirty && !L))
            if (t) {
                const H = a.run();
                if (r || _ || (C ? H.some( (Z, W) => St(Z, N[W])) : St(H, N))) {
                    p && p();
                    const Z = Pt;
                    Pt = a;
                    try {
                        const W = [H, N === Ln ? void 0 : C && N[0] === Ln ? [] : N, y];
                        N = H,
                        c ? c(t, 3, W) : t(...W)
                    } finally {
                        Pt = Z
                    }
                }
            } else
                a.run()
    }
    ;
    return l && l(M),
    a = new ti(u),
    a.scheduler = i ? () => i(M, !1) : M,
    y = L => _c(L, !1, a),
    p = a.onStop = () => {
        const L = Wn.get(a);
        if (L) {
            if (c)
                c(L, 4);
            else
                for (const H of L)
                    H();
            Wn.delete(a)
        }
    }
    ,
    t ? s ? M(!0) : N = a.run() : i ? i(M.bind(null, !0), !0) : a.run(),
    O.pause = a.pause.bind(a),
    O.resume = a.resume.bind(a),
    O.stop = O,
    O
}
function pt(e, t=1 / 0, n) {
    if (t <= 0 || !oe(e) || e.__v_skip || (n = n || new Set,
    n.has(e)))
        return e;
    if (n.add(e),
    t--,
    ve(e))
        pt(e.value, t, n);
    else if (B(e))
        for (let s = 0; s < e.length; s++)
            pt(e[s], t, n);
    else if (rs(e) || Kt(e))
        e.forEach(s => {
            pt(s, t, n)
        }
        );
    else if (Xo(e)) {
        for (const s in e)
            pt(e[s], t, n);
        for (const s of Object.getOwnPropertySymbols(e))
            Object.prototype.propertyIsEnumerable.call(e, s) && pt(e[s], t, n)
    }
    return e
}
/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function An(e, t, n, s) {
    try {
        return s ? e(...s) : e()
    } catch (r) {
        us(r, t, n)
    }
}
function ct(e, t, n, s) {
    if (V(e)) {
        const r = An(e, t, n, s);
        return r && Jo(r) && r.catch(o => {
            us(o, t, n)
        }
        ),
        r
    }
    if (B(e)) {
        const r = [];
        for (let o = 0; o < e.length; o++)
            r.push(ct(e[o], t, n, s));
        return r
    }
}
function us(e, t, n, s=!0) {
    const r = t ? t.vnode : null
      , {errorHandler: o, throwUnhandledErrorInProduction: i} = t && t.appContext.config || te;
    if (t) {
        let l = t.parent;
        const c = t.proxy
          , f = `https://vuejs.org/error-reference/#runtime-${n}`;
        for (; l; ) {
            const a = l.ec;
            if (a) {
                for (let u = 0; u < a.length; u++)
                    if (a[u](e, c, f) === !1)
                        return
            }
            l = l.parent
        }
        if (o) {
            mt(),
            An(o, null, 10, [e, c, f]),
            gt();
            return
        }
    }
    Ec(e, n, r, s, i)
}
function Ec(e, t, n, s=!0, r=!1) {
    if (r)
        throw e;
    console.error(e)
}
const Se = [];
let st = -1;
const Wt = [];
let _t = null
  , $t = 0;
const vi = Promise.resolve();
let Jn = null;
function yr(e) {
    const t = Jn || vi;
    return e ? t.then(this ? e.bind(this) : e) : t
}
function Sc(e) {
    let t = st + 1
      , n = Se.length;
    for (; t < n; ) {
        const s = t + n >>> 1
          , r = Se[s]
          , o = wn(r);
        o < e || o === e && r.flags & 2 ? t = s + 1 : n = s
    }
    return t
}
function br(e) {
    if (!(e.flags & 1)) {
        const t = wn(e)
          , n = Se[Se.length - 1];
        !n || !(e.flags & 2) && t >= wn(n) ? Se.push(e) : Se.splice(Sc(t), 0, e),
        e.flags |= 1,
        _i()
    }
}
function _i() {
    Jn || (Jn = vi.then(Ei))
}
function Rc(e) {
    B(e) ? Wt.push(...e) : _t && e.id === -1 ? _t.splice($t + 1, 0, e) : e.flags & 1 || (Wt.push(e),
    e.flags |= 1),
    _i()
}
function kr(e, t, n=st + 1) {
    for (; n < Se.length; n++) {
        const s = Se[n];
        if (s && s.flags & 2) {
            if (e && s.id !== e.uid)
                continue;
            Se.splice(n, 1),
            n--,
            s.flags & 4 && (s.flags &= -2),
            s(),
            s.flags & 4 || (s.flags &= -2)
        }
    }
}
function wi(e) {
    if (Wt.length) {
        const t = [...new Set(Wt)].sort( (n, s) => wn(n) - wn(s));
        if (Wt.length = 0,
        _t) {
            _t.push(...t);
            return
        }
        for (_t = t,
        $t = 0; $t < _t.length; $t++) {
            const n = _t[$t];
            n.flags & 4 && (n.flags &= -2),
            n.flags & 8 || n(),
            n.flags &= -2
        }
        _t = null,
        $t = 0
    }
}
const wn = e => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Ei(e) {
    try {
        for (st = 0; st < Se.length; st++) {
            const t = Se[st];
            t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2),
            An(t, t.i, t.i ? 15 : 14),
            t.flags & 4 || (t.flags &= -2))
        }
    } finally {
        for (; st < Se.length; st++) {
            const t = Se[st];
            t && (t.flags &= -2)
        }
        st = -1,
        Se.length = 0,
        wi(),
        Jn = null,
        (Se.length || Wt.length) && Ei()
    }
}
let ze = null
  , Si = null;
function Gn(e) {
    const t = ze;
    return ze = e,
    Si = e && e.type.__scopeId || null,
    t
}
function xc(e, t=ze, n) {
    if (!t || e._n)
        return e;
    const s = (...r) => {
        s._d && Jr(-1);
        const o = Gn(t);
        let i;
        try {
            i = e(...r)
        } finally {
            Gn(o),
            s._d && Jr(1)
        }
        return i
    }
    ;
    return s._n = !0,
    s._c = !0,
    s._d = !0,
    s
}
function $r(e, t) {
    if (ze === null)
        return e;
    const n = ms(ze)
      , s = e.dirs || (e.dirs = []);
    for (let r = 0; r < t.length; r++) {
        let[o,i,l,c=te] = t[r];
        o && (V(o) && (o = {
            mounted: o,
            updated: o
        }),
        o.deep && pt(i),
        s.push({
            dir: o,
            instance: n,
            value: i,
            oldValue: void 0,
            arg: l,
            modifiers: c
        }))
    }
    return e
}
function At(e, t, n, s) {
    const r = e.dirs
      , o = t && t.dirs;
    for (let i = 0; i < r.length; i++) {
        const l = r[i];
        o && (l.oldValue = o[i].value);
        let c = l.dir[s];
        c && (mt(),
        ct(c, n, 8, [e.el, l, e, t]),
        gt())
    }
}
const Cc = Symbol("_vte")
  , Tc = e => e.__isTeleport;
function vr(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t,
    vr(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent),
    e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}
/*! #__NO_SIDE_EFFECTS__ */
function fs(e, t) {
    return V(e) ? _e({
        name: e.name
    }, t, {
        setup: e
    }) : e
}
function Ri(e) {
    e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0]
}
function dn(e, t, n, s, r=!1) {
    if (B(e)) {
        e.forEach( (_, C) => dn(_, t && (B(t) ? t[C] : t), n, s, r));
        return
    }
    if (hn(s) && !r) {
        s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && dn(e, t, n, s.component.subTree);
        return
    }
    const o = s.shapeFlag & 4 ? ms(s.component) : s.el
      , i = r ? null : o
      , {i: l, r: c} = e
      , f = t && t.r
      , a = l.refs === te ? l.refs = {} : l.refs
      , u = l.setupState
      , p = Y(u)
      , y = u === te ? () => !1 : _ => Q(p, _);
    if (f != null && f !== c && (ae(f) ? (a[f] = null,
    y(f) && (u[f] = null)) : ve(f) && (f.value = null)),
    V(c))
        An(c, l, 12, [i, a]);
    else {
        const _ = ae(c)
          , C = ve(c);
        if (_ || C) {
            const A = () => {
                if (e.f) {
                    const O = _ ? y(c) ? u[c] : a[c] : c.value;
                    r ? B(O) && cr(O, o) : B(O) ? O.includes(o) || O.push(o) : _ ? (a[c] = [o],
                    y(c) && (u[c] = a[c])) : (c.value = [o],
                    e.k && (a[e.k] = c.value))
                } else
                    _ ? (a[c] = i,
                    y(c) && (u[c] = i)) : C && (c.value = i,
                    e.k && (a[e.k] = i))
            }
            ;
            i ? (A.id = -1,
            je(A, n)) : A()
        }
    }
}
is().requestIdleCallback;
is().cancelIdleCallback;
const hn = e => !!e.type.__asyncLoader
  , xi = e => e.type.__isKeepAlive;
function Ac(e, t) {
    Ci(e, "a", t)
}
function Oc(e, t) {
    Ci(e, "da", t)
}
function Ci(e, t, n=Re) {
    const s = e.__wdc || (e.__wdc = () => {
        let r = n;
        for (; r; ) {
            if (r.isDeactivated)
                return;
            r = r.parent
        }
        return e()
    }
    );
    if (ds(t, s, n),
    n) {
        let r = n.parent;
        for (; r && r.parent; )
            xi(r.parent.vnode) && Pc(s, t, n, r),
            r = r.parent
    }
}
function Pc(e, t, n, s) {
    const r = ds(t, e, s, !0);
    pn( () => {
        cr(s[t], r)
    }
    , n)
}
function ds(e, t, n=Re, s=!1) {
    if (n) {
        const r = n[e] || (n[e] = [])
          , o = t.__weh || (t.__weh = (...i) => {
            mt();
            const l = On(n)
              , c = ct(t, n, e, i);
            return l(),
            gt(),
            c
        }
        );
        return s ? r.unshift(o) : r.push(o),
        o
    }
}
const yt = e => (t, n=Re) => {
    (!Sn || e === "sp") && ds(e, (...s) => t(...s), n)
}
  , Nc = yt("bm")
  , qt = yt("m")
  , Ic = yt("bu")
  , Dc = yt("u")
  , Fc = yt("bum")
  , pn = yt("um")
  , Mc = yt("sp")
  , Lc = yt("rtg")
  , jc = yt("rtc");
function kc(e, t=Re) {
    ds("ec", e, t)
}
const $c = Symbol.for("v-ndc");
function Ut(e, t, n, s) {
    let r;
    const o = n
      , i = B(e);
    if (i || ae(e)) {
        const l = i && zt(e);
        let c = !1
          , f = !1;
        l && (c = !We(e),
        f = xt(e),
        e = as(e)),
        r = new Array(e.length);
        for (let a = 0, u = e.length; a < u; a++)
            r[a] = t(c ? f ? zn(he(e[a])) : he(e[a]) : e[a], a, void 0, o)
    } else if (typeof e == "number") {
        r = new Array(e);
        for (let l = 0; l < e; l++)
            r[l] = t(l + 1, l, void 0, o)
    } else if (oe(e))
        if (e[Symbol.iterator])
            r = Array.from(e, (l, c) => t(l, c, void 0, o));
        else {
            const l = Object.keys(e);
            r = new Array(l.length);
            for (let c = 0, f = l.length; c < f; c++) {
                const a = l[c];
                r[c] = t(e[a], a, c, o)
            }
        }
    else
        r = [];
    return r
}
const Ks = e => e ? zi(e) ? ms(e) : Ks(e.parent) : null
  , mn = _e(Object.create(null), {
    $: e => e,
    $el: e => e.vnode.el,
    $data: e => e.data,
    $props: e => e.props,
    $attrs: e => e.attrs,
    $slots: e => e.slots,
    $refs: e => e.refs,
    $parent: e => Ks(e.parent),
    $root: e => Ks(e.root),
    $host: e => e.ce,
    $emit: e => e.emit,
    $options: e => Ai(e),
    $forceUpdate: e => e.f || (e.f = () => {
        br(e.update)
    }
    ),
    $nextTick: e => e.n || (e.n = yr.bind(e.proxy)),
    $watch: e => ia.bind(e)
})
  , As = (e, t) => e !== te && !e.__isScriptSetup && Q(e, t)
  , Uc = {
    get({_: e}, t) {
        if (t === "__v_skip")
            return !0;
        const {ctx: n, setupState: s, data: r, props: o, accessCache: i, type: l, appContext: c} = e;
        let f;
        if (t[0] !== "$") {
            const y = i[t];
            if (y !== void 0)
                switch (y) {
                case 1:
                    return s[t];
                case 2:
                    return r[t];
                case 4:
                    return n[t];
                case 3:
                    return o[t]
                }
            else {
                if (As(s, t))
                    return i[t] = 1,
                    s[t];
                if (r !== te && Q(r, t))
                    return i[t] = 2,
                    r[t];
                if ((f = e.propsOptions[0]) && Q(f, t))
                    return i[t] = 3,
                    o[t];
                if (n !== te && Q(n, t))
                    return i[t] = 4,
                    n[t];
                zs && (i[t] = 0)
            }
        }
        const a = mn[t];
        let u, p;
        if (a)
            return t === "$attrs" && me(e.attrs, "get", ""),
            a(e);
        if ((u = l.__cssModules) && (u = u[t]))
            return u;
        if (n !== te && Q(n, t))
            return i[t] = 4,
            n[t];
        if (p = c.config.globalProperties,
        Q(p, t))
            return p[t]
    },
    set({_: e}, t, n) {
        const {data: s, setupState: r, ctx: o} = e;
        return As(r, t) ? (r[t] = n,
        !0) : s !== te && Q(s, t) ? (s[t] = n,
        !0) : Q(e.props, t) || t[0] === "$" && t.slice(1)in e ? !1 : (o[t] = n,
        !0)
    },
    has({_: {data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: o}}, i) {
        let l;
        return !!n[i] || e !== te && Q(e, i) || As(t, i) || (l = o[0]) && Q(l, i) || Q(s, i) || Q(mn, i) || Q(r.config.globalProperties, i)
    },
    defineProperty(e, t, n) {
        return n.get != null ? e._.accessCache[t] = 0 : Q(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
    }
};
function Ur(e) {
    return B(e) ? e.reduce( (t, n) => (t[n] = null,
    t), {}) : e
}
let zs = !0;
function Bc(e) {
    const t = Ai(e)
      , n = e.proxy
      , s = e.ctx;
    zs = !1,
    t.beforeCreate && Br(t.beforeCreate, e, "bc");
    const {data: r, computed: o, methods: i, watch: l, provide: c, inject: f, created: a, beforeMount: u, mounted: p, beforeUpdate: y, updated: _, activated: C, deactivated: A, beforeDestroy: O, beforeUnmount: N, destroyed: M, unmounted: L, render: H, renderTracked: Z, renderTriggered: W, errorCaptured: ne, serverPrefetch: Ce, expose: Te, inheritAttrs: Ue, components: Be, directives: De, filters: bt} = t;
    if (f && Hc(f, s, null),
    i)
        for (const J in i) {
            const z = i[J];
            V(z) && (s[J] = z.bind(n))
        }
    if (r) {
        const J = r.call(n, n);
        oe(J) && (e.data = Mt(J))
    }
    if (zs = !0,
    o)
        for (const J in o) {
            const z = o[J]
              , Fe = V(z) ? z.bind(n, n) : V(z.get) ? z.get.bind(n, n) : ot
              , qe = !V(z) && V(z.set) ? z.set.bind(n) : ot
              , Me = ye({
                get: Fe,
                set: qe
            });
            Object.defineProperty(s, J, {
                enumerable: !0,
                configurable: !0,
                get: () => Me.value,
                set: fe => Me.value = fe
            })
        }
    if (l)
        for (const J in l)
            Ti(l[J], s, n, J);
    if (c) {
        const J = V(c) ? c.call(n) : c;
        Reflect.ownKeys(J).forEach(z => {
            kn(z, J[z])
        }
        )
    }
    a && Br(a, e, "c");
    function le(J, z) {
        B(z) ? z.forEach(Fe => J(Fe.bind(n))) : z && J(z.bind(n))
    }
    if (le(Nc, u),
    le(qt, p),
    le(Ic, y),
    le(Dc, _),
    le(Ac, C),
    le(Oc, A),
    le(kc, ne),
    le(jc, Z),
    le(Lc, W),
    le(Fc, N),
    le(pn, L),
    le(Mc, Ce),
    B(Te))
        if (Te.length) {
            const J = e.exposed || (e.exposed = {});
            Te.forEach(z => {
                Object.defineProperty(J, z, {
                    get: () => n[z],
                    set: Fe => n[z] = Fe,
                    enumerable: !0
                })
            }
            )
        } else
            e.exposed || (e.exposed = {});
    H && e.render === ot && (e.render = H),
    Ue != null && (e.inheritAttrs = Ue),
    Be && (e.components = Be),
    De && (e.directives = De),
    Ce && Ri(e)
}
function Hc(e, t, n=ot) {
    B(e) && (e = Ws(e));
    for (const s in e) {
        const r = e[s];
        let o;
        oe(r) ? "default"in r ? o = it(r.from || s, r.default, !0) : o = it(r.from || s) : o = it(r),
        ve(o) ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: i => o.value = i
        }) : t[s] = o
    }
}
function Br(e, t, n) {
    ct(B(e) ? e.map(s => s.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function Ti(e, t, n, s) {
    let r = s.includes(".") ? Bi(n, s) : () => n[s];
    if (ae(e)) {
        const o = t[e];
        V(o) && Gt(r, o)
    } else if (V(e))
        Gt(r, e.bind(n));
    else if (oe(e))
        if (B(e))
            e.forEach(o => Ti(o, t, n, s));
        else {
            const o = V(e.handler) ? e.handler.bind(n) : t[e.handler];
            V(o) && Gt(r, o, e)
        }
}
function Ai(e) {
    const t = e.type
      , {mixins: n, extends: s} = t
      , {mixins: r, optionsCache: o, config: {optionMergeStrategies: i}} = e.appContext
      , l = o.get(t);
    let c;
    return l ? c = l : !r.length && !n && !s ? c = t : (c = {},
    r.length && r.forEach(f => Xn(c, f, i, !0)),
    Xn(c, t, i)),
    oe(t) && o.set(t, c),
    c
}
function Xn(e, t, n, s=!1) {
    const {mixins: r, extends: o} = t;
    o && Xn(e, o, n, !0),
    r && r.forEach(i => Xn(e, i, n, !0));
    for (const i in t)
        if (!(s && i === "expose")) {
            const l = qc[i] || n && n[i];
            e[i] = l ? l(e[i], t[i]) : t[i]
        }
    return e
}
const qc = {
    data: Hr,
    props: qr,
    emits: qr,
    methods: cn,
    computed: cn,
    beforeCreate: we,
    created: we,
    beforeMount: we,
    mounted: we,
    beforeUpdate: we,
    updated: we,
    beforeDestroy: we,
    beforeUnmount: we,
    destroyed: we,
    unmounted: we,
    activated: we,
    deactivated: we,
    errorCaptured: we,
    serverPrefetch: we,
    components: cn,
    directives: cn,
    watch: Kc,
    provide: Hr,
    inject: Vc
};
function Hr(e, t) {
    return t ? e ? function() {
        return _e(V(e) ? e.call(this, this) : e, V(t) ? t.call(this, this) : t)
    }
    : t : e
}
function Vc(e, t) {
    return cn(Ws(e), Ws(t))
}
function Ws(e) {
    if (B(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++)
            t[e[n]] = e[n];
        return t
    }
    return e
}
function we(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}
function cn(e, t) {
    return e ? _e(Object.create(null), e, t) : t
}
function qr(e, t) {
    return e ? B(e) && B(t) ? [...new Set([...e, ...t])] : _e(Object.create(null), Ur(e), Ur(t ?? {})) : t
}
function Kc(e, t) {
    if (!e)
        return t;
    if (!t)
        return e;
    const n = _e(Object.create(null), e);
    for (const s in t)
        n[s] = we(e[s], t[s]);
    return n
}
function Oi() {
    return {
        app: null,
        config: {
            isNativeTag: Ml,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let zc = 0;
function Wc(e, t) {
    return function(s, r=null) {
        V(s) || (s = _e({}, s)),
        r != null && !oe(r) && (r = null);
        const o = Oi()
          , i = new WeakSet
          , l = [];
        let c = !1;
        const f = o.app = {
            _uid: zc++,
            _component: s,
            _props: r,
            _container: null,
            _context: o,
            _instance: null,
            version: Na,
            get config() {
                return o.config
            },
            set config(a) {},
            use(a, ...u) {
                return i.has(a) || (a && V(a.install) ? (i.add(a),
                a.install(f, ...u)) : V(a) && (i.add(a),
                a(f, ...u))),
                f
            },
            mixin(a) {
                return o.mixins.includes(a) || o.mixins.push(a),
                f
            },
            component(a, u) {
                return u ? (o.components[a] = u,
                f) : o.components[a]
            },
            directive(a, u) {
                return u ? (o.directives[a] = u,
                f) : o.directives[a]
            },
            mount(a, u, p) {
                if (!c) {
                    const y = f._ceVNode || xe(s, r);
                    return y.appContext = o,
                    p === !0 ? p = "svg" : p === !1 && (p = void 0),
                    e(y, a, p),
                    c = !0,
                    f._container = a,
                    a.__vue_app__ = f,
                    ms(y.component)
                }
            },
            onUnmount(a) {
                l.push(a)
            },
            unmount() {
                c && (ct(l, f._instance, 16),
                e(null, f._container),
                delete f._container.__vue_app__)
            },
            provide(a, u) {
                return o.provides[a] = u,
                f
            },
            runWithContext(a) {
                const u = Jt;
                Jt = f;
                try {
                    return a()
                } finally {
                    Jt = u
                }
            }
        };
        return f
    }
}
let Jt = null;
function kn(e, t) {
    if (Re) {
        let n = Re.provides;
        const s = Re.parent && Re.parent.provides;
        s === n && (n = Re.provides = Object.create(s)),
        n[e] = t
    }
}
function it(e, t, n=!1) {
    const s = xa();
    if (s || Jt) {
        let r = Jt ? Jt._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
        if (r && e in r)
            return r[e];
        if (arguments.length > 1)
            return n && V(t) ? t.call(s && s.proxy) : t
    }
}
const Pi = {}
  , Ni = () => Object.create(Pi)
  , Ii = e => Object.getPrototypeOf(e) === Pi;
function Jc(e, t, n, s=!1) {
    const r = {}
      , o = Ni();
    e.propsDefaults = Object.create(null),
    Di(e, t, r, o);
    for (const i in e.propsOptions[0])
        i in r || (r[i] = void 0);
    n ? e.props = s ? r : mi(r) : e.type.props ? e.props = r : e.props = o,
    e.attrs = o
}
function Gc(e, t, n, s) {
    const {props: r, attrs: o, vnode: {patchFlag: i}} = e
      , l = Y(r)
      , [c] = e.propsOptions;
    let f = !1;
    if ((s || i > 0) && !(i & 16)) {
        if (i & 8) {
            const a = e.vnode.dynamicProps;
            for (let u = 0; u < a.length; u++) {
                let p = a[u];
                if (hs(e.emitsOptions, p))
                    continue;
                const y = t[p];
                if (c)
                    if (Q(o, p))
                        y !== o[p] && (o[p] = y,
                        f = !0);
                    else {
                        const _ = Rt(p);
                        r[_] = Js(c, l, _, y, e, !1)
                    }
                else
                    y !== o[p] && (o[p] = y,
                    f = !0)
            }
        }
    } else {
        Di(e, t, r, o) && (f = !0);
        let a;
        for (const u in l)
            (!t || !Q(t, u) && ((a = Tt(u)) === u || !Q(t, a))) && (c ? n && (n[u] !== void 0 || n[a] !== void 0) && (r[u] = Js(c, l, u, void 0, e, !0)) : delete r[u]);
        if (o !== l)
            for (const u in o)
                (!t || !Q(t, u)) && (delete o[u],
                f = !0)
    }
    f && ht(e.attrs, "set", "")
}
function Di(e, t, n, s) {
    const [r,o] = e.propsOptions;
    let i = !1, l;
    if (t)
        for (let c in t) {
            if (an(c))
                continue;
            const f = t[c];
            let a;
            r && Q(r, a = Rt(c)) ? !o || !o.includes(a) ? n[a] = f : (l || (l = {}))[a] = f : hs(e.emitsOptions, c) || (!(c in s) || f !== s[c]) && (s[c] = f,
            i = !0)
        }
    if (o) {
        const c = Y(n)
          , f = l || te;
        for (let a = 0; a < o.length; a++) {
            const u = o[a];
            n[u] = Js(r, c, u, f[u], e, !Q(f, u))
        }
    }
    return i
}
function Js(e, t, n, s, r, o) {
    const i = e[n];
    if (i != null) {
        const l = Q(i, "default");
        if (l && s === void 0) {
            const c = i.default;
            if (i.type !== Function && !i.skipFactory && V(c)) {
                const {propsDefaults: f} = r;
                if (n in f)
                    s = f[n];
                else {
                    const a = On(r);
                    s = f[n] = c.call(null, t),
                    a()
                }
            } else
                s = c;
            r.ce && r.ce._setProp(n, s)
        }
        i[0] && (o && !l ? s = !1 : i[1] && (s === "" || s === Tt(n)) && (s = !0))
    }
    return s
}
const Xc = new WeakMap;
function Fi(e, t, n=!1) {
    const s = n ? Xc : t.propsCache
      , r = s.get(e);
    if (r)
        return r;
    const o = e.props
      , i = {}
      , l = [];
    let c = !1;
    if (!V(e)) {
        const a = u => {
            c = !0;
            const [p,y] = Fi(u, t, !0);
            _e(i, p),
            y && l.push(...y)
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(a),
        e.extends && a(e.extends),
        e.mixins && e.mixins.forEach(a)
    }
    if (!o && !c)
        return oe(e) && s.set(e, Vt),
        Vt;
    if (B(o))
        for (let a = 0; a < o.length; a++) {
            const u = Rt(o[a]);
            Vr(u) && (i[u] = te)
        }
    else if (o)
        for (const a in o) {
            const u = Rt(a);
            if (Vr(u)) {
                const p = o[a]
                  , y = i[u] = B(p) || V(p) ? {
                    type: p
                } : _e({}, p)
                  , _ = y.type;
                let C = !1
                  , A = !0;
                if (B(_))
                    for (let O = 0; O < _.length; ++O) {
                        const N = _[O]
                          , M = V(N) && N.name;
                        if (M === "Boolean") {
                            C = !0;
                            break
                        } else
                            M === "String" && (A = !1)
                    }
                else
                    C = V(_) && _.name === "Boolean";
                y[0] = C,
                y[1] = A,
                (C || Q(y, "default")) && l.push(u)
            }
        }
    const f = [i, l];
    return oe(e) && s.set(e, f),
    f
}
function Vr(e) {
    return e[0] !== "$" && !an(e)
}
const _r = e => e === "_" || e === "__" || e === "_ctx" || e === "$stable"
  , wr = e => B(e) ? e.map(rt) : [rt(e)]
  , Yc = (e, t, n) => {
    if (t._n)
        return t;
    const s = xc( (...r) => wr(t(...r)), n);
    return s._c = !1,
    s
}
  , Mi = (e, t, n) => {
    const s = e._ctx;
    for (const r in e) {
        if (_r(r))
            continue;
        const o = e[r];
        if (V(o))
            t[r] = Yc(r, o, s);
        else if (o != null) {
            const i = wr(o);
            t[r] = () => i
        }
    }
}
  , Li = (e, t) => {
    const n = wr(t);
    e.slots.default = () => n
}
  , ji = (e, t, n) => {
    for (const s in t)
        (n || !_r(s)) && (e[s] = t[s])
}
  , Qc = (e, t, n) => {
    const s = e.slots = Ni();
    if (e.vnode.shapeFlag & 32) {
        const r = t.__;
        r && Us(s, "__", r, !0);
        const o = t._;
        o ? (ji(s, t, n),
        n && Us(s, "_", o, !0)) : Mi(t, s)
    } else
        t && Li(e, t)
}
  , Zc = (e, t, n) => {
    const {vnode: s, slots: r} = e;
    let o = !0
      , i = te;
    if (s.shapeFlag & 32) {
        const l = t._;
        l ? n && l === 1 ? o = !1 : ji(r, t, n) : (o = !t.$stable,
        Mi(t, r)),
        i = t
    } else
        t && (Li(e, t),
        i = {
            default: 1
        });
    if (o)
        for (const l in r)
            !_r(l) && i[l] == null && delete r[l]
}
  , je = ha;
function ea(e) {
    return ta(e)
}
function ta(e, t) {
    const n = is();
    n.__VUE__ = !0;
    const {insert: s, remove: r, patchProp: o, createElement: i, createText: l, createComment: c, setText: f, setElementText: a, parentNode: u, nextSibling: p, setScopeId: y=ot, insertStaticContent: _} = e
      , C = (d, h, b, E=null, R=null, x=null, D=void 0, I=null, g=!!h.dynamicChildren) => {
        if (d === h)
            return;
        d && !rn(d, h) && (E = S(d),
        fe(d, R, x, !0),
        d = null),
        h.patchFlag === -2 && (g = !1,
        h.dynamicChildren = null);
        const {type: m, ref: T, shapeFlag: w} = h;
        switch (m) {
        case ps:
            A(d, h, b, E);
            break;
        case Ct:
            O(d, h, b, E);
            break;
        case $n:
            d == null && N(h, b, E, D);
            break;
        case ge:
            Be(d, h, b, E, R, x, D, I, g);
            break;
        default:
            w & 1 ? H(d, h, b, E, R, x, D, I, g) : w & 6 ? De(d, h, b, E, R, x, D, I, g) : (w & 64 || w & 128) && m.process(d, h, b, E, R, x, D, I, g, k)
        }
        T != null && R ? dn(T, d && d.ref, x, h || d, !h) : T == null && d && d.ref != null && dn(d.ref, null, x, d, !0)
    }
      , A = (d, h, b, E) => {
        if (d == null)
            s(h.el = l(h.children), b, E);
        else {
            const R = h.el = d.el;
            h.children !== d.children && f(R, h.children)
        }
    }
      , O = (d, h, b, E) => {
        d == null ? s(h.el = c(h.children || ""), b, E) : h.el = d.el
    }
      , N = (d, h, b, E) => {
        [d.el,d.anchor] = _(d.children, h, b, E, d.el, d.anchor)
    }
      , M = ({el: d, anchor: h}, b, E) => {
        let R;
        for (; d && d !== h; )
            R = p(d),
            s(d, b, E),
            d = R;
        s(h, b, E)
    }
      , L = ({el: d, anchor: h}) => {
        let b;
        for (; d && d !== h; )
            b = p(d),
            r(d),
            d = b;
        r(h)
    }
      , H = (d, h, b, E, R, x, D, I, g) => {
        h.type === "svg" ? D = "svg" : h.type === "math" && (D = "mathml"),
        d == null ? Z(h, b, E, R, x, D, I, g) : Ce(d, h, R, x, D, I, g)
    }
      , Z = (d, h, b, E, R, x, D, I) => {
        let g, m;
        const {props: T, shapeFlag: w, transition: P, dirs: U} = d;
        if (g = d.el = i(d.type, x, T && T.is, T),
        w & 8 ? a(g, d.children) : w & 16 && ne(d.children, g, null, E, R, Os(d, x), D, I),
        U && At(d, null, E, "created"),
        W(g, d, d.scopeId, D, E),
        T) {
            for (const se in T)
                se !== "value" && !an(se) && o(g, se, null, T[se], x, E);
            "value"in T && o(g, "value", null, T.value, x),
            (m = T.onVnodeBeforeMount) && tt(m, E, d)
        }
        U && At(d, null, E, "beforeMount");
        const K = na(R, P);
        K && P.beforeEnter(g),
        s(g, h, b),
        ((m = T && T.onVnodeMounted) || K || U) && je( () => {
            m && tt(m, E, d),
            K && P.enter(g),
            U && At(d, null, E, "mounted")
        }
        , R)
    }
      , W = (d, h, b, E, R) => {
        if (b && y(d, b),
        E)
            for (let x = 0; x < E.length; x++)
                y(d, E[x]);
        if (R) {
            let x = R.subTree;
            if (h === x || qi(x.type) && (x.ssContent === h || x.ssFallback === h)) {
                const D = R.vnode;
                W(d, D, D.scopeId, D.slotScopeIds, R.parent)
            }
        }
    }
      , ne = (d, h, b, E, R, x, D, I, g=0) => {
        for (let m = g; m < d.length; m++) {
            const T = d[m] = I ? wt(d[m]) : rt(d[m]);
            C(null, T, h, b, E, R, x, D, I)
        }
    }
      , Ce = (d, h, b, E, R, x, D) => {
        const I = h.el = d.el;
        let {patchFlag: g, dynamicChildren: m, dirs: T} = h;
        g |= d.patchFlag & 16;
        const w = d.props || te
          , P = h.props || te;
        let U;
        if (b && Ot(b, !1),
        (U = P.onVnodeBeforeUpdate) && tt(U, b, h, d),
        T && At(h, d, b, "beforeUpdate"),
        b && Ot(b, !0),
        (w.innerHTML && P.innerHTML == null || w.textContent && P.textContent == null) && a(I, ""),
        m ? Te(d.dynamicChildren, m, I, b, E, Os(h, R), x) : D || z(d, h, I, null, b, E, Os(h, R), x, !1),
        g > 0) {
            if (g & 16)
                Ue(I, w, P, b, R);
            else if (g & 2 && w.class !== P.class && o(I, "class", null, P.class, R),
            g & 4 && o(I, "style", w.style, P.style, R),
            g & 8) {
                const K = h.dynamicProps;
                for (let se = 0; se < K.length; se++) {
                    const ee = K[se]
                      , Ae = w[ee]
                      , Oe = P[ee];
                    (Oe !== Ae || ee === "value") && o(I, ee, Ae, Oe, R, b)
                }
            }
            g & 1 && d.children !== h.children && a(I, h.children)
        } else
            !D && m == null && Ue(I, w, P, b, R);
        ((U = P.onVnodeUpdated) || T) && je( () => {
            U && tt(U, b, h, d),
            T && At(h, d, b, "updated")
        }
        , E)
    }
      , Te = (d, h, b, E, R, x, D) => {
        for (let I = 0; I < h.length; I++) {
            const g = d[I]
              , m = h[I]
              , T = g.el && (g.type === ge || !rn(g, m) || g.shapeFlag & 198) ? u(g.el) : b;
            C(g, m, T, null, E, R, x, D, !0)
        }
    }
      , Ue = (d, h, b, E, R) => {
        if (h !== b) {
            if (h !== te)
                for (const x in h)
                    !an(x) && !(x in b) && o(d, x, h[x], null, R, E);
            for (const x in b) {
                if (an(x))
                    continue;
                const D = b[x]
                  , I = h[x];
                D !== I && x !== "value" && o(d, x, I, D, R, E)
            }
            "value"in b && o(d, "value", h.value, b.value, R)
        }
    }
      , Be = (d, h, b, E, R, x, D, I, g) => {
        const m = h.el = d ? d.el : l("")
          , T = h.anchor = d ? d.anchor : l("");
        let {patchFlag: w, dynamicChildren: P, slotScopeIds: U} = h;
        U && (I = I ? I.concat(U) : U),
        d == null ? (s(m, b, E),
        s(T, b, E),
        ne(h.children || [], b, T, R, x, D, I, g)) : w > 0 && w & 64 && P && d.dynamicChildren ? (Te(d.dynamicChildren, P, b, R, x, D, I),
        (h.key != null || R && h === R.subTree) && ki(d, h, !0)) : z(d, h, b, T, R, x, D, I, g)
    }
      , De = (d, h, b, E, R, x, D, I, g) => {
        h.slotScopeIds = I,
        d == null ? h.shapeFlag & 512 ? R.ctx.activate(h, b, E, D, g) : bt(h, b, E, R, x, D, g) : He(d, h, g)
    }
      , bt = (d, h, b, E, R, x, D) => {
        const I = d.component = Ra(d, E, R);
        if (xi(d) && (I.ctx.renderer = k),
        Ca(I, !1, D),
        I.asyncDep) {
            if (R && R.registerDep(I, le, D),
            !d.el) {
                const g = I.subTree = xe(Ct);
                O(null, g, h, b),
                d.placeholder = g.el
            }
        } else
            le(I, d, h, b, R, x, D)
    }
      , He = (d, h, b) => {
        const E = h.component = d.component;
        if (fa(d, h, b))
            if (E.asyncDep && !E.asyncResolved) {
                J(E, h, b);
                return
            } else
                E.next = h,
                E.update();
        else
            h.el = d.el,
            E.vnode = h
    }
      , le = (d, h, b, E, R, x, D) => {
        const I = () => {
            if (d.isMounted) {
                let {next: w, bu: P, u: U, parent: K, vnode: se} = d;
                {
                    const Ze = $i(d);
                    if (Ze) {
                        w && (w.el = se.el,
                        J(d, w, D)),
                        Ze.asyncDep.then( () => {
                            d.isUnmounted || I()
                        }
                        );
                        return
                    }
                }
                let ee = w, Ae;
                Ot(d, !1),
                w ? (w.el = se.el,
                J(d, w, D)) : w = se,
                P && jn(P),
                (Ae = w.props && w.props.onVnodeBeforeUpdate) && tt(Ae, K, w, se),
                Ot(d, !0);
                const Oe = zr(d)
                  , Qe = d.subTree;
                d.subTree = Oe,
                C(Qe, Oe, u(Qe.el), S(Qe), d, R, x),
                w.el = Oe.el,
                ee === null && da(d, Oe.el),
                U && je(U, R),
                (Ae = w.props && w.props.onVnodeUpdated) && je( () => tt(Ae, K, w, se), R)
            } else {
                let w;
                const {el: P, props: U} = h
                  , {bm: K, m: se, parent: ee, root: Ae, type: Oe} = d
                  , Qe = hn(h);
                Ot(d, !1),
                K && jn(K),
                !Qe && (w = U && U.onVnodeBeforeMount) && tt(w, ee, h),
                Ot(d, !0);
                {
                    Ae.ce && Ae.ce._def.shadowRoot !== !1 && Ae.ce._injectChildStyle(Oe);
                    const Ze = d.subTree = zr(d);
                    C(null, Ze, b, E, d, R, x),
                    h.el = Ze.el
                }
                if (se && je(se, R),
                !Qe && (w = U && U.onVnodeMounted)) {
                    const Ze = h;
                    je( () => tt(w, ee, Ze), R)
                }
                (h.shapeFlag & 256 || ee && hn(ee.vnode) && ee.vnode.shapeFlag & 256) && d.a && je(d.a, R),
                d.isMounted = !0,
                h = b = E = null
            }
        }
        ;
        d.scope.on();
        const g = d.effect = new ti(I);
        d.scope.off();
        const m = d.update = g.run.bind(g)
          , T = d.job = g.runIfDirty.bind(g);
        T.i = d,
        T.id = d.uid,
        g.scheduler = () => br(T),
        Ot(d, !0),
        m()
    }
      , J = (d, h, b) => {
        h.component = d;
        const E = d.vnode.props;
        d.vnode = h,
        d.next = null,
        Gc(d, h.props, E, b),
        Zc(d, h.children, b),
        mt(),
        kr(d),
        gt()
    }
      , z = (d, h, b, E, R, x, D, I, g=!1) => {
        const m = d && d.children
          , T = d ? d.shapeFlag : 0
          , w = h.children
          , {patchFlag: P, shapeFlag: U} = h;
        if (P > 0) {
            if (P & 128) {
                qe(m, w, b, E, R, x, D, I, g);
                return
            } else if (P & 256) {
                Fe(m, w, b, E, R, x, D, I, g);
                return
            }
        }
        U & 8 ? (T & 16 && de(m, R, x),
        w !== m && a(b, w)) : T & 16 ? U & 16 ? qe(m, w, b, E, R, x, D, I, g) : de(m, R, x, !0) : (T & 8 && a(b, ""),
        U & 16 && ne(w, b, E, R, x, D, I, g))
    }
      , Fe = (d, h, b, E, R, x, D, I, g) => {
        d = d || Vt,
        h = h || Vt;
        const m = d.length
          , T = h.length
          , w = Math.min(m, T);
        let P;
        for (P = 0; P < w; P++) {
            const U = h[P] = g ? wt(h[P]) : rt(h[P]);
            C(d[P], U, b, null, R, x, D, I, g)
        }
        m > T ? de(d, R, x, !0, !1, w) : ne(h, b, E, R, x, D, I, g, w)
    }
      , qe = (d, h, b, E, R, x, D, I, g) => {
        let m = 0;
        const T = h.length;
        let w = d.length - 1
          , P = T - 1;
        for (; m <= w && m <= P; ) {
            const U = d[m]
              , K = h[m] = g ? wt(h[m]) : rt(h[m]);
            if (rn(U, K))
                C(U, K, b, null, R, x, D, I, g);
            else
                break;
            m++
        }
        for (; m <= w && m <= P; ) {
            const U = d[w]
              , K = h[P] = g ? wt(h[P]) : rt(h[P]);
            if (rn(U, K))
                C(U, K, b, null, R, x, D, I, g);
            else
                break;
            w--,
            P--
        }
        if (m > w) {
            if (m <= P) {
                const U = P + 1
                  , K = U < T ? h[U].el : E;
                for (; m <= P; )
                    C(null, h[m] = g ? wt(h[m]) : rt(h[m]), b, K, R, x, D, I, g),
                    m++
            }
        } else if (m > P)
            for (; m <= w; )
                fe(d[m], R, x, !0),
                m++;
        else {
            const U = m
              , K = m
              , se = new Map;
            for (m = K; m <= P; m++) {
                const Le = h[m] = g ? wt(h[m]) : rt(h[m]);
                Le.key != null && se.set(Le.key, m)
            }
            let ee, Ae = 0;
            const Oe = P - K + 1;
            let Qe = !1
              , Ze = 0;
            const nn = new Array(Oe);
            for (m = 0; m < Oe; m++)
                nn[m] = 0;
            for (m = U; m <= w; m++) {
                const Le = d[m];
                if (Ae >= Oe) {
                    fe(Le, R, x, !0);
                    continue
                }
                let et;
                if (Le.key != null)
                    et = se.get(Le.key);
                else
                    for (ee = K; ee <= P; ee++)
                        if (nn[ee - K] === 0 && rn(Le, h[ee])) {
                            et = ee;
                            break
                        }
                et === void 0 ? fe(Le, R, x, !0) : (nn[et - K] = m + 1,
                et >= Ze ? Ze = et : Qe = !0,
                C(Le, h[et], b, null, R, x, D, I, g),
                Ae++)
            }
            const Nr = Qe ? sa(nn) : Vt;
            for (ee = Nr.length - 1,
            m = Oe - 1; m >= 0; m--) {
                const Le = K + m
                  , et = h[Le]
                  , Ir = h[Le + 1]
                  , Dr = Le + 1 < T ? Ir.el || Ir.placeholder : E;
                nn[m] === 0 ? C(null, et, b, Dr, R, x, D, I, g) : Qe && (ee < 0 || m !== Nr[ee] ? Me(et, b, Dr, 2) : ee--)
            }
        }
    }
      , Me = (d, h, b, E, R=null) => {
        const {el: x, type: D, transition: I, children: g, shapeFlag: m} = d;
        if (m & 6) {
            Me(d.component.subTree, h, b, E);
            return
        }
        if (m & 128) {
            d.suspense.move(h, b, E);
            return
        }
        if (m & 64) {
            D.move(d, h, b, k);
            return
        }
        if (D === ge) {
            s(x, h, b);
            for (let w = 0; w < g.length; w++)
                Me(g[w], h, b, E);
            s(d.anchor, h, b);
            return
        }
        if (D === $n) {
            M(d, h, b);
            return
        }
        if (E !== 2 && m & 1 && I)
            if (E === 0)
                I.beforeEnter(x),
                s(x, h, b),
                je( () => I.enter(x), R);
            else {
                const {leave: w, delayLeave: P, afterLeave: U} = I
                  , K = () => {
                    d.ctx.isUnmounted ? r(x) : s(x, h, b)
                }
                  , se = () => {
                    w(x, () => {
                        K(),
                        U && U()
                    }
                    )
                }
                ;
                P ? P(x, K, se) : se()
            }
        else
            s(x, h, b)
    }
      , fe = (d, h, b, E=!1, R=!1) => {
        const {type: x, props: D, ref: I, children: g, dynamicChildren: m, shapeFlag: T, patchFlag: w, dirs: P, cacheIndex: U} = d;
        if (w === -2 && (R = !1),
        I != null && (mt(),
        dn(I, null, b, d, !0),
        gt()),
        U != null && (h.renderCache[U] = void 0),
        T & 256) {
            h.ctx.deactivate(d);
            return
        }
        const K = T & 1 && P
          , se = !hn(d);
        let ee;
        if (se && (ee = D && D.onVnodeBeforeUnmount) && tt(ee, h, d),
        T & 6)
            Ke(d.component, b, E);
        else {
            if (T & 128) {
                d.suspense.unmount(b, E);
                return
            }
            K && At(d, null, h, "beforeUnmount"),
            T & 64 ? d.type.remove(d, h, b, k, E) : m && !m.hasOnce && (x !== ge || w > 0 && w & 64) ? de(m, h, b, !1, !0) : (x === ge && w & 384 || !R && T & 16) && de(g, h, b),
            E && at(d)
        }
        (se && (ee = D && D.onVnodeUnmounted) || K) && je( () => {
            ee && tt(ee, h, d),
            K && At(d, null, h, "unmounted")
        }
        , b)
    }
      , at = d => {
        const {type: h, el: b, anchor: E, transition: R} = d;
        if (h === ge) {
            Ve(b, E);
            return
        }
        if (h === $n) {
            L(d);
            return
        }
        const x = () => {
            r(b),
            R && !R.persisted && R.afterLeave && R.afterLeave()
        }
        ;
        if (d.shapeFlag & 1 && R && !R.persisted) {
            const {leave: D, delayLeave: I} = R
              , g = () => D(b, x);
            I ? I(d.el, x, g) : g()
        } else
            x()
    }
      , Ve = (d, h) => {
        let b;
        for (; d !== h; )
            b = p(d),
            r(d),
            d = b;
        r(h)
    }
      , Ke = (d, h, b) => {
        const {bum: E, scope: R, job: x, subTree: D, um: I, m: g, a: m, parent: T, slots: {__: w}} = d;
        Kr(g),
        Kr(m),
        E && jn(E),
        T && B(w) && w.forEach(P => {
            T.renderCache[P] = void 0
        }
        ),
        R.stop(),
        x && (x.flags |= 8,
        fe(D, d, h, b)),
        I && je(I, h),
        je( () => {
            d.isUnmounted = !0
        }
        , h),
        h && h.pendingBranch && !h.isUnmounted && d.asyncDep && !d.asyncResolved && d.suspenseId === h.pendingId && (h.deps--,
        h.deps === 0 && h.resolve())
    }
      , de = (d, h, b, E=!1, R=!1, x=0) => {
        for (let D = x; D < d.length; D++)
            fe(d[D], h, b, E, R)
    }
      , S = d => {
        if (d.shapeFlag & 6)
            return S(d.component.subTree);
        if (d.shapeFlag & 128)
            return d.suspense.next();
        const h = p(d.anchor || d.el)
          , b = h && h[Cc];
        return b ? p(b) : h
    }
    ;
    let j = !1;
    const F = (d, h, b) => {
        d == null ? h._vnode && fe(h._vnode, null, null, !0) : C(h._vnode || null, d, h, null, null, null, b),
        h._vnode = d,
        j || (j = !0,
        kr(),
        wi(),
        j = !1)
    }
      , k = {
        p: C,
        um: fe,
        m: Me,
        r: at,
        mt: bt,
        mc: ne,
        pc: z,
        pbc: Te,
        n: S,
        o: e
    };
    return {
        render: F,
        hydrate: void 0,
        createApp: Wc(F)
    }
}
function Os({type: e, props: t}, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n
}
function Ot({effect: e, job: t}, n) {
    n ? (e.flags |= 32,
    t.flags |= 4) : (e.flags &= -33,
    t.flags &= -5)
}
function na(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}
function ki(e, t, n=!1) {
    const s = e.children
      , r = t.children;
    if (B(s) && B(r))
        for (let o = 0; o < s.length; o++) {
            const i = s[o];
            let l = r[o];
            l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[o] = wt(r[o]),
            l.el = i.el),
            !n && l.patchFlag !== -2 && ki(i, l)),
            l.type === ps && (l.el = i.el),
            l.type === Ct && !l.el && (l.el = i.el)
        }
}
function sa(e) {
    const t = e.slice()
      , n = [0];
    let s, r, o, i, l;
    const c = e.length;
    for (s = 0; s < c; s++) {
        const f = e[s];
        if (f !== 0) {
            if (r = n[n.length - 1],
            e[r] < f) {
                t[s] = r,
                n.push(s);
                continue
            }
            for (o = 0,
            i = n.length - 1; o < i; )
                l = o + i >> 1,
                e[n[l]] < f ? o = l + 1 : i = l;
            f < e[n[o]] && (o > 0 && (t[s] = n[o - 1]),
            n[o] = s)
        }
    }
    for (o = n.length,
    i = n[o - 1]; o-- > 0; )
        n[o] = i,
        i = t[i];
    return n
}
function $i(e) {
    const t = e.subTree.component;
    if (t)
        return t.asyncDep && !t.asyncResolved ? t : $i(t)
}
function Kr(e) {
    if (e)
        for (let t = 0; t < e.length; t++)
            e[t].flags |= 8
}
const ra = Symbol.for("v-scx")
  , oa = () => it(ra);
function Gt(e, t, n) {
    return Ui(e, t, n)
}
function Ui(e, t, n=te) {
    const {immediate: s, deep: r, flush: o, once: i} = n
      , l = _e({}, n)
      , c = t && s || !t && o !== "post";
    let f;
    if (Sn) {
        if (o === "sync") {
            const y = oa();
            f = y.__watcherHandles || (y.__watcherHandles = [])
        } else if (!c) {
            const y = () => {}
            ;
            return y.stop = ot,
            y.resume = ot,
            y.pause = ot,
            y
        }
    }
    const a = Re;
    l.call = (y, _, C) => ct(y, a, _, C);
    let u = !1;
    o === "post" ? l.scheduler = y => {
        je(y, a && a.suspense)
    }
    : o !== "sync" && (u = !0,
    l.scheduler = (y, _) => {
        _ ? y() : br(y)
    }
    ),
    l.augmentJob = y => {
        t && (y.flags |= 4),
        u && (y.flags |= 2,
        a && (y.id = a.uid,
        y.i = a))
    }
    ;
    const p = wc(e, t, l);
    return Sn && (f ? f.push(p) : c && p()),
    p
}
function ia(e, t, n) {
    const s = this.proxy
      , r = ae(e) ? e.includes(".") ? Bi(s, e) : () => s[e] : e.bind(s, s);
    let o;
    V(t) ? o = t : (o = t.handler,
    n = t);
    const i = On(this)
      , l = Ui(r, o.bind(s), n);
    return i(),
    l
}
function Bi(e, t) {
    const n = t.split(".");
    return () => {
        let s = e;
        for (let r = 0; r < n.length && s; r++)
            s = s[n[r]];
        return s
    }
}
const la = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Rt(t)}Modifiers`] || e[`${Tt(t)}Modifiers`];
function ca(e, t, ...n) {
    if (e.isUnmounted)
        return;
    const s = e.vnode.props || te;
    let r = n;
    const o = t.startsWith("update:")
      , i = o && la(s, t.slice(7));
    i && (i.trim && (r = n.map(a => ae(a) ? a.trim() : a)),
    i.number && (r = n.map(Kn)));
    let l, c = s[l = Ss(t)] || s[l = Ss(Rt(t))];
    !c && o && (c = s[l = Ss(Tt(t))]),
    c && ct(c, e, 6, r);
    const f = s[l + "Once"];
    if (f) {
        if (!e.emitted)
            e.emitted = {};
        else if (e.emitted[l])
            return;
        e.emitted[l] = !0,
        ct(f, e, 6, r)
    }
}
function Hi(e, t, n=!1) {
    const s = t.emitsCache
      , r = s.get(e);
    if (r !== void 0)
        return r;
    const o = e.emits;
    let i = {}
      , l = !1;
    if (!V(e)) {
        const c = f => {
            const a = Hi(f, t, !0);
            a && (l = !0,
            _e(i, a))
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(c),
        e.extends && c(e.extends),
        e.mixins && e.mixins.forEach(c)
    }
    return !o && !l ? (oe(e) && s.set(e, null),
    null) : (B(o) ? o.forEach(c => i[c] = null) : _e(i, o),
    oe(e) && s.set(e, i),
    i)
}
function hs(e, t) {
    return !e || !ss(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""),
    Q(e, t[0].toLowerCase() + t.slice(1)) || Q(e, Tt(t)) || Q(e, t))
}
function zr(e) {
    const {type: t, vnode: n, proxy: s, withProxy: r, propsOptions: [o], slots: i, attrs: l, emit: c, render: f, renderCache: a, props: u, data: p, setupState: y, ctx: _, inheritAttrs: C} = e
      , A = Gn(e);
    let O, N;
    try {
        if (n.shapeFlag & 4) {
            const L = r || s
              , H = L;
            O = rt(f.call(H, L, a, u, y, p, _)),
            N = l
        } else {
            const L = t;
            O = rt(L.length > 1 ? L(u, {
                attrs: l,
                slots: i,
                emit: c
            }) : L(u, null)),
            N = t.props ? l : aa(l)
        }
    } catch (L) {
        gn.length = 0,
        us(L, e, 1),
        O = xe(Ct)
    }
    let M = O;
    if (N && C !== !1) {
        const L = Object.keys(N)
          , {shapeFlag: H} = M;
        L.length && H & 7 && (o && L.some(lr) && (N = ua(N, o)),
        M = Yt(M, N, !1, !0))
    }
    return n.dirs && (M = Yt(M, null, !1, !0),
    M.dirs = M.dirs ? M.dirs.concat(n.dirs) : n.dirs),
    n.transition && vr(M, n.transition),
    O = M,
    Gn(A),
    O
}
const aa = e => {
    let t;
    for (const n in e)
        (n === "class" || n === "style" || ss(n)) && ((t || (t = {}))[n] = e[n]);
    return t
}
  , ua = (e, t) => {
    const n = {};
    for (const s in e)
        (!lr(s) || !(s.slice(9)in t)) && (n[s] = e[s]);
    return n
}
;
function fa(e, t, n) {
    const {props: s, children: r, component: o} = e
      , {props: i, children: l, patchFlag: c} = t
      , f = o.emitsOptions;
    if (t.dirs || t.transition)
        return !0;
    if (n && c >= 0) {
        if (c & 1024)
            return !0;
        if (c & 16)
            return s ? Wr(s, i, f) : !!i;
        if (c & 8) {
            const a = t.dynamicProps;
            for (let u = 0; u < a.length; u++) {
                const p = a[u];
                if (i[p] !== s[p] && !hs(f, p))
                    return !0
            }
        }
    } else
        return (r || l) && (!l || !l.$stable) ? !0 : s === i ? !1 : s ? i ? Wr(s, i, f) : !0 : !!i;
    return !1
}
function Wr(e, t, n) {
    const s = Object.keys(t);
    if (s.length !== Object.keys(e).length)
        return !0;
    for (let r = 0; r < s.length; r++) {
        const o = s[r];
        if (t[o] !== e[o] && !hs(n, o))
            return !0
    }
    return !1
}
function da({vnode: e, parent: t}, n) {
    for (; t; ) {
        const s = t.subTree;
        if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el),
        s === e)
            (e = t.vnode).el = n,
            t = t.parent;
        else
            break
    }
}
const qi = e => e.__isSuspense;
function ha(e, t) {
    t && t.pendingBranch ? B(e) ? t.effects.push(...e) : t.effects.push(e) : Rc(e)
}
const ge = Symbol.for("v-fgt")
  , ps = Symbol.for("v-txt")
  , Ct = Symbol.for("v-cmt")
  , $n = Symbol.for("v-stc")
  , gn = [];
let $e = null;
function pe(e=!1) {
    gn.push($e = e ? null : [])
}
function pa() {
    gn.pop(),
    $e = gn[gn.length - 1] || null
}
let En = 1;
function Jr(e, t=!1) {
    En += e,
    e < 0 && $e && t && ($e.hasOnce = !0)
}
function Vi(e) {
    return e.dynamicChildren = En > 0 ? $e || Vt : null,
    pa(),
    En > 0 && $e && $e.push(e),
    e
}
function Ee(e, t, n, s, r, o) {
    return Vi($(e, t, n, s, r, o, !0))
}
function ma(e, t, n, s, r) {
    return Vi(xe(e, t, n, s, r, !0))
}
function Yn(e) {
    return e ? e.__v_isVNode === !0 : !1
}
function rn(e, t) {
    return e.type === t.type && e.key === t.key
}
const Ki = ({key: e}) => e ?? null
  , Un = ({ref: e, ref_key: t, ref_for: n}) => (typeof e == "number" && (e = "" + e),
e != null ? ae(e) || ve(e) || V(e) ? {
    i: ze,
    r: e,
    k: t,
    f: !!n
} : e : null);
function $(e, t=null, n=null, s=0, r=null, o=e === ge ? 0 : 1, i=!1, l=!1) {
    const c = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && Ki(t),
        ref: t && Un(t),
        scopeId: Si,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetStart: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: o,
        patchFlag: s,
        dynamicProps: r,
        dynamicChildren: null,
        appContext: null,
        ctx: ze
    };
    return l ? (Er(c, n),
    o & 128 && e.normalize(c)) : n && (c.shapeFlag |= ae(n) ? 8 : 16),
    En > 0 && !i && $e && (c.patchFlag > 0 || o & 6) && c.patchFlag !== 32 && $e.push(c),
    c
}
const xe = ga;
function ga(e, t=null, n=null, s=0, r=null, o=!1) {
    if ((!e || e === $c) && (e = Ct),
    Yn(e)) {
        const l = Yt(e, t, !0);
        return n && Er(l, n),
        En > 0 && !o && $e && (l.shapeFlag & 6 ? $e[$e.indexOf(e)] = l : $e.push(l)),
        l.patchFlag = -2,
        l
    }
    if (Pa(e) && (e = e.__vccOpts),
    t) {
        t = ya(t);
        let {class: l, style: c} = t;
        l && !ae(l) && (t.class = Dt(l)),
        oe(c) && (gr(c) && !B(c) && (c = _e({}, c)),
        t.style = ls(c))
    }
    const i = ae(e) ? 1 : qi(e) ? 128 : Tc(e) ? 64 : oe(e) ? 4 : V(e) ? 2 : 0;
    return $(e, t, n, s, r, i, o, !0)
}
function ya(e) {
    return e ? gr(e) || Ii(e) ? _e({}, e) : e : null
}
function Yt(e, t, n=!1, s=!1) {
    const {props: r, ref: o, patchFlag: i, children: l, transition: c} = e
      , f = t ? wa(r || {}, t) : r
      , a = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: f,
        key: f && Ki(f),
        ref: t && t.ref ? n && o ? B(o) ? o.concat(Un(t)) : [o, Un(t)] : Un(t) : o,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: l,
        target: e.target,
        targetStart: e.targetStart,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== ge ? i === -1 ? 16 : i | 16 : i,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: c,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && Yt(e.ssContent),
        ssFallback: e.ssFallback && Yt(e.ssFallback),
        placeholder: e.placeholder,
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    };
    return c && s && vr(a, c.clone(a)),
    a
}
function ba(e=" ", t=0) {
    return xe(ps, null, e, t)
}
function va(e, t) {
    const n = xe($n, null, e);
    return n.staticCount = t,
    n
}
function _a(e="", t=!1) {
    return t ? (pe(),
    ma(Ct, null, e)) : xe(Ct, null, e)
}
function rt(e) {
    return e == null || typeof e == "boolean" ? xe(Ct) : B(e) ? xe(ge, null, e.slice()) : Yn(e) ? wt(e) : xe(ps, null, String(e))
}
function wt(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : Yt(e)
}
function Er(e, t) {
    let n = 0;
    const {shapeFlag: s} = e;
    if (t == null)
        t = null;
    else if (B(t))
        n = 16;
    else if (typeof t == "object")
        if (s & 65) {
            const r = t.default;
            r && (r._c && (r._d = !1),
            Er(e, r()),
            r._c && (r._d = !0));
            return
        } else {
            n = 32;
            const r = t._;
            !r && !Ii(t) ? t._ctx = ze : r === 3 && ze && (ze.slots._ === 1 ? t._ = 1 : (t._ = 2,
            e.patchFlag |= 1024))
        }
    else
        V(t) ? (t = {
            default: t,
            _ctx: ze
        },
        n = 32) : (t = String(t),
        s & 64 ? (n = 16,
        t = [ba(t)]) : n = 8);
    e.children = t,
    e.shapeFlag |= n
}
function wa(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const s = e[n];
        for (const r in s)
            if (r === "class")
                t.class !== s.class && (t.class = Dt([t.class, s.class]));
            else if (r === "style")
                t.style = ls([t.style, s.style]);
            else if (ss(r)) {
                const o = t[r]
                  , i = s[r];
                i && o !== i && !(B(o) && o.includes(i)) && (t[r] = o ? [].concat(o, i) : i)
            } else
                r !== "" && (t[r] = s[r])
    }
    return t
}
function tt(e, t, n, s=null) {
    ct(e, t, 7, [n, s])
}
const Ea = Oi();
let Sa = 0;
function Ra(e, t, n) {
    const s = e.type
      , r = (t ? t.appContext : e.appContext) || Ea
      , o = {
        uid: Sa++,
        vnode: e,
        type: s,
        parent: t,
        appContext: r,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        job: null,
        scope: new Jl(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: t ? t.provides : Object.create(r.provides),
        ids: t ? t.ids : ["", 0, 0],
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: Fi(s, r),
        emitsOptions: Hi(s, r),
        emit: null,
        emitted: null,
        propsDefaults: te,
        inheritAttrs: s.inheritAttrs,
        ctx: te,
        data: te,
        props: te,
        attrs: te,
        slots: te,
        refs: te,
        setupState: te,
        setupContext: null,
        suspense: n,
        suspenseId: n ? n.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    return o.ctx = {
        _: o
    },
    o.root = t ? t.root : o,
    o.emit = ca.bind(null, o),
    e.ce && e.ce(o),
    o
}
let Re = null;
const xa = () => Re || ze;
let Qn, Gs;
{
    const e = is()
      , t = (n, s) => {
        let r;
        return (r = e[n]) || (r = e[n] = []),
        r.push(s),
        o => {
            r.length > 1 ? r.forEach(i => i(o)) : r[0](o)
        }
    }
    ;
    Qn = t("__VUE_INSTANCE_SETTERS__", n => Re = n),
    Gs = t("__VUE_SSR_SETTERS__", n => Sn = n)
}
const On = e => {
    const t = Re;
    return Qn(e),
    e.scope.on(),
    () => {
        e.scope.off(),
        Qn(t)
    }
}
  , Gr = () => {
    Re && Re.scope.off(),
    Qn(null)
}
;
function zi(e) {
    return e.vnode.shapeFlag & 4
}
let Sn = !1;
function Ca(e, t=!1, n=!1) {
    t && Gs(t);
    const {props: s, children: r} = e.vnode
      , o = zi(e);
    Jc(e, s, o, t),
    Qc(e, r, n || t);
    const i = o ? Ta(e, t) : void 0;
    return t && Gs(!1),
    i
}
function Ta(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null),
    e.proxy = new Proxy(e.ctx,Uc);
    const {setup: s} = n;
    if (s) {
        mt();
        const r = e.setupContext = s.length > 1 ? Oa(e) : null
          , o = On(e)
          , i = An(s, e, 0, [e.props, r])
          , l = Jo(i);
        if (gt(),
        o(),
        (l || e.sp) && !hn(e) && Ri(e),
        l) {
            if (i.then(Gr, Gr),
            t)
                return i.then(c => {
                    Xr(e, c)
                }
                ).catch(c => {
                    us(c, e, 0)
                }
                );
            e.asyncDep = i
        } else
            Xr(e, i)
    } else
        Wi(e)
}
function Xr(e, t, n) {
    V(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : oe(t) && (e.setupState = bi(t)),
    Wi(e)
}
function Wi(e, t, n) {
    const s = e.type;
    e.render || (e.render = s.render || ot);
    {
        const r = On(e);
        mt();
        try {
            Bc(e)
        } finally {
            gt(),
            r()
        }
    }
}
const Aa = {
    get(e, t) {
        return me(e, "get", ""),
        e[t]
    }
};
function Oa(e) {
    const t = n => {
        e.exposed = n || {}
    }
    ;
    return {
        attrs: new Proxy(e.attrs,Aa),
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}
function ms(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(bi(pc(e.exposed)),{
        get(t, n) {
            if (n in t)
                return t[n];
            if (n in mn)
                return mn[n](e)
        },
        has(t, n) {
            return n in t || n in mn
        }
    })) : e.proxy
}
function Pa(e) {
    return V(e) && "__vccOpts"in e
}
const ye = (e, t) => vc(e, t, Sn);
function Ji(e, t, n) {
    const s = arguments.length;
    return s === 2 ? oe(t) && !B(t) ? Yn(t) ? xe(e, null, [t]) : xe(e, t) : xe(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Yn(n) && (n = [n]),
    xe(e, t, n))
}
const Na = "3.5.18";
/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Xs;
const Yr = typeof window < "u" && window.trustedTypes;
if (Yr)
    try {
        Xs = Yr.createPolicy("vue", {
            createHTML: e => e
        })
    } catch {}
const Gi = Xs ? e => Xs.createHTML(e) : e => e
  , Ia = "http://www.w3.org/2000/svg"
  , Da = "http://www.w3.org/1998/Math/MathML"
  , dt = typeof document < "u" ? document : null
  , Qr = dt && dt.createElement("template")
  , Fa = {
    insert: (e, t, n) => {
        t.insertBefore(e, n || null)
    }
    ,
    remove: e => {
        const t = e.parentNode;
        t && t.removeChild(e)
    }
    ,
    createElement: (e, t, n, s) => {
        const r = t === "svg" ? dt.createElementNS(Ia, e) : t === "mathml" ? dt.createElementNS(Da, e) : n ? dt.createElement(e, {
            is: n
        }) : dt.createElement(e);
        return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple),
        r
    }
    ,
    createText: e => dt.createTextNode(e),
    createComment: e => dt.createComment(e),
    setText: (e, t) => {
        e.nodeValue = t
    }
    ,
    setElementText: (e, t) => {
        e.textContent = t
    }
    ,
    parentNode: e => e.parentNode,
    nextSibling: e => e.nextSibling,
    querySelector: e => dt.querySelector(e),
    setScopeId(e, t) {
        e.setAttribute(t, "")
    },
    insertStaticContent(e, t, n, s, r, o) {
        const i = n ? n.previousSibling : t.lastChild;
        if (r && (r === o || r.nextSibling))
            for (; t.insertBefore(r.cloneNode(!0), n),
            !(r === o || !(r = r.nextSibling)); )
                ;
        else {
            Qr.innerHTML = Gi(s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e);
            const l = Qr.content;
            if (s === "svg" || s === "mathml") {
                const c = l.firstChild;
                for (; c.firstChild; )
                    l.appendChild(c.firstChild);
                l.removeChild(c)
            }
            t.insertBefore(l, n)
        }
        return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    }
}
  , Ma = Symbol("_vtc");
function La(e, t, n) {
    const s = e[Ma];
    s && (t = (t ? [t, ...s] : [...s]).join(" ")),
    t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}
const Zr = Symbol("_vod")
  , ja = Symbol("_vsh")
  , ka = Symbol("")
  , $a = /(^|;)\s*display\s*:/;
function Ua(e, t, n) {
    const s = e.style
      , r = ae(n);
    let o = !1;
    if (n && !r) {
        if (t)
            if (ae(t))
                for (const i of t.split(";")) {
                    const l = i.slice(0, i.indexOf(":")).trim();
                    n[l] == null && Bn(s, l, "")
                }
            else
                for (const i in t)
                    n[i] == null && Bn(s, i, "");
        for (const i in n)
            i === "display" && (o = !0),
            Bn(s, i, n[i])
    } else if (r) {
        if (t !== n) {
            const i = s[ka];
            i && (n += ";" + i),
            s.cssText = n,
            o = $a.test(n)
        }
    } else
        t && e.removeAttribute("style");
    Zr in e && (e[Zr] = o ? s.display : "",
    e[ja] && (s.display = "none"))
}
const eo = /\s*!important$/;
function Bn(e, t, n) {
    if (B(n))
        n.forEach(s => Bn(e, t, s));
    else if (n == null && (n = ""),
    t.startsWith("--"))
        e.setProperty(t, n);
    else {
        const s = Ba(e, t);
        eo.test(n) ? e.setProperty(Tt(s), n.replace(eo, ""), "important") : e[s] = n
    }
}
const to = ["Webkit", "Moz", "ms"]
  , Ps = {};
function Ba(e, t) {
    const n = Ps[t];
    if (n)
        return n;
    let s = Rt(t);
    if (s !== "filter" && s in e)
        return Ps[t] = s;
    s = Yo(s);
    for (let r = 0; r < to.length; r++) {
        const o = to[r] + s;
        if (o in e)
            return Ps[t] = o
    }
    return t
}
const no = "http://www.w3.org/1999/xlink";
function so(e, t, n, s, r, o=Kl(t)) {
    s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(no, t.slice(6, t.length)) : e.setAttributeNS(no, t, n) : n == null || o && !Qo(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : lt(n) ? String(n) : n)
}
function ro(e, t, n, s, r) {
    if (t === "innerHTML" || t === "textContent") {
        n != null && (e[t] = t === "innerHTML" ? Gi(n) : n);
        return
    }
    const o = e.tagName;
    if (t === "value" && o !== "PROGRESS" && !o.includes("-")) {
        const l = o === "OPTION" ? e.getAttribute("value") || "" : e.value
          , c = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
        (l !== c || !("_value"in e)) && (e.value = c),
        n == null && e.removeAttribute(t),
        e._value = n;
        return
    }
    let i = !1;
    if (n === "" || n == null) {
        const l = typeof e[t];
        l === "boolean" ? n = Qo(n) : n == null && l === "string" ? (n = "",
        i = !0) : l === "number" && (n = 0,
        i = !0)
    }
    try {
        e[t] = n
    } catch {}
    i && e.removeAttribute(r || t)
}
function Nt(e, t, n, s) {
    e.addEventListener(t, n, s)
}
function Ha(e, t, n, s) {
    e.removeEventListener(t, n, s)
}
const oo = Symbol("_vei");
function qa(e, t, n, s, r=null) {
    const o = e[oo] || (e[oo] = {})
      , i = o[t];
    if (s && i)
        i.value = s;
    else {
        const [l,c] = Va(t);
        if (s) {
            const f = o[t] = Wa(s, r);
            Nt(e, l, f, c)
        } else
            i && (Ha(e, l, i, c),
            o[t] = void 0)
    }
}
const io = /(?:Once|Passive|Capture)$/;
function Va(e) {
    let t;
    if (io.test(e)) {
        t = {};
        let s;
        for (; s = e.match(io); )
            e = e.slice(0, e.length - s[0].length),
            t[s[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : Tt(e.slice(2)), t]
}
let Ns = 0;
const Ka = Promise.resolve()
  , za = () => Ns || (Ka.then( () => Ns = 0),
Ns = Date.now());
function Wa(e, t) {
    const n = s => {
        if (!s._vts)
            s._vts = Date.now();
        else if (s._vts <= n.attached)
            return;
        ct(Ja(s, n.value), t, 5, [s])
    }
    ;
    return n.value = e,
    n.attached = za(),
    n
}
function Ja(e, t) {
    if (B(t)) {
        const n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            n.call(e),
            e._stopped = !0
        }
        ,
        t.map(s => r => !r._stopped && s && s(r))
    } else
        return t
}
const lo = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123
  , Ga = (e, t, n, s, r, o) => {
    const i = r === "svg";
    t === "class" ? La(e, s, i) : t === "style" ? Ua(e, n, s) : ss(t) ? lr(t) || qa(e, t, n, s, o) : (t[0] === "." ? (t = t.slice(1),
    !0) : t[0] === "^" ? (t = t.slice(1),
    !1) : Xa(e, t, s, i)) ? (ro(e, t, s),
    !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && so(e, t, s, i, o, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !ae(s)) ? ro(e, Rt(t), s, o, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s),
    so(e, t, s, i))
}
;
function Xa(e, t, n, s) {
    if (s)
        return !!(t === "innerHTML" || t === "textContent" || t in e && lo(t) && V(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
        return !1;
    if (t === "width" || t === "height") {
        const r = e.tagName;
        if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
            return !1
    }
    return lo(t) && ae(n) ? !1 : t in e
}
const Zn = e => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return B(t) ? n => jn(t, n) : t
}
;
function Ya(e) {
    e.target.composing = !0
}
function co(e) {
    const t = e.target;
    t.composing && (t.composing = !1,
    t.dispatchEvent(new Event("input")))
}
const Xt = Symbol("_assign")
  , Qa = {
    created(e, {modifiers: {lazy: t, trim: n, number: s}}, r) {
        e[Xt] = Zn(r);
        const o = s || r.props && r.props.type === "number";
        Nt(e, t ? "change" : "input", i => {
            if (i.target.composing)
                return;
            let l = e.value;
            n && (l = l.trim()),
            o && (l = Kn(l)),
            e[Xt](l)
        }
        ),
        n && Nt(e, "change", () => {
            e.value = e.value.trim()
        }
        ),
        t || (Nt(e, "compositionstart", Ya),
        Nt(e, "compositionend", co),
        Nt(e, "change", co))
    },
    mounted(e, {value: t}) {
        e.value = t ?? ""
    },
    beforeUpdate(e, {value: t, oldValue: n, modifiers: {lazy: s, trim: r, number: o}}, i) {
        if (e[Xt] = Zn(i),
        e.composing)
            return;
        const l = (o || e.type === "number") && !/^0\d/.test(e.value) ? Kn(e.value) : e.value
          , c = t ?? "";
        l !== c && (document.activeElement === e && e.type !== "range" && (s && t === n || r && e.value.trim() === c) || (e.value = c))
    }
}
  , Za = {
    deep: !0,
    created(e, {value: t, modifiers: {number: n}}, s) {
        const r = rs(t);
        Nt(e, "change", () => {
            const o = Array.prototype.filter.call(e.options, i => i.selected).map(i => n ? Kn(es(i)) : es(i));
            e[Xt](e.multiple ? r ? new Set(o) : o : o[0]),
            e._assigning = !0,
            yr( () => {
                e._assigning = !1
            }
            )
        }
        ),
        e[Xt] = Zn(s)
    },
    mounted(e, {value: t}) {
        ao(e, t)
    },
    beforeUpdate(e, t, n) {
        e[Xt] = Zn(n)
    },
    updated(e, {value: t}) {
        e._assigning || ao(e, t)
    }
};
function ao(e, t) {
    const n = e.multiple
      , s = B(t);
    if (!(n && !s && !rs(t))) {
        for (let r = 0, o = e.options.length; r < o; r++) {
            const i = e.options[r]
              , l = es(i);
            if (n)
                if (s) {
                    const c = typeof l;
                    c === "string" || c === "number" ? i.selected = t.some(f => String(f) === String(l)) : i.selected = Wl(t, l) > -1
                } else
                    i.selected = t.has(l);
            else if (cs(es(i), t)) {
                e.selectedIndex !== r && (e.selectedIndex = r);
                return
            }
        }
        !n && e.selectedIndex !== -1 && (e.selectedIndex = -1)
    }
}
function es(e) {
    return "_value"in e ? e._value : e.value
}
const eu = ["ctrl", "shift", "alt", "meta"]
  , tu = {
    stop: e => e.stopPropagation(),
    prevent: e => e.preventDefault(),
    self: e => e.target !== e.currentTarget,
    ctrl: e => !e.ctrlKey,
    shift: e => !e.shiftKey,
    alt: e => !e.altKey,
    meta: e => !e.metaKey,
    left: e => "button"in e && e.button !== 0,
    middle: e => "button"in e && e.button !== 1,
    right: e => "button"in e && e.button !== 2,
    exact: (e, t) => eu.some(n => e[`${n}Key`] && !t.includes(n))
}
  , Bt = (e, t) => {
    const n = e._withMods || (e._withMods = {})
      , s = t.join(".");
    return n[s] || (n[s] = (r, ...o) => {
        for (let i = 0; i < t.length; i++) {
            const l = tu[t[i]];
            if (l && l(r, t))
                return
        }
        return e(r, ...o)
    }
    )
}
  , nu = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
}
  , su = (e, t) => {
    const n = e._withKeys || (e._withKeys = {})
      , s = t.join(".");
    return n[s] || (n[s] = r => {
        if (!("key"in r))
            return;
        const o = Tt(r.key);
        if (t.some(i => i === o || nu[i] === o))
            return e(r)
    }
    )
}
  , ru = _e({
    patchProp: Ga
}, Fa);
let uo;
function ou() {
    return uo || (uo = ea(ru))
}
const iu = (...e) => {
    const t = ou().createApp(...e)
      , {mount: n} = t;
    return t.mount = s => {
        const r = cu(s);
        if (!r)
            return;
        const o = t._component;
        !V(o) && !o.render && !o.template && (o.template = r.innerHTML),
        r.nodeType === 1 && (r.textContent = "");
        const i = n(r, !1, lu(r));
        return r instanceof Element && (r.removeAttribute("v-cloak"),
        r.setAttribute("data-v-app", "")),
        i
    }
    ,
    t
}
;
function lu(e) {
    if (e instanceof SVGElement)
        return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement)
        return "mathml"
}
function cu(e) {
    return ae(e) ? document.querySelector(e) : e
}
/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */
const Ht = typeof document < "u";
function Xi(e) {
    return typeof e == "object" || "displayName"in e || "props"in e || "__vccOpts"in e
}
function au(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && Xi(e.default)
}
const X = Object.assign;
function Is(e, t) {
    const n = {};
    for (const s in t) {
        const r = t[s];
        n[s] = Xe(r) ? r.map(e) : e(r)
    }
    return n
}
const yn = () => {}
  , Xe = Array.isArray
  , Yi = /#/g
  , uu = /&/g
  , fu = /\//g
  , du = /=/g
  , hu = /\?/g
  , Qi = /\+/g
  , pu = /%5B/g
  , mu = /%5D/g
  , Zi = /%5E/g
  , gu = /%60/g
  , el = /%7B/g
  , yu = /%7C/g
  , tl = /%7D/g
  , bu = /%20/g;
function Sr(e) {
    return encodeURI("" + e).replace(yu, "|").replace(pu, "[").replace(mu, "]")
}
function vu(e) {
    return Sr(e).replace(el, "{").replace(tl, "}").replace(Zi, "^")
}
function Ys(e) {
    return Sr(e).replace(Qi, "%2B").replace(bu, "+").replace(Yi, "%23").replace(uu, "%26").replace(gu, "`").replace(el, "{").replace(tl, "}").replace(Zi, "^")
}
function _u(e) {
    return Ys(e).replace(du, "%3D")
}
function wu(e) {
    return Sr(e).replace(Yi, "%23").replace(hu, "%3F")
}
function Eu(e) {
    return e == null ? "" : wu(e).replace(fu, "%2F")
}
function Rn(e) {
    try {
        return decodeURIComponent("" + e)
    } catch {}
    return "" + e
}
const Su = /\/$/
  , Ru = e => e.replace(Su, "");
function Ds(e, t, n="/") {
    let s, r = {}, o = "", i = "";
    const l = t.indexOf("#");
    let c = t.indexOf("?");
    return l < c && l >= 0 && (c = -1),
    c > -1 && (s = t.slice(0, c),
    o = t.slice(c + 1, l > -1 ? l : t.length),
    r = e(o)),
    l > -1 && (s = s || t.slice(0, l),
    i = t.slice(l, t.length)),
    s = Au(s ?? t, n),
    {
        fullPath: s + (o && "?") + o + i,
        path: s,
        query: r,
        hash: Rn(i)
    }
}
function xu(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "")
}
function fo(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}
function Cu(e, t, n) {
    const s = t.matched.length - 1
      , r = n.matched.length - 1;
    return s > -1 && s === r && Qt(t.matched[s], n.matched[r]) && nl(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}
function Qt(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}
function nl(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length)
        return !1;
    for (const n in e)
        if (!Tu(e[n], t[n]))
            return !1;
    return !0
}
function Tu(e, t) {
    return Xe(e) ? ho(e, t) : Xe(t) ? ho(t, e) : e === t
}
function ho(e, t) {
    return Xe(t) ? e.length === t.length && e.every( (n, s) => n === t[s]) : e.length === 1 && e[0] === t
}
function Au(e, t) {
    if (e.startsWith("/"))
        return e;
    if (!e)
        return t;
    const n = t.split("/")
      , s = e.split("/")
      , r = s[s.length - 1];
    (r === ".." || r === ".") && s.push("");
    let o = n.length - 1, i, l;
    for (i = 0; i < s.length; i++)
        if (l = s[i],
        l !== ".")
            if (l === "..")
                o > 1 && o--;
            else
                break;
    return n.slice(0, o).join("/") + "/" + s.slice(i).join("/")
}
const vt = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
};
var xn;
(function(e) {
    e.pop = "pop",
    e.push = "push"
}
)(xn || (xn = {}));
var bn;
(function(e) {
    e.back = "back",
    e.forward = "forward",
    e.unknown = ""
}
)(bn || (bn = {}));
function Ou(e) {
    if (!e)
        if (Ht) {
            const t = document.querySelector("base");
            e = t && t.getAttribute("href") || "/",
            e = e.replace(/^\w+:\/\/[^\/]+/, "")
        } else
            e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e),
    Ru(e)
}
const Pu = /^[^#]+#/;
function Nu(e, t) {
    return e.replace(Pu, "#") + t
}
function Iu(e, t) {
    const n = document.documentElement.getBoundingClientRect()
      , s = e.getBoundingClientRect();
    return {
        behavior: t.behavior,
        left: s.left - n.left - (t.left || 0),
        top: s.top - n.top - (t.top || 0)
    }
}
const gs = () => ({
    left: window.scrollX,
    top: window.scrollY
});
function Du(e) {
    let t;
    if ("el"in e) {
        const n = e.el
          , s = typeof n == "string" && n.startsWith("#")
          , r = typeof n == "string" ? s ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
        if (!r)
            return;
        t = Iu(r, e)
    } else
        t = e;
    "scrollBehavior"in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY)
}
function po(e, t) {
    return (history.state ? history.state.position - t : -1) + e
}
const Qs = new Map;
function Fu(e, t) {
    Qs.set(e, t)
}
function Mu(e) {
    const t = Qs.get(e);
    return Qs.delete(e),
    t
}
let Lu = () => location.protocol + "//" + location.host;
function sl(e, t) {
    const {pathname: n, search: s, hash: r} = t
      , o = e.indexOf("#");
    if (o > -1) {
        let l = r.includes(e.slice(o)) ? e.slice(o).length : 1
          , c = r.slice(l);
        return c[0] !== "/" && (c = "/" + c),
        fo(c, "")
    }
    return fo(n, e) + s + r
}
function ju(e, t, n, s) {
    let r = []
      , o = []
      , i = null;
    const l = ({state: p}) => {
        const y = sl(e, location)
          , _ = n.value
          , C = t.value;
        let A = 0;
        if (p) {
            if (n.value = y,
            t.value = p,
            i && i === _) {
                i = null;
                return
            }
            A = C ? p.position - C.position : 0
        } else
            s(y);
        r.forEach(O => {
            O(n.value, _, {
                delta: A,
                type: xn.pop,
                direction: A ? A > 0 ? bn.forward : bn.back : bn.unknown
            })
        }
        )
    }
    ;
    function c() {
        i = n.value
    }
    function f(p) {
        r.push(p);
        const y = () => {
            const _ = r.indexOf(p);
            _ > -1 && r.splice(_, 1)
        }
        ;
        return o.push(y),
        y
    }
    function a() {
        const {history: p} = window;
        p.state && p.replaceState(X({}, p.state, {
            scroll: gs()
        }), "")
    }
    function u() {
        for (const p of o)
            p();
        o = [],
        window.removeEventListener("popstate", l),
        window.removeEventListener("beforeunload", a)
    }
    return window.addEventListener("popstate", l),
    window.addEventListener("beforeunload", a, {
        passive: !0
    }),
    {
        pauseListeners: c,
        listen: f,
        destroy: u
    }
}
function mo(e, t, n, s=!1, r=!1) {
    return {
        back: e,
        current: t,
        forward: n,
        replaced: s,
        position: window.history.length,
        scroll: r ? gs() : null
    }
}
function ku(e) {
    const {history: t, location: n} = window
      , s = {
        value: sl(e, n)
    }
      , r = {
        value: t.state
    };
    r.value || o(s.value, {
        back: null,
        current: s.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
    }, !0);
    function o(c, f, a) {
        const u = e.indexOf("#")
          , p = u > -1 ? (n.host && document.querySelector("base") ? e : e.slice(u)) + c : Lu() + e + c;
        try {
            t[a ? "replaceState" : "pushState"](f, "", p),
            r.value = f
        } catch (y) {
            console.error(y),
            n[a ? "replace" : "assign"](p)
        }
    }
    function i(c, f) {
        const a = X({}, t.state, mo(r.value.back, c, r.value.forward, !0), f, {
            position: r.value.position
        });
        o(c, a, !0),
        s.value = c
    }
    function l(c, f) {
        const a = X({}, r.value, t.state, {
            forward: c,
            scroll: gs()
        });
        o(a.current, a, !0);
        const u = X({}, mo(s.value, c, null), {
            position: a.position + 1
        }, f);
        o(c, u, !1),
        s.value = c
    }
    return {
        location: s,
        state: r,
        push: l,
        replace: i
    }
}
function $u(e) {
    e = Ou(e);
    const t = ku(e)
      , n = ju(e, t.state, t.location, t.replace);
    function s(o, i=!0) {
        i || n.pauseListeners(),
        history.go(o)
    }
    const r = X({
        location: "",
        base: e,
        go: s,
        createHref: Nu.bind(null, e)
    }, t, n);
    return Object.defineProperty(r, "location", {
        enumerable: !0,
        get: () => t.location.value
    }),
    Object.defineProperty(r, "state", {
        enumerable: !0,
        get: () => t.state.value
    }),
    r
}
function Uu(e) {
    return typeof e == "string" || e && typeof e == "object"
}
function rl(e) {
    return typeof e == "string" || typeof e == "symbol"
}
const ol = Symbol("");
var go;
(function(e) {
    e[e.aborted = 4] = "aborted",
    e[e.cancelled = 8] = "cancelled",
    e[e.duplicated = 16] = "duplicated"
}
)(go || (go = {}));
function Zt(e, t) {
    return X(new Error, {
        type: e,
        [ol]: !0
    }, t)
}
function ft(e, t) {
    return e instanceof Error && ol in e && (t == null || !!(e.type & t))
}
const yo = "[^/]+?"
  , Bu = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0
}
  , Hu = /[.+*?^${}()[\]/\\]/g;
function qu(e, t) {
    const n = X({}, Bu, t)
      , s = [];
    let r = n.start ? "^" : "";
    const o = [];
    for (const f of e) {
        const a = f.length ? [] : [90];
        n.strict && !f.length && (r += "/");
        for (let u = 0; u < f.length; u++) {
            const p = f[u];
            let y = 40 + (n.sensitive ? .25 : 0);
            if (p.type === 0)
                u || (r += "/"),
                r += p.value.replace(Hu, "\\$&"),
                y += 40;
            else if (p.type === 1) {
                const {value: _, repeatable: C, optional: A, regexp: O} = p;
                o.push({
                    name: _,
                    repeatable: C,
                    optional: A
                });
                const N = O || yo;
                if (N !== yo) {
                    y += 10;
                    try {
                        new RegExp(`(${N})`)
                    } catch (L) {
                        throw new Error(`Invalid custom RegExp for param "${_}" (${N}): ` + L.message)
                    }
                }
                let M = C ? `((?:${N})(?:/(?:${N}))*)` : `(${N})`;
                u || (M = A && f.length < 2 ? `(?:/${M})` : "/" + M),
                A && (M += "?"),
                r += M,
                y += 20,
                A && (y += -8),
                C && (y += -20),
                N === ".*" && (y += -50)
            }
            a.push(y)
        }
        s.push(a)
    }
    if (n.strict && n.end) {
        const f = s.length - 1;
        s[f][s[f].length - 1] += .7000000000000001
    }
    n.strict || (r += "/?"),
    n.end ? r += "$" : n.strict && !r.endsWith("/") && (r += "(?:/|$)");
    const i = new RegExp(r,n.sensitive ? "" : "i");
    function l(f) {
        const a = f.match(i)
          , u = {};
        if (!a)
            return null;
        for (let p = 1; p < a.length; p++) {
            const y = a[p] || ""
              , _ = o[p - 1];
            u[_.name] = y && _.repeatable ? y.split("/") : y
        }
        return u
    }
    function c(f) {
        let a = ""
          , u = !1;
        for (const p of e) {
            (!u || !a.endsWith("/")) && (a += "/"),
            u = !1;
            for (const y of p)
                if (y.type === 0)
                    a += y.value;
                else if (y.type === 1) {
                    const {value: _, repeatable: C, optional: A} = y
                      , O = _ in f ? f[_] : "";
                    if (Xe(O) && !C)
                        throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);
                    const N = Xe(O) ? O.join("/") : O;
                    if (!N)
                        if (A)
                            p.length < 2 && (a.endsWith("/") ? a = a.slice(0, -1) : u = !0);
                        else
                            throw new Error(`Missing required param "${_}"`);
                    a += N
                }
        }
        return a || "/"
    }
    return {
        re: i,
        score: s,
        keys: o,
        parse: l,
        stringify: c
    }
}
function Vu(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length; ) {
        const s = t[n] - e[n];
        if (s)
            return s;
        n++
    }
    return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0
}
function il(e, t) {
    let n = 0;
    const s = e.score
      , r = t.score;
    for (; n < s.length && n < r.length; ) {
        const o = Vu(s[n], r[n]);
        if (o)
            return o;
        n++
    }
    if (Math.abs(r.length - s.length) === 1) {
        if (bo(s))
            return 1;
        if (bo(r))
            return -1
    }
    return r.length - s.length
}
function bo(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0
}
const Ku = {
    type: 0,
    value: ""
}
  , zu = /[a-zA-Z0-9_]/;
function Wu(e) {
    if (!e)
        return [[]];
    if (e === "/")
        return [[Ku]];
    if (!e.startsWith("/"))
        throw new Error(`Invalid path "${e}"`);
    function t(y) {
        throw new Error(`ERR (${n})/"${f}": ${y}`)
    }
    let n = 0
      , s = n;
    const r = [];
    let o;
    function i() {
        o && r.push(o),
        o = []
    }
    let l = 0, c, f = "", a = "";
    function u() {
        f && (n === 0 ? o.push({
            type: 0,
            value: f
        }) : n === 1 || n === 2 || n === 3 ? (o.length > 1 && (c === "*" || c === "+") && t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),
        o.push({
            type: 1,
            value: f,
            regexp: a,
            repeatable: c === "*" || c === "+",
            optional: c === "*" || c === "?"
        })) : t("Invalid state to consume buffer"),
        f = "")
    }
    function p() {
        f += c
    }
    for (; l < e.length; ) {
        if (c = e[l++],
        c === "\\" && n !== 2) {
            s = n,
            n = 4;
            continue
        }
        switch (n) {
        case 0:
            c === "/" ? (f && u(),
            i()) : c === ":" ? (u(),
            n = 1) : p();
            break;
        case 4:
            p(),
            n = s;
            break;
        case 1:
            c === "(" ? n = 2 : zu.test(c) ? p() : (u(),
            n = 0,
            c !== "*" && c !== "?" && c !== "+" && l--);
            break;
        case 2:
            c === ")" ? a[a.length - 1] == "\\" ? a = a.slice(0, -1) + c : n = 3 : a += c;
            break;
        case 3:
            u(),
            n = 0,
            c !== "*" && c !== "?" && c !== "+" && l--,
            a = "";
            break;
        default:
            t("Unknown state");
            break
        }
    }
    return n === 2 && t(`Unfinished custom RegExp for param "${f}"`),
    u(),
    i(),
    r
}
function Ju(e, t, n) {
    const s = qu(Wu(e.path), n)
      , r = X(s, {
        record: e,
        parent: t,
        children: [],
        alias: []
    });
    return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r),
    r
}
function Gu(e, t) {
    const n = []
      , s = new Map;
    t = Eo({
        strict: !1,
        end: !0,
        sensitive: !1
    }, t);
    function r(u) {
        return s.get(u)
    }
    function o(u, p, y) {
        const _ = !y
          , C = _o(u);
        C.aliasOf = y && y.record;
        const A = Eo(t, u)
          , O = [C];
        if ("alias"in u) {
            const L = typeof u.alias == "string" ? [u.alias] : u.alias;
            for (const H of L)
                O.push(_o(X({}, C, {
                    components: y ? y.record.components : C.components,
                    path: H,
                    aliasOf: y ? y.record : C
                })))
        }
        let N, M;
        for (const L of O) {
            const {path: H} = L;
            if (p && H[0] !== "/") {
                const Z = p.record.path
                  , W = Z[Z.length - 1] === "/" ? "" : "/";
                L.path = p.record.path + (H && W + H)
            }
            if (N = Ju(L, p, A),
            y ? y.alias.push(N) : (M = M || N,
            M !== N && M.alias.push(N),
            _ && u.name && !wo(N) && i(u.name)),
            ll(N) && c(N),
            C.children) {
                const Z = C.children;
                for (let W = 0; W < Z.length; W++)
                    o(Z[W], N, y && y.children[W])
            }
            y = y || N
        }
        return M ? () => {
            i(M)
        }
        : yn
    }
    function i(u) {
        if (rl(u)) {
            const p = s.get(u);
            p && (s.delete(u),
            n.splice(n.indexOf(p), 1),
            p.children.forEach(i),
            p.alias.forEach(i))
        } else {
            const p = n.indexOf(u);
            p > -1 && (n.splice(p, 1),
            u.record.name && s.delete(u.record.name),
            u.children.forEach(i),
            u.alias.forEach(i))
        }
    }
    function l() {
        return n
    }
    function c(u) {
        const p = Qu(u, n);
        n.splice(p, 0, u),
        u.record.name && !wo(u) && s.set(u.record.name, u)
    }
    function f(u, p) {
        let y, _ = {}, C, A;
        if ("name"in u && u.name) {
            if (y = s.get(u.name),
            !y)
                throw Zt(1, {
                    location: u
                });
            A = y.record.name,
            _ = X(vo(p.params, y.keys.filter(M => !M.optional).concat(y.parent ? y.parent.keys.filter(M => M.optional) : []).map(M => M.name)), u.params && vo(u.params, y.keys.map(M => M.name))),
            C = y.stringify(_)
        } else if (u.path != null)
            C = u.path,
            y = n.find(M => M.re.test(C)),
            y && (_ = y.parse(C),
            A = y.record.name);
        else {
            if (y = p.name ? s.get(p.name) : n.find(M => M.re.test(p.path)),
            !y)
                throw Zt(1, {
                    location: u,
                    currentLocation: p
                });
            A = y.record.name,
            _ = X({}, p.params, u.params),
            C = y.stringify(_)
        }
        const O = [];
        let N = y;
        for (; N; )
            O.unshift(N.record),
            N = N.parent;
        return {
            name: A,
            path: C,
            params: _,
            matched: O,
            meta: Yu(O)
        }
    }
    e.forEach(u => o(u));
    function a() {
        n.length = 0,
        s.clear()
    }
    return {
        addRoute: o,
        resolve: f,
        removeRoute: i,
        clearRoutes: a,
        getRoutes: l,
        getRecordMatcher: r
    }
}
function vo(e, t) {
    const n = {};
    for (const s of t)
        s in e && (n[s] = e[s]);
    return n
}
function _o(e) {
    const t = {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: e.aliasOf,
        beforeEnter: e.beforeEnter,
        props: Xu(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set,
        updateGuards: new Set,
        enterCallbacks: {},
        components: "components"in e ? e.components || null : e.component && {
            default: e.component
        }
    };
    return Object.defineProperty(t, "mods", {
        value: {}
    }),
    t
}
function Xu(e) {
    const t = {}
      , n = e.props || !1;
    if ("component"in e)
        t.default = n;
    else
        for (const s in e.components)
            t[s] = typeof n == "object" ? n[s] : n;
    return t
}
function wo(e) {
    for (; e; ) {
        if (e.record.aliasOf)
            return !0;
        e = e.parent
    }
    return !1
}
function Yu(e) {
    return e.reduce( (t, n) => X(t, n.meta), {})
}
function Eo(e, t) {
    const n = {};
    for (const s in e)
        n[s] = s in t ? t[s] : e[s];
    return n
}
function Qu(e, t) {
    let n = 0
      , s = t.length;
    for (; n !== s; ) {
        const o = n + s >> 1;
        il(e, t[o]) < 0 ? s = o : n = o + 1
    }
    const r = Zu(e);
    return r && (s = t.lastIndexOf(r, s - 1)),
    s
}
function Zu(e) {
    let t = e;
    for (; t = t.parent; )
        if (ll(t) && il(e, t) === 0)
            return t
}
function ll({record: e}) {
    return !!(e.name || e.components && Object.keys(e.components).length || e.redirect)
}
function ef(e) {
    const t = {};
    if (e === "" || e === "?")
        return t;
    const s = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let r = 0; r < s.length; ++r) {
        const o = s[r].replace(Qi, " ")
          , i = o.indexOf("=")
          , l = Rn(i < 0 ? o : o.slice(0, i))
          , c = i < 0 ? null : Rn(o.slice(i + 1));
        if (l in t) {
            let f = t[l];
            Xe(f) || (f = t[l] = [f]),
            f.push(c)
        } else
            t[l] = c
    }
    return t
}
function So(e) {
    let t = "";
    for (let n in e) {
        const s = e[n];
        if (n = _u(n),
        s == null) {
            s !== void 0 && (t += (t.length ? "&" : "") + n);
            continue
        }
        (Xe(s) ? s.map(o => o && Ys(o)) : [s && Ys(s)]).forEach(o => {
            o !== void 0 && (t += (t.length ? "&" : "") + n,
            o != null && (t += "=" + o))
        }
        )
    }
    return t
}
function tf(e) {
    const t = {};
    for (const n in e) {
        const s = e[n];
        s !== void 0 && (t[n] = Xe(s) ? s.map(r => r == null ? null : "" + r) : s == null ? s : "" + s)
    }
    return t
}
const nf = Symbol("")
  , Ro = Symbol("")
  , Rr = Symbol("")
  , xr = Symbol("")
  , Zs = Symbol("");
function on() {
    let e = [];
    function t(s) {
        return e.push(s),
        () => {
            const r = e.indexOf(s);
            r > -1 && e.splice(r, 1)
        }
    }
    function n() {
        e = []
    }
    return {
        add: t,
        list: () => e.slice(),
        reset: n
    }
}
function Et(e, t, n, s, r, o=i => i()) {
    const i = s && (s.enterCallbacks[r] = s.enterCallbacks[r] || []);
    return () => new Promise( (l, c) => {
        const f = p => {
            p === !1 ? c(Zt(4, {
                from: n,
                to: t
            })) : p instanceof Error ? c(p) : Uu(p) ? c(Zt(2, {
                from: t,
                to: p
            })) : (i && s.enterCallbacks[r] === i && typeof p == "function" && i.push(p),
            l())
        }
          , a = o( () => e.call(s && s.instances[r], t, n, f));
        let u = Promise.resolve(a);
        e.length < 3 && (u = u.then(f)),
        u.catch(p => c(p))
    }
    )
}
function Fs(e, t, n, s, r=o => o()) {
    const o = [];
    for (const i of e)
        for (const l in i.components) {
            let c = i.components[l];
            if (!(t !== "beforeRouteEnter" && !i.instances[l]))
                if (Xi(c)) {
                    const a = (c.__vccOpts || c)[t];
                    a && o.push(Et(a, n, s, i, l, r))
                } else {
                    let f = c();
                    o.push( () => f.then(a => {
                        if (!a)
                            throw new Error(`Couldn't resolve component "${l}" at "${i.path}"`);
                        const u = au(a) ? a.default : a;
                        i.mods[l] = a,
                        i.components[l] = u;
                        const y = (u.__vccOpts || u)[t];
                        return y && Et(y, n, s, i, l, r)()
                    }
                    ))
                }
        }
    return o
}
function xo(e) {
    const t = it(Rr)
      , n = it(xr)
      , s = ye( () => {
        const c = ke(e.to);
        return t.resolve(c)
    }
    )
      , r = ye( () => {
        const {matched: c} = s.value
          , {length: f} = c
          , a = c[f - 1]
          , u = n.matched;
        if (!a || !u.length)
            return -1;
        const p = u.findIndex(Qt.bind(null, a));
        if (p > -1)
            return p;
        const y = Co(c[f - 2]);
        return f > 1 && Co(a) === y && u[u.length - 1].path !== y ? u.findIndex(Qt.bind(null, c[f - 2])) : p
    }
    )
      , o = ye( () => r.value > -1 && cf(n.params, s.value.params))
      , i = ye( () => r.value > -1 && r.value === n.matched.length - 1 && nl(n.params, s.value.params));
    function l(c={}) {
        if (lf(c)) {
            const f = t[ke(e.replace) ? "replace" : "push"](ke(e.to)).catch(yn);
            return e.viewTransition && typeof document < "u" && "startViewTransition"in document && document.startViewTransition( () => f),
            f
        }
        return Promise.resolve()
    }
    return {
        route: s,
        href: ye( () => s.value.href),
        isActive: o,
        isExactActive: i,
        navigate: l
    }
}
function sf(e) {
    return e.length === 1 ? e[0] : e
}
const rf = fs({
    name: "RouterLink",
    compatConfig: {
        MODE: 3
    },
    props: {
        to: {
            type: [String, Object],
            required: !0
        },
        replace: Boolean,
        activeClass: String,
        exactActiveClass: String,
        custom: Boolean,
        ariaCurrentValue: {
            type: String,
            default: "page"
        },
        viewTransition: Boolean
    },
    useLink: xo,
    setup(e, {slots: t}) {
        const n = Mt(xo(e))
          , {options: s} = it(Rr)
          , r = ye( () => ({
            [To(e.activeClass, s.linkActiveClass, "router-link-active")]: n.isActive,
            [To(e.exactActiveClass, s.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
        }));
        return () => {
            const o = t.default && sf(t.default(n));
            return e.custom ? o : Ji("a", {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: r.value
            }, o)
        }
    }
})
  , of = rf;
function lf(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(t))
                return
        }
        return e.preventDefault && e.preventDefault(),
        !0
    }
}
function cf(e, t) {
    for (const n in t) {
        const s = t[n]
          , r = e[n];
        if (typeof s == "string") {
            if (s !== r)
                return !1
        } else if (!Xe(r) || r.length !== s.length || s.some( (o, i) => o !== r[i]))
            return !1
    }
    return !0
}
function Co(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const To = (e, t, n) => e ?? t ?? n
  , af = fs({
    name: "RouterView",
    inheritAttrs: !1,
    props: {
        name: {
            type: String,
            default: "default"
        },
        route: Object
    },
    compatConfig: {
        MODE: 3
    },
    setup(e, {attrs: t, slots: n}) {
        const s = it(Zs)
          , r = ye( () => e.route || s.value)
          , o = it(Ro, 0)
          , i = ye( () => {
            let f = ke(o);
            const {matched: a} = r.value;
            let u;
            for (; (u = a[f]) && !u.components; )
                f++;
            return f
        }
        )
          , l = ye( () => r.value.matched[i.value]);
        kn(Ro, ye( () => i.value + 1)),
        kn(nf, l),
        kn(Zs, r);
        const c = ce();
        return Gt( () => [c.value, l.value, e.name], ([f,a,u], [p,y,_]) => {
            a && (a.instances[u] = f,
            y && y !== a && f && f === p && (a.leaveGuards.size || (a.leaveGuards = y.leaveGuards),
            a.updateGuards.size || (a.updateGuards = y.updateGuards))),
            f && a && (!y || !Qt(a, y) || !p) && (a.enterCallbacks[u] || []).forEach(C => C(f))
        }
        , {
            flush: "post"
        }),
        () => {
            const f = r.value
              , a = e.name
              , u = l.value
              , p = u && u.components[a];
            if (!p)
                return Ao(n.default, {
                    Component: p,
                    route: f
                });
            const y = u.props[a]
              , _ = y ? y === !0 ? f.params : typeof y == "function" ? y(f) : y : null
              , A = Ji(p, X({}, _, t, {
                onVnodeUnmounted: O => {
                    O.component.isUnmounted && (u.instances[a] = null)
                }
                ,
                ref: c
            }));
            return Ao(n.default, {
                Component: A,
                route: f
            }) || A
        }
    }
});
function Ao(e, t) {
    if (!e)
        return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n
}
const cl = af;
function uf(e) {
    const t = Gu(e.routes, e)
      , n = e.parseQuery || ef
      , s = e.stringifyQuery || So
      , r = e.history
      , o = on()
      , i = on()
      , l = on()
      , c = mc(vt);
    let f = vt;
    Ht && e.scrollBehavior && "scrollRestoration"in history && (history.scrollRestoration = "manual");
    const a = Is.bind(null, S => "" + S)
      , u = Is.bind(null, Eu)
      , p = Is.bind(null, Rn);
    function y(S, j) {
        let F, k;
        return rl(S) ? (F = t.getRecordMatcher(S),
        k = j) : k = S,
        t.addRoute(k, F)
    }
    function _(S) {
        const j = t.getRecordMatcher(S);
        j && t.removeRoute(j)
    }
    function C() {
        return t.getRoutes().map(S => S.record)
    }
    function A(S) {
        return !!t.getRecordMatcher(S)
    }
    function O(S, j) {
        if (j = X({}, j || c.value),
        typeof S == "string") {
            const b = Ds(n, S, j.path)
              , E = t.resolve({
                path: b.path
            }, j)
              , R = r.createHref(b.fullPath);
            return X(b, E, {
                params: p(E.params),
                hash: Rn(b.hash),
                redirectedFrom: void 0,
                href: R
            })
        }
        let F;
        if (S.path != null)
            F = X({}, S, {
                path: Ds(n, S.path, j.path).path
            });
        else {
            const b = X({}, S.params);
            for (const E in b)
                b[E] == null && delete b[E];
            F = X({}, S, {
                params: u(b)
            }),
            j.params = u(j.params)
        }
        const k = t.resolve(F, j)
          , G = S.hash || "";
        k.params = a(p(k.params));
        const d = xu(s, X({}, S, {
            hash: vu(G),
            path: k.path
        }))
          , h = r.createHref(d);
        return X({
            fullPath: d,
            hash: G,
            query: s === So ? tf(S.query) : S.query || {}
        }, k, {
            redirectedFrom: void 0,
            href: h
        })
    }
    function N(S) {
        return typeof S == "string" ? Ds(n, S, c.value.path) : X({}, S)
    }
    function M(S, j) {
        if (f !== S)
            return Zt(8, {
                from: j,
                to: S
            })
    }
    function L(S) {
        return W(S)
    }
    function H(S) {
        return L(X(N(S), {
            replace: !0
        }))
    }
    function Z(S) {
        const j = S.matched[S.matched.length - 1];
        if (j && j.redirect) {
            const {redirect: F} = j;
            let k = typeof F == "function" ? F(S) : F;
            return typeof k == "string" && (k = k.includes("?") || k.includes("#") ? k = N(k) : {
                path: k
            },
            k.params = {}),
            X({
                query: S.query,
                hash: S.hash,
                params: k.path != null ? {} : S.params
            }, k)
        }
    }
    function W(S, j) {
        const F = f = O(S)
          , k = c.value
          , G = S.state
          , d = S.force
          , h = S.replace === !0
          , b = Z(F);
        if (b)
            return W(X(N(b), {
                state: typeof b == "object" ? X({}, G, b.state) : G,
                force: d,
                replace: h
            }), j || F);
        const E = F;
        E.redirectedFrom = j;
        let R;
        return !d && Cu(s, k, F) && (R = Zt(16, {
            to: E,
            from: k
        }),
        Me(k, k, !0, !1)),
        (R ? Promise.resolve(R) : Te(E, k)).catch(x => ft(x) ? ft(x, 2) ? x : qe(x) : z(x, E, k)).then(x => {
            if (x) {
                if (ft(x, 2))
                    return W(X({
                        replace: h
                    }, N(x.to), {
                        state: typeof x.to == "object" ? X({}, G, x.to.state) : G,
                        force: d
                    }), j || E)
            } else
                x = Be(E, k, !0, h, G);
            return Ue(E, k, x),
            x
        }
        )
    }
    function ne(S, j) {
        const F = M(S, j);
        return F ? Promise.reject(F) : Promise.resolve()
    }
    function Ce(S) {
        const j = Ve.values().next().value;
        return j && typeof j.runWithContext == "function" ? j.runWithContext(S) : S()
    }
    function Te(S, j) {
        let F;
        const [k,G,d] = ff(S, j);
        F = Fs(k.reverse(), "beforeRouteLeave", S, j);
        for (const b of k)
            b.leaveGuards.forEach(E => {
                F.push(Et(E, S, j))
            }
            );
        const h = ne.bind(null, S, j);
        return F.push(h),
        de(F).then( () => {
            F = [];
            for (const b of o.list())
                F.push(Et(b, S, j));
            return F.push(h),
            de(F)
        }
        ).then( () => {
            F = Fs(G, "beforeRouteUpdate", S, j);
            for (const b of G)
                b.updateGuards.forEach(E => {
                    F.push(Et(E, S, j))
                }
                );
            return F.push(h),
            de(F)
        }
        ).then( () => {
            F = [];
            for (const b of d)
                if (b.beforeEnter)
                    if (Xe(b.beforeEnter))
                        for (const E of b.beforeEnter)
                            F.push(Et(E, S, j));
                    else
                        F.push(Et(b.beforeEnter, S, j));
            return F.push(h),
            de(F)
        }
        ).then( () => (S.matched.forEach(b => b.enterCallbacks = {}),
        F = Fs(d, "beforeRouteEnter", S, j, Ce),
        F.push(h),
        de(F))).then( () => {
            F = [];
            for (const b of i.list())
                F.push(Et(b, S, j));
            return F.push(h),
            de(F)
        }
        ).catch(b => ft(b, 8) ? b : Promise.reject(b))
    }
    function Ue(S, j, F) {
        l.list().forEach(k => Ce( () => k(S, j, F)))
    }
    function Be(S, j, F, k, G) {
        const d = M(S, j);
        if (d)
            return d;
        const h = j === vt
          , b = Ht ? history.state : {};
        F && (k || h ? r.replace(S.fullPath, X({
            scroll: h && b && b.scroll
        }, G)) : r.push(S.fullPath, G)),
        c.value = S,
        Me(S, j, F, h),
        qe()
    }
    let De;
    function bt() {
        De || (De = r.listen( (S, j, F) => {
            if (!Ke.listening)
                return;
            const k = O(S)
              , G = Z(k);
            if (G) {
                W(X(G, {
                    replace: !0,
                    force: !0
                }), k).catch(yn);
                return
            }
            f = k;
            const d = c.value;
            Ht && Fu(po(d.fullPath, F.delta), gs()),
            Te(k, d).catch(h => ft(h, 12) ? h : ft(h, 2) ? (W(X(N(h.to), {
                force: !0
            }), k).then(b => {
                ft(b, 20) && !F.delta && F.type === xn.pop && r.go(-1, !1)
            }
            ).catch(yn),
            Promise.reject()) : (F.delta && r.go(-F.delta, !1),
            z(h, k, d))).then(h => {
                h = h || Be(k, d, !1),
                h && (F.delta && !ft(h, 8) ? r.go(-F.delta, !1) : F.type === xn.pop && ft(h, 20) && r.go(-1, !1)),
                Ue(k, d, h)
            }
            ).catch(yn)
        }
        ))
    }
    let He = on(), le = on(), J;
    function z(S, j, F) {
        qe(S);
        const k = le.list();
        return k.length ? k.forEach(G => G(S, j, F)) : console.error(S),
        Promise.reject(S)
    }
    function Fe() {
        return J && c.value !== vt ? Promise.resolve() : new Promise( (S, j) => {
            He.add([S, j])
        }
        )
    }
    function qe(S) {
        return J || (J = !S,
        bt(),
        He.list().forEach( ([j,F]) => S ? F(S) : j()),
        He.reset()),
        S
    }
    function Me(S, j, F, k) {
        const {scrollBehavior: G} = e;
        if (!Ht || !G)
            return Promise.resolve();
        const d = !F && Mu(po(S.fullPath, 0)) || (k || !F) && history.state && history.state.scroll || null;
        return yr().then( () => G(S, j, d)).then(h => h && Du(h)).catch(h => z(h, S, j))
    }
    const fe = S => r.go(S);
    let at;
    const Ve = new Set
      , Ke = {
        currentRoute: c,
        listening: !0,
        addRoute: y,
        removeRoute: _,
        clearRoutes: t.clearRoutes,
        hasRoute: A,
        getRoutes: C,
        resolve: O,
        options: e,
        push: L,
        replace: H,
        go: fe,
        back: () => fe(-1),
        forward: () => fe(1),
        beforeEach: o.add,
        beforeResolve: i.add,
        afterEach: l.add,
        onError: le.add,
        isReady: Fe,
        install(S) {
            const j = this;
            S.component("RouterLink", of),
            S.component("RouterView", cl),
            S.config.globalProperties.$router = j,
            Object.defineProperty(S.config.globalProperties, "$route", {
                enumerable: !0,
                get: () => ke(c)
            }),
            Ht && !at && c.value === vt && (at = !0,
            L(r.location).catch(G => {}
            ));
            const F = {};
            for (const G in vt)
                Object.defineProperty(F, G, {
                    get: () => c.value[G],
                    enumerable: !0
                });
            S.provide(Rr, j),
            S.provide(xr, mi(F)),
            S.provide(Zs, c);
            const k = S.unmount;
            Ve.add(S),
            S.unmount = function() {
                Ve.delete(S),
                Ve.size < 1 && (f = vt,
                De && De(),
                De = null,
                c.value = vt,
                at = !1,
                J = !1),
                k()
            }
        }
    };
    function de(S) {
        return S.reduce( (j, F) => j.then( () => Ce(F)), Promise.resolve())
    }
    return Ke
}
function ff(e, t) {
    const n = []
      , s = []
      , r = []
      , o = Math.max(t.matched.length, e.matched.length);
    for (let i = 0; i < o; i++) {
        const l = t.matched[i];
        l && (e.matched.find(f => Qt(f, l)) ? s.push(l) : n.push(l));
        const c = e.matched[i];
        c && (t.matched.find(f => Qt(f, c)) || r.push(c))
    }
    return [n, s, r]
}
function df(e) {
    return it(xr)
}
const hf = {
    id: "app"
}
  , pf = fs({
    __name: "App",
    setup(e) {
        return (t, n) => (pe(),
        Ee("div", hf, [xe(ke(cl))]))
    }
});
function Cr(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function mf(e, t) {
    for (var n = 0; n < t.length; n++) {
        var s = t[n];
        s.enumerable = s.enumerable || !1,
        s.configurable = !0,
        "value"in s && (s.writable = !0),
        Object.defineProperty(e, s.key, s)
    }
}
function Tr(e, t, n) {
    return t && mf(e.prototype, t),
    e
}
function Oo(e) {
    return +e.replace(/px/, "")
}
function gf(e) {
    var t = window.devicePixelRatio
      , n = getComputedStyle(e)
      , s = Oo(n.getPropertyValue("width"))
      , r = Oo(n.getPropertyValue("height"));
    e.setAttribute("width", (s * t).toString()),
    e.setAttribute("height", (r * t).toString())
}
function Je(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0
      , s = Math.random() * (t - e) + e;
    return Math.floor(s * Math.pow(10, n)) / Math.pow(10, n)
}
function Po(e) {
    return e[Je(0, e.length)]
}
var yf = .00125
  , bf = 5e-4
  , vf = 9e-4
  , _f = 1e-5
  , wf = 6
  , Ef = 80
  , Sf = .9
  , Rf = 1.7
  , xf = .2
  , Cf = .6
  , Tf = .03
  , Af = .07
  , No = 15
  , Io = 82
  , Of = 100
  , Pf = 250
  , Nf = 40
  , If = ["#fcf403", "#62fc03", "#f4fc03", "#03e7fc", "#03fca5", "#a503fc", "#fc03ad", "#fc03c2"];
function Do(e) {
    var t = 1920;
    return Math.log(e) / Math.log(t)
}
var Fo = (function() {
    function e(t) {
        Cr(this, e);
        var n = t.initialPosition
          , s = t.direction
          , r = t.confettiRadius
          , o = t.confettiColors
          , i = t.emojis
          , l = t.emojiSize
          , c = t.canvasWidth
          , f = Je(Sf, Rf, 3)
          , a = f * Do(c);
        this.confettiSpeed = {
            x: a,
            y: a
        },
        this.finalConfettiSpeedX = Je(xf, Cf, 3),
        this.rotationSpeed = i.length ? .01 : Je(Tf, Af, 3) * Do(c),
        this.dragForceCoefficient = Je(bf, vf, 6),
        this.radius = {
            x: r,
            y: r
        },
        this.initialRadius = r,
        this.rotationAngle = s === "left" ? Je(0, .2, 3) : Je(-.2, 0, 3),
        this.emojiSize = l,
        this.emojiRotationAngle = Je(0, 2 * Math.PI),
        this.radiusYUpdateDirection = "down";
        var u = s === "left" ? Je(Io, No) * Math.PI / 180 : Je(-No, -Io) * Math.PI / 180;
        this.absCos = Math.abs(Math.cos(u)),
        this.absSin = Math.abs(Math.sin(u));
        var p = Je(-150, 0)
          , y = {
            x: n.x + (s === "left" ? -p : p) * this.absCos,
            y: n.y - p * this.absSin
        };
        this.currentPosition = Object.assign({}, y),
        this.initialPosition = Object.assign({}, y),
        this.color = i.length ? null : Po(o),
        this.emoji = i.length ? Po(i) : null,
        this.createdAt = new Date().getTime(),
        this.direction = s
    }
    return Tr(e, [{
        key: "draw",
        value: function(n) {
            var s = this.currentPosition
              , r = this.radius
              , o = this.color
              , i = this.emoji
              , l = this.rotationAngle
              , c = this.emojiRotationAngle
              , f = this.emojiSize
              , a = window.devicePixelRatio;
            o ? (n.fillStyle = o,
            n.beginPath(),
            n.ellipse(s.x * a, s.y * a, r.x * a, r.y * a, l, 0, 2 * Math.PI),
            n.fill()) : i && (n.font = "".concat(f, "px serif"),
            n.save(),
            n.translate(a * s.x, a * s.y),
            n.rotate(c),
            n.textAlign = "center",
            n.fillText(i, 0, 0),
            n.restore())
        }
    }, {
        key: "updatePosition",
        value: function(n, s) {
            var r = this.confettiSpeed
              , o = this.dragForceCoefficient
              , i = this.finalConfettiSpeedX
              , l = this.radiusYUpdateDirection
              , c = this.rotationSpeed
              , f = this.createdAt
              , a = this.direction
              , u = s - f;
            if (r.x > i && (this.confettiSpeed.x -= o * n),
            this.currentPosition.x += r.x * (a === "left" ? -this.absCos : this.absCos) * n,
            this.currentPosition.y = this.initialPosition.y - r.y * this.absSin * u + yf * Math.pow(u, 2) / 2,
            this.rotationSpeed -= this.emoji ? 1e-4 : _f * n,
            this.rotationSpeed < 0 && (this.rotationSpeed = 0),
            this.emoji) {
                this.emojiRotationAngle += this.rotationSpeed * n % (2 * Math.PI);
                return
            }
            l === "down" ? (this.radius.y -= n * c,
            this.radius.y <= 0 && (this.radius.y = 0,
            this.radiusYUpdateDirection = "up")) : (this.radius.y += n * c,
            this.radius.y >= this.initialRadius && (this.radius.y = this.initialRadius,
            this.radiusYUpdateDirection = "down"))
        }
    }, {
        key: "getIsVisibleOnCanvas",
        value: function(n) {
            return this.currentPosition.y < n + Of
        }
    }]),
    e
}
)();
function Df() {
    var e = document.createElement("canvas");
    return e.style.position = "fixed",
    e.style.width = "100%",
    e.style.height = "100%",
    e.style.top = "0",
    e.style.left = "0",
    e.style.zIndex = "1000",
    e.style.pointerEvents = "none",
    document.body.appendChild(e),
    e
}
function Ff(e) {
    var t = e.confettiRadius
      , n = t === void 0 ? wf : t
      , s = e.confettiNumber
      , r = s === void 0 ? e.confettiesNumber || (e.emojis ? Nf : Pf) : s
      , o = e.confettiColors
      , i = o === void 0 ? If : o
      , l = e.emojis
      , c = l === void 0 ? e.emojies || [] : l
      , f = e.emojiSize
      , a = f === void 0 ? Ef : f;
    return e.emojies && console.error("emojies argument is deprecated, please use emojis instead"),
    e.confettiesNumber && console.error("confettiesNumber argument is deprecated, please use confettiNumber instead"),
    {
        confettiRadius: n,
        confettiNumber: r,
        confettiColors: i,
        emojis: c,
        emojiSize: a
    }
}
var Mf = (function() {
    function e(t) {
        var n = this;
        Cr(this, e),
        this.canvasContext = t,
        this.shapes = [],
        this.promise = new Promise(function(s) {
            return n.resolvePromise = s
        }
        )
    }
    return Tr(e, [{
        key: "getBatchCompletePromise",
        value: function() {
            return this.promise
        }
    }, {
        key: "addShapes",
        value: function() {
            var n;
            (n = this.shapes).push.apply(n, arguments)
        }
    }, {
        key: "complete",
        value: function() {
            var n;
            return this.shapes.length ? !1 : ((n = this.resolvePromise) === null || n === void 0 || n.call(this),
            !0)
        }
    }, {
        key: "processShapes",
        value: function(n, s, r) {
            var o = this
              , i = n.timeDelta
              , l = n.currentTime;
            this.shapes = this.shapes.filter(function(c) {
                return c.updatePosition(i, l),
                c.draw(o.canvasContext),
                r ? c.getIsVisibleOnCanvas(s) : !0
            })
        }
    }]),
    e
}
)()
  , Lf = (function() {
    function e() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        Cr(this, e),
        this.activeConfettiBatches = [],
        this.canvas = t.canvas || Df(),
        this.canvasContext = this.canvas.getContext("2d"),
        this.requestAnimationFrameRequested = !1,
        this.lastUpdated = new Date().getTime(),
        this.iterationIndex = 0,
        this.loop = this.loop.bind(this),
        requestAnimationFrame(this.loop)
    }
    return Tr(e, [{
        key: "loop",
        value: function() {
            this.requestAnimationFrameRequested = !1,
            gf(this.canvas);
            var n = new Date().getTime()
              , s = n - this.lastUpdated
              , r = this.canvas.offsetHeight
              , o = this.iterationIndex % 10 === 0;
            this.activeConfettiBatches = this.activeConfettiBatches.filter(function(i) {
                return i.processShapes({
                    timeDelta: s,
                    currentTime: n
                }, r, o),
                o ? !i.complete() : !0
            }),
            this.iterationIndex++,
            this.queueAnimationFrameIfNeeded(n)
        }
    }, {
        key: "queueAnimationFrameIfNeeded",
        value: function(n) {
            this.requestAnimationFrameRequested || this.activeConfettiBatches.length < 1 || (this.requestAnimationFrameRequested = !0,
            this.lastUpdated = n || new Date().getTime(),
            requestAnimationFrame(this.loop))
        }
    }, {
        key: "addConfetti",
        value: function() {
            for (var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, s = Ff(n), r = s.confettiRadius, o = s.confettiNumber, i = s.confettiColors, l = s.emojis, c = s.emojiSize, f = this.canvas.getBoundingClientRect(), a = f.width, u = f.height, p = u * 5 / 7, y = {
                x: 0,
                y: p
            }, _ = {
                x: a,
                y: p
            }, C = new Mf(this.canvasContext), A = 0; A < o / 2; A++) {
                var O = new Fo({
                    initialPosition: y,
                    direction: "right",
                    confettiRadius: r,
                    confettiColors: i,
                    confettiNumber: o,
                    emojis: l,
                    emojiSize: c,
                    canvasWidth: a
                })
                  , N = new Fo({
                    initialPosition: _,
                    direction: "left",
                    confettiRadius: r,
                    confettiColors: i,
                    confettiNumber: o,
                    emojis: l,
                    emojiSize: c,
                    canvasWidth: a
                });
                C.addShapes(O, N)
            }
            return this.activeConfettiBatches.push(C),
            this.queueAnimationFrameIfNeeded(),
            C.getBatchCompletePromise()
        }
    }, {
        key: "clearCanvas",
        value: function() {
            this.activeConfettiBatches = []
        }
    }, {
        key: "destroyCanvas",
        value: function() {
            this.canvas.remove()
        }
    }]),
    e
}
)();
function al(e, t) {
    return function() {
        return e.apply(t, arguments)
    }
}
const {toString: jf} = Object.prototype
  , {getPrototypeOf: Ar} = Object
  , {iterator: ys, toStringTag: ul} = Symbol
  , bs = (e => t => {
    const n = jf.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
}
)(Object.create(null))
  , Ye = e => (e = e.toLowerCase(),
t => bs(t) === e)
  , vs = e => t => typeof t === e
  , {isArray: en} = Array
  , Cn = vs("undefined");
function Pn(e) {
    return e !== null && !Cn(e) && e.constructor !== null && !Cn(e.constructor) && Ne(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
const fl = Ye("ArrayBuffer");
function kf(e) {
    let t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && fl(e.buffer),
    t
}
const $f = vs("string")
  , Ne = vs("function")
  , dl = vs("number")
  , Nn = e => e !== null && typeof e == "object"
  , Uf = e => e === !0 || e === !1
  , Hn = e => {
    if (bs(e) !== "object")
        return !1;
    const t = Ar(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(ul in e) && !(ys in e)
}
  , Bf = e => {
    if (!Nn(e) || Pn(e))
        return !1;
    try {
        return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype
    } catch {
        return !1
    }
}
  , Hf = Ye("Date")
  , qf = Ye("File")
  , Vf = Ye("Blob")
  , Kf = Ye("FileList")
  , zf = e => Nn(e) && Ne(e.pipe)
  , Wf = e => {
    let t;
    return e && (typeof FormData == "function" && e instanceof FormData || Ne(e.append) && ((t = bs(e)) === "formdata" || t === "object" && Ne(e.toString) && e.toString() === "[object FormData]"))
}
  , Jf = Ye("URLSearchParams")
  , [Gf,Xf,Yf,Qf] = ["ReadableStream", "Request", "Response", "Headers"].map(Ye)
  , Zf = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function In(e, t, {allOwnKeys: n=!1}={}) {
    if (e === null || typeof e > "u")
        return;
    let s, r;
    if (typeof e != "object" && (e = [e]),
    en(e))
        for (s = 0,
        r = e.length; s < r; s++)
            t.call(null, e[s], s, e);
    else {
        if (Pn(e))
            return;
        const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e)
          , i = o.length;
        let l;
        for (s = 0; s < i; s++)
            l = o[s],
            t.call(null, e[l], l, e)
    }
}
function hl(e, t) {
    if (Pn(e))
        return null;
    t = t.toLowerCase();
    const n = Object.keys(e);
    let s = n.length, r;
    for (; s-- > 0; )
        if (r = n[s],
        t === r.toLowerCase())
            return r;
    return null
}
const It = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global
  , pl = e => !Cn(e) && e !== It;
function er() {
    const {caseless: e} = pl(this) && this || {}
      , t = {}
      , n = (s, r) => {
        const o = e && hl(t, r) || r;
        Hn(t[o]) && Hn(s) ? t[o] = er(t[o], s) : Hn(s) ? t[o] = er({}, s) : en(s) ? t[o] = s.slice() : t[o] = s
    }
    ;
    for (let s = 0, r = arguments.length; s < r; s++)
        arguments[s] && In(arguments[s], n);
    return t
}
const ed = (e, t, n, {allOwnKeys: s}={}) => (In(t, (r, o) => {
    n && Ne(r) ? e[o] = al(r, n) : e[o] = r
}
, {
    allOwnKeys: s
}),
e)
  , td = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)),
e)
  , nd = (e, t, n, s) => {
    e.prototype = Object.create(t.prototype, s),
    e.prototype.constructor = e,
    Object.defineProperty(e, "super", {
        value: t.prototype
    }),
    n && Object.assign(e.prototype, n)
}
  , sd = (e, t, n, s) => {
    let r, o, i;
    const l = {};
    if (t = t || {},
    e == null)
        return t;
    do {
        for (r = Object.getOwnPropertyNames(e),
        o = r.length; o-- > 0; )
            i = r[o],
            (!s || s(i, e, t)) && !l[i] && (t[i] = e[i],
            l[i] = !0);
        e = n !== !1 && Ar(e)
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t
}
  , rd = (e, t, n) => {
    e = String(e),
    (n === void 0 || n > e.length) && (n = e.length),
    n -= t.length;
    const s = e.indexOf(t, n);
    return s !== -1 && s === n
}
  , od = e => {
    if (!e)
        return null;
    if (en(e))
        return e;
    let t = e.length;
    if (!dl(t))
        return null;
    const n = new Array(t);
    for (; t-- > 0; )
        n[t] = e[t];
    return n
}
  , id = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && Ar(Uint8Array))
  , ld = (e, t) => {
    const s = (e && e[ys]).call(e);
    let r;
    for (; (r = s.next()) && !r.done; ) {
        const o = r.value;
        t.call(e, o[0], o[1])
    }
}
  , cd = (e, t) => {
    let n;
    const s = [];
    for (; (n = e.exec(t)) !== null; )
        s.push(n);
    return s
}
  , ad = Ye("HTMLFormElement")
  , ud = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, s, r) {
    return s.toUpperCase() + r
})
  , Mo = ( ({hasOwnProperty: e}) => (t, n) => e.call(t, n))(Object.prototype)
  , fd = Ye("RegExp")
  , ml = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e)
      , s = {};
    In(n, (r, o) => {
        let i;
        (i = t(r, o, e)) !== !1 && (s[o] = i || r)
    }
    ),
    Object.defineProperties(e, s)
}
  , dd = e => {
    ml(e, (t, n) => {
        if (Ne(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
            return !1;
        const s = e[n];
        if (Ne(s)) {
            if (t.enumerable = !1,
            "writable"in t) {
                t.writable = !1;
                return
            }
            t.set || (t.set = () => {
                throw Error("Can not rewrite read-only method '" + n + "'")
            }
            )
        }
    }
    )
}
  , hd = (e, t) => {
    const n = {}
      , s = r => {
        r.forEach(o => {
            n[o] = !0
        }
        )
    }
    ;
    return en(e) ? s(e) : s(String(e).split(t)),
    n
}
  , pd = () => {}
  , md = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function gd(e) {
    return !!(e && Ne(e.append) && e[ul] === "FormData" && e[ys])
}
const yd = e => {
    const t = new Array(10)
      , n = (s, r) => {
        if (Nn(s)) {
            if (t.indexOf(s) >= 0)
                return;
            if (Pn(s))
                return s;
            if (!("toJSON"in s)) {
                t[r] = s;
                const o = en(s) ? [] : {};
                return In(s, (i, l) => {
                    const c = n(i, r + 1);
                    !Cn(c) && (o[l] = c)
                }
                ),
                t[r] = void 0,
                o
            }
        }
        return s
    }
    ;
    return n(e, 0)
}
  , bd = Ye("AsyncFunction")
  , vd = e => e && (Nn(e) || Ne(e)) && Ne(e.then) && Ne(e.catch)
  , gl = ( (e, t) => e ? setImmediate : t ? ( (n, s) => (It.addEventListener("message", ({source: r, data: o}) => {
    r === It && o === n && s.length && s.shift()()
}
, !1),
r => {
    s.push(r),
    It.postMessage(n, "*")
}
))(`axios@${Math.random()}`, []) : n => setTimeout(n))(typeof setImmediate == "function", Ne(It.postMessage))
  , _d = typeof queueMicrotask < "u" ? queueMicrotask.bind(It) : typeof process < "u" && process.nextTick || gl
  , wd = e => e != null && Ne(e[ys])
  , v = {
    isArray: en,
    isArrayBuffer: fl,
    isBuffer: Pn,
    isFormData: Wf,
    isArrayBufferView: kf,
    isString: $f,
    isNumber: dl,
    isBoolean: Uf,
    isObject: Nn,
    isPlainObject: Hn,
    isEmptyObject: Bf,
    isReadableStream: Gf,
    isRequest: Xf,
    isResponse: Yf,
    isHeaders: Qf,
    isUndefined: Cn,
    isDate: Hf,
    isFile: qf,
    isBlob: Vf,
    isRegExp: fd,
    isFunction: Ne,
    isStream: zf,
    isURLSearchParams: Jf,
    isTypedArray: id,
    isFileList: Kf,
    forEach: In,
    merge: er,
    extend: ed,
    trim: Zf,
    stripBOM: td,
    inherits: nd,
    toFlatObject: sd,
    kindOf: bs,
    kindOfTest: Ye,
    endsWith: rd,
    toArray: od,
    forEachEntry: ld,
    matchAll: cd,
    isHTMLForm: ad,
    hasOwnProperty: Mo,
    hasOwnProp: Mo,
    reduceDescriptors: ml,
    freezeMethods: dd,
    toObjectSet: hd,
    toCamelCase: ud,
    noop: pd,
    toFiniteNumber: md,
    findKey: hl,
    global: It,
    isContextDefined: pl,
    isSpecCompliantForm: gd,
    toJSONObject: yd,
    isAsyncFn: bd,
    isThenable: vd,
    setImmediate: gl,
    asap: _d,
    isIterable: wd
};
function q(e, t, n, s, r) {
    Error.call(this),
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack,
    this.message = e,
    this.name = "AxiosError",
    t && (this.code = t),
    n && (this.config = n),
    s && (this.request = s),
    r && (this.response = r,
    this.status = r.status ? r.status : null)
}
v.inherits(q, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: v.toJSONObject(this.config),
            code: this.code,
            status: this.status
        }
    }
});
const yl = q.prototype
  , bl = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
    bl[e] = {
        value: e
    }
}
);
Object.defineProperties(q, bl);
Object.defineProperty(yl, "isAxiosError", {
    value: !0
});
q.from = (e, t, n, s, r, o) => {
    const i = Object.create(yl);
    return v.toFlatObject(e, i, function(c) {
        return c !== Error.prototype
    }, l => l !== "isAxiosError"),
    q.call(i, e.message, t, n, s, r),
    i.cause = e,
    i.name = e.name,
    o && Object.assign(i, o),
    i
}
;
const Ed = null;
function tr(e) {
    return v.isPlainObject(e) || v.isArray(e)
}
function vl(e) {
    return v.endsWith(e, "[]") ? e.slice(0, -2) : e
}
function Lo(e, t, n) {
    return e ? e.concat(t).map(function(r, o) {
        return r = vl(r),
        !n && o ? "[" + r + "]" : r
    }).join(n ? "." : "") : t
}
function Sd(e) {
    return v.isArray(e) && !e.some(tr)
}
const Rd = v.toFlatObject(v, {}, null, function(t) {
    return /^is[A-Z]/.test(t)
});
function _s(e, t, n) {
    if (!v.isObject(e))
        throw new TypeError("target must be an object");
    t = t || new FormData,
    n = v.toFlatObject(n, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(C, A) {
        return !v.isUndefined(A[C])
    });
    const s = n.metaTokens
      , r = n.visitor || a
      , o = n.dots
      , i = n.indexes
      , c = (n.Blob || typeof Blob < "u" && Blob) && v.isSpecCompliantForm(t);
    if (!v.isFunction(r))
        throw new TypeError("visitor must be a function");
    function f(_) {
        if (_ === null)
            return "";
        if (v.isDate(_))
            return _.toISOString();
        if (v.isBoolean(_))
            return _.toString();
        if (!c && v.isBlob(_))
            throw new q("Blob is not supported. Use a Buffer instead.");
        return v.isArrayBuffer(_) || v.isTypedArray(_) ? c && typeof Blob == "function" ? new Blob([_]) : Buffer.from(_) : _
    }
    function a(_, C, A) {
        let O = _;
        if (_ && !A && typeof _ == "object") {
            if (v.endsWith(C, "{}"))
                C = s ? C : C.slice(0, -2),
                _ = JSON.stringify(_);
            else if (v.isArray(_) && Sd(_) || (v.isFileList(_) || v.endsWith(C, "[]")) && (O = v.toArray(_)))
                return C = vl(C),
                O.forEach(function(M, L) {
                    !(v.isUndefined(M) || M === null) && t.append(i === !0 ? Lo([C], L, o) : i === null ? C : C + "[]", f(M))
                }),
                !1
        }
        return tr(_) ? !0 : (t.append(Lo(A, C, o), f(_)),
        !1)
    }
    const u = []
      , p = Object.assign(Rd, {
        defaultVisitor: a,
        convertValue: f,
        isVisitable: tr
    });
    function y(_, C) {
        if (!v.isUndefined(_)) {
            if (u.indexOf(_) !== -1)
                throw Error("Circular reference detected in " + C.join("."));
            u.push(_),
            v.forEach(_, function(O, N) {
                (!(v.isUndefined(O) || O === null) && r.call(t, O, v.isString(N) ? N.trim() : N, C, p)) === !0 && y(O, C ? C.concat(N) : [N])
            }),
            u.pop()
        }
    }
    if (!v.isObject(e))
        throw new TypeError("data must be an object");
    return y(e),
    t
}
function jo(e) {
    const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(s) {
        return t[s]
    })
}
function Or(e, t) {
    this._pairs = [],
    e && _s(e, this, t)
}
const _l = Or.prototype;
_l.append = function(t, n) {
    this._pairs.push([t, n])
}
;
_l.toString = function(t) {
    const n = t ? function(s) {
        return t.call(this, s, jo)
    }
    : jo;
    return this._pairs.map(function(r) {
        return n(r[0]) + "=" + n(r[1])
    }, "").join("&")
}
;
function xd(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}
function wl(e, t, n) {
    if (!t)
        return e;
    const s = n && n.encode || xd;
    v.isFunction(n) && (n = {
        serialize: n
    });
    const r = n && n.serialize;
    let o;
    if (r ? o = r(t, n) : o = v.isURLSearchParams(t) ? t.toString() : new Or(t,n).toString(s),
    o) {
        const i = e.indexOf("#");
        i !== -1 && (e = e.slice(0, i)),
        e += (e.indexOf("?") === -1 ? "?" : "&") + o
    }
    return e
}
class ko {
    constructor() {
        this.handlers = []
    }
    use(t, n, s) {
        return this.handlers.push({
            fulfilled: t,
            rejected: n,
            synchronous: s ? s.synchronous : !1,
            runWhen: s ? s.runWhen : null
        }),
        this.handlers.length - 1
    }
    eject(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(t) {
        v.forEach(this.handlers, function(s) {
            s !== null && t(s)
        })
    }
}
const El = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
}
  , Cd = typeof URLSearchParams < "u" ? URLSearchParams : Or
  , Td = typeof FormData < "u" ? FormData : null
  , Ad = typeof Blob < "u" ? Blob : null
  , Od = {
    isBrowser: !0,
    classes: {
        URLSearchParams: Cd,
        FormData: Td,
        Blob: Ad
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
}
  , Pr = typeof window < "u" && typeof document < "u"
  , nr = typeof navigator == "object" && navigator || void 0
  , Pd = Pr && (!nr || ["ReactNative", "NativeScript", "NS"].indexOf(nr.product) < 0)
  , Nd = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function"
  , Id = Pr && window.location.href || "http://localhost"
  , Dd = Object.freeze(Object.defineProperty({
    __proto__: null,
    hasBrowserEnv: Pr,
    hasStandardBrowserEnv: Pd,
    hasStandardBrowserWebWorkerEnv: Nd,
    navigator: nr,
    origin: Id
}, Symbol.toStringTag, {
    value: "Module"
}))
  , be = {
    ...Dd,
    ...Od
};
function Fd(e, t) {
    return _s(e, new be.classes.URLSearchParams, {
        visitor: function(n, s, r, o) {
            return be.isNode && v.isBuffer(n) ? (this.append(s, n.toString("base64")),
            !1) : o.defaultVisitor.apply(this, arguments)
        },
        ...t
    })
}
function Md(e) {
    return v.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0])
}
function Ld(e) {
    const t = {}
      , n = Object.keys(e);
    let s;
    const r = n.length;
    let o;
    for (s = 0; s < r; s++)
        o = n[s],
        t[o] = e[o];
    return t
}
function Sl(e) {
    function t(n, s, r, o) {
        let i = n[o++];
        if (i === "__proto__")
            return !0;
        const l = Number.isFinite(+i)
          , c = o >= n.length;
        return i = !i && v.isArray(r) ? r.length : i,
        c ? (v.hasOwnProp(r, i) ? r[i] = [r[i], s] : r[i] = s,
        !l) : ((!r[i] || !v.isObject(r[i])) && (r[i] = []),
        t(n, s, r[i], o) && v.isArray(r[i]) && (r[i] = Ld(r[i])),
        !l)
    }
    if (v.isFormData(e) && v.isFunction(e.entries)) {
        const n = {};
        return v.forEachEntry(e, (s, r) => {
            t(Md(s), r, n, 0)
        }
        ),
        n
    }
    return null
}
function jd(e, t, n) {
    if (v.isString(e))
        try {
            return (t || JSON.parse)(e),
            v.trim(e)
        } catch (s) {
            if (s.name !== "SyntaxError")
                throw s
        }
    return (n || JSON.stringify)(e)
}
const Dn = {
    transitional: El,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function(t, n) {
        const s = n.getContentType() || ""
          , r = s.indexOf("application/json") > -1
          , o = v.isObject(t);
        if (o && v.isHTMLForm(t) && (t = new FormData(t)),
        v.isFormData(t))
            return r ? JSON.stringify(Sl(t)) : t;
        if (v.isArrayBuffer(t) || v.isBuffer(t) || v.isStream(t) || v.isFile(t) || v.isBlob(t) || v.isReadableStream(t))
            return t;
        if (v.isArrayBufferView(t))
            return t.buffer;
        if (v.isURLSearchParams(t))
            return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
            t.toString();
        let l;
        if (o) {
            if (s.indexOf("application/x-www-form-urlencoded") > -1)
                return Fd(t, this.formSerializer).toString();
            if ((l = v.isFileList(t)) || s.indexOf("multipart/form-data") > -1) {
                const c = this.env && this.env.FormData;
                return _s(l ? {
                    "files[]": t
                } : t, c && new c, this.formSerializer)
            }
        }
        return o || r ? (n.setContentType("application/json", !1),
        jd(t)) : t
    }
    ],
    transformResponse: [function(t) {
        const n = this.transitional || Dn.transitional
          , s = n && n.forcedJSONParsing
          , r = this.responseType === "json";
        if (v.isResponse(t) || v.isReadableStream(t))
            return t;
        if (t && v.isString(t) && (s && !this.responseType || r)) {
            const i = !(n && n.silentJSONParsing) && r;
            try {
                return JSON.parse(t)
            } catch (l) {
                if (i)
                    throw l.name === "SyntaxError" ? q.from(l, q.ERR_BAD_RESPONSE, this, null, this.response) : l
            }
        }
        return t
    }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: be.classes.FormData,
        Blob: be.classes.Blob
    },
    validateStatus: function(t) {
        return t >= 200 && t < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
v.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
    Dn.headers[e] = {}
}
);
const kd = v.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
  , $d = e => {
    const t = {};
    let n, s, r;
    return e && e.split(`
`).forEach(function(i) {
        r = i.indexOf(":"),
        n = i.substring(0, r).trim().toLowerCase(),
        s = i.substring(r + 1).trim(),
        !(!n || t[n] && kd[n]) && (n === "set-cookie" ? t[n] ? t[n].push(s) : t[n] = [s] : t[n] = t[n] ? t[n] + ", " + s : s)
    }),
    t
}
  , $o = Symbol("internals");
function ln(e) {
    return e && String(e).trim().toLowerCase()
}
function qn(e) {
    return e === !1 || e == null ? e : v.isArray(e) ? e.map(qn) : String(e)
}
function Ud(e) {
    const t = Object.create(null)
      , n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let s;
    for (; s = n.exec(e); )
        t[s[1]] = s[2];
    return t
}
const Bd = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ms(e, t, n, s, r) {
    if (v.isFunction(s))
        return s.call(this, t, n);
    if (r && (t = n),
    !!v.isString(t)) {
        if (v.isString(s))
            return t.indexOf(s) !== -1;
        if (v.isRegExp(s))
            return s.test(t)
    }
}
function Hd(e) {
    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, s) => n.toUpperCase() + s)
}
function qd(e, t) {
    const n = v.toCamelCase(" " + t);
    ["get", "set", "has"].forEach(s => {
        Object.defineProperty(e, s + n, {
            value: function(r, o, i) {
                return this[s].call(this, t, r, o, i)
            },
            configurable: !0
        })
    }
    )
}
let Ie = class {
    constructor(t) {
        t && this.set(t)
    }
    set(t, n, s) {
        const r = this;
        function o(l, c, f) {
            const a = ln(c);
            if (!a)
                throw new Error("header name must be a non-empty string");
            const u = v.findKey(r, a);
            (!u || r[u] === void 0 || f === !0 || f === void 0 && r[u] !== !1) && (r[u || c] = qn(l))
        }
        const i = (l, c) => v.forEach(l, (f, a) => o(f, a, c));
        if (v.isPlainObject(t) || t instanceof this.constructor)
            i(t, n);
        else if (v.isString(t) && (t = t.trim()) && !Bd(t))
            i($d(t), n);
        else if (v.isObject(t) && v.isIterable(t)) {
            let l = {}, c, f;
            for (const a of t) {
                if (!v.isArray(a))
                    throw TypeError("Object iterator must return a key-value pair");
                l[f = a[0]] = (c = l[f]) ? v.isArray(c) ? [...c, a[1]] : [c, a[1]] : a[1]
            }
            i(l, n)
        } else
            t != null && o(n, t, s);
        return this
    }
    get(t, n) {
        if (t = ln(t),
        t) {
            const s = v.findKey(this, t);
            if (s) {
                const r = this[s];
                if (!n)
                    return r;
                if (n === !0)
                    return Ud(r);
                if (v.isFunction(n))
                    return n.call(this, r, s);
                if (v.isRegExp(n))
                    return n.exec(r);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(t, n) {
        if (t = ln(t),
        t) {
            const s = v.findKey(this, t);
            return !!(s && this[s] !== void 0 && (!n || Ms(this, this[s], s, n)))
        }
        return !1
    }
    delete(t, n) {
        const s = this;
        let r = !1;
        function o(i) {
            if (i = ln(i),
            i) {
                const l = v.findKey(s, i);
                l && (!n || Ms(s, s[l], l, n)) && (delete s[l],
                r = !0)
            }
        }
        return v.isArray(t) ? t.forEach(o) : o(t),
        r
    }
    clear(t) {
        const n = Object.keys(this);
        let s = n.length
          , r = !1;
        for (; s--; ) {
            const o = n[s];
            (!t || Ms(this, this[o], o, t, !0)) && (delete this[o],
            r = !0)
        }
        return r
    }
    normalize(t) {
        const n = this
          , s = {};
        return v.forEach(this, (r, o) => {
            const i = v.findKey(s, o);
            if (i) {
                n[i] = qn(r),
                delete n[o];
                return
            }
            const l = t ? Hd(o) : String(o).trim();
            l !== o && delete n[o],
            n[l] = qn(r),
            s[l] = !0
        }
        ),
        this
    }
    concat(...t) {
        return this.constructor.concat(this, ...t)
    }
    toJSON(t) {
        const n = Object.create(null);
        return v.forEach(this, (s, r) => {
            s != null && s !== !1 && (n[r] = t && v.isArray(s) ? s.join(", ") : s)
        }
        ),
        n
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map( ([t,n]) => t + ": " + n).join(`
`)
    }
    getSetCookie() {
        return this.get("set-cookie") || []
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(t) {
        return t instanceof this ? t : new this(t)
    }
    static concat(t, ...n) {
        const s = new this(t);
        return n.forEach(r => s.set(r)),
        s
    }
    static accessor(t) {
        const s = (this[$o] = this[$o] = {
            accessors: {}
        }).accessors
          , r = this.prototype;
        function o(i) {
            const l = ln(i);
            s[l] || (qd(r, i),
            s[l] = !0)
        }
        return v.isArray(t) ? t.forEach(o) : o(t),
        this
    }
}
;
Ie.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
v.reduceDescriptors(Ie.prototype, ({value: e}, t) => {
    let n = t[0].toUpperCase() + t.slice(1);
    return {
        get: () => e,
        set(s) {
            this[n] = s
        }
    }
}
);
v.freezeMethods(Ie);
function Ls(e, t) {
    const n = this || Dn
      , s = t || n
      , r = Ie.from(s.headers);
    let o = s.data;
    return v.forEach(e, function(l) {
        o = l.call(n, o, r.normalize(), t ? t.status : void 0)
    }),
    r.normalize(),
    o
}
function Rl(e) {
    return !!(e && e.__CANCEL__)
}
function tn(e, t, n) {
    q.call(this, e ?? "canceled", q.ERR_CANCELED, t, n),
    this.name = "CanceledError"
}
v.inherits(tn, q, {
    __CANCEL__: !0
});
function xl(e, t, n) {
    const s = n.config.validateStatus;
    !n.status || !s || s(n.status) ? e(n) : t(new q("Request failed with status code " + n.status,[q.ERR_BAD_REQUEST, q.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],n.config,n.request,n))
}
function Vd(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || ""
}
function Kd(e, t) {
    e = e || 10;
    const n = new Array(e)
      , s = new Array(e);
    let r = 0, o = 0, i;
    return t = t !== void 0 ? t : 1e3,
    function(c) {
        const f = Date.now()
          , a = s[o];
        i || (i = f),
        n[r] = c,
        s[r] = f;
        let u = o
          , p = 0;
        for (; u !== r; )
            p += n[u++],
            u = u % e;
        if (r = (r + 1) % e,
        r === o && (o = (o + 1) % e),
        f - i < t)
            return;
        const y = a && f - a;
        return y ? Math.round(p * 1e3 / y) : void 0
    }
}
function zd(e, t) {
    let n = 0, s = 1e3 / t, r, o;
    const i = (f, a=Date.now()) => {
        n = a,
        r = null,
        o && (clearTimeout(o),
        o = null),
        e(...f)
    }
    ;
    return [ (...f) => {
        const a = Date.now()
          , u = a - n;
        u >= s ? i(f, a) : (r = f,
        o || (o = setTimeout( () => {
            o = null,
            i(r)
        }
        , s - u)))
    }
    , () => r && i(r)]
}
const ts = (e, t, n=3) => {
    let s = 0;
    const r = Kd(50, 250);
    return zd(o => {
        const i = o.loaded
          , l = o.lengthComputable ? o.total : void 0
          , c = i - s
          , f = r(c)
          , a = i <= l;
        s = i;
        const u = {
            loaded: i,
            total: l,
            progress: l ? i / l : void 0,
            bytes: c,
            rate: f || void 0,
            estimated: f && l && a ? (l - i) / f : void 0,
            event: o,
            lengthComputable: l != null,
            [t ? "download" : "upload"]: !0
        };
        e(u)
    }
    , n)
}
  , Uo = (e, t) => {
    const n = e != null;
    return [s => t[0]({
        lengthComputable: n,
        total: e,
        loaded: s
    }), t[1]]
}
  , Bo = e => (...t) => v.asap( () => e(...t))
  , Wd = be.hasStandardBrowserEnv ? ( (e, t) => n => (n = new URL(n,be.origin),
e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(new URL(be.origin), be.navigator && /(msie|trident)/i.test(be.navigator.userAgent)) : () => !0
  , Jd = be.hasStandardBrowserEnv ? {
    write(e, t, n, s, r, o) {
        const i = [e + "=" + encodeURIComponent(t)];
        v.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
        v.isString(s) && i.push("path=" + s),
        v.isString(r) && i.push("domain=" + r),
        o === !0 && i.push("secure"),
        document.cookie = i.join("; ")
    },
    read(e) {
        const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
        return t ? decodeURIComponent(t[3]) : null
    },
    remove(e) {
        this.write(e, "", Date.now() - 864e5)
    }
} : {
    write() {},
    read() {
        return null
    },
    remove() {}
};
function Gd(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function Xd(e, t) {
    return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
}
function Cl(e, t, n) {
    let s = !Gd(t);
    return e && (s || n == !1) ? Xd(e, t) : t
}
const Ho = e => e instanceof Ie ? {
    ...e
} : e;
function jt(e, t) {
    t = t || {};
    const n = {};
    function s(f, a, u, p) {
        return v.isPlainObject(f) && v.isPlainObject(a) ? v.merge.call({
            caseless: p
        }, f, a) : v.isPlainObject(a) ? v.merge({}, a) : v.isArray(a) ? a.slice() : a
    }
    function r(f, a, u, p) {
        if (v.isUndefined(a)) {
            if (!v.isUndefined(f))
                return s(void 0, f, u, p)
        } else
            return s(f, a, u, p)
    }
    function o(f, a) {
        if (!v.isUndefined(a))
            return s(void 0, a)
    }
    function i(f, a) {
        if (v.isUndefined(a)) {
            if (!v.isUndefined(f))
                return s(void 0, f)
        } else
            return s(void 0, a)
    }
    function l(f, a, u) {
        if (u in t)
            return s(f, a);
        if (u in e)
            return s(void 0, f)
    }
    const c = {
        url: o,
        method: o,
        data: o,
        baseURL: i,
        transformRequest: i,
        transformResponse: i,
        paramsSerializer: i,
        timeout: i,
        timeoutMessage: i,
        withCredentials: i,
        withXSRFToken: i,
        adapter: i,
        responseType: i,
        xsrfCookieName: i,
        xsrfHeaderName: i,
        onUploadProgress: i,
        onDownloadProgress: i,
        decompress: i,
        maxContentLength: i,
        maxBodyLength: i,
        beforeRedirect: i,
        transport: i,
        httpAgent: i,
        httpsAgent: i,
        cancelToken: i,
        socketPath: i,
        responseEncoding: i,
        validateStatus: l,
        headers: (f, a, u) => r(Ho(f), Ho(a), u, !0)
    };
    return v.forEach(Object.keys({
        ...e,
        ...t
    }), function(a) {
        const u = c[a] || r
          , p = u(e[a], t[a], a);
        v.isUndefined(p) && u !== l || (n[a] = p)
    }),
    n
}
const Tl = e => {
    const t = jt({}, e);
    let {data: n, withXSRFToken: s, xsrfHeaderName: r, xsrfCookieName: o, headers: i, auth: l} = t;
    t.headers = i = Ie.from(i),
    t.url = wl(Cl(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer),
    l && i.set("Authorization", "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : "")));
    let c;
    if (v.isFormData(n)) {
        if (be.hasStandardBrowserEnv || be.hasStandardBrowserWebWorkerEnv)
            i.setContentType(void 0);
        else if ((c = i.getContentType()) !== !1) {
            const [f,...a] = c ? c.split(";").map(u => u.trim()).filter(Boolean) : [];
            i.setContentType([f || "multipart/form-data", ...a].join("; "))
        }
    }
    if (be.hasStandardBrowserEnv && (s && v.isFunction(s) && (s = s(t)),
    s || s !== !1 && Wd(t.url))) {
        const f = r && o && Jd.read(o);
        f && i.set(r, f)
    }
    return t
}
  , Yd = typeof XMLHttpRequest < "u"
  , Qd = Yd && function(e) {
    return new Promise(function(n, s) {
        const r = Tl(e);
        let o = r.data;
        const i = Ie.from(r.headers).normalize();
        let {responseType: l, onUploadProgress: c, onDownloadProgress: f} = r, a, u, p, y, _;
        function C() {
            y && y(),
            _ && _(),
            r.cancelToken && r.cancelToken.unsubscribe(a),
            r.signal && r.signal.removeEventListener("abort", a)
        }
        let A = new XMLHttpRequest;
        A.open(r.method.toUpperCase(), r.url, !0),
        A.timeout = r.timeout;
        function O() {
            if (!A)
                return;
            const M = Ie.from("getAllResponseHeaders"in A && A.getAllResponseHeaders())
              , H = {
                data: !l || l === "text" || l === "json" ? A.responseText : A.response,
                status: A.status,
                statusText: A.statusText,
                headers: M,
                config: e,
                request: A
            };
            xl(function(W) {
                n(W),
                C()
            }, function(W) {
                s(W),
                C()
            }, H),
            A = null
        }
        "onloadend"in A ? A.onloadend = O : A.onreadystatechange = function() {
            !A || A.readyState !== 4 || A.status === 0 && !(A.responseURL && A.responseURL.indexOf("file:") === 0) || setTimeout(O)
        }
        ,
        A.onabort = function() {
            A && (s(new q("Request aborted",q.ECONNABORTED,e,A)),
            A = null)
        }
        ,
        A.onerror = function() {
            s(new q("Network Error",q.ERR_NETWORK,e,A)),
            A = null
        }
        ,
        A.ontimeout = function() {
            let L = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
            const H = r.transitional || El;
            r.timeoutErrorMessage && (L = r.timeoutErrorMessage),
            s(new q(L,H.clarifyTimeoutError ? q.ETIMEDOUT : q.ECONNABORTED,e,A)),
            A = null
        }
        ,
        o === void 0 && i.setContentType(null),
        "setRequestHeader"in A && v.forEach(i.toJSON(), function(L, H) {
            A.setRequestHeader(H, L)
        }),
        v.isUndefined(r.withCredentials) || (A.withCredentials = !!r.withCredentials),
        l && l !== "json" && (A.responseType = r.responseType),
        f && ([p,_] = ts(f, !0),
        A.addEventListener("progress", p)),
        c && A.upload && ([u,y] = ts(c),
        A.upload.addEventListener("progress", u),
        A.upload.addEventListener("loadend", y)),
        (r.cancelToken || r.signal) && (a = M => {
            A && (s(!M || M.type ? new tn(null,e,A) : M),
            A.abort(),
            A = null)
        }
        ,
        r.cancelToken && r.cancelToken.subscribe(a),
        r.signal && (r.signal.aborted ? a() : r.signal.addEventListener("abort", a)));
        const N = Vd(r.url);
        if (N && be.protocols.indexOf(N) === -1) {
            s(new q("Unsupported protocol " + N + ":",q.ERR_BAD_REQUEST,e));
            return
        }
        A.send(o || null)
    }
    )
}
  , Zd = (e, t) => {
    const {length: n} = e = e ? e.filter(Boolean) : [];
    if (t || n) {
        let s = new AbortController, r;
        const o = function(f) {
            if (!r) {
                r = !0,
                l();
                const a = f instanceof Error ? f : this.reason;
                s.abort(a instanceof q ? a : new tn(a instanceof Error ? a.message : a))
            }
        };
        let i = t && setTimeout( () => {
            i = null,
            o(new q(`timeout ${t} of ms exceeded`,q.ETIMEDOUT))
        }
        , t);
        const l = () => {
            e && (i && clearTimeout(i),
            i = null,
            e.forEach(f => {
                f.unsubscribe ? f.unsubscribe(o) : f.removeEventListener("abort", o)
            }
            ),
            e = null)
        }
        ;
        e.forEach(f => f.addEventListener("abort", o));
        const {signal: c} = s;
        return c.unsubscribe = () => v.asap(l),
        c
    }
}
  , eh = function*(e, t) {
    let n = e.byteLength;
    if (n < t) {
        yield e;
        return
    }
    let s = 0, r;
    for (; s < n; )
        r = s + t,
        yield e.slice(s, r),
        s = r
}
  , th = async function*(e, t) {
    for await(const n of nh(e))
        yield*eh(n, t)
}
  , nh = async function*(e) {
    if (e[Symbol.asyncIterator]) {
        yield*e;
        return
    }
    const t = e.getReader();
    try {
        for (; ; ) {
            const {done: n, value: s} = await t.read();
            if (n)
                break;
            yield s
        }
    } finally {
        await t.cancel()
    }
}
  , qo = (e, t, n, s) => {
    const r = th(e, t);
    let o = 0, i, l = c => {
        i || (i = !0,
        s && s(c))
    }
    ;
    return new ReadableStream({
        async pull(c) {
            try {
                const {done: f, value: a} = await r.next();
                if (f) {
                    l(),
                    c.close();
                    return
                }
                let u = a.byteLength;
                if (n) {
                    let p = o += u;
                    n(p)
                }
                c.enqueue(new Uint8Array(a))
            } catch (f) {
                throw l(f),
                f
            }
        },
        cancel(c) {
            return l(c),
            r.return()
        }
    },{
        highWaterMark: 2
    })
}
  , ws = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function"
  , Al = ws && typeof ReadableStream == "function"
  , sh = ws && (typeof TextEncoder == "function" ? (e => t => e.encode(t))(new TextEncoder) : async e => new Uint8Array(await new Response(e).arrayBuffer()))
  , Ol = (e, ...t) => {
    try {
        return !!e(...t)
    } catch {
        return !1
    }
}
  , rh = Al && Ol( () => {
    let e = !1;
    const t = new Request(be.origin,{
        body: new ReadableStream,
        method: "POST",
        get duplex() {
            return e = !0,
            "half"
        }
    }).headers.has("Content-Type");
    return e && !t
}
)
  , Vo = 64 * 1024
  , sr = Al && Ol( () => v.isReadableStream(new Response("").body))
  , ns = {
    stream: sr && (e => e.body)
};
ws && (e => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(t => {
        !ns[t] && (ns[t] = v.isFunction(e[t]) ? n => n[t]() : (n, s) => {
            throw new q(`Response type '${t}' is not supported`,q.ERR_NOT_SUPPORT,s)
        }
        )
    }
    )
}
)(new Response);
const oh = async e => {
    if (e == null)
        return 0;
    if (v.isBlob(e))
        return e.size;
    if (v.isSpecCompliantForm(e))
        return (await new Request(be.origin,{
            method: "POST",
            body: e
        }).arrayBuffer()).byteLength;
    if (v.isArrayBufferView(e) || v.isArrayBuffer(e))
        return e.byteLength;
    if (v.isURLSearchParams(e) && (e = e + ""),
    v.isString(e))
        return (await sh(e)).byteLength
}
  , ih = async (e, t) => {
    const n = v.toFiniteNumber(e.getContentLength());
    return n ?? oh(t)
}
  , lh = ws && (async e => {
    let {url: t, method: n, data: s, signal: r, cancelToken: o, timeout: i, onDownloadProgress: l, onUploadProgress: c, responseType: f, headers: a, withCredentials: u="same-origin", fetchOptions: p} = Tl(e);
    f = f ? (f + "").toLowerCase() : "text";
    let y = Zd([r, o && o.toAbortSignal()], i), _;
    const C = y && y.unsubscribe && ( () => {
        y.unsubscribe()
    }
    );
    let A;
    try {
        if (c && rh && n !== "get" && n !== "head" && (A = await ih(a, s)) !== 0) {
            let H = new Request(t,{
                method: "POST",
                body: s,
                duplex: "half"
            }), Z;
            if (v.isFormData(s) && (Z = H.headers.get("content-type")) && a.setContentType(Z),
            H.body) {
                const [W,ne] = Uo(A, ts(Bo(c)));
                s = qo(H.body, Vo, W, ne)
            }
        }
        v.isString(u) || (u = u ? "include" : "omit");
        const O = "credentials"in Request.prototype;
        _ = new Request(t,{
            ...p,
            signal: y,
            method: n.toUpperCase(),
            headers: a.normalize().toJSON(),
            body: s,
            duplex: "half",
            credentials: O ? u : void 0
        });
        let N = await fetch(_, p);
        const M = sr && (f === "stream" || f === "response");
        if (sr && (l || M && C)) {
            const H = {};
            ["status", "statusText", "headers"].forEach(Ce => {
                H[Ce] = N[Ce]
            }
            );
            const Z = v.toFiniteNumber(N.headers.get("content-length"))
              , [W,ne] = l && Uo(Z, ts(Bo(l), !0)) || [];
            N = new Response(qo(N.body, Vo, W, () => {
                ne && ne(),
                C && C()
            }
            ),H)
        }
        f = f || "text";
        let L = await ns[v.findKey(ns, f) || "text"](N, e);
        return !M && C && C(),
        await new Promise( (H, Z) => {
            xl(H, Z, {
                data: L,
                headers: Ie.from(N.headers),
                status: N.status,
                statusText: N.statusText,
                config: e,
                request: _
            })
        }
        )
    } catch (O) {
        throw C && C(),
        O && O.name === "TypeError" && /Load failed|fetch/i.test(O.message) ? Object.assign(new q("Network Error",q.ERR_NETWORK,e,_), {
            cause: O.cause || O
        }) : q.from(O, O && O.code, e, _)
    }
}
)
  , rr = {
    http: Ed,
    xhr: Qd,
    fetch: lh
};
v.forEach(rr, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, "name", {
                value: t
            })
        } catch {}
        Object.defineProperty(e, "adapterName", {
            value: t
        })
    }
}
);
const Ko = e => `- ${e}`
  , ch = e => v.isFunction(e) || e === null || e === !1
  , Pl = {
    getAdapter: e => {
        e = v.isArray(e) ? e : [e];
        const {length: t} = e;
        let n, s;
        const r = {};
        for (let o = 0; o < t; o++) {
            n = e[o];
            let i;
            if (s = n,
            !ch(n) && (s = rr[(i = String(n)).toLowerCase()],
            s === void 0))
                throw new q(`Unknown adapter '${i}'`);
            if (s)
                break;
            r[i || "#" + o] = s
        }
        if (!s) {
            const o = Object.entries(r).map( ([l,c]) => `adapter ${l} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build"));
            let i = t ? o.length > 1 ? `since :
` + o.map(Ko).join(`
`) : " " + Ko(o[0]) : "as no adapter specified";
            throw new q("There is no suitable adapter to dispatch the request " + i,"ERR_NOT_SUPPORT")
        }
        return s
    }
    ,
    adapters: rr
};
function js(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
        throw new tn(null,e)
}
function zo(e) {
    return js(e),
    e.headers = Ie.from(e.headers),
    e.data = Ls.call(e, e.transformRequest),
    ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Pl.getAdapter(e.adapter || Dn.adapter)(e).then(function(s) {
        return js(e),
        s.data = Ls.call(e, e.transformResponse, s),
        s.headers = Ie.from(s.headers),
        s
    }, function(s) {
        return Rl(s) || (js(e),
        s && s.response && (s.response.data = Ls.call(e, e.transformResponse, s.response),
        s.response.headers = Ie.from(s.response.headers))),
        Promise.reject(s)
    })
}
const Nl = "1.11.0"
  , Es = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach( (e, t) => {
    Es[e] = function(s) {
        return typeof s === e || "a" + (t < 1 ? "n " : " ") + e
    }
}
);
const Wo = {};
Es.transitional = function(t, n, s) {
    function r(o, i) {
        return "[Axios v" + Nl + "] Transitional option '" + o + "'" + i + (s ? ". " + s : "")
    }
    return (o, i, l) => {
        if (t === !1)
            throw new q(r(i, " has been removed" + (n ? " in " + n : "")),q.ERR_DEPRECATED);
        return n && !Wo[i] && (Wo[i] = !0,
        console.warn(r(i, " has been deprecated since v" + n + " and will be removed in the near future"))),
        t ? t(o, i, l) : !0
    }
}
;
Es.spelling = function(t) {
    return (n, s) => (console.warn(`${s} is likely a misspelling of ${t}`),
    !0)
}
;
function ah(e, t, n) {
    if (typeof e != "object")
        throw new q("options must be an object",q.ERR_BAD_OPTION_VALUE);
    const s = Object.keys(e);
    let r = s.length;
    for (; r-- > 0; ) {
        const o = s[r]
          , i = t[o];
        if (i) {
            const l = e[o]
              , c = l === void 0 || i(l, o, e);
            if (c !== !0)
                throw new q("option " + o + " must be " + c,q.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (n !== !0)
            throw new q("Unknown option " + o,q.ERR_BAD_OPTION)
    }
}
const Vn = {
    assertOptions: ah,
    validators: Es
}
  , nt = Vn.validators;
let Lt = class {
    constructor(t) {
        this.defaults = t || {},
        this.interceptors = {
            request: new ko,
            response: new ko
        }
    }
    async request(t, n) {
        try {
            return await this._request(t, n)
        } catch (s) {
            if (s instanceof Error) {
                let r = {};
                Error.captureStackTrace ? Error.captureStackTrace(r) : r = new Error;
                const o = r.stack ? r.stack.replace(/^.+\n/, "") : "";
                try {
                    s.stack ? o && !String(s.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (s.stack += `
` + o) : s.stack = o
                } catch {}
            }
            throw s
        }
    }
    _request(t, n) {
        typeof t == "string" ? (n = n || {},
        n.url = t) : n = t || {},
        n = jt(this.defaults, n);
        const {transitional: s, paramsSerializer: r, headers: o} = n;
        s !== void 0 && Vn.assertOptions(s, {
            silentJSONParsing: nt.transitional(nt.boolean),
            forcedJSONParsing: nt.transitional(nt.boolean),
            clarifyTimeoutError: nt.transitional(nt.boolean)
        }, !1),
        r != null && (v.isFunction(r) ? n.paramsSerializer = {
            serialize: r
        } : Vn.assertOptions(r, {
            encode: nt.function,
            serialize: nt.function
        }, !0)),
        n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0),
        Vn.assertOptions(n, {
            baseUrl: nt.spelling("baseURL"),
            withXsrfToken: nt.spelling("withXSRFToken")
        }, !0),
        n.method = (n.method || this.defaults.method || "get").toLowerCase();
        let i = o && v.merge(o.common, o[n.method]);
        o && v.forEach(["delete", "get", "head", "post", "put", "patch", "common"], _ => {
            delete o[_]
        }
        ),
        n.headers = Ie.concat(i, o);
        const l = [];
        let c = !0;
        this.interceptors.request.forEach(function(C) {
            typeof C.runWhen == "function" && C.runWhen(n) === !1 || (c = c && C.synchronous,
            l.unshift(C.fulfilled, C.rejected))
        });
        const f = [];
        this.interceptors.response.forEach(function(C) {
            f.push(C.fulfilled, C.rejected)
        });
        let a, u = 0, p;
        if (!c) {
            const _ = [zo.bind(this), void 0];
            for (_.unshift(...l),
            _.push(...f),
            p = _.length,
            a = Promise.resolve(n); u < p; )
                a = a.then(_[u++], _[u++]);
            return a
        }
        p = l.length;
        let y = n;
        for (u = 0; u < p; ) {
            const _ = l[u++]
              , C = l[u++];
            try {
                y = _(y)
            } catch (A) {
                C.call(this, A);
                break
            }
        }
        try {
            a = zo.call(this, y)
        } catch (_) {
            return Promise.reject(_)
        }
        for (u = 0,
        p = f.length; u < p; )
            a = a.then(f[u++], f[u++]);
        return a
    }
    getUri(t) {
        t = jt(this.defaults, t);
        const n = Cl(t.baseURL, t.url, t.allowAbsoluteUrls);
        return wl(n, t.params, t.paramsSerializer)
    }
}
;
v.forEach(["delete", "get", "head", "options"], function(t) {
    Lt.prototype[t] = function(n, s) {
        return this.request(jt(s || {}, {
            method: t,
            url: n,
            data: (s || {}).data
        }))
    }
});
v.forEach(["post", "put", "patch"], function(t) {
    function n(s) {
        return function(o, i, l) {
            return this.request(jt(l || {}, {
                method: t,
                headers: s ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: o,
                data: i
            }))
        }
    }
    Lt.prototype[t] = n(),
    Lt.prototype[t + "Form"] = n(!0)
});
let uh = class Il {
    constructor(t) {
        if (typeof t != "function")
            throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function(o) {
            n = o
        }
        );
        const s = this;
        this.promise.then(r => {
            if (!s._listeners)
                return;
            let o = s._listeners.length;
            for (; o-- > 0; )
                s._listeners[o](r);
            s._listeners = null
        }
        ),
        this.promise.then = r => {
            let o;
            const i = new Promise(l => {
                s.subscribe(l),
                o = l
            }
            ).then(r);
            return i.cancel = function() {
                s.unsubscribe(o)
            }
            ,
            i
        }
        ,
        t(function(o, i, l) {
            s.reason || (s.reason = new tn(o,i,l),
            n(s.reason))
        })
    }
    throwIfRequested() {
        if (this.reason)
            throw this.reason
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return
        }
        this._listeners ? this._listeners.push(t) : this._listeners = [t]
    }
    unsubscribe(t) {
        if (!this._listeners)
            return;
        const n = this._listeners.indexOf(t);
        n !== -1 && this._listeners.splice(n, 1)
    }
    toAbortSignal() {
        const t = new AbortController
          , n = s => {
            t.abort(s)
        }
        ;
        return this.subscribe(n),
        t.signal.unsubscribe = () => this.unsubscribe(n),
        t.signal
    }
    static source() {
        let t;
        return {
            token: new Il(function(r) {
                t = r
            }
            ),
            cancel: t
        }
    }
}
;
function fh(e) {
    return function(n) {
        return e.apply(null, n)
    }
}
function dh(e) {
    return v.isObject(e) && e.isAxiosError === !0
}
const or = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(or).forEach( ([e,t]) => {
    or[t] = e
}
);
function Dl(e) {
    const t = new Lt(e)
      , n = al(Lt.prototype.request, t);
    return v.extend(n, Lt.prototype, t, {
        allOwnKeys: !0
    }),
    v.extend(n, t, null, {
        allOwnKeys: !0
    }),
    n.create = function(r) {
        return Dl(jt(e, r))
    }
    ,
    n
}
const ie = Dl(Dn);
ie.Axios = Lt;
ie.CanceledError = tn;
ie.CancelToken = uh;
ie.isCancel = Rl;
ie.VERSION = Nl;
ie.toFormData = _s;
ie.AxiosError = q;
ie.Cancel = ie.CanceledError;
ie.all = function(t) {
    return Promise.all(t)
}
;
ie.spread = fh;
ie.isAxiosError = dh;
ie.mergeConfig = jt;
ie.AxiosHeaders = Ie;
ie.formToJSON = e => Sl(v.isHTMLForm(e) ? new FormData(e) : e);
ie.getAdapter = Pl.getAdapter;
ie.HttpStatusCode = or;
ie.default = ie;
const {Axios: ip, AxiosError: lp, CanceledError: cp, isCancel: ap, CancelToken: up, VERSION: fp, all: dp, Cancel: hp, isAxiosError: pp, spread: mp, toFormData: gp, AxiosHeaders: yp, HttpStatusCode: bp, formToJSON: vp, getAdapter: _p, mergeConfig: wp} = ie
  , hh = {
    class: "topbar"
}
  , ph = {
    class: "title"
}
  , mh = {
    class: "sub",
    style: {
        color: "white",
        "font-size": "1.4rem",
        "margin-left": "1rem"
    }
}
  , gh = {
    class: "main"
}
  , yh = {
    class: "aside aside-summary"
}
  , bh = {
    class: "counter"
}
  , vh = {
    class: "card"
}
  , _h = {
    class: "pill gray",
    style: {
        "font-size": "17px"
    }
}
  , wh = {
    class: "card"
}
  , Eh = {
    class: "pill green",
    style: {
        "font-size": "17px"
    }
}
  , Sh = {
    class: "card"
}
  , Rh = {
    class: "pill red",
    style: {
        "font-size": "17px"
    }
}
  , xh = {
    class: "section"
}
  , Ch = {
    class: "board"
}
  , Th = {
    class: "lane-header"
}
  , Ah = {
    class: "lane-count"
}
  , Oh = {
    class: "grid"
}
  , Ph = ["onDragstart", "onClick", "onPointerdown"]
  , Nh = ["data-lane", "onDragover", "onDragleave", "onDrop"]
  , Ih = {
    class: "lane-header"
}
  , Dh = {
    class: "lane-title"
}
  , Fh = {
    class: "lane-count"
}
  , Mh = {
    class: "stack"
}
  , Lh = ["onDragstart", "onClick", "onPointerdown"]
  , jh = ["data-num", "onDragstart", "onClick", "onPointerdown"]
  , kh = {
    class: "num"
}
  , $h = {
    class: "reason"
}
  , Uh = {
    class: "aside aside-announcement"
}
  , Bh = {
    class: "dday"
}
  , Hh = ["onClick"]
  , ks = "ystudy_board_state_v1"
  , $s = "ystudy_board_reasons_v2"
  , qh = fs({
    __name: "HomeView",
    setup(e, {expose: t}) {
        const n = Array.from({
            length: 30
        }, (g, m) => m + 1).concat([32])
          , s = n.length
          , r = ["room", "after", "club", "hall", "restroom", "etc"]
          , o = {
            room: "교실",
            after: "방과후",
            club: "동아리",
            hall: "복도",
            restroom: "화장실/정수기",
            etc: "기타"
        }
          , i = ce("")
          , l = new Lf
          , c = df();
        ye( () => c.params.id);
        async function f() {
            l.addConfetti(),
            await new Promise(g => setTimeout(g, 300)),
            l.addConfetti(),
            await new Promise(g => setTimeout(g, 300)),
            l.addConfetti(),
            await new Promise(g => setTimeout(g, 300)),
            l.addConfetti(),
            await new Promise(g => setTimeout(g, 300)),
            l.addConfetti(),
            await new Promise(g => setTimeout(g, 300)),
            l.addConfetti(),
            await new Promise(g => setTimeout(g, 300)),
            l.addConfetti(),
            await new Promise(g => setTimeout(g, 300))
        }
        let a = null;
        function u() {
            a && clearTimeout(a);
            const g = new Date
              , m = new Date(g);
            m.setHours(22, 50, 0, 0),
            g > m && m.setDate(m.getDate() + 1);
            const T = m.getTime() - g.getTime();
            a = window.setTimeout( () => {
                f(),
                u()
            }
            , T)
        }
        let p;
        const y = ce(1)
          , _ = ce(2)
          , C = () => {
            const g = {
                room: [],
                restroom: [],
                hall: [],
                club: [],
                etc: [],
                after: []
            };
            for (const m of n)
                g.room.push(m);
            return g
        }
        ;
        let O = Mt(( () => {
            try {
                const g = localStorage.getItem(ks);
                if (!g)
                    return C();
                const m = JSON.parse(g)
                  , T = m.out;
                Array.isArray(T) && (m.etc ??= []).push(...T);
                const w = new Set;
                r.forEach(P => (m[P] ??= []).forEach(U => w.add(U)));
                for (const P of n)
                    w.has(P) || m.room.push(P);
                return m
            } catch {
                return C()
            }
        }
        )());
        qt(async () => {
            p = window.setInterval(async () => {
                const g = new Date("2025-09-30T00:00:00+09:00")
                  , m = new Date
                  , T = g.getTime() - m.getTime()
                  , w = Math.ceil(T / (1e3 * 60 * 60 * 24));
                i.value = w > 0 ? `D-${w}` : w === 0 ? "D-Day" : `D+${-w}`;
                try {
                    const P = await ie.get("https://back-dimiboard.coder.ac/notice");
                    console.log(P.data),
                    Z.value = P.data
                } catch (P) {
                    console.error("Error fetching data:", P)
                }
            }
            , 1e4)
        }
        ),
        pn( () => {
            p && clearInterval(p)
        }
        );
        const N = ye( () => O.room.length)
          , M = ye( () => s - N.value)
          , L = ye( () => r.filter(g => g !== "room"))
          , H = ce("")
          , Z = ce([]);
        ce("");
        const W = ye( () => {
            const g = Number(H.value.trim());
            return Number.isFinite(g) ? g : null
        }
        )
          , ne = Mt({});
        Gt(ne, g => {
            const m = {};
            for (const [T,w] of Object.entries(g)) {
                const P = Number(T);
                Number.isFinite(P) && typeof w == "string" && (m[P] = w)
            }
            localStorage.setItem($s, JSON.stringify(m))
        }
        , {
            deep: !0
        }),
        qt( () => {
            try {
                const g = localStorage.getItem($s);
                if (g) {
                    const m = JSON.parse(g);
                    for (const [T,w] of Object.entries(m)) {
                        const P = Number(T);
                        Number.isFinite(P) && (ne[P] = w)
                    }
                }
            } catch {}
        }
        );
        const Ce = ce("");
        let Te = null;
        qt(async () => {
            const g = new Intl.DateTimeFormat("ko-KR",{
                dateStyle: "full",
                timeStyle: "medium"
            })
              , m = () => Ce.value = g.format(new Date);
            m(),
            Te = window.setInterval(m, 1e3),
            u();
            const T = new Date
              , P = new Date("2025-09-03T00:00:00+09:00").getTime() - T.getTime()
              , U = Math.ceil(P / (1e3 * 60 * 60 * 24));
            i.value = U > 0 ? `D-${U}` : U === 0 ? "D-Day" : `D+${-U}`;
            try {
                const K = await ie.get("https://back-dimiboard.coder.ac/notice");
                console.log(K.data),
                Z.value = K.data
            } catch (K) {
                console.error("Error fetching data:", K)
            }
        }
        ),
        pn( () => {
            Te && clearInterval(Te),
            a && clearTimeout(a)
        }
        ),
        Gt(O, () => {
            localStorage.setItem(ks, JSON.stringify(O))
        }
        , {
            deep: !0
        });
        const Ue = g => [...g].sort( (m, T) => m - T);
        function Be(g, m) {
            let T = null;
            if (m === "etc" && (T = (prompt("기타로 이동하는 사유를 입력하세요.") || "").trim(),
            !T)) {
                alert("사유를 입력해야 기타로 이동할 수 있습니다.");
                return
            }
            r.forEach(w => {
                const P = O[w].indexOf(g);
                P >= 0 && O[w].splice(P, 1)
            }
            ),
            O[m].push(g),
            m === "etc" && T ? ne[g] = T : ne[g] && delete ne[g],
            D()
        }
        function De() {
            const g = Array.from(new Set(r.flatMap(T => O[T]))).sort( (T, w) => T - w)
              , m = C();
            m.room = g,
            Object.assign(O, m);
            for (const T of Object.keys(ne))
                delete ne[T]
        }
        function bt() {
            if (confirm("모든 배치를 초기화하고 저장을 삭제하시겠습니까?")) {
                localStorage.removeItem(ks),
                Object.assign(O, C());
                for (const g of Object.keys(ne))
                    delete ne[g];
                localStorage.removeItem($s)
            }
        }
        const He = ce(null)
          , le = ce(null)
          , J = ce(null)
          , z = ce(null);
        function Fe(g, m) {
            He.value = g,
            m.dataTransfer?.setData("text/plain", String(g)),
            m.dataTransfer.effectAllowed = "move"
        }
        function qe() {
            He.value = null,
            le.value = null
        }
        function Me(g, m) {
            le.value = g
        }
        function fe(g) {
            le.value = null
        }
        function at(g) {
            He.value != null && Be(He.value, g),
            He.value = null,
            le.value = null
        }
        const Ve = ce(!1)
          , Ke = ce(null)
          , de = ce(null)
          , S = ce(null);
        function j(g, m) {
            return document.elementFromPoint(g, m)?.closest("[data-lane]")?.getAttribute("data-lane") || null
        }
        function F(g) {
            if (S.value && S.value.classList.remove("drop-hint"),
            !g) {
                S.value = null;
                return
            }
            const m = document.querySelector(`[data-lane="${g}"]`);
            m && (m.classList.add("drop-hint"),
            S.value = m)
        }
        function k(g) {
            const m = document.createElement("div");
            m.className = "chip drag-ghost",
            m.textContent = g,
            document.body.appendChild(m),
            Ke.value = m
        }
        function G(g, m) {
            Ke.value && (Ke.value.style.transform = `translate(${g}px, ${m}px)`)
        }
        function d() {
            Ke.value?.parentElement && Ke.value.parentElement.removeChild(Ke.value),
            Ke.value = null
        }
        function h(g, m) {
            m.pointerType !== "mouse" && (Ve.value || z.value !== null || (z.value = m.pointerId,
            m.target.setPointerCapture?.(m.pointerId),
            Ve.value = !0,
            de.value = g,
            k(String(g)),
            G(m.clientX, m.clientY),
            J.value?.classList.add("dragging"),
            m.preventDefault()))
        }
        function b(g) {
            if (g.pointerId !== z.value || !Ve.value)
                return;
            G(g.clientX, g.clientY);
            const m = j(g.clientX, g.clientY);
            F(m)
        }
        function E(g) {
            if (!Ve.value || g.pointerId !== z.value)
                return;
            const m = j(g.clientX, g.clientY);
            de.value != null && m && Be(de.value, m),
            Ve.value = !1,
            de.value = null,
            F(null),
            d(),
            z.value = null,
            J.value?.classList.remove("dragging")
        }
        qt( () => {
            window.addEventListener("pointermove", b, {
                passive: !1
            }),
            window.addEventListener("pointerup", E, {
                passive: !1
            }),
            window.addEventListener("pointercancel", E, {
                passive: !1
            })
        }
        ),
        pn( () => {
            window.removeEventListener("pointermove", b),
            window.removeEventListener("pointerup", E),
            window.removeEventListener("pointercancel", E)
        }
        );
        const R = Mt({
            open: !1,
            x: 0,
            y: 0,
            num: null
        });
        function x(g, m) {
            R.open = !0,
            R.num = m;
            const T = 200
              , w = 210;
            R.x = Math.min(g.clientX, window.innerWidth - T - 12),
            R.y = Math.min(g.clientY, window.innerHeight - w - 12)
        }
        function D() {
            R.open = !1,
            R.num = null
        }
        window.addEventListener("click", g => {
            const m = g.target;
            m.closest("#menu") || m.closest(".chip") || D()
        }
        );
        function I() {
            const g = document.documentElement;
            document.fullscreenElement ? document.exitFullscreen?.() : g.requestFullscreen?.()
        }
        return t({
            TOTAL: s,
            LANES: r,
            lanes: O,
            moveTo: Be,
            resetAll: bt,
            allIn: De,
            present: N,
            absent: M,
            laneTitles: o
        }),
        (g, m) => (pe(),
        Ee(ge, null, [m[9] || (m[9] = $("div", {
            class: "fireworks-container",
            style: {
                position: "fixed",
                left: "0",
                top: "0",
                width: "100%",
                height: "100%"
            }
        }, null, -1)), $("div", {
            class: "wrap",
            ref_key: "wrapEl",
            ref: J
        }, [$("header", hh, [$("div", ph, [$("h1", null, ue(y.value) + "학년 " + ue(_.value) + "반 인원 현황", 1), $("span", mh, ue(Ce.value), 1)]), $("div", {
            class: "toolbar"
        }, [$("button", {
            class: "btn ghost",
            onClick: I
        }, "전체 화면"), $("button", {
            class: "btn ok",
            onClick: De
        }, "모두 교실"), $("button", {
            class: "btn warn",
            onClick: bt
        }, "초기화")])]), $("main", gh, [$("aside", yh, [$("div", bh, [$("div", vh, [m[4] || (m[4] = $("span", {
            class: "label",
            style: {
                "font-size": "17px"
            }
        }, "총원", -1)), $("span", _h, ue(ke(s)) + "명", 1)]), $("div", wh, [m[5] || (m[5] = $("span", {
            class: "label",
            style: {
                "font-size": "17px"
            }
        }, "현원(교실)", -1)), $("span", Eh, ue(N.value) + "명", 1)]), $("div", Sh, [m[6] || (m[6] = $("span", {
            class: "label",
            style: {
                "font-size": "17px"
            }
        }, "결원", -1)), $("span", Rh, ue(M.value) + "명", 1)])])]), $("section", xh, [$("div", Ch, [$("div", {
            class: "lane room",
            "data-lane": "room",
            onDragover: m[0] || (m[0] = Bt(T => Me("room"), ["prevent"])),
            onDragleave: m[1] || (m[1] = T => fe()),
            onDrop: m[2] || (m[2] = Bt(T => at("room"), ["prevent"]))
        }, [$("div", Th, [m[7] || (m[7] = $("div", {
            class: "lane-title"
        }, [$("span", null, "교실")], -1)), $("div", Ah, [$("span", null, ue(ke(O).room.length) + "명", 1)])]), $("div", Oh, [(pe(!0),
        Ee(ge, null, Ut(Ue(ke(O).room), T => (pe(),
        Ee("button", {
            key: `room-${T}`,
            class: Dt(["chip", {
                highlight: W.value === T
            }]),
            draggable: "true",
            onDragstart: w => Fe(T, w),
            onDragend: qe,
            onClick: w => x(w, T),
            onPointerdown: w => h(T, w)
        }, ue(T), 43, Ph))), 128))])], 32), (pe(!0),
        Ee(ge, null, Ut(L.value, T => (pe(),
        Ee("div", {
            key: T,
            class: "lane",
            "data-lane": T,
            onDragover: Bt(w => Me(T), ["prevent"]),
            onDragleave: w => fe(),
            onDrop: Bt(w => at(T), ["prevent"])
        }, [$("div", Ih, [$("div", Dh, [$("span", null, ue(o[T]), 1)]), $("div", Fh, [$("span", null, ue(ke(O)[T].length) + "명", 1)])]), $("div", Mh, [T !== "etc" ? (pe(!0),
        Ee(ge, {
            key: 0
        }, Ut(Ue(ke(O)[T]), w => (pe(),
        Ee("button", {
            key: `${T}-${w}`,
            class: Dt(["chip", {
                highlight: W.value === w
            }]),
            draggable: "true",
            onDragstart: P => Fe(w, P),
            onDragend: qe,
            onClick: P => x(P, w),
            onPointerdown: P => h(w, P)
        }, ue(w), 43, Lh))), 128)) : (pe(!0),
        Ee(ge, {
            key: 1
        }, Ut(Ue(ke(O).etc), w => (pe(),
        Ee("div", {
            key: `etc-${w}`,
            class: Dt(["chip chip-etc", {
                highlight: W.value === w
            }]),
            "data-num": w,
            draggable: "true",
            onDragstart: P => Fe(w, P),
            onDragend: qe,
            onClick: P => x(P, w),
            onPointerdown: P => h(w, P)
        }, [$("div", kh, ue(w), 1), $("div", $h, ue(ne[w] || "사유 없음"), 1)], 42, jh))), 128))])], 40, Nh))), 128))])]), $("aside", Uh, [$("div", Bh, [m[8] || (m[8] = $("span", null, "1차 지필평가", -1)), $("h1", null, ue(i.value), 1)])])])], 512), R.open ? (pe(),
        Ee("div", {
            key: 0,
            id: "menu",
            class: "menu",
            role: "menu",
            style: ls({
                left: R.x + "px",
                top: R.y + "px"
            }),
            onClick: m[3] || (m[3] = Bt( () => {}
            , ["stop"]))
        }, [(pe(),
        Ee(ge, null, Ut(r, T => $("button", {
            key: `menu-${T}`,
            onClick: w => Be(R.num, T)
        }, " → " + ue(o[T]), 9, Hh)), 64))], 4)) : _a("", !0)], 64))
    }
})
  , Vh = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [s,r] of t)
        n[s] = r;
    return n
}
  , Kh = {
    class: "app"
}
  , zh = {
    class: "panel"
}
  , Wh = {
    class: "form"
}
  , Jh = ["onKeydown"]
  , Gh = {
    class: "notice"
}
  , Xh = {
    class: "notice-ul"
}
  , Yh = ["onClick"]
  , Qh = {
    class: "type-tag"
}
  , Zh = {
    class: "title"
}
  , ep = {
    __name: "AdminView",
    setup(e) {
        const t = ce("")
          , n = ce([])
          , s = ce(!1)
          , r = ce("");
        async function o() {
            try {
                const a = await ie.get("https://back-dimiboard.coder.ac/notice");
                console.log(a.data),
                n.value = a.data
            } catch (a) {
                console.error("Error fetching data:", a)
            }
        }
        qt( () => {
            o(),
            console.log(n.value)
        }
        );
        async function i() {
            if (s.value)
                return;
            const a = t.value.trim();
            if (!a)
                return;
            t.value = "";
            const u = r.value || "기타";
            try {
                const p = await ie.post("https://back-dimiboard.coder.ac/notice", {
                    title: a,
                    type: u,
                    deadline: new Date(new Date().getTime() - new Date().getTimezoneOffset() * 6e4).toISOString().slice(0, 10)
                });
                n.value = p.data,
                r.value = ""
            } catch (p) {
                console.error("Error fetching data:", p)
            }
            await o()
        }
        async function l(a) {
            if (confirm("이 공지를 삭제하시겠습니까?")) {
                try {
                    const u = await ie.delete("https://back-dimiboard.coder.ac/notice", {
                        data: {
                            id: n.value[a].id
                        }
                    });
                    n.value = u.data
                } catch (u) {
                    console.error("Error fetching data:", u)
                }
                await o()
            }
        }
        function c() {
            confirm("모든 공지를 삭제하시겠습니까?") && (n.value = [])
        }
        function f(a) {
            const u = a || "";
            return u === "국어" ? "c-orange" : u === "수학" ? "c-green" : u === "사회" ? "c-yellow" : u === "과학" ? "c-blue" : u === "영어" ? "c-red" : u === "Python" || u === "인공지능" || u === "기타" ? "c-dark" : ""
        }
        return (a, u) => (pe(),
        Ee("div", Kh, [u[6] || (u[6] = $("h1", null, "DimiBoard 관리자 패널", -1)), $("div", zh, [$("div", Wh, [$r($("input", {
            "onUpdate:modelValue": u[0] || (u[0] = p => t.value = p),
            class: "input",
            placeholder: "공지 내용을 입력하고 Enter 또는 추가",
            onKeydown: su(Bt(i, ["exact", "prevent"]), ["enter"]),
            onCompositionstart: u[1] || (u[1] = p => s.value = !0),
            onCompositionend: u[2] || (u[2] = p => s.value = !1)
        }, null, 40, Jh), [[Qa, t.value]]), $r($("select", {
            "onUpdate:modelValue": u[3] || (u[3] = p => r.value = p),
            class: "select",
            "aria-label": "과목 선택"
        }, u[4] || (u[4] = [va('<option disabled value="" data-v-dc0017ee>과목</option><option value="국어" data-v-dc0017ee>국어</option><option value="영어" data-v-dc0017ee>영어</option><option value="수학" data-v-dc0017ee>수학</option><option value="사회" data-v-dc0017ee>사회</option><option value="과학" data-v-dc0017ee>과학</option><option value="Python" data-v-dc0017ee>Python</option><option value="인공지능" data-v-dc0017ee>인공지능</option><option value="체육" data-v-dc0017ee>체육</option><option value="미술" data-v-dc0017ee>미술</option>', 10)]), 512), [[Za, r.value]]), $("button", {
            class: "btn",
            onClick: i
        }, "추가"), $("button", {
            class: "btn ghost",
            onClick: c,
            title: "모든 공지 삭제"
        }, "전체삭제")]), $("div", Gh, [u[5] || (u[5] = $("span", {
            style: {
                "font-weight": "600",
                "font-size": "1.1rem"
            }
        }, "수행평가 및 공지사항", -1)), $("ul", Xh, [(pe(!0),
        Ee(ge, null, Ut(n.value, (p, y) => (pe(),
        Ee("li", {
            onClick: _ => l(y),
            key: y,
            class: Dt(f(p.type))
        }, [$("span", Qh, ue(p.type || "기타"), 1), $("span", Zh, ue(p.title), 1)], 10, Yh))), 128))])])])]))
    }
}
  , tp = Vh(ep, [["__scopeId", "data-v-dc0017ee"]])
  , np = [{
    path: "/judy",
    component: tp
}, {
    path: "/:id?",
    component: qh
}]
  , sp = uf({
    history: $u(),
    routes: np
})
  , Fl = iu(pf);
Fl.use(sp);
Fl.mount("#app");
